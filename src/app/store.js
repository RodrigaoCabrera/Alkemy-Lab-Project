import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authReducer';
import counterReducer from '../features/counter/counterSlice';

import { activitiesReducer } from '../features/activitiesReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    activities: activitiesReducer,
  },
});
