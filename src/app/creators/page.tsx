import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Users,
  CheckCircle,
  BookOpen,
  Mic,
  PenLine,
  Heart,
  Shield,
  Zap,
  Star,
  PlayCircle,
  FileText,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creators — Vine",
  description:
    "Discover teachers, worship leaders, devotional writers, apologists, and voices of faith from around the world.",
};

const featuredCreator = {
  name: "Ama Christabel",
  country: "Ghana",
  flag: "🇬🇭",
  role: "Bible Teacher & Devotional Author",
  followers: "84,200",
  posts: 847,
  videos: 124,
  bio: "Teaching the unchanging Word in a changing world. From Accra to the global church, I help believers go deeper into Scripture with joy and clarity.",
  tags: ["Bible Study", "Devotionals", "Women's Ministry"],
  gradient: "linear-gradient(135deg, #1A1430 0%, #2D1B69 50%, #1A2A0A 100%)",
  recentContent: [
    { type: "video", icon: PlayCircle, title: "The Book of Ruth — Week 4", time: "2d ago", views: "12.4K" },
    { type: "article", icon: FileText, title: "Finding Joy in the Psalms", time: "5d ago", views: "8.1K" },
    { type: "audio", icon: Headphones, title: "Morning Devotional: Proverbs 31", time: "1w ago", views: "6.7K" },
  ],
};

type FilterPill = string;
const filterPills: FilterPill[] = [
  "All",
  "Teachers",
  "Worship Leaders",
  "Writers",
  "Therapists",
  "Pastors",
  "Apologists",
  "Youth",
];

const creators = [
  {
    initials: "MO",
    name: "Marcus Osei",
    country: "Ghana",
    flag: "🇬🇭",
    role: "Bible Teacher",
    followers: "52K",
    badges: ["Theology", "Expository Preaching", "Men's Ministry"],
    bio: "Making deep theology accessible to everyday believers.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #00FF88 0%, #8B4513 100%)",
  },
  {
    initials: "SJ",
    name: "Sarah Jennings",
    country: "USA",
    flag: "🇺🇸",
    role: "Worship Leader",
    followers: "118K",
    badges: ["Worship Music", "Songwriting", "Charismatic"],
    bio: "Leading hearts into the presence of God through prophetic worship.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #6B4FBB 0%, #BB4F7A 100%)",
  },
  {
    initials: "TC",
    name: "Tunde Coker",
    country: "Nigeria",
    flag: "🇳🇬",
    role: "Apologist",
    followers: "67K",
    badges: ["Apologetics", "Philosophy", "Islam & Christianity"],
    bio: "Defending the faith with grace and intellectual rigor.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #1A6B2A 0%, #4FBBAA 100%)",
  },
  {
    initials: "JY",
    name: "Ji-Yeon Park",
    country: "South Korea",
    flag: "🇰🇷",
    role: "Devotional Writer",
    followers: "29K",
    badges: ["Devotionals", "Prayer", "Korean Church"],
    bio: "Writing devotionals that bridge Eastern thought and biblical truth.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #4F8FBB 0%, #1A1A60 100%)",
  },
  {
    initials: "LF",
    name: "Luiz Figueiredo",
    country: "Brazil",
    flag: "🇧🇷",
    role: "Youth Pastor",
    followers: "45K",
    badges: ["Youth Ministry", "Evangelism", "Discipleship"],
    bio: "Equipping the next generation of Brazilian believers for mission.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #2A8A2A 0%, #00FF88 100%)",
  },
  {
    initials: "EV",
    name: "Eva van der Berg",
    country: "Netherlands",
    flag: "🇳🇱",
    role: "Christian Therapist",
    followers: "38K",
    badges: ["Mental Health", "Trauma", "Faith-Based Counseling"],
    bio: "Integrating psychology and Scripture for whole-person healing.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #4FBBAA 0%, #1A4A6B 100%)",
  },
  {
    initials: "GW",
    name: "Grace Wanjiku",
    country: "Kenya",
    flag: "🇰🇪",
    role: "Devotional Writer",
    followers: "22K",
    badges: ["Devotionals", "Women of Faith", "African Church"],
    bio: "Pouring out the faithfulness of God one story at a time.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #BB4F7A 0%, #4A1A1A 100%)",
  },
  {
    initials: "CM",
    name: "Carlos Mendoza",
    country: "Colombia",
    flag: "🇨🇴",
    role: "Marriage Counselor",
    followers: "31K",
    badges: ["Marriage", "Family", "Biblical Counseling"],
    bio: "Helping couples build Christ-centered, lasting covenant marriages.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #00FF88 0%, #BB4F4F 100%)",
  },
  {
    initials: "PR",
    name: "Priya Rajan",
    country: "India",
    flag: "🇮🇳",
    role: "Bible Teacher",
    followers: "19K",
    badges: ["Women's Ministry", "New Testament", "Indian Church"],
    bio: "Bringing the light of Christ to the subcontinent through the Word.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #E07030 0%, #6B4FBB 100%)",
  },
  {
    initials: "BH",
    name: "Ben Harrison",
    country: "Australia",
    flag: "🇦🇺",
    role: "Apologist",
    followers: "57K",
    badges: ["Apologetics", "Science & Faith", "Atheism"],
    bio: "Showing that Christianity is not only livable — it's intellectually compelling.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #4F8FBB 0%, #1A3A1A 100%)",
  },
  {
    initials: "RA",
    name: "Ruth Adeyemi",
    country: "UK",
    flag: "🇬🇧",
    role: "Worship Leader",
    followers: "73K",
    badges: ["Worship", "Gospel", "African Diaspora"],
    bio: "Crafting anthems of praise that move both heaven and earth.",
    verified: true,
    avatarGradient: "linear-gradient(135deg, #6B4FBB 0%, #00FF88 100%)",
  },
  {
    initials: "JP",
    name: "Joel Pastrana",
    country: "Philippines",
    flag: "🇵🇭",
    role: "Missionary",
    followers: "14K",
    badges: ["Missions", "Church Planting", "Southeast Asia"],
    bio: "Planting churches across the unreached islands of Southeast Asia.",
    verified: false,
    avatarGradient: "linear-gradient(135deg, #4FBBAA 0%, #4F8FBB 100%)",
  },
];

const roleIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  "Bible Teacher": BookOpen,
  "Worship Leader": Mic,
  "Devotional Writer": PenLine,
  "Christian Therapist": Heart,
  Apologist: Shield,
  "Youth Pastor": Zap,
  "Marriage Counselor": Heart,
  Missionary: Star,
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.1) 0%, rgba(107,79,187,0.08) 40%, transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            <span
              className="inline-block mb-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(0,255,136,0.1)",
                color: "#00FF88",
                border: "1px solid rgba(0,255,136,0.2)",
              }}
            >
              1,240+ Verified Creators
            </span>
            <h1 className="text-5xl sm:text-6xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>
              Vine{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #00FF88 0%, #44FFAA 50%, #00FF88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Creators
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#8A8AA8" }}>
              Discover teachers, worship leaders, devotional writers, apologists, and voices of faith from around the world.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Featured Creator */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                Featured Creator
              </h2>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)" }}
              >
                Creator of the Month
              </span>
            </div>

            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Cover */}
              <div
                className="h-48 sm:h-56 relative"
                style={{ background: featuredCreator.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(0,255,136,0.15) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(to top, #12121F, transparent)" }}
                />
              </div>

              <div className="px-6 sm:px-8 pb-8 -mt-12 relative">
                <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                  {/* Avatar */}
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #00FF88 0%, #6B4FBB 100%)",
                      border: "3px solid #12121F",
                      color: "#07070F",
                    }}
                  >
                    AC
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black" style={{ color: "#F2F2F8" }}>
                        {featuredCreator.name}
                      </h3>
                      <span>{featuredCreator.flag}</span>
                      <span className="text-xs" style={{ color: "#8A8AA8" }}>
                        {featuredCreator.country}
                      </span>
                      <CheckCircle size={16} style={{ color: "#00FF88" }} />
                    </div>
                    <p className="text-sm mb-3" style={{ color: "#8A8AA8" }}>
                      {featuredCreator.role}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-4">
                      {[
                        { label: "Followers", value: featuredCreator.followers },
                        { label: "Posts", value: featuredCreator.posts.toLocaleString() },
                        { label: "Videos", value: featuredCreator.videos.toLocaleString() },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="text-lg font-black" style={{ color: "#F2F2F8" }}>
                            {s.value}
                          </p>
                          <p className="text-xs" style={{ color: "#6A6A88" }}>
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 flex-shrink-0">
                    <button
                      className="px-5 py-2.5 rounded-xl text-sm font-bold"
                      style={{
                        background: "linear-gradient(135deg, #00FF88 0%, #B8960C 100%)",
                        color: "#07070F",
                      }}
                    >
                      Follow
                    </button>
                    <button
                      className="px-5 py-2.5 rounded-xl text-sm font-bold"
                      style={{
                        background: "transparent",
                        color: "#00FF88",
                        border: "1px solid rgba(0,255,136,0.4)",
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-5 text-sm leading-relaxed max-w-2xl" style={{ color: "#A0A0C0" }}>
                  {featuredCreator.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {featuredCreator.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: "rgba(107,79,187,0.15)", color: "#9B7FEB", border: "1px solid rgba(107,79,187,0.25)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Recent Content */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6A6A88" }}>
                    Recent Content
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {featuredCreator.recentContent.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-xl p-3 flex items-center gap-3 cursor-pointer"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(0,255,136,0.12)" }}
                          >
                            <Icon size={16} style={{ color: "#00FF88" }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold truncate" style={{ color: "#E0E0F0" }}>
                              {item.title}
                            </p>
                            <p className="text-[10px] mt-0.5" style={{ color: "#6A6A88" }}>
                              {item.views} views · {item.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filter / Search */}
          <section className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl flex-1"
                style={{ background: "#12121F", border: "1px solid #1E1E32" }}
              >
                <Search size={16} style={{ color: "#6A6A88" }} />
                <input
                  type="text"
                  placeholder="Search creators by name or topic..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "#F2F2F8" }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterPills.map((pill, i) => (
                <button
                  key={pill}
                  className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150"
                  style={
                    i === 0
                      ? {
                          background: "linear-gradient(135deg, #00FF88 0%, #B8960C 100%)",
                          color: "#07070F",
                        }
                      : {
                          background: "#12121F",
                          color: "#8A8AA8",
                          border: "1px solid #1E1E32",
                        }
                  }
                >
                  {pill}
                </button>
              ))}
            </div>
          </section>

          {/* Creator Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {creators.map((creator) => {
                const RoleIcon = roleIcons[creator.role] ?? BookOpen;
                return (
                  <CreatorCard key={creator.name} creator={creator} RoleIcon={RoleIcon} />
                );
              })}
            </div>
          </section>

          {/* Become a Creator CTA */}
          <section>
            <div
              className="rounded-3xl p-10 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,255,136,0.08) 0%, rgba(107,79,187,0.12) 100%)",
                border: "1px solid rgba(0,255,136,0.2)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(107,79,187,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(0,255,136,0.15)", border: "1px solid rgba(0,255,136,0.25)" }}
                >
                  <Mic size={26} style={{ color: "#00FF88" }} />
                </div>
                <h2 className="text-3xl font-black mb-3" style={{ color: "#F2F2F8" }}>
                  Share Your Gift
                </h2>
                <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#8A8AA8" }}>
                  You have a voice. Vine gives you the platform to reach believers around the world with your God-given message.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                  {[
                    { icon: Users, title: "Global Audience", desc: "Reach millions of Christians across 84+ countries" },
                    { icon: Zap, title: "Creator Tools", desc: "Upload videos, write articles, host live sessions and more" },
                    { icon: Star, title: "Monetization", desc: "Earn through subscriptions, tips, and sponsorships" },
                  ].map((benefit) => {
                    const BIcon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="rounded-2xl p-5 text-left"
                        style={{ background: "rgba(18,18,31,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <BIcon size={20} style={{ color: "#00FF88" }} className="mb-3" />
                        <p className="text-sm font-bold mb-1" style={{ color: "#F2F2F8" }}>
                          {benefit.title}
                        </p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>
                          {benefit.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-black"
                  style={{
                    background: "linear-gradient(135deg, #00FF88 0%, #B8960C 100%)",
                    color: "#07070F",
                  }}
                >
                  Apply to Create
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Creator Card — extracted to keep JSX readable                         */
/* ------------------------------------------------------------------ */

type Creator = (typeof creators)[number];

function CreatorCard({
  creator,
  RoleIcon,
}: {
  creator: Creator;
  RoleIcon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#12121F", border: "1px solid #1E1E32" }}
    >
      {/* Avatar area */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black flex-shrink-0"
            style={{ background: creator.avatarGradient, color: "rgba(255,255,255,0.9)" }}
          >
            {creator.initials}
          </div>
          {creator.verified && (
            <CheckCircle size={16} style={{ color: "#00FF88" }} />
          )}
        </div>

        <div className="mb-1 flex items-center gap-1.5 flex-wrap">
          <p className="text-sm font-black" style={{ color: "#F2F2F8" }}>
            {creator.name}
          </p>
          <span className="text-sm">{creator.flag}</span>
        </div>
        <p className="text-xs mb-1" style={{ color: "#6A6A88" }}>
          {creator.country}
        </p>

        {/* Role */}
        <div className="flex items-center gap-1.5 mb-3">
          <RoleIcon size={12} style={{ color: "#6B4FBB" }} />
          <p className="text-xs font-semibold" style={{ color: "#9B7FEB" }}>
            {creator.role}
          </p>
        </div>

        {/* Followers */}
        <div className="flex items-center gap-1 mb-3">
          <Users size={12} style={{ color: "#6A6A88" }} />
          <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>
            {creator.followers}
          </span>
          <span className="text-xs" style={{ color: "#6A6A88" }}>
            followers
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {creator.badges.map((badge) => (
            <span
              key={badge}
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: "rgba(107,79,187,0.12)",
                color: "#8A7ACC",
                border: "1px solid rgba(107,79,187,0.2)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-xs leading-relaxed mb-4" style={{ color: "#8A8AA8" }}>
          {creator.bio}
        </p>
      </div>

      {/* Follow button */}
      <div className="px-5 pb-5 mt-auto">
        <button
          className="w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-150"
          style={{
            background: "rgba(0,255,136,0.1)",
            color: "#00FF88",
            border: "1px solid rgba(0,255,136,0.25)",
          }}
        >
          Follow
        </button>
      </div>
    </div>
  );
}
