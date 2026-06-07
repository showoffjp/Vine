"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

interface Challenge {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  icon: string;
  participants: number;
  verse: string;
  verseRef: string;
  steps: string[];
}

interface Resource {
  id: string;
  title: string;
  type: "Video" | "Podcast" | "Article" | "Devotional" | "Study";
  author: string;
  thumbnail: string;
  duration: string;
  ageGroup: string;
  tags: string[];
  description: string;
  likes: number;
}

interface DiscussionTopic {
  id: string;
  question: string;
  author: string;
  avatar: string;
  replies: number;
  category: string;
  posted: string;
  hot: boolean;
}

const challenges: Challenge[] = [
  {
    id: "1",
    title: "7-Day Digital Detox",
    description: "Reclaim your attention and time for what matters most by cutting back on social media and screens.",
    duration: "7 days",
    difficulty: "Intermediate",
    category: "Mindfulness",
    icon: "📵",
    participants: 2847,
    verse: "Be still, and know that I am God.",
    verseRef: "Psalm 46:10",
    steps: [
      "Delete social media apps from your phone for the week",
      "Use the freed time for prayer, Scripture, and real conversations",
      "Journal how you feel each day — resistance, peace, clarity",
      "Replace scrolling with a physical Bible or devotional",
      "Share one insight with a friend or mentor at the end",
    ],
  },
  {
    id: "2",
    title: "30 Days of Gratitude",
    description: "Build a daily habit of thankfulness that rewires your brain and heart toward joy.",
    duration: "30 days",
    difficulty: "Beginner",
    category: "Spiritual Growth",
    icon: "🙏",
    participants: 4512,
    verse: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    verseRef: "1 Thessalonians 5:18",
    steps: [
      "Write 3 specific things you're grateful for each morning",
      "Pray a short prayer of thanks before each meal",
      "Tell someone why you appreciate them — once a week",
      "End each day by recalling one way God showed up",
      "Share your journey on the Vine feed with #30DaysGratitude",
    ],
  },
  {
    id: "3",
    title: "Random Acts of Kindness Week",
    description: "Seven days of intentional, surprising kindness toward strangers, classmates, and family.",
    duration: "7 days",
    difficulty: "Beginner",
    category: "Service",
    icon: "💛",
    participants: 3190,
    verse: "Let your light shine before others, that they may see your good deeds.",
    verseRef: "Matthew 5:16",
    steps: [
      "Day 1: Leave an encouraging note for a teacher or coworker",
      "Day 2: Pay for someone's coffee or lunch anonymously",
      "Day 3: Message an old friend you've lost touch with",
      "Day 4: Volunteer 2 hours at a local shelter or food bank",
      "Day 5: Compliment 5 different people sincerely",
      "Day 6: Help someone with a task they've been struggling with",
      "Day 7: Write a letter of gratitude to a parent or mentor",
    ],
  },
  {
    id: "4",
    title: "Memorize the Beatitudes",
    description: "Commit Matthew 5:3–12 to heart — the blueprint for kingdom living and true blessing.",
    duration: "14 days",
    difficulty: "Intermediate",
    category: "Scripture",
    icon: "📖",
    participants: 1876,
    verse: "Blessed are the pure in heart, for they will see God.",
    verseRef: "Matthew 5:8",
    steps: [
      "Read all 8 Beatitudes aloud every morning and night",
      "Learn 1 beatitude per 2 days — write it without looking",
      "Discuss the meaning of each one with a friend or group",
      "Find a real-life example of that beatitude you've witnessed",
      "Write in your journal how each one applies to your life now",
      "Record a voice note reciting all 8 from memory by day 14",
    ],
  },
  {
    id: "5",
    title: "Fast from Comparison",
    description: "Break the social comparison trap and discover your God-given identity and worth.",
    duration: "21 days",
    difficulty: "Advanced",
    category: "Identity",
    icon: "🎯",
    participants: 2134,
    verse: "For we are God's handiwork, created in Christ Jesus to do good works.",
    verseRef: "Ephesians 2:10",
    steps: [
      "Unfollow accounts that consistently make you feel less-than",
      "Replace comparison thoughts with a specific truth from Scripture",
      "Write your God-given gifts and strengths — return to it daily",
      "Stop saying 'I wish I was like...' Replace it with gratitude",
      "Celebrate someone else's success without diminishing your own",
    ],
  },
  {
    id: "6",
    title: "Prayer Walking",
    description: "Combine physical movement with prayer — intercede for your neighborhood, campus, or city.",
    duration: "Ongoing",
    difficulty: "Beginner",
    category: "Prayer",
    icon: "🚶",
    participants: 1543,
    verse: "Walk in the Spirit, and you will not gratify the desires of the flesh.",
    verseRef: "Galatians 5:16",
    steps: [
      "Choose a route (neighborhood, campus, downtown)",
      "Pray out loud or silently for every person, place, and building you pass",
      "Ask God to show you needs around you — then act on what He shows",
      "Invite a friend to join you — prayer walking in pairs doubles the power",
      "Keep a note of what you sense or observe — track answers over time",
    ],
  },
];

