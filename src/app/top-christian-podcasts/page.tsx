"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORIES = ["All", "Daily Devotional", "Theology", "Apologetics", "Leadership", "Women", "Parenting", "Worship", "News & Culture", "Mental Health"];

const PODCASTS = [
  {
    name: "Ask Pastor John",
    host: "John Piper",
    org: "Desiring God",
    category: "Theology",
    color: "#6B4FBB",
    episodes: "2000+",
    freq: "Daily",
    desc: "Short daily episodes where John Piper answers questions submitted by listeners on theology, the Christian life, and the Bible. One of the most-downloaded Christian podcasts ever made.",
    topics: ["Calvinism", "Bible", "Christian Life", "Ethics"],
    apple: "https://podcasts.apple.com/us/podcast/ask-pastor-john/id1042113355",
    spotify: "https://open.spotify.com/show/1GQnYLsrF2UhQLxmpyR4fO",
    website: "https://www.desiringgod.org/ask-pastor-john",
    started: "2013",
    initials: "APJ",
  },
  {
    name: "The Bible Recap",
    host: "Tara-Leigh Cobble",
    org: "D-Group",
    category: "Daily Devotional",
    color: "#10B981",
    episodes: "1500+",
    freq: "Daily",
    desc: "A daily companion to reading through the whole Bible in a year. Each episode covers the day's reading with context, application, and Tara-Leigh's infectious enthusiasm for the text. Millions of listeners worldwide.",
    topics: ["Bible Reading", "Old Testament", "New Testament", "Context"],
    apple: "https://podcasts.apple.com/us/podcast/the-bible-recap/id1449617095",
    spotify: "https://open.spotify.com/show/14dFcH0TboDuME3pqMtMwW",
    website: "https://thebiblerecap.com",
    started: "2019",
    initials: "TBR",
  },
  {
    name: "Revive Our Hearts",
    host: "Nancy DeMoss Wolgemuth",
    org: "Revive Our Hearts",
    category: "Women",
    color: "#EC4899",
    episodes: "3000+",
    freq: "Daily",
    desc: "Daily teaching and encouragement for women from one of the most influential women's ministry voices in the US. Nancy brings deep biblical exposition with pastoral warmth to thousands of daily listeners.",
    topics: ["Womanhood", "Holiness", "Bible Study", "Marriage"],
    apple: "https://podcasts.apple.com/us/podcast/revive-our-hearts-podcast/id437435000",
    spotify: "https://open.spotify.com/show/2sFc2kT1UxSz22NxFhI5HK",
    website: "https://www.reviveourhearts.com/podcasts",
    started: "2001",
    initials: "ROH",
  },
  {
    name: "The Briefing",
    host: "Albert Mohler",
    org: "Southern Baptist Theological Seminary",
    category: "News & Culture",
    color: "#3B82F6",
    episodes: "2500+",
    freq: "Daily (weekdays)",
    desc: "Albert Mohler analyzes the major news stories of the day from a Christian worldview. Required listening for Christians who want to think carefully about current events, politics, culture, and theology.",
    topics: ["Current Events", "Ethics", "Culture", "Theology"],
    apple: "https://podcasts.apple.com/us/podcast/the-briefing-with-albert-mohler/id411772157",
    spotify: "https://open.spotify.com/show/2pRCWq0lN53H3CXvSxKUDI",
    website: "https://albertmohler.com/the-briefing",
    started: "2010",
    initials: "TBM",
  },
  {
    name: "The TGC Podcast",
    host: "Collin Hansen & guests",
    org: "The Gospel Coalition",
    category: "Theology",
    color: "#F59E0B",
    episodes: "700+",
    freq: "Weekly",
    desc: "Conversations about theology, church, and culture from the Gospel Coalition — one of the most influential evangelical ministry networks. Guests include leading theologians, pastors, and thinkers.",
    topics: ["Gospel", "Church", "Culture", "Ministry"],
    apple: "https://podcasts.apple.com/us/podcast/tgc-podcast/id415751506",
    spotify: "https://open.spotify.com/show/3ZPKY9iUmI7qwGzAYYqPOD",
    website: "https://www.thegospelcoalition.org/podcasts",
    started: "2011",
    initials: "TGC",
  },
  {
    name: "Carey Nieuwhof Leadership Podcast",
    host: "Carey Nieuwhof",
    org: "Independent",
    category: "Leadership",
    color: GREEN,
    episodes: "600+",
    freq: "Weekly",
    desc: "Church leadership conversations with the world's top leaders — including Andy Stanley, Jon Acuff, John Maxwell, and many others. Widely regarded as the best podcast for church leaders and pastors.",
    topics: ["Church Leadership", "Ministry", "Culture", "Innovation"],
    apple: "https://podcasts.apple.com/us/podcast/carey-nieuwhof-leadership-podcast/id912753163",
    spotify: "https://open.spotify.com/show/7iMicSvUGcKWA3Uc7GRPJM",
    website: "https://careynieuwhof.com/podcast",
    started: "2014",
    initials: "CNL",
  },
  {
    name: "That Sounds Fun",
    host: "Annie F. Downs",
    org: "Independent",
    category: "Women",
    color: "#A855F7",
    episodes: "500+",
    freq: "Weekly",
    desc: "Annie F. Downs interviews authors, musicians, athletes, and celebrities about their faith, their stories, and what brings them joy. Warm, funny, and genuinely curious conversations that feel like sitting with a friend.",
    topics: ["Faith & Life", "Interviews", "Culture", "Joy"],
    apple: "https://podcasts.apple.com/us/podcast/that-sounds-fun-with-annie-f-downs/id1170882844",
    spotify: "https://open.spotify.com/show/3H65DVQblqXFxHKt3yE3h4",
    website: "https://anniefdowns.com/podcast",
    started: "2017",
    initials: "TSF",
  },
  {
    name: "Core Christianity",
    host: "Adriel Sanchez & Bill Maier",
    org: "Alliance of Confessing Evangelicals",
    category: "Theology",
    color: "#EF4444",
    episodes: "1500+",
    freq: "Daily (weekdays)",
    desc: "Daily live call-in radio show and podcast answering hard questions about the Christian faith. Reformed in orientation, accessible in delivery. Perfect for people with tough questions or doubts.",
    topics: ["Apologetics", "Theology", "Q&A", "Doctrine"],
    apple: "https://podcasts.apple.com/us/podcast/core-christianity/id1270907605",
    spotify: "https://open.spotify.com/show/4yXbobBGMkSfPUKcMVsmXl",
    website: "https://corechristianity.com",
    started: "2017",
    initials: "CC",
  },
  {
    name: "The Alisa Childers Podcast",
    host: "Alisa Childers",
    org: "Independent",
    category: "Apologetics",
    color: "#10B981",
    episodes: "300+",
    freq: "Weekly",
    desc: "Apologetics and discernment for Christians navigating deconstruction, progressive Christianity, and cultural shifts. Alisa combines theological depth with personal warmth to help people stay grounded in historic Christianity.",
    topics: ["Apologetics", "Deconstruction", "Progressive Christianity", "Truth"],
    apple: "https://podcasts.apple.com/us/podcast/the-alisa-childers-podcast/id1476271682",
    spotify: "https://open.spotify.com/show/6xLbE7CkHaWH40oqCHh6z4",
    website: "https://www.alisachilders.com/podcast",
    started: "2019",
    initials: "ACP",
  },
  {
    name: "The Daily Grace Podcast",
    host: "Various hosts",
    org: "The Daily Grace Co.",
    category: "Women",
    color: "#F472B6",
    episodes: "400+",
    freq: "Weekly",
    desc: "Biblical teaching for women centered on Scripture and grace. Episodes include expository teaching, book discussions, and discipleship conversations — consistently ranked among the top Christian podcasts for women.",
    topics: ["Women", "Bible Study", "Discipleship", "Theology"],
    apple: "https://podcasts.apple.com/us/podcast/the-daily-grace-podcast/id1265282267",
    spotify: "https://open.spotify.com/show/3KHVdvSFMELdHXb0JluF7s",
    website: "https://thedailygrace.com/podcast",
    started: "2017",
    initials: "DGP",
  },
  {
    name: "Truth For Life",
    host: "Alistair Begg",
    org: "Truth For Life / Parkside Church",
    category: "Daily Devotional",
    color: PURPLE,
    episodes: "3000+",
    freq: "Daily",
    desc: "Daily 25-minute expository preaching from Alistair Begg of Parkside Church, Cleveland — regarded by many as one of the finest preachers in the English-speaking world. Deep, accessible, faithful to the text.",
    topics: ["Expository Preaching", "Bible", "Doctrine", "Daily Devotional"],
    apple: "https://podcasts.apple.com/us/podcast/truth-for-life-daily-program/id432067095",
    spotify: "https://open.spotify.com/show/2C6wp1F2JN1t2VVfxCeKqO",
    website: "https://www.truthforlife.org/listen",
    started: "2006",
    initials: "TFL",
  },
  {
    name: "This Cultural Moment",
    host: "John Mark Comer & Mark Sayers",
    org: "Bridgetown Church",
    category: "News & Culture",
    color: "#8B5CF6",
    episodes: "100+",
    freq: "Irregular / Seasonal",
    desc: "John Mark Comer and Mark Sayers dig into the nature of secularism, post-Christianity, and what it means to follow Jesus in the West today. Dense, rich, transformative. Changed how many Christians think about discipleship and culture.",
    topics: ["Secularism", "Discipleship", "Western Culture", "Formation"],
    apple: "https://podcasts.apple.com/us/podcast/this-cultural-moment/id1437009724",
    spotify: "https://open.spotify.com/show/5gFoxA7QY8bqyNSNm8bfoh",
    website: "https://bridgetown.church/podcast",
    started: "2018",
    initials: "TCM",
  },
];

export default function TopChristianPodcastsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = PODCASTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.host.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎧</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Top Christian Podcasts</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px" }}>
            The 12 best Christian podcasts right now — curated for theology, devotional life, leadership, apologetics, and more. All real, all worth your commute.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: MUTED, fontSize: 14 }}>🔍</span>
              <input
                type="text"
                placeholder="Search podcasts..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ background: "transparent", border: "none", outline: "none", color: TEXT, fontSize: 14, width: 180 }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === cat ? GREEN : BORDER}`, background: activeCategory === cat ? `${GREEN}15` : "transparent", color: activeCategory === cat ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: MUTED }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🎙️</div>
            <p>No podcasts match your search.</p>
            <button onClick={() => { setActiveCategory("All"); setSearch(""); }} style={{ color: GREEN, background: "none", border: "none", cursor: "pointer", marginTop: 8 }}>Clear filters</button>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map((p, i) => {
            const open = expanded === p.name;
            return (
              <div key={i} style={{ background: CARD, border: `1px solid ${open ? p.color + "40" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                <button
                  onClick={() => setExpanded(open ? null : p.name)}
                  style={{ width: "100%", background: "transparent", border: "none", padding: "20px 24px", cursor: "pointer", display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: p.color, fontWeight: 900, fontSize: 11 }}>
                    {p.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 2 }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{p.name}</span>
                      <span style={{ background: `${p.color}15`, color: p.color, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{p.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 13 }}>{p.host} · {p.org} · {p.freq}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{p.episodes} episodes</span>
                    <span style={{ color: MUTED, fontSize: 18 }}>{open ? "−" : "+"}</span>
                  </div>
                </button>

                {open && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                      {p.topics.map(t => (
                        <span key={t} style={{ background: `${p.color}10`, color: p.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                      <a href={p.apple} target="_blank" rel="noopener noreferrer"
                        style={{ background: `${p.color}12`, border: `1px solid ${p.color}25`, borderRadius: 10, padding: "10px 14px", color: p.color, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                        🎧 Apple Podcasts
                      </a>
                      <a href={p.spotify} target="_blank" rel="noopener noreferrer"
                        style={{ background: "#1DB95415", border: "1px solid #1DB95440", borderRadius: 10, padding: "10px 14px", color: "#1DB954", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                        🎵 Spotify
                      </a>
                      <a href={p.website} target="_blank" rel="noopener noreferrer"
                        style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}25`, borderRadius: 10, padding: "10px 14px", color: PURPLE, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
                        🌐 Website
                      </a>
                    </div>
                    <div style={{ marginTop: 14, color: MUTED, fontSize: 12 }}>Started {p.started}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>📱</div>
          <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Where to Listen</h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 20px" }}>All of these podcasts are free and available wherever you get your podcasts — Apple Podcasts, Spotify, Pocket Casts, Overcast, and more.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Apple Podcasts", color: "#FC3C44" },
              { label: "Spotify", color: "#1DB954" },
              { label: "Pocket Casts", color: "#F43E37" },
              { label: "Overcast", color: "#FC7E0F" },
              { label: "YouTube Music", color: "#FF0000" },
            ].map(pl => (
              <span key={pl.label} style={{ background: `${pl.color}15`, border: `1px solid ${pl.color}30`, color: pl.color, padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700 }}>
                {pl.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
