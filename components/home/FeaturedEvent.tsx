"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Tag from "@/components/ui/Tag";

export default function FeaturedEvent() {
  return (
    <section className="mb-24 sm:mb-32 md:mb-40">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-3">
          <div>
            <Tag accent>Upcoming flagship</Tag>
            <AnimatedText
              as="h2"
              text="TechSummit & HackSprint '26"
              className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl mt-4 block leading-tight"
              splitBy="word"
            />
          </div>
          <Link
            href="/events/codesprint-hackathon"
            className="flex items-center gap-1 mono text-sm text-copperdeep hover:text-copper transition-colors shrink-0 self-end"
          >
            Register <ArrowUpRight size={16} />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Link
          href="/events/codesprint-hackathon"
          className="group relative block overflow-hidden border border-line bg-surface bracket"
        >
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left: details */}
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <p className="mono text-xs text-muted uppercase tracking-widest mb-3">
                October 12–13, 2026 · CUSAT Seminar Complex
              </p>
              <p className="text-inksoft leading-relaxed mb-6 text-sm sm:text-base">
                A 24-hour national hackathon &amp; tech symposium bringing
                together 300+ developers from across India for hardware, AI,
                web3, and cloud innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI / ML", "Web3", "Cloud Systems", "₹1,00,000 Prizes"].map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] px-3 py-1.5 border border-line text-muted group-hover:border-copper/50 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: decorative accent panel — uses design tokens, no hardcoded navy */}
            <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[300px] bg-paperalt border-t md:border-t-0 md:border-l border-line flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              <span className="font-display font-bold text-[clamp(4rem,10vw,8rem)] text-copper/20 select-none group-hover:text-copper/35 transition-colors duration-700 leading-none">
                24H
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-copper/5 pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                <span className="mono text-xs text-muted">Non-stop hackathon</span>
                <span className="font-display text-xl font-semibold text-copper">
                  Open
                </span>
              </div>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    </section>
  );
}
