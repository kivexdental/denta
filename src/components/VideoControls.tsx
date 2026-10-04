import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean | ((prev: boolean) => boolean)) => void;
  isMuted: boolean;
  setIsMuted: (val: boolean | ((prev: boolean) => boolean)) => void;
  blurLevel: 'low' | 'medium' | 'high';
  setBlurLevel: (val: 'low' | 'medium' | 'high') => void;
}

export const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
  blurLevel,
  setBlurLevel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cycleBlur = () => {
    if (blurLevel === 'low') setBlurLevel('medium');
    else if (blurLevel === 'medium') setBlurLevel('high');
    else setBlurLevel('low');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Expanded Controls Tray */}
      {isOpen && (
        <div className="glass-panel px-3 py-2 rounded-full flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-300 shadow-2xl border border-white/20">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(prev => !prev)}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="p-2 rounded-full hover:bg-white/15 text-slate-200 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title={isPlaying ? 'Pause Background' : 'Play Background'}
          >
            {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
            <span className="hidden sm:inline font-medium">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <div className="w-[1px] h-4 bg-white/20" />

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(prev => !prev)}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            className="p-2 rounded-full hover:bg-white/15 text-slate-200 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title={isMuted ? 'Ambient Audio Off' : 'Ambient Audio On'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            <span className="hidden sm:inline font-medium">{isMuted ? 'Muted' : 'Audio On'}</span>
          </button>

          <div className="w-[1px] h-4 bg-white/20" />

          {/* Blur Toggle */}
          <button
            onClick={cycleBlur}
            aria-label="Cycle glass backdrop blur"
            className="p-2 rounded-full hover:bg-white/15 text-slate-200 hover:text-white transition-all text-xs flex items-center gap-1.5"
            title={`Glass Depth: ${blurLevel.toUpperCase()}`}
          >
            <Eye className="w-4 h-4 text-sky-400" />
            <span className="font-medium capitalize text-[11px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-200">
              {blurLevel} blur
            </span>
          </button>
        </div>
      )}

      {/* Main Glass Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="glass-panel p-3 rounded-full hover:bg-white/20 text-slate-100 transition-all duration-300 shadow-xl border border-white/25 hover:border-cyan-400/50 group flex items-center gap-2"
        title="Ambient Cinema & Glass Controls"
      >
        <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="text-xs font-medium pr-1 text-slate-200 hidden md:inline">
          {isOpen ? 'Close Controls' : 'Cinema Ambient'}
        </span>
      </button>
    </div>
  );
};
