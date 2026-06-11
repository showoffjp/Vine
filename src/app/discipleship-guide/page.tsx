"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "theology", label: "Theology" },
  { id: "cost", label: "The Cost" },
  { id: "oneonone", label: "One-on-One" },
  { id: "small-group", label: "Small Groups" },
  { id: "multiplying", label: "Multiplying" },
  { id: "plan", label: "Your Plan" },
  { id: "journal", label: "Reflection" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_ITEMS = [
  { id: "th1", title: "The Great Commission", ref: "Matthew 28:18-20",
    body: "'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.' The structure: the imperative is 'make disciples' — the participles 'going,' 'baptizing,' and 'teaching' describe how. Discipleship is the mission. It is not evangelism alone (getting people saved) or spiritual formation alone (helping people grow) — it is making disciples who make disciples, teaching them to obey everything Jesus commanded." },
  { id: "th2", title: "\"Follow Me\" — The Call to Imitate", ref: "Matthew 4:19; John 13:15; 1 Corinthians 11:1",
    body: "'Come, follow me, and I will send you out to fish for people' (Matthew 4:19). Discipleship in the ancient Jewish world meant more than instruction — it meant imitation. The disciple spent time with the rabbi to become like him. Paul: 'Follow my example, as I follow the example of Christ' (1 Corinthians 11:1). This is startling — Paul invites imitation. Christian discipleship is not primarily content transfer; it is life on life, character formation through presence and relationship. You cannot disciple someone you don't know." },
  { id: "th3", title: "Discipleship vs. Conversion", ref: "Matthew 28:20; Acts 2:42",
    body: "Conversion is a moment; discipleship is a lifetime. The Western evangelical church has often been better at winning converts than making disciples. The early church in Acts 2:42 was immediately structured around ongoing formation: 'They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.' Discipleship is not the graduate program for serious Christians — it is the normal Christian life. A church that produces converts but not disciples has misread the Great Commission." },
  { id: "th4", title: "The Spirit's Role in Discipleship", ref: "John 16:13; 2 Corinthians 3:18; Galatians 5:22-23",
    body: "Discipleship is not self-improvement or spiritual achievement. 'We all, who with unveiled faces contemplate the Lord's glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit' (2 Corinthians 3:18). The Spirit is the actual agent of transformation; human relationships and disciplines are the vehicles. The disciple who forgets this will either become proud (when they succeed) or despairing (when they fail). Growth is God's work — we are his instruments." },
];

const COST_ITEMS = [
  { id: "c1", title: "Bonhoeffer: Costly Grace vs. Cheap Grace", ref: "Matthew 16:24; Luke 14:26-33",
    body: "Dietrich Bonhoeffer's The Cost of Discipleship opens with the most famous line in 20th-century Christian ethics: 'Cheap grace is the deadly enemy of our church.' Cheap grace: forgiveness without repentance, baptism without church discipline, the Lord's Supper without confession, grace without discipleship. Costly grace: grace that calls you to follow, that costs you everything, that is purchased at infinite cost and therefore demands all. Jesus: 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me' (Matthew 16:24). The cross is not a metaphor for minor inconvenience." },
  { id: "c2", title: "Denying Self", ref: "Matthew 16:24; Galatians 2:20; Luke 9:23",
    body: "Self-denial is the first requirement of discipleship. This is not self-hatred or monastic self-punishment — it is the displacement of self from the center of one's life. The 'self' that is denied is the self that insists on autonomy, self-determination, and the right to live for itself. Galatians 2:20 — 'I have been crucified with Christ and I no longer live.' The disciple's center is no longer 'what I want' but 'what Christ wants.' This re-centering is the most fundamental and most difficult work of discipleship." },
  { id: "c3", title: "Taking Up the Cross Daily", ref: "Luke 9:23; Romans 8:36; Revelation 12:11",
    body: "Luke 9:23 adds 'daily' to Matthew's account: 'take up their cross daily.' This is not a one-time decision but a daily orientation — choosing Christ over self every morning. The cross meant one thing in the first century: death, shame, and the loss of everything. The disciple who takes up the cross is not looking for personal enhancement — they are choosing a path that may cost them everything. This language has been so domesticated in Christian culture ('my cross to bear' = minor irritation) that it has lost almost all of its original force." },
  { id: "c4", title: "The Counting the Cost Warning", ref: "Luke 14:28-33",
    body: "Jesus tells two parables about counting the cost before beginning: the tower-builder who estimates the cost first (Luke 14:28-30) and the king who assesses his forces before going to war (Luke 14:31-33). The application: 'In the same way, those of you who do not give up everything you have cannot be my disciples' (v. 33). This is uncomfortable recruiting. Jesus does not minimize the demands. The church that minimizes the demands to grow its numbers is not following Jesus's evangelism strategy. The person who counts the cost and comes is more likely to endure than the person who came without understanding what they were entering." },
];

const ONEONONE_ITEMS = [
  { color: BLUE, title: "The Biblical Model: Paul and Timothy", body: "Paul's relationship with Timothy is the clearest NT model of one-on-one discipleship. He writes to 'Timothy, my true son in the faith' (1 Timothy 1:2), takes him as a traveling companion (Acts 16:1-3), and gives him two letters of pastoral instruction. The content of discipleship: doctrine (1 Timothy 4:6-7), conduct (1 Timothy 4:12), ministry (2 Timothy 4:2), and suffering (2 Timothy 1:8). Discipleship is personal, ongoing, covers the whole of life and ministry, and involves explicit theological formation." },
  { color: GREEN, title: "What One-on-One Discipleship Looks Like", body: "Regular (weekly or bi-weekly) intentional meeting between a more mature and a less mature Christian. Content: Scripture study or reading a Christian book together, prayer, accountability (honest conversation about struggles and growth), and life imitation (the disciple sees the discipler live). The most important element is often informal: what happens outside the scheduled meeting — phone calls, shared meals, working alongside each other, seeing how the discipler handles adversity." },
  { color: GOLD, title: "Who to Disciple", body: "Jesus invested most deeply in the three (Peter, James, John), then the twelve, then the seventy — not in the crowds. Effective disciples select for: (1) Faithfulness — not necessarily talent or spiritual maturity but reliability; (2) Availability — time and commitment to meet regularly; (3) Teachability — openness to correction and growth. It is better to deeply disciple one person than superficially engage twenty. The faithful person will teach others (2 Timothy 2:2)." },
  { color: TEAL, title: "Receiving Discipleship", body: "Being discipled requires humility — the willingness to be known, corrected, and challenged. The undiscipleable person: one who is not honest about struggles, rejects all correction, or cannot receive feedback. Receiving well means: (1) Honesty about sin, doubts, and failures; (2) Openness to correction and difficult questions; (3) Doing what the discipler assigns (Scripture, prayer, book); (4) Bringing real questions rather than performing spiritual health." },
];

const SMALL_GROUP_POINTS = [
  { color: PURPLE, title: "The Power of Shared Life", body: "Acts 2:42-47 describes the early church: daily in the temple courts, meeting from house to house, sharing meals. The community was not a weekly program — it was a shared life. Small groups at their best approximate this: people who know each other, share life, pray together, study together, and bear one another's burdens (Galatians 6:2)." },
  { color: BLUE, title: "Structure for Spiritual Growth", body: "Effective small group curriculum focuses not just on information but on transformation: what do I believe?, what do I need to put off/put on?, how will this change my week? Groups that only discuss ideas produce informed but unchanged Christians. Groups that discuss, pray, confess, and hold each other accountable produce transformed Christians." },
  { color: GREEN, title: "Accountability in Community", body: "James 5:16 — 'confess your sins to each other and pray for each other so that you may be healed.' The accountability that comes from a small group where members know each other's struggles is qualitatively different from private sin-management. The group creates a context for honest confession, specific prayer, and communal celebration of growth." },
  { color: GOLD, title: "Multiplying Small Groups", body: "A small group that never multiplies becomes inward-focused and stagnant. Healthy groups identify and develop leaders within the group, eventually sending them out to start new groups. This multiplication is how the church grows in depth, not just in attendance. The goal is not a large group that functions well but many small groups reaching into every neighborhood." },
];

const MULTIPLY_ITEMS = [
  { id: "mul1", title: "2 Timothy 2:2 — The Multiplication Principle", ref: "2 Timothy 2:2",
    body: "'And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.' Four generations: Paul → Timothy → reliable people → others. This is the mathematics of disciple-making: if every disciple makes one disciple per year who makes one disciple per year, in 30 years you have over a billion disciples. Addition (programs) cannot keep up with multiplication (disciples making disciples). The Great Commission is accomplished through multiplication, not just addition." },
  { id: "mul2", title: "Every Disciple a Discipler", ref: "Matthew 28:19; Ephesians 4:11-12",
    body: "Discipleship is not the exclusive work of professional ministers. Ephesians 4:11-12 gives pastors and teachers to the church 'to equip his people for works of service' — the ministry is the people's work, not the pastor's specialty. A church that does discipleship is one where every mature Christian is intentionally investing in a less mature Christian. The pastor who does all the discipling has misread Ephesians 4; the congregation that leaves discipleship to the pastor has abdicated the Great Commission." },
  { id: "mul3", title: "Stages of Multiplication", ref: "1 Corinthians 3:6; Luke 10:1-20",
    body: "Disciples move through stages: (1) I do, you watch — the discipler models; (2) I do, you help — the disciple assists; (3) You do, I help — the disciple takes the lead with support; (4) You do, I watch — the disciple has become the model; (5) You do, I release — the disciple goes on to disciple others. Jesus used this progression with his disciples: they watched him teach and heal, then assisted, then were sent out in pairs (Luke 10), then sent independently at the Great Commission." },
];

const PLAN_STEPS = [
  { step: "01", color: BLUE, title: "Identify where you are", body: "New believer needing a discipler? Growing Christian needing a peer accountability group? Mature believer who needs to start discipling someone? Each stage has different needs and responsibilities." },
  { step: "02", color: GREEN, title: "Find or be a discipler", body: "Ask your pastor for a recommendation, or look for the most spiritually mature person in your community who you trust. If you are mature, ask God: who should I disciple? And ask someone." },
  { step: "03", color: TEAL, title: "Commit to a regular meeting", body: "Weekly is ideal. Choose a time that is protected — not 'whenever' but a specific recurring slot. The relationship that is never regularly scheduled is the one that never happens." },
  { step: "04", color: GOLD, title: "Have a clear structure", body: "What will you study? What accountability questions will you use? What is the goal for this season of discipleship? Structure prevents aimless conversation and provides accountability." },
  { step: "05", color: PURPLE, title: "Be honest", body: "Discipleship only works with honesty. If you are performing spiritual health rather than sharing real struggles, the relationship is not doing its work. Start with one honest admission and build from there." },
  { step: "06", color: RED, title: "Pass it on", body: "As you grow, start investing in someone less mature. Don't wait until you feel 'ready.' You don't need to have arrived — you need to be walking ahead of the person you're discipling and pointing them toward Christ." },
];

const VIDEOS = [
  { videoId: "FPdnPSGOo6o", title: "What Is Discipleship? — Dallas Willard" },
  { videoId: "JiqYGmZ1sSQ", title: "The Cost of Discipleship — Dietrich Bonhoeffer" },
  { videoId: "qN7RU9FIWRA", title: "How to Make Disciples — Mike Breen" },
  { videoId: "YWcnDnifmXI", title: "Multiplication Not Addition — Francis Chan" },
  { videoId: "6S3IqEiNXG0", title: "Discipleship in Practice — Mark Dever" },
];

export default function DiscipleshipGuide() {
  const [tab, setTab] = useLocalStorage("vine_discip_tab", "overview");
  const [theolOpen, setTheolOpen] = useLocalStorage("vine_discip_theol", "");
  const [costOpen, setCostOpen] = useLocalStorage("vine_discip_cost", "");
  const [multOpen, setMultOpen] = useLocalStorage("vine_discip_mult", "");
  const [journal, setJournal] = useLocalStorage("vine_discip_journal", "");

  const card = (body: React.ReactNode) => (
    <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>{body}</div>
  );

  const accordion = (
    items: { id: string; title: string; ref?: string; body: string }[],
    openKey: string,
    setOpen: (v: string) => void
  ) => items.map((it) => (
    <div key={it.id} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(openKey === it.id ? "" : it.id)}
        style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: openKey === it.id ? "rgba(107,79,187,0.07)" : "transparent", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, color: TEXT, fontSize: "0.95rem" }}>{it.title}</span>
          {it.ref && <span style={{ color: MUTED, fontSize: "0.78rem", marginLeft: 12 }}>{it.ref}</span>}
        </div>
        <span style={{ color: MUTED, fontSize: "1.1rem" }}>{openKey === it.id ? "−" : "+"}</span>
      </button>
      {openKey === it.id && (
        <div style={{ padding: "0 1.25rem 1.25rem", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, marginTop: "1rem" }}>{it.body}</p>
        </div>
      )}
    </div>
  ));

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.25)`, borderRadius: 20, padding: "0.35rem 1rem", fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: "1rem" }}>
            MINISTRY · DISCIPLESHIP
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Discipleship: A Comprehensive Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            The Great Commission is not 'win souls' but 'make disciples.' Discipleship is the core activity of the church — lifelong formation through relationship, accountability, and intentional investment. A comprehensive guide to being and making disciples.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? "rgba(107,79,187,0.12)" : "transparent", color: tab === t.id ? PURPLE : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ background: "rgba(107,79,187,0.07)", border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Why Discipleship Is the Mission</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                The Great Commission (Matthew 28:18-20) has one imperative: make disciples. Going, baptizing, and teaching are participial — they describe how. The church exists to make disciples who make disciples until the whole earth is filled with the knowledge of the glory of God. Everything else — worship services, programs, buildings, budgets — is scaffolding in the service of this one mission.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                Dietrich Bonhoeffer: <em>"When Christ calls a man, he bids him come and die."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: PURPLE, icon: "🎯", title: "The Mission", body: "Discipleship is the Great Commission — not one program but the core activity of the church in the world." },
                { color: BLUE, icon: "👥", title: "Life on Life", body: "Discipleship is relational imitation, not classroom instruction. You cannot disciple someone you don't know." },
                { color: GREEN, icon: "🌱", title: "Multiplication", body: "Every disciple making disciples — this is the mathematics of the Great Commission, not programs or events." },
                { color: GOLD, icon: "💰", title: "Costly", body: "Bonhoeffer: cheap grace is the enemy of the church. Discipleship costs everything — and is worth everything." },
              ].map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                  <div style={{ fontWeight: 800, color: g.color, marginBottom: "0.4rem" }}>{g.title}</div>
                  <p style={{ color: MUTED, fontSize: "0.84rem", lineHeight: 1.6 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "theology" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Theology of Discipleship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>What does Jesus mean by 'make disciples'? How does the Great Commission define the church's mission? What is the role of the Spirit in formation? And why does the Western church produce so many converts but so few disciples?</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(THEOLOGY_ITEMS, theolOpen, setTheolOpen)}</div>
          </div>
        )}

        {tab === "cost" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Cost of Discipleship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Dietrich Bonhoeffer's diagnosis of the 20th-century church — 'cheap grace' — is more relevant than ever. Jesus never minimized the demands of following him.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(COST_ITEMS, costOpen, setCostOpen)}</div>
          </div>
        )}

        {tab === "oneonone" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>One-on-One Discipleship</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The most effective and most biblical model of discipleship: a more mature believer intentionally investing in a less mature one. The Paul-Timothy model in the New Testament.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {ONEONONE_ITEMS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "small-group" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Discipleship in Small Groups</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The small group is the primary structure for corporate discipleship in most churches — but many small groups fail to make disciples. What makes a small group a discipleship community rather than a social group with Bible study?</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {SMALL_GROUP_POINTS.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <h3 style={{ fontWeight: 800, color: p.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "multiplying" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Multiplying Disciples</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>2 Timothy 2:2 is the mathematics of the Great Commission — disciples who make disciples who make disciples. Multiplication, not just addition, is how the mission is accomplished.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(MULTIPLY_ITEMS, multOpen, setMultOpen)}</div>
          </div>
        )}

        {tab === "plan" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Your Discipleship Plan</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>A six-step framework for starting or deepening your discipleship practice — whether you're looking for a discipler or thinking about who to invest in.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {PLAN_STEPS.map((s) => (
                <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontWeight: 900, fontSize: "1.5rem", color: s.color, opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{s.step}</span>
                  <div>
                    <h3 style={{ fontWeight: 800, color: s.color, fontSize: "0.95rem", marginBottom: "0.4rem" }}>{s.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.65 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            {card(<div>
              <h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>Am I currently being discipled? Am I discipling anyone? If not, what is the barrier? Name one specific person you could reach out to this week — either to ask to disciple you or to invite into a discipleship relationship. What is one area of your life where you need more accountability and formation?</p>
              <textarea value={journal} onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", color: TEXT, fontSize: "0.9rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
              {journal && <p style={{ color: GREEN, fontSize: "0.78rem", marginTop: "0.5rem" }}>Saved automatically.</p>}
            </div>)}
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on discipleship, disciple-making, and the cost of following Jesus.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <p style={{ fontWeight: 700, color: TEXT, fontSize: "0.9rem" }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
