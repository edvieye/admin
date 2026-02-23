import React, { useState } from 'react';
import SuperAdminLayout from '../components/SuperAdminLayout';
import TierSettingsModal from '../components/TierSettingsModal';
import toast from 'react-hot-toast';

const GlobalPlanSettings = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [smsUrl, setSmsUrl] = useState('https://api.twilio.com/2010-04-01/Accounts/');
  const [senderId, setSenderId] = useState('SCHOOL_MSG');
  const [whatsAppAccountId, setWhatsAppAccountId] = useState('82394723984723');
  const [selectedTier, setSelectedTier] = useState(null);
  const [tierModalOpen, setTierModalOpen] = useState(false);
  const [smsApiKey, setSmsApiKey] = useState(process.env.REACT_APP_SMS_KEY || '');
  const [whatsAppToken, setWhatsAppToken] = useState(process.env.REACT_APP_WA_TOKEN || '');

  // Plan data (could be from API)
  const [plans, setPlans] = useState({
    basic: { price: 49, students: 200, storage: 10, modules: ['Core LMS', 'Attendance'] },
    pro: { price: 149, students: 1000, storage: 100, modules: ['LMS + Advanced Reports', 'Payroll & Finance', 'Transport Tracking'] },
    enterprise: { price: 499, students: 'Unlimited', storage: 1000, modules: ['All Modules Enabled', 'Dedicated Hosting', 'White-labeling'] },
  });

  const handleSaveGlobal = () => {
    // Here you'd send data to API
    toast.success('Global settings saved (demo)');
  };

  const openTierModal = (tier) => {
    setSelectedTier(tier);
    setTierModalOpen(true);
  };

  const handleTierSave = (tier, newData) => {
    setPlans(prev => ({ ...prev, [tier]: newData }));
  };

  // Pricing display based on billing period
  const getPrice = (basePrice) => {
    if (billingPeriod === 'yearly') {
      return (basePrice * 12 * 0.8).toFixed(0); // 20% discount
    }
    return basePrice;
  };

  return (
    <SuperAdminLayout
      pageTitle="Global Configuration"
      headerAction={
        <button
          onClick={handleSaveGlobal}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-105 transition-all"
        >
          <span className="material-icons text-[18px]">save</span>
          Save Global Settings
        </button>
      }
    >
      <TierSettingsModal
        isOpen={tierModalOpen}
        onClose={() => setTierModalOpen(false)}
        tier={selectedTier}
        initialData={selectedTier ? plans[selectedTier] : null}
        onSave={(data) => handleTierSave(selectedTier, data)}
      />

      <div className="grid grid-cols-12 gap-6">
        {/* Left column: API Configuration */}
        <section className="col-span-12 lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-icons text-primary">api</span>
            <h2 className="text-lg font-bold">Platform API Configuration</h2>
          </div>

          {/* SMS Gateway */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">SMS Gateway</h3>
                <p className="text-xs text-slate-500 mt-1">Global notification routing for all schools</p>
              </div>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">
                Connected
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Provider URL</label>
                <input
                  className="w-full bg-slate-50 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  type="text"
                  value={smsUrl}
                  onChange={(e) => setSmsUrl(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">API Key</label>
                  <div className="relative">
                    <input
                      className="w-full bg-slate-50 border-slate-200 rounded-lg text-sm pr-10 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      type="password"
                      value={smsApiKey}
                      onChange={(e) => setSmsApiKey(e.target.value)}
                    />
                    <span className="material-icons absolute right-3 top-2 text-slate-400 text-sm cursor-pointer hover:text-primary">
                      visibility
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Sender ID</label>
                  <input
                    className="w-full bg-slate-50 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    type="text"
                    value={senderId}
                    onChange={(e) => setSenderId(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Business */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">WhatsApp Business API</h3>
                  <p className="text-xs text-slate-500">Official Meta Integration</p>
                </div>
              </div>
              <button className="text-primary text-xs font-bold hover:underline">Manage Templates</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Business Account ID</label>
                <input
                  className="w-full bg-slate-50 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  type="text"
                  value={whatsAppAccountId}
                  onChange={(e) => setWhatsAppAccountId(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Access Token</label>
                <div className="relative">
                  <input
                    className="w-full bg-slate-50 border-slate-200 rounded-lg text-sm pr-10 focus:ring-primary focus:border-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    type="password"
                    value={whatsAppToken}
                    onChange={(e) => setWhatsAppToken(e.target.value)}
                  />
                  <span className="material-icons absolute right-3 top-2 text-slate-400 text-sm cursor-pointer hover:text-primary">
                    content_copy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Firebase Cloud Messaging */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200">Firebase Cloud Messaging</h3>
                <p className="text-xs text-slate-500 mt-1">Mobile & Web Push Credentials</p>
              </div>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wider">
                Requires Sync
              </span>
            </div>
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-xl text-center hover:border-primary/50 transition-colors cursor-pointer">
              <span className="material-icons text-slate-400 text-3xl mb-2">cloud_upload</span>
              <p className="text-sm font-medium text-slate-600">Upload service-account.json</p>
              <p className="text-xs text-slate-400 mt-1">Drag and drop or click to browse</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-500">Last updated: 14 Oct, 2023</span>
              <button className="text-primary font-bold">Refresh Server Key</button>
            </div>
          </div>
        </section>

        {/* Right column: Plan Management */}
        <section className="col-span-12 lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-icons text-primary">layers</span>
              <h2 className="text-lg font-bold">Global Plan Management</h2>
            </div>
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Basic Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entry Level</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <h3 className="text-lg font-bold">Basic Tier</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-black">$</span>
                  <span className="font-black text-3xl">{getPrice(plans.basic.price)}</span>
                  <span className="text-slate-500 text-xs font-medium">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <div className="p-5 space-y-5 flex-grow">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Resource Limits</label>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Students</span>
                      <span className="text-xs font-bold">{plans.basic.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Storage (GB)</span>
                      <span className="text-xs font-bold">{plans.basic.storage}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Module Access</label>
                  <div className="space-y-2">
                    {plans.basic.modules.map(module => (
                      <div key={module} className="flex items-center gap-2">
                        <span className="material-icons text-xs text-primary">check_circle</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 mt-auto">
                <button
                  onClick={() => openTierModal('basic')}
                  className="w-full py-2 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-white transition-colors dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Tier Settings
                </button>
              </div>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-primary shadow-xl shadow-primary/10 overflow-hidden flex flex-col relative scale-[1.02]">
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase">Popular</div>
              </div>
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-primary/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Mid Market</span>
                </div>
                <h3 className="text-lg font-bold">Pro Tier</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-primary">$</span>
                  <span className="font-black text-3xl text-primary">{getPrice(plans.pro.price)}</span>
                  <span className="text-slate-500 text-xs font-medium">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <div className="p-5 space-y-5 flex-grow">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Resource Limits</label>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Students</span>
                      <span className="text-xs font-bold">{plans.pro.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Storage (GB)</span>
                      <span className="text-xs font-bold">{plans.pro.storage}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Module Access</label>
                  <div className="grid grid-cols-1 gap-2">
                    {plans.pro.modules.map(module => (
                      <div key={module} className="flex items-center gap-2">
                        <span className="material-icons text-xs text-primary">check_circle</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary/5 mt-auto">
                <button
                  onClick={() => openTierModal('pro')}
                  className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Tier Settings
                </button>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unlimited</span>
                </div>
                <h3 className="text-lg font-bold">Enterprise</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-400">$</span>
                  <span className="font-black text-3xl">{getPrice(plans.enterprise.price)}</span>
                  <span className="text-slate-500 text-xs font-medium">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <div className="p-5 space-y-5 flex-grow">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Resource Limits</label>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Students</span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{plans.enterprise.students}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Storage (GB)</span>
                      <span className="text-xs font-bold">{plans.enterprise.storage}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Module Access</label>
                  <div className="space-y-2">
                    {plans.enterprise.modules.map(module => (
                      <div key={module} className="flex items-center gap-2">
                        <span className="material-icons text-xs text-primary">check_circle</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 mt-auto">
                <button
                  onClick={() => openTierModal('enterprise')}
                  className="w-full py-2 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-white transition-colors dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Tier Settings
                </button>
              </div>
            </div>
          </div>

          {/* System-wide Overrides */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-icons text-primary text-lg">tune</span>
              </div>
              <h3 className="font-bold">System-wide Overrides</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">New Signups</h4>
                    <p className="text-xs text-slate-500">Allow new schools to register</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">Trial Period (Days)</h4>
                    <p className="text-xs text-slate-500">Default for all new accounts</p>
                  </div>
                  <input
                    className="w-16 text-center text-sm font-bold border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    type="number"
                    defaultValue="14"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">Maintenance Mode</h4>
                    <p className="text-xs text-slate-500">Redirect all traffic to status page</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 cursor-pointer">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold">Tax Calculation (%)</h4>
                    <p className="text-xs text-slate-500">Global VAT/GST standard</p>
                  </div>
                  <input
                    className="w-16 text-center text-sm font-bold border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    type="number"
                    defaultValue="5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail */}
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
            <div className="flex items-center justify-between text-xs text-primary font-bold">
              <div className="flex items-center gap-2">
                <span className="material-icons text-sm">history</span>
                <span>Recent Configuration Changes</span>
              </div>
              <button className="hover:underline">View Full Log</button>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between items-center bg-white/50 dark:bg-black/20 p-2 rounded-lg text-xs">
                <span className="text-slate-600">Updated <span className="font-bold">Pro Tier</span> Pricing to $149</span>
                <span className="text-slate-400 italic">2 hours ago by admin_sarah</span>
              </div>
              <div className="flex justify-between items-center bg-white/50 dark:bg-black/20 p-2 rounded-lg text-xs">
                <span className="text-slate-600">Rotated <span className="font-bold">WhatsApp API</span> token</span>
                <span className="text-slate-400 italic">Yesterday by system_auto</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SuperAdminLayout>
  );
};

export default GlobalPlanSettings;