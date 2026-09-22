"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  return (
    <ScrollReveal className="mb-20">
      <div className="island relative overflow-hidden p-10 sm:p-20 text-center"
        style={{ background: "var(--indigo-dark)", color: "white" }}>
        
        {/* Decorative circle */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-50 blur-3xl"
          style={{ background: "var(--magenta)" }} />

        <div className="relative z-10 flex flex-col items-center">
          <span className="sticker font-grotesk text-xs font-bold mb-6 text-black"
            style={{ background: "var(--yellow)" }}>
            Get Involved
          </span>
          
          <AnimatedText
            as="h2"
            text="Learn something. Build something. Leave your mark."
            className="font-grotesk font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-4xl mx-auto block mb-10 tracking-tight"
            splitBy="word"
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="pill-btn px-8 py-4 text-base font-grotesk font-bold text-black border-2 border-transparent"
              style={{ background: "var(--yellow)" }}
            >
              Join an event <ArrowRight size={18} />
            </Link>
            <Link
              href="/activity-logger"
              className="pill-btn px-8 py-4 text-base font-grotesk font-bold border-2 border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-transparent transition-all"
            >
              Start logging
            </Link>
          </div>
          
          <p className="font-mono font-bold text-xs text-white/50 mt-12 tracking-wide uppercase">
            sait@cusat.ac.in · +91 484 2575510
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
