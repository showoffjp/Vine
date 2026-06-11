"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is a Rule of Life? — Ancient Practice, Modern Necessity", verse: "Psalm 1:2-3", text: "But whose delight is in the law of the Lord, and who meditates on his law day and night. That person is like a tree planted by streams of water, which yields its fruit in season. The Psalm's image of the rooted, fruitful tree is a picture of the person whose life is structured around the rhythms of God's presence. A rule of life is a set of intentional, regular practices that form the scaffolding of a life oriented toward God. The monastic tradition — Benedict of Nursia most famously — developed detailed communal rules for ordering shared life around prayer, work, and community. The principle applies equally to individuals in ordinary life: without intentional structure, the urgent crowds out the important, and transformation gives way to drift." },
  { title: "The Rhythm of the Christian Life — Rest and Work, Solitude and Community", verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed. Jesus himself had a discernible rhythm of withdrawal and engagement. He prayed before major decisions, after intensive ministry, and regularly in the early morning. He observed Sabbath. He withdrew to pray for extended periods. He gathered in community for worship and teaching. His life was not frantic or formless — it had shape, and that shape enabled everything else. The rule of life is nothing more than deliberately adopting a rhythm similar to the one Jesus modeled: regular times alone with God, regular engagement with community, regular rest, regular work." },
  { title: "Order Against Disorder — Why Structure Liberates Rather Than Imprisons", verse: "1 Corinthians 14:40", text: "But everything should be done in a fitting and orderly way. The counterintuitive truth of spiritual formation is that constraints create freedom. Without a rule, every day's question is what spiritual practices to do, when to do them, and whether they still matter. With a rule, those questions are settled, and energy goes into the practice rather than the decision. Benedictine monks do not decide each morning whether to pray at Lauds — the rule decides, and they show up. This is not legalism; it is wisdom. Legalism demands rule-keeping as a condition of acceptance; a rule of life operates in the context of acceptance already received and aims simply to arrange one's life for maximal receptivity to God." },
  { title: "Specific, Sustainable, Seasonal — The Three Tests of a Good Rule", verse: "Luke 14:28", text: "Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost to see if you have enough money to complete it? Three criteria drawn from the wisdom tradition and from decades of spiritual direction practice: Specific (not 'pray more' but 'pray the morning office at 6:30am Monday–Friday'), Sustainable (fits your actual life in its current season, not your ideal life), and Seasonal (reviewable — what fits a young parent may not fit a retiree, and rules should be revisited annually). A rule set too high fails quickly and creates shame; a rule set too low produces little growth. The goal is a rule that stretches you modestly and can be kept faithfully over years." },
  { title: "Areas of a Rule of Life — The Seven Domains to Address", verse: "Luke 2:52", text: "And Jesus grew in wisdom and stature, and in favor with God and man. Jesus grew in four dimensions: intellectually (wisdom), physically (stature), spiritually (favor with God), and relationally (favor with people). A comprehensive rule of life addresses at least these domains: Prayer (the heartbeat — when, how long, what form), Scripture (reading, study, memorization), Community (gathered worship, small group, friendship), Sabbath (full rest one day per week), Service (what you do with your gifts for others), Body (sleep, exercise, food — stewardship of the body as temple), and Simplicity (money, possessions, time). Not all rules address all domains equally — most emphasize three or four — but surveying all seven prevents blind spots." },
];

const voices = [
  { id: "sco", name: "Stephen A. Macchia", role: "President, Leadership Transformations; Author, Crafting a Rule of Life", quote: "A rule of life is not a rigid legal code but a flexible, loving, attentive response to God's invitation to grow. It is written after prayerful discernment of one's actual life — one's gifts, season, commitments, and weaknesses — and it is always provisional, subject to revision as life changes. The goal is not a perfect rule but a lived rhythm of attentiveness to God.", bio: "Macchia's Crafting a Rule of Life is the most accessible contemporary guide to the practice. He adapts Benedictine principles for Protestant laypersons and provides a structured process for discerning and writing a personal rule. He emphasizes that the rule grows from honest assessment of one's real life, not a fantasy of the life one wishes one had." },
  { id: "jmc", name: "John Mark Comer", role: "Author, The Ruthless Elimination of Hurry; Practitioner Institute", quote: "Hurry is the enemy of spiritual formation. It is not possible to be hurried and fully present to God and other people. The rule of life is the practical answer to the question: how do I arrange my life so that I am not chronically hurried? That requires saying no to things — often good things — and protecting margins that make space for God, rest, and depth.", bio: "Comer's The Ruthless Elimination of Hurry has become one of the most widely read spiritual formation books of the last decade. He argues that Jesus's unhurried life is not just admirable but imitable — and that the primary obstacle to formation in contemporary life is not sin but pace. The rule of life is his primary practical recommendation for addressing that obstacle." },
  { id: "cfo", name: "Christine Sine", role: "Author, Sacred Rhythms; Mustard Seed Associates", quote: "The liturgical calendar is a gift — it gives the year a shape that takes us through the full range of the Christian story. A personal rule of life that integrates with the liturgical seasons creates resonances between the inner journey and the outer story. We fast in Lent and feast at Easter not merely as tradition but because the rhythms of contraction and expansion, of discipline and celebration, are the rhythms of a healthy spiritual life.", bio: "Sine's work on rhythm, simplicity, and the liturgical calendar provides a framework for understanding a rule of life not just as a personal tool but as a participation in the church's communal structure. Her emphasis on simplicity, creation care, and justice adds dimensions to the rule of life that purely individualistic approaches miss." },
];

const elements = [
  { icon: "🌅", title: "Morning Prayer — Anchoring the Day in God's Presence", text: "The most consistently recommended element of a rule of life across traditions is a daily morning prayer practice. The form varies widely — lectio divina, the Daily Office, spontaneous prayer, a written liturgy, or silent contemplation. The principle is consistent: beginning the day oriented toward God before the noise of the day begins. Even 15 minutes is transformative over time. Many practitioners structure it as: stillness/silence, Scripture, prayer, and brief journaling." },
  { icon: "📖", title: "Scripture Reading — Systematic and Devotional", text: "A rule of life typically specifies both systematic reading (a plan to work through Scripture over time) and devotional engagement (reading slowly, prayerfully, seeking encounter rather than information). The two modes serve different purposes: systematic reading builds a comprehensive biblical worldview; devotional engagement allows Scripture to address the reader directly. Common tools: M'Cheyne reading plan, Bible-in-a-year apps, Psalms daily, lectionary readings." },
  { icon: "🛑", title: "Sabbath — Full Rest One Day Per Week", text: "Many Christians include Sabbath in their rule because it is the only practice Jesus explicitly modeled and endorsed that most contemporary Christians simply do not observe. A true Sabbath is not just going to church — it is ceasing from work, productivity, and achievement for a full day. Starting Friday evening (following Jewish practice) or on Sunday, it involves rest, worship, delight, and play. The research on the benefits of weekly rest is extensive; the biblical theology of Sabbath is rich. This is one element of a rule of life worth the cost of including." },
  { icon: "🤝", title: "Community and Accountability — Not a Solo Journey", text: "A rule of life developed in isolation tends to drift. Most traditions recommend sharing your rule with at least one other person — a spiritual director, an accountability partner, a small group — who will pray for you, ask how it's going, and notice when you've abandoned it. The rule is a document between you and God, but it is best kept in the context of mutual accountability. Annual review with another person is the minimum; quarterly check-ins are better." },
  { icon: "✍️", title: "Writing Your Rule — The Annual Retreat Day", text: "The rule of life is meant to be written, not merely intended. Schedule a half-day or full-day retreat annually to review the previous year and write the rule for the coming year. Questions to ask: Where did I grow? Where did I drift? What practices bore fruit? What season of life am I entering? What do I need more of? Less of? What one new practice would I like to add? The written rule — even a single page — becomes a reference point and an anchor." },
];

const scriptures = [
  { verse: "Psalm 1:2-3", text: "But whose delight is in the law of the Lord, and who meditates on his law day and night. That person is like a tree planted by streams of water, which yields its fruit in season." },
  { verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
  { verse: "Luke 2:52", text: "And Jesus grew in wisdom and stature, and in favor with God and man." },
  { verse: "1 Thessalonians 5:17", text: "Pray continually." },
  { verse: "Hebrews 10:25", text: "Not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching." },
  { verse: "Exodus 20:8", text: "Remember the Sabbath day by keeping it holy." },
];

const videos = [
  { id: "TqfB3hk_6Do", title: "What Is a Rule of Life and Why You Need One" },
  { id: "r3V3VbELMjk", title: "John Mark Comer: Ruthless Elimination of Hurry" },
  { id: "YQY3i-UePJ0", title: "How to Create Your Personal Rule of Life" },
  { id: "eJc8TFpsPRM", title: "The Benedictine Rule and Modern Spiritual Formation" },
];

type RLEntry = { id: string; date: string; domain: string; practice: string; frequency: string };

export default function RuleOfLifePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ruleoflife_entries") ?? "[]"); } catch { return []; }
  });
  const [jDomain, setJDomain] = useState("");
  const [jPractice, setJPractice] = useState("");
  const [jFrequency, setJFrequency] = useState("");

  useEffect(() => { localStorage.setItem("vine_ruleoflife_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDomain.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), domain: jDomain, practice: jPractice, frequency: jFrequency }, ...prev]);
    setJDomain(""); setJPractice(""); setJFrequency("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "elements", label: "Elements" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "My Rule" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Rule of Life</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Create a personal rule of life — a structured rhythm of spiritual practices that orders your days around God's presence and your formation in Christlikeness.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "elements" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {elements.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Build Your Rule of Life</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record each practice you want to include in your rule — one entry per practice.</p>
            {[
              { label: "Domain (e.g., Prayer, Scripture, Sabbath, Community, Body)", val: jDomain, set: setJDomain },
              { label: "Specific Practice (what exactly you will do)", val: jPractice, set: setJPractice },
              { label: "Frequency (daily, weekly, monthly — be specific)", val: jFrequency, set: setJFrequency },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Add to My Rule</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GREEN }}>My Rule of Life ({entries.length} practices)</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem", color: GREEN }}>{e.domain}</span>
                        <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.frequency}</span>
                      </div>
                      <p style={{ fontSize: "0.88rem", color: TEXT }}>{e.practice}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GREEN }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
