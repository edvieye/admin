// // src/contexts/AuthContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login as apiLogin, logout as apiLogout, getCurrentUser } from '../services/authService';
// import { ROUTES } from '../constants/';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (token) {
//           const userData = await getCurrentUser();
//           setUser(userData);
//         }
//       } catch (error) {
//         console.error('Failed to load user', error);
//         localStorage.removeItem('token');
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadUser();
//   }, []);

// //   const login = async (email, password, role) => {
// //     try {
// //       const { user, token } = await apiLogin(email, password, role);
// //       localStorage.setItem('token', token);
// //       setUser(user);
// //       // Redirect based on role (you can customize this)
// //       // For now, all roles go to the same dashboard (ROUTES.DASHBOARD)
// //       navigate(ROUTES.DASHBOARD);
// //       return { success: true };
// //     } catch (error) {
// //       return { success: false, error: error.message };
// //     }
// //   };

// const login = async (email, password, role) => {
//   try {
//     const { user, token } = await apiLogin(email, password, role);
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));  // store user too
//     setUser(user);
//     navigate(ROUTES.DASHBOARD);
//     return { success: true };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

//   const logout = async () => {
//     await apiLogout();
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate(ROUTES.LOGIN);
//   };

//   const hasRole = (role) => {
//     return user?.role === role;
//   };

//   const hasAnyRole = (roles) => {
//     return roles.includes(user?.role);
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     hasRole,
//     hasAnyRole,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };


// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin, logout as apiLogout } from '../services/authService';
import { ROUTES } from '../routes/routeConstants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Restore user from localStorage synchronously
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      const { user, token } = await apiLogin(email, password, role);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      navigate(ROUTES.DASHBOARD);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await apiLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate(ROUTES.LOGIN);
  };

  const hasRole = (role) => user?.role === role;
  const hasAnyRole = (roles) => roles.includes(user?.role);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, hasRole, hasAnyRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);