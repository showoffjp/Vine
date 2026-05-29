"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ChristianAlbumsPage() {
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ALBUMS.filter(a => genre === "All" || a.genre === genre);
  const album = ALBUMS.find(a => a.title === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎵</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Essential Christian Albums</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            From Chris Tomlin to Lecrae, Bethel to Sovereign Grace — the albums that have defined Christian worship, gospel, and hip-hop from 2000 to today. Real music, real theology, real impact.
          </p>
        </div>

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
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{a.artist} · {a.year}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {album && (
            <div style={{ background: CARD, border: `1px solid ${album.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: album.color, fontWeight: 900, fontSize: 17, margin: "0 0 2px" }}>{album.title}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{album.artist} · {album.year} · {album.label}</div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{album.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY IT MATTERS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{album.why_significant}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>STANDOUT TRACKS</div>
                {album.standout_tracks.map((t, i) => (
                  <div key={i} style={{ color: TEXT, fontSize: 12, marginBottom: 3 }}>· {t}</div>
                ))}
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO LISTEN</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{album.listen}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
