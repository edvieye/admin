import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuperAdminLayout from '../components/SuperAdminLayout';
import AddSchoolModal from '../components/AddSchoolModal';
import toast from 'react-hot-toast';

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  const [chartPeriod, setChartPeriod] = useState('monthly');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { label: 'Total Registered Schools', value: '1,248', trend: '+12%', icon: 'apartment' },
    { label: 'Platform Revenue', value: '$452,000', trend: '+5.2%', icon: 'account_balance_wallet' },
    { label: 'Active User Growth', value: '85.4k', retention: '92%', icon: 'groups' },
  ];

  const subscriptionPlans = [
    { name: 'Enterprise', count: 452, color: 'bg-primary' },
    { name: 'Standard', count: 612, color: 'bg-primary/60' },
    { name: 'Basic', count: 184, color: 'bg-primary/20' },
  ];

  const recentSchools = [
    { name: 'Northwood International', plan: 'Enterprise', date: 'Oct 24, 2023', status: 'Active', icon: 'school' },
    { name: 'St. Mary Academy', plan: 'Standard', date: 'Oct 22, 2023', status: 'Pending', icon: 'school' },
    { name: 'Tech High Vocational', plan: 'Enterprise', date: 'Oct 21, 2023', status: 'Active', icon: 'school' },
  ];

  // Chart data based on period
  const monthlyData = [40, 55, 75, 65, 85, 95];
  const quarterlyData = [60, 70, 80, 90]; // example
  const chartData = chartPeriod === 'monthly' ? monthlyData : quarterlyData;
  const chartLabels = chartPeriod === 'monthly'
    ? ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
    : ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <SuperAdminLayout
      pageTitle="System Overview"
      headerAction={
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
        >
          <span className="material-icons text-[18px]">add</span>
          New School
        </button>
      }
    >
      <AddSchoolModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={(newSchool) => {
        toast.success('School added (demo)');
        // In real app, you'd update state or refetch
      }} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <span className="material-icons">{stat.icon}</span>
              </div>
              {stat.trend && (
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                  <span className="material-icons text-[16px]">trending_up</span>
                  {stat.trend}
                </div>
              )}
            </div>
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{stat.label}</h3>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{stat.value}</p>
            {stat.retention && (
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-4/5 rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-primary">{stat.retention} Retention</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">Revenue Over Time</h2>
              <p className="text-sm text-slate-500 font-medium">Subscription earnings by month</p>
            </div>
            <div className="flex gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
              <button
                onClick={() => setChartPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  chartPeriod === 'monthly'
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setChartPeriod('quarterly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  chartPeriod === 'quarterly'
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Quarterly
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-2">
            {chartData.map((height, i) => (
              <div key={i} className="flex-1 flex flex-col gap-2 group cursor-pointer">
                <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-t-lg relative" style={{ height: `${height}%` }}>
                  <div className={`absolute bottom-0 w-full h-full ${i === 2 || i === 5 ? 'bg-primary' : 'bg-primary/30'} rounded-t-lg`}></div>
                </div>
                <span className="text-[10px] text-center font-bold text-slate-400">{chartLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Plans Donut */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6">Subscription Plans</h2>
          <div className="relative flex items-center justify-center flex-1 h-48">
            <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 176 176">
              <circle className="text-slate-100 dark:text-slate-800" cx="88" cy="88" fill="transparent" r="75" stroke="currentColor" strokeWidth="14"></circle>
              <circle className="text-primary" cx="88" cy="88" fill="transparent" r="75" stroke="currentColor" strokeDasharray="471" strokeDashoffset="118" strokeLinecap="round" strokeWidth="14"></circle>
              <circle className="text-primary/40" cx="88" cy="88" fill="transparent" r="75" stroke="currentColor" strokeDasharray="471" strokeDashoffset="353" strokeLinecap="round" strokeWidth="14"></circle>
            </svg>
            <div className="absolute text-center">
              <span className="block text-3xl font-black text-slate-900 dark:text-white tracking-tight">75%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Premium</span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            {subscriptionPlans.map((plan, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${plan.color}`}></span>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{plan.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{plan.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Registrations Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">Recent School Registrations</h2>
          <button
            onClick={() => navigate('/dashboard/super-admin/schools')}
            className="text-primary text-sm font-bold hover:underline"
          >
            View All Records
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4">School Name</th>
                <th className="px-6 py-4">Plan Type</th>
                <th className="px-6 py-4">Registration Date</th>
                <th className="px-6 py-4">System Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentSchools.map((school, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <span className="material-icons text-[20px]">{school.icon}</span>
                      </div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">{school.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg ${
                      school.plan === 'Enterprise' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    } text-[10px] font-bold uppercase tracking-tight`}>
                      {school.plan}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 font-medium">{school.date}</td>
                  <td className="px-6 py-5">
                    <div className={`flex items-center gap-2 ${school.status === 'Active' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      <span className={`w-2 h-2 rounded-full ${school.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                      <span className="text-xs font-bold">{school.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                      <span className="material-icons text-[20px]">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;