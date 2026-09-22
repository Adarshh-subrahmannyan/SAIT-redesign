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
      <Hero />
      
      {/* Marquee Banner */}
      <div className="border-y-2 border-black/10 py-3 overflow-hidden bg-white mb-16 sm:mb-24 flex">
        <div className="marquee-track flex items-center gap-12 font-grotesk font-bold text-sm tracking-wide uppercase">
          {Array(10).fill("").map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Registrations for TechSummit &apos;26 close soon
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Alumni talk series: Big Tech interviews
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--yellow)" }}></span>
                New SAIT website beta is live
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <StatsHighlight />
      </div>

      <StorySection />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
