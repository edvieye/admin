import api from '../api';

export const getSchools = async (params = {}) => {
  const response = await api.get('/superadmin/schools', { params });
  // API returns { items, total, page, limit } – we return the whole response
  return response;
};

export const getSchoolById = async (id) => {
  return api.get(`/superadmin/schools/${id}`);
};

export const createSchool = async (data) => {
  return api.post('/superadmin/schools', data);
};

export const updateSchool = async (id, data) => {
  return api.put(`/superadmin/schools/${id}`, data);
};

export const updateSchoolStatus = async (id, status) => {
  return api.patch(`/superadmin/schools/${id}/status`, { status });
};

export const deleteSchool = async (id) => {
  return api.delete(`/superadmin/schools/${id}`);
};