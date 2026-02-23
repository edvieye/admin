// // import React from 'react';
// // import AccountantLayout from '../components/AccountantLayout';

// // const AccountantDashboard = () => {
// //   // Mock data
// //   const stats = {
// //     totalCollected: 482500,
// //     pendingFees: 64210,
// //     overdueAmount: 12400,
// //     overdueStudents: 42,
// //   };

// //   const duePayments = [
// //     { initials: 'JS', name: 'James Smith', class: 'Grade 10-A', dueDate: 'Dec 28, 2023', amount: 1250, status: 'Pending', color: 'bg-amber-100 text-amber-700' },
// //     { initials: 'EM', name: 'Emily Murphy', class: 'Grade 8-C', dueDate: 'Dec 24, 2023', amount: 980, status: 'Overdue', color: 'bg-red-100 text-red-700' },
// //     { initials: 'AL', name: 'Alex Lee', class: 'Grade 12-B', dueDate: 'Jan 02, 2024', amount: 1400, status: 'Upcoming', color: 'bg-primary/10 text-primary' },
// //   ];

// //   return (
// //     <AccountantLayout>
// //       {/* KPI Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
// //               <span className="material-icons text-green-600">account_balance_wallet</span>
// //             </div>
// //             <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">+12.5%</span>
// //           </div>
// //           <p className="text-slate-500 text-sm">Total Collected</p>
// //           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
// //             ${stats.totalCollected.toLocaleString()}.00
// //           </h3>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-2 bg-primary/10 rounded-lg">
// //               <span className="material-icons text-primary">pending_actions</span>
// //             </div>
// //           </div>
// //           <p className="text-slate-500 text-sm">Pending Fees</p>
// //           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
// //             ${stats.pendingFees.toLocaleString()}.00
// //           </h3>
// //         </div>
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
// //           <div className="flex justify-between items-start mb-4">
// //             <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
// //               <span className="material-icons text-red-600">report_problem</span>
// //             </div>
// //             <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold">{stats.overdueStudents} Students</span>
// //           </div>
// //           <p className="text-slate-500 text-sm">Overdue Amount</p>
// //           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
// //             ${stats.overdueAmount.toLocaleString()}.00
// //           </h3>
// //         </div>
// //       </div>

// //       {/* Dashboard Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Fee Collection Chart */}
// //         <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
// //           <div className="flex items-center justify-between mb-8">
// //             <div>
// //               <h3 className="font-bold text-lg">Fee Collection Trend</h3>
// //               <p className="text-xs text-slate-400">Monthly revenue overview</p>
// //             </div>
// //             <div className="flex gap-2">
// //               <button className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Monthly</button>
// //               <button className="text-xs px-3 py-1 text-slate-400 rounded-full font-medium hover:bg-slate-100">Term-wise</button>
// //             </div>
// //           </div>
// //           <div className="relative h-64 w-full">
// //             {/* Mock Chart Bars */}
// //             <div className="absolute inset-0 flex items-end gap-4 px-2">
// //               <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg h-[40%]" title="Sep"></div>
// //               <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg h-[65%]" title="Oct"></div>
// //               <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg h-[80%]" title="Nov"></div>
// //               <div className="flex-1 bg-primary hover:bg-primary transition-colors rounded-t-lg h-[55%]" title="Dec"></div>
// //               <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg h-[70%]" title="Jan"></div>
// //               <div className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg h-[90%]" title="Feb"></div>
// //             </div>
// //             <div className="absolute bottom-[-24px] w-full flex justify-between text-[10px] text-slate-400">
// //               <span className="flex-1 text-center">SEP</span>
// //               <span className="flex-1 text-center">OCT</span>
// //               <span className="flex-1 text-center">NOV</span>
// //               <span className="flex-1 text-center font-bold text-primary">DEC</span>
// //               <span className="flex-1 text-center">JAN</span>
// //               <span className="flex-1 text-center">FEB</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Payment Distribution */}
// //         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col justify-between">
// //           <div>
// //             <h3 className="font-bold text-lg mb-4">Payment Distribution</h3>
// //             <div className="space-y-4">
// //               <div>
// //                 <div className="flex justify-between text-xs mb-1">
// //                   <span className="text-slate-500">Bank Transfer</span>
// //                   <span className="font-semibold">65%</span>
// //                 </div>
// //                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
// //                   <div className="bg-primary h-full w-[65%]"></div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <div className="flex justify-between text-xs mb-1">
// //                   <span className="text-slate-500">Credit Card</span>
// //                   <span className="font-semibold">25%</span>
// //                 </div>
// //                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
// //                   <div className="bg-blue-400 h-full w-[25%]"></div>
// //                 </div>
// //               </div>
// //               <div>
// //                 <div className="flex justify-between text-xs mb-1">
// //                   <span className="text-slate-500">Cash / Others</span>
// //                   <span className="font-semibold">10%</span>
// //                 </div>
// //                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
// //                   <div className="bg-slate-300 dark:bg-slate-600 h-full w-[10%]"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
// //             <div className="flex items-center gap-2 mb-2">
// //               <span className="material-icons text-primary text-lg">info</span>
// //               <span className="text-xs font-bold text-primary uppercase tracking-wider">Quick Note</span>
// //             </div>
// //             <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
// //               Next batch of automated fee reminders is scheduled for Jan 5th, 2024.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Upcoming Due Dates Table */}
// //       <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
// //         <div className="p-6 border-b border-primary/5 flex items-center justify-between">
// //           <div>
// //             <h3 className="font-bold text-lg">Upcoming Due Dates</h3>
// //             <p className="text-xs text-slate-400">Manage pending student payments</p>
// //           </div>
// //           <div className="relative">
// //             <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
// //             <input
// //               className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-64 transition-all"
// //               placeholder="Search student..."
// //               type="text"
// //             />
// //           </div>
// //         </div>
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left">
// //             <thead className="bg-slate-50 dark:bg-slate-800/50">
// //               <tr>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Name</th>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Class</th>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
// //                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-primary/5">
// //               {duePayments.map((payment, idx) => (
// //                 <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
// //                         payment.initials === 'JS' ? 'bg-primary/10 text-primary' :
// //                         payment.initials === 'EM' ? 'bg-blue-100 text-blue-600' :
// //                         'bg-indigo-100 text-indigo-600'
// //                       }`}>
// //                         {payment.initials}
// //                       </div>
// //                       <span className="text-sm font-medium">{payment.name}</span>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{payment.class}</td>
// //                   <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{payment.dueDate}</td>
// //                   <td className="px-6 py-4 text-sm font-semibold">${payment.amount.toFixed(2)}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`px-2 py-1 rounded text-[10px] font-bold ${payment.color} uppercase`}>
// //                       {payment.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-2">
// //                       <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors" title="Send Reminder">
// //                         <span className="material-icons text-sm">notifications</span>
// //                       </button>
// //                       <button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors" title="View Details">
// //                         <span className="material-icons text-sm">visibility</span>
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-primary/5">
// //           <span className="text-xs text-slate-500">Showing 3 of 42 records</span>
// //           <div className="flex gap-2">
// //             <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all disabled:opacity-50" disabled>Previous</button>
// //             <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all">Next</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Feedback Toast */}
// //       <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce hover:animate-none cursor-pointer">
// //         <div className="bg-green-500 rounded-full p-1">
// //           <span className="material-icons text-sm">check</span>
// //         </div>
// //         <div className="flex flex-col">
// //           <span className="text-sm font-bold">System Ready</span>
// //           <span className="text-xs text-slate-400">Invoice generation module active</span>
// //         </div>
// //         <button className="ml-4 text-slate-500 hover:text-white">
// //           <span className="material-icons text-sm">close</span>
// //         </button>
// //       </div>
// //     </AccountantLayout>
// //   );
// // };

// // export default AccountantDashboard;


// // src/features/accountant/pages/Dashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AccountantDashboard = () => {
//   const duePayments = [
//     { name: 'James Smith', initials: 'JS', class: 'Grade 10-A', dueDate: 'Dec 28, 2023', amount: 1250, status: 'Pending' },
//     { name: 'Emily Murphy', initials: 'EM', class: 'Grade 8-C', dueDate: 'Dec 24, 2023', amount: 980, status: 'Overdue' },
//     { name: 'Alex Lee', initials: 'AL', class: 'Grade 12-B', dueDate: 'Jan 02, 2024', amount: 1400, status: 'Upcoming' },
//   ];

//   const statusColors = {
//     Pending: 'bg-amber-100 text-amber-700',
//     Overdue: 'bg-red-100 text-red-700',
//     Upcoming: 'bg-primary/10 text-primary',
//   };

