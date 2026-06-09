"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  {
    title: "Introversion Is Not a Spiritual Deficiency",
    verse: "Psalm 131",
    body: "Psalm 131 is one of the shortest psalms but one of the most profound — and one of the most introvert-friendly passages in Scripture: 'My heart is not lifted up; my eyes are not raised too high; I do not occupy myself with things too great and too marvelous for me. But I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me.' The Hebrew word for 'quieted' (damam) describes a deep inner stillness. This is not spiritual passivity — it is active choice. The psalmist has deliberately stilled himself. The capacity for this kind of interior quiet is often easier for introverts. This is not a deficiency; it is a gift.",
  },
  {
    title: "Jesus Was Often Alone — by Choice",
    verse: "Mark 1:35",
    body: "'And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.' Jesus, the fully human, fully divine Son of God, regularly withdrew from people — even from his disciples — to be alone with the Father. This is not a concession to introversion; it is a spiritual discipline described multiple times in the Gospels (Luke 5:16, Matthew 14:23, Mark 6:31). The extroverted activist model of ministry — always engaging, always building, always at high energy — is not the model Jesus modeled. Solitude was central to his spiritual life. For introverts, this is not permission to avoid community; it is validation that the quiet place is holy ground.",
  },
  {
    title: "The Body Has Many Members — Not All Are Mouths",
    verse: "1 Corinthians 12:14–18",
    body: "Paul writes: ‘For the body does not consist of one member but of many. If the foot should say, Because I am not a hand, I do not belong to the body, that would not make it any less a part of the body… If all were a single member, where would the body be? As it is, there are many parts, yet one body.’ His argument for the diversity of spiritual gifts is also an argument for the diversity of personality and presence in the body of Christ. The church that values only the loud, the publicly confident, the relationally effortless — the extrovert ideal — is a body that has decided the mouth is the only organ. It has impoverished itself. The listener, the writer, the one who prays in silence, the one who sees what others miss precisely because she is quiet enough to notice — these are not lesser members.",
  },
  {
    title: "Contemplative Tradition — A Deep River",
    verse: "Psalm 46:10",
    body: "'Be still, and know that I am God.' The contemplative tradition in Christianity — from the Desert Fathers and Mothers of the 3rd–4th centuries through Bernard of Clairvaux, Julian of Norwich, Thomas à Kempis, St. John of the Cross, to Thomas Merton and Henri Nouwen in the 20th century — represents two thousand years of Christians discovering God in silence, solitude, and interior contemplation. This tradition is not a marginal preference within Christianity; it is a central river. Introverts often discover that they are naturally suited to contemplative forms of prayer and worship that have deep roots in Christian history, even if their current church community does not practice them.",
  },
  {
    title: "Spiritual Gifts Are Not Correlated with Personality Volume",
    verse: "Romans 12:6–8",
    body: "Paul's list of spiritual gifts in Romans 12 includes both exhortation (classically extroverted) and mercy, showing hospitality, contributing generously, and leading with diligence. These are not arranged in a hierarchy where the public-speaking gifts are superior. The gift of mercy — sitting with someone in pain without needing to fix or perform — is often expressed most powerfully by introverts. The gift of teaching, when exercised in depth rather than breadth, can be the introvert's sustained engagement with a text or idea that produces something others cannot. Introversion is not an obstacle to spiritual fruitfulness; it is a different kind of soil.",
  },
];

const CHALLENGES = [
  {
    title: "Sunday Morning Overstimulation",
    icon: "🎶",
    color: PURPLE,
    desc: "Loud music, extended greeting times, social pressure to 'connect' — many introverts find corporate worship draining in ways that feel spiritually shameful. 'If I were really spiritual, I'd love this,' the lie says.",
    truth: "Overstimulation is neurological, not spiritual. You are not sinning by needing quiet to connect with God. Churches that offer quiet prayer rooms, contemplative services, or alternative worship formats are not second-best; they are serving a real and underserved portion of the body of Christ.",
    practical: "Give yourself permission to worship in ways that help you genuinely encounter God — whether that is arriving early before the crowd, sitting in a less central seat, or finding a supplementary contemplative practice during the week.",
  },
  {
    title: "Small Group Anxiety",
    icon: "👥",
    color: "#3B82F6",
    desc: "Forced sharing, rapid-fire questions, the expectation of instant emotional openness with near-strangers — small groups in their dominant form can feel like an introvert's nightmare. The result is often shame: 'I must not love community the way a Christian should.'",
    truth: "The biblical model of koinonia (deep fellowship) is not equivalent to 'extroverted small group format.' Deep connection for introverts often happens one-on-one over time, not in a group setting with structured sharing. The goal is genuine fellowship; the format is not sacred.",
    practical: "Ask your small group for the questions in advance. Build one-on-one relationships with one or two group members alongside the full group. Look for groups that include contemplative or silent prayer, which can reduce the performative social pressure.",
  },
  {
    title: "The 'Are You OK?' Cycle",
    icon: "💬",
    color: "#F59E0B",
    desc: "Introverts are often quiet, thoughtful, and reserved in group settings. Well-meaning extroverts interpret this as depression, unfriendliness, or disengagement — and the introvert spends energy managing others' anxiety about their quietness, which is exhausting.",
    truth: "Quiet is not the same as sad. Reserved is not the same as unfriendly. The energy required to manage others' discomfort with your natural personality style is a real cost — and it is not yours to bear alone. You have permission to say, 'I'm doing well — I'm just quieter than some people.'",
    practical: "Find language to name your introversion for key relationships in your church: 'I'm an introvert, so I process internally. I'm fully engaged even when I'm quiet.' Most people, once they understand, will stop projecting distress onto your silence.",
  },
  {
    title: "Leadership Expectations",
    icon: "🎙️",
    color: GREEN,
    desc: "Church leadership culture often mirrors secular leadership culture: charismatic, publicly confident, relationally effortless. Introverted Christians who sense a genuine call to lead often doubt themselves because they don't fit the dominant model.",
    truth: "Some of the most influential leaders in Christian history — writers like C.S. Lewis, theologians like John Calvin, pastors like Charles Spurgeon (who suffered from deep melancholy and solitude) — were notably introverted. The depth, preparation, and empathy that many introverts bring to leadership are gifts to the communities they serve.",
    practical: "Know your leadership strengths: introverts often excel at deep listening, careful preparation, written communication, and one-on-one pastoral presence. Lead from these strengths. Build your team to include the relational and energizing gifts you may lack.",
  },
];

const PRACTICES = [
  { title: "Daily Contemplative Prayer", icon: "🕯️", color: PURPLE, steps: ["Choose a regular 15-20 minute period of silent prayer", "Use the Ignatian Examen, Lectio Divina, or simply sit in God's presence", "Don't evaluate the quality of the silence — presence is enough", "Journaling before or after can help process what arose", "This kind of prayer often energizes introverts in ways public prayer cannot"] },
  { title: "Find Your Church Format", icon: "⛪", color: GREEN, steps: ["Traditional liturgical churches often suit introverts — the structure reduces social improvisation pressure", "Contemplative or 'quiet' services (some churches offer these on Sunday morning)", "Smaller gatherings of 8–15 people rather than large weekend services", "Online community as supplement, not replacement, for those who struggle with crowds", "Give yourself permission to visit multiple church styles without guilt"] },
  { title: "Build Depth, Not Breadth", icon: "🌊", color: "#3B82F6", steps: ["Aim for 2–3 deep friendships within your church community, not 20 surface ones", "Regular one-on-one coffee or meals rather than group social events", "Seek a spiritual director — this one-on-one relationship is deeply suited to introvert spirituality", "Invest in ongoing relationships rather than 'networking' at church events", "Quality over quantity is a valid relational theology, not laziness"] },
  { title: "Use Your Gifts Intentionally", icon: "🎁", color: PURPLE, steps: ["Writing: blog posts, devotional notes, letters of encouragement — powerful ministry from an introvert", "Behind-the-scenes service: introverts often thrive in preparation, research, hospitality in smaller settings", "Teaching: deep preparation and thoughtful communication are introvert strengths", "Prayer ministry: sustained, focused, quiet intercession is a profound gift to any church", "Find the ministry that fits your wiring, not the one that demands the most public performance"] },
  { title: "Sabbath as Recharge", icon: "☀️", color: GREEN, steps: ["Introverts recharge through solitude — design Sabbath to include protected alone time", "Protect Sundays (or your Sabbath day) from social obligations after church", "Nature, reading, creative work, and quiet are not selfish on Sabbath — they are restoration", "Name this to family: 'After church I need an hour alone to be ready for the rest of the day'", "Your energy is a stewardship; honoring your design honors God"] },
];

const FIGURES = [
  { name: "C.S. Lewis", years: "1898–1963", desc: "One of the most influential Christian apologists and writers in history was notably introverted. He was most productive in solitary writing, often described his social interactions as requiring deliberate effort, and did his best work in the early morning hours alone before others were awake. His introversion produced Mere Christianity, The Problem of Pain, The Screwtape Letters, and the Chronicles of Narnia — a body of work that has shaped millions of lives.", insight: "Lewis shows that the introvert's gift is often depth of engagement with ideas and the capacity to give those ideas lasting form — in words, stories, arguments — that outlasts any single conversation or event." },
  { name: "Henri Nouwen", years: "1932–1996", desc: "Dutch Catholic priest, professor at Harvard and Yale, and prolific spiritual writer who spent the last decade of his life living in a community for adults with intellectual disabilities. Nouwen was chronically lonely, deeply introverted, and desperately in need of affirmation — and wrote more honestly about the interior life of faith than almost anyone in the 20th century. His introversion was the wound from which his gift grew.", insight: "Nouwen's writing — The Return of the Prodigal Son, The Wounded Healer, The Way of the Heart — demonstrates that the introvert's inward gaze, when directed by grace, produces wisdom available to the whole church." },
  { name: "Thomas à Kempis", years: "1380–1471", desc: "A German-Dutch monk who spent most of his life in quiet solitude, copying manuscripts, writing, and praying. His Imitation of Christ (c. 1418) became the most widely-read Christian book after the Bible — evidence that one deeply introverted person, in one quiet cell, attending to God, can produce something the whole church needs for centuries.", insight: "à Kempis wrote: 'What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility?' The interior life is not one option among many in Christian discipleship — it is the foundation." },
  { name: "Amy Carmichael", years: "1867–1951", desc: "Irish-born missionary to India who founded the Dohnavur Fellowship and rescued hundreds of children from temple prostitution. Carmichael was deeply introverted, found large social gatherings exhausting, and wrote most of her fifty-plus books during years of confinement due to illness. Her influence — on missions, on social justice, and on devotional writing — was enormous and emerged from a fundamentally introverted spirituality.", insight: "Carmichael's life demonstrates that introversion is no barrier to sacrificial, costly, courageous ministry — and that the wells of interior depth from which introverts draw are often the source of their most enduring external impact." },
];

type Tab = "theology" | "challenges" | "practices" | "figures" | "scripture";

const SCRIPTURE = [
  { verse: "Psalm 131:2", text: "I have calmed and quieted my soul, like a weaned child with its mother; like a weaned child is my soul within me." },
  { verse: "Mark 1:35", text: "And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed." },
  { verse: "Psalm 46:10", text: "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!" },
  { verse: "1 Kings 19:12", text: "And after the earthquake a fire, but the LORD was not in the fire. And after the fire the sound of a low whisper." },
  { verse: "Luke 5:16", text: "But he would withdraw to desolate places and pray." },
  { verse: "Isaiah 30:15", text: "In returning and rest you shall be saved; in quietness and in trust shall be your strength." },
  { verse: "1 Corinthians 12:18", text: "But as it is, God arranged the members in the body, each one of them, as he chose." },
  { verse: "Psalm 62:5", text: "For God alone, O my soul, wait in silence, for my hope is from him." },
];

export default function IntrovertsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_introverts_tab", "theology");

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" },
    { id: "challenges", label: "💭 Challenges" },
    { id: "practices", label: "🛤️ Practices" },
    { id: "figures", label: "🕯️ Figures" },
    { id: "scripture", label: "✝️ Scripture" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            Introverts, Faith & Church
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
            You were made quiet. That is not a spiritual problem to fix — it is a design to understand and a gift to offer the body of Christ.
          </p>
          <div style={{ maxWidth: 600, margin: "20px auto 0", padding: "12px 16px", background: "rgba(107,79,187,0.06)", border: `1px solid rgba(107,79,187,0.15)`, borderRadius: 12, fontSize: 13, color: MUTED }}>
            <strong style={{ color: TEXT }}>Note:</strong> Introversion describes how you gain and expend energy — not how spiritual, social, or capable you are. Roughly 30–50% of people are introverted. Many of them sit quietly in church, convinced they are spiritual failures.
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto", gap: 0 }}>
            {TABS.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                style={{
                  padding: "16px 18px",
                  fontSize: 13,
                  fontWeight: 700,
                  background: "transparent",
                  border: "none",
                  borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                  color: tab === t.id ? GREEN : MUTED,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>

          {/* THEOLOGY */}
          {tab === "theology" && (
            <div style={{ display: "grid", gap: 20 }}>
              {THEOLOGY.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 22, lineHeight: 1 }}>📜</span>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0 }}>{t.title}</h3>
                      <span style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginTop: 4, display: "block" }}>{t.verse}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* CHALLENGES */}
          {tab === "challenges" && (
            <div style={{ display: "grid", gap: 20 }}>
              {CHALLENGES.map((c, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${c.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{c.title}</h3>
                      <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: "6px 0 0" }}>{c.desc}</p>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 12, marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Truth</p>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.truth}</p>
                  </div>
                  <div style={{ padding: "14px 16px", background: `rgba(107,79,187,0.05)`, border: `1px solid rgba(107,79,187,0.15)`, borderRadius: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Practical</p>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.practical}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PRACTICES */}
          {tab === "practices" && (
            <div style={{ display: "grid", gap: 20 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, background: `${p.color}12`, flexShrink: 0 }}>{p.icon}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 20px", display: "grid", gap: 8 }}>
                    {p.steps.map((s, j) => (
                      <li key={j} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>
                        <span style={{ color: p.color, fontWeight: 700 }}>→</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* FIGURES */}
          {tab === "figures" && (
            <div style={{ display: "grid", gap: 20 }}>
              <div style={{ padding: "16px 24px", background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 14, marginBottom: 4 }}>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  Some of the most enduringly influential Christians in history were introverts. Their quiet, interior-facing natures were not obstacles to fruitfulness — they were the conditions for it.
                </p>
              </div>
              {FIGURES.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: TEXT, marginBottom: 2 }}>{f.name}</h3>
                  <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 12 }}>{f.years}</p>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }}>{f.desc}</p>
                  <div style={{ padding: "14px 16px", background: `rgba(107,79,187,0.06)`, borderLeft: `4px solid ${PURPLE}`, borderRadius: "0 12px 12px 0" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Key Insight</p>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>{f.insight}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SCRIPTURE */}
          {tab === "scripture" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {SCRIPTURE.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{s.verse}</p>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: 15, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
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
