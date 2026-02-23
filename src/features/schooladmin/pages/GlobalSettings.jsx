import React from 'react';

const GlobalSettings = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            <a href="#branding" className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary border-r-4 border-primary">
              <span className="material-icons mr-3 text-[20px]">palette</span> Branding
            </a>
            <a href="#attendance" className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-icons mr-3 text-[20px]">assignment_turned_in</span> Attendance
            </a>
            <a href="#fees" className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-icons mr-3 text-[20px]">account_balance_wallet</span> Fees & Finance
            </a>
            <a href="#system" className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-icons mr-3 text-[20px]">dns</span> System & Data
            </a>
          </nav>
          <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Support</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">Need help configuring these settings for your institution?</p>
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-primary border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
              <span className="material-icons text-sm">help_outline</span> View Documentation
            </button>
          </div>
        </aside>

        {/* Settings Content */}
        <div className="flex-1 space-y-8 pb-20">
          {/* Branding Section */}
          <section id="branding" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold">Visual Branding</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage how your school's identity appears to students and staff.</p>
            </div>
            <div className="p-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold">School Logo</label>
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Wx2GK8Kfex0Ox0oPabYzVoKOrEnntZSDcMVGFzrsy8WNkOLuonIN3oJVyj_zDp4891IKEiNdTenu8yaFr7CbT3szx8S7xtZeOVbGdBnju1zOC8249NGuxbTaZMw5z4zJBARogXElXi9vnTbpH1TempPPV1rDmw9y8uGxUGLjRZufmVWdm4BWLJZsQvqfSyiUu8tt0EAUCyVXphjPK2Mi7921rDJPEWvFluh-ZKMdOi3Rx202R4LiiOtmWi0XJfaRr8Ie8QGeHak" alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-2 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary transition-colors">Change Logo</button>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-semibold">Favicon (Browser Icon)</label>
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <span className="material-icons text-primary">school</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="px-4 py-1.5 text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary transition-colors">Upload</button>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">32x32 SVG or ICO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Primary School Color</label>
                  <div className="flex gap-3">
                    <div className="flex-1 flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="h-8 w-8 rounded-md bg-[#11d452] shadow-sm"></div>
                      <span className="text-sm font-mono">#11D452</span>
                    </div>
                    <button className="px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-primary">
                      <span className="material-icons text-slate-400">colorize</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">School Motto</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary" defaultValue="Empowering Minds, Shaping Futures" />
                </div>
              </div>
            </div>
          </section>

          {/* Attendance Section */}
          <section id="attendance" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Attendance Controls</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Define how attendance records are managed and locked.</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Operational</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="max-w-md">
                  <h4 className="text-sm font-semibold">Attendance Lock Period</h4>
                  <p className="text-xs text-slate-500">Number of days after which teachers can no longer edit attendance records.</p>
                </div>
                <div className="flex items-center gap-3">
                  <input className="w-20 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-center" type="number" defaultValue="3" />
                  <span className="text-sm font-medium text-slate-500">Days</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl">
                    <div className="flex gap-3">
                      <span className="material-icons text-primary/60">history_edu</span>
                      <div>
                        <p className="text-sm font-semibold">Mandatory Reasons</p>
                        <p className="text-[11px] text-slate-400">Require reasons for late/absent marks</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-800 rounded-xl">
                    <div className="flex gap-3">
                      <span className="material-icons text-primary/60">notifications_active</span>
                      <div>
                        <p className="text-sm font-semibold">Parent Notifications</p>
                        <p className="text-[11px] text-slate-400">Auto-notify parents on absence</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold">Predefined Edit Reasons</h4>
                    <button className="text-xs text-primary font-bold">+ Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full">Medical Leave <button className="material-icons text-[14px]">close</button></span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full">Technical Issue <button className="material-icons text-[14px]">close</button></span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full">Emergency <button className="material-icons text-[14px]">close</button></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fees Section */}
          <section id="fees" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold">Fees & Finance Rules</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Configure payment gateways, late fee penalties, and partial payments.</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold">Partial Payments</h4>
                        <p className="text-xs text-slate-500">Allow students to pay fees in multiple installments.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="pl-4 border-l-2 border-primary/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">Min. Initial Installment</span>
                        <div className="relative">
                          <span className="absolute left-3 top-1.5 text-xs text-slate-400">$</span>
                          <input className="w-24 pl-6 pr-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded text-xs text-right" type="number" defaultValue="100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/30 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
                  <h4 className="text-sm font-bold flex items-center gap-2">
                    <span className="material-icons text-orange-500 text-lg">event_busy</span> Late Fee Rules
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Calculation Method</label>
                      <select className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm">
                        <option>Fixed Amount per Day</option>
                        <option>Percentage of Balance</option>
                        <option>One-time Penalty</option>
                      </select>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Amount</label>
                        <input className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm" type="text" defaultValue="5.00" />
                      </div>
                      <div className="flex-1">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Grace Period</label>
                        <input className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-sm" type="number" defaultValue="5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Section */}
          <section id="system" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold">System Infrastructure</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Technical configurations for notifications and data integrity.</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBng-MWa9dC3L3j6oqoaiRND7EwhN8AqkJEg4QUt-N745_tf-jNQY8mVd0sdndayG5BqPmfLG9jLy2iA0mDWfWhi8SEH1gnUeXSjASHR0ZoSEYYQdzkeeUF3cz2uo4_1sW0TbmE_vsyu4-ZsaSIofAMBhnJxZwkFfCwEY9wTA1GjfE0aqC_UHWik1W8CePT_8gDyUsYHNzjCz4uua9FsMndQm_q61QbghlMXuGioZ1x__93H6aQUcQjAKM5rK8M_lnE6LCYNbEv0Ew" alt="" className="w-5 h-5 object-contain" />
                  FCM Server Key (Push Notifications)
                </label>
                <div className="flex gap-2">
                  <input className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-mono focus:ring-primary" type="password" defaultValue="AAAA_example_key_x83jd82ns82kdms02kdls82kdms82ndks" />
                  <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors">
                    <span className="material-icons text-sm">visibility</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 italic">This key is required to send real-time mobile push notifications.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-sm font-bold">Automated Backups</h4>
                      <p className="text-xs text-slate-500">Last successful backup: 2 hours ago</p>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  <div className="space-y-4">
                    <select className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold">
                      <option>Daily at 02:00 AM</option>
                      <option>Weekly on Sundays</option>
                      <option>Every 6 Hours</option>
                    </select>
                    <button className="w-full px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-sm">Backup Now</button>
                  </div>
                </div>
                <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-sm font-bold mb-2">Storage Usage</h4>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-slate-500">Used: 42.8 GB</span>
                    <span className="text-slate-500">Limit: 100 GB</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '42.8%' }}></div>
                  </div>
                  <button className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50">Manage Storage</button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Warning Card */}
          <div className="p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl flex gap-4">
            <span className="material-icons text-orange-500">warning</span>
            <div>
              <h4 className="text-sm font-bold text-orange-800 dark:text-orange-300">Unsaved Configuration Changes</h4>
              <p className="text-xs text-orange-700 dark:text-orange-400 leading-relaxed">You have modified "Attendance Lock Period" and "FCM Keys". These changes will not take effect until you click the Save button above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettings;