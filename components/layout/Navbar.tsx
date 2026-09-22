"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/nav";
import { cn } from "@/lib/utils";
import { useIntro } from "@/components/providers/IntroProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { introComplete } = useIntro();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-paper/95 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={introComplete ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <span className="w-7 h-7 flex items-center justify-center bg-copper text-surface font-display font-bold text-xs">
            S
          </span>
          <span className="font-display font-bold text-base tracking-tight leading-none">
            SAIT
            <span className="hidden sm:inline text-muted font-normal text-xs ml-1.5 tracking-wide">
              CUSAT
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm" aria-label="Main navigation">
          {NAV.filter((n) => n.href !== "/activity-logger").map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative py-1 text-inksoft hover:text-ink transition-colors duration-150 font-body tracking-wide",
                  active && "text-ink"
                )}
              >
                {n.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-copper"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden w-9 h-9 flex items-center justify-center text-inksoft hover:text-ink transition-colors"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden border-t border-line bg-paper/98 backdrop-blur-md px-5 py-3 flex flex-col"
            aria-label="Mobile navigation"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "py-3 text-sm border-b border-line/50 last:border-0 text-inksoft hover:text-ink transition-colors tracking-wide",
                  pathname === n.href && "text-copperdeep font-medium"
                )}
              >
                {n.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
