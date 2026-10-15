import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Check, MapPin, Code2, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('jyotishkumarjhar@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 sm:pt-36 pb-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Statement & Intro */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Studio index & availability badge (MK Vision / Auge XP style) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#03e29c] animate-pulse" />
            <span className="text-white font-medium">Available for 2026 Internships</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neutral-400" /> Indore, M.P.
            </span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-[1.08]">
              Jyotish Kumar
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-snug">
              Engineering web systems with{' '}
              <span className="font-editorial text-[#03e29c] text-2xl sm:text-3xl font-normal">
                architectural precision
              </span>{' '}
              and creative{' '}
              <span className="font-editorial text-white text-2xl sm:text-3xl font-normal">
                intent
              </span>
              .
            </p>
          </div>

          {/* Genuine Grounded Bio */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Computer Science undergraduate at{' '}
            <span className="text-neutral-200 font-medium">
              SAGE University, Indore
            </span>{' '}
            (Alta School of Technology, CGPA 7.8). I design and ship full-stack web platforms using{' '}
            <span className="text-neutral-200">React 19</span>,{' '}
            <span className="text-neutral-200">Next.js 16</span>,{' '}
            <span className="text-neutral-200">TypeScript</span>, and{' '}
            <span className="text-neutral-200">Supabase</span> — grounded in algorithmic rigor from 55+ LeetCode problems.
          </p>

          {/* Studio Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href="#projects"
              className="btn-magnetic flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-100 transition shadow-sm"
            >
              <span>Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5 text-neutral-900" />
            </a>

            <button
              onClick={onOpenResume}
              className="btn-magnetic flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d1118] border border-white/10 hover:border-white/20 text-neutral-200 font-medium text-xs sm:text-sm transition"
            >
              <Download className="w-3.5 h-3.5 text-[#03e29c]" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={copyEmail}
              className="btn-magnetic flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0d1118] border border-white/10 hover:border-white/20 text-xs font-mono text-neutral-300 transition"
              title="Copy direct email address"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#03e29c]" />
                  <span className="text-[#03e29c]">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-2.5 rounded-xl bg-[#0d1118] border border-white/10 hover:border-[#03e29c]/40 text-neutral-400 hover:text-white transition"
              title="Launch Developer CLI (~)"
            >
              <Terminal className="w-4 h-4 text-[#03e29c]" />
            </button>

            <div className="flex items-center gap-1.5 pl-1">
              <a
                href="https://github.com/Jyotishkumar-dev"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0d1118] border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#0d1118] border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Genuine Verified Metrics (MK Vision Studio Clean Strip) */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
            <div className="studio-card rounded-xl p-3.5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold font-heading text-white">55+</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              </div>
              <p className="text-[11px] text-neutral-400 font-mono mt-1">LeetCode Solved</p>
            </div>
            <div className="studio-card rounded-xl p-3.5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold font-heading text-white">4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
              <p className="text-[11px] text-neutral-400 font-mono mt-1">Full-Stack Projects</p>
            </div>
            <div className="studio-card rounded-xl p-3.5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg font-bold font-heading text-white">Tech Lead</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              </div>
              <p className="text-[11px] text-neutral-400 font-mono mt-1">SQUidHACK '26</p>
            </div>
            <div className="studio-card rounded-xl p-3.5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold font-heading text-white">7.8</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
              <p className="text-[11px] text-neutral-400 font-mono mt-1">B.Tech CGPA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Media Frame (MK Vision / Auge XP Framing) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="max-w-xs sm:max-w-sm w-full">
            <div className="studio-card rounded-2xl p-3 shadow-2xl relative group">
              {/* Studio corner accent tags */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 border border-white/10">
                <img
                  src="/assets/jyotish-profile.jpg"
                  alt="Jyotish Kumar"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
                  DEVELOPER / ARCHITECT
                </div>

                {/* Bottom overlay text */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-sm font-semibold text-white font-heading">
                    Jyotish Kumar
                  </p>
                  <p className="text-[11px] text-neutral-300 font-mono flex items-center justify-between mt-0.5">
                    <span>SAGE University, Indore</span>
                    <span className="text-[#03e29c]">2025–2028</span>
                  </p>
                </div>
              </div>

              {/* Clean studio metadata footer */}
              <div className="pt-3 px-1 pb-1 flex items-center justify-between text-left">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                  <MapPin className="w-3 h-3 text-[#03e29c]" />
                  <span>Indore, Madhya Pradesh</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                  <Code2 className="w-3 h-3 text-neutral-300" /> Full-Stack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
