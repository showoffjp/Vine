"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Elijah Under the Juniper Tree",
    verse: "1 Kings 19:4-5",
    text: "'I have had enough, Lord,' said Elijah. 'Take my life.' And then he lay down under a juniper tree and slept. What follows is not a rebuke but an angel with food: 'The journey is too much for you.' God's first response to Elijah's burnout was not a sermon on perseverance but bread and water and rest. This is a pattern worth noticing.",
  },
  {
    title: "The Servant Who Needed Sabbath",
    verse: "Mark 6:31",
    text: "Jesus said to his disciples, 'Come away by yourselves to a deserted place and rest for a while.' He said this to men who had been doing ministry — healing, preaching, casting out demons. The work was good. And Jesus still pulled them away from it. Sabbath is not the failure of ministry; it is the precondition for it.",
  },
  {
    title: "The Difference Between Fruitfulness and Productivity",
    verse: "John 15:5",
    text: "Without me, you can do nothing. Ministry culture often runs on productivity — metrics, attendance, giving, programs. But Jesus uses the language of abiding. A branch that is not drawing from the vine may still look busy. The fruit test is not how much activity you generated but whether it was connected to the source of life. Burnout is often a sign that the branch got disconnected from the vine while still thrashing about.",
  },
  {
    title: "You Are a Sheep, Not the Shepherd",
    verse: "Psalm 23:1",
    text: "The pastor's temptation is to forget that the Lord is their shepherd too. The pastor feels responsible for carrying others through the valley of the shadow, sustaining others beside still waters, feeding others at the table of provision. But Jesus is the Good Shepherd. You are an undershepherd. You are also a sheep. You need rest, green pastures, and a shepherd who restores your soul — not just someone who manages your self-care.",
  },
  {
    title: "Ministry Wounds and the Wounded Minister",
    verse: "2 Corinthians 4:7-9",
    text: "We have this treasure in jars of clay, to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed. Paul is describing ministry as it is — not the triumphant version but the bruised version. Burnout does not mean you have failed. It may mean you have been carrying real weight. Jars of clay crack. That is allowed.",
  },
];

const voices = [
  {
    id: 1,
    name: "Alan Fadling",
    role: "Author, An Unhurried Life",
    quote: "Hurry is not just a scheduling problem. It is a spiritual problem. And it is almost epidemic among pastors.",
    bio: "Alan Fadling founded the Unhurried Living project to help ministry leaders recover a pace of life rooted in abiding with Jesus rather than performing for him.",
  },
  {
    id: 2,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church",
    quote: "Many pastors who burn out were formed in ministry systems that rewarded output and punished vulnerability. The system burned them. They're not failures.",
    bio: "Chuck DeGroat is a professor and therapist who works with pastors and church leaders navigating burnout, spiritual crisis, and the systemic issues in ministry culture that produce them.",
  },
  {
    id: 3,
    name: "Pete Scazzero",
    role: "Author, Emotionally Healthy Spirituality",
    quote: "You can't lead people to a depth of health that you have not gone to yourself.",
    bio: "Pete Scazzero built and nearly destroyed his own ministry before a crisis led him to discover the connection between emotional health and spiritual maturity. His work has helped thousands of pastors.",
  },
  {
    id: 4,
    name: "Tish Harrison Warren",
    role: "Author, Prayer in the Night; Anglican Priest",
    quote: "The pastor who cannot receive care from the congregation has made themselves into a vending machine for grace rather than a member of the body.",
    bio: "Tish Harrison Warren writes with honesty about the vulnerability of pastoral life and the need for clergy to be embedded in real community rather than protected from it by their role.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Take the Crisis Seriously",
    text: "Burnout is not a phase to push through. If you are experiencing emotional numbness, inability to pray, rage at parishioners, physical symptoms, or persistent hopelessness, this is a medical and spiritual emergency, not a productivity problem. Treat it accordingly.",
  },
  {
    icon: "🤫",
    title: "Tell Someone Outside Your Church",
    text: "Pastors are uniquely isolated because their congregation cannot be their therapist. Find a counselor, a spiritual director, a denominational supervisor, or a pastoral peer group outside your church where you can be honest about what is happening inside you.",
  },
  {
    icon: "📵",
    title: "Create Non-Negotiable Rest",
    text: "One full day off per week — not a day for sermon prep or hospital visits or email. One month sabbatical every seven years. These are not luxuries; they are the Sabbath pattern that God wove into creation. If your church won't support this, that is important information about the church.",
  },
  {
    icon: "🪑",
    title: "Sit in the Congregation as a Recipient",
    text: "If your church life consists entirely of giving, you are starving. Find ways — a retreat, a worship service at another church, a small group where you are not the leader — to receive ministry rather than only give it.",
  },
  {
    icon: "📋",
    title: "Audit What Is Actually Required",
    text: "Many ministry expectations are cultural, not biblical. Work with your board to honestly assess what is required, what is expected, and what you have simply assumed was required. Significant loads are often optional.",
  },
  {
    icon: "🏥",
    title: "Consider a Sabbatical or Leave",
    text: "Extended burnout often requires extended recovery. A sabbatical of three to six months may be the difference between a career in ministry and leaving it. Many denominational bodies offer sabbatical grants. This is not abandonment of the flock; it is fidelity to a calling that requires a living person.",
  },
];

const scriptures = [
  { verse: "1 Kings 19:5", text: "Then he lay down under the tree and fell asleep. All at once an angel touched him and said, 'Get up and eat. The journey is too much for you.'" },
  { verse: "Matthew 11:28-29", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
  { verse: "John 15:5", text: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing." },
  { verse: "Psalm 23:1-3", text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
  { verse: "2 Corinthians 4:7", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
];

type PBEntry = { id: string; date: string; honest: string; need: string; prayer: string };

export default function PastorBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PBEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_pastorburnoutj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const e: PBEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), honest, need, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_pastorburnoutj_entries", JSON.stringify(next));
    setHonest(""); setNeed(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_pastorburnoutj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Pastor Burnout & Ministry Exhaustion</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For clergy, ministers, and ministry leaders who are running on empty — and for the congregations who want to care for them well.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>If you are in crisis</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.pstraumacare.org" style={{ color: "#fca5a5" }}>pstraumacare.org</a> · <a href="https://ministryhealth.org" style={{ color: "#fca5a5" }}>ministryhealth.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is the honest state of your soul right now?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Not what you preach — what is actually true inside you..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What do you need that you have not asked for?</label>
                <textarea value={need} onChange={e => setNeed(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Rest, care, to be heard, time away..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for yourself (not for your congregation)</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What do you need from God today, as a sheep — not as a shepherd..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Be honest. This space is for you.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.honest && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>State of soul</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.honest}</p></>}
                {e.need && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What I need</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.need}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Emotionally Healthy Ministry — Pete Scazzero</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Pete Scazzero on how unexamined emotional patterns drive ministry burnout and what recovery requires.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Emotionally Healthy Ministry Pete Scazzero" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Sabbath and the Unhurried Life — Alan Fadling</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On why hurry is a spiritual problem and what it looks like to build a sustainable rhythm of work and rest in ministry.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Sabbath and the Unhurried Life" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Elijah's Burnout and God's Response</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A close reading of 1 Kings 19 and what it reveals about how God cares for the exhausted prophet — and the exhausted pastor.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Elijah's Burnout and God's Response" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>When Pastors Hurt — Chuck DeGroat</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Chuck DeGroat on the systems that harm pastors, the wounds they carry, and the path toward healing and integration.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="When Pastors Hurt Chuck DeGroat" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
