// src/features/hr/components/HrLayout.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/routeConstants';

const HrLayout = ({ children, pageTitle, pageDescription }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const navItems = [
    { to: '/hr', label: 'Dashboard', icon: 'dashboard' },
    { to: '/hr/staff', label: 'Staff Directory', icon: 'groups' },
    { to: '/hr/roles', label: 'Role Management', icon: 'admin_panel_settings' },
    { to: '/hr/leave-requests', label: 'Leave Requests', icon: 'event_busy', badge: 4 },
    { to: '/hr/attendance', label: 'Attendance', icon: 'fact_check' },
    { to: '/hr/settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-background-dark border-r border-teal-light dark:border-primary/10 flex flex-col">
        <div className="p-6 border-b border-teal-light dark:border-primary/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-icons">school</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-gray-800 dark:text-white leading-none">EduStaff</h1>
            <span className="text-xs text-gray-400 font-medium">HR Portal</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
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
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark/50">
        {/* Header */}
        <header className="bg-white dark:bg-background-dark px-8 py-4 flex items-center justify-between sticky top-0 z-10 border-b border-teal-light dark:border-primary/10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-primary/5 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all"
                placeholder="Search staff or roles..."
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-primary transition-colors">
              <span className="material-icons">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800 dark:text-white leading-none">
                  {user?.name || 'Sarah Jenkins'}
                </p>
                <p className="text-[10px] text-gray-500 font-medium">Head of HR</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyol_RebQxno-WGUYQmORRv63xyk9qQ0ATbOvU7E2IZ9u71CyiDM4BhRMUr6gFgDaKY0Aq_Vt6EcK6E_C6mhS4OmGaiCO7YcBq20oS_NBB6bo9iGD440k7IZu9v52xV9h5L0Gu5KJWAxbS-QdWNu7kTejpgDW9QThx2bVJp6n71y6GcGNYrbe9ZMEuwd86U6gGAo8BS72FWwIU-tTeza8mDEMBLlfDOC1UcEIXzSURkr0R56hBBCY8E3P4Zs45LxtqBrN6uKlZp6E"
                  alt="HR Head"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 space-y-8">
          {/* Optional title/description */}
          {pageTitle && (
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">{pageTitle}</h2>
              {pageDescription && <p className="text-gray-500 text-sm">{pageDescription}</p>}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

export default HrLayout;