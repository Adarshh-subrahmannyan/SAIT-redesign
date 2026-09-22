"use client";

import { useState } from "react";
import Image from "next/image";
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
              <div className="flex items-center justify-center">
                <Image src="/logo.png" alt="SAIT Logo" width={40} height={40} className="rounded-full" />
              </div>
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

          <div className="relative">
            <div className="island bg-[var(--yellow)] p-6 sm:p-8 border-2 border-black shadow-[8px_8px_0_var(--cyan)] max-w-md transform rotate-1 hover:rotate-0 transition-transform">
              <span className="sticker font-grotesk text-xs font-bold text-white mb-6 inline-block bg-black border-2 border-black">
                Get in touch
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  (e.target as HTMLFormElement).reset();
                }}
                className="space-y-4"
              >
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl font-body font-bold text-sm bg-white border-2 border-black text-black placeholder:text-black/40 focus:shadow-[4px_4px_0_black] focus:outline-none transition-shadow"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl font-body font-bold text-sm bg-white border-2 border-black text-black placeholder:text-black/40 focus:shadow-[4px_4px_0_black] focus:outline-none transition-shadow"
                />
                {/* As requested in prd_audit.md, adding the missing Subject field */}
                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl font-body font-bold text-sm bg-white border-2 border-black text-black placeholder:text-black/40 focus:shadow-[4px_4px_0_black] focus:outline-none transition-shadow"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-xl font-body font-bold text-sm bg-white border-2 border-black text-black placeholder:text-black/40 focus:shadow-[4px_4px_0_black] focus:outline-none transition-shadow"
                />
                <button className="pill-btn w-full sm:w-auto px-8 py-3.5 text-sm font-grotesk font-black bg-[var(--magenta)] text-white border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_black] uppercase tracking-wide">
                  Send message
                </button>
                {sent && (
                  <p className="text-sm font-bold mt-2" style={{ color: "var(--indigo-dark)" }}>
                    Message sent — we&apos;ll reply soon!
                  </p>
                )}
              </form>
            </div>
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
