import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles, CheckCircle2, ChevronRight, X, Cpu, Database, ShieldCheck } from 'lucide-react';
import { playPopSound } from '../utils/audio';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Intelligence' | 'Campus Systems';
  description: string;
  longDescription: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  stats: { label: string; value: string }[];
  gradient: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'AI & Intelligence' | 'Campus Systems'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'restock-ai',
      title: 'RESTOCK AI (DEAD-STOCK)',
      subtitle: 'Intelligent Resource Recovery & E-Waste Reuse Platform',
      category: 'AI & Intelligence',
      badge: 'Featured • Gemini AI',
      gradient: 'from-cyan-500/20 to-blue-600/10',
      description:
        'AI-driven e-waste recovery platform connecting industrial enterprises with certified recycling hubs using multimodal Gemini intelligence.',
      longDescription:
        'RESTOCK AI solves the industrial electronic waste crisis by replacing opaque disposal brokers with an AI-verified circular resource marketplace. Enterprises upload images and manifests of obsolete electronic inventory; the Gemini multimodal model calculates precious metal yield and component viability, automatically generating pickup orders for accredited recyclers.',
      architectureDetails: [
        'Google Gemini 2.0 Flash integration (@google/genai) for real-time visual hardware identification and toxicity classification.',
        'High-performance Express.js API coupled with Drizzle ORM and PostgreSQL for atomic transaction safety.',
        'Modern client built with React 19, TypeScript, Tailwind CSS v4, and Motion for fluid micro-interactions.',
        'Verified end-to-end chain of custody with tamper-evident digital consignment certificates.',
      ],
      techStack: ['React 19', 'TypeScript', 'Google Gemini AI', 'Express.js', 'Drizzle ORM', 'PostgreSQL', 'Tailwind CSS v4'],
      githubUrl: 'https://github.com/Jyotishkumar-dev/DEAD-STOCK-',
      liveUrl: 'https://dead-stock-eta.vercel.app',
      stats: [
        { label: 'AI Model', value: 'Gemini 2.0 Flash' },
        { label: 'Database', value: 'PostgreSQL + Drizzle' },
        { label: 'Deployment', value: 'Vercel + Cloud' },
      ],
    },
    {
      id: 'campus-resolve',
      title: 'Campus Resolve (Hostel & Mess)',
      subtitle: 'Collegiate Grievance-to-Fix & Facility Operations Engine',
      category: 'Campus Systems',
      badge: 'Next.js 16 + Supabase',
      gradient: 'from-purple-500/20 to-indigo-600/10',
      description:
        'Multi-role collegiate workflow engine that bridges student residential & food service feedback directly into actionable warden tasks.',
      longDescription:
        'Campus Resolve ("From Feedback to Fix") replaces informal notice boards with an enterprise resolution platform. Students submit geotagged issues regarding hostel amenities or mess catering; wardens and catering contractors receive real-time ticket escalations with built-in SLA timers and satisfaction metrics.',
      architectureDetails: [
        'Built with Next.js 16 App Router, Turbopack, and TypeScript in strict type mode.',
        'Supabase backend leveraging PostgreSQL, Row Level Security (RLS), Supabase Auth, and real-time event triggers.',
        'Robust form verification using Zod schemas alongside React Hook Form.',
        'Data visualization via Recharts for mess hygiene ratings, meal attendance trends, and maintenance turnaround time.',
      ],
      techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'PostgreSQL', 'Zod', 'Recharts', 'shadcn/ui'],
      githubUrl: 'https://github.com/Jyotishkumar-dev/Hostel-Mess-Service-Management-Platform',
      stats: [
        { label: 'Framework', value: 'Next.js 16 (App Router)' },
        { label: 'Backend/DB', value: 'Supabase + Postgres' },
        { label: 'Security', value: 'Supabase RLS Auth' },
      ],
    },
    {
      id: 'smart-attend',
      title: 'SmartAttend',
      subtitle: 'Full-Stack Role-Based Academic Attendance & Analytics System',
      category: 'Full-Stack',
      badge: 'RBAC • Drizzle ORM',
      gradient: 'from-emerald-500/20 to-teal-600/10',
      description:
        'Comprehensive role-based attendance management system serving Students, Faculty, HOD, Admin, and Super Admin with JWT auth.',
      longDescription:
        'SmartAttend automates collegiate attendance tracking with rigorous security and analytics. It provides role-specific dashboards allowing professors to take instant biometric or roster attendance, while department heads analyze absentee rates through predictive reporting.',
      architectureDetails: [
        '5-Tier Role-Based Access Control (RBAC): Student, Faculty, HOD, Admin, and Super Admin.',
        'Cryptographic JWT authentication paired with secure HTTP-only refresh tokens and bcrypt password hashing.',
        'Full CRUD operations for course syllabus, section allotments, student profiles, and semester records.',
        'PostgreSQL database modeled through Drizzle ORM for type-safe schema migrations.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'JWT Auth', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Jyotishkumar-dev',
      stats: [
        { label: 'Authorization', value: '5-Tier RBAC' },
        { label: 'Tokens', value: 'JWT + Refresh' },
        { label: 'ORM', value: 'Drizzle' },
      ],
    },
    {
      id: 'krishifleet-ai',
      title: 'KrishiFleet AI',
      subtitle: 'Smart Farm Equipment & CHC Operations Platform',
      category: 'AI & Intelligence',
      badge: 'SQUidHACK 2026 Winner',
      gradient: 'from-amber-500/20 to-yellow-600/10',
      description:
        'Award-winning platform connecting farmers and Custom Hiring Centre operators with an explainable machinery recommendation engine.',
      longDescription:
        'Engineered in a 24-hour hackathon where Jyotish served as Technical Lead. KrishiFleet AI optimizes agrarian equipment rental by recommending the optimal tractor, tiller, or drone based on acreage, soil profile, crop maturity, rental rates, and travel distance.',
      architectureDetails: [
        'Multi-factor explainable recommendation algorithm factoring in distance, soil type, plot dimensions, and pricing.',
        'Booking state machines with fleet availability calendars and preventative maintenance reminders.',
        'Built with Next.js, React Hook Form, Zod validation, and interactive Recharts telemetry.',
        'Designed for low-bandwidth rural connectivity with snappy client caching.',
      ],
      techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Recharts'],
      githubUrl: 'https://github.com/Jyotishkumar-dev',
      stats: [
        { label: 'Hackathon', value: 'SQUidHACK Lead' },
        { label: 'Algorithm', value: 'Explainable AI Engine' },
        { label: 'Architecture', value: 'Next.js Full-Stack' },
      ],
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-cyan-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Architected & Built</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Production-grade web apps, AI systems, and cloud platforms built with modern TypeScript, Supabase, Next.js, and Google Gemini.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl glass-panel border border-white/10 self-start md:self-auto">
            {(['All', 'AI & Intelligence', 'Campus Systems', 'Full-Stack'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playPopSound();
                  setActiveFilter(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-card overflow-hidden p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 text-left"
            >
              {/* Top Row: Badge & External Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium glass-badge text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {project.badge}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playPopSound();
                        }}
                        className="p-2 rounded-lg glass-panel hover:text-cyan-400 hover:border-cyan-500/40 transition text-slate-300"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playPopSound();
                      }}
                      className="p-2 rounded-lg glass-panel hover:text-purple-400 hover:border-purple-500/40 transition text-slate-300"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5">
                  {project.stats.map((s, idx) => (
                    <div key={idx} className="text-left">
                      <span className="text-[10px] text-slate-500 font-mono block">{s.label}</span>
                      <span className="text-xs font-semibold text-slate-200 truncate block">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to Open Architecture Drawer */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    playPopSound();
                    setSelectedProject(project);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl glass-panel hover:bg-white/10 text-xs font-semibold text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    View System Architecture & Deep Dive
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-[#090b14] border border-cyan-500/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-left">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0e1220] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  {selectedProject.badge}
                </span>
                <h3 className="text-lg font-bold text-white font-heading">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-mono mb-2">Overview</h4>
                <p className="leading-relaxed text-slate-300">{selectedProject.longDescription}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-purple-400 font-mono mb-3 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> Architectural Pillars & Engineering Decisions
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-3.5 bg-[#0e1220] border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300"
              >
                <Github className="w-4 h-4" />
                View Code on GitHub
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 hover:brightness-110"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
