// // // import React from 'react';
// // // import HrLayout from '../components/HrLayout';

// // // const HrDashboard = () => {
// // //   // Mock data
// // //   const stats = {
// // //     staffPresent: 124,
// // //     totalStaff: 132,
// // //     pendingLeaves: 8,
// // //     totalActiveStaff: 142,
// // //     sickLeave: 4,
// // //   };

// // //   const leaveRequests = [
// // //     { name: 'Robert Fox', role: 'Math Teacher', type: 'Annual Leave', start: 'Oct 24', end: 'Oct 27', days: 4, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQOT_fBuZ0lMG-iq0aS6W6sQG838kL8Ki5ylX6ieDbrgHOocjllRedXBaPR9GS67V4lo4Ka1HSLwm3aLcadORct5F_Zf8jt3HY23Nq3ggcnILQK8m9b3OWhAZgfyy20h3g8vJD230QhwZwjdiLJoVxVVk8kWeoGLyTwyKVLIR_QkLqGPOQLNPuuqYsgDix2ZfFFPJFU56oDEjPSrZdeYpAj9ooxEV58Gn1QCOL8GSZ-IgPb9XI_ybdK_gTE1Ui628Aiw2eSbTNAg' },
// // //     { name: 'Jenny Wilson', role: 'Admin Assistant', type: 'Medical', start: 'Oct 23', end: 'Oct 23', days: 1, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDccTeXpKiXQvYhLAtEtQF8O29oCcEnyw89YVBKANkM65BBEYm5xpei094GqvbTrO-nQaDq1mDmiFE8Q_KwlJYJgumpWkMaXe39gueQykRR7jSYpLeTXYMPJi2y_z-7-Wh92ijc2k6_vGsvQAIiLBWyzQCeMrou6IMtmm6SYXOD09Bdc_TYHzgnes-1hPWPYqUif24VDsfVcwsutK5Ge0xKMWPw_hfBscFYjLrIl6XOWRUHEqt7FHJrrHD6-4qoBhnSgDlemmRB-2k' },
// // //     { name: 'Cody Fisher', role: 'PE Coach', type: 'Personal', start: 'Oct 26', end: 'Oct 27', days: 2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0sp7Gz2yfML6yn51akPeJ7UNJiwBN6vDBcg0FCHCwem8iVXdyWJWQrvZRSyuSWl-PaAQsNxWd_kMuvaCjCdskm43ZxtHHMH1LTyuLjbYN_eIgxSK4xNgKDfLaX70icduVtKgnYqqY2zsqRH4sxuTY4G5eiHYj--R1dEvt6cU9xoJB9tZEIb0-GMR0kSbdYhkG2lY5xD1WbdL3Z8ubrBH1mXbsnzrngLPfY-YkBQcCF2uzNs-xd2mAUTLlBz6y4Bm_ooYxrH1w96U' },
// // //   ];

// // //   const getLeaveTypeColor = (type) => {
// // //     switch (type) {
// // //       case 'Annual Leave': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
// // //       case 'Medical': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
// // //       case 'Personal': return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
// // //       default: return 'bg-gray-100 text-gray-600';
// // //     }
// // //   };

// // //   return (
// // //     <HrLayout>
// // //       {/* Stats Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //           <div className="flex justify-between items-start mb-4">
// // //             <div className="p-3 bg-primary/10 rounded-lg">
// // //               <span className="material-icons text-teal-dark dark:text-primary">person_check</span>
// // //             </div>
// // //             <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+2% vs ytd</span>
// // //           </div>
// // //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Staff Presence Today</p>
// // //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
// // //             {stats.staffPresent} <span className="text-base font-normal text-gray-400">/ {stats.totalStaff}</span>
// // //           </h3>
// // //         </div>
// // //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //           <div className="flex justify-between items-start mb-4">
// // //             <div className="p-3 bg-orange-100 rounded-lg">
// // //               <span className="material-icons text-orange-500">pending_actions</span>
// // //             </div>
// // //             <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Urgent</span>
// // //           </div>
// // //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Leaves</p>
// // //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.pendingLeaves}</h3>
// // //         </div>
// // //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //           <div className="flex justify-between items-start mb-4">
// // //             <div className="p-3 bg-blue-100 rounded-lg">
// // //               <span className="material-icons text-blue-500">diversity_3</span>
// // //             </div>
// // //           </div>
// // //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Active Staff</p>
// // //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.totalActiveStaff}</h3>
// // //         </div>
// // //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //           <div className="flex justify-between items-start mb-4">
// // //             <div className="p-3 bg-purple-100 rounded-lg">
// // //               <span className="material-icons text-purple-500">work_history</span>
// // //             </div>
// // //           </div>
// // //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">On Sick Leave</p>
// // //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.sickLeave}</h3>
// // //         </div>
// // //       </div>

// // //       {/* Main Grid */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //         {/* Pending Leave Approvals */}
// // //         <div className="lg:col-span-2 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-teal-light dark:border-primary/10 flex flex-col">
// // //           <div className="p-6 border-b border-teal-light dark:border-primary/10 flex justify-between items-center">
// // //             <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
// // //               <span className="material-icons text-primary">assignment_late</span>
// // //               Pending Leave Approvals
// // //             </h4>
// // //             <button className="text-xs font-bold text-primary hover:underline">View All Requests</button>
// // //           </div>
// // //           <div className="p-0 flex-1 overflow-x-auto">
// // //             <table className="w-full text-left">
// // //               <thead className="bg-gray-50 dark:bg-primary/5 text-gray-500 uppercase text-[10px] font-bold tracking-widest">
// // //                 <tr>
// // //                   <th className="px-6 py-4">Staff Member</th>
// // //                   <th className="px-6 py-4">Leave Type</th>
// // //                   <th className="px-6 py-4">Duration</th>
// // //                   <th className="px-6 py-4 text-right">Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-teal-light dark:divide-primary/10">
// // //                 {leaveRequests.map((request, idx) => (
// // //                   <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors">
// // //                     <td className="px-6 py-4">
// // //                       <div className="flex items-center gap-3">
// // //                         <div className="w-8 h-8 rounded-full overflow-hidden">
// // //                           <img src={request.avatar} alt="" className="w-full h-full object-cover" />
// // //                         </div>
// // //                         <div>
// // //                           <p className="text-sm font-bold text-gray-800 dark:text-white">{request.name}</p>
// // //                           <p className="text-[10px] text-gray-500">{request.role}</p>
// // //                         </div>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-6 py-4">
// // //                       <span className={`px-2 py-1 text-[10px] font-bold rounded ${getLeaveTypeColor(request.type)}`}>
// // //                         {request.type}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4">
// // //                       <p className="text-xs text-gray-600 dark:text-gray-400">
// // //                         {request.start} - {request.end}
// // //                       </p>
// // //                       <p className="text-[10px] text-gray-400">({request.days} Day{request.days > 1 ? 's' : ''})</p>
// // //                     </td>
// // //                     <td className="px-6 py-4 text-right space-x-2">
// // //                       <button className="w-8 h-8 rounded bg-red-100 hover:bg-red-200 text-red-600 transition-colors">
// // //                         <span className="material-icons text-sm">close</span>
// // //                       </button>
// // //                       <button className="w-8 h-8 rounded bg-primary hover:bg-teal-dark text-white transition-colors">
// // //                         <span className="material-icons text-sm">check</span>
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Right Column: Staff Composition & Attendance */}
// // //         <div className="space-y-8">
// // //           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //             <h4 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
// // //               <span className="material-icons text-primary">pie_chart</span>
// // //               Staff Composition
// // //             </h4>
// // //             <div className="relative w-40 h-40 mx-auto mb-6">
// // //               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
// // //                 <circle
// // //                   className="text-gray-100 dark:text-primary/10"
// // //                   cx="18"
// // //                   cy="18"
// // //                   fill="transparent"
// // //                   r="15.9155"
// // //                   stroke="currentColor"
// // //                   strokeWidth="3"
// // //                 ></circle>
// // //                 <circle
// // //                   className="text-primary"
// // //                   cx="18"
// // //                   cy="18"
// // //                   fill="transparent"
// // //                   r="15.9155"
// // //                   stroke="currentColor"
// // //                   strokeDasharray="75, 100"
// // //                   strokeLinecap="round"
// // //                   strokeWidth="3.5"
// // //                 ></circle>
// // //                 <circle
// // //                   className="text-teal-dark"
// // //                   cx="18"
// // //                   cy="18"
// // //                   fill="transparent"
// // //                   r="15.9155"
// // //                   stroke="currentColor"
// // //                   strokeDasharray="25, 100"
// // //                   strokeDashoffset="-75"
// // //                   strokeLinecap="round"
// // //                   strokeWidth="3.5"
// // //                 ></circle>
// // //               </svg>
// // //               <div className="absolute inset-0 flex flex-col items-center justify-center">
// // //                 <span className="text-2xl font-extrabold text-gray-800 dark:text-white">142</span>
// // //                 <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
// // //               </div>
// // //             </div>
// // //             <div className="space-y-3">
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center gap-2">
// // //                   <div className="w-3 h-3 rounded-full bg-primary"></div>
// // //                   <span className="text-sm text-gray-600 dark:text-gray-400">Teaching Staff</span>
// // //                 </div>
// // //                 <span className="text-sm font-bold text-gray-800 dark:text-white">106 (75%)</span>
// // //               </div>
// // //               <div className="flex items-center justify-between">
// // //                 <div className="flex items-center gap-2">
// // //                   <div className="w-3 h-3 rounded-full bg-teal-dark"></div>
// // //                   <span className="text-sm text-gray-600 dark:text-gray-400">Non-Teaching</span>
// // //                 </div>
// // //                 <span className="text-sm font-bold text-gray-800 dark:text-white">36 (25%)</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// // //             <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
// // //               <span className="material-icons text-primary">analytics</span>
// // //               Today's Attendance
// // //             </h4>
// // //             <div className="space-y-4">
// // //               <div>
// // //                 <div className="flex justify-between mb-1">
// // //                   <span className="text-[10px] font-bold text-gray-400 uppercase">Clocked In</span>
// // //                   <span className="text-xs font-bold text-primary">94%</span>
// // //                 </div>
// // //                 <div className="w-full h-2 bg-gray-100 dark:bg-primary/5 rounded-full overflow-hidden">
// // //                   <div className="h-full bg-primary" style={{ width: '94%' }}></div>
// // //                 </div>
// // //               </div>
// // //               <div className="flex items-center justify-between pt-2">
// // //                 <div className="text-center flex-1 border-r border-teal-light dark:border-primary/10">
// // //                   <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">On-Time</p>
// // //                   <p className="text-lg font-extrabold text-gray-800 dark:text-white">112</p>
// // //                 </div>
// // //                 <div className="text-center flex-1">
// // //                   <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Late Arrivals</p>
// // //                   <p className="text-lg font-extrabold text-orange-500">12</p>
// // //                 </div>
// // //               </div>
// // //               <button className="w-full py-2 bg-gray-50 dark:bg-primary/5 hover:bg-primary/10 text-teal-dark dark:text-primary text-xs font-bold rounded-lg transition-all mt-2">
// // //                 View Full Logs
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Footer */}
// // //       <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4">
// // //         <p>© 2024 Greenview Academy School Ecosystem. Built with Unity Design System.</p>
// // //         <div className="flex items-center gap-4">
// // //           <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
// // //           <a href="#" className="hover:text-primary transition-colors">Help Center</a>
// // //           <a href="#" className="hover:text-primary transition-colors">Feedback</a>
// // //         </div>
// // //       </div>
// // //     </HrLayout>
// // //   );
// // // };

