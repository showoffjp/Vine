"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TRADITIONS = ["All", "Reformed", "Evangelical", "Anglican", "Charismatic", "Baptist", "Lutheran"];

const PREACHERS = [
  {
    name: "Tim Keller",
    dates: "1950–2023",
    church: "Redeemer Presbyterian Church, New York City",
    tradition: "Reformed",
    color: PURPLE,
    bio: "One of the most influential Christian thinkers and preachers of the 20th–21st century. Keller founded Redeemer Presbyterian in Manhattan in 1989 and built one of the most unusual gospel communities in America — highly educated, culturally engaged, and deeply Reformed. Known for his unique ability to address the doubts of secular New Yorkers with deep respect and theological precision. His book The Reason for God became one of the most important works of Christian apologetics of the last 50 years.",
    known_for: "Cultural apologetics, urban ministry, gospel-centered preaching",
    key_books: ["The Reason for God", "The Prodigal God", "Making Sense of God", "Prayer", "Every Good Endeavor"],
    youtube: "https://youtube.com/@GospelInLife",
    website: "https://gospelinlife.com",
    quote: "The gospel is this: We are more sinful and flawed in ourselves than we ever dared believe, yet at the very same time we are more loved and accepted in Jesus Christ than we ever dared hope.",
    initials: "TK",
    featuredVideoId: "KRsuCQe7aVk",
    featuredVideoTitle: "The Gospel and Your Self – Timothy Keller",
  },
  {
    name: "John Piper",
    dates: "1946–present",
    church: "Bethlehem Baptist Church / Desiring God",
    tradition: "Reformed",
    color: "#8B5CF6",
    bio: "John Piper served as senior pastor of Bethlehem Baptist Church in Minneapolis for 33 years and founded the Desiring God ministry, which has distributed millions of resources around the world. His core theological contribution — Christian Hedonism (the idea that God is most glorified in us when we are most satisfied in him) — has shaped an entire generation of preachers and theologians. His preaching combines rigorous exegesis with passionate devotion to God's glory.",
    known_for: "Christian Hedonism, desiring God, passionate expository preaching",
    key_books: ["Desiring God", "Don't Waste Your Life", "Seeing and Savoring Jesus Christ", "Future Grace", "When I Don't Desire God"],
    youtube: "https://youtube.com/@desiringGod",
    website: "https://www.desiringgod.org",
    quote: "God is most glorified in us when we are most satisfied in him.",
    initials: "JP",
    featuredVideoId: "BkeS-kWbD-4",
    featuredVideoTitle: "Don't Waste Your Life – John Piper (Passion OneDay)",
  },
  {
    name: "Alistair Begg",
    dates: "1952–present",
    church: "Parkside Church, Chagrin Falls, Ohio",
    tradition: "Reformed",
    color: GREEN,
    bio: "Scottish-born Alistair Begg has served as senior pastor of Parkside Church near Cleveland since 1983. His daily Truth For Life broadcast reaches hundreds of thousands of listeners globally. Regarded by many as the finest expository preacher in the English language currently active, combining Scottish plainness, theological depth, pastoral warmth, and remarkable clarity. His commitment to verse-by-verse exposition through entire books of the Bible is increasingly rare.",
    known_for: "Expository preaching, Truth For Life broadcast, biblical clarity",
    key_books: ["Preaching for God's Glory", "Made for His Pleasure", "The Hand of God", "Pray Big", "Brave by Faith"],
    youtube: "https://youtube.com/@TruthForLife",
    website: "https://www.truthforlife.org",
    quote: "The Bible is not a book of moral stories. It is the revelation of God — who he is, what he has done, what he requires, and what he promises.",
    initials: "AB",
    featuredVideoId: "SYbeUzSYE0A",
    featuredVideoTitle: "Anxiety – Alistair Begg (Full Sermon)",
  },
  {
    name: "John MacArthur",
    dates: "1939–present",
    church: "Grace Community Church, Sun Valley, California",
    tradition: "Baptist",
    color: "#3B82F6",
    bio: "John MacArthur has served as pastor-teacher of Grace Community Church in Southern California since 1969 — one of the longest pastoral tenures in modern American evangelicalism. His decades of expository preaching through the entire New Testament (and much of the Old) have been archived by Grace to You into the most comprehensive free Christian sermon library available online. Strongly conservative, strongly Reformed, strongly exegetical.",
    known_for: "Verse-by-verse exposition, MacArthur Study Bible, Grace to You",
    key_books: ["The Gospel According to Jesus", "The MacArthur Study Bible", "Ashamed of the Gospel", "The Freedom and Power of Forgiveness", "Slave"],
    youtube: "https://youtube.com/@GraceToYou",
    website: "https://www.gty.org",
    quote: "The church's singular task is to preach the Word of God — not the felt needs of the congregation, not the spirit of the age, but the whole counsel of God.",
    initials: "JM",
    featuredVideoId: "jRqD89ZBWyg",
    featuredVideoTitle: "Strange Fire – John MacArthur",
  },
  {
    name: "Francis Chan",
    dates: "1967–present",
    church: "We Are Church / Crazy Love Ministries",
    tradition: "Evangelical",
    color: "#EC4899",
    bio: "Francis Chan founded Cornerstone Church in Simi Valley, California, which grew to thousands of members before he gave away the majority of his personal assets and left to live more radically. His book Crazy Love became one of the best-selling Christian books of the 2000s. Known for his willingness to call comfortable American Christianity to account and his personal modeling of radical generosity and simplicity.",
    known_for: "Radical discipleship, Crazy Love, church multiplication",
    key_books: ["Crazy Love", "Forgotten God", "Erasing Hell", "You and Me Forever", "Letters to the Church"],
    youtube: "https://youtube.com/@FrancisChan",
    website: "https://www.crazyloveministry.com",
    quote: "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.",
    initials: "FC",
    featuredVideoId: "EUD4pkTDCJ4",
    featuredVideoTitle: "Crazy Love – Francis Chan",
  },
  {
    name: "R.C. Sproul",
    dates: "1939–2017",
    church: "Saint Andrew's Chapel, Sanford, Florida / Ligonier Ministries",
    tradition: "Reformed",
    color: "#EF4444",
    bio: "R.C. Sproul was one of the most important Reformed theologians of the 20th century, known for making the riches of historic Reformed theology accessible to ordinary Christians. He founded Ligonier Ministries in 1971, which grew into one of the most important theological education organizations in the world. His teaching on the holiness of God — particularly his book The Holiness of God — is credited by many with transforming their understanding of who God is.",
    known_for: "The holiness of God, Reformed systematic theology, making theology accessible",
    key_books: ["The Holiness of God", "Chosen by God", "The Invisible Hand", "What Is Reformed Theology?", "Knowing Scripture"],
    youtube: "https://youtube.com/@LigonierMinistries",
    website: "https://www.ligonier.org",
    quote: "God is not a cosmic bellhop. He's not there to wait on us and cater to our every whim. He is the Sovereign Lord of the universe.",
    initials: "RCS",
    featuredVideoId: "P9RXKQQoJlQ",
    featuredVideoTitle: "The Holiness of Christ – R.C. Sproul",
  },
  {
    name: "David Platt",
    dates: "1979–present",
    church: "McLean Bible Church, Washington D.C.",
    tradition: "Baptist",
    color: "#F59E0B",
    bio: "David Platt became famous for his book Radical, which challenged American Christians to examine whether their comfortable Christianity bore any resemblance to the demanding discipleship of the New Testament. He served as president of the International Mission Board of the SBC before returning to pastoral ministry at McLean Bible Church. His preaching combines expository depth with an urgent global missions focus.",
    known_for: "Radical Christianity, global missions, expository preaching",
    key_books: ["Radical", "Follow Me", "Something Needs to Change", "Exalting Jesus in Matthew", "Counter Culture"],
    youtube: "https://youtube.com/@McLeanBibleChurch",
    website: "https://radical.net",
    quote: "We are not owners of our possessions — we are stewards. And a steward who lives like an owner is a thief.",
    initials: "DP",
    featuredVideoId: "4TTiA_dpsvc",
    featuredVideoTitle: "God's Heart for the World – David Platt",
  },
  {
    name: "Sinclair Ferguson",
    dates: "1948–present",
    church: "Reformed Theological Seminary / St. Peter's Free Church, Dundee",
    tradition: "Reformed",
    color: "#10B981",
    bio: "Scottish theologian and pastor Sinclair Ferguson is one of the most respected biblical scholars in the Reformed world. Known for his extraordinary ability to open up the doctrines of grace with both intellectual rigor and pastoral warmth. His book The Whole Christ on the Marrow Controversy is considered a modern classic in Reformed theology, and his teaching on the Holy Spirit and union with Christ has been deeply formative for thousands of pastors.",
    known_for: "Union with Christ, the Holy Spirit, Reformed pastoral theology",
    key_books: ["The Whole Christ", "John Owen on the Holy Spirit", "The Holy Spirit", "Devoted to God", "Ichthus"],
    youtube: "https://youtube.com/@LigonierMinistries",
    website: "https://www.ligonier.org",
    quote: "The greatest antidote to legalism is not antinomianism but a profound, experiential understanding of the grace of God in the gospel.",
    initials: "SF",
    featuredVideoId: "tDecMmxcHrU",
    featuredVideoTitle: "The Power of the Holy Spirit – Sinclair Ferguson",
  },
];

export default function FeaturedPreachersPage() {
  const [tradition, setTradition] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = PREACHERS.filter(p => tradition === "All" || p.tradition === tradition);
  const preacher = PREACHERS.find(p => p.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎙️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Featured Preachers & Theologians</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Eight of the most influential Christian preachers and theologians of the modern era — with their key works, best quotes, and where to find their content.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {TRADITIONS.map(t => (
            <button key={t} onClick={() => setTradition(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${tradition === t ? GREEN : BORDER}`, background: tradition === t ? `${GREEN}15` : "transparent", color: tradition === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, alignItems: "start" }}>
          <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {filtered.map((p, i) => (
              <button key={i} onClick={() => setSelected(selected === p.name ? null : p.name)}
                style={{ background: selected === p.name ? `${p.color}12` : CARD, border: `1px solid ${selected === p.name ? p.color + "50" : BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                    {p.initials}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{p.name}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{p.dates}</div>
                  </div>
                  <span style={{ marginLeft: "auto", background: `${p.color}15`, color: p.color, padding: "2px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{p.tradition}</span>
                </div>
                <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{p.church}</div>
                <div style={{ color: MUTED, fontSize: 11, fontStyle: "italic", lineHeight: 1.5 }}>{p.known_for}</div>
              </button>
            ))}
          </div>

          {preacher && (
            <div style={{ background: CARD, border: `1px solid ${preacher.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${preacher.color}20`, border: `1px solid ${preacher.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: preacher.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                  {preacher.initials}
                </div>
                <div>
                  <h2 style={{ color: preacher.color, fontWeight: 900, fontSize: 22, margin: "0 0 2px" }}>{preacher.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{preacher.dates} · {preacher.tradition}</div>
                </div>
              </div>
              <div style={{ color: MUTED, fontSize: 12, marginBottom: 12 }}>{preacher.church}</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{preacher.bio}</p>
              <div style={{ background: `${preacher.color}08`, border: `1px solid ${preacher.color}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ color: preacher.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>FAMOUS QUOTE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{preacher.quote}"</p>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: preacher.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>KEY BOOKS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {preacher.key_books.map((book, j) => (
                    <div key={j} style={{ color: TEXT, fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: preacher.color, fontSize: 10 }}>▸</span> {book}
                    </div>
                  ))}
                </div>
              </div>
              {/* Featured Sermon */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: preacher.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>FEATURED SERMON</div>
                <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: 8 }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${preacher.featuredVideoId}`}
                    title={preacher.featuredVideoTitle}
                    allowFullScreen
                  />
                </div>
                <p style={{ color: MUTED, fontSize: 12, margin: 0 }}>{preacher.featuredVideoTitle}</p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a href={preacher.youtube} target="_blank" rel="noopener noreferrer"
                  style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                  ▶ YouTube
                </a>
                <a href={preacher.website} target="_blank" rel="noopener noreferrer"
                  style={{ background: `${preacher.color}12`, border: `1px solid ${preacher.color}25`, color: preacher.color, padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                  🌐 Website
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
