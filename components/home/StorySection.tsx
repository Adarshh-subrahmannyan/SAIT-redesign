"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/animations/AnimatedText";

const CHAPTERS = [
  {
    id: "learn",
    label: "01 — Learn",
    headline: "Where curiosity becomes craft.",
    body: "Founded in 1995, the Department of Information Technology at CUSAT is a dynamic hub of innovation. SAIT enhances student experience through workshops, magazines, and tech projects.",
    tags: ["Workshops", "Seminars", "Research", "Faculty talks"],
    color: "var(--yellow)",
  },
  {
    id: "build",
    label: "02 — Build",
    headline: "From idea to impact.",
    body: "Hackathons, project sprints, and national competitions — SAIT gives students the stage to ship real work. Team TechSait secured national 1st place in SIH 2025.",
    tags: ["Hackathons", "Projects", "SIH", "TechSummit"],
    color: "var(--cyan)",
  },
  {
    id: "connect",
    label: "03 — Connect",
    headline: "Community beyond graduation.",
    body: "1200+ alumni worldwide continue to give back through mentorship, talks, and industry guidance. SAIT creates space for continuing conversations.",
    tags: ["Alumni network", "Mentorship", "Placements", "Community"],
    color: "var(--magenta)",
  },
];

function ProgressDot({
  index,
  scrollYProgress,
  color,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  color: string;
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
      className="w-12 h-2 rounded-full origin-left border-2 border-black/10"
      style={{ scaleX, opacity, background: color }}
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
    <section ref={containerRef} className="relative mb-24 sm:mb-32" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-white border-y-2 border-black/10">
        
        {/* Dynamic Background Colour */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-500"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              ["var(--yellow)", "var(--cyan)", "var(--magenta)"]
            ),
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-2 gap-10">
          <div className="relative h-[320px] sm:h-[360px] max-w-lg">
            {CHAPTERS.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                className="absolute inset-0 flex flex-col justify-center"
                style={{ opacity: opacities[i] }}
              >
                <span className="sticker font-grotesk text-xs text-white mb-5 self-start"
                  style={{ background: chapter.color, border: "2px solid var(--ink)" }}>
                  {chapter.label}
                </span>
                <h2 className="font-grotesk font-bold text-3xl sm:text-5xl leading-[1.08] mb-5 tracking-tight">
                  {chapter.headline}
                </h2>
                <p className="text-sm sm:text-base text-black/70 leading-relaxed font-body">
                  {chapter.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {chapter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full border-2 border-black/10 text-black/60 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Huge typography right side */}
          <div className="hidden md:flex items-center justify-center relative">
            {CHAPTERS.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity: opacities[i] }}
              >
                <span 
                  className="font-grotesk font-bold text-[clamp(6rem,12vw,10rem)] leading-none select-none text-center"
                  style={{ color: chapter.color, WebkitTextStroke: "2px var(--ink)" }}
                >
                  {chapter.id.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-10 left-5 sm:left-8 flex gap-2 z-10">
          {CHAPTERS.map((c, i) => (
            <ProgressDot key={c.id} index={i} scrollYProgress={scrollYProgress} color={c.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
