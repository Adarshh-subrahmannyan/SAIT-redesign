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
import PageShell from "@/components/ui/PageShell";

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
    color: "var(--yellow)",
  },
  {
    label: "Upcoming Events",
    desc: "See what SAIT is running this semester — deadlines, workshops, and flagship events.",
    href: "/events",
    color: "var(--cyan)",
  },
  {
    label: "Achievements",
    desc: "Browse the department's running scoreboard of wins, publications, and competitions.",
    href: "/achievements",
    color: "var(--magenta)",
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
    <div ref={ref} className="relative w-full h-full overflow-hidden border-r-2 border-black/10 max-md:border-r-0 max-md:border-b-2">
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
          className="sticker font-grotesk text-xs font-bold mb-4 inline-block"
          style={{ background: "var(--yellow)", color: "var(--ink)", border: "2px solid var(--ink)" }}
        >
          Our story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-grotesk font-bold text-3xl sm:text-4xl text-black/90"
        >
          Three decades of building.
        </motion.h2>
      </div>

      {/* Year dot selector */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8">
        <div className="relative flex items-center">
          {/* Track */}
          <div className="absolute left-0 right-0 h-[2px] bg-black/10 top-[7px]" />
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
                    backgroundColor: active === i ? "var(--magenta)" : "white",
                    borderColor: active === i ? "var(--magenta)" : "rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-3.5 h-3.5 rounded-full border-[2px] z-10"
                />
                <motion.span
                  animate={{
                    color: active === i ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.4)",
                    fontWeight: active === i ? "700" : "500",
                  }}
                  className="font-mono text-xs sm:text-sm group-hover:text-black/80 transition-colors"
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
            className="island grid grid-cols-1 md:grid-cols-2 border-2 border-black/10 overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <ParallaxImage src={item.image} alt={item.imageAlt} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 pointer-events-none">
                <span className="font-grotesk font-black text-6xl sm:text-8xl text-white/90 leading-none"
                  style={{ textShadow: "4px 4px 0 rgba(0,0,0,1)" }}>
                  {item.year}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="font-mono text-xs text-black/40 font-bold uppercase tracking-widest mb-4">
                {item.label}
              </span>
              <p className="font-body font-medium text-black/80 leading-relaxed text-sm sm:text-base mb-8">
                {item.text.replace(/'/g, "\u2019").replace(/&amp;/g, "&")}
              </p>
              
              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center text-black/60 hover:border-black hover:text-black disabled:opacity-30 hover:bg-black/5 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                </button>
                <span className="font-mono font-bold text-xs text-black/40 select-none">
                  {active + 1} / {TIMELINE.length}
                </span>
                <button
                  onClick={() =>
                    setActive((a) => Math.min(TIMELINE.length - 1, a + 1))
                  }
                  disabled={active === TIMELINE.length - 1}
                  className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center text-black/60 hover:border-black hover:text-black disabled:opacity-30 hover:bg-black/5 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={16} strokeWidth={2.5} />
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
    <div className="bg-[#FAFAFA]">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] sm:h-[80vh] overflow-hidden flex items-end border-b-2 border-black/10"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-24 w-full"
        >
          <p className="sticker text-xs font-grotesk font-bold mb-5 inline-block"
            style={{ background: "var(--yellow)", color: "var(--ink)", border: "2px solid var(--ink)" }}>
            About SAIT
          </p>
          <h1 className="font-grotesk font-bold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] max-w-3xl mb-6 tracking-tight">
            Connecting IT students.
            <br />
            Building skills.
            <br />
            Creating opportunities.
          </h1>
          <p className="text-white/80 max-w-md text-base sm:text-lg leading-relaxed mb-10 font-medium">
            SAIT is the student association of the Department of Information
            Technology, CUSAT — running workshops, hackathons, and technical
            communities since 1995.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#story"
              className="pill-btn inline-flex items-center gap-2 text-black px-6 py-3.5 text-sm font-grotesk font-bold transition-transform hover:scale-105 border-2 border-transparent"
              style={{ background: "var(--yellow)" }}
            >
              Explore SAIT
              <ArrowRight size={16} />
            </a>
            <a
              href="#faculty"
              className="pill-btn inline-flex items-center gap-2 border-2 border-white/20 text-white bg-white/10 px-6 py-3.5 text-sm font-grotesk font-bold hover:bg-white hover:text-black hover:border-transparent transition-all"
            >
              Meet the Team
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase font-bold">
            Explore our story
          </span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="border-b-2 border-black/10 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-black/10 border-x-2 border-black/10 -mx-[2px]">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-10 sm:py-12 bg-white"
              >
                <div className="font-grotesk font-bold text-4xl sm:text-5xl leading-none mb-3 text-black">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-black/50 font-mono font-bold uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ── Vision & Mission ──────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Vision",
                text: "To be a major contributor to the global technology base through high-level scholarship, innovation, and research.",
                color: "var(--cyan)",
              },
              {
                label: "Mission",
                text: "Education & Partnerships: Deliver quality engineering education across all levels through balanced programs, and build strong collaborative partnerships with industry, alumni, and government bodies.",
                color: "var(--magenta)",
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
                className="island p-8 sm:p-10 border-2 border-black/10 bg-white shadow-[4px_4px_0_rgba(0,0,0,0.05)] hover:border-black transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-4 h-4 rounded-full border-2 border-black" style={{ background: item.color }} />
                  <h3 className="font-grotesk text-2xl font-bold text-black/90">
                    {item.label}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-black/70 font-medium font-body">
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
            className="sticker font-grotesk text-xs font-bold mb-4 inline-block"
            style={{ background: "var(--magenta)", color: "white", border: "2px solid transparent" }}
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-grotesk font-bold text-3xl sm:text-4xl mb-10 text-black/90"
          >
            What happens at SAIT
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="island p-8 bg-white border-2 border-black/10 hover:border-black transition-all cursor-default flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full border-2 border-black/10 flex items-center justify-center text-black mb-6 bg-black/5">
                  <a.Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="font-grotesk font-bold text-xl mb-3 text-black/90">
                  {a.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-black/60 mb-6 flex-grow font-body">
                  {a.desc}
                </p>
                <span className="font-mono text-[10px] font-bold text-black/40 uppercase tracking-widest mt-auto border-t-2 border-black/5 pt-4">
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
            className="sticker font-grotesk text-xs font-bold mb-4 inline-block"
            style={{ background: "var(--cyan)", color: "var(--ink)", border: "2px solid var(--ink)" }}
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-grotesk font-bold text-3xl sm:text-4xl mb-10 text-black/90"
          >
            Faculty &amp; administration
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="sticker font-grotesk text-xs font-bold mb-4 inline-block bg-black text-white"
          >
            Student committee
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h2 className="font-grotesk font-bold text-3xl sm:text-4xl mb-3 text-black/90">
                The people running SAIT
              </h2>
              <p className="text-base font-medium text-black/60 font-body">
                Mock data — replace with real committee details before submission.
              </p>
            </motion.div>
            <Link href="/team" className="pill-btn shrink-0 bg-white border-2 border-black/10 px-5 py-2.5 text-sm font-grotesk font-bold hover:border-black hover:bg-black/5 transition-colors">
              See full team →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>

        {/* ── SAIT Today ────────────────────────────────────────────── */}
        <section className="mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="island bg-black p-8 sm:p-12 border-2 border-black text-white relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mb-12">
              <p className="sticker font-grotesk text-xs font-bold mb-5 inline-block text-black bg-[var(--yellow)] border-2 border-black">
                2026 and beyond
              </p>
              <h2 className="font-grotesk font-bold text-3xl sm:text-5xl mb-5 leading-[1.1]">
                From physical association to digital community.
              </h2>
              <p className="text-white/80 text-lg font-medium leading-relaxed font-body">
                SAIT is building a permanent record of student participation,
                projects, and technical activities — starting now.
              </p>
            </div>

            <div className="relative z-10 grid sm:grid-cols-3 gap-6">
              {SAIT_TODAY.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="island p-6 bg-white hover:bg-[#fafafa] border-2 border-black transition-all group flex flex-col h-full text-black"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center mb-5" style={{ background: item.color }}>
                    <ArrowRight size={16} strokeWidth={2.5} className="text-black group-hover:rotate-[-45deg] transition-transform" />
                  </div>
                  <h3 className="font-grotesk font-bold text-xl mb-3 text-black">
                    {item.label}
                  </h3>
                  <p className="text-sm font-medium text-black/60 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Academic Resources ────────────────────────────────────── */}
        <section className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-grotesk text-2xl font-bold mb-6 text-black/90"
          >
            Academic resources
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="island p-5 sm:p-6 bg-white border-2 border-black/10 hover:border-black hover:bg-black/5 transition-all group flex items-center justify-between"
              >
                <span className="font-grotesk font-bold text-sm sm:text-base text-black/80 group-hover:text-black">
                  {l.label}
                </span>
                <span className="w-8 h-8 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all text-black/40">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
