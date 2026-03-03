



import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../authSlice';
import { loginAPI } from '../authAPI';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import toast from 'react-hot-toast';
import { setAuthData, getAccessToken } from '../../../services/tokenService';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    const token = getAccessToken();
    const userStr = localStorage.getItem('user');
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        const role = user.role;
        if (role === 'superadmin') navigate('/dashboard/super-admin');
        else if (role === 'schooladmin') navigate('/');
        else if (role === 'hr') navigate('/dashboard/hr');
        else if (role === 'accountant') navigate('/dashboard/accountant');
      } catch (e) {
        // ignore
      }
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  });

  const onSubmit = async (data) => {
    setServerError('');
    try {
      const response = await loginAPI(data.email, data.password);
      const { accessToken, refreshToken, user } = response;

      const normalizedRole = user.role.toLowerCase();
      const normalizedUser = { ...user, role: normalizedRole };

      setAuthData(accessToken, refreshToken, normalizedUser);
      dispatch(setCredentials({ user: normalizedUser, token: accessToken, refreshToken }));

      if (normalizedRole === 'schooladmin') navigate('/');
      else if (normalizedRole === 'superadmin') navigate('/dashboard/super-admin');
      else if (normalizedRole === 'hr') navigate('/dashboard/hr');
      else if (normalizedRole === 'accountant') navigate('/dashboard/accountant');
      else navigate('/');

      toast.success('Login successful!');
    } catch (error) {
      setServerError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        {/* Left branding – unchanged */}
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
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Please enter your credentials to access your dashboard.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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