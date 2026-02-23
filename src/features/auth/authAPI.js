// Simulate API response
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Dummy user database (replace with real API later)
const dummyUsers = [
  { email: 'super@school.edu', password: 'Super123!', role: 'superadmin', name: 'Super Admin' },
  { email: 'admin@school.edu', password: 'Admin123!', role: 'schooladmin', name: 'School Admin' },
  { email: 'acc@school.edu', password: 'Acc123!', role: 'accountant', name: 'Accountant' },
  { email: 'hr@school.edu', password: 'Hr123!', role: 'hr', name: 'HR Staff' },
];

export const loginAPI = async (email, password, selectedRole) => {
  await delay(1000); // simulate network
  const user = dummyUsers.find(u => u.email === email && u.password === password && u.role === selectedRole);
  if (!user) {
    throw new Error('Invalid credentials or role mismatch');
  }
  // return fake token and user (omit password)
  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token: 'fake-jwt-token' };
};

export const forgotPasswordAPI = async (identifier) => {
  await delay(1000);
  // always succeed for demo
  return { message: 'Recovery link sent' };
};

export const verifyOTPAPI = async (otp) => {
  await delay(1000);
  // accept any 6-digit code for demo
  if (otp.length === 6 && /^\d+$/.test(otp)) {
    return { success: true };
  }
  throw new Error('Invalid OTP');
};

export const resetPasswordAPI = async (newPassword) => {
  await delay(1000);
  // accept any password that meets strength rules (we'll validate on frontend anyway)
  return { success: true };
};