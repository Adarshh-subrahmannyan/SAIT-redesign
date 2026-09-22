import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function AchievementsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Hall of fame"
        title="What students have won"
        subtitle="Hackathons, papers, and competitions — the department's running scoreboard."
      />
      <div className="island border-2 border-black/10 overflow-hidden bg-white">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a.title}
            className={`flex flex-col sm:flex-row sm:items-center gap-4 p-6 sm:p-8 hover:bg-black/5 transition-colors ${i !== ACHIEVEMENTS.length - 1 ? "border-b-2 border-black/10" : ""}`}
          >
            <div className="flex items-center gap-4 sm:w-48 shrink-0">
              <span className="font-mono text-sm font-bold text-black/40">{a.year}</span>
              <Tag accent className="shrink-0">
                {a.kind}
              </Tag>
            </div>
            <span className="text-base sm:text-lg font-grotesk font-bold text-black/90">{a.title}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
