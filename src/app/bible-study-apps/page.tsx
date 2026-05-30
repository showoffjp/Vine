"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function BibleStudyAppsPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = APPS.filter(a => category === "All" || a.category === category);
  const app = APPS.find(a => a.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Bible & Prayer Apps Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The apps that help Christians read, study, memorize, and pray — from YouVersion's 500 million downloads to Logos's seminary-grade tools. Find the one that fits how you actually work.
          </p>
        </div>

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
      </div>
    </div>
  );
}
