"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type EVEntry = { id: string; date: string; conversation: string; response: string; next: string };

const theology = [
  {
    verse: "1 Cor 15:1-4",
    title: "The Gospel Is News, Not Advice (1 Cor 15:1-4)",
    text: "Now, brothers and sisters, I want to remind you of the gospel I preached to you... that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day. The gospel (euangelion — good news) is an announcement about what God has done in history, not a set of lifestyle recommendations. This distinction matters for how we share it: we are heralds, not life coaches. We proclaim a historical event (death, burial, resurrection) with universal implications (for sins, according to the Scriptures). Evangelism is sharing that announcement with its invitation: repent and believe.",
  },
  {
    verse: "Matt 28:18-20",
    title: "Every Christian Is Called — The Great Commission Is for All (Matt 28:18-20)",
    text: "Go and make disciples of all nations. The Great Commission was not given only to apostles, evangelists, or professional missionaries — it was given to all disciples, in all places, at all times. The ordinary Christian is the primary evangelistic agent in the world: the coworker, neighbor, family member, and friend who lives within relationship networks that no professional evangelist can access. The church's greatest evangelistic asset is not its programs but its people — ordinary Christians who love their neighbors, live differently, and speak when asked why.",
  },
  {
    verse: "1 Pet 3:15-16",
    title: "The Apologetic of a Changed Life (1 Pet 3:15-16)",
    text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect. Peter assumes that Christians will live in a way that makes people ask questions. The primary apologetic is a life of hope, love, and integrity that cannot be explained without reference to God. The verbal defense (apologia — answer) is the explanation of a life already being examined. This sequence — live in a way that creates curiosity, then explain — is both the biblical pattern and the most effective approach in a post-Christian context where words are mistrusted but lives are still observed.",
  },
  {
    verse: "Acts 17",
    title: "The Fear of Evangelism — and the Gospel's Response",
    text: "Most Christians rarely share their faith, and when surveyed, they identify fear as the primary reason: fear of rejection, of looking foolish, of damaging a relationship, of not knowing enough. The gospel addresses this fear directly: Paul in Athens adjusted his approach to the audience; he did not recite a script but engaged their culture (Acts 17). Permission-based evangelism — entering conversations through genuine relationship, asking good questions, listening before speaking — reduces the social cost without compromising the message. The fear of evangelism is often the fear of a particular model of evangelism, not the fear of sharing good news with someone who needs it.",
  },
  {
    verse: "Acts 1:8",
    title: "The Spirit's Role — We Are Witnesses, Not Salespeople (Acts 1:8)",
    text: "You will receive power when the Holy Spirit comes on you; and you will be my witnesses. The language of witness is important: a witness reports what they have seen and heard; they do not manufacture verdicts. The results of evangelism are the Spirit's responsibility, not ours. Paul planted, Apollos watered, but God gave the growth (1 Cor 3:6). This frees the Christian from the burden of being responsible for outcomes and locates the weight of evangelism where it belongs: in the sovereign work of the Spirit who convicts the world of sin, righteousness, and judgment (John 16:8).",
  },
];

const voices = [
  {
    name: "Rebecca Manley Pippert",
    role: "Out of the Saltshaker",
    quote: "We need to stop thinking of evangelism as a sales technique and start thinking of it as friendship. It is telling someone about the most important person in your life — not because you have to but because you cannot help it.",
    bio: "Rebecca Manley Pippert's Out of the Saltshaker is one of the most influential books on personal evangelism ever written. Her central insight — that evangelism is the natural overflow of genuine love, not a programmatic technique — transformed how a generation of Christians thought about sharing faith. Her model is relational, conversational, and deeply human.",
  },
  {
    name: "Tim Keller",
    role: "Center Church",
    quote: "The gospel is not just the ABCs of Christianity — it is the A to Z. Evangelism is not only for unbelievers; the gospel must be applied to the Christian's deepest questions and struggles, or it will never be convincing when offered to someone outside the faith.",
    bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential voices on evangelism in post-Christian urban contexts. Center Church provides a comprehensive theological framework for gospel-centered ministry, including a model of evangelism that engages secularism, pluralism, and the unique spiritual hungers of post-Christian people.",
  },
  {
    name: "Mark Mittelberg",
    role: "Contagious Faith",
    quote: "Most people come to faith not through a program but through a person — someone they trusted, whose life intrigued them, who cared enough to tell them the truth. Be that person for someone.",
    bio: "Mark Mittelberg is an evangelism trainer and author who has worked with Willow Creek Community Church and has developed practical evangelism training used by millions. Contagious Faith identifies five different evangelism styles (intellectual, testimonial, relational, invitational, service, and confrontational) and helps Christians identify which approach matches their personality and gifts.",
  },
];

const practices = [
  "Identify three people in your life who do not know Christ: pray for them by name daily for one month, ask God to open a door for a spiritual conversation, and look for it.",
  "Practice your testimony: in two minutes, be able to tell (1) what your life was like before Christ, (2) how you came to faith, and (3) what has changed — in ordinary language without jargon.",
  "Ask a good spiritual question in your next appropriate conversation: What do you think happens when we die? or Do you have any kind of spiritual life? — and listen more than you talk.",
  "Invite someone to church, a small group, or a Christian event — invitation is the most common first step in people's journey to faith, and most people will accept an invitation from someone they trust.",
  "Examine your fear of evangelism specifically: is it fear of rejection, inadequacy, or relational damage? Bring that specific fear to prayer and find one resource (book, course, mentor) that addresses it.",
];

const scriptures = [
  { verse: "Matt 28:18-20", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you." },
  { verse: "1 Cor 15:3-4", text: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures." },
  { verse: "1 Pet 3:15-16", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  { verse: "Acts 1:8", text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth." },
  { verse: "Rom 10:14-15", text: "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?" },
  { verse: "Col 4:5-6", text: "Be wise in the way you act toward outsiders; make the most of every opportunity. Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone." },
];

const videos = [
  { id: "GSaWtaLfXXE", title: "How to Share Your Faith Naturally — Evangelism for Everyday Christians" },
  { id: "XazB2pOVGjc", title: "Tim Keller: Sharing the Gospel in a Post-Christian World" },
  { id: "D0yU8TRNX1g", title: "The Gospel Clearly Explained — What Is the Good News?" },
  { id: "gQHY_FMvtXs", title: "Overcoming Fear of Evangelism: Practical Steps for Shy Christians" },
];

export default function EvangelismGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EVEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_evangelism_entries") ?? "[]"); } catch { return []; }
  });
  const [jField1, setJField1] = useState("");
  const [jField2, setJField2] = useState("");
  const [jField3, setJField3] = useState("");

  useEffect(() => { localStorage.setItem("vine_evangelism_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jField1.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), conversation: jField1, response: jField2, next: jField3 }, ...prev]);
    setJField1(""); setJField2(""); setJField3("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Outreach &amp; Mission</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Evangelism Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>The theology, practice, and courage of sharing the gospel — from the Great Commission to everyday conversations with the people you already know.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ACCENT : BORDER}`, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: ACCENT, fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ACCENT, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Evangelism</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record gospel conversations, responses you encountered, and what you want to do next.</p>
            {[
              { label: "Conversation — describe a gospel conversation you had or are preparing for", val: jField1, set: setJField1 },
              { label: "Response — how did the person respond? What surprised you?", val: jField2, set: setJField2 },
              { label: "Next — what is your next step with this person or situation?", val: jField3, set: setJField3 },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ACCENT }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ACCENT, fontWeight: 600 }}>Conversation:</span> {e.conversation}</p>
                      {e.response && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ACCENT, fontWeight: 600 }}>Response:</span> {e.response}</p>}
                      {e.next && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ACCENT, fontWeight: 600 }}>Next:</span> {e.next}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ACCENT }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
