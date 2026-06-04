"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import {
  Zap,
  TrendingUp,
  Bookmark,
  Star,
  ChevronRight,
  DollarSign,
  Heart,
  Briefcase,
  Moon,
  Baby,
  Smartphone,
  Clock,
  Send,
  Trophy,
} from "lucide-react";
import { usePersistedState } from "@/hooks/usePersistedState";

const LH_THEOLOGY = [
  {
    id: 1,
    title: "Stewardship of Time",
    icon: "⏳",
    scripture: "Ephesians 5:16",
    description: "Paul commands believers to 'make the most of every opportunity, because the days are evil.' Time is not a neutral resource — it is a trust from God. Every hour belongs to the one who made it. Biblical time management is not about efficiency for its own sake; it is about faithfulness. The question is not 'how productive am I?' but 'am I spending what was given to me on what actually matters?'",
  },
  {
    id: 2,
    title: "The Sabbath Principle",
    icon: "🌿",
    scripture: "Genesis 2:2-3",
    description: "Rest is not a reward for productivity — it is built into the architecture of creation. God rested on the seventh day not because he was tired, but because he was modeling a rhythm for his image-bearers. The Sabbath is a weekly act of trust: the world does not depend on us. Sabbath pushes back against the idolatry of hustle and declares that our worth is not in our output.",
  },
  {
    id: 3,
    title: "The Body as Temple",
    icon: "🏛️",
    scripture: "1 Corinthians 6:19-20",
    description: "You were bought at a price — therefore honor God with your body. Physical habits are spiritual acts. How we sleep, eat, exercise, and rest either honors or dishonors the dwelling place of the Holy Spirit. Christian discipleship has always included bodily discipline. The ancient practice of fasting is just one example: what we do with our bodies shapes what we become in our souls.",
  },
  {
    id: 4,
    title: "Working as Worship",
    icon: "⚒️",
    scripture: "Colossians 3:23",
    description: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. The doctrine of vocation teaches that ordinary work — coding, cooking, cleaning, caregiving — can be offered to God as an act of worship. There is no sacred/secular divide. Excellence in daily work is a form of love for God and neighbor. Your job is a mission field.",
  },
  {
    id: 5,
    title: "Simplicity as Spiritual Discipline",
    icon: "🕊️",
    scripture: "Matthew 6:33",
    description: "Seek first the kingdom of God and his righteousness, and all these things will be added to you. The spiritual discipline of simplicity cuts through the noise of consumer culture and asks: what do I actually need? Simplicity is not poverty or asceticism for its own sake — it is the freedom to hold things loosely so that God and people can hold the center. It produces generosity, clarity, and peace.",
  },
];

const LH_RHYTHMS = [
  {
    id: 1,
    rhythm: "Daily",
    icon: "🌅",
    frequency: "Every day",
    description: "The bookends of your day set the tone for everything in between. A morning routine anchors you before the world demands your attention. An evening review helps you release the day and rest in grace.",
    sample_practice: "Morning: 5 minutes of Scripture + 5 minutes of prayer + 5 minutes of movement before picking up your phone. Evening: Write down one thing God did today and one thing you want to surrender before sleep.",
  },
  {
    id: 2,
    rhythm: "Weekly",
    icon: "📅",
    frequency: "Once a week",
    description: "The weekly Sabbath is the most countercultural spiritual discipline available to modern Christians. One day of genuine rest — from work, from screens, from hustle — resets your soul and reminds you who is actually in charge.",
    sample_practice: "Choose a 24-hour window for Sabbath. No work email, no side projects. Cook a real meal, take a long walk, gather with your community, read for pleasure, sleep in. Let it be genuinely restful.",
  },
  {
    id: 3,
    rhythm: "Monthly",
    icon: "🗓️",
    frequency: "Once a month",
    description: "Monthly rhythms create space for reflection that the weekly pace cannot provide. A fasting day sharpens your dependence on God. A giving review ensures your finances align with your values over time.",
    sample_practice: "First Monday: fast from breakfast to dinner and spend the extra time in prayer. Last Sunday: review your giving, your closest relationships, and your primary goals for the month ahead.",
  },
  {
    id: 4,
    rhythm: "Quarterly",
    icon: "🧭",
    frequency: "4 times a year",
    description: "Every 90 days, pull back far enough to ask the bigger questions. A personal retreat — even just a half-day at a local park or library — provides perspective that daily and weekly rhythms cannot.",
    sample_practice: "Take a half-day alone. Bring a journal, your Bible, and no agenda. Review the past quarter: where did you grow? Where did you drift? Set 1-3 clear intentions for the next 90 days.",
  },
  {
    id: 5,
    rhythm: "Annual",
    icon: "🌟",
    frequency: "Once a year",
    description: "An annual rhythm creates a container for vision, gratitude, and course-correction. Spiritual direction — meeting with a trained guide — offers accountability and wisdom that peer relationships cannot fully provide.",
    sample_practice: "On your birthday or at the new year: spend a morning in reflection on the past year. Meet with a pastor or spiritual director. Write a one-page vision for the year ahead, rooted in prayer.",
  },
  {
    id: 6,
    rhythm: "Life Season",
    icon: "🌱",
    frequency: "Major transitions",
    description: "Different life seasons — singleness, marriage, parenting, empty nest, grief, career change — require different rhythms. What worked at 22 may not work at 42. Wisdom adapts the structures without abandoning the substance.",
    sample_practice: "At each major life transition, revisit your spiritual practices from scratch. Ask: what do I need right now? What am I carrying that no longer fits? Who can help me navigate this season well?",
  },
];

const VOICES_LH = [
  {
    id: 1,
    name: "Brother Lawrence",
    era: "1614–1691",
    context: "France — Carmelite monastery",
    bio: "A lay brother who spent decades washing dishes in a monastery kitchen and discovered that every mundane task could be an act of communion with God. His conversations and letters were compiled into 'The Practice of the Presence of God' — one of the most widely read Christian devotional books of all time. He found no difference between formal prayer time and dishwashing: both were fellowship with the living God.",
    quote: "We ought not to be weary of doing little things for the love of God, who regards not the greatness of the work, but the love with which it is performed.",
    contribution: "Showed that the sacred/secular divide is a lie — that any task, done in awareness of God, becomes an act of worship.",
  },
  {
    id: 2,
    name: "Thomas à Kempis",
    era: "1380–1471",
    context: "Netherlands — Augustinian monastery",
    bio: "Author of 'The Imitation of Christ,' one of the most read books in Christian history after the Bible. Thomas wrote for ordinary believers who wanted to live deeply rather than merely know theology. His central conviction was that self-knowledge, humility, and love of God mattered infinitely more than academic knowledge. His challenge to simplicity and interiority is as countercultural today as it was in the 15th century.",
    quote: "What does it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?",
    contribution: "Articulated a simple, interior Christianity focused on transformation rather than information — the foundation of Christian life hacking.",
  },
  {
    id: 3,
    name: "Charles Hummel",
    era: "1923–1997",
    context: "USA — InterVarsity Christian Fellowship",
    bio: "Hummel wrote a small booklet in 1967 called 'The Tyranny of the Urgent' that has never gone out of print. His central insight: the urgent crowds out the important. We spend our days responding to what feels pressing and neglect what is truly significant. The antidote is Jesus' own pattern — unhurried time with the Father that produced clear priorities and freedom from the tyranny of others' agendas.",
    quote: "The urgent problem with our lives is that the urgent crowds out the important.",
    contribution: "Named the core problem of modern productivity — urgency addiction — and rooted the solution in Jesus' rhythm of prayer and purposeful work.",
  },
  {
    id: 4,
    name: "Tim Challies",
    era: "1976–present",
    context: "Canada — pastor and blogger",
    bio: "Tim Challies is a Reformed pastor and the author of 'Do More Better: A Practical Guide to Productivity.' His approach integrates Christian theology with practical systems — to-do lists, roles and responsibilities, and digital tools — all in service of love for God and neighbor. He argues that productivity is fundamentally a stewardship issue, not a performance issue.",
    quote: "Productivity is effectively stewarding your gifts, talents, time, energy, and enthusiasm for the good of others and the glory of God.",
    contribution: "Brought theological rigor to everyday productivity, framing it as a means of love rather than self-advancement.",
  },
  {
    id: 5,
    name: "John Mark Comer",
    era: "1980–present",
    context: "USA / Portland, OR — pastor and author",
    bio: "Founder of Practicing the Way and author of 'The Ruthless Elimination of Hurry,' Comer has become one of the most influential voices on Christian formation and spiritual rhythm for his generation. His central argument: hurry is incompatible with love, and the pace of modern life is the greatest threat to spiritual formation in the West. The answer is not more productivity tips — it is apprenticeship to Jesus.",
    quote: "Hurry is not of the devil; hurry is the devil.",
    contribution: "Named hurry as the enemy of spiritual formation and issued a generation-defining call to slow down, simplify, and take the yoke of Jesus seriously.",
  },
];

const trending = [
  { title: "The 10-10-80 Money Method", saves: "4.2k", category: "Money", color: "#3a7d56" },
  { title: "Phone-Free Sabbath Challenge", saves: "3.1k", category: "Digital Life", color: "#6B4FBB" },
  { title: "The 5AM Prayer Walk Habit", saves: "2.8k", category: "Health", color: "#4FBBAA" },
  { title: "Biblical Conflict Resolution Framework", saves: "2.1k", category: "Relationships", color: "#BB4F7A" },
  { title: "Meal Prep With a Gratitude Ritual", saves: "1.9k", category: "Productivity", color: "#4F8FBB" },
];

