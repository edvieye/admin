// import React from 'react';
// import toast from 'react-hot-toast';
// import HrSidebar from '../components/HrSidebar';

// const HrRoleManagement = () => {
//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark">
//       <HrSidebar />
//       <div className="ml-64 p-8">
//         <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-12 text-center">
//           <span className="material-icons text-6xl text-slate-300 mb-4">admin_panel_settings</span>
//           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Role Management</h2>
//           <p className="text-slate-500 mb-6">Manage roles and permissions for staff members.</p>
//           <button
//             onClick={() => toast.success('Role Management page (demo)')}
//             className="px-4 py-2 bg-primary text-white rounded-lg"
//           >
//             Demo Action
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HrRoleManagement;
import React from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrRoleManagement = () => {
  return (
    <HrPageWrapper>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-12 text-center">
        <span className="material-icons text-6xl text-slate-300 mb-4">admin_panel_settings</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Role Management</h2>
        <p className="text-slate-500 mb-6">Manage roles and permissions for staff members.</p>
        <button onClick={() => toast.success('Role Management page (demo)')} className="px-4 py-2 bg-primary text-white rounded-lg">
          Demo Action
        </button>
      </div>
    </HrPageWrapper>
  );
};

export default HrRoleManagement;