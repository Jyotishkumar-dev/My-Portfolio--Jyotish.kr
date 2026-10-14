import React from 'react';
import { ArrowUp, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#07080c] py-10 px-4 text-neutral-400 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
            JK
          </div>
          <div>
            <p className="text-white font-medium">
              Jyotish Kumar
            </p>
            <p className="text-neutral-500 font-mono text-[11px] flex items-center justify-center sm:justify-start gap-1">
              <MapPin className="w-3 h-3 text-neutral-500" /> Indore, M.P. • SAGE University
            </p>
          </div>
        </div>

        {/* Right Side / Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Jyotishkumar-dev"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:jyotishkumarjhar@gmail.com"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
