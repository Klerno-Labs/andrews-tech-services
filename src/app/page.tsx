"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Smartphone, HardDrive, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BentoCard } from "@/components/BentoCard";
import { Ticker } from "@/components/Ticker";
import { TerminalWindow } from "@/components/TerminalWindow";
import { images } from "@/config/images";

export default function Home() {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.15] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-terminal-dim rounded-full bg-terminal-green/5">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              <span className="font-mono text-xs text-terminal-green uppercase tracking-widest">System Online</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Hardware Recovery <br />
              <span className="text-terminal-green cursor">Protocol</span>
            </h1>
            
            <p className="font-mono text-muted text-lg max-w-xl leading-relaxed">
              Quick-turn diagnostics and board-level repair for bulk electronics. 
              Optimized for flippers requiring precision turnaround times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto text-base">
                  Initiate Repair Request
                </Button>
              </Link>
              <Link href="/inventory">
                <Button variant="secondary" className="w-full sm:w-auto text-base">
                  Check Available Assets
                </Button>
              </Link>
            </div>

            <div className="font-mono text-xs text-muted pt-8 border-t border-[#1a1a1a]">
              > SUPPORTED ARCHITECTURES: iOS, ANDROID, WINDOWS NT
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute inset-0 bg-terminal-green/5 rounded-lg border border-terminal-green/20 flex items-center justify-center">
               <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                className="w-full h-full object-cover opacity-60"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-terminal-green/10 blur-[100px]" />
            <div className="absolute top-10 -left-10 w-64 h-64 bg-terminal-green/10 blur-[100px]" />
          </div>
        </div>
      </section>

      {/* System Status Ticker */}
      <Ticker />

      {/* Services Modules (Bento Grid) */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Service Modules</h2>
          <p className="font-mono text-muted">Select protocol to begin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard
            span="span-2"
            icon={Cpu}
            title="Logic Board Repair"
            description="Advanced microsoldering for water damage and short circuits. Tracing faults to the component level."
          />
          <BentoCard
            span="span-1"
            icon={Smartphone}
            title="Screen Replacement"
            description="OLED/LCD refurbishment and glass-only delamination. Grade A++ quality assurance."
          />
          <BentoCard
            span="span-1"
            icon={HardDrive}
            title="Bulk Erasure"
            description="DoD 5220.22-M compliant data sanitization for fleet turnover. Certificate provided."
          />
          <BentoCard
            span="span-2"
            icon={Zap}
            title="Diagnostics & Triage"
            description="Rapid assessment service for bulk lots. Identifies repairable vs. parts-only units efficiently."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-y border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-terminal-green/5" />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <TerminalWindow className="max-w-3xl w-full mb-8">
            <p>> user@flipper:~$ check_profits</p>
            <p className="text-terminal-green">> Calculating potential margin...</p>
            <p>> Result: HIGH</p>
            <p>> user@flipper:~$ run_andrews_tech_repair</p>
            <p className="animate-cursor">&nbsp;</p>
          </TerminalWindow>
          <h2 className="text-4xl font-bold mb-6">Ready to Flip?</h2>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Submit Batch for Diagnostic
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
--- END FILE -->