//   return (
//     <>
//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
//           <div className="flex justify-between items-start mb-4">
//             <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
//               <span className="material-icons text-green-600">account_balance_wallet</span>
//             </div>
//             <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">+12.5%</span>
//           </div>
//           <p className="text-slate-500 text-sm">Total Collected</p>
//           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$482,500.00</h3>
//         </div>
//         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
//           <div className="flex justify-between items-start mb-4">
//             <div className="p-2 bg-primary/10 rounded-lg">
//               <span className="material-icons text-primary">pending_actions</span>
//             </div>
//           </div>
//           <p className="text-slate-500 text-sm">Pending Fees</p>
//           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$64,210.00</h3>
//         </div>
//         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
//           <div className="flex justify-between items-start mb-4">
//             <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
//               <span className="material-icons text-red-600">report_problem</span>
//             </div>
//             <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold">42 Students</span>
//           </div>
//           <p className="text-slate-500 text-sm">Overdue Amount</p>
//           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$12,400.00</h3>
//         </div>
//       </div>

//       {/* Chart and Distribution */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//         {/* Fee Collection Chart */}
//         <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h3 className="font-bold text-lg">Fee Collection Trend</h3>
//               <p className="text-xs text-slate-400">Monthly revenue overview</p>
//             </div>
//             <div className="flex gap-2">
//               <button className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Monthly</button>
//               <button className="text-xs px-3 py-1 text-slate-400 rounded-full font-medium hover:bg-slate-100">Term-wise</button>
//             </div>
//           </div>
//           <div className="relative h-64 w-full">
//             <div className="absolute inset-0 flex items-end gap-4 px-2">
//               {[40, 65, 80, 55, 70, 90].map((h, i) => (
//                 <div
//                   key={i}
//                   className={`flex-1 rounded-t-lg ${
//                     i === 3 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary'
//                   } transition-colors`}
//                   style={{ height: `${h}%` }}
//                 />
//               ))}
//             </div>
//             <div className="absolute bottom-[-24px] w-full flex justify-between text-[10px] text-slate-400">
//               <span className="flex-1 text-center">SEP</span>
//               <span className="flex-1 text-center">OCT</span>
//               <span className="flex-1 text-center">NOV</span>
//               <span className="flex-1 text-center font-bold text-primary">DEC</span>
//               <span className="flex-1 text-center">JAN</span>
//               <span className="flex-1 text-center">FEB</span>
//             </div>
//           </div>
//         </div>

//         {/* Payment Distribution */}
//         <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col justify-between">
//           <div>
//             <h3 className="font-bold text-lg mb-4">Payment Distribution</h3>
//             <div className="space-y-4">
//               <div>
//                 <div className="flex justify-between text-xs mb-1">
//                   <span className="text-slate-500">Bank Transfer</span>
//                   <span className="font-semibold">65%</span>
//                 </div>
//                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-primary h-full w-[65%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between text-xs mb-1">
//                   <span className="text-slate-500">Credit Card</span>
//                   <span className="font-semibold">25%</span>
//                 </div>
//                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-blue-400 h-full w-[25%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between text-xs mb-1">
//                   <span className="text-slate-500">Cash / Others</span>
//                   <span className="font-semibold">10%</span>
//                 </div>
//                 <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
//                   <div className="bg-slate-300 dark:bg-slate-600 h-full w-[10%]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="material-icons text-primary text-lg">info</span>
//               <span className="text-xs font-bold text-primary uppercase tracking-wider">Quick Note</span>
//             </div>
//             <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
//               Next batch of automated fee reminders is scheduled for Jan 5th, 2024.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Upcoming Due Dates Table */}
//       <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
//         <div className="p-6 border-b border-primary/5 flex items-center justify-between">
//           <div>
//             <h3 className="font-bold text-lg">Upcoming Due Dates</h3>
//             <p className="text-xs text-slate-400">Manage pending student payments</p>
//           </div>
//           <div className="relative">
//             <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
//             <input
//               className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-64 transition-all"
//               placeholder="Search student..."
//             />
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead className="bg-slate-50 dark:bg-slate-800/50">
//               <tr>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Name</th>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Class</th>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-primary/5">
//               {duePayments.map((item, idx) => (
//                 <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-8 h-8 rounded-full bg-${item.initials === 'JS' ? 'primary/10 text-primary' : 'blue-100 text-blue-600'} flex items-center justify-center font-bold text-xs`}>
//                         {item.initials}
//                       </div>
//                       <span className="text-sm font-medium">{item.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.class}</td>
//                   <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.dueDate}</td>
//                   <td className="px-6 py-4 text-sm font-semibold">${item.amount.toFixed(2)}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${statusColors[item.status]}`}>
//                       {item.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors" title="Send Reminder">
//                         <span className="material-icons text-sm">notifications</span>
//                       </button>
//                       <button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors" title="View Details">
//                         <span className="material-icons text-sm">visibility</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-primary/5">
//           <span className="text-xs text-slate-500">Showing 3 of 42 records</span>
//           <div className="flex gap-2">
//             <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all disabled:opacity-50" disabled>Previous</button>
//             <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all">Next</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AccountantDashboard;


