import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authReducer';
import counterReducer from '../features/counter/counterSlice';
import CategoriesSlice from './categories-slice';

import { activitiesReducer } from '../features/activitiesReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    activities: activitiesReducer,
    categories: CategoriesSlice.reducer
  },
});
