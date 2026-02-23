import React from 'react';

const ExamControl = () => {
  const exams = [
    { name: 'Midterm Exam - Biology', grade: 'Grade 12 • Science Stream', date: 'Oct 24, 2024', time: '09:00 AM - 12:00 PM', progress: 100, status: 'published', public: true },
    { name: 'Unit Test 2 - Mathematics', grade: 'Grade 10 • All Sections', date: 'Oct 26, 2024', time: '01:30 PM - 02:30 PM', progress: 65, status: 'unpublished', public: false },
    { name: 'Midterm Exam - Physics', grade: 'Grade 12 • Science Stream', date: 'Oct 28, 2024', time: '09:00 AM - 12:00 PM', progress: 0, status: 'unpublished', public: false },
    { name: 'Term 1 - English Lit', grade: 'Grade 11 • Arts & Comm', date: 'Oct 21, 2024', time: '10:00 AM - 11:30 AM', progress: 100, status: 'published', public: true },
  ];

  return (
    <div className="p-8">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-primary/5 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><span className="material-icons">event</span></div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Next 14 Days</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Upcoming Exams</p>
          <p className="text-3xl font-bold mt-1">12</p>
        </div>
        <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-primary/5 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><span className="material-icons">pending_actions</span></div>
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">Action Required</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Pending Marking</p>
          <p className="text-3xl font-bold mt-1">08</p>
        </div>
        <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-primary/5 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-primary/20 text-primary rounded-lg"><span className="material-icons">check_circle</span></div>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Live Now</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Published Results</p>
          <p className="text-3xl font-bold mt-1">24</p>
        </div>
        <div className="bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-primary/5 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><span className="material-icons">groups</span></div>
            <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">Participation</span>
          </div>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Student Turnout</p>
          <p className="text-3xl font-bold mt-1">98.2%</p>
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto">
          <select className="bg-white dark:bg-slate-800 border-primary/10 rounded-lg text-sm px-4 py-2 min-w-[140px] focus:ring-primary focus:border-primary">
            <option>All Terms</option>
            <option>Unit Test 1</option>
            <option>Midterm 2024</option>
          </select>
          <select className="bg-white dark:bg-slate-800 border-primary/10 rounded-lg text-sm px-4 py-2 min-w-[140px] focus:ring-primary focus:border-primary">
            <option>All Grades</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
          <select className="bg-white dark:bg-slate-800 border-primary/10 rounded-lg text-sm px-4 py-2 min-w-[140px] focus:ring-primary focus:border-primary">
            <option>Science Dept</option>
            <option>Humanities</option>
            <option>Mathematics</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:text-primary transition-colors"><span className="material-icons">file_download</span></button>
          <button className="p-2 text-slate-500 hover:text-primary transition-colors"><span className="material-icons">print</span></button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <button className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all">
            Bulk Publish
          </button>
        </div>
      </div>

      {/* Exams Table */}
      <div className="bg-white dark:bg-slate-800/40 rounded-xl border border-primary/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-primary/5">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Exam Name & Subject</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Schedule</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Marks Entry</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Result Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Public Release</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {exams.map((exam, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{exam.name}</span>
                      <span className="text-xs text-slate-500">{exam.grade}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{exam.date}</span>
                      <span className="text-xs text-slate-400">{exam.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full max-w-[120px]">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[10px] font-bold ${exam.progress === 100 ? 'text-primary' : exam.progress > 0 ? 'text-amber-500' : 'text-slate-400'}`}>
                          {exam.progress === 100 ? 'COMPLETE' : exam.progress > 0 ? 'In Progress' : 'Pending'}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">{exam.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full ${exam.progress === 100 ? 'bg-primary' : exam.progress > 0 ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'}`} style={{ width: `${exam.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${exam.status === 'published' ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${exam.status === 'published' ? 'bg-primary animate-pulse' : 'bg-slate-400'}`}></span>
                      {exam.status === 'published' ? 'PUBLISHED' : 'UNPUBLISHED'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={exam.public} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white">
                      <span className="material-icons text-[20px]">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="bg-slate-50 dark:bg-slate-800/80 px-6 py-4 flex items-center justify-between border-t border-primary/5">
          <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900 dark:text-white">1-4</span> of <span className="font-medium text-slate-900 dark:text-white">48</span> exams</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-primary/10 hover:bg-white transition-all disabled:opacity-50" disabled>
              <span className="material-icons text-[20px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg text-sm font-medium hover:bg-white transition-all">2</button>
            <button className="w-8 h-8 rounded-lg text-sm font-medium hover:bg-white transition-all">3</button>
            <button className="p-1.5 rounded-lg border border-primary/10 hover:bg-white transition-all">
              <span className="material-icons text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Warning Alert */}
      <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 p-4 rounded-xl flex items-start gap-3">
        <span className="material-icons text-amber-600">report_problem</span>
        <div>
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400 leading-none mb-1">Safety Confirmation Active</h4>
          <p className="text-xs text-amber-700 dark:text-amber-500">Enabling "Public Release" will immediately push results to student and parent mobile applications. Ensure all marks entries are peer-reviewed before publishing.</p>
        </div>
      </div>
    </div>
  );
};

export default ExamControl;