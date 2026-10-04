import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, X, ChevronDown } from 'lucide-react';

export type DeviceMode = 'pc' | 'tablet' | 'phone' | 'fullscreen';

interface KivexToolbarProps {
  currentMode: DeviceMode;
  onModeChange: (mode: DeviceMode) => void;
  onClose: () => void;
}

export const KivexToolbar: React.FC<KivexToolbarProps> = ({
  currentMode,
  onModeChange,
  onClose,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const deviceModes: { id: DeviceMode; label: string; icon: React.FC<{ className?: string }>; description: string }[] = [
    { id: 'pc', label: 'PC', icon: Monitor, description: '1280px Desktop View' },
    { id: 'tablet', label: 'Tablet', icon: Tablet, description: '768px Tablet View' },
    { id: 'phone', label: 'Phone', icon: Smartphone, description: '390px Mobile View' },
    { id: 'fullscreen', label: 'Fullscreen', icon: Maximize2, description: '100% Fluid View' },
  ];

  return (
    <header
      className="relative z-[9999] h-[52px] w-full shrink-0 border-b select-none flex items-center justify-between px-4 sm:px-6 shadow-sm"
      style={{
        backgroundColor: '#F5EFE5',
        borderColor: '#E5DAC8',
      }}
      role="banner"
      aria-label="KIVEX Preview Application Toolbar"
    >
      {/* 
        PERMANENT KIVEX BRANDING (LEFT SIDE)
        - "KIVEX": uppercase, bold, strong, #2D5FC7
        - "Technology": smaller, warm yellow/gold #E8B62A
        - Sits directly on #F5EFE5 background (no badge, no pill, no card)
        - Permanent application identity, never replaced by target website
      */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-baseline gap-1.5 cursor-default" title="KIVEX Technology Website Preview">
          <span
            className="text-lg sm:text-xl font-black tracking-tight"
            style={{ color: '#2D5FC7' }}
          >
            KIVEX
          </span>
          <span
            className="text-xs sm:text-sm font-bold tracking-normal"
            style={{ color: '#E8B62A' }}
          >
            Technology
          </span>
        </div>
      </div>

      {/* 
        DEVICE VIEW CONTROLS (CENTER / RIGHT)
        Desktop: Segmented pill controls
        Mobile/Small screen: Dropdown with KIVEX Technology branding preserved
      */}
      <div className="hidden md:flex items-center gap-1.5">
        <nav
          className="flex items-center p-1 rounded-xl border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            borderColor: '#E2D5C3',
          }}
          aria-label="Device viewport preview options"
        >
          {deviceModes.map(({ id, label, icon: Icon }) => {
            const isActive = currentMode === id;
            return (
              <button
                key={id}
                onClick={() => onModeChange(id)}
                aria-pressed={isActive}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] ${
                  isActive
                    ? 'shadow-sm text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: '#2D5FC7',
                        color: '#FFFFFF',
                      }
                    : {}
                }
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Small Screen Device Selector Trigger */}
      <div className="relative md:hidden">
        <button
          onClick={() => setDropdownOpen(prev => !prev)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold text-[#2D5FC7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            borderColor: '#E2D5C3',
          }}
          aria-expanded={dropdownOpen}
          aria-label="Select device preview mode"
        >
          <span className="capitalize">{currentMode}</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

        {/* 
          DEVICE VIEW EXPANDED INTERFACE
          MUST ALSO display KIVEX Technology and retain application identity
        */}
        {dropdownOpen && (
          <div
            className="absolute right-0 top-10 w-64 rounded-2xl shadow-xl border p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            style={{
              backgroundColor: '#F5EFE5',
              borderColor: '#E2D5C3',
            }}
          >
            {/* Header with KIVEX Technology branding */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b" style={{ borderColor: '#E5DAC8' }}>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-black" style={{ color: '#2D5FC7' }}>
                  KIVEX
                </span>
                <span className="text-[11px] font-bold" style={{ color: '#E8B62A' }}>
                  Technology
                </span>
              </div>
              <button
                onClick={() => setDropdownOpen(false)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-800"
                aria-label="Close device menu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1">
              {deviceModes.map(({ id, label, icon: Icon, description }) => {
                const isActive = currentMode === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      onModeChange(id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all ${
                      isActive
                        ? 'text-white font-bold shadow-sm'
                        : 'text-slate-700 hover:bg-black/5 font-medium'
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: '#2D5FC7',
                            color: '#FFFFFF',
                          }
                        : {}
                    }
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{label}</span>
                    </div>
                    <span className={`text-[10px] ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                      {description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 
        CROSS / CLOSE BUTTON
        - MUST KEEP THE CROSS BUTTON.
        - Hides the preview toolbar.
        - No "Open targeted site in new tab" action!
      */}
      <div className="flex items-center gap-2">
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] cursor-pointer"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderColor: '#E2D5C3',
          }}
          title="Close Preview Toolbar"
          aria-label="Close preview toolbar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
