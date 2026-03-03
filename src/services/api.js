

// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL || 'https://monroe-chlorotic-nonsoberly.ngrok-free.dev/api/v1',
// //   headers: { 'Content-Type': 'application/json' },
// // });

// // // Track if a refresh is already in progress
// // let isRefreshing = false;
// // let refreshSubscribers = [];

// // const onRefreshed = (newToken) => {
// //   refreshSubscribers.forEach(callback => callback(newToken));
// //   refreshSubscribers = [];
// // };

// // const addRefreshSubscriber = (callback) => {
// //   refreshSubscribers.push(callback);
// // };

// // // Request interceptor
// // api.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem('accessToken');
// //     console.log('🔑 Token from localStorage:', token ? 'Present' : 'Missing');
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }
// //     console.log(`🚀 [API Request] ${config.method.toUpperCase()} ${config.url}`, config.data || {});
// //     return config;
// //   },
// //   (error) => {
// //     console.error('❌ [API Request Error]', error);
// //     return Promise.reject(error);
// //   }
// // );

// // // Response interceptor
// // api.interceptors.response.use(
// //   (response) => {
// //     console.log(`✅ [API Response] ${response.config.method.toUpperCase()} ${response.config.url}`, response.data);
// //     // The API returns { success: true, data: ... } or { success: false, error: ... }
// //     if (response.data && !response.data.success) {
// //       const errorMsg = response.data.error?.message || 'Request failed';
// //       return Promise.reject(new Error(errorMsg));
// //     }
// //     // Return the inner data object for convenience
// //     return response.data?.data;
// //   },
// //   async (error) => {
// //     const originalRequest = error.config;
// //     console.error('❌ [API Response Error]', error.response?.data || error.message);

// //     // If error is 401 and we haven't retried yet
// //     if (error.response?.status === 401 && !originalRequest._retry) {
// //       if (isRefreshing) {
// //         // Wait for the new token and retry
// //         return new Promise((resolve) => {
// //           addRefreshSubscriber((newToken) => {
// //             originalRequest.headers.Authorization = `Bearer ${newToken}`;
// //             resolve(api(originalRequest));
// //           });
// //         });
// //       }

// //       originalRequest._retry = true;
// //       isRefreshing = true;

// //       try {
// //         const refreshToken = localStorage.getItem('refreshToken');
// //         if (!refreshToken) {
// //           throw new Error('No refresh token available');
// //         }

// //         console.log('🔄 Attempting token refresh...');
// //         // Call refresh endpoint – note: we must use the raw axios instance to avoid interceptors loop
// //         const { data } = await axios.post(
// //           `${api.defaults.baseURL}/auth/refresh`,
// //           { refreshToken },
// //           { headers: { 'Content-Type': 'application/json' } }
// //         );

// //         if (data.success && data.data) {
// //           const { accessToken: newToken, refreshToken: newRefreshToken } = data.data;

// //           // Store new tokens
// //           localStorage.setItem('accessToken', newToken);
// //           if (newRefreshToken) {
// //             localStorage.setItem('refreshToken', newRefreshToken);
// //           }

// //           console.log('✅ Token refreshed successfully');
// //           api.defaults.headers.Authorization = `Bearer ${newToken}`;
// //           originalRequest.headers.Authorization = `Bearer ${newToken}`;

// //           onRefreshed(newToken);
// //           isRefreshing = false;

// //           return api(originalRequest);
// //         } else {
// //           throw new Error('Refresh failed');
// //         }
// //       } catch (refreshError) {
// //         console.error('❌ Token refresh failed:', refreshError);
// //         // Clear tokens and redirect to login
// //         localStorage.removeItem('accessToken');
// //         localStorage.removeItem('refreshToken');
// //         localStorage.removeItem('user');
// //         isRefreshing = false;
// //         refreshSubscribers = [];
// //         window.location.href = '/login'; // hard redirect to clear state
// //         return Promise.reject(new Error('Session expired. Please login again.'));
// //       }
// //     }

// //     // For other errors, just reject
// //     const message = error.response?.data?.error?.message || error.message || 'Something went wrong';
// //     return Promise.reject(new Error(message));
// //   }
// // );

// // export default api;


// import axios from 'axios';
// import { getAccessToken, getRefreshToken, clearAuthData, scheduleTokenRefresh } from './tokenService';

// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach(prom => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'https://backend-school-hqkl.onrender.com/api/v1',
//   headers: { 'Content-Type': 'application/json' },
// });

// // Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     console.log(`🚀 [API Request] ${config.method.toUpperCase()} ${config.url}`, config.data || {});
//     const token = getAccessToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error('❌ [API Request Error]', error);
//     return Promise.reject(error);
//   }
// );

