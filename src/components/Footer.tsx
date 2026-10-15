import React from 'react';
import { ArrowUp, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0B0813] py-12 px-4 text-[#A3A3C2] text-xs">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand Studio Info */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-neutral-900/90 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
            JK
          </div>
          <div>
            <p className="text-white font-medium flex items-center gap-2">
              <span>Jyotish Kumar</span>
              <span className="text-[10px] font-mono text-[#FF2E93] bg-[#FF2E93]/10 px-2 py-0.5 rounded-full border border-[#FF2E93]/30 font-semibold shadow-[0_0_8px_rgba(255,46,147,0.25)]">
                2026 Edition
              </span>
            </p>
            <p className="text-[#A3A3C2] font-mono text-[11px] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-[#00F0FF]" /> Indore, M.P. • Alta School of Technology, SAGE Univ
            </p>
          </div>
        </div>

        {/* Center: Tech Architecture Credit */}
        <div className="text-center font-mono text-[11px] text-[#A3A3C2]">
          Built with <span className="text-white font-medium">React 19</span>, <span className="text-white font-medium">TypeScript</span>, <span className="text-[#FF2E93] font-medium">GSAP</span> & <span className="text-[#00F0FF] font-medium">Three.js</span>
        </div>

        {/* Right Side / Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Jyotishkumar-dev"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl text-[#A3A3C2] hover:text-white hover:bg-white/5 border border-white/5 hover:border-[#00F0FF]/40 transition"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl text-[#A3A3C2] hover:text-[#00F0FF] hover:bg-white/5 border border-white/5 hover:border-[#00F0FF]/40 transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:jyotishkumarjhar@gmail.com"
            className="p-2.5 rounded-xl text-[#A3A3C2] hover:text-white hover:bg-white/5 border border-white/5 hover:border-[#00F0FF]/40 transition"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-white/10 hover:border-[#00F0FF]/40 text-[#A3A3C2] hover:text-white hover:bg-white/5 transition ml-2 flex items-center gap-1.5 font-mono text-[11px]"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F0FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
