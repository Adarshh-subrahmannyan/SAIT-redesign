"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ActivityLoggerTabs() {
  const pathname = usePathname();
  const tabs = [
    { href: "/activity-logger/submit", label: "Submit activity" },
    { href: "/activity-logger/dashboard", label: "Dashboard & feed" },
  ];
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {tabs.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={cn(
            "pill-btn px-6 py-3 text-sm font-grotesk font-bold border-2 transition-all",
            pathname === t.href 
              ? "bg-black text-white border-black" 
              : "bg-white text-black/70 border-black/10 hover:border-black hover:text-black hover:bg-black/5"
          )}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
