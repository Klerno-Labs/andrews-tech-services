import { Metadata } from "next";
import { InventoryGrid } from "@/components/sections/inventory-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Bulk Inventory",
  description: "Refurbished devices and parts ready for immediate deployment.",
};

export default function InventoryPage() {
  return (
    <>
      <div className="py-section max-w-[1440px] mx-auto px-6 border-b border-[#1a1a1a]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-primary text-sm mb-2 block">ROOT / ASSETS</span>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-text mb-6">
              Available Assets
            </h1>
            <p className="font-mono text-lg text-text-muted max-w-xl">
              Grade A, B, and C refurbished units. Tested, cleaned, and ready for resale or internal deployment.
            </p>
          </div>
        </div>
      </div>
      <InventoryGrid />
      <CTASection 
        href="/contact"
        title="Looking for a specific model?"
        description="Join our waitlist for incoming inventory."
      />
    </>
  );
}