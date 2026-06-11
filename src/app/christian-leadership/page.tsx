"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Servant Leadership Is Not Weak Leadership — the Paradox of Mark 10:42-45", verse: "Mark 10:42-45", text: "Whoever wants to become great among you must be your servant. Jesus redefines greatness not by eliminating authority but by inverting its purpose — authority exercised for the benefit of those under it, not for the self-interest of the one holding it. The cross is the ultimate leadership act: the one with all authority lays it down for others. Servant leadership is not the absence of decision-making — it is the orientation of decision-making toward others. Leaders who grasp this stop asking what the organization can do for them and start asking what they can sacrifice for the people in their care." },
  { title: "Character Before Competence — the 1 Timothy 3 Standard", verse: "1 Tim 3:1-7", text: "The qualifications for an overseer that Paul lists in 1 Timothy 3 are overwhelmingly about character, not gifting. Above reproach, self-controlled, respectable, hospitable, not given to drunkenness, not violent, not quarrelsome, not a lover of money — these are not skill sets but soul qualities. The church regularly inverts this standard, elevating the gifted over the good. But Scripture is clear: character without gifting is still usable, while gifting without character eventually destroys. The specific qualities Paul lists are leadership-defining because they describe a person whose inner life matches their outer role." },
  { title: "Moses and the Lesson of Jethro — Delegation and the Limits of One-Person Leadership", verse: "Exod 18:18", text: "What you are doing is not good — you will wear yourself out. Jethro's intervention in Exodus 18 is one of the most practical leadership passages in Scripture. Moses is doing everything himself, and it is unsustainable. The leader who cannot delegate eventually becomes the bottleneck — the person through whom everything must flow and at whom everything eventually stalls. Behind the inability to delegate is often a spiritual problem: the pathology of indispensability. Some leaders cannot let go because letting go reveals that they are not as necessary as they believed. Jethro's gift to Moses is not just a management technique — it is a confrontation with a theology problem." },
  { title: "David as Case Study in Leadership Failure — Gifting Without Accountability", verse: "2 Sam 12:7", text: "You are the man. David's failure in 2 Samuel 11-12 is not primarily a story of personal sin — it is a story of structural absence of accountability. A leader with unchecked power in any domain will eventually abuse it. The Nathan moment is the hinge: a truth-teller enters the room and says what everyone else was unwilling or unable to say. David's tragedy is not that he failed but that there was no architecture of accountability that might have interrupted the failure earlier. Building truth-tellers into your leadership structure is not optional — it is the difference between a leader whose failure is corrected and one whose failure is catastrophic." },
  { title: "Nehemiah's Leadership Principles — Vision, Opposition, and Finishing", verse: "Neh 6:3", text: "I am doing a great work and I cannot come down. Nehemiah models a complete leadership curriculum in six chapters: a clear vision that survives sustained opposition, the ability to motivate dispirited and scattered people, strategic responses to external attack and internal conflict (the economic exploitation documented in Nehemiah 5), and the discipline to finish. These principles transfer across leadership contexts. Vision without resilience fails at the first opposition. Resilience without vision is merely stubbornness. And both without the discipline to finish produce a long list of impressive starts and nothing completed." },
];

const voices = [
  { name: "James MacGregor Burns", role: "Leadership", quote: "Transforming leadership occurs when one or more persons engage with others in such a way that leaders and followers raise one another to higher levels of motivation and morality. Its ultimate goal is to elevate followers to become leaders in their own right — not to manage their behavior but to liberate their aspirations.", bio: "Burns introduced the distinction between transactional and transformational leadership that has shaped leadership studies for half a century. Transactional leadership manages the exchange of reward for performance. Transformational leadership elevates the moral aspirations of followers — it changes what they want, not merely whether they get it. For Christian leaders, this distinction maps directly onto the difference between managing a congregation and forming disciples." },
  { name: "Eugene Peterson", role: "Under the Unpredictable Plant", quote: "The vocation of pastor is not a profession but a way of life. It is characterized not by spectacular achievement but by long obedience in the same direction — a steady, unhurried, unspectacular attentiveness to the ordinary means of grace over many years and in a particular place among particular people.", bio: "Peterson spent his career resisting the celebrity model of ministry — the leader defined by platform, audience size, and institutional influence. Under the Unpredictable Plant is his sustained argument that pastoral leadership is fundamentally about presence, patience, and particularity: staying with the people God has given you long enough for the gospel to take root. For leaders tempted by scale and visibility, it is a necessary corrective." },
  { name: "Patrick Lencioni", role: "The Five Dysfunctions of a Team", quote: "The first dysfunction is absence of trust — and trust in this context is not about predicting each other's behavior but about vulnerability. Team members who cannot be vulnerable with one another spend enormous energy on self-protection rather than collective work. Vulnerability-based trust is the foundation everything else is built on.", bio: "Lencioni's work is secular in origin but maps closely onto what Scripture teaches about community and leadership teams. Applied to church and ministry contexts, his five dysfunctions (absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results) describe exactly how well-intentioned leadership teams fail. The vulnerability he calls for is indistinguishable from the posture the New Testament calls humility." },
];

const practices = [
  { icon: "🔁", title: "Regular 360-Degree Feedback", text: "Solicit honest assessment not just from those above you but from those you lead. Upward feedback is often sanitized — the people who will tell you the truth about your leadership are the ones experiencing it directly. A structured 360 process, conducted annually and taken seriously, gives you information no other source provides." },
  { icon: "📋", title: "A Personal Leadership Development Plan", text: "A written plan focused on character, not merely skill, asks: what kind of leader am I becoming, and what disciplines are forming that character? Skill-focused development makes you more competent. Character-focused development makes you more trustworthy. The gap between them is where most leadership failures originate." },
  { icon: "🧑‍🤝‍🧑", title: "A Truth-Telling Board", text: "Identify three to five people who are committed to telling you what you need to hear — not what you want to hear. These are people who have earned the right to speak into your life, who know you well enough to see your blind spots, and who care enough about you to name them. Without this, every leader eventually lives inside an echo chamber." },
  { icon: "🛌", title: "Regular Sabbatical Rhythm", text: "Burnout does not announce itself — it accumulates. The leaders who end ministries and damage communities through moral failure or emotional collapse are often leaders who ran too long without rest. A sustainable sabbatical rhythm — weekly, annual, and periodic extended sabbatical — is not a luxury but a leadership discipline that protects the people in your care as much as it protects you." },
  { icon: "📖", title: "Read Biography of Leaders Who Failed", text: "Success confirms what we already believe. Failure teaches what we were unwilling to learn. Reading the biographies of leaders who collapsed — morally, relationally, institutionally — is one of the most practical leadership development investments available. The patterns recur: isolation, unchecked power, character compromises rationalized as necessary, truth-tellers marginalized or absent." },
];

const scriptures = [
  { verse: "Mark 10:42-45", text: "Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all. For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many." },
  { verse: "1 Tim 3:1-7", text: "Now the overseer is to be above reproach, faithful to his spouse, temperate, self-controlled, respectable, hospitable, able to teach, not given to drunkenness, not violent but gentle, not quarrelsome, not a lover of money." },
  { verse: "Exod 18:18", text: "What you are doing is not good. You and these people who come to you will only wear yourselves out. The work is too heavy for you; you cannot handle it alone." },
  { verse: "2 Sam 12:7", text: "Then Nathan said to David, You are the man! This is what the Lord, the God of Israel, says: I anointed you king over Israel, and I delivered you from the hand of Saul." },
  { verse: "Neh 6:3", text: "I am carrying on a great project and cannot go down. Why should the work stop while I leave it and go down to you?" },
  { verse: "John 13:14-15", text: "Now that I, your Lord and Teacher, have washed your feet, you also should wash one another's feet. I have set you an example that you should do as I have done for you." },
];

const videos = [
  { id: "qDyMJMSEbkk", title: "Servant Leadership and the Way of Jesus" },
  { id: "WNTfpPIq1Ig", title: "Character Over Competence in Ministry" },
  { id: "LJ5A_-kR8iQ", title: "Building Accountability into Your Leadership" },
  { id: "PqV55T-B8Lk", title: "Nehemiah: Leadership Under Pressure" },
];

type CLEntry = { id: string; date: string; challenge: string; principle: string; growth: string };

export default function ChristianLeadershipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrleadership_entries") ?? "[]"); } catch { return []; }
  });
  const [jChallenge, setJChallenge] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jGrowth, setJGrowth] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrleadership_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jChallenge.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), challenge: jChallenge, principle: jPrinciple, growth: jGrowth }, ...prev]);
    setJChallenge(""); setJPrinciple(""); setJGrowth("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Leadership &amp; Vocation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Leadership</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Servant leadership, character formation, and leading from gospel foundations — the theology and practice of leading as Jesus led.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
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
                <div style={{ fontSize: "0.8rem", color: GOLD, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GOLD, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Leadership</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly about the leader you are becoming and the leader you are called to be.</p>
            {[
              { label: "Challenge — a leadership challenge you are currently facing", val: jChallenge, set: setJChallenge },
              { label: "Principle — a biblical principle you are applying to that challenge", val: jPrinciple, set: setJPrinciple },
              { label: "Growth — what you are learning about yourself as a leader", val: jGrowth, set: setJGrowth },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GOLD }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Challenge:</span> {e.challenge}</p>
                      {e.principle && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Principle:</span> {e.principle}</p>}
                      {e.growth && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GOLD, fontWeight: 600 }}>Growth:</span> {e.growth}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GOLD }}>{v.title}</h3>
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
