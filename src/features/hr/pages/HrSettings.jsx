// import React from 'react';
// import toast from 'react-hot-toast';
// import HrSidebar from '../components/HrSidebar';

// const HrSettings = () => {
//   return (
//     <div className="min-h-screen bg-background-light dark:bg-background-dark">
//       <HrSidebar />
//       <div className="ml-64 p-8">
//         <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-12 text-center">
//           <span className="material-icons text-6xl text-slate-300 mb-4">settings</span>
//           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">HR Settings</h2>
//           <p className="text-slate-500 mb-6">Configure HR preferences, leave policies, and notifications.</p>
//           <button
//             onClick={() => toast.success('Settings page (demo)')}
//             className="px-4 py-2 bg-primary text-white rounded-lg"
//           >
//             Demo Action
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HrSettings;

import React from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrSettings = () => {
  return (
    <HrPageWrapper>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-12 text-center">
        <span className="material-icons text-6xl text-slate-300 mb-4">settings</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">HR Settings</h2>
        <p className="text-slate-500 mb-6">Configure HR preferences, leave policies, and notifications.</p>
        <button onClick={() => toast.success('Settings page (demo)')} className="px-4 py-2 bg-primary text-white rounded-lg">
          Demo Action
        </button>
      </div>
    </HrPageWrapper>
  );
};

export default HrSettings;