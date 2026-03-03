

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getPlans, updatePlan } from '../../../services/superadmin/planService.js';

const PlanEditDrawer = ({ isOpen, onClose }) => {
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchPlans();
    }
  }, [isOpen]);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const data = await getPlans();
      // Convert array to object keyed by plan code
      const plansObj = Array.isArray(data) ? data.reduce((acc, p) => ({ ...acc, [p.code.toLowerCase()]: p }), {}) : data;
      setPlans(plansObj);
    } catch (error) {
      toast.error('Failed to load plans');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      // Save each plan that was modified
      const savePromises = Object.entries(plans).map(([code, plan]) =>
        updatePlan(code.toUpperCase(), plan)
      );
      await Promise.all(savePromises);
      toast.success('Global plans updated');
      onClose();
    } catch (error) {
      toast.error('Failed to update plans');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-y-0 right-0 w-[450px] bg-white dark:bg-slate-900 shadow-2xl border-l border-primary/20 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      <div className="p-6 border-b border-primary/10 flex justify-between items-center">
        <h2 className="text-xl font-bold">Edit Global Plans</h2>
        <button onClick={onClose} className="text-slate-400 hover:text-red-500">
          <span className="material-icons">close</span>
        </button>
      </div>
      <div className="p-6 overflow-y-auto h-full pb-24">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="space-y-6">
            {/* Basic */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="font-bold mb-3">Basic Tier</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-500">Price ($/mo)</label>
                  <input
                    type="number"
                    value={plans.basic?.priceMonthly || ''}
                    onChange={(e) => setPlans({ ...plans, basic: { ...plans.basic, priceMonthly: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Max Students</label>
                  <input
                    type="number"
                    value={plans.basic?.students || ''}
                    onChange={(e) => setPlans({ ...plans, basic: { ...plans.basic, students: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Storage (GB)</label>
                  <input
                    type="number"
                    value={plans.basic?.storage || ''}
                    onChange={(e) => setPlans({ ...plans, basic: { ...plans.basic, storage: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
            {/* Pro */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="font-bold mb-3">Pro Tier</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-500">Price ($/mo)</label>
                  <input
                    type="number"
                    value={plans.pro?.priceMonthly || ''}
                    onChange={(e) => setPlans({ ...plans, pro: { ...plans.pro, priceMonthly: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Max Students</label>
                  <input
                    type="number"
                    value={plans.pro?.students || ''}
                    onChange={(e) => setPlans({ ...plans, pro: { ...plans.pro, students: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Storage (GB)</label>
                  <input
                    type="number"
                    value={plans.pro?.storage || ''}
                    onChange={(e) => setPlans({ ...plans, pro: { ...plans.pro, storage: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
            {/* Enterprise */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="font-bold mb-3">Enterprise Tier</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-500">Price ($/mo)</label>
                  <input
                    type="number"
                    value={plans.enterprise?.priceMonthly || ''}
                    onChange={(e) => setPlans({ ...plans, enterprise: { ...plans.enterprise, priceMonthly: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Max Students</label>
                  <input
                    type="text"
                    value={plans.enterprise?.students || ''}
                    onChange={(e) => setPlans({ ...plans, enterprise: { ...plans.enterprise, students: e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Storage (GB)</label>
                  <input
                    type="number"
                    value={plans.enterprise?.storage || ''}
                    onChange={(e) => setPlans({ ...plans, enterprise: { ...plans.enterprise, storage: +e.target.value } })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white dark:bg-slate-900 border-t border-primary/10">
        <button onClick={handleSave} className="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PlanEditDrawer;