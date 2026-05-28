"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Definitive and Progressive", verse: "1 Corinthians 6:11", body: "Sanctification has two movements. Definitive sanctification: at conversion, the believer is set apart from sin's dominion — 'you were washed, you were sanctified, you were justified' (1 Corinthians 6:11, past tense). Progressive sanctification: the believer grows in actual holiness throughout their life. The first is positional and complete; the second is experiential and ongoing. Both are real. The danger of ignoring the first is moral anxiety; the danger of ignoring the second is moral complacency." },
  { title: "God's Work and Our Effort", verse: "Philippians 2:12-13", body: "'Work out your salvation with fear and trembling, for it is God who works in you to will and to act in order to fulfill his good purpose' (Philippians 2:12-13). The same sentence grounds human effort in divine enablement. We work — but God is working in us. Sanctification is synergistic (cooperative) but not symmetrical: God's contribution is indispensable; human effort is real but dependent. Dallas Willard: 'Grace is not opposed to effort; it is opposed to earning.'" },
  { title: "The Role of the Holy Spirit", verse: "Galatians 5:16", body: "'Walk by the Spirit, and you will not gratify the desires of the flesh' (Galatians 5:16). The Spirit is the agent of sanctification — not a force we manipulate but a person we walk with. Paul's language is relational and directional: walk by the Spirit, live by the Spirit, keep in step with the Spirit (5:25). Sanctification is not self-improvement managed by human willpower but life lived in dependence on the Spirit's leading and enabling." },
  { title: "Mortification and Vivification", verse: "Romans 8:13", body: "The Reformers named two sides of sanctification: mortification (putting to death the deeds of the flesh) and vivification (coming alive to righteousness). Paul: 'if by the Spirit you put to death the misdeeds of the body, you will live' (Romans 8:13). Sanctification requires both — actively refusing what sin offers and actively pursuing what God provides. Neither side alone produces growth; both together, by the Spirit, do." },
  { title: "Suffering as Sanctifying", verse: "Romans 5:3-4", body: "'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope' (Romans 5:3-4). Suffering is not an interruption to sanctification — it is one of its primary vehicles. The character qualities most needed for mature faith (patience, endurance, humility, dependence on God) are produced most effectively through difficulty that cannot be controlled away. James agrees: 'consider it pure joy when you face trials' (1:2)." },
];

const TRADITIONS = [
  { tradition: "Reformed", emphasis: "Total depravity and monergistic grace", approach: "Sanctification is entirely God's work, to which believers respond. The emphasis is on the means of grace (Scripture, prayer, preaching, sacraments) as the channels through which the Spirit works. Discipline is essential; works do not contribute to merit but are the fruit of genuine faith.", key_text: "John Owen, 'The Mortification of Sin'; Westminster Standards" },
  { tradition: "Wesleyan / Holiness", emphasis: "Entire sanctification and perfect love", approach: "John Wesley taught a 'second blessing' — an experience of entire sanctification in which the carnal nature is cleansed and replaced by perfect love for God and neighbor. This is not sinless perfection but a state in which sin is not the dominant motivation. The holiness movement developed from this teaching.", key_text: "John Wesley, 'A Plain Account of Christian Perfection'" },
  { tradition: "Catholic", emphasis: "Cooperation with grace and the sacramental life", approach: "Sanctification is a lifelong process of cooperating with infused grace through the sacraments, prayer, works of mercy, and the cultivation of virtue. The saints provide models; their intercession aids. Purgatory addresses incomplete sanctification at death.", key_text: "Thomas Aquinas, Summa Theologica on virtue; CCC 1987-2005" },
  { tradition: "Pentecostal / Charismatic", emphasis: "Spirit baptism and ongoing spiritual experience", approach: "The baptism of the Holy Spirit (often evidenced by speaking in tongues) initiates a new level of spiritual power and purity. Ongoing experiences of the Spirit — prophecy, healing, tongues — are means of sanctification. The gifts of the Spirit accompany growth in the Spirit.", key_text: "Acts 2; 1 Corinthians 12-14; Galatians 5" },
];

const PRACTICES = [
  { title: "Regular Scripture Intake", desc: "The Bible is the primary instrument of sanctification: 'Sanctify them by the truth; your word is truth' (John 17:17). Daily, unhurried engagement with Scripture — not just devotional inspiration but study, meditation, and memorization — shapes the mind and will over time.", icon: "📖" },
  { title: "Confess Sin Quickly", desc: "Unconfessed sin hardens; confessed sin is forgiven and releases the shame that powers ongoing sin. Practice daily confession — not only egregious sins but the subtle ones: jealousy, pride, self-centeredness. Short accounts produce clean hearts.", icon: "🕊️" },
  { title: "Accountability Structures", desc: "Ask someone to ask you the hard questions regularly. Not general 'how are you doing spiritually?' but specific questions about your known weaknesses. The person who is accountable to no one about specific sin patterns is vulnerable to those patterns.", icon: "🤝" },
  { title: "Practice the Disciplines", desc: "Fasting, silence, solitude, simplicity, Sabbath — the classic spiritual disciplines train the soul's capacity for obedience by practicing submission in low-stakes areas. They are not how you earn grace but how you create space for grace to work.", icon: "🧘" },
  { title: "Engage with the Means of Grace", desc: "Corporate worship, preaching, the Lord's Supper, and baptism are the ordinary means through which God works transformation. These are not optional extras; they are the regular channels of sanctifying grace. Absence from them is absence from their benefit.", icon: "⛪" },
  { title: "Pursue the Virtues Specifically", desc: "Rather than trying to be generally more holy, identify the specific virtue most lacking in your character (patience, honesty, compassion) and pursue it specifically through deliberate practice, prayer, and the situation that tests it. Vague sanctification produces vague results.", icon: "🎯" },
];

export default function SanctificationPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "traditions" | "practices">("theology");
  const [selectedTrad, setSelectedTrad] = useState("Reformed");

  const trad = TRADITIONS.find(t => t.tradition === selectedTrad)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sanctification</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Becoming holy — set apart for God, increasingly conformed to Christ. Sanctification is both God's work and our response: 'work out your salvation... for it is God who works in you.'
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "traditions" as const, label: "Traditions", icon: "⛪" },
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

        {activeTab === "traditions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TRADITIONS.map(t => (
                <button key={t.tradition} onClick={() => setSelectedTrad(t.tradition)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedTrad === t.tradition ? PURPLE : BORDER}`, background: selectedTrad === t.tradition ? `${PURPLE}20` : "transparent", color: selectedTrad === t.tradition ? PURPLE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.tradition}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, marginBottom: 8 }}>{trad.tradition}</h2>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>EMPHASIS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.emphasis}</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{trad.approach}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY TEXTS / RESOURCES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.key_text}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Sanctification requires both the grace of God and the engagement of the whole person. These six practices are the primary means through which grace works transformation.
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
