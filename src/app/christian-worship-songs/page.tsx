"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "songs" | "theology" | "history" | "videos";

const ERAS = ["All", "Classic Hymn", "Modern Hymn", "Contemporary", "Global"];

const SONGS = [
  {
    title: "In Christ Alone",
    artist: "Keith Getty & Stuart Townend",
    year: 2001,
    era: "Modern Hymn",
    color: PURPLE,
    key_line: "In Christ alone my hope is found / He is my light, my strength, my song",
    theme: "Gospel / Atonement",
    why: "Written by two of the most important hymn writers of the modern era, this song compressed the entire gospel — incarnation, atonement, resurrection, return — into four stanzas of poetic precision. The third verse (In Christ alone, who took on flesh) caused some denominations to debate removing it for softening penal substitution. That controversy is itself a marker of the song's theological seriousness.",
    verse: "Colossians 1:19-20",
    youtube: "https://youtube.com/results?search_query=in+christ+alone+keith+getty",
    initials: "ICA",
  },
  {
    title: "How Great Thou Art",
    artist: "Carl Boberg / Stuart K. Hine (English)",
    year: 1885,
    era: "Classic Hymn",
    color: "#F59E0B",
    key_line: "Then sings my soul, my Savior God, to Thee / How great Thou art, how great Thou art!",
    theme: "Praise / Creation",
    why: "Originally a Swedish poem by Carl Boberg, inspired by a sudden thunderstorm, translated into English by Stuart K. Hine in the 1940s. Became globally famous when Billy Graham's crusades used it repeatedly. For generations of Christians, the chorus is one of the most visceral expressions of awe at God's greatness available in congregational song.",
    verse: "Psalm 104:1",
    youtube: "https://youtube.com/results?search_query=how+great+thou+art+hymn",
    initials: "HGT",
  },
  {
    title: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman",
    year: 2011,
    era: "Contemporary",
    color: GREEN,
    key_line: "Bless the Lord, O my soul / O my soul / Worship His holy name",
    theme: "Praise / Psalm 103",
    why: "Redman wrote this song after meditating on Psalm 103 — the great psalm of blessing God for his character and deeds. The chorus is directly drawn from the psalm. Won the Grammy for Contemporary Christian Music Song of the Year. One of the most-sung congregational songs of the 2010s worldwide.",
    verse: "Psalm 103:1",
    youtube: "https://youtube.com/results?search_query=10000+reasons+matt+redman",
    initials: "10K",
  },
  {
    title: "Goodness of God",
    artist: "Bethel Music (CeCe Winans version most-known)",
    year: 2018,
    era: "Contemporary",
    color: "#EC4899",
    key_line: "All my life You have been faithful / All my life You have been so, so good",
    theme: "Faithfulness / Testimony",
    why: "Written by Brian and Jenn Johnson along with several others at Bethel. CeCe Winans's 2019 recording became one of the most-played worship songs in churches globally. The bridge — I love You, Lord — is devastatingly simple and has moved thousands to genuine tears in congregational worship.",
    verse: "Lamentations 3:22-23",
    youtube: "https://youtube.com/results?search_query=goodness+of+god+bethel+music",
    initials: "GoG",
  },
  {
    title: "Way Maker",
    artist: "Sinach",
    year: 2015,
    era: "Contemporary",
    color: "#3B82F6",
    key_line: "You are here, moving in our midst / I worship You, I worship You",
    theme: "God's Presence / Miracle",
    why: "Written by Nigerian gospel artist Sinach, this song went global when recordings by Leeland and others introduced it to Western congregations. It became one of the most-translated and most-sung worship songs of the 2010s worldwide — a reminder that the center of gravity in global Christianity has shifted to the Global South.",
    verse: "Isaiah 43:19",
    youtube: "https://youtube.com/results?search_query=way+maker+sinach+leeland",
    initials: "WM",
  },
  {
    title: "Oceans (Where Feet May Fail)",
    artist: "Hillsong United",
    year: 2013,
    era: "Contemporary",
    color: "#00D4AA",
    key_line: "Spirit lead me where my trust is without borders / Let me walk upon the waters",
    theme: "Faith / Trust",
    why: "One of the most listened-to worship songs of the 2010s globally. The extended final section — Spirit lead me — became an anthem for a generation navigating uncertainty. The song explicitly references Peter's walk on the water (Matthew 14) and turns it into a prayer: take me further than I'd go on my own.",
    verse: "Matthew 14:29",
    youtube: "https://youtube.com/results?search_query=oceans+hillsong+united",
    initials: "OCN",
  },
  {
    title: "What a Beautiful Name",
    artist: "Hillsong Worship",
    year: 2016,
    era: "Contemporary",
    color: "#8B5CF6",
    key_line: "What a beautiful Name it is / The Name of Jesus",
    theme: "Christology / The Name of Jesus",
    why: "Won the Grammy for Contemporary Christian Song of the Year. The bridge — Death could not hold You / The veil tore before You — is one of the most Christologically dense and musically powerful moments in contemporary worship. The song moves through incarnation, crucifixion, and resurrection in a few stanzas.",
    verse: "Philippians 2:9-10",
    youtube: "https://youtube.com/results?search_query=what+a+beautiful+name+hillsong+worship",
    initials: "WBN",
  },
  {
    title: "It Is Well With My Soul",
    artist: "Horatio Spafford / Philip Bliss",
    year: 1873,
    era: "Classic Hymn",
    color: "#EF4444",
    key_line: "When peace like a river attendeth my way / When sorrows like sea billows roll",
    theme: "Suffering / Peace",
    why: "Horatio Spafford wrote this hymn after being told that his four daughters had drowned when the ship carrying them across the Atlantic sank. He wrote it crossing the spot where they died. That backstory makes the words — it is well, it is well with my soul — among the most astonishing lines in all of Christian hymnody.",
    verse: "Job 1:21",
    youtube: "https://youtube.com/results?search_query=it+is+well+with+my+soul+hymn",
    initials: "IIW",
  },
  {
    title: "Same God",
    artist: "Elevation Worship",
    year: 2022,
    era: "Contemporary",
    color: "#10B981",
    key_line: "The God of Abraham / Is the God of today",
    theme: "God's Faithfulness / Biblical History",
    why: "Elevation Worship's 2022 release became one of the fastest-spreading worship songs in years. It moves through Old Testament narratives — Abraham, Elijah, the Red Sea — and argues that the same God who acted then acts now. A congregational declaration of historical faith applied to present experience.",
    verse: "Hebrews 13:8",
    youtube: "https://youtube.com/results?search_query=same+god+elevation+worship",
    initials: "SG",
  },
  {
    title: "Holy, Holy, Holy",
    artist: "Reginald Heber",
    year: 1826,
    era: "Classic Hymn",
    color: "#F59E0B",
    key_line: "Holy, holy, holy! Lord God Almighty / Early in the morning our song shall rise to Thee",
    theme: "Trinity / Holiness",
    why: "Written specifically for Trinity Sunday, this hymn is one of the most Trinitarian congregational songs in existence. C.S. Lewis called it one of the greatest hymns ever written. John B. Dykes's 1861 tune (Nicaea) is inseparable from it. The combination of theological precision and musical grandeur makes it the gold standard of classical Christian hymnody.",
    verse: "Isaiah 6:3 / Revelation 4:8",
    youtube: "https://youtube.com/results?search_query=holy+holy+holy+lord+god+almighty+hymn",
    initials: "HHH",
  },
  {
    title: "Battle Belongs",
    artist: "Phil Wickham",
    year: 2020,
    era: "Contemporary",
    color: "#A855F7",
    key_line: "And if I walk into the valley of the shadows / Lord, remind me that the battle belongs to You",
    theme: "Spiritual Warfare / Trust",
    why: "Released in 2020 and immediately embraced by congregations navigating the pandemic. Phil Wickham's declaration that the battle belongs to God — rooted in 2 Chronicles 20 where Jehoshaphat sent worshippers before the army — gave language for a generation facing fears they could not control. One of the most-sung songs of the early 2020s.",
    verse: "2 Chronicles 20:15",
    youtube: "https://youtube.com/results?search_query=battle+belongs+phil+wickham",
    initials: "BB",
  },
  {
    title: "Yet Not I But Through Christ in Me",
    artist: "CityAlight",
    year: 2018,
    era: "Modern Hymn",
    color: GREEN,
    key_line: "What gift of grace is Jesus my redeemer / There is no more for heaven now to give",
    theme: "Gospel / Justification",
    why: "Australian worship group CityAlight wrote this song in the tradition of the great hymns — poetically precise, theologically deep, melodically singable. It captures Paul's paradox from Galatians 2:20 (it is no longer I who live, but Christ who lives in me) with unusual literary skill. Becoming widely sung in Reformed and evangelical churches.",
    verse: "Galatians 2:20",
    youtube: "https://youtube.com/results?search_query=yet+not+i+but+through+christ+in+me+cityalight",
    initials: "YNI",
  },
];

const SONG_THEOLOGY = [
  {
    id: "atonement",
    doctrine: "The Atonement",
    icon: "✝️",
    scripture: "Col 1:20, 1 Peter 2:24",
    description: "Worship songs have been one of the primary ways Christians learn and internalize the doctrine of Christ's substitutionary death. Songs like 'In Christ Alone' sparked denominational controversy precisely because they stated the doctrine clearly.",
    examples: ["In Christ Alone (Keith Getty & Stuart Townend)", "When I Survey the Wondrous Cross (Isaac Watts)", "Before the Throne of God Above (Charitie Bancroft)"],
  },
  {
    id: "trinity",
    doctrine: "The Trinity",
    icon: "🔺",
    scripture: "Matt 28:19, 2 Cor 13:14",
    description: "Trinitarian worship songs hold together what the creeds teach: Father, Son, and Spirit are distinct persons in one being. The great Trinitarian hymns have formed orthodox instincts in Christians who never read systematic theology.",
    examples: ["Holy Holy Holy (Reginald Heber)", "Come Thou Almighty King (anon., 18th c.)", "Praise God from Whom All Blessings Flow (Thomas Ken)"],
  },
  {
    id: "sovereignty",
    doctrine: "God's Sovereignty",
    icon: "👑",
    scripture: "Psalm 46, Romans 8:28",
    description: "A God who reigns over all circumstances is a God worth singing to. Songs of divine sovereignty have sustained Christians through persecution, disease, and loss for five centuries.",
    examples: ["A Mighty Fortress Is Our God (Martin Luther)", "He Is Lord (anon.)", "This Is My Father's World (Maltbie Babcock)"],
  },
  {
    id: "grace",
    doctrine: "Grace & Mercy",
    icon: "🕊️",
    scripture: "Eph 2:8-9",
    description: "The song 'Amazing Grace' has introduced more people to the doctrine of divine grace than most sermons. John Newton wrote it from firsthand experience of being rescued from the slave trade and his own sin.",
    examples: ["Amazing Grace (John Newton)", "Grace Greater Than Our Sin (Julia Johnston)", "O the Deep Deep Love of Jesus (Samuel Trevor Francis)"],
  },
  {
    id: "hope",
    doctrine: "The Second Coming & Hope",
    icon: "🌅",
    scripture: "Rev 22:20",
    description: "Christian hope is not optimism but eschatology — the confident expectation that Christ will return and make all things new. Songs of hope have historically sustained Christians through exile, suffering, and death.",
    examples: ["How Great Thou Art (Carl Boberg / Stuart K. Hine)", "Crown Him with Many Crowns (Matthew Bridges)", "This Is My Father's World (Maltbie Babcock)"],
  },
];

const SONG_HISTORY = [
  {
    id: "early",
    era: "Psalms & Early Church Hymns",
    period: "1st-4th Century",
    key_figures: ["Gregory of Nyssa", "Ambrose of Milan"],
    description: "The earliest Christian worship was rooted in the Jewish Psalter. Paul and Silas sang hymns in prison (Acts 16:25). Early church fathers like Ambrose composed hymns to combat heresy. The Te Deum — 'We praise you, O God' — dates to this era and is still sung in churches worldwide.",
    iconic_song: "Te Deum Laudamus (4th c.)",
  },
  {
    id: "chant",
    era: "Gregorian Chant",
    period: "6th-9th Century",
    key_figures: ["Gregory the Great (attributed)", "Benedictine monks"],
    description: "Monastic communities developed the rich tradition of Gregorian chant — unaccompanied, single melodic lines sung by monks in the daily liturgy. The music was designed to subordinate itself to the text, creating an atmosphere of contemplation and wonder. It remains the longest continuous musical tradition in Western civilization.",
    iconic_song: "Kyrie Eleison (Lord, Have Mercy)",
  },
  {
    id: "reformation",
    era: "Reformation Hymns",
    period: "16th Century",
    key_figures: ["Martin Luther", "John Calvin", "Genevan Psalter"],
    description: "Martin Luther's Reformation gave hymn-singing back to the congregation. His 'A Mighty Fortress Is Our God' became the anthem of the Reformation. Calvin insisted on metrical psalm-singing in Geneva. Both traditions restored the voices of ordinary worshippers to the act of praise.",
    iconic_song: "A Mighty Fortress Is Our God (Martin Luther, 1529)",
  },
  {
    id: "great-hymns",
    era: "Great Hymn Tradition",
    period: "17th-19th Century",
    key_figures: ["Isaac Watts", "Charles Wesley", "John Newton"],
    description: "Isaac Watts wrote 'When I Survey the Wondrous Cross' and over 700 other hymns, essentially inventing modern English hymnody. Charles Wesley wrote over 6,000 hymns for the Methodist revival. John Newton, the former slave-trader turned Anglican rector, wrote 'Amazing Grace.' This era produced more enduring congregational songs than any other.",
    iconic_song: "When I Survey the Wondrous Cross (Isaac Watts, 1707)",
  },
  {
    id: "gospel",
    era: "Gospel Songs & Spirituals",
    period: "19th-20th Century",
    key_figures: ["Fanny Crosby", "Philip Bliss", "African American spiritual tradition"],
    description: "Fanny Crosby, blind from infancy, wrote over 8,000 gospel songs including 'Blessed Assurance' and 'To God Be the Glory.' African American spirituals — forged in the experience of slavery — are among the most theologically profound and emotionally honest songs in Christian history, including 'Swing Low, Sweet Chariot' and 'Go Down, Moses.'",
    iconic_song: "Blessed Assurance (Fanny Crosby, 1873)",
  },
  {
    id: "contemporary",
    era: "Contemporary Worship",
    period: "1970s-Present",
    key_figures: ["Keith & Kristyn Getty", "Matt Redman", "Vineyard Movement"],
    description: "The contemporary worship movement began with the Vineyard churches in the 1970s and exploded globally with Hillsong in the 1990s. Keith and Kristyn Getty launched a 'modern hymn' movement seeking to combine contemporary accessibility with theological depth. Today worship music is a global industry — and a genuinely global conversation, with songs emerging from Nigeria, South Korea, Brazil, and beyond.",
    iconic_song: "In Christ Alone (Getty & Townend, 2001)",
  },
];

const SONG_VIDEOS = [
  { id: "X1rPalyUshw", title: "How Great Is Our God", speaker: "Louie Giglio", venue: "Passion" },
  { id: "RE8QkBA0Syg", title: "How Great Is Our God (Universe)", speaker: "Louie Giglio", venue: "Passion" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul", venue: "Ligonier" },
  { id: "7CBgp74UwbU", title: "The Trauma of Holiness", speaker: "R.C. Sproul", venue: "Ligonier" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper", venue: "Passion" },
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller", venue: "Redeemer" },
];

export default function ChristianWorshipSongsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-worship-songs_tab", "songs");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SONGS.filter(s => era === "All" || s.era === era);
  const song = SONGS.find(s => s.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Essential Christian Worship Songs</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            12 songs that have shaped how Christians worship &mdash; from 19th-century hymns to this decade&rsquo;s anthems. Each with its backstory, theology, and where to find it.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["songs", "theology", "history", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "songs" ? "Songs" : t === "theology" ? "Theology" : t === "history" ? "History" : "Videos"}
            </button>
          ))}
        </div>

        {/* Songs Tab */}
        {activeTab === "songs" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERAS.map(e => (
                <button key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: song ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((s, i) => (
                  <button key={i} onClick={() => setSelected(selected === s.title ? null : s.title)}
                    style={{ background: selected === s.title ? `${s.color}12` : CARD, border: `1px solid ${selected === s.title ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {s.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.title}</span>
                          <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.artist} &middot; {s.year}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{s.theme}</span>
                    </div>
                  </button>
                ))}
              </div>

              {song && (
                <div style={{ background: CARD, border: `1px solid ${song.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${song.color}20`, border: `1px solid ${song.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: song.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                      {song.initials}
                    </div>
                    <div>
                      <h2 style={{ color: song.color, fontWeight: 900, fontSize: 20, margin: "0 0 2px" }}>{song.title}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{song.artist} &middot; {song.year} &middot; {song.era}</div>
                    </div>
                  </div>
                  <div style={{ background: `${song.color}08`, border: `1px solid ${song.color}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                    <div style={{ color: song.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY LINE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{song.key_line}&rdquo;</p>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: song.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEME</div>
                    <span style={{ background: `${song.color}12`, color: song.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{song.theme}</span>
                    <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, marginLeft: 6 }}><VerseRef reference={song.verse} /></span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{song.why}</p>
                  <a href={song.youtube} target="_blank" rel="noopener noreferrer"
                    style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    ▶ Find on YouTube
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* Theology Tab */}
        {activeTab === "theology" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {SONG_THEOLOGY.map(doc => (
              <div key={doc.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{doc.icon}</div>
                <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }}>{doc.doctrine}</h3>
                <div style={{ background: `${PURPLE}12`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, display: "inline-block", marginBottom: 12 }}>{doc.scripture}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: "0 0 16px" }}>{doc.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 2 }}>EXAMPLE SONGS</div>
                  {doc.examples.map((ex, i) => (
                    <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "9px 12px", color: TEXT, fontSize: 12 }}>{ex}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {SONG_HISTORY.map((h, i) => (
              <div key={h.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 15 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: 0 }}>{h.era}</h3>
                      <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{h.period}</span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                      {h.key_figures.map((f, fi) => (
                        <span key={fi} style={{ background: `${PURPLE}10`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{f}</span>
                      ))}
                    </div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 12px" }}>{h.description}</p>
                    <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
                      <span style={{ color: MUTED, fontSize: 10, fontWeight: 700 }}>ICONIC SONG &mdash; </span>
                      <span style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{h.iconic_song}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 24 }}>
            {SONG_VIDEOS.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ color: MUTED, fontSize: 12 }}>{v.speaker} &middot; {v.venue}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
