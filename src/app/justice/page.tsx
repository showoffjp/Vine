"use client";
import { useState } from "react";
import VerseRef from "@/components/VerseRef";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", GOLD = "#c9a227", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  {
    title: "Justice Is God's Character",
    verse: "Psalm 89:14",
    icon: "⚖️",
    color: "#3B82F6",
    body: "Justice and righteousness are the foundation of God's throne (Psalm 89:14). This is not a political statement — it is a theological one. God is not neutral about injustice. He hates oppression because it violates the dignity of people made in his image. His covenant repeatedly commands care for the widow, orphan, foreigner, and poor — those without social power to protect themselves.",
    detail: "The Hebrew word mishpat (justice) occurs more than 200 times in the Old Testament. It refers not only to fair legal proceedings but to the active rescue of those being wronged. Tzedakah (righteousness/justice) appears alongside mishpat in 36 separate texts. God's character is simultaneously holy and just, righteous and merciful — and the people who bear his image are called to reflect that character in how they treat one another.",
  },
  {
    title: "Micah 6:8 — The Most Famous Command",
    verse: "Micah 6:8",
    icon: "📜",
    color: GREEN,
    body: "'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.' This verse is not a checklist of three unrelated duties — it is a single integrated posture. Justice without mercy becomes brutalism. Mercy without justice becomes sentimentality. Both without humility become self-righteousness.",
    detail: "Micah preached in the 8th century BC to a society that maintained elaborate religious observances while systematically exploiting the poor. God's verdict: the rituals are worthless if the heart is unjust. 'Act justly' (mishpat) means actively intervening on behalf of those being wronged. 'Love mercy' (hesed) means covenant faithfulness. 'Walk humbly with your God' means all of it done in dependence on God rather than in self-congratulation.",
  },
  {
    title: "The Prophets Preached Justice",
    verse: "Amos 5:24",
    icon: "🔥",
    color: "#EF4444",
    body: "'Let justice roll on like a river, righteousness like a never-failing stream' (Amos 5:24). Amos, Micah, Isaiah, and Jeremiah were covenant enforcers. When Israel exploited the poor, ignored the widow, and bribed the court, the prophets declared this a covenant violation as serious as idolatry. Social justice was not peripheral to their message; it was central.",
    detail: "Isaiah 58:6-7 is devastating: 'Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?' This is not a social gospel supplement to spiritual life — it is what God says genuine spiritual life looks like in practice.",
  },
  {
    title: "Jesus and the Marginalized",
    verse: "Luke 4:18",
    icon: "✝️",
    color: PURPLE,
    body: "Jesus opened his public ministry by reading Isaiah 61: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor, to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.' His ministry was marked by attention to the margins — the sick, the outsider, the ritually unclean, women, Samaritans, tax collectors.",
    detail: "Matthew 25:31-46 is perhaps the most uncomfortable passage in the Gospels. Jesus identifies himself with 'the least of these' — the hungry, the stranger, the sick, the prisoner. Care for them is care for him; neglect of them is neglect of him. This passage describes the visible fruit of genuine faith. A community that has genuinely encountered the king of the poor cannot be indifferent to poverty.",
  },
  {
    title: "The Gospel and the Whole Person",
    verse: "James 2:14-17",
    icon: "🌿",
    color: GOLD,
    body: "James asks: what good is it if someone claims faith but does nothing about a neighbor's hunger and cold? 'In the same way, faith by itself, if it is not accompanied by action, is dead' (James 2:17). The gospel is not only about spiritual salvation — it concerns the whole person in their concrete situation.",
    detail: "Paul makes the same connection in Galatians 2:10, recounting that the Jerusalem apostles asked only one thing of his mission: 'to remember the poor.' The unity of gospel proclamation and care for the poor was the core conviction of the earliest church. Acts 2 and 4 describe communities that shared their resources so that 'there was no needy person among them' — not communism, but the community of the resurrection.",
  },
  {
    title: "Already and Not Yet",
    verse: "Revelation 21:4",
    icon: "🌅",
    color: "#10B981",
    body: "Justice work is an expression of hope in God's coming kingdom — 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain' (Rev. 21:4). We work for justice now not because we can build the kingdom ourselves, but because our action is a prophetic sign of what God has promised — a foretaste of shalom.",
    detail: "The biblical category of shalom — comprehensive flourishing in right relationship with God, others, self, and creation — gives justice work its proper frame. The New Creation is not an escape from embodied, social life — it is the healing of it. Every act of justice is a sign pointing to the kingdom that is coming and is already breaking in through the church.",
  },
];

const TENSIONS = [
  { tension: "Individual salvation vs. social transformation", icon: "🔄", answer: "This is a false dichotomy. The gospel addresses persons and systems because persons are embedded in systems. The New Testament never reduces redemption to private spiritual experience — it creates communities that embody the kingdom's values in their shared life. Both/and, not either/or." },
  { tension: "Justice as gospel vs. justice as implication of gospel", icon: "⚡", answer: "The proclamation of the gospel is not reducible to justice work, and justice work is not a substitute for gospel proclamation. They are related but distinguishable. Verbal proclamation (kerygma) and demonstrating deeds of mercy (diakonia) are inseparable but not identical. The church must do both without collapsing one into the other." },
  { tension: "Which issues count as 'justice issues'?", icon: "🎯", answer: "Apply consistently biblical criteria: Who bears the image of God? Who lacks power or voice? A consistent ethic covers the unborn, the poor, the immigrant, the prisoner, and the racially marginalized — and makes both political parties uncomfortable. Selectively applying justice language is usually partisan co-option rather than biblical faithfulness." },
  { tension: "Engaging vs. becoming the political system", icon: "🗳️", answer: "The church's loyalty is to the kingdom of God, not to any party or nation-state. The moment a church becomes the chaplain of one political movement, it has lost its prophetic voice. Political engagement without prophetic independence is captured advocacy." },
  { tension: "Charity vs. systemic change", icon: "🏗️", answer: "Both are necessary and neither is sufficient alone. Direct service addresses immediate need; advocacy and structural reform address patterns that reproduce need. Dom Helder Camara: 'When I feed the poor, they call me a saint. When I ask why they are poor, they call me a communist.'" },
  { tension: "Avoiding political co-option from left and right", icon: "⚠️", answer: "The church's engagement with justice has historically been co-opted by both political left (reducing the gospel to social transformation) and political right (ignoring justice to protect cultural comfort). Tim Keller: the gospel creates a community 'too radical for conservatives and too traditional for liberals.'" },
];

const VOICES = [
  {
    id: "mlk",
    name: "Martin Luther King Jr.",
    years: "1929–1968",
    work: "Letter from Birmingham Jail (1963); Strength to Love (1963)",
    color: "#EF4444",
    bio: "Baptist pastor, civil rights leader, Nobel Peace Prize laureate. Assassinated in Memphis, 1968, at age 39. King grounded the civil rights movement in explicit Christian theology — not secular rights discourse alone. He drew on Augustine's distinction between just and unjust laws and the prophetic tradition to argue that segregation was a theological as much as a political offense. His Letter from Birmingham Jail, written to white moderate clergy who counseled patience, remains the most powerful Christian argument for urgent justice action in the American tradition.",
    quote: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny.",
    contribution: "King named the church's failure directly: 'The white church must acknowledge its complicity in the system of segregation.' His insistence that love and justice are not opposites but expressions of the same divine nature gave the movement its theological foundation. He demonstrated that genuine Christian discipleship demands active, costly engagement with injustice — not patient waiting.",
  },
  {
    id: "perkins",
    name: "John Perkins",
    years: "1930–2023",
    work: "Let Justice Roll Down (1976); With Justice for All (1982)",
    color: GREEN,
    bio: "Founder of the Christian Community Development Association (CCDA). Born in Mississippi. His '3 Rs' framework — Relocation, Reconciliation, Redistribution — emerged from his own experience of being beaten nearly to death by Mississippi police in 1970 and choosing reconciliation over retaliation. Perkins modeled the theology he taught: he moved his family back into the community he served and spent his life building from within.",
    quote: "The most radical thing you can do is to love your enemy. That was the most radical thing Jesus did, and we are called to do the same.",
    contribution: "Perkins developed the '3 Rs' of Christian Community Development: Relocation (live among those you serve), Reconciliation (across racial and economic lines), and Redistribution (share skills, resources, and power). His model distinguishes from both charity (distant giving without relationship) and activism (political without community). He is widely considered the most practically significant Christian justice thinker in American evangelical history.",
  },
  {
    id: "keller",
    name: "Tim Keller",
    years: "1950–2023",
    work: "Generous Justice (2010); Ministries of Mercy (1989)",
    color: PURPLE,
    bio: "Presbyterian pastor and author, founder of Redeemer Presbyterian Church in New York City. Keller's contribution is theological precision in a field prone to either complete reduction to social action (losing evangelism) or complete avoidance of social concern (losing obedience). His key insight: if you have truly understood the gospel — that God came to rescue the helpless — you cannot remain indifferent to the literal poor.",
    quote: "If you are a Christian, and you are not generous with your time, money, and life for the poor and marginalized, you need to ask yourself whether you have understood the gospel at all.",
    contribution: "In 'Generous Justice,' Keller argues that justice (mishpat) and righteousness (tzedakah) appear together 36 times in the Old Testament — and that separating them distorts both. His key distinction: mercy is meeting needs, but justice addresses the structures that create needs. Both are mandatory for Christians who understand the gospel. His work made serious engagement with justice credible in Reformed and evangelical circles.",
  },
  {
    id: "gutierrez",
    name: "Gustavo Gutierrez",
    years: "1928–2024",
    work: "A Theology of Liberation (1971); We Drink from Our Own Wells (1984)",
    color: GOLD,
    bio: "Peruvian Dominican priest and pioneer of liberation theology. Gutierrez's theology — developed from proximity to the extreme poverty of Lima's slums — argues that the gospel has a 'preferential option for the poor' grounded in the Exodus, the prophets, and Jesus's proclamation of the kingdom. He insisted that doing theology from the underside of history produces different — and necessary — readings of Scripture.",
    quote: "The preferential option for the poor is not exclusive or excluding. The poor are the first, but never the only ones, that the gospel calls us to serve.",
    contribution: "Gutierrez forced all Christian theology to ask: whose perspective is this written from, and whose is it for? His lasting contribution is the insistence that the voices of the poor are not peripheral to theology but belong at its center. The 'option for the poor' has been affirmed in modified form by Catholic Social Teaching and is widely influential in Protestant justice theology.",
  },
  {
    id: "wolterstorff",
    name: "Nicholas Wolterstorff",
    years: "b. 1932",
    work: "Justice: Rights and Wrongs (2008); Until Justice and Peace Embrace (1983)",
    color: "#3B82F6",
    bio: "Reformed philosopher at Yale and Calvin College. Wolterstorff provides the most rigorous philosophical grounding of justice in the Reformed theological tradition. He argues that human rights are grounded not in secular contract theory but in the worth that each person has as an image-bearer of God — a worth that does not depend on any human achievement or social recognition.",
    quote: "Shalom is the flourishing of the human person in all dimensions of existence: in one's relation to God, to fellow human beings, to the natural world, and to oneself.",
    contribution: "Wolterstorff's philosophical contribution is a rigorous account of rights that does not depend on secular foundations. His concept of shalom — comprehensive human flourishing — has been widely adopted as a more robust vision than rights discourse alone. His autobiographical account of how the suffering of the Palestinian people and his son's death drove him into justice work adds pastoral depth to philosophical argument.",
  },
];

const ACTION_STEPS = [
  { category: "Learn", color: "#3B82F6", icon: "📚", steps: ["Read 'Generous Justice' by Tim Keller — the most accessible and balanced entry point", "Study the prophets (Amos, Micah, Isaiah 1 & 58) before dismissing 'social justice' language", "Listen to those most affected by injustice — not just commentators about them", "Read 'Let Justice Roll Down' by John Perkins — a memoir of justice from the ground up", "Take a course in the history of injustice affecting your own city or context"] },
  { category: "Pray", color: PURPLE, icon: "🙏", steps: ["Pray regularly and specifically for those without power, voice, or resources", "Ask God to show you where you have benefited from systems that harm others", "Fast in solidarity and intercession — Isaiah 58 directly connects fasting to justice", "Pray for your city's leaders, courts, schools, and neighborhoods by name", "Pray for the persecuted church — those suffering for the name of Jesus globally"] },
  { category: "Give", color: GOLD, icon: "💰", steps: ["Give to organizations doing holistic justice work — both word and deed", "Give to causes that target root causes, not only symptoms", "Tithe with intentionality: ask where your church's money goes toward the poor", "Consider giving sacrificially — not from surplus but from what costs you something", "Support indigenous-led organizations in communities you care about"] },
  { category: "Act", color: "#EF4444", icon: "✊", steps: ["Volunteer consistently at a local food bank, shelter, prison ministry, or refugee org", "Speak up when injustice happens in your presence — don't stay silent", "Advocate at the local level: city council, school board, zoning and housing decisions", "Build genuine relationships across race, class, and culture — not just events", "Use your professional skills in service: lawyers pro bono, doctors in clinics, teachers tutoring"] },
];

const JUSTICE_VIDEOS = [
  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", speaker: "Tim Keller", channel: "Gospel in Life", description: "Keller unpacks how Jesus's kingdom reverses the world's power structures, placing the poor, marginalized, and meek at the center of God's concern — and what this demands of the church." },
  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", speaker: "John Piper", channel: "Desiring God", description: "Piper connects the joy of the gospel to radical generosity and service — the motivational foundation for sustained justice work rather than performance or guilt." },
  { videoId: "0bafE4k4YXU", title: "Word and Deed: Inseparable Mission", speaker: "Paul Washer", channel: "HeartCry Missionary Society", description: "Washer explains the inseparable connection between gospel proclamation and genuine compassion — why both word and deed belong together in authentic mission." },
  { videoId: "GKYDGK2XDNw", title: "The Least of These", speaker: "Paul Washer", channel: "Paul Washer Sermons", description: "A sermon on Matthew 25 — what it means to encounter Jesus in the suffering and marginalized, and what genuine faith looks like in the face of real human need." },
  { videoId: "by8ykv7-A3c", title: "The Supremacy of Christ and Truth", speaker: "Voddie Baucham", channel: "Voddie Baucham Ministries", description: "Baucham makes the case that only a Christ-centered worldview provides the coherent foundation for genuine justice — why secular justice frameworks ultimately collapse." },
  { videoId: "yhiHSf_L6_E", title: "Radical: A Call to Costly Mission", speaker: "David Platt", channel: "Radical", description: "Platt's landmark Passion message challenging comfortable Christianity to a costly, world-oriented, justice-shaped life that takes the Great Commission seriously." },
];

type Tab = "foundations" | "tensions" | "voices" | "action" | "videos";

export default function JusticePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_justice_tab", "foundations");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_justice_voice", "mlk");
  const [expandedFoundation, setExpandedFoundation] = useState<number | null>(null);

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "80px 20px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>⚖️</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: GREEN, textTransform: "uppercase" }}>Justice & the Gospel</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.1, color: TEXT }}>
            Justice Is{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Native to God
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 28px" }}>
            Justice is not a political import into Christianity — it is woven into the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whole world.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[{ label: "Micah 6:8", desc: "Act justly, love mercy" }, { label: "Amos 5:24", desc: "Justice like a river" }, { label: "Isaiah 58:6", desc: "Loose chains of injustice" }].map(v => (
              <div key={v.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "10px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: GREEN }}>{v.label}</div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "32px 20px 80px" }}>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "foundations" as const, label: "Biblical Basis", icon: "📖" },
            { id: "tensions" as const, label: "Key Tensions", icon: "⚖️" },
            { id: "voices" as const, label: "Key Voices", icon: "🗣️" },
            { id: "action" as const, label: "How to Engage", icon: "✊" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.2s" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* FOUNDATIONS */}
        {tab === "foundations" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Biblical justice is woven into the character of God, the covenant with Israel, and the mission of Jesus. These {FOUNDATIONS.length} foundations establish what Scripture actually says — before we reach for any political framework.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FOUNDATIONS.map((f, i) => {
                const isExp = expandedFoundation === i;
                return (
                  <div role="button" tabIndex={0} key={i} style={{ background: CARD, border: `1px solid ${isExp ? f.color + "50" : BORDER}`, borderRadius: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <button type="button" onClick={() => setExpandedFoundation(isExp ? null : i)}
                      style={{ width: "100%", textAlign: "left", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>{f.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                          <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 17, margin: 0 }}>{f.title}</h3>
                          <span style={{ background: `${f.color}20`, color: f.color, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0 }}><VerseRef reference={f.verse} /></span>
                        </div>
                        <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.65 }}>{f.body}</p>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{isExp ? "▾" : "▸"}</span>
                    </button>
                    {isExp && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 24px 20px 62px" }}>
                        <div style={{ borderLeft: `3px solid ${f.color}`, paddingLeft: 16 }}>
                          <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{f.detail}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 24, background: `linear-gradient(135deg, rgba(58,125,86,0.06), rgba(201,162,39,0.06))`, border: `1px solid rgba(58,125,86,0.25)`, borderRadius: 16, padding: "24px 28px" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Isaiah 58:6-7 — The Fasting God Chooses</div>
              <blockquote style={{ margin: 0, borderLeft: `3px solid ${GREEN}`, paddingLeft: 16 }}>
                <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.9, margin: 0 }}>
                  &ldquo;Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?&rdquo;
                </p>
                <p style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginTop: 10 }}>&mdash; Isaiah 58:6-7</p>
              </blockquote>
            </div>
          </div>
        )}

        {/* TENSIONS */}
        {tab === "tensions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Justice work is deeply contested in the church — not because Christians don&apos;t care, but because they care about competing goods. Here are the most common tensions and how to think through them faithfully, without abandoning either the gospel or its social implications.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {TENSIONS.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "22px 24px" }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22 }}>{t.icon}</span>
                    <div style={{ color: GOLD, fontWeight: 800, fontSize: 15, flex: 1 }}>&ldquo;{t.tension}&rdquo;</div>
                  </div>
                  <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16 }}>
                    <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{t.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, background: `${PURPLE}12`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: PURPLE, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Tim Keller on Political Co-option</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
                &ldquo;The Gospel is simultaneously too radical for conservatives and too traditional for liberals. A Christian who consistently applies biblical teaching will find themselves deeply uncomfortable in any political party.&rdquo;
              </p>
            </div>

            <div style={{ marginTop: 16, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, marginBottom: 16 }}>Six Discernment Questions</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
                {[
                  { q: "Who bears God's image here?", c: GREEN },
                  { q: "Who lacks power or voice in this situation?", c: PURPLE },
                  { q: "What does Scripture explicitly say?", c: "#3B82F6" },
                  { q: "What would this community look like if restored?", c: GOLD },
                  { q: "Am I being consistent across similar groups?", c: "#EF4444" },
                  { q: "Is my church making either party uncomfortable?", c: "#10B981" },
                ].map((item, i) => (
                  <div key={i} style={{ background: `${item.c}0F`, border: `1px solid ${item.c}25`, borderRadius: 10, padding: "12px 14px" }}>
                    <p style={{ color: item.c, fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>{item.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Five essential voices on justice and the gospel — from King&apos;s prophetic grounding of the civil rights movement to Wolterstorff&apos;s philosophical rigor. Each brings a distinct perspective; together they offer a comprehensive framework for engagement.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: 220, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {VOICES.map(v => (
                  <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ width: "100%", textAlign: "left", background: selectedVoice === v.id ? `${v.color}18` : CARD, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ color: selectedVoice === v.id ? v.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{v.years}</div>
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${voice.color}40`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13, marginBottom: 6 }}>{voice.years}</div>
                  <div style={{ color: "#8080A0", fontSize: 12, fontStyle: "italic", marginBottom: 18 }}>{voice.work}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voice.bio}</p>
                  <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, margin: "0 0 20px" }}>
                    <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>&ldquo;{voice.quote}&rdquo;</p>
                  </blockquote>
                  <div style={{ background: `${voice.color}0D`, border: `1px solid ${voice.color}25`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: voice.color, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 8, textTransform: "uppercase" }}>Contribution</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voice.contribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTION */}
        {tab === "action" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                The gap between caring about justice and acting for justice is large. Start with one concrete step in each category. Sustained action across years changes communities; intense but brief moments of activism rarely do.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 28 }}>
              {ACTION_STEPS.map(cat => (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 14, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontSize: 22 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{cat.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {cat.steps.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Perkins 3 Rs */}
            <div style={{ background: `${GREEN}0A`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: "28px 24px", marginBottom: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: GREEN, marginBottom: 8 }}>John Perkins&apos; 3 R&apos;s of Christian Community Development</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>The most practical framework for sustained justice engagement in local communities. Not a program — a posture.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
                {[
                  { r: "Relocation", icon: "🏠", desc: "Move into and live among the communities you serve. Proximity creates accountability and genuine relationship. Justice at a distance is charity; justice from proximity is incarnational." },
                  { r: "Reconciliation", icon: "🤝", desc: "Work across racial, economic, and cultural divides. The gospel creates the most diverse community in the world — a foretaste of the new creation." },
                  { r: "Redistribution", icon: "🔄", desc: "Share skills, resources, education, and economic opportunity — not only money. The goal is restored capacity, not permanent dependency. Teach, employ, train, and empower." },
                ].map(item => (
                  <div key={item.r} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.r}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 22, fontStyle: "italic", color: TEXT, lineHeight: 1.6, marginBottom: 12 }}>
                &ldquo;He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.&rdquo;
              </p>
              <p style={{ color: GREEN, fontWeight: 700, fontSize: 14, margin: 0 }}>&mdash; Micah 6:8</p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Teaching on Justice &amp; the Gospel</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Sermons and lectures from trusted pastors and theologians on the inseparable connection between the gospel and justice — from the prophets to the present.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 24 }}>
              {JUSTICE_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: PURPLE, border: "1px solid rgba(107,79,187,0.3)" }}>{v.speaker}</span>
                      <span style={{ fontSize: 11, color: MUTED }}>{v.channel}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px 28px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, marginBottom: 16 }}>Essential Reading on Justice</h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { title: "Generous Justice", author: "Tim Keller", desc: "The most accessible Reformed account of justice as gospel implication." },
                  { title: "Let Justice Roll Down", author: "John Perkins", desc: "A memoir of justice and reconciliation from the frontlines of the civil rights struggle." },
                  { title: "Rich Christians in an Age of Hunger", author: "Ron Sider", desc: "The landmark evangelical text on global poverty, economics, and Christian responsibility." },
                  { title: "Until Justice and Peace Embrace", author: "Nicholas Wolterstorff", desc: "Philosophical theology grounding justice in the Reformed tradition of shalom." },
                  { title: "Strength to Love", author: "Martin Luther King Jr.", desc: "Sermons from the civil rights movement — theology tested in suffering and action." },
                ].map((book, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 0", borderBottom: i < 4 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}15`, border: `1px solid ${GREEN}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>📚</div>
                    <div>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{book.title}</span>
                      <span style={{ color: PURPLE, fontSize: 13, fontWeight: 600 }}> by {book.author}</span>
                      <p style={{ color: MUTED, fontSize: 12, margin: "3px 0 0", lineHeight: 1.55 }}>{book.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
