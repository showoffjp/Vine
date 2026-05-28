"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PRACTICES_BY_CATEGORY = [
  {
    category: "Word",
    icon: "📖",
    color: "#F59E0B",
    items: [
      { name: "Daily Bible Reading", desc: "15-30 min of Scripture reading — a plan keeps you consistent and prevents cherry-picking comfortable passages", frequency: "Daily" },
      { name: "Scripture Memorization", desc: "Embed truth in your mind where it can operate in any situation — drives out anxiety, resists temptation, transforms thinking", frequency: "Weekly" },
      { name: "Lectio Divina", desc: "Sacred reading — slow, meditative engagement with a short passage rather than reading for information coverage", frequency: "Weekly" },
      { name: "Bible Study", desc: "Exegetical study of a book or passage — using commentaries, cross-references, and context to understand the author's intent", frequency: "Weekly" },
    ],
  },
  {
    category: "Prayer",
    icon: "🙏",
    color: "#3B82F6",
    items: [
      { name: "Daily Prayers", desc: "A consistent morning or evening prayer rhythm — even 10 minutes of intentional conversation with God transforms the day", frequency: "Daily" },
      { name: "Intercessory Prayer", desc: "Sustained prayer for specific people, situations, and nations — the priestly ministry of every believer", frequency: "Daily" },
      { name: "Prayer Journal", desc: "Written record of prayers offered and answered — builds faith over time as you observe God's faithfulness", frequency: "Regular" },
      { name: "Prayer Walking", desc: "Praying while physically moving through your neighborhood, workplace, or city — combines intercession with presence", frequency: "Weekly" },
    ],
  },
  {
    category: "Fasting",
    icon: "🌙",
    color: "#8B5CF6",
    items: [
      { name: "Regular Fasting", desc: "Abstaining from food for a set period — clears spiritual static, intensifies prayer, and cultivates dependence on God", frequency: "Monthly" },
      { name: "Media Fast", desc: "Abstaining from screens, news, social media — creates space for reflection and reduces the noise that competes with God's voice", frequency: "Monthly" },
      { name: "Daniel Fast", desc: "Partial fast (vegetables, water) sustained for 21 days — used for major decisions, breakthrough, or intercession seasons", frequency: "Seasonally" },
    ],
  },
  {
    category: "Silence & Solitude",
    icon: "🌿",
    color: "#10B981",
    items: [
      { name: "Daily Silence", desc: "15-30 minutes of intentional quiet — not sleep, not podcasts, but attentive stillness before God", frequency: "Daily" },
      { name: "Sabbath", desc: "One full day per week of rest, worship, and delight — the fourth commandment is also a spiritual discipline", frequency: "Weekly" },
      { name: "Personal Retreat", desc: "A half-day, full-day, or overnight retreat for extended prayer, reflection, and realignment", frequency: "Quarterly" },
      { name: "Extended Retreat", desc: "2-5 day retreat — typically at a monastery, retreat center, or quiet location — for deep formation work", frequency: "Annually" },
    ],
  },
  {
    category: "Community",
    icon: "🤝",
    color: "#EC4899",
    items: [
      { name: "Gathered Worship", desc: "Weekly corporate worship with your local church — non-negotiable for formation and mutual encouragement", frequency: "Weekly" },
      { name: "Small Group", desc: "A community of 6-12 people meeting regularly for study, accountability, and life together", frequency: "Weekly" },
      { name: "Discipleship Relationship", desc: "A structured 1-on-1 or 1-on-2 relationship for intentional spiritual formation — both giving and receiving", frequency: "Weekly" },
      { name: "Confession to Others", desc: "Bringing specific sin into the light with a trusted believer — breaks shame's power and enables healing", frequency: "As needed" },
    ],
  },
  {
    category: "Service",
    icon: "🌍",
    color: "#F97316",
    items: [
      { name: "Service in Your Church", desc: "Using your gifts in the gathered community — serving creates the conditions for growth that sitting rarely does", frequency: "Weekly" },
      { name: "Caring for the Poor", desc: "Direct engagement with the marginalized — volunteering, giving, or building relationships across socioeconomic lines", frequency: "Monthly" },
      { name: "Evangelism", desc: "Intentionally sharing the gospel — with neighbors, coworkers, or through organized outreach", frequency: "Regular" },
      { name: "Hospitality", desc: "Opening your home and table — one of the most underrated formation practices in Scripture (Romans 12:13, Hebrews 13:2)", frequency: "Weekly" },
    ],
  },
];

const RULE_TEMPLATES = [
  {
    name: "Beginner Rule",
    desc: "For those just starting or re-starting",
    practices: ["10 min Bible reading daily", "Brief morning prayer", "Sunday worship attendance", "One act of service per week"],
  },
  {
    name: "Growing Rule",
    desc: "For established believers building consistency",
    practices: ["30 min Bible reading daily", "20 min prayer with journal", "Weekly Sabbath practice", "Small group participation", "Monthly fasting", "Monthly service"],
  },
  {
    name: "Intensive Rule",
    desc: "For seasons of deep formation",
    practices: ["60 min morning prayer + Scripture", "Daily Examen in the evening", "Weekly fasting", "Weekly Lectio Divina", "Bi-weekly discipleship meeting", "Quarterly personal retreat", "Daily silence (30 min)"],
  },
];

const FREQ_ORDER: Record<string, number> = { Daily: 1, Weekly: 2, Monthly: 3, Regularly: 4, Quarterly: 5, Seasonally: 6, Annually: 7, "As needed": 8, Regular: 4 };

export default function SpiritualFormationPage() {
  const [activeTab, setActiveTab] = useState<"library" | "myrule" | "progress">("library");
  const [selectedCat, setSelectedCat] = useState("All");
  const [adopted, setAdopted] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_sf_adopted"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [ruleText, setRuleText] = useState(() => {
    try { return localStorage.getItem("vine_sf_rule") || ""; } catch { return ""; }
  });
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_sf_adopted", JSON.stringify([...adopted])); } catch {} }, [adopted]);
  useEffect(() => { try { localStorage.setItem("vine_sf_rule", ruleText); } catch {} }, [ruleText]);

  const allItems = PRACTICES_BY_CATEGORY.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category, icon: cat.icon, color: cat.color }))
  );

  const filteredCats = selectedCat === "All"
    ? PRACTICES_BY_CATEGORY
    : PRACTICES_BY_CATEGORY.filter(c => c.category === selectedCat);

  const adoptedCount = adopted.size;
  const dailyPractices = allItems.filter(i => i.frequency === "Daily" && adopted.has(`${i.category}-${i.name}`)).length;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Spiritual Formation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            You become what you practice. Spiritual formation is the intentional process of becoming more like Christ through consistent, grace-filled disciplines.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 26 }}>{adoptedCount}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Practices Adopted</div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
              <div style={{ color: PURPLE, fontWeight: 900, fontSize: 26 }}>{dailyPractices}</div>
              <div style={{ color: MUTED, fontSize: 12 }}>Daily Disciplines</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "library" as const, label: "Practices Library", icon: "📚" },
            { id: "myrule" as const, label: "My Rule of Life", icon: "📋" },
            { id: "progress" as const, label: "My Progress", icon: "📈" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "library" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {["All", ...PRACTICES_BY_CATEGORY.map(c => c.category)].map(cat => (
                <button key={cat} onClick={() => setSelectedCat(cat)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${selectedCat === cat ? GREEN : BORDER}`, background: selectedCat === cat ? `${GREEN}15` : CARD, color: selectedCat === cat ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {cat}
                </button>
              ))}
            </div>
            {filteredCats.map(cat => (
              <div key={cat.category} style={{ marginBottom: 24 }}>
                <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 18, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{cat.icon}</span> {cat.category}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
                  {cat.items.map(item => {
                    const key = `${cat.category}-${item.name}`;
                    const isAdopted = adopted.has(key);
                    return (
                      <div key={item.name} style={{ background: CARD, border: `1px solid ${isAdopted ? cat.color + "40" : BORDER}`, borderRadius: 12, padding: 18 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                          <div>
                            <div style={{ color: isAdopted ? cat.color : TEXT, fontWeight: 700, fontSize: 14 }}>{item.name}</div>
                            <span style={{ background: `${cat.color}15`, color: cat.color, padding: "2px 8px", borderRadius: 10, fontSize: 11, fontWeight: 600 }}>{item.frequency}</span>
                          </div>
                          <button onClick={() => setAdopted(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                            style={{ background: isAdopted ? `${cat.color}20` : "transparent", border: `1px solid ${isAdopted ? cat.color : BORDER}`, borderRadius: 6, padding: "4px 10px", color: isAdopted ? cat.color : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                            {isAdopted ? "✓ Adopted" : "+ Adopt"}
                          </button>
                        </div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "myrule" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 10 }}>What Is a Rule of Life?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                A Rule of Life (from the Latin regula — a guide or pattern) is a written rhythm of practices that structures your spiritual life. It's not a law but a trellis — a support structure that lets the vine of your life grow upward rather than sprawl on the ground. Monastic communities pioneered this; every believer can practice it.
              </p>
            </div>
            <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Start with a Template</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 24 }}>
              {RULE_TEMPLATES.map(tmpl => (
                <button key={tmpl.name} onClick={() => { setSelectedTemplate(tmpl.name); setRuleText(tmpl.practices.map((p, i) => `${i + 1}. ${p}`).join("\n")); }}
                  style={{ background: CARD, border: `1px solid ${selectedTemplate === tmpl.name ? PURPLE : BORDER}`, borderRadius: 12, padding: 18, textAlign: "left", cursor: "pointer" }}>
                  <h4 style={{ color: selectedTemplate === tmpl.name ? PURPLE : TEXT, fontWeight: 800, marginBottom: 6 }}>{tmpl.name}</h4>
                  <p style={{ color: MUTED, fontSize: 12, marginBottom: 10 }}>{tmpl.desc}</p>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {tmpl.practices.slice(0, 3).map((p, i) => <li key={i} style={{ color: MUTED, fontSize: 12, marginBottom: 3 }}>{p}</li>)}
                    {tmpl.practices.length > 3 && <li style={{ color: MUTED, fontSize: 12 }}>+{tmpl.practices.length - 3} more...</li>}
                  </ul>
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>My Rule of Life</h3>
              <textarea value={ruleText} onChange={e => setRuleText(e.target.value)}
                placeholder={"Daily:\n- \n\nWeekly:\n- \n\nMonthly:\n- \n\nQuarterly:\n- "}
                style={{ width: "100%", minHeight: 280, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}

        {activeTab === "progress" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 16 }}>Your Adopted Practices</h3>
              {adopted.size === 0 ? (
                <p style={{ color: MUTED, fontSize: 14 }}>No practices adopted yet. Visit the Practices Library to adopt some.</p>
              ) : (
                <div>
                  {PRACTICES_BY_CATEGORY.map(cat => {
                    const catAdopted = cat.items.filter(i => adopted.has(`${cat.category}-${i.name}`));
                    if (catAdopted.length === 0) return null;
                    return (
                      <div key={cat.category} style={{ marginBottom: 20 }}>
                        <h4 style={{ color: cat.color, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{cat.icon} {cat.category}</h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {catAdopted.sort((a, b) => (FREQ_ORDER[a.frequency] || 5) - (FREQ_ORDER[b.frequency] || 5)).map(item => (
                            <div key={item.name} style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30`, borderRadius: 8, padding: "6px 12px" }}>
                              <span style={{ color: cat.color, fontSize: 13, fontWeight: 600 }}>{item.name}</span>
                              <span style={{ color: MUTED, fontSize: 11, marginLeft: 6 }}>{item.frequency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, marginBottom: 14 }}>Formation at a Glance</h3>
              {PRACTICES_BY_CATEGORY.map(cat => {
                const total = cat.items.length;
                const done = cat.items.filter(i => adopted.has(`${cat.category}-${i.name}`)).length;
                const pct = Math.round((done / total) * 100);
                return (
                  <div key={cat.category} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: TEXT, fontSize: 14 }}>{cat.icon} {cat.category}</span>
                      <span style={{ color: cat.color, fontWeight: 700, fontSize: 13 }}>{done}/{total}</span>
                    </div>
                    <div style={{ height: 6, background: BORDER, borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: cat.color, borderRadius: 3, transition: "width 0.4s" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
