import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Flame,
  Sparkles,
  TrendingUp,
  ArrowUp,
  MessageSquare,
  Bookmark,
  Share2,
  Pin,
  Award,
  Users,
  ChevronRight,
  Plus,
  BookOpen,
  Heart,
  Baby,
  Briefcase,
  HelpCircle,
  Headphones,
  Shield,
  Star,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = { title: "Discussions — Vine" };

const hubs = [
  { icon: BookOpen, name: "Theology & Doctrine", members: "24.1k", color: "#6B4FBB", groupId: "theology-doctrine" },
  { icon: Heart, name: "Mental Health & Faith", members: "18.7k", color: "#00FF88", groupId: "mental-health-faith" },
  { icon: Users, name: "Young Adults", members: "31.2k", color: "#4FBBAA", groupId: "young-adults" },
  { icon: Baby, name: "Christian Parenting", members: "12.4k", color: "#BB4F7A", groupId: "christian-parenting" },
  { icon: Briefcase, name: "Faith & Career", members: "9.8k", color: "#4F8FBB", groupId: "faith-career" },
  { icon: HelpCircle, name: "Doubts & Questions", members: "15.3k", color: "#BB7A4F", groupId: "doubts-questions" },
];

const suggestedHubs = [
  { name: "Apologetics", members: "7.2k" },
  { name: "Worship & Music", members: "22.1k" },
  { name: "Christian Marriage", members: "10.5k" },
  { name: "Prayer Warriors", members: "28.9k" },
];

const posts = [
  {
    id: 1,
    slug: "free-will-omniscience-003",
    hub: "Theology & Doctrine",
    hubColor: "#6B4FBB",
    time: "2 hours ago",
    title: "Does free will actually exist if God is omniscient? Looking for serious theological discussion.",
    preview: "I've been wrestling with this for months. If God knows every choice I'll ever make before I make it, can those really be my choices? I've read Calvin and Arminius but still feel stuck...",
    flair: "Deep Dive",
    flairColor: "#6B4FBB",
    votes: 847,
    comments: 234,
    saves: 91,
    pinned: true,
    award: null,
  },
  {
    id: 2,
    slug: "faith-and-doubt-001",
    hub: "Christian Parenting",
    hubColor: "#BB4F7A",
    time: "45 min ago",
    title: "My 13-year-old asked me why God allows suffering — and I froze. How do you explain theodicy to a teen?",
    preview: "She came home from school after a classmate's parent died of cancer and asked point blank: 'Why would a good God let that happen?' I gave some generic answer and felt terrible about it...",
    flair: "Question",
    flairColor: "#4F8FBB",
    votes: 412,
    comments: 167,
    saves: 58,
    pinned: false,
    award: null,
  },
  {
    id: 3,
    slug: "depression-therapy-faith-005",
    hub: "Mental Health & Faith",
    hubColor: "#00FF88",
    time: "5 hours ago",
    title: "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
    preview: "I used to believe seeking therapy was a lack of faith. My pastor even said once that the Holy Spirit should be enough. But I was drowning. Finally went to a Christian counselor and...",
    flair: "Testimony",
    flairColor: "#4FBBAA",
    votes: 2341,
    comments: 318,
    saves: 445,
    pinned: false,
    award: "🏆 Community Favorite",
  },
  {
    id: 4,
    slug: "faith-and-doubt-001",
    hub: "Doubts & Questions",
    hubColor: "#BB7A4F",
    time: "1 day ago",
    title: "Honest confession: I haven't felt God's presence in over a year. Am I losing my faith?",
    preview: "I still go to church, still pray, still read scripture. But it all feels hollow and mechanical. Like I'm talking to a wall. People keep telling me faith isn't a feeling but I'm scared...",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 1893,
    comments: 502,
    saves: 387,
    pinned: false,
    award: "💜 Most Supported",
  },
  {
    id: 5,
    slug: "cancer-free-praise-005",
    hub: "Prayer Warriors",
    hubColor: "#4F8FBB",
    time: "3 hours ago",
    title: "UPDATE: I posted 6 months ago asking for prayer for my dad's stage 4 diagnosis — HE IS CANCER FREE.",
    preview: "I'm shaking as I type this. The doctors called it 'medically inexplicable.' Six months ago 247 of you prayed with me in this thread. I want you all to know — the prayer worked. God heard us...",
    flair: "Praise Report",
    flairColor: "#00FF88",
    votes: 5621,
    comments: 891,
    saves: 1204,
    pinned: false,
    award: "⭐ Top Post This Week",
  },
  {
    id: 6,
    slug: null,
    hub: "Faith & Career",
    hubColor: "#4F8FBB",
    time: "8 hours ago",
    title: "How I turned my lunch break into a 15-minute prayer/devotional habit that transformed my work life",
    preview: "I work in finance — high stress, long hours, secular environment. Started blocking my calendar for 15 min every day at 12:30 and doing a quick devotional in my car. Six months in and...",
    flair: "Life Hack",
    flairColor: "#4FBBAA",
    votes: 634,
    comments: 89,
    saves: 211,
    pinned: false,
    award: null,
  },
  {
    id: 7,
    slug: "christian-dating-apps-007",
    hub: "Young Adults",
    hubColor: "#4FBBAA",
    time: "12 hours ago",
    title: "Dating as a Christian in 2026 is genuinely hard. Anyone else feel like the apps are working against you?",
    preview: "Hinge, Bumble, Christian Mingle — tried them all. The Christian filters are basically useless. Had one 'Christian' match suggest we skip church to hook up on Sunday morning. Feeling...",
    flair: "Relationships",
    flairColor: "#BB4F7A",
    votes: 789,
    comments: 213,
    saves: 76,
    pinned: false,
    award: null,
  },
  {
    id: 8,
    slug: "resurrection-evidence-002",
    hub: "Theology & Doctrine",
    hubColor: "#6B4FBB",
    time: "2 days ago",
    title: "Can you be a Christian and believe in evolution? My church says no. Science says I should.",
    preview: "PhD student in biology here. The evidence for evolution is overwhelming. I've tried to reconcile this with Genesis but my pastor says it's a slippery slope to rejecting Scripture. Looking for...",
    flair: "Apologetics",
    flairColor: "#6B4FBB",
    votes: 1102,
    comments: 445,
    saves: 189,
    pinned: false,
    award: null,
  },
];

