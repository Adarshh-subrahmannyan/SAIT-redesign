import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { PLACEMENT_STATS, RECRUITERS, CAREER_RESOURCES } from "@/data/placements";

export default function PlacementsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Placements & careers"
        title="Where the department's graduates go"
        subtitle="A stable record of placement performance, and the resources students use to get there."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-line mb-14 bg-line">
        {PLACEMENT_STATS.map((s) => (
          <div key={s.label} className="p-6 bg-surface">
            <div className="font-display text-2xl font-semibold text-copperdeep">{s.value}</div>
            <div className="text-xs mt-1.5 text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-14">
        <h3 className="font-display text-lg font-semibold mb-5">Recruiters this cycle</h3>
        <div className="flex flex-wrap gap-3">
          {RECRUITERS.map((r) => (
            <Tag key={r} className="text-[0.8rem] px-4 py-2">
              {r}
            </Tag>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold mb-5">Career resources</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {CAREER_RESOURCES.map((r) => (
            <div key={r.title} className="bracket p-5">
              <h4 className="font-display font-medium mb-2">{r.title}</h4>
              <p className="text-sm text-inksoft">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
