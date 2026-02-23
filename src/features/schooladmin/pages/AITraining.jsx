import React from 'react';

const AITraining = () => {
  const faqs = [
    { question: 'What is the deadline for the second-semester fees?', answer: 'The deadline is March 15th, 2024. Late fees of $50 apply thereafter. Payments can be made via the school portal...', category: 'Fees & Payments', status: 'published', lastUpdated: 'Oct 12, 2023' },
    { question: 'How do I reset my parent portal password?', answer: 'Click on \'Forgot Password\' on the login screen. You will receive an OTP on your registered mobile number...', category: 'General Info', status: 'published', lastUpdated: 'Oct 10, 2023' },
    { question: '2024 Admission Enrollment dates?', answer: 'Enrollment starts on December 1st for the Spring session. Forms are available online...', category: 'Admissions', status: 'draft', lastUpdated: 'Just now' },
    { question: 'When is the Mid-Term break scheduled?', answer: 'The break is from Feb 12th to Feb 16th. Classes resume on Feb 19th (Monday)...', category: 'Timetable', status: 'published', lastUpdated: 'Oct 05, 2023' },
    { question: 'Are there extracurricular fees for Basketball?', answer: 'Yes, a nominal fee of $25 per term is charged for coaching and gear maintenance...', category: 'Fees & Payments', status: 'published', lastUpdated: 'Sep 28, 2023' },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-background-dark/50 border-r border-slate-200 dark:border-white/10 flex flex-col">
        <div className="p-6 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-icons-outlined">psychology</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">AI Training</h1>
              <p className="text-xs text-slate-500 font-medium">Knowledge Center</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Knowledge Bases</div>
          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
            <div className="flex items-center gap-3">
              <span className="material-icons-outlined text-[20px]">help_outline</span>
              <span>FAQ Management</span>
            </div>
            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">48</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-icons-outlined text-[20px]">description</span>
            <span>Document Library</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-icons-outlined text-[20px]">forum</span>
            <span>Chat History</span>
          </a>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 mt-8">Categories</div>
          <button className="w-full flex items-center justify-between px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">
            <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-400"></span><span>General Info</span></div>
            <span className="text-slate-400">12</span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">
            <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span><span>Fees & Payments</span></div>
            <span className="text-slate-400">15</span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">
            <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-400"></span><span>Admissions</span></div>
            <span className="text-slate-400">8</span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">
            <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-400"></span><span>Timetable</span></div>
            <span className="text-slate-400">13</span>
          </button>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-white/5">
          <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-icons-outlined text-primary text-sm">verified_user</span>
              <span className="text-xs font-semibold">Model Status</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-primary w-[85%]"></div>
            </div>
            <p className="text-[10px] text-slate-500">85% Accuracy across 1.2k queries this week.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-white dark:bg-background-dark/80 border-b border-slate-200 dark:border-white/10 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold">Knowledge Management</h2>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="material-icons-outlined text-sm">history</span> Last synced: 5 mins ago
              </span>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                <span className="material-icons-outlined text-sm">sync</span> Sync AI Model
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full">
              <span className="material-icons-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfODkDkRhpQHmlfYzXLnWHW82wGS81rHEoD7OjggrJlNha5UeRSYJFw5v6YZ0G9MTRYH2iCAO0WkvmN4pohx33eEYUnPDYsoq8k2bxOIxAaN89mbMTa_VBKlKI1a0spEQ67Z95vzzYexA5Avqzz2eGC_pec_gKJ5D4aZd94rm8KeulEe_IpmOSE4ZgSWXJl9BKhSUk_2gpSUCgC1NvA4bR-RSXeLsnCM0lGY_vksg1xq9jM4QfeTNybTTwle0aufP5OsvZPTtk16A" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="p-8 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all" placeholder="Search questions, answers or keywords..." />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5">
                <span className="material-icons-outlined text-sm">filter_list</span> Filter
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-primary text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
              <span className="material-icons-outlined">add</span> Create New FAQ
            </button>
          </div>
        </div>

        {/* FAQ Table */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Question & Response Preview</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-40">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-32 text-center">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-40">Last Updated</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {faqs.map((faq, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{faq.question}</p>
                      <p className="text-xs text-slate-500 truncate max-w-lg">{faq.answer}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                        faq.category === 'Fees & Payments' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' :
                        faq.category === 'General Info' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' :
                        faq.category === 'Admissions' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' :
                        'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20'
                      }`}>
                        {faq.category}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className={`inline-block w-2 h-2 rounded-full ${faq.status === 'published' ? 'bg-primary' : 'bg-amber-400'}`} title={faq.status}></span>
                    </td>
                    <td className="px-6 py-5 text-xs text-slate-500 font-medium">{faq.lastUpdated}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined text-[20px]">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><span className="material-icons-outlined text-[20px]">delete_outline</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500 font-medium">Showing <span className="text-slate-800 dark:text-white">1 - 5</span> of 48 FAQs</p>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 disabled:opacity-40" disabled>
                <span className="material-icons-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold">10</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">
                <span className="material-icons-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AITraining;