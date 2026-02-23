// src/components/common/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, icon, trend, trendColor = 'primary', progress, subtext }) => {
  return (
    <div className="bg-white dark:bg-forest-light p-6 rounded-xl border border-gray-100 dark:border-forest shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 bg-${trendColor}/20 rounded-lg`}>
          <span className={`material-icons text-${trendColor}`}>{icon}</span>
        </div>
        {trend && (
          <span className={`text-xs font-bold text-${trendColor} uppercase bg-${trendColor}/10 px-2 py-1 rounded`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-bold text-forest dark:text-white mt-1">{value}</p>
      {progress && (
        <div className="mt-4 w-full bg-gray-100 dark:bg-forest h-2 rounded-full overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {subtext && <p className="text-xs text-gray-400 mt-3">{subtext}</p>}
    </div>
  );
};

export default StatCard;