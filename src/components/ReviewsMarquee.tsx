import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/dentalData';

export const ReviewsMarquee: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Google G Multi-Color SVG
  const GoogleGIcon = () => (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.36 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.99 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );

  return (
    <section id="reviews" className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container Glass Frame */}
      <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/20 relative overflow-hidden">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Patient Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Loved by Our Patients
            </h2>
          </div>

          {/* Google 4.9 Rating Badge & Carousel Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <GoogleGIcon />
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white ml-0.5">4.9</span>
              <span className="text-[11px] text-slate-300 hidden md:inline">(1,250+ Reviews)</span>
            </div>

            {/* Arrows */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous reviews"
                className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next reviews"
                className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Marquee Cards Row */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS_DATA.concat(REVIEWS_DATA).map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-72 sm:w-80 shrink-0 snap-start glass-panel-subtle glass-panel-interactive rounded-2xl p-5 flex flex-col justify-between border border-white/15"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/15 border border-white/25">
                      <GoogleGIcon />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {review.name}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Treatment Pill */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-cyan-300">
                  {review.service}
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-6 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
