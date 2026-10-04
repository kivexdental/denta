import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/dentalData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Matching Inspiration) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Patient Clarifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-slate-300/90 leading-relaxed">
                Clear answers regarding treatments, anesthesia comfort, recovery times, and dental insurance claims.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white glass-pill hover:bg-white/20 transition-all border border-white/25 group"
              >
                <span>Ask a Question</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS_DATA.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`glass-panel-subtle rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-cyan-400/40 bg-white/10 shadow-lg' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full glass-pill flex items-center justify-center shrink-0 text-slate-300">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-cyan-400" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in slide-in-from-top-1 duration-200"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
