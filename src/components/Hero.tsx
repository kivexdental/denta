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
    <section id="home" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Main Hero Container - Left Aligned */}
      <div className="flex flex-col items-start text-left">
        {/* Top Floating Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 text-xs sm:text-sm font-semibold text-cyan-300 mb-4 border border-cyan-500/30 shadow-md animate-in fade-in slide-in-from-top-4 duration-500">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Next-Generation Bio-Aesthetic Dental Clinic</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-300 font-normal hidden sm:inline">Painless Care for Life</span>
        </div>

        {/* Big Editorial Headline - Left Aligned */}
        <div className="max-w-4xl space-y-4 text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-slate-100 leading-[1.1] text-left break-words">
            Why your{' '}
            <span className="font-extrabold text-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-white">
              teeth
            </span>{' '}
            should struggle when you can be{' '}
            <span className="font-extrabold text-white tracking-wide">
              free
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-200/90 font-light tracking-wide max-w-2xl text-left pt-1">
            Advanced care. Beautiful smiles. Lasting confidence.
          </p>
        </div>

        {/* Action Bar - Left Aligned */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-3.5 sm:gap-4">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer border border-cyan-400/40"
          >
            <Calendar className="w-4 h-4 text-cyan-100" />
            <span>Book Priority Appointment</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-500 shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Services</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </a>

          <button
            onClick={onOpenVideoTour}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Clinic Tour</span>
          </button>
        </div>

        {/* Bottom Feature Badges Bar - Crisp Non-Glass Surface */}
        <div className="mt-12 sm:mt-14 w-full max-w-5xl bg-slate-900/95 rounded-3xl p-5 sm:p-6 border border-slate-800/80 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
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
