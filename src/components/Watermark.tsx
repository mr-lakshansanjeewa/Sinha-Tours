import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const Watermark: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <>
      {/* Subtle Full-Screen Background Diagonal Repeating Watermark (Screenshots & Ownership Protection) */}
      <div
        className="fixed inset-0 pointer-events-none select-none z-20 overflow-hidden opacity-[0.028] flex flex-wrap content-center justify-center gap-24 sm:gap-36"
        aria-hidden="true"
      >
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="transform -rotate-24 text-stone-900 font-extrabold tracking-widest text-3xl sm:text-5xl uppercase font-display whitespace-nowrap"
          >
            Lucky • Sinha Tours
          </div>
        ))}
      </div>

      {/* Floating Interactive Ownership Watermark Seal in Bottom Corner */}
      <aside
        aria-label="Page Ownership Watermark"
        className="fixed bottom-4 left-4 z-40 select-none transition-all duration-300 group"
      >
        {minimized ? (
          <button
            onClick={() => setMinimized(false)}
            title="Page owned by Lucky - click to expand"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-950/90 hover:bg-stone-900 text-amber-400 border border-amber-500/40 rounded-full shadow-xl backdrop-blur-md text-xs font-bold transition-transform hover:scale-105 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lucky</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 px-3.5 py-2 bg-stone-950/92 hover:bg-stone-950 text-stone-100 border border-amber-500/40 rounded-2xl shadow-2xl backdrop-blur-md text-xs">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-black shadow">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            </div>

            <div className="flex flex-col pr-1">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white tracking-wide font-display text-[13px]">
                  Lucky
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  <CheckCircle2 className="w-2.5 h-2.5 mr-0.5 text-amber-400" />
                  Owner
                </span>
              </div>
              <span className="text-[10px] text-stone-400 font-medium -mt-0.5">
                Page Property of Lucky
              </span>
            </div>

            <button
              onClick={() => setMinimized(true)}
              title="Minimize watermark"
              className="text-stone-500 hover:text-stone-300 ml-1 p-0.5 rounded cursor-pointer"
            >
              ×
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
