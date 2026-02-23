import { useState, useEffect } from 'react';
import { getDashboardStats, getAnnouncements } from '../services/dashboardService';

export const useDashboard = () => {
  const [stats, setStats] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDashboardStats(), getAnnouncements()])
      .then(([statsData, annData]) => {
        setStats(statsData);
        setAnnouncements(annData);
      })
      .finally(() => setLoading(false));
  }, []);

  return { stats, announcements, loading };
};