// // // import React, { useState, useMemo } from 'react';
// // // import SuperAdminLayout from '../components/SuperAdminLayout';
// // // import AddSchoolModal from '../components/AddSchoolModal';
// // // import toast from 'react-hot-toast';

// // // const SchoolManagement = () => {
// // //   const [schools, setSchools] = useState([
// // //     {
// // //       id: 'SCH-2023-001',
// // //       name: 'Beacon Heights Academy',
// // //       plan: 'Enterprise',
// // //       status: 'Active',
// // //       students: 1200,
// // //       admin: 'Dr. Sarah Smith',
// // //     },
// // //     {
// // //       id: 'SCH-2023-082',
// // //       name: 'Riverdale Secondary',
// // //       plan: 'Pro',
// // //       status: 'Pending',
// // //       students: 850,
// // //       admin: 'John Doe',
// // //     },
// // //     {
// // //       id: 'SCH-2023-144',
// // //       name: 'West Point Prep',
// // //       plan: 'Basic',
// // //       status: 'Active',
// // //       students: 320,
// // //       admin: 'Emily Johnson',
// // //     },
// // //     {
// // //       id: 'SCH-2023-205',
// // //       name: 'North Hill International',
// // //       plan: 'Enterprise',
// // //       status: 'Overdue',
// // //       students: 2100,
// // //       admin: 'Michael Brown',
// // //     },
// // //   ]);

// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [search, setSearch] = useState('');
// // //   const [filterPlan, setFilterPlan] = useState('All');
// // //   const [filterStatus, setFilterStatus] = useState('All');
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [itemsPerPage] = useState(5);

// // //   // Filter schools
// // //   const filteredSchools = useMemo(() => {
// // //     return schools.filter((school) => {
// // //       const matchesSearch = school.name.toLowerCase().includes(search.toLowerCase()) ||
// // //                             school.id.toLowerCase().includes(search.toLowerCase());
// // //       const matchesPlan = filterPlan === 'All' || school.plan === filterPlan;
// // //       const matchesStatus = filterStatus === 'All' || school.status === filterStatus;
// // //       return matchesSearch && matchesPlan && matchesStatus;
// // //     });
// // //   }, [schools, search, filterPlan, filterStatus]);

// // //   // Pagination
// // //   const indexOfLast = currentPage * itemsPerPage;
// // //   const indexOfFirst = indexOfLast - itemsPerPage;
// // //   const currentSchools = filteredSchools.slice(indexOfFirst, indexOfLast);
// // //   const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);

// // //   const handleAddSchool = (newSchool) => {
// // //     setSchools([...schools, newSchool]);
// // //   };

// // //   const handleDelete = (id) => {
// // //     if (window.confirm('Are you sure you want to delete this school?')) {
// // //       setSchools(schools.filter(s => s.id !== id));
// // //       toast.success('School deleted');
// // //     }
// // //   };

// // //   const handleStatusChange = (id, newStatus) => {
// // //     setSchools(schools.map(s => s.id === id ? { ...s, status: newStatus } : s));
// // //     toast.success(`Status updated to ${newStatus}`);
// // //   };

// // //   const openActionMenu = (schoolId) => {
// // //     // In a real app, you might open a dropdown menu. For simplicity, we'll just show an alert with options.
// // //     const action = window.prompt('Actions: Edit, Delete, Change Status (Active/Pending/Overdue)');
// // //     if (action === 'Delete') handleDelete(schoolId);
// // //     else if (action === 'Active' || action === 'Pending' || action === 'Overdue') handleStatusChange(schoolId, action);
// // //     else if (action === 'Edit') toast('Edit functionality would open a modal');
// // //   };

// // //   return (
// // //     <SuperAdminLayout pageTitle="School Management" pageDescription="Manage all registered schools">
// // //       <AddSchoolModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddSchool} />

