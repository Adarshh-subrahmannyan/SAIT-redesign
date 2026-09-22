"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Bell } from "lucide-react";
import { NAV } from "@/data/nav";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { cn } from "@/lib/utils";
import { useIntro } from "@/components/providers/IntroProvider";

// Items shown directly; /announcements moved to bell icon
const PRIMARY_HREFS = ["/", "/about", "/events"];
const EXCLUDE_FROM_MORE = [...PRIMARY_HREFS, "/announcements"];

// Tag colour helper
const tagColor = (tag: string) => {
  if (tag === "Deadline") return "text-red-500 border-red-300";
  if (tag === "Event") return "text-copper border-copper/60";
  return "text-muted border-line";
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(ANNOUNCEMENTS.length);
  const [scrolled, setScrolled] = useState(false);
  const { introComplete } = useIntro();
  const moreRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => setMoreOpen(false), [pathname]);
  useEffect(() => setBellOpen(false), [pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) setBellOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const primaryNav = NAV.filter((n) => PRIMARY_HREFS.includes(n.href));
  const moreNav = NAV.filter((n) => !EXCLUDE_FROM_MORE.includes(n.href));
  const moreIsActive = moreNav.some((n) => pathname === n.href);

  const handleBellOpen = () => {
    setBellOpen((o) => {
      if (!o) setUnreadCount(0); // mark as read when opened
      return !o;
    });
    setMoreOpen(false);
  };

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
          {/* Primary items */}
          {primaryNav.map((n) => {
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

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              id="more-menu-btn"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => { setMoreOpen((o) => !o); setBellOpen(false); }}
              className={cn(
                "relative flex items-center gap-1 py-1 text-inksoft hover:text-ink transition-colors duration-150 font-body tracking-wide",
                moreIsActive && "text-ink"
              )}
            >
              More
              <motion.span
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} strokeWidth={1.75} />
              </motion.span>
              {moreIsActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-copper"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-48 border border-line bg-paper/98 backdrop-blur-md shadow-lg"
                  role="menu"
                  aria-labelledby="more-menu-btn"
                >
                  {moreNav.map((n) => {
                    const active = pathname === n.href;
                    return (
                      <Link
                        key={n.href}
                        href={n.href}
                        role="menuitem"
                        className={cn(
                          "flex items-center justify-between px-4 py-2.5 text-sm text-inksoft hover:text-ink hover:bg-line/30 transition-colors border-b border-line/50 last:border-0",
                          active && "text-copperdeep font-medium"
                        )}
                      >
                        {n.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-copper" />}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bell icon */}
          <div ref={bellRef} className="relative">
            <button
              id="bell-btn"
              aria-label="Announcements"
              aria-expanded={bellOpen}
              onClick={handleBellOpen}
              className="relative w-8 h-8 flex items-center justify-center text-inksoft hover:text-ink transition-colors"
            >
              <Bell size={17} strokeWidth={1.75} />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-copper text-paper text-[9px] font-bold flex items-center justify-center leading-none">
                  {unreadCount}
                </span>
              )}
            </button>

            <AnimatePresence>
              {bellOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-80 border border-line bg-paper/98 backdrop-blur-md shadow-lg"
                  role="dialog"
                  aria-labelledby="bell-btn"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-line">
                    <span className="font-display text-sm font-semibold">Announcements</span>
                    <Link
                      href="/announcements"
                      className="text-xs text-copper hover:underline"
                    >
                      View all
                    </Link>
                  </div>

                  {/* List — show latest 4 */}
                  <div className="divide-y divide-line/50 max-h-80 overflow-y-auto">
                    {ANNOUNCEMENTS.slice(0, 4).map((a) => (
                      <div key={a.title} className="px-4 py-3 hover:bg-line/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn("text-[10px] border px-1.5 py-0.5 font-mono uppercase tracking-wide", tagColor(a.tag))}>
                            {a.tag}
                          </span>
                          <span className="text-[10px] text-muted font-mono">
                            {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </span>
                        </div>
                        <p className="text-sm font-medium leading-snug">{a.title}</p>
                        <p className="text-xs text-inksoft mt-0.5 leading-relaxed line-clamp-1">{a.body}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-line px-4 py-2.5">
                    <Link
                      href="/announcements"
                      className="text-xs text-inksoft hover:text-ink transition-colors"
                    >
                      See all {ANNOUNCEMENTS.length} announcements →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right side: bell (mobile) + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Bell on mobile too */}
          <div ref={undefined} className="relative">
            <button
              aria-label="Announcements"
              onClick={() => setBellOpen((o) => !o)}
              className="relative w-8 h-8 flex items-center justify-center text-inksoft hover:text-ink transition-colors"
            >
              <Bell size={17} strokeWidth={1.75} />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-copper text-paper text-[9px] font-bold flex items-center justify-center leading-none">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="w-9 h-9 flex items-center justify-center text-inksoft hover:text-ink transition-colors"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden border-t border-line bg-paper/98 backdrop-blur-md px-5 py-3 flex flex-col"
            aria-label="Mobile navigation"
          >
            {NAV.filter((n) => n.href !== "/announcements").map((n) => (
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

      {/* Bell panel on mobile (full-width overlay) */}
      <AnimatePresence>
        {bellOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden border-t border-line bg-paper/98 backdrop-blur-md"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-line">
              <span className="font-display text-sm font-semibold">Announcements</span>
              <Link href="/announcements" className="text-xs text-copper hover:underline">
                View all
              </Link>
            </div>
            <div className="divide-y divide-line/50">
              {ANNOUNCEMENTS.slice(0, 4).map((a) => (
                <div key={a.title} className="px-5 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn("text-[10px] border px-1.5 py-0.5 font-mono uppercase tracking-wide", tagColor(a.tag))}>
                      {a.tag}
                    </span>
                    <span className="text-[10px] text-muted font-mono">
                      {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-snug">{a.title}</p>
                  <p className="text-xs text-inksoft mt-0.5 leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
