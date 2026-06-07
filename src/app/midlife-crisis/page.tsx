"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Wilderness Is Not Wasted", verse: "Deuteronomy 8:2", text: "Remember how the Lord your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart. The midlife wilderness — the loss of direction, the questioning of everything, the restlessness that arrives when external achievements no longer satisfy — is not God's absence. It may be God's invitation. The things stripped away in midlife (certainty, youthful energy, illusions about the future) are often things that stood between the person and genuine depth of soul." },
  { title: "Second Half Identity Is Deeper Than First Half Identity", verse: "John 12:24", text: "Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds. The first half of life is about building identity, ego, achievement, belonging. The second half — entered often through the crisis of midlife — is about finding the self that remains when the scaffolding falls. This death-and-resurrection pattern is embedded in Jesus's own words. The person you are becoming through midlife crisis may be more genuinely alive than the person you were before it." },
  { title: "Regret Is Not the Whole Story', verse: 'Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail — they are new every morning. Midlife is often accompanied by grief about roads not taken, relationships that didn't become what you hoped, years spent in the wrong direction. This grief is real and deserves to be felt. But the God of new mercies every morning is the God of the second half of life — not only the God of the young who still have everything ahead of them. There is genuine future ahead of you. It is different from what you imagined, but it is real." },
  { title: "The Contemplative Invitation of Midlife", verse: "Psalm 46:10", text: "Be still, and know that I am God. The relentless activity of the first half of life often prevents the stillness and interiority that genuine faith requires. Midlife can be the first time many driven people are actually forced to stop and ask who they are when they are not producing. This forced stillness — however uncomfortable — is an invitation to the contemplative life that many spiritual directors believe is the native terrain of the second half. God speaks in the stillness that activity has been drowning out." },
  { title: "Purpose Beyond Achievement Is Available", verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. Your purpose is not exhausted by your career, your parenting, or your previous accomplishments. The good works God prepared for you include second-half contributions — mentoring, depth of relationship, wisdom offered to those coming behind you, specific ministry that becomes possible precisely because of what you have been through. Midlife can be the beginning of your most significant work, not the end of your best years." },
];

const voices = [
  { id: "rr", name: "Richard Rohr", role: "Author, Falling Upward", quote: "The task of the first half of life is to build a strong container, ego, and identity. The task of the second half is to find what the container is for — and to let it be used, emptied, and refilled by something larger than you. Midlife crisis is the invitation to the second task.", bio: "Rohr's Falling Upward is the most widely read Christian treatment of the two halves of life and the transition between them. His framework — first half as building, second half as emptying — has provided language for millions of people navigating midlife wilderness." },
  { id: "jb", name: "James Hollis", role: "Jungian Analyst, Author of The Middle Passage", quote: "A midlife crisis is not a pathology. It is a summons — to the larger life you have been avoiding, to the self you have been protecting yourself from, to the depths you have been keeping at bay with busyness and achievement.", bio: "Hollis, a Jungian analyst, writes about midlife transition with unusual psychological depth. While his framework is not explicitly Christian, his work on the summons of the soul in the second half of life resonates deeply with Christian contemplative tradition." },
  { id: "ps", name: "Parker Palmer", role: "Author, Let Your Life Speak", quote: "There is a voice inside you calling you toward your own life — toward the work and relationships and way of being that is native to who you actually are. That voice is often drowned out in the first half of life by the voices of expectation, achievement, and conformity. Midlife is often when the authentic voice finally breaks through.", bio: "Palmer's Let Your Life Speak is a classic meditation on vocation, authenticity, and the way the soul speaks when we finally get quiet enough to listen. His personal story of depression and vocational crisis in midlife makes it especially relevant for people in their own midlife transitions." },
];

const practices = [
  { icon: "🪞", title: "Treat Midlife Crisis as Information, Not Emergency", text: "The restlessness, dissatisfaction, and questioning of midlife is not a disease to be treated or an emergency to be resolved. It is information about where you are and where you need to go. Before making dramatic changes — new career, new relationship, new location — sit with the information long enough to understand what it is actually saying. Many midlife crises that result in destructive impulsive decisions are cases of people acting on the surface (escape) rather than attending to the depth (genuine change)." },
  { icon: "🧭", title: "Work With a Spiritual Director or Therapist", text: "Midlife transition is difficult to navigate alone. A spiritual director who understands second-half-of-life spirituality (Ignatian directors, directors trained in contemplative prayer) can help you discern what God is doing in the restlessness. A therapist — particularly one familiar with Jungian or depth psychology frameworks — can help with the psychological dimensions. Both are worth finding during this transition. The Institute for Spiritual Directors (spiritualdirectors.org) maintains a referral database." },
  { icon: "📚", title: "Engage the Literature of Second-Half Life", text: "Rohr's Falling Upward, Parker Palmer's Let Your Life Speak, Gerald May's The Dark Night of the Soul — there is a rich literature of people who have navigated this transition and found genuine life on the other side. Reading widely in this literature provides both normalization (others have walked this) and direction (this is what the journey looks like). You are not in crisis alone." },
  { icon: "🌱", title: "Begin Practices That Belong to the Second Half", text: "The first half of life is characterized by activity, production, and external focus. The second half often calls for contemplation, depth, interiority, and service that is less about achievement and more about giving. Consider beginning or deepening practices like: daily contemplative prayer, lectio divina, journaling, spiritual direction, mentoring someone younger, Sabbath, regular silence and solitude. These practices are not luxuries — they are the native practices of the second half of life." },
];

const scriptures = [
  { verse: "Psalm 46:10", text: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'" },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Philippians 3:13-14", text: "Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus." },
  { verse: "Isaiah 43:18-19", text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?" },
  { verse: "2 Corinthians 4:16", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day." },
  { verse: "John 12:24", text: "Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds." },
];

type MLEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function MidlifeCrisisPage() {
  const [tab, setTab] = useState("theology");
  const [mlJournal, setMlJournal] = useState<MLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_midlifej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_midlifej_entries", JSON.stringify(mlJournal)); } catch {}
  }, [mlJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setMlJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setMlJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Life Transitions</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Midlife Crisis</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          The wilderness between who you were and who you are becoming — and why the second half of life can be the deepest.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Transition Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is shifting, restless, or unclear in my life right now?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is the soul trying to say through this restlessness?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One practice of stillness or depth I will begin or deepen this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {mlJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {mlJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Restlessness: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Soul saying: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Practice: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller on honest prayer through the fears that the midlife transition surfaces — the fear of death, of wasted years, of an unlived life — and how the Psalms provide language for this particular season." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom", channel: "Tim Keller / The Gospel Coalition", description: "Keller explores how the Kingdom of God inverts the world's definition of a successful life — including the mid-career accomplishments that midlife crisis reveals as insufficient." },
              { videoId: "4Eg_di-O8nM", title: "The Simple Gospel — Back to What Matters", channel: "Francis Chan", description: "Chan on the radical simplicity of what life is actually for — stripping away the accumulated expectations of career, status, and achievement that midlife crisis challenges." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God — not career success or accumulated achievement — is the foundation of a flourishing life. The theological corrective midlife most needs." },
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
  );
}
