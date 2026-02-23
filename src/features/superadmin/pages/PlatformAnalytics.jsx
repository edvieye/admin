import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';

const PlatformAnalytics = () => {
  const [timeRange, setTimeRange] = useState('Today');
  const [region, setRegion] = useState('All Regions');

  const handleExport = () => {
    toast.success('Exporting report (demo)');
  };

  return (
    <SuperAdminLayout
      pageTitle="Platform Overview"
      pageDescription="Real-time ecosystem performance across all regions"
    >
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTimeRange('Today')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              timeRange === 'Today' ? 'bg-primary text-white' : 'bg-primary/5 text-slate-500 hover:bg-primary/10'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setTimeRange('Last 7 Days')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              timeRange === 'Last 7 Days' ? 'bg-primary text-white' : 'bg-primary/5 text-slate-500 hover:bg-primary/10'
            }`}
          >
            Last 7 Days
          </button>
          <button
            onClick={() => setTimeRange('30 Days')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              timeRange === '30 Days' ? 'bg-primary text-white' : 'bg-primary/5 text-slate-500 hover:bg-primary/10'
            }`}
          >
            30 Days
          </button>
          <button
            onClick={() => setTimeRange('This Year')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              timeRange === 'This Year' ? 'bg-primary text-white' : 'bg-primary/5 text-slate-500 hover:bg-primary/10'
            }`}
          >
            This Year
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-1.5 border border-primary/10">
            <span className="material-icons text-sm text-primary">public</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="bg-transparent border-none text-xs focus:ring-0 cursor-pointer py-0 dark:text-white"
            >
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>Middle East</option>
            </select>
          </div>
          <div className="w-px h-6 bg-primary/20"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Last updated: 2 mins ago</span>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1 */}
        <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <span className="material-icons text-primary">school</span>
            </div>
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              +12.4% <span className="material-icons text-xs">trending_up</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-1">Total Active Schools</p>
          <p className="text-3xl font-bold">1,240</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/10">
            <div className="w-3/4 h-full bg-primary"></div>
          </div>
        </div>
        {/* KPI 2 */}
        <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <span className="material-icons text-blue-500">groups</span>
            </div>
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              +5.2% <span className="material-icons text-xs">trending_up</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-1">Total Active Users</p>
          <p className="text-3xl font-bold">850.4k</p>
          <div className="mt-4 flex gap-1 items-end h-8">
            <div className="w-full bg-blue-500/20 h-4 rounded-sm"></div>
            <div className="w-full bg-blue-500/20 h-6 rounded-sm"></div>
            <div className="w-full bg-blue-500/20 h-5 rounded-sm"></div>
            <div className="w-full bg-blue-500/20 h-8 rounded-sm"></div>
            <div className="w-full bg-blue-500 h-7 rounded-sm"></div>
          </div>
        </div>
        {/* KPI 3 */}
        <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <span className="material-icons text-amber-500">payments</span>
            </div>
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              +18.9% <span className="material-icons text-xs">trending_up</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-1">Platform Revenue (ARR)</p>
          <p className="text-3xl font-bold">$4.25M</p>
          <div className="mt-2 text-[10px] text-slate-400">Projected $5M by Q4</div>
        </div>
        {/* KPI 4 */}
        <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <span className="material-icons text-emerald-500">verified</span>
            </div>
            <span className="text-slate-500 text-xs font-bold">Stable</span>
          </div>
          <p className="text-sm text-slate-500 mb-1">Platform Health</p>
          <p className="text-3xl font-bold">99.98%</p>
          <div className="mt-4 bg-emerald-500/10 rounded-full h-1.5">
            <div className="w-full h-full bg-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart: Monthly Subscription Growth */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg">Monthly Subscription Growth</h3>
              <p className="text-xs text-slate-500">Expansion of new school accounts over 12 months</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-slate-500">Standard</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                <span className="text-slate-500">Premium</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex flex-col justify-between relative">
            <div className="absolute inset-0 flex items-end justify-between px-4">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(115, 17, 212, 0.4)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(115, 17, 212, 0)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M0 200 Q 100 150, 200 180 T 400 100 T 600 140 T 800 60 L 800 256 L 0 256 Z"
                  fill="url(#grad1)"
                  stroke="none"
                />
                <path
                  d="M0 200 Q 100 150, 200 180 T 400 100 T 600 140 T 800 60"
                  fill="none"
                  stroke="#7311d4"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="flex flex-col h-full justify-between w-full border-b border-primary/10">
              <div className="w-full border-t border-primary/5"></div>
              <div className="w-full border-t border-primary/5"></div>
              <div className="w-full border-t border-primary/5"></div>
              <div className="w-full border-t border-primary/5"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-4 px-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        {/* Side Chart: Revenue Trends */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-1">Platform Revenue Trends</h3>
          <p className="text-xs text-slate-500 mb-8">Daily processing volume</p>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Top Stream</span>
              <span className="text-xs font-bold text-primary">SaaS Licensing</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[60%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[55%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[75%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[85%]"></div>
              <div className="w-full bg-primary rounded-t-sm h-[95%]"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[80%]"></div>
            </div>
            <div className="pt-6 border-t border-primary/10 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Subscription</span>
                </div>
                <span className="text-sm font-bold">$2.8M</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-sm">Add-ons</span>
                </div>
                <span className="text-sm font-bold">$0.9M</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span className="text-sm">Training</span>
                </div>
                <span className="text-sm font-bold">$0.5M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left: Regional Distribution */}
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Active Schools by Region</h3>
            <div className="text-primary hover:underline text-xs font-medium cursor-pointer">Detailed Map View</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World Map"
                className="w-full h-48 object-cover rounded-lg opacity-40 grayscale group-hover:grayscale-0 transition-all"
              />
              <div className="absolute top-4 left-10 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(115,17,212,0.8)]"></div>
              <div className="absolute top-12 left-20 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(115,17,212,0.8)] opacity-60"></div>
              <div className="absolute bottom-12 right-24 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(115,17,212,0.8)] animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span>North America</span>
                  <span className="font-bold">540 Schools</span>
                </div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-primary"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span>Europe</span>
                  <span className="font-bold">320 Schools</span>
                </div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[55%] h-full bg-primary"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span>APAC</span>
                  <span className="font-bold">280 Schools</span>
                </div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-primary"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span>Other</span>
                  <span className="font-bold">100 Schools</span>
                </div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                  <div className="w-[20%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right: User Segmentation */}
        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 border border-primary/10 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-1">User Segmentation</h3>
          <p className="text-xs text-slate-500 mb-8">Active Users by Persona</p>
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle className="text-slate-200 dark:text-primary/10" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeWidth="3"></circle>
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" stroke="#7311d4" strokeDasharray="65, 100" strokeWidth="3"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#9333ea" strokeDasharray="25, 100" strokeDashoffset="-65" strokeWidth="3"></circle>
                <circle cx="18" cy="18" fill="none" r="16" stroke="#d946ef" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="3"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">850k</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Total</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-[10px] text-slate-500 uppercase mb-1">Admins</p>
              <p className="text-sm font-bold">12.5k</p>
            </div>
            <div className="text-center p-3 bg-purple-500/5 rounded-lg border border-purple-500/10">
              <p className="text-[10px] text-slate-500 uppercase mb-1">Staff</p>
              <p className="text-sm font-bold">185k</p>
            </div>
            <div className="text-center p-3 bg-pink-500/5 rounded-lg border border-pink-500/10">
              <p className="text-[10px] text-slate-500 uppercase mb-1">Parents</p>
              <p className="text-sm font-bold">652k</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-primary/10 flex items-center justify-between">
          <h3 className="font-bold text-lg">System Health & Live Events</h3>
          <button className="text-xs text-primary font-bold">View Logs</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary/5 text-slate-500 text-[10px] uppercase font-bold">
                <th className="px-6 py-4">Event</th>
                <th className="px-6 py-4">Institution</th>
                <th className="px-6 py-4">Region</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <span className="material-icons text-sm">add_task</span>
                    </div>
                    <span className="text-sm font-medium">New Subscription</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">Oakridge International</td>
                <td className="px-6 py-4 text-sm text-slate-500">London, UK</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold">ACTIVE</span>
                </td>
                <td className="px-6 py-4 text-right text-sm text-slate-500">4 mins ago</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-icons text-sm">update</span>
                    </div>
                    <span className="text-sm font-medium">License Renewal</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">St. Mary's Academy</td>
                <td className="px-6 py-4 text-sm text-slate-500">Toronto, CA</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold">PROCESSING</span>
                </td>
                <td className="px-6 py-4 text-right text-sm text-slate-500">12 mins ago</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <span className="material-icons text-sm">warning</span>
                    </div>
                    <span className="text-sm font-medium">Sync Warning</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">Global Public School</td>
                <td className="px-6 py-4 text-sm text-slate-500">Singapore</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold">WARNING</span>
                </td>
                <td className="px-6 py-4 text-right text-sm text-slate-500">45 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex justify-end">
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
        >
          <span className="material-icons text-sm">file_download</span>
          Export Report
        </button>
      </div>
    </SuperAdminLayout>
  );
};

export default PlatformAnalytics;