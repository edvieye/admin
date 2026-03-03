

import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';

const SecuritySettings = () => {
  const [enforce2FA, setEnforce2FA] = useState(false);
  const [passwordMinLength, setPasswordMinLength] = useState(true);
  const [passwordUppercase, setPasswordUppercase] = useState(true);
  const [passwordSpecial, setPasswordSpecial] = useState(true);
  const [passwordExpiry, setPasswordExpiry] = useState(false);
  
  const handleRevokeAll = () => {
    toast.success('All sessions revoked (demo)');
  };

  const handleRotateKeys = () => {
    toast.success('API keys rotated (demo)');
  };

  const handleSave = () => {
    toast.success('Security settings saved (demo)');
  };

  return (
    <SuperAdminLayout pageTitle="Security & Access Control">
      <div className="space-y-6 md:space-y-8">
        {/* Authentication Policies */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-icons text-primary">lock</span>
            <h2 className="text-lg font-bold">Authentication Policies</h2>
          </div>

          <div className="space-y-6">
            {/* Enforce 2FA */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="font-semibold text-sm">Enforce Two-Factor Authentication</h4>
                <p className="text-xs text-slate-500">Require 2FA for all Super Admin accounts</p>
              </div>
              <button
                onClick={() => setEnforce2FA(!enforce2FA)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enforce2FA ? 'bg-primary' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enforce2FA ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Password Policy */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Password Complexity</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={passwordMinLength}
                    onChange={(e) => setPasswordMinLength(e.target.checked)}
                  />
                  Minimum 12 characters
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={passwordUppercase}
                    onChange={(e) => setPasswordUppercase(e.target.checked)}
                  />
                  Require uppercase
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={passwordSpecial}
                    onChange={(e) => setPasswordSpecial(e.target.checked)}
                  />
                  Require special character
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={passwordExpiry}
                    onChange={(e) => setPasswordExpiry(e.target.checked)}
                  />
                  Password expiry (90 days)
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="material-icons text-primary">devices</span>
              <h2 className="text-lg font-bold">Active Admin Sessions</h2>
            </div>
            <button
              onClick={handleRevokeAll}
              className="text-red-500 text-xs font-bold hover:underline"
            >
              Revoke All Sessions
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-50 dark:bg-slate-800 p-3 rounded-lg gap-2">
              <div>
                <p className="font-semibold">Chrome • Windows</p>
                <p className="text-xs text-slate-500">Rajkot, India • Active now</p>
              </div>
              <span className="text-emerald-500 text-xs font-bold">Current</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-50 dark:bg-slate-800 p-3 rounded-lg gap-2">
              <div>
                <p className="font-semibold">Safari • iPhone</p>
                <p className="text-xs text-slate-500">Mumbai, India • 2 hours ago</p>
              </div>
              <button className="text-red-500 text-xs font-bold hover:underline">
                Revoke
              </button>
            </div>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-primary font-bold gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="material-icons text-sm">history</span>
              <span>Recent Security Activity</span>
            </div>
            <button className="hover:underline">View Full Logs</button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex flex-col sm:flex-row justify-between bg-white/50 dark:bg-black/20 p-2 rounded-lg gap-2">
              <span>2FA Enabled for all admins</span>
              <span className="text-slate-400">Today • 10:45 AM</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between bg-white/50 dark:bg-black/20 p-2 rounded-lg gap-2">
              <span>API Key rotated</span>
              <span className="text-slate-400">Yesterday</span>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium"
          >
            Save Security Settings
          </button>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SecuritySettings;