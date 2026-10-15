import React from 'react';

export const AmbientMeshGradient: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Base Layer: Ultra-dark violet/black canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0813] via-[#0E0A1A] to-[#0F0C1B]" />

      {/* Primary Light Leak: Rich Violet/Purple Upper Mesh Glow */}
      <div
        className="absolute -top-[18%] left-1/2 -translate-x-1/2 w-[750px] sm:w-[1050px] lg:w-[1250px] h-[550px] sm:h-[680px] lg:h-[780px] rounded-full opacity-65 filter blur-[95px] sm:blur-[130px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 48% 40%, rgba(147, 51, 234, 0.42) 0%, rgba(126, 34, 206, 0.28) 35%, rgba(255, 46, 147, 0.2) 60%, rgba(11, 8, 19, 0) 80%)',
        }}
      />

      {/* Main Interaction Area Light Leak: Vibrant Glowing Cyan-Pink Ambient Aura (Hero Right Side) */}
      <div
        className="absolute top-[6%] right-[-10%] sm:right-[3%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full opacity-60 filter blur-[85px] sm:blur-[120px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.32) 0%, rgba(255, 46, 147, 0.28) 40%, rgba(147, 51, 234, 0.18) 65%, rgba(11, 8, 19, 0) 80%)',
        }}
      />

      {/* Subtle Floating Glassmorphic Frost Sphere reflecting pink and cyan glows */}
      <div
        className="hidden md:block absolute top-[14%] right-[4%] lg:right-[9%] w-44 h-44 lg:w-56 lg:h-56 rounded-full animate-sphere-float pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.22) 0%, rgba(0, 240, 255, 0.16) 30%, rgba(255, 46, 147, 0.14) 62%, rgba(15, 12, 28, 0.45) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow:
            'inset 0 0 25px rgba(255, 255, 255, 0.18), 0 20px 50px -10px rgba(0, 240, 255, 0.22), 0 0 35px rgba(255, 46, 147, 0.25)',
        }}
      >
        {/* Soft internal specular highlight */}
        <div className="absolute top-3 left-6 w-12 h-6 rounded-full bg-white/30 filter blur-[3px] transform -rotate-12" />
      </div>

      {/* Tertiary Deep Neon Pink Light Leak (Upper Left Ambient) */}
      <div
        className="absolute top-[22%] left-[-15%] sm:left-[-5%] w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] rounded-full opacity-40 filter blur-[90px] sm:blur-[120px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 46, 147, 0.28) 0%, rgba(147, 51, 234, 0.2) 48%, rgba(11, 8, 19, 0) 80%)',
        }}
      />

      {/* Mid-Page Projects & Capabilities Atmospheric Cyan & Purple Bloom */}
      <div
        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] rounded-full opacity-35 filter blur-[105px] sm:blur-[135px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.22) 0%, rgba(147, 51, 234, 0.18) 45%, rgba(255, 46, 147, 0.12) 65%, rgba(11, 8, 19, 0) 80%)',
        }}
      />

      {/* Lower Section (Contact & Finale) Ambient Cyberpunk Glow */}
      <div
        className="absolute bottom-[-10%] right-[8%] w-[680px] h-[520px] rounded-full opacity-40 filter blur-[95px] sm:blur-[125px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 46, 147, 0.28) 0%, rgba(0, 240, 255, 0.2) 45%, rgba(15, 12, 28, 0) 80%)',
        }}
      />

      {/* Subtle Studio Grid Overlay to catch the neon light leaks */}
      <div className="absolute inset-0 subtle-grid opacity-25 pointer-events-none" />

      {/* Smooth Vignette framing the dark canvas */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0B0813]/70 pointer-events-none" />
    </div>
  );
};
