"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Even the Disciples Were Sent to Rest",
    verse: "Mark 6:31",
    text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.' The disciples had just returned from extraordinary ministry — healings, proclamation, casting out demons. Jesus's first response was: come rest. Ministry without Sabbath is not more faithful. It is disobedient.",
  },
  {
    title: "Elijah Burned Out After His Greatest Victory",
    verse: "1 Kings 19:3–4",
    text: "Elijah was afraid and ran for his life. When he came to Beersheba in Judah, he left his servant there, while he himself went a day's journey into the wilderness. He came to a broom bush, sat down under it and prayed that he might die. Ministry burnout does not follow failure. It often follows the most intense periods of sustained output. God's response was not exhortation — it was rest, food, and company.",
  },
  {
    title: "You Cannot Give What You Do Not Have",
    verse: "John 7:38",
    text: "Whoever believes in me, as Scripture has said, rivers of living water will flow from within them. This metaphor assumes an internal source — not a depleted well pumped to exhaustion. Ministry that flows from an empty interior produces what empty wells produce: nothing. Refilling is not selfishness. It is what makes sustainable ministry possible.",
  },
  {
    title: "The Helper Needed Helping Too",
    verse: "Romans 16:2",
    text: "I ask you to receive her in the Lord in a way worthy of his people and to give her any help she may need from you, for she has been the benefactor of many people, including me. Phoebe served others. Paul asked the Romans to serve her. People who help for a living are not exempt from needing help. The question is whether your community has learned to see you as someone who needs it.",
  },
  {
    title: "Identity in Christ Survives When Ministry Capacity Does Not",
    verse: "Galatians 2:20",
    text: "I have been crucified with Christ and I no longer live, but Christ lives in me. When burnout strips away your capacity to perform ministry functions, what remains? Your identity in Christ is not constructed by your ministry productivity. It is received by faith. Burnout is the stripping away of the performance layer — and sometimes the first honest encounter with who you actually are.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Peter Scazzero",
    role: "Author, Emotionally Healthy Spirituality",
    quote: "Emotionally unhealthy spirituality is characterized by doing for God without being with God. Ministry workers are especially vulnerable to this substitution. Activity replaces intimacy and eventually the internal source runs dry.",
    bio: "Peter Scazzero (Emotionally Healthy Spirituality, The Emotionally Healthy Leader) developed a framework for ministry that begins with interior health — the argument that you cannot lead others to depth you have not visited yourself. His work is essential for ministry workers navigating burnout.",
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Christian trauma psychologist",
    quote: "Ministry workers often develop compassion fatigue — not because they lack love, but because they have been absorbing the suffering of others for years without adequate processing, support, or rest. The church must care for those who care.",
    bio: "Diane Langberg (Suffering and the Heart of God, Redeeming Power) writes from decades of work with trauma and with ministry institutions. Her framework for compassion fatigue in ministry workers is clinically rigorous and pastorally wise.",
  },
  {
    id: "v3",
    name: "Henri Nouwen",
    role: "Catholic priest, spiritual director, author",
    quote: "The temptation of ministry is to keep doing more — more programs, more counseling, more presence. But the minister who has not learned to receive from others and from God has substituted busyness for calling. The wound in the heart needs healing before the heart can heal others.",
    bio: "Henri Nouwen (The Wounded Healer, In the Name of Jesus) built a theological framework for ministry identity rooted in weakness and receptivity rather than competence and output. His meditations on ministry identity and the inner life are transformative for burned-out workers.",
  },
  {
    id: "v4",
    name: "Ruth Haley Barton",
    role: "Spiritual director, author",
    quote: "Sabbath is the practice that most directly confronts our addiction to being needed. When we stop, the world keeps going — and that is information we need. We are not the center. We are not indispensable. Sabbath teaches us this gently, before burnout teaches it brutally.",
    bio: "Ruth Haley Barton (Strengthening the Soul of Your Leadership, Sacred Rhythms) writes on the spiritual formation of leaders. Her integration of spiritual direction, Sabbath practice, and leadership sustainability is the most practical Christian framework for ministry burnout prevention and recovery.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Stop Before the Breakdown",
    text: "Burnout has stages. Recognize yours: declining compassion, cynicism about the people you serve, physical symptoms (headaches, insomnia, illness), detachment, resentment. If you are here, you need to stop now — take a leave, reduce your load, resign if necessary. Finishing the program is not worth the shipwreck of your inner life.",
  },
  {
    icon: "🏔️",
    title: "Take a Real Sabbath — Weekly, Not Someday",
    text: "A day of rest per week, every week, protected from ministry work, communications, and the posture of being available — this is the biological and spiritual rhythm your body was made for. If your ministry context does not permit this, you are in an unsustainable structure. That is important information.",
  },
  {
    icon: "🧠",
    title: "Work With a Spiritual Director",
    text: "A spiritual director who is not your supervisor, your denomination, or your congregation is one of the most valuable resources a ministry worker can have. One hour per month of undivided, prayerful attention to your interior life — not to your ministry strategy — changes the sustainability of everything else.",
  },
  {
    icon: "📊",
    title: "Audit Your Output-Input Ratio",
    text: "List everything you give to others in a week: counseling, preaching, administration, presence, emotional labor. List everything that refills you: prayer, friendship, nature, learning, rest. If the ratio is severely imbalanced toward output, you are running on deficit. Identify one input that can be increased this week.",
  },
  {
    icon: "💬",
    title: "Tell Someone the Real Cost",
    text: "Ministry workers are often the least honest people in their churches about their own needs — they have been trained to project health while carrying weight. Find one person — a colleague, a spiritual director, a trusted friend outside your congregation — and tell them the real cost of your work right now. Naming breaks the isolation.",
  },
  {
    icon: "⛪",
    title: "Let Your Church Care for You",
    text: "If your congregation does not know you are struggling — because you have protected them from it — they cannot help. Being cared for is not a weakness in a pastor or ministry worker. It is a prerequisite for sustainable ministry. Paul asked the Romans to serve Phoebe. Ask your community to serve you.",
  },
];

const scriptures = [
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
  { verse: "1 Kings 19:5–6", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water." },
  { verse: "Matthew 11:28–30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
  { verse: "John 15:4", text: "Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "Psalm 23:2–3", text: "He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul." },
];

type BurnoutEntry = { id: string; date: string; cost: string; input: string; ask: string };

export default function MinistryWorkerBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BurnoutEntry[]>([]);
  const [cost, setCost] = useState("");
  const [input, setInput] = useState("");
  const [ask, setAsk] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_ministryburnoutj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!cost.trim()) return;
    const entry: BurnoutEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      cost,
      input,
      ask,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ministryburnoutj_entries", JSON.stringify(updated));
    setCost(""); setInput(""); setAsk("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ministryburnoutj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Ministry & Pastoral Care</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Ministry Worker Burnout
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For pastors, counselors, missionaries, youth workers, and all who serve in ministry who are running on empty. Jesus invited the disciples to rest after intense ministry. He is saying the same to you.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Focus on the Family Pastor Support: <span style={{ color: GREEN }}>focusonthefamily.com/pastors</span> &nbsp;·&nbsp; Headington Institute (for aid workers and missionaries): <span style={{ color: GREEN }}>headington-institute.org</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.1rem" }}>{v.name}</h3>
                <p style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{v.quote}&rdquo;</p>
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Journal Entry</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What is ministry costing you that you have not named aloud?</label>
                <textarea value={cost} onChange={(e) => setCost(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What input genuinely refills you? When did you last do it?</label>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One thing you need to ask for this week.</label>
                <textarea value={ask} onChange={(e) => setAsk(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.cost && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Cost:</strong> {e.cost}</p>}
                {e.input && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Input:</strong> {e.input}</p>}
                {e.ask && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Ask:</strong> {e.ask}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "G5gLrHClpKQ", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the interior life of ministry leaders — how emotionally unhealthy spirituality produces burnout, and what genuine depth looks like as a sustainable foundation for ministry." },
              { videoId: "ZGk1hl1nNrw", title: "Compassion Fatigue in Ministry", channel: "Headington Institute", description: "Clinical and pastoral framework for compassion fatigue — the particular exhaustion that comes from sustained care for others in crisis — and what recovery looks like." },
              { videoId: "sJSFmO6gGlo", title: "When the Helper Needs Helping", channel: "Joni and Friends", description: "Addresses the specific challenge of caregivers and ministry workers who have been trained to give but not to receive — and what sustainable ministry actually requires." },
              { videoId: "eBl7gT7gQ6g", title: "Sabbath for Ministry Leaders", channel: "The Gospel Coalition", description: "The theology and practice of Sabbath as an essential discipline for ministry workers — not a luxury but an act of obedience that makes everything else sustainable." },
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
    </main>
      <Footer />
    </>
  );
}
