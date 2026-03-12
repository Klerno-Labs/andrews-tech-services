"use client";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { images } from "@/config/images";
import { Image as ImageIcon, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Board Level Repair",
    description: "Microsoldering and logic board diagnostics. We fix what others call 'unfixable'. High margin recovery for water damage and short circuits.",
    icon: <Cpu className="h-6 w-6" />,
    span: &quot;col-span-1 md:col-span-2",
    imageSlot: "service-1" as const,
  },
  {
    title: "Screen Replacement",
    description: "Premium OEM quality glass and LCD swaps for phones and tablets. Bulk discounts available for lots of 10+.",
    icon: <ImageIcon className="h-6 w-6" />,
    span: &quot;col-span-1",
    imageSlot: "service-2" as const,
  },
  {
    title: "Bulk Erasure",
    description: "NIST 800-88 compliant data sanitization. Certificates provided for every batch. Secure and compliant.",
    icon: <Shield className="h-6 w-6" />,
    span: &quot;col-span-1",
    imageSlot: null,
  },
  {
    title: "Rapid Diagnostics",
    description: "Automated testing suites identify faults in minutes. Detailed reports provided for every asset.",
    icon: <Zap className="h-6 w-6" />,
    span: &quot;col-span-1 md:col-span-2",
    imageSlot: "service-3" as const,
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 bg-background-surface border-y border-gray-900">
      <Container>
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Service Modules</h2>
          <p className="text-gray-400 font-mono max-w-2xl">
            Select a recovery protocol to begin. Our systems are optimized for volume processing and high-yield restoration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className={feature.span}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="h-full bg-background border border-gray-800 p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-primary font-mono text-xs">[ACTIVE]</div>
                </div>
                
                <div className="mb-6 text-primary bg-primary/5 w-fit p-3 rounded-sm">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-sans font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed mb-6">
                  {feature.description}
                </p>

                {feature.imageSlot && (
                  <div className="mt-4 relative h-32 w-full overflow-hidden rounded-sm border border-gray-800">
                    <Image 
                      src={images[feature.imageSlot].src}
                      alt={images[feature.imageSlot].alt}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}