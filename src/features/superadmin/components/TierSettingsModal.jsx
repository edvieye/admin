import React, { useState } from 'react';
import toast from 'react-hot-toast';

const TierSettingsModal = ({ isOpen, onClose, tier, initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData || {
    price: 49,
    students: 200,
    storage: 10,
    modules: ['Core LMS', 'Attendance'],
  });

  if (!isOpen) return null;

  const handleModuleToggle = (module) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter(m => m !== module)
        : [...prev.modules, module],
    }));
  };

  const handleSave = () => {
    onSave(formData);
    toast.success(`${tier} settings updated`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{tier} Settings</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Price ($/mo)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Max Students</label>
              <input
                type="number"
                value={formData.students}
                onChange={(e) => setFormData({ ...formData, students: +e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Storage (GB)</label>
              <input
                type="number"
                value={formData.storage}
                onChange={(e) => setFormData({ ...formData, storage: +e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Module Access</label>
              <div className="space-y-2">
                {['Core LMS', 'Attendance', 'Payroll', 'Advanced Reports', 'Transport Tracking', 'Custom Branding'].map(module => (
                  <label key={module} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.modules.includes(module)}
                      onChange={() => handleModuleToggle(module)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{module}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
              Cancel
            </button>
            <button onClick={handleSave} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierSettingsModal;