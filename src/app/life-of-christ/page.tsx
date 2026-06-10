"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";
const RED = "#EF4444";

// Gospel source color coding
const GOSPELS = {
  Matthew: { color: "#D97706", short: "Mt" },
  Mark: { color: "#EF4444", short: "Mk" },
  Luke: { color: "#0D9488", short: "Lk" },
  John: { color: "#6B4FBB", short: "Jn" },
} as const;
type GospelName = keyof typeof GOSPELS;

type LifeEvent = {
  title: string;
  refs: Partial<Record<GospelName, string>>;
  summary: string;
  significance: string;
};

type Period = {
  id: string;
  label: string;
  era: string;
  accent: string;
  blurb: string;
  events: LifeEvent[];
};

const PERIODS: Period[] = [
  {
    id: "incarnation",
    label: "Incarnation & Birth",
    era: "c. 6–4 BC",
    accent: PURPLE,
    blurb: "Before the manger, the Word already was. John reaches back to eternity; Matthew and Luke bring the story to Bethlehem. The God who made the world enters it.",
    events: [
      {
        title: "The Word Was God (Prologue)",
        refs: { John: "1:1–18" },
        summary: "John opens not in Bethlehem but in eternity: 'In the beginning was the Word, and the Word was with God, and the Word was God.' The Word becomes flesh and 'tabernacles' (eskēnōsen) among us.",
        significance: "Establishes the full deity and pre-existence of Christ before the narrative of his earthly life begins. The Incarnation is not the start of the Son but his entrance into creation.",
      },
      {
        title: "Annunciation to Mary",
        refs: { Luke: "1:26–38" },
        summary: "Gabriel announces to a young woman in Nazareth that she will bear the Son of the Most High. Mary's response: 'Behold, I am the servant of the Lord; let it be to me according to your word.'",
        significance: "The model of faith — surrender to God's purposes despite cost and confusion. Mary's 'yes' is the human hinge on which the Incarnation turns.",
      },
      {
        title: "The Birth of Jesus",
        refs: { Matthew: "1:18–25", Luke: "2:1–7" },
        summary: "Born in Bethlehem during the reign of Caesar Augustus, laid in a manger because there was no room. Matthew emphasizes Joseph and the fulfillment of prophecy; Luke emphasizes the humble circumstances.",
        significance: "God enters history at a datable moment under a named emperor — not myth but event. The King of Kings arrives in poverty and obscurity.",
      },
      {
        title: "Shepherds and Angels",
        refs: { Luke: "2:8–20" },
        summary: "The first to hear the good news are night-shift shepherds — among the lowliest workers. 'Glory to God in the highest, and on earth peace among those with whom he is pleased.'",
        significance: "Luke's signature: the gospel comes first to the marginalized, not the powerful. Heaven announces the Savior to those society overlooks.",
      },
      {
        title: "The Magi and the Star",
        refs: { Matthew: "2:1–12" },
        summary: "Gentile wise men from the east follow a star to worship the child, bringing gold, frankincense, and myrrh — while Herod plots murder.",
        significance: "Matthew signals from the start that this King is for the nations. The Gentiles worship while the religious establishment is troubled.",
      },
    ],
  },
  {
    id: "preparation",
    label: "Hidden Years & Baptism",
    era: "c. 4 BC – AD 27",
    accent: TEAL,
    blurb: "Three decades of silence, then the forerunner, the descent of the Spirit, and forty days in the wilderness. Jesus is revealed and tested before a single sermon.",
    events: [
      {
        title: "Jesus in the Temple at Twelve",
        refs: { Luke: "2:41–52" },
        summary: "The only canonical story from Jesus' childhood: at twelve he astonishes the teachers in the Temple. 'Did you not know that I must be in my Father's house?'",
        significance: "The earliest hint of Jesus' self-understanding — a unique relationship with the Father, even as a boy.",
      },
      {
        title: "John the Baptist Prepares the Way",
        refs: { Matthew: "3:1–12", Mark: "1:1–8", Luke: "3:1–18", John: "1:19–28" },
        summary: "A wilderness prophet calls Israel to repentance and baptism, pointing beyond himself: 'I baptize with water, but he will baptize you with the Holy Spirit.' All four Gospels record him.",
        significance: "The forerunner fulfills Isaiah 40 and Malachi 3 — the voice crying in the wilderness. Repentance is the doorway to the kingdom.",
      },
      {
        title: "The Baptism of Jesus",
        refs: { Matthew: "3:13–17", Mark: "1:9–11", Luke: "3:21–22" },
        summary: "Jesus is baptized, the heavens open, the Spirit descends as a dove, and the Father's voice declares: 'This is my beloved Son, with whom I am well pleased.'",
        significance: "A rare Trinitarian moment — Father, Son, and Spirit revealed together. Jesus identifies with sinners he came to save, though he had no sin.",
      },
      {
        title: "The Temptation in the Wilderness",
        refs: { Matthew: "4:1–11", Mark: "1:12–13", Luke: "4:1–13" },
        summary: "Forty days of fasting, then three temptations — bread, power, and spectacle. Jesus answers each with Scripture from Deuteronomy. 'Man shall not live by bread alone.'",
        significance: "Where Adam and Israel failed, Jesus succeeds. He is the faithful Son and true Israel, overcoming the tempter by the Word.",
      },
    ],
  },
  {
    id: "ministry",
    label: "Galilean Ministry",
    era: "c. AD 27–29",
    accent: GREEN,
    blurb: "Calling disciples, healing the sick, teaching the kingdom, confronting the religious leaders. The crowds swell, the opposition hardens, and the question grows: who is this?",
    events: [
      {
        title: "The First Sign at Cana",
        refs: { John: "2:1–11" },
        summary: "At a wedding, Jesus turns water into wine — 'the first of his signs.' His mother prompts him; the master of the feast marvels at the best wine saved for last.",
        significance: "John's 'signs' reveal glory and provoke faith. The kingdom is a wedding feast; Jesus brings abundance where there was lack.",
      },
      {
        title: "Calling the First Disciples",
        refs: { Matthew: "4:18–22", Mark: "1:16–20", Luke: "5:1–11" },
        summary: "By the Sea of Galilee, Jesus calls fishermen — Peter, Andrew, James, John: 'Follow me, and I will make you fishers of men.' They leave their nets at once.",
        significance: "Discipleship is initiated by Jesus' call and answered by immediate, costly obedience. Ordinary people are drawn into an extraordinary mission.",
      },
      {
        title: "The Sermon on the Mount",
        refs: { Matthew: "5:1–7:29", Luke: "6:17–49" },
        summary: "The Beatitudes, salt and light, the fulfillment of the law, the Lord's Prayer, 'do not be anxious,' the narrow gate, the wise builder. The kingdom's constitution.",
        significance: "The most concentrated block of Jesus' ethical teaching — a portrait of life under God's reign that turns the world's values upside down.",
      },
      {
        title: "Calming the Storm",
        refs: { Matthew: "8:23–27", Mark: "4:35–41", Luke: "8:22–25" },
        summary: "A storm threatens to swamp the boat while Jesus sleeps on a cushion. He rebukes the wind and waves: 'Peace! Be still.' The disciples ask, 'Who then is this?'",
        significance: "Authority over creation itself — a claim only God could make (Psalm 107:29). The central question of the Gospels surfaces: who is this man?",
      },
      {
        title: "Feeding the Five Thousand",
        refs: { Matthew: "14:13–21", Mark: "6:30–44", Luke: "9:10–17", John: "6:1–14" },
        summary: "The only miracle in all four Gospels: five loaves and two fish feed a multitude, with twelve baskets left over. John follows it with the Bread of Life discourse.",
        significance: "Jesus is the true bread from heaven, the new Moses providing in the wilderness. Abundance from scarcity in the Provider's hands.",
      },
      {
        title: "Peter's Confession at Caesarea Philippi",
        refs: { Matthew: "16:13–20", Mark: "8:27–30", Luke: "9:18–20" },
        summary: "'Who do you say that I am?' Peter answers: 'You are the Christ, the Son of the living God.' The turning point — from here Jesus sets his face toward the cross.",
        significance: "The hinge of the Synoptic Gospels. Identity confessed; now the nature of his messiahship — suffering, not conquest — is unveiled.",
      },
      {
        title: "The Transfiguration",
        refs: { Matthew: "17:1–13", Mark: "9:2–13", Luke: "9:28–36" },
        summary: "On a high mountain, Jesus' face shines like the sun; Moses and Elijah appear; the Father's voice declares again, 'This is my beloved Son; listen to him.'",
        significance: "A glimpse of glory veiled in the Incarnation — confirming his deity before the descent to the cross. The Law and Prophets testify to him.",
      },
    ],
  },
  {
    id: "journey",
    label: "Journey to Jerusalem",
    era: "c. AD 29–30",
    accent: GOLD,
    blurb: "Jesus 'sets his face' toward Jerusalem and the cross. Along the road come the great parables, hard teachings on the cost of following, and the raising of Lazarus.",
    events: [
      {
        title: "The Good Samaritan",
        refs: { Luke: "10:25–37" },
        summary: "Answering 'who is my neighbor?', Jesus tells of a despised Samaritan who helps a wounded man whom a priest and Levite passed by. 'Go, and do likewise.'",
        significance: "Redefines neighbor-love as boundary-crossing mercy. The outsider becomes the moral hero, exposing the failure of religious respectability.",
      },
      {
        title: "Mary and Martha",
        refs: { Luke: "10:38–42" },
        summary: "Martha is busy with serving; Mary sits at Jesus' feet. 'Mary has chosen the good portion, which will not be taken away from her.'",
        significance: "Presence with Jesus precedes and grounds service for Jesus. A woman is honored as a disciple in a posture reserved for rabbinic students.",
      },
      {
        title: "The Prodigal Son",
        refs: { Luke: "15:11–32" },
        summary: "A son squanders his inheritance and returns expecting to be a servant — but the father runs to embrace him. The elder brother seethes outside the feast.",
        significance: "The heart of the gospel: a father whose love runs to meet the undeserving. Grace scandalizes the self-righteous and welcomes the lost.",
      },
      {
        title: "The Raising of Lazarus",
        refs: { John: "11:1–44" },
        summary: "Four days dead, Lazarus walks out of the tomb at Jesus' command. 'I am the resurrection and the life.' Jesus weeps; the council resolves to kill him.",
        significance: "The climactic sign in John — power over death itself, foreshadowing Jesus' own resurrection and sealing the leaders' decision to act.",
      },
      {
        title: "Zacchaeus the Tax Collector",
        refs: { Luke: "19:1–10" },
        summary: "A despised, wealthy tax collector climbs a tree to see Jesus, who invites himself to dinner. Zacchaeus repents and repays fourfold. 'The Son of Man came to seek and to save the lost.'",
        significance: "Luke's thesis statement embodied. Salvation reaches the social outcast; genuine repentance bears economic fruit.",
      },
    ],
  },
  {
    id: "passion",
    label: "Passion Week",
    era: "c. AD 30",
    accent: RED,
    blurb: "The final week — over a third of the Gospels. Triumphal entry, the cleansed Temple, the Last Supper, Gethsemane, betrayal, trial, and the cross.",
    events: [
      {
        title: "The Triumphal Entry",
        refs: { Matthew: "21:1–11", Mark: "11:1–11", Luke: "19:28–44", John: "12:12–19" },
        summary: "Jesus rides into Jerusalem on a donkey to shouts of 'Hosanna!' — fulfilling Zechariah 9:9. A king of peace, not a war-horse conqueror.",
        significance: "Jesus deliberately enacts the messianic prophecy, accepting the title of king while redefining the kind of kingdom he brings.",
      },
      {
        title: "Cleansing the Temple",
        refs: { Matthew: "21:12–17", Mark: "11:15–19", Luke: "19:45–48", John: "2:13–22" },
        summary: "Jesus overturns the money-changers' tables: 'My house shall be called a house of prayer, but you make it a den of robbers.'",
        significance: "A prophetic act of judgment on a corrupted worship system — and a claim of authority over the Temple that hastens the leaders' opposition.",
      },
      {
        title: "The Last Supper",
        refs: { Matthew: "26:17–30", Mark: "14:12–26", Luke: "22:7–23", John: "13:1–17:26" },
        summary: "A Passover meal transformed: bread and cup become his body and blood of the new covenant. John records the foot-washing and the farewell discourse.",
        significance: "The institution of the Lord's Supper. Jesus interprets his coming death as the covenant sacrifice and models servant love.",
      },
      {
        title: "Gethsemane",
        refs: { Matthew: "26:36–46", Mark: "14:32–42", Luke: "22:39–46" },
        summary: "In the garden, sorrowful to death, Jesus prays: 'Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.'",
        significance: "The fullest window into Jesus' human anguish and obedience. The cup of wrath is freely embraced for our sake.",
      },
      {
        title: "Betrayal, Trial, and Denial",
        refs: { Matthew: "26:47–27:26", Mark: "14:43–15:15", Luke: "22:47–23:25", John: "18:1–19:16" },
        summary: "Judas betrays with a kiss; the Sanhedrin condemns; Peter denies three times; Pilate yields to the crowd. 'What is truth?' asks Pilate.",
        significance: "The innocent Son is handed over through human failure, religious envy, and political cowardice — yet according to God's set plan (Acts 2:23).",
      },
      {
        title: "The Crucifixion",
        refs: { Matthew: "27:32–56", Mark: "15:21–41", Luke: "23:26–49", John: "19:17–37" },
        summary: "Crucified at Golgotha between two criminals. Darkness covers the land; the Temple curtain tears. 'It is finished.' The centurion confesses, 'Truly this was the Son of God.'",
        significance: "The center of the Christian faith — the atoning death where God's justice and mercy meet. The torn curtain opens the way to God.",
      },
    ],
  },
  {
    id: "resurrection",
    label: "Resurrection & Ascension",
    era: "c. AD 30",
    accent: BLUE,
    blurb: "The tomb is empty. The risen Christ appears to the women, the disciples, and crowds — then commissions his church and ascends, promising the Spirit and his return.",
    events: [
      {
        title: "The Empty Tomb",
        refs: { Matthew: "28:1–10", Mark: "16:1–8", Luke: "24:1–12", John: "20:1–18" },
        summary: "Women come at dawn to find the stone rolled away and the tomb empty. 'He is not here, for he has risen, as he said.' Mary Magdalene meets the risen Lord.",
        significance: "The historical foundation of Christian hope. Women are the first witnesses — a detail no ancient forger would invent. Death is undone.",
      },
      {
        title: "The Road to Emmaus",
        refs: { Luke: "24:13–35" },
        summary: "The risen Jesus walks unrecognized with two disciples, opening the Scriptures 'concerning himself,' and is known at last 'in the breaking of the bread.'",
        significance: "Christ is met in word and sacrament. All of Scripture — Moses and the Prophets — points to him.",
      },
      {
        title: "Doubting Thomas",
        refs: { John: "20:24–29" },
        summary: "Thomas refuses to believe until he touches the wounds. Jesus appears: 'Put your finger here... Do not disbelieve, but believe.' 'My Lord and my God!'",
        significance: "The Gospel's climactic confession of Jesus' deity — and a blessing on those 'who have not seen and yet have believed.'",
      },
      {
        title: "The Great Commission",
        refs: { Matthew: "28:16–20", Mark: "16:14–18", Luke: "24:44–49" },
        summary: "'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations... and behold, I am with you always.'",
        significance: "The marching orders of the church — global mission grounded in Christ's authority and sustained by his abiding presence.",
      },
      {
        title: "The Ascension",
        refs: { Luke: "24:50–53" },
        summary: "Jesus blesses his disciples and is carried up into heaven. They return to Jerusalem with great joy, awaiting the promised Spirit.",
        significance: "The enthronement of Christ at the Father's right hand. The story closes where Acts begins — and the Spirit's age dawns.",
      },
    ],
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
const JOURNAL_KEY = "vine_life_of_christ_journal";

const TABS = ["Timeline", "Harmony", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

export default function LifeOfChristGuide() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_loc_tab", "Timeline");
  const [activePeriod, setActivePeriod] = usePersistedState<string>("vine_loc_period", "incarnation");
  const [gospelFilter, setGospelFilter] = useState<GospelName | "All">("All");
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_KEY);
      if (saved) setEntries(JSON.parse(saved));
    } catch { /* noop */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      verse: verse.trim(), reflection: reflection.trim(), prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }, [entries]);

  const period = useMemo(() => PERIODS.find(p => p.id === activePeriod) ?? PERIODS[0], [activePeriod]);

  const visibleEvents = useMemo(() => {
    if (gospelFilter === "All") return period.events;
    return period.events.filter(e => e.refs[gospelFilter]);
  }, [period, gospelFilter]);

  // Stats for the header
  const totalEvents = useMemo(() => PERIODS.reduce((n, p) => n + p.events.length, 0), []);
  const fourGospelEvents = useMemo(
    () => PERIODS.flatMap(p => p.events).filter(e => Object.keys(e.refs).length === 4).length,
    []
  );

  const GospelBadges = ({ refs }: { refs: LifeEvent["refs"] }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {(Object.keys(GOSPELS) as GospelName[]).map(g =>
        refs[g] ? (
          <span key={g} style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            background: GOSPELS[g].color + "22", color: GOSPELS[g].color,
            border: `1px solid ${GOSPELS[g].color}55`,
            borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700,
          }}>
            {GOSPELS[g].short} {refs[g]}
          </span>
        ) : null
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 20px" }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 16 }}>
            <Link href="/new-testament-survey" style={{ color: MUTED, fontSize: 13, textDecoration: "none" }}>← New Testament Survey</Link>
          </div>

          {/* Header */}
          <div style={{ marginBottom: 8 }}>
            <span style={{ background: PURPLE + "22", color: PURPLE, padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>Interactive · Harmony of the Gospels</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, background: "linear-gradient(90deg,#fff,#bfb8e6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>The Life of Christ</h1>
          <p style={{ color: MUTED, fontSize: "1.08rem", lineHeight: 1.7, marginBottom: 24, maxWidth: 720 }}>
            One life, told by four witnesses. Walk through the story of Jesus chronologically — from the eternal Word to the Ascension — with every event cross-referenced across Matthew, Mark, Luke, and John, its meaning, and a place to reflect.
          </p>

          {/* Stats strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
            {[
              { n: PERIODS.length, l: "Eras" },
              { n: totalEvents, l: "Key Events" },
              { n: 4, l: "Gospels Woven" },
              { n: fourGospelEvents, l: "In All Four" },
            ].map(s => (
              <div key={s.l} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 18px", flex: "1 1 120px", textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: GOLD }}>{s.n}</div>
                <div style={{ fontSize: 12, color: MUTED, textTransform: "uppercase", letterSpacing: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, paddingBottom: 14, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                padding: "8px 20px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                background: activeTab === t ? PURPLE : CARD, color: activeTab === t ? "#fff" : MUTED,
              }}>{t}</button>
            ))}
          </div>

          {/* TIMELINE TAB */}
          {activeTab === "Timeline" && (
            <div>
              {/* Period selector — the interactive timeline */}
              <div style={{ display: "flex", gap: 0, marginBottom: 8, overflowX: "auto", paddingBottom: 8 }}>
                {PERIODS.map((p, i) => {
                  const isActive = p.id === activePeriod;
                  return (
                    <button key={p.id} onClick={() => { setActivePeriod(p.id); setOpenEvent(null); }} style={{
                      flex: "1 0 auto", minWidth: 130, background: "none", border: "none", cursor: "pointer",
                      padding: "0 4px", textAlign: "center", position: "relative",
                    }}>
                      <div style={{ height: 4, background: isActive ? p.accent : BORDER, borderRadius: 2, marginBottom: 10 }} />
                      <div style={{
                        width: 14, height: 14, borderRadius: "50%", margin: "0 auto 8px",
                        background: isActive ? p.accent : CARD, border: `2px solid ${isActive ? p.accent : BORDER}`,
                        marginTop: -19,
                      }} />
                      <div style={{ fontSize: 12, fontWeight: 700, color: isActive ? TEXT : MUTED }}>{p.label}</div>
                      <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{p.era}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active period card */}
              <div style={{ background: `linear-gradient(135deg, ${period.accent}18, transparent)`, border: `1px solid ${period.accent}44`, borderRadius: 16, padding: "20px 22px", marginBottom: 20, marginTop: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: period.accent, margin: 0 }}>{period.label}</h2>
                  <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>{period.era}</span>
                </div>
                <p style={{ color: TEXT, opacity: 0.85, lineHeight: 1.7, margin: 0, fontSize: 15 }}>{period.blurb}</p>
              </div>

              {/* Gospel filter */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                <span style={{ color: MUTED, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Filter:</span>
                <button onClick={() => setGospelFilter("All")} style={{
                  padding: "5px 14px", borderRadius: 16, fontSize: 12, fontWeight: 700, cursor: "pointer",
                  border: `1px solid ${gospelFilter === "All" ? TEXT : BORDER}`,
                  background: gospelFilter === "All" ? TEXT : "transparent", color: gospelFilter === "All" ? BG : MUTED,
                }}>All</button>
                {(Object.keys(GOSPELS) as GospelName[]).map(g => (
                  <button key={g} onClick={() => setGospelFilter(g)} style={{
                    padding: "5px 14px", borderRadius: 16, fontSize: 12, fontWeight: 700, cursor: "pointer",
                    border: `1px solid ${gospelFilter === g ? GOSPELS[g].color : BORDER}`,
                    background: gospelFilter === g ? GOSPELS[g].color : "transparent",
                    color: gospelFilter === g ? "#fff" : MUTED,
                  }}>{g}</button>
                ))}
              </div>

              {/* Event list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {visibleEvents.length === 0 && (
                  <p style={{ color: MUTED, fontStyle: "italic", padding: "20px 0" }}>No events in this era are uniquely recorded by {gospelFilter}. Try another Gospel or &quot;All.&quot;</p>
                )}
                {visibleEvents.map((ev, idx) => {
                  const key = `${period.id}-${idx}`;
                  const isOpen = openEvent === key;
                  return (
                    <div key={key} style={{ background: CARD, border: `1px solid ${isOpen ? period.accent + "66" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.15s" }}>
                      <button onClick={() => setOpenEvent(isOpen ? null : key)} style={{
                        width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                        padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                            <span style={{ width: 26, height: 26, borderRadius: "50%", background: period.accent + "22", color: period.accent, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{idx + 1}</span>
                            <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{ev.title}</span>
                          </div>
                          <GospelBadges refs={ev.refs} />
                        </div>
                        <span style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{isOpen ? "▲" : "▼"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 18px 18px 54px" }}>
                          <p style={{ color: TEXT, opacity: 0.9, lineHeight: 1.75, marginBottom: 14, fontSize: 14.5 }}>{ev.summary}</p>
                          <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px" }}>
                            <div style={{ color: period.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Why It Matters</div>
                            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{ev.significance}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* HARMONY TAB */}
          {activeTab === "Harmony" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>Why Four Gospels?</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>
                The church preserved four Gospels, not one harmonized account. Each evangelist tells the one story of Jesus from a distinct vantage — and the differences are a feature, not a flaw. Together they give a fuller portrait than any single witness could.
              </p>

              <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: 28 }}>
                {[
                  { g: "Matthew" as GospelName, audience: "Jewish Christians", portrait: "Jesus the promised Messiah and new Moses — fulfilling the Law and Prophets. Five teaching blocks, the genealogy from Abraham.", symbol: "A Man" },
                  { g: "Mark" as GospelName, audience: "Roman believers", portrait: "Jesus the suffering Servant who acts — fast-paced, 'immediately,' the way of the cross. The shortest, likely earliest Gospel.", symbol: "A Lion" },
                  { g: "Luke" as GospelName, audience: "Gentiles & seekers", portrait: "Jesus the Savior of all — the poor, women, outcasts. The great parables, prayer, the Spirit, joy. Volume one of Luke–Acts.", symbol: "An Ox" },
                  { g: "John" as GospelName, audience: "The whole church", portrait: "Jesus the eternal Word and divine Son — seven signs, seven 'I AM' sayings, written 'that you may believe.'", symbol: "An Eagle" },
                ].map(({ g, audience, portrait, symbol }) => (
                  <div key={g} style={{ background: CARD, border: `1px solid ${GOSPELS[g].color}44`, borderRadius: 14, padding: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ color: GOSPELS[g].color, fontWeight: 800, fontSize: 18 }}>{g}</span>
                      <span style={{ fontSize: 11, color: MUTED, fontStyle: "italic" }}>{symbol}</span>
                    </div>
                    <div style={{ fontSize: 11, color: GOSPELS[g].color, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, marginBottom: 8 }}>{audience}</div>
                    <p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{portrait}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20, marginBottom: 24 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 14, color: TEXT }}>Events Recorded in All Four Gospels</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>
                  Only a handful of events appear in every Gospel — these form the bedrock all four witnesses agree on:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {PERIODS.flatMap(p => p.events.filter(e => Object.keys(e.refs).length === 4).map(e => ({ e, p })))
                    .map(({ e, p }) => (
                      <div key={e.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                        <span style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{e.title}</span>
                        <span style={{ color: p.accent, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, flexShrink: 0 }}>{p.label}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div style={{ background: `${PURPLE}14`, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 20 }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 10, color: PURPLE }}>On the Differences</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                  Where the Gospels differ in order or detail, they reflect each author&apos;s purpose and arrangement, not contradiction. Ancient biography prioritized theological truth and thematic grouping over strict chronology. The four accounts interlock like witnesses to a single event seen from different seats — the variations are exactly what we would expect from independent, honest testimony.
                </p>
              </div>
            </div>
          )}

          {/* JOURNAL TAB */}
          {activeTab === "Journal" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>Walk With Him</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>
                As you move through the life of Jesus, record what meets you. Which moment in his story is speaking to yours?
              </p>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 28 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>EVENT OR PASSAGE</label>
                  <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Gethsemane, John 11, the Emmaus road..."
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>REFLECTION</label>
                  <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What is Jesus showing you here?" rows={4}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>PRAYER</label>
                  <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to him in prayer..." rows={3}
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "11px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Save Entry</button>
              </div>
              {entries.length > 0 && (
                <div>
                  <h3 style={{ fontWeight: 700, color: MUTED, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>Saved Entries ({entries.length})</h3>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13 }}>{e.verse || "No passage"}</span>
                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                          <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                          <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                        </div>
                      </div>
                      {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.reflection}</p>}
                      {e.prayer && <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", borderTop: `1px solid ${BORDER}`, paddingTop: 8, marginTop: 8 }}>Prayer: {e.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIDEOS TAB */}
          {activeTab === "Videos" && (
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8, color: PURPLE }}>Video Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>Explore the life of Jesus and the four Gospels through these overviews.</p>
              <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                <VideoEmbed videoId="NnGBhG03g4M" title="The Gospel — The Story of Jesus" />
                <VideoEmbed videoId="hJkLBPIbZr4" title="Why Four Gospels?" />
                <VideoEmbed videoId="7_CGP-12AE0" title="The Passion and Resurrection" />
                <VideoEmbed videoId="oNpTha80yyE" title="The Life of Christ Overview" />
              </div>
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
