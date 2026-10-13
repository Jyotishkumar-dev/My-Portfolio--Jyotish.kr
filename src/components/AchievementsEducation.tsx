import React from 'react';
import { GraduationCap, Award, CheckCircle, BookOpen, Flame, Cpu, Terminal, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSuccessSound, playPopSound } from '../utils/audio';

export const AchievementsEducation: React.FC = () => {
  const triggerLeetCodeCelebration = () => {
    playSuccessSound();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#10b981', '#06b6d4'],
    });
  };

  const certifications = [
    {
      title: 'TCS iON Career Edge – Young Professional',
      issuer: 'Tata Consultancy Services',
      tag: 'Professional Excellence',
      icon: <Award className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: 'C++ Essentials 1',
      issuer: 'Cisco Networking Academy',
      tag: 'Core Systems & DSA',
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
    },
    {
      title: 'Introduction to Generative AI Studio',
      issuer: 'Simplilearn SkillUP',
      tag: 'Generative AI & LLMs',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'AI & ML Workshop',
      issuer: 'PHN Technology in collab with IIT Patna',
      tag: 'Machine Learning',
      icon: <Award className="w-4 h-4 text-amber-400" />,
    },
  ];

  const educationList = [
    {
      institution: 'SAGE University, Indore – Alta School of Technology',
      degree: 'Bachelor of Technology in Computer Science & Technology',
      period: 'Aug 2025 – Present',
      score: 'CGPA: 7.8',
      scoreBadge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      location: 'Indore, Madhya Pradesh',
      focus: 'Data Structures, Object-Oriented Systems, Full-Stack Architecture, Database Management.',
    },
    {
      institution: 'Kishan Mazdoor Inter College, Giddi C',
      degree: 'Higher Secondary (12th Science)',
      period: 'Apr 2022 – Mar 2024',
      score: 'Percentage: 72.5%',
      scoreBadge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      location: 'Jharkhand, India',
      focus: 'Physics, Chemistry, Mathematics, Foundations of Logic.',
    },
    {
      institution: 'High School Petarwar, Bokaro',
      degree: 'Secondary Matriculation (10th Science)',
      period: 'Apr 2021 – Mar 2022',
      score: 'CGPA: 69.8',
      scoreBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      location: 'Bokaro, Jharkhand',
      focus: 'General Science, Mathematics, Computer Basics.',
    },
  ];

  return (
    <section id="academics" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-left space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & DSA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Education & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Strong academic foundations in Computer Science paired with continuous algorithmic problem-solving on LeetCode and professional certifications.
          </p>
        </div>

        {/* LeetCode Feature Card */}
        <div className="relative rounded-3xl glass-card border border-amber-500/30 p-6 sm:p-8 overflow-hidden text-left shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/40 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> LeetCode Problem-Solving
                </span>
                <span className="text-xs text-slate-400 font-mono">Updated Milestone</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Solved <span className="text-gradient-gold">55+ Questions</span> on LeetCode
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Dedicated daily problem solver focusing on foundational Data Structures and Algorithms in <span className="text-white font-medium">Java</span> and <span className="text-white font-medium">C++</span>. Proficient in pattern recognition across:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Arrays & Strings',
                  'Two Pointers',
                  'Sliding Window',
                  'Hash Maps & Sets',
                  'Linked Lists',
                  'Binary Search',
                  'Recursion & Trees',
                  'Sorting & Time Complexity',
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl glass-panel border border-amber-500/20 text-center">
              <span className="text-5xl font-black font-heading text-gradient-gold">55+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">Problems Solved</span>
              
              <button
                onClick={triggerLeetCodeCelebration}
                className="mt-4 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5" />
                Celebrate Milestone 🎉
              </button>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xl font-bold font-heading text-white">Education Timeline</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-card p-6 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${edu.scoreBadge}`}>
                      {edu.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-xs font-medium text-cyan-400">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                    {edu.focus}
                  </p>
                </div>

                <div className="pt-4 text-[11px] text-slate-500 font-mono">
                  📍 {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-purple-400" />
            <h3 className="text-xl font-bold font-heading text-white">Verified Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 flex flex-col justify-between transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white/5">{cert.icon}</div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {cert.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {cert.issuer}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle className="w-3 h-3" /> Verified Credential
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
