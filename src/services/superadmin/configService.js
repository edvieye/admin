import api from '../api';

export const getConfig = async () => {
  return api.get('/superadmin/configuration');
};

export const updateConfig = async (data) => {
  return api.put('/superadmin/configuration', data);
};