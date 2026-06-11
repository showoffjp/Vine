"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Paul and Timothy — the Mentoring Relationship Scripture Most Commends", verse: "1 Tim 1:2", text: "Paul addresses Timothy as my true son in the faith, and the two letters to Timothy are the most sustained portrait of mentoring in the New Testament. The vision crystallizes in 2 Timothy 2:2: what you have heard from me, entrust to reliable people who will also be qualified to teach others. The instruction encodes a four-generation transfer — Paul to Timothy to reliable people to others — and frames mentoring not as a personal benefit but as the mechanism by which the faith is transmitted across time. Paul and Timothy are not just a warm friendship; they are a model of formational investment that Scripture holds up as the normal pattern for how the gospel moves through history." },
  { title: "The Mentoring Jesus — How He Discipled the Twelve", verse: "Mark 3:14", text: "Mark 3:14 names Jesus's primary method in a single phrase: he appointed twelve that they might be with him. Before they were sent out, before they were commissioned, they were with him. Jesus discipled by proximity — shared meals, shared travel, shared encounters with the sick and the powerful and the broken. His method was not curriculum but life: invitation into relationship, observation of how he handled difficulty, progressive delegation of authority, frank correction when they got it wrong, and eventual commissioning with full authority. What this implies for mentoring is that information transfer is secondary to life sharing. The mentor who opens their life, not just their knowledge, is the one who forms." },
  { title: "Titus 2 — Generational Discipleship as Church Health", verse: "Titus 2:3-5", text: "The Titus 2 pattern is not a program — it is an ecclesiological expectation. Older men are to invest in younger men; older women are to invest in younger women in what is good. The assumption of the text is that those who are further along in faith and character will naturally and intentionally invest in those who are less far along. The passage does not describe an optional ministry for people with certain gifts; it describes the normal expectation for mature Christians. A church in which the spiritually mature are not investing in the spiritually young is, on Paul's account, not a healthy church regardless of how large or well-funded it is." },
  { title: "Finding a Mentor — What to Look For and How to Ask", verse: "Prov 27:17", text: "The most common obstacle to being mentored is not the absence of potential mentors but the failure to ask. What to look for: character and spiritual maturity first (not merely skill or professional status); alignment of values and faith tradition; willingness to be honest rather than merely encouraging; and evidence that they have navigated some of what you are navigating. How to ask: be specific about what you are hoping for (monthly conversation, occasional check-in, focused season of investment); honor their time by coming prepared; and make clear that you are asking for their wisdom, not their endorsement. Most people who are worth asking will say yes to a well-framed, humble request." },
  { title: "Being a Mentor — the Privilege and the Cost", verse: "2 Cor 3:2", text: "You are our letter, written on our hearts, known and read by everyone, Paul writes to the Corinthians. Mentors shape others more profoundly than they realize — and often in ways they will not live to see. The cost of mentoring is real: time, emotional investment, and the occasional disappointment of watching someone you have poured yourself into make poor choices. But the privilege is participation in another person's formation, in the slow and sacred work of someone becoming more fully themselves in Christ. The mature Christian's question is not whether they have time to mentor but whether they are willing to make themselves available to the work God is doing in a younger person through them." },
];

const voices = [
  { name: "Paul Stanley and J. Robert Clinton", role: "Connecting: The Mentoring Relationships You Need to Succeed in Life", quote: "No one person can give you everything you need for the journey. The most effective leaders we studied had not one mentor but a constellation of mentoring relationships — a network of people at different life stages, with different gifts and experiences, each contributing something the others could not. Building that network intentionally, across a lifetime, is one of the most important investments a person can make.", bio: "Stanley and Clinton's research-based framework identifies multiple types of mentoring relationships — intensive, occasional, and passive — and argues that healthy spiritual and professional development requires drawing from all three. Their concept of a mentoring constellation challenges the idea that mentoring is a single, primary relationship and instead presents it as a deliberate network of formative connections across a lifetime of growth." },
  { name: "Dr. Howard Hendricks", role: "Iron Sharpens Iron", quote: "Every man needs three people in his life: a Paul — someone who is ahead of you on the journey and investing in you; a Barnabas — a friend who walks alongside you, who knows you fully and loves you anyway; and a Timothy — someone who is behind you on the journey and into whom you are deliberately pouring your life. If you have all three, you are rich beyond measure. Most people have none.", bio: "Hendricks taught at Dallas Theological Seminary for more than five decades, and his framework of Paul, Barnabas, and Timothy has become perhaps the most widely used model for thinking about mentoring relationships in evangelical Christianity. His point is not merely organizational but diagnostic: the absence of any of these three relationships represents a serious gap in a person's formation and accountability. The framework has been taken up by Howard Hendricks's student Howard Mentoring communities, Promise Keepers, and countless local church discipleship programs." },
  { name: "Reggie McNeal", role: "The Present Future", quote: "The church does not have a program problem. It has a people-development problem. The question is not whether we have enough activities for people to attend, but whether we are producing disciples who know how to form other disciples. Mentoring is not a supplemental program for the spiritually ambitious; it is the irreplaceable mechanism by which one generation passes on not just information but wisdom, character, and lived faith to the next.", bio: "McNeal writes as a missiologist concerned with the long-term health of the North American church, and his diagnosis is that churches have substituted programs for genuine formation. His argument about mentoring is embedded in a broader case that the church needs to recover the ancient practice of intentional intergenerational investment — not as a department of the church but as the normal expectation for every mature Christian. The Present Future remains one of the most quoted critiques of institutional church culture in the past two decades." },
];

const practices = [
  { icon: "🔍", title: "Identifying Your Paul, Barnabas, and Timothy", text: "Take stock of your current relational landscape using Howard Hendricks's three-category framework. Who is your Paul — someone ahead of you spiritually, investing in your formation? Who is your Barnabas — a peer who knows you fully and speaks honestly? Who is your Timothy — someone younger in faith you are deliberately investing in? Identifying the gaps is the first step toward filling them." },
  { icon: "📅", title: "Meeting Regularly with Intention", text: "Mentoring without a regular meeting is not mentoring — it is occasional advice. Build a recurring rhythm (monthly at minimum) and come to each meeting with a prepared agenda: the challenge you are currently facing, what you are learning, and a specific question for your mentor or mentee. The agenda honors their time and trains you to be reflective between meetings." },
  { icon: "❓", title: "Asking Better Questions than Giving Answers", text: "The primary skill of a mentor is not information delivery but question-asking. What would you do differently if you were not afraid? What is the real issue beneath the issue you just described? What does this situation reveal about what you believe about God? Great questions open space for the mentee to discover what they already know but have not articulated. The mentor who talks less and asks better grows more people." },
  { icon: "📖", title: "Being a Learner, Not Just a Teacher", text: "The mentor who approaches the relationship as a one-way transfer of wisdom will eventually run dry and become irrelevant. The best mentors remain curious — about the mentee's world, about what younger people see that older people miss, about how God is working in a life less experienced than their own. Being genuinely open to learning from those you are investing in is both a posture of humility and a source of renewal for the mentor." },
  { icon: "🌱", title: "Multiplying: Commit to Invest Within Two Years", text: "One of the clearest signs that mentoring is forming you is the desire to pass on what you are receiving. Within two years of entering a meaningful mentoring relationship, commit to identifying someone younger in faith and making yourself intentionally available to them. The goal of biblical mentoring is not a better-developed individual but a multiplying community — faith transmitted across generations in living relationship." },
];

const scriptures = [
  { verse: "2 Tim 2:2", text: "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others." },
  { verse: "Titus 2:3-5", text: "Likewise, teach the older women to be reverent in the way they live... Then they can urge the younger women to love their husbands and children, to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God." },
  { verse: "Prov 27:17", text: "As iron sharpens iron, so one person sharpens another." },
  { verse: "1 Thess 2:8", text: "Because we loved you so much, we were delighted to share with you not only the gospel of God but our lives as well." },
  { verse: "2 Cor 3:2", text: "You yourselves are our letter, written on our hearts, known and read by everyone." },
  { verse: "Mark 3:14", text: "He appointed twelve that they might be with him and that he might send them out to preach." },
];

const videos = [
  { id: "Tfy-3GdB9D8", title: "The Biblical Foundation of Christian Mentoring" },
  { id: "Tz_mFNH84NQ", title: "Paul, Barnabas, and Timothy: The Three Relationships You Need" },
  { id: "zfFJq7L1ZzY", title: "How to Find and Approach a Mentor" },
  { id: "HMIdSY8P4Yw", title: "Titus 2 and Generational Discipleship" },
];

type CMEntry = { id: string; date: string; relationship: string; question: string; lesson: string };

export default function ChristianMentoringPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_chrmentoring_entries") ?? "[]"); } catch { return []; }
  });
  const [jRelationship, setJRelationship] = useState("");
  const [jQuestion, setJQuestion] = useState("");
  const [jLesson, setJLesson] = useState("");

  useEffect(() => { localStorage.setItem("vine_chrmentoring_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jRelationship.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), relationship: jRelationship, question: jQuestion, lesson: jLesson }, ...prev]);
    setJRelationship(""); setJQuestion(""); setJLesson("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Discipleship &amp; Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Mentoring</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Biblical mentoring — finding, being, and multiplying mentors across the generations of faith, grounded in Scripture and the wisdom of those who have gone before.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? PURPLE + "22" : "transparent", color: tab === t.id ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: PURPLE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Mentoring</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to track your growth and intention across your mentoring relationships.</p>
            {[
              { label: "Relationship — which mentoring relationship are you focusing on", val: jRelationship, set: setJRelationship },
              { label: "Question — what question you brought to a mentor or mentee", val: jQuestion, set: setJQuestion },
              { label: "Lesson — what you learned from the conversation or season", val: jLesson, set: setJLesson },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: PURPLE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Relationship:</span> {e.relationship}</p>
                      {e.question && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: PURPLE, fontWeight: 600 }}>Question:</span> {e.question}</p>}
                      {e.lesson && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: PURPLE, fontWeight: 600 }}>Lesson:</span> {e.lesson}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: PURPLE }}>{v.title}</h3>
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
