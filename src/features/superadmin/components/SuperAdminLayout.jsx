import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/authSlice';

const SuperAdminLayout = ({ children, pageTitle, pageDescription, headerAction }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const navItems = [
    { to: '/dashboard/super-admin', label: 'Dashboard', icon: 'dashboard' },
    { to: '/dashboard/super-admin/schools', label: 'Schools', icon: 'domain' },
    { to: '/dashboard/super-admin/subscriptions', label: 'Subscriptions', icon: 'payments' },
    { to: '/dashboard/super-admin/support', label: 'Support Tickets', icon: 'confirmation_number' },
    { to: '/dashboard/super-admin/analytics', label: 'Analytics', icon: 'analytics' },
    { to: '/dashboard/super-admin/configuration', label: 'Configuration', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <span className="material-icons">hub</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            EduCore <span className="text-primary text-[10px] uppercase block font-bold tracking-wider">Super Admin</span>
          </span>
        </div>
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'
                }`
              }
            >
              <span className="material-icons text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
          <div className="pt-8 pb-4">
            <p className="px-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">System</p>
            <NavLink
              to="/dashboard/super-admin/security"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'
                }`
              }
            >
              <span className="material-icons text-[20px]">security</span>
              <span>Security</span>
            </NavLink>
          </div>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-primary/10">
              <img
                src="https://ui-avatars.com/api/?name=Julian+Vance&background=7311d4&color=fff&size=40"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Julian Vance</p>
              <p className="text-[10px] text-slate-500 uppercase font-semibold">Chief Administrator</p>
            </div>
            <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors">
              <span className="material-icons text-[20px]">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400 font-medium">Main Platform</span>
            <span className="material-icons text-slate-300 text-[18px]">chevron_right</span>
            <span className="text-slate-900 dark:text-white font-bold tracking-tight">{pageTitle}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary rounded-lg transition-colors relative">
                <span className="material-icons">notifications</span>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
            </div>
            {headerAction ? (
              headerAction
            ) : (
              <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all">
                <span className="material-icons text-[18px]">add</span>
                New School
              </button>
            )}
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            {pageDescription && (
              <p className="text-sm text-slate-500 -mt-4">{pageDescription}</p>
            )}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuperAdminLayout;