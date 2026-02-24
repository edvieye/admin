import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrStaffDirectory = () => {
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Mock staff data
  const staffData = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3BbIsrXNiqRk2_-T643ofEH80kkFy-iTVGuZzCsj4Ame4dHolHnREdS3MkufzKGao1mm2bAQ-_Dc7pFucOz3AgyxXPeBICgqgbqp3zpJztP2C7ap37gE8MqrDRBDSYqEID4z1LRtfe_ysEQqzcaRZp2hddWXf7f4-zcdB3Zl3KEs_8JErdXHXPgVLbU-bNy0SIXndmY3qkWkDjswRgrEi4yBQ7HRcP3p3gFxn54ypZiq0g82W6HwsUm9gbQVuDRzsTLiqnB2TOLc',
      department: 'Mathematics',
      role: 'Head of Department',
      status: 'Active',
      email: 's.jenkins@school.edu',
      phone: '+1 234-567-8901',
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHgDxrhnxAQoB3cq5mDQ2YKXcmydhPgM0LdkGurnz6JsCLzdA9w6UJutD3TfNGQZNPBkkb9H3Iq5S-Y7dfW8oJnZn16dk7ECttDC0HZSHBhgFjymufDOvfwBPXWl7jynMUPnsajYvFFgJsW_ZKxeYYXdHh4rpDo4kAMNdIjUKM4K8kVCLylua1e1f3MCHEMZ2GgU0lIm1icSOGrCdmqY8NWXMosPQfDExaiMllkTmGi4GZI3ve9DjTZf451TVOsFvoNAFwTrPA60M',
      department: 'Physics',
      role: 'Senior Teacher',
      status: 'Active',
      email: 'm.chen@school.edu',
      phone: '+1 234-567-8902',
    },
    {
      id: 3,
      name: 'Emily Watson',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ZP8tyn_LyBrRM5ty0moMReOX04m8obJybMPM448VxPqoTppmhBmDVWEGxzZ0o6ThfYhffuC_mPHJbhZJ6Pgt_F3T5TlqIXCwsMnNz9NeYWN58Mkircpp2vfOUnTZXyjYYuWX4HF84v8sU3R1etdQoS6wwPsGxdHcM-kAN4I1n9wpVN1P8TjaJUJ-lFvW2WH4RCLJtrV-wVLfHCYGrwlqcooomQ73yyYjIhiIdYJxTUoOKqS6dGrBC5_O1hxp_a1fFoWYnJZF1g',
      department: 'English',
      role: 'Teacher',
      status: 'On Leave',
      email: 'e.watson@school.edu',
      phone: '+1 234-567-8903',
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLujj2BzRHJ2cueChkFramwa_gwbcOC0a-90YZFEPVXE17RYvp_xdzAA5D4B4JAKWHJn3sBaW2lcSLwqib6iux-UE7G1QbdVmdKSnFAPCvwt78I_w8J3DCnBmVeva0_kWutCw2YcdrtuS2eCCNuwhAvzLYpcGrieUond_yI5cW08LIxGB-x_FPhVAs4JUP5oqsooS51ZUMLsfhd0qy5HIEvcnzhIYW8COWQhLeKd4hjUzb1Y7xPKDojoPYJ-MiP3EU9BIrwOwbnNQ',
      department: 'Physical Ed',
      role: 'Coach',
      status: 'Active',
      email: 'd.kim@school.edu',
      phone: '+1 234-567-8904',
    },
    {
      id: 5,
      name: 'Linda Gray',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBga45pyiflq3YHXh_DAOiTPAPRJ10ScRsXx0qzo33ALdFi7iwxuO4iui6IGiw1pZxGGAhk9WFNy6-19lU2kDa9Og6f_qepf0U20z8zYRIAVpLR6EySKEK4rYn8OoAFNCc4Gu7nrKY756pI3LpJ7AHfVhccUxLUj4CwFFuENctRvsnxQXz9HY13d3sLKErl9hdO7JkEfODjOZ30-6LqrRtmDbPYOBl6-KHV35-txpWhj0fJq_eMh1HO9ap_CWjJwKExfEddHWh1ae4',
      department: 'History',
      role: 'Teacher',
      status: 'Active',
      email: 'l.gray@school.edu',
      phone: '+1 234-567-8905',
    },
  ];

  // Unique departments for filter
  const departments = ['All', ...new Set(staffData.map(s => s.department))];
  const statuses = ['All', 'Active', 'On Leave', 'Inactive'];

  // Filter staff
  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(search.toLowerCase()) ||
                         staff.email.toLowerCase().includes(search.toLowerCase()) ||
                         staff.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === 'All' || staff.department === filterDept;
    const matchesStatus = filterStatus === 'All' || staff.status === filterStatus;
    return matchesSearch && matchesDept && matchesStatus;
  });

  const handleAddStaff = () => toast.success('Add Staff clicked (demo)');
  const handleEdit = (name) => toast.success(`Edit ${name} (demo)`);
  const handleView = (name) => toast.success(`View ${name} (demo)`);
  const handleDeactivate = (name) => toast.success(`Deactivate ${name} (demo)`);

  return (
    <HrPageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">Staff Directory</h2>
            <p className="text-gray-500 text-sm">Manage all teaching and non-teaching staff</p>
          </div>
          <button
            onClick={handleAddStaff}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
          >
            <span className="material-icons text-sm">person_add</span>
            Add Staff
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search by name, email, role..."
            />
          </div>
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* Staff Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Staff</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStaff.map(staff => (
                  <tr key={staff.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={staff.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{staff.name}</p>
                          <p className="text-xs text-slate-500">ID: ST-{String(staff.id).padStart(4, '0')}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{staff.department}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{staff.role}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        staff.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        staff.status === 'On Leave' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          staff.status === 'Active' ? 'bg-emerald-500' :
                          staff.status === 'On Leave' ? 'bg-amber-500' : 'bg-slate-500'
                        }`}></span>
                        {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs">
                        <p className="font-medium text-slate-600 dark:text-slate-400">{staff.email}</p>
                        <p className="text-slate-400 mt-0.5">{staff.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => handleView(staff.name)}
                        className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                        title="View"
                      >
                        <span className="material-icons text-sm">visibility</span>
                      </button>
                      <button
                        onClick={() => handleEdit(staff.name)}
                        className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-icons text-sm">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeactivate(staff.name)}
                        className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                        title="Deactivate"
                      >
                        <span className="material-icons text-sm">block</span>
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredStaff.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No staff found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination (static) */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500">Showing <span className="font-medium">1-{filteredStaff.length}</span> of <span className="font-medium">{staffData.length}</span> staff</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 rounded text-xs hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 border border-slate-200 rounded text-xs hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </HrPageWrapper>
  );
};

export default HrStaffDirectory;