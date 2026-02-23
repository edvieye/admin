// src/components/layout/Header.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="h-20 bg-white dark:bg-forest border-b border-gray-200 dark:border-forest-light px-8 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-forest dark:text-white">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Welcome back, Wednesday, Oct 25, 2023</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative group">
          <span className="material-icons absolute left-3 top-2.5 text-gray-400 text-lg">search</span>
          <input
            type="text"
            placeholder="Search records..."
            className="pl-10 pr-4 py-2 bg-background-light dark:bg-forest-light border-none rounded-lg focus:ring-2 focus:ring-primary w-64 text-sm"
          />
        </div>

        <button className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-forest-light rounded-full transition-colors">
          <span className="material-icons">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-forest"></span>
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-forest-light rounded-full transition-colors"
        >
          <span className="material-icons">{darkMode ? 'light_mode' : 'dark_mode'}</span>
        </button>

        <button className="bg-primary text-forest font-bold px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
          <span className="material-icons">add</span>
          <span>Quick Action</span>
        </button>
      </div>
    </header>
  );
};

export default Header;