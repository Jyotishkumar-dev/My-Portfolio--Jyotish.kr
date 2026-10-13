import React from 'react';
import { ArrowUp, MapPin, Mail } from 'lucide-react';
import { playPopSound } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050609] py-12 px-4 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-cyan-500/20">
            JK
          </div>
          <div>
            <p className="text-white font-semibold font-heading">
              Jyotish Kumar — Creative Full-Stack Engineer
            </p>
            <p className="text-slate-400 font-mono text-[11px] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-cyan-400" /> Currently living in Indore, M.P. • SAGE University
            </p>
          </div>
        </div>

        {/* Center Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 font-mono text-[10px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">React 19</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">TypeScript</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Tailwind CSS</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Three.js</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Supabase</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Gemini AI</span>
        </div>

        {/* Right Side / Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jyotishkumar-dev"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:jyotishkumarjhar@gmail.com"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
