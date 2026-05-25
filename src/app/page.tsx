import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingTicker from "@/components/TrendingTicker";
import PlatformPillars from "@/components/PlatformPillars";
import QuoteCarousel from "@/components/QuoteCarousel";
import DailyBread from "@/components/DailyBread";
import CommunityPreview from "@/components/CommunityPreview";
import PrayerWallPreview from "@/components/PrayerWallPreview";
import ResourceHub from "@/components/ResourceHub";
import VideoSpotlight from "@/components/VideoSpotlight";
import PodcastHub from "@/components/PodcastHub";
import LifeFaith from "@/components/LifeFaith";
import WeeklyChallenge from "@/components/WeeklyChallenge";
import CreatorSpotlight from "@/components/CreatorSpotlight";
import EventsSection from "@/components/EventsSection";
import TopicBrowser from "@/components/TopicBrowser";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import NewsletterSignup from "@/components/NewsletterSignup";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1"
      style={{ background: "#07070F", color: "#F2F2F8" }}
    >
      <AnnouncementBanner />
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <TrendingTicker />
        <PlatformPillars />
        <QuoteCarousel />
        <DailyBread />
        <CommunityPreview />
        <PrayerWallPreview />
        <ResourceHub />
        <VideoSpotlight />
        <PodcastHub />
        <LifeFaith />
        <WeeklyChallenge />
        <CreatorSpotlight />
        <EventsSection />
        <TopicBrowser />
        <Testimonials />
        <AppDownload />
        <NewsletterSignup />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
