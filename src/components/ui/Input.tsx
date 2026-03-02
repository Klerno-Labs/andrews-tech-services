import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="relative w-full group">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-xs text-terminal-muted mb-2 font-mono uppercase tracking-widest group-focus-within:text-terminal-primary transition-colors"
          >
            {label} &gt;
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full bg-terminal-bg border-b border-terminal-border py-3 text-terminal-text font-mono focus:outline-none focus:border-terminal-primary transition-colors placeholder-terminal-border/50",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-xs font-mono mt-1">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";