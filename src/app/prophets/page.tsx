"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PROPHETS = [
  {
    name: "Isaiah",
    period: "8th century BC",
    color: "#EF4444",
    context: "Prophet to Judah during the Assyrian threat; witnessed the fall of the northern kingdom",
    key_message: "God is the Holy One of Israel — sovereign over all nations, pursuing the redemption of his people through a Servant who would bear their sin",
    messianic_focus: "Isaiah 53 (Suffering Servant), Isaiah 9:6 (titles of the Child), Isaiah 7:14 (Immanuel)",
    famous_verse: "Isaiah 53:5",
    summary: "The most quoted OT book in the New Testament. Isaiah contains the clearest pre-Christ articulation of substitutionary atonement, the new creation, and the universal scope of God's redemptive purposes. Often called 'the fifth Gospel' for its density of messianic prophecy.",
  },
  {
    name: "Jeremiah",
    period: "7th–6th century BC",
    color: "#F59E0B",
    context: "Prophet to Judah during its final decades before Babylonian exile; witnessed Jerusalem's destruction",
    key_message: "God's judgment on covenant-breaking Israel is real and coming — but beyond judgment lies a New Covenant written on the heart, not stone",
    messianic_focus: "Jeremiah 31:31-34 (New Covenant), Jeremiah 23:5-6 (righteous Branch)",
    famous_verse: "Jeremiah 29:11",
    summary: "The most personal and emotionally raw of the prophets. Jeremiah's confessions (Jer. 12, 15, 20) reveal a man tormented by his calling. His prophecy of the New Covenant (31:31-34) is among the most significant in the Old Testament — directly cited in Hebrews 8.",
  },
  {
    name: "Ezekiel",
    period: "6th century BC",
    color: "#8B5CF6",
    context: "Priest-prophet exiled to Babylon; ministered to the exiles far from Jerusalem and the temple",
    key_message: "God's glory departed from a corrupt temple — but will return to fill a new temple in a restored land, and God will give his people a new heart and his own Spirit",
    messianic_focus: "Ezekiel 34 (Shepherd King), Ezekiel 36:24-27 (heart and Spirit), Ezekiel 37 (dry bones)",
    famous_verse: "Ezekiel 36:26",
    summary: "Ezekiel's visions are among the most visually dramatic in Scripture — the living creatures (ch. 1), the valley of dry bones (ch. 37), the new temple (chs. 40-48). His theology of inner transformation (new heart, new spirit) anticipates Pentecost and the New Covenant.",
  },
  {
    name: "Daniel",
    period: "6th century BC",
    color: "#3B82F6",
    context: "Exiled to Babylon as a young man; served in the court of Nebuchadnezzar and successive rulers",
    key_message: "God is sovereign over every empire and every king. Human kingdoms rise and fall; the Ancient of Days will give the kingdom to the Son of Man forever",
    messianic_focus: "Daniel 7 (Son of Man), Daniel 9:24-27 (seventy weeks), Daniel 2 (the stone kingdom)",
    famous_verse: "Daniel 7:13-14",
    summary: "Daniel integrates court narrative with apocalyptic vision — showing how to live faithfully under pagan authority while trusting God's ultimate sovereignty. His 'Son of Man' vision (ch. 7) is the primary background for Jesus's self-designation in the Gospels.",
  },
  {
    name: "Hosea",
    period: "8th century BC",
    color: GREEN,
    context: "Prophet to the northern kingdom (Israel) before the Assyrian conquest; called to enact his message through a painful marriage",
    key_message: "Israel has committed spiritual adultery by pursuing other gods — but God, like Hosea with Gomer, will pursue his unfaithful people with relentless, costly love",
    messianic_focus: "Hosea 11:1 (cited in Matthew 2:15), Hosea 13:14 (quoted in 1 Corinthians 15:55)",
    famous_verse: "Hosea 6:6",
    summary: "Hosea's marriage to Gomer — who was unfaithful — becomes a living parable of God's relationship with Israel. The book is one of the most emotionally powerful in the canon, portraying God's love as wounded, persistent, and ultimately redemptive. Jesus cited Hosea 6:6 twice.",
  },
  {
    name: "Amos",
    period: "8th century BC",
    color: "#0EA5E9",
    context: "Shepherd and fig-tender from Tekoa called to prophesy against the prosperous northern kingdom",
    key_message: "Religious activity without justice is an offense to God. The comfortable and powerful will face judgment; God desires justice to 'roll on like a river'",
    messianic_focus: "Amos 9:11-12 (restoration of David's tent — cited in Acts 15:16-17)",
    famous_verse: "Amos 5:24",
    summary: "Amos is the prophet of social justice — attacking the exploitation of the poor by the wealthy in a time of material prosperity. His concern is not political but theological: God's character demands that covenant community care for the vulnerable. James quoted him at the Jerusalem Council.",
  },
  {
    name: "Micah",
    period: "8th century BC",
    color: "#DC2626",
    context: "Contemporary of Isaiah; prophesied to both Israel and Judah during the Assyrian crisis",
    key_message: "God requires justice, mercy, and humility — not religious performance. Judgment is coming, but so is a Ruler from Bethlehem who will shepherd his people in peace",
    messianic_focus: "Micah 5:2 (birthplace of the Messiah), Micah 4:1-5 (nations streaming to Zion)",
    famous_verse: "Micah 6:8",
    summary: "Micah 6:8 — 'What does the LORD require of you? To act justly, love mercy, and walk humbly with your God' — is one of the most concise summaries of covenant ethics in all of Scripture. His prophecy of Bethlehem (5:2) was cited by the chief priests when Herod asked where the Messiah would be born.",
  },
  {
    name: "Zechariah",
    period: "6th century BC",
    color: "#7C3AED",
    context: "Post-exilic prophet who encouraged the returned exiles to rebuild the temple with eschatological vision",
    key_message: "Do not despise small beginnings. The Spirit of God will accomplish what human power cannot. The coming King will enter Jerusalem humbly, and God will ultimately save and purify his people",
    messianic_focus: "Zechariah 9:9 (king on a donkey — Palm Sunday), Zechariah 12:10 (pierced one), Zechariah 11:12-13 (thirty pieces of silver)",
    famous_verse: "Zechariah 4:6",
    summary: "Zechariah is the most quoted minor prophet in the Passion narratives. His eight visions and later oracles are saturated with imagery that the New Testament applies to Jesus: the humble king on a donkey, the pierced one, the thirty pieces of silver, the scattered sheep. A dense and rewarding prophetic book.",
  },
];

const HOWTO = [
  { title: "Read the Historical Context First", desc: "Every prophet speaks into a specific moment — Assyrian threat, Babylonian exile, post-exilic restoration. Knowing the basic timeline of Israelite history (especially the divided kingdom and exile) makes the prophets intelligible. A one-page Bible timeline changes everything.", icon: "📅" },
  { title: "Distinguish Foretelling from Forthtelling", desc: "Most of prophecy is not prediction but proclamation — a word from God into a specific situation. The 'thus says the LORD' passages address immediate circumstances. Read for the theological message, not just looking for messianic predictions.", icon: "📢" },
  { title: "Expect Poetry, Not Prose", desc: "Most prophetic books are poetry — which means compressed imagery, parallelism, wordplay, and hyperbole. Read slowly. Notice the images. Resist the urge to flatten metaphor into propositional statement. The poetry is the point, not an obstacle to the point.", icon: "🎭" },
  { title: "Ask Three Questions", desc: "For each passage: (1) What was this saying to its original audience in their situation? (2) How does this find fulfillment or development in Jesus? (3) How does this speak to my situation today? This prevents both over-spiritualizing and under-applying.", icon: "❓" },
  { title: "Use a Study Bible", desc: "Prophetic books reward annotation. A good study Bible (ESV, NIV Study Bible, or similar) provides the historical context, cross-references, and interpretive notes that make the prophets accessible. Do not read Isaiah 40-55 without knowing who Cyrus is.", icon: "📚" },
  { title: "Read Alongside the New Testament", desc: "The prophets are most fully understood in light of their fulfillment. Read Isaiah 53 alongside Mark 10:45 and 1 Peter 2:24. Read Jeremiah 31 alongside Hebrews 8. The NT authors understood themselves as living in the fulfillment of prophetic promise.", icon: "✝️" },
];

export default function ProphetsPage() {
  const [activeTab, setActiveTab] = useState<"prophets" | "howto">("prophets");
  const [selected, setSelected] = useState("Isaiah");

  const prophet = PROPHETS.find(p => p.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Prophets</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The prophets did not primarily predict the future — they declared the word of God into their present. But in doing so, they pointed toward the One in whom all their words find their fullest meaning.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "prophets" as const, label: "The Prophets", icon: "🔥" },
            { id: "howto" as const, label: "How to Read Them", icon: "📖" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "prophets" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 150, flexShrink: 0 }}>
              {PROPHETS.map(p => (
                <button key={p.name} onClick={() => setSelected(p.name)}
                  style={{ width: "100%", background: selected === p.name ? `${p.color}15` : "transparent", border: `1px solid ${selected === p.name ? p.color + "60" : BORDER}`, borderRadius: 10, padding: "10px 12px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selected === p.name ? p.color : TEXT, fontWeight: 700, fontSize: 13 }}>{p.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{p.period}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${prophet.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h2 style={{ color: prophet.color, fontWeight: 900, fontSize: 26, margin: 0, marginBottom: 4 }}>{prophet.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{prophet.period}</div>
                  </div>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{prophet.famous_verse}</span>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>CONTEXT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{prophet.context}</p>
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                  <div style={{ color: prophet.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>KEY MESSAGE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{prophet.key_message}</p>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{prophet.summary}</p>

                <div style={{ background: `${prophet.color}08`, border: `1px solid ${prophet.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: prophet.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>MESSIANIC CONNECTIONS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{prophet.messianic_focus}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The prophetic books are among the most neglected and most rewarding in all of Scripture. These six practices will make you a better reader of them.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {HOWTO.map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{h.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{h.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
