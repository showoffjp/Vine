"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "sources" | "discernment" | "global" | "videos";

const CATEGORY_FILTERS = ["All", "News", "Theology & Commentary", "Academic", "Culture", "International", "Magazines"];

const SOURCES = [
  {
    name: "Christianity Today",
    category: "Magazines",
    color: "#3B82F6",
    founded: "1956",
    founder: "Billy Graham",
    coverage: "Broad evangelical news, theology, culture, interviews, and book reviews. Covers global Christianity, church controversies, and theological debates from a broadly evangelical perspective.",
    strengths: "America's largest evangelical magazine. Balanced coverage of evangelical world; strong investigative journalism; excellent book reviews; global Christianity coverage. Long track record of quality.",
    weaknesses: "Can trend toward a centrist evangelical perspective that frustrates both left and right; subscription required for full access.",
    url: "https://www.christianitytoday.com/",
    best_for: "Primary source for evangelical news and commentary; anyone wanting to follow the broader evangelical conversation.",
    initials: "CT",
  },
  {
    name: "The Gospel Coalition",
    category: "Theology & Commentary",
    color: PURPLE,
    founded: "2005",
    founder: "D.A. Carson & Tim Keller",
    coverage: "Theology, cultural commentary, book reviews, church ministry resources. Reformed evangelical perspective. Daily articles, video, podcasts, and conferences.",
    strengths: "High-quality theological writing from some of the best Reformed evangelical minds. Excellent book reviews. Free content. Strong sermon archive and resources for pastors.",
    weaknesses: "Decidedly Reformed/complementarian perspective — not representative of the full evangelical spectrum. Can feel insider-y.",
    url: "https://www.thegospelcoalition.org/",
    best_for: "Reformed evangelical theology, book reviews, church ministry, cultural commentary from a Reformed perspective.",
    initials: "TGC",
  },
  {
    name: "World Magazine",
    category: "News",
    color: "#F59E0B",
    founded: "1986",
    founder: "Joel Belz",
    coverage: "Weekly Christian news magazine covering national and international news from a biblical worldview. Serious reporting on politics, culture, world affairs, and the church.",
    strengths: "The most serious attempt at genuinely Christian journalism — news reported with worldview awareness, not just commentary about existing secular stories. Excellent international coverage. Print and digital.",
    weaknesses: "Decidedly conservative Reformed perspective; can be slower than daily digital outlets for breaking news.",
    url: "https://wng.org/",
    best_for: "Christians who want news — not just commentary on news — reported from a biblical perspective. Particularly strong on world affairs.",
    initials: "WM",
  },
  {
    name: "First Things",
    category: "Academic",
    color: "#EF4444",
    founded: "1990",
    founder: "Fr. Richard John Neuhaus",
    coverage: "Intellectual journal of religion and public life. Covers theology, philosophy, culture, politics, and bioethics from a broadly orthodox Christian perspective (Catholic, Protestant, and Jewish contributors).",
    strengths: "The most intellectually serious religious journal in America. First Things attracts the best Christian thinkers across traditions. Required reading for serious intellectual engagement with the relationship between faith and culture.",
    weaknesses: "Dense and academic — not for casual reading. Skews toward an older, academic audience. Monthly publication cycle means no breaking news.",
    url: "https://www.firstthings.com/",
    best_for: "Intellectually serious Christians who want to engage theology, philosophy, and culture at the highest level.",
    initials: "FT",
  },
  {
    name: "Relevant Magazine",
    category: "Culture",
    color: "#10B981",
    founded: "2003",
    founder: "Cameron Strang",
    coverage: "Faith and culture for Millennials and Gen Z. Covers Christian music, social justice, relationships, and cultural trends from a broadly evangelical perspective. More lifestyle-oriented than theology-focused.",
    strengths: "The most read Christian publication among young adults. Strong on music and entertainment; accessible writing; social justice engagement; Gen Z-friendly presentation.",
    weaknesses: "Can be theologically thin; sometimes reflects the surrounding culture more than challenging it; advocacy journalism rather than objective reporting.",
    url: "https://www.relevantmagazine.com/",
    best_for: "Young evangelicals; Christian music and culture; accessible entry point for new believers interested in faith and culture.",
    initials: "REL",
  },
  {
    name: "Desiring God",
    category: "Theology & Commentary",
    color: "#EF4444",
    founded: "1994",
    founder: "John Piper",
    coverage: "Daily articles, devotionals, sermons, and Ask Pastor John podcast from a Reformed, passion-for-God perspective. Focuses on Scripture, theology, and personal holiness.",
    strengths: "Extraordinarily deep archive of free content. John Piper's teaching is among the most theologically precise and devotionally warm in evangelicalism. Daily articles are consistently high quality.",
    weaknesses: "Decidedly Calvinist and Complementarian — not a broad survey of Christian perspectives. Can feel maximally intense for casual readers.",
    url: "https://www.desiringgod.org/",
    best_for: "Daily theology, devotional content, sermons; anyone in the Reformed tradition or wanting to engage it seriously.",
    initials: "DG",
  },
  {
    name: "Christian Post",
    category: "News",
    color: "#A855F7",
    founded: "2004",
    founder: "Young Jin Cho",
    coverage: "Daily Christian news covering the global church, politics affecting religious liberty, evangelical figures, and Christian world news. Broad coverage across evangelical, Catholic, and mainline perspectives.",
    strengths: "Most prolific daily Christian news source. High volume of breaking news. Global coverage. Free access.",
    weaknesses: "Quality varies significantly; can feel more like a content aggregator than original journalism; headline-driven with less depth than World or CT.",
    url: "https://www.christianpost.com/",
    best_for: "Daily breaking news in the Christian world; staying current on the evangelical conversation without deep analysis.",
    initials: "CP",
  },
  {
    name: "Ligonier Ministries / Tabletalk Magazine",
    category: "Academic",
    color: "#6366F1",
    founded: "1971",
    founder: "R.C. Sproul",
    coverage: "Theology, church history, Bible study. Monthly Tabletalk devotional magazine provides daily biblical devotionals plus feature articles. More academic focus than news.",
    strengths: "Ligonier produces some of the most theologically rigorous free content available. Tabletalk is the most consistently high-quality daily devotional magazine for Reformed Christians. Vast library of R.C. Sproul's teaching.",
    weaknesses: "Primarily Reformed and academic in perspective; not for casual readers looking for news or culture commentary.",
    url: "https://www.ligonier.org/",
    best_for: "Daily devotional reading (Tabletalk), Reformed theology, serious Bible study, theological education.",
    initials: "LIG",
  },
  {
    name: "9Marks Journal",
    category: "Theology & Commentary",
    color: GREEN,
    founded: "2001",
    founder: "Mark Dever",
    coverage: "Focused entirely on church health: expositional preaching, biblical theology, church membership, church discipline, discipleship, evangelism, and leadership. Published by Capitol Hill Baptist Church.",
    strengths: "The most useful resource for pastors and church leaders on church health. Each issue covers one topic with multiple perspectives. Extremely practical and theologically grounded.",
    weaknesses: "Very narrow focus — not for general interest; specifically for church leaders.",
    url: "https://www.9marks.org/journal/",
    best_for: "Pastors, elders, and church leaders; anyone serious about building a healthy local church.",
    initials: "9M",
  },
  {
    name: "The Stream",
    category: "News",
    color: "#F59E0B",
    founded: "2015",
    founder: "James Robison and Jay Richards",
    coverage: "Christian news and commentary from a broadly conservative evangelical and Catholic perspective. Covers religious liberty, pro-life issues, cultural commentary, and Christian response to current events.",
    strengths: "Explicitly Christian worldview applied to news. Pro-life and religious liberty coverage is strong. Active daily publication.",
    weaknesses: "More advocacy than objective journalism; strong conservative political lean; not widely cited outside conservative evangelical circles.",
    url: "https://stream.org/",
    best_for: "Christians who want cultural commentary from a conservative Christian perspective on current events.",
    initials: "TST",
  },
  {
    name: "Global Voices — Christianity (Lausanne Movement)",
    category: "International",
    color: "#EC4899",
    founded: "1974",
    founder: "Billy Graham and John Stott",
    coverage: "Global Christianity and missions. Lausanne produces the most important documentation of global evangelicalism — the Cape Town Commitment, the Lausanne Covenant, and ongoing global mission conversations.",
    strengths: "The Lausanne Movement is the most significant global evangelical network. Its documents represent the consensus of evangelical Christianity across 200+ nations. Essential for understanding global Christianity beyond the Western perspective.",
    weaknesses: "Not daily news; more occasional major publications and conference outputs than regular commentary.",
    url: "https://lausanne.org/",
    best_for: "Understanding global Christianity, missions strategy, and the international evangelical movement.",
    initials: "LAU",
  },
  {
    name: "Mission Frontiers (USCWM/Frontier Ventures)",
    category: "International",
    color: "#10B981",
    founded: "1979",
    founder: "Ralph Winter",
    coverage: "Unreached people groups, frontier missions, and global Christianity. The magazine that introduced the concept of 'unreached people groups' to the evangelical world and has tracked their status ever since.",
    strengths: "The only serious publication focused entirely on unreached people groups. The Joshua Project data on unreached peoples is the standard reference for global missions. Essential for anyone serious about frontier missions.",
    weaknesses: "Niche focus — not for general Christian reading; specifically for missions-focused Christians.",
    url: "https://www.missionfrontiers.org/",
    best_for: "Missions mobilizers, anyone praying for unreached peoples, church missions committees.",
    initials: "MF",
  },
];

const NEWS_DISCERNMENT = [
  {
    id: 1,
    principle: "Test Everything Against Scripture",
    icon: "⚖️",
    scripture: "1 Thess 5:21",
    description: "Hold fast what is good. Every claim made in a Christian news article should be measured by the Word of God, not vice versa. Scripture is the norming norm — not evangelical opinion, not political tribe, not popular sentiment.",
    redFlags: [
      "Articles that never cite Scripture to support their claims",
      "Treating political victory as though it were gospel victory",
    ],
  },
  {
    id: 2,
    principle: "Check the Bias Label",
    icon: "🔍",
    scripture: "Romans 12:2",
    description: "Be transformed by renewal of your mind. Every publication has a perspective. The question is not whether a source is biased but whether you know its bias and account for it when you read. Self-awareness about your own tribal tendencies is the beginning of wisdom.",
    redFlags: [
      "Outlets that never critique their own tribe or political allies",
      "Sources that only cover stories confirming one political narrative",
    ],
  },
  {
    id: 3,
    principle: "Distinguish News from Opinion",
    icon: "📰",
    scripture: "Proverbs 18:17",
    description: "The first to state his case seems right — until the other comes and examines him. Most Christian media mixes news reporting and editorial commentary without clear labeling. Train yourself to ask: is this a reported fact or an interpretation of a fact?",
    redFlags: [
      "Headlines that use loaded emotional language rather than neutral description",
      "Mixing factual reporting and editorial opinion in the same paragraph",
    ],
  },
  {
    id: 4,
    principle: "Seek Primary Sources",
    icon: "🔗",
    scripture: "Acts 17:11",
    description: "The Bereans examined the Scriptures daily to see if these things were so. Applied to news consumption: do not accept a secondhand summary of a quote or document. Find the original statement, the original study, the original document before forming an opinion.",
    redFlags: [
      "Articles that make strong claims with no linked primary sources",
      "Second-hand reporting of quotes without linking to full context",
    ],
  },
  {
    id: 5,
    principle: "Slow Down Before Sharing",
    icon: "⏸️",
    scripture: "James 1:19",
    description: "Be slow to speak. The social media impulse to share immediately upon reading is one of the most dangerous habits for a Christian to cultivate. Misinformation spreads fastest when people share to signal agreement rather than to inform.",
    redFlags: [
      "Sharing an article within minutes of reading it without verifying",
      "Sharing stories primarily because they confirm what you already believe",
    ],
  },
  {
    id: 6,
    principle: "Pray for Those You Read About",
    icon: "🙏",
    scripture: "1 Timothy 2:1-2",
    description: "Make prayers for all people, for kings and all who are in high positions. When reading about leaders, opponents, or those caught in scandal, prayer is the discipline that keeps news consumption from becoming contempt. You cannot genuinely pray for someone and simultaneously dehumanize them.",
    redFlags: [
      "A pattern of consuming news that consistently increases contempt without any prayer response",
      "Treating prayer for leaders as optional or naive rather than commanded",
    ],
  },
];

const GLOBAL_SOURCES = [
  {
    id: 1,
    region: "Africa",
    name: "Christianity Today Africa",
    description: "Covers church growth, persecution, and theology across sub-Saharan Africa. Documents the extraordinary expansion of Christianity on the continent alongside the theological and political challenges facing African churches.",
    focus: "Church Growth & Persecution",
    language: "English",
  },
  {
    id: 2,
    region: "Asia",
    name: "Asia Harvest",
    description: "Focused on China, Southeast Asia, unreached peoples, and the underground church. Provides ground-level reporting on the fastest-growing and most persecuted church movements in the world.",
    focus: "Underground Church & Unreached",
    language: "English",
  },
  {
    id: 3,
    region: "Middle East",
    name: "Middle East Concern",
    description: "Persecution monitoring, prayer alerts, and Christian minority news across the Arab world and Iran. One of the most reliable sources for verified reports of persecution affecting Christians in the region.",
    focus: "Persecution Monitoring",
    language: "English / Arabic",
  },
  {
    id: 4,
    region: "Latin America",
    name: "Evangelical Focus",
    description: "Evangelical news from Spain and Latin America in both Spanish and English. Covers church planting, theological debate, and cultural engagement across the Spanish-speaking evangelical world.",
    focus: "Evangelical News",
    language: "Spanish / English",
  },
  {
    id: 5,
    region: "Europe",
    name: "Christian Today UK",
    description: "British and European church news, theological debates, and society. Documents the challenges of ministry in a post-Christian context and the faithful remnants holding ground across Western Europe.",
    focus: "Post-Christian Society",
    language: "English",
  },
  {
    id: 6,
    region: "Global Persecution",
    name: "Open Doors World Watch List",
    description: "The definitive annual ranking of the 50 most dangerous countries for Christians. Based on field research and verified reports, it is the standard reference for understanding global Christian persecution.",
    focus: "Persecution Index",
    language: "Multiple",
  },
];

const NEWS_VIDEOS = [
  { id: "Kxup3OS5ZhQ", title: "The Reason for God", preacher: "Tim Keller" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", preacher: "Voddie Baucham" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", preacher: "R.C. Sproul" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", preacher: "John Piper" },
  { id: "yhiHSf_L6_E", title: "Radical — Passion 2011", preacher: "David Platt" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", preacher: "Louie Giglio" },
];

export default function ChristianNewsSourcesPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-news-sources_tab", "sources");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = SOURCES.filter(s => category === "All" || s.category === category);
  const source = SOURCES.find(s => s.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📰</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian News &amp; Commentary Sources</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Where serious Christians get their news, theology, and cultural commentary. Not all sources are equal &mdash; here&rsquo;s how each one fits into a healthy information diet.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["sources", "discernment", "global", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "sources" ? "Sources" : t === "discernment" ? "Discernment" : t === "global" ? "Global" : "Videos"}
            </button>
          ))}
        </div>

        {/* Sources Tab */}
        {activeTab === "sources" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                A healthy Christian information diet includes: one serious news source (World Magazine or Christianity Today), one theological commentary source (TGC or Desiring God), and one international/missions source (Lausanne or Mission Frontiers). Avoid consuming only sources that confirm what you already believe.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {CATEGORY_FILTERS.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: source ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((s, i) => (
                  <button key={i} onClick={() => setSelected(selected === s.name ? null : s.name)}
                    style={{ background: selected === s.name ? `${s.color}12` : CARD, border: `1px solid ${selected === s.name ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {s.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.name}</span>
                          <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.category}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>Founded {s.founded} &middot; {s.founder}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {source && (
                <div style={{ background: CARD, border: `1px solid ${source.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div>
                      <h2 style={{ color: source.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{source.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>Founded {source.founded} by {source.founder}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    <span style={{ background: `${source.color}12`, color: source.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{source.category}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{source.coverage}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STRENGTHS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{source.strengths}</p>
                    </div>
                    <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 10 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>LIMITATIONS</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{source.weaknesses}</p>
                    </div>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{source.best_for}</p>
                  </div>

                  <a href={source.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${source.color}15`, border: `1px solid ${source.color}30`, color: source.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    📰 Visit {source.name}
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* Discernment Tab */}
        {activeTab === "discernment" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>⚖️</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Six principles for consuming Christian news with wisdom. The goal is not suspicion but discernment &mdash; reading critically while remaining open to truth, wherever it appears.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {NEWS_DISCERNMENT.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 4px" }}>{item.principle}</h3>
                      <p style={{ color: GREEN, fontStyle: "italic", fontSize: 13, margin: 0 }}>{item.scripture}</p>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{item.description}</p>
                  <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 8 }}>RED FLAGS</div>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {item.redFlags.map((flag, fi) => (
                        <li key={fi} style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, marginBottom: fi < item.redFlags.length - 1 ? 4 : 0 }}>{flag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Tab */}
        {activeTab === "global" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🌍</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Christianity is a global faith &mdash; but most Western Christians consume only Western Christian media. These sources will expand your view of what God is doing around the world.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {GLOBAL_SOURCES.map(gs => (
                <div key={gs.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{gs.region}</span>
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: "0 0 8px" }}>{gs.name}</h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{gs.description}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${GREEN}10`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{gs.focus}</span>
                    <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{gs.language}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🎬</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Essential video teaching from some of the most important Christian voices of our generation &mdash; on theology, truth, and the supremacy of Christ.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
              {NEWS_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 0 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 18px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: GREEN, fontSize: 12, fontWeight: 600 }}>{v.preacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
