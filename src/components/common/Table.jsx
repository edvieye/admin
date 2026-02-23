// src/components/common/Table.jsx
import React from 'react';

const Table = ({ columns, data, loading }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white dark:bg-primary/5 rounded-xl border border-primary/10 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-primary/10 text-primary-dark dark:text-primary uppercase text-xs font-bold tracking-wider">
            {columns.map((col, idx) => (
              <th key={idx} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : ''}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/10">
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-primary/5 transition-colors group">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : ''}`}>
                  {col.cell ? col.cell(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;