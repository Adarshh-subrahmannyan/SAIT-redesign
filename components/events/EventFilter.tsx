"use client";

import { useState } from "react";
import { EVENT_TAGS, EventItem } from "@/data/events";
import { cn } from "@/lib/utils";
import EventCard from "./EventCard";

export default function EventFilter({
  upcoming,
  past,
}: {
  upcoming: EventItem[];
  past: EventItem[];
}) {
  const [active, setActive] = useState<(typeof EVENT_TAGS)[number]>("All");

  const filt = (list: EventItem[]) =>
    active === "All" ? list : list.filter((e) => e.tag === active);

  return (
    <>
      <div className="flex gap-2 mb-8 pb-1 overflow-x-auto">
        {EVENT_TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={cn(
              "whitespace-nowrap px-4 py-2 text-sm mono border border-line",
              active === t && "bg-ink text-paper border-ink"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="font-display text-lg font-semibold mb-5">Upcoming</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {filt(upcoming).length ? (
            filt(upcoming).map((e) => <EventCard key={e.slug} event={e} />)
          ) : (
            <p className="text-sm text-muted col-span-2">No upcoming events in this category.</p>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold mb-5">Past events — archive</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {filt(past).length ? (
            filt(past).map((e) => <EventCard key={e.slug} event={e} />)
          ) : (
            <p className="text-sm text-muted col-span-2">No past events in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}
