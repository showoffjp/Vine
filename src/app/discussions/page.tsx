"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatePostModal from "@/components/CreatePostModal";
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
import { usePersistedState } from "@/hooks/usePersistedState";


const hubs = [
  { icon: BookOpen, name: "Theology & Doctrine", members: "24.1k", color: "#6B4FBB", groupId: "theology-doctrine" },
  { icon: Heart, name: "Mental Health & Faith", members: "18.7k", color: "#3a7d56", groupId: "mental-health-faith" },
  { icon: Users, name: "Young Adults", members: "31.2k", color: "#4FBBAA", groupId: "young-adults" },
  { icon: Baby, name: "Christian Parenting", members: "12.4k", color: "#BB4F7A", groupId: "christian-parenting" },
  { icon: Briefcase, name: "Faith & Career", members: "9.8k", color: "#4F8FBB", groupId: "faith-career" },
  { icon: HelpCircle, name: "Doubts & Questions", members: "15.3k", color: "#BB7A4F", groupId: "doubts-questions" },
];

const suggestedHubs = [
  { name: "Prayer Warriors", members: "28.9k" },
  { name: "Women of Faith", members: "19.4k" },
  { name: "Men of Faith", members: "14.7k" },
  { name: "Apologetics", members: "7.2k" },
  { name: "Worship & Music", members: "22.1k" },
  { name: "Christian Marriage", members: "10.5k" },
  { name: "Church Life", members: "16.3k" },
  { name: "Relationships", members: "11.8k" },
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
    slug: "theodicy-suffering-021",
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
    hubColor: "#3a7d56",
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
    flairColor: "#3a7d56",
    votes: 5621,
    comments: 891,
    saves: 1204,
    pinned: false,
    award: "⭐ Top Post This Week",
  },
  {
    id: 6,
    slug: "lunch-break-devotional-006",
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
  {
    id: 9,
    slug: "deconstruction-faith-008",
    hub: "Faith & Doubt",
    hubColor: "#6B4FBB",
    time: "4 days ago",
    title: "I've been deconstructing for 2 years. Has anyone come out the other side?",
    preview: "Two years ago I started asking hard questions. The purity culture, the political Christianity, the unanswered prayers, the pastor scandals. I haven't left — but I barely recognize my faith anymore...",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 3841,
    comments: 612,
    saves: 902,
    pinned: false,
    award: "💜 Most Supported",
  },
  {
    id: 10,
    slug: "prayer-doesnt-feel-real-009",
    hub: "Prayer Warriors",
    hubColor: "#3a7d56",
    time: "3 days ago",
    title: "I pray and pray and nothing seems to happen. Is God actually listening?",
    preview: "I know this is vulnerable to share, but I've been praying about the same situation for 3 years. Nothing has changed. I believe God exists. But sometimes in the silence I wonder if prayer is just talking to myself...",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 4219,
    comments: 487,
    saves: 1102,
    pinned: false,
    award: "⭐ Top Post This Week",
  },
  {
    id: 11,
    slug: "tithing-biblical-or-cultural-010",
    hub: "Theology & Doctrine",
    hubColor: "#6B4FBB",
    time: "2 days ago",
    title: "Is tithing 10% still a biblical command for Christians, or is it Old Covenant?",
    preview: "My pastor says tithing is mandatory. My friend says it was part of the Mosaic Law and doesn't apply to Christians. I've looked at Malachi 3:10 and the NT passages and I'm genuinely confused...",
    flair: "Theology",
    flairColor: "#3B82F6",
    votes: 1847,
    comments: 334,
    saves: 412,
    pinned: false,
    award: null,
  },
  {
    id: 12,
    slug: "worship-feels-empty-011",
    hub: "Doubts & Questions",
    hubColor: "#BB7A4F",
    time: "6 hours ago",
    title: "Worship used to make me cry. Now it feels like karaoke. What happened?",
    preview: "I'm not being flippant. I used to literally weep during worship — it felt like God was so close. Now the same songs feel hollow. I'm still going to church, still trying. But something changed...",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 2108,
    comments: 391,
    saves: 502,
    pinned: false,
    award: "💜 Most Supported",
  },
  {
    id: 13,
    slug: "job-loss-faith-012",
    hub: "Faith & Career",
    hubColor: "#4F8FBB",
    time: "1 day ago",
    title: "Laid off at 47 with three kids in college. Trying to trust God's provision but honestly struggling.",
    preview: "20 years at the same company. Never saw it coming. I know all the right Scripture to quote — Philippians 4:19, Matthew 6:33 — but when you're staring at the bills and the silence, it's harder than the sermons make it sound...",
    flair: "Prayer Request",
    flairColor: "#3a7d56",
    votes: 3247,
    comments: 418,
    saves: 687,
    pinned: false,
    award: "💜 Most Supported",
  },
  {
    id: 14,
    slug: "marriage-hard-church-silent-013",
    hub: "Young Adults",
    hubColor: "#4FBBAA",
    time: "18 hours ago",
    title: "My marriage is quietly falling apart and I'm too ashamed to tell anyone at church",
    preview: "We look like the perfect Christian couple on Sunday. We serve on the worship team together. But at home we haven't had a real conversation in months. I don't know how to ask for help without the whole church knowing...",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 4891,
    comments: 623,
    saves: 1108,
    pinned: false,
    award: "⭐ Top Post This Week",
  },
  {
    id: 15,
    slug: "prodigal-child-prayers-014",
    hub: "Christian Parenting",
    hubColor: "#BB4F7A",
    time: "2 days ago",
    title: "Parents of prodigal children — how do you keep praying when years go by with no change?",
    preview: "My son walked away from faith at 19. He's 27 now. Eight years of praying the same prayers, watching him make destructive choices. I believe in the prodigal son story. But the father in the parable waited — he didn't know how long it would take...",
    flair: "Prayer Request",
    flairColor: "#3a7d56",
    votes: 5312,
    comments: 724,
    saves: 1344,
    pinned: false,
    award: "💜 Most Supported",
  },
  {
    id: 16,
    slug: "faith-doubt-workplace-015",
    hub: "Faith & Career",
    hubColor: "#4F8FBB",
    time: "5 hours ago",
    title: "How do you actually live out your faith at work without being the 'weird Christian'?",
    preview: "I'm a software engineer at a secular tech company. I don't want to hide my faith, but I also don't want to be the person who turns every conversation into an evangelism opportunity. Looking for real, practical stories...",
    flair: "Practical Faith",
    flairColor: "#3a7d56",
    votes: 3891,
    comments: 312,
    saves: 543,
    pinned: false,
    award: null,
  },
  {
    id: 17,
    slug: "sunday-church-attendance-016",
    hub: "Church Life",
    hubColor: "#EC4899",
    time: "1 day ago",
    title: "Is Sunday attendance actually required? I love God but dread church — and I'm tired of feeling guilty about it.",
    preview: "I pray daily, read Scripture, serve in my community. But I genuinely dread Sunday morning services. Is Hebrews 10:25 actually a command that requires a Sunday pew, or is corporate gathering broader than one specific format?",
    flair: "Vulnerable Share",
    flairColor: "#BB4F7A",
    votes: 6241,
    comments: 489,
    saves: 1203,
    pinned: false,
    award: "⭐ Top Post This Week",
  },
  {
    id: 19,
    slug: "baptism-debate-018",
    hub: "Theology & Doctrine",
    hubColor: "#6B4FBB",
    time: "5 days ago",
    title: "Infant baptism vs. believer's baptism — can we stop acting like this divides us?",
    preview: "I grew up Reformed Presbyterian, married a Baptist. We've made peace. But I watch other Christians act like this is a first-tier issue. It's not, right?",
    flair: "Secondary Doctrine",
    flairColor: "#6B4FBB",
    votes: 1823,
    comments: 201,
    saves: 287,
    pinned: false,
    award: null,
  },
  {
    id: 20,
    slug: "homosexuality-church-019",
    hub: "Church Life",
    hubColor: "#EC4899",
    time: "6 days ago",
    title: "How does your church handle LGBTQ+ members? Looking for wisdom, not culture war.",
    preview: "My nephew just came out and wants to keep coming to church. How do you practice gracious, faithful pastoral care? What has actually helped?",
    flair: "Pastoral",
    flairColor: "#BB4F7A",
    votes: 4201,
    comments: 503,
    saves: 891,
    pinned: false,
    award: "⭐ Most Helpful This Month",
  },
  {
    id: 21,
    slug: "interracial-marriage-020",
    hub: "Relationships",
    hubColor: "#EC4899",
    time: "7 days ago",
    title: "Is there anything in Scripture against interracial marriage? Church is split.",
    preview: "My girlfriend is Nigerian-British and I'm white American. Some older members cite 'unequal yokes.' I've read Galatians 3:28 and Numbers 12 — need the community's input.",
    flair: "Marriage",
    flairColor: "#EC4899",
    votes: 5812,
    comments: 612,
    saves: 1203,
    pinned: false,
    award: null,
  },
  {
    id: 18,
    slug: "what-is-biblical-manhood-017",
    hub: "Men of Faith",
    hubColor: "#F59E0B",
    time: "3 days ago",
    title: "What does 'biblical manhood' actually mean in 2026? Serious question, not a culture war.",
    preview: "I'm a 28-year-old Christian man genuinely trying to figure out what it means to be a man rooted in Scripture — not in reaction to culture, from either direction. What does the Bible actually say? What does Jesus model?",
    flair: "Deep Dive",
    flairColor: "#6B4FBB",
    votes: 4127,
    comments: 378,
    saves: 612,
    pinned: false,
    award: null,
  },
  {
    id: 22,
    slug: "biblical-finances-stewardship-007",
    hub: "Faith & Career",
    hubColor: "#10B981",
    time: "8 days ago",
    title: "How I applied Proverbs 3:9 to pay off $40K in debt — and what the church never taught me",
    preview: "Three years ago I was $40K in debt — credit cards, a car loan, a personal loan. As a committed Christian, titheing regularly, I was somehow still drowning. Here's what changed: I stopped treating money as a secular problem and started treating it as a discipleship issue.",
    flair: "Finance",
    flairColor: "#10B981",
    votes: 1847,
    comments: 198,
    saves: 934,
    pinned: false,
    award: "⭐ Most Saved This Month",
  },
  {
    id: 23,
    slug: "antidepressants-faith-022",
    hub: "Mental Health & Faith",
    hubColor: "#4FBBAA",
    time: "5 days ago",
    title: "I've been on antidepressants for 3 years as a Christian. I'm tired of the stigma from church people.",
    preview: "Someone in my small group told me I need to 'just pray more' and I'll be healed. My doctor, who is also a Christian, helped me understand my brain chemistry. Why does the church still act like medication means weak faith?",
    flair: "Mental Health",
    flairColor: "#4FBBAA",
    votes: 6204,
    comments: 891,
    saves: 2103,
    pinned: false,
    award: "🔥 Trending",
  },
  {
    id: 24,
    slug: "women-in-ministry-leadership-023",
    hub: "Women of Faith",
    hubColor: "#BB4F7A",
    time: "4 days ago",
    title: "As a woman called to preach, I'm exhausted from justifying my calling. Can we have an honest conversation about women in ministry?",
    preview: "I've been in ministry for 12 years. I've planted two churches. I've led hundreds of women to Christ. And I'm still asked at every conference to justify whether women can teach mixed audiences. I want Scripture, not opinion.",
    flair: "Leadership",
    flairColor: "#BB4F7A",
    votes: 5831,
    comments: 743,
    saves: 1892,
    pinned: false,
    award: null,
  },
  {
    id: 25,
    slug: "faith-grief-death-024",
    hub: "Grief & Loss",
    hubColor: "#4F8FBB",
    time: "3 days ago",
    title: "My son died 6 months ago. I still believe in God. And I have more questions than ever.",
    preview: "I'm not writing this to vent or to get theological answers. I'm writing because I need the church to know what it looks like to grieve while believing. My faith didn't go away. But it changed shape. Grief taught me things about God that comfortable Christianity never could.",
    flair: "Grief",
    flairColor: "#4F8FBB",
    votes: 9204,
    comments: 1421,
    saves: 3817,
    pinned: false,
    award: "💎 Most Impactful",
  },
  {
    id: 26,
    slug: "church-hurt-healing-025",
    hub: "Faith & Doubt",
    hubColor: "#8B9BCC",
    time: "2 days ago",
    title: "I was hurt by church leadership. I left. Now I'm trying to find my way back to God (not necessarily back to church). How?",
    preview: "Leadership abuse, financial exploitation, spiritual manipulation — I experienced all three in the same church. I left 2 years ago. I haven't been back anywhere. But I miss God, not religion. How do you separate the two after they've been so entangled?",
    flair: "Church Hurt",
    flairColor: "#8B9BCC",
    votes: 7831,
    comments: 1089,
    saves: 2943,
    pinned: false,
    award: "🔥 Trending",
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

export default function DiscussionsPage() {
  const router = useRouter();
  const [upvotedPosts, setUpvotedPosts] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_disc_upvoted"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedPosts, setSavedPosts] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_disc_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [joinedHubs, setJoinedHubs] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_disc_hubs"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [activeSort, setActiveSort] = usePersistedState("vine_discussions_active_sort", "Hot");
  const [sharedPost, setSharedPost] = useState<number | null>(null);
  const [composerOpen, setComposerOpen] = useState(false);
  const [composerText, setComposerText] = useState("");
  const [myPosts, setMyPosts] = useState<string[]>(() => {
    try { const s = localStorage.getItem("vine_disc_my_posts"); return s ? JSON.parse(s) : []; } catch { return []; }
  });

  const submitComposer = () => {
    if (!composerText.trim()) return;
    setMyPosts((p) => [composerText.trim(), ...p]);
    setComposerText("");
    setComposerOpen(false);
  };

  const handleSharePost = (id: number, slug: string) => {
    try { navigator.clipboard.writeText(window.location.origin + `/discussions/${slug}`); } catch {}
    setSharedPost(id);
    setTimeout(() => setSharedPost((cur) => (cur === id ? null : cur)), 2000);
  };

  useEffect(() => {
    try { localStorage.setItem("vine_disc_my_posts", JSON.stringify(myPosts)); } catch {}
  }, [myPosts]);
  useEffect(() => {
    try { localStorage.setItem("vine_disc_upvoted", JSON.stringify([...upvotedPosts])); } catch {}
  }, [upvotedPosts]);
  useEffect(() => {
    try { localStorage.setItem("vine_disc_saved", JSON.stringify([...savedPosts])); } catch {}
  }, [savedPosts]);
  useEffect(() => {
    try { localStorage.setItem("vine_disc_hubs", JSON.stringify([...joinedHubs])); } catch {}
  }, [joinedHubs]);

  const toggleUpvote = (id: number) => setUpvotedPosts(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleSave = (id: number) => setSavedPosts(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleHub = (i: number) => setJoinedHubs(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const sortedPosts = [...posts].sort((a, b) => {
    if (activeSort === "Hot") return (b.votes + b.comments * 2) - (a.votes + a.comments * 2);
    if (activeSort === "New") return b.id - a.id;
    if (activeSort === "Top") return b.votes - a.votes;
    if (activeSort === "Rising") return b.comments - a.comments;
    return 0;
  });

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
                  background: "linear-gradient(135deg, rgba(107,79,187,0.3) 0%, rgba(58,125,86,0.15) 100%)",
                  border: "1px solid rgba(58,125,86,0.15)",
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
              <CreatePostModal label="Create Post" />
            </div>

            {/* Your Hubs */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#3a7d56" }}
              >
                Your Hubs
              </h4>
              <div className="space-y-1">
                {hubs.map((hub, i) => (
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
                style={{ color: "#3a7d56" }}
              >
                Discover Hubs
              </h4>
              <div className="space-y-2">
                {suggestedHubs.map((hub, si) => (
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
                      onClick={() => toggleHub(hubs.length + si)}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold transition-all duration-200"
                      style={{
                        background: joinedHubs.has(hubs.length + si) ? "#3a7d56" : "transparent",
                        border: "1px solid rgba(58,125,86,0.3)",
                        color: joinedHubs.has(hubs.length + si) ? "#07070F" : "#3a7d56",
                      }}
                    >
                      {joinedHubs.has(hubs.length + si) ? "✓" : "Join"}
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
                  style={{ background: "linear-gradient(135deg, #6B4FBB, #3a7d56)", color: "#07070F" }}
                >
                  J
                </div>
                <button
                  onClick={() => setComposerOpen((o) => !o)}
                  className="flex-1 text-left px-4 py-2 rounded-xl text-sm transition-all duration-200 hover:border-[rgba(58,125,86,0.3)]"
                  style={{
                    background: "#07070F",
                    border: "1px solid #1E1E32",
                    color: "#6A6A88",
                  }}
                >
                  What&apos;s on your heart?
                </button>
              </div>
              {composerOpen && (
                <div className="p-3 border-b" style={{ borderColor: "#1E1E32" }}>
                  <textarea
                    autoFocus
                    value={composerText}
                    onChange={(e) => setComposerText(e.target.value)}
                    placeholder="Share a thought, question, or testimony..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl text-sm outline-none resize-none mb-2"
                    style={{ background: "#07070F", border: "1px solid #1E1E32", color: "#F2F2F8" }}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => { setComposerOpen(false); setComposerText(""); }}
                      className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                      style={{ border: "1px solid #1E1E32", color: "#8A8AA8" }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={submitComposer}
                      className="text-xs px-4 py-1.5 rounded-lg font-bold"
                      style={{ background: "#3a7d56", color: "#07070F", opacity: composerText.trim() ? 1 : 0.4 }}
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}
              {/* Sort tabs */}
              <div className="flex">
                {[
                  { label: "Hot", icon: Flame },
                  { label: "New", icon: Sparkles },
                  { label: "Top", icon: Star },
                  { label: "Rising", icon: TrendingUp },
                ].map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveSort(tab.label)}
                    className="flex items-center gap-1.5 px-5 py-3 text-sm font-semibold transition-all duration-200"
                    style={{
                      color: activeSort === tab.label ? "#3a7d56" : "#6A6A88",
                      borderBottom: activeSort === tab.label ? "2px solid #3a7d56" : "2px solid transparent",
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
              {myPosts.map((text, i) => (
                <div
                  key={`mine-${i}`}
                  className="block rounded-2xl p-4"
                  style={{ background: "#12121F", border: "1px solid rgba(58,125,86,0.3)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold" style={{ color: "#3a7d56" }}>Posted by you</span>
                    <span style={{ color: "#1E1E32" }}>·</span>
                    <span className="text-xs" style={{ color: "#6A6A88" }}>just now</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#C0C0D8" }}>{text}</p>
                </div>
              ))}
              {sortedPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.slug ? `/discussions/${post.slug}` : undefined}
                  className="block rounded-2xl p-4 transition-all duration-200 hover:bg-[#18182A] cursor-pointer"
                  style={{
                    background: "#12121F",
                    border: post.pinned
                      ? "1px solid rgba(58,125,86,0.3)"
                      : "1px solid #1E1E32",
                    textDecoration: "none",
                  }}
                >
                  {post.pinned && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <Pin size={11} style={{ color: "#3a7d56" }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#3a7d56" }}>
                        Pinned Post
                      </span>
                    </div>
                  )}

                  {post.award && (
                    <div
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full mb-2"
                      style={{
                        background: "rgba(58,125,86,0.1)",
                        border: "1px solid rgba(58,125,86,0.25)",
                        color: "#3a7d56",
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

                  <div className="flex items-center gap-1" onClick={(e) => e.preventDefault()}>
                    <button
                      onClick={() => toggleUpvote(post.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#1E1E32]"
                      style={{ color: upvotedPosts.has(post.id) ? "#3a7d56" : "#8A8AA8" }}
                    >
                      <ArrowUp size={15} />
                      <span>{(post.votes + (upvotedPosts.has(post.id) ? 1 : 0)) >= 1000 ? `${((post.votes + (upvotedPosts.has(post.id) ? 1 : 0)) / 1000).toFixed(1)}k` : post.votes + (upvotedPosts.has(post.id) ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => { if (post.slug) router.push(`/discussions/${post.slug}`); }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32]"
                      style={{ color: "#8A8AA8" }}
                    >
                      <MessageSquare size={14} />
                      <span>{post.comments >= 1000 ? `${(post.comments / 1000).toFixed(1)}k` : post.comments}</span>
                    </button>
                    <button
                      onClick={() => toggleSave(post.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32]"
                      style={{ color: savedPosts.has(post.id) ? "#3a7d56" : "#8A8AA8" }}
                    >
                      <Bookmark size={14} fill={savedPosts.has(post.id) ? "#3a7d56" : "none"} />
                      <span>{(post.saves + (savedPosts.has(post.id) ? 1 : 0)) >= 1000 ? `${((post.saves + (savedPosts.has(post.id) ? 1 : 0)) / 1000).toFixed(1)}k` : post.saves + (savedPosts.has(post.id) ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => post.slug && handleSharePost(post.id, post.slug)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-all duration-200 hover:bg-[#1E1E32] ml-auto"
                      style={{ color: sharedPost === post.id ? "#3a7d56" : "#8A8AA8" }}
                    >
                      <Share2 size={14} />
                      {sharedPost === post.id ? "Copied!" : "Share"}
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
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#3a7d56" }}>
                Today&apos;s Verse
              </p>
              <p className="text-sm font-medium italic leading-relaxed mb-2" style={{ color: "#F2F2F8" }}>
                &ldquo;As iron sharpens iron, so one person sharpens another.&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: "#3a7d56" }}>— Proverbs 27:17</p>
            </div>

            {/* Trending */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
                Trending This Week
              </h4>
              <div className="space-y-3">
                {trending.map((item, i) => (
                  <Link key={i} href={item.href} className="flex items-start gap-2.5 group cursor-pointer" style={{ textDecoration: "none" }}>
                    <TrendingUp size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#3a7d56" }} />
                    <div>
                      <p className="text-xs font-medium leading-snug transition-colors group-hover:text-[#3a7d56]" style={{ color: "#C0C0D8" }}>
                        {item.title}
                      </p>
                      <p className="text-[10px]" style={{ color: "#6A6A88" }}>
                        {item.count}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Community Rules */}
            <div
              className="rounded-2xl p-4"
              style={{ background: "#12121F", border: "1px solid #1E1E32" }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3a7d56" }}>
                Community Rules
              </h4>
              <div className="space-y-2">
                {rules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-black"
                      style={{ background: "rgba(58,125,86,0.12)", color: "#3a7d56" }}
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
                background: "linear-gradient(135deg, rgba(107,79,187,0.15) 0%, rgba(58,125,86,0.08) 100%)",
                border: "1px solid rgba(58,125,86,0.2)",
              }}
            >
              <AlertCircle size={24} className="mx-auto mb-2" style={{ color: "#3a7d56" }} />
              <h4 className="font-bold text-sm mb-1" style={{ color: "#F2F2F8" }}>
                Start a Discussion
              </h4>
              <p className="text-xs mb-3" style={{ color: "#8A8AA8" }}>
                Share what&apos;s on your mind. The community is here to grow together.
              </p>
              <CreatePostModal label="New Post" />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
