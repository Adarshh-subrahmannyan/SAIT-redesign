import Link from "next/link";
import { EventItem } from "@/data/events";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="bracket p-5">
      <div className="flex items-center justify-between mb-3">
        <Tag accent>{event.tag}</Tag>
        <span className="mono text-xs text-muted">{formatDate(event.date)}</span>
      </div>
      <h3 className="font-display text-lg font-semibold mb-1.5">
        <Link href={`/events/${event.slug}`} className="hover:text-copperdeep">
          {event.name}
        </Link>
      </h3>
      <p className="text-sm mb-3 text-inksoft">{event.desc}</p>
      <div className="flex items-center justify-between text-xs mono text-muted">
        <span>
          {event.time ? `${event.time} · ` : ""}
          {event.venue || ""}
        </span>
        {event.time && (
          <Link href={`/events/${event.slug}`} className="border border-line px-3 py-1.5 hover:border-copper">
            Details
          </Link>
        )}
      </div>
    </div>
  );
}
