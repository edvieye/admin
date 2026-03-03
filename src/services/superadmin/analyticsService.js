

import api from '../api';

export const getAnalyticsOverview = () => {
  return api.get('/superadmin/analytics/overview');
};