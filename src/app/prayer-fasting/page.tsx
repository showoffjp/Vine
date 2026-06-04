"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "types" | "examples" | "practices" | "videos";

const THEOLOGY = [
  { title: "Fasting as Spiritual Discipline", verse: "Matthew 6:16-18", body: "Jesus assumes his followers will fast: 'When you fast' — not 'if you fast' (Matthew 6:16). Fasting is not an OT relic superseded by grace; it is a practice Jesus anticipated, participated in (40 days, Matthew 4:2), and gave instructions for. The command is against performative fasting 'to be seen by others' — the fast that pleases God is done in secret, seen only by the Father." },
  { title: "Fasting and Prayer Together", verse: "Acts 13:2-3", body: "Fasting almost always appears in Scripture paired with prayer. The early church fasted when sending missionaries (Acts 13:2-3), when appointing elders (Acts 14:23), in times of crisis (Esther 4:16, Jonah 3:5-10), and in seeking God's direction. The combination is not coincidental: fasting creates focused attention that intensifies prayer. Hunger becomes a physical reminder to pray." },
  { title: "Isaiah 58: The Fast God Chooses", verse: "Isaiah 58:6-7", body: "God rejects Israel's religious fasting because it coexists with oppression and injustice. The fast God chooses is 'to loose the chains of injustice, to set the oppressed free, to share your food with the hungry' (Isaiah 58:6-7). This is not an argument against physical fasting but a warning that fasting without justice is theater. The fast that breaks chains is more valuable than the fast that breaks bread." },
  { title: "Fasting and the Kingdom", verse: "Mark 2:18-20", body: "When asked why his disciples don't fast, Jesus replies: 'How can the guests of the bridegroom fast while he is with them? They cannot... But the time will come when the bridegroom will be taken from them, and on that day they will fast' (Mark 2:19-20). Jesus frames fasting as appropriate to the era of his absence — which means it is appropriate to now. We fast because the bridegroom has gone and has not yet returned." },
];

const TYPES = [
  { name: "Complete Fast", color: "#EF4444", desc: "No food and sometimes no water for a set period. Used in Scripture for crisis moments (Esther 4:16: 'Do not eat or drink for three days'). Medically appropriate only for short periods; not recommended beyond 72 hours without medical supervision.", best_for: "Emergency intercession, crisis moments, extraordinary seeking of God" },
  { name: "Normal Fast", color: "#F59E0B", desc: "Abstaining from food but drinking water and sometimes juice. The most common biblical type. Can be sustained for longer periods (Daniel fasted 21 days this way, Daniel 10:3). Hunger pangs are reminders to pray.", best_for: "Sustained intercession, decision-making, regular spiritual practice" },
  { name: "Partial Fast", color: PURPLE, desc: "Abstaining from specific foods or meals — like Daniel's fast from 'pleasant food' (meat, wine, Daniel 10:3). Appropriate for those with medical conditions, or as an introduction to fasting.", best_for: "Medical limitations, beginners, preparation for fuller fasting" },
  { name: "Intermittent Fast", color: "#3B82F6", desc: "Skipping breakfast and/or lunch as a daily discipline. Sometimes called the 'Discipline of the Empty Stomach.' The morning hunger becomes a daily prompt for prayer.", best_for: "Daily prayer intensification, building the habit of fasting" },
  { name: "Congregational Fast", color: GREEN, desc: "A whole church or community fasting together, often for a specific purpose — before a major decision, during a crisis, or in a dedicated prayer week. Corporate fasting amplifies intercession.", best_for: "Church decisions, community crises, revival and renewal" },
];

const EXAMPLES = [
  {
    id: "moses",
    name: "Moses on Sinai",
    verse: "Exodus 34:28 / Deuteronomy 9:9",
    color: "#F59E0B",
    duration: "40 days x2",
    context: "Moses fasted twice for 40 days on Mount Sinai — once to receive the law (Exodus 34:28), and once to intercede for Israel after the golden calf (Deuteronomy 9:9-18). The second fast was specifically intercessory: Israel had broken the covenant and God had threatened to destroy them. Moses fasted prostrate before God for 40 days on their behalf. His fast was a form of identification with the sin and a pleading for mercy.",
    lesson: "Fasting can be the language of extreme intercession — when words are insufficient, the body speaks. Moses identified himself so completely with the people that he was willing to be blotted out with them (Exodus 32:32).",
  },
  {
    id: "elijah",
    name: "Elijah's 40-Day Journey",
    verse: "1 Kings 19:8",
    color: "#3B82F6",
    duration: "40 days",
    context: "After his collapse under the juniper tree, the angel of the Lord fed Elijah twice, then said 'Arise and eat; the journey is too great for you.' On the strength of that meal, Elijah traveled 40 days to Horeb (Sinai). The text does not emphasize fasting but the 40-day journey sustained by angelic food is a form of supernatural provision for divine encounter. At Horeb, God appeared to him — not in wind or earthquake or fire, but in a still small voice.",
    lesson: "Sometimes God himself provides the strength for the journey. Elijah did not manufacture the encounter — he was brought to it. The 40-day journey was preparation for the word God needed to speak.",
  },
  {
    id: "esther",
    name: "Esther's National Fast",
    verse: "Esther 4:16",
    color: "#EC4899",
    duration: "3 days",
    context: "When Mordecai asked Esther to approach the king to plead for her people, Esther knew it could mean her death. She responded: 'Go, gather all the Jews who are in Susa, and fast on my behalf — do not eat or drink for three days, night or day. I and my maids will also fast in the same way.' The corporate fast preceded her most dangerous action. The whole community of faith stood with her through fasting before she stood alone before the king.",
    lesson: "Corporate fasting is communal solidarity in the face of danger. The community's fasting was not passive — it was an active holding of Esther before God while she acted. Your community can fast for you when you must act.",
  },
  {
    id: "daniel",
    name: "Daniel's 21-Day Fast",
    verse: "Daniel 10:2-3",
    color: "#8B5CF6",
    duration: "21 days",
    context: "Daniel fasted for 21 days — no pleasant food, meat, or wine — while in mourning over the prophetic word he had received (Daniel 10:2-3). On the 21st day, an angel appeared explaining that he had been sent from the first day Daniel began to pray, but had been delayed by the 'prince of the Persian kingdom' for 21 days. Daniel's persistence in fasting was directly connected to the movement of heavenly realities he could not see.",
    lesson: "Persistence in fasting-prayer can cooperate with divine processes in ways we cannot observe. The delay was not divine inattention but spiritual conflict. Daniel's continued fasting was not futile — it was active intercession in an invisible war.",
  },
  {
    id: "anna",
    name: "Anna the Prophetess",
    verse: "Luke 2:36-37",
    color: GREEN,
    duration: "Decades",
    context: "Anna was a widow of 84 who 'never left the temple but worshiped night and day, fasting and praying' (Luke 2:37). She was present when Mary and Joseph brought the infant Jesus to the temple and immediately recognized him, giving thanks and speaking about him to all who were looking for the redemption of Jerusalem. Her decades of fasting and prayer were directed toward this moment — the arrival of the redemption she had prayed for.",
    lesson: "Some fasting is long-term, directional prayer — holding a petition before God across years and decades. Anna's life of fasting was her vocation. She kept watch until the answer arrived. This kind of sustained prayer-fasting shapes the one who prays as much as it shapes events.",
  },
  {
    id: "paul",
    name: "Paul's Fasting Pattern",
    verse: "2 Corinthians 11:27 / Acts 9:9",
    color: "#F59E0B",
    duration: "Recurring",
    context: "Paul mentions fasting twice in his letters as part of his apostolic suffering (2 Corinthians 6:5; 11:27). At his conversion, he fasted three days, blind and disoriented, before Ananias arrived (Acts 9:9). He and Barnabas fasted when appointing elders in new churches (Acts 14:23). Fasting was woven into Paul's missionary practice — at critical appointments, in suffering, and in seeking God's direction.",
    lesson: "Fasting was not a special event for Paul but a regular feature of ministry — connected to leadership appointments, mission discernment, and the costs of apostolic life. It can be similarly woven into the normal pattern of Christian service.",
  },
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
  const [tab, setTab] = usePersistedState<Tab>("vine_prayer-fasting_tab", "theology");
  const [selectedType, setSelectedType] = useState("Complete Fast");
  const [selectedExample, setSelectedExample] = useState("moses");

  const type = TYPES.find(t => t.name === selectedType)!;
  const example = EXAMPLES.find(e => e.id === selectedExample)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "types" as Tab, label: "Types", icon: "📋" },
            { id: "examples" as Tab, label: "Bible Examples", icon: "📜" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "types" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TYPES.map(t => (
                <button key={t.name} onClick={() => setSelectedType(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedType === t.name ? t.color : BORDER}`, background: selectedType === t.name ? `${t.color}15` : "transparent", color: selectedType === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${type.color}25`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: type.color, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>{type.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{type.desc}</p>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 14, margin: 0 }}>{type.best_for}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "examples" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 185, flexShrink: 0 }}>
              {EXAMPLES.map(e => (
                <button key={e.id} onClick={() => setSelectedExample(e.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedExample === e.id ? e.color : BORDER}`, background: selectedExample === e.id ? `${e.color}12` : "transparent", color: selectedExample === e.id ? e.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {e.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${example.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <h2 style={{ color: example.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{example.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}><VerseRef reference={example.verse} /></div>
                  </div>
                  <span style={{ background: `${example.color}15`, color: example.color, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{example.duration}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 18 }}>{example.context}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>THE LESSON</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{example.lesson}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Fasting is a learnable discipline. These {PRACTICES.length} practices make fasting both spiritually fruitful and physically sustainable.
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

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "nNqLJ-_IOPA", title: "Fasting and Prayer", channel: "John Piper Desiring God", description: "John Piper explores the biblical theology of fasting and prayer, explaining why fasting is not an Old Testament relic but a living discipline for the Christian life." },
              { videoId: "7MNWnxCjZKk", title: "The Discipline of Fasting", channel: "Ligonier Ministries", description: "Ligonier Ministries examines fasting as a spiritual discipline — its biblical basis, its purpose, and how it fits into the broader life of Christian devotion." },
              { videoId: "wHZt1SKcNAE", title: "Prayer and Fasting: A Guide to Biblical Practice", channel: "Tim Keller Gospel in Life", description: "Tim Keller provides a practical and theological guide to prayer and fasting, grounding the practice in Scripture and showing its relevance for the contemporary Christian." },
              { videoId: "acYqBfLiAg8", title: "Why Should Christians Fast?", channel: "Desiring God", description: "Desiring God addresses the question of why fasting still matters for followers of Jesus, connecting the discipline to hunger for God and the return of the bridegroom." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
