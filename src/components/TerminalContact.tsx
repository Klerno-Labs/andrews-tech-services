"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TerminalContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-background border border-border rounded-none shadow-2xl max-w-2xl mx-auto overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-background-surface border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="font-mono text-xs text-muted ml-2">user@andrews-tech:~</span>
        </div>
        <div className="font-mono text-[10px] text-muted">bash</div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 md:p-8 bg-[#030303] min-h-[300px] font-mono text-sm">
        
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center h-full py-12 space-y-4 text-primary animate-fade-up">
            <CheckCircle2 className="w-12 h-12" />
            <p className="text-xl font-bold">TRANSMISSION RECEIVED</p>
            <p className="text-muted text-center">
              Our systems have logged your request. <br />
              A technician will respond via encrypted channel shortly.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-4 text-xs underline underline-offset-4 text-muted hover:text-primary"
            >
              Send another transmission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-xs text-primary mb-2">root@andrews:~$ input name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-text focus:border-primary focus:outline-none transition-colors placeholder-[#1a1a1a]"
                placeholder="ENTER_NAME"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-primary mb-2">root@andrews:~$ input email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-text focus:border-primary focus:outline-none transition-colors placeholder-[#1a1a1a]"
                placeholder="ENTER_EMAIL"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs text-primary mb-2">root@andrews:~$ input message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-text focus:border-primary focus:outline-none transition-colors placeholder-[#1a1a1a] resize-none"
                placeholder="ENTER_MESSAGE_DETAILS..."
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-muted">_cursor</span>
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold text-xs tracking-widest uppercase hover:bg-white hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    EXECUTING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    EXECUTE
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}