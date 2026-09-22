import { notFound } from "next/navigation";
import Link from "next/link";
import { EVENTS_UPCOMING, EVENTS_PAST } from "@/data/events";
import { formatDate } from "@/lib/utils";
import PageShell from "@/components/ui/PageShell";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return [...EVENTS_UPCOMING, ...EVENTS_PAST].map((e) => ({ slug: e.slug }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = [...EVENTS_UPCOMING, ...EVENTS_PAST].find((e) => e.slug === params.slug);
  if (!event) notFound();

  return (
    <PageShell>
      <Link href="/events" className="mono text-sm text-copperdeep">
        ← All events
      </Link>
      <div className="bracket p-7 sm:p-10 mt-6 max-w-2xl">
        <Tag accent>{event.tag}</Tag>
        <h1 className="font-display text-3xl font-semibold mt-4 mb-3">{event.name}</h1>
        <p className="text-sm text-inksoft mb-6">{event.desc}</p>
        <div className="grid grid-cols-2 gap-4 text-sm mono">
          <div>
            <div className="text-muted text-xs mb-1">Date</div>
            {formatDate(event.date)}
          </div>
          {event.time && (
            <div>
              <div className="text-muted text-xs mb-1">Time</div>
              {event.time}
            </div>
          )}
          {event.venue && (
            <div>
              <div className="text-muted text-xs mb-1">Venue</div>
              {event.venue}
            </div>
          )}
        </div>
        {event.time && (
          <Button href="#" className="mt-8">
            Register
          </Button>
        )}
      </div>
    </PageShell>
  );
}
