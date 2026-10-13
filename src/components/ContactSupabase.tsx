import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Database,
  Clock,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  Settings,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  submitContactMessage,
  getSupabaseConfigStatus,
  setCustomSupabaseCredentials,
  clearCustomSupabaseCredentials,
  SUPABASE_SQL_SCHEMA,
  getStoredMessages,
} from '../lib/supabase';
import type { ContactMessage } from '../lib/supabase';
import { playSuccessSound, playPopSound } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSupabase: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Internship Opportunity',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    success: boolean;
    isStoredLocally: boolean;
    message: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isMessagesViewerOpen, setIsMessagesViewerOpen] = useState(false);
  const [storedMessages, setStoredMessages] = useState<ContactMessage[]>([]);

  // Custom credentials form
  const [customUrl, setCustomUrl] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [configStatus, setConfigStatus] = useState(getSupabaseConfigStatus());

  useEffect(() => {
    // Live IST time ticker for Indore, M.P.
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playSuccessSound();
    navigator.clipboard.writeText('jyotishkumarjhar@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playPopSound();

    try {
      const res = await submitContactMessage(formData);
      setSubmittedResult(res);
      playSuccessSound();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#a855f7', '#10b981'],
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: 'Internship Opportunity',
        message: '',
      });
    } catch {
      setSubmittedResult({
        success: false,
        isStoredLocally: true,
        message: 'Could not send message. Please reach out directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl || !customKey) return;
    setCustomSupabaseCredentials(customUrl, customKey);
    setConfigStatus(getSupabaseConfigStatus());
    setIsConfigOpen(false);
    playSuccessSound();
  };

  const handleClearConfig = () => {
    clearCustomSupabaseCredentials();
    setConfigStatus(getSupabaseConfigStatus());
    playPopSound();
  };

  const handleViewStored = async () => {
    playPopSound();
    const msgs = await getStoredMessages();
    setStoredMessages(msgs);
    setIsMessagesViewerOpen(true);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-3 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-cyan-400 text-xs font-mono">
              <Database className="w-3.5 h-3.5" />
              <span>Supabase Backend & PostgreSQL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Let's <span className="text-gradient-cyan">Connect</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Currently available for software engineering internships and collaborative full-stack projects. Messages are persisted directly to Supabase with real-time logging.
            </p>
          </div>

          {/* Backend Status Chip */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => {
                playPopSound();
                setIsConfigOpen(true);
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:border-cyan-500/60 transition"
              title="Configure Supabase Project"
            >
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>Supabase DB: {configStatus.isConfigured ? 'Connected' : 'Active (Buffer)'}</span>
              <Settings className="w-3 h-3 text-slate-400" />
            </button>
            <button
              onClick={handleViewStored}
              className="p-1.5 rounded-xl glass-panel text-xs text-slate-300 hover:text-white"
              title="View Inquiries Log"
            >
              Logs
            </button>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-card p-6 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Direct Inquiries & Channels
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out for internship opportunities, technical reviews, or coffee chats.
                </p>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <a
                  href="mailto:jyotishkumarjhar@gmail.com"
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition block truncate"
                >
                  jyotishkumarjhar@gmail.com
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-400" /> Phone & WhatsApp
                </span>
                <a
                  href="tel:+919835402279"
                  className="text-sm sm:text-base font-semibold text-white hover:text-purple-400 transition block"
                >
                  +91-98354 02279
                </a>
              </div>

              {/* Verified Location Card */}
              <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Current Residence
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {currentTime || 'IST'}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">
                  Indore, Madhya Pradesh, India
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  SAGE University, Indore — Alta School of Technology
                </p>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPopSound()}
                  className="flex items-center gap-2 p-3 rounded-xl glass-panel border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-white transition group"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium truncate">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Jyotishkumar-dev"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playPopSound()}
                  className="flex items-center gap-2 p-3 rounded-xl glass-panel border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition group"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium truncate">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Supabase Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Connected to managed Supabase database with instant payload logging.
              </p>

              {submittedResult && (
                <div
                  className={`mb-6 p-4 rounded-xl border flex items-start gap-3 animate-in fade-in duration-300 ${
                    submittedResult.success
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-red-950/40 border-red-500/40 text-red-200'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-emerald-300">Submission Successful!</p>
                    <p className="text-slate-300">{submittedResult.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company / Org */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Organization / University
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Google, Alta Tech Club"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Opportunity / Topic
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1220] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition"
                    >
                      <option value="Internship Opportunity">Software Engineering Internship</option>
                      <option value="Full-Time Role">Full-Stack Developer Role</option>
                      <option value="Graphic Design / Branding">Graphic Design & Creative Project</option>
                      <option value="Hackathon / Technical Collab">Hackathon / Technical Collaboration</option>
                      <option value="General Coffee Chat">Technical Chat / Mentorship</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, technical scope, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm placeholder-slate-600 transition resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.99] transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" /> Saving to Supabase...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message to Supabase</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Supabase Config Drawer Modal */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl bg-[#090b14] border border-cyan-500/40 shadow-2xl p-6 text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white font-heading">
                  Supabase Project Settings
                </h3>
              </div>
              <button
                onClick={() => setIsConfigOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              You can connect your live Supabase project by providing your project URL and anonymous API key. If left blank, inquiries will save to the secure client database buffer.
            </p>

            <form onSubmit={handleSaveConfig} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-cyan-300 block mb-1">
                  SUPABASE_PROJECT_URL
                </label>
                <input
                  type="url"
                  placeholder="https://xyzcompany.supabase.co"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-purple-300 block mb-1">
                  SUPABASE_ANON_KEY
                </label>
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="pt-2">
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Ready-to-Run SQL Table Script:
                </label>
                <pre className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[10px] font-mono text-cyan-200 overflow-x-auto max-h-28">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {configStatus.isCustom && (
                  <button
                    type="button"
                    onClick={handleClearConfig}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Reset to Default
                  </button>
                )}
                <div className="flex gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setIsConfigOpen(false)}
                    className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    Save Credentials
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Received Messages Viewer Modal */}
      {isMessagesViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl bg-[#090b14] border border-cyan-500/40 shadow-2xl p-6 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white font-heading">
                  Stored Inquiry Payloads ({storedMessages.length})
                </h3>
              </div>
              <button
                onClick={() => setIsMessagesViewerOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {storedMessages.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-8">
                  No submissions recorded yet. Try submitting the contact form!
                </p>
              ) : (
                storedMessages.map((msg, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-xs">{msg.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {msg.created_at ? new Date(msg.created_at).toLocaleString() : 'Just now'}
                      </span>
                    </div>
                    <div className="text-[11px] text-cyan-300 font-mono">
                      {msg.email} • {msg.company} ({msg.role})
                    </div>
                    <p className="text-xs text-slate-300 pt-1">{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
