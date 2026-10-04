import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/dentalData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms' | 'disclaimer' | 'cookie' | 'appointment') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegal }) => {
  return (
    <footer className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        {/* Column 1: Brand & Socials (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/30 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <svg 
                className="w-5 h-5 text-cyan-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .4 2.5 1.5 4 4 4s3.6-1.5 4-4c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6z"/>
                <path d="M12 6v6"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Denta
            </span>
          </a>

          <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
            Your trusted partner for advanced, anxiety-free dental care, precision implants, and radiant smiles.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 pt-2">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all border border-white/15"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all border border-white/15"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all border border-white/15"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all border border-white/15"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ADA & ISO 9001:2020 Certified Clinic</span>
          </div>
        </div>

        {/* Column 2: Quick Links (lg:col-span-2) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
            <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
            <li><a href="#doctors" className="hover:text-cyan-300 transition-colors">Our Doctors</a></li>
            <li><a href="#transformations" className="hover:text-cyan-300 transition-colors">Smile Results</a></li>
            <li><a href="#reviews" className="hover:text-cyan-300 transition-colors">Reviews</a></li>
            <li><a href="#faqs" className="hover:text-cyan-300 transition-colors">FAQs</a></li>
            <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Our Services
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
            {SERVICES_DATA.map((srv) => (
              <li key={srv.id}>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  {srv.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#transformations" className="hover:text-cyan-300 transition-colors">
                Digital Smile Design
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us & Hours (lg:col-span-3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Contact Us
          </h4>
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.address}</span>
            </div>
          </div>

          <div className="pt-2">
            <h5 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">
              Working Hours
            </h5>
            <p className="text-xs text-slate-300">{CLINIC_INFO.hours}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Sunday: {CLINIC_INFO.sunday}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Comprehensive Legal Links */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© 2026 Denta Aesthetic & Implant Center. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <button
            type="button"
            onClick={() => onOpenLegal?.('privacy')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onOpenLegal?.('terms')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onOpenLegal?.('disclaimer')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Medical Disclaimer
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onOpenLegal?.('cookie')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Cookie Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onOpenLegal?.('appointment')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Appointment Policy
          </button>
        </div>
      </div>
    </footer>
  );
};
