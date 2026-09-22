import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import PersonCard from "@/components/ui/PersonCard";
import Tag from "@/components/ui/Tag";
import { EXEC, SUBTEAMS } from "@/data/team";

export default function TeamPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Association & people"
        title="The people running SAIT"
        subtitle="One executive committee, five sub-teams — the students who plan, build, and show up."
      />

      <div className="mb-14">
        <Tag>Executive Committee</Tag>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {EXEC.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>
      </div>

      {Object.entries(SUBTEAMS).map(([team, members]) => (
        <div key={team} className="mb-12">
          <Tag>{team}</Tag>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {members.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      ))}
    </PageShell>
  );
}
