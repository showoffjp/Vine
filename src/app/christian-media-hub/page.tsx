"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const YOUTUBE_CHANNELS = [
  { name: "The Bible Project", handle: "@TheBibleProject", subs: "4.8M", desc: "Animated videos exploring every book of the Bible and its major themes. Theologically rich, visually stunning, completely free. Start with any 'Book Overview' or the 'Gospel of Mark' series.", focus: "Biblical Theology", color: GREEN, url: "https://youtube.com/@TheBibleProject" },
  { name: "Desiring God", handle: "@desiringGod", subs: "1.1M", desc: "The full library of John Piper's preaching, along with Ask Pastor John episodes, interviews, and articles brought to video. Strongly Reformed, deeply devotional.", focus: "Reformed Theology", color: PURPLE, url: "https://youtube.com/@desiringGod" },
  { name: "Elevation Church", handle: "@ElevationChurch", subs: "4.2M", desc: "Steven Furtick's full sermon archive from Elevation Church, Charlotte. High production, emotionally compelling, Gospel-centered preaching. Among the most-watched church channels on YouTube.", focus: "Evangelical Preaching", color: "#00D4AA", url: "https://youtube.com/@ElevationChurch" },
  { name: "Grace to You", handle: "@GraceToYou", subs: "820K", desc: "John MacArthur's complete preaching archive — thousands of hours of expository preaching through every book of the New Testament, and much of the Old. The deepest free sermon library online.", focus: "Expository Preaching", color: "#3B82F6", url: "https://youtube.com/@GraceToYou" },
  { name: "Truth For Life", handle: "@TruthForLife", subs: "360K", desc: "Alistair Begg's daily expository preaching from Parkside Church. One of the finest preachers in the English-speaking world — warm, faithful, deeply textual.", focus: "Expository Preaching", color: "#F59E0B", url: "https://youtube.com/@TruthForLife" },
  { name: "Ligonier Ministries", handle: "@LigonierMinistries", subs: "760K", desc: "R.C. Sproul's teaching library plus content from Sinclair Ferguson, Derek Thomas, and others. The best resource for systematic theology in accessible video format.", focus: "Reformed Theology", color: "#EF4444", url: "https://youtube.com/@LigonierMinistries" },
  { name: "Life.Church", handle: "@LifeChurch", subs: "1.9M", desc: "Craig Groeschel's weekly teaching plus resources from one of America's largest and most innovative churches. Practical, accessible, and Gospel-driven.", focus: "Church & Leadership", color: "#EC4899", url: "https://youtube.com/@LifeChurch" },
  { name: "The Gospel Coalition", handle: "@TheGospelCoalition", subs: "450K", desc: "Conference messages, interviews, and teaching from TGC's vast network of Reformed evangelical pastors and theologians. Includes content from Keller, Carson, Piper, and dozens of others.", focus: "Theology & Culture", color: "#8B5CF6", url: "https://youtube.com/@TheGospelCoalition" },
];

const WEBSITES = [
  { name: "Desiring God", url: "https://www.desiringgod.org", desc: "John Piper's ministry library — thousands of free articles, sermons, and books on theology and the Christian life. Reformed, devotional, and deeply serious.", tag: "Theology", color: PURPLE },
  { name: "The Gospel Coalition", url: "https://www.thegospelcoalition.org", desc: "Articles, reviews, and resources from a broadly Reformed evangelical coalition. Best for theology, church issues, cultural engagement, and book reviews.", tag: "Theology & Culture", color: GREEN },
  { name: "Christianity Today", url: "https://www.christianitytoday.com", desc: "The flagship magazine of American evangelicalism since Billy Graham founded it in 1956. Features investigative journalism, cultural commentary, and theology for a broad audience.", tag: "News & Culture", color: "#3B82F6" },
  { name: "Relevant Magazine", url: "https://relevantmagazine.com", desc: "Faith and culture for younger Christians — interviews, entertainment, news, and faith commentary. Accessible, culturally fluent, broadly evangelical.", tag: "Culture", color: "#EC4899" },
  { name: "Ligonier Ministries", url: "https://www.ligonier.org", desc: "R.C. Sproul's teaching ministry. Thousands of free articles and teaching series on Reformed theology, including Sproul's full Renewing Your Mind archive.", tag: "Reformed Theology", color: "#EF4444" },
  { name: "9Marks", url: "https://www.9marks.org", desc: "Mark Dever's church health ministry. Focused on local church ecclesiology — what a healthy church looks like, how to plant and lead one, and how to think about church membership and discipline.", tag: "Ecclesiology", color: "#F59E0B" },
  { name: "Crossway Blog", url: "https://www.crossway.org/articles", desc: "Scholarly articles from Crossway, publisher of the ESV Bible and dozens of the most important theology books of the last 20 years. Deep, trustworthy, Reformed.", tag: "Theology", color: "#10B981" },
  { name: "Mere Orthodoxy", url: "https://mereorthodoxy.com", desc: "Long-form essays on theology, philosophy, politics, and culture from a classically orthodox Christian perspective. For the intellectually serious Christian.", tag: "Intellectual Faith", color: "#8B5CF6" },
];

const LIFE_HACKS = [
  { title: "The SOAP Bible Study Method", icon: "📖", desc: "Scripture (read the text) → Observation (what does it say?) → Application (what does it mean for me?) → Prayer (pray it back to God). The most practical 4-step Bible study method for individuals and groups. Takes 10-20 minutes per passage.", category: "Bible" },
  { title: "Read One Proverb Per Day", icon: "🧠", desc: "Proverbs has 31 chapters — one for each day of the month. Read the chapter that matches the date. By the end of the year you will have read Proverbs 12 times. Practical wisdom compounds over time.", category: "Bible" },
  { title: "The YouVersion Bible App", icon: "📱", desc: "The #1 Bible app with 600+ reading plans, 2,000+ versions, and a Verse of the Day. The Friends feature lets you read plans with others and share observations. Free, no ads, no account required to access the Bible.", category: "App" },
  { title: "The Five-Finger Prayer", icon: "✋", desc: "Thumb (those closest to you), Index finger (teachers and leaders), Middle finger (those in authority), Ring finger (the weak), Pinky (yourself). A simple physical structure for intercession that covers the range of people who need prayer.", category: "Prayer" },
  { title: "The Daily Examen Before Bed", icon: "🌙", desc: "Ignatius Loyola's practice: (1) Give thanks for the day's gifts. (2) Notice where you felt God's presence. (3) Acknowledge where you fell short. (4) Ask for help tomorrow. Takes 5-10 minutes. Transforms how you process each day.", category: "Prayer" },
  { title: "Listen to The Bible Recap in the Car", icon: "🚗", desc: "Tara-Leigh Cobble's daily podcast covers that day's Bible reading in 20-25 minutes. Listen on your commute and you will read through the entire Bible in a year without adding any extra time to your schedule. Free on all podcast apps.", category: "Podcast" },
  { title: "The Prayer of Examen in Groups", icon: "👥", desc: "When your small group meets, open with a brief Examen: where did you sense God this week? Where did you resist him? This 10-minute practice turns any gathering into a space of honest spiritual reflection before the discussion begins.", category: "Community" },
  { title: "Morning Pages for Spiritual Life", icon: "✏️", desc: "Write three handwritten pages first thing in the morning, addressed to God. No editing, no censorship — just whatever is on your heart. Writers know this as Morning Pages (Julia Cameron). For Christians it becomes a prayer journal that surfaces what you didn't know you needed to pray.", category: "Journaling" },
  { title: "Scripture Memory with Anki", icon: "🃏", desc: "Anki is a free spaced-repetition flashcard app designed for language learning. Use it for Scripture memorization. Add one verse per week, set the deck to review daily, and the algorithm ensures you see each verse at the optimal moment for long-term retention.", category: "App" },
  { title: "The Lectio Divina Four Moves", icon: "🕊️", desc: "Lectio (read slowly), Meditatio (sit with what strikes you), Oratio (pray from that place), Contemplatio (rest in God's presence). Take one paragraph of Scripture and move through all four in 15 minutes. The oldest Christian way of reading Scripture.", category: "Prayer" },
  { title: "Set a Phone Alarm Called 'Pray'", icon: "⏰", desc: "Set an alarm — morning, noon, 3pm, evening — labeled simply 'Pray.' When it fires, stop for 30 seconds and turn your heart toward God. The fixed-hour prayer tradition of the church practiced in the age of the smartphone. Simple and surprisingly powerful.", category: "Prayer" },
  { title: "The 3 Gratitudes Practice", icon: "🌿", desc: "Every morning, before anything else, name three specific things you are grateful to God for. Not vague categories — specific gifts from the specific day before. Research confirms this practice rewires the brain toward gratitude; Scripture commands it (1 Thessalonians 5:18).", category: "Habit" },
  { title: "Pray Before You Post", icon: "💬", desc: "Before posting anything on social media — especially on controversial topics — pause and ask: Is this true? Is this kind? Is this necessary? Is this for God's glory or my image? This 15-second habit reduces online self-promotion and increases thoughtful witness.", category: "Digital" },
  { title: "The Lord's Prayer as a Framework", icon: "🙏", desc: "Use each phrase of the Lord's Prayer as a category for your own prayer: Our Father (begin with relationship), hallowed be your name (adoration), your kingdom come (intercession), give us today our daily bread (petition), forgive us (confession), deliver us (spiritual warfare). The Lord's Prayer is a complete prayer framework.", category: "Prayer" },
  { title: "Read Church History for Perspective", icon: "📚", desc: "Whatever crisis feels unique and overwhelming today, the church has almost certainly faced before — and survived. Reading church history gives perspective that nothing in the news cycle can provide. Start with Justo González's two-volume Story of Christianity — readable, comprehensive, Orthodox.", category: "Reading" },
];

const CATEGORIES = ["All", "Bible", "Prayer", "App", "Journaling", "Community", "Habit", "Digital", "Podcast", "Reading"];

const VIDEOS = [
  { videoId: "dXxmSDhvbHY", title: "Best Christian Podcasts to Listen to", channel: "The Gospel Coalition", description: "A curated guide to the most trustworthy and theologically rich Christian podcasts available today — covering theology, preaching, culture, and the Christian life. A helpful starting point for anyone wanting to redeem their listening time." },
  { videoId: "sxMhDVkdULw", title: "Christian Media That's Actually Worth Your Time", channel: "Tim Keller", description: "Tim Keller reflects on discernment in media consumption — which Christian content genuinely forms the soul, what to look for in good teaching, and how to evaluate the explosion of digital Christian content with wisdom rather than just familiarity." },
  { videoId: "ACZbpLkY8To", title: "Using Media for Gospel Impact", channel: "Desiring God", description: "How Christians can leverage digital media — YouTube, podcasting, social platforms — not just to consume but to bear witness. Practical theology for the age of screens, rooted in the conviction that all of life is for God's glory." },
  { videoId: "E9P76VJIcRY", title: "Christian YouTube Channels Worth Following", channel: "Ligonier Ministries", description: "Ligonier Ministries walks through the YouTube channels most worth subscribing to for theological depth, expository preaching, and faithful Christian engagement with culture — a useful guide for building a spiritually formative media diet." },
];

const PODCASTS = [
  { name: "Ask Pastor John", host: "John Piper", freq: "Daily", desc: "John Piper answers a listener question every weekday — spanning theology, life, relationships, suffering, and Scripture. Over 1,900 episodes. The deepest daily podcast in Christian media. Searchable by topic.", focus: "Theology & Life", color: PURPLE },
  { name: "The Bible Project Podcast", host: "Tim Mackie & Jon Collins", freq: "Weekly", desc: "Extended, detailed exploration of the themes, literary structures, and theology behind the Bible Project's animated videos. Tim Mackie's Bible scholarship made accessible. One of the best resources for understanding Scripture's big picture.", focus: "Biblical Theology", color: GREEN },
  { name: "The Briefing", host: "Al Mohler", freq: "Daily", desc: "20-30 minutes of news analysis from a distinctly Christian worldview. Mohler surveys major news stories and cultural developments through the lens of Christian theology and ethics. Five days a week; indispensable for Christians who want to think carefully about the world.", focus: "Culture & Ethics", color: "#EF4444" },
  { name: "Truth For Life", host: "Alistair Begg", freq: "Daily", desc: "Alistair Begg's expository preaching from Parkside Church — warm, faithful, and deeply textual. Daily episodes run 20-25 minutes. One of the finest preachers in English. Decades of content available free.", focus: "Expository Preaching", color: "#F59E0B" },
  { name: "The Gospel Coalition Podcast", host: "Multiple Hosts", freq: "Weekly", desc: "Interviews, panel discussions, and cultural commentary from TGC's network. Features pastors, theologians, and authors on theology, church life, and cultural engagement. Wide range of Reformed evangelical voices.", focus: "Theology & Culture", color: "#3B82F6" },
  { name: "Mere Fidelity", host: "Alastair Roberts, Andrew Wilson et al.", freq: "Biweekly", desc: "Serious theological and cultural discussion from a classically Orthodox Anglican perspective. Episodes go deep on hermeneutics, ethics, ecclesiology, and culture. For the intellectually serious Christian who wants more than surface-level engagement.", focus: "Classical Orthodoxy", color: "#8B5CF6" },
  { name: "Life & Books & Everything", host: "Kevin DeYoung, Scott Swain, Todd Pruitt", freq: "Weekly", desc: "Reformed pastors discuss books, theology, church life, and cultural issues in a relaxed, collegial format. Warm and substantive. A good model of Christian intellectual friendship.", focus: "Reformed Theology", color: "#10B981" },
  { name: "The Bible Recap", host: "Tara-Leigh Cobble", freq: "Daily", desc: "Daily 20-minute recap of that day's Bible reading — designed for the Bible Recap reading plan that covers the whole Bible in a year. Accessible, enthusiastic, and faithful. Used by millions; perfect for commutes.", focus: "Bible Reading", color: "#EC4899" },
];

export default function ChristianMediaHubPage() {
  const [activeSection, setActiveSection] = usePersistedState<"channels" | "websites" | "hacks" | "podcasts" | "videos">("vine_christian-media-hub_active_section", "hacks");
  const [hackCat, setHackCat] = usePersistedState<string>("vine_christian-media-hub_hack_cat", "All");

  const filteredHacks = hackCat === "All" ? LIFE_HACKS : LIFE_HACKS.filter(h => h.category === hackCat);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📡</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Media Hub</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            The best real Christian content on the internet — top YouTube channels, trusted websites, and proven daily life hacks for following Jesus.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 36, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "hacks" as const, label: "Life Hacks", icon: "⚡" },
            { id: "channels" as const, label: "YouTube", icon: "▶️" },
            { id: "websites" as const, label: "Websites", icon: "🌐" },
            { id: "podcasts" as const, label: "Podcasts", icon: "🎙️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveSection(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeSection === t.id ? PURPLE : "transparent", color: activeSection === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeSection === "hacks" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                15 real, practical daily habits and tools for the Christian life — tested by millions of believers, rooted in Scripture, and immediately applicable.
              </p>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {CATEGORIES.map(cat => (
                <button type="button" key={cat} onClick={() => setHackCat(cat)}
                  style={{ padding: "5px 14px", borderRadius: 20, border: `1px solid ${hackCat === cat ? GREEN : BORDER}`, background: hackCat === cat ? `${GREEN}15` : "transparent", color: hackCat === cat ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {filteredHacks.map((h, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{h.icon}</span>
                    <div>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 2 }}>{h.title}</div>
                      <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{h.category}</span>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "channels" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The 8 best Christian YouTube channels — ranked by theological depth, production quality, and faithfulness to Scripture. All free, all worth subscribing.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {YOUTUBE_CHANNELS.map((ch, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${ch.color}20`, border: `1px solid ${ch.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 20 }}>▶</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{ch.name}</span>
                        <span style={{ color: MUTED, fontSize: 13 }}>{ch.handle}</span>
                        <span style={{ background: `${ch.color}15`, color: ch.color, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{ch.focus}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{ch.subs} subscribers</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>{ch.desc}</p>
                      <a href={ch.url} target="_blank" rel="noopener noreferrer"
                        style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        ▶ Open on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "websites" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The 8 most trusted Christian websites for theology, culture, news, and formation. Bookmarkable, citeable, reliable.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {WEBSITES.map((site, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: `${site.color}20`, border: `1px solid ${site.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>🌐</div>
                    <div>
                      <div style={{ color: site.color, fontWeight: 800, fontSize: 15 }}>{site.name}</div>
                      <span style={{ background: `${site.color}12`, color: site.color, padding: "1px 8px", borderRadius: 6, fontSize: 10, fontWeight: 700 }}>{site.tag}</span>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: "0 0 14px" }}>{site.desc}</p>
                  <a href={site.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${site.color}12`, border: `1px solid ${site.color}25`, color: site.color, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Visit Site →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "podcasts" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The best Christian podcasts for theology, preaching, Bible study, and cultural engagement. All free, all worth subscribing. Listen while commuting, exercising, or doing anything that lets your mind be fed.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PODCASTS.map((pod, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${pod.color}20`, border: `1px solid ${pod.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 20 }}>🎙️</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 16 }}>{pod.name}</span>
                        <span style={{ background: `${pod.color}15`, color: pod.color, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{pod.focus}</span>
                        <span style={{ background: `${BORDER}`, color: MUTED, padding: "1px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{pod.freq}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>Hosted by {pod.host}</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pod.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
