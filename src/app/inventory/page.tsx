import { InventoryGrid } from "@/components/sections/inventory-grid";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Inventory",
  description: "Browse available refurbished assets ready for resale.",
};

export default function InventoryPage() {
  return (
    <>
      <div className="pt-20 pb-12 border-b border-gray-900 bg-background-surface">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-primary mb-4">ROOT / INVENTORY</div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              Available Assets
            </h1>
            <p className="text-lg text-gray-400 font-mono">
              Tested and certified units ready for immediate shipment. Filter by category to find the hardware you need.
            </p>
          </div>
        </Container>
      </div>
      <InventoryGrid />
      <CTASection 
        title="Looking for specific bulk lots?"
        description="We source devices directly from enterprise returns. Set up a buying alert."
        buttonText="Contact Sourcing"
      />
    </>
  );
}