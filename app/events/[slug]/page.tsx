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
      <Link href="/events" className="font-mono text-sm font-bold text-black/40 hover:text-black transition-colors flex items-center gap-2 mb-8">
        ← All events
      </Link>
      <div className="island p-8 sm:p-12 max-w-3xl bg-white border-2 border-black/10">
        <Tag accent>{event.tag}</Tag>
        <h1 className="font-grotesk text-4xl sm:text-5xl font-bold mt-6 mb-4 text-black/90">{event.name}</h1>
        <p className="font-body text-base text-black/70 mb-10 leading-relaxed font-medium">{event.desc}</p>
        
        <div className="grid grid-cols-2 gap-8 font-mono font-bold text-sm bg-black/5 p-6 rounded-[1.5rem]">
          <div>
            <div className="text-black/40 text-xs mb-2">Date</div>
            <div className="text-black/80">{formatDate(event.date)}</div>
          </div>
          {event.time && (
            <div>
              <div className="text-black/40 text-xs mb-2">Time</div>
              <div className="text-black/80">{event.time}</div>
            </div>
          )}
          {event.venue && (
            <div>
              <div className="text-black/40 text-xs mb-2">Venue</div>
              <div className="text-black/80">{event.venue}</div>
            </div>
          )}
        </div>
        
        {event.time && (
          <Button href="#" className="mt-8 w-full sm:w-auto">
            Register
          </Button>
        )}
      </div>
    </PageShell>
  );
}
