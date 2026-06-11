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
  { id: "theology", label: "Theology of Preaching" },
  { id: "methods", label: "Methods" },
  { id: "structure", label: "Sermon Structure" },
  { id: "application", label: "Application" },
  { id: "delivery", label: "Delivery" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "listening", label: "Listening Well" },
  { id: "videos", label: "Videos" },
];

const THEOLOGY_ITEMS = [
  { id: "t1", title: "Preaching as Divine Event", ref: "Romans 10:14-17; 1 Corinthians 1:21",
    body: "Paul's rhetorical question — 'How can they hear without someone preaching to them?' (Romans 10:14) — frames preaching as the normative means by which saving faith is born. 'God was pleased through the foolishness of what was preached to save those who believe' (1 Corinthians 1:21). The 'foolishness' is deliberate: preaching should not work by human standards of persuasion — it works because God has attached his Spirit to the proclamation of his word. This is the most counter-cultural claim in homiletics: the sermon is not primarily a communication event but a divine event." },
  { id: "t2", title: "The Word of God in Human Words", ref: "2 Timothy 4:2; 1 Thessalonians 2:13",
    body: "Paul commands Timothy: 'Preach the Word' (2 Timothy 4:2). He thanks the Thessalonians because when they heard Paul's preaching, they received it 'not as a human word, but as it actually is, the word of God, which is indeed at work in you who believe' (1 Thessalonians 2:13). This is the extraordinary claim of expository preaching: when the preacher faithfully expounds Scripture, the congregation hears not merely a human interpretation but the word of God itself. The authority belongs to the text, not the preacher. The preacher is a herald, not an oracle." },
  { id: "t3", title: "The Spirit and Preaching", ref: "1 Corinthians 2:1-5; Acts 2:37",
    body: "Paul deliberately avoided eloquence and philosophical persuasion at Corinth 'so that your faith might not rest on human wisdom, but on God's power' (1 Corinthians 2:5). This does not mean sermons should be poorly prepared or dull — Paul was a formidable intellect who prepared carefully. It means the outcome — conviction, transformation, saving faith — is the work of the Spirit, not the rhetorical skill of the preacher. The Spirit honors the word (Isaiah 55:11). At Pentecost, Peter's sermon was not particularly elegant, but 'they were cut to the heart' (Acts 2:37) — the Spirit applied it." },
  { id: "t4", title: "Preaching and the Church", ref: "Nehemiah 8:8; Ephesians 4:11-12",
    body: "Ezra reads the law and the Levites 'gave the meaning, so that the people understood what was being read' (Nehemiah 8:8) — a description of expository preaching that predates the NT. Ephesians 4:11-12 names pastors-teachers as gifts to the church 'to equip his people for works of service, so that the body of Christ may be built up.' Preaching is not a performance for the passive congregation but an equipping of the whole people of God for ministry in the world. The sermon that produces consumers is failing; the sermon that produces disciples is succeeding." },
];

const METHODS_DATA = [
  { color: BLUE, method: "Expository Preaching", desc: "The preacher takes a text of Scripture and expounds it — explaining what it means in its original context and applying it to the congregation. The text determines the structure, theme, and application of the sermon. Expository preaching is the dominant form in Reformed and conservative evangelical traditions. Advocates: John Stott, Alistair Begg, Mark Dever, John MacArthur. Strength: the congregation hears the whole counsel of God over time; the preacher is constrained by the text rather than personal hobby horses. Challenge: requires significant exegetical work; less flexible for immediate pastoral needs." },
  { color: GREEN, method: "Topical Preaching", desc: "The preacher selects a topic or question and builds a sermon by assembling relevant Scripture passages around it. Common for sermon series on marriage, finances, spiritual warfare, etc. Most preachers use this occasionally. Strength: directly addresses perceived congregational needs; can be highly accessible. Risk: the preacher can use texts out of context, make the Bible say what they want to say, and avoid texts that challenge their pre-selected conclusions. The solution is careful exegesis even in topical preaching — the texts must actually mean what the sermon claims." },
  { color: TEAL, method: "Narrative/Biographical Preaching", desc: "Focuses on biblical narratives or characters — preaching through the life of Abraham, or the story of Ruth. Strong in OT narrative literature. Eugene Lowry's 'narrative arc' for sermons: conflict → complication → resolution (the gospel). Danger: moralizing — turning biblical heroes into examples to follow rather than pointing to the Christ who fulfills and corrects them. The solution: always read narrative through the redemptive-historical lens. The story of David is not primarily about being a man after God's own heart — it is about the messianic King who would fulfill what David points to." },
  { color: GOLD, method: "Christ-Centered/Redemptive-Historical Preaching", desc: "Every sermon must find its way to Christ and the gospel. Luke 24:27 — Jesus 'beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself.' This is not forced allegorizing or reading Jesus mechanically into every text. It is reading all Scripture within the redemptive arc that culminates in Christ. Tim Keller, Bryan Chapell, and Edmund Clowney are the leading voices for this approach. Every text has both an original meaning and a role in the larger story — the preacher honors both." },
];

