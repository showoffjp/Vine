"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Are the Gifts of the Spirit?", verse: "1 Corinthians 12:4-7", body: "There are different kinds of gifts, but the same Spirit distributes them... to each one the manifestation of the Spirit is given for the common good (1 Corinthians 12:4-7). Paul lists the gifts of the Spirit in three primary passages: 1 Corinthians 12 (wisdom, knowledge, faith, healing, miracles, prophecy, distinguishing spirits, tongues, interpretation), Romans 12 (prophesying, serving, teaching, encouraging, giving, leading, mercy), and Ephesians 4 (apostles, prophets, evangelists, pastors, teachers). These lists are not identical, suggesting they are representative rather than exhaustive. All agree that the gifts are given sovereignly by the Spirit for the benefit of the whole body." },
  { title: "Cessationism: The Gifts Have Ceased", verse: "1 Corinthians 13:10", body: "Cessationism is the view that the sign gifts (tongues, prophecy, miracles, healing) were given for a specific purpose — confirming the apostolic message — and ceased when the canon of Scripture was completed and the apostolic age ended. The argument draws on 1 Corinthians 13:10 (when completeness comes, the partial will cease), Hebrews 2:3-4 (signs confirmed the message delivered by the apostles), and the observation that post-apostolic church history shows diminishing miraculous gifts. John MacArthur, B.B. Warfield, and Reformed cessationists argue from this position." },
  { title: "Continuationism: The Gifts Continue", verse: "1 Corinthians 14:1", body: "Continuationism is the view that all the gifts described in the NT remain available to the church today, distributed by the Spirit as he wills. The argument: the NT gives no clear indication that any gift was temporary; the passages used for cessationism don't explicitly teach it; the global experience of the church (especially in the Global South) includes credible accounts of miraculous gifts; and the command eagerly desire spiritual gifts (1 Corinthians 14:1) is not qualified as applying only to the apostolic era. Wayne Grudem, Gordon Fee, and most charismatics and Pentecostals hold this view." },
  { title: "Tongues: What Is It?", verse: "Acts 2:4", body: "The NT describes two types of tongues: xenoglossy (known human languages supernaturally spoken, as in Acts 2) and glossolalia (unlearned ecstatic utterance, requiring interpretation, as in 1 Corinthians 14). Whether these are the same phenomenon or different is debated. Paul's regulations in 1 Corinthians 14 govern corporate use: no more than three per gathering, in turn, with interpretation. Private tongues use is presented as personally edifying (v.4). The widespread contemporary practice of tongues, particularly in Pentecostal and charismatic traditions, claims continuity with the NT gift." },
  { title: "Prophecy: Is It Still Active?", verse: "1 Corinthians 14:3", body: "The one who prophesies speaks to people for their strengthening, encouraging and comfort (1 Corinthians 14:3). New Testament prophecy differs from Old Testament prophecy in significant ways: it is described as something all may potentially do (v.5), it is weighed and evaluated by the community (v.29), and it operates alongside Scripture rather than replacing it. If cessationism is wrong, contemporary prophecy is best understood as Spirit-prompted insight for strengthening and encouraging — not new doctrinal revelation — always subject to Scripture's authority. Distinguishing false prophecy from true remains one of the most practically difficult aspects of charismatic practice." },
];

const POSITIONS = [
  {
    name: "Hard Cessationism",
    color: "#3B82F6",
    summary: "All miraculous gifts ceased with the closing of the apostolic age and the completion of the New Testament canon. Claims to tongues, prophecy, or miraculous healing today are not genuine continuations of the biblical gifts. The Word of God is sufficient; the sign gifts were given to confirm its delivery, which is now complete.",
    key_texts: "Hebrews 2:3-4; 1 Corinthians 13:10; Ephesians 2:20",
    key_figures: "John MacArthur, B.B. Warfield, Thomas Edgar",
    challenges: "The NT text does not explicitly teach cessationism; explaining gifts in the Global South church history",
  },
  {
    name: "Soft Cessationism",
    color: PURPLE,
    summary: "The sign gifts have largely ceased in the West but may still operate in pioneer mission contexts. Alternatively: the gifts continue but most contemporary expressions are not genuine continuations of the biblical gifts. Skeptical of most charismatic practice without fully ruling out the Spirit's activity.",
    key_texts: "Hebrews 2:3-4; 2 Timothy 3:16-17",
    key_figures: "Many Reformed evangelicals in practice",
    challenges: "An uncomfortable middle ground that tends in practice toward either hard cessationism or open continuationism",
  },
  {
    name: "Open but Cautious",
    color: GREEN,
    summary: "The gifts remain available but are rare, easily counterfeited, and should be approached with great care. The church should remain open to genuine Spirit activity without uncritically accepting all claims. Scripture remains the primary means of God's communication; the gifts are supplementary.",
    key_texts: "1 Corinthians 14:1; 1 Thessalonians 5:19-21; 1 John 4:1",
    key_figures: "D.A. Carson, John Piper, Sam Storms",
    challenges: "Practically, it is difficult to remain genuinely open while maintaining needed discernment",
  },
  {
    name: "Continuationism",
    color: "#10B981",
    summary: "All the gifts described in the NT remain available and active today, distributed by the Spirit as he wills. The evidence of global Christianity — including credible miracles, prophecy, and tongues in contexts of new evangelism — supports this. The gifts operate under the authority of Scripture, never competing with it.",
    key_texts: "1 Corinthians 14:1,39; Acts 2:17-18; James 5:14-15",
    key_figures: "Wayne Grudem, Gordon Fee, Craig Keener",
    challenges: "Explaining the large amount of false prophecy and counterfeit gifts; maintaining biblical standards in charismatic practice",
  },
];

const PRACTICES = [
  { title: "Evaluate Claims With Scripture", desc: "Whatever position you hold, test every claim to spiritual gifts against Scripture. Does the prophecy align with biblical teaching? Does tongues use follow the Corinthian regulations? The Spirit who gives the gifts also gave the book that governs them. Do not despise supernatural claims; do not accept them uncritically.", icon: "📖" },
  { title: "Seek the Gift of Discernment", desc: "Distinguishing between spirits (1 Corinthians 12:10) is itself listed as a gift. The ability to recognize what is genuinely of the Spirit versus what is human enthusiasm or spiritual counterfeit is necessary in any community that takes gifts seriously. Pursue it through Scripture, mature judgment, and prayer.", icon: "🔍" },
  { title: "Do Not Divide the Body Over This", desc: "The debate between cessationists and continuationists is genuinely important but not worth dividing over. Both positions are held by gospel-faithful, Bible-submitting Christians. Hold your position with conviction and pursue the unity Christ prayed for (John 17:21) across this difference.", icon: "🤝" },
  { title: "Hold Your Position With Humility", desc: "The church has debated this seriously for centuries. Whichever position you hold, the other side has substantial arguments and godly defenders. The degree of certainty with which many Christians hold cessationism or continuationism is typically not warranted by the evidence. Hold firmly; hold humbly.", icon: "🙇" },
  { title: "Pursue All the Gifts Paul Lists", desc: "Whatever you believe about the sign gifts, Paul lists many gifts in Romans 12 that are uncontroversial — service, teaching, encouraging, giving, leading, mercy. Pursue these aggressively. Do not let the debate about tongues obscure the practical call to give your gifts fully to the body.", icon: "🎁" },
  { title: "Pray for the Spirit's Work", desc: "Every position agrees that the Holy Spirit is active in the church today — convicting, sanctifying, illuminating Scripture, drawing people to Christ. Pray for the Spirit's work actively, however you understand that work. The spirit of cessationism was never meant to produce passive or prayerless Christianity.", icon: "🙏" },
];

export default function CharismaticGiftsTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "positions" | "practices">("theology");
  const [selectedPos, setSelectedPos] = useState("Open but Cautious");

  const pos = POSITIONS.find(p => p.name === selectedPos)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Gifts of the Spirit</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Are tongues, prophecy, and healing still active today? The cessationism-continuationism debate is one of the most significant — and most practically important — questions dividing evangelical Christians.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
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
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{pos.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div style={{ background: `${pos.color}08`, border: `1px solid ${pos.color}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: pos.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_texts}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>KEY FIGURES</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.key_figures}</p>
                </div>
              </div>
              <div style={{ background: "#EF444408", border: "1px solid #EF444415", borderRadius: 8, padding: 12 }}>
                <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>CHALLENGES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{pos.challenges}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Whatever your theological position on the continuation of gifts, these practices help navigate the issue faithfully — with discernment, humility, and a genuine openness to the Spirit.
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
