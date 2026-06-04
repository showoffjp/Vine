"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "podcasts" | "episodes" | "listening" | "videos";

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

const FEATURED_EPISODES = [
  {
    id: "ep-1",
    podcast: "Ask Pastor John",
    episode: "What Is God's Will for My Life?",
    duration: "12 min",
    description: "John Piper's foundational answer to the most-asked question he receives. Rather than treating God's will as a mysterious blueprint to decode, Piper reframes the question around character, Scripture, and the sufficiency of wisdom.",
    themes: ["God's Will", "Guidance", "Decision-Making", "Scripture"],
    takeaway: "God's will is primarily about who you become, not which path you choose. Seek wisdom in the Word and walk in obedience.",
  },
  {
    id: "ep-2",
    podcast: "The TGC Podcast",
    episode: "Keller on Suffering",
    duration: "38 min",
    description: "Tim Keller's response to the problem of pain — why does God allow suffering? Drawing on Tolkien, the Psalms, and the cross, Keller argues that the Christian answer to suffering is not an explanation but a person.",
    themes: ["Suffering", "Theodicy", "God's Goodness", "The Cross"],
    takeaway: "The cross doesn't explain suffering — it transforms it. God didn't stay distant from our pain; He entered it.",
  },
  {
    id: "ep-3",
    podcast: "Revive Our Hearts",
    episode: "The Beauty of Femininity in a Confused Age",
    duration: "28 min",
    description: "Nancy DeMoss Wolgemuth addresses the biblical vision of womanhood in a culture that has lost its bearings. She draws from Titus 2 and Proverbs 31 to paint a countercultural and compelling picture of God's design.",
    themes: ["Biblical Womanhood", "Femininity", "Culture", "Titus 2"],
    takeaway: "God's design for women is not a limitation — it's a liberation into a dignity the world cannot manufacture.",
  },
  {
    id: "ep-4",
    podcast: "The Daily Grace Podcast",
    episode: "Praying the Psalms",
    duration: "34 min",
    description: "How to use the Psalter as your personal prayer book — the way the church has prayed for 3,000 years. The hosts walk through how specific psalms map onto grief, praise, confusion, and longing.",
    themes: ["Prayer", "Psalms", "Spiritual Disciplines", "Worship"],
    takeaway: "The Psalms give language to every human emotion before God. When you don't know how to pray, pray the Psalms.",
  },
  {
    id: "ep-5",
    podcast: "Reasonable Faith",
    episode: "The Moral Argument for God",
    duration: "22 min",
    description: "William Lane Craig presents an accessible version of the moral argument: if objective moral values exist, God must exist. He answers common objections and shows why naturalism cannot ground morality.",
    themes: ["Moral Argument", "Apologetics", "Ethics", "Naturalism"],
    takeaway: "The existence of genuine moral obligations is one of the most powerful pointers to a personal, moral Creator.",
  },
  {
    id: "ep-6",
    podcast: "Theology in the Raw",
    episode: "Who Was Paul?",
    duration: "55 min",
    description: "Preston Sprinkle takes a deep dive into the Apostle Paul — his background as a Pharisee, his Damascus Road encounter, his theology of grace and law, and why his letters have shaped Christian thought more than any other human author.",
    themes: ["Apostle Paul", "New Testament", "Grace", "Pharisees"],
    takeaway: "Understanding Paul's Jewish background transforms how you read his letters. His gospel wasn't a break from Judaism — it was its fulfillment.",
  },
];

const LISTENING_PLANS = [
  {
    id: "theology-foundation",
    title: "The Theology Foundation",
    weeks: 8,
    goal: "Build a solid doctrinal foundation through the best Reformed teaching podcasts",
    podcasts: ["Ask Pastor John", "The TGC Podcast", "Reasonable Faith"],
    description: "An 8-week structured diet of theology podcasts to build convictions about Scripture, the gospel, the sovereignty of God, and the defense of the faith. Three episodes per week, chosen for depth and coherence.",
    weeklySchedule: [
      { week: 1, title: "The Nature of God", episodes: ["APJ: What is God Like?", "TGC: The Attributes of God", "RF: The Existence of God"] },
      { week: 2, title: "The Authority of Scripture", episodes: ["APJ: Is the Bible Reliable?", "TGC: Inerrancy Today", "RF: Historical Evidence for the Resurrection"] },
      { week: 3, title: "The Gospel", episodes: ["APJ: What is the Gospel?", "TGC: Justification by Faith", "RF: The Moral Argument"] },
      { week: 4, title: "The Sovereignty of God", episodes: ["APJ: Does God Control Everything?", "TGC: Calvinism and Arminianism", "RF: The Problem of Evil"] },
      { week: 5, title: "Prayer and the Christian Life", episodes: ["APJ: Why Does God Answer Prayer?", "TGC: Spiritual Disciplines", "RF: The Cosmological Argument"] },
      { week: 6, title: "The Church", episodes: ["APJ: Why Does Church Matter?", "TGC: Church Membership", "RF: The Teleological Argument"] },
      { week: 7, title: "Suffering and Faith", episodes: ["APJ: When God Seems Silent", "TGC: Keller on Suffering", "RF: The Problem of Evil Answered"] },
      { week: 8, title: "Eternity", episodes: ["APJ: What Happens After Death?", "TGC: Heaven and the New Creation", "RF: Near-Death Experiences"] },
    ],
  },
  {
    id: "devotional-life",
    title: "The Devotional Life",
    weeks: 4,
    goal: "Build daily rhythms of Scripture, prayer, and devotional listening",
    podcasts: ["The Daily Grace Podcast", "Revive Our Hearts", "Truth For Life"],
    description: "A four-week immersion in devotional podcasting — five short episodes per week, all under 30 minutes. Designed to integrate with a daily quiet time. Works for anyone who wants their commute to be a means of grace.",
    weeklySchedule: [
      { week: 1, title: "Meeting God in Scripture", episodes: ["TFL: The Word of God", "DGP: How to Study the Bible", "ROH: Falling in Love with the Word", "TFL: Daily Exposition", "DGP: The Bible and Prayer"] },
      { week: 2, title: "The Life of Prayer", episodes: ["ROH: Learning to Pray", "TFL: The Lord's Prayer", "DGP: Praying the Psalms", "ROH: Intercession", "TFL: Unanswered Prayer"] },
      { week: 3, title: "Holiness and the Heart", episodes: ["ROH: True Womanhood", "DGP: Walking in Holiness", "TFL: The Fear of the Lord", "ROH: Freedom from Sin", "DGP: Grace and Discipline"] },
      { week: 4, title: "Living for God's Glory", episodes: ["TFL: Living Coram Deo", "DGP: Finding Your Purpose", "ROH: The Beauty of Surrender", "TFL: Finishing Well", "DGP: A Life That Counts"] },
    ],
  },
  {
    id: "apologist-diet",
    title: "The Apologist's Diet",
    weeks: 6,
    goal: "Equip believers to engage skeptics, atheists, and doubters with confidence and grace",
    podcasts: ["Reasonable Faith", "CrossExamined", "Unbelievable?"],
    description: "Six weeks for those who want to engage the secular mind with the truth of the gospel. Draws from the three best apologetics podcasts available — Craig's philosophical rigor, Turek's accessible arguments, and Unbelievable's real debates with skeptics.",
    weeklySchedule: [
      { week: 1, title: "Does God Exist?", episodes: ["RF: The Kalam Cosmological Argument", "CE: I Don't Have Enough Faith to Be an Atheist", "Unbelievable: Craig vs. Atkins on God"] },
      { week: 2, title: "The Problem of Evil", episodes: ["RF: The Logical Problem of Evil", "CE: How Can God Allow Suffering?", "Unbelievable: Evil and a Good God"] },
      { week: 3, title: "The Resurrection", episodes: ["RF: The Historical Evidence for the Resurrection", "CE: Can We Trust the Gospels?", "Unbelievable: Did Jesus Rise from the Dead?"] },
      { week: 4, title: "Science and Faith", episodes: ["RF: Science and the Existence of God", "CE: Evolution vs. Creation", "Unbelievable: A Scientist Becomes a Christian"] },
      { week: 5, title: "Morality and Meaning", episodes: ["RF: The Moral Argument", "CE: Without God, There Is No Meaning", "Unbelievable: Moral Realism Without God?"] },
      { week: 6, title: "Engaging Skeptics in Person", episodes: ["RF: How to Share Your Faith Intellectually", "CE: Campus Outreach Tactics", "Unbelievable: Former Atheist Testimonies"] },
    ],
  },
  {
    id: "world-mission",
    title: "The World Mission Plan",
    weeks: 6,
    goal: "Catch a vision for God's global mission and your place in it",
    podcasts: ["Radical", "9Marks", "The Exchange"],
    description: "Six weeks for those burdened for global mission. Platt's Radical podcast grounds mission in the gospel; 9Marks sharpens your ecclesiology so you send from healthy churches; The Exchange (Ed Stetzer) reports from the global frontlines.",
    weeklySchedule: [
      { week: 1, title: "The Great Commission", episodes: ["Radical: Why Every Christian Is a Missionary", "9Marks: The Church and the Great Commission", "Exchange: What Is Happening Globally?"] },
      { week: 2, title: "The Unreached", episodes: ["Radical: Who Are the Unreached?", "9Marks: Sending from the Local Church", "Exchange: Frontline Mission Report"] },
      { week: 3, title: "Gospel and Culture", episodes: ["Radical: Contextualizing the Gospel", "9Marks: Church Planting Abroad", "Exchange: Christianity in the Global South"] },
      { week: 4, title: "Suffering for the Mission", episodes: ["Radical: Counting the Cost", "9Marks: Pastoral Support for Missionaries", "Exchange: Persecution and the Church"] },
      { week: 5, title: "Short-Term vs. Long-Term", episodes: ["Radical: Is Short-Term Mission Worth It?", "9Marks: Supporting Long-Term Workers", "Exchange: What Effective Missions Looks Like"] },
      { week: 6, title: "Your Part in the Mission", episodes: ["Radical: Your Role in God's Global Plan", "9Marks: Mobilizing Your Congregation", "Exchange: Go, Send, or Disobey"] },
    ],
  },
];

const PODCAST_VIDEOS = [
  {
    id: "pv-1",
    preacher: "Tim Keller",
    podcast: "The Gospel Coalition",
    title: "The Reason for God at Google",
    videoId: "Kxup3OS5ZhQ",
    description: "Keller makes the case for Christianity to an audience of Google engineers — winsome, rigorous, and deeply human. The best introduction to his apologetic method.",
  },
  {
    id: "pv-2",
    preacher: "John Piper",
    podcast: "Desiring God",
    title: "Don't Waste Your Life",
    videoId: "JHdB1dYAteA",
    description: "Piper's urgent call to spend your one life on what matters. The message behind the book and the Radical movement. Confronting, clarifying, and life-changing.",
  },
  {
    id: "pv-3",
    preacher: "R.C. Sproul",
    podcast: "Ligonier / Truth For Life",
    title: "The Holiness of God",
    videoId: "v6xk8e7gdMA",
    description: "Sproul's landmark teaching on the most neglected attribute of God. His exposition of Isaiah 6 and the seraphim crying 'Holy, holy, holy' is some of the finest theology on video.",
  },
  {
    id: "pv-4",
    preacher: "Louie Giglio",
    podcast: "Passion City Church",
    title: "How Great Is Our God",
    videoId: "X1rPalyUshw",
    description: "Giglio's famous science-and-worship message showing the scale of the universe and the glory of the Creator. One of the most-watched Christian videos of all time.",
  },
  {
    id: "pv-5",
    preacher: "David Platt",
    podcast: "Radical / McLean Bible",
    title: "Radical (Passion 2011)",
    videoId: "yhiHSf_L6_E",
    description: "Platt's Passion 2011 message calling a generation of college students to abandon the American dream and follow Jesus into global mission. Direct, sobering, and urgent.",
  },
  {
    id: "pv-6",
    preacher: "Paul Washer",
    podcast: "HeartCry Missionary Society",
    title: "Shocking Youth Message",
    videoId: "uuabITeO4l8",
    description: "The sermon that shocked a generation of American youth group Christianity. Washer confronts nominal faith and cheap grace with a missionary's urgency. Tens of millions of views.",
  },
];

export default function TopChristianPodcastsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_top-christian-podcasts_tab", "podcasts");
  const [activeCategory, setActiveCategory] = usePersistedState("vine_top-christian-podcasts_active_category", "All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = PODCASTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.host.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const tabs: { id: Tab; label: string }[] = [
    { id: "podcasts", label: "Podcasts" },
    { id: "episodes", label: "Episodes" },
    { id: "listening", label: "Listening Plans" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎧</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Top Christian Podcasts</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 24px" }}>
            The {PODCASTS.length} best Christian podcasts right now &mdash; curated for theology, devotional life, leadership, apologetics, and more. All real, all worth your commute.
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

        {/* PODCASTS TAB */}
        {activeTab === "podcasts" && (
          <>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: MUTED, fontSize: 14 }}>🔍</span>
                <input
                  type="text"
                  aria-label="Search podcasts..." placeholder="Search podcasts..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ background: "transparent", border: "none", outline: "none", color: TEXT, fontSize: 14, width: 180 }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
              {CATEGORIES.map(cat => (
                <button type="button" key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeCategory === cat ? GREEN : BORDER}`, background: activeCategory === cat ? `${GREEN}15` : "transparent", color: activeCategory === cat ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: 60, color: MUTED }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎙️</div>
                <p>No podcasts match your search.</p>
                <button type="button" onClick={() => { setActiveCategory("All"); setSearch(""); }} style={{ color: GREEN, background: "none", border: "none", cursor: "pointer", marginTop: 8 }}>Clear filters</button>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map((p, i) => {
                const open = expanded === p.name;
                return (
                  <div key={i} style={{ background: CARD, border: `1px solid ${open ? p.color + "40" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <button type="button"
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
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 20px" }}>All of these podcasts are free and available wherever you get your podcasts &mdash; Apple Podcasts, Spotify, Pocket Casts, Overcast, and more.</p>
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
          </>
        )}

        {/* EPISODES TAB */}
        {activeTab === "episodes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ marginBottom: 8 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 24, marginBottom: 6 }}>Featured Episodes</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Famous and landmark episodes from the world&rsquo;s best Christian podcasts &mdash; handpicked for depth, impact, and lasting value.
              </p>
            </div>
            {FEATURED_EPISODES.map(ep => (
              <div key={ep.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                  <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{ep.podcast}</span>
                  <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{ep.duration}</span>
                </div>
                <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: "0 0 10px" }}>&ldquo;{ep.episode}&rdquo;</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{ep.description}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {ep.themes.map(t => (
                    <span key={t} style={{ background: `${GREEN}10`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: "12px 16px" }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 11, marginBottom: 4 }}>KEY TAKEAWAY</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{ep.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LISTENING PLANS TAB */}
        {activeTab === "listening" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <div style={{ marginBottom: 8 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 24, marginBottom: 6 }}>Listening Plans</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Structured podcast diets for every stage of the Christian life &mdash; from new believers to apologists to those burdened for global mission.
              </p>
            </div>
            {LISTENING_PLANS.map(plan => (
              <div key={plan.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: "28px 28px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: 0 }}>{plan.title}</h2>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{plan.weeks} weeks</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{plan.description}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 0 }}>
                    {plan.podcasts.map(pod => (
                      <span key={pod} style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 600 }}>{pod}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "0 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Weekly Schedule</div>
                  {plan.weeklySchedule.map(week => (
                    <div key={week.week} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ width: 26, height: 26, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, color: GREEN, fontWeight: 900, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {week.week}
                        </span>
                        <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{week.title}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 36 }}>
                        {week.episodes.map((ep, idx) => (
                          <div key={idx} style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>
                            <span style={{ color: GREEN, marginRight: 6 }}>·</span>{ep}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 24, marginBottom: 8 }}>The Preachers Behind the Podcasts</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The best video messages from the preachers and teachers who power the podcasts on this list &mdash; see them in action.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 24 }}>
              {PODCAST_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0 }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                      <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.preacher}</span>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{v.podcast}</span>
                    </div>
                    <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 15, margin: "0 0 6px" }}>{v.title}</h3>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
