import React, { useState } from 'react';
import SuperAdminLayout from '../../superadmin/components/SuperAdminLayout';
import toast from 'react-hot-toast';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([
    { id: 'n1', title: 'New Support Ticket', message: 'Green Valley High opened a new ticket: "Database connection errors"', timestamp: '5 mins ago', read: false },
    { id: 'n2', title: 'Subscription Expiring', message: 'Riverdale Secondary subscription expires in 3 days', timestamp: '1 hour ago', read: false },
    { id: 'n3', title: 'New School Registered', message: 'Oakridge International has registered.', timestamp: '2 hours ago', read: true },
  ]);

  const handleMarkRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    toast.success('Marked as read');
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
    toast.success('Notification deleted');
  };

  return (
    <SuperAdminLayout pageTitle="Notifications">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-slate-500">No notifications</div>
          ) : (
            notifications.map(n => (
              <div key={n.id} className={`p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${!n.read ? 'bg-primary/5' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-sm mb-1">{n.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{n.message}</p>
                    <span className="text-xs text-slate-400">{n.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!n.read && (
                      <button onClick={() => handleMarkRead(n.id)} className="text-primary hover:underline text-xs">Mark Read</button>
                    )}
                    <button onClick={() => handleDelete(n.id)} className="text-red-600 hover:underline text-xs">Delete</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default NotificationsList;