"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "eras" | "today" | "videos";

interface Era {
  id: string;
  period: string;
  title: string;
  color: string;
  summary: string;
  figures: { name: string; note: string }[];
  characteristics: string[];
  significance: string;
}

const ERAS: Era[] = [
  {
    id: "early",
    period: "c. 33 – 600 AD",
    title: "The Early Church: Psalms & Chant",
    color: "#F59E0B",
    summary:
      "The first Christians inherited the synagogue's practice of singing the Psalms and quickly added their own hymns to Christ. Worship was unaccompanied, communal, and sung — a continuation of Jewish temple devotion now centered on the risen Lord. Fragments of early Christian song appear embedded in the New Testament itself (Philippians 2:6-11; Colossians 1:15-20; 1 Timothy 3:16), suggesting the church was composing Christ-hymns within a generation of the resurrection.",
    figures: [
      { name: "King David", note: "The Psalms remained the church's primary songbook for centuries." },
      { name: "Pliny the Younger", note: "Roman governor (c. 112 AD) reported Christians 'singing a hymn to Christ as to a god' at dawn." },
      { name: "Ambrose of Milan", note: "Pioneered Latin congregational hymnody in the West (4th c.)." },
      { name: "Ephrem the Syrian", note: "Wrote rich theological hymns in Syriac, teaching doctrine through song." },
    ],
    characteristics: [
      "Unaccompanied (a cappella) singing — instruments were largely avoided as associated with pagan worship.",
      "Psalmody: the chanting of the biblical Psalms as the backbone of worship.",
      "Antiphonal and responsorial singing between leader and congregation.",
      "Doctrine carried through song to a largely non-literate church.",
    ],
    significance:
      "Music was inseparable from worship from the very beginning. The early church established that singing is a primary means of teaching theology, confessing faith, and uniting the gathered body — patterns that endure to this day.",
  },
  {
    id: "gregorian",
    period: "c. 600 – 1100",
    title: "Gregorian Chant & Plainsong",
    color: "#EAB308",
    summary:
      "As the Western church consolidated its liturgy, a vast repertoire of monophonic, unaccompanied sacred song developed — later named 'Gregorian chant' after Pope Gregory I, who was traditionally (if loosely) credited with organizing it. Sung in Latin by monks and clergy, plainchant set the texts of the Mass and the Daily Office to flowing, wordless-feeling melodic lines designed to lift the soul toward God.",
    figures: [
      { name: "Pope Gregory I", note: "Namesake of the chant tradition; associated with codifying the liturgy (d. 604)." },
      { name: "Guido of Arezzo", note: "Developed the musical staff and solmization (do-re-mi), c. 1025 — the basis of Western notation." },
      { name: "Hildegard of Bingen", note: "12th-c. abbess, composer, and mystic whose luminous chants still astonish." },
    ],
    characteristics: [
      "Monophonic: a single melodic line with no harmony.",
      "Free, unmetered rhythm following the natural flow of the Latin text.",
      "Modal melodies (the church modes) rather than major/minor keys.",
      "Liturgical function: every text tied to the Mass or the canonical hours.",
    ],
    significance:
      "Gregorian chant became the foundation of all later Western music. The development of staff notation to preserve it made polyphony — and ultimately the entire classical tradition — possible. Its meditative beauty still shapes Christian worship and contemplation.",
  },
  {
    id: "polyphony",
    period: "c. 1100 – 1500",
    title: "Medieval & Renaissance Polyphony",
    color: "#84CC16",
    summary:
      "Over centuries, musicians began layering multiple independent melodic lines atop the chant, giving birth to polyphony — many voices singing different parts in harmony. From the early organum of Notre-Dame to the soaring, intricate motets of the Renaissance, sacred music grew breathtakingly complex while remaining anchored to the liturgy. The era culminated in masters whose Masses are still sung in cathedrals worldwide.",
    figures: [
      { name: "Léonin & Pérotin", note: "The Notre-Dame school (12th–13th c.) pioneered measured polyphony." },
      { name: "Guillaume de Machaut", note: "Composed one of the first complete polyphonic Mass settings (14th c.)." },
      { name: "Josquin des Prez", note: "Renaissance master whose expressive sacred works shaped a generation." },
      { name: "Giovanni Palestrina", note: "His pure, balanced style became the model of Catholic sacred music after Trent." },
    ],
    characteristics: [
      "Multiple independent vocal lines woven together (counterpoint).",
      "Increasing emotional expressiveness tied to the meaning of the text.",
      "The Mass and motet as the great sacred forms.",
      "Music sung by trained choirs in cathedrals and chapels.",
    ],
    significance:
      "Polyphony elevated sacred music to one of the supreme artistic achievements of human civilization. Palestrina's clarity reassured the Council of Trent that elaborate music could still serve worship rather than obscure the words.",
  },
  {
    id: "reformation",
    period: "1517 – 1600",
    title: "The Reformation & Congregational Singing",
    color: "#22C55E",
    summary:
      "The Reformation gave the song of worship back to the people. Martin Luther, himself a capable musician, believed music was a gift of God second only to theology and wrote hymns in German so ordinary believers could sing their faith. The Genevan Reformers under Calvin championed metrical psalms set to robust tunes. For the first time in centuries, the whole congregation — not just the trained choir — lifted its voice.",
    figures: [
      { name: "Martin Luther", note: "Wrote 'A Mighty Fortress' and recovered congregational hymnody in the vernacular." },
      { name: "John Calvin", note: "Promoted metrical psalm-singing; the Genevan Psalter shaped Reformed worship." },
      { name: "Louis Bourgeois", note: "Composer of many Genevan Psalter tunes, including OLD HUNDREDTH." },
    ],
    characteristics: [
      "Singing in the vernacular so all could understand and participate.",
      "Robust, memorable congregational tunes (the chorale).",
      "Two streams: Lutheran hymnody and Reformed metrical psalmody.",
      "Music as a vehicle for the recovered gospel of grace.",
    ],
    significance:
      "Congregational singing became a defining mark of Protestant worship. Luther's chorales seeded the German musical tradition that would flower in Bach, while metrical psalmody shaped English and Scottish worship for centuries.",
  },
  {
    id: "bach",
    period: "1600 – 1750",
    title: "Bach & Sacred Classical Music",
    color: "#10B981",
    summary:
      "The Baroque era produced sacred music of staggering depth, crowned by Johann Sebastian Bach — a devout Lutheran who signed his manuscripts 'Soli Deo Gloria' (to God alone be the glory). His cantatas, Passions, and the Mass in B Minor preach the gospel in sound. Alongside Bach, Handel's 'Messiah' became the most beloved sacred oratorio in the English-speaking world.",
    figures: [
      { name: "J.S. Bach", note: "Lutheran cantor whose St. Matthew Passion and cantatas are theology in music." },
      { name: "George Frideric Handel", note: "Composed 'Messiah' (1741); the 'Hallelujah Chorus' endures worldwide." },
      { name: "Heinrich Schütz", note: "Earlier German master who fused Italian style with Lutheran devotion." },
    ],
    characteristics: [
      "Large sacred forms: cantata, oratorio, Passion, and Mass.",
      "Instruments fully integrated with voices.",
      "Text-painting — music dramatizing the meaning of Scripture.",
      "Deep doctrinal content, especially in the Lutheran tradition.",
    ],
    significance:
      "Bach is often called 'the fifth evangelist.' This era proved that the highest art and the deepest faith could be perfectly wedded, leaving a body of sacred music regarded among the greatest in human history.",
  },
  {
    id: "wesley",
    period: "1700 – 1850",
    title: "The Wesleyan Hymn Explosion",
    color: GREEN,
    summary:
      "The 18th-century Evangelical Revival unleashed a torrent of English hymnody. Isaac Watts broke the old rule that only literal psalms could be sung, writing fresh hymns of 'human composure.' Charles Wesley then poured out some 6,000 hymns that taught Methodist converts their theology by heart. Hymn-singing became the engine of revival, carrying assurance, grace, and joy to ordinary people.",
    figures: [
      { name: "Isaac Watts", note: "'Father of English hymnody'; wrote 'When I Survey the Wondrous Cross.'" },
      { name: "Charles Wesley", note: "Wrote ~6,000 hymns including 'And Can It Be' and 'O for a Thousand Tongues.'" },
      { name: "John Newton", note: "Former slave trader turned pastor; wrote 'Amazing Grace.'" },
      { name: "William Cowper", note: "Newton's collaborator on the Olney Hymns despite lifelong depression." },
    ],
    characteristics: [
      "Personal, experiential faith expressed in singable verse.",
      "Rich doctrine made accessible to common congregations.",
      "Hymns as evangelism and discipleship tools.",
      "Strong, hummable melodies paired with theologically dense texts.",
    ],
    significance:
      "The Wesleyan explosion produced the core repertoire of English-language hymnody still sung today. It established the hymn as both a teaching tool and an emotional centerpiece of Protestant worship.",
  },
  {
    id: "spirituals",
    period: "1700s – 1900s",
    title: "American Spirituals & the Birth of Gospel",
    color: "#14B8A6",
    summary:
      "Enslaved Africans in America forged one of the most profound bodies of sacred music ever created. The spirituals — 'Swing Low, Sweet Chariot,' 'Wade in the Water,' 'Go Down, Moses' — wove the Bible's stories of Exodus, exile, and deliverance into songs of both heavenly hope and earthly liberation. From this root grew gospel music, fusing the spirituals' fervor with blues and jazz harmonies in the Black church of the 20th century.",
    figures: [
      { name: "The Fisk Jubilee Singers", note: "Introduced spirituals to the world stage in the 1870s." },
      { name: "Thomas A. Dorsey", note: "'Father of Gospel Music'; wrote 'Precious Lord, Take My Hand.'" },
      { name: "Mahalia Jackson", note: "The 'Queen of Gospel' whose voice moved a movement." },
    ],
    characteristics: [
      "Call-and-response rooted in African musical heritage.",
      "Coded theology of liberation — heaven and freedom intertwined.",
      "Improvisation, syncopation, and powerful communal emotion.",
      "Deep biblical literacy expressed through narrative song.",
    ],
    significance:
      "The spirituals are widely regarded as America's first original art form and a towering testimony of faith under suffering. Their theology — that God hears the oppressed and brings deliverance — shaped the civil rights movement and the global Black church.",
  },
  {
    id: "southern",
    period: "1900s – present",
    title: "Southern Gospel & White Revivalism",
    color: "#06B6D4",
    summary:
      "Parallel to the Black gospel tradition, the rural white South developed its own gospel sound — rooted in shape-note singing schools, four-part harmony, and the energy of the tent revival. Quartets and convention songbooks spread songs of heaven, the blood of Christ, and the coming of the Lord across America's churches and radio waves.",
    figures: [
      { name: "Bill & Gloria Gaither", note: "Songwriters ('He Touched Me') and architects of the Homecoming concerts." },
      { name: "The Blackwood Brothers", note: "Pioneering Southern Gospel quartet." },
      { name: "James D. Vaughan", note: "Early publisher who built the convention/quartet system." },
    ],
    characteristics: [
      "Tight four-part vocal harmony, often by male quartets.",
      "Roots in shape-note (Sacred Harp) singing schools.",
      "Themes of heaven, homecoming, and the blood of Christ.",
      "Spread through songbooks, radio, and revival circuits.",
    ],
    significance:
      "Southern Gospel kept congregational and convention singing alive across the American South and influenced early country and rock. The Gaither Homecoming movement later reintroduced the genre to millions.",
  },
  {
    id: "jesus",
    period: "1960s – 1980s",
    title: "The Jesus Movement & Worship's New Sound",
    color: "#0EA5E9",
    summary:
      "Out of the 1960s counterculture came the Jesus Movement — a wave of young converts, many former hippies, who brought guitars, choruses, and a casual intimacy into Christian worship. This sparked Contemporary Christian Music (CCM) and the praise-chorus revolution, with churches like Calvary Chapel and Vineyard pioneering a relational, Spirit-led style of sung worship that would reshape the global church.",
    figures: [
      { name: "Larry Norman", note: "'Father of Christian rock'; asked 'Why should the devil have all the good music?'" },
      { name: "Keith Green", note: "Fiery singer-songwriter calling the church to wholehearted devotion." },
      { name: "John Wimber", note: "Vineyard leader who shaped intimate, Spirit-led worship." },
      { name: "Maranatha! Music", note: "Calvary Chapel's label that spread the praise-chorus." },
    ],
    characteristics: [
      "Guitar-driven, accessible, pop- and rock-influenced sound.",
      "Intimate, first-person 'praise choruses' addressed to God.",
      "Informal worship reflecting a relational view of faith.",
      "Birth of the Christian music industry and radio format.",
    ],
    significance:
      "The Jesus Movement permanently changed how much of the global church worships, opening the door to contemporary instruments, intimate language, and a worship-band model that now dominates Protestant services worldwide.",
  },
  {
    id: "modern",
    period: "1990s – present",
    title: "Modern Worship & the Hymn Revival",
    color: "#3B82F6",
    summary:
      "The late 20th and early 21st centuries saw worship music become a global industry and a worldwide spiritual movement. Worship collectives — Hillsong, Bethel, Passion, Elevation — write anthems sung in thousands of churches each week. Alongside the arena-scale praise, a 'modern hymn' movement led by Keith and Kristyn Getty deliberately recovered doctrinal depth, while CCM artists carried Christian themes onto mainstream charts.",
    figures: [
      { name: "Hillsong / Brooke Ligertwood", note: "Australian church whose songs ('What a Beautiful Name') circle the globe." },
      { name: "Chris Tomlin", note: "Passion movement worship leader; among the most-sung writers alive." },
      { name: "Keith & Kristyn Getty", note: "Led the modern hymn revival with 'In Christ Alone.'" },
      { name: "Bethel & Elevation", note: "Collectives shaping contemporary congregational repertoire." },
    ],
    characteristics: [
      "Globally distributed songs sung across denominations weekly.",
      "Polished, radio-ready production and large worship teams.",
      "A parallel modern-hymn stream prizing rich theology.",
      "CCM crossover into mainstream music and streaming.",
    ],
    significance:
      "For the first time, a relatively small number of songs are sung simultaneously by churches on every continent. This unprecedented unity raises both opportunity and the ongoing question of how to keep worship deep, biblical, and rooted as it scales.",
  },
];

function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: GREEN,
        background: "rgba(58,125,86,0.08)",
        border: `1px solid ${BORDER}`,
        borderRadius: 999,
        padding: "6px 14px",
      }}
    >
      {children}
    </span>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: `1px solid ${active ? GREEN : BORDER}`,
        background: active ? "rgba(58,125,86,0.1)" : CARD,
        color: active ? GREEN : MUTED,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        transition: "all 150ms",
      }}
    >
      {label}
    </button>
  );
}

export default function ChristianMusicHistoryPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-music-history_tab", "overview");
  const [openEra, setOpenEra] = useState<string>(ERAS[0].id);

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ paddingTop: 120, paddingBottom: 36, textAlign: "center" }}>
          <HeroBadge>Two Thousand Years of Worship</HeroBadge>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: "20px 0 14px",
              color: TEXT,
            }}
          >
            The History of Christian Music
          </h1>
          <p
            style={{
              maxWidth: 740,
              margin: "0 auto",
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            From the unaccompanied Psalms of the early church to the global worship anthems of today
            — trace how the people of God have sung their faith across two millennia, and discover
            the figures, sounds, and convictions that shaped each era.
          </p>
        </header>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <TabButton active={tab === "overview"} label="Overview" onClick={() => setTab("overview")} />
          <TabButton active={tab === "eras"} label="Through the Eras" onClick={() => setTab("eras")} />
          <TabButton active={tab === "today"} label="Worship Today" onClick={() => setTab("today")} />
          <TabButton active={tab === "videos"} label="Videos" onClick={() => setTab("videos")} />
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 14px" }}>
                A Singing Faith
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: "0 0 14px" }}>
                Christianity has always been a singing religion. From its first days the church
                lifted its voice — at first chanting the Psalms it inherited from the synagogue, then
                composing fresh hymns to the risen Christ. Every era of the church has had its own
                sound: the haunting monophony of Gregorian chant, the towering polyphony of the
                Renaissance, the gospel-soaked hymns of the Wesleys, the spirituals born in
                suffering, and the global worship anthems of our own day.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: 0 }}>
                This is not merely a history of music. It is the story of how God&apos;s people have
                confessed their theology, processed their grief, celebrated their salvation, and
                united across nations and centuries — all in song. To know this history is to hear
                the church&apos;s long, unbroken hymn of praise.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 14,
                marginBottom: 24,
              }}
            >
              {[
                [String(ERAS.length), "Major eras", GREEN],
                ["2,000", "Years of song", PURPLE],
                ["8th c.", "Oldest hymn here", "#F59E0B"],
                ["Global", "Worship today", "#3B82F6"],
              ].map(([n, l, c]) => (
                <div
                  key={l}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    padding: "20px 16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 700, color: c }}>
                    {n}
                  </div>
                  <div style={{ color: MUTED, fontSize: 13, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 18px" }}>
                The Eras at a Glance
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                {ERAS.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => {
                      setTab("eras");
                      setOpenEra(e.id);
                    }}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                      textAlign: "left",
                      background: "transparent",
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                      cursor: "pointer",
                      color: TEXT,
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: e.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontWeight: 600 }}>{e.title}</span>
                    <span style={{ marginLeft: "auto", color: MUTED, fontSize: 13 }}>{e.period}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ERAS */}
        {tab === "eras" && (
          <section style={{ display: "grid", gap: 16 }}>
            {ERAS.map((e) => {
              const open = openEra === e.id;
              return (
                <article
                  key={e.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${open ? e.color + "60" : BORDER}`,
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenEra(open ? "" : e.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 24px",
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        color: e.color,
                        background: `${e.color}1A`,
                        border: `1px solid ${e.color}40`,
                        borderRadius: 999,
                        padding: "4px 12px",
                      }}
                    >
                      {e.period}
                    </span>
                    <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: 0, color: TEXT }}>
                      {e.title}
                    </h3>
                    <span style={{ marginLeft: "auto", color: MUTED, fontSize: 22 }}>
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  {open && (
                    <div style={{ padding: "0 24px 26px" }}>
                      <p
                        style={{
                          color: MUTED,
                          lineHeight: 1.75,
                          fontSize: "1.02rem",
                          margin: "0 0 22px",
                        }}
                      >
                        {e.summary}
                      </p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                          gap: 18,
                          marginBottom: 22,
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              fontSize: 12,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              color: e.color,
                              margin: "0 0 12px",
                            }}
                          >
                            Key Figures
                          </h4>
                          <div style={{ display: "grid", gap: 10 }}>
                            {e.figures.map((f) => (
                              <div key={f.name}>
                                <div style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>
                                  {f.name}
                                </div>
                                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>
                                  {f.note}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4
                            style={{
                              fontSize: 12,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              color: e.color,
                              margin: "0 0 12px",
                            }}
                          >
                            Characteristics
                          </h4>
                          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: 8 }}>
                            {e.characteristics.map((c) => (
                              <li key={c} style={{ display: "flex", gap: 8, color: MUTED, fontSize: 13, lineHeight: 1.5 }}>
                                <span style={{ color: e.color, flexShrink: 0 }}>♪</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div
                        style={{
                          background: `${e.color}0D`,
                          border: `1px solid ${e.color}33`,
                          borderRadius: 12,
                          padding: "16px 18px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: e.color,
                            marginBottom: 8,
                          }}
                        >
                          Why It Matters
                        </div>
                        <p style={{ margin: 0, color: TEXT, lineHeight: 1.65, fontSize: "0.98rem" }}>
                          {e.significance}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        )}

        {/* WORSHIP TODAY */}
        {tab === "today" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 14px" }}>
                Worship in the 21st Century
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: "0 0 14px" }}>
                We live in an unprecedented moment: a relatively small body of worship songs is now
                sung simultaneously by churches on every continent, every Sunday. Streaming,
                conferences, and global publishing have created a shared songbook unlike anything in
                church history. This brings remarkable unity — and a fresh responsibility to keep our
                singing rooted, biblical, and true.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: 0 }}>
                Several streams flow side by side today, each with its own gifts to the wider church.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  name: "Arena Worship Collectives",
                  who: "Hillsong, Bethel, Passion, Elevation",
                  text: "Polished, anthemic congregational songs born in large churches and conferences, spreading worldwide within weeks of release.",
                  color: "#3B82F6",
                },
                {
                  name: "The Modern Hymn Movement",
                  who: "Keith & Kristyn Getty, Stuart Townend, Sovereign Grace",
                  text: "A deliberate recovery of doctrinally rich, narrative hymns ('In Christ Alone') written for congregational singing across generations.",
                  color: GREEN,
                },
                {
                  name: "Contemporary Christian Music (CCM)",
                  who: "Lauren Daigle, TobyMac, for KING & COUNTRY",
                  text: "Christian artists making radio- and chart-ready music that carries faith into mainstream culture and personal listening.",
                  color: PURPLE,
                },
                {
                  name: "Global & Multilingual Worship",
                  who: "Maverick City, Hillsong Español, Indigenous movements",
                  text: "Worship sung in dozens of languages and cultural styles, reflecting the truly global, multiethnic church of today.",
                  color: "#F59E0B",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 4,
                      borderRadius: 999,
                      background: s.color,
                      marginBottom: 14,
                    }}
                  />
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", margin: "0 0 4px" }}>
                    {s.name}
                  </h3>
                  <div style={{ color: s.color, fontSize: 13, marginBottom: 10 }}>{s.who}</div>
                  <p style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 18px" }}>
                Questions for the Singing Church
              </h3>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  ["Depth vs. accessibility", "How do we keep worship both singable for everyone and rich enough to carry the weight of the gospel?"],
                  ["Performance vs. participation", "Has the worship-band model turned the congregation into an audience? How do we keep the people singing?"],
                  ["Old and new together", "Wise churches treasure the historic hymns and the best new songs, letting the whole church across time worship together."],
                ].map(([t, d]) => (
                  <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 800, marginTop: 2 }}>›</span>
                    <span>
                      <strong style={{ color: TEXT }}>{t}.</strong>{" "}
                      <span style={{ color: MUTED }}>{d}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <section>
            <p
              style={{
                color: MUTED,
                textAlign: "center",
                maxWidth: 660,
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Hear the eras for yourself — from medieval chant to a Bach chorale, a beloved spiritual,
              and modern global worship.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {[
                { title: "Gregorian Chant — Kyrie", videoId: "kdmZdH52z9k", era: "Medieval" },
                { title: "Bach — St. Matthew Passion (Chorale)", videoId: "Cv9j8Y8Zj1c", era: "Baroque" },
                { title: "Swing Low, Sweet Chariot (Spiritual)", videoId: "QTHGZ29Ws9w", era: "Spirituals" },
                { title: "In Christ Alone (Modern Hymn)", videoId: "rn9-UNer6MQ", era: "Modern" },
              ].map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: GREEN, fontSize: 12, marginBottom: 4 }}>{v.era}</div>
                    <h4 style={{ fontFamily: SERIF, fontSize: "1.2rem", margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
