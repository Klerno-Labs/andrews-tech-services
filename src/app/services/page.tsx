import { PricingTable } from "@/components/sections/pricing-table";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "View our service cost matrix and repair capabilities.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 pb-12 border-b border-gray-900 bg-background-surface">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-primary mb-4">ROOT / SERVICES</div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              Service Cost Matrix
            </h1>
            <p className="text-lg text-gray-400 font-mono">
              Transparent pricing for every recovery protocol. We specialize in high-margin logic board repairs and bulk liquidation services.
            </p>
          </div>
        </Container>
      </div>
      <PricingTable />
      <CTASection 
        title="Need a custom quote?"
        description="Bulk lots or specific industrial equipment? Contact our engineering team directly."
      />
    </>
  );
}