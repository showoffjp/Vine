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
  { id: "context", label: "Who Was Amos?" },
  { id: "justice", label: "Justice & Righteousness" },
  { id: "worship", label: "Worship Without Justice" },
  { id: "visions", label: "The Five Visions" },
  { id: "restoration", label: "Restoration" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type AmosTab = "overview" | "context" | "justice" | "worship" | "visions" | "restoration" | "themes" | "journal" | "videos";

const CONTEXT_SECTIONS = [
  {
    color: GOLD,
    title: "A Shepherd from the South",
    body: "Amos introduces himself with deliberate humility: 'I was no prophet, nor a prophet's son, but I was a herdsman and a dresser of sycamore figs. But the LORD took me from following the flock, and the LORD said to me, Go, prophesy to my people Israel' (7:14–15). He came from Tekoa in Judah (the southern kingdom) but was sent to Bethel — the royal sanctuary of Israel (the northern kingdom). He was an outsider, a nobody, a manual laborer. His authority rested entirely on the divine commission.",
  },
  {
    color: TEAL,
    title: "Historical Setting: Around 760 BC",
    body: "Amos prophesied during the reign of Jeroboam II of Israel, a period of remarkable prosperity and territorial expansion. The wealthy were building luxurious houses, enjoying summer and winter homes, drinking wine from bowls, stretching out on ivory couches (3:15, 6:4–6). The northern kingdom was at its peak economically — and at its worst morally. The rich were selling the righteous for silver and the needy for a pair of sandals (2:6). Into this comfortable, complacent prosperity, Amos arrives with a message no one wanted to hear.",
  },
  {
    color: RED,
    title: "The Lion's Roar — Amos 1:2",
    body: "'The LORD roars from Zion and utters his voice from Jerusalem' (1:2). The book opens with a sound: God's voice like a lion's roar. Amos is not delivering mild suggestions. The oracles against surrounding nations — Syria, Gaza, Tyre, Edom, Ammon, Moab, Judah, and finally Israel — build like a trap closing. The crowd would have applauded as each neighbor nation was condemned. Then came the turn: 'For three transgressions of Israel, and for four, I will not revoke the punishment' (2:6). The trap shuts on the listener.",
  },
  {
    color: PURPLE,
    title: "Structure of the Book",
    body: "Amos divides roughly into three sections: (1) Chapters 1–2: Eight oracles against the nations culminating in the oracle against Israel. (2) Chapters 3–6: Three speeches beginning 'Hear this word' — indicting Israel's exploitation of the poor, religious formalism, and pride. (3) Chapters 7–9: Five visions of divine judgment, with a biographical interlude (the confrontation with Amaziah, priest of Bethel, in 7:10–17) and a closing promise of restoration (9:11–15). The book is short but relentless.",
  },
];

const JUSTICE_SECTIONS = [
  {
    color: TEAL,
    title: "Selling the Righteous for Silver — Amos 2:6–7",
    body: "'They sell the righteous for silver, and the needy for a pair of sandals — those who trample the head of the poor into the dust of the earth and turn aside the way of the afflicted.' Amos's indictment of Israel focuses on economic exploitation. Courts were being corrupted (5:10, 12). The poor were crushed by unfair practices. Justice was being 'turned to wormwood' (5:7). The language is specific and visceral — not a vague complaint about society, but a precise charge against people who knew better and chose otherwise.",
  },
  {
    color: RED,
    title: "Prepare to Meet Your God — Amos 4:12",
    body: "After five failed judgments — famine, drought, blight, locust, plague, earthquake (4:6–11) — God says, 'Therefore thus I will do to you, O Israel; because I will do this to you, prepare to meet your God, O Israel.' This is one of the most sobering verses in the OT. God had been sending smaller judgments as warnings, but Israel had not returned. The phrase 'prepare to meet your God' is not an invitation to revival. It is a summons to judgment. The people's refusal to repent had closed a window.",
  },
  {
    color: GOLD,
    title: "The Plumb Line — Amos 7:7–9",
    body: "In the third vision, the Lord stands beside a wall built with a plumb line, holding a plumb line. 'I am setting a plumb line in the midst of my people Israel; I will never again pass by them' (7:8). A plumb line reveals whether a structure is truly vertical. God is testing Israel against his own standard of justice and righteousness — and the wall is not straight. The vision is followed immediately by the confrontation with Amaziah, the official religion's defender, who tries to silence Amos. Truth-tellers threaten power.",
  },
  {
    color: BLUE,
    title: "Let Justice Roll Down — Amos 5:24",
    body: "'But let justice roll down like waters, and righteousness like an ever-flowing stream' (5:24). This is perhaps the most famous verse in Amos — quoted by Martin Luther King Jr. in the 'I Have a Dream' speech and at the March on Washington. It follows one of Scripture's most severe critiques of religious worship divorced from moral life (5:21–23). The image is of a never-failing torrent: not justice as occasional gesture, but justice as a permanent, unstoppable force shaping the entire landscape of community life. Amos demands structural transformation, not charitable overflow.",
  },
];

const WORSHIP_SECTIONS = [
  {
    color: RED,
    title: "I Hate Your Festivals — Amos 5:21–23",
    body: "'I hate, I despise your feasts, and I take no delight in your solemn assemblies. Even though you offer me your burnt offerings and grain offerings, I will not accept them; and the peace offerings of your fattened animals, I will not look upon them. Take away from me the noise of your songs; to the melody of your harps I will not listen.' This is a stunning rejection — not of worship per se, but of worship that substitutes for justice. Israel's religious calendar was full. Their sanctuaries were busy. Their music was elaborate. God hated it because it was accompanied by the crushing of the poor.",
  },
  {
    color: GOLD,
    title: "Bethel and Gilgal — Empty Pilgrimage Sites",
    body: "'Come to Bethel, and transgress; to Gilgal, and multiply transgression; bring your sacrifices every morning, your tithes every three days; offer a sacrifice of thanksgiving of that which is leavened, and proclaim freewill offerings, publish them; for so you love to do, O people of Israel!' (4:4–5, ESV). Amos is using biting sarcasm. Bethel and Gilgal were prestigious pilgrimage sites. The people were faithful to their religious obligations — tithes, sacrifices, offerings. But Amos exposes this religiosity as self-serving performance. Worship had become a way of feeling righteous without being righteous.",
  },
  {
    color: TEAL,
    title: "Seek Me and Live — Amos 5:4–6",
    body: "'Seek me and live; but do not seek Bethel, and do not enter into Gilgal or cross over to Beersheba; for Gilgal shall surely go into exile, and Bethel shall come to nothing.' God is not opposed to worship. He is opposed to worship that has been emptied of genuine relationship and moral seriousness. The alternative to hollow ritual is not no religion but deeper religion: seeking God himself, not religious geography; living justly, not performing sacrifice; hating evil and loving good (5:14–15). Amos is not anti-worship; he is anti-fake-worship.",
  },
  {
    color: PURPLE,
    title: "Amos 5:21–24 and the Christian Tradition",
    body: "The passage has been a touchstone for prophetic Christianity throughout history — from the Civil Rights movement to liberation theology to contemporary calls for social justice. It raises a perennial question: Can a church that ignores the poor be worshiping God? Isaiah 1:10–17, Micah 6:6–8, and Jesus's words in Matthew 23:23 ('you have neglected the weightier matters of the law: justice and mercy and faithfulness') echo Amos's critique. The biblical tradition is consistent: religious practice is not a substitute for moral practice. It is meant to form and sustain it.",
  },
];

const VISIONS = [
  {
    number: "1st Vision",
    title: "The Locusts — Amos 7:1–3",
    color: GREEN,
    description: "The Lord is forming a locust swarm to devour the land after the king's mowing. Amos intercedes: 'O Lord God, please forgive! How can Jacob stand? He is so small!' The Lord relents. This vision — and the next — establish a pattern: Amos's intercession can, at this stage, turn back judgment. This is the prophetic office at its most hopeful.",
  },
  {
    number: "2nd Vision",
    title: "The Fire — Amos 7:4–6",
    color: RED,
    description: "A fire is devouring the great deep and eating up the land. Amos cries out again, and again the Lord relents. Two intercessions, two reprieves. But the pattern suggests the window is closing. There will be a point when judgment is no longer averted by intercession because the opportunity for repentance has passed.",
  },
  {
    number: "3rd Vision",
    title: "The Plumb Line — Amos 7:7–9",
    color: GOLD,
    description: "God stands by a wall with a plumb line. 'I am setting a plumb line in the midst of my people Israel; I will never again pass by them.' No intercession this time. The language has shifted: 'never again pass by them' means the time of patient tolerance is over. The high places of Isaac will be made desolate; the sanctuaries of Israel will be laid waste. It is this vision that provokes the confrontation with Amaziah.",
  },
  {
    number: "4th Vision",
    title: "The Basket of Summer Fruit — Amos 8:1–3",
    color: TEAL,
    description: "A basket of summer fruit (qayits). God says: 'The end (qets) has come upon my people Israel.' The Hebrew wordplay — qayits/qets — makes the point with devastating economy: ripe fruit signals the season is over; the end is here. The songs of the temple shall become wailings; dead bodies shall be everywhere; silence.",
  },
  {
    number: "5th Vision",
    title: "The Temple Top — Amos 9:1–4",
    color: PURPLE,
    description: "The Lord stands beside the altar and commands: 'Strike the capitals until the thresholds shake.' Even if the people flee to Sheol, Carmel, the sea, captivity — God's hand will find them. There is nowhere to hide from a just God when judgment has been set. This is the most frightening vision in the book — and it sets up, by contrast, the restoration that follows.",
  },
];

const RESTORATION_SECTIONS = [
  {
    color: GREEN,
    title: "The Fallen Tent of David — Amos 9:11–12",
    body: "'In that day I will raise up the booth of David that is fallen and repair its breaches, and raise up its ruins and rebuild it as in the days of old, that they may possess the remnant of Edom and all the nations who are called by my name.' This promise follows nine chapters of judgment. The final word is not destruction but restoration. The 'booth of David' — the Davidic dynasty — will be rebuilt. James quotes this passage at the Jerusalem Council (Acts 15:16–17) to explain why Gentiles are being included in the people of God. Amos's promise, for James, is being fulfilled in the inclusion of the nations through Christ.",
  },
  {
    color: GOLD,
    title: "The Land Restored — Amos 9:13–15",
    body: "'Behold, the days are coming...when the plowman shall overtake the reaper and the treader of grapes him who sows the seed; the mountains shall drip sweet wine, and all the hills shall flow with it. I will restore the fortunes of my people Israel, and they shall rebuild the ruined cities and inhabit them; they shall plant vineyards and drink their wine, and they shall make gardens and eat their fruit. I will plant them on their land, and they shall never again be uprooted out of the land that I have given them.' The end of Amos is extraordinarily lush — a reversal of the drought, locust, and blight that were God's warnings. Creation and community restored.",
  },
  {
    color: TEAL,
    title: "Amos and the Prophetic Vision of the New Creation",
    body: "Amos 9:11–15 belongs to a cluster of OT restoration promises that envision not just political recovery but cosmic renewal. The images of abundant harvest, rebuilt cities, and a permanently rooted people connect with Isaiah 65:17–25, Ezekiel 36–37, and ultimately Revelation 21–22. The same God who demands justice and refuses false worship also promises a world where justice is fully established — not by human effort alone, but by divine faithfulness. The prophetic tradition holds these together: the ethical demand and the eschatological promise are not in tension; the promise is the final form of the demand.",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Justice as God's Core Demand",
    body: "More than any other OT book, Amos locates the center of covenant faithfulness in justice — mishpat — the fair treatment of the poor and vulnerable in courts, markets, and daily life. Religious practice is not an alternative to justice; it is hollow without it.",
  },
  {
    color: RED,
    title: "The Danger of Prosperity",
    body: "Israel's wealth had not produced gratitude or generosity. It had produced complacency, exploitation, and religiosity without ethics. Amos is a standing warning against the assumption that material blessing equals divine favor. Prosperity unchecked by justice becomes corruption.",
  },
  {
    color: TEAL,
    title: "True Worship Has Ethical Dimensions",
    body: "Amos 5:21–24 is one of Scripture's clearest statements that worship divorced from justice is not worship — it is noise. The prophetic critique is not anti-liturgical; it insists that genuine encounter with God produces transformation of life, including the life of community and economy.",
  },
  {
    color: BLUE,
    title: "The Prophetic Office",
    body: "Amos models what it means to speak truth to power at personal cost. He was told to leave by Amaziah (7:12–13). He refused. The prophetic calling is not to make people comfortable but to hold the community accountable to the covenant — even when that is dangerous.",
  },
  {
    color: GREEN,
    title: "The Day of the LORD",
    body: "'Woe to you who desire the day of the LORD! Why would you have the day of the LORD? It is darkness, and not light' (5:18). Amos subverts popular expectation. Israel assumed the Day of the LORD would bring their vindication against enemies. Amos says: No — it will bring judgment on you too. Privilege does not provide exemption from moral accountability.",
  },
  {
    color: PURPLE,
    title: "Restoration as God's Final Word",
    body: "Despite relentless judgment, Amos ends with restoration (9:11–15). God's wrath serves his love. The purpose of prophetic judgment is not destruction for its own sake but the clearing away of what has become rotten so that something true can grow. The booth of David will be raised. The nations will be included. Creation will overflow with abundance.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Amos 5:24 demands 'justice like waters, righteousness like an ever-flowing stream.' Where in your community is justice not flowing freely?",
  "Amos left his flock when God called him. What would it look like for you to respond to an uncomfortable calling this week?",
  "Amos 5:21–23 says God hated Israel's worship because it was separated from ethics. What in your own spiritual practice might God be calling hollow?",
  "Amos 4:12 says 'prepare to meet your God.' How does awareness of divine accountability shape your choices?",
  "The book ends with restoration (9:11–15). Where do you need to trust God's final word over what you see right now?",
];

export default function AmosGuidePage() {
  const [tab, setTab] = usePersistedState<AmosTab>("vine_amos_tab", "overview");
  const [openContext, setOpenContext] = useState<string | null>(null);
  const [openJustice, setOpenJustice] = useState<string | null>(null);
  const [openWorship, setOpenWorship] = useState<string | null>(null);
  const [openRestoration, setOpenRestoration] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_amos_journal");
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
    localStorage.setItem("vine_amos_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_amos_journal", JSON.stringify(updated));
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
                <span style={{ color: MUTED, fontSize: 14 }}>9 Chapters · ~760 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Amos
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                A shepherd from Tekoa carrying God's thunderous demand for justice. <em style={{ color: TEXT }}>"Let justice roll down like waters, and righteousness like an ever-flowing stream."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as AmosTab)}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Amos is one of the earliest writing prophets and one of the most radical. He stands in the tradition of prophets who dare to tell the powerful that their prosperity does not excuse their injustice — and that God is watching.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Amos of Tekoa" },
                    { label: "Time Period", value: "~760–750 BC" },
                    { label: "Audience", value: "Northern Kingdom of Israel" },
                    { label: "Chapters", value: "9" },
                    { label: "Theme", value: "Justice, judgment, restoration" },
                    { label: "Key Verse", value: "Amos 5:24" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Central Message</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    Amos is not primarily a book about ancient Israel. It is a book about what it means to belong to God when you have wealth, religious infrastructure, and power — and what God demands of those who claim his name. The answer Amos gives is uncomfortable and precise: <strong style={{ color: TEXT }}>justice for the poor, righteousness in your courts, and worship that is genuine rather than performative.</strong> Everything else — the festivals, the music, the tithes, the sacrifices — God hates, unless it flows from and produces ethical transformation.
                  </p>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Amos 1:2", desc: "The LORD roars from Zion — opening of prophetic judgment" },
                      { ref: "Amos 2:6–7", desc: "Israel indicted for selling the poor for silver" },
                      { ref: "Amos 4:12", desc: "Prepare to meet your God, O Israel" },
                      { ref: "Amos 5:18–20", desc: "Woe to those who desire the Day of the LORD" },
                      { ref: "Amos 5:21–24", desc: "I hate your festivals — let justice roll down like waters" },
                      { ref: "Amos 7:7–9", desc: "The plumb line vision" },
                      { ref: "Amos 7:14–15", desc: "Amos's self-identification: herdsman and fig farmer" },
                      { ref: "Amos 9:11–15", desc: "Restoration of the fallen tent of David" },
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
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Who Was Amos?</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Amos is one of the few OT prophets who is not from the prophetic establishment. His authority is not institutional — it is purely divine calling. Understanding who he was sharpens the force of everything he says.</p>
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
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Justice & Righteousness</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Amos uses two paired Hebrew words throughout the book: <em>mishpat</em> (justice — what is fair and right in communal relationships) and <em>tsedaqah</em> (righteousness — being what you ought to be before God and neighbor). Together they describe the moral architecture of a God-shaped community.</p>
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

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginTop: 32 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Amos 5:24 — The Verse</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "But let justice roll down like waters, and righteousness like an ever-flowing stream."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Amos 5:24 (ESV)</cite>
                  </blockquote>
                </div>
              </div>
            )}

            {/* WORSHIP */}
            {tab === "worship" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Worship Without Justice</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Amos 5:21–24 is one of the most challenging passages in the Bible for religious people. God explicitly rejects Israel's worship — not because worship is bad, but because this worship was being used as a substitute for moral transformation.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {WORSHIP_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenWorship(openWorship === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openWorship === s.title ? "−" : "+"}</span>
                      </button>
                      {openWorship === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VISIONS */}
            {tab === "visions" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Five Visions</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapters 7–9 contain five visions in escalating intensity. The first two include intercession and divine relenting; the last three do not. Together they trace the arc from warning to irreversible judgment — and then, unexpectedly, to restoration.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {VISIONS.map((v, i) => (
                    <div key={v.number} style={{ background: CARD, border: `1px solid ${v.color}33`, borderRadius: 12, padding: "20px 24px", display: "flex", gap: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${v.color}22`, border: `2px solid ${v.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: v.color, fontWeight: 800, fontSize: 14 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: v.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{v.number}</div>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{v.title}</div>
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESTORATION */}
            {tab === "restoration" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Restoration</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>After eight and a half chapters of judgment, Amos closes with five verses of extraordinary hope (9:11–15). This is not a contradiction of everything before; it is the purpose of everything before. Judgment clears the ground for something new.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {RESTORATION_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRestoration(openRestoration === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRestoration === s.title ? "−" : "+"}</span>
                      </button>
                      {openRestoration === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Amos challenges comfortable Christianity. Use this space to engage honestly.</p>

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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Amos 5:24" style={inputStyle} />
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Deepen your study of Amos through visual teaching on justice, the prophetic tradition, and what it means to seek God.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="SCkyWH4sS4s" title="The Book of Amos" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Amos — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="g_igCcVS6gY" title="Justice — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Justice (Mishpat) — BibleProject word study</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="xvOFoEpjfqw" title="Righteousness — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Righteousness (Tsedaqah) — BibleProject word study</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets — Overview" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Prophets — what they were and how to read them</p>
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
