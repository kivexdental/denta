import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation, 
  Car, 
  Train, 
  Accessibility, 
  Calendar, 
  Mail, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface VisitUsSectionProps {
  onOpenBooking: () => void;
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ onOpenBooking }) => {
  const [checkedInNotice, setCheckedInNotice] = useState(false);

  const handleSimulatedCheckIn = () => {
    setCheckedInNotice(true);
    setTimeout(() => setCheckedInNotice(false), 4500);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3 border border-white/20">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>VISIT OUR CAMPUS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
          Visit Us in Smile City
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 font-light">
          An architectural sanctuary designed for calm and comfort. Centrally located with valet parking and step-free access.
        </p>
      </div>

      {/* Big Beautiful Glass Pavilion */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
        {/* Glow ambient accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
          {/* Left Column: Clinic Details & Accessibility (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>OPEN NOW • Welcoming Patients Until 8:00 PM</span>
              </div>

              {/* Main Address */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Central Clinical Suite & Studios
                </h3>
                <p className="text-base text-slate-200 font-medium leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-xs text-slate-400">
                  Corner of 5th Avenue & Dental Boulevard • Building 4, Floor 4
                </p>
              </div>

              {/* Driving Directions Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-xl hover:shadow-cyan-500/20 group"
                >
                  <Navigation className="w-4 h-4 text-cyan-600 fill-cyan-600 group-hover:scale-110 transition-transform" />
                  <span>Google Maps Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://maps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white glass-pill hover:bg-white/20 transition-all border border-white/25"
                >
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Transportation & Amenities 3-Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-2">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Valet Parking</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Free valet parking at front entrance.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center mb-2">
                  <Train className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Metro Accessible</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">2 min walk from Smile City Central.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-2">
                  <Accessibility className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">ADA Accessible</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Elevator & zero-step entrance.</p>
              </div>
            </div>

            {/* Contact Hotline & Concierge Strip */}
            <div className="p-4 rounded-2xl glass-panel-subtle border border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Concierge & Scheduling Hotline
                  </span>
                  <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Operating Schedule
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {CLINIC_INFO.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Big Beautiful Interactive Map & Reception (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Interactive Map Visual */}
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl group">
              {/* Map Canvas Illustration */}
              <svg className="w-full h-full object-cover opacity-80" viewBox="0 0 600 450" fill="none">
                <rect width="600" height="450" fill="#090d16" />
                
                {/* City Road Network */}
                <path d="M0 120 C180 140 320 90 600 130" stroke="#1e293b" strokeWidth="24" strokeLinecap="round" />
                <path d="M0 120 C180 140 320 90 600 130" stroke="#334155" strokeWidth="12" strokeLinecap="round" />

                <path d="M140 0 L190 450" stroke="#1e293b" strokeWidth="20" />
                <path d="M140 0 L190 450" stroke="#334155" strokeWidth="8" />

                <path d="M420 0 L390 450" stroke="#1e293b" strokeWidth="22" />
                <path d="M420 0 L390 450" stroke="#334155" strokeWidth="10" />

                <path d="M0 320 C200 300 400 350 600 310" stroke="#1e293b" strokeWidth="28" />
                <path d="M0 320 C200 300 400 350 600 310" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="8 8" opacity="0.4" />

                {/* Metro Line Glow */}
                <path d="M50 450 C180 320 300 180 550 50" stroke="#38bdf8" strokeWidth="4" strokeDasharray="6 6" opacity="0.6" />

                {/* Building Zones */}
                <rect x="220" y="160" width="140" height="110" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
                <text x="290" y="215" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">DENTA CLINIC CAMPUS</text>

                {/* Location Marker & Pulse Rings */}
                <circle cx="290" cy="180" r="32" fill="#0ea5e9" opacity="0.2" className="animate-ping" />
                <circle cx="290" cy="180" r="16" fill="#38bdf8" opacity="0.4" />
                <circle cx="290" cy="180" r="8" fill="#38bdf8" />
                <circle cx="290" cy="180" r="3" fill="#ffffff" />
              </svg>

              {/* Map Floating Pill Info */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full glass-panel border border-white/20 text-xs font-bold text-white flex items-center gap-2 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Denta Flagship Studio</span>
                </div>

                <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] text-slate-300">
                  Live Traffic: Normal
                </div>
              </div>

              {/* Facility Thumbnail Inset Overlay */}
              <div className="absolute bottom-5 left-5 p-2 rounded-2xl glass-panel border border-white/25 shadow-2xl flex items-center gap-3">
                <img
                  src="/explore/e3.jpg"
                  alt="Clinic Reception Preview"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="pr-2">
                  <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">
                    Main Entrance
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Boutique Valet Drop-off
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Floor 4 Reception Concierge
                  </span>
                </div>
              </div>
            </div>

            {/* Virtual Reception Check-In Action Bar */}
            <div className="glass-panel-subtle p-5 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-white block">
                  Virtual Front Desk Arrival
                </span>
                <span className="text-xs text-slate-300">
                  Already have an appointment today? Let our team know you've arrived.
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleSimulatedCheckIn}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl glass-pill hover:bg-white/20 text-xs font-bold text-cyan-300 border border-cyan-400/40 whitespace-nowrap"
                >
                  {checkedInNotice ? 'Checked In! Concierge Notified' : 'Express Check-In'}
                </button>

                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl glass-button-primary text-xs font-bold text-white whitespace-nowrap shadow"
                >
                  Book Visit
                </button>
              </div>
            </div>

            {checkedInNotice && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Your specialist has been alerted. Please enjoy the relaxation lounge on Floor 4!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
