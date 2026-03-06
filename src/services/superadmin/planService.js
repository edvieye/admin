import api from '../api';

export const getPlans = async () => {
  return api.get('/superadmin/plans');
};

export const updatePlan = async (planCode, data) => {
  return api.put(`/superadmin/plans/${planCode}`, data);
};