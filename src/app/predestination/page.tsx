"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Election in Scripture", verse: "Ephesians 1:4-5", body: "'For he chose us in him before the creation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ' (Ephesians 1:4-5). The language is unambiguous: God chose, before time, in love, for a purpose. The question that divides traditions is not whether election exists but how it works — whether it is based on foreknown faith (Arminian) or is itself the unconditional source of faith (Reformed)." },
  { title: "Foreknowledge and Predestination", verse: "Romans 8:29-30", body: "Romans 8:29-30 gives the 'golden chain': 'those God foreknew he also predestined; those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.' The Arminian reads 'foreknew' as God knowing in advance who would believe — election follows foreseen faith. The Reformed reads foreknowledge as a relational term (to fore-love, to fore-choose) — predestination is the ground, not the result, of foreseen faith." },
  { title: "The Hardening of Pharaoh", verse: "Romans 9:18", body: "Romans 9 is the most challenging predestination text: 'God has mercy on whom he wants to have mercy, and he hardens whom he wants to harden' (9:18). Paul anticipates the objection: 'Then why does God still blame us?' His response is not to qualify the sovereignty but to assert God's right as Creator. Many traditions find this passage the most difficult; how one interprets it largely determines where one lands in the Calvinist/Arminian spectrum." },
  { title: "God's Will and Human Responsibility", verse: "Acts 2:23", body: "Acts 2:23 holds both without resolving: 'This man was handed over to you by God's deliberate plan and foreknowledge; and you, with the help of wicked men, put him to death.' The crucifixion was both divinely planned and humanly responsible. Scripture consistently maintains both strands — God's sovereignty in salvation and genuine human agency in receiving or rejecting it. The task is not to dissolve the tension but to hold it faithfully, as Scripture does." },
  { title: "The Universal Call and the Particular Election", verse: "Matthew 22:14", body: "'Many are invited, but few are chosen' (Matthew 22:14). Theologians distinguish the external call (the gospel proclaimed to all) from the internal or effectual call (the Spirit's work that produces genuine faith). The Reformed tradition holds that the effectual call always produces faith — it is irresistible not because it overrides the will but because it transforms it. The Arminian holds that the internal call can be genuinely resisted." },
];

const POSITIONS = [
  {
    name: "Calvinist / Reformed",
    color: "#6B4FBB",
    acronym: "TULIP",
    points: [
      { letter: "T", name: "Total Depravity", desc: "Sin affects every faculty — will, mind, affections. Humans are not merely sick but spiritually dead (Ephesians 2:1). Without divine intervention, no one chooses God." },
      { letter: "U", name: "Unconditional Election", desc: "God's election is not based on foreseen faith or merit but on his sovereign will alone. God chose particular people to save before the foundation of the world." },
      { letter: "L", name: "Limited Atonement", desc: "Also called 'definite atonement' — Christ's death secured salvation for the elect in particular, not merely made salvation possible for all. The most debated of the five points." },
      { letter: "I", name: "Irresistible Grace", desc: "The effectual calling of the Spirit always produces faith. God does not merely make salvation possible — he works in the elect to ensure they will and do come to him." },
      { letter: "P", name: "Perseverance of the Saints", desc: "Those whom God has elected and called will persevere to the end. True believers cannot ultimately fall away — not because of human strength but divine preservation." },
    ],
    key_figures: "John Calvin, Jonathan Edwards, John Owen, Charles Spurgeon, R.C. Sproul",
    key_texts: "Institutes of the Christian Religion (Calvin); The Freedom of the Will (Edwards)",
  },
  {
    name: "Arminian",
    color: "#F59E0B",
    acronym: "FACTS",
    points: [
      { letter: "F", name: "Freed Will", desc: "Prevenient grace restores sufficient freedom to enable genuine response to the gospel. Humans are not autonomous but are genuinely able to receive or reject grace." },
      { letter: "A", name: "Atonement for All", desc: "Christ died for all people without exception (2 Corinthians 5:15; 1 John 2:2). Salvation is universally available, not limited to particular persons." },
      { letter: "C", name: "Conditional Election", desc: "God elects those he foreknows will freely believe. Election is conditional on foreseen faith, not the unconditional ground of faith." },
      { letter: "T", name: "Total Depravity", desc: "Arminians affirm total depravity but maintain that prevenient grace restores the ability to respond. Shared with Calvinism in diagnosis; different in solution." },
      { letter: "S", name: "Security Debated", desc: "Classical Arminians hold that genuine believers can apostatize — fall away from genuine faith and be lost. Wesleyan Arminians generally hold this; some Arminians hold eternal security." },
    ],
    key_figures: "Jacob Arminius, John Wesley, Roger Olson, Clark Pinnock",
    key_texts: "The Works of Arminius; The Works of John Wesley",
  },
  {
    name: "Molinism",
    color: "#3B82F6",
    acronym: "Middle Knowledge",
    points: [
      { letter: "M", name: "Middle Knowledge", desc: "God knows not only all actual and possible worlds, but also what free creatures would freely do in any possible circumstance — called 'counterfactuals of creaturely freedom.'" },
      { letter: "I", name: "Individual Freedom", desc: "God's providential governance works through his knowledge of counterfactuals, achieving his purposes without overriding genuine human freedom." },
      { letter: "D", name: "Divine Providence", desc: "God actualizes the world in which those he wishes to save do in fact freely believe. Providence is sovereign and comprehensive without being deterministic." },
      { letter: "E", name: "Election via Foreknowledge", desc: "Election is grounded in God's middle knowledge of who would freely believe in the circumstances God actualizes. Both divine sovereignty and genuine freedom are preserved." },
    ],
    key_figures: "Luis de Molina, William Lane Craig, Alvin Plantinga",
    key_texts: "Concordia (Molina); The Only Wise God (Craig)",
  },
];

const PRACTICES = [
  { title: "Let Assurance Rest on Christ", desc: "Election is meant to produce assurance, not anxiety. 'Your names are written in heaven' (Luke 10:20). The assurance of salvation is not found by introspecting on whether you are elect but by looking to Christ — the one in whom the elect are chosen (Ephesians 1:4).", icon: "✝️" },
  { title: "Hold the Tension Humbly", desc: "Scripture maintains divine sovereignty and human responsibility side by side without resolving the tension philosophically. Wise theology does the same. Resist the urge to 'solve' what Scripture leaves as mystery, and be suspicious of systems that feel too tidy.", icon: "⚖️" },
  { title: "Evangelize with Urgency", desc: "All positions affirm genuine evangelism. The Reformed position: 'I do not know who the elect are, so I preach to all.' The Arminian: 'Christ died for all, so I appeal to all.' The doctrine of election has never logically silenced evangelism — in practice it has often intensified it.", icon: "📢" },
  { title: "Pray with Confidence", desc: "If God is sovereign in salvation, prayer is not attempting to inform or persuade an uncertain God but cooperating with the God who ordains means as well as ends. Spurgeon: 'I pray because God is sovereign. If he were not, prayer would be whistling in the dark.'", icon: "🙏" },
  { title: "Receive It as Grace", desc: "Whatever one's position, election is never grounds for pride — it is grounds for gratitude. 'What do you have that you did not receive? And if you did receive it, why do you boast as though you did not?' (1 Corinthians 4:7). All salvation is grace.", icon: "🎁" },
  { title: "Don't Let It Divide the Essential", desc: "Reformed and Arminian Christians share the gospel essentials: Christ crucified, the need for faith and repentance, the new birth, the resurrection. The predestination debate is important but secondary. Many churches of genuine gospel health have held differing views.", icon: "🤝" },
];

export default function PredestinationPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "positions" | "practices">("theology");
  const [selectedPos, setSelectedPos] = useState("Calvinist / Reformed");

  const pos = POSITIONS.find(p => p.name === selectedPos)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Predestination & Election</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Does God choose who will be saved — and if so, on what basis? Election is one of theology's most contested doctrines and one of Scripture's most certain ones. The debate is not whether election exists but how it works.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "positions" as const, label: "Positions", icon: "⚖️" },
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

        {activeTab === "positions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {POSITIONS.map(p => (
                <button key={p.name} onClick={() => setSelectedPos(p.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedPos === p.name ? p.color : BORDER}`, background: selectedPos === p.name ? `${p.color}20` : "transparent", color: selectedPos === p.name ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${pos.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h2 style={{ color: pos.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{pos.name}</h2>
                <span style={{ background: `${pos.color}15`, color: pos.color, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{pos.acronym}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {pos.points.map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, background: `${pos.color}06`, border: `1px solid ${pos.color}15`, borderRadius: 10, padding: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${pos.color}20`, color: pos.color, fontWeight: 900, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{pt.letter}</div>
                    <div>
                      <div style={{ color: pos.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{pt.name}</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY FIGURES</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_figures}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_texts}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Election is not an abstract puzzle but a pastoral doctrine. It was given to produce assurance, fuel evangelism, deepen prayer, and ground gratitude. These six implications bring the doctrine out of the library and into life.
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
