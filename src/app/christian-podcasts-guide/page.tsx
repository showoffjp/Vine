"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CATEGORY_FILTERS = ["All", "Theology & Doctrine", "Bible Exposition", "Apologetics", "Culture & Current Events", "Prayer & Devotional", "Missions & Global Church", "Family & Relationships"];

const PODCASTS = [
  {
    name: "Renewing Your Mind",
    host: "R.C. Sproul / Stephen Nichols",
    category: "Theology & Doctrine",
    color: GREEN,
    frequency: "Daily",
    length: "25 min",
    description: "The daily broadcast of Ligonier Ministries, originally featuring the teaching of R.C. Sproul (who passed in 2017) and now continuing with Stephen Nichols and guest theologians. Covers systematic theology, church history, Reformed doctrine, and Christian living with extraordinary depth. Ligonier has over 10,000 hours of teaching available — Renewing Your Mind is the daily sampler.",
    best_episodes: "The Holiness of God series; The Consequences of Ideas; Luther and the Reformation",
    why_listen: "The most theologically substantive daily Christian broadcast available. Sproul's clarity and warmth make complex doctrine accessible without dumbing it down.",
    listen_at: "Ligonier.org/rnm; all podcast platforms; free app",
    initials: "RYM",
  },
  {
    name: "Ask Pastor John",
    host: "John Piper",
    category: "Theology & Doctrine",
    color: PURPLE,
    frequency: "3x per week",
    length: "15-20 min",
    description: "John Piper answers one question per episode from listeners worldwide — questions ranging from theological to practical, global to intensely personal. With over 1,800 episodes recorded, Ask Pastor John is one of the most comprehensive Q&A resources in Christian podcasting. Piper's answers consistently reach deeper than the question asked.",
    best_episodes: "Episodes on suffering, the prosperity gospel, sexuality, Calvinism, joy, and the will of God",
    why_listen: "Piper's theological vision — Christian Hedonism, God's glory, the supremacy of Christ — is applied consistently to every question. You get both doctrinal substance and pastoral application.",
    listen_at: "desiringgod.org/askpastorjohn; Spotify; Apple Podcasts",
    initials: "APJ",
  },
  {
    name: "Theology Pugcast",
    host: "Glenn Sunshine, Chris Arnzen, Tom Hervey",
    category: "Theology & Doctrine",
    color: "#3B82F6",
    frequency: "Weekly",
    length: "60-90 min",
    description: "A Reformed theology podcast with a focus on church history, cultural engagement, and theological reflection. The Pugcast (named after G.K. Chesterton's favorite pub) offers the rare combination of scholarly depth and genuine humor. Glenn Sunshine is a professor of Renaissance and Reformation history, bringing historical context that most theology podcasts lack.",
    best_episodes: "Church history series; engaging postmodernism; the Reformed heritage",
    why_listen: "For the combination of theological seriousness and historical grounding. One of the few podcasts where you learn church history and theology simultaneously.",
    listen_at: "theology-pugcast.com; podcast platforms",
    initials: "TPG",
  },
  {
    name: "The Gospel Coalition Podcast",
    host: "Various TGC contributors",
    category: "Culture & Current Events",
    color: "#F59E0B",
    frequency: "3x per week",
    length: "30-45 min",
    description: "The official podcast of The Gospel Coalition — the largest Reformed evangelical network in the world. Episodes cover current cultural issues, theology, book reviews, interviews with pastors and authors, and responses to major events in the church and world. Multiple formats including TGC Podcast, Help Me Teach the Bible, and more.",
    best_episodes: "Culture episodes; interviews with major evangelical leaders; responses to major cultural moments",
    why_listen: "Keeps you current on the conversations happening in Reformed evangelical Christianity — theology engaging culture in real time.",
    listen_at: "thegospelcoalition.org/podcasts; all podcast platforms",
    initials: "TGC",
  },
  {
    name: "The Bible Project Podcast",
    host: "Tim Mackie & Jon Collins",
    category: "Bible Exposition",
    color: "#EF4444",
    frequency: "Weekly",
    length: "60-90 min",
    description: "Long-form conversation between theologian Tim Mackie (PhD in biblical studies) and producer Jon Collins, exploring the literary design, theology, and background of Scripture. Their book-by-book overviews, word studies (shalom, hesed, Torah), and thematic series (Heaven & Earth, Holiness, the Messiah) are among the most educationally rich Bible content available anywhere.",
    best_episodes: "The Cosmic Conflict series; the Image of God series; book overview episodes for Genesis, Isaiah, Revelation",
    why_listen: "Makes the literary architecture of the Bible visible in ways that most seminary education misses. Mackie is one of the finest biblical theologians working in popular media.",
    listen_at: "bibleproject.com/podcasts; Spotify; Apple Podcasts",
    initials: "BPP",
  },
  {
    name: "The Briefing",
    host: "Albert Mohler",
    category: "Culture & Current Events",
    color: GREEN,
    frequency: "Daily (M-F)",
    length: "20-25 min",
    description: "Albert Mohler, president of Southern Seminary, analyzes the day's news headlines from a Christian worldview perspective. The Briefing is one of the most widely listened-to Christian podcasts in the world, helping Christians think about current events — politics, culture, ethics, science — through the lens of Scripture and Christian theology.",
    best_episodes: "Analysis of major SCOTUS decisions; cultural shifts; major ethical issues",
    why_listen: "Mohler is one of the sharpest minds in evangelical public life. The Briefing teaches you how to think about the news — not just what to think — from a consistently Reformed, biblical worldview.",
    listen_at: "albertmohler.com/thebriefing; all podcast platforms",
    initials: "TBR",
  },
  {
    name: "Reasonable Faith Podcast",
    host: "William Lane Craig",
    category: "Apologetics",
    color: "#3B82F6",
    frequency: "Weekly",
    length: "30-50 min",
    description: "William Lane Craig and his co-host Kevin Harris discuss questions submitted by listeners on natural theology, the historicity of the resurrection, ethics, philosophy of religion, and responses to atheist arguments. Craig is the most productive professional Christian philosopher alive and this podcast provides consistent access to his thinking on the cutting edge of apologetics.",
    best_episodes: "Kalam Cosmological Argument episodes; resurrection debates; moral argument series",
    why_listen: "For serious intellectual engagement with the hardest objections to Christian faith. Craig's level of precision is unmatched — he genuinely deals with the strongest version of every objection.",
    listen_at: "reasonablefaith.org/media/rf-podcast; all podcast platforms",
    initials: "RFC",
  },
  {
    name: "Cold Case Christianity Podcast",
    host: "J. Warner Wallace",
    category: "Apologetics",
    color: PURPLE,
    frequency: "Weekly",
    length: "30-45 min",
    description: "J. Warner Wallace is a cold-case homicide detective who became a Christian by applying his forensic investigative skills to the New Testament. His podcast applies detective reasoning to questions about the reliability of the Gospels, the historicity of the resurrection, and the evidence for Christian faith. Accessible and methodologically distinctive.",
    best_episodes: "Gospel reliability series; eyewitness testimony episodes; DNA of Christianity",
    why_listen: "Wallace's detective framework makes historical and evidential apologetics viscerally concrete. His approach is completely different from academic philosophy — grounded in courtroom standards of evidence.",
    listen_at: "coldcasechristianity.com; all podcast platforms",
    initials: "CCC",
  },
  {
    name: "Lectio 365",
    host: "24-7 Prayer / Pete Greig",
    category: "Prayer & Devotional",
    color: "#F59E0B",
    frequency: "Daily",
    length: "10-12 min",
    description: "Lectio 365 is a daily prayer podcast developed by 24-7 Prayer International. Each day includes a Scripture reading, reflection, and guided prayer — morning and evening versions. With over 1 million regular users, it is among the most widely used daily prayer apps globally. Pete Greig and the 24-7 Prayer community contribute to a rotating roster of voices.",
    best_episodes: "Any daily episode — designed for daily repetition rather than binge listening",
    why_listen: "One of the best tools for establishing a daily prayer rhythm. Structured enough to guide beginners, substantive enough to nourish mature Christians. Free and available worldwide.",
    listen_at: "24-7prayer.com/resources/lectio365; free app on iOS and Android; all podcast platforms",
    initials: "L65",
  },
  {
    name: "Missions Podcast (Desiring God)",
    host: "Various / Desiring God missions team",
    category: "Missions & Global Church",
    color: "#10B981",
    frequency: "Weekly",
    length: "30-45 min",
    description: "Desiring God's missions-focused content explores the theology of missions, profiles of missionaries, the unreached people groups, the advance of the gospel in the global South, and the local church's role in world evangelization. Deeply theological and practically challenging.",
    best_episodes: "Profiles of Wycliffe Bible translators; persecution reports; the unfinished task",
    why_listen: "Grounds missions passion in solid biblical theology. Piper's theological vision — the supremacy of Christ among all peoples — runs through every episode.",
    listen_at: "desiringgod.org/missions; also search Desiring God Missions Podcast on all platforms",
    initials: "DGM",
  },
  {
    name: "Focus on the Family Broadcast",
    host: "Jim Daly",
    category: "Family & Relationships",
    color: "#EC4899",
    frequency: "Daily (M-F)",
    length: "25 min",
    description: "The daily broadcast of Focus on the Family — the largest evangelical family ministry in the world, founded by James Dobson. Covers marriage, parenting, singleness, sexuality, and cultural issues affecting families from a biblical perspective. Guests include leading Christian psychologists, pastors, and family advocates.",
    best_episodes: "Marriage series; parenting teenagers; sexual integrity; faith and mental health",
    why_listen: "The most widely distributed evangelical family broadcast in the world. Practically applicable, biblically grounded, and accessible to families at every stage.",
    listen_at: "focusonthefamily.com/broadcast; all podcast platforms; SiriusXM Family Talk",
    initials: "FOF",
  },
  {
    name: "Help Me Teach the Bible",
    host: "Nancy Guthrie",
    category: "Bible Exposition",
    color: GREEN,
    frequency: "Bi-weekly",
    length: "45-60 min",
    description: "Nancy Guthrie interviews leading biblical scholars and pastor-teachers on how to teach specific books or themes of the Bible — Genesis, Psalms, Daniel, Revelation, the parables, the atonement. Aimed at teachers and small group leaders but valuable for any serious Bible student. TGC-affiliated and consistently excellent.",
    best_episodes: "Daniel episodes; Revelation teaching; Psalms series; preaching the parables",
    why_listen: "Bridges the gap between academic biblical scholarship and practical church teaching. Guthrie is one of the finest interviewers in Christian media.",
    listen_at: "thegospelcoalition.org/podcasts/help-me-teach-the-bible; all platforms",
    initials: "HMT",
  },
];

export default function ChristianPodcastsGuidePage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = PODCASTS.filter(p => category === "All" || p.category === category);
  const podcast = PODCASTS.find(p => p.name === selected);

  const CAT_COLOR: Record<string, string> = {
    "Theology & Doctrine": GREEN,
    "Bible Exposition": "#EF4444",
    "Apologetics": "#3B82F6",
    "Culture & Current Events": "#F59E0B",
    "Prayer & Devotional": PURPLE,
    "Missions & Global Church": "#10B981",
    "Family & Relationships": "#EC4899",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎧</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Essential Christian Podcasts</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            From Renewing Your Mind to Lectio 365 — the podcasts that provide the deepest, most consistent spiritual and theological nourishment available on-demand. Curated for substance, not popularity.
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

        <div style={{ display: "grid", gridTemplateColumns: podcast ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((p, i) => (
              <button key={i} onClick={() => setSelected(selected === p.name ? null : p.name)}
                style={{ background: selected === p.name ? `${p.color}12` : CARD, border: `1px solid ${selected === p.name ? p.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                    {p.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{p.name}</span>
                      <span style={{ background: `${CAT_COLOR[p.category] || GREEN}15`, color: CAT_COLOR[p.category] || GREEN, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{p.category}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{p.host} · {p.frequency} · {p.length}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {podcast && (
            <div style={{ background: CARD, border: `1px solid ${podcast.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
              <h2 style={{ color: podcast.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{podcast.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{podcast.host} · {podcast.frequency} · {podcast.length}</div>

              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{podcast.description}</p>

              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHY LISTEN</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{podcast.why_listen}</p>
              </div>

              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST EPISODES TO START WITH</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{podcast.best_episodes}</p>
              </div>

              <div style={{ background: `${podcast.color}08`, border: `1px solid ${podcast.color}20`, borderRadius: 8, padding: 10 }}>
                <div style={{ color: podcast.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WHERE TO LISTEN</div>
                <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{podcast.listen_at}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
