"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", accent = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CREntry = { id: string; date: string; obstacle: string; practice: string; result: string };

const theology = [
  { title: "God Rested — and Called It Good", verse: "Genesis 2:2-3", text: "On the seventh day God finished his work and he rested. A God who does not grow weary, who never sleeps, chose to rest on the seventh day — and declared it holy. This is not a divine recovery period. It is a declaration that rest is embedded in the structure of creation itself, not added as an afterthought for weak creatures. The Sabbath rhythm predates the fall, predates the law, predates Israel. It is woven into the fabric of what it means to be a creature made in the image of a God who rests. To rest is not to be unproductive. It is to participate in something God himself modeled and blessed." },
  { title: "Come to Me and Rest — Jesus’s Invitation to the Weary", verse: "Matthew 11:28-30", text: "Come to me, all who labor and are heavy laden, and I will give you rest. The Sabbath rest Jesus offers is first a relational reality, not a scheduling solution. It is rest for the soul — the deeper rest that comes from laying down the burden of self-justification, performance, and striving. This soul rest is what enables physical rest to be genuinely restorative. The person who cannot rest often cannot rest because they have not accepted the invitation to cease striving before God. Jesus’s yoke is easy not because the demands are trivial but because the one carrying the other end is infinite." },
  { title: "Hebrews 4 — the Sabbath Rest That Remains", verse: "Hebrews 4:9-11", text: "There remains a Sabbath rest for the people of God, for whoever has entered God’s rest has also rested from his works. The writer of Hebrews sees the weekly Sabbath as pointing forward to a final eschatological rest already begun in Christ and not yet fully realized. Christians live in the overlap: the rest has come in Jesus, and the rest is still coming. Weekly Sabbath observance is therefore not legalism but participation in a reality that spans creation to new creation. It is a rehearsal for the eternal rest that awaits. To stop working one day per week is a small act of eschatological hope." },
  { title: "Why Busyness Is a Spiritual Problem", verse: "Psalm 46:10", text: "Be still and know that I am God. Busyness is not merely an inconvenience — it is a cultural idol and a spiritual counterfeit. Chronic busyness can be a form of pride (believing we are indispensable), fear (staying busy to maintain a sense of control), or avoidance (not facing what stillness would reveal). The person who cannot stop is often the person who does not trust that God is at work when they are not. The prophetic witness of rest is significant: in a productivity-obsessed culture, the person who rests without guilt is making a counter-cultural declaration that their identity is not in their output." },
  { title: "Sleep as an Act of Trust — Theology of Sleep", verse: "Psalm 4:8; Psalm 127:2", text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety. He grants sleep to those he loves. Sleep is an act of releasing control. Every night we lose consciousness, surrender awareness, and entrust ourselves to a God who does not sleep. The person who lies awake rehearsing anxieties is, in a real sense, refusing to hand the night shift to God. Chronic sleep deprivation is often not merely a health issue but a spiritual one — a symptom of a trust deficit. Neuroscience increasingly confirms what theology has always said: rest is not weakness but essential maintenance for creatures who are finite and dependent." },
];

const practices = [
  { icon: "⏸️", title: "Weekly Sabbath", text: "Choose a full 24-hour period each week in which you do no work and pursue no productivity. This is harder than it sounds — which is why it is valuable. The difficulty reveals how deeply the idol of productivity has taken hold. Begin small if necessary, but work toward a full day. Protect it actively, because it will constantly be negotiated away. The discipline of Sabbath-keeping is not about rule-following but about practicing the posture of a creature who knows they are not God." },
  { icon: "💤", title: "Nap Without Guilt", text: "Rest in the middle of the day without earning it first. The guilt many people feel about resting — especially napping — reveals a performance orientation toward self-worth: I must earn rest by producing first. Theological permission to rest is precisely this: you are a beloved child of God, not a productivity unit. A 20-minute nap is not laziness. It is the act of a creature who knows their limits and does not pretend otherwise." },
  { icon: "📵", title: "Device-Off Evenings", text: "Commit to turning off screens after 8pm as preparation for genuinely restorative sleep. Screens stimulate the brain with news, social comparison, entertainment, and email in ways that prevent the nervous system from downshifting toward rest. This practice is not primarily about sleep hygiene (though it is that) — it is about creating space for quietness, conversation, prayer, and reflection in the evening hours. The hour before sleep is a spiritual hour if we allow it to be." },
  { icon: "⏳", title: "Mini-Sabbaths", text: "Take 15-minute pauses during the workday — not distraction breaks but deliberate rest. Step away from screens. Sit quietly. Pray briefly. Look at something that is not a task. The distinction between distraction and rest is important: scrolling your phone is distraction that depletes; sitting quietly for a few minutes is rest that restores. Mini-Sabbaths throughout the day are a practice of building the rhythm of stopping into ordinary time, not reserving it for a weekly crisis." },
  { icon: "🌳", title: "Annual Retreat Day", text: "Set aside one full day per year for silence, rest, and reflection with no agenda and no tasks. No books you should read, no projects you should advance. Simply stop. Lie down. Walk slowly. Pray without an agenda. For most people this is profoundly uncomfortable at first and profoundly restorative afterward. The annual retreat day is a diagnostic: if you cannot bear to stop for a single day, something has gone wrong in the relationship between your soul and your schedule." },
];

const scriptures = [
  { verse: "Genesis 2:2-3", text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls." },
  { verse: "Hebrews 4:9-11", text: "There remains, then, a Sabbath-rest for the people of God; for anyone who enters God’s rest also rests from their works, just as God did from his. Let us, therefore, make every effort to enter that rest." },
  { verse: "Psalm 127:2", text: "In vain you rise early and stay up late, toiling for food to eat — for he grants sleep to those he loves." },
  { verse: "Psalm 46:10", text: "He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”" },
  { verse: "Exodus 20:8", text: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God." },
];

const voices = [
  { name: "Mark Buchanan", role: "Author, The Rest of God", quote: "Sabbath is not the break we take from our lives. It is the interruption of ordinary life that restores our sanity, our perspective, and our joy. Without it, work becomes compulsion, relationships become transactions, and the soul slowly starves in the midst of plenty.", bio: "Buchanan’s The Rest of God is one of the most pastorally rich explorations of Sabbath theology available. Writing as both a pastor and a practitioner, Buchanan argues that Sabbath is not primarily about what we stop doing but about what we start noticing: the goodness of God, the richness of the present moment, and the sufficiency of grace. His work has introduced thousands of evangelicals to Sabbath practice as a spiritual discipline rather than a Jewish obligation." },
  { name: "Walter Brueggemann", role: "Old Testament Scholar; Author, Sabbath as Resistance", quote: "Sabbath is not simply a pause in the week. It is an act of resistance against the anxiety-producing productivity machine that Pharaoh built and that our economy has rebuilt. To keep Sabbath is to say: I am not defined by my output. I belong to a different economy entirely.", bio: "Brueggemann reads Sabbath through the lens of Israel’s liberation from Egypt, where Pharaoh demanded seven-day-a-week brick production and allowed no rest. He argues that the Sabbath command is therefore not merely a rest prescription but a political and economic declaration: the people of God are not slaves to any productivity system. This reading makes Sabbath profoundly relevant to the contemporary workaholic culture in which most Christians live." },
  { name: "Matthew Walker", role: "Neuroscientist; Author, Why We Sleep", quote: "Sleep is not a lifestyle luxury. It is a non-negotiable biological necessity and nature’s most powerful system for healing, restoring, and rejuvenating the human brain and body. Every major disease killing us in the developed world has causal links to a lack of sleep.", bio: "Walker’s work is secular, but it confirms what theology has always maintained: rest is not weakness but essential maintenance for finite creatures. His research documents the catastrophic effects of chronic sleep deprivation on cognition, emotion regulation, immune function, and longevity. For Christians, Walker’s science is a useful conversation partner: if God designed us to require sleep, then sleeping well is stewardship of the body, not indulgence." },
];

const videos = [
  { id: "3K6OjkMFq5I", title: "The Theology of Rest — Why Sabbath Matters" },
  { id: "g2f8NOPHrPM", title: "Mark Buchanan on The Rest of God" },
  { id: "4jv_Mu7NW3g", title: "Sabbath as Resistance — Walter Brueggemann" },
  { id: "lAX9Lhe0IwI", title: "Why We Sleep — Matthew Walker on the Science of Rest" },
];

export default function ChristianRestPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianrest_entries") ?? "[]"); } catch { return []; }
  });
  const [jObstacle, setJObstacle] = useState("");
  const [jPractice, setJPractice] = useState("");
  const [jResult, setJResult] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianrest_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jObstacle.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), obstacle: jObstacle, practice: jPractice, result: jResult }, ...prev]);
    setJObstacle(""); setJPractice(""); setJResult("");
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
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Rest as a Spiritual Practice</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Sabbath, sleep, and the theology of stopping &mdash; why rest is not a reward for productivity but a rhythm built into creation itself.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? accent : BORDER}`, background: tab === t.id ? accent + "22" : "transparent", color: tab === t.id ? accent : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: accent, fontWeight: 600, marginBottom: 6 }}>{item.verse}</div>
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
                <div style={{ fontSize: "0.8rem", color: accent, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: accent, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Rest Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Track what gets in the way of your rest and what you are learning.</p>
            {[
              { label: "What is getting in the way of your rest right now?", val: jObstacle, set: setJObstacle },
              { label: "Which rest practice are you trying this week?", val: jPractice, set: setJPractice },
              { label: "What did you notice — in your body, soul, or relationship with God?", val: jResult, set: setJResult },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Obstacle:</strong> {e.obstacle}</p>
                    {e.practice && <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Practice:</strong> {e.practice}</p>}
                    {e.result && <p style={{ fontSize: "0.88rem" }}><strong>Result:</strong> {e.result}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: accent }}>{v.title}</h3>
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
