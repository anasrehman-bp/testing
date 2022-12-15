import { MiddlewareAPI, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { updateErrorMessage } from 'shared/redux/slices/common';
import { SnackbarInterface } from 'shared/types';

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) =>
  (next) =>
  (action): any => {
    if (isRejectedWithValue(action)) {
      if (action.payload.data && action.payload.data.length > 0 && action.payload.status !== 429) {
        api.dispatch(
          updateErrorMessage({
            type: 'error',
            messages: action.payload.data
          })
        );
      }
    }
    return next(action);
  };

const successMessageLogger =
  (api: { dispatch: (arg0: { payload: SnackbarInterface | undefined; type: string }) => void }) =>
  (next: (arg0: any) => any) =>
  (action: {
    meta: {
      arg: {
        endpointName: string;
        originalArgs: { section: any; action: any };
      };
      requestStatus: string;
      baseQueryMeta: { response: { status: number } } | undefined;
    };
    payload: {
      length: number;
      map: (arg0: (p: any) => false | void) => void;
      status: string;
      messages: string;
    };
  }): any => {
    return next(action);
  };
export { rtkQueryErrorLogger, successMessageLogger };
