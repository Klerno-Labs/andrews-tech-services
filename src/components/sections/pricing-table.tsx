import { services } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function PricingTable() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-section">
      <div className="mb-12">
        <h2 className="font-sans text-4xl font-bold text-text mb-4">Service Cost Matrix</h2>
        <p className="font-mono text-text-muted">Standardized pricing for flippers and IT managers.</p>
      </div>

      <div className="overflow-x-auto border border-[#1a1a1a] rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0A0A0A] border-b border-[#1a1a1a]">
              <th className="p-4 font-mono text-xs uppercase tracking-widest text-text-muted">Device</th>
              <th className="p-4 font-mono text-xs uppercase tracking-widest text-text-muted">Issue</th>
              <th className="p-4 font-mono text-xs uppercase tracking-widest text-text-muted">Category</th>
              <th className="p-4 font-mono text-xs uppercase tracking-widest text-text-muted text-right">Turnaround</th>
              <th className="p-4 font-mono text-xs uppercase tracking-widest text-text-muted text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1a] bg-background">
            {services.map((service) => (
              <tr 
                key={service.id} 
                className={cn(
                  "hover:bg-[#050505] transition-colors group",
                  service.margin && "border-l-2 border-l-primary"
                )}
              >
                <td className="p-4 font-sans font-medium text-text group-hover:text-primary transition-colors">
                  {service.device}
                </td>
                <td className="p-4 font-mono text-sm text-text-muted">
                  {service.issue}
                </td>
                <td className="p-4">
                  <Badge variant="default" className="text-[10px] px-1.5 py-0.5">
                    {service.category.toUpperCase()}
                  </Badge>
                </td>
                <td className="p-4 font-mono text-sm text-right text-text-muted">
                  {service.turnaround}
                </td>
                <td className="p-4 font-mono text-sm text-right font-bold text-primary">
                  ${service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex items-center gap-4 font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 border-l-2 border-primary"></span>
          <span>High Margin Repair (Best for Flippers)</span>
        </div>
      </div>
    </div>
  );
}