const STRUCTURE_STEPS = [
  { step: "01", color: BLUE, title: "Select and Exegete the Text", body: "Determine the passage. Study it carefully: original language (if possible), historical context, literary context, structure, and main point. What is the author saying to his original audience? What is the theological claim?" },
  { step: "02", color: TEAL, title: "Identify the Big Idea", body: "Every sermon needs one main idea — a declarative sentence capturing the text's central claim. Haddon Robinson: 'A sermon should be a bullet, not buckshot.' The big idea shapes everything else — introduction, main points, application, conclusion." },
  { step: "03", color: GREEN, title: "Structure the Argument", body: "The main points should flow from the text's own structure. They should explain, prove, or apply the big idea. Classic structures: deductive (state main point, support it), inductive (move from particulars to conclusion), narrative (follow the story structure)." },
  { step: "04", color: PURPLE, title: "Write the Introduction", body: "The introduction must: create interest (why does this text/topic matter?), establish relevance (why should I care?), and set up the big idea. Common approaches: start with a question, an illustration, a surprising claim, or a need the text addresses." },
  { step: "05", color: GOLD, title: "Develop Applications", body: "Application answers: how does this text change how I think, feel, or live? Application should be specific, not generic ('pray more' is not application — 'schedule 15 minutes at 7am for Scripture and prayer this week' is). Bryan Chapell: application must address the 'FCF' — the Fallen Condition Focus that the text addresses." },
  { step: "06", color: RED, title: "Write the Conclusion", body: "The conclusion should call for response. It should summarize the big idea, make a final appeal, and land on the gospel or on Christ. Never introduce new material in the conclusion. The ending should be as strong as the beginning. End decisively." },
];

const APPLICATION_ITEMS = [
  { id: "app1", title: "The Imperative Requires the Indicative", ref: "Romans 6:11-12; Ephesians 5:8",
    body: "The most common preaching mistake is giving commands (imperatives) without grounding them in what God has done (indicatives). 'Stop sinning because God told you to' produces exhaustion. 'You have died to sin — count yourself dead to sin' (Romans 6:11-12) produces gospel-driven transformation. Every application should be rooted in an indicative — a statement of what God has done, who the believer already is, or what Christ has accomplished. The imperative must follow and flow from the indicative, not precede it." },
  { id: "app2", title: "Application to the Whole Person", ref: "Romans 12:2; Proverbs 4:23",
    body: "Application addresses the whole person: intellect (what must I believe differently?), will (what must I do differently?), affection (what must I love/desire differently?), relationships (how does this change how I relate to others?). Bryan Chapell's FCF framework identifies which aspect of human fallenness the text addresses — and application targets that specific fallenness. Generic application produces generic transformation. Specific, diagnosis-shaped application produces real change." },
  { id: "app3", title: "Application Is Not Moralism", ref: "Galatians 3:3; Hebrews 12:2",
    body: "Moralistic preaching gives rules without roots — 'be like Daniel,' 'be like David,' 'be more faithful.' This produces shame in the weak and pride in the strong, but not transformation. Every application must either ground the imperative in the gospel (you can do this because Christ has done that) or show how failure to obey is remedied by the gospel (return to Christ, not to trying harder). Timothy Keller: you must preach the gospel to Christians, not just tell them to do better." },
  { id: "app4", title: "Specific and Concrete", ref: "James 1:22-25",
    body: "James 1:22 — 'Do not merely listen to the word, and so deceive yourselves. Do what it says.' The application that produces self-deception is vague and non-binding. Concrete application: who specifically should you call? What specifically should you stop watching? What specifically should you confess to your spouse? The preacher who leaves application abstract gives the congregation permission to remain unchanged. The preacher who names specifics takes a risk — but that risk is the work." },
];

const DELIVERY_POINTS = [
  { color: BLUE, title: "Clarity Over Cleverness", body: "The goal of delivery is not to impress but to be understood. John Stott: 'The clearest possible presentation of the Scripture's meaning and application.' Avoid jargon, overly complex sentence structures, and sentences that are too long to track. If the congregation cannot follow the argument, the best exegesis in the world has no effect." },
  { color: GREEN, title: "Conviction", body: "Augustine: 'No one preaches what he does not believe.' The congregation will sense whether the preacher is giving a lecture or bearing witness. The preacher's own wrestling with the text, their experience of the grace of the passage, their confession and need — all of these come through. The preacher preaches first to themselves." },
  { color: GOLD, title: "Eye Contact and Presence", body: "Read from notes minimally. Full engagement with the congregation — eye contact, presence, responsiveness — communicates that you are speaking to people, not performing a task. The sermon is a conversation in which one party is talking, but it requires genuine relational presence." },
  { color: TEAL, title: "Pace and Pausing", body: "Most preachers speak too fast, especially under anxiety. Deliberate pausing after key statements allows the congregation to absorb what was said. The silence is not dead air — it is the space where the Spirit applies the word. Important statements need time to land." },
];

const MISTAKES_DATA = [
  { color: RED, title: "Neglecting Exegesis", body: "The sermon that reads its ideas into the text rather than drawing them from it. The preacher decided what to say before opening the Bible, then found 'supporting' verses. This is the most fundamental betrayal of expository preaching — the text becomes decoration for the preacher's ideas rather than the source of them." },
  { color: PURPLE, title: "Failing to Get to Christ", body: "A sermon that ends with moral application — 'be more like the disciples,' 'learn from Peter's faith' — without anchoring it in the work of Christ produces moralism, not transformation. Every sermon that ends with 'do better' without showing why in the gospel or how through grace is an incomplete sermon." },
  { color: GOLD, title: "Too Many Points, Too Thin", body: "Covering seven points in one sermon means none are developed adequately. A single point developed with depth — exegetical evidence, theological weight, illustrative material, and specific application — is worth more than seven superficial observations. Better to leave the congregation with one thing they remember and can apply." },
  { color: BLUE, title: "Weak Application", body: "The exegetically rigorous sermon that ends with vague application ('let us pray more,' 'be encouraged') wastes the congregational good will the careful exposition built. Application is the payoff of the exegetical investment. Spend as much time on application as on exegesis." },
  { color: TEAL, title: "Preaching to Listeners, Not to Selves", body: "The preacher who points outward — 'some of you need to hear this' — rather than inward — 'this convicted me when I studied it' — loses the congregation's trust. The most powerful preaching is confessional: the preacher stands alongside the congregation under the text's claim, not above them as one who has already arrived." },
];

const LISTENING_POINTS = [
  { color: PURPLE, title: "Come Prepared", body: "Read the text before the sermon. Pray for the Spirit's illumination. Arrive ready to receive, not merely to evaluate. James 1:21: 'humbly accept the word planted in you, which can save you.'" },
  { color: GREEN, title: "Take Notes", body: "Writing forces active processing. Note the main point, one new insight, and one specific application. After the sermon, review your notes — what do you want to do differently this week?" },
  { color: GOLD, title: "Ask What You Heard, Not What You Like", body: "The consumer mindset evaluates: 'Did I enjoy that? Was the speaker engaging?' The disciple asks: 'Did I hear God? What is he saying to me through this text?' The sermon that disturbs you may be the one God is using most." },
  { color: TEAL, title: "Apply It the Same Day", body: "The forgetting curve is steep. If you are convicted about something specific, take the smallest concrete action the same day — one phone call, one confession, one habit change. The sermon that produces no action in 24 hours rarely produces action at all." },
];

const VIDEOS = [
  { videoId: "x1-Q8lXVzrE", title: "How to Preach the Gospel Every Week — Tim Keller" },
  { videoId: "7ZbqKnhpBp8", title: "Expository Preaching — John Stott" },
  { videoId: "1bhRknhXUm0", title: "The Theology of Preaching — D.A. Carson" },
  { videoId: "g_9G8RBRzTE", title: "Christ-Centered Preaching — Bryan Chapell" },
  { videoId: "m3oBNrm7Pjg", title: "Preaching with Conviction — Charles Spurgeon" },
];

export default function PreachingGuide() {
  const [tab, setTab] = useLocalStorage("vine_preach_tab", "overview");
  const [theolOpen, setTheolOpen] = useLocalStorage("vine_preach_theol", "");
  const [appOpen, setAppOpen] = useLocalStorage("vine_preach_app", "");
  const [journal, setJournal] = useLocalStorage("vine_preach_journal", "");

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
            MINISTRY · PREACHING & HOMILETICS
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Biblical Preaching: A Comprehensive Guide
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Preaching is God's chosen means to save and sanctify his people. Whether you are a preacher, a student of preaching, or someone who wants to hear sermons well — this guide covers the theology, method, and practice of biblical proclamation.
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
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem" }}>The Centrality of Preaching</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                The Reformation was a preaching revival. The megachurch movement is built on preaching. Every great awakening in church history has been characterized by powerful proclamation of the word. Preaching is not one program among many in the church — it is the nerve center of Christian community and the primary means by which God has chosen to regenerate, sanctify, and equip his people.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                Charles Spurgeon: <em>"I would rather speak five words out of this book than fifty thousand words of the philosophers. If we want revivals, we must revive our reverence for the Word of God."</em>
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {[{ color: PURPLE, icon: "📖", title: "Expository", body: "The text determines the sermon's content, structure, and application. The preacher serves the word." },
                { color: BLUE, icon: "✝️", title: "Christ-Centered", body: "Every text finds its fulfillment in Christ. Moralism without the gospel is not preaching." },
                { color: GREEN, icon: "⚡", title: "Spirit-Empowered", body: "The Spirit attaches himself to the word proclaimed. Eloquence is secondary to Spirit-anointing." },
                { color: GOLD, icon: "🎯", title: "Applicatory", body: "Preaching must change how people live. Exposition without application is incomplete." },
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
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>The Theology of Preaching</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Why does preaching matter so much? Because it is not merely a human communication act — it is the means God has chosen to apply his word to human hearts through his Spirit.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(THEOLOGY_ITEMS, theolOpen, setTheolOpen)}</div>
          </div>
        )}

        {tab === "methods" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Methods of Preaching</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Different approaches to sermon preparation and delivery — each with legitimate uses and characteristic dangers. The goal is not methodological purity but faithful exposition and application of Scripture.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {METHODS_DATA.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <h3 style={{ fontWeight: 800, color: m.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{m.method}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "structure" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Sermon Structure: Step by Step</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>A practical framework for moving from biblical text to finished sermon. Not a rigid formula but a reliable scaffold for preachers at any level.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {STRUCTURE_STEPS.map((s) => (
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

        {tab === "application" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Application</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Application is where the sermon becomes dangerous — it is the moment when the word of God makes a claim on specific human lives. Most preaching is weakest here.</p></div>)}
            <div style={{ marginTop: "1.5rem" }}>{accordion(APPLICATION_ITEMS, appOpen, setAppOpen)}</div>
          </div>
        )}

        {tab === "delivery" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Delivery</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Delivery matters because preaching is an oral, relational act — not a written essay read aloud. The same truth, delivered with different presence and clarity, lands very differently.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {DELIVERY_POINTS.map((d, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${d.color}` }}>
                  <h3 style={{ fontWeight: 800, color: d.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{d.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "mistakes" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Common Preaching Mistakes</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>The most frequent and most serious failures in Christian preaching — for preachers to avoid and congregations to gently (or firmly) notice.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {MISTAKES_DATA.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${m.color}` }}>
                  <h3 style={{ fontWeight: 800, color: m.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{m.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "listening" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>How to Listen to Sermons Well</h2><p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>Preaching is not a solo act — it requires an engaged congregation. How you receive the word matters. The congregation's posture of faith, prayer, and openness is part of what the Spirit uses.</p></div>)}
            <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
              {LISTENING_POINTS.map((l, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${l.color}` }}>
                  <h3 style={{ fontWeight: 800, color: l.color, fontSize: "0.95rem", marginBottom: "0.6rem" }}>{l.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7 }}>{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            {card(<div><h2 style={{ fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Video Teaching</h2><p style={{ color: MUTED, fontSize: "0.88rem" }}>Recommended videos on the theology and practice of preaching.</p></div>)}
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
