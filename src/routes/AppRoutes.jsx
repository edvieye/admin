


import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES, ROLES } from "./routeConstants";
import Layout from "../components/layout/Layout";

// Auth Pages
import Login from "../features/auth/pages/Login";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import OTPVerification from "../features/auth/pages/OTPVerification";
import CreateNewPassword from "../features/auth/pages/CreateNewPassword";

// Super Admin Pages
import SuperAdminDashboard from "../features/superadmin/pages/SuperAdminDashboard";
import SchoolManagement from "../features/superadmin/pages/SchoolManagement";
import SubscriptionManagement from "../features/superadmin/pages/SubscriptionManagement";
import GlobalPlanSettings from "../features/superadmin/pages/GlobalPlanSettings";
import PlatformAnalytics from "../features/superadmin/pages/PlatformAnalytics";
import SupportTickets from "../features/superadmin/pages/SupportTickets";
import SecuritySettings from "../features/superadmin/pages/SecuritySettings";
import UserManagement from '../features/superadmin/pages/UserManagement';
import AuditLogs from '../features/superadmin/pages/AuditLogs';
import BillingInvoices from '../features/superadmin/pages/BillingInvoices';
import RolePermissions from '../features/superadmin/pages/RolePermissions';
import NotificationCenter from '../features/superadmin/pages/NotificationCenter';

import NotificationsList from '../features/notifications/pages/NotificationsList';

import HrDashboard from '../features/hr/pages/Dashboard';
import HrStaffDirectory from '../features/hr/pages/HrStaffDirectory';
import HrRoleManagement from '../features/hr/pages/HrRoleManagement';
import HrLeaveRequests from '../features/hr/pages/HrLeaveRequests';
import HrAttendancePerformance from '../features/hr/pages/HrAttendancePerformance';
import HrSettings from '../features/hr/pages/HrSettings';
import AccountantDashboard from '../features/accountant/pages/Dashboard';
import ExpenseManagement from '../features/accountant/pages/ExpenseManagement';
import StaffPayroll from '../features/accountant/pages/StaffPayroll';
import Invoices from '../features/accountant/pages/Invoices';
import Payments from "../features/accountant/pages/payments";
import FinancialReports from '../features/accountant/pages/FinancialReports';


// Lazy School Admin Pages
const Dashboard = React.lazy(() =>
  import("../features/schooladmin/pages/Dashboard")
);
const StudentDirectory = React.lazy(() =>
  import("../features/schooladmin/pages/StudentDirectory")
);
const AddEditStudent = React.lazy(() =>
  import("../features/schooladmin/pages/AddEditStudent")
);
const StudentProfile = React.lazy(() =>
  import("../features/schooladmin/pages/StudentProfile")
);
const ParentDirectory = React.lazy(() =>
  import("../features/schooladmin/pages/ParentDirectory")
);
const StaffDirectory = React.lazy(() =>
  import("../features/schooladmin/pages/StaffDirectory")
);
const ClassesSections = React.lazy(() =>
  import("../features/schooladmin/pages/ClassesSections")
);
const Subjects = React.lazy(() =>
  import("../features/schooladmin/pages/Subjects")
);
const AttendanceOverview = React.lazy(() =>
  import("../features/schooladmin/pages/AttendanceOverview")
);
const TimetableBuilder = React.lazy(() =>
  import("../features/schooladmin/pages/TimetableBuilder")
);
const FeesBilling = React.lazy(() =>
  import("../features/schooladmin/pages/FeesBilling")
);
const ProcessPayment = React.lazy(() =>
  import("../features/schooladmin/pages/ProcessPayment")
);
const ExamControl = React.lazy(() =>
  import("../features/schooladmin/pages/ExamControl")
);
const Announcements = React.lazy(() =>
  import("../features/schooladmin/pages/Announcements")
);
const ReportsCenter = React.lazy(() =>
  import("../features/schooladmin/pages/ReportsCenter")
);
const SystemAudit = React.lazy(() =>
  import("../features/schooladmin/pages/SystemAudit")
);
const GlobalSettings = React.lazy(() =>
  import("../features/schooladmin/pages/GlobalSettings")
);
const FaceCheckinLogs = React.lazy(() =>
  import("../features/schooladmin/pages/FaceCheckinLogs")
);
const AITraining = React.lazy(() =>
  import("../features/schooladmin/pages/AITraining")
);
const LiveClasses = React.lazy(() =>
  import("../features/schooladmin/pages/LiveClasses")
);
const RolesPermissions = React.lazy(() =>
  import("../features/schooladmin/pages/RolesPermissions")
);