import React from 'react';
import AccountantSidebar from '../components/AccountantSidebar';

const AccountantDashboard = () => {
  const duePayments = [
    { name: 'James Smith', initials: 'JS', class: 'Grade 10-A', dueDate: 'Dec 28, 2023', amount: 1250, status: 'Pending' },
    { name: 'Emily Murphy', initials: 'EM', class: 'Grade 8-C', dueDate: 'Dec 24, 2023', amount: 980, status: 'Overdue' },
    { name: 'Alex Lee', initials: 'AL', class: 'Grade 12-B', dueDate: 'Jan 02, 2024', amount: 1400, status: 'Upcoming' },
  ];

  const statusColors = {
    Pending: 'bg-amber-100 text-amber-700',
    Overdue: 'bg-red-100 text-red-700',
    Upcoming: 'bg-primary/10 text-primary',
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <span className="material-icons text-green-600">account_balance_wallet</span>
              </div>
              <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">+12.5%</span>
            </div>
            <p className="text-slate-500 text-sm">Total Collected</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$482,500.00</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-icons text-primary">pending_actions</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm">Pending Fees</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$64,210.00</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <span className="material-icons text-red-600">report_problem</span>
              </div>
              <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold">42 Students</span>
            </div>
            <p className="text-slate-500 text-sm">Overdue Amount</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$12,400.00</h3>
          </div>
        </div>

        {/* Chart and Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Fee Collection Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-lg">Fee Collection Trend</h3>
                <p className="text-xs text-slate-400">Monthly revenue overview</p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Monthly</button>
                <button className="text-xs px-3 py-1 text-slate-400 rounded-full font-medium hover:bg-slate-100">Term-wise</button>
              </div>
            </div>
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 flex items-end gap-4 px-2">
                {[40, 65, 80, 55, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-lg ${
                      i === 3 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary'
                    } transition-colors`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="absolute bottom-[-24px] w-full flex justify-between text-[10px] text-slate-400">
                <span className="flex-1 text-center">SEP</span>
                <span className="flex-1 text-center">OCT</span>
                <span className="flex-1 text-center">NOV</span>
                <span className="flex-1 text-center font-bold text-primary">DEC</span>
                <span className="flex-1 text-center">JAN</span>
                <span className="flex-1 text-center">FEB</span>
              </div>
            </div>
          </div>

          {/* Payment Distribution */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-4">Payment Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Bank Transfer</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Credit Card</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[25%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Cash / Others</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-slate-300 dark:bg-slate-600 h-full w-[10%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-primary text-lg">info</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Quick Note</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Next batch of automated fee reminders is scheduled for Jan 5th, 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Due Dates Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-primary/5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Upcoming Due Dates</h3>
              <p className="text-xs text-slate-400">Manage pending student payments</p>
            </div>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary w-64 transition-all"
                placeholder="Search student..."
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Class</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {duePayments.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${idx === 0 ? 'bg-primary/10 text-primary' : 'bg-blue-100 text-blue-600'} flex items-center justify-center font-bold text-xs`}>
                          {item.initials}
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.class}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{item.dueDate}</td>
                    <td className="px-6 py-4 text-sm font-semibold">${item.amount.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors" title="Send Reminder">
                          <span className="material-icons text-sm">notifications</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors" title="View Details">
                          <span className="material-icons text-sm">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-primary/5">
            <span className="text-xs text-slate-500">Showing 3 of 42 records</span>
            <div className="flex gap-2">
              <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all disabled:opacity-50" disabled>Previous</button>
              <button className="p-1 px-2 text-xs border border-slate-200 rounded hover:bg-white transition-all">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountantDashboard;