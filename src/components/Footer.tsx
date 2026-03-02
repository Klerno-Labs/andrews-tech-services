import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-terminal-bg border-t border-terminal-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-mono text-lg font-bold text-terminal-text mb-4">ANDREWS_TECH</h4>
            <p className="font-mono text-xs text-terminal-muted leading-relaxed">
              High-precision hardware recovery for professional flippers and technical enterprises.
            </p>
          </div>
          
          <div>
            <h5 className="font-mono text-xs text-terminal-primary uppercase tracking-widest mb-4">Modules</h5>
            <ul className="space-y-2 font-mono text-sm text-terminal-muted">
              <li><a href="#" className="hover:text-terminal-text transition-colors">Diagnostics</a></li>
              <li><a href="#" className="hover:text-terminal-text transition-colors">Board Repair</a></li>
              <li><a href="#" className="hover:text-terminal-text transition-colors">Bulk Sales</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-mono text-xs text-terminal-primary uppercase tracking-widest mb-4">System</h5>
            <ul className="space-y-2 font-mono text-sm text-terminal-muted">
              <li><a href="#" className="hover:text-terminal-text transition-colors">About</a></li>
              <li><a href="#" className="hover:text-terminal-text transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-terminal-text transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-mono text-xs text-terminal-primary uppercase tracking-widest mb-4">Uplink</h5>
            <div className="flex gap-4">
              <a href="#" className="text-terminal-muted hover:text-terminal-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-terminal-muted hover:text-terminal-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-terminal-muted hover:text-terminal-primary transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-terminal-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-terminal-border">
            © {new Date().getFullYear()} ANDREWS_TECH_SERVICES // ALL RIGHTS RESERVED
          </p>
          <div className="font-mono text-xs text-terminal-border">
            SYSTEM_VERSION: 2.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};