import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import api, { MAIN_API_REDUCER_KEY } from 'api/api';
import { authReducer, authSlice } from 'features/Authentication/slice';
import { RESET_STATE_ACTION_TYPE } from './actions/reset';
import { rtkQueryErrorLogger, successMessageLogger, restrictionsMiddleware } from './middlewares';
import { commonReducer, commonSlice } from './slices/common';

const reducers = {
  [MAIN_API_REDUCER_KEY]: api.reducer,
  [authSlice.name]: authReducer,
  [commonSlice.name]: commonReducer
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      rtkQueryErrorLogger,
      restrictionsMiddleware,
      api.middleware,
      successMessageLogger
    ])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = (): any => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
