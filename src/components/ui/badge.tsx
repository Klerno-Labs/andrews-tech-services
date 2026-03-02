import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // Using same logic as button
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "border-transparent bg-background-surface text-gray-400 hover:text-gray-200",
        outline: "text-gray-400 border-gray-800",
        gradeA: "border-primary/50 text-primary bg-primary/5",
        gradeB: "border-yellow-500/50 text-yellow-500 bg-yellow-500/5",
        gradeC: "border-accent-error/50 text-accent-error bg-accent-error/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };