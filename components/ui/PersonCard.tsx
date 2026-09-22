"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export default function PersonCard({
  name,
  role,
  initials,
  github,
  linkedin,
}: {
  name: string;
  role: string;
  initials: string;
  github?: string;
  linkedin?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="group cursor-default island border-2 border-black/10 hover:border-black/30 transition-colors h-full p-5 bg-white"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-grotesk font-bold text-sm shrink-0 transition-colors duration-200"
          style={{ background: "var(--yellow)", color: "black" }}>
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-grotesk font-bold text-base text-black/90">{name}</div>
          <div className="font-body text-xs font-medium mt-1 text-black/60">{role}</div>
          {(github || linkedin) && (
            <div className="flex gap-2.5 mt-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-black transition-colors"
                  aria-label={`${name} GitHub`}
                >
                  <Github size={12} strokeWidth={2.5} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/70 hover:text-[#0077b5] transition-colors"
                  aria-label={`${name} LinkedIn`}
                >
                  <Linkedin size={12} strokeWidth={2.5} />
                </a>
              )}
            </div>
          )}
        </div>
        <ArrowRight
          size={16}
          className="shrink-0 text-black/20 group-hover:text-black/60 transition-colors mt-1"
        />
      </div>
    </motion.div>
  );
}
