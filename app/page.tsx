import Hero from "@/components/home/Hero";
import StatsHighlight from "@/components/home/StatsHighlight";
import StorySection from "@/components/home/StorySection";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import CommunitySection from "@/components/home/CommunitySection";
import AchievementsStrip from "@/components/home/AchievementsStrip";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import QuickLinks from "@/components/home/QuickLinks";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
        <Hero />
        <StatsHighlight />
      </div>
      <StorySection />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FeaturedEvent />
        <CommunitySection />
        <AchievementsStrip />
        <AnnouncementsSection />
        <QuickLinks />
        <CTASection />
      </div>
    </>
  );
}
