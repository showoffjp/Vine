"use client";
import { useState, useEffect } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", GOLD = "#c9a227", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FIRST_STEPS = [
  {
    n: 1,
    title: "Get Baptized",
    icon: "💧",
    color: "#3B82F6",
    why: "Baptism is the first act of public obedience for a new believer (Matthew 28:19, Acts 2:38). It is the outward declaration of an inward reality — you have died to your old life and been raised with Christ. It is not what saves you, but it is the first thing Jesus commanded after belief. Baptism says publicly: this happened to me. I am a different person now.",
    how: "Talk to your pastor or church about baptism. Most churches offer short classes to explain the meaning. Baptism is done in the presence of the community — it is public for a reason. Don't delay it. Don't wait until you feel 'ready enough.' Jesus commanded it as an immediate response to faith.",
    verse: "We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life. — Romans 6:4",
  },
  {
    n: 2,
    title: "Join a Local Church",
    icon: "⛪",
    color: "#10B981",
    why: "The Christian life was never meant to be lived alone. The New Testament assumes Christians belong to local congregations — communities where they are known, cared for, taught, and held accountable. 'Don't give up meeting together, as some are in the habit of doing' (Hebrews 10:25). The Christian who tries to grow alone is like a coal pulled from the fire: it quickly goes cold.",
    how: "If you don't have a church, ask a Christian you respect where they attend. Try several, but commit to one. Look for expository preaching of Scripture, genuine community, and the gospel at the center. Don't church-shop indefinitely — belonging requires commitment. Introduce yourself to the pastor. Tell them you're new to faith.",
    verse: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing. — Hebrews 10:24-25",
  },
  {
    n: 3,
    title: "Start Reading the Bible",
    icon: "📖",
    color: GOLD,
    why: "The Bible is how God speaks. 'Faith comes by hearing, and hearing through the word of Christ' (Romans 10:17). Without regular Scripture reading, your faith will remain shallow — fed by inspiration and feeling rather than by the sustaining Word. Jesus quoted Scripture in every major challenge he faced. The Word is your primary spiritual food.",
    how: "Start with the Gospel of John, then Romans. Read a chapter a day. Get a readable translation (ESV, NIV, CSB). Consider a reading plan — many apps offer them. Don't start in Genesis if you're new — the whole Bible makes more sense after you know Jesus. Read slowly enough to think, not fast enough to check off.",
    verse: "Your word is a lamp for my feet, a light on my path. — Psalm 119:105",
  },
  {
    n: 4,
    title: "Develop a Prayer Life",
    icon: "🙏",
    color: PURPLE,
    why: "Prayer is the primary dialogue of the Christian life with God. Jesus assumed his followers would pray (Matthew 6:5 — 'when you pray,' not 'if you pray'). Prayer is not about technique — it is about relationship. God is a person. Talk to him honestly about your life: what you need, what you're grateful for, what you've done wrong, what you're afraid of.",
    how: "Start with five minutes a day. Use the Lord's Prayer as a template (Matthew 6:9-13). Tell God what you're grateful for, what you need, and what you're sorry for. Listen as well as speak — silence matters. Prayer is not a performance; God already knows your heart. He just wants you to talk to him.",
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. — Philippians 4:6",
  },
  {
    n: 5,
    title: "Tell Someone",
    icon: "📢",
    color: "#EF4444",
    why: "Faith that is never spoken begins to weaken. 'Whoever acknowledges me before others, I will also acknowledge before my Father in heaven' (Matthew 10:32). Witness is not primarily a technique — it is a natural overflow of knowing someone worth knowing. You don't need to be a theologian. Your story is the most powerful thing you have.",
    how: "Start with one person who already knows you. Share what changed, not a rehearsed presentation. 'Something happened to me, and I can't explain it without telling you about Jesus' is enough to open the door. You don't need all the answers — only your story.",
    verse: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. — 1 Peter 3:15",
  },
  {
    n: 6,
    title: "Find a Mentor",
    icon: "🧭",
    color: "#8B5CF6",
    why: "Every new believer benefits from someone further along the faith journey. 'Walk with the wise and become wise' (Proverbs 13:20). A mentor is not a professional — it is an older, more experienced Christian who is willing to meet with you and share their life. Paul mentored Timothy. Jesus mentored the Twelve. You were not designed to figure this out alone.",
    how: "Ask your pastor for a recommendation. Look for someone whose character and faith you admire — not necessarily the most impressive person, but the most genuine. Meet monthly at minimum. Ask questions. Be willing to be known and to be honest about your struggles.",
    verse: "Be imitators of me, as I am of Christ. — 1 Corinthians 11:1",
  },
];

