// // import React, { useState } from 'react';
// // import toast from 'react-hot-toast';
// // import HrSidebar from '../components/HrSidebar';

// // const LeaveRequests = () => {
// //   const [activeTab, setActiveTab] = useState('Pending');

// //   const tabs = [
// //     { name: 'Pending', count: 12 },
// //     { name: 'Approved', count: 142 },
// //     { name: 'Rejected', count: 18 },
// //     { name: 'Upcoming', count: 5 },
// //   ];

// //   const leaveRequests = [
// //     {
// //       id: 1,
// //       name: 'Sarah Jenkins',
// //       dept: 'Mathematics Dept.',
// //       type: 'Sick Leave',
// //       typeColor: 'bg-blue-100 text-blue-700',
// //       days: 2,
// //       start: 'Oct 14',
// //       end: 'Oct 15',
// //       reason: 'Suffering from severe flu and high temperature. Doctor advised 48 hours bed rest.',
// //       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3BbIsrXNiqRk2_-T643ofEH80kkFy-iTVGuZzCsj4Ame4dHolHnREdS3MkufzKGao1mm2bAQ-_Dc7pFucOz3AgyxXPeBICgqgbqp3zpJztP2C7ap37gE8MqrDRBDSYqEID4z1LRtfe_ysEQqzcaRZp2hddWXf7f4-zcdB3Zl3KEs_8JErdXHXPgVLbU-bNy0SIXndmY3qkWkDjswRgrEi4yBQ7HRcP3p3gFxn54ypZiq0g82W6HwsUm9gbQVuDRzsTLiqnB2TOLc',
// //     },
// //     {
// //       id: 2,
// //       name: 'Michael Chen',
// //       dept: 'Physics Dept.',
// //       type: 'Casual Leave',
// //       typeColor: 'bg-primary/20 text-slate-900',
// //       days: 1,
// //       start: 'Oct 16',
// //       end: 'Oct 16',
// //       reason: 'Attending sister\'s wedding ceremony in the city.',
// //       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHgDxrhnxAQoB3cq5mDQ2YKXcmydhPgM0LdkGurnz6JsCLzdA9w6UJutD3TfNGQZNPBkkb9H3Iq5S-Y7dfW8oJnZn16dk7ECttDC0HZSHBhgFjymufDOvfwBPXWl7jynMUPnsajYvFFgJsW_ZKxeYYXdHh4rpDo4kAMNdIjUKM4K8kVCLylua1e1f3MCHEMZ2GgU0lIm1icSOGrCdmqY8NWXMosPQfDExaiMllkTmGi4GZI3ve9DjTZf451TVOsFvoNAFwTrPA60M',
// //     },
// //     {
// //       id: 3,
// //       name: 'Emily Watson',
// //       dept: 'English Language Dept.',
// //       type: 'Annual Leave',
// //       typeColor: 'bg-slate-200 text-slate-700',
// //       days: 5,
// //       start: 'Oct 20',
// //       end: 'Oct 24',
// //       reason: 'Family vacation planned during mid-term break overlap.',
// //       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ZP8tyn_LyBrRM5ty0moMReOX04m8obJybMPM448VxPqoTppmhBmDVWEGxzZ0o6ThfYhffuC_mPHJbhZJ6Pgt_F3T5TlqIXCwsMnNz9NeYWN58Mkircpp2vfOUnTZXyjYYuWX4HF84v8sU3R1etdQoS6wwPsGxdHcM-kAN4I1n9wpVN1P8TjaJUJ-lFvW2WH4RCLJtrV-wVLfHCYGrwlqcooomQ73yyYjIhiIdYJxTUoOKqS6dGrBC5_O1hxp_a1fFoWYnJZF1g',
// //     },
// //     {
// //       id: 4,
// //       name: 'David Kim',
// //       dept: 'Physical Ed Dept.',
// //       type: 'Casual Leave',
// //       typeColor: 'bg-primary/20 text-slate-900',
// //       days: 1,
// //       start: 'Oct 18',
// //       end: 'Oct 18',
// //       reason: 'Medical appointment for routine checkup.',
// //       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLujj2BzRHJ2cueChkFramwa_gwbcOC0a-90YZFEPVXE17RYvp_xdzAA5D4B4JAKWHJn3sBaW2lcSLwqib6iux-UE7G1QbdVmdKSnFAPCvwt78I_w8J3DCnBmVeva0_kWutCw2YcdrtuS2eCCNuwhAvzLYpcGrieUond_yI5cW08LIxGB-x_FPhVAs4JUP5oqsooS51ZUMLsfhd0qy5HIEvcnzhIYW8COWQhLeKd4hjUzb1Y7xPKDojoPYJ-MiP3EU9BIrwOwbnNQ',
// //     },
// //   ];

