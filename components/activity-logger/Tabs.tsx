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
    <div className="flex gap-2 mb-10 mono text-sm">
      {tabs.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={cn(
            "px-4 py-2 border border-line",
            pathname === t.href && "bg-ink text-paper border-ink"
          )}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
