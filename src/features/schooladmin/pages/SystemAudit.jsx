import React from 'react';

const SystemAudit = () => {
  const logs = [
    { user: 'Sarah Mitchell', role: 'Bursar Office', action: 'Updated Fee', target: 'Student ID: #88210 • Tuition Payment Schedule', timestamp: 'Oct 27, 2023 09:42:15 AM', ip: '192.168.1.45', color: 'blue' },
    { user: 'David Chen', role: 'Senior Teacher', action: 'Marked Attendance', target: 'Class: Grade 10-B • Morning Session', timestamp: 'Oct 27, 2023 08:15:02 AM', ip: '192.168.1.102', color: 'primary' },
    { user: 'John Adams', role: 'IT Administrator', action: 'Security Policy Edit', target: 'Global Settings • Password Requirements', timestamp: 'Oct 26, 2023 04:30:55 PM', ip: '10.0.0.12', color: 'orange' },
    { user: 'Emily Watson', role: 'Assistant Principal', action: 'Updated Grade', target: 'Student ID: #44012 • Final Term Mathematics', timestamp: 'Oct 26, 2023 02:12:18 PM', ip: '192.168.1.15', color: 'purple' },
    { user: 'Unknown', role: 'Guest User', action: 'Failed Login', target: 'System Login • Admin Panel Attempt', timestamp: 'Oct 26, 2023 11:55:00 AM', ip: '45.22.10.8', color: 'red' },
  ];

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-dark p-5 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 font-medium">Total Logs</span>
            <span className="material-icons text-primary/40">history</span>
          </div>
          <div className="text-2xl font-bold">124,582</div>
          <div className="text-xs text-primary mt-1 font-medium">+1,204 last 24h</div>
        </div>
        <div className="bg-white dark:bg-neutral-dark p-5 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 font-medium">Critical Changes</span>
            <span className="material-icons text-orange-500/40">warning</span>
          </div>
          <div className="text-2xl font-bold">14</div>
          <div className="text-xs text-orange-500 mt-1 font-medium">Requires Review</div>
        </div>
        <div className="bg-white dark:bg-neutral-dark p-5 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 font-medium">Failed Attempts</span>
            <span className="material-icons text-red-500/40">error_outline</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-red-500 mt-1 font-medium">Potential Security Risk</div>
        </div>
        <div className="bg-white dark:bg-neutral-dark p-5 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-dark/60 dark:text-neutral-light/60 font-medium">Active Users Today</span>
            <span className="material-icons text-primary/40">people</span>
          </div>
          <div className="text-2xl font-bold">86</div>
          <div className="text-xs text-primary mt-1 font-medium">System Utilization High</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-neutral-dark rounded-xl border border-primary/10 shadow-sm p-4 mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[280px]">
            <label className="block text-xs font-semibold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-wider mb-1.5">Search Logs</label>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark/40 text-sm">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-neutral-dark border-primary/10 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Search by user, ID, IP, or entity..." />
            </div>
          </div>
          <div className="w-48">
            <label className="block text-xs font-semibold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-wider mb-1.5">User Role</label>
            <select className="w-full py-2 bg-background-light dark:bg-neutral-dark border-primary/10 rounded-lg text-sm focus:ring-primary focus:border-primary">
              <option>All Roles</option>
              <option>Principal</option>
              <option>Teacher</option>
              <option>Bursar</option>
            </select>
          </div>
          <div className="w-48">
            <label className="block text-xs font-semibold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-wider mb-1.5">Action Type</label>
            <select className="w-full py-2 bg-background-light dark:bg-neutral-dark border-primary/10 rounded-lg text-sm focus:ring-primary focus:border-primary">
              <option>All Actions</option>
              <option>Fee Update</option>
              <option>Attendance Mark</option>
              <option>Grade Edit</option>
            </select>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-md shadow-primary/20 flex items-center gap-2">
            <span className="material-icons text-sm">filter_list</span> Apply Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-neutral-dark rounded-xl border border-primary/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light/50 dark:bg-neutral-dark/50 border-b border-primary/10">
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest">User Info</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest">Action</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest">Entity Target</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest">Timestamp</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest">IP Address</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-dark/60 dark:text-neutral-light/60 uppercase tracking-widest text-right">Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {logs.map((log, idx) => (
                <tr key={idx} className={`hover:bg-primary/[0.02] transition-colors ${log.action === 'Failed Login' ? 'bg-orange-50/30 dark:bg-orange-900/5' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {log.user.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{log.user}</p>
                        <p className="text-[10px] text-neutral-dark/50 dark:text-neutral-light/50">{log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-${log.color}-100 dark:bg-${log.color}-900/30 text-${log.color}-700 dark:text-${log.color}-400 text-xs font-semibold`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${log.color}-500`}></span>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{log.target.split(' • ')[0]}</p>
                    <p className="text-[10px] text-neutral-dark/50 dark:text-neutral-light/50">{log.target.split(' • ')[1]}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{log.timestamp.split(' ')[0] + ' ' + log.timestamp.split(' ')[1]}</p>
                    <p className="text-[10px] text-neutral-dark/50 dark:text-neutral-light/50 uppercase">{log.timestamp.split(' ')[2]}</p>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-background-light dark:bg-neutral-dark/50 px-2 py-1 rounded">{log.ip}</code>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 ml-auto">
                      View Details
                      <span className="material-icons text-xs">open_in_new</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-background-light/30 dark:bg-neutral-dark/30 flex items-center justify-between border-t border-primary/10">
          <p className="text-sm text-neutral-dark/60 dark:text-neutral-light/60">Showing <span className="font-semibold">1-5</span> of <span className="font-semibold">124,582</span> results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-white dark:hover:bg-neutral-dark transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3.5 py-1.5 rounded bg-primary text-white text-sm font-semibold shadow-sm">1</button>
            <button className="px-3.5 py-1.5 rounded border border-primary/10 text-sm font-medium hover:bg-white dark:hover:bg-neutral-dark transition-colors">2</button>
            <button className="px-3.5 py-1.5 rounded border border-primary/10 text-sm font-medium hover:bg-white dark:hover:bg-neutral-dark transition-colors">3</button>
            <span className="px-2 text-neutral-dark/40">...</span>
            <button className="px-3 py-1.5 rounded border border-primary/20 text-sm font-medium hover:bg-white dark:hover:bg-neutral-dark transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAudit;