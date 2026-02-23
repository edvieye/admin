import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const ExpenseManagement = () => {
  const [search, setSearch] = useState('');
  const [period, setPeriod] = useState('6M');

  const handleLogExpense = () => toast.success('Log Expense clicked (demo)');
  const handleFilter = () => toast.success('Filter clicked (demo)');
  const handleExport = () => toast.success('Export CSV clicked (demo)');
  const handleRowAction = (action, item) => toast.success(`${action} on ${item}`);

  const expenses = [
    {
      id: 1,
      item: 'Main Block Electricity Bill',
      description: 'Invoice: #EL-2023-442',
      category: 'Utilities',
      date: 'Oct 12, 2023',
      amount: 1240.00,
      status: 'Paid',
      receipt: true,
    },
    {
      id: 2,
      item: 'Office Stationery Supplies',
      description: 'Order from Global Stationery',
      category: 'Supplies',
      date: 'Oct 11, 2023',
      amount: 450.25,
      status: 'Paid',
      receipt: true,
    },
    {
      id: 3,
      item: 'HVAC Yearly Maintenance',
      description: 'Service: AC Systems Inc',
      category: 'Maintenance',
      date: 'Oct 08, 2023',
      amount: 2100.00,
      status: 'Pending',
      receipt: false,
    },
    {
      id: 4,
      item: 'Annual Lab Chemicals',
      description: 'Supplier: ScienceDirect',
      category: 'Lab Materials',
      date: 'Oct 05, 2023',
      amount: 3840.00,
      status: 'Paid',
      receipt: true,
    },
    {
      id: 5,
      item: 'Staff Common Room Coffee',
      description: 'Monthly replenishment',
      category: 'Kitchen',
      date: 'Oct 02, 2023',
      amount: 125.00,
      status: 'Rejected',
      receipt: true,
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30';
      case 'Pending': return 'bg-amber-100 text-amber-600 dark:bg-amber-900/30';
      case 'Rejected': return 'bg-rose-100 text-rose-600 dark:bg-rose-900/30';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        {/* Header with action button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Expense Management</h1>
            <p className="text-sm text-slate-500">Track and manage all school expenditures</p>
          </div>
          <button
            onClick={handleLogExpense}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            <span className="material-icons text-sm">add</span>
            Log Expense
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Monthly Expense</span>
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <span className="material-icons">account_balance</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$42,500.00</h3>
              <p className="text-sm text-emerald-600 font-medium flex items-center mt-1">
                <span className="material-icons text-sm">trending_up</span>
                +5.2% vs last month
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Approvals</span>
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <span className="material-icons">pending_actions</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12 Items</h3>
              <p className="text-sm text-amber-600 font-medium mt-1">Needs attention</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Budget Remaining</span>
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <span className="material-icons">savings</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$15,800.00</h3>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-4">
                <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Expenditure Trend</h3>
              <p className="text-sm text-slate-500">Overview of operational costs across the current fiscal year</p>
            </div>
            <div className="flex gap-2">
              {['3M', '6M', '1Y'].map(p => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                    period === p
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 w-full">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path
                d="M0 180C50 170 100 120 150 130C200 140 250 80 300 90C350 100 400 150 450 140C500 130 550 40 600 50C650 60 700 110 750 100C800 90 850 30 900 20C950 10 1000 0 1000 0V200H0V180Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0 180C50 170 100 120 150 130C200 140 250 80 300 90C350 100 400 150 450 140C500 130 550 40 600 50C650 60 700 110 750 100C800 90 850 30 900 20C950 10 1000 0"
                stroke="#137fec"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#137fec" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between mt-4 px-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
                <span key={month} className={`text-xs font-medium ${i === 3 ? 'text-primary' : 'text-slate-400'}`}>
                  {month}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Expenditures Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Expenditures</h3>
            <div className="flex gap-2">
              <button
                onClick={handleFilter}
                className="flex items-center gap-2 px-3 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-icons text-lg">filter_list</span>
                Filter
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-3 py-2 text-sm border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-icons text-lg">download</span>
                Export CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Expense Item</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Receipt</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {expenses.map((exp) => (
                  <tr key={exp.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{exp.item}</p>
                      <p className="text-xs text-slate-500">{exp.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        exp.category === 'Utilities' ? 'bg-blue-100 text-blue-600' :
                        exp.category === 'Supplies' ? 'bg-slate-100 text-slate-600' :
                        exp.category === 'Maintenance' ? 'bg-purple-100 text-purple-600' :
                        exp.category === 'Lab Materials' ? 'bg-emerald-100 text-emerald-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {exp.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{exp.date}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">${exp.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-bold uppercase w-fit ${getStatusStyle(exp.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          exp.status === 'Paid' ? 'bg-emerald-600' :
                          exp.status === 'Pending' ? 'bg-amber-600' : 'bg-rose-600'
                        }`}></span>
                        {exp.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleRowAction('View receipt', exp.item)}
                        className={`p-1 rounded transition-colors ${exp.receipt ? 'text-slate-400 hover:text-primary' : 'text-slate-300 cursor-not-allowed'}`}
                        disabled={!exp.receipt}
                      >
                        <span className="material-icons">{exp.receipt ? 'attachment' : 'link_off'}</span>
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleRowAction('More options', exp.item)}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <span className="material-icons">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500">Showing <span className="font-medium">1-5</span> of <span className="font-medium">248</span> transactions</p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Previous</button>
              <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseManagement;