import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface ContactStripProps {
  onOpenBooking: () => void;
}

export const ContactStrip: React.FC<ContactStripProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Column 1: Visit Us & Map Preview */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Visit Us</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CLINIC_INFO.address}
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 mt-2"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Simulated Modern Glass Map Widget */}
            <div className="w-full sm:w-36 h-24 rounded-2xl glass-panel-subtle border border-white/15 overflow-hidden relative group shrink-0">
              {/* Map SVG Pattern */}
              <svg className="w-full h-full opacity-60 group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#0f172a" />
                <path d="M0 30 Q30 40 50 20 T100 40" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <path d="M20 0 L40 100" stroke="#334155" strokeWidth="3" />
                <path d="M70 0 L60 100" stroke="#334155" strokeWidth="3" />
                <path d="M0 60 L100 70" stroke="#334155" strokeWidth="4" />
                <circle cx="50" cy="45" r="5" fill="#38bdf8" className="animate-ping" opacity="0.75" />
                <circle cx="50" cy="45" r="4" fill="#0284c7" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[1px]">
                <div className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/20 text-[9px] font-bold text-white flex items-center gap-1 shadow">
                  <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                  <span>Denta Studio</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-16 bg-white/15 md:col-span-1 mx-auto" />

          {/* Column 2: Call Us Today */}
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">Call Us Today</h4>
            </div>
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="text-sm font-bold text-cyan-300 hover:text-white block transition-colors tracking-wide"
            >
              {CLINIC_INFO.phone}
            </a>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{CLINIC_INFO.hours}</span>
            </div>
          </div>

          {/* Column 3: Book Appointment Pill */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <span className="text-xs uppercase font-bold text-slate-400 mb-2">
              Instant Scheduling
            </span>
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-5 rounded-2xl glass-button-primary font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl group"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book Appointment</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