// //   const handleFilterView = () => toast.success('Filter View clicked (demo)');
// //   const handleExportReport = () => toast.success('Export Report clicked (demo)');
// //   const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
// //   const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
// //   const handleReview = (name) => toast.success(`Review clicked for ${name} (demo)`);
// //   const handlePostComment = (name) => toast.success(`Comment posted for ${name} (demo)`);
// //   const handleConfigurePolicies = () => toast.success('Configure Policies clicked (demo)');

// //   return (
// //     <>
// //       {/* Breadcrumbs */}
// //       <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
// //         <a href="#" onClick={(e) => { e.preventDefault(); toast.success('HR Admin clicked (demo)'); }} className="hover:text-primary">HR Admin</a>
// //         <span className="material-icons text-xs">chevron_right</span>
// //         <span className="text-slate-900 font-medium">Leave Requests</span>
// //       </nav>
      

// //       {/* Header Section */}
// //       <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
// //         <div>
// //           <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Leave Request Approval</h2>
// //           <p className="text-slate-500 mt-1">Review and process staff leave applications for the current academic term.</p>
// //         </div>
// //         <div className="flex gap-3">
// //           <button
// //             onClick={handleFilterView}
// //             className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-white transition-all shadow-sm"
// //           >
// //             <span className="material-icons text-sm">filter_list</span>
// //             Filter View
// //           </button>
// //           <button
// //             onClick={handleExportReport}
// //             className="flex items-center gap-2 px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold shadow-sm shadow-primary/20 hover:brightness-105 transition-all"
// //           >
// //             <span className="material-icons text-sm">download</span>
// //             Export Report
// //           </button>
// //         </div>
// //       </div>

// //       {/* KPI Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
// //           <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
// //             <span className="material-icons text-3xl">pending_actions</span>
// //           </div>
// //           <div>
// //             <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
// //             <p className="text-2xl font-bold text-slate-900 dark:text-white">12 Requests</p>
// //             <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
// //               <span className="material-icons text-xs">trending_up</span>
// //               +2 today
// //             </p>
// //           </div>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
// //           <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
// //             <span className="material-icons text-3xl">event_busy</span>
// //           </div>
// //           <div>
// //             <p className="text-sm font-medium text-slate-500">Staff on Leave Today</p>
// //             <p className="text-2xl font-bold text-slate-900 dark:text-white">8 Staff</p>
// //             <p className="text-xs text-slate-400 font-semibold mt-1">Stable vs last week</p>
// //           </div>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
// //           <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
// //             <span className="material-icons text-3xl">how_to_reg</span>
// //           </div>
// //           <div>
// //             <p className="text-sm font-medium text-slate-500">Avg. Approval Time</p>
// //             <p className="text-2xl font-bold text-slate-900 dark:text-white">4.2 Hours</p>
// //             <p className="text-xs text-emerald-600 font-semibold mt-1">Fastest this month</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Table Tabs */}
// //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
// //         <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto">
// //           {tabs.map((tab) => (
// //             <button
// //               key={tab.name}
// //               onClick={() => setActiveTab(tab.name)}
// //               className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
// //                 activeTab === tab.name
// //                   ? 'text-primary border-b-2 border-primary'
// //                   : 'text-slate-500 hover:text-slate-700'
// //               }`}
// //             >
// //               {tab.name} ({tab.count})
// //             </button>
// //           ))}
// //         </div>