const resources: Resource[] = [
  {
    id: "r1",
    title: "Identity in Christ: You Are Not Your Instagram",
    type: "Video",
    author: "Sarah Jakes Roberts",
    thumbnail: "🎥",
    duration: "28 min",
    ageGroup: "13–18",
    tags: ["Identity", "Social Media", "Self-Worth"],
    description: "A bold, honest talk about who God says you are versus who the world says you should be. Perfect for teens wrestling with comparison culture.",
    likes: 8420,
  },
  {
    id: "r2",
    title: "Devotional: Faith for the Anxious Generation",
    type: "Devotional",
    author: "Louie Giglio",
    thumbnail: "📔",
    duration: "10 min/day",
    ageGroup: "16–25",
    tags: ["Anxiety", "Faith", "Mental Health"],
    description: "A 14-day plan addressing the unique stressors facing young people today — college pressure, career uncertainty, relationships — through a biblical lens.",
    likes: 5610,
  },
  {
    id: "r3",
    title: "Sex, Dating & Relationships: God's Design",
    type: "Study",
    author: "Jefferson Bethke",
    thumbnail: "💍",
    duration: "6-week study",
    ageGroup: "16–25",
    tags: ["Dating", "Purity", "Relationships"],
    description: "An honest, grace-filled Bible study navigating modern dating culture, healthy boundaries, and what Scripture actually says about intimacy.",
    likes: 6780,
  },
  {
    id: "r4",
    title: "Called & Confused: Discovering Your Life Purpose",
    type: "Podcast",
    author: "Christine Caine",
    thumbnail: "🎙️",
    duration: "45 min",
    ageGroup: "18–25",
    tags: ["Calling", "Purpose", "Career"],
    description: "For young adults in the middle of 'what am I supposed to do with my life?' — a conversation about vocation, gifting, and the freedom in seeking God's will.",
    likes: 4920,
  },
  {
    id: "r5",
    title: "How to Study the Bible (Even If School Made You Hate Reading)",
    type: "Article",
    author: "Vine Team",
    thumbnail: "📚",
    duration: "12 min read",
    ageGroup: "13–25",
    tags: ["Bible Study", "Basics", "Tips"],
    description: "Practical, accessible methods for getting into Scripture without feeling overwhelmed — including OIA method, topical study, and character studies.",
    likes: 3340,
  },
  {
    id: "r6",
    title: "Peer Pressure & Standing Firm in Your Faith",
    type: "Video",
    author: "Judah Smith",
    thumbnail: "💪",
    duration: "34 min",
    ageGroup: "13–18",
    tags: ["Courage", "Peer Pressure", "Identity"],
    description: "Real talk on how to hold your convictions without becoming a self-righteous outcast — and how to be the friend that changes the room.",
    likes: 7120,
  },
  {
    id: "r7",
    title: "Money, Faith & Your First Paycheck",
    type: "Article",
    author: "Dave Ramsey Jr.",
    thumbnail: "💰",
    duration: "15 min read",
    ageGroup: "18–25",
    tags: ["Finances", "Stewardship", "Adulting"],
    description: "Biblical principles for managing money as a young adult — tithing, budgeting, avoiding debt, and building generosity as a lifestyle.",
    likes: 4280,
  },
  {
    id: "r8",
    title: "When Prayer Feels Like Nothing",
    type: "Devotional",
    author: "Priscilla Shirer",
    thumbnail: "🙏",
    duration: "7 min/day",
    ageGroup: "13–25",
    tags: ["Prayer", "Doubt", "Spiritual Dryness"],
    description: "A 7-day devotional for the moments when you show up to God but feel nothing in return — and why that's not the end of the story.",
    likes: 5890,
  },
];

const discussions: DiscussionTopic[] = [
  {
    id: "d1",
    question: "How do you explain your faith to friends who think Christianity is outdated?",
    author: "Marcus T.",
    avatar: "🧑",
    replies: 47,
    category: "Apologetics",
    posted: "2 hours ago",
    hot: true,
  },
  {
    id: "d2",
    question: "Struggling with whether to go to a secular or Christian college — any advice?",
    author: "Aaliyah R.",
    avatar: "👧",
    replies: 38,
    category: "Life Decisions",
    posted: "5 hours ago",
    hot: true,
  },
  {
    id: "d3",
    question: "Do you listen to secular music? Where do you draw the line?",
    author: "Jake M.",
    avatar: "🧑",
    replies: 62,
    category: "Culture",
    posted: "1 day ago",
    hot: false,
  },
  {
    id: "d4",
    question: "How do you date as a Christian without being preachy about it?",
    author: "Sofia L.",
    avatar: "👧",
    replies: 55,
    category: "Relationships",
    posted: "1 day ago",
    hot: true,
  },
  {
    id: "d5",
    question: "Real talk: does anyone else struggle with doubts? How do you work through them?",
    author: "Elijah B.",
    avatar: "🧑",
    replies: 73,
    category: "Faith",
    posted: "2 days ago",
    hot: false,
  },
  {
    id: "d6",
    question: "Best ways to stay spiritually connected during exam season / crazy busy periods?",
    author: "Grace K.",
    avatar: "👧",
    replies: 29,
    category: "Spiritual Growth",
    posted: "3 days ago",
    hot: false,
  },
  {
    id: "d7",
    question: "How do you handle Christian parents who disagree with your calling?",
    author: "Noah C.",
    avatar: "🧑",
    replies: 41,
    category: "Family",
    posted: "4 days ago",
    hot: false,
  },
  {
    id: "d8",
    question: "Social anxiety and youth group — does anyone else feel like an outsider at church?",
    author: "Mia F.",
    avatar: "👧",
    replies: 52,
    category: "Community",
    posted: "5 days ago",
    hot: false,
  },
];

