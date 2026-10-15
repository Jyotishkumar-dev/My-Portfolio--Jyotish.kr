import React from 'react';

export const AmbientMeshGradient: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Base rich deep dark background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />

      {/* Primary Hero Cinematic Mesh Glow (Fiery Orange to Warm Red / Magenta) */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] lg:w-[1150px] h-[550px] sm:h-[650px] lg:h-[750px] rounded-full opacity-60 filter blur-[90px] sm:blur-[120px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 45% 40%, rgba(255, 77, 0, 0.42) 0%, rgba(255, 85, 0, 0.28) 32%, rgba(225, 29, 72, 0.22) 58%, rgba(13, 13, 13, 0) 80%)',
        }}
      />

      {/* Secondary Floating Warm Red/Magenta & Orange Accent Orb (Right Hero / Floating Card) */}
      <div
        className="absolute top-[8%] right-[-10%] sm:right-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-45 filter blur-[80px] sm:blur-[110px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(225, 29, 72, 0.35) 0%, rgba(255, 77, 0, 0.22) 45%, rgba(13, 13, 13, 0) 75%)',
        }}
      />

      {/* Tertiary Warm Ember Core Glow (Deep Upper Left) */}
      <div
        className="absolute top-[20%] left-[-15%] sm:left-[-5%] w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full opacity-35 filter blur-[85px] sm:blur-[115px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.3) 0%, rgba(190, 24, 93, 0.16) 50%, rgba(13, 13, 13, 0) 80%)',
        }}
      />

      {/* Mid-Page Projects & Capabilities Cinematic Atmospheric Bloom */}
      <div
        className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1050px] h-[500px] rounded-full opacity-25 filter blur-[100px] sm:blur-[130px] animate-mesh-drift"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 77, 0, 0.22) 0%, rgba(225, 29, 72, 0.12) 50%, rgba(13, 13, 13, 0) 75%)',
        }}
      />

      {/* Lower Section (Contact & Finale) Ambient Warmth */}
      <div
        className="absolute bottom-[-10%] right-[10%] w-[650px] h-[500px] rounded-full opacity-30 filter blur-[90px] sm:blur-[120px] animate-mesh-pulse"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 85, 0, 0.25) 0%, rgba(217, 38, 98, 0.14) 45%, rgba(13, 13, 13, 0) 75%)',
        }}
      />

      {/* Subtle Studio Grid Overlay to catch the glow elegantly */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      {/* Subtle Vignette on edges to frame the canvas */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0D0D0D]/60 pointer-events-none" />
    </div>
  );
};
