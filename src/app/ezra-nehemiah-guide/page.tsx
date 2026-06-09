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
  { id: "return", label: "The Return" },
  { id: "ezra", label: "Ezra" },
  { id: "nehemiah", label: "Nehemiah" },
  { id: "walls", label: "Building the Walls" },
  { id: "law", label: "Reading the Law" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const RETURN_SECTIONS = [
  {
    color: GOLD,
    title: "Cyrus's Decree — Ezra 1",
    body: "The books of Ezra and Nehemiah open with one of the most remarkable fulfillments of prophecy in Scripture: the Persian King Cyrus issues a decree permitting exiled Jews to return to Jerusalem and rebuild the temple. Isaiah had named Cyrus by name 150 years before his birth: 'who says of Cyrus, he is my shepherd, and he shall fulfill all my purpose' (Isa 44:28). The decree signals the end of the seventy-year Babylonian exile Jeremiah prophesied (Jer 25:11–12). God moves a pagan emperor to accomplish his covenant purposes. The sovereignty of God is not limited to Israel's borders.",
  },
  {
    color: BLUE,
    title: "Three Waves of Return",
    body: "The books of Ezra and Nehemiah cover approximately 100 years of post-exile history across three distinct returns. The first wave (Ezra 1–6, ~538 BC) under Zerubbabel and Jeshua focuses on rebuilding the temple, completed under heavy opposition in 516 BC. The second wave (Ezra 7–10, ~458 BC) brings Ezra himself back with a group of priests and Levites and focuses on covenant renewal. The third wave (Nehemiah 1–13, ~445 BC) brings Nehemiah from the Persian court to rebuild the city walls and reorganize the community.",
  },
  {
    color: GREEN,
    title: "Opposition and Discouragement",
    body: "The returning exiles face immediate opposition from the people of the land — the mixed population that had settled in the region during the exile. They send letters to the Persian court claiming the rebuilding is seditious (Ezra 4). The temple work stops for fifteen years until the prophets Haggai and Zechariah stir the people back to work (Ezra 5:1–2). Haggai 1:5–7 records God's word: 'Consider your ways. You have sown much, and harvested little.' The delay is not God's abandonment — it is the people's misplaced priorities. When they return to God's work, God returns his blessing.",
  },
];

const EZRA_SECTIONS = [
  {
    color: TEAL,
    title: "Ezra's Commission and Journey — Ezra 7–8",
    body: "Ezra is introduced with an impressive pedigree: a priest descended from Aaron, a scribe 'skilled in the Law of Moses' (7:6). King Artaxerxes grants him whatever he asks — Ezra's diplomatic skill and godly character have earned royal trust. His account of the journey is remarkable for what is not in it: God's protection, without a military escort. 'I was ashamed to ask the king for a band of soldiers and horsemen to protect us against the enemy on our way, since we had told the king, the hand of our God is for good on all who seek him' (8:22). Ezra's theology forces him to trust what he has proclaimed.",
  },
  {
    color: RED,
    title: "Ezra's Prayer of Confession — Ezra 9",
    body: "On arrival in Jerusalem, Ezra discovers that the people — including priests and leaders — have intermarried with the surrounding pagan peoples in violation of the covenant. His response is one of the most striking in the OT: he tears his garments, pulls hair from his head and beard, and sits appalled until the evening sacrifice. Then he prays — not in the first person but in the first person plural. He does not pray 'they have sinned' but 'we have sinned.' He stands in solidarity with a people he did not sin with, confessing on their behalf. This intercessory identification — standing inside the sin of the community — is the model of prophetic intercession from Moses to Daniel to Paul.",
  },
  {
    color: PURPLE,
    title: "The Community's Response — Ezra 10",
    body: "The people see Ezra's reaction and are broken by it. A large assembly gathers, weeping in the rain. They covenant to put away their foreign wives and make a fresh start. The process takes three months and is painful — separation is not clean. The list of names at the end of Ezra 10 is the record of people who made a costly covenant commitment. The passage raises hard questions about the ethics of covenant separation that the church has wrestled with. But its core message is clear: covenant faithfulness sometimes requires costly action, and corporate repentance can transform a community.",
  },
];

const NEHEMIAH_SECTIONS = [
  {
    color: BLUE,
    title: "The News and the Prayer — Nehemiah 1",
    body: "Nehemiah, cupbearer to King Artaxerxes in Susa, hears that Jerusalem's walls remain in ruins and its gates burned. His response is to sit, weep, fast, and pray for days. His prayer (1:5–11) models covenant prayer: he begins with God's character ('the great and awesome God'), confesses the sins of the nation in the first person plural ('we have sinned'), claims the covenant promise ('if you return to me... I will gather them'), and ends with a specific request. Then he goes to work. Nehemiah is the model of the leader who does not separate prayer from planning or faith from strategy.",
  },
  {
    color: GREEN,
    title: "The Night Survey — Nehemiah 2",
    body: "Before presenting his plan to the community, Nehemiah tours Jerusalem by night on horseback, inspecting the walls and gates — alone, without telling anyone what God has put in his heart (2:12). The survey is strategic intelligence-gathering before public commitment. When he calls the community together and presents the vision, he has already done the work of seeing the full scope of the problem. His call: 'Come, let us build the wall of Jerusalem, that we may no longer suffer derision' (2:17). The people respond: 'Let us rise up and build.' Good leadership presents a problem clearly, points to God's hand, and invites shared commitment.",
  },
  {
    color: GOLD,
    title: "Opposition: Sanballat and Tobiah — Nehemiah 4–6",
    body: "The opposition intensifies as the wall rises. First mockery (4:1–3), then conspiracy (4:7–8), then a whispering campaign against Nehemiah personally (6:5–7: accusations of rebellion sent in an open letter to humiliate him). Nehemiah's responses model spiritual leadership under pressure: prayer ('Hear, O our God, for we are despised,' 4:4), practical preparation (half the workers hold weapons while the other half build, 4:16–18), and refusing to be distracted ('I am doing a great work and I cannot come down,' 6:3). The wall is completed in 52 days. The enemies recognize: 'this work had been accomplished with the help of our God' (6:16).",
  },
  {
    color: TEAL,
    title: "The Prayers of Nehemiah",
    body: "Nehemiah contains one of Scripture's most concentrated records of spontaneous prayer. The book contains twelve short prayers, many of them single-sentence 'arrow prayers' shot to God in the middle of conversations: 'So I prayed to the God of heaven, and said to the king...' (2:4–5). 'Remember me, O my God, for good' (13:31). These brief prayers embedded in action reveal a man who is continuously in conversation with God — not only in set-aside prayer times but in the midst of political negotiations, dangerous opposition, and practical leadership. Nehemiah's prayer life is not compartmentalized from his work; it runs through it.",
  },
];

const LAW_SECTIONS = [
  {
    title: "The Great Assembly — Nehemiah 8",
    body: "On the first day of the seventh month — the feast day — all the people gathered as one in the square before the Water Gate. They asked Ezra the scribe to bring the Book of the Law of Moses. He read from early morning until midday while the people listened 'attentive to the Book of the Law' (8:3). The Levites helped the people understand: 'they read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading' (8:8). The people wept when they heard the Law. The leaders' response: 'This day is holy to the LORD your God; do not mourn or weep... Go your way. Eat the fat and drink sweet wine... for the joy of the LORD is your strength' (8:9–10). The Law, rightly understood, produces grief and joy in sequence.",
  },
  {
    title: "Covenant Renewal — Nehemiah 9–10",
    body: "The day after the great assembly, the people gather again — this time fasting, in sackcloth, confessing their sins. The Levites lead a prayer that surveys the entire history of Israel from creation through the exile — one of the most comprehensive recitations of salvation history in the Bible. They confess: 'Even when they had made for themselves a golden calf and said, This is your God who brought you up out of Egypt... you in your great mercies did not forsake them in the wilderness' (9:18–19). Then they make a binding covenant, sealing it with a written document. The community commits to specific behavioral commitments: no intermarriage with pagan neighbors, observing the Sabbath, supporting the temple. The abstract covenant becomes concrete obedience.",
  },
];

const THEMES = [
  { icon: "🏗️", color: GREEN, title: "Rebuilding After Ruin", body: "The primary metaphor of Ezra-Nehemiah is reconstruction. Physical walls are rebuilt, but they represent something larger: the reconstitution of a people whose identity was nearly destroyed by exile. The wall is not merely a military fortification — it is a statement that Jerusalem is inhabited again, that God's people are gathered, that the covenant community is restored. For the church, rebuilding after ruin — institutional, relational, or personal — follows the same pattern: prayer, assessment, community rallied around a shared vision, sustained work despite opposition." },
  { icon: "🙏", color: BLUE, title: "Prayer Integrated Into Life", body: "Nehemiah models prayer as continuous dialogue rather than scheduled event. His 'arrow prayers' (2:4–5; 4:4; 5:19; 6:9, 14; 13:14, 22, 29, 31) show a man who prays in the middle of things. This is the NT vision of 'pray without ceasing' (1 Thess 5:17) — not an impossible standard requiring constant kneeling, but an ongoing, moment-by-moment orientation toward God in all circumstances." },
  { icon: "📖", color: GOLD, title: "The Word Creates Community", body: "The public reading of the Law in Nehemiah 8 is one of the great scenes of Scripture. The word of God, read clearly and explained so people understand, produces both repentance and joy. The pattern is Reformation-era: the authority of Scripture, read publicly, interpreted clearly, applied practically. The rebuilt walls protect the city; the read Law shapes the people who will live inside it." },
  { icon: "⚔️", color: RED, title: "Work and Watch", body: "Nehemiah's famous instruction — 'each labored on the work with one hand and held his weapon with the other' (4:17) — is the metaphor of engaged spiritual life. The Christian is always simultaneously building and guarding, working for the kingdom and watching for the enemy's attack. The wall cannot be built while refusing to acknowledge real opposition, nor can it be defended by people who only watch and never build." },
  { icon: "🔄", color: TEAL, title: "The Incomplete Restoration", body: "Ezra-Nehemiah ends without the glory that Haggai and Zechariah had promised. The rebuilt temple is smaller and less glorious than Solomon's. The walls are rebuilt but the king is foreign. The covenant renewal is made but immediately violated (Nehemiah 13). The books end in disappointment — not despair, but incompleteness. The restoration is real but partial. The full restoration awaits something greater. This is the posture of the Christian life: genuinely restored by Christ, but not yet fully what we will be." },
  { icon: "✡️", color: PURPLE, title: "Identity in Exile and Return", body: "The central question of Ezra-Nehemiah is: who are God's people when the traditional markers of identity (the land, the temple, the Davidic king) are absent or damaged? The answer is not political restoration but covenant faithfulness: we are the people who remember who God is, confess who we have been, and commit to live differently. This is also the question of the church in a post-Christian culture: identity is not nostalgia for past privilege but renewed covenant loyalty in the present." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type ENTab = "overview" | "return" | "ezra" | "nehemiah" | "walls" | "law" | "themes" | "journal" | "videos";

export default function EzraNehemiahGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<ENTab>("vine_en_tab", "overview");
  const [openReturn, setOpenReturn] = useState<string | null>(null);
  const [openEzra, setOpenEzra] = useState<string | null>(null);
  const [openNeh, setOpenNeh] = useState<string | null>(null);
  const [openLaw, setOpenLaw] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_en_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_en_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = TEAL;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(217,119,6,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🧱</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>Ezra & Nehemiah</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              The return from Babylonian exile — Cyrus&apos;s decree, Ezra&apos;s intercessory confession, Nehemiah&apos;s night survey of broken walls, rebuilding in 52 days, the public reading of the Law, and what it looks like to rebuild something that has been ruined.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "Ezra — 10 Chapters", color: TEAL }, { label: "Nehemiah — 13 Chapters", color: BLUE }, { label: "Post-Exile Return", color: GOLD }, { label: "OT History", color: GREEN }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as ENTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${TEAL}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>📜</div>
                  <h2 style={{ color: TEAL, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Ezra: The Temple and the Law</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>Ezra covers the first two waves of the return from Babylon — the temple rebuilt under Zerubbabel (538–516 BC) and Ezra&apos;s own return with a company of priests and Levites (458 BC). Its focus is worship: the temple must be rebuilt, the Law must be known and obeyed, the community must be distinct.</p>
                </div>
                <div style={{ ...card, padding: "2rem", borderTop: `3px solid ${BLUE}` }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>🧱</div>
                  <h2 style={{ color: BLUE, fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Nehemiah: The Walls and the People</h2>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.9rem" }}>Nehemiah covers the third wave (445 BC) — a provincial governor with the king&apos;s ear who turns that position toward God&apos;s purposes. His focus is civic: the city walls rebuilt in 52 days, the population redistributed, the community reformed economically and covenantally.</p>
                </div>
              </div>
              <div style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}`, borderRadius: 14, padding: "1.5rem" }}>
                <div style={{ color: TEAL, fontWeight: 700, marginBottom: 8 }}>Nehemiah 6:3 — The Leader&apos;s Answer to Distraction</div>
                <div style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.9, fontSize: "0.95rem" }}>
                  &quot;I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?&quot;
                </div>
              </div>
              <div style={{ ...card, padding: "2rem" }}>
                <h3 style={{ color: accent, fontWeight: 700, marginBottom: "1rem" }}>The Books Together</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Ezra and Nehemiah were a single book in the Hebrew Bible. They tell the same story from different angles: the physical return to the land must be accompanied by spiritual return to the covenant. Building the walls without renewing the Law is civic repair without transformation. Reading the Law without rebuilding the walls is spiritual aspiration without embodied community. Both are necessary. Both are the work of God through willing human servants.</p>
              </div>
            </div>
          )}

          {activeTab === "return" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>The Return from Exile</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>The exile — the central trauma of Israel&apos;s history — is ending. God is moving a pagan emperor, gathering a dispersed people, and beginning the long work of restoration. But it will not be what they expected.</p>
              </div>
              {RETURN_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenReturn(openReturn === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openReturn === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openReturn === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "ezra" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "0.5rem" }}>Ezra: Priest, Scribe, Intercessor</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Ezra arrives in Jerusalem as a priestly scribe with royal authority — and immediately discovers a community that has compromised the covenant. His response models confessional, intercessory leadership.</p>
              </div>
              {EZRA_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenEzra(openEzra === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openEzra === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openEzra === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "nehemiah" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: BLUE, marginBottom: "0.5rem" }}>Nehemiah: Leader, Builder, Intercessor</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Nehemiah is the OT&apos;s most complete portrait of a leader — combining prayer and planning, vision and execution, courage under opposition and consistent dependence on God. His story is as practically relevant as any in Scripture.</p>
              </div>
              {NEHEMIAH_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenNeh(openNeh === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openNeh === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openNeh === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "walls" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "1rem" }}>52 Days: The Wall Rebuilt</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The completion of Jerusalem&apos;s wall in 52 days — a task that had sat undone for 141 years — is one of Scripture&apos;s great organizational accomplishments. Nehemiah divides the wall into sections, assigns each section to a family group or occupational guild, and coordinates the whole. The structure of Nehemiah 3 (the list of builders and sections) is often skipped, but its inclusion is significant: these are the real names of real people who did the real work. God remembers each one.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                  {[
                    { label: "Length of project", val: "52 days", color: TEAL },
                    { label: "Years since destruction", val: "141 years (586→445 BC)", color: GOLD },
                    { label: "Method of defense", val: "Half building, half armed guard", color: RED },
                    { label: "Enemy tactics", val: "Mockery, conspiracy, false accusation", color: PURPLE },
                    { label: "Nehemiah's response", val: "'I am doing a great work — I cannot come down'", color: BLUE },
                    { label: "Result", val: "Enemies recognized: this was done by our God", color: GREEN },
                  ].map(s => (
                    <div key={s.label} style={{ background: BG, border: `1px solid ${s.color}33`, borderRadius: 10, padding: "0.9rem 1rem" }}>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: "0.78rem", marginBottom: 4 }}>{s.label}</div>
                      <div style={{ color: TEXT, fontSize: "0.88rem" }}>{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "law" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GOLD, marginBottom: "0.5rem" }}>The Public Reading of the Law</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Nehemiah 8–10 is one of the great scenes of biblical worship: the whole community gathered, the Law read clearly and explained, the people weeping — and then feasting in joy. It is a model of what happens when the Word of God is opened to a community that has been starved of it.</p>
              </div>
              {LAW_SECTIONS.map(s => (
                <div key={s.title} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenLaw(openLaw === s.title ? null : s.title)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: GOLD, fontWeight: 700 }}>{s.title}</span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openLaw === s.title ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openLaw === s.title && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{s.body}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {THEMES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Ezra & Nehemiah Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Nehemiah 2:18, Ezra 9:6, Nehemiah 8:10" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What walls in your life need rebuilding? What great work are you doing that requires focused attention?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="The joy of the LORD is my strength..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
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
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Ezra & Nehemiah — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Overviews and focused teaching on the post-exile return and rebuilding.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "OS23OoWdoFQ", title: "Ezra & Nehemiah Overview", channel: "BibleProject" },
                  { id: "nVHRdH-oULY", title: "Nehemiah: Leadership Lessons", channel: "Bible Study" },
                  { id: "fLCy8LpAq5I", title: "The Joy of the Lord — Nehemiah 8", channel: "Desiring God" },
                  { id: "6HfFXNxjuSE", title: "Return from Exile — Post-Exilic Period", channel: "The Bible Explained" },
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
