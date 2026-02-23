// src/hooks/useStudents.js
import { useState, useEffect } from 'react';
import { getStudents } from '../services/studentService';

export const useStudents = (initialFilters = {}) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(initialFilters);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const data = await getStudents({ ...filters, page: pagination.page });
        setStudents(data.items);
        setPagination({
          page: data.page,
          totalPages: data.totalPages,
          total: data.total,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [filters, pagination.page]);

  return { students, loading, error, filters, setFilters, pagination, setPagination };
};