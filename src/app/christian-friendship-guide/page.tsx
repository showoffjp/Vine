"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "enemies" | "practices" | "models" | "journal" | "videos";

const CFG_VIDEOS = [
  { videoId: "rtkS_8VWfB0", title: "Building Deep Friendships — Tim Keller", channel: "Gospel in Life", description: "Keller on the barriers to deep friendship in modern culture and what the gospel makes possible in Christian community." },
  { videoId: "ej_6dVdJSIU", title: "Friendship and the Christian Life", channel: "Ligonier Ministries", description: "A biblical theology of friendship — what makes Christian friendship different and why the church needs it." },
  { videoId: "4Eg_di-O8nM", title: "The Gift of Friendship — Why We Need It", channel: "Desiring God", description: "Piper on friendship as a means of grace, accountability, and joy — and how to cultivate it intentionally." },
  { videoId: "gV9JugO_5Mk", title: "Loneliness, Community, and the Gospel", channel: "The Gospel Coalition", description: "Why the epidemic of loneliness cannot be solved by programs — and how the gospel creates the conditions for genuine belonging." },
];

const STATS = [
  { value: "1 in 3", label: "Americans say they have no close friends" },
  { value: "63%", label: "of men say they have no intimate friend" },
  { value: "Prov 17:17", label: '"A friend loves at all times"' },
  { value: "2023", label: "Loneliness declared a public health epidemic — US Surgeon General" },
];

const THEOLOGY_POINTS = [
  {
    title: "Jonathan and David: The Covenant Model",
    color: "#F59E0B",
    ref: "1 Samuel 18:1-4; 2 Samuel 1:26",
    body: "This is the supreme model of friendship in Scripture. Jonathan's soul was knit to David's at the moment they met (1 Sam 18:1). They made a formal covenant — friendship elevated to the level of binding commitment. Jonathan stripped himself of his robe, armor, sword, bow, and belt and gave them to David — an extraordinary gesture that transferred his identity, his status, and his warrior's dignity to his friend. David's lament over Jonathan's death (2 Sam 1:26) is the most emotionally intense statement of friendship in the Bible: 'Your love to me was extraordinary, surpassing the love of women.' This friendship was not mere preference or convenience — it was covenantal, sacrificial, and enduring. Jonathan gave up the throne he was heir to for the sake of God's purposes and his friend. Christian friendship can have this depth.",
  },
  {
    title: "Jesus Calls His Disciples Friends",
    color: GREEN,
    ref: "John 15:13-15",
    body: "At the Last Supper, Jesus redefines the relationship: 'I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you.' This is the most theologically explosive statement about friendship in the New Testament. The Creator calls the creature friend. God does not merely condescend to save — he condescends to befriend. This redefines all human friendship as a participation in the divine friendship that the Trinity itself is. The Father, Son, and Holy Spirit are the eternal model of personal communion — other-centered, mutually delighting, overflowing with shared life. Human friendship is an icon of the inner life of God.",
  },
  {
    title: "The Four Loves (C.S. Lewis)",
    color: PURPLE,
    ref: "The Four Loves (1960)",
    body: "C.S. Lewis analyzed four loves: Storge (affection, the love of the familiar), Philia (friendship), Eros (romantic love), and Agape (divine, unconditional love). He argued that Philia — friendship — is the least biological and therefore the most distinctly human of all the loves. It is born in a moment of recognition: 'You too? I thought I was the only one.' Friendship is built on shared vision, shared truth, shared pursuit — not on need or accident. Lewis wrote: 'Friendship is unnecessary, like philosophy, like art... it has no survival value; rather it is one of those things that give value to survival.' The Four Loves remains the best book ever written on the theology and phenomenology of friendship. It is essential reading for any Christian who wants to understand why friendship matters and what it is.",
  },
  {
    title: "Iron Sharpens Iron — Accountability and Challenge",
    color: "#EF4444",
    ref: "Proverbs 27:17; Proverbs 27:6",
    body: "Proverbs 27:17 — 'As iron sharpens iron, so one person sharpens another.' This is not comfortable. Iron sharpening iron creates heat, friction, and sparks. The friendship that never challenges is not a friendship that helps you grow — it is a mutual affirmation society. Proverbs 27:6 is even sharper: 'Wounds from a friend can be trusted, but an enemy multiplies kisses.' The friend who tells you what you need to hear — even when it costs them your approval — is giving you a gift more precious than flattery. The friend who only affirms your choices is not a friend; he is an enabler. Real friendship includes accountability: asking hard questions, naming patterns, loving enough to risk the conversation. This is not harshness — it is the highest form of care.",
  },
  {
    title: "The Lonely Christian and the Body of Christ",
    color: "#3B82F6",
    ref: "Romans 16; Philemon; 1 Timothy 1:2",
    body: "Paul's letters are saturated with named individuals. Romans 16 greets over 30 people by name — it reads like a network map of a real, intensely relational community. Priscilla and Aquila. Epaenetus. Mary. Andronicus and Junia. Ampliatus. Urbanus. These are not abstractions — they are people Paul worked with, prayed with, was imprisoned with, wept over, and rejoiced over. Timothy is his 'true son in the faith.' Philemon is his 'dear friend and fellow worker.' The early church was not a service to attend but a body to belong to. The consumer church — where you sit in a row, watch a program, and drive home — has produced isolated churchgoers who have the theology of community without the experience of it. Community is not a program. It is people who know your name and your struggle, over time.",
  },
  {
    title: "Spiritual Friendship (Aelred of Rievaulx)",
    color: "#10B981",
    ref: "Spiritual Friendship (1160s) — Aelred of Rievaulx",
    body: "Aelred of Rievaulx was a 12th-century Cistercian monk who wrote what remains the classic theological text on Christian friendship. Writing in dialogue form (consciously echoing Cicero's De Amicitia), Aelred argued that Christian friendship is not merely a human bond but a participation in God himself. His most famous line: 'God is friendship.' For Aelred, Cicero had the right categories but the wrong telos — Roman friendship was ordered toward virtue and the republic; Christian friendship is ordered toward God and draws both parties toward holiness and ultimately toward heaven. Spiritual friendship has a theological purpose: mutual sanctification. The friend who draws you toward God is not merely a companion — he is a means of grace. Aelred's work was largely forgotten until recovered in the 20th century and remains under-read by evangelical Christians.",
  },
];

