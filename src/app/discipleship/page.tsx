"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", GOLD = "#c9a227", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PATHWAYS = [
  {
    id: "foundation",
    name: "Foundation",
    subtitle: "New Believer Essentials",
    icon: "🌱",
    color: "#10B981",
    duration: "3-6 months",
    description: "The foundational truths and practices every new believer needs to understand and establish. This stage is about settling core convictions and beginning basic spiritual habits.",
    topics: [
      { title: "Assurance of Salvation", desc: "Understanding what just happened — the nature of salvation, the new birth, and the certainty that comes from God's promises rather than feelings." },
      { title: "Who Is God?", desc: "The Trinity, God's character (holy, loving, just, merciful), and what it means to have a personal relationship with each person of the Godhead." },
      { title: "The Bible", desc: "What the Bible is, why it is trustworthy, how to read it, and beginning a habit of daily Scripture engagement." },
      { title: "Prayer", desc: "Prayer as conversation with a personal God — learning to talk to God honestly, receive his presence, and grow in listening." },
      { title: "The Church", desc: "Why church community is essential, not optional — finding a local church, getting connected, and understanding baptism and the Lord's Supper." },
      { title: "The Holy Spirit", desc: "Who the Spirit is, what the Spirit does in the believer's life, how to be filled and led by the Spirit." },
    ],
    resources: ["Basic Christianity (John Stott)", "The New Christian's Handbook (Max Anders)", "Bible reading plan — start with John, then Acts, then Genesis"],
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Developing Spiritual Disciplines",
    icon: "📈",
    color: "#3B82F6",
    duration: "1-2 years",
    description: "Moving from survival to formation — developing consistent spiritual habits and beginning to understand the Christian life as intentional formation into Christlikeness.",
    topics: [
      { title: "The Spiritual Disciplines", desc: "Study, meditation, prayer, fasting, Sabbath, solitude, simplicity, service — each discipline reshapes the inner life in specific ways." },
      { title: "Christian Ethics", desc: "How the gospel shapes decision-making — not rules but character. Understanding virtue, conscience, and moral reasoning from a biblical worldview." },
      { title: "Knowing God Deeply", desc: "Moving from knowing about God to knowing God — developing a personal, relational spiritual life marked by awareness of God's presence." },
      { title: "Handling Temptation & Sin", desc: "Understanding the three enemies (world, flesh, devil), the role of grace in overcoming sin, and building patterns of victory." },
      { title: "Spiritual Warfare", desc: "The reality of spiritual opposition, the authority of the believer, the armor of God, and practical strategies for standing firm." },
      { title: "Reading Scripture Well", desc: "Basic hermeneutics — understanding context, genre, and how to interpret Scripture accurately without importing modern assumptions." },
    ],
    resources: ["Knowing God (J.I. Packer)", "Celebration of Discipline (Richard Foster)", "The Ruthless Elimination of Hurry (John Mark Comer)"],
  },
  {
    id: "maturity",
    name: "Maturity",
    subtitle: "Theological Depth & Character",
    icon: "🌳",
    color: PURPLE,
    duration: "Ongoing",
    description: "Moving into theological depth, settled character, and beginning to multiply — investing in others and contributing to the church with mature wisdom and presence.",
    topics: [
      { title: "Biblical Theology", desc: "Understanding the whole arc of Scripture — creation, fall, redemption, restoration — and how every text fits into the grand narrative." },
      { title: "Systematic Theology", desc: "The core doctrines of the Christian faith in depth — God, Scripture, humanity, salvation, church, and last things." },
      { title: "Christian History & Tradition", desc: "Understanding what the church has believed and practiced across the centuries — learning from those who went before." },
      { title: "The Fruit of the Spirit", desc: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control — the marks of mature Christlikeness." },
      { title: "Suffering & Theodicy", desc: "Why a good God allows suffering — and how suffering becomes the furnace of formation rather than evidence against faith." },
      { title: "Discernment & Wisdom", desc: "Making wise decisions in ambiguous situations — the role of community, Scripture, prayer, and Spirit-led reasoning." },
    ],
    resources: ["Knowing Scripture (R.C. Sproul)", "Mere Christianity (C.S. Lewis)", "The Spirit of the Disciplines (Dallas Willard)"],
  },
  {
    id: "multiplying",
    name: "Multiplying",
    subtitle: "Discipling Others",
    icon: "✨",
    color: GOLD,
    duration: "Ongoing",
    description: "The goal of discipleship is disciples who make disciples. This stage focuses on intentionally investing in others, mentoring, and contributing to the church's mission.",
    topics: [
      { title: "What Discipleship Actually Is", desc: "Not teaching a curriculum but sharing your life (1 Thess 2:8). Understanding the relational, slow, intentional nature of discipleship." },
      { title: "How to Disciple Someone", desc: "Finding the right person, establishing rhythm and accountability, what topics to cover, how to handle hard conversations." },
      { title: "Spiritual Mentorship", desc: "The difference between discipleship (broad formation) and mentorship (specific skill/wisdom transfer). How to offer both." },
      { title: "Reproducing the Pattern", desc: "Paul's 2 Timothy 2:2 vision: disciples who disciple disciples. Understanding the generational nature of spiritual multiplication." },
      { title: "Teaching & Communication", desc: "How to communicate truth effectively — in small groups, one-on-one, and perhaps from a pulpit or platform." },
      { title: "Your Unique Contribution", desc: "Understanding your spiritual gifts, calling, and how your specific design serves the body and the mission of God." },
    ],
    resources: ["The Master Plan of Evangelism (Robert Coleman)", "Discipleship (Mark Dever)", "The Trellis and the Vine (Colin Marshall & Tony Payne)"],
  },
];

const DISCIPLESHIP_QUESTIONS = [
  { q: "What is God teaching you in Scripture right now?", category: "Word", color: GREEN },
  { q: "How is your prayer life? What does your regular prayer look like?", category: "Prayer", color: PURPLE },
  { q: "Where are you experiencing temptation? What patterns do you notice?", category: "Integrity", color: "#EF4444" },
  { q: "What relationships in your life reflect Christ? Where are you struggling relationally?", category: "Relationships", color: "#3B82F6" },
  { q: "What is God asking you to give up, take up, or step into?", category: "Obedience", color: GOLD },
  { q: "Are you serving in your church? How are you contributing to the body?", category: "Service", color: "#10B981" },
  { q: "What are you reading? Who is influencing your thinking?", category: "Formation", color: "#8B5CF6" },
  { q: "Where do you see God at work in your life right now?", category: "Gratitude", color: GREEN },
  { q: "Who are you investing in? Who is walking alongside you?", category: "Multiplication", color: GOLD },
  { q: "What fears or doubts are present in your walk right now?", category: "Honesty", color: "#EC4899" },
];

const VOICES_DISC = [
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "1906-1945",
    context: "The Cost of Discipleship (1937); Life Together (1939); Confessing Church leader",
    bio: "Bonhoeffer's The Cost of Discipleship opens with one of the most famous sentences in modern theology: 'Cheap grace is the mortal enemy of our church.' He wrote it in Nazi Germany, where the German church had accommodated itself so thoroughly to culture that it could no longer tell the difference between Jesus and Hitler. His call to costly discipleship — obedience that follows Christ regardless of social cost — was not theoretical: he was hanged in April 1945 for participation in the plot to assassinate Hitler. Life Together remains the most practical and beautiful account of intentional Christian community ever written.",
    quote: "Cheap grace is the mortal enemy of our church. We are fighting today for costly grace. Cheap grace means grace without discipleship.",
    contribution: "Made the concept of costly discipleship inescapable for modern Christianity. His martyrdom gave the theology moral weight that no amount of writing alone could have provided. He showed that cheap discipleship — saying yes to Jesus but not following — is not merely inadequate; it is dangerous.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935-2013",
    context: "The Divine Conspiracy (1998); Renovation of the Heart (2002); The Spirit of the Disciplines (1988)",
    bio: "Willard's central conviction was that Jesus was not only savior but teacher — and that his training program for his disciples was the most practically wise and comprehensive account of human flourishing ever offered. The Divine Conspiracy is a massive re-reading of the Sermon on the Mount that recovers its original force as a description of life in God's kingdom now. Renovation of the Heart describes how spiritual formation works through the mind, will, body, soul, and social dimensions of the person.",
    quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action. Earning is attitude.",
    contribution: "Recovered the category of spiritual formation for evangelical Christianity, which had reduced discipleship to conversion and Bible knowledge. His insistence that Jesus is the smartest man who ever lived reframed discipleship as intellectual and practical wisdom, not just spiritual performance.",
  },
  {
    id: "peterson",
    name: "Eugene Peterson",
    era: "1932-2018",
    context: "A Long Obedience in the Same Direction (1980); pastor of Christ Our King Church for 29 years",
    bio: "Peterson's title A Long Obedience in the Same Direction — taken from Nietzsche — captures his entire vision of discipleship: it is not a dramatic crisis experience but a lifetime of steady following in the same direction, through all the ordinary Sundays and Tuesdays of life. His 29 years as pastor of a single church in Maryland were themselves a statement: discipleship happens in one place, over time, with the same people. His Message translation of the Bible was an attempt to make Scripture read the way it would have originally sounded — alive, vernacular, immediate.",
    quote: "The biblical fact is that there are no successful churches. There are, instead, communities of sinners, gathered before God week after week.",
    contribution: "Restored the ordinary, slow, unglamorous nature of discipleship to a church culture obsessed with programs, methods, and measurable results. His pastoral theology is a sustained argument for the patient formation of character over time — not the quick results of spiritual technique.",
  },
  {
    id: "foster",
    name: "Richard Foster",
    era: "b. 1942",
    context: "Celebration of Discipline (1978); founder of Renovaré",
    bio: "Foster's Celebration of Discipline arrived in evangelical Christianity like a revelation: here was a systematic account of classical Christian spiritual practices — meditation, prayer, fasting, study, simplicity, solitude, submission, service, confession, worship, guidance, celebration — that ordinary Protestants had largely forgotten. Foster argued that the disciplines are not the means of earning God's favor but the means of training the soul to respond to God's grace. The book has sold over a million copies.",
    quote: "The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.",
    contribution: "Single-handedly recovered the classical Christian spiritual disciplines for evangelical Protestantism. Celebration of Discipline gave a generation of Christians a vocabulary and a practice for intentional formation that Protestant churches had largely abandoned since the Reformation.",
  },
  {
    id: "comer",
    name: "John Mark Comer",
    era: "b. 1980",
    context: "The Ruthless Elimination of Hurry (2019); Practicing the Way (2024); Bridgetown Church",
    bio: "Comer is the most influential voice on discipleship for younger evangelicals in the 2020s. His central diagnosis: the greatest threat to spiritual formation in the modern world is not atheism or secularism but hurry — the frantic pace of digital life that makes sustained attention, prayer, and formation nearly impossible. His book on hurry draws on Dallas Willard's conviction that we must ruthlessly eliminate hurry from our lives. His later book Practicing the Way offers the most thorough contemporary account of the Jesus way of life.",
    quote: "Hurry is the great enemy of spiritual life in our day. You must ruthlessly eliminate hurry from your life.",
    contribution: "Translated the classical discipleship tradition into language and practices accessible to Millennials and Gen Z. His diagnosis of hurry as the primary spiritual problem of digital life has resonated across evangelical denominations and created a movement of people taking formation seriously.",
  },
];

