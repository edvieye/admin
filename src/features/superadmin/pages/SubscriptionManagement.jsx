
import React, { useState, useEffect, useMemo } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import PlanEditDrawer from '../components/PlanEditDrawer';
import EditSubscriptionPlanModal from '../components/EditSubscriptionPlanModal';
import toast from 'react-hot-toast';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  getSubscriptions,
  updateSubscriptionPlan,
  updateAutoRenew,
} from '../../../services/superadmin/subscriptionService.js';
import { updateSchoolStatus } from '../../../services/superadmin/schoolService.js';

const SubscriptionManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filterPlan, setFilterPlan] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [editPlanModal, setEditPlanModal] = useState({ isOpen: false, schoolId: null, currentPlan: '' });
  const [togglingAutoRenew, setTogglingAutoRenew] = useState(null); // schoolId being toggled
  const itemsPerPage = 5;

  // Helper to get payment status label and color
  const getPaymentStatusInfo = (status) => {
    const map = {
      'PAID': { label: 'Paid', color: 'emerald' },
      'PENDING': { label: 'Pending', color: 'amber' },
      'OVERDUE': { label: 'Overdue', color: 'rose' },
    };
    return map[status] || { label: status, color: 'slate' };
  };

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        limit: itemsPerPage,
        search: search || undefined,
      };
      const response = await getSubscriptions(params);
      setSubscriptions(response.items || response);
      setTotalPages(Math.ceil((response.total || response.length) / itemsPerPage));
    } catch (error) {
      toast.error('Failed to load subscriptions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, [currentPage, search]);

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter(sub => {
      const matchesPlan = filterPlan === 'All' || sub.plan === filterPlan;
      const matchesStatus = filterStatus === 'All' || sub.paymentStatus === filterStatus; // assuming paymentStatus field
      return matchesPlan && matchesStatus;
    });
  }, [subscriptions, filterPlan, filterStatus]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentSubscriptions = filteredSubscriptions.slice(indexOfFirst, indexOfLast);
  const totalFiltered = filteredSubscriptions.length;
  const totalPagesFiltered = Math.ceil(totalFiltered / itemsPerPage);

  const handleToggleAutoRenew = async (schoolId, currentValue) => {
  setTogglingAutoRenew(schoolId);
  try {
    const newAutoRenew = !currentValue;
    console.log(`🔄 Toggling auto-renew for schoolId: ${schoolId}, current: ${currentValue}, new: ${newAutoRenew}`);

    // Optimistic update for immediate feedback
    setSubscriptions(prev =>
      prev.map(sub =>
        sub.schoolId === schoolId ? { ...sub, autoRenew: newAutoRenew } : sub
      )
    );

    const response = await updateAutoRenew(schoolId, newAutoRenew);
    console.log('✅ Auto-renew API response:', response);

    // Refetch to ensure consistency with backend
    await fetchSubscriptions();
    toast.success('Auto-renew updated');
  } catch (error) {
    console.error('❌ Auto-renew toggle failed:', error);
    // Revert optimistic update
    setSubscriptions(prev =>
      prev.map(sub =>
        sub.schoolId === schoolId ? { ...sub, autoRenew: currentValue } : sub
      )
    );
    toast.error('Failed to update auto-renew');
  } finally {
    setTogglingAutoRenew(null);
  }
};

  const handleExportCSV = () => {
    const csv = Papa.unparse(filteredSubscriptions);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subscriptions.csv';
    link.click();
    toast.success('CSV exported');
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Subscriptions Report', 14, 15);
    autoTable(doc, {
      head: [['School Name', 'Plan', 'Renewal Date', 'Payment Status', 'Auto-renew']],
      body: filteredSubscriptions.map(sub => [
        sub.schoolName,
        sub.plan,
        sub.renewalDate || 'N/A',
        sub.paymentStatus || 'N/A',
        sub.autoRenew ? 'Yes' : 'No',
      ]),
      startY: 20,
    });
    doc.save('subscriptions.pdf');
    toast.success('PDF exported');
  };

  const handleEditPlan = (schoolId, currentPlan) => {
    setEditPlanModal({ isOpen: true, schoolId, currentPlan });
    setActionMenuOpen(null);
  };

  const handleSuspend = async (schoolId) => {
    try {
      await updateSchoolStatus(schoolId, 'SUSPENDED');
      toast.success('School suspended');
      fetchSubscriptions();
    } catch (error) {
      toast.error('Failed to suspend school');
    }
    setActionMenuOpen(null);
  };

  return (
    <SuperAdminLayout
      pageTitle="Subscription Management"
      headerAction={
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
        >
          <span className="material-icons text-[18px]">edit</span>
          Edit Plans
        </button>
      }
    >
      <PlanEditDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <EditSubscriptionPlanModal
        isOpen={editPlanModal.isOpen}
        onClose={() => setEditPlanModal({ isOpen: false, schoolId: null, currentPlan: '' })}
        schoolId={editPlanModal.schoolId}
        currentPlan={editPlanModal.currentPlan}
        onSuccess={fetchSubscriptions}
      />

      {/* KPI Cards – populate with real data from API */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total MRR</p>
          <h2 className="text-3xl font-bold">$184,250</h2>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Subscriptions</p>
          <h2 className="text-3xl font-bold">1,248</h2>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Expiring this Month</p>
          <h2 className="text-3xl font-bold text-amber-500">82</h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 min-w-[200px]">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search schools by name..."
              />
            </div>
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
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none bg-[right_0.75rem_center] bg-no-repeat"
            >
              <option value="All">All Status</option>
              <option value="PAID">Paid</option>
              <option value="PENDING">Pending</option>
              <option value="OVERDUE">Overdue</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider hidden sm:inline">Export:</span>
            <button
              onClick={handleExportCSV}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary"
              title="CSV"
            >
              <span className="material-icons text-sm">table_view</span>
            </button>
            <button
              onClick={handleExportPDF}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary"
              title="PDF"
            >
              <span className="material-icons text-sm">picture_as_pdf</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-4 md:px-6 py-4">School Name</th>
                <th className="px-4 md:px-6 py-4">Current Plan</th>
                <th className="px-4 md:px-6 py-4">Renewal Date</th>
                <th className="px-4 md:px-6 py-4">Payment Status</th>
                <th className="px-4 md:px-6 py-4">Auto-renew</th>
                <th className="px-4 md:px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentSubscriptions.map((sub) => {
                const isSuspended = sub.status === 'SUSPENDED'; // assuming school status
                const paymentInfo = getPaymentStatusInfo(sub.paymentStatus);
                return (
                  <tr
                    key={sub.id}
                    className={`hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group ${isSuspended ? 'bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500' : ''}`}
                  >
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {sub.schoolName?.split(' ').map(w => w[0]).join('').slice(0,2)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{sub.schoolName}</p>
                          <p className="text-xs text-slate-500">ID: {sub.schoolId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        sub.plan === 'Enterprise' ? 'bg-primary/10 text-primary border border-primary/20' :
                        sub.plan === 'Pro' ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20' :
                        'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                      }`}>
                        {sub.plan}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm">{sub.renewalDate || 'N/A'}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className={`flex items-center gap-2 text-${paymentInfo.color}-600`}>
                        <span className={`w-2 h-2 rounded-full bg-${paymentInfo.color}-500`}></span>
                        <span className="text-xs font-medium">{paymentInfo.label}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
  <div className="relative inline-flex items-center">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={sub.autoRenew}
      disabled={togglingAutoRenew === sub.schoolId}
      onChange={() => handleToggleAutoRenew(sub.schoolId, sub.autoRenew)}
    />
    <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary ${togglingAutoRenew === sub.schoolId ? 'opacity-50 cursor-not-allowed' : ''}`}
    ></div>
  </div>
</td>
                    <td className="px-4 md:px-6 py-4 text-right relative">
                      <button
                        onClick={() => setActionMenuOpen(actionMenuOpen === sub.schoolId ? null : sub.schoolId)}
                        className="text-slate-400 hover:text-primary transition-colors"
                      >
                        <span className="material-icons">more_vert</span>
                      </button>
                      {actionMenuOpen === sub.schoolId && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-slate-200 dark:border-slate-700">
                          <div className="py-1">
                            <button
                              onClick={() => handleEditPlan(sub.schoolId, sub.plan)}
                              className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                            >
                              Edit Plan
                            </button>
                            <button
                              onClick={() => handleSuspend(sub.schoolId)}
                              className="block px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                            >
                              Suspend
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
              {currentSubscriptions.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No subscriptions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 md:px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 order-2 sm:order-1">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, totalFiltered)} of {totalFiltered} schools
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              <span className="material-icons text-sm">chevron_left</span>
            </button>
            {Array.from({ length: totalPagesFiltered }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPagesFiltered, p + 1))}
              disabled={currentPage === totalPagesFiltered}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SubscriptionManagement;