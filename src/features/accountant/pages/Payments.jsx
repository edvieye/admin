import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const Payments = () => {
  const [filterMethod, setFilterMethod] = useState('All');
  const [search, setSearch] = useState('');

  // Mock payment data
  const payments = [
    {
      id: 'TXN-101',
      student: 'James Smith',
      class: 'Grade 10-A',
      date: 'Dec 28, 2023',
      amount: 1250.00,
      method: 'Bank Transfer',
      reference: 'TRF-2023-001',
      status: 'Completed',
    },
    {
      id: 'TXN-102',
      student: 'Emily Murphy',
      class: 'Grade 8-C',
      date: 'Dec 24, 2023',
      amount: 980.00,
      method: 'Credit Card',
      reference: 'CC-2023-042',
      status: 'Completed',
    },
    {
      id: 'TXN-103',
      student: 'Alex Lee',
      class: 'Grade 12-B',
      date: 'Jan 02, 2024',
      amount: 1400.00,
      method: 'Cash',
      reference: 'CSH-001',
      status: 'Completed',
    },
    {
      id: 'TXN-104',
      student: 'Sarah Johnson',
      class: 'Grade 9-C',
      date: 'Jan 05, 2024',
      amount: 550.00,
      method: 'Bank Transfer',
      reference: 'TRF-2023-015',
      status: 'Pending',
    },
    {
      id: 'TXN-105',
      student: 'Michael Brown',
      class: 'Grade 11-A',
      date: 'Dec 15, 2023',
      amount: 1350.00,
      method: 'UPI',
      reference: 'UPI-7721',
      status: 'Completed',
    },
  ];

  // Unique payment methods for filter
  const methods = ['All', 'Bank Transfer', 'Credit Card', 'Cash', 'UPI'];

  const filteredPayments = payments.filter(pmt => {
    const matchesMethod = filterMethod === 'All' || pmt.method === filterMethod;
    const matchesSearch = pmt.student.toLowerCase().includes(search.toLowerCase()) ||
                         pmt.id.toLowerCase().includes(search.toLowerCase()) ||
                         pmt.reference.toLowerCase().includes(search.toLowerCase());
    return matchesMethod && matchesSearch;
  });

  const handleRecordPayment = () => toast.success('Record Payment clicked (demo)');
  const handleViewReceipt = (id) => toast.success(`View receipt for ${id} (demo)`);
  const handleReconcile = (id) => toast.success(`Reconcile payment ${id} (demo)`);
  const handleExport = () => toast.success('Export payments (demo)');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payments</h2>
              <p className="text-slate-500 text-sm">Track all incoming payments</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
              >
                <span className="material-icons text-sm">download</span>
                Export
              </button>
              <button
                onClick={handleRecordPayment}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
              >
                <span className="material-icons text-sm">add</span>
                Record Payment
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Total Collected</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$45,230.00</p>
              <p className="text-xs text-emerald-600 mt-1">+8.3% vs last month</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Pending</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$3,450.00</p>
              <p className="text-xs text-amber-600 mt-1">5 transactions</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Today's Receipts</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$2,850.00</p>
              <p className="text-xs text-primary mt-1">12 transactions</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Avg. Payment</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$905.00</p>
              <p className="text-xs text-slate-400 mt-1">per transaction</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search by student, ID, or reference..."
              />
            </div>
            <select
              value={filterMethod}
              onChange={(e) => setFilterMethod(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
            >
              {methods.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Payments Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Reference</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredPayments.map(pmt => (
                    <tr key={pmt.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-medium text-primary">{pmt.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{pmt.student}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{pmt.class}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{pmt.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">${pmt.amount.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{pmt.method}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-mono">{pmt.reference}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase ${pmt.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {pmt.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button
                          onClick={() => handleViewReceipt(pmt.id)}
                          className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                          title="View Receipt"
                        >
                          <span className="material-icons text-sm">receipt</span>
                        </button>
                        {pmt.status === 'Pending' && (
                          <button
                            onClick={() => handleReconcile(pmt.id)}
                            className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                            title="Reconcile"
                          >
                            <span className="material-icons text-sm">sync</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredPayments.length === 0 && (
                    <tr>
                      <td colSpan="9" className="px-6 py-8 text-center text-slate-500">No payments found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-sm text-slate-500">Showing <span className="font-medium">1-{filteredPayments.length}</span> of <span className="font-medium">{payments.length}</span> payments</p>
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

export default Payments;