"use client";

import Button from "@/components/ui/Button";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  return (
    <ScrollReveal className="mb-20">
      <div className="relative overflow-hidden border border-line bg-ink text-paper p-10 sm:p-16 text-center">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="relative">
          <AnimatedText
            as="h2"
            text="Learn something. Build something. Leave your mark."
            className="font-display font-semibold text-2xl sm:text-4xl leading-[1.15] max-w-3xl mx-auto block mb-8"
            splitBy="word"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/events">Join an event</Button>
            <Button href="/activity-logger" variant="ghost" className="!border-paper/30 !text-paper hover:!border-copper hover:!text-paper">
              Start logging
            </Button>
          </div>
          <p className="mono text-xs text-paper/50 mt-8">
            sait@cusat.ac.in · +91 484 2575510
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
