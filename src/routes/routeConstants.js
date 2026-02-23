// src/constants/routeConstants.js

export const ROUTES = {
  // Public
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_PASSWORD: '/reset-password',

  // Admin Dashboard (protected)
  DASHBOARD: '/',

  // Student Management
  STUDENTS: '/students',
  ADD_STUDENT: '/students/add',
  EDIT_STUDENT: '/students/:id/edit',
  STUDENT_PROFILE: '/students/:id',

  // Parent Management
  PARENTS: '/parents',

  // Staff Management
  STAFF: '/staff',

  // Academic
  CLASSES: '/classes',
  SUBJECTS: '/subjects',
  ATTENDANCE: '/attendance',
  TIMETABLE: '/timetable',

  // Fees & Finance
  FEES: '/fees',
  PAYMENT: '/fees/payment',

  // Exams
  EXAMS: '/exams',

  // Communications
  ANNOUNCEMENTS: '/announcements',

  // Reports & Audit
  REPORTS: '/reports',
  AUDIT: '/audit',

  // Settings
  SETTINGS: '/settings',
  SCHOOL_PROFILE: '/settings/school-profile',
  ROLES: '/settings/roles',

  // AI & Face Recognition
  FACE_LOGS: '/face-logs',
  FACE_LOGS_ALT: '/face-logs-alt',
  AI_TRAINING: '/ai-training',

  // Live Classes
  LIVE_CLASSES: '/live-classes',

  // Admin User Management (Super Admin)
  CREATE_ADMIN: '/admin/create',
  SYSTEM_CONFIG: '/system/config',
  BACKUP: '/system/backup',
  AUDIT_LOGS: '/audit/logs', 

  // detailed audit

 
  HR_HOME: '/dashboard/hr',
HR_STAFF: '/dashboard/hr/staff',
HR_ROLES: '/dashboard/hr/roles',
HR_LEAVE_REQUESTS: '/dashboard/hr/leave-requests',
HR_ATTENDANCE: '/dashboard/hr/attendance',
HR_SETTINGS: '/dashboard/hr/settings',
  ACCOUNTANT_HOME: '/accountant',
};

// Role-based access levels
export const ROLES = {
  SUPER_ADMIN: 'superadmin',
  SCHOOL_ADMIN: 'schooladmin',
  ACCOUNTANT: 'accountant',
  HR: 'hr',
  TEACHER: 'teacher',
  LIBRARIAN: 'librarian',
  IT_SUPPORT: 'it_support',
};