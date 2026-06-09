"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = TEAL;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Who Was Micah?" },
  { id: "justice", label: "Justice & Corruption" },
  { id: "peace", label: "Swords into Plowshares" },
  { id: "bethlehem", label: "Bethlehem Prophecy" },
  { id: "micah68", label: "Micah 6:8" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type MicahTab = "overview" | "context" | "justice" | "peace" | "bethlehem" | "micah68" | "themes" | "journal" | "videos";

const CONTEXT_SECTIONS = [
  {
    color: TEAL,
    title: "A Rural Prophet from Moresheth",
    body: "Unlike Isaiah (a court insider in Jerusalem) or Amos (an outsider from Tekoa), Micah comes from Moresheth-Gath — a small agricultural town in the Shephelah, the lowland foothills of Judah. He speaks with the perspective of someone who has watched Jerusalem's policies crush the rural poor. Jeremiah 26:18 quotes Micah 3:12 as a precedent for prophetic speech, suggesting Micah's words were remembered and honored long after his death — in contrast to how he was received in his own time.",
  },
  {
    color: GOLD,
    title: "Contemporary with Isaiah — 8th Century BC",
    body: "Micah 1:1 dates his ministry to the reigns of Jotham, Ahaz, and Hezekiah — roughly 735–700 BC. He was therefore a contemporary of Isaiah and lived through some of the most turbulent decades in Judah's history: the Assyrian invasion that destroyed the northern kingdom in 722 BC, the siege of Jerusalem under Hezekiah (see Micah 1:9–16, which echoes the Assyrian advance through the Shephelah towns), and the social upheaval that accompanied military conquest and economic exploitation.",
  },
  {
    color: RED,
    title: "His Target: Rulers, Priests, and Prophets",
    body: "Micah's sharpest words are directed at leaders who are supposed to protect the people but exploit them instead. Rulers who tear the skin from the people and break their bones (3:2–3). Priests who teach for hire. Prophets who cry 'Peace' when given food but declare war when they are not fed (3:5). Micah identifies a system of corruption in which the entire leadership class has turned its calling into an industry. The people who should speak truth are speaking for whoever pays.",
  },
  {
    color: PURPLE,
    title: "Structure: Three Cycles of Judgment and Hope",
    body: "The book of Micah follows a pattern of three movements, each beginning with judgment and ending with hope: (1) Chapters 1–2: Judgment on Samaria and Jerusalem; a lament for the towns of the Shephelah; a promise of gathering and a shepherd-king to come. (2) Chapters 3–5: Judgment on corrupt leaders; the vision of universal peace; the Bethlehem prophecy; the Assyrian crisis answered by the coming ruler. (3) Chapters 6–7: The covenant lawsuit; Micah 6:8; Micah's personal lament and confidence in God; the incomparable God of forgiveness (7:18–20).",
  },
];

const JUSTICE_SECTIONS = [
  {
    color: RED,
    title: "They Covet Fields and Seize Them — Micah 2:1–2",
    body: "'Woe to those who devise wickedness and work evil on their beds! When the morning dawns, they perform it, because it is in the power of their hand. They covet fields and seize them, and houses, and take them away; they oppress a man and his house, a man and his inheritance.' The crime Micah describes is the consolidation of land by the powerful at the expense of family inheritance. In ancient Israel, land was not merely property — it was the basis of a family's identity and livelihood across generations. To seize someone's inheritance was to erase them. Micah is indicting a form of structural violence.",
  },
  {
    color: GOLD,
    title: "Rulers Who Eat the Flesh of God's People — Micah 3:1–3",
    body: "'And I said: Hear, you heads of Jacob and rulers of the house of Israel! Is it not for you to know justice? — you who hate the good and love the evil, who tear the skin from off my people and their flesh from off their bones, who eat the flesh of my people, and flay their skin from off them, and break their bones in pieces and chop them up like meat in a pot, like flesh in a cauldron.' The graphic imagery of rulers as cannibals is deliberate shock. These are people who know what justice requires. They have access to the Law. Their failure is not ignorance but deliberate inversion of their calling.",
  },
  {
    color: TEAL,
    title: "Prophets Who Cry Peace for Pay — Micah 3:5–8",
    body: "'Thus says the LORD concerning the prophets who lead my people astray, who cry Peace when they have something to eat, but declare war against him who puts nothing into their mouths.' The court prophets are not speaking the word of the LORD — they are speaking whatever their patrons want to hear. Against this, Micah asserts his own authority: 'But as for me, I am filled with power, with the Spirit of the LORD, and with justice and might, to declare to Jacob his transgression and to Israel his sin' (3:8). The contrast between true and false prophecy is economic: one speaks for God, one speaks for money.",
  },
  {
    color: BLUE,
    title: "Zion Built with Blood — Micah 3:9–12",
    body: "'Hear this, you heads of the house of Jacob and rulers of the house of Israel, who detest justice and make crooked all that is straight, who build Zion with blood and Jerusalem with iniquity... Therefore because of you Zion shall be plowed as a field; Jerusalem shall become a heap of ruins.' This is one of the most stunning statements in the OT: the holy city, built and maintained through the exploitation and blood of the poor, will be destroyed. Jeremiah 26 records that Micah's words about Jerusalem's destruction were taken seriously by Hezekiah and became a precedent for tolerating prophetic speech that predicted catastrophe.",
  },
];

const PEACE_SECTIONS = [
  {
    color: GREEN,
    title: "The Mountain of the LORD — Micah 4:1–2",
    body: "'It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains, and it shall be lifted up above the hills; and peoples shall flow to it, and many nations shall come, and say: Come, let us go up to the mountain of the LORD, to the house of the God of Jacob, that he may teach us his ways and that we may walk in his paths. For out of Zion shall go forth the law, and the word of the LORD from Jerusalem.' This vision (parallel to Isaiah 2:2–4) places Jerusalem at the center of a universal pilgrimage — all nations seeking God, not for national advantage but to learn his ways.",
  },
  {
    color: TEAL,
    title: "Swords into Plowshares — Micah 4:3–4",
    body: "'He shall judge between many peoples, and shall decide disputes for strong nations far away; and they shall beat their swords into plowshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore. But they shall sit every man under his vine and under his fig tree, and no one shall make them afraid, for the mouth of the LORD of hosts has spoken.' The transformation of weapons into agricultural tools is the iconic image of the prophetic peace vision. Not merely an end to war, but an abundance of shalom — each person secure under their own vine and fig tree.",
  },
  {
    color: GOLD,
    title: "Walking in the Name of Our God — Micah 4:5",
    body: "'For all the peoples walk each in the name of its god, but we will walk in the name of the LORD our God forever and ever.' Micah acknowledges the reality: the nations are not yet walking with YHWH. But the community of faith does not wait for universal transformation before committing themselves. The response to the eschatological vision is present faithfulness: we will walk in the name of the LORD, now, in a world that is not yet what it will be.",
  },
  {
    color: PURPLE,
    title: "How Micah 4 and Isaiah 2 Relate",
    body: "Micah 4:1–3 and Isaiah 2:2–4 are nearly identical — one of the few extended passages that appear verbatim in two different prophetic books. This is either shared tradition that both prophets drew on, or one prophet citing the other. It suggests these words were treasured in Jerusalem's prophetic community as an authoritative vision of God's ultimate intention for the world: justice established, worship centered, war ended, and every human being at peace. Both prophets spoke in the same generation, faced the same crisis, and pointed to the same hope.",
  },
];

const BETHLEHEM_SECTIONS = [
  {
    color: TEAL,
    title: "The Prophecy — Micah 5:2",
    body: "'But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.' Bethlehem — the small town of David's origin, still remembered but no longer a seat of power — will produce a new ruler. The contrast is deliberate: God does not work through Jerusalem's established power; he works through Bethlehem's smallness. The phrase 'from ancient days' suggests the ruler's origins transcend ordinary chronology — pointing beyond a merely political figure.",
  },
  {
    color: GOLD,
    title: "The Fulfillment — Matthew 2:5–6",
    body: "When the Magi arrive in Jerusalem asking where the King of the Jews has been born, the chief priests and scribes answer by quoting Micah 5:2. The Gospel of Matthew presents the birth in Bethlehem not as coincidence but as fulfillment of prophetic expectation. Matthew's 'fulfillment quotations' throughout his gospel frame Jesus's life as the intersection of Israel's story with its promised destination. The Messiah from Bethlehem is not a surprise arrival but the culmination of what the prophets announced.",
  },
  {
    color: RED,
    title: "The Shepherd-King of Micah 5:4–5",
    body: "'And he shall stand and shepherd his flock in the strength of the LORD, in the majesty of the name of the LORD his God. And they shall dwell secure, for now he shall be great to the ends of the earth. And he shall be their peace.' The coming ruler is described in pastoral terms: he will shepherd rather than dominate. His greatness extends 'to the ends of the earth' — not merely a national king but a universal one. And he himself will be their peace — not merely a bringer of peace, but its embodiment. This language was woven into early Christian reflection on Jesus as both shepherd and peace (John 10, Eph 2:14).",
  },
];

const MICAH68_BODY = `Micah 6 opens as a covenant lawsuit: 'Hear what the LORD says: Arise, plead your case before the mountains, and let the hills hear your voice. Hear, you mountains, the indictment of the LORD, and you enduring foundations of the earth, for the LORD has an indictment against his people, and he will contend with Israel' (6:1–2). Creation itself is summoned as witness. God asks: 'O my people, what have I done to you? How have I wearied you? Answer me.' Then comes the recitation of saving acts (6:4–5): the Exodus, Moses, Aaron, Miriam, the journey from Shittim to Gilgal. God is defending his faithfulness to his people before accusing them.

The questioner then asks what appropriate worship would look like. The escalating offers — thousands of rams, ten thousands of rivers of oil, even one's firstborn child (6:6–7) — are rejected. The question 'What does the LORD require of you?' is then answered with devastating simplicity:

'He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?' (6:8)

Three requirements. Three Hebrew words:
• mishpat (justice) — the same word Amos uses. Fair dealings in courts, markets, and community. Structural righteousness, not just personal virtue.
• hesed (loving-kindness, steadfast love, mercy) — the word for God's covenant love. Amos said 'let justice roll'; Micah says love kindness. Not grudging compliance with justice but genuine attachment to it.
• tsana halak (walk humbly) — or more literally, 'walk with restraint, with attentiveness.' Not self-abasement but a posture of dependence and awareness before God. The opposite of the self-sufficient exploitation Micah has indicted throughout the book.

Micah 6:8 has been called 'the ethical summit of the OT.' It is not reductionist (as if justice, mercy, and humility replace worship). It is clarifying: this is what all the worship, sacrifice, and pilgrimage is supposed to produce. When religious practice produces injustice, exploitation, and arrogance — it has become its own opposite.`;

const THEMES = [
  {
    color: TEAL,
    title: "Micah 6:8 as Ethical Summit",
    body: "Do justice, love hesed, walk humbly with your God. This triad encompasses the horizontal (justice — how you treat others), the relational (hesed — the quality of love you bring to that treatment), and the vertical (humble walk with God). It is a complete account of the faithful life in three phrases.",
  },
  {
    color: GOLD,
    title: "The Small and the Overlooked",
    body: "Bethlehem is 'too little to be among the clans of Judah.' Micah comes from a small town. The poor being crushed are rural smallholders. God's pattern throughout Micah is to work through what is small, marginalized, and overlooked — and to judge the powerful and central.",
  },
  {
    color: RED,
    title: "Religious Leadership Under Judgment",
    body: "Micah 3 is one of the OT's sharpest indictments of corrupt religious professionals. Priests, prophets, and rulers who exploit their calling are not neutral actors — they are worse than ordinary sinners because they should know better and they are betraying the vulnerable who trusted them.",
  },
  {
    color: GREEN,
    title: "Universal Scope of God's Peace",
    body: "The vision of Micah 4 is not tribal. All nations will come to the mountain of the LORD. Swords become plowshares across all humanity. Every person will sit under their own vine and fig tree. This is not Israeli triumph but universal shalom — a world healed of violence and scarcity.",
  },
  {
    color: BLUE,
    title: "The God Who Pardons",
    body: "Micah closes with one of the most beautiful descriptions of forgiveness in the Bible (7:18–20): 'Who is a God like you, pardoning iniquity and passing over transgression for the remnant of his inheritance? He does not retain his anger forever, because he delights in steadfast love.' The book that began with roaring judgment ends with a God who delights in hesed.",
  },
  {
    color: PURPLE,
    title: "Lament and Trust Together",
    body: "Micah 7:7–10 is a model of honest faith: 'But as for me, I will look to the LORD; I will wait for the God of my salvation; my God will hear me. Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me.' Micah acknowledges real darkness while maintaining confident trust. This is not denial; it is faith that looks beyond present evidence.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Micah 6:8 gives three requirements: do justice, love kindness, walk humbly. Which of the three is most difficult for you personally and why?",
  "Where in your community are fields being seized, inheritances taken, or the vulnerable exploited (Micah 2:1–2)? What is your responsibility?",
  "Micah 4:3 imagines swords beaten into plowshares. What would need to change — in you, in your community — for that vision to become more real?",
  "Micah described religious leaders who spoke for money rather than God. What is the equivalent temptation in contemporary church life?",
  "Micah 7:18 says God 'delights in steadfast love.' How does this description of God shape how you think about confession and forgiveness?",
];

export default function MicahGuidePage() {
  const [tab, setTab] = usePersistedState<MicahTab>("vine_micah_tab", "overview");
  const [openContext, setOpenContext] = useState<string | null>(null);
  const [openJustice, setOpenJustice] = useState<string | null>(null);
  const [openPeace, setOpenPeace] = useState<string | null>(null);
  const [openBeth, setOpenBeth] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_micah_journal");
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
    localStorage.setItem("vine_micah_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_micah_journal", JSON.stringify(updated));
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
          <div style={{ background: `linear-gradient(135deg, #001a1a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>7 Chapters · ~735–700 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Micah
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                A rural prophet asking the question every generation faces: what does God actually want? The answer: <em style={{ color: TEXT }}>"to do justice, and to love kindness, and to walk humbly with your God."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as MicahTab)}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Micah is seven chapters that oscillate between fierce judgment and astonishing hope. He is a prophet of the poor, a voice from the margins, and the author of one of the most profound ethical statements in all of Scripture.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Micah of Moresheth" },
                    { label: "Time Period", value: "~735–700 BC" },
                    { label: "Audience", value: "Judah (and Israel)" },
                    { label: "Chapters", value: "7" },
                    { label: "Theme", value: "Justice, peace, walking with God" },
                    { label: "Key Verse", value: "Micah 6:8" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>Micah 6:8 — The Ethical Summit</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?"
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Micah 6:8 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Micah 2:1–2", desc: "Those who covet fields and seize them — structural injustice" },
                      { ref: "Micah 3:1–3", desc: "Rulers who eat the flesh of God's people" },
                      { ref: "Micah 3:5–8", desc: "Prophets who cry peace for pay; Micah's alternative authority" },
                      { ref: "Micah 3:12", desc: "Zion shall be plowed as a field — the Jerusalem judgment" },
                      { ref: "Micah 4:1–4", desc: "Swords into plowshares — the universal peace vision" },
                      { ref: "Micah 5:2", desc: "Out of Bethlehem shall come a ruler — the messianic prophecy" },
                      { ref: "Micah 6:6–8", desc: "The covenant lawsuit and Micah 6:8" },
                      { ref: "Micah 7:7–10", desc: "When I fall, I shall rise — faith in darkness" },
                      { ref: "Micah 7:18–20", desc: "Who is a God like you? — the God who delights in hesed" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 90, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CONTEXT */}
            {tab === "context" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Who Was Micah?</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Micah's social location shapes his message. Understanding where he came from — and when — makes his words come alive.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {CONTEXT_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenContext(openContext === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openContext === s.title ? "−" : "+"}</span>
                      </button>
                      {openContext === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JUSTICE */}
            {tab === "justice" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Justice & Corruption</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Micah chapters 2–3 are a sustained indictment of the people who should know better: rulers, priests, prophets — the entire leadership class. The specificity of his charges is striking. This is not vague moral criticism; it is a precise account of how power corrupts those who hold it.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {JUSTICE_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenJustice(openJustice === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openJustice === s.title ? "−" : "+"}</span>
                      </button>
                      {openJustice === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PEACE */}
            {tab === "peace" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Swords into Plowshares</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Micah 4:1–5 is one of the most hopeful passages in the entire Bible — and one of its most politically radical. A world without war. Every family secure. All nations seeking God. It stands in striking contrast to the brutal exploitation Micah has just described.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {PEACE_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenPeace(openPeace === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openPeace === s.title ? "−" : "+"}</span>
                      </button>
                      {openPeace === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BETHLEHEM */}
            {tab === "bethlehem" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Bethlehem Prophecy</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Micah 5:2 is one of the most precise messianic prophecies in the OT — specifying not just a royal figure but the exact town of his origin, 700 years before the birth of Jesus.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {BETHLEHEM_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenBeth(openBeth === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openBeth === s.title ? "−" : "+"}</span>
                      </button>
                      {openBeth === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Micah 5:2 — The Prophecy</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Micah 5:2 (ESV)</cite>
                  </blockquote>
                </div>
              </div>
            )}

            {/* MICAH 6:8 */}
            {tab === "micah68" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Micah 6:8 — What the LORD Requires</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The most famous verse in Micah, and one of the most important in the entire Bible. Before we get there, we need to understand the lawsuit that precedes it.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 32 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?"
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Micah 6:8 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  {MICAH68_BODY.split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < MICAH68_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{paragraph}</p>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
                  {[
                    { word: "Mishpat", meaning: "Justice", description: "Fair treatment in courts, markets, and community. Not just personal virtue but structural righteousness — systems that protect the vulnerable.", color: RED },
                    { word: "Hesed", meaning: "Loving-kindness", description: "God's covenant love applied to human relationships. Not mere compliance with justice but genuine attachment to it — loving what is good.", color: TEAL },
                    { word: "Tsana Halak", meaning: "Walk humbly", description: "Literally: walk with attentiveness and restraint before God. The opposite of the self-sufficient arrogance Micah indicts throughout the book.", color: GOLD },
                  ].map(w => (
                    <div key={w.word} style={{ background: CARD, border: `1px solid ${w.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <div style={{ color: w.color, fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{w.word}</div>
                      <div style={{ color: TEXT, fontWeight: 600, marginBottom: 8 }}>{w.meaning}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{w.description}</p>
                    </div>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Micah asks hard questions about justice, religious authenticity, and walking humbly with God. Use this space to wrestle with them honestly.</p>

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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Micah 6:8" style={inputStyle} />
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Micah's vision of justice, the Bethlehem prophecy, and what it means to walk humbly with God through these video resources.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="pEqIeHMdvUM" title="The Book of Micah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Micah — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="SCkyWH4sS4s" title="The Book of Amos (companion)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Amos — Micah's 8th-century companion in justice prophecy</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="g_igCcVS6gY" title="Justice — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Justice (Mishpat) — the key word in Micah 6:8</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
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
