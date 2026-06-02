"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FOUNDATIONS = [
  { title: "Justice Is God's Character", verse: "Psalm 89:14", body: "Justice and righteousness are the foundation of God's throne (Psalm 89:14). This is not a political statement — it is a theological one. God is not neutral about injustice. He hates oppression because it violates the dignity of people made in his image. His covenant repeatedly commands care for the widow, orphan, foreigner, and poor — those without social power to protect themselves." },
  { title: "The Prophets Preached Justice", verse: "Amos 5:24", body: "'Let justice roll on like a river, righteousness like a never-failing stream' (Amos 5:24). Amos, Micah, Isaiah, and Jeremiah were not social activists importing foreign categories — they were covenant enforcers. When Israel exploited the poor, ignored the widow, and bribed the court, the prophets declared this a covenant violation as serious as idolatry. Social justice was not peripheral to their message; it was central." },
  { title: "Jesus and the Poor", verse: "Luke 4:18", body: "Jesus opened his public ministry by reading Isaiah 61 in the synagogue: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.' His ministry was marked by attention to the marginalized — the sick, the outsider, the ritually unclean, women, Samaritans, tax collectors. Not as a social program but as the in-breaking of the kingdom of God." },
  { title: "The Gospel and the Whole Person", verse: "James 2:14-17", body: "James asks: what good is it if someone claims faith but does nothing about a neighbor's hunger and cold? 'In the same way, faith by itself, if it is not accompanied by action, is dead' (James 2:17). The gospel is not only about spiritual salvation — it concerns the whole person in their concrete situation. Separating evangelism from care for the body is a modern split that Scripture does not support." },
  { title: "Already and Not Yet", verse: "Revelation 21:4", body: "Justice work is an expression of hope in God's coming kingdom — 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain' (Rev. 21:4). We work for justice now not because we believe we can build the kingdom ourselves, but because our action is a sign of what God has promised. It is prophetic, anticipatory — a foretaste of shalom." },
];

const TENSIONS = [
  { tension: "Individual salvation vs. social transformation", answer: "This is a false dichotomy. The gospel addresses persons and systems because persons are embedded in systems. Both/and, not either/or." },
  { tension: "Justice as gospel vs. justice as implication of gospel", answer: "The proclamation of the gospel is not reducible to justice work, and justice work is not a substitute for gospel proclamation. They are related but distinguishable. The church must do both." },
  { tension: "Which issues count as 'justice issues'?", answer: "Consistently apply biblical criteria: Who bears the image of God? Who lacks power or voice? What does Scripture say about this group? Consistent pro-life ethics covers abortion, poverty, racism, and capital punishment — not left or right platforms." },
  { tension: "Engaging vs. becoming the political system", answer: "The church's loyalty is to the kingdom of God, not to any party or nation. Christians should be comfortable making both parties uncomfortable. Political engagement without prophetic independence is captured advocacy." },
  { tension: "Charity vs. systemic change", answer: "Both are necessary. Direct service addresses immediate need; advocacy and systemic reform address patterns that reproduce need. Feeding the poor is essential; asking why people are hungry is also essential." },
];

const VOICES = [
  {
    id: "mlk",
    name: "Martin Luther King Jr.",
    work: "Letter from Birmingham Jail (1963); Strength to Love (1963)",
    color: "#EF4444",
    bio: "Baptist pastor, civil rights leader, Nobel Peace Prize laureate. Assassinated in Memphis, 1968, at age 39.",
    quote: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.",
    contribution: "King's unique contribution was grounding the civil rights movement in explicit Christian theology — not in secular rights discourse alone. He drew on Augustine's distinction between just and unjust laws, on Aquinas's concept of natural law, and on the prophetic tradition to argue that segregation was a theological as much as a political offense. His Letter from Birmingham Jail, written to white moderate clergy who counseled patience, remains the most powerful Christian argument for urgent justice action in the American tradition. He also named the church's failure directly: 'The white church must acknowledge its complicity in the system of segregation.'",
  },
  {
    id: "perkins",
    name: "John Perkins",
    work: "Let Justice Roll Down (1976); With Justice for All (1982)",
    color: GREEN,
    bio: "Founder of the Christian Community Development Association (CCDA). Born in Mississippi, 1930. Justice advocate and community developer for 60+ years.",
    quote: "The most radical thing you can do is to love your enemy. That was the most radical thing Jesus did, and we are called to do the same.",
    contribution: "Perkins developed the '3 Rs' of Christian Community Development: Relocation (live among the people you serve), Reconciliation (across racial and economic lines), and Redistribution (share skills, resources, and power). His model is distinguished from both charity (distant giving without relationship) and activism (political without community). His own story — beaten nearly to death by Mississippi police in 1970 and choosing reconciliation over retaliation — embodies his theology. He is widely considered the most practically significant Christian justice thinker in American evangelical history.",
  },
  {
    id: "keller",
    name: "Tim Keller",
    work: "Generous Justice (2010); Ministries of Mercy (1989)",
    color: PURPLE,
    bio: "Presbyterian pastor and author, founder of Redeemer Presbyterian Church in New York City.",
    quote: "If you are a Christian, and you are not generous with your time, money, and life for the poor and marginalized, you need to ask yourself whether you have understood the gospel at all.",
    contribution: "Keller's contribution is theological precision in a field prone to either complete reduction to social action (losing evangelism) or complete avoidance of social concern (losing obedience). In 'Generous Justice,' he argues that justice (mishpat) and righteousness (tzedakah) appear together 36 times in the Old Testament — and that separating them distorts both. His key distinction: mercy is meeting needs, but justice addresses the structures that create needs. Both are mandatory for Christians who understand the gospel. His work has made serious engagement with justice credible in Reformed and evangelical circles that had previously avoided it.",
  },
  {
    id: "gutierrez",
    name: "Gustavo Gutierrez",
    work: "A Theology of Liberation (1971)",
    color: "#F59E0B",
    bio: "Peruvian Dominican priest, theologian, and professor. Born 1928 in Lima. Pioneer of liberation theology.",
    quote: "The preferential option for the poor is not exclusive or excluding. The poor are the first, but never the only ones, that the gospel calls us to serve.",
    contribution: "Gutierrez's theology — developed from proximity to the extreme poverty of Lima's slums — argues that the gospel has a 'preferential option for the poor' grounded in the Exodus, the prophets, and Jesus's proclamation of the kingdom. His contribution is the insistence that doing theology from the underside of history produces different readings of Scripture than theology done from positions of comfort. He has been criticized for uncritical use of Marxist categories; he has responded by distinguishing his framework from ideological Marxism. His lasting contribution is forcing all Christian theology to ask: whose perspective is this theology written from, and whose is it for?",
  },
  {
    id: "wolterstorff",
    name: "Nicholas Wolterstorff",
    work: "Justice: Rights and Wrongs (2008); Until Justice and Peace Embrace (1983)",
    color: "#3B82F6",
    bio: "Reformed philosopher at Yale and Calvin College. Engaged with justice through both academic philosophy and activism in South Africa and Palestine.",
    quote: "Shalom is the flourishing of the human person in all dimensions of his or her existence: in one's relation to God, in one's relation to one's fellow human beings, in one's relation to the natural world, and in one's relation to oneself.",
    contribution: "Wolterstorff's philosophical contribution is a rigorous grounding of justice in rights that are grounded in what he calls 'worth' — the inherent dignity that each person has as an image-bearer of God. He argues against the view that justice is about maximizing welfare or enforcing contracts, and for the view that justice is about respecting the worth of persons as such. This framework provides a theologically grounded account of rights that does not depend on secular foundations. His concept of shalom — comprehensive human flourishing — has been widely adopted as a more robust vision than rights discourse alone.",
  },
];

const ACTION_STEPS = [
  { category: "Learn", color: "#3B82F6", icon: "📚", steps: [
    "Read The Prophets before dismissing 'social justice' language",
    "Study the history of injustice affecting your city or context",
    "Listen to those most affected — not just to commentators about them",
    "Read: 'Generous Justice' (Keller), 'Rich Christians in an Age of Hunger' (Sider)",
  ]},
  { category: "Pray", color: PURPLE, icon: "🙏", steps: [
    "Pray regularly for those without power, voice, or resources",
    "Ask God to show you where you have benefited from systems that harm others",
    "Fast in solidarity and intercession for the oppressed",
    "Use the world-prayer tools to pray for justice globally",
  ]},
  { category: "Give", color: "#10B981", icon: "💰", steps: [
    "Direct giving to organizations doing holistic justice work",
    "Give to causes that target root causes, not just symptoms",
    "Tithe with intentionality: ask where your church's money goes toward the poor",
    "Consider giving beyond the tithe to justice organizations",
  ]},
  { category: "Act", color: "#F59E0B", icon: "✊", steps: [
    "Volunteer at a local food bank, shelter, prison ministry, or refugee org",
    "Speak up when injustice happens in your presence — don't stay silent",
    "Advocate at the local level: city council, school board, zoning decisions",
    "Build genuine relationships across race, class, and culture",
  ]},
];

type Tab = "foundations" | "tensions" | "voices" | "action" | "videos";

export default function JusticePage() {
  const [tab, setTab] = useState<Tab>("foundations");
  const [selectedVoice, setSelectedVoice] = useState("mlk");

  const voice = VOICES.find(v => v.id === selectedVoice)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Justice & the Gospel</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Justice is not a political import into Christianity — it is native to the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whole world.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "foundations" as const, label: "Biblical Foundation", icon: "📖" },
            { id: "tensions" as const, label: "Key Tensions", icon: "⚖️" },
            { id: "voices" as const, label: "Key Voices", icon: "🗣️" },
            { id: "action" as const, label: "How to Act", icon: "✊" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "foundations" && (
          <div>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{f.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{f.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "tensions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Justice work is deeply contested in the church — not because Christians don't care, but because they care about competing goods. Here are the most common tensions and how to think through them faithfully.
              </p>
            </div>
            {TENSIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>"{t.tension}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{t.answer}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {VOICES.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedVoice === v.id ? `${v.color}18` : CARD, border: `1px solid ${selectedVoice === v.id ? v.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedVoice === v.id ? v.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.work}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${voice.color}40`, borderRadius: 12, padding: 24 }}>
              <h2 style={{ color: voice.color, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{voice.name}</h2>
              <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{voice.bio}</div>
              <blockquote style={{ borderLeft: `3px solid ${voice.color}`, paddingLeft: 16, marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>"{voice.quote}"</p>
              </blockquote>
              <div style={{ background: `${voice.color}08`, border: `1px solid ${voice.color}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: voice.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "action" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The gap between "caring about justice" and "acting for justice" is large. Start with one concrete step in each category. Sustained action across years makes more difference than intense moments of activism.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {ACTION_STEPS.map(cat => (
                <div key={cat.category} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{cat.icon}</span>
                    <h3 style={{ color: cat.color, fontWeight: 800, fontSize: 16, margin: 0 }}>{cat.category}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {cat.steps.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: cat.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{s}</span>
                      </div>
                    ))}
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
                  { videoId: "FTZ3GfL9yQM", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller unpacks how Jesus's kingdom reverses the world's power structures, placing the poor, marginalized, and meek at the center of God's concern." },
                  { videoId: "0bafE4k4YXU", title: "The Essential Elements of the Great Commission", channel: "Paul Washer / HeartCry Missionary Society", description: "Paul Washer explains the inseparable connection between gospel proclamation and genuine compassion for those suffering — both word and deed." },
                  { videoId: "GKYDGK2XDNw", title: "Missions Week Sermon 1", channel: "Paul Washer", description: "Paul Washer preaches on the theological foundations of caring for the least, the lost, and the last as the authentic fruit of genuine Christian faith." },
                  { videoId: "KA4pSZxrwRs", title: "The Joy That Produces Radical Obedience", channel: "Desiring God / John Piper", description: "John Piper connects the joy of the gospel to radical generosity and service to others — the motivational foundation for sustained justice work." },
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
    </div>
  );
}
