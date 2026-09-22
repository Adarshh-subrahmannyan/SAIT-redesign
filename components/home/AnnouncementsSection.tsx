"use client";

import { formatDate } from "@/lib/utils";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ANNOUNCEMENTS } from "@/data/announcements";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementsSection() {
  const items = ANNOUNCEMENTS.slice(0, 4);

  return (
    <section className="mb-16 sm:mb-24">
      <ScrollReveal className="island overflow-hidden bg-magenta">
        <div style={{ background: "var(--magenta)" }}>
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 p-8 sm:p-12 pb-6 sm:pb-8">
          <div>
            <span className="sticker text-xs font-grotesk font-bold mb-4 inline-block"
              style={{ background: "var(--yellow)", color: "var(--ink)", border: "2px solid var(--ink)" }}>
              Updates
            </span>
            <AnimatedText
              as="h2"
              text="Latest announcements."
              className="font-grotesk font-bold text-3xl sm:text-5xl block text-white tracking-tight"
              splitBy="word"
            />
          </div>
          <Link
            href="/announcements"
            className="pill-btn px-6 py-3 text-sm font-grotesk font-bold shrink-0 self-end bg-white text-black border-2 border-transparent hover:border-black"
          >
            All announcements <ArrowRight size={15} />
          </Link>
        </div>

        {/* List */}
        <div className="px-8 sm:px-12 pb-8 sm:pb-12">
          <div className="divide-y-2 divide-white/20">
            {items.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.06}>
                <article className="py-6 flex flex-col gap-2 group cursor-pointer hover:pl-2 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white ${
                        a.tag === "Deadline" ? "text-red-500" : "text-black"
                      }`}
                    >
                      {a.tag}
                    </span>
                    <time className="font-mono text-xs text-white/70 font-bold">{formatDate(a.date)}</time>
                  </div>
                  <h3 className="font-grotesk font-bold text-lg sm:text-xl text-white mt-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-white/80 font-medium line-clamp-2">{a.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
