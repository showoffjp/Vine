"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEORIES = [
  {
    name: "Penal Substitution",
    color: "#EF4444",
    period: "Reformation onward",
    verse: "Isaiah 53:5-6",
    desc: "The most prominent Protestant theory: Christ bore the penalty for sin that justice required, standing in the place of sinners. God's wrath against sin was satisfied by Christ's death — 'he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed' (Isaiah 53:5). Paul states it directly: 'God made him who had no sin to be sin for us' (2 Corinthians 5:21).",
    strengths: "Takes the justice of God and the reality of guilt seriously. Grounds assurance in an objective act. Directly explains why the cross was necessary.",
    tensions: "Critics ask how the Father punishing the Son is just. Response: the Trinity acts as one — the Father does not punish a third party but enters suffering himself in the Son.",
  },
  {
    name: "Christus Victor",
    color: "#F59E0B",
    period: "Early church, recovered 20th century",
    verse: "Colossians 2:15",
    desc: "Christ's death and resurrection are a cosmic battle in which he defeats the powers of sin, death, and the devil. 'Having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross' (Colossians 2:15). The cross is not primarily about satisfying divine justice but about the liberation of captives and the defeat of evil. The resurrection is the victory parade.",
    strengths: "Emphasizes the cosmic scope of redemption. Speaks powerfully to those who experience life as bondage. Captures the NT's language of spiritual warfare.",
    tensions: "Does not directly explain how humanity's guilt is addressed. Often used to avoid the satisfaction element entirely, which truncates the full biblical picture.",
  },
  {
    name: "Moral Influence",
    color: "#8B5CF6",
    period: "Abelard (12th century) onward",
    verse: "Romans 5:8",
    desc: "The cross demonstrates God's love so powerfully that it draws humanity back to God through a moral transformation. 'God demonstrates his own love for us in this: While we were still sinners, Christ died for us' (Romans 5:8). The atonement is primarily educational and inspiring — the cross moves us to repentance and love by showing us the extremity of God's love.",
    strengths: "Takes the demonstration of love seriously. Avoids mechanical satisfaction theories. Has appeal to those troubled by forensic frameworks.",
    tensions: "Does not explain why the death of Christ specifically was necessary. Reduces the atonement to an example. Does not adequately address guilt, sin's objective consequences, or divine justice.",
  },
  {
    name: "Ransom / Redemption",
    color: "#3B82F6",
    period: "Early church",
    verse: "Mark 10:45",
    desc: "Christ's death is the ransom price that liberates humanity from bondage. 'The Son of Man came... to give his life as a ransom for many' (Mark 10:45). The metaphor is commercial: humanity is in debt or captivity, and Christ pays the price of liberation. Early fathers debated to whom the ransom was paid (the devil? a legal necessity in the divine economy?) — the metaphor illuminates the freedom, not the transaction.",
    strengths: "Directly biblical. Captures the freedom and liberation motifs of salvation. Emphasizes that the cost was real.",
    tensions: "The metaphor's logic (ransom paid to whom?) generates theological puzzles. Best understood as illuminating one dimension of what Christ accomplished rather than a complete mechanism.",
  },
  {
    name: "Recapitulation",
    color: GREEN,
    period: "Irenaeus (2nd century)",
    verse: "Romans 5:19",
    desc: "Irenaeus's theory: Christ retraces humanity's journey from beginning to end, this time getting it right. Adam sinned at every point of temptation; Christ obeyed at every point. Where Adam failed, Christ succeeded — and in doing so, redeemed human nature from within. 'As through the disobedience of one man the many were made sinners, so through the obedience of the one man the many will be made righteous' (Romans 5:19).",
    strengths: "Emphasizes the incarnation as salvific. Captures the full-life significance of Christ's obedience (not only his death). Grounds solidarity with humanity.",
    tensions: "Less direct about the mechanism of how Christ's recapitulation is applied to individuals. Needs to be supplemented with other theories to give full account of atonement.",
  },
];

const THEOLOGY = [
  { title: "The Cross Was Necessary", verse: "Hebrews 9:22", body: "'Without the shedding of blood there is no forgiveness' (Hebrews 9:22). The atonement was not an unfortunate accident or a political martyrdom — it was divinely necessary. Jesus in Gethsemane asked if the cup could pass; it could not. The question of why it was necessary has generated the theories of atonement — but that it was necessary is consistently affirmed." },
  { title: "One Act, Multiple Dimensions", verse: "Colossians 1:19-20", body: "The various atonement theories are not mutually exclusive alternatives but different facets of the same event. The cross accomplishes: satisfaction of divine justice (penal substitution), defeat of death and the powers (Christus Victor), payment of the debt (ransom), and restoration of humanity's relationship with God (reconciliation). No single theory exhausts what happened on the cross. The fullest account requires all of them." },
  { title: "Definite and Universal Scope", verse: "1 John 2:2", body: "Two affirmations must be held in tension: Christ's death is sufficient for all ('the atoning sacrifice for our sins, and not only for ours but also for the whole world' — 1 John 2:2) and effective specifically for those who believe. How these are reconciled is the subject of centuries of debate. The safest pastoral position: the cross makes forgiveness genuinely available to every human being, and it effectively accomplishes the salvation of all who trust in it." },
  { title: "Resurrection as Integral", verse: "Romans 4:25", body: "The atonement is not completed at the cross — it requires the resurrection. Christ 'was delivered over to death for our sins and was raised to life for our justification' (Romans 4:25). The resurrection is God's declaration that the sacrifice was accepted, the debt was paid, and the verdict is not guilty. A dead savior is no savior. The atonement without resurrection is incomplete." },
];

export default function AtonementPage() {
  const [activeTab, setActiveTab] = useState<"theories" | "theology">("theories");
  const [selected, setSelected] = useState("Penal Substitution");

  const theory = THEORIES.find(t => t.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🩸</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theories of the Atonement</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Why did Jesus have to die? The church has answered this question in multiple ways — each illuminating a different facet of what the cross accomplished. No single theory exhausts the mystery.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theories" as const, label: "Atonement Theories", icon: "🔬" },
            { id: "theology" as const, label: "Key Doctrines", icon: "📖" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theories" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {THEORIES.map(t => (
                <button key={t.name} onClick={() => setSelected(t.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === t.name ? t.color : BORDER}`, background: selected === t.name ? `${t.color}15` : "transparent", color: selected === t.name ? t.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${theory.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ color: theory.color, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{theory.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{theory.period}</div>
                </div>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{theory.verse}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{theory.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>STRENGTHS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{theory.strengths}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>TENSIONS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{theory.tensions}</p>
                </div>
              </div>
            </div>
          </div>
        )}

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

            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 22, marginTop: 8 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>THE MYSTERY THAT REMAINS</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Every theory of the atonement illuminates something real and leaves something unexplained. The cross is a mystery — not in the sense of being irrational, but in the sense that the love of God expressed in it exceeds our full comprehension. Paul ends his atonement section in Romans 11 not with a formula but with a doxology: 'Oh, the depth of the riches of the wisdom and knowledge of God!' The appropriate response to the cross is ultimately not explanation but worship.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
