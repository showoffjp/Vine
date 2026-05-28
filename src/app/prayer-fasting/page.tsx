"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Fasting as Spiritual Discipline", verse: "Matthew 6:16-18", body: "Jesus assumes his followers will fast: 'When you fast' — not 'if you fast' (Matthew 6:16). Fasting is not an OT relic superseded by grace; it is a practice Jesus anticipated, participated in (40 days, Matthew 4:2), and gave instructions for. The command is against performative fasting 'to be seen by others' — the fast that pleases God is done in secret, seen only by the Father." },
  { title: "Fasting and Prayer Together", verse: "Acts 13:2-3", body: "Fasting almost always appears in Scripture paired with prayer. The early church fasted when sending missionaries (Acts 13:2-3), when appointing elders (Acts 14:23), in times of crisis (Esther 4:16, Jonah 3:5-10), and in seeking God's direction. The combination is not coincidental: fasting creates focused attention that intensifies prayer. Hunger becomes a physical reminder to pray." },
  { title: "Isaiah 58: The Fast God Chooses", verse: "Isaiah 58:6-7", body: "God rejects Israel's religious fasting because it coexists with oppression and injustice. The fast God chooses is 'to loose the chains of injustice, to set the oppressed free, to share your food with the hungry' (Isaiah 58:6-7). This is not an argument against physical fasting but a warning that fasting without justice is theater. The fast that breaks chains is more valuable than the fast that breaks bread." },
  { title: "Fasting and the Kingdom", verse: "Mark 2:18-20", body: "When asked why his disciples don't fast, Jesus replies: 'How can the guests of the bridegroom fast while he is with them? They cannot... But the time will come when the bridegroom will be taken from them, and on that day they will fast' (Mark 2:19-20). Jesus frames fasting as appropriate to the era of his absence — which means it is appropriate to now. We fast because the bridegroom has gone and has not yet returned." },
];

const TYPES = [
  { name: "Complete Fast", desc: "No food and sometimes no water for a set period. Used in Scripture for crisis moments (Esther 4:16: 'Do not eat or drink for three days'). Medically appropriate only for short periods; not recommended beyond 72 hours without medical supervision.", best_for: "Emergency intercession, crisis moments, extraordinary seeking of God" },
  { name: "Normal Fast", desc: "Abstaining from food but drinking water and sometimes juice. The most common biblical type. Can be sustained for longer periods (Daniel fasted 21 days this way, Daniel 10:3). Hunger pangs are reminders to pray.", best_for: "Sustained intercession, decision-making, regular spiritual practice" },
  { name: "Partial Fast", desc: "Abstaining from specific foods or meals — like Daniel's fast from 'pleasant food' (meat, wine, Daniel 10:3). Appropriate for those with medical conditions, or as an introduction to fasting.", best_for: "Medical limitations, beginners, preparation for fuller fasting" },
  { name: "Intermittent / Daily Fast", desc: "Skipping breakfast and/or lunch as a daily discipline. Sometimes called the 'Discipline of the Empty Stomach.' The morning hunger becomes a daily prompt for prayer.", best_for: "Daily prayer intensification, building the habit of fasting" },
  { name: "Congregational Fast", desc: "A whole church or community fasting together, often for a specific purpose — before a major decision, during a crisis, or in a dedicated prayer week. Corporate fasting amplifies intercession.", best_for: "Church decisions, community crises, revival and renewal" },
];

const PRACTICES = [
  { title: "Start Small", desc: "If you have never fasted, begin with one meal. Notice the hunger, and let it prompt prayer. The discipline is built gradually — one meal becomes one day, one day becomes multiple days. Do not attempt a five-day fast before you have fasted for one day.", icon: "🌱" },
  { title: "Plan the Prayer Focus", desc: "Before you begin, write down what you are fasting for. The fast without a specific prayer focus becomes mere dieting. The hunger pangs are anchors — when you feel them, return to the specific petition or person or concern you named at the start.", icon: "🎯" },
  { title: "Break It Gently", desc: "After extended fasting, break with small amounts of easily digestible food — fruit, broth, small portions. The body needs time to return to normal digestion. Breaking a fast with a large meal causes physical distress and undoes the work of the fast.", icon: "🍎" },
  { title: "Keep It Between You and God", desc: "Jesus's instruction is specific: 'When you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen' (Matthew 6:17-18). Do not announce your fasts. The exception is congregational fasting, which is by definition communal.", icon: "🤫" },
  { title: "Expect Spiritual Clarity", desc: "Many people report that extended fasting produces unusual clarity — in prayer, in Scripture reading, and in decision-making. This is not mystical: reduced food intake reduces distraction and the body's demand on attention. The mind is freed for different work.", icon: "💡" },
  { title: "Combine with Worship", desc: "Use the time normally spent eating for worship — sing, read Scripture, pray, journal. Fasting creates time and attention that can be redirected. The discipline is not just 'not eating' but 'doing something with the space not eating creates.'", icon: "🎵" },
];

export default function PrayerFastingPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "types" | "practices">("theology");
  const [selectedType, setSelectedType] = useState("Complete Fast");

  const type = TYPES.find(t => t.name === selectedType)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prayer & Fasting</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus assumed his followers would fast. Fasting is not a food issue — it is an attention issue. Hunger becomes a physical anchor that calls the soul back to prayer throughout the day.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "types" as const, label: "Types of Fasting", icon: "📋" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "types" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TYPES.map(t => (
                <button key={t.name} onClick={() => setSelectedType(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedType === t.name ? GREEN : BORDER}`, background: selectedType === t.name ? `${GREEN}15` : "transparent", color: selectedType === t.name ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>{type.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{type.desc}</p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 14, margin: 0 }}>{type.best_for}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Fasting is a learnable discipline. These six practices make fasting both spiritually fruitful and physically sustainable.
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
      </div>
    </div>
  );
}
