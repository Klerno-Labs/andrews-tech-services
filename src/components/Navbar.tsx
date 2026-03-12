"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { name: "SYSTEM", href: "/" },
  { name: "SERVICES", href: "#services" },
  { name: "INVENTORY", href: "#inventory" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-terminal-bg/90 backdrop-blur-md border-terminal-border" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-terminal-primary group-hover:text-terminal-secondary transition-colors" />
          <span className="font-mono text-lg font-bold tracking-widest text-terminal-text group-hover:text-terminal-primary transition-colors">
            ANDREWS_TECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-mono hover:text-terminal-primary transition-colors relative",
                pathname === link.href ? "text-terminal-primary" : "text-terminal-muted"
              )}
            >
              {link.name}
              <span className={cn("absolute -bottom-1 left-0 w-0 h-[1px] bg-terminal-primary transition-all duration-300", pathname === link.href ? "w-full" : "group-hover:w-full")}></span>
            </Link>
          ))}
          <button className="hidden lg:inline-flex text-xs font-mono border border-terminal-primary text-terminal-primary px-4 py-2 hover:bg-terminal-primary hover:text-black transition-colors">
            STATUS: ONLINE
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-terminal-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-terminal-bg transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-terminal-text"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-mono text-terminal-text hover:text-terminal-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            [{link.name}]
          </Link>
        ))}
      </div>
    </header>
  );
};