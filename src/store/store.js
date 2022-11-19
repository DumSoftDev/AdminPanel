import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from './slices/sideBarSlice';
import { themeSlice } from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    sideBar: sideBarSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
