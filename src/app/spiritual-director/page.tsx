"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Spiritual Direction? — Ancient Companion, Present Gift", verse: "1 Sam 3:9", text: "Speak, Lord, for your servant is listening. Spiritual direction is one of the oldest pastoral practices in the Christian tradition. The desert fathers and mothers of the 3rd–5th centuries practiced a form of soul accompaniment in which seekers would approach an abba or amma with the question 'Give me a word.' Ignatius of Loyola formalized discernment-centered direction in the 16th century, and Teresa of Ávila wrote extensively about the necessity of a wise guide for the interior life. Today, spiritual direction is defined as a prayerful, one-on-one conversation focused on noticing God's activity in one's life — distinct from therapy (which addresses psychological health), pastoral counseling (which solves presenting problems), and mentoring (which transfers skills). Its singular focus is the directee's relationship with God." },
  { title: "The Director's Role — Listening for God, Not Giving Answers", verse: "Luke 10:39", text: "She sat at the Lord's feet listening to what he said. The spiritual director is often described as a midwife — one who assists at a birth they did not cause and cannot force. The director is not the author of the directee's relationship with God; God is. The director's role is attention, discernment, and asking good questions that help the directee notice what God may already be doing. A good director does not prescribe what God should say, does not give advice on every problem, and is not shocked by anything. They listen at two levels simultaneously: to the directee and to the Spirit. Their primary tool is prayerful presence. Their primary gift is helping the directee hear what they already sense but have not yet articulated." },
  { title: "Ignatius of Loyola and the Discernment of Spirits — Core Framework for Direction", verse: "1 John 4:1", text: "Do not believe every spirit, but test the spirits to see whether they are from God. Ignatius of Loyola's Spiritual Exercises introduced a systematic framework for what he called the discernment of spirits — the practice of noticing the inner movements of the soul and determining their source. Consolation refers to movements that draw the soul toward God: peace, faith, hope, love, tears of joy. Desolation refers to movements away from God: restlessness, darkness, confusion, and temptation. Spiritual directors trained in the Ignatian tradition help directees name these movements, recognize patterns over time, and distinguish the voice of God from the voice of self-interest or spiritual opposition. This framework remains one of the most practically useful tools in spiritual direction across traditions." },
  { title: "Finding a Spiritual Director — Who Qualifies and Where to Look", verse: "Prov 15:22", text: "Plans fail for lack of counsel, but with many advisers they succeed. Not everyone who is spiritually mature is qualified to give spiritual direction. The practice requires specific training in listening, discernment, and contemplative prayer — most formation programs are two to three years. Spiritual Directors International (sdiworld.org) maintains a global directory of trained directors. Retreat centers (Jesuit, Benedictine, and ecumenical), seminaries, and religious communities are also good sources. Frequency of meetings is typically monthly — enough regularity to track patterns without becoming dependency. Cost varies: some directors offer sliding scale or no-fee direction; others charge $50–100 per session. If cost is prohibitive, ask directly — many directors have discounted slots for those in genuine need." },
  { title: "What Happens in a Direction Session — What to Expect", verse: "Acts 8:31", text: "How can I understand unless someone guides me? A spiritual direction session typically lasts 45–60 minutes. The director opens with prayer, then invites the directee to share what has been happening in their relationship with God since the last meeting. The directee does most of the talking; the director listens more than they speak. Silence is not awkward — it is welcomed as space for God to speak. The director asks open questions: Where did you notice God? What was that like? What do you sense God might be saying? The session closes with prayer. To prepare well, the directee might journal through the month beforehand, noting moments of consolation, desolation, and any recurring themes. Coming with one question or area to explore — rather than a list of problems — usually produces the richest sessions." },
];

const voices = [
  { name: "Thomas Merton", role: "Spiritual Direction and Meditation", quote: "The spiritual director is not a teacher who gives instructions, nor a confessor who absolves sins, but one who helps us discover and respond to the secret movements of grace in our own souls. No one should attempt to journey alone through the interior life. The risks of self-deception are too great, the blind spots too numerous, and the consolations too easily mistaken for one's own achievement.", bio: "Merton's Spiritual Direction and Meditation remains one of the most concise and penetrating treatments of the subject. Writing from within the Cistercian tradition, Merton argues that the inner life requires an outer witness — not because God cannot speak directly, but because we are too prone to hear only ourselves. His own relationship with his abbot and his later correspondence with directees shaped his conviction that accompaniment is not optional for serious Christian formation." },
  { name: "David G. Benner", role: "Sacred Companions", quote: "Spiritual friendship and spiritual direction occupy the same space: the place where two people agree to pay attention to God together. In true spiritual accompaniment, neither person journeys alone, and neither is merely serving the other. There is a mutuality of attentiveness — to God, to the other, and to the movements of the Spirit in the space between them.", bio: "Benner's Sacred Companions examines several forms of soul friendship: spiritual direction, spiritual friendship, mentoring, and discipling. He draws on depth psychology as well as the Christian tradition to argue that growth in intimacy with God and growth in intimacy with others are inseparable. His treatment of spiritual direction is accessible to those exploring it for the first time and substantive enough for trained directors." },
  { name: "Margaret Guenther", role: "Holy Listening", quote: "The spiritual director is first of all a host — one who creates a space of welcome, unhurried attention, and safety. The directee arrives bringing the whole of their life, and the director's task is simply to be present to that life with reverence, without agenda, and with the confidence that God is already at work in what the directee brings.", bio: "Guenther's Holy Listening has become a standard text in spiritual direction training programs. An Episcopal priest and seminary professor, she develops the image of the director as host and midwife — both hospitable and assistive, but never the center of what is happening. Her book is warm, practical, and deeply attentive to the particularities of different directees: the young, the aging, those in crisis, those in dryness." },
];

const practices = [
  { icon: "🔍", title: "Find a Director Through SDI", text: "Visit sdiworld.org and use the global directory to search for trained spiritual directors in your area. Filter by tradition, language, and availability. Read profiles carefully — theological fit and personal rapport matter. Most directors offer a free or low-cost first session to discern mutual fit before committing." },
  { icon: "📓", title: "Prepare with Weekly Journaling", text: "In the weeks before your direction session, keep a brief journal of your inner life: moments of consolation, moments of desolation, times you sensed God's presence, times you felt spiritually dry. Patterns in this record become the richest material for direction. Come with observations, not just events." },
  { icon: "❓", title: "Come with a Question or Area to Explore", text: "Rather than arriving with a list of things to discuss, identify one question or area of your relationship with God that you most want to bring. This focus deepens the session and allows the director to listen at a level that scattered topics do not permit. The question does not need to be answered — it needs to be held together." },
  { icon: "🙏", title: "Follow Up on Prayer Invitations", text: "After each session, note any invitations that emerged — a scripture to sit with, a prayer practice to try, a question to carry. Treat these as experiments rather than assignments. At the next session, report honestly on what happened, including if you found the invitation difficult or unappealing. That honest report is often the richest material of the following session." },
  { icon: "🏕️", title: "Annual Retreat as Part of the Direction Relationship", text: "Many directors encourage their directees to make an annual silent retreat of one to five days. The retreat deepens everything discussed in monthly sessions by giving extended, uninterrupted space for prayer. Report your retreat experience in the session that follows — transitions, resistances, and unexpected graces in a retreat often mark the most important movements of a year's spiritual journey." },
];

const scriptures = [
  { verse: "1 Sam 3:9", text: "Speak, Lord, for your servant is listening." },
  { verse: "Prov 15:22", text: "Plans fail for lack of counsel, but with many advisers they succeed." },
  { verse: "Luke 10:39", text: "She sat at the Lord's feet listening to what he said." },
  { verse: "Acts 8:31", text: "How can I understand unless someone guides me?" },
  { verse: "Heb 5:14", text: "But solid food is for the mature, who by constant use have trained themselves to distinguish good from evil." },
  { verse: "1 John 4:1", text: "Do not believe every spirit, but test the spirits to see whether they are from God." },
];

const videos = [
  { id: "3kAYNGLZxaw", title: "What Is Spiritual Direction?" },
  { id: "9DkJzWiJT4Q", title: "Finding a Spiritual Director" },
  { id: "DvHBbTz8c1M", title: "Ignatian Discernment of Spirits" },
  { id: "8G2LgwOYmtg", title: "What Happens in a Direction Session" },
];

type SDEntry = { id: string; date: string; question: string; insight: string; action: string };

export default function SpiritualDirectorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_spdir_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jInsight, setJInsight] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_spdir_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, insight: jInsight, action: jAction }, ...prev]);
    setJQuestion(""); setJInsight(""); setJAction("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Spiritual Direction</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Find and work with a spiritual director — a trained companion who helps you notice God's activity in your life and respond with greater faithfulness.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? INDIGO + "22" : "transparent", color: tab === t.id ? INDIGO : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: INDIGO, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: INDIGO, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: INDIGO, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Direction Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record what you want to bring to direction — questions, movements, and invitations.</p>
            {[
              { label: "Question or area to bring to direction", val: jQuestion, set: setJQuestion },
              { label: "What you've noticed about God's movement recently", val: jInsight, set: setJInsight },
              { label: "What you sense God inviting you to do", val: jAction, set: setJAction },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: INDIGO }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem", color: INDIGO }}>Direction Entry</span>
                        <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: MUTED, marginBottom: 2 }}><strong style={{ color: TEXT }}>Question:</strong> {e.question}</p>
                      {e.insight && <p style={{ fontSize: "0.85rem", color: MUTED, marginBottom: 2 }}><strong style={{ color: TEXT }}>Insight:</strong> {e.insight}</p>}
                      {e.action && <p style={{ fontSize: "0.85rem", color: MUTED }}><strong style={{ color: TEXT }}>Action:</strong> {e.action}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: INDIGO }}>{v.title}</h3>
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
