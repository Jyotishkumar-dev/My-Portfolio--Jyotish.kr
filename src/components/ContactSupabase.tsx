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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-white/10 pb-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
              <span>[ 06 / INQUIRY & CONTACT ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Initiate a <span className="font-editorial text-[#8B5CF6] font-normal underline decoration-[#8B5CF6]/40 decoration-1 underline-offset-4">Conversation</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm max-w-lg">
              Open to 2026 software engineering internships, technical collaborations, or discussing architecture.
            </p>
          </div>

          {/* Clean Supabase Status Pill */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsConfigOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F172A]/70 hover:bg-[#0F172A] border border-white/10 hover:border-[#8B5CF6]/40 text-xs font-mono text-[#94A3B8] transition"
              title="Supabase Settings"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
              <span className="text-white">Supabase {configStatus.isConfigured ? 'Live' : 'Buffer'}</span>
              <Settings className="w-3 h-3 text-[#94A3B8]" />
            </button>
            <button
              onClick={handleViewStored}
              className="px-3 py-1.5 rounded-xl bg-[#0F172A]/70 hover:bg-[#0F172A] border border-white/10 hover:border-[#8B5CF6]/40 text-xs font-mono text-[#94A3B8] hover:text-white transition"
              title="View Inquiries Log"
            >
              Logs
            </button>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4 reveal-on-scroll">
            <div className="studio-card rounded-2xl p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-base font-bold font-heading text-white">
                  Direct Channels
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Fastest response via email or WhatsApp within 24 hours.
                </p>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#0A0E1F]/60 border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#8B5CF6]" /> Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] text-[#94A3B8] hover:text-white font-mono flex items-center gap-1 transition"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#8B5CF6]" /> : <Copy className="w-3 h-3" />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <a
                  href="mailto:jyotishkumarjhar@gmail.com"
                  className="text-xs sm:text-sm font-medium text-white hover:text-[#8B5CF6] transition block truncate"
                >
                  jyotishkumarjhar@gmail.com
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-3.5 rounded-xl bg-[#0A0E1F]/60 border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#8B5CF6]" /> Phone & WhatsApp
                </span>
                <a
                  href="tel:+919835402279"
                  className="text-xs sm:text-sm font-medium text-white hover:text-[#8B5CF6] transition block"
                >
                  +91-98354 02279
                </a>
              </div>

              {/* Current Residence */}
              <div className="p-3.5 rounded-xl bg-[#0A0E1F]/60 border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#8B5CF6]" /> Current Residence
                </span>
                <p className="text-xs sm:text-sm font-medium text-white">
                  Indore, Madhya Pradesh, India
                </p>
                <p className="text-[11px] text-[#94A3B8] font-mono">
                  SAGE University, Indore
                </p>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href="https://github.com/Jyotishkumar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A0E1F]/60 border border-white/[0.06] hover:border-[#8B5CF6]/40 text-[#94A3B8] hover:text-white text-xs font-medium transition"
                >
                  <GithubIcon className="w-4 h-4 text-[#94A3B8]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A0E1F]/60 border border-white/[0.06] hover:border-[#8B5CF6]/40 text-[#94A3B8] hover:text-white text-xs font-medium transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#94A3B8]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="studio-card rounded-2xl p-6 sm:p-7">
              <h3 className="text-base font-bold font-heading text-white mb-1">
                Transmit Inquiry
              </h3>
              <p className="text-xs text-[#94A3B8] mb-5">
                Delivered in real-time to Supabase database with local buffer resilience.
              </p>

              {submittedResult && (
                <div
                  className={`mb-5 p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${
                    submittedResult.success
                      ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/40 text-[#8B5CF6]'
                      : 'bg-red-950/30 border-red-500/30 text-red-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{submittedResult.success ? 'Message Sent' : 'Notice'}</p>
                    <p className="text-[#94A3B8] mt-0.5">{submittedResult.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs text-[#94A3B8]">
                      Your Name <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="w-full px-3 py-2 rounded-xl bg-[#0A0E1F]/70 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 focus:outline-none text-white text-xs placeholder-slate-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#94A3B8]">
                      Email Address <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded-xl bg-[#0A0E1F]/70 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 focus:outline-none text-white text-xs placeholder-slate-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs text-[#94A3B8]">Organization / Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Google, University"
                      className="w-full px-3 py-2 rounded-xl bg-[#0A0E1F]/70 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 focus:outline-none text-white text-xs placeholder-slate-500 transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#94A3B8]">Inquiry Type</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0A0E1F]/70 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 focus:outline-none text-white text-xs transition"
                    >
                      <option value="Internship Opportunity">Software Engineering Internship</option>
                      <option value="Full-Time Role">Full-Stack Role</option>
                      <option value="Graphic Design / Project">Design / Creative Project</option>
                      <option value="General Conversation">Technical Discussion / Coffee Chat</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#94A3B8]">
                    Message <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Jyotish, I came across your portfolio and wanted to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0E1F]/70 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/30 focus:outline-none text-white text-xs placeholder-slate-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-purple-blue w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>{isSubmitting ? 'Transmitting to Supabase...' : 'Send Inquiry Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Supabase Settings Modal */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl bg-[#0B0D1B] border border-white/15 shadow-2xl p-5 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#8B5CF6]" />
                <h3 className="text-sm font-bold text-white font-heading">
                  Supabase Project Settings
                </h3>
              </div>
              <button
                onClick={() => setIsConfigOpen(false)}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              Enter your Supabase URL & Anon Key to sync directly with your PostgreSQL database.
            </p>

            <form onSubmit={handleSaveConfig} className="space-y-3">
              <div>
                <label className="text-[11px] font-mono text-[#94A3B8] block mb-1">
                  VITE_SUPABASE_URL
                </label>
                <input
                  type="url"
                  placeholder="https://xyz.supabase.co"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#94A3B8] block mb-1">
                  VITE_SUPABASE_ANON_KEY
                </label>
                <input
                  type="password"
                  placeholder="anon key..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div className="pt-2">
                <label className="text-[10px] font-mono text-slate-500 block mb-1">
                  Supabase SQL Table Schema:
                </label>
                <pre className="p-2 rounded bg-black/50 border border-white/5 text-[9px] font-mono text-slate-300 overflow-x-auto max-h-24">
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
                    className="px-3 py-1.5 rounded-lg text-xs text-[#94A3B8] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-purple-blue px-3.5 py-1.5 rounded-lg text-white font-medium text-xs shadow-md shadow-[#8B5CF6]/35"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl max-h-[75vh] flex flex-col rounded-2xl bg-[#0B0D1B] border border-white/15 shadow-2xl p-5 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <h3 className="text-sm font-bold text-white font-heading">
                Inquiry Log ({storedMessages.length})
              </h3>
              <button
                onClick={() => setIsMessagesViewerOpen(false)}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5">
              {storedMessages.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-8">
                  No submissions recorded yet.
                </p>
              ) : (
                storedMessages.map((msg, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white text-xs">{msg.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {msg.created_at ? new Date(msg.created_at).toLocaleDateString() : 'Recent'}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#94A3B8] font-mono">
                      {msg.email} • {msg.company} ({msg.role})
                    </div>
                    <p className="text-xs text-[#94A3B8] pt-1 leading-relaxed">{msg.message}</p>
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