// // // export default HrDashboard;



// // // src/features/hr/pages/Dashboard.jsx
// // import React from 'react';
// // import toast from 'react-hot-toast';

// // const HrDashboard = () => {
// //   const stats = {
// //     staffPresent: 124,
// //     totalStaff: 132,
// //     pendingLeaves: 8,
// //     totalActiveStaff: 142,
// //     sickLeave: 4,
// //   };

// //   const leaveRequests = [
// //     {
// //       name: 'Robert Fox',
// //       role: 'Math Teacher',
// //       type: 'Annual Leave',
// //       start: 'Oct 24',
// //       end: 'Oct 27',
// //       days: 4,
// //       avatar:
// //         'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQOT_fBuZ0lMG-iq0aS6W6sQG838kL8Ki5ylX6ieDbrgHOocjllRedXBaPR9GS67V4lo4Ka1HSLwm3aLcadORct5F_Zf8jt3HY23Nq3ggcnILQK8m9b3OWhAZgfyy20h3g8vJD230QhwZwjdiLJoVxVVk8kWeoGLyTwyKVLIR_QkLqGPOQLNPuuqYsgDix2ZfFFPJFU56oDEjPSrZdeYpAj9ooxEV58Gn1QCOL8GSZ-IgPb9XI_ybdK_gTE1Ui628Aiw2eSbTNAg',
// //     },
// //     {
// //       name: 'Jenny Wilson',
// //       role: 'Admin Assistant',
// //       type: 'Medical',
// //       start: 'Oct 23',
// //       end: 'Oct 23',
// //       days: 1,
// //       avatar:
// //         'https://lh3.googleusercontent.com/aida-public/AB6AXuDccTeXpKiXQvYhLAtEtQF8O29oCcEnyw89YVBKANkM65BBEYm5xpei094GqvbTrO-nQaDq1mDmiFE8Q_KwlJYJgumpWkMaXe39gueQykRR7jSYpLeTXYMPJi2y_z-7-Wh92ijc2k6_vGsvQAIiLBWyzQCeMrou6IMtmm6SYXOD09Bdc_TYHzgnes-1hPWPYqUif24VDsfVcwsutK5Ge0xKMWPw_hfBscFYjLrIl6XOWRUHEqt7FHJrrHD6-4qoBhnSgDlemmRB-2k',
// //     },
// //     {
// //       name: 'Cody Fisher',
// //       role: 'PE Coach',
// //       type: 'Personal',
// //       start: 'Oct 26',
// //       end: 'Oct 27',
// //       days: 2,
// //       avatar:
// //         'https://lh3.googleusercontent.com/aida-public/AB6AXuB0sp7Gz2yfML6yn51akPeJ7UNJiwBN6vDBcg0FCHCwem8iVXdyWJWQrvZRSyuSWl-PaAQsNxWd_kMuvaCjCdskm43ZxtHHMH1LTyuLjbYN_eIgxSK4xNgKDfLaX70icduVtKgnYqqY2zsqRH4sxuTY4G5eiHYj--R1dEvt6cU9xoJB9tZEIb0-GMR0kSbdYhkG2lY5xD1WbdL3Z8ubrBH1mXbsnzrngLPfY-YkBQcCF2uzNs-xd2mAUTLlBz6y4Bm_ooYxrH1w96U',
// //     },
// //   ];

// //   const getLeaveTypeColor = (type) => {
// //     switch (type) {
// //       case 'Annual Leave':
// //         return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
// //       case 'Medical':
// //         return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
// //       case 'Personal':
// //         return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
// //       default:
// //         return 'bg-gray-100 text-gray-600';
// //     }
// //   };

// //   const handleViewAllRequests = () => toast.success('View All Requests clicked (demo)');
// //   const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
// //   const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
// //   const handleViewFullLogs = () => toast.success('View Full Logs clicked (demo)');

