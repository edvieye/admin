

import api from '../api';

export const getTickets = (params = {}) => {
  return api.get('/superadmin/support/tickets', { params });
};

export const getTicketById = (id) => {
  return api.get(`/superadmin/support/tickets/${id}`);
};

export const addReply = (ticketId, message) => {
  return api.post(`/superadmin/support/tickets/${ticketId}/replies`, { message });
};

export const updateTicketStatus = (ticketId, status, assignedToId = null) => {
  const payload = { status };
  if (assignedToId) payload.assignedToId = assignedToId;
  return api.patch(`/superadmin/support/tickets/${ticketId}/status`, payload);
};