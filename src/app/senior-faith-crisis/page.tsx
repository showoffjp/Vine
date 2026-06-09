"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Does Not Abandon the Faithful in Old Age", verse: "Psalm 71:9", text: "Do not cast me away when I am old; do not forsake me when my strength is gone. This psalm is the prayer of an elderly believer who fears abandonment at the end of life. The fact that it is canonical means God received it as faithful prayer and answered it with his promise. He does not forsake the aging." },
  { title: "Doubt at the End of a Long Faith Is Not Failure", verse: "Mark 9:24", text: "Immediately the boy's father exclaimed: 'I do believe; help me overcome my unbelief!' A lifetime of faith does not immunize against doubt. The father's cry — holding belief and unbelief simultaneously — is exactly the prayer God answers. Honest doubt in old age is more faithful than performed certainty." },
  { title: "Unanswered Questions and Settled Trust Can Coexist", verse: "Job 42:5", text: "My ears had heard of you but now my eyes have seen you. Job never received an explanation for his suffering. But his encounter with God changed the frame of the question. Seniors who have watched prayers go unanswered, seen tragedies, and lost much are in Job's territory — where explanation yields to encounter." },
  { title: "The Body Wasting While the Inner Person Renews", verse: "2 Corinthians 4:16", text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day. Aging bodies, declining health, and the losses that multiply in later life do not contradict faith — they are the very terrain where Paul's teaching about outer wasting and inner renewal applies most directly." },
  { title: "The End of Life Is a Beginning, Not Only an Ending", verse: "Philippians 1:21-23", text: "For to me, to live is Christ and to die is gain. If I am to go on living in the body, this will mean fruitful labor for me. Yet what shall I choose? I do not know! Paul held death not as catastrophe but as transition into fullness. This is the theological framework the end of life is meant to inhabit." },
];

const voices = [
  { id: "v1", name: "Henri Nouwen", role: "Author, Our Greatest Gift", quote: "The question is not how to avoid dying but how to live in the face of death — to let death become a friend rather than an enemy.", bio: "Nouwen wrote specifically about dying and aging as spiritual opportunities. His reflections on the spiritual dimensions of the last third of life address the faith questions that emerge when the horizon becomes visible." },
  { id: "v2", name: "Eugene Peterson", role: "Author, A Long Obedience in the Same Direction", quote: "Long obedience does not mean smooth obedience. It means staying in the conversation with God through everything — including the things that make no sense at the end.", bio: "Peterson argued against quick-fix spirituality and for the spiritual formation that only happens over decades. His later writings address the specific gifts and questions that come with a long life of faith." },
  { id: "v3", name: "Joni Eareckson Tada", role: "Founder, Joni and Friends", quote: "Aging is not the loss of everything. It is the clarification of what remains when everything secondary is stripped away.", bio: "Joni, who has lived with quadriplegia for over 50 years, addresses aging and physical decline from a position of hard-won wisdom about what lasts and what does not." },
  { id: "v4", name: "Richard Rohr", role: "Author, Falling Upward", quote: "The second half of life is about finding the meaning that holds when the earlier structures no longer work.", bio: "Rohr argues that the second half of life (which for many seniors begins in the 60s or later) is characterized by a different kind of faith — less concerned with getting it right and more concerned with finding what is true." },
];

const practices = [
  { icon: "🗣️", title: "Name the Questions You Actually Have", text: "Many seniors suppress late-life faith questions out of loyalty to a lifetime of belief, or fear of distressing younger family members. Find a spiritual director, pastor, or trusted friend with whom you can name your actual questions. Honest questioning in old age is not betrayal of a life's faith — it is its deepest expression." },
  { icon: "📖", title: "Read Job and Ecclesiastes as Your Books", text: "These books were written by and for people who have lived long enough to see the world's complexity, experienced God's silence, and found that simple answers do not hold. Job questions suffering and gets an encounter. Ecclesiastes questions meaning and arrives at simplicity. Both are for the person with decades of questions accumulated." },
  { icon: "🙏", title: "Practice the Examen as an Evening Ritual", text: "The Ignatian examen — reviewing the day for moments of grace and moments of distance from God — is a practice particularly suited to the elderly, who have more time and need for daily spiritual processing. Five minutes at day's end can be an anchor." },
  { icon: "🤝", title: "Find an Intergenerational Community", text: "Spiritual isolation in later life is intensified when most of one's community has died and connection with younger generations has thinned. Actively cultivating intergenerational relationships — mentoring, small groups, shared meals — provides witnesses to your faith journey and witnesses to theirs." },
  { icon: "📝", title: "Write Your Spiritual Autobiography", text: "Reviewing the arc of a long life of faith — where God was present, where he seemed absent, what has changed, what has held — is one of the most spiritually generative activities available to older adults. It is also a gift to those who will survive you." },
  { icon: "🕊️", title: "Let Dying Be a Spiritual Practice", text: "Henri Nouwen taught that how we approach death is part of how we live. Beginning to release attachments, express gratitude and forgiveness, settle estrangements, and name what has been good — these are spiritual practices that belong to the end of life. They do not have to wait until crisis." },
];

const scriptures = [
  { verse: "Psalm 71:9", text: "Do not cast me away when I am old; do not forsake me when my strength is gone." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green." },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
  { verse: "2 Corinthians 4:16-17", text: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
];

type SeniorEntry = { id: string; date: string; question: string; holds: string; gift: string };

export default function SeniorFaithCrisisPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SeniorEntry[]>([]);
  const [form, setForm] = useState({ question: "", holds: "", gift: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_seniorfaithcrisisj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.question.trim()) return;
    const e: SeniorEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_seniorfaithcrisisj_entries", JSON.stringify(updated));
    setForm({ question: "", holds: "", gift: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_seniorfaithcrisisj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith in Later Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Faith Grows Hard in Old Age</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>A lifetime of faith does not prevent the late-life questions that come when prayers have gone unanswered, friends have died, bodies have failed, and simple answers no longer hold. This page is for older Christians whose faith is honest rather than comfortable, and who need company in the questions.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Spiritual Directors International</strong> — sdicompanions.org, find a director for late-life spiritual accompaniment</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if grief or despair has become a mental health crisis</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} placeholder="What question about God or faith is hardest for you to hold right now?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.holds} onChange={e => setForm(f => ({ ...f, holds: e.target.value }))} placeholder="What from your long faith still holds — what has not collapsed?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.gift} onChange={e => setForm(f => ({ ...f, gift: e.target.value }))} placeholder="What gift from your long life do you want to name or offer?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.question && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Question:</strong> {e.question}</p>}
                {e.holds && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>What holds:</strong> {e.holds}</p>}
                {e.gift && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Gift:</strong> {e.gift}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "SqGRnlXplx0", title: "The Rest of God", channel: "Eugene Peterson — Regent College", description: "Peterson on the spiritual wisdom of the long journey — what it means to remain in God's presence over decades and what forms of faith sustain through a whole life." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on the biblical vocabulary for a lifetime of unanswered prayers and ongoing suffering — how lament gives voice to the accumulated grief of the years." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on trusting a God whose ways are not our ways — the theology needed when experience and expectation have long since diverged." },
              { videoId: "7KMPN9OLoNo", title: "Suffering and God's Grace", channel: "Joni Eareckson Tada — Desiring God", description: "Joni on what decades of sustained suffering have taught her about God's character — a testimony to faith that has outlasted comfort and illusion." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
