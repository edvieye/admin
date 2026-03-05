import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const AuditLogs = () => {
  const [search, setSearch] = useState('');
  const [filterAction, setFilterAction] = useState('All');
  const [filterUser, setFilterUser] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data
  const logs = [
    { id: 1, user: 'superadmin@school.edu', action: 'LOGIN', details: 'Logged in from 192.168.1.1', ip: '192.168.1.1', timestamp: '2026-03-03 10:45 AM' },
    { id: 2, user: 'admin@beacon.edu', action: 'SCHOOL_CREATE', details: 'Created school "Beacon Heights Academy"', ip: '10.0.0.5', timestamp: '2026-03-03 09:30 AM' },
    { id: 3, user: 'superadmin@school.edu', action: 'CONFIG_UPDATE', details: 'Updated global SMS settings', ip: '192.168.1.1', timestamp: '2026-03-02 14:15 PM' },
    { id: 4, user: 'hr@westside.edu', action: 'USER_SUSPEND', details: 'Suspended user john@riverdale.edu', ip: '172.16.0.12', timestamp: '2026-03-02 11:20 AM' },
    { id: 5, user: 'superadmin@school.edu', action: 'PLAN_UPDATE', details: 'Updated Pro plan pricing', ip: '192.168.1.1', timestamp: '2026-03-01 16:45 PM' },
    { id: 6, user: 'accountant@northhill.edu', action: 'PAYMENT_PROCESSED', details: 'Processed payment of $1299 for INV-001', ip: '10.0.0.8', timestamp: '2026-03-01 10:15 AM' },
  ];

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.details.toLowerCase().includes(search.toLowerCase()) || log.user.toLowerCase().includes(search.toLowerCase());
    const matchesAction = filterAction === 'All' || log.action === filterAction;
    const matchesUser = filterUser === 'All' || log.user === filterUser;
    // Date filter can be added here
    return matchesSearch && matchesAction && matchesUser;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  const handleExportCSV = () => {
    const csv = Papa.unparse(filteredLogs);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'audit_logs.csv';
    link.click();
    toast.success('CSV exported');
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Audit Logs Report', 14, 15);
    autoTable(doc, {
      head: [['User', 'Action', 'Details', 'IP Address', 'Timestamp']],
      body: filteredLogs.map(l => [l.user, l.action, l.details, l.ip, l.timestamp]),
    });
    doc.save('audit_logs.pdf');
    toast.success('PDF exported');
  };

  const uniqueActions = [...new Set(logs.map(l => l.action))];
  const uniqueUsers = [...new Set(logs.map(l => l.user))];

  // Action color mapping
  const actionColors = {
    LOGIN: 'bg-blue-100 text-blue-700',
    SCHOOL_CREATE: 'bg-green-100 text-green-700',
    CONFIG_UPDATE: 'bg-purple-100 text-purple-700',
    USER_SUSPEND: 'bg-orange-100 text-orange-700',
    PLAN_UPDATE: 'bg-indigo-100 text-indigo-700',
    PAYMENT_PROCESSED: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <SuperAdminLayout pageTitle="Audit Logs" pageDescription="View system events and changes">
      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative col-span-1">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input
              type="text"
              placeholder="Search details..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Actions</option>
            {uniqueActions.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
          <select
            value={filterUser}
            onChange={(e) => setFilterUser(e.target.value)}
            className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Users</option>
            {uniqueUsers.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <button onClick={handleExportCSV} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            <span className="material-icons text-sm">table_view</span> CSV
          </button>
          <button onClick={handleExportPDF} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            <span className="material-icons text-sm">picture_as_pdf</span> PDF
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Details</th>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-medium">{log.user}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${actionColors[log.action] || 'bg-slate-100 text-slate-700'}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{log.details}</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">{log.ip}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 order-2 sm:order-1">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredLogs.length)} of {filteredLogs.length} logs
          </p>
          <div className="flex gap-2 order-1 sm:order-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Previous</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${currentPage === page ? 'bg-primary text-white' : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default AuditLogs;