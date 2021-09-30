import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DeleteMembers,
  GetMembers,
  PostMembers,
  PutMembers,
  PatchMembers
} from "../Services/MembersService";

const initialState = {
  members: [],
  status: false
}

export const getMembers = createAsyncThunk(
  'members/getMembers',
  async () => {
    const res = await GetMembers();
    return res;
  }
);

export const deleteMembers = createAsyncThunk(
  'members/deleteMembers',
  async (id) => {
    const res = await DeleteMembers(id);
    return {res, id};
  }
);

export const putMembers = createAsyncThunk(
  'members/putMembers',
  async (member) => {
    const {id, data} = member
    const res = await PutMembers(id, data);
    return res;
  }
);

export const patchMembers = createAsyncThunk(
  'members/patchMembers',
  async (member) => {
    const {id, data} = member
    const res = await PatchMembers(id, data);
    return res;
  }
);

export const postMembers = createAsyncThunk(
  'members/postMembers',
  async (member) => {
    console.log(member)
    const res = await PostMembers(member);
    return res;
  }
);

export const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {
    // Método get.
    [getMembers.pending]: (state) => {//Si la petición está pendiente.
      state.status = 'loading';
    },
    [getMembers.fulfilled]: (state, { payload }) => {//Si la petición es correcta.
      if (payload.success) {
        state.status = 'success';
        state.members = payload.data;
      }
    },
    [getMembers.rejected]: (state) => {//Si la petición falló.
      state.status = 'failed';
    },

    // Método delete.
    [deleteMembers.pending]: (state) => {//Si la petición está pendiente.
      state.status = 'loading';
    },
    [deleteMembers.fulfilled]: (state, { payload: {res, id} }) => {//Si la petición es correcta.
      if (res.success) {
        state.status = 'success';
        state.members = state.members.filter(member => member.id !== id);
      }
    },
    [deleteMembers.rejected]: (state) => {//Si la petición falló.
      state.status = 'failed';
    },

    // Método putMembers.
    [putMembers.pending]: (state) => {//Si la petición está pendiente.
      state.status = 'loading';
    },
    [putMembers.fulfilled]: (state, { payload }) => {//Si la petición es correcta.
      if (payload.success) {
        state.status = 'success';
        state.members= state.members.map(member => member.id === payload.data.id ? payload.data : member);
      }
    },
    [putMembers.rejected]: (state) => {//Si la petición falló.
      state.status = 'failed';
    },

    // Método patchMembers.
    [patchMembers.pending]: (state) => {//Si la petición está pendiente.
      state.status = 'loading';
    },
    [patchMembers.fulfilled]: (state, { payload }) => {//Si la petición es correcta.
      if (payload.success) {
        state.status = 'success';
        state.members= state.members.map(member => member.id === payload.data.id ? payload.data : member);
      }
    },
    [patchMembers.rejected]: (state) => {//Si la petición falló.
      state.status = 'failed';
    },

    // Método postMembers.
    [postMembers.pending]: (state) => {//Si la petición está pendiente.
      state.status = 'loading';
    },
    [postMembers.fulfilled]: (state, { payload }) => {//Si la petición es correcta.
      if (payload.success) {
        state.status = 'success';
        state.members = [...state.members, payload.data];
      }
    },
    [postMembers.rejected]: (state) => {//Si la petición falló.
      state.status = 'failed';
    },

  }
});

export const membersReducer = memberSlice.reducer;