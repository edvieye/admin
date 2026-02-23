import React, { useState } from 'react';
import toast from 'react-hot-toast';
import AccountantSidebar from '../components/AccountantSidebar';

const StaffPayroll = () => {
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const handleBulkPayroll = () => setShowBulkModal(true);
  const handleExport = () => toast.success('Export Summary clicked (demo)');
  const handleProcess = (name) => toast.success(`Process payroll for ${name} (demo)`);
  const handleViewSlip = (name) => toast.success(`View pay slip for ${name} (demo)`);
  const handleEdit = (name) => toast.success(`Edit payroll for ${name} (demo)`);

  const employees = [
    {
      id: 1,
      name: 'David Miller',
      idNumber: 'SCH-2023-084',
      role: 'Senior Math Teacher',
      baseSalary: 4500,
      allowances: 420,
      deductions: 150,
      netPay: 4770,
      status: 'Paid',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg3MTCTVqL2RHmr1GTVV-9bi8UVSWozy24r9j2_RF_GvJqv04TIBqrg9loYHRMbJXGcWn1FyHMC0iuP3SgV9CFoXw5scVguvxr5sgH3EPrGYq98XBhVzbnt72sHoYRcIrgkG7bGNF9_1W8v6Em3BMkj9XYv-tc6dCZo2OgbSbAJmnoyW5J2QI3mVPsQ9ASpy8rh-T3ScCPKORohXD-HQ9exaApe8YSGIwRxk80acgaf1sTG7JPk6MjAW-VLpcOWSrpZUeIP0_Zbh4',
    },
    {
      id: 2,
      name: 'Linda White',
      idNumber: 'SCH-2023-012',
      role: 'Head Administrator',
      baseSalary: 5200,
      allowances: 650,
      deductions: 210,
      netPay: 5640,
      status: 'Pending',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHzi2uURqs5HLcNJvw_nkH9d_w-RQr8OWHjVUsKcnbJ7o6WjyfDh4SkRCOMmWLcov47I7C15ye1GRq5-D1JSg1DquQjbP8TYcUIP-mqeoAnahnWQcPXcqpnxW-uDZzbdRUjgUfPOVWYE0tgHGKN227OgT6TEgqbtNu-LP1SnfMTKl74P7QdJ8ucGen9EHjJdUEZ7sjKtBpA1skERkt9sUD6hTIA5lgSMk0o-iFsZ1Ggti_RTii0OY6jded08Ajvw917l-tq-Owcko',
    },
    {
      id: 3,
      name: 'Marcus Thorne',
      idNumber: 'SCH-2023-104',
      role: 'Lead Maintenance',
      baseSalary: 2800,
      allowances: 120,
      deductions: 90,
      netPay: 2830,
      status: 'Draft',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYHAhJqCVkrLaUP1H1m7fNN4aLQzmoyQQ-rhr9BHh3aAnFKC2wPMwjTeNtk9ttGIbYGLDslh6_Tm84tgj0OsTMSK6UBh_wJXZ14MwfVx7Oy8AkJM5EiOd9gM7DIGtTzl_yP0AYUpC1f0_RMB-CN3XVdnYmDtq9zMwzZGoupu8w2k_F5ck2GHL_ly0OAWbFZIESame24_X4YCQNqY4wUo_vq1HlEJXyX_w-EpEygRG15Z41WTtDofiyYT5K-HTSVZiVnhwfDjEbGPQ',
    },
    {
      id: 4,
      name: 'Angela Ross',
      idNumber: 'SCH-2023-045',
      role: 'Librarian',
      baseSalary: 3200,
      allowances: 200,
      deductions: 110,
      netPay: 3290,
      status: 'Paid',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWGFf2zchKRo8tTvWrJmX2GvlgVGk0W5TEk9KBpnniMevDu9Tn9tYrS3F2rHL2iPR6WUkP6k48RNkN9jdws-fffbl6VwcbDeUOFYy8clgIhrZKYPk3XWdC84sFqj0ML4M8VVnwIEQqH4dJpUmMGeNI0Fl-BwHwoFKB0bIlliaRXUu-AwfjBlQVvMSMFnUDe-HGm2_RbwKMvishnQOvidz5xziNPz8GKJzdHWhkX7NcUW5-Ot7BUJITpKhJrqgy7p78mtcTZ09fjD8',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Pending': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Draft': return 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const totals = {
    payroll: 450200,
    allowances: 42150,
    deductions: 15400,
    staffCount: 124,
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AccountantSidebar />
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Staff Payroll & Salaries</h1>
            <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
              <span className="material-icons text-sm">calendar_month</span>
              October 2023 Processing Period
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              <span className="material-icons text-xl">download</span>
              Export Summary
            </button>
            <button
              onClick={handleBulkPayroll}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-icons text-xl">account_balance_wallet</span>
              Process Bulk Payroll
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <span className="material-icons">payments</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+2.4%</span>
            </div>
            <p className="text-sm font-medium text-slate-500">Total Payroll</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${totals.payroll.toLocaleString()}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                <span className="material-icons">add_circle</span>
              </div>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded-full">-1.2%</span>
            </div>
            <p className="text-sm font-medium text-slate-500">Total Allowances</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${totals.allowances.toLocaleString()}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-600">
                <span className="material-icons">do_not_disturb_on</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+0.5%</span>
            </div>
            <p className="text-sm font-medium text-slate-500">Total Deductions</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">${totals.deductions.toLocaleString()}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600">
                <span className="material-icons">groups</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Stable</span>
            </div>
            <p className="text-sm font-medium text-slate-500">Staff Count</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{totals.staffCount}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold border-none focus:ring-2 focus:ring-primary"
            >
              <option>All Departments</option>
              <option>Teaching</option>
              <option>Administration</option>
              <option>Maintenance</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold border-none focus:ring-2 focus:ring-primary"
            >
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
          </div>
          <span className="text-xs font-medium text-slate-400">Showing 1-4 of 124 staff</span>
        </div>

        {/* Employee Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Base Salary</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Allowances</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Deductions</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Net Pay</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {employees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt="" className="w-9 h-9 rounded-full object-cover shadow-sm" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{emp.name}</p>
                          <p className="text-[11px] font-medium text-slate-400">ID: {emp.idNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{emp.role}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">${emp.baseSalary.toFixed(2)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-semibold text-emerald-600">+${emp.allowances.toFixed(2)}</p>
                        <span className="material-icons text-[14px] text-slate-300 cursor-help" title="Allowances breakdown">info</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-rose-600">-${emp.deductions.toFixed(2)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">${emp.netPay.toFixed(2)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${getStatusStyle(emp.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          emp.status === 'Paid' ? 'bg-emerald-500' : emp.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
                        }`}></span>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {emp.status === 'Paid' && (
                        <button onClick={() => handleViewSlip(emp.name)} className="text-primary hover:text-primary/80 font-bold text-xs">View Slip</button>
                      )}
                      {emp.status === 'Pending' && (
                        <button onClick={() => handleProcess(emp.name)} className="text-primary hover:text-primary/80 font-bold text-xs">Process</button>
                      )}
                      {emp.status === 'Draft' && (
                        <button onClick={() => handleEdit(emp.name)} className="text-primary hover:text-primary/80 font-bold text-xs">Edit</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button className="text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1">
              <span className="material-icons text-sm">print</span>
              Print Page Summary
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Page</span>
              <select className="text-xs font-bold rounded border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-1 px-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span className="text-xs font-medium text-slate-500">of 13</span>
            </div>
          </div>
        </div>

        {/* Bulk Payroll Modal */}
        {showBulkModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-icons text-3xl">account_balance_wallet</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Confirm Bulk Payroll</h3>
                    <p className="text-sm text-slate-500 font-medium">Processing for October 2023</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-500">Total Employees</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">124</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-500">Pending Submissions</span>
                    <span className="text-sm font-bold text-amber-600">42</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-500">Net Disbursement</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">$184,200.00</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBulkModal(false)}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      toast.success('Bulk payroll processing started (demo)');
                      setShowBulkModal(false);
                    }}
                    className="flex-1 px-4 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    Confirm & Send Slips
                  </button>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4">
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Confirming this action will generate digital pay slips for all pending employees and notify them via the school portal/email. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffPayroll;