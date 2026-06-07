"use client";
import { useState, useEffect } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", GOLD = "#c9a227";
const TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "why" | "methods" | "lords_prayer" | "acts" | "daily" | "journal" | "videos";

const WHY_PRAYER = [
  {
    title: "Prayer as Relationship, Not Performance",
    verse: "Matthew 6:6",
    body: "'When you pray, go into your room, close the door and pray to your Father, who is unseen' (Matthew 6:6). Jesus assumes his followers will pray — not if you pray but when. And his first correction of their prayer life was about motive: prayer is not a display but a conversation. The word 'Father' in the Lord's Prayer was shocking in its intimacy. The God of the universe invites us to speak to him as a child speaks to a loving parent. This relational foundation distinguishes Christian prayer from every other form of spiritual practice: we are not trying to reach an impersonal Force, earn merit with an indifferent deity, or achieve an altered state. We are talking to Someone who already loves us.",
  },
  {
    title: "The Spirit Intercedes for Us",
    verse: "Romans 8:26-27",
    body: "'The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God' (Romans 8:26-27). This passage is the deepest comfort in all of Scripture for the struggling pray-er. You do not have to get prayer right. The Spirit is already praying within you with a depth and precision that surpasses your understanding. When you don't know what to say, the Spirit says it. Your job is to show up; the Spirit's job is to intercede. Prayer is not your performance — it is your participation in a divine conversation already underway.",
  },
  {
    title: "Pray Without Ceasing",
    verse: "1 Thessalonians 5:17",
    body: "Paul's shortest command is one of the most demanding: 'pray without ceasing.' This cannot mean uninterrupted verbal prayer. It means a continuous orientation of the whole life toward God — a background awareness of his presence, a habit of turning every circumstance into conversation, a posture rather than a practice. Brother Lawrence, the 17th-century Carmelite kitchen worker, is the patron saint of this understanding: he claimed to be in uninterrupted communion with God while washing dishes and cooking meals, simply by the constant intention to remain in God's company. The goal of 'pray without ceasing' is not more scheduled prayer time (though that helps) but a life that is itself an act of prayer.",
  },
  {
    title: "The Prayer Life of Jesus",
    verse: "Mark 1:35",
    body: "'Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed' (Mark 1:35). This detail is striking: Jesus — who was himself God incarnate — regularly withdrew to pray. He prayed before major decisions (Luke 6:12 — all night before choosing the Twelve). He prayed in Gethsemane when facing the cross. He prayed the high-priestly prayer of John 17 for his disciples and for all who would believe through them. He was interrupted and pressed on every side, yet he protected time with the Father. If the Son of God needed and valued prayer, the question is not whether prayer matters but how seriously we will take what Jesus modeled.",
  },
  {
    title: "Ask, Seek, Knock",
    verse: "Matthew 7:7-11",
    body: "'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened. Which of you, if your son asks for bread, will give him a stone?' (Matthew 7:7-9). The three verbs — ask, seek, knock — are progressive in intensity. The Greek uses the present imperative: keep asking, keep seeking, keep knocking. The promise is not instant response but the reliability of a Father who gives good gifts to his children who persist in coming to him. Jesus is not teaching us to badger God into compliance; he is calling us into a relationship of sustained, trusting dependence.",
  },
  {
    title: "The Purpose of Unanswered Prayer",
    verse: "2 Corinthians 12:8-9",
    body: "Paul asked three times for his 'thorn in the flesh' to be removed. God said no — and then said something better: 'My grace is sufficient for you, for my power is made perfect in weakness' (2 Cor 12:9). The unanswered prayer became the occasion for a deeper revelation of God's sufficiency. Not every prayer is answered in the way we ask, and this is not God's failure — it is his wisdom. He sees what we cannot see. He knows what we need more than what we want. The prayer life that matures learns to hold its requests with open hands, trusting the Father's wisdom even when the answer is no, not yet, or something better.",
  },
];

const METHODS = [
  {
    name: "ACTS Model",
    subtitle: "Adoration · Confession · Thanksgiving · Supplication",
    description: "A four-movement structure that ensures prayer is not merely a request list. Begin with Adoration — praise God for who he is (not what he does). Move to Confession — honest acknowledgment of sin and failure. Then Thanksgiving — gratitude for specific blessings and answered prayer. Finally Supplication — bring your requests for yourself and others. This sequence embeds prayer within a relationship rather than treating God as a help desk.",
    best: "Daily structured prayer; new pray-ers building a habit; anyone whose prayer has become a list of needs",
    steps: ["Adoration: 'Lord, you are holy, sovereign, faithful, and good...'", "Confession: 'I confess that this week I...'", "Thanksgiving: 'Thank you for... I specifically saw you at work in...'", "Supplication: 'I bring before you... I ask for... I intercede for...'"],
  },
  {
    name: "Lectio Divina",
    subtitle: "Prayerful Scripture Reading",
    description: "An ancient monastic practice of slow, attentive Scripture reading as an encounter with God rather than information-gathering. The four movements — lectio (read), meditatio (meditate), oratio (pray), contemplatio (contemplate) — move from the text into prayer and finally into quiet rest in God's presence. Pick a short passage (5-10 verses). Read it slowly, even aloud. Notice the word or phrase that arrests you. Stay there. Let it become your prayer.",
    best: "When prayer feels mechanical or dry; when you want Scripture and prayer integrated; Lent or spiritual retreats",
    steps: ["Lectio: Read the passage slowly, twice", "Meditatio: What word or phrase holds your attention? Stay with it", "Oratio: Speak to God from what you received — let the text become prayer", "Contemplatio: Rest in God's presence; don't fill the silence"],
  },
  {
    name: "The Daily Examen",
    subtitle: "Ignatian Evening Prayer",
    description: "Ignatius Loyola's practice for discerning God's presence in the movements of the day. Not confession primarily — though it includes that — but attentiveness to consolation (where you felt drawn toward God) and desolation (where you felt distant or drained). Practiced at day's end, it trains you to read your own life theologically: to see God's presence in ordinary moments.",
    best: "Evening prayer; for those who want to discern God's movement in daily life; for those learning to 'pray without ceasing'",
    steps: ["Give thanks for one specific good thing from the day", "Review the day slowly from morning to now", "Notice moments of consolation (closeness) and desolation (distance from God)", "Choose one moment to pray about — gratitude, confession, or petition", "Ask for grace for tomorrow"],
  },
  {
    name: "Fixed-Hour Prayer",
    subtitle: "The Liturgy of the Hours",
    description: "One of Christianity's oldest prayer practices: praying at fixed times throughout the day, structured by psalms, Scripture readings, and short collects. Historically at the third, sixth, and ninth hours (9am, noon, 3pm), plus morning and evening offices. Creates a day rhythmically interrupted by God rather than prayer squeezed into whatever gap remains. Apps like Daily Office and Pray-As-You-Go make this accessible.",
    best: "For those who want deep historical roots; for those drawn to liturgical prayer; for those whose work days are fragmented",
    steps: ["Choose your hours: morning, midday, evening at minimum", "Use a structured resource: Book of Common Prayer, Phyllis Tickle's Divine Hours", "Pray the psalm for the hour — don't rush it", "Offer a brief collect for the specific time of day"],
  },
  {
    name: "Breath Prayer",
    subtitle: "The Jesus Prayer Tradition",
    description: "A short prayer phrase tied to breathing — inhale the first half, exhale the second — designed to be prayed repeatedly throughout the day. The classical form is the Jesus Prayer: 'Lord Jesus Christ' (inhale) 'have mercy on me' (exhale). But any short prayer tied to Scripture works. Over time, the rhythm of breathing and praying begin to merge — approaching Paul's vision of 'pray without ceasing.'",
    best: "For anxiety or fragmented days; for commuting or walking; for integrating prayer into physical activity",
    steps: ["Choose your breath prayer: a short phrase from Scripture or a simple petition", "Inhale the first half, exhale the second half", "Let the repetition quiet — not occupy — your mind", "Use it during transitions: commuting, cooking, exercising, waking"],
  },
  {
    name: "Intercessory Prayer",
    subtitle: "Praying for Others",
    description: "Sustained, named, specific prayer for other people and for the world. James 5:16 promises that 'the prayer of a righteous person is powerful and effective.' The intercessor brings others before God — not vaguely ('bless everyone') but specifically ('Sarah is waiting for test results; give her peace and the doctors wisdom'). Keeping a prayer list transforms intercession from good intention to actual practice.",
    best: "For those with pastoral hearts; for small group leaders; for anyone wanting prayer to be outward-facing",
    steps: ["Maintain a prayer list — names, needs, dates you started praying", "Pray specifically: name the need, the person, the desired outcome", "Follow up: ask how the situation developed", "Record answers — they build faith for future intercession"],
  },
];

const LORDS_PRAYER = [
  { phrase: "Our Father in heaven", meaning: "Relationship before request. 'Our' places us in community — no private Christianity. 'Father' is intimate access. 'In heaven' — transcendent, sovereign, above all circumstances. The first word of prayer is relationship.", application: "Begin by placing yourself in relationship: 'You are my Father. I am your child. I come to you in that confidence.'" },
  { phrase: "Hallowed be your name", meaning: "Adoration precedes petition. Before asking for anything, Jesus teaches us to honor God's name — to treat him as holy, set apart, worthy. This is not flattery to soften up God; it is aligning our perspective. When we hallow God's name, our requests are shaped by his worth.", application: "Speak God's character back to him: 'Holy, faithful, good, sovereign. You are worthy of all glory.'" },
  { phrase: "Your kingdom come, your will be done", meaning: "The great surrender. Jesus doesn't say 'may my kingdom come' but 'your kingdom.' This is the prayer that costs the most and gives the most: submission to God's agenda over ours, God's timetable over ours, God's way over ours.", application: "Name what you are holding tightly and release it: 'Not my career, my plans, my preferences — your kingdom.'" },
  { phrase: "Give us today our daily bread", meaning: "Daily dependence, not stockpiled security. Jesus teaches a daily asking — today's bread. This is manna-spirituality: trust the Father's provision one day at a time. It assumes we cannot live without God's ongoing supply.", application: "Make your needs specific and present: 'Today I need... I am dependent on you for...'" },
  { phrase: "Forgive us our debts", meaning: "The only petition Jesus elaborates on after the prayer (Matthew 6:14-15). The request for forgiveness is linked to our practice of forgiveness — not because we earn pardon by forgiving others, but because receiving forgiveness and withholding it from others is a contradiction.", application: "Name what you need forgiveness for. Name who you need to forgive. Bring both to God." },
  { phrase: "Lead us not into temptation", meaning: "The acknowledgment of vulnerability. We are not strong enough on our own. We need God's guidance away from situations that overwhelm us and God's protection from the spiritual forces that oppose us. This petition keeps us from presumption.", application: "Name the specific temptations you are vulnerable to. Ask for God's leading and protection specifically." },
  { phrase: "Yours is the kingdom, power, and glory", meaning: "The closing doxology returns to where prayer began — with God's sovereignty and worth. Prayer begins with relationship and ends with worship. The world is ultimately God's — this is the bedrock confidence under all petition.", application: "Close in worship: affirm that the outcome belongs to God, that his purposes cannot fail." },
];

const DAILY_PRAYER = [
  { time: "Morning", anchor: "6-8am", theme: "Orientation", description: "The morning office is the oldest structured prayer in Jewish and Christian tradition. Before the day takes you, give the day to God. The morning prayer orients the whole day: who am I? Whose am I? What am I called to today?", prayers: ["A psalm of orientation (Psalm 5, 63, or 143)", "Surrender of the day ahead: 'Lord, this day belongs to you'", "The Lord's Prayer as the frame for the day", "Brief intercession for those you will encounter"] },
  { time: "Midday", anchor: "12pm", theme: "Reconnection", description: "The third-hour prayer (9am) and sixth-hour prayer (noon) were practiced by the early church from the beginning (Acts 3:1). A midday pause is counter-cultural and transforming. Even 5 minutes re-centers what the morning has scattered.", prayers: ["A breath prayer to re-enter God's presence", "A brief examination: how has the morning gone with God?", "Intercession for whatever is before you in the afternoon", "A verse carried from morning to meditate on"] },
  { time: "Evening", anchor: "6-8pm", theme: "Review", description: "The Examen tradition invites an evening review of the day — not guilt-driven replay but attentive gratitude and honest confession. What did I experience of God today? Where did I miss him? What needs to be confessed and released before rest?", prayers: ["Give thanks for three specific things from the day", "The Examen: review the day slowly for consolation and desolation", "Confession: name what needs to be released", "Intercession for family, community, those in need"] },
  { time: "Night", anchor: "Bedtime", theme: "Release", description: "Compline — the night prayer — has been prayed by monks for centuries before sleep. Its themes are surrender and protection. The Christian sleeps as one who trusts: the world does not depend on my wakefulness. The Keeper of Israel neither slumbers nor sleeps (Psalm 121).", prayers: ["Psalm 4 or 91 — night psalms of trust", "'Into your hands I commit my spirit' (Psalm 31:5)", "A prayer for those sleeping in danger or grief", "Gratitude for the day just completed"] },
];

const VIDEOS = [
  { id: "dy9nwe9zeU8", title: "How to Have a Daily Prayer Life", teacher: "Timothy Keller" },
  { id: "OqwbFGoRYVo", title: "What Is Prayer?", teacher: "Tim Mackie (The Bible Project)" },
  { id: "npEDqbE6faE", title: "Praying the Psalms", teacher: "N.T. Wright" },
  { id: "F1Cz95NtJ4c", title: "Learning to Pray", teacher: "John Piper" },
  { id: "W6NjAG4qp4M", title: "The Prayer of Examen", teacher: "James Martin SJ" },
  { id: "krxcqH522uo", title: "Fixed Hour Prayer and the Daily Office", teacher: "Pete Greig" },
];

export default function PrayerLifePage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_prayer-life_tab", "why");
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [selectedPhrase, setSelectedPhrase] = useState(0);

  const [plEntries, setPlEntries] = useState<{ id: string; date: string; method: string; scripture: string; what: string; heard: string }[]>(() => {
    try { const s = localStorage.getItem("vine_pl_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [plForm, setPlForm] = useState({ method: "ACTS Model", scripture: "", what: "", heard: "" });
  const [plSaved, setPlSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_pl_entries", JSON.stringify(plEntries)); }, [plEntries]);
  function savePlEntry() {
    if (!plForm.what.trim()) return;
    setPlEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...plForm }, ...prev]);
    setPlForm({ method: "ACTS Model", scripture: "", what: "", heard: "" });
    setPlSaved(true); setTimeout(() => setPlSaved(false), 2000);
  }
  function deletePlEntry(id: string) { setPlEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0d0d1f 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 20px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "6px 18px", color: PURPLE, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>
            Spiritual Disciplines
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 6vw, 58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.5px" }}>
            Building a Prayer Life
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 28px" }}>
            Prayer is not a technique to be mastered or a performance to be perfected — it is a relationship to be sustained. The deepest prayer lives are built not on heroics but on showing up, day after day, to the Father who is always present.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {["Relationship with God", "ACTS Model", "Fixed-Hour Prayer", "Intercession"].map(tag => (
              <span key={tag} style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}30`, color: GREEN, borderRadius: 12, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 36, marginBottom: 36, background: CARD, borderRadius: 14, padding: 6, border: `1px solid ${BORDER}` }}>
          {([ { id: "why" as Tab, label: "Why Prayer" }, { id: "methods" as Tab, label: "Methods" }, { id: "lords_prayer" as Tab, label: "The Lord's Prayer" }, { id: "acts" as Tab, label: "ACTS Model" }, { id: "daily" as Tab, label: "Through the Day" }, { id: "journal" as Tab, label: "Prayer Journal" }, { id: "videos" as Tab, label: "Videos" } ]).map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 10, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* WHY PRAYER */}
        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Prayer is the most basic act of the Christian life and, for most Christians, the most neglected. We know we should pray more. We feel guilty when we don't. And yet we continue to find it difficult, distracted, and dry. The problem is usually not technique — it is theology. We don't pray because we don't actually believe it changes anything, or because we don't believe God is actually listening, or because we have reduced prayer to asking for things and run out of things to ask for. The six foundations below address the why of prayer — the convictions that must undergird the practice.
              </p>
            </div>
            {WHY_PRAYER.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 16, transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${GREEN}50`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, gap: 12 }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontWeight: 700, fontSize: 20, margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "4px 12px", borderRadius: 12, fontSize: 11, fontWeight: 700, flexShrink: 0, whiteSpace: "nowrap" }}><VerseRef reference={item.verse} /></span>
                </div>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}18, ${PURPLE}10)`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: "28px 32px", marginTop: 8 }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GREEN, fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Prayer Gauge</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                E.M. Bounds, who prayed from 4am to 7am for the last twenty years of his life, put it bluntly: &ldquo;The measure of any Christian's spiritual life is not what they say or even do, but how much and how seriously they pray.&rdquo; His indictment still cuts: much that is called Christian ministry is activity that does not require God. Prayer is the one ministry that does. You cannot pray without depending on God. You cannot pray without admitting your need. You cannot pray without believing he is there and listening. The decision to pray is already an act of faith.
              </p>
            </div>
          </div>
        )}

        {/* METHODS */}
        {activeTab === "methods" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Different methods serve different seasons and personalities. No single method is the right one for all people at all times. The beginner may need the ACTS model&apos;s structure; the experienced pray-er may need contemplative silence. The anxious commuter may need breath prayer; the small group leader may need intercession. Explore the methods below and use what serves your relationship with God.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {METHODS.map((m, i) => (
                <button type="button" key={i} onClick={() => setSelectedMethod(i)}
                  style={{ padding: "9px 16px", borderRadius: 20, border: `1px solid ${selectedMethod === i ? GREEN : BORDER}`, background: selectedMethod === i ? `${GREEN}18` : "transparent", color: selectedMethod === i ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}>
                  {m.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GREEN, fontSize: 26, fontWeight: 700, marginBottom: 6 }}>{METHODS[selectedMethod].name}</h2>
              <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 18 }}>{METHODS[selectedMethod].subtitle}</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 24 }}>{METHODS[selectedMethod].description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Steps</div>
                  {METHODS[selectedMethod].steps.map((step, si) => (
                    <div key={si} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: GREEN, color: BG, fontSize: 11, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{si + 1}</div>
                      <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{step}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Best For</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{METHODS[selectedMethod].best}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LORD'S PRAYER */}
        {activeTab === "lords_prayer" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 24, fontWeight: 700, marginBottom: 14 }}>A School of Prayer</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
                The Lord&apos;s Prayer is not primarily a prayer to be recited (though reciting it is not wrong). Jesus gave it in response to the disciples&apos; request: &ldquo;Lord, teach us to pray&rdquo; (Luke 11:1). It is a template — a school of prayer. Each phrase is a category of prayer, a window into a different room of relationship with God. The person who prays the Lord&apos;s Prayer attentively, even briefly, covers the full range of what it means to pray.
              </p>
              <blockquote style={{ margin: 0, padding: "14px 20px", borderLeft: `3px solid ${GOLD}`, background: `${GOLD}10`, borderRadius: "0 10px 10px 0" }}>
                <p style={{ color: TEXT, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  &ldquo;Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one.&rdquo; &mdash; Matthew 6:9-13
                </p>
              </blockquote>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {LORDS_PRAYER.map((item, i) => (
                <button type="button" key={i} onClick={() => setSelectedPhrase(i)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedPhrase === i ? GOLD : BORDER}`, background: selectedPhrase === i ? `${GOLD}18` : "transparent", color: selectedPhrase === i ? GOLD : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s" }}>
                  {i + 1}. {item.phrase.substring(0, 20)}{item.phrase.length > 20 ? "..." : ""}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: GOLD, fontSize: 22, fontWeight: 700, marginBottom: 16, fontStyle: "italic" }}>
                &ldquo;{LORDS_PRAYER[selectedPhrase].phrase}&rdquo;
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Meaning</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{LORDS_PRAYER[selectedPhrase].meaning}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Application</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{LORDS_PRAYER[selectedPhrase].application}</p>
                </div>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginTop: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 14 }}>Using the Lord&apos;s Prayer as a Framework</h3>
              <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.8, marginBottom: 12 }}>
                Martin Luther used the Lord&apos;s Prayer as a daily devotional framework — not simply reciting it but expanding each petition into full prayer. He called this &ldquo;garland-making&rdquo;: using the petitions as starting points from which prayer naturally flows. A 20-minute prayer using this method might spend 2-3 minutes on each phrase, letting it open into praise, confession, or supplication as appropriate.
              </p>
              <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.8, margin: 0 }}>
                The Desert Fathers and later the hesychast tradition found similar depth in short, repeated phrases. The Jesus Prayer — &ldquo;Lord Jesus Christ, Son of God, have mercy on me, a sinner&rdquo; — draws from the Lord&apos;s Prayer&apos;s petition for mercy and the publican&apos;s prayer of Luke 18, creating a breath prayer that encompasses confession, adoration, and dependence in a single sentence.
              </p>
            </div>
          </div>
        )}

        {/* ACTS MODEL */}
        {activeTab === "acts" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 24, fontWeight: 700, marginBottom: 14 }}>The ACTS Prayer Framework</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 12 }}>
                ACTS — Adoration, Confession, Thanksgiving, Supplication — is probably the most widely taught structure for daily prayer in evangelical Christianity. Its genius is its sequence: it begins not with our needs but with God&apos;s character. By the time we arrive at Supplication, our requests have been shaped by who God is, our honest acknowledgment of our failures, and our recognition of what he has already given.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                The model is flexible, not mechanical. Some mornings Adoration will expand into 15 minutes; other mornings it will be 3. Confession may take longer some days. Supplication may be brief when you are at peace, or extensive when you are carrying heavy burdens. Use the structure as scaffolding — the building is the relationship.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              {[
                { letter: "A", word: "Adoration", color: GOLD, desc: "Praise God for who he is — not what he has done for you, but his character, nature, and attributes. Use the names of God. Read a psalm of praise. Sing. The practice of adoration recalibrates our vision: we begin by seeing God before we see our problems.", example: "'Lord, you are holy and just. You are the God who made the heavens and holds every atom in existence. You are the Father who ran to welcome the prodigal. Before I ask for anything, I want to acknowledge who you are.'" },
                { letter: "C", word: "Confession", color: "#EF4444", desc: "Honest acknowledgment of sin — specific, not generic. 'Forgive me for everything I've done wrong' is not confession; it is evasion. Name what you did, what you should have done and didn't, the patterns you are still caught in. Confession is not self-punishment but honesty before a God who already knows and already forgives in Christ.", example: "'Lord, I confess that this week I spoke harshly to my family when I was stressed. I confess that I chose comfort over obedience in this situation. I confess the anxiety that tells me you're not enough.'" },
                { letter: "T", word: "Thanksgiving", color: GREEN, desc: "Specific gratitude for what God has done and given. Not vague appreciation but named gifts: the conversation yesterday, the health in your body, the provision that came through, the relationship that was repaired. Gratitude that names specifics builds memory of God's faithfulness — the foundation of faith for future requests.", example: "'Thank you for the conversation with Sarah that opened unexpectedly. Thank you that the test results came back clear. Thank you for giving me a community that holds me. Thank you for yesterday's sunset.'" },
                { letter: "S", word: "Supplication", color: PURPLE, desc: "Bringing your requests: for yourself, for others, for the world. By the time you reach Supplication, having praised God, honestly confessed, and counted your blessings, your requests are shaped differently. Supplication includes personal petition, intercession for others (by name), and prayer for the world — missions, suffering, justice.", example: "'I ask for wisdom in this decision I'm facing. I bring before you my friend who is in the hospital. I pray for the persecuted church in North Korea. I ask for your kingdom to come in my neighborhood.'" },
              ].map((item) => (
                <div key={item.letter} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = item.color + "50")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: item.color + "20", border: `2px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant, Georgia, serif)", color: item.color, fontSize: 28, fontWeight: 700, flexShrink: 0 }}>{item.letter}</div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 17 }}>{item.word}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.8, marginBottom: 14 }}>{item.desc}</p>
                  <div style={{ background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: item.color, fontSize: 11, fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Example</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 14 }}>Deeper ACTS: Adding Scripture to Each Movement</h3>
              <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.85, marginBottom: 12 }}>
                A powerful enrichment of the ACTS model is to root each movement in Scripture. Before Adoration, read a psalm of praise and let it shape your praise. Before Confession, read a passage that reveals God&apos;s holiness or a searching text like Psalm 139:23-24. For Thanksgiving, review your prayer journal. For Supplication, read a promise of God and pray it back to him.
              </p>
              <p style={{ color: TEXT, fontSize: 14.5, lineHeight: 1.85, margin: 0 }}>
                This Scripture-soaked version of ACTS takes longer — perhaps 30-45 minutes — but produces prayer that is anchored in God&apos;s Word rather than our own mood. It is the difference between a prayer that circles around itself and a prayer that is drawn upward by the Spirit of God speaking through Scripture.
              </p>
            </div>
          </div>
        )}

        {/* PRAYER THROUGH THE DAY */}
        {activeTab === "daily" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 24, fontWeight: 700, marginBottom: 14 }}>Praying the Hours</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 12 }}>
                The Liturgy of the Hours — also called the Divine Office or the Daily Office — is one of Christianity&apos;s oldest prayer structures. Rooted in Jewish practice (Daniel prayed three times a day; Psalm 119:164 mentions &ldquo;seven times a day&rdquo;), it was systematized by the Desert Fathers and the Benedictine tradition, and remains central to monastic life.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                You do not need to pray eight hours a day to benefit from praying the hours. Even four brief pauses — morning, noon, evening, night — transform the texture of a day. Instead of prayer being squeezed into whatever gap remains, the day is rhythmically structured around returning to God. The world is not the background with prayer inserted; God is the background with the world embedded in his presence.
              </p>
            </div>
            {DAILY_PRAYER.map((slot, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < DAILY_PRAYER.length - 1 ? 8 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${GREEN}20`, border: `2px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 12 }}>{slot.time.substring(0, 3)}</div>
                  {i < DAILY_PRAYER.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, margin: "8px 0", minHeight: 30 }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 24px", flex: 1, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                    <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: 0 }}>{slot.time}</h3>
                    <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>{slot.anchor}</span>
                    <span style={{ background: `${GOLD}18`, color: GOLD, padding: "3px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700 }}>{slot.theme}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{slot.description}</p>
                  {slot.prayers.map((prayer, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.65 }}>{prayer}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}18, ${GREEN}10)`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "28px 32px", marginTop: 8 }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", color: TEXT, fontSize: 22, fontWeight: 700, marginBottom: 14 }}>Contemplative Prayer: Beyond Words</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
                Alongside structured prayer, the Christian tradition has always valued contemplative prayer — the simple, silent resting in God&apos;s presence that moves beyond words and requests. Thomas Merton described it as &ldquo;a direct seeking of the face of the invisible and intangible God.&rdquo; John of the Cross, in The Ascent of Mount Carmel, describes the soul&apos;s journey into a prayer that becomes progressively less about its own activity and more about receptivity to God&apos;s action.
              </p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>
                Centering Prayer, as developed by Thomas Keating and Basil Pennington, offers a simple practice: choose a sacred word that symbolizes your consent to God&apos;s presence and action. Sit quietly for 20 minutes. When thoughts arise — and they will — gently return to the sacred word. The point is not achieved stillness but repeated consent. The prayer is simply: I am here. I am open. You are welcome.
              </p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 26px", marginBottom: 28 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Video teachings on building a prayer life — from the theology of prayer to practical methods. These represent a range of traditions: Reformed, Catholic, charismatic, and contemplative. The variety is intentional: no single tradition owns prayer, and each has treasures the others have underemphasized.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${PURPLE}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 17, marginBottom: 14 }}>Recommended Reading on Prayer</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {[
                  { title: "Prayer", author: "Timothy Keller", desc: "The most accessible modern theology of prayer — covers the Psalms, the Lord's Prayer, and the classical tradition." },
                  { title: "Power Through Prayer", author: "E.M. Bounds", desc: "A convicting classic from a man who lived what he wrote. Short, direct, and demanding." },
                  { title: "The Practice of the Presence of God", author: "Brother Lawrence", desc: "The spiritual classic of praying in the midst of ordinary work. Thin, transforming." },
                  { title: "A Praying Life", author: "Paul E. Miller", desc: "Honest, practical, and theologically rich. Addresses the dry and distracted pray-er directly." },
                  { title: "The Divine Hours", author: "Phyllis Tickle", desc: "A beautifully arranged three-volume Daily Office for laypeople. Pray the hours with the church." },
                  { title: "Open Mind, Open Heart", author: "Thomas Keating", desc: "The guide to Centering Prayer from one of its primary teachers in the contemplative tradition." },
                ].map((book, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{book.title}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{book.author}</div>
                    <p style={{ color: MUTED, fontSize: 12.5, lineHeight: 1.65, margin: 0 }}>{book.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Keeping a prayer journal trains attentiveness. You begin to notice what you actually bring to God, what you avoid, and — over time — how he has answered.
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>New Prayer Entry</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Method used</label>
                <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                  {["ACTS Model", "Lectio Divina", "Examen", "Lord's Prayer", "Breath Prayer", "Lament", "Free Prayer"].map(m => (
                    <button type="button" key={m} onClick={() => setPlForm(f => ({ ...f, method: m }))}
                      style={{ padding: "6px 12px", borderRadius: 20, border: `1px solid ${plForm.method === m ? PURPLE : BORDER}`, background: plForm.method === m ? `${PURPLE}20` : "transparent", color: plForm.method === m ? PURPLE : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Scripture (if any)</label>
                <input value={plForm.scripture} onChange={e => setPlForm(f => ({ ...f, scripture: e.target.value }))} placeholder="e.g. Psalm 23, Matthew 6:9-13..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What I prayed</label>
                <textarea value={plForm.what} onChange={e => setPlForm(f => ({ ...f, what: e.target.value }))} rows={3}
                  placeholder="What did you bring before God? What did you confess, ask, thank him for?"
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What I heard or sensed</label>
                <textarea value={plForm.heard} onChange={e => setPlForm(f => ({ ...f, heard: e.target.value }))} rows={2}
                  placeholder="A sense of peace, a word, Scripture that came to mind, silence..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={savePlEntry}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {plSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {plEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Prayer History ({plEntries.length})</h3>
                {plEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deletePlEntry(e.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{e.method}</span>
                      {e.scripture && <span style={{ color: GOLD, fontSize: 12, fontWeight: 600 }}>{e.scripture}</span>}
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    </div>
                    {e.what && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>{e.what}</p>}
                    {e.heard && <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>{e.heard}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
