import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from "../../../components/common/StatCard";
import AnnouncementItem from "../../../components/common/AnnouncementItem";


const Dashboard = () => {
  // Mock data – replace with useDashboard hook
  const stats = {
    attendancePercentage: 94.2,
    pendingFees: 42850,
    staffCount: 156,
    activeClasses: 42,
    feesCollected: 182400,
    expectedFees: 225250,
    staffAvailability: {
      academic: { present: 124, total: 128 },
      admin: { present: 18, total: 18 },
      maintenance: { present: 9, total: 10 },
    },
  };

  const announcements = [
    {
      id: 1,
      date: { month: 'OCT', day: 28 },
      title: 'Annual Sports Day Planning Meeting',
      priority: 'High Priority',
      description: 'All department heads are requested to assemble in the main conference hall to finalize the schedule for the upcoming sports meet.',
      location: 'Admin Office',
      time: '10:30 AM',
    },
    {
      id: 2,
      date: { month: 'OCT', day: 27 },
      title: 'Mid-Term Results Publication',
      priority: 'Standard',
      description: 'The mid-term examination results for Grades 9-12 have been uploaded to the student portal for review.',
      location: 'Exam Dept',
      time: '04:00 PM',
    },
    {
      id: 3,
      date: { month: 'OCT', day: 25 },
      title: 'Holiday Notice: Founder\'s Day',
      priority: 'Info',
      description: 'The school will remain closed this Friday in observance of Founder\'s Day. Regular classes resume Monday.',
      location: 'Principal Office',
      time: '09:00 AM',
    },
  ];

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Attendance %"
          value={`${stats.attendancePercentage}%`}
          icon="how_to_reg"
          trend="+1.2% from yesterday"
          progress={94.2}
          subtext="2,140 / 2,272 Students present"
        />
        <StatCard
          title="Pending Fee Collection"
          value={`$${stats.pendingFees.toLocaleString()}`}
          icon="account_balance_wallet"
          trend="12% more than last month"
          trendColor="red"
        />
        <StatCard
          title="Total Staff Strength"
          value={stats.staffCount}
          icon="people"
          subtext="5 Staff members on leave today"
        />
        <StatCard
          title="Active Classes"
          value={stats.activeClasses}
          icon="local_library"
          subtext="Average 28 students per class"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Announcements */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-forest-light rounded-xl border border-gray-100 dark:border-forest overflow-hidden shadow-sm">
            <div className="p-6 border-b border-gray-100 dark:border-forest flex justify-between items-center">
              <h2 className="text-lg font-bold text-forest dark:text-white">Recent Announcements</h2>
              <Link to="/announcements" className="text-primary text-sm font-semibold hover:underline">
                View All
              </Link>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-forest">
              {announcements.map((ann) => (
                <AnnouncementItem key={ann.id} announcement={ann} />
              ))}
            </div>
          </div>
        </div>

        {/* Side Column */}
        <div className="space-y-8">
          {/* Financial Health Card */}
          <div className="bg-forest dark:bg-black text-white p-6 rounded-xl border border-forest-light shadow-xl relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <span className="material-icons mr-2 text-primary">analytics</span>
              Financial Health
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Fees Collected</span>
                <span className="font-bold text-primary">${stats.feesCollected.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Expected Total</span>
                <span className="font-bold">${stats.expectedFees.toLocaleString()}</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 mb-1">
                  <span>Collection Progress</span>
                  <span>81%</span>
                </div>
                <div className="h-1.5 w-full bg-forest-light rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '81%' }}></div>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-forest-light border border-primary/30 rounded-lg text-sm font-bold hover:bg-forest transition-colors">
                Generate Financial Report
              </button>
            </div>
          </div>

          {/* Staff Availability */}
          <div className="bg-white dark:bg-forest-light rounded-xl border border-gray-100 dark:border-forest p-6 shadow-sm">
            <h3 className="font-bold text-forest dark:text-white mb-6 flex items-center">
              <span className="material-icons mr-2 text-primary">badge</span>
              Staff Availability
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Academic Staff</span>
                </div>
                <span className="text-sm font-bold">{stats.staffAvailability.academic.present} / {stats.staffAvailability.academic.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Administration</span>
                </div>
                <span className="text-sm font-bold">{stats.staffAvailability.admin.present} / {stats.staffAvailability.admin.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <span className="text-sm font-medium">Maintenance</span>
                </div>
                <span className="text-sm font-bold">{stats.staffAvailability.maintenance.present} / {stats.staffAvailability.maintenance.total}</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-400 font-bold uppercase mb-3">On Leave Today</p>
              <div className="flex -space-x-2 overflow-hidden">
                {/* Placeholder avatars */}
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcnHFLMGE6SGVP7d6qkuue3IAZcB_J-S-4krYShy7LuP_m8tXQT5tWCls9fNZ1IBGVeitFXqaCM2Fzw3HjmUMhqGmvaXkNenyC42tH32AwmayZ9POuu5RxjywGuh5X9SPxsIs62mgmkJAQY3rqNHwEbnIGxr8BEvA6Pmf-b3PHZ2tfwVXVU3_qdoRXb5uHSlqthf2iZyDgBfuOEdFMIqw_n6bK65H1Aqr_e76Qvdicz8Drn6Mz6k0aoftlnqZ4apo0JrAOssvKQU" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGYgnFIqF1LVu2F2aE9hYnxE3aUhg4rWxpHe66qI22GN8SR82rhy5-LSr2110jKlMhyTpN247hCvEvn0zQTUSzMvHulbTAlBw1hK-656DbWdh10bRBS0HHb2rN8Ruwjv4NnbgJU1pvx0xJlVMppkzQlb3RqA0yr3ZV43vnE1ZckkRlGclcqOBQgz7W5bhJCncN54HGlCBn2VNCGyH9yn0f-SWxcBHRmvTkHaI4fZKdyULMQVJCyulraSlRtveYvTOhAzdnj_YOnus" alt="" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZpAPkVRNyfsW21BtFuMN_QqoAh0TD4v-M9OeMCmEW84Si_lp46vgdyb_vz9Yr-l7SVNx13L2wOE7Q0BvomOmBxaqGA3MbVYMM3UPaZPi212T_atPZopFXqHkY7b-XXT-hjV_oTz89NJWWizmdeglYuwRdXfbZg5TQ5ld3vD6MI5umXCW3p68KV8DUge0rPq9WKer-d8BWf1pbXv5TvM_xXAifmmN55nNdHlLTkdeJu-CUGvSqyzNO2e2kbA0hJLFhpD2-qIsZHpM" alt="" />
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-forest text-[10px] font-bold text-gray-500 ring-2 ring-white dark:ring-forest">+2</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Operations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-primary rounded-lg">
            <span className="material-icons text-forest">file_download</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Download Attendance</h4>
            <p className="text-xs text-gray-500">PDF, Excel format available</p>
          </div>
        </div>
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-primary rounded-lg">
            <span className="material-icons text-forest">mail</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Send Fee Reminders</h4>
            <p className="text-xs text-gray-500">Auto-notify pending accounts</p>
          </div>
        </div>
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-primary rounded-lg">
            <span className="material-icons text-forest">backup</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Backup Cloud Database</h4>
            <p className="text-xs text-gray-500">Last synced: 2 hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;