"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

const LINKS = [
  {
    href: "/placements",
    num: "01",
    title: "Placements",
    desc: "88% branch placement rate with 42 recruiters on campus this cycle.",
    color: "var(--yellow)",
  },
  {
    href: "/alumni",
    num: "02",
    title: "Alumni network",
    desc: "1200+ alumni worldwide — mentorship, talks, and industry guidance.",
    color: "var(--cyan)",
  },
  {
    href: "/team",
    num: "03",
    title: "Executive committee",
    desc: "Meet the sub-teams running SAIT this academic year.",
    color: "var(--magenta)",
  },
  {
    href: "/activity-logger",
    num: "04",
    title: "Activity Logger",
    desc: "Log workshops, hackathons, and projects. Earn XP and climb the leaderboard.",
    color: "var(--sage)",
  },
];

export default function QuickLinks() {
  return (
    <section className="mb-16 sm:mb-24">
      <ScrollReveal className="mb-8 text-center sm:text-left">
        <span className="sticker text-xs font-grotesk font-bold mb-4 inline-block"
          style={{ background: "black", color: "white", border: "2px solid transparent" }}>
          Everything SAIT
        </span>
        <AnimatedText
          as="h2"
          text="Jump right in."
          className="font-grotesk font-bold text-3xl sm:text-5xl block tracking-tight"
          splitBy="word"
        />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {LINKS.map((l, i) => (
          <ScrollReveal key={l.href} delay={i * 0.08}>
            <Link
              href={l.href}
              className="group block island p-8 sm:p-10 h-full border-2 border-black/10 hover:border-black transition-all"
              style={{ background: "white" }}
            >
              <div className="flex justify-between items-start mb-10">
                <span className="font-grotesk font-bold text-lg" style={{ color: l.color }}>
                  {l.num}
                </span>
                <span 
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black/10 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300"
                >
                  <ArrowRight size={16} />
                </span>
              </div>
              <h3 className="font-grotesk text-2xl font-bold mb-3">
                {l.title}
              </h3>
              <p className="text-sm font-medium text-black/70 leading-relaxed">{l.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
