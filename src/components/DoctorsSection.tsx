import React, { useState } from 'react';
import { Star, Calendar, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { DOCTORS_DATA, Doctor } from '../data/dentalData';

interface DoctorsSectionProps {
  onSelectDoctorToBook: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorToBook }) => {
  const [selectedDoctorForBio, setSelectedDoctorForBio] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            Clinical Faculty & Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Meet Our Dental Experts
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Internationally fellowship-trained specialists dedicated to gentle, predictable outcomes.
          </p>
        </div>

        <button 
          onClick={() => setSelectedDoctorForBio(DOCTORS_DATA[0])}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-white hover:bg-white/20 transition-all border border-white/25 group"
        >
          <span>View Doctor Credentials</span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 4 Doctor Cards Grid (Matches Inspiration Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DOCTORS_DATA.map((doctor) => (
          <div
            key={doctor.id}
            className="glass-panel glass-panel-interactive rounded-3xl overflow-hidden border border-white/15 hover:border-cyan-400/40 flex flex-col justify-between group shadow-xl"
          >
            {/* Portrait Image Container */}
            <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-900/60">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Floating Star Rating */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-pill flex items-center gap-1 text-[11px] font-bold text-white border border-white/25">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{doctor.rating}</span>
                <span className="text-slate-400 text-[10px]">({doctor.reviewsCount})</span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mt-0.5">
                  {doctor.role}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {doctor.experience}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {doctor.specialties.slice(0, 2).map((spec, i) => (
                    <span 
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => onSelectDoctorToBook(doctor)}
                  className="w-full py-2.5 rounded-xl glass-button-primary text-xs font-semibold text-white flex items-center justify-center gap-1.5 shadow"
                >
                  <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Book with Doctor</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Bio Drawer / Modal */}
      {selectedDoctorForBio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-white/25 shadow-2xl relative">
            <button
              onClick={() => setSelectedDoctorForBio(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedDoctorForBio.image}
                alt={selectedDoctorForBio.name}
                className="w-16 h-16 rounded-2xl object-cover object-top border border-white/25"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedDoctorForBio.name}</h3>
                <p className="text-xs text-cyan-400 font-semibold">{selectedDoctorForBio.role}</p>
                <p className="text-xs text-slate-400">{selectedDoctorForBio.experience}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-300">
              <p className="leading-relaxed">{selectedDoctorForBio.bio}</p>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1">
                  Academic Background
                </span>
                <span className="text-white font-medium">{selectedDoctorForBio.education}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  const doc = selectedDoctorForBio;
                  setSelectedDoctorForBio(null);
                  onSelectDoctorToBook(doc);
                }}
                className="w-full py-3 rounded-2xl glass-button-primary font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Priority Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
