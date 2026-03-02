import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("max-w-[1440px] mx-auto px-6 w-full", className)}
      {...props}
    />
  )
);
Container.displayName = "Container";

export { Container };