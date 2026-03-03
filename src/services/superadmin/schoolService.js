

import api from '../api';

export const getSchools = (params = {}) => {
  return api.get('/superadmin/schools', { params });
};

export const getSchoolById = (id) => {
  return api.get(`/superadmin/schools/${id}`);
};

export const createSchool = (data) => {
  return api.post('/superadmin/schools', data);
};

export const updateSchool = (id, data) => {
  return api.put(`/superadmin/schools/${id}`, data);
};

export const updateSchoolStatus = (id, status) => {
  return api.patch(`/superadmin/schools/${id}/status`, { status });
};

export const deleteSchool = (id) => {
  return api.delete(`/superadmin/schools/${id}`);
};