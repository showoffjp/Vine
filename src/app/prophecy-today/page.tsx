"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TOPIC_FILTERS = ["All", "Israel & Middle East", "Persecution & Church", "Global Events", "Signs & Seasons", "Study Resources"];

const RESOURCES = [
  {
    name: "Behold Israel",
    host: "Amir Tsarfati",
    topic: "Israel & Middle East",
    color: "#3B82F6",
    type: "Ministry & Podcast",
    url: "beholdisrael.org",
    description: "Amir Tsarfati is an Israeli-born Jewish Christian and former Israeli military officer who provides geopolitical and biblical analysis of events in Israel and the Middle East. His briefings connect current events to biblical prophecy with on-the-ground credibility. He produces regular video updates, a podcast, and hosts tours to Israel.",
    why_follow: "Unmatched access and credibility on Israel-related prophecy. Amir gives firsthand reporting from the region with a deep knowledge of Scripture. His updates are clear, current, and biblically grounded.",
    best_for: "Real-time prophetic analysis of Israel and the Middle East; understanding the Ezekiel 38-39 context",
    format: "YouTube channel, Podcast (Behold Israel Podcast), App, Tours, Books",
    initials: "BI",
  },
  {
    name: "Understanding the Times",
    host: "Jan Markell / Olive Tree Ministries",
    topic: "Signs & Seasons",
    color: GREEN,
    type: "Radio & Podcast",
    url: "olivetreeviews.org",
    description: "Jan Markell has been broadcasting Understanding the Times since 2000. Based in Minnesota, the program covers global events, spiritual deception in the church, Israel, persecution, and the signs of the last days from a pre-millennial, pre-tribulation perspective. Regular guests include Amir Tsarfati, Jack Hibbs, Nathan Jones, and many other prophecy teachers.",
    why_follow: "One of the most established prophecy radio programs in America. Jan has an extraordinary gift for pulling together current events and biblical prophecy in an accessible, non-sensationalized way.",
    best_for: "Weekly overview of prophetically significant news; assessing spiritual trends in the Western church",
    format: "Radio (100+ stations), Podcast, YouTube, Website articles",
    initials: "UTT",
  },
  {
    name: "Prophecy Watchers",
    host: "Gary Stearman & Bob Ulrich",
    topic: "Study Resources",
    color: PURPLE,
    type: "TV & Streaming Ministry",
    url: "prophecywatchers.com",
    description: "Prophecy Watchers is a television and streaming ministry hosted by Gary Stearman (longtime author and prophecy teacher) and Bob Ulrich. The program features in-depth interviews with a wide range of Bible prophecy teachers and authors — covering topics from Daniel and Revelation to the supernatural worldview, the Nephilim, the Rapture, and Israel's role in end-times events.",
    why_follow: "Provides the deepest and most academically rigorous treatment of prophecy topics in the broadcast world. Stearman is particularly strong on the supernatural worldview of Scripture.",
    best_for: "Deep dives into prophetic passages; understanding eschatological positions; book recommendations",
    format: "TV (DirecTV, Dish, streaming), YouTube, Podcast, Books, Conferences",
    initials: "PW",
  },
  {
    name: "Jack Hibbs Live",
    host: "Pastor Jack Hibbs",
    topic: "Israel & Middle East",
    color: "#EF4444",
    type: "Church & TV Ministry",
    url: "jackhibbs.com",
    description: "Jack Hibbs is the pastor of Calvary Chapel Chino Hills in Southern California, one of the largest churches in America. His television and podcast ministry reaches millions weekly with expository preaching that frequently addresses prophetic themes — Israel, the nearness of the Rapture, the moral state of the culture, and the return of Christ. He is also active in political and cultural engagement.",
    why_follow: "Hibbs combines pastoral depth with prophetic urgency. His exposition of prophetic passages is accessible to new believers while substantive enough for mature Christians. He is one of the clearest voices on the biblical significance of current events.",
    best_for: "Sermon-quality prophetic preaching; connecting everyday discipleship with the nearness of Christ's return",
    format: "TV (TBN, Daystar, Real Life Network), YouTube, Podcast, App",
    initials: "JH",
  },
  {
    name: "Lamb & Lion Ministries",
    host: "Dr. David Reagan",
    topic: "Study Resources",
    color: "#F59E0B",
    type: "Teaching Ministry",
    url: "lamblion.com",
    description: "Founded by Dr. David Reagan, Lamb & Lion Ministries has been producing end-times resources since 1980. Their Christ in Prophecy television program covers all aspects of biblical prophecy. They publish a quarterly journal, books, and host annual conferences. Reagan is known for making complex prophetic systems (covenants, dispensations, Revelation chronology) accessible to laypeople.",
    why_follow: "Decades of consistent, non-sensationalist prophetic teaching. The Lamb & Lion website has one of the largest free libraries of prophecy articles and resources available online.",
    best_for: "Systematic understanding of Revelation; covenantal and dispensational frameworks; Rapture theology",
    format: "TV (Christ in Prophecy), YouTube, Magazine, Books, Annual Conference",
    initials: "L&L",
  },
  {
    name: "Joel Rosenberg / Joshua Fund",
    host: "Joel C. Rosenberg",
    topic: "Israel & Middle East",
    color: "#10B981",
    type: "Author & Ministry",
    url: "joelrosenberg.com",
    description: "Joel Rosenberg is a New York Times bestselling novelist and non-fiction author who has written extensively on Israel, Iran, and biblical prophecy. His political thrillers (beginning with The Last Jihad in 2002) have been praised for their prophetic accuracy. His Joshua Fund supports persecuted Christians and Jewish people in Israel and the Middle East. He has briefed multiple heads of state on biblical prophecy.",
    why_follow: "Rosenberg occupies a unique intersection of political access, literary credibility, and evangelical theology. His briefings on Israel and Iran are required reading for anyone serious about Middle East prophecy.",
    best_for: "Israel-Iran geopolitics through a prophetic lens; Ezekiel 38-39 context; persecution of Mideast Christians",
    format: "Blog, Books, Podcast (Inside the Epicenter), Joshua Fund newsletters",
    initials: "JR",
  },
  {
    name: "Open Doors World Watch",
    host: "Open Doors International",
    topic: "Persecution & Church",
    color: "#EF4444",
    type: "Missions & Advocacy",
    url: "opendoorsusa.org",
    description: "Open Doors publishes the annual World Watch List — the most comprehensive ranking of Christian persecution globally. Founded by Brother Andrew in 1955 (known for smuggling Bibles behind the Iron Curtain), the ministry now serves persecuted Christians in over 60 countries. Their reports provide real-time intelligence on where the church is suffering and growing under fire.",
    why_follow: "The persecution of the church is one of the most significant prophetic signs of the last days (Matthew 24:9-14). Open Doors provides the most credible, specific, and current data on that persecution worldwide.",
    best_for: "Understanding the global persecuted church; prayer intelligence; Matthew 24 context",
    format: "Annual World Watch List, Country Reports, Prayer Guides, Field Reports",
    initials: "OD",
  },
  {
    name: "Voice of the Martyrs",
    host: "VOM International",
    topic: "Persecution & Church",
    color: PURPLE,
    type: "Missions & Advocacy",
    url: "persecution.com",
    description: "Founded by Richard Wurmbrand (who spent 14 years in Romanian Communist prisons for his faith), VOM is the premier ministry serving persecuted Christians worldwide. Their monthly magazine, daily devotional, and country-specific prayer guides provide intelligence on the front lines of Christian persecution. Their Martyr's Oath campaign has mobilized millions to pray for the persecuted.",
    why_follow: "The blood of the martyrs is the seed of the church — and VOM documents both realities in real time. Their reporting from North Korea, Iran, China, and Islamic nations is without peer.",
    best_for: "Specific prayer for the persecuted church; understanding where Christianity is growing under persecution",
    format: "Monthly Magazine, Daily Devotional, Prayer App, Country Reports, Books",
    initials: "VOM",
  },
  {
    name: "Prophecy Today",
    host: "Dr. Jimmy DeYoung",
    topic: "Israel & Middle East",
    color: "#3B82F6",
    type: "Radio & Teaching",
    url: "prophecytoday.com",
    description: "The late Dr. Jimmy DeYoung (1940-2021) was one of the most respected prophetic voices in evangelicalism. Based in Jerusalem for many years, he provided daily radio commentary connecting Middle Eastern news to biblical prophecy. His archives at PropheTODAY remain among the most comprehensive collections of Israel-focused prophetic teaching available online.",
    why_follow: "DeYoung lived in Jerusalem and had relationships with Israeli and Palestinian political figures. His reports carried firsthand credibility rarely matched in prophetic ministry. The archive is invaluable for study.",
    best_for: "Israel-focused prophetic archive; understanding the history of Middle Eastern events through a biblical lens",
    format: "Daily Radio (archived), Website, Books, Conference Messages",
    initials: "PT",
  },
  {
    name: "The Christian Post — Prophecy Section",
    host: "Various contributors",
    topic: "Global Events",
    color: "#6366F1",
    type: "News & Commentary",
    url: "christianpost.com",
    description: "The Christian Post maintains regular coverage of geopolitical events, church trends, and eschatological news from an evangelical perspective. Their opinion and news sections frequently feature commentary on the prophetic significance of global events — from Middle East conflicts to cultural shifts in the West to the rise of AI and transhumanism.",
    why_follow: "Provides a daily news feed filtered through a Christian worldview. Useful for staying current on significant events without the noise of secular news media.",
    best_for: "Daily news with a Christian lens; identifying culturally significant events; broad survey of global church news",
    format: "Daily news articles, Podcasts, Newsletter",
    initials: "CP",
  },
  {
    name: "Israel My Glory — Friends of Israel",
    host: "Friends of Israel Gospel Ministry",
    topic: "Israel & Middle East",
    color: GREEN,
    type: "Magazine & Ministry",
    url: "foi.org",
    description: "Israel My Glory is the bimonthly magazine of Friends of Israel Gospel Ministry, founded in 1938. One of the oldest evangelical ministries focused on the Jewish people, they provide theological grounding for Christian support of Israel — explaining the distinction between replacement theology and the biblical covenants. Their articles are deeply researched and theologically precise.",
    why_follow: "The theologically most careful treatment of Israel in biblical prophecy. Friends of Israel neither sensationalizes nor speculates — they ground Israel's prophetic role in careful exegesis of the Abrahamic, Mosaic, and New Covenants.",
    best_for: "Understanding the biblical basis for Christian support of Israel; combating replacement theology",
    format: "Bimonthly Magazine, Radio, Books, Conferences, Tours to Israel",
    initials: "IMG",
  },
  {
    name: "Midnight Call Ministry",
    host: "Norbert Lieth & Arno Froese",
    topic: "Study Resources",
    color: "#F59E0B",
    type: "Magazine & Teaching",
    url: "midnightcall.com",
    description: "Midnight Call is a Swiss-based evangelical ministry with over 50 years of prophetic teaching. Their monthly magazine (available in multiple languages) provides some of the most detailed exegetical treatment of Daniel, Revelation, and the Olivet Discourse in the Christian media world. Arno Froese and Norbert Lieth are known for careful, non-sensationalist prophetic commentary.",
    why_follow: "For serious Bible students who want depth rather than sensationalism. Midnight Call's exegetical precision on prophetic passages is unmatched in Christian periodical publishing.",
    best_for: "Deep prophetic exegesis; Daniel and Revelation studies; international Christian perspective",
    format: "Monthly Magazine, Books, Radio (multiple languages), Annual Conference",
    initials: "MC",
  },
];

const TOPIC_COLOR: Record<string, string> = {
  "Israel & Middle East": "#3B82F6",
  "Persecution & Church": "#EF4444",
  "Global Events": "#6366F1",
  "Signs & Seasons": GREEN,
  "Study Resources": "#F59E0B",
};

const KEY_PASSAGES = [
  { ref: "Matthew 24:4-14", summary: "Signs of the end: wars, famines, earthquakes, persecution, lawlessness, gospel to all nations" },
  { ref: "Daniel 9:24-27", summary: "The 70 Weeks prophecy — the framework of Israel's prophetic timetable, including the coming Antichrist" },
  { ref: "Ezekiel 38-39", summary: "The Gog-Magog war — Russia, Iran, Turkey and allies invade Israel in the last days" },
  { ref: "Revelation 6-19", summary: "The Tribulation period — seal, trumpet, and bowl judgments; Antichrist's reign; Armageddon" },
  { ref: "1 Thessalonians 4:16-17", summary: "The Rapture — the catching away of the church before the Tribulation" },
  { ref: "Zechariah 12-14", summary: "Jerusalem besieged; Israel's national mourning; the return of Christ to the Mount of Olives" },
  { ref: "Romans 11:25-27", summary: "The mystery of Israel — all Israel will be saved when the fullness of the Gentiles comes in" },
  { ref: "2 Thessalonians 2:1-12", summary: "The man of lawlessness — the Antichrist's rise and the restrainer who holds him back" },
];

export default function ProphecyTodayPage() {
  const [topic, setTopic] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = RESOURCES.filter(r => topic === "All" || r.topic === topic);
  const resource = RESOURCES.find(r => r.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔭</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prophecy Today</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The most trusted voices in biblical prophecy — tracking Israel, global persecution, and the signs of the times through the lens of Scripture. Real ministries. Real reporting. Biblically grounded.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 28 }}>
          <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 12 }}>KEY PROPHETIC PASSAGES</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
            {KEY_PASSAGES.map((p, i) => (
              <div key={i} style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: "8px 12px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 3 }}>{p.ref}</div>
                <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{p.summary}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {TOPIC_FILTERS.map(t => (
            <button key={t} onClick={() => setTopic(t)}
              style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${topic === t ? GREEN : BORDER}`, background: topic === t ? `${GREEN}15` : "transparent", color: topic === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: resource ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((r, i) => (
              <button key={i} onClick={() => setSelected(selected === r.name ? null : r.name)}
                style={{ background: selected === r.name ? `${r.color}12` : CARD, border: `1px solid ${selected === r.name ? r.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${r.color}20`, border: `1px solid ${r.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: r.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {r.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{r.name}</span>
                      <span style={{ background: `${TOPIC_COLOR[r.topic] || GREEN}15`, color: TOPIC_COLOR[r.topic] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{r.topic}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 3, alignItems: "center" }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{r.host}</span>
                      <span style={{ color: MUTED, fontSize: 10 }}>·</span>
                      <span style={{ color: MUTED, fontSize: 11 }}>{r.type}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {resource && (
            <div style={{ background: CARD, border: `1px solid ${resource.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: resource.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{resource.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{resource.host} · {resource.type}</div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                <span style={{ background: `${TOPIC_COLOR[resource.topic] || GREEN}15`, color: TOPIC_COLOR[resource.topic] || GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{resource.topic}</span>
              </div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{resource.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY FOLLOW</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{resource.why_follow}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{resource.best_for}</p>
              </div>

              <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>FORMAT</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{resource.format}</p>
              </div>

              <div style={{ background: `${resource.color}08`, border: `1px solid ${resource.color}20`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: resource.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WEBSITE</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{resource.url}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
