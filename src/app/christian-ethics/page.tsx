"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  { title: "Ethics Grounded in Character", verse: "Matthew 5:3-10", body: "The Sermon on the Mount does not begin with 'do not do' but with 'blessed are' — a description of character, not a list of rules. Jesus is not primarily a moral legislator; he is a character transformer. Christian ethics begins with the question 'what kind of person should I be?' rather than 'what should I do?' Rules can be followed without character; character produces the right action even when no rule covers the situation." },
  { title: "Love as the Fulfillment of the Law", verse: "Romans 13:10", body: "'Love does no harm to a neighbor. Therefore love is the fulfillment of the law' (Romans 13:10). Jesus's two great commandments (love God, love neighbor) summarize the entire moral law. This does not abolish specific commands but provides the animating spirit without which compliance is legalism. The question 'what does love require here?' is not an escape from moral seriousness but its deepest expression." },
  { title: "The Image of God as Moral Foundation", verse: "Genesis 9:6", body: "Every human being bears the image of God — which establishes a baseline of dignity, worth, and rights that cannot be erased by behavior, status, or circumstance. Christian ethics treats human life as sacred because it is made in the image of a sacred God (Genesis 9:6). This grounds absolute prohibitions on murder, exploitation, torture, and the reduction of persons to means." },
  { title: "Virtue Ethics and the Spirit", verse: "Galatians 5:22-23", body: "The fruit of the Spirit (Galatians 5:22-23) describes the character that the Spirit forms in those who belong to God. Christian ethics is less about compliance with rules than about the formation of these virtues: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. 'Against such things there is no law' — when character is fully formed, rules are transcended by virtue." },
  { title: "Kingdom Ethics and Future Orientation", verse: "Matthew 6:33", body: "Christian ethics is eschatologically shaped: we are called to live now in accordance with the future kingdom's values. This means some behaviors that are legally permissible are spiritually inappropriate for kingdom citizens; some behaviors that are culturally expected are incompatible with the character of the new creation. 'Seek first his kingdom and his righteousness' (Matthew 6:33) — the kingdom shapes the ethic." },
];

const ISSUES = [
  { issue: "Wealth and Poverty", color: "#F59E0B", verse: "Luke 12:33-34", body: "The NT's teaching on wealth is among its most consistent and demanding. Jesus speaks about money more than any other topic except the kingdom. The pattern: accumulation for its own sake is warned against (Luke 12:15-21); generosity is commanded (1 Timothy 6:17-19); the poor have a special claim on Christian attention (Matthew 25:31-46). The ethic is not communism but voluntary generosity proportional to what has been received." },
  { issue: "Truth and Honesty", color: "#8B5CF6", verse: "Ephesians 4:25", body: "The ninth commandment prohibits false testimony; Jesus says 'let your yes be yes and your no be no' (Matthew 5:37); Paul commands 'put off falsehood and speak truthfully to your neighbor' (Ephesians 4:25). Christian ethics demands comprehensive honesty — not just avoidance of obvious lies but truthfulness in implication, in selective disclosure, and in self-presentation. Deception by technically true statements is still deception." },
  { issue: "Sexuality and the Body", color: "#EF4444", verse: "1 Corinthians 6:19-20", body: "Paul's framework for sexual ethics is theological: the body is a temple of the Holy Spirit, bought with a price (1 Corinthians 6:19-20). Sexual immorality is distinct from other sins in that it is 'against your own body' (6:18). The NT is clear that sexual expression belongs within heterosexual covenant marriage (Hebrews 13:4) — not because sex is bad but because it is profoundly significant and the covenant protects its meaning." },
  { issue: "Violence and Power", color: "#3B82F6", verse: "Matthew 5:38-39", body: "Jesus rejects the lex talionis in personal relationships ('do not resist an evil person' — Matthew 5:38-39) while Paul affirms the state's legitimate use of force (Romans 13:4). Christians have historically debated just war theory, pacifism, and capital punishment. The consistent principle: violence for personal retaliation or self-aggrandizement is prohibited; the use of force to protect the innocent is complex but sometimes legitimate." },
  { issue: "Work and Rest", color: GREEN, verse: "Colossians 3:23", body: "Work is a creation mandate (Genesis 2:15) and a form of worship ('Whatever you do, work at it with all your heart, as working for the Lord' — Colossians 3:23). Sabbath limits the demand of work and reorients the worker to their identity as beloved creature, not only as producer. Christian ethics affirms both: diligent work and structured rest, vocation as calling and Sabbath as liberation." },
];

const METHODS = [
  { name: "Principled\nBiblicism", desc: "Identify the biblical principle behind specific commands, then apply that principle to new situations. More flexible than proof-texting but retains biblical authority.", pro: "Handles new ethical situations the Bible doesn't address directly", con: "Requires skill to identify principles accurately; can rationalize desired conclusions" },
  { name: "Natural Law", desc: "Moral truths are accessible through reason and observation of human nature, created by God. Provides common ground for moral discourse with non-Christians.", pro: "Common moral language across religious difference; applicable in public square", con: "People's 'natural' intuitions vary significantly; contested without revelation" },
  { name: "Virtue Ethics", desc: "Focus on character formation rather than rule compliance. Ask: what would a person of excellent character do? What practices form this character?", pro: "Addresses the 'why' beneath the 'what'; produces integrated people rather than rule followers", con: "Can be vague about specific choices; virtuous people disagree about specific applications" },
  { name: "Communal\nDiscernment", desc: "Major ethical decisions are made in community — tested by the wisdom of elders, tradition, and the body as a whole rather than individual conscience alone.", pro: "Corrects individualism; draws on accumulated wisdom; creates accountability", con: "Communities can be wrong; majority is not always right; requires trust in community" },
];

export default function ChristianEthicsPage() {
  const [activeTab, setActiveTab] = useState<"foundations" | "issues" | "methods">("foundations");
  const [selectedIssue, setSelectedIssue] = useState("Wealth and Poverty");

  const issue = ISSUES.find(i => i.issue === selectedIssue)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Ethics</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Christian ethics begins not with rules but with character — what kind of person does God want you to become? From formed character, right action flows. The Sermon on the Mount begins with 'Blessed are,' not 'Do not.'
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "foundations" as const, label: "Foundations", icon: "🏛️" },
            { id: "issues" as const, label: "Ethical Issues", icon: "⚖️" },
            { id: "methods" as const, label: "Methods", icon: "🔬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "foundations" && (
          <div>
            {FOUNDATIONS.map((t, i) => (
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

        {activeTab === "issues" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ISSUES.map(i => (
                <button key={i.issue} onClick={() => setSelectedIssue(i.issue)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedIssue === i.issue ? i.color : BORDER}`, background: selectedIssue === i.issue ? `${i.color}15` : "transparent", color: selectedIssue === i.issue ? i.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {i.issue}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${issue.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h2 style={{ color: issue.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{issue.issue}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{issue.verse}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{issue.body}</p>
            </div>
          </div>
        )}

        {activeTab === "methods" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                How does a Christian reason toward moral conclusions? These four methods represent the main approaches in Christian ethical thinking — most mature Christians use some combination.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {METHODS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10, whiteSpace: "pre-line" }}>{m.name}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{m.desc}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 10, marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>STRENGTH</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{m.pro}</p>
                  </div>
                  <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>LIMITATION</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{m.con}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
