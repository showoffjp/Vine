"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Declares Aloneness Not Good", verse: "Genesis 2:18", body: "'It is not good for the man to be alone' (Genesis 2:18). God said this before sin entered the world. Loneliness is not a character flaw or a spiritual failure — it is the God-given signal that community is missing. The ache of loneliness is a correct diagnosis: you were made for more than this." },
  { title: "Even Jesus Was Lonely", verse: "Mark 14:32-40", body: "In Gethsemane, Jesus took his closest disciples and asked them to stay and watch with him. He returned three times to find them sleeping. 'My soul is overwhelmed with sorrow to the point of death... Could you not keep watch for one hour?' (Mark 14:34, 37). The Son of God experienced profound loneliness — misunderstood, abandoned at his moment of deepest need. He knows what you feel." },
  { title: "The Psalms of Isolation", verse: "Psalm 25:16, 88:18", body: "'Turn to me and be gracious to me, for I am lonely and afflicted' (Psalm 25:16). 'Darkness is my closest friend' (Psalm 88:18). God preserved the anguish of isolation within his inspired Word. The psalms of loneliness are not cautionary tales — they are invitations. Your loneliness can be brought to God as prayer." },
  { title: "Loneliness vs. Solitude", verse: "Mark 1:35", body: "Jesus regularly withdrew to lonely places to pray (Mark 1:35). There is a difference between loneliness — the unwanted, unchosen experience of isolation — and solitude, the chosen withdrawal for encounter with God. Solitude is the discipline that transforms loneliness: learning to be with God in the alone so that aloneness becomes the place of encounter rather than the place of absence." },
  { title: "The Church as Antidote to Loneliness", verse: "Acts 2:42-47", body: "The early church in Acts 2 was characterized by daily contact — 'they broke bread in their homes and ate together with glad and sincere hearts' (Acts 2:46). The solution to epidemic loneliness is not programs but genuine, daily, shared life. The church is supposed to be the community that interrupts isolation — and when it functions as it was designed, it is." },
];

const TYPES = [
  { type: "New-Place Loneliness", color: "#3B82F6", desc: "After a move, transition, or life change. You know no one; the connections you had don't transfer to a new city.", response: "Join one church and stick to it. Say yes to every social invitation for the first 6 months. It takes 2-3 years to build a real network in a new place — be patient." },
  { type: "In-a-Crowd Loneliness", color: "#F59E0B", desc: "Surrounded by people but not truly known. The conversations stay surface-level; no one knows what's actually happening inside.", response: "The transition from surface to depth requires someone to go first. Be the one who shares something vulnerable. Most people are waiting for permission." },
  { type: "Grief Loneliness", color: "#EF4444", desc: "The death or departure of someone essential — a spouse, close friend, parent. The loneliness is not just absence but the unique presence of that person, now missing.", response: "This loneliness is appropriate grief. Don't rush past it. Find others who have grieved similarly. The goal is not replacing the relationship but learning to carry the grief with community." },
  { type: "Chronically Single Loneliness", color: PURPLE, desc: "The ache of wanting a partner who hasn't arrived. Watching peers marry, have children, and build lives while yours remains solitary.", response: "The singles page on this app addresses this specifically. God's goodness does not depend on marital status. Invest deeply in friendships; many married couples are lonelier than their single friends." },
  { type: "Spiritual Loneliness", color: "#10B981", desc: "Feeling that no one around you shares your depth of faith, or that God himself feels distant and silent.", response: "Find one or two people who pray earnestly and pursue them. Spiritual loneliness often drives us into the very presence of God that is the deepest remedy for it." },
];

const PRACTICES = [
  { title: "Initiate First, Always", desc: "Waiting to be invited is the loneliness trap. Take the risk of being the one who invites, calls, texts, shows up. You cannot control how people respond, but you can control whether you try.", icon: "📞" },
  { title: "Choose Depth over Breadth", desc: "Invest in 2-3 relationships with genuine vulnerability rather than maintaining 20 pleasant acquaintances. Depth is built through shared time, honest conversation, and showing up in hard moments.", icon: "🎯" },
  { title: "Join and Stay", desc: "The loneliest people are often those who try many communities briefly and find none perfect. Pick one church, one small group, one recurring context and stay long enough for people to know you.", icon: "⚓" },
  { title: "Practice Being Present", desc: "Paradoxically, the most connected people often feel alone because they are not truly present with anyone. Put the phone away. Listen without thinking about what you'll say next.", icon: "👁️" },
  { title: "Let God Into the Loneliness", desc: "Psalm 25:16: 'Turn to me and be gracious, for I am lonely.' Bring the loneliness directly to God in prayer. He is the one companion who never leaves, never gets tired of you, and knows you completely.", icon: "🙏" },
  { title: "Serve the Lonely", desc: "The quickest way out of loneliness is to move toward someone lonelier than you. Visit the elderly, befriend the new person, invite the person who always sits alone. Service consistently creates community.", icon: "❤️" },
];

export default function LonelinessPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "types" | "practices">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Loneliness & Community</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God declared aloneness 'not good' before sin ever entered the picture. Loneliness is not a failure — it is a signal. And the gospel is the beginning of the answer.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "types" as const, label: "Types of Loneliness", icon: "🔍" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "types" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Loneliness is not one experience — it has different shapes, causes, and remedies. Naming the type you're experiencing helps you respond appropriately rather than applying a generic solution to a specific problem.
              </p>
            </div>
            {TYPES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{t.type}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.desc}</p>
                <div style={{ background: `${t.color}10`, border: `1px solid ${t.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: t.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>RESPONSE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.response}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
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
        )}
      </div>
    </div>
  );
}
