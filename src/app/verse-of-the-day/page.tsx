"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#c9a227";

const DAILY_VERSES = [
  { ref: "John 15:5", text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.", theme: "Abiding in Christ", reflection: "The whole architecture of the Christian life is here: relationship before production. Fruit is the overflow of abiding, not the achievement of striving. The vine does not command the branch to bear fruit — it flows from connection. Where are you staying connected today?", prayer: "Lord Jesus, I abide in you today. I am the branch, not the vine. Let your life flow through me. Teach me what it means to remain — in prayer, in Scripture, in your presence. Bear fruit through me that I could never produce on my own. Amen." },
  { ref: "Lamentations 3:22-23", text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.", theme: "God's Faithfulness", reflection: "Lamentations is the most grieved book in Scripture — written in the ashes of Jerusalem's destruction. Yet from that depth of loss emerges the greatest affirmation of God's daily faithfulness. Morning mercies are God's daily reset — not because we earn them, but because of his great love.", prayer: "Great is your faithfulness, O God. Your mercies are new this morning — let me receive them with open hands. I bring yesterday's failures, today's uncertainties, tomorrow's fears — all into the light of your unfailing love. Thank you for not consuming me. Amen." },
  { ref: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", theme: "Renewed Strength", reflection: "The Hebrew 'qavah' — to hope, to wait, to bind together — describes someone who has entwined themselves with God's promises. The waiting is not passive but active trust. And the renewal comes in three stages: soaring, running, walking. Notice the order — even walking without fainting is a gift of grace.", prayer: "Lord, I am weary. Renew my strength as I hope in you. Teach me to wait well — not with resignation but with expectation, knowing you are faithful. Let me soar where I have only been walking. Amen." },
  { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", theme: "Peace Over Anxiety", reflection: "Paul was in prison when he wrote 'do not be anxious about anything.' This is not shallow optimism — it is battle-tested trust. The pathway through anxiety is not denial but prayer + thanksgiving. When you bring everything to God, the inexplicable peace that follows is the promise.", prayer: "Lord, I bring my anxieties to you now — the ones I've been carrying and the ones I haven't named. With thanksgiving for your past faithfulness, I present my requests. Guard my heart and mind with your peace that passes understanding. Amen." },
  { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", theme: "God's Providence", reflection: "Not 'all things are good' — but 'in all things, God works for good.' The raw material of difficulty, loss, and suffering is not wasted in the hands of a sovereign God. The promise is not easy circumstances but purposeful redemption.", prayer: "God, I trust that you are working in what I don't understand. The things I call setbacks, you call material. The chapters I want to skip, you are writing with purpose. Use everything — even this — for my good and your glory. Amen." },
  { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.", theme: "God's Plans", reflection: "This was spoken to exiles — people in Babylon, far from home, with 70 years ahead of them before restoration. The promise was given in the middle of the long wait, not after it. God's plans for a future and a hope are declared over people who cannot yet see them.", prayer: "Lord, you know the plans. I do not. I choose to trust your knowledge of my future over my fears about it. You declared hope and a future over exiles — speak it over my situation today. Amen." },
  { ref: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see.", theme: "Faith", reflection: "Faith is not blind — it is evidence-based confidence in the character of God even when circumstances argue against it. The cloud of witnesses in Hebrews 11 trusted God's promises without seeing their fulfillment. Their faith was not rewarded in their lifetime. Ours may not be either. That doesn't make it less real.", prayer: "Lord, increase my faith — not the kind that demands visible outcomes, but the kind that trusts your character when I cannot see your hand. Let me live as one who sees what others cannot. Amen." },
];

const WEEKLY_PLAN = [
  { day: "Sunday", focus: "Worship", ref: "Psalm 100:1-2", text: "Shout for joy to the LORD, all the earth. Worship the LORD with gladness; come before him with joyful songs.", color: GOLD },
  { day: "Monday", focus: "Work & Calling", ref: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", color: GREEN },
  { day: "Tuesday", focus: "Relationships", ref: "Romans 12:10", text: "Be devoted to one another in love. Honor one another above yourselves.", color: PURPLE },
  { day: "Wednesday", focus: "Renewal", ref: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles.", color: "#3B82F6" },
  { day: "Thursday", focus: "Prayer", ref: "1 Thessalonians 5:17", text: "Pray continually.", color: "#F59E0B" },
  { day: "Friday", focus: "Grace & Forgiveness", ref: "Ephesians 4:32", text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.", color: "#EC4899" },
  { day: "Saturday", focus: "Sabbath Preparation", ref: "Psalm 92:1-2", text: "It is good to praise the LORD and make music to your name, O Most High, proclaiming your love in the morning.", color: "#10B981" },
];

const TOPICS = [
  { topic: "Anxiety & Fear", icon: "🕊️", color: "#3B82F6", verses: [
    { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
    { ref: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
    { ref: "John 14:27", text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." },
    { ref: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
  ]},
  { topic: "Strength", icon: "⚡", color: GOLD, verses: [
    { ref: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
    { ref: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles." },
    { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
    { ref: "Psalm 28:7", text: "The LORD is my strength and my shield; my heart trusts in him, and he helps me." },
  ]},
  { topic: "Hope", icon: "🌅", color: GREEN, verses: [
    { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future." },
    { ref: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
    { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
    { ref: "Lamentations 3:22-23", text: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  ]},
  { topic: "Salvation", icon: "✝️", color: PURPLE, verses: [
    { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { ref: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast." },
    { ref: "Romans 10:9", text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." },
    { ref: "1 John 5:13", text: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life." },
  ]},
  { topic: "Love", icon: "❤️", color: "#EC4899", verses: [
    { ref: "1 John 4:8", text: "Whoever does not love does not know God, because God is love." },
    { ref: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
    { ref: "John 13:34", text: "A new command I give you: Love one another. As I have loved you, so you must love one another." },
    { ref: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." },
  ]},
  { topic: "Wisdom", icon: "📖", color: "#F59E0B", verses: [
    { ref: "Proverbs 3:5-6", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
    { ref: "James 1:5", text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you." },
    { ref: "Psalm 119:105", text: "Your word is a lamp for my feet, a light on my path." },
    { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." },
  ]},
];

const MEMORY_PLANS = [
  { name: "Romans Road", desc: "7 verses that present the complete Gospel — perfect for sharing your faith.", weeks: 7, color: GREEN, verses: ["Romans 3:23", "Romans 6:23", "Romans 5:8", "Romans 10:9", "Romans 10:13", "Romans 8:1", "Romans 8:38-39"] },
  { name: "Fruit of the Spirit", desc: "Core character formation passages — the mark of a Spirit-filled life.", weeks: 7, color: PURPLE, verses: ["Galatians 5:22-23", "Colossians 3:12-14", "1 Corinthians 13:4-7", "Ephesians 4:32", "Romans 12:9-10", "Philippians 4:4-7", "James 1:2-4"] },
  { name: "Psalms of Trust", desc: "Ancient poetry for anxiety, grief, and deep trust in God.", weeks: 7, color: GOLD, verses: ["Psalm 23", "Psalm 46:1-3", "Psalm 27:1", "Psalm 121", "Psalm 34:18", "Psalm 62:5-6", "Psalm 91:1-2"] },
  { name: "Identity in Christ", desc: "Who God says you are — anchor verses for your true identity.", weeks: 7, color: "#3B82F6", verses: ["John 1:12", "Romans 8:1", "2 Corinthians 5:17", "Ephesians 1:4-5", "Ephesians 2:10", "Colossians 3:3", "1 Peter 2:9"] },
];

const VERSE_VIDEOS = [
  { videoId: "dXxmSDhvbHY", title: "Meditating on Scripture", channel: "Desiring God", description: "John Piper on how to meditate on a single verse — turning it over in your mind until it yields nourishment for the soul." },
  { videoId: "Hr3PkGXYRvI", title: "The Power of God's Word", channel: "Ligonier Ministries", description: "R.C. Sproul on why Scripture memorization and meditation are central spiritual disciplines — and what makes the Word of God unlike any other book." },
  { videoId: "KbFKcFxqVlo", title: "Scripture Memory That Lasts", channel: "The Gospel Coalition", description: "How to memorize Scripture in a way that sticks — methods, motivations, and how memorized verses become weapons against temptation." },
  { videoId: "ACZbpLkY8To", title: "Praying the Scripture", channel: "Crossway", description: "Donald Whitney on turning Scripture into prayer — how to take a verse and let it shape and fuel your conversation with God." },
];

type Tab = "today" | "weekly" | "topics" | "memorize" | "videos";

export default function VerseOfTheDayPage() {
  const [tab, setTab] = useState<Tab>("today");
  const [selectedTopic, setSelectedTopic] = useState("Anxiety & Fear");
  const [selectedPlan, setSelectedPlan] = useState("Romans Road");
  const [dayIndex] = useState(() => new Date().getDay());

  const verseIndex = new Date().getDate() % DAILY_VERSES.length;
  const todayVerse = DAILY_VERSES[verseIndex];
  const todayWeekly = WEEKLY_PLAN[dayIndex];
  const topic = TOPICS.find(t => t.topic === selectedTopic)!;
  const plan = MEMORY_PLANS.find(p => p.name === selectedPlan)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0d1a0f 50%, #07070F 100%)", padding: "100px 24px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,39,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)", borderRadius: 6, padding: "5px 16px", fontSize: 11, color: GOLD, fontWeight: 700, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>Verse of the Day</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 300, color: "#f2e6c8", marginBottom: 16, lineHeight: 1.1 }}>
            God&apos;s Word. Every Morning.
          </h1>
          <p style={{ color: "#9a8f72", fontSize: 16, lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
            Meditate, pray, and memorize Scripture that anchors the soul — topical verses, weekly plans, and memorization guides.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0 28px", overflowX: "auto" }}>
          {([
            { id: "today" as const, label: "Today's Verse", icon: "☀️" },
            { id: "weekly" as const, label: "Weekly Plan", icon: "📅" },
            { id: "topics" as const, label: "By Topic", icon: "🔍" },
            { id: "memorize" as const, label: "Memorize", icon: "🧠" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ]).map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease", whiteSpace: "nowrap" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* TODAY */}
        {tab === "today" && (
          <div>
            {/* Featured verse card */}
            <div style={{ background: "linear-gradient(135deg, #0a1e12, #0d160a)", border: "1px solid rgba(201,162,39,0.25)", borderRadius: 16, padding: "36px 40px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "inline-flex", background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: GOLD, fontWeight: 700 }}>{todayVerse.theme}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</div>
                </div>
                <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontStyle: "italic", lineHeight: 1.6, color: "#f2e6c8", margin: "0 0 20px", fontWeight: 400 }}>
                  &ldquo;{todayVerse.text}&rdquo;
                </blockquote>
                <div style={{ fontSize: 15, fontWeight: 700, color: GOLD, letterSpacing: 0.5 }}>— {todayVerse.ref}</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 12, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Reflection</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: 0 }}>{todayVerse.reflection}</p>
              </div>
              <div style={{ background: CARD, border: `1px solid rgba(201,162,39,0.2)`, borderRadius: 12, padding: 24 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Prayer</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, fontStyle: "italic", margin: 0 }}>{todayVerse.prayer}</p>
              </div>
            </div>

            {/* Today's weekly verse */}
            <div style={{ background: `${todayWeekly.color}10`, border: `1px solid ${todayWeekly.color}30`, borderRadius: 12, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ color: todayWeekly.color, fontWeight: 700, fontSize: 14 }}>Today&apos;s Weekly Focus: {todayWeekly.focus}</div>
                <span style={{ color: MUTED, fontSize: 12 }}>{todayWeekly.day}</span>
              </div>
              <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15, fontStyle: "italic", color: "#f2e6c8", margin: "0 0 8px" }}>
                &ldquo;{todayWeekly.text}&rdquo;
              </blockquote>
              <div style={{ color: todayWeekly.color, fontSize: 13, fontWeight: 700 }}>{todayWeekly.ref}</div>
            </div>
          </div>
        )}

        {/* WEEKLY */}
        {tab === "weekly" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 14, margin: 0 }}>Each day of the week carries its own rhythm. These anchor verses give Scripture a home in every part of your week — from Monday&apos;s labor to Saturday&apos;s rest and Sunday&apos;s worship.</p>
            </div>
            {WEEKLY_PLAN.map((day, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${day.color}25`, borderRadius: 12, padding: 22, marginBottom: 12, transition: "all 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = day.color + "60"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = day.color + "25"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: `${day.color}20`, color: day.color, width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, letterSpacing: 0.5, flexShrink: 0 }}>{day.day.slice(0,3).toUpperCase()}</div>
                    <div>
                      <div style={{ color: day.color, fontWeight: 800, fontSize: 15 }}>{day.day}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{day.focus}</div>
                    </div>
                  </div>
                  <span style={{ background: `${day.color}15`, color: day.color, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{day.ref}</span>
                </div>
                <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 16, fontStyle: "italic", color: "#f2e6c8", margin: 0, lineHeight: 1.6 }}>
                  &ldquo;{day.text}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* TOPICS */}
        {tab === "topics" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {TOPICS.map(t => (
                <button key={t.topic} onClick={() => setSelectedTopic(t.topic)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedTopic === t.topic ? t.color : BORDER}`, background: selectedTopic === t.topic ? `${t.color}18` : CARD, color: selectedTopic === t.topic ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease" }}>
                  {t.icon} {t.topic}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {topic.verses.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${topic.color}30`, borderRadius: 12, padding: 24, transition: "all 0.2s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = topic.color + "70"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${topic.color}15`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = topic.color + "30"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ color: topic.color, fontWeight: 700, fontSize: 13, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ background: `${topic.color}15`, padding: "2px 10px", borderRadius: 10 }}>{v.ref}</span>
                  </div>
                  <blockquote style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 17, fontStyle: "italic", color: "#f2e6c8", margin: 0, lineHeight: 1.65 }}>
                    &ldquo;{v.text}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MEMORIZE */}
        {tab === "memorize" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 14, margin: 0 }}>Scripture memory is the long game — each verse memorized is a permanent deposit in the soul. These 7-week plans cover foundational passages on the most important themes of the Christian life. One verse per week: meditate on it, pray it, live it.</p>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {MEMORY_PLANS.map(p => (
                <button key={p.name} onClick={() => setSelectedPlan(p.name)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedPlan === p.name ? p.color : BORDER}`, background: selectedPlan === p.name ? `${p.color}18` : CARD, color: selectedPlan === p.name ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s ease" }}>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${plan.color}30`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ color: plan.color, fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ color: MUTED, fontSize: 14 }}>{plan.desc}</div>
                </div>
                <div style={{ background: `${plan.color}15`, color: plan.color, padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{plan.weeks} Weeks</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {plan.verses.map((v, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}`, transition: "border-color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = plan.color + "40")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: `${plan.color}15`, border: `2px solid ${plan.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: plan.color, flexShrink: 0 }}>W{i + 1}</div>
                    <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20`, borderRadius: 12, padding: 20 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Tips for Lasting Scripture Memory</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                {["Say it aloud — hearing and speaking reinforces recall", "Write it out by hand — motor memory is powerful", "Review daily — 2 minutes morning & evening", "Set it to a melody or rhythm", "Use it in prayer — apply it to real life", "Test yourself daily — cover the page and recite"].map((tip, i) => (
                  <div key={i} style={{ background: CARD, borderRadius: 8, padding: "10px 14px", fontSize: 13, color: MUTED, display: "flex", gap: 8 }}>
                    <span style={{ color: GOLD, flexShrink: 0 }}>✓</span> {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VERSE_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
