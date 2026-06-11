"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type DTEntry = { id: string; date: string; question: string; anchor: string; next: string };

const THEOLOGY = [
  {
    title: "Doubt Is Not the Opposite of Faith (Heb 11:1)",
    body: "Faith is confidence in what we hope for and assurance about what we do not see. The opposite of faith is not doubt but unbelief — the settled refusal to trust. Doubt lives in the middle: it believes enough to keep asking but is not yet at rest. The Bible is full of doubters: Thomas, Gideon, Job, the Psalms of lament, even John the Baptist asking from prison whether Jesus was really the One. The pattern is consistent: honest doubt brought to God is met with patience, evidence, and deepened faith. Doubt suppressed becomes resentment or departure; doubt engaged becomes rootedness.",
  },
  {
    title: "Intellectual Doubt — Questions the Faith Can Handle",
    body: "Many Christians doubt because they have never been told that Christianity is intellectually defensible — that the faith has answers to hard questions about suffering, science, other religions, and the reliability of Scripture. The great tradition of Christian apologetics (Justin Martyr, Augustine, Aquinas, Lewis, Plantinga, Wright) demonstrates that orthodox Christianity has engaged every major intellectual challenge. The doubt that comes from never having been exposed to serious Christian thinking is not a sign that the faith is weak — it is a sign that the doubter has not yet encountered the full resources of the tradition.",
  },
  {
    title: "Existential Doubt — When Life Does Not Match the Promise",
    body: "The most painful doubt is not intellectual but existential: God promised to be with me, but I feel abandoned. I prayed for healing and the person died. I did what was right and was destroyed for it. Job’s doubt is of this kind: he is not doubting whether God exists but whether God is good and whether God keeps his promises. The honest cry of Psalm 88 (which never resolves) and Habakkuk (which does) shows that the Bible gives this kind of doubt a full hearing. Existential doubt is the doubt of someone who took God seriously enough to be devastated by the apparent gap between promise and experience.",
  },
  {
    title: "The Response of Jesus — Gentleness Toward Doubters (John 20:27)",
    body: "Jesus did not rebuke Thomas for his demand for physical evidence. He invited him to touch the wounds. He met the disciples on the road to Emmaus in their confusion and walked with them for hours before revealing himself. He appeared to 500 witnesses after the resurrection, providing verifiable evidence. Jesus is not offended by honest doubt — he is offended by hardened unbelief (Mark 6:6). The posture of Jesus toward doubters is patient, evidential, and personal. The church’s response to doubters should be the same: not dismissal or panic but patient engagement.",
  },
  {
    title: "Doubt and the Means of Grace — Staying in the Practices",
    body: "One of the most destructive mistakes in doubt is withdrawing from the community, the Scripture, and the practices of the Christian life until the doubt is resolved. The resolution rarely comes in isolation — it comes through continued engagement. Dallas Willard: you cannot think your way to faith, but you can act your way into different thinking. Staying in the practices (prayer, worship, Scripture, community) while honestly holding the questions is not hypocrisy but the ancient wisdom of perseverance. The doubter who keeps showing up is the one who finds their way through.",
  },
];

const PRACTICES = [
  "Write out your doubts specifically — not a vague sense that something is wrong but the actual question or experience that is causing the doubt. Naming the doubt precisely is the first step toward engaging it.",
  "Identify whether your doubt is primarily intellectual (unanswered questions), existential (unmet expectations), or relational (broken trust) — different types of doubt require different responses.",
  "Find one serious resource that engages your specific intellectual doubt: a book, a lecture series, a podcast from a thoughtful Christian scholar — doubt that has never encountered serious answers deserves to be introduced to them.",
  "Stay in the practices of the Christian life while the doubt is unresolved: keep praying (honestly, even angrily), keep showing up to community, keep reading Scripture — not as performance but as an act of trust in the process.",
  "Bring one person (a pastor, a spiritually mature friend) into your doubt — not to have them fix it but to walk with you in it; isolated doubt festers; accompanied doubt is survivable.",
];

const VOICES = [
  {
    author: "Os Guinness",
    source: "In Two Minds",
    quote: "Doubt is not the opposite of faith; it is one element of faith. Faith that can never doubt is not faith but certainty. And certainty is not the goal of the Christian life — trust is. The person who has never doubted has never been tested, and the person who has never been tested has never been strengthened.",
    bio: "Os Guinness is a social critic and author who has written extensively on faith, doubt, and Christian apologetics. In Two Minds (later revised as God in the Dark) is the most thorough and compassionate treatment of Christian doubt — analyzing its different types and offering specific guidance for each. Guinness himself has wrestled deeply with doubt and writes with unusual authority.",
  },
  {
    author: "Philip Yancey",
    source: "Disappointment with God",
    quote: "I have concluded that what I call doubt God might call growth. He is not threatened by my questions. He does not need me to pretend that reality is other than it is. What he asks of me is not the absence of honest questions but honesty itself — bringing the full weight of my experience to him rather than hiding it from him.",
    bio: "Philip Yancey is a Christian author whose work consistently explores the dark and difficult questions of faith. Disappointment with God directly addresses the experience that generates the most painful doubt: the sense that God has failed to show up when he was most needed. Yancey neither dismisses the experience nor abandons the faith — he searches honestly for what remains when circumstances no longer support easy belief.",
  },
  {
    author: "C.S. Lewis",
    source: "A Grief Observed",
    quote: "I thought I could describe a state; make a map of sorrow. Sorrow, however, turns out to be not a state but a process. It needs not a map but a history, and if I don’t stop writing that history at some arbitrary point, there’s no reason why I should ever stop. There is something new to be chronicled every day… Talk to me about the truth of religion and I’ll listen gladly. Talk to me about the duty of religion and I’ll listen submissively. But don’t come talking to me about the consolations of religion or I shall suspect that you don’t understand.",
    bio: "C.S. Lewis was one of the 20th century’s most formidable Christian apologists — the man who wrote Mere Christianity and The Problem of Pain. A Grief Observed is what he wrote after his wife Joy died of cancer: raw, honest, and initially angry at God. Its honesty has comforted more doubters than his apologetics have persuaded. It shows that intellectual faith and existential anguish can coexist.",
  },
];

const SCRIPTURES = [
  { ref: "Mark 9:24", text: "Immediately the boy’s father exclaimed, ‘I do believe; help me overcome my unbelief!’" },
  { ref: "John 20:27–28", text: "Then he said to Thomas, ‘Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.’ Thomas said to him, ‘My Lord and my God!’" },
  { ref: "Hab 1:2–3", text: "How long, Lord, must I call for help, but you do not listen? Or cry out to you, ‘Violence!’ but you do not save? Why do you make me look at injustice? Why do you tolerate wrongdoing?" },
  { ref: "Ps 88:14", text: "Why, Lord, do you reject me and hide your face from me?" },
  { ref: "Heb 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
  { ref: "Jude 1:22", text: "Be merciful to those who doubt." },
];

const VIDEOS = [
  { videoId: "sBjWkYEe9eU", title: "Is Doubt the Enemy of Faith? A Biblical Response" },
  { videoId: "tBmcFShDwHs", title: "Os Guinness: Handling Doubt Honestly and Faithfully" },
  { videoId: "M7oM3dE4mF4", title: "Philip Yancey: Disappointment with God" },
  { videoId: "J8Dp5RQ8mjI", title: "What to Do When You Doubt: Practical Guidance for the Struggling Believer" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianDoubtGuide() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DTEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_doubt_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jAnchor, setJAnchor] = useState("");
  const [jNext, setJNext] = useState("");

  useEffect(() => { localStorage.setItem("vine_doubt_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, anchor: jAnchor, next: jNext }, ...prev]);
    setJQuestion(""); setJAnchor(""); setJNext("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: PURPLE + "22", color: PURPLE, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Doctrine</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Christian Doubt: When Faith Wavers</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680, lineHeight: 1.7 }}>
          What to do when faith wavers, the difference between doubt and unbelief, how Scripture handles honest questioning, and how doubt can deepen faith rather than destroy it.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? PURPLE : BORDER, background: tab === t.id ? PURPLE + "22" : "transparent", color: tab === t.id ? PURPLE : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.25rem" }}>The Theology of Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "0.95rem" }}>
              Honest doubt brought to God is not a failure of faith — it is faith in process. The Bible offers a robust theology of questioning.
            </p>
            {THEOLOGY.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 14, padding: "1.3rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Practices for the Doubting Believer</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Doubt is not resolved by willpower. These practices create the conditions for honest engagement and eventual resolution.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {PRACTICES.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: PURPLE + "22", color: PURPLE, fontWeight: 800, fontSize: "0.95rem", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.94rem", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Voices on Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Faithful writers who have wrestled honestly with doubt and written about it with authority and compassion.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map(v => (
                <div key={v.author} style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 14, padding: "1.3rem" }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.15rem" }}>{v.author}</div>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.9rem", fontStyle: "italic" }}>{v.source}</div>
                  <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.9rem", color: TEXT, lineHeight: 1.75, fontSize: "0.95rem", fontStyle: "italic" }}>
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.88rem", margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Key Scriptures on Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Scripture does not pretend that doubt does not exist. These texts speak directly into the experience of the questioning believer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {SCRIPTURES.map(s => (
                <div key={s.ref} style={{ background: CARD, border: `1px solid ${PURPLE}33`, borderRadius: 12, padding: "1.2rem", borderLeft: `3px solid ${PURPLE}` }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, lineHeight: 1.75, fontSize: "0.95rem", fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Doubt Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              A private space to name your questions honestly. Entries are saved only in your browser.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.3rem", marginBottom: "1.25rem" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>What question or experience is causing the doubt?</label>
                <textarea value={jQuestion} onChange={e => setJQuestion(e.target.value)}
                  placeholder="Write your doubt as specifically as you can..."
                  style={{ width: "100%", minHeight: 90, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.75rem", fontSize: "0.94rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>A Scripture or truth that still anchors you</label>
                <input value={jAnchor} onChange={e => setJAnchor(e.target.value)}
                  placeholder="e.g. Mark 9:24 — I do believe; help my unbelief"
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.65rem 0.75rem", fontSize: "0.94rem", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.35rem" }}>One next step you will take with this doubt</label>
                <input value={jNext} onChange={e => setJNext(e.target.value)}
                  placeholder="e.g. Read Os Guinness, talk to my pastor..."
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "0.65rem 0.75rem", fontSize: "0.94rem", boxSizing: "border-box", outline: "none" }} />
              </div>
              <button onClick={saveEntry}
                style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 10, padding: "0.6rem 1.4rem", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Save Entry
              </button>
            </div>
            {entries.length > 0 && (
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.75rem", color: MUTED }}>Previous Entries</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                      <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.4rem" }}>{e.date}</div>
                      <div style={{ fontWeight: 600, marginBottom: "0.3rem", fontSize: "0.94rem" }}>{e.question}</div>
                      {e.anchor && <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.2rem" }}>Anchor: {e.anchor}</div>}
                      {e.next && <div style={{ color: MUTED, fontSize: "0.85rem" }}>Next step: {e.next}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Video Teaching on Doubt</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>Teaching on faith, doubt, and honest questioning from trusted guides.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ marginTop: "0.5rem", color: MUTED, fontSize: "0.88rem" }}>{v.title}</div>
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
