import { configureStore } from '@reduxjs/toolkit';
import quotesReducer from './slices/quotesSlice';

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
