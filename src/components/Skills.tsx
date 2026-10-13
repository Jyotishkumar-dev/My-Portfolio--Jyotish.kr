import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Binary, Sparkles, CheckCircle2 } from 'lucide-react';
import { playPopSound } from '../utils/audio';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  skills: { name: string; level: 'Advanced' | 'Proficient' | 'Familiar'; desc: string }[];
}

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Binary className="w-5 h-5 text-cyan-400" />,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      skills: [
        { name: 'TypeScript', level: 'Advanced', desc: 'Strict typing, generics, utility types, and API contracts.' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Asynchronous flows, event loops, DOM, functional patterns.' },
        { name: 'Java', level: 'Proficient', desc: 'OOP design, multithreading, and core DSA implementations.' },
        { name: 'C / C++', level: 'Proficient', desc: 'Memory pointers, algorithmic problem-solving on LeetCode.' },
        { name: 'Python', level: 'Proficient', desc: 'Scripting, automation, data manipulation, and AI tools.' },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      skills: [
        { name: 'React.js (v18/19)', level: 'Advanced', desc: 'Custom hooks, concurrent rendering, state machines.' },
        { name: 'Next.js (App Router)', level: 'Advanced', desc: 'Server Components, SSR, ISR, Turbopack, and actions.' },
        { name: 'Tailwind CSS v4', level: 'Advanced', desc: 'Design tokens, dark modes, CSS variables, fluid responsive layouts.' },
        { name: 'Three.js & WebGL', level: 'Proficient', desc: '3D interactive scenes, particle buffers, camera parallax.' },
        { name: 'GSAP & Motion', level: 'Proficient', desc: 'Timeline animations, scroll-triggered reveals, micro-interactions.' },
      ],
    },
    {
      title: 'Backend & Cloud',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      skills: [
        { name: 'Node.js & Express.js', level: 'Advanced', desc: 'REST architecture, middleware chains, error handling.' },
        { name: 'Supabase (BaaS)', level: 'Advanced', desc: 'PostgreSQL, Row Level Security, Supabase Auth & Realtime.' },
        { name: 'RESTful API Design', level: 'Advanced', desc: 'Resource endpoints, status codes, pagination, Zod validation.' },
        { name: 'JWT & bcrypt Auth', level: 'Advanced', desc: 'HttpOnly cookie tokens, refresh cycles, role-based gates.' },
      ],
    },
    {
      title: 'Databases & ORMs',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational schemas, foreign keys, indexes, and ACID transactions.' },
        { name: 'Drizzle ORM', level: 'Advanced', desc: 'Type-safe SQL schemas, drizzle-kit migrations, query builder.' },
        { name: 'Prisma ORM', level: 'Proficient', desc: 'Data modeling, relation queries, client generation.' },
        { name: 'MongoDB', level: 'Proficient', desc: 'Document stores, aggregations, Mongoose schemas.' },
        { name: 'SQL', level: 'Advanced', desc: 'Complex joins, subqueries, group by, analytical queries.' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      color: 'text-pink-400',
      borderColor: 'border-pink-500/30',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching, PR reviews, merge resolution, monorepos.' },
        { name: 'VS Code & CLI', level: 'Advanced', desc: 'High-speed shortcuts, terminal scripting, debugging tools.' },
        { name: 'Postman', level: 'Proficient', desc: 'API testing collections, mock servers, automated test suites.' },
        { name: 'Vite & Bundlers', level: 'Advanced', desc: 'Hot module replacement, production code splitting.' },
        { name: 'Vercel Deployment', level: 'Proficient', desc: 'CI/CD pipeline triggers, custom domain DNS, edge routing.' },
      ],
    },
    {
      title: 'Core CS Foundations',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Advanced', desc: '55+ problems solved on LeetCode with algorithmic focus.' },
        { name: 'Object-Oriented Programming', level: 'Advanced', desc: 'Encapsulation, inheritance, polymorphism, design patterns.' },
        { name: 'Role-Based Access Control', level: 'Advanced', desc: 'Hierarchical permission trees (Students to Super Admins).' },
        { name: 'DBMS Principles', level: 'Advanced', desc: 'Normalization (1NF to BCNF), indexing, concurrency control.' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-left space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Technical <span className="text-gradient-purple">Skills</span> & Toolkit
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A comprehensive overview of programming languages, full-stack frameworks, cloud databases, and computer science fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl glass-card p-6 border ${cat.borderColor} flex flex-col justify-between text-left`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-white/5">{cat.icon}</div>
                  <h3 className={`text-lg font-bold font-heading ${cat.color}`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => {
                        playPopSound();
                        setSelectedSkill(selectedSkill === skill.name ? null : skill.name);
                      }}
                      className={`p-2.5 rounded-xl cursor-pointer transition-all border ${
                        selectedSkill === skill.name
                          ? 'bg-white/10 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            skill.level === 'Advanced'
                              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                              : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {selectedSkill === skill.name && (
                        <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-white/10 leading-relaxed animate-in fade-in duration-200">
                          {skill.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Helper tip */}
              <div className="pt-4 text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Click any skill to inspect practical focus
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
