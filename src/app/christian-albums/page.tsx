"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "albums" | "theology" | "artists" | "videos";

const GENRE_FILTERS = ["All", "Worship", "Gospel", "Contemporary Christian", "Hymns & Liturgical", "Christian Hip-Hop", "Christian Rock"];

const ALBUMS = [
  {
    title: "How Great Is Our God: The Essential Collection",
    artist: "Chris Tomlin",
    year: 2012,
    genre: "Worship",
    color: GREEN,
    label: "Sixsteps / Sparrow",
    description: "The definitive collection from the most performed worship songwriter of the 21st century. Tomlin's songs — How Great Is Our God, Holy Is the Lord, Our God, Amazing Grace (My Chains Are Gone) — are sung in more churches weekly than virtually any other living songwriter. This collection gathers the essential catalog from the Passion movement.",
    why_significant: "Chris Tomlin's influence on global evangelical worship is unparalleled in living memory. His melodies are architecturally simple and theologically rich — built to be sung congregationally by thousands of voices.",
    listen: "Available on Spotify, Apple Music, Amazon Music; also all individual albums on streaming",
    standout_tracks: ["How Great Is Our God", "Holy Is the Lord", "Our God", "Amazing Grace (My Chains Are Gone)", "Whom Shall I Fear"],
    streaming_url: "Open in Spotify: Chris Tomlin",
    initials: "CHT",
  },
  {
    title: "Here As In Heaven",
    artist: "Elevation Worship",
    year: 2016,
    genre: "Worship",
    color: PURPLE,
    label: "Elevation Worship Records",
    description: "The breakthrough album from Elevation Worship — the worship ministry of Elevation Church (Pastor Steven Furtick) in Charlotte, NC. Here As In Heaven contains O Come to the Altar, one of the most widely adopted worship songs of the 2010s, alongside Do It Again and Resurrecting. Elevation Worship has since become one of the largest and most influential worship recording acts in the world.",
    why_significant: "O Come to the Altar became a touchstone song for evangelical altar calls and communion services worldwide. The album demonstrated that church-produced worship could reach and lead the broader worship music market.",
    listen: "Spotify, Apple Music, YouTube Music; Elevation Worship YouTube channel has live versions",
    standout_tracks: ["O Come to the Altar", "Do It Again", "Resurrecting", "Here As In Heaven", "Touchback"],
    streaming_url: "elevationworship.com",
    initials: "ELW",
  },
  {
    title: "Let It Echo",
    artist: "All Sons & Daughters",
    year: 2014,
    genre: "Worship",
    color: "#3B82F6",
    label: "Integrity Music",
    description: "All Sons & Daughters (Leslie Jordan and David Leonard) created some of the most contemplative, acoustically intimate worship music of the 2010s. Let It Echo includes Great Are You Lord — one of the most beloved modern worship songs — alongside All the Poor and Powerless. Their sound bridges folk, indie, and traditional hymn aesthetics.",
    why_significant: "Great Are You Lord became a congregation staple worldwide and brought a more contemplative, less anthemic quality to modern worship. All Sons & Daughters demonstrated that intimate, acoustic worship could thrive alongside arena-scale production.",
    listen: "Spotify, Apple Music; also search AllSonsAndDaughters on YouTube",
    standout_tracks: ["Great Are You Lord", "All the Poor and Powerless", "Brokenness Aside", "You Are My Shepherd"],
    streaming_url: "Open in Spotify: All Sons & Daughters",
    initials: "ASD",
  },
  {
    title: "Bethel Music Moment: You Make Me Brave",
    artist: "Amanda Cook / Bethel Music",
    year: 2014,
    genre: "Worship",
    color: "#EF4444",
    label: "Bethel Music",
    description: "Bethel Church (Redding, California) has become one of the most influential worship communities in the world. You Make Me Brave — recorded live at Bethel's 2014 Moment conference — introduced Amanda Cook alongside classics like Tides (I Will Wait) and Bethel's charismatic worship ethos to a global audience. Bethel Music's catalog now includes hundreds of songs used in churches worldwide.",
    why_significant: "Bethel represents the charismatic worship stream that emphasizes prophetic spontaneity, extended worship sets, and soaking prayer. Their influence on global charismatic Christianity is enormous.",
    listen: "Spotify, Apple Music; Bethel Music YouTube channel; BSSM Worship YouTube",
    standout_tracks: ["You Make Me Brave", "Tides (I Will Wait)", "You Don't Miss a Thing", "One Thing Remains"],
    streaming_url: "bethelmusic.com",
    initials: "BET",
  },
  {
    title: "Flicker",
    artist: "Crowder",
    year: 2016,
    genre: "Contemporary Christian",
    color: "#F59E0B",
    label: "sixsteps Records / Sparrow",
    description: "David Crowder was the defining worship leader of the 2000s decade with David Crowder Band. As a solo artist, Crowder (Flicker) combines Americana, Southern gospel, electronic, and traditional hymn influences into a wholly distinctive sound. Come As You Are from this album became one of the most performed church songs of the decade. His theological depth and sonic creativity set him apart from the worship mainstream.",
    why_significant: "Crowder models how a worship artist can be musically adventurous without sacrificing theological substance. His use of traditional hymn texts in contemporary arrangements has helped introduce classic theology to new generations.",
    listen: "Spotify, Apple Music; crowdermusic.com; YouTube",
    standout_tracks: ["Come As You Are", "I Am", "Forgiven", "All My Hope", "Let Me See You"],
    streaming_url: "crowdermusic.com",
    initials: "CRW",
  },
  {
    title: "Anomaly",
    artist: "Lecrae",
    year: 2014,
    genre: "Christian Hip-Hop",
    color: "#10B981",
    label: "Reach Records / Columbia",
    description: "Lecrae is the defining artist of the Christian hip-hop (CHH) movement and the first Christian rapper to reach #1 on both the Billboard 200 and Gospel charts simultaneously. Anomaly debuted at #1 overall on the Billboard 200 — the first explicitly Christian album to do so in 16 years. His lyrics engage racial justice, identity, trauma, and faith with a sophistication that bridges the sacred/secular divide.",
    why_significant: "Lecrae's crossover success proved that Christian hip-hop could reach mainstream audiences without compromising theological content. He opened the door for the entire Reach Records artist family (Andy Mineo, Trip Lee, Propaganda) to reach secular markets.",
    listen: "Spotify, Apple Music; Lecrae on YouTube; reachrecords.com",
    standout_tracks: ["Anomaly", "All I Need Is You", "Messengers", "Non-Fiction", "Good, Bad, Ugly"],
    streaming_url: "reachrecords.com",
    initials: "LEC",
  },
  {
    title: "As Sure As the Sun",
    artist: "Propaganda",
    year: 2012,
    genre: "Christian Hip-Hop",
    color: PURPLE,
    label: "Humble Beast Records",
    description: "Propaganda (Jason Emmanuel Petty) is a spoken word artist and rapper from Los Angeles who combines sophisticated cultural analysis, reformed theology, and prophetic social criticism. His album Excellent deals with racial reconciliation, historical injustice, and the intersection of the Reformed theological tradition with the African-American experience. His poem Precious Puritans remains the most theologically nuanced statement on the complexity of Christian historical legacy.",
    why_significant: "Propaganda opened up the conversation about racial justice, historical theology, and the complexity of the Reformed tradition to a generation of young Christians who had never engaged these questions. He is a genuinely prophetic voice.",
    listen: "Spotify, Apple Music; Humble Beast Records on YouTube (propganda)",
    standout_tracks: ["Crimson Cord", "Precious Puritans", "Pass It", "Rehab", "Church Clothes"],
    streaming_url: "humblebeasts.com",
    initials: "PRO",
  },
  {
    title: "Sunday Morning Hymns",
    artist: "Various Artists / Nashville",
    year: "Various",
    genre: "Hymns & Liturgical",
    color: "#F59E0B",
    label: "Various",
    description: "The hymn revival of the 2000s-2020s has produced extraordinary recordings of the great church hymns in contemporary arrangements. Key albums: Keith & Kristyn Getty's In Christ Alone (2007) and Facing a Task Unfinished (2016); Indelible Grace's entire catalog; Sandra McCracken's Psalms (2015); Poor Bishop Hooper's hymnody recordings. The Gettys in particular have led the most significant hymn-writing movement since the Victorian era.",
    why_significant: "The hymn revival recovered theological depth for congregational worship. Keith & Kristyn Getty's In Christ Alone is now one of the most sung congregational songs in the world — a theologically comprehensive statement of the gospel in four verses.",
    listen: "Getty Music: gettymusic.com; Indelible Grace: igrace.org; Sandra McCracken on Spotify",
    standout_tracks: ["In Christ Alone (Getty)", "Facing a Task Unfinished (Getty)", "O Great God (Sovereign Grace)", "All I Have Is Christ (Sovereign Grace)"],
    streaming_url: "gettymusic.com",
    initials: "HYM",
  },
  {
    title: "Heaven Come",
    artist: "Various / IHOPKC & Global Worship",
    year: "Various",
    genre: "Worship",
    color: "#6366F1",
    label: "IHOPKC / Forerunner Music",
    description: "International House of Prayer Kansas City has produced continuous worship music since 1999, developing a distinctive sound that combines prophetic spontaneity, antiphonal prayer-and-singing, and extended worship sets. Artists from IHOPKC including Misty Edwards, Cory Asbury, Julie Meyer, and Laura Hackett Park have released albums that have shaped the global charismatic worship movement. Cory Asbury's Reckless Love became a global phenomenon.",
    why_significant: "IHOPKC's worship model — where musicians play and sing for hours in a prayer room rather than performing on a stage — has influenced the theology of worship globally. Their output has demonstrated what sustained, intercession-driven worship can sound like.",
    listen: "Forerunner Music on Spotify; ihopkc.org; YouTube search IHOPKC Worship",
    standout_tracks: ["Reckless Love (Cory Asbury)", "Dove's Eyes (Misty Edwards)", "You Won't Relent (Misty Edwards)", "Beautiful (Phil Wickham)"],
    streaming_url: "ihopkc.org/music",
    initials: "IHK",
  },
  {
    title: "Jesus Culture Music",
    artist: "Jesus Culture",
    year: "Multiple albums 2010-2020",
    genre: "Worship",
    color: "#EF4444",
    label: "Jesus Culture Music",
    description: "Jesus Culture is the worship ministry of Bethel Church's youth movement, co-founded by Kim Walker-Smith and Banning Liebsched. Their live worship events — often 3-5 hour marathon sessions — became a defining format for a generation of young worshippers. Kim Walker-Smith's vocals and passionate worship style made her one of the most recognized worship leaders in the world.",
    why_significant: "Jesus Culture introduced extended, spontaneous worship to a generation that had only experienced 20-minute song sets. Their model — sustained worship, musical improvisation, prophetic singing — shaped thousands of youth and young adult ministries.",
    listen: "Spotify, Apple Music; Jesus Culture on YouTube; jesuculture.com",
    standout_tracks: ["How He Loves (Kim Walker-Smith)", "Your Love Never Fails (Newsboys/Jesus Culture)", "Rooftops", "Consumed", "Fierce"],
    streaming_url: "jesusculture.com",
    initials: "JCM",
  },
  {
    title: "Solid Rock",
    artist: "Sovereign Grace Music",
    year: "Various — multiple albums 2000-present",
    genre: "Hymns & Liturgical",
    color: GREEN,
    label: "Sovereign Grace Music",
    description: "Sovereign Grace Music (formerly PDI Worship) is the most theologically rigorous worship music ministry of the Reformed evangelical world. Founded in connection with C.J. Mahaney and Sovereign Grace Churches, their catalog includes hundreds of doctrinally rich, congregationally singable songs. Bob Kauflin leads the ministry and has written extensively on biblical worship. Songs like All I Have Is Christ have become Reformed church standards.",
    why_significant: "Sovereign Grace demonstrates that theologically substantial lyrics and singable melody are not mutually exclusive. Their model of biblically rigorous worship song-writing has influenced Reformed churches worldwide.",
    listen: "Sovereign Grace Music on Spotify and Apple Music; sovereigngracemusic.org — many songs free download",
    standout_tracks: ["All I Have Is Christ", "O Great God", "Jesus, I My Cross Have Taken", "Salvation, What a Glorious Sound"],
    streaming_url: "sovereigngracemusic.org",
    initials: "SGM",
  },
];

