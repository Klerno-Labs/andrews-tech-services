"use client";

import { useEffect, useState } from "react";

const logs = [
  "iPhone 11 Logic Board // FIXED // 2h 14m",
  "Galaxy S22 Screen // REPLACED // 45m",
  "MacBook Air Battery // SWAPPED // 1h 30m",
  "iPad Pro 2021 // DIAGNOSTIC COMPLETE // 15m",
  "iPhone 13 Pro Max // UNLOCK SUCCESS // 30m",
];

export const Ticker = () => {
  // Duplicate logs to ensure smooth infinite scroll
  const displayLogs = [...logs, ...logs, ...logs];

  return (
    <div className="bg-void border-y border-[#1a1a1a] overflow-hidden py-3 w-full">
      <div className="whitespace-nowrap animate-ticker-scroll flex gap-16">
        {displayLogs.map((log, i) => (
          <span key={i} className="font-mono text-xs text-terminal-dim uppercase tracking-wider">
            <span className="text-terminal-green mr-2">●</span> {log}
          </span>
        ))}
      </div>
    </div>
  );
};
--- END FILE -->