const categories = [
  { label: "All", icon: Zap },
  { label: "Money", icon: DollarSign },
  { label: "Relationships", icon: Heart },
  { label: "Productivity", icon: Briefcase },
  { label: "Health", icon: Star },
  { label: "Parenting", icon: Baby },
  { label: "Sleep", icon: Moon },
  { label: "Digital Life", icon: Smartphone },
];

const hacks = [
  {
    title: "The Screen Time Fast",
    verse: "Psalm 46:10 — 'Be still and know that I am God.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Digital Life",
    catColor: "#6B4FBB",
    saves: 3100,
    description: "Delete your most addictive app for 7 days. Replace the scroll time with 10 minutes of silence or Scripture.",
  },
  {
    title: "The Sabbath Rest Protocol",
    verse: "Exodus 20:8 — 'Remember the Sabbath day, to keep it holy.'",
    difficulty: "Life-changing",
    diffColor: "#3a7d56",
    impact: 5,
    category: "Productivity",
    catColor: "#4F8FBB",
    saves: 5820,
    description: "One full day off — no work, no email, no hustle. Schedule it like a meeting that cannot be moved.",
  },
  {
    title: "The Gratitude Journal Method",
    verse: "1 Thessalonians 5:18 — 'In everything give thanks.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 5,
    category: "Health",
    catColor: "#4FBBAA",
    saves: 4410,
    description: "Three specific things you're grateful for every morning, one prayer of thanks every night. 21-day streak changes your brain.",
  },
  {
    title: "Biblical Conflict Resolution",
    verse: "Matthew 18:15 — 'Go and tell him his fault, between you and him alone.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Relationships",
    catColor: "#BB4F7A",
    saves: 2100,
    description: "Follow the Matthew 18 framework: private conversation first, then bring a witness, then community. Works for marriages, friendships, and workplaces.",
  },
  {
    title: "The Debt Snowball + Tithe",
    verse: "Proverbs 22:7 — 'The borrower is slave to the lender.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 4,
    category: "Money",
    catColor: "#3a7d56",
    saves: 1870,
    description: "Pay minimum on all debts, attack the smallest one aggressively. Keep tithing while doing it — watch the supernatural provision.",
  },
  {
    title: "The Prayer Walk",
    verse: "Psalm 119:105 — 'Your word is a lamp to my feet.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Health",
    catColor: "#4FBBAA",
    saves: 2800,
    description: "20-minute walk every morning with no phone. Talk to God out loud like a conversation. Exercise and intercession, one habit.",
  },
  {
    title: "The Digital Detox Weekend",
    verse: "Romans 12:2 — 'Do not conform to the pattern of this world.'",
    difficulty: "Life-changing",
    diffColor: "#3a7d56",
    impact: 5,
    category: "Digital Life",
    catColor: "#6B4FBB",
    saves: 1540,
    description: "Friday 6PM to Sunday 6PM: no social media, limited phone use, more real-world connection. Do it quarterly.",
  },
  {
    title: "Meal Prep With Gratitude",
    verse: "1 Corinthians 10:31 — 'Whatever you eat or drink, do it all for the glory of God.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 3,
    category: "Productivity",
    catColor: "#4F8FBB",
    saves: 1900,
    description: "Sunday meal prep = 45 minutes of prayer podcasts + preparing 5 days of healthy food. Sanctify your kitchen time.",
  },
  {
    title: "Family Devotional in 10 Minutes",
    verse: "Deuteronomy 6:7 — 'Talk about them when you sit at home.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 5,
    category: "Parenting",
    catColor: "#BB7A4F",
    saves: 3340,
    description: "One verse, one question, one prayer around the dinner table. 10 minutes max. Kids remember these for decades.",
  },
  {
    title: "The Sleep Sabbath",
    verse: "Psalm 127:2 — 'He grants sleep to those he loves.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Sleep",
    catColor: "#6B4FBB",
    saves: 2760,
    description: "One night per week with zero screens after 8PM. Replace scrolling with Scripture reading, journaling, or light stretching. Quality sleep is an act of trust in God.",
  },
  {
    title: "The 10-Minute Wind-Down Prayer",
    verse: "Psalm 4:8 — 'In peace I will lie down and sleep.'",
    difficulty: "Easy",
    diffColor: "#4FBBAA",
    impact: 4,
    category: "Sleep",
    catColor: "#6B4FBB",
    saves: 1890,
    description: "Before bed: write down three things that happened today, one thing you're anxious about (give it to God), and one thing you're grateful for. Brain-dump to clear the mental queue.",
  },
  {
    title: "Biblical Parenting Cheat Sheet",
    verse: "Proverbs 22:6 — 'Train up a child in the way he should go.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 5,
    category: "Parenting",
    catColor: "#BB7A4F",
    saves: 4120,
    description: "Three frameworks in one: (1) Connect before you correct. (2) Discipline addresses the heart, not just the behavior. (3) Your child needs to see your faith, not just hear about it.",
  },
  {
    title: "The 10-10-80 Giving Method",
    verse: "Malachi 3:10 — 'Bring the whole tithe into the storehouse.'",
    difficulty: "Life-changing",
    diffColor: "#3a7d56",
    impact: 5,
    category: "Money",
    catColor: "#3a7d56",
    saves: 4790,
    description: "Give 10% to God first. Save 10% next. Live on 80%. This single discipline rewires your relationship with money more than any budget app. Try it for 90 days.",
  },
  {
    title: "The Relationship Health Check",
    verse: "Proverbs 27:17 — 'As iron sharpens iron, so one person sharpens another.'",
    difficulty: "Medium",
    diffColor: "#BB7A4F",
    impact: 4,
    category: "Relationships",
    catColor: "#BB4F7A",
    saves: 1650,
    description: "Monthly 5-minute review of your 5 closest relationships: Are you listening more than talking? Are you serving or being served? Who needs a phone call this week?",
  },
];

