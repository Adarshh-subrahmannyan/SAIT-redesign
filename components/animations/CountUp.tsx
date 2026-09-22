"use client";

import { useInView, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
};

function parseValue(raw: string): { num: number; prefix: string; suffix: string } | null {
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;
  return { num: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseValue(value);
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(value);

  useMotionValueEvent(spring, "change", (v) => {
    if (!parsed) return;
    const rounded = Number.isInteger(parsed.num) ? Math.round(v) : v.toFixed(1);
    setDisplay(`${parsed.prefix}${rounded}${parsed.suffix}`);
  });

  useEffect(() => {
    if (inView && parsed) spring.set(parsed.num);
  }, [inView, parsed, spring]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
