import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const Invoices = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch] = useState('');

  // Mock invoice data
  const invoices = [
    {
      id: 'INV-2023-001',
      student: 'James Smith',
      class: 'Grade 10-A',
      date: 'Dec 28, 2023',
      dueDate: 'Jan 15, 2024',
      amount: 1250.00,
      status: 'Paid',
      items: ['Tuition Fee', 'Lab Fee'],
    },
    {
      id: 'INV-2023-002',
      student: 'Emily Murphy',
      class: 'Grade 8-C',
      date: 'Dec 24, 2023',
      dueDate: 'Jan 10, 2024',
      amount: 980.00,
      status: 'Pending',
      items: ['Transport Fee'],
    },
    {
      id: 'INV-2023-003',
      student: 'Alex Lee',
      class: 'Grade 12-B',
      date: 'Jan 02, 2024',
      dueDate: 'Jan 20, 2024',
      amount: 1400.00,
      status: 'Overdue',
      items: ['Tuition Fee', 'Sports Fee'],
    },
    {
      id: 'INV-2023-004',
      student: 'Sarah Johnson',
      class: 'Grade 9-C',
      date: 'Jan 05, 2024',
      dueDate: 'Jan 25, 2024',
      amount: 1100.00,
      status: 'Pending',
      items: ['Tuition Fee'],
    },
    {
      id: 'INV-2023-005',
      student: 'Michael Brown',
      class: 'Grade 11-A',
      date: 'Dec 15, 2023',
      dueDate: 'Jan 05, 2024',
      amount: 1350.00,
      status: 'Paid',
      items: ['Tuition Fee', 'Library Fee'],
    },
  ];

  // Filter invoices based on status and search
  const filteredInvoices = invoices.filter(inv => {
    const matchesStatus = filterStatus === 'All' || inv.status === filterStatus;
    const matchesSearch = inv.student.toLowerCase().includes(search.toLowerCase()) ||
                         inv.id.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleCreateInvoice = () => toast.success('Create Invoice clicked (demo)');
  const handleSendInvoice = (id) => toast.success(`Invoice ${id} sent (demo)`);
  const handleDownloadInvoice = (id) => toast.success(`Downloading invoice ${id} (demo)`);
  const handleViewInvoice = (id) => toast.success(`Viewing invoice ${id} (demo)`);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-emerald-100 text-emerald-700';
      case 'Pending': return 'bg-amber-100 text-amber-700';
      case 'Overdue': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Invoices</h2>
              <p className="text-slate-500 text-sm">Manage and track all student invoices</p>
            </div>
            <button
              onClick={handleCreateInvoice}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
            >
              <span className="material-icons text-sm">add</span>
              Create Invoice
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search by student or invoice ID..."
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>

          {/* Invoices Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Invoice ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredInvoices.map(inv => (
                    <tr key={inv.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-medium text-primary">{inv.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{inv.student}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{inv.class}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{inv.date}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{inv.dueDate}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">${inv.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusColor(inv.status)}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleViewInvoice(inv.id)}
                          className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                          title="View"
                        >
                          <span className="material-icons text-sm">visibility</span>
                        </button>
                        <button
                          onClick={() => handleDownloadInvoice(inv.id)}
                          className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                          title="Download PDF"
                        >
                          <span className="material-icons text-sm">download</span>
                        </button>
                        <button
                          onClick={() => handleSendInvoice(inv.id)}
                          className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                          title="Send to Parent"
                        >
                          <span className="material-icons text-sm">send</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredInvoices.length === 0 && (
                    <tr>
                      <td colSpan="8" className="px-6 py-8 text-center text-slate-500">No invoices found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-sm text-slate-500">Showing <span className="font-medium">1-{filteredInvoices.length}</span> of <span className="font-medium">{invoices.length}</span> invoices</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-200 rounded text-xs hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 border border-slate-200 rounded text-xs hover:bg-slate-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;