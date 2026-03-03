// // import React from 'react';
// // import { Navigate, Outlet } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import { ROUTES } from '../../../routes/routeConstants';
// // import LoadingSpinner from './LoadingSpinner';

// // const ProtectedRoute = ({ allowedRoles }) => {
// //   const { user, role, isLoading } = useSelector((state) => state.auth);

// //   console.log('🛡️ ProtectedRoute - user:', user, 'role:', role, 'allowed:', allowedRoles);

// //   if (isLoading) return <LoadingSpinner fullScreen />;
// //   if (!user) {
// //     console.log('🛡️ No user, redirecting to login');
// //     return <Navigate to={ROUTES.LOGIN} replace />;
// //   }
// //   if (allowedRoles && !allowedRoles.includes(role)) {
// //     console.log('🛡️ Role not allowed, redirecting to unauthorized');
// //     return <Navigate to="/unauthorized" replace />;
// //   }
// //   return <Outlet />;
// // };

// // export default ProtectedRoute;

// import React, { useEffect } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCredentials } from '../features/auth/authSlice';
// import { ROUTES } from '../routes/routeConstants';
// import LoadingSpinner from './LoadingSpinner';

// const ProtectedRoute = ({ allowedRoles }) => {
//   const { user, role, isLoading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   // Rehydrate from localStorage if Redux state is empty but localStorage has data
//   useEffect(() => {
//     if (!user && !isLoading) {
//       const storedUser = localStorage.getItem('user');
//       const token = localStorage.getItem('accessToken');
//       const refreshToken = localStorage.getItem('refreshToken');
//       if (storedUser && token) {
//         try {
//           const parsedUser = JSON.parse(storedUser);
//           console.log('🔄 Rehydrating user from localStorage:', parsedUser);
//           dispatch(setCredentials({ user: parsedUser, token, refreshToken }));
//         } catch (e) {
//           console.error('Failed to parse stored user', e);
//         }
//       }
//     }
//   }, [user, isLoading, dispatch]);

//   console.log('🛡️ ProtectedRoute - user:', user, 'role:', role, 'allowed:', allowedRoles);

//   if (isLoading) return <LoadingSpinner fullScreen />;
//   if (!user) {
//     console.log('🛡️ No user, redirecting to login');
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     console.log('🛡️ Role not allowed, redirecting to unauthorized');
//     return <Navigate to="/unauthorized" replace />;
//   }
//   return <Outlet />;
// };

// export default ProtectedRoute;


// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCredentials } from '../features/auth/authSlice';
// import { ROUTES } from '../routes/routeConstants';
// import LoadingSpinner from './LoadingSpinner';

// const ProtectedRoute = ({ allowedRoles }) => {
//   const { user, role, isLoading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const [isRehydrating, setIsRehydrating] = useState(true);

//   // useEffect(() => {
//   //   if (!user && !isLoading) {
//   //     const storedUser = localStorage.getItem('user');
//   //     const token = localStorage.getItem('accessToken');
//   //     const refreshToken = localStorage.getItem('refreshToken');
//   //     if (storedUser && token) {
//   //       try {
//   //         const parsedUser = JSON.parse(storedUser);
//   //         console.log('🔄 Rehydrating user from localStorage:', parsedUser);
//   //         dispatch(setCredentials({ user: parsedUser, token, refreshToken }));
//   //       } catch (e) {
//   //         console.error('Failed to parse stored user', e);
//   //       }
//   //     }
//   //   }
//   //   setIsRehydrating(false);
//   // }, [user, isLoading, dispatch]);

//   useEffect(() => {
//   const rehydrate = async () => {
//     if (!user && !isLoading) {
//       const storedUser = localStorage.getItem('user');
//       const token = localStorage.getItem('accessToken');
//       const refreshToken = localStorage.getItem('refreshToken');
//       if (storedUser && token) {
//         try {
//           const parsedUser = JSON.parse(storedUser);
//           console.log('🔄 Rehydrating user from localStorage:', parsedUser);
//           await dispatch(setCredentials({ user: parsedUser, token, refreshToken }));
//         } catch (e) {
//           console.error('Failed to parse stored user', e);
//         }
//       }
//     }
//     setIsRehydrating(false);
//   };
//   rehydrate();
// }, [user, isLoading, dispatch]);

//   console.log('🛡️ ProtectedRoute - user:', user, 'role:', role, 'allowed:', allowedRoles, 'isRehydrating:', isRehydrating);

//   if (isLoading || isRehydrating) return <LoadingSpinner fullScreen />;
//   if (!user) {
//     console.log('🛡️ No user, redirecting to login');
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     console.log('🛡️ Role not allowed, redirecting to login');
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
//   return <Outlet />;
// };

// export default ProtectedRoute;

import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { ROUTES } from '../routes/routeConstants';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, role, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isRehydrating, setIsRehydrating] = useState(true);

  // Rehydrate from localStorage if Redux is empty
  useEffect(() => {
    const rehydrate = async () => {
      if (!user && !isLoading) {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (storedUser && token) {
          try {
            const parsedUser = JSON.parse(storedUser);
            console.log('🔄 Rehydrating user from localStorage:', parsedUser);
            await dispatch(setCredentials({ user: parsedUser, token, refreshToken }));
          } catch (e) {
            console.error('Failed to parse stored user', e);
          }
        }
      }
      setIsRehydrating(false);
    };
    rehydrate();
  }, [user, isLoading, dispatch]);

  // Recovery: if role is missing but localStorage has a user with role, force re-dispatch
  useEffect(() => {
    if (!role && !isLoading && !isRehydrating) {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('accessToken');
      if (storedUser && token) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser.role) {
            console.log('⚠️ Role missing in Redux but present in localStorage. Re-dispatching.');
            dispatch(setCredentials({
              user: parsedUser,
              token,
              refreshToken: localStorage.getItem('refreshToken')
            }));
          }
        } catch (e) {}
      }
    }
  }, [role, isLoading, isRehydrating, dispatch]);

  console.log('🛡️ ProtectedRoute - user:', user, 'role:', role, 'allowed:', allowedRoles, 'isRehydrating:', isRehydrating);

  if (isLoading || isRehydrating) return <LoadingSpinner fullScreen />;
  if (!user) {
    console.log('🛡️ No user, redirecting to login');
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) {
    console.log('🛡️ Role not allowed, redirecting to login');
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;