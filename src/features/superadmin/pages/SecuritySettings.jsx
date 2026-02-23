import React from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';

const SecuritySettings = () => {
  return (
    <SuperAdminLayout pageTitle="Security Settings">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center">
        <span className="material-icons text-6xl text-primary mb-4">security</span>
        <h2 className="text-2xl font-bold mb-2">Security Settings</h2>
        <p className="text-slate-500">This section is under construction. You will be able to configure global security policies, 2FA, and access logs here.</p>
      </div>
    </SuperAdminLayout>
  );
};

export default SecuritySettings;