"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

const LINKS = [
  {
    href: "/placements",
    num: "01",
    title: "Placements",
    desc: "88% branch placement rate with 42 recruiters on campus this cycle.",
  },
  {
    href: "/alumni",
    num: "02",
    title: "Alumni network",
    desc: "1200+ alumni worldwide — mentorship, talks, and industry guidance.",
  },
  {
    href: "/team",
    num: "03",
    title: "Executive committee",
    desc: "Meet the sub-teams running SAIT this academic year.",
  },
  {
    href: "/activity-logger",
    num: "04",
    title: "Activity Logger",
    desc: "Log workshops, hackathons, and projects. Earn XP and climb the leaderboard.",
  },
];

export default function QuickLinks() {
  return (
    <section className="mb-32 md:mb-40">
      <ScrollReveal className="mb-10">
        <p className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
          Everything SAIT
        </p>
        <AnimatedText
          as="h2"
          text="Jump in."
          className="font-display font-semibold text-3xl sm:text-5xl block"
          splitBy="word"
        />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {LINKS.map((l, i) => (
          <ScrollReveal key={l.href} delay={i * 0.08}>
            <Link
              href={l.href}
              className="group block p-8 sm:p-10 bg-surface hover:bg-paperalt/60 transition-colors h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="mono text-xs text-muted">{l.num}</span>
                <ArrowUpRight
                  size={18}
                  className="text-muted group-hover:text-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2 group-hover:text-copperdeep transition-colors">
                {l.title}
              </h3>
              <p className="text-sm text-inksoft leading-relaxed">{l.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
