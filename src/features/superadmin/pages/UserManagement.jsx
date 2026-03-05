// // import React, { useState } from 'react';
// // import SuperAdminLayout from '../components/SuperAdminLayout';
// // import toast from 'react-hot-toast';
// // import Papa from 'papaparse';
// // import jsPDF from 'jspdf';
// // import autoTable from 'jspdf-autotable';

// // const UserManagement = () => {
// //   const [search, setSearch] = useState('');
// //   const [filterRole, setFilterRole] = useState('All');
// //   const [filterStatus, setFilterStatus] = useState('All');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 5;

// //   // Mock data – replace with API later
// //   const [users, setUsers] = useState([
// //     { id: 'u1', name: 'Dr. Sarah Smith', email: 'sarah@beacon.edu', role: 'School Admin', school: 'Beacon Heights Academy', status: 'Active' },
// //     { id: 'u2', name: 'John Doe', email: 'john@riverdale.edu', role: 'Accountant', school: 'Riverdale Secondary', status: 'Active' },
// //     { id: 'u3', name: 'Emily Davis', email: 'emily@westside.edu', role: 'Staff', school: 'Westside Primary', status: 'Pending' },
// //     { id: 'u4', name: 'Michael Brown', email: 'michael@northhill.edu', role: 'School Admin', school: 'North Hill International', status: 'Suspended' },
// //     { id: 'u5', name: 'Jane Wilson', email: 'jane@oakridge.edu', role: 'HR', school: 'Oakridge International', status: 'Active' },
// //   ]);

// //   // Invitations mock
// //   const [invitations, setInvitations] = useState([
// //     { id: 'i1', email: 'newadmin@school.edu', role: 'School Admin', school: 'Beacon Heights Academy', status: 'Pending' },
// //   ]);

// //   const [showInviteModal, setShowInviteModal] = useState(false);
// //   const [newInvite, setNewInvite] = useState({ email: '', role: '', school: '' });

// //   // Filter logic
// //   const filteredUsers = users.filter(u => {
// //     const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
// //     const matchesRole = filterRole === 'All' || u.role === filterRole;
// //     const matchesStatus = filterStatus === 'All' || u.status === filterStatus;
// //     return matchesSearch && matchesRole && matchesStatus;
// //   });

// //   const indexOfLast = currentPage * itemsPerPage;
// //   const indexOfFirst = indexOfLast - itemsPerPage;
// //   const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
// //   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

// //   const handleSuspend = (id) => {
// //     setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
// //     toast.success('User status toggled');
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure?')) {
// //       setUsers(users.filter(u => u.id !== id));
// //       toast.success('User deleted');
// //     }
// //   };

// //   const handleResetPassword = (id) => {
// //     toast.success('Password reset email sent');
// //   };

// //   const handleSendInvite = (e) => {
// //     e.preventDefault();
// //     setInvitations([...invitations, { id: `i${Date.now()}`, ...newInvite, status: 'Pending' }]);
// //     setShowInviteModal(false);
// //     setNewInvite({ email: '', role: '', school: '' });
// //     toast.success('Invitation sent');
// //   };

// //   const handleResendInvite = (id) => {
// //     toast.success('Invitation resent');
// //   };

// //   const handleCancelInvite = (id) => {
// //     setInvitations(invitations.filter(i => i.id !== id));
// //     toast.success('Invitation cancelled');
// //   };

// //   const handleExportCSV = () => {
// //     const csv = Papa.unparse(users);
// //     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
// //     const link = document.createElement('a');
// //     link.href = URL.createObjectURL(blob);
// //     link.download = 'users.csv';
// //     link.click();
// //     toast.success('CSV exported');
// //   };

// //   const handleExportPDF = () => {
// //     const doc = new jsPDF();
// //     doc.text('User Management Report', 14, 15);
// //     autoTable(doc, {
// //       head: [['Name', 'Email', 'Role', 'School', 'Status']],
// //       body: users.map(u => [u.name, u.email, u.role, u.school, u.status]),
// //     });
// //     doc.save('users.pdf');
// //     toast.success('PDF exported');
// //   };

