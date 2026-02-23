import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import { ROUTES } from '../../../routes/routeConstants';

const HrSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  const navItems = [
  { to: ROUTES.HR_HOME, label: 'Dashboard', icon: 'dashboard' },
  { to: ROUTES.HR_STAFF, label: 'Staff Directory', icon: 'groups' },
  { to: ROUTES.HR_ROLES, label: 'Role Management', icon: 'admin_panel_settings' },
  { to: ROUTES.HR_LEAVE_REQUESTS, label: 'Leave Requests', icon: 'event_busy', badge: 4 },
  { to: ROUTES.HR_ATTENDANCE, label: 'Attendance', icon: 'fact_check' },
  { to: ROUTES.HR_SETTINGS, label: 'Settings', icon: 'settings' },
];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-teal-light dark:border-primary/10 flex flex-col transition-colors duration-300 z-30">
      <div className="p-6 border-b border-teal-light dark:border-primary/10 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-icons">school</span>
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight text-gray-800 dark:text-white leading-none">EduStaff</h1>
          <span className="text-xs text-gray-400 font-medium">HR Portal</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/10 text-teal-dark dark:text-primary font-semibold'
                  : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-primary/5 dark:text-gray-400'
              }`
            }
          >
            <span className="material-icons">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-4">
        <div className="p-4 bg-teal-light dark:bg-primary/5 rounded-xl border border-primary/20">
          <p className="text-xs font-semibold text-teal-dark dark:text-primary mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">All systems operational</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <img
            className="w-10 h-10 rounded-full border-2 border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyol_RebQxno-WGUYQmORRv63xyk9qQ0ATbOvU7E2IZ9u71CyiDM4BhRMUr6gFgDaKY0Aq_Vt6EcK6E_C6mhS4OmGaiCO7YcBq20oS_NBB6bo9iGD440k7IZu9v52xV9h5L0Gu5KJWAxbS-QdWNu7kTejpgDW9QThx2bVJp6n71y6GcGNYrbe9ZMEuwd86U6gGAo8BS72FWwIU-tTeza8mDEMBLlfDOC1UcEIXzSURkr0R56hBBCY8E3P4Zs45LxtqBrN6uKlZp6E"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">{user?.name || 'Sarah Jenkins'}</span>
            <span className="text-[10px] text-slate-400">Head of HR</span>
          </div>
          <button
            onClick={handleLogout}
            className="ml-auto text-slate-400 hover:text-red-500 transition-colors"
            title="Logout"
          >
            <span className="material-icons text-sm">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default HrSidebar;