const DISC_VIDEOS = [
  { videoId: "7SbckqNUDm0", title: "What Is Discipleship? — Dallas Willard", channel: "Dallas Willard Ministries", description: "Willard's foundational talk on what it means to be a disciple of Jesus — not just a believer who goes to heaven, but an apprentice who learns to live the way Jesus lived." },
  { videoId: "JEM8S9i3Mbo", title: "Making Disciples: How It Actually Works", channel: "John Mark Comer Teachings", description: "Comer unpacks the apprenticeship model of discipleship — what it looks like to intentionally form others in the way of Jesus through shared life, practice, and accountability." },
  { videoId: "nqTcWG-hpik", title: "Spiritual Formation: The Inner Life of the Disciple", channel: "Renovaré", description: "Richard Foster on the classical spiritual disciplines as the means by which God forms Christlikeness — not works of merit but training of the soul to respond to grace." },
  { videoId: "uuabITeO4l8", title: "Shocking Youth Message", channel: "Paul Washer", description: "A piercing call to genuine conversion and costly discipleship — Washer challenges easy-believism and calls people to examine whether they have truly been born again." },
  { videoId: "yhiHSf_L6_E", title: "Radical — Passion 2011", channel: "David Platt", description: "Platt's landmark message challenging American Christians to consider what a fully surrendered response to the Great Commission actually looks like in practice." },
  { videoId: "by8ykv7-A3c", title: "The Supremacy of Christ and Truth", channel: "Voddie Baucham", description: "Baucham on the intellectual and moral demands of genuine discipleship — what it means to be shaped by Christ's Lordship over every area of life and thought." },
];

