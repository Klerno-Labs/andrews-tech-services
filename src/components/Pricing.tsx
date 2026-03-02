import React from "react";
import { Check, Clock } from "lucide-react";

const pricingData = [
  { device: "iPhone 11-14", issue: "Screen Replacement", price: "$120", time: "2h", highlight: false },
  { device: "iPhone 12-14 Pro", issue: "Battery Swap", price: "$90", time: "1h", highlight: false },
  { device: "Samsung S Series", issue: "Charge Port", price: "$75", time: "45m", highlight: false },
  { device: "All Android/iOS", issue: "Board Diagnosis", price: "$50", time: "24h", highlight: true },
  { device: "MacBook Air/Pro", issue: "SSD Upgrade", price: "$150+", time: "48h", highlight: false },
  { device: "Windows Laptops", issue: "OS Restore", price: "$80", time: "4h", highlight: false },
];

export const Pricing = () => {
  return (
    <section className="py-32 bg-terminal-surface border-y border-terminal-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl font-bold text-terminal-text mb-4">Service Cost Matrix</h2>
          <p className="font-mono text-terminal-muted">Transparent pricing for volume flippers.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-terminal-border text-terminal-muted font-mono text-xs uppercase tracking-widest">
                <th className="pb-4 pl-4">Device</th>
                <th className="pb-4">Issue</th>
                <th className="pb-4">Base Price</th>
                <th className="pb-4 pr-4 text-right">Turnaround</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              {pricingData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`border-b border-terminal-border/50 hover:bg-terminal-bg/50 transition-colors group ${row.highlight ? 'border-l-2 border-l-terminal-primary' : ''}`}
                >
                  <td className="py-4 pl-4 text-terminal-text font-bold">{row.device}</td>
                  <td className="py-4 text-terminal-muted">{row.issue}</td>
                  <td className="py-4 text-terminal-primary">{row.price}</td>
                  <td className="py-4 pr-4 text-right flex items-center justify-end gap-2 text-terminal-muted">
                    <Clock className="w-3 h-3" /> {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex items-start gap-2 text-xs font-mono text-terminal-muted">
          <Check className="w-4 h-4 text-terminal-primary mt-0.5" />
          <p>High margin repairs highlighted. Bulk discounts available for orders of 10+ units.</p>
        </div>
      </div>
    </section>
  );
};