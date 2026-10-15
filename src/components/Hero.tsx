import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Check, MapPin, Code2, Terminal, Award, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

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
    <section id="about" className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Two-Column Hero Row (Seamless & Airy Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement & Bio */}
          <div className="lg:col-span-7 space-y-7 text-left reveal-on-scroll">
            {/* Creative Coder Badge & Availability Anchor Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#9333EA] text-white text-xs font-semibold tracking-wide shadow-lg shadow-[#FF2E93]/35 hover:scale-105 transition-transform cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Creative Coder
              </span>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F0C1B]/80 border border-[#00F0FF]/30 text-xs font-mono text-[#A3A3C2] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_8px_#00F0FF]" />
                <span className="text-white font-medium">Available for 2026 Internships</span>
                <span className="text-neutral-600">•</span>
                <span className="text-[#A3A3C2] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#00F0FF]" /> Indore, M.P.
                </span>
              </div>
            </div>

            {/* Studio Heading & Typography */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-[1.06]">
                Jyotish Kumar
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-100 font-light leading-snug">
                Engineering web systems with architectural{' '}
                <span className="font-editorial text-white text-2xl sm:text-3xl font-normal underline decoration-[#00F0FF]/40 decoration-1 underline-offset-4">
                  precision
                </span>{' '}
                and creative{' '}
                <span className="font-editorial text-white text-2xl sm:text-3xl font-normal underline decoration-[#FF2E93]/40 decoration-1 underline-offset-4">
                  intent
                </span>
                .
              </p>
            </div>

            {/* Authentic Grounded Biography */}
            <p className="text-[#A3A3C2] text-sm sm:text-base leading-relaxed max-w-xl">
              Computer Science undergraduate at{' '}
              <span className="text-white font-medium">
                SAGE University, Indore
              </span>{' '}
              (Alta School of Technology, CGPA 7.8, Class of 2029). I build full-stack web platforms using{' '}
              <span className="text-white font-medium">React 19</span>,{' '}
              <span className="text-white font-medium">Next.js 16</span>,{' '}
              <span className="text-white font-medium">TypeScript</span>, and{' '}
              <span className="text-white font-medium">Supabase</span> — backed by daily algorithmic practice on LeetCode.
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="btn-neon-pink-purple flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5 text-white" />
              </a>

              {/* Dynamic Action Button: Glowing circular badge with vibrant pink-to-purple gradient fill */}
              <button
                onClick={onOpenResume}
                className="btn-magnetic flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2E93] via-[#D92686] to-[#9333EA] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#FF2E93]/35 hover:shadow-[#FF2E93]/60 hover:scale-105 transition-all"
                title="View Resume Document"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={copyEmail}
                className="btn-magnetic flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0F0C1B]/80 backdrop-blur-md border border-white/10 hover:border-[#00F0FF]/50 text-xs font-mono text-[#A3A3C2] hover:text-white transition"
                title="Copy direct email"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span className="text-[#00F0FF]">Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#A3A3C2]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenTerminal}
                className="p-2.5 rounded-xl bg-[#0F0C1B]/80 backdrop-blur-md border border-white/10 hover:border-[#00F0FF]/50 text-[#A3A3C2] hover:text-white transition"
                title="Launch Developer CLI (~)"
              >
                <Terminal className="w-4 h-4 text-neutral-300" />
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Jyotishkumar-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0C1B]/80 backdrop-blur-md border border-white/10 hover:border-[#00F0FF]/50 text-[#A3A3C2] hover:text-white transition"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0C1B]/80 backdrop-blur-md border border-white/10 hover:border-[#00F0FF]/50 text-[#A3A3C2] hover:text-white transition"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Seamless Floating Profile Media Card */}
          <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
            <div className="max-w-xs sm:max-w-sm w-full animate-float">
              <div className="bento-card rounded-3xl p-3 shadow-2xl relative group border border-[#FF2E93]/30 hover:border-[#00F0FF]/50">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
                  <img
                    src="/assets/jyotish-profile.jpg"
                    alt="Jyotish Kumar"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0813]/90 via-[#0B0813]/25 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B0813]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#A3A3C2] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                    <span className="text-white font-medium">SOFTWARE ENGINEER</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-sm font-semibold text-white font-heading">
                      Jyotish Kumar
                    </p>
                    <p className="text-[11px] text-[#A3A3C2] font-mono flex items-center justify-between mt-0.5">
                      <span>SAGE University, Indore</span>
                      <span className="text-neutral-400">2025–2029</span>
                    </p>
                  </div>
                </div>

                {/* Minimalist Footer Strip */}
                <div className="pt-3 px-2 pb-1 flex items-center justify-between text-left text-[#A3A3C2] font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#00F0FF]" />
                    <span>Indore, Madhya Pradesh</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5 text-[10px] text-white">
                    <Code2 className="w-3 h-3 text-[#00F0FF]" /> Full-Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats: Premium Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
          {/* Bento Cell 1: LeetCode */}
          <div className="bento-card rounded-2xl p-5 text-left group reveal-on-scroll">
            <div className="flex items-center justify-between text-neutral-400 mb-3">
              <LeetCodeIcon className="w-4 h-4 text-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] shadow-[0_0_8px_#FF2E93]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              55+
            </div>
            <p className="text-xs font-semibold text-white mt-1">
              LeetCode Solved
            </p>
            <p className="text-[11px] text-[#A3A3C2] font-mono mt-0.5">
              Java & C++ DSA Practice
            </p>
          </div>

          {/* Bento Cell 2: Projects */}
          <div className="bento-card rounded-2xl p-5 text-left group reveal-on-scroll">
            <div className="flex items-center justify-between text-neutral-400 mb-3">
              <Code2 className="w-4 h-4 text-[#00F0FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              4
            </div>
            <p className="text-xs font-semibold text-white mt-1">
              Full-Stack Systems
            </p>
            <p className="text-[11px] text-[#A3A3C2] font-mono mt-0.5">
              Production Architecture
            </p>
          </div>

          {/* Bento Cell 3: Leadership */}
          <div className="bento-card rounded-2xl p-5 text-left group reveal-on-scroll">
            <div className="flex items-center justify-between text-neutral-400 mb-3">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] shadow-[0_0_8px_#FF2E93]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-heading text-white">
              Tech Lead
            </div>
            <p className="text-xs font-semibold text-white mt-1">
              SQUidHACK 2026
            </p>
            <p className="text-[11px] text-[#A3A3C2] font-mono mt-0.5">
              24-Hour Hackathon
            </p>
          </div>

          {/* Bento Cell 4: Academics */}
          <div className="bento-card rounded-2xl p-5 text-left group reveal-on-scroll">
            <div className="flex items-center justify-between text-neutral-400 mb-3">
              <BookOpen className="w-4 h-4 text-[#00F0FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
              7.8
            </div>
            <p className="text-xs font-semibold text-white mt-1">
              B.Tech CGPA
            </p>
            <p className="text-[11px] text-[#A3A3C2] font-mono mt-0.5">
              Alta School of Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