// // //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
// // //         {/* Filter Bar */}
// // //         <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
// // //           <div className="flex items-center gap-4 flex-1 min-w-[300px]">
// // //             <div className="relative flex-1 max-w-md">
// // //               <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
// // //               <input
// // //                 value={search}
// // //                 onChange={(e) => setSearch(e.target.value)}
// // //                 className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
// // //                 placeholder="Search schools..."
// // //                 type="text"
// // //               />
// // //             </div>
// // //             <select
// // //               value={filterPlan}
// // //               onChange={(e) => setFilterPlan(e.target.value)}
// // //               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
// // //             >
// // //               <option value="All">All Plans</option>
// // //               <option value="Enterprise">Enterprise</option>
// // //               <option value="Pro">Pro</option>
// // //               <option value="Basic">Basic</option>
// // //             </select>
// // //             <select
// // //               value={filterStatus}
// // //               onChange={(e) => setFilterStatus(e.target.value)}
// // //               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
// // //             >
// // //               <option value="All">All Status</option>
// // //               <option value="Active">Active</option>
// // //               <option value="Pending">Pending</option>
// // //               <option value="Overdue">Overdue</option>
// // //             </select>
// // //           </div>
// // //           <button
// // //             onClick={() => setIsModalOpen(true)}
// // //             className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
// // //           >
// // //             <span className="material-icons text-sm">add</span>
// // //             Add New School
// // //           </button>
// // //         </div>

// // //         {/* Table */}
// // //         <div className="overflow-x-auto">
// // //           <table className="w-full text-left">
// // //             <thead>
// // //               <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
// // //                 <th className="px-6 py-4">School Name</th>
// // //                 <th className="px-6 py-4">Plan</th>
// // //                 <th className="px-6 py-4">Status</th>
// // //                 <th className="px-6 py-4">Students</th>
// // //                 <th className="px-6 py-4">Admin</th>
// // //                 <th className="px-6 py-4 text-right">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
// // //               {currentSchools.map((school) => (
// // //                 <tr key={school.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
// // //                   <td className="px-6 py-4">
// // //                     <div className="flex items-center gap-3">
// // //                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
// // //                         {school.name
// // //                           .split(' ')
// // //                           .map((w) => w[0])
// // //                           .join('')
// // //                           .slice(0, 2)}
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-semibold text-sm">{school.name}</p>
// // //                         <p className="text-xs text-slate-500">ID: {school.id}</p>
// // //                       </div>
// // //                     </div>
// // //                   </td>
// // //                   <td className="px-6 py-4">
// // //                     <span
// // //                       className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
// // //                         school.plan === 'Enterprise'
// // //                           ? 'bg-primary/10 text-primary border border-primary/20'
// // //                           : school.plan === 'Pro'
// // //                           ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
// // //                           : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
// // //                       }`}
// // //                     >
// // //                       {school.plan}
// // //                     </span>
// // //                   </td>
// // //                   <td className="px-6 py-4">
// // //                     <div className="flex items-center gap-2">
// // //                       <span
// // //                         className={`w-2 h-2 rounded-full ${
// // //                           school.status === 'Active'
// // //                             ? 'bg-emerald-500'
// // //                             : school.status === 'Pending'
// // //                             ? 'bg-amber-500'
// // //                             : 'bg-rose-500'
// // //                         }`}
// // //                       ></span>
// // //                       <span className="text-xs font-medium">{school.status}</span>
// // //                     </div>
// // //                   </td>
// // //                   <td className="px-6 py-4 text-sm">{school.students}</td>
// // //                   <td className="px-6 py-4 text-sm">{school.admin}</td>
// // //                   <td className="px-6 py-4 text-right">
// // //                     <button
// // //                       onClick={() => openActionMenu(school.id)}
// // //                       className="text-slate-400 hover:text-primary transition-colors"
// // //                     >
// // //                       <span className="material-icons">more_vert</span>
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //               {currentSchools.length === 0 && (
// // //                 <tr>
// // //                   <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
// // //                     No schools found.
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Pagination */}
// // //         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
// // //           <p className="text-sm text-slate-500">
// // //             Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredSchools.length)} of {filteredSchools.length} schools
// // //           </p>
// // //           <div className="flex gap-2">
// // //             <button
// // //               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
// // //               disabled={currentPage === 1}
// // //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
// // //             >
// // //               Previous
// // //             </button>
// // //             {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// // //               <button
// // //                 key={page}
// // //                 onClick={() => setCurrentPage(page)}
// // //                 className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
// // //                   currentPage === page
// // //                     ? 'bg-primary text-white'
// // //                     : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
// // //                 }`}
// // //               >
// // //                 {page}
// // //               </button>
// // //             ))}
// // //             <button
// // //               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
// // //               disabled={currentPage === totalPages}
// // //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </SuperAdminLayout>
// // //   );
// // // };

// // // export default SchoolManagement;

// // import React, { useState, useEffect, useMemo } from 'react';
// // import SuperAdminLayout from '../components/SuperAdminLayout';
// // import AddSchoolModal from '../components/AddSchoolModal';
// // import EditSchoolModal from '../components/EditSchoolModal'; // we need to create this
// // import toast from 'react-hot-toast';
// // import {
// //   getSchools,
// //   deleteSchool,
// //   updateSchoolStatus,
// // } from '../../../services/superadmin/schoolService.js';

// // const SchoolManagement = () => {
// //   const [schools, setSchools] = useState([]);
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// //   const [editingSchool, setEditingSchool] = useState(null);
// //   const [search, setSearch] = useState('');
// //   const [filterPlan, setFilterPlan] = useState('All');
// //   const [filterStatus, setFilterStatus] = useState('All');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [loading, setLoading] = useState(false);
// //   const itemsPerPage = 5;

// //   const fetchSchools = async () => {
// //     setLoading(true);
// //     try {
// //       const params = {
// //         page: currentPage,
// //         limit: itemsPerPage,
// //         search: search || undefined,
// //         status: filterStatus !== 'All' ? filterStatus.toUpperCase() : undefined,
// //         // plan filter not supported by API, we'll handle client-side or ignore
// //       };
// //       const response = await getSchools(params);
// //       // Assuming response has { items, total, page, limit }
// //       setSchools(response.items || response);
// //       setTotalPages(Math.ceil((response.total || response.length) / itemsPerPage));
// //     } catch (error) {
// //       toast.error('Failed to load schools');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchSchools();
// //   }, [currentPage, search, filterStatus]); // filterPlan not supported by API

// //   const handleAddSchool = (newSchool) => {
// //     setSchools(prev => [newSchool, ...prev]);
// //     fetchSchools(); // refresh to get updated list
// //   };

// //   const handleEdit = (school) => {
// //     setEditingSchool(school);
// //     setIsEditModalOpen(true);
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm('Are you sure you want to delete this school?')) return;
// //     try {
// //       await deleteSchool(id);
// //       toast.success('School deleted');
// //       fetchSchools();
// //     } catch (error) {
// //       toast.error('Failed to delete school');
// //     }
// //   };

// //   const handleStatusChange = async (id, newStatus) => {
// //     try {
// //       await updateSchoolStatus(id, newStatus.toUpperCase());
// //       toast.success(`Status updated to ${newStatus}`);
// //       fetchSchools();
// //     } catch (error) {
// //       toast.error('Failed to update status');
// //     }
// //   };

// //   const openActionMenu = (schoolId) => {
// //     const school = schools.find(s => s.id === schoolId);
// //     const action = window.prompt('Actions: Edit, Delete, Change Status (Active/Pending/Overdue)');
// //     if (action === 'Delete') handleDelete(schoolId);
// //     else if (action === 'Active' || action === 'Pending' || action === 'Overdue') handleStatusChange(schoolId, action);
// //     else if (action === 'Edit') handleEdit(school);
// //   };

// //   // Filter for plan (client-side)
// //   const filteredSchools = useMemo(() => {
// //     return schools.filter(school => 
// //       filterPlan === 'All' || school.plan === filterPlan
// //     );
// //   }, [schools, filterPlan]);

// //   const currentSchools = filteredSchools.slice(0, itemsPerPage); // pagination already done on server, but we need to handle plan filter client-side