const hackOfWeek = {
  title: "The 5-5-5 Morning Formula",
  verse: "Lamentations 3:22–23",
  verseText: "'His mercies are new every morning; great is your faithfulness.'",
  description:
    "The first 15 minutes of your morning sets the tone for your entire day. Split them into three 5-minute blocks: (1) Bible — read one passage, slowly. (2) Prayer — one thing you're worried about, one thing you're grateful for, one request. (3) Movement — stretch, walk around the block, or do 20 push-ups. No phone until all three are done.",
  steps: [
    { num: 1, title: "5 Min Bible", detail: "One passage, read slowly. Underline what stands out. No commentary, just you and the text." },
    { num: 2, title: "5 Min Prayer", detail: "Three things: one worry to surrender, one gratitude to name, one ask to make bold." },
    { num: 3, title: "5 Min Movement", detail: "Your body is a temple. Wake it up. Walk, stretch, breathe. Phone stays face-down." },
  ],
  testimonials: [
    { name: "Priya K.", quote: "Changed my whole day. I'm less reactive, more present." },
    { name: "DeShawn M.", quote: "I've done this for 90 days straight. My prayer life is the best it's ever been." },
  ],
  saves: 7420,
  category: "Productivity",
};

const mostSaved = [
  { rank: 1, title: "The Sabbath Rest Protocol", saves: "5,820", category: "Productivity" },
  { rank: 2, title: "The 10-10-80 Money Method", saves: "4,790", category: "Money" },
  { rank: 3, title: "The Gratitude Journal Method", saves: "4,410", category: "Health" },
  { rank: 4, title: "Family Devotional in 10 Minutes", saves: "3,340", category: "Parenting" },
  { rank: 5, title: "The Screen Time Fast", saves: "3,100", category: "Digital Life" },
];

