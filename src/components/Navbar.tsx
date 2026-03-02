"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "INVENTORY", href: "/inventory" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-void/90 backdrop-blur-md border-terminal-dim/30 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-text-main flex items-center gap-2">
            <Terminal size={20} className="text-terminal-green" />
            ANDREWS_TECH
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider transition-colors hover:text-terminal-green",
                  pathname === link.href
                    ? "text-terminal-green"
                    : "text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-terminal-green text-black font-mono text-xs font-bold px-6 py-2 hover:bg-terminal-dim transition-colors uppercase">
                Initiate Request
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-main"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-void z-40 pt-20 px-6 md:hidden animate-fade-up">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-2xl text-text-main uppercase tracking-widest hover:text-terminal-green"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="w-full border border-terminal-green text-terminal-green font-mono py-4 mt-4 hover:bg-terminal-green hover:text-black transition-colors uppercase">
                Initiate Request
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
--- END FILE -->