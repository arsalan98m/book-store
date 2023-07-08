import {createSlice} from '@reduxjs/toolkit';

import {Book} from '../../models/book';
import {getBooks} from './booksThunk';

type BooksState = {
  books: Book[];
  filteredBooks: Book[];
  isLoading: boolean;
  error: boolean | null;
  bookDetail: Book | null;
};

const initialState: BooksState = {
  books: [],
  filteredBooks: [],
  isLoading: false,
  error: null,
  bookDetail: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    searchBook: (state, {payload}) => {
      state.filteredBooks = state.books.filter(book =>
        book.title.includes(payload),
      );
    },
    loadingHandler: (state, {payload}) => {
      state.isLoading = payload;
    },
    saveBookDetail: (state, {payload}) => {
      state.bookDetail = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = false;

        state.books = payload.data;
        state.filteredBooks = payload.data;
      })
      .addCase(getBooks.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const {searchBook, loadingHandler, saveBookDetail} = booksSlice.actions;

export default booksSlice.reducer;
