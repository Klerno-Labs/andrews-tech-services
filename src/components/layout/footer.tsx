import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-background border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-primary font-bold text-lg">
              ANDREWS_TECH
            </h3>
            <p className="font-mono text-sm text-text-muted leading-relaxed">
              Hardware Recovery Protocol v2.0.4
              <br />
              Restoring systems to operational status.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-sans font-bold text-text mb-4">Navigation</h4>
            <ul className="space-y-2 font-mono text-sm text-text-muted">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans font-bold text-text mb-4">Uplink</h4>
            <ul className="space-y-2 font-mono text-sm text-text-muted">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-xs opacity-50">
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>

          {/* Social/Status Column */}
          <div>
            <h4 className="font-sans font-bold text-text mb-4">System Status</h4>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-mono text-sm text-primary">ONLINE</span>
            </div>
            <div className="flex gap-4">
              <a href={siteConfig.links.twitter} className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.github} className="text-text-muted hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All systems operational.
          </p>
          <div className="flex gap-6 font-mono text-xs text-text-muted">
            <Link href="/privacy" className="hover:text-primary">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}