const ENEMIES = [
  {
    color: "#EF4444",
    title: "Busyness as Avoidance",
    desc: "We are too busy to have friends — and we wear that busyness like a badge of honor. But busyness is often fear of intimacy wearing the costume of productivity. The slow, inefficient, unprogrammable work of friendship cannot be scheduled into a productivity system. You cannot optimize closeness. Depth requires time that feels wasted, conversations that wander, presence that has no agenda. The person who is too busy for friends is not suffering from a scheduling problem — he is suffering from a fear of being known.",
    fight: "Create recurring rhythms — a weekly coffee, a monthly dinner — and protect them from schedule drift. Recurring beats occasional. The relationship that requires scheduling heroics every time it happens will not survive.",
  },
  {
    color: "#F59E0B",
    title: "Digital Pseudo-Community",
    desc: "Social media creates the vivid illusion of connection while delivering only information about others. You can have 500 Facebook friends and zero people who know your real struggles. You can follow 300 people's lives and have no one following yours. The feed gives you the appearance of relational richness while atrophying your capacity for the real thing. Likes are not love. Comments are not conversation. Follows are not friendship.",
    fight: "Trade screen time for face time — literally. Phones down, people present. One real conversation over coffee is worth more than a hundred digital interactions. The test: if your life fell apart tonight, who would you call? Those are your friends. Invest there.",
  },
  {
    color: "#8B5CF6",
    title: "Competitiveness and Comparison",
    desc: "Men especially struggle with friendship because real friendship requires vulnerability, and vulnerability requires admitting weakness, and weakness is dangerous in a competitive culture. If you are always competing — for status, for success, for the appearance of having your life together — you cannot be a friend. You can only be a rival wearing friendly clothes. The competitive man cannot celebrate another man's success without a twinge of threat. He cannot confess his failure without fear of judgment.",
    fight: "Go first. Name your failure before asking about theirs. The first person to be honest creates permission for the other to be honest. Vulnerability is contagious in the right direction — but someone has to start.",
  },
  {
    color: "#3B82F6",
    title: "Church as Service Provider",
    desc: "When church becomes a venue we attend rather than a body we belong to, friendship never forms. The consumer who attends Sunday services, parks in the same spot, sits near the same people, and drives home to his separate life is not experiencing the church Paul describes. He is consuming a religious product. You cannot be befriended by people you never talk to. You cannot be known in a crowd of strangers.",
    fight: "Join a small group and stay. Don't bounce when it's uncomfortable. The discomfort is the price of admission for real community. Proximity over time — even when it's awkward — eventually produces the intimacy that feels impossible to manufacture. Stay.",
  },
  {
    color: "#6B7280",
    title: "The Fear of Being Known",
    desc: "The deepest enemy of friendship is not busyness or phones or church culture — it is the terror of full disclosure. The hidden self — the failures you have not named, the sins you carry in secret, the fears that feel too shameful to speak — is the wall between you and every potential friend. The more you hide, the more isolated you become. The more isolated you become, the more the hidden things fester. This is the anatomy of loneliness: the self protecting itself from the very thing it needs.",
    fight: "Preach the gospel to yourself first: you are fully known and fully loved in Christ. Everything you are hiding, Christ already knew and bore. The one who knows you completely — every failure, every secret, every shameful desire — has already declared you beloved. What you fear will be rejected has already been accepted in him. This is the only foundation from which you can risk being known by another human being.",
  },
];

const PRACTICES = [
  {
    color: "#10B981",
    title: "Create Recurring Rituals",
    desc: "Rituals are the infrastructure of friendship. Don't wait for spontaneity — friendship formed only when circumstances align will not survive modern life. The weekly coffee, the annual trip, the monthly dinner — these are not optional extras but the loadbearing structures that hold the relationship together over time.",
    steps: [
      "Pick one recurring slot and protect it like a meeting you cannot cancel",
      "Annual trip — even one overnight — creates shared memory that sustains friendship through the ordinary months",
      "When life disrupts the rhythm, restart immediately rather than letting the gap widen",
    ],
  },
  {
    color: "#8B5CF6",
    title: "Go First in Vulnerability",
    desc: "Every genuine friendship requires someone to go first — to name a real struggle before the other has earned the right to hear it. This feels risky. It is risky. But vulnerability is contagious in the right direction: when you are honest about your failure, you give the other person permission to be honest about theirs. The friend who goes first creates the friendship.",
    steps: [
      "Name your actual struggle — not a sanitized version — in the first conversation of depth",
      "Resist the reflex to pivot to the other person before they have had to respond to yours",
      "If they respond with judgment, that is data — but most people respond with relief",
    ],
  },
  {
    color: "#F59E0B",
    title: "Pray Together, Not Just For Each Other",
    desc: "Praying for someone is good. Praying with someone is transformative. The person you pray with knows you differently than the person you pray for. Shared prayer creates intimacy that conversation alone cannot achieve — because in prayer you are both being honest before God, and that shared honesty spills over into the friendship.",
    steps: [
      "Start as small as you need to: one sentence each",
      "Pray about what you actually need, not a performance of spiritual health",
      "End every one-on-one meeting with two minutes of prayer — make it the norm, not the exception",
    ],
  },
  {
    color: "#EF4444",
    title: "Ask Better Questions",
    desc: '"How are you?" gets "Fine." It is a social ritual, not an invitation to honesty. Better questions open doors that the standard script keeps locked. The person who asks better questions is the person who gets to know people.',
    steps: [
      '"What has been hardest this week?"',
      '"Where are you with God right now — honestly?"',
      '"What are you most afraid of at the moment?"',
      '"What do you need from me right now?"',
      '"Is there anything you haven\'t told anyone?"',
    ],
  },
  {
    color: "#3B82F6",
    title: "Serve Together",
    desc: "Friendship formed in shared mission is deeper than friendship formed in shared comfort. Comfort makes you like each other. Hardship makes you trust each other. When you serve together — at a food bank, on a mission trip, in a church ministry — you see each other's character under pressure. Trials reveal who people really are, and what is revealed becomes the foundation of real trust.",
    steps: [
      "Find one shared service commitment and show up consistently together",
      "Debrief afterward — the conversation after the service matters as much as the service",
      "Shared sacrifice creates bonds that shared enjoyment cannot",
    ],
  },
  {
    color: "#6B4FBB",
    title: "Speak the Faithful Wound",
    desc: "Proverbs 27:6 — 'Wounds from a friend can be trusted.' The friend who tells you what you need to hear — gently, in love, without an agenda — is rare and precious. Most people have plenty of friends who will agree with them. Almost no one has a friend who will tell them the truth. That friend is worth more than a hundred who only affirm.",
    steps: [
      "Earn trust first — the faithful wound can only be received from someone the other person knows loves them",
      "Speak once, clearly, without an agenda — say what you see and let it land",
      "Do not repeat it, do not demand a response, do not make it about you",
      "Then stay — the faithful friend does not deliver the wound and disappear",
    ],
  },
];

const MODELS = [
  {
    name: "Jonathan & David",
    era: "c. 1000s BC",
    color: "#F59E0B",
    friendship: "Covenant soul-friendship — Jonathan stripped himself of his royal robe and weapons and gave them to David; their souls were knit together; David's lament calls Jonathan's love stronger than death",
    lesson: "Friendship can be covenantal — not merely preferential but binding, sacrificial, and permanent. The deepest friendships have the structure of a covenant.",
  },
  {
    name: "Paul & Timothy",
    era: "c. 50s AD",
    color: "#10B981",
    friendship: "Father and son in faith — Paul called Timothy 'my true son in the faith' (1 Tim 1:2) and 'my dear son' (2 Tim 1:2). Paul trained Timothy, sent him on missions, wrote him two letters of pastoral instruction, and longed to see him. Timothy traveled with Paul through some of his most dangerous work.",
    lesson: "Spiritual friendship transcends age. The mentoring friendship — where one pours into the other with no agenda but the other's growth — is one of the most underutilized forms of Christian friendship.",
  },
  {
    name: "Basil & Gregory of Nazianzus",
    era: "4th century",
    color: "#8B5CF6",
    friendship: "They met as students in Athens and became lifelong theological friends. Gregory's funeral oration for Basil is one of the greatest tributes to friendship in the history of literature. They retreated together to study Scripture and theology in Pontus. Their friendship shaped the theology of the Trinity that the Church has held ever since.",
    lesson: "Intellectual and theological friendship is real friendship. The friends who push your thinking, who challenge your conclusions, who share your love of truth — they are doing the work of Philia as Lewis described it: 'You too?'",
  },
  {
    name: "Augustine & Alypius",
    era: "4th–5th century",
    color: "#EF4444",
    friendship: "Augustine describes Alypius in the Confessions with extraordinary intimacy. They were friends in sin — Alypius was drawn into the gladiatorial games through peer pressure, a failure Augustine records honestly. They were friends in conversion — Alypius was present in the garden when Augustine's conversion occurred, and was himself converted at the same moment. Friends who sin together and are redeemed together.",
    lesson: "Friends can carry each other to God. The friend who walks with you through your worst years and into your best ones is a gift of extraordinary grace. Shared conversion creates bonds that nothing can break.",
  },
  {
    name: "C.S. Lewis, J.R.R. Tolkien & the Inklings",
    era: "20th century",
    color: "#3B82F6",
    friendship: "Tuesday morning meetings at The Eagle and Child pub in Oxford. The Inklings — Lewis, Tolkien, Charles Williams, Owen Barfield, and others — read their work aloud and subjected it to mutual critique. Tolkien's Lord of the Rings and Lewis's Chronicles of Narnia and Mere Christianity were all shaped in this crucible. Tolkien's friendship with Lewis was instrumental in Lewis's conversion to Christianity.",
    lesson: "Friendship catalyzes creative and theological work. The greatest intellectual and creative achievements in this tradition were not produced in isolation — they were produced in community, through friendship, mutual challenge, and shared vision.",
  },
  {
    name: "John Newton & William Cowper",
    era: "18th century",
    color: "#6B4FBB",
    friendship: "Newton — the former slave trader turned evangelical minister and author of Amazing Grace — cared for the severely depressed poet William Cowper for decades. Cowper suffered from suicidal depression and at times believed God had damned him. Newton stayed. He visited, wrote, encouraged, and refused to abandon his friend through the darkest seasons of mental illness. Together they produced the Olney Hymns.",
    lesson: "Faithful friendship endures suffering. The friend who stays when you are broken — who does not require you to perform wellness to earn continued presence — is giving you the rarest gift. This is what it looks like when love is patient.",
  },
];

