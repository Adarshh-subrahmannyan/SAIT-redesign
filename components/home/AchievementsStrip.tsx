"use client";

import Link from "next/link";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function AchievementsStrip() {
  const featured = ACHIEVEMENTS.slice(0, 3);

  return (
    <section className="mb-32 md:mb-40">
      <ScrollReveal className="mb-10">
        <p className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
          Hall of fame
        </p>
        <AnimatedText
          as="h2"
          text="Built to win."
          className="font-display font-semibold text-3xl sm:text-5xl block"
          splitBy="word"
        />
      </ScrollReveal>

      <div className="space-y-0 border border-line">
        {featured.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.08}>
            <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 p-6 sm:p-8 border-b border-line last:border-b-0 bg-surface hover:bg-paperalt/50 transition-colors">
              <span className="font-display text-4xl sm:text-5xl font-bold text-copper/20 group-hover:text-copper/40 transition-colors shrink-0 w-20">
                {a.year.slice(2)}
              </span>
              <div className="flex-1">
                <p className="font-display font-medium text-lg sm:text-xl">{a.title}</p>
                <p className="mono text-xs text-muted mt-1 uppercase tracking-wide">{a.kind}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="mt-6">
        <Link
          href="/achievements"
          className="mono text-sm text-copperdeep hover:text-copper transition-colors"
        >
          View all achievements →
        </Link>
      </ScrollReveal>
    </section>
  );
}
