import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => ... (we'll add later if needed)
});

export default store;