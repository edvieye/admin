// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useDispatch } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import Input from '../../../components/common/Input';
// import Button from '../../../components/common/Button';
// import { loginAPI } from '../authAPI';
// import { setCredentials, setLoading, setError } from '../authSlice';

// // Zod schema
// const loginSchema = z.object({
//   email: z.string().min(1, 'Email/Username is required').email('Invalid email format'),
//   password: z.string().min(1, 'Password is required'),
//   role: z.enum(['superadmin', 'schooladmin', 'accountant', 'hr'], {
//     required_error: 'Please select a role',
//   }),
//   remember: z.boolean().optional(),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [serverError, setServerError] = useState('');

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     watch,
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       role: 'superadmin', // default selected
//       remember: false,
//     },
//   });

//   const selectedRole = watch('role');

//   const onSubmit = async (data) => {
//     setServerError('');
//     dispatch(setLoading(true));
//     try {
//       const response = await loginAPI(data.email, data.password, data.role);
//       dispatch(setCredentials({ user: response.user, token: response.token, role: data.role }));
//       // Redirect based on role
//       switch (data.role) {
//         case 'superadmin':
//           navigate('/dashboard/super-admin');
//           break;
//         case 'schooladmin':
//           navigate('/dashboard/school-admin');
//           break;
//         case 'accountant':
//           navigate('/dashboard/accountant');
//           break;
//         case 'hr':
//           navigate('/dashboard/hr');
//           break;
//         default:
//           navigate('/dashboard');
//       }
//     } catch (error) {
//       setServerError(error.message);
//       dispatch(setError(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
//       <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
//         {/* Left branding (hidden on mobile) */}
//         <div className="hidden md:flex md:w-5/12 bg-primary p-12 flex-col justify-between relative overflow-hidden">
//           <div className="relative z-10">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-lg">
//                 <span className="material-icons text-2xl">school</span>
//               </div>
//               <span className="text-white text-xl font-bold tracking-tight">EduNexus</span>
//             </div>
//             <h1 className="text-3xl font-bold text-white leading-tight mb-4">Unified School Ecosystem</h1>
//             <p className="text-blue-100 text-sm leading-relaxed">
//               Access all administrative modules from a single secure gateway. Manage students, finances, and personnel with ease.
//             </p>
//           </div>
//           <div className="relative z-10 mt-auto">
//             <div className="flex items-center gap-2 text-blue-100 text-xs mb-4">
//               <span className="material-icons text-sm">verified_user</span>
//               <span>ISO 27001 Certified Security</span>
//             </div>
//             <p className="text-blue-200 text-xs">© 2024 EduNexus Systems. All rights reserved.</p>
//           </div>
//           {/* Background pattern */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
//         </div>

//         {/* Right side: form */}
//         <div className="flex-1 p-8 md:p-12">
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Administrator Login</h2>
//             <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Please enter your credentials and select your portal.</p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Credentials */}
//             <div className="space-y-4">
//               <Input
//                 label="Email or Username"
//                 icon="alternate_email"
//                 placeholder="admin@school.edu"
//                 {...register('email')}
//                 error={errors.email?.message}
//               />
//               <div>
//                 <div className="flex justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
//                   <Link to="/forgot-password" className="text-primary text-xs font-medium hover:underline">
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <Input
//                   type="password"
//                   icon="lock_outline"
//                   placeholder="••••••••"
//                   {...register('password')}
//                   error={errors.password?.message}
//                 />
//               </div>
//             </div>

//             {/* Role selection */}
//             <div className="pt-2">
//               <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
//                 Select Your Destination Portal
//               </span>
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//                 {['superadmin', 'schooladmin', 'accountant', 'hr'].map((role) => (
//                   <label key={role} className="cursor-pointer group">
//                     <input
//                       type="radio"
//                       value={role}
//                       {...register('role')}
//                       className="peer hidden"
//                     />
//                     <div
//                       className={`h-full flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all hover:border-primary/50 ${
//                         selectedRole === role
//                           ? 'border-primary bg-primary/5 dark:bg-primary/10'
//                           : 'border-slate-100 dark:border-slate-800'
//                       }`}
//                     >
//                       <span
//                         className={`material-icons mb-2 ${
//                           selectedRole === role ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
//                         }`}
//                       >
//                         {role === 'superadmin' && 'shield'}
//                         {role === 'schooladmin' && 'account_balance'}
//                         {role === 'accountant' && 'payments'}
//                         {role === 'hr' && 'groups'}
//                       </span>
//                       <span
//                         className={`text-[10px] font-semibold text-center ${
//                           selectedRole === role
//                             ? 'text-primary'
//                             : 'text-slate-600 dark:text-slate-400'
//                         }`}
//                       >
//                         {role === 'superadmin' && 'Super Admin'}
//                         {role === 'schooladmin' && 'School Admin'}
//                         {role === 'accountant' && 'Accountant'}
//                         {role === 'hr' && 'HR & Staff'}
//                       </span>
//                     </div>
//                   </label>
//                 ))}
//               </div>
//               {errors.role && <p className="text-xs text-red-500 mt-2">{errors.role.message}</p>}
//             </div>

//             {/* Remember me */}
//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary dark:bg-slate-800 dark:border-slate-700"
//                 {...register('remember')}
//               />
//               <label htmlFor="remember" className="text-xs text-slate-600 dark:text-slate-400">
//                 Remember session for 30 days
//               </label>
//             </div>

