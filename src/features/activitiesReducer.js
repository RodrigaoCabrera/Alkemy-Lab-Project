import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteActivity, GetActivities, GetActivitiesWithQuery, PostActivity, PutActivity } from '../Services/ActivitiesService';

const initialState = {
  activities: [],
  status: 'idle'
};

export const getActivity = createAsyncThunk(
  'activities/getActivity',
  async (id) => {
    const res = await GetActivities(id);
    return res;
  }
);
export const getActivitiesWithQuery = createAsyncThunk(
  'activities/getActivity',
  async (search) => {
    const res = await GetActivitiesWithQuery(search);
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
      state.status = 'loading';

    },
    [getActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.activities = payload.data;
      } else {
        state.status = 'failed';
      }
    },
    [getActivity.rejected]: (state) => {
      state.status = 'failed';
    },
    // Method GetWithQuery
    [getActivitiesWithQuery.pending]: (state) => {
      state.status = 'loading';

    },
    [getActivitiesWithQuery.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.activities = payload.data;
      } else {
        state.status = 'failed';
      }
    },
    [getActivitiesWithQuery.rejected]: (state) => {
      state.status = 'failed';
    },
    // Method Delete
    [deleteActivity.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteActivity.fulfilled]: (state, { payload: {res, id} }) => {
      if (res.success) {
        state.status = 'success';
        state.activities = state.activities.filter(activity => activity.id !== id);
      } else {
        state.status = 'failed';
      }
    },
    [deleteActivity.rejected]: (state) => {
      state.status = 'failed';
    },

    // Method Put
    [putActivity.pending]: (state) => {
      state.status = 'loading';
    },
    [putActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.activities = state.activities.map(activity => activity.id === payload.data.id ? payload.data : activity);
      } else {
        state.status = 'failed';
      }
    },
    [putActivity.rejected]: (state) => {
      state.status = 'failed';
    },

    // Method Post
    [postActivity.pending]: (state) => {
      state.status = 'loading';
    },
    [postActivity.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.activities = [...state.activities, payload.data];
      } else {
        state.status = 'failed';
      }
    },
    [postActivity.rejected]: (state) => {
      state.status = 'failed';
    },
  }
});

export const activitiesReducer = activitiesSlice.reducer;

