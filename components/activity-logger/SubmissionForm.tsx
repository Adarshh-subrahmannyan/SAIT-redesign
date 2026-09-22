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

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm bg-white border-2 border-black/10 text-black placeholder:text-black/30 focus:border-black focus:outline-none transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.02)]";
  const labelClass = "font-mono text-xs font-bold uppercase tracking-widest block mb-2 text-black/50";

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit} className="space-y-5 island p-6 sm:p-8 border-2 border-black/10 bg-[#fafafa]">
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
        <div className="pt-2">
          <Button type="submit" className="w-full">
            Submit for verification
          </Button>
        </div>
        {sent && <p className="text-sm font-bold text-green-700 bg-green-100 p-3 rounded-lg text-center mt-2">Submitted — status: Pending review.</p>}
      </form>

      <div>
        <h3 className="font-grotesk font-bold text-2xl mb-6 text-black/90">Your submission history</h3>
        <div className="space-y-4">
          {[...SEED_SUBMISSIONS, ...submissions].map((s, i) => (
            <HistoryRow key={i} item={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