// //         {/* Leave Requests Table */}
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left border-collapse">
// //             <thead>
// //               <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-bold uppercase tracking-wider">
// //                 <th className="px-6 py-4 w-12">
// //                   <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
// //                 </th>
// //                 <th className="px-6 py-4">Staff Member</th>
// //                 <th className="px-6 py-4">Leave Type</th>
// //                 <th className="px-6 py-4">Duration</th>
// //                 <th className="px-6 py-4">Reason</th>
// //                 <th className="px-6 py-4 text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
// //               {leaveRequests.map((req, idx) => (
// //                 <React.Fragment key={req.id}>
// //                   <tr className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group ${idx === 2 ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
// //                     <td className="px-6 py-4">
// //                       <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <img src={req.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
// //                         <div>
// //                           <p className="text-sm font-bold text-slate-900 dark:text-white">{req.name}</p>
// //                           <p className="text-xs text-slate-500">{req.dept}</p>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${req.typeColor}`}>
// //                         {req.type}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
// //                       <div className="font-medium">{req.days} Days</div>
// //                       <div className="text-[10px] text-slate-400 uppercase tracking-wide">{req.start} - {req.end}</div>
// //                     </td>
// //                     <td className="px-6 py-4 max-w-xs">
// //                       <p className="text-sm text-slate-600 truncate" title={req.reason}>{req.reason}</p>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <div className={`flex justify-end gap-2 ${idx === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
// //                         <button
// //                           onClick={() => handleApprove(req.name)}
// //                           className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors border border-transparent hover:border-emerald-100"
// //                           title="Quick Approve"
// //                         >
// //                           <span className="material-icons text-xl">check_circle</span>
// //                         </button>
// //                         <button
// //                           onClick={() => handleReject(req.name)}
// //                           className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors border border-transparent hover:border-rose-100"
// //                           title="Quick Reject"
// //                         >
// //                           <span className="material-icons text-xl">cancel</span>
// //                         </button>
// //                         <button
// //                           onClick={() => handleReview(req.name)}
// //                           className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700"
// //                         >
// //                           Review
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                   {idx === 2 && (
// //                     <tr className="bg-primary/[0.03]">
// //                       <td colSpan="6" className="px-6 pb-6 pt-2">
// //                         <div className="bg-white dark:bg-slate-900 border border-primary/20 rounded-lg p-4 max-w-2xl ml-auto">
// //                           <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Internal Approval Comment</label>
// //                           <div className="flex gap-3">
// //                             <textarea
// //                               className="flex-1 text-sm border-slate-200 rounded-lg focus:ring-primary focus:border-primary py-2 resize-none"
// //                               placeholder="Add a comment for the applicant (optional)..."
// //                               rows="1"
// //                             ></textarea>
// //                             <button
// //                               onClick={() => handlePostComment(req.name)}
// //                               className="px-4 bg-primary text-slate-900 rounded-lg text-sm font-bold"
// //                             >
// //                               Post & Finalize
// //                             </button>
// //                           </div>
// //                           <div className="mt-3 flex items-center gap-4">
// //                             <p className="text-[11px] text-slate-500">
// //                               Suggested Action: <span className="text-emerald-600 font-semibold italic">Meets criteria for Annual Leave.</span>
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
// //           <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1-12</span> of <span className="font-semibold text-slate-900">12</span> pending requests</p>
// //           <div className="flex gap-2">
// //             <button className="p-2 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 cursor-not-allowed" disabled>
// //               <span className="material-icons text-sm">chevron_left</span>
// //             </button>
// //             <button className="w-9 h-9 bg-primary text-slate-900 font-bold rounded-lg">1</button>
// //             <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
// //               <span className="material-icons text-sm">chevron_right</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Help Section */}
// //       <div className="mt-8 bg-slate-900 text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
// //         <div className="flex-1 relative z-10">
// //           <h3 className="text-xl font-bold mb-2">Need to adjust school-wide leave policies?</h3>
// //           <p className="text-slate-400 text-sm mb-6 max-w-md">Update automatic approval triggers, black-out dates for exams, and staff leave quotas in the global settings.</p>
// //           <button
// //             onClick={handleConfigurePolicies}
// //             className="px-6 py-2.5 bg-primary text-slate-900 rounded-lg text-sm font-bold hover:brightness-105 transition-all"
// //           >
// //             Configure Policies
// //           </button>
// //         </div>
// //         <div className="relative z-10 w-32 h-32 bg-primary/20 rounded-2xl flex items-center justify-center rotate-3 border border-primary/30">
// //           <span className="material-icons text-primary text-6xl">settings_account_box</span>
// //         </div>
// //         {/* Decorative background pattern */}
// //         <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
// //       </div>
// //     </>
// //   );

// //   return (
// //     <div className="min-h-screen bg-background-light dark:bg-background-dark">
// //       <HrSidebar />
// //       <div className="ml-64 p-8">
// //         {/* your existing content */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LeaveRequests;


// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import HrSidebar from '../components/HrSidebar';

// const LeaveRequests = () => {
//   const [activeTab, setActiveTab] = useState('Pending');

//   const tabs = [
//     { name: 'Pending', count: 12 },
//     { name: 'Approved', count: 142 },
//     { name: 'Rejected', count: 18 },
//     { name: 'Upcoming', count: 5 },
//   ];

//   const leaveRequests = [
//     {
//       id: 1,
//       name: 'Sarah Jenkins',
//       dept: 'Mathematics Dept.',
//       type: 'Sick Leave',
//       typeColor: 'bg-blue-100 text-blue-700',
//       days: 2,
//       start: 'Oct 14',
//       end: 'Oct 15',
//       reason: 'Suffering from severe flu and high temperature. Doctor advised 48 hours bed rest.',
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3BbIsrXNiqRk2_-T643ofEH80kkFy-iTVGuZzCsj4Ame4dHolHnREdS3MkufzKGao1mm2bAQ-_Dc7pFucOz3AgyxXPeBICgqgbqp3zpJztP2C7ap37gE8MqrDRBDSYqEID4z1LRtfe_ysEQqzcaRZp2hddWXf7f4-zcdB3Zl3KEs_8JErdXHXPgVLbU-bNy0SIXndmY3qkWkDjswRgrEi4yBQ7HRcP3p3gFxn54ypZiq0g82W6HwsUm9gbQVuDRzsTLiqnB2TOLc',
//     },
//     {
//       id: 2,
//       name: 'Michael Chen',
//       dept: 'Physics Dept.',
//       type: 'Casual Leave',
//       typeColor: 'bg-primary/20 text-slate-900',
//       days: 1,
//       start: 'Oct 16',
//       end: 'Oct 16',
//       reason: 'Attending sister\'s wedding ceremony in the city.',
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHgDxrhnxAQoB3cq5mDQ2YKXcmydhPgM0LdkGurnz6JsCLzdA9w6UJutD3TfNGQZNPBkkb9H3Iq5S-Y7dfW8oJnZn16dk7ECttDC0HZSHBhgFjymufDOvfwBPXWl7jynMUPnsajYvFFgJsW_ZKxeYYXdHh4rpDo4kAMNdIjUKM4K8kVCLylua1e1f3MCHEMZ2GgU0lIm1icSOGrCdmqY8NWXMosPQfDExaiMllkTmGi4GZI3ve9DjTZf451TVOsFvoNAFwTrPA60M',
//     },
//     {
//       id: 3,
//       name: 'Emily Watson',
//       dept: 'English Language Dept.',
//       type: 'Annual Leave',
//       typeColor: 'bg-slate-200 text-slate-700',
//       days: 5,
//       start: 'Oct 20',
//       end: 'Oct 24',
//       reason: 'Family vacation planned during mid-term break overlap.',
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ZP8tyn_LyBrRM5ty0moMReOX04m8obJybMPM448VxPqoTppmhBmDVWEGxzZ0o6ThfYhffuC_mPHJbhZJ6Pgt_F3T5TlqIXCwsMnNz9NeYWN58Mkircpp2vfOUnTZXyjYYuWX4HF84v8sU3R1etdQoS6wwPsGxdHcM-kAN4I1n9wpVN1P8TjaJUJ-lFvW2WH4RCLJtrV-wVLfHCYGrwlqcooomQ73yyYjIhiIdYJxTUoOKqS6dGrBC5_O1hxp_a1fFoWYnJZF1g',
//     },
//     {
//       id: 4,
//       name: 'David Kim',
//       dept: 'Physical Ed Dept.',
//       type: 'Casual Leave',
//       typeColor: 'bg-primary/20 text-slate-900',
//       days: 1,
//       start: 'Oct 18',
//       end: 'Oct 18',
//       reason: 'Medical appointment for routine checkup.',
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLujj2BzRHJ2cueChkFramwa_gwbcOC0a-90YZFEPVXE17RYvp_xdzAA5D4B4JAKWHJn3sBaW2lcSLwqib6iux-UE7G1QbdVmdKSnFAPCvwt78I_w8J3DCnBmVeva0_kWutCw2YcdrtuS2eCCNuwhAvzLYpcGrieUond_yI5cW08LIxGB-x_FPhVAs4JUP5oqsooS51ZUMLsfhd0qy5HIEvcnzhIYW8COWQhLeKd4hjUzb1Y7xPKDojoPYJ-MiP3EU9BIrwOwbnNQ',
//     },
//   ];

//   const handleFilterView = () => toast.success('Filter View clicked (demo)');
//   const handleExportReport = () => toast.success('Export Report clicked (demo)');
//   const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
//   const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
//   const handleReview = (name) => toast.success(`Review clicked for ${name} (demo)`);
//   const handlePostComment = (name) => toast.success(`Comment posted for ${name} (demo)`);
//   const handleConfigurePolicies = () => toast.success('Configure Policies clicked (demo)');

//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark">
//       <HrSidebar />
//       <div className="ml-64 p-8">
//         {/* Breadcrumbs */}
//         <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
//           <a href="#" onClick={(e) => { e.preventDefault(); toast.success('HR Admin clicked (demo)'); }} className="hover:text-primary">HR Admin</a>
//           <span className="material-icons text-xs">chevron_right</span>
//           <span className="text-slate-900 font-medium">Leave Requests</span>
//         </nav>

//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
//           <div>
//             <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Leave Request Approval</h2>
//             <p className="text-slate-500 mt-1">Review and process staff leave applications for the current academic term.</p>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={handleFilterView}
//               className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-white transition-all shadow-sm"
//             >
//               <span className="material-icons text-sm">filter_list</span>
//               Filter View
//             </button>
//             <button
//               onClick={handleExportReport}
//               className="flex items-center gap-2 px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold shadow-sm shadow-primary/20 hover:brightness-105 transition-all"
//             >
//               <span className="material-icons text-sm">download</span>
//               Export Report
//             </button>
//           </div>
//         </div>

//         {/* KPI Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
//             <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
//               <span className="material-icons text-3xl">pending_actions</span>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
//               <p className="text-2xl font-bold text-slate-900 dark:text-white">12 Requests</p>
//               <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
//                 <span className="material-icons text-xs">trending_up</span>
//                 +2 today
//               </p>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
//             <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
//               <span className="material-icons text-3xl">event_busy</span>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-slate-500">Staff on Leave Today</p>
//               <p className="text-2xl font-bold text-slate-900 dark:text-white">8 Staff</p>
//               <p className="text-xs text-slate-400 font-semibold mt-1">Stable vs last week</p>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
//             <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
//               <span className="material-icons text-3xl">how_to_reg</span>
//             </div>
//             <div>
//               <p className="text-sm font-medium text-slate-500">Avg. Approval Time</p>
//               <p className="text-2xl font-bold text-slate-900 dark:text-white">4.2 Hours</p>
//               <p className="text-xs text-emerald-600 font-semibold mt-1">Fastest this month</p>
//             </div>
//           </div>
//         </div>

//         {/* Table Tabs */}
//         <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
//           <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.name}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
//                   activeTab === tab.name
//                     ? 'text-primary border-b-2 border-primary'
//                     : 'text-slate-500 hover:text-slate-700'
//                 }`}
//               >
//                 {tab.name} ({tab.count})
//               </button>
//             ))}
//           </div>

//           {/* Leave Requests Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-bold uppercase tracking-wider">
//                   <th className="px-6 py-4 w-12">
//                     <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
//                   </th>
//                   <th className="px-6 py-4">Staff Member</th>
//                   <th className="px-6 py-4">Leave Type</th>
//                   <th className="px-6 py-4">Duration</th>
//                   <th className="px-6 py-4">Reason</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
//                 {leaveRequests.map((req, idx) => (
//                   <React.Fragment key={req.id}>
//                     <tr className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group ${idx === 2 ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
//                       <td className="px-6 py-4">
//                         <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <img src={req.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
//                           <div>
//                             <p className="text-sm font-bold text-slate-900 dark:text-white">{req.name}</p>
//                             <p className="text-xs text-slate-500">{req.dept}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${req.typeColor}`}>
//                           {req.type}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
//                         <div className="font-medium">{req.days} Days</div>
//                         <div className="text-[10px] text-slate-400 uppercase tracking-wide">{req.start} - {req.end}</div>
//                       </td>
//                       <td className="px-6 py-4 max-w-xs">
//                         <p className="text-sm text-slate-600 truncate" title={req.reason}>{req.reason}</p>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className={`flex justify-end gap-2 ${idx === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
//                           <button
//                             onClick={() => handleApprove(req.name)}
//                             className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors border border-transparent hover:border-emerald-100"
//                             title="Quick Approve"
//                           >
//                             <span className="material-icons text-xl">check_circle</span>
//                           </button>
//                           <button
//                             onClick={() => handleReject(req.name)}
//                             className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors border border-transparent hover:border-rose-100"
//                             title="Quick Reject"
//                           >
//                             <span className="material-icons text-xl">cancel</span>
//                           </button>
//                           <button
//                             onClick={() => handleReview(req.name)}
//                             className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700"
//                           >
//                             Review
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                     {idx === 2 && (
//                       <tr className="bg-primary/[0.03]">
//                         <td colSpan="6" className="px-6 pb-6 pt-2">
//                           <div className="bg-white dark:bg-slate-900 border border-primary/20 rounded-lg p-4 max-w-2xl ml-auto">
//                             <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Internal Approval Comment</label>
//                             <div className="flex gap-3">
//                               <textarea
//                                 className="flex-1 text-sm border-slate-200 rounded-lg focus:ring-primary focus:border-primary py-2 resize-none"
//                                 placeholder="Add a comment for the applicant (optional)..."
//                                 rows="1"
//                               ></textarea>
//                               <button
//                                 onClick={() => handlePostComment(req.name)}
//                                 className="px-4 bg-primary text-slate-900 rounded-lg text-sm font-bold"
//                               >
//                                 Post & Finalize
//                               </button>
//                             </div>
//                             <div className="mt-3 flex items-center gap-4">
//                               <p className="text-[11px] text-slate-500">
//                                 Suggested Action: <span className="text-emerald-600 font-semibold italic">Meets criteria for Annual Leave.</span>
//                               </p>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
//             <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1-12</span> of <span className="font-semibold text-slate-900">12</span> pending requests</p>
//             <div className="flex gap-2">
//               <button className="p-2 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 cursor-not-allowed" disabled>
//                 <span className="material-icons text-sm">chevron_left</span>
//               </button>
//               <button className="w-9 h-9 bg-primary text-slate-900 font-bold rounded-lg">1</button>
//               <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
//                 <span className="material-icons text-sm">chevron_right</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="mt-8 bg-slate-900 text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
//           <div className="flex-1 relative z-10">
//             <h3 className="text-xl font-bold mb-2">Need to adjust school-wide leave policies?</h3>
//             <p className="text-slate-400 text-sm mb-6 max-w-md">Update automatic approval triggers, black-out dates for exams, and staff leave quotas in the global settings.</p>
//             <button
//               onClick={handleConfigurePolicies}
//               className="px-6 py-2.5 bg-primary text-slate-900 rounded-lg text-sm font-bold hover:brightness-105 transition-all"
//             >
//               Configure Policies
//             </button>
//           </div>
//           <div className="relative z-10 w-32 h-32 bg-primary/20 rounded-2xl flex items-center justify-center rotate-3 border border-primary/30">
//             <span className="material-icons text-primary text-6xl">settings_account_box</span>
//           </div>
//           {/* Decorative background pattern */}
//           <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaveRequests;

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const LeaveRequests = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  const tabs = [
    { name: 'Pending', count: 12 },
    { name: 'Approved', count: 142 },
    { name: 'Rejected', count: 18 },
    { name: 'Upcoming', count: 5 },
  ];

  const leaveRequests = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      dept: 'Mathematics Dept.',
      type: 'Sick Leave',
      typeColor: 'bg-blue-100 text-blue-700',
      days: 2,
      start: 'Oct 14',
      end: 'Oct 15',
      reason: 'Suffering from severe flu and high temperature. Doctor advised 48 hours bed rest.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3BbIsrXNiqRk2_-T643ofEH80kkFy-iTVGuZzCsj4Ame4dHolHnREdS3MkufzKGao1mm2bAQ-_Dc7pFucOz3AgyxXPeBICgqgbqp3zpJztP2C7ap37gE8MqrDRBDSYqEID4z1LRtfe_ysEQqzcaRZp2hddWXf7f4-zcdB3Zl3KEs_8JErdXHXPgVLbU-bNy0SIXndmY3qkWkDjswRgrEi4yBQ7HRcP3p3gFxn54ypZiq0g82W6HwsUm9gbQVuDRzsTLiqnB2TOLc',
    },
    {
      id: 2,
      name: 'Michael Chen',
      dept: 'Physics Dept.',
      type: 'Casual Leave',
      typeColor: 'bg-primary/20 text-slate-900',
      days: 1,
      start: 'Oct 16',
      end: 'Oct 16',
      reason: 'Attending sister\'s wedding ceremony in the city.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHgDxrhnxAQoB3cq5mDQ2YKXcmydhPgM0LdkGurnz6JsCLzdA9w6UJutD3TfNGQZNPBkkb9H3Iq5S-Y7dfW8oJnZn16dk7ECttDC0HZSHBhgFjymufDOvfwBPXWl7jynMUPnsajYvFFgJsW_ZKxeYYXdHh4rpDo4kAMNdIjUKM4K8kVCLylua1e1f3MCHEMZ2GgU0lIm1icSOGrCdmqY8NWXMosPQfDExaiMllkTmGi4GZI3ve9DjTZf451TVOsFvoNAFwTrPA60M',
    },
    {
      id: 3,
      name: 'Emily Watson',
      dept: 'English Language Dept.',
      type: 'Annual Leave',
      typeColor: 'bg-slate-200 text-slate-700',
      days: 5,
      start: 'Oct 20',
      end: 'Oct 24',
      reason: 'Family vacation planned during mid-term break overlap.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ZP8tyn_LyBrRM5ty0moMReOX04m8obJybMPM448VxPqoTppmhBmDVWEGxzZ0o6ThfYhffuC_mPHJbhZJ6Pgt_F3T5TlqIXCwsMnNz9NeYWN58Mkircpp2vfOUnTZXyjYYuWX4HF84v8sU3R1etdQoS6wwPsGxdHcM-kAN4I1n9wpVN1P8TjaJUJ-lFvW2WH4RCLJtrV-wVLfHCYGrwlqcooomQ73yyYjIhiIdYJxTUoOKqS6dGrBC5_O1hxp_a1fFoWYnJZF1g',
    },
    {
      id: 4,
      name: 'David Kim',
      dept: 'Physical Ed Dept.',
      type: 'Casual Leave',
      typeColor: 'bg-primary/20 text-slate-900',
      days: 1,
      start: 'Oct 18',
      end: 'Oct 18',
      reason: 'Medical appointment for routine checkup.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLujj2BzRHJ2cueChkFramwa_gwbcOC0a-90YZFEPVXE17RYvp_xdzAA5D4B4JAKWHJn3sBaW2lcSLwqib6iux-UE7G1QbdVmdKSnFAPCvwt78I_w8J3DCnBmVeva0_kWutCw2YcdrtuS2eCCNuwhAvzLYpcGrieUond_yI5cW08LIxGB-x_FPhVAs4JUP5oqsooS51ZUMLsfhd0qy5HIEvcnzhIYW8COWQhLeKd4hjUzb1Y7xPKDojoPYJ-MiP3EU9BIrwOwbnNQ',
    },
  ];

  const handleFilterView = () => toast.success('Filter View clicked (demo)');
  const handleExportReport = () => toast.success('Export Report clicked (demo)');
  const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
  const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
  const handleReview = (name) => toast.success(`Review clicked for ${name} (demo)`);
  const handlePostComment = (name) => toast.success(`Comment posted for ${name} (demo)`);
  const handleConfigurePolicies = () => toast.success('Configure Policies clicked (demo)');

  return (
    <HrPageWrapper>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); toast.success('HR Admin clicked (demo)'); }} className="hover:text-primary">HR Admin</a>
        <span className="material-icons text-xs">chevron_right</span>
        <span className="text-slate-900 font-medium">Leave Requests</span>
      </nav>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Leave Request Approval</h2>
          <p className="text-slate-500 mt-1">Review and process staff leave applications for the current academic term.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleFilterView} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold hover:bg-white transition-all shadow-sm">
            <span className="material-icons text-sm">filter_list</span> Filter View
          </button>
          <button onClick={handleExportReport} className="flex items-center gap-2 px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold shadow-sm shadow-primary/20 hover:brightness-105 transition-all">
            <span className="material-icons text-sm">download</span> Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-icons text-3xl">pending_actions</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">12 Requests</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
              <span className="material-icons text-xs">trending_up</span> +2 today
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
            <span className="material-icons text-3xl">event_busy</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Staff on Leave Today</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">8 Staff</p>
            <p className="text-xs text-slate-400 font-semibold mt-1">Stable vs last week</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <span className="material-icons text-3xl">how_to_reg</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Avg. Approval Time</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">4.2 Hours</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">Fastest this month</p>
          </div>
        </div>
      </div>

      {/* Table Tabs */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.name ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>

        {/* Leave Requests Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></th>
                <th className="px-6 py-4">Staff Member</th>
                <th className="px-6 py-4">Leave Type</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Reason</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {leaveRequests.map((req, idx) => (
                <React.Fragment key={req.id}>
                  <tr className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group ${idx === 2 ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" /></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={req.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{req.name}</p>
                          <p className="text-xs text-slate-500">{req.dept}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${req.typeColor}`}>
                        {req.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="font-medium">{req.days} Days</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide">{req.start} - {req.end}</div>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-sm text-slate-600 truncate" title={req.reason}>{req.reason}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`flex justify-end gap-2 ${idx === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                        <button onClick={() => handleApprove(req.name)} className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors border border-transparent hover:border-emerald-100" title="Quick Approve">
                          <span className="material-icons text-xl">check_circle</span>
                        </button>
                        <button onClick={() => handleReject(req.name)} className="p-2 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors border border-transparent hover:border-rose-100" title="Quick Reject">
                          <span className="material-icons text-xl">cancel</span>
                        </button>
                        <button onClick={() => handleReview(req.name)} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700">
                          Review
                        </button>
                      </div>
                    </td>
                  </tr>
                  {idx === 2 && (
                    <tr className="bg-primary/[0.03]">
                      <td colSpan="6" className="px-6 pb-6 pt-2">
                        <div className="bg-white dark:bg-slate-900 border border-primary/20 rounded-lg p-4 max-w-2xl ml-auto">
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Internal Approval Comment</label>
                          <div className="flex gap-3">
                            <textarea className="flex-1 text-sm border-slate-200 rounded-lg focus:ring-primary focus:border-primary py-2 resize-none" placeholder="Add a comment for the applicant (optional)..." rows="1"></textarea>
                            <button onClick={() => handlePostComment(req.name)} className="px-4 bg-primary text-slate-900 rounded-lg text-sm font-bold">Post & Finalize</button>
                          </div>
                          <div className="mt-3 flex items-center gap-4">
                            <p className="text-[11px] text-slate-500">Suggested Action: <span className="text-emerald-600 font-semibold italic">Meets criteria for Annual Leave.</span></p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1-12</span> of <span className="font-semibold text-slate-900">12</span> pending requests</p>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 cursor-not-allowed" disabled>
              <span className="material-icons text-sm">chevron_left</span>
            </button>
            <button className="w-9 h-9 bg-primary text-slate-900 font-bold rounded-lg">1</button>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-slate-900 text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="flex-1 relative z-10">
          <h3 className="text-xl font-bold mb-2">Need to adjust school-wide leave policies?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md">Update automatic approval triggers, black-out dates for exams, and staff leave quotas in the global settings.</p>
          <button onClick={handleConfigurePolicies} className="px-6 py-2.5 bg-primary text-slate-900 rounded-lg text-sm font-bold hover:brightness-105 transition-all">
            Configure Policies
          </button>
        </div>
        <div className="relative z-10 w-32 h-32 bg-primary/20 rounded-2xl flex items-center justify-center rotate-3 border border-primary/30">
          <span className="material-icons text-primary text-6xl">settings_account_box</span>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
      </div>
    </HrPageWrapper>
  );
};

export default LeaveRequests;