import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, DOCTORS_DATA, Doctor, ServiceItem, CLINIC_INFO } from '../data/dentalData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedDoctor?: Doctor | null;
  preSelectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedDoctor,
  preSelectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS_DATA[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [anxietyFriendly, setAnxietyFriendly] = useState(true);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        resetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle pre-selections
  useEffect(() => {
    if (preSelectedDoctor) {
      setSelectedDoctor(preSelectedDoctor);
      setStep(1);
    }
  }, [preSelectedDoctor]);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
      setStep(2);
    }
  }, [preSelectedService]);

  // Set default tomorrow date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM',
    '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!patientName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(patientEmail.trim())) {
      setFormError('Please provide a valid email address.');
      return;
    }
    const cleanPhone = patientPhone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 8) {
      setFormError('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    setIsSubmitting(true);

    // Simulate quick verification & confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `DEN-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setStep(5);

      // Fire satisfying celebration confetti
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }, 700);
  };

  const resetAndClose = () => {
    setStep(1);
    setFormError(null);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-white/25 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="booking-modal-title" className="text-base font-bold text-white">
                  Book Dental Appointment
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  Demo Flow
                </span>
              </div>
              <span className="text-[11px] text-slate-300">
                {step < 5 ? `Step ${step} of 4: ` : 'Confirmed!'}
                {step === 1 && 'Select Dental Service'}
                {step === 2 && 'Choose Specialist Doctor'}
                {step === 3 && 'Pick Date & Time'}
                {step === 4 && 'Patient Information'}
              </span>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close appointment booking dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Demo Flow Banner Callout */}
        <div className="px-6 py-2 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center gap-2 text-xs text-cyan-200">
          <ShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
          <span>
            <strong>Showcase Experience:</strong> Test our 4-step booking workflow. No real patient data is stored or transmitted.
          </span>
        </div>

        {/* Progress Bar (Steps 1 to 4) */}
        {step < 5 && (
          <div className="w-full bg-slate-800/60 h-1">
            <div
              className="bg-gradient-to-r from-cyan-400 to-sky-500 h-1 transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">
                What brings you in today?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                      selectedService.id === service.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                        : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xs uppercase font-bold text-cyan-300">
                        {service.tag}
                      </span>
                      {selectedService.id === service.id && (
                        <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-bold text-white mt-1 block">
                      {service.title}
                    </span>
                    <p className="text-xs text-slate-300/80 mt-1 line-clamp-2">
                      {service.shortDesc}
                    </p>
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Approx. {service.duration}</span>
                      <span className="font-semibold text-cyan-200">{service.priceEstimate}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Choose Doctor */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  Select your preferred clinician
                </h4>
                <span className="text-xs text-slate-400">
                  Selected: <strong className="text-cyan-300">{selectedService.title}</strong>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTORS_DATA.map((doctor) => (
                  <button
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3.5 cursor-pointer ${
                      selectedDoctor.id === doctor.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg'
                        : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-14 h-14 rounded-2xl object-cover object-top border border-white/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white truncate">
                          {doctor.name}
                        </span>
                        {selectedDoctor.id === doctor.id && (
                          <div className="w-4 h-4 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-cyan-300 block truncate">
                        {doctor.role}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {doctor.experience} • ★ {doctor.rating}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Picker */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label className="text-xs uppercase font-bold text-slate-300 block mb-2">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-2xl glass-panel-subtle border border-white/20 text-white focus:outline-none focus:border-cyan-400 text-sm"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-bold text-slate-300 block mb-2">
                  Select Available Time Slot (Clinic Hours)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedTime === slot
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow'
                          : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Appointment with <strong className="text-white">{selectedDoctor.name}</strong> for{' '}
                  <strong className="text-white">{selectedService.title}</strong> on{' '}
                  <strong className="text-cyan-300">{selectedDate}</strong> at{' '}
                  <strong className="text-cyan-300">{selectedTime}</strong>.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info Form */}
          {step === 4 && (
            <form onSubmit={handleCompleteBooking} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Miller"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel-subtle border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel-subtle border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel-subtle border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Special Notes or Specific Concerns (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. History of dental anxiety, previous crown sensitivity, or preference for nitrous oxide."
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl glass-panel-subtle border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Anxiety Comfort Menu Toggle */}
              <label className="flex items-center gap-3 p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 cursor-pointer">
                <input
                  type="checkbox"
                  checked={anxietyFriendly}
                  onChange={(e) => setAnxietyFriendly(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 accent-cyan-400"
                />
                <span className="text-xs text-cyan-200">
                  <strong>Complimentary Comfort Suite:</strong> Pre-select noise-canceling headphones, warm lavender neck wrap, and streaming television.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-white text-sm flex items-center justify-center gap-2 shadow-xl mt-4 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
                    <span>Processing Demo Reservation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Demo Appointment</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* STEP 5: Booking Confirmation Celebration Screen */}
          {step === 5 && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Demo Reservation Simulation Confirmed
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Thank You, {patientName || 'Valued Patient'}!
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  This showcase demonstrates the intuitive Denta intake experience. No clinical booking has been made and no patient data was retained.
                </p>
              </div>

              {/* Glass Appointment Summary Card */}
              <div className="glass-panel-subtle max-w-md mx-auto p-5 rounded-2xl border border-white/20 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-400">Demo Reference ID:</span>
                  <span className="font-mono font-bold text-cyan-300">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Attending Specialist:</span>
                  <span className="font-semibold text-white">{selectedDoctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Procedure:</span>
                  <span className="font-semibold text-white">{selectedService.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-semibold text-white">{selectedDate} @ {selectedTime}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Clinic Address:</span>
                  <span className="text-slate-200">{CLINIC_INFO.address}</span>
                </div>
              </div>

              {/* Real Scheduling Callout */}
              <div className="p-3 max-w-md mx-auto rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 text-center">
                <span>To book a real clinical appointment, call our concierge desk: </span>
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-cyan-300 hover:underline">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-full glass-button-primary font-semibold text-white text-xs cursor-pointer"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation (Steps 1 to 3) */}
        {step < 4 && (
          <div className="px-6 py-4 border-t border-white/10 bg-slate-900/60 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="px-4 py-2 rounded-full glass-pill text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={() => setStep((prev) => (prev + 1) as any)}
              className="px-5 py-2.5 rounded-full glass-button-primary text-xs font-bold text-white flex items-center gap-1.5 shadow cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step 4 Back Button */}
        {step === 4 && (
          <div className="px-6 py-3 border-t border-white/10 bg-slate-900/60 flex items-center">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Time Selection</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
