"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundations" | "issues" | "contemporary" | "methods" | "videos";

const FOUNDATIONS = [
  { title: "Ethics Grounded in Character", verse: "Matthew 5:3-10", body: "The Sermon on the Mount does not begin with 'do not do' but with 'blessed are' — a description of character, not a list of rules. Jesus is not primarily a moral legislator; he is a character transformer. Christian ethics begins with the question 'what kind of person should I be?' rather than 'what should I do?' Rules can be followed without character; character produces the right action even when no rule covers the situation." },
  { title: "Love as the Fulfillment of the Law", verse: "Romans 13:10", body: "'Love does no harm to a neighbor. Therefore love is the fulfillment of the law' (Romans 13:10). Jesus's two great commandments (love God, love neighbor) summarize the entire moral law. This does not abolish specific commands but provides the animating spirit without which compliance is legalism. The question 'what does love require here?' is not an escape from moral seriousness but its deepest expression." },
  { title: "The Image of God as Moral Foundation", verse: "Genesis 9:6", body: "Every human being bears the image of God — which establishes a baseline of dignity, worth, and rights that cannot be erased by behavior, status, or circumstance. Christian ethics treats human life as sacred because it is made in the image of a sacred God (Genesis 9:6). This grounds absolute prohibitions on murder, exploitation, torture, and the reduction of persons to means." },
  { title: "Virtue Ethics and the Spirit", verse: "Galatians 5:22-23", body: "The fruit of the Spirit (Galatians 5:22-23) describes the character that the Spirit forms in those who belong to God. Christian ethics is less about compliance with rules than about the formation of these virtues: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. 'Against such things there is no law' — when character is fully formed, rules are transcended by virtue." },
  { title: "Kingdom Ethics and Future Orientation", verse: "Matthew 6:33", body: "Christian ethics is eschatologically shaped: we are called to live now in accordance with the future kingdom's values. This means some behaviors that are legally permissible are spiritually inappropriate for kingdom citizens; some behaviors that are culturally expected are incompatible with the character of the new creation. 'Seek first his kingdom and his righteousness' (Matthew 6:33) — the kingdom shapes the ethic." },
];

const ISSUES = [
  { issue: "Wealth and Poverty", color: "#F59E0B", verse: "Luke 12:33-34", body: "The NT's teaching on wealth is among its most consistent and demanding. Jesus speaks about money more than any other topic except the kingdom. The pattern: accumulation for its own sake is warned against (Luke 12:15-21); generosity is commanded (1 Timothy 6:17-19); the poor have a special claim on Christian attention (Matthew 25:31-46). The ethic is not communism but voluntary generosity proportional to what has been received." },
  { issue: "Truth and Honesty", color: "#8B5CF6", verse: "Ephesians 4:25", body: "'Put off falsehood and speak truthfully to your neighbor' (Ephesians 4:25). Christian ethics demands comprehensive honesty — not just avoidance of obvious lies but truthfulness in implication, in selective disclosure, and in self-presentation. Deception by technically true statements is still deception. The ninth commandment prohibits false witness; Jesus says 'let your yes be yes and your no be no' (Matthew 5:37)." },
  { issue: "Sexuality and the Body", color: "#EF4444", verse: "1 Corinthians 6:19-20", body: "Paul's framework for sexual ethics is theological: the body is a temple of the Holy Spirit, bought with a price (1 Corinthians 6:19-20). Sexual immorality is distinct from other sins in that it is 'against your own body' (6:18). The NT is clear that sexual expression belongs within heterosexual covenant marriage (Hebrews 13:4) — not because sex is bad but because it is profoundly significant and the covenant protects its meaning." },
  { issue: "Violence and Power", color: "#3B82F6", verse: "Matthew 5:38-39", body: "Jesus rejects the lex talionis in personal relationships ('do not resist an evil person') while Paul affirms the state's legitimate use of force (Romans 13:4). Christians have historically debated just war theory, pacifism, and capital punishment. The consistent principle: violence for personal retaliation or self-aggrandizement is prohibited; the use of force to protect the innocent is complex but sometimes legitimate." },
  { issue: "Work and Rest", color: GREEN, verse: "Colossians 3:23", body: "Work is a creation mandate (Genesis 2:15) and a form of worship ('Whatever you do, work at it with all your heart, as working for the Lord' — Colossians 3:23). Sabbath limits the demand of work and reorients the worker to their identity as beloved creature, not only as producer. Christian ethics affirms both: diligent work and structured rest, vocation as calling and Sabbath as liberation." },
];

const CONTEMPORARY = [
  {
    id: "digital",
    issue: "Digital Ethics & Technology",
    color: "#3B82F6",
    icon: "💻",
    position: "Contested",
    overview: "Christians face ethical questions about technology that Scripture does not directly address: social media, artificial intelligence, digital surveillance, and the formation of identity online. The speed of technological change outpaces theological reflection.",
    considerations: [
      "The imago dei grounds human dignity that must not be violated by algorithmic manipulation or surveillance capitalism",
      "Social media's attention economy is designed to exploit pride, comparison, and outrage — formation matters as much as rules",
      "AI raises questions about personhood, creativity, and the nature of image-bearing",
      "Digital life can reinforce existing virtues or vices — technology is not morally neutral",
    ],
    tensions: "Between using tools well and being used by tools. Between digital connection and deep embodied community. Between privacy and accountability.",
  },
  {
    id: "climate",
    issue: "Creation Care & Climate",
    color: GREEN,
    icon: "🌿",
    position: "Growing consensus",
    overview: "Climate change and environmental degradation raise urgent questions about Christian stewardship of creation. Genesis 2:15 gives humanity a mandate to 'cultivate and keep' the earth. The question is the extent of that responsibility and how it intersects with economic and political realities.",
    considerations: [
      "Creation is God's, not ours — stewardship is the correct framework, not ownership",
      "The poor are disproportionately affected by environmental degradation — justice and creation care are linked",
      "Eschatology matters: does God's renewal of creation require conservation now, or make it irrelevant?",
      "The church has historically been slow to connect creation care to Christian discipleship",
    ],
    tensions: "Between the mandate to steward and the reality of complex trade-offs. Between prophetic urgency and political humility. Between new creation hope and present-world responsibility.",
  },
  {
    id: "racial",
    issue: "Racial Justice & Reconciliation",
    color: "#EC4899",
    icon: "✊",
    position: "Broadly affirmed, contested on means",
    overview: "The NT vision of the church is explicitly multi-ethnic: 'every nation, tribe, people and language' (Revelation 7:9). Racial division in the church is a theological problem, not merely a social one. But Christians disagree sharply about diagnosis, responsibility, and remedy.",
    considerations: [
      "The unity of the church across ethnicity is a sign of the new creation and a witness to the world",
      "Acts 6 shows the early church taking structural action (appointing deacons) to address racial-economic inequity",
      "Ephesians 2 frames reconciliation between Jew and Gentile as the demonstration of the gospel's power",
      "Historical injustice shapes present-day inequity — ignoring history is not neutrality",
    ],
    tensions: "Between individual responsibility and structural analysis. Between the church's prophetic calling and political capture. Between urgency and wisdom in the means of change.",
  },
  {
    id: "lgbtq",
    issue: "Sexuality, Gender & Human Flourishing",
    color: PURPLE,
    icon: "🏳️",
    position: "Genuinely contested",
    overview: "Questions about sexual orientation, gender identity, and Christian discipleship are among the most contested in contemporary Christianity. Traditional and revisionist readings of Scripture reach different conclusions, and both are held by people with high views of Scripture and deep pastoral concern.",
    considerations: [
      "The biblical witness on sexual ethics is consistent: sexual expression belongs in heterosexual covenant marriage",
      "Christians disagree about whether this is a universal norm or a culturally conditioned expression",
      "The church has often failed to pastorally accompany LGBTQ+ individuals with the care the gospel demands",
      "The question is not only theological but deeply personal — real people with real experiences, not only abstract arguments",
    ],
    tensions: "Between fidelity to received tradition and pastoral compassion. Between clear biblical teaching and genuine interpretive uncertainty. Between doctrinal clarity and human complexity.",
  },
  {
    id: "ai",
    issue: "Artificial Intelligence & Personhood",
    color: "#F59E0B",
    icon: "🤖",
    position: "Emerging question",
    overview: "AI systems capable of sophisticated conversation, creative output, and apparently autonomous decision-making raise unprecedented questions about personhood, consciousness, and what is uniquely human. These questions are new enough that the Christian tradition offers principles rather than settled conclusions.",
    considerations: [
      "Human dignity is rooted in the imago dei — bearing God's image is not reducible to cognitive capacity or conversational sophistication",
      "The soul (nephesh/pneuma) in Scripture is not equivalent to intelligence — animals have souls; rocks with AI patterns do not",
      "AI replacing human workers raises urgent questions about vocation, dignity, and economic justice",
      "Relationship is fundamental to human flourishing — AI relationships are not equivalent to embodied human community",
    ],
    tensions: "Between recognizing AI's genuine capabilities and maintaining the uniqueness of human personhood. Between using AI as a tool and becoming its users. Between technological optimism and prophetic caution.",
  },
];

const METHODS = [
  { name: "Principled Biblicism", desc: "Identify the biblical principle behind specific commands, then apply that principle to new situations. More flexible than proof-texting but retains biblical authority.", pro: "Handles new ethical situations the Bible doesn't address directly", con: "Requires skill to identify principles accurately; can rationalize desired conclusions" },
  { name: "Natural Law", desc: "Moral truths are accessible through reason and observation of human nature, created by God. Provides common ground for moral discourse with non-Christians.", pro: "Common moral language across religious difference; applicable in public square", con: "People's 'natural' intuitions vary significantly; contested without revelation" },
  { name: "Virtue Ethics", desc: "Focus on character formation rather than rule compliance. Ask: what would a person of excellent character do? What practices form this character?", pro: "Addresses the 'why' beneath the 'what'; produces integrated people rather than rule followers", con: "Can be vague about specific choices; virtuous people disagree about specific applications" },
  { name: "Communal Discernment", desc: "Major ethical decisions are made in community — tested by the wisdom of elders, tradition, and the body as a whole rather than individual conscience alone.", pro: "Corrects individualism; draws on accumulated wisdom; creates accountability", con: "Communities can be wrong; majority is not always right; requires trust in community" },
];

export default function ChristianEthicsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-ethics_tab", "foundations");
  const [selectedIssue, setSelectedIssue] = usePersistedState("vine_christian-ethics_selected_issue", "Wealth and Poverty");
  const [selectedContemporary, setSelectedContemporary] = usePersistedState("vine_christian-ethics_selected_contemporary", "digital");

  const issue = ISSUES.find(i => i.issue === selectedIssue)!;
  const contemporary = CONTEMPORARY.find(c => c.id === selectedContemporary)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
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
            { id: "foundations" as Tab, label: "Foundations", icon: "🏛️" },
            { id: "issues" as Tab, label: "Classic Issues", icon: "⚖️" },
            { id: "contemporary" as Tab, label: "Today's Hard Issues", icon: "🌐" },
            { id: "methods" as Tab, label: "Methods", icon: "🔬" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "foundations" && (
          <div>
            {FOUNDATIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "issues" && (
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
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={issue.verse} /></span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{issue.body}</p>
            </div>
          </div>
        )}

        {tab === "contemporary" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 190, flexShrink: 0 }}>
              {CONTEMPORARY.map(c => (
                <button key={c.id} onClick={() => setSelectedContemporary(c.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedContemporary === c.id ? c.color : BORDER}`, background: selectedContemporary === c.id ? `${c.color}12` : "transparent", color: selectedContemporary === c.id ? c.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {c.icon} {c.issue.split(" &")[0].split(" &")[0]}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${contemporary.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <h2 style={{ color: contemporary.color, fontWeight: 900, fontSize: 19, margin: 0 }}>{contemporary.issue}</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{contemporary.position}</span>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{contemporary.overview}</p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>KEY CONSIDERATIONS</div>
                  {contemporary.considerations.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                      <span style={{ color: contemporary.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: `${contemporary.color}08`, border: `1px solid ${contemporary.color}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: contemporary.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>THE CENTRAL TENSION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{contemporary.tensions}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "methods" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                How does a Christian reason toward moral conclusions? These four methods represent the main approaches in Christian ethical thinking — most mature Christians use some combination.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {METHODS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{m.name}</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{m.desc}</p>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 10, marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>STRENGTH</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{m.pro}</p>
                  </div>
                  <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: 10 }}>
                    <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 4 }}>LIMITATION</div>
                    <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{m.con}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "b43cgj26wS8", title: "Questioning Christianity: Morality", channel: "Tim Keller", description: "Keller explores the foundations of Christian morality — why objective moral values exist, how they are grounded in God, and what this means for ethical decision-making." },
                  { videoId: "8i9McgNOUnA", title: "Ethics and the Good Life", channel: "Tim Keller at Columbia University", description: "Keller and philosopher Philip Kitcher debate the foundations of ethics and the good life at the Veritas Forum — a rigorous engagement with secular moral philosophy." },
                  { videoId: "jMLp2mYN_D8", title: "Postmodernism and Christian Truth", channel: "Tim Keller at Desiring God", description: "Keller addresses postmodern challenges to Christian ethics and truth claims, arguing that Christianity provides the only coherent ground for moral reality." },
                  { videoId: "4uIvOniW8xA", title: "Making Sense of God: An Invitation to the Skeptical", channel: "Tim Keller at Google", description: "Keller presents a comprehensive case for why Christian ethical and metaphysical claims make more sense of human experience than secular alternatives." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