// //   return (
// //     <SuperAdminLayout pageTitle="User Management" pageDescription="Manage all users and invitations">
// //       {/* Filters & Add Buttons */}
// //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 mb-6">
// //         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
// //           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
// //             <div className="relative flex-1 min-w-[200px]">
// //               <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
// //               <input
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
// //                 placeholder="Search users..."
// //               />
// //             </div>
// //             <select
// //               value={filterRole}
// //               onChange={(e) => setFilterRole(e.target.value)}
// //               className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
// //             >
// //               <option value="All">All Roles</option>
// //               <option value="School Admin">School Admin</option>
// //               <option value="Accountant">Accountant</option>
// //               <option value="HR">HR</option>
// //               <option value="Staff">Staff</option>
// //             </select>
// //             <select
// //               value={filterStatus}
// //               onChange={(e) => setFilterStatus(e.target.value)}
// //               className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
// //             >
// //               <option value="All">All Status</option>
// //               <option value="Active">Active</option>
// //               <option value="Pending">Pending</option>
// //               <option value="Suspended">Suspended</option>
// //             </select>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <button
// //               onClick={() => setShowInviteModal(true)}
// //               className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
// //             >
// //               <span className="material-icons text-sm">mail</span>
// //               Send Invite
// //             </button>
// //             <button
// //               onClick={handleExportCSV}
// //               className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary"
// //               title="CSV"
// //             >
// //               <span className="material-icons text-sm">table_view</span>
// //             </button>
// //             <button
// //               onClick={handleExportPDF}
// //               className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary"
// //               title="PDF"
// //             >
// //               <span className="material-icons text-sm">picture_as_pdf</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Users Table */}
// //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left">
// //             <thead>
// //               <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
// //                 <th className="px-6 py-4">Name</th>
// //                 <th className="px-6 py-4">Email</th>
// //                 <th className="px-6 py-4">Role</th>
// //                 <th className="px-6 py-4">School</th>
// //                 <th className="px-6 py-4">Status</th>
// //                 <th className="px-6 py-4 text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
// //               {currentUsers.map((user) => (
// //                 <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
// //                   <td className="px-6 py-4 font-medium">{user.name}</td>
// //                   <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{user.email}</td>
// //                   <td className="px-6 py-4">{user.role}</td>
// //                   <td className="px-6 py-4">{user.school}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`px-2 py-1 rounded-full text-xs font-bold ${
// //                       user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
// //                       user.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
// //                       'bg-rose-100 text-rose-700'
// //                     }`}>
// //                       {user.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-right space-x-2">
// //                     <button
// //                       onClick={() => handleResetPassword(user.id)}
// //                       className="text-slate-400 hover:text-primary transition-colors"
// //                       title="Reset Password"
// //                     >
// //                       <span className="material-icons text-sm">vpn_key</span>
// //                     </button>
// //                     <button
// //                       onClick={() => handleSuspend(user.id)}
// //                       className="text-slate-400 hover:text-amber-600 transition-colors"
// //                       title="Toggle Suspend"
// //                     >
// //                       <span className="material-icons text-sm">block</span>
// //                     </button>
// //                     <button
// //                       onClick={() => handleDelete(user.id)}
// //                       className="text-slate-400 hover:text-red-600 transition-colors"
// //                       title="Delete"
// //                     >
// //                       <span className="material-icons text-sm">delete</span>
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         {/* Pagination */}
// //         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
// //           <p className="text-sm text-slate-500">
// //             Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredUsers.length)} of {filteredUsers.length} users
// //           </p>
// //           <div className="flex gap-2">
// //             <button
// //               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
// //               disabled={currentPage === 1}
// //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50"
// //             >
// //               Previous
// //             </button>
// //             {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// //               <button
// //                 key={page}
// //                 onClick={() => setCurrentPage(page)}
// //                 className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
// //                   currentPage === page
// //                     ? 'bg-primary text-white'
// //                     : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
// //                 }`}
// //               >
// //                 {page}
// //               </button>
// //             ))}
// //             <button
// //               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
// //               disabled={currentPage === totalPages}
// //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50"
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Invitations Section */}
// //       {invitations.length > 0 && (
// //         <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-6">
// //           <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
// //             <h3 className="font-bold">Pending Invitations</h3>
// //           </div>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left">
// //               <thead>
// //                 <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
// //                   <th className="px-6 py-4">Email</th>
// //                   <th className="px-6 py-4">Role</th>
// //                   <th className="px-6 py-4">School</th>
// //                   <th className="px-6 py-4">Status</th>
// //                   <th className="px-6 py-4 text-right">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {invitations.map(inv => (
// //                   <tr key={inv.id}>
// //                     <td className="px-6 py-4">{inv.email}</td>
// //                     <td className="px-6 py-4">{inv.role}</td>
// //                     <td className="px-6 py-4">{inv.school}</td>
// //                     <td className="px-6 py-4">
// //                       <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
// //                         {inv.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-right space-x-2">
// //                       <button onClick={() => handleResendInvite(inv.id)} className="text-primary hover:underline text-xs">Resend</button>
// //                       <button onClick={() => handleCancelInvite(inv.id)} className="text-red-600 hover:underline text-xs">Cancel</button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       )}

