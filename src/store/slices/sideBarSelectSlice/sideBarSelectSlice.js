import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const sideBarSelectSlice = createSlice({
  name: 'sideBarSelect',
  initialState: {
    componentSelect: 'Dashboard',
  },
  reducers: {
    barSelect: (state, action: PayloadAction<string>) => {
      state.componentSelect = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { barSelect } = sideBarSelectSlice.actions;