import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { firebaseApp } from 'features/Authentication/firebase';
import { getAuth } from 'firebase/auth';
import { resetStateAction } from 'shared/redux/actions/reset';

export const MAIN_API_REDUCER_KEY = 'mainAPI';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_ENDPOINT,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('firebaseToken');
    headers.set('Access-Control-Allow-Origin', '*');
    if (token && token !== null && token !== '') {
      headers.set('Authorization', token);
    }
    return headers;
  }
});

const refreshToken = () =>
  new Promise(async (resolve) => {
    const auth = getAuth(firebaseApp);
    await auth.currentUser?.reload();
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const newToken = await user?.getIdToken();
        if (newToken) {
          resolve(newToken);
        } else {
          resolve('failed');
        }
      } else {
        resolve('failed');
      }
    });
  });

const onRedirect = (callback?: () => void) => {
  if ((window as any).inviteURL) {
    window.location.href = (window as any).inviteURL;
    localStorage.setItem('teamRedirect', 'true');
  } else {
    if (callback) callback();
    else window.location.reload();
  }
};

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  theApi,
  extraOptions
) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, theApi, extraOptions);
  if (result.error && (result.error.status === 401 || result.error.status === 412)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshedToken: any = await refreshToken();
        if (
          refreshedToken &&
          refreshedToken !== 'failed' &&
          refreshedToken !== null &&
          refreshedToken !== ''
        ) {
          const token = localStorage.getItem('firebaseToken');
          if (token !== null) {
            localStorage.setItem('firebaseToken', token.replaceAll(':', ''));
          }
          const refreshResult = await baseQuery(
            { url: '/web/sessions', method: 'POST', body: { tokenID: refreshedToken } },
            theApi,
            extraOptions
          );
          if (refreshResult.data) {
            localStorage.setItem('firebaseToken', refreshedToken);
            result = await baseQuery(args, theApi, extraOptions);
          } else {
            theApi.dispatch(resetStateAction());
            onRedirect();
          }
        } else {
          theApi.dispatch(resetStateAction());
          onRedirect();
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, theApi, extraOptions);
    }
  } else if (result.error?.status === 432) {
    theApi.dispatch(resetStateAction());
    onRedirect(() => {
      window.location.href = '/';
    });
  }
  return result;
};

// initialize an empty api service that we'll inject endpoints into later as needed
const api = createApi({
  reducerPath: MAIN_API_REDUCER_KEY,
  tagTypes: ['Session', 'Discount', 'DiscountSingle', 'DiscountCode','Invitation'],
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 30,
  endpoints: () => ({})
});

export default api;
