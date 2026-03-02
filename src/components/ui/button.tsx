import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-sans font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]": variant === "primary",
            "bg-transparent border border-primary text-primary hover:bg-primary hover:text-black": variant === "secondary",
            "text-text-muted hover:text-white underline decoration-[#333] hover:decoration-primary underline-offset-4": variant === "ghost",
          },
          {
            "h-8 px-4 text-xs rounded-sm": size === "sm",
            "h-10 px-6 text-sm rounded-md": size === "md",
            "h-12 px-8 text-base rounded-lg": size === "lg",
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