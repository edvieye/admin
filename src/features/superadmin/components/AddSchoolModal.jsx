// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import toast from 'react-hot-toast';

// const schoolSchema = z.object({
//   name: z.string().min(1, 'School name is required'),
//   email: z.string().email('Invalid email address'),
//   phone: z.string().min(10, 'Phone number must be at least 10 digits'),
//   address: z.string().min(1, 'Address is required'),
//   plan: z.enum(['Enterprise', 'Pro', 'Basic']),
//   adminName: z.string().min(1, 'Admin name is required'),
//   adminEmail: z.string().email('Invalid admin email'),
//   students: z.number().min(0, 'Number of students must be positive').optional(),
// });

// const AddSchoolModal = ({ isOpen, onClose, onAdd }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: zodResolver(schoolSchema),
//     defaultValues: {
//       plan: 'Basic',
//       students: 0,
//     },
//   });

//   const onSubmit = async (data) => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const newSchool = {
//       id: `SCH-${Math.floor(Math.random() * 10000)}`,
//       ...data,
//       status: 'Pending',
//     };
//     onAdd(newSchool);
//     toast.success('School added successfully!');
//     reset();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
//         <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
//         <div className="inline-block align-bottom bg-white dark:bg-slate-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
//             <h3 className="text-lg font-bold">Add New School</h3>
//             <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
//               <span className="material-icons">close</span>
//             </button>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School Name</label>
//               <input
//                 {...register('name')}
//                 className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//               />
//               {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
//                 <input
//                   {...register('email')}
//                   type="email"
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 />
//                 {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
//                 <input
//                   {...register('phone')}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 />
//                 {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Address</label>
//               <textarea
//                 {...register('address')}
//                 rows="2"
//                 className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//               />
//               {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Plan</label>
//                 <select
//                   {...register('plan')}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 >
//                   <option value="Basic">Basic</option>
//                   <option value="Pro">Pro</option>
//                   <option value="Enterprise">Enterprise</option>
//                 </select>
//                 {errors.plan && <p className="text-xs text-red-500 mt-1">{errors.plan.message}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Students (approx)</label>
//                 <input
//                   {...register('students', { valueAsNumber: true })}
//                   type="number"
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 />
//                 {errors.students && <p className="text-xs text-red-500 mt-1">{errors.students.message}</p>}
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admin Name</label>
//                 <input
//                   {...register('adminName')}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 />
//                 {errors.adminName && <p className="text-xs text-red-500 mt-1">{errors.adminName.message}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admin Email</label>
//                 <input
//                   {...register('adminEmail')}
//                   type="email"
//                   className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
//                 />
//                 {errors.adminEmail && <p className="text-xs text-red-500 mt-1">{errors.adminEmail.message}</p>}
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 pt-4">
//               <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
//                 Cancel
//               </button>
//               <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50">
//                 {isSubmitting ? 'Adding...' : 'Add School'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddSchoolModal;

import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Branch schema
const branchSchema = z.object({
  branchName: z.string().min(1, 'Branch name is required'),
  branchAddress: z.string().min(1, 'Branch address is required'),
  branchPhone: z.string().min(10, 'Branch phone must be at least 10 digits'),
  branchEmail: z.string().email('Invalid branch email').optional().or(z.literal('')),
  branchAdmin: z.string().optional(),
});

// Main school schema with branches array
const schoolSchema = z.object({
  name: z.string().min(1, 'School name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  plan: z.enum(['Enterprise', 'Pro', 'Basic']),
  adminName: z.string().min(1, 'Admin name is required'),
  adminEmail: z.string().email('Invalid admin email'),
  students: z.number().min(0, 'Number of students must be positive').optional(),
  branches: z.array(branchSchema).min(1, 'At least one branch is required'),
});

const AddSchoolModal = ({ isOpen, onClose, onAdd }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schoolSchema),
    defaultValues: {
      plan: 'Basic',
      students: 0,
      branches: [{ branchName: '', branchAddress: '', branchPhone: '', branchEmail: '', branchAdmin: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'branches',
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newSchool = {
      id: `SCH-${Math.floor(Math.random() * 10000)}`,
      ...data,
      status: 'Pending',
    };
    onAdd(newSchool);
    toast.success('School added successfully!');
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white dark:bg-slate-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-lg font-bold">Add New School</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
              <span className="material-icons">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Main School Fields */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School Name</label>
              <input
                {...register('name')}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                <input
                  {...register('phone')}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Address</label>
              <textarea
                {...register('address')}
                rows="2"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Plan</label>
                <select
                  {...register('plan')}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                >
                  <option value="Basic">Basic</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                {errors.plan && <p className="text-xs text-red-500 mt-1">{errors.plan.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Students (approx)</label>
                <input
                  {...register('students', { valueAsNumber: true })}
                  type="number"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
                {errors.students && <p className="text-xs text-red-500 mt-1">{errors.students.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admin Name</label>
                <input
                  {...register('adminName')}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
                {errors.adminName && <p className="text-xs text-red-500 mt-1">{errors.adminName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admin Email</label>
                <input
                  {...register('adminEmail')}
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
                {errors.adminEmail && <p className="text-xs text-red-500 mt-1">{errors.adminEmail.message}</p>}
              </div>
            </div>

            {/* Branches Section */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-md">Branches</h4>
                <button
                  type="button"
                  onClick={() => append({ branchName: '', branchAddress: '', branchPhone: '', branchEmail: '', branchAdmin: '' })}
                  className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  <span className="material-icons text-sm">add</span>
                  Add Branch
                </button>
              </div>
              {errors.branches?.message && (
                <p className="text-xs text-red-500 mb-2">{errors.branches.message}</p>
              )}
              {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg relative">
                  <div className="absolute top-2 right-2">
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-slate-400 hover:text-red-500"
                        title="Remove branch"
                      >
                        <span className="material-icons text-sm">close</span>
                      </button>
                    )}
                  </div>
                  <h5 className="text-sm font-medium mb-3">Branch {index + 1}</h5>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Branch Name</label>
                      <input
                        {...register(`branches.${index}.branchName`)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm"
                      />
                      {errors.branches?.[index]?.branchName && (
                        <p className="text-xs text-red-500 mt-1">{errors.branches[index].branchName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Branch Address</label>
                      <input
                        {...register(`branches.${index}.branchAddress`)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm"
                      />
                      {errors.branches?.[index]?.branchAddress && (
                        <p className="text-xs text-red-500 mt-1">{errors.branches[index].branchAddress.message}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Branch Phone</label>
                        <input
                          {...register(`branches.${index}.branchPhone`)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm"
                        />
                        {errors.branches?.[index]?.branchPhone && (
                          <p className="text-xs text-red-500 mt-1">{errors.branches[index].branchPhone.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Branch Email (optional)</label>
                        <input
                          {...register(`branches.${index}.branchEmail`)}
                          type="email"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm"
                        />
                        {errors.branches?.[index]?.branchEmail && (
                          <p className="text-xs text-red-500 mt-1">{errors.branches[index].branchEmail.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Branch Admin (optional)</label>
                      <input
                        {...register(`branches.${index}.branchAdmin`)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50">
                {isSubmitting ? 'Adding...' : 'Add School'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchoolModal;