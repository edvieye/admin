import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { ROUTES } from '../../../routes/routeConstants';

const AccountantLayout = ({ children, pageTitle, pageDescription }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  // const navItems = [
  //   { to: '/dashboard/accountant', label: 'Fee Dashboard', icon: 'dashboard' },
  //   { to: '/dashboard/accountant/invoices', label: 'Invoices', icon: 'description' },
  //   { to: '/dashboard/accountant/payments', label: 'Payments', icon: 'payments' },
  //   { to: '/dashboard/accountant/reports', label: 'Financial Reports', icon: 'assessment' },
  // ];

  // src/features/accountant/components/AccountantLayout.jsx (update navItems)
  const navItems = [
    { to: '/dashboard/accountant', label: 'Fee Dashboard', icon: 'dashboard' },
    { to: '/dashboard/accountant/expenses', label: 'Expense Management', icon: 'receipt' },
    { to: '/dashboard/accountant/payroll', label: 'Staff Payroll', icon: 'group' },
    { to: '/dashboard/accountant/invoices', label: 'Invoices', icon: 'description' },
    { to: '/dashboard/accountant/payments', label: 'Payments', icon: 'payments' },
    { to: '/dashboard/accountant/reports', label: 'Financial Reports', icon: 'assessment' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-primary/10 flex flex-col fixed h-full transition-colors duration-300">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-icons text-white">account_balance</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">EduFinance</span>
        </div>
        <nav className="flex-1 px-4 mt-4 space-y-1">
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
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            {pageTitle && <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{pageTitle}</h1>}
            {pageDescription && <p className="text-slate-500 dark:text-slate-400 text-sm">{pageDescription}</p>}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">calendar_today</span>
              <select className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-primary/10 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                <option>Academic Year 2023-24</option>
                <option>Academic Year 2022-23</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
              <span className="material-icons text-sm">post_add</span>
              Generate Bulk Invoices
            </button>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
};

export default AccountantLayout;