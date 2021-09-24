import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteActivity, GetActivities, PostActivity, PutActivity } from '../Services/ActivitiesService';

const initialState = {
  activities: [],
  status: false
};

export const getActivity = createAsyncThunk(
  'activities/getActivity',
  async (id) => {
    const res = await GetActivities(id);
    return res;
  }
);

export const deleteActivity = createAsyncThunk(
  'activities/deleteActivity',
  async (id) => {
    const res = await DeleteActivity(id);
    return {res, id};
  }
);

export const putActivity = createAsyncThunk(
  'activities/putActivity',
  async (activity) => {
    const {id, data} = activity;
    const res = await PutActivity(id, data);
    return res;
  }
);

export const postActivity = createAsyncThunk(
  'activities/postActivity',
  async (data) => {
    const res = await PostActivity(data);
    return res;
  }
);


export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers: {
    // Method Get
    [getActivity.pending]: (state) => {
      state.status = false;
    },
    [getActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.activities = payload.data;
      } else {
        state.status = false;
      }
    },
    [getActivity.rejected]: (state) => {
      state.status = false;
    },

    // Method Delete
    [deleteActivity.pending]: (state) => {
      state.status = false;
    },
    [deleteActivity.fulfilled]: (state, { payload: {res, id} }) => {
      if (res.success) {
        state.status = true;
        state.activities = state.activities.filter(activity => activity.id !== id);
      } else {
        state.status = false;
      }
    },
    [deleteActivity.rejected]: (state) => {
      state.status = false;
    },

    // Method Put
    [putActivity.pending]: (state) => {
      state.status = false;
    },
    [putActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.activities = state.activities.map(activity => activity.id === payload.data.id ? payload.data : activity);
      } else {
        state.status = false;
      }
    },
    [putActivity.rejected]: (state) => {
      state.status = false;
    },

    // Method Post
    [postActivity.pending]: (state) => {
      state.status = false;
    },
    [postActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = true;
        state.activities = [...state.activities, payload.data];
      } else {
        state.status = false;
      }
    },
    [postActivity.rejected]: (state) => {
      state.status = false;
    },
  }
});

export const activitiesReducer = activitiesSlice.reducer;

