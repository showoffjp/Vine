"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is a Testimony? — Your Unique Witness to What God Has Done", verse: "Rev 12:11", text: "They overcame by the blood of the Lamb and the word of their testimony. A testimony is not an argument for Christianity — it is a first-person account of what God has done in your life. Arguments can be refuted; your own experience cannot. No one can tell you that what happened to you did not happen. This is why testimony occupies such a unique place in Christian witness: in a skeptical age that distrusts abstract claims about religion, a concrete personal story of transformation, answered prayer, or spiritual encounter bypasses the usual defenses. You are not asking someone to accept a proposition — you are inviting them to consider what they cannot dismiss: that you are different, and something happened." },
  { title: "Peter at Pentecost — Testimony as Proclamation", verse: "Acts 2:14-41", text: "Peter's Pentecost address is the New Testament's paradigm sermon, and it is structured as testimony connected to proclamation. Peter begins with what happened: something has occurred that requires explanation. He then moves to what it means: this is what was spoken through the prophet Joel, and it points to the crucified and risen Jesus. He ends with what it requires: repent and be baptized. Personal testimony always follows this same shape, even in ordinary conversation. We begin with our experience, but that experience points beyond itself to Christ — to who he is and what he has done. A testimony that ends with the teller rather than with Jesus is not yet complete. It is a bridge, not a destination." },
  { title: "The Three Parts of a Testimony — Before, Meeting, After", verse: "Acts 26:1-29", text: "Paul's testimony before Agrippa in Acts 26 provides the classic three-part structure that has guided Christian witness for two thousand years. Part one is life before the turning point: Paul describes his zeal as a Pharisee and his persecution of Christians. Part two is the turning point itself: the Damascus road encounter with the risen Christ. Part three is life since: the call he received and the mission he has pursued. Each part matters. The before establishes that the change was real and had a starting point. The meeting names what God actually did. The after shows that the change has lasted. The discipline is to be specific and honest without being melodramatic in the before or minimizing in the after. The best testimonies are concrete, human, and pointed." },
  { title: "Not Everyone Has a Dramatic Story — and That Is Good News", verse: "1 Cor 1:27", text: "God chose the weak things of the world to shame the strong. There is a temptation in Christian witness to prize the dramatic conversion — the addict delivered overnight, the atheist undone by a vision. These stories are real and powerful. But the ordinary testimony is often more compelling to ordinary people. The person who grew up in a Christian home and simply found that the faith held — through adolescence, doubt, loss, and adult complexity — has a story worth telling. The person who cannot point to a specific conversion moment but can describe a gradual awakening, a persistent sense of being known, a practice that slowly formed them — that is also a testimony. God uses the full range of human stories. The task is to find the particular contour of what God has done in your specific life and tell that honestly." },
  { title: "Natural Opportunities — Sharing Without Forcing", verse: "Col 4:5-6", text: "Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone. The best testimony sharing is not a technique to be deployed but a natural overflow of a life being transformed. There are four categories of natural sharing opportunity: when someone asks (Be prepared to give an answer, 1 Pet 3:15), when your experience is directly relevant to what someone is sharing, when you are invited into someone's spiritual search, and when the Spirit creates a prompting that feels unmistakable. What these four have in common is that they begin with attention — to the other person, to the moment, to the Spirit. The primary skill of effective witness is not eloquence in speaking but attentiveness in listening. You cannot share your story well with someone whose story you have not heard." },
];

const voices = [
  { name: "Mark Mittleberg", role: "Becoming a Contagious Christian", quote: "God has given each of us a unique combination of personality, background, and spiritual gifts that make our approach to evangelism one-of-a-kind. There is no single contagious Christian style. Some people share their faith directly and confrontationally; others relationally and gradually; others through intellectual dialogue; others through service. What all of them share is authenticity — they are not performing a technique but living out a genuine relationship with Christ that spills into the lives of people around them.", bio: "Mittleberg served as the evangelism director at Willow Creek Community Church and has been one of the most practical voices on personal faith-sharing in the American evangelical tradition. His key contribution is the insistence that effective witness does not require a single method but a personal style that matches how God actually made you — and that every Christian has a style, even if they have not yet found it." },
  { name: "Rebecca Manley Pippert", role: "Out of the Saltshaker", quote: "Evangelism is not a special activity for specially gifted people. It is a way of living. Salt does not decide when to be salty — it simply is what it is, and the food around it is flavored. When Christians live authentically — when their faith is genuinely integrated into their work, friendships, family, and crises — the people around them cannot help noticing. The question is not primarily whether we share our faith but whether we are living in a way that makes the sharing natural and the story worth telling.", bio: "Out of the Saltshaker (1979) remains one of the most influential books on personal evangelism in the late twentieth century. Pippert's central contribution is the recovery of Jesus as the model for evangelism — not a technique but a person who was so fully himself, and so genuinely present to people, that they were drawn to him. She argues that most Christians are ineffective in witness not because they lack training but because they have separated their faith from their actual daily life." },
  { name: "Michael Green", role: "Evangelism in the Early Church", quote: "The most striking feature of early Christian evangelism is how ordinary it was. It was not carried out primarily by apostles or trained evangelists but by ordinary men and women who had encountered Jesus and could not stop talking about him. In the marketplace, in the home, on the road, in prison — the first Christians told their story wherever they found themselves. The testimony was not a program; it was an overflow.", bio: "Michael Green's Evangelism in the Early Church (1970, revised 2003) is the definitive scholarly treatment of how Christianity spread in the first three centuries. His research demonstrates that personal testimony and informal witness were the primary engine of the church's growth — not mass meetings or formal campaigns. This historical context is important: the early church grew explosively without professional evangelists, because every believer understood their story as part of the larger story of what God was doing in the world." },
];

const practices = [
  { icon: "✍️", title: "Write Your 3-Minute Testimony", text: "A written three-minute testimony — short enough for a natural conversation, long enough to include the three parts — is the foundational tool of personal witness. Write it out in full, then read it aloud and time it. Aim for honest, specific, and clear language that a non-religious person would understand. Avoid Christian jargon. Include a concrete moment or turning point. End with where you are now, not just where you were then. Writing it forces clarity; the clarity makes sharing natural." },
  { icon: "🗣️", title: "Practice with a Safe Listener", text: "Before sharing your testimony with someone outside the faith, practice it with a trusted Christian friend who can give honest feedback. Ask them: Was it clear? Was it specific? Did it point to Christ or mostly to you? Did any Christian jargon land oddly? Did it sound like a rehearsed speech or a real story? Practice does not make testimony mechanical — it makes you comfortable enough with the shape of the story that you can tell it naturally, without stumbling or trailing off at the crucial moment." },
  { icon: "📔", title: "Collect Your Smaller Faith Stories", text: "Alongside your main testimony, develop a collection of smaller faith stories — answered prayers, moments of guidance, experiences of provision, times when something you read in Scripture proved true in your life. These smaller stories are often more useful in ordinary conversation than the full testimony because they are more easily connected to what the other person is already talking about. Keeping a journal of these stories ensures you have them ready when a natural opening presents itself." },
  { icon: "👂", title: "Listen Before You Speak", text: "The most common error in personal witness is beginning to speak before you have heard the other person's story. Effective testimony sharing is almost always preceded by genuine curiosity about the other person: Where are you from? What has your experience of faith been? Have you ever had a moment that felt like more than coincidence? Listening first accomplishes two things: it shows you care about them as a person, not merely as a witness opportunity, and it helps you know which part of your story is most relevant to where they actually are." },
  { icon: "🙏", title: "Pray for One Specific Person for 30 Days", text: "Choose one person in your life who does not yet know Christ and pray for them daily for thirty days — not that they would hear a sermon or come to church, but that God would create a natural opening for a genuine conversation about faith. This practice does three things: it makes your heart tender toward that person, it sharpens your attention to natural openings when they arise, and it situates your witness in prayer rather than strategy. Many Christians report that when they pray this way, the openings come." },
];

const scriptures = [
  { verse: "Acts 1:8", text: "You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth." },
  { verse: "Rev 12:11", text: "They triumphed over him by the blood of the Lamb and by the word of their testimony; they did not love their lives so much as to shrink from death." },
  { verse: "Col 4:5-6", text: "Be wise in the way you act toward outsiders; make the most of every opportunity. Let your conversation be always full of grace, seasoned with salt, so that you may know how to answer everyone." },
  { verse: "1 Pet 3:15", text: "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect." },
  { verse: "Acts 26:1-29", text: "Paul stretched out his hand and began his defense... I too was convinced that I ought to do all that was possible to oppose the name of Jesus of Nazareth... As I was on the road, I saw a light from heaven... So then, King Agrippa, I was not disobedient to the vision from heaven." },
  { verse: "John 9:25", text: "He replied, Whether he is a sinner or not, I do not know. One thing I do know. I was blind but now I see!" },
];

const videos = [
  { id: "UE1jVHCDVoY", title: "How to Share Your Testimony" },
  { id: "wPuX4j9b6Oo", title: "The Power of Personal Testimony in Evangelism" },
  { id: "iFv3WZKJnr8", title: "Writing Your 3-Minute Testimony" },
  { id: "4L_kk8X5aXQ", title: "Natural Evangelism: Sharing Faith Without Pressure" },
];

type TEntry = { id: string; date: string; context: string; element: string; response: string };

export default function SharingYourTestimonyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_testimony_entries") ?? "[]"); } catch { return []; }
  });
  const [jContext, setJContext] = useState("");
  const [jElement, setJElement] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => { localStorage.setItem("vine_testimony_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jContext.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), context: jContext, element: jElement, response: jResponse }, ...prev]);
    setJContext(""); setJElement(""); setJResponse("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Evangelism &amp; Witness</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Sharing Your Testimony</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Learn to share your personal faith story effectively — the theology of testimony, how to craft and tell your story, and the practices that make witness natural rather than forced.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Testimony Sharing</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts after you have shared your testimony or practiced sharing it.</p>
            {[
              { label: "Context — where and with whom you shared your testimony", val: jContext, set: setJContext },
              { label: "Element — which part felt most natural or most difficult", val: jElement, set: setJElement },
              { label: "Response — how it was received", val: jResponse, set: setJResponse },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Context:</span> {e.context}</p>
                      {e.element && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Element:</span> {e.element}</p>}
                      {e.response && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Response:</span> {e.response}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
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
