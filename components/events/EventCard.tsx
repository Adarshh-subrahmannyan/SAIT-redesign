import Link from "next/link";
import { EventItem } from "@/data/events";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="island p-6 bg-white border-2 border-black/10 hover:border-black/30 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <Tag accent>{event.tag}</Tag>
        <span className="font-mono font-bold text-xs text-black/40">{formatDate(event.date)}</span>
      </div>
      <h3 className="font-grotesk text-2xl font-bold mb-2 text-black/90">
        <Link href={`/events/${event.slug}`} className="hover:text-[var(--magenta)] transition-colors">
          {event.name}
        </Link>
      </h3>
      <p className="font-body font-medium text-sm mb-5 text-black/60 line-clamp-2">{event.desc}</p>
      <div className="flex items-center justify-between text-xs font-mono font-bold text-black/40">
        <span>
          {event.time ? `${event.time} · ` : ""}
          {event.venue || ""}
        </span>
        {event.time && (
          <Link 
            href={`/events/${event.slug}`} 
            className="pill-btn border-2 border-black/10 px-4 py-2 hover:border-black/30 hover:bg-black/5 text-black/70 hover:text-black transition-all"
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
}
