import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArticlesApi } from '../../api';

const FETCH_ARTICLES = 'fetchArticles';
export const fetchArticles = createAsyncThunk(
  FETCH_ARTICLES,
  async () => {
    return fetchArticlesApi();
  }
);

const initialState = {
  isLoading: false,
  data: [],
  savedArticles: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    saveArticles: (state, {payload}) => {
      state.savedArticles.push(payload);
    },
  },
  extraReducers: {
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.results;
    },
    [fetchArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchArticles.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { reducer: newsReducer, actions: newsActions } = newsSlice;
