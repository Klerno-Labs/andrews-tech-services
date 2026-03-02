import { HeroSection } from "@/components/sections/hero-section";
import { StatusTicker } from "@/components/sections/status-ticker";
import { BentoGrid } from "@/components/sections/bento-grid";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatusTicker />
      <BentoGrid />
      <CTASection 
        description="Volume pricing available for fleets and bulk orders."
        href="/inventory"
        title="Need bulk inventory?"
      />
    </>
  );
}