// //       {/* Invite Modal */}
// //       {showInviteModal && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
// //           <div className="bg-white dark:bg-slate-900 rounded-lg max-w-md w-full p-6">
// //             <h3 className="text-lg font-bold mb-4">Send Invitation</h3>
// //             <form onSubmit={handleSendInvite}>
// //               <div className="space-y-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
// //                   <input
// //                     type="email"
// //                     required
// //                     value={newInvite.email}
// //                     onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
// //                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
// //                   <select
// //                     required
// //                     value={newInvite.role}
// //                     onChange={(e) => setNewInvite({ ...newInvite, role: e.target.value })}
// //                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
// //                   >
// //                     <option value="">Select role</option>
// //                     <option value="School Admin">School Admin</option>
// //                     <option value="Accountant">Accountant</option>
// //                     <option value="HR">HR</option>
// //                     <option value="Staff">Staff</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School</label>
// //                   <select
// //                     required
// //                     value={newInvite.school}
// //                     onChange={(e) => setNewInvite({ ...newInvite, school: e.target.value })}
// //                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
// //                   >
// //                     <option value="">Select school</option>
// //                     <option value="Beacon Heights Academy">Beacon Heights Academy</option>
// //                     <option value="Riverdale Secondary">Riverdale Secondary</option>
// //                     <option value="Westside Primary">Westside Primary</option>
// //                   </select>
// //                 </div>
// //               </div>
// //               <div className="flex justify-end gap-3 mt-6">
// //                 <button type="button" onClick={() => setShowInviteModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium">Cancel</button>
// //                 <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Send</button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </SuperAdminLayout>
// //   );
// // };

// // export default UserManagement;


// import React, { useState } from 'react';
// import SuperAdminLayout from '../components/SuperAdminLayout';
// import toast from 'react-hot-toast';
// import Papa from 'papaparse';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const UserManagement = () => {
//   const [search, setSearch] = useState('');
//   const [filterRole, setFilterRole] = useState('All');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [actionMenu, setActionMenu] = useState(null);
//   const itemsPerPage = 5;

//   // Mock data
//   const [users, setUsers] = useState([
//     { id: 'u1', name: 'Dr. Sarah Smith', email: 'sarah@beacon.edu', role: 'School Admin', school: 'Beacon Heights Academy', status: 'Active' },
//     { id: 'u2', name: 'John Doe', email: 'john@riverdale.edu', role: 'Accountant', school: 'Riverdale Secondary', status: 'Active' },
//     { id: 'u3', name: 'Emily Davis', email: 'emily@westside.edu', role: 'Staff', school: 'Westside Primary', status: 'Pending' },
//     { id: 'u4', name: 'Michael Brown', email: 'michael@northhill.edu', role: 'School Admin', school: 'North Hill International', status: 'Suspended' },
//     { id: 'u5', name: 'Jane Wilson', email: 'jane@oakridge.edu', role: 'HR', school: 'Oakridge International', status: 'Active' },
//   ]);

//   const [invitations, setInvitations] = useState([
//     { id: 'i1', email: 'newadmin@school.edu', role: 'School Admin', school: 'Beacon Heights Academy', status: 'Pending' },
//   ]);

//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [newInvite, setNewInvite] = useState({ email: '', role: '', school: '' });

//   const filteredUsers = users.filter(u => {
//     const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
//     const matchesRole = filterRole === 'All' || u.role === filterRole;
//     const matchesStatus = filterStatus === 'All' || u.status === filterStatus;
//     return matchesSearch && matchesRole && matchesStatus;
//   });

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

