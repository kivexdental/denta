import React from 'react';
import { Cpu, Sparkles, ShieldCheck, Award, Heart } from 'lucide-react';

export const TrustFeatures: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Advanced Technology',
      desc: 'Modern 3D equipment for precise, painless treatment',
      color: 'text-cyan-300',
      bg: 'bg-cyan-500/15',
    },
    {
      icon: Sparkles,
      title: 'Hygiene Excellence',
      desc: 'Hospital-grade sterilized environment for your absolute safety',
      color: 'text-sky-300',
      bg: 'bg-sky-500/15',
    },
    {
      icon: ShieldCheck,
      title: 'Safety Protocols',
      desc: 'Rigid infection control and ADA bio-safety standards',
      color: 'text-emerald-300',
      bg: 'bg-emerald-500/15',
    },
    {
      icon: Award,
      title: 'Trusted Professionals',
      desc: 'Board-certified specialists with decades of experience',
      color: 'text-indigo-300',
      bg: 'bg-indigo-500/15',
    },
    {
      icon: Heart,
      title: 'Patient First',
      desc: 'Your emotional comfort and care is always our highest priority',
      color: 'text-rose-300',
      bg: 'bg-rose-500/15',
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/20 relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
            WHY CHOOSE DENTA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Safe Care, Every Time
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400/80 rounded-full mx-auto mt-2.5 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>

        {/* 5 Cards Row (Matching Inspiration Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="glass-panel-subtle glass-panel-interactive rounded-2xl p-5 flex flex-col items-center text-center border border-white/10 hover:border-white/25 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.bg} border border-white/15 flex items-center justify-center mb-4 ${f.color} group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300/80 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