export default function LifeHacksPage() {
  const [mainTab, setMainTab] = useState<"hacks" | "theology" | "rhythms" | "voices" | "videos">("hacks");
  const [selectedVoiceLH, setSelectedVoiceLH] = useState(VOICES_LH[0]);
  const [activeCategory, setActiveCategory] = usePersistedState("vine_life-hacks_active_category", "All");
  const [submitted, setSubmitted] = useState(false);
  const [hackTitle, setHackTitle] = useState("");
  const [savedHacks, setSavedHacks] = useState<Set<string>>(() => {
    try {
      const s = localStorage.getItem("vine_lifehacks_saved");
      return s ? new Set(JSON.parse(s) as string[]) : new Set();
    } catch { return new Set(); }
  });
  const [featuredSaved, setFeaturedSaved] = useState(() => {
    try { return localStorage.getItem("vine_lifehacks_featured") === "1"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("vine_lifehacks_saved", JSON.stringify([...savedHacks])); } catch {}
  }, [savedHacks]);

  useEffect(() => {
    try { if (featuredSaved) localStorage.setItem("vine_lifehacks_featured", "1"); else localStorage.removeItem("vine_lifehacks_featured"); } catch {}
  }, [featuredSaved]);

  const toggleSaveHack = (title: string) => {
    setSavedHacks((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const filteredHacks = activeCategory === "All"
    ? hacks
    : hacks.filter((h) => h.category === activeCategory);

  const handleSubmit = () => {
    if (!hackTitle.trim()) return;
    setSubmitted(true);
    setHackTitle("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ background: "#07070F", minHeight: "100vh" }}>
       <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(58,125,86,0.14) 0%, rgba(107,79,187,0.06) 60%, transparent 100%)",
            padding: "72px 0 56px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(58,125,86,0.1)",
                border: "1px solid rgba(58,125,86,0.25)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <Zap size={14} style={{ color: "#3a7d56" }} />
              <span style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
                BIBLICAL LIFE HACKS
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "20px",
                background: "linear-gradient(135deg, #3a7d56 0%, #FFFFFF 50%, #3a7d56 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Live Better. Live Biblical.
            </h1>
            <p style={{ color: "#8A8AA8", fontSize: "18px", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              Scripture has been giving life advice for 3,500 years. We just made it easier to apply. Practical faith for your money, relationships, mind, and mornings.
            </p>
          </div>
        </section>

        {/* HOT RIGHT NOW — HORIZONTAL SCROLL */}
        <div style={{ padding: "32px 0 0", borderBottom: "1px solid #1E1E32" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ color: "#3a7d56", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px" }}>
              🔥 HOT RIGHT NOW
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "0 24px 24px",
              overflowX: "auto",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {trending.map((item, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  cursor: "pointer",
                  minWidth: "220px",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <span
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                    borderRadius: "100px",
                    padding: "2px 8px",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "inline-block",
                    marginBottom: "8px",
                  }}
                >
                  {item.category}
                </span>
                <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "8px", lineHeight: 1.3 }}>
                  {item.title}
                </p>
                <p style={{ color: "#6A6A88", fontSize: "12px" }}>
                  <Bookmark size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  {item.saves} saves
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN TAB BAR */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", borderBottom: "1px solid #1E1E32", display: "flex", gap: 0 }}>
          {(["hacks", "theology", "rhythms", "voices", "videos"] as const).map(tab => (
            <button key={tab} onClick={() => setMainTab(tab)}
              style={{ background: "none", border: "none", borderBottom: mainTab === tab ? "2px solid #3a7d56" : "2px solid transparent", color: mainTab === tab ? "#F2F2F8" : "#9898B3", fontWeight: mainTab === tab ? 700 : 500, fontSize: 14, padding: "14px 18px", cursor: "pointer" }}>
              {tab === "hacks" ? "Life Hacks" : tab === "theology" ? "📖 Theology" : tab === "rhythms" ? "⏰ Rhythms" : tab === "voices" ? "🎓 Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* HACKS TAB */}
        {mainTab === "hacks" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px" }}>
            {/* CATEGORY NAV */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                padding: "28px 0 32px",
                overflowX: "auto",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat.label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      borderRadius: "100px",
                      border: isActive ? "1px solid rgba(58,125,86,0.5)" : "1px solid #1E1E32",
                      background: isActive ? "rgba(58,125,86,0.12)" : "transparent",
                      color: isActive ? "#3a7d56" : "#8A8AA8",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "all 0.15s",
                    }}
                  >
                    <cat.icon size={13} />
                    {cat.label}
                    {isActive && activeCategory !== "All" && (
                      <span style={{ fontSize: "10px", background: "rgba(58,125,86,0.2)", borderRadius: "10px", padding: "1px 6px" }}>
                        {filteredHacks.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* FEATURED HACK */}
            <section style={{ marginBottom: "56px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(58,125,86,0.12) 0%, rgba(107,79,187,0.08) 100%)",
                  border: "1px solid rgba(58,125,86,0.25)",
                  borderRadius: "24px",
                  padding: "40px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "rgba(58,125,86,0.15)",
                      border: "1px solid rgba(58,125,86,0.35)",
                      color: "#3a7d56",
                      borderRadius: "100px",
                      padding: "4px 12px",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    ⭐ FEATURED HACK
                  </span>
                  <span style={{ color: "#4F8FBB", fontSize: "12px", fontWeight: 600 }}>Money</span>
                  <button
                    onClick={() => setFeaturedSaved((v) => !v)}
                    aria-label={featuredSaved ? "Remove from saved" : "Save hack"}
                    style={{
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: featuredSaved ? "rgba(58,125,86,0.15)" : "transparent",
                      border: `1px solid ${featuredSaved ? "rgba(58,125,86,0.4)" : "#1E1E32"}`,
                      borderRadius: "100px",
                      padding: "5px 14px",
                      color: featuredSaved ? "#3a7d56" : "#8A8AA8",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <Bookmark size={13} fill={featuredSaved ? "#3a7d56" : "none"} />
                    {featuredSaved ? "Saved" : "Save"}
                  </button>
                </div>
                <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#F2F2F8", marginBottom: "12px" }}>
                  The 10-10-80 Money Method
                </h2>
                <p style={{ color: "#6A6A88", fontSize: "14px", fontStyle: "italic", marginBottom: "20px" }}>
                  &ldquo;Bring the whole tithe into the storehouse.&rdquo; — Malachi 3:10
                </p>
                <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>
                  Give 10% to God first. Save 10% for your future self. Live fully on 80%. This simple allocation system, rooted in the biblical principle of the tithe, has helped thousands of Christians break the cycle of financial anxiety and experience supernatural provision.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
                  {[
                    { pct: "10%", label: "Give", detail: "Tithe first — it's an act of worship, not an obligation." },
                    { pct: "10%", label: "Save", detail: "Emergency fund, then retirement, then sinking funds." },
                    { pct: "80%", label: "Live", detail: "Housing, food, bills, joy. Live freely within this number." },
                  ].map((step, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: "16px",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "32px", fontWeight: 900, color: "#3a7d56", marginBottom: "4px" }}>{step.pct}</p>
                      <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>{step.label}</p>
                      <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.6 }}>{step.detail}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {[
                    { name: "Tanisha R.", quote: "I paid off $18k in debt in 18 months using this method. God kept His promise." },
                    { name: "Kyle M.", quote: "Skeptical at first. 6 months in, I had my first savings account ever." },
                  ].map((t, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0F0F1C",
                        border: "1px solid #1E1E32",
                        borderRadius: "12px",
                        padding: "16px",
                      }}
                    >
                      <p style={{ color: "#C0C0D8", fontSize: "13px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "8px" }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 700 }}>— {t.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* HACK GRID */}
            <section style={{ marginBottom: "56px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "24px" }}>
                All Hacks
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {filteredHacks.length === 0 ? (
                  <div style={{ gridColumn: "1 / -1", padding: "40px", textAlign: "center", color: "#6A6A88" }}>
                    <p style={{ fontSize: "32px", marginBottom: "12px" }}>🔍</p>
                    <p style={{ fontWeight: 700, color: "#F2F2F8", marginBottom: "4px" }}>No hacks in this category yet</p>
                    <p style={{ fontSize: "14px" }}>Be the first to submit one!</p>
                  </div>
                ) : filteredHacks.map((hack, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#12121F",
                      border: "1px solid #1E1E32",
                      borderRadius: "20px",
                      padding: "24px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px", gap: "8px" }}>
                      <span
                        style={{
                          background: `${hack.catColor}18`,
                          color: hack.catColor,
                          borderRadius: "100px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {hack.category}
                      </span>
                      <span
                        style={{
                          background: `${hack.diffColor}18`,
                          color: hack.diffColor,
                          borderRadius: "100px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {hack.difficulty}
                      </span>
                    </div>
                    <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "16px", marginBottom: "8px", lineHeight: 1.3 }}>
                      {hack.title}
                    </h3>
                    <p style={{ color: "#6A6A88", fontSize: "12px", fontStyle: "italic", marginBottom: "10px", lineHeight: 1.5 }}>
                      {hack.verse}
                    </p>
                    <p style={{ color: "#8A8AA8", fontSize: "13px", lineHeight: 1.65, marginBottom: "16px", flex: 1 }}>
                      {hack.description}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star
                            key={si}
                            size={13}
                            fill={si < hack.impact ? "#3a7d56" : "transparent"}
                            style={{ color: si < hack.impact ? "#3a7d56" : "#1E1E32" }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => toggleSaveHack(hack.title)}
                        style={{
                          display: "flex", alignItems: "center", gap: "5px",
                          background: savedHacks.has(hack.title) ? "rgba(58,125,86,0.1)" : "transparent",
                          border: savedHacks.has(hack.title) ? "1px solid rgba(58,125,86,0.3)" : "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "8px", padding: "4px 10px", cursor: "pointer",
                          color: savedHacks.has(hack.title) ? "#3a7d56" : "#6A6A88", fontSize: "12px", fontWeight: 600,
                          transition: "all 0.15s",
                        }}
                      >
                        <Bookmark size={11} fill={savedHacks.has(hack.title) ? "#3a7d56" : "none"} />
                        {savedHacks.has(hack.title) ? "Saved" : `${hack.saves.toLocaleString()}`}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* HACK OF THE WEEK */}
            <section style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <Trophy size={22} style={{ color: "#3a7d56" }} />
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>Hack of the Week</h2>
              </div>
              <div
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "24px",
                  padding: "40px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                  <span
                    style={{
                      background: "rgba(107,79,187,0.15)",
                      border: "1px solid rgba(107,79,187,0.3)",
                      color: "#8B6FDB",
                      borderRadius: "100px",
                      padding: "4px 12px",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    {hackOfWeek.category}
                  </span>
                  <span style={{ color: "#6A6A88", fontSize: "12px" }}>
                    <Bookmark size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    {hackOfWeek.saves.toLocaleString()} saves this week
                  </span>
                </div>
                <h3 style={{ fontSize: "26px", fontWeight: 900, color: "#F2F2F8", marginBottom: "8px" }}>
                  {hackOfWeek.title}
                </h3>
                <p style={{ color: "#6A6A88", fontStyle: "italic", fontSize: "14px", marginBottom: "20px" }}>
                  {hackOfWeek.verse} — {hackOfWeek.verseText}
                </p>
                <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>
                  {hackOfWeek.description}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginBottom: "28px" }}>
                  {hackOfWeek.steps.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0F0F1C",
                        border: "1px solid #1E1E32",
                        borderRadius: "14px",
                        padding: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(58,125,86,0.15)",
                          color: "#3a7d56",
                          fontSize: "14px",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "12px",
                        }}
                      >
                        {step.num}
                      </div>
                      <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{step.title}</p>
                      <p style={{ color: "#8A8AA8", fontSize: "12px", lineHeight: 1.6 }}>{step.detail}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {hackOfWeek.testimonials.map((t, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#0F0F1C",
                        borderRadius: "12px",
                        padding: "16px",
                        border: "1px solid #1E1E32",
                      }}
                    >
                      <p style={{ color: "#C0C0D8", fontSize: "13px", fontStyle: "italic", lineHeight: 1.6, marginBottom: "8px" }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 700 }}>— {t.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SUBMIT YOUR HACK */}
            <section style={{ marginBottom: "56px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(107,79,187,0.14) 0%, rgba(58,125,86,0.07) 100%)",
                  border: "1px solid rgba(58,125,86,0.2)",
                  borderRadius: "24px",
                  padding: "40px",
                }}
              >
                <div style={{ maxWidth: "600px" }}>
                  <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8", marginBottom: "8px" }}>
                    Submit Your Hack
                  </h2>
                  <p style={{ color: "#8A8AA8", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
                    Found a biblical principle that changed your daily life? Share it with the Vine community. The best hacks get featured.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <input
                      value={hackTitle}
                      onChange={(e) => setHackTitle(e.target.value)}
                      placeholder="Hack title (e.g. 'The 2-Minute Evening Prayer Reset')"
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        color: "#F2F2F8",
                        fontSize: "14px",
                        outline: "none",
                        width: "100%",
                      }}
                    />
                    <textarea
                      readOnly
                      placeholder="Describe the hack in 2–3 sentences. What do you do? How does it help?"
                      rows={3}
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        color: "#F2F2F8",
                        fontSize: "14px",
                        outline: "none",
                        width: "100%",
                        resize: "vertical",
                      }}
                    />
                    <input
                      readOnly
                      placeholder="Scripture basis (e.g. 'Proverbs 16:3')"
                      style={{
                        background: "#12121F",
                        border: "1px solid #1E1E32",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        color: "#F2F2F8",
                        fontSize: "14px",
                        outline: "none",
                        width: "100%",
                      }}
                    />
                    {submitted ? (
                      <div style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: "12px", padding: "14px 28px", color: "#3a7d56", fontWeight: 700, fontSize: "15px", textAlign: "center" }}>
                        ✓ Hack submitted! We&apos;ll review it shortly.
                      </div>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          background: hackTitle.trim() ? "linear-gradient(135deg, #3a7d56, #B8922A)" : "#1E1E32",
                          color: hackTitle.trim() ? "#07070F" : "#4A4A68",
                          border: "none",
                          borderRadius: "12px",
                          padding: "14px 28px",
                          fontWeight: 800,
                          fontSize: "15px",
                          cursor: hackTitle.trim() ? "pointer" : "not-allowed",
                          alignSelf: "flex-start",
                          transition: "all 0.2s",
                        }}
                      >
                        <Send size={15} /> Submit Hack
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* MOST SAVED THIS MONTH */}
            <section>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                <TrendingUp size={22} style={{ color: "#3a7d56" }} />
                <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F2F2F8" }}>Most Saved This Month</h2>
              </div>
              <div
                style={{
                  background: "#12121F",
                  border: "1px solid #1E1E32",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                {mostSaved.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "18px 24px",
                      borderBottom: i < mostSaved.length - 1 ? "1px solid #1E1E32" : "none",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: i === 0 ? "rgba(58,125,86,0.2)" : "rgba(255,255,255,0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 800,
                        color: i === 0 ? "#3a7d56" : "#6A6A88",
                        flexShrink: 0,
                      }}
                    >
                      {item.rank}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "#F2F2F8", fontWeight: 700, fontSize: "15px", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {item.title}
                      </p>
                      <p style={{ color: "#6A6A88", fontSize: "12px" }}>{item.category}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                      <Bookmark size={14} style={{ color: "#3a7d56" }} />
                      <span style={{ color: "#3a7d56", fontSize: "14px", fontWeight: 700 }}>{item.saves}</span>
                    </div>
                    <ChevronRight size={16} style={{ color: "#6A6A88", flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* THEOLOGY TAB */}
        {mainTab === "theology" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#F2F2F8", marginBottom: "8px" }}>The Theology Behind the Hacks</h2>
              <p style={{ color: "#9898B3", fontSize: "15px" }}>Biblical foundations for why optimizing your life actually matters to God.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
              {LH_THEOLOGY.map((entry) => (
                <div key={entry.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "20px", padding: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: 28 }}>{entry.icon}</span>
                    <div>
                      <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "17px", marginBottom: "2px" }}>{entry.title}</h3>
                      <span style={{ color: "#3a7d56", fontSize: "12px", fontWeight: 700 }}>{entry.scripture}</span>
                    </div>
                  </div>
                  <p style={{ color: "#9898B3", fontSize: "13px", lineHeight: 1.75 }}>{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RHYTHMS TAB */}
        {mainTab === "rhythms" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#F2F2F8", marginBottom: "8px" }}>Rhythms for the Christian Life</h2>
              <p style={{ color: "#9898B3", fontSize: "15px" }}>God designed us for rhythm. These time-based practices structure a life of faithfulness.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
              {LH_RHYTHMS.map((item) => (
                <div key={item.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                      <h3 style={{ color: "#F2F2F8", fontWeight: 800, fontSize: "18px" }}>{item.rhythm}</h3>
                    </div>
                    <span style={{ background: "rgba(107,79,187,0.2)", color: "#9B7FDB", borderRadius: "100px", padding: "3px 12px", fontSize: "11px", fontWeight: 700 }}>
                      {item.frequency}
                    </span>
                  </div>
                  <p style={{ color: "#9898B3", fontSize: "13px", lineHeight: 1.75, marginBottom: "16px", flex: 1 }}>{item.description}</p>
                  <div style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.15)", borderRadius: "12px", padding: "14px" }}>
                    <p style={{ color: "#3a7d56", fontSize: "11px", fontWeight: 700, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Sample Practice</p>
                    <p style={{ color: "#C0C0D8", fontSize: "13px", lineHeight: 1.65 }}>{item.sample_practice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {mainTab === "voices" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#F2F2F8", marginBottom: "8px" }}>Voices Worth Hearing</h2>
              <p style={{ color: "#9898B3", fontSize: "15px" }}>Christians across the centuries who mastered the art of living intentionally with God.</p>
            </div>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              {/* Left panel: list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: 240, width: 240, flexShrink: 0 }}>
                {VOICES_LH.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVoiceLH(v)}
                    style={{
                      textAlign: "left",
                      background: selectedVoiceLH.id === v.id ? "rgba(107,79,187,0.18)" : "transparent",
                      border: `1px solid ${selectedVoiceLH.id === v.id ? "#6B4FBB" : "#1E1E32"}`,
                      borderRadius: "12px",
                      padding: "14px 16px",
                      cursor: "pointer",
                    }}
                  >
                    <p style={{ color: selectedVoiceLH.id === v.id ? "#F2F2F8" : "#9898B3", fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>{v.name}</p>
                    <p style={{ color: "#6A6A88", fontSize: "11px" }}>{v.era} · {v.context}</p>
                  </button>
                ))}
              </div>
              {/* Right panel: detail */}
              <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: "20px", padding: "36px", position: "sticky", top: 24 }}>
                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#F2F2F8", marginBottom: "4px" }}>{selectedVoiceLH.name}</h3>
                  <p style={{ color: "#3a7d56", fontSize: "13px", fontWeight: 700 }}>{selectedVoiceLH.era} · {selectedVoiceLH.context}</p>
                </div>
                <blockquote style={{ background: "rgba(107,79,187,0.14)", border: "1px solid rgba(107,79,187,0.25)", borderRadius: "14px", padding: "20px 22px", marginBottom: "24px" }}>
                  <p style={{ color: "#F2F2F8", fontSize: "15px", fontStyle: "italic", fontWeight: 600, lineHeight: 1.7 }}>
                    &ldquo;{selectedVoiceLH.quote}&rdquo;
                  </p>
                </blockquote>
                <p style={{ color: "#9898B3", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>{selectedVoiceLH.bio}</p>
                <div style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.18)", borderRadius: "12px", padding: "16px" }}>
                  <p style={{ color: "#3a7d56", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "6px" }}>Key Contribution</p>
                  <p style={{ color: "#C0C0D8", fontSize: "13px", lineHeight: 1.7 }}>{selectedVoiceLH.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {mainTab === "videos" && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: "#3a7d56", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "vd8f7EGjY1s", title: "Discipling Your Church into Spiritual Practices", channel: "John Mark Comer / Vineyard Insights", description: "Comer on how to form a congregation into people who actually practice the spiritual disciplines — not just know about them." },
                  { videoId: "LiEG629mpoE", title: "John Mark Comer's Call to Practice, Not Performance", channel: "John Mark Comer", description: "What it means to be a 'practicing Christian' — an exploration of how intentional spiritual disciplines form us into apprentices of Jesus." },
                  { videoId: "c9Clqp737uA", title: "Spiritual Formation and Emotional Health", channel: "John Mark Comer", description: "Comer on the connection between spiritual formation and the interior life — why hurry is the enemy of formation and how to build life-giving rhythms." },
                  { videoId: "w6-exryo5LQ", title: "Practicing the Way: Apprentice to Jesus", channel: "John Mark Comer / Practicing the Way", description: "The foundational episode of Comer's Practicing the Way series — what it means to be an apprentice of Jesus and take his yoke seriously." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: "#07070F", border: "1px solid #1E1E32", borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
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

      </main>

      <Footer />
    </div>
  );
}
