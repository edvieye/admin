import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const FinancialReports = () => {
  const [reportType, setReportType] = useState('monthly');
  const [dateRange, setDateRange] = useState('2023-2024');

  // Mock report data
  const monthlyData = [
    { month: 'Sep', collected: 38500, pending: 4200, overdue: 1800 },
    { month: 'Oct', collected: 41200, pending: 3800, overdue: 2100 },
    { month: 'Nov', collected: 39800, pending: 5100, overdue: 2300 },
    { month: 'Dec', collected: 45200, pending: 3400, overdue: 1900 },
    { month: 'Jan', collected: 46800, pending: 2900, overdue: 1500 },
    { month: 'Feb', collected: 48100, pending: 3100, overdue: 1700 },
  ];

  const summaryStats = {
    totalRevenue: 259600,
    totalPending: 22500,
    totalOverdue: 11300,
    avgCollection: 43267,
    collectionRate: 92.4,
  };

  const handleGenerateReport = () => toast.success('Generating report (demo)');
  const handleExportPDF = () => toast.success('Export PDF clicked (demo)');
  const handleExportExcel = () => toast.success('Export Excel clicked (demo)');
  const handleScheduleReport = () => toast.success('Schedule report (demo)');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Financial Reports</h2>
              <p className="text-slate-500 text-sm">Analyze revenue, pending fees, and payment trends</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExportPDF}
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
              >
                <span className="material-icons text-sm">picture_as_pdf</span>
                PDF
              </button>
              <button
                onClick={handleExportExcel}
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
              >
                <span className="material-icons text-sm">table_chart</span>
                Excel
              </button>
              <button
                onClick={handleGenerateReport}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
              >
                <span className="material-icons text-sm">refresh</span>
                Generate
              </button>
            </div>
          </div>

          {/* Report Controls */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Report Type:</span>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="monthly">Monthly Summary</option>
                <option value="quarterly">Quarterly Summary</option>
                <option value="yearly">Yearly Summary</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Period:</span>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="2023-2024">Academic Year 2023-24</option>
                <option value="2022-2023">Academic Year 2022-23</option>
                <option value="2024-2025">Academic Year 2024-25</option>
              </select>
            </div>
            <button
              onClick={handleScheduleReport}
              className="ml-auto flex items-center gap-2 text-primary text-sm font-bold hover:underline"
            >
              <span className="material-icons text-sm">schedule</span>
              Schedule Auto-Report
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm col-span-2">
              <p className="text-xs font-medium text-slate-500 uppercase">Total Revenue (YTD)</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">${summaryStats.totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-emerald-600 mt-1">↑ 12.4% vs previous year</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Pending Fees</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${summaryStats.totalPending.toLocaleString()}</p>
              <p className="text-xs text-amber-600 mt-1">8.7% of total</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Overdue</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${summaryStats.totalOverdue.toLocaleString()}</p>
              <p className="text-xs text-red-600 mt-1">4.4% of total</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase">Collection Rate</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{summaryStats.collectionRate}%</p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                <div className="bg-primary h-full rounded-full" style={{ width: `${summaryStats.collectionRate}%` }}></div>
              </div>
            </div>
          </div>

          {/* Chart (simulated) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Monthly Collection Trend</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Collected</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span>Pending</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span>Overdue</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-4">
              {monthlyData.map((data, idx) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col-reverse items-center h-48">
                    <div className="w-full bg-primary rounded-t-sm" style={{ height: `${(data.collected / 50000) * 100}%` }}></div>
                    <div className="w-full bg-amber-400 rounded-t-sm" style={{ height: `${(data.pending / 50000) * 100}%` }}></div>
                    <div className="w-full bg-red-400 rounded-t-sm" style={{ height: `${(data.overdue / 50000) * 100}%` }}></div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">receipt</span>
                </div>
                <div>
                  <h4 className="font-bold">Fee Collection Report</h4>
                  <p className="text-xs text-slate-500">Detailed breakdown by class</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">View collection status per grade, with filters by payment method.</p>
              <button onClick={() => toast.success('Generate Fee Collection Report (demo)')} className="w-full py-2 border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary/5 transition-colors">
                Generate
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">account_balance</span>
                </div>
                <div>
                  <h4 className="font-bold">Outstanding Dues</h4>
                  <p className="text-xs text-slate-500">List of overdue payments</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">All students with pending fees, sorted by due date.</p>
              <button onClick={() => toast.success('Generate Outstanding Dues (demo)')} className="w-full py-2 border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary/5 transition-colors">
                Generate
              </button>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">trending_up</span>
                </div>
                <div>
                  <h4 className="font-bold">Revenue Analytics</h4>
                  <p className="text-xs text-slate-500">Year-over-year comparison</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Growth trends, forecasting, and variance analysis.</p>
              <button onClick={() => toast.success('Generate Revenue Analytics (demo)')} className="w-full py-2 border border-primary text-primary rounded-lg text-xs font-bold hover:bg-primary/5 transition-colors">
                Generate
              </button>
            </div>
          </div>

          {/* Recent Reports List */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold">Recently Generated Reports</h3>
              <button onClick={() => toast.success('View all reports (demo)')} className="text-primary text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Monthly_Summary_Oct2023.pdf</p>
                  <p className="text-xs text-slate-400">Generated Oct 31, 2023 • 2.4 MB</p>
                </div>
                <button onClick={() => toast.success('Download report (demo)')} className="text-primary text-xs font-bold">Download</button>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Outstanding_Dues_Q4.xlsx</p>
                  <p className="text-xs text-slate-400">Generated Oct 28, 2023 • 1.1 MB</p>
                </div>
                <button onClick={() => toast.success('Download report (demo)')} className="text-primary text-xs font-bold">Download</button>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Fee_Collection_By_Class.pdf</p>
                  <p className="text-xs text-slate-400">Generated Oct 25, 2023 • 3.2 MB</p>
                </div>
                <button onClick={() => toast.success('Download report (demo)')} className="text-primary text-xs font-bold">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;