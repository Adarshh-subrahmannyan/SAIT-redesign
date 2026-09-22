"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FACULTY } from "@/data/faculty";
import PersonCard from "@/components/ui/PersonCard";

const TIMELINE = [
  {
    year: "1995",
    label: "The Beginning",
    text: "Department of Information Technology founded within CUSAT's School of Engineering. A handful of students, one hallway, and a vision to build the next generation of Kerala's engineers.",
    image: "/about-campus.jpg",
    imageAlt: "CUSAT School of Engineering campus at golden hour",
  },
  {
    year: "2003",
    label: "SAIT is Born",
    text: "SAIT formalised as the department's student association. Starting with an annual technical magazine — INTERFACE — the association gave students their first platform to publish, collaborate, and think beyond the curriculum.",
    image: "/about-workshop.jpg",
    imageAlt: "Students collaborating on the INTERFACE magazine layout",
  },
  {
    year: "2014",
    label: "First Hackathon",
    text: "The first department-run hackathon ignited a culture of building. TechFest became an annual fixture — bringing students, industry professionals, and ideas into one intense 24-hour arena.",
    image: "/about-hackathon.jpg",
    imageAlt: "Students competing at the TechFest hackathon",
  },
  {
    year: "2026",
    label: "Going Digital",
    text: "This site — and the Activity Logger — launch as SAIT's first digital record of student participation. Every workshop attended, every project shipped, now lives in one open, permanent record.",
    image: "/about-campus.jpg",
    imageAlt: "Modern SAIT digital platform launch",
  },
];

const QUICK_LINKS = [
  { label: "Curriculum & syllabus", href: "#" },
  { label: "Academic calendar", href: "#" },
  { label: "Lab & library access", href: "#" },
];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden rounded-sm">
      <motion.div className="absolute inset-[-10%] w-[120%] h-[120%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </motion.div>
    </div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -40 : 40, 0]
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 border border-line overflow-hidden ${
        index > 0 ? "-mt-px" : ""
      }`}
    >
      {/* Image — left on even, right on odd */}
      <div
        className={`relative h-56 sm:h-72 md:h-80 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <ParallaxImage src={item.image} alt={item.imageAlt} />
        {/* Year overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent flex items-end p-6">
          <span className="font-display font-bold text-5xl sm:text-7xl text-paper/90 leading-none">
            {item.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center p-7 sm:p-10 bg-surface ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <span className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
          {item.label}
        </span>
        <p className="text-inksoft leading-relaxed text-sm sm:text-base">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[55vh] sm:h-[65vh] overflow-hidden flex items-end"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/about-campus.jpg"
            alt="CUSAT School of Engineering"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-10 sm:pb-16 w-full"
        >
          <p className="mono text-xs text-copper uppercase tracking-[0.2em] mb-3">
            About SAIT
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-paper leading-[1.05] max-w-2xl">
            The department, and the association behind it.
          </h1>
          <p className="text-paper/70 mt-4 max-w-lg text-sm sm:text-base leading-relaxed">
            Two histories, one hallway — how CUSAT&apos;s IT department and SAIT grew
            alongside each other.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── Vision & Mission ─────────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                label: "Vision",
                text: "To be a department where students leave equipped not just with a degree, but with a working practice of building, shipping, and mentoring others through the same climb.",
              },
              {
                label: "Mission",
                text: "Run consistent, well-documented technical programming — workshops, hackathons, and an open record of student activity — that students can point to at placement time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="bracket p-7 sm:p-9"
              >
                <h3 className="font-display text-lg font-semibold mb-3 text-copperdeep">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-inksoft">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── History Timeline ─────────────────────────────────────── */}
      <section className="mb-20 sm:mb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
          >
            A brief history
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-semibold text-3xl sm:text-4xl"
          >
            Three decades of building.
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── Faculty ──────────────────────────────────────────────── */}
        <section className="mb-20 sm:mb-28">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-lg font-semibold mb-6"
          >
            Faculty &amp; administration
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FACULTY.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <PersonCard {...f} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Quick links ──────────────────────────────────────────── */}
        <section className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-lg font-semibold mb-5"
          >
            Quick academic links
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mono text-sm">
            {QUICK_LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bracket p-4 sm:p-5 block hover:border-copper transition-colors group"
              >
                <span className="group-hover:text-copperdeep transition-colors">
                  {l.label}
                </span>
                <span className="text-copper ml-1">→</span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
