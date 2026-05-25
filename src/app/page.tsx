import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformPillars from "@/components/PlatformPillars";
import DailyBread from "@/components/DailyBread";
import CommunityPreview from "@/components/CommunityPreview";
import ResourceHub from "@/components/ResourceHub";
import LifeFaith from "@/components/LifeFaith";
import Testimonials from "@/components/Testimonials";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1"
      style={{ background: "#07070F", color: "#F2F2F8" }}
    >
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <PlatformPillars />
        <DailyBread />
        <CommunityPreview />
        <ResourceHub />
        <LifeFaith />
        <Testimonials />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
