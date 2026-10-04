import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const cases = [
    {
      title: 'Full Porcelain Veneers & Whitening',
      description: 'Patient presented with tetracycline enamel staining, chipped incisal edges, and diastema spacing. Restored with 8 custom e.max ultra-thin porcelain veneers.',
      beforeImage: '/transformations/case1_before.jpg',
      afterImage: '/transformations/case1_after.jpg',
      duration: '2 appointments (10 days apart)',
      specialist: 'Dr. Rajat Malhotra',
      shadeImprovement: '+8 Shades Brighter',
    },
    {
      title: 'Guided Dental Implant & Zirconia Crown',
      description: 'Traumatic fractured central incisor with missing structural corner. Restored with 3D guided bio-inert titanium implant and custom-shaded zirconia crown.',
      beforeImage: '/transformations/case2_before.jpg',
      afterImage: '/transformations/case2_after.jpg',
      duration: 'Same-day temporary, final crown in 3 weeks',
      specialist: 'Dr. Amit Verma',
      shadeImprovement: '100% Anatomical Alignment',
    }
  ];

  const currentCase = cases[activeCaseIndex];

  return (
    <section id="transformations" className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real Patient Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Smile Transformations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Drag the interactive slider to inspect the micron-level finish, natural light refraction, and shade enhancement.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-900/60 border border-white/15">
            {cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Case #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Before/After Drag Container */}
          <div className="lg:col-span-8">
            <div className="relative h-[340px] sm:h-[440px] rounded-3xl overflow-hidden glass-panel border border-white/25 select-none shadow-2xl">
              {/* After Image (Base Layer) */}
              <img
                src={currentCase.afterImage}
                alt="After Dental Smile Transformation"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full glass-pill text-[11px] font-bold tracking-wide uppercase text-emerald-300 border border-emerald-400/30">
                After Transformation
              </div>

              {/* Before Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before Dental Smile"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full glass-pill text-[11px] font-bold tracking-wide uppercase text-amber-300 border border-amber-400/30">
                  Before Treatment
                </div>
              </div>

              {/* Center Divider Line & Floating Glass Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel border border-white flex items-center justify-center text-slate-100 shadow-2xl">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold">◀</span>
                    <span className="text-[10px] font-bold">▶</span>
                  </div>
                </div>
              </div>

              {/* Invisible Full-Range Slider Touch Area */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Drag to compare before and after dental treatment"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            {/* Slider Hint & Clinical Disclosure */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span>Drag slider or use arrow keys to compare treatment outcomes</span>
              <span className="text-[11px] text-slate-500 italic">Clinical Showcase Demonstration</span>
            </div>
          </div>

          {/* Right Case Details & Quick Booking Card */}
          <div className="lg:col-span-4 glass-panel-subtle rounded-3xl p-6 flex flex-col justify-between border border-white/15 h-full">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                Clinical Case Study
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {currentCase.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="mt-6 space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Treatment Duration</span>
                  <span className="font-semibold text-white">{currentCase.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Attending Specialist</span>
                  <span className="font-semibold text-cyan-300">{currentCase.specialist}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Measurable Outcome</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {currentCase.shadeImprovement}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom Digital Wax-Up preview prior to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>5-Year comprehensive structural warranty</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-8 w-full py-3 rounded-2xl glass-button-primary font-semibold text-white text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Get Similar Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
