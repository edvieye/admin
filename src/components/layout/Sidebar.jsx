

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navItems } from '../../constants/navItems';
import { useTheme } from '../../contexts/ThemeContext';
import { logout } from '../../features/auth/authSlice';
import { logoutAPI } from '../../features/auth/authAPI';
import { getRefreshToken, clearAuthData } from '../../services/tokenService';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      try {
        await logoutAPI(refreshToken);
        toast.success('Logged out successfully');
      } catch (error) {
        console.error('Logout API error:', error);
        toast.error(error.message);
      }
    }
    clearAuthData(); // clears localStorage and timer
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-forest dark:bg-black text-white flex flex-col">
      <div className="p-6 flex items-center space-x-3">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-icons text-forest">school</span>
        </div>
        <span className="text-xl font-bold tracking-tight">EduAdmin</span>
      </div>

      <nav className="flex-1 mt-4 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary/20 text-primary'
                  : 'text-gray-400 hover:text-primary hover:bg-forest-light'
              }`
            }
          >
            <span className="material-icons">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-forest-light">
        <div className="flex items-center justify-between p-2 bg-forest-light rounded-xl">
          <div className="flex items-center space-x-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yPMi3ZbMvOhNvLLe1lw77uxP8N-S1CCJayo9X-CdNmYZwqBhnq5XT74JMPoifU2JkZANbXmGlKYXPtK9Ryai_TfniamerKu7hzhFBAKDuF9JC_6doaymzBWfVlE1OQvHZ3OMzMzSQVUb2KLR0aIcSAY_yrIwPkervL_B9GQXFdlXsVEw_DtahZqlZXbXtxP6MAY67Likp8BBDyQAPhIe3cfZIjAiSU0UiXhZMoVF7_-5rY8Avxw-e4YebH5XwTvDoBV84KS6I9c"
              alt="Admin"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Dr. Aris Thorne</p>
              <p className="text-xs text-gray-400">Head Admin</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <span className="material-icons text-red-400 hover:text-red-500">
              logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;