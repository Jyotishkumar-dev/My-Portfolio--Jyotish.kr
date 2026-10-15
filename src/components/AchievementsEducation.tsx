import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { LeetCodeIcon } from './Icons';

export const AchievementsEducation: React.FC = () => {
  const certifications = [
    {
      title: 'TCS iON Career Edge – Young Professional',
      issuer: 'Tata Consultancy Services',
      tag: 'Professional Development',
    },
    {
      title: 'C++ Essentials 1',
      issuer: 'Cisco Networking Academy',
      tag: 'Systems Programming & DSA',
    },
    {
      title: 'Introduction to Generative AI Studio',
      issuer: 'Simplilearn SkillUP',
      tag: 'Generative AI Foundations',
    },
    {
      title: 'AI & ML Workshop',
      issuer: 'PHN Technology in collab with IIT Patna',
      tag: 'Machine Learning Basics',
    },
  ];

  const educationList = [
    {
      institution: 'SAGE University, Indore – Alta School of Technology',
      degree: 'B.Tech in Computer Science & Technology',
      period: '2025 – 2029',
      score: 'CGPA: 7.8',
      location: 'Indore, Madhya Pradesh',
      focus: 'Data Structures & Algorithms, Object-Oriented Programming, DBMS, Web Development.',
    },
    {
      institution: 'Kishan Mazdoor Inter College, Giddi C',
      degree: 'Higher Secondary (12th with Science)',
      period: 'Apr 2022 – Mar 2024',
      score: 'Percentage: 72.5%',
      location: 'Jharkhand, India',
      focus: 'Physics, Chemistry, Mathematics.',
    },
    {
      institution: 'High School Petarwar, Bokaro',
      degree: 'Secondary Matriculation (10th with Science)',
      period: 'Apr 2021 – Mar 2022',
      score: 'Percentage: 69.8%',
      location: 'Bokaro, Jharkhand',
      focus: 'General Science, Mathematics, Computer Foundations.',
    },
  ];

  const leetCodeTopics = [
    'Arrays & Strings',
    'Two Pointers',
    'Sliding Window',
    'Hash Maps & Sets',
    'Linked Lists',
    'Binary Search',
    'Recursion & Trees',
    'Sorting Algorithms',
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12 text-left">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
            <span>[ 05 / ACADEMICS & PROBLEM SOLVING ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Education & <span className="font-editorial text-white font-normal">Problem Solving</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
            Formal computer science education, data structures and algorithms practice on LeetCode, and accredited engineering certifications.
          </p>
        </div>

        {/* LeetCode Milestone Card (Clean Studio Card) */}
        <div className="bento-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode Algorithmic Practice</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Solved 55+ Algorithmic Problems
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Practicing algorithmic problem solving focusing on time & space complexity, pattern recognition, and robust edge-case handling using <span className="text-white font-medium">Java</span> and <span className="text-white font-medium">C++</span>.
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {leetCodeTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/10"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stat box */}
            <div className="flex md:flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 min-w-[180px] text-center">
              <span className="text-4xl sm:text-5xl font-bold font-heading text-white">55+</span>
              <span className="text-xs text-neutral-300 font-mono mt-1 font-semibold">Problems Solved</span>
              <span className="text-[10px] text-neutral-400 font-mono mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" /> Java & C++ Focus
              </span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#03e29c]" />
              <h3 className="text-xl font-bold font-heading text-white">Academic Qualifications</h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">Verified Records</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => {
              const eduNumber = `0${idx + 1}`;
              return (
                <div
                  key={idx}
                  className="studio-card rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2.5">
                      <span className="text-neutral-500 font-semibold text-[11px]">[{eduNumber}]</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#03e29c]/10 border border-[#03e29c]/20 text-[#03e29c] text-xs font-semibold">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold font-heading text-white leading-snug">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-neutral-300 font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed pt-2 border-t border-white/5">
                      {edu.focus}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span>{edu.period}</span>
                    <span>📍 {edu.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#03e29c]" />
              <h3 className="text-xl font-bold font-heading text-white">Accredited Certifications</h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">Professional Credentials</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="studio-card rounded-xl p-5 flex flex-col justify-between text-left"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#03e29c] block uppercase tracking-wider">
                    {cert.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-400 font-mono pt-3 border-t border-white/5 mt-3">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
