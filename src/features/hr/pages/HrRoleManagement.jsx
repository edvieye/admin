import React, { useState } from 'react';
import toast from 'react-hot-toast';
import HrPageWrapper from '../components/HrPageWrapper';

const HrRoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Head of Department', staffCount: 8, description: 'Oversees department curriculum and staff', permissions: ['Full Access'] },
    { id: 2, name: 'Senior Teacher', staffCount: 24, description: 'Lead classroom instruction and mentorship', permissions: ['View', 'Edit Grades', 'Attendance'] },
    { id: 3, name: 'Teacher', staffCount: 74, description: 'Regular classroom teaching', permissions: ['View', 'Mark Attendance'] },
    { id: 4, name: 'Admin Assistant', staffCount: 12, description: 'Administrative support', permissions: ['View Schedule', 'Manage Resources'] },
    { id: 5, name: 'Maintenance Staff', staffCount: 18, description: 'Facility upkeep', permissions: ['View Tasks', 'Log Work'] },
  ]);

  const handleAddRole = () => toast.success('Add Role clicked (demo)');
  const handleEditRole = (name) => toast.success(`Edit ${name} (demo)`);
  const handleDeleteRole = (name) => toast.success(`Delete ${name} (demo)`);
  const handleManagePermissions = (name) => toast.success(`Manage permissions for ${name} (demo)`);

  return (
    <HrPageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">Role Management</h2>
            <p className="text-gray-500 text-sm">Define roles and permissions for staff members</p>
          </div>
          <button
            onClick={handleAddRole}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
          >
            <span className="material-icons text-sm">add</span>
            New Role
          </button>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map(role => (
            <div key={role.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{role.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{role.staffCount} staff members</p>
                </div>
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">ID: R-{String(role.id).padStart(3, '0')}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{role.description}</p>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Default Permissions</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {role.permissions.map((perm, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium rounded">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleManagePermissions(role.name)}
                  className="px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  Permissions
                </button>
                <button
                  onClick={() => handleEditRole(role.name)}
                  className="p-1.5 text-slate-400 hover:text-primary transition-colors"
                  title="Edit Role"
                >
                  <span className="material-icons text-sm">edit</span>
                </button>
                <button
                  onClick={() => handleDeleteRole(role.name)}
                  className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                  title="Delete Role"
                >
                  <span className="material-icons text-sm">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Permissions Matrix Hint */}
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-icons text-2xl">admin_panel_settings</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Advanced Permissions</h3>
              <p className="text-sm text-slate-500 mb-4">Configure granular access for each role – view, create, edit, delete for every module.</p>
              <button
                onClick={() => toast.success('Open Permission Matrix (demo)')}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-all"
              >
                Open Permission Matrix
              </button>
            </div>
          </div>
        </div>
      </div>
    </HrPageWrapper>
  );
};

export default HrRoleManagement;