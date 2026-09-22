"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import Bracket from "./Bracket";

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
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="group cursor-default"
    >
      <Bracket className="p-4 h-full group-hover:border-copper transition-colors duration-200">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 border border-line flex items-center justify-center font-display text-xs shrink-0 text-copperdeep group-hover:border-copper transition-colors duration-200">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display font-medium text-sm">{name}</div>
            <div className="text-xs mt-0.5 text-muted">{role}</div>
            {(github || linkedin) && (
              <div className="flex gap-2.5 mt-2">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted hover:text-ink transition-colors"
                    aria-label={`${name} GitHub`}
                  >
                    <Github size={12} />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted hover:text-copper transition-colors"
                    aria-label={`${name} LinkedIn`}
                  >
                    <Linkedin size={12} />
                  </a>
                )}
              </div>
            )}
          </div>
          <ArrowRight
            size={13}
            className="shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
          />
        </div>
      </Bracket>
    </motion.div>
  );
}
