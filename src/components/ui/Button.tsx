import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "font-sans font-bold py-3 px-8 transition-all duration-300 text-sm tracking-wider uppercase";
    
    const variants = {
      primary: "bg-terminal-primary text-black hover:bg-terminal-secondary hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] border border-transparent",
      secondary: "bg-transparent border border-terminal-primary text-terminal-primary hover:bg-terminal-primary hover:text-black",
      ghost: "text-terminal-muted hover:text-terminal-text underline decoration-terminal-border hover:decoration-terminal-primary underline-offset-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";