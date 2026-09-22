"use client";

import Link from "next/link";
import Image from "next/image";
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
  if (tag === "Deadline") return "text-red-500 bg-red-500/10";
  if (tag === "Event") return "text-[#b8763c] bg-[#b8763c]/10";
  return "text-black/60 bg-black/5";
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-black/10"
          : "bg-transparent border-b-2 border-transparent"
      )}
      initial={{ y: -64, opacity: 0 }}
      animate={introComplete ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        {/* Logo pill */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image src="/logo.png" alt="SAIT Logo" width={40} height={40} className="rounded-full" />
          </div>
          <span className="font-grotesk font-bold text-xl tracking-tight">
            SAIT
            <span className="hidden sm:inline text-black/50 font-medium text-sm ml-2 font-mono">CUSAT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-grotesk font-bold" aria-label="Main navigation">
          {primaryNav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href}
                className={cn(
                  "relative px-5 py-2.5 rounded-full transition-all duration-200 border-2",
                  active
                    ? "bg-black text-white border-black"
                    : "text-black/80 hover:text-black hover:bg-black/5 border-transparent hover:border-black/10"
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
                "flex items-center gap-1.5 px-5 py-2.5 rounded-full transition-all duration-200 border-2",
                moreIsActive || moreOpen ? "bg-black text-white border-black" : "text-black/80 hover:text-black hover:bg-black/5 border-transparent hover:border-black/10"
              )}
            >
              More
              <motion.span animate={{ rotate: moreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} strokeWidth={2.5} />
              </motion.span>
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] overflow-hidden"
                  role="menu"
                >
                  <div className="py-2">
                    {moreNav.map((n) => {
                      const active = pathname === n.href;
                      return (
                        <Link key={n.href} href={n.href} role="menuitem"
                          className={cn(
                            "flex items-center justify-between px-5 py-3 text-sm font-bold transition-colors mx-2 rounded-xl",
                            active ? "bg-black text-white" : "hover:bg-black/5 text-black/80"
                          )}
                        >
                          {n.label}
                          {active && <span className="w-2 h-2 rounded-full" style={{ background: "var(--yellow)" }} />}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right side: bell + hamburger */}
        <div className="flex items-center gap-3">
          {/* Bell */}
          <div ref={bellRef} className="relative">
            <button
              id="bell-btn"
              aria-label="Announcements"
              aria-expanded={bellOpen}
              onClick={handleBellOpen}
              className={cn(
                "relative w-11 h-11 flex items-center justify-center rounded-full border-2 transition-all duration-200",
                bellOpen ? "bg-black text-white border-black" : "hover:bg-black/5 border-transparent hover:border-black/10"
              )}
            >
              <Bell size={20} strokeWidth={2} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center leading-none border-2 border-white"
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
                  className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] overflow-hidden"
                >
                  <div className="flex items-center justify-between px-5 py-4 border-b-2 border-black/10" style={{ background: "var(--yellow)" }}>
                    <span className="font-grotesk font-black text-sm uppercase tracking-wide">Announcements</span>
                  </div>
                  <div className="divide-y-2 divide-black/5 max-h-[350px] overflow-y-auto">
                    {ANNOUNCEMENTS.slice(0, 4).map((a) => (
                      <Link href="/announcements" key={a.title} className="block px-5 py-4 hover:bg-black/5 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn("text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border border-black/10", tagColor(a.tag))}>{a.tag}</span>
                          <span className="text-[10px] font-mono font-bold text-black/40">
                            {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                          </span>
                        </div>
                        <p className="text-sm font-bold leading-snug font-grotesk">{a.title}</p>
                        <p className="text-xs font-medium text-black/60 mt-1 line-clamp-2">{a.body}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="px-5 py-3 border-t-2 border-black/10 bg-black/5">
                    <Link href="/announcements" className="text-xs font-bold text-black hover:underline flex items-center justify-between">
                      See all {ANNOUNCEMENTS.length} announcements <span>→</span>
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
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border-2 border-transparent hover:border-black/10 hover:bg-black/5 transition-colors"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t-2 border-black/10 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-2 font-grotesk font-bold">
              {NAV.filter((n) => n.href !== "/announcements").map((n) => (
                <Link key={n.href} href={n.href}
                  className={cn(
                    "px-5 py-4 rounded-xl text-lg transition-colors border-2",
                    pathname === n.href ? "bg-black text-white border-black" : "text-black/80 hover:bg-black/5 border-transparent"
                  )}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
