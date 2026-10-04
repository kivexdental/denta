import React, { useState, useEffect } from 'react';
import { KivexToolbar, DeviceMode } from './KivexToolbar';
import { Eye, RotateCcw } from 'lucide-react';

export const PreviewApp: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('fullscreen');
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Read initial device mode from localStorage if present
  useEffect(() => {
    const savedMode = localStorage.getItem('kivex_preview_mode') as DeviceMode | null;
    if (savedMode && ['pc', 'tablet', 'phone', 'fullscreen'].includes(savedMode)) {
      setDeviceMode(savedMode);
    }
  }, []);

  const handleModeChange = (mode: DeviceMode) => {
    setDeviceMode(mode);
    try {
      localStorage.setItem('kivex_preview_mode', mode);
    } catch {
      // ignore
    }
  };

  const handleRefreshPreview = () => {
    setIframeKey(prev => prev + 1);
  };

  // Build the target standalone preview URL
  const getPreviewUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('standalone', 'true');
    return url.toString();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-slate-100 overflow-hidden font-sans">
      {/* 
        PERMANENT KIVEX PREVIEW APPLICATION TOOLBAR
      */}
      {isToolbarVisible && (
        <KivexToolbar
          currentMode={deviceMode}
          onModeChange={handleModeChange}
          onClose={() => setIsToolbarVisible(false)}
        />
      )}

      {/* 
        REOPEN TOOLBAR FLOATING CONTROL
        Shown only when toolbar is hidden.
        Allows user to reopen toolbar and restore view controls.
      */}
      {!isToolbarVisible && (
        <div className="fixed top-3 left-3 z-[9999] flex items-center gap-2">
          <button
            onClick={() => setIsToolbarVisible(true)}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-xl transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            style={{
              backgroundColor: '#F5EFE5',
              borderColor: '#E2D5C3',
            }}
            title="Reopen KIVEX Technology Preview Toolbar"
            aria-label="Reopen KIVEX Technology Preview Toolbar"
          >
            <div className="w-5 h-5 rounded-full bg-[#2D5FC7] flex items-center justify-center text-white text-[11px] font-black">
              K
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-black" style={{ color: '#2D5FC7' }}>
                KIVEX
              </span>
              <span className="text-[10px] font-bold" style={{ color: '#E8B62A' }}>
                Preview
              </span>
            </div>
          </button>
        </div>
      )}

      {/* 
        PREVIEW WORKSPACE
        Centers the device frame or provides 100% fullscreen container.
      */}
      <main
        className={`flex-1 flex flex-col items-center justify-start overflow-auto relative ${
          deviceMode === 'fullscreen' ? 'p-0' : 'p-3 sm:p-6 md:p-8'
        }`}
        style={{
          background: deviceMode === 'fullscreen' ? 'transparent' : 'radial-gradient(circle at center, #161f2e 0%, #0a0d14 100%)',
        }}
      >
        {/* Device Frame Viewport Container */}
        {deviceMode === 'phone' && (
          <div className="flex flex-col items-center my-auto animate-in zoom-in-95 duration-200">
            {/* Phone Bezel Frame */}
            <div
              className="relative rounded-[48px] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-[4px] border-[#384152] bg-[#1e2532]"
              style={{ width: '414px', height: '868px' }}
            >
              {/* Dynamic Island / Notch Mockup */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111928] border border-slate-700/50" />
              </div>

              {/* Real 390px Viewport Iframe Container */}
              <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-slate-950 relative">
                <iframe
                  key={iframeKey}
                  src={getPreviewUrl()}
                  title="Dental Clinic Phone Preview (390px Viewport)"
                  className="w-[390px] h-[844px] border-0"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-30 pointer-events-none" />
            </div>

            {/* Viewport Meta Label */}
            <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono font-medium">Phone: 390 × 844 px (100% Real Viewport)</span>
              <button
                onClick={handleRefreshPreview}
                className="hover:text-cyan-300 transition-colors p-1"
                title="Reload Preview"
                aria-label="Reload Preview"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {deviceMode === 'tablet' && (
          <div className="flex flex-col items-center my-auto animate-in zoom-in-95 duration-200">
            {/* Tablet Bezel Frame */}
            <div
              className="relative rounded-[36px] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-[4px] border-[#384152] bg-[#1e2532]"
              style={{ width: '800px', height: '1056px' }}
            >
              {/* Front Camera Dot */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-black border border-slate-700/60 z-30" />

              {/* Real 768px Viewport Iframe Container */}
              <div className="w-[768px] h-[1024px] rounded-[24px] overflow-hidden bg-slate-950 relative">
                <iframe
                  key={iframeKey}
                  src={getPreviewUrl()}
                  title="Dental Clinic Tablet Preview (768px Viewport)"
                  className="w-[768px] h-[1024px] border-0"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Viewport Meta Label */}
            <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono font-medium">Tablet: 768 × 1024 px (100% Real Viewport)</span>
              <button
                onClick={handleRefreshPreview}
                className="hover:text-cyan-300 transition-colors p-1"
                title="Reload Preview"
                aria-label="Reload Preview"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {deviceMode === 'pc' && (
          <div className="flex flex-col items-center w-full max-w-[1320px] my-auto animate-in zoom-in-95 duration-200">
            {/* Desktop Mockup Frame */}
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] border border-slate-700/80 bg-[#161c27]">
              {/* Browser Window Title Bar */}
              <div className="h-9 px-4 bg-[#1e2634] border-b border-slate-700/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-6 py-0.5 rounded-md bg-[#131922] text-[11px] font-mono text-slate-400 border border-slate-700/40 flex items-center gap-2">
                  <Eye className="w-3 h-3 text-cyan-400" />
                  <span>denta-clinic.com</span>
                </div>
                <button
                  onClick={handleRefreshPreview}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  title="Reload Preview"
                  aria-label="Reload Preview"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Real Desktop Viewport Iframe Container */}
              <div className="w-full h-[780px] bg-slate-950">
                <iframe
                  key={iframeKey}
                  src={getPreviewUrl()}
                  title="Dental Clinic Desktop PC Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Viewport Meta Label */}
            <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono font-medium">Desktop Viewport (1280px Grid)</span>
            </div>
          </div>
        )}

        {deviceMode === 'fullscreen' && (
          <div className="w-full h-full flex-1">
            <iframe
              key={iframeKey}
              src={getPreviewUrl()}
              title="Dental Clinic Fullscreen Preview"
              className="w-full h-full border-0 block"
            />
          </div>
        )}
      </main>
    </div>
  );
};
