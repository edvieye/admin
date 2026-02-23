// src/features/accountant/components/AccountantSidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice'; // adjust path if needed
import { ROUTES } from '../../../routes/routeConstants';

const AccountantSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  const navItems = [
    { to: '/dashboard/accountant', label: 'Fee Dashboard', icon: 'dashboard' },
    { to: '/dashboard/accountant/expenses', label: 'Expense Management', icon: 'receipt' },
    { to: '/dashboard/accountant/payroll', label: 'Staff Payroll', icon: 'group' },
    { to: '/dashboard/accountant/invoices', label: 'Invoices', icon: 'description' },
    { to: '/dashboard/accountant/payments', label: 'Payments', icon: 'payments' },
    { to: '/dashboard/accountant/reports', label: 'Financial Reports', icon: 'assessment' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-primary/10 flex flex-col transition-colors duration-300 z-30">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-icons text-white">account_balance</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-primary">EduFinance</span>
      </div>
      <nav className="flex-1 px-4 mt-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
              }`
            }
          >
            <span className="material-icons text-sm">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-primary/10">
        <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <img
            className="w-10 h-10 rounded-full border-2 border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdEU1306fuFLkdFY4YLRMIAvIYjCxyF4TYM4kqHlHwXcNmhXwBVhRswM-Uli1WeT5Uenz25C7Xu8dAY6xHjbEyjxOgbFHJuP2b1nUz9en2sedbZRjeJ3rLcKBZVU81XzYcowjBYh3VcwOULlJkh6zVMQkfCsDpsewp4h1xz2QvqOcEQ0suURyH6kgTMExYbhi9bsXWeIc3a_zF4KaBHqYVsZGceGiQikSN_-umApfbmuGCZVsD3iDWQ9M3sZnaO1lBeK802xEhGxE"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">{user?.name || 'Robert Wilson'}</span>
            <span className="text-[10px] text-slate-400">Chief Accountant</span>
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

export default AccountantSidebar;