type DTab = "pathways" | "voices" | "questions" | "myplan" | "videos";

export default function DiscipleshipPage() {
  const [activeTab, setActiveTab] = useState<DTab>("pathways");
  const [selectedVoice, setSelectedVoice] = useState("bonhoeffer");
  const voiceItem = VOICES_DISC.find(v => v.id === selectedVoice)!;
  const [selectedPath, setSelectedPath] = useState("foundation");
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_disc_completed"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [planText, setPlanText] = useState(() => {
    try { return localStorage.getItem("vine_disc_plan") || ""; } catch { return ""; }
  });
  const [currentPath, setCurrentPath] = useState(() => {
    try { return localStorage.getItem("vine_disc_path") || "foundation"; } catch { return "foundation"; }
  });

  useEffect(() => { try { localStorage.setItem("vine_disc_completed", JSON.stringify([...completedTopics])); } catch {} }, [completedTopics]);
  useEffect(() => { try { localStorage.setItem("vine_disc_plan", planText); } catch {} }, [planText]);
  useEffect(() => { try { localStorage.setItem("vine_disc_path", currentPath); } catch {} }, [currentPath]);

  const path = PATHWAYS.find(p => p.id === selectedPath)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, rgba(107,79,187,0.08) 0%, transparent 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "80px 20px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,79,187,0.1)", border: "1px solid rgba(107,79,187,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>🌱</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Discipleship Pathways</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.1 }}>
            Intentional{" "}
            <span style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Formation
            </span>
            {" "}into Christ
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 28px" }}>
            Discipleship is not a program — it is a relationship. The Great Commission is not just evangelism; it is making disciples. From new believer to multiplying disciple, the journey requires intention.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Matthew 28:19-20", desc: "Go and make disciples" },
              { label: "2 Timothy 2:2", desc: "Faithful people who teach others" },
              { label: "Luke 9:23", desc: "Take up your cross daily" },
            ].map(v => (
              <div key={v.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "10px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: PURPLE }}>{v.label}</div>
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
            { id: "pathways" as const, label: "Pathways", icon: "🗺️" },
            { id: "voices" as const, label: "Key Voices", icon: "💬" },
            { id: "questions" as const, label: "1-on-1 Questions", icon: "🗣️" },
            { id: "myplan" as const, label: "My Plan", icon: "📝" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* PATHWAYS */}
        {activeTab === "pathways" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Jesus&apos;s own discipleship method with the Twelve was a three-year intensive: he taught them, modeled it, let them try, and sent them out. This four-stage pathway mirrors that pattern — from foundation to multiplication.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
                {PATHWAYS.map(p => (
                  <button key={p.id} onClick={() => setSelectedPath(p.id)}
                    style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedPath === p.id ? p.color : BORDER}`, background: selectedPath === p.id ? `${p.color}18` : CARD, color: selectedPath === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ background: CARD, border: `1px solid ${path.color}40`, borderRadius: 14, padding: 26 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h2 style={{ color: path.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{path.icon} {path.name}</h2>
                    <div style={{ color: MUTED, fontSize: 14, marginTop: 4 }}>{path.subtitle} &middot; {path.duration}</div>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>{path.description}</p>

                  <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Core Topics</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                    {path.topics.map((t, i) => {
                      const key = `${path.id}-${i}`;
                      const done = completedTopics.has(key);
                      return (
                        <div key={i} onClick={() => setCompletedTopics(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; })}
                          style={{ background: done ? `${path.color}10` : BG, border: `1px solid ${done ? path.color + "30" : BORDER}`, borderRadius: 10, padding: 14, cursor: "pointer", transition: "all 0.2s" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${done ? path.color : BORDER}`, background: done ? path.color : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                              {done && <span style={{ color: BG, fontSize: 10, fontWeight: 900 }}>✓</span>}
                            </div>
                            <div>
                              <div style={{ color: done ? path.color : TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{t.title}</div>
                              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{t.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Recommended Resources</h4>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {path.resources.map((r, i) => <li key={i} style={{ color: TEXT, fontSize: 13, marginBottom: 6 }}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Jesus's method */}
            <div style={{ marginTop: 24, background: `${GREEN}08`, border: `1px solid ${GREEN}25`, borderRadius: 16, padding: "24px 28px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: GREEN, marginBottom: 16 }}>Jesus&apos;s Four-Phase Discipleship Method</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                {[
                  { phase: "I do — you watch", verse: "Follow me and I will make you fishers of men (Mark 1:17)", desc: "Jesus modeled the ministry while his disciples observed." },
                  { phase: "I do — you help", verse: "He called the Twelve... that they might be with him (Mark 3:14)", desc: "Disciples participated in the work alongside Jesus." },
                  { phase: "You do — I help", verse: "He sent them out two by two (Mark 6:7)", desc: "Disciples led with Jesus available for correction." },
                  { phase: "You do — I watch", verse: "Go and make disciples of all nations (Matthew 28:19)", desc: "Full authority transferred; Jesus sends them independently." },
                ].map((item, i) => (
                  <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Phase {i + 1}: {item.phase}</div>
                    <p style={{ color: MUTED, fontSize: 12, fontStyle: "italic", lineHeight: 1.5, margin: "0 0 6px" }}>&ldquo;{item.verse}&rdquo;</p>
                    <p style={{ color: TEXT, fontSize: 12, lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VOICES */}
        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {VOICES_DISC.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? PURPLE : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voiceItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{voiceItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 18 }}>{voiceItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{voiceItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Contribution to Discipleship Theology</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{voiceItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QUESTIONS */}
        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 10 }}>Questions for Discipleship Conversations</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 14, margin: 0 }}>Whether you meet weekly or monthly, these questions open honest conversation about spiritual growth. Ask one or two deeply rather than all ten quickly. The goal is real encounter, not review.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12, marginBottom: 28 }}>
              {DISCIPLESHIP_QUESTIONS.map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, transition: "border-color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = q.color + "60"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = BORDER}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${q.color}20`, border: `1px solid ${q.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: q.color, fontWeight: 800, fontSize: 11, flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: q.color, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 4 }}>{q.category}</span>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{q.q}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 16 }}>The 3-3-3 Discipleship Rhythm</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>A simple structure for discipleship meetings — keeps sessions focused without becoming mechanical.</p>
              {[
                { num: "3", label: "min catching up on life", desc: "Brief life update — not spiritual performance, just what is actually happening. Real discipleship begins with real life." },
                { num: "3", label: "areas of accountability", desc: "Time in Word, prayer habits, and one area of growth or struggle. Keep it specific and honest, not generic." },
                { num: "3", label: "things you're trusting God for", desc: "Keep faith active by naming what you're believing God for together. Pray over these specifically before you leave." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 2 ? 16 : 0, paddingBottom: i < 2 ? 16 : 0, borderBottom: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, display: "flex", alignItems: "center", justifyContent: "center", color: GREEN, fontWeight: 900, fontSize: 18, flexShrink: 0 }}>{item.num}</div>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>minutes/areas: {item.label}</div>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2 Timothy 2:2 */}
            <div style={{ marginTop: 20, background: `${PURPLE}0A`, border: `1px solid ${PURPLE}25`, borderRadius: 14, padding: "24px 28px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 20, fontStyle: "italic", color: TEXT, lineHeight: 1.7, marginBottom: 10 }}>
                &ldquo;And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.&rdquo;
              </p>
              <p style={{ color: PURPLE, fontWeight: 700, fontSize: 13, margin: 0 }}>&mdash; 2 Timothy 2:2 &mdash; the four generations in a single verse</p>
            </div>
          </div>
        )}

        {/* MY PLAN */}
        {activeTab === "myplan" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 12 }}>My Current Pathway</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                {PATHWAYS.map(p => (
                  <button key={p.id} onClick={() => setCurrentPath(p.id)}
                    style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${currentPath === p.id ? p.color : BORDER}`, background: currentPath === p.id ? `${p.color}15` : "transparent", color: currentPath === p.id ? p.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}>
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
              <div style={{ background: BG, borderRadius: 10, padding: 14 }}>
                <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{PATHWAYS.find(p => p.id === currentPath)?.description}</p>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>My Discipleship Plan</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>Who is discipling you? Who are you discipling? What are you working on? What are your next steps?</p>
              <textarea value={planText} onChange={e => setPlanText(e.target.value)}
                placeholder={"My current stage: \n\nWho is discipling me:\n\nWho I am discipling:\n\nWhat I'm currently studying:\n\nMy key growth area this season:\n\nNext steps:"}
                style={{ width: "100%", minHeight: 240, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Accountability Questions to Ask Your Disciple</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Are you spending time in God's Word daily? What are you reading?",
                  "How is your prayer life? What are you bringing to God regularly?",
                  "Is there any area of sin or compromise you need to confess?",
                  "Who in your life are you sharing the gospel with?",
                  "What is one thing God is clearly asking you to do that you've been delaying?",
                  "How are you doing in your relationships — marriage, family, friendships?",
                  "Are you serving faithfully in your church community?",
                  "What are you reading or listening to that is shaping your thinking?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: i < 7 ? `1px solid ${BORDER}` : "none" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, color: PURPLE, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Teaching on Discipleship &amp; Formation</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Video teachings on discipleship, spiritual formation, and the apprentice life with Jesus — from the most influential voices in the field.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 24 }}>
              {DISC_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 6, color: TEXT }}>{v.title}</h3>
                    <p style={{ fontSize: 12, color: PURPLE, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
