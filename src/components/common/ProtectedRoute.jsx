// src/components/common/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { ROUTES } from "./routeConstants";
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading, hasAnyRole } = useAuth();

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (allowedRoles && !hasAnyRole(allowedRoles)) {
    // User doesn't have required role, redirect to dashboard or unauthorized page
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;