import React from 'react';
import HrSidebar from './HrSidebar';

const HrPageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <HrSidebar />
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
  );
};

export default HrPageWrapper;