// //   return (
// //     <>
// //       {/* Welcome Section */}
// //       <div>
// //         <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">HR Overview</h2>
// //         <p className="text-gray-500 text-sm">Welcome back. Here is what's happening today at Greenview Academy.</p>
// //       </div>

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-3 bg-primary/10 rounded-lg">
// //               <span className="material-icons text-teal-dark dark:text-primary">person_check</span>
// //             </div>
// //             <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+2% vs ytd</span>
// //           </div>
// //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Staff Presence Today</p>
// //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
// //             {stats.staffPresent} <span className="text-base font-normal text-gray-400">/ {stats.totalStaff}</span>
// //           </h3>
// //         </div>
// //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-3 bg-orange-100 rounded-lg">
// //               <span className="material-icons text-orange-500">pending_actions</span>
// //             </div>
// //             <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Urgent</span>
// //           </div>
// //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Leaves</p>
// //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.pendingLeaves}</h3>
// //         </div>
// //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-3 bg-blue-100 rounded-lg">
// //               <span className="material-icons text-blue-500">diversity_3</span>
// //             </div>
// //           </div>
// //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Active Staff</p>
// //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.totalActiveStaff}</h3>
// //         </div>
// //         <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-3 bg-purple-100 rounded-lg">
// //               <span className="material-icons text-purple-500">work_history</span>
// //             </div>
// //           </div>
// //           <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">On Sick Leave</p>
// //           <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.sickLeave}</h3>
// //         </div>
// //       </div>

// //       {/* Main Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Pending Leave Approvals */}
// //         <div className="lg:col-span-2 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-teal-light dark:border-primary/10 flex flex-col">
// //           <div className="p-6 border-b border-teal-light dark:border-primary/10 flex justify-between items-center">
// //             <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
// //               <span className="material-icons text-primary">assignment_late</span>
// //               Pending Leave Approvals
// //             </h4>
// //             <button
// //               onClick={handleViewAllRequests}
// //               className="text-xs font-bold text-primary hover:underline"
// //             >
// //               View All Requests
// //             </button>
// //           </div>
// //           <div className="p-0 flex-1 overflow-x-auto">
// //             <table className="w-full text-left">
// //               <thead className="bg-gray-50 dark:bg-primary/5 text-gray-500 uppercase text-[10px] font-bold tracking-widest">
// //                 <tr>
// //                   <th className="px-6 py-4">Staff Member</th>
// //                   <th className="px-6 py-4">Leave Type</th>
// //                   <th className="px-6 py-4">Duration</th>
// //                   <th className="px-6 py-4 text-right">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-teal-light dark:divide-primary/10">
// //                 {leaveRequests.map((request, idx) => (
// //                   <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors">
// //                     <td className="px-6 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-8 h-8 rounded-full overflow-hidden">
// //                           <img src={request.avatar} alt="" className="w-full h-full object-cover" />
// //                         </div>
// //                         <div>
// //                           <p className="text-sm font-bold text-gray-800 dark:text-white">{request.name}</p>
// //                           <p className="text-[10px] text-gray-500">{request.role}</p>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <span className={`px-2 py-1 text-[10px] font-bold rounded ${getLeaveTypeColor(request.type)}`}>
// //                         {request.type}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       <p className="text-xs text-gray-600 dark:text-gray-400">
// //                         {request.start} - {request.end}
// //                       </p>
// //                       <p className="text-[10px] text-gray-400">({request.days} Day{request.days > 1 ? 's' : ''})</p>
// //                     </td>
// //                     <td className="px-6 py-4 text-right space-x-2">
// //                       <button
// //                         onClick={() => handleReject(request.name)}
// //                         className="w-8 h-8 rounded bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
// //                       >
// //                         <span className="material-icons text-sm">close</span>
// //                       </button>
// //                       <button
// //                         onClick={() => handleApprove(request.name)}
// //                         className="w-8 h-8 rounded bg-primary hover:bg-teal-dark text-white transition-colors"
// //                       >
// //                         <span className="material-icons text-sm">check</span>
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Right Column: Staff Composition & Attendance */}
// //         <div className="space-y-8">
// //           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //             <h4 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
// //               <span className="material-icons text-primary">pie_chart</span>
// //               Staff Composition
// //             </h4>
// //             <div className="relative w-40 h-40 mx-auto mb-6">
// //               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
// //                 <circle
// //                   className="text-gray-100 dark:text-primary/10"
// //                   cx="18"
// //                   cy="18"
// //                   fill="transparent"
// //                   r="15.9155"
// //                   stroke="currentColor"
// //                   strokeWidth="3"
// //                 ></circle>
// //                 <circle
// //                   className="text-primary"
// //                   cx="18"
// //                   cy="18"
// //                   fill="transparent"
// //                   r="15.9155"
// //                   stroke="currentColor"
// //                   strokeDasharray="75, 100"
// //                   strokeLinecap="round"
// //                   strokeWidth="3.5"
// //                 ></circle>
// //                 <circle
// //                   className="text-teal-dark"
// //                   cx="18"
// //                   cy="18"
// //                   fill="transparent"
// //                   r="15.9155"
// //                   stroke="currentColor"
// //                   strokeDasharray="25, 100"
// //                   strokeDashoffset="-75"
// //                   strokeLinecap="round"
// //                   strokeWidth="3.5"
// //                 ></circle>
// //               </svg>
// //               <div className="absolute inset-0 flex flex-col items-center justify-center">
// //                 <span className="text-2xl font-extrabold text-gray-800 dark:text-white">142</span>
// //                 <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
// //               </div>
// //             </div>
// //             <div className="space-y-3">
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-3 h-3 rounded-full bg-primary"></div>
// //                   <span className="text-sm text-gray-600 dark:text-gray-400">Teaching Staff</span>
// //                 </div>
// //                 <span className="text-sm font-bold text-gray-800 dark:text-white">106 (75%)</span>
// //               </div>
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-3 h-3 rounded-full bg-teal-dark"></div>
// //                   <span className="text-sm text-gray-600 dark:text-gray-400">Non-Teaching</span>
// //                 </div>
// //                 <span className="text-sm font-bold text-gray-800 dark:text-white">36 (25%)</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
// //             <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
// //               <span className="material-icons text-primary">analytics</span>
// //               Today's Attendance
// //             </h4>
// //             <div className="space-y-4">
// //               <div>
// //                 <div className="flex justify-between mb-1">
// //                   <span className="text-[10px] font-bold text-gray-400 uppercase">Clocked In</span>
// //                   <span className="text-xs font-bold text-primary">94%</span>
// //                 </div>
// //                 <div className="w-full h-2 bg-gray-100 dark:bg-primary/5 rounded-full overflow-hidden">
// //                   <div className="h-full bg-primary" style={{ width: '94%' }}></div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center justify-between pt-2">
// //                 <div className="text-center flex-1 border-r border-teal-light dark:border-primary/10">
// //                   <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">On-Time</p>
// //                   <p className="text-lg font-extrabold text-gray-800 dark:text-white">112</p>
// //                 </div>
// //                 <div className="text-center flex-1">
// //                   <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Late Arrivals</p>
// //                   <p className="text-lg font-extrabold text-orange-500">12</p>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={handleViewFullLogs}
// //                 className="w-full py-2 bg-gray-50 dark:bg-primary/5 hover:bg-primary/10 text-teal-dark dark:text-primary text-xs font-bold rounded-lg transition-all mt-2"
// //               >
// //                 View Full Logs
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4">
// //         <p>© 2024 Greenview Academy School Ecosystem. Built with Unity Design System.</p>
// //         <div className="flex items-center gap-4">
// //           <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Privacy Policy clicked (demo)'); }} className="hover:text-primary transition-colors">
// //             Privacy Policy
// //           </a>
// //           <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Help Center clicked (demo)'); }} className="hover:text-primary transition-colors">
// //             Help Center
// //           </a>
// //           <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Feedback clicked (demo)'); }} className="hover:text-primary transition-colors">
// //             Feedback
// //           </a>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default HrDashboard;

