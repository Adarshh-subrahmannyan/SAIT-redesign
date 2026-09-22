import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import EventFilter from "@/components/events/EventFilter";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import { EVENTS_UPCOMING, EVENTS_PAST } from "@/data/events";

export default function EventsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Events & activities"
        title="Everything SAIT is running"
        subtitle="Upcoming sessions, the flagship fixtures, and a running archive of what's already happened."
      />
      <div className="-mt-4">
        <FeaturedEvent />
      </div>
      <EventFilter upcoming={EVENTS_UPCOMING} past={EVENTS_PAST} />
    </PageShell>
  );
}
