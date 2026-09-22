import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import { ALUMNI } from "@/data/alumni";

export default function AlumniPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Alumni"
        title="Where they landed"
        subtitle="A running spotlight on IT-CUSAT graduates, and what they've built since."
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {ALUMNI.map((a) => (
          <div key={a.name} className="bracket p-6 flex gap-4">
            <div className="w-11 h-11 border border-line flex items-center justify-center font-display text-xs shrink-0 text-copperdeep">
              {a.initials}
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="font-display font-semibold">{a.name}</h3>
                <span className="mono text-xs text-muted">Batch of {a.batch}</span>
              </div>
              <div className="text-sm mt-1 text-copperdeep">{a.role}</div>
              <p className="text-sm mt-2 text-inksoft">{a.note}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