// import React from 'react';
// import HrSidebar from '../components/HrSidebar';
// import toast from 'react-hot-toast';

// const HrDashboard = () => {
//   // your existing data and functions (keep them exactly as they are)
//   const stats = {
//     staffPresent: 124,
//     totalStaff: 132,
//     pendingLeaves: 8,
//     totalActiveStaff: 142,
//     sickLeave: 4,
//   };

//   const leaveRequests = [
//     {
//       name: 'Robert Fox',
//       role: 'Math Teacher',
//       type: 'Annual Leave',
//       start: 'Oct 24',
//       end: 'Oct 27',
//       days: 4,
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQOT_fBuZ0lMG-iq0aS6W6sQG838kL8Ki5ylX6ieDbrgHOocjllRedXBaPR9GS67V4lo4Ka1HSLwm3aLcadORct5F_Zf8jt3HY23Nq3ggcnILQK8m9b3OWhAZgfyy20h3g8vJD230QhwZwjdiLJoVxVVk8kWeoGLyTwyKVLIR_QkLqGPOQLNPuuqYsgDix2ZfFFPJFU56oDEjPSrZdeYpAj9ooxEV58Gn1QCOL8GSZ-IgPb9XI_ybdK_gTE1Ui628Aiw2eSbTNAg',
//     },
//     {
//       name: 'Jenny Wilson',
//       role: 'Admin Assistant',
//       type: 'Medical',
//       start: 'Oct 23',
//       end: 'Oct 23',
//       days: 1,
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDccTeXpKiXQvYhLAtEtQF8O29oCcEnyw89YVBKANkM65BBEYm5xpei094GqvbTrO-nQaDq1mDmiFE8Q_KwlJYJgumpWkMaXe39gueQykRR7jSYpLeTXYMPJi2y_z-7-Wh92ijc2k6_vGsvQAIiLBWyzQCeMrou6IMtmm6SYXOD09Bdc_TYHzgnes-1hPWPYqUif24VDsfVcwsutK5Ge0xKMWPw_hfBscFYjLrIl6XOWRUHEqt7FHJrrHD6-4qoBhnSgDlemmRB-2k',
//     },
//     {
//       name: 'Cody Fisher',
//       role: 'PE Coach',
//       type: 'Personal',
//       start: 'Oct 26',
//       end: 'Oct 27',
//       days: 2,
//       avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0sp7Gz2yfML6yn51akPeJ7UNJiwBN6vDBcg0FCHCwem8iVXdyWJWQrvZRSyuSWl-PaAQsNxWd_kMuvaCjCdskm43ZxtHHMH1LTyuLjbYN_eIgxSK4xNgKDfLaX70icduVtKgnYqqY2zsqRH4sxuTY4G5eiHYj--R1dEvt6cU9xoJB9tZEIb0-GMR0kSbdYhkG2lY5xD1WbdL3Z8ubrBH1mXbsnzrngLPfY-YkBQcCF2uzNs-xd2mAUTLlBz6y4Bm_ooYxrH1w96U',
//     },
//   ];

