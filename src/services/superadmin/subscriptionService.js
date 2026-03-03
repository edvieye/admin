

import api from '../api';

export const getSubscriptions = (params = {}) => {
  return api.get('/superadmin/subscriptions', { params });
};

export const updateSubscriptionPlan = (schoolId, data) => {
  return api.patch(`/superadmin/subscriptions/${schoolId}/plan`, data);
};

export const updateAutoRenew = (schoolId, autoRenew) => {
  return api.patch(`/superadmin/subscriptions/${schoolId}/auto-renew`, { autoRenew });
};