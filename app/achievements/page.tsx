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
      <div className="border border-line">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={a.title}
            className={`flex items-center gap-4 p-5 ${i !== ACHIEVEMENTS.length - 1 ? "border-b border-line" : ""}`}
          >
            <span className="mono text-xs w-12 shrink-0 text-muted">{a.year}</span>
            <Tag accent className="shrink-0">
              {a.kind}
            </Tag>
            <span className="text-sm sm:text-base font-medium">{a.title}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
