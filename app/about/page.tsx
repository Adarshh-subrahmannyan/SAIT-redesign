"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FACULTY } from "@/data/faculty";
import { COMMITTEE } from "@/data/committee";
import PersonCard from "@/components/ui/PersonCard";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Zap,
  Trophy,
  Users,
} from "lucide-react";

// ─── Static data ──────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "1995",
    label: "The Beginning",
    text: "Department of Information Technology founded within CUSAT's School of Engineering. A handful of students, one hallway, and a vision to build the next generation of Kerala's engineers.",
    image: "/about-campus.jpg",
    imageAlt: "CUSAT School of Engineering campus",
  },
  {
    year: "2003",
    label: "SAIT is Born",
    text: "SAIT formalised as the department's student association. Starting with INTERFACE — an annual technical magazine — the association gave students their first platform to publish, collaborate, and think beyond the curriculum.",
    image: "/about-workshop.jpg",
    imageAlt: "Students working on the INTERFACE magazine",
  },
  {
    year: "2014",
    label: "First Hackathon",
    text: "The first department-run hackathon ignited a culture of building. TechFest became an annual fixture — bringing students, industry professionals, and ideas into one intense 24-hour arena.",
    image: "/about-hackathon.jpg",
    imageAlt: "Students at the TechFest hackathon",
  },
  {
    year: "2026",
    label: "Going Digital",
    text: "This site — and the Activity Logger — launch as SAIT's first digital record of student participation. Every workshop attended, every project shipped, now lives in one open, permanent record.",
    image: "/about-campus.jpg",
    imageAlt: "SAIT digital platform launch 2026",
  },
];

const STATS = [
  { value: 30, suffix: "+", label: "Years of IT education" },
  { value: 500, suffix: "+", label: "Students across batches" },
  { value: 50, suffix: "+", label: "Events run by SAIT" },
  { value: 20, suffix: "+", label: "Alumni in top companies" },
];

const ACTIVITIES = [
  {
    Icon: BookOpen,
    title: "Workshops",
    desc: "Hands-on technical sessions on tools, languages, and frameworks — run by students, for students.",
    sub: "Learn → Build → Share",
  },
  {
    Icon: Zap,
    title: "Hackathons",
    desc: "Build, collaborate and compete. TechFest brings 24 hours, real problems, and teams from across Kerala.",
    sub: "Build → Ship → Win",
  },
  {
    Icon: Trophy,
    title: "TechFest",
    desc: "The annual flagship event. Ideas turn into prototypes, prototypes turn into demos, demos turn into careers.",
    sub: "Ideas → Prototypes → Demos",
  },
  {
    Icon: Users,
    title: "Community",
    desc: "Connect with students across batches, alumni in industry, and faculty who actively mentor beyond the classroom.",
    sub: "Connect → Collaborate → Grow",
  },
];

const QUICK_LINKS = [
  { label: "Curriculum & Syllabus", href: "#" },
  { label: "Academic Calendar", href: "#" },
  { label: "Lab & Library Access", href: "#" },
  { label: "Faculty Directory", href: "#faculty" },
];

const SAIT_TODAY = [
  {
    label: "Activity Logger",
    desc: "Log workshops, hackathons, and certifications. Build a visible record of your participation.",
    href: "/activity-logger",
  },
  {
    label: "Upcoming Events",
    desc: "See what SAIT is running this semester — deadlines, workshops, and flagship events.",
    href: "/events",
  },
  {
    label: "Achievements",
    desc: "Browse the department's running scoreboard of wins, publications, and competitions.",
    href: "/achievements",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Animated number that counts up when it first enters the viewport */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return ctrl.stop;
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/** Parallax image wrapper */
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
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

/** Clickable horizontal timeline */
function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  const item = TIMELINE[active];

  return (
    <section id="story" className="mb-20 sm:mb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
        >
          Our story
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

      {/* Year dot selector */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8">
        <div className="relative flex items-center">
          {/* Track */}
          <div className="absolute left-0 right-0 h-px bg-line top-[7px]" />
          <div className="relative flex justify-between w-full">
            {TIMELINE.map((t, i) => (
              <button
                key={t.year}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2.5 group"
                aria-label={`Go to ${t.year}`}
              >
                <motion.div
                  animate={{
                    scale: active === i ? 1.5 : 1,
                    backgroundColor:
                      active === i ? "var(--copper)" : "var(--paper)",
                    borderColor:
                      active === i ? "var(--copper)" : "var(--line)",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-3.5 h-3.5 rounded-full border-2 z-10 bg-paper"
                />
                <motion.span
                  animate={{
                    color:
                      active === i ? "var(--copperdeep)" : "var(--muted)",
                    fontWeight: active === i ? "600" : "400",
                  }}
                  className="font-mono text-xs sm:text-sm group-hover:text-ink transition-colors"
                >
                  {t.year}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content panel */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 border border-line overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <ParallaxImage src={item.image} alt={item.imageAlt} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent flex items-end p-6">
                <span className="font-display font-bold text-6xl sm:text-8xl text-paper/90 leading-none">
                  {item.year}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center p-7 sm:p-10 bg-surface">
              <span className="mono text-xs text-copperdeep uppercase tracking-widest mb-3">
                {item.label}
              </span>
              <p className="text-inksoft leading-relaxed text-sm sm:text-base mb-8">
                {item.text
                  .replace(/'/g, "\u2019")
                  .replace(/&amp;/g, "&")}
              </p>
              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="w-8 h-8 border border-line flex items-center justify-center text-inksoft hover:border-copper hover:text-copper disabled:opacity-30 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="mono text-xs text-muted select-none">
                  {active + 1} / {TIMELINE.length}
                </span>
                <button
                  onClick={() =>
                    setActive((a) => Math.min(TIMELINE.length - 1, a + 1))
                  }
                  disabled={active === TIMELINE.length - 1}
                  className="w-8 h-8 border border-line flex items-center justify-center text-inksoft hover:border-copper hover:text-copper disabled:opacity-30 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);

  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] sm:h-[80vh] overflow-hidden flex items-end"
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-24 w-full"
        >
          <p className="mono text-xs text-copper uppercase tracking-[0.2em] mb-4">
            About SAIT
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-paper leading-[1.08] max-w-2xl mb-5">
            Connecting IT students.
            <br />
            Building skills.
            <br />
            Creating opportunities.
          </h1>
          <p className="text-paper/60 max-w-md text-sm sm:text-base leading-relaxed mb-8">
            SAIT is the student association of the Department of Information
            Technology, CUSAT — running workshops, hackathons, and technical
            communities since 1995.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#story"
              className="inline-flex items-center gap-2 bg-copper text-paper px-5 py-2.5 text-sm font-medium hover:bg-copperdeep transition-colors group"
            >
              Explore SAIT
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#faculty"
              className="inline-flex items-center gap-2 border border-paper/40 text-paper px-5 py-2.5 text-sm font-medium hover:border-paper transition-colors group"
            >
              Meet the Team
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="mono text-[9px] text-paper/35 tracking-[0.2em] uppercase">
            Explore our story
          </span>
          <div className="w-px h-7 bg-gradient-to-b from-paper/35 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-line">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-8 sm:py-10"
              >
                <div className="font-display font-bold text-4xl sm:text-5xl text-copperdeep leading-none mb-2">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted mono mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-center text-[10px] text-muted/50 mono pb-2 px-4">
          * estimated figures — to be updated with verified SAIT data
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── Vision & Mission ──────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                label: "Vision",
                text: "To be a major contributor to the global technology base through high-level scholarship, innovation, and research.",
              },
              {
                label: "Mission",
                text: "Education & Partnerships: Deliver quality engineering education across all levels through balanced programs, and build strong collaborative partnerships with industry, alumni, and government bodies.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bracket p-7 sm:p-9"
              >
                <h3 className="font-display text-lg font-semibold mb-3 text-copperdeep">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-inksoft">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Interactive Timeline ─────────────────────────────────── */}
      <InteractiveTimeline />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── What SAIT does ───────────────────────────────────────── */}
        <section className="mb-20 sm:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-semibold text-2xl sm:text-3xl mb-10"
          >
            What happens at SAIT
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.015 }}
                className="bracket p-6 group cursor-default"
              >
                <div className="w-9 h-9 border border-line flex items-center justify-center text-copperdeep mb-4 group-hover:border-copper transition-colors duration-200">
                  <a.Icon size={16} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold mb-2 text-sm">
                  {a.title}
                </h3>
                <p className="text-xs leading-relaxed text-inksoft mb-4">
                  {a.desc}
                </p>
                <span className="mono text-[10px] text-copper tracking-wide">
                  {a.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Faculty ──────────────────────────────────────────────── */}
        <section id="faculty" className="mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-semibold text-2xl sm:text-3xl mb-8"
          >
            Faculty &amp; administration
          </motion.h2>
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

        {/* ── Student committee ────────────────────────────────────── */}
        <section className="mb-20 sm:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
          >
            Student committee
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-semibold text-xl sm:text-2xl mb-2"
          >
            The people running SAIT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-sm text-muted mb-8"
          >
            Mock data — replace with real committee details before submission.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {COMMITTEE.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <PersonCard {...m} />
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted mono">
            See full team →{" "}
            <Link href="/team" className="text-copper hover:underline">
              People page
            </Link>
          </p>
        </section>

        {/* ── SAIT Today ────────────────────────────────────────────── */}
        <section className="mb-20 sm:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-copperdeep uppercase tracking-widest mb-3"
          >
            2026
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-semibold text-2xl sm:text-3xl mb-3"
          >
            From association to digital community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-inksoft text-sm sm:text-base max-w-lg mb-10 leading-relaxed"
          >
            SAIT is building a permanent record of student participation,
            projects, and technical activities — starting now.
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-4">
            {SAIT_TODAY.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={item.href}
                  className="bracket p-6 block group hover:border-copper transition-colors h-full"
                >
                  <h3 className="font-display font-semibold text-sm mb-2 group-hover:text-copperdeep transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-inksoft leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="mono text-xs text-copper flex items-center gap-1">
                    Explore{" "}
                    <ArrowRight
                      size={11}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Academic Resources ────────────────────────────────────── */}
        <section className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-lg font-semibold mb-5"
          >
            Academic resources
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mono text-sm">
            {QUICK_LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="bracket p-4 sm:p-5 block hover:border-copper transition-colors group"
              >
                <span className="group-hover:text-copperdeep transition-colors text-sm">
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