//   const handleSuspend = (id) => {
//     setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
//     toast.success('User status toggled');
//     setActionMenu(null);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure?')) {
//       setUsers(users.filter(u => u.id !== id));
//       toast.success('User deleted');
//       setActionMenu(null);
//     }
//   };

//   const handleResetPassword = (id) => {
//     toast.success('Password reset email sent');
//     setActionMenu(null);
//   };

//   const handleSendInvite = (e) => {
//     e.preventDefault();
//     setInvitations([...invitations, { id: `i${Date.now()}`, ...newInvite, status: 'Pending' }]);
//     setShowInviteModal(false);
//     setNewInvite({ email: '', role: '', school: '' });
//     toast.success('Invitation sent');
//   };

//   const handleResendInvite = (id) => {
//     toast.success('Invitation resent');
//   };

//   const handleCancelInvite = (id) => {
//     setInvitations(invitations.filter(i => i.id !== id));
//     toast.success('Invitation cancelled');
//   };

//   const handleExportCSV = () => {
//     const csv = Papa.unparse(users);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'users.csv';
//     link.click();
//     toast.success('CSV exported');
//   };

//   const handleExportPDF = () => {
//     const doc = new jsPDF();
//     doc.text('User Management Report', 14, 15);
//     autoTable(doc, {
//       head: [['Name', 'Email', 'Role', 'School', 'Status']],
//       body: users.map(u => [u.name, u.email, u.role, u.school, u.status]),
//     });
//     doc.save('users.pdf');
//     toast.success('PDF exported');
//   };

//   const statusColors = {
//     Active: 'bg-emerald-100 text-emerald-700',
//     Pending: 'bg-amber-100 text-amber-700',
//     Suspended: 'bg-rose-100 text-rose-700',
//   };

//   return (
//     <SuperAdminLayout pageTitle="User Management" pageDescription="Manage all users and invitations">
//       {/* Filters & Actions */}
//       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 mb-6">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
//             <div className="relative flex-1 min-w-[200px]">
//               <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="Search users..."
//               />
//             </div>
//             <select
//               value={filterRole}
//               onChange={(e) => setFilterRole(e.target.value)}
//               className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
//             >
//               <option value="All">All Roles</option>
//               <option value="School Admin">School Admin</option>
//               <option value="Accountant">Accountant</option>
//               <option value="HR">HR</option>
//               <option value="Staff">Staff</option>
//             </select>
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
//             >
//               <option value="All">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Pending">Pending</option>
//               <option value="Suspended">Suspended</option>
//             </select>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setShowInviteModal(true)}
//               className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
//             >
//               <span className="material-icons text-sm">mail</span>
//               Send Invite
//             </button>
//             <button onClick={handleExportCSV} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="CSV">
//               <span className="material-icons text-sm">table_view</span>
//             </button>
//             <button onClick={handleExportPDF} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="PDF">
//               <span className="material-icons text-sm">picture_as_pdf</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
//                 <th className="px-6 py-4">Name</th>
//                 <th className="px-6 py-4">Email</th>
//                 <th className="px-6 py-4">Role</th>
//                 <th className="px-6 py-4">School</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//               {currentUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
//                   <td className="px-6 py-4 font-medium">{user.name}</td>
//                   <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{user.email}</td>
//                   <td className="px-6 py-4">{user.role}</td>
//                   <td className="px-6 py-4">{user.school}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[user.status]}`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-right relative">
//                     <button
//                       onClick={() => setActionMenu(actionMenu === user.id ? null : user.id)}
//                       className="text-slate-400 hover:text-primary transition-colors"
//                     >
//                       <span className="material-icons">more_vert</span>
//                     </button>
//                     {actionMenu === user.id && (
//                       <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-slate-200 dark:border-slate-700">
//                         <div className="py-1">
//                           <button
//                             onClick={() => handleResetPassword(user.id)}
//                             className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
//                           >
//                             Reset Password
//                           </button>
//                           <button
//                             onClick={() => handleSuspend(user.id)}
//                             className="block px-4 py-2 text-sm text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
//                           >
//                             {user.status === 'Active' ? 'Suspend' : 'Activate'}
//                           </button>
//                           <button
//                             onClick={() => handleDelete(user.id)}
//                             className="block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* Pagination */}
//         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-slate-500 order-2 sm:order-1">
//             Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredUsers.length)} of {filteredUsers.length} users
//           </p>
//           <div className="flex gap-2 order-1 sm:order-2">
//             <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Previous</button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//               <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${currentPage === page ? 'bg-primary text-white' : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{page}</button>
//             ))}
//             <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Next</button>
//           </div>
//         </div>
//       </div>

