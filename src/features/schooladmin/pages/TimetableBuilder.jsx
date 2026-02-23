import React from 'react';

const TimetableBuilder = () => {
  const periods = [
    { label: 'Period 1', time: '08:00 - 08:45' },
    { label: 'Period 2', time: '08:45 - 09:30' },
    { label: 'Period 3', time: '09:45 - 10:30' },
    { label: 'Period 4', time: '10:30 - 11:15' },
  ];

  const days = [
    { name: 'Mon', date: 'Oct 23', active: false },
    { name: 'Tue', date: 'Oct 24', active: false },
    { name: 'Wed', date: 'Oct 25', active: true },
    { name: 'Thu', date: 'Oct 26', active: false },
    { name: 'Fri', date: 'Oct 27', active: false },
  ];

  const subjects = [
    { name: 'Advanced Mathematics', code: 'MATH', teacher: 'Prof. Robert Vance', color: 'primary' },
    { name: 'Quantum Physics', code: 'SCI', teacher: 'Dr. Elena Fisher', color: 'blue' },
    { name: 'Global History', code: 'HIS', teacher: 'James Wilson', color: 'amber' },
    { name: 'English Literature', code: 'ENG', teacher: 'Sarah Jenkins', color: 'purple' },
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Context Bar */}
      <div className="bg-white dark:bg-[#1a301a] border-b border-primary/5 py-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1">Academic Year</label>
              <select className="bg-slate-50 dark:bg-[#0d1b0d] border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>2023 - 2024</option>
                <option>2024 - 2025</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1">Department</label>
              <select className="bg-slate-50 dark:bg-[#0d1b0d] border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Senior High School</option>
                <option>Junior High School</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1">Grade / Section</label>
              <select className="bg-slate-50 dark:bg-[#0d1b0d] border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                <option>Grade 10 - Alpha</option>
                <option>Grade 10 - Bravo</option>
                <option>Grade 10 - Charlie</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-2">
              <span className="material-icons text-lg">auto_fix_high</span> Auto-Generate
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-sm shadow-primary/30">
              <span className="material-icons text-lg">save</span> Save Timetable
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Sidebar: Subjects */}
        <aside className="w-full xl:w-72 flex-shrink-0 space-y-6">
          <div className="bg-white dark:bg-[#1a301a] rounded-xl border border-primary/5 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Subjects</h3>
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-bold">12 Total</span>
            </div>
            <div className="relative mb-4">
              <input className="w-full text-sm bg-slate-50 dark:bg-[#0d1b0d] border-slate-200 dark:border-slate-700 rounded-lg pl-9 focus:ring-primary focus:border-primary" placeholder="Search subjects..." />
              <span className="material-icons absolute left-3 top-2.5 text-slate-400 text-sm">search</span>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {subjects.map((subject, idx) => (
                <div key={idx} className="p-3 bg-white dark:bg-[#142814] border-2 border-transparent hover:border-primary/50 rounded-lg shadow-sm cursor-grab active:cursor-grabbing transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold text-${subject.color} bg-${subject.color}-500/10 px-2 py-0.5 rounded`}>{subject.code}</span>
                    <span className="material-icons text-slate-300 text-sm">drag_indicator</span>
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{subject.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <span className="material-icons text-xs">person</span> {subject.teacher}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Calendar / Occupancy */}
          <div className="bg-white dark:bg-[#1a301a] rounded-xl border border-primary/5 p-4 shadow-sm">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Class Occupancy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Room 101</span>
                <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-primary"></div>
                </div>
                <span className="font-bold">80%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Room 102</span>
                <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-amber-400"></div>
                </div>
                <span className="font-bold">45%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Timetable Grid */}
        <section className="flex-1 overflow-x-auto">
          <div className="bg-white dark:bg-[#1a301a] rounded-xl border border-primary/5 shadow-sm min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-[100px_repeat(5,1fr)] border-b border-primary/10">
              <div className="p-4 bg-slate-50/50 dark:bg-[#0d1b0d]/50 border-r border-primary/10"></div>
              {days.map((day, idx) => (
                <div key={idx} className={`p-4 text-center border-r border-primary/10 ${day.active ? 'bg-primary/5' : ''}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${day.active ? 'text-primary' : 'text-slate-400'}`}>{day.name}</span>
                  <span className={`text-sm font-bold ${day.active ? 'text-primary' : ''}`}>{day.date}</span>
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="divide-y divide-primary/5">
              {periods.map((period, pIdx) => (
                <div key={pIdx} className="grid grid-cols-[100px_repeat(5,1fr)] group">
                  <div className="p-4 flex flex-col items-center justify-center border-r border-primary/10 bg-slate-50/30 dark:bg-[#0d1b0d]/30">
                    <span className="text-sm font-bold">{period.label}</span>
                    <span className="text-[10px] text-slate-400">{period.time}</span>
                  </div>
                  {days.map((_, dIdx) => {
                    // Random placement for demo
                    const isFilled = (pIdx === 0 && dIdx === 0) || (pIdx === 1 && dIdx === 1) || (pIdx === 1 && dIdx === 2) || (pIdx === 3 && dIdx === 0) || (pIdx === 2 && dIdx === 1);
                    const subjectIdx = (pIdx + dIdx) % subjects.length;
                    const subj = subjects[subjectIdx];
                    const isConflict = pIdx === 1 && dIdx === 2; // Double booking example
                    return (
                      <div key={dIdx} className={`p-2 border-r border-primary/10 hover:bg-primary/[0.02] transition-colors ${pIdx === 2 && dIdx === 1 ? 'bg-primary/[0.03]' : ''}`}>
                        {isFilled ? (
                          <div className={`w-full h-full ${isConflict ? 'bg-red-500/10 border border-red-500/30 ring-2 ring-red-500 ring-offset-2 dark:ring-offset-[#1a301a]' : 'bg-primary/10 border border-primary/20'} rounded-lg p-2 flex flex-col justify-between`}>
                            <div className="flex justify-between">
                              <span className={`text-[9px] font-bold ${isConflict ? 'text-red-500' : 'text-primary'}`}>{subj.code}</span>
                              {isConflict && <span className="material-icons text-red-500 text-xs">warning</span>}
                            </div>
                            <p className="text-xs font-semibold leading-tight">{isConflict ? 'Advanced Math' : subj.name}</p>
                            <p className="text-[9px] text-slate-500">{isConflict ? 'RV Double Booked' : `${subj.teacher.split(' ').map(w => w[0]).join('')} • Room 10${dIdx+1}`}</p>
                          </div>
                        ) : (
                          <div className="h-full min-h-[80px] rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                            <span className="material-icons text-primary/20">add_circle</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Break Row */}
              <div className="grid grid-cols-[100px_repeat(5,1fr)] bg-slate-50 dark:bg-[#0d1b0d]">
                <div className="p-3 border-r border-primary/10"></div>
                <div className="col-span-5 p-3 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-4">
                  <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                  Morning Break (15 mins)
                  <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conflict Checker Sidebar */}
        <aside className="w-full xl:w-80 flex-shrink-0 space-y-6">
          <div className="bg-white dark:bg-[#1a301a] rounded-xl border border-primary/5 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-500/10 p-2 rounded-lg">
                <span className="material-icons text-red-500">report_problem</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Conflict Checker</h3>
                <p className="text-[10px] text-slate-500 uppercase font-bold">2 Alerts Found</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-icons text-red-500 text-sm">error</span>
                  <span className="text-[11px] font-bold text-red-600 uppercase">High Priority</span>
                </div>
                <p className="text-sm font-semibold mb-1">Double Booking</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Prof. Robert Vance (MATH) is already assigned to <span className="font-bold">Grade 11-A</span> on Tuesday, Period 2.</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 text-[10px] font-bold bg-white dark:bg-[#0d1b0d] border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-50 transition-colors">REMOVE SLOT</button>
                  <button className="flex-1 py-1.5 text-[10px] font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">REASSIGN</button>
                </div>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-icons text-amber-500 text-sm">warning</span>
                  <span className="text-[11px] font-bold text-amber-600 uppercase">Notice</span>
                </div>
                <p className="text-sm font-semibold mb-1">Room Capacity</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Lab 2 capacity (25) is below Grade 10-Alpha class size (28) for Physics Lab.</p>
              </div>
              <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/10 rounded-lg">
                <span className="material-icons text-primary text-sm">check_circle</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">All other slots verified.</span>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="p-4 bg-slate-50 dark:bg-[#0d1b0d] rounded-xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Quick Shortcuts</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">S</kbd> Save</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">Z</kbd> Undo</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">G</kbd> Generate</div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500"><kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-sm">?</kbd> Help</div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Status */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#102210]/80 backdrop-blur-md border-t border-primary/10 py-2 px-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[11px] font-medium text-slate-500">Live Validator Active</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-[11px] text-slate-500">Last auto-save: 2 mins ago</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[11px] font-bold text-primary uppercase hover:underline">Publish Timetable</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimetableBuilder;