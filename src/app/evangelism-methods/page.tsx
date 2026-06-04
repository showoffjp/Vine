"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "methods" | "evangelists" | "essentials" | "objections" | "videos";

const EVANGELISTS = [
  {
    id: "paul",
    name: "Paul of Tarsus",
    era: "c. 5-67 AD",
    context: "Apostle; planted churches across the Roman Empire",
    bio: "Paul is the paradigm of Christian evangelism. His method was versatile and context-sensitive: in synagogues he argued from Scripture (Acts 17:2-3), in Athens he engaged Greek philosophy and natural theology (Acts 17:22-31), in Lystra he addressed pagan polytheism from creation (Acts 14:15-17). He was not a one-method evangelist. He adapted his point of entry — not his message — to each audience. His stated goal: 'I have become all things to all people so that by all possible means I might save some' (1 Cor 9:22).",
    quote: "I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.",
    contribution: "Paul gave the church its foundational model of cross-cultural, context-sensitive evangelism. He also gave the clearest summary of gospel content (1 Cor 15:1-8) and the most rigorous theology of evangelism (Romans 10:14-17). His understanding that faith comes by hearing, and hearing by the word of Christ, grounds all evangelism in proclamation rather than merely lifestyle witness.",
  },
  {
    id: "graham",
    name: "Billy Graham",
    era: "1918-2018",
    context: "American evangelist; the Billy Graham Evangelistic Association",
    bio: "Graham preached the gospel to more people than any individual in human history — an estimated 215 million in person across 185 countries. His Crusades combined mass-media communication, careful organizational preparation, local church partnerships, and a simple, urgent, consistent gospel message. He preached the same core content for 60 years: you are a sinner, Christ died for you, repent and believe. His longevity and consistency were as remarkable as his reach. He counseled every US President from Truman to Obama.",
    quote: "God has given us two hands — one to receive with and the other to give with. We are not cisterns made for hoarding; we are channels made for sharing.",
    contribution: "Graham demonstrated that mass evangelism could be conducted with integrity — he was meticulous about financial accountability, refused to separate from racially segregated audiences, and always channeled converts to local churches. His organizational model for crusade evangelism (community preparation, local church follow-up, decision counseling) became the template for large-scale evangelism worldwide.",
  },
  {
    id: "stott",
    name: "John Stott",
    era: "1921-2011",
    context: "Anglican rector; author of Basic Christianity and The Cross of Christ",
    bio: "Stott was the foremost evangelical theologian of evangelism in the 20th century. His 'Basic Christianity' (1958) became one of the most widely-used evangelism texts in the English-speaking world. His 'Christian Mission in the Modern World' (1975) resolved the decade-long evangelical debate about the relationship between evangelism and social action: both flow from the gospel, neither replaces the other. Stott insisted that genuine evangelism includes the full gospel — including its social implications — while refusing to collapse evangelism into social work.",
    quote: "Mission is the total task God has given the church for the world: evangelism and social concern are equally components of it, like the two wings of a bird.",
    contribution: "Stott helped the evangelical world hold together what it had falsely separated — the proclamation of the gospel and the pursuit of justice. He gave intellectual credibility to a holistic evangelism that neither reduced the gospel to social improvement nor separated it from social concern. 'Basic Christianity' remains one of the most effective evangelism tools ever written because it presents the gospel with intellectual honesty and relational warmth simultaneously.",
  },
  {
    id: "pippert",
    name: "Rebecca Manley Pippert",
    era: "1945-present",
    context: "Author and evangelist; Out of the Saltshaker",
    bio: "Pippert's 'Out of the Saltshaker and into the World' (1979) redefined how evangelical Christians thought about evangelism for a generation. Her central argument: evangelism is not a program, a technique, or a special event. It is the natural overflow of a life genuinely shaped by the gospel — the way Christians live, love, ask questions, and talk about God in ordinary conversations. Her relational model of evangelism gave permission to millions of ordinary Christians who were terrified of confrontational methods to share their faith in ways that felt authentic.",
    quote: "We need to see evangelism not as a task but as a way of life — the natural overflow of a life that has encountered the living God.",
    contribution: "Pippert shifted the evangelical paradigm from program-based evangelism to lifestyle-integrated evangelism. Her Jesus-centered approach — look at how Jesus actually engaged people: with curiosity, questions, and genuine relationship — gave ordinary Christians a model they could follow without feeling like salespeople. She also made the critical point that the Holy Spirit, not human technique, is the agent of conversion — freeing evangelists from the burden of having to manufacture results.",
  },
  {
    id: "schaeffer",
    name: "Francis Schaeffer",
    era: "1912-1984",
    context: "Philosopher-theologian; L'Abri Fellowship, Switzerland",
    bio: "Schaeffer built L'Abri in the Swiss Alps as a community where intellectually serious seekers could come and have their genuine questions taken seriously. His approach to evangelism was apologetic and dialogical: he would spend weeks and months engaging a person's actual worldview, exposing its internal contradictions, and showing how Christianity addressed what secular philosophies could not. His books ('The God Who is There,' 'Escape from Reason') documented how to engage post-Christian culture with rigorous intellectual honesty.",
    quote: "There is no place for a safe, flabby faith. Truth demands confrontation — lovingly, but still confrontation. A co-existence that does not confront is not love — it is, in the end, a kind of contempt.",
    contribution: "Schaeffer pioneered the model of presuppositional evangelism for secular intellectuals — taking their worldview seriously enough to engage it philosophically, then showing how it inevitably collapses under its own weight. His insistence on intellectual honesty in evangelism (never giving easy answers to hard questions) and his hospitality at L'Abri (welcoming the doubter and the skeptic rather than fearing them) created a template for engaging post-Christian culture that is more relevant now than when he wrote it.",
  },
];

const OBJECTIONS = [
  {
    objection: "All religions lead to God.",
    response: "This sounds tolerant, but it actually contradicts itself — different religions make mutually exclusive claims. If all paths lead to the same place, then Jesus was wrong to say 'I am the way, the truth, and the life' (John 14:6). The question is not which religion feels most tolerant, but which claims are actually true. We can be respectful and still disagree with specific claims.",
  },
  {
    objection: "Christians are hypocrites.",
    response: "Yes — some are. So are atheists, Buddhists, and everyone else. Hypocrisy is a human problem, not a uniquely Christian one. But more importantly: the existence of hypocrites doesn't disprove Christianity — it actually confirms it. Christianity teaches that all humans are broken and in need of grace. The hypocrisy of Christians is evidence for the doctrine of human sin, not against the gospel. The question to ask is: 'What do you make of Jesus himself?'",
  },
  {
    objection: "The Bible has been changed and mistranslated so many times.",
    response: "This is historically inaccurate. We have more than 5,800 Greek manuscripts of the New Testament — more than any ancient document. Textual scholars can compare them to identify any variations, which are minor and well-documented. The manuscripts we have today match the manuscripts from the earliest centuries remarkably well. The Bible hasn't been 'changed through translations' — each translation works from original language manuscripts, not from previous translations.",
  },
  {
    objection: "God wouldn't send good people to hell.",
    response: "This assumes that good people deserve heaven — but heaven is not the reward for being good enough; it is a relationship with a holy God. The question is not 'Am I good enough?' but 'Am I reconciled to God?' No one is naturally reconciled to God (Romans 3:23). The good news is that God sent his Son so that reconciliation is possible for anyone who receives it. The alternative to receiving it is simply remaining as we are — separated from God.",
  },
  {
    objection: "I'm not ready to give up my lifestyle.",
    response: "This is the most honest objection — and it deserves an honest response. Christianity does require change. Jesus says, 'Take up your cross and follow me' — that is genuinely costly. But the question is not 'Is Christianity easy?' but 'Is it true?' If Jesus rose from the dead, the question of cost is secondary to the question of reality. And what most people discover is that the things they feared losing were less satisfying than what they find.",
  },
  {
    objection: "I believe in science, not religion.",
    response: "Science and Christianity are not competitors — they address different questions. Science asks 'How does the physical world operate?' Christianity asks 'Why is there something rather than nothing? What does it mean? What went wrong and how can it be fixed?' Many of the founders of modern science (Galileo, Newton, Faraday, Mendel) were Christians. The question is not science vs. religion but 'What evidence exists for or against the resurrection?' That is a historical question, not a scientific one.",
  },
];


const METHODS = [
  {
    name: "Friendship Evangelism",
    color: "#3a7d56",
    time: "Ongoing",
    best_for: "People who build deep relationships naturally",
    desc: "The most sustainable and historically fruitful method: sharing the gospel as a natural outgrowth of genuine friendship. Jesus ate with tax collectors and sinners; he was accused of being their friend. The authentic relationship creates trust, creates opportunity for honest conversation, and means the person has already seen the gospel lived before hearing it stated.",
    how: "Be genuinely present to non-Christians in your relational world. Pray for specific people by name. Ask good questions and listen well. Share your faith naturally in the context of real friendship. Invite people into your life — meals, events, church — before asking for a decision.",
    caution: "The main failure mode is becoming so focused on conversion that the friendship becomes a project rather than a genuine relationship — which non-Christians detect immediately.",
  },
  {
    name: "Story-Based (Testimony)",
    color: "#F59E0B",
    time: "5-10 minutes",
    best_for: "Introverts; those with dramatic conversion stories; relational contexts",
    desc: "Sharing the story of your own encounter with Christ — before, turning point, after. Testimony is disarming because it cannot be argued with: this is simply what happened. Paul used his testimony three times in Acts. The power is in the specificity and honesty of the story, not in its drama. An undramatic life genuinely changed by God is as compelling as a prodigal's return.",
    how: "Structure: life before Christ (keep it honest, not lurid), what happened (the encounter or process), life after (what has changed and is changing). Practice a 3-minute version. Keep it personal and concrete, not theological and generic.",
    caution: "Resist the temptation to embellish or to make the before/after contrast unrealistically sharp. Honest simplicity is more compelling than religious theater.",
  },
  {
    name: "Conversational (Questions)",
    color: "#8B5CF6",
    time: "Variable",
    best_for: "Intellectually curious people; those with objections",
    desc: "Using good questions to create a conversation about faith rather than delivering a monologue. Jesus's primary evangelistic method was asking questions: 'Who do people say I am?' 'What do you want me to do for you?' Questions honor the other person's intelligence, reveal what they actually believe, and move the conversation toward the right issues rather than the one you assumed they had.",
    how: "Ask: What do you think happens after death? What do you think about Jesus? Have you ever seriously examined the evidence for the resurrection? What would it take for you to consider Christianity? Listen longer than feels comfortable. Answer questions with questions before giving answers.",
    caution: "Questions can become evasive — a way to talk about Christianity without ever clearly presenting it. Questions should eventually lead to a clear presentation and invitation.",
  },
  {
    name: "Gospel Presentation (Bridge/Romans Road)",
    color: "#EF4444",
    time: "10-20 minutes",
    best_for: "Direct conversations with seekers; people who want clear information",
    desc: "A structured presentation of the gospel message using a progression of Bible verses. Common frameworks: The Bridge Diagram (God-Sin-Christ-Faith), Romans Road (3:23, 6:23, 5:8, 10:9-10), or the Two Ways to Live. Structured presentations are clear, teachable, and effective in contexts where the person is asking 'what must I do to be saved?'",
    how: "Know at least one framework well enough to present it conversationally. Avoid reading a script — use the structure as a skeleton, not a script. Invite a response at the end: 'Does this make sense to you? Where are you on this?'",
    caution: "Formulaic presentations can feel impersonal. Use the structure to serve the conversation, not replace it. Adapt language to the person, not the card.",
  },
  {
    name: "Digital / Online",
    color: "#3B82F6",
    time: "Ongoing",
    best_for: "Those with digital skills; people with large online audiences",
    desc: "Using social media, podcasting, YouTube, blogs, or digital communities to share the gospel at scale. The diaspora is online — including the unchurched, the spiritually curious, and the skeptical. Digital evangelism can reach people who would never enter a church building and can plant seeds across geography in ways impossible before.",
    how: "Create honest, high-quality content that addresses real questions (not just church-insider content). Engage comments and DMs relationally. Be willing to have the hard conversations. Use digital reach to direct people toward local community and in-person faith.",
    caution: "Digital reach is wide but shallow. Online proclamation almost always needs in-person discipleship to bear lasting fruit. Do not mistake viral reach for spiritual transformation.",
  },
  {
    name: "Open-Air / Street",
    color: "#DC2626",
    time: "Short encounters",
    best_for: "Bold personalities; urban settings with pedestrian traffic",
    desc: "Public proclamation of the gospel in open spaces — markets, university campuses, city centers. This was the apostles' primary method: Peter at Pentecost, Paul at the Areopagus, Paul in the synagogues. Open-air evangelism reaches people who are not in any relationship network that would bring them to a gospel conversation and creates opportunities for crowd-level proclamation.",
    how: "Use good questions to engage first rather than launching immediately into proclamation. Know the gospel content thoroughly. Be prepared for objections. Team up with others for prayer and follow-up. Connect interested people to a local church.",
    caution: "Confrontational or condemnatory tone is counterproductive and misrepresents the gospel. The goal is invitation, not argument. Not every personality or context is suited for this.",
  },
];

const ESSENTIALS = [
  { title: "Know the Gospel Content", desc: "Every method requires knowing what you're communicating. The core: everyone is separated from God by sin; Christ died and rose to provide the way back; repentance and faith unite us to him. Know this well enough to state it in 2 minutes or 20 minutes depending on context.", icon: "📖" },
  { title: "Pray for Specific People", desc: "Evangelism begins in prayer. Name people by name before God. Pray for open hearts, for opportunities, for your own courage. The work of bringing a person to faith is God's — prayer acknowledges that and asks for it.", icon: "🙏" },
  { title: "Listen More Than You Speak", desc: "Find out what the person actually believes and what their actual objections are before presenting anything. Most evangelistic failures are failures of listening. The answer to an unasked question is not effective.", icon: "👂" },
  { title: "Invite a Response", desc: "Every gospel presentation should end with an invitation: 'Would you like to receive this for yourself?' or 'Is there any reason you wouldn't commit to following Jesus today?' Many evangelists present but never ask. The invitation is not manipulative; it is loving — it takes the person seriously enough to ask for a real answer.", icon: "🤝" },
  { title: "Be Willing to Receive Rejection", desc: "Jesus was rejected. Paul was rejected. Every evangelist is rejected. Rejection of the gospel is not rejection of you — it is rejection of Christ's claim, which Christ himself is capable of handling. Fear of rejection is the single greatest obstacle to evangelism in the Western church.", icon: "💪" },
  { title: "Point to Community", desc: "Individual evangelism without community discipleship produces spiritual orphans. Every person who responds to the gospel needs to be connected to a community of believers. Your job is not just to bring someone to a decision but to bring them to a community.", icon: "⛪" },
];

export default function EvangelismMethodsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_evangelism-methods_tab", "methods");
  const [selected, setSelected] = useState("Friendship Evangelism");
  const [selectedEvangelist, setSelectedEvangelist] = useState("paul");
  const evangelist = EVANGELISTS.find(e => e.id === selectedEvangelist)!;

  const method = METHODS.find(m => m.name === selected)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📢</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Evangelism Methods</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Every Christian is called to share their faith. There is no single right method — there are many legitimate approaches, each suited to different people, personalities, and contexts.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "methods" as const, label: "Methods", icon: "📋" },
            { id: "evangelists" as const, label: "Evangelists", icon: "🔥" },
            { id: "essentials" as const, label: "The Essentials", icon: "🔑" },
            { id: "objections" as const, label: "Objections", icon: "❓" },
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
                <button key={m.name} onClick={() => setSelected(m.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === m.name ? m.color : BORDER}`, background: selected === m.name ? `${m.color}15` : "transparent", color: selected === m.name ? m.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {m.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${method.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h2 style={{ color: method.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{method.name}</h2>
                <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: 12 }}>
                  <span style={{ background: BG, color: MUTED, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{method.time}</span>
                </div>
              </div>
              <div style={{ background: `${method.color}08`, border: `1px solid ${method.color}20`, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: method.color, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{method.best_for}</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{method.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>HOW TO DO IT</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{method.how}</p>
                </div>
                <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CAUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{method.caution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "evangelists" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {EVANGELISTS.map(e => (
                <button key={e.id} onClick={() => setSelectedEvangelist(e.id)}
                  style={{ width: "100%", background: selectedEvangelist === e.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedEvangelist === e.id ? PURPLE + "70" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedEvangelist === e.id ? PURPLE : TEXT, fontWeight: 800, fontSize: 13, marginBottom: 2 }}>{e.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{e.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{evangelist.era}</div>
                  <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{evangelist.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{evangelist.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{evangelist.bio}</p>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 10 }}>IN THEIR OWN WORDS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>&ldquo;{evangelist.quote}&rdquo;</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{evangelist.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "essentials" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These {ESSENTIALS.length} essentials apply to every evangelism method. The method varies; the core stays constant.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {ESSENTIALS.map((e, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{e.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{e.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "objections" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These are the six most common objections to Christian faith that arise in evangelistic conversations. Knowing how to respond — not to win arguments, but to remove barriers — is part of loving the people you are talking with.
              </p>
            </div>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: "#F59E0B", fontWeight: 700, fontSize: 15, marginBottom: 12, fontStyle: "italic" }}>&ldquo;{o.objection}&rdquo;</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{o.response}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Video teachings on evangelism — how to share the gospel naturally, handle objections, and lead someone toward faith in Christ.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "G4-WT4NvC14", title: "How to Share the Gospel Simply and Clearly", channel: "The Gospel Coalition", description: "A practical guide to presenting the gospel clearly in everyday conversation — the core content every evangelist needs to know and how to communicate it without jargon or pressure." },
                  { videoId: "uJseEBHjQDQ", title: "Friendship Evangelism: Sharing Faith Through Relationship", channel: "Cru", description: "How to share the gospel naturally through authentic friendship — listening first, asking good questions, and letting the gospel emerge from genuine relationship rather than scripted presentations." },
                  { videoId: "tx-wnK8isWk", title: "Answering Tough Questions About the Faith", channel: "Ravi Zacharias International Ministries", description: "Practical training for handling the hardest objections to Christianity — intellectual, moral, and experiential — with both conviction and grace." },
                  { videoId: "Hbdt_sPkluA", title: "The Fear That Keeps Christians from Evangelizing", channel: "Desiring God", description: "Why Christians don't share their faith — and what the gospel itself says about the fear of rejection. Practical encouragement for those who know they should evangelize but don't." },
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
