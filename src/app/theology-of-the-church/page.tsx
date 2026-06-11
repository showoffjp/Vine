"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Church Is Not a Building or a Service — It Is a People", verse: "Eph 1:22-23", text: "The church, which is his body, the fullness of him who fills everything in every way. Ekklesia in Greek means assembly, gathering — it is a people, not a place. The building is where the church meets; the service is what the church does when it gathers. The reduction of the church to a weekly event has produced Christians who consume rather than contribute, attend rather than belong. The early house churches had no buildings, no professional clergy, and no program budgets — and they turned the world upside down. Recovering their ecclesiology begins with recovering their definition: the church is a people on mission together, not a religious service to attend." },
  { title: "The Four Marks — One, Holy, Catholic, Apostolic", verse: "Nicene Creed", text: "The Nicene Creed's four marks are theological claims, not merely historical descriptions. One: the church is one body despite its fragmentation — the scandal of denominationalism and the spiritual reality that precedes it. Holy: set apart for God, not morally perfect. Catholic: universal, not Roman — the whole church across all times and places. Apostolic: built on the apostles' teaching and mission. Each mark has direct implications for the local congregation: Does it pursue unity with other congregations? Is it called to holiness as a community? Does it recognize itself as part of something older and larger than its own tradition? Is its doctrine and mission continuous with the apostles?" },
  { title: "Why You Cannot Follow Jesus Alone — the Communal Hermeneutic", verse: "Heb 10:24-25", text: "Not giving up meeting together. The privatization of faith is a modern Western innovation with no biblical support. The New Testament assumes community as the context for formation. You cannot obey the one-another commands alone. You cannot be sharpened alone. The formation that only happens in community — in bearing burdens, confessing sin, enduring conflict, serving together — cannot be replicated by solitary spiritual practice, however sincere. The person who says they are spiritual but not religious is typically stunted in ways they cannot see, because they have removed the mirror that community provides. Growth requires being known by people who will tell you what they actually see." },
  { title: "Church Discipline — the Practice No One Talks About", verse: "Matt 18:15-17", text: "The near-total abandonment of church discipline in contemporary evangelical churches has not produced freer, healthier communities — it has produced communities where behavior has no consequences and therefore membership carries no meaning. Responsible church discipline is not punitive but restorative: its purpose is to win back the wandering person, not to exclude them. The difference between excommunication as punishment and excommunication as a final pastoral act — when every other means of restoration has been exhausted — is the difference between a court and a family. The church that exercises no discipline over its members communicates implicitly that it does not take seriously what it claims to believe." },
  { title: "The Missional Church — Sent, Not Just Gathered", verse: "John 20:21", text: "As the Father has sent me, I am sending you. The gathered church exists for the scattered church: worship equips mission. The church that gathers well but never scatters is incomplete — it has confused a means for an end. Alan Hirsch and Michael Frost argue that the missional nature of the church is its identity, not merely one of its programs. The attractional church model — build something compelling enough that people come to you — is not wrong but is insufficient. The sending church moves outward into neighborhoods, workplaces, and relationships with the same intentionality that Jesus moved outward into Galilee, Samaria, and the gentile world." },
];

const voices = [
  { name: "Dietrich Bonhoeffer", role: "Life Together", quote: "Christian brotherhood is not an ideal which we must realize; it is rather a reality created by God in Christ in which we may participate. The more clearly we learn to recognize that the ground and strength and promise of all our fellowship is in Jesus Christ alone, the more serenely shall we think of our fellowship and pray and hope for it.", bio: "Bonhoeffer wrote Life Together from within the Finkenwalde community — an illegal seminary operating under the Nazi regime. His central warning is against visionary idealism: the desire for an ideal community that destroys actual community by measuring it against an imagined perfection. Real Christian community is a gift of grace received, not a project of human construction." },
  { name: "Miroslav Volf", role: "After Our Likeness", quote: "The congregation is not merely a part of the church; it is the church in its local expression. Every local assembly that gathers in the name of Christ and practices word and sacrament is not a branch office of a larger institution — it is the whole church present in that place. The church does not exist above and beyond its local instantiations; it exists in them.", bio: "Volf's theological argument for free church ecclesiology grounds the authority and completeness of the local congregation not in its connection to a hierarchical institution but in the presence of Christ among those gathered in his name. His work is a rigorous engagement with both Catholic and Orthodox ecclesiology, arguing that the local congregation is not a fragment of the church but its full expression." },
  { name: "Alan Hirsch and Michael Frost", role: "The Shaping of Things to Come", quote: "The church does not have a mission. The mission has a church. Mission is not one of the things the church does alongside worship and community and teaching — it is the reason the church exists. A church that has lost its missionary impulse has not merely lost a program; it has lost its reason for being. The church is the missionary people of God, sent into the world as Jesus was sent into the world.", bio: "Hirsch and Frost are among the most influential voices in the missional church movement. Their argument is that the inherited model of attractional church — building a compelling religious product that draws people in — is structurally unable to reach the post-Christian West. The alternative is a movement model: decentralized, incarnational, reproducing communities embedded in the culture rather than separated from it." },
];

const practices = [
  { title: "Join a local church formally through membership or covenant", text: "Rather than attending indefinitely without commitment — the posture of a consumer rather than a member. Membership is the act of saying: I am not a spectator here, I belong to this people." },
  { title: "Move from consumer attendance to contributor participation", text: "Serving, giving, and leading in some capacity. The church is not a service to receive but a body to build. Every member has gifts that the community needs, and withholding them impoverishes both the giver and the body." },
  { title: "Learn the church's history and theology", text: "To understand what tradition you are in — what your congregation believes, where it comes from, what its distinctives are, and why they matter. Rootlessness in tradition produces shallowness in practice." },
  { title: "Practice church discipline graciously when situations require it", text: "Not punitive exclusion but the patient, loving work of accountability and restoration that honors both the individual and the community they belong to." },
  { title: "Pray regularly for the global church", text: "For persecuted churches, missionary endeavors, revival — keeping your vision of the church larger than the congregation you attend and the tradition you were raised in." },
];

const scriptures = [
  { verse: "Eph 1:22-23", text: "And God placed all things under his feet and appointed him to be head over everything for the church, which is his body, the fullness of him who fills everything in every way." },
  { verse: "Heb 10:24-25", text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching." },
  { verse: "Matt 16:18", text: "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it." },
  { verse: "Acts 2:42-47", text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles." },
  { verse: "1 Cor 12:12-14", text: "Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ. For we were all baptized by one Spirit so as to form one body — whether Jews or Gentiles, slave or free — and we were all given the one Spirit to drink." },
  { verse: "John 20:21", text: "Again Jesus said, Peace be with you. As the Father has sent me, I am sending you." },
];

const videos = [
  { id: "xRPkqgbYJ4Y", title: "What Is the Church? Ecclesiology Explained" },
  { id: "c0Gm9J1yYXw", title: "Why Church Membership Matters" },
  { id: "sNO71D4JBGs", title: "The Missional Church and Its Identity" },
  { id: "7e1vywziwYw", title: "Bonhoeffer on Life Together" },
];

type ECEntry = { id: string; date: string; question: string; commitment: string; gift: string };

export default function TheologyOfTheChurchPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ECEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ecclesiology_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jCommitment, setJCommitment] = useState("");
  const [jGift, setJGift] = useState("");

  useEffect(() => { localStorage.setItem("vine_ecclesiology_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, commitment: jCommitment, gift: jGift }, ...prev]);
    setJQuestion(""); setJCommitment(""); setJGift("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Community &amp; Church</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of the Church</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Ecclesiology — what the church is, why it matters, and why you cannot follow Jesus alone. The marks, the mission, and the practices of genuine belonging.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Relationship to the Church</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly and prayerfully about your commitment to and participation in the local church.</p>
            {[
              { label: "Question — a question you have about the church or about your commitment to it", val: jQuestion, set: setJQuestion },
              { label: "Commitment — a specific commitment you are making or renewing", val: jCommitment, set: setJCommitment },
              { label: "Gift — a gift or calling you are offering to your local church", val: jGift, set: setJGift },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Question:</span> {e.question}</p>
                      {e.commitment && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Commitment:</span> {e.commitment}</p>}
                      {e.gift && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Gift:</span> {e.gift}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
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
