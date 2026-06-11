"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "theology", label: "Theology" },
  { id: "disciplines", label: "Disciplines" },
  { id: "stages", label: "Stages of Growth" },
  { id: "community", label: "Community" },
  { id: "pitfalls", label: "Pitfalls" },
  { id: "plan", label: "Personal Plan" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const FORMATION_TEXTS = [
  { ref: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will.", color: GREEN },
  { ref: "2 Corinthians 3:18", text: "And we all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.", color: BLUE },
  { ref: "Philippians 2:12–13", text: "Work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose.", color: GOLD },
  { ref: "Galatians 4:19", text: "My dear children, for whom I am again in the pains of childbirth until Christ is formed in you.", color: TEAL },
  { ref: "Colossians 3:10", text: "You have taken off your old self with its practices and have put on the new self, which is being renewed in knowledge in the image of its Creator.", color: PURPLE },
];

const THEOLOGY_POINTS = [
  {
    title: "What Is Spiritual Formation?",
    desc: "Spiritual formation is the intentional process of becoming more like Jesus Christ — in character, values, desires, and actions — through the ongoing work of the Holy Spirit and the use of spiritual disciplines. Dallas Willard: 'Spiritual formation for the Christian basically refers to the Spirit-driven process of forming the inner world of the human self in such a way that it becomes like the inner being of Christ himself.'",
    color: GREEN,
  },
  {
    title: "God's Work and Our Cooperation",
    desc: "Philippians 2:12–13 holds the tension: 'work out your salvation... for it is God who works in you.' Formation is both entirely God's work (the Spirit transforms) and the believer's active participation (spiritual disciplines create the conditions for transformation). Dallas Willard: grace is not opposed to effort but to earning.",
    color: BLUE,
  },
  {
    title: "The Goal: Christlikeness",
    desc: "The goal of formation is not rule-keeping, not spiritual feelings, not knowledge accumulation — it is being conformed to the image of Christ (Rom 8:29). Jesus's character — his loves, his responses, his freedom, his prayer life — becomes the template. Formation is measured not by religious activities but by Christlike character.",
    color: TEAL,
  },
  {
    title: "Formation Happens Everywhere",
    desc: "Spiritual formation occurs not only in designated 'spiritual' activities but in all of life — work, relationships, suffering, leisure, family. Richard Foster: 'We are being formed (or deformed) spiritually whether we know it or not.' The question is not whether formation is happening but in which direction.",
    color: GOLD,
  },
  {
    title: "The Role of the Will",
    desc: "Dallas Willard's key insight: spiritual disciplines do not earn transformation but train the will and the body to respond rightly. We train ourselves in godliness (1 Tim 4:7) as an athlete trains — practicing the behaviors and postures that align the whole person with God's reality.",
    color: PURPLE,
  },
];

type Discipline = { name: string; category: string; desc: string; color: string };
const DISCIPLINES: Discipline[] = [
  { name: "Scripture Meditation (Lectio Divina)", category: "Inward", desc: "Slow, prayerful reading of Scripture with the aim of encountering God rather than extracting information. Read, meditate, pray, contemplate. Lectio divina ('sacred reading') is the classical form.", color: GREEN },
  { name: "Prayer", category: "Inward", desc: "Structured and spontaneous conversation with God — adoration, confession, thanksgiving, supplication (ACTS). Includes the Daily Office (fixed hours), the Jesus Prayer, contemplative prayer, and intercessory prayer.", color: TEAL },
  { name: "Fasting", category: "Inward", desc: "Voluntary abstinence from food (or other things) to express devotion, increase focus on prayer, and loosen the grip of physical appetites. Not to earn God's favor but to express desire for him above food.", color: GOLD },
  { name: "Silence and Solitude", category: "Inward", desc: "Henri Nouwen: 'Solitude is the furnace of transformation.' Withdrawal from noise and demands to be alone with God — the discipline that makes all other disciplines possible. Counterculturally powerful in a distracted age.", color: BLUE },
  { name: "Confession", category: "Inward", desc: "Regular honest acknowledgment of sin — to God (1 John 1:9) and to trusted others (James 5:16). Confession dissolves the hypocrisy that forms when we present better selves to community than we actually are.", color: RED },
  { name: "Journaling", category: "Inward", desc: "Written reflection that externalizes interior life, creates space for God's voice, and tracks the arc of spiritual growth over time. Used by Augustine, Wesley, Kierkegaard, and countless others.", color: PURPLE },
  { name: "Worship", category: "Outward", desc: "Corporate and personal glorification of God — not merely emotional expression but an intentional ascription of worth to God. Worship reshapes desires and reorients the person toward God as the supreme good.", color: GOLD },
  { name: "Service", category: "Outward", desc: "Using one's time, gifts, and resources for the good of others — especially the poor and marginalized. Service counteracts the self-centeredness that formation aims to transform. 'Whoever wants to be great among you must be your servant' (Matt 20:26).", color: GREEN },
  { name: "Giving / Simplicity", category: "Outward", desc: "Generosity is a discipline that loosens the grip of materialism and forms the heart toward kingdom values. Simplicity — living deliberately below one's means — creates freedom and generosity.", color: TEAL },
  { name: "Sabbath", category: "Outward", desc: "One day in seven set apart for rest, worship, and delight — not productivity or achievement. Sabbath is the weekly declaration that we are not the center of the universe and that God's provision is sufficient.", color: BLUE },
  { name: "Accountability", category: "Corporate", desc: "Regular voluntary submission to another believer's questions, observations, and challenge. Accountability is not punishment but protection — guarding against the self-deception that prevents growth.", color: PURPLE },
  { name: "Spiritual Direction", category: "Corporate", desc: "A regular relationship with a trained spiritual director who helps discern God's movements in one's life. Ancient practice revived in evangelical circles. Distinct from counseling — more contemplative, more focused on prayerful discernment.", color: RED },
];

const STAGES = [
  { name: "Awakening", desc: "Initial conversion or recommitment — awareness of God's reality and grace. Characterized by enthusiasm, wonder, and often strong emotional experience. The 'honeymoon phase' of faith.", color: GOLD },
  { name: "Purgation (Dark Night of Senses)", desc: "The stage of early discipline and purification — God allows consolations (felt experiences of his presence) to decrease to wean the soul from spiritual consumerism. John of the Cross's first dark night. Felt as spiritual dryness.", color: BLUE },
  { name: "Illumination", desc: "A more stable, mature engagement with God — less dependent on felt experience, more grounded in love and consistent practice. Virtue begins to be habituated; prayer deepens.", color: TEAL },
  { name: "Dark Night of the Soul", desc: "John of the Cross: the deeper purification of the soul, where even familiar consolations and God's felt presence are stripped away. Feels like abandonment but is often a profound deepening of faith beyond feelings.", color: PURPLE },
  { name: "Union / Conformity to Christ", desc: "Increasing conformity to Christ's character — not a permanent attainment but a direction. Characterized by deep love of God and neighbor, freedom from many former sins, joyful suffering, and a quiet confidence in God.", color: GREEN },
];

const PITFALLS = [
  { title: "Legalism: Disciplines as Earning", desc: "Treating spiritual disciplines as ways to earn God's approval or accumulate spiritual merit. This inverts the gospel — disciplines open us to grace, they don't generate it. Signs: pride in practice, condemnation of others, driven performance rather than joyful cooperation.", color: RED },
  { title: "Spiritual Consumerism", desc: "Treating formation as self-improvement for personal benefit rather than conformity to Christ for God's glory and others' good. The question shifts from 'How am I growing?' to 'How can I use growth to serve?'", color: GOLD },
  { title: "Individualism", desc: "The assumption that spiritual formation is a solo project — the quiet time, the private disciplines, the personal spiritual director. But Paul's formation language is mostly plural: 'we are being transformed,' 'built up together.' Formation is inherently communal.", color: BLUE },
  { title: "The Performance Trap", desc: "Measuring spiritual health by religious outputs — hours prayed, chapters read, ministries served. Dallas Willard: 'Spiritual formation is not a matter of how much you do, but what you are.' Character, not output, is the measure.", color: TEAL },
  { title: "Neglecting the Body", desc: "An over-spiritualized approach that focuses only on soul and ignores body. Disciplines like fasting, sleep, rest, and physical exercise matter — because the person is an embodied soul. What we do with our bodies shapes our souls.", color: GREEN },
];

const VIDEOS = [
  { videoId: "4Ac7u2RhP4o", title: "Spiritual Formation — Dallas Willard" },
  { videoId: "A4VzA0oJPag", title: "Spiritual Disciplines: The Path to Growth — John Ortberg" },
  { videoId: "7RzJi9PPNMM", title: "The Dark Night of the Soul — Henri Nouwen" },
  { videoId: "hGpOa4kG9IM", title: "Solitude and Silence — Richard Foster" },
  { videoId: "Bm8ELYj-gNg", title: "The Stages of Faith — James Fowler" },
];

export default function SpiritualFormationGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_sform_tab", "overview");
  const [openDisc, setOpenDisc] = usePersistedState<string>("vine_sform_disc", "");
  const [openPitfall, setOpenPitfall] = usePersistedState<string>("vine_sform_pit", "");
  const [planText, setPlanText] = usePersistedState<string>("vine_sform_plan", "");
  const [journal, setJournal] = usePersistedState<string>("vine_sform_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>🌱</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Spiritual Practice</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Spiritual Formation: Becoming Like Christ
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            Spiritual formation is the ongoing process of being transformed into the likeness of Jesus Christ — through the Spirit&apos;s work, spiritual disciplines, community, and suffering. This guide covers the theology, the disciplines, the stages of growth, and how to cultivate a life of intentional formation.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GREEN }}>Key Texts on Formation</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {FORMATION_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Dallas Willard&apos;s Vision</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>
                &quot;Spiritual formation for the Christian is the Spirit-driven process of forming the inner world of the human self in such a way that it becomes like the inner being of Christ himself. The result is that the deeds and words of Jesus naturally flow from the transformed life.&quot;
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>
                &quot;Grace is not opposed to effort — it is opposed to earning. Effort is action. Earning is attitude.&quot;
              </p>
            </div>
          </div>
        )}

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: BLUE, margin: 0 }}>The Theology of Spiritual Formation</h2>
            {THEOLOGY_POINTS.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "disciplines" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>The Spiritual Disciplines</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Spiritual disciplines are not ways to earn God&apos;s favor — they are the means by which we place ourselves before God for transformation. Richard Foster: &quot;The disciplines are for the purpose of realizing a greater good.&quot; Categories: Inward, Outward, Corporate.
            </p>
            {DISCIPLINES.map((d, i) => {
              const key = String(i);
              const open = openDisc === key;
              return (
                <div key={d.name}>
                  <button type="button" style={accordionBtn(open, d.color)} onClick={() => setOpenDisc(open ? "" : key)}>
                    <span>{d.name} <span style={{ fontWeight: 400, fontSize: "0.8rem", color: MUTED }}>— {d.category}</span></span>
                    <span style={{ color: d.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${d.color}0A`, border: `1px solid ${d.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{d.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "stages" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: PURPLE }}>Stages of Spiritual Growth</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The Christian mystical tradition — especially John of the Cross, Teresa of Ávila, and Ignatius — identified stages of spiritual growth. These are not mechanical stages but general patterns that many Christians experience.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {STAGES.map((stage, i) => (
                <div key={stage.name} style={{ display: "flex", gap: "1rem", background: `${stage.color}08`, border: `1px solid ${stage.color}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${stage.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: stage.color, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 800, color: stage.color, marginBottom: "0.3rem" }}>{stage.name}</div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "community" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: BLUE }}>Formation in Community</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "You Cannot Be Formed Alone", desc: "Galatians 4:19: Paul travails for Christ to be 'formed in you' — plural. Ephesians 4:15–16: growth happens as 'each part does its work' together. Formation requires others: their challenge, their example, their different gifts, their honest observation of our blind spots.", color: BLUE },
                { title: "Small Groups as Formation Contexts", desc: "The small group — when functioning as more than a Bible study — can become a formation community: mutual confession, accountability, shared spiritual practices, and practiced hospitality. This requires intentionality beyond information transfer.", color: GREEN },
                { title: "The Formation Power of Worship", desc: "Corporate worship is one of the most powerful formation contexts: the repeated patterns of Scripture reading, prayer, Eucharist, preaching, and song reshape desires and affections over time. James K.A. Smith: we are liturgical animals formed by habitual practices.", color: TEAL },
                { title: "Spiritual Direction in Community", desc: "One-to-one spiritual direction, small group direction, and mentorship relationships provide the deep accompaniment that formation requires. The Wesleyan class meeting, the monastic cell, and the modern small group all attempt this.", color: GOLD },
              ].map((item) => (
                <div key={item.title} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1.25rem" }}>
                  <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "pitfalls" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>Common Pitfalls</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Every genuine spiritual practice can be distorted. Understanding these pitfalls helps navigate the complex terrain of spiritual formation.
            </p>
            {PITFALLS.map((p, i) => {
              const key = String(i);
              const open = openPitfall === key;
              return (
                <div key={p.title}>
                  <button type="button" style={accordionBtn(open, p.color)} onClick={() => setOpenPitfall(open ? "" : key)}>
                    <span>{p.title}</span>
                    <span style={{ color: p.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${p.color}0A`, border: `1px solid ${p.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "plan" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.75rem", color: TEAL }}>Design Your Formation Plan</h2>
            <p style={{ color: MUTED, marginBottom: "0.5rem" }}>A simple rule of life — a structured framework for spiritual practices. Consider:</p>
            {["Daily: What practices will anchor you each day? (Morning prayer, Scripture reading, evening examen?)", "Weekly: What communal practices matter? (Worship, small group, Sabbath, service?)", "Monthly/Seasonally: What retreats, fasting periods, or extended practices will you build in?", "Relational: Who will accompany you? (Spiritual director, accountability partner, mentor?)"].map((q, i) => (
              <p key={i} style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.3rem" }}>• {q}</p>
            ))}
            <textarea
              value={planText}
              onChange={(e) => setPlanText(e.target.value)}
              placeholder="Draft your rule of life here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", marginTop: "1rem", boxSizing: "border-box" }}
            />
            {planText && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {planText.length} characters</div>}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>Where are you in your formation journey right now? Which discipline is God calling you to practice? What stage of growth most resonates with your current experience?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Spiritual Formation</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Spiritual Disciplines Guide", href: "/spiritual-disciplines-guide" },
            { label: "Prayer Theology Guide", href: "/prayer-theology-guide" },
            { label: "Sanctification", href: "/sanctification" },
            { label: "Spiritual Direction", href: "/spiritual-direction" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
