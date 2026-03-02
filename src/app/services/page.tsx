import { Metadata } from "next";
import { PricingTable } from "@/components/sections/pricing-table";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Standardized pricing for hardware repair and diagnostics.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-section max-w-[1440px] mx-auto px-6 border-b border-[#1a1a1a]">
        <div className="max-w-3xl">
          <span className="font-mono text-primary text-sm mb-2 block">ROOT / SERVICES</span>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-text mb-6">
            Service Cost Matrix
          </h1>
          <p className="font-mono text-lg text-text-muted">
            Transparent pricing for quick-turn repairs. We specialize in high-margin logic board restoration for flippers and IT asset management.
          </p>
        </div>
      </div>
      <PricingTable />
      <CTASection 
        href="/contact"
        title="Don't see your issue?"
        description="Run a custom diagnostic."
      />
    </>
  );
}