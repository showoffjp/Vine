"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Renewal, Not Replacement", verse: "Revelation 21:1-5", body: "John's vision is of 'a new heaven and a new earth' — but the word translated 'new' (kainos) means renewed or transformed, not created from nothing. God does not abandon his creation; he redeems it. The material world is not an error to be escaped but a good creation to be restored. This means Christian hope is not about leaving earth for heaven but about heaven coming to a renewed earth — exactly what Revelation 21 describes." },
  { title: "Continuity and Transformation", verse: "1 Corinthians 15:42-44", body: "Paul uses the metaphor of a seed and a plant to describe the relationship between our current bodies and resurrection bodies. The seed is buried and becomes something vastly more glorious — yet there is continuity. The same is true of the creation: the new creation is not a different universe but this universe redeemed, purified, and glorified. What we do with our bodies and in the material world now has eschatological significance — it is not thrown away." },
  { title: "Already and Not Yet", verse: "2 Corinthians 5:17", body: "'If anyone is in Christ, the new creation has come' (2 Corinthians 5:17). The new creation is not only future; it has already broken into the present through the Spirit. Every act of repentance, reconciliation, justice, beauty, and love is a foretaste of the new creation. The Spirit is the 'deposit' guaranteeing what is to come (Ephesians 1:14). Christians live between the first installment and the full payment." },
  { title: "The City and the Garden", verse: "Revelation 22:1-5", body: "The Bible begins in a garden (Genesis 2) and ends in a garden-city (Revelation 22). The river of life, the tree of life, the absence of curse — Eden is restored. But it is also expanded: the garden has become a city, humanity has multiplied, the nations bring their glory in. The new creation is not a return to innocence but an advance to glorification — a creation that has come through redemption and entered into its fullness." },
  { title: "Implications for Work and Culture", verse: "1 Corinthians 15:58", body: "Paul grounds present Christian action in eschatological reality: 'your labor in the Lord is not in vain' (1 Corinthians 15:58). This is not merely consolation — it is a claim about continuity. What is done in Christ will somehow persist into the new creation. Work that serves human flourishing, beauty that reflects God's glory, justice that protects the vulnerable — these are not wasted efforts destined for destruction but investments in the coming kingdom." },
];

const CONTRASTS = [
  { wrong: "Heaven is a spiritual realm where disembodied souls float forever", right: "The new creation is a physical reality — renewed earth, resurrection bodies, embodied flourishing", verse: "Revelation 21:1-4" },
  { wrong: "This world is destined for total destruction, so nothing material matters", right: "God redeems creation; what is done in Christ is not lost. Material creation has eternal dignity", verse: "Romans 8:19-21" },
  { wrong: "The goal of life is to escape earth and get to heaven", right: "The goal is to participate in the reconciliation of all things in Christ — on earth as it is in heaven", verse: "Colossians 1:20" },
  { wrong: "Christians are just waiting around until heaven", right: "Christians are agents of new creation now — signs, foretastes, and ambassadors of the coming kingdom", verse: "2 Corinthians 5:20" },
  { wrong: "Evangelism is all that matters — culture, art, and justice are distractions", right: "Everything done for God's glory participates in his purposes. The new creation includes the nations' glory", verse: "Revelation 21:24-26" },
];

const PRACTICES = [
  { title: "Live Now as if Then", desc: "The resurrection tells us what the end looks like. Work backward from that end. Every act of love, justice, beauty, and truth is a foretaste of the new creation — which means it is worth doing now.", icon: "🌅" },
  { title: "Treat Bodies as Significant", desc: "If the future is bodily resurrection, bodies matter now. Care for your body, care for others' bodies, resist anything that treats human bodies as disposable. Healthcare, food, shelter, and physical dignity are eschatologically loaded.", icon: "💪" },
  { title: "Care for Creation", desc: "If this creation is being redeemed (not replaced), creation care is an act of faith. Stewardship of the earth is not sentimentalism — it is participation in God's purposes for his world.", icon: "🌿" },
  { title: "Make Beautiful Things", desc: "Art, music, architecture, craftsmanship, and beauty in everyday life are not frivolous — they are anticipations of the new creation's glory. God is the first artist; human creativity reflects the image of God.", icon: "🎨" },
  { title: "Pursue Justice", desc: "Every act of justice — protecting the vulnerable, advocating for the poor, confronting oppression — is a foretaste of the kingdom. Justice is not politics; it is eschatology made present.", icon: "⚖️" },
  { title: "Pray with Eschatological Hope", desc: "Jesus taught us to pray: 'Your kingdom come, your will be done, on earth as it is in heaven' (Matthew 6:10). This is not resignation but petition — calling on God to bring his new creation reality into the present.", icon: "🙏" },
];

export default function NewCreationPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "contrasts" | "practices">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The New Creation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God does not abandon his creation — he redeems it. The Christian hope is not escape from earth into a spiritual realm, but the resurrection of bodies and the renewal of all things in Christ.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "contrasts" as const, label: "Common Misunderstandings", icon: "⚖️" },
            { id: "practices" as const, label: "Living It Now", icon: "🌱" },
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

        {activeTab === "contrasts" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Much popular Christian thinking about the end is shaped more by Greek dualism (spirit good, matter bad) than by biblical eschatology. These contrasts clarify the biblical picture.
              </p>
            </div>
            {CONTRASTS.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 8, padding: 14 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 6 }}>POPULAR BUT WRONG</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.wrong}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>BIBLICAL PICTURE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.right}</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{c.verse}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The new creation is not only future — it has already begun in Christ and by the Spirit. These six practices are ways to participate in the new creation now.
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

        <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 24 }}>
          <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>THE RIVER AND THE TREE</div>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
            Revelation 22 ends with a river of life flowing through the city, the tree of life bearing fruit for the healing of the nations, and the face of God seen at last without mediation. This is the telos — the goal toward which all of history moves. The Christian life is not treading water until this arrives; it is participating in its arrival. Every prayer, every act of love, every moment of justice is a stitch in the tapestry of the new creation that God is weaving.
          </p>
        </div>
      </div>
    </div>
  );
}
