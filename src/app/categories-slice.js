import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { deleteCategory, getCategories, getCategory, putCategory, postCategory, seachCategory } from '../Services/categoryService';
export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory', async (id) => {
    let res;
    if(id){
      res = await getCategory(id);
    }
    else{
      res = await getCategories();
    }
    return res;
  }
);
export const removeCategory = createAsyncThunk(
  'categories/removeCategory',
  async (id) => {
    const res = await deleteCategory(id);
    return {res, id};
  }
);
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async (category) => {
    const {id,data} = category;
    const res = await putCategory(id,data);
    return res;
  }
);
export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category) => {
    const res = await postCategory(category);
    return res;
  }
);
export const seachCategoryQuery = createAsyncThunk(
  'categories/seachCategory',
  async( search ) => {
    const res = await seachCategory(search);
    return res;
  }
);
const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers:{
    [fetchCategory.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCategory.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.categories = payload.data;
      }
    },
    [fetchCategory.rejected]: (state) => {
      state.status = 'failed';
    },
    [removeCategory.pending]: (state) => {
      state.status = 'loading';
    },

    [removeCategory.fulfilled]: (state, { payload: {res, id} }) => {
      if (res.success) {
        state.status = 'success';
        state.categories = state.categories.filter(category => category.id !== id);
      }
    },
    [removeCategory.rejected]: (state) => {
      state.status = 'failed';
    },
    [updateCategory.pending]: (state) => {
      state.status = 'loading';
    },

    [updateCategory.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';

        state.categories = state.categories.map(Category => Category.id === payload.data.id ? payload.data : Category);
      }
    },
    [updateCategory.rejected]: (state) => {
      state.status = 'failed';
    },
    [addCategory.pending]: (state) => {
      state.status = 'loading';
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.categories = [...state.categories, payload.data];
      }
    },
    [addCategory.rejected]: (state) => {
      state.status = 'failed';
    },
    //seachCategoryQuery
    [seachCategoryQuery.pending]: (state) => {
      state.status = 'loading';
    },
    [seachCategoryQuery.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.status = 'success';
        state.categories = payload.data;
      } else {
        state.status = 'failed';
      }
    },
    [seachCategoryQuery.rejected]: (state) => {
      state.status = 'failed';
    }    
  }
});

export const CategoriesActions = CategoriesSlice.actions;
export default CategoriesSlice;
