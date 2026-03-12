"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  span?: "span-1" | "span-2";
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon: Icon,
  span = "span-1",
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative bg-panel border border-[#1a1a1a] p-6 hover:border-terminal-green transition-colors duration-300 group overflow-hidden",
        {
          "md:col-span-1": span === "span-1",
          "md:col-span-2": span === "span-2",
        },
        className
      )}
    >
      {/* Active Indicator */}
      <div className="absolute top-0 right-0 p-2 text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-mono text-xs">[ACTIVE]</span>
      </div>

      {/* Scanline Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-void border border-terminal-dim flex items-center justify-center text-terminal-green mb-4 rounded-sm">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-sans font-bold text-text-main mb-2 group-hover:text-terminal-green transition-colors">
          {title}
        </h3>
        <p className="text-muted font-mono text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
