import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  Smile, 
  Sparkles, 
  ArrowRight, 
  Play, 
  X, 
  Volume2, 
  VolumeX, 
  CheckCircle2 
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalMuted, setModalMuted] = useState(false);

  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Years of Excellence',
      color: 'text-cyan-300',
      bg: 'bg-cyan-500/15'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Happy Patients',
      color: 'text-sky-300',
      bg: 'bg-sky-500/15'
    },
    {
      icon: Smile,
      value: '98%',
      label: 'Patient Satisfaction',
      color: 'text-emerald-300',
      bg: 'bg-emerald-500/15'
    },
    {
      icon: Sparkles,
      value: '50+',
      label: 'Advanced Treatments',
      color: 'text-indigo-300',
      bg: 'bg-indigo-500/15'
    }
  ];

  return (
    <section id="about" className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden">
        {/* Subtle Ambient Refraction */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Care That Makes a Difference
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
                At Denta, we believe every smile deserves exceptional, anxiety-free care. Our seasoned clinicians combine guided robotic precision, 3D biometric imaging, and concierge warmth to safeguard your long-term oral vitality.
              </p>
            </div>

            {/* Stats 4-Pill Grid (Matches Inspiration) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="glass-panel-subtle rounded-2xl p-3.5 flex flex-col items-center text-center border border-white/10 hover:border-white/25 transition-all group"
                  >
                    <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center mb-2 text-cyan-300 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white glass-pill hover:bg-white/20 transition-all border border-white/25 group"
              >
                <span>Learn More About Us</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Video Card (Matches Inspiration Image) */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="relative h-72 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl group cursor-pointer"
            >
              {/* Image / Video Poster */}
              <img
                src="/explore/e1.jpg"
                alt="Advanced dental care and dental surgical suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-900/20" />

              {/* Center Animated Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glowing Pulse Rings */}
                  <div className="absolute -inset-3 rounded-full bg-cyan-400/30 blur-md animate-ping" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-panel border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Card Footer Tagline */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300 drop-shadow">
                  Virtual Clinic Tour
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 drop-shadow">
                  Advanced care. Beautiful smiles. Better lives.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h4 className="text-sm font-semibold text-white">
                  Inside Denta — Clinical Precision & Patient Experience
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalMuted(prev => !prev)}
                  className="p-1.5 rounded-full glass-pill hover:bg-white/20 text-slate-200"
                  title={modalMuted ? 'Unmute' : 'Mute'}
                >
                  {modalMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-full glass-pill hover:bg-white/20 text-slate-200 hover:text-white"
                  title="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <video
                autoPlay
                loop
                controls
                muted={modalMuted}
                className="w-full h-full object-cover"
              >
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer Key Highlights */}
            <div className="p-4 sm:p-5 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>3D Intraoral Scanning & Painless Sedation</span>
              </div>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenBooking();
                }}
                className="px-4 py-2 rounded-full glass-button-primary text-white font-semibold text-xs ml-auto"
              >
                Book Your First Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
