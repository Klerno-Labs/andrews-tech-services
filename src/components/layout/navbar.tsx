"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-primary/20"
          : "bg-background border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="h-5 w-5 text-primary group-hover:animate-pulse" />
          <span className="font-mono text-sm font-bold tracking-widest text-primary">
            ANDREWS_TECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-mono transition-colors hover:text-primary relative",
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-400"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-[22px] left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Initiate Request</Link>
            </Button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary focus:outline-none&quot;
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-primary/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-mono border-l-2 pl-4 transition-colors",
                    pathname === item.href
                      ? "border-primary text-primary"
                      : "border-gray-800 text-gray-400 hover:border-primary/50 hover:text-gray-200"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button variant="primary" className="w-full" asChild>
                <Link href="/contact">Initiate Request</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}