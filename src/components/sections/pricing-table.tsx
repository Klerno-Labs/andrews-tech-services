"use client";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { servicesData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";

export function PricingTable() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Service Cost Matrix</h2>
          <p className="text-gray-400 font-mono">Standard pricing for bulk recovery operations.</p>
        </div>

        <div className="overflow-x-auto border border-gray-800 rounded-sm">
          <table className="w-full text-left">
            <thead className="bg-background-surface">
              <tr>
                <th className="p-4 font-mono text-xs text-gray-500 tracking-wider uppercase">Device</th>
                <th className="p-4 font-mono text-xs text-gray-500 tracking-wider uppercase">Issue</th>
                <th className="p-4 font-mono text-xs text-gray-500 tracking-wider uppercase text-right">Cost</th>
                <th className="p-4 font-mono text-xs text-gray-500 tracking-wider uppercase">Turnaround</th>
                <th className="p-4 font-mono text-xs text-gray-500 tracking-wider uppercase">Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-900">
              {servicesData.map((service, idx) => (
                <motion.tr
                  key={service.id}
                  className="hover:bg-background-surface/50 transition-colors group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <td className="p-4 text-sm font-medium text-gray-200">{service.device}</td>
                  <td className="p-4 text-sm text-gray-400 font-mono">{service.issue}</td>
                  <td className="p-4 text-sm text-primary font-mono text-right font-bold">
                    {formatCurrency(service.price)}
                  </td>
                  <td className="p-4 text-sm text-gray-400 font-mono">
                    {service.turnaround}
                  </td>
                  <td className="p-4 text-right">
                    {service.margin === "high" ? (
                      <Badge variant="gradeA">High Yield</Badge>
                    ) : (
                      <Badge variant="outline">Standard</Badge>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-center">
          <p className="text-xs font-mono text-gray-500">
            * Volume discounts available for orders over 50 units. Contact for bulk pricing.
          </p>
        </div>
      </Container>
    </section>
  );
}