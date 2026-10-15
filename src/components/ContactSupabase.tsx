import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Settings,
  X,
  Database,
} from 'lucide-react';
import {
  submitContactMessage,
  getSupabaseConfigStatus,
  setCustomSupabaseCredentials,
  clearCustomSupabaseCredentials,
  SUPABASE_SQL_SCHEMA,
  getStoredMessages,
} from '../lib/supabase';
import type { ContactMessage } from '../lib/supabase';
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
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isMessagesViewerOpen, setIsMessagesViewerOpen] = useState(false);
  const [storedMessages, setStoredMessages] = useState<ContactMessage[]>([]);

  // Custom Supabase credentials form
  const [customUrl, setCustomUrl] = useState('');
  const [customKey, setCustomKey] = useState('');
  const [configStatus, setConfigStatus] = useState(getSupabaseConfigStatus());

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jyotishkumarjhar@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const res = await submitContactMessage(formData);
      setSubmittedResult(res);

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
  };

  const handleClearConfig = () => {
    clearCustomSupabaseCredentials();
    setConfigStatus(getSupabaseConfigStatus());
  };

  const handleViewStored = async () => {
    const msgs = await getStoredMessages();
    setStoredMessages(msgs);
    setIsMessagesViewerOpen(true);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              <span>[ 06 / INQUIRY & CONTACT ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Initiate a <span className="font-editorial text-white font-normal">Conversation</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
              Open to 2026 software engineering internships, technical collaborations, or discussing architecture.
            </p>
          </div>

          {/* Clean Supabase Status Pill */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsConfigOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#03e29c]/30 text-xs font-mono text-neutral-300 transition"
              title="Supabase Settings"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              <span>Supabase {configStatus.isConfigured ? 'Live' : 'Buffer'}</span>
              <Settings className="w-3 h-3 text-neutral-500" />
            </button>
            <button
              onClick={handleViewStored}
              className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-400 hover:text-white transition"
              title="View Inquiries Log"
            >
              Logs
            </button>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="studio-card rounded-2xl p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-base font-bold font-heading text-white">
                  Direct Channels
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Fastest response via email or WhatsApp within 24 hours.
                </p>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-neutral-400" /> Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] text-neutral-400 hover:text-white font-mono flex items-center gap-1 transition"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <a
                  href="mailto:jyotishkumarjhar@gmail.com"
                  className="text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition block truncate"
                >
                  jyotishkumarjhar@gmail.com
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-neutral-400" /> Phone & WhatsApp
                </span>
                <a
                  href="tel:+919835402279"
                  className="text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition block"
                >
                  +91-98354 02279
                </a>
              </div>

              {/* Current Residence (CLEAN - Time counting removed as requested) */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-neutral-400" /> Current Residence
                </span>
                <p className="text-xs sm:text-sm font-medium text-neutral-200">
                  Indore, Madhya Pradesh, India
                </p>
                <p className="text-[11px] text-neutral-400 font-mono">
                  SAGE University, Indore
                </p>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href="https://github.com/Jyotishkumar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] text-neutral-300 hover:text-white text-xs font-medium transition"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] text-neutral-300 hover:text-white text-xs font-medium transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-neutral-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="studio-card rounded-2xl p-6 sm:p-7">
              <h3 className="text-base font-bold font-heading text-white mb-1">
                Transmit Inquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                Delivered in real-time to Supabase database with local buffer resilience.
              </p>

              {submittedResult && (
                <div
                  className={`mb-5 p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                    submittedResult.success
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                      : 'bg-red-950/30 border-red-500/30 text-red-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{submittedResult.success ? 'Message Sent' : 'Notice'}</p>
                    <p className="text-neutral-300 mt-0.5">{submittedResult.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300">
                      Your Name <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-3 py-2 rounded-xl bg-[#090b10] border border-white/10 focus:border-white/30 focus:outline-none text-white text-xs placeholder-neutral-600 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300">
                      Email Address <span className="text-neutral-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded-xl bg-[#090b10] border border-white/10 focus:border-white/30 focus:outline-none text-white text-xs placeholder-neutral-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300">Organization / Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Google, University"
                      className="w-full px-3 py-2 rounded-xl bg-[#090b10] border border-white/10 focus:border-white/30 focus:outline-none text-white text-xs placeholder-neutral-600 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-neutral-300">Inquiry Type</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090b10] border border-white/10 focus:border-white/30 focus:outline-none text-white text-xs transition"
                    >
                      <option value="Internship Opportunity">Software Engineering Internship</option>
                      <option value="Full-Time Role">Full-Stack Role</option>
                      <option value="Graphic Design / Project">Design / Creative Project</option>
                      <option value="General Conversation">Technical Discussion / Coffee Chat</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-300">
                    Message <span className="text-neutral-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Jyotish, I came across your portfolio and wanted to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#03e29c]/50 focus:outline-none text-white text-xs placeholder-neutral-600 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-magnetic w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-100 transition disabled:opacity-50 shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-neutral-800" />
                  <span>{isSubmitting ? 'Transmitting to Supabase...' : 'Send Inquiry Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Supabase Settings Modal */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl bg-[#0f1118] border border-white/15 shadow-2xl p-5 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-neutral-300" />
                <h3 className="text-sm font-bold text-white font-heading">
                  Supabase Project Settings
                </h3>
              </div>
              <button
                onClick={() => setIsConfigOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Enter your Supabase URL & Anon Key to sync directly with your PostgreSQL database.
            </p>

            <form onSubmit={handleSaveConfig} className="space-y-3">
              <div>
                <label className="text-[11px] font-mono text-neutral-300 block mb-1">
                  VITE_SUPABASE_URL
                </label>
                <input
                  type="url"
                  placeholder="https://xyz.supabase.co"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-300 block mb-1">
                  VITE_SUPABASE_ANON_KEY
                </label>
                <input
                  type="password"
                  placeholder="anon key..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-white focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <label className="text-[10px] font-mono text-neutral-500 block mb-1">
                  Supabase SQL Table Schema:
                </label>
                <pre className="p-2 rounded bg-black/50 border border-white/5 text-[9px] font-mono text-neutral-300 overflow-x-auto max-h-24">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                {configStatus.isCustom && (
                  <button
                    type="button"
                    onClick={handleClearConfig}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Reset
                  </button>
                )}
                <div className="flex gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setIsConfigOpen(false)}
                    className="px-3 py-1.5 rounded-lg text-xs text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-lg bg-white text-neutral-950 font-medium text-xs hover:bg-neutral-200 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Stored Inquiries Viewer Modal */}
      {isMessagesViewerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="w-full max-w-xl max-h-[75vh] flex flex-col rounded-2xl bg-[#0f1118] border border-white/15 shadow-2xl p-5 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <h3 className="text-sm font-bold text-white font-heading">
                Inquiry Log ({storedMessages.length})
              </h3>
              <button
                onClick={() => setIsMessagesViewerOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5">
              {storedMessages.length === 0 ? (
                <p className="text-xs text-neutral-500 text-center py-8">
                  No submissions recorded yet.
                </p>
              ) : (
                storedMessages.map((msg, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white text-xs">{msg.name}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {msg.created_at ? new Date(msg.created_at).toLocaleDateString() : 'Recent'}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      {msg.email} • {msg.company} ({msg.role})
                    </div>
                    <p className="text-xs text-neutral-300 pt-1 leading-relaxed">{msg.message}</p>
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
