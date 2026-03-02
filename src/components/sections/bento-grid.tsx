"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, Smartphone, HardDrive, Activity } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Board Level Repair",
    description: "Microsoldering and logic board diagnostics for complex hardware failures.",
    icon: <Cpu className="w-6 h-6" />,
    span: "col-span-1 lg:col-span-2",
    link: "/services",
  },
  {
    title: "Screen Replacement",
    description: "High-quality LCD/OLED swaps for phones, tablets, and laptops.",
    icon: <Smartphone className="w-6 h-6" />,
    span: "col-span-1",
    link: "/services",
  },
  {
    title: "Bulk Data Erasure",
    description: "Secure NIST 800-88 compliant wiping for enterprise fleet turnover.",
    icon: <HardDrive className="w-6 h-6" />,
    span: "col-span-1",
    link: "/services",
  },
  {
    title: "Diagnostics",
    description: "Full system analysis to pinpoint exact failure points before repair.",
    icon: <Activity className="w-6 h-6" />,
    span: "col-span-1 lg:col-span-2",
    link: "/services",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function BentoGrid() {
  return (
    <section className="py-section bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-[#0A0A0A] border border-[#1a1a1a] p-6 hover:border-primary transition-colors duration-300 overflow-hidden",
                feature.span
              )}
            >
              <Link href={feature.link} className="absolute inset-0 z-10">
                <span className="sr-only">View {feature.title}</span>
              </Link>
              
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-0" />

              <div className="relative z-20 h-full flex flex-col">
                <div className="w-12 h-12 bg-[#030303] border border-[#008F11] flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-sans text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Corner Bracket */}
                <div className="mt-auto pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-xs text-primary">[ACCESS]</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}