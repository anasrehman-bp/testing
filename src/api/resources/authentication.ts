import api from 'api/api';
import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth';
import { firebaseApp } from 'features/Authentication/firebase';
import {
  updateAccessToken,
  updateSession,
  updateFirebaseUser,
  updateUser
} from 'features/Authentication/slice';

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<any, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const auth = getAuth(firebaseApp);
          let firebaseResponse: any;
          const provider = new GoogleAuthProvider();
          firebaseResponse = await signInWithPopup(auth, provider);
          const token = firebaseResponse.user.accessToken;
          _queryApi.dispatch(updateFirebaseUser(firebaseResponse.user));
          _queryApi.dispatch(updateAccessToken(token));
          const sessionResponse: any = await fetchWithBQ({
            url: '/sessions',
            method: 'POST'
          });
          const { data } = sessionResponse;
          if (data) {
            _queryApi.dispatch(updateSession(data.session));
            _queryApi.dispatch(updateUser(data.user));
          }

          if (sessionResponse.error) throw sessionResponse.error;
          return {
            data: data.user
          };
        } catch (error: any) {
          return error.status ? { error } : { error: { status: 400, data: error } };
        }
      },
      invalidatesTags: ['Session']
    }),

    getFirebaseToken: build.mutation<string, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const auth = getAuth(firebaseApp);
          const provider = new GoogleAuthProvider();
          const firebaseResponse: UserCredential = await signInWithPopup(auth, provider);
          const token: string = await firebaseResponse.user.getIdToken();
          return { data: token };
        } catch (e) {
          return {
            error: {
              status: 500,
              statusText: 'Internal Server Error',
              data: "Coin landed on it's edge!"
            }
          };
        }
      }
    }),

    signUp: build.mutation<UserEntity, SignUpRequest>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body
      })
    }),

    verifyInvitation: build.mutation<any, string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const userResponse: any = await fetchWithBQ({
            url: `/invitations/${_arg}`
          });
          if (userResponse.error) throw userResponse.error;
          return {
            data: userResponse
          };
        } catch (error: any) {
          return error.status ? { error } : { error: { status: 400, data: error } };
        }
      },
      invalidatesTags: ['Session']
    }),

    updatePin: build.mutation<any, UpdatePasswordRequest>({
      query: ({ password, userID }) => ({
        url: `/users/${userID}`,
        method: 'PUT',
        body: { password }
      })
    })
  }),
  overrideExisting: false
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetFirebaseTokenMutation,
  useUpdatePinMutation,
  useVerifyInvitationMutation
} = authAPI;

export interface SignUpRequest {
  token: string;
  invitationID: string;
  pin: string;
}

export interface UpdatePasswordRequest {
  password: string;
  userID: string;
}

export interface UserSignUpResponse {
  data: UserEntity;
  error: any;
}

export interface UserEntity {
  bar_code: string;
  created_at: string;
  email: string;
  employee_id: string;
  member_id: string;
  password: string;
  role_id: string;
  updated_at: string;
  user_id: string;
}
