import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ChevronRight, X, Cpu, Database } from 'lucide-react';
import { GithubIcon } from './Icons';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Machine Learning' | 'Campus Systems';
  description: string;
  longDescription: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  stats: { label: string; value: string }[];
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'AI & Machine Learning' | 'Campus Systems'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'restock-ai',
      title: 'RESTOCK AI (DEAD-STOCK)',
      subtitle: 'Electronic Waste Recovery & Component Reuse Platform',
      category: 'AI & Machine Learning',
      badge: 'Gemini 2.0 Flash AI',
      description:
        'A full-stack circular economy platform connecting businesses with certified e-waste recyclers using multimodal Gemini AI for automated hardware inspection.',
      longDescription:
        'RESTOCK AI connects enterprises with verified electronic waste recyclers. Users upload photos or batch manifests of decommissioned electronics. The application leverages Google Gemini 2.0 Flash to inspect component damage, evaluate precious metal salvageability, and route hardware to authorized regional recycling partners.',
      architectureDetails: [
        'Google Gemini 2.0 Flash API integration (@google/genai) for real-time visual hardware categorization and material audit.',
        'RESTful backend written in Express.js and TypeScript, paired with PostgreSQL and Drizzle ORM for schema safety.',
        'Client built using React 19, TypeScript, and Tailwind CSS with responsive, accessible layouts.',
        'Clear data models tracking pickup orders, disposal logs, and recycler compliance records.',
      ],
      techStack: ['React 19', 'TypeScript', 'Google Gemini AI', 'Express.js', 'Drizzle ORM', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Jyotishkumar-dev/DEAD-STOCK-',
      liveUrl: 'https://dead-stock-eta.vercel.app',
      stats: [
        { label: 'AI Model', value: 'Gemini 2.0 Flash' },
        { label: 'Database', value: 'PostgreSQL + Drizzle' },
        { label: 'Status', value: 'Deployed on Vercel' },
      ],
    },
    {
      id: 'campus-resolve',
      title: 'Campus Resolve (Hostel & Mess)',
      subtitle: 'Collegiate Grievance Resolution & Facility Management Platform',
      category: 'Campus Systems',
      badge: 'Next.js 16 + Supabase',
      description:
        'A web platform connecting student daily feedback directly with collegiate hostel wardens, mess contractors, and university administration.',
      longDescription:
        'Campus Resolve replaces scattered WhatsApp groups and paper complaints with a structured resolution system for campus accommodation. Students submit categorized issues regarding hostel amenities or mess meals, while staff and wardens manage work tickets with priority statuses, verification workflows, and service satisfaction analytics.',
      architectureDetails: [
        'Built with Next.js 16 App Router, Turbopack, and TypeScript in strict type mode.',
        'Supabase backend providing managed PostgreSQL, Row Level Security (RLS) policies, and Supabase Auth.',
        'Form state and schema validation handled with React Hook Form and Zod.',
        'Data visualizations using Recharts to track turnaround time and meal ratings across hostel blocks.',
      ],
      techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Zod', 'Recharts'],
      githubUrl: 'https://github.com/Jyotishkumar-dev/Hostel-Mess-Service-Management-Platform',
      stats: [
        { label: 'Framework', value: 'Next.js 16 App Router' },
        { label: 'Backend & DB', value: 'Supabase + Postgres' },
        { label: 'Auth & RLS', value: 'Supabase Auth' },
      ],
    },
    {
      id: 'smart-attend',
      title: 'SmartAttend',
      subtitle: 'Role-Based Academic Attendance Management System',
      category: 'Full-Stack',
      badge: 'RBAC • Drizzle ORM',
      description:
        'Full-stack attendance tracking system supporting Students, Faculty, HODs, and Administrators with JWT authentication and analytics.',
      longDescription:
        'SmartAttend was developed to automate class attendance record-keeping in colleges. It features five distinct authorization tiers, allowing faculty to log attendance quickly while department heads view analytics on student attendance percentage and absenteeism trends.',
      architectureDetails: [
        '5-Tier Role-Based Access Control (RBAC): Student, Faculty, HOD, Admin, and Super Admin.',
        'Secure authentication using JSON Web Tokens (JWT) with HTTP-only refresh tokens and bcrypt password hashing.',
        'Full CRUD modules for managing academic years, courses, sections, and daily roster sheets.',
        'PostgreSQL database modeled and queried using Drizzle ORM for type-safe queries.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'JWT', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Jyotishkumar-dev',
      stats: [
        { label: 'Roles', value: '5-Tier RBAC' },
        { label: 'Auth', value: 'JWT + Refresh Tokens' },
        { label: 'Database', value: 'PostgreSQL' },
      ],
    },
    {
      id: 'krishifleet-ai',
      title: 'KrishiFleet AI',
      subtitle: 'Smart Farm Equipment & CHC Operations Platform',
      category: 'AI & Machine Learning',
      badge: 'SQUidHACK 2026 (Tech Lead)',
      description:
        'Platform connecting farmers with Custom Hiring Centre (CHC) operators, developed as Technical Lead during the 24-hour SQUidHACK 2026 hackathon.',
      longDescription:
        'Built during the 24-hour SQUidHACK 2026 hackathon, where Jyotish served as Technical Lead. KrishiFleet AI connects smallholder farmers with nearby agricultural machinery operators, offering an explainable recommendation system that factors in plot acreage, soil requirements, rental rates, and distance.',
      architectureDetails: [
        'Participated as Technical Lead coordinating prototype architecture, data models, and team integration during the hackathon.',
        'Explainable equipment matching logic based on land size, crop cycle, and machinery availability.',
        'Frontend built with Next.js, React Hook Form, and Zod validation schemas.',
        'Equipment booking workflows with status tracking and telemetry visualization using Recharts.',
      ],
      techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Recharts'],
      githubUrl: 'https://github.com/Jyotishkumar-dev',
      stats: [
        { label: 'Event', value: 'SQUidHACK 2026 (Participant)' },
        { label: 'Role', value: 'Technical Lead' },
        { label: 'Stack', value: 'Next.js + TypeScript' },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-white/10 pb-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c]" />
              <span>[ 02 / SELECTED WORKS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Featured <span className="font-editorial text-white font-normal">Projects</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
              Production web applications, multimodal AI workflows, and campus platforms engineered with scalable TypeScript architecture.
            </p>
          </div>

          {/* Filter Tabs (MK Vision studio pills style) */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto bg-[#0d1118] p-1.5 rounded-2xl border border-white/10">
            {(['All', 'Full-Stack', 'AI & Machine Learning', 'Campus Systems'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid (MK Vision & Auge XP Studio Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const projectNumber = `0${index + 1} / 0${projects.length}`;
            return (
              <div
                key={project.id}
                className="studio-card group rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Studio Index & Badges */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-neutral-500 font-semibold tracking-wider">
                        [{projectNumber}]
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#03e29c] bg-[#03e29c]/10 border border-[#03e29c]/20">
                        {project.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-[#03e29c] bg-[#03e29c]/10 hover:bg-[#03e29c]/20 border border-[#03e29c]/20 transition"
                          title="Open Live Production App"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#03e29c] animate-pulse" />
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition border border-white/5"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#03e29c] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-black/30 border border-white/5">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="overflow-hidden">
                        <span className="text-[10px] text-neutral-500 font-mono block uppercase tracking-wider">{s.label}</span>
                        <span className="text-xs font-medium text-neutral-200 truncate block mt-0.5">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills (MK Vision style) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to view details */}
                <div className="pt-5 mt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#03e29c]/40 text-xs font-medium text-neutral-300 hover:text-white border border-white/10 transition duration-200"
                  >
                    <span className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#03e29c]" />
                      <span>Inspect Architecture & Technical Specs</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl my-auto max-h-[85vh] flex flex-col rounded-2xl bg-[#0d1118] border border-white/15 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121722]">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#03e29c]/15 text-[#03e29c] border border-[#03e29c]/30">
                  {selectedProject.badge}
                </span>
                <h3 className="text-base font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-300">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2">Overview</h4>
                <p className="leading-relaxed text-neutral-300">{selectedProject.longDescription}</p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2.5 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#03e29c]" /> Key Implementation Details
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#03e29c] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 text-neutral-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#121722] flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-950" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
