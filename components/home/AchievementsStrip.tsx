"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function AchievementsStrip() {
  const featured = ACHIEVEMENTS.slice(0, 3);

  return (
    <section className="mb-16 sm:mb-24">
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="sticker text-xs font-grotesk font-bold mb-3 inline-block"
            style={{ background: "var(--sage)", color: "white", border: "2px solid transparent" }}>
            Hall of fame
          </span>
          <AnimatedText
            as="h2"
            text="Built to win."
            className="font-grotesk font-bold text-3xl sm:text-5xl block tracking-tight mt-2"
            splitBy="word"
          />
        </div>
        <Link
          href="/achievements"
          className="pill-btn px-5 py-2.5 text-sm font-grotesk font-bold shrink-0 self-end bg-white border-2 border-black/10 hover:border-black/30"
        >
          All achievements <ArrowRight size={15} />
        </Link>
      </ScrollReveal>

      <div className="island bg-white border-2 border-black/10 overflow-hidden">
        <div className="divide-y-2 divide-black/5">
          {featured.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <div className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 sm:p-8 hover:bg-black/[0.02] transition-colors">
                <span className="font-grotesk text-4xl sm:text-5xl font-bold text-black/10 group-hover:text-black/20 transition-colors shrink-0 w-24">
                  &apos;{a.year.slice(2)}
                </span>
                <div className="flex-1">
                  <p className="font-grotesk font-bold text-lg sm:text-xl">{a.title}</p>
                  <p className="font-mono font-bold text-xs text-black/40 mt-1.5 uppercase tracking-wide">{a.kind}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
