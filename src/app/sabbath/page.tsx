"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const MISCONCEPTIONS = [
  { myth: "Sabbath is just about church attendance", truth: "The Sabbath predates the church and even Israel — it is woven into the fabric of creation (Gen 2:2-3). Church attendance matters, but Sabbath is a whole 24-hour practice of rest, worship, and delight — not a single morning." },
  { myth: "Sabbath is legalism", truth: "Jesus said the Sabbath was made for man (Mark 2:27) — it is a gift, not a burden. The question is not whether to rest but how to receive rest as the gift it is. Legalism distorts Sabbath; abolitionism throws the gift away." },
  { myth: "Sabbath is just for Jews", truth: "Sabbath appears in the creation account before any covenant with Israel. It is embedded in the Ten Commandments as one of the longest commandments. Jesus observed it. The New Covenant shifts the day (Sunday for Christians) but not the principle." },
  { myth: "I'll rest when I'm dead", truth: "Chronic overwork is not a virtue — it reflects either idolatry of productivity or distrust of God's provision. Sabbath is an act of faith: trusting that the world will not fall apart if you stop working for 24 hours. It is also scientifically proven to improve long-term productivity and health." },
];

const PRACTICES = [
  {
    category: "Stop",
    icon: "🛑",
    color: "#EF4444",
    description: "Sabbath begins with ceasing — stopping work, stopping striving, stopping the compulsive doing. This is harder than it sounds for most people.",
    ideas: [
      "Put your phone on airplane mode or in another room",
      "Close work email and don't check it until the Sabbath ends",
      "Finish all necessary work before sundown Saturday (or whatever day you observe)",
      "Turn off notifications — the silence is the point",
      "Write a 'done list' at the end of your work week to mark that work is complete",
    ],
  },
  {
    category: "Rest",
    icon: "😴",
    color: "#3B82F6",
    description: "Rest is not merely sleep — it is restoration of the whole person. What restores you? That is Sabbath rest.",
    ideas: [
      "Sleep in — let your body lead",
      "Take a long nap without guilt",
      "Sit outside without an agenda",
      "Do something creative that is purely for joy (draw, garden, cook slowly)",
      "Walk without a destination or a podcast",
    ],
  },
  {
    category: "Worship",
    icon: "🎵",
    color: PURPLE,
    description: "Sabbath is not just rest from — it is rest toward. Worship orients Sabbath toward God rather than toward self-indulgence.",
    ideas: [
      "Attend gathered worship with your church community",
      "Read Scripture slowly and meditatively — not to study but to receive",
      "Sing worship songs in your home",
      "Pray without a list — just be with God",
      "Listen to a great sermon or teaching",
    ],
  },
  {
    category: "Delight",
    icon: "🌸",
    color: "#10B981",
    description: "Isaiah 58 calls Sabbath a 'delight.' Sabbath should include things you genuinely enjoy — not just duties. God delights in your delight.",
    ideas: [
      "Share a long, unhurried meal with people you love",
      "Play with your children without checking the clock",
      "Read a book purely for pleasure",
      "Watch something you love without guilt",
      "Pursue a hobby that has no productivity value whatsoever",
    ],
  },
];

const RHYTHMS = [
  { time: "Friday Evening (or Saturday/Sunday Eve)", label: "Begin", actions: ["Light candles — a traditional Jewish practice of marking the transition", "Pray a short liturgy: 'Creator God, I stop my work and enter your rest'", "Turn off work devices", "Share a meal with family or community"] },
  { time: "Morning", label: "Receive", actions: ["Sleep as long as your body needs", "Read a psalm slowly over coffee", "Don't plan — let the day emerge", "Attend gathered worship if your observance includes Sunday morning"] },
  { time: "Afternoon", label: "Delight", actions: ["Unhurried activity: walk, garden, create, play", "Long meal with others", "Rest or sleep if desired", "Avoid errands and productivity tasks"] },
  { time: "Evening", label: "Close", actions: ["Reflect briefly: what did I receive today?", "A short prayer of thanksgiving", "Light a candle or mark the end intentionally (Havdalah — the separation rite)", "Return to the week with renewed purpose"] },
];

export default function SabbathPage() {
  const [activeTab, setActiveTab] = useState<"why" | "practices" | "planner" | "rhythm" | "videos">("why");
  const [checkedPractices, setCheckedPractices] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_sabbath_checked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [planText, setPlanText] = useState(() => {
    try { return localStorage.getItem("vine_sabbath_plan") || ""; } catch { return ""; }
  });
  const [streakCount, setStreakCount] = useState(() => {
    try { return parseInt(localStorage.getItem("vine_sabbath_streak") || "0"); } catch { return 0; }
  });

  useEffect(() => { try { localStorage.setItem("vine_sabbath_checked", JSON.stringify([...checkedPractices])); } catch {} }, [checkedPractices]);
  useEffect(() => { try { localStorage.setItem("vine_sabbath_plan", planText); } catch {} }, [planText]);
  useEffect(() => { try { localStorage.setItem("vine_sabbath_streak", String(streakCount)); } catch {} }, [streakCount]);

  const togglePractice = (key: string) => {
    setCheckedPractices(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Sabbath</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            One day in seven belongs to rest, worship, and delight — not as a rule to follow but as a gift to receive. The Sabbath was made for you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 26 }}>{streakCount}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Sabbaths Kept</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 26 }}>{checkedPractices.size}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Practices Adopted</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "why" as const, label: "Why Sabbath", icon: "❓" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "rhythm" as const, label: "Day's Rhythm", icon: "⏱️" },
            { id: "planner" as const, label: "My Sabbath", icon: "📝" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>The Sabbath Is God's Idea</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                "And on the seventh day God finished his work that he had done, and he rested on the seventh day" (Gen 2:2). Before there was sin, before there was a people of Israel, before there were commandments — there was Sabbath. God built rhythms of work and rest into the very structure of time.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                Sabbath-keeping is an act of faith: it is trusting that the world will continue without your constant management of it. For 24 hours, you stop acting as if the world depends on you. You rest in the provision of the One who doesn't sleep. This is why the fourth commandment is the longest in the Decalogue — God knew we'd need convincing.
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Jesus observed Sabbath faithfully, taught about it, and declared himself its Lord (Mark 2:28). The early church shifted Sabbath practice to Sunday (the day of resurrection) but kept the principle. The Reformers observed it. The Puritans built entire theologies of it. And contemporary Christians are recovering it as one of the most countercultural practices in a 24/7 productivity culture.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {MISCONCEPTIONS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>✗ Myth: {m.myth}</div>
                  <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>✓ {m.truth}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            {PRACTICES.map(cat => (
              <div key={cat.category} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 26 }}>{cat.icon}</span>
                  <h3 style={{ color: cat.color, fontWeight: 900, fontSize: 18, margin: 0 }}>{cat.category}</h3>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{cat.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {cat.ideas.map((idea, i) => {
                    const key = `${cat.category}-${i}`;
                    const checked = checkedPractices.has(key);
                    return (
                      <div key={i} onClick={() => togglePractice(key)}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: 10, borderRadius: 8, background: checked ? `${cat.color}10` : "transparent", border: `1px solid ${checked ? cat.color + "30" : "transparent"}` }}>
                        <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${checked ? cat.color : BORDER}`, background: checked ? cat.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          {checked && <span style={{ color: BG, fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: TEXT, fontSize: 14 }}>{idea}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "rhythm" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>A suggested structure for a 24-hour Sabbath — adapt to your tradition and circumstances:</p>
            {RHYTHMS.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}50`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
                  {i < RHYTHMS.length - 1 && <div style={{ width: 2, flex: 1, background: BORDER, margin: "6px 0" }} />}
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, flex: 1, marginBottom: 0 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 4 }}>{r.time}</div>
                  <h4 style={{ color: GREEN, fontWeight: 800, fontSize: 16, margin: "0 0 12px" }}>{r.label}</h4>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {r.actions.map((a, j) => <li key={j} style={{ color: TEXT, fontSize: 14, marginBottom: 6 }}>{a}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "planner" && (
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <button onClick={() => setStreakCount(c => c + 1)}
                style={{ padding: "10px 20px", background: `${GREEN}20`, border: `1px solid ${GREEN}50`, borderRadius: 10, color: GREEN, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                ✓ Log This Sabbath
              </button>
              <button onClick={() => setStreakCount(Math.max(0, streakCount - 1))}
                style={{ padding: "10px 16px", background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 10, color: MUTED, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                − Undo
              </button>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>My Sabbath Plan</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>Plan your Sabbath in advance — what will you stop, rest in, worship through, and delight in this week?</p>
              <textarea value={planText} onChange={e => setPlanText(e.target.value)}
                placeholder={"My Sabbath this week:\n\nI will STOP:\n- \n\nI will REST in:\n- \n\nI will WORSHIP through:\n- \n\nI will DELIGHT in:\n- \n\nWho I'll share it with:"}
                style={{ width: "100%", minHeight: 240, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video teachings on the Sabbath — its theology, history, and what it looks like to practice rest in the Christian life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "uJBsBaCFywU", title: "Lord of the Sabbath", teacher: "R.C. Sproul" },
                { id: "ux0_5zctrsI", title: "Work and Rest", teacher: "Timothy Keller" },
                { id: "7AXrC2oer_o", title: "The Origin of the Sabbath", teacher: "W. Robert Godfrey" },
                { id: "pmVRojMUmFw", title: "The Lord's Day as Sabbath", teacher: "W. Robert Godfrey" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
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