// //   // Adjust pagination after client-side filter
// //   const totalFiltered = filteredSchools.length;
// //   const totalPagesFiltered = Math.ceil(totalFiltered / itemsPerPage);

// //   return (
// //     <SuperAdminLayout pageTitle="School Management" pageDescription="Manage all registered schools">
// //       <AddSchoolModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddSchool} />
// //       {editingSchool && (
// //         <EditSchoolModal
// //           isOpen={isEditModalOpen}
// //           onClose={() => { setIsEditModalOpen(false); setEditingSchool(null); }}
// //           school={editingSchool}
// //           onUpdate={fetchSchools}
// //         />
// //       )}

// //       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
// //         {/* Filter Bar */}
// //         <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
// //           <div className="flex items-center gap-4 flex-1 min-w-[300px]">
// //             <div className="relative flex-1 max-w-md">
// //               <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
// //               <input
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
// //                 placeholder="Search schools..."
// //                 type="text"
// //               />
// //             </div>
// //             <select
// //               value={filterPlan}
// //               onChange={(e) => setFilterPlan(e.target.value)}
// //               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
// //             >
// //               <option value="All">All Plans</option>
// //               <option value="Enterprise">Enterprise</option>
// //               <option value="Pro">Pro</option>
// //               <option value="Basic">Basic</option>
// //             </select>
// //             <select
// //               value={filterStatus}
// //               onChange={(e) => setFilterStatus(e.target.value)}
// //               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
// //             >
// //               <option value="All">All Status</option>
// //               <option value="Active">Active</option>
// //               <option value="Pending">Pending</option>
// //               <option value="Overdue">Overdue</option>
// //             </select>
// //           </div>
// //           <button
// //             onClick={() => setIsAddModalOpen(true)}
// //             className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
// //           >
// //             <span className="material-icons text-sm">add</span>
// //             Add New School
// //           </button>
// //         </div>

// //         {/* Table */}
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-left">
// //             <thead>
// //               <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
// //                 <th className="px-6 py-4">School Name</th>
// //                 <th className="px-6 py-4">Plan</th>
// //                 <th className="px-6 py-4">Status</th>
// //                 <th className="px-6 py-4">Students</th>
// //                 <th className="px-6 py-4">Admin</th>
// //                 <th className="px-6 py-4 text-right">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
// //               {currentSchools.map((school) => (
// //                 <tr key={school.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
// //                         {school.name
// //                           .split(' ')
// //                           .map((w) => w[0])
// //                           .join('')
// //                           .slice(0, 2)}
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-sm">{school.name}</p>
// //                         <p className="text-xs text-slate-500">ID: {school.id}</p>
// //                       </div>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <span
// //                       className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
// //                         school.plan === 'Enterprise'
// //                           ? 'bg-primary/10 text-primary border border-primary/20'
// //                           : school.plan === 'Pro'
// //                           ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
// //                           : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
// //                       }`}
// //                     >
// //                       {school.plan}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <div className="flex items-center gap-2">
// //                       <span
// //                         className={`w-2 h-2 rounded-full ${
// //                           school.status === 'Active'
// //                             ? 'bg-emerald-500'
// //                             : school.status === 'Pending'
// //                             ? 'bg-amber-500'
// //                             : 'bg-rose-500'
// //                         }`}
// //                       ></span>
// //                       <span className="text-xs font-medium">{school.status}</span>
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm">{school.students}</td>
// //                   <td className="px-6 py-4 text-sm">{school.admin}</td>
// //                   <td className="px-6 py-4 text-right">
// //                     <button
// //                       onClick={() => openActionMenu(school.id)}
// //                       className="text-slate-400 hover:text-primary transition-colors"
// //                     >
// //                       <span className="material-icons">more_vert</span>
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //               {currentSchools.length === 0 && (
// //                 <tr>
// //                   <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
// //                     No schools found.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Pagination */}
// //         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
// //           <p className="text-sm text-slate-500">
// //             Showing {indexOfFirst + 1} to {Math.min(indexOfLast, totalFiltered)} of {totalFiltered} schools
// //           </p>
// //           <div className="flex gap-2">
// //             <button
// //               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
// //               disabled={currentPage === 1}
// //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
// //             >
// //               Previous
// //             </button>
// //             {Array.from({ length: totalPagesFiltered }, (_, i) => i + 1).map(page => (
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
// //               onClick={() => setCurrentPage(p => Math.min(totalPagesFiltered, p + 1))}
// //               disabled={currentPage === totalPagesFiltered}
// //               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </SuperAdminLayout>
// //   );
// // };

