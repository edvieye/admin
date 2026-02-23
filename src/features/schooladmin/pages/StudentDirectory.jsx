import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../components/common/Table';
import SearchBar from '../../../components/common/SearchBar';
import FilterSelect from '../../../components/common/FilterSelect';
import Pagination from '../../../components/common/Pagination';
import { getInitials } from '../../../utils/formatters';

const StudentDirectory = () => {
  const [filters, setFilters] = useState({ search: '', class: '', status: '' });
  // Mock data – replace with useStudents hook
  const students = [
    { id: 1, admissionNo: 'ADM-2024-001', firstName: 'John', lastName: 'Doe', class: 'Grade 10', section: 'A', rollNo: 12, parentName: 'Robert Doe', status: 'Active' },
    { id: 2, admissionNo: 'ADM-2024-042', firstName: 'Sarah', lastName: 'Miller', class: 'Grade 10', section: 'B', rollNo: 8, parentName: 'Diane Miller', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPM544MGlgHfPyJHMojQbRTVrwVE6aHT63BMCWWoEvgTKpkIXYaB4XnyJonNFZJFOKGHmITdaG-08Bdnhx0NwBUA2G70dupR6dp_ylNXmAF4hW50EJkLoghp8ZgmHQoziu9Nc77LJogsdNDo9qtv9DwUSUCNPdov7sC6cjgYsm1EPyBkxHdftwCV5FBv5dByMNleEFtAaPxDxJ4tlyY-ra5g-uiEtqNhsFxefM7YE7-ghPquBxNtioFDzoNn7V2j7mCkidgJmyQC0' },
    { id: 3, admissionNo: 'ADM-2024-015', firstName: 'Michael', lastName: 'Chen', class: 'Grade 12', section: 'A', rollNo: 24, parentName: 'William Chen', status: 'Inactive' },
    { id: 4, admissionNo: 'ADM-2024-089', firstName: 'David', lastName: 'Wilson', class: 'Grade 11', section: 'C', rollNo: 15, parentName: 'Linda Wilson', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDKWwcSGEplrmui4CgabCg44h4z1j_bQfOHvi0CfQ5zZRmHB5Ek-etQh6UYDtqxR2KJZvX5iVJdmwfiEE6YRyN8544LmLiy-EBU4xwnZTYb2d9vvlAPBTcsbT882Flc4iUHaAvAhXK5tBFFw7gLKyjnRZ0njAN4Bvnxt4hBGDZbLCQP69pmIDRT__ASEOdhuzC1Yu2KRLaReS_phRkySONImbto-de_dji4oh2RLgoqVIqsi0ngWqMkcgkI6uz_nB2SO1cZgZLOh4' },
    { id: 5, admissionNo: 'ADM-2024-102', firstName: 'Emily', lastName: 'Parker', class: 'Grade 10', section: 'A', rollNo: 31, parentName: 'Gregory Parker', status: 'Active' },
  ];

  const columns = [
    {
      header: 'Admission No',
      accessor: 'admissionNo',
      cell: (value) => <span className="font-mono text-sm">{value}</span>,
    },
    {
      header: 'Student Name',
      accessor: (row) => (
        <div className="flex items-center gap-3">
          {row.avatar ? (
            <img src={row.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
              {getInitials(row.firstName, row.lastName)}
            </div>
          )}
          <span className="font-medium">{row.firstName} {row.lastName}</span>
        </div>
      ),
    },
    { header: 'Class', accessor: (row) => `${row.class} - ${row.section}` },
    { header: 'Roll No', accessor: 'rollNo' },
    { header: 'Parent Name', accessor: 'parentName' },
    {
      header: 'Status',
      accessor: (row) => (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
          row.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-slate-500/20 text-slate-400'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Active' ? 'bg-primary' : 'bg-slate-400'}`}></span>
          {row.status}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessor: (row) => (
        <Link to={`/students/${row.id}`} className="text-slate-400 hover:text-primary transition-colors">
          <span className="material-icons">more_vert</span>
        </Link>
      ),
      align: 'right',
    },
  ];

  const classOptions = ['All Classes', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const statusOptions = ['Status', 'Active', 'Inactive'];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Student Directory</h1>
          <p className="text-sm text-slate-500">Manage student records and admissions</p>
        </div>
        <Link
          to="/students/add"
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="material-icons">add</span> Add Student
        </Link>
      </div>

      <div className="bg-white dark:bg-primary/5 rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4">
        <SearchBar
          value={filters.search}
          onChange={(val) => setFilters({ ...filters, search: val })}
          placeholder="Search by name, ID or parent..."
        />
        <FilterSelect
          options={classOptions}
          value={filters.class}
          onChange={(val) => setFilters({ ...filters, class: val })}
        />
        <FilterSelect
          options={statusOptions}
          value={filters.status}
          onChange={(val) => setFilters({ ...filters, status: val })}
        />
        <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all">
          <span className="material-icons">filter_list</span>
        </button>
      </div>

      <Table columns={columns} data={students} />
      <Pagination currentPage={1} totalPages={50} onPageChange={() => {}} />
    </div>
  );
};

export default StudentDirectory;