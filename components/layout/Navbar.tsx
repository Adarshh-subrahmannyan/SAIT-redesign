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

const PRIMARY_HREFS = ["/", "/about", "/events"];
const EXCLUDE_FROM_MORE = [...PRIMARY_HREFS, "/announcements"];

const tagColor = (tag: string) => {
  if (tag === "Deadline") return "text-red-500";
  if (tag === "Event") return "text-[#b8763c]";
  return "text-gray-400";
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
    setBellOpen((o) => { if (!o) setUnreadCount(0); return !o; });
    setMoreOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/8"
          : "bg-transparent border-b border-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={introComplete ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo pill */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="w-8 h-8 rounded-full flex items-center justify-center font-grotesk font-bold text-sm"
            style={{ background: "var(--yellow)", color: "var(--ink)" }}>
            S
          </span>
          <span className="font-grotesk font-bold text-base tracking-tight">
            SAIT
            <span className="hidden sm:inline text-black/40 font-normal text-xs ml-1.5">CUSAT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm" aria-label="Main navigation">
          {primaryNav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href}
                className={cn(
                  "relative px-4 py-2 rounded-pill font-medium transition-all duration-150",
                  active
                    ? "bg-black text-white"
                    : "text-black/70 hover:text-black hover:bg-black/6"
                )}
              >
                {n.label}
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
                "flex items-center gap-1 px-4 py-2 rounded-pill font-medium transition-all",
                moreIsActive ? "bg-black text-white" : "text-black/70 hover:text-black hover:bg-black/6"
              )}
            >
              More
              <motion.span animate={{ rotate: moreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} strokeWidth={2} />
              </motion.span>
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-black/10 shadow-xl overflow-hidden"
                  role="menu"
                >
                  {moreNav.map((n) => {
                    const active = pathname === n.href;
                    return (
                      <Link key={n.href} href={n.href} role="menuitem"
                        className={cn(
                          "flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors border-b border-black/6 last:border-0",
                          active ? "bg-black text-white" : "hover:bg-black/5 text-black/80"
                        )}
                      >
                        {n.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right side: bell + hamburger */}
        <div className="flex items-center gap-2">
          {/* Bell */}
          <div ref={bellRef} className="relative">
            <button
              id="bell-btn"
              aria-label="Announcements"
              aria-expanded={bellOpen}
              onClick={handleBellOpen}
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors"
            >
              <Bell size={18} strokeWidth={1.75} />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center leading-none"
                  style={{ background: "var(--magenta)", color: "white" }}>
                  {unreadCount}
                </span>
              )}
            </button>
            <AnimatePresence>
              {bellOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border border-black/10 shadow-xl overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-black/8">
                    <span className="font-grotesk font-bold text-sm">Announcements</span>
                    <Link href="/announcements" className="text-xs font-medium" style={{ color: "var(--magenta)" }}>View all</Link>
                  </div>
                  <div className="divide-y divide-black/6 max-h-72 overflow-y-auto">
                    {ANNOUNCEMENTS.slice(0, 4).map((a) => (
                      <div key={a.title} className="px-4 py-3 hover:bg-black/3 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn("text-[10px] font-bold uppercase tracking-wide", tagColor(a.tag))}>{a.tag}</span>
                          <span className="text-[10px] text-black/40">
                            {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </span>
                        </div>
                        <p className="text-sm font-semibold leading-snug">{a.title}</p>
                        <p className="text-xs text-black/50 mt-0.5 line-clamp-1">{a.body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 border-t border-black/8">
                    <Link href="/announcements" className="text-xs text-black/50 hover:text-black transition-colors">
                      See all {ANNOUNCEMENTS.length} announcements →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
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
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-white border-t border-black/8 px-5 py-4 flex flex-col gap-1"
          >
            {NAV.filter((n) => n.href !== "/announcements").map((n) => (
              <Link key={n.href} href={n.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === n.href ? "bg-black text-white" : "text-black/70 hover:bg-black/6"
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
