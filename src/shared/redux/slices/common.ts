import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonSliceInterface, SnackbarInterface } from 'shared/types';

const initialState: CommonSliceInterface = {
  showPermissionModal: false
};

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    togglePermissionModal(state, action: PayloadAction<any | null>) {
      state.showPermissionModal = action.payload;
    },
    updateErrorMessage(state, action: PayloadAction<SnackbarInterface | undefined>) {
      state.snackBar = action.payload;
    }
  }
});

export const commonReducer = commonSlice.reducer;
export const { updateErrorMessage, togglePermissionModal } = commonSlice.actions;
