import {configureStore} from '@reduxjs/toolkit';

import booksReducer from '../features/books/booksSlice';

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

// Define the dispatch function type
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
