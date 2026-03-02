"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  span?: "col-span-1" | "md:col-span-2" | "lg:col-span-2";
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, span = "col-span-1", delay = 0 }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "relative bg-background-surface border border-border p-8 hover:border-primary transition-colors duration-300 group overflow-hidden opacity-0 animate-fade-up",
        span
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Active Corner Brackets */}
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-primary font-mono text-xs">[+]</span>
      </div>

      {/* Scanline overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out" />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-background border border-primary-dark flex items-center justify-center text-primary mb-6 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-shadow">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-text mb-3 font-sans tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted font-mono text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}