"use client";

import CountUp from "@/components/animations/CountUp";
import ScrollReveal from "@/components/animations/ScrollReveal";

const STATS = [
  { value: "1200+", label: "Alumni worldwide", bg: "var(--yellow)", text: "var(--ink)" },
  { value: "32",    label: "Highest package (₹ LPA)", bg: "var(--magenta)", text: "white" },
  { value: "88%",   label: "Branch placement rate", bg: "var(--cyan)", text: "var(--ink)" },
  { value: "35+",   label: "Events per year", bg: "var(--indigo-dark)", text: "white" },
];

export default function StatsHighlight() {
  return (
    <ScrollReveal className="mb-16 sm:mb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.1}>
            <div
              className="island p-8 sm:p-10 flex flex-col"
              style={{ background: s.bg, color: s.text }}
            >
              <CountUp
                value={s.value}
                className="font-grotesk text-3xl sm:text-5xl font-bold block leading-none"
              />
              <p className="text-sm font-medium mt-3 opacity-80 leading-snug">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
}
