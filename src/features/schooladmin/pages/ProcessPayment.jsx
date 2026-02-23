import React from 'react';

const ProcessPayment = () => {
  // Mock student data
  const student = {
    name: 'Alexander Thompson',
    id: 'STU-2024-0892',
    grade: 'Grade 10-B',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfm4aPxer_5NfUhGa1_AFDfkTMfAarq0B65RMzkLon27c5NJ42Gr9V8MOCDMm6_g-oiRg6YfAtCQcXY8QNTcxqZZJhMCao_9HdVD3aN2dEra6Elek9r4P9pYzNjSPBAZvRpwtlbJA3LPxbAotWl0giM6XbpoLUc186fMyX5FCl2ydETgCyNAGeJWKO4f7w0uwxCi4B54tIoWgexTkAV-XYOBwW6XUPrhxreGE9zWyb6vb8VVXwTSxyuhEyeAU5bLCjkGGlXdk5Y8E',
  };

  const invoices = [
    { id: 'INV-2024-001', description: 'Tuition Fees - Q3', dueDate: 'Oct 15, 2024', amount: 1200, selected: true },
    { id: 'INV-2024-004', description: 'Laboratory Maintenance', dueDate: 'Oct 20, 2024', amount: 150, selected: false },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Payment Processing */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Process Payment</h2>
            <p className="text-slate-500 text-sm">Search student records and settle outstanding balances.</p>
          </div>

          {/* Step 1: Search */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Find Student</label>
            <div className="relative">
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3 bg-background-light dark:bg-slate-800 border-0 rounded-lg focus:ring-2 focus:ring-primary ring-inset text-sm"
                placeholder="Search by Name, Roll No, or Student ID..."
                defaultValue="Alexander Thompson"
              />
            </div>
            {/* Search Result Preview */}
            <div className="mt-4 flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <img src={student.avatar} alt="" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{student.name}</p>
                <p className="text-xs text-slate-500">ID: {student.id} • {student.grade}</p>
              </div>
              <div className="ml-auto">
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">Overdue</span>
              </div>
            </div>
          </section>

          {/* Step 2: Invoice Selection */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-primary/5 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-sm">Outstanding Invoices</h3>
              <span className="text-xs font-medium text-primary">3 Invoices Found</span>
            </div>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/30 text-slate-500">
                  <th className="p-4 font-semibold w-12">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-slate-300" />
                  </th>
                  <th className="p-4 font-semibold">Invoice Details</th>
                  <th className="p-4 font-semibold">Due Date</th>
                  <th className="p-4 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        defaultChecked={inv.selected}
                        className="rounded text-primary focus:ring-primary bg-transparent border-slate-300"
                      />
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{inv.description}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-tighter">{inv.id}</div>
                    </td>
                    <td className="p-4 text-slate-500">{inv.dueDate}</td>
                    <td className="p-4 text-right font-bold">${inv.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Step 3: Payment Method & Submit */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Payment Method</label>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center justify-center p-4 border-2 border-primary bg-primary/5 rounded-xl transition-all">
                  <span className="material-icons text-primary mb-1">payments</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Cash</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 rounded-xl transition-all">
                  <span className="material-icons text-slate-400 mb-1">qr_code_2</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">UPI / QR</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 rounded-xl transition-all">
                  <span className="material-icons text-slate-400 mb-1">credit_card</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Card</span>
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Total Amount Payable</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">$1,200.00</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-medium">Processing Fee</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">$0.00</p>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                <span className="material-icons">check_circle</span>
                Process Payment & Generate Receipt
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Receipt Preview */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Digital Receipt Preview</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:text-primary transition-colors border border-slate-100 dark:border-slate-700">
                  <span className="material-icons text-lg">print</span>
                </button>
                <button className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:text-primary transition-colors border border-slate-100 dark:border-slate-700">
                  <span className="material-icons text-lg">share</span>
                </button>
              </div>
            </div>

            {/* Receipt UI */}
            <div className="receipt-paper bg-white text-slate-900 p-8 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-35deg] opacity-[0.03] pointer-events-none">
                <span className="text-9xl font-black uppercase">PAID</span>
              </div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center text-white mb-3">
                  <span className="material-icons text-3xl">school</span>
                </div>
                <h4 className="font-black text-xl leading-none">GREENFIELD ACADEMY</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-1 tracking-widest uppercase">Center for Excellence</p>
                <p className="text-[10px] text-slate-400 mt-2">123 Academic Way, Education District<br/>Springfield, State 54321</p>
              </div>
              <div className="border-y-2 border-dashed border-slate-100 py-4 mb-6 flex justify-between text-[11px] font-bold text-slate-500 uppercase">
                <span>Receipt #: TXN-998122</span>
                <span>Date: 24/10/2024</span>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Bill To</p>
                  <p className="text-sm font-bold">{student.name}</p>
                  <p className="text-xs text-slate-500">{student.grade} | ID: {student.id}</p>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-slate-400 font-bold border-b border-slate-100">
                      <th className="py-2 text-left">Description</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50">
                      <td className="py-3">Tuition Fees (Quarter 3)</td>
                      <td className="py-3 text-right font-medium">$1,200.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="py-4 font-black text-sm">TOTAL PAID</td>
                      <td className="py-4 text-right font-black text-lg text-primary">$1,200.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="flex items-center justify-between gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Payment via</p>
                  <p className="text-xs font-bold flex items-center gap-1">
                    <span className="material-icons text-sm text-slate-400">payments</span>
                    CASH PAYMENT
                  </p>
                </div>
                <div className="w-16 h-16 bg-white p-1 border border-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnV66MhsF7sq5Yj8Y7cLGzKgng1NfKsDidzCp8mpZJe7QY0Omgc1aN8RKyg2N5ycEt6KMi6ywYoeLnWoXFfh1YFlAgSAXwqmTTksQyqdNLWlivkacsJECAa8ieIlgCj7NzULBGD7y0_l-X5OB5pTkUqUihpK47x92m3STEx-JQPN-tMwBhSq1zemju_H4ttaeOxIL7Zg5b7W0R7JHCCoithniDcqAcmOzftwmBngMM0TWogWBdx5HoVm1K-nT5dBZGAnO49xOF3To" alt="QR" className="w-full h-full grayscale" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-[10px] text-slate-400 italic font-medium">This is a computer-generated document. No signature required.</p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-6 flex flex-col gap-2">
              <button className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm shadow-md">
                <span className="material-icons text-lg">download</span>
                Download PDF Receipt
              </button>
              <button className="w-full border-2 border-slate-200 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-400 font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm">
                <span className="material-icons text-lg">mail</span>
                Email to Parent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPayment;