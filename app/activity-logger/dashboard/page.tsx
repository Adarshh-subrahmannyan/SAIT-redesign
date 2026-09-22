import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import ActivityLoggerTabs from "@/components/activity-logger/Tabs";
import LeaderboardFeed from "@/components/activity-logger/LeaderboardFeed";

export default function DashboardPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Student activity logger"
        title="Log it once, it counts everywhere"
        subtitle="Verified entries feed this leaderboard — filtered by team, semester, or activity type."
      />
      <ActivityLoggerTabs />
      <LeaderboardFeed />
    </PageShell>
  );
}
