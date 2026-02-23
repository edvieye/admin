import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAdminAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md mx-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold">Create Admin Account</h3>
          <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="p-6 space-y-5">
          {/* Staff Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Staff Member</label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person_search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search staff to assign..." />
            </div>
            <p className="text-[11px] text-slate-500">Search from existing school staff list.</p>
          </div>

          {/* Role Assignment */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Assign System Role</label>
            <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 cursor-pointer">
              <option disabled selected value="">Select a role...</option>
              <option>Accountant</option>
              <option>Teacher</option>
              <option>IT Support</option>
              <option>Senior Admin</option>
              <option>Registrar</option>
            </select>
          </div>

          {/* Credentials Section */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Initial Password</label>
              <div className="relative">
                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                <input className="w-full pl-10 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50" type="password" defaultValue="••••••••" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <span className="material-icons text-sm">visibility</span>
                </button>
              </div>
              {/* Password Strength Indicator */}
              <div className="flex gap-1 mt-1">
                <div className="h-1 flex-1 bg-primary rounded-full"></div>
                <div className="h-1 flex-1 bg-primary rounded-full"></div>
                <div className="h-1 flex-1 bg-primary rounded-full"></div>
                <div className="h-1 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-500 text-right">Strength: Strong</p>
            </div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors peer-checked:bg-primary"></div>
                <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Email invitation to staff member</span>
            </label>
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
          <button onClick={() => navigate(-1)} className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all">Cancel</button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-opacity-90 rounded-lg transition-all shadow-sm shadow-primary/20">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminAccount;