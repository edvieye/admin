

import api from '../api';

export const getPlans = () => {
  return api.get('/superadmin/plans');
};

export const updatePlan = (planCode, data) => {
  return api.put(`/superadmin/plans/${planCode}`, data);
};