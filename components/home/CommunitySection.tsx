"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

const PILLARS = [
  "Department magazine (INTERFACE)",
  "Student technical writing",
  "Creative poems and sketches",
  "Research contributions",
  "Past SAIT annual reports",
];

export default function CommunitySection() {
  return (
    <section className="mb-16 sm:mb-24">
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <ScrollReveal className="h-full">
          <div className="island h-full p-8 sm:p-12 flex flex-col justify-between"
            style={{ background: "var(--yellow)" }}>
            <div>
              <span className="sticker text-xs font-grotesk font-bold mb-6 inline-block"
                style={{ background: "white", color: "var(--ink)", border: "2px solid var(--ink)" }}>
                02 — What&apos;s happening
              </span>
              <AnimatedText
                as="h2"
                text="More than an association."
                className="font-grotesk font-bold text-3xl sm:text-5xl leading-[1.05] block mb-6 tracking-tight"
                splitBy="word"
              />
              <p className="text-black/75 leading-relaxed mb-8 font-medium">
                SAIT is a student-led association that brings together students,
                teachers, staff, and alumni through workshops, seminars, projects,
                department publications, and shared experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Workshops", "Seminars", "Projects", "Hackathons", "Alumni", "Research"].map((t) => (
                  <span
                    key={t}
                    className="font-mono font-bold text-[10px] px-3 py-1.5 rounded-full border-2 border-black/20 bg-white/50 text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="pill-btn px-6 py-3 text-sm font-grotesk font-bold bg-black text-white w-max"
            >
              About SAIT <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="h-full">
          <div className="island h-full p-8 sm:p-12 bg-white border-2 border-black/10 flex flex-col justify-center">
            <p className="font-mono text-xs text-black/50 uppercase tracking-widest font-bold mb-8">
              A community with institutional memory
            </p>
            <ul className="space-y-4">
              {PILLARS.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-sm font-medium text-black/80 border-b-2 border-black/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-grotesk text-black/30 font-bold text-base mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
