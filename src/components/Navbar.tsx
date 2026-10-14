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
        {/* Brand */}
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, '#about')}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#11131a]/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          <div className="w-6 h-6 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
            JK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-semibold text-xs text-neutral-100">
              Jyotish Kumar
            </span>
            <span className="text-[10px] text-neutral-400 font-mono -mt-0.5 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-neutral-400" /> Indore, M.P.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            isScrolled
              ? 'bg-[#11131a]/90 backdrop-blur-md border-white/15 shadow-lg shadow-black/40'
              : 'bg-[#11131a]/60 backdrop-blur-md border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1 text-xs text-neutral-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
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
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#11131a]/80 backdrop-blur-md border border-white/10 hover:border-white/20 text-neutral-400 hover:text-neutral-200 text-xs font-mono transition"
            title="Open Developer Terminal (~)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px]">CLI</span>
          </button>

          {/* Clean Resume Link */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-neutral-950 font-medium text-xs hover:bg-neutral-200 transition shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-700" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#11131a]/80 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#11131a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl pointer-events-auto">
          <div className="flex flex-col gap-1 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition"
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
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 py-1"
              >
                <Terminal className="w-3.5 h-3.5" /> Dev Terminal
              </button>
              <span className="text-xs text-neutral-400 font-mono">Indore, M.P.</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
