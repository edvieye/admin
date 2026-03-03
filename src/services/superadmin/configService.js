// import api from '../api.js';


import api from '../api';

export const getConfig = () => {
  return api.get('/superadmin/configuration');
};

export const updateConfig = (data) => {
  return api.put('/superadmin/configuration', data);
};