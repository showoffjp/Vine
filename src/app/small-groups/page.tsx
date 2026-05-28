"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type IceBreaker = { question: string; category: string; depth: "Light" | "Medium" | "Deep"; };
type StudyGuide = { id: string; title: string; passage: string; weeks: number; theme: string; color: string; description: string; weekOutlines: { week: number; title: string; passage: string; bigQuestion: string; }[]; };
type LeaderTip = { title: string; description: string; example: string; category: string; };

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

const leaderTips: LeaderTip[] = [
  {
    category: "Discussion",
    title: "The power of silence",
    description: "After asking a question, wait 7-10 seconds before moving on. It feels uncomfortable — but that discomfort produces depth. People need time to formulate honest answers.",
    example: "Ask: 'What is God saying to you through this passage?' Then wait. The first answer is often the surface one. The third answer is often the real one."
  },
  {
    category: "Discussion",
    title: "Redirect, don't lecture",
    description: "When someone gives a theologically questionable answer, don't immediately correct them. Ask: 'What does the rest of the group think?' Let the community work it out.",
    example: "If someone says 'God helped me because I prayed hard enough,' ask: 'What do others think about what God's response depends on?' Let others engage before you add your perspective."
  },
  {
    category: "Pastoral",
    title: "Follow up between gatherings",
    description: "The most powerful pastoral moment is not at the group meeting — it's the text you send on Wednesday about what someone shared on Sunday.",
    example: "Sarah shared something vulnerable. Monday morning: 'Hey, still thinking about what you shared. Praying for you today.' This is what makes a group a community."
  },
  {
    category: "Prayer",
    title: "Don't let prayer become monologue",
    description: "When one person tends to pray long prayers, gently introduce a 'one-sentence prayer' format. It democratizes prayer and keeps energy in the room.",
    example: "Introduce it positively: 'Tonight, let's pray in one sentence each — it forces us to be specific and leaves room for everyone to pray.'"
  },
  {
    category: "Dynamics",
    title: "Manage the dominant voice",
    description: "Every group has one. Address it early and privately — not in the meeting. 'I value your contributions. I want to draw out others who don't speak as readily. Can I count on you to hold back sometimes?'",
    example: "In the meeting, use body language and direct invitation: 'Let's hear from someone who hasn't spoken yet tonight.'"
  },
  {
    category: "Growth",
    title: "Plan your multiplication from day one",
    description: "If your group never plans to multiply, it eventually becomes an exclusive club. From the beginning, name the intention: 'In 12-18 months, we want to birth another group.'",
    example: "Identify an emerging leader within the group early. Begin giving them responsibilities. The greatest gift you can give a group is another group."
  },
];

const depthColors = { "Light": "#10B981", "Medium": "#F59E0B", "Deep": "#EF4444" };
const categoryColors: Record<string, string> = {
  "Discussion": PURPLE, "Pastoral": "#EC4899", "Prayer": "#3B82F6", "Dynamics": "#F59E0B", "Growth": GREEN
};

export default function SmallGroupsPage() {
  const [tab, setTab] = useState<"icebreakers" | "studies" | "leader" | "prayer">("icebreakers");
  const [selectedGuide, setSelectedGuide] = useState<StudyGuide | null>(null);
  const [depthFilter, setDepthFilter] = useState<"All" | "Light" | "Medium" | "Deep">("All");
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [usedIceBreakers, setUsedIceBreakers] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_sg_used_icebreakers"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [savedGuides, setSavedGuides] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_sg_saved_guides"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [groupPrayer, setGroupPrayer] = useState(() => {
    try { return localStorage.getItem("vine_sg_prayer") || ""; } catch { return ""; }
  });
  const [prayerSaved, setPrayerSaved] = useState(false);

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

  const saveGroupPrayer = () => {
    try { localStorage.setItem("vine_sg_prayer", groupPrayer); } catch {}
    setPrayerSaved(true);
    setTimeout(() => setPrayerSaved(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>👥</span>
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

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "icebreakers", label: "🎯 Ice Breakers" },
            { id: "studies", label: "📖 Study Guides" },
            { id: "leader", label: "🎓 Leader Tips" },
            { id: "prayer", label: "🙏 Group Prayer" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 18px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ICE BREAKERS */}
        {tab === "icebreakers" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Mark questions as used to track what you've asked. Filter by depth level.</p>
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
                      <p style={{ fontSize: 15, color: used ? MUTED : TEXT, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>"{q.question}"</p>
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

        {/* STUDY GUIDES */}
        {tab === "studies" && (
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

        {/* LEADER TIPS */}
        {tab === "leader" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Practical wisdom for small group leaders — on discussion dynamics, pastoral care, and group health.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {leaderTips.map((tip, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "22px 24px" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[tip.category] || PURPLE}15`, color: categoryColors[tip.category] || PURPLE }}>{tip.category}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{tip.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, marginBottom: 14 }}>{tip.description}</p>
                  <div style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.12)", borderRadius: 10, padding: "12px 16px" }}>
                    <p style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Example</p>
                    <p style={{ fontSize: 13, color: "#A0A0C0", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{tip.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GROUP PRAYER */}
        {tab === "prayer" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              Record prayer requests for your group. Track them over time and celebrate answers.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px", marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Group Prayer Requests</h3>
              <textarea value={groupPrayer} onChange={e => setGroupPrayer(e.target.value)}
                placeholder="Record your group's prayer requests here..."
                rows={8}
                style={{ width: "100%", padding: "14px 16px", borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", color: TEXT, fontSize: 14, resize: "none", outline: "none", lineHeight: 1.7, marginBottom: 12, boxSizing: "border-box" }} />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={saveGroupPrayer}
                  style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: prayerSaved ? "rgba(0,255,136,0.15)" : `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: prayerSaved ? GREEN : BG, cursor: "pointer", fontSize: 14, fontWeight: 800 }}>
                  {prayerSaved ? "✓ Saved" : "Save Requests"}
                </button>
              </div>
            </div>

            {/* Prayer postures */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14 }}>Ways to Pray Together</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "🔄", name: "Popcorn Prayer", desc: "Short, spontaneous prayers, one after another. No long monologues. Anyone can pray at any moment." },
                  { icon: "👥", name: "Triads", desc: "Break into groups of 3. Pray specifically for each person in your trio. Most intimate form of group prayer." },
                  { icon: "🎵", name: "Worship as Prayer", desc: "Play one worship song and invite people to pray quietly or aloud in response. Music creates space." },
                  { icon: "📝", name: "Written Prayer", desc: "Everyone writes their prayer in 3-4 sentences. Then read them aloud. For groups where spoken prayer feels intimidating." },
                  { icon: "🕊️", name: "Contemplative Silence", desc: "5 minutes of guided silence. Leader offers a Scripture verse. Let the Spirit move. Underused in most groups." },
                ].map(p => (
                  <div key={p.name} style={{ display: "flex", gap: 12, padding: "14px 16px", background: "rgba(255,255,255,0.02)", borderRadius: 12, border: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{p.icon}</span>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, margin: "0 0 4px" }}>{p.name}</p>
                      <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