//             {serverError && (
//               <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
//                 <p className="text-xs text-red-600">{serverError}</p>
//               </div>
//             )}

//             <Button type="submit" isLoading={isSubmitting}>
//               <span>Sign In to Dashboard</span>
//               <span className="material-icons text-sm">arrow_forward</span>
//             </Button>
//           </form>

//           <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <div className="flex gap-4">
//               <a href="#" className="text-[10px] text-slate-400 hover:text-primary">Privacy Policy</a>
//               <a href="#" className="text-[10px] text-slate-400 hover:text-primary">Terms of Service</a>
//             </div>
//             <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
//               <span className="material-icons text-sm">help_outline</span>
//               <span>Need Help? Contact IT</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../authSlice';
import { loginAPI } from '../authapi';
import { useNavigate } from 'react-router-dom';

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";


// Zod schema
const loginSchema = z.object({
  email: z.string().min(1, 'Email/Username is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
  role: z.enum(['superadmin', 'schooladmin', 'accountant', 'hr'], {
    required_error: 'Please select a role',
  }),
  remember: z.boolean().optional(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: 'superadmin',
      remember: false,
    },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data) => {
  setServerError('');
  try {
    const response = await loginAPI(data.email, data.password, data.role);

    dispatch(
      setCredentials({
        user: response.user,
        token: response.token,
        role: response.user.role,
      })
    );

    // 🔥 Navigate based on role
    if (response.user.role === 'schooladmin') {
      navigate('/');
    } else if (response.user.role === 'superadmin') {
      navigate('/dashboard/super-admin');
    } else if (response.user.role === 'hr') {
      navigate('/dashboard/hr');
    } else if (response.user.role === 'accountant') {
      navigate('/dashboard/accountant');
    } 

  } catch (error) {
    setServerError(error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {/* Left branding (hidden on mobile) */}
        <div className="hidden md:flex md:w-5/12 bg-primary p-12 flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-lg">
                <span className="material-icons text-2xl">school</span>
              </div>
              <span className="text-white text-xl font-bold tracking-tight">EduNexus</span>
            </div>
            <h1 className="text-3xl font-bold text-white leading-tight mb-4">Unified School Ecosystem</h1>
            <p className="text-blue-100 text-sm leading-relaxed">
              Access all administrative modules from a single secure gateway. Manage students, finances, and personnel with ease.
            </p>
          </div>
          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-2 text-blue-100 text-xs mb-4">
              <span className="material-icons text-sm">verified_user</span>
              <span>ISO 27001 Certified Security</span>
            </div>
            <p className="text-blue-200 text-xs">© 2024 EduNexus Systems. All rights reserved.</p>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
        </div>

        {/* Right side: form */}
        <div className="flex-1 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Administrator Login</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Please enter your credentials and select your portal.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Credentials */}
            <div className="space-y-4">
              <Input
                label="Email or Username"
                icon="alternate_email"
                placeholder="admin@school.edu"
                {...register('email')}
                error={errors.email?.message}
              />
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                  <Link to="/forgot-password" className="text-primary text-xs font-medium hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  icon="lock_outline"
                  placeholder="••••••••"
                  {...register('password')}
                  error={errors.password?.message}
                />
              </div>
            </div>

            {/* Role selection */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Select Your Destination Portal
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {['superadmin', 'schooladmin', 'accountant', 'hr'].map((role) => (
                  <label key={role} className="cursor-pointer group">
                    <input
                      type="radio"
                      value={role}
                      {...register('role')}
                      className="peer hidden"
                    />
                    <div
                      className={`h-full flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all hover:border-primary/50 ${
                        selectedRole === role
                          ? 'border-primary bg-primary/5 dark:bg-primary/10'
                          : 'border-slate-100 dark:border-slate-800'
                      }`}
                    >
                      <span
                        className={`material-icons mb-2 ${
                          selectedRole === role ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
                        }`}
                      >
                        {role === 'superadmin' && 'shield'}
                        {role === 'schooladmin' && 'account_balance'}
                        {role === 'accountant' && 'payments'}
                        {role === 'hr' && 'groups'}
                      </span>
                      <span
                        className={`text-[10px] font-semibold text-center ${
                          selectedRole === role
                            ? 'text-primary'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {role === 'superadmin' && 'Super Admin'}
                        {role === 'schooladmin' && 'School Admin'}
                        {role === 'accountant' && 'Accountant'}
                        {role === 'hr' && 'HR & Staff'}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.role && <p className="text-xs text-red-500 mt-2">{errors.role.message}</p>}
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary dark:bg-slate-800 dark:border-slate-700"
                {...register('remember')}
              />
              <label htmlFor="remember" className="text-xs text-slate-600 dark:text-slate-400">
                Remember session for 30 days
              </label>
            </div>

            {serverError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs text-red-600">{serverError}</p>
              </div>
            )}

            <Button type="submit" isLoading={isSubmitting}>
              <span>Sign In to Dashboard</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-[10px] text-slate-400 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-[10px] text-slate-400 hover:text-primary">Terms of Service</a>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
              <span className="material-icons text-sm">help_outline</span>
              <span>Need Help? Contact IT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;