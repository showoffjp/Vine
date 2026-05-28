"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const WEEKS = [
  {
    week: 1, title: "Temptation & Testing", color: "#6B7280",
    theme: "The forty days of Lent echo Jesus' forty days in the wilderness. This week confronts temptation directly: what are you being tested by, and where is your actual vulnerability? Jesus defeated the devil not through spectacular power but through clinging to Scripture.",
    focus: "Matthew 4:1-11",
    practice: "Fast one meal today. In the hunger, pray: 'Man shall not live by bread alone.' Let the physical desire for food name a deeper desire for God.",
    readings: ["Matthew 4:1-11", "Psalm 91", "Genesis 2:15-17", "Romans 5:12-19"],
  },
  {
    week: 2, title: "Repentance & Return", color: "#7C3AED",
    theme: "Lent is the ancient season of repentance — not self-punishment but honest return. The prodigal's 'coming to himself' (Luke 15:17) is the picture: seeing your actual condition with clarity and turning toward the Father. Repentance is the best news in the world for those who know they need it.",
    focus: "Luke 15:11-24",
    practice: "Write a letter to God naming three specific sins — not general categories, but specific acts. Read Psalm 51 aloud. Then burn or delete the letter as a symbol of receiving forgiveness.",
    readings: ["Luke 15:11-32", "Psalm 51", "Joel 2:12-13", "2 Corinthians 7:10"],
  },
  {
    week: 3, title: "Prayer & Fasting", color: "#B45309",
    theme: "Jesus assumed his disciples would fast: 'When you fast...' (Matthew 6:16-17) — not 'if.' Fasting is not self-punishment; it is the practice of saying to the body: I am not enslaved to you. Combined with prayer, it sharpens spiritual perception and expresses urgent dependence on God.",
    focus: "Matthew 6:16-18",
    practice: "Choose one thing to fast from for the remaining weeks of Lent — social media, meat, alcohol, dessert, entertainment. Decide now. Every time you feel the absence, use it as a prompt to pray.",
    readings: ["Matthew 6:1-18", "Isaiah 58:1-12", "Daniel 9:3-19", "Acts 13:2-3"],
  },
  {
    week: 4, title: "The Cross in View", color: "#DC2626",
    theme: "The shadow of the cross falls over Lent from the beginning, but this week it becomes explicit. Jesus 'set his face to go to Jerusalem' (Luke 9:51) — a deliberate, determined, willing movement toward suffering and death. He was not surprised by the cross; he walked toward it for us.",
    focus: "Luke 9:51",
    practice: "Read Isaiah 52:13-53:12 slowly. This was written 700 years before the crucifixion. Sit with a specific image from the text. Let it become your prayer.",
    readings: ["Isaiah 52:13-53:12", "Psalm 22", "Philippians 2:5-11", "John 12:20-33"],
  },
  {
    week: 5, title: "Suffering & Glory", color: "#9333EA",
    theme: "The penultimate week of Lent holds together suffering and glory. 'The hour has come for the Son of Man to be glorified... unless a grain of wheat falls into the earth and dies, it remains alone' (John 12:23-24). The glory of God is revealed in and through the cross — not despite it but through it.",
    focus: "John 12:23-24",
    practice: "Identify one area of loss or suffering in your own life. Sit with it this week without trying to resolve or escape it. Bring it honestly to God. Ask: what might you be doing in this?",
    readings: ["John 12:20-36", "Hebrews 5:7-10", "Psalm 116", "Romans 8:17-18"],
  },
  {
    week: 6, title: "Holy Week", color: "#EF4444",
    theme: "Holy Week traces the final days: Palm Sunday's triumph (cheering crowds who do not understand), the Last Supper (institution of communion, washing feet), Gethsemane (the prayer that sweated blood), Good Friday (the darkness), Holy Saturday (the silence), Easter Sunday (the world turned right-side up).",
    focus: "Luke 22-24",
    practice: "Read the Passion narrative (Luke 22-23) from beginning to end without pausing. Let it land as a story, not a theology. On Easter morning, read Luke 24:1-12 before you do anything else.",
    readings: ["Mark 11:1-11 (Palm Sunday)", "John 13:1-17 (Maundy Thursday)", "Mark 15:1-47 (Good Friday)", "Luke 24:1-12 (Easter)"],
  },
];

const PRACTICES = [
  { title: "The Ash Wednesday Mark", desc: "'Remember that you are dust, and to dust you shall return.' The ashes mark mortality honestly. Lent begins by acknowledging that we are creatures, not gods — finite, mortal, in need of the one who conquered death.", icon: "⬛" },
  { title: "Fasting", desc: "The ancient practice of abstaining from food (or something else) as a way of expressing dependence on God. Fasting does not earn grace; it positions the soul to receive it. Even a partial fast — skipping lunch, giving up coffee — participates in this tradition.", icon: "🚫" },
  { title: "Almsgiving", desc: "Lent traditionally involves giving — specifically, giving what you would have spent on what you fasted from. The money or time freed by your abstinence becomes an offering. This integrates the spiritual practice with justice and generosity.", icon: "💝" },
  { title: "The Daily Examen", desc: "A five-minute evening prayer reviewing the day: Where was God present? Where did I respond well? Where did I miss it? What do I need to confess or receive? The Examen builds the habit of noticing God in ordinary life.", icon: "🌙" },
  { title: "Additional Scripture", desc: "Use Lent to read a Gospel straight through. Luke (24 chapters, one per day) takes you from Advent to Easter. Or follow a daily lectionary that traces the Passion narrative across the season.", icon: "📖" },
  { title: "Silence", desc: "Many people find Lent a natural time to add a period of silence — 10-15 minutes before the usual morning routine begins. Not structured prayer, but simply stopping before the noise begins. The soul needs quiet to hear what God is saying.", icon: "🤫" },
];

interface LentProgress {
  [key: string]: boolean;
}

export default function LentPage() {
  const [activeTab, setActiveTab] = useState<"weeks" | "practices" | "tracker">("weeks");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [done, setDone] = useState<LentProgress>(() => {
    try { const s = localStorage.getItem("vine_lent_progress"); return s ? JSON.parse(s) : {}; } catch { return {}; }
  });

  useEffect(() => { try { localStorage.setItem("vine_lent_progress", JSON.stringify(done)); } catch {} }, [done]);

  const week = WEEKS.find(w => w.week === selectedWeek)!;
  const toggleDone = (key: string) => setDone(d => ({ ...d, [key]: !d[key] }));

  const allReadings = WEEKS.flatMap(w => w.readings.map(r => ({ week: w.week, title: w.title, reading: r, color: w.color })));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Lent Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Forty days of preparation before Easter — mirroring Jesus' forty days in the wilderness. Lent is not penance; it is formation. The season clears the ground so Easter can land with its full force.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "weeks" as const, label: "Week Guide", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "tracker" as const, label: "Reading Tracker", icon: "✅" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "weeks" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 160, flexShrink: 0 }}>
              {WEEKS.map(w => (
                <button key={w.week} onClick={() => setSelectedWeek(w.week)}
                  style={{ width: "100%", background: selectedWeek === w.week ? `${w.color}15` : "transparent", border: `1px solid ${selectedWeek === w.week ? w.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedWeek === w.week ? w.color : MUTED, fontSize: 10, fontWeight: 700, marginBottom: 3 }}>WEEK {w.week}</div>
                  <div style={{ color: selectedWeek === w.week ? w.color : TEXT, fontWeight: 700, fontSize: 12 }}>{w.title}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${week.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>WEEK {week.week} OF LENT</div>
                <h2 style={{ color: week.color, fontWeight: 900, fontSize: 24, marginBottom: 16 }}>{week.title}</h2>
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>Focus: {week.focus}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{week.theme}</p>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>READINGS</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {week.readings.map(r => (
                      <span key={r} style={{ background: `${week.color}15`, color: week.color, padding: "4px 12px", borderRadius: 10, fontSize: 12, fontWeight: 600 }}>{r}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THIS WEEK'S PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{week.practice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The three traditional Lenten disciplines — fasting, prayer, and almsgiving — address body, soul, and neighbor simultaneously. You don't need to do all of them. Choose one intentionally and practice it consistently.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tracker" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Track your Lenten readings across all six weeks.</p>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{Object.values(done).filter(Boolean).length} / {allReadings.length}</div>
              </div>
            </div>
            {WEEKS.map(w => (
              <div key={w.week} style={{ background: CARD, border: `1px solid ${w.color}25`, borderRadius: 12, padding: 18, marginBottom: 12 }}>
                <div style={{ color: w.color, fontWeight: 800, fontSize: 15, marginBottom: 12 }}>Week {w.week}: {w.title}</div>
                {w.readings.map(r => {
                  const key = `lw${w.week}_${r}`;
                  return (
                    <div key={r} onClick={() => toggleDone(key)}
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: `1px solid ${BORDER}`, cursor: "pointer" }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: done[key] ? `${w.color}20` : "transparent", border: `2px solid ${done[key] ? w.color : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {done[key] && <span style={{ color: w.color, fontSize: 12 }}>✓</span>}
                      </div>
                      <span style={{ color: done[key] ? MUTED : TEXT, fontSize: 14, textDecoration: done[key] ? "line-through" : "none" }}>{r}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
