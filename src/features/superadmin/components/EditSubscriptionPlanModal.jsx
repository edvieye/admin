import React, { useState, useEffect } from 'react';
import { getPlans } from '../../../services/superadmin/planService';
import { updateSubscriptionPlan } from '../../../services/superadmin/subscriptionService';
import toast from 'react-hot-toast';

const EditSubscriptionPlanModal = ({ isOpen, onClose, schoolId, currentPlan, onSuccess }) => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchPlans();
      setSelectedPlan(currentPlan || '');
    }
  }, [isOpen, currentPlan]);

  useEffect(() => {
    // Update details when selected plan changes
    const details = plans.find(p => p.code === selectedPlan);
    setSelectedPlanDetails(details);
  }, [selectedPlan, plans]);

  const fetchPlans = async () => {
    try {
      const data = await getPlans();
      setPlans(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error('Failed to load plans');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      toast.error('Please select a plan');
      return;
    }
    setLoading(true);
    try {
      await updateSubscriptionPlan(schoolId, {
        planCode: selectedPlan,
        validUntil: validUntil || undefined,
      });
      toast.success('Plan updated successfully');
      onSuccess?.();
      onClose();
    } catch (error) {
      toast.error('Failed to update plan');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Edit Subscription Plan</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
              <span className="material-icons">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Plan</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  required
                >
                  <option value="">Select a plan</option>
                  {plans.map((plan) => (
                    <option key={plan.code} value={plan.code}>
                      {plan.name} (${plan.priceMonthly}/mo)
                    </option>
                  ))}
                </select>
              </div>
              {selectedPlanDetails && (
                <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                  <p><strong>Features:</strong> {selectedPlanDetails.features?.join(', ') || 'N/A'}</p>
                  <p><strong>Max Students:</strong> {selectedPlanDetails.students || 'Unlimited'}</p>
                  <p><strong>Storage:</strong> {selectedPlanDetails.storage} GB</p>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Valid Until (optional)</label>
                <input
                  type="date"
                  value={validUntil}
                  onChange={(e) => setValidUntil(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50">
                {loading ? 'Updating...' : 'Update Plan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSubscriptionPlanModal;