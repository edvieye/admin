import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const NotificationDropdown = ({ isOpen, onClose, onUnreadCountChange }) => {
  const [notifications, setNotifications] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Mock data – replace with API call
      setNotifications([
        { id: 'n1', title: 'New Support Ticket', message: 'Green Valley High opened a new ticket: "Database connection errors"', timestamp: '5 mins ago', read: false },
        { id: 'n2', title: 'Subscription Expiring', message: 'Riverdale Secondary subscription expires in 3 days', timestamp: '1 hour ago', read: false },
        { id: 'n3', title: 'New School Registered', message: 'Oakridge International has registered.', timestamp: '2 hours ago', read: true },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleMarkAsRead = (id) => {
    setNotifications(prev => {
      const updated = prev.map(n => n.id === id ? { ...n, read: true } : n);
      onUnreadCountChange(updated.filter(n => !n.read).length);
      return updated;
    });
    toast.success('Marked as read');
  };

  const handleDelete = (id) => {
    setNotifications(prev => {
      const updated = prev.filter(n => n.id !== id);
      onUnreadCountChange(updated.filter(n => !n.read).length);
      return updated;
    });
    toast.success('Notification deleted');
  };

  const handleViewAll = () => {
    navigate('/dashboard/super-admin/notifications'); // now goes to simple list page
    onClose();
  };

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 z-[1000] overflow-hidden"
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-bold">Notifications</h3>
        {unreadCount > 0 && (
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
            {unreadCount} unread
          </span>
        )}
      </div>

      <div className="max-h-96 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-800">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No notifications</div>
        ) : (
          notifications.map(n => (
            <div
              key={n.id}
              className={`p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${!n.read ? 'bg-primary/5' : ''}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{n.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{n.message}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.timestamp}</p>
                </div>
                <div className="flex flex-col gap-1">
                  {!n.read && (
                    <button
                      onClick={() => handleMarkAsRead(n.id)}
                      className="text-primary hover:underline text-xs whitespace-nowrap"
                    >
                      Mark read
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(n.id)}
                    className="text-red-600 hover:underline text-xs whitespace-nowrap"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center">
        <button
          onClick={handleViewAll}
          className="text-primary hover:underline text-sm font-medium"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;