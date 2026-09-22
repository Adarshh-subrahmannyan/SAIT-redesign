"use client";

import { useEffect, useState } from "react";
import { LEADERBOARD, SEED_SUBMISSIONS, Submission } from "@/data/activity-logger";
import HistoryRow from "./HistoryRow";

const STORAGE_KEY = "sait_activity_log";

export default function LeaderboardFeed() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubmissions(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const verified = [...SEED_SUBMISSIONS, ...submissions].filter((s) => s.status === "Verified");

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-3">
        <h3 className="font-grotesk font-bold text-2xl mb-6 text-black/90">Verified activity feed</h3>
        <div className="space-y-4">
          {verified.length ? (
            verified.map((s, i) => <HistoryRow key={i} item={s} />)
          ) : (
            <p className="text-sm font-medium text-black/50">No verified activity yet.</p>
          )}
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="font-grotesk font-bold text-2xl mb-6 text-black/90">Leaderboard — this semester</h3>
        <div className="island border-2 border-black/10 bg-white overflow-hidden">
          {LEADERBOARD.map((l, i) => (
            <div
              key={l.name}
              className={`flex items-center gap-3 p-4 sm:p-5 ${i !== LEADERBOARD.length - 1 ? "border-b-2 border-black/10" : ""} hover:bg-black/5 transition-colors`}
            >
              <span className="font-mono font-bold text-sm w-6 text-black/30">{i + 1}</span>
              <span className="text-base font-bold text-black/90 flex-1">{l.name}</span>
              <span className="font-mono text-xs font-bold text-black/40 uppercase tracking-widest">{l.activities} logged</span>
              <span className="font-grotesk font-bold text-lg" style={{ color: "var(--magenta)" }}>{l.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
