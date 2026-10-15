import React from 'react';
import { Award, Palette, Users, Calendar, CheckCircle2, Flag } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
  tags: string[];
  icon: React.ReactNode;
}

export const HackathonsLeadership: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Arkfest '26",
      organization: 'Annual College Cultural & Tech Festival',
      role: 'Graphic Designer & Organizing Committee Member',
      period: '2026',
      type: 'Design & Organizing',
      icon: <Palette className="w-4 h-4 text-neutral-300" />,
      highlights: [
        'Created official visual identity, event posters, stage graphics, and promotional flyers for Arkfest \'26.',
        'Served as an active organizing committee member managing on-ground event operations and logistics.',
        'Designed social media campaigns that drove campus awareness and student registrations.',
      ],
      tags: ['Graphic Design', 'Organizing Committee', 'Brand Identity', 'Event Logistics'],
    },
    {
      title: "UDBHAV AI Sprint '26",
      organization: '24-Hour AI Innovation Sprint',
      role: 'Graphic Designer & Organizing Committee Member',
      period: 'Apr 2026',
      type: 'Hackathon Organizing',
      icon: <Users className="w-4 h-4 text-neutral-300" />,
      highlights: [
        'Designed hackathon visual collateral, promotional banners, participant badges, and digital sprint assets.',
        'Contributed as an organizing committee member overseeing sprint schedules and team coordination.',
        'Collaborated with student developers and mentors in an intensive 24-hour sprint environment.',
      ],
      tags: ['Graphic Design', 'AI Sprint Collateral', 'Organizing Committee', 'Event Coordination'],
    },
    {
      title: 'SQUidHACK 2026',
      organization: '24-Hour Hackathon',
      role: 'Technical Lead (Participant)',
      period: 'Aug 2026',
      type: 'Hackathon Participation',
      icon: <Award className="w-4 h-4 text-neutral-300" />,
      highlights: [
        'Participated as Technical Lead, leading the technical development of KrishiFleet AI during the 24-hour hackathon.',
        'Contributed directly to technical architecture, debugging, feature integration, and working prototype delivery.',
        'Coordinated team git branching and prepared the live technical demonstration for the evaluation panel.',
      ],
      tags: ['Technical Lead', 'KrishiFleet AI', '24-Hour Hackathon', 'Full-Stack Development'],
    },
    {
      title: 'Techfest, IIT Bombay',
      organization: 'Asia’s Largest Science & Technology Festival',
      role: 'College Ambassador',
      period: '2026 – Present',
      type: 'Campus Leadership',
      icon: <Flag className="w-4 h-4 text-neutral-300" />,
      highlights: [
        'Representing Techfest, IIT Bombay at the college level, coordinating student outreach and event awareness.',
        'Supporting the coordination of a planned robotics workshop on campus under the Ambassador program.',
        'Engaging campus peers with national-level engineering competitions and workshops.',
      ],
      tags: ['IIT Bombay', 'Student Outreach', 'Robotics Workshop', 'Ambassador'],
    },
    {
      title: 'Social Media & Tech Club',
      organization: 'Alta School of Technology, SAGE University',
      role: 'Core Member',
      period: 'Aug 2026 – Present',
      type: 'Community Leadership',
      icon: <Users className="w-4 h-4 text-neutral-300" />,
      highlights: [
        'Contribute to technical and community activities, peer coding meetups, and developer workshops.',
        'Design visual announcements and technical roadmaps for student cohort learning.',
        'Collaborate with faculty and student leads to organize hackathon preparation sessions.',
      ],
      tags: ['Core Member', 'Technical Community', 'Peer Mentorship', 'Alta School of Tech'],
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-left space-y-2 border-b border-white/10 pb-6 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3C2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
            <span>[ 04 / INITIATIVES & LEADERSHIP ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
            Leadership & <span className="font-editorial text-white font-normal underline decoration-[#00F0FF]/40 decoration-1 underline-offset-4">Initiatives</span>
          </h2>
          <p className="text-[#A3A3C2] text-xs sm:text-sm max-w-lg">
            Engineering leadership in 24-hour hackathons, brand identity for flagship collegiate fests, and campus community coordination.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => {
            const expNumber = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className="studio-card rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-300 reveal-on-scroll"
              >
                <div className="space-y-4">
                  {/* Top strip */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[#A3A3C2] font-semibold text-[11px]">
                        [{expNumber}]
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FF2E93]/10 border border-[#FF2E93]/30 text-[#FF2E93] text-[10px] font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-[#A3A3C2] flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-[#A3A3C2]" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-medium text-[#00F0FF] mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-[11px] text-[#A3A3C2] font-mono mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Bullet highlights */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#A3A3C2] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.04] text-[#A3A3C2] border border-white/10 hover:border-[#FF2E93]/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
