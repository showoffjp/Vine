"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type IceBreaker = { question: string; category: string; depth: "Light" | "Medium" | "Deep"; };
type StudyGuide = { id: string; title: string; passage: string; weeks: number; theme: string; color: string; description: string; weekOutlines: { week: number; title: string; passage: string; bigQuestion: string; }[]; };

const iceBreakers: IceBreaker[] = [
  { question: "What's one thing you're grateful for this week that you almost missed?", category: "Gratitude", depth: "Medium" },
  { question: "If you could have coffee with any person from history, who would it be and why?", category: "Fun", depth: "Light" },
  { question: "What's a gift or ability you have that you sometimes take for granted?", category: "Identity", depth: "Medium" },
  { question: "When did faith feel most real to you — and when did it feel most distant?", category: "Faith", depth: "Deep" },
  { question: "Describe a moment in the past month when you sensed God's presence or heard him speak.", category: "Spiritual", depth: "Deep" },
  { question: "What's something you're afraid to pray for, because you're not sure you want the answer?", category: "Prayer", depth: "Deep" },
  { question: "What was your earliest memory of church or faith?", category: "Story", depth: "Medium" },
  { question: "What is one thing you wish more Christians talked about?", category: "Community", depth: "Medium" },
  { question: "What's a book, podcast, or teaching that has shaped you most this year?", category: "Growth", depth: "Light" },
  { question: "Share a failure you learned more from than a success.", category: "Story", depth: "Deep" },
  { question: "What does 'a good day' look like for you right now?", category: "Life", depth: "Light" },
  { question: "Who is someone in your life who models faith well — and why?", category: "Discipleship", depth: "Medium" },
  { question: "What's a question about God or the Bible you've never gotten a satisfying answer to?", category: "Theology", depth: "Deep" },
  { question: "When you imagine your life 5 years from now, what do you hope is different?", category: "Vision", depth: "Medium" },
  { question: "What's the hardest thing you're carrying right now that you'd be willing to share?", category: "Vulnerability", depth: "Deep" },
];

const studyGuides: StudyGuide[] = [
  {
    id: "identity",
    title: "Who You Already Are",
    passage: "Ephesians 1-2",
    weeks: 6,
    theme: "Identity in Christ",
    color: PURPLE,
    description: "6 weeks exploring the 'in Christ' language of Ephesians — who God says you are before you do anything. A counter-cultural study on grace and identity.",
    weekOutlines: [
      { week: 1, title: "Chosen Before You Knew It", passage: "Ephesians 1:1-14", bigQuestion: "What does it mean to be 'chosen in him before the foundation of the world'? Does this intimidate or comfort you?" },
      { week: 2, title: "The Eyes of Your Heart", passage: "Ephesians 1:15-23", bigQuestion: "Paul prays for enlightened understanding. What is one thing you wish you could see more clearly about God, yourself, or your situation?" },
      { week: 3, title: "Dead and Made Alive", passage: "Ephesians 2:1-10", bigQuestion: "What was your life 'before Christ' — and what is genuinely different? Where do you still struggle with old patterns?" },
      { week: 4, title: "One New Humanity", passage: "Ephesians 2:11-22", bigQuestion: "The church is meant to be the most diverse community in the world. How well does your experience of church reflect that? What would change if it did?" },
      { week: 5, title: "The Mystery Revealed", passage: "Ephesians 3:1-13", bigQuestion: "Paul calls the church 'a mystery.' What is mysterious — or surprising — to you about what God is doing through the church?" },
      { week: 6, title: "Power for the Inside", passage: "Ephesians 3:14-21", bigQuestion: "Paul prays for 'power in the inner being.' What would it look like for you to be strengthened in that way this week?" },
    ]
  },
  {
    id: "sermon-mount",
    title: "The Life Jesus Describes",
    passage: "Matthew 5-7",
    weeks: 8,
    theme: "Kingdom Living",
    color: GREEN,
    description: "8 weeks in the Sermon on the Mount — not a list of rules to follow but a description of what life in the Kingdom looks like from the inside out.",
    weekOutlines: [
      { week: 1, title: "Blessed Are the Surprising People", passage: "Matthew 5:1-12", bigQuestion: "The beatitudes describe people who seem like losers by cultural standards. Which one is most counterintuitive to you? Why?" },
      { week: 2, title: "Salt & Light", passage: "Matthew 5:13-16", bigQuestion: "Jesus says you already are salt and light — not that you should try to be. How does that change how you think about your Monday morning?" },
      { week: 3, title: "The Heart Behind the Rules", passage: "Matthew 5:17-48", bigQuestion: "Jesus repeatedly says 'You have heard... but I say to you.' What's a rule you follow externally but struggle with in your heart?" },
      { week: 4, title: "Giving, Prayer, Fasting", passage: "Matthew 6:1-18", bigQuestion: "Jesus critiques religious performance — giving, praying, and fasting for an audience. What's one practice in your life that has become performance rather than devotion?" },
      { week: 5, title: "The Anxious Heart", passage: "Matthew 6:19-34", bigQuestion: "'Do not worry.' Easy to say, hard to do. What are you most anxious about right now, and what would it mean to 'seek first the kingdom' in that situation?" },
      { week: 6, title: "Logs and Specks", passage: "Matthew 7:1-6", bigQuestion: "Jesus forbids judgmentalism while also saying don't give holy things to dogs. How do you hold those two truths together in practice?" },
      { week: 7, title: "The Door Is Open", passage: "Matthew 7:7-11", bigQuestion: "Jesus commands persistent prayer — 'keep asking, keep seeking, keep knocking.' What have you given up praying for? Why?" },
      { week: 8, title: "Two Foundations", passage: "Matthew 7:24-29", bigQuestion: "The difference between the two builders isn't what they believe but what they do. What is one truth you know but aren't yet living?" },
    ]
  },
  {
    id: "community",
    title: "One Another: Life Together",
    passage: "Various NT passages",
    weeks: 5,
    theme: "Christian Community",
    color: "#10B981",
    description: "5 weeks on the 'one another' commands of the New Testament — what we owe each other as the body of Christ. Practical and challenging.",
    weekOutlines: [
      { week: 1, title: "Belong to One Another", passage: "Romans 12:3-16", bigQuestion: "Paul says we 'belong to each other.' What does belonging actually require of you in this group? What's hard about that?" },
      { week: 2, title: "Carry One Another's Burdens", passage: "Galatians 6:1-5", bigQuestion: "What's the difference between carrying someone's burden and enabling? Have you ever struggled with that line?" },
      { week: 3, title: "Confess to One Another", passage: "James 5:13-16", bigQuestion: "James assumes Christians will confess sin to each other. Is this normal in your experience of church? What would it take to make it normal here?" },
      { week: 4, title: "Forgive One Another", passage: "Colossians 3:12-17", bigQuestion: "Share a time you had to forgive someone and what it cost you. What made it possible (or what made it hard)?" },
      { week: 5, title: "Spur One Another On", passage: "Hebrews 10:24-25", bigQuestion: "'Spur one another on toward love and good deeds.' What would it look like for this group to take that command seriously in each other's lives?" },
    ]
  }
];

const depthColors = { "Light": "#10B981", "Medium": "#F59E0B", "Deep": "#EF4444" };

// ── DATA ─────────────────────────────────────────────────────────────────────

const VOICES_SG = [
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "1906-1945",
    context: "Life Together (1939) — written from the underground seminary at Finkenwalde",
    bio: "Dietrich Bonhoeffer wrote Life Together in 1939, reflecting on the experiment in intentional Christian community he had led at the Finkenwalde seminary under the Nazi regime. The book is the most theologically serious short treatment of Christian community ever written — simultaneously practical and profound. Bonhoeffer had observed communities fracture under romantic idealism, members destroying fellowship by imposing their vision of what community should be rather than receiving the community God actually gives. His corrective is still radical: community is not a human achievement but a divine gift, and the person who demands more from community than God gives has turned community into an idol.",
    quote: "Christian community is not an ideal we must realize but a reality we must receive as given by grace.",
    contribution: "Life Together has shaped more small group leaders, campus ministry workers, and intentional community practitioners than any other single book. Its diagnosis of 'visionary dreaming' — the destruction of community by the imposition of ideals — remains the most penetrating analysis of why Christian communities fail.",
  },
  {
    id: "crabb",
    name: "Larry Crabb",
    era: "1944-2021",
    context: "Connecting (1997) — on the soul-healing power of ordinary Christian relationship",
    bio: "Larry Crabb spent decades as a Christian psychologist before concluding that the most powerful agent of soul transformation is not professional therapy but the ordinary quality of Christian relationships in community. His book Connecting argues that when Christians learn to move toward one another in genuine soul-care — releasing what he calls 'connecting energy' — the result is more therapeutic than any clinical intervention. Crabb challenged the church to stop outsourcing its healing ministry to professionals and recover the New Testament pattern of one-another ministry. His later work, including Soul Talk and The PAPA Prayer, deepened this vision of community as the arena of spiritual transformation.",
    quote: "When two people connect at the level of the soul, something is released in both that nothing else can release. The church has been given the most powerful healing resource in the world and rarely uses it.",
    contribution: "Crabb's Connecting redirected evangelical thinking about spiritual formation from individual disciplines to communal life. His insistence that ordinary Christians are equipped to provide what hurting people most need — real encounter with another human soul that mediates divine grace — gave small group leaders a framework for pastoral ministry that does not require professional credentials.",
  },
  {
    id: "boren",
    name: "Scott Boren",
    era: "contemporary",
    context: "Missional Small Groups (2010) — aligning small groups with the church's mission in the world",
    bio: "Scott Boren has been one of the most persistent voices for reconfiguring small groups around missional purpose rather than member consumption. His Missional Small Groups argues that the dominant model of small groups in North American evangelicalism — groups organized primarily around relational need, Bible study, and emotional support — has produced inward-facing communities that grow spiritually while contracting socially. Boren draws on the missional theology of Lesslie Newbigin, Alan Hirsch, and others to propose a model of small groups organized around neighborhood presence, service, and disciple-making rather than primarily around the felt needs of existing members.",
    quote: "A small group that exists only to serve its members is not a small group — it is a club. The question is not whether your group is comfortable but whether it is going anywhere.",
    contribution: "Boren's work has been influential in the church-planting and missional church movements, where the inherited model of small groups as pastoral care units has been interrogated and reconstructed around the church's sending identity. His framework has helped church planters design groups that are simultaneously formational and missional from the start.",
  },
  {
    id: "donahue",
    name: "Bill Donahue",
    era: "contemporary",
    context: "Leading Life-Changing Small Groups (Willow Creek, 1996; revised 2012)",
    bio: "Bill Donahue served as Vice President of Small Group Ministries at Willow Creek Community Church and became one of the most widely read practitioners of small group ministry in North American evangelicalism. His Leading Life-Changing Small Groups provides a comprehensive framework for small group leadership that is both theologically grounded and practically detailed — covering everything from how to facilitate discussion to how to handle conflict, from how to handle the person who dominates to how to pray with your group in a way that is not performative. The book has been used in hundreds of church small group leader training programs.",
    quote: "The goal of small group leadership is not to manage a meeting — it is to create conditions in which life change can occur. Those are very different things.",
    contribution: "Donahue's work at Willow Creek helped establish the infrastructure for cell-based small group ministry in large evangelical churches across North America. His books and training materials have shaped the small group culture of thousands of congregations, giving leaders a practical toolkit for transformational community.",
  },
  {
    id: "frazee",
    name: "Randy Frazee",
    era: "contemporary",
    context: "The Connecting Church (2001) — recovering shared Christian life in neighborhood community",
    bio: "Randy Frazee's The Connecting Church argues that the modern pattern of church life — in which members drive from scattered residential locations to a weekend event and then return to isolated suburban lives — has made genuine Christian community structurally impossible. His proposal is radical by evangelical standards: Christians should live in geographic proximity to one another, organize their small groups around neighborhoods rather than affinity, and recover the shared daily life that characterized the earliest Christian communities. Frazee draws on Acts 2 and the monastic tradition to argue that the church's problem is not a lack of programs but a lack of proximity.",
    quote: "The early church did not have small groups — it was a small group. The question is not how to add community to church life but how to make church life genuinely communal again.",
    contribution: "Frazee's work has influenced a generation of pastors and church planners who have questioned the commuter church model and sought to relocate themselves and their congregations in particular neighborhoods. His vision of the neighborhood church has been influential in both the missional church movement and in traditional evangelical congregations seeking to move from attractional to incarnational ministry.",
  },
];

const SG_VIDEOS = [
  {
    id: "sg-v1",
    title: "The Supremacy of Christ",
    preacher: "Voddie Baucham",
    videoId: "by8ykv7-A3c",
    description: "Baucham on what Christ-centered community looks like when his supremacy is taken seriously",
  },
  {
    id: "sg-v2",
    title: "Forgotten God Part 1",
    preacher: "Francis Chan",
    videoId: "sWMjg7CxIKk",
    description: "Chan challenges small groups to stop doing church without the Holy Spirit",
  },
  {
    id: "sg-v3",
    title: "Holding Fast to the Gospel",
    preacher: "Matt Chandler",
    videoId: "QuxmiIFN8yE",
    description: "What small groups must center on to avoid drifting into merely social gatherings",
  },
  {
    id: "sg-v4",
    title: "The Prodigal God: Elder Brother",
    preacher: "Tim Keller",
    videoId: "OasF7lWlX_M",
    description: "Keller unpacks the self-righteous community member &mdash; the most common small group dynamic",
  },
  {
    id: "sg-v5",
    title: "How Great Is Our God",
    preacher: "Louie Giglio",
    videoId: "X1rPalyUshw",
    description: "Giglio&rsquo;s cosmic vision of God gives small groups a sense of proportion and wonder",
  },
  {
    id: "sg-v6",
    title: "Radical: Passion 2011",
    preacher: "David Platt",
    videoId: "yhiHSf_L6_E",
    description: "Platt challenges small groups to be communities on mission, not communities of comfort",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

type Tab = "guides" | "icebreakers" | "voices" | "videos";

export default function SmallGroupsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("guides");
  const [selectedVoice, setSelectedVoice] = useState("bonhoeffer");
  const voiceItem = VOICES_SG.find(v => v.id === selectedVoice)!;
  const [selectedGuide, setSelectedGuide] = useState<StudyGuide | null>(null);
  const [depthFilter, setDepthFilter] = useState<"All" | "Light" | "Medium" | "Deep">("All");
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [usedIceBreakers, setUsedIceBreakers] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_sg_used_icebreakers"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedGuides, setSavedGuides] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_sg_saved_guides"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  useEffect(() => {
    try { localStorage.setItem("vine_sg_used_icebreakers", JSON.stringify([...usedIceBreakers])); } catch {}
  }, [usedIceBreakers]);
  useEffect(() => {
    try { localStorage.setItem("vine_sg_saved_guides", JSON.stringify([...savedGuides])); } catch {}
  }, [savedGuides]);

  const toggleUsed = (i: number) => setUsedIceBreakers(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const toggleSaved = (id: string) => setSavedGuides(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const filteredBreakers = iceBreakers.filter(q => depthFilter === "All" || q.depth === depthFilter);
  const unusedCount = iceBreakers.filter((_, i) => !usedIceBreakers.has(i)).length;

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>&#128101;</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Small Groups</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Leading Your Group{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Well
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 560, margin: "0 auto 20px" }}>
            Ice breakers that go deeper, multi-week study guides with discussion questions, and leader wisdom for every situation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 400, margin: "0 auto" }}>
            {[
              { v: unusedCount, label: "Fresh Ice Breakers", color: GREEN },
              { v: usedIceBreakers.size, label: "Used", color: MUTED },
              { v: savedGuides.size, label: "Studies Saved", color: PURPLE },
            ].map(s => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.v}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 4 }}>
          {(["guides", "icebreakers", "voices", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "guides" ? "Study Guides" : t === "icebreakers" ? "Ice Breakers" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* ── GUIDES TAB ── */}
        {activeTab === "guides" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Multi-week studies with week-by-week outlines and discussion questions for each session.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {studyGuides.map(g => (
                <div key={g.id} style={{ background: CARD, border: `1px solid ${savedGuides.has(g.id) ? g.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 12, padding: "2px 10px", borderRadius: 20, background: `${g.color}15`, color: g.color, fontWeight: 700 }}>{g.weeks} Weeks</span>
                          <span style={{ fontSize: 12, padding: "2px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED, fontWeight: 700 }}>{g.theme}</span>
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 4px" }}>{g.title}</h3>
                        <p style={{ fontSize: 13, color: g.color, fontWeight: 700, margin: "0 0 10px" }}>{g.passage}</p>
                        <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.6 }}>{g.description}</p>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                        <button onClick={() => toggleSaved(g.id)}
                          style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedGuides.has(g.id) ? PURPLE : BORDER}`, background: savedGuides.has(g.id) ? "rgba(107,79,187,0.15)" : "transparent", cursor: "pointer", fontSize: 13, color: savedGuides.has(g.id) ? PURPLE : MUTED }}>
                          {savedGuides.has(g.id) ? "🔖" : "📌"}
                        </button>
                        <button onClick={() => setSelectedGuide(selectedGuide?.id === g.id ? null : g)}
                          style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${g.color}40`, background: `${g.color}10`, color: g.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                          {selectedGuide?.id === g.id ? "Close" : "See Outlines"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {selectedGuide?.id === g.id && (
                    <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px" }}>
                      <h4 style={{ fontSize: 13, fontWeight: 800, color: g.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Week-by-Week Outlines</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {g.weekOutlines.map(w => (
                          <div key={w.week} style={{ borderRadius: 12, border: `1px solid ${expandedWeek === w.week ? g.color + "40" : BORDER}`, overflow: "hidden" }}>
                            <button onClick={() => setExpandedWeek(expandedWeek === w.week ? null : w.week)}
                              style={{ width: "100%", textAlign: "left", padding: "14px 18px", background: expandedWeek === w.week ? `${g.color}08` : "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                              <span style={{ width: 28, height: 28, borderRadius: "50%", background: `${g.color}20`, color: g.color, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{w.week}</span>
                              <div style={{ flex: 1 }}>
                                <p style={{ fontSize: 14, fontWeight: 700, margin: "0 0 2px", color: TEXT }}>{w.title}</p>
                                <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{w.passage}</p>
                              </div>
                              <span style={{ color: MUTED }}>{expandedWeek === w.week ? "▾" : "▸"}</span>
                            </button>
                            {expandedWeek === w.week && (
                              <div style={{ padding: "12px 18px 18px", borderTop: `1px solid ${BORDER}` }}>
                                <p style={{ fontSize: 12, fontWeight: 800, color: g.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Big Question</p>
                                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{w.bigQuestion}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ICE BREAKERS TAB ── */}
        {activeTab === "icebreakers" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Mark questions as used to track what you&rsquo;ve asked. Filter by depth level.</p>
              <div style={{ display: "flex", gap: 6 }}>
                {(["All", "Light", "Medium", "Deep"] as const).map(d => (
                  <button key={d} onClick={() => setDepthFilter(d)}
                    style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${depthFilter === d && d !== "All" ? (depthColors[d] || BORDER) : depthFilter === d ? GREEN : BORDER}`, background: depthFilter === d && d !== "All" ? `${depthColors[d] || "#3B82F6"}15` : depthFilter === d ? `${GREEN}15` : "transparent", color: depthFilter === d && d !== "All" ? depthColors[d] : depthFilter === d ? GREEN : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filteredBreakers.map((q, i) => {
                const origIndex = iceBreakers.indexOf(q);
                const used = usedIceBreakers.has(origIndex);
                return (
                  <div key={i} style={{ background: used ? "rgba(255,255,255,0.01)" : CARD, border: `1px solid ${used ? "rgba(255,255,255,0.04)" : BORDER}`, borderRadius: 14, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", opacity: used ? 0.5 : 1 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED, fontWeight: 700 }}>{q.category}</span>
                        <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${depthColors[q.depth]}15`, color: depthColors[q.depth], fontWeight: 700 }}>{q.depth}</span>
                      </div>
                      <p style={{ fontSize: 15, color: used ? MUTED : TEXT, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;{q.question}&rdquo;</p>
                    </div>
                    <button onClick={() => toggleUsed(origIndex)}
                      style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${used ? GREEN + "40" : BORDER}`, background: used ? "rgba(0,255,136,0.08)" : "rgba(255,255,255,0.03)", cursor: "pointer", fontSize: 14, color: used ? GREEN : MUTED, flexShrink: 0 }}>
                      {used ? "✓" : "○"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── VOICES TAB ── */}
        {activeTab === "voices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Five essential voices on small group community &mdash; from Bonhoeffer&rsquo;s theology of life together to contemporary practitioners who have shaped how evangelical churches organize shared Christian life.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
                {VOICES_SG.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                  <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                  <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                    <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                  </div>
                  <div style={{ background: "rgba(107,79,187,0.15)", borderRadius: 10, padding: 16 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Legacy &amp; Contribution</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── VIDEOS TAB ── */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 28 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Preaching on Community</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Six messages on what makes Christian community genuine &mdash; centered on Christ, empowered by the Spirit, and oriented outward in mission rather than inward in comfort.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
              {SG_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, background: `rgba(107,79,187,0.15)`, color: PURPLE, border: `1px solid rgba(107,79,187,0.3)` }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.description }} />
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
