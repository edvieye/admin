import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { updateSchool } from '../../../services/superadmin/schoolService.js';

const EditSchoolModal = ({ isOpen, onClose, school, onUpdate }) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    email: '',
    phone: '',
    timezone: '',
    currencyCode: '',
    status: '',
  });

  useEffect(() => {
    if (school) {
      setFormData({
        code: school.code || '',
        name: school.name || '',
        email: school.email || '',
        phone: school.phone || '',
        timezone: school.timezone || '',
        currencyCode: school.currencyCode || '',
        status: school.status || '',
      });
    }
  }, [school]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSchool(school.id, formData);
      toast.success('School updated successfully');
      onUpdate();
      onClose();
    } catch (error) {
      toast.error('Failed to update school');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white dark:bg-slate-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-lg font-bold">Edit School</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
              <span className="material-icons">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School Code</label>
              <input
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Timezone</label>
              <input
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                placeholder="e.g. Asia/Kolkata"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Currency Code</label>
              <input
                name="currencyCode"
                value={formData.currencyCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                placeholder="e.g. INR"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              >
                <option value="ACTIVE">Active</option>
                <option value="PENDING">Pending</option>
                <option value="SUSPENDED">Suspended</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90">
                Update School
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSchoolModal;