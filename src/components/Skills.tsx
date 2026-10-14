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
        <div className="space-y-1.5 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <Cpu className="w-3.5 h-3.5 text-neutral-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Technical Skills
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
            Languages, frameworks, databases, and developer tooling used across my projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="dev-card rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-white/5">
                  <div className="p-1.5 rounded-lg bg-white/5">{cat.icon}</div>
                  <h3 className="text-sm font-bold font-heading text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() =>
                        setSelectedSkill(selectedSkill === skill.name ? null : skill.name)
                      }
                      className={`p-2 rounded-xl cursor-pointer transition border ${
                        selectedSkill === skill.name
                          ? 'bg-white/10 border-white/20'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {skill.level}
                        </span>
                      </div>
                      {selectedSkill === skill.name && (
                        <p className="text-[11px] text-neutral-400 mt-1.5 pt-1.5 border-t border-white/5 leading-relaxed">
                          {skill.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[10px] text-neutral-500 font-mono mt-4 pt-2 border-t border-white/5">
                Click any skill to inspect practical focus
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
