"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Prayer as Relationship", verse: "Matthew 6:9", body: "'Our Father in heaven' — the very first word of the Lord's Prayer establishes prayer's foundation: relationship. Prayer is not a vending machine (input request, receive output), not a magic spell, and not primarily a spiritual discipline for self-improvement. It is a conversation with a personal God who is simultaneously transcendent ('in heaven') and intimate ('our Father'). The quality of a prayer life reflects the quality of the relationship that sustains it." },
  { title: "The Spirit Prays Within Us", verse: "Romans 8:26-27", body: "'The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans' (Romans 8:26). Prayer is not primarily our performance — it is participation in the Spirit's intercession. When we do not know how to pray, the Spirit continues to intercede. The prayer life of the Christian is undergirded by a divine prayer that never stops." },
  { title: "Pray Without Ceasing", verse: "1 Thessalonians 5:17", body: "Paul's shortest command is also one of his most demanding: 'pray without ceasing' (1 Thessalonians 5:17). This cannot mean uninterrupted verbal prayer. It means a continuous orientation of the life toward God — a background awareness of his presence, a habit of turning everything into conversation, a posture rather than a practice. The goal is a life that is itself prayer, not a schedule that includes prayer." },
  { title: "The Prayer of Jesus", verse: "John 17:1-5", body: "John 17 is the longest recorded prayer of Jesus — given the night before his crucifixion. He prays for himself (glorification), for his disciples (protection and sanctification), and for all who will believe through their message (unity). This prayer reveals the interior life of Jesus: his sense of mission, his love for his followers, and his confidence in the Father. Reading it slowly is one of the most formative things a Christian can do." },
  { title: "Ask, Seek, Knock", verse: "Matthew 7:7-8", body: "'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you' (Matthew 7:7). The three verbs are progressive in intensity — asking, then actively seeking, then persistently knocking. The Greek uses present tense: keep asking, keep seeking, keep knocking. The promise is not instantaneous response but the faithfulness of a Father who gives good gifts to his children who persist in coming to him." },
];

const MODELS = [
  { model: "ACTS", full: "Adoration / Confession / Thanksgiving / Supplication", desc: "A structured approach moving through four movements: begin with worship (who God is), then confession (honest acknowledgment of sin), then gratitude (what God has done), then petition (what you need). Prevents prayer from being a list of requests by grounding it first in relationship.", when: "Daily structured prayer; good for those building a prayer habit" },
  { model: "Lectio Divina", full: "Sacred Reading", desc: "A slow, prayerful reading of Scripture: Read (lectio) the passage slowly, Meditate (meditatio) on the word or phrase that arrests you, Pray (oratio) your response to God from what you received, and Contemplate (contemplatio) in silent openness to God's presence.", when: "When prayer feels mechanical; when you need integration of Scripture and prayer" },
  { model: "The Examen", full: "Daily Examination", desc: "Ignatius Loyola's practice: at day's end, (1) give thanks for the day, (2) review it slowly for where you felt God's presence or absence, (3) notice what you are grateful for and what you regret, (4) pray from what you find, (5) anticipate tomorrow. Takes 10-15 minutes.", when: "Evening practice; for those who want to discern God's movement in daily life" },
  { model: "Fixed-Hour Prayer", full: "Praying the Hours (Liturgy of the Hours)", desc: "The ancient practice of praying at fixed times throughout the day — historically at dawn, midday, sunset, and night. Structured by psalms, Scripture readings, and collects. Creates a day rhythmically interrupted by God rather than prayer squeezed into gaps.", when: "For those who want deep historical roots; for those whose work makes extended prayer difficult" },
  { model: "Contemplative Prayer", full: "Centering Prayer / Silent Prayer", desc: "Moving beyond words and thoughts to a simple, quiet attentiveness to God's presence. Not about achieving a state but about consent — choosing to remain open to God's action. Often uses a sacred word to return to when thoughts arise.", when: "For mature pray-ers who want to deepen beyond verbal prayer; for those drawn to the mystical tradition" },
  { model: "Intercessory Prayer", full: "Praying for Others", desc: "Sustained, named, specific prayer for other people — their salvation, healing, circumstances, and growth. Keeps a list; prays regularly; follows up. James 5:16 promises that 'the prayer of a righteous person is powerful and effective.' The intercessor is a co-laborer with God.", when: "For those with pastoral hearts; for those who want their prayer to be outward-facing" },
];

const PRACTICES = [
  { title: "Establish a Fixed Time", desc: "Jesus prayed in the morning (Mark 1:35), at night, and in the desert. A fixed daily time for prayer is the most reliable foundation. Not the only time, but the guaranteed time — the anchor that holds even when the day gets complicated.", icon: "⏰" },
  { title: "Start Shorter Than You Think", desc: "Better to pray 10 minutes consistently than to aim for 30 minutes and give up after a week. Consistency creates the habit; the length grows naturally from the relationship. Begin where you actually are.", icon: "🌱" },
  { title: "Pray Out Loud", desc: "Spoken prayer forces engagement and reduces distraction. Even in private, audible prayer keeps the mind focused. Many people who say their prayer life is dry have been praying silently — moving to spoken prayer transforms the experience.", icon: "🗣️" },
  { title: "Keep a Prayer Journal", desc: "Write prayers. Write what you prayed for. Write what happened. The journal creates memory, reveals patterns of answered prayer, and allows you to return to previous prayers with gratitude or renewed petition.", icon: "📓" },
  { title: "Use Printed Prayers", desc: "The Book of Common Prayer, the Psalms, written collects — using others' words when yours have run out is not spiritual laziness but participation in the church's prayer. Even the Lord's Prayer is a given form, not improvisation.", icon: "📖" },
  { title: "Pray in Community", desc: "The corporate prayer of the church — gathered Sunday prayer, small group prayer, prayer meetings — is qualitatively different from private prayer. Praying together builds community, teaches prayer, and brings concentrated intercession to bear.", icon: "👥" },
];

export default function PrayerLifePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "models" | "practices">("theology");
  const [selectedModel, setSelectedModel] = useState("ACTS");

  const model = MODELS.find(m => m.model === selectedModel)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Building a Prayer Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Prayer is not a technique or a performance — it is a relationship. The goal is not a better prayer practice but a life increasingly oriented toward the God who is always present.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "models" as const, label: "Prayer Models", icon: "🗺️" },
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

        {activeTab === "models" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {MODELS.map(m => (
                <button key={m.model} onClick={() => setSelectedModel(m.model)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedModel === m.model ? GREEN : BORDER}`, background: selectedModel === m.model ? `${GREEN}15` : "transparent", color: selectedModel === m.model ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {m.model}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{model.model}</h2>
              <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{model.full}</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{model.desc}</p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>BEST WHEN</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{model.when}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A prayer life is built through habits, not heroics. These six practices create the conditions in which prayer can grow from obligation to delight.
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
