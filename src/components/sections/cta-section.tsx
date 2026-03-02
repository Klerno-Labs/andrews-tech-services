import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTASection({ 
  title = "Ready to restore your hardware?",
  description = "Initiate the repair protocol today.",
  href = "/contact",
  className 
}: { 
  title?: string; 
  description?: string; 
  href?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-section border-t border-[#1a1a1a]", className)}>
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="font-sans text-3xl md:text-5xl font-bold text-text mb-4">
          {title}
        </h2>
        <p className="font-mono text-lg text-text-muted max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Button size="lg" className="gap-2" asChild>
          <Link href={href}>
            Start Now <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}