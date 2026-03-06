import api from '../api';

export const getSubscriptions = async (params = {}) => {
  return api.get('/superadmin/subscriptions', { params });
};

export const updateSubscriptionPlan = async (schoolId, data) => {
  return api.patch(`/superadmin/subscriptions/${schoolId}/plan`, data);
};

export const updateAutoRenew = async (schoolId, autoRenew) => {
  return api.patch(`/superadmin/subscriptions/${schoolId}/auto-renew`, { autoRenew });
};