// 🔐 Protected Route
const ProtectedRoute = ({ allowedRoles }) => {
  const { user, role } = useSelector((state) => state.auth);

  if (!user) return <Navigate to={ROUTES.LOGIN} replace />;
  if (allowedRoles && !allowedRoles.includes(role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.VERIFY_OTP} element={<OTPVerification />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<CreateNewPassword />} />

      {/* SUPER ADMIN */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN]} />}>
        <Route path="/dashboard/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/dashboard/super-admin/schools" element={<SchoolManagement />} />
        <Route path="/dashboard/super-admin/subscriptions" element={<SubscriptionManagement />} />
        <Route path="/dashboard/super-admin/configuration" element={<GlobalPlanSettings />} />
        <Route path="/dashboard/super-admin/analytics" element={<PlatformAnalytics />} />
        <Route path="/dashboard/super-admin/support" element={<SupportTickets />} />
        <Route path="/dashboard/super-admin/security" element={<SecuritySettings />} />
        <Route path="/dashboard/super-admin/users" element={<UserManagement />} />
        <Route path="/dashboard/super-admin/audit-logs" element={<AuditLogs />} />
        <Route path="/dashboard/super-admin/billing" element={<BillingInvoices />} />
        <Route path="/dashboard/super-admin/roles" element={<RolePermissions />} />
        <Route path="/dashboard/super-admin/notifications" element={<NotificationsList />} />
        <Route path="/dashboard/super-admin/notification-center" element={<NotificationCenter />} />
      </Route>

      {/* SCHOOL ADMIN (Main App Area) */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.SCHOOL_ADMIN]} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.STUDENTS.slice(1)} element={<StudentDirectory />} />
          <Route path={ROUTES.ADD_STUDENT.slice(1)} element={<AddEditStudent />} />
          <Route path="students/:id/edit" element={<AddEditStudent />} />
          <Route path="students/:id" element={<StudentProfile />} />
          <Route path={ROUTES.PARENTS.slice(1)} element={<ParentDirectory />} />
          <Route path={ROUTES.STAFF.slice(1)} element={<StaffDirectory />} />
          <Route path={ROUTES.CLASSES.slice(1)} element={<ClassesSections />} />
          <Route path={ROUTES.SUBJECTS.slice(1)} element={<Subjects />} />
          <Route path={ROUTES.ATTENDANCE.slice(1)} element={<AttendanceOverview />} />
          <Route path={ROUTES.TIMETABLE.slice(1)} element={<TimetableBuilder />} />
          <Route path={ROUTES.FEES.slice(1)} element={<FeesBilling />} />
          <Route path="fees/payment" element={<ProcessPayment />} />
          <Route path={ROUTES.EXAMS.slice(1)} element={<ExamControl />} />
          <Route path={ROUTES.ANNOUNCEMENTS.slice(1)} element={<Announcements />} />
          <Route path={ROUTES.REPORTS.slice(1)} element={<ReportsCenter />} />
          <Route path={ROUTES.AUDIT.slice(1)} element={<SystemAudit />} />
          <Route path={ROUTES.SETTINGS.slice(1)} element={<GlobalSettings />} />
          <Route path={ROUTES.FACE_LOGS.slice(1)} element={<FaceCheckinLogs />} />
          <Route path={ROUTES.AI_TRAINING.slice(1)} element={<AITraining />} />
          <Route path={ROUTES.LIVE_CLASSES.slice(1)} element={<LiveClasses />} />
          <Route path="settings/roles" element={<RolesPermissions />} />
        </Route>
      </Route>

      

            {/* HR Routes */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.HR]} />}>
        <Route path="/dashboard/hr" element={<HrDashboard />} />
         <Route path={ROUTES.HR_STAFF} element={<HrStaffDirectory />} />
          <Route path={ROUTES.HR_ROLES} element={<HrRoleManagement />} />
          <Route path={ROUTES.HR_LEAVE_REQUESTS} element={<HrLeaveRequests />} />
          <Route path={ROUTES.HR_ATTENDANCE} element={<HrAttendancePerformance />} />
          <Route path={ROUTES.HR_SETTINGS} element={<HrSettings />} />
        {/* Add other HR pages as needed */}
      </Route>

      {/* Accountant Routes */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.ACCOUNTANT]} />}>
        <Route path="/dashboard/accountant" element={<AccountantDashboard />} />
        <Route path="/dashboard/accountant/expenses" element={<ExpenseManagement />} />
        <Route path="/dashboard/accountant/payroll" element={<StaffPayroll />} />
        <Route path="/dashboard/accountant/invoices" element={<Invoices />} />
        <Route path="/dashboard/accountant/payments" element={<Payments />} />
        <Route path="/dashboard/accountant/reports" element={<FinancialReports />} />
            {/* Add other accountant pages as needed */}
          </Route>

     

      {/* DEFAULT */}
      <Route path="/unauthorized" element={<div>Unauthorized</div>} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRoutes;
