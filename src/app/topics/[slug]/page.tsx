import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageSquare, ChevronUp, TrendingUp, Users, Hash } from "lucide-react";

type Post = {
  title: string;
  author: string;
  avatar: string;
  avatarColor: string;
  hub: string;
  hubColor: string;
  upvotes: number;
  replies: number;
  time: string;
  flair: string;
  flairColor: string;
  slug?: string;
};

type Topic = {
  name: string;
  color: string;
  posts: string;
  description: string;
  scripture?: string;
  relatedTopics: string[];
  discussions: Post[];
};

const topics: Record<string, Topic> = {
  "prayer-fasting": {
    name: "#PrayerAndFasting",
    color: "#6B4FBB",
    posts: "12.4k",
    description:
      "Dedicated prayer practices, fasting traditions, and intercession strategies across denominational lines. From Daniel fasts to contemplative prayer — all of it explored with Scripture and honesty.",
    scripture: "Matthew 17:21",
    relatedTopics: ["genz-church", "mental-health-god", "deconstruction", "marriage-faith"],
    discussions: [
      {
        title: "I fasted for 21 days and here's what actually happened — not what I expected",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        hub: "r/SpiritualDisciplines",
        hubColor: "#6B4FBB",
        upvotes: 2341,
        replies: 318,
        time: "3 hours ago",
        flair: "Testimony",
        flairColor: "#4FBBAA",
        slug: "faith-and-doubt-001",
      },
      {
        title: "What does Scripture actually say about intercessory prayer? A careful study of James 5",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        hub: "r/Theology&Doctrine",
        hubColor: "#6B4FBB",
        upvotes: 847,
        replies: 134,
        time: "1 day ago",
        flair: "Bible Study",
        flairColor: "#6B4FBB",
      },
      {
        title: "Is there a 'right way' to pray? Exploring different traditions — liturgical, charismatic, contemplative",
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        hub: "r/Theology&Doctrine",
        hubColor: "#6B4FBB",
        upvotes: 634,
        replies: 89,
        time: "2 days ago",
        flair: "Deep Dive",
        flairColor: "#6B4FBB",
      },
      {
        title: "My church doesn't value corporate prayer. Am I wrong to feel frustrated?",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        hub: "r/ChurchLife",
        hubColor: "#4F8FBB",
        upvotes: 412,
        replies: 67,
        time: "4 days ago",
        flair: "Question",
        flairColor: "#4F8FBB",
      },
    ],
  },
  "genz-church": {
    name: "#GenZFaith",
    color: "#EC4899",
    posts: "9.8k",
    description:
      "How Gen Z is reshaping, leaving, and returning to Christianity. Honest conversations about deconstruction, doubt, digital faith, and why the fastest-growing group of Christians worldwide is also leaving Western churches in record numbers.",
    relatedTopics: ["deconstruction", "mental-health-god", "prayer-fasting", "christian-ai-ethics"],
    discussions: [
      {
        title: "Why I (age 22) left my evangelical church — and why I came back to a different one",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        hub: "r/YoungAdults",
        hubColor: "#4FBBAA",
        upvotes: 3241,
        replies: 445,
        time: "5 hours ago",
        flair: "Testimony",
        flairColor: "#4FBBAA",
        slug: "faith-and-doubt-001",
      },
      {
        title: "Gen Z and mental health in the church — my youth pastor said 'just pray more' and I nearly didn't come back",
        author: "Isabella Ferreira",
        avatar: "IF",
        avatarColor: "#EC4899",
        hub: "r/MentalHealth&Faith",
        hubColor: "#00FF88",
        upvotes: 2103,
        replies: 312,
        time: "1 day ago",
        flair: "Vulnerable Share",
        flairColor: "#BB4F7A",
        slug: "depression-therapy-faith-005",
      },
      {
        title: "Is TikTok theology actually dangerous? A critical assessment",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        hub: "r/Culture&Faith",
        hubColor: "#EC4899",
        upvotes: 789,
        replies: 213,
        time: "3 days ago",
        flair: "Culture",
        flairColor: "#BB4F7A",
      },
      {
        title: "Dating as a Christian in 2026 is genuinely hard. Anyone else feel like the apps are working against you?",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#00FF88",
        hub: "r/YoungAdults",
        hubColor: "#4FBBAA",
        upvotes: 789,
        replies: 213,
        time: "5 days ago",
        flair: "Relationships",
        flairColor: "#BB4F7A",
        slug: "christian-dating-apps-007",
      },
    ],
  },
  "marriage-faith": {
    name: "#MarriageFaith",
    color: "#00FF88",
    posts: "8.1k",
    description:
      "Building marriages centered on Christ — from Christian dating to engagement, communication, conflict resolution, and lifelong covenant commitment. Real couples share real challenges.",
    relatedTopics: ["genz-church", "prayer-fasting", "mental-health-god", "deconstruction"],
    discussions: [
      {
        title: "We had our first major fight as newlyweds and I froze. How do Christian couples fight well?",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        hub: "r/ChristianMarriage",
        hubColor: "#00FF88",
        upvotes: 1893,
        replies: 312,
        time: "2 hours ago",
        flair: "Question",
        flairColor: "#4F8FBB",
      },
      {
        title: "My husband and I have completely different approaches to faith. We're in counseling. Update after 6 months.",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        hub: "r/ChristianMarriage",
        hubColor: "#00FF88",
        upvotes: 1204,
        replies: 234,
        time: "1 day ago",
        flair: "Testimony",
        flairColor: "#4FBBAA",
      },
      {
        title: "Is it okay to marry a Christian from a very different tradition? (She's charismatic, I'm reformed)",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        hub: "r/ChristianDating",
        hubColor: "#BB4F7A",
        upvotes: 634,
        replies: 167,
        time: "3 days ago",
        flair: "Question",
        flairColor: "#4F8FBB",
      },
      {
        title: "We've been married 22 years. Here's the 5 things that have kept our faith and our marriage alive.",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        hub: "r/ChristianMarriage",
        hubColor: "#00FF88",
        upvotes: 2891,
        replies: 167,
        time: "1 week ago",
        flair: "Wisdom",
        flairColor: "#00FF88",
      },
    ],
  },
  "mental-health-god": {
    name: "#ChristianMentalHealth",
    color: "#4FBBAA",
    posts: "14.2k",
    description:
      "Breaking the stigma around mental health in the church. Integrating faith and therapy, honest conversations about depression and anxiety, and finding wholeness that honors both Scripture and science.",
    relatedTopics: ["genz-church", "prayer-fasting", "deconstruction", "marriage-faith"],
    discussions: [
      {
        title: "After 3 years of depression and praying for healing, I finally got therapy — and it changed everything.",
        author: "Isabella Ferreira",
        avatar: "IF",
        avatarColor: "#EC4899",
        hub: "r/MentalHealth&Faith",
        hubColor: "#4FBBAA",
        upvotes: 2341,
        replies: 318,
        time: "4 hours ago",
        flair: "🏆 Community Favorite",
        flairColor: "#00FF88",
        slug: "depression-therapy-faith-005",
      },
      {
        title: "Honest confession: I haven't felt God's presence in over a year. Am I losing my faith?",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        hub: "r/Doubts&Questions",
        hubColor: "#BB7A4F",
        upvotes: 1893,
        replies: 502,
        time: "1 day ago",
        flair: "Vulnerable Share",
        flairColor: "#BB4F7A",
        slug: "faith-and-doubt-001",
      },
      {
        title: "My pastor told me depression is a sin. I left that church. Here's what I found instead.",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        hub: "r/MentalHealth&Faith",
        hubColor: "#4FBBAA",
        upvotes: 3241,
        replies: 445,
        time: "3 days ago",
        flair: "Testimony",
        flairColor: "#4FBBAA",
      },
      {
        title: "Integrating faith-based counseling with CBT — does it actually work? My experience.",
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        hub: "r/MentalHealth&Faith",
        hubColor: "#4FBBAA",
        upvotes: 891,
        replies: 134,
        time: "5 days ago",
        flair: "Resource",
        flairColor: "#4F8FBB",
      },
    ],
  },
  "christian-ai-ethics": {
    name: "#ChristianAIEthics",
    color: "#3B82F6",
    posts: "6.7k",
    description:
      "How should Christians think about artificial intelligence, automation, and the digital transformation of society? Biblical frameworks for technology, the image of God, and what machines can and cannot replace.",
    relatedTopics: ["genz-church", "marriage-faith", "deconstruction", "prayer-fasting"],
    discussions: [
      {
        title: "I used AI to write a prayer for my dying mother. My pastor says it was wrong. Was it?",
        author: "Thomas Nakamura",
        avatar: "TN",
        avatarColor: "#4F8FBB",
        hub: "r/ChristianAIEthics",
        hubColor: "#3B82F6",
        upvotes: 2891,
        replies: 512,
        time: "6 hours ago",
        flair: "Hot Take",
        flairColor: "#EF4444",
      },
      {
        title: "AI, ChatGPT, and the Church: Three frameworks for thinking biblically about AI",
        author: "James Okafor",
        avatar: "JO",
        avatarColor: "#3B82F6",
        hub: "r/Culture&Faith",
        hubColor: "#3B82F6",
        upvotes: 1204,
        replies: 217,
        time: "2 days ago",
        flair: "Article",
        flairColor: "#3B82F6",
      },
      {
        title: "Can an AI ever be spiritual? Serious theological question about consciousness and the soul.",
        author: "Dr. Priya Singh",
        avatar: "PS",
        avatarColor: "#6B4FBB",
        hub: "r/Theology&Doctrine",
        hubColor: "#6B4FBB",
        upvotes: 634,
        replies: 189,
        time: "4 days ago",
        flair: "Deep Dive",
        flairColor: "#6B4FBB",
      },
      {
        title: "Using AI for sermon prep — where do we draw the line between tool and crutch?",
        author: "Rev. David Osei",
        avatar: "DO",
        avatarColor: "#F59E0B",
        hub: "r/PastorsCorner",
        hubColor: "#4F8FBB",
        upvotes: 891,
        replies: 156,
        time: "1 week ago",
        flair: "Ministry",
        flairColor: "#4FBBAA",
      },
    ],
  },
  "deconstruction": {
    name: "#DeconstructionStories",
    color: "#BB7A4F",
    posts: "11.3k",
    description:
      "Stories of leaving, questioning, and sometimes returning to faith. No judgment. No pressure. No easy answers. Just honest community for those walking a hard road.",
    relatedTopics: ["genz-church", "mental-health-god", "prayer-fasting", "marriage-faith"],
    discussions: [
      {
        title: "I Deconstructed My Faith — and Then Found It Again, Better (my full story)",
        author: "Lydia Böhm",
        avatar: "LB",
        avatarColor: "#6B4FBB",
        hub: "r/Deconstruction",
        hubColor: "#BB7A4F",
        upvotes: 6104,
        replies: 892,
        time: "3 days ago",
        flair: "🏆 Most Saved",
        flairColor: "#00FF88",
      },
      {
        title: "How do you handle doubt without losing faith? (serious discussion)",
        author: "Samuel Mwangi",
        avatar: "SM",
        avatarColor: "#3B82F6",
        hub: "r/Doubts&Questions",
        hubColor: "#BB7A4F",
        upvotes: 2103,
        replies: 502,
        time: "5 days ago",
        flair: "Vulnerable Share",
        flairColor: "#BB4F7A",
        slug: "faith-and-doubt-001",
      },
      {
        title: "What do you do when your theological tradition collapses but Jesus doesn't?",
        author: "Ji-Woo Park",
        avatar: "JP",
        avatarColor: "#EC4899",
        hub: "r/Deconstruction",
        hubColor: "#BB7A4F",
        upvotes: 1893,
        replies: 312,
        time: "1 week ago",
        flair: "Question",
        flairColor: "#4F8FBB",
      },
      {
        title: "I came back to faith after 7 years away. Here's the one thing that finally made sense.",
        author: "Amara Osei",
        avatar: "AO",
        avatarColor: "#F59E0B",
        hub: "r/Deconstruction",
        hubColor: "#BB7A4F",
        upvotes: 3891,
        replies: 445,
        time: "2 weeks ago",
        flair: "Testimony",
        flairColor: "#4FBBAA",
      },
    ],
  },
};

const topicSlugs: Record<string, string> = {
  "prayer-fasting": "#PrayerAndFasting",
  "genz-church": "#GenZFaith",
  "marriage-faith": "#MarriageFaith",
  "mental-health-god": "#ChristianMentalHealth",
  "christian-ai-ethics": "#ChristianAIEthics",
  "deconstruction": "#DeconstructionStories",
};

export async function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics[slug];
  if (!topic) return { title: "Topic — Vine" };
  return {
    title: `${topic.name} — Vine`,
    description: topic.description.slice(0, 150),
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topics[slug];

  if (!topic) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">🔍</p>
          <h1 className="text-3xl font-black mb-4">Topic not found</h1>
          <a href="/topics" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black"
            style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}>
            Browse All Topics
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedTopicNames = topic.relatedTopics.map((s) => topicSlugs[s]).filter(Boolean);

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div
          className="py-12 px-4 mb-10"
          style={{
            background: `linear-gradient(135deg, ${topic.color}10 0%, transparent 60%)`,
            borderBottom: `1px solid ${topic.color}15`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <a href="/topics" className="inline-flex items-center gap-2 text-sm mb-6 hover:text-[#00FF88] transition-colors" style={{ color: "#6A6A88" }}>
              <ArrowLeft size={14} /> All Topics
            </a>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${topic.color}20` }}>
                    <Hash size={22} style={{ color: topic.color }} />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black" style={{ color: "#F2F2F8" }}>{topic.name}</h1>
                    <p className="text-sm font-semibold mt-1" style={{ color: topic.color }}>
                      {topic.posts} posts · Updated today
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#8A8AA8" }}>{topic.description}</p>
                {topic.scripture && (
                  <span className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.15)" }}>
                    📜 Key Scripture: {topic.scripture}
                  </span>
                )}
              </div>
              <a
                href="/discussions"
                className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
              >
                Follow Topic
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Main feed */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-lg" style={{ color: "#F2F2F8" }}>
                  Top Discussions
                </h2>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} style={{ color: "#00FF88" }} />
                  <span className="text-xs font-semibold" style={{ color: "#00FF88" }}>Trending</span>
                </div>
              </div>

              <div className="space-y-4">
                {topic.discussions.map((post, i) => (
                  <a
                    key={i}
                    href={post.slug ? `/discussions/${post.slug}` : "/discussions"}
                    className="block rounded-2xl p-5 transition-all hover:bg-[#18182A]"
                    style={{ background: "#12121F", border: "1px solid #1E1E32", textDecoration: "none" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold" style={{ color: post.hubColor }}>{post.hub}</span>
                      <span style={{ color: "#1E1E32" }}>·</span>
                      <span className="text-xs" style={{ color: "#6A6A88" }}>{post.time}</span>
                      <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${post.flairColor}18`, color: post.flairColor, border: `1px solid ${post.flairColor}30` }}>
                        {post.flair}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "#F2F2F8" }}>
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black" style={{ background: `${post.avatarColor}25`, color: post.avatarColor }}>
                        {post.avatar}
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#8A8AA8" }}>{post.author}</span>
                      <div className="flex items-center gap-3 ml-auto">
                        <button className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                          <ChevronUp size={12} /> {post.upvotes >= 1000 ? `${(post.upvotes / 1000).toFixed(1)}k` : post.upvotes}
                        </button>
                        <button className="flex items-center gap-1 text-xs" style={{ color: "#6A6A88" }}>
                          <MessageSquare size={12} /> {post.replies}
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="/discussions"
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:border-[rgba(0,255,136,0.3)] hover:text-[#00FF88]"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", color: "#6A6A88" }}
              >
                View all {topic.posts} discussions <ArrowLeft size={14} className="rotate-180" />
              </a>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0 space-y-5">
              {/* Stats */}
              <div className="rounded-2xl p-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: topic.color }}>
                  Topic Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#6A6A88" }}>Total posts</span>
                    <span className="text-xs font-bold" style={{ color: "#F2F2F8" }}>{topic.posts}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#6A6A88" }}>This week</span>
                    <span className="text-xs font-bold" style={{ color: "#00FF88" }}>+1.2k</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#6A6A88" }}>Followers</span>
                    <span className="text-xs font-bold" style={{ color: "#F2F2F8" }}>24.8k</span>
                  </div>
                </div>
              </div>

              {/* Related Topics */}
              <div className="rounded-2xl p-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                  Related Topics
                </h4>
                <div className="space-y-2">
                  {topic.relatedTopics.map((relSlug) => (
                    <a
                      key={relSlug}
                      href={`/topics/${relSlug}`}
                      className="flex items-center gap-2 text-xs font-semibold hover:text-[#00FF88] transition-colors"
                      style={{ color: "#C0C0D8", textDecoration: "none" }}
                    >
                      <Hash size={11} style={{ color: "#4A4A68" }} />
                      {topicSlugs[relSlug] || relSlug}
                    </a>
                  ))}
                </div>
              </div>

              {/* Community rules */}
              <div className="rounded-2xl p-4" style={{ background: "#12121F", border: "1px solid #1E1E32" }}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF88" }}>
                  Community Guidelines
                </h4>
                <div className="space-y-2">
                  {[
                    "Be kind and grace-filled",
                    "Cite sources for theological claims",
                    "No denomination bashing",
                    "Mark sensitive content appropriately",
                    "Engage to understand, not to win",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-xs font-bold mt-0.5" style={{ color: topic.color }}>{i + 1}.</span>
                      <span className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join CTA */}
              <div
                className="rounded-2xl p-4 text-center"
                style={{ background: `linear-gradient(135deg, ${topic.color}10 0%, rgba(7,7,15,1) 100%)`, border: `1px solid ${topic.color}20` }}
              >
                <Users size={24} className="mx-auto mb-2" style={{ color: topic.color }} />
                <p className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>Join the conversation</p>
                <p className="text-xs mb-3" style={{ color: "#6A6A88" }}>24.8k people follow this topic</p>
                <a
                  href="/discussions"
                  className="block w-full py-2 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00BB55)" }}
                >
                  Post a Discussion
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
