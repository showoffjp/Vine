"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "lordsprayer", label: "Lord's Prayer" },
  { id: "acts", label: "ACTS Model" },
  { id: "types", label: "Types of Prayer" },
  { id: "psalms", label: "Praying the Psalms" },
  { id: "unanswered", label: "Unanswered Prayer" },
  { id: "practice", label: "Daily Practice" },
  { id: "journal", label: "Prayer Journal" },
  { id: "videos", label: "Videos" },
];

const LORDS_PRAYER_LINES = [
  {
    line: "Our Father in heaven",
    color: GOLD,
    body: "Prayer begins with relationship, not request. 'Father' is not a generic address — it is the most intimate word Jesus taught us to use for God. The God of the universe is addressed as Abba, Father. 'In heaven' does not locate God as distant but as transcendent — he is not limited to the earthly, finite, breakable. The word 'Our' is also critical: the Lord's Prayer is not merely personal prayer. It is communal — we come before God as a people, not isolated individuals.",
  },
  {
    line: "Hallowed be your name",
    color: PURPLE,
    body: "The first petition is not for ourselves but for God's reputation. 'Hallowed' means 'treated as holy, regarded as sacred.' Before we bring any request, we align ourselves with God's glory as the primary concern. This is the Shema applied to prayer: the first movement of the heart is reverence, not petition. Jesus himself modeled this pattern in Gethsemane — 'not as I will, but as you will.' The first thing prayer does is reorder our priorities.",
  },
  {
    line: "Your kingdom come, your will be done",
    color: BLUE,
    body: "The second petition expands the first: God's kingdom is the sphere where his name is hallowed, his will done. 'Your will be done on earth as it is in heaven' is not passive resignation — it is an active prayer for the transformation of the earthly to match the heavenly. Heaven is where God's will is done perfectly; we are praying for that reality to break into the present. This is the eschatological core of the Lord's Prayer — we are citizens of a kingdom not yet fully here, praying for its completion.",
  },
  {
    line: "Give us this day our daily bread",
    color: GREEN,
    body: "Having aligned ourselves with God's glory and kingdom, we are now free to bring our needs. 'Daily bread' is deliberately modest — not a month's supply, not a guarantee against future want, but today's provision. The model is the manna in the wilderness: gather what you need today. Jesus teaches us to pray for dependence, not security. The one who prays for daily bread is the one who returns to the Father every day. The prayer that could be answered once is designed to keep us in daily relationship.",
  },
  {
    line: "Forgive us our debts, as we forgive",
    color: RED,
    body: "This is the only line of the Lord's Prayer Jesus expands on after reciting it (Matt 6:14–15). The forgiveness we ask for is explicitly linked to the forgiveness we extend. This is not a transaction — we do not earn forgiveness by forgiving others. But receiving God's forgiveness genuinely transforms a person; those who have truly experienced mercy cannot maintain unforgiveness toward others. If I am clinging to resentment, I may need to ask whether I have truly received what I am asking God for.",
  },
  {
    line: "Lead us not into temptation",
    color: TEAL,
    body: "The final petition is for protection, not rescue. We ask not only to be delivered from evil after falling but to be led away from the path that leads there. James 1:13 says God does not tempt anyone — so this petition is not asking God to stop doing something he does. It is asking for his guidance: lead us by paths where we are not exposed to more than we can bear (cf. 1 Cor 10:13). The person who prays this honestly is also asking: where am I not trusting you? What am I moving toward that leads to destruction?",
  },
];

const ACTS_SECTIONS = [
  {
    letter: "A",
    color: GOLD,
    title: "Adoration",
    body: "Begin by focusing on who God is, not what you need. Read a psalm of praise (Ps 100, 103, 145). Name specific attributes: his holiness, faithfulness, power, love. The practice of adoration interrupts the self-centered gravity that pulls prayer toward petition. When we spend time contemplating God's greatness, our problems retain their proper proportion. Many people find that spending five to ten minutes in adoration before anything else transforms the shape of their whole prayer time.",
    example: "Lord, you are holy and your love endures forever. You created everything that exists and you hold all things together. You are faithful when I am not. You are good even when I cannot see the good in my circumstances.",
  },
  {
    letter: "C",
    color: TEAL,
    title: "Confession",
    body: "After adoration, we see ourselves more clearly. Confession is not the recitation of a list of failures — it is bringing specific sin before the God who already knows, to maintain the transparency that makes relationship possible. Psalm 51 models this: honest, specific, focused on God's mercy and character rather than our track record. 1 John 1:9 promises that 'if we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' Confession restores alignment.",
    example: "Lord, I confess my impatience this week. I confess that I am trusting in my own ability to control outcomes rather than surrendering to you. I confess resentment I have been carrying toward ___.",
  },
  {
    letter: "T",
    color: GREEN,
    title: "Thanksgiving",
    body: "Gratitude is a discipline, not just a feeling. Paul commands it: 'Give thanks in all circumstances, for this is God's will for you in Christ Jesus' (1 Thess 5:18). Thanksgiving in prayer is concrete — naming specific gifts, specific moments of grace, specific ways God has been faithful. Philippians 4:6–7 links gratitude directly to peace: 'in everything by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and minds.' The peace follows the gratitude.",
    example: "Thank you for sleep, for the people around me, for the fact that you are with me. Thank you for what you are doing in ___'s life. Thank you that your mercies are new this morning.",
  },
  {
    letter: "S",
    color: PURPLE,
    title: "Supplication",
    body: "Now bring your requests — for yourself and others. Supplication is both personal petition and intercession. Jesus teaches persistence: the friend at midnight (Luke 11:5–8), the persistent widow (Luke 18:1–8). These parables do not teach that God is reluctant and must be worn down — they teach that persistent prayer is the shape of faith in the living God. Bring specific requests. Keep a running list. Watch what God does with it over months and years.",
    example: "Lord, I ask for healing for ___. I ask for wisdom in this situation. I intercede for my family. I ask for open doors in ___. I hold before you the pain of ___.",
  },
];

const PRAYER_TYPES = [
  { icon: "🙌", color: GOLD, title: "Praise and Worship", body: "Prayer that focuses on who God is rather than what he has done or what we need. Modeled in Psalms 8, 19, 29, 100, 145–150. The practice of pure adoration — spending time saying who God is without asking for anything — is one of the most transformative prayer disciplines." },
  { icon: "😔", color: BLUE, title: "Lament and Complaint", body: "The prayer of grief, confusion, or protest addressed to God. One-third of the Psalter is lament. Modeled in Psalms 13, 22, 88, the book of Job, Lamentations. Bringing honest suffering to God is not faithlessness — it is intimacy. The lament psalm always retains the posture of address: I am talking to you." },
  { icon: "🤲", color: GREEN, title: "Intercession", body: "Praying on behalf of others. Modeled by Moses interceding for Israel (Ex 32:11–14), Samuel interceding for the people (1 Sam 7:5), Jesus interceding for the disciples (John 17), Paul interceding for the churches (Phil 1:9–11). The great intercessors of Scripture are those who stand between God's justice and human need, holding both." },
  { icon: "🔄", color: TEAL, title: "Persistence and Importunity", body: "Praying again and again for the same thing. Jesus teaches this in the parable of the persistent widow (Luke 18:1–8): God will vindicate his elect who cry out to him day and night. Paul prayed three times for his thorn to be removed (2 Cor 12:8). The answer he received was not removal but grace for endurance: 'My grace is sufficient for you' (12:9). Persistent prayer is not twisting God's arm — it is trusting his love enough to keep bringing the same burden." },
  { icon: "📖", color: PURPLE, title: "Meditative or Lectio Divina", body: "Reading Scripture slowly and prayerfully, pausing to let a phrase or image stay with you. The ancient practice of Lectio Divina (sacred reading) involves reading, meditation (rumination on the text), prayer (responding to what you heard), and contemplation (resting in God's presence). The goal is encounter, not information." },
  { icon: "🌿", color: RED, title: "Contemplative Prayer", body: "Silent, receptive prayer focused on God's presence rather than words or requests. Practiced by the Desert Fathers, Thomas Merton, and the contemplative tradition. Not the same as Eastern meditation (which empties the mind) — contemplative Christian prayer is resting attentively in the presence of a personal God. Psalm 46:10: 'Be still and know that I am God.'" },
];

const PSALM_PRAYERS = [
  { ps: "Psalm 23", theme: "Trust in God's guidance and provision", use: "When anxious about the future or walking through difficulty" },
  { ps: "Psalm 51", theme: "Confession and restoration", use: "After sin, when you need to clear the air with God" },
  { ps: "Psalm 63", theme: "Longing for God's presence", use: "When spiritually dry or in a period of waiting" },
  { ps: "Psalm 91", theme: "Protection and refuge", use: "When facing fear, danger, or spiritual warfare" },
  { ps: "Psalm 103", theme: "Praise for God's mercy and forgiveness", use: "When you need to remember who God is and what he has done" },
  { ps: "Psalm 139", theme: "God's intimate knowledge of you", use: "When feeling unseen, unknown, or insignificant" },
];

const UNANSWERED_SECTIONS = [
  {
    title: "Jesus and Paul Both Faced It",
    body: "Jesus prayed three times in Gethsemane for the cup to be removed — it was not (Matt 26:39–44). Paul prayed three times for his thorn in the flesh to be removed — it was not (2 Cor 12:8). If the Son of God and the greatest apostle encountered unanswered prayer, the experience is not a sign of spiritual failure. It is a normal part of the life of faith. The question is not 'why isn't God answering?' but 'what is God doing in the not-answering?'",
  },
  {
    title: "Categories of God's Response",
    body: "The tradition identifies at least three categories: Yes (the request is granted), No (the request is denied — Paul's thorn), and Wait (the timing is not yet — often experienced as silence). The hardest to receive is Not now/Not in this form, because it requires trusting that God's perspective on what is best differs from our own. Jesus's own teaching: 'your Father knows what you need before you ask him' (Matt 6:8). He is not ignorant; he is working with a different timeline and a fuller picture.",
  },
  {
    title: "The Sovereignty Problem",
    body: "If God is sovereign and good, why pray? The question assumes prayer is primarily informational — informing God of needs he doesn't know about, or changing a predetermined outcome. But Scripture presents prayer as relational and transformative: it changes the person who prays, it involves us in God's purposes (God ordains both the ends and the means, and prayer is a means), and it expresses trust and dependence. The Christian tradition has historically held both: God's sovereignty and our genuine agency in prayer are not in competition.",
  },
  {
    title: "When God Seems Silent",
    body: "The silence of God is one of the most common experiences in the Christian life. Psalms 13, 22, 88 model honest address in the silence. The mystics describe the dark night. Mother Teresa experienced decades of silence. Waiting well — continuing to pray, continuing to obey, continuing to trust in the character of God established in Scripture — is itself a form of faith. 'My soul waits for the LORD more than watchmen wait for the morning' (Ps 130:6). The morning always comes.",
  },
];

const DAILY_PRACTICE = [
  { icon: "🌅", color: GOLD, title: "Morning Prayer", body: "Begin the day with acknowledgment of God before engaging the world. Even five minutes of intentional morning prayer reorients the day. Read one psalm, name a few things you are grateful for, bring one concern. The ancient practice of the Daily Office — fixed prayer at set hours — structures the whole day around the recognition of God's presence." },
  { icon: "📝", color: BLUE, title: "Prayer List", body: "Keep a written record of prayer requests and answers. This does two things: it makes your intercession concrete (instead of vague 'be with everyone'), and over time it builds a tangible record of God's faithfulness. Many people divide their list into daily intercessions (family, closest relationships) and rotating intercessions (rotating through others across the week)." },
  { icon: "🌙", color: PURPLE, title: "Evening Examen", body: "A brief evening review (from the Ignatian tradition): Where did I see God today? Where did I miss him? What am I grateful for? Where did I fall short? What do I want to bring to tomorrow? The examen is not self-criticism — it is attentive review that cultivates the habit of noticing God's presence throughout ordinary days." },
  { icon: "⏱️", color: TEAL, title: "Breath Prayers", body: "Short, rhythmic prayers that can be prayed throughout the day, often tied to breathing. The earliest version: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner' — the Jesus Prayer from the Eastern tradition. Modern equivalents: 'I am yours.' 'You are enough.' 'Come, Holy Spirit.' These short prayers sanctify ordinary moments and maintain an ongoing posture of attention toward God." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type PrayTab = "overview" | "lordsprayer" | "acts" | "types" | "psalms" | "unanswered" | "practice" | "journal" | "videos";

export default function HowToPrayGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<PrayTab>("vine_pray_tab", "overview");
  const [openLP, setOpenLP] = useState<string | null>(null);
  const [openACTS, setOpenACTS] = useState<string | null>(null);
  const [openUnans, setOpenUnans] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_pray_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_pray_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = GREEN;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(58,125,86,0.15) 0%, rgba(107,79,187,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🙏</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>How to Pray</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              A practical and theological guide to prayer — the Lord&apos;s Prayer line by line, the ACTS model, types of prayer, praying the Psalms, dealing with silence, and building a daily prayer practice.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Lord&apos;s Prayer", color: GOLD }, { label: "ACTS Model", color: BLUE }, { label: "Daily Practice", color: GREEN }, { label: "Spiritual Disciplines", color: PURPLE }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: b.label }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as PrayTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ color: GREEN, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", marginBottom: "1rem" }}>Prayer: Conversation With the Living God</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "0.75rem" }}>Prayer is not a technique or a discipline designed to produce spiritual feelings. It is conversation with the living God who hears, knows, and responds. That is the most extraordinary claim Christianity makes about prayer — not that prayer produces psychological calm or mental clarity, but that the God who created the universe actually listens to his children and acts.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>The disciples asked Jesus to teach them to pray (Luke 11:1) — not to explain prayer theoretically, but to show them how. This guide follows his lead: starting with what Jesus taught (the Lord&apos;s Prayer), building toward the broader landscape of biblical prayer, and offering practical tools for a sustainable prayer life.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "📖", color: GOLD, title: "Matthew 6:9–13", desc: "The Lord's Prayer — Jesus's template for all prayer" },
                  { icon: "🔄", color: GREEN, title: "ACTS Model", desc: "Adoration, Confession, Thanksgiving, Supplication" },
                  { icon: "🎵", color: BLUE, title: "The Psalms", desc: "150 prayers across every human experience" },
                  { icon: "🕯️", color: PURPLE, title: "Daily Office", desc: "Fixed-hour prayer that structures the whole day around God" },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.25rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.4rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: 8 }}>Luke 11:1 — The Request That Changed Everything</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "0.95rem" }}>
                  &quot;One of his disciples said to him, &apos;Lord, teach us to pray, as John taught his disciples.&apos; And he said to them, &apos;When you pray, say...&apos;&quot;
                </div>
              </div>
            </div>
          )}

          {activeTab === "lordsprayer" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.75rem" }}>The Lord&apos;s Prayer — Line by Line</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>Matthew 6:9–13. Jesus gives this prayer not as a recitation to be repeated mechanically but as a pattern — &apos;pray like this.&apos; Every line is a theology lesson and a spiritual posture.</p>
                <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}33`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: TEXT, lineHeight: 2, fontStyle: "italic", fontSize: "0.95rem" }}>
                    Our Father in heaven,<br />
                    hallowed be your name.<br />
                    Your kingdom come,<br />
                    your will be done,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;on earth as it is in heaven.<br />
                    Give us this day our daily bread,<br />
                    and forgive us our debts,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;as we also have forgiven our debtors.<br />
                    And lead us not into temptation,<br />
                    but deliver us from evil.
                  </div>
                </div>
              </div>
              {LORDS_PRAYER_LINES.map(l => (
                <div key={l.line} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenLP(openLP === l.line ? null : l.line)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: l.color, fontWeight: 700, fontStyle: "italic" }}>&quot;{l.line}&quot;</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openLP === l.line ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openLP === l.line && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{l.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "acts" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: BLUE, marginBottom: "0.5rem" }}>The ACTS Prayer Model</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>ACTS is a simple framework for structuring prayer time: Adoration, Confession, Thanksgiving, Supplication. It moves from God-centered to self-aware to grateful to needy — a healthy sequence for approaching the Father.</p>
              </div>
              {ACTS_SECTIONS.map(s => (
                <div key={s.letter} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenACTS(openACTS === s.letter ? null : s.letter)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ background: `${s.color}22`, color: s.color, border: `1px solid ${s.color}44`, borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>{s.letter}</span>
                      <span style={{ color: s.color, fontWeight: 700, fontSize: "1rem" }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openACTS === s.letter ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openACTS === s.letter && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "1rem" }}>{s.body}</p>
                      <div style={{ background: `${s.color}11`, border: `1px solid ${s.color}33`, borderRadius: 8, padding: "0.75rem 1rem" }}>
                        <div style={{ color: s.color, fontSize: "0.75rem", fontWeight: 700, marginBottom: 4 }}>EXAMPLE</div>
                        <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>{s.example}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "types" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {PRAYER_TYPES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "psalms" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: BLUE, marginBottom: "0.5rem" }}>Praying the Psalms</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The Psalter is the church&apos;s prayer book. 150 psalms cover every human experience — praise, lament, confession, gratitude, petition, confusion, joy. The ancient practice of praying through the Psalms regularly (monastic communities prayed the whole Psalter every week) ensures you are never stuck with only the emotional register you currently feel — you are pulled into the full range of what it means to live before God.</p>
              </div>
              {PSALM_PRAYERS.map(p => (
                <div key={p.ps} style={{ ...card, padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: `${BLUE}22`, color: BLUE, border: `1px solid ${BLUE}44`, borderRadius: 8, padding: "0.5rem 0.75rem", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap", flexShrink: 0 }}>{p.ps}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 600, marginBottom: "0.25rem" }}>{p.theme}</div>
                    <div style={{ color: MUTED, fontSize: "0.85rem" }}>{p.use}</div>
                  </div>
                </div>
              ))}
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h3 style={{ color: BLUE, fontWeight: 700, marginBottom: "0.75rem" }}>How to Pray a Psalm</h3>
                <ol style={{ color: MUTED, lineHeight: 2, fontSize: "0.9rem", paddingLeft: "1.2rem" }}>
                  <li>Read the psalm slowly once through for meaning.</li>
                  <li>Read it again slowly, pausing wherever a phrase resonates or stings.</li>
                  <li>Where it is praise — offer praise. Where it is confession — confess. Where it is lament — bring your own lament to God using the psalm&apos;s words.</li>
                  <li>End by staying with whatever phrase remains most alive, and simply be present with God in it.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === "unanswered" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: PURPLE, marginBottom: "0.5rem" }}>When God Seems Not to Answer</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Unanswered prayer is one of the most common crises of faith. The person who has prayed earnestly for healing, for a changed relationship, for a prodigal child, for an end to suffering — and has not received what they asked — deserves honest engagement with the question.</p>
              </div>
              {UNANSWERED_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenUnans(openUnans === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: PURPLE, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openUnans === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openUnans === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "practice" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "0.5rem" }}>Building a Daily Prayer Practice</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Prayer is a skill that grows with practice. Start small and sustainable rather than ambitious and abandoned. Five consistent minutes beats fifty inconsistent minutes every time.</p>
              </div>
              {DAILY_PRACTICE.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                    <h3 style={{ color: item.color, fontWeight: 700 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "0.75rem" }}>Prayer Journal</h2>
                <p style={{ color: MUTED, marginBottom: "1.5rem" }}>Record what you are praying for and what God does. Over months, this becomes a record of faithfulness that strengthens faith for future seasons.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PASSAGE OR THEME</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Matthew 6:9, Psalm 63, a name you are praying for" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION ON PRAYER</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What are you learning about prayer? What is hard? What has God answered?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>YOUR PRAYER TODAY</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Write your prayer..." rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Entry"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Prayer — Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Practical and theological teaching on prayer from trusted teachers.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "WfBrOmgUn0M", title: "The Lord's Prayer Explained", channel: "Tim Keller" },
                  { id: "2Cb3QTKoTQI", title: "How to Pray — Practical Guide", channel: "Bible Project" },
                  { id: "LRpSP_WDUFE", title: "Why We Pray When God Already Knows", channel: "Desiring God" },
                  { id: "OAG7PbOAimY", title: "Praying the Psalms", channel: "The Bible Explained" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
