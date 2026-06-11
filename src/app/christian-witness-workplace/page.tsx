"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Theology of Work — Why Your Job Is Not Secular", verse: "Col 3:23-24", text: "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. The sacred/secular divide is a Greek concept, not a biblical one. The idea that Monday through Friday is spiritually neutral and Sunday is spiritual is a heresy with enormous practical consequences: it produces Christians who are excellent at church and spiritually absent from most of their lives. Vocation is not a career with a spiritual veneer — it is a calling. The work itself, done with integrity and excellence for the glory of God, is an act of worship." },
  { title: "Daniel in Babylon — Faithful Excellence as Witness", verse: "Dan 1:8, 6:4", text: "But Daniel resolved that he would not defile himself. His colleagues sought to find grounds for a complaint against Daniel but could find no ground for complaint or fault, because he was faithful. Daniel's approach was threefold: impeccable integrity combined with cross-cultural adaptability combined with uncompromising commitment to God. The person who does excellent work, keeps their word, refuses to lie, and treats everyone with genuine dignity is already witnessing — before they have said a word about Jesus. Verbal witness without this foundation is noise. With it, it is earned." },
  { title: "The Art of the Winsome Question — Earning the Right to Speak", verse: "1 Pet 3:15", text: "Always be prepared to give an answer to everyone who asks you for the reason for the hope that you have — do this with gentleness and respect. The key phrase is: to everyone who asks you. The question precedes the answer. Integrity and distinctiveness create curiosity. The person who lives differently invites questions. Witness begins with a life that requires explanation — and ends with a prepared, humble, and non-defensive answer. The sequence matters: live in a way that generates questions, then answer them with gentleness." },
  { title: "Loving the Difficult Colleague — Grace Under Professional Pressure", verse: "Matt 5:44-45", text: "Love your enemies and pray for those who persecute you. The colleague who is unfair, who takes credit, who undermines your work — this is the proving ground of gospel character. How you respond to being wronged professionally is one of the loudest testimonies you can give. Employees who respond with grace to mistreatment are unusual enough to generate genuine curiosity. Retaliation is expected. Forgiveness is not. The person who refuses to retaliate and who continues to act with integrity under pressure has a story worth asking about." },
  { title: "When Faith and Work Conflict — Navigating Real Ethical Dilemmas", verse: "Acts 5:29", text: "We must obey God rather than men. Not every ethical dilemma at work has a clean answer. When told to deceive clients, falsify data, or act in ways that violate your conscience before God — what does faithful witness look like? Faithful witness includes: naming the problem clearly and early, proposing alternatives, accepting personal cost, and ultimately being willing to leave rather than compromise what is non-negotiable. The cost of ethical integrity is real. So is the witness it produces." },
];

const voices = [
  { name: "Os Guinness", role: "The Call", quote: "Calling is not first and foremost for ourselves or our own fulfillment. We are not called by God for God — we are called by God through the gospel, to serve him by serving the world. Work is one of the primary arenas for that service. Your job is not a distraction from your calling. It may be the primary location of it.", bio: "Os Guinness is an Irish-born author and social critic whose work on vocation has influenced how a generation of Christians thinks about work. The Call argues that the Reformation recovery of vocation — every Christian in every sphere — was one of the most world-transforming ideas in history, and that recovering it today is essential to Christian witness in a secular world." },
  { name: "Dorothy Sayers", role: "Why Work?", quote: "The church's approach to an intelligent carpenter is usually confined to the exhortation that he should not be drunk and disorderly in his leisure hours, and that he should come to church on Sundays. What the church should be telling him is this: that the very first demand his religion makes upon him is that he should make good tables. The church has forgotten that the work itself is the point.", bio: "Dorothy Sayers was a theologian, playwright, and mystery novelist who wrote one of the most penetrating short essays on the theology of work in the twentieth century. Her critique — that the church treats work as morally irrelevant and Sunday attendance as spiritually significant — remains as accurate today as when she wrote it in 1942." },
  { name: "Mark Greene", role: "Thank God It's Monday", quote: "Most Christians live split-level lives. Downstairs is where they live Monday through Saturday — work, family, money, ambition, failure, boredom. Upstairs is where God lives — Sunday, church, Bible study, prayer. The two floors are connected by a very narrow staircase, and most Christians spend their lives on the ground floor wondering why God feels so distant.", bio: "Mark Greene is the executive director of the London Institute for Contemporary Christianity and the author of the most practically useful book on faith and work in print. His split-level Christianity metaphor has helped thousands of Christians diagnose the structural problem that keeps faith and daily life in separate compartments." },
];

const practices = [
  { title: "The 3-Month Prayer List", text: "Praying by name for three colleagues for three months before any gospel conversation. The discipline of sustained intercession changes how you see people. It also creates the relational attentiveness that makes genuine gospel conversations natural rather than forced." },
  { title: "Character-First Witness", text: "Treating excellence, integrity, and kindness as the non-negotiable foundation of all verbal witness. A reputation for honest dealing, reliable work, and genuine care for others is the credibility that makes words worth hearing." },
  { title: "Genuine Curiosity About Coworkers", text: "Developing real interest in the lives, struggles, families, and stories of the people you work with — not as an evangelism strategy but as actual human interest in image-bearers. People know the difference. Real curiosity opens doors that technique cannot." },
  { title: "Asking Permission Before Faith Conversations", text: "Building the habit of asking before sharing: can I tell you something that has been important to me? The ask respects the other person, lowers defensiveness, and means that the conversation that follows was invited rather than imposed." },
  { title: "The Follow-Up Question", text: "After sharing something of your faith, asking: what do you think? rather than delivering a conclusion. The question signals that you are in a conversation, not a presentation. It honors the other person's intelligence and keeps the door open." },
];

const scriptures = [
  { verse: "Col 3:23-24", text: "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ." },
  { verse: "1 Pet 3:15", text: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect." },
  { verse: "Dan 6:4", text: "Then the high officials and the satraps sought to find a ground for complaint against Daniel with regard to the kingdom, but they could find no ground for complaint or any fault, because he was faithful, and no error or fault was found in him." },
  { verse: "Matt 5:16", text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven." },
  { verse: "Acts 5:29", text: "But Peter and the apostles answered, We must obey God rather than men." },
  { verse: "Col 4:5-6", text: "Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person." },
];

const videos = [
  { id: "i5Ri5b2dJpA", title: "The Theology of Work — Your Job Is Not Secular" },
  { id: "GFPSVpOgBBo", title: "How to Be a Christian Witness at Work" },
  { id: "L6oA6xVXLv0", title: "Os Guinness on Vocation and Calling" },
  { id: "q0Xzq4Yb0bI", title: "Faith and Work — Bridging Sunday and Monday" },
];

type WWEntry = { id: string; date: string; opportunity: string; approach: string; result: string };

export default function ChristianWitnessWorkplacePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WWEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_workwitness_entries") ?? "[]"); } catch { return []; }
  });
  const [jOpportunity, setJOpportunity] = useState("");
  const [jApproach, setJApproach] = useState("");
  const [jResult, setJResult] = useState("");

  useEffect(() => { localStorage.setItem("vine_workwitness_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jOpportunity.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), opportunity: jOpportunity, approach: jApproach, result: jResult }, ...prev]);
    setJOpportunity(""); setJApproach(""); setJResult("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Witness in the Workplace</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Faith, integrity, and evangelism at work — the theology of vocation, the pattern of Daniel, and the practices that make your Monday as sacred as your Sunday.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: BLUE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: BLUE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Witness at Work</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly about where you are and where God may be calling you.</p>
            {[
              { label: "Opportunity — a specific opportunity for witness you see or saw", val: jOpportunity, set: setJOpportunity },
              { label: "Approach — how you approached it or plan to", val: jApproach, set: setJApproach },
              { label: "Result — what happened or what you are trusting God with", val: jResult, set: setJResult },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: BLUE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Opportunity:</span> {e.opportunity}</p>
                      {e.approach && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: BLUE, fontWeight: 600 }}>Approach:</span> {e.approach}</p>}
                      {e.result && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: BLUE, fontWeight: 600 }}>Result:</span> {e.result}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: BLUE }}>{v.title}</h3>
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