//   const getLeaveTypeColor = (type) => {
//     switch (type) {
//       case 'Annual Leave':
//         return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
//       case 'Medical':
//         return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
//       case 'Personal':
//         return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
//       default:
//         return 'bg-gray-100 text-gray-600';
//     }
//   };

//   const handleViewAllRequests = () => toast.success('View All Requests clicked (demo)');
//   const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
//   const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
//   const handleViewFullLogs = () => toast.success('View Full Logs clicked (demo)');

//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark">
//       <HrSidebar />
//       <div className="ml-64 p-8 space-y-8">
//         {/* Welcome Section */}
//         <div>
//           <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">HR Overview</h2>
//           <p className="text-gray-500 text-sm">Welcome back. Here is what's happening today at Greenview Academy.</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-primary/10 rounded-lg">
//                 <span className="material-icons text-teal-dark dark:text-primary">person_check</span>
//               </div>
//               <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+2% vs ytd</span>
//             </div>
//             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Staff Presence Today</p>
//             <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
//               {stats.staffPresent} <span className="text-base font-normal text-gray-400">/ {stats.totalStaff}</span>
//             </h3>
//           </div>
//           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-orange-100 rounded-lg">
//                 <span className="material-icons text-orange-500">pending_actions</span>
//               </div>
//               <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Urgent</span>
//             </div>
//             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Leaves</p>
//             <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.pendingLeaves}</h3>
//           </div>
//           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-blue-100 rounded-lg">
//                 <span className="material-icons text-blue-500">diversity_3</span>
//               </div>
//             </div>
//             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Active Staff</p>
//             <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.totalActiveStaff}</h3>
//           </div>
//           <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-purple-100 rounded-lg">
//                 <span className="material-icons text-purple-500">work_history</span>
//               </div>
//             </div>
//             <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">On Sick Leave</p>
//             <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.sickLeave}</h3>
//           </div>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Pending Leave Approvals */}
//           <div className="lg:col-span-2 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-teal-light dark:border-primary/10 flex flex-col">
//             <div className="p-6 border-b border-teal-light dark:border-primary/10 flex justify-between items-center">
//               <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
//                 <span className="material-icons text-primary">assignment_late</span>
//                 Pending Leave Approvals
//               </h4>
//               <button
//                 onClick={handleViewAllRequests}
//                 className="text-xs font-bold text-primary hover:underline"
//               >
//                 View All Requests
//               </button>
//             </div>
//             <div className="p-0 flex-1 overflow-x-auto">
//               <table className="w-full text-left">
//                 <thead className="bg-gray-50 dark:bg-primary/5 text-gray-500 uppercase text-[10px] font-bold tracking-widest">
//                   <tr>
//                     <th className="px-6 py-4">Staff Member</th>
//                     <th className="px-6 py-4">Leave Type</th>
//                     <th className="px-6 py-4">Duration</th>
//                     <th className="px-6 py-4 text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-teal-light dark:divide-primary/10">
//                   {leaveRequests.map((request, idx) => (
//                     <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-8 h-8 rounded-full overflow-hidden">
//                             <img src={request.avatar} alt="" className="w-full h-full object-cover" />
//                           </div>
//                           <div>
//                             <p className="text-sm font-bold text-gray-800 dark:text-white">{request.name}</p>
//                             <p className="text-[10px] text-gray-500">{request.role}</p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`px-2 py-1 text-[10px] font-bold rounded ${getLeaveTypeColor(request.type)}`}>
//                           {request.type}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <p className="text-xs text-gray-600 dark:text-gray-400">
//                           {request.start} - {request.end}
//                         </p>
//                         <p className="text-[10px] text-gray-400">({request.days} Day{request.days > 1 ? 's' : ''})</p>
//                       </td>
//                       <td className="px-6 py-4 text-right space-x-2">
//                         <button
//                           onClick={() => handleReject(request.name)}
//                           className="w-8 h-8 rounded bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
//                         >
//                           <span className="material-icons text-sm">close</span>
//                         </button>
//                         <button
//                           onClick={() => handleApprove(request.name)}
//                           className="w-8 h-8 rounded bg-primary hover:bg-teal-dark text-white transition-colors"
//                         >
//                           <span className="material-icons text-sm">check</span>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right Column: Staff Composition & Attendance */}
//           <div className="space-y-8">
//             <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//               <h4 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
//                 <span className="material-icons text-primary">pie_chart</span>
//                 Staff Composition
//               </h4>
//               <div className="relative w-40 h-40 mx-auto mb-6">
//                 <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                   <circle
//                     className="text-gray-100 dark:text-primary/10"
//                     cx="18"
//                     cy="18"
//                     fill="transparent"
//                     r="15.9155"
//                     stroke="currentColor"
//                     strokeWidth="3"
//                   ></circle>
//                   <circle
//                     className="text-primary"
//                     cx="18"
//                     cy="18"
//                     fill="transparent"
//                     r="15.9155"
//                     stroke="currentColor"
//                     strokeDasharray="75, 100"
//                     strokeLinecap="round"
//                     strokeWidth="3.5"
//                   ></circle>
//                   <circle
//                     className="text-teal-dark"
//                     cx="18"
//                     cy="18"
//                     fill="transparent"
//                     r="15.9155"
//                     stroke="currentColor"
//                     strokeDasharray="25, 100"
//                     strokeDashoffset="-75"
//                     strokeLinecap="round"
//                     strokeWidth="3.5"
//                   ></circle>
//                 </svg>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <span className="text-2xl font-extrabold text-gray-800 dark:text-white">142</span>
//                   <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-primary"></div>
//                     <span className="text-sm text-gray-600 dark:text-gray-400">Teaching Staff</span>
//                   </div>
//                   <span className="text-sm font-bold text-gray-800 dark:text-white">106 (75%)</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-teal-dark"></div>
//                     <span className="text-sm text-gray-600 dark:text-gray-400">Non-Teaching</span>
//                   </div>
//                   <span className="text-sm font-bold text-gray-800 dark:text-white">36 (25%)</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
//               <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
//                 <span className="material-icons text-primary">analytics</span>
//                 Today's Attendance
//               </h4>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="text-[10px] font-bold text-gray-400 uppercase">Clocked In</span>
//                     <span className="text-xs font-bold text-primary">94%</span>
//                   </div>
//                   <div className="w-full h-2 bg-gray-100 dark:bg-primary/5 rounded-full overflow-hidden">
//                     <div className="h-full bg-primary" style={{ width: '94%' }}></div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between pt-2">
//                   <div className="text-center flex-1 border-r border-teal-light dark:border-primary/10">
//                     <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">On-Time</p>
//                     <p className="text-lg font-extrabold text-gray-800 dark:text-white">112</p>
//                   </div>
//                   <div className="text-center flex-1">
//                     <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Late Arrivals</p>
//                     <p className="text-lg font-extrabold text-orange-500">12</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleViewFullLogs}
//                   className="w-full py-2 bg-gray-50 dark:bg-primary/5 hover:bg-primary/10 text-teal-dark dark:text-primary text-xs font-bold rounded-lg transition-all mt-2"
//                 >
//                   View Full Logs
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4">
//           <p>© 2024 Greenview Academy School Ecosystem. Built with Unity Design System.</p>
//           <div className="flex items-center gap-4">
//             <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Privacy Policy clicked (demo)'); }} className="hover:text-primary transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Help Center clicked (demo)'); }} className="hover:text-primary transition-colors">
//               Help Center
//             </a>
//             <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Feedback clicked (demo)'); }} className="hover:text-primary transition-colors">
//               Feedback
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HrDashboard;

import React from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrDashboard = () => {
  const stats = {
    staffPresent: 124,
    totalStaff: 132,
    pendingLeaves: 8,
    totalActiveStaff: 142,
    sickLeave: 4,
  };

  const leaveRequests = [
    {
      name: 'Robert Fox',
      role: 'Math Teacher',
      type: 'Annual Leave',
      start: 'Oct 24',
      end: 'Oct 27',
      days: 4,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQOT_fBuZ0lMG-iq0aS6W6sQG838kL8Ki5ylX6ieDbrgHOocjllRedXBaPR9GS67V4lo4Ka1HSLwm3aLcadORct5F_Zf8jt3HY23Nq3ggcnILQK8m9b3OWhAZgfyy20h3g8vJD230QhwZwjdiLJoVxVVk8kWeoGLyTwyKVLIR_QkLqGPOQLNPuuqYsgDix2ZfFFPJFU56oDEjPSrZdeYpAj9ooxEV58Gn1QCOL8GSZ-IgPb9XI_ybdK_gTE1Ui628Aiw2eSbTNAg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Admin Assistant',
      type: 'Medical',
      start: 'Oct 23',
      end: 'Oct 23',
      days: 1,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDccTeXpKiXQvYhLAtEtQF8O29oCcEnyw89YVBKANkM65BBEYm5xpei094GqvbTrO-nQaDq1mDmiFE8Q_KwlJYJgumpWkMaXe39gueQykRR7jSYpLeTXYMPJi2y_z-7-Wh92ijc2k6_vGsvQAIiLBWyzQCeMrou6IMtmm6SYXOD09Bdc_TYHzgnes-1hPWPYqUif24VDsfVcwsutK5Ge0xKMWPw_hfBscFYjLrIl6XOWRUHEqt7FHJrrHD6-4qoBhnSgDlemmRB-2k',
    },
    {
      name: 'Cody Fisher',
      role: 'PE Coach',
      type: 'Personal',
      start: 'Oct 26',
      end: 'Oct 27',
      days: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0sp7Gz2yfML6yn51akPeJ7UNJiwBN6vDBcg0FCHCwem8iVXdyWJWQrvZRSyuSWl-PaAQsNxWd_kMuvaCjCdskm43ZxtHHMH1LTyuLjbYN_eIgxSK4xNgKDfLaX70icduVtKgnYqqY2zsqRH4sxuTY4G5eiHYj--R1dEvt6cU9xoJB9tZEIb0-GMR0kSbdYhkG2lY5xD1WbdL3Z8ubrBH1mXbsnzrngLPfY-YkBQcCF2uzNs-xd2mAUTLlBz6y4Bm_ooYxrH1w96U',
    },
  ];

  const getLeaveTypeColor = (type) => {
    switch (type) {
      case 'Annual Leave':
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Medical':
        return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Personal':
        return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleViewAllRequests = () => toast.success('View All Requests clicked (demo)');
  const handleApprove = (name) => toast.success(`Approved leave for ${name} (demo)`);
  const handleReject = (name) => toast.success(`Rejected leave for ${name} (demo)`);
  const handleViewFullLogs = () => toast.success('View Full Logs clicked (demo)');

  return (
    <HrPageWrapper>
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">HR Overview</h2>
        <p className="text-gray-500 text-sm">Welcome back. Here is what's happening today at Greenview Academy.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-icons text-teal-dark dark:text-primary">person_check</span>
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+2% vs ytd</span>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Staff Presence Today</p>
          <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">
            {stats.staffPresent} <span className="text-base font-normal text-gray-400">/ {stats.totalStaff}</span>
          </h3>
        </div>
        <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <span className="material-icons text-orange-500">pending_actions</span>
            </div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Urgent</span>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Leaves</p>
          <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.pendingLeaves}</h3>
        </div>
        <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="material-icons text-blue-500">diversity_3</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Active Staff</p>
          <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.totalActiveStaff}</h3>
        </div>
        <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <span className="material-icons text-purple-500">work_history</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">On Sick Leave</p>
          <h3 className="text-3xl font-extrabold text-gray-800 dark:text-white">{stats.sickLeave}</h3>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Leave Approvals */}
        <div className="lg:col-span-2 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-teal-light dark:border-primary/10 flex flex-col">
          <div className="p-6 border-b border-teal-light dark:border-primary/10 flex justify-between items-center">
            <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <span className="material-icons text-primary">assignment_late</span>
              Pending Leave Approvals
            </h4>
            <button
              onClick={handleViewAllRequests}
              className="text-xs font-bold text-primary hover:underline"
            >
              View All Requests
            </button>
          </div>
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-primary/5 text-gray-500 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Staff Member</th>
                  <th className="px-6 py-4">Leave Type</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-light dark:divide-primary/10">
                {leaveRequests.map((request, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src={request.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800 dark:text-white">{request.name}</p>
                          <p className="text-[10px] text-gray-500">{request.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-[10px] font-bold rounded ${getLeaveTypeColor(request.type)}`}>
                        {request.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {request.start} - {request.end}
                      </p>
                      <p className="text-[10px] text-gray-400">({request.days} Day{request.days > 1 ? 's' : ''})</p>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleReject(request.name)}
                        className="w-8 h-8 rounded bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                      >
                        <span className="material-icons text-sm">close</span>
                      </button>
                      <button
                        onClick={() => handleApprove(request.name)}
                        className="w-8 h-8 rounded bg-primary hover:bg-teal-dark text-white transition-colors"
                      >
                        <span className="material-icons text-sm">check</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Staff Composition & Attendance */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
            <h4 className="font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">pie_chart</span>
              Staff Composition
            </h4>
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  className="text-gray-100 dark:text-primary/10"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="15.9155"
                  stroke="currentColor"
                  strokeWidth="3"
                ></circle>
                <circle
                  className="text-primary"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="15.9155"
                  stroke="currentColor"
                  strokeDasharray="75, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                ></circle>
                <circle
                  className="text-teal-dark"
                  cx="18"
                  cy="18"
                  fill="transparent"
                  r="15.9155"
                  stroke="currentColor"
                  strokeDasharray="25, 100"
                  strokeDashoffset="-75"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-gray-800 dark:text-white">142</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Total</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Teaching Staff</span>
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-white">106 (75%)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-dark"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Non-Teaching</span>
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-white">36 (25%)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-teal-light dark:border-primary/10">
            <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons text-primary">analytics</span>
              Today's Attendance
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Clocked In</span>
                  <span className="text-xs font-bold text-primary">94%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-primary/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="text-center flex-1 border-r border-teal-light dark:border-primary/10">
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">On-Time</p>
                  <p className="text-lg font-extrabold text-gray-800 dark:text-white">112</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Late Arrivals</p>
                  <p className="text-lg font-extrabold text-orange-500">12</p>
                </div>
              </div>
              <button
                onClick={handleViewFullLogs}
                className="w-full py-2 bg-gray-50 dark:bg-primary/5 hover:bg-primary/10 text-teal-dark dark:text-primary text-xs font-bold rounded-lg transition-all mt-2"
              >
                View Full Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4">
        <p>© 2024 Greenview Academy School Ecosystem. Built with Unity Design System.</p>
        <div className="flex items-center gap-4">
          <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Privacy Policy clicked (demo)'); }} className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Help Center clicked (demo)'); }} className="hover:text-primary transition-colors">
            Help Center
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); toast.success('Feedback clicked (demo)'); }} className="hover:text-primary transition-colors">
            Feedback
          </a>
        </div>
      </div>
    </HrPageWrapper>
  );
};

export default HrDashboard;