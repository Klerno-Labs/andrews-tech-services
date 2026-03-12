"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "./ui/Button";
import { ArrowDown, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-terminal-primary/30 rounded-full bg-terminal-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-terminal-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-mono text-terminal-primary uppercase tracking-widest">System Operational</span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-bold leading-tight text-terminal-text">
            HARDWARE <br />
            <span className="text-terminal-primary relative">
              RECOVERY
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-terminal-secondary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> <br />
            PROTOCOL
          </h1>

          <p className="font-mono text-terminal-muted text-lg md:text-xl max-w-lg leading-relaxed">
            Quick-turn diagnostics and repair for bulk electronics. Android, Apple, and Windows restoration optimized for flippers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">
              Initiate Repair
            </Button>
            <Button variant="secondary">
              Check Inventory
            </Button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-terminal-muted mt-8">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-terminal-primary" />
              <span>500+ UNITS PROCESSED</span>
            </div>
            <span className="text-terminal-border">|</span>
            <div className="flex items-center gap-2">
              <span className="text-terminal-primary">●</span>
              <span>24H TURNAROUND</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square border border-terminal-border bg-terminal-surface p-2 rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.05)]">
            {/* Glitch Effect Container */}
            <div className="absolute inset-0 bg-terminal-primary/5 mix-blend-overlay animate-pulse pointer-events-none"></div>
            
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              className="w-full h-full object-cover rounded filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              priority
            />
            
            {/* Overlay UI Elements */}
            <div className="absolute top-4 right-4 font-mono text-xs text-terminal-primary bg-black/80 px-2 py-1 border border-terminal-primary/30">
              SRC: ANDREWS_MAIN
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-xs text-terminal-muted">
              <span>ISO: 800</span>
              <span>APERTURE: f/1.8</span>
              <span>SHUTTER: 1/2000</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-terminal-muted"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-terminal-primary" />
      </motion.div>
    </section>
  );
};