import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/90 py-10 relative overflow-hidden">
      
      {/* Decorative top green-cyan gradient boundary */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-between gap-4 md:flex-row font-mono text-xs text-slate-500">
        
        {/* Left column */}
        <div className="flex items-center gap-2 select-none">
          <ShieldCheck className="h-4 w-4 text-cyber-green animate-pulse-glow" />
          <span>PORTFOLIO STATUS: SECURED</span>
        </div>

        {/* Center column: Copyright */}
        <div className="font-sans leading-relaxed text-slate-400">
          <span>© {currentYear} Shashank Magare. Built with </span>
          <Heart className="h-3 w-3 text-cyber-red fill-cyber-red inline mx-0.5 animate-pulse" />
          <span> passion for Cybersecurity & DevSecOps.</span>
        </div>

        {/* Right column */}
        <div className="flex gap-4 select-none">
          <span>SSL_ENCRYPTED</span>
          <span>•</span>
          <span>HTTP/2 ACTIVE</span>
        </div>

      </div>
    </footer>
  );
}
