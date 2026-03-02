"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  className?: string;
  children: React.ReactNode;
  prompt?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  className,
  children,
  prompt = "root@andrews:~$",
}) => {
  return (
    <div className={cn("w-full bg-void border border-[#333] shadow-2xl overflow-hidden", className)}>
      {/* Header */}
      <div className="bg-panel border-b border-[#333] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#333]" />
          <div className="w-3 h-3 rounded-full bg-[#333]" />
          <div className="w-3 h-3 rounded-full bg-[#333]" />
        </div>
        <div className="ml-2 text-xs text-muted font-mono">{prompt}</div>
      </div>
      {/* Body */}
      <div className="p-6 font-mono text-sm leading-relaxed text-text-main">
        {children}
      </div>
    </div>
  );
};
--- END FILE -->