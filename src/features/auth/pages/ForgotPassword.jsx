// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Link, useNavigate } from 'react-router-dom';
// import Input from '../../../components/common/Input';
// import Button from '../../../components/common/Button';
// import { forgotPasswordAPI } from '../authAPI';

// const schema = z.object({
//   identifier: z.string().min(1, 'Email or mobile number is required'),
// });

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [serverMessage, setServerMessage] = useState('');
//   const [error, setError] = useState('');

//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     setError('');
//     setServerMessage('');
//     try {
//       const response = await forgotPasswordAPI(data.identifier);
//       setServerMessage(response.message);
//       // After successful request, redirect to OTP verification page (or show message)
//       // For demo, we navigate to OTP page
//       navigate('/verify-otp');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-background-light dark:bg-background-dark">
//       <div className="w-full max-w-md">
//         {/* Brand */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//               <span className="material-icons text-white">school</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900 dark:text-white">EduLink Ecosystem</span>
//           </div>
//         </div>

//         <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-xl p-8 border border-primary/10 dark:border-primary/5">
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
//               <span className="material-icons text-primary text-3xl">lock_reset</span>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Forgot Password?</h1>
//             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
//               No worries! Enter the email address or mobile number associated with your account and we'll send you a link to reset your password.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <Input
//               label="Email or Mobile Number"
//               icon="mail_outline"
//               placeholder="e.g. john@school.edu or +1234567890"
//               {...register('identifier')}
//             />
//             <p className="text-[11px] text-gray-500 dark:text-zinc-500 italic">
//               Standard messaging rates may apply for mobile recovery.
//             </p>

//             {serverMessage && (
//               <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
//                 <p className="text-xs text-green-600">{serverMessage}</p>
//               </div>
//             )}
//             {error && (
//               <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
//                 <p className="text-xs text-red-600">{error}</p>
//               </div>
//             )}

//             <Button type="submit" isLoading={isSubmitting}>
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                 <span className="material-icons text-white/70 group-hover:text-white transition-colors text-lg">send</span>
//               </span>
//               Send Recovery Link
//             </Button>

//             <div className="flex items-center justify-center pt-4 border-t border-gray-100 dark:border-zinc-800">
//               <Link to="/login" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors gap-1">
//                 <span className="material-icons text-base">arrow_back</span>
//                 Back to Login
//               </Link>
//             </div>
//           </form>
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500 dark:text-zinc-500">
//             Having trouble? <a href="#" className="underline hover:text-primary transition-colors">Contact IT Support</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../../routes/routeConstants";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (!email) {
      setError('Email is required');
      return;
    }
    setError('');
    setSubmitted(true);
    // In real app, call password reset API
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-forest-light p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-forest dark:text-white">Reset Password</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Enter your email and we'll send you a reset link.
          </p>
        </div>
        {submitted ? (
          <div className="text-center">
            <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300">
              Reset link sent! Check your inbox.
            </div>
            <Link to={ROUTES.LOGIN} className="text-primary hover:underline text-sm font-medium">
              Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-forest border border-slate-200 dark:border-forest-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="admin@school.edu"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to={ROUTES.LOGIN} className="text-sm text-primary hover:underline">
                Back to login
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send reset link
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;