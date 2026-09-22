"use client";

import { formatDate } from "@/lib/utils";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ANNOUNCEMENTS } from "@/data/announcements";
import Link from "next/link";

export default function AnnouncementsSection() {
  const items = ANNOUNCEMENTS.slice(0, 4);

  return (
    <section className="mb-32 md:mb-40">
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
            Stay in the loop
          </p>
          <AnimatedText
            as="h2"
            text="Latest updates."
            className="font-display font-semibold text-3xl sm:text-5xl block"
            splitBy="word"
          />
        </div>
        <Link
          href="/announcements"
          className="mono text-sm text-copperdeep hover:text-copper transition-colors shrink-0"
        >
          All announcements →
        </Link>
      </ScrollReveal>

      <div className="divide-y divide-line border border-line">
        {items.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.06}>
            <article className="p-5 sm:p-6 bg-surface hover:bg-paperalt/40 transition-colors group">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span
                  className={`mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                    a.tag === "Deadline"
                      ? "border-copper text-copperdeep"
                      : "border-line text-muted"
                  }`}
                >
                  {a.tag}
                </span>
                <time className="mono text-xs text-muted">{formatDate(a.date)}</time>
              </div>
              <h3 className="font-display font-medium text-base sm:text-lg group-hover:text-copperdeep transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-inksoft mt-1.5 line-clamp-2">{a.body}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
