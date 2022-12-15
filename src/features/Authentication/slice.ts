import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'shared/redux/store';
import { Permission } from 'shared/types';
import { GetSessionResponseTransformed } from 'api';

import { AuthSliceInterface } from './types';

const initialState: AuthSliceInterface = {
  mode: 'light'
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateAccessToken(state, action: PayloadAction<string | undefined>) {
      state.firebaseToken = action.payload;
      if (action.payload) {
        localStorage.setItem('firebaseToken', action.payload);
      }
    },
    updateFirebaseUser(state, action: PayloadAction<any | undefined>) {
      state.firebaseUser = action.payload;
      if (action.payload) {
        localStorage.setItem('firebaseUser', JSON.stringify(action.payload));
      }
    },
    updateUser(state, action: PayloadAction<any | undefined>) {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
    },
    updateSession(state, action: PayloadAction<GetSessionResponseTransformed | undefined>) {
      state.session = action.payload;
      if (action.payload) {
        localStorage.setItem('session', JSON.stringify(action.payload));
      }
    },
    updateMode(state, action: PayloadAction<string | string>) {
      state.mode = action.payload;
      if (action.payload) {
        localStorage.setItem('mode', action.payload);
      }
    }
  }
});

export const authReducer = authSlice.reducer;

export const { updateAccessToken, updateSession, updateMode, updateFirebaseUser, updateUser } =
  authSlice.actions;
export const getFirebaseToken = (): string | undefined => {
  const data = localStorage.getItem('firebaseToken');
  return data && data !== '' && data !== null ? data : '';
};

export const getFirebaseUser = (): string | any => {
  const data = localStorage.getItem('firebaseUser');
  return data && data !== '' && data !== null ? JSON.parse(data) : undefined;
};

export const getSession = (): GetSessionResponseTransformed | undefined => {
  const data = localStorage.getItem('session');
  return data && data !== '' && data !== null ? JSON.parse(data) : undefined;
};

export const getUser = (): any | undefined => {
  const data = localStorage.getItem('user');
  return data && data !== '' && data !== null ? JSON.parse(data) : undefined;
};

export const getPermission = (): { [key: string]: Permission } | null => {
  const data = localStorage.getItem('session');
  const session: GetSessionResponseTransformed =
    data && data !== '' && data !== null ? JSON.parse(data) : undefined;
  return session ? session.permissions : null;
};

export const getMode = (state: RootState): string =>
  localStorage.getItem('mode') === 'dark' || state.authentication.mode === 'dark'
    ? 'dark'
    : 'light';
