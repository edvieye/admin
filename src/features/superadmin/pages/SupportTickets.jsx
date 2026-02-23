import React, { useState, useMemo } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import toast from 'react-hot-toast';

const SupportTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const itemsPerPage = 5;

  const [tickets, setTickets] = useState([
    {
      id: 'GV-40291',
      school: 'Green Valley High',
      issue: 'Database connection errors during exams...',
      priority: 'High',
      category: 'Technical',
      status: 'Open',
      time: '2 mins ago',
      admin: 'Sarah Jenkins',
      conversation: [
        { sender: 'admin', message: 'Hello, we are experiencing intermittent database connection timeouts across all Grade 10 terminals. It’s affecting the mid-term exams currently in progress.', time: '09:45 AM' },
        { sender: 'support', message: 'Acknowledged, Sarah. Our engineering team has been alerted. I\'m checking the server logs for the Green Valley cluster right now.', time: '09:48 AM' },
        { sender: 'admin', message: 'Thank you. Please let us know as soon as there\'s a fix. We have 200 students waiting.', time: '09:52 AM' },
      ],
    },
    {
      id: 'SM-38210',
      school: "St. Mary's Academy",
      issue: 'Invoice dispute for Q3 subscriptions',
      priority: 'Medium',
      category: 'Billing',
      status: 'Pending',
      time: '45 mins ago',
      admin: 'John Smith',
      conversation: [
        { sender: 'admin', message: 'We have a dispute regarding our Q3 invoice. The amount seems higher than expected.', time: '10:15 AM' },
      ],
    },
    {
      id: 'WP-11022',
      school: 'Westside Primary',
      issue: 'New attendance tracking module request',
      priority: 'Low',
      category: 'Feature',
      status: 'Resolved',
      time: '2 hours ago',
      admin: 'Emily Davis',
      conversation: [
        { sender: 'admin', message: 'Can we get the new attendance tracking module?', time: '08:30 AM' },
        { sender: 'support', message: 'We have added it to your account. Please check.', time: '09:15 AM' },
      ],
    },
  ]);

  // Filter logic
  const filteredTickets = useMemo(() => {
    return tickets.filter(ticket => {
      const matchesSearch = ticket.school.toLowerCase().includes(search.toLowerCase()) ||
                            ticket.id.toLowerCase().includes(search.toLowerCase());
      const matchesPriority = filterPriority === 'All' || ticket.priority === filterPriority;
      const matchesCategory = filterCategory === 'All' || ticket.category === filterCategory;
      return matchesSearch && matchesPriority && matchesCategory;
    });
  }, [tickets, search, filterPriority, filterCategory]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTicket) return;
    const updatedTicket = {
      ...selectedTicket,
      conversation: [...selectedTicket.conversation, { sender: 'support', message: newMessage, time: 'Just now' }],
    };
    setTickets(tickets.map(t => t.id === selectedTicket.id ? updatedTicket : t));
    setSelectedTicket(updatedTicket);
    setNewMessage('');
    toast.success('Message sent');
  };

  const handleEscalate = () => {
    toast.success('Ticket escalated');
    // In real app, you'd update status
  };

  const handleCloseTicket = () => {
    if (selectedTicket) {
      const updatedTicket = { ...selectedTicket, status: 'Resolved' };
      setTickets(tickets.map(t => t.id === selectedTicket.id ? updatedTicket : t));
      setSelectedTicket(null);
      toast.success('Ticket closed');
    }
  };

  const handleExport = () => {
    toast.success('Exporting tickets (demo)');
  };

  return (
    <SuperAdminLayout pageTitle="Global Support Tickets" pageDescription="Unified School Ecosystem Management">
      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-primary/10 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
              <span className="material-icons-outlined">mark_email_unread</span>
            </div>
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              +5 New
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Open Tickets</h3>
          <p className="text-3xl font-bold mt-1">42</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-primary/10 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <span className="material-icons-outlined">pending_actions</span>
            </div>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              Avg 2h 4m
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Pending Response</h3>
          <p className="text-3xl font-bold mt-1">18</p>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-primary/10 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <span className="material-icons-outlined">task_alt</span>
            </div>
            <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              98% Success
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Resolved Today</h3>
          <p className="text-3xl font-bold mt-1">126</p>
        </div>
      </div>

      {/* Tickets Table Container */}
      <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-xl shadow-sm overflow-hidden">
        {/* Filter Bar */}
        <div className="p-4 border-b border-primary/10 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1 max-w-md">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-transparent rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-all dark:text-white"
                placeholder="Search by School or Ticket ID..."
                type="text"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="text-xs border-transparent bg-background-light dark:bg-background-dark rounded-lg focus:ring-1 focus:ring-primary py-2 px-3 dark:text-white"
              >
                <option>Priority: All</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="text-xs border-transparent bg-background-light dark:bg-background-dark rounded-lg focus:ring-1 focus:ring-primary py-2 px-3 dark:text-white"
              >
                <option>Category: All</option>
                <option>Technical</option>
                <option>Billing</option>
                <option>Feature</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-sm"
          >
            <span className="material-icons-outlined text-sm">file_download</span>
            Export Reports
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary/5 text-slate-500 uppercase text-[11px] font-bold tracking-widest">
                <th className="px-6 py-4">School Name</th>
                <th className="px-6 py-4">Ticket Details</th>
                <th className="px-6 py-4 text-center">Priority</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Updated</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {currentTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`hover:bg-primary/5 transition-colors group cursor-pointer ${
                    selectedTicket?.id === ticket.id ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                        <img
                          src={`https://ui-avatars.com/api/?name=${ticket.school
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}&background=0fbd2c&color=fff&size=32`}
                          alt={ticket.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{ticket.school}</p>
                        <p className="text-[10px] text-slate-400">ID: {ticket.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm line-clamp-1">{ticket.issue}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        ticket.priority === 'High'
                          ? 'bg-red-100 text-red-600'
                          : ticket.priority === 'Medium'
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-slate-600 font-medium px-2 py-1 bg-slate-100 rounded dark:bg-slate-800 dark:text-slate-300">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          ticket.status === 'Open'
                            ? 'bg-orange-500'
                            : ticket.status === 'Pending'
                            ? 'bg-blue-500'
                            : 'bg-primary'
                        }`}
                      ></span>
                      <span className="text-xs font-medium">{ticket.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 italic">{ticket.time}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:scale-110 transition-transform">
                      <span className="material-icons-outlined">forum</span>
                    </button>
                  </td>
                </tr>
              ))}
              {currentTickets.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-500">No tickets found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-primary/10 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredTickets.length)} of {filteredTickets.length} tickets
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-primary/10 rounded-lg text-xs hover:bg-primary/5 disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-primary/10 hover:bg-primary/5'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border border-primary/10 rounded-lg text-xs hover:bg-primary/5"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Chat Drawer */}
      {selectedTicket && (
        <div className="fixed inset-y-0 right-0 w-[450px] bg-white dark:bg-slate-900 shadow-2xl border-l border-primary/20 flex flex-col z-50">
          {/* Header */}
          <div className="p-6 border-b border-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`https://ui-avatars.com/api/?name=${selectedTicket.admin}&background=0fbd2c&color=fff&size=48`}
                alt={selectedTicket.admin}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-primary/20"
              />
              <div>
                <h4 className="font-bold">{selectedTicket.admin}</h4>
                <p className="text-xs text-slate-500">Admin at {selectedTicket.school}</p>
                <p className="text-xs text-primary mt-1">Ticket ID: {selectedTicket.id}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTicket(null)}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 dark:bg-slate-900/50">
            {selectedTicket.conversation.map((msg, idx) => (
              <div key={idx} className={msg.sender === 'support' ? 'flex flex-col items-end' : 'flex flex-col'}>
                <div
                  className={`max-w-[85%] p-4 rounded-xl ${
                    msg.sender === 'support'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white dark:bg-slate-800 rounded-tl-none shadow-sm border border-primary/5'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                </div>
                <span className="text-[10px] text-slate-400 px-1 mt-1">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-primary/10 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-4">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                <span className="material-icons-outlined">attach_file</span>
              </button>
              <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                <span className="material-icons-outlined">insert_emoticon</span>
              </button>
              <div className="h-4 w-[1px] bg-primary/10 mx-1"></div>
              <button className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-primary uppercase tracking-tighter">
                <span className="material-icons-outlined text-sm">history</span>
                Canned Replies
              </button>
            </div>
            <div className="relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full bg-background-light dark:bg-background-dark border-transparent rounded-xl focus:ring-1 focus:ring-primary focus:border-primary text-sm p-4 h-24 resize-none transition-all dark:text-white"
                placeholder="Type your response..."
              ></textarea>
              <button
                onClick={handleSendMessage}
                className="absolute bottom-3 right-3 bg-primary text-white p-2 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center"
              >
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleEscalate}
                className="flex-1 py-2 border border-red-200 text-red-600 text-xs font-bold rounded-lg hover:bg-red-50 transition-colors uppercase"
              >
                Escalate
              </button>
              <button
                onClick={handleCloseTicket}
                className="flex-1 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-900 transition-colors uppercase"
              >
                Close Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </SuperAdminLayout>
  );
};

export default SupportTickets;