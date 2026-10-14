import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, ChevronRight, X, Cpu, Database } from 'lucide-react';
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 text-left">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
              <Layers className="w-3.5 h-3.5 text-neutral-400" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
              Featured Projects
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg">
              Full-stack applications and AI solutions built with modern TypeScript, Supabase, Next.js, and Express.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 self-start md:self-auto bg-[#11131a] p-1 rounded-xl border border-white/5">
            {(['All', 'Full-Stack', 'AI & Machine Learning', 'Campus Systems'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  activeFilter === cat
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="dev-card rounded-2xl p-6 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-neutral-300 bg-white/5 border border-white/10">
                    {project.badge}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
                        title="Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
                      title="GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    {project.subtitle}
                  </p>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-white/5">
                  {project.stats.map((s, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] text-neutral-500 font-mono block">{s.label}</span>
                      <span className="text-xs font-medium text-neutral-200 truncate block">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-neutral-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to view details */}
              <div className="pt-5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 hover:text-white border border-white/5 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                    Architecture & Implementation Details
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl my-auto max-h-[85vh] flex flex-col rounded-2xl bg-[#0f1118] border border-white/15 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141721]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-neutral-300">
                  {selectedProject.badge}
                </span>
                <h3 className="text-base font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm text-neutral-300">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">Overview</h4>
                <p className="leading-relaxed text-neutral-300">{selectedProject.longDescription}</p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-neutral-400" /> Key Implementation Details
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
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
                      className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-[#141721] flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Repository
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
