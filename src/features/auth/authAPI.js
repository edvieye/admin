import api from '../../services/api';

export const loginAPI = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log('🔐 Login response data:', response); // should contain { accessToken, refreshToken, user }
    return response;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const refreshTokenAPI = async (refreshToken) => {
  try {
    const response = await api.post('/auth/refresh', { refreshToken });
    return response; // contains new accessToken, refreshToken, and user
  } catch (error) {
    throw new Error(error.message || 'Token refresh failed');
  }
};

export const handleLogin = async (email, password) => {
  try {
    const data = await loginAPI(email, password); // data = { user, token, refreshToken }
    dispatch(setCredentials(data));
    // redirect based on role
  } catch (error) {
    toast.error(error.message);
  }
};

export const forgotPasswordAPI = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', { email });
    console.log('📧 Forgot password response:', response);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to send reset email');
  }
};

export const verifyOTPAPI = async (email, otp) => {
  try {
    const response = await api.post('/auth/verify-otp', { email, otp });
    console.log('🔢 Verify OTP response:', response);
    return response;
  } catch (error) {
    throw new Error(error.message || 'OTP verification failed');
  }
};

export const resetPasswordAPI = async (resetToken, newPassword) => {
  try {
    const response = await api.post('/auth/reset-password', { resetToken, newPassword });
    console.log('🔓 Reset password response:', response);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Password reset failed');
  }
};

export const logoutAPI = async (refreshToken) => {
  try {
    const response = await api.post('/auth/logout', { refreshToken });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};

export const changePasswordAPI = async (currentPassword, newPassword) => {
  try {
    const response = await api.post('/auth/change-password', { currentPassword, newPassword });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Password change failed');
  }
};