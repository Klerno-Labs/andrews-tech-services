import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "grade" | "status";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium border",
        {
          "border-primary/20 bg-primary/10 text-primary": variant === "default",
          "border-accent-red/20 bg-accent-red/10 text-accent-red": variant === "status",
        },
        {
          "border-primary bg-primary text-black": variant === "grade",
        },
        className
      )}
      {...props}
    />
  );
}