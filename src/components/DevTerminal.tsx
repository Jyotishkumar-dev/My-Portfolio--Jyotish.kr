import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

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
        <div className="text-neutral-400 space-y-1">
          <p className="text-neutral-200 font-semibold font-mono">Jyotish Kumar — Developer CLI</p>
          <p className="text-xs">Type <span className="text-white font-mono font-semibold">help</span> to list available commands. Try <span className="text-neutral-300 font-mono">projects</span> or <span className="text-neutral-300 font-mono">about</span>.</p>
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

    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1.5 text-neutral-300">
            <p className="text-neutral-100 font-semibold">Commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs">
              <p><span className="text-white font-mono">about</span> — Bio & education background</p>
              <p><span className="text-white font-mono">skills</span> — Technical skills overview</p>
              <p><span className="text-white font-mono">projects</span> — Key project repositories</p>
              <p><span className="text-white font-mono">leadership</span> — Hackathons & leadership experience</p>
              <p><span className="text-white font-mono">leetcode</span> — DSA questions solved</p>
              <p><span className="text-white font-mono">contact</span> — Email, phone, location & profiles</p>
              <p><span className="text-white font-mono">resume</span> — Open candidate resume PDF</p>
              <p><span className="text-white font-mono">clear</span> — Clear terminal output</p>
              <p><span className="text-white font-mono">exit</span> — Close terminal</p>
            </div>
          </div>
        );
        break;

      case 'about':
        res = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-white font-semibold">Jyotish Kumar</p>
            <p>B.Tech Computer Science (CGPA: 7.8) — SAGE University, Indore</p>
            <p>Location: Indore, Madhya Pradesh, India</p>
            <p>Focus: Full-stack web development with React, Next.js, TypeScript, and Supabase.</p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-1 text-neutral-300">
            <p><span className="text-white font-medium">Languages:</span> Java, JavaScript, TypeScript, Python, C, C++</p>
            <p><span className="text-white font-medium">Frontend:</span> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Three.js</p>
            <p><span className="text-white font-medium">Backend:</span> Node.js, Express.js, REST APIs, Supabase Auth</p>
            <p><span className="text-white font-medium">Databases:</span> PostgreSQL, Drizzle ORM, MongoDB, SQL</p>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-1.5 text-neutral-300">
            <p>1. <span className="text-white font-medium">RESTOCK AI (DEAD-STOCK)</span>: Multimodal Gemini AI e-waste recovery platform (React 19, Express, Drizzle, Postgres) — <a href="https://dead-stock-eta.vercel.app" target="_blank" rel="noreferrer" className="text-[#00F0FF] underline">Live</a></p>
            <p>2. <span className="text-white font-medium">Campus Resolve</span>: Collegiate hostel & mess service management (Next.js 16, Supabase, Tailwind) — <a href="https://github.com/Jyotishkumar-dev/Hostel-Mess-Service-Management-Platform" target="_blank" rel="noreferrer" className="text-[#00F0FF] underline">GitHub</a></p>
            <p>3. <span className="text-white font-medium">SmartAttend</span>: Academic attendance system with 5-tier role-based access</p>
            <p>4. <span className="text-white font-medium">KrishiFleet AI</span>: Farm machinery recommendation and rental platform built during SQUidHACK 2026 (Tech Lead)</p>
          </div>
        );
        break;

      case 'leetcode':
        res = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-white font-medium">LeetCode Problem Solving:</p>
            <p>Solved <span className="text-[#00F0FF] font-semibold">55+</span> problems focusing on foundational DSA in Java & C++.</p>
            <p>Key topics: Arrays, Two Pointers, Sliding Window, Linked Lists, Binary Search, Trees.</p>
          </div>
        );
        break;

      case 'leadership':
        res = (
          <div className="space-y-1 text-neutral-300">
            <p>• <span className="text-white font-medium">Arkfest '26:</span> Graphic Designer & Organizing Committee Member</p>
            <p>• <span className="text-white font-medium">UDBHAV AI Sprint '26:</span> Graphic Designer & Organizing Committee Member</p>
            <p>• <span className="text-white font-medium">SQUidHACK 2026:</span> Technical Lead (Participant) — KrishiFleet AI</p>
            <p>• <span className="text-white font-medium">Techfest, IIT Bombay:</span> College Ambassador</p>
            <p>• <span className="text-white font-medium">Alta Social Media & Tech Club:</span> Core Member</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-neutral-300">
            <p>Email: <a href="mailto:jyotishkumarjhar@gmail.com" className="text-[#00F0FF] underline">jyotishkumarjhar@gmail.com</a></p>
            <p>Phone: +91-98354 02279</p>
            <p>Location: Indore, Madhya Pradesh, India</p>
            <p>GitHub: <a href="https://github.com/Jyotishkumar-dev" target="_blank" rel="noreferrer" className="text-[#00F0FF] underline">github.com/Jyotishkumar-dev</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/jyotish-kr-verma-0601bb387" target="_blank" rel="noreferrer" className="text-[#00F0FF] underline">linkedin.com/in/jyotish-kr-verma-0601bb387</a></p>
          </div>
        );
        break;

      case 'resume':
        window.open('/assets/Jyotish_Kumar_Resume.pdf', '_blank');
        res = <p className="text-neutral-300">Opening resume PDF in new tab...</p>;
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        res = (
          <p className="text-[#A3A3C2]">
            Command not found: <span className="font-mono text-white">{cmd}</span>. Type <span className="text-white font-mono">help</span> for assistance.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: res }]);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`w-full my-auto ${
          isMaximized ? 'h-[90vh] max-w-5xl' : 'max-w-2xl h-[440px]'
        } flex flex-col rounded-2xl border border-white/15 bg-[#0B0813] shadow-2xl overflow-hidden transition-all duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141024] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-700 cursor-pointer hover:bg-red-500" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-neutral-700 cursor-pointer hover:bg-yellow-500" onClick={() => setHistory([])} />
            <div className="w-3 h-3 rounded-full bg-neutral-700 cursor-pointer hover:bg-green-500" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="text-xs text-[#A3A3C2] ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
              jyotish@indore: ~
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#A3A3C2]">
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
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-neutral-200 space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-neutral-200">
                  <span className="text-neutral-500">jyotish@indore:~$</span>
                  <span className="font-semibold text-white">{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-[#0F0C1B] border-t border-white/10">
          <span className="text-[#00F0FF] font-mono text-xs pl-1">jyotish@indore:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder-neutral-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded text-[#00F0FF] hover:text-white transition"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
