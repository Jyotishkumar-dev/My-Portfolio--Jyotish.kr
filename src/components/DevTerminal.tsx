import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playPopSound, playSuccessSound } from '../utils/audio';

interface DevTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevTerminal: React.FC<DevTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<Array<{ command?: string; output: React.ReactNode }>>([
    {
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-cyan-400 font-semibold">⚡ JYOTISH KUMAR OS [v2.6.4 - Creative Full-Stack CLI]</p>
          <p>Type <span className="text-yellow-400 font-mono">help</span> to list available commands. Try <span className="text-pink-400 font-mono">sudo hire</span> or <span className="text-emerald-400 font-mono">projects</span>.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    playPopSound();
    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-semibold">Available Terminal Commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs">
              <p><span className="text-yellow-400 font-mono">about</span> - Brief biography & education</p>
              <p><span className="text-yellow-400 font-mono">skills</span> - Technical skills overview</p>
              <p><span className="text-yellow-400 font-mono">projects</span> - 4 Full-stack projects with URLs</p>
              <p><span className="text-yellow-400 font-mono">leadership</span> - Hackathons & graphic design roles</p>
              <p><span className="text-yellow-400 font-mono">leetcode</span> - Solved DSA problem count</p>
              <p><span className="text-yellow-400 font-mono">contact</span> - Email, phone, location & links</p>
              <p><span className="text-yellow-400 font-mono">resume</span> - Download candidate resume PDF</p>
              <p><span className="text-yellow-400 font-mono">sudo hire</span> - Direct offer trigger (Secret)</p>
              <p><span className="text-yellow-400 font-mono">clear</span> - Flush terminal buffer</p>
            </div>
          </div>
        );
        break;

      case 'about':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-semibold">Jyotish Kumar</p>
            <p>🎓 B.Tech CSE (CGPA 7.8) — SAGE University, Indore (Alta School of Technology)</p>
            <p>📍 Location: Indore, Madhya Pradesh, India</p>
            <p>💡 Passion: Building highly aesthetic, scalable full-stack web apps and AI systems.</p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-semibold">Frontend:</span> React.js, Next.js, TypeScript, Tailwind CSS, Three.js, GSAP</p>
            <p><span className="text-purple-400 font-semibold">Backend:</span> Node.js, Express.js, REST APIs, Supabase Auth & DB</p>
            <p><span className="text-emerald-400 font-semibold">Databases:</span> PostgreSQL, MongoDB, Drizzle ORM, Prisma, SQL</p>
            <p><span className="text-amber-400 font-semibold">Languages:</span> Java, JavaScript, TypeScript, Python, C, C++</p>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-2 text-slate-300">
            <p>1. <span className="text-cyan-400 font-semibold">RESTOCK AI (DEAD-STOCK)</span>: Gemini AI e-waste recovery platform (React 19 + Express + Drizzle) - <a href="https://dead-stock-eta.vercel.app" target="_blank" rel="noreferrer" className="text-blue-400 underline">Live Demo</a></p>
            <p>2. <span className="text-purple-400 font-semibold">Campus Resolve</span>: Hostel & Mess Service Management Platform (Next.js 16 + Supabase + Tailwind v4) - <a href="https://github.com/Jyotishkumar-dev/Hostel-Mess-Service-Management-Platform" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub</a></p>
            <p>3. <span className="text-emerald-400 font-semibold">SmartAttend</span>: Role-based attendance with JWT auth & analytics</p>
            <p>4. <span className="text-amber-400 font-semibold">KrishiFleet AI</span>: Smart Farm Equipment & CHC Operations Platform (SQUidHACK 2026 Winner)</p>
          </div>
        );
        break;

      case 'leetcode':
        res = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-semibold">LeetCode Metrics:</p>
            <p>🔥 Solved <span className="text-emerald-400 font-bold">55+</span> problems in Java & C++ focusing on core DSA.</p>
            <p>Key categories: Binary Search, Two Pointers, Trees, Hash Maps, Linked Lists.</p>
          </div>
        );
        break;

      case 'leadership':
        res = (
          <div className="space-y-1 text-slate-300">
            <p>🎨 <span className="text-pink-400 font-semibold">Arkfest '26:</span> Graphic Designer & Organizing Committee Member</p>
            <p>🤖 <span className="text-cyan-400 font-semibold">UDBHAV AI Sprint '26:</span> Graphic Designer & Organizing Committee Member</p>
            <p>🏆 <span className="text-yellow-400 font-semibold">SQUidHACK 2026:</span> Technical Lead (Aug 2026)</p>
            <p>🚀 <span className="text-purple-400 font-semibold">Techfest IIT Bombay:</span> College Ambassador (2026 – Present)</p>
            <p>🌐 <span className="text-emerald-400 font-semibold">Alta Tech Club:</span> Core Member (Aug 2026 – Present)</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-slate-300">
            <p>📧 Email: <a href="mailto:jyotishkumarjhar@gmail.com" className="text-cyan-400 underline">jyotishkumarjhar@gmail.com</a></p>
            <p>📞 Phone: +91-98354 02279</p>
            <p>📍 Location: Indore, Madhya Pradesh, India</p>
            <p>💼 LinkedIn: <a href="https://linkedin.com/in/jyotish-kr-verma-0601bb387" target="_blank" rel="noreferrer" className="text-blue-400 underline">jyotish-kr-verma-0601bb387</a></p>
            <p>🐙 GitHub: <a href="https://github.com/Jyotishkumar-dev" target="_blank" rel="noreferrer" className="text-purple-400 underline">Jyotishkumar-dev</a></p>
          </div>
        );
        break;

      case 'resume':
        window.open('/assets/Jyotish_Kumar_Resume.pdf', '_blank');
        playSuccessSound();
        res = <p className="text-emerald-400">Opening resume PDF in new tab...</p>;
        break;

      case 'sudo hire':
      case 'hire':
        playSuccessSound();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#a855f7', '#ec4899', '#10b981'],
        });
        res = (
          <div className="p-3 bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-500/50 rounded-lg text-slate-200">
            <p className="text-cyan-300 font-bold text-sm">🎉 ACCESS GRANTED: CANDIDATE ENGAGEMENT INITIATED!</p>
            <p className="text-xs mt-1">Thank you for considering Jyotish Kumar for your software engineering internship or role. Reach out directly at <span className="text-yellow-300 font-mono">jyotishkumarjhar@gmail.com</span>.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        res = (
          <p className="text-red-400">
            Command not recognized: <span className="font-mono text-white">{cmd}</span>. Type <span className="text-yellow-400 font-mono">help</span> for assistance.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: res }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`w-full my-auto ${
          isMaximized ? 'h-[92vh] max-w-6xl' : 'max-w-2xl h-[480px]'
        } flex flex-col rounded-xl border border-cyan-500/30 bg-[#090b14] shadow-2xl overflow-hidden transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1322] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setHistory([])} />
            <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              jyotish@indore-terminal: ~
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white transition"
              title="Toggle Size"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white transition"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-slate-200 space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-emerald-400">jyotish@indore:~$</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-[#0d101d] border-t border-white/10">
          <span className="text-emerald-400 font-mono text-xs pl-1">jyotish@indore:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
