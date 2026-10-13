import React from 'react';
import { Award, Palette, Users, Trophy, Flag, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  role: string;
  period: string;
  type: 'Hackathon' | 'Design & Leadership' | 'Campus Ambassador';
  highlights: string[];
  tags: string[];
  badgeColor: string;
  icon: React.ReactNode;
}

export const HackathonsLeadership: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Arkfest '26",
      organization: 'Annual Flagship Cultural & Tech Festival',
      role: 'Graphic Designer & Organizing Committee Member',
      period: '2026',
      type: 'Design & Leadership',
      badgeColor: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      highlights: [
        'Created high-impact visual identity, branding guidelines, stage backdrops, and promotional digital collateral for Arkfest \'26.',
        'Collaborated directly as an active organizing committee member managing event operations, on-ground logistics, and visual communication.',
        'Designed motion flyers and social media campaigns that expanded campus outreach and event engagement.',
      ],
      tags: ['Graphic Design', 'Brand Identity', 'Organizing Committee', 'Visual Arts'],
    },
    {
      title: "UDBHAV AI Sprint '26",
      organization: '24-Hour AI Innovation Sprint & Hackathon',
      role: 'Graphic Designer & Organizing Committee Member',
      period: 'Apr 2026',
      type: 'Design & Leadership',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      highlights: [
        'Spearheaded the visual brand aesthetic, hacker badges, presentation templates, and digital banners for UDBHAV AI Sprint \'26.',
        'Served as an organizing committee member overseeing sprint schedules, team registrations, and sponsor visual showcases.',
        'Delivered complete design assets across high-pressure 24-hour sprint timelines.',
      ],
      tags: ['Hackathon Branding', 'AI Sprint Collateral', 'Organizing Committee', 'Fast-Paced Delivery'],
    },
    {
      title: 'SQUidHACK 2026',
      organization: 'National 24-Hour Hackathon',
      role: 'Technical Lead',
      period: 'Aug 2026',
      type: 'Hackathon',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      highlights: [
        'Led the full technical development and architecture of KrishiFleet AI under an intensive 24-hour hackathon environment.',
        'Architected end-to-end full-stack prototype, managed repository branching, and resolved critical production blockers.',
        'Delivered the final winning presentation and interactive live demo to the judging panel.',
      ],
      tags: ['Technical Lead', 'KrishiFleet AI', '24-Hour Hackathon', 'System Architecture'],
    },
    {
      title: 'Techfest, IIT Bombay',
      organization: 'Asia’s Largest Science & Technology Festival',
      role: 'College Ambassador',
      period: '2026 – Present',
      type: 'Campus Ambassador',
      badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      icon: <Flag className="w-5 h-5 text-purple-400" />,
      highlights: [
        'Selected to represent Techfest, IIT Bombay at the college level, orchestrating university-wide outreach and event awareness.',
        'Currently supporting the coordination and logistics of a planned collegiate robotics workshop under the Ambassador initiative.',
        'Bridging national technical competitions with regional student developer communities.',
      ],
      tags: ['IIT Bombay', 'Leadership', 'Robotics Workshop', 'Community Outreach'],
    },
    {
      title: 'Social Media & Tech Club, Alta School of Technology',
      organization: 'SAGE University, Indore',
      role: 'Core Member',
      period: 'Aug 2026 – Present',
      type: 'Design & Leadership',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      highlights: [
        'Actively drive technical workshops, hackathon preparation groups, and campus developer meetups.',
        'Produce engaging technical graphics, developer roadmaps, and community announcements for student peers.',
        'Foster collaborative coding culture across juniors and departmental cohorts.',
      ],
      tags: ['Core Member', 'Alta School of Technology', 'Developer Community', 'Peer Mentoring'],
    },
  ];

  return (
    <section id="leadership" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-yellow-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Impact & Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Hackathons & <span className="text-gradient-gold">Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Driving technical solutions under hackathon pressure, crafting brand design identities, and spearheading university developer communities.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-card p-6 border border-white/10 hover:border-amber-400/40 flex flex-col justify-between text-left group transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Strip */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${exp.badgeColor}`}>
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Title */}
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {exp.role}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-white/5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
