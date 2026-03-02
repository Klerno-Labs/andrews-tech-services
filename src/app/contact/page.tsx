import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Initiate a repair request or contact our support team.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen pb-24">
      <div className="bg-background-surface border-b border-gray-900 py-12 mb-12">
        <Container>
          <div className="text-xs font-mono text-primary mb-4">ROOT / UPLINK</div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
            Establish Connection
          </h1>
          <p className="text-lg text-gray-400 font-mono max-w-2xl">
            Send us your diagnostics or repair requests. Our system processes tickets within 2 hours during business operations.
          </p>
        </Container>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-sans font-bold mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.contact.email}`} className="block group">
                  <div className="flex items-start gap-4 p-4 border border-gray-800 hover:border-primary/50 transition-colors bg-background">
                    <div className="p-3 bg-primary/10 text-primary rounded-sm">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-500 mb-1">EMAIL PROTOCOL</div>
                      <div className="text-lg text-gray-200 group-hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone}`} className="block group">
                  <div className="flex items-start gap-4 p-4 border border-gray-800 hover:border-primary/50 transition-colors bg-background">
                    <div className="p-3 bg-primary/10 text-primary rounded-sm">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-500 mb-1">VOICE LINE</div>
                      <div className="text-lg text-gray-200 group-hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-sans font-bold mb-6">Base Coordinates</h3>
              <div className="p-6 border border-gray-800 bg-background relative overflow-hidden group">
                {/* Decorative map grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div className="text-sm font-mono text-gray-400">
                      {siteConfig.contact.address}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800 mt-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div className="text-sm font-mono text-gray-400">
                        <div className="text-gray-200 mb-1">OPERATING HOURS</div>
                        <div>Mon-Fri: 08:00 - 18:00 PST</div>
                        <div>Sat: 10:00 - 14:00 PST</div>
                        <div>Sun: System Maintenance Only</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-32">
            <ContactForm />
          </div>

        </div>
      </Container>
    </div>
  );
}