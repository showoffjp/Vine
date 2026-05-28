"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TYPES_OF_GRACE = [
  {
    id: "common",
    name: "Common Grace",
    icon: "☀️",
    color: "#F59E0B",
    definition: "The grace God extends to all humanity — believer and unbeliever alike — through the preservation of the created order, conscience, reason, beauty, and restraint of evil.",
    verses: ["Matthew 5:45", "Acts 14:17", "Romans 2:14-15"],
    examples: [
      "The sun rises and rain falls on the just and unjust alike",
      "Unbelievers can do genuinely good things, make scientific discoveries, create beautiful art",
      "Human conscience retains some moral awareness even after the Fall",
      "Governments restrain evil and promote a degree of justice",
      "Natural beauty and order reflect the Creator to all people",
    ],
    significance: "Common grace is why Christians can appreciate art, science, and wisdom from non-Christians. It explains the genuine good that exists in the world despite human sinfulness. It is also the basis for Christian engagement with culture rather than withdrawal.",
  },
  {
    id: "prevenient",
    name: "Prevenient Grace",
    icon: "🌱",
    color: "#10B981",
    definition: "In Arminian/Wesleyan theology: the grace that goes before salvation, enabling sinful humans to respond to the gospel by restoring the capacity of free will that was damaged by the Fall.",
    verses: ["John 12:32", "Titus 2:11", "Romans 2:4"],
    examples: [
      "The drawing work of the Spirit convicting of sin and pointing to Christ",
      "The capacity to hear and respond to the gospel",
      "Conscience and moral awareness that prepares for the gospel",
      "The general revelation that points toward God",
    ],
    significance: "Prevenient grace is Arminianism's solution to the problem of total depravity — if sin corrupts our will completely, how can we choose God? Prevenient grace restores sufficient freedom to respond. It is God's gift before salvation, not a human achievement.",
  },
  {
    id: "saving",
    name: "Saving (Efficacious) Grace",
    icon: "✝️",
    color: "#EF4444",
    definition: "The grace by which God saves sinners — justifying them through faith in Christ's atoning work. In Calvinist theology: irresistible grace that certainly accomplishes salvation in the elect.",
    verses: ["Ephesians 2:8-9", "Romans 3:24", "Titus 3:4-7"],
    examples: [
      "Justification by faith alone, through grace alone, in Christ alone",
      "The new birth (regeneration) — God giving a new heart",
      "The call of the gospel becoming effective in the heart",
      "Faith and repentance as gifts of grace, not preconditions to it",
    ],
    significance: "Saving grace is the core of the gospel — it is entirely God's action, not human achievement. All traditions agree that salvation is by grace through faith. The debate is over whether the elect's reception of saving grace is certain (Calvinist: yes, irresistible) or contingent on free response (Arminian: yes, resistible).",
  },
  {
    id: "sanctifying",
    name: "Sanctifying Grace",
    icon: "🔥",
    color: PURPLE,
    definition: "The ongoing grace by which God conforms believers to the image of Christ — including the work of the Spirit in producing holiness, the means of grace, and the practices of the spiritual life.",
    verses: ["1 Thessalonians 5:23-24", "Philippians 1:6", "2 Corinthians 3:18"],
    examples: [
      "The Holy Spirit producing the fruit of the Spirit (Galatians 5:22-23)",
      "Scripture, prayer, worship, fasting, community as 'means of grace'",
      "God's work through trials and suffering (Romans 5:3-4, James 1:2-4)",
      "Spiritual disciplines as cooperation with God's sanctifying work",
    ],
    significance: "Sanctifying grace means holiness is not self-improvement — it is God's work in us. We are not passive (we 'work out our salvation,' Phil. 2:12) but the power comes from God who works in us (Phil. 2:13). Spiritual disciplines are not earning grace but positioning ourselves to receive what God freely gives.",
  },
  {
    id: "means",
    name: "Means of Grace",
    icon: "📖",
    color: "#3B82F6",
    definition: "The specific channels through which God ordinarily communicates and applies his grace — Word, sacrament, prayer, and community.",
    verses: ["Romans 10:17", "Matthew 28:19-20", "Hebrews 10:24-25"],
    examples: [
      "Preaching and reading of Scripture (faith comes by hearing, Romans 10:17)",
      "Baptism — initiation into the covenant community and dying/rising with Christ",
      "The Lord's Supper — memorial, communion, proclamation",
      "Prayer — the primary dialogue of the Christian life with God",
      "Fellowship and mutual exhortation (Hebrews 10:25)",
    ],
    significance: "God is not limited to these means, but he has promised to work through them. Neglecting the means of grace is like refusing food while asking God for strength. The spiritual disciplines and church practices are not magic — they are the ordinary channels through which God keeps his promises.",
  },
];

const CALVINISM_VS_ARMINIANISM = [
  { point: "Total Depravity", calvin: "Sin has corrupted every part of human nature, including the will. Humans cannot choose God without divine intervention.", armin: "Sin corrupts human nature, but God's prevenient grace restores the capacity to respond to the gospel freely." },
  { point: "Election", calvin: "God unconditionally chose specific individuals for salvation before creation, not based on foreseen faith.", armin: "God elected those whom he foreknew would freely accept Christ — election is conditional on foreseen faith." },
  { point: "Extent of Atonement", calvin: "Christ died to certainly atone for the elect. His death is sufficient for all but efficient for the elect.", armin: "Christ died for all people. The atonement is unlimited in its provision; its application depends on faith." },
  { point: "Irresistible Grace", calvin: "When God calls the elect inwardly, they will certainly respond. The Holy Spirit overcomes resistance and produces faith.", armin: "God calls all people but the call can be resisted. Humans can accept or reject the grace offered." },
  { point: "Perseverance", calvin: "True believers will persevere to the end — salvation cannot be lost because it depends on God, not the believer.", armin: "Believers can fall away from grace through unbelief and sin. Eternal security is not guaranteed." },
];

export default function GracePage() {
  const [activeTab, setActiveTab] = useState<"types" | "debate" | "applied">("types");
  const [selected, setSelected] = useState("common");

  const grace = TYPES_OF_GRACE.find(g => g.id === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎁</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Grace</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Grace is not simply God being nice — it is the undeserved, unearned, unfailing favor of God toward sinners. It is the ground of creation, salvation, and the entire Christian life.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "types" as const, label: "Types of Grace", icon: "📖" },
            { id: "debate" as const, label: "Calvin vs Arminius", icon: "⚖️" },
            { id: "applied" as const, label: "Grace Applied", icon: "💡" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "types" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {TYPES_OF_GRACE.map(g => (
                <button key={g.id} onClick={() => setSelected(g.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selected === g.id ? g.color : BORDER}`, background: selected === g.id ? `${g.color}18` : CARD, color: selected === g.id ? g.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                  {g.icon} {g.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${grace.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 30 }}>{grace.icon}</span>
                  <h2 style={{ color: grace.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{grace.name}</h2>
                </div>
                <div style={{ background: `${grace.color}15`, border: `1px solid ${grace.color}30`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <p style={{ color: grace.color, fontSize: 14, fontStyle: "italic", margin: 0 }}>{grace.definition}</p>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                  {grace.verses.map(v => (
                    <span key={v} style={{ background: `${grace.color}10`, color: grace.color, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{v}</span>
                  ))}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>EXAMPLES</div>
                  {grace.examples.map((e, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: grace.color, flexShrink: 0, marginTop: 7 }} />
                      <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.55 }}>{e}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>SIGNIFICANCE</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{grace.significance}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "debate" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The Calvinist-Arminian debate has shaped Protestant theology since the 17th century. Both traditions affirm salvation by grace through faith and the sovereignty of God. They differ on how God's sovereignty and human freedom relate. Both have been held by faithful, orthodox Christians.
              </p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr>
                    <th style={{ background: CARD, padding: "12px 16px", textAlign: "left", color: MUTED, fontSize: 12, fontWeight: 700, border: `1px solid ${BORDER}` }}>Point</th>
                    <th style={{ background: `#3B82F620`, padding: "12px 16px", textAlign: "left", color: "#3B82F6", fontSize: 12, fontWeight: 700, border: `1px solid ${BORDER}` }}>Calvinist View</th>
                    <th style={{ background: `#10B98120`, padding: "12px 16px", textAlign: "left", color: "#10B981", fontSize: 12, fontWeight: 700, border: `1px solid ${BORDER}` }}>Arminian View</th>
                  </tr>
                </thead>
                <tbody>
                  {CALVINISM_VS_ARMINIANISM.map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: "14px 16px", border: `1px solid ${BORDER}`, color: GREEN, fontWeight: 700, fontSize: 14, background: CARD }}>{row.point}</td>
                      <td style={{ padding: "14px 16px", border: `1px solid ${BORDER}`, color: TEXT, fontSize: 13, lineHeight: 1.55, background: `#3B82F605` }}>{row.calvin}</td>
                      <td style={{ padding: "14px 16px", border: `1px solid ${BORDER}`, color: TEXT, fontSize: 13, lineHeight: 1.55, background: `#10B98105` }}>{row.armin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "applied" && (
          <div>
            {[
              { title: "Grace Does Not Cancel Obedience", verse: "Romans 6:1-2", body: "Paul anticipates the objection: if grace is so abundant, why not sin more? His answer: 'By no means!' Those who have truly received grace are transformed by it. Grace does not produce moral passivity — it produces gratitude-fueled obedience. As Augustine said, 'Our heart is restless until it rests in Thee.'" },
              { title: "Living Under Grace Changes Your Motivation", verse: "2 Corinthians 5:14-15", body: "Obedience from law says 'I must.' Obedience from grace says 'I want to.' The motivation for the Christian life is not avoiding punishment — it is responding to love. 'For Christ's love compels us' (2 Cor. 5:14). Performance-based religion produces either pride (if succeeding) or despair (if failing). Grace produces a third way: humble joy." },
              { title: "Receiving Grace Requires Humility", verse: "James 4:6", body: "'God opposes the proud but shows favor to the humble' (James 4:6). Grace cannot be received by those who believe they deserve it — the posture for receiving grace is open hands, not clenched fists. This is why Jesus said the poor in spirit are blessed (Matthew 5:3) — those who know their need are positioned to receive." },
              { title: "Extend the Grace You Have Received", verse: "Ephesians 4:32", body: "You can only give what you have received. Those who have truly experienced grace — not as doctrine but as reality — become gracious people. Hard-heartedness, judgmentalism, and unforgiveness are symptoms of not having truly appropriated the grace of God for oneself. The more deeply you receive grace, the more freely you extend it." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{item.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{item.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
