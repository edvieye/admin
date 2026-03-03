import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPasswordAPI } from '../authAPI';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const response = await forgotPasswordAPI(email);
      console.log('📧 Forgot password response:', response);
      toast.success('Verification code sent!');
      navigate('/verify-otp', { state: { email } });
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background-light to-primary/10 dark:from-primary/10 dark:via-background-dark dark:to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
          {/* Decorative header */}
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
          
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                <span className="material-icons text-primary text-4xl">vpn_key</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Forgot Password?</h2>
              <p className="text-gray-500 dark:text-gray-400">
                No worries! Enter your email and we'll send you a verification code to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm text-red-600 dark:text-red-400 flex items-center gap-3">
                  <span className="material-icons text-red-500 text-lg">error_outline</span>
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <span className="material-icons text-lg">email</span>
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 dark:text-white"
                    placeholder="admin@school.edu"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Link
                  to="/login"
                  className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  <span className="material-icons text-base">arrow_back</span>
                  Back to login
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Send verification code'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                We'll never share your email with anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;