"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Star,
  Bookmark,
  Share2,
  Filter,
  ChevronRight,
  X,
  Clock,
  Eye,
  FileText,
  Video,
  Mic,
  Book,
  Map,
  Image,
  TrendingUp,
  CheckSquare,
  Square,
} from "lucide-react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "books" | "courses" | "tools" | "videos";

const categories = [
  { name: "All", icon: Filter, count: 2847 },
  { name: "Articles", icon: FileText, count: 1124 },
  { name: "Video", icon: Video, count: 487 },
  { name: "Audio", icon: Mic, count: 312 },
  { name: "eBooks", icon: Book, count: 203 },
  { name: "Study Guides", icon: Map, count: 418 },
  { name: "Infographics", icon: Image, count: 303 },
];

const topics = [
  "Faith Basics", "Mental Health", "Relationships", "Finance",
  "Parenting", "Leadership", "Theology", "Apologetics", "Worship", "Life & Productivity",
];

const difficulties = ["Beginner", "Intermediate", "Deep Dive"];
const lengths = ["Quick Read (<5 min)", "Medium (5-15 min)", "Long Form (15+ min)"];
const sorts = ["Most Popular", "Newest", "Highest Rated", "Most Saved"];

const featuredResource = {
  type: "eBook",
  title: "The Anxious Christian: Can God Use Your Anxiety for Good?",
  author: "Rhett Smith, LMFT",
  description:
    "A groundbreaking resource that reframes anxiety as a tool God can use to draw us closer to Him. With practical exercises, Scripture, and clinical insight, this guide has helped over 200,000 Christians find peace without dismissing their struggle.",
  rating: 4.9,
  reviews: 4821,
  saves: 12400,
  readTime: "3-4 hour read",
  color: "#6B4FBB",
};

const resources = [
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "7 Biblical Truths About Depression That Your Church Probably Never Taught You",
    excerpt: "Depression is not a sign of spiritual weakness. Scripture has more to say about mental darkness than most sermons ever acknowledge...",
    author: "Sarah Chen",
    time: "8 min read",
    rating: 4.8,
    saves: 3241,
    topic: "Mental Health",
    topicColor: "#4FBBAA",
    href: "/discussions/depression-therapy-faith-005",
  },
  {
    type: "Video",
    typeColor: "#BB4F7A",
    title: "How to Read the Bible in Context (Without a Theology Degree)",
    excerpt: "Most Christians misinterpret Scripture not from bad intentions but from missing historical context. This video changes that...",
    author: "The Bible Project",
    time: "22 min watch",
    rating: 4.9,
    saves: 8109,
    topic: "Faith Basics",
    topicColor: "#3a7d56",
    href: "/video",
  },
  {
    type: "Audio",
    typeColor: "#3a7d56",
    title: "Financially Faithful: Managing Money God's Way",
    excerpt: "A podcast series covering tithing, budgeting, debt freedom, and investing from a biblically grounded perspective...",
    author: "Marcus & Joy Williams",
    time: "45 min listen",
    rating: 4.7,
    saves: 2876,
    topic: "Finance",
    topicColor: "#4F8FBB",
    href: "/blog/biblical-finances-stewardship",
  },
  {
    type: "Study Guide",
    typeColor: "#6B4FBB",
    title: "The Sermon on the Mount: 30-Day Deep Dive",
    excerpt: "Verse-by-verse study of Matthew 5-7 with daily prompts, reflection questions, and application challenges...",
    author: "Vine Theology Team",
    time: "30-day study",
    rating: 4.9,
    saves: 6543,
    topic: "Theology",
    topicColor: "#6B4FBB",
    href: "/reading-plan",
  },
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "Setting Godly Boundaries in Relationships -- A Practical Framework",
    excerpt: "Boundaries aren't unloving. This guide walks through how Jesus himself maintained boundaries and how you can do the same...",
    author: "Dr. Henry Cloud",
    time: "11 min read",
    rating: 4.8,
    saves: 4312,
    topic: "Relationships",
    topicColor: "#BB4F7A",
    href: "/relationships",
  },
  {
    type: "Video",
    typeColor: "#BB4F7A",
    title: "The Historical Evidence for the Resurrection",
    excerpt: "A rigorous look at the historical case for the resurrection of Jesus, designed to equip believers in honest conversations...",
    author: "Dr. Gary Habermas",
    time: "37 min watch",
    rating: 4.9,
    saves: 7201,
    topic: "Apologetics",
    topicColor: "#BB7A4F",
    href: "/blog/why-the-resurrection-changes-everything",
  },
  {
    type: "Article",
    typeColor: "#4FBBAA",
    title: "Raising Kids Who Actually Keep Their Faith: What the Research Shows",
    excerpt: "Studies reveal what actually predicts faith retention into adulthood -- and it's not Sunday school attendance or church camp...",
    author: "Fuller Youth Institute",
    time: "14 min read",
    rating: 4.7,
    saves: 3890,
    topic: "Parenting",
    topicColor: "#BB4F7A",
    href: "/parenting",
  },
  {
    type: "eBook",
    typeColor: "#4F8FBB",
    title: "Margin: Restoring Emotional, Physical, Financial, and Time Reserves",
    excerpt: "Why the most productive people in ministry burn out the fastest -- and how to create sustainable rhythms of life and work...",
    author: "Dr. Richard Swenson",
    time: "2-3 hour read",
    rating: 4.6,
    saves: 2134,
    topic: "Life & Productivity",
    topicColor: "#4FBBAA",
    href: "/work-leadership",
  },
  {
    type: "Study Guide",
    typeColor: "#6B4FBB",
    title: "Hearing God's Voice: A Beginner's Guide to Prayer and Listening",
    excerpt: "A 21-day guided journey to develop a two-way conversation with God, for new believers and seasoned Christians alike...",
    author: "Priscilla Shirer",
    time: "21-day study",
    rating: 4.8,
    saves: 5670,
    topic: "Faith Basics",
    topicColor: "#3a7d56",
    href: "/prayer",
  },
];

const RESOURCE_COURSES = [
  {
    id: "ot-survey",
    title: "Old Testament Survey",
    provider: "Gordon-Conwell / BiblicalTraining.org",
    level: "Intermediate",
    duration: "30 hrs",
    description: "Walk through the entire Old Testament with Dr. Bill Mounce, covering narrative, poetry, prophecy, and wisdom literature with careful attention to historical context and theological themes.",
    topics: ["Genesis", "Wisdom Literature", "Prophecy", "Hebrew Narrative", "Pentateuch"],
    url_hint: "biblicaltraining.org",
  },
  {
    id: "nt-survey",
    title: "New Testament Survey",
    provider: "BiblicalTraining.org",
    level: "Beginner",
    duration: "24 hrs",
    description: "Covers all 27 New Testament books with historical background, authorship questions, major theological themes, and how each book fits into the broader canon.",
    topics: ["Gospels", "Paul's Letters", "General Epistles", "Revelation", "Acts"],
    url_hint: "biblicaltraining.org",
  },
  {
    id: "systematic-theology",
    title: "Systematic Theology",
    provider: "Reformed Theological Seminary / iTunes U",
    level: "Advanced",
    duration: "48 hrs",
    description: "Classic reformed systematics covering the full scope of Christian doctrine: prolegomena, theology proper, anthropology, soteriology, ecclesiology, and eschatology.",
    topics: ["Doctrine of God", "Soteriology", "Ecclesiology", "Eschatology", "Christology"],
    url_hint: "rts.edu",
  },
  {
    id: "life-of-jesus",
    title: "The Life of Jesus",
    provider: "Dallas Theological Seminary",
    level: "Beginner",
    duration: "15 hrs",
    description: "A four-gospel harmony and historical background study tracing the life, ministry, death, and resurrection of Jesus Christ within its first-century Jewish and Roman context.",
    topics: ["Gospel Harmony", "Historical Jesus", "Miracles", "Parables", "Passion Week"],
    url_hint: "dts.edu",
  },
  {
    id: "apologetics",
    title: "Christian Apologetics",
    provider: "Biola University (free via YouTube)",
    level: "Intermediate",
    duration: "20 hrs",
    description: "Defending the faith intellectually -- covers classical arguments for God, responses to the problem of evil, the reliability of Scripture, and the case for the resurrection.",
    topics: ["Cosmological Argument", "Problem of Evil", "Resurrection", "Scripture", "Religious Pluralism"],
    url_hint: "biola.edu",
  },
  {
    id: "biblical-greek",
    title: "Greek for Bible Students",
    provider: "Daily Dose of Greek (YouTube)",
    level: "Intermediate",
    duration: "Ongoing",
    description: "Learn biblical Greek in 5-minute daily segments. Dr. Rob Plummer walks through Greek grammar, vocabulary, and exegesis in a format that fits any schedule.",
    topics: ["Greek Alphabet", "Verb Conjugation", "Noun Declension", "Exegesis", "Word Studies"],
    url_hint: "dailydoseofgreek.com",
  },
];

const RESOURCE_TOOLS = [
  {
    id: "logos",
    name: "Logos Bible Software",
    icon: "📚",
    type: "Desktop App",
    description: "The most powerful academic Bible software available. Access 40,000+ books, original language tools, sermon preparation, and advanced search across your entire library.",
    free: false,
    bestFor: "Serious Study",
  },
  {
    id: "accordance",
    name: "Accordance Bible Software",
    icon: "📖",
    type: "Mac / iOS",
    description: "Deep original language tools with an elegant interface built for Mac. Praised by scholars for its speed, accuracy, and seamless integration of Hebrew and Greek resources.",
    free: false,
    bestFor: "Mac Users & Scholars",
  },
  {
    id: "olive-tree",
    name: "Olive Tree Bible Study",
    icon: "📱",
    type: "Mobile App",
    description: "The best mobile Bible app for serious study. Combines commentaries, devotionals, and original language tools in an interface designed for reading on the go.",
    free: false,
    bestFor: "Mobile Study",
  },
  {
    id: "blue-letter",
    name: "Blue Letter Bible",
    icon: "🔵",
    type: "Web / App",
    description: "Free concordance, lexicon, and verse-by-verse commentaries. An essential tool for word studies -- look up the original Hebrew or Greek behind any English word instantly.",
    free: true,
    bestFor: "Word Studies",
  },
  {
    id: "bible-gateway",
    name: "Bible Gateway",
    icon: "🌐",
    type: "Web",
    description: "Compare 200+ Bible translations side by side. Includes reading plans, devotionals, and audio Bibles. The quickest way to see how different versions render any passage.",
    free: true,
    bestFor: "Translation Comparison",
  },
  {
    id: "youversion",
    name: "YouVersion Bible App",
    icon: "📲",
    type: "Mobile App",
    description: "The largest Bible app in the world with hundreds of reading plans, community features, and verse-of-the-day. Simple, accessible, and ideal for building a daily habit.",
    free: true,
    bestFor: "Daily Reading",
  },
  {
    id: "biblehub",
    name: "BibleHub",
    icon: "🔍",
    type: "Web",
    description: "Parallel Bibles, interlinear text, Strong's concordance, and multiple commentaries -- all on one page for any verse. Perfect for quick cross-reference research.",
    free: true,
    bestFor: "Quick Research",
  },
  {
    id: "enduring-word",
    name: "Enduring Word Commentary",
    icon: "📝",
    type: "Web",
    description: "David Guzik's complete verse-by-verse commentary on every book of the Bible. Clear, pastoral, and theologically grounded -- free for every passage in Scripture.",
    free: true,
    bestFor: "Verse-by-Verse Teaching",
  },
];

const RESOURCE_VIDEOS = [
  {
    videoId: "Kxup3OS5ZhQ",
    preacher: "Tim Keller",
    title: "The Reason for God at Google",
    description: "Keller presents his landmark case for Christian faith to an audience at Google, answering the most common intellectual objections to belief in a compelling, winsome way.",
  },
  {
    videoId: "v6xk8e7gdMA",
    preacher: "R.C. Sproul",
    title: "The Holiness of God",
    description: "Sproul's classic teaching on the defining attribute of God -- his holiness -- and why a right understanding of it transforms every other doctrine in Christian theology.",
  },
  {
    videoId: "sWMjg7CxIKk",
    preacher: "Francis Chan",
    title: "Forgotten God Part 1",
    description: "Chan opens his landmark series on the Holy Spirit -- examining why the third Person of the Trinity is so often neglected and what it means to truly live in the Spirit.",
  },
  {
    videoId: "X1rPalyUshw",
    preacher: "Louie Giglio",
    title: "How Great Is Our God",
    description: "Giglio's awe-inspiring presentation connecting the scale of the cosmos to the glory of God, demonstrating how science and Scripture together magnify the greatness of our Creator.",
  },
  {
    videoId: "JHdB1dYAteA",
    preacher: "John Piper",
    title: "Don't Waste Your Life",
    description: "Piper's urgent call to live for what truly matters -- to spend your one life for the glory of God and the good of others rather than the fleeting comforts of the world.",
  },
  {
    videoId: "by8ykv7-A3c",
    preacher: "Voddie Baucham",
    title: "Supremacy of Christ and Truth",
    description: "Baucham's powerful 2006 Desiring God Conference address on how Christians must hold fast to absolute truth and the lordship of Christ against postmodern relativism.",
  },
];

