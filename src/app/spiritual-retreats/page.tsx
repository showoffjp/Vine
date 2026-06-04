"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "centers" | "howto" | "traditions" | "voices" | "videos";

const SR_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Why Every Christian Needs a Retreat", channel: "Gospel in Life", description: "The biblical case for periodic withdrawal, silence, and extended prayer — and how to make it work in a busy life." },
  { videoId: "ACZbpLkY8To", title: "The Ignatian Retreat — What It Is and Why It Matters", channel: "Ligonier Ministries", description: "An introduction to the Spiritual Exercises of Ignatius and what Protestant Christians can learn from this tradition." },
  { videoId: "fJnGJN6laqE", title: "Solitude as Spiritual Warfare — Henri Nouwen", channel: "Desiring God", description: "Nouwen's argument that solitude is not escape but the practice that makes genuine community possible." },
  { videoId: "Z8lkuuhVkOI", title: "Planning Your Personal Retreat — A Practical Guide", channel: "The Gospel Coalition", description: "Step-by-step guidance for planning a half-day, full-day, or weekend personal spiritual retreat on your own." },
];

const VOICES_SR = [
  {
    id: "merton-t",
    name: "Thomas Merton",
    era: "1915–1968 · Trappist Monk",
    context: "New Seeds of Contemplation",
    bio: "Thomas Merton, Trappist monk at the Abbey of Gethsemani in Kentucky, became the 20th century's most widely read guide to contemplative retreat. His autobiography The Seven Storey Mountain (1948) sold 600,000 copies and inspired thousands to explore monastic life or contemplative practice. His New Seeds of Contemplation remains the most accessible guide to contemplative prayer. Merton saw solitude not as escape from the world but as the place where genuine encounter with God — and therefore genuine encounter with one's true self and others — becomes possible.",
    quote: "In the solitude of the hermitage, I realize that I love the world more than I did when I was in it. Not because I am apart from it — but because I am closer to what gives it life.",
    contribution: "Merton introduced contemplative retreat practice to millions of Protestant and evangelical readers who would never have approached monastic spirituality without his accessible prose. His insistence that contemplation is not a specialist practice but the depth dimension of all Christian life opened the retreat tradition to a far wider audience.",
  },
  {
    id: "nouwen-hj",
    name: "Henri Nouwen",
    era: "1932–1996 · Catholic",
    context: "The Way of the Heart",
    bio: "Henri Nouwen, Dutch Catholic priest who taught at Harvard and Yale before spending his final years at the L'Arche Daybreak community in Toronto, wrote some of the most widely read books on solitude, retreat, and the interior life. The Way of the Heart (1981) — based on the desert fathers and mothers — made solitude, silence, and unceasing prayer the framework for his entire spirituality. Nouwen's profound honesty about his own interior struggles made his writing unusually trustworthy.",
    quote: "Solitude is not a private therapeutic place. Rather, it is the place of conversion, the place where the old self dies and the new self is born, the place where the emergence of the new person becomes possible.",
    contribution: "Nouwen's ability to connect the ancient wisdom of the desert fathers to the psychological and spiritual struggles of contemporary people made him the primary pastoral guide for retreat spirituality in the late 20th century. His books are still given by spiritual directors to people beginning the retreat journey.",
  },
  {
    id: "barton-rh",
    name: "Ruth Haley Barton",
    era: "b. 1956 · Evangelical",
    context: "Invitation to Retreat",
    bio: "Ruth Haley Barton's Invitation to Retreat (2018) is the most comprehensive evangelical guide to retreat practice in print. Co-founder of the Transforming Center, Barton brought the retreat tradition into evangelical and ministry contexts where it had been largely absent. Her work distinguishes different types of retreat (from quiet days to 30-day silent retreats), addresses the particular obstacles leaders face in practicing silence, and provides structured guidance for planning and leading retreats.",
    quote: "A retreat is not a vacation. It is not an escape. It is an intentional movement toward God in the quiet — a willingness to be with Him without an agenda beyond being with Him.",
    contribution: "Barton's Invitation to Retreat filled a significant gap in evangelical spirituality by making the retreat tradition accessible to leaders and laypeople who had never experienced extended solitude with God. Her work has become the standard evangelical text on retreat practice.",
  },
  {
    id: "crabb-l",
    name: "Larry Crabb",
    era: "b. 1944 · Evangelical",
    context: "Shattered Dreams",
    bio: "Larry Crabb, Christian psychologist and spiritual director, has written extensively on the retreat experience as an encounter with God in the depths of one's disappointment and longing. His Shattered Dreams (2001) argues that broken expectations and unanswered longings are actually God's invitation to a deeper encounter — and that the retreat is the place where this invitation can be heard. Crabb's integration of depth psychology with contemplative spirituality has made him a formative voice in Christian interior life.",
    quote: "God doesn't fix our problems in order to satisfy our cravings. He uses our problems to awaken us to a deeper hunger that only He can satisfy. Retreat is where we meet that hunger.",
    contribution: "Crabb's work gave the retreat tradition a psychological language that made it accessible to counselors, therapists, and people in pain. His integration of the desert tradition of encountering God in emptiness with contemporary understanding of the human psyche has shaped Christian counseling and spiritual direction in North America.",
  },
  {
    id: "willard-d",
    name: "Dallas Willard",
    era: "1935–2013 · Evangelical",
    context: "The Spirit of the Disciplines",
    bio: "Dallas Willard treated solitude as the foundational discipline from which all others flow. In The Spirit of the Disciplines and Renovation of the Heart, he argued that without extended periods of solitude — which require retreat from ordinary life — the other disciplines cannot function properly. Willard was himself known for practicing extended retreats, and he believed that Jesus' regular withdrawal to solitary places was not incidental to his ministry but constitutive of it. The power of Jesus' public ministry flowed from his private disciplines.",
    quote: "The soul cannot be formed by hurry. The deep work of God in a person requires the slow, long engagement of solitude — a willingness to be with God when nothing else is demanding our attention.",
    contribution: "Willard's theological framework for solitude as the foundational discipline provided the strongest systematic argument for why busy, productive Christians need extended retreat. His argument that Jesus' retreat practice was a model, not an exception, gave retreat practice its most theologically rigorous evangelical foundation.",
  },
];

const CENTERS = [
  {
    name: "Laity Lodge",
    location: "Leakey, Texas (Hill Country)",
    tradition: "Broadly Evangelical",
    color: GREEN,
    description: "Nestled in a canyon on the Frio River in the Texas Hill Country, Laity Lodge is one of the premier retreat centers in America. Founded by Howard Butt Jr. in 1961, it hosts family camps, couples retreats, leadership gatherings, artists conferences, and silent retreats throughout the year. The setting — river canyons, cypress trees, stone chapel — is extraordinary. Used by figures from Billy Graham to Madeleine L'Engle to Eugene Peterson.",
    programs: "Family camps, couples weekends, arts retreats, silence and solitude retreats, ministry leader conferences",
    cost: "Varies by program; some scholarships available",
    url: "laitylodge.org",
    best_for: "Families, leaders, artists, evangelical Christians wanting quality retreat experiences",
    initials: "LL",
  },
  {
    name: "Renovare Retreat Centers",
    location: "Multiple locations (headquartered in Denver, CO)",
    tradition: "Broadly Evangelical / Spiritual Formation",
    color: PURPLE,
    description: "Founded by Richard Foster (author of Celebration of Discipline), Renovare is a spiritual formation ministry that operates retreats, conferences, and formation programs around the integration of spiritual disciplines across the Christian traditions. Their retreats draw from contemplative, holiness, charismatic, social justice, evangelical, and incarnational streams of Christianity.",
    programs: "Spiritual formation conferences, retreat weekends, Soul Care programs, online courses",
    cost: "Varies; scholarships available for full programs",
    url: "renovare.org",
    best_for: "Christians wanting to go deeper in spiritual disciplines; formation across traditions",
    initials: "REN",
  },
  {
    name: "The Hermitage (Three Rivers, MI)",
    location: "Three Rivers, Michigan",
    tradition: "Broadly Christian (ecumenical)",
    color: "#3B82F6",
    description: "A 400-acre retreat center in rural Michigan offering guided and unguided silent retreats, hermitage stays (individual cabins in the woods), directed retreats, and spiritual direction. Run by a community of Servants of Christ, the Hermitage has been hosting seekers for personal retreat since 1961. The silent hermitages — small individual cabins with kitchen and chapel — are among the finest in the country.",
    programs: "Private hermitage stays (3-8 days), guided silent retreats, 8-day Ignatian retreats, directed retreats, day visitors",
    cost: "Suggested donation basis; hermitage stays approximately $65-95/day",
    url: "thehermitage.com",
    best_for: "Anyone wanting genuine solitude; directed retreats; those exploring contemplative prayer",
    initials: "HRM",
  },
  {
    name: "L'Abri Fellowship",
    location: "Huemoz, Switzerland; also England, Netherlands, USA, Korea, Australia, Canada",
    tradition: "Reformed Evangelical",
    color: "#F59E0B",
    description: "Founded by Francis and Edith Schaeffer in 1955 in the Swiss Alps, L'Abri is a community where people can come with serious intellectual and spiritual questions and live alongside Christians who will engage honestly. It is not a program retreat but a community stay — guests eat, work, and study alongside community members. Famous alumni include thousands of skeptics who became Christians and future leaders of the Western church.",
    programs: "Term study (1-3 months), short visits, work-study program; lectures, tutorials, discussions",
    cost: "Suggested contribution; reduced rates for longer stays",
    url: "labri.org",
    best_for: "Seekers; intellectually restless Christians; those wrestling with faith, doubt, or calling; artists",
    initials: "LAB",
  },
  {
    name: "Taize Community",
    location: "Taize, Burgundy, France",
    tradition: "Ecumenical Monastic",
    color: "#EF4444",
    description: "One of the most remarkable Christian communities in the modern world. Founded in 1940 by Brother Roger Schutz as a community of celibate brothers committed to reconciliation between divided Christians. Over 100,000 young adults (mostly 18-30) make pilgrimage to Taize each year for one-week retreats of prayer, silence, Bible study, and song. Taize worship — repetitive, meditative sung prayer — has influenced millions of churches worldwide.",
    programs: "Weekly youth meetings (year-round), Meetings of Young Adults, European Meetings (New Year), intercession, Bible introductions",
    cost: "Minimal (work exchange basis); transportation is main cost",
    url: "taize.fr",
    best_for: "Young adults (18-35); those seeking ecumenical community; anyone wanting to experience Taize prayer in its original context",
    initials: "TZE",
  },
  {
    name: "Iona Community",
    location: "Isle of Iona, Scotland (and Glasgow mainland)",
    tradition: "Celtic / Ecumenical Protestant",
    color: "#10B981",
    description: "Located on the sacred isle off the west coast of Scotland where Columba brought Christianity to Scotland in 563 AD, the Iona Community is a dispersed Christian community based in the Abbey on Iona. The island hosts week-long residential programs from spring through autumn — combining worship, justice, ecology, community, and Celtic spirituality. The wild island setting is extraordinary.",
    programs: "Week-long island programs on themes of justice, faith, healing, ecology, youth; day visitor access",
    cost: "Week programs approximately 500-700 GBP (full board); scholarships available",
    url: "iona.org.uk",
    best_for: "Celtic spirituality; justice-oriented Christians; ecumenical community; UK/European retreatants",
    initials: "ION",
  },
  {
    name: "Ignatius House (Atlanta)",
    location: "Atlanta, Georgia",
    tradition: "Jesuit / Ignatian",
    color: PURPLE,
    description: "A Jesuit retreat house in Atlanta offering individually directed retreats, the full 30-day Ignatian Spiritual Exercises (once in a lifetime retreat), preached retreats, and day programs. The Ignatian tradition of retreats is the most developed and psychologically sophisticated retreat system in Christian history — the 30-day Exercises have formed thousands of saints, pastors, and missionaries since 1548.",
    programs: "8-day directed retreats, 30-day Spiritual Exercises, weekend retreats, Ignatian Spirituality programs, spiritual direction training",
    cost: "8-day retreat approximately $1,200 (all inclusive); financial assistance available",
    url: "ignatiushouse.org",
    best_for: "Those wanting deep Ignatian formation; discernment retreats; spiritual direction; Catholics and spiritually-open Protestants",
    initials: "IGN",
  },
  {
    name: "Kanuga Conference Center",
    location: "Hendersonville, North Carolina (Blue Ridge Mountains)",
    tradition: "Episcopal / Broadly Christian",
    color: "#6366F1",
    description: "A 1,400-acre mountain conference and retreat center owned by the Episcopal Diocese of Western North Carolina. Set in the Blue Ridge Mountains at 2,200 feet elevation, Kanuga hosts hundreds of programs each year for churches, denominational groups, family camps, youth groups, and individuals. Its facilities include a lake, hiking trails, and a chapel. The setting is among the most beautiful in the Eastern United States.",
    programs: "Family camps, youth camps, clergy conferences, parish retreats, quiet days, individual pilgrim stays",
    cost: "Varies widely by program; individual stays from $90-160/night",
    url: "kanuga.org",
    best_for: "Families; youth groups; Episcopal and mainline Protestant churches; anyone wanting mountain retreat setting",
    initials: "KAN",
  },
];

const HOW_TO_STEPS = [
  {
    step: 1,
    title: "Clarify Your Purpose",
    color: GREEN,
    content: "Not all retreats are the same. Are you seeking rest, direction, healing, deepened prayer, a specific decision, or time with God after a season of spiritual dryness? Your purpose determines the type of retreat (silent vs. guided, individual vs. group, 1 day vs. 8 days). Being clear on purpose prevents disappointment.",
    tip: "Write down in one sentence what you hope to bring before God on this retreat.",
  },
  {
    step: 2,
    title: "Choose Your Format",
    color: PURPLE,
    content: "Major formats: (1) Day retreat — 6-8 hours of solitude, prayer, and Scripture, often at a retreat center or outdoor setting near home. (2) Weekend retreat — Friday evening to Sunday afternoon. (3) Silent retreat — 3-8 days of structured silence with optional spiritual direction. (4) Directed retreat — daily meetings with a spiritual director who guides your prayer. (5) 30-day Ignatian Exercises — the deepest retreat experience in Christian history.",
    tip: "First-timers: start with a day retreat before committing to longer formats.",
  },
  {
    step: 3,
    title: "Prepare Practically",
    color: "#3B82F6",
    content: "Pack minimally. Bring: Bible, journal, a few books maximum (better: none, or one), comfortable clothes, walking shoes, and as little technology as possible. Many retreat centers ask you to leave phones in your room during prayer times. The goal is reducing input, not adding more.",
    tip: "Tell people in your life you will be unreachable for the duration. This boundary is itself a spiritual act.",
  },
  {
    step: 4,
    title: "Arrive and Settle",
    color: "#F59E0B",
    content: "Give yourself the first two to four hours simply to decompress. Most people are so accustomed to constant stimulation that the first day of a retreat feels like withdrawal — restlessness, boredom, the urge to check the phone. This is normal. The desert fathers called it acedia. Do not try to pray intensely immediately; simply sit, breathe, walk, and let the noise of normal life drain out.",
    tip: "Eugene Peterson: The first day of every retreat is mostly about getting quiet enough to hear.",
  },
  {
    step: 5,
    title: "Structure Your Days",
    color: "#EF4444",
    content: "A basic structure: Morning prayer (30-60 min), Scripture reading and lectio divina (30-45 min), slow walk or outdoor time, journaling, afternoon rest or reading, Evening prayer. Directed retreats will give you scripture passages and points for prayer. If self-directed, follow a psalm, a Gospel chapter, or a classical text slowly.",
    tip: "Do not try to read through a book. Read slowly. Read one passage until something resonates, then stop and be with it.",
  },
  {
    step: 6,
    title: "The Gift of Spiritual Direction",
    color: "#10B981",
    content: "Many retreat centers offer spiritual direction — a 45-60 minute conversation with a trained director who listens to how you are experiencing God and asks questions that help you pay attention. Spiritual direction is not therapy or pastoral counseling. It is specifically attending to where God is present and moving in your interior life. Even one session of good spiritual direction on a retreat can be transformative.",
    tip: "Find a trained spiritual director at sdworld.org — the Spiritual Directors International directory.",
  },
  {
    step: 7,
    title: "Integrate What You Receive",
    color: GREEN,
    content: "The best retreat gives you two or three things to carry home — not a complete overhaul plan. Write down: one thing you heard, one thing you want to stop, one thing you want to begin. Share it with a spiritual director, pastor, or trusted friend. The desert fathers said: the test of a retreat is what changes six months later.",
    tip: "Book your next retreat before you leave. Retreating regularly — at minimum once a year — is one of the most transformative spiritual habits possible.",
  },
];

const TRADITIONS_DATA = [
  { name: "Ignatian (Jesuit)", color: PURPLE, summary: "The 30-day Spiritual Exercises of Ignatius of Loyola (1548) are the most sophisticated retreat system in Christian history. Based on imaginative prayer with Gospel scenes, examination of conscience, discernment of spirits, and structured movement through sin, Incarnation, Passion, and Resurrection. Available in 30-day intensive form or 9-month daily life version.", url: "ignatianspirituality.com" },
  { name: "Benedictine", color: GREEN, summary: "The Rule of St. Benedict (530 AD) gave the Western church its rhythmic structure: Ora et Labora (pray and work), seven daily prayer offices (Liturgy of the Hours), lectio divina, and community life. Benedictine retreats emphasize stability, silence, liturgical prayer, and the slow reformation of the soul over decades.", url: "americancatholic.org/Messenger/Jun2002/Feature1.asp" },
  { name: "Quaker (Friends) Retreat", color: "#F59E0B", summary: "Quaker retreat centers emphasize unprogrammed silence, waiting on the Spirit together, and corporate discernment. The tradition of centering prayer (popularized by Quakers and then by Thomas Keating OCSO) involves releasing thoughts and resting in God's presence with a sacred word as anchor.", url: "fgcquaker.org" },
  { name: "Celtic Pilgrimage", color: "#10B981", summary: "The ancient Celtic Christian practice of peregrinatio — wandering for God, seeking thin places where the veil between heaven and earth seems thin. Classic Celtic pilgrimage sites: Iona, Lindisfarne (Holy Island), Skellig Michael, Clonmacnoise. Modern Celtic retreats emphasize creation spirituality, poetry, and place.", url: "iona.org.uk" },
  { name: "Evangelical Silent Retreat", color: "#3B82F6", summary: "Growing across evangelical Protestantism since the 1990s. Typically 2-5 days of structured silence with extended Bible meditation, journaling, nature walks, and optional spiritual direction. Drawing from the evangelical tradition of personal Bible study while incorporating silence and solitude from the broader Christian tradition.", url: "renovare.org" },
  { name: "Charismatic Renewal Retreat", color: "#EF4444", summary: "Drawing from the Catholic Charismatic Renewal (post-1967) and Pentecostal traditions. Emphasis on extended worship, prayer ministry, healing prayer, inner healing, prophetic words, and baptism in the Spirit. Major centers include Franciscan University of Steubenville and IHOPKC.", url: "charismaticconferences.com" },
];

export default function SpiritualRetreatsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_spiritual-retreats_tab", "centers");
  const [selected, setSelected] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_spiritual-retreats_voice", "merton-t");
  const voiceItem = VOICES_SR.find(v => v.id === selectedVoice)!;

  const center = CENTERS.find(c => c.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌲</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Retreats</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            Jesus withdrew. The desert fathers withdrew. Every great Christian has known that sustained encounter with God requires intentional withdrawal from the normal pace of life. Here is how — and where.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content" }}>
          {(["centers", "howto", "traditions", "voices", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "centers" ? "Retreat Centers" : t === "howto" ? "How to Retreat" : t === "traditions" ? "Traditions" : t === "voices" ? "🎓 Voices" : "Videos"}
            </button>
          ))}
        </div>

        {tab === "centers" && (
          <div style={{ display: "grid", gridTemplateColumns: center ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CENTERS.map((c, i) => (
                <button key={i} onClick={() => setSelected(selected === c.name ? null : c.name)}
                  style={{ background: selected === c.name ? `${c.color}12` : CARD, border: `1px solid ${selected === c.name ? c.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                      {c.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{c.name}</span>
                        <span style={{ background: `${c.color}15`, color: c.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{c.tradition}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{c.location}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {center && (
              <div style={{ background: CARD, border: `1px solid ${center.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: center.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{center.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{center.location} · {center.tradition}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{center.description}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>PROGRAMS</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{center.programs}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>BEST FOR</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{center.best_for}</p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ flex: 1, background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>COST</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{center.cost}</p>
                  </div>
                  <div style={{ flex: 1, background: `${center.color}08`, border: `1px solid ${center.color}20`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: center.color, fontWeight: 700, fontSize: 10, marginBottom: 4 }}>WEBSITE</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{center.url}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "howto" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {HOW_TO_STEPS.map((step, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[step.title] ? step.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [step.title]: !e[step.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: `${step.color}20`, border: `1px solid ${step.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: step.color, fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
                      {step.step}
                    </div>
                    <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{step.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[step.title] ? "−" : "+"}</span>
                </button>
                {expanded[step.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 10px" }}>{step.content}</p>
                    <div style={{ background: `${step.color}08`, border: `1px solid ${step.color}20`, borderRadius: 8, padding: "8px 12px" }}>
                      <span style={{ color: step.color, fontWeight: 700, fontSize: 11 }}>Practical tip: </span>
                      <span style={{ color: TEXT, fontSize: 13 }}>{step.tip}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "traditions" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {TRADITIONS_DATA.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{t.name}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: "0 0 10px" }}>{t.summary}</p>
                <div style={{ color: MUTED, fontSize: 11 }}>Learn more: {t.url}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_SR.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {SR_VIDEOS.map(v => (
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
      <Footer />
    </div>
  );
}
