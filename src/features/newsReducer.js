import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteNews, GetNews, PostNews, PutNews} from '../Services/NovedadesService';

const initialState = {
  news: [],
  status: false
};

export const getNews = createAsyncThunk(
  'news/getNews',
  async (id) => {
    const res = await GetNews(id);
    return res;
  }
);

export const postNews = createAsyncThunk(
  'news/postNews',
  async (data) => {
    const res = await PostNews(data);
    return res;
  }
);

export const putNews = createAsyncThunk(
  'news/putNews',
  async (news) => {
    const {id, data} = news;
    const res = await PutNews(id, data);
    return res;
  }
);

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id) => {
    const res = await DeleteNews(id);
    return {res, id};
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state) => {
      state.status = false;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.news = payload.data;
      } else {
        state.status = false;
      }
    },
    [getNews.rejected]: (state) => {
      state.status = false;
    },

    [postNews.pending]: (state) => {
      state.status = false;
    },
    [postNews.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.news = [...state.news, payload.data];
      } else {
        state.status = false;
      }
    },
    [postNews.rejected]: (state) => {
      state.status = false;
    },
    
    [putNews.pending]: (state) => {
      state.status = false;
    },
    [putNews.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.news = state.news.map(newItem => newItem.id === payload.data.id ? payload.data : newItem);
      } else {
        state.status = false;
      }
    },
    [putNews.rejected]: (state) => {
      state.status = false;
    },

    [deleteNews.pending]: (state) => {
      state.status = false;
    },
    [deleteNews.fulfilled]: (state, { payload: {res, id} }) => {
      if (res.success) {
        state.status = true;
        state.news = state.news.filter(newItem => newItem.id !== id);
      } else {
        state.status = false;
      }
    },
    [deleteNews.rejected]: (state) => {
      state.status = false;
    },
  }
});

export const newsReducer = newsSlice.reducer;

