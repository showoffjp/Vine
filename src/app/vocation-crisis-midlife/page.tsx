"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Vocation Is Not Synonymous With Career",
    verse: "Ephesians 2:10",
    text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do. The word vocation comes from the Latin vocare — to call. God's call on your life is not a job title. Midlife work crisis reveals this: the title can end, but the calling continues. What did God make you to do, not just to have?",
  },
  {
    title: "The Desert Is Sometimes the Refinery",
    verse: "Exodus 3:1",
    text: "Now Moses was tending the flock of Jethro his father-in-law... He led the flock to the far side of the wilderness and came to Horeb, the mountain of God. Moses spent forty years in the wilderness between the end of his first career and the beginning of his second. The desert between callings is not wasted time — it is where burning bushes appear.",
  },
  {
    title: "Second Halves Are in the Biblical Pattern",
    verse: "Numbers 13:30",
    text: "Then Caleb silenced the people before Moses and said, 'We should go up and take possession of the land, for we can certainly do it.' Caleb was 40 when he first spied the land. He entered it at 85. Abraham received his call at 75. Many biblical figures did their most significant work in the second half. The first career is not always the main event.",
  },
  {
    title: "God Calls You by Name, Not by Title",
    verse: "Isaiah 43:1",
    text: "I have summoned you by name; you are mine. Your name — your identity — is not your job description. When the title ends or changes or disappoints, the identity remains. The one who called you knows your name, not your LinkedIn profile.",
  },
  {
    title: "Rest and Reflection Are Commanded",
    verse: "Psalm 46:10",
    text: "Be still, and know that I am God. The Hebrew word raphah — often translated be still — means to release, to let go of the grip. Midlife vocation crisis often requires a season of intentional stillness: not frantic pivoting to the next thing, but genuine release that creates space for what God may be doing.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Gordon MacDonald",
    role: "Author, Ordering Your Private World",
    quote: "Many men and women reach midlife and discover that they have been living driven lives — propelled by external measures of success rather than internal conviction of calling. The crisis is painful. But it is also an invitation to rebuild from the inside out.",
    bio: "Gordon MacDonald (Ordering Your Private World, Mid-Course Correction) has written extensively about the difference between driven and called lives, and about the midlife pivot from achievement orientation to depth orientation. His work is one of the most helpful Christian frameworks for vocation crisis.",
  },
  {
    id: "v2",
    name: "Eugene Peterson",
    role: "Author, pastor, The Message translator",
    quote: "Vocation is the convergence of three things: what I am good at, what the world needs, and what God is doing. The question is not 'what can I get paid for' but 'where do those three lines cross?' That question takes a lifetime to answer.",
    bio: "Eugene Peterson (A Long Obedience in the Same Direction, The Pastor) embodied the theology of ordinary, sustained vocation — resisting the American hunger for dramatic career pivots and instead cultivating depth in whatever space God had given. His perspective is a counterweight to midlife restlessness.",
  },
  {
    id: "v3",
    name: "Bob Buford",
    role: "Author, Halftime",
    quote: "The first half of life is about success. The second half is about significance. The transition between them is halftime — disorienting, necessary, and the gateway to the most meaningful work of your life.",
    bio: "Bob Buford (Halftime, Finishing Well) built an entire framework around the midlife transition from success to significance. His work has helped thousands of Christians navigate vocation crisis not as failure but as graduation — from career-building to kingdom contribution.",
  },
  {
    id: "v4",
    name: "Richard Rohr",
    role: "Franciscan priest, author",
    quote: "The first half of life builds a container. The second half of life discovers what the container is for. Most of us spend the second half complaining that the first-half container is the wrong shape — rather than asking what it was meant to hold.",
    bio: "Richard Rohr (Falling Upward) describes the spiritual logic of the second half of life — why the disappointments, losses, and failures of midlife are often what opens us to the deeper work of God. His framework is helpful for Christians in vocational crisis who are learning to ask what maturity requires.",
  },
];

const practices = [
  {
    icon: "🔇",
    title: "Resist the Pivot Before the Stillness",
    text: "The first response to vocation crisis is usually frantic: update the resume, pivot to a new industry, launch a new venture. Resist this. The desert between callings has a purpose. Give yourself a season of intentional reflection before action. The next thing often cannot be found while still running from the last thing.",
  },
  {
    icon: "📝",
    title: "Ask the Three Vocation Questions",
    text: "Eugene Peterson's framework: (1) What am I genuinely good at — not just trained for, but gifted at? (2) What does the world genuinely need — not what the market pays for, but what people lack? (3) What do I sense God doing in my particular time and place? Where these three intersect is vocation. Sit with these questions for months.",
  },
  {
    icon: "🏔️",
    title: "Get Alone for an Extended Period",
    text: "Moses went to the far side of the wilderness. Many vocational callings come in solitude — extended retreat, sabbatical, a long solo hike, a week at a monastery. If you cannot afford a week, a day will begin the work. The noise of career crisis must be quieted before the still small voice is heard.",
  },
  {
    icon: "👥",
    title: "Find Your Halftime Community",
    text: "Bob Buford's Halftime Institute (halftime.org) connects midlife Christians who are navigating the transition from success to significance. Finding people in the same transition — who understand the specific grief of giving up first-half identity and the uncertainty of what comes next — changes the experience.",
  },
  {
    icon: "📖",
    title: "Read the Moses Narrative as a Third-Act Story",
    text: "Exodus 2–3 is the story of a man whose first career ended in catastrophic failure and exile. He spent 40 years in obscurity. Then he met God in a burning bush. Read it slowly, over several days. Notice the timeline. Notice what was built in the desert. Let Moses be your companion in the wilderness between vocations.",
  },
  {
    icon: "🎯",
    title: "Identify What You Would Do for Free",
    text: "Stripped of compensation, prestige, and external validation: what would you still do? What problems do you notice that others walk past? What gifts come so naturally that you underestimate them? These are vocation signals. The work you were made for often looks obvious in hindsight — and invisible under career pressure.",
  },
];

const scriptures = [
  { verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do." },
  { verse: "Isaiah 43:1", text: "But now, this is what the LORD says — he who created you, Jacob, he who formed you, Israel: 'Do not fear, for I have redeemed you; I have summoned you by name; you are mine.'" },
  { verse: "Psalm 46:10", text: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'" },
  { verse: "Exodus 3:2", text: "There the angel of the LORD appeared to him in flames of fire from within a bush. Moses saw that though the bush was on fire it did not burn up." },
  { verse: "Proverbs 16:9", text: "In their hearts humans plan their course, but the LORD establishes their steps." },
  { verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
];

type VocationEntry = { id: string; date: string; goodAt: string; worldNeeds: string; sense: string };

export default function VocationCrisisMidlifePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<VocationEntry[]>([]);
  const [goodAt, setGoodAt] = useState("");
  const [worldNeeds, setWorldNeeds] = useState("");
  const [sense, setSense] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_vocationcrisisj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!goodAt.trim()) return;
    const entry: VocationEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      goodAt,
      worldNeeds,
      sense,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_vocationcrisisj_entries", JSON.stringify(updated));
    setGoodAt(""); setWorldNeeds(""); setSense("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_vocationcrisisj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Vocation & Identity</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Vocation Crisis at Midlife
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians navigating career collapse, burnout, layoff, or the growing sense that what they have built is not what they were made for. The desert between callings is real — and it is also where burning bushes appear.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; Halftime Institute: <span style={{ color: PURPLE }}>halftime.org</span> &nbsp;·&nbsp; Career counseling through your church or CCEF
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
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
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Vocation Discernment Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What are you genuinely good at — not just trained for?</label>
                <textarea value={goodAt} onChange={(e) => setGoodAt(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What does the world around you genuinely need?</label>
                <textarea value={worldNeeds} onChange={(e) => setWorldNeeds(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What do you sense God may be doing in this season?</label>
                <textarea value={sense} onChange={(e) => setSense(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.goodAt && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Good at:</strong> {e.goodAt}</p>}
                {e.worldNeeds && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>World needs:</strong> {e.worldNeeds}</p>}
                {e.sense && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Sense:</strong> {e.sense}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "Halftime: Moving from Success to Significance", channel: "Bob Buford", description: "Bob Buford on the midlife transition from first-half success orientation to second-half significance orientation — the essential framework for Christians navigating vocation crisis." },
              { videoId: "eBl7gT7gQ6g", title: "Vocation and the Christian Life", channel: "The Gospel Coalition", description: "Theological exploration of vocation — distinguishing calling from career, understanding how God's purposes work through ordinary work, and what it means to be called by name." },
              { videoId: "SqGRnlXplx0", title: "Finding Purpose in the Second Half of Life", channel: "Focus on the Family", description: "Pastoral conversation on midlife purposelessness — for those who built successful careers and now wonder if they built the right thing." },
              { videoId: "oNpTha80yyE", title: "When Your Identity Collapses", channel: "GriefShare", description: "Addresses the grief of identity loss — including career and vocation loss — and the spiritual resources for reconstruction." },
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
    </main>
      <Footer />
    </>
  );
}
