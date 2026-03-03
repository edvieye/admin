
// import { loginAPI, forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI } from '../features/auth/authAPI';

// export const login = async (email, password, role) => {
//   return loginAPI(email, password, role);
// };

// export const logout = async () => {
//   return Promise.resolve();
// };


// export const logoutAPI = (refreshToken) => {
//   return api.post('/auth/logout', { refreshToken });
// };

// // This function is now optional; you can remove it or keep it as a sync function.
// export const getCurrentUser = () => {
//   const userStr = localStorage.getItem('user');
//   if (!userStr) throw new Error('No user');
//   return JSON.parse(userStr);
// };

// export { forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI };


import api from './api.js';
import {
  loginAPI,
  forgotPasswordAPI,
  verifyOTPAPI,
  resetPasswordAPI,
} from '../features/auth/authAPI';

// Login wrapper
export const login = async (email, password, role) => {
  return loginAPI(email, password, role);
};

// Logout API
export const logoutAPI = (refreshToken) => {
  return api.post('/auth/logout', { refreshToken });
};

// Optional local logout (frontend only)
export const logout = async () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  return Promise.resolve();
};

// Get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (!userStr) throw new Error('No user');
  return JSON.parse(userStr);
};

export { forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI };