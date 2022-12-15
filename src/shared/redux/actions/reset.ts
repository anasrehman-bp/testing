import { createAction } from '@reduxjs/toolkit';

const removalKeys = [
  'firebaseToken',
  'firebaseUser',
  'session',
  'mode',
  'facit_darkModeStatus',
  'facit_authUsername',
  'user'
];

export const RESET_STATE_ACTION_TYPE = 'resetState';
export const resetStateAction = createAction(RESET_STATE_ACTION_TYPE, () => {
  removalKeys.forEach((key) => {
    localStorage.removeItem(key);
  });
  return { payload: null };
});
