import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, FileText, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { toggleSound, isSoundEnabled, playPopSound } from '../utils/audio';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playPopSound();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playPopSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:py-5 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Monogram / Brand */}
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, '#about')}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            JK
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Jyotish Kumar
            </span>
            <span className="text-[10px] text-slate-400 font-mono -mt-1 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-cyan-400" /> Indore, M.P.
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel border border-white/10 transition-all duration-300 ${
            isScrolled ? 'shadow-2xl shadow-cyan-950/20 bg-[#0b0e1a]/85' : 'bg-[#090b14]/60'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Toggle */}
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-full glass-panel border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white transition"
            title={soundOn ? 'Mute micro-audio' : 'Unmute micro-audio'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Dev Terminal Toggle */}
          <button
            onClick={() => {
              playPopSound();
              onOpenTerminal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/10 hover:border-purple-500/40 text-xs text-slate-300 hover:text-white transition group"
            title="Launch Terminal CLI (~)"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
            <span className="font-mono text-[11px]">CLI</span>
          </button>

          {/* Resume Download / View */}
          <button
            onClick={() => {
              playPopSound();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-medium text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <Sparkles className="w-3 h-3 text-cyan-200" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playPopSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto glass-panel border border-white/15 rounded-2xl p-4 shadow-2xl pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  playPopSound();
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center gap-2 text-xs font-mono text-purple-400 py-1.5"
              >
                <Terminal className="w-4 h-4" /> Launch Dev CLI
              </button>
              <span className="text-[11px] text-slate-400 font-mono">Indore, M.P.</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
