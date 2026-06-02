"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "podcasts" | "topics" | "howto" | "videos";

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

const PODCAST_TOPICS = [
  {
    id: 1,
    topic: "Theology & Doctrine",
    icon: "🎓",
    bestFor: "Go deep on what Christians believe and why",
    podcasts: ["Theology in the Raw", "The Gospel Coalition Podcast", "Reformed Forum"],
  },
  {
    id: 2,
    topic: "Apologetics",
    icon: "🛡️",
    bestFor: "Learn to defend your faith",
    podcasts: ["Unbelievable? (Premier)", "CrossExamined (Frank Turek)", "The Alisa Childers Podcast"],
  },
  {
    id: 3,
    topic: "Spiritual Formation",
    icon: "🌱",
    bestFor: "Grow in your walk with God",
    podcasts: ["The Bible Project Podcast", "You and Me Both (Lisa Anderson)", "Pray As You Go"],
  },
  {
    id: 4,
    topic: "Marriage & Family",
    icon: "❤️",
    bestFor: "Strengthen your relationships",
    podcasts: ["Focus on the Family Broadcast", "The Art of Relationships", "FamilyLife Today"],
  },
  {
    id: 5,
    topic: "Cultural Engagement",
    icon: "🌍",
    bestFor: "Think Christianly about culture",
    podcasts: ["The Briefing (Mohler)", "BreakPoint", "The World and Everything In It (WORLD)"],
  },
  {
    id: 6,
    topic: "Missions & Global Church",
    icon: "✈️",
    bestFor: "Stay connected to the global body",
    podcasts: ["Radical Podcast (Platt)", "Missions Podcast", "30 Days of Prayer"],
  },
];

const PODCAST_GUIDE = [
  {
    id: 1,
    title: "Build a Listening Rhythm",
    icon: "⏰",
    description: "Intentional consumption beats passive background noise. Set specific contexts for podcast listening so your mind is actually engaged with what you hear rather than treating teaching like ambient sound.",
    tips: [
      "Reserve morning drives for theological content when your mind is fresh",
      "Use walks and outdoor time for longer-form teaching episodes",
      "Save lighter devotional content for household chores and routine tasks",
    ],
  },
  {
    id: 2,
    title: "Take Notes as You Listen",
    icon: "📝",
    description: "Treat podcast time as learning time, not entertainment time. The act of writing forces active engagement with ideas and creates a retrievable record of what you have learned.",
    tips: [
      "Keep a dedicated notebook or note app open while listening",
      "Write down one key insight, one question, and one application per episode",
      "Review your notes weekly to reinforce what you have heard",
    ],
  },
  {
    id: 3,
    title: "Discuss What You Hear",
    icon: "👥",
    description: "Learning deepens through conversation. Sharing an insight with another person forces you to articulate it clearly, which reveals whether you actually understood it.",
    tips: [
      "Share one insight per week with a friend, spouse, or small group member",
      "Ask others what they are currently listening to and why",
      "Use podcast content as a prompt for family or discipleship conversations",
    ],
  },
  {
    id: 4,
    title: "Evaluate Theologically",
    icon: "⚖️",
    description: "Not every popular podcast is theologically sound. Popularity is not a mark of orthodoxy. Compare what you hear with Scripture and with the teaching of your local church.",
    tips: [
      "Ask your pastor whether a podcast you enjoy is theologically reliable",
      "Check whether the host holds to historic Christian orthodoxy on core doctrines",
      "Note when a podcast consistently avoids difficult biblical texts or doctrines",
    ],
  },
  {
    id: 5,
    title: "Avoid Substituting Podcasts for Church",
    icon: "⛪",
    description: "Podcasts can supplement but cannot replace the embodied community of a local church. Sacraments, accountability, physical presence, and shared suffering are irreplaceable — no podcast can deliver them.",
    tips: [
      "If a podcast feels more like church than your actual church, examine why",
      "Use podcast content to deepen your engagement with your local congregation, not escape it",
      "Remember that discipleship requires presence, not just information",
    ],
  },
];

const PODCAST_VIDEOS = [
  { id: "Kxup3OS5ZhQ", title: "The Reason for God", preacher: "Tim Keller" },
  { id: "by8ykv7-A3c", title: "Supremacy of Christ and Truth", preacher: "Voddie Baucham" },
  { id: "v6xk8e7gdMA", title: "The Holiness of God", preacher: "R.C. Sproul" },
  { id: "JHdB1dYAteA", title: "Don't Waste Your Life", preacher: "John Piper" },
  { id: "yhiHSf_L6_E", title: "Radical — Passion 2011", preacher: "David Platt" },
  { id: "X1rPalyUshw", title: "How Great Is Our God", preacher: "Louie Giglio" },
];

export default function ChristianPodcastsGuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>("podcasts");
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
            From Renewing Your Mind to Lectio 365 &mdash; the podcasts that provide the deepest, most consistent spiritual and theological nourishment available on-demand. Curated for substance, not popularity.
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6, width: "fit-content" }}>
          {(["podcasts", "topics", "howto", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "podcasts" ? "Podcasts" : t === "topics" ? "By Topic" : t === "howto" ? "How to Listen" : "Videos"}
            </button>
          ))}
        </div>

        {/* Podcasts Tab */}
        {activeTab === "podcasts" && (
          <>
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
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{p.host} &middot; {p.frequency} &middot; {p.length}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {podcast && (
                <div style={{ background: CARD, border: `1px solid ${podcast.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <h2 style={{ color: podcast.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{podcast.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{podcast.host} &middot; {podcast.frequency} &middot; {podcast.length}</div>

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
          </>
        )}

        {/* Topics Tab */}
        {activeTab === "topics" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🗺️</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Not sure where to start? Use this topic guide to find the right podcasts for what you need most right now &mdash; whether you&rsquo;re building doctrine, defending faith, or deepening prayer.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {PODCAST_TOPICS.map(topic => (
                <div key={topic.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{topic.icon}</div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 16, margin: "0 0 6px" }}>{topic.topic}</h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{topic.bestFor}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {topic.podcasts.map((name, pi) => (
                      <div key={pi} style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: "6px 12px", color: TEXT, fontSize: 13, fontWeight: 600 }}>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How to Listen Tab */}
        {activeTab === "howto" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 28, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>📖</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Listening to podcasts is not the same as learning from them. These five practices will help you get maximum spiritual and intellectual value from the time you invest.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {PODCAST_GUIDE.map(item => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: "0 0 6px" }}>{item.title}</h3>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                    </div>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 8 }}>PRACTICAL TIPS</div>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {item.tips.map((tip, ti) => (
                        <li key={ti} style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: ti < item.tips.length - 1 ? 6 : 0 }}>{tip}</li>
                      ))}
                    </ul>
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
                Essential video teaching from some of the most important Christian voices of our generation &mdash; the same preachers behind the most influential Christian podcasts.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 20 }}>
              {PODCAST_VIDEOS.map(v => (
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
    </div>
  );
}
