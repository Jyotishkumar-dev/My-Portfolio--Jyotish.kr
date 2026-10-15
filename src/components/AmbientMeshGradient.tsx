import React from 'react';

export const AmbientMeshGradient: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Base Layer: Dark, rich midnight blue/indigo canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D1B] via-[#090C18] to-[#080A14]" />

      {/* Primary Ambient Orb: Large, soft violet & deep royal blue glow behind Hero */}
      <div
        className="absolute -top-[16%] left-1/2 -translate-x-1/2 w-[750px] sm:w-[1050px] lg:w-[1250px] h-[550px] sm:h-[680px] lg:h-[780px] rounded-full opacity-65 filter blur-[110px] sm:blur-[140px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 38%, rgba(139, 92, 246, 0.32) 0%, rgba(59, 130, 246, 0.22) 42%, rgba(37, 99, 235, 0.1) 62%, rgba(11, 13, 27, 0) 80%)',
        }}
      />

      {/* Secondary Ambient Orb: Royal blue & violet glow behind Hero interaction area */}
      <div
        className="absolute top-[6%] right-[-10%] sm:right-[3%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full opacity-60 filter blur-[95px] sm:blur-[130px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.28) 0%, rgba(139, 92, 246, 0.24) 45%, rgba(11, 13, 27, 0) 75%)',
        }}
      />

      {/* Subtle Floating Glassmorphic Frost Sphere reflecting indigo, royal blue and purple glows */}
      <div
        className="hidden md:block absolute top-[14%] right-[4%] lg:right-[9%] w-44 h-44 lg:w-56 lg:h-56 rounded-full animate-sphere-float pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(59, 130, 246, 0.15) 32%, rgba(139, 92, 246, 0.12) 65%, rgba(15, 23, 42, 0.45) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow:
            'inset 0 0 25px rgba(255, 255, 255, 0.15), 0 20px 50px -10px rgba(59, 130, 246, 0.2), 0 0 30px rgba(139, 92, 246, 0.2)',
        }}
      >
        {/* Soft internal specular highlight */}
        <div className="absolute top-3 left-6 w-12 h-6 rounded-full bg-white/25 filter blur-[3px] transform -rotate-12" />
      </div>

      {/* Tertiary Soft Deep Royal Blue Orb (Upper Left Ambient) */}
      <div
        className="absolute top-[20%] left-[-15%] sm:left-[-5%] w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] rounded-full opacity-40 filter blur-[95px] sm:blur-[130px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.25) 0%, rgba(139, 92, 246, 0.18) 48%, rgba(11, 13, 27, 0) 80%)',
        }}
      />

      {/* Projects Section Ambient Orb: Deep Royal Blue & Violet */}
      <div
        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] rounded-full opacity-35 filter blur-[110px] sm:blur-[140px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25) 0%, rgba(37, 99, 235, 0.18) 45%, rgba(11, 13, 27, 0) 75%)',
        }}
      />

      {/* Lower Section (Contact & Finale) Ambient Glow */}
      <div
        className="absolute bottom-[-10%] right-[8%] w-[680px] h-[520px] rounded-full opacity-40 filter blur-[95px] sm:blur-[130px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.22) 0%, rgba(139, 92, 246, 0.18) 45%, rgba(8, 10, 20, 0) 75%)',
        }}
      />

      {/* Subtle Grid Overlay to catch the ambient depth */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      {/* Smooth Vignette framing the dark canvas */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080A14]/75 pointer-events-none" />
    </div>
  );
};
