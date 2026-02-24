import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrSettings = () => {
  const [leavePolicies, setLeavePolicies] = useState({
    annualLeaveDays: 20,
    sickLeaveDays: 10,
    personalLeaveDays: 5,
    carryForward: true,
    maxCarryForwardDays: 5,
  });

  const [approvalSettings, setApprovalSettings] = useState({
    autoApprove: false,
    autoApproveThreshold: 3,
    requireDocs: true,
    notifyManager: true,
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    dailyDigest: true,
  });

  const handleSaveGeneral = () => toast.success('General settings saved (demo)');
  const handleSaveLeave = () => toast.success('Leave policies updated (demo)');
  const handleSaveApproval = () => toast.success('Approval settings saved (demo)');
  const handleSaveNotifications = () => toast.success('Notification preferences saved (demo)');

  return (
    <HrPageWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">HR Settings</h2>
          <p className="text-gray-500 text-sm">Configure leave policies, approval workflows, and system preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leave Policies */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons">beach_access</span>
              </div>
              <h3 className="text-lg font-bold">Leave Policies</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Annual Leave (days)</label>
                <input
                  type="number"
                  value={leavePolicies.annualLeaveDays}
                  onChange={(e) => setLeavePolicies({...leavePolicies, annualLeaveDays: +e.target.value})}
                  className="w-20 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-right"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sick Leave (days)</label>
                <input
                  type="number"
                  value={leavePolicies.sickLeaveDays}
                  onChange={(e) => setLeavePolicies({...leavePolicies, sickLeaveDays: +e.target.value})}
                  className="w-20 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-right"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Personal Leave (days)</label>
                <input
                  type="number"
                  value={leavePolicies.personalLeaveDays}
                  onChange={(e) => setLeavePolicies({...leavePolicies, personalLeaveDays: +e.target.value})}
                  className="w-20 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-right"
                />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="carryForward"
                    checked={leavePolicies.carryForward}
                    onChange={(e) => setLeavePolicies({...leavePolicies, carryForward: e.target.checked})}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="carryForward" className="text-sm font-medium text-slate-700 dark:text-slate-300">Allow carry forward</label>
                </div>
                {leavePolicies.carryForward && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Max days:</span>
                    <input
                      type="number"
                      value={leavePolicies.maxCarryForwardDays}
                      onChange={(e) => setLeavePolicies({...leavePolicies, maxCarryForwardDays: +e.target.value})}
                      className="w-16 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    />
                  </div>
                )}
              </div>
              <button
                onClick={handleSaveLeave}
                className="w-full mt-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
              >
                Save Leave Policies
              </button>
            </div>
          </div>

          {/* Approval Workflow */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons">rule</span>
              </div>
              <h3 className="text-lg font-bold">Approval Workflow</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="autoApprove"
                    checked={approvalSettings.autoApprove}
                    onChange={(e) => setApprovalSettings({...approvalSettings, autoApprove: e.target.checked})}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="autoApprove" className="text-sm font-medium text-slate-700 dark:text-slate-300">Auto-approve leave requests</label>
                </div>
                {approvalSettings.autoApprove && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">if ≤</span>
                    <input
                      type="number"
                      value={approvalSettings.autoApproveThreshold}
                      onChange={(e) => setApprovalSettings({...approvalSettings, autoApproveThreshold: +e.target.value})}
                      className="w-16 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    />
                    <span className="text-xs text-slate-500">days</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="requireDocs"
                  checked={approvalSettings.requireDocs}
                  onChange={(e) => setApprovalSettings({...approvalSettings, requireDocs: e.target.checked})}
                  className="rounded text-primary focus:ring-primary"
                />
                <label htmlFor="requireDocs" className="text-sm font-medium text-slate-700 dark:text-slate-300">Require supporting documents for sick leave</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="notifyManager"
                  checked={approvalSettings.notifyManager}
                  onChange={(e) => setApprovalSettings({...approvalSettings, notifyManager: e.target.checked})}
                  className="rounded text-primary focus:ring-primary"
                />
                <label htmlFor="notifyManager" className="text-sm font-medium text-slate-700 dark:text-slate-300">Notify department manager on submission</label>
              </div>
              <button
                onClick={handleSaveApproval}
                className="w-full mt-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
              >
                Save Approval Settings
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons">notifications</span>
              </div>
              <h3 className="text-lg font-bold">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="emailAlerts"
                  checked={notifications.emailAlerts}
                  onChange={(e) => setNotifications({...notifications, emailAlerts: e.target.checked})}
                  className="rounded text-primary focus:ring-primary"
                />
                <label htmlFor="emailAlerts" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email alerts for pending approvals</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pushNotifications"
                  checked={notifications.pushNotifications}
                  onChange={(e) => setNotifications({...notifications, pushNotifications: e.target.checked})}
                  className="rounded text-primary focus:ring-primary"
                />
                <label htmlFor="pushNotifications" className="text-sm font-medium text-slate-700 dark:text-slate-300">Push notifications (mobile app)</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dailyDigest"
                  checked={notifications.dailyDigest}
                  onChange={(e) => setNotifications({...notifications, dailyDigest: e.target.checked})}
                  className="rounded text-primary focus:ring-primary"
                />
                <label htmlFor="dailyDigest" className="text-sm font-medium text-slate-700 dark:text-slate-300">Daily digest email</label>
              </div>
              <button
                onClick={handleSaveNotifications}
                className="w-full mt-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
              >
                Save Notification Settings
              </button>
            </div>
          </div>

          {/* General Settings */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons">settings</span>
              </div>
              <h3 className="text-lg font-bold">General</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Working days per week</label>
                <select className="px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm">
                  <option>5 days (Mon-Fri)</option>
                  <option>6 days (Mon-Sat)</option>
                  <option>7 days</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Default shift start</label>
                <input type="time" defaultValue="08:00" className="px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Default shift end</label>
                <input type="time" defaultValue="16:00" className="px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
              </div>
              <button
                onClick={handleSaveGeneral}
                className="w-full mt-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
              >
                Save General Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </HrPageWrapper>
  );
};

export default HrSettings;