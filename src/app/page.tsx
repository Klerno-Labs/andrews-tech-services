import { HeroSection } from "@/components/sections/hero-section";
import { StatusTicker } from "@/components/sections/status-ticker";
import { BentoGrid } from "@/components/sections/bento-grid";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hardware Recovery Protocol for bulk electronics.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatusTicker />
      <BentoGrid />
      <CTASection />
    </>
  );
}