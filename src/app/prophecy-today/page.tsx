"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "prophecies" | "theology" | "discernment" | "voices" | "videos";

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

const PROPH_THEOLOGY = [
  {
    id: 1,
    title: "The Cessationism vs Continuationism Debate",
    icon: "⚔️",
    scripture: "1 Corinthians 13:8-10",
    description: "Cessationists argue that the sign gifts — including prophecy, tongues, and healing — ceased with the completion of the New Testament canon or the death of the apostles. Continuationists contend that the Spirit continues to give these gifts today as He sovereignly wills. The debate hinges on the interpretation of 'when the perfect comes' in 1 Corinthians 13, the role of the apostolate in miraculous gifts, and the historical question of whether gifts actually ceased. Most evangelical denominations have a stated or implied position on this question.",
  },
  {
    id: 2,
    title: "New Testament Prophecy vs Old Testament Prophecy",
    icon: "📜",
    scripture: "Acts 2:17-18; Hebrews 1:1-2",
    description: "Old Testament prophecy operated under a strict standard: 100% accuracy, or the prophet was to be stoned (Deuteronomy 18:20-22). New Testament prophecy, particularly in the Pauline epistles, appears to operate differently — the congregation is instructed to 'weigh' prophecy (1 Corinthians 14:29), suggesting fallibility. Wayne Grudem has argued that NT congregational prophecy is a lesser gift — reporting spontaneous impressions rather than receiving direct divine speech — which is why Paul says to 'test' rather than simply 'obey.' This distinction is central to the cessationism debate.",
  },
  {
    id: 3,
    title: "The Gift of Prophecy in Paul (1 Cor 12-14)",
    icon: "✉️",
    scripture: "1 Corinthians 12:10; 14:1-5, 29-33",
    description: "Paul devotes more space to regulating prophecy than to explaining it. Key observations: prophecy is for the strengthening, encouragement, and comfort of the church (14:3); it is subordinate to Scripture (testing implies a standard); it is not ecstatic — prophets can control themselves (14:32); women prophesying is acknowledged (11:5) while another passage restricts speech (14:34), creating an interpretive tension that scholars have wrestled with for centuries. Paul's overriding concern is order and edification, not the experience itself.",
  },
  {
    id: 4,
    title: "Testing Prophecy (Deut 18, 1 Thess 5:20-21)",
    icon: "⚖️",
    scripture: "Deuteronomy 18:20-22; 1 Thessalonians 5:20-21",
    description: "Paul's command 'do not treat prophecy with contempt, but test everything' establishes that both dismissing and uncritically accepting prophetic claims are errors. The Old Testament standard was predictive accuracy. The New Testament adds doctrinal alignment with the apostolic gospel (Galatians 1:8), Christological confession (1 John 4:2), and fruit inspection (Matthew 7:15-20). The elder structure of the local church exists in part to provide accountability for prophetic claims — ad hoc prophecy without accountability is a consistent source of spiritual abuse.",
  },
  {
    id: 5,
    title: "The Role of Prophecy Today",
    icon: "🔭",
    scripture: "Ephesians 2:20; Revelation 22:18-19",
    description: "Even continuationists agree that no prophecy today can contradict or add to Scripture. The question is whether the Spirit still gives spontaneous, Spirit-prompted communications for the edification of local churches — distinct from the closed canon. Cessationists argue this is unnecessary and dangerous given the complete Scripture. Continuationists argue the Spirit's activity in illuminating, applying, and occasionally directing the church through Spirit-prompted words is ongoing but always subject to scriptural correction. Both views agree: Scripture is the final, sufficient, and inerrant standard.",
  },
];

const PROPH_DISCERNMENT = [
  {
    id: 1,
    test: "Does it align with Scripture?",
    icon: "📖",
    description: "The most foundational test. Any prophetic word that contradicts the Bible's clear teaching is false, regardless of how vivid the experience or how sincere the claimant. The canon is closed. Paul pronounced an anathema on anyone preaching a different gospel — even an angel (Galatians 1:8). Scripture is the norming norm for all claimed spiritual experience.",
    scripture: "Isaiah 8:20; Galatians 1:8-9",
    warning_sign: "Vague, feel-good words that could mean anything — often designed to avoid the Scriptural test entirely.",
  },
  {
    id: 2,
    test: "Does it glorify Christ?",
    icon: "✝️",
    description: "The Holy Spirit's ministry is to glorify Christ (John 16:14). Genuine prophetic ministry points people to the person and work of Jesus — His holiness, His cross, His resurrection, His lordship. When prophetic words fixate on the prophet, on supernatural experiences, on financial blessing, or on political outcomes without centering Christ, the Spirit's hallmark is absent.",
    scripture: "John 16:13-14; 1 Corinthians 12:3",
    warning_sign: "Prophecies that emphasize the prophet's special access, platform, or anointing more than Christ's sufficiency.",
  },
  {
    id: 3,
    test: "Does it produce fruit?",
    icon: "🌱",
    description: "Jesus taught that false prophets are known by their fruit (Matthew 7:15-20). This includes both the fruit of the prophet's own life (character, integrity, family, finances) and the fruit produced in those who receive the words (is the congregation growing in holiness, or in dependence on experiences?). Genuine prophetic ministry produces repentance, worship, and deeper discipleship.",
    scripture: "Matthew 7:15-20; Galatians 5:22-23",
    warning_sign: "An absence of accountability for failed predictions; a community that becomes increasingly experience-dependent rather than Scripture-rooted.",
  },
  {
    id: 4,
    test: "Does the prophet have accountability?",
    icon: "🏛️",
    description: "Scripture's pattern is that prophets operate within community structures — elders weigh prophecy (1 Corinthians 14:29), the congregation tests (1 Thessalonians 5:21), and leaders provide oversight. The lone prophet who answers to no one is a consistent pattern in both biblical history and contemporary spiritual abuse. Genuine gifting flourishes under godly oversight; it does not need to flee from it.",
    scripture: "1 Corinthians 14:29; 1 Timothy 5:19-20",
    warning_sign: "Resistance to elder oversight; claims that questioning the prophet is 'touching God's anointed'; isolation from broader church accountability.",
  },
  {
    id: 5,
    test: "Has it been confirmed by elders?",
    icon: "🤝",
    description: "Major prophetic words — particularly those directing significant life decisions (marriage, vocation, relocation, financial commitment) — should be confirmed through the pastoral wisdom of multiple mature leaders. The New Testament model of decision-making involves community discernment, not private prophetic direction. When prophetic words consistently bypass elder confirmation and go directly to unaccountable action, the system is broken.",
    scripture: "Proverbs 11:14; Acts 13:1-3",
    warning_sign: "Prophetic words that demand immediate action, create urgency that bypasses reflection, or are leveraged to extract financial giving or personal loyalty.",
  },
  {
    id: 6,
    test: "Does it lead to repentance or manipulation?",
    icon: "🔍",
    description: "Genuine prophetic conviction leads to repentance toward God and faith in Christ — not dependence on the prophet. The goal of biblical prophecy is always the hearer's alignment with God's will as revealed in Scripture. Manipulative prophecy creates emotional leverage — fear, guilt, flattery, or manufactured obligation — that redirects devotion toward the prophet or ministry rather than toward God.",
    scripture: "1 Corinthians 14:24-25; 2 Corinthians 7:10",
    warning_sign: "Prophetic words that create fear of consequences if not obeyed, or that make the recipient feel specially chosen in ways that feed pride rather than humility.",
  },
];

const VOICES_PROPH = [
  {
    id: 1,
    name: "Wayne Grudem",
    era: "Contemporary (b. 1948)",
    context: "Systematic Theologian; Trinity Evangelical Divinity School",
    bio: "Wayne Grudem is one of the most influential evangelical systematic theologians of the late 20th and early 21st centuries. His Systematic Theology (1994) has sold over 700,000 copies and remains the standard reference work in Reformed evangelical seminaries worldwide. On the gift of prophecy, Grudem has argued for a nuanced continuationist position — holding that NT congregational prophecy is a real but fallible gift, distinct from the authoritative prophecy of the OT prophets and the NT apostles. His careful exegetical work on 1 Corinthians 14 has shaped the debate more than any other single scholar.",
    quote: "New Testament congregational prophecy is not the speaking of God-breathed, inerrant words, but the report of something God brings to mind — Spirit-prompted, fallible, subject to congregational weighing.",
    contribution: "The Gift of Prophecy in the New Testament and Today (1988) — the defining academic text on the continuationist side of the cessationism debate",
  },
  {
    id: 2,
    name: "Jack Deere",
    era: "Contemporary (b. 1948)",
    context: "Former Dallas Seminary Professor; Vineyard Movement",
    bio: "Jack Deere was a tenured professor of Old Testament at Dallas Theological Seminary — one of the flagship cessationist institutions in America — when he became convinced, through personal experience and biblical study, that the gifts of the Spirit were still operative. His subsequent departure from Dallas and association with the Vineyard movement made him one of the most controversial figures in evangelical theology. His book Surprised by the Voice of God is a personal and exegetical account of his journey from cessationism to charismatic continuationism, written for cessationists who are willing to think carefully.",
    quote: "I believed what I had been taught — that God no longer spoke to His people except through Scripture. Then God spoke to me, and I had to decide whether to trust my theology or my experience.",
    contribution: "Surprised by the Voice of God (1996) — the most accessible and personally compelling case for continuationism written from an academic evangelical background",
  },
  {
    id: 3,
    name: "John Stott",
    era: "20th Century (1921-2011)",
    context: "All Souls Langham Place, London; Lausanne Movement",
    bio: "John Stott was arguably the most influential evangelical Anglican of the 20th century. His commentaries (particularly on Romans and Ephesians), his role in shaping the Lausanne Covenant, and his decades of ministry at All Souls Langham Place made him a defining figure in global evangelicalism. Stott held a soft cessationist position — not denying God's freedom to work supernaturally, but skeptical of the institutionalized charismatic movement and its prophetic claims. His careful, irenic engagement with the question remains a model of theological charity.",
    quote: "God does not bypass the mind; He renews it. The Spirit illuminates the Word already written rather than adding new revelation alongside it.",
    contribution: "Baptism and Fullness (1964, revised 1975) — the clearest evangelical Anglican engagement with charismatic claims, arguing for the sufficiency of Scripture and Spirit without the sign gifts",
  },
  {
    id: 4,
    name: "Michael Brown",
    era: "Contemporary (b. 1955)",
    context: "FIRE School of Ministry; Line of Fire Radio",
    bio: "Michael Brown is a Jewish believer, New Testament scholar (Ph.D. from New York University), and one of the most prolific Messianic Jewish voices in the charismatic world. His book Authentic Fire was written as a direct response to John MacArthur's Strange Fire conference, defending charismatic continuationism from an academic and pastoral standpoint. Brown has also been one of the sharpest internal critics of prophetic excess — calling out failed prophecies and theological distortions while defending the legitimacy of the gifts themselves. His combination of academic credibility and charismatic conviction is rare.",
    quote: "The answer to the abuse of prophetic gifts is not cessationism. The answer is biblical, accountable, Christ-centered prophetic ministry — which looks very different from what has often been offered.",
    contribution: "Authentic Fire (2015) — a scholarly, pastoral response to cessationism that also calls the charismatic movement to higher standards of accountability",
  },
  {
    id: 5,
    name: "Sam Storms",
    era: "Contemporary (b. 1951)",
    context: "Bridgeway Church, Oklahoma City; The Gospel Coalition",
    bio: "Sam Storms is a Reformed charismatic theologian — a combination that places him in a small but growing camp of evangelical scholars who affirm both the doctrines of grace and the continuation of the spiritual gifts. A close associate of John Piper, Storms brings careful exegetical work to the cessationism debate, arguing that the cessationist case is more traditional than scriptural. His book Signs of the Spirit is a systematic defense of continuationism that takes cessationist arguments seriously before dismantling them. He also writes extensively on spiritual warfare, prayer, and Christian experience.",
    quote: "The New Testament nowhere teaches that any spiritual gift will cease before the return of Christ. The cessationist case depends more on tradition and experience than on exegesis.",
    contribution: "Signs of the Spirit (2013) and Practicing the Power (2017) — the most exegetically thorough contemporary defense of Reformed continuationism",
  },
];

export default function ProphecyTodayPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_prophecy-today_tab", "prophecies");
  const [topic, setTopic] = usePersistedState<string>("vine_prophecy-today_topic", "All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number | null>(null);

  const filtered = RESOURCES.filter(r => topic === "All" || r.topic === topic);
  const resource = RESOURCES.find(r => r.name === selected);
  const voice = VOICES_PROPH.find(v => v.id === selectedVoice);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔭</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prophecy Today</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The most trusted voices in biblical prophecy &mdash; tracking Israel, global persecution, and the signs of the times through the lens of Scripture. Real ministries. Real reporting. Biblically grounded.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, marginBottom: 32, flexWrap: "wrap" }}>
          {(["prophecies", "theology", "discernment", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "prophecies" ? "Prophecies" : t === "theology" ? "Theology" : t === "discernment" ? "Discernment" : t === "voices" ? "Voices" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {activeTab === "prophecies" && (
          <>
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
                <button type="button" key={t} onClick={() => setTopic(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${topic === t ? GREEN : BORDER}`, background: topic === t ? `${GREEN}15` : "transparent", color: topic === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: resource ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((r, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === r.name ? null : r.name)}
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
          </>
        )}

        {activeTab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PROPH_THEOLOGY.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
                  <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{entry.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }}>{entry.title}</h3>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12 }}>{entry.scripture}</div>
                  </div>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{entry.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "discernment" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {PROPH_DISCERNMENT.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{entry.icon}</div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: 0 }}>{entry.test}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{entry.description}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "6px 12px", flex: 1, minWidth: 200 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>SCRIPTURE</div>
                    <div style={{ color: TEXT, fontSize: 12 }}>{entry.scripture}</div>
                  </div>
                  <div style={{ background: "#EF444408", border: "1px solid #EF444430", borderRadius: 8, padding: "6px 12px", flex: 2, minWidth: 200 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 3 }}>WARNING SIGN</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.55 }}>{entry.warning_sign}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: voice ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {VOICES_PROPH.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(selectedVoice === v.id ? null : v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}15` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 6 }}>{v.era}</div>
                  <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{v.context}</div>
                </button>
              ))}
            </div>

            {voice && (
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{voice.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 4 }}>{voice.era}</div>
                <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{voice.bio}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>&ldquo;{voice.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.6 }}>{voice.contribution}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video teachings on biblical prophecy, spiritual discernment, and testing the spirits — from trusted Reformed and evangelical voices.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "u-cBlGvk0pQ", title: "Continuation vs. Cessation of Gifts", teacher: "John Piper vs. John MacArthur" },
                { id: "CCi2yWeP5qA", title: "God's Demand for Discernment", teacher: "John MacArthur" },
                { id: "A8zjZ9NAzvQ", title: "A Call to Discernment", teacher: "John MacArthur" },
                { id: "P9TILEkaNq8", title: "The Holy Spirit, Discernment and Charismatic Pressure", teacher: "John MacArthur" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
