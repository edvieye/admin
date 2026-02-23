// src/constants/navItems.js
import { ROUTES } from "../routes/routeConstants";


export const navItems = [
  { name: 'Dashboard', path: ROUTES.DASHBOARD, icon: 'dashboard' },
  { name: 'Students', path: ROUTES.STUDENTS, icon: 'groups' },
  { name: 'Parents', path: ROUTES.PARENTS, icon: 'family_restroom' },
  { name: 'Staff', path: ROUTES.STAFF, icon: 'badge' },
  { name: 'Classes', path: ROUTES.CLASSES, icon: 'class' },
  { name: 'Subjects', path: ROUTES.SUBJECTS, icon: 'auto_stories' },
  { name: 'Attendance', path: ROUTES.ATTENDANCE, icon: 'calendar_today' },
  { name: 'Timetable', path: ROUTES.TIMETABLE, icon: 'schedule' },
  { name: 'Fees', path: ROUTES.FEES, icon: 'payments' },
  { name: 'Exams', path: ROUTES.EXAMS, icon: 'assignment' },
  { name: 'Announcements', path: ROUTES.ANNOUNCEMENTS, icon: 'campaign' },
  { name: 'Reports', path: ROUTES.REPORTS, icon: 'assessment' },
  { name: 'Audit Logs', path: ROUTES.AUDIT, icon: 'security' },
  { name: 'Settings', path: ROUTES.SETTINGS, icon: 'settings' },
  { name: 'Face Check-in', path: ROUTES.FACE_LOGS, icon: 'face' },
  { name: 'AI Training', path: ROUTES.AI_TRAINING, icon: 'psychology' },
  { name: 'Live Classes', path: ROUTES.LIVE_CLASSES, icon: 'live_tv' },
  { name: 'Roles', path: ROUTES.ROLES, icon: 'admin_panel_settings' },
];