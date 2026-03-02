"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-primary/30" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="h-6 w-6 text-primary group-hover:animate-pulse" />
          <span className="font-mono text-lg font-bold tracking-tighter text-text">
            {siteConfig.name.toUpperCase().replace(" ", "_")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-mono text-sm transition-colors hover:text-primary relative",
                pathname === item.href ? "text-primary" : "text-text-muted"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary shadow-[0_0_8px_#00FF41]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/contact">Initiate_Request</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0A0A0A] border-b border-[#1a1a1a] p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-mono text-lg py-2 border-l-2 pl-4 transition-colors",
                pathname === item.href
                  ? "border-primary text-primary"
                  : "border-transparent text-text-muted hover:border-primary/50"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button variant="secondary" className="w-full mt-4" asChild>
            <Link href="/contact">Initiate_Request</Link>
          </Button>
        </div>
      )}
    </header>
  );
}