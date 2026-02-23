import React from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const Payments = () => {
  const handleRecordPayment = () => toast.success('Record Payment clicked (demo)');
  const handleFilter = () => toast.success('Filter clicked (demo)');
  const handleExport = () => toast.success('Export clicked (demo)');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm p-8 text-center">
          <span className="material-icons text-6xl text-slate-300 mb-4">payments</span>
          <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">Payment Management</h3>
          <p className="text-slate-500 mb-6">View all payment transactions, record new payments, and reconcile accounts.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRecordPayment}
              className="bg-primary text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <span className="material-icons text-sm">add</span>
              Record Payment
            </button>
            <button
              onClick={handleFilter}
              className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50"
            >
              Filter
            </button>
            <button
              onClick={handleExport}
              className="px-5 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50"
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;