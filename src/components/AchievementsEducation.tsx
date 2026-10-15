import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
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
      period: 'Aug 2025 – Present',
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
        <div className="space-y-1.5 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Education & Problem Solving
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
            Formal computer science education, data structures practice on LeetCode, and technical certifications.
          </p>
        </div>

        {/* LeetCode Milestone Card (Clean & Realistic) */}
        <div className="dev-card rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode Practice</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Solved 55+ Algorithmic Problems
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                Practicing daily problem-solving focusing on core data structures, time complexity analysis, and pattern recognition using <span className="text-neutral-200 font-medium">Java</span> and <span className="text-neutral-200 font-medium">C++</span>.
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {leetCodeTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] text-neutral-300 border border-white/5"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stat box */}
            <div className="flex md:flex-col items-center justify-center p-5 rounded-xl bg-neutral-900/60 border border-white/5 min-w-[160px] text-center">
              <span className="text-3xl sm:text-4xl font-bold font-heading text-white">55+</span>
              <span className="text-[11px] text-neutral-400 font-mono mt-1">Questions Solved</span>
              <span className="text-[10px] text-neutral-500 font-mono mt-0.5">Java • C++</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <h3 className="text-lg font-bold font-heading text-white">Education Timeline</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="dev-card rounded-2xl p-5 flex flex-col justify-between text-left"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-200 text-[11px] font-medium">
                      {edu.score}
                    </span>
                    <span className="text-neutral-400 text-[11px]">{edu.period}</span>
                  </div>

                  <h4 className="text-sm font-bold font-heading text-white leading-snug">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-2 border-t border-white/5">
                    {edu.focus}
                  </p>
                </div>

                <div className="pt-3 text-[11px] text-neutral-400 font-mono">
                  📍 {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-neutral-400" />
            <h3 className="text-lg font-bold font-heading text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="dev-card rounded-xl p-4 flex flex-col justify-between text-left"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 block">
                    {cert.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-400 font-mono pt-2 border-t border-white/5 mt-3">
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
