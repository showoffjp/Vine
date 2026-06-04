"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const METHODS = [
  {
    name: "The Bridge Illustration",
    org: "Billy Graham Evangelistic Association",
    color: GREEN,
    time: "5-10 min",
    best_for: "Visual learners; initial conversations",
    summary: "The most widely used visual evangelism tool. Draw two cliffs representing God and humanity, separated by a chasm (sin and death). Humanity's attempts to bridge the gap (good works, religion, self-improvement) fail. Only the cross of Christ spans the distance. It moves from the problem (sin separates) to the solution (the cross) to the response (faith). Simple enough for anyone to share with just a napkin or blank paper.",
    steps: ["Establish common ground: 'Can I ask you something?' Start with their spiritual background.", "Describe the separation: God's holiness and our sin create an unbridgeable gap.", "Show the failed bridges: our attempts to reach God — good works, religion, self-effort", "Draw the cross as the only bridge, grounded in Christ's death and resurrection", "Invite a response: 'Is there any reason you wouldn't want to cross that bridge today?'"],
    verse: "Romans 6:23; Isaiah 59:2",
    url: "https://billygraham.org/story/share-the-gospel-clearly-using-the-bridge-illustration/",
    initials: "BRI",
  },
  {
    name: "Two Ways to Live",
    org: "Matthias Media (Australia)",
    color: PURPLE,
    time: "10-15 min",
    best_for: "Secular Westerners; intellectual context",
    summary: "Developed by Phillip Jensen and Tony Payne in Australia, Two Ways to Live presents the gospel as a six-frame story: (1) God is the good creator king; (2) Humans rebel and make themselves the ruler of their own lives; (3) God judges rebels with death; (4) God, in love, sent his Son Jesus; (5) Jesus died and rose to defeat death and judgment; (6) Two ways to live: submit to Jesus as king, or remain in rebellion. Widely used in university and campus evangelism contexts.",
    steps: ["God is the loving creator and rightful king of the world", "We have rejected God's rule and live as our own kings", "God's just response to rebellion is judgment and death", "God sent Jesus — fully God, fully human — to take our judgment", "Jesus rose from death, defeating sin's power and penalty", "Two ways: submit to King Jesus or remain in rebellion"],
    verse: "Romans 1:18-21; 5:8; 10:9-10",
    url: "https://www.matthiasmedia.com/two-ways-to-live",
    initials: "TWL",
  },
  {
    name: "The Roman Road",
    org: "Traditional / Baptist",
    color: "#F59E0B",
    time: "5-10 min",
    best_for: "Scripture-based presentation; those with some church background",
    summary: "A classic scriptural presentation using Paul's letter to the Romans. Romans 3:23 (all have sinned), Romans 6:23 (sin's wages is death, but God's gift is eternal life), Romans 5:8 (Christ died for us while we were sinners), Romans 10:9-10 (confess with mouth, believe in heart), Romans 10:13 (everyone who calls on the Lord will be saved). Six verses, a complete gospel, and easy to memorize. Dozens of people know the Roman Road by heart and have used it in unexpected conversations.",
    steps: ["Romans 3:23: We are all sinners and fall short of God's glory", "Romans 6:23a: The wages of sin is death — spiritual separation from God", "Romans 6:23b: But the gift of God is eternal life through Christ Jesus", "Romans 5:8: Christ died for us while we were still sinners", "Romans 10:9-10: If you confess and believe, you will be saved", "Romans 10:13: Everyone who calls on the Lord's name will be saved"],
    verse: "Romans 3:23; 6:23; 5:8; 10:9-13",
    url: "https://www.namb.net/evangelism/roman-road/",
    initials: "RR",
  },
  {
    name: "Share Your Story (Testimony)",
    org: "General / Evangelism Explosion",
    color: "#3B82F6",
    time: "3-5 min",
    best_for: "Natural conversations; building on relationship",
    summary: "Paul's defense before Agrippa in Acts 26 follows a three-part structure that remains effective for personal testimonies: (1) Before — what your life was like before Christ (without sin-glorifying detail); (2) Encounter — how you came to faith (the specific moment or season); (3) After — how your life has changed. Personal testimony cannot be argued with — it is a first-person account. The key is keeping it specific, brief, and Christ-centered rather than self-focused.",
    steps: ["Before: What were you searching for, or what was your life like without Christ? (Be honest without glorifying sin)", "Encounter: How did you hear the gospel? What convinced you? What did you do?", "After: How has your life genuinely changed? Be specific, not generic", "Transition: 'Has anything like this ever happened to you?' or 'What do you think about what Jesus did?'", "Keep it to 3 minutes — long enough to be meaningful, short enough not to lose them"],
    verse: "Acts 26:1-23; 1 Peter 3:15",
    url: "https://www.evangelismexplosion.org/",
    initials: "STY",
  },
  {
    name: "Questioning Evangelism",
    org: "Randy Newman / Campus Crusade",
    color: "#EC4899",
    time: "Ongoing",
    best_for: "Skeptics, intellectuals, postmodern context",
    summary: "Developed by Randy Newman based on Jesus's own evangelistic method — Jesus answered questions with questions more often than direct statements. Rather than presenting a pre-packaged gospel, questioning evangelism uses good questions to draw out what a person actually believes, identify the real objections, and let the gospel address those specifically. Questions like: 'What do you think happens when we die?' 'What would it take to convince you God exists?' 'If Christianity were true, would you want to know?' create genuine dialogue.",
    steps: ["Ask open questions about their actual beliefs: 'What do you think about God?'", "Listen without immediately correcting — understand before responding", "Ask follow-up questions that probe the implications: 'What does that mean for...?'", "Use questions to expose assumptions: 'Where does morality come from, in your view?'", "Share the gospel in response to what they've revealed, not as a canned presentation"],
    verse: "Luke 10:26; Mark 12:34; John 4:7-9",
    url: "https://www.navpress.com/questioning-evangelism",
    initials: "QUE",
  },
  {
    name: "The 3 Circles",
    org: "North American Mission Board (NAMB)",
    color: "#10B981",
    time: "5 min",
    best_for: "Visual; natural conversations about brokenness",
    summary: "Developed by Jimmy Scroggins and NAMB, the 3 Circles uses three interlocking circles to present the gospel starting with where people actually are — brokenness. Circle 1: God's perfect design. Circle 2: Brokenness — we are broken and live in a broken world. The arrows of human attempts to recover (circle 3) keep cycling back to brokenness. The gospel: Jesus rescues from brokenness, restores to God's design, and sends us to show others the way out. Starting with brokenness rather than sin sometimes opens conversations that the direct sin-law presentation doesn't.",
    steps: ["Draw a circle labeled 'God's Design' — perfect, purposeful, good", "Draw an arrow showing 'Brokenness' — sin broke God's design", "Draw attempts to recover (money, relationships, achievement) — all fail", "Show Jesus stepping into brokenness to rescue and restore", "Draw arrows back toward God's design through Christ", "Invite: 'Would you like to start following Jesus?'"],
    verse: "Romans 8:20-21; 2 Corinthians 5:17",
    url: "https://www.namb.net/evangelism/3-circles/",
    initials: "3CL",
  },
];

const OBJECTIONS = [
  { obj: "I'm a good person — I don't need saving", response: "That's a question worth taking seriously. What standard are you measuring yourself against? If the standard is God's holiness — the demand to love him completely and your neighbor as yourself all the time — how are you doing? The point isn't that you're terrible. It's that none of us meets the real standard. That's exactly who Jesus died for." },
  { obj: "There are so many religions — how do you know yours is right?", response: "That's a fair question. I don't follow Christianity because I was born into it (or do you?), but because I find its central claim — that Jesus of Nazareth rose from the dead — historically defensible. That claim is either true or false. If it's true, it changes everything. What would it take for you to investigate that question seriously?" },
  { obj: "The church has done so much harm", response: "It has — and I'm not going to defend everything done in the name of Christianity. But here's what I notice: the people calling out the church's failure are usually appealing to ideals like justice, truth, and human dignity. Those ideals didn't come from nowhere — they have a history, and much of it runs through the Christian tradition. Judge the church by Jesus, not by its worst representatives." },
  { obj: "Science has disproved God", response: "Science describes how natural processes work. It's not designed to answer whether there's anything beyond nature. Many of the scientists who built modern science — Newton, Pascal, Mendel, Collins — believed in God. The question of whether something beyond nature exists isn't a science question; it's a philosophy question. What scientific discovery specifically changed your mind?" },
  { obj: "I tried Christianity and it didn't work", response: "I'm sorry to hear that. Can I ask what you mean by 'didn't work'? If Christianity is true, it doesn't always feel good or produce the outcomes we want — it promises resurrection on the other side of suffering, not the avoidance of it. But what happened? I'd like to understand rather than defend." },
  { obj: "I can't believe in a God who sends people to hell", response: "That's a real theological difficulty and I don't want to dismiss it. Can I push back gently on one thing? If God is real, what he actually is like isn't up to our preferences — any more than gravity is. The question isn't 'What kind of God am I comfortable with?' but 'What kind of God actually exists?' Jesus talked about hell more than anyone else in the NT — and also wept over Jerusalem. The person most serious about judgment was also the one who came to take it." },
];

const VOICES_GOSP = [
  { id: "schaeffer", name: "Francis Schaeffer", era: "1912-1984", context: "L'Abri Fellowship; The God Who Is There (1968); Escape from Reason (1968)", bio: "Schaeffer created L'Abri (French: 'the shelter') in the Swiss Alps as a place where intellectually honest seekers could come with their hardest questions and receive serious engagement. His approach to evangelism was entirely different from the tract-and-decision model: he would spend hours — sometimes days — in genuine philosophical conversation before the gospel even came up. His insight was that every person operates from a worldview with internal contradictions, and the evangelist's task is to press on those contradictions until the need for something more coherent becomes apparent. He showed how secular thought systems eventually 'push below the line of despair' — failing on their own terms.", quote: "We must meet people where they really are, not where we think they should be, and enter their thought world as the first step in the conversation.", contribution: "Established intellectual hospitality as an evangelistic discipline. L'Abri demonstrated that taking people's questions seriously — rather than deflecting them with easy answers — is itself a form of witness, and that the gosple can withstand rigorous intellectual scrutiny." },
  { id: "pippert", name: "Rebecca Manley Pippert", era: "b. 1945", context: "Out of the Saltshaker (1979); IVF staff evangelist; speaker and trainer", bio: "Pippert's Out of the Saltshaker is the book that changed how a generation of campus ministry leaders thought about evangelism. Her core argument: Jesus did not run a tract distribution operation — he entered people's lives, ate with sinners, asked questions, told stories, and loved people into the kingdom. Evangelism that doesn't look like Jesus is not Christian evangelism. Her model is relational, curious, and incarnational — showing up in people's actual lives rather than presenting a scripted message to strangers. Her personal stories of evangelism are disarmingly ordinary and deeply convicting.", quote: "Evangelism is not a production. It is a lifestyle. It's being who you are and letting that point to who Jesus is.", contribution: "Recovered the relational and incarnational model of Jesus's own evangelism for campus and lay ministry. Out of the Saltshaker shifted evangelism from a program Christians do to a posture Christians inhabit — and made it accessible to introverts who had been told they couldn't evangelize." },
  { id: "keller-g", name: "Tim Keller", era: "1950-2023", context: "The Reason for God (2008); Center Church (2012); Redeemer Presbyterian, New York City", bio: "Keller spent decades doing evangelism in Manhattan — one of the most secularly sophisticated cities in America — and his approach was refined in that crucible. The Reason for God answered the intellectual objections of educated secular New Yorkers with historical, philosophical, and cultural arguments of equivalent sophistication. His evangelistic model: begin with the questioner's own framework, find what they already believe that Christianity can fulfill or explain better, and show how the gospel is the most rational account of what they already know. He also insisted that the gathered worship of the church — properly done — is itself an evangelistic event.", quote: "The gospel is not a set of information to be passed on. It is a story of which we are all a part — and invitation to join.", contribution: "Made intellectual apologetic evangelism normative in urban church planting. His model — taking secular objections seriously, engaging culture without capitulating to it — shaped thousands of church planters in secular cities worldwide." },
  { id: "green", name: "Michael Green", era: "1930-2019", context: "Evangelism in the Early Church (1970); Evangelism Through the Local Church (1990)", bio: "Green was the premier evangelical scholar of early Christian evangelism — his Evangelism in the Early Church traced how the first Christians actually spread the gospel and identified the patterns that made it spread so rapidly. His conclusion: the first Christians evangelized primarily through personal relationships, hospitality, and the quality of their common life — not through professional preachers or public crusades. His later practical books applied this scholarship to contemporary church practice, arguing that every Christian is called to be an evangelist in their network of existing relationships.", quote: "The early church grew not because Christians converted strangers but because they shared the gospel with the people they already knew and loved.", contribution: "Established the historical and biblical case for relational evangelism as the primary New Testament model. His scholarship gave practical evangelism training a historical foundation it had often lacked." },
  { id: "newman", name: "Randy Newman", era: "b. 1956", context: "Questioning Evangelism (2004); Bringing the Gospel Home (2011); Campus Crusade staff", bio: "Newman developed the questioning evangelism model from his observation that Jesus used questions far more than declarations in his evangelistic encounters. In a postmodern context where truth claims are immediately resisted, asking good questions is often more effective than making good arguments. His model: ask questions that help people discover their own assumptions, find the internal contradictions in their current worldview, and become curious about the gospel on their own terms. This approach also treats the other person as an intelligent adult rather than a conversion target — which is itself a form of respect.", quote: "Asking questions is often more powerful than making statements. Questions invite people into discovery rather than putting them on the defensive.", contribution: "Made the questioning method of evangelism practically accessible to ordinary Christians, not just trained apologists. Questioning Evangelism gave a generation of campus workers a conversational approach they could actually use in real relationships." },
];

export default function GospelConversationsPage() {
  const [activeTab, setActiveTab] = usePersistedState<"methods" | "voices" | "objections" | "tips" | "videos">("vine_gospel-conversations_tab", "methods");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_gospel-conversations_voice", "schaeffer");
  const voiceItem = VOICES_GOSP.find(v => v.id === selectedVoice)!;
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const method = METHODS.find(m => m.name === selectedMethod);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💬</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Gospel Conversations</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Sharing your faith naturally and honestly — the methods, the common objections, and the practical tips that make evangelism feel like love rather than a sales pitch.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "methods" as const, label: "Methods", icon: "📋" },
            { id: "voices" as const, label: "Voices", icon: "💬" },
            { id: "objections" as const, label: "Objections", icon: "❓" },
            { id: "tips" as const, label: "Practical Tips", icon: "💡" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "methods" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {METHODS.map(m => (
                <button key={m.name} onClick={() => setSelectedMethod(selectedMethod === m.name ? null : m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedMethod === m.name ? m.color : BORDER}`, background: selectedMethod === m.name ? `${m.color}20` : "transparent", color: selectedMethod === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {m.name}
                </button>
              ))}
            </div>

            {method ? (
              <div style={{ background: CARD, border: `1px solid ${method.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <h2 style={{ color: method.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{method.name}</h2>
                    <div style={{ color: MUTED, fontSize: 12 }}>{method.org}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span style={{ background: `${method.color}15`, color: method.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{method.time}</span>
                  </div>
                </div>

                <div style={{ background: `${method.color}08`, border: `1px solid ${method.color}20`, borderRadius: 8, padding: 10, marginBottom: 14 }}>
                  <div style={{ color: method.color, fontWeight: 700, fontSize: 10, marginBottom: 3 }}>BEST FOR</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{method.best_for}</p>
                </div>

                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{method.summary}</p>

                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14, marginBottom: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>HOW TO USE IT</div>
                  <ol style={{ margin: 0, padding: "0 0 0 16px" }}>
                    {method.steps.map((s, i) => (
                      <li key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 4 }}>{s}</li>
                    ))}
                  </ol>
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}><VerseRef reference={method.verse} /></span>
                  <a href={method.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: `${method.color}15`, border: `1px solid ${method.color}30`, color: method.color, padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                    🌐 Learn More
                  </a>
                </div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                {METHODS.map((m, i) => (
                  <button key={i} onClick={() => setSelectedMethod(m.name)}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, background: `${m.color}20`, border: `1px solid ${m.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                        {m.initials}
                      </div>
                      <div>
                        <div style={{ color: m.color, fontWeight: 800, fontSize: 14 }}>{m.name}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{m.time} · {m.best_for.split(";")[0]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {VOICES_GOSP.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Evangelism</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "objections" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the objections you will actually hear. The goal is not to win an argument but to show that the objection has been heard and that there is a thoughtful Christian response — opening the door to continued conversation.
              </p>
            </div>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === o.obj ? null : o.obj)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === o.obj ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>"{o.obj}"</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === o.obj ? "−" : "+"}</span>
                </button>
                {expanded === o.obj && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>ONE RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{o.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "tips" && (
          <div>
            {[
              { title: "Pray Before the Conversation", desc: "Ask for the Holy Spirit's leading before you speak. Not for a technique, but for love — the genuine desire for the other person's salvation. Evangelism that flows from prayer is different in quality from evangelism that flows from duty. Pray specifically: 'Give me an opportunity today. Give me words when I get there.'" },
              { title: "Build the Relationship First", desc: "Jesus did evangelism from relationship. He ate with Zacchaeus before saying anything. He asked the Samaritan woman for water before offering living water. Trust is the condition for a real conversation. You don't need to be close friends first, but genuine interest in the person as a person — not merely as a conversion opportunity — changes everything." },
              { title: "Listen More Than You Speak", desc: "Most Christians talk too much in evangelistic conversations. Asking a good question and then actually listening — without planning your response while they talk — communicates more respect than any polished presentation. The other person can tell when you're not listening. It closes the door." },
              { title: "Be Honest About Doubts and Difficulty", desc: "Authentic Christianity includes honest acknowledgment of what's hard, confusing, or unsettled. Presenting a faith that has no tension or difficulty is not only dishonest — it's easily dismissed. Saying 'I don't know the answer to that, and it bothers me too' is more persuasive than pretending every question has a tidy resolution." },
              { title: "Know When to Stop", desc: "Not every conversation needs to reach a conclusion. Planting a seed is a valid outcome. If someone says 'I need to think about that,' affirm the honesty and let them. Jesus let the rich young ruler walk away (Mark 10:22). Forcing a decision that isn't real does more harm than not forcing one." },
              { title: "Give People Good Resources", desc: "The Reason for God (Keller), Mere Christianity (Lewis), The Case for Christ (Strobel), or Searching Issues (Nicky Gumbel) are excellent to offer skeptics. Many people will read something they won't say aloud. A book given at the right moment in a conversation has brought more people to faith than most realize." },
            ].map((tip, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{tip.title}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "hLD4kCkme2Q", title: "The Gospel-Centered Church: Evangelism", channel: "Tim Keller", description: "Keller lays out what gospel-centered evangelism looks like — not merely technique but a posture of love for people and confidence in the power of the gospel." },
                  { videoId: "DHQBoLo31Ns", title: "Evangelism in the 21st Century", channel: "Tim Keller", description: "How to contextualize the gospel for a secular, post-Christian world without compromising it — Keller's framework for reaching people who reject traditional religious categories." },
                  { videoId: "f_JDoMWZaRk", title: "Messengers", channel: "Timothy Keller", description: "Keller preaches on the disciple's calling as Christ's messenger — what it means to be sent, to speak, and to bear the news that changes everything." },
                  { videoId: "zNve3Hexh28", title: "How to Bring the Gospel to Post-Christian America", channel: "Tim Keller", description: "Practical guidance for sharing Christ in an increasingly skeptical culture — how the gospel addresses the real questions people are actually asking." },
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
