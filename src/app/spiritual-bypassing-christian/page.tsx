"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Psalms Are Half Lament — God Designed Honest Emotion Into Worship", verse: "Psalm 88:18", text: "Darkness is my closest friend. Psalm 88 is the only psalm in the canon that ends with no resolution, no praise, no 'but God.' It ends in darkness. That it is canonical means God receives this prayer as faithful. The church that has no room for it has a smaller canon than Scripture provides." },
  { title: "Jesus Wept — He Did Not Redirect His Grief to Theology", verse: "John 11:35", text: "Jesus wept. This is the shortest verse in Scripture and one of the most theologically heavy. Jesus knew Lazarus would be raised. He had the power and intention to do it. He wept anyway. He did not bypass human grief with divine knowledge. He inhabited it fully." },
  { title: "Paul Named His Pain Rather Than Spiritualizing It", verse: "2 Corinthians 1:8", text: "We do not want you to be uninformed, brothers and sisters, about the troubles we experienced in the province of Asia. We were under great pressure, far beyond our ability to endure, so that we despaired even of life. Paul named despair precisely and publicly. He did not resolve it into a spiritual lesson before he had lived it." },
  { title: "The Holy Spirit Groans — Wordless, Unresolved, Present", verse: "Romans 8:26", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. The Spirit's prayer is not tidy theology. It is wordless groaning — unresolved, searching, present in the difficulty rather than above it. This is the model for prayer in pain." },
  { title: "Lament Is Not Unfaith — It Is Directed Suffering", verse: "Lamentations 2:19", text: "Arise, cry out in the night, as the watches of the night begin; pour out your heart like water in the presence of the Lord. The command to lament is imperative — pour out, cry out, do not hold back. Lament is not passive. It is vigorous, honest suffering directed toward God rather than away from him." },
];

const voices = [
  { id: "v1", name: "Mark Vroegop", role: "Author, Dark Clouds Deep Mercy", quote: "Spiritual bypassing uses God-language to avoid the painful and honest work that God actually wants us to do in suffering.", bio: "Vroegop's recovery of biblical lament is the most direct antidote to spiritual bypassing in the evangelical tradition. He shows that God designed lament as the appropriate response to pain — and that quick spiritual resolution actually dishonors both the pain and the God who designed lament." },
  { id: "v2", name: "Curt Thompson", role: "Psychiatrist, Author, The Soul of Shame", quote: "The church's discomfort with negative emotion creates a spirituality of performance rather than formation. Healing requires moving through the pain, not over it.", bio: "Thompson's integration of neuroscience and theology shows how spiritual bypassing short-circuits the actual formation process — the emotional processing, relational repair, and embodied healing — that produces genuine change." },
  { id: "v3", name: "Peter Scazzero", role: "Author, Emotionally Healthy Spirituality", quote: "It is not possible to be spiritually mature and emotionally immature. The parts of us we have not grieved become the parts that manage our faith rather than our faith managing them.", bio: "Scazzero's foundational work names how evangelical church culture has produced Christians who are theologically sophisticated and emotionally stunted — and provides a framework for the integrated formation that actually transforms." },
  { id: "v4", name: "Diane Langberg", role: "Psychologist", quote: "Using Scripture to silence pain is not faith. It is a way of avoiding the encounter with God that honest suffering actually invites.", bio: "Langberg has spent 50 years helping trauma survivors navigate the difference between genuine faith and spiritualized avoidance. Her work distinguishes what God actually asks of suffering people from what anxious religious environments demand." },
];

const practices = [
  { icon: "🛑", title: "Identify the Phrases That Shut Down Honest Emotion", text: "'Everything happens for a reason,' 'God won't give you more than you can handle,' 'Just pray about it,' 'Count your blessings' — these phrases are often used to end conversations about pain rather than enter them. Identifying which ones you use on yourself is the first step toward more honest prayer and community." },
  { icon: "📖", title: "Read and Pray the Lament Psalms", text: "Psalms 13, 22, 42, 43, 44, 55, 77, 88 — read them as permission to name pain honestly. God put them in Scripture because he wants to receive this kind of prayer. Commit to praying one lament psalm per week for two months and notice what changes." },
  { icon: "🧠", title: "Work With a Therapist on Emotional Awareness", text: "If you find it difficult to name what you actually feel — if you move quickly from pain to theological statement — a therapist can help you develop the emotional vocabulary and tolerance that makes honest prayer possible. This is not replacing faith with psychology; it is using psychology in service of faith." },
  { icon: "🤝", title: "Find a Community That Can Sit With You in Pain", text: "Spiritual bypassing is partly a community problem — when communities cannot tolerate unresolved pain, individuals learn to resolve it quickly. Find or build a small community that practices what Eugene Peterson called 'long obedience' — staying with the hard things without rushing to resolution." },
  { icon: "📝", title: "Write the Prayer You Have Not Prayed", text: "Write a prayer that names exactly what you feel — without editing it for God's comfort, your theology's consistency, or your community's approval. Read it aloud. This is often the most frightening and most liberating spiritual practice available." },
  { icon: "🌱", title: "Learn the Examen as a Daily Emotional Audit", text: "The Ignatian Examen — reviewing the day for consolation and desolation, for what drew you closer and what pushed you further from God — is a daily practice of emotional honesty before God. It trains the skill of noticing what is actually happening rather than what should be happening." },
];

const scriptures = [
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Psalm 13:1-2", text: "How long, Lord? Will you forget me forever? How long will you hide your face from me? How long must I wrestle with my thoughts and day after day have sorrow in my heart?" },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Lamentations 2:19", text: "Arise, cry out in the night, as the watches of the night begin; pour out your heart like water in the presence of the Lord." },
  { verse: "Psalm 62:8", text: "Trust in him at all times, you people; pour out your hearts to him, for God is our refuge." },
  { verse: "2 Corinthians 1:8", text: "We were under great pressure, far beyond our ability to endure, so that we despaired even of life. Indeed, we felt we had received the sentence of death." },
];

type BypassingEntry = { id: string; date: string; avoiding: string; honest: string; practice: string };

export default function SpiritualBypassingChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BypassingEntry[]>([]);
  const [form, setForm] = useState({ avoiding: "", honest: "", practice: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_spiritualbypassingj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.avoiding.trim()) return;
    const e: BypassingEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_spiritualbypassingj_entries", JSON.stringify(updated));
    setForm({ avoiding: "", honest: "", practice: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_spiritualbypassingj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Formation</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When Faith Bypasses Pain Instead of Entering It</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Spiritual bypassing is using religious language, practice, or doctrine to avoid rather than face difficult emotional realities. Many Christians have learned to do this — to leap to scripture, praise, or theological statement before they have actually grieved or felt. This page is for those who recognize this pattern in themselves and want to break it.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
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
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
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
                  <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.avoiding} onChange={e => setForm(f => ({ ...f, avoiding: e.target.value }))} placeholder="What emotion or truth are you currently avoiding with religious language?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.honest} onChange={e => setForm(f => ({ ...f, honest: e.target.value }))} placeholder="What would you say to God if you stopped editing the prayer?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.practice} onChange={e => setForm(f => ({ ...f, practice: e.target.value }))} placeholder="One practice this week that requires feeling rather than performing" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.avoiding && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Avoiding:</strong> {e.avoiding}</p>}
                {e.honest && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Honest prayer:</strong> {e.honest}</p>}
                {e.practice && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Practice:</strong> {e.practice}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop's foundational teaching on biblical lament — the alternative to spiritual bypassing that God himself designed into the worship vocabulary of Scripture." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how genuine spiritual formation requires emotional honesty — why bypassing emotion produces spiritual immaturity rather than maturity." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on the neuroscience and theology of honest emotional processing — why the brain needs to feel its way through rather than think its way around." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown — TED", description: "Brown on vulnerability and wholehearted living — the psychological parallel to the theological case against spiritual bypassing." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
