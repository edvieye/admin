import { jwtDecode } from 'jwt-decode';
import { refreshTokenAPI } from '../features/auth/authAPI';
import store from '../store/store';               // <-- ADD THIS
import { setCredentials } from '../features/auth/authSlice';

let refreshTimer = null;

/**
 * Store tokens and user in localStorage
 */
export const setAuthData = (accessToken, refreshToken, user) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('user', JSON.stringify(user));
  scheduleTokenRefresh();
};

/**
 * Clear all auth data
 */
export const clearAuthData = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  if (refreshTimer) {
    clearTimeout(refreshTimer);
    refreshTimer = null;
  }
};

/**
 * Get access token
 */
export const getAccessToken = () => localStorage.getItem('accessToken');

/**
 * Get refresh token
 */
export const getRefreshToken = () => localStorage.getItem('refreshToken');

/**
 * Get user
 */
export const getUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

/**
 * Decode token and extract expiration time (in seconds)
 */
const getTokenExpiry = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp; // exp is in seconds since epoch
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

/**
 * Schedule token refresh before it expires
 * Refresh 2 minutes before expiry to be safe
 */
export const scheduleTokenRefresh = () => {
  const accessToken = getAccessToken();
  if (!accessToken) return;

  const exp = getTokenExpiry(accessToken);
  if (!exp) return;

  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const timeUntilExpiry = exp - now;
  const refreshTime = Math.max(0, timeUntilExpiry - 120); // 2 minutes before

  console.log(`⏰ Token expires in ${timeUntilExpiry}s. Scheduling refresh in ${refreshTime}s`);

  if (refreshTimer) clearTimeout(refreshTimer);

  refreshTimer = setTimeout(async () => {
    console.log('🔄 Attempting token refresh...');
    try {
      const refreshToken = getRefreshToken();
      // if (!refreshToken) throw new Error('No refresh token');
      if (refreshToken) {
  try {
    const decoded = jwtDecode(refreshToken);
    console.log('Refresh token expiry:', new Date(decoded.exp * 1000).toLocaleString());
  } catch (e) {}
}

      const response = await refreshTokenAPI(refreshToken);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken, user } = response;

      const existingUser = JSON.parse(localStorage.getItem('user')) || {};
      const mergedUser = {
        ...existingUser,
        ...user,
        role: (user?.role || existingUser?.role)?.toLowerCase()
      };

      console.log('🔍 Scheduled refresh – merged user:', mergedUser);
        

      // ✅ STORE THE MERGED USER
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      localStorage.setItem('user', JSON.stringify(mergedUser));   // <-- FIX

      // ✅ Directly update Redux
      store.dispatch(setCredentials({
        user: mergedUser,
        token: newAccessToken,
        refreshToken: newRefreshToken
      }));

      window.dispatchEvent(new CustomEvent('tokenRefreshed', {
        detail: { user: mergedUser, token: newAccessToken, refreshToken: newRefreshToken }
      }));

      console.log('✅ Token refreshed successfully. New user:', mergedUser);
console.log('Stored user in localStorage:', JSON.parse(localStorage.getItem('user')));

      // Schedule next refresh
      scheduleTokenRefresh();
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      // If refresh fails (e.g., refresh token expired), force logout
      clearAuthData();
      window.location.href = '/login';
    }
  }, refreshTime * 1000); // convert seconds to ms
};