import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Play, 
  ChevronRight,
  Clock,
  Award,
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  onOpenVideoTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  onExploreServices,
  onOpenVideoTour 
}) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[450px] bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Big Hero Container */}
      <div className="flex flex-col items-center text-center">
        {/* Top Floating Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill text-xs sm:text-sm font-semibold text-cyan-300 mb-3.5 border border-white/20 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Next-Generation Bio-Aesthetic Dental Clinic</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-300 font-normal hidden sm:inline">Painless Care for Life</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-slate-100 leading-[1.1] break-words">
            Why your <span className="font-extrabold text-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-white drop-shadow-[0_0_35px_rgba(56,189,248,0.5)]">teeth</span> should struggle when you can be <span className="font-extrabold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] tracking-wide">free</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-200/90 font-light tracking-wide max-w-2xl mx-auto pt-1">
            Advanced care. Beautiful smiles. Lasting confidence.
          </p>
        </div>

        {/* Central Action Bar */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white overflow-hidden glass-button-primary shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>Book Priority Appointment</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 glass-pill hover:bg-white/20 hover:text-white transition-all border border-white/25 shadow-xl"
          >
            <span>Explore All Services</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <button
            onClick={onOpenVideoTour}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Clinic Tour</span>
          </button>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mt-10 sm:mt-12 w-full max-w-5xl glass-panel rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">100% Painless</span>
                <span className="text-[11px] text-slate-300">Computerized anesthesia</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-400/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">Same-Day Visits</span>
                <span className="text-[11px] text-slate-300">Fast 3D digital milling</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">10-Year Warranty</span>
                <span className="text-[11px] text-slate-300">On implants & veneers</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-400/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">Top Rated 4.9★</span>
                <span className="text-[11px] text-slate-300">1,250+ Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
