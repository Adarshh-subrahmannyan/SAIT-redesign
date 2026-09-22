import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import EventFilter from "@/components/events/EventFilter";
import { EVENTS_UPCOMING, EVENTS_PAST } from "@/data/events";

export default function EventsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Events & activities"
        title="Everything SAIT is running"
        subtitle="Upcoming sessions, the flagship fixtures, and a running archive of what's already happened."
      />
      <EventFilter upcoming={EVENTS_UPCOMING} past={EVENTS_PAST} />
    </PageShell>
  );
}
