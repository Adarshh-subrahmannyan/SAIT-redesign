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
          <div key={a.title} className="island p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-2 border-black/10 bg-white hover:bg-black/5 transition-colors">
            <span className="font-mono text-xs font-bold w-24 shrink-0 text-black/40 uppercase tracking-widest">{formatDate(a.date)}</span>
            <Tag accent className="shrink-0 w-fit">
              {a.tag}
            </Tag>
            <div>
              <div className="font-grotesk font-bold text-lg text-black/90">{a.title}</div>
              <div className="text-sm mt-1 font-medium text-black/60 leading-relaxed">{a.body}</div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