//       {/* Invitations Section (unchanged) */}
//       {invitations.length > 0 && (
//         <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-6">
//           <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
//             <h3 className="font-bold">Pending Invitations</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
//                   <th className="px-6 py-4">Email</th>
//                   <th className="px-6 py-4">Role</th>
//                   <th className="px-6 py-4">School</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {invitations.map(inv => (
//                   <tr key={inv.id}>
//                     <td className="px-6 py-4">{inv.email}</td>
//                     <td className="px-6 py-4">{inv.role}</td>
//                     <td className="px-6 py-4">{inv.school}</td>
//                     <td className="px-6 py-4">
//                       <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">{inv.status}</span>
//                     </td>
//                     <td className="px-6 py-4 text-right space-x-2">
//                       <button onClick={() => handleResendInvite(inv.id)} className="text-primary hover:underline text-xs">Resend</button>
//                       <button onClick={() => handleCancelInvite(inv.id)} className="text-red-600 hover:underline text-xs">Cancel</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//             {/* Invite Modal */}
//       {showInviteModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <div className="bg-white dark:bg-slate-900 rounded-lg max-w-md w-full p-6">
//             <h3 className="text-lg font-bold mb-4">Send Invitation</h3>
//             <form onSubmit={handleSendInvite}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
//                   <input
//                     type="email"
//                     required
//                     value={newInvite.email}
//                     onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
//                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
//                   <select
//                     required
//                     value={newInvite.role}
//                     onChange={(e) => setNewInvite({ ...newInvite, role: e.target.value })}
//                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                   >
//                     <option value="">Select role</option>
//                     <option value="School Admin">School Admin</option>
//                     <option value="Accountant">Accountant</option>
//                     <option value="HR">HR</option>
//                     <option value="Staff">Staff</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School</label>
//                   <select
//                     required
//                     value={newInvite.school}
//                     onChange={(e) => setNewInvite({ ...newInvite, school: e.target.value })}
//                     className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                   >
//                     <option value="">Select school</option>
//                     <option value="Beacon Heights Academy">Beacon Heights Academy</option>
//                     <option value="Riverdale Secondary">Riverdale Secondary</option>
//                     <option value="Westside Primary">Westside Primary</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-3 mt-6">
//                 <button type="button" onClick={() => setShowInviteModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium">Cancel</button>
//                 <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Send</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </SuperAdminLayout>

//   );
// };

// export default UserManagement;