const ALBUM_THEOLOGY = [
  {
    id: 1,
    doctrine: "The Gospel & Atonement",
    icon: "✝️",
    scripture: "Isaiah 53:5 / 1 Peter 2:24",
    description: "The greatest worship albums are built on a precise understanding of what Christ accomplished on the cross. Substitutionary atonement — Christ bearing the penalty we deserved — is not a peripheral doctrine but the center of the Christian faith and therefore the center of all genuine worship. When the truth of the atonement is clearly stated in song, congregations sing with tears.",
    albums: ["In Christ Alone (Keith & Kristyn Getty) — teaches substitutionary atonement in 4 verses without apology", "Amazing Grace: My Chains Are Gone (Chris Tomlin) — the oldest and truest gospel summary still sung in church", "All I Have Is Christ (Sovereign Grace Music) — the Reformation doctrine of imputation in congregational form"],
  },
  {
    id: 2,
    doctrine: "Suffering & Lament",
    icon: "💙",
    scripture: "Psalm 22 / Lamentations 3:1-3",
    description: "Psalm 22 was Jesus' prayer from the cross: My God, my God, why have you forsaken me? Great Christian art does not flee suffering — it descends into it with faith. The albums that have shaped a generation are not the triumphalist anthems but the ones that gave language to confusion, grief, and the long night before morning. A worship diet without lament produces shallow faith.",
    albums: ["God on Mute (Pete Greig) — the most honest Christian book about unanswered prayer, companion to the music", "A Different Kind of Christmas (David Wilcox) — seasonal lament done with musical integrity", "Psalms (Sandra McCracken) — the full emotional range of the psalter in acoustic settings"],
  },
  {
    id: 3,
    doctrine: "The Holy Spirit",
    icon: "🔥",
    scripture: "John 14:16-17 / Acts 2:1-4",
    description: "The most neglected person of the Trinity is also the one who makes worship possible. Albums that genuinely invite the presence of the Holy Spirit — rather than performing for an audience — occupy a different register. The IHOPKC worship model, Misty Edwards, and the early Bethel recordings represent worship as an act of prayer rather than production. The Spirit is not a special effect but the one who makes Christ known.",
    albums: ["You Won't Relent era (Misty Edwards / IHOPKC) — intercession-saturated worship that treats the Spirit as a person", "Forgotten God (Francis Chan teaching companion) — the theological frame for what makes Spirit-filled worship possible", "Reckless Love (Cory Asbury) — one of the rare contemporary songs that captures divine initiative"],
  },
  {
    id: 4,
    doctrine: "The Second Coming & Hope",
    icon: "🌅",
    scripture: "Revelation 22:20 / 1 Thessalonians 4:16-17",
    description: "The great hymns of the church were saturated with eschatological expectation. How Great Thou Art ends with Then sings my soul — when Christ shall come. A church whose worship is only about the present moment has lost something essential. The best albums orient the congregation toward eternity, pressing them past the temporary and into the everlasting.",
    albums: ["How Great Thou Art (Stuart Hine / various recordings) — eschatological climax in the final verse", "This Is Amazing Grace (Phil Wickham) — connects present worship to future glory", "Facing a Task Unfinished (Getty Music) — missions eschatology in congregational form"],
  },
  {
    id: 5,
    doctrine: "Repentance & Confession",
    icon: "🌿",
    scripture: "Psalm 51 / 1 John 1:9",
    description: "Create in me a clean heart, O God — Psalm 51 is David's prayer after his catastrophic moral failure. Corporate confession of sin has largely disappeared from evangelical worship, replaced by celebration and aspiration. But a church that does not confess together does not heal together. The albums and songs that make space for honest acknowledgment of failure before God are doing rare and necessary work.",
    albums: ["Psalm 51 settings (various) — the original model for corporate confession", "Come as You Are (Crowder) — invitation into unvarnished honesty before God", "O Great God (Sovereign Grace Music) — corporate adoration that produces appropriate humility"],
  },
];

const WORSHIP_ARTISTS = [
  {
    id: 1,
    name: "Keith & Kristyn Getty",
    era: "Contemporary",
    tradition: "Reformed",
    known_for: "In Christ Alone, Speak O Lord",
    bio: "Irish hymn-writers Keith and Kristyn Getty have led the most significant hymn-writing movement since the Victorian era. Their stated mission is to write theologically substantial hymns that congregations can sing for generations. In Christ Alone (2001, co-written with Stuart Townend) is now one of the most sung congregational songs in the world. Their annual Getty Music Worship Conference draws worship leaders committed to doctrinal depth.",
    key_album: "Hymns Ancient & Modern (2012)",
    theology: "Reformed / Westminster Confession",
  },
  {
    id: 2,
    name: "Matt Redman",
    era: "Contemporary",
    tradition: "Charismatic-Evangelical",
    known_for: "10,000 Reasons, Heart of Worship",
    bio: "British worship leader and songwriter whose career spans three decades. The Heart of Worship (1999) emerged from a painful moment when his pastor stripped all music from Sunday services to recover authentic worship — Redman wrote the song in response. 10,000 Reasons (Bless the Lord) won the Grammy for Contemporary Christian Music Song of the Year and became one of the most widely used worship songs of the 2010s.",
    key_album: "10,000 Reasons (Bless the Lord) (2011)",
    theology: "Charismatic-evangelical / Holy Trinity Brompton tradition",
  },
  {
    id: 3,
    name: "Hillsong Worship",
    era: "Contemporary",
    tradition: "Pentecostal",
    known_for: "Shout to the Lord, Oceans",
    bio: "The worship ministry of Hillsong Church Sydney, founded by Brian Houston. Hillsong Worship has produced the most widely sung contemporary worship songs globally over three decades. Shout to the Lord (Darlene Zschech, 1993) was the first contemporary Christian song to reach 1 billion performances. Oceans (Where Feet May Fail) by Hillsong United broke streaming records for Christian music. Their influence on global Pentecostal and charismatic worship is unparalleled.",
    key_album: "This Is Our God (2008) / Zion (Hillsong United, 2013)",
    theology: "Pentecostal / Assemblies of God tradition",
  },
  {
    id: 4,
    name: "Chris Tomlin",
    era: "Contemporary",
    tradition: "Evangelical",
    known_for: "How Great Is Our God, Amazing Grace (My Chains Are Gone)",
    bio: "Texas-born worship leader and songwriter who has become the most performed worship artist of the 21st century. Tomlin emerged through the Passion movement (Louie Giglio) and his songs are now sung in an estimated 55,000 churches weekly across America alone. He writes in an accessible, congregational style that prioritizes theological clarity over musical complexity — making his songs some of the most durable in modern worship history.",
    key_album: "How Great Is Our God: The Essential Collection (2012)",
    theology: "Reformed evangelical / Passion movement",
  },
  {
    id: 5,
    name: "Fernando Ortega",
    era: "Contemporary",
    tradition: "Liturgical",
    known_for: "Give Me Jesus, This Good Day",
    bio: "New Mexico-born pianist and singer-songwriter whose quiet, contemplative music occupies a completely different register from the mainstream worship industry. Ortega draws from the great hymn tradition, Protestant liturgy, and folk music, creating music that rewards repeated listening rather than demanding an immediate emotional response. His recordings are used in hospice care, nursing homes, and retreat settings. He is the antidote to loud worship culture.",
    key_album: "This Good Day (1999) / Give Me Jesus (2000)",
    theology: "Liturgical / Reformed / quiet tradition",
  },
  {
    id: 6,
    name: "Fanny Crosby",
    era: "1820-1915",
    tradition: "Methodist",
    known_for: "Blessed Assurance, To God Be the Glory",
    bio: "Blind from infancy due to medical malpractice, Frances Jane Crosby went on to write over 8,000 hymns — the most prolific hymn-writer in Christian history. Her hymns shaped American evangelical piety for over a century. Blessed Assurance, To God Be the Glory, Draw Me Nearer, Rescue the Perishing, and Pass Me Not O Gentle Savior remain in active congregational use 150 years after they were written. D.L. Moody used her hymns in his massive evangelistic campaigns.",
    key_album: "Blessed Assurance: The Hymns of Fanny Crosby (various recordings)",
    theology: "Methodist / Arminian / evangelical pietist",
  },
];

const VIDEOS_ALB = [
  { id: "X1rPalyUshw", title: "How Great Is Our God", speaker: "Louie Giglio" },
  { id: "RE8QkBA0Syg", title: "How Great Is Our God (Universe Version)", speaker: "Louie Giglio" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul" },
  { id: "7CBgp74UwbU", title: "The Trauma of Holiness", speaker: "R.C. Sproul" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller" },
];

export default function ChristianAlbumsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("albums");
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);

  const filtered = ALBUMS.filter(a => genre === "All" || a.genre === genre);
  const album = ALBUMS.find(a => a.title === selected);
  const artist = WORSHIP_ARTISTS.find(a => a.id === selectedArtist);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Essential Christian Albums</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            From Chris Tomlin to Lecrae, Bethel to Sovereign Grace &mdash; the albums that have defined Christian worship, gospel, and hip-hop from 2000 to today.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["albums", "theology", "artists", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "albums" ? "Albums" : t === "theology" ? "Theology" : t === "artists" ? "Artists" : "Videos"}
            </button>
          ))}
        </div>

        {/* ALBUMS TAB */}
        {activeTab === "albums" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {GENRE_FILTERS.map(g => (
                <button key={g} onClick={() => setGenre(g)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${genre === g ? GREEN : BORDER}`, background: genre === g ? `${GREEN}15` : "transparent", color: genre === g ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {g}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: album ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((a, i) => (
                  <button key={i} onClick={() => setSelected(selected === a.title ? null : a.title)}
                    style={{ background: selected === a.title ? `${a.color}12` : CARD, border: `1px solid ${selected === a.title ? a.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${a.color}20`, border: `1px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {a.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{a.title}</span>
                          <span style={{ background: `${a.color}15`, color: a.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{a.genre}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{a.artist} &middot; {a.year}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {album && (
                <div style={{ background: CARD, border: `1px solid ${album.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: album.color, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{album.title}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{album.artist} &middot; {album.year} &middot; {album.label}</div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{album.description}</p>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY IT MATTERS</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{album.why_significant}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>STANDOUT TRACKS</div>
                    {album.standout_tracks.map((t, i) => (
                      <div key={i} style={{ color: TEXT, fontSize: 12, marginBottom: 3 }}>&middot; {t}</div>
                    ))}
                  </div>

                  <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO LISTEN</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{album.listen}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* THEOLOGY TAB */}
        {activeTab === "theology" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>How Great Albums Teach Doctrine</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                The church has always been catechized by its songs. What congregations sing week after week forms their theology &mdash; whether the songwriters intended it or not.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {ALBUM_THEOLOGY.map(entry => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <span style={{ fontSize: 32 }}>{entry.icon}</span>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: "0 0 3px" }}>{entry.doctrine}</h3>
                      <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{entry.scripture}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 14px" }}>{entry.description}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "12px 16px" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>ALBUMS THAT TEACH THIS WELL</div>
                    {entry.albums.map((alb, i) => (
                      <div key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, marginBottom: i < entry.albums.length - 1 ? 6 : 0 }}>
                        &middot; {alb}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARTISTS TAB */}
        {activeTab === "artists" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Worship Artists Worth Knowing</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                The men and women whose musical ministry has shaped how the global church encounters God in song &mdash; from Fanny Crosby&rsquo;s 8,000 hymns to Hillsong&rsquo;s global reach.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {WORSHIP_ARTISTS.map(a => (
                <div key={a.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "3px 10px", flexShrink: 0 }}>
                      <span style={{ color: PURPLE, fontSize: 10, fontWeight: 700 }}>{a.tradition}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 11 }}>{a.era}</span>
                  </div>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 16, margin: "0 0 3px" }}>{a.name}</h3>
                    <div style={{ color: GREEN, fontSize: 12, fontStyle: "italic", marginBottom: 6 }}>{a.known_for}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{a.bio}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "10px 12px", marginTop: "auto" }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>KEY ALBUM</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{a.key_album}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>Recommended Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Foundational messages on worship, the holiness of God, and the Christian life &mdash; from Louie Giglio&rsquo;s universe to R.C. Sproul&rsquo;s trembling theology.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 20 }}>
              {VIDEOS_ALB.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{v.title}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>{v.speaker}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
