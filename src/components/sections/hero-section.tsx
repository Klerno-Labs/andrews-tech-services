"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-grid-pattern pt-20">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM_READY
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-text">
            Hardware Recovery <br />
            <span className="text-primary">Protocol.</span>
          </h1>

          <p className="font-mono text-lg md:text-xl text-text-muted max-w-lg">
            Quick-turn diagnostics and repair for bulk electronics. We restore broken equipment cheap, making it worth your time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/contact">
                Initiate Request <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/inventory">Check Inventory</Link>
            </Button>
          </div>
          
          <div className="pt-8 border-t border-[#1a1a1a]">
            <p className="font-mono text-xs text-text-muted mb-2">CURRENT QUEUE:</p>
            <div className="font-mono text-sm text-text">
              Processing <span className="text-primary">500+</span> units this week.
            </div>
          </div>
        </motion.div>

        {/* Visual / Schematic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex relative justify-center items-center"
        >
          {/* Abstract Terminal / Schematic representation */}
          <div className="relative w-full h-[500px] border border-[#1a1a1a] bg-[#0A0A0A] rounded-lg p-6 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* Window Controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-green-500 transition-colors cursor-pointer" />
            </div>

            {/* Content */}
            <div className="font-mono text-sm space-y-2 relative z-10">
              <p className="text-text-muted">root@andrews:~$ ./scan_network.sh</p>
              <p className="text-primary">Scanning for devices...</p>
              <div className="space-y-1 mt-4 opacity-70">
                <p>[+] Device: iPhone_13_Pro <span className="text-green-500">[ONLINE]</span></p>
                <p>[+] Device: MacBook_Air_M1 <span className="text-yellow-500">[REPAIRING]</span></p>
                <p>[+] Device: Samsung_S21 <span className="text-green-500">[DONE]</span></p>
                <p>[+] Device: iPad_Pro_12 <span className="text-red-500">[FAILED]</span></p>
              </div>
              <div className="mt-8 flex gap-2">
                <span className="text-primary">➜</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-20 -left-20 w-40 h-40 bg-accent-purple/5 rounded-full blur-2xl pointer-events-none" />
            
            {/* Icon */}
            <div className="absolute bottom-10 right-10 bg-[#030303] border border-[#1a1a1a] p-4 rounded-lg">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}