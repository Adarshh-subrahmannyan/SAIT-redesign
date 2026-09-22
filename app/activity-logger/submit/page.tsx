import PageShell from "@/components/ui/PageShell";
import SectionHeader from "@/components/ui/SectionHeader";
import ActivityLoggerTabs from "@/components/activity-logger/Tabs";
import SubmissionForm from "@/components/activity-logger/SubmissionForm";

export default function SubmitPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Student activity logger"
        title="Log it once, it counts everywhere"
        subtitle="Submit workshops, hackathons and certifications here — verified entries feed the department leaderboard."
      />
      <ActivityLoggerTabs />
      <SubmissionForm />
    </PageShell>
  );
}
