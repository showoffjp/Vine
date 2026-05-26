"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Flame,
  MessageSquare,
  Users,
  Eye,
  ChevronRight,
  Hash,
  Star,
} from "lucide-react";


const trending = [
  {
    rank: 1,
    tag: "Resurrection",
    posts: 4821,
    growth: "+342%",
    hot: true,
    description: "The historical and theological case for the bodily resurrection of Jesus",
    color: "#00FF88",
  },
  {
    rank: 2,
    tag: "ChristianMentalHealth",
    posts: 3247,
    growth: "+218%",
    hot: true,
    description: "Faith, therapy, and the integration of mental health in the Church",
    color: "#6B4FBB",
  },
  {
    rank: 3,
    tag: "BiblicalFinance",
    posts: 2891,
    growth: "+156%",
    hot: false,
    description: "Stewardship, tithing, debt freedom, and building generational wealth",
    color: "#10B981",
  },
  {
    rank: 4,
    tag: "AIAndFaith",
    posts: 2634,
    growth: "+289%",
    hot: true,
    description: "How should Christians think about and engage artificial intelligence?",
    color: "#3B82F6",
  },
  {
    rank: 5,
    tag: "SundayChurch",
    posts: 2102,
    growth: "+67%",
    hot: false,
    description: "Debates around church attendance, online church, and the body of Christ",
    color: "#EC4899",
  },
  {
    rank: 6,
    tag: "BiblicalManhood",
    posts: 1987,
    growth: "+134%",
    hot: false,
    description: "Defining Christlike masculinity in a cultural moment of confusion",
    color: "#F59E0B",
  },
  {
    rank: 7,
    tag: "GenZFaith",
    posts: 1854,
    growth: "+412%",
    hot: true,
    description: "Why young Christians are leaving — and what can bring them back",
    color: "#00FF88",
  },
  {
    rank: 8,
    tag: "PrayerLife",
    posts: 1721,
    growth: "+89%",
    hot: false,
    description: "Disciplines, methods, and personal stories about prayer",
    color: "#6B4FBB",
  },
];

const topicClusters = [
  {
    title: "Theology & Doctrine",
    color: "#6B4FBB",
    icon: "⛪",
    topics: ["Trinity", "Salvation", "Grace", "Atonement", "Eschatology", "Predestination", "Spiritual Gifts", "Baptism"],
  },
  {
    title: "Culture & Society",
    color: "#3B82F6",
    icon: "🌍",
    topics: ["Politics", "Media", "Technology", "AI", "Pop Culture", "Christian Nationalism", "Social Justice", "Climate"],
  },
  {
    title: "Life & Relationships",
    color: "#EC4899",
    icon: "💞",
    topics: ["Dating", "Marriage", "Singleness", "Parenting", "Divorce", "Friendship", "Sex", "Boundaries"],
  },
  {
    title: "Faith & Practice",
    color: "#00FF88",
    icon: "🙏",
    topics: ["Prayer", "Fasting", "Worship", "Bible Reading", "Sabbath", "Giving", "Serving", "Evangelism"],
  },
  {
    title: "Challenges & Doubt",
    color: "#10B981",
    icon: "🤔",
    topics: ["Deconstruction", "Doubt", "Suffering", "Unanswered Prayer", "Evil", "Depression", "Anger at God", "Grief"],
  },
  {
    title: "Global Church",
    color: "#F59E0B",
    icon: "🌐",
    topics: ["Missions", "Persecution", "African Church", "Asian Christianity", "House Churches", "Revival", "Unity", "Ecumenism"],
  },
];

