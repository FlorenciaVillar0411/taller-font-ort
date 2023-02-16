import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import movisSlice from './slices/movisSlice';

export const store = configureStore({
  reducer: {
    user: userSlice
  },
});
