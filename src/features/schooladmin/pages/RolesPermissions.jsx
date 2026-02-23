import React from 'react';

const RolesPermissions = () => {
  const roles = ['Super Admin', 'Accountant', 'Teacher', 'Librarian', 'IT Support'];
  const modules = [
    { name: 'Students', description: 'Profile, enrollment, and records', permissions: [true, true, true, true, true] },
    { name: 'Fees Management', description: 'Collection, invoices, and refunds', permissions: [true, true, false, false, true] },
    { name: 'Attendance', description: 'Student & Staff attendance logs', permissions: [true, false, true, false, true] },
    { name: 'Exams & Grading', description: 'Reports, marksheets, and schedule', permissions: [true, false, true, false, true] },
    { name: 'Transport', description: 'Routes, fleet, and driver logs', permissions: [true, false, false, false, true] },
    { name: 'Staff Payroll', description: 'Salary, deductions, and tax', permissions: [true, true, false, false, false] },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Roles & Permissions</h2>
          <p className="text-slate-500 text-sm mt-1">Configure access levels and module visibility for school staff.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white dark:bg-zinc-800 border border-emerald-200 dark:border-emerald-800 text-slate-700 dark:text-slate-200 font-medium rounded-xl hover:bg-emerald-50 transition-all flex items-center gap-2">
            <span className="material-icons text-lg">add_circle_outline</span> Create New Role
          </button>
          <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
            <span className="material-icons text-lg">save</span> Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Roles Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-emerald-50 dark:border-emerald-950 overflow-hidden">
            <div className="p-4 border-b border-emerald-50 dark:border-emerald-950">
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-xl">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Search roles..." />
              </div>
            </div>
            <nav className="p-2 space-y-1">
              {roles.map((role, idx) => (
                <a key={idx} href="#" className={`flex items-center justify-between px-4 py-3 ${idx === 0 ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800'} font-medium rounded-lg transition-colors`}>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-xl">
                      {role === 'Super Admin' ? 'admin_panel_settings' : role === 'Accountant' ? 'account_balance' : role === 'Teacher' ? 'history_edu' : role === 'Librarian' ? 'badge' : 'person'}
                    </span>
                    <span>{role}</span>
                  </div>
                  {idx === 0 && <span className="material-icons text-sm">chevron_right</span>}
                </a>
              ))}
            </nav>
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 mt-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="material-icons text-sm">info</span> SYSTEM INFO
              </div>
              <p className="text-[11px] text-emerald-600/80 dark:text-emerald-500/80 mt-1 leading-relaxed">
                Some roles are system-locked and cannot be deleted. Changes take effect on next user login.
              </p>
            </div>
          </div>
        </aside>

        {/* Permissions Matrix */}
        <div className="col-span-12 lg:col-span-9">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-emerald-50 dark:border-emerald-950 overflow-hidden">
            <div className="p-6 border-b border-emerald-50 dark:border-emerald-950 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Permissions Matrix: <span className="text-primary">Super Admin</span></h3>
                <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase rounded tracking-wider">Active Role</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-zinc-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[200px]">Functional Module</th>
                    {['View', 'Create', 'Edit', 'Delete', 'Export'].map((action, i) => (
                      <th key={i} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">{action}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-50 dark:divide-emerald-950">
                  {modules.map((mod, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                            <span className="material-icons text-emerald-600 dark:text-emerald-400 text-lg">
                              {mod.name === 'Students' ? 'groups' : mod.name === 'Fees Management' ? 'payments' : mod.name === 'Attendance' ? 'event_available' : mod.name === 'Exams & Grading' ? 'description' : mod.name === 'Transport' ? 'local_shipping' : 'account_balance_wallet'}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-700 dark:text-slate-200">{mod.name}</p>
                            <p className="text-[10px] text-slate-400">{mod.description}</p>
                          </div>
                        </div>
                      </td>
                      {mod.permissions.map((perm, i) => (
                        <td key={i} className="px-6 py-4 text-center">
                          <input type="checkbox" checked={perm} className="w-5 h-5 rounded text-primary focus:ring-primary/20 border-slate-300" readOnly />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-zinc-800/30 border-t border-emerald-50 dark:border-emerald-950 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary"></div><span className="text-xs text-slate-500 font-medium">Full Access</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300"></div><span className="text-xs text-slate-500 font-medium">No Access</span></div>
              </div>
              <p className="text-xs text-slate-400">Last saved: Today at 10:42 AM by System</p>
            </div>
          </div>

          {/* Bulk Inheritance */}
          <div className="mt-6 flex gap-4">
            <div className="flex-1 p-4 rounded-xl border border-dashed border-emerald-200 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/10 flex items-center gap-3">
              <span className="material-icons text-primary">auto_fix_high</span>
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pro Tip: Bulk Inheritance</p>
                <p className="text-xs text-slate-500">You can clone permissions from one role to another to speed up setup.</p>
              </div>
              <button className="ml-auto text-xs font-bold text-primary hover:underline">CLONE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissions;