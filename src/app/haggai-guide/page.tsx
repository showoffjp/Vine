"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = GOLD;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ruins", label: "The Ruined House" },
  { id: "consider", label: "Consider Your Ways" },
  { id: "glory", label: "Greater Glory" },
  { id: "holiness", label: "Holiness & Defilement" },
  { id: "zerubbabel", label: "The Signet Ring" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type HaggaiTab = "overview" | "ruins" | "consider" | "glory" | "holiness" | "zerubbabel" | "themes" | "journal" | "videos";

const RUINS_SECTIONS = [
  {
    color: RED,
    title: "The Building Has Stopped — Context",
    body: "The exiles had returned from Babylon around 538 BC under Zerubbabel and Joshua the high priest. They had begun rebuilding the Temple in Jerusalem — but opposition from surrounding peoples and discouragement from within had caused them to stop (Ezra 4:24). Sixteen years passed. The people had built their own houses but left God's house in ruins. In 520 BC, Haggai arrived with four messages over four months — and within three weeks, the building had restarted.",
  },
  {
    color: GOLD,
    title: "Is It Time for Your Paneled Houses? — Haggai 1:2–4",
    body: "'Thus says the LORD of hosts: These people say the time has not yet come to rebuild the house of the LORD. Then the word of the LORD came by the hand of Haggai the prophet, Is it time for you yourselves to dwell in your paneled houses, while this house lies in ruins?' The contrast is pointed: paneled (ceiled) houses were a luxury — wainscoting, finished interior walls. The people had prioritized their own comfort while the Temple remained rubble. Haggai's challenge is not merely about a building project; it is about priority and worship.",
  },
  {
    color: TEAL,
    title: "Consider Your Ways — Haggai 1:5–6",
    body: "'Now, therefore, thus says the LORD of hosts: Consider your ways. You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill. You clothe yourselves, but no one is warm. And he who earns wages does so to put them into a bag with holes.' The failure of the harvest, the unsatisfying food and drink, the wages that disappear — Haggai diagnoses these as symptoms of misplaced priorities. When the people neglected God's house, a kind of spiritual and material entropy set in. The phrase 'consider your ways' appears four times in the short book — an invitation to honest self-examination.",
  },
  {
    color: PURPLE,
    title: "The Response — Haggai 1:12–15",
    body: "'Then Zerubbabel the son of Shealtiel, and Joshua the son of Jehozadak, the high priest, with all the remnant of the people, obeyed the voice of the LORD their God, and the words of Haggai the prophet, as the LORD their God had sent him. And the people feared the LORD.' God stirs up the spirit of Zerubbabel and Joshua and all the remnant. Within twenty-three days of Haggai's first message, the people are working again. This is one of the fastest responses to a prophetic message in the entire OT. The speed of the response is its own testimony: when people are challenged about genuine priorities, they can move quickly.",
  },
];

const GLORY_SECTIONS = [
  {
    color: RED,
    title: "The Weeping of the Old Men — Haggai 2:3",
    body: "'Who is left among you who saw this house in its former glory? How do you see it now? Is it not as nothing in your eyes?' Ezra 3:12 records that the old men who remembered Solomon's Temple wept when they saw the foundation of the new one. The new building was smaller, poorer, stripped of the Ark of the Covenant, with no visible Shekinah glory. By any external measure, it was a profound disappointment. Haggai speaks directly to this discouragement: do not despise the day of small things (see Zechariah 4:10).",
  },
  {
    color: GOLD,
    title: "Yet Now Be Strong — Haggai 2:4–5",
    body: "'Yet now be strong, O Zerubbabel, declares the LORD. Be strong, O Joshua, son of Jehozadak, the high priest. Be strong, all you people of the land, declares the LORD. Work, for I am with you, declares the LORD of hosts, according to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.' The command is triple: be strong, be strong, be strong. And it is grounded not in the size of the project or the magnificence of the building but in two things: the covenant ('the covenant I made when you came out of Egypt') and the Spirit ('my Spirit remains in your midst'). The presence of God is the basis for courage.",
  },
  {
    color: TEAL,
    title: "The Latter Glory Will Be Greater — Haggai 2:7–9",
    body: "'And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory, says the LORD of hosts. The silver is mine, and the gold is mine, declares the LORD of hosts. The latter glory of this house shall be greater than the former, says the LORD of hosts. And in this place I will give peace, declares the LORD of hosts.' The present building is small. But God promises: the latter glory will exceed the former. The fulfillment came in the NT: Jesus walked in this Temple. The one who is greater than Solomon, greater than the Temple itself (Matthew 12:6), appeared in this modest building. The promise was not of silver and gold but of divine presence.",
  },
  {
    color: BLUE,
    title: "The Shaking of Heaven and Earth — Haggai 2:6–7",
    body: "Haggai 2:6–7 declares: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land. And I will shake all nations. Hebrews 12:26–27 quotes this passage to describe the superiority of the new covenant: the phrase yet once more indicates the removal of things that are shaken — that is, things that have been made — in order that the things that cannot be shaken may remain. The shaking of Haggai becomes, in Hebrews, the eschatological dismantling of everything temporary to reveal the Kingdom that cannot be shaken.",
  },
];

const HOLINESS_SECTIONS = [
  {
    color: TEAL,
    title: "Holiness Is Not Contagious — Haggai 2:11–14",
    body: "Haggai asks the priests a legal question: if someone carries consecrated meat in the fold of their garment, does the garment make other food holy by touching it? No. But if someone unclean touches any of these foods, does the food become unclean? Yes. The theological point: holiness does not spread by contact, but defilement does. A half-hearted community cannot sanctify their work by attaching it to religious activity. The work of rebuilding the Temple offered by an impure community is itself impure. Right action requires right relationship.",
  },
  {
    color: RED,
    title: "So Is This People — Haggai 2:14",
    body: "'Then Haggai answered and said, So is it with this people, and with this nation before me, declares the LORD, and so with every work of their hands. And what they offer there is unclean.' This is Haggai's most confrontational statement. He has shown that the people's work, done in a state of misplaced priorities and incomplete faithfulness, is unclean before God — even their offerings. The solution is not better religious performance but genuine return to God. Then — from this day on — I will bless you (2:19).",
  },
  {
    color: GOLD,
    title: "From This Day I Will Bless You — Haggai 2:18–19",
    body: "'Consider from this day onward... Is the seed yet in the barn? Indeed, the vine, the fig tree, the pomegranate, and the olive tree have yielded nothing. But from this day on I will bless you.' The date is specific: the twenty-fourth day of the ninth month (Kislev 24) — the day the foundations of the Temple were laid. From that precise day, the curse becomes a blessing. The covenant consequences of neglecting God's house are reversed when the priority is corrected. The blessing is not a reward for good performance but a gift that follows genuine repentance and renewed obedience.",
  },
];

const ZERUBBABEL_BODY = `The final message of Haggai is a personal oracle to Zerubbabel, the governor of Judah:

'Speak to Zerubbabel, governor of Judah, saying, I am about to shake the heavens and the earth, and to overthrow the throne of kingdoms. I am about to destroy the strength of the kingdoms of the nations, and overthrow the chariots and their riders. And the horses and their riders shall go down, every one by the sword of his brother. On that day, declares the LORD of hosts, I will take you, O Zerubbabel my servant, the son of Shealtiel, declares the LORD, and make you like a signet ring, for I have chosen you, declares the LORD of hosts.' (2:21–23)

Three things demand attention:

**The signet ring.** A signet ring (chotam) was the king's personal seal — used to authorize documents, indicate ownership, confer authority. It was the most personal and important object a king possessed. Coniah (Jehoiachin, Zerubbabel's grandfather) had been told: 'Though Coniah... were the signet ring on my right hand, yet I would tear you off' (Jeremiah 22:24). The Davidic line had been stripped of its seal. Haggai now reverses that oracle: Zerubbabel is given back the signet ring. The Davidic line is restored to honor.

**My chosen servant.** The language echoes the Servant Songs of Isaiah and the Davidic covenant. Zerubbabel is explicitly designated as God's chosen servant — a messianic category. This does not mean Zerubbabel is the Messiah; it means he stands in the line of the Davidic hope as a representative figure.

**The genealogy of Jesus.** Matthew 1:12–13 and Luke 3:27 both include Zerubbabel in the genealogy of Jesus. The oracle to Zerubbabel — you will be my signet ring, I have chosen you — runs through Zerubbabel's line to the one who is truly God's servant, truly the signet ring, truly the chosen one: Jesus of Nazareth. Haggai ends with the most forward-looking statement in the book, reaching all the way to the incarnation.`;

const THEMES = [
  {
    color: GOLD,
    title: "Priority and Worship",
    body: "The core diagnostic question of Haggai: have you prioritized your own comfort over the worship of God? The paneled houses vs. the ruined Temple is not just a 6th-century problem. Every generation faces the temptation to build its own comfort while the things of God are deferred.",
  },
  {
    color: RED,
    title: "Consider Your Ways",
    body: "Four times Haggai says: 'Consider your ways.' This is an invitation to honest self-examination — to look at the fruit of your current priorities and ask whether you like what you see. Harvest failures and unfilled longings may sometimes be diagnostic: what have you been building?",
  },
  {
    color: TEAL,
    title: "The Spirit's Presence as Courage",
    body: "'My Spirit remains in your midst. Fear not.' The basis for courage in small, discouraging work is not the scale of the project but the presence of the Spirit. God's covenant faithfulness — 'the covenant I made when you came out of Egypt' — has not ended because the building looks small.",
  },
  {
    color: BLUE,
    title: "Latter Glory Greater Than Former",
    body: "The rebuilt Temple looked disappointing by comparison to Solomon's. Yet Jesus walked in it. The fulfillment of 'the latter glory shall be greater' was not architectural magnificence but divine presence. The apparently smaller, humbler thing can carry greater glory when God inhabits it.",
  },
  {
    color: PURPLE,
    title: "The Davidic Line Restored",
    body: "The oracle to Zerubbabel — 'I will make you like a signet ring' — reverses the judgment on Coniah and restores the Davidic seal. Zerubbabel stands in the genealogy of Jesus. The line that seemed broken threads through this modest post-exile governor to the one who is the true signet of God.",
  },
  {
    color: GREEN,
    title: "Speed of Obedience",
    body: "Twenty-three days after Haggai's first message, the people are building. This is one of the fastest prophetic responses in the OT. When the Spirit stirs, when priorities are genuinely reordered, obedience can be swift. Haggai's example is an encouragement to quick response rather than prolonged deliberation.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Haggai asked: Is it time for your paneled houses while God's house lies in ruins? What in your life has been deferred to God while you prioritize your own comfort?",
  "'Consider your ways' — the harvest of your current priorities. What is the fruit of where you have been investing your time and attention lately?",
  "The old men wept because the new Temple seemed so small. Where are you discouraged by the smallness of what seems faithful work? How does 2:4-5 speak to that?",
  "Haggai 2:9 says 'the latter glory shall be greater than the former.' Where do you need to trust that God's eventual purposes exceed the discouraging present?",
  "Haggai 2:19 says 'from this day on I will bless you' — starting from the moment priorities were reordered. What would it look like for today to be a turning point?",
];

export default function HaggaiGuidePage() {
  const [tab, setTab] = usePersistedState<HaggaiTab>("vine_haggai_tab", "overview");
  const [openRuins, setOpenRuins] = useState<string | null>(null);
  const [openGlory, setOpenGlory] = useState<string | null>(null);
  const [openHoliness, setOpenHoliness] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_haggai_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_haggai_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_haggai_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #1a1000 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>2 Chapters · 520 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Haggai
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                Two months of preaching that restarted the Temple — and a promise to a discouraged community: <em style={{ color: TEXT }}>"The latter glory of this house shall be greater than the former."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as HaggaiTab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Haggai is the shortest of the Major and Minor Prophets — two chapters, four messages, delivered over about four months in 520 BC. In those months, a demoralized community restarted the Temple project that had been stalled for sixteen years.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Haggai the prophet" },
                    { label: "Date", value: "520 BC" },
                    { label: "Context", value: "16 years after Temple work stopped" },
                    { label: "Chapters", value: "2" },
                    { label: "Key Theme", value: "Priority; discouraged but faithful work" },
                    { label: "Key Verse", value: "Haggai 2:9" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Promise — Haggai 2:9</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "The latter glory of this house shall be greater than the former, says the LORD of hosts. And in this place I will give peace, declares the LORD of hosts."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Haggai 2:9 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Hag 1:4", desc: "Is it time for paneled houses while God's house lies in ruins?" },
                      { ref: "Hag 1:5–6", desc: "'Consider your ways' — the bag with holes; unsatisfied harvest" },
                      { ref: "Hag 1:12–15", desc: "The people obeyed — within 23 days the work restarted" },
                      { ref: "Hag 2:3–5", desc: "Do not weep for the former glory — be strong; my Spirit remains" },
                      { ref: "Hag 2:6–9", desc: "I will shake the nations; the latter glory greater than the former" },
                      { ref: "Hag 2:11–14", desc: "Defilement spreads; holiness does not — the people's work is unclean" },
                      { ref: "Hag 2:18–19", desc: "From this day on I will bless you" },
                      { ref: "Hag 2:21–23", desc: "Zerubbabel as God's signet ring — the Davidic line restored" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* RUINS */}
            {tab === "ruins" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Ruined House</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Why had the Temple project stalled for sixteen years? And what did Haggai say that got it moving again? The first chapter of Haggai is a masterclass in prophetic challenge to misplaced priorities.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {RUINS_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRuins(openRuins === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRuins === s.title ? "−" : "+"}</span>
                      </button>
                      {openRuins === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONSIDER */}
            {tab === "consider" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Consider Your Ways</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>{`The phrase "consider your ways" (literally: set your heart on your ways) appears four times in Haggai. It is an invitation to honest examination of where your priorities have been and what the fruit of those priorities looks like.`}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { ref: "Haggai 1:5", color: GOLD, context: "Before the challenge to rebuild — examine what your current priorities have produced" },
                    { ref: "Haggai 1:7", color: RED, context: "Before the command to rebuild — the second invitation, paired with the action step" },
                    { ref: "Haggai 2:15", color: TEAL, context: "Before describing the blessing that will come from this day forward" },
                    { ref: "Haggai 2:18", color: PURPLE, context: "At the moment of transition — from this day I will bless you; remember where you've come from" },
                  ].map(item => (
                    <div key={item.ref} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.ref}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.context}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Diagnostic — Haggai 1:6</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0, marginBottom: 16 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "You have sown much, and harvested little. You eat, but you never have enough; you drink, but you never have your fill. You clothe yourselves, but no one is warm. And he who earns wages does so to put them into a bag with holes."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Haggai 1:6 (ESV)</cite>
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, margin: 0 }}>The image of the bag with holes is one of the most vivid in the Minor Prophets. Money earned and immediately gone. Food consumed without satisfaction. Effort expended without result. Haggai presents this not as random misfortune but as the symptom of a community whose priorities have been inverted — and whose material experience reflects that inversion. The spiritual diagnosis precedes the material prescription: put God first, and 'from this day on I will bless you' (2:19).</p>
                </div>
              </div>
            )}

            {/* GLORY */}
            {tab === "glory" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Greater Glory</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The second message of Haggai addresses the grief of those who remember the former Temple. The rebuilt structure is smaller, less ornate, without the Ark or the Shekinah. Into this discouragement, God promises something unexpected: this smaller, humbler building will have a greater glory than Solomon's.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {GLORY_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenGlory(openGlory === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openGlory === s.title ? "−" : "+"}</span>
                      </button>
                      {openGlory === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HOLINESS */}
            {tab === "holiness" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Holiness, Defilement, and Blessing</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The third message uses a priestly analogy to make a theological point: holiness does not spread by contact, but defilement does. The community's work, done without genuine priority of heart, is unclean. But from the day priorities are reordered, blessing flows.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {HOLINESS_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenHoliness(openHoliness === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openHoliness === s.title ? "−" : "+"}</span>
                      </button>
                      {openHoliness === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ZERUBBABEL */}
            {tab === "zerubbabel" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Signet Ring</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>The final oracle of Haggai is a personal word to Zerubbabel — and through him, a reversal of judgment on the Davidic line that pointed forward to Jesus.</p>
                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "On that day, declares the LORD of hosts, I will take you, O Zerubbabel my servant, the son of Shealtiel, declares the LORD, and make you like a signet ring, for I have chosen you, declares the LORD of hosts."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Haggai 2:23 (ESV)</cite>
                  </blockquote>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  {ZERUBBABEL_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < ZERUBBABEL_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24 }}>Major Themes</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
                  {THEMES.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <button onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h3 style={{ color: t.color, fontWeight: 700, margin: 0, fontSize: 15 }}>{t.title}</h3>
                          <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === t.title ? "−" : "+"}</span>
                        </div>
                      </button>
                      {openTheme === t.title && (
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginTop: 10, marginBottom: 0 }}>{t.body}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Haggai speaks to people doing small, discouraging work. Use this space to examine your own priorities and hear God's encouragement.</p>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Haggai 2:9" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage stir in you?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
                      {saved ? "Saved!" : "Save Entry"}
                    </button>
                  </div>
                </div>
                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Your Entries</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontWeight: 700, color: ACCENT, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Haggai through video — the post-exile community, the challenge to misplaced priorities, and the promise of greater glory.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="juPvv_xcX-U" title="The Book of Haggai" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Haggai — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="ym6WM-QB5oM" title="Zechariah (companion to Haggai)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Zechariah — Haggai's companion prophet in the post-exile restoration</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="juPvv_xcX-U" title="The Temple" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Temple in Scripture — from Solomon to the new creation</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