const hotDiscussions = [
  {
    tag: "AIAndFaith",
    title: "Should pastors use AI to write sermons? Unpacking the ethics",
    replies: 847,
    views: "12.4k",
    timeAgo: "2h ago",
    hot: true,
  },
  {
    tag: "GenZFaith",
    title: "I'm 22 and almost walked away from church — here's what kept me",
    replies: 634,
    views: "9.8k",
    timeAgo: "4h ago",
    hot: true,
  },
  {
    tag: "ChristianMentalHealth",
    title: "\"Just pray more\" is killing people. Can we be honest about this?",
    replies: 1204,
    views: "18.2k",
    timeAgo: "6h ago",
    hot: true,
  },
  {
    tag: "Resurrection",
    title: "Best resources for the historical case for the resurrection?",
    replies: 287,
    views: "4.2k",
    timeAgo: "1h ago",
    hot: false,
  },
  {
    tag: "BiblicalFinance",
    title: "Paid off $87k in debt — here's exactly how we did it using biblical principles",
    replies: 524,
    views: "7.6k",
    timeAgo: "8h ago",
    hot: false,
  },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00FF88 0%, #6B4FBB 100%)" }}
            >
              <TrendingUp size={20} className="text-black" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00FF88" }}>
              Trending Topics
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            What the Church is{" "}
            <span style={{ background: "linear-gradient(135deg, #00FF88, #6B4FBB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              talking about.
            </span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6A6A88" }}>
            Real conversations happening right now across the global Christian community — theology, culture, life, and everything in between.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Trending List */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Flame size={18} style={{ color: "#00FF88" }} />
                  <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                    Trending Right Now
                  </h2>
                </div>
                <div className="space-y-3">
                  {trending.map((topic) => (
                    <div
                      key={topic.tag}
                      className="group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      }}
                    >
                      <span className="text-3xl font-black w-8 shrink-0 text-center" style={{ color: "rgba(0,255,136,0.15)" }}>
                        {topic.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className="font-bold text-base group-hover:text-[#00FF88] transition-colors"
                            style={{ color: "#F2F2F8" }}
                          >
                            #{topic.tag}
                          </span>
                          {topic.hot && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                              style={{ background: "rgba(239,68,68,0.15)", color: "#EF4444" }}
                            >
                              <Flame size={10} /> Hot
                            </span>
                          )}
                          <span
                            className="text-xs font-semibold ml-auto"
                            style={{ color: "#10B981" }}
                          >
                            {topic.growth}
                          </span>
                        </div>
                        <p className="text-sm mb-2" style={{ color: "#6A6A88" }}>{topic.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-xs flex items-center gap-1" style={{ color: "#4A4A68" }}>
                            <MessageSquare size={11} /> {topic.posts.toLocaleString()} posts
                          </span>
                          <a
                            href={`/discussions?tag=${topic.tag}`}
                            className="text-xs font-semibold flex items-center gap-1 ml-auto"
                            style={{ color: topic.color }}
                          >
                            View all <ChevronRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hot Discussions */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <MessageSquare size={18} style={{ color: "#00FF88" }} />
                  <h2 className="text-xl font-black" style={{ color: "#F2F2F8" }}>
                    Hot Discussions
                  </h2>
                </div>
                <div className="space-y-3">
                  {hotDiscussions.map((d, i) => (
                    <div
                      key={i}
                      className="group p-5 rounded-xl cursor-pointer transition-all"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor = "rgba(0,255,136,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Hash size={14} className="mt-0.5 shrink-0" style={{ color: "#00FF88" }} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-bold" style={{ color: "#00FF88" }}>#{d.tag}</span>
                            {d.hot && <Flame size={12} style={{ color: "#EF4444" }} />}
                            <span className="text-xs ml-auto" style={{ color: "#4A4A68" }}>{d.timeAgo}</span>
                          </div>
                          <h3 className="font-semibold text-base leading-snug mb-2 group-hover:text-[#00FF88] transition-colors" style={{ color: "#E0E0F0" }}>
                            {d.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            <span className="text-xs flex items-center gap-1" style={{ color: "#4A4A68" }}>
                              <MessageSquare size={11} /> {d.replies} replies
                            </span>
                            <span className="text-xs flex items-center gap-1" style={{ color: "#4A4A68" }}>
                              <Eye size={11} /> {d.views} views
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="/discussions"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#00FF88" }}
                  >
                    See All Discussions <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Topic Clusters */}
              {topicClusters.map((cluster) => (
                <div
                  key={cluster.title}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span>{cluster.icon}</span>
                    <h3 className="text-sm font-bold" style={{ color: cluster.color }}>
                      {cluster.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.topics.map((t) => (
                      <a
                        key={t}
                        href={`/discussions?tag=${t}`}
                        className="text-xs px-2.5 py-1 rounded-full transition-all cursor-pointer"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#8A8AA8",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${cluster.color}15`;
                          e.currentTarget.style.borderColor = `${cluster.color}40`;
                          e.currentTarget.style.color = cluster.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.color = "#8A8AA8";
                        }}
                      >
                        #{t}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
