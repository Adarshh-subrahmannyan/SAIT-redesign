import { Submission } from "@/data/activity-logger";
import { formatDate } from "@/lib/utils";

export default function HistoryRow({ item }: { item: Submission }) {
  const isVerified = item.status === "Verified";
  const bg = isVerified ? "var(--sage-light)" : "var(--yellow-light)";
  const color = isVerified ? "var(--sage)" : "var(--yellow)";
  const textColor = isVerified ? "text-green-800" : "text-yellow-800";
  return (
    <div className="island p-4 sm:p-5 flex items-center justify-between gap-4 border-2 border-black/10 bg-white">
      <div className="min-w-0">
        <div className="font-grotesk font-bold text-base text-black/90 truncate">{item.activity}</div>
        <div className="text-xs mt-1 font-mono font-bold text-black/40 uppercase tracking-widest">
          {item.type} · {item.role || "—"} · {formatDate(item.date)}
        </div>
      </div>
      <span 
        className={`font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border-2 border-black/10 shrink-0 flex items-center gap-1.5 ${textColor}`}
        style={{ background: bg }}
      >
        <span className="w-2 h-2 rounded-full border border-black/20" style={{ background: color }} />
        {item.status}
      </span>
    </div>
  );
}
