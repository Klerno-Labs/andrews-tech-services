export default function PricingTable() {
  const services = [
    { device: "Smartphones (iOS/Android)", issue: "Screen Replacement", price: "$80 - $150", time: "1h - 2h", highMargin: false },
    { device: "Smartphones (iOS/Android)", issue: "Battery Replacement", price: "$50 - $90", time: "30m", highMargin: false },
    { device: "Laptops (PC/Mac)", issue: "Screen Replacement", price: "$120 - $300", time: "2h - 4h", highMargin: false },
    { device: "All Devices", issue: "Charging Port Repair", price: "$60 - $120", time: "45m", highMargin: false },
    { device: "iPhones / Samsung", issue: "Logic Board Repair", price: "$150 - $350", time: "2h - 5d", highMargin: true },
    { device: "MacBooks", issue: "Liquid Damage Repair", price: "$250 - $600", time: "1d - 5d", highMargin: true },
    { device: "Bulk Lots (50+ units)", issue: "Data Erasure (DoD 5220.22-M)", price: "$5 / unit", time: "Variable", highMargin: true },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border bg-background-surface">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border bg-background/50">
            {[&quot;DEVICE TYPE", "ISSUE", "BASE PRICE", "TURNAROUND"].map((header) => (
              <th
                key={header}
                className="py-4 px-6 text-xs font-mono font-bold uppercase tracking-widest text-muted"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {services.map((service, idx) => (
            <tr
              key={idx}
              className={`hover:bg-[#050505] transition-colors group ${
                service.highMargin ? "border-l-2 border-l-primary bg-primary/5" : ""
              }`}
            >
              <td className="py-4 px-6 font-mono text-sm text-text">{service.device}</td>
              <td className="py-4 px-6 font-mono text-sm text-muted group-hover:text-text transition-colors">{service.issue}</td>
              <td className="py-4 px-6 font-mono text-sm font-bold text-primary">{service.price}</td>
              <td className="py-4 px-6 font-mono text-sm text-muted">{service.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}