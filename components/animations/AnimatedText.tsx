"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "char" | "word";
  once?: boolean;
  style?: React.CSSProperties;
};

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = "span",
  splitBy = "word",
  once = true,
  style,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const units = splitBy === "char" ? text.split("") : text.split(" ");

  return (
    <Tag ref={ref} className={cn("inline-flex flex-wrap", className)} style={style} aria-label={text}>
      {units.map((unit, i) => (
        <span key={`${unit}-${i}`} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.55,
              delay: delay + i * (splitBy === "char" ? 0.03 : 0.08),
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
