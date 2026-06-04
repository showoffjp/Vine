"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "types" | "reading" | "psalms" | "pray" | "videos";
type PsalmType = "All" | "Lament" | "Praise" | "Royal" | "Wisdom" | "Historical" | "Penitential" | "Imprecatory" | "Pilgrimage";

const TYPE_COLORS: Record<string, string> = {
  Lament: "#EF4444",
  Praise: "#F59E0B",
  Royal: "#6B4FBB",
  Wisdom: "#3B82F6",
  Historical: "#10B981",
  Penitential: "#8B5CF6",
  Imprecatory: "#EC4899",
  Pilgrimage: "#06B6D4",
};

const PSALM_CATEGORIES: PsalmType[] = [
  "All",
  "Lament",
  "Praise",
  "Royal",
  "Wisdom",
  "Historical",
  "Penitential",
  "Imprecatory",
  "Pilgrimage",
];

interface PsalmEntry {
  number: string;
  type: Exclude<PsalmType, "All">;
  title: string;
  description: string;
  keyVerse: string;
}

const PSALMS_DATA: PsalmEntry[] = [
  {
    number: "1",
    type: "Wisdom",
    title: "Two Ways to Live",
    description: "The gateway psalm introduces the entire Psalter by contrasting the righteous and the wicked. It sets the stage for all that follows by rooting blessed human flourishing in meditation on God's Torah.",
    keyVerse: "Psalm 1:1",
  },
  {
    number: "2",
    type: "Royal",
    title: "Why Do the Nations Rage?",
    description: "A Messianic enthronement psalm celebrating God's anointed king on Zion's hill. The New Testament applies it to Christ's resurrection and exaltation more than any other Old Testament passage.",
    keyVerse: "Psalm 2:7",
  },
  {
    number: "19",
    type: "Praise",
    title: "The Heavens Declare",
    description: "A two-panel meditation on general and special revelation: creation silently proclaims God's glory, and Torah explicitly reveals his will. C.S. Lewis called it the greatest poem in the Psalter.",
    keyVerse: "Psalm 19:1",
  },
  {
    number: "22",
    type: "Lament",
    title: "My God My God Why",
    description: "A deep individual lament that moves from forsakenness to praise, providing a precise parallel to the crucifixion narrative. Jesus quoted its opening line from the cross, claiming the entire psalm as his own.",
    keyVerse: "Psalm 22:1",
  },
  {
    number: "23",
    type: "Praise",
    title: "The Lord Is My Shepherd",
    description: "The most beloved psalm in history, expressing trust and confidence in God's provision through every season of life. Six verses move from green pastures through dark valleys to the house of God forever.",
    keyVerse: "Psalm 23:1",
  },
  {
    number: "42-43",
    type: "Lament",
    title: "As the Deer Pants",
    description: "Originally one poem, these psalms express deep longing for God during exile from the temple and homeland. The triple refrain — 'Why are you cast down, O my soul?' — models honest self-examination before God.",
    keyVerse: "Psalm 42:1",
  },
  {
    number: "46",
    type: "Praise",
    title: "God Is Our Refuge",
    description: "A bold confidence psalm in God amid national crisis and cosmic upheaval. Martin Luther drew on it when writing A Mighty Fortress, and it has anchored God's people through every catastrophe since.",
    keyVerse: "Psalm 46:1",
  },
  {
    number: "51",
    type: "Penitential",
    title: "Create In Me A Clean Heart",
    description: "David's prayer after the prophet Nathan confronted him over his adultery with Bathsheba and the murder of Uriah. The model of biblical repentance: honest, specific, God-focused, and theologically precise.",
    keyVerse: "Psalm 51:10",
  },
  {
    number: "72",
    type: "Royal",
    title: "The King's Reign",
    description: "A Messianic psalm praying for the righteous king whose dominion reaches from sea to sea and whose reign brings justice to the poor. The New Testament applies its vision to Christ's worldwide kingdom.",
    keyVerse: "Psalm 72:8",
  },
  {
    number: "73",
    type: "Wisdom",
    title: "The Prosperity Problem",
    description: "Asaph's wrestling with the apparent triumph of the wicked and the suffering of the righteous — the theodicy problem in poetic form. Resolution comes only when he enters the sanctuary and gains God's perspective.",
    keyVerse: "Psalm 73:26",
  },
  {
    number: "88",
    type: "Lament",
    title: "The Darkest Psalm",
    description: "The only psalm that ends without resolution, praise, or hope — darkness is its final word. Heman's prayer models bringing absolute grief to God without requiring a tidy spiritual conclusion.",
    keyVerse: "Psalm 88:1",
  },
  {
    number: "90",
    type: "Lament",
    title: "Moses' Psalm",
    description: "The oldest psalm in the Psalter, attributed to Moses, meditating on God's eternal nature against the brevity and frailty of human life. Its realism about human mortality is the basis for wisdom.",
    keyVerse: "Psalm 90:10",
  },
  {
    number: "103",
    type: "Praise",
    title: "Bless the Lord O My Soul",
    description: "A sustained meditation on the comprehensive mercies of God: forgiveness, healing, redemption, steadfast love, and compassion toward dust-formed creatures. Often called the greatest praise psalm in the Psalter.",
    keyVerse: "Psalm 103:1",
  },
  {
    number: "110",
    type: "Royal",
    title: "Sit At My Right Hand",
    description: "The most-quoted Old Testament passage in the New Testament, presenting David's lord as both king and priest in the order of Melchizedek. Jesus used it to challenge the Pharisees about the Messiah's identity.",
    keyVerse: "Psalm 110:1",
  },
  {
    number: "119",
    type: "Wisdom",
    title: "The Great Torah Psalm",
    description: "The longest chapter in the Bible — 176 verses arranged as an acrostic on all 22 Hebrew letters — expressing love for God's Word in every dimension of life. An inexhaustible meditation on Scripture.",
    keyVerse: "Psalm 119:105",
  },
  {
    number: "121",
    type: "Pilgrimage",
    title: "I Lift My Eyes to the Hills",
    description: "A pilgrimage song assuring God's protection over the traveler going up to Jerusalem for the feasts. Its promise that God neither slumbers nor sleeps has comforted travelers, soldiers, and the dying for millennia.",
    keyVerse: "Psalm 121:1",
  },
  {
    number: "126",
    type: "Historical",
    title: "When the Lord Restored Zion",
    description: "A communal psalm of joy celebrating the return from Babylonian exile, which felt like a dream. Its prayer — 'Restore our fortunes, O Lord' — still echoes wherever God's people wait for promised restoration.",
    keyVerse: "Psalm 126:1",
  },
  {
    number: "130",
    type: "Penitential",
    title: "Out of the Depths",
    description: "De profundis — one of the seven penitential psalms, moving from desperate prayer through honest acknowledgment of sin to confident waiting on God's certain forgiveness. Luther called it a Pauline psalm.",
    keyVerse: "Psalm 130:1",
  },
  {
    number: "137",
    type: "Imprecatory",
    title: "By the Rivers of Babylon",
    description: "A raw lament of exiles weeping by Babylon's rivers, unable to sing God's songs in a foreign land. Its brutal conclusion — praying against Babylon's children — models bringing the full horror of injustice to God.",
    keyVerse: "Psalm 137:1",
  },
  {
    number: "139",
    type: "Praise",
    title: "You Have Searched Me",
    description: "A meditation on God's total knowledge of the psalmist — every thought, every path, every word before it is spoken — experienced as pastoral security rather than threat. It ends with the great prayer of self-examination.",
    keyVerse: "Psalm 139:1",
  },
];

interface AccordionItem {
  title: string;
  body: string;
}

const READING_ACCORDION: AccordionItem[] = [
  {
    title: "Find the Form",
    body: "Understanding psalm genres helps orient your reading. A lament psalm follows a pattern: address to God → complaint → trust → petition → praise. A hymn moves from call to praise → reasons for praise → renewed call. Knowing the form prevents misreading — don't apply lament language as personal prophecy; don't apply imprecatory prayers as vindictive wish-fulfillment.",
  },
  {
    title: "Read It in Context",
    body: "Psalms have editorial context: Psalm 1–2 introduce the whole Psalter; Psalms 3–7 follow David's flight from Absalom; the gradual psalms (120–134) are pilgrimage songs. The superscriptions (many of which are ancient and historically reliable) ground the poem in a specific life situation — read them.",
  },
  {
    title: "Pray It Before You Study It",
    body: "The Psalms are prayers first and theology second. Before reaching for a commentary, pray the psalm aloud. Eugene Peterson wrote that the Psalms are 'the school of prayer' — they teach us vocabulary. Read slowly. Repeat a verse that catches you.",
  },
  {
    title: "Find the Christological Connection",
    body: "Jesus prayed the Psalms. His cry from the cross ('My God, my God, why have you forsaken me?') is Psalm 22:1. His last breath ('Into your hands I commit my spirit') is Psalm 31:5. The NT quotes the Psalms more than any other OT book, consistently applying them to Christ. Ask: How does this psalm find its fullest meaning in the person and work of Jesus?",
  },
  {
    title: "Sit With the Emotions",
    body: "C.S. Lewis observed that the Psalms give us permission to feel what we feel before God. Anger, grief, despair, confusion, delight — the full range is present. Don't spiritually edit your reading. If Psalm 88 ends in darkness without resolution, don't force a cheerful conclusion onto it. God can handle your honest lament.",
  },
  {
    title: "Use the Canonical Shape",
    body: "The Psalter is arranged in 5 books that mirror the Pentateuch. Book 1 (1–41) centers on David and personal life; Book 2 (42–72) on community and exile; Book 3 (73–89) on national crisis; Book 4 (90–106) on the Lord's kingship; Book 5 (107–150) on Torah and praise climaxing in the five Hallelujah psalms (146–150). Reading the whole Psalter in order reveals a movement from lament to praise.",
  },
];

interface BookEntry {
  id: number;
  label: string;
  range: string;
  subtitle: string;
  period: string;
  theme: string;
  voice: string;
  doxology: string;
  character: string;
}

const BOOKS_DATA: BookEntry[] = [
  {
    id: 1,
    label: "Book 1",
    range: "Psalms 1–41",
    subtitle: "The Psalms of David",
    period: "United monarchy, Davidic origin",
    theme: "Individual relationship with God, personal lament and praise",
    voice: "David",
    doxology: "Psalm 41:13",
    character: "Intimate, personal, honest prayer — the diary of a king who prays everything.",
  },
  {
    id: 2,
    label: "Book 2",
    range: "Psalms 42–72",
    subtitle: "The Psalms of Exile",
    period: "Divided monarchy / pre-exilic",
    theme: "Community lament, longing for God, national crisis",
    voice: "Sons of Korah, Asaph, David",
    doxology: "Psalm 72:18–19",
    character: "Corporate, geographic, identity-forming — the prayers of a people losing their land.",
  },
  {
    id: 3,
    label: "Book 3",
    range: "Psalms 73–89",
    subtitle: "The Psalms of Crisis",
    period: "Assyrian crisis, fall of the northern kingdom",
    theme: "God's apparent absence, theodicy, the Davidic covenant under threat",
    voice: "Asaph",
    doxology: "Psalm 89:52",
    character: "The darkest book — grapples with unanswered prayer and covenant crisis with unsparing honesty.",
  },
  {
    id: 4,
    label: "Book 4",
    range: "Psalms 90–106",
    subtitle: "The Psalms of the King",
    period: "Post-exilic, liturgical",
    theme: "The LORD reigns — even without a Davidic king, God is king",
    voice: "Moses (Psalm 90), anonymous",
    doxology: "Psalm 106:48",
    character: "Theocentric, creation-focused — anchoring hope in God's sovereignty when the throne is empty.",
  },
  {
    id: 5,
    label: "Book 5",
    range: "Psalms 107–150",
    subtitle: "The Psalms of Torah and Praise",
    period: "Post-exilic, synagogue",
    theme: "The Word of God and ultimate praise",
    voice: "David (108–110, 138–145), anonymous",
    doxology: "Psalm 150:1–6",
    character: "Joyful, Torah-centered — building to the final Hallelujah chorus where every breath praises the Lord.",
  },
];

interface PrayCard {
  title: string;
  description: string;
  steps: string[];
}

const PRAY_CARDS: PrayCard[] = [
  {
    title: "Daily Psalm Rotation",
    description: "Read 5 psalms a day through the entire Psalter in a month.",
    steps: [
      "Begin at Psalms 1+30+60+90+120 on Day 1, advance by 1 each day",
      "On Day 30+, cycle back to Psalm 1 again",
      "Read each psalm aloud if possible",
      "Mark verses that catch you with a bookmark or note",
      "Pray one verse before moving on",
    ],
  },
  {
    title: "The Daily Office Pattern",
    description: "Use psalms as the spine of morning and evening prayer.",
    steps: [
      "Use the Book of Common Prayer lectionary (divides Psalter over 30 days)",
      "Morning: praise psalms (113, 117, 145–150)",
      "Evening: lament or reflection psalms (23, 130, 139)",
      "Read the psalm, then sit in silence",
      "Let the psalm become your own prayer",
    ],
  },
  {
    title: "Praying a Lament",
    description: "When you're in pain, lament psalms give you words.",
    steps: [
      "Find a lament psalm that matches your situation (Ps 13, 22, 42, 88)",
      "Read it aloud, substituting 'I' for the psalmist",
      "Name specifically what you're grieving to God",
      "Speak the psalmist's trust statement as your own (even if you don't fully feel it)",
      "End with the psalm's final note of hope or surrender",
    ],
  },
  {
    title: "Imprecatory Psalms",
    description: "The angry psalms need to be prayed, not ignored.",
    steps: [
      "Identify the wrongdoing that was done to you or to God",
      "Name it explicitly in prayer",
      "Entrust vengeance to God rather than taking it yourself",
      "Ask God to act in justice, not just forgiveness",
      "Remember: Jesus, who bore the curse, is your model — he cried 'Father forgive them' AND quoted Psalm 22",
    ],
  },
  {
    title: "Psalm Meditation (Lectio Divina)",
    description: "Slow, prayerful engagement with a single psalm.",
    steps: [
      "Choose a short psalm (1, 23, 46, 121, 131)",
      "Read it slowly 3 times — each time listening for a different word or phrase",
      "Write down what catches your attention",
      "Sit in silence with that phrase",
      "Respond in prayer with what rises in you",
    ],
  },
  {
    title: "Corporate Psalm Singing",
    description: "Psalms were designed to be sung together.",
    steps: [
      "Use a modern psalter (Psalms of David in Metre, City Alight recordings, The Sing! Psalms project)",
      "Sing a psalm before or after a church gathering",
      "Memorize key psalms together (23, 46, 103, 121)",
      "When a congregation sings a lament together, it builds pastoral courage",
      "Teach children the short psalms (117, 131, 133) as entry points",
    ],
  },
];

const STATS = [
  { value: "150", label: "psalms in 5 books" },
  { value: "73+", label: "psalms authored by David" },
  { value: "#1", label: "most-quoted OT book in the NT" },
  { value: "Every", label: "human emotion represented in the Psalter" },
];

export default function PsalmsDeepDivePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_psalms-deep-dive_tab", "types");
  const [psalmFilter, setPsalmFilter] = useState<PsalmType>("All");
  const [openAccordion, setOpenAccordion] = useState<number | undefined>(undefined);
  const [selectedBook, setSelectedBook] = useState<number>(1);

  const filteredPsalms =
    psalmFilter === "All"
      ? PSALMS_DATA
      : PSALMS_DATA.filter((p) => p.type === psalmFilter);

  const activeBook = BOOKS_DATA.find((b) => b.id === selectedBook);

  const TAB_LABELS: Record<Tab, string> = {
    types: "Types of Psalms",
    reading: "How to Read a Psalm",
    psalms: "Five Books",
    pray: "Praying Through the Psalms",
    videos: "Videos",
  };

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
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              marginBottom: 12,
              color: TEXT,
            }}
          >
            The Psalms: A Deep Dive
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            The Psalter is Israel&apos;s prayer book and the church&apos;s hymnal — 150 poems
            that cover every human emotion and teach us to speak honestly to God.
          </p>
        </div>

        {/* Stats Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: GREEN,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 32,
            background: CARD,
            borderRadius: 10,
            padding: 4,
            flexWrap: "wrap",
          }}
        >
          {(["types", "reading", "psalms", "pray", "videos"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? GREEN : "transparent",
                color: tab === t ? BG : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* Tab 1: Types of Psalms */}
        {tab === "types" && (
          <div>
            {/* Filter buttons */}
            <div
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}
            >
              {PSALM_CATEGORIES.map((cat) => {
                const isActive = psalmFilter === cat;
                const color = cat === "All" ? GREEN : TYPE_COLORS[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setPsalmFilter(cat)}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 20,
                      border: `1px solid ${isActive ? color : BORDER}`,
                      background: isActive ? color + "22" : "transparent",
                      color: isActive ? color : MUTED,
                      fontWeight: 700,
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {filteredPsalms.map((psalm) => {
                const typeColor = TYPE_COLORS[psalm.type];
                return (
                  <div
                    key={psalm.number}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 20,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 900,
                          color: GREEN,
                        }}
                      >
                        {psalm.number}
                      </div>
                      <span
                        style={{
                          background: typeColor + "22",
                          color: typeColor,
                          border: `1px solid ${typeColor}44`,
                          borderRadius: 20,
                          padding: "3px 10px",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {psalm.type}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: TEXT,
                      }}
                    >
                      {psalm.title}
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: MUTED,
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {psalm.description}
                    </p>
                    <div
                      style={{
                        fontSize: 12,
                        color: PURPLE,
                        fontWeight: 700,
                        borderTop: `1px solid ${BORDER}`,
                        paddingTop: 10,
                      }}
                    >
                      Key Verse: {psalm.keyVerse}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: How to Read a Psalm */}
        {tab === "reading" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {READING_ACCORDION.map((item, i) => {
              const isOpen = openAccordion === i;
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${isOpen ? PURPLE : BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(isOpen ? undefined : i)
                    }
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 24px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      fontWeight: 800,
                      fontSize: 16,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          color: GREEN,
                          marginRight: 12,
                          fontSize: 13,
                          fontWeight: 900,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </span>
                    <span
                      style={{
                        color: PURPLE,
                        fontSize: 20,
                        fontWeight: 900,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 16,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 24px 24px",
                        borderTop: `1px solid ${BORDER}`,
                      }}
                    >
                      <p
                        style={{
                          color: MUTED,
                          fontSize: 14,
                          lineHeight: 1.8,
                          margin: "16px 0 0",
                        }}
                      >
                        {item.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Five Books of Psalms */}
        {tab === "psalms" && (
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24, alignItems: "start" }}>
            {/* Left: Book buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {BOOKS_DATA.map((book) => {
                const isActive = selectedBook === book.id;
                return (
                  <button
                    key={book.id}
                    onClick={() => setSelectedBook(book.id)}
                    style={{
                      background: isActive ? GREEN + "15" : CARD,
                      border: `1px solid ${isActive ? GREEN : BORDER}`,
                      borderRadius: 10,
                      padding: "14px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isActive ? GREEN : TEXT,
                      fontWeight: isActive ? 800 : 600,
                      fontSize: 14,
                      transition: "all 0.15s",
                    }}
                  >
                    <div style={{ fontWeight: 800, marginBottom: 2 }}>{book.label}</div>
                    <div
                      style={{
                        fontSize: 11,
                        color: isActive ? GREEN + "AA" : MUTED,
                      }}
                    >
                      {book.range}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Sticky detail panel */}
            <div
              style={{
                position: "sticky",
                top: 24,
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 32,
              }}
            >
              {activeBook && (
                <>
                  <div
                    style={{
                      fontSize: 13,
                      color: GREEN,
                      fontWeight: 800,
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {activeBook.label} · {activeBook.range}
                  </div>
                  <h2
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: TEXT,
                      marginBottom: 20,
                    }}
                  >
                    {activeBook.subtitle}
                  </h2>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                      marginBottom: 20,
                    }}
                  >
                    {[
                      { label: "Period", value: activeBook.period },
                      { label: "Dominant Voice", value: activeBook.voice },
                      { label: "Closing Doxology", value: activeBook.doxology },
                      { label: "Key Theme", value: activeBook.theme },
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          background: BG,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 10,
                          padding: "12px 14px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: PURPLE,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            marginBottom: 4,
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{ fontSize: 13, color: TEXT, lineHeight: 1.5 }}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      background: PURPLE + "15",
                      border: `1px solid ${PURPLE}33`,
                      borderRadius: 10,
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        color: PURPLE,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 6,
                      }}
                    >
                      Character
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: TEXT,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {activeBook.character}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Praying Through the Psalms */}
        {tab === "pray" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {PRAY_CARDS.map((card, i) => {
              const accentColors = [GREEN, PURPLE, "#EF4444", "#F59E0B", "#3B82F6", "#10B981"];
              const color = accentColors[i % accentColors.length];
              return (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 22,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: color + "22",
                      border: `1px solid ${color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 900,
                      color: color,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: TEXT,
                        marginBottom: 6,
                      }}
                    >
                      {card.title}
                    </div>
                    <div
                      style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}
                    >
                      {card.description}
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: 12,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      flex: 1,
                    }}
                  >
                    {card.steps.map((step, si) => (
                      <div
                        key={si}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: color + "22",
                            color: color,
                            fontSize: 10,
                            fontWeight: 900,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          {si + 1}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: MUTED,
                            lineHeight: 1.6,
                          }}
                        >
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "enxKd2YKgjI", title: "How Should You Read the Psalms?", channel: "Desiring God", description: "John Piper explains the proper approach to reading and praying the Psalms, seeing them as God's own prayer book for his people." },
                  { videoId: "QgwzuFG5LCk", title: "Let the Psalms Teach You to Pray", channel: "Desiring God", description: "A practical guide to using the Psalter as a school of prayer, letting each psalm shape and expand your vocabulary before God." },
                  { videoId: "tHPRGR3TGUM", title: "Isaiah: Dust to Glory", channel: "Ligonier Ministries", description: "R.C. Sproul explores how the prophetic books, like the Psalms, point forward to the Messiah — essential context for reading the Psalter." },
                  { videoId: "G_A-alJl1ps", title: "The Resurrection (Mark 16:1–13)", channel: "Ligonier Ministries", description: "R.C. Sproul preaches through the climax of the Psalms' Messianic hope — the resurrection that the royal psalms anticipated." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
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
      </div>
      <Footer />
    </div>
  );
}
