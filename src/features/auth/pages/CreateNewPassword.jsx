import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { resetPasswordAPI } from '../authapi'; 

const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'At least 8 characters')
      .regex(/[0-9]/, 'At least one number')
      .regex(/[^a-zA-Z0-9]/, 'At least one special symbol')
      .regex(/[a-z]/, 'At least one lowercase letter')
      .regex(/[A-Z]/, 'At least one uppercase letter'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const newPassword = watch('newPassword', '');

  // Compute strength
  const getStrength = () => {
    let score = 0;
    if (newPassword.length >= 8) score++;
    if (/[0-9]/.test(newPassword)) score++;
    if (/[^a-zA-Z0-9]/.test(newPassword)) score++;
    if (/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword)) score++;
    return score;
  };
  const strength = getStrength();
  const strengthText = ['Weak', 'Fair', 'Good', 'Strong'][strength] || 'Very Weak';
  const strengthColor = strength >= 3 ? 'text-primary' : strength === 2 ? 'text-yellow-500' : 'text-red-500';

  const onSubmit = async (data) => {
    setServerError('');
    try {
      await resetPasswordAPI(data.newPassword);
      setShowSuccess(true);
      // Optionally redirect after a delay
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-3 shadow-lg shadow-primary/20">
          <span className="material-icons text-white text-3xl">school</span>
        </div>
        <h1 className="text-xl font-bold text-background-dark dark:text-white">Unified School Ecosystem</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-primary/10 overflow-hidden">
        <div className="h-1.5 w-full bg-primary/10">
          <div className="h-full bg-primary w-2/3"></div>
        </div>
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Create New Password</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Please choose a strong password to protect your school account and student data.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="block w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white text-sm pr-10"
                  placeholder="••••••••"
                  {...register('newPassword')}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary"
                >
                  <span className="material-icons text-xl">{showNewPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              {errors.newPassword && <p className="text-xs text-red-500 mt-1">{errors.newPassword.message}</p>}
            </div>

            {/* Strength Meter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                <span className="text-gray-500">Security Strength</span>
                <span className={strengthColor}>{strengthText}</span>
              </div>
              <div className="flex h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-full w-1/4 rounded-full transition-all ${
                      i <= strength ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Checklist (static but dynamic based on strength) */}
            <div className="grid grid-cols-1 gap-2 py-2">
              <div className={`flex items-center space-x-2 text-sm ${newPassword.length >= 8 ? 'text-primary' : 'text-gray-400'}`}>
                <span className="material-icons text-sm">{newPassword.length >= 8 ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>At least 8 characters</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${/[0-9]/.test(newPassword) ? 'text-primary' : 'text-gray-400'}`}>
                <span className="material-icons text-sm">{/[0-9]/.test(newPassword) ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>At least one number</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${/[^a-zA-Z0-9]/.test(newPassword) ? 'text-primary' : 'text-gray-400'}`}>
                <span className="material-icons text-sm">{/[^a-zA-Z0-9]/.test(newPassword) ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>At least one special symbol</span>
              </div>
              <div className={`flex items-center space-x-2 text-sm ${/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword) ? 'text-primary' : 'text-gray-400'}`}>
                <span className="material-icons text-sm">{/[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword) ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>Mixed case (Uppercase & Lowercase)</span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="block w-full px-4 py-3 rounded-lg border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white text-sm pr-10"
                  placeholder="••••••••"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                >
                  <span className="material-icons text-xl">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {serverError && <p className="text-xs text-red-500">{serverError}</p>}

            <Button type="submit" isLoading={isSubmitting}>
              Update Password
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <Link to="/login" className="text-gray-500 hover:text-primary flex items-center">
              <span className="material-icons text-base mr-1">help_outline</span>
              Need help?
            </Link>
            <a href="#" className="text-gray-500 hover:text-primary">Contact School Admin</a>
          </div>
        </div>
      </div>

      {/* Success overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl border border-primary/20 text-center">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-5xl">verified</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Password Updated</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Your credentials have been successfully secured. You can now access your dashboard.</p>
            <button onClick={() => navigate('/login')} className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20">
              Proceed to Login
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-600">
        <p>© 2024 Unified School Ecosystem. All rights reserved.</p>
        <p className="mt-1">System Version 4.2.0-SECURE</p>
      </div>
    </div>
  );
};

export default CreateNewPassword;