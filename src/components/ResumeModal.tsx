import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-[88vh] my-auto flex flex-col rounded-2xl bg-[#141414] border border-[#FF5500]/25 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#1c1a1a]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
              <FileText className="w-4 h-4 text-[#FF5500]" />
            </div>
            <div>
              <h3 className="text-white font-medium text-xs sm:text-sm">
                Jyotish Kumar — Resume
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono">B.Tech CSE • Indore, M.P.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/assets/Jyotish_Kumar_Resume.pdf"
              download="Jyotish_Kumar_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FF5500] hover:bg-[#FF4D00] text-white shadow-md shadow-[#FF5500]/30 transition"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <a
              href="/assets/Jyotish_Kumar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Viewer */}
        <div className="flex-1 bg-neutral-950 overflow-hidden relative">
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
