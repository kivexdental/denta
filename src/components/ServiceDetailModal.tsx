import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../data/dentalData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-white/25 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tag & Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-2">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>{service.tag}</span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          {service.title}
        </h3>

        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* Benefits List */}
        <div className="mt-5 space-y-2">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-2">
            Clinical Advantages
          </span>
          {service.benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-6 p-4 rounded-2xl glass-panel-subtle border border-white/10 grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-1">Appointment Time</span>
            <div className="flex items-center gap-1.5 font-bold text-white">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{service.duration}</span>
            </div>
          </div>
          <div>
            <span className="text-slate-400 block mb-1">Typical Cost</span>
            <span className="font-bold text-cyan-300 text-sm">{service.priceEstimate}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            onClose();
            onBookService(service);
          }}
          className="mt-6 w-full py-3.5 rounded-2xl glass-button-primary font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl"
        >
          <Calendar className="w-4 h-4 text-cyan-300" />
          <span>Book This Procedure</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