// // export default SchoolManagement;

// import React, { useState, useEffect, useMemo } from 'react';
// import SuperAdminLayout from '../components/SuperAdminLayout';
// import AddSchoolModal from '../components/AddSchoolModal';
// import EditSchoolModal from '../components/EditSchoolModal';
// import toast from 'react-hot-toast';
// import {
//   getSchools,
//   deleteSchool,
//   updateSchoolStatus,
// } from '../../../services/superadmin/schoolService.js';

// const SchoolManagement = () => {
//   const [schools, setSchools] = useState([]);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingSchool, setEditingSchool] = useState(null);
//   const [search, setSearch] = useState('');
//   const [filterPlan, setFilterPlan] = useState('All');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const itemsPerPage = 5;

//   const fetchSchools = async () => {
//     setLoading(true);
//     try {
//       const params = {
//         page: currentPage,
//         limit: itemsPerPage,
//         search: search || undefined,
//         status: filterStatus !== 'All' ? filterStatus.toUpperCase() : undefined,
//       };
//       const response = await getSchools(params);
//       setSchools(response.items || response);
//       setTotalPages(Math.ceil((response.total || response.length) / itemsPerPage));
//     } catch (error) {
//       toast.error('Failed to load schools');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSchools();
//   }, [currentPage, search, filterStatus]);

//   const handleAddSchool = (newSchool) => {
//     setSchools(prev => [newSchool, ...prev]);
//     fetchSchools();
//   };

//   const handleEdit = (school) => {
//     setEditingSchool(school);
//     setIsEditModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this school?')) return;
//     try {
//       await deleteSchool(id);
//       toast.success('School deleted');
//       fetchSchools();
//     } catch (error) {
//       toast.error('Failed to delete school');
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await updateSchoolStatus(id, newStatus.toUpperCase());
//       toast.success(`Status updated to ${newStatus}`);
//       fetchSchools();
//     } catch (error) {
//       toast.error('Failed to update status');
//     }
//   };

//   const openActionMenu = (schoolId) => {
//     const school = schools.find(s => s.id === schoolId);
//     const action = window.prompt('Actions: Edit, Delete, Change Status (Active/Pending/Overdue)');
//     if (action === 'Delete') handleDelete(schoolId);
//     else if (action === 'Active' || action === 'Pending' || action === 'Overdue') handleStatusChange(schoolId, action);
//     else if (action === 'Edit') handleEdit(school);
//   };

//   // Filter for plan (client-side)
//   const filteredSchools = useMemo(() => {
//     return schools.filter(school => 
//       filterPlan === 'All' || school.plan === filterPlan
//     );
//   }, [schools, filterPlan]);

//   // Pagination calculations
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentSchools = filteredSchools.slice(indexOfFirst, indexOfLast);
//   const totalFiltered = filteredSchools.length;
//   const totalPagesFiltered = Math.ceil(totalFiltered / itemsPerPage);

//   return (
//     <SuperAdminLayout pageTitle="School Management" pageDescription="Manage all registered schools">
//       <AddSchoolModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddSchool} />
//       {editingSchool && (
//         <EditSchoolModal
//           isOpen={isEditModalOpen}
//           onClose={() => { setIsEditModalOpen(false); setEditingSchool(null); }}
//           school={editingSchool}
//           onUpdate={fetchSchools}
//         />
//       )}

