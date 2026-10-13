import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Check, Sparkles, MapPin, Award, Terminal, Code2, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playPopSound, playSuccessSound } from '../utils/audio';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'Creative Full-Stack Engineer',
    'Next.js & Supabase Architect',
    'AI Solutions Builder (Gemini)',
    'Graphic Designer & Brand Creator',
    'Algorithmic Problem Solver (55+ DSA)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmail = () => {
    playSuccessSound();
    navigator.clipboard.writeText('jyotishkumarjhar@gmail.com');
    setEmailCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#8b5cf6'],
    });
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-28 sm:pt-36 pb-20 px-4 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Available for Summer / Fall Internships</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Indore, M.P.
            </span>
          </div>

          {/* Name & Dynamic Tagline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading">
              Hi, I'm <br />
              <span className="text-gradient-cyan">Jyotish Kumar</span>
            </h1>

            <div className="h-9 sm:h-11 flex items-center">
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 font-heading">
                <span className="text-purple-400">⚡</span>
                <span className="text-gradient-purple transition-all duration-500 ease-out">
                  {roles[roleIndex]}
                </span>
              </p>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            B.Tech Computer Science student at <span className="text-slate-200 font-medium">SAGE University, Indore</span> (CGPA 7.8).
            I build modern, resilient full-stack applications with architectural clarity — specializing in <span className="text-cyan-400">React</span>, <span className="text-cyan-400">Next.js</span>, <span className="text-purple-400">TypeScript</span>, <span className="text-purple-400">Node.js</span>, and <span className="text-emerald-400">Supabase</span>, paired with Gemini AI integrations and expressive graphic design.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => playPopSound()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                playPopSound();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-white/15 text-slate-200 hover:text-white hover:border-cyan-500/40 font-medium text-sm transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-3 rounded-xl glass-panel border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 transition"
              title="Copy candidate email"
            >
              {emailCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                playPopSound();
                onOpenTerminal();
              }}
              className="flex items-center gap-1.5 px-3 py-3 rounded-xl glass-panel border border-purple-500/30 text-xs font-mono text-purple-300 hover:border-purple-500/60 transition"
              title="Open Terminal Easter Egg"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>CLI</span>
            </button>
          </div>

          {/* Metrics Strip */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
            <div className="p-3 rounded-xl glass-card text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-white">55+</span>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">LeetCode Solved</p>
            </div>
            <div className="p-3 rounded-xl glass-card text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-cyan-400">4+</span>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">Full-Stack Apps</p>
            </div>
            <div className="p-3 rounded-xl glass-card text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-purple-400">Lead</span>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">SQUidHACK '26</p>
            </div>
            <div className="p-3 rounded-xl glass-card text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-emerald-400">7.8</span>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">B.Tech CGPA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Jyotish's Real Photo with 3D Holographic Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm w-full">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-pulse-glow" />

            {/* Profile Frame */}
            <div className="relative rounded-2xl bg-[#090b14] border border-white/15 p-3.5 shadow-2xl overflow-hidden">
              {/* Corner Crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-400/80 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400/80 pointer-events-none" />

              {/* Portrait Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                <img
                  src="/assets/jyotish-profile.jpg"
                  alt="Jyotish Kumar - Full-Stack Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070b]/90 via-transparent to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-heading font-bold text-base tracking-tight">Jyotish Kumar</p>
                      <p className="text-xs text-cyan-300 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Indore, M.P.
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                      Active
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md glass-panel text-[10px] font-mono text-slate-300 flex items-center gap-1">
                      <Code2 className="w-2.5 h-2.5 text-cyan-400" /> React & Next.js
                    </span>
                    <span className="px-2 py-0.5 rounded-md glass-panel text-[10px] font-mono text-slate-300 flex items-center gap-1">
                      <Globe className="w-2.5 h-2.5 text-purple-400" /> Supabase
                    </span>
                    <span className="px-2 py-0.5 rounded-md glass-panel text-[10px] font-mono text-slate-300 flex items-center gap-1">
                      <Award className="w-2.5 h-2.5 text-yellow-400" /> Arkfest '26
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating holographic side chip */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-semibold font-mono shadow-lg border border-white/20 flex items-center gap-1.5 animate-float">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Creative Dev
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
