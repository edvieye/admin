// src/components/common/Stepper.jsx
import React from 'react';

const Stepper = ({ steps, currentStep, setStep }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={step} className="flex-1 flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold z-10 cursor-pointer transition-all ${
                isActive
                  ? 'border-primary bg-primary text-white'
                  : isCompleted
                  ? 'border-primary bg-primary text-white'
                  : 'border-slate-300 bg-white dark:bg-background-dark text-slate-400'
              }`}
              onClick={() => setStep(stepNumber)}
            >
              {isCompleted ? (
                <span className="material-icons text-sm">check</span>
              ) : (
                stepNumber
              )}
            </div>
            <span
              className={`text-xs font-medium mt-2 ${
                isActive ? 'text-primary' : 'text-slate-500'
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 left-[60%] w-full h-0.5 ${
                  stepNumber < currentStep ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'
                }`}
                style={{ width: '80%' }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;