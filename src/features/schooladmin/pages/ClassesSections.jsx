import React from 'react';

const ClassesSections = () => {
  // Mock data
  const grades = [
    {
      id: 10,
      name: 'Grade 10',
      description: 'Secondary Education',
      sections: [
        { name: 'A', teacher: 'Mr. Harrison', teacherAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5VrRww6Lg6u_NZwK9qv3ZB0Xm9Kf7uyf5as5c-q7j9pQfGqIj4dReiJ3W36irVy-8PEBXcygePJmeMZfvj3iRVxbWNfnmRAns8Kxy4fIMukMnGWQ72aDjDL141ruoR-bLPeMTcF0vjiPm44-nNYa61XJouTJ6LC7r5W2RloptmOVy9eapim4wZEvrW9rIKy75DB8hubVZAVgSMQdUtGiLNFZAPIqE0YkaVt7R1377HOEoiok_sgZ1R8VgsyHxR7LVsDvMWl7lQls' },
        { name: 'B', teacher: 'Ms. Rivera', teacherAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9BiHTeYatLw_RQ1LRtBkuqmF76Fz211SYJef1FKLobBsBea0chw-Qy5DABzma71iJ5T92Xq2Jn3r5BZyqtPVtNYsMUDM74sFFpSQ-SRI6GcLN9yRHoWWqHMKc4q7kCJUfCk37nrVfW5pldLWvF6HdyYlPgYQOu5qLzdf34DvAGKavjVD55FTjdVL1oLnZGil-PjYxokBjMcBGo-m0qsdA7K4NsSMCLsjep6-aXXAheGnaMGf2eTglNjdGr8Ck6yfrDxgKVShFP8w' },
      ],
    },
    {
      id: 11,
      name: 'Grade 11',
      description: 'Secondary Education',
      sections: [
        { name: 'A', teacher: 'Mr. Chen', teacherAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLWcGYyGO56fER2R3QONE1pabv1Di0c7-8ru6HJfiZ3yuSuXFqRHZ7rPse0D9Ynu5L3WJOjU36utNwx0SQanusfEjl4fU_WkrxarOg6dL-Sb-WIIDwB3OVF2fpIA-6hst0Ad7_dKtSHL_byYFQqmab8kGrAzntXUriCC2-QlQCjjo6sw-tHxVlOuPQL_PXM439jsIxlmfNMblk8d6rvu3EIW-gHPWfBpC07m_qU2Zx48IjFfwqOuWW4Ev2bKtNKMgPs4CT4bQBqww' },
        { name: 'B', teacher: null, teacherAvatar: null },
      ],
    },
    {
      id: 12,
      name: 'Grade 12',
      description: 'Final Year',
      sections: [
        { name: 'A', teacher: 'Mr. Thompson', teacherAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaZPrnimgdrs5TxkihOGy65hTxTh7z2IwfNdkl9AhfSHpLsKB2OsKN0V-1MFn-eNDqUBpQn3bDJwlrYrKATEEZskYjyaJT5YVZiJ4HUV1ZgjAcMssS0c9HhaVIG2pDKnyc42GiP2cZrnJQKXNfHBXT5xIMsFgKFLC-M7sRzg3bfm7hw7yAkWsYymd5rc89LNUDaBR0jCrKxfrG1k5IKcc1c5c1RU_NW7yaCgZy42cTcwj0Gy9HhM_-yFn5Ay-wWtEj8XiYwxWTv48' },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8">
      <div className="flex-1">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <span>Dashboard</span>
            <span className="material-icons text-xs">chevron_right</span>
            <span>Admin</span>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-primary font-medium">Classes & Sections</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Academic Grades</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Manage 12 grade levels and their respective sections.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center gap-2 transition-all">
                <span className="material-icons text-sm">filter_list</span> Filter View
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-md shadow-primary/20 flex items-center gap-2 hover:opacity-90 transition-all">
                <span className="material-icons text-sm">download</span> Export Report
              </button>
            </div>
          </div>
        </header>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {grades.map((grade) => (
            <div key={grade.id} className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800 overflow-hidden hover:border-primary/30 transition-all group">
              <div className="p-5 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center bg-slate-50/50 dark:bg-zinc-800/50">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">{grade.id}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{grade.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{grade.description}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-icons">more_vert</span>
                </button>
              </div>
              <div className="p-4 space-y-3">
                {grade.sections.map((section) => (
                  <div key={section.name} className={`p-3 bg-white dark:bg-zinc-900 border ${section.teacher ? 'border-slate-100 dark:border-zinc-800' : 'border-red-100 dark:border-red-900/20 border-dashed'} rounded-lg flex items-center justify-between group/section hover:shadow-md transition-all`}>
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded ${section.teacher ? 'bg-primary/20' : 'bg-red-100 dark:bg-red-900/20'} flex items-center justify-center ${section.teacher ? 'text-primary' : 'text-red-500'} font-bold text-sm`}>{section.name}</div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Section {section.name}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {section.teacher ? (
                            <>
                              <div className="h-4 w-4 rounded-full overflow-hidden border border-primary/20">
                                <img src={section.teacherAvatar} alt="" className="w-full h-full object-cover" />
                              </div>
                              <span className="text-[10px] text-slate-500">{section.teacher}</span>
                            </>
                          ) : (
                            <>
                              <span className="material-icons text-[12px] text-red-500">warning</span>
                              <span className="text-[10px] text-red-500 font-medium italic">No Teacher Assigned</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    {section.teacher ? (
                      <div className="flex gap-1 opacity-0 group-hover/section:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-lg">edit</span></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"><span className="material-icons text-lg">delete</span></button>
                      </div>
                    ) : (
                      <button className="px-2 py-1 bg-red-500 text-white text-[10px] rounded font-bold hover:bg-red-600 transition-colors">Assign</button>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <button className="w-full py-2 border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-lg text-xs font-semibold text-slate-400 hover:border-primary/40 hover:text-primary transition-all flex items-center justify-center gap-2">
                  <span className="material-icons text-xs">add</span> New Section
                </button>
              </div>
            </div>
          ))}

          {/* Add New Grade Placeholder */}
          <button className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-all group">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">add</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-primary">Create New Grade</p>
              <p className="text-xs text-slate-500 max-w-[160px] mx-auto mt-1">Add a new academic level to your school structure.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right Action Side Panel */}
      <aside className="xl:w-96 w-full flex flex-col gap-6">
        {/* Create Section Form */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-slate-200 dark:border-zinc-800 overflow-hidden sticky top-24">
          <div className="p-6 bg-primary text-white">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-icons">add_circle</span>
              Quick Create
            </h3>
            <p className="text-white/80 text-xs mt-1 leading-relaxed">Fill out the details below to instantly add a new section to an existing grade.</p>
          </div>
          <div className="p-6">
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Grade Level</label>
                <select className="w-full bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                  <option>Select Grade</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Section Name</label>
                <div className="flex gap-2">
                  <input className="flex-1 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="e.g. Section C" type="text" />
                  <div className="w-12 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">C</div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Assign Class Teacher</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-primary focus:border-primary">
                    <option>Search teacher...</option>
                    <option>Dr. Sarah Miller (Available)</option>
                    <option>Mr. Kevin Hart (Available)</option>
                    <option>Ms. Elena Rodriguez (Busy)</option>
                  </select>
                  <p className="mt-2 text-[10px] text-slate-400 italic flex items-center gap-1">
                    <span className="material-icons text-[12px]">info</span>
                    Only available teachers are shown by default.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-3">
                <button className="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:opacity-95 transition-all" type="submit">
                  Create Section
                </button>
                <button className="w-full py-3 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 rounded-lg font-bold hover:bg-slate-200 transition-all" type="button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Statistics/Info Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800 p-6">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Ecosystem Summary</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Total Grades</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Active Sections</span>
              <span className="font-bold">34</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Unassigned Sections</span>
              <span className="font-bold text-red-500">2</span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-primary" style={{ width: '85%' }}></div>
            </div>
            <p className="text-[10px] text-slate-500 text-center">85% of sections have assigned class teachers.</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800 p-6">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Recent Changes</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <span className="material-icons text-sm">add</span>
              </div>
              <div>
                <p className="text-xs font-bold">New Section Created</p>
                <p className="text-[10px] text-slate-500">Grade 10 - Section C added by Admin</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="material-icons text-sm">person</span>
              </div>
              <div>
                <p className="text-xs font-bold">Teacher Reassigned</p>
                <p className="text-[10px] text-slate-500">Ms. Rivera moved to Grade 10 - B</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ClassesSections;