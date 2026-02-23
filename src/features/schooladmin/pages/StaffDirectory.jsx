import React, { useState } from 'react';
import Table from '../../../components/common/Table';
import SearchBar from '../../../components/common/SearchBar';
import Pagination from '../../../components/common/Pagination';

const StaffDirectory = () => {
  const [search, setSearch] = useState('');

  const staff = [
    { id: 'EMP-2024-042', name: 'Elena Rodriguez', email: 'elena.r@school.edu', designation: 'Head of Mathematics', joiningDate: 'Aug 12, 2021', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGjlp1cSIBAG3NAFOm23jRffiEaoxv02FVXpHtjz9MfMjcLFhTYGe7heZiWhLX6yloE8c7VMX_JTFGawqgikcTdcMA9n9GSJlZBWUno8AH3pifW0kgOHVAQ-EMKMQ8YxQbGaDXvR-zLoVErsKt6y80efVbhv_3qnBokWYY2H9qe_OkEGig8LEIZ5aL5hYft9L6LGGf0glNbuX1MLrJPFDTQQXuTGWKk68LRW-CMBp30kgikXDLMxf1E4aQ024_eu_RkOgFozP9i4s' },
    { id: 'EMP-2024-015', name: 'Marcus Sterling', email: 'm.sterling@school.edu', designation: 'Senior Accountant', joiningDate: 'Jan 05, 2020', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD57I3PUfGysbf8WMU_8oDHRQl5reGQpQZfLFWxZm2wV0LLpxLsTKlprKhGO_HAen2wP24JYuM5eZJCbwn05zJAFo85lOtz3GOtb-uLXdPZ7PsseD4TvMD0dYKi0loSGPbypTmhOcD2_7nng150cywiPUR3yPLj1fqQGwK_036ZLb1S5O6_minMs5leigwOi_iM-CdxLKxZuKKcw9MsE523e76CGx1unZdN4HA8pUnfddD83yjkotGWS6sXHLBsH4H-ojMS2mY_lSA' },
    { id: 'EMP-2024-118', name: 'David Chen', email: 'd.chen@school.edu', designation: 'History Teacher', joiningDate: 'Mar 15, 2023', status: 'On Leave', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsKw4MUFgU0qrWBcA2fRp08XEgXXad2EY_drhmhBXz4Hw7XWHAqvtY1yrDXMwfrRbBXnBad_J0KUWAoOyBO6cSo2JrPq4RfT3ZJPfPsg48hC7z4qr0m-5fCeHf4bM8k3qIYgidPNIXFHlTrouo0S5iUuQRfiPOtd1BOksUkbNkKP-clI4eIMkr_owLd7H5zuLMVswVU8e9GCKrya9UbPviXOjVMguB1UMDSOtK9bz7zXWXgaQE-teouiSPqU-TKVMG0Xmcox5Xsjc' },
    { id: 'EMP-2024-002', name: 'Sarah Jenkins', email: 's.jenkins@school.edu', designation: 'HR Administrator', joiningDate: 'Sep 10, 2018', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv8V-OARsPVTlOJUy86UinF-s59BrH3-UbYIcOdEnqITgUNrtrnpfwBzDBEa74HKw8UPnr4V_9NG9AOOe3sCegvc0i-k_uPxMnxDfqYpcRH0T0C5FArhYeEVaSJ2yEh19omPlBlfUl1b2TF3FxwsT2c-oZh9sfsH-CjSJg1hr7ByWgPqzJaOfilo8_-bAUf0BySfoSlWHrRYJYdjoiDMJsJ1lPmR5kVasIP0wkePwqxLrr8J5yyHf04XDQ5cs_aqnO5to1ltYu1Fo' },
    { id: 'EMP-2024-204', name: 'James Wilson', email: 'j.wilson@school.edu', designation: 'IT Specialist', joiningDate: 'Nov 22, 2023', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv1zafDOOJrqkGYy_B6okJIexGcUA_bkMdYba562qSoYzRMcC_4Hr8cDsceQtCrVJAtAJcIdts4Gqm6jeNGgwsE-SCQ1BykSjQHP04XD6RYE9KCL6u7Qr56Q7FWGnnxudTEQ8jl1NCS5PV-FPFP4uP0tRXuNf5ewYZvJpM_uIzHeOGUjVFBMcIr94IaaAcGTMc-_IrbJFTLV85bnoJtFnm0X7z4aDoGOnrta5a67xcPuiTrn6B5weIQ1vckE3Edmq8URhSzEwLVPA' },
  ];

  const columns = [
    {
      header: 'Employee Details',
      accessor: (row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-sm">{row.name}</p>
            <p className="text-xs text-slate-500">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Employee ID',
      accessor: (row) => <code className="text-xs bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded text-primary">#{row.id}</code>,
    },
    { header: 'Designation', accessor: 'designation' },
    { header: 'Joining Date', accessor: 'joiningDate' },
    {
      header: 'Status',
      accessor: (row) => (
        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
          row.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-amber-500/20 text-amber-500'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Active' ? 'bg-primary' : 'bg-amber-500'}`}></span>
          {row.status}
        </span>
      ),
    },
    {
      header: 'Actions',
      accessor: () => (
        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons text-sm">visibility</span>
          </button>
          <button className="p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons text-sm">edit</span>
          </button>
          <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-icons text-sm">delete_outline</span>
          </button>
        </div>
      ),
      align: 'right',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">Staff & Faculty Directory</h1>
          <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">412 Total Employees</span>
        </div>
        <div className="flex items-center gap-3">
          <SearchBar value={search} onChange={setSearch} placeholder="Search by name, ID or role..." />
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
            <span className="material-icons text-lg">folder_open</span> Manage Documents
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition-opacity">
            <span className="material-icons text-lg">person_add</span> Add Staff
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
        <button className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold text-sm whitespace-nowrap">All Staff</button>
        <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm whitespace-nowrap">Teachers</button>
        <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm whitespace-nowrap">Accountants</button>
        <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm whitespace-nowrap">Administration</button>
        <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm whitespace-nowrap">Support Staff</button>
      </div>

      <Table columns={columns} data={staff} />
      <Pagination currentPage={1} totalPages={83} onPageChange={() => {}} />
    </div>
  );
};

export default StaffDirectory;