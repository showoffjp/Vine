"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "apps" | "comparison" | "guides" | "videos";

const CATEGORIES = ["All", "Bible Reading", "Study Tools", "Devotionals", "Memorization", "Prayer"];

const APPS = [
  {
    name: "YouVersion Bible App",
    developer: "Life.Church",
    category: "Bible Reading",
    color: GREEN,
    price: "Free",
    platform: "iOS, Android, Web",
    description: "The world's most downloaded Bible app, with over 500 million downloads. Offers 2,000+ Bible translations in 1,300+ languages, hundreds of reading plans (from 30-day to year-long), daily verses, and a Verse of the Day widget. Plans range from topical (anxiety, marriage, prayer) to book-by-book. The community feature allows you to read plans with friends and comment on daily readings. Backed by Life.Church in Edmond, Oklahoma.",
    best_for: "Daily Bible reading and reading plans; accessible entry point for new readers",
    standout_feature: "2,000+ translations; 30,000+ reading plans; free and community-based",
    url: "https://www.youversion.com/",
    initials: "YV",
  },
  {
    name: "Logos Bible Software",
    developer: "Faithlife",
    category: "Study Tools",
    color: PURPLE,
    price: "Free tier + paid plans ($9.99+/month)",
    platform: "iOS, Android, Mac, Windows, Web",
    description: "The most powerful Bible study software in existence, used by seminarians, pastors, and serious students. Logos integrates thousands of commentaries, lexicons, original language tools, and theology resources into one searchable library. Its 'Passage Guide' instantly surfaces commentaries, cross-references, and original language data for any verse. The mobile app is surprisingly full-featured. Seminary students at most evangelical institutions are required to own Logos.",
    best_for: "Serious Bible study; sermon preparation; original language work; theological research",
    standout_feature: "Integrated library of thousands of academic resources; original language tools",
    url: "https://www.logos.com/",
    initials: "LGS",
  },
  {
    name: "Blue Letter Bible",
    developer: "Blue Letter Bible Ministries",
    category: "Study Tools",
    color: "#3B82F6",
    price: "Free",
    platform: "iOS, Android, Web",
    description: "The go-to free Bible study tool for millions of Christians. Features Strong's Concordance integration (click any word to see its Hebrew or Greek original and definition), multiple translations side by side, commentaries from Matthew Henry, Chuck Smith, David Guzik, and others, and word search across the entire Bible. Not as powerful as Logos but entirely free and remarkably capable. The web version is more powerful than the app.",
    best_for: "Free original language study; Strong's concordance; comparing multiple translations",
    standout_feature: "Completely free; Strong's integration; David Guzik's Enduring Word commentary for every chapter",
    url: "https://www.blueletterbible.org/",
    initials: "BLB",
  },
  {
    name: "Olive Tree Bible App",
    developer: "Olive Tree",
    category: "Study Tools",
    color: "#F59E0B",
    price: "Free + resource purchases",
    platform: "iOS, Android, Kindle",
    description: "One of the most established Bible apps, particularly known for working offline (all content downloads to device). Features split-screen reading (Bible + commentary side by side), Study Center (automatically surfaces cross-references and notes for any passage), and a large library of purchasable resources including ESV Study Bible, NIV Cultural Backgrounds Study Bible, and others. Very popular with travelers and those with unreliable internet.",
    best_for: "Offline use; travelers; split-screen study with purchased resources",
    standout_feature: "Fully offline; split-screen interface; extensive purchasable library",
    url: "https://www.olivetree.com/",
    initials: "OT",
  },
  {
    name: "Dwell: Audio Bible App",
    developer: "Dwell",
    category: "Bible Reading",
    color: "#EC4899",
    price: "$10.99/month or $89.99/year",
    platform: "iOS, Android",
    description: "An audio-first Bible app that lets you listen to Scripture in multiple voices (male, female, British, American, southern US) with various background music options (acoustic, ambient, cinematic). Studies show that many people retain and engage with audio Scripture more deeply than visual reading. Dwell also offers curated listening plans and the ability to create custom playlists of specific chapters. For those who commute, exercise, or prefer auditory learning.",
    best_for: "Commuters; auditory learners; falling asleep to Scripture; exercise",
    standout_feature: "Multiple voice options; music backgrounds; audio-first design",
    url: "https://dwellapp.io/",
    initials: "DWL",
  },
  {
    name: "Scripture Typer",
    developer: "Scripture Typer",
    category: "Memorization",
    color: "#10B981",
    price: "Free tier + $3.99/month",
    platform: "iOS, Android, Web",
    description: "The most popular Christian memorization app. Uses a progressive system of typing verses from memory, with words fading as memory improves, until the verse can be typed from blank. Allows custom verse sets, pre-built topical collections (identity, anxiety, marriage, etc.), and tracks memorization progress. The typing interaction is significantly more effective for memorization than passive review.",
    best_for: "Scripture memorization; systematic approach to learning verses",
    standout_feature: "Typing-based memorization; progressive difficulty; pre-built topical sets",
    url: "https://scripturetyper.com/",
    initials: "ST",
  },
  {
    name: "Verse Locker",
    developer: "3 Minute Retreat",
    category: "Memorization",
    color: PURPLE,
    price: "Free",
    platform: "iOS, Android",
    description: "A simple, beautifully designed verse memorization app. After choosing a verse, it progressively removes words until the verse must be recalled entirely from memory. Simpler and more elegant than Scripture Typer. Includes a library of pre-selected key memory verses organized by topic. Best for those who want a clean, minimal experience without features they won't use.",
    best_for: "Simple, minimal verse memorization; visual learners",
    standout_feature: "Clean design; progressive reveal system; free",
    url: "https://apps.apple.com/us/app/verse-locker/id1139408781",
    initials: "VL",
  },
  {
    name: "Pray As You Go",
    developer: "Jesuit Media Initiatives",
    category: "Prayer",
    color: "#EF4444",
    price: "Free",
    platform: "iOS, Android, Web",
    description: "A daily audio prayer guide produced by British Jesuit priests. Each episode (10-13 minutes) features music, a Scripture reading, reflection questions, and silence — built around the practice of Ignatian contemplation. Released daily, including special Advent and Lent series. One of the most widely used Catholic prayer apps — also deeply appreciated by many Protestants for its quality and depth. Available via podcast feed as well.",
    best_for: "Daily audio prayer; Ignatian contemplation; commuters",
    standout_feature: "Daily production quality; 13 minutes; completely free; podcast compatible",
    url: "https://pray-as-you-go.org/",
    initials: "PAG",
  },
  {
    name: "Echo Prayer",
    developer: "Echo Prayer",
    category: "Prayer",
    color: "#F59E0B",
    price: "Free tier + $2.99/month",
    platform: "iOS, Android",
    description: "A prayer list and journal app specifically designed for the way Christians actually pray. Create organized prayer lists by category (family, friends, church, unreached peoples), set reminders for specific prayer times, mark prayers as answered, and journal responses. Much cleaner than using a note-taking app for prayer. Allows sharing prayer lists with accountability partners.",
    best_for: "Organized intercessory prayer; tracking answered prayers; prayer accountability",
    standout_feature: "Prayer list organization; answered prayer tracking; sharing with partners",
    url: "https://www.echoprayer.com/",
    initials: "ECH",
  },
  {
    name: "First5",
    developer: "Proverbs 31 Ministries",
    category: "Devotionals",
    color: "#A855F7",
    price: "Free",
    platform: "iOS, Android",
    description: "A devotional app from Proverbs 31 Ministries designed to help the first 5 minutes of your day be with God. Features daily Scripture readings with a brief devotional from Proverbs 31 teachers (Lysa TerKeurst, Nicki Koziarz, and others). Known for being manageable — genuinely 5 minutes — and accessible for women at all stages of faith. One of the most used Christian devotional apps for women.",
    best_for: "Women's devotions; brief daily readings; accessible entry point",
    standout_feature: "Genuinely brief; trustworthy teachers; designed for women",
    url: "https://www.proverbs31.org/first5/",
    initials: "F5",
  },
  {
    name: "The Bible Recap App",
    developer: "Bible Recap",
    category: "Devotionals",
    color: "#00D4AA",
    price: "Free podcast; App subscription",
    platform: "iOS, Android, Podcast",
    description: "Tara-Leigh Cobble's daily podcast (and app) that accompanies the Chronological Bible reading plan. Each episode recaps the previous day's reading in 7-10 minutes, making the narrative and theological connections accessible even in confusing OT passages. One of the fastest-growing Bible reading companion resources — millions of listeners do the reading and then listen to the recap as they commute or exercise.",
    best_for: "Chronological Bible reading; understanding biblical narrative; commuters",
    standout_feature: "Daily 7-10 min recap; narrative connections; millions of listeners",
    url: "https://www.thebiblerecap.com/",
    initials: "TBR",
  },
];

const APP_COMPARISON = [
  {
    id: 1,
    app: "Logos Bible Software",
    translations: "200+",
    originalLanguage: true,
    commentaries: "40,000+ books",
    readingPlans: true,
    free: false,
    bestFor: "Serious scholars",
  },
  {
    id: 2,
    app: "Blue Letter Bible",
    translations: "20+",
    originalLanguage: true,
    commentaries: "50+ free commentaries",
    readingPlans: true,
    free: true,
    bestFor: "Word studies, beginners",
  },
  {
    id: 3,
    app: "YouVersion",
    translations: "2,000+",
    originalLanguage: false,
    commentaries: "Limited",
    readingPlans: true,
    free: true,
    bestFor: "Daily reading, mobile first",
  },
  {
    id: 4,
    app: "Bible Gateway",
    translations: "200+",
    originalLanguage: false,
    commentaries: "Limited online",
    readingPlans: true,
    free: true,
    bestFor: "Translation comparison",
  },
  {
    id: 5,
    app: "Olive Tree",
    translations: "100+",
    originalLanguage: true,
    commentaries: "500+ books",
    readingPlans: true,
    free: false,
    bestFor: "Mobile study with depth",
  },
  {
    id: 6,
    app: "Accordance",
    translations: "200+",
    originalLanguage: true,
    commentaries: "300+ books",
    readingPlans: false,
    free: false,
    bestFor: "Mac users, academics",
  },
];

const APP_GUIDES = [
  {
    id: 1,
    title: "For Daily Reading",
    icon: "📖",
    audience: "Beginners",
    description: "Start with YouVersion or Bible Gateway and pick a structured reading plan. Consistency over intensity — 15 minutes every day beats 2 hours on Saturday. A reading plan removes the daily decision of where to read, which eliminates the most common barrier to daily Bible reading.",
    steps: [
      "Open YouVersion and navigate to Plans — search for a plan that fits your season (New Testament in 90 days, Psalms, or a topical plan)",
      "Enable daily notifications at a time you will realistically read — morning commute, lunch break, or before bed",
      "Track your progress streak — the streak feature creates positive accountability",
      "Share a verse weekly with one friend or family member to create relational accountability",
      "When you finish a plan, immediately start another — the gap between plans is where habits die",
    ],
  },
  {
    id: 2,
    title: "For Word Studies",
    icon: "🔤",
    audience: "Intermediate",
    description: "Blue Letter Bible makes original language study accessible to anyone without seminary training. Understanding the Hebrew and Greek behind key words transforms how you read familiar passages. Every serious Bible student should learn to use Strong's numbers.",
    steps: [
      "Navigate to blueletterbible.org and search for any verse — for example, John 3:16",
      "Click the blue Interlinear/Concordance button (Tools) next to any word",
      "Click the Strong's number (G25 for agape, H2617 for hesed, etc.) to open the lexicon entry",
      "Read the lexicon definition and scroll down to see every occurrence of that word in Scripture",
      "Cross-reference the word's use in 5-10 other passages to understand the full semantic range",
      "Note your findings in a journal or digital note — word study insights compound over time",
    ],
  },
  {
    id: 3,
    title: "For Sermon Prep",
    icon: "📝",
    audience: "Pastors & Teachers",
    description: "Logos Bible Software is the industry standard for professional sermon and Bible study preparation. Its Passage Guide feature — which instantly aggregates commentaries, cross-references, original language data, and theological dictionary entries for any passage — saves hours of manual research.",
    steps: [
      "Open Logos and navigate to Guides > Passage Guide; enter your preaching text",
      "Read through the Exegetical Guide section to identify key Greek or Hebrew terms worth exploring",
      "Open 2-3 commentaries side by side using the parallel panel feature; note areas of scholarly agreement and disagreement",
      "Use the Cross-References section to identify where this passage's themes appear elsewhere in Scripture",
      "Run a Factbook search on key persons, places, or concepts mentioned in the passage",
      "Use the Sermon Editor to draft your outline within Logos, keeping all resources accessible",
    ],
  },
  {
    id: 4,
    title: "For Small Group Study",
    icon: "👥",
    audience: "Group Leaders",
    description: "Bible Gateway's translation comparison feature is ideal for small group contexts — reading the same passage in three or four translations surfaces different nuances and generates natural discussion. No specialized knowledge required; the translations do the interpretive work together.",
    steps: [
      "Go to biblegateway.com and search for your passage in the ESV (a more literal translation)",
      "Use the Compare button to open the same passage in NIV, NLT, and The Message simultaneously",
      "Identify words or phrases that translate differently across versions — these are the most discussion-rich points",
      "Prepare 3-5 questions based on the passage that begin with 'What does this tell us about God?' and 'What does this ask of us?'",
      "Begin your group by reading the passage aloud in two different translations",
      "Close with a specific application question: 'What is one thing from this passage you want to act on this week?'",
    ],
  },
];

const VIDEOS = [
  { id: "Kxup3OS5ZhQ", title: "The Reason for God at Google", speaker: "Tim Keller" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", speaker: "R.C. Sproul" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", speaker: "John Piper" },
  { id: "lsTzXI7cJGA", title: "The Prodigal Sons", speaker: "Tim Keller" },
  { id: "sWMjg7CxIKk", title: "Forgotten God Part 1", speaker: "Francis Chan" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", speaker: "Louie Giglio" },
];

export default function BibleStudyAppsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("apps");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = APPS.filter(a => category === "All" || a.category === category);
  const app = APPS.find(a => a.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible &amp; Prayer Apps Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The apps that help Christians read, study, memorize, and pray &mdash; from YouVersion&rsquo;s 500 million downloads to Logos&rsquo;s seminary-grade tools. Find the one that fits how you actually work.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["apps", "comparison", "guides", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "apps" ? "Apps" : t === "comparison" ? "Comparison" : t === "guides" ? "Guides" : "Videos"}
            </button>
          ))}
        </div>

        {/* Apps tab */}
        {activeTab === "apps" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: app ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((a, i) => (
                  <button key={i} onClick={() => setSelected(selected === a.name ? null : a.name)}
                    style={{ background: selected === a.name ? `${a.color}12` : CARD, border: `1px solid ${selected === a.name ? a.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${a.color}20`, border: `1px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {a.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{a.name}</span>
                          <span style={{ background: `${a.color}15`, color: a.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{a.category}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{a.developer} · {a.price}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{a.platform.split(",")[0]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {app && (
                <div style={{ background: CARD, border: `1px solid ${app.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${app.color}20`, border: `1px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                      {app.initials}
                    </div>
                    <div>
                      <h2 style={{ color: app.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{app.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{app.developer} · {app.price}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    <span style={{ background: `${app.color}12`, color: app.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{app.category}</span>
                    <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 12 }}>{app.platform}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{app.description}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{app.best_for}</p>
                    </div>
                    <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                      <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>STANDOUT FEATURE</div>
                      <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{app.standout_feature}</p>
                    </div>
                  </div>

                  <a href={app.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${app.color}15`, border: `1px solid ${app.color}30`, color: app.color, padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    📱 Visit / Download
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* Comparison tab */}
        {activeTab === "comparison" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              How the six major Bible study platforms compare across the criteria that matter most &mdash; translations, original language tools, commentaries, reading plans, and cost.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", background: CARD, borderRadius: 14, overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: `${BORDER}80` }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>App</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Translations</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Orig. Language</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Commentaries</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Reading Plans</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Free</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", color: MUTED, fontWeight: 700, fontSize: 12, borderBottom: `1px solid ${BORDER}` }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {APP_COMPARISON.map((row, idx) => (
                    <tr key={row.id} style={{ background: idx % 2 === 0 ? "transparent" : `${BORDER}30` }}>
                      <td style={{ padding: "14px 16px", color: TEXT, fontWeight: 700, fontSize: 14, borderBottom: `1px solid ${BORDER}40` }}>{row.app}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: GREEN, fontWeight: 700, fontSize: 13, borderBottom: `1px solid ${BORDER}40` }}>{row.translations}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", borderBottom: `1px solid ${BORDER}40` }}>
                        {row.originalLanguage
                          ? <span style={{ color: GREEN, fontWeight: 900, fontSize: 16 }}>✓</span>
                          : <span style={{ color: MUTED, fontWeight: 900, fontSize: 16 }}>—</span>}
                      </td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: MUTED, fontSize: 12, borderBottom: `1px solid ${BORDER}40` }}>{row.commentaries}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", borderBottom: `1px solid ${BORDER}40` }}>
                        {row.readingPlans
                          ? <span style={{ color: GREEN, fontWeight: 900, fontSize: 16 }}>✓</span>
                          : <span style={{ color: MUTED, fontWeight: 900, fontSize: 16 }}>—</span>}
                      </td>
                      <td style={{ padding: "14px 16px", textAlign: "center", borderBottom: `1px solid ${BORDER}40` }}>
                        {row.free
                          ? <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>Free</span>
                          : <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>Paid</span>}
                      </td>
                      <td style={{ padding: "14px 16px", color: MUTED, fontSize: 12, borderBottom: `1px solid ${BORDER}40` }}>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Guides tab */}
        {activeTab === "guides" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: "0 0 8px" }}>
              The right app used poorly is still poor Bible study. These step-by-step guides show you how to get the most out of each type of app &mdash; matched to your experience level and study goal.
            </p>
            {APP_GUIDES.map(entry => (
              <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{entry.icon}</span>
                  <div>
                    <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{entry.title}</h2>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{entry.audience}</span>
                  </div>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{entry.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entry.steps.map((step, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: `${BORDER}40`, borderRadius: 8, padding: "10px 14px" }}>
                      <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 11, flexShrink: 0 }}>{idx + 1}</span>
                      <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.65 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos tab */}
        {activeTab === "videos" && (
          <div>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Lectures and sermons from teachers who model what serious, joyful engagement with Scripture looks like &mdash; the kind of engagement these apps are designed to support.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                    src={`https://www.youtube.com/embed/${v.id}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{v.speaker}</div>
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
