import React, { useState } from "react";

const StaffModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    hiringDate: "",
    salary: "",
    qualification: "",
    experience: "",
    address: "",
    emergencyContact: "",
    employmentType: "Full-time",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Staff Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Add Staff</h2>
          <button onClick={onClose}>
            <span className="material-icons text-slate-500">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input name="employeeId" placeholder="Employee ID" className="input" onChange={handleChange} />
          <input name="firstName" placeholder="First Name" className="input" required onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" className="input" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="input" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" className="input" onChange={handleChange} />
          <input name="designation" placeholder="Designation (e.g. Lab Assistant)" className="input" onChange={handleChange} />
          <input name="department" placeholder="Department (e.g. Admin, HR, Library)" className="input" onChange={handleChange} />
          <input type="date" name="hiringDate" className="input" onChange={handleChange} />
          <input type="number" name="salary" placeholder="Monthly Salary" className="input" onChange={handleChange} />
          <input name="qualification" placeholder="Qualification" className="input" onChange={handleChange} />
          <input name="experience" placeholder="Experience (e.g. 2 Years)" className="input" onChange={handleChange} />

          <select name="employmentType" className="input" onChange={handleChange}>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>

          <select name="status" className="input" onChange={handleChange}>
            <option>Active</option>
            <option>On Leave</option>
            <option>Inactive</option>
          </select>

          <textarea name="address" placeholder="Full Address" className="input col-span-1 md:col-span-2" onChange={handleChange} />

          <input name="emergencyContact" placeholder="Emergency Contact" className="input" onChange={handleChange} />

          <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2 rounded-lg bg-primary text-white">
              Save Staff
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default StaffModal;