import React, { useRef } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Activity, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/dentalData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <ShieldCheck className="w-6 h-6 text-cyan-300" />;
      case 'Hammer': return (
        <svg className="w-6 h-6 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .4 2.5 1.5 4 4 4s3.6-1.5 4-4c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6z"/>
          <path d="M12 6v6"/>
        </svg>
      );
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-300" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-300" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-300" />;
      default: return <ShieldCheck className="w-6 h-6 text-cyan-300" />;
    }
  };

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header: "SERVICES" written boldly at top */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3 border border-white/20">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
          Complete Dental Solutions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
          Swipe or scroll from left to right to discover our precision clinical therapies, designed for maximum aesthetics with zero discomfort.
        </p>

        {/* Carousel Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll services left"
            className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/20 transition-all border border-white/20 shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase px-2">
            Card-by-Card Flow
          </span>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll services right"
            className="w-11 h-11 rounded-full glass-pill flex items-center justify-center text-slate-200 hover:text-white hover:bg-white/20 transition-all border border-white/20 shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card by Card Track: Left to Right Flow */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className="w-[320px] sm:w-[380px] shrink-0 snap-start glass-panel glass-panel-interactive rounded-3xl p-7 flex flex-col justify-between border border-white/20 hover:border-cyan-400/50 shadow-2xl relative overflow-hidden group"
            style={{
              animationDelay: `${index * 120}ms`
            }}
          >
            {/* Top Index & Tag */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/15">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-500/30">
                  {service.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                {getServiceIcon(service.icon)}
              </div>

              {/* Title & Short Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Benefits Bullet List */}
              <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                {service.benefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta & CTAs */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="text-slate-400">Duration: <strong className="text-white">{service.duration}</strong></span>
                <span className="font-bold text-cyan-300 text-sm">{service.priceEstimate}</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => onSelectService(service)}
                  className="py-2.5 px-3 rounded-xl glass-pill text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/20 transition-all flex items-center justify-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="py-2.5 px-3 rounded-xl glass-button-primary text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow"
                >
                  <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
