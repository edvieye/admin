

import api from '../api';

export const getDashboardOverview = () => {
  return api.get('/superadmin/dashboard/overview');
};