//       <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
//         {/* Filter Bar */}
//         <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-4 flex-1 min-w-[300px]">
//             <div className="relative flex-1 max-w-md">
//               <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="Search schools..."
//                 type="text"
//               />
//             </div>
//             <select
//               value={filterPlan}
//               onChange={(e) => setFilterPlan(e.target.value)}
//               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
//             >
//               <option value="All">All Plans</option>
//               <option value="Enterprise">Enterprise</option>
//               <option value="Pro">Pro</option>
//               <option value="Basic">Basic</option>
//             </select>
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
//             >
//               <option value="All">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Pending">Pending</option>
//               <option value="Overdue">Overdue</option>
//             </select>
//           </div>
//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
//           >
//             <span className="material-icons text-sm">add</span>
//             Add New School
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
//                 <th className="px-6 py-4">School Name</th>
//                 <th className="px-6 py-4">Plan</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4">Students</th>
//                 <th className="px-6 py-4">Admin</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//               {currentSchools.map((school) => (
//                 <tr key={school.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
//                         {school.name
//                           .split(' ')
//                           .map((w) => w[0])
//                           .join('')
//                           .slice(0, 2)}
//                       </div>
//                       <div>
//                         <p className="font-semibold text-sm">{school.name}</p>
//                         <p className="text-xs text-slate-500">ID: {school.id}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
//                         school.plan === 'Enterprise'
//                           ? 'bg-primary/10 text-primary border border-primary/20'
//                           : school.plan === 'Pro'
//                           ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
//                           : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
//                       }`}
//                     >
//                       {school.plan}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`w-2 h-2 rounded-full ${
//                           school.status === 'Active'
//                             ? 'bg-emerald-500'
//                             : school.status === 'Pending'
//                             ? 'bg-amber-500'
//                             : 'bg-rose-500'
//                         }`}
//                       ></span>
//                       <span className="text-xs font-medium">{school.status}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm">{school.students}</td>
//                   <td className="px-6 py-4 text-sm">{school.admin}</td>
//                   <td className="px-6 py-4 text-right">
//                     <button
//                       onClick={() => openActionMenu(school.id)}
//                       className="text-slate-400 hover:text-primary transition-colors"
//                     >
//                       <span className="material-icons">more_vert</span>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {currentSchools.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
//                     No schools found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
//           <p className="text-sm text-slate-500">
//             Showing {indexOfFirst + 1} to {Math.min(indexOfLast, totalFiltered)} of {totalFiltered} schools
//           </p>
//           <div className="flex gap-2">
//             <button
//               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
//             >
//               Previous
//             </button>
//             {Array.from({ length: totalPagesFiltered }, (_, i) => i + 1).map(page => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
//                   currentPage === page
//                     ? 'bg-primary text-white'
//                     : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//             <button
//               onClick={() => setCurrentPage(p => Math.min(totalPagesFiltered, p + 1))}
//               disabled={currentPage === totalPagesFiltered}
//               className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </SuperAdminLayout>
//   );
// };

// export default SchoolManagement;


import React, { useState, useEffect, useMemo } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import AddSchoolModal from '../components/AddSchoolModal';
import EditSchoolModal from '../components/EditSchoolModal';
import toast from 'react-hot-toast';
import {
  getSchools,
  deleteSchool,
  updateSchoolStatus,
} from '../../../services/superadmin/schoolService.js';

