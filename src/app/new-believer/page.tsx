"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const FIRST_STEPS = [
  {
    n: 1,
    title: "Get Baptized",
    icon: "💧",
    color: "#3B82F6",
    why: "Baptism is the first act of public obedience for a new believer (Matthew 28:19, Acts 2:38). It is the outward declaration of an inward reality — you have died to your old life and been raised with Christ. It is not what saves you, but it is the first thing Jesus commanded after belief.",
    how: "Talk to your pastor or church about baptism. Most churches offer classes. Baptism is done in the presence of the community — it is public for a reason.",
  },
  {
    n: 2,
    title: "Join a Local Church",
    icon: "⛪",
    color: "#10B981",
    why: "The Christian life was never meant to be lived alone. The NT assumes Christians belong to local congregations — communities where they are known, cared for, taught, and held accountable. 'Don't give up meeting together, as some are in the habit of doing' (Hebrews 10:25).",
    how: "If you don't have a church, ask a Christian you respect where they attend. Try several, but commit to one. Look for expository preaching, genuine community, and the gospel at the center.",
  },
  {
    n: 3,
    title: "Start Reading the Bible",
    icon: "📖",
    color: "#F59E0B",
    why: "The Bible is how God speaks. Faith comes by hearing the word of Christ (Romans 10:17). Without regular Scripture reading, your faith will remain shallow — fed by inspiration and feeling rather than by the sustaining Word. Jesus quoted Scripture in every major challenge he faced.",
    how: "Start with the Gospel of John, then Romans. Read a chapter a day. Get a readable translation (ESV, NIV, CSB). Consider a reading plan — the Bible app has many. Don't start in Genesis if you're new — the whole Bible makes more sense after you know Jesus.",
  },
  {
    n: 4,
    title: "Develop a Prayer Life",
    icon: "🙏",
    color: PURPLE,
    why: "Prayer is the primary dialogue of the Christian life with God. Jesus assumed his followers would pray (Matthew 6:5 — 'when you pray,' not 'if you pray'). Prayer is not about technique — it is about relationship. Talk to God honestly about your life.",
    how: "Start with five minutes a day. Use the Lord's Prayer as a template (Matthew 6:9-13). Tell God what you're grateful for, what you need, and what you're sorry for. Listen as well as speak — silence matters.",
  },
  {
    n: 5,
    title: "Tell Someone",
    icon: "📢",
    color: "#EF4444",
    why: "Faith that is never spoken begins to weaken. 'Whoever acknowledges me before others, I will also acknowledge before my Father in heaven' (Matthew 10:32). Witness is not primarily a technique — it is a natural overflow of knowing someone worth knowing.",
    how: "Start with one person who already knows you. Share what changed, not a rehearsed presentation. Your story is the most powerful thing you have. You don't need to know all the answers — 'I found Jesus and everything changed' is enough to begin.",
  },
  {
    n: 6,
    title: "Find a Mentor",
    icon: "🧭",
    color: "#8B5CF6",
    why: "Every new believer benefits from someone further along the faith journey. 'Walk with the wise and become wise' (Proverbs 13:20). A mentor is not a professional — it is an older, more experienced Christian who is willing to meet with you and share their life.",
    how: "Ask your pastor for a recommendation. Look for someone whose character and faith you admire. Meet monthly. Ask questions. Be willing to be known.",
  },
];

const COMMON_QUESTIONS = [
  { q: "Do I have to be perfect now?", a: "No. Becoming a Christian does not mean instantaneous moral perfection — it means beginning a journey of transformation. Sanctification (becoming more like Christ) is a lifelong process. You will fail. The answer to failure is repentance and grace, not self-condemnation. Romans 8:1: 'There is now no condemnation for those who are in Christ Jesus.'" },
  { q: "What if I still doubt?", a: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Even the disciples doubted (Matthew 28:17). Bring your doubts to God honestly, seek community, read honest thinkers who have wrestled with your questions, and keep showing up. Faith is not a feeling — it is a commitment renewed day by day." },
  { q: "Do I have to give up all my old friends?", a: "Not necessarily. Your relationships are one of the primary contexts in which your new faith becomes visible to others. Some relationships may change naturally as your values change. Some old friends may ask you what happened and give you the opportunity to share. Be patient with people, and be patient with yourself." },
  { q: "What about my old habits and sins?", a: "Change takes time. The Holy Spirit is at work in you, but transformation is usually gradual, not instantaneous. For serious addictions or habitual sins, seek help — pastoral care, accountability relationships, and in some cases professional counseling. Don't expect willpower alone to win — you need community and the means of grace." },
  { q: "Which church / denomination is right?", a: "Start with churches that hold the essentials of the faith (the Trinity, the incarnation, salvation by grace through faith, the authority of Scripture, the resurrection). Within those bounds, there is genuine diversity. Visit, pray, and choose a church where you can grow, be known, and be equipped to serve. Don't church-shop forever — commit." },
  { q: "Am I really saved if I still feel the same?", a: "Feelings are not the measure of salvation. Salvation is based on the promise of God, not your emotional state. That said, genuine conversion typically does produce change over time — new desires, new sorrow over sin, new love for God's people. If you've genuinely trusted Christ, you are genuinely saved. Trust the promise, not the feeling." },
];

const READING_PLAN = [
  { week: "Week 1-2", book: "Gospel of John", reason: "The most theologically rich portrait of Jesus. Written 'so that you may believe' (John 20:31)." },
  { week: "Week 3-4", book: "Romans", reason: "Paul's most systematic presentation of the gospel. Everything from sin to grace to the Christian life." },
  { week: "Week 5-6", book: "Psalms (selected)", reason: "The prayer book of the Bible. Learn how to talk to God through the full range of human experience." },
  { week: "Week 7-8", book: "Luke-Acts", reason: "The story of Jesus and the birth of the early church. How the gospel spread from Jerusalem to the world." },
  { week: "Week 9-10", book: "Ephesians + Colossians", reason: "Who you are in Christ. The riches of grace and the practical life of the church." },
  { week: "Week 11-12", book: "Genesis 1-12", reason: "The beginning — creation, fall, the first promise of redemption, and the call of Abraham." },
];

const MENTORS_NB = [
  { id: "stott", name: "John Stott", era: "1921-2011", context: "Basic Christianity (1958); All Souls, Langham Place, London", bio: "Basic Christianity is the single best book for new believers — concise, warm, intellectually honest, and theologically solid. Stott worked from the premise that Christianity makes truth claims that can be examined: who Jesus claimed to be, the evidence for the resurrection, what it means to respond. He did not ask for a blind leap but a step into the light of evidence. Tens of millions of copies have been distributed worldwide; it is the most translated Christian book after the Bible in some estimates.", quote: "We need to repent of the haste and shallowness of our repentance.", contribution: "Gave the church the definitive entry-level text for Christian faith — clear, rigorous, accessible to any educated reader, and never condescending. Basic Christianity has introduced more people to the intellectual foundations of faith than any other single volume." },
  { id: "lewis", name: "C.S. Lewis", era: "1898-1963", context: "Mere Christianity (1952); Oxford and Cambridge", bio: "Mere Christianity began as BBC radio talks during World War II — Lewis explaining Christianity to a general audience with no prior Christian assumptions. His trilemma (Jesus is either liar, lunatic, or Lord) forces a decision about Jesus that prevents comfortable dismissal. His explanation of morality as evidence for God, and of the incarnation as the central fact of history, has introduced millions of skeptics to serious Christian faith. He wrote as someone who had been where his readers were.", quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.", contribution: "Made Christianity intellectually credible to the modern secular reader. His combination of honest reasoning, engaging prose, and personal testimony of adult conversion to faith has made him the single most influential apologist in the English language." },
  { id: "augustine", name: "Augustine", era: "354-430", context: "Confessions (c. 397-400); Bishop of Hippo", bio: "Confessions is the first autobiography in Western literature and the most intimate account of conversion in the Christian tradition. Augustine traces his intellectual and moral journey from childhood through Manichaeism, Neoplatonism, and finally to Christ — driven by a restless longing he could not name until he found its source. His opening line has never been surpassed: 'You have made us for yourself, O Lord, and our hearts are restless until they rest in You.' New believers find in Confessions that their longing is not unique — it is human.", quote: "You have made us for yourself, O Lord, and our hearts are restless until they rest in You.", contribution: "Gave the church a model of honest, searching faith that does not pretend to have arrived. His account of intellectual pride, sexual sin, and the slowness of conversion has resonated across 1,600 years. Confessions tells new believers that the God who waited for Augustine is the same God who waited for them." },
  { id: "willard", name: "Dallas Willard", era: "1935-2013", context: "USC philosopher; The Spirit of the Disciplines (1988); Renovation of the Heart (2002)", bio: "Willard was a USC philosophy professor who wrote the most important books on Christian spiritual formation of the 20th century. For new believers, Renovation of the Heart describes what happens after conversion: not just a change of destination but a transformation of the whole person — mind, will, body, relationships, and soul — into Christlikeness. His central metaphor: spiritual disciplines are training, not trying. You cannot will yourself to be Christlike any more than you can will yourself to run a marathon; you train for both.", quote: "Grace is not opposed to effort. It is opposed to earning. Effort is action. Earning is attitude.", contribution: "Gave new believers a framework for understanding why spiritual growth takes time and discipline — and why failure to grow is not evidence that God is absent but that the disciplines have not been engaged. His distinction between grace and effort resolved a confusion that had paralyzed many Christians." },
  { id: "paul", name: "The Apostle Paul", era: "c. 5-67 AD", context: "1 & 2 Timothy; Titus — the pastoral letters", bio: "Paul's letters to Timothy are the New Testament's explicit model of mentorship. Timothy was a young pastor dealing with false teaching, personal timidity, and the weight of leadership, and Paul writes to him with specific, warm, direct guidance: 'Don't let anyone look down on you because you are young' (1 Tim 4:12); 'Fan into flame the gift of God' (2 Tim 1:6); 'The things you have heard me say... entrust to reliable people' (2 Tim 2:2). The pastoral letters are the Bible's portrait of what it looks like to pour yourself into the next generation of faith.", quote: "Do not be ashamed of the testimony about our Lord, nor of me his prisoner, but share in suffering for the gospel by the power of God. — 2 Timothy 1:8", contribution: "Modeled intentional spiritual mentorship as a core apostolic practice. The discipleship chain Paul describes — faithful people entrusting to other faithful people — is how the gospel has spread across 2,000 years of church history." }
];

export default function NewBelieverPage() {
  const [activeTab, setActiveTab] = useState<"steps" | "mentors" | "questions" | "reading" | "videos">("steps");
  const [selectedMentor, setSelectedMentor] = useState("stott");
  const mentorItem = MENTORS_NB.find(m => m.id === selectedMentor)!;
  const [completed, setCompleted] = useState<Set<number>>(() => {
    try { const s = localStorage.getItem("vine_nb_steps"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });

  useEffect(() => { try { localStorage.setItem("vine_nb_steps", JSON.stringify([...completed])); } catch {} }, [completed]);

  const toggleStep = (n: number) => setCompleted(prev => {
    const next = new Set(prev);
    next.has(n) ? next.delete(n) : next.add(n);
    return next;
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>First Steps of Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Welcome. You have made the most important decision of your life. Here are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.
          </p>
        </div>

        {completed.size > 0 && (
          <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: 16, marginBottom: 20, textAlign: "center" }}>
            <span style={{ color: GREEN, fontWeight: 700, fontSize: 15 }}>{completed.size} of {FIRST_STEPS.length} first steps taken</span>
          </div>
        )}

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "steps" as const, label: "First Steps", icon: "🛠️" },
            { id: "mentors" as const, label: "Mentors", icon: "💬" },
            { id: "questions" as const, label: "Questions", icon: "❓" },
            { id: "reading" as const, label: "Reading", icon: "📖" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "steps" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {FIRST_STEPS.map(s => (
              <div key={s.n} style={{ background: CARD, border: `1px solid ${completed.has(s.n) ? s.color + "40" : BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${s.color}20`, border: `2px solid ${s.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 17 }}>Step {s.n}: {s.title}</div>
                    </div>
                  </div>
                  <button onClick={() => toggleStep(s.n)}
                    style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${completed.has(s.n) ? s.color + "50" : BORDER}`, background: completed.has(s.n) ? `${s.color}15` : "transparent", color: completed.has(s.n) ? s.color : MUTED, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                    {completed.has(s.n) ? "✓ Done" : "Mark Done"}
                  </button>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>WHY</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.why}</p>
                </div>
                <div style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: s.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>HOW</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.how}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mentors" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {MENTORS_NB.map(m => (
                <button key={m.id} onClick={() => setSelectedMentor(m.id)}
                  style={{ width: "100%", background: selectedMentor === m.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedMentor === m.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedMentor === m.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{m.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{m.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{mentorItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{mentorItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{mentorItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{mentorItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{mentorItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION TO NEW BELIEVERS</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{mentorItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            {COMMON_QUESTIONS.map((q, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>"{q.q}"</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{q.a}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reading" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                This 12-week plan covers the most essential parts of the Bible for a new believer — starting with the Gospels and working outward. One chapter per day is enough. The goal is consistency, not speed.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {READING_PLAN.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 80, flexShrink: 0 }}>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 700 }}>{r.week}</div>
                  </div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{r.book}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{r.reason}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  { videoId: "DEy5rrMVW6g", title: "What Is a Christian?", channel: "Francis Chan / RightNow Media", description: "Francis Chan answers the foundational question for new believers — what it actually means to be a Christian, and what that changes about how you live." },
                  { videoId: "y3Bn7ihYyvw", title: "The Simple Gospel", channel: "Francis Chan", description: "Chan distills the gospel to its essentials — what God has done in Christ, what it requires of us, and why it is the most important news in the world." },
                  { videoId: "21yE6AT8tCw", title: "Faith Over Fear", channel: "Francis Chan", description: "Chan addresses the call to bold, whole-life trust in God — especially important for new believers navigating the difference between cultural Christianity and genuine discipleship." },
                  { videoId: "whuEOv18Ulw", title: "Stop Debating, Start Obeying (Holy Spirit, Pt. 3)", channel: "Francis Chan", description: "A challenge for new and established believers alike — Jesus calls us not merely to understand the faith but to obey it and walk in the Spirit's power." },
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
