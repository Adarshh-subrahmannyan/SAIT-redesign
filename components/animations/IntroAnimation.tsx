"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const STORY = ["LEARN", "BUILD", "CONNECT"] as const;
const SESSION_KEY = "sait-intro-seen";

type IntroAnimationProps = {
  onComplete: () => void;
};

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [exiting, setExiting] = useState(false);

  const finish = useCallback(() => {
    setExiting(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      onComplete();
    }, 900);
  }, [onComplete]);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) {
      onComplete();
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  useEffect(() => {
    if (!visible || exiting) return;

    if (phase < STORY.length) {
      const t = setTimeout(() => setPhase((p) => p + 1), 1400);
      return () => clearTimeout(t);
    }

    if (!showLogo) {
      const t = setTimeout(() => setShowLogo(true), 400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => finish(), 2200);
    return () => clearTimeout(t);
  }, [visible, phase, showLogo, exiting, finish]);

  if (!visible) return null;

  const currentWord = phase > 0 && phase <= STORY.length ? STORY[phase - 1] : null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="intro-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center min-h-[40vh] px-6">
            <AnimatePresence mode="wait">
              {currentWord && !showLogo && (
                <motion.div
                  key={currentWord}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex justify-center gap-1 sm:gap-2">
                    {currentWord.split("").map((char, i) => (
                      <motion.span
                        key={`${currentWord}-${char}-${i}`}
                        className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight"
                        initial={{ y: 80, opacity: 0, rotateX: -40 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                          delay: i * 0.07,
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.p
                    className="mono text-xs sm:text-sm text-muted mt-6 tracking-widest uppercase"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    {phase === 1 && "Workshops · Seminars · Knowledge"}
                    {phase === 2 && "Hackathons · Projects · Innovation"}
                    {phase === 3 && "Alumni · Mentorship · Community"}
                  </motion.p>
                </motion.div>
              )}

              {showLogo && (
                <motion.div
                  key="logo"
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="font-display font-bold text-7xl sm:text-9xl tracking-tighter text-copper"
                    initial={{ letterSpacing: "0.4em", opacity: 0 }}
                    animate={{ letterSpacing: "-0.02em", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    SAIT
                  </motion.div>
                  <motion.p
                    className="mono text-xs sm:text-sm text-muted mt-4 max-w-md mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Students Association of Information Technology
                    <br />
                    <span className="text-paper/60">Division of IT · SOE CUSAT</span>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-2">
              {STORY.map((word, i) => (
                <span
                  key={word}
                  className={`mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                    phase > i ? "text-copper" : "text-paper/30"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
            <button
              onClick={finish}
              className="mono text-xs text-paper/40 hover:text-paper transition-colors uppercase tracking-widest"
            >
              Skip intro
            </button>
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-copper"
            initial={{ width: "0%" }}
            animate={{ width: showLogo ? "100%" : `${(phase / STORY.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