const VOICES_YOUTH = [
  { id: "smith-jk", name: "James K.A. Smith", era: "b. 1970", context: "You Are What You Love (2016); Desiring the Kingdom (2009) — on formation of young people's loves and desires", bio: "James K.A. Smith is a philosopher at Calvin University whose work on cultural liturgies, desire, and formation has become essential reading for youth workers and educators. His central argument: human beings are not primarily thinking beings but desiring, loving creatures — and what we love is formed by the practices and habits we engage in, not primarily by the beliefs we hold. This has profound implications for youth ministry: if you want to form Christian young people, you must attend to the practices and habits that shape their desires, not merely the doctrines they assent to. You Are What You Love is his accessible translation of the more academic Desiring the Kingdom for church audiences.", quote: "You are not what you think — you are what you love. And what you love is shaped by the habits, practices, and liturgies that you have been shaped by, often without knowing it.", contribution: "Smith's work has reshaped how a generation of youth workers, educators, and parents think about formation. His emphasis on practices over propositions — that what we do together shapes who we become — has influenced the design of youth ministries, Christian schools, and family devotional practices across evangelical traditions." },
  { id: "kinnaman-d", name: "David Kinnaman", era: "b. 1973", context: "You Lost Me (2011); Faith for Exiles (2019) — on why young people leave the church and what keeps them", bio: "David Kinnaman is president of the Barna Group and has conducted the most extensive sociological research on young people and faith in the United States. His You Lost Me — based on research with thousands of 18-29-year-olds who had left the church — identified six patterns that lead young adults to disengage: the church is overprotective, shallow, anti-science, repressive, exclusive, or doubtless. His subsequent Faith for Exiles, co-authored with Mark Matlock, identified the practices that characterize the small minority of young adults who maintain robust faith: cultural discernment, formative relationships, meaningful community, vocational discipleship, and counter-cultural mission.", quote: "The church isn't losing a generation because young people have stopped believing in God. It's losing them because the faith they received isn't big enough, or deep enough, or honest enough, to carry them through real life.", contribution: "Kinnaman's research has given youth workers, parents, and church leaders empirical data on why young people leave and what keeps them. His work has driven significant changes in how evangelical churches approach youth ministry — moving from programming and entertainment models toward formation, mentorship, and deeper engagement with real questions." },
  { id: "comer-jm", name: "John Mark Comer", era: "b. 1980", context: "The Ruthless Elimination of Hurry (2019); Live No Lies (2021) — on the spiritual challenges facing young adults", bio: "John Mark Comer, founding pastor of Bridgetown Church in Portland (now Practicing the Way), has become one of the most influential voices for young adult Christians navigating the intersection of digital culture, mental health, and Christian formation. His The Ruthless Elimination of Hurry, drawing on John Ortberg's counsel from Dallas Willard, argues that the primary spiritual challenge for young adults is not lack of conviction but the pace of life that makes deep formation impossible. Live No Lies addresses the three sources of temptation — the devil, the flesh, and the world — through the lens of the cultural moment: the digital information environment, the lies embedded in consumerist and sexual culture.", quote: "The greatest spiritual challenge facing young adults today is not doubt — it is distraction. It is the pace of life that leaves no room for God to form us into who we are meant to be.", contribution: "Comer has reached a generation of young adult Christians who were disengaged from traditional evangelical church culture but hungry for serious discipleship. His podcasts, books, and community have helped create a model for young adult ministry centered on spiritual practices, honest doubt, and counter-cultural formation." },
  { id: "powell-k", name: "Kara Powell", era: "b. 1970", context: "Sticky Faith (2011); Growing Young (2016) — research-based youth ministry practice", bio: "Kara Powell is executive director of the Fuller Youth Institute and has led some of the most significant research-based studies of youth ministry in the evangelical world. Sticky Faith — the result of a multi-year longitudinal study — identified practices that help faith 'stick' into young adulthood: church-family integration (vs. youth group segregation), meaningful service opportunities, safe spaces for doubt, mentoring relationships, and ownership of faith rather than inherited religion. Growing Young, a study of churches that are effectively reaching and retaining young people, identified six commitments shared by those churches: keychain leadership, empathetic warmth, messaging Jesus, prioritizing young people, focusing on entire families, and fostering best friendships.", quote: "Sticky faith isn't just about getting young people through high school. It's about helping them develop a faith that is their own — that can carry them through the real challenges of adult life.", contribution: "Powell's research-based approach has given youth workers and church leaders empirically grounded tools for thinking about faith formation. Fuller Youth Institute's resources have been used in thousands of churches, and Sticky Faith has become the standard reference for thinking about youth-to-young-adult transition in evangelical contexts." },
  { id: "root-a", name: "Andrew Root", era: "b. 1974", context: "The End of Youth Ministry? (2020); Ministry in the Digital Age; theologian of youth ministry", bio: "Andrew Root is professor of youth and family ministry at Luther Seminary and the most theologically serious voice in contemporary youth ministry scholarship. His work engages with Charles Taylor's A Secular Age, late-modern culture, and the challenges of formation in a world of expressive individualism. The End of Youth Ministry? is not a pessimistic polemic but a theological argument: the youth ministry model built on events, programming, and entertainment is exhausted — not because young people are less spiritual but because the late-modern self requires something more. Root argues for ministry models built around divine encounter, vulnerability, and genuine theological reflection rather than cultural relevance.", quote: "The challenge of youth ministry in the secular age is not making Christianity cool enough to compete with culture. It is creating spaces where young people can actually encounter the living God.", contribution: "Root's theological depth has given youth ministry scholars and reflective practitioners a framework for understanding why attractional youth ministry models are failing — and what theological resources are available for reimagining the work. His engagement with Taylor, Bonhoeffer, and Luther gives youth ministry a genuinely theological foundation it has often lacked." },
];

const ageGroups = ["All Ages", "13–15", "16–18", "19–22", "23–25"];
const categories = ["All", "Mindfulness", "Spiritual Growth", "Service", "Scripture", "Identity", "Prayer"];

const difficultyColor: Record<string, string> = {
  Beginner: "#3a7d56",
  Intermediate: "#F59E0B",
  Advanced: "#EF4444",
};

