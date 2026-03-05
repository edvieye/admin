import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    { id: 'n1', title: 'New Support Ticket', message: 'Green Valley High opened a new ticket: "Database connection errors"', link: '/support/ticket/123', linkText: 'View Ticket', timestamp: '5 mins ago', read: false, targetRoles: ['superadmin', 'support'] },
    { id: 'n2', title: 'Subscription Expiring', message: 'Riverdale Secondary subscription expires in 3 days', timestamp: '1 hour ago', read: false, targetRoles: ['schooladmin'] },
    { id: 'n3', title: 'New School Registered', message: 'Oakridge International has registered.', timestamp: '2 hours ago', read: true, targetRoles: ['superadmin'] },
  ]);

  const [showSendModal, setShowSendModal] = useState(false);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    targetRoles: [],
    linkUrl: '',
    linkText: '',
    image: null,
    expiryDate: '',
  });

  const roleOptions = [
    { value: 'superadmin', label: 'Super Admin' },
    { value: 'schooladmin', label: 'School Admin' },
    { value: 'accountant', label: 'Accountant' },
    { value: 'hr', label: 'HR' },
    { value: 'staff', label: 'Staff' },
  ];

  const handleRoleToggle = (role) => {
    setNewNotification(prev => ({
      ...prev,
      targetRoles: prev.targetRoles.includes(role)
        ? prev.targetRoles.filter(r => r !== role)
        : [...prev.targetRoles, role],
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewNotification({ ...newNotification, image: file });
      toast.success(`Selected: ${file.name}`);
    }
  };

  const handleMarkRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    toast.success('Marked as read');
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
    toast.success('Notification deleted');
  };

  const handleSendNotification = (e) => {
    e.preventDefault();
    const newNotif = {
      id: `n${Date.now()}`,
      title: newNotification.title,
      message: newNotification.message,
      link: newNotification.linkUrl || null,
      linkText: newNotification.linkText || 'Learn More',
      image: newNotification.image ? URL.createObjectURL(newNotification.image) : null,
      expiryDate: newNotification.expiryDate,
      timestamp: 'Just now',
      read: false,
      targetRoles: newNotification.targetRoles,
    };
    setNotifications([newNotif, ...notifications]);
    setShowSendModal(false);
    setNewNotification({ title: '', message: '', targetRoles: [], linkUrl: '', linkText: '', image: null, expiryDate: '' });
    toast.success('Notification sent');
  };

  return (
    <SuperAdminLayout pageTitle="Notification Center">
      {/* Send Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowSendModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          <span className="material-icons text-sm">add</span>
          Send Notification
        </button>
      </div>

      {/* List */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-slate-500">No notifications</div>
          ) : (
            notifications.map(n => (
              <div key={n.id} className={`p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${!n.read ? 'bg-primary/5' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sm">{n.title}</h4>
                      {n.targetRoles && (
                        <span className="text-xs text-slate-400">
                          To: {n.targetRoles.map(r => roleOptions.find(o => o.value === r)?.label).join(', ')}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{n.message}</p>
                    {n.link && (
                      <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs inline-block mb-2">
                        {n.linkText || 'Learn More'} →
                      </a>
                    )}
                    {n.image && (
                      <img src={n.image} alt="attachment" className="max-h-20 rounded-lg mt-2" />
                    )}
                    <span className="text-xs text-slate-400 block mt-2">{n.timestamp}</span>
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

      {/* Send Modal */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Send Notification</h3>
            <form onSubmit={handleSendNotification}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={newNotification.title}
                    onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message *</label>
                  <textarea
                    required
                    rows="3"
                    value={newNotification.message}
                    onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Target Roles *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {roleOptions.map(role => (
                      <label key={role.value} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={newNotification.targetRoles.includes(role.value)}
                          onChange={() => handleRoleToggle(role.value)}
                          className="rounded text-primary focus:ring-primary"
                        />
                        {role.label}
                      </label>
                    ))}
                  </div>
                  {newNotification.targetRoles.length === 0 && (
                    <p className="text-xs text-red-500 mt-1">At least one role required</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Link URL (optional)</label>
                  <input
                    type="url"
                    value={newNotification.linkUrl}
                    onChange={(e) => setNewNotification({ ...newNotification, linkUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Link Text (optional)</label>
                  <input
                    type="text"
                    value={newNotification.linkText}
                    onChange={(e) => setNewNotification({ ...newNotification, linkText: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    placeholder="Learn More"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Expiry Date (optional)</label>
                  <input
                    type="date"
                    value={newNotification.expiryDate}
                    onChange={(e) => setNewNotification({ ...newNotification, expiryDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Image (optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                  {newNotification.image && (
                    <p className="text-xs text-slate-500 mt-1">Selected: {newNotification.image.name}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowSendModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium">Cancel</button>
                <button
                  type="submit"
                  disabled={newNotification.targetRoles.length === 0}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SuperAdminLayout>
  );
};

export default NotificationCenter;