import React from 'react';

const Input = React.forwardRef(({ label, error, icon, ...props }, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <span className="material-icons text-sm">{icon}</span>
          </span>
        )}
        <input
          ref={ref}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-sm ${
            error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
          }`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;