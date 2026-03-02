"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "#services" },
  { name: "PRICING", href: "#pricing" },
  { name: "INVENTORY", href: "#inventory" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background-surface/80 backdrop-blur-md border-primary-dark/50"
            : "bg-background/0 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Terminal className="w-6 h-6 text-primary group-hover:animate-pulse" />
              <span className="font-mono text-xl font-bold tracking-tighter text-text">
                ANDREWS<span className="text-primary">_TECH</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-mono text-sm tracking-widest hover:text-primary transition-colors relative",
                    pathname === link.href || (link.href !== "/" && pathname === "/")
                      ? "text-primary"
                      : "text-muted"
                  )}
                >
                  {link.name}
                  {/* Active Indicator */}
                  {(pathname === link.href || (link.href.startsWith("#") && pathname === "/")) && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary shadow-[0_0_8px_#00FF41]" />
                  )}
                </Link>
              ))}
              <a
                href="tel:[PHONE]"
                className="hidden lg:block font-mono text-xs bg-primary/10 border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-black transition-all duration-300"
              >
                [PHONE]
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-mono font-bold text-text hover:text-primary transition-colors"
              >
                &gt; {link.name}
              </Link>
            ))}
            <a
              href="tel:[PHONE]"
              className="text-xl font-mono text-primary border border-primary px-6 py-3"
            >
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </>
  );
}