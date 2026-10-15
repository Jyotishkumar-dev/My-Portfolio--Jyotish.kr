import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Binary, Cpu } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: 'Advanced' | 'Proficient'; desc: string }[];
}

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Binary className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'TypeScript', level: 'Advanced', desc: 'Strict types, generics, and API contract interfaces.' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Async/await, DOM APIs, modern ES features.' },
        { name: 'Java', level: 'Proficient', desc: 'Object-oriented programming, core DSA implementations.' },
        { name: 'C / C++', level: 'Proficient', desc: 'Pointers, memory basics, LeetCode problem solving.' },
        { name: 'Python', level: 'Proficient', desc: 'Scripting, tooling, automation, and basic AI libraries.' },
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: <Code className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'React.js (v18/19)', level: 'Advanced', desc: 'Custom hooks, concurrent mode, modular component architecture.' },
        { name: 'Next.js (App Router)', level: 'Advanced', desc: 'Server components, route handlers, SSR, and layouts.' },
        { name: 'Tailwind CSS', level: 'Advanced', desc: 'Responsive utility styling, custom tokens, and dark theme design.' },
        { name: 'Three.js & WebGL', level: 'Proficient', desc: '3D interactive canvases, geometry rendering, camera parallax.' },
        { name: 'HTML5 & CSS3', level: 'Advanced', desc: 'Semantic markup, accessibility, modern flexbox and grid layouts.' },
      ],
    },
    {
      title: 'Backend & Cloud',
      icon: <Server className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'Node.js & Express.js', level: 'Advanced', desc: 'RESTful architecture, custom middleware, error handling.' },
        { name: 'Supabase', level: 'Advanced', desc: 'Managed PostgreSQL, Row Level Security (RLS), and Auth.' },
        { name: 'RESTful APIs', level: 'Advanced', desc: 'Endpoint contracts, JSON payloads, HTTP status codes, Zod validation.' },
        { name: 'JWT & bcrypt Auth', level: 'Advanced', desc: 'Token expiration cycles, password hashing, protected routes.' },
      ],
    },
    {
      title: 'Databases & ORMs',
      icon: <Database className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational modeling, primary & foreign keys, indexing, ACID transactions.' },
        { name: 'Drizzle ORM', level: 'Advanced', desc: 'Type-safe SQL schemas, drizzle-kit migrations, query builder.' },
        { name: 'MongoDB', level: 'Proficient', desc: 'Document schemas, NoSQL CRUD operations, and aggregations.' },
        { name: 'SQL', level: 'Advanced', desc: 'Joins, aggregations, subqueries, and analytical queries.' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', desc: 'Version control, feature branches, pull requests, merge conflict resolution.' },
        { name: 'VS Code', level: 'Advanced', desc: 'Developer extensions, terminal workflows, and debugging.' },
        { name: 'Postman', level: 'Proficient', desc: 'API testing collections, mock environments, and response verification.' },
        { name: 'Vite', level: 'Advanced', desc: 'Frontend tooling, hot module replacement, production bundling.' },
      ],
    },
    {
      title: 'Core CS Concepts',
      icon: <Cpu className="w-4 h-4 text-neutral-300" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Advanced', desc: '55+ problems solved on LeetCode with algorithmic focus.' },
        { name: 'OOP Principles', level: 'Advanced', desc: 'Encapsulation, inheritance, polymorphism, abstraction.' },
        { name: 'Role-Based Access Control', level: 'Advanced', desc: 'Multi-role permission boundaries (Student to Admin).' },
        { name: 'DBMS Fundamentals', level: 'Advanced', desc: 'Normalization, relational integrity, transaction states.' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10 text-left">
        {/* Header */}
        <div className="space-y-2 border-b border-white/10 pb-6 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3C2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] shadow-[0_0_8px_#FF2E93]" />
            <span>[ 03 / CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Technical <span className="font-editorial text-white font-normal underline decoration-[#FF2E93]/40 decoration-1 underline-offset-4">Proficiencies</span>
          </h2>
          <p className="text-[#A3A3C2] text-xs sm:text-sm max-w-lg">
            Core programming languages, client-side frameworks, cloud architectures, and databases applied in production systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const catNumber = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className="studio-card rounded-2xl p-6 flex flex-col justify-between reveal-on-scroll"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/25">{cat.icon}</div>
                      <h3 className="text-sm font-bold font-heading text-white">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#A3A3C2] font-semibold">
                      [{catNumber}]
                    </span>
                  </div>

                  <div className="space-y-2">
                    {cat.skills.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={() =>
                            setSelectedSkill(isSelected ? null : skill.name)
                          }
                          className={`p-2.5 rounded-xl cursor-pointer transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#00F0FF]/10 border-[#00F0FF]/40 shadow-[0_0_12px_rgba(0,240,255,0.15)] text-white'
                              : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15 text-[#A3A3C2]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-white flex items-center gap-1.5">
                              {skill.level === 'Advanced' && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                              )}
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#A3A3C2]">
                              {skill.level}
                            </span>
                          </div>
                          {isSelected && (
                            <p className="text-[11px] text-[#A3A3C2] mt-2 pt-2 border-t border-white/10 leading-relaxed font-mono">
                              {skill.desc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="text-[10px] text-[#A3A3C2] font-mono mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between">
                  <span>Click to view implementation focus</span>
                  <span className="text-[#00F0FF] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
                    Advanced
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
