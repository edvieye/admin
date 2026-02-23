import React from 'react';

const AttendanceOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-forest-neutral-900 p-5 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-forest-neutral-500 text-sm font-medium">Daily Presence</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-icons text-lg">trending_up</span>
            </div>
          </div>
          <div className="text-3xl font-bold">94.2%</div>
          <p className="text-xs text-primary font-medium mt-1">+1.2% from yesterday</p>
        </div>
        <div className="bg-white dark:bg-forest-neutral-900 p-5 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-forest-neutral-500 text-sm font-medium">Absences Today</span>
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
              <span className="material-icons text-lg">person_off</span>
            </div>
          </div>
          <div className="text-3xl font-bold">128</div>
          <p className="text-xs text-red-500 font-medium mt-1">24 unexcused absences</p>
        </div>
        <div className="bg-white dark:bg-forest-neutral-900 p-5 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-forest-neutral-500 text-sm font-medium">Flagged Classes</span>
            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
              <span className="material-icons text-lg">report_problem</span>
            </div>
          </div>
          <div className="text-3xl font-bold">4</div>
          <p className="text-xs text-amber-600 font-medium mt-1">Below 85% attendance</p>
        </div>
        <div className="bg-white dark:bg-forest-neutral-900 p-5 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-forest-neutral-500 text-sm font-medium">Pending Submissions</span>
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
              <span className="material-icons text-lg">pending_actions</span>
            </div>
          </div>
          <div className="text-3xl font-bold">12</div>
          <p className="text-xs text-blue-600 font-medium mt-1">Due by 4:00 PM today</p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-8 bg-white dark:bg-forest-neutral-900 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800 overflow-hidden">
          <div className="p-6 border-b border-forest-neutral-200 dark:border-forest-neutral-800 flex items-center justify-between">
            <h2 className="font-bold text-lg">Calendar View</h2>
            <div className="flex gap-1 bg-forest-neutral-100 dark:bg-forest-neutral-800 p-1 rounded-lg">
              <button className="px-3 py-1 bg-white dark:bg-forest-neutral-700 shadow-sm rounded-md text-sm font-medium">Month</button>
              <button className="px-3 py-1 text-sm font-medium text-forest-neutral-500">Week</button>
            </div>
          </div>
          <div className="p-4 overflow-x-auto">
            <div className="grid grid-cols-7 gap-px bg-forest-neutral-200 dark:bg-forest-neutral-800 border border-forest-neutral-200 dark:border-forest-neutral-800 rounded-lg overflow-hidden">
              {/* Day headers */}
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="bg-forest-neutral-50 dark:bg-forest-neutral-900 p-3 text-center text-xs font-bold text-forest-neutral-500 uppercase tracking-wider">{day}</div>
              ))}
              {/* Row 1 */}
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">25</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">26</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">27</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">28</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">29</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] opacity-40"><span className="text-xs font-semibold">30</span></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px]"><span className="text-xs font-semibold">1</span><div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-primary">96%</div><div className="w-full h-1 bg-primary rounded-full mt-1"></div></div></div>
              {/* Row 2 */}
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] hover:bg-forest-neutral-50 dark:hover:bg-forest-neutral-800 transition-colors cursor-pointer border-2 border-transparent hover:border-primary"><span className="text-xs font-semibold">2</span><div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-primary">98%</div><div className="w-full h-1 bg-primary rounded-full mt-1"></div></div></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] hover:bg-forest-neutral-50 dark:hover:bg-forest-neutral-800 transition-colors cursor-pointer border-2 border-transparent hover:border-primary"><span className="text-xs font-semibold">3</span><div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-primary">94%</div><div className="w-full h-1 bg-primary rounded-full mt-1"></div></div></div>
              <div className="bg-primary/5 dark:bg-primary/10 p-3 min-h-[100px] border-2 border-primary ring-2 ring-primary ring-inset">
                <div className="flex justify-between items-start"><span className="text-xs font-bold text-primary">4</span><span className="text-[10px] uppercase font-bold text-primary">Selected</span></div>
                <div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-primary">92%</div><div className="w-full h-1 bg-primary rounded-full mt-1"></div></div>
              </div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] hover:bg-forest-neutral-50 dark:hover:bg-forest-neutral-800 transition-colors cursor-pointer border-2 border-transparent hover:border-primary"><span className="text-xs font-semibold">5</span><div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-amber-500">88%</div><div className="w-full h-1 bg-amber-500 rounded-full mt-1"></div></div></div>
              <div className="bg-white dark:bg-forest-neutral-900 p-3 min-h-[100px] hover:bg-forest-neutral-50 dark:hover:bg-forest-neutral-800 transition-colors cursor-pointer border-2 border-transparent hover:border-primary"><span className="text-xs font-semibold">6</span><div className="mt-2 flex flex-col items-center"><div className="text-lg font-bold text-red-500">82%</div><div className="w-full h-1 bg-red-500 rounded-full mt-1"></div></div></div>
              <div className="bg-forest-neutral-50 dark:bg-forest-neutral-800 p-3 min-h-[100px]"><span className="text-xs font-semibold text-forest-neutral-400">7</span></div>
              <div className="bg-forest-neutral-50 dark:bg-forest-neutral-800 p-3 min-h-[100px]"><span className="text-xs font-semibold text-forest-neutral-400">8</span></div>
            </div>
          </div>
        </div>

        {/* Class-wise Breakdown */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-forest-neutral-900 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800 overflow-hidden h-full flex flex-col">
            <div className="p-6 border-b border-forest-neutral-200 dark:border-forest-neutral-800">
              <h3 className="font-bold text-lg">Daily Breakdown</h3>
              <p className="text-sm text-forest-neutral-500">Wed, Oct 4th, 2023</p>
            </div>
            <div className="p-4 flex-1 overflow-y-auto max-h-[600px]">
              <div className="relative mb-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons text-forest-neutral-400 text-sm">search</span>
                <input className="w-full pl-9 pr-4 py-2 text-sm bg-forest-neutral-50 dark:bg-forest-neutral-800 border-forest-neutral-200 dark:border-forest-neutral-700 rounded-lg focus:ring-primary focus:border-primary" placeholder="Search class..." />
              </div>
              <div className="space-y-3">
                {/* Class Card */}
                <div className="p-4 border border-forest-neutral-100 dark:border-forest-neutral-800 rounded-xl bg-forest-neutral-50/50 dark:bg-forest-neutral-800/50">
                  <div className="flex justify-between items-start mb-3">
                    <div><h4 className="font-bold text-sm">Grade 10 - Biology A</h4><p className="text-xs text-forest-neutral-500">Mr. James Sterling</p></div>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">98%</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-medium"><span>28 / 30 Students</span><span>2 Absent</span></div>
                    <div className="w-full bg-forest-neutral-200 dark:bg-forest-neutral-700 h-1.5 rounded-full overflow-hidden flex">
                      <div className="bg-primary h-full w-[94%]"></div>
                      <div className="bg-red-500 h-full w-[6%]"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border border-forest-neutral-100 dark:border-forest-neutral-800 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div><h4 className="font-bold text-sm">Grade 12 - Advanced Calc</h4><p className="text-xs text-forest-neutral-500">Ms. Sarah Chen</p></div>
                    <span className="bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded text-[10px] font-bold">85%</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-medium"><span>17 / 20 Students</span><span>3 Absent</span></div>
                    <div className="w-full bg-forest-neutral-200 dark:bg-forest-neutral-700 h-1.5 rounded-full overflow-hidden flex">
                      <div className="bg-amber-500 h-full w-[85%]"></div>
                      <div className="bg-red-500 h-full w-[15%]"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border border-red-200 dark:border-red-900/50 rounded-xl bg-red-50 dark:bg-red-900/20">
                  <div className="flex justify-between items-start mb-3">
                    <div><h4 className="font-bold text-sm">Grade 9 - Phys Ed</h4><p className="text-xs text-forest-neutral-500">Coach Miller</p></div>
                    <span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold">72%</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-medium"><span>18 / 25 Students</span><span>7 Absent</span></div>
                    <div className="w-full bg-forest-neutral-200 dark:bg-forest-neutral-700 h-1.5 rounded-full overflow-hidden flex">
                      <div className="bg-red-500 h-full w-[72%]"></div>
                      <div className="bg-red-900/20 h-full w-[28%]"></div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-900/50">
                    <p className="text-[10px] text-red-600 font-bold flex items-center gap-1">
                      <span className="material-icons text-xs">warning</span> Attendance below institution threshold
                    </p>
                  </div>
                </div>
                <div className="p-4 border border-forest-neutral-100 dark:border-forest-neutral-800 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div><h4 className="font-bold text-sm">Grade 11 - English Lit</h4><p className="text-xs text-forest-neutral-500">Mr. Robert Pears</p></div>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">100%</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-medium"><span>24 / 24 Students</span><span>0 Absent</span></div>
                    <div className="w-full bg-forest-neutral-200 dark:bg-forest-neutral-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-forest-neutral-200 dark:border-forest-neutral-800 bg-forest-neutral-50 dark:bg-forest-neutral-800/50">
              <button className="w-full py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                <span className="material-icons text-sm">visibility</span> View Detailed Class Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Year-to-Date Trends */}
      <div className="bg-white dark:bg-forest-neutral-900 p-6 rounded-xl border border-forest-neutral-200 dark:border-forest-neutral-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Year-to-Date Trends</h3>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-primary rounded-full"></div><span>Present</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-red-500 rounded-full"></div><span>Absent</span></div>
          </div>
        </div>
        {/* Mock Graph */}
        <div className="h-32 flex items-end gap-2 md:gap-4 px-2">
          {[80,85,75,90,82,88,92].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group" style={{ height: `${h}%` }}>
              <div className="absolute inset-0 bg-primary opacity-40 group-hover:opacity-60 transition-opacity"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-2 mt-4 text-[10px] font-bold text-forest-neutral-400 uppercase tracking-widest">
          <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span className="text-primary">Oct</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;