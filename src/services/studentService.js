// src/services/studentService.js
import apiClient from './apiClient';

export const getStudents = async (params) => {
  const response = await apiClient.get('/students', { params });
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await apiClient.get(`/students/${id}`);
  return response.data;
};

export const addStudent = async (data) => {
  const response = await apiClient.post('/students', data);
  return response.data;
};

export const updateStudent = async (id, data) => {
  const response = await apiClient.put(`/students/${id}`, data);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await apiClient.delete(`/students/${id}`);
  return response.data;
};