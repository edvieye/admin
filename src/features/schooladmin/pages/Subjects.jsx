import React from 'react';

const Subjects = () => {
  const subjects = [
    { name: 'Advanced Mathematics', code: 'MATH-401', classes: ['10-A', '10-B', '11-A'], type: 'Compulsory', color: 'primary' },
    { name: 'Computer Science', code: 'CS-202', classes: ['12-B', '12-C'], type: 'Elective', color: 'purple' },
    { name: 'Theoretical Physics', code: 'PHYS-301', classes: ['11-A', '11-C'], type: 'Compulsory', color: 'orange' },
    { name: 'English Literature', code: 'LIT-101', classes: ['All Grades'], type: 'Compulsory', color: 'green' },
  ];

  return (
    <div className="flex h-full">
      {/* Main Table Section */}
      <section className="flex-1 p-8 overflow-y-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-border-forest dark:border-primary/10 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-icons">library_books</span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400 leading-tight">Total Subjects</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-border-forest dark:border-primary/10 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
              <span className="material-icons">assignment_late</span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400 leading-tight">Unassigned Teachers</p>
              <p className="text-2xl font-bold">03</p>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-border-forest dark:border-primary/10 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <span className="material-icons">auto_awesome</span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-400 leading-tight">Elective Subjects</p>
              <p className="text-2xl font-bold">08</p>
            </div>
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white dark:bg-background-dark rounded-xl border border-border-forest dark:border-primary/10 shadow-sm">
          <div className="p-6 border-b border-border-forest dark:border-primary/10 flex justify-between items-center">
            <h2 className="font-bold text-lg">Curriculum Overview</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-border-forest rounded-lg text-sm font-medium hover:bg-background-light flex items-center gap-2">
                <span className="material-icons text-sm">filter_list</span> Filter
              </button>
              <button className="px-4 py-2 border border-border-forest rounded-lg text-sm font-medium hover:bg-background-light flex items-center gap-2">
                <span className="material-icons text-sm">file_download</span> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-background-light/50 dark:bg-white/5 text-neutral-400 text-[11px] uppercase tracking-wider font-bold">
                  <th className="px-6 py-4">Subject Name</th>
                  <th className="px-6 py-4">Code</th>
                  <th className="px-6 py-4">Assigned Classes</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-forest dark:divide-primary/10">
                {subjects.map((subject, idx) => (
                  <tr key={idx} className="hover:bg-background-light/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded bg-${subject.color}/10 text-${subject.color} flex items-center justify-center text-xs font-bold`}>
                          {subject.name.split(' ').map(w => w[0]).join('')}
                        </div>
                        <span className="font-medium">{subject.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-neutral-500">{subject.code}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {subject.classes.map((cls, i) => (
                          <span key={i} className="px-2 py-0.5 bg-background-light rounded text-[10px] font-bold border border-border-forest">{cls}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 bg-${subject.color}/10 text-${subject.color} text-[10px] font-bold rounded-full uppercase`}>{subject.type}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-neutral-400 hover:text-primary transition-colors"><span className="material-icons text-lg">edit</span></button>
                      <button className="text-neutral-400 hover:text-red-500 transition-colors ml-2"><span className="material-icons text-lg">delete</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-border-forest dark:border-primary/10 flex items-center justify-between text-sm text-neutral-400">
            <span>Showing 4 of 24 subjects</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 border border-border-forest rounded flex items-center justify-center hover:bg-background-light transition-colors"><span className="material-icons text-sm">chevron_left</span></button>
              <button className="w-8 h-8 bg-primary text-white rounded flex items-center justify-center font-bold">1</button>
              <button className="w-8 h-8 border border-border-forest rounded flex items-center justify-center hover:bg-background-light transition-colors">2</button>
              <button className="w-8 h-8 border border-border-forest rounded flex items-center justify-center hover:bg-background-light transition-colors">3</button>
              <button className="w-8 h-8 border border-border-forest rounded flex items-center justify-center hover:bg-background-light transition-colors"><span className="material-icons text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Editor */}
      <aside className="w-[400px] bg-white dark:bg-background-dark border-l border-border-forest dark:border-primary/10 flex flex-col h-full shadow-2xl">
        <div className="p-6 border-b border-border-forest dark:border-primary/10 flex items-center justify-between bg-background-light/30">
          <div>
            <h2 className="font-bold text-lg">Add New Subject</h2>
            <p className="text-xs text-neutral-400">Define curriculum & map teachers</p>
          </div>
          <button className="text-neutral-400 hover:text-neutral-600"><span className="material-icons">close</span></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Basic Configuration */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Basic Configuration
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-400 mb-1 block">Subject Name</label>
                <input className="w-full px-4 py-2.5 bg-background-light border border-border-forest rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="e.g. Modern Architecture" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-400 mb-1 block">Unique Code</label>
                  <input className="w-full px-4 py-2.5 bg-background-light border border-border-forest rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="ARCH-101" />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-400 mb-1 block">Type</label>
                  <select className="w-full px-4 py-2.5 bg-background-light border border-border-forest rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option>Compulsory</option>
                    <option>Elective</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-400 mb-1 block">Assigned Classes</label>
                <div className="p-2 border border-border-forest rounded-lg bg-background-light flex flex-wrap gap-2">
                  <span className="bg-white px-2 py-1 rounded text-[11px] font-bold flex items-center gap-1 border border-border-forest shadow-sm">
                    10-A <span className="material-icons text-[10px] cursor-pointer hover:text-red-500">close</span>
                  </span>
                  <span className="bg-white px-2 py-1 rounded text-[11px] font-bold flex items-center gap-1 border border-border-forest shadow-sm">
                    10-B <span className="material-icons text-[10px] cursor-pointer hover:text-red-500">close</span>
                  </span>
                  <button className="text-primary text-[10px] font-bold flex items-center gap-1 hover:underline px-1">+ Add Class</button>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Mapping */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Teacher Mapping
            </h3>
            <div className="space-y-3">
              <p className="text-[11px] text-neutral-500 italic">Assign specific teachers to each class for this subject.</p>
              <div className="flex items-center gap-3 p-3 bg-background-light/50 border border-border-forest rounded-lg group">
                <div className="w-10 text-center font-bold text-xs text-neutral-400 group-hover:text-primary transition-colors">10-A</div>
                <div className="flex-1 relative">
                  <select className="w-full pl-9 pr-4 py-2 bg-white border border-border-forest rounded text-xs focus:ring-1 focus:ring-primary outline-none appearance-none">
                    <option>Dr. Elena Gilbert</option>
                    <option>Mr. Julian Vance</option>
                    <option>Ms. Sarah Connor</option>
                  </select>
                  <span className="material-icons absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">person</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background-light/50 border border-border-forest rounded-lg group">
                <div className="w-10 text-center font-bold text-xs text-neutral-400 group-hover:text-primary transition-colors">10-B</div>
                <div className="flex-1 relative">
                  <select className="w-full pl-9 pr-4 py-2 bg-white border border-border-forest rounded text-xs focus:ring-1 focus:ring-primary outline-none appearance-none">
                    <option>Mr. Julian Vance</option>
                    <option>Dr. Elena Gilbert</option>
                    <option>Ms. Sarah Connor</option>
                  </select>
                  <span className="material-icons absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">person</span>
                </div>
              </div>
              <button className="w-full py-3 border-2 border-dashed border-border-forest rounded-lg text-xs font-bold text-neutral-400 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 mt-4">
                <span className="material-icons text-sm">add</span> Add New Row
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-border-forest bg-background-light/30 flex gap-3">
          <button className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
            Create Subject
          </button>
          <button className="px-6 py-3 border border-border-forest bg-white rounded-lg font-bold text-sm text-neutral-500 hover:bg-background-light transition-all">
            Cancel
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Subjects;