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

type Tab = "what" | "years" | "using" | "resources" | "videos";

const whatItems = [
  {
    id: "rcl",
    title: "What Is the Revised Common Lectionary?",
    content: "The Revised Common Lectionary (RCL) is a three-year cycle of Scripture readings used by most Protestant and Catholic churches for Sunday worship. Developed in 1994 and updated in 1992, it is now used by Episcopal, Lutheran, Methodist, Presbyterian (PCUSA), Reformed Church in America, United Church of Christ, Anglican, and many other denominations. Each Sunday provides four readings: an Old Testament passage, a Psalm, a New Testament (Epistle) reading, and a Gospel reading. The RCL is designed so that over three years, a congregation hears the major narratives and themes of the entire Bible.",
  },
  {
    id: "structure",
    title: "The Three-Year Cycle (Year A, B, C)",
    content: "Year A centers on the Gospel of Matthew. Year B centers on the Gospel of Mark (supplemented by John's Gospel in the summer). Year C centers on the Gospel of Luke. The Gospel of John provides supplemental readings across all three years, especially during Lent, Easter, and major feasts. The three-year cycle began in 1970 with the Catholic Lectionary and was adapted for Protestant use. The current year of the cycle can be determined by looking up the RCL calendar; Year A begins on the First Sunday of Advent in years divisible by 3 (2025, 2028, etc.).",
  },
  {
    id: "seasons",
    title: "The Liturgical Seasons",
    content: "The RCL is organized around the liturgical year: Advent (preparation for Christmas), Christmas (December 25 through Epiphany), Epiphany (manifestation of Christ to the nations), Lent (40 days of preparation for Easter), Easter (50 days through Pentecost), and Ordinary Time (the long season after Pentecost, also called 'Time after Pentecost'). Each season has its own theological focus. Advent and Lent are penitential/preparatory. Christmas and Easter are celebratory. Epiphany and Ordinary Time develop the implications of Christ's person and work for discipleship.",
  },
  {
    id: "benefits",
    title: "Why Preach the Lectionary?",
    content: "Lectionary preaching offers several disciplines: (1) It covers the whole Bible over three years rather than only the preacher's favorite texts. (2) It forces engagement with difficult passages that a topical preacher might avoid. (3) It connects the congregation to the global church — millions of Christians worldwide are preaching the same texts on the same Sunday. (4) It aligns preaching with the church's calendar, connecting doctrine to story. (5) It is harder to distort into a hobbyhorse — the text is assigned, not chosen to fit an agenda. Critics note that lectionary preaching can produce disconnected week-to-week sermons and miss sustained biblical-theological teaching.",
  },
  {
    id: "expository",
    title: "Lectionary vs. Expository Preaching",
    content: "Many Reformed and evangelical churches practice expository preaching through entire books of the Bible (lectio continua), which gives sustained theological development and deep familiarity with a book's argument. The RCL selects pericopes (passages) that may skip verses or chapters. These approaches are not mutually exclusive: some preachers use the Lectionary seasons as a framework and preach through lectionary books sequentially; others observe the major seasons (Advent, Lent, Easter) with lectionary texts and preach expositorial series during Ordinary Time. What matters most is that the whole counsel of God is proclaimed over time.",
  },
  {
    id: "howto",
    title: "How to Use the Lectionary for Preaching",
    content: "Step 1: Identify the upcoming Sunday in the RCL (many free tools at lectionary.library.vanderbilt.edu). Step 2: Read all four assigned texts in full — look for thematic connections. Step 3: Choose one primary text for the sermon (most preachers focus on the Gospel or OT reading). Step 4: Exegete the chosen text in its canonical context; consult a commentary. Step 5: Plan the sermon series arc for the season — Advent, Lent, and the post-Pentecost Ordinary Time all offer extended series opportunities. Step 6: Resource children's church and adult education with the same texts for a whole-church reading experience.",
  },
];

type LectionaryYear = {
  id: string;
  year: string;
  gospel: string;
  theme: string;
  keySeasons: string[];
  distinctives: string;
  seriesSuggestions: string[];
};

const lectionaryYears: LectionaryYear[] = [
  {
    id: "yearA",
    year: "Year A",
    gospel: "Matthew",
    theme: "The Kingdom of Heaven — Jesus as the fulfillment of Israel",
    keySeasons: [
      "Advent: Isaiah 2, 11, 35 — the coming King",
      "Epiphany: Matthew's Sermon on the Mount (5-7)",
      "Lent: Nicodemus (John 3), woman at the well (John 4), man born blind (John 9)",
      "Easter: 'Do not be afraid. Go and tell' (Matt 28)",
      "Ordinary Time: Kingdom parables (Matt 13-25)",
    ],
    distinctives:
      "Matthew is the most Jewish of the Gospels, grounding Jesus firmly in Israel's story. Year A preaching offers rich opportunities to preach the Old Testament alongside Matthew's 'fulfillment' quotations. The Sermon on the Mount (the longest Ordinary Time reading sequence) gives an entire summer of ethics, discipleship, and kingdom living.",
    seriesSuggestions: [
      "Epiphany: 'Kingdom Ethics' (Sermon on the Mount, 8 weeks)",
      "Lent: 'Signs and Sight' (John 3, 4, 9, 11 — seeing and believing)",
      "Post-Pentecost: 'Parables of the Kingdom' (Matt 13-25, 10 weeks)",
      "Advent: 'Come Lord Jesus' (Isaiah's messianic promises)",
    ],
  },
  {
    id: "yearB",
    year: "Year B",
    gospel: "Mark (+ John 6 in summer)",
    theme: "The Suffering Servant — the urgency and cost of the Kingdom",
    keySeasons: [
      "Advent: Isaiah 40 — 'Comfort, comfort my people'",
      "Epiphany: Mark's rapid-fire miracles and healings",
      "Lent: The Transfiguration, then the shadow of the cross",
      "Easter: 'He is not here. He is risen.' (Mark 16)",
      "Summer: John 6 — 'I am the Bread of Life' (5 weeks)",
    ],
    distinctives:
      "Mark is the shortest, fastest, most urgent Gospel. 'Immediately' appears 41 times. Year B preaching can develop the theme of suffering discipleship — Jesus going to the cross, calling others to follow. The summer John 6 series is a distinctive feature of Year B: five consecutive Sundays on the Bread of Life discourse give extraordinary depth on Eucharist and true discipleship.",
    seriesSuggestions: [
      "Epiphany: 'Who Is This Man?' (Mark's miracles series, 6 weeks)",
      "Lent: 'The Suffering Servant' (Isaiah 52-53 + Mark's passion predictions)",
      "Summer: 'The Bread of Life' (John 6, 5 weeks)",
      "Post-Pentecost: 'The Cost of Discipleship' (Mark 8-10)",
    ],
  },
  {
    id: "yearC",
    year: "Year C",
    gospel: "Luke",
    theme: "Good News for the Poor — the Spirit, prayer, and the margins",
    keySeasons: [
      "Advent: Luke 1 — the Magnificat, the Benedictus, preparing the way",
      "Epiphany: Jesus's inaugural sermon (Luke 4:16-21) — 'Good news to the poor'",
      "Lent: The prodigal son, the lost sheep, the Pharisee and the tax collector",
      "Easter: The Road to Emmaus (Luke 24) — recognizing Jesus in the breaking of bread",
      "Pentecost: Acts 2 — the Spirit poured out on all flesh",
    ],
    distinctives:
      "Luke is the Gospel of the Spirit, prayer, women, and the poor. Year C is rich for preaching social dimensions of the Gospel, prayer (Jesus prays before every major event), and inclusion (the 10 lepers, the Samaritan, Zacchaeus). The Year C Advent lectionary includes Mary's Magnificat — a powerful declaration of God's revolutionary reversal. Luke's unique parables (prodigal son, good Samaritan, Pharisee & tax collector) are the Lent backbone.",
    seriesSuggestions: [
      "Advent: 'The Songs of Advent' (Magnificat, Benedictus, Gloria) — 4 weeks",
      "Lent: 'The Lost Parables' (Luke 15-18, the God who seeks) — 5 weeks",
      "Post-Pentecost: 'Jesus on Prayer' (Luke 11, 18 — the persistent widow) — 4 weeks",
      "Epiphany: 'Good News to the Poor' (Luke 4-7, the program of the Kingdom)",
    ],
  },
];

const usingItems = [
  {
    id: "sermon_prep",
    title: "Lectionary Sermon Prep Process",
    content:
      "Begin on Monday or Tuesday for the following Sunday. (1) Read all four texts cold — without commentaries. Write down your first impressions, questions, confusions. (2) Identify the connecting thread: What do these four texts share? What is the liturgical season doing? (3) Choose your primary text. (4) Exegete the primary text in Hebrew/Greek or with a technical commentary. (5) Identify the 'good news' — what does this text announce that is actually good? (6) Listen to two other preachers on this text (WorkingPreacher.org sermon commentary; Lectionary Podcast). (7) Draft and deliver.",
  },
  {
    id: "planning",
    title: "Long-Range Season Planning",
    content:
      "The lectionary's seasonal structure makes long-range planning natural. Announce your Advent series in early November. Plan your Lent series in January. Design Easter through Pentecost as a unified Easter season arc (50 days). Use Ordinary Time (June-November) for extended series that go deeper in a book or theme the lectionary touches on. Many churches provide bulletin inserts with the season's texts — encouraging congregants to read ahead, connecting family devotions to the Sunday text.",
  },
  {
    id: "children",
    title: "Lectionary with Children's Ministry",
    content:
      "The best lectionary-integrated churches teach the same text to every age group. Children's church, youth group, and adult education engage the Sunday text from different angles. Resources for children: Illustrated Ministry (illustratedministry.com) produces lectionary-based curriculum, art packs, and activity pages. Spark Story Bible follows the RCL cycle. The Whirl curriculum is lectionary-based for PreK through grade 5. When the whole church is in the same biblical story, dinner-table conversations become natural discipleship.",
  },
  {
    id: "worship",
    title: "Aligning Worship with the Lectionary",
    content:
      "The most coherent Sunday worship aligns every element with the lectionary text: the call to worship, congregational singing, prayers, Scripture readings, sermon, and Communion all reinforce the same theme. Lectionary-integrated worship resources include: the Revised Common Lectionary Prayers (ELCA); The Worship Sourcebook (Calvin Institute of Christian Worship); Lift Up Your Hearts (Reformed hymnal with lectionary index); Worship Sourcebook for RCL (CRC). Many contemporary worship teams find the lectionary Psalm a natural starting point for selecting worship songs — set the Psalm to music, or find a modern arrangement of it.",
  },
  {
    id: "online",
    title: "Free Online Lectionary Tools",
    content:
      "lectionary.library.vanderbilt.edu — free, authoritative RCL text lookup by date. WorkingPreacher.org (Luther Seminary) — free commentary for every lectionary reading, every week. The Text This Week (textweek.com) — enormous aggregator of art, commentary, and sermons for every RCL text. Clergy Stuff (clergystuff.com) — sermon helps, children's resources, newsletter inserts. The Lectionary Lab podcast — two preachers wrestle with the weekly texts. Sundays and Seasons (augsburgfortress.org) — annual subscription resource for Lutheran/ELCA congregations with full service planning.",
  },
  {
    id: "objections",
    title: "Common Objections to Lectionary Preaching",
    content:
      "Objection 1: 'The text is assigned, not the Spirit's leading.' Response: The Holy Spirit worked in the development of the lectionary and works through the preacher's engagement with an assigned text. Objection 2: 'Lectionary preaching skips difficult texts.' Response: The RCL covers far more of the Bible than most non-lectionary preachers do. Objection 3: 'It produces disconnected sermons.' Response: This is a preaching discipline problem, not a lectionary problem — skilled lectionary preachers develop coherent seasons. Objection 4: 'My church isn't liturgical.' Response: The lectionary is a tool, not a liturgy — it can be used without any other liturgical practice.",
  },
];

const resources = [
  {
    title: "Preaching the Revised Common Lectionary",
    author: "Marion Soards, Thomas Dozeman & Kendall McCabe",
    publisher: "Abingdon Press",
    description: "A four-volume commentary on all three years of the RCL, covering every assigned text with exegesis and homiletical suggestions.",
  },
  {
    title: "Working Preacher",
    author: "Luther Seminary",
    publisher: "workingpreacher.org (free)",
    description: "Weekly commentary by leading scholars on all four lectionary texts, plus podcast and sermon feedback forum.",
  },
  {
    title: "Feasting on the Word",
    author: "David Bartlett & Barbara Brown Taylor (eds.)",
    publisher: "Westminster John Knox Press",
    description: "12-volume series covering all three lectionary years with theological, pastoral, and homiletical essays for each text.",
  },
  {
    title: "The Revised Common Lectionary: The Consensus Text",
    author: "Consultation on Common Texts",
    publisher: "Abingdon Press",
    description: "The official text of the RCL with all readings in canonical order, plus the calendar structure for all three years.",
  },
  {
    title: "The Text This Week",
    author: "Jenee Woodard",
    publisher: "textweek.com (free)",
    description: "The largest free aggregator of lectionary resources: art, poetry, commentary, children's materials, and sermon links for every RCL text since 1995.",
  },
  {
    title: "Connections: A Lectionary Commentary",
    author: "Joel B. Green (ed.)",
    publisher: "Westminster John Knox",
    description: "New multi-volume RCL commentary with connections between the four texts each Sunday and links to theology, ethics, and culture.",
  },
];

export default function LectionaryGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_lectionary-guide_tab", "what");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedYear, setSelectedYear] = useState<LectionaryYear>(lectionaryYears[0]);

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["📅 Liturgy", "🎙️ Preaching"].map((tag) => (
            <span key={tag} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 13, color: MUTED }}>
              {tag}
            </span>
          ))}
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.15 }}>
          The Lectionary Preaching Guide
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 680 }}>
          The Revised Common Lectionary is a three-year cycle of Scripture readings that connects preachers and congregations to the whole Bible and the church's calendar. Here is how to understand and use it.
        </p>

        {/* Stats banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { num: "3", label: "Year cycle: A (Matthew), B (Mark), C (Luke)" },
            { num: "4", label: "readings per Sunday: OT, Psalm, Epistle, Gospel" },
            { num: "1994", label: "Year the RCL was published in its final form" },
            { num: "50+", label: "denominations worldwide use the RCL" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{stat.num}</div>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {(
            [
              { id: "what", label: "What Is It?" },
              { id: "years", label: "Year A / B / C" },
              { id: "using", label: "How to Use It" },
              { id: "resources", label: "Resources" },
              { id: "videos", label: "Videos" },
            ] as { id: Tab; label: string }[]
          ).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}18` : CARD,
                color: tab === t.id ? GREEN : MUTED,
                fontWeight: tab === t.id ? 700 : 400,
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: What Is It */}
        {tab === "what" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Understanding the Revised Common Lectionary</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {whatItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Year A / B / C */}
        {tab === "years" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>The Three-Year Lectionary Cycle</h2>
            <div style={{ display: "flex", gap: 24 }}>
              {/* Left: year list */}
              <div style={{ flex: "0 0 160px", display: "flex", flexDirection: "column", gap: 10 }}>
                {lectionaryYears.map((y) => (
                  <button
                    key={y.id}
                    onClick={() => setSelectedYear(y)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: `1px solid ${selectedYear.id === y.id ? GREEN : BORDER}`,
                      background: selectedYear.id === y.id ? `${GREEN}18` : CARD,
                      color: selectedYear.id === y.id ? GREEN : TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      fontWeight: selectedYear.id === y.id ? 700 : 400,
                      fontSize: 15,
                    }}
                  >
                    {y.year}
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{y.gospel}</div>
                  </button>
                ))}
              </div>

              {/* Right: detail */}
              <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, position: "sticky", top: 24, alignSelf: "flex-start" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", color: GREEN }}>{selectedYear.year}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>Primary Gospel: {selectedYear.gospel}</div>
                <div style={{ background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>Central Theme</div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{selectedYear.theme}</div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Key Seasonal Texts</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {selectedYear.keySeasons.map((s) => (
                      <li key={s} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>What Makes This Year Distinctive</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{selectedYear.distinctives}</p>
                </div>

                <div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Sermon Series Suggestions</div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {selectedYear.seriesSuggestions.map((s) => (
                      <li key={s} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: How to Use It */}
        {tab === "using" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>How to Use the Lectionary in Practice</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {usingItems.map((item) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                    <span style={{ color: GREEN, fontSize: 20, fontWeight: 300 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.75, fontSize: 15 }}>
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Resources */}
        {tab === "resources" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Lectionary Preaching Resources</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {resources.map((r, i) => (
                <div key={r.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "22px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ background: `${PURPLE}33`, border: `1px solid ${PURPLE}66`, borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: PURPLE, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 4px" }}>{r.title}</h3>
                    <div style={{ color: PURPLE, fontSize: 13, marginBottom: 8 }}>
                      {r.author} — {r.publisher}
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  { videoId: "zWizZ53RFVw", title: "R.C. Sproul: What Is the Gospel?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul provides a clear, precise answer to the question every preacher must answer before opening Scripture — foundational for any approach to lectionary preaching." },
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller models how to preach a biblical text with theological depth and cultural engagement — an example of the kind of preaching the lectionary is designed to support." },
                  { videoId: "4v_N2gxMnWQ", title: "Why All Sermons Should Be Christ-Centered", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller explains the hermeneutical principle that should govern every lectionary sermon: all Scripture points to Christ." },
                  { videoId: "wQ5cclvdWjo", title: "If God Is Sovereign, How Can Man Be Free?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul demonstrates careful biblical exposition — the kind of preaching that treats every text as God's authoritative Word." },
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
