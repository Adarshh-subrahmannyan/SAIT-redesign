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
        <h3 className="font-display text-lg font-semibold mb-4">Verified activity feed</h3>
        <div className="space-y-3">
          {verified.length ? (
            verified.map((s, i) => <HistoryRow key={i} item={s} />)
          ) : (
            <p className="text-sm text-muted">No verified activity yet.</p>
          )}
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="font-display text-lg font-semibold mb-4">Leaderboard — this semester</h3>
        <div className="border border-line">
          {LEADERBOARD.map((l, i) => (
            <div
              key={l.name}
              className={`flex items-center gap-3 p-4 ${i !== LEADERBOARD.length - 1 ? "border-b border-line" : ""}`}
            >
              <span className="mono text-xs w-5 text-muted">{i + 1}</span>
              <span className="text-sm font-medium flex-1">{l.name}</span>
              <span className="mono text-xs text-muted">{l.activities} logged</span>
              <span className="font-display font-semibold text-sm text-copperdeep">{l.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
