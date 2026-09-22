"use client";

import { useEffect, useState } from "react";
import { ACTIVITY_TYPES, SEED_SUBMISSIONS, Submission } from "@/data/activity-logger";
import HistoryRow from "./HistoryRow";
import Button from "@/components/ui/Button";

const STORAGE_KEY = "sait_activity_log";

export default function SubmissionForm() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ activity: "", date: "", type: ACTIVITY_TYPES[0], role: "", proof: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubmissions(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const entry: Submission = {
      activity: form.activity,
      date: form.date || new Date().toISOString().slice(0, 10),
      type: form.type,
      role: form.role,
      proof: form.proof,
      status: "Pending",
    };
    const next = [entry, ...submissions];
    setSubmissions(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setSent(true);
    setForm({ activity: "", date: "", type: ACTIVITY_TYPES[0], role: "", proof: "" });
  }

  const inputClass = "w-full px-3 py-2.5 text-sm bg-surface border border-line text-ink placeholder:text-muted";
  const labelClass = "text-xs mono block mb-1.5 text-muted";

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClass}>Activity name</label>
          <input
            required
            value={form.activity}
            onChange={(e) => setForm({ ...form, activity: e.target.value })}
            type="text"
            placeholder="e.g. Smart India Hackathon"
            className={inputClass}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Date</label>
            <input
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              type="date"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className={inputClass}
            >
              {ACTIVITY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass}>Your role</label>
          <input
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            type="text"
            placeholder="e.g. Participant, Team lead, Speaker"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Proof (link)</label>
          <input
            value={form.proof}
            onChange={(e) => setForm({ ...form, proof: e.target.value })}
            type="url"
            placeholder="Link to certificate, repo, or photo"
            className={inputClass}
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Submit for verification
        </Button>
        {sent && <p className="text-xs text-signal">Submitted — status: Pending review.</p>}
      </form>

      <div>
        <h3 className="font-display text-lg font-semibold mb-4">Your submission history</h3>
        <div className="space-y-3">
          {[...SEED_SUBMISSIONS, ...submissions].map((s, i) => (
            <HistoryRow key={i} item={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