export default function YouthPage() {
  const [joinedChallenges, setJoinedChallenges] = useState<Set<string>>(() => {
    try { const j = localStorage.getItem("vine_youth_challenges"); return j ? new Set(JSON.parse(j)) : new Set(); } catch { return new Set(); }
  });
  const [savedResources, setSavedResources] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_youth_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [likedResources, setLikedResources] = useState<Set<string>>(() => {
    try { const l = localStorage.getItem("vine_youth_liked"); return l ? new Set(JSON.parse(l)) : new Set(); } catch { return new Set(); }
  });
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [activeTab, setActiveTab] = usePersistedState<"challenges" | "resources" | "discuss" | "voices" | "videos" | "journal">("vine_youth_tab", "challenges");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_youth_voice", "smith-jk");
  const voiceItem = VOICES_YOUTH.find(v => v.id === selectedVoice)!;
  const [selectedCategory, setSelectedCategory] = usePersistedState("vine_youth_selected_category", "All");
  const [selectedAgeGroup, setSelectedAgeGroup] = usePersistedState("vine_youth_selected_age_group", "All Ages");


  const handleJoin = (id: string) => {
    setJoinedChallenges((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_youth_challenges", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleSave = (id: string) => {
    setSavedResources((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_youth_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLike = (id: string) => {
    setLikedResources((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_youth_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filteredChallenges = challenges.filter(
    (c) => selectedCategory === "All" || c.category === selectedCategory
  );

  type YouthJournalEntry = { id: string; date: string; conviction: string; challenge: string; step: string };
  const [youthJournal, setYouthJournal] = useState<YouthJournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_youthj_entries") ?? "[]"); } catch { return []; } });
  const [jConviction, setJConviction] = useState("");
  const [jChallenge, setJChallenge] = useState("");
  const [jStep, setJStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_youthj_entries", JSON.stringify(youthJournal)); } catch {} }, [youthJournal]);
  function saveYouthEntry() {
    if (!jConviction.trim() && !jChallenge.trim()) return;
    const entry: YouthJournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), conviction: jConviction, challenge: jChallenge, step: jStep };
    setYouthJournal(prev => [entry, ...prev]);
    setJConviction(""); setJChallenge(""); setJStep("");
  }
  function deleteYouthEntry(id: string) { setYouthJournal(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a0a3e 0%, #0a1a2e 50%, #07070F 100%)",
          padding: "60px 24px 48px",
          textAlign: "center",
          borderBottom: "1px solid #1E1E32",
        }}
      >
        <div style={{ fontSize: 56, marginBottom: 16 }}>⚡</div>
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12, color: "#F2F2F8" }}>
          Youth & Students
        </h1>
        <p style={{ fontSize: 18, color: "#9898B3", maxWidth: 560, margin: "0 auto 32px" }}>
          Faith for the next generation. Real challenges, honest resources, and a community that gets what you're going through.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "42K+", label: "Young Believers" },
            { value: String(challenges.length), label: "Active Challenges" },
            { value: String(resources.length), label: "Curated Resources" },
            { value: String(discussions.length), label: "Open Discussions" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#3a7d56" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            background: "#12121F",
            padding: 6,
            borderRadius: 12,
            border: "1px solid #1E1E32",
          }}
        >
          {(["challenges", "resources", "discuss", "voices", "videos", "journal"] as const).map((tab) => (
            <button type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
                background: activeTab === tab ? "#6B4FBB" : "transparent",
                color: activeTab === tab ? "#fff" : "#9898B3",
              }}
            >
              {tab === "challenges" ? "🔥 Challenges" : tab === "resources" ? "📚 Resources" : tab === "discuss" ? "💬 Discuss" : tab === "voices" ? "🎓 Voices" : tab === "videos" ? "🎬 Videos" : "📓 Journal"}
            </button>
          ))}
        </div>

        {/* CHALLENGES TAB */}
        {activeTab === "challenges" && (
          <>
            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {categories.map((cat) => (
                <button type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: `1px solid ${selectedCategory === cat ? "#6B4FBB" : "#1E1E32"}`,
                    background: selectedCategory === cat ? "#6B4FBB20" : "transparent",
                    color: selectedCategory === cat ? "#6B4FBB" : "#9898B3",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 20,
              }}
            >
              {filteredChallenges.map((challenge) => {
                const joined = joinedChallenges.has(challenge.id);
                return (
                  <div
                    key={challenge.id}
                    style={{
                      background: "#12121F",
                      border: `1px solid ${joined ? "#6B4FBB" : "#1E1E32"}`,
                      borderRadius: 16,
                      padding: 24,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onClick={() => setSelectedChallenge(challenge)}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 32 }}>{challenge.icon}</span>
                        <div>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: difficultyColor[challenge.difficulty],
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                              marginBottom: 2,
                            }}
                          >
                            {challenge.difficulty} · {challenge.duration}
                          </div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#F2F2F8", margin: 0 }}>
                            {challenge.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 16 }}>
                      {challenge.description}
                    </p>

                    <div
                      style={{
                        background: "#07070F",
                        borderRadius: 8,
                        padding: "10px 14px",
                        marginBottom: 16,
                        borderLeft: "3px solid #6B4FBB",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "#F2F2F8", fontStyle: "italic", marginBottom: 2 }}>
                        "{challenge.verse}"
                      </div>
                      <div style={{ fontSize: 11, color: "#9898B3" }}>— {challenge.verseRef}</div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 12, color: "#9898B3" }}>
                        👥 {challenge.participants.toLocaleString()} joined
                      </div>
                      <button type="button"
                        onClick={(e) => { e.stopPropagation(); handleJoin(challenge.id); }}
                        style={{
                          padding: "8px 20px",
                          borderRadius: 8,
                          border: `1px solid ${joined ? "#6B4FBB" : "#3a7d56"}`,
                          background: joined ? "#6B4FBB20" : "#3a7d5620",
                          color: joined ? "#6B4FBB" : "#3a7d56",
                          cursor: "pointer",
                          fontWeight: 600,
                          fontSize: 13,
                        }}
                      >
                        {joined ? "✓ Joined" : "Join Challenge"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* RESOURCES TAB */}
        {activeTab === "resources" && (
          <>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {ageGroups.map((ag) => (
                <button type="button"
                  key={ag}
                  onClick={() => setSelectedAgeGroup(ag)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: `1px solid ${selectedAgeGroup === ag ? "#3a7d56" : "#1E1E32"}`,
                    background: selectedAgeGroup === ag ? "#3a7d5620" : "transparent",
                    color: selectedAgeGroup === ag ? "#3a7d56" : "#9898B3",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {ag}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
              {resources
                .filter((r) => selectedAgeGroup === "All Ages" || r.ageGroup === selectedAgeGroup)
                .map((resource) => {
                  const liked = likedResources.has(resource.id);
                  const saved = savedResources.has(resource.id);
                  return (
                    <div
                      key={resource.id}
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: 16,
                        padding: 20,
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                      }}
                      onClick={() => setSelectedResource(resource)}
                    >
                      <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 12,
                            background: "#1E1E32",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                            flexShrink: 0,
                          }}
                        >
                          {resource.thumbnail}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: "inline-block",
                              padding: "2px 8px",
                              borderRadius: 4,
                              background:
                                resource.type === "Video"
                                  ? "#EF444420"
                                  : resource.type === "Podcast"
                                  ? "#8B5CF620"
                                  : resource.type === "Devotional"
                                  ? "#3a7d5620"
                                  : "#F59E0B20",
                              color:
                                resource.type === "Video"
                                  ? "#EF4444"
                                  : resource.type === "Podcast"
                                  ? "#8B5CF6"
                                  : resource.type === "Devotional"
                                  ? "#3a7d56"
                                  : "#F59E0B",
                              fontSize: 10,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                              marginBottom: 4,
                            }}
                          >
                            {resource.type}
                          </div>
                          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", margin: 0, lineHeight: 1.4 }}>
                            {resource.title}
                          </h3>
                        </div>
                      </div>

                      <p style={{ fontSize: 12, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>
                        {resource.description}
                      </p>

                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                        {resource.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "2px 8px",
                              borderRadius: 20,
                              background: "#1E1E32",
                              color: "#9898B3",
                              fontSize: 11,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: 12, color: "#9898B3" }}>
                          {resource.author} · {resource.duration}
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button type="button"
                            onClick={(e) => { e.stopPropagation(); handleLike(resource.id); }}
                            style={{
                              padding: "4px 10px",
                              borderRadius: 6,
                              border: "none",
                              background: liked ? "#3a7d5620" : "#1E1E32",
                              color: liked ? "#3a7d56" : "#9898B3",
                              cursor: "pointer",
                              fontSize: 12,
                            }}
                          >
                            ♥ {resource.likes + (liked ? 1 : 0)}
                          </button>
                          <button type="button"
                            onClick={(e) => { e.stopPropagation(); handleSave(resource.id); }}
                            style={{
                              padding: "4px 10px",
                              borderRadius: 6,
                              border: "none",
                              background: saved ? "#6B4FBB20" : "#1E1E32",
                              color: saved ? "#6B4FBB" : "#9898B3",
                              cursor: "pointer",
                              fontSize: 12,
                            }}
                          >
                            {saved ? "★" : "☆"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}

        {/* DISCUSSIONS TAB */}
        {activeTab === "discuss" && (
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 15, color: "#9898B3" }}>
                Real questions. Real answers. No judgment.
              </div>
              <Link
                href="/discussions"
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "#6B4FBB",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                + Start Discussion
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {discussions.map((d) => (
                <div
                  key={d.id}
                  style={{
                    background: "#12121F",
                    border: `1px solid ${d.hot ? "#F59E0B30" : "#1E1E32"}`,
                    borderRadius: 12,
                    padding: "16px 20px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1, paddingRight: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        {d.hot && (
                          <span
                            style={{
                              padding: "2px 8px",
                              borderRadius: 4,
                              background: "#F59E0B20",
                              color: "#F59E0B",
                              fontSize: 10,
                              fontWeight: 700,
                              textTransform: "uppercase",
                            }}
                          >
                            🔥 Hot
                          </span>
                        )}
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: 4,
                            background: "#6B4FBB20",
                            color: "#6B4FBB",
                            fontSize: 10,
                            fontWeight: 600,
                          }}
                        >
                          {d.category}
                        </span>
                      </div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", margin: "0 0 8px", lineHeight: 1.4 }}>
                        {d.question}
                      </p>
                      <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#9898B3" }}>
                        <span>{d.avatar} {d.author}</span>
                        <span>💬 {d.replies} replies</span>
                        <span>🕐 {d.posted}</span>
                      </div>
                    </div>
                    <Link
                      href="/discussions"
                      style={{
                        padding: "8px 16px",
                        borderRadius: 8,
                        border: "1px solid #1E1E32",
                        color: "#9898B3",
                        textDecoration: "none",
                        fontSize: 12,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Join →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Link
                href="/discussions"
                style={{
                  padding: "12px 32px",
                  borderRadius: 10,
                  border: "1px solid #1E1E32",
                  color: "#9898B3",
                  textDecoration: "none",
                  fontSize: 14,
                  display: "inline-block",
                }}
              >
                View All Discussions →
              </Link>
            </div>
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_YOUTH.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? "#6B4FBB" : "#12121F", border: `1px solid ${selectedVoice === v.id ? "#6B4FBB" : "#1E1E32"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: "#9898B3", fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: "#3a7d56", fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: "#9898B3", fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: "#F2F2F8", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: "#07070F", borderLeft: "3px solid #3a7d56", borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: "#3a7d56", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: "rgba(107,79,187,0.15)", borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#6B4FBB", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: "#F2F2F8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 20, marginBottom: 4 }}>My Youth Ministry Journal</h2>
              <p style={{ color: "#9898B3", fontSize: 13, marginBottom: 20, lineHeight: 1.6 }}>Record convictions, challenges you face in youth ministry, and your next steps for the next generation.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <label style={{ color: "#9898B3", fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Conviction</label>
                  <textarea value={jConviction} onChange={e => setJConviction(e.target.value)} placeholder="What do you believe about young people and ministry?" rows={3} style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 12px", color: "#F2F2F8", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: "#9898B3", fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Challenge</label>
                  <textarea value={jChallenge} onChange={e => setJChallenge(e.target.value)} placeholder="What challenge are you navigating in youth ministry right now?" rows={3} style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 12px", color: "#F2F2F8", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: "#9898B3", fontSize: 12, fontWeight: 600, display: "block", marginBottom: 4 }}>Next Step</label>
                  <textarea value={jStep} onChange={e => setJStep(e.target.value)} placeholder="One concrete thing you'll do for the young people in your care..." rows={2} style={{ width: "100%", background: "#07070F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 12px", color: "#F2F2F8", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={saveYouthEntry} style={{ background: "#3a7d56", color: "#000", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {youthJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {youthJournal.map(entry => (
                  <div key={entry.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: "#9898B3", fontSize: 12 }}>{entry.date}</span>
                      <button type="button" onClick={() => deleteYouthEntry(entry.id)} style={{ background: "none", border: "none", color: "#9898B3", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {entry.conviction && <div style={{ marginBottom: 8 }}><span style={{ color: "#3a7d56", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Conviction</span><p style={{ color: "#F2F2F8", fontSize: 14, margin: "4px 0 0" }}>{entry.conviction}</p></div>}
                    {entry.challenge && <div style={{ marginBottom: 8 }}><span style={{ color: "#6B4FBB", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Challenge</span><p style={{ color: "#F2F2F8", fontSize: 14, margin: "4px 0 0" }}>{entry.challenge}</p></div>}
                    {entry.step && <div><span style={{ color: "#9898B3", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Next Step</span><p style={{ color: "#F2F2F8", fontSize: 14, margin: "4px 0 0" }}>{entry.step}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on youth ministry, the next generation, and Christian formation for young believers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "HGHqu9-DtXk", title: "The Centrality of the Home in Discipling the Next Generation", channel: "Voddie Baucham Ministries", description: "Voddie Baucham's foundational sermon on why the home — not the youth group — is the primary context for evangelism and discipleship of the next generation." },
                  { videoId: "E65KV3M8RZE", title: "Voddie Baucham on Youth Ministry", channel: "Voddie Baucham Ministries", description: "A comprehensive and direct assessment of modern youth ministry — its history, its structural problems, and what a biblically grounded alternative looks like." },
                  { videoId: "f7RJATbobik", title: "Raising the Next Generation in Turbulent Times", channel: "Voddie Baucham Ministries", description: "Practical and theological guidance for parents and church leaders navigating the cultural pressures facing the next generation of Christian young people." },
                  { videoId: "zUKzVFQn4Tc", title: "Can Youth Ministry Be Fixed?", channel: "Voddie Baucham Ministries", description: "A direct examination of whether conventional youth ministry can be reformed — and what a church that genuinely forms young disciples looks like." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: "#3a7d56", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: "#6B4FBB", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: "#9898B3", fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Challenge Detail Modal */}
      {selectedChallenge && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 24,
          }}
          onClick={() => setSelectedChallenge(null)}
        >
          <div
            style={{
              background: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: 20,
              padding: 32,
              maxWidth: 560,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{selectedChallenge.icon}</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 4 }}>
                {selectedChallenge.title}
              </h2>
              <div style={{ fontSize: 13, color: difficultyColor[selectedChallenge.difficulty] }}>
                {selectedChallenge.difficulty} · {selectedChallenge.duration}
              </div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 20 }}>
              {selectedChallenge.description}
            </p>

            <div
              style={{
                background: "#07070F",
                borderRadius: 10,
                padding: 16,
                marginBottom: 24,
                borderLeft: "3px solid #6B4FBB",
              }}
            >
              <div style={{ fontSize: 13, color: "#F2F2F8", fontStyle: "italic", marginBottom: 4 }}>
                "{selectedChallenge.verse}"
              </div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>— {selectedChallenge.verseRef}</div>
            </div>

            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#F2F2F8", marginBottom: 12 }}>
              Challenge Steps
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {selectedChallenge.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#6B4FBB20",
                      border: "1px solid #6B4FBB",
                      color: "#6B4FBB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, paddingTop: 2 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="button"
                onClick={() => handleJoin(selectedChallenge.id)}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: joinedChallenges.has(selectedChallenge.id) ? "#6B4FBB" : "#3a7d56",
                  color: joinedChallenges.has(selectedChallenge.id) ? "#fff" : "#07070F",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {joinedChallenges.has(selectedChallenge.id) ? "✓ Joined!" : "Accept Challenge"}
              </button>
              <button type="button"
                onClick={() => setSelectedChallenge(null)}
                style={{
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "1px solid #1E1E32",
                  background: "transparent",
                  color: "#9898B3",
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 24,
          }}
          onClick={() => setSelectedResource(null)}
        >
          <div
            style={{
              background: "#12121F",
              border: "1px solid #1E1E32",
              borderRadius: 20,
              padding: 32,
              maxWidth: 520,
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>{selectedResource.thumbnail}</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#F2F2F8", marginBottom: 6, lineHeight: 1.3 }}>
                {selectedResource.title}
              </h2>
              <div style={{ fontSize: 13, color: "#9898B3" }}>
                By {selectedResource.author} · {selectedResource.duration}
              </div>
              <div style={{ fontSize: 12, color: "#9898B3", marginTop: 4 }}>
                Recommended for ages {selectedResource.ageGroup}
              </div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.7, marginBottom: 20 }}>
              {selectedResource.description}
            </p>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
              {selectedResource.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    background: "#1E1E32",
                    color: "#9898B3",
                    fontSize: 12,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="button"
                onClick={() => { handleLike(selectedResource.id); }}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: likedResources.has(selectedResource.id) ? "#3a7d5620" : "#1E1E32",
                  color: likedResources.has(selectedResource.id) ? "#3a7d56" : "#9898B3",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                ♥ {likedResources.has(selectedResource.id) ? "Liked!" : "Like"}
              </button>
              <button type="button"
                onClick={() => { handleSave(selectedResource.id); }}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "none",
                  background: savedResources.has(selectedResource.id) ? "#6B4FBB20" : "#1E1E32",
                  color: savedResources.has(selectedResource.id) ? "#6B4FBB" : "#9898B3",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {savedResources.has(selectedResource.id) ? "★ Saved" : "☆ Save"}
              </button>
              <button type="button"
                onClick={() => setSelectedResource(null)}
                style={{
                  padding: "12px 20px",
                  borderRadius: 10,
                  border: "1px solid #1E1E32",
                  background: "transparent",
                  color: "#9898B3",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
