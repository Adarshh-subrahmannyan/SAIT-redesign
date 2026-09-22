import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { formatDate } from "@/lib/utils";

export default function AnnouncementsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Announcements"
        title="Everything, in one place"
        subtitle="Deadlines, event updates, and general department notices."
      />
      <div className="space-y-4">
        {ANNOUNCEMENTS.map((a) => (
          <div key={a.title} className="bracket p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="mono text-xs w-24 shrink-0 text-muted">{formatDate(a.date)}</span>
            <Tag accent className="shrink-0 w-fit">
              {a.tag}
            </Tag>
            <div>
              <div className="font-medium text-sm">{a.title}</div>
              <div className="text-sm mt-1 text-inksoft">{a.body}</div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
