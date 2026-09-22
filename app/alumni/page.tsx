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
          <div key={a.name} className="island p-6 flex gap-5 bg-white border-2 border-black/10 hover:border-black/30 transition-colors">
            <div 
              className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center font-grotesk font-bold text-lg shrink-0 transition-colors duration-200"
              style={{ background: "var(--yellow)", color: "black" }}
            >
              {a.initials}
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="font-grotesk font-bold text-xl text-black/90">{a.name}</h3>
                <span className="font-mono text-xs font-bold text-black/40">Batch of {a.batch}</span>
              </div>
              <div className="text-sm mt-1 font-body font-bold text-[var(--magenta)]">{a.role}</div>
              <p className="text-sm mt-3 text-black/60 font-medium leading-relaxed">{a.note}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
