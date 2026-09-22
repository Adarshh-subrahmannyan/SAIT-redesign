"use client";

import CountUp from "@/components/animations/CountUp";
import ScrollReveal from "@/components/animations/ScrollReveal";

const STATS = [
  { value: "1200+", label: "Alumni worldwide" },
  { value: "32", label: "Highest package (₹ LPA)" },
  { value: "88%", label: "Branch placement rate" },
  { value: "35+", label: "Events per year" },
];

export default function StatsHighlight() {
  return (
    <ScrollReveal className="mb-32 md:mb-40">
      <div className="border-t border-b border-line">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <ScrollReveal
              key={s.label}
              delay={i * 0.1}
              className="relative p-8 sm:p-10 border-line lg:[&:not(:last-child)]:border-r [&:nth-child(1)]:border-r [&:nth-child(3)]:border-r border-b lg:border-b-0 [&:nth-child(1)]:border-b [&:nth-child(2)]:border-b lg:[&:nth-child(1)]:border-b-0 lg:[&:nth-child(2)]:border-b-0"
            >
              <CountUp
                value={s.value}
                className="font-display text-3xl sm:text-5xl font-bold text-copperdeep block"
              />
              <p className="mono text-xs sm:text-sm text-muted mt-2 uppercase tracking-wide">
                {s.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
