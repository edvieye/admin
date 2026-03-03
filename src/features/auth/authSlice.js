// import { createSlice } from '@reduxjs/toolkit';

// // authSlice.js
// const initialState = {
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   token: localStorage.getItem('accessToken') || null,
//   role: JSON.parse(localStorage.getItem('user'))?.role || null, // now lowercase
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//       state.role = user.role;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//       localStorage.removeItem('user');
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setCredentials, logout, setLoading, setError } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('accessToken') || null,
  role: JSON.parse(localStorage.getItem('user'))?.role || null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, refreshToken } = action.payload;
      state.user = user;
      state.token = token;
      state.role = user?.role || null;

      // Persist to localStorage
      localStorage.setItem('accessToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
    },
    // In authSlice
refreshToken: (state, action) => {
  state.token = action.payload;
  localStorage.setItem('accessToken', action.payload);
},
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});



export const { setCredentials, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;