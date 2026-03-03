import React from 'react';
import SuperAdminLayout from '../../superadmin/components/SuperAdminLayout';

const Notifications = () => {
  return (
    <SuperAdminLayout pageTitle="Notifications">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-8 text-center">
        <span className="material-icons text-6xl text-primary mb-4">notifications</span>
        <h2 className="text-2xl font-bold mb-2">Notifications Center</h2>
        <p className="text-slate-500">You have no new notifications.</p>
      </div>
    </SuperAdminLayout>
  );
};

export default Notifications;