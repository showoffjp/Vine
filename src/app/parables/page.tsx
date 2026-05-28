"use client";
import { useState } from "react";

interface Parable {
  id: string;
  title: string;
  reference: string;
  kingdom: boolean;
  theme: string;
  audience: string;
  summary: string;
  characters: string[];
  keyTruth: string;
  application: string;
  verse: string;
  verseRef: string;
  commonMisreading: string;
  studyQuestions: string[];
}

const PARABLES: Parable[] = [
  {
    id: "prodigal-son",
    title: "The Prodigal Son",
    reference: "Luke 15:11–32",
    kingdom: false,
    theme: "Repentance & Grace",
    audience: "Tax collectors, sinners, Pharisees",
    summary: "A wayward son demands his inheritance early, squanders it in reckless living, and returns home in shame—only to be met by a running, celebrating father. The older brother's resentment reveals a second kind of lostness.",
    characters: ["The Father (God)", "The Younger Son (the lost)", "The Older Son (the self-righteous)"],
    keyTruth: "The father's embrace is not earned—it is lavished. Both sons misunderstand grace: one by presuming it would be withheld, the other by assuming he didn't need it.",
    application: "Examine which son you resemble today. Have you returned to the Father? Or are you standing outside the feast, arms crossed?",
    verse: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
    verseRef: "Luke 15:20",
    commonMisreading: "Many read this as only about salvation and miss the older son entirely. Jesus told it to the Pharisees—the parable ends with the older son outside, and Jesus leaves the ending open.",
    studyQuestions: [
      "Why does the father run to meet the son before he can deliver his rehearsed speech?",
      "What does the father's robe, ring, and sandals signify in the cultural context?",
      "Why does Jesus leave the older son's story unresolved?",
      "How does this parable answer the Pharisees' criticism in Luke 15:2?",
    ],
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan",
    reference: "Luke 10:25–37",
    kingdom: false,
    theme: "Love of Neighbor",
    audience: "An expert in the law",
    summary: "A man beaten by robbers is passed by a priest and a Levite, then rescued by a despised Samaritan who pays for his care. Jesus tells this to redefine 'neighbor' and expose religious piety without compassion.",
    characters: ["The Wounded Man", "The Priest", "The Levite", "The Samaritan", "The Innkeeper"],
    keyTruth: "Proximity does not equal compassion. The 'unclean' outsider demonstrated covenant love better than the religious insiders. Jesus asks not 'who is my neighbor?' but 'who acted as neighbor?'",
    application: "Who have you walked past? The parable demands action: 'Go and do likewise.'",
    verse: "But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.",
    verseRef: "Luke 10:33",
    commonMisreading: "Often read as a simple morality tale about being kind. The racial/ethnic shock of a Samaritan as the hero would have been deeply offensive to the original Jewish audience—that's the point.",
    studyQuestions: [
      "Why would the original audience be shocked that the hero was a Samaritan?",
      "What excuses might the priest and Levite have had (ritual purity laws)?",
      "How does this parable challenge the lawyer's original question?",
      "In what ways is Jesus himself the Good Samaritan in our story?",
    ],
  },
  {
    id: "sower",
    title: "The Sower and the Soils",
    reference: "Matthew 13:1–23, Mark 4:1–20, Luke 8:4–15",
    kingdom: true,
    theme: "Hearing & Receiving the Word",
    audience: "Large crowds, then disciples",
    summary: "A farmer scatters seed on four types of ground: a path (birds eat it), rocky soil (no roots), thorny ground (choked out), and good soil (fruitful). Jesus explains that the soils represent how people receive God's word.",
    characters: ["The Sower (Jesus/the preacher)", "The Soils (types of hearers)"],
    keyTruth: "The problem is never with the seed (God's word) but with the condition of the soil (the heart). Fruitfulness is the evidence of genuine reception.",
    application: "Diagnose your soil: is your heart hard, shallow, distracted, or receptive? What needs to change for the word to take deep root?",
    verse: "But the seed on good soil stands for those with a noble and good heart, who hear the word, retain it, and by persevering produce a crop.",
    verseRef: "Luke 8:15",
    commonMisreading: "The parable is often treated as a tool for evangelists to blame unfruitfulness on hearers. Jesus used it to prepare his disciples for disappointment in ministry—not every proclamation will 'work.'",
    studyQuestions: [
      "Which soil type is most dangerous, and why?",
      "What are the 'thorns' choking out faith in your own life?",
      "Why did Jesus teach in parables (see Matthew 13:10–17)?",
      "How does this parable give hope AND warning simultaneously?",
    ],
  },
  {
    id: "talents",
    title: "The Parable of the Talents",
    reference: "Matthew 25:14–30",
    kingdom: true,
    theme: "Stewardship & Faithfulness",
    audience: "Disciples (Olivet Discourse)",
    summary: "A master entrusts three servants with different amounts before departing. Two invest and double their amounts; one buries his out of fear. The master returns and rewards faithful stewardship—and harshly judges the fearful servant.",
    characters: ["The Master (God/Christ returning)", "The Five-Talent Servant", "The Two-Talent Servant", "The One-Talent Servant"],
    keyTruth: "What we have been given is not ours to hoard but to multiply. Fear-based inaction is not faithfulness—it is an insult to the master's character.",
    application: "What gifts, time, or resources has God entrusted to you? Are you investing them or burying them?",
    verse: "His master replied, 'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.'",
    verseRef: "Matthew 25:21",
    commonMisreading: "Often read as endorsement of financial investment or capitalistic reward. The 'talents' are abilities/gifts, and the parable is eschatological—about accountability at Christ's return, not wealth creation.",
    studyQuestions: [
      "Why does the master give different amounts to different servants?",
      "What was the one-talent servant afraid of, and was his view of the master accurate?",
      "What does 'faithfulness in little' look like practically?",
      "How does this parable connect to the broader Olivet Discourse context?",
    ],
  },
  {
    id: "lost-sheep",
    title: "The Lost Sheep",
    reference: "Luke 15:3–7, Matthew 18:12–14",
    kingdom: false,
    theme: "God's Pursuit of the Lost",
    audience: "Pharisees and teachers of the law",
    summary: "A shepherd leaves ninety-nine sheep to search for one lost sheep. When found, he carries it home rejoicing and calls neighbors to celebrate. Jesus says there is more joy in heaven over one repentant sinner than over ninety-nine who don't need to repent.",
    characters: ["The Shepherd (God/Jesus)", "The Lost Sheep (the sinner)", "The Ninety-Nine (the righteous)"],
    keyTruth: "God does not sit in heaven waiting for sinners to return—he actively seeks the lost. The joy in heaven at repentance is not relief but exuberant celebration.",
    application: "You are not too lost to be found. And if you are found, do you share God's heart for those still missing?",
    verse: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
    verseRef: "Luke 15:7",
    commonMisreading: "The 'ninety-nine who don't need to repent' is ironic—it describes the Pharisees who think they're fine. No one is actually beyond needing repentance.",
    studyQuestions: [
      "What does leaving the ninety-nine suggest about God's risk-taking love?",
      "How does carrying the sheep (not driving it) reflect the nature of redemption?",
      "What is the significance of the communal celebration?",
      "How does this parable directly address the Pharisees' complaint in Luke 15:2?",
    ],
  },
  {
    id: "mustard-seed",
    title: "The Mustard Seed",
    reference: "Matthew 13:31–32, Mark 4:30–32, Luke 13:18–19",
    kingdom: true,
    theme: "Kingdom Growth",
    audience: "Crowds",
    summary: "The kingdom of heaven is like a mustard seed—the smallest of seeds—that grows into the largest of garden plants, a tree large enough for birds to nest in its branches.",
    characters: ["The Sower", "The Seed (Kingdom)", "The Tree (mature Kingdom)"],
    keyTruth: "Do not despise small beginnings. The kingdom starts with what looks insignificant (a baby in a manger, a handful of disciples) and becomes something vast and sheltering.",
    application: "Where do you see God doing something that looks too small to matter? Trust the growth to him.",
    verse: "Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants and becomes a tree, so that the birds come and perch in its branches.",
    verseRef: "Matthew 13:32",
    commonMisreading: "Sometimes allegorized to mean the 'birds' are evil forces infiltrating the church. In Jewish imagery, birds nesting in a tree represents Gentile nations finding shelter—kingdom expansion.",
    studyQuestions: [
      "Why would Jesus choose the mustard seed specifically?",
      "What does the shelter motif from Daniel 4 suggest about the Kingdom?",
      "How does the disciples' experience fit this parable (11 men → global church)?",
      "What 'mustard seed' moments do you see in your faith community?",
    ],
  },
  {
    id: "ten-virgins",
    title: "The Ten Virgins",
    reference: "Matthew 25:1–13",
    kingdom: true,
    theme: "Readiness for Christ's Return",
    audience: "Disciples (Olivet Discourse)",
    summary: "Ten virgins wait for a bridegroom. Five are wise and bring extra oil; five are foolish and run out. The bridegroom is delayed; the foolish go to buy more oil and miss the arrival. The door is shut. 'Watch, therefore.'",
    characters: ["The Bridegroom (Christ)", "Five Wise Virgins (prepared believers)", "Five Foolish Virgins (unprepared)"],
    keyTruth: "Spiritual preparation cannot be borrowed at the last moment. The oil cannot be shared—each person's relationship with Christ is non-transferable.",
    application: "Is your lamp lit and your oil full? Are you living in daily readiness for Christ's return, or assuming you can get ready later?",
    verse: "Therefore keep watch, because you do not know the day or the hour.",
    verseRef: "Matthew 25:13",
    commonMisreading: "The wise virgins refusing to share is often seen as selfish. But the oil represents something internal (faith, the Spirit) that cannot literally be transferred—this is the parable's point.",
    studyQuestions: [
      "What does the 'oil' represent in your interpretation?",
      "Why is the delay important to the parable's meaning?",
      "What does 'I don't know you' reveal about the relationship required?",
      "How does this parable balance grace with responsibility?",
    ],
  },
  {
    id: "workers-vineyard",
    title: "Workers in the Vineyard",
    reference: "Matthew 20:1–16",
    kingdom: true,
    theme: "Grace vs. Merit",
    audience: "Disciples (after rich young ruler)",
    summary: "A landowner hires workers throughout the day—some at dawn, some at 9am, noon, 3pm, and 5pm. At day's end, all receive the same wage. Early workers complain; the owner says he can be generous as he chooses.",
    characters: ["The Landowner (God)", "Early Workers (legalists)", "Late Workers (latecomers to faith)"],
    keyTruth: "God's grace is not calculated by our merit or seniority. The kingdom is not about earning—it is about the master's scandalous generosity.",
    application: "Have you resented God's grace toward others? Have you assumed your longevity of service earns you more favor?",
    verse: "Don't I have the right to do what I want with my own money? Or are you envious because I am generous?",
    verseRef: "Matthew 20:15",
    commonMisreading: "Misread as commentary on labor relations or fair wages. It follows Peter's question: 'What do we get for following you?' Jesus flips the merit framework entirely.",
    studyQuestions: [
      "Why does the landowner pay in reverse order—last to first?",
      "Is the complaint of the early workers reasonable by human standards?",
      "What does this teach about the 'first will be last' principle?",
      "How does this parable challenge a performance-based view of Christianity?",
    ],
  },
];

const THEMES = ["All", "Repentance & Grace", "Love of Neighbor", "Hearing & Receiving the Word", "Stewardship & Faithfulness", "God's Pursuit of the Lost", "Kingdom Growth", "Readiness for Christ's Return", "Grace vs. Merit"];

export default function ParablesPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parables_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [studiedIds, setStudiedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parables_studied"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selected, setSelected] = useState<Parable | null>(null);
  const [filter, setFilter] = useState("All");
  const [kingdomOnly, setKingdomOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"browse" | "studied">("browse");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_parables_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleStudied = (id: string) => {
    setStudiedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_parables_studied", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = PARABLES.filter(p => {
    if (tab === "studied" && !studiedIds.has(p.id)) return false;
    if (filter !== "All" && p.theme !== filter) return false;
    if (kingdomOnly && !p.kingdom) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.theme.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Parables of Jesus</h1>
          <p style={{ color: "#9898B3", fontSize: 16 }}>
            Deep study of {PARABLES.length} parables — their context, meaning, and application
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {studiedIds.size}/{PARABLES.length} Studied
            </span>
            <span style={{ background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {PARABLES.filter(p => p.kingdom).length} Kingdom Parables
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: "1px solid #1E1E32", paddingBottom: 0 }}>
          {(["browse", "studied"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: tab === t ? "#00FF88" : "#6A6A88", borderBottom: `2px solid ${tab === t ? "#00FF88" : "transparent"}`, marginBottom: -1 }}>
              {t === "browse" ? "All Parables" : `My Studied (${studiedIds.size})`}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search parables..."
            style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#F2F2F8", fontSize: 14, outline: "none" }} />
          <select value={filter} onChange={e => setFilter(e.target.value)}
            style={{ padding: "8px 14px", borderRadius: 10, background: "#12121F", border: "1px solid #1E1E32", color: "#9898B3", fontSize: 14, cursor: "pointer" }}>
            {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button onClick={() => setKingdomOnly(!kingdomOnly)}
            style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${kingdomOnly ? "#6B4FBB" : "#1E1E32"}`, background: kingdomOnly ? "rgba(107,79,187,0.15)" : "transparent", color: kingdomOnly ? "#A080FF" : "#9898B3", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
            Kingdom Parables Only
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 28, background: "#12121F", borderRadius: 12, padding: "14px 18px", border: "1px solid #1E1E32" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#9898B3" }}>Study Progress</span>
            <span style={{ fontSize: 13, color: "#00FF88", fontWeight: 700 }}>{studiedIds.size} of {PARABLES.length}</span>
          </div>
          <div style={{ height: 6, background: "#1E1E32", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(studiedIds.size / PARABLES.length) * 100}%`, background: "linear-gradient(90deg, #00FF88, #6B4FBB)", borderRadius: 3, transition: "width 0.3s" }} />
          </div>
        </div>

        {/* Parables grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {filtered.map(p => (
            <div key={p.id} onClick={() => setSelected(p)}
              style={{ background: "#12121F", border: `1px solid ${studiedIds.has(p.id) ? "rgba(0,255,136,0.3)" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "#00FF88"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = studiedIds.has(p.id) ? "rgba(0,255,136,0.3)" : "#1E1E32"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, color: "#F2F2F8" }}>{p.title}</h3>
                  <span style={{ fontSize: 12, color: "#9898B3" }}>{p.reference}</span>
                </div>
                <button onClick={e => { e.stopPropagation(); toggleSave(p.id); }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, marginLeft: 8, color: savedIds.has(p.id) ? "#FFD700" : "#4A4A68" }}>
                  {savedIds.has(p.id) ? "★" : "☆"}
                </button>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>
                  {p.theme}
                </span>
                {p.kingdom && (
                  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>
                    Kingdom
                  </span>
                )}
              </div>
              <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.6, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {p.summary}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#6A6A88", fontStyle: "italic" }}>{p.audience}</span>
                <button onClick={e => { e.stopPropagation(); toggleStudied(p.id); }}
                  style={{ fontSize: 11, padding: "4px 12px", borderRadius: 8, border: `1px solid ${studiedIds.has(p.id) ? "rgba(0,255,136,0.3)" : "#2A2A40"}`, background: studiedIds.has(p.id) ? "rgba(0,255,136,0.1)" : "transparent", color: studiedIds.has(p.id) ? "#00FF88" : "#6A6A88", cursor: "pointer", fontWeight: 600 }}>
                  {studiedIds.has(p.id) ? "✓ Studied" : "Mark Studied"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "#4A4A68" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📜</div>
            <p>No parables match your filters.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => { setSelected(null); setOpenQuestion(null); }}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: "#12121F", borderRadius: 20, padding: 32, maxWidth: 680, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{selected.title}</h2>
                <span style={{ fontSize: 14, color: "#9898B3" }}>{selected.reference}</span>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{selected.theme}</span>
              {selected.kingdom && <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.2)" }}>Kingdom Parable</span>}
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "#1E1E32", color: "#9898B3" }}>Audience: {selected.audience}</span>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: "3px solid #6B4FBB" }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.summary}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Characters</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.characters.map(c => (
                  <span key={c} style={{ fontSize: 13, padding: "4px 12px", borderRadius: 8, background: "#1E1E32", color: "#D0D0E8" }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Truth</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.keyTruth}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: "3px solid #00FF88" }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, fontStyle: "italic" }}>"{selected.verse}"</p>
              <p style={{ fontSize: 12, color: "#00FF88", marginTop: 8 }}>— {selected.verseRef}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#FFB347", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>⚠️ Common Misreading</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.commonMisreading}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#00FF88", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Application</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.application}</p>
            </div>

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Study Questions</h4>
              {selected.studyQuestions.map((q, i) => (
                <div key={i} onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                  style={{ marginBottom: 8, background: "#0D0D1A", borderRadius: 10, overflow: "hidden", border: "1px solid #1E1E32", cursor: "pointer" }}>
                  <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#D0D0E8", fontWeight: 600 }}>{i + 1}. {q}</span>
                    <span style={{ color: "#6A6A88", fontSize: 16 }}>{openQuestion === i ? "−" : "+"}</span>
                  </div>
                  {openQuestion === i && (
                    <div style={{ padding: "0 16px 12px", borderTop: "1px solid #1E1E32" }}>
                      <p style={{ fontSize: 13, color: "#9898B3", marginTop: 10, lineHeight: 1.6 }}>
                        Take time to reflect on this question. Consider journaling your thoughts, discussing with a study group, or praying through what this reveals about your heart.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => toggleStudied(selected.id)}
                style={{ flex: 1, padding: "12px 20px", borderRadius: 12, border: `1px solid ${studiedIds.has(selected.id) ? "rgba(0,255,136,0.4)" : "#2A2A40"}`, background: studiedIds.has(selected.id) ? "rgba(0,255,136,0.12)" : "#1E1E32", color: studiedIds.has(selected.id) ? "#00FF88" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                {studiedIds.has(selected.id) ? "✓ Marked as Studied" : "Mark as Studied"}
              </button>
              <button onClick={() => toggleSave(selected.id)}
                style={{ padding: "12px 20px", borderRadius: 12, border: `1px solid ${savedIds.has(selected.id) ? "rgba(255,215,0,0.3)" : "#2A2A40"}`, background: savedIds.has(selected.id) ? "rgba(255,215,0,0.08)" : "#1E1E32", color: savedIds.has(selected.id) ? "#FFD700" : "#9898B3", cursor: "pointer", fontWeight: 700, fontSize: 16 }}>
                {savedIds.has(selected.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
