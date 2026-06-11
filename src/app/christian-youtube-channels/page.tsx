"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "channels" | "series" | "study" | "featured" | "journal";

const CATEGORIES = ["All", "Theology", "Preaching", "Apologetics", "Bible Study", "Worship", "Devotional", "Family"];

const CHANNELS = [
  {
    name: "The Bible Project",
    creator: "Tim Mackie & Jon Collins",
    category: "Bible Study",
    color: "#3B82F6",
    subs: "10M+",
    description: "Animated short films that explore the literary structure and theological themes of the Bible. The Bible Project maps the entire Bible — book by book, word by word — using rigorous scholarship presented accessibly. Their Themes and Word Studies series are exceptional. Free, beautiful, theologically careful.",
    best_series: "The Book of Job, The Royal Official, The Messiah series, Word Studies (Shalom, Torah, Hesed)",
    why_watch: "The best animated introduction to biblical theology available anywhere, for free. Extraordinary production value paired with serious scholarship.",
    url: "https://www.youtube.com/@thebibleproject",
    initials: "TBP",
  },
  {
    name: "Desiring God",
    creator: "John Piper & Staff",
    category: "Theology",
    color: "#EF4444",
    subs: "900K+",
    description: "John Piper's ministry channel with thousands of sermons, Ask Pastor John episodes, and conference messages. Piper has been preaching and publishing since 1980, and the Desiring God archive is one of the richest free theological resources on the internet. Theologically Reformed, warmly doxological.",
    best_series: "Sermons on Romans; The Coronavirus and Christ; Look at the Book (live Bible study format); Ask Pastor John",
    why_watch: "Piper combines doctrinal precision with white-hot devotion to God in a way few others do. His Bethlehem Baptist sermons from the 1980s-2000s are foundational.",
    url: "https://www.youtube.com/@desiringGod",
    initials: "DG",
  },
  {
    name: "Ligonier Ministries",
    creator: "R.C. Sproul & Staff",
    category: "Theology",
    color: PURPLE,
    subs: "500K+",
    description: "R.C. Sproul's teaching ministry — the most prolific Reformed theologian of the 20th century. Ligonier's channel contains hundreds of hours of Sproul's teaching on the holiness of God, justification, the sovereignty of God, church history, and philosophy. Serious, clear, accessible. Also features newer teachers like W. Robert Godfrey, Stephen Nichols, and others.",
    best_series: "The Holiness of God, Chosen by God, The Consequences of Ideas, Church History",
    why_watch: "Sproul had the unique gift of making complex theology intelligible without dumbing it down. His series on The Holiness of God is essential Christian education.",
    url: "https://www.youtube.com/@LigonierMinistries",
    initials: "LIG",
  },
  {
    name: "The Gospel Coalition",
    creator: "Various Reformed Scholars",
    category: "Theology",
    color: "#10B981",
    subs: "300K+",
    description: "TGC's YouTube channel features conference talks, interviews, and shorter teaching pieces from some of the best Reformed evangelical scholars in the world — D.A. Carson, Tim Keller, Kevin DeYoung, Rosaria Butterfield, Rebecca McLaughlin, and many more. High production value, thoughtful content.",
    best_series: "National Conference messages; Women's Conference; Gospel and Culture talks",
    why_watch: "One-stop access to the brightest minds in conservative evangelical scholarship. TGC conferences consistently feature the best preaching and teaching available.",
    url: "https://www.youtube.com/@thegospelcoalition",
    initials: "TGC",
  },
  {
    name: "CrossExamined",
    creator: "Frank Turek",
    category: "Apologetics",
    color: "#F59E0B",
    subs: "500K+",
    description: "Frank Turek's apologetics ministry — debates, lectures, and campus Q&As. Turek engages atheism, naturalism, and moral relativism with accessible arguments. His 'I Don't Have Enough Faith to Be an Atheist' framework is particularly effective for campus evangelism. Known for engaging hostile audiences graciously.",
    best_series: "Campus Q&As, I Don't Have Enough Faith to Be an Atheist series, Debates with atheists",
    why_watch: "Practical, front-line apologetics for engaging secular audiences. Turek's campus debates are excellent training for Christians encountering skeptics.",
    url: "https://www.youtube.com/@CrossExamined_org",
    initials: "CE",
  },
  {
    name: "William Lane Craig (Reasonable Faith)",
    creator: "William Lane Craig",
    category: "Apologetics",
    color: "#6366F1",
    subs: "450K+",
    description: "The world's leading Christian philosopher and apologist. Craig defends the Cosmological, Teleological, and Moral arguments, engages the Problem of Evil, and debates atheists at the highest academic level. His debates with Christopher Hitchens, Sam Harris, Richard Dawkins, and Lawrence Krauss are essential viewing for anyone interested in the intellectual case for theism.",
    best_series: "Debates (vs Hitchens, Harris, Krauss), The Kalam Cosmological Argument explained, Molinism",
    why_watch: "The most rigorous philosophical defense of Christian theism available. Craig has redefined what it means to do academic Christian apologetics.",
    url: "https://www.youtube.com/@ReasonableFaithOrg",
    initials: "WLC",
  },
  {
    name: "Tim Keller (Gospel in Life)",
    creator: "Tim Keller",
    category: "Preaching",
    color: GREEN,
    subs: "200K+",
    description: "Tim Keller's sermon archive from Redeemer Presbyterian Church New York. Keller is widely considered the most effective communicator of the gospel to secular urban audiences in a generation. His sermons integrate theological depth with cultural engagement. The full archive includes hundreds of sermons from 1989 to 2017.",
    best_series: "Romans series, The Meaning of Marriage, Prodigal God, Jesus the King",
    why_watch: "Keller modeled what gospel-centered, culturally-engaged preaching looks like in a post-Christian world. His Romans and Galatians sermons are some of the finest biblical preaching available.",
    url: "https://www.youtube.com/@gospelinlife",
    initials: "TK",
  },
  {
    name: "Matt Chandler / The Village Church",
    creator: "Matt Chandler",
    category: "Preaching",
    color: "#EC4899",
    subs: "350K+",
    description: "Matt Chandler's preaching from The Village Church in Dallas, Texas. Chandler is one of the most gifted expository preachers of his generation — passionate, clear, direct. His preaching on Philippians, Colossians, and the Song of Songs has been widely celebrated. Known for combining doctrinal seriousness with pastoral warmth.",
    best_series: "Philippians series, To Live Is Christ, The Explicit Gospel, Recovering Redemption",
    why_watch: "Chandler's combination of theological depth and personal vulnerability makes him one of the most accessible Reformed preachers to younger audiences.",
    url: "https://www.youtube.com/@thevillagechurch",
    initials: "MC",
  },
  {
    name: "Paul Washer (HeartCry Missionary Society)",
    creator: "Paul Washer",
    category: "Preaching",
    color: "#EF4444",
    subs: "700K+",
    description: "Paul Washer's Shocking Youth Message in 2002 has been viewed tens of millions of times. Washer preaches with extraordinary intensity on repentance, the holiness of God, the nature of saving faith, and the reality of judgment. His missionary work in Peru grounds his preaching in the reality of lostness. Strongly Calvinist.",
    best_series: "Shocking Youth Message, Gospel of Jesus Christ series, The Lordship of Christ",
    why_watch: "Washer confronts nominal Christianity and cheap grace with an urgency few preachers match. His Shocking Youth Message remains one of the most watched Christian sermon videos ever.",
    url: "https://www.youtube.com/@HeartCryMissionary",
    initials: "PW",
  },
  {
    name: "David Platt (Radical)",
    creator: "David Platt",
    category: "Preaching",
    color: "#3B82F6",
    subs: "200K+",
    description: "David Platt — former IMB President, current pastor of McLean Bible Church — is best known for his Radical book and message: that the American dream and the gospel are incompatible. His sermon archives from Brook Hills and McLean Bible are excellent, especially his series on Matthew and Acts. Strong missions emphasis.",
    best_series: "Counter Culture, Secret Church (all-night Bible study events), Matthew series",
    why_watch: "Platt's integration of expository preaching with radical missions calling is unique. His Secret Church events (some watched by millions globally) are particularly valuable.",
    url: "https://www.youtube.com/@radical_net",
    initials: "DP",
  },
  {
    name: "Elevation Worship",
    creator: "Elevation Church",
    category: "Worship",
    color: "#F59E0B",
    subs: "2.5M+",
    description: "Official worship channel of Elevation Church (Steven Furtick). Home of O Come to the Altar, Do It Again, Graves Into Gardens, and Rattle. One of the most-streamed worship acts in the world. High production value, theologically accessible worship. Some Reformed critics have noted concerns about song theology, but the worship songs themselves are widely used across traditions.",
    best_series: "Graves Into Gardens album, Worthy album, LION album sessions",
    why_watch: "Consistently the most creative worship music production in contemporary Christian music. Songs from this channel have become global church standards.",
    url: "https://www.youtube.com/@ElevationWorship",
    initials: "EW",
  },
  {
    name: "Bethel Music",
    creator: "Bethel Church",
    category: "Worship",
    color: "#A855F7",
    subs: "2M+",
    description: "Bethel Church's worship channel — home of Spontaneous Worship sessions, album releases, and live worship events. Known for Raise a Hallelujah, Goodness of God, King of Kings, and hundreds more songs that have been adopted globally. Bethel is charismatic; their theology of worship is more experience-focused than most Reformed churches.",
    best_series: "Starlight album, Victory live sessions, Goodness of God (Jenn Johnson)",
    why_watch: "Bethel produces some of the most musically beautiful worship recordings available. Goodness of God has arguably become one of the most important worship songs of the last decade.",
    url: "https://www.youtube.com/@bethelmusic",
    initials: "BM",
  },
  {
    name: "Voddie Baucham",
    creator: "Voddie Baucham",
    category: "Theology",
    color: "#10B981",
    subs: "400K+",
    description: "Reformed theologian and pastor (now Dean of Theology at African Christian University in Zambia). Voddie preaches with rare clarity and boldness on the sufficiency of Scripture, complementarianism, Christian education, family discipleship, and biblical justice. His lectures on Fault Lines and worldview have been widely shared.",
    best_series: "Fault Lines lectures, Family Driven Faith, Joseph and the Gospel of Many Colors",
    why_watch: "Baucham is one of the clearest thinkers on applying a biblical worldview to contemporary cultural debates, particularly on race, family, and education.",
    url: "https://www.youtube.com/@VoddieBaucham",
    initials: "VB",
  },
  {
    name: "Andy Stanley (North Point Ministries)",
    creator: "Andy Stanley",
    category: "Preaching",
    color: "#F59E0B",
    subs: "200K+",
    description: "Andy Stanley is one of the most gifted communicators in American evangelicalism — his clarity, structure, and storytelling are masterclass. His series on leadership, relationships, and parenting are widely used in churches. Note: some of Stanley's recent statements on the relationship between faith and the Bible have generated significant Reformed criticism, but his communication skill is extraordinary.",
    best_series: "Your Move (life application), Irresistible, Who Needs God",
    why_watch: "Unparalleled clarity in sermon structure and communication technique. Even those who disagree with Stanley's theology study his communication method.",
    url: "https://www.youtube.com/@AndyStanleyNorthPoint",
    initials: "AS",
  },
  {
    name: "Francis Chan",
    creator: "Francis Chan",
    category: "Devotional",
    color: "#00D4AA",
    subs: "700K+",
    description: "Francis Chan — author of Crazy Love — preaches with an intensity about the reality of eternity and the cost of discipleship that shakes comfortable Christianity. Known for his deeply personal, Spirit-filled preaching style. After leaving Cornerstone Church, Chan has planted a network of house churches in San Francisco and works extensively in Asia.",
    best_series: "Crazy Love series, Letters to the Church, BASIC series on the Holy Spirit",
    why_watch: "Chan has the unusual combination of doctrinal seriousness and holy Spirit sensitivity. His preaching on hell, eternity, and the cost of following Jesus is unlike almost anyone else's.",
    url: "https://www.youtube.com/@FrancisChan",
    initials: "FC",
  },
  {
    name: "9Marks",
    creator: "Mark Dever & Staff",
    category: "Theology",
    color: "#6366F1",
    subs: "80K+",
    description: "Capitol Hill Baptist Church's ministry focused on church health. 9Marks produces content on expositional preaching, biblical theology, church membership, church discipline, and pastoral ministry. Mark Dever is one of the leading voices on what healthy church looks like. More pastoral and ecclesiological than devotional.",
    best_series: "Building Healthy Churches series, Interviews with Preachers, Preaching Workshop",
    why_watch: "Essential viewing for pastors, elders, and anyone serious about what a healthy local church looks like. 9Marks has shaped a generation of young pastors.",
    url: "https://www.youtube.com/@9Marks",
    initials: "9M",
  },
];

const CHANNEL_SERIES = [
  {
    id: "bp-how-to-read",
    series: "How to Read the Bible",
    channel: "BibleProject",
    description: "A 12-video series covering the literary genres of the Bible: narrative, poetry, prophecy, law, and wisdom literature. One of the best introductions to reading Scripture well.",
    videoCount: 12,
    topics: ["Genre", "Narrative", "Poetry", "Prophecy", "Hermeneutics"],
    startVideoId: "XtwIT8JjddM",
  },
  {
    id: "bp-genesis-overview",
    series: "Overview: Genesis 1-11",
    channel: "BibleProject",
    description: "The foundational narrative of Scripture — creation, fall, flood, and the tower of Babel. BibleProject unpacks the ancient literary design and theological themes that set up the entire biblical story.",
    videoCount: 2,
    topics: ["Genesis", "Creation", "Fall", "Biblical Theology"],
    startVideoId: "GQI72THyO5I",
  },
  {
    id: "ligonier-holiness",
    series: "The Holiness of God",
    channel: "Ligonier / R.C. Sproul",
    description: "A 7-part series on God’s central attribute. Sproul argues that the holiness of God is the most neglected doctrine in the modern church and the most necessary for genuine worship.",
    videoCount: 7,
    topics: ["Holiness", "Attributes of God", "Worship", "Reformed Theology"],
    startVideoId: "3Dv4-n6OYGI",
  },
  {
    id: "keller-reason-for-god",
    series: "The Reason for God",
    channel: "Tim Keller",
    description: "Keller’s case for Christianity delivered at Google headquarters. He engages intellectual objections to faith with clarity and cultural insight, drawing on literature, philosophy, and Scripture.",
    videoCount: 1,
    topics: ["Apologetics", "Gospel", "Doubt", "Cultural Engagement"],
    startVideoId: "jH_aojNJM3E",
  },
  {
    id: "bp-nt-summary",
    series: "New Testament Summary",
    channel: "BibleProject",
    description: "Complete animated overview of every New Testament book — from Matthew through Revelation. BibleProject’s signature visual style makes the whole sweep of the New Testament accessible.",
    videoCount: 27,
    topics: ["New Testament", "Gospels", "Epistles", "Revelation", "Overview"],
    startVideoId: "kfcVPh2VDhQ",
  },
  {
    id: "chan-forgotten-god",
    series: "Forgotten God",
    channel: "Francis Chan",
    description: "A 7-part series on the Holy Spirit — who He is, what He does, and why modern Christianity so often ignores the third person of the Trinity. Challenging and convicting.",
    videoCount: 7,
    topics: ["Holy Spirit", "Discipleship", "Church", "Spiritual Life"],
    startVideoId: "57LVVwba6_8",
  },
];

const CHANNEL_STUDY_PLANS = [
  {
    id: "HGHqu9-DtXk",
    title: "Foundations of the Faith",
    duration: "4 weeks",
    level: "Beginner",
    description: "A four-week introduction to the core pillars of Christian faith — Scripture, the gospel, the holiness of God, and the cost of discipleship. Perfect for new believers or anyone who wants to go back to basics.",
    videos: [
      { title: "What is the Bible?", videoId: "E65KV3M8RZE", channel: "BibleProject" },
      { title: "The Reason for God at Google", videoId: "f7RJATbobik", channel: "Tim Keller" },
      { title: "The Holiness of God", videoId: "3Dv4-n6OYGI", channel: "R.C. Sproul / Ligonier" },
      { title: "Don’t Waste Your Life", videoId: "zUKzVFQn4Tc", channel: "John Piper" },
    ],
  },
  {
    id: "deep-theology",
    title: "Deep Dive Theology",
    duration: "6 weeks",
    level: "Intermediate",
    description: "Six weeks working through Sproul’s landmark Holiness of God series alongside BibleProject’s New Testament overview. For Christians ready to go deeper into doctrine.",
    videos: [
      { title: "The Holiness of God (Part 1)", videoId: "3Dv4-n6OYGI", channel: "R.C. Sproul / Ligonier" },
      { title: "New Testament Summary", videoId: "GGCF3OPWN14", channel: "BibleProject" },
      { title: "How to Read the Bible", videoId: "t6L-F2emwUc", channel: "BibleProject" },
      { title: "Overview: Genesis 1-11", videoId: "GQI72THyO5I", channel: "BibleProject" },
      { title: "Forgotten God (Holy Spirit)", videoId: "oNpTha80yyE", channel: "Francis Chan" },
      { title: "Don’t Waste Your Life", videoId: "4Eg_di-O8nM", channel: "John Piper" },
    ],
  },
  {
    id: "evangelism",
    title: "Evangelism Training",
    duration: "3 weeks",
    level: "All levels",
    description: "Three weeks of the most convicting and equipping content for personal evangelism — from Washer’s landmark youth message to Graham’s classic gospel call to Baucham on the supremacy of Christ.",
    videos: [
      { title: "Shocking Youth Message", videoId: "mC-zw0zCCtg", channel: "Paul Washer" },
      { title: "How Great Is Our God", videoId: "7_CGP-12AE0", channel: "Louie Giglio" },
      { title: "The Reason for God at Google", videoId: "OqwbFGoRYVo", channel: "Tim Keller" },
      { title: "Don’t Waste Your Life", videoId: "gV9JugO_5Mk", channel: "John Piper" },
    ],
  },
  {
    id: "gospel-preaching",
    title: "Gospel Preaching Masterclass",
    duration: "4 weeks",
    level: "Advanced",
    description: "Four weeks studying the best gospel preachers of our generation — Keller, Chandler, Platt, and Piper. For preachers, teachers, and anyone who wants to understand what makes great expository preaching.",
    videos: [
      { title: "The Reason for God at Google", videoId: "ej_6dVdJSIU", channel: "Tim Keller" },
      { title: "The Depth of the Gospel", videoId: "GQI72THyO5I", channel: "Matt Chandler" },
      { title: "Radical (Passion 2011)", videoId: "krxcqH522uo", channel: "David Platt" },
      { title: "Don’t Waste Your Life", videoId: "nQWFzMvCfLE", channel: "John Piper" },
    ],
  },
];

const FEATURED_VIDEOS = [
  {
    id: "fv-1",
    title: "What is BibleProject?",
    channel: "BibleProject",
    videoId: "ccNvwDPguNU",
    category: "Bible Study",
    description: "An introduction to the vision and method behind BibleProject — why they make animated Bible videos and what they hope you will see in the text.",
  },
  {
    id: "fv-2",
    title: "Overview: Genesis 1-11",
    channel: "BibleProject",
    videoId: "GQI72THyO5I",
    category: "Bible Study",
    description: "The foundational chapters of the entire Bible — creation, the image of God, the fall, and the spread of sin. Essential for understanding everything that follows.",
  },
  {
    id: "fv-3",
    title: "New Testament Summary",
    channel: "BibleProject",
    videoId: "j9phNEaPrv8",
    category: "Bible Study",
    description: "A sweeping animated overview of the entire New Testament — the Gospels, Acts, the Epistles, and Revelation in one cohesive narrative arc.",
  },
  {
    id: "fv-4",
    title: "The Reason for God at Google",
    channel: "Tim Keller",
    videoId: "dy9nwe9zeU8",
    category: "Apologetics",
    description: "Keller makes the case for Christianity to a room full of Google engineers — one of the finest examples of winsome, intellectually rigorous gospel witness available.",
  },
  {
    id: "fv-5",
    title: "The Holiness of God",
    channel: "R.C. Sproul / Ligonier",
    videoId: "3Dv4-n6OYGI",
    category: "Theology",
    description: "Sproul’s landmark teaching on the attribute of God that the modern church has most neglected. His exposition of Isaiah 6 alone is worth an hour of your time.",
  },
  {
    id: "fv-6",
    title: "How Great Is Our God",
    channel: "Louie Giglio",
    videoId: "iK0NjiBXKN4",
    category: "Worship",
    description: "Giglio’s famous talk on the scale of the universe and the glory of God — one of the most-watched Christian messages of the last 20 years.",
  },
  {
    id: "fv-7",
    title: "Don’t Waste Your Life",
    channel: "John Piper",
    videoId: "zMbUXpFiFeo",
    category: "Preaching",
    description: "Piper’s urgent call to live for something bigger than comfort and safety — one of his most famous messages and the foundation of the Radical movement.",
  },
  {
    id: "fv-8",
    title: "Shocking Youth Message",
    channel: "Paul Washer",
    videoId: "52ZXFH1wzc8",
    category: "Preaching",
    description: "The sermon that shocked a generation of youth group Christianity. Washer’s confrontation of nominal faith and cheap grace has been viewed tens of millions of times.",
  },
];

export default function ChristianYouTubeChannelsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-youtube-channels_tab", "channels");
  const [category, setCategory] = usePersistedState("vine_christian-youtube-channels_category", "All");
  const [selected, setSelected] = useState<string | null>(null);

  const [cytcEntries, setCytcEntries] = useState<{ id: string; date: string; channel: string; learning: string; applying: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cytc_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cytcForm, setCytcForm] = useState({ channel: "", learning: "", applying: "" });
  const [cytcSaved, setCytcSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cytc_entries", JSON.stringify(cytcEntries)); }, [cytcEntries]);
  function saveCytcEntry() {
    if (!cytcForm.channel.trim()) return;
    setCytcEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cytcForm }, ...prev]);
    setCytcForm({ channel: "", learning: "", applying: "" });
    setCytcSaved(true); setTimeout(() => setCytcSaved(false), 2000);
  }
  function deleteCytcEntry(id: string) { setCytcEntries(prev => prev.filter(e => e.id !== id)); }

  const filtered = CHANNELS.filter(c => category === "All" || c.category === category);
  const channel = CHANNELS.find(c => c.name === selected);

  const tabs: { id: Tab; label: string }[] = [
    { id: "channels", label: "Channels" },
    { id: "series", label: "Series" },
    { id: "study", label: "Study Plans" },
    { id: "featured", label: "Featured" },
    { id: "journal", label: "📓 My Journal" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>▶️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Top Christian YouTube Channels</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The best channels for theology, preaching, Bible study, apologetics, and worship &mdash; curated by quality, not subscriber count. Hours of free, world-class Christian content.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6 }}>
          {tabs.map(tab => (
            <button type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                background: activeTab === tab.id ? GREEN : "transparent",
                color: activeTab === tab.id ? "#07070F" : MUTED,
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CHANNELS TAB */}
        {activeTab === "channels" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These channels represent thousands of hours of free, high-quality Christian content. The church has never had access to this much teaching at no cost &mdash; but it requires curation. This is our recommended starting list.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {CATEGORIES.map(c => (
                <button type="button" key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: channel ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((c, i) => (
                  <button type="button" key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
                    style={{ background: selected === c.name ? `${c.color}12` : CARD, border: `1px solid ${selected === c.name ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {c.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                          <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.category}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{c.creator} · {c.subs} subscribers</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {channel && (
                <div style={{ background: CARD, border: `1px solid ${channel.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${channel.color}20`, border: `1px solid ${channel.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: channel.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                      {channel.initials}
                    </div>
                    <div>
                      <h2 style={{ color: channel.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{channel.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{channel.creator} · {channel.subs} subscribers</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    <span style={{ background: `${channel.color}12`, color: channel.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{channel.category}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{channel.description}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>START WITH</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{channel.best_series}</p>
                    </div>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY WATCH</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{channel.why_watch}</p>
                    </div>
                  </div>

                  <a href={channel.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    ▶ Open YouTube Channel
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* SERIES TAB */}
        {activeTab === "series" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {CHANNEL_SERIES.map(s => (
              <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: "24px 28px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 20, margin: 0 }}>{s.series}</h2>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.channel}</span>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.videoCount} {s.videoCount === 1 ? "video" : "videos"}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>{s.description}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {s.topics.map(t => (
                      <span key={t} style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "0 28px 28px" }}>
                  <VideoEmbed videoId={s.startVideoId} title={s.series} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STUDY PLANS TAB */}
        {activeTab === "study" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {CHANNEL_STUDY_PLANS.map(plan => (
              <div key={plan.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: "28px 28px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: 0 }}>{plan.title}</h2>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{plan.duration}</span>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{plan.level}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{plan.description}</p>
                </div>
                <div style={{ padding: "0 28px 28px", display: "flex", flexDirection: "column", gap: 28 }}>
                  {plan.videos.map((v, idx) => (
                    <div key={v.videoId} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ width: 24, height: 24, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, fontWeight: 900, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{idx + 1}</span>
                        <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.title}</span>
                        <span style={{ background: `${BORDER}`, color: MUTED, padding: "1px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600, marginLeft: "auto" }}>{v.channel}</span>
                      </div>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FEATURED TAB */}
        {activeTab === "featured" && (
          <>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 24, marginBottom: 8 }}>Featured Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                A curated &ldquo;best of&rdquo; selection from across Christian YouTube &mdash; essential watches for every believer.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
              {FEATURED_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                      <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.channel}</span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.category}</span>
                    </div>
                    <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 15, margin: "0 0 6px" }}>{v.title}</h3>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "journal" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>My Learning Journal</h2>
            <p style={{ color: MUTED, fontSize: 15, marginBottom: 24 }}>Track what you are learning from YouTube and how you are applying it. Saved privately in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>Which channel or video are you learning from?</label>
                <textarea value={cytcForm.channel} onChange={e => setCytcForm(f => ({ ...f, channel: e.target.value }))}
                  placeholder="Channel name, video title, or series..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>What are you learning?</label>
                <textarea value={cytcForm.learning} onChange={e => setCytcForm(f => ({ ...f, learning: e.target.value }))}
                  placeholder="Key insight, doctrine, or skill..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>How are you applying this to your faith?</label>
                <textarea value={cytcForm.applying} onChange={e => setCytcForm(f => ({ ...f, applying: e.target.value }))}
                  placeholder="A change, decision, or practice..." rows={2}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCytcEntry}
                style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cytcSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {cytcEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {cytcEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteCytcEntry(e.id)}
                        style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                    </div>
                    {e.channel && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 12, fontWeight: 700 }}>CHANNEL </span><span style={{ color: TEXT, fontSize: 14 }}>{e.channel}</span></div>}
                    {e.learning && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>LEARNING </span><span style={{ color: TEXT, fontSize: 14 }}>{e.learning}</span></div>}
                    {e.applying && <div><span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>APPLYING </span><span style={{ color: TEXT, fontSize: 14 }}>{e.applying}</span></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
