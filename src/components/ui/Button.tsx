import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-terminal-green text-black hover:bg-terminal-dim shadow-[0_0_10px_rgba(0,255,65,0.3)] hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] py-3 px-8 font-bold":
              variant === "primary",
            "border border-terminal-green text-terminal-green hover:bg-terminal-green/10 py-3 px-8":
              variant === "secondary",
            "text-muted hover:text-text-main underline decoration-muted hover:decoration-terminal-green underline-offset-4":
              variant === "ghost",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
--- END FILE -->