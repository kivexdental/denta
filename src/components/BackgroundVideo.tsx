import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  isPlaying: boolean;
  isMuted: boolean;
  blurLevel: 'low' | 'medium' | 'high';
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  isPlaying,
  isMuted,
  blurLevel
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (videoRef.current) videoRef.current.pause();
      return;
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // Autoplay may need to start muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const blurClass = {
    low: 'backdrop-blur-[2px]',
    medium: 'backdrop-blur-[6px]',
    high: 'backdrop-blur-[12px]'
  }[blurLevel];

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {/* Background Video with Poster Fallback */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster="/explore/e3.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03] transition-all duration-700"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dynamic Glass Tint & Vignette Overlays */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${blurClass} bg-gradient-to-b from-slate-950/75 via-slate-950/45 to-slate-950/85`}
      />
      
      {/* Subtle Radial Vignette for focused contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.55)_100%)]" />

      {/* Decorative Apple ambient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
