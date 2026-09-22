"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import { useIntro } from "@/components/providers/IntroProvider";

// Rotating sticker badges
const STICKERS = ["Est. 1995", "Kerala's #1 IT Assoc.", "30+ Years", "SOE · CUSAT"];

export default function Hero() {
  const { introComplete } = useIntro();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-5 sm:px-8 py-16">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating colour blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "var(--yellow)" }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -left-16 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "var(--cyan)" }}
        animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Sticker row */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {STICKERS.map((s, i) => (
            <motion.span
              key={s}
              className="sticker text-xs font-grotesk"
              style={{
                background: i % 2 === 0 ? "var(--yellow)" : "var(--canvas)",
                border: "2px solid var(--ink)",
                color: "var(--ink)",
                rotate: `${(i % 2 === 0 ? 1 : -1) * 1.5}deg`,
              }}
              whileHover={{ scale: 1.08, rotate: "0deg" }}
              transition={{ duration: 0.2 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Headline */}
        <h1 className="font-grotesk font-bold leading-[0.92] tracking-tight mb-6">
          <AnimatedText
            as="span"
            text="LEARN."
            className="block text-[clamp(3.8rem,13vw,10rem)] text-black"
            splitBy="char"
            delay={introComplete ? 0.2 : 0}
          />
          <AnimatedText
            as="span"
            text="BUILD."
            className="block text-[clamp(3.8rem,13vw,10rem)]"
            style={{ color: "var(--magenta)" } as React.CSSProperties}
            splitBy="char"
            delay={introComplete ? 0.5 : 0}
          />
          <AnimatedText
            as="span"
            text="CONNECT."
            className="block text-[clamp(3.8rem,13vw,10rem)] text-black"
            splitBy="char"
            delay={introComplete ? 0.8 : 0}
          />
        </h1>

        {/* Sub + CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <p className="max-w-sm text-base text-black/60 leading-relaxed font-body">
            The student association of IT @ CUSAT — running workshops, hackathons, and communities since 1995.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/events"
              className="pill-btn px-6 py-3 text-sm font-grotesk font-bold"
              style={{ background: "var(--yellow)", color: "var(--ink)", border: "2px solid var(--ink)" }}
            >
              Explore events <ArrowRight size={15} />
            </Link>
            <Link
              href="/activity-logger"
              className="pill-btn px-6 py-3 text-sm font-grotesk font-bold border-2 border-black/20 hover:border-black bg-white"
            >
              Activity Logger
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/30"
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
      >
        <motion.span
          className="mono text-[10px] uppercase tracking-widest"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓ scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
