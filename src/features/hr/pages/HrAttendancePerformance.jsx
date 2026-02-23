// // import React, { useState } from 'react';
// // import toast from 'react-hot-toast';

// // const AttendancePerformance = () => {
// //   const [selectedStaff, setSelectedStaff] = useState('Dr. James Wilson');

// //   const staffList = [
// //     { name: 'Dr. James Wilson', dept: 'Sciences', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Tlb1RlMGeqIFtQXyeD-bl4ROUdF6iqxVtj_0jnwK4hMI3Y92Wmjiog6M1UCQbV3o7sbJ74PlHocObYfB8xBRvIB0J6uxiRewu4Aii7QjUQmTmrpmsNoypcWbuEL8uCiQaQjjDPDtrP3sMZp_pgCExBVGxIQTlT-NWOmQRiRozrLVG2qzuu7ePhooj0VJPAlY2Hk3C-KqL2o-hVreUK12oFuc4t0FSNhuVqdol0sbtA-n9lLnugSkm6DJ98pOQ1ScYlMd4i-tldc' },
// //     { name: 'Sarah Jenkins', dept: 'Mathematics', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBay5buPPgwxEu7KFTX0siFBDe_Id8I6002lIqOZa4LPQmgpoCCba7JQ-H8dthk80ViytKJK5mP-pZWP7qtiUvTRvofkjTFoBiIdiwSeDbzv7c-yhuReowGgzu2dAUe7fFFUisCXDC3VwWxzHGrP6ZpjDabLE8k4-cbLFoxZaVyOZ39mnCRHwGhOh174trc5veROi3vndW9rFoeiwQDNTI6JwlRDaP0eqw0Fa89KUr7fMTm4bGLzRhbhtRDa4jetlGPfzC6vRrNNCs' },
// //     { name: 'Robert Chen', dept: 'Arts', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtvK5K21bKdiiJZWgszpKFhagGRHsmpytpxO6VUJs6fNwUHODDU5waGMx9SALR9eEDAZscBc9gqwiEwAARZRIAVYxfRDAVSPA3mVojMHW6K-cPajjR6SMa_mvZemAqoBsqAUi9xbFzYpox0YgyyFEd68AK9ztyVfWCB87Q5FRhrXvbmMQjRIMYRuesDgo6vwC-NKFExzZlDvBxXYRC0KJ44Uq1BQx-XpwbRC0pJC_FiOyWKjlwhc-oYrtHbF4GCaA16-O3pZqQfIE' },
// //     { name: 'Linda Gray', dept: 'History', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBga45pyiflq3YHXh_DAOiTPAPRJ10ScRsXx0qzo33ALdFi7iwxuO4iui6IGiw1pZxGGAhk9WFNy6-19lU2kDa9Og6f_qepf0U20z8zYRIAVpLR6EySKEK4rYn8OoAFNCc4Gu7nrKY756pI3LpJ7AHfVhccUxLUj4CwFFuENctRvsnxQXz9HY13d3sLKErl9hdO7JkEfODjOZ30-6LqrRtmDbPYOBl6-KHV35-txpWhj0fJq_eMh1HO9ap_CWjJwKExfEddHWh1ae4' },
// //   ];

// //   const days = Array.from({ length: 15 }, (_, i) => i + 1);
// //   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

// //   const handleExportReport = () => toast.success('Export Report clicked (demo)');
// //   const handleStaffSelect = (name) => {
// //     setSelectedStaff(name);
// //     toast.success(`Selected ${name} (demo)`);
// //   };
// //   const handleFullProfile = () => toast.success('Full Profile clicked (demo)');
// //   const handleAddNote = () => toast.success('Add Note clicked (demo)');
// //   const handleQuickAction = (action) => toast.success(`${action} clicked (demo)`);

// //   return (
// //     <>
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-6">
// //         <div className="flex items-center gap-2 text-slate-500 text-sm">
// //           <span className="material-icons text-sm">home</span>
// //           <span>/</span>
// //           <span>HR</span>
// //           <span>/</span>
// //           <span className="text-slate-900 dark:text-slate-100 font-medium">Attendance & Performance</span>
// //         </div>
// //         <button
// //           onClick={handleExportReport}
// //           className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-slate-900 text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
// //         >
// //           <span className="material-icons text-sm">download</span>
// //           Export Report
// //         </button>
// //       </div>

