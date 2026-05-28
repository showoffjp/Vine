"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Is Prayer?", verse: "Psalm 62:8", body: "Prayer is the creature's response to the Creator's invitation to relationship — speech addressed to the living God who hears and acts. It is not an impersonal technique or a slot machine of blessing but a personal encounter between the creature and the One who made it. Pour out your heart before him; God is a refuge for us (Psalm 62:8). Prayer assumes that God is personal, that he communicates, that he is the kind of being who can be addressed. Without the God of the Bible, prayer collapses into self-talk or psychological exercise." },
  { title: "Prayer and Divine Sovereignty", verse: "James 5:16", body: "The most urgent theological question about prayer is whether it makes a difference if God has already determined what will happen. Reformed theology answers: God sovereignly ordains both ends and means, and prayer is one of the primary means by which he accomplishes his ordained purposes. The prayer of a righteous person is powerful and effective (James 5:16). God is not changed by prayer; rather, prayer is the God-ordained channel through which his will is enacted in the world. Prayer is no less real and no less necessary within a sovereign framework — it is more necessary, because God has made it the means." },
  { title: "Gethsemane: The Model of Prayer", verse: "Luke 22:42", body: "Not my will, but yours be done (Luke 22:42). Jesus in Gethsemane models the full range of honest prayer: anguish and petition (take this cup from me), submission and trust (yet not my will), and the silence that follows when the Father's answer is No. This is the prayer that could not have been answered according to its petition without the destruction of redemption. God's No to Jesus in Gethsemane was the greatest Yes to humanity in history. Gethsemane teaches: bring your honest anguish; submit to what God knows; trust that the cross leads to resurrection." },
  { title: "Persistence in Prayer", verse: "Luke 18:1", body: "Then Jesus told his disciples a parable to show them that they should always pray and not give up (Luke 18:1). The parable of the persistent widow makes a point about the character of God by contrast: if even a corrupt judge responds to persistence, how much more will the righteous Judge respond to his children. Biblical prayer is not passive resignation but persistent engagement. This is not theological contradiction of divine sovereignty — God uses our persistence as the means by which he brings about what he has purposes to accomplish. Persistence honors God; it says: I believe you are worth continuing to address." },
  { title: "The Interceding Spirit", verse: "Romans 8:26", body: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans (Romans 8:26). Prayer is a trinitarian act: we address the Father, through the Son (in Christ's name), by the enabling of the Spirit. The Spirit's intercession means we are never alone in prayer — even when we lack words, the Spirit carries our groanings before the throne. Prayer is not performance before God; it is participation in the ongoing communion of the Trinity." },
];

const TYPES = [
  { name: "Adoration", icon: "✨", color: GREEN, verse: "Psalm 100:4", desc: "Praising God for who he is, not for what he does. The purest form of prayer because it is most purely God-directed. Most prayers begin here — in the liturgical tradition, the Gloria Patri and Sanctus; in personal prayer, the quiet acknowledgment that God is God.", example: "Holy, holy, holy is the Lord Almighty; the whole earth is full of his glory (Isaiah 6:3)." },
  { name: "Confession", icon: "🙏", color: PURPLE, verse: "1 John 1:9", desc: "Honest acknowledgment of sin — not self-flagellation or performative guilt, but honest agreement with God about where we have failed, followed by reception of forgiveness. Confession requires both honesty (I did this) and trust (God forgives through Christ).", example: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions (Psalm 51:1)." },
  { name: "Thanksgiving", icon: "💛", color: "#F59E0B", verse: "Philippians 4:6", desc: "Gratitude for specific gifts and general grace — the response of noticing what God has done and saying so. Thanksgiving is the discipline of attention: it requires slowing down enough to notice provision that is too constant to be invisible. Paul commands it in everything.", example: "Give thanks to the Lord, for he is good; his love endures forever (Psalm 107:1)." },
  { name: "Supplication", icon: "🤲", color: "#3B82F6", verse: "Matthew 7:7", desc: "Asking — for oneself and others (intercession). Ask and it will be given to you; seek and you will find (Matthew 7:7). Supplication is not demanding; it is requesting. It carries both confidence (God hears) and humility (God decides). The breadth of biblical asking is stunning: daily bread, wisdom, healing, nations, the kingdom.", example: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God (Philippians 4:6)." },
  { name: "Lament", icon: "💧", color: "#EC4899", verse: "Psalm 13:1", desc: "Honest protest to God about suffering, injustice, and divine hiddenness. One third of the psalms are laments. Biblical lament is addressed to God (not about him), is honest (it says what is really felt), and moves through complaint toward trust. It is the opposite of resignation — it insists that God matters enough to address when things are wrong.", example: "How long, Lord? Will you forget me forever? How long will you hide your face from me? (Psalm 13:1)." },
  { name: "Contemplation", icon: "🌙", color: "#8B5CF6", verse: "Psalm 46:10", desc: "Silent, non-verbal waiting before God — not the emptying of the mind but the attentive, receptive presence to God. Be still, and know that I am God (Psalm 46:10). This form of prayer has deep roots in the mystical tradition (contemplatio), the Quaker meeting, the desert fathers. It is the discipline of letting God speak rather than only speaking.", example: "My soul finds rest in God alone; my salvation comes from him (Psalm 62:1)." },
];

const PRACTICES = [
  { title: "Pray the Psalms", desc: "The Psalter is the Bible's prayer book — a school of prayer given by God to teach his people how to address him. Praying the psalms gives words for anguish, praise, confusion, and confidence that go beyond what we can generate from within our own emotional range. Start with Psalm 23, 51, or 139.", icon: "📖" },
  { title: "Use a Fixed-Hour Rhythm", desc: "The ancient practice of fixed-hour prayer (morning, midday, evening, and night) anchors the day in God rather than in productivity. The Divine Office, the Book of Common Prayer, and many liturgical traditions structure daily life around these prayer hours. Even a simple morning and evening discipline reorients the day.", icon: "⏰" },
  { title: "Keep a Prayer List", desc: "Writing down specific prayer requests builds faith over time: you can see where prayers were answered, how God moved, and what he seemed to decline. The specificity of written petitions also disciplines vague spirituality into concrete asking. Review your list regularly — both for interceding and for noticing answers.", icon: "📝" },
  { title: "Pray with Someone Else", desc: "Praying aloud with another person — spouse, friend, small group — is both vulnerable and faith-building. It breaks the privatization of prayer and models the communal dimension of the Lord's Prayer (Our Father). Even a brief shared prayer moment in a meeting or before a meal changes the character of the relationship.", icon: "🤝" },
  { title: "Practice Contemplative Silence", desc: "Spend five minutes in silence after prayer rather than rushing back into activity. This is not emptying the mind but holding it open before God, attentive and expectant. Much of what passes for Christian prayer is monologue; silence creates space for something more like dialogue. Even discomfort in the silence is instructive — it reveals how much we rely on words to manage the relationship.", icon: "🌿" },
  { title: "Pray Scripture Back to God", desc: "Take a text you have read and turn it into prayer: claim its promises, confess its commands you have failed, praise the God it describes. This practice keeps prayer Biblically grounded and prevents the drift toward vague spirituality. When you pray a promise, you are asking God to be who he has said he is.", icon: "🔄" },
];

export default function TheologyOfPrayerPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "types" | "practices">("theology");
  const [selectedType, setSelectedType] = useState("Adoration");

  const type = TYPES.find(t => t.name === selectedType)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Theology of Prayer</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Why does prayer work if God already knows everything? What are we actually doing when we pray? The theology of prayer answers the deepest questions about one of the most central practices of Christian life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "types" as const, label: "Types of Prayer", icon: "🗂️" },
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
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedType === t.name ? t.color : BORDER}`, background: selectedType === t.name ? `${t.color}20` : "transparent", color: selectedType === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.icon} {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${type.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 32 }}>{type.icon}</span>
                <div>
                  <h2 style={{ color: type.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{type.name}</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{type.verse}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{type.desc}</p>
              <div style={{ background: `${type.color}08`, border: `1px solid ${type.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: type.color, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>EXAMPLE FROM SCRIPTURE</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{type.example}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Prayer is a practice — it grows by doing, not merely by understanding. These six practices are the most time-tested ways of building a genuine prayer life.
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
