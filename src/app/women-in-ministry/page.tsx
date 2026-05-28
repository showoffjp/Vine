"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Galatians 3:28 Foundation", verse: "Galatians 3:28", body: "'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus' (Galatians 3:28). Egalitarians cite this as the Magna Carta of Christian equality — abolishing all hierarchies in Christ. Complementarians respond that the verse addresses soteriological equality (equal standing before God in salvation) rather than functional differentiation (different roles and responsibilities). The debate partly turns on how broadly to apply the verse's equalizing work." },
  { title: "Women in the New Testament", verse: "Romans 16:7", body: "The NT records women in significant roles: Phoebe is called a 'deacon' (Romans 16:1-2); Junia is 'outstanding among the apostles' (Romans 16:7, though the translation is debated); Priscilla taught Apollos (Acts 18:26); Philip's daughters prophesied (Acts 21:9); Mary Magdalene was the first witness to the resurrection. These examples complicate simple readings of the restrictive texts and suggest that women's ministry was more prominent and diverse in the early church than later traditions sometimes recognized." },
  { title: "The 1 Timothy 2 Passage", verse: "1 Timothy 2:12", body: "'I do not permit a woman to teach or to assume authority over a man; she must be quiet' (1 Timothy 2:12). This is the central text in the debate. Complementarians read it as a normative principle grounded in creation order (vv.13-14). Egalitarians propose several readings: that it addressed a specific situation in Ephesus, that the Greek (authentein) refers to an unusual type of authority (usurping or domineering), or that the teaching prohibition was contextual (uneducated women disrupting worship). The interpretation is genuinely difficult." },
  { title: "The 1 Corinthians 14 Passage", verse: "1 Corinthians 14:34-35", body: "'Women should remain silent in the churches. They are not allowed to speak' (1 Corinthians 14:34-35). The interpretive options: (1) absolute silence (rarely held today); (2) silence in judging prophecies specifically; (3) a prohibition on disruptive questioning of husbands in worship; (4) a quotation Paul then refutes in v.36. This passage must be read alongside 1 Corinthians 11, where women are assumed to pray and prophesy in the assembly (with appropriate head covering)." },
  { title: "Prophetic Ministry in Joel 2", verse: "Acts 2:17-18", body: "At Pentecost, Peter interprets what happened with Joel 2:28-29: 'your sons and daughters will prophesy... even on my servants, both men and women, I will pour out my Spirit in those days, and they will prophesy.' The Spirit's outpouring creates a prophetic community that includes both men and women. Egalitarians: this inaugurates the new covenant pattern of Spirit-empowered ministry without gender restriction. Complementarians: prophecy and teaching/eldership are distinct gifts; women may prophesy without holding the office of elder." },
];

const POSITIONS = [
  {
    name: "Complementarian",
    color: PURPLE,
    summary: "God created male and female as equal in dignity and value but with complementary roles. In the home and the church, male headship (servant leadership, not dominance) is the normative design. Women have many important roles in ministry but are not to occupy the office of elder/pastor or exercise primary teaching authority over men in the church.",
    key_texts: "1 Timothy 2:12-14; 1 Corinthians 14:34-35; 1 Timothy 3:1-7; Ephesians 5:22-33",
    strengths: "Coherent with creation order language in the texts; consistent with much of church tradition; takes the restrictive texts at face value",
    challenges: "Must account for women like Deborah, Phoebe, Junia, Priscilla; how to define 'teaching over men' consistently in practice",
    key_figures: "John Piper, Wayne Grudem, D.A. Carson; The Council on Biblical Manhood and Womanhood",
    spectrum: "Hard complementarianism (women silent in all formal settings) to soft complementarianism (women may teach except in eldership roles)",
  },
  {
    name: "Egalitarian",
    color: GREEN,
    summary: "All Spirit-gifted believers, regardless of gender, may exercise all gifts and serve in all roles, including senior pastor and elder. The restrictive texts are contextual (addressing specific problems) or have been misinterpreted; the Galatians 3:28 trajectory points toward full inclusion in kingdom ministry.",
    key_texts: "Galatians 3:28; Acts 2:17-18; Romans 16:1-7; Judges 4-5; Acts 18:26",
    strengths: "Accounts for the significant women in Scripture's redemptive history; reads the trajectory of the NT toward full inclusion; consistent with spiritual gifts being gender-neutral",
    challenges: "Must address the restrictive texts carefully; questions about how far to take the cultural-context argument",
    key_figures: "Gordon Fee, Craig Keener, Scot McKnight; Christians for Biblical Equality",
    spectrum: "From 'mutual submission in marriage with women in full church ministry' to 'no gender distinctions in any context'",
  },
  {
    name: "Hierarchical Complementarian",
    color: "#EF4444",
    summary: "A stricter version: women may not teach or lead in any mixed-gender formal setting, including Sunday School classes with adult men, any public speaking role over men. Some extend this to civic leadership. The creation order is comprehensive and applies broadly.",
    key_texts: "1 Timothy 2:12 (read broadly); 1 Corinthians 14:34-35 (absolute)",
    strengths: "Internally consistent; takes the broadest reading of the restrictive texts",
    challenges: "Difficult to apply consistently (no women speaking in mixed settings at all?); minority position even among complementarians",
    key_figures: "Some Reformed Baptist traditions",
    spectrum: "Various degrees of restriction on mixed-gender interaction",
  },
];

const PRACTICES = [
  { title: "Study the Texts Carefully", desc: "The debate cannot be settled by proof-texting. Read the complementarian and egalitarian scholarship on 1 Timothy 2:12, 1 Corinthians 14:34-35, and Galatians 3:28 carefully. Skim-reading in favor of a position produces unfair caricatures. Genuine engagement requires reading the best of both sides.", icon: "📖" },
  { title: "Recognize It as an Intramural Debate", desc: "Both complementarians and egalitarians are represented among gospel-faithful, theologically orthodox Christians who submit to Scripture's authority. This is not a debate between faith and feminism — it is a debate within Christianity about how to interpret specific texts. Treat those who differ as fellow students of Scripture.", icon: "🤝" },
  { title: "Honor Women's Gifts in Any View", desc: "Whatever position one holds, the NT is clear that women exercise significant gifts for the building of the church. Both views fail if women's contributions are minimized, ignored, or treated as second-tier. The practical reality of how women are actually welcomed, listened to, and honored matters more than the formal position.", icon: "💛" },
  { title: "Watch for Abuse Under Either Label", desc: "Complementarianism has been abused to silence abuse victims, prevent women from reporting harm, and maintain male authority regardless of its character. Egalitarianism has sometimes erased genuine differences in ways that deny embodied reality. Both frameworks can be misused; attend to the actual outcomes in specific communities.", icon: "🛡️" },
  { title: "Hear Women's Voices in Your Formation", desc: "Regardless of your view on formal leadership, the church is impoverished when women's theological voices are absent from its formation. Read women theologians and historians: Sarah Coakley, Makoto Fujimura, Tish Harrison Warren, Rosaria Butterfield, Kathy Keller, Beth Allison Barr. Their perspectives inform the whole community.", icon: "📚" },
  { title: "Let the Question Drive You to the Text, Not Away from It", desc: "This is a debate worth engaging seriously because it is a debate about how to honor Scripture's authority. The appropriate response to difficulty is not to abandon the question but to do the harder hermeneutical work. Grappling with it honestly is itself a form of fidelity to Scripture.", icon: "🔍" },
];

export default function WomenInMinistryPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "positions" | "practices">("theology");
  const [selectedPos, setSelectedPos] = useState("Complementarian");

  const pos = POSITIONS.find(p => p.name === selectedPos)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👩‍💼</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Women in Ministry</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Can women be pastors, elders, or hold teaching authority over men in the church? This debate — between complementarians and egalitarians — is one of the most important intramural questions in contemporary evangelicalism.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Key Texts", icon: "📖" },
            { id: "positions" as const, label: "Positions", icon: "⚖️" },
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
              <h2 style={{ color: pos.color, fontWeight: 900, fontSize: 22, marginBottom: 14 }}>{pos.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{pos.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: `${pos.color}08`, border: `1px solid ${pos.color}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: pos.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_texts}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>SPECTRUM</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.spectrum}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.strengths}</p>
                </div>
                <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>CHALLENGES</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.challenges}</p>
                </div>
              </div>
              <div style={{ background: `${PURPLE}06`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY FIGURES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_figures}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                This debate requires careful interpretation, genuine humility, and practical wisdom about how women are actually honored and empowered in specific communities.
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
