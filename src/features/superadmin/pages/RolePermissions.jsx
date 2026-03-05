import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';

const RolePermissions = () => {
  const [search, setSearch] = useState('');
  const [roles, setRoles] = useState([
    { id: 'r1', name: 'Super Admin', description: 'Full system access', permissions: ['all'] },
    { id: 'r2', name: 'School Admin', description: 'Manage school, students, staff', permissions: ['manage_school', 'manage_students', 'manage_staff'] },
    { id: 'r3', name: 'Accountant', description: 'Manage finances', permissions: ['view_invoices', 'process_payments'] },
    { id: 'r4', name: 'HR', description: 'Manage staff, leave', permissions: ['manage_staff', 'approve_leave'] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', permissions: [] });

  const availablePermissions = [
    'manage_school',
    'manage_students',
    'manage_staff',
    'view_invoices',
    'process_payments',
    'approve_leave',
    'manage_users',
    'view_audit_logs',
    'manage_billing',
    'manage_roles',
  ];

  const filteredRoles = roles.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase()));

  const handleEdit = (role) => {
    setEditingRole(role);
    setFormData({ name: role.name, description: role.description, permissions: role.permissions });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      setRoles(roles.filter(r => r.id !== id));
      toast.success('Role deleted');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRole) {
      setRoles(roles.map(r => r.id === editingRole.id ? { ...r, ...formData } : r));
      toast.success('Role updated');
    } else {
      setRoles([...roles, { id: `r${Date.now()}`, ...formData }]);
      toast.success('Role created');
    }
    setShowModal(false);
    setEditingRole(null);
    setFormData({ name: '', description: '', permissions: [] });
  };

  const togglePermission = (perm) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter(p => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  return (
    <SuperAdminLayout pageTitle="Role & Permissions" pageDescription="Manage roles and their permissions">
      {/* Header with Search and Create */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input
            type="text"
            placeholder="Search roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          <span className="material-icons text-sm">add</span>
          Create New Role
        </button>
      </div>

      {/* Roles Cards (for better visual) or keep table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRoles.map(role => (
          <div key={role.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">{role.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{role.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(role)} className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons text-sm">edit</span>
                </button>
                <button onClick={() => handleDelete(role.id)} className="text-slate-400 hover:text-red-600 transition-colors">
                  <span className="material-icons text-sm">delete</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {role.permissions.length === 1 && role.permissions[0] === 'all' ? (
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">All permissions</span>
              ) : (
                role.permissions.map(p => (
                  <span key={p} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                    {p.replace(/_/g, ' ')}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal (unchanged) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">{editingRole ? 'Edit Role' : 'Create New Role'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                  <input
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Permissions</label>
                  <div className="grid grid-cols-2 gap-2">
                    {availablePermissions.map(perm => (
                      <label key={perm} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={formData.permissions.includes(perm)}
                          onChange={() => togglePermission(perm)}
                          className="rounded text-primary focus:ring-primary"
                        />
                        {perm.replace(/_/g, ' ')}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SuperAdminLayout>
  );
};

export default RolePermissions;