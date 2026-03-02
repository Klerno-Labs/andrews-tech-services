import { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Initiate a repair request or contact our technical team.",
};

export default function ContactPage() {
  return (
    <div className="py-section max-w-[1440px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Info Side */}
        <div className="space-y-12">
          <div>
            <span className="font-mono text-primary text-sm mb-2 block">ROOT / UPLINK</span>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-text mb-6">
              Establish Connection
            </h1>
            <p className="font-mono text-lg text-text-muted leading-relaxed">
              Submit your device details via the terminal form. For urgent matters or bulk partnerships, use the direct communication channels below.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-[#1a1a1a]">
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-text-muted">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-text">Physical Address</h3>
                <p className="font-mono text-sm text-text-muted mt-1">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-text-muted">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-text">Email Uplink</h3>
                <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-sm text-primary hover:underline mt-1 block">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center text-text-muted">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-text">Voice Line</h3>
                <a href={`tel:${siteConfig.contact.phone}`} className="font-mono text-sm text-primary hover:underline mt-1 block">
                  {siteConfig.contact.phone}
                </a>
                <p className="font-mono text-xs text-text-muted mt-1">Mon-Fri: 09:00 - 18:00 UTC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}