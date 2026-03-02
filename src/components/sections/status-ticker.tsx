"use client";
import { motion } from "framer-motion";
import { logTickerData } from "@/lib/data";

export function StatusTicker() {
  return (
    <div className="bg-black border-y border-primary/10 overflow-hidden py-3">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-12 animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...logTickerData, ...logTickerData].map((log, i) => (
            <div key={i} className="flex items-center gap-4 font-mono text-sm text-primary/70">
              <span className="text-primary/30">●</span>
              {log}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}