// // Response interceptor – handles 401 and token refresh fallback
// api.interceptors.response.use(
//   (response) => {
//     console.log(`✅ [API Response] ${response.config.method.toUpperCase()} ${response.config.url}`, response.data);
//     if (response.data && !response.data.success) {
//       return Promise.reject(new Error(response.data.error?.message || 'Request failed'));
//     }
//     return response.data?.data;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     console.error('❌ [API Response Error]', error.response?.data || error.message);

//     // If error is not 401 or request already retried, reject
//     if (error.response?.status !== 401 || originalRequest._retry) {
//       const message = error.response?.data?.error?.message || error.message || 'Something went wrong';
//       return Promise.reject(new Error(message));
//     }

//     // If refreshing already in progress, queue this request
//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject });
//       })
//         .then(token => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           return api(originalRequest);
//         })
//         .catch(err => Promise.reject(err));
//     }

//     originalRequest._retry = true;
//     isRefreshing = true;

//     const refreshToken = getRefreshToken();
//     if (!refreshToken) {
//       processQueue(new Error('No refresh token available'));
//       clearAuthData();
//       window.location.href = '/login';
//       return Promise.reject(error);
//     }

//     try {
//       // Call refresh endpoint
//       const response = await api.post('/auth/refresh', { refreshToken });
//       const { accessToken, refreshToken: newRefreshToken, user } = response;

//       // Update storage and schedule next refresh
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', newRefreshToken);
//       localStorage.setItem('user', JSON.stringify(user));
//       scheduleTokenRefresh();

//       // Update authorization header for the original request
//       originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//       // Process queued requests
//       processQueue(null, accessToken);

//       return api(originalRequest);
//     } catch (refreshError) {
//       processQueue(refreshError, null);
//       clearAuthData();
//       window.location.href = '/login';
//       return Promise.reject(refreshError);
//     } finally {
//       isRefreshing = false;
//     }
//   }
// );

// export default api;


import axios from 'axios';
import { getAccessToken, getRefreshToken, clearAuthData, scheduleTokenRefresh } from './tokenService';
import store from '../store/store';                      // <-- ADD THIS
import { setCredentials } from '../features/auth/authSlice';


let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://backend-school-hqkl.onrender.com/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 [API Request] ${config.method.toUpperCase()} ${config.url}`, config.data || {});
    
    // Do NOT add token for refresh endpoint
    if (config.url === '/auth/refresh') {
      return config;
    }
    
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('❌ [API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor – handles 401 and token refresh fallback
api.interceptors.response.use(
  (response) => {
    console.log(`✅ [API Response] ${response.config.method.toUpperCase()} ${response.config.url}`, response.data);
    if (response.data && !response.data.success) {
      return Promise.reject(new Error(response.data.error?.message || 'Request failed'));
    }
    return response.data?.data;
  },
  async (error) => {
    const originalRequest = error.config;
    console.error('❌ [API Response Error]', error.response?.data || error.message);

    // If error is not 401 or request already retried, reject
    if (error.response?.status !== 401 || originalRequest._retry || originalRequest.url === '/auth/refresh') {
      const message = error.response?.data?.error?.message || error.message || 'Something went wrong';
      return Promise.reject(new Error(message));
    }

    // If refreshing already in progress, queue this request
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        })
        .catch(err => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      processQueue(new Error('No refresh token available'));
      clearAuthData();
      window.location.href = '/login';
      return Promise.reject(error);
    }

    try {
      // Use a fresh axios instance to avoid interceptors loop
      const response = await axios.post(
        `${api.defaults.baseURL}/auth/refresh`,
        { refreshToken },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (!response.data.success) {
        throw new Error(response.data.error?.message || 'Refresh failed');
      }

      const { accessToken, refreshToken: newRefreshToken, user } = response.data.data;

      // Preserve existing role if new user object doesn't have it
      const existingUser = JSON.parse(localStorage.getItem('user')) || {};
      const mergedUser = {
  ...existingUser,
  ...user,
  role: (user?.role || existingUser?.role)?.toLowerCase()
};

      console.log('🔍 Refresh response user:', user);
      console.log('🔍 Existing user before merge:', existingUser);
      console.log('🔍 Merged user after refresh:', mergedUser);

     // ✅ STORE THE MERGED USER, NOT JUST THE RAW `user`
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      localStorage.setItem('user', JSON.stringify(mergedUser));   // <-- FIX

      // ✅ Directly update Redux
      store.dispatch(setCredentials({
        user: mergedUser,
        token: accessToken,
        refreshToken: newRefreshToken
      }));

      console.log('✅ Dispatched setCredentials to Redux');

      window.dispatchEvent(new CustomEvent('tokenRefreshed', {
        detail: { user: mergedUser, token: accessToken, refreshToken: newRefreshToken }
      }));

      console.log('📡 Token refresh event received with user:', event.detail.user);

      scheduleTokenRefresh();

      // Update authorization header for the original request
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      // Process queued requests
      processQueue(null, accessToken);

      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      clearAuthData();
      window.location.href = '/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;