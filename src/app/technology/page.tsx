"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FRAMEWORKS = [
  { title: "Technology Is Not Neutral", body: "Every technology is not merely a tool — it embeds values, shapes attention, and forms habits. The printing press didn't just move information faster; it changed how people thought about authority, literacy, and private interpretation. Smartphones don't just connect us; they restructure attention spans, relationships, and the capacity for solitude. Christians must ask not only 'What can I use this for?' but 'What does this use me for?'" },
  { title: "The Attention Economy and the Spiritual Life", body: "Technology companies profit from capturing and holding attention. Notification design, infinite scroll, algorithmic feeds, and variable reward mechanisms are deliberately engineered to maximize time-on-platform. This is not neutral for the soul. Contemplative traditions have always known that the quality of our attention shapes the quality of our spiritual life. We cannot simultaneously form deep attention toward God and fragment it across a hundred digital stimuli." },
  { title: "Image-Bearing in a Digital World", body: "We were created to work with our bodies, maintain relationships in person, rest, and create. Digital life can support all of these — or erode them. The question is not whether to use technology but whether its use is consistent with our nature as embodied, social, creative image-bearers. Work that fragments rather than focuses, 'community' that replaces rather than supplements physical presence, and consumption that displaces creation all work against how God made us." },
  { title: "Sabbath as Digital Resistance", body: "The Sabbath commandment was revolutionary in its ancient context — rest one day in seven, regardless of economic pressure. It is no less countercultural today. A regular day without screens, notifications, and digital demands is a spiritual practice and a prophetic witness. It declares that our worth is not in productivity or connectivity — it is in the image of God we bear." },
];

const PRACTICES = [
  { category: "Daily Rhythms", icon: "🕐", color: "#3B82F6", items: [
    "No phone for the first 30 minutes after waking — begin with prayer instead",
    "No phone during meals with family or friends",
    "Remove social media apps from your phone — use browser only",
    "Turn off all non-essential notifications",
    "Phone charged outside the bedroom",
    "A 10-minute digital pause before bed",
  ]},
  { category: "Weekly Rhythms", icon: "📅", color: "#10B981", items: [
    "A weekly screen-free period (Sabbath or another day)",
    "One fully offline activity per week: walk, craft, meal, conversation",
    "Weekly review: did screens serve you or own you this week?",
    "Audit your social media follows — remove what isn't building you up",
  ]},
  { category: "Content Choices", icon: "🎯", color: PURPLE, items: [
    "Subscribe to a few high-quality newsletters instead of endless scrolling",
    "Choose books over feeds for long-form content",
    "Curate a short list of trusted information sources",
    "Be conscious of what you consume before sleep",
    "Unsubscribe from emails that don't serve you",
  ]},
  { category: "Relationships", icon: "🤝", color: "#F59E0B", items: [
    "Prefer a phone call or in-person meeting over a text for hard conversations",
    "Don't let group chats replace actual community",
    "Be physically present when with others — phone away or off",
    "Express care and conflict in person when possible, not over text",
  ]},
];

const QUESTIONS = [
  { q: "Is my phone use bringing me closer to or farther from God?", cat: "Spiritual" },
  { q: "Am I using social media or does it use me?", cat: "Spiritual" },
  { q: "How many hours per day am I on screens? Is that consistent with my stated priorities?", cat: "Stewardship" },
  { q: "Am I more or less able to sit in silence than I was five years ago?", cat: "Formation" },
  { q: "Does my digital life reflect who I am trying to become?", cat: "Character" },
  { q: "What would I do with my phone-time if it were freed up?", cat: "Vision" },
  { q: "Do my children or spouse feel they compete with my phone for my attention?", cat: "Relationships" },
  { q: "When did I last read a book, sit in silence, or create something without a screen?", cat: "Embodiment" },
];

interface CheckItem { id: string; text: string; cat: string; done: boolean; }

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "practices" | "audit">("theology");
  const [checks, setChecks] = useState<CheckItem[]>(() => {
    try {
      const s = localStorage.getItem("vine_tech_checks");
      if (s) return JSON.parse(s);
    } catch {}
    const items: CheckItem[] = [];
    PRACTICES.forEach(cat => cat.items.forEach((text, i) => items.push({ id: `${cat.category}-${i}`, text, cat: cat.category, done: false })));
    return items;
  });

  useEffect(() => { try { localStorage.setItem("vine_tech_checks", JSON.stringify(checks)); } catch {} }, [checks]);

  const toggle = (id: string) => setChecks(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  const done = checks.filter(c => c.done).length;

  const CAT_COLORS: Record<string, string> = { "Daily Rhythms": "#3B82F6", "Weekly Rhythms": "#10B981", "Content Choices": PURPLE, "Relationships": "#F59E0B" };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Faith & Technology</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Technology is not neutral — it shapes attention, habits, and formation. Christians must ask not only what they use technology for, but what technology uses them for.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "audit" as const, label: "Self-Audit", icon: "🔍" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {FRAMEWORKS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: TEXT, fontWeight: 700 }}>Practices adopted</div>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 18 }}>{done}/{checks.length}</div>
            </div>
            {PRACTICES.map(cat => {
              const catChecks = checks.filter(c => c.cat === cat.category);
              return (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{cat.category}</h3>
                    <span style={{ color: MUTED, fontSize: 12, marginLeft: "auto" }}>{catChecks.filter(c => c.done).length}/{catChecks.length}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {catChecks.map(item => (
                      <div key={item.id} onClick={() => toggle(item.id)}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "8px 12px", borderRadius: 8, background: item.done ? `${cat.color}10` : "transparent", border: `1px solid ${item.done ? cat.color + "30" : "transparent"}` }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${item.done ? cat.color : BORDER}`, background: item.done ? cat.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          {item.done && <span style={{ color: BG, fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </div>
                        <span style={{ color: item.done ? cat.color : TEXT, fontSize: 14, lineHeight: 1.5, textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "audit" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These questions are not designed to produce guilt — they are diagnostic tools. Sit with each one in prayer and let honest answers surface. The goal is awareness, not condemnation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {QUESTIONS.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 8px", borderRadius: 8, fontSize: 11, fontWeight: 700, display: "inline-block", marginBottom: 6 }}>{item.cat}</span>
                    <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{item.q}</p>
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
