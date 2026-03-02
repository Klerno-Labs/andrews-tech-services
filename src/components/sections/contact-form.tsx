"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Terminal, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-[#030303] border border-[#1a1a1a] p-8 rounded-lg flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-mono text-xl text-primary mb-2">TRANSMISSION RECEIVED</h3>
        <p className="font-mono text-sm text-text-muted max-w-sm">
          Your request has been logged in our system. A technician will analyze your data and uplink within 24 hours.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus("idle")}>
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#030303] border border-[#1a1a1a] p-1 rounded-lg shadow-2xl">
      <div className="bg-[#0A0A0A] border-b border-[#1a1a1a] p-3 flex items-center gap-2">
        <Terminal className="w-4 h-4 text-text-muted" />
        <span className="font-mono text-xs text-text-muted">root@andrews:~$ submit_ticket</span>
      </div>
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-xs text-primary uppercase">Identity_Name</label>
            <Input placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs text-primary uppercase">Contact_Email</label>
            <Input type="email" placeholder="john@example.com" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="font-mono text-xs text-primary uppercase">Device_Type</label>
          <Input placeholder="e.g. iPhone 13 Pro, Dell XPS 15" />
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs text-primary uppercase">System_Log (Description)</label>
          <textarea 
            className="flex w-full bg-[#030303] border border-[#333] p-3 text-text font-mono text-sm focus:border-primary focus:outline-none placeholder:text-[#333] transition-colors min-h-[120px] rounded-sm"
            placeholder="Describe the failure symptoms..."
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full font-mono uppercase tracking-widest"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> PROCESSING...
            </>
          ) : (
            "Execute Request"
          )}
        </Button>
      </form>
    </div>
  );
}