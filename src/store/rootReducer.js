import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// we'll add dashboard reducers later

const rootReducer = combineReducers({
  auth: authReducer,
  // dashboard: dashboardReducer,
});

export default rootReducer;