"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function FeaturedEvent() {
  return (
    <section className="mb-16 sm:mb-24">
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <span className="sticker text-xs font-grotesk font-bold mb-3 inline-block"
            style={{ background: "var(--magenta)", color: "white", border: "2px solid transparent" }}>
            ★ Upcoming flagship
          </span>
          <AnimatedText
            as="h2"
            text="TechSummit & HackSprint '26"
            className="font-grotesk font-bold text-2xl sm:text-4xl lg:text-5xl mt-3 block leading-tight"
            splitBy="word"
          />
        </div>
        <Link
          href="/events/codesprint-hackathon"
          className="pill-btn px-5 py-2.5 text-sm font-grotesk font-bold shrink-0 self-end"
          style={{ background: "var(--ink)", color: "white" }}
        >
          Register <ArrowUpRight size={15} />
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Link
          href="/events/codesprint-hackathon"
          className="group island block overflow-hidden border-2 border-black/10 hover:border-black/30 transition-colors"
          style={{ background: "var(--cyan)" }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: details */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <p className="font-mono text-xs text-black/50 uppercase tracking-widest mb-4">
                October 12–13, 2026 · CUSAT Seminar Complex
              </p>
              <p className="text-black/80 leading-relaxed mb-6 text-sm sm:text-base font-body">
                A 24-hour national hackathon & tech symposium bringing together
                300+ developers from across India for hardware, AI, web3, and cloud innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI / ML", "Web3", "Cloud Systems", "₹1,00,000 Prizes"].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-3 py-1.5 rounded-full border-2 border-black/20 font-bold bg-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: accent panel */}
            <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center overflow-hidden"
              style={{ background: "var(--indigo-dark)" }}>
              <span className="font-grotesk font-bold text-[clamp(5rem,14vw,10rem)] text-white/10 select-none group-hover:text-white/20 transition-colors duration-700 leading-none">
                24H
              </span>
              <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                <span className="font-mono text-xs text-white/40">Non-stop hackathon</span>
                <span className="font-grotesk text-xl font-bold" style={{ color: "var(--yellow)" }}>Open →</span>
              </div>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}
