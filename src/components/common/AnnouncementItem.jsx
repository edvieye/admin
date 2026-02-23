// src/components/common/AnnouncementItem.jsx
import React from 'react';

const AnnouncementItem = ({ announcement }) => {
  return (
    <div className="p-6 hover:bg-background-light dark:hover:bg-forest transition-colors cursor-pointer group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-forest rounded-lg flex flex-col items-center justify-center border border-gray-200 dark:border-forest-light">
          <span className="text-xs font-bold text-gray-400">{announcement.date.month}</span>
          <span className="text-lg font-bold text-forest dark:text-white leading-none">{announcement.date.day}</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-forest dark:text-white group-hover:text-primary transition-colors">{announcement.title}</h4>
            <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">
              {announcement.priority}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">{announcement.description}</p>
          <div className="mt-3 flex items-center space-x-4 text-xs text-gray-400">
            <span className="flex items-center"><span className="material-icons text-xs mr-1">person</span>{announcement.location}</span>
            <span className="flex items-center"><span className="material-icons text-xs mr-1">schedule</span>{announcement.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementItem;