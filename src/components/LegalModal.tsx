import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, Cookie, CalendarCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export type PolicyTab = 'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'appointment';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: PolicyTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'disclaimer', label: 'Medical Disclaimer', icon: AlertTriangle },
    { id: 'cookie', label: 'Cookie Policy', icon: Cookie },
    { id: 'appointment', label: 'Appointment Policy', icon: CalendarCheck },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-base font-bold text-white">
                Denta Legal & Compliance Policies
              </h3>
              <span className="text-[11px] text-slate-400">
                Official Clinical Standards, Patient Data Protection & Medical Guidance
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close legal policy dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 border-b border-white/10 bg-slate-900/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-200 text-xs sm:text-sm leading-relaxed space-y-4">
          {/* TAB 1: Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white">Privacy Policy & Patient Confidentiality</h4>
              <p className="text-xs text-slate-400">Last Revised: October 2026</p>
              
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs">
                <strong>Public Demonstration Website Notice:</strong> This web portal operates as a public clinic showcase and front-end interface. The appointment scheduler is a demonstration workflow; no actual sensitive protected health information (PHI) is permanently collected, transmitted to external marketing parties, or sold.
              </div>

              <h5 className="font-bold text-white pt-2">1. Information We Collect</h5>
              <p>
                When interacting with our interactive showcase features, you may optionally provide contact details such as name, phone number, and email address to test the appointment scheduler. We treat all test submissions with high confidentiality and do not store sensitive medical history in unsecured cookies or local databases.
              </p>

              <h5 className="font-bold text-white pt-2">2. HIPAA & Physical Clinical Standards</h5>
              <p>
                In our physical practice at {CLINIC_INFO.address}, Denta adheres strictly to the Health Insurance Portability and Accountability Act (HIPAA) standards, ISO 9001:2020 quality protocols, and ADA infection prevention guidelines. Any official medical records, radiographic scans (3D CBCT), and periodontal evaluations are maintained in encrypted, air-gapped clinical servers.
              </p>

              <h5 className="font-bold text-white pt-2">3. Third-Party Links & Services</h5>
              <p>
                Our website links to navigation services (Google Maps, Apple Maps) for clinic directions. We encourage patients to review the privacy notices of external navigation providers.
              </p>
            </div>
          )}

          {/* TAB 2: Terms & Conditions */}
          {activeTab === 'terms' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white">Terms & Conditions of Website Use</h4>
              <p className="text-xs text-slate-400">Effective Date: October 2026</p>

              <h5 className="font-bold text-white pt-2">1. Acceptance of Terms</h5>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of this site.
              </p>

              <h5 className="font-bold text-white pt-2">2. Intellectual Property</h5>
              <p>
                All original clinic images, 3D biometric visualizations, treatment descriptions, and layout designs presented on Denta are protected by copyright and intellectual property laws. Unauthorized reproduction or scraping without explicit written authorization is prohibited.
              </p>

              <h5 className="font-bold text-white pt-2">3. Treatment Pricing Estimates</h5>
              <p>
                The cost estimator tool provides ballpark procedure ranges for general planning only. Exact treatment quotes are finalized only following an in-person clinical diagnostic examination by a licensed dental surgeon.
              </p>
            </div>
          )}

          {/* TAB 3: Medical Disclaimer */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                <h4 className="text-lg font-bold text-white">Clinical & Medical Disclaimer</h4>
              </div>
              
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-medium leading-relaxed">
                <strong>IMPORTANT NOTICE:</strong> The material, articles, treatment overviews, and interactive cost simulations on this website are published solely for general educational and informational purposes. They do NOT constitute dental or medical advice, diagnosis, or treatment plans.
              </div>

              <h5 className="font-bold text-white pt-2">1. No Doctor-Patient Relationship Established Online</h5>
              <p>
                Browsing this website, submitting an inquiry via the demonstration booking tool, or reading clinical articles does not create a licensed doctor-patient relationship between you and Denta Dental Clinic or any of our affiliated specialists.
              </p>

              <h5 className="font-bold text-white pt-2">2. Emergency Dental Conditions</h5>
              <p>
                If you are experiencing severe oral bleeding, acute maxillofacial trauma, sudden facial swelling affecting your airway, or uncontrolled pain, do not rely on digital form submissions. Contact our 24/7 emergency hotline at {CLINIC_INFO.emergencyPhone} immediately or proceed directly to the nearest hospital emergency department.
              </p>

              <h5 className="font-bold text-white pt-2">3. Individual Treatment Outcomes</h5>
              <p>
                Before-and-after cases and cosmetic transformations illustrate real clinical outcomes achieved for specific patients. Individual anatomy, bone density, enamel structure, and healing biology vary; identical results cannot be guaranteed for every patient.
              </p>
            </div>
          )}

          {/* TAB 4: Cookie Policy */}
          {activeTab === 'cookie' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white">Cookie Policy & Local Storage</h4>
              <p className="text-xs text-slate-400">Effective Date: October 2026</p>

              <p>
                This website uses minimal essential client-side storage technologies (such as localStorage and session cookies) strictly to remember your interface preferences:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li><strong>Ambient Video Settings:</strong> Preserves your play/pause, mute, and glass backdrop blur level preferences.</li>
                <li><strong>Preview Toolbar Preferences:</strong> Remembers your preferred device viewport mode (PC, Tablet, Phone, Fullscreen).</li>
                <li><strong>Accessibility State:</strong> Preserves reduced motion and high-contrast settings.</li>
              </ul>

              <p className="pt-2">
                We do not deploy intrusive third-party cross-site behavioral tracking beacons or sell your browsing history to third-party data brokers.
              </p>
            </div>
          )}

          {/* TAB 5: Appointment Policy */}
          {activeTab === 'appointment' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <h4 className="text-lg font-bold text-white">Appointment & Scheduling Guidelines</h4>
              <p className="text-xs text-slate-400">Clinical Scheduling Policy</p>

              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs">
                <strong>Showcase Scheduling Notice:</strong> The booking modal embedded on this public site operates in showcase mode to display our intuitive 4-step patient intake experience.
              </div>

              <h5 className="font-bold text-white pt-2">1. In-Person Patient Scheduling</h5>
              <p>
                To schedule a binding clinical consultation, dental surgery, or aesthetic smile design session, patients may call our front desk directly at {CLINIC_INFO.phone} or visit our suite during operating hours ({CLINIC_INFO.hours}).
              </p>

              <h5 className="font-bold text-white pt-2">2. Cancellation & Rescheduling Courtesy</h5>
              <p>
                We reserve 60 to 90 minutes of dedicated surgical theatre time for complex procedures. We kindly request at least 24 hours advance notice for rescheduling or cancellations so that emergency patients in acute pain may be accommodated.
              </p>

              <h5 className="font-bold text-white pt-2">3. Zero Wait Time Guarantee</h5>
              <p>
                We respect your personal schedule. Through digital check-in and staggered appointments, over 95% of our patients are escorted to their suite within 5 minutes of arrival.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-slate-900/60 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Denta Aesthetic & Implant Center • ISO 9001:2020 Certified
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full glass-button-primary text-xs font-semibold text-white"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
