import React from 'react';

const LiveClasses = () => {
  const sessions = [
    { teacher: 'Sarah Miller', class: 'Advanced Biology • Gr 12-A', status: 'live', duration: '42m / 60m', students: 32, total: 34, attendance: 94, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj7zVbhAoRRyX0k8o3DiomlVcmNdOwMqyUvbxHJFpn9K6cPITt4ZxiwkkzHtTAJpi6UQB7khQ0nlkcp8MmuXGRFS3eIrFLNvhf4M8w27GEsv_gI9qXHmlI5E0_uxZBX39Dv6LyxgeSwf5Qhg10nTjbCkpU3zM4Q0787N1gKMAWwPDcTTZ1gFejJNCASfQODlvCbjPScyEdVZTL3tfqA0ps1EwVOIEiSAgC5YO31E8BQg8gDsM5KdnMa-4_vaHI2sXv8pShbjpGi20' },
    { teacher: 'David Wilson', class: 'Macroeconomics • Gr 11-C', status: 'live', duration: '15m / 45m', students: 28, total: 30, attendance: 93, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjbPdMOM95zqjYydDRrvvzrybFfAMUv2oLKJMb8QOv7i0qGlqzk_6ttt0E_vEtgNxRGwpDQ9nqO9kbqpep1q1leScK6UZvDLcp_HZp6nu7dhaA2SYyxCXQxqToSs3L47eowrkbV3XuPzstlA35cfpVcobTrr32LrIbMUXSM5HN5b9gXIUY_fa74-0KRG1PP4eVRo8_WfwY8HpuPkdGqvfUm1tytmXCQa7i0eX1o5edeOThyPVq_Dm0kfNyJz2X4TB9Ws9CuGnU5vA' },
    { teacher: 'Elena Gilbert', class: 'World History • Gr 10-B', status: 'upcoming', duration: 'Starts in 18m', students: 0, total: 28, avatar: null },
    { teacher: 'James Bond', class: 'English Lit • Gr 11-A', status: 'finished', duration: '55m total', students: 30, total: 30, attendance: 100, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa2h8FWgYlSqIxRvzlD5lzJRz-uur4cyNZYG_x0MBDgkrLNjeqRS3IkX7Cm6MvxUxe2LFNpnDxXiZ93yYCi1c4vl10hUlLe1f7b2BQSId_FgMnbo9lvl617xWwjv9YuURE1OdaOcTkBo-fCQKpn23so8UTiE3Cgi9Xt9-a4Va1zmjZ07ZtLZUib1pzFoxp4a2ws32CrDJIkqKZTIEQOatrev3ZVC1NdvMs1tXxLkKGXRxxkCHWFapTjrNLnzYIpm-sXvYCQRgnftU' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Live Class Session Management</h1>
          <p className="text-slate-500 mt-1">Monitor and manage all real-time educational sessions across departments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors">
            <span className="material-icons text-lg">calendar_today</span> Schedule
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-icons text-lg">add_circle</span> New Session
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Active Sessions</span>
            <span className="p-2 bg-primary/10 text-primary rounded-lg material-icons">videocam</span>
          </div>
          <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">24</span><span className="text-primary text-sm font-medium">+3 since 9AM</span></div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Students Online</span>
            <span className="p-2 bg-blue-500/10 text-blue-500 rounded-lg material-icons">groups</span>
          </div>
          <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">1,402</span><span className="text-blue-500 text-sm font-medium">82% Participation</span></div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Avg. Duration</span>
            <span className="p-2 bg-amber-500/10 text-amber-500 rounded-lg material-icons">timer</span>
          </div>
          <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">48m</span><span className="text-amber-500 text-sm font-medium">-2m vs avg</span></div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-primary/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Completed Today</span>
            <span className="p-2 bg-purple-500/10 text-purple-500 rounded-lg material-icons">task_alt</span>
          </div>
          <div className="flex items-baseline gap-2"><span className="text-3xl font-bold">156</span><span className="text-purple-500 text-sm font-medium">98% Success</span></div>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-primary/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">All Sessions</button>
            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg text-sm font-medium">Active (24)</button>
            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg text-sm font-medium">Upcoming (12)</button>
            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg text-sm font-medium">History</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-transparent rounded-lg text-sm focus:ring-primary focus:border-primary w-full md:w-64" placeholder="Search teacher or class..." />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg">
              <span className="material-icons">filter_list</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-zinc-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Teacher / Class</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Duration</th>
                <th className="px-6 py-4 font-semibold">Attendance</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {sessions.map((session, idx) => (
                <tr key={idx} className="hover:bg-primary/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {session.avatar ? (
                        <img src={session.avatar} alt="" className="w-10 h-10 rounded-lg" />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400">
                          <span className="material-icons">person</span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white leading-tight">{session.teacher}</p>
                        <p className="text-xs text-slate-500">{session.class}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {session.status === 'live' && (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-medium text-primary uppercase">Live</span>
                      </div>
                    )}
                    {session.status === 'upcoming' && (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-700"></span>
                        <span className="text-sm font-medium text-slate-400 uppercase">Upcoming</span>
                      </div>
                    )}
                    {session.status === 'finished' && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-icons text-sm">check_circle</span>
                        <span className="text-sm font-medium uppercase">Finished</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {session.status === 'live' ? (
                      <>
                        <p className="text-sm">{session.duration}</p>
                        <div className="w-24 h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-full mt-1">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${(parseInt(session.duration)/60)*100}%` }}></div>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-slate-400 italic">{session.duration}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{session.students} / {session.total}</p>
                    {session.attendance && <p className="text-[10px] text-primary">{session.attendance}% Active</p>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {session.status === 'live' && (
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Join Class">
                          <span className="material-icons">login</span>
                        </button>
                        <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="End Session">
                          <span className="material-icons">cancel</span>
                        </button>
                      </div>
                    )}
                    {session.status === 'upcoming' && (
                      <button className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 text-xs font-medium rounded-md hover:bg-slate-200 transition-colors">
                        Edit Schedule
                      </button>
                    )}
                    {session.status === 'finished' && (
                      <button className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 text-xs font-medium rounded-md hover:bg-slate-200 transition-colors">
                        Attendance Report
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-primary/10 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 1 to 4 of 48 sessions</p>
          <div className="flex items-center gap-1">
            <button className="p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded disabled:opacity-30" disabled>
              <span className="material-icons text-lg">chevron_left</span>
            </button>
            <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">1</button>
            <button className="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-medium rounded">2</button>
            <button className="px-3 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-medium rounded">3</button>
            <button className="p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded">
              <span className="material-icons text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* System Performance Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl border border-primary/10 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-icons text-primary">campaign</span> System Performance
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
              <span className="material-icons text-primary mt-0.5">info</span>
              <div>
                <p className="text-sm font-semibold">Real-time Data Streaming</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">All session stats are updating every 15 seconds automatically.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg border-l-4 border-amber-500">
              <span className="material-icons text-amber-500 mt-0.5">report_problem</span>
              <div>
                <p className="text-sm font-semibold">Connection Alert</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">High latency detected in Server Region US-East. Affecting 4 active sessions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-primary/10 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-icons text-primary">location_on</span> Campus Traffic
          </h3>
          <div className="flex-1 bg-slate-100 dark:bg-zinc-800 rounded-lg relative overflow-hidden min-h-[160px]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqEbaQXBguCA65l3Hce9I3_9mMRr1xg38OrD68OfETPFtQn3IxMGeCMnZwWSIYgoQdV47bYsYWlJKCDBp7s5bmeW0soC3L4CHoUk488itQQjuKBgPYksTTjxiEbgmQ2TnnTb4nUQxZxc75Oz_MpLZN1_FIXP3gOUu6bVLPd-EBqXzPIkTztMgRkV6TBpSH5EPvoqrGzd28vvDpEQDFC6DEC8b46fzcEZHUJmc45nrneeTyR9ppJukrmH7P_YUYx8VOL9-US0RV5c" alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <span className="text-[10px] font-bold mt-1 bg-white/80 dark:bg-black/80 px-1 rounded">Science Wing</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white dark:bg-zinc-900 px-2 py-1 rounded shadow text-[10px] font-bold">
              Live Peak: 92%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;