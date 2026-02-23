import React from 'react';

const Announcements = () => {
  const history = [
    { id: 'AN-9421', title: 'Final Exam Timetable Q4', audience: 'ALL SCHOOL', status: 'sent', date: 'Oct 24, 2023', time: '09:15 AM' },
    { id: 'AN-9418', title: 'Emergency: Fire Drill Tomorrow', audience: 'TEACHERS', status: 'sent', date: 'Oct 23, 2023', time: '02:30 PM' },
    { id: 'AN-9415', title: 'School Fair Newsletter - Vol 2', audience: 'ALL SCHOOL', status: 'failed', date: 'Oct 22, 2023', time: '11:00 AM' },
    { id: 'AN-9410', title: 'Parent-Teacher Meeting Schedule', audience: 'CLASS 10B', status: 'sent', date: 'Oct 20, 2023', time: '08:00 AM' },
    { id: 'AN-9405', title: 'Uniform Policy Reminder', audience: 'ALL SCHOOL', status: 'sent', date: 'Oct 19, 2023', time: '04:45 PM' },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      {/* Composer Section */}
      <section className="xl:col-span-5 space-y-6">
        <div className="bg-white dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-emerald-50 dark:border-emerald-900/50 flex items-center justify-between bg-emerald-50/30 dark:bg-emerald-950/20">
            <h2 className="font-bold text-emerald-900 dark:text-emerald-50 flex items-center gap-2">
              <span className="material-icons-outlined text-primary">edit_note</span>
              Message Composer
            </h2>
            <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider">New Draft</span>
          </div>
          <div className="p-6 space-y-6">
            {/* Target Audience */}
            <div>
              <label className="block text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Target Audience</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center justify-center py-4 px-2 rounded-lg border-2 border-primary bg-primary/10 text-emerald-900 dark:text-primary transition-all">
                  <span className="material-icons-outlined mb-1">groups</span>
                  <span className="text-[11px] font-bold uppercase">All School</span>
                </button>
                <button className="flex flex-col items-center justify-center py-4 px-2 rounded-lg border-2 border-emerald-100 dark:border-emerald-800 hover:border-emerald-200 dark:hover:border-emerald-700 text-emerald-600 dark:text-emerald-400 transition-all">
                  <span className="material-icons-outlined mb-1">meeting_room</span>
                  <span className="text-[11px] font-bold uppercase">Classroom</span>
                </button>
                <button className="flex flex-col items-center justify-center py-4 px-2 rounded-lg border-2 border-emerald-100 dark:border-emerald-800 hover:border-emerald-200 dark:hover:border-emerald-700 text-emerald-600 dark:text-emerald-400 transition-all">
                  <span className="material-icons-outlined mb-1">badge</span>
                  <span className="text-[11px] font-bold uppercase">Teachers Only</span>
                </button>
              </div>
            </div>

            {/* Announcement Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-300 mb-1.5 uppercase tracking-wide">Subject Line</label>
                <input type="text" className="w-full bg-emerald-50/50 dark:bg-emerald-900/30 border-emerald-100 dark:border-emerald-800 rounded-lg focus:ring-primary focus:border-primary text-emerald-900 dark:text-emerald-50 placeholder-emerald-300 dark:placeholder-emerald-700" placeholder="e.g. Winter Holiday Schedule Update" />
              </div>
              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-300 mb-1.5 uppercase tracking-wide">Message Content</label>
                <div className="bg-emerald-50/50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-1 p-2 border-b border-emerald-100 dark:border-emerald-800 bg-white dark:bg-emerald-900/20">
                    <button className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded text-emerald-600"><span className="material-icons-outlined text-sm">format_bold</span></button>
                    <button className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded text-emerald-600"><span className="material-icons-outlined text-sm">format_italic</span></button>
                    <button className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded text-emerald-600"><span className="material-icons-outlined text-sm">format_list_bulleted</span></button>
                    <div className="w-px h-4 bg-emerald-200 dark:bg-emerald-700 mx-1"></div>
                    <button className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded text-emerald-600"><span className="material-icons-outlined text-sm">link</span></button>
                    <button className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-800 rounded text-emerald-600"><span className="material-icons-outlined text-sm">image</span></button>
                  </div>
                  <textarea className="w-full bg-transparent border-none focus:ring-0 text-emerald-900 dark:text-emerald-50 placeholder-emerald-300 dark:placeholder-emerald-700 p-4 resize-none" placeholder="Type your school-wide announcement here..." rows="6"></textarea>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="flex-1 bg-primary hover:opacity-90 text-emerald-950 font-bold py-3 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <span className="material-icons-outlined">send</span>
                Broadcast Now
              </button>
              <button className="px-6 py-3 rounded-lg border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                Save Draft
              </button>
            </div>
          </div>
        </div>
        <div className="bg-emerald-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden group">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <span className="material-icons-outlined text-primary">bolt</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Scheduled Broadcasts</h3>
              <p className="text-emerald-300 text-sm">You have 2 messages pending for tomorrow.</p>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <span className="material-icons-outlined text-[120px]">calendar_month</span>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="xl:col-span-7 space-y-6">
        <div className="bg-white dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm flex flex-col h-full min-h-[600px]">
          <div className="p-5 border-b border-emerald-50 dark:border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-bold text-emerald-900 dark:text-emerald-50 flex items-center gap-2">
              <span className="material-icons-outlined text-primary">history</span>
              Recent Broadcast History
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 text-sm">search</span>
                <input className="pl-9 pr-4 py-1.5 text-xs bg-emerald-50 dark:bg-emerald-900/30 border-emerald-100 dark:border-emerald-800 rounded-full focus:ring-primary focus:border-primary w-full sm:w-48" placeholder="Search history..." />
              </div>
              <button className="p-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                <span className="material-icons-outlined text-sm">filter_list</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-emerald-50/50 dark:bg-emerald-950/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Announcement Details</th>
                  <th className="px-6 py-4">Audience</th>
                  <th className="px-6 py-4">Delivery Status</th>
                  <th className="px-6 py-4">Sent At</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50 dark:divide-emerald-900/50">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-900/20 transition-colors">
                    <td className="px-6 py-5">
                      <div className="font-semibold text-emerald-900 dark:text-emerald-50 text-sm">{item.title}</div>
                      <div className="text-[11px] text-emerald-500 dark:text-emerald-400 mt-0.5">Reference ID: {item.id}</div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        item.audience === 'ALL SCHOOL' ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' :
                        item.audience === 'TEACHERS' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' :
                        'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                      }`}>
                        {item.audience}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className={`flex items-center gap-1.5 ${item.status === 'sent' ? 'text-primary' : 'text-rose-500'}`}>
                        <span className="material-icons-outlined text-[16px]">{item.status === 'sent' ? 'check_circle' : 'error_outline'}</span>
                        <span className="text-xs font-bold uppercase tracking-tight">{item.status === 'sent' ? 'Sent' : 'Failed'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-xs text-emerald-700 dark:text-emerald-300">{item.date}</div>
                      <div className="text-[10px] text-emerald-400">{item.time}</div>
                    </td>
                    <td className="px-6 py-5">
                      {item.status === 'failed' ? (
                        <button className="text-rose-400 hover:text-rose-600 transition-colors flex items-center gap-1">
                          <span className="text-[10px] font-bold">RETRY</span>
                          <span className="material-icons-outlined text-sm">refresh</span>
                        </button>
                      ) : (
                        <button className="text-emerald-400 hover:text-emerald-600 transition-colors">
                          <span className="material-icons-outlined text-sm">more_vert</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-emerald-50 dark:border-emerald-900/50 flex items-center justify-between">
            <p className="text-[11px] text-emerald-500 font-medium">Showing 1 to 5 of 124 announcements</p>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-emerald-100 dark:border-emerald-800 text-emerald-400 hover:bg-emerald-50"><span className="material-icons-outlined text-sm">chevron_left</span></button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-emerald-950 font-bold text-xs">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-emerald-100 dark:border-emerald-800 text-emerald-600 hover:bg-emerald-50 text-xs">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-emerald-100 dark:border-emerald-800 text-emerald-600 hover:bg-emerald-50 text-xs">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-emerald-100 dark:border-emerald-800 text-emerald-400 hover:bg-emerald-50"><span className="material-icons-outlined text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcements;