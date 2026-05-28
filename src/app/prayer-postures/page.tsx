"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const POSTURES = [
  {
    name: "Standing",
    icon: "🧍",
    color: "#3B82F6",
    scriptures: ["Nehemiah 9:5", "Mark 11:25", "Luke 18:13"],
    meaning: "Standing is the ancient posture of readiness, respect, and resurrection hope. In Jewish and early Christian worship, the congregation stood to pray — especially on Sundays, the day of resurrection. To stand is to pray as one who has been raised with Christ.",
    tradition: "Standing remains the default posture for prayer in Eastern Orthodox worship. The early church forbade kneeling on Sundays as an affirmation of resurrection joy.",
    practice: "Try standing for your morning prayers this week. Notice how posture affects attentiveness. Standing communicates: I am ready, I am here, I am not asleep.",
  },
  {
    name: "Kneeling",
    icon: "🧎",
    color: "#8B5CF6",
    scriptures: ["Daniel 6:10", "Acts 20:36", "Philippians 2:10-11"],
    meaning: "Kneeling is the posture of supplication, humility, and urgent need. Daniel knelt three times a day regardless of the threat to his life. Paul knelt with the Ephesian elders in tears. Kneeling physically enacts what the soul declares: I am small, you are great, I need you.",
    tradition: "Kneeling for prayer developed especially in Western Christianity. Monks historically knelt for the Divine Office. In Protestant worship, kneeling for confession and intercession remains common.",
    practice: "Kneel for one prayer session this week — not quickly, but deliberately. Let the discomfort remind you of what you are doing: approaching a holy God.",
  },
  {
    name: "Prostration",
    icon: "🙇",
    color: "#EF4444",
    scriptures: ["Matthew 26:39", "Revelation 4:10", "Numbers 16:22"],
    meaning: "Lying face-down before God is the most radical posture of submission. Jesus himself fell with his face to the ground in Gethsemane. The elders in Revelation cast their crowns and fell before the throne. Prostration says: I have nothing, I am nothing, you are everything.",
    tradition: "Prostration is practiced in Eastern Christianity (especially during Great Lent), in Islam, and in many African and Asian Christian traditions. It is rare in Western Protestantism but has deep biblical roots.",
    practice: "Practice prostration in private. Lie face-down and remain silent before God for several minutes. This is not performance — it is abandonment of self-presentation before the Holy One.",
  },
  {
    name: "Raised Hands",
    icon: "🙌",
    color: "#F59E0B",
    scriptures: ["Psalm 63:4", "1 Timothy 2:8", "Lamentations 3:41"],
    meaning: "Lifting hands in prayer is one of the oldest gestures of worship across cultures. It communicates both praise (receiving what God gives) and petition (reaching toward God in need). Paul instructs men to 'lift up holy hands in prayer' (1 Timothy 2:8). The physical act of opening hands upward trains the soul toward receptivity.",
    tradition: "Raised hands characterize charismatic and Pentecostal worship, but are ancient — found in the catacombs' art of the early church (the orans posture) and throughout Jewish prayer practice.",
    practice: "Raise your hands during a time of praise. If this feels unfamiliar, start with slightly lifted palms. Notice whether it affects your sense of God's presence.",
  },
  {
    name: "Bowed Head",
    icon: "🤲",
    color: "#10B981",
    scriptures: ["Genesis 24:26", "Exodus 34:8", "Matthew 6:6"],
    meaning: "The bowed head is the most commonly practiced posture in Western Christianity — a gesture of reverence and focused attention. Bowing the head directs attention inward and downward, away from visual distraction. It is a small prostration, accessible in any setting.",
    tradition: "Bowing the head became standard in Protestant worship as the primary prayer posture. It is connected to Jesus' instruction to pray 'in your room' (Matthew 6:6) — the bowed head creates a kind of interior room in public.",
    practice: "Pay attention to the next time you bow your head. Instead of habit, make it intentional: a conscious acknowledgment of God's presence and your own smallness.",
  },
  {
    name: "Walking Prayer",
    icon: "🚶",
    color: GREEN,
    scriptures: ["Genesis 5:24", "Deuteronomy 6:7", "Mark 1:35"],
    meaning: "Not all prayer requires stillness. Jesus withdrew to lonely places — often walking to them. The Israelites were commanded to speak of God 'when you walk along the road' (Deuteronomy 6:7). Walking prayer integrates body and spirit, bringing the whole person into communion with God.",
    tradition: "Walking prayer appears in pilgrimage traditions, prayer labyrinth practices, and the ancient Celtic practice of 'peregrinatio' — wandering with God. Many of the Psalms were composed for processions.",
    practice: "Take one prayer walk this week. Leave your phone behind. Pray aloud or silently as you walk. Let the rhythm of your steps become a rhythm of prayer.",
  },
];

const TRADITIONS = [
  { tradition: "Catholic & Orthodox", postures: "Standing (Sunday/feast days), Kneeling (penitential seasons), Prostration (ordinations, major feasts), Bowing (at the name of Jesus)", note: "Liturgical posture is specified for each prayer in the rite — it is not left to individual preference." },
  { tradition: "Anglican / Episcopal", postures: "Kneeling for confession and petition, Standing for praise and Gospel reading, Sitting for teaching — all within a single service", note: "The Book of Common Prayer includes posture rubrics. 'Let us kneel' and 'Let us stand' are liturgical instructions, not suggestions." },
  { tradition: "Pentecostal / Charismatic", postures: "Raised hands (praise), Kneeling at the altar (prayer ministry), Dancing (prophetic worship), Prostration (encounters with the Spirit)", note: "Posture is led by the Spirit rather than prescribed by rubric — freedom and responsiveness are valued." },
  { tradition: "Reformed / Presbyterian", postures: "Historically: Standing (prayer), Sitting (sermon), Kneeling (Lord's Supper) — though contemporary practice varies widely", note: "The Westminster Directory (1645) specified postures. Modern Reformed practice often retains less of this structure." },
  { tradition: "Contemplative / Monastic", postures: "Sitting (lectio divina, centering prayer), Prostration (special prayers), Walking (prayer walks, labyrinth)", note: "The body is not suppressed but engaged — stillness of body supports stillness of spirit." },
];

const PRACTICAL = [
  { q: "Isn't posture just external and performative?", a: "The body and soul are not separate. What we do with our bodies in prayer shapes what we experience in prayer — and vice versa. C.S. Lewis noted that the physical act of kneeling helps produce the humility it signifies. We are embodied creatures, and God meets us in our bodies." },
  { q: "What if I can't kneel or stand due to physical limitations?", a: "God is not a posture inspector. The point is engagement, not conformity. Use whatever position allows you to be most alert, focused, and attentive. A wheelchair-bound believer who prays with full attention glorifies God more than an able-bodied person who kneels out of habit with a wandering mind." },
  { q: "Should I vary my posture?", a: "Yes, intentionally. Different postures draw out different aspects of prayer. Stand for praise. Kneel for confession. Open your hands for intercession. Walk for processing and listening. Variation prevents routine from deadening the practice." },
  { q: "Is there a 'right' posture for prayer?", a: "No single posture is prescribed as universal in Scripture. Posture serves prayer — it does not constitute it. The goal is a body that is engaged and a soul that is present. Whatever posture best achieves that for you in a given moment is the right one." },
];

export default function PrayerPosturesPage() {
  const [activeTab, setActiveTab] = useState<"postures" | "traditions" | "faq">("postures");
  const [selected, setSelected] = useState<string | null>("Standing");

  const selectedPosture = POSTURES.find(p => p.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prayer Postures</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The body is not separate from the soul. How you position yourself in prayer shapes what you experience in prayer. Scripture describes at least six distinct physical postures of prayer — each embodying a different aspect of communion with God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "postures" as const, label: "The Postures", icon: "🧎" },
            { id: "traditions" as const, label: "By Tradition", icon: "⛪" },
            { id: "faq" as const, label: "Questions", icon: "❓" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "postures" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {POSTURES.map(p => (
                <button key={p.name} onClick={() => setSelected(p.name)}
                  style={{ width: "100%", background: selected === p.name ? `${p.color}15` : "transparent", border: `1px solid ${selected === p.name ? p.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <span style={{ color: selected === p.name ? p.color : TEXT, fontWeight: 700, fontSize: 14 }}>{p.name}</span>
                </button>
              ))}
            </div>
            {selectedPosture && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${selectedPosture.color}30`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 36 }}>{selectedPosture.icon}</span>
                    <h2 style={{ color: selectedPosture.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{selectedPosture.name}</h2>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {selectedPosture.scriptures.map(s => (
                      <span key={s} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ color: selectedPosture.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>MEANING</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{selectedPosture.meaning}</p>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>HISTORICAL TRADITION</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedPosture.tradition}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>PRACTICE THIS WEEK</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedPosture.practice}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "traditions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Different Christian traditions have developed distinct practices around prayer posture. Understanding these traditions helps you draw from the full breadth of the church's wisdom — not just your own tradition's defaults.
              </p>
            </div>
            {TRADITIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.tradition}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.postures}</p>
                <div style={{ background: BG, borderRadius: 8, padding: 12 }}>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Common questions about prayer posture — and why they matter more than you might think.
              </p>
            </div>
            {PRACTICAL.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{p.q}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
