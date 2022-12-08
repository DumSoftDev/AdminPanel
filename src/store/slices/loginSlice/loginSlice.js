import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    authStatus: 'authenticated',
  },
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.authStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin } = loginSlice.actions;