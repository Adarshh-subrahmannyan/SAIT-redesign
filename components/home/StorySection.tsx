"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const CHAPTERS = [
  {
    id: "learn",
    label: "01 — Learn",
    headline: "Where curiosity becomes craft.",
    body: "Founded in 1995, the Department of Information Technology at CUSAT is a dynamic hub of innovation. SAIT enhances student experience through workshops, magazines, and tech projects — fostering collaboration in an ever-evolving field.",
    tags: ["Workshops", "Seminars", "Research", "Faculty talks"],
  },
  {
    id: "build",
    label: "02 — Build",
    headline: "From idea to impact.",
    body: "Hackathons, project sprints, and national competitions — SAIT gives students the stage to ship real work. Team TechSait secured national 1st place in Smart India Hackathon 2025 for their AI Disaster Management System.",
    tags: ["Hackathons", "Projects", "SIH", "TechSummit"],
  },
  {
    id: "connect",
    label: "03 — Connect",
    headline: "The community doesn't end at graduation.",
    body: "1200+ alumni worldwide continue to give back through mentorship, talks, and industry guidance. SAIT creates space for alumni interaction and continuing conversations between students, teachers, and former members.",
    tags: ["Alumni network", "Mentorship", "Placements", "Community"],
  },
];

function ProgressDot({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const scaleX = useTransform(
    scrollYProgress,
    [index * 0.33, (index + 1) * 0.33],
    [0.3, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [index * 0.33, (index + 1) * 0.33],
    [0.4, 1]
  );

  return (
    <motion.div
      className="w-8 h-[2px] bg-copper origin-left"
      style={{ scaleX, opacity }}
    />
  );
}

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const learnOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const buildOpacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const connectOpacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);
  const opacities = [learnOpacity, buildOpacity, connectOpacity];

  return (
    <section ref={containerRef} className="relative mb-32 md:mb-40" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Watermark — hidden on mobile, clipped to right 45% on desktop */}
        <div
          className="hidden md:block pointer-events-none absolute top-0 bottom-0 overflow-hidden"
          style={{ left: "55%", right: 0 }}
          aria-hidden="true"
        >
          {CHAPTERS.map((chapter, i) => (
            <motion.span
              key={chapter.id}
              className="absolute inset-0 flex items-center justify-center font-display font-bold leading-none select-none whitespace-nowrap"
              style={{
                opacity: opacities[i],
                fontSize: "clamp(3.5rem,8vw,7rem)",
                color: "var(--copper)",
                opacity: opacities[i],
                filter: "opacity(0.12)",
              }}
            >
              {chapter.id.toUpperCase()}
            </motion.span>
          ))}
        </div>

        {/* Content — sits above watermark */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
          <div className="relative h-[320px] sm:h-[360px] max-w-lg">
            {CHAPTERS.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: opacities[i] }}
              >
                <span className="mono text-xs text-copperdeep uppercase tracking-widest mb-4">
                  {chapter.label}
                </span>
                <h2 className="font-display font-semibold text-3xl sm:text-5xl leading-[1.08] mb-5">
                  {chapter.headline}
                </h2>
                <p className="text-sm sm:text-base text-inksoft leading-relaxed">
                  {chapter.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-[10px] sm:text-xs px-3 py-1 border border-line text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {CHAPTERS.map((c, i) => (
            <ProgressDot key={c.id} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
