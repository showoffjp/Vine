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
  { id: "calling", label: "The Call" },
  { id: "laments", label: "Jeremiah's Laments" },
  { id: "newcovenant", label: "New Covenant" },
  { id: "prophecies", label: "Key Prophecies" },
  { id: "faithfulness", label: "Faithfulness in Ruins" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const LAMENTS = [
  { ref: "Jer 11:18–12:6", color: RED, title: "The First Lament: The Conspiracy", text: "Jeremiah discovers that the men of his own hometown — Anathoth — are plotting to kill him. 'I was like a gentle lamb led to the slaughter' (11:19). He complains to God: 'Why does the way of the wicked prosper?' (12:1). God's answer is stunning in its lack of comfort: 'If you have raced with men on foot, and they have wearied you, how will you compete with horses?' (12:5). God does not answer the philosophical question. He deepens the challenge. Jeremiah's suffering will intensify, not resolve. God's word to the sufferer is not explanation but invitation to deeper trust." },
  { ref: "Jer 15:10–21", color: PURPLE, title: "The Second Lament: I Curse the Day I Was Born", text: "The loneliness is now unbearable. 'I sat alone, because your hand was upon me, for you had filled me with indignation' (15:17). Jeremiah accuses God of deceiving him: 'Will you be to me like a deceitful brook, like waters that fail?' (15:18). God's response is the harshest of all the lament replies: 'If you return, I will restore you... they shall turn to you, but you shall not turn to them' (15:19). Jeremiah must not become what he preaches against. The prophet's formation requires that he not be softened by the people's resistance." },
  { ref: "Jer 17:14–18", color: BLUE, title: "The Third Lament: Heal Me, LORD", text: "A brief prayer of need and trust: 'Heal me, O LORD, and I shall be healed; save me, and I shall be saved' (17:14). The mockers are asking 'Where is the word of the LORD? Let it come!' — taunting Jeremiah with the delay of the promised judgment. He protests his faithfulness and asks for vindication. Unlike the previous laments, this one does not descend into accusation — it is primarily a plea and a confession of dependence." },
  { ref: "Jer 20:7–18", color: TEAL, title: "The Fourth Lament: You Have Deceived Me", text: "The most anguished passage in all of Jeremiah. After being publicly beaten and put in stocks (20:1–6), Jeremiah lets everything out. 'O LORD, you have deceived me, and I was deceived; you are stronger than I, and you have prevailed' (20:7). He complains that the word of God has become 'a reproach and derision all day long' (20:8). Yet he cannot stop — the word 'burns in my bones' (20:9) and he cannot hold it in. He curses the day of his birth (20:14) in language almost identical to Job. This is not resolved or explained by the text. The lament simply ends. The suffering is real and ongoing. The faithful prophet does not receive exemption from pain — he receives the presence of God within it." },
];

const PROPHECIES = [
  { ref: "Jer 1:4–10", color: GOLD, title: "The Call of Jeremiah", text: "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.' (1:5). God initiates. Jeremiah protests: 'I do not know how to speak, for I am only a youth' (1:6). God overrules the protest: 'Do not say, 'I am only a youth'; for to all to whom I send you, you shall go, and whatever I command you, you shall speak' (1:7). He touches Jeremiah's mouth and puts his words in it — a direct empowerment for an impossible calling. The call is not based on Jeremiah's qualification but on God's commissioning." },
  { ref: "Jer 18:1–10", color: GREEN, title: "The Potter and the Clay", text: "God sends Jeremiah to a potter's house. The potter is working at the wheel; the vessel is marred; the potter reworks it into a different vessel. 'O house of Israel, can I not do with you as this potter has done?' (18:6). The image is of sovereign divine creativity — but the context is not a simple declaration of divine control. The following verses (18:7–10) make clear that God's 'pottery' is responsive: if a nation repents, God relents. The image is not fatalism but the gracious freedom of a creator who can always begin again with the clay in his hands." },
  { ref: "Jer 29:1–14", color: BLUE, title: "The Letter to the Exiles", text: "Jeremiah writes a letter to the first wave of exiles in Babylon. His message is counter-cultural and costly: 'Build houses and live in them; plant gardens and eat their produce; seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare' (29:5–7). This is a theology of faithful engagement with the world, not withdrawal from it. Do not wait for rescue — invest where you are. And the famous promise: 'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope' (29:11) — addressed to a people in exile." },
  { ref: "Jer 31:31–34", color: TEAL, title: "The New Covenant", text: "The theological summit of the book and one of the most important promises in the OT: 'Behold, the days are coming, declares the LORD, when I will make a new covenant with the house of Israel and the house of Judah, not like the covenant that I made with their fathers on the day when I took them by the hand to bring them out of the land of Egypt, my covenant that they broke' (31:31–32). The new covenant differs from the Sinai covenant in mode of delivery: not on stone tablets but written on the heart. Not external obligation but internal transformation. Hebrews 8 quotes this entire passage as fulfilled in Jesus." },
];

const THEMES = [
  { color: TEAL, icon: "💔", title: "The Cost of Prophetic Faithfulness", text: "No OT prophet paid a higher personal cost for faithfulness than Jeremiah. He was rejected by his family (12:6), imprisoned multiple times (37:16, 38:6), publicly beaten (20:2), plotted against (18:18), thrown into a cistern to die (38:6), and mocked throughout his ministry. His lifetime produced almost no visible fruit — Jerusalem fell, the temple burned, the people went into exile. The book of Jeremiah is a profound meditation on what it costs to speak truth in a culture that does not want to hear it." },
  { color: RED, icon: "🏛️", title: "The Fall of Jerusalem", text: "Jeremiah's ministry spans the final four decades before Jerusalem's fall to Babylon in 586 BC. He witnessed the destruction of the city and the temple — the two objects of Israelite identity and security. His Lamentations (possibly attributed to him) are the raw liturgy of that grief. The fall of Jerusalem was not, for Jeremiah, primarily a political catastrophe — it was a theological crisis: YHWH was abandoning his house because his people had abandoned him (7:1–15)." },
  { color: GOLD, icon: "🪦", title: "The Two Baskets of Figs", text: "Jeremiah's vision of two baskets of figs (chapter 24) captures his theology of exile: the 'good figs' — those already exiled to Babylon — are the ones God will restore. The 'bad figs' — those who remained in Jerusalem and boasted of their security — face disaster. The counterintuitive logic: exile was God's mercy, a form of discipline that preserved a remnant. Remaining in Jerusalem while trusting in the temple ('This is the temple of the LORD' — 7:4) was the real spiritual danger." },
  { color: PURPLE, icon: "📝", title: "Jeremiah and Baruch", text: "Jeremiah's secretary Baruch ben Neriah is one of the most important figures in the book — and in the history of scripture. He wrote Jeremiah's dictated oracles (36:4), read them publicly when Jeremiah was banned from the temple (36:10), preserved and transmitted the scroll when the king burned it (36:27–28), and likely edited or compiled the final form of the book. Baruch's faithfulness in the background preserved Jeremiah's message for all generations. Scripture is often preserved by the invisible faithfulness of those no one celebrates." },
  { color: BLUE, icon: "🌱", title: "Future Hope Beyond Judgment", text: "Despite the crushing weight of judgment, Jeremiah holds simultaneously to fierce hope. He purchases a field in Anathoth (32:1–15) while the Babylonians are besieging the city — an enacted parable of hope: 'Houses and fields and vineyards shall again be bought in this land' (32:15). The 'Book of Consolation' (chapters 30–33) contains some of the most brilliant hope literature in Scripture: restoration of Israel and Judah, the New Covenant, the 'righteous Branch' from David's line, 'Jerusalem shall be called the throne of the LORD' (3:17)." },
  { color: GREEN, icon: "✉️", title: "Jeremiah 29:11 in Context", text: "Perhaps no OT verse is more frequently quoted or misapplied than Jeremiah 29:11. 'For I know the plans I have for you... plans for welfare and not for evil, to give you a future and a hope.' The promise is real — but it is addressed to the exiles in Babylon, with the caveat that the fulfillment is 70 years away (29:10). The verse is not a prosperity promise for immediate life circumstances. It is a declaration of God's unwavering commitment to his covenantal purposes even through catastrophic suffering. Hope, in Jeremiah, is always long-range and costly." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type JerTab = "overview" | "calling" | "laments" | "newcovenant" | "prophecies" | "faithfulness" | "themes" | "journal" | "videos";

export default function JeremiahGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<JerTab>("vine_jer_tab", "overview");
  const [openLament, setOpenLament] = useState<string | null>(null);
  const [openProphecy, setOpenProphecy] = useState<string | null>(null);
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_jer_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_jer_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

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

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(107,79,187,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📜</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
              The Book of Jeremiah
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              The weeping prophet — called before birth, rejected throughout his ministry, vindicated by history. A book about the cost of faithfulness in a collapsing world, and the God who promises a New Covenant written on the heart.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "52 Chapters", color: TEAL }, { label: "627–586 BC", color: GOLD }, { label: "Major Prophet", color: PURPLE }, { label: "New Covenant", color: GREEN }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as JerTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>The Weeping Prophet</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  Jeremiah ministered during the most catastrophic period in Israel's history: the final decades before the Babylonian conquest of Jerusalem, the burning of Solomon's Temple, and the exile of Judah's population. He prophesied across five kings' reigns — from Josiah through Zedekiah — and lived to see everything he warned about come true.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  The book of Jeremiah is the longest in the entire Bible (by word count) and among the most complex: it interweaves poetry and prose, prophecy and biography, lament and hope, in a non-chronological arrangement that mirrors the turbulence of its era. It is also the most personally revealing of all prophetic books — we know more about Jeremiah's inner life than any other OT prophet.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>
                  His central theological contribution is the New Covenant promise of Jeremiah 31:31–34, quoted verbatim in Hebrews 8 as the definitive description of what Jesus has inaugurated. But the path to that promise runs through fire, imprisonment, rejection, and the fall of everything Jeremiah loved.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "👤", title: "Who Was Jeremiah?", text: "Born in Anathoth (a priestly town near Jerusalem) to a priestly family, Jeremiah was called to prophesy around 627 BC, at approximately 20 years of age. He never married (by divine command — 16:2), had no children, watched his hometown plot his murder, and preached to an audience that repeatedly tried to kill him. He is sometimes called 'the prophet like Moses' — deeply identified with his people's suffering while standing against their sin." },
                  { icon: "📅", title: "Historical Context", text: "Jeremiah's ministry spans 627–586 BC. Judah's geopolitical situation was dire: caught between the Assyrian, Egyptian, and Babylonian empires. Babylon under Nebuchadnezzar II emerged as the dominant power and conquered Jerusalem in three waves: 605, 597, and 586 BC. The final conquest destroyed the Temple — the center of Israel's religious life — and exiled most of the population." },
                  { icon: "📚", title: "Literary Features", text: "Jeremiah is unusually complex literarily: chapters are not in chronological order; it switches between first-person ('I') and third-person ('Jeremiah') narratives; poetry and prose alternate throughout. The Septuagint (Greek translation) and the Hebrew Masoretic text differ significantly — the Septuagint is about 15% shorter and arranges the oracles against the nations differently." },
                  { icon: "🌟", title: "Theological Centerpiece", text: "The 'Book of Consolation' (chapters 30–33) stands at the heart of Jeremiah's message: four chapters of brilliant future hope in the midst of disaster. The New Covenant promise (31:31–34) is the theological summit. Jeremiah is also the only OT prophet explicitly called 'a prophet to the nations' (1:5) — his message has universal scope." },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: accent, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CALLING */}
          {activeTab === "calling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>Jeremiah 1: The Call Before Birth</h2>
                <blockquote style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "1rem", margin: "0 0 1.5rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations." — Jeremiah 1:5
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>
                  The call narrative in Jeremiah 1 establishes the whole framework for understanding his ministry. Three movements: God's declaration of pre-birth election and appointment (1:4–5), Jeremiah's protest of inadequacy (1:6), and God's overruling the protest with direct commission and empowerment (1:7–10).
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>
                  God's call precedes all of Jeremiah's self-knowledge. "Before I formed you... I knew you." The Hebrew word for "know" (yada) is the word for intimate, covenantal knowledge — the same word used for marital intimacy in Genesis 4:1. God's knowledge of Jeremiah is not merely informational; it is relational and elective. This personal, pre-birth calling becomes Jeremiah's anchor in the darkest moments of his ministry.
                </p>
              </div>
              {[
                { color: GOLD, title: "Two Visions at the Call", ref: "Jer 1:11–19", text: "God immediately follows the call with two confirming visions. An almond branch (Hebrew: shaqed) confirms that God is 'watching over' (shoqed — a wordplay) his word to perform it — the certainty of the coming judgment. A boiling pot tilting from the north warns of the coming Babylonian invasion. These are not separate prophecies — they are the concrete content of Jeremiah's prophetic task: to announce the inevitable judgment that Judah's sin has made necessary. The call and the content are inseparable." },
                { color: BLUE, title: "The Fortified City", ref: "Jer 1:17–19", text: "God's final words in the call narrative are both a charge and a promise: 'Do not be dismayed by them, lest I dismay you before them. And I, behold, I make you this day a fortified city, an iron pillar, and bronze walls, against the whole land, against the kings of Judah, its officials, its priests, and the people of the land. They will fight against you, but they shall not prevail against you, for I am with you, declares the LORD, to deliver you.' The promise is not popularity or success. It is presence and preservation through the opposition that is promised as certain." },
                { color: PURPLE, title: "The Prophet as Intercessor — and Its Limits", ref: "Jer 7:16; 11:14; 14:11", text: "Three times God explicitly forbids Jeremiah to pray for the people: 'Do not pray for this people, or lift up a cry or prayer for them, and do not intercede with me, for I will not hear you' (7:16). This is theologically shocking — intercession is a primary prophetic function. But the situation has reached a point where judgment is sealed. This is not God's cruelty — it is the mercy of honesty. Jeremiah's forbidden prayers protect him from the false hope of believing his intercession can stop what the people's persistent sin has made inevitable." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <h3 style={{ color: item.color, fontWeight: 700 }}>{item.title}</h3>
                    <span style={{ color: MUTED, fontSize: "0.78rem" }}>{item.ref}</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* LAMENTS */}
          {activeTab === "laments" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>The Confessions of Jeremiah</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem" }}>Unique among the prophets, Jeremiah's book contains four extended personal laments — sometimes called "confessions" or "psalms of lament" — in which he pours out his anguish to God with shocking honesty. These passages (11:18–20; 15:10–21; 17:14–18; 20:7–18) are among the rawest expressions of faith in crisis in all of Scripture.</p>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>They are not failures of faith — they are faith in action, directed toward God even in accusation. The Psalms of Lament follow the same pattern: address, complaint, petition, expression of trust, and (usually) vow of praise. Jeremiah's confessions follow this liturgical form but push it to its breaking point.</p>
              </div>
              {LAMENTS.map(l => (
                <div key={l.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenLament(openLament === l.ref ? null : l.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: l.color, fontWeight: 700 }}>{l.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{l.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openLament === l.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openLament === l.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{l.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* NEW COVENANT */}
          {activeTab === "newcovenant" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>Jeremiah 31:31–34: The New Covenant Promise</h2>
                <blockquote style={{ borderLeft: `3px solid ${accent}`, paddingLeft: "1rem", margin: "0 0 1.5rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "Behold, the days are coming, declares the LORD, when I will make a new covenant with the house of Israel and the house of Judah, not like the covenant that I made with their fathers on the day when I took them by the hand to bring them out of the land of Egypt, my covenant that they broke, though I was their husband, declares the LORD. For this is the covenant that I will make with the house of Israel after those days, declares the LORD: I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people... For I will forgive their iniquity, and I will remember their sin no more."
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>
                  This is the only place in the Hebrew Bible where the phrase "new covenant" (berit hadashah) appears explicitly. It is the theological summit of the entire OT — the promise toward which all prior covenants are pointing and which all subsequent Scripture explains.
                </p>
              </div>
              {[
                { color: TEAL, title: "What Is New About the New Covenant?", text: "The newness is not the relationship (YHWH and his people) — that is the same as at Sinai: 'I will be their God and they shall be my people' (31:33). The newness is the mode: not law on stone tablets requiring external obedience, but law written on the heart — internal transformation. The problem with the Sinai covenant was not the law itself (which Paul calls 'holy, righteous, and good' — Romans 7:12) but the hardness of the hearts receiving it (Heb 8:8). The New Covenant addresses this root problem." },
                { color: BLUE, title: "The Forgiveness Clause", text: "'For I will forgive their iniquity, and I will remember their sin no more' (31:34). The final clause of the New Covenant promise is not an afterthought — it is the foundation of everything else. The new covenant is possible because God himself absorbs the cost of the broken covenant relationship. He forgives completely and irrevocably — 'remembers no more' not in the sense of forgetfulness but of deliberate non-prosecution. The New Covenant is a grace-covenant from beginning to end." },
                { color: PURPLE, title: "Fulfillment in the New Testament", text: "The writer of Hebrews quotes Jeremiah 31:31–34 in full (Hebrews 8:8–12) — the longest OT quotation in the NT — and announces that this is precisely what Jesus has inaugurated. At the Last Supper, Jesus takes the cup and says: 'This cup that is poured out for you is the new covenant in my blood' (Luke 22:20). Paul calls himself and his fellow ministers 'ministers of a new covenant — not of the letter but of the Spirit' (2 Cor 3:6). The promise Jeremiah received in the ruins of Jerusalem's hope is fulfilled in the resurrection of the Lord." },
                { color: GREEN, title: "The Context: Chapters 30–33 (The Book of Consolation)", text: "The New Covenant promise is embedded in four chapters of unbroken hope — unusual in a book as dark as Jeremiah. Chapters 30–33 contain promises of: Israel's restoration from exile (30:3), the coming 'righteous Branch' from David's line (33:15–16), and Jeremiah's own land purchase as a sign of hope (32:1–15). These chapters are the theological counterweight to the judgment that surrounds them. God's judgment is always penultimate. The final word is always restoration." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* PROPHECIES */}
          {activeTab === "prophecies" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Key Prophecies and Passages</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>From the call narrative to the famous letter to the exiles — four passages that anchor Jeremiah's message.</p>
              </div>
              {PROPHECIES.map(p => (
                <div key={p.ref} style={{ ...card, overflow: "hidden" }}>
                  <button onClick={() => setOpenProphecy(openProphecy === p.ref ? null : p.ref)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <span style={{ color: p.color, fontWeight: 700 }}>{p.title}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{p.ref}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem", transform: openProphecy === p.ref ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>›</span>
                  </button>
                  {openProphecy === p.ref && (
                    <div style={{ padding: "0 1.5rem 1.5rem" }}>
                      <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{p.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* FAITHFULNESS */}
          {activeTab === "faithfulness" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>Faithful in a Collapsing World</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Jeremiah is the OT's most profound meditation on what faithfulness looks like when every external marker of success is absent — when the culture rejects your message, the institutions are corrupt, the people you love are in exile, and the city you prayed for is in flames.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>His faithfulness is not triumphant — it is enduring. He does not overcome by winning; he overcomes by continuing. The book of Jeremiah does not end with Jeremiah in peace — it ends with him being forcibly taken to Egypt by the remnant he tried to serve. And yet the word he spoke endures. The promise he received shapes history. The New Covenant he announced is now the covenant we live in.</p>
              </div>
              {[
                { color: TEAL, title: "The Enacted Parables", text: "Jeremiah regularly performed prophetic 'sign acts' — physical dramas that embodied his message. He wore an ox yoke to symbolize submission to Babylon (27:2–7). He buried a linen belt in a rock crevice to symbolize Judah's ruined pride (13:1–11). He smashed a pottery flask before the elders to announce Jerusalem's destruction (19:1–13). He purchased a field in enemy-occupied territory to enact the hope of restoration (32:1–15). These were not illustrations — they were the word of God in bodily form, participating in the reality they proclaimed." },
                { color: GREEN, title: "The Cost of Not Compromising", text: "Jeremiah was offered a relatively comfortable position — the false prophet Hananiah (chapter 28) offered a competing message of quick deliverance. Jeremiah could have adopted this message, avoided persecution, and lived in peace. He didn't. He challenged Hananiah publicly, announced his death (which happened — 28:17), and continued his unpopular message. The prophets who told the people what they wanted to hear got audiences and favor. Jeremiah got a cistern. The book of Jeremiah is a long argument that faithfulness to truth is more important than relevance to the moment." },
                { color: PURPLE, title: "After the Fall: The Choice in Mizpah", text: "After Jerusalem's destruction, Jeremiah was given a choice by the Babylonian commander: go to Babylon or remain with the remnant in the land (40:1–6). He chose to remain — to stay with the traumatized, powerless, grief-stricken remnant rather than accept comfortable exile. And then, against his explicit counsel (chapter 42), the remnant took him forcibly to Egypt (chapter 43). His final recorded words are oracles against Egypt — continuing to speak faithfully even in the country he told them not to flee to. Faithfulness to calling, even when the community you serve ignores your counsel." },
                { color: RED, title: "The Burned Scroll and the New One", text: "King Jehoiakim burned Jeremiah's scroll — the compiled record of his oracles — in a brazier, cut by cut, without fear or grief (36:23–24). His court officials were horrified. God's response: 'Dictate again.' A new scroll was written that contained all the words of the first scroll, plus additional material (36:32). The king's burning of the word did not stop the word — it extended it. This incident contains a profound theology of Scripture: human opposition cannot finally silence the word of God. It is indestructible not by power but by the faithfulness of the One who speaks it." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* THEMES */}
          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {THEMES.map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* JOURNAL */}
          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Jeremiah Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. Jeremiah 29:11, Jeremiah 31:31" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="Where do you relate to Jeremiah's experience — his calling, his suffering, his hope? What is God saying to you through this book?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="A prayer for faithfulness in your own 'collapsing world' moments..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>
                    {jSaved ? "✓ Saved" : "Save Entry"}
                  </button>
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

          {/* VIDEOS */}
          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Jeremiah — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Curated teachings on Jeremiah — the man, his message, and the New Covenant that changed everything.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "RSK36cHs7XE", title: "Jeremiah Overview — Part 1", channel: "BibleProject" },
                  { id: "8sPH6MbGFTw", title: "Jeremiah Overview — Part 2", channel: "BibleProject" },
                  { id: "4TCgFPBPwG0", title: "New Covenant Explained", channel: "The Bible Project" },
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
