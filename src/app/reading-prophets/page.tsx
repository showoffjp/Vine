"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "howto" | "major" | "minor" | "themes" | "journal" | "videos";

const STATS = [
  { value: "17", label: "prophetic books in the OT" },
  { value: "400 yrs", label: "The prophets span 400 years of Israel's history" },
  { value: "#1", label: "Jesus quoted the prophets more than any other OT section" },
  { value: "419x", label: "Isaiah alone is quoted 419 times in the NT" },
];

const HOWTO_ITEMS = [
  {
    title: "Forth-Telling Before Fore-Telling",
    body: "Most prophecy is moral proclamation — 'Return to the Lord!' — not prediction. The prophet functioned as a covenant prosecutor, charging Israel with breaking the Mosaic covenant. Micah 6:8 and Amos 5:21-24 are classic examples. Application: read prophecy first as a call to justice and repentance, not as a code for future events.",
  },
  {
    title: "The Historical Context Is Not Optional",
    body: "Isaiah preached to 8th-century Judah. Jeremiah preached to pre-exilic and exilic Jerusalem. Understanding the historical setting is essential to understanding the message. Use a study Bible for background on each book. Do not strip verses from the original crisis they addressed.",
  },
  {
    title: "Fulfillment Is More Complex Than You Think",
    body: "There are four categories of prophetic fulfillment: (1) immediate/local fulfillment in the prophet's own time, (2) typological fulfillment in Christ, (3) spiritual fulfillment in the church, and (4) ultimate eschatological fulfillment in the new creation. Isaiah 7:14 is a textbook case of immediate plus typological. Avoid single-layer literalism.",
  },
  {
    title: "The Christological Center",
    body: "Luke 24:44 — 'Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.' Jesus is the telos of prophetic literature. Isaiah's Servant Songs (42, 49, 50, 53) are the clearest expression of this. Acts 8:26-35 — Philip and the Ethiopian eunuch — shows the apostolic way to read Isaiah 53.",
  },
  {
    title: "The Structure of Prophetic Books",
    body: "Most prophetic books follow a recurring pattern: oracles of judgment → calls to repentance → oracles of restoration → eschatological vision. This movement is not random. The arc of every prophetic book bends toward hope, even in the darkest books. Lamentations 3:21-23 ('great is your faithfulness') is born from the ashes of Jerusalem.",
  },
  {
    title: "Avoid Newspaper Hermeneutics",
    body: "The instinct to match current events to prophetic texts — Russia = Gog/Magog, etc. — reads prophecy backwards. The NT authors show us the right method: read prophecy forward through Christ, not backward from today's headlines. This approach has embarrassed the church repeatedly throughout history and should be abandoned.",
  },
];

type MajorBook = {
  book: string;
  color: string;
  chapters: string;
  period: string;
  theme: string;
  outline: string;
  christological: string;
  commentary: string;
};

const MAJOR_BOOKS: MajorBook[] = [
  {
    book: "Isaiah",
    color: "#8B5CF6",
    chapters: "66 chapters",
    period: "740–680 BC",
    theme: "The Gospel Before the Gospel",
    outline: "Chapters 1–39: Oracles of judgment — the Holy One of Israel versus the nations and Israel. Chapters 40–55: Comfort and the Servant (Second Isaiah). Chapters 56–66: New creation and the inclusive kingdom.",
    christological: "Servant Songs (42, 49, 50, 52–53); the Virgin birth (7:14); the Prince of Peace (9:6); the Anointed One (61:1–2 — Jesus reads this in the Nazareth synagogue, Luke 4).",
    commentary: "John Oswalt (NICOT, 2 vols); Alec Motyer (IVP).",
  },
  {
    book: "Jeremiah",
    color: "#EF4444",
    chapters: "52 chapters",
    period: "627–580 BC",
    theme: "The Weeping Prophet",
    outline: "The longest OT book. Calls to repentance as Babylon approaches; the New Covenant promise (31:31–34); laments and confessions of the prophet; the fall of Jerusalem and the exile to Babylon.",
    christological: "The New Covenant (31:31–34) is directly quoted in Hebrews 8 as fulfilled in Christ. The Good Shepherd (23:1–6) anticipates Jesus in John 10.",
    commentary: "Jack Lundbom (Anchor Bible, 3 vols); Terence Fretheim (Westminster Bible Companion).",
  },
  {
    book: "Lamentations",
    color: "#6B7280",
    chapters: "5 chapters",
    period: "587–586 BC",
    theme: "Grief After Jerusalem's Fall",
    outline: "Five acrostic poems of grief over Jerusalem's destruction by Babylon. Raw lament alongside stubborn hope. Lamentations 3:21–23 ('great is your faithfulness') is born entirely from ashes.",
    christological: "The suffering city as a type of the suffering Servant. The one who weeps over Jerusalem prefigures the one who wept over it in Luke 19:41.",
    commentary: "Iain Provan (NICOT); Robin Parry (Two Horizons).",
  },
  {
    book: "Ezekiel",
    color: "#10B981",
    chapters: "48 chapters",
    period: "593–570 BC",
    theme: "The God Who Is Present Even in Exile",
    outline: "Written to exiles in Babylon. Dramatic visions: the chariot of God (1), the departure and return of divine glory, dry bones (37), new temple (40–48). The glory of God departs from Jerusalem — and will return.",
    christological: "The New Temple (40–48) as type of the church and new creation. The Shepherd King (34) — Jesus quotes Ezekiel 34 in John 10. Dry bones resurrection (37) prefigures Christ's resurrection and Pentecost.",
    commentary: "Daniel Block (NICOT, 2 vols); Iain Duguid (NIV Application Commentary).",
  },
  {
    book: "Daniel",
    color: "#F59E0B",
    chapters: "12 chapters",
    period: "605–530 BC",
    theme: "Faithful Witness in Pagan Empire",
    outline: "Chapters 1–6 (Narrative): Daniel and friends faithfully serving under Babylonian and Persian empire. Chapters 7–12 (Apocalyptic): Visions of four kingdoms and the Ancient of Days giving dominion to the Son of Man.",
    christological: "Son of Man (7:13–14) — Jesus applies this title to himself over 80 times in the Gospels. It is his most characteristic self-designation, and the high priest recognizes it immediately at his trial (Mark 14:62).",
    commentary: "Dale Ralph Davis (Focus on the Bible); Ernest Lucas (Apollos OT Commentary).",
  },
];

type MinorBook = {
  book: string;
  color: string;
  period: string;
  theme: string;
  key: string;
};

const MINOR_BOOKS: MinorBook[] = [
  {
    book: "Hosea",
    color: "#EF4444",
    period: "8th c BC",
    theme: "God's unfailing love for unfaithful Israel, pictured through Hosea's marriage to Gomer.",
    key: "Hosea 6:6 — \"I desire mercy, not sacrifice\"",
  },
  {
    book: "Joel",
    color: "#F59E0B",
    period: "Unknown (pre-exilic?)",
    theme: "The Day of the Lord and the coming outpouring of the Spirit on all flesh.",
    key: "Joel 2:28–29 — quoted by Peter at Pentecost (Acts 2)",
  },
  {
    book: "Amos",
    color: "#10B981",
    period: "760–750 BC",
    theme: "God's demand for justice; religious ritual without social righteousness is abhorrent to God.",
    key: "Amos 5:24 — \"Let justice roll down like waters\"",
  },
  {
    book: "Obadiah",
    color: "#6B7280",
    period: "587 BC",
    theme: "Judgment on Edom for celebrating Jerusalem's fall and aiding her enemies.",
    key: "Obadiah 1:15 — \"As you have done, it will be done to you\"",
  },
  {
    book: "Jonah",
    color: "#3B82F6",
    period: "8th c BC",
    theme: "God's mercy extends to Gentile enemies; the missionary call runs wider than we want.",
    key: "Jonah 4:2 — God relenting from disaster; Jonah furious at grace",
  },
  {
    book: "Micah",
    color: "#8B5CF6",
    period: "740–700 BC",
    theme: "Social justice, corrupt leadership, and the ruler from Bethlehem who will shepherd his people.",
    key: "Micah 6:8; Micah 5:2 — Bethlehem prophecy (cited Matt 2:6)",
  },
  {
    book: "Nahum",
    color: "#EF4444",
    period: "660–612 BC",
    theme: "God's judgment on Nineveh/Assyria; the fall of the oppressor is also good news for the oppressed.",
    key: "Nahum 1:7 — \"The Lord is good, a refuge in times of trouble\"",
  },
  {
    book: "Habakkuk",
    color: "#F59E0B",
    period: "609–605 BC",
    theme: "The problem of evil; waiting for God's justice; learning to walk by faith in the dark.",
    key: "Hab 2:4 — \"The righteous will live by faith\" (Rom 1:17; Gal 3:11; Heb 10:38)",
  },
  {
    book: "Zephaniah",
    color: "#10B981",
    period: "640–609 BC",
    theme: "The Day of the Lord and the remnant who take refuge in God rather than in wealth or power.",
    key: "Zeph 3:17 — \"He will rejoice over you with singing\"",
  },
  {
    book: "Haggai",
    color: "#6B4FBB",
    period: "520 BC",
    theme: "Rebuild the temple; misplaced priorities and the call to covenant renewal after the exile.",
    key: "Hag 2:9 — \"The glory of this present house will be greater\"",
  },
  {
    book: "Zechariah",
    color: "#3B82F6",
    period: "520–480 BC",
    theme: "Apocalyptic visions; the coming King riding a donkey; the pierced One mourned by all.",
    key: "Zech 9:9 (Palm Sunday); Zech 12:10 (pierced One, John 19:37)",
  },
  {
    book: "Malachi",
    color: "#8B5CF6",
    period: "450–400 BC",
    theme: "Covenant renewal; the coming messenger; closing the OT canon with the promise of Elijah.",
    key: "Mal 3:1; Mal 4:5–6 — Elijah = John the Baptist (Matt 11:14)",
  },
];

const THEMES_ITEMS = [
  {
    title: "The Holy One of Israel",
    body: "Isaiah's dominant divine title — used 25+ times. God's absolute moral purity creates an existential crisis for sinful humanity: 'Woe to me! I am ruined! For I am a man of unclean lips' (Isaiah 6:5). The seraph vision of Isaiah 6 establishes the holiness of God as the foundation of all prophetic proclamation. This is what makes the gospel necessary and the atonement beautiful.",
  },
  {
    title: "The Day of the Lord",
    body: "A phrase that appears throughout the prophets — Joel, Amos, Zephaniah, Malachi. Israel originally expected the Day of the Lord to mean God destroying their enemies. The prophets shock Israel by turning the Day of the Lord against Israel itself (Amos 5:18–20: 'Woe to you who long for the day of the LORD!'). Ultimately fulfilled in the cross and consummated at the Second Coming.",
  },
  {
    title: "The Remnant",
    body: "God always preserves a faithful remnant through judgment (Isaiah 10:20–22; Romans 9:27–29). The exile did not end God's purposes — the remnant was the seed of the new covenant community. Paul uses remnant theology in Romans 9–11 to address the question of Israel's future and God's faithfulness to his covenant promises.",
  },
  {
    title: "The New Covenant",
    body: "Jeremiah 31:31–34 is the pivot of the prophets: God will make a new covenant written on the heart, with full knowledge and complete forgiveness — unlike the Mosaic covenant they broke. Ezekiel 36:26–27 adds the Spirit who enables obedience from within. Jesus announces its inauguration at the Last Supper (Luke 22:20: 'This cup is the new covenant in my blood').",
  },
  {
    title: "The Servant of the Lord",
    body: "Isaiah's four Servant Songs (42:1–4; 49:1–6; 50:4–9; 52:13–53:12) progressively reveal the Servant's identity: Israel, the faithful remnant within Israel, and finally the individual who bears Israel's sin on behalf of the world. Acts 8 shows the apostolic reading — Philip explains Isaiah 53 as fulfilled in Jesus. No OT passage is quoted more in the NT passion narratives.",
  },
  {
    title: "New Creation and the Messianic Kingdom",
    body: "Isaiah 65–66; Ezekiel 40–48; Zechariah 14. The prophets end in eschatological hope — a renewed creation, universal knowledge of God, the end of violence, tears, and mourning. This is the framework for Revelation 21–22: John is not inventing new imagery but completing the prophetic vision. The NT's new creation theology is incomprehensible apart from the prophets.",
  },
];

export default function ReadingProphetsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_reading-prophets_tab", "howto");
  const [openHowto, setOpenHowto] = useState<number | null>(null);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [selectedMajor, setSelectedMajor] = usePersistedState<string>("vine_reading-prophets_selected_major", "Isaiah");

  const majorBook = MAJOR_BOOKS.find((b) => b.book === selectedMajor) ?? MAJOR_BOOKS[0];

  type JournalEntry = { id: string; date: string; prophet: string; message: string; applying: string };
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => { try { return JSON.parse(localStorage.getItem("vine_rpj_entries") ?? "[]"); } catch { return []; } });
  const [jProphet, setJProphet] = useState("");
  const [jMessage, setJMessage] = useState("");
  const [jApplying, setJApplying] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_rpj_entries", JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  function saveJournalEntry() {
    if (!jProphet.trim() && !jMessage.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), prophet: jProphet, message: jMessage, applying: jApplying };
    setJournalEntries(prev => [entry, ...prev]);
    setJProphet(""); setJMessage(""); setJApplying("");
  }
  function deleteJournalEntry(id: string) { setJournalEntries(prev => prev.filter(e => e.id !== id)); }

  const tabs: { id: Tab; label: string }[] = [
    { id: "howto", label: "How to Read" },
    { id: "major", label: "Major Prophets" },
    { id: "minor", label: "Minor Prophets" },
    { id: "themes", label: "Major Themes" },
    { id: "journal", label: "📓 My Journal" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40, maxWidth: 680, margin: "0 auto 40px" }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: TEXT,
              margin: "0 0 14px",
              lineHeight: 1.2,
            }}
          >
            Reading the Old Testament Prophets
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, margin: 0 }}>
            The prophets spoke about now and then — judgment and grace, repentance and restoration, the
            Messiah who was coming. Here is how to read them well.
          </p>
        </div>

        {/* Stats Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginBottom: 36,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "16px 14px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontWeight: 900,
                  fontSize: 20,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 32,
            background: CARD,
            borderRadius: 12,
            padding: 6,
            border: `1px solid ${BORDER}`,
          }}
        >
          {tabs.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 8px",
                borderRadius: 8,
                border: "none",
                background: tab === t.id ? PURPLE : "transparent",
                color: tab === t.id ? "#FFFFFF" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: How to Read */}
        {tab === "howto" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: 22,
                marginBottom: 20,
              }}
            >
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The prophetic books are among the most neglected and most rewarding in all of Scripture.
                These {HOWTO_ITEMS.length} practices will transform how you read them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HOWTO_ITEMS.map((item, i) => {
                const open = openHowto === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? PURPLE + "60" : BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <button type="button"
                      onClick={() => setOpenHowto(open ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 20px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ color: open ? GREEN : TEXT, fontWeight: 700, fontSize: 15 }}>
                        {item.title}
                      </span>
                      <span
                        style={{
                          color: MUTED,
                          fontSize: 18,
                          lineHeight: 1,
                          flexShrink: 0,
                          marginLeft: 12,
                        }}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 20px 18px" }}>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                          {item.body}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab: Major Prophets */}
        {tab === "major" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            {/* Left: book list */}
            <div style={{ width: 160, flexShrink: 0 }}>
              {MAJOR_BOOKS.map((b) => (
                <button type="button"
                  key={b.book}
                  onClick={() => setSelectedMajor(b.book)}
                  style={{
                    width: "100%",
                    background:
                      selectedMajor === b.book ? b.color + "18" : "transparent",
                    border: `1px solid ${selectedMajor === b.book ? b.color + "55" : BORDER}`,
                    borderRadius: 10,
                    padding: "10px 14px",
                    marginBottom: 8,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      color: selectedMajor === b.book ? b.color : TEXT,
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {b.book}
                  </div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 3 }}>{b.chapters}</div>
                </button>
              ))}
            </div>

            {/* Right: sticky detail panel */}
            <div
              style={{
                flex: 1,
                position: "sticky",
                top: 20,
                maxWidth: 320,
                marginLeft: "auto",
                display: "none",
              }}
            />

            {/* Detail panel (main content) */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${majorBook.color}35`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h2
                        style={{
                          color: majorBook.color,
                          fontWeight: 900,
                          fontSize: 28,
                          margin: "0 0 4px",
                        }}
                      >
                        {majorBook.book}
                      </h2>
                      <div style={{ color: MUTED, fontSize: 13 }}>
                        {majorBook.chapters} &nbsp;·&nbsp; {majorBook.period}
                      </div>
                    </div>
                    <span
                      style={{
                        background: majorBook.color + "22",
                        color: majorBook.color,
                        padding: "4px 12px",
                        borderRadius: 10,
                        fontSize: 12,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {majorBook.theme}
                    </span>
                  </div>
                </div>

                {/* Outline */}
                <div
                  style={{
                    background: BG,
                    borderRadius: 10,
                    padding: 14,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      color: MUTED,
                      fontSize: 11,
                      fontWeight: 700,
                      marginBottom: 6,
                      letterSpacing: "0.07em",
                    }}
                  >
                    OUTLINE
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                    {majorBook.outline}
                  </p>
                </div>

                {/* Christological connection */}
                <div
                  style={{
                    background: majorBook.color + "0D",
                    border: `1px solid ${majorBook.color}28`,
                    borderRadius: 10,
                    padding: 14,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      color: majorBook.color,
                      fontSize: 11,
                      fontWeight: 700,
                      marginBottom: 6,
                      letterSpacing: "0.07em",
                    }}
                  >
                    CHRISTOLOGICAL CONNECTION
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
                    {majorBook.christological}
                  </p>
                </div>

                {/* Commentary */}
                <div
                  style={{
                    background: PURPLE + "12",
                    border: `1px solid ${PURPLE}28`,
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <div
                    style={{
                      color: PURPLE,
                      fontSize: 11,
                      fontWeight: 700,
                      marginBottom: 6,
                      letterSpacing: "0.07em",
                    }}
                  >
                    BEST COMMENTARY
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    {majorBook.commentary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Minor Prophets */}
        {tab === "minor" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: 22,
                marginBottom: 24,
              }}
            >
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The twelve Minor Prophets are minor only in length, not in importance. Together they span
                over 300 years and are among the most quoted OT books in the New Testament.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
              }}
            >
              {MINOR_BOOKS.map((b, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <span
                      style={{
                        color: b.color,
                        fontWeight: 800,
                        fontSize: 16,
                      }}
                    >
                      {b.book}
                    </span>
                    <span
                      style={{
                        background: b.color + "18",
                        color: b.color,
                        padding: "2px 8px",
                        borderRadius: 8,
                        fontSize: 10,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginLeft: 8,
                      }}
                    >
                      {b.period}
                    </span>
                  </div>
                  <p
                    style={{
                      color: TEXT,
                      fontSize: 12,
                      lineHeight: 1.65,
                      margin: "0 0 10px",
                    }}
                  >
                    {b.theme}
                  </p>
                  <div
                    style={{
                      background: BG,
                      borderRadius: 8,
                      padding: "8px 10px",
                      borderLeft: `3px solid ${b.color}`,
                    }}
                  >
                    <span style={{ color: MUTED, fontSize: 11, lineHeight: 1.5 }}>{b.key}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>My Prophets Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Record prophetic passages, their messages, and how God is calling you to respond.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input value={jProphet} onChange={e => setJProphet(e.target.value)} placeholder="Prophet / passage (e.g. Isaiah 53)" style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <textarea value={jMessage} onChange={e => setJMessage(e.target.value)} placeholder="What was the prophet's message? What stood out to you?" rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jApplying} onChange={e => setJApplying(e.target.value)} placeholder="How are you applying this today?" rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <button type="button" onClick={saveJournalEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer", alignSelf: "flex-start" }}>Save Entry</button>
              </div>
            </div>
            {journalEntries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", padding: 32 }}>No journal entries yet. Start recording what God is speaking through the prophets.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {journalEntries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{entry.prophet || "Reflection"}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>{entry.date}</span>
                    </div>
                    {entry.message && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Message:</strong> {entry.message}</p>}
                    {entry.applying && <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}><strong>Applying:</strong> {entry.applying}</p>}
                    <button type="button" onClick={() => deleteJournalEntry(entry.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 12px", color: MUTED, fontSize: 12, cursor: "pointer" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab: Videos */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "Z-17KxpjL0Q", title: "Isaiah: Dust to Glory", channel: "Ligonier Ministries", description: "R.C. Sproul examines the book of Isaiah — how the prophet was commissioned to warn Judah and how his writings more than any other OT book clearly reveal the coming Messiah." },
                  { videoId: "ej_6dVdJSIU", title: "Covenant with Abraham: Dust to Glory", channel: "Ligonier Ministries", description: "R.C. Sproul traces the Abrahamic promise that the prophets interpret and expand — essential context for reading the prophetic literature." },
                  { videoId: "G-2e9mMf7E8", title: "Providence: The Purposeful Sovereignty of God", channel: "Desiring God", description: "John Piper explains how God's sovereign providence is the controlling theme that makes the prophets' proclamations coherent and urgent." },
                  { videoId: "5nvVVcYD-0w", title: "How Should You Read the Psalms?", channel: "Desiring God", description: "John Piper's approach to poetic Scripture applies equally to the prophets — read for encounter, not just information." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: 22,
                marginBottom: 20,
              }}
            >
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Six great theological rivers run through the prophets and empty into the New Testament.
                Seeing them is essential to reading the prophets as Christian Scripture.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {THEMES_ITEMS.map((item, i) => {
                const open = openTheme === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? GREEN + "50" : BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <button type="button"
                      onClick={() => setOpenTheme(open ? null : i)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 20px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ color: open ? GREEN : TEXT, fontWeight: 700, fontSize: 15 }}>
                        {item.title}
                      </span>
                      <span
                        style={{
                          color: MUTED,
                          fontSize: 18,
                          lineHeight: 1,
                          flexShrink: 0,
                          marginLeft: 12,
                        }}
                      >
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 20px 18px" }}>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                          {item.body}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