const levelColors: Record<string, string> = {
  Beginner: GREEN,
  Intermediate: "#F59E0B",
  Advanced: "#EF4444",
  Ongoing: PURPLE,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          fill={s <= Math.floor(rating) ? "#3a7d56" : "none"}
          style={{ color: s <= Math.floor(rating) ? "#3a7d56" : "#3A3A58" }}
        />
      ))}
      <span className="text-xs ml-1 font-semibold" style={{ color: "#3a7d56" }}>
        {rating}
      </span>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4 className="text-[10px] font-black uppercase tracking-widest mb-2.5" style={{ color: "#3a7d56" }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("books");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedResources, setSavedResources] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_resources_saved");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [featuredSaved, setFeaturedSaved] = useState(() => {
    try { return localStorage.getItem("vine_resources_featured") === "true"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_resources_saved", JSON.stringify([...savedResources])); } catch {}
  }, [savedResources]);

  useEffect(() => {
    try { localStorage.setItem("vine_resources_featured", String(featuredSaved)); } catch {}
  }, [featuredSaved]);

  const toggleSave = (title: string) => setSavedResources(prev => {
    const next = new Set(prev);
    if (next.has(title)) next.delete(title); else next.add(title);
    return next;
  });

  const filteredResources = resources.filter(r => {
    const matchCat = selectedCategory === "All" || r.type === selectedCategory;
    const matchTopic = !selectedTopic || r.topic === selectedTopic;
    const matchSearch = !searchQuery || r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchTopic && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <Navbar />

      <main className="page-body pb-16">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GREEN }}>
                Resource Library
              </p>
              <h1 className="text-3xl sm:text-4xl font-black" style={{ color: TEXT }}>
                Grow Your Faith
              </h1>
              <p className="mt-2 text-base" style={{ color: MUTED }}>
                Curated books, courses, tools, and videos from trusted Christian voices.
              </p>
            </div>
            {activeTab === "books" && (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#6A6A88" }} />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none w-64"
                    style={{ background: CARD, border: `1px solid ${BORDER}`, color: TEXT }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div style={{ display: "flex", gap: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0 }}>
            {(["books", "courses", "tools", "videos"] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                {t === "books" ? "📚 Books & Articles" : t === "courses" ? "🎓 Courses" : t === "tools" ? "🛠️ Tools" : "🎬 Videos"}
              </button>
            ))}
          </div>
        </div>

        {/* BOOKS TAB */}
        {activeTab === "books" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6">
              {/* FILTER SIDEBAR */}
              <aside className="hidden lg:block w-60 flex-shrink-0">
                <div
                  className="rounded-2xl p-5 sticky top-24"
                  style={{ background: CARD, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-bold" style={{ color: TEXT }}>Filters</span>
                    <button className="text-xs font-semibold" style={{ color: GREEN }}>
                      Clear all
                    </button>
                  </div>

                  <FilterSection title="Category">
                    <div className="space-y-1">
                      {categories.map((cat) => {
                        const active = selectedCategory === cat.name;
                        return (
                          <button
                            key={cat.name}
                            onClick={() => setSelectedCategory(cat.name)}
                            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-150 hover:bg-[#18182A]"
                            style={{ background: active ? "rgba(58,125,86,0.08)" : "transparent" }}
                          >
                            {active ? (
                              <CheckSquare size={13} style={{ color: GREEN }} />
                            ) : (
                              <Square size={13} style={{ color: "#4A4A68" }} />
                            )}
                            <span className="text-xs flex-1" style={{ color: active ? GREEN : MUTED }}>
                              {cat.name}
                            </span>
                            <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                              {cat.count.toLocaleString()}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </FilterSection>

                  <FilterSection title="Topic">
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((topic) => {
                        const active = selectedTopic === topic;
                        return (
                          <button
                            key={topic}
                            onClick={() => setSelectedTopic(active ? null : topic)}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-150"
                            style={{
                              background: active ? "rgba(58,125,86,0.12)" : "rgba(255,255,255,0.04)",
                              border: active ? "1px solid rgba(58,125,86,0.3)" : `1px solid ${BORDER}`,
                              color: active ? GREEN : "#6A6A88",
                            }}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </FilterSection>

                  <FilterSection title="Difficulty">
                    <div className="space-y-1">
                      {difficulties.map((d) => (
                        <button
                          key={d}
                          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                        >
                          <Square size={13} style={{ color: "#4A4A68" }} />
                          <span className="text-xs" style={{ color: MUTED }}>{d}</span>
                        </button>
                      ))}
                    </div>
                  </FilterSection>

                  <FilterSection title="Length">
                    <div className="space-y-1">
                      {lengths.map((l) => (
                        <button
                          key={l}
                          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                        >
                          <Square size={13} style={{ color: "#4A4A68" }} />
                          <span className="text-xs" style={{ color: MUTED }}>{l}</span>
                        </button>
                      ))}
                    </div>
                  </FilterSection>

                  <FilterSection title="Sort By">
                    <div className="space-y-1">
                      {sorts.map((s, i) => (
                        <button
                          key={s}
                          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition hover:bg-[#18182A]"
                        >
                          {i === 0 ? (
                            <CheckSquare size={13} style={{ color: GREEN }} />
                          ) : (
                            <Square size={13} style={{ color: "#4A4A68" }} />
                          )}
                          <span className="text-xs" style={{ color: i === 0 ? GREEN : MUTED }}>{s}</span>
                        </button>
                      ))}
                    </div>
                  </FilterSection>
                </div>
              </aside>

              {/* MAIN CONTENT */}
              <div className="flex-1 min-w-0">
                {/* Results header + active filters */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-sm font-semibold" style={{ color: TEXT }}>
                    Showing{" "}
                    <span style={{ color: GREEN }}>{filteredResources.length}</span> resources
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedCategory !== "All" && (
                      <button
                        onClick={() => setSelectedCategory("All")}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.2)", color: GREEN }}
                      >
                        {selectedCategory} <X size={11} />
                      </button>
                    )}
                    {selectedTopic && (
                      <button
                        onClick={() => setSelectedTopic(null)}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "rgba(58,125,86,0.08)", border: "1px solid rgba(58,125,86,0.2)", color: GREEN }}
                      >
                        {selectedTopic} <X size={11} />
                      </button>
                    )}
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <TrendingUp size={14} style={{ color: "#6A6A88" }} />
                    <select className="text-xs bg-transparent outline-none" style={{ color: MUTED }}>
                      <option>Most Popular</option>
                      <option>Newest</option>
                      <option>Highest Rated</option>
                    </select>
                  </div>
                </div>

                {/* Featured Resource */}
                <div
                  className="rounded-2xl p-6 mb-6 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(107,79,187,0.18) 0%, rgba(58,125,86,0.08) 100%)",
                    border: "1px solid rgba(107,79,187,0.3)",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                    style={{ background: featuredResource.color }}
                  />
                  <div className="relative flex flex-col sm:flex-row gap-6">
                    <div
                      className="w-full sm:w-40 h-40 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${featuredResource.color}40, ${featuredResource.color}20)`,
                        border: `1px solid ${featuredResource.color}30`,
                      }}
                    >
                      <Book size={48} style={{ color: featuredResource.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            background: `${featuredResource.color}20`,
                            color: featuredResource.color,
                            border: `1px solid ${featuredResource.color}40`,
                          }}
                        >
                          ⭐ Featured &middot; {featuredResource.type}
                        </span>
                      </div>
                      <h2 className="text-xl font-black mb-2 leading-snug" style={{ color: TEXT }}>
                        {featuredResource.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                        {featuredResource.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <StarRating rating={featuredResource.rating} />
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          {featuredResource.reviews.toLocaleString()} reviews
                        </span>
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          <Bookmark size={11} className="inline mr-1" />
                          {(featuredResource.saves / 1000).toFixed(1)}k saves
                        </span>
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          <Clock size={11} className="inline mr-1" />
                          {featuredResource.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <a href="/resources" className="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold" style={{ textDecoration: "none" }}>
                          Read Now &mdash; Free
                        </a>
                        <button
                          onClick={() => setFeaturedSaved(!featuredSaved)}
                          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[#18182A]"
                          style={{ border: `1px solid ${featuredSaved ? "rgba(58,125,86,0.3)" : BORDER}`, color: featuredSaved ? GREEN : MUTED }}
                        >
                          <Bookmark size={14} fill={featuredSaved ? GREEN : "none"} />
                          {featuredSaved ? "Saved!" : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                  {filteredResources.length === 0 && (
                    <div className="col-span-full text-center py-16">
                      <p style={{ color: MUTED }}>No resources match your filters.</p>
                      <button onClick={() => { setSelectedCategory("All"); setSelectedTopic(null); setSearchQuery(""); }} className="mt-3 text-sm font-semibold" style={{ color: GREEN }}>Clear all filters</button>
                    </div>
                  )}
                  {filteredResources.map((r, i) => (
                    <a
                      key={i}
                      href={r.href}
                      className="rounded-2xl p-4 flex flex-col cursor-pointer transition-all duration-200 hover:bg-[#18182A] group"
                      style={{ background: CARD, border: `1px solid ${BORDER}`, textDecoration: "none" }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            background: `${r.typeColor}15`,
                            color: r.typeColor,
                            border: `1px solid ${r.typeColor}30`,
                          }}
                        >
                          {r.type}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${r.topicColor}10`, color: r.topicColor }}
                        >
                          {r.topic}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold leading-snug mb-2 flex-1 group-hover:text-[#3a7d56] transition-colors" style={{ color: TEXT }}>
                        {r.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: "#6A6A88" }}>
                        {r.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 mb-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                          style={{ background: `${r.typeColor}30`, color: r.typeColor }}
                        >
                          {r.author[0]}
                        </div>
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          {r.author}
                        </span>
                        <span style={{ color: "#3A3A58" }}>·</span>
                        <Clock size={10} style={{ color: "#4A4A68" }} />
                        <span className="text-xs" style={{ color: "#6A6A88" }}>
                          {r.time}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <StarRating rating={r.rating} />
                          <span className="text-[10px]" style={{ color: "#4A4A68" }}>
                            <Eye size={10} className="inline mr-0.5" />
                            {r.saves >= 1000 ? `${(r.saves / 1000).toFixed(1)}k` : r.saves}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSave(r.title); }}
                            className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                            style={{ color: savedResources.has(r.title) ? GREEN : "#4A4A68" }}
                          >
                            <Bookmark size={13} fill={savedResources.has(r.title) ? GREEN : "none"} />
                          </button>
                          <button
                            onClick={(e) => e.preventDefault()}
                            className="p-1.5 rounded-lg transition hover:bg-[#1E1E32]"
                            style={{ color: "#4A4A68" }}
                          >
                            <Share2 size={13} />
                          </button>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, "...", 284].map((page, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-150"
                      style={{
                        background: page === 1 ? "rgba(58,125,86,0.15)" : "transparent",
                        border: page === 1 ? "1px solid rgba(58,125,86,0.3)" : `1px solid ${BORDER}`,
                        color: page === 1 ? GREEN : page === "..." ? "#4A4A68" : MUTED,
                      }}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className="flex items-center gap-1 px-3 h-9 rounded-lg text-sm font-semibold transition-all duration-150 hover:bg-[#18182A]"
                    style={{ border: `1px solid ${BORDER}`, color: MUTED }}
                  >
                    Next
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COURSES TAB */}
        {activeTab === "courses" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: "0 0 8px" }}>Free & Accessible Bible Courses</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0 }}>
                Structured learning from seminaries and trusted ministries &mdash; most available free online.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
              {RESOURCE_COURSES.map(course => (
                <div key={course.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, margin: "0 0 6px", lineHeight: 1.3 }}>{course.title}</h3>
                      <p style={{ fontSize: 12, color: PURPLE, fontWeight: 700, margin: 0 }}>{course.provider}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${levelColors[course.level] || MUTED}18`, color: levelColors[course.level] || MUTED }}>
                      {course.level}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED }}>
                      <Clock size={10} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                      {course.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}>{course.description}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {course.topics.map(topic => (
                      <span key={topic} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.12)", color: PURPLE, fontWeight: 600 }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: "#6A6A88" }}>via {course.url_hint}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, background: `linear-gradient(135deg, rgba(107,79,187,0.12), rgba(58,125,86,0.08))`, border: `1px solid rgba(107,79,187,0.25)`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, margin: "0 0 10px" }}>🎓</p>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8, color: TEXT }}>Know a great free course?</h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 420, margin: "0 auto 16px" }}>
                Help the Vine community learn &mdash; share a seminary course, YouTube series, or ministry resource that shaped your faith.
              </p>
              <a href="/discussions" style={{ display: "inline-block", padding: "12px 28px", borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Suggest a Course &rarr;
              </a>
            </div>
          </div>
        )}

        {/* TOOLS TAB */}
        {activeTab === "tools" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: "0 0 8px" }}>Digital Bible Study Tools</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0 }}>
                The best apps, software, and websites for digging deeper into Scripture &mdash; from free web tools to professional academic software.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
              {RESOURCE_TOOLS.map(tool => (
                <div key={tool.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28, lineHeight: 1 }}>{tool.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, margin: "0 0 3px" }}>{tool.name}</h3>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED }}>
                          {tool.type}
                        </span>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: tool.free ? "rgba(58,125,86,0.12)" : "rgba(107,79,187,0.15)", color: tool.free ? GREEN : PURPLE }}>
                          {tool.free ? "Free" : "Paid"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: "0 0 12px" }}>{tool.description}</p>
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                    <span style={{ fontSize: 12, color: "#6A6A88" }}>Best for: </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: GREEN }}>{tool.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, background: `linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.12))`, border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, margin: "0 0 10px" }}>🛠️</p>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8, color: TEXT }}>Missing a tool you love?</h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 420, margin: "0 auto 16px" }}>
                The Vine community is always looking for better ways to study Scripture. Share what&rsquo;s helped you most.
              </p>
              <a href="/discussions" style={{ display: "inline-block", padding: "12px 28px", borderRadius: 12, background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`, color: BG, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Suggest a Tool &rarr;
              </a>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: TEXT, margin: "0 0 8px" }}>Must-Watch Christian Talks</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0 }}>
                Essential sermons, lectures, and presentations from some of the most faithful voices in Christianity &mdash; watch, share, and be equipped.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
              {RESOURCE_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 8, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.18)", color: PURPLE, marginBottom: 8 }}>
                      {v.preacher}
                    </span>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, margin: "0 0 8px", lineHeight: 1.3 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, background: `linear-gradient(135deg, rgba(107,79,187,0.12), rgba(58,125,86,0.08))`, border: `1px solid rgba(107,79,187,0.25)`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, margin: "0 0 10px" }}>🎬</p>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8, color: TEXT }}>Have a video recommendation?</h3>
              <p style={{ fontSize: 14, color: MUTED, maxWidth: 420, margin: "0 auto 16px" }}>
                Share a sermon or talk that changed your perspective &mdash; the Vine community is always looking for what&rsquo;s worth watching.
              </p>
              <a href="/discussions" style={{ display: "inline-block", padding: "12px 28px", borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Recommend a Video &rarr;
              </a>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
