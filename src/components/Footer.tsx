import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="font-mono text-xl font-bold tracking-tighter text-text">
              ANDREWS<span className="text-primary">_TECH</span>
            </h4>
            <p className="text-sm text-muted leading-relaxed font-mono">
              Premium hardware recovery and bulk electronics restoration services. Flipping made efficient.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-bold text-text mb-4 text-sm tracking-wider uppercase">Protocol</h5>
            <ul className="space-y-2">
              {["Services", "Pricing", "Inventory", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-muted hover:text-primary transition-colors font-mono">
                    &gt; {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-text mb-4 text-sm tracking-wider uppercase">Connect</h5>
            <ul className="space-y-3 font-mono text-sm text-muted">
              <li>[ADDRESS]</li>
              <li>[PHONE]</li>
              <li>[EMAIL]</li>
            </ul>
          </div>

          {/* Legal/Social */}
          <div>
            <h5 className="font-bold text-text mb-4 text-sm tracking-wider uppercase">Network</h5>
            <div className="flex space-x-4 mb-6">
              {[Github, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-muted hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="font-mono text-[10px] text-muted/50">
              <p>© {new Date().getFullYear()} Andrews Tech Services.</p>
              <p>All systems operational.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-muted/50">
            TERMINAL_ID: 8492-AX
          </div>
          <div className="flex gap-6 text-xs font-mono text-muted">
            <a href="#" className="hover:text-primary">Privacy Protocol</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}