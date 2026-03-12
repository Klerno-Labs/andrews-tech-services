"use client";

import React from "react";
import { images } from "@/config/images";
import Image from "next/image";
import { Smartphone, HardDrive, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Board Repair",
    description: "Microsoldering and logic board diagnostics. Tracing shorts and replacing ICs with precision.",
    icon: <Cpu className="w-6 h-6" />,
    span: "md:col-span-2",
    image: "service-1",
  },
  {
    title: "Screen Replacement",
    description: "OEM and aftermarket LCD/OLED swaps for iPhone, Samsung, and iPad devices.",
    icon: <Smartphone className="w-6 h-6" />,
    span: "md:col-span-1",
    image: "service-2",
  },
  {
    title: "Bulk Erasure",
    description: "Secure data wiping for corporate lots and trade-ins. Certificates provided.",
    icon: <HardDrive className="w-6 h-6" />,
    span: "md:col-span-1",
    image: "service-3",
  },
  {
    title: "Diagnostics",
    description: "Comprehensive health checks and fluid detection analysis before purchase.",
    icon: <Zap className="w-6 h-6" />,
    span: "md:col-span-2",
    image: "gallery-1", // Fallback image
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-terminal-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-primary font-mono text-sm tracking-widest mb-2 block">MODULES</span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-terminal-text">Service Matrix</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden border border-terminal-border bg-terminal-surface p-8 hover:border-terminal-primary/50 transition-colors duration-300 ${service.span}`}
            >
              {/* Scanline Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-primary/5 to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 w-12 h-12 border border-terminal-primary/20 flex items-center justify-center text-terminal-primary bg-terminal-primary/5">
                  {service.icon}
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-terminal-text mb-3">{service.title}</h3>
                <p className="font-mono text-terminal-muted text-sm leading-relaxed flex-grow">{service.description}</p>
                
                <div className="mt-6 pt-6 border-t border-terminal-border/30 flex justify-between items-center">
                  <span className="text-xs font-mono text-terminal-primary">ID: SRV_00{index + 1}</span>
                  <span className="w-2 h-2 bg-terminal-border group-hover:bg-terminal-primary transition-colors"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};