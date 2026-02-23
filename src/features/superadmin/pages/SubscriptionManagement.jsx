import React, { useState, useMemo } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import PlanEditDrawer from '../components/PlanEditDrawer';
import toast from 'react-hot-toast';

const SubscriptionManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterPlan, setFilterPlan] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [schools, setSchools] = useState([
    { id: 'SCH-2023-001', name: 'Beacon Heights Academy', plan: 'Enterprise', renewal: 'Nov 14, 2024', status: 'Paid', autoRenew: true },
    { id: 'SCH-2023-082', name: 'Riverdale Secondary', plan: 'Pro', renewal: 'Oct 22, 2023', status: 'Pending', autoRenew: true },
    { id: 'SCH-2023-144', name: 'West Point Prep', plan: 'Basic', renewal: 'Nov 02, 2024', status: 'Paid', autoRenew: false },
    { id: 'SCH-2023-205', name: 'North Hill International', plan: 'Enterprise', renewal: 'Sep 30, 2023', status: 'Overdue', autoRenew: true },
  ]);

  // Filter logic
  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchesSearch = school.name.toLowerCase().includes(search.toLowerCase()) || school.id.toLowerCase().includes(search.toLowerCase());
      const matchesPlan = filterPlan === 'All' || school.plan === filterPlan;
      const matchesStatus = filterStatus === 'All' || school.status === filterStatus;
      return matchesSearch && matchesPlan && matchesStatus;
    });
  }, [schools, search, filterPlan, filterStatus]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);

  const handleToggleAutoRenew = (id) => {
    setSchools(schools.map(s => s.id === id ? { ...s, autoRenew: !s.autoRenew } : s));
    toast.success('Auto-renew toggled');
  };

  const handleExport = (format) => {
    toast.success(`Exporting as ${format} (demo)`);
  };

  const handleAction = (schoolId) => {
    // In real app, open a menu. For demo, just show toast.
    toast('Action menu would open');
  };

  return (
    <SuperAdminLayout
      pageTitle="Subscription Management"
      headerAction={
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
        >
          <span className="material-icons text-[18px]">edit</span>
          Edit Plans
        </button>
      }
    >
      <PlanEditDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons text-6xl">trending_up</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Recurring Revenue (MRR)</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h2 className="text-3xl font-bold">$184,250</h2>
            <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="material-icons text-[10px]">arrow_upward</span> 12%
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Global portfolio growth</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons text-6xl">school</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Subscriptions</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h2 className="text-3xl font-bold">1,248</h2>
            <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="material-icons text-[10px]">arrow_upward</span> 4.5%
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>+24 schools this week</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons text-6xl">event_busy</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Expiring this Month</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-amber-500">82</h2>
            <span className="text-slate-400 text-xs font-medium">Schools</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Requires follow-up intervention</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1 max-w-md">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search schools by name..."
                type="text"
              />
            </div>
            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Plans</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Pro">Pro</option>
              <option value="Basic">Basic</option>
            </select>
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
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Export as:</span>
            <button
              onClick={() => handleExport('CSV')}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary transition-colors"
              title="CSV"
            >
              <span className="material-icons text-sm">table_view</span>
            </button>
            <button
              onClick={() => handleExport('PDF')}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary transition-colors"
              title="PDF"
            >
              <span className="material-icons text-sm">picture_as_pdf</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">School Name</th>
                <th className="px-6 py-4">Current Plan</th>
                <th className="px-6 py-4">Renewal Date</th>
                <th className="px-6 py-4">Payment Status</th>
                <th className="px-6 py-4">Auto-renew</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentSchools.map((school) => (
                <tr key={school.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {school.name.split(' ').map(w => w[0]).join('').slice(0,2)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{school.name}</p>
                        <p className="text-xs text-slate-500">ID: {school.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      school.plan === 'Enterprise' ? 'bg-primary/10 text-primary border border-primary/20' :
                      school.plan === 'Pro' ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20' :
                      'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                    }`}>
                      {school.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{school.renewal}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 ${
                      school.status === 'Paid' ? 'text-emerald-500' :
                      school.status === 'Pending' ? 'text-amber-500' : 'text-rose-500'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        school.status === 'Paid' ? 'bg-emerald-500' :
                        school.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'
                      }`}></span>
                      <span className="text-xs font-medium">{school.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={school.autoRenew}
                        onChange={() => handleToggleAutoRenew(school.id)}
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleAction(school.id)} className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
              {currentSchools.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No subscriptions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredSchools.length)} of {filteredSchools.length} schools
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              <span className="material-icons text-sm">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SubscriptionManagement;