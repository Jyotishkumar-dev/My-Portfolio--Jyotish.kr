import { useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { HackathonsLeadership } from './components/HackathonsLeadership';
import { AchievementsEducation } from './components/AchievementsEducation';
import { ContactSupabase } from './components/ContactSupabase';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DevTerminal } from './components/DevTerminal';
import { StudioCursor } from './components/StudioCursor';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Initialize Locomotive Scroll v5
  useEffect(() => {
    let scrollInstance: unknown;
    try {
      scrollInstance = new LocomotiveScroll();
    } catch (err) {
      console.warn('Locomotive Scroll init notice:', err);
    }

    // GSAP entrance reveal
    gsap.fromTo(
      '#main-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    return () => {
      if (scrollInstance && typeof (scrollInstance as { destroy?: () => void }).destroy === 'function') {
        (scrollInstance as { destroy: () => void }).destroy();
      }
    };
  }, []);

  // Global Keyboard Shortcuts ('~' or '`' to toggle Terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen text-neutral-100 bg-[#080b0f] overflow-x-hidden selection:bg-[#03e29c]/25 selection:text-[#03e29c]">
      {/* Studio Interactive Desktop Cursor */}
      <StudioCursor />

      {/* Subtle Three.js Ambient Canvas */}
      <ThreeCanvas />

      {/* Subtle Grid Background */}
      <div className="fixed inset-0 subtle-grid opacity-30 pointer-events-none z-0" />

      {/* Main Content Wrap */}
      <div id="main-content" className="relative z-10 flex flex-col">
        {/* Navigation */}
        <Navbar
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Main Sections */}
        <main className="flex-1">
          <Hero
            onOpenResume={() => setIsResumeModalOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
          <Projects />
          <Skills />
          <HackathonsLeadership />
          <AchievementsEducation />
          <ContactSupabase />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <DevTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
