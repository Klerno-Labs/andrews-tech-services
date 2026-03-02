"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="bg-black border border-gray-800 p-1 md:p-8 rounded-sm shadow-2xl relative overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10px] w-full animate-scanline pointer-events-none" />

      <div className="bg-background-surface/50 p-6 md:p-10 border border-gray-800/50 relative z-10">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
          <span className="ml-4 font-mono text-xs text-gray-500">root@andrews:~$ submit_request</span>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
            <p className="text-gray-400 font-mono max-w-sm">
              Your repair request has been logged in the queue. A technician will analyze your protocol and contact you shortly.
            </p>
            <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4">
              Send Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary uppercase tracking-wider">Identity</label>
                <Input 
                  placeholder="Enter your name" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary uppercase tracking-wider">Comms (Email)</label>
                <Input 
                  type="email" 
                  placeholder="name@domain.com" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary uppercase tracking-wider">Signal (Phone)</label>
              <Input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary uppercase tracking-wider">Payload (Issue)</label>
              <textarea 
                className="flex min-h-[120px] w-full rounded-none bg-background border-b border-gray-800 px-3 py-2 text-sm font-mono text-primary placeholder:text-gray-700 focus:border-primary focus:outline-none focus:ring-0 resize-none transition-colors"
                placeholder="Describe the hardware failure or bulk lot details..."
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg" 
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> PROCESSING...
                </>
              ) : (
                "EXECUTE REQUEST >"
              )}
            </Button>
            
            <p className="text-xs text-gray-600 font-mono text-center">
              Data is encrypted. No spam protocol enabled.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}