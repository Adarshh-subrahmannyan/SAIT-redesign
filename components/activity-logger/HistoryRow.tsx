import { Submission } from "@/data/activity-logger";
import { formatDate } from "@/lib/utils";

export default function HistoryRow({ item }: { item: Submission }) {
  const color = item.status === "Verified" ? "text-signal border-signal" : "text-copper border-copper";
  return (
    <div className="bracket p-4 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="font-medium text-sm truncate">{item.activity}</div>
        <div className="text-xs mt-0.5 mono text-muted">
          {item.type} · {item.role || "—"} · {formatDate(item.date)}
        </div>
      </div>
      <span className={`mono text-[0.7rem] border px-2 py-0.5 shrink-0 flex items-center gap-1.5 ${color}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Verified" ? "bg-signal" : "bg-copper"}`} />
        {item.status}
      </span>
    </div>
  );
}
