"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

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
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "genre", label: "Genre" },
  { id: "context", label: "Context" },
  { id: "meaning", label: "Original Meaning" },
  { id: "application", label: "Application" },
  { id: "tradition", label: "Tradition" },
  { id: "errors", label: "Common Errors" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const HERMENEUTIC_PRINCIPLES = [
  {
    step: "1",
    title: "Observation",
    question: "What does it say?",
    desc: "Read carefully. Notice details, repeated words, structure, and what the text actually says before drawing conclusions.",
    color: BLUE,
  },
  {
    step: "2",
    title: "Interpretation",
    question: "What does it mean?",
    desc: "Understand the original meaning in its historical, literary, and canonical context. Ask what the author intended for the original audience.",
    color: GREEN,
  },
  {
    step: "3",
    title: "Application",
    question: "What does it mean for us?",
    desc: "Cross the bridge from ancient context to today. What timeless principle does this text teach? How does it apply to your life and community?",
    color: GOLD,
  },
];

const GENRES = [
  {
    name: "Narrative",
    examples: "Genesis–Esther; Gospels; Acts",
    principles: [
      "Identify the narrator's point of view — what is he affirming?",
      "Descriptive passages (what happened) are not necessarily prescriptive (what should always happen)",
      "Characters are not always models — the text's implied evaluation may be negative",
      "Look for the theological point, not just the story",
    ],
    color: TEAL,
  },
  {
    name: "Law",
    examples: "Exodus 20–23; Leviticus; Deuteronomy",
    principles: [
      "Distinguish moral (universal), civil (Israelite state), and ceremonial (temple/sacrifice) law",
      "The Mosaic covenant was made with Israel — not all commands bind Gentiles directly",
      "Moral law (e.g., Ten Commandments) reflects God's unchanging character",
      "Christ's work fulfills ceremonial law; the underlying moral principles remain",
    ],
    color: GREEN,
  },
  {
    name: "Poetry / Psalms",
    examples: "Psalms; Song of Songs; Lamentations",
    principles: [
      "Hebrew poetry uses parallelism, not rhyme — the second line echoes or extends the first",
      "Hyperbole is common and expected; don't over-literalize poetic language",
      "Psalms express the full range of human emotion to God — lament is as legitimate as praise",
      "Messianic psalms have both a historical meaning and a fulfillment in Christ",
    ],
    color: PURPLE,
  },
  {
    name: "Wisdom",
    examples: "Proverbs; Job; Ecclesiastes",
    principles: [
      "Proverbs are general truths, not guarantees — they describe the pattern, not every case",
      "Job and Ecclesiastes present perspectives that need to be heard in full context",
      "Wisdom literature addresses universal human experience across all cultures",
      "The fear of the Lord is the framework for all biblical wisdom",
    ],
    color: GOLD,
  },
  {
    name: "Prophecy",
    examples: "Isaiah; Jeremiah; Minor Prophets",
    principles: [
      "Most OT prophecy was forthtelling (preaching to Israel) before foretelling (prediction)",
      "Prophetic imagery is often symbolic, not wooden-literal (e.g., Ezekiel's visions)",
      "Near and far fulfillments are common — a prophecy may apply to Israel and to Christ",
      "Interpret prophetic passages in light of NT fulfillment",
    ],
    color: "#EC4899",
  },
  {
    name: "Epistles",
    examples: "Romans–Jude",
    principles: [
      "These are occasional letters — written to specific people with specific problems",
      "Understand the situation the author is addressing before applying the solution",
      "Theological sections (indicative) ground ethical commands (imperative)",
      "Cultural elements (greetings, clothes, hair) should be distinguished from timeless principles",
    ],
    color: BLUE,
  },
  {
    name: "Apocalyptic",
    examples: "Daniel; Revelation",
    principles: [
      "Apocalyptic uses symbolic numbers, creatures, and cosmic imagery — these require careful interpretation",
      "The genre was written to encourage persecuted believers, not primarily to predict our era",
      "Interpret symbols in light of the OT background they draw from",
      "Four main schools: futurist, preterist, historicist, idealist — understand each before choosing",
    ],
    color: "#EF4444",
  },
];

const CONTEXT_LEVELS = [
  {
    level: "Immediate Context",
    desc: "The surrounding verses and paragraphs. What comes before and after? A text without a context is a pretext — the sentence belongs to a paragraph.",
    color: GREEN,
  },
  {
    level: "Book Context",
    desc: "What is the book's overall argument and structure? Where does this passage fit in the flow? The author wrote this as one part of a larger whole.",
    color: TEAL,
  },
  {
    level: "Canonical Context",
    desc: "How does this text relate to the rest of Scripture? The Bible tells one unified story of redemption. Later revelation clarifies earlier revelation.",
    color: PURPLE,
  },
  {
    level: "Historical Context",
    desc: "Who wrote it? To whom? When? What was happening? The text had a meaning for its original recipients before it has a meaning for us.",
    color: GOLD,
  },
  {
    level: "Cultural Context",
    desc: "What cultural assumptions or practices are in the background? Some commands are grounded in trans-cultural principles; others address culture-specific situations.",
    color: BLUE,
  },
];

const ERRORS = [
  {
    error: "Proof-texting",
    desc: "Isolating a verse from context to support a predetermined conclusion. The verse becomes a weapon, not a window. Fix: always read the paragraph, not just the sentence.",
    severity: "Very Common",
    color: "#EF4444",
  },
  {
    error: "Allegorizing",
    desc: "Finding hidden spiritual meaning in every detail of narrative (e.g., the five smooth stones David picked = five virtues). Fix: ask what the author intended, not what seems spiritually meaningful.",
    severity: "Common",
    color: "#F97316",
  },
  {
    error: "Moralizing",
    desc: "Reading every narrative as a moral example to imitate. David killed Goliath, so you should be brave! Fix: many narratives point to God's acts, not human virtue. Ask: what is God doing here?",
    severity: "Very Common",
    color: "#EF4444",
  },
  {
    error: "Ignoring Genre",
    desc: "Treating poetry as propositional statements, prophecy as newspaper predictions, proverbs as guarantees. Every genre has its own rules of communication.",
    severity: "Common",
    color: "#F97316",
  },
  {
    error: "Eisegesis",
    desc: "Reading meaning INTO the text rather than drawing meaning OUT of it (exegesis). Often driven by contemporary concerns being projected backward onto Scripture.",
    severity: "Very Common",
    color: "#EF4444",
  },
  {
    error: "Hyper-literalism",
    desc: "Demanding a wooden literal reading where the author clearly uses figurative language. Jesus is not a door made of wood; God does not have literal feathers (Ps 91:4).",
    severity: "Moderate",
    color: GOLD,
  },
  {
    error: "Under-literalism",
    desc: "Spiritualizing or metaphorizing what the author intended literally. When prophecy predicts a physical return or resurrection, it means that — not a spiritual metaphor.",
    severity: "Moderate",
    color: GOLD,
  },
  {
    error: "Cultural Flattening",
    desc: "Treating all cultural elements as timeless (everything is always binding) or all timeless principles as culturally relative (nothing is ever binding). The text requires distinguishing the principle from its cultural expression.",
    severity: "Common",
    color: "#F97316",
  },
];

const TRADITION_POINTS = [
  {
    title: "Scripture Is the Final Authority",
    desc: "The Reformation principle of sola Scriptura does not mean Scripture alone without tradition — it means Scripture above tradition. Tradition is a servant of the text, not its equal or superior.",
    color: GREEN,
  },
  {
    title: "The Great Tradition as a Check",
    desc: "If your interpretation was unknown to the entire church for 2,000 years, that is a strong warning sign. The consensus of orthodox teaching across history has weight — not as infallible, but as a significant corrective to novelty.",
    color: PURPLE,
  },
  {
    title: "Creeds and Confessions",
    desc: "The ecumenical creeds (Nicene, Apostles', Chalcedonian) represent the church's settled interpretation of the Bible's core claims. Reformed/Lutheran/Baptist confessions further codify doctrinal consensus. These are not equal to Scripture but are valuable interpretive guides.",
    color: BLUE,
  },
  {
    title: "The Rule of Faith",
    desc: "The early church's 'rule of faith' was a summary of the gospel narrative used to guide interpretation. No text should be interpreted in a way that contradicts this redemptive-historical storyline: creation, fall, redemption, new creation.",
    color: TEAL,
  },
  {
    title: "Theological Interpretation",
    desc: "Modern biblical studies often focused on historical meaning only. Theological interpretation recovers reading Scripture as the church's canon — asking what it means for Christian doctrine, practice, and worship, not merely what it meant originally.",
    color: GOLD,
  },
];

const MEANING_TOOLS = [
  {
    tool: "Authorial Intent",
    desc: "The primary meaning of a text is what the human author intended to communicate to the original audience. Meaning is not 'what it means to me' — that is application, not interpretation.",
  },
  {
    tool: "Word Studies",
    desc: "The biblical languages (Hebrew, Greek) carry nuances that translations flatten. Word studies in their context illuminate meaning. But: a word's meaning is determined by usage in context, not etymology.",
  },
  {
    tool: "Grammatical Analysis",
    desc: "Syntax matters. Who is the subject? What is the verb tense? What does the conjunction connect? Grammar constrains interpretation — many debates are ultimately grammatical.",
  },
  {
    tool: "Intertextuality",
    desc: "Biblical authors quote, allude to, and echo earlier Scripture. Finding these connections illuminates meaning. The NT reads the OT as fulfilled in Christ — that hermeneutic is itself part of the text.",
  },
  {
    tool: "Redemptive-Historical Reading",
    desc: "Every text exists somewhere in the Bible's unfolding story of redemption. Ask: where does this fit in the story? How does it relate to the covenant, the law, the prophets, Christ, the church, the new creation?",
  },
];

const VIDEOS = [
  {
    videoId: "6UdUU7CImxw",
    title: "How to Interpret the Bible",
    channel: "The Bible Project",
  },
  {
    videoId: "nMNs7Gr3iJI",
    title: "Biblical Hermeneutics — Lecture",
    channel: "Gordon-Conwell Seminary",
  },
  {
    videoId: "z-jUZ5XHYLE",
    title: "Inductive Bible Study Method",
    channel: "Precept Ministries",
  },
  {
    videoId: "7bU8CVRyXrY",
    title: "Scripture Interprets Scripture",
    channel: "Ligonier Ministries",
  },
];

export default function HermeneuticsGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_herm_tab", "overview");
  const [openGenre, setOpenGenre] = useLocalStorage("vine_herm_genre", "");
  const [openErr, setOpenErr] = useLocalStorage("vine_herm_err", "");
  const [journal, setJournal] = useLocalStorage("vine_herm_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>📖</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Hermeneutics</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            The art and science of biblical interpretation. How to read the Bible well — understanding genre, context, original meaning, and right application across the centuries.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>What Is Hermeneutics?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1rem" }}>Hermeneutics is the theory and practice of interpretation. Biblical hermeneutics asks: how do we correctly understand what the Bible means? It is not about making the Bible say what we want — it is about disciplined, humble listening to what it actually says.</p>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The word comes from the Greek <em>hermeneuein</em> (to interpret, translate, explain) — the same root as Hermes, the messenger of the gods. The goal is faithful transmission: what did the author mean to communicate, and what does that mean for us today?</p>
            </div>

            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Basic Steps</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {HERMENEUTIC_PRINCIPLES.map(p => (
                <div key={p.step} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderTop: `4px solid ${p.color}` }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: p.color, marginBottom: "0.25rem" }}>{p.step}</div>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.25rem" }}>{p.title}</div>
                  <div style={{ fontStyle: "italic", color: TEXT, marginBottom: "0.5rem", fontSize: "0.9rem" }}>{p.question}</div>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>The Grammatical-Historical Method</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>The mainstream Protestant approach to interpretation is the grammatical-historical method: determine the meaning of a text by careful analysis of its grammar and historical context. The author&apos;s intended meaning — not allegorical or reader-derived meaning — is the norm. This is sometimes called &ldquo;exegesis&rdquo; (drawing meaning out) as opposed to &ldquo;eisegesis&rdquo; (reading meaning in).</p>
            </div>
          </div>
        )}

        {/* GENRE */}
        {tab === "genre" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Why Genre Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Bible is a library, not a single book. It contains narrative, law, poetry, wisdom, prophecy, epistle, and apocalyptic — each with its own rules for communication. Reading a poem like a legal contract or a proverb like an absolute guarantee is a category error. Correct interpretation starts with genre recognition.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {GENRES.map((g, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenGenre(openGenre === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: g.color }}>{g.name}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{g.examples}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openGenre === String(i) ? "−" : "+"}</span>
                  </button>
                  {openGenre === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem" }}>
                      <ul style={{ color: MUTED, lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
                        {g.principles.map((p, j) => <li key={j}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEXT */}
        {tab === "context" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>Context Is Everything</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The most common interpretive error is ripping a text out of context. Every text exists in multiple contexts simultaneously — immediate, book, canonical, historical, and cultural. Faithful interpretation attends to all of them.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTEXT_LEVELS.map(c => (
                <div key={c.level} style={{ background: CARD, border: `1px solid ${c.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${c.color}` }}>
                  <div style={{ fontWeight: 700, color: c.color, marginBottom: "0.4rem" }}>{c.level}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <div style={{ fontWeight: 700, color: GOLD, marginBottom: "0.5rem" }}>Scripture Interprets Scripture</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>The Reformers championed the principle that obscure passages should be interpreted in light of clearer ones on the same subject. The Bible is its own best commentary. A single difficult text does not overturn dozens of clear texts — and a text interpreted in isolation from the whole canon will almost always be misread.</p>
            </div>
          </div>
        )}

        {/* MEANING */}
        {tab === "meaning" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>Determining Original Meaning</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The original meaning is not the only meaning (Christ fulfills earlier texts in ways the human author may not have fully grasped), but it is always the starting point. Before asking &ldquo;what does this mean for me,&rdquo; we must ask &ldquo;what did this mean then.&rdquo;</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {MEANING_TOOLS.map(m => (
                <div key={m.tool} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, color: BLUE, marginBottom: "0.4rem" }}>{m.tool}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Bridging to Application</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Application is not the same as interpretation, but it is the goal of interpretation. The ancient text must be brought across the cultural, historical, and linguistic gap into our context. This requires identifying the timeless principle beneath the culture-specific expression.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "Find the Principle",
                  desc: "Behind every cultural command is a trans-cultural principle. Paul tells women to cover their heads (1 Cor 11) — the cultural form differs today, but the principle (order and respect in worship) may remain. Ask: why did God command this? What is being protected?",
                  color: GOLD,
                },
                {
                  title: "The Ladder of Abstraction",
                  desc: "Move up the ladder to the principle, then back down to a contemporary application. Don't stop at the original cultural expression (too specific) or stay at the abstract principle (too vague). Find the equivalent contemporary form.",
                  color: GREEN,
                },
                {
                  title: "Beware of Relativizing Everything",
                  desc: "The danger in looking for principles is concluding everything is culturally relative. Some commands are explicitly trans-cultural (grounded in creation, nature, or the character of God). These do not change. The challenge is discerning which is which — with humility and in community.",
                  color: PURPLE,
                },
                {
                  title: "Application Is Personal and Corporate",
                  desc: "Scripture addresses individuals, families, congregations, and societies. Application should not be reduced to personal piety — the text may be addressing community practices, corporate worship, church discipline, or public ethics.",
                  color: TEAL,
                },
                {
                  title: "Test Against the Whole",
                  desc: "A faithful application will be consistent with the overall teaching of Scripture. If your application contradicts clear teaching elsewhere, you have probably mis-applied — or mis-interpreted — the text.",
                  color: BLUE,
                },
              ].map(a => (
                <div key={a.title} style={{ background: CARD, border: `1px solid ${a.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${a.color}` }}>
                  <div style={{ fontWeight: 700, color: a.color, marginBottom: "0.4rem" }}>{a.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRADITION */}
        {tab === "tradition" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Role of Tradition</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {TRADITION_POINTS.map(t => (
                <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}40`, borderRadius: 12, padding: "1.5rem", borderLeft: `4px solid ${t.color}` }}>
                  <div style={{ fontWeight: 700, color: t.color, marginBottom: "0.5rem" }}>{t.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ERRORS */}
        {tab === "errors" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "#EF4444" }}>Common Interpretation Errors</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>These errors are not exotic or rare — they appear regularly in sermons, small groups, and Bible studies. Knowing them is the first step to avoiding them.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ERRORS.map((e, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10 }}>
                  <button onClick={() => setOpenErr(openErr === String(i) ? "" : String(i))}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ textAlign: "left" }}>
                      <span style={{ fontWeight: 700, color: e.color }}>{e.error}</span>
                      <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem", background: BG, borderRadius: 4, padding: "0.1rem 0.4rem" }}>{e.severity}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.2rem" }}>{openErr === String(i) ? "−" : "+"}</span>
                  </button>
                  {openErr === String(i) && (
                    <div style={{ padding: "0 1.25rem 1rem", color: MUTED, lineHeight: 1.7 }}>{e.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>How has this shaped how you read Scripture? What interpretive errors do you most need to guard against?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on your approach to reading Scripture. Which of these principles do you most need to grow in? What texts have you read well or poorly?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
