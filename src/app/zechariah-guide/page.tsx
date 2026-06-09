"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = PURPLE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "visions", label: "Night Visions" },
  { id: "spirit", label: "Not by Might" },
  { id: "messianic", label: "Messianic Prophecies" },
  { id: "donkey", label: "King on a Donkey" },
  { id: "shepherd", label: "The Good Shepherd" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type ZechTab = "overview" | "visions" | "spirit" | "messianic" | "donkey" | "shepherd" | "themes" | "journal" | "videos";

const VISIONS = [
  {
    number: "1st",
    color: GREEN,
    title: "The Horseman Among the Myrtles — Zechariah 1:7–17",
    description: "A man on a red horse stands among myrtle trees in a ravine; behind him are red, sorrel, and white horses who patrol the earth. The earth is at rest but Jerusalem lies in ruins. God declares: 'I am exceedingly jealous for Jerusalem and for Zion... I have returned to Jerusalem with mercy; my house shall be built in it' (1:14, 16). Despite present desolation, God is coming to rebuild.",
  },
  {
    number: "2nd",
    color: RED,
    title: "Four Horns and Four Craftsmen — Zechariah 1:18–21",
    description: "Four horns represent the nations that scattered Judah and Israel. Four craftsmen come to terrify and cast down those nations. The powers that destroyed Jerusalem will themselves be destroyed. No empire that scatters God's people has the final word.",
  },
  {
    number: "3rd",
    color: TEAL,
    title: "The Surveyor with a Measuring Line — Zechariah 2:1–13",
    description: "A man goes out to measure Jerusalem. He is told not to bother: Jerusalem will be inhabited without walls, for God himself will be its wall of fire and its glory within (2:5). 'Sing and rejoice, O daughter of Zion, for behold, I come and I will dwell in your midst, declares the LORD' (2:10). The city is too full for walls — a vision of expansive, secure divine habitation.",
  },
  {
    number: "4th",
    color: GOLD,
    title: "Joshua the High Priest — Zechariah 3:1–10",
    description: "Joshua the high priest stands before the angel of the LORD, while Satan stands at his right hand to accuse him. The LORD rebukes Satan and replaces Joshua's filthy garments with pure vestments and a clean turban. A messianic figure — 'my servant the Branch' — is promised. The scene is the cleansing and restoration of the priesthood, anticipating a greater high priest (Hebrews 4:14).",
  },
  {
    number: "5th",
    color: PURPLE,
    title: "The Gold Lampstand and Two Olive Trees — Zechariah 4:1–14",
    description: "A gold lampstand with seven lamps, fed by two olive trees. The word of the LORD to Zerubbabel (the governor): 'Not by might, nor by power, but by my Spirit, says the LORD of hosts' (4:6). The two olive trees are interpreted as 'the two anointed ones' — priest and king together. The Spirit of God, not human strength, will complete the restoration of the Temple.",
  },
  {
    number: "6th",
    color: RED,
    title: "The Flying Scroll — Zechariah 5:1–4",
    description: "A flying scroll thirty feet long and fifteen feet wide — the curse going out over the whole land against those who steal and swear falsely. Sin will be cut off; no impurity can endure in the restored community.",
  },
  {
    number: "7th",
    color: GOLD,
    title: "The Woman in the Basket — Zechariah 5:5–11",
    description: "A woman (named Wickedness) is placed in a measuring basket and carried away to Shinar (Babylon). The wickedness that has been in the land is being removed and deposited elsewhere. The land will be cleansed of iniquity.",
  },
  {
    number: "8th",
    color: TEAL,
    title: "Four Chariots — Zechariah 6:1–8",
    description: "Four chariots with horses of different colors go out to patrol the earth. The whole earth is at rest. God's sovereign governance extends to all nations; his purposes are being accomplished. The eight visions form an arc from desolation (1st) to cosmic order (8th).",
  },
];

const SPIRIT_BODY = `Zechariah 4:6 is one of the most important verses about the nature of God's work in history. It is delivered to Zerubbabel, the governor of Judah, who is overseeing the rebuilding of the Temple after the return from exile.

The physical obstacles were enormous: resources were scarce, opposition was fierce, the community was small and discouraged. The Temple would be a humble shadow of Solomon's original. Old men who remembered the first Temple wept at the sight of the foundation (Ezra 3:12). The task seemed impossible.

Into this context, God says through Zechariah: 'Not by might, nor by power, but by my Spirit, says the LORD of hosts. What are you, O great mountain? Before Zerubbabel you shall become a plain. And he shall bring forward the top stone amid shouts of Grace, grace to it!' (4:6–7).

Three observations:

1. **The renunciation of might and power.** Chayil (might) is military and economic strength — human resources. Koach (power) is physical strength and personal capacity. Both are explicitly set aside. The restoration of Jerusalem will not be achieved by what humans bring to it.

2. **'By my Spirit.'** The rebuilding of the Temple, the restoration of the community, the establishment of the Kingdom — these are Spirit-work. Human obedience and effort are involved; they are not nothing. But the source of the possibility is the Spirit of God, not human capacity. This is consistent with the New Covenant promise (Ezekiel 36:26–27): the Spirit will be the power of transformation.

3. **The mountain becoming a plain.** Obstacles that look like mountains — unmovable, decisive — will become level ground before the one whom God has commissioned. The outcome is not dependent on the size of the problem but on the faithfulness of God.

Paul picks up this theology in 2 Corinthians 4:7: 'But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.' The Zechariah principle — divine power through human weakness — runs through the NT in ways that trace directly to this verse.`;

const MESSIANIC_PROPHECIES = [
  {
    color: PURPLE,
    ot: "Zechariah 9:9",
    nt: "Matthew 21:5; John 12:15",
    title: "The King Riding on a Donkey",
    body: "'Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey.' The precision is remarkable: not a war horse (which would signal conquest) but a donkey (which signals peaceful, humble kingship). Matthew and John both quote this verse explicitly to interpret the Triumphal Entry. The choice of the donkey was not spontaneous; it was deliberate prophetic enactment.",
  },
  {
    color: GOLD,
    ot: "Zechariah 11:12–13",
    nt: "Matthew 27:3–10",
    title: "Thirty Pieces of Silver",
    body: "'Then I said to them, If it seems good to you, give me my wages; but if not, keep them. And they weighed out as my wages thirty pieces of silver. Then the LORD said to me, Throw it to the potter — the lordly price at which I was priced by them. So I took the thirty pieces of silver and threw them into the house of the LORD, to the potter.' Matthew quotes this passage (attributing it to 'Jeremiah' — a complex textual issue) to explain Judas's betrayal price and the subsequent purchase of the potter's field. The prophetic enactment in Zechariah becomes the price tag on the Messiah.",
  },
  {
    color: TEAL,
    ot: "Zechariah 12:10",
    nt: "John 19:37; Revelation 1:7",
    title: "They Will Look on the One They Have Pierced",
    body: "'And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him, as one mourns for an only child, and weep bitterly over him, as one weeps over a firstborn.' John quotes this at the crucifixion (19:37) and Revelation quotes it for the Second Coming (1:7). The 'me' and 'him' shift in the verse is deliberate — a speaker who is both God and the pierced one. This is one of the OT's clearest anticipations of the identity of the Messiah.",
  },
  {
    color: RED,
    ot: "Zechariah 13:7",
    nt: "Matthew 26:31; Mark 14:27",
    title: "Strike the Shepherd; the Sheep Will Scatter",
    body: "'Awake, O sword, against my shepherd, against the man who stands next to me, declares the LORD of hosts. Strike the shepherd, and the sheep will be scattered; I will turn my hand against the little ones.' Jesus quotes this verse explicitly in Gethsemane on the night of his arrest, predicting the disciples' flight. The shepherd who is struck is the 'man who stands next to me' — YHWH's intimate companion. His death scatters the flock. But the verse does not end in disaster: after the scattering, the refining and the covenant.",
  },
];

const DONKEY_BODY = `Zechariah 9:9 is one of the most precisely fulfilled messianic prophecies in the OT. On what we call Palm Sunday, Jesus sent disciples to find 'a colt, the foal of a donkey' (Matthew 21:2) and rode into Jerusalem on it — explicitly fulfilling the prophetic text.

The choice was laden with meaning that every informed Jew would have recognized:

**The contrast with the war horse.** The previous verse (9:8) describes God fighting for his people. But when the king arrives, he does not come on a warhorse (which carried associations with military conquest and imperial power — compare the Assyrian and Babylonian kings' war horses). He comes on a donkey. This is not weakness; it is a deliberate signal about the nature of his kingship. Solomon rode a mule to his coronation (1 Kings 1:33). The donkey was associated with peaceful, royal authority — the opposite of armed conquest.

**Righteous and having salvation.** The Hebrew 'having salvation' (nosha) is a passive participle — he has been saved, vindicated by God. The king arrives not in his own strength but as one who has been rescued by God. His righteousness is received, not manufactured. This anticipates the resurrection logic: Jesus is 'declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead' (Romans 1:4).

**Humble.** The word is 'anav — the same word used for the poor and lowly who are the special objects of God's concern (see the Beatitudes). The king whose entry fulfills Zechariah 9:9 is a king who identifies with the vulnerable, the meek, the poor in spirit. This is not performative humility but essential character.

The crowds who shouted 'Hosanna' at the Triumphal Entry were quoting Psalm 118:25–26. They understood they were greeting the messianic king. What they did not yet understand was that this king would fulfill his kingship through suffering — that 'having salvation' would mean being raised from the dead, not rescued from the cross.`;

const SHEPHERD_SECTIONS = [
  {
    color: GOLD,
    title: "The Good Shepherd and the Worthless Shepherd — Zechariah 11",
    body: "Chapter 11 contains some of the most complex prophetic imagery in the Minor Prophets. Zechariah is told to play the role of a shepherd, then to take the implements of a worthless shepherd. Two staffs — 'Favor' and 'Union' — are broken. The flock is sold. Thirty pieces of silver is the price. The contrast between the caring shepherd who is rejected and paid off, and the worthless shepherd who exploits the flock, is central to Jesus's self-identification as the Good Shepherd in John 10.",
  },
  {
    color: TEAL,
    title: "The Pierced One — Zechariah 12:10",
    body: "'I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him as one mourns for an only child.' The mysterious shift from 'me' to 'him' in the same verse has generated extensive commentary. The most natural reading in the NT context (John 19:37) is that God and the pierced one are identified — anticipating the incarnation logic where the suffering of the Messiah is God's own suffering.",
  },
  {
    color: PURPLE,
    title: "Strike the Shepherd — Zechariah 13:7",
    body: "'Strike the shepherd, and the sheep will be scattered; I will turn my hand against the little ones. In the whole land, declares the LORD, two thirds shall be cut off and perish, and one third shall be left alive.' Jesus's quotation of this verse in Gethsemane (Matt 26:31) transforms it into a prophecy of the Passion. The 'little ones' who are scattered are the disciples who flee. But the passage continues: the remaining third will be refined like silver, tested like gold, will call on his name, and will be his people. The scattering is not the end; it is the prelude to the refining.",
  },
  {
    color: RED,
    title: "The Day of the LORD — Zechariah 14",
    body: "The final chapter of Zechariah is apocalyptic: a day when nations gather against Jerusalem, when the city is divided, when the LORD himself goes out to fight, when there is neither day nor night, when living waters flow from Jerusalem, when the LORD will be king over all the earth, when his name alone will be worshiped. This vision has been read in multiple ways — as referring to the fall of Jerusalem in AD 70, to a future eschatological event, or as symbolic imagery for the Kingdom of God. Whatever the reading, the direction is clear: history is moving toward a day when God's reign is total and uncontested.",
  },
];

const THEMES = [
  {
    color: PURPLE,
    title: "The Most Quoted OT Book in the Passion",
    body: "Zechariah is quoted or alluded to more than any other OT book in the Passion narratives: the triumphal entry (9:9), the 30 pieces of silver (11:12-13), the shepherd struck (13:7), they will look on him whom they pierced (12:10). The specificity of these fulfillments has historically been a major argument for the reliability of prophetic prediction.",
  },
  {
    color: GOLD,
    title: "Not by Might, Nor by Power",
    body: "Zechariah 4:6 is a paradigm for how God works. The Spirit of God accomplishes what human strength cannot. This is not passivity — Zerubbabel was still called to build — but it is the location of ultimate agency. The work of God in the world is Spirit-work, not just human effort.",
  },
  {
    color: TEAL,
    title: "God Is Coming to Dwell",
    body: "Multiple visions and oracles emphasize God's return to Jerusalem — his return to inhabit his people. This is the narrative arc of the whole Bible: Eden (God dwelling with humanity), exile (separation), tabernacle/temple (return), incarnation (God in flesh), church (Spirit indwelling), new creation (God with his people forever). Zechariah stands in the middle of that arc and promises: I am coming back.",
  },
  {
    color: RED,
    title: "Humble Kingship",
    body: "The king of Zechariah 9:9 arrives humble, on a donkey, peaceful. This vision of kingship — power exercised through humility and service rather than domination — is central to what Jesus means by the Kingdom of God. The world's kingdoms ride warhorses; the Kingdom of God rides a donkey.",
  },
  {
    color: BLUE,
    title: "The Branch",
    body: "'Behold, the man whose name is the Branch: for he shall branch out from his place, and he shall build the temple of the LORD' (6:12). The 'Branch' (tsemach) is a messianic title appearing in Isaiah 4:2, Jeremiah 23:5, and Zechariah 3:8, 6:12. It describes the coming Davidic king who will restore Israel and build a temple not of stone but of people. Jesus is the Branch.",
  },
  {
    color: GREEN,
    title: "Return to Me",
    body: "'Return to me, says the LORD of hosts, and I will return to you, says the LORD of hosts' (1:3). This is the covenant logic underneath all of Zechariah's visions: the relationship between God and his people is not permanently severed. The exile was discipline, not divorce. God is waiting for return — and when his people return to him, he returns to them.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Zechariah 4:6 says 'not by might, nor by power, but by my Spirit.' Where are you relying on your own strength for something that requires the Spirit's work?",
  "The eight night visions all begin from the reality of ruins and point toward restoration. What ruins in your life are you waiting for God to rebuild?",
  "The Triumphal Entry fulfills Zechariah 9:9 — a humble king on a donkey. What does this vision of power-through-humility say about what it means to follow Jesus?",
  "Zechariah 1:3 says 'Return to me and I will return to you.' Is there an area of distance between you and God right now? What would returning look like?",
  "The pierced one of Zechariah 12:10 is identified with God himself. How does the idea of God entering into suffering — rather than standing apart from it — affect how you relate to him in your own suffering?",
];

export default function ZechariahGuidePage() {
  const [tab, setTab] = usePersistedState<ZechTab>("vine_zechariah_tab", "overview");
  const [openSpirit, setOpenSpirit] = useState(false);
  const [openDonkey, setOpenDonkey] = useState(false);
  const [openShepherd, setOpenShepherd] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_zechariah_journal");
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
    localStorage.setItem("vine_zechariah_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_zechariah_journal", JSON.stringify(updated));
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
          <div style={{ background: `linear-gradient(135deg, #0d0015 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>14 Chapters · ~520–518 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Zechariah
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                Eight night visions, messianic prophecies of stunning precision, and the declaration that shapes every genuine work of God: <em style={{ color: TEXT }}>"Not by might, nor by power, but by my Spirit, says the LORD."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as ZechTab)}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Zechariah is one of the longest and most complex of the Minor Prophets. Written after the return from exile, it addresses a community trying to rebuild and encourages them with a series of visions and oracles that culminate in some of the most precise messianic prophecies in the entire Old Testament.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Zechariah ben Berechiah" },
                    { label: "Time Period", value: "520–518 BC (chs 1–8)" },
                    { label: "Context", value: "Post-exile Temple rebuilding" },
                    { label: "Chapters", value: "14" },
                    { label: "Structure", value: "Visions (1–8) + Oracles (9–14)" },
                    { label: "Key Verse", value: "Zechariah 4:6" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Zechariah 4:6 — The Animating Principle</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "Not by might, nor by power, but by my Spirit, says the LORD of hosts."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Zechariah 4:6 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Zech 1:3", desc: "Return to me and I will return to you" },
                      { ref: "Zech 2:10–11", desc: "I come and will dwell in your midst — God's return to his people" },
                      { ref: "Zech 3:1–5", desc: "Joshua the high priest cleansed — Satan rebuked" },
                      { ref: "Zech 4:6", desc: "Not by might, nor by power, but by my Spirit" },
                      { ref: "Zech 6:12–13", desc: "The Branch will build the temple of the LORD" },
                      { ref: "Zech 9:9", desc: "Your king comes humble, mounted on a donkey" },
                      { ref: "Zech 11:12–13", desc: "Thirty pieces of silver — the lordly price at which I was priced" },
                      { ref: "Zech 12:10", desc: "They will look on me, on him whom they have pierced" },
                      { ref: "Zech 13:7", desc: "Strike the shepherd; the sheep will be scattered" },
                      { ref: "Zech 14:9", desc: "The LORD will be king over all the earth" },
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

            {/* VISIONS */}
            {tab === "visions" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Eight Night Visions</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapters 1–6 record eight visions received in a single night. Each vision uses vivid imagery to communicate God's sovereign purposes: comfort for the exiles, cleansing of the priesthood, the Spirit-empowered rebuilding of the Temple, and the removal of iniquity from the land.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {VISIONS.map((v, i) => (
                    <div key={v.number} style={{ background: CARD, border: `1px solid ${v.color}33`, borderRadius: 12, padding: "20px 24px", display: "flex", gap: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${v.color}22`, border: `2px solid ${v.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: v.color, fontWeight: 800, fontSize: 14 }}>{i + 1}</div>
                      <div>
                        <div style={{ color: v.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{v.number} Vision</div>
                        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{v.title}</div>
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPIRIT */}
            {tab === "spirit" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Not by Might, Nor by Power</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Zechariah 4:6 is one of the most foundational statements about how God accomplishes his purposes. Its context is the rebuilding of the Temple after the exile. Its application reaches far beyond that context.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "Not by might, nor by power, but by my Spirit, says the LORD of hosts. What are you, O great mountain? Before Zerubbabel you shall become a plain."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Zechariah 4:6–7 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  {SPIRIT_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < SPIRIT_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* MESSIANIC */}
            {tab === "messianic" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Messianic Prophecies</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Zechariah is the OT book most extensively quoted in the Passion narratives. The specificity of these prophecies — fulfilled centuries later — is remarkable. Each one illuminates something essential about the identity and mission of Jesus.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {MESSIANIC_PROPHECIES.map(p => (
                    <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}33`, borderRadius: 12, padding: "20px 24px" }}>
                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 10, alignItems: "center" }}>
                        <span style={{ color: p.color, fontWeight: 700, fontSize: 14 }}>{p.ot}</span>
                        <span style={{ color: MUTED, fontSize: 13 }}>→ Fulfilled in {p.nt}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{p.title}</div>
                      <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{p.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DONKEY */}
            {tab === "donkey" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The King on a Donkey — Zechariah 9:9</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>One of the most precisely fulfilled prophecies in the Bible. Jesus deliberately chose to ride a donkey into Jerusalem to enact this specific text — and every observer who knew the Scriptures would have understood the claim he was making.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Zechariah 9:9 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  {DONKEY_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < DONKEY_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* SHEPHERD */}
            {tab === "shepherd" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Good Shepherd and the Pierced One</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapters 11–13 contain some of the most complex and most-quoted passages in Zechariah — centered on the figure of the shepherd who is rejected, sold for thirty pieces of silver, struck so that the sheep scatter, and pierced so that God's people mourn.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SHEPHERD_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenShepherd(openShepherd === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openShepherd === s.title ? "−" : "+"}</span>
                      </button>
                      {openShepherd === s.title && (
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Zechariah speaks to communities in rebuilding mode — after catastrophe, trying to start again. Use this space to reflect on what God is building in and through you.</p>

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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Zechariah 4:6" style={inputStyle} />
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Zechariah's eight visions, messianic prophecies, and what it means that not by might or power but by God's Spirit is the animating principle of the Kingdom.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="ym6WM-QB5oM" title="The Book of Zechariah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Zechariah — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets Overview" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="pEqIeHMdvUM" title="Messianic Prophecy" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>How the OT prophets point to Jesus</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="ym6WM-QB5oM" title="The Spirit of God" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Holy Spirit in Scripture — from Zechariah to Pentecost</p>
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
