import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Calendar, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenEmergency }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'explore', 'about', 'transformations', 'doctors', 'news', 'faqs', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Explore', href: '#explore', id: 'explore' },
    { name: 'Transformations', href: '#transformations', id: 'transformations' },
    { name: 'Doctors', href: '#doctors', id: 'doctors' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'News', href: '#news', id: 'news' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Visit Us', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6">
      <nav 
        className={`w-full max-w-7xl glass-panel rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled ? 'border-white/25 shadow-2xl bg-slate-900/80' : 'border-white/15 bg-slate-900/50'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/30 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform">
            <svg 
              className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" 
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
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1">
              Denta
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* 24/7 Emergency Quick Pill */}
          <button
            onClick={onOpenEmergency}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold hover:bg-rose-500/25 transition-all shadow-sm"
            title="24/7 Dental Emergency Care"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            <span>Emergency 24/7</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white overflow-hidden glass-button-primary shrink-0"
          >
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>Book Appointment</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            className="xl:hidden p-2 rounded-full glass-panel hover:bg-white/20 text-slate-200 hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="xl:hidden fixed top-18 inset-x-4 max-w-lg mx-auto glass-panel rounded-3xl p-5 border border-white/20 shadow-2xl backdrop-blur-3xl animate-in fade-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-white/15 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full py-2.5 rounded-2xl font-semibold text-rose-300 bg-rose-500/15 border border-rose-500/30 flex items-center justify-center gap-2 text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
                <span>24/7 Dental Emergency Triage</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-2xl font-semibold text-white glass-button-primary flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
