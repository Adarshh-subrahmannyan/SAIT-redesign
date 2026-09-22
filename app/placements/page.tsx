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

      <div className="island grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-black/10 border-2 border-black/10 mb-16 overflow-hidden bg-white">
        {PLACEMENT_STATS.map((s, i) => (
          <div key={s.label} className="p-8 sm:p-10 flex flex-col justify-center">
            <div 
              className="font-grotesk text-4xl sm:text-5xl font-bold"
              style={{ color: i === 0 ? "var(--magenta)" : i === 1 ? "var(--cyan)" : i === 2 ? "var(--yellow)" : "var(--indigo)" }}
            >{s.value}</div>
            <div className="text-xs mt-3 font-mono font-bold text-black/50">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h3 className="font-grotesk text-2xl font-bold mb-6 text-black/90">Recruiters this cycle</h3>
        <div className="flex flex-wrap gap-3">
          {RECRUITERS.map((r) => (
            <div key={r} className="pill-btn border-2 border-black/10 px-5 py-2.5 text-sm font-bold text-black/70 hover:border-black/30 hover:bg-black/5 transition-colors cursor-default">
              {r}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-grotesk text-2xl font-bold mb-6 text-black/90">Career resources</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {CAREER_RESOURCES.map((r) => (
            <div key={r.title} className="island p-6 bg-white border-2 border-black/10 hover:border-black/30 transition-colors">
              <h4 className="font-grotesk font-bold text-xl mb-3 text-black/90">{r.title}</h4>
              <p className="font-body text-sm text-black/60 font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
