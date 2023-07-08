import {createAsyncThunk} from '@reduxjs/toolkit';

import API_URLS from '../../config/api-urls';
import apiClient from '../../config/axios';

// *** GetBooks *** //
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (payload, thunkAPI) => {
    try {
      let response = await apiClient().get(API_URLS.BASE_URL);

      if (response?.status >= 200 && response.status <= 299) {
        return response?.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
