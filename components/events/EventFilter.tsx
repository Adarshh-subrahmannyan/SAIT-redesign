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
      <div className="flex flex-wrap gap-3 mb-10 pb-1">
        {EVENT_TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={cn(
              "pill-btn border-2 border-black/10 px-5 py-2.5 text-sm font-bold transition-all",
              active === t 
                ? "bg-black text-white border-black hover:bg-black/80 hover:scale-105" 
                : "bg-white text-black/70 hover:border-black/30 hover:bg-black/5 hover:text-black hover:scale-105"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-20">
        <h3 className="font-grotesk text-3xl font-bold mb-8 text-black/90">Upcoming</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filt(upcoming).length ? (
            filt(upcoming).map((e) => <EventCard key={e.slug} event={e} />)
          ) : (
            <p className="text-sm font-medium text-black/50 col-span-full">No upcoming events in this category.</p>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-grotesk text-3xl font-bold mb-8 text-black/90">Past events</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filt(past).length ? (
            filt(past).map((e) => <EventCard key={e.slug} event={e} />)
          ) : (
            <p className="text-sm font-medium text-black/50 col-span-full">No past events in this category.</p>
          )}
        </div>
      </div>
    </>
  );
}
