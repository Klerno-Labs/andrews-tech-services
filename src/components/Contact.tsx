import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-32 bg-terminal-surface border-t border-terminal-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-terminal-bg border border-terminal-border p-1 rounded-lg">
          <div className="bg-terminal-bg p-8 md:p-12 border border-terminal-border/30">
            <div className="flex items-center gap-2 mb-8 pb-8 border-b border-terminal-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-terminal-border"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-border"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-border"></div>
              </div>
              <span className="text-terminal-muted font-mono text-xs ml-4">root@andrews:~$ contact_form.sh</span>
            </div>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-terminal-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-terminal-primary">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-terminal-text mb-2 font-sans">Transmission Received</h3>
                <p className="font-mono text-terminal-muted">We will establish connection within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-xs font-mono text-terminal-primary underline underline-offset-4 hover:text-terminal-secondary">
                  Send new transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input id="name" label="IDENTIFIER" placeholder="John Doe" required />
                  <Input id="email" label="COMM_LINK" type="email" placeholder="john@example.com" required />
                </div>
                <Input id="subject" label="SUBJECT" placeholder="Repair Inquiry" />
                <div>
                  <label htmlFor="message" className="block text-xs text-terminal-muted mb-2 font-mono uppercase tracking-widest">
                    PAYLOAD &gt;
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-terminal-bg border-b border-terminal-border py-3 text-terminal-text font-mono focus:outline-none focus:border-terminal-primary transition-colors placeholder-terminal-border/50 resize-none"
                    placeholder="Describe hardware failure..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full md:w-auto flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <span className="animate-pulse">TRANSMITTING...</span>
                    ) : (
                      <>
                        INITIATE <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-mono text-terminal-muted text-sm mb-4">Or connect via direct frequency:</p>
          <div className="flex justify-center gap-8 font-mono text-sm text-terminal-text">
            <a href="tel:[PHONE]" className="hover:text-terminal-primary transition-colors">PHONE: [PHONE]</a>
            <a href="mailto:[EMAIL]" className="hover:text-terminal-primary transition-colors">EMAIL: [EMAIL]</a>
          </div>
        </div>
      </div>
    </section>
  );
};