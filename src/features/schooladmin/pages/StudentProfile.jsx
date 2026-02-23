import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StudentProfile = () => {
  const { id } = useParams();
  // Mock data – replace with useStudent hook
  const student = {
    id: id,
    fullName: 'Benjamin T. Harrison',
    status: 'Active',
    studentId: 'STU-2024-0891',
    grade: 'Grade 11-B',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVdiiReTTPxRGZZRKJ0usL_BdIZ5F7LGYhP2cduD6eywrm5I9IidZzIeASUpRKrLE1KwMGIo8tEfAhvRakl_JIsU7GHDOj-BHl5NgKiQKtXB5CydwQv2_vBx6dA2L6WlV8We4VWSFrvZpz4ofOvlNtXELKRoVIckWabYhxK-eL28vRxHcKlqS9usJlPTQ1IKrGo9kYi5mCAF8y8fiAnoNpLTGFjKN2GxTf8DE5LVtwEMOYOcuUuErr2zOhKxrsmBurFOrKATbXLmE',
    personalInfo: {
      fullName: 'Benjamin Thomas Harrison',
      dob: 'May 14, 2007 (17 Years)',
      gender: 'Male',
      bloodGroup: 'O Positive (O+)',
      address: '4221 Forest Grove, Maplewood Heights, Suite 204, Seattle, WA 98101',
    },
    guardian: {
      father: 'Jonathan Harrison',
      mother: 'Sarah Harrison',
      phone: '+1 (555) 123-4567',
      email: 'j.harrison@example.com',
    },
    academic: [
      { year: '2023 - 2024', grade: 'Grade 10', section: 'A', gpa: 3.92 },
      { year: '2022 - 2023', grade: 'Grade 09', section: 'A', gpa: 3.85 },
    ],
    feeStatus: {
      totalPaid: 4500,
      pending: 750,
      dueDate: 'Oct 15, 2024',
    },
    attendance: {
      present: 142,
      absent: 5,
      percentage: 96.4,
    },
    documents: [
      { name: 'Birth_Cert.pdf', uploaded: '12 Aug 2024', icon: 'picture_as_pdf' },
      { name: 'ID_Proof_Front.png', uploaded: '12 Aug 2024', icon: 'image' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-primary transition-colors">Dashboard</Link>
        <span className="mx-2 px-1">/</span>
        <Link to="/students" className="hover:text-primary transition-colors">Students</Link>
        <span className="mx-2 px-1">/</span>
        <span className="text-slate-900 dark:text-white">Profile View</span>
      </nav>

      {/* Profile Top Banner */}
      <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent relative">
          <div className="absolute bottom-4 right-6 flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span className="material-icons text-lg">swap_horiz</span>
              Transfer Student
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span className="material-icons text-lg">edit</span>
              Edit Student
            </button>
          </div>
        </div>
        <div className="px-8 pb-8 flex flex-col md:flex-row items-end gap-6 -mt-12">
          <div className="relative">
            <img
              src={student.avatar}
              alt="Student Avatar"
              className="w-32 h-32 rounded-xl object-cover border-4 border-white dark:border-slate-900 shadow-xl"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-primary border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{student.fullName}</h1>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider">Active</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 flex items-center gap-4 mt-1">
              <span className="flex items-center gap-1"><span className="material-icons text-sm">badge</span> ID: {student.studentId}</span>
              <span className="flex items-center gap-1"><span className="material-icons text-sm">school</span> {student.grade}</span>
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="px-8 border-t border-slate-200 dark:border-primary/10 bg-slate-50/50 dark:bg-slate-900/80">
          <nav className="flex gap-8">
            {['Personal Info', 'Academic History', 'Fees', 'Attendance', 'Documents'].map((tab, idx) => (
              <button
                key={tab}
                className={`py-4 border-b-2 ${idx === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400'} font-semibold text-sm hover:text-primary transition-colors`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Personal Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* General Details */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">person</span>
              General Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.personalInfo.fullName}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Date of Birth</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.personalInfo.dob}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Gender</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.personalInfo.gender}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Blood Group</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.personalInfo.bloodGroup}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Residential Address</p>
                <p className="font-medium text-slate-900 dark:text-white leading-relaxed">{student.personalInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="material-icons text-primary">groups</span>
              Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Father's Name</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.guardian.father}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Primary Phone</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.guardian.phone}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Mother's Name</p>
                <p className="font-medium text-slate-900 dark:text-white">{student.guardian.mother}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="font-medium text-slate-900 dark:text-white underline decoration-primary/30">{student.guardian.email}</p>
              </div>
            </div>
          </div>

          {/* Academic History Summary */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-icons text-primary">history_edu</span>
                Academic Progress Summary
              </h3>
              <button className="text-primary text-sm font-semibold hover:underline">View Full History</button>
            </div>
            <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Year/Session</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Grade</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Section</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">GPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {student.academic.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-4 text-sm">{item.year}</td>
                      <td className="px-4 py-4 text-sm">{item.grade}</td>
                      <td className="px-4 py-4 text-sm">{item.section}</td>
                      <td className="px-4 py-4 text-sm text-right font-bold text-primary">{item.gpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Stats & Financials */}
        <div className="space-y-8">
          {/* Fee Status Card */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-icons text-primary">account_balance_wallet</span>
              Fee Status
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Total Paid</span>
                  <span className="text-sm font-bold text-primary">${student.feeStatus.totalPaid.toLocaleString()}.00</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                <div>
                  <p className="text-xs text-red-500 font-bold uppercase">Pending Balance</p>
                  <p className="text-xl font-bold text-red-600 dark:text-red-400">${student.feeStatus.pending}.00</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase">Due Date</p>
                  <p className="text-sm font-medium">{student.feeStatus.dueDate}</p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-slate-900 dark:bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                Generate Invoice
              </button>
            </div>
          </div>

          {/* Attendance Mini Card */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-icons text-primary">event_available</span>
              Attendance
            </h3>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{student.attendance.percentage}%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Overall Present</p>
              </div>
              <div className="flex gap-1 items-end h-12">
                <div className="w-3 bg-primary/20 rounded-t h-8"></div>
                <div className="w-3 bg-primary/40 rounded-t h-10"></div>
                <div className="w-3 bg-primary/60 rounded-t h-9"></div>
                <div className="w-3 bg-primary rounded-t h-12"></div>
                <div className="w-3 bg-primary/50 rounded-t h-10"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500">Days Present</p>
                <p className="text-lg font-bold">{student.attendance.present}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-500">Absent</p>
                <p className="text-lg font-bold">{student.attendance.absent}</p>
              </div>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-primary/10 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-icons text-primary">folder_open</span>
                Documents
              </h3>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">3 Files</span>
            </div>
            <ul className="space-y-3">
              {student.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded-lg group">
                  <div className="flex items-center gap-3">
                    <span className={`material-icons text-${doc.icon === 'picture_as_pdf' ? 'red' : 'blue'}-500`}>{doc.icon}</span>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium truncate w-32">{doc.name}</p>
                      <p className="text-[10px] text-slate-500">Uploaded {doc.uploaded}</p>
                    </div>
                  </div>
                  <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-icons text-lg">download</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 py-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-500 hover:border-primary hover:text-primary transition-all">
              + Upload Document
            </button>
          </div>
        </div>
      </div>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center">
          <span className="material-icons">more_vert</span>
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;