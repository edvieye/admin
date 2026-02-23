import React from 'react';

const FeesBilling = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Fees & Billing</h1>
          <p className="text-slate-500 text-sm mt-1">Manage institutional finance and student accounts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-primary/20 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all">
            <span className="material-icons text-[18px]">tune</span> Setup Fee Structure
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span className="material-icons text-[18px]">add_circle</span> Collect Fee
          </button>
        </div>
      </div>

      {/* Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg"><span className="material-icons text-primary">account_balance_wallet</span></div>
            <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">MONTHLY</span>
          </div>
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Collection</h3>
          <p className="text-2xl font-extrabold mt-1">$124,500.00</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-500/10 rounded-lg"><span className="material-icons text-amber-500">pending_actions</span></div>
            <span className="text-[10px] font-bold text-amber-500 px-2 py-1 bg-amber-500/10 rounded-full">PENDING</span>
          </div>
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Outstanding Dues</h3>
          <p className="text-2xl font-extrabold mt-1 text-amber-500">$32,140.00</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg"><span className="material-icons text-red-500">report_problem</span></div>
            <span className="text-[10px] font-bold text-red-500 px-2 py-1 bg-red-500/10 rounded-full">OVERDUE</span>
          </div>
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Overdue Accounts</h3>
          <p className="text-2xl font-extrabold mt-1 text-red-500">42 Students</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg"><span className="material-icons text-primary">trending_up</span></div>
            <span className="text-xs font-bold text-primary">84% Goal</span>
          </div>
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Collection Progress</h3>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden"><div className="bg-primary h-full w-[84%]"></div></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Chart & Due List */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chart */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Collection Summary</h2>
              <select className="text-xs font-bold border-primary/20 rounded-lg focus:ring-primary focus:border-primary">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-800/50 rounded-lg flex items-end justify-around p-4 gap-2">
              {[40,65,55,85,70,45].map((h, i) => (
                <div key={i} className="w-full max-w-[40px] bg-primary/40 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">${Math.round(h*3)}k</div>
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-4 text-[10px] font-bold text-slate-400">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
          </div>

          {/* Due List Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">Recent Due List</h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full cursor-pointer">All</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold rounded-full cursor-pointer hover:bg-primary/10">Unpaid</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold rounded-full cursor-pointer hover:bg-primary/10">Partial</span>
                </div>
              </div>
              <div className="relative">
                <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-[18px]">search</span>
                <input className="pl-10 pr-4 py-2 border-primary/10 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs w-full focus:ring-primary focus:border-primary" placeholder="Search student..." />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Student Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Grade</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Fee Type</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase text-right">Amount</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCscGTloBMP_wx7E6kqcxIkpPW0coq3aijFHM2m4bI0BzMxl11EFrOpaZa5yBqevZBLeuu8xL-D6bCXbGX895ZfHNPd6UlrVlTJ57NWGWEVtt4qV2pX8fUX8oXG1O_ucExnxTs-Yt-aJwlWEs_xpkb9_k9R5JMvDbBYV5glOI3uigQlbV05hlFtebF60elMhv_BLZ4Q-ue0FhjGnx8vWGmt2F8HkrLJ2apLtQBgsWLQtkSJQnZnOvbUi-Omud9OQDbFS43o57r6asI" alt="" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Liam Peterson</p>
                          <p className="text-[10px] text-slate-500">ID: ST-2024-001</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Grade 10-A</td>
                    <td className="px-6 py-4 text-xs font-medium">Tuition + Lab</td>
                    <td className="px-6 py-4 text-sm font-bold text-right">$1,250.00</td>
                    <td className="px-6 py-4 text-center"><span className="px-2.5 py-1 bg-red-100 text-red-600 text-[10px] font-extrabold rounded uppercase tracking-wide">Unpaid</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-primary hover:bg-primary/5 rounded-lg"><span className="material-icons text-[20px]">payments</span></button></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9P0aMZGGV6AY-EqyWNuYxHloOHmLRR2Rz7gdXjIP3Hdwo7U4N_NdD1lieyhPkFecc_k-PQ4-PtAT9EaSSwq3ALCAscOYrOs4CfB_Ah2aDT2P6VafFVVAL8GW6hKLV4CTDgDKBfKPTFsn4ipdB9wtxSQR6S_dgbjnSeR8UcZjGT2XkGaQpz7kQNKuI7Awvgu2e2h0_Km7ooOjY47goAymorbdnT9opHB5pqUX2h2qdKyyBoEO64OshjlkGVxRv4nSKICFbDOwV9z4" alt="" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Emma Watson</p>
                          <p className="text-[10px] text-slate-500">ID: ST-2024-045</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">Grade 8-B</td>
                    <td className="px-6 py-4 text-xs font-medium">Transport</td>
                    <td className="px-6 py-4 text-sm font-bold text-right">$450.00</td>
                    <td className="px-6 py-4 text-center"><span className="px-2.5 py-1 bg-amber-100 text-amber-600 text-[10px] font-extrabold rounded uppercase tracking-wide">Partial</span></td>
                    <td className="px-6 py-4 text-right"><button className="p-2 text-primary hover:bg-primary/5 rounded-lg"><span className="material-icons text-[20px]">payments</span></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
              <p className="text-xs text-slate-500 font-medium">Showing 1 to 3 of 42 entries</p>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary/10 text-slate-400 hover:text-primary"><span className="material-icons">chevron_left</span></button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-primary/10 text-slate-400 hover:text-primary"><span className="material-icons">chevron_right</span></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Fee Structure & Live Feed */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Fee Structure</h2>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-primary/5">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div><span className="text-sm font-semibold">Tuition Fees</span></div>
                <span className="text-xs font-bold text-primary">$1,200/term</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-primary/5">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-sm font-semibold">Transport</span></div>
                <span className="text-xs font-bold text-blue-500">$350/term</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-primary/5">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amber-500"></div><span className="text-sm font-semibold">Lab/Library</span></div>
                <span className="text-xs font-bold text-amber-500">$150/term</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-primary/5">
                <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-sm font-semibold">Sports</span></div>
                <span className="text-xs font-bold text-purple-500">$200/term</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-dashed border-primary/40 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-all">+ Add Fee Category</button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Live Feed</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span className="material-icons text-[16px]">receipt</span></div></div>
                <div><p className="text-xs font-bold">Payment Received</p><p className="text-[10px] text-slate-400">Student: John Doe • $450.00</p><p className="text-[10px] text-primary font-bold mt-1">2 mins ago</p></div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500"><span className="material-icons text-[16px]">print</span></div></div>
                <div><p className="text-xs font-bold">Bulk Invoices Generated</p><p className="text-[10px] text-slate-400">Grade 10 • 120 students</p><p className="text-[10px] text-primary font-bold mt-1">15 mins ago</p></div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500"><span className="material-icons text-[16px]">notification_important</span></div></div>
                <div><p className="text-xs font-bold">Overdue Alert Sent</p><p className="text-[10px] text-slate-400">42 Parents notified via SMS</p><p className="text-[10px] text-primary font-bold mt-1">1 hour ago</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesBilling;