"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type BMEntry = { id: string; date: string; challenge: string; step: string; accountability: string };

const THEOLOGY = [
  {
    id: "th1",
    title: "Made Male on Purpose (Gen 1:27)",
    content: "God created humanity male and female: maleness is not a social construct but a created category. The biblical vision of manhood is not cultural but creational — rooted in how God made men, not what any particular culture demands. Yet it is also relational: maleness only makes full sense in relation to femaleness. The creation of distinct sexes is not arbitrary but purposeful, reflecting something about God&apos;s own relational nature and the complementarity he intended to build into creation.",
  },
  {
    id: "th2",
    title: "Servant Leadership — the Jesus Model (Mark 10:45)",
    content: "Whoever wants to be great among you must be your servant. Jesus radically redefines leadership: the greatest is the servant of all. Biblical manhood is not domination, passivity, or careerism but servant leadership — men who lead by serving their families, churches, and communities; who use strength in the service of others rather than themselves. The husband who lays down his life for his wife (Eph 5:25) is following a cruciform pattern that has nothing in common with either authoritarian control or disengaged passivity.",
  },
  {
    id: "th3",
    title: "Courage — the Call to Stand Firm (1 Cor 16:13)",
    content: "Be watchful, stand firm in the faith, act like men, be strong. The call to courage runs through Scripture: Joshua (1:9), David, the prophets, Paul. Biblical courage is not recklessness or bravado but the willingness to do what is right at personal cost — to tell the truth when lying is easier, to stand for justice when conformity is safer, to engage hard conversations rather than retreat. The epidemic of male passivity in the church is in part a failure of courage: men who refuse to lead, engage, or sacrifice because the cost is too high.",
  },
  {
    id: "th4",
    title: "Fatherhood — the Sacred Calling (Ps 103:13)",
    content: "As a father has compassion on his children, so the Lord has compassion on those who fear him. One of the central biblical images for God is Father. When men father well — present, engaged, warm, disciplining, protective — they give their children a living parable of God. When fathers are absent, harsh, or passive, they distort that image. The research confirms what the Bible teaches: a father&apos;s presence or absence is one of the most powerful factors in children&apos;s outcomes, including their image of God. Biblical manhood takes fatherhood with ultimate seriousness.",
  },
  {
    id: "th5",
    title: "Emotional Honesty — Lament, Vulnerability, and the Psalms (Ps 22:1)",
    content: "My God, my God, why have you forsaken me? The Psalms — the prayer book of Israel — are full of men crying out in anguish, confessing sin, expressing rage, weeping for loss. Jesus wept (John 11:35). Paul wrote of being sorrowful, yet always rejoicing (2 Cor 6:10). The cultural lie that real men suppress emotion is not only psychologically damaging — it is theologically wrong. Emotional honesty before God and trusted community is not weakness but spiritual maturity. The man who cannot lament cannot worship fully; the man who cannot be vulnerable cannot be genuinely known.",
  },
];

const PRACTICES = [
  "Identify one area of passivity in your life — where you have abdicated leadership, avoided a hard conversation, or refused to engage — and take one concrete step this week.",
  "Establish a regular meeting with one or two men for genuine accountability: not just life updates but real questions about sin, struggle, and spiritual growth.",
  "Spend extended time with your children or young people in your life — not just present but engaged: asking questions, listening, teaching, playing.",
  "Practice emotional honesty with God in prayer — bring what you actually feel, including anger, grief, and fear, rather than what you think you should feel.",
  "Read through the Psalms of lament (22, 42, 88) slowly, noticing what male emotional honesty looks like in Scripture.",
];

const VOICES = [
  {
    author: "Voddie Baucham",
    book: "Family Shepherds",
    quote: "A man who does not lead his family is not just failing his family — he is failing his God. Leadership is not a title to be claimed but a role to be embodied, day after day, in the small decisions no one else sees.",
    bio: "Voddie Baucham is a pastor, author, and theologian who has written and spoken extensively on biblical manhood, fatherhood, and family. Family Shepherds calls men to take their role as spiritual leaders of their households with the seriousness Scripture requires, drawing on a theological and pastoral vision rather than a cultural one.",
  },
  {
    author: "Richard Rohr",
    book: "From Wild Man to Wise Man",
    quote: "Men are not taught to grieve. We are taught to fix, fight, or flee. The result is a generation of men who have never mourned their losses, never faced their shadow, and never become whole. The spiritual journey for men often begins the moment something they cannot fix finally breaks them open.",
    bio: "Richard Rohr is a Franciscan friar and founder of the Center for Action and Contemplation. His work on masculine spiritual development draws on both Christian tradition and depth psychology to address why so many men remain emotionally and spiritually stunted — and what genuine maturity requires.",
  },
  {
    author: "C.S. Lewis",
    book: "The Four Loves",
    quote: "Friendship is the least biological of loves, but for men it may be the most necessary spiritually. Men who have no deep male friendships are men who have no mirror, no accountability, no one to call them to their best or call them back from their worst.",
    bio: "C.S. Lewis was an Oxford and Cambridge professor and one of the most influential Christian writers of the 20th century. The Four Loves explores friendship, affection, eros, and charity — with the section on friendship being particularly relevant for men who have been taught to compete rather than connect.",
  },
];

const SCRIPTURES = [
  { ref: "Josh 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go." },
  { ref: "1 Cor 16:13", text: "Be watchful, stand firm in the faith, act like men, be strong." },
  { ref: "Eph 5:25–27", text: "Husbands, love your wives, as Christ loved the church and gave himself up for her, that he might sanctify her, having cleansed her by the washing of water with the word." },
  { ref: "Ps 103:13", text: "As a father shows compassion to his children, so the Lord shows compassion to those who fear him." },
  { ref: "Prov 27:17", text: "Iron sharpens iron, and one man sharpens another." },
  { ref: "Mark 10:45", text: "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many." },
];

const VIDEOS = [
  { videoId: "8hzE2mM4kLY", title: "What Does the Bible Say About Biblical Manhood?" },
  { videoId: "Q1BXBjLH3fY", title: "Voddie Baucham: The Role of Men in the Church and Home" },
  { videoId: "j2bKrXd6_EU", title: "The Crisis of Male Passivity — and the Biblical Call to Engagement" },
  { videoId: "8j4sl3Aq7Ow", title: "Fatherhood: The Most Important Job a Man Will Ever Have" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function BiblicalManhoodPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_biblmanhood_entries") ?? "[]"); } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jStep, setJStep] = useState("");
  const [jAccountability, setJAccountability] = useState("");
  const [openTheol, setOpenTheol] = useState("");

  useEffect(() => { localStorage.setItem("vine_biblmanhood_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, step: jStep, accountability: jAccountability }, ...prev]);
    setJChallenge(""); setJStep(""); setJAccountability("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: 6 }}>
          <span style={{ color: BLUE, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Identity &amp; Relationships</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.5rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "0.75rem" }}>
          Biblical Manhood
        </h1>

        <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
          What does it mean to be a man according to Scripture? This guide explores servant leadership, courage, provision, protection, and emotional honesty &mdash; a vision of manhood rooted in creation and the cross rather than cultural expectation.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? BLUE : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`,
                cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: BLUE }}>A Biblical Theology of Manhood</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              What does Scripture actually teach about what it means to be a man? Five theological foundations &mdash; from creation order to the cross.
            </p>
            {THEOLOGY.map((item) => {
              const isOpen = openTheol === item.id;
              return (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? BLUE + "40" : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
                  <button type="button" onClick={() => setOpenTheol(isOpen ? "" : item.id)}
                    style={{ width: "100%", background: isOpen ? `${BLUE}0D` : "none", border: "none", color: TEXT, padding: "1rem 1.25rem", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: BLUE, fontSize: 18, flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.75 }}>{item.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: BLUE }}>Practices for Biblical Manhood</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Five concrete practices to embody the vision of manhood Scripture calls men toward.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PRACTICES.map((practice, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ background: BLUE, color: "#fff", fontWeight: 700, minWidth: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{i + 1}</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{practice}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: BLUE }}>Voices on Biblical Manhood</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Three key thinkers whose work has shaped the conversation about what it means to be a man before God.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span style={{ fontWeight: 800, color: TEXT }}>{v.author}</span>
                    <span style={{ color: MUTED, fontSize: "0.9rem" }}> &mdash; </span>
                    <span style={{ color: BLUE, fontSize: "0.9rem", fontStyle: "italic" }}>{v.book}</span>
                  </div>
                  <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: "1rem", margin: "0 0 1rem", color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: BLUE }}>Key Scriptures</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six passages that anchor a biblical vision of manhood.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SCRIPTURES.map((s) => (
                <div key={s.ref} style={{ background: CARD, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${BLUE}` }}>
                  <span style={{ fontWeight: 800, color: BLUE, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>{s.ref}</span>
                  <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem", color: BLUE }}>Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Reflect on your journey toward biblical manhood. Record a challenge you face, a step you will take, and who holds you accountable.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: BLUE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Challenge you are facing</label>
                <textarea value={jChallenge} onChange={e => setJChallenge(e.target.value)}
                  placeholder="Where are you struggling or being passive?"
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: BLUE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>One concrete step this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)}
                  placeholder="What specific action will you take?"
                  style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: BLUE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Who holds you accountable?</label>
                <textarea value={jAccountability} onChange={e => setJAccountability(e.target.value)}
                  placeholder="Name a person or community..."
                  style={{ width: "100%", minHeight: 60, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box", outline: "none" }} />
              </div>
              <button type="button" onClick={saveEntry}
                style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ fontWeight: 800, marginBottom: "0.75rem", color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 1 }}>Past Entries</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map((entry) => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.25rem" }}>
                      <span style={{ color: BLUE, fontSize: "0.8rem", fontWeight: 700 }}>{entry.date}</span>
                      {entry.challenge && <p style={{ color: TEXT, margin: "0.4rem 0 0.2rem", fontSize: "0.9rem" }}><strong>Challenge:</strong> {entry.challenge}</p>}
                      {entry.step && <p style={{ color: MUTED, margin: "0.2rem 0", fontSize: "0.9rem" }}><strong>Step:</strong> {entry.step}</p>}
                      {entry.accountability && <p style={{ color: MUTED, margin: "0.2rem 0 0", fontSize: "0.9rem" }}><strong>Accountability:</strong> {entry.accountability}</p>}
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
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", color: BLUE }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
