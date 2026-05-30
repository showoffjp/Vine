"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Body Is Not the Enemy", verse: "1 Corinthians 6:19-20", body: "The Christian sexual ethic begins not with rules but with a theology of the body. 'Your body is a temple of the Holy Spirit' (1 Corinthians 6:19). The body is not a problem to be managed — it is a good gift from a good Creator, set apart for God's purposes. Purity is not body-hatred disguised as religion; it is the conviction that the body is worth protecting because it is holy." },
  { title: "Sex Is Good — and Bounded", verse: "Genesis 2:24-25", body: "Scripture's first picture of sexuality is utterly positive: naked, unashamed, wholly known (Genesis 2:24-25). The Song of Solomon celebrates erotic love without apology. The Christian teaching is not that sex is bad but that it is so good, so powerful, and so meaning-laden that it belongs only within the covenant of marriage — where it can bear the weight it was designed to carry." },
  { title: "Lust Versus Desire", verse: "Matthew 5:28", body: "Jesus' teaching on lust (Matthew 5:28) is not a condemnation of sexual desire itself — it is a condemnation of desire that depersonalizes, that treats another human being as a means to your gratification. Lust is desire that has severed from love. The goal is not the absence of desire but desire rightly ordered: toward the right person, in the right context, with the right intent." },
  { title: "The Gospel and Sexual Sin", verse: "1 Corinthians 6:11", body: "'Such were some of you. But you were washed, you were sanctified, you were justified' (1 Corinthians 6:11). Paul lists sexual sin among the gravest — and then declares it fully forgivable. The gospel does not offer a lower standard; it offers a power the law cannot provide. Sexual purity is not a prerequisite for coming to Christ; it is a fruit of Christ's work in us." },
  { title: "The Long War", verse: "Romans 7:23", body: "Paul describes the experience of every believer: 'I see another law at work in me, waging war against the law of my mind' (Romans 7:23). Sexual temptation is a long war, not a single battle. The expectation of instantaneous and permanent victory sets believers up for shame cycles. The normative experience is ongoing struggle, ongoing grace, ongoing growth — not arrival." },
];

const STRUGGLES = [
  {
    name: "Pornography",
    color: "#EF4444",
    reality: "Pornography is the defining sexual struggle of our generation. It rewires the brain's reward system, distorts expectations of intimacy, degrades the people it depicts, and is consumed in secret — compounding shame. It is not a 'lesser' sin; it is a serious addiction with serious consequences.",
    steps: ["Name it honestly to God and one trusted person. Secret sin grows in darkness.", "Install accountability software (Covenant Eyes, Bark) — not as punishment but as a structural aid.", "Identify your triggers: boredom, loneliness, stress, late nights. Address the root, not just the symptom.", "Replace the habit: when tempted, move immediately to a specific action (prayer, call a friend, go outside).", "Find a recovery community — groups like XXXchurch, Sex Addicts Anonymous (Christian track), or a counselor."],
  },
  {
    name: "Premarital Sex",
    color: "#F59E0B",
    reality: "Many Christians enter relationships having already been sexually active — or encounter pressure to become so. The question is not only 'how far is too far' but 'what does this relationship honor?' Physical intimacy that outpaces emotional and covenantal intimacy creates confusion, attachment, and pain.",
    steps: ["Decide your boundaries in advance, in prayer, not in the moment.", "Communicate clearly with your partner — not as a list of rules but as an expression of what you value.", "Avoid situations (alone, late, isolated) where decisions become difficult.", "If you have crossed a line, confess, receive grace, and establish new boundaries. The gospel makes fresh starts possible.", "Consider whether the relationship is moving toward marriage — and at what pace."],
  },
  {
    name: "Same-Sex Attraction",
    color: PURPLE,
    reality: "Many Christians experience same-sex attraction and hold to a traditional sexual ethic — meaning they believe sexual expression belongs within man-woman marriage. This is a genuine, often lifelong, cross to carry. The church has often responded with either cruelty or silence. Both fail.",
    steps: ["You are not defined by your attractions. Identity in Christ precedes and outweighs sexual identity.", "Find community — other Christians who experience SSA and live faithfully. You are not alone.", "Celibacy is a gift, not a punishment — explore what faithful, full life looks like in your context.", "See a counselor who can help you understand your history, patterns, and path forward.", "The goal is not the elimination of attraction but the ordering of desire toward God."],
  },
  {
    name: "Masturbation",
    color: "#10B981",
    reality: "Scripture does not address masturbation directly. The question is not primarily the act itself but what accompanies it: lust (Matthew 5:28), fantasy that depersonalizes others, compulsive patterns that reinforce isolation. The standard is not simply 'is it mentioned in the Bible?' but 'does this draw me toward God and genuine intimacy, or away?'",
    steps: ["Assess honestly: is this compulsive? Is it accompanied by lust? Is it isolating?", "If it is a pattern of sin, treat it with the same intentionality as any habitual sin: confession, community, structure.", "Don't allow shame to become identity. Struggle is not failure; pattern is not character.", "Address underlying loneliness or stress that the habit may be masking.", "Married Christians: pursue genuine intimacy with your spouse rather than isolation."],
  },
];

const PRACTICES = [
  { title: "Confession Without Shame Spiral", desc: "Confess specifically and move on. Don't rehearse the sin or wallow in self-condemnation. '1 John 1:9' is not a suggestion — it is a promise. After confessing, receive the forgiveness. The enemy uses shame to keep you confessing rather than walking in grace.", icon: "🕊️" },
  { title: "Accountability That Actually Works", desc: "Accountability relationships fail when they are based on willpower and reporting. They work when they include real friendship, honest conversation about roots and triggers, and prayer that gets beneath behavior to heart issues. Find one person, not an app.", icon: "👥" },
  { title: "Understand Your Triggers", desc: "Sexual sin rarely comes out of nowhere. Common triggers: late nights alone, specific websites, certain emotional states (loneliness, stress, boredom, rejection), relational conflict. Map your pattern. Address the triggers, not just the behavior.", icon: "🗺️" },
  { title: "Renew Your Mind", desc: "Romans 12:2 is the sexual ethic strategy: transformation through mind renewal. What you consume shapes what you desire. A steady diet of sexual imagery in entertainment, social media, and advertising shapes desire toward lust. Deliberate choices about consumption matter.", icon: "🧠" },
  { title: "Community, Not Isolation", desc: "Sexual sin thrives in secrecy. The moment you tell one trusted person, the power of the secret breaks. This is not weakness — it is wisdom. Hebrews 3:13 speaks of daily encouragement against sin's deceitfulness. We need each other.", icon: "🤝" },
  { title: "A Theology of the Body", desc: "Read and internalize a positive theology of sexuality — not rules but a vision of what sex is for and why it is good and bounded. C.S. Lewis, Tim Keller, Christopher West, and Wesley Hill all write helpfully from different traditions.", icon: "📚" },
];

export default function PurityPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "struggles" | "practices">("theology");
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>("Pornography");

  const struggle = STRUGGLES.find(s => s.name === selectedStruggle);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🛡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Sexuality & Purity</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Christian sexual ethic begins not with rules but with a vision: the body is a temple, sex is a gift, and purity is not body-hatred but the conviction that the body is worth protecting because it is holy.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "struggles" as const, label: "Specific Struggles", icon: "⚔️" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "struggles" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {STRUGGLES.map(s => (
                <button key={s.name} onClick={() => setSelectedStruggle(s.name)}
                  style={{ width: "100%", background: selectedStruggle === s.name ? `${s.color}15` : "transparent", border: `1px solid ${selectedStruggle === s.name ? s.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selectedStruggle === s.name ? s.color : TEXT, fontWeight: 700, fontSize: 14 }}>{s.name}</span>
                </button>
              ))}
            </div>
            {struggle && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${struggle.color}30`, borderRadius: 14, padding: 24 }}>
                  <h2 style={{ color: struggle.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{struggle.name}</h2>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{struggle.reality}</p>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 12 }}>PRACTICAL STEPS</div>
                  {struggle.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${struggle.color}20`, border: `1px solid ${struggle.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: struggle.color, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Purity is not achieved through willpower alone. It requires community, structure, mind renewal, and an ongoing encounter with the grace that makes fresh starts possible.
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
