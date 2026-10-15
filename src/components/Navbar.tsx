import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Studio Mark */}
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, '#about')}
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0B0D1B]/75 backdrop-blur-[20px] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-sm"
        >
          <div className="w-6 h-6 rounded-lg bg-[#0F172A]/80 border border-white/10 group-hover:border-[#8B5CF6]/50 flex items-center justify-center font-mono font-bold text-xs text-white transition-colors">
            JK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-semibold text-xs text-white flex items-center gap-1.5">
              Jyotish Kumar
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse shadow-[0_0_8px_#8B5CF6]" />
            </span>
            <span className="text-[10px] text-[#94A3B8] font-mono -mt-0.5 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-[#8B5CF6]" /> Indore, M.P.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0B0D1B]/90 backdrop-blur-[20px] border-[#8B5CF6]/30 shadow-xl shadow-black/60'
              : 'bg-[#0B0D1B]/60 backdrop-blur-[20px] border-white/[0.08]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1 text-xs text-[#94A3B8] hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Subtle Dev CLI button */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0F172A]/70 backdrop-blur-[16px] border border-white/[0.08] hover:border-[#8B5CF6]/40 text-[#94A3B8] hover:text-white text-xs font-mono transition"
            title="Open Developer Terminal (~)"
          >
            <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span className="text-[11px]">CLI</span>
          </button>

          {/* Clean Glowing Action Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn-purple-blue group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-white font-semibold text-xs shadow-md transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Resume</span>
            <span className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[10px]">↗</span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0B0D1B]/75 backdrop-blur-[20px] border border-white/[0.08] text-[#94A3B8] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#0B0D1B]/95 backdrop-blur-[20px] border border-white/[0.08] rounded-2xl p-4 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-1 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-white py-1"
              >
                <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" /> Dev Terminal
              </button>
              <span className="text-xs text-[#94A3B8] font-mono">Indore, M.P.</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
