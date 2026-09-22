"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/animations/AnimatedText";
import { useIntro } from "@/components/providers/IntroProvider";

export default function Hero() {
  const { introComplete } = useIntro();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden mb-8 sm:mb-12">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-25" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-copper/5 blur-3xl pointer-events-none" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mono text-xs sm:text-sm text-copperdeep uppercase tracking-[0.2em] mb-6">
            SAIT · Division of IT · SOE CUSAT
          </p>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.95] tracking-tight">
          <AnimatedText
            as="span"
            text="LEARN."
            className="block text-[clamp(3.5rem,12vw,9rem)] text-ink"
            splitBy="char"
            delay={introComplete ? 0.2 : 0}
          />
          <AnimatedText
            as="span"
            text="BUILD."
            className="block text-[clamp(3.5rem,12vw,9rem)] text-copper"
            splitBy="char"
            delay={introComplete ? 0.5 : 0}
          />
          <AnimatedText
            as="span"
            text="CONNECT."
            className="block text-[clamp(3.5rem,12vw,9rem)] text-ink"
            splitBy="char"
            delay={introComplete ? 0.8 : 0}
          />
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base sm:text-lg text-inksoft leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          The premier student association fostering engineering excellence,
          research, hackathons, and lifelong alumni mentorship at CUSAT.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Button href="/events">Explore events</Button>
          <Button href="/activity-logger" variant="ghost">
            Activity Logger
          </Button>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.span
          className="w-px h-8 bg-line origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