const ASSURANCE_TRUTHS = [
  { truth: "God's promises do not depend on your feelings", verse: "John 6:37", text: "'Whoever comes to me I will never drive away.' God's promise is unconditional. Your salvation is not secured by your emotional state but by his word. Some days you will feel far from God. That does not mean you are." },
  { truth: "You are sealed by the Holy Spirit", verse: "Ephesians 1:13-14", text: "'You also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit.' The Spirit's presence in you is God's own guarantee of your inheritance." },
  { truth: "Nothing can separate you from God's love", verse: "Romans 8:38-39", text: "'I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.'" },
  { truth: "Jesus is interceding for you right now", verse: "Hebrews 7:25", text: "'He is able to save completely those who come to God through him, because he always lives to intercede for them.' At this moment, Jesus is praying for you. Your salvation is held not only by your faith but by his intercession." },
  { truth: "Genuine faith produces fruit over time", verse: "John 15:5", text: "Assurance is also found in the presence of spiritual fruit — growing love for God and others, increasing sorrow over sin, desire to read Scripture, and love for other believers. These are signs of genuine new life. They grow slowly; look for direction, not perfection." },
];

const COMMON_QUESTIONS = [
  { q: "Am I really saved if I still feel the same?", a: "Feelings are not the measure of salvation. Salvation is based on the promise of God, not your emotional state. That said, genuine conversion typically does produce change over time — new desires, new sorrow over sin, new love for God's people. If you've genuinely trusted Christ, you are genuinely saved. Trust the promise, not the feeling. God does not lie." },
  { q: "Do I have to be perfect now?", a: "No. Becoming a Christian does not mean instantaneous moral perfection — it means beginning a journey of transformation. Sanctification (becoming more like Christ) is a lifelong process. You will fail. The answer to failure is repentance and grace, not self-condemnation. Romans 8:1: 'There is now no condemnation for those who are in Christ Jesus.'" },
  { q: "What if I still doubt?", a: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Even the disciples doubted (Matthew 28:17). Bring your doubts to God honestly, seek community, read honest thinkers who have wrestled with your questions, and keep showing up. Faith is not a feeling — it is a commitment renewed day by day." },
  { q: "Do I have to give up all my old friends?", a: "Not necessarily. Your relationships are one of the primary contexts in which your new faith becomes visible to others. Some relationships may change naturally as your values change. Some old friends may ask you what happened and give you the opportunity to share. Be patient with people, and be patient with yourself." },
  { q: "What about my old habits and sins?", a: "Change takes time. The Holy Spirit is at work in you, but transformation is usually gradual, not instantaneous. For serious addictions or habitual sins, seek help — pastoral care, accountability relationships, and in some cases professional counseling. Don't expect willpower alone to win — you need community and the means of grace." },
  { q: "Which church is the right one?", a: "Start with churches that hold the essentials of the faith: the Trinity, the incarnation, salvation by grace through faith, the authority of Scripture, and the resurrection. Within those bounds, there is genuine diversity. Visit, pray, and choose a church where you can grow, be known, and be equipped to serve. Don't church-shop forever — commit." },
  { q: "Do I need to be baptized to be saved?", a: "Most evangelical Christians hold that baptism is not the instrument of salvation but an act of obedience that follows it. The thief on the cross was promised paradise by Jesus before any baptism (Luke 23:43). However, Jesus did command baptism for his disciples (Matthew 28:19), and it is the normal first act of public obedience after faith. Don't delay it." },
  { q: "What if God doesn't answer my prayers?", a: "God always answers prayer, but not always as we expect. He answers 'yes,' 'not yet,' or 'I have something better.' Learning to trust God's responses — rather than demanding specific outcomes — is part of the growth of faith. Unanswered prayers are often the beginning of a deeper conversation with God, not evidence that he is absent." },
];

const READING_PLAN = [
  { week: "Week 1-2", book: "Gospel of John", reason: "The most theologically rich portrait of Jesus. Written 'so that you may believe' (John 20:31). Start here — Jesus introduces himself to you.", chapters: "21 chapters — one per day" },
  { week: "Week 3-4", book: "Romans", reason: "Paul's most systematic presentation of the gospel. Everything from sin to grace to the Christian life. The backbone of Protestant theology.", chapters: "16 chapters" },
  { week: "Week 5-6", book: "Psalms (selected)", reason: "The prayer book of the Bible. Learn how to talk to God through the full range of human experience — from joy to despair to worship.", chapters: "Psalms 1, 23, 51, 103, 139, then others" },
  { week: "Week 7-8", book: "Luke-Acts", reason: "The story of Jesus and the birth of the early church. How the gospel spread from Jerusalem to the world. Explosive and practical.", chapters: "48 chapters total — 3-4 per day" },
  { week: "Week 9-10", book: "Ephesians + Colossians", reason: "Who you are in Christ. The riches of grace, the supremacy of Jesus, and the practical life of the church together. Essential for identity.", chapters: "6 + 4 chapters" },
  { week: "Week 11-12", book: "Genesis 1-12", reason: "The beginning — creation, fall, the first promise of redemption, and the call of Abraham. Everything in the Bible flows from these chapters.", chapters: "12 chapters" },
];

const MENTORS_NB = [
  {
    id: "stott",
    name: "John Stott",
    era: "1921-2011",
    context: "Basic Christianity (1958); All Souls, Langham Place, London",
    bio: "Basic Christianity is the single best book for new believers — concise, warm, intellectually honest, and theologically solid. Stott worked from the premise that Christianity makes truth claims that can be examined: who Jesus claimed to be, the evidence for the resurrection, what it means to respond. He did not ask for a blind leap but a step into the light of evidence. Tens of millions of copies have been distributed worldwide.",
    quote: "We need to repent of the haste and shallowness of our repentance.",
    contribution: "Gave the church the definitive entry-level text for Christian faith — clear, rigorous, accessible to any educated reader, and never condescending. Basic Christianity has introduced more people to the intellectual foundations of faith than almost any other single volume.",
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Mere Christianity (1952); Oxford and Cambridge; former atheist",
    bio: "Mere Christianity began as BBC radio talks during World War II — Lewis explaining Christianity to a general audience with no prior Christian assumptions. His trilemma (Jesus is either liar, lunatic, or Lord) forces a decision about Jesus that prevents comfortable dismissal. His explanation of morality as evidence for God, and of the incarnation as the central fact of history, has introduced millions of skeptics to serious Christian faith.",
    quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.",
    contribution: "Made Christianity intellectually credible to the modern secular reader. His combination of honest reasoning, engaging prose, and personal testimony of adult conversion to faith has made him the single most influential apologist in the English language. New believers find in Lewis a companion who was where they were.",
  },
  {
    id: "augustine",
    name: "Augustine",
    era: "354-430",
    context: "Confessions (c. 397-400); Bishop of Hippo; North Africa",
    bio: "Confessions is the first autobiography in Western literature and the most intimate account of conversion in the Christian tradition. Augustine traces his intellectual and moral journey from childhood through Manichaeism, Neoplatonism, and finally to Christ — driven by a restless longing he could not name until he found its source. His opening line has never been surpassed: 'You have made us for yourself, O Lord, and our hearts are restless until they rest in You.'",
    quote: "You have made us for yourself, O Lord, and our hearts are restless until they rest in You.",
    contribution: "Gave the church a model of honest, searching faith that does not pretend to have arrived. His account of intellectual pride, sexual sin, and the slowness of conversion has resonated across 1,600 years. Confessions tells new believers that the God who waited for Augustine is the same God who waited for them.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "Renovation of the Heart (2002); The Spirit of the Disciplines (1988); USC professor",
    bio: "Willard was a USC philosophy professor who wrote the most important books on Christian spiritual formation of the 20th century. For new believers, Renovation of the Heart describes what happens after conversion: a transformation of the whole person — mind, will, body, relationships, and soul — into Christlikeness. His central metaphor: spiritual disciplines are training, not trying. You cannot will yourself to be Christlike any more than you can will yourself to run a marathon; you train for both.",
    quote: "Grace is not opposed to effort. It is opposed to earning. Effort is action. Earning is attitude.",
    contribution: "Gave new believers a framework for understanding why spiritual growth takes time and discipline — and why failure to grow is not evidence that God is absent but that the disciplines have not been engaged. His distinction between grace and effort resolved a confusion that had paralyzed many Christians.",
  },
];

const NB_VIDEOS = [
  { videoId: "DEy5rrMVW6g", title: "What Is a Christian?", speaker: "Francis Chan", description: "Chan answers the foundational question for new believers — what it actually means to be a Christian, and what that changes about how you live from this day forward." },
  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", speaker: "Francis Chan", description: "Chan distills the gospel to its essentials — what God has done in Christ, what it requires of us, and why it is the most important news in the world." },
  { videoId: "RUhJVEWBe4g", title: "How to Be Born Again", speaker: "Billy Graham", description: "Graham's classic evangelistic message on the new birth — what it means, why it is necessary, and what it looks like in a real life. Ideal for those who just trusted Christ." },
  { videoId: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller", description: "Keller unpacks Luke 15 to show what it means to come home to the Father — and why the welcome God gives is far more than any of us expect or feel we deserve." },
  { videoId: "21yE6AT8tCw", title: "Faith Over Fear", speaker: "Francis Chan", description: "A challenge for new believers navigating the difference between cultural Christianity and genuine discipleship — and what it means to trust God with everything." },
  { videoId: "whuEOv18Ulw", title: "Stop Debating, Start Obeying", speaker: "Francis Chan", description: "A challenge for new and established believers alike — Jesus calls us not merely to understand the faith but to obey it and walk in the Spirit's power day by day." },
];

type NTab = "steps" | "assurance" | "questions" | "reading" | "mentors" | "videos";

export default function NewBelieverPage() {
  const [activeTab, setActiveTab] = usePersistedState<NTab>("vine_new-believer_tab", "steps");
  const [selectedMentor, setSelectedMentor] = usePersistedState("vine_new-believer_selected_mentor", "stott");
  const mentorItem = MENTORS_NB.find(m => m.id === selectedMentor)!;
  const [completed, setCompleted] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_nb_steps"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_nb_steps", JSON.stringify([...completed])); } catch {} }, [completed]);

  const toggleStep = (n: number) => setCompleted(prev => {
    const next = new Set(prev);
    next.has(n) ? next.delete(n) : next.add(n);
    return next;
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, rgba(58,125,86,0.1) 0%, transparent 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "80px 20px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,86,0.12)", border: "1px solid rgba(58,125,86,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>🌱</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>First Steps of Faith</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
            Welcome to the{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Family
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, maxWidth: 560, margin: "0 auto 24px" }}>
            You have made the most important decision of your life. What happens next matters enormously. These are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.
          </p>
          {completed.size > 0 && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "10px 20px" }}>
              <span style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{completed.size} of {FIRST_STEPS.length} first steps taken ✓</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "32px 20px 80px" }}>
        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "steps" as const, label: "First Steps", icon: "🛠️" },
            { id: "assurance" as const, label: "Assurance", icon: "🔒" },
            { id: "questions" as const, label: "Questions", icon: "❓" },
            { id: "reading" as const, label: "Reading Plan", icon: "📖" },
            { id: "mentors" as const, label: "Mentors", icon: "💬" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "background 0.2s" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* FIRST STEPS */}
        {activeTab === "steps" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FIRST_STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${completed.has(s.n) ? s.color + "50" : BORDER}`, borderRadius: 14, padding: 22, transition: "border-color 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 17 }}>Step {s.n}: {s.title}</div>
                    </div>
                  </div>
                  <button type="button" onClick={() => toggleStep(s.n)}
                    style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${completed.has(s.n) ? s.color + "50" : BORDER}`, background: completed.has(s.n) ? `${s.color}15` : "transparent", color: completed.has(s.n) ? s.color : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0, transition: "all 0.2s" }}>
                    {completed.has(s.n) ? "✓ Done" : "Mark Done"}
                  </button>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Why this matters</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.why}</p>
                </div>
                <div style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 10, padding: 14, marginBottom: 12 }}>
                  <div style={{ color: s.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>How to do it</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.how}</p>
                </div>
                <div style={{ borderLeft: `3px solid ${s.color}40`, paddingLeft: 12 }}>
                  <p style={{ color: MUTED, fontSize: 12, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}><VerseRef reference={s.verse} /></p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ASSURANCE */}
        {activeTab === "assurance" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 12 }}>Am I Really Saved?</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                This is the most common question new believers ask. The good news: your assurance does not rest on your feelings, your performance, or your worthiness. It rests on God&apos;s character and his promises — which do not change. Here are {ASSURANCE_TRUTHS.length} truths your assurance is anchored to.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {ASSURANCE_TRUTHS.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 24px" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, fontSize: 14, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                        <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: 0 }}>{t.truth}</h3>
                        <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}><VerseRef reference={t.verse} /></span>
                      </div>
                      <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 1 John 5:13 */}
            <div style={{ background: `linear-gradient(135deg, rgba(58,125,86,0.06), rgba(107,79,187,0.06))`, border: `1px solid ${GREEN}25`, borderRadius: 16, padding: "28px 32px", marginBottom: 20, textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 22, fontStyle: "italic", color: TEXT, lineHeight: 1.7, marginBottom: 12 }}>
                &ldquo;I write these things to you who believe in the name of the Son of God so that you may <em>know</em> that you have eternal life.&rdquo;
              </p>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: 13, margin: 0 }}>&mdash; 1 John 5:13 — John wrote this letter so believers could have certainty.</p>
            </div>

            {/* What assurance is NOT */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>What Assurance Is Not</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { not: "Not feeling saved every day", note: "Feelings fluctuate. Faith does not rest on feelings." },
                  { not: "Not remembering the exact moment you were saved", note: "Some people have dramatic conversion moments; others a gradual turning. Both are valid." },
                  { not: "Not being free from doubt", note: "Even Thomas doubted after seeing the risen Jesus (John 20:24-28). Jesus dealt with him gently." },
                  { not: "Not achieving a certain level of holiness first", note: "You were saved while you were still a sinner (Romans 5:8). Your progress does not earn or keep salvation." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ color: "#EF4444", fontWeight: 900, fontSize: 16, flexShrink: 0 }}>✗</div>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{item.not}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUESTIONS */}
        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                These are the questions most new believers are afraid to ask. Every single one is normal. You are not behind. You are not failing. You are just new to this — and that is exactly where you&apos;re supposed to be.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {COMMON_QUESTIONS.map((q, i) => (
                <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${expandedQ === i ? GREEN + "40" : BORDER}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button type="button" onClick={() => setExpandedQ(expandedQ === i ? null : i)}
                    style={{ width: "100%", textAlign: "left", padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ color: expandedQ === i ? GREEN : TEXT, fontWeight: 700, fontSize: 15 }}>&ldquo;{q.q}&rdquo;</span>
                    <span style={{ color: MUTED, fontSize: 20, flexShrink: 0 }}>{expandedQ === i ? "−" : "+"}</span>
                  </button>
                  {expandedQ === i && (
                    <div style={{ padding: "0 20px 18px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: "14px 0 0" }}>{q.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: `${PURPLE}0A`, border: `1px solid ${PURPLE}25`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>One More Thing You Need to Know</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                The Christian life is not mastered in the first year. Or the first decade. Mature Christians are still learning, still growing, still confessing, still trusting. What God asks of you right now is not perfection — it is faithfulness. Show up. Keep reading. Keep praying. Keep going to church. The transformation happens in the ongoing. You are in exactly the right place.
              </p>
            </div>
          </div>
        )}

        {/* READING PLAN */}
        {activeTab === "reading" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                This 12-week plan covers the most essential parts of the Bible for a new believer — starting with the Gospels and working outward. One chapter per day is enough. The goal is consistency, not speed. Understanding comes with repetition over time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {READING_PLAN.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 60, flexShrink: 0 }}>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>{r.week}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{r.chapters}</div>
                  </div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{r.book}</div>
                    <p style={{ color: "#C0C0D8", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.reason}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Five Tips for Reading the Bible as a New Believer</h3>
              {[
                { tip: "Get a readable translation", detail: "ESV, NIV, CSB, or NLT are all excellent. Avoid the King James Version until you're more familiar with the Bible — the 16th century English creates an unnecessary barrier." },
                { tip: "Start with the New Testament", detail: "The Old Testament is essential, but it makes far more sense after you know Jesus. Begin with John, then Romans, then Acts. Come back to Genesis and the Psalms after the first month." },
                { tip: "Read slowly enough to think", detail: "One chapter a day is plenty. Don't race through Scripture trying to get to the end — the goal is encounter, not completion. Ask: what does this say about God? About me? What do I need to do?" },
                { tip: "Mark it and write in it", detail: "Your Bible is a tool, not a museum piece. Underline what strikes you. Write questions in the margins. Date things that feel significant. The Bible is meant to be wrestled with." },
                { tip: "Read it in community", detail: "Find a church that preaches through Scripture. Join a small group that studies the Bible together. Reading alone is good; reading in community is richer." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 4 ? 14 : 0, paddingBottom: i < 4 ? 14 : 0, borderBottom: i < 4 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}35`, color: GREEN, fontWeight: 900, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{item.tip}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MENTORS */}
        {activeTab === "mentors" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                These {MENTORS_NB.length} voices have guided new believers across centuries. Each one offers something different — Stott&apos;s intellectual clarity, Lewis&apos;s imaginative reason, Augustine&apos;s honest confession, and Willard&apos;s practical formation wisdom.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ width: 210, flexShrink: 0 }}>
                {MENTORS_NB.map(m => (
                  <button type="button" key={m.id} onClick={() => setSelectedMentor(m.id)}
                    style={{ width: "100%", background: selectedMentor === m.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedMentor === m.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
                    <div style={{ color: selectedMentor === m.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{m.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{m.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{mentorItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{mentorItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{mentorItem.context}</span>
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Life & Teaching</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{mentorItem.bio}</p>
                  </div>
                  <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Characteristic Quote</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{mentorItem.quote}&rdquo;</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution to New Believers</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{mentorItem.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>For New Believers</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These sermons and teachings are ideal for those who are new to faith — they answer foundational questions, give the gospel clearly, and call new believers to genuine, whole-life discipleship.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 24 }}>
              {NB_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: PURPLE, border: "1px solid rgba(107,79,187,0.3)" }}>{v.speaker}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
