"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SECTIONS = [
  {
    name: "Gospels",
    color: "#EF4444",
    books: "Matthew, Mark, Luke, John",
    timespan: "~50-100 AD (events: ~4 BC – 33 AD)",
    desc: "Four accounts of the life, ministry, death, and resurrection of Jesus — each written for a different audience and from a different perspective. Matthew (Jewish audience) emphasizes Jesus as Messiah and new Moses. Mark (Roman audience) is the most urgent and action-packed. Luke (Gentile audience) emphasizes mercy, women, and the poor. John (universal) is the most theological, emphasizing Christ's divine nature.",
    key_themes: "The Kingdom of God, discipleship, the nature of Jesus, death and resurrection, the fulfillment of OT promises.",
    key_texts: "Matthew 5-7 (Sermon on the Mount), Mark 10:45 (ransom for many), Luke 15 (lost son), John 1:1-18 (Word became flesh), John 3:16, John 11 (resurrection of Lazarus)",
  },
  {
    name: "Acts",
    color: "#F59E0B",
    books: "Acts",
    timespan: "~80-90 AD (events: ~33-62 AD)",
    desc: "The second volume of Luke's two-part work, covering the birth of the church at Pentecost, the early Jerusalem community, the persecution and scattering, Peter's ministry, and Paul's three missionary journeys and journey to Rome. Acts is the narrative bridge between the Gospels and the Epistles, showing how the gospel spread from Jerusalem to the ends of the earth.",
    key_themes: "The gift of the Holy Spirit, the growth of the church, the inclusion of Gentiles, the power of the gospel to cross cultural barriers, the role of suffering in mission.",
    key_texts: "Acts 1:8 (witnesses to the ends of the earth), Acts 2 (Pentecost), Acts 10 (Cornelius), Acts 15 (Jerusalem Council), Acts 17:16-34 (Paul at the Areopagus)",
  },
  {
    name: "Pauline Letters",
    color: "#8B5CF6",
    books: "Romans, 1-2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1-2 Thessalonians, 1-2 Timothy, Titus, Philemon",
    timespan: "~49-65 AD",
    desc: "Thirteen letters attributed to Paul — the most theologically significant body of writing in the NT. Romans is his most systematic treatment of the gospel. Galatians is his most polemical (against works-righteousness). The Corinthian letters address practical church problems. The prison epistles (Ephesians, Philippians, Colossians, Philemon) were written during imprisonment. The pastoral epistles (Timothy, Titus) address church leadership.",
    key_themes: "Justification by faith, the new creation, the body of Christ, the supremacy of Christ, gospel ministry, ethical formation.",
    key_texts: "Romans 1:16-17 (gospel power), Romans 3:21-26 (righteousness through faith), Galatians 2:20 (crucified with Christ), Ephesians 2:8-9 (saved by grace), Philippians 2:5-11 (Christ hymn), Philippians 4:11-13 (content in all circumstances)",
  },
  {
    name: "General Letters",
    color: "#3B82F6",
    books: "Hebrews, James, 1-2 Peter, 1-2-3 John, Jude",
    timespan: "~49-90 AD",
    desc: "Eight letters from various apostolic authors, each addressing different communities and concerns. Hebrews argues for Christ's superiority over the Mosaic covenant (ideal for Jewish Christians). James addresses practical ethics and the relationship between faith and works. Peter's letters address suffering and false teaching. John's letters address love and the Antichrist. Jude addresses false teaching briefly and urgently.",
    key_themes: "The sufficiency of Christ, the relationship of faith and works, suffering and perseverance, love as the mark of the Christian community, false teaching.",
    key_texts: "Hebrews 11 (faith hall of fame), Hebrews 12:1-2 (run the race), James 1:2-4 (joy in trials), James 2:14-17 (faith without works), 1 Peter 2:9 (royal priesthood), 1 John 4:7-12 (God is love)",
  },
  {
    name: "Revelation",
    color: GREEN,
    books: "Revelation",
    timespan: "~95 AD",
    desc: "The final book of the Bible — an apocalyptic vision given to John on the island of Patmos. Revelation is not primarily a code to decode but a vision to inhabit — designed to strengthen persecuted Christians with the certainty of God's ultimate victory. It draws heavily on OT imagery (especially Ezekiel and Daniel) and culminates with the new heaven and new earth, the New Jerusalem, and the presence of God with his people.",
    key_themes: "The sovereignty of God, the victory of the Lamb, the judgment of evil powers, the vindication of the martyrs, the new creation.",
    key_texts: "Revelation 1:8 (Alpha and Omega), Revelation 4-5 (throne room and the Lamb), Revelation 7:9 (multitude of every nation), Revelation 12 (cosmic conflict), Revelation 19-22 (final victory and new creation)",
  },
];

const THEMES = [
  { theme: "Kingdom of God", desc: "Jesus's primary announcement: 'The kingdom of God has come near' (Mark 1:15). The kingdom is God's reign breaking into history — already present in Christ, not yet fully consummated. The NT is a narrative of kingdom advance, and the church lives between its inauguration and its full arrival.", refs: "Matthew 4:17, 13:1-52; Luke 17:20-21; Revelation 11:15" },
  { theme: "Justification by Faith", desc: "Paul's central theological contribution: sinners are declared righteous before God not by their works but by faith in Christ, who bore their penalty. This teaching, recovered by the Reformers, is the engine of the gospel's liberating power and the foundation of Christian assurance.", refs: "Romans 3:21-26, 4:1-25; Galatians 2:16, 3:6-14; Philippians 3:9" },
  { theme: "The New Covenant", desc: "Jeremiah's promised New Covenant (31:31-34) is fulfilled in Christ — particularly in his Last Supper saying ('This cup is the new covenant in my blood,' Luke 22:20) and in Hebrews' extended argument that Christ mediates a better covenant. The Spirit's work and the forgiveness of sins are the marks of this new covenant.", refs: "Luke 22:20; 2 Corinthians 3:6; Hebrews 8:6-13, 9:15" },
  { theme: "Resurrection and New Creation", desc: "The resurrection of Jesus is not an isolated miracle but the beginning of the new creation — the first installment of the resurrection of all who are in Christ. The NT ends not in heaven but in a new heaven and earth, with God dwelling among his people in embodied glory.", refs: "1 Corinthians 15:20-28; 2 Corinthians 5:17; Romans 8:19-23; Revelation 21-22" },
  { theme: "The Holy Spirit", desc: "The gift of the Spirit at Pentecost marks the beginning of the new covenant era. The Spirit is not a force but the third person of the Trinity — the one who convicts, regenerates, indwells, sanctifies, gifts, and seals. The Christian life is life in the Spirit.", refs: "John 14-16; Acts 2; Romans 8; Galatians 5:16-25; Ephesians 1:13-14" },
];

export default function NewTestamentSurveyPage() {
  const [activeTab, setActiveTab] = useState<"sections" | "themes">("sections");
  const [selected, setSelected] = useState("Gospels");

  const section = SECTIONS.find(s => s.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>New Testament Survey</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            27 books spanning the life of Christ, the birth of the church, and the vision of the age to come — written within the first century after the resurrection by eyewitnesses and their companions.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "sections" as const, label: "The Sections", icon: "📚" },
            { id: "themes" as const, label: "Major Themes", icon: "🧵" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "sections" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SECTIONS.map(s => (
                <button key={s.name} onClick={() => setSelected(s.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === s.name ? s.color : BORDER}`, background: selected === s.name ? `${s.color}15` : "transparent", color: selected === s.name ? s.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ color: section.color, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{section.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{section.timespan}</div>
                </div>
              </div>
              <div style={{ background: BG, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BOOKS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{section.books}</p>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{section.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${section.color}08`, border: `1px solid ${section.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: section.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY THEMES</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{section.key_themes}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{section.key_texts}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These five themes are the backbone of the New Testament's theological vision — essential for reading any part of the NT in its larger context.
              </p>
            </div>
            {THEMES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.theme}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.refs}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
