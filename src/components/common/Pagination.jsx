// src/components/common/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="px-6 py-4 border-t border-primary/10 flex items-center justify-between bg-primary/5">
      <p className="text-sm text-slate-500">
        Showing page <span className="font-medium text-slate-200">{currentPage}</span> of{' '}
        <span className="font-medium text-slate-200">{totalPages}</span>
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 text-slate-400 hover:bg-primary/10 transition-all disabled:opacity-50"
        >
          <span className="material-icons text-sm">chevron_left</span>
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
              page === currentPage
                ? 'bg-primary text-background-dark font-bold'
                : 'border border-primary/20 text-slate-400 hover:bg-primary/10 transition-all'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded border border-primary/20 text-slate-400 hover:bg-primary/10 transition-all disabled:opacity-50"
        >
          <span className="material-icons text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;