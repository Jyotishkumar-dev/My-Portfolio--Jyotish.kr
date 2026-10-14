import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Check, MapPin, Code2, Database } from 'lucide-react';
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
    <section id="about" className="relative pt-28 sm:pt-36 pb-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Hero Text & Information */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-pill text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to Software Engineering Internships</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neutral-400" /> Indore, M.P.
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
              Jyotish Kumar
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-medium">
              Full-Stack Developer & Computer Science Student
            </p>
          </div>

          {/* Grounded & Authentic Bio */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Currently pursuing B.Tech in Computer Science at <span className="text-neutral-200 font-medium">SAGE University, Indore</span> (Alta School of Technology, CGPA 7.8).
            I build end-to-end web applications with <span className="text-neutral-200">React</span>, <span className="text-neutral-200">Next.js</span>, <span className="text-neutral-200">TypeScript</span>, and <span className="text-neutral-200">Supabase</span>. Driven by clean architecture, practical problem-solving on LeetCode, and thoughtful user interfaces.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="#projects"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-200 transition"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 text-neutral-200 font-medium text-xs sm:text-sm transition"
            >
              <Download className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 text-xs font-mono text-neutral-300 transition"
              title="Copy email address"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 pl-1">
              <a
                href="https://github.com/Jyotishkumar-dev"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/jyotish-kr-verma-0601bb387"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#141721] border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white transition"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Genuine Developer Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
            <div className="p-3 rounded-xl bg-[#11131a] border border-white/5 text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-white">55+</span>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">LeetCode Solved</p>
            </div>
            <div className="p-3 rounded-xl bg-[#11131a] border border-white/5 text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-white">4</span>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">Full-Stack Projects</p>
            </div>
            <div className="p-3 rounded-xl bg-[#11131a] border border-white/5 text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-white">Tech Lead</span>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">SQUidHACK '26</p>
            </div>
            <div className="p-3 rounded-xl bg-[#11131a] border border-white/5 text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-white">7.8</span>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">B.Tech CGPA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Authentic Portrait Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="max-w-xs w-full">
            <div className="rounded-2xl bg-[#11131a] border border-white/10 p-2.5 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src="/assets/jyotish-profile.jpg"
                  alt="Jyotish Kumar"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Clean caption card */}
              <div className="pt-3 px-1 pb-1 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-semibold text-neutral-200">Jyotish Kumar</p>
                  <p className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500" /> Indore, M.P.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
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
