import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const BillingInvoices = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionMenu, setActionMenu] = useState(null); // invoice id
  const itemsPerPage = 5;

  // Mock data
  const [invoices, setInvoices] = useState([
    { id: 'INV-001', school: 'Beacon Heights Academy', amount: 1299, date: '2026-02-01', dueDate: '2026-03-01', status: 'Paid' },
    { id: 'INV-002', school: 'Riverdale Secondary', amount: 799, date: '2026-02-15', dueDate: '2026-03-15', status: 'Pending' },
    { id: 'INV-003', school: 'Westside Primary', amount: 499, date: '2026-01-20', dueDate: '2026-02-20', status: 'Overdue' },
    { id: 'INV-004', school: 'North Hill International', amount: 1999, date: '2026-02-10', dueDate: '2026-03-10', status: 'Paid' },
  ]);

  // Summary stats
  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidCount = invoices.filter(i => i.status === 'Paid').length;
  const pendingCount = invoices.filter(i => i.status === 'Pending').length;
  const overdueCount = invoices.filter(i => i.status === 'Overdue').length;

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.school.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'All' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);

  const handleMarkPaid = (id) => {
    setInvoices(invoices.map(i => i.id === id ? { ...i, status: 'Paid' } : i));
    toast.success('Invoice marked as paid');
    setActionMenu(null);
  };

  const handleSendReminder = (id) => {
    toast.success('Reminder sent');
    setActionMenu(null);
  };

  const handleDownloadPDF = (invoice) => {
    const doc = new jsPDF();
    doc.text('Invoice', 14, 15);
    autoTable(doc, {
      body: [
        ['Invoice ID', invoice.id],
        ['School', invoice.school],
        ['Amount', `$${invoice.amount}`],
        ['Date', invoice.date],
        ['Due Date', invoice.dueDate],
        ['Status', invoice.status],
      ],
    });
    doc.save(`invoice_${invoice.id}.pdf`);
    toast.success('PDF downloaded');
    setActionMenu(null);
  };

  const handleExportCSV = () => {
    const csv = Papa.unparse(filteredInvoices);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'invoices.csv';
    link.click();
    toast.success('CSV exported');
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Invoices Report', 14, 15);
    autoTable(doc, {
      head: [['Invoice ID', 'School', 'Amount', 'Date', 'Due Date', 'Status']],
      body: filteredInvoices.map(i => [i.id, i.school, `$${i.amount}`, i.date, i.dueDate, i.status]),
    });
    doc.save('invoices.pdf');
    toast.success('PDF exported');
  };

  const statusColors = {
    Paid: 'bg-emerald-100 text-emerald-700',
    Pending: 'bg-amber-100 text-amber-700',
    Overdue: 'bg-rose-100 text-rose-700',
  };

  return (
    <SuperAdminLayout pageTitle="Billing & Invoices" pageDescription="Manage invoices and payment status">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm text-slate-500">Total Revenue</p>
          <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm text-slate-500">Paid Invoices</p>
          <p className="text-2xl font-bold text-emerald-600">{paidCount}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm text-slate-500">Pending</p>
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-sm text-slate-500">Overdue</p>
          <p className="text-2xl font-bold text-rose-600">{overdueCount}</p>
        </div>
      </div>

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
                placeholder="Search invoices..."
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 pr-10 py-2 min-w-[140px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
              <span className="material-icons text-sm">add</span>
              Create Invoice
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleExportCSV} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="CSV">
              <span className="material-icons text-sm">table_view</span>
            </button>
            <button onClick={handleExportPDF} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-primary" title="PDF">
              <span className="material-icons text-sm">picture_as_pdf</span>
            </button>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">School</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {currentInvoices.map(inv => (
                <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-medium">{inv.id}</td>
                  <td className="px-6 py-4">{inv.school}</td>
                  <td className="px-6 py-4">${inv.amount}</td>
                  <td className="px-6 py-4">{inv.date}</td>
                  <td className="px-6 py-4">{inv.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => setActionMenu(actionMenu === inv.id ? null : inv.id)}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <span className="material-icons">more_vert</span>
                    </button>
                    {actionMenu === inv.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-10 border border-slate-200 dark:border-slate-700">
                        <div className="py-1">
                          <button
                            onClick={() => handleDownloadPDF(inv)}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                          >
                            Download PDF
                          </button>
                          {inv.status !== 'Paid' && (
                            <>
                              <button
                                onClick={() => handleMarkPaid(inv.id)}
                                className="block px-4 py-2 text-sm text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                              >
                                Mark as Paid
                              </button>
                              <button
                                onClick={() => handleSendReminder(inv.id)}
                                className="block px-4 py-2 text-sm text-primary hover:bg-slate-100 dark:hover:bg-slate-700 w-full text-left"
                              >
                                Send Reminder
                              </button>
                            </>
                          )}
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
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredInvoices.length)} of {filteredInvoices.length} invoices
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
    </SuperAdminLayout>
  );
};

export default BillingInvoices;