"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Justified by Faith, Not Works", verse: "Ephesians 2:8-9", body: "'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast' (Ephesians 2:8-9). Paul's argument throughout Galatians and Romans is that justification (being declared righteous before God) is received through faith in Christ, not earned through law-keeping or moral achievement. Works before God are the result of justification, never its ground." },
  { title: "Faith Without Works Is Dead", verse: "James 2:17", body: "'Faith by itself, if it is not accompanied by action, is dead' (James 2:17). James is not contradicting Paul — he is addressing a different problem: people who claim faith but show no evidence of it. Paul argues against earning salvation by works; James argues against a bare intellectual assent that produces no change. Both agree: genuine saving faith is always accompanied by works. The works don't save; they demonstrate that saving faith is real." },
  { title: "We Are His Workmanship", verse: "Ephesians 2:10", body: "The verse immediately following Ephesians 2:8-9 completes the picture: 'For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do' (2:10). Salvation is not by works (v.8-9) but it is for works (v.10). Grace eliminates works as the cause of salvation while installing works as the purpose of salvation. This single passage contains Paul's complete doctrine of faith and works." },
  { title: "The Luther Problem", verse: "James 2:24", body: "Martin Luther famously called James 'an epistle of straw' because he read it as contradicting Paul's justification by faith. His concern was that any works-emphasis would undermine the Reformation's core insight. Modern scholarship recognizes that Luther's reading was too narrow — James and Paul use 'justify' and 'faith' differently. Paul uses 'justify' to mean declared righteous before God at conversion; James uses it to mean vindicated or shown genuine before people through evidence." },
  { title: "Abraham: The Proof Text Both Claim", verse: "Romans 4:3 / James 2:21", body: "Both Paul and James cite Abraham as their key witness — which seems like contradiction until one notes which moment each refers to. Paul points to Genesis 15:6 — Abraham believed and was credited with righteousness (before circumcision, before Isaac). James points to Genesis 22 — Abraham offered up Isaac on the altar (decades later). James: the faith of Genesis 15 was shown genuine by the action of Genesis 22. The events are sequential, not competitive." },
];

const TRADITIONS = [
  {
    name: "Lutheran",
    color: "#EF4444",
    view: "Faith alone (sola fide) is the article by which the church stands or falls. Justification is forensic (legal declaration) not transformative — God declares sinners righteous on account of Christ, not because they have become righteous. Works are the fruit of faith, not its condition.",
    key_distinction: "Justification vs. Sanctification kept strictly separate",
    caution: "The danger is antinomianism — 'we are not under law, therefore obedience does not matter'",
    key_figures: "Martin Luther, Philip Melanchthon, the Lutheran Confessions",
  },
  {
    name: "Reformed",
    color: PURPLE,
    view: "Justification is by faith alone but not by a faith that is alone. The Reformers affirmed that genuine faith always produces works (the 'third use of the law'). Sanctification follows from justification necessarily, though they are distinct. Covenant theology ties law and gospel together more closely than Lutheranism.",
    key_distinction: "Union with Christ encompasses both justification and sanctification",
    caution: "The danger is moralism — reducing Christianity to ethical performance",
    key_figures: "John Calvin, Westminster Standards, The Heidelberg Catechism",
  },
  {
    name: "Catholic",
    color: "#F59E0B",
    view: "Justification is both forensic and transformative — God both declares and makes righteous. Faith is necessary but not sufficient; justification requires charity (love) operating through faith. Works of charity contribute to the merit of justification, not through autonomous human achievement but through participation in Christ's merit.",
    key_distinction: "Justification is an ongoing process, not a completed event",
    caution: "The danger is that merit language undermines the gratuity of grace",
    key_figures: "Council of Trent, Thomas Aquinas, CCC 1987-2005",
  },
  {
    name: "New Perspective on Paul",
    color: "#3B82F6",
    view: "E.P. Sanders, James Dunn, and N.T. Wright argue that Paul's 'works of the law' referred specifically to Jewish boundary markers (circumcision, dietary laws, calendar) that excluded Gentiles — not moral effort in general. Justification is about who is included in the covenant community, not primarily about how individuals are saved.",
    key_distinction: "Works of the law = ethnic markers, not moral performance",
    caution: "Critics argue it minimizes the individual's need for forensic justification",
    key_figures: "E.P. Sanders (Paul and Palestinian Judaism), N.T. Wright (Paul and the Faithfulness of God)",
  },
];

const PRACTICES = [
  { title: "Receive Justification as Gift", desc: "You cannot contribute anything to your justification — not church attendance, not moral improvement, not religious sincerity. The point of 'by grace through faith' is that it comes entirely from outside you. Receive it as the pure gift it is, with gratitude rather than negotiation.", icon: "🎁" },
  { title: "Let Works Grow Organically", desc: "Do not do good works to maintain your standing with God — you have no standing to maintain; it is already secured in Christ. Do good works because you belong to God, you are filled with his Spirit, and this is the life you have been created for. Works that flow from love look different from works that flow from fear.", icon: "🌱" },
  { title: "Check the Motivation", desc: "The same external act can flow from fear, pride, or love. Regular self-examination of why you are doing what you do — to impress, to earn, to fear punishment, or to love God and neighbor — is a spiritual discipline. Motivation matters; right actions from wrong motives are not the goal.", icon: "🔍" },
  { title: "Read James Slowly", desc: "James is the most practically ethical book in the NT. Read it as a guide to what genuine faith looks like in practice: controlling the tongue, caring for the poor, avoiding partiality, confessing to one another. James does not contradict Paul; he shows what Paul's theology looks like on the ground.", icon: "📖" },
  { title: "Hold Law and Gospel Together", desc: "The law shows us what we ought to be and drives us to Christ; the gospel assures us of what we are in Christ. A healthy Christian life keeps both: the law continues to shape ethics; the gospel continues to ground assurance. Reduce to either alone and you get moralism or antinomianism.", icon: "⚖️" },
  { title: "Be Suspicious of Effortless Christianity", desc: "If your faith produces no change in your habits, your relationships, your use of money and time, James raises the question of whether it is genuine faith at all. The test is not perfection but direction — is there genuine, Spirit-driven movement toward love, justice, and holiness?", icon: "📊" },
];

export default function FaithAndWorksPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "traditions" | "practices">("theology");
  const [selectedTrad, setSelectedTrad] = useState("Lutheran");

  const trad = TRADITIONS.find(t => t.name === selectedTrad)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Faith and Works</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Are we saved by faith or by works? The question has divided Christianity — and misunderstanding it produces both religious despair and moral apathy. The answer: saved by faith alone, through a faith that is never alone.
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
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>The Formula</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                {[
                  { label: "CAUSE", value: "Grace alone", color: GREEN },
                  { label: "INSTRUMENT", value: "Faith alone", color: PURPLE },
                  { label: "GROUND", value: "Christ alone", color: "#F59E0B" },
                ].map((item, i) => (
                  <div key={i} style={{ background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: 8, padding: 10, textAlign: "center" }}>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ color: TEXT, fontWeight: 800, fontSize: 14 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: "12px 0 0" }}>Works are the necessary fruit of genuine faith — not the cause or condition of salvation, but the evidence and expression of it.</p>
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

        {activeTab === "traditions" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TRADITIONS.map(t => (
                <button key={t.name} onClick={() => setSelectedTrad(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedTrad === t.name ? t.color : BORDER}`, background: selectedTrad === t.name ? `${t.color}20` : "transparent", color: selectedTrad === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${trad.color}30`, borderRadius: 14, padding: 28 }}>
              <h2 style={{ color: trad.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{trad.name}</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{trad.view}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${trad.color}08`, border: `1px solid ${trad.color}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: trad.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY DISTINCTION</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.key_distinction}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>CAUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.caution}</p>
                </div>
              </div>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12, marginTop: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>KEY FIGURES</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{trad.key_figures}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Getting faith and works in their right relationship is not just a theological issue — it determines whether your spiritual life is driven by gratitude or fear, love or performance anxiety.
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
