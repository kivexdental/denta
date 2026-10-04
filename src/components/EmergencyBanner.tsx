import React from 'react';
import { PhoneCall, X, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyTriageModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="glass-panel rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-rose-500/30 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 text-rose-400 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Emergency Dental Triage</h3>
            <span className="text-xs text-rose-400 font-medium">Immediate Actions to Save Your Tooth</span>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <strong className="text-white block mb-1">Knocked-Out Tooth:</strong>
            <span>Handle only by the crown, never touch root. Rinse gently with saline/milk. Reinsert into socket if possible, or store in cold whole milk while traveling immediately to clinic.</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <strong className="text-white block mb-1">Severe Throbbing Toothache:</strong>
            <span>Rinse with warm saltwater. Take ibuprofen (do not place aspirin directly on gum). Avoid extremely hot/cold fluids.</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <strong className="text-white block mb-1">Broken Crown or Veneer:</strong>
            <span>Save fragments. Apply sugar-free gum or temporary dental cement over exposed edges to prevent tongue laceration.</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${CLINIC_INFO.emergencyPhone.replace(/\s+/g, '')}`}
            className="flex-1 py-3 px-4 rounded-2xl bg-rose-600 hover:bg-rose-500 font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Emergency Hotline Now</span>
          </a>
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-2xl glass-pill text-xs font-semibold text-slate-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
