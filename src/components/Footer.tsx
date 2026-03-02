import Link from "next/link";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-mono text-xl font-bold tracking-tighter text-text-main flex items-center gap-2 mb-6">
              <Terminal size={20} className="text-terminal-green" />
              ANDREWS_TECH
            </div>
            <p className="font-mono text-xs text-muted leading-relaxed">
              Hardware Recovery Protocol.<br/>
              System Status: ONLINE<br/>
              Version: 2.0.0
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-bold text-text-main mb-6">SYSTEM</h4>
            <ul className="space-y-4 font-mono text-sm text-muted">
              <li><Link href="/" className="hover:text-terminal-green transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-terminal-green transition-colors">Services</Link></li>
              <li><Link href="/inventory" className="hover:text-terminal-green transition-colors">Inventory</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans font-bold text-text-main mb-6">PROTOCOLS</h4>
            <ul className="space-y-4 font-mono text-sm text-muted">
              <li><Link href="/privacy" className="hover:text-terminal-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-terminal-green transition-colors">Terms of Service</Link></li>
              <li><Link href="/warranty" className="hover:text-terminal-green transition-colors">Warranty Info</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-text-main mb-6">CONNECT</h4>
            <ul className="space-y-4 font-mono text-sm text-muted">
              <li className="hover:text-terminal-green transition-colors cursor-pointer">[PHONE]</li>
              <li className="hover:text-terminal-green transition-colors cursor-pointer">[EMAIL]</li>
              <li className="hover:text-terminal-green transition-colors cursor-pointer">[ADDRESS]</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Github className="text-muted hover:text-terminal-green cursor-pointer transition-colors" size={20} />
              <Twitter className="text-muted hover:text-terminal-green cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-muted hover:text-terminal-green cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {currentYear} ANDREWS_TECH SERVICES. ALL RIGHTS RESERVED.
          </p>
          <div className="font-mono text-xs text-terminal-dim">
            TERMINAL_ID: 884-AX-99
          </div>
        </div>
      </div>
    </footer>
  );
};
--- END FILE -->