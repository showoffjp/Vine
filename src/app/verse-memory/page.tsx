"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

interface MemoryVerse {
  id: number; reference: string; text: string; category: string;
  mastered: boolean; reviewCount: number; addedDate: string; lastReviewed?: string;
}

const seedVerses: MemoryVerse[] = [
  { id: 1, reference: "Philippians 4:13", text: "I can do all this through him who gives me strength.", category: "Strength", mastered: false, reviewCount: 3, addedDate: "May 1, 2026" },
  { id: 2, reference: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", category: "Salvation", mastered: true, reviewCount: 12, addedDate: "Apr 10, 2026", lastReviewed: "May 25, 2026" },
  { id: 3, reference: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", category: "Trust", mastered: false, reviewCount: 6, addedDate: "Apr 22, 2026" },
  { id: 4, reference: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", category: "Trust", mastered: true, reviewCount: 15, addedDate: "Mar 15, 2026", lastReviewed: "May 24, 2026" },
  { id: 5, reference: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.", category: "Fear", mastered: false, reviewCount: 2, addedDate: "May 15, 2026" },
  { id: 6, reference: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing.", category: "Provision", mastered: true, reviewCount: 20, addedDate: "Jan 5, 2026", lastReviewed: "May 26, 2026" },
  { id: 7, reference: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", category: "Peace", mastered: false, reviewCount: 4, addedDate: "May 10, 2026" },
  { id: 8, reference: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", category: "Trust", mastered: false, reviewCount: 7, addedDate: "Apr 5, 2026" },
  { id: 9, reference: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is.", category: "Identity", mastered: false, reviewCount: 5, addedDate: "Apr 18, 2026" },
  { id: 10, reference: "Psalm 119:11", text: "I have hidden your word in my heart that I might not sin against you.", category: "Identity", mastered: true, reviewCount: 18, addedDate: "Feb 20, 2026", lastReviewed: "May 22, 2026" },
];

const suggestedVerses = [
  { reference: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking.", category: "Love" },
  { reference: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", category: "Identity" },
  { reference: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.", category: "Salvation" },
  { reference: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary.", category: "Strength" },
  { reference: "Psalm 46:10", text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.", category: "Peace" },
  { reference: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God.", category: "Love" },
];

const allCategories = ["All", "Strength", "Salvation", "Trust", "Fear", "Provision", "Peace", "Identity", "Love"];

const categoryColors: Record<string, string> = {
  "Strength": "#F59E0B", "Salvation": GREEN, "Trust": PURPLE, "Fear": "#EF4444",
  "Provision": "#10B981", "Peace": "#3B82F6", "Identity": "#EC4899", "Love": "#F43F5E"
};

const MEMORY_METHODS = [
  {
    id: "mm1",
    method: "Hand Method",
    icon: "⬛",
    description: "Associate each word or phrase of a verse with a specific finger position or hand gesture. The physical anchor creates a tactile memory pathway that reinforces the verbal one.",
    steps: [
      "Read the verse aloud three times, paying attention to its natural rhythm",
      "Assign each key word or phrase to a finger or hand position",
      "Speak the verse while physically moving through the hand positions",
      "Practice without looking at the text, using only the hand cues",
      "Gradually fade the hand cues as the verse becomes automatic",
    ],
    bestFor: "Kinesthetic learners who retain through physical movement and touch",
  },
  {
    id: "mm2",
    method: "Chunk Method",
    icon: "📦",
    description: "Break the verse into 3-4 meaningful semantic phrases. Memorize one chunk per day, then chain the chunks together. This prevents the overwhelming feeling of tackling a long verse at once.",
    steps: [
      "Read the verse and identify 3-4 natural phrase breaks based on meaning",
      "Write each chunk on a separate index card",
      "Memorize the first chunk alone until it is effortless",
      "Add the second chunk and practice the combined sequence",
      "Continue adding chunks one per day until the verse is complete",
    ],
    bestFor: "Longer verses; beginners; people who feel overwhelmed by long passages",
  },
  {
    id: "mm3",
    method: "Melody Method",
    icon: "🎵",
    description: "Set the verse to a simple tune — even a nursery rhyme melody or a tune you make up. Music activates different memory pathways than pure verbal rehearsal, dramatically increasing retention.",
    steps: [
      "Read the verse aloud and feel its natural rhythm and stress patterns",
      "Choose a simple existing tune or improvise one that fits the syllable count",
      "Sing the verse slowly several times until the melody is settled",
      "Sing it faster as it becomes familiar",
      "Test recall by humming the melody and letting the words follow",
    ],
    bestFor: "Musical learners; children; anyone who finds words naturally set to music sticky",
  },
  {
    id: "mm4",
    method: "Write It 10x",
    icon: "✏️",
    description: "Write the full verse by hand ten times in a row, from memory after the first few. Handwriting activates motor memory, which encodes information differently and more durably than typing.",
    steps: [
      "Read the verse carefully twice, noting any words or phrases you find difficult",
      "Write the verse from the text once, looking at each phrase as needed",
      "Cover the text and write it again from memory — consult only when stuck",
      "Continue writing from memory, resisting the urge to look",
      "On the final three attempts, write without looking at all",
    ],
    bestFor: "Visual and kinesthetic learners; short verses; people who find writing meditative",
  },
  {
    id: "mm5",
    method: "Context Method",
    icon: "📖",
    description: "Memorize the entire paragraph the verse comes from, not just the isolated verse. Understanding the context gives every word meaning, and meaning is the engine of memory. This also prevents proof-texting.",
    steps: [
      "Read the entire chapter the verse is from to understand the author's argument",
      "Identify the 3-5 verses surrounding your target verse",
      "Memorize the verses before your target verse first",
      "Add your target verse, then the verses after it",
      "Practice reciting the full passage, not just the isolated verse",
    ],
    bestFor: "Preventing proof-texting; understanding what a verse actually means; longer-term retention",
  },
];

const MEMORY_PLANS = [
  {
    id: "mp1",
    plan: "Topical",
    icon: "🗂️",
    description: "Memorize by theme — commit to one topic for 3 months and memorize 1 verse per week on that theme. By the end you have 12 verses forming a deep reservoir on a topic like anxiety, prayer, or identity.",
    example: "Month 1: Identity in Christ (12 verses). Month 2: Prayer (12 verses). Month 3: Suffering and hope (12 verses).",
  },
  {
    id: "mp2",
    plan: "Book",
    icon: "📚",
    description: "Memorize whole chapters or entire short books. Psalm 23, Romans 8, John 15, James 1 — memorizing complete units gives you the full argument, not just fragments. Start with a psalm, then graduate to a chapter.",
    example: "Week 1-4: Psalm 23 (6 verses). Week 5-8: John 15:1-17. Week 9-16: Romans 8:1-39.",
  },
  {
    id: "mp3",
    plan: "Daily Habit",
    icon: "📅",
    description: "One new verse every 3 days — the pace that research suggests maximizes review time relative to new learning. At this pace you will memorize 120 verses per year without burning out on new material.",
    example: "Day 1-3: Learn verse. Day 4-6: Learn next verse, review verse 1. Day 7-9: Learn next, review both. Continue indefinitely.",
  },
];

const VOICES_MEM = [
  {
    id: "trotman-d",
    name: "Dawson Trotman",
    era: "1906-1956",
    context: "Founder of The Navigators — the organization that made systematic Scripture memory a global movement",
    bio: "Dawson Trotman founded The Navigators in 1933 after his own life was transformed by memorizing Scripture as a young man. His conviction — that the Word of God memorized and meditated upon is the most powerful tool for Christian growth — became the DNA of an organization that has trained millions of believers worldwide in systematic Scripture memory. Trotman's famous statement, 'The greatest need of the Church today is men and women who know their Bibles,' was not a platitude but the conviction that drove every Navigator methodology. He died in 1956 saving a drowning woman — his selflessness a testimony to what the Word, internalized, produces.",
    quote: "The greatest need of the Church today is men and women who know their Bibles. Not people who have read it, but people who have it inside them.",
    contribution: "The Navigators' Topical Memory System, developed from Trotman's convictions, has introduced systematic Scripture memory to millions worldwide. The organization's influence on campus ministry, military ministry, and discipleship movements has made Trotman's vision for Word-saturated Christians one of the most practically impactful discipleship commitments of the 20th century.",
  },
  {
    id: "davis-a",
    name: "Andrew Davis",
    era: "Contemporary",
    context: "An Approach to Extended Memorization of Scripture (2014) — the practical guide to memorizing entire books of the Bible",
    bio: "Andrew Davis, senior pastor of First Baptist Church Durham, North Carolina, developed a systematic method for memorizing entire books of the Bible that he has practiced for decades. His An Approach to Extended Memorization of Scripture is a simple, practical booklet explaining a daily incremental method: add one verse per day while reviewing all previous verses. Using this method, Davis has memorized entire books including Romans, Ephesians, Hebrews, James, and many others. His method is distinguished by its emphasis on sustained review rather than initial memorization — the discovery that the challenge is not learning a verse but keeping it through months and years of practice.",
    quote: "The goal of Scripture memorization is not a performance — it is transformation. You are not memorizing to recite. You are memorizing because the Word of God living inside you changes you from the inside out.",
    contribution: "Davis's booklet has introduced thousands of Christians to extended Scripture memorization as a practical possibility. His method's simplicity — one verse per day, consistent review — has given ordinary believers confidence that memorizing significant portions of Scripture is achievable. Many Christians point to his approach as the catalyst for their own memorization practice.",
  },
  {
    id: "piper-j",
    name: "John Piper",
    era: "b. 1946",
    context: "Desiring God — Scripture memory as ammunition against anxiety and temptation",
    bio: "John Piper has been one of the most consistent and urgent advocates for Scripture memory in contemporary evangelical life. His own practice of memorizing extended portions of Scripture — including entire books — has shaped his preaching, his writing, and his personal spiritual resilience. Piper frames Scripture memory not primarily as a discipline of self-improvement but as a spiritual warfare strategy: the memorized Word is the sword of the Spirit (Eph 6:17), immediately available in every moment of temptation, discouragement, and anxiety. His resources on Desiring God, including articles and podcast episodes on memorization, have motivated millions of readers.",
    quote: "When I am discouraged, or anxious, or tempted, I need a sword. The sword is the Word of God. But a sword in the scabbard — a Bible on the shelf — is useless. The sword must be in your hand, which means in your memory.",
    contribution: "Piper's framing of Scripture memory as spiritual warfare rather than religious duty has given believers a compelling motivation for the discipline. His personal example — memorizing Philippians, Romans, and other books — and his practical resources at Desiring God have inspired a new generation of Christians to pursue extended memorization as a central spiritual practice.",
  },
  {
    id: "whitney-d",
    name: "Donald Whitney",
    era: "b. 1952",
    context: "Spiritual Disciplines for the Christian Life (1991) — the premier modern guide to Scripture memory as a discipline",
    bio: "Don Whitney's Spiritual Disciplines for the Christian Life is the most widely used evangelical introduction to the classical spiritual disciplines, with Scripture memorization occupying a central place. Whitney argues that Scripture memorization is not an advanced spiritual practice for exceptional Christians but a basic discipline for every believer — as basic as Bible reading or prayer. His treatment is thoroughly practical: he addresses why memory seems harder as we age, which verses to memorize first, and how to maintain verses once memorized. His chapter on memorization has introduced more evangelicals to the practice than any other single text.",
    quote: "Memorizing Scripture is one of the most life-changing disciplines a Christian can practice. There is no other discipline that puts the Word of God so immediately available for every circumstance of life.",
    contribution: "Whitney's Spiritual Disciplines for the Christian Life is used in evangelical seminaries, small groups, and discipleship programs worldwide. Its practical, motivating treatment of Scripture memorization — grounded in biblical warrant and filled with practical method — has been the standard introduction to the discipline for thirty years.",
  },
  {
    id: "muller-g",
    name: "George Muller",
    era: "1805-1898",
    context: "Victorian-era faith hero whose entire life was built on the memorized and meditated Word of God",
    bio: "George Muller, the Victorian-era evangelist and orphanage director who housed over 10,000 orphans by faith and prayer without ever publicly asking for money, read the Bible through over 200 times in his lifetime. His practice was not merely reading but deep meditation on Scripture — absorbing its promises, its character portraits, its prayers, and its commands until the Word became the substance of his inner life. Muller testified that the transformation of his prayer life came specifically when he began each morning with extended meditation on Scripture, filling his mind with God before bringing his requests. The result was a faith that moved mountains — literally, in the form of building after building constructed without debt through answered prayer.",
    quote: "I saw more clearly than ever that the first great and primary business to which I ought to attend every day was to have my soul happy in the Lord. The first thing to see to was not how much I might serve the Lord, how much I might do for Him; but how I might get my soul into a happy state.",
    contribution: "Muller's life is the most compelling testimony in evangelical history of what a life saturated in Scripture looks like from the outside. His faith, his prayer life, and his extraordinary provision for 10,000 orphans were not the product of a special gift but of a daily practice of Scripture meditation and prayer that any believer can imitate. He remains the most powerful argument that the Bible absorbed and applied transforms everything.",
  },
];

const MEMORY_VIDEOS = [
  { id: "mv1", title: "Don't Waste Your Life", preacher: "John Piper", videoId: "JHdB1dYAteA", description: "Piper's urgent call to live for something worthy of the one life God has given you — grounded in Paul's example in Philippians." },
  { id: "mv2", title: "The Holiness of God", preacher: "R.C. Sproul", videoId: "v6xk8e7gdMA", description: "Sproul's classic exposition of Isaiah 6 and the character of God whose holiness makes Scripture indispensable for knowing him rightly." },
  { id: "mv3", title: "Forgotten God Part 1", preacher: "Francis Chan", videoId: "sWMjg7CxIKk", description: "Chan challenges the church's neglect of the Holy Spirit and calls believers back to a Spirit-empowered, Spirit-directed life." },
  { id: "mv4", title: "The Prodigal Sons", preacher: "Tim Keller", videoId: "lsTzXI7cJGA", description: "A masterful exposition of Luke 15 — both sons lost, both needing the father, both revealing different ways we reject grace." },
  { id: "mv5", title: "How Great Is Our God", preacher: "Louie Giglio", videoId: "X1rPalyUshw", description: "Giglio's famous message connecting the vastness of the cosmos to the intimate love of God — one of the most-shared Christian talks ever." },
  { id: "mv6", title: "Supremacy of Christ and Truth", preacher: "Voddie Baucham", videoId: "by8ykv7-A3c", description: "Baucham makes a compelling case for the exclusive supremacy of Christ in a pluralistic culture." },
];

type Tab = "memory" | "study" | "voices" | "videos";

export default function VerseMemoryPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_verse-memory_tab", "memory");
  const [verses, setVerses] = useState<MemoryVerse[]>(() => {
    try { const s = localStorage.getItem("vine_verse_memory"); return s ? JSON.parse(s) : seedVerses; } catch { return seedVerses; }
  });
  const [innerTab, setInnerTab] = useState<"library" | "practice" | "stats" | "voices">("library");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_verse-memory_voice", "trotman-d");
  const voiceItem = VOICES_MEM.find(v => v.id === selectedVoice)!;
  const [activeCategory, setActiveCategory] = useState("All");
  const [addingVerse, setAddingVerse] = useState(false);
  const [reviewingId, setReviewingId] = useState<number | null>(null);
  const [userInput, setUserInput] = useState("");
  const [quizResult, setQuizResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [newVerse, setNewVerse] = useState({ reference: "", text: "", category: "Trust" });
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    try { localStorage.setItem("vine_verse_memory", JSON.stringify(verses)); } catch {}
  }, [verses]);

  const mastered = verses.filter(v => v.mastered).length;
  const totalReviews = verses.reduce((s, v) => s + v.reviewCount, 0);
  const filtered = activeCategory === "All" ? verses : verses.filter(v => v.category === activeCategory);
  const reviewingVerse = reviewingId !== null ? verses.find(v => v.id === reviewingId) ?? null : null;
  const dueForReview = verses.filter(v => !v.mastered).slice(0, 5);

  const toggleMastered = (id: number) => setVerses(prev => prev.map(v =>
    v.id === id ? { ...v, mastered: !v.mastered, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) } : v
  ));

  const markReviewed = (id: number) => setVerses(prev => prev.map(v =>
    v.id === id ? { ...v, reviewCount: v.reviewCount + 1, lastReviewed: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) } : v
  ));

  const addVerse = () => {
    if (!newVerse.reference.trim() || !newVerse.text.trim()) return;
    setVerses(prev => [{
      id: Date.now(), reference: newVerse.reference.trim(), text: newVerse.text.trim(),
      category: newVerse.category, mastered: false, reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    }, ...prev]);
    setNewVerse({ reference: "", text: "", category: "Trust" });
    setSavedFlash(true);
    setTimeout(() => { setSavedFlash(false); setAddingVerse(false); }, 1500);
  };

  const addSuggested = (v: typeof suggestedVerses[0]) => {
    if (verses.some(e => e.reference === v.reference)) return;
    setVerses(prev => [{
      id: Date.now(), reference: v.reference, text: v.text, category: v.category,
      mastered: false, reviewCount: 0,
      addedDate: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    }, ...prev]);
  };

  const checkAnswer = () => {
    if (!reviewingVerse) return;
    const target = reviewingVerse.text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const input = userInput.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const tWords = target.split(/\s+/);
    const iWords = input.split(/\s+/);
    const matched = iWords.filter((w, i) => tWords[i] === w).length;
    const pct = matched / tWords.length;
    setQuizResult(pct >= 0.95 ? "correct" : pct >= 0.7 ? "close" : "wrong");
    markReviewed(reviewingVerse.id);
  };

  const startReview = (id: number) => {
    setReviewingId(id); setUserInput(""); setQuizResult(null); setShowAnswer(false);
    setInnerTab("practice");
    setActiveTab("memory");
  };

  const resultConfig = {
    correct: { color: GREEN, border: "rgba(58,125,86,0.25)", bg: "rgba(58,125,86,0.08)", msg: "✓ Excellent! Almost word-perfect." },
    close: { color: "#F59E0B", border: "rgba(245,158,11,0.25)", bg: "rgba(245,158,11,0.08)", msg: "✓ Very close! Review the differences." },
    wrong: { color: "#EF4444", border: "rgba(239,68,68,0.25)", bg: "rgba(239,68,68,0.08)", msg: "Keep practicing — you'll get there!" },
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32, gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>🧠</span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Scripture Memory</span>
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0, lineHeight: 1.1 }}>Verse Memory</h1>
            <p style={{ fontSize: 14, color: MUTED, marginTop: 6 }}>{verses.length} verses &middot; {mastered} mastered &middot; {verses.length - mastered} in progress</p>
          </div>
          <button onClick={() => { setAddingVerse(true); setActiveTab("memory"); setInnerTab("library"); }}
            style={{ padding: "10px 22px", borderRadius: 12, border: "none", background: `linear-gradient(135deg, ${GREEN}, #3a7d56)`, color: BG, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
            + Add Verse
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Total Verses", value: verses.length, color: PURPLE },
            { label: "Mastered", value: mastered, color: GREEN },
            { label: "Total Reviews", value: totalReviews, color: "#F59E0B" },
          ].map(s => (
            <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mastery progress bar */}
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px 20px", marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Mastery Progress</span>
            <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>{verses.length ? Math.round((mastered / verses.length) * 100) : 0}%</span>
          </div>
          <div style={{ height: 8, background: BORDER, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${verses.length ? (mastered / verses.length) * 100 : 0}%`, background: `linear-gradient(90deg, ${PURPLE}, ${GREEN})`, borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* OUTER Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["memory", "study", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "memory" ? "Memory" : t === "study" ? "Study" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* MEMORY TAB — existing content */}
        {activeTab === "memory" && (
          <>
            {/* Inner Tabs */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
              {[
                { id: "library", label: "📚 Library" },
                { id: "practice", label: "✏️ Practice" },
                { id: "stats", label: "📊 Stats & Suggestions" },
              ].map(t => (
                <button key={t.id} onClick={() => setInnerTab(t.id as "library" | "practice" | "stats")}
                  style={{ padding: "10px 20px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, background: innerTab === t.id ? CARD : "transparent", color: innerTab === t.id ? TEXT : MUTED, borderBottom: innerTab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* LIBRARY TAB */}
            {innerTab === "library" && (
              <div>
                {addingVerse && (
                  <div style={{ background: CARD, border: `1px solid rgba(58,125,86,0.25)`, borderRadius: 16, padding: "24px", marginBottom: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>Add a Verse</h3>
                      <button onClick={() => setAddingVerse(false)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                      <input value={newVerse.reference} onChange={e => setNewVerse(p => ({ ...p, reference: e.target.value }))}
                        placeholder="Reference (e.g. John 3:16)"
                        style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: TEXT, fontSize: 14, outline: "none" }} />
                      <select value={newVerse.category} onChange={e => setNewVerse(p => ({ ...p, category: e.target.value }))}
                        style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: CARD, color: TEXT, fontSize: 14, outline: "none" }}>
                        {allCategories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <textarea value={newVerse.text} onChange={e => setNewVerse(p => ({ ...p, text: e.target.value }))}
                      placeholder="Paste the full verse text..." rows={3}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: TEXT, fontSize: 14, resize: "none", outline: "none", marginBottom: 12, boxSizing: "border-box", lineHeight: 1.7 }} />
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <button onClick={addVerse} disabled={!newVerse.reference.trim() || !newVerse.text.trim()}
                        style={{ padding: "10px 24px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 14, background: savedFlash ? "rgba(58,125,86,0.2)" : (newVerse.reference && newVerse.text ? `linear-gradient(135deg, ${GREEN}, #3a7d56)` : BORDER), color: savedFlash ? GREEN : (newVerse.reference && newVerse.text ? BG : MUTED) }}>
                        {savedFlash ? "✓ Saved!" : "Save Verse"}
                      </button>
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {allCategories.map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)}
                      style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === cat ? (categoryColors[cat] || GREEN) + "60" : BORDER}`, background: activeCategory === cat ? `${categoryColors[cat] || GREEN}15` : "transparent", color: activeCategory === cat ? categoryColors[cat] || GREEN : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                      {cat}
                    </button>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {filtered.length === 0 && (
                    <div style={{ textAlign: "center", padding: "60px 0" }}>
                      <p style={{ fontSize: 32, marginBottom: 8 }}>📖</p>
                      <p style={{ fontWeight: 700, color: TEXT }}>No verses in this category</p>
                      <p style={{ fontSize: 14, color: MUTED, marginTop: 4 }}>Add your first verse or select a different category</p>
                    </div>
                  )}
                  {filtered.map(verse => (
                    <div key={verse.id} style={{ background: verse.mastered ? "rgba(58,125,86,0.04)" : CARD, border: `1px solid ${verse.mastered ? "rgba(58,125,86,0.2)" : BORDER}`, borderRadius: 16, padding: "18px 22px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                          <span style={{ fontSize: 14, fontWeight: 800, color: verse.mastered ? GREEN : TEXT }}><VerseRef reference={verse.reference} /></span>
                          <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[verse.category] || PURPLE}15`, color: categoryColors[verse.category] || PURPLE, fontWeight: 700 }}>{verse.category}</span>
                          {verse.mastered && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN, fontWeight: 700 }}>✓ Mastered</span>}
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => startReview(verse.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                            Practice
                          </button>
                          <button onClick={() => toggleMastered(verse.id)} title={verse.mastered ? "Mark as in-progress" : "Mark as mastered"}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${verse.mastered ? GREEN + "40" : BORDER}`, background: verse.mastered ? "rgba(58,125,86,0.1)" : "transparent", cursor: "pointer", fontSize: 14, color: verse.mastered ? GREEN : MUTED }}>
                            {verse.mastered ? "✓" : "○"}
                          </button>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;{verse.text}&rdquo;</p>
                      <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#5A5A78" }}>
                        <span>Added {verse.addedDate}</span>
                        <span>&middot;</span>
                        <span>{verse.reviewCount} review{verse.reviewCount !== 1 ? "s" : ""}</span>
                        {verse.lastReviewed && <><span>&middot;</span><span>Last: {verse.lastReviewed}</span></>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRACTICE TAB */}
            {innerTab === "practice" && (
              <div>
                {!reviewingVerse ? (
                  <div>
                    <p style={{ color: MUTED, marginBottom: 20, fontSize: 15 }}>Choose a verse to practice, or pick from your review queue:</p>
                    <h4 style={{ fontSize: 14, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Up for Review</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                      {dueForReview.map(v => (
                        <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                          <div>
                            <p style={{ fontWeight: 800, fontSize: 14, margin: "0 0 4px" }}><VerseRef reference={v.reference} /></p>
                            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.reviewCount} reviews &middot; {v.category}</p>
                          </div>
                          <button onClick={() => startReview(v.id)}
                            style={{ padding: "8px 18px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${PURPLE}, #8B6FDB)`, color: TEXT, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            Practice →
                          </button>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: "center", padding: "20px", background: CARD, borderRadius: 14, border: `1px solid ${BORDER}` }}>
                      <p style={{ color: MUTED, fontSize: 14 }}>Go to Library tab to choose any specific verse to practice.</p>
                    </div>
                  </div>
                ) : (
                  <div style={{ background: CARD, border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 16, padding: "28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Practice</h3>
                        <p style={{ fontSize: 14, color: PURPLE, fontWeight: 700, margin: "4px 0 0" }}><VerseRef reference={reviewingVerse.reference} /></p>
                      </div>
                      <button onClick={() => { setReviewingId(null); setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                        style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                        ← Back
                      </button>
                    </div>

                    {showAnswer && !quizResult && (
                      <div style={{ padding: "16px 20px", background: "rgba(58,125,86,0.05)", border: "1px solid rgba(58,125,86,0.15)", borderRadius: 12, marginBottom: 16 }}>
                        <p style={{ fontSize: 15, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>&ldquo;{reviewingVerse.text}&rdquo;</p>
                      </div>
                    )}

                    {!quizResult && (
                      <div>
                        <p style={{ fontSize: 14, color: MUTED, marginBottom: 12 }}>Type the verse from memory. Punctuation doesn&rsquo;t need to be exact.</p>
                        <textarea value={userInput} onChange={e => setUserInput(e.target.value)}
                          placeholder="Type the verse here..." rows={4}
                          style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", color: TEXT, fontSize: 14, resize: "none", outline: "none", lineHeight: 1.7, marginBottom: 12, boxSizing: "border-box" }} />
                        <div style={{ display: "flex", gap: 10 }}>
                          <button onClick={checkAnswer} disabled={!userInput.trim()}
                            style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: userInput.trim() ? `linear-gradient(135deg, ${PURPLE}, #8B6FDB)` : BORDER, color: userInput.trim() ? TEXT : MUTED, cursor: userInput.trim() ? "pointer" : "not-allowed", fontSize: 14, fontWeight: 800 }}>
                            Check Answer
                          </button>
                          <button onClick={() => setShowAnswer(!showAnswer)}
                            style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {showAnswer ? "Hide Verse" : "Show Verse"}
                          </button>
                        </div>
                      </div>
                    )}

                    {quizResult && (
                      <div>
                        <div style={{ padding: "16px 20px", background: resultConfig[quizResult].bg, border: `1px solid ${resultConfig[quizResult].border}`, borderRadius: 12, marginBottom: 16 }}>
                          <p style={{ fontSize: 14, fontWeight: 800, color: resultConfig[quizResult].color, marginBottom: 8 }}>{resultConfig[quizResult].msg}</p>
                          <p style={{ fontSize: 14, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.8, margin: 0 }}>&ldquo;{reviewingVerse.text}&rdquo;</p>
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                          <button onClick={() => { setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                            style={{ padding: "10px 18px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", color: MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            ↺ Try Again
                          </button>
                          {quizResult === "correct" && (
                            <button onClick={() => { toggleMastered(reviewingVerse.id); setReviewingId(null); setQuizResult(null); setUserInput(""); setShowAnswer(false); }}
                              style={{ padding: "10px 20px", borderRadius: 10, border: `1px solid ${GREEN}40`, background: "rgba(58,125,86,0.12)", color: GREEN, cursor: "pointer", fontSize: 13, fontWeight: 800 }}>
                              🏆 Mark as Mastered
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* STATS & SUGGESTIONS TAB */}
            {innerTab === "stats" && (
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Verses by Category</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                  {allCategories.filter(c => c !== "All").map(cat => {
                    const catVerses = verses.filter(v => v.category === cat);
                    const catMastered = catVerses.filter(v => v.mastered).length;
                    const pct = catVerses.length ? (catMastered / catVerses.length) * 100 : 0;
                    if (catVerses.length === 0) return null;
                    return (
                      <div key={cat} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 18px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: categoryColors[cat] || TEXT }}>{cat}</span>
                          <span style={{ fontSize: 13, color: MUTED }}>{catMastered}/{catVerses.length} mastered</span>
                        </div>
                        <div style={{ height: 6, background: BORDER, borderRadius: 4, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: categoryColors[cat] || GREEN, borderRadius: 4, transition: "width 0.4s ease" }} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Suggested Verses to Add</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {suggestedVerses.map(v => {
                    const added = verses.some(e => e.reference === v.reference);
                    return (
                      <div key={v.reference} style={{ background: CARD, border: `1px solid ${added ? GREEN + "30" : BORDER}`, borderRadius: 14, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontSize: 14, fontWeight: 800, color: added ? GREEN : TEXT }}><VerseRef reference={v.reference} /></span>
                            <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[v.category] || PURPLE}15`, color: categoryColors[v.category] || PURPLE, fontWeight: 700 }}>{v.category}</span>
                          </div>
                          <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>&ldquo;{v.text.slice(0, 80)}&hellip;&rdquo;</p>
                        </div>
                        <button onClick={() => addSuggested(v)} disabled={added}
                          style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${added ? GREEN + "40" : BORDER}`, background: added ? "rgba(58,125,86,0.08)" : "rgba(255,255,255,0.04)", color: added ? GREEN : MUTED, cursor: added ? "not-allowed" : "pointer", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                          {added ? "✓ Added" : "+ Add"}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: 28, background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(58,125,86,0.05))`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "24px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>🧠 Memory Tips</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { tip: "Review each verse at least 7 times before marking it mastered." },
                      { tip: "Say verses aloud — speech reinforces memory much better than silent reading." },
                      { tip: "Write it by hand once a day for a week — muscle memory is powerful." },
                      { tip: "Attach a verse to a daily routine: morning coffee, commute, or bedtime." },
                      { tip: "Meditate on the meaning, not just the words — comprehension aids retention." },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0 }}>•</span>
                        <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{item.tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* STUDY TAB */}
        {activeTab === "study" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Memory Methods</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>{MEMORY_METHODS.length} proven techniques for memorizing Scripture &mdash; find the one that fits how God wired you.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {MEMORY_METHODS.map(mm => (
                <div key={mm.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 24 }}>{mm.icon}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0 }}>{mm.method}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{mm.description}</p>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Steps</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {mm.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}60`, color: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                          <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 12, borderLeft: `3px solid ${GREEN}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Best For</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{mm.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Memory Plans</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>{MEMORY_PLANS.length} structured approaches to building a verse memory practice over time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {MEMORY_PLANS.map(mp => (
                <div key={mp.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 22 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 22 }}>{mp.icon}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, margin: 0 }}>{mp.plan}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.75, marginBottom: 14 }}>{mp.description}</p>
                  <div style={{ background: BG, borderRadius: 8, padding: 10, borderLeft: `3px solid ${PURPLE}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Example</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{mp.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_MEM.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy and Contribution</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Recommended Teachings</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>{MEMORY_VIDEOS.length} messages on the Word of God, the character of Christ, and the life of faith.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
              {MEMORY_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, fontWeight: 700, border: `1px solid ${PURPLE}40` }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
