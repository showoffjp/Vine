"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  { title: "Justice Is God's Character", verse: "Psalm 89:14", body: "Justice and righteousness are the foundation of God's throne (Psalm 89:14). This is not a political statement — it is a theological one. God is not neutral about injustice. He hates oppression because it violates the dignity of people made in his image. His covenant repeatedly commands care for the widow, orphan, foreigner, and poor — those without social power to protect themselves." },
  { title: "The Prophets Preached Justice", verse: "Amos 5:24", body: "'Let justice roll on like a river, righteousness like a never-failing stream' (Amos 5:24). Amos, Micah, Isaiah, and Jeremiah were not social activists importing foreign categories — they were covenant enforcers. When Israel exploited the poor, ignored the widow, and bribed the court, the prophets declared this a covenant violation as serious as idolatry. Social justice was not peripheral to their message; it was central." },
  { title: "Jesus and the Poor", verse: "Luke 4:18", body: "Jesus opened his public ministry by reading Isaiah 61 in the synagogue: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.' His ministry was marked by attention to the marginalized — the sick, the outsider, the ritually unclean, women, Samaritans, tax collectors. Not as a social program but as the in-breaking of the kingdom of God." },
  { title: "The Gospel and the Whole Person", verse: "James 2:14–17", body: "'What good is it, if someone claims to have faith but has no deeds? Suppose a brother or sister is without clothes and daily food. If one of you says to them, \'Go in peace; keep warm and well fed,\' but does nothing about their physical needs, what good is it?' (James 2:14-16). The gospel is not only about spiritual salvation — it concerns the whole person in their concrete situation." },
  { title: "Already and Not Yet", verse: "Revelation 21:4", body: "Justice work is an expression of hope in God's coming kingdom — 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain' (Rev. 21:4). We work for justice now not because we believe we can build the kingdom ourselves, but because our action is a sign of what God has promised. It is prophetic, anticipatory — a foretaste of shalom." },
];

const TENSIONS = [
  { tension: "Individual salvation vs. social transformation", answer: "This is a false dichotomy. The gospel addresses persons and systems because persons are embedded in systems. Both/and, not either/or." },
  { tension: "Justice as gospel vs. justice as implication of gospel", answer: "The proclamation of the gospel is not reducible to justice work, and justice work is not a substitute for gospel proclamation. They are related but distinguishable. The church must do both." },
  { tension: "Which issues count as 'justice issues'?", answer: "Consistently apply biblical criteria: Who bears the image of God? Who lacks power or voice? What does Scripture say about this group? Consistent pro-life ethics covers abortion, poverty, racism, and capital punishment — not left or right platforms." },
  { tension: "Engaging vs. becoming the political system", answer: "The church's loyalty is to the kingdom of God, not to any party or nation. Christians should be comfortable making both parties uncomfortable. Political engagement without prophetic independence is captured advocacy." },
  { tension: "Charity vs. systemic change", answer: "Both are necessary. Direct service addresses immediate need; advocacy and systemic reform address patterns that reproduce need. Feeding the poor is essential; asking why people are hungry is also essential." },
];

const ACTION_STEPS = [
  { category: "Learn", color: "#3B82F6", icon: "📚", steps: [
    "Read The Prophets before dismissing 'social justice' language",
    "Study the history of injustice affecting your city or context",
    "Listen to those most affected — not just to commentators about them",
    "Read: 'Generous Justice' (Keller), 'Rich Christians in an Age of Hunger' (Sider)",
  ]},
  { category: "Pray", color: PURPLE, icon: "🙏", steps: [
    "Pray regularly for those without power, voice, or resources",
    "Ask God to show you where you have benefited from systems that harm others",
    "Fast in solidarity and intercession for the oppressed",
    "Use the world-prayer tools to pray for justice globally",
  ]},
  { category: "Give", color: "#10B981", icon: "💰", steps: [
    "Direct giving to organizations doing holistic justice work",
    "Give to causes that target root causes, not just symptoms",
    "Tithe with intentionality: ask where your church's money goes toward the poor",
    "Consider giving beyond the tithe to justice organizations",
  ]},
  { category: "Act", color: "#F59E0B", icon: "✊", steps: [
    "Volunteer at a local food bank, shelter, prison ministry, or refugee org",
    "Speak up when injustice happens in your presence — don't stay silent",
    "Advocate at the local level: city council, school board, zoning decisions",
    "Build genuine relationships across race, class, and culture",
  ]},
];

export default function JusticePage() {
  const [activeTab, setActiveTab] = useState<"foundations" | "tensions" | "action">("foundations");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Justice & the Gospel</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Justice is not a political import into Christianity — it is native to the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whole world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "foundations" as const, label: "Biblical Foundation", icon: "📖" },
            { id: "tensions" as const, label: "Key Tensions", icon: "⚖️" },
            { id: "action" as const, label: "How to Act", icon: "✊" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "foundations" && (
          <div>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{f.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{f.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tensions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Justice work is deeply contested in the church — not because Christians don't care, but because they care about competing goods. Here are the most common tensions and how to think through them faithfully.
              </p>
            </div>
            {TENSIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>"{t.tension}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{t.answer}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "action" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The gap between "caring about justice" and "acting for justice" is large. Start with one concrete step in each category. Sustained action across years makes more difference than intense moments of activism.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {ACTION_STEPS.map(cat => (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{cat.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {cat.steps.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{s}</span>
                      </div>
                    ))}
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