const trending = [
  { title: "Why Gen Z is returning to church", count: "4.2k posts", href: "/topics/genz-church" },
  { title: "The Lord's Prayer — verse by verse", count: "2.8k posts", href: "/topics/prayer-fasting" },
  { title: "Christian response to AI ethics", count: "1.9k posts", href: "/topics/christian-ai-ethics" },
  { title: "Finding community after deconstruction", count: "3.1k posts", href: "/topics/deconstruction" },
  { title: "Fasting — types and spiritual benefits", count: "1.4k posts", href: "/topics/prayer-fasting" },
];

const rules = [
  "Be kind and grace-filled in all interactions",
  "No denomination bashing or divisive rhetoric",
  "Cite sources for theological claims",
  "Mark sensitive content with appropriate flairs",
  "No spam, self-promotion, or off-topic posts",
];

function VoteButton({ count }: { count: number }) {
  const formatted = count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  return (
    <button
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#1E1E32]"
      style={{ color: "#8A8AA8" }}
    >
      <ArrowUp size={15} />
      <span>{formatted}</span>
    </button>
  );
}

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-body pb-16">
        <div className="flex gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-4 w-64 flex-shrink-0">
            {/* Welcome card */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <div
                className="w-full h-16 rounded-xl mb-3 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.3) 0%, rgba(0,255,136,0.15) 100%)",
                  border: "1px solid rgba(0,255,136,0.15)",
                }}
              >
                <span className="text-2xl">🕊️</span>
              </div>
              <h3 className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                Welcome to Vine Discussions
              </h3>
              <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>
                A space for honest, grace-filled conversations about faith, life, and everything in between.
              </p>
              <button className="btn-gold w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <Plus size={15} />
                Create Post
              </button>
            </div>

            {/* Your Hubs */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#00FF88" }}
              >
                Your Hubs
              </h4>
              <div className="space-y-1">
                {hubs.map((hub) => (
                  <a
                    key={hub.name}
                    href={`/groups/${hub.groupId}`}
                    className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-200 hover:bg-[#18182A] block"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: `${hub.color}22` }}
                    >
                      <hub.icon size={12} style={{ color: hub.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: "#C0C0D8" }}>
                        {hub.name}
                      </p>
                      <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                        {hub.members} members
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Discover Hubs */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#00FF88" }}
              >
                Discover Hubs
              </h4>
              <div className="space-y-2">
                {suggestedHubs.map((hub) => (
                  <div key={hub.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium" style={{ color: "#C0C0D8" }}>
                        {hub.name}
                      </p>
                      <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                        {hub.members} members
                      </p>
                    </div>
                    <button
                      className="text-xs px-2.5 py-1 rounded-full font-semibold transition-all duration-200"
                      style={{
                        border: "1px solid rgba(0,255,136,0.3)",
                        color: "#00FF88",
                      }}
                    >
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN FEED */}
          <div className="flex-1 min-w-0">
            {/* Sort tabs + create bar */}
            <div
              className="rounded-2xl mb-4 overflow-hidden"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              {/* Create post bar */}
              <div className="flex items-center gap-3 p-3 border-b" style={{ borderColor: "#1E1E32" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #6B4FBB, #00FF88)", color: "#07070F" }}
                >
                  J
                </div>
                <button
                  className="flex-1 text-left px-4 py-2 rounded-xl text-sm transition-all duration-200 hover:border-[rgba(0,255,136,0.3)]"
                  style={{
                    background: "#07070F",
                    border: "1px solid #1E1E32",
                    color: "#6A6A88",
                  }}
                >
                  What&apos;s on your heart?
                </button>
              </div>
              {/* Sort tabs */}
              <div className="flex">
                {[
                  { label: "Hot", icon: Flame, active: true },
                  { label: "New", icon: Sparkles, active: false },
                  { label: "Top", icon: Star, active: false },
                  { label: "Rising", icon: TrendingUp, active: false },
                ].map((tab) => (
                  <button
                    key={tab.label}
                    className="flex items-center gap-1.5 px-5 py-3 text-sm font-semibold transition-all duration-200"
                    style={{
                      color: tab.active ? "#00FF88" : "#6A6A88",
                      borderBottom: tab.active ? "2px solid #00FF88" : "2px solid transparent",
                    }}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Post cards */}
            <div className="space-y-3">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.slug ? `/discussions/${post.slug}` : undefined}
                  className="block rounded-2xl p-4 transition-all duration-200 hover:bg-[#18182A] cursor-pointer"
                  style={{
                    background: "#12121F",
                    border: post.pinned
                      ? "1px solid rgba(0,255,136,0.3)"
                      : "1px solid #1E1E32",
                    textDecoration: "none",
                  }}
                >
                  {post.pinned && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <Pin size={11} style={{ color: "#00FF88" }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#00FF88" }}>
                        Pinned Post
                      </span>
                    </div>
                  )}

                  {post.award && (
                    <div
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full mb-2"
                      style={{
                        background: "rgba(0,255,136,0.1)",
                        border: "1px solid rgba(0,255,136,0.25)",
                        color: "#00FF88",
                      }}
                    >
                      <Award size={10} />
                      {post.award}
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold" style={{ color: post.hubColor }}>
                      {post.hub}
                    </span>
                    <span style={{ color: "#1E1E32" }}>·</span>
                    <span className="text-xs" style={{ color: "#6A6A88" }}>
                      {post.time}
                    </span>
                    <span
                      className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${post.flairColor}18`,
                        color: post.flairColor,
                        border: `1px solid ${post.flairColor}30`,
                      }}
                    >
                      {post.flair}
                    </span>
                  </div>

                  <h3 className="font-bold text-base mb-1.5 leading-snug" style={{ color: "#F2F2F8" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-2 mb-3" style={{ color: "#8A8AA8" }}>
                    {post.preview}
                  </p>

                  <div className="flex items-center gap-1">
                    <VoteButton count={post.votes} />
                    <button
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32]"
                      style={{ color: "#8A8AA8" }}
                    >
                      <MessageSquare size={14} />
                      <span>{post.comments >= 1000 ? `${(post.comments / 1000).toFixed(1)}k` : post.comments}</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32]"
                      style={{ color: "#8A8AA8" }}
                    >
                      <Bookmark size={14} />
                      <span>{post.saves >= 1000 ? `${(post.saves / 1000).toFixed(1)}k` : post.saves}</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32] ml-auto"
                      style={{ color: "#8A8AA8" }}
                    >
                      <Share2 size={14} />
                      Share
                    </button>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden xl:flex flex-col gap-4 w-72 flex-shrink-0">
            {/* Today's verse */}
            <div
              className="rounded-2xl p-4 verse-card"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#00FF88" }}>
                Today&apos;s Verse
              </p>
              <p className="text-sm font-medium italic leading-relaxed mb-2" style={{ color: "#F2F2F8" }}>
                &ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: "#00FF88" }}>— Proverbs 27:17</p>
            </div>

            {/* Trending */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Trending This Week
              </h4>
              <div className="space-y-3">
                {trending.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-2.5 group cursor-pointer" style={{ textDecoration: "none" }}>
                    <TrendingUp size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#00FF88" }} />
                    <div>
                      <p className="text-xs font-medium leading-snug transition-colors group-hover:text-[#00FF88]" style={{ color: "#C0C0D8" }}>
                        {item.title}
                      </p>
                      <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                        {item.count}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Community Rules */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                Community Rules
              </h4>
              <div className="space-y-2">
                {rules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-black"
                      style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-xs leading-snug" style={{ color: "#8A8AA8" }}>
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(0,255,136,0.08) 100%)",
                border: "1px solid rgba(0,255,136,0.2)",
              }}
            >
              <AlertCircle size={24} className="mx-auto mb-2" style={{ color: "#00FF88" }} />
              <h4 className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                Start a Discussion
              </h4>
              <p className="text-xs mb-3" style={{ color: "#8A8AA8" }}>
                Share what&apos;s on your mind. The community is here to grow together.
              </p>
              <button className="btn-gold w-full py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <Plus size={14} />
                New Post
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