export default function ChristianFriendshipGuidePage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_christian-friendship-guide_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [cfrendEntries, setCfrendEntries] = useState<{ id: string; date: string; friend: string; practicing: string; obstacle: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cfrend_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cfrendForm, setCfrendForm] = useState({ friend: "", practicing: "", obstacle: "" });
  const [cfrendSaved, setCfrendSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cfrend_entries", JSON.stringify(cfrendEntries)); }, [cfrendEntries]);
  function saveCfrendEntry() {
    if (!cfrendForm.friend.trim()) return;
    setCfrendEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cfrendForm }, ...prev]);
    setCfrendForm({ friend: "", practicing: "", obstacle: "" });
    setCfrendSaved(true); setTimeout(() => setCfrendSaved(false), 2000);
  }
  function deleteCfrendEntry(id: string) { setCfrendEntries(prev => prev.filter(e => e.id !== id)); }

  const TAB_LABELS: Record<Tab, string> = {
    theology: "Biblical Theology",
    enemies: "Enemies of Friendship",
    practices: "Practices",
    models: "Historical Models",
    journal: "📓 My Journal",
    videos: "Videos",
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, lineHeight: 1.2 }}>
            The Theology of Christian Friendship
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            What C.S. Lewis called one of the things that give value to survival. What Jonathan and David embodied in covenant. What the four loves reveal about the human soul — and what Christian friendship was always meant to be.
          </p>
        </div>

        {/* Stats Banner */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 36 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 16px", textAlign: "center" }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 22, marginBottom: 6 }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["theology", "enemies", "practices", "models", "journal", "videos"] as Tab[]).map((t) => (
            <button type="button"
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? GREEN : "transparent",
                color: tab === t ? BG : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* Tab 1: Biblical Theology — Accordion */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {THEOLOGY_POINTS.map((point) => (
              <div
                key={point.title}
                style={{
                  background: CARD,
                  border: `1px solid ${expanded[point.title] ? point.color + "50" : BORDER}`,
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <button type="button"
                  onClick={() => toggleExpanded(point.title)}
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ color: point.color, fontWeight: 800, fontSize: 15 }}>{point.title}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 3 }}>{point.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 22, flexShrink: 0, marginLeft: 16 }}>
                    {expanded[point.title] ? "−" : "+"}
                  </span>
                </button>
                {expanded[point.title] && (
                  <div style={{ padding: "0 20px 22px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "18px 0 0" }}>{point.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Enemies of Friendship — Cards */}
        {tab === "enemies" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {ENEMIES.map((enemy) => (
              <div
                key={enemy.title}
                style={{
                  background: CARD,
                  border: `1px solid ${enemy.color}30`,
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: enemy.color, flexShrink: 0 }} />
                  <div style={{ color: enemy.color, fontWeight: 900, fontSize: 15 }}>{enemy.title}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{enemy.desc}</p>
                <div style={{ background: `${enemy.color}10`, border: `1px solid ${enemy.color}20`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: enemy.color, fontSize: 10, fontWeight: 800, marginBottom: 4, letterSpacing: "0.08em" }}>HOW TO FIGHT IT</div>
                  <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, margin: 0 }}>{enemy.fight}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Practices — Cards */}
        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {PRACTICES.map((practice) => (
              <div
                key={practice.title}
                style={{
                  background: CARD,
                  border: `1px solid ${practice.color}30`,
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: practice.color, flexShrink: 0 }} />
                  <div style={{ color: practice.color, fontWeight: 900, fontSize: 15 }}>{practice.title}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{practice.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {practice.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: practice.color, flexShrink: 0, marginTop: 5 }} />
                      <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.6 }}>{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Historical Models — Cards */}
        {tab === "models" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
            {MODELS.map((model) => (
              <div
                key={model.name}
                style={{
                  background: CARD,
                  border: `1px solid ${model.color}30`,
                  borderRadius: 14,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ color: model.color, fontWeight: 900, fontSize: 16 }}>{model.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{model.era}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{model.friendship}</p>
                <div style={{ background: `${model.color}10`, border: `1px solid ${model.color}20`, borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ color: model.color, fontSize: 10, fontWeight: 800, marginBottom: 4, letterSpacing: "0.08em" }}>LESSON</div>
                  <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, margin: 0 }}>{model.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Videos */}
        {tab === "journal" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>My Friendship Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Reflect on your friendships — what you are cultivating, practicing, and where you need growth.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 32 }}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Friend or Relationship</label>
                <input value={cfrendForm.friend} onChange={e => setCfrendForm(f => ({ ...f, friend: e.target.value }))} placeholder="Name or describe the friendship you are reflecting on..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>What Practice Are You Cultivating?</label>
                <textarea value={cfrendForm.practicing} onChange={e => setCfrendForm(f => ({ ...f, practicing: e.target.value }))} placeholder="What specific habit or practice of love are you building with this person?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Obstacle or Enemy to Friendship</label>
                <textarea value={cfrendForm.obstacle} onChange={e => setCfrendForm(f => ({ ...f, obstacle: e.target.value }))} placeholder="What is working against this friendship right now — busyness, fear, pride, distance?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCfrendEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cfrendSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {cfrendEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cfrendEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{e.friend}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{e.date}</div>
                      </div>
                      <button type="button" onClick={() => deleteCfrendEntry(e.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Delete</button>
                    </div>
                    {e.practicing && <div style={{ marginBottom: 10 }}><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Practicing</div><div style={{ color: TEXT, fontSize: 13 }}>{e.practicing}</div></div>}
                    {e.obstacle && <div><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>Obstacle</div><div style={{ color: TEXT, fontSize: 13 }}>{e.obstacle}</div></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {CFG_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
