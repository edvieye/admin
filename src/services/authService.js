// // src/services/authService.js
// import {
//   loginAPI,
//   forgotPasswordAPI,
//   verifyOTPAPI,
//   resetPasswordAPI,
// } from '../features/auth/authapi';

// export const login = async (email, password, role) => {
//   return loginAPI(email, password, role);
// };

// export const logout = async () => {
//   // In a real app, call logout endpoint
//   return Promise.resolve();
// };

// export const getCurrentUser = async () => {
//   // In a real app, fetch user from token
//   // For demo, we'll just return a default user (you might store user in localStorage)
//   const token = localStorage.getItem('token');
//   if (!token) throw new Error('No token');
//   // Simulate fetching user from token – here we decode a fake user
//   // For simplicity, return a superadmin (since we can't decode JWT here)
//   return {
//     id: 1,
//     name: 'Super Admin',
//     email: 'super@school.edu',
//     role: 'superadmin',
//   };
// };

// // Export other functions if needed
// export { forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI };

// src/services/authService.js
import { loginAPI, forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI } from '../features/auth/authapi';

export const login = async (email, password, role) => {
  return loginAPI(email, password, role);
};

export const logout = async () => {
  return Promise.resolve();
};

// This function is now optional; you can remove it or keep it as a sync function.
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (!userStr) throw new Error('No user');
  return JSON.parse(userStr);
};

export { forgotPasswordAPI, verifyOTPAPI, resetPasswordAPI };