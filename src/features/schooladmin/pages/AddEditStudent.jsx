import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../../components/common/Stepper';

const AddEditStudent = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    admissionNo: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    class: '',
    section: '',
    rollNo: '',
    parentId: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    documents: [],
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = ['Basic Info', 'Academic', 'Parent/Guardian', 'Documents'];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-forest-muted rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-forest-muted/30">
              <span className="material-icons text-primary">person</span>
              <h3 className="text-lg font-bold">1. Basic Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Admission Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. ADM-2023-001"
                  value={formData.admissionNo}
                  onChange={(e) => updateField('admissionNo', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Status</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  value={formData.dob}
                  onChange={(e) => updateField('dob', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Gender <span className="text-red-500">*</span></label>
                <div className="flex gap-4 mt-2">
                  {['Male', 'Female', 'Other'].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={formData.gender === g}
                        onChange={(e) => updateField('gender', e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary border-slate-300"
                      />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 2:
        return (
          <section className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-forest-muted rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-forest-muted/30">
              <span className="material-icons text-primary">menu_book</span>
              <h3 className="text-lg font-bold">2. Academic Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Class/Grade <span className="text-red-500">*</span></label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  value={formData.class}
                  onChange={(e) => updateField('class', e.target.value)}
                >
                  <option>Select Class</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Section <span className="text-red-500">*</span></label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  value={formData.section}
                  onChange={(e) => updateField('section', e.target.value)}
                >
                  <option>Select Section</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Roll Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                  placeholder="Enter roll no"
                  value={formData.rollNo}
                  onChange={(e) => updateField('rollNo', e.target.value)}
                />
              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-forest-muted rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-forest-muted/30">
              <div className="flex items-center gap-2">
                <span className="material-icons text-primary">family_restroom</span>
                <h3 className="text-lg font-bold">3. Parent/Guardian Information</h3>
              </div>
              <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1">
                <span className="material-icons text-sm">add</span> Add New Parent
              </button>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Search Existing Parent/Guardian</label>
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                    placeholder="Search by name, email or phone number..."
                  />
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-forest-muted flex items-center justify-center">
                    <span className="material-icons text-slate-600 dark:text-slate-300">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Robert Wilson</p>
                    <p className="text-xs text-slate-500 italic">Father • rob.wilson@email.com</p>
                  </div>
                </div>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg">
                  <span className="material-icons">link_off</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Emergency Contact Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                    value={formData.emergencyContactName}
                    onChange={(e) => updateField('emergencyContactName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Emergency Contact Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-forest-muted bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-white transition-all"
                    value={formData.emergencyContactPhone}
                    onChange={(e) => updateField('emergencyContactPhone', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      case 4:
        return (
          <section className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-forest-muted rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100 dark:border-forest-muted/30">
              <span className="material-icons text-primary">cloud_upload</span>
              <h3 className="text-lg font-bold">4. Document Uploads</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-slate-200 dark:border-forest-muted rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-forest-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary">
                  <span className="material-icons">description</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white">Birth Certificate</p>
                <p className="text-xs text-slate-500 mt-1">PDF, JPG up to 5MB</p>
                <button className="mt-4 px-4 py-2 text-xs font-bold bg-white dark:bg-background-dark border border-slate-200 dark:border-forest-muted rounded-lg group-hover:border-primary group-hover:text-primary">
                  Select File
                </button>
              </div>
              <div className="border-2 border-dashed border-slate-200 dark:border-forest-muted rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-forest-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary">
                  <span className="material-icons">history_edu</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white">Transfer Certificate</p>
                <p className="text-xs text-slate-500 mt-1">Required for Grade 2 and above</p>
                <button className="mt-4 px-4 py-2 text-xs font-bold bg-white dark:bg-background-dark border border-slate-200 dark:border-forest-muted rounded-lg group-hover:border-primary group-hover:text-primary">
                  Select File
                </button>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 pb-24">
      <nav className="flex text-sm text-slate-500 mb-2 gap-2 items-center">
        <span>Dashboard</span>
        <span className="material-icons text-sm">chevron_right</span>
        <span>Students</span>
        <span className="material-icons text-sm">chevron_right</span>
        <span className="text-primary font-medium">Add Student</span>
      </nav>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Add New Student</h2>

      <Stepper steps={steps} currentStep={step} setStep={setStep} />

      <form className="space-y-8 mt-8">
        {renderStep()}

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-forest-muted p-4 shadow-2xl z-40">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate('/students')}
              className="px-6 py-2.5 font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-4">
              <button
                type="button"
                className="px-6 py-2.5 font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-forest-muted rounded-lg hover:bg-slate-50 dark:hover:bg-forest-muted transition-colors"
              >
                Save as Draft
              </button>
              <button
                type="button"
                className="px-8 py-2.5 font-bold text-white bg-primary rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
              >
                <span className="material-icons text-sm">check</span>
                Save Student
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEditStudent;