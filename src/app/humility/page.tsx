"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Humility Is Not Low Self-Esteem", verse: "Romans 12:3", body: "Humility is not thinking poorly of yourself — it is thinking accurately about yourself. 'Do not think of yourself more highly than you ought, but rather think of yourself with sober judgment' (Romans 12:3). The humble person has a clear-eyed view of their gifts and their limits, their strength and their dependence. Self-deprecation that refuses to acknowledge genuine gifts is not humility — it is false modesty." },
  { title: "Jesus as the Model of Humility", verse: "Philippians 2:5-8", body: "'In your relationships with one another, have the same mindset as Christ Jesus: Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing by taking the very nature of a servant' (Phil. 2:5-7). Humility in the NT is not a personality trait — it is the posture of the incarnation. The eternal Son descended. Humility is movement downward in service of others." },
  { title: "Pride Is the Mother of All Sins", verse: "Proverbs 16:18", body: "Augustine argued that pride is the root of all sin. 'Pride goes before destruction, a haughty spirit before a fall' (Proverbs 16:18). Pride is not merely arrogance — it is the fundamental orientation of a self that has placed itself at the center of reality in the place of God. Every sin can be traced to a refusal to trust God's authority, wisdom, or provision — which is pride." },
  { title: "God Resists the Proud", verse: "James 4:6", body: "'God opposes the proud but shows favor to the humble' (James 4:6). This is not a preference — it is a law of the kingdom. Those who exalt themselves will be humbled; those who humble themselves will be exalted (Luke 14:11). Humility opens the hand to receive grace. Pride closes the hand and insists on self-sufficiency." },
  { title: "Humility in Community", verse: "Ephesians 4:2", body: "'Be completely humble and gentle; be patient, bearing with one another in love' (Ephesians 4:2). Humility is not primarily a private, interior disposition — it is the relational posture that makes community possible. Division, conflict, and contempt in the church are always symptoms of pride. Unity is achieved through the pursuit of humility together." },
];

const PRACTICES = [
  { title: "Serve without recognition", desc: "Do something significant this week that no one will ever know about. Take credit for nothing. Let the act itself be sufficient.", verse: "Matthew 6:1" },
  { title: "Ask for help", desc: "Deliberately ask someone for help with something you could handle alone. Needing others is not weakness — it is designed by God and denied by pride.", verse: "Ecclesiastes 4:9-10" },
  { title: "Listen more than you speak", desc: "In conversations, aim for two questions per statement. Real listening is a posture of valuing the other person's experience above your own commentary.", verse: "James 1:19" },
  { title: "Celebrate others' success", desc: "Notice when you feel threatened by someone else's achievement. That feeling is pride. Actively celebrate what would otherwise trigger competition.", verse: "Romans 12:15" },
  { title: "Confess promptly", desc: "Pride delays or avoids confession. Humility confesses quickly. Practice admitting specific wrongs — to God, and to the person affected — within 24 hours.", verse: "1 John 1:9" },
  { title: "Learn from criticism", desc: "When criticized, ask: 'Is there truth in this?' before defending yourself. Pride dismisses. Humility investigates.", verse: "Proverbs 12:1" },
  { title: "Pray for your critics", desc: "It is impossible to remain proud toward someone while genuinely praying for their flourishing. Intercession for those who oppose you is one of the most potent humility disciplines.", verse: "Matthew 5:44" },
  { title: "Receive correction graciously", desc: "The humble person welcomes correction as a gift. Practice saying 'Thank you for telling me that' without immediate defense, even when you disagree.", verse: "Proverbs 9:8" },
];

const PRIDE_PATTERNS = [
  { pattern: "Intellectual Pride", sign: "Dismissing others' ideas quickly. Enjoying proving people wrong. Rarely being wrong in your own estimation.", remedy: "Assume the other person might know something you don't. Ask more questions. Let a bad argument stand sometimes without correcting it." },
  { pattern: "Spiritual Pride", sign: "Judging others' spiritual maturity. Comparing your prayer life, Bible knowledge, or service record. Looking down on 'immature Christians.'", remedy: "Remember: every spiritual gift you have is given, not earned (1 Corinthians 4:7). Thank God for what he has worked in others. Serve where you won't be recognized as spiritual." },
  { pattern: "Performative Humility", sign: "Saying 'Oh, I'm terrible at that' while hoping to be contradicted. Self-deprecation as a social strategy to gain compliments.", remedy: "Simply state facts without performing either modesty or confidence. 'I'm still learning this' is enough." },
  { pattern: "Comparative Pride", sign: "Feeling better about yourself when someone else fails or is exposed.", remedy: "When you notice schadenfreude, confess it. Pray for the person who has failed. Ask where you might have the same weakness." },
  { pattern: "Entitled Pride", sign: "Expecting recognition, preferential treatment, or gratitude. Feeling wronged when overlooked.", remedy: "Remind yourself: everything is grace. No service is owed to you. You are not owed recognition for any act of faithfulness." },
];

export default function HumilityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "practices" | "patterns">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙇</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Virtue of Humility</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Humility is not thinking poorly of yourself — it is thinking accurately. It is the posture of the incarnation: God descending in the shape of a servant. Pride is the mother of all sins; humility is the door to grace.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "patterns" as const, label: "Pride Patterns", icon: "🔍" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Humility is not a feeling — it is a practice. Like every virtue, it is formed by repeated actions taken contrary to prideful impulse. The following practices are concrete ways to cultivate humility in ordinary life.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                    <span style={{ color: MUTED, fontSize: 11, fontWeight: 700 }}>{p.verse}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "patterns" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Pride rarely announces itself. It disguises itself as self-awareness, high standards, or justified grievance. These patterns help identify where pride operates in ordinary life, and how to respond with humility.
              </p>
            </div>
            {PRIDE_PATTERNS.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{p.pattern}</div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>SIGNS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.sign}</p>
                </div>
                <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>REMEDY</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.remedy}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
