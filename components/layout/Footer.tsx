"use client";

import { useState } from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import AnimatedText from "@/components/animations/AnimatedText";

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-black pt-16 sm:pt-24 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Pre-footer huge CTA text */}
        <div className="mb-20">
          <AnimatedText
            as="h2"
            text="Let&apos;s build something."
            className="font-grotesk font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-white mb-6"
            splitBy="word"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 rounded-full flex items-center justify-center font-grotesk font-bold text-lg text-black"
                style={{ background: "var(--yellow)" }}>
                S
              </span>
              <span className="font-grotesk font-bold text-xl">SAIT CUSAT</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-white/70 font-body mb-8">
              Students&apos; Association of Information Technology — Department
              of IT, School of Engineering, CUSAT. <br /> Est. 1995.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white hover:text-black transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="sticker font-grotesk text-xs font-bold text-black mb-4 inline-block"
              style={{ background: "var(--cyan)" }}>
              Get in touch
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-3 mt-2 max-w-md"
            >
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border-2 border-white/10 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border-2 border-white/10 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
              />
              {/* As requested in prd_audit.md, adding the missing Subject field */}
              <input
                required
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border-2 border-white/10 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
              />
              <textarea
                required
                rows={3}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/10 border-2 border-white/10 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors"
              />
              <button className="pill-btn w-full sm:w-auto px-6 py-3 text-sm font-grotesk font-bold bg-white text-black border-2 border-transparent hover:bg-black hover:text-white hover:border-white">
                Send message
              </button>
              {sent && (
                <p className="text-xs font-bold" style={{ color: "var(--sage)" }}>
                  Message sent — we&apos;ll reply within 2–3 working days.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row gap-4 justify-between font-mono font-bold text-[10px] text-white/40 uppercase tracking-widest">
          <span>
            Department of Information Technology · School of Engineering,<br className="hidden sm:block"/>
            CUSAT · Kalamassery, Kochi 682022
          </span>
          <span className="sm:text-right">
            © 2026 SAIT. All rights reserved.<br className="hidden sm:block"/>
            Prototype redesign — mock data.
          </span>
        </div>
      </div>
    </footer>
  );
}
