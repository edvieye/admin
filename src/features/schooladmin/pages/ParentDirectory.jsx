import React, { useState } from 'react';
import Table from '../../../components/common/Table';
import SearchBar from '../../../components/common/SearchBar';
import FilterSelect from '../../../components/common/FilterSelect';
import Pagination from '../../../components/common/Pagination';

const ParentDirectory = () => {
  const [filters, setFilters] = useState({ search: '', status: '', grade: '' });

  // Mock data
  const parents = [
    {
      id: 'PAR-8293',
      name: 'Sarah Jenkins',
      email: 's.jenkins@email.com',
      phone: '+1 (555) 012-3456',
      students: ['Liam Jenkins (G5)', 'Ava Jenkins (G2)'],
      status: 'Active',
    },
    {
      id: 'PAR-9104',
      name: 'Robert Wilson',
      email: 'robert.w@cloud.com',
      phone: '+1 (555) 098-7654',
      students: ['Emma Wilson (G8)'],
      status: 'Pending',
    },
    {
      id: 'PAR-7721',
      name: 'David Miller',
      email: 'dmiller@corp.com',
      phone: '+1 (555) 234-5678',
      students: ['Sophie Miller (G10)'],
      status: 'Active',
    },
    {
      id: 'PAR-6602',
      name: 'Elena Rodriguez',
      email: 'e.rodriguez@domain.io',
      phone: '+1 (555) 777-8899',
      students: ['Mateo Rod (G1)'],
      status: 'Pending',
    },
  ];

  const columns = [
    {
      header: 'Parent Identity',
      accessor: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 dark:bg-background-dark border border-slate-200 dark:border-border-dark">
            <span className="material-icons text-slate-400 text-xl">person</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{row.name}</p>
            <p className="text-xs text-slate-500">ID: {row.id}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Contact Info',
      accessor: (row) => (
        <div className="text-xs space-y-1">
          <p className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><span className="material-icons text-[14px]">email</span> {row.email}</p>
          <p className="text-slate-500 flex items-center gap-1.5"><span className="material-icons text-[14px]">phone</span> {row.phone}</p>
        </div>
      ),
    },
    {
      header: 'Linked Students',
      accessor: (row) => (
        <div className="flex flex-wrap gap-2">
          {row.students.map((s, i) => (
            <span key={i} className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tight">{s}</span>
          ))}
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: (row) => (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
          row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          {row.status === 'Active' ? 'Active' : 'Pending activation'}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessor: (row) => (
        <div className="flex items-center justify-end gap-2">
          {row.status === 'Pending' && (
            <button className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded hover:bg-primary/30 transition-all">
              Resend OTP
            </button>
          )}
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      ),
      align: 'right',
    },
  ];

  const statusOptions = ['Status: All', 'Active', 'Pending'];
  const gradeOptions = ['Grade Level: All', 'Elementary', 'Middle School', 'High School'];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Parent Directory</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage parent accounts, student links, and digital activation.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold shadow-lg shadow-primary/20 transition-all">
          <span className="material-icons text-lg">person_add</span>
          Invite Parent
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-icons">group</span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Parents</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">1,284</p>
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
            <span className="material-icons">pending_actions</span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pending Invites</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">42</p>
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-icons">check_circle</span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Today</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">912</p>
          </div>
        </div>
      </div>

      {/* Table Controls */}
      <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-border-dark flex flex-wrap items-center gap-4 bg-slate-50/50 dark:bg-white/5">
          <SearchBar
            value={filters.search}
            onChange={(val) => setFilters({ ...filters, search: val })}
            placeholder="Search by name, email or student..."
          />
          <FilterSelect
            options={statusOptions}
            value={filters.status}
            onChange={(val) => setFilters({ ...filters, status: val })}
          />
          <FilterSelect
            options={gradeOptions}
            value={filters.grade}
            onChange={(val) => setFilters({ ...filters, grade: val })}
          />
          <button className="p-2 border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-100 dark:hover:bg-background-dark transition-colors">
            <span className="material-icons text-slate-600 dark:text-slate-400">filter_list</span>
          </button>
        </div>

        <Table columns={columns} data={parents} />
        <Pagination currentPage={1} totalPages={129} onPageChange={() => {}} />
      </div>
    </div>
  );
};

export default ParentDirectory;