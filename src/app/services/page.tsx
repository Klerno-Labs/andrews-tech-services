"use client";

import { motion } from "framer-motion";
import { DataTable } from "@/components/DataTable";
import { TerminalWindow } from "@/components/TerminalWindow";

const serviceData = [
  { device: "iPhone (7-14)", issue: "Screen Replacement", price: "$45 - $120", time: "30m - 1h", margin: true },
  { device: "iPhone (7-14)", issue: "Battery Swap", price: "$25 - $60", time: "15m - 30m", margin: true },
  { device: "Samsung S-Series", issue: "Screen (AMOLED)", price: "$80 - $180", time: "1h", margin: false },
  { device: "All Devices", issue: "Diagnostic Fee", price: "$15", time: "15m", margin: false },
  { device: "MacBook/Air", issue: "Keyboard/Trackpad", price: "$80 - $150", time: "2h+", margin: true },
  { device: "Windows Laptop", issue: "OS Reinstall/Recovery", price: "$40", time: "1h - 2h", margin: false },
  { device: "Bulk Lot", issue: "Per-Unit Triage", price: "$5/unit", time: "24h Turnaround", margin: true },
];

export default function ServicesPage() {
  const columns = [
    { key: "device", label: "Device Architecture" },
    { key: "issue", label: "Protocol / Service" },
    { key: "price", label: "Cost Basis", align: "right" as const },
    { key: "time", label: "Cycle Time", align: "right" as const },
  ];

  return (
    <div className="animate-fade-up max-w-[1440px] mx-auto px-6 py-12">
      <header className="mb-16 border-b border-[#1a1a1a] pb-8">
        <div className="font-mono text-terminal-green text-sm mb-4">ROOT / SERVICES</div>
        <h1 className="text-5xl font-bold mb-6">Service Cost Matrix</h1>
        <p className="font-mono text-muted max-w-2xl text-lg">
          Transparent pricing for rapid repair cycles. High margin items identified for flipping optimization.
        </p>
      </header>

      <section className="mb-24">
        <DataTable 
          columns={columns} 
          rows={serviceData}
          highlightKey="margin"
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TerminalWindow prompt="root@andrews:~$ cat terms.txt">
          <div className="space-y-4">
            <p><span className="text-terminal-green">01.</span> Bulk discounts available for orders of 50+ units.</p>
            <p><span className="text-terminal-green">02.</span> No fix, no fee on standard diagnostics (excludes water damage).</p>
            <p><span className="text-terminal-green">03.</span> 90-day warranty on all parts and labor.</p>
            <p><span className="text-terminal-green">04.</span> Priority RMA processing for established partners.</p>
          </div>
        </TerminalWindow>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Quality Assurance</h2>
          <p className="text-muted font-mono leading-relaxed">
            Every device undergoes a 12-point inspection post-repair. 
            We stress-test batteries and verify sensor calibration before return shipping.
          </p>
          <ul className="space-y-3 font-mono text-sm text-muted">
            <li className="flex items-center gap-3">
              <span className="text-terminal-green">✓</span> Visual Inspection (Cosmetic Grading)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-terminal-green">✓</span> Battery Health Cycle Count Check
            </li>
            <li className="flex items-center gap-3">
              <span className="text-terminal-green">✓</span> FaceID / Biometrics Verification
            </li>
            <li className="flex items-center gap-3">
              <span className="text-terminal-green">✓</span> Liquid Contact Indicator Check
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
--- END FILE -->