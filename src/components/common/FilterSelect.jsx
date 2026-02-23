// src/components/common/FilterSelect.jsx
import React from 'react';

const FilterSelect = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white dark:bg-white/5 border border-slate-200 dark:border-primary/20 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt === 'All Classes' ? '' : opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;