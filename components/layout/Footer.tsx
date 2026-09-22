"use client";

import { useState } from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import Tag from "@/components/ui/Tag";

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-8 h-8 border border-line flex items-center justify-center font-display font-semibold text-sm text-copperdeep">
              S
            </span>
            <span className="font-display font-semibold">SAIT</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-inksoft">
            Students&apos; Association of Information Technology — Department
            of IT, School of Engineering, CUSAT. Est. 1995.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-line flex items-center justify-center hover:border-copper"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <Tag>Get in touch</Tag>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              (e.target as HTMLFormElement).reset();
            }}
            className="space-y-2.5 mt-3"
          >
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 text-sm bg-surface border border-line text-ink placeholder:text-muted"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-sm bg-surface border border-line text-ink placeholder:text-muted"
            />
            <textarea
              required
              rows={2}
              placeholder="Message"
              className="w-full px-3 py-2 text-sm bg-surface border border-line text-ink placeholder:text-muted"
            />
            <button className="bg-ink text-paper border border-ink hover:bg-copperdeep hover:border-copperdeep px-4 py-2 text-sm font-medium w-full sm:w-auto transition-colors">
              Send message
            </button>
            {sent && (
              <p className="text-xs text-signal">
                Message sent — we&apos;ll reply within 2–3 working days.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs mono text-muted">
          <span>
            Department of Information Technology · School of Engineering,
            CUSAT · Kalamassery, Kochi 682022
          </span>
          <span>© 2026 SAIT. Prototype redesign — mock data throughout.</span>
        </div>
      </div>
    </footer>
  );
}
