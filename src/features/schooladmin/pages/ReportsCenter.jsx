import React from 'react';

const ReportsCenter = () => {
  const recentExports = [
    { name: 'Q3_Final_Financial_Summary.xlsx', by: 'Admin Sarah K.', time: '2 mins ago', format: 'EXCEL', status: 'Ready' },
    { name: 'Class_7A_Attendance_May.pdf', by: 'System Automator', time: '1 hour ago', format: 'PDF', status: 'Ready' },
    { name: 'Student_Enrollment_FY24.xlsx', by: 'Admin Sarah K.', time: 'Yesterday', format: 'EXCEL', status: 'Archived' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Reports & Exports Center</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage and generate school-wide data exports</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
            <span className="material-icons text-sm">settings</span> Configure
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
            <span className="material-icons text-sm">add</span> New Custom Report
          </button>
        </div>
      </div>

      {/* Global Filters */}
      <div className="mt-6 flex flex-wrap items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl mb-8">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-primary uppercase tracking-wider">Academic Session</label>
          <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer p-0 pr-8">
            <option>2023 - 2024</option>
            <option>2022 - 2023</option>
          </select>
        </div>
        <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-primary uppercase tracking-wider">Date Range</label>
          <div className="flex items-center gap-2">
            <span className="material-icons text-sm text-slate-400">calendar_today</span>
            <span className="text-sm font-medium">Aug 01, 2023 - May 30, 2024</span>
          </div>
        </div>
        <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-primary uppercase tracking-wider">School Branch</label>
          <select className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer p-0 pr-8">
            <option>North Campus Main</option>
            <option>South Campus Annex</option>
          </select>
        </div>
        <button className="ml-auto p-2 hover:bg-white/10 rounded-lg text-slate-400">
          <span className="material-icons">filter_list</span>
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Student Reports', icon: 'groups', desc: 'Enrollment lists, demographic breakdowns...', checks: ['Enrollment Summary', 'Medical Records'] },
          { title: 'Attendance Reports', icon: 'event_available', desc: 'Monthly trends, student absence logs...', checks: ['Monthly Trend Analysis', 'Low Attendance Alerts'] },
          { title: 'Financial Reports', icon: 'account_balance_wallet', desc: 'Fee collection status, pending dues...', checks: ['Fee Collection Ledger', 'Pending Dues List'] },
          { title: 'Exam Performance', icon: 'insights', desc: 'Subject-wise averages, class rankings...', checks: ['Ranking Distribution', 'Subject Performance'] },
        ].map((report, idx) => (
          <div key={idx} className="bg-white dark:bg-[#162a19] border border-white/5 rounded-xl p-5 hover:border-primary/40 transition-all flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-icons text-primary">{report.icon}</span>
              </div>
              <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 font-bold rounded uppercase">Data Heavy</span>
            </div>
            <h3 className="text-lg font-bold mb-1">{report.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{report.desc}</p>
            <div className="space-y-2 mb-6">
              {report.checks.map((check, i) => (
                <label key={i} className="flex items-center gap-2 p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
                  <input type="checkbox" className="rounded border-white/10 bg-transparent text-primary focus:ring-primary/20" defaultChecked={i === 0} />
                  <span className="text-sm">{check}</span>
                </label>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2">
              <button className="flex-1 py-2 px-3 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                <span className="material-icons text-sm">picture_as_pdf</span> PDF
              </button>
              <button className="flex-1 py-2 px-3 bg-white/5 hover:bg-primary/20 hover:text-primary rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                <span className="material-icons text-sm">description</span> EXCEL
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Export History */}
      <div className="bg-white dark:bg-[#162a19] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="font-bold text-lg">Recent Export Activity</h2>
          <button className="text-sm text-primary hover:underline">View all history</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-[10px] uppercase font-bold text-slate-400">
              <tr>
                <th className="px-6 py-3">Report Name</th>
                <th className="px-6 py-3">Generated By</th>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Format</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {recentExports.map((exp, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium">{exp.name}</td>
                  <td className="px-6 py-4">{exp.by}</td>
                  <td className="px-6 py-4 text-slate-400">{exp.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 ${exp.format === 'EXCEL' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} rounded text-[10px] font-bold`}>{exp.format}</span>
                  </td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <span className={`w-2 h-2 ${exp.status === 'Ready' ? 'bg-primary' : 'bg-slate-600'} rounded-full`}></span>
                    <span>{exp.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-white transition-colors">
                      <span className="material-icons">download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsCenter;