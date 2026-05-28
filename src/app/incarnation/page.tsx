"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Word Became Flesh", verse: "John 1:14", body: "'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth' (John 1:14). This is the most astonishing sentence in all of literature. The eternal Word — through whom all things were made (1:3) — took on human flesh. Not as an appearance (Docetism) but in full, genuine humanity. God became what we are so that we could become what he is." },
  { title: "Fully God and Fully Human", verse: "Colossians 2:9", body: "'In Christ all the fullness of the Deity lives in bodily form' (Colossians 2:9). The Council of Chalcedon (451 AD) gave the orthodox formulation: Christ is one person with two natures — fully divine, fully human — without confusion, change, division, or separation. He is not half-God and half-man, nor alternately divine and human, but permanently, completely both. This is not a philosophical puzzle to solve but a mystery to confess." },
  { title: "The Kenosis", verse: "Philippians 2:6-7", body: "'Though he was in the form of God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing' (Philippians 2:6-7). The Greek word translated 'made himself nothing' is kenōsen — he emptied himself. This has generated intense debate: What did the Son empty himself of? The consensus is not of divine attributes but of their independent exercise — he voluntarily lived within human limitations, dependent on the Father and the Spirit." },
  { title: "Why the Incarnation?", verse: "Hebrews 2:14-17", body: "Hebrews 2:14-17 gives multiple reasons: to destroy the devil's power over death, to make atonement for sin, and to become a merciful and faithful high priest. Athanasius added: 'He became what we are so that we might become what he is.' The incarnation is not a regrettable emergency — it is the fitting, beautiful act by which God, who created humanity for union with himself, recapitulated what had been lost and opened the way to divinization." },
  { title: "The Permanent Humanity of Christ", verse: "1 Timothy 2:5", body: "'There is one God and one mediator between God and mankind, the man Christ Jesus' (1 Timothy 2:5). The incarnation did not end at the resurrection or ascension. Jesus rose bodily, ascended bodily, and sits at the Father's right hand as the glorified, embodied God-man. The Incarnation is permanent. At this moment, there is a human being at the center of the Godhead — the firstborn of the new creation, the pattern and pledge of our own bodily resurrection." },
];

const HERESIES = [
  { name: "Docetism", era: "1st–2nd Century", color: "#EF4444", claim: "Jesus only appeared to have a body — he was pure spirit. The divine Christ could not truly suffer or die in physical flesh.", error: "Denies the genuine humanity of Christ. If Jesus did not truly become human, his suffering was theater and his resurrection irrelevant to our embodied humanity.", key_verse: "1 John 4:2 — 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God'" },
  { name: "Arianism", era: "4th Century", color: "#F59E0B", claim: "The Son was the highest created being — not truly divine, but subordinate to the Father and brought into existence at a point in time. 'There was a time when he was not.'", error: "Denies the true divinity of Christ. If Christ is not truly God, he cannot truly save; only God can redeem humanity. The Council of Nicaea (325) rejected Arianism and affirmed the Son is 'of one substance with the Father.'", key_verse: "John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God'" },
  { name: "Nestorianism", era: "5th Century", color: PURPLE, claim: "Christ has two distinct persons, not two natures in one person. The divine Son and the human Jesus are separate subjects, only loosely united. Mary is not theotokos (God-bearer) but only Christotokos (Christ-bearer).", error: "Divides the unity of Christ. The Council of Ephesus (431) rejected this, affirming that Mary can rightly be called theotokos because the one she bore was truly God incarnate.", key_verse: "Luke 1:43 — 'Why am I so favored, that the mother of my Lord should come to me?'" },
  { name: "Eutychianism / Monophysitism", era: "5th Century", color: "#3B82F6", claim: "After the Incarnation, Christ has only one nature — a merged divine-human nature. The human nature was absorbed into and transformed by the divine.", error: "Confuses and mingles the two natures. The Council of Chalcedon (451) rejected this, insisting the two natures remain distinct even as they are united in one person.", key_verse: "Hebrews 2:17 — 'He had to be made like them, fully human in every way'" },
  { name: "Apollinarianism", era: "4th Century", color: GREEN, claim: "Jesus had a human body but the divine Logos replaced his human mind or spirit. He was thus not fully human — missing the highest human faculty.", error: "Denies the completeness of Christ's humanity. Gregory of Nazianzus countered: 'What has not been assumed cannot be healed' — if Christ did not take on our full humanity, our full humanity is unredeemed.", key_verse: "John 1:14 — 'The Word became flesh' — fully, not partially" },
];

const PRACTICES = [
  { title: "Let Christmas Have Its Weight", desc: "The birth of Christ is not a sentimental occasion but the most dramatic event in the history of the universe. The eternal Creator became a nursing infant. Sit with the strangeness and the glory of it. Don't let familiarity dull the astonishment that the Word became flesh.", icon: "⭐" },
  { title: "Pray to a God Who Knows", desc: "The permanent humanity of Christ means God has experienced human weakness, temptation, grief, exhaustion, and pain — not abstractly but from the inside. 'We do not have a high priest who is unable to empathize with our weaknesses' (Hebrews 4:15). Pray to him as one who has been where you are.", icon: "🙏" },
  { title: "Honor Your Own Body", desc: "God took on flesh. The Incarnation declares that matter matters — that bodies are not merely containers for souls but are the site of redemption. The resurrection of the body is the goal, not escape from it. Honor your body as the temple of the Spirit and the object of God's redemptive concern.", icon: "🏛️" },
  { title: "Read the Chalcedonian Definition", desc: "Read the Chalcedonian Definition (451 AD) slowly and with attention. It is not dry formula — it is a map of the mystery of Christ hammered out in controversy. Understanding what it excludes (the heresies) is as important as what it affirms.", icon: "📜" },
  { title: "Celebrate the Fullness of Salvation", desc: "Because Christ assumed full humanity, he redeemed the whole person — body, mind, spirit, emotions. Salvation is not escape from embodied life but its redemption and transformation. Anything that treats physical existence as irrelevant or shameful is sub-Christian.", icon: "✝️" },
  { title: "Wonder at Divinization", desc: "Athanasius's formula — 'he became what we are so that we might become what he is' — points to the goal of salvation: participation in the divine nature (2 Peter 1:4). This is the Eastern church's concept of theosis or divinization — not that we become God, but that through union with Christ we share in his divine life. Let this expand your vision of what salvation means.", icon: "✨" },
];

export default function IncarnationPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "heresies" | "practices">("theology");
  const [selectedHeresy, setSelectedHeresy] = useState("Docetism");

  const heresy = HERESIES.find(h => h.name === selectedHeresy)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Incarnation</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God became human. The eternal Word took on flesh, not as a temporary disguise but as a permanent union — fully divine, fully human, one person forever. The Incarnation is the hinge of all history.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "heresies" as const, label: "Historic Errors", icon: "⚠️" },
            { id: "practices" as const, label: "Implications", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}25`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>THE CHALCEDONIAN FORMULA (451 AD)</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                "One and the same Christ, Son, Lord, only-begotten, acknowledged in two natures which undergo no confusion, no change, no division, no separation; at no point was the difference between the natures taken away through the union, but rather the property of both natures is preserved and comes together into a single person and a single subsistent being."
              </p>
            </div>
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

        {activeTab === "heresies" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The historic heresies about Christ's person are not merely ancient mistakes — they represent permanent temptations to make Christ more manageable. Understanding them sharpens the orthodox confession.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {HERESIES.map(h => (
                <button key={h.name} onClick={() => setSelectedHeresy(h.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedHeresy === h.name ? h.color : BORDER}`, background: selectedHeresy === h.name ? `${h.color}20` : "transparent", color: selectedHeresy === h.name ? h.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {h.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${heresy.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ color: heresy.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{heresy.name}</h2>
                <span style={{ background: `${heresy.color}15`, color: heresy.color, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{heresy.era}</span>
              </div>
              <div style={{ background: `${heresy.color}08`, border: `1px solid ${heresy.color}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                <div style={{ color: heresy.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE CLAIM</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{heresy.claim}</p>
              </div>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE ERROR</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{heresy.error}</p>
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>THE CORRECTIVE</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{heresy.key_verse}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Incarnation is not only a doctrine to defend but a reality that changes how we live — how we pray, relate to our bodies, understand suffering, and anticipate the resurrection.
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
