import { siteConfig } from "@/config/site";
import { Github, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background-surface border-t border-gray-800 py-16 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="font-mono text-sm font-bold tracking-widest text-primary">
              ANDREWS_TECH
            </div>
            <p className="text-sm text-gray-500 font-mono leading-relaxed">
              Hardware Recovery Protocol.<br/>
              System Restore Complete.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.links.twitter} aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={siteConfig.links.github} aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans font-bold text-gray-200 mb-4">Modules</h3>
            <ul className="space-y-2 text-sm font-mono text-gray-500">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary transition-colors">
                    &gt; {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-bold text-gray-200 mb-4">Uplink</h3>
            <ul className="space-y-3 text-sm font-mono text-gray-500">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary/50" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary/50" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary/50 mt-1" />
                <span className="leading-tight">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* System Status */}
          <div className="bg-background border border-gray-800 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-gray-500">SYSTEM STATUS</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
            <div className="font-mono text-xs text-primary mb-2">
              V.2.0.4 [STABLE]
            </div>
            <div className="font-mono text-xs text-gray-600">
              Uptime: 99.99%<br/>
              Latency: 12ms
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-gray-700">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-gray-700">
            <a href="#" className="hover:text-gray-500">Privacy Protocol</a>
            <a href="#" className="hover:text-gray-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}