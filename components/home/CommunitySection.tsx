"use client";

import Button from "@/components/ui/Button";
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
    <section className="mb-32 md:mb-40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <ScrollReveal>
          <p className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
            02 — What&apos;s happening
          </p>
          <AnimatedText
            as="h2"
            text="More than an association."
            className="font-display font-semibold text-3xl sm:text-5xl leading-[1.08] block mb-6"
            splitBy="word"
          />
          <p className="text-inksoft leading-relaxed mb-6">
            SAIT is a student-led association that brings together students,
            teachers, staff, and alumni through workshops, seminars, projects,
            department publications, and shared experiences.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Workshops",
              "Seminars",
              "Projects",
              "Hackathons",
              "Alumni",
              "Research",
            ].map((t) => (
              <span
                key={t}
                className="mono text-[10px] px-3 py-1 border border-line text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <Button href="/about">About SAIT</Button>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bracket p-8 sm:p-10 bg-surface">
            <p className="mono text-xs text-muted uppercase tracking-widest mb-4">
              A community with institutional memory
            </p>
            <ul className="space-y-3">
              {PILLARS.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-inksoft border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <span className="mono text-copperdeep text-xs mt-0.5">
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