import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const UserManagement = () => {
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionMenu, setActionMenu] = useState(null);
  const itemsPerPage = 5;

  // Mock data – users can have multiple roles
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Dr. Sarah Smith', email: 'sarah@beacon.edu', roles: ['School Admin'], school: 'Beacon Heights Academy', status: 'Active' },
    { id: 'u2', name: 'John Doe', email: 'john@riverdale.edu', roles: ['Accountant'], school: 'Riverdale Secondary', status: 'Active' },
    { id: 'u3', name: 'Emily Davis', email: 'emily@westside.edu', roles: ['Staff'], school: 'Westside Primary', status: 'Pending' },
    { id: 'u4', name: 'Michael Brown', email: 'michael@northhill.edu', roles: ['School Admin'], school: 'North Hill International', status: 'Suspended' },
    { id: 'u5', name: 'Jane Wilson', email: 'jane@oakridge.edu', roles: ['HR', 'Accountant'], school: 'Oakridge International', status: 'Active' }, // multiple roles
  ]);

  const [invitations, setInvitations] = useState([
    { id: 'i1', email: 'newadmin@school.edu', role: 'School Admin', school: 'Beacon Heights Academy', status: 'Pending' },
  ]);

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [newInvite, setNewInvite] = useState({ email: '', role: '', school: '' });

  // Filter logic: if filterRole is not 'All', show users whose roles array includes that role
  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = filterRole === 'All' || u.roles.includes(filterRole);
    const matchesStatus = filterStatus === 'All' || u.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleSuspend = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
    toast.success('User status toggled');
    setActionMenu(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      setUsers(users.filter(u => u.id !== id));
      toast.success('User deleted');
      setActionMenu(null);
    }
  };

  const handleResetPassword = (id) => {
    toast.success('Password reset email sent');
    setActionMenu(null);
  };

  const handleSendInvite = (e) => {
    e.preventDefault();
    setInvitations([...invitations, { id: `i${Date.now()}`, ...newInvite, status: 'Pending' }]);
    setShowInviteModal(false);
    setNewInvite({ email: '', role: '', school: '' });
    toast.success('Invitation sent');
  };

  const handleResendInvite = (id) => {
    toast.success('Invitation resent');
  };

  const handleCancelInvite = (id) => {
    setInvitations(invitations.filter(i => i.id !== id));
    toast.success('Invitation cancelled');
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(users.map(u => ({ ...u, roles: u.roles.join(', ') })));
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    link.click();
    toast.success('CSV exported');
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('User Management Report', 14, 15);
    autoTable(doc, {
      head: [['Name', 'Email', 'Roles', 'School', 'Status']],
      body: users.map(u => [u.name, u.email, u.roles.join(', '), u.school, u.status]),
    });
    doc.save('users.pdf');
    toast.success('PDF exported');
  };

  const statusColors = {
    Active: 'bg-emerald-100 text-emerald-700',
    Pending: 'bg-amber-100 text-amber-700',
    Suspended: 'bg-rose-100 text-rose-700',
  };

  const roleOptions = [
    'School Admin',
    'Accountant',
    'HR',
    'Staff',
  ];

  return (
    <SuperAdminLayout pageTitle="User Management" pageDescription="Manage all users and invitations">
      {/* Filters & Actions */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 min-w-[200px]">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search users..."
              />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="All">All Roles</option>
              {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowInviteModal(true)}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <span className="material-icons text-sm">mail</span>
              Send Invite
            </button>
            <button onClick={handleExportCSV} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="CSV">
              <span className="material-icons text-sm">table_view</span>
            </button>
            <button onClick={handleExportPDF} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="PDF">
              <span className="material-icons text-sm">picture_as_pdf</span>
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Roles</th>
                <th className="px-6 py-4">School</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.roles.map(role => (
                        <span key={role} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {role}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.school}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => setActionMenu(actionMenu === user.id ? null : user.id)}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <span className="material-icons">more_vert</span>
                    </button>
                    {actionMenu === user.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-slate-200 dark:border-slate-700">
                        <div className="py-1">
                          <button
                            onClick={() => handleResetPassword(user.id)}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Reset Password
                          </button>
                          <button
                            onClick={() => handleSuspend(user.id)}
                            className="block px-4 py-2 text-sm text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            {user.status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 order-2 sm:order-1">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredUsers.length)} of {filteredUsers.length} users
          </p>
          <div className="flex gap-2 order-1 sm:order-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Previous</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${currentPage === page ? 'bg-primary text-white' : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>

      {/* Invitations Section */}
      {invitations.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mt-6">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold">Pending Invitations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">School</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invitations.map(inv => (
                  <tr key={inv.id}>
                    <td className="px-6 py-4">{inv.email}</td>
                    <td className="px-6 py-4">{inv.role}</td>
                    <td className="px-6 py-4">{inv.school}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">{inv.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button onClick={() => handleResendInvite(inv.id)} className="text-primary hover:underline text-xs">Resend</button>
                      <button onClick={() => handleCancelInvite(inv.id)} className="text-red-600 hover:underline text-xs">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-bold mb-4">Send Invitation</h3>
            <form onSubmit={handleSendInvite}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={newInvite.email}
                    onChange={(e) => setNewInvite({ ...newInvite, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
                  <select
                    required
                    value={newInvite.role}
                    onChange={(e) => setNewInvite({ ...newInvite, role: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  >
                    <option value="">Select role</option>
                    {roleOptions.map(role => <option key={role} value={role}>{role}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School</label>
                  <select
                    required
                    value={newInvite.school}
                    onChange={(e) => setNewInvite({ ...newInvite, school: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  >
                    <option value="">Select school</option>
                    <option value="Beacon Heights Academy">Beacon Heights Academy</option>
                    <option value="Riverdale Secondary">Riverdale Secondary</option>
                    <option value="Westside Primary">Westside Primary</option>
                    <option value="North Hill International">North Hill International</option>
                    <option value="Oakridge International">Oakridge International</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowInviteModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SuperAdminLayout>
  );
};

export default UserManagement;