// //       {/* Stats Grid */}
// //       <div className="grid grid-cols-4 gap-6 mb-8">
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
// //           <div className="flex justify-between items-start">
// //             <span className="text-sm font-medium text-slate-500">Today's Attendance</span>
// //             <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">+2.1%</span>
// //           </div>
// //           <div className="mt-2">
// //             <span className="text-2xl font-bold tracking-tight">94.2%</span>
// //             <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
// //               <div className="bg-primary h-full rounded-full" style={{ width: '94.2%' }}></div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
// //           <div className="flex justify-between items-start text-slate-500">
// //             <span className="text-sm font-medium">Late Arrivals</span>
// //             <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">-5%</span>
// //           </div>
// //           <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">12</p>
// //           <p className="text-xs text-slate-400 mt-1">Average: 15 daily</p>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
// //           <div className="flex justify-between items-start text-slate-500">
// //             <span className="text-sm font-medium">On Leave</span>
// //             <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Normal</span>
// //           </div>
// //           <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">08</p>
// //           <p className="text-xs text-slate-400 mt-1">Planned leaves today</p>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
// //           <div className="flex justify-between items-start text-slate-500">
// //             <span className="text-sm font-medium">Top Performers</span>
// //             <span className="bg-primary/20 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-bold">New High</span>
// //           </div>
// //           <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">24</p>
// //           <p className="text-xs text-slate-400 mt-1">Met attendance targets</p>
// //         </div>
// //       </div>

// //       {/* Monthly Attendance Grid & Performance Panel */}
// //       <div className="flex gap-8">
// //         {/* Main Grid Container */}
// //         <div className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col">
// //           <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
// //             <h2 className="text-lg font-bold">Attendance Grid - October 2023</h2>
// //             <div className="flex gap-2">
// //               <select
// //                 onChange={(e) => toast.success(`Filter changed to ${e.target.value} (demo)`)}
// //                 className="text-xs border-slate-200 rounded-lg py-1 px-3 dark:bg-slate-900"
// //               >
// //                 <option>Academic Staff</option>
// //                 <option>Administrative Staff</option>
// //                 <option>Maintenance</option>
// //               </select>
// //               <button
// //                 onClick={() => toast.success('Previous month clicked (demo)')}
// //                 className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
// //               >
// //                 <span className="material-icons text-lg">chevron_left</span>
// //               </button>
// //               <button
// //                 onClick={() => toast.success('Next month clicked (demo)')}
// //                 className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
// //               >
// //                 <span className="material-icons text-lg">chevron_right</span>
// //               </button>
// //             </div>
// //           </div>
// //           {/* Grid Body */}
// //           <div className="overflow-x-auto relative">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="border-b border-slate-100 dark:border-slate-800">
// //                   <th className="sticky left-0 px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-800 min-w-[200px]">Staff Member</th>
// //                   {days.map((day, i) => (
// //                     <th key={day} className={`px-3 py-4 text-[10px] font-bold text-center text-slate-400 border-x border-slate-100 dark:border-slate-800 w-10 ${i >= 5 && i < 7 ? 'bg-slate-50 dark:bg-slate-800/50' : ''} ${day === 10 ? 'ring-2 ring-primary ring-inset bg-primary/5' : ''}`}>
// //                       {day}<br /><span className="font-normal opacity-50">{dayNames[i]}</span>
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {staffList.map((staff, rowIdx) => (
// //                   <tr
// //                     key={staff.name}
// //                     onClick={() => handleStaffSelect(staff.name)}
// //                     className={`border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 cursor-pointer ${selectedStaff === staff.name ? 'bg-primary/5' : ''}`}
// //                   >
// //                     <td className="sticky left-0 px-6 py-4 bg-inherit">
// //                       <div className="flex items-center gap-3">
// //                         <img src={staff.avatar} alt="" className="w-8 h-8 rounded-lg shadow-sm" />
// //                         <div>
// //                           <p className="text-sm font-bold">{staff.name}</p>
// //                           <p className="text-[10px] text-slate-500">Dept: {staff.dept}</p>
// //                         </div>
// //                       </div>
// //                     </td>
// //                     {/* Mock attendance icons – in a real app you'd map actual data */}
// //                     {days.map((day, i) => {
// //                       let icon = 'check_circle';
// //                       let color = 'text-primary';
// //                       if (rowIdx === 0 && day === 4) { icon = 'schedule'; color = 'text-amber-400'; }
// //                       else if (rowIdx === 1 && day === 2) { icon = 'cancel'; color = 'text-red-400'; }
// //                       else if (rowIdx === 2 && day <= 3) { icon = 'beach_access'; color = 'text-slate-300'; }
// //                       else if (rowIdx === 3 && day === 8) { icon = 'schedule'; color = 'text-amber-400'; }
// //                       else if (day === 2 && rowIdx === 1) { icon = 'cancel'; color = 'text-red-400'; }
// //                       else if (day === 11 || day === 12) { icon = 'remove'; color = 'text-slate-400'; }
// //                       else if (i === 5 || i === 6 || i === 12 || i === 13) { icon = ''; } // weekend empty
// //                       return (
// //                         <td key={day} className="text-center">
// //                           {icon ? (
// //                             <span className={`material-icons text-sm ${color}`}>{icon}</span>
// //                           ) : (
// //                             <span className="text-[10px] font-bold text-slate-400">-</span>
// //                           )}
// //                         </td>
// //                       );
// //                     })}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //           {/* Legend Footer */}
// //           <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-6 text-[10px] font-bold text-slate-500 uppercase">
// //             <div className="flex items-center gap-1.5"><span className="material-icons text-primary text-base">check_circle</span> Present</div>
// //             <div className="flex items-center gap-1.5"><span className="material-icons text-amber-400 text-base">schedule</span> Late</div>
// //             <div className="flex items-center gap-1.5"><span className="material-icons text-red-400 text-base">cancel</span> Absent</div>
// //             <div className="flex items-center gap-1.5"><span className="material-icons text-slate-300 text-base">beach_access</span> Leave</div>
// //           </div>
// //         </div>

// //         {/* Side Performance Panel */}
// //         <div className="w-96 flex flex-col gap-6">
// //           <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
// //             <div className="flex items-center justify-between mb-6">
// //               <h3 className="text-base font-bold">Staff Performance</h3>
// //               <button onClick={handleFullProfile} className="text-primary text-xs font-bold hover:underline">Full Profile</button>
// //             </div>
// //             <div className="flex items-center gap-4 mb-6">
// //               <img
// //                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUYDzR_rE5pSRnghzZLsDxJGqafc8xMs8UZkPxDv8kCr6rCCCxeBDmf82teEeEldQ2B1KajRdLYSS8qkq1NeMNtTLWusU4Z5fiHAb-3R70mRwZJ-ZQ6FA-aQxcJRUG_51qXu_04y5cv6r6J8rG4ACxyo5skLfkyQrt0LPl5sjHGDKnr2cIvUbRWYCAMCI1nhxgVrEGyXIqwsJHX0qGXJ_x5BUMCSDZbVRSCyAwQAFsFlxcRLSWTfg3u6bhuxOqpV_fqsUnUJ5rfs"
// //                 alt=""
// //                 className="w-16 h-16 rounded-xl border-2 border-primary"
// //               />
// //               <div>
// //                 <h4 className="text-lg font-bold">{selectedStaff}</h4>
// //                 <p className="text-sm text-slate-500">Senior Science Faculty</p>
// //                 <div className="flex items-center gap-1 mt-1">
// //                   {[1, 2, 3, 4].map(i => <span key={i} className="material-icons text-amber-400 text-xs">star</span>)}
// //                   <span className="material-icons text-slate-300 text-xs">star</span>
// //                   <span className="text-xs font-bold ml-1">4.2</span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="space-y-4">
// //               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
// //                 <p className="text-xs text-slate-500 mb-1">Development Progress</p>
// //                 <div className="flex items-center justify-between mb-2">
// //                   <span className="text-sm font-bold text-primary">High Performer</span>
// //                   <span className="text-sm font-bold">88%</span>
// //                 </div>
// //                 <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
// //                   <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
// //                 </div>
// //               </div>
// //               <div className="space-y-3">
// //                 <div className="flex justify-between items-center">
// //                   <h5 className="text-sm font-bold">Admin Feedback</h5>
// //                   <button onClick={handleAddNote} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 font-bold">+ Add Note</button>
// //                 </div>
// //                 <div className="relative pl-6 space-y-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
// //                   <div className="relative">
// //                     <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-900"></div>
// //                     <p className="text-xs font-bold">Oct 05 - Check-in delay</p>
// //                     <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Staff member reported technical issue with biometric scanner. Adjusted to 'Present'."</p>
// //                   </div>
// //                   <div className="relative">
// //                     <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
// //                     <p className="text-xs font-bold">Sep 28 - Excellence Award</p>
// //                     <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Recognized for extra session support during science fair preparation."</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Performance Quick Actions */}
// //           <div className="bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 shadow-lg overflow-hidden relative">
// //             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -mr-8 -mt-8 blur-2xl"></div>
// //             <h3 className="text-sm font-bold mb-4 relative z-10">Quick Evaluation</h3>
// //             <div className="grid grid-cols-2 gap-3 relative z-10">
// //               <button onClick={() => handleQuickAction('Incentive')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
// //                 <span className="material-icons text-primary">emoji_events</span>
// //                 <span className="text-[10px] font-bold">Incentive</span>
// //               </button>
// //               <button onClick={() => handleQuickAction('Warning')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
// //                 <span className="material-icons text-amber-400">warning</span>
// //                 <span className="text-[10px] font-bold">Warning</span>
// //               </button>
// //               <button onClick={() => handleQuickAction('Development')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
// //                 <span className="material-icons text-blue-400">edit_note</span>
// //                 <span className="text-[10px] font-bold">Development</span>
// //               </button>
// //               <button onClick={() => handleQuickAction('Monthly Review')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
// //                 <span className="material-icons text-green-400">task_alt</span>
// //                 <span className="text-[10px] font-bold">Monthly Review</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default AttendancePerformance;

// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import HrSidebar from '../components/HrSidebar';

// const AttendancePerformance = () => {
//   const [selectedStaff, setSelectedStaff] = useState('Dr. James Wilson');

//   const staffList = [
//     { name: 'Dr. James Wilson', dept: 'Sciences', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Tlb1RlMGeqIFtQXyeD-bl4ROUdF6iqxVtj_0jnwK4hMI3Y92Wmjiog6M1UCQbV3o7sbJ74PlHocObYfB8xBRvIB0J6uxiRewu4Aii7QjUQmTmrpmsNoypcWbuEL8uCiQaQjjDPDtrP3sMZp_pgCExBVGxIQTlT-NWOmQRiRozrLVG2qzuu7ePhooj0VJPAlY2Hk3C-KqL2o-hVreUK12oFuc4t0FSNhuVqdol0sbtA-n9lLnugSkm6DJ98pOQ1ScYlMd4i-tldc' },
//     { name: 'Sarah Jenkins', dept: 'Mathematics', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBay5buPPgwxEu7KFTX0siFBDe_Id8I6002lIqOZa4LPQmgpoCCba7JQ-H8dthk80ViytKJK5mP-pZWP7qtiUvTRvofkjTFoBiIdiwSeDbzv7c-yhuReowGgzu2dAUe7fFFUisCXDC3VwWxzHGrP6ZpjDabLE8k4-cbLFoxZaVyOZ39mnCRHwGhOh174trc5veROi3vndW9rFoeiwQDNTI6JwlRDaP0eqw0Fa89KUr7fMTm4bGLzRhbhtRDa4jetlGPfzC6vRrNNCs' },
//     { name: 'Robert Chen', dept: 'Arts', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtvK5K21bKdiiJZWgszpKFhagGRHsmpytpxO6VUJs6fNwUHODDU5waGMx9SALR9eEDAZscBc9gqwiEwAARZRIAVYxfRDAVSPA3mVojMHW6K-cPajjR6SMa_mvZemAqoBsqAUi9xbFzYpox0YgyyFEd68AK9ztyVfWCB87Q5FRhrXvbmMQjRIMYRuesDgo6vwC-NKFExzZlDvBxXYRC0KJ44Uq1BQx-XpwbRC0pJC_FiOyWKjlwhc-oYrtHbF4GCaA16-O3pZqQfIE' },
//     { name: 'Linda Gray', dept: 'History', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBga45pyiflq3YHXh_DAOiTPAPRJ10ScRsXx0qzo33ALdFi7iwxuO4iui6IGiw1pZxGGAhk9WFNy6-19lU2kDa9Og6f_qepf0U20z8zYRIAVpLR6EySKEK4rYn8OoAFNCc4Gu7nrKY756pI3LpJ7AHfVhccUxLUj4CwFFuENctRvsnxQXz9HY13d3sLKErl9hdO7JkEfODjOZ30-6LqrRtmDbPYOBl6-KHV35-txpWhj0fJq_eMh1HO9ap_CWjJwKExfEddHWh1ae4' },
//   ];

//   const days = Array.from({ length: 15 }, (_, i) => i + 1);
//   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

//   const handleExportReport = () => toast.success('Export Report clicked (demo)');
//   const handleStaffSelect = (name) => {
//     setSelectedStaff(name);
//     toast.success(`Selected ${name} (demo)`);
//   };
//   const handleFullProfile = () => toast.success('Full Profile clicked (demo)');
//   const handleAddNote = () => toast.success('Add Note clicked (demo)');
//   const handleQuickAction = (action) => toast.success(`${action} clicked (demo)`);

//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark">
//       <HrSidebar />
//       <div className="ml-64 p-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-2 text-slate-500 text-sm">
//             <span className="material-icons text-sm">home</span>
//             <span>/</span>
//             <span>HR</span>
//             <span>/</span>
//             <span className="text-slate-900 dark:text-slate-100 font-medium">Attendance & Performance</span>
//           </div>
//           <button
//             onClick={handleExportReport}
//             className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-slate-900 text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
//           >
//             <span className="material-icons text-sm">download</span>
//             Export Report
//           </button>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
//             <div className="flex justify-between items-start">
//               <span className="text-sm font-medium text-slate-500">Today's Attendance</span>
//               <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">+2.1%</span>
//             </div>
//             <div className="mt-2">
//               <span className="text-2xl font-bold tracking-tight">94.2%</span>
//               <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
//                 <div className="bg-primary h-full rounded-full" style={{ width: '94.2%' }}></div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
//             <div className="flex justify-between items-start text-slate-500">
//               <span className="text-sm font-medium">Late Arrivals</span>
//               <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">-5%</span>
//             </div>
//             <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">12</p>
//             <p className="text-xs text-slate-400 mt-1">Average: 15 daily</p>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
//             <div className="flex justify-between items-start text-slate-500">
//               <span className="text-sm font-medium">On Leave</span>
//               <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Normal</span>
//             </div>
//             <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">08</p>
//             <p className="text-xs text-slate-400 mt-1">Planned leaves today</p>
//           </div>
//           <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
//             <div className="flex justify-between items-start text-slate-500">
//               <span className="text-sm font-medium">Top Performers</span>
//               <span className="bg-primary/20 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-bold">New High</span>
//             </div>
//             <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">24</p>
//             <p className="text-xs text-slate-400 mt-1">Met attendance targets</p>
//           </div>
//         </div>

//         {/* Monthly Attendance Grid & Performance Panel */}
//         <div className="flex gap-8">
//           {/* Main Grid Container */}
//           <div className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col">
//             <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
//               <h2 className="text-lg font-bold">Attendance Grid - October 2023</h2>
//               <div className="flex gap-2">
//                 <select
//                   onChange={(e) => toast.success(`Filter changed to ${e.target.value} (demo)`)}
//                   className="text-xs border-slate-200 rounded-lg py-1 px-3 dark:bg-slate-900"
//                 >
//                   <option>Academic Staff</option>
//                   <option>Administrative Staff</option>
//                   <option>Maintenance</option>
//                 </select>
//                 <button
//                   onClick={() => toast.success('Previous month clicked (demo)')}
//                   className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
//                 >
//                   <span className="material-icons text-lg">chevron_left</span>
//                 </button>
//                 <button
//                   onClick={() => toast.success('Next month clicked (demo)')}
//                   className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
//                 >
//                   <span className="material-icons text-lg">chevron_right</span>
//                 </button>
//               </div>
//             </div>
//             {/* Grid Body */}
//             <div className="overflow-x-auto relative">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="border-b border-slate-100 dark:border-slate-800">
//                     <th className="sticky left-0 px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-800 min-w-[200px]">Staff Member</th>
//                     {days.map((day, i) => (
//                       <th key={day} className={`px-3 py-4 text-[10px] font-bold text-center text-slate-400 border-x border-slate-100 dark:border-slate-800 w-10 ${i >= 5 && i < 7 ? 'bg-slate-50 dark:bg-slate-800/50' : ''} ${day === 10 ? 'ring-2 ring-primary ring-inset bg-primary/5' : ''}`}>
//                         {day}<br /><span className="font-normal opacity-50">{dayNames[i]}</span>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {staffList.map((staff, rowIdx) => (
//                     <tr
//                       key={staff.name}
//                       onClick={() => handleStaffSelect(staff.name)}
//                       className={`border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 cursor-pointer ${selectedStaff === staff.name ? 'bg-primary/5' : ''}`}
//                     >
//                       <td className="sticky left-0 px-6 py-4 bg-inherit">
//                         <div className="flex items-center gap-3">
//                           <img src={staff.avatar} alt="" className="w-8 h-8 rounded-lg shadow-sm" />
//                           <div>
//                             <p className="text-sm font-bold">{staff.name}</p>
//                             <p className="text-[10px] text-slate-500">Dept: {staff.dept}</p>
//                           </div>
//                         </div>
//                       </td>
//                       {/* Mock attendance icons – in a real app you'd map actual data */}
//                       {days.map((day, i) => {
//                         let icon = 'check_circle';
//                         let color = 'text-primary';
//                         if (rowIdx === 0 && day === 4) { icon = 'schedule'; color = 'text-amber-400'; }
//                         else if (rowIdx === 1 && day === 2) { icon = 'cancel'; color = 'text-red-400'; }
//                         else if (rowIdx === 2 && day <= 3) { icon = 'beach_access'; color = 'text-slate-300'; }
//                         else if (rowIdx === 3 && day === 8) { icon = 'schedule'; color = 'text-amber-400'; }
//                         else if (day === 2 && rowIdx === 1) { icon = 'cancel'; color = 'text-red-400'; }
//                         else if (day === 11 || day === 12) { icon = 'remove'; color = 'text-slate-400'; }
//                         else if (i === 5 || i === 6 || i === 12 || i === 13) { icon = ''; } // weekend empty
//                         return (
//                           <td key={day} className="text-center">
//                             {icon ? (
//                               <span className={`material-icons text-sm ${color}`}>{icon}</span>
//                             ) : (
//                               <span className="text-[10px] font-bold text-slate-400">-</span>
//                             )}
//                           </td>
//                         );
//                       })}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {/* Legend Footer */}
//             <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-6 text-[10px] font-bold text-slate-500 uppercase">
//               <div className="flex items-center gap-1.5"><span className="material-icons text-primary text-base">check_circle</span> Present</div>
//               <div className="flex items-center gap-1.5"><span className="material-icons text-amber-400 text-base">schedule</span> Late</div>
//               <div className="flex items-center gap-1.5"><span className="material-icons text-red-400 text-base">cancel</span> Absent</div>
//               <div className="flex items-center gap-1.5"><span className="material-icons text-slate-300 text-base">beach_access</span> Leave</div>
//             </div>
//           </div>

//           {/* Side Performance Panel */}
//           <div className="w-96 flex flex-col gap-6">
//             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-base font-bold">Staff Performance</h3>
//                 <button onClick={handleFullProfile} className="text-primary text-xs font-bold hover:underline">Full Profile</button>
//               </div>
//               <div className="flex items-center gap-4 mb-6">
//                 <img
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUYDzR_rE5pSRnghzZLsDxJGqafc8xMs8UZkPxDv8kCr6rCCCxeBDmf82teEeEldQ2B1KajRdLYSS8qkq1NeMNtTLWusU4Z5fiHAb-3R70mRwZJ-ZQ6FA-aQxcJRUG_51qXu_04y5cv6r6J8rG4ACxyo5skLfkyQrt0LPl5sjHGDKnr2cIvUbRWYCAMCI1nhxgVrEGyXIqwsJHX0qGXJ_x5BUMCSDZbVRSCyAwQAFsFlxcRLSWTfg3u6bhuxOqpV_fqsUnUJ5rfs"
//                   alt=""
//                   className="w-16 h-16 rounded-xl border-2 border-primary"
//                 />
//                 <div>
//                   <h4 className="text-lg font-bold">{selectedStaff}</h4>
//                   <p className="text-sm text-slate-500">Senior Science Faculty</p>
//                   <div className="flex items-center gap-1 mt-1">
//                     {[1, 2, 3, 4].map(i => <span key={i} className="material-icons text-amber-400 text-xs">star</span>)}
//                     <span className="material-icons text-slate-300 text-xs">star</span>
//                     <span className="text-xs font-bold ml-1">4.2</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
//                   <p className="text-xs text-slate-500 mb-1">Development Progress</p>
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-bold text-primary">High Performer</span>
//                     <span className="text-sm font-bold">88%</span>
//                   </div>
//                   <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
//                     <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <h5 className="text-sm font-bold">Admin Feedback</h5>
//                     <button onClick={handleAddNote} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 font-bold">+ Add Note</button>
//                   </div>
//                   <div className="relative pl-6 space-y-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
//                     <div className="relative">
//                       <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-900"></div>
//                       <p className="text-xs font-bold">Oct 05 - Check-in delay</p>
//                       <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Staff member reported technical issue with biometric scanner. Adjusted to 'Present'."</p>
//                     </div>
//                     <div className="relative">
//                       <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
//                       <p className="text-xs font-bold">Sep 28 - Excellence Award</p>
//                       <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Recognized for extra session support during science fair preparation."</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Performance Quick Actions */}
//             <div className="bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 shadow-lg overflow-hidden relative">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -mr-8 -mt-8 blur-2xl"></div>
//               <h3 className="text-sm font-bold mb-4 relative z-10">Quick Evaluation</h3>
//               <div className="grid grid-cols-2 gap-3 relative z-10">
//                 <button onClick={() => handleQuickAction('Incentive')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
//                   <span className="material-icons text-primary">emoji_events</span>
//                   <span className="text-[10px] font-bold">Incentive</span>
//                 </button>
//                 <button onClick={() => handleQuickAction('Warning')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
//                   <span className="material-icons text-amber-400">warning</span>
//                   <span className="text-[10px] font-bold">Warning</span>
//                 </button>
//                 <button onClick={() => handleQuickAction('Development')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
//                   <span className="material-icons text-blue-400">edit_note</span>
//                   <span className="text-[10px] font-bold">Development</span>
//                 </button>
//                 <button onClick={() => handleQuickAction('Monthly Review')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
//                   <span className="material-icons text-green-400">task_alt</span>
//                   <span className="text-[10px] font-bold">Monthly Review</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendancePerformance;

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const AttendancePerformance = () => {
  const [selectedStaff, setSelectedStaff] = useState('Dr. James Wilson');

  const staffList = [
    { name: 'Dr. James Wilson', dept: 'Sciences', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Tlb1RlMGeqIFtQXyeD-bl4ROUdF6iqxVtj_0jnwK4hMI3Y92Wmjiog6M1UCQbV3o7sbJ74PlHocObYfB8xBRvIB0J6uxiRewu4Aii7QjUQmTmrpmsNoypcWbuEL8uCiQaQjjDPDtrP3sMZp_pgCExBVGxIQTlT-NWOmQRiRozrLVG2qzuu7ePhooj0VJPAlY2Hk3C-KqL2o-hVreUK12oFuc4t0FSNhuVqdol0sbtA-n9lLnugSkm6DJ98pOQ1ScYlMd4i-tldc' },
    { name: 'Sarah Jenkins', dept: 'Mathematics', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBay5buPPgwxEu7KFTX0siFBDe_Id8I6002lIqOZa4LPQmgpoCCba7JQ-H8dthk80ViytKJK5mP-pZWP7qtiUvTRvofkjTFoBiIdiwSeDbzv7c-yhuReowGgzu2dAUe7fFFUisCXDC3VwWxzHGrP6ZpjDabLE8k4-cbLFoxZaVyOZ39mnCRHwGhOh174trc5veROi3vndW9rFoeiwQDNTI6JwlRDaP0eqw0Fa89KUr7fMTm4bGLzRhbhtRDa4jetlGPfzC6vRrNNCs' },
    { name: 'Robert Chen', dept: 'Arts', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtvK5K21bKdiiJZWgszpKFhagGRHsmpytpxO6VUJs6fNwUHODDU5waGMx9SALR9eEDAZscBc9gqwiEwAARZRIAVYxfRDAVSPA3mVojMHW6K-cPajjR6SMa_mvZemAqoBsqAUi9xbFzYpox0YgyyFEd68AK9ztyVfWCB87Q5FRhrXvbmMQjRIMYRuesDgo6vwC-NKFExzZlDvBxXYRC0KJ44Uq1BQx-XpwbRC0pJC_FiOyWKjlwhc-oYrtHbF4GCaA16-O3pZqQfIE' },
    { name: 'Linda Gray', dept: 'History', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBga45pyiflq3YHXh_DAOiTPAPRJ10ScRsXx0qzo33ALdFi7iwxuO4iui6IGiw1pZxGGAhk9WFNy6-19lU2kDa9Og6f_qepf0U20z8zYRIAVpLR6EySKEK4rYn8OoAFNCc4Gu7nrKY756pI3LpJ7AHfVhccUxLUj4CwFFuENctRvsnxQXz9HY13d3sLKErl9hdO7JkEfODjOZ30-6LqrRtmDbPYOBl6-KHV35-txpWhj0fJq_eMh1HO9ap_CWjJwKExfEddHWh1ae4' },
  ];

  const days = Array.from({ length: 15 }, (_, i) => i + 1);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

  const handleExportReport = () => toast.success('Export Report clicked (demo)');
  const handleStaffSelect = (name) => {
    setSelectedStaff(name);
    toast.success(`Selected ${name} (demo)`);
  };
  const handleFullProfile = () => toast.success('Full Profile clicked (demo)');
  const handleAddNote = () => toast.success('Add Note clicked (demo)');
  const handleQuickAction = (action) => toast.success(`${action} clicked (demo)`);

  return (
    <HrPageWrapper>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="material-icons text-sm">home</span>
          <span>/</span>
          <span>HR</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">Attendance & Performance</span>
        </div>
        <button onClick={handleExportReport} className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-slate-900 text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
          <span className="material-icons text-sm">download</span> Export Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-slate-500">Today's Attendance</span>
            <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">+2.1%</span>
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold tracking-tight">94.2%</span>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '94.2%' }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start text-slate-500">
            <span className="text-sm font-medium">Late Arrivals</span>
            <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">-5%</span>
          </div>
          <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">12</p>
          <p className="text-xs text-slate-400 mt-1">Average: 15 daily</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start text-slate-500">
            <span className="text-sm font-medium">On Leave</span>
            <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Normal</span>
          </div>
          <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">08</p>
          <p className="text-xs text-slate-400 mt-1">Planned leaves today</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start text-slate-500">
            <span className="text-sm font-medium">Top Performers</span>
            <span className="bg-primary/20 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-bold">New High</span>
          </div>
          <p className="text-2xl font-bold tracking-tight mt-2 text-slate-900 dark:text-slate-100">24</p>
          <p className="text-xs text-slate-400 mt-1">Met attendance targets</p>
        </div>
      </div>

      {/* Monthly Attendance Grid & Performance Panel */}
      <div className="flex gap-8">
        {/* Main Grid Container */}
        <div className="flex-1 min-w-0 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <h2 className="text-lg font-bold">Attendance Grid - October 2023</h2>
            <div className="flex gap-2">
              <select onChange={(e) => toast.success(`Filter changed to ${e.target.value} (demo)`)} className="text-xs border-slate-200 rounded-lg py-1 px-3 dark:bg-slate-900">
                <option>Academic Staff</option>
                <option>Administrative Staff</option>
                <option>Maintenance</option>
              </select>
              <button onClick={() => toast.success('Previous month clicked (demo)')} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <span className="material-icons text-lg">chevron_left</span>
              </button>
              <button onClick={() => toast.success('Next month clicked (demo)')} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <span className="material-icons text-lg">chevron_right</span>
              </button>
            </div>
          </div>
          {/* Grid Body */}
          <div className="overflow-x-auto relative">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="sticky left-0 px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-slate-800 min-w-[200px]">Staff Member</th>
                  {days.map((day, i) => (
                    <th key={day} className={`px-3 py-4 text-[10px] font-bold text-center text-slate-400 border-x border-slate-100 dark:border-slate-800 w-10 ${i >= 5 && i < 7 ? 'bg-slate-50 dark:bg-slate-800/50' : ''} ${day === 10 ? 'ring-2 ring-primary ring-inset bg-primary/5' : ''}`}>
                      {day}<br /><span className="font-normal opacity-50">{dayNames[i]}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffList.map((staff, rowIdx) => (
                  <tr key={staff.name} onClick={() => handleStaffSelect(staff.name)} className={`border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 cursor-pointer ${selectedStaff === staff.name ? 'bg-primary/5' : ''}`}>
                    <td className="sticky left-0 px-6 py-4 bg-inherit">
                      <div className="flex items-center gap-3">
                        <img src={staff.avatar} alt="" className="w-8 h-8 rounded-lg shadow-sm" />
                        <div>
                          <p className="text-sm font-bold">{staff.name}</p>
                          <p className="text-[10px] text-slate-500">Dept: {staff.dept}</p>
                        </div>
                      </div>
                    </td>
                    {days.map((day, i) => {
                      let icon = 'check_circle';
                      let color = 'text-primary';
                      if (rowIdx === 0 && day === 4) { icon = 'schedule'; color = 'text-amber-400'; }
                      else if (rowIdx === 1 && day === 2) { icon = 'cancel'; color = 'text-red-400'; }
                      else if (rowIdx === 2 && day <= 3) { icon = 'beach_access'; color = 'text-slate-300'; }
                      else if (rowIdx === 3 && day === 8) { icon = 'schedule'; color = 'text-amber-400'; }
                      else if (day === 2 && rowIdx === 1) { icon = 'cancel'; color = 'text-red-400'; }
                      else if (day === 11 || day === 12) { icon = 'remove'; color = 'text-slate-400'; }
                      else if (i === 5 || i === 6 || i === 12 || i === 13) { icon = ''; } // weekend empty
                      return (
                        <td key={day} className="text-center">
                          {icon ? <span className={`material-icons text-sm ${color}`}>{icon}</span> : <span className="text-[10px] font-bold text-slate-400">-</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Legend Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-6 text-[10px] font-bold text-slate-500 uppercase">
            <div className="flex items-center gap-1.5"><span className="material-icons text-primary text-base">check_circle</span> Present</div>
            <div className="flex items-center gap-1.5"><span className="material-icons text-amber-400 text-base">schedule</span> Late</div>
            <div className="flex items-center gap-1.5"><span className="material-icons text-red-400 text-base">cancel</span> Absent</div>
            <div className="flex items-center gap-1.5"><span className="material-icons text-slate-300 text-base">beach_access</span> Leave</div>
          </div>
        </div>

        {/* Side Performance Panel */}
        <div className="w-96 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold">Staff Performance</h3>
              <button onClick={handleFullProfile} className="text-primary text-xs font-bold hover:underline">Full Profile</button>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUYDzR_rE5pSRnghzZLsDxJGqafc8xMs8UZkPxDv8kCr6rCCCxeBDmf82teEeEldQ2B1KajRdLYSS8qkq1NeMNtTLWusU4Z5fiHAb-3R70mRwZJ-ZQ6FA-aQxcJRUG_51qXu_04y5cv6r6J8rG4ACxyo5skLfkyQrt0LPl5sjHGDKnr2cIvUbRWYCAMCI1nhxgVrEGyXIqwsJHX0qGXJ_x5BUMCSDZbVRSCyAwQAFsFlxcRLSWTfg3u6bhuxOqpV_fqsUnUJ5rfs" alt="" className="w-16 h-16 rounded-xl border-2 border-primary" />
              <div>
                <h4 className="text-lg font-bold">{selectedStaff}</h4>
                <p className="text-sm text-slate-500">Senior Science Faculty</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4].map(i => <span key={i} className="material-icons text-amber-400 text-xs">star</span>)}
                  <span className="material-icons text-slate-300 text-xs">star</span>
                  <span className="text-xs font-bold ml-1">4.2</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Development Progress</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-primary">High Performer</span>
                  <span className="text-sm font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-bold">Admin Feedback</h5>
                  <button onClick={handleAddNote} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 font-bold">+ Add Note</button>
                </div>
                <div className="relative pl-6 space-y-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-900"></div>
                    <p className="text-xs font-bold">Oct 05 - Check-in delay</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Staff member reported technical issue with biometric scanner. Adjusted to 'Present'."</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
                    <p className="text-xs font-bold">Sep 28 - Excellence Award</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1 italic">"Recognized for extra session support during science fair preparation."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Quick Actions */}
          <div className="bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full -mr-8 -mt-8 blur-2xl"></div>
            <h3 className="text-sm font-bold mb-4 relative z-10">Quick Evaluation</h3>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <button onClick={() => handleQuickAction('Incentive')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
                <span className="material-icons text-primary">emoji_events</span>
                <span className="text-[10px] font-bold">Incentive</span>
              </button>
              <button onClick={() => handleQuickAction('Warning')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
                <span className="material-icons text-amber-400">warning</span>
                <span className="text-[10px] font-bold">Warning</span>
              </button>
              <button onClick={() => handleQuickAction('Development')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
                <span className="material-icons text-blue-400">edit_note</span>
                <span className="text-[10px] font-bold">Development</span>
              </button>
              <button onClick={() => handleQuickAction('Monthly Review')} className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-all">
                <span className="material-icons text-green-400">task_alt</span>
                <span className="text-[10px] font-bold">Monthly Review</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HrPageWrapper>
  );
};

export default AttendancePerformance;