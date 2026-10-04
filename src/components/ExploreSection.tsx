import React, { useState } from 'react';
import { Compass, Eye, ShieldCheck, Sparkles, X, ArrowRight, Calendar } from 'lucide-react';

interface ExploreSectionProps {
  onOpenBooking: () => void;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'surgical' | 'diagnostic' | 'lounge'>('all');
  const [activeModalSpace, setActiveModalSpace] = useState<any | null>(null);

  const spaces = [
    {
      id: 'suite-1',
      category: 'surgical',
      title: 'Robotic Guided Surgical Suite',
      subtitle: 'Class-B Positive Pressure Sterilization',
      image: '/explore/e1.jpg',
      description: 'Engineered for micron-level implant placements, utilizing dynamic 3D optical tracking, sterile air curtains, and ergonomic patient positioning.',
      highlights: ['Class-B Autoclave Sterility', 'Dynamic 3D Navigation Arm', 'Intravenous Conscious Sedation Monitoring']
    },
    {
      id: 'suite-2',
      category: 'diagnostic',
      title: 'Ultra Low-Dose 3D CBCT Lab',
      subtitle: '99.8% Radiation Reduction Imaging',
      image: '/explore/e2.jpg',
      description: 'Generates comprehensive 3D cranial and maxillofacial tomographies in 14 seconds, allowing clinicians to plan procedures without nerve risk.',
      highlights: ['14-Second Full Arch Scan', 'Micro-Voxel Bone Density Analysis', 'AI Caries & Root Canal Mapping']
    },
    {
      id: 'suite-3',
      category: 'lounge',
      title: 'Executive Patient Relaxation Lounge',
      subtitle: 'Boutique Hospital-Grade Calm',
      image: '/explore/e3.jpg',
      description: 'Crafted to dissolve dental anxiety with acoustic wall treatments, noise-canceling headsets, warm aromatics, and personalized refreshments.',
      highlights: ['Noise-Canceling Audio Experience', 'Heated Shiatsu Recliner Suites', 'Complimentary Organic Herbal Bar']
    },
    {
      id: 'suite-4',
      category: 'diagnostic',
      title: 'In-House Ceramic CAD/CAM Studio',
      subtitle: 'Same-Day Digital Restorations',
      image: '/explore/e4.jpg',
      description: 'High-speed diamond milling machines fabricate custom zirconia crowns and porcelain veneers chairside while you wait.',
      highlights: ['Sub-Micron Precision Milling', 'Multi-Layered Vita Ceramic Blocks', 'Zero Need for Messy Putty Impressions']
    },
  ];

  const filteredSpaces = activeFilter === 'all' 
    ? spaces 
    : spaces.filter(s => s.category === activeFilter);

  return (
    <section id="explore" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3 border border-white/20">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPLORE OUR CAMPUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
            State-of-the-Art Facilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            Take a virtual tour through our clinical surgical theatres, diagnostic imaging suites, and patient recovery sanctuaries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-slate-900/60 border border-white/15">
          {[
            { id: 'all', label: 'All Spaces' },
            { id: 'surgical', label: 'Surgical Suites' },
            { id: 'diagnostic', label: 'Tech & Imaging' },
            { id: 'lounge', label: 'Patient Sanctuary' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Clinic Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSpaces.map((space) => (
          <div
            key={space.id}
            onClick={() => setActiveModalSpace(space)}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl cursor-pointer"
          >
            {/* Facility Image */}
            <img
              src={space.image}
              alt={space.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-300 border border-white/25 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{space.subtitle}</span>
            </div>

            {/* Top Right Quick Zoom Icon */}
            <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-white/20 transition-all">
              <Eye className="w-4 h-4" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors drop-shadow">
                {space.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 drop-shadow">
                {space.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <span>Inspect Suite Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Detail Modal */}
      {activeModalSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl max-w-2xl w-full overflow-hidden border border-white/25 shadow-2xl relative">
            <button
              onClick={() => setActiveModalSpace(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-200 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 sm:h-72 w-full">
              <img
                src={activeModalSpace.image}
                alt={activeModalSpace.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {activeModalSpace.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {activeModalSpace.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeModalSpace.description}
              </p>

              <div className="mt-5 space-y-2">
                <span className="text-xs uppercase font-bold text-slate-400 block mb-2">
                  Technical Specifications & Safety Standards
                </span>
                {activeModalSpace.highlights.map((h: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveModalSpace(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-2xl glass-button-primary font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  <span>Schedule Visit in This Suite</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
