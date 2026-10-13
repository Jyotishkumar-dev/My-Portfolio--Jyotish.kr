import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSuccessSound } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    playSuccessSound();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#8b5cf6', '#10b981'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl bg-[#090b14] border border-cyan-500/30 shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f1322] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                Jyotish Kumar — Candidate Resume
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Updated Oct 2026
                </span>
              </h3>
              <p className="text-xs text-slate-400">B.Tech CSE • Full-Stack Developer • Indore, M.P.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/Jyotish_Kumar_Resume.pdf"
              download="Jyotish_Kumar_Resume.pdf"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <a
              href="/assets/Jyotish_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="px-6 py-2.5 bg-cyan-950/20 border-b border-white/5 flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified Location: Indore, M.P.
          </span>
          <span className="flex items-center gap-1.5 text-purple-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> 55+ DSA LeetCode Questions Solved
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> SQUidHACK 2026 Tech Lead & Arkfest '26 Committee
          </span>
        </div>

        {/* PDF Embedded Viewer */}
        <div className="flex-1 bg-slate-900 overflow-hidden relative">
          <iframe
            src="/assets/Jyotish_Kumar_Resume.pdf#toolbar=0"
            title="Jyotish Kumar Resume PDF"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
