"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { ArrowDown, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const typewriterText = "HARDWARE RECOVERY PROTOCOL";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + typewriterText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-[0.05] pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-dark bg-primary/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs text-primary tracking-wider">SYSTEM ONLINE</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight text-text">
            {displayText}
            <span className="animate-cursor-blink text-primary">_</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 font-mono leading-relaxed">
            Quick-turn diagnostics and board-level repair for bulk electronics. We restore value to your broken inventory efficiently and securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-black font-mono font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-primary-dark hover:text-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Initiate Repair Request
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-background/10"></div>
            </a>
            <a
              href="#inventory"
              className="px-8 py-4 border border-primary text-primary font-mono font-bold text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors"
            >
              Check Inventory
            </a>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-text font-mono">5k+</div>
              <div className="text-xs text-muted uppercase tracking-widest">Units Fixed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text font-mono">24h</div>
              <div className="text-xs text-muted uppercase tracking-widest">Avg Turnaround</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text font-mono">99%</div>
              <div className="text-xs text-muted uppercase tracking-widest">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative lg:h-full min-h-[400px] hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative circles */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Central Image/Graphic Container */}
            <div className="absolute inset-8 bg-background-surface border border-border rounded-lg overflow-hidden shadow-[0_0_50px_-10px_rgba(0,255,65,0.1)] group hover:border-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Cpu className="w-32 h-32 text-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
              {/* Technical Overlay UI */}
              <div className="absolute top-4 left-4 font-mono text-xs text-primary/70">
                CPU: 4%<br/>MEM: 12GB<br/>NET: CONNECTED
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/70 text-right">
                STATUS: SCANNING<br/>TARGET: MOBILE<br/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary" />
      </div>
    </section>
  );
}