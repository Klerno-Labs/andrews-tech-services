import Hero from "@/components/Hero";
import LogTicker from "@/components/LogTicker";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";
import PricingTable from "@/components/PricingTable";
import TerminalContact from "@/components/TerminalContact";
import { Smartphone, Cpu, HardDrive, Shield, Wrench, Monitor } from "lucide-react";
import { images } from "@/config/images";

const services: ServiceCardProps[] = [
  {
    title: "Logic Board Repair",
    description: "Chip-level microsoldering for water damage and short circuits. High-margin repairs for advanced flippers.",
    icon: Cpu,
    span: "md:col-span-2",
    delay: 100,
  },
  {
    title: "Screen Replacement",
    description: "OLED and LCD replacements for phones and tablets. Quick 1-hour turnaround for bulk orders.",
    icon: Smartphone,
    delay: 200,
  },
  {
    title: "Battery Services",
    description: "Internal battery replacement and health optimization. Restores device longevity and resale value.",
    icon: HardDrive,
    delay: 300,
  },
  {
    title: "Bulk Data Wiping",
    description: "DoD 5220.22-M compliant erasure for large lots. Safe, certified, and documented for compliance.",
    icon: Shield,
    delay: 400,
  },
  {
    title: "Diagnostic Triaging",
    description: "Rapid testing of pallet returns to separate salvageable units from parts-only stock.",
    icon: Wrench,
    delay: 500,
  },
  {
    title: "Housing & Refurb",
    description: "Cosmetic restoration including chassis replacement, polishing, and detailing.",
    icon: Monitor,
    span: "md:col-span-2",
    delay: 600,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <LogTicker />
      
      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-2 block">Modules</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4 tracking-tight">Service Protocols</h2>
          <p className="text-muted max-w-2xl mx-auto font-mono text-sm">
            Select a recovery operation. Our technicians are certified in iOS, Android, and Windows board architecture.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-background-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1">
              <span className="font-mono text-xs text-primary tracking-widest uppercase mb-2 block">Cost Matrix</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">Service Rates</h2>
              <p className="text-muted font-mono text-sm leading-relaxed mb-8">
                Transparent pricing for high-volume partners. Bulk discounts apply for orders over 50 units. All repairs include a 90-day warranty on workmanship.
              </p>
              <div className="bg-background p-6 border border-primary/20 rounded-sm">
                <h4 className="text-primary font-mono text-sm font-bold mb-2">PARTNER PROGRAM</h4>
                <p className="text-xs text-muted mb-4">Join our flipper network for reduced rates and priority processing.</p>
                <a href="#contact" className="block w-full text-center py-2 bg-primary text-black font-mono text-xs font-bold uppercase hover:bg-white transition-colors">
                  Apply for Access
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <PricingTable />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-background relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-2 block">Communication</span>
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4 tracking-tight">Initiate Contact</h2>
          <p className="text-muted font-mono text-sm max-w-xl mx-auto">
            Submit your hardware specifications below. Include device model, quantity, and observed defects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <TerminalContact />
        </div>
      </section>
    </>
  );
}