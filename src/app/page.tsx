import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
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
import ScrollToTop from "@/components/ScrollToTop";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1"
      style={{ background: "#07070F", color: "#F2F2F8" }}
    >
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <TrustBar />
        <TrendingTicker />
        <FadeIn><PlatformPillars /></FadeIn>
        <FadeIn delay={100}><QuoteCarousel /></FadeIn>
        <FadeIn><DailyBread /></FadeIn>
        <FadeIn><CommunityPreview /></FadeIn>
        <FadeIn delay={50}><PrayerWallPreview /></FadeIn>
        <FadeIn><ResourceHub /></FadeIn>
        <FadeIn delay={50}><VideoSpotlight /></FadeIn>
        <FadeIn><PodcastHub /></FadeIn>
        <FadeIn><LifeFaith /></FadeIn>
        <FadeIn delay={50}><WeeklyChallenge /></FadeIn>
        <FadeIn><CreatorSpotlight /></FadeIn>
        <FadeIn><EventsSection /></FadeIn>
        <FadeIn><TopicBrowser /></FadeIn>
        <FadeIn><Testimonials /></FadeIn>
        <FadeIn delay={50}><AppDownload /></FadeIn>
        <FadeIn><NewsletterSignup /></FadeIn>
        <FadeIn><JoinCTA /></FadeIn>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
