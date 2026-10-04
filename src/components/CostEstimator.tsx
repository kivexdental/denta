import React, { useState } from 'react';
import { Calculator, ShieldCheck, CreditCard, ArrowRight, Check } from 'lucide-react';

interface CostEstimatorProps {
  onOpenBooking: () => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<'whitening' | 'implant' | 'veneer' | 'checkup'>('whitening');
  const [insuranceTier, setInsuranceTier] = useState<'none' | 'ppo50' | 'ppo80'>('none');
  const [quantity, setQuantity] = useState(1);

  const baseCosts = {
    whitening: { name: 'Laser Teeth Whitening', base: 280, unit: 'session', maxUnits: 2 },
    implant: { name: 'Guided Dental Implant & Crown', base: 1800, unit: 'tooth', maxUnits: 4 },
    veneer: { name: 'Porcelain Aesthetic Veneer', base: 650, unit: 'veneer', maxUnits: 8 },
    checkup: { name: 'Comprehensive Exam & Prophylaxis', base: 140, unit: 'patient', maxUnits: 4 },
  };

  const current = baseCosts[selectedService];
  const rawTotal = current.base * quantity;

  // Insurance discount calculation
  let coverageDiscount = 0;
  if (insuranceTier === 'ppo50') coverageDiscount = rawTotal * 0.50;
  else if (insuranceTier === 'ppo80') coverageDiscount = rawTotal * 0.80;
  else coverageDiscount = rawTotal * 0.10; // 10% self-pay courtesy

  const estimatedPatientOop = Math.max(25, Math.round(rawTotal - coverageDiscount));
  const monthlyFinance12Mo = Math.round(estimatedPatientOop / 12);

  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-2">
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Transparent Pricing Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Treatment Cost Estimator
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              No hidden fees. Select your treatment and insurance to calculate clear, transparent estimates in seconds.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Price Lock for 60 Days</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Select Treatment */}
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-300 block mb-3">
                1. Select Dental Procedure
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['whitening', 'implant', 'veneer', 'checkup'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedService(key);
                      setQuantity(1);
                    }}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedService === key
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/15'
                        : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold block">{baseCosts[key].name}</span>
                    <span className="text-[11px] text-cyan-300 font-medium mt-1 block">
                      From ${baseCosts[key].base}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Quantity slider / buttons */}
            {current.maxUnits > 1 && (
              <div className="glass-panel-subtle p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Number of {current.unit}s
                  </label>
                  <span className="text-sm font-bold text-white px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {quantity} {quantity > 1 ? `${current.unit}s` : current.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={current.maxUnits}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            )}

            {/* 3. Insurance Coverage Option */}
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-slate-300 block mb-3">
                2. Your Insurance Coverage Plan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => setInsuranceTier('none')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    insuranceTier === 'none'
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg'
                      : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Self-Pay / Cash</span>
                    {insuranceTier === 'none' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] text-emerald-400 mt-1 block">
                    Includes 10% Cash Courtesy
                  </span>
                </button>

                <button
                  onClick={() => setInsuranceTier('ppo50')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    insuranceTier === 'ppo50'
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg'
                      : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Standard PPO</span>
                    {insuranceTier === 'ppo50' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] text-cyan-300 mt-1 block">
                    ~50% Procedure Coverage
                  </span>
                </button>

                <button
                  onClick={() => setInsuranceTier('ppo80')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    insuranceTier === 'ppo80'
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg'
                      : 'glass-panel-subtle border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Premium PPO</span>
                    {insuranceTier === 'ppo80' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] text-cyan-300 mt-1 block">
                    Up to ~80% Coverage
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Price Calculation Output Glass Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/25 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  Estimated Out-of-Pocket
                </span>
                <h4 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  ${estimatedPatientOop.toLocaleString()}
                </h4>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Transparent
              </span>
            </div>

            {/* Breakdown Table */}
            <div className="py-4 space-y-2.5 text-xs text-slate-300 border-b border-white/10">
              <div className="flex justify-between">
                <span>Standard Procedure Value:</span>
                <span className="text-slate-100 font-medium">${rawTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>Coverage / Discount Benefit:</span>
                <span>-${Math.round(coverageDiscount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-cyan-300 font-semibold pt-1">
                <span>Your Estimated Cost:</span>
                <span>${estimatedPatientOop.toLocaleString()}</span>
              </div>
            </div>

            {/* 0% APR Financing Callout */}
            <div className="mt-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">
                  Or ${monthlyFinance12Mo}/mo for 12 mos
                </span>
                <span className="text-[11px] text-slate-400">
                  0% APR in-house financing with zero credit impact pre-check.
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-3.5 rounded-2xl glass-button-primary font-bold text-white text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Lock In Estimate & Book Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