const SchoolManagement = () => {
  const [schools, setSchools] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSchool, setEditingSchool] = useState(null);
  const [search, setSearch] = useState('');
  const [filterPlan, setFilterPlan] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [actionMenuOpen, setActionMenuOpen] = useState(null); // school id
  const itemsPerPage = 5;

  const fetchSchools = async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: itemsPerPage,
        search: search || undefined,
        status: filterStatus !== 'All' ? filterStatus.toUpperCase() : undefined,
      };
      const response = await getSchools(params);
      setSchools(response.items || response);
      setTotalPages(Math.ceil((response.total || response.length) / itemsPerPage));
    } catch (error) {
      toast.error('Failed to load schools');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, [currentPage, search, filterStatus]);

  const handleAddSchool = (newSchool) => {
    setSchools(prev => [newSchool, ...prev]);
    fetchSchools();
  };

  const handleEdit = (school) => {
    setEditingSchool(school);
    setIsEditModalOpen(true);
    setActionMenuOpen(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this school?')) return;
    try {
      await deleteSchool(id);
      toast.success('School deleted');
      fetchSchools();
    } catch (error) {
      toast.error('Failed to delete school');
    }
    setActionMenuOpen(null);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateSchoolStatus(id, newStatus);
      toast.success(`Status updated to ${newStatus}`);
      fetchSchools();
    } catch (error) {
      toast.error('Failed to update status');
    }
    setActionMenuOpen(null);
  };

  // Filter for plan (client-side)
  const filteredSchools = useMemo(() => {
    return schools.filter(school => 
      filterPlan === 'All' || school.plan === filterPlan
    );
  }, [schools, filterPlan]);

  // Pagination calculations
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirst, indexOfLast);
  const totalFiltered = filteredSchools.length;
  const totalPagesFiltered = Math.ceil(totalFiltered / itemsPerPage);

  return (
    <SuperAdminLayout 
    pageTitle="School Management" 
    pageDescription="Manage all registered schools"
    onAddSchool={() => setIsAddModalOpen(true)}   // <-- Add this line
     >
      <AddSchoolModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddSchool} />
      {editingSchool && (
        <EditSchoolModal
          isOpen={isEditModalOpen}
          onClose={() => { setIsEditModalOpen(false); setEditingSchool(null); }}
          school={editingSchool}
          onUpdate={fetchSchools}
        />
      )}

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Filter Bar */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1 max-w-md">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search schools..."
                type="text"
              />
            </div>
            {/* <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Plans</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Pro">Pro</option>
              <option value="Basic">Basic</option>
            </select> */}
            <select
  value={filterPlan}
  onChange={(e) => setFilterPlan(e.target.value)}
  className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none bg-[right_0.75rem_center] bg-no-repeat"
>
  <option value="All">All Plans</option>
  <option value="Enterprise">Enterprise</option>
  <option value="Pro">Pro</option>
  <option value="Basic">Basic</option>
</select>
            {/* <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select> */}
            <select
  value={filterStatus}
  onChange={(e) => setFilterStatus(e.target.value)}
  className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none bg-[right_0.75rem_center] bg-no-repeat"
>
  <option value="All">All Status</option>
  <option value="Active">Active</option>
  <option value="Pending">Pending</option>
  <option value="Overdue">Overdue</option>
</select>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            <span className="material-icons text-sm">add</span>
            Add New School
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">School Name</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Students</th>
                <th className="px-6 py-4">Admin</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentSchools.map((school) => (
                <tr key={school.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {school.name
                          .split(' ')
                          .map((w) => w[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{school.name}</p>
                        <p className="text-xs text-slate-500">ID: {school.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        school.plan === 'Enterprise'
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : school.plan === 'Pro'
                          ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
                          : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                      }`}
                    >
                      {school.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          school.status === 'ACTIVE'
                            ? 'bg-emerald-500'
                            : school.status === 'PENDING'
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                      ></span>
                      <span className="text-xs font-medium">{school.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{school.students || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{school.adminName || school.admin || 'N/A'}</td>
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => setActionMenuOpen(actionMenuOpen === school.id ? null : school.id)}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <span className="material-icons">more_vert</span>
                    </button>
                    {actionMenuOpen === school.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-slate-200 dark:border-slate-700">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(school)}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(school.id)}
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Delete
                          </button>
                          <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
                          <button
                            onClick={() => handleStatusChange(school.id, 'ACTIVE')}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Set Active
                          </button>
                          <button
                            onClick={() => handleStatusChange(school.id, 'PENDING')}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Set Pending
                          </button>
                          <button
                            onClick={() => handleStatusChange(school.id, 'SUSPENDED')}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Set Suspended
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {currentSchools.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
                    No schools found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, totalFiltered)} of {totalFiltered} schools
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPagesFiltered }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPagesFiltered, p + 1))}
              disabled={currentPage === totalPagesFiltered}
              className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SchoolManagement;