
import React from 'react';

const FaceCheckinLogs = () => {
  const logs = [
    { name: 'Elena Rodriguez', id: 'ST-20492', role: 'Student', location: 'North Wing Gate 2', time: '10:42:15 AM', date: 'Oct 24', confidence: 64, status: 'flagged', reason: 'Shadow interference', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAnnYuM40kp8RQuAZIJreiARizOaiDxNFv5vgEgPnguSIyUMJLcD5Rl8cU49bOFtqiY8MRIfN55R2rMT78ZbRc-QeyFLuK1zahfgcwNOZUX4OBRkSD8CGuSuaW44y4XxEpcbL8JqytXCulITtdhVCxvRZ16-prxh_NtSgz7JLIdK9cVAgmBC_MB_-aClN8GHXoUlggMLaKkYNEVPXltC1yc8y1ge_Sg5sQ1-gFM8M-aoXTAW4HtxJuGjvtI8xFH8OPqN6EXhWH_1A' },
    { name: 'Marcus Chen', id: 'SF-11882', role: 'Staff', location: 'Main Entrance Lobby', time: '10:41:02 AM', date: 'Oct 24', confidence: 98, status: 'success', reason: null, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADMQ8Xy2J0-xsHwmUAYPwNHnAHBRcMsd_6q5pomlD63Ib7D7bk5HmC1yltkm_xSJvPuHH225C9XV4ruea4ONXLJdNGX1_l_of2dXjk0dt9IKpZfPDbCTcfspIXlx8H-gOg5uuskDBRCiUDU6CC7W6wE9Y4FPlfbX1uohYFvrEZDct5GDoCLBjXPv-uh9eWt8GZauny8qioyD81R_4MPYyNYajLDHhaz0UrKSWlARrGOKq5vcejHZri4vMkaVj24pejqT5Hx42ILF4' },
    { name: 'James Wilson', id: 'ST-22019', role: 'Student', location: 'Gymnasium Back Entrance', time: '10:38:55 AM', date: 'Oct 24', confidence: 42, status: 'flagged', reason: 'Mask detected', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZwC_vkd9IfM4YhyMiHYEXPil3-ixYgpSGJJY4TIHrDFHIupnMsptZ83krbL4tcLgOLEQgFMMgJ1LpKb2RyU0c8KxnFI4QV8t30WZQ1V3fOJ_vpYXv1RY6iBtaTzB9_T0BMLjTADHOjbPhgwzubcK3b2svpx0LXXrmZkXo-1Rn_gX-BVcSCAlCjuSH1YhwlLP4Ta9sCyrikEqd2IxNkyJWEcxK_wFMJutIwn6IYmCvqhsz7pbQ3Y9Emu6z7cqZQyi33PAEkw2hXg' },
    { name: 'Sarah Jenkins', id: 'ST-21553', role: 'Student', location: 'Library North', time: '10:35:12 AM', date: 'Oct 24', confidence: 95, status: 'success', reason: null, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxx3VkotIu6Xqf3mr5Wx40uqKGiJOYb5VO4kyYghXHySw9BRoW0yilOYdS_3Dk4BCNpfDHJ3wnXKTLZVvsgkQKaYmI9xZiBarq3DsCibTFm149qDXIOmrdaclt2Zt6pVGwXUBy4zaGQlx5FKjVOCK80chieI9rpOIK9Va6McC0SZUbRjZdt20A0EXG3J2vJgqcZOLFc3JW5OxTXFtz3n_fe08PStjgnpJvReTW8BbgrNl21i-PnM6r8K123W070nZDZly0Qe17KJg' },
  ];

  return (
    <div>
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Face Check-in Logs</h1>
          <p className="text-slate-500 dark:text-slate-400">Monitor and moderate automated campus entries.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all">
            <span className="material-icons-outlined text-sm">download</span> Export CSV
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-primary/10 text-primary rounded-lg"><span className="material-icons-outlined">fact_check</span></span>
            <span className="text-primary text-sm font-semibold">+12% vs yesterday</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Check-ins Today</h3>
          <p className="text-3xl font-bold mt-1">1,429</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-amber-100 text-amber-600 rounded-lg"><span className="material-icons-outlined">report_problem</span></span>
            <span className="text-amber-600 text-sm font-semibold">Action required</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Flagged Entries</h3>
          <p className="text-3xl font-bold mt-1 text-amber-600">07</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg"><span className="material-icons-outlined">bolt</span></span>
            <span className="text-blue-600 text-sm font-semibold">Optimal</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Confidence Score</h3>
          <p className="text-3xl font-bold mt-1">94.8%</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-icons-outlined text-sm">search</span>
            <input className="w-full pl-10 pr-4 py-2 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="Search name, ID or location..." />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Date:</span>
            <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary">
              <option>Today, Oct 24</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Status:</span>
            <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary">
              <option>All Status</option>
              <option>Success</option>
              <option>Flagged</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Role:</span>
            <select className="rounded-lg border-slate-200 dark:border-slate-700 bg-transparent text-sm focus:ring-primary focus:border-primary">
              <option>All Roles</option>
              <option>Student</option>
              <option>Staff</option>
            </select>
          </div>
          <button className="ml-auto p-2 text-slate-500 hover:text-primary transition-colors">
            <span className="material-icons-outlined">refresh</span>
          </button>
        </div>
      </section>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject & Live Capture</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Confidence</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {logs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative group">
                        <img src={log.avatar} alt="" className={`w-16 h-16 rounded-lg object-cover border-2 ${log.status === 'flagged' ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200'} shadow-lg`} />
                        {log.status === 'flagged' && (
                          <div className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full p-1 shadow-sm">
                            <span className="material-icons-outlined text-[10px]">priority_high</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{log.name}</p>
                        <p className="text-xs text-slate-500">ID: {log.id} • {log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{log.location}</p>
                    <p className="text-xs text-slate-500">{log.time} • {log.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[10px] font-bold">
                        <span className={log.status === 'flagged' ? 'text-amber-600' : 'text-primary'}>{log.confidence}%</span>
                      </div>
                      <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${log.status === 'flagged' ? 'bg-amber-500' : 'bg-primary'}`} style={{ width: `${log.confidence}%` }}></div>
                      </div>
                      {log.reason && <p className="text-[10px] text-slate-400 italic">{log.reason}</p>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-tight flex items-center gap-1 w-fit ${
                      log.status === 'flagged' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-primary/10 text-primary dark:bg-primary/20'
                    }`}>
                      <span className="material-icons-outlined text-sm">{log.status === 'flagged' ? 'warning' : 'check_circle'}</span>
                      {log.status === 'flagged' ? 'Flagged' : 'Success'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {log.status === 'flagged' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold rounded-lg transition-all border border-primary/20">APPROVE</button>
                        <button className="px-3 py-1.5 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white text-xs font-bold rounded-lg transition-all border border-red-100">REJECT</button>
                      </div>
                    ) : (
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <span className="material-icons-outlined text-xl">more_vert</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing <span className="font-medium">1-4</span> of <span className="font-medium">1,429</span> entries</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50" disabled>
              <span className="material-icons-outlined">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium">3</button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium">143</button>
            <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-icons-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* System Toast */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-4 border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <p className="text-sm font-medium">New flagged entry at "Faculty Lounge" • 2s ago</p>
          <button className="text-primary text-sm font-bold hover:underline">View</button>
        </div>
      </div>
    </div>
  );
};

 export default FaceCheckinLogs;

// import React from 'react';

// const FaceCheckinLogsAlt = () => {
//   const logs = [
//     { name: 'Ethan Wright', id: 'ST-88219', location: 'Main North Entrance', time: '08:12 AM', confidence: 98.2, status: 'success', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPHJjcLsun1RpugFCiYE2ssNaGgwDLOhlssthoOWUhEUyWhxsK2D8ErBpQCf96SNjWGGO6U8HS0UZtWFlakpvEGUEkQ0htvAaRy2-JV4OLrQz0PWrsbaizhdan0kFBM7UGe9hfYbLuF7PGPC1GM_iQZLDkfxLXqXX1vp2ihN55IQzOq5wykCij1cGL7bdqedI4M1nF0dT2_s0C8zFWcV4UEcAO9jdXrQOTItCpwWC-rPPrEudvI5u9iAdMjGMdB-qcV9w7ntTHrIM' },
//     { name: 'Maya Jenkins', id: 'ST-12904', location: 'Science Block Hall', time: '08:14 AM', confidence: 42.1, status: 'review', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo6-77v9oqczPJ7GdSeChrv4JbZss4Pb5EF1V9hVVkgDNaQXOBfWKZax4NcnutWwhPwxITB_o2_wOC9YUMhLK92hy3s4mqEhj6u_Ld2LBNvSLePQzwX4qPqJ_8NxuQxmd9lYv5_VwLDnjVwSb2Ac1B0VPyLJGf8qGPR3sUmH-CcomDpLkIizD5M9FSv73E2yWIhFyC_MGuWU85ys39O4AVoKJicicNM-lBLBZdBFCNzws0Rh9wpPr7-H6v5R-DeqAfufYUoc4zc_s' },
//     { name: 'Lucas Rivera', id: 'ST-99302', location: 'East Wing Library', time: '08:15 AM', confidence: 99.1, status: 'success', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARl3WQj3RDPuK9nAbXjO7Gt_IzhN9hlGJhy49xIvCHu1pBbBWyOAeEjU6-PxTCVlXZLBAIHY_NqDFRrIJ-c-xuumrn-hPCvJ1AT61PJrkfpzdQpU0jVtvtIJUIdinfkt3vllNMBzI4PTVc4ATfJTfthBOs-So-bhsBuYgZEyVo0PZ0iB7Jvp073dmDK7Ee-X2VGS4dIqghOZSCsFh14n7hYMpm8vH3AwvCWkiYPvoBxw5TH1M_g8M4351eYD5_k9uHr3zR1XYAptc' },
//   ];

//   return (
//     <div className="pl-20 min-h-screen">
//       {/* Header */}
//       <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-emerald-900/20 px-8 py-4 flex items-center justify-between z-40">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
//             Face Check-in Logs
//             <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
//               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Live Monitoring
//             </span>
//           </h1>
//           <p className="text-sm text-slate-500">Monitoring attendance across all campus entry points</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative group">
//             <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-sm">search</span>
//             <input className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-900/30 rounded-lg pl-10 pr-4 py-2 text-sm w-72 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Search student name or ID..." />
//           </div>
//           <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-900/30 p-2 rounded-lg text-slate-500 hover:text-primary transition-colors relative">
//             <span className="material-icons">notifications</span>
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
//           </button>
//         </div>
//       </header>

//       <div className="p-8 max-w-[1600px] mx-auto">
//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"><span className="material-icons">how_to_reg</span></div>
//               <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">+12% vs yesterday</span>
//             </div>
//             <p className="text-sm text-slate-500">Total Check-ins</p>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2,842</h3>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg flex items-center justify-center"><span className="material-icons">check_circle</span></div>
//               <span className="text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">Optimal</span>
//             </div>
//             <p className="text-sm text-slate-500">Accuracy Rate</p>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">99.4%</h3>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm border-l-4 border-l-red-500">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center"><span className="material-icons">report_problem</span></div>
//               <span className="text-xs font-medium text-red-600 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">High Priority</span>
//             </div>
//             <p className="text-sm text-slate-500">Failed Attempts</p>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">24</h3>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg flex items-center justify-center"><span className="material-icons">pending_actions</span></div>
//               <span className="text-xs font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">Review Required</span>
//             </div>
//             <p className="text-sm text-slate-500">Manual Verifications</p>
//             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">08</h3>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main Log Feed */}
//           <div className="flex-1 overflow-hidden">
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm overflow-hidden">
//               <div className="px-6 py-4 border-b border-slate-200 dark:border-emerald-900/20 flex items-center justify-between">
//                 <h2 className="font-semibold text-slate-900 dark:text-white">Recent Activity Log</h2>
//                 <div className="flex items-center gap-2">
//                   <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-emerald-900/30 rounded-lg hover:bg-slate-50">
//                     <span className="material-icons text-sm">filter_list</span> Filter
//                   </button>
//                   <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-emerald-900/30 rounded-lg hover:bg-slate-50">
//                     <span className="material-icons text-sm">file_download</span> Export
//                   </button>
//                 </div>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left">
//                   <thead>
//                     <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-medium uppercase tracking-wider">
//                       <th className="px-6 py-3">Student</th>
//                       <th className="px-6 py-3">Verification (DB vs Live)</th>
//                       <th className="px-6 py-3">Time & Location</th>
//                       <th className="px-6 py-3">Status</th>
//                       <th className="px-6 py-3 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-100 dark:divide-emerald-900/10">
//                     {logs.map((log, idx) => (
//                       <tr key={idx} className={`hover:bg-slate-50 dark:hover:bg-emerald-900/5 transition-colors ${log.status === 'review' ? 'bg-red-50/50 dark:bg-red-900/10' : ''}`}>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-3">
//                             <img src={log.avatar} alt="" className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
//                             <div>
//                               <div className="text-sm font-semibold text-slate-900 dark:text-white">{log.name}</div>
//                               <div className="text-xs text-slate-500">ID: {log.id}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-2">
//                             <div className="relative w-12 h-12"><img src={log.avatar} alt="" className="w-full h-full object-cover rounded border border-slate-200" /></div>
//                             <span className="material-icons text-primary text-sm">compare_arrows</span>
//                             <div className="relative w-12 h-12 border-2 border-primary/50 rounded"><img src={log.avatar} alt="" className="w-full h-full object-cover rounded" /></div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="text-sm text-slate-700 dark:text-slate-300 font-medium">{log.time}</div>
//                           <div className="text-xs text-slate-500 flex items-center gap-1"><span className="material-icons text-[10px]">location_on</span>{log.location}</div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
//                             log.status === 'success' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
//                           }`}>
//                             <span className="material-icons text-xs">{log.status === 'success' ? 'check_circle' : 'error'}</span>
//                             {log.status === 'success' ? 'Success' : 'Manual Review'}
//                           </div>
//                           <div className="text-[10px] mt-1 text-slate-400">{log.confidence}% Confidence</div>
//                         </td>
//                         <td className="px-6 py-4 text-right">
//                           {log.status === 'review' ? (
//                             <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">Review Now</button>
//                           ) : (
//                             <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-xl">more_vert</span></button>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-emerald-900/20 flex items-center justify-between text-xs text-slate-500">
//                 <div>Showing 3 of 2,842 logs today</div>
//                 <div className="flex items-center gap-1">
//                   <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons text-sm">chevron_left</span></button>
//                   <span className="px-2 font-medium text-slate-900 dark:text-white">Page 1 of 95</span>
//                   <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"><span className="material-icons text-sm">chevron_right</span></button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Review Sidebar */}
//           <div className="w-full lg:w-80 space-y-6">
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm overflow-hidden">
//               <div className="p-4 border-b border-slate-200 dark:border-emerald-900/20 bg-slate-50 dark:bg-slate-800/50">
//                 <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
//                   <span className="material-icons text-primary text-lg">fact_check</span> Quick Manual Review
//                 </h3>
//               </div>
//               <div className="p-5">
//                 <div className="text-center mb-6">
//                   <div className="relative inline-block">
//                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IJkTiYcYsVChXSRmgIuJyBLMzoGn-P4ESCz--mW_sSms1zXz_bUsNaKo-8j6Oh0LyQ7VqfLrV7VgTAn8i1AwEkRw8Tf8uhnUYhGuz9kj1CUe6ndRWeGLNwgXwPirEFyErU81t_5YrODq8nYmKTvJFMK0H1w4SaNiX4H1qdSTgVPBq2E3uUjNOapuRY0JL-j3zXCQK4nWlN4FTMNnDJlV_6BQ4Nyz5lQeW39MYzYxZnmoLHP22eegqzveM43h27B-pGo-om3Ptps" alt="" className="w-48 h-48 object-cover rounded-xl border-4 border-white dark:border-slate-800 shadow-lg mx-auto" />
//                     <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">Flagged: Low Light</div>
//                   </div>
//                 </div>
//                 <div className="space-y-4 mb-6">
//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-slate-500">Potential Match</span>
//                     <span className="font-semibold text-slate-900 dark:text-white">Maya Jenkins</span>
//                   </div>
//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-slate-500">System Match Score</span>
//                     <span className="font-semibold text-red-500">42%</span>
//                   </div>
//                   <div className="flex justify-between items-center text-sm">
//                     <span className="text-slate-500">Device</span>
//                     <span className="font-semibold text-slate-900 dark:text-white">Cam-Sci-04</span>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <button className="flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-md">
//                     <span className="material-icons text-sm">check</span> Approve
//                   </button>
//                   <button className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-emerald-900/30 text-slate-600 dark:text-slate-300 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all">
//                     <span className="material-icons text-sm">close</span> Reject
//                   </button>
//                 </div>
//                 <button className="w-full mt-3 py-2 text-xs font-medium text-slate-400 hover:text-primary transition-colors">
//                   Mark as "Not a Student"
//                 </button>
//               </div>
//             </div>

//             {/* Campus Map Indicator */}
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-emerald-900/20 shadow-sm overflow-hidden">
//               <div className="p-4 border-b border-slate-200 dark:border-emerald-900/20">
//                 <h3 className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
//                   <span className="material-icons text-slate-400 text-lg">map</span> Active Points
//                 </h3>
//               </div>
//               <div className="p-2 relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
//                 <div className="absolute inset-0 opacity-40 grayscale">
//                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC99HdRjodwRFwkzF7ab-dyeZfr4iC7FlU_zaDl72YexwMHTuLW8PIOv1pfyzS7V0O5F_W_AKEPXKVoyVXTBcVdp3qIIyYF2LOoXyeii4wErVF7AT7cvOHIEtOu52Kj6ZsBn9dlgGRgyIpOx_F2xccpXQBLDofusccgAMu5yYh_wBPW8BCSZqvUbe0HJCK2OdzvAVWNiJzji_T-zAY8kGaWVbG7xqABeSAW63oaGt__-3c1Z3naYBoVHbebiPDRl2Rmo1Ygkh7wrmk" alt="" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full border-2 border-white animate-ping"></div>
//                 <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg"></div>
//                 <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg opacity-60"></div>
//                 <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
//               </div>
//               <div className="p-3">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center justify-between text-[11px]">
//                     <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> Main North Gate</span>
//                     <span className="font-bold text-slate-900 dark:text-white">Active</span>
//                   </div>
//                   <div className="flex items-center justify-between text-[11px]">
//                     <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Science Block</span>
//                     <span className="font-bold text-red-500">Issue Detected</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaceCheckinLogsAlt;