"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Cpu } from "lucide-react";
import { images } from "@/config/images";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.03] pointer-events-none z-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight leading-[1.1]">
              Hardware<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
                Recovery
              </span>
              <br/>
              Protocol
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-mono max-w-lg leading-relaxed">
              Quick-turn diagnostics and repair for bulk electronics. Optimized for flippers and bulk liquidators. We restore value to dead assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="group" asChild>
                <a href="/contact">
                  Initiate Repair
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/inventory">Check Inventory</a>
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-800 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary font-sans">500+</div>
                <div className="text-xs text-gray-500 font-mono mt-1">Units Reclaimed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-sans">24h</div>
                <div className="text-xs text-gray-500 font-mono mt-1">Avg Turnaround</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-sans">100%</div>
                <div className="text-xs text-gray-500 font-mono mt-1">Data Wipe</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-sm overflow-hidden border border-gray-800 bg-background-surface shadow-2xl">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                className="w-full h-auto object-cover opacity-80 mix-blend-screen"
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-background/80 backdrop-blur px-4 py-2 border-l-2 border-primary">
                    <div className="text-xs font-mono text-primary">SCANNING...</div>
                  </div>
                  <Cpu className="h-8 w-8 text-primary/50" />
                </div>
                
                {/* Decorative Floating Elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-24 h-24 border border-primary/40 rounded-full"></div>
                </motion.div>

                <div className="bg-background/90 backdrop-blur-sm border border-gray-700 p-4 font-mono text-xs text-gray-400 max-w-xs">
                  > DETECTED: iPhone 12 Pro Max<br/>
                  > BATTERY HEALTH: 84%<br/>
                  > IC CLOUD: LOCKED<br/>
                  > STATUS: READY FOR RECOVERY
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}