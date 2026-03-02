"use client";

import { repairLogs } from "@/lib/data";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function StatusTicker() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#050505] overflow-hidden py-4">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-8">
        <div className="flex-shrink-0">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            System Log
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-6">
          <motion.div 
            className="absolute left-0 flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...repairLogs, ...repairLogs].map((log, i) => (
              <div key={i} className="inline-flex items-center gap-3 font-mono text-sm text-text-muted border-l border-[#333] pl-3">
                <span className="text-text">{log.device}</span>
                {log.status === 'FIXED' ? (
                  <span className="text-primary flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    FIXED
                  </span>
                ) : (
                  <span className="text-text-muted flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    PROCESSING
                  </span>
                )}
                <span className="opacity-50">// {log.time}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}