import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  link?: string;
}

export function CTASection({
  title = "Ready to restore your assets?",
  description = "Initiate the recovery protocol today and turn dead stock into profit.",
  buttonText = "Start Repair Request",
  link = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="border border-primary/20 bg-background-surface/80 backdrop-blur-sm p-8 md:p-16 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-sans font-bold">
              {title}
            </h2>
            <p className="text-gray-400 font-mono text-lg">
              {description}
            </p>
          </div>
          
          <Button variant="primary" size="lg" className="whitespace-nowrap group" asChild>
            <a href={link}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}