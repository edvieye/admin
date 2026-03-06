import api from '../api';

export const getAnalyticsOverview = async () => {
  return api.get('/superadmin/analytics/overview');
};