import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/common/Button';
import { verifyOTPAPI, forgotPasswordAPI } from '../authAPI';
import toast from 'react-hot-toast';

const schema = z.object({
  otp: z.string().length(6, 'Code must be 6 digits').regex(/^\d+$/, 'Only numbers allowed'),
});

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [serverError, setServerError] = useState('');
  const [timer, setTimer] = useState(52);
  const [canResend, setCanResend] = useState(false);
  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']); // ← removed demo values
  const inputRefs = useRef([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { otp: '' },
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  useEffect(() => {
    if (!email) {
      toast.error('Session expired. Please start again.');
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  const onSubmit = async (data) => {
    setServerError('');
    try {
      const response = await verifyOTPAPI(email, data.otp);
      console.log('🔢 Verify OTP full response:', response);
      navigate('/reset-password', { state: { resetToken: response.resetToken } });
      toast.success('OTP verified successfully');
    } catch (error) {
      setServerError(error.message);
      toast.error(error.message);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    try {
      await forgotPasswordAPI(email);
      setTimer(52);
      setCanResend(false);
      toast.success('New verification code sent');
    } catch (error) {
      setServerError(error.message);
      toast.error(error.message);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otpArray];
      newOtp[index] = value;
      setOtpArray(newOtp);
      setValue('otp', newOtp.join(''));
      if (value && index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6).replace(/\D/g, '');
    const newOtp = [...otpArray];
    for (let i = 0; i < pasteData.length; i++) newOtp[i] = pasteData[i];
    setOtpArray(newOtp);
    setValue('otp', newOtp.join(''));
    const nextEmpty = newOtp.findIndex(v => !v);
    if (nextEmpty !== -1) inputRefs.current[nextEmpty].focus();
    else inputRefs.current[5].focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-display p-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 shadow-xl rounded-xl border border-zinc-100 dark:border-zinc-800 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <span className="material-icons text-primary text-3xl">verified_user</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Verify Your Identity</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm leading-relaxed">
            We've sent a 6-digit security code to your email. Please enter it below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between gap-2 sm:gap-4" onPaste={handlePaste}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                value={otpArray[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`otp-input w-full h-12 sm:h-14 text-center text-xl font-bold rounded-lg border-2 focus:outline-none transition-colors dark:text-white ${
                  errors.otp ? 'border-red-500' : otpArray[index] ? 'border-primary bg-primary/5' : 'border-zinc-200 dark:border-zinc-700 bg-transparent focus:border-primary'
                }`}
              />
            ))}
          </div>
          <input type="hidden" {...register('otp')} value={otpArray.join('')} />

          {errors.otp && <p className="text-xs text-red-500 text-center">{errors.otp.message}</p>}
          {serverError && <p className="text-xs text-red-500 text-center">{serverError}</p>}

          <div className="text-center space-y-1">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Didn't receive the code?</p>
            {!canResend ? (
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-zinc-400">Resend code in</span>
                <span className="text-sm font-bold text-primary">
                  {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all"
              >
                Resend Code Now
              </button>
            )}
          </div>

          <div className="pt-2">
            <Button type="submit" isLoading={isSubmitting}>
              <span>Verify Account</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </Button>
          </div>
        </form>

        <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center space-y-4">
          <Link to="/login" className="inline-flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors">
            <span className="material-icons text-base mr-1">arrow_back</span>
            Back to Login
          </Link>
          <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">
            <span className="material-icons text-[14px]">lock</span>
            Secure Verification Environment
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-xs text-zinc-400 dark:text-zinc-600 bg-background-light dark:bg-background-dark px-4 py-1 inline-block">
          Protect your account. Do not share this code with anyone.
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;