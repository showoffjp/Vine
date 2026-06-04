"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  church: string;
  series?: string;
  date: string;
  duration: string;
  topic: string;
  mainVerse: string;
  description: string;
  tags: string[];
  views: number;
  thumbnail: string;
  type: "Video" | "Audio" | "Transcript";
}

interface SermonNote {
  sermonId: string;
  notes: string;
  keyPoints: string[];
  savedAt: string;
}

const sermons: Sermon[] = [
  {
    id: "s1",
    title: "The Prodigal God",
    preacher: "Timothy Keller",
    church: "Redeemer Presbyterian, NYC",
    series: "The Parables of Jesus",
    date: "2023-03-12",
    duration: "48 min",
    topic: "Grace",
    mainVerse: "Luke 15:11-32",
    description: "Keller unpacks the parable of the prodigal son — revealing that the real scandal of the story isn't the younger son's rebellion, but the elder son's self-righteousness, and the father's reckless, scandalous love for both.",
    tags: ["Grace", "Gospel", "Parable", "Forgiveness"],
    views: 284000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s2",
    title: "Identity in the Storm",
    preacher: "Christine Caine",
    church: "Hillsong Church, Sydney",
    series: "Unstoppable",
    date: "2023-08-20",
    duration: "42 min",
    topic: "Identity",
    mainVerse: "Matthew 14:22-33",
    description: "Using Peter's walk on water, Christine unpacks what it looks like to step out in faith when your circumstances are screaming that you'll sink — and how Jesus meets us in the middle of the storm.",
    tags: ["Faith", "Identity", "Fear", "Courage"],
    views: 198000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s3",
    title: "When God Is Silent",
    preacher: "Louie Giglio",
    church: "Passion City Church, Atlanta",
    date: "2024-01-14",
    duration: "55 min",
    topic: "Faith",
    mainVerse: "Psalm 22:1-2",
    description: "A raw, honest sermon addressing the seasons when God feels absent. Giglio walks through biblical figures who cried out in the silence — and what they discovered on the other side.",
    tags: ["Doubt", "Faith", "Prayer", "Suffering"],
    views: 342000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s4",
    title: "Made for More",
    preacher: "Steven Furtick",
    church: "Elevation Church, Charlotte",
    series: "Greater",
    date: "2023-11-05",
    duration: "38 min",
    topic: "Purpose",
    mainVerse: "Ephesians 3:20",
    description: "Furtick challenges the audience to expand their vision of what God can do — and to stop living within the limits of their own ability when God is 'able to do immeasurably more.'",
    tags: ["Purpose", "Calling", "Faith", "Vision"],
    views: 412000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s5",
    title: "The God Who Sees You",
    preacher: "Priscilla Shirer",
    church: "Going Beyond Ministries",
    date: "2023-06-18",
    duration: "51 min",
    topic: "God's Love",
    mainVerse: "Genesis 16:13",
    description: "Through Hagar's story — cast out, alone, and forgotten — Priscilla reveals that God sees the people society has overlooked, and El-Roi (the God who sees) hasn't missed a single detail of your story.",
    tags: ["God's Love", "Identity", "Women", "Hope"],
    views: 267000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s6",
    title: "The Cross and the Lynching Tree",
    preacher: "James H. Cone",
    church: "Auburn Seminary",
    date: "2011-09-15",
    duration: "62 min",
    topic: "Justice",
    mainVerse: "Galatians 3:13",
    description: "A landmark theological lecture connecting the suffering of Christ on the cross with the suffering of Black Americans under racial terror — a powerful and challenging meditation on solidarity and redemption.",
    tags: ["Justice", "Race", "Cross", "Theology"],
    views: 87000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s7",
    title: "Trusting God in the Dark",
    preacher: "John Piper",
    church: "Bethlehem Baptist, Minneapolis",
    series: "Providence",
    date: "2022-03-27",
    duration: "44 min",
    topic: "Suffering",
    mainVerse: "Romans 8:28",
    description: "Piper explores what it means for Romans 8:28 to be true not just doctrinally, but personally — when the 'all things' includes things that feel senseless and devastating.",
    tags: ["Suffering", "Providence", "Faith", "Trust"],
    views: 156000,
    thumbnail: "🎙️",
    type: "Audio",
  },
  {
    id: "s8",
    title: "The Sabbath as Resistance",
    preacher: "Walter Brueggemann",
    church: "Columbia Theological Seminary",
    date: "2019-10-03",
    duration: "58 min",
    topic: "Sabbath",
    mainVerse: "Exodus 20:8-11",
    description: "Brueggemann argues that Sabbath is not a religious nicety but a radical act of defiance against the anxiety-producing, productivity-obsessed systems of our age — as it was in ancient Egypt.",
    tags: ["Sabbath", "Rest", "Culture", "Justice"],
    views: 74000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s9",
    title: "You Are Not Alone",
    preacher: "Sarah Jakes Roberts",
    church: "The Potter's House, Dallas",
    date: "2024-02-11",
    duration: "46 min",
    topic: "Community",
    mainVerse: "John 11:35",
    description: "A sermon for those who feel isolated in their pain — Sarah unpacks Jesus weeping at Lazarus's tomb as proof that God doesn't simply observe our suffering but enters it fully with us.",
    tags: ["Community", "Suffering", "God's Love", "Hope"],
    views: 321000,
    thumbnail: "🎤",
    type: "Video",
  },
  {
    id: "s10",
    title: "What Is the Gospel?",
    preacher: "D.A. Carson",
    church: "The Gospel Coalition",
    series: "Basics of the Faith",
    date: "2020-06-14",
    duration: "52 min",
    topic: "Gospel",
    mainVerse: "1 Corinthians 15:1-11",
    description: "A careful, scholarly yet accessible unpacking of what 'gospel' actually means — tracing it through Scripture and clarifying common misunderstandings that dilute its power.",
    tags: ["Gospel", "Theology", "Salvation", "Scripture"],
    views: 203000,
    thumbnail: "📖",
    type: "Video",
  },
  {
    id: "s11",
    title: "Radical Generosity",
    preacher: "Francis Chan",
    church: "Cornerstone Church, Simi Valley",
    date: "2018-04-22",
    duration: "40 min",
    topic: "Generosity",
    mainVerse: "Luke 21:1-4",
    description: "Chan challenges American Christianity's comfortable relationship with wealth — using the widow's mite as a mirror that asks how much we'd actually give up if Jesus asked us to.",
    tags: ["Generosity", "Money", "Sacrifice", "Discipleship"],
    views: 289000,
    thumbnail: "🎙️",
    type: "Video",
  },
  {
    id: "s12",
    title: "Healing the Wounded Heart",
    preacher: "Dan Allender",
    church: "The Seattle School",
    date: "2021-09-09",
    duration: "65 min",
    topic: "Healing",
    mainVerse: "Psalm 13",
    description: "A trauma-informed, deeply pastoral talk on how God meets abuse survivors and those with deep wounds — and why the church must do better at holding space for the hardest stories.",
    tags: ["Healing", "Trauma", "Lament", "Counseling"],
    views: 91000,
    thumbnail: "📖",
    type: "Audio",
  },
];

const topics = ["All", "Grace", "Identity", "Faith", "Purpose", "Suffering", "Gospel", "Justice", "Prayer", "Generosity", "Healing", "Community", "Sabbath", "God's Love"];

const VOICES_SERM = [
  { id: "piper-j", name: "John Piper", era: "b. 1946", context: "Bethlehem Baptist, Minneapolis; Desiring God ministry — champion of expository preaching and Christian hedonism", bio: "John Piper served Bethlehem Baptist Church in Minneapolis for 33 years before founding the Desiring God ministry. His preaching philosophy — rooted in Jonathan Edwards's vision that God is most glorified when we are most satisfied in him — combines meticulous biblical exposition with intense personal passion. Piper's sermons are characterized by their density of Scripture, their insistence on the supremacy of God in all things, and their emotional force. His preaching helped spark a reform movement in evangelical pulpits toward verse-by-verse expository preaching in the 1990s and 2000s, and his thousands of freely available sermons at DesiringGod.org have made his voice globally accessible.", quote: "The power of a sermon comes not from its organization or its eloquence — it comes from the Word of God, owned by the Spirit of God, preached by a man of God who believes what he says.", contribution: "Piper's emphasis on expository preaching, combined with his passion for the glory of God and his Christian hedonism framework, influenced a generation of preachers toward verse-by-verse biblical preaching. His willingness to make all his sermons freely available online established a model that has democratized access to quality expository preaching worldwide." },
  { id: "keller-t", name: "Tim Keller", era: "1950-2023", context: "Redeemer Presbyterian, Manhattan — cultural apologetic preaching; The Reason for God (2008)", bio: "Timothy Keller founded Redeemer Presbyterian Church in Manhattan in 1989 and built it into one of the most influential evangelical congregations in the world. His preaching was distinctive in its engagement with secular intellectual culture — he preached to skeptics and believers simultaneously, taking objections seriously while showing how the gospel answers them. His sermon preparation was legendary: he is reported to have spent 20+ hours preparing every sermon. His books (The Reason for God, The Prodigal God, Prayer) grew out of his preaching and reached audiences far beyond his congregation. His death from pancreatic cancer in 2023 was mourned across denominational lines.", quote: "Every sermon should do three things: it should make people say, 'That's true,' then 'I never thought of it that way,' and finally, 'What must I do?' If you're only getting the first, you're lecturing. If you're only getting the second, you're performing. All three is preaching.", contribution: "Keller demonstrated that rigorous biblical preaching could engage secular, educated, skeptical audiences in one of the most unchurched cities in the world. His integration of cultural apologetics with expository preaching created a model that has been widely imitated by urban church planters. His freely available sermons and books have given pastors worldwide access to his approach." },
  { id: "edwards-j", name: "Jonathan Edwards", era: "1703-1758", context: "Northampton, Massachusetts; first Great Awakening preacher; America's greatest theologian", bio: "Jonathan Edwards is widely regarded as the greatest theological mind produced by American Christianity. His role in the First Great Awakening of the 1740s, his meticulous documentation of the revival phenomena in A Faithful Narrative and The Distinguishing Marks, and his systematic theological work (Freedom of the Will, Religious Affections, The Nature of True Virtue) established him as a figure of both historical and ongoing significance. His sermon Sinners in the Hands of an Angry God is the most famous sermon in American history. His Religious Affections — a careful psychological analysis of what genuine religious experience looks like — remains the most sophisticated evangelical treatment of spiritual emotion ever written.", quote: "God is glorified not only by His glory's being seen, but by its being rejoiced in. When those that see it, delight in it, God is more glorified than if they only see it. His glory is then received by the whole soul.", contribution: "Edwards gave American Christianity its most rigorous theological tradition and its most careful analysis of revival and spiritual experience. His Religious Affections remains the standard by which evangelical assessments of religious experience are measured. His influence on Piper, Mohler, and the reformed evangelical movement of the late 20th century was profound and direct." },
  { id: "robinson-h", name: "Haddon Robinson", era: "1931-2017", context: "Biblical Preaching (1980) — the most used homiletics textbook in evangelical seminaries", bio: "Haddon Robinson's Biblical Preaching: The Development and Delivery of Expository Messages is the most widely used homiletics textbook in evangelical seminaries — it has shaped how more than a generation of pastors think about sermon preparation and delivery. Robinson's concept of the 'big idea' — every sermon should have one main proposition, derived from the text, that the entire sermon illuminates and drives home — gave preachers a practical framework for biblical exposition that was both theologically serious and communicatively clear. Robinson taught at Dallas Theological Seminary, Gordon-Conwell, and Denver Seminary, and his influence through his students has been enormous.", quote: "Expository preaching is the communication of a biblical concept derived from and transmitted through a historical, grammatical, and literary study of a passage in its context, which the Holy Spirit applies first to the heart of the preacher and then through him to his hearers.", contribution: "Robinson's Biblical Preaching established the framework for expository sermon preparation that has been used in evangelical seminaries for four decades. His 'big idea' concept gave preachers a practical tool for ensuring that their sermons were driven by the text rather than by illustration or application. His influence through thousands of students has shaped expository preaching culture across denominations." },
  { id: "lloyd-jones-m", name: "D. Martyn Lloyd-Jones", era: "1899-1981", context: "Westminster Chapel, London — the supreme example of Reformed expository preaching in the 20th century", bio: "David Martyn Lloyd-Jones gave up a promising medical career to preach and served Westminster Chapel in London for thirty years, drawing large congregations through rigorous exposition of Scripture. His preaching on Romans (14 volumes), Ephesians (8 volumes), and the Sermon on the Mount established a model of extended, systematic, verse-by-verse preaching that influenced the Reformed world profoundly. Lloyd-Jones was skeptical of revivalism, evangelistic gimmicks, and psychological approaches to preaching — he believed the preacher's only tool was the Word of God and the Spirit of God, and that the church's problems were fundamentally theological, not methodological. His Preaching and Preachers (1971) is the most demanding and uncompromising theology of preaching in modern evangelical literature.", quote: "The work of preaching is the highest and the greatest and the most glorious calling to which anyone can ever be called... I would say without any hesitation that the most urgent need in the Christian Church today is true preaching.", contribution: "Lloyd-Jones's multi-volume expository series on Romans, Ephesians, and other passages established a model of sustained, verse-by-verse exposition that has influenced Reformed preachers worldwide. His Preaching and Preachers is required reading in many Reformed seminary homiletics courses and continues to challenge preachers toward theological seriousness and Spirit-dependence." },
];

export default function SermonArchivePage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_sermons_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [likedIds, setLikedIds] = useState<Set<string>>(() => {
    try { const l = localStorage.getItem("vine_sermons_liked"); return l ? new Set(JSON.parse(l)) : new Set(); } catch { return new Set(); }
  });
  const [notes, setNotes] = useState<Record<string, SermonNote>>(() => {
    try { const n = localStorage.getItem("vine_sermon_notes"); return n ? JSON.parse(n) : {}; } catch { return {}; }
  });
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const [noteText, setNoteText] = useState("");
  const [filterTopic, setFilterTopic] = usePersistedState("vine_sermon-archive_filter_topic", "All");
  const [filterType, setFilterType] = usePersistedState("vine_sermon-archive_filter_type", "All");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = usePersistedState<"all" | "saved" | "voices" | "howto" | "videos">("vine_sermon-archive_tab", "all");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_sermon-archive_voice", "piper-j");
  const voiceItem = VOICES_SERM.find(v => v.id === selectedVoice)!;
  const [noteMode, setNoteMode] = useState(false);


  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_sermons_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_sermons_liked", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleSaveNote = (sermon: Sermon) => {
    if (!noteText.trim()) return;
    const note: SermonNote = {
      sermonId: sermon.id,
      notes: noteText,
      keyPoints: noteText.split("\n").filter((l) => l.trim().startsWith("-")).map((l) => l.replace(/^-\s*/, "")),
      savedAt: new Date().toISOString(),
    };
    const next = { ...notes, [sermon.id]: note };
    setNotes(next);
    try { localStorage.setItem("vine_sermon_notes", JSON.stringify(next)); } catch {}
    setNoteMode(false);
    setNoteText("");
  };

  const filtered = sermons.filter((s) => {
    if (activeTab === "saved" && !savedIds.has(s.id)) return false;
    if (filterTopic !== "All" && s.topic !== filterTopic && !s.tags.includes(filterTopic)) return false;
    if (filterType !== "All" && s.type !== filterType) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.preacher.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <main id="main-content">
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a0a1e 0%, #07070F 100%)",
        padding: "52px 24px 36px",
        textAlign: "center",
        borderBottom: "1px solid #1E1E32",
      }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>🎙️</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Sermon Archive</h1>
        <p style={{ fontSize: 16, color: "#9898B3", maxWidth: 520, margin: "0 auto 24px" }}>
          Curated sermons from preachers around the world. Take notes, save favorites, and build your library.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: sermons.length.toString(), label: "Sermons" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: Object.keys(notes).length.toString(), label: "Notes Taken" },
            { value: VOICES_SERM.length.toString(), label: "Preachers" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#3a7d56" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9898B3" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        {/* Search + tabs */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: 4, gap: 4 }}>
            {(["all", "saved", "howto", "voices", "videos"] as const).map((tab) => (
              <button type="button" key={tab} onClick={() => setActiveTab(tab)}
                style={{ padding: "7px 18px", borderRadius: 7, border: "none",
                  background: activeTab === tab ? "#6B4FBB" : "transparent",
                  color: activeTab === tab ? "#fff" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                {tab === "all" ? "All Sermons" : tab === "saved" ? `Saved (${savedIds.size})` : tab === "howto" ? "📝 How to Listen" : tab === "voices" ? "🎓 Preachers" : "🎬 Videos"}
              </button>
            ))}
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            aria-label="Search sermons or preachers..." placeholder="Search sermons or preachers..."
            style={{ flex: 1, minWidth: 200, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#F2F2F8", fontSize: 13, outline: "none" }} />
          <select aria-label="Search" value={filterType} onChange={(e) => setFilterType(e.target.value)}
            style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 10, padding: "9px 14px", color: "#9898B3", fontSize: 13 }}>
            <option value="All">All Types</option>
            <option>Video</option>
            <option>Audio</option>
            <option>Transcript</option>
          </select>
        </div>

        {(activeTab === "all" || activeTab === "saved") && <>
        {/* Topic filters */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {topics.map((t) => (
            <button type="button" key={t} onClick={() => setFilterTopic(t)}
              style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
                border: `1px solid ${filterTopic === t ? "#6B4FBB" : "#1E1E32"}`,
                background: filterTopic === t ? "#6B4FBB20" : "transparent",
                color: filterTopic === t ? "#6B4FBB" : "#9898B3" }}>
              {t}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 16 }}>{filtered.length} sermons</div>

        {/* Sermon grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
          {filtered.map((sermon) => {
            const saved = savedIds.has(sermon.id);
            const liked = likedIds.has(sermon.id);
            const hasNote = !!notes[sermon.id];
            return (
              <div key={sermon.id}
                style={{ background: "#12121F", border: `1px solid ${saved ? "#6B4FBB40" : "#1E1E32"}`, borderRadius: 16, padding: 20, cursor: "pointer" }}
                onClick={() => { setSelectedSermon(sermon); setNoteMode(false); setNoteText(notes[sermon.id]?.notes ?? ""); }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: "#1E1E32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                    {sermon.thumbnail}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                      <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10,
                        background: sermon.type === "Video" ? "#EF444420" : sermon.type === "Audio" ? "#8B5CF620" : "#3B82F620",
                        color: sermon.type === "Video" ? "#EF4444" : sermon.type === "Audio" ? "#8B5CF6" : "#3B82F6",
                        fontWeight: 600 }}>
                        {sermon.type}
                      </span>
                      <span style={{ padding: "1px 8px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 10 }}>{sermon.topic}</span>
                      {hasNote && <span style={{ padding: "1px 8px", borderRadius: 20, background: "#3a7d5615", color: "#3a7d56", fontSize: 10 }}>📝</span>}
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F2F2F8", margin: 0, lineHeight: 1.3 }}>{sermon.title}</h3>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 4 }}>{sermon.preacher}</div>
                <div style={{ fontSize: 11, color: "#9898B3", marginBottom: 10 }}>{sermon.church}{sermon.series ? ` · ${sermon.series}` : ""}</div>

                <p style={{ fontSize: 12, color: "#9898B3", lineHeight: 1.6, marginBottom: 12 }}>
                  {sermon.description.slice(0, 100)}...
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>
                    {sermon.mainVerse} · {sermon.duration} · {sermon.views.toLocaleString()} views
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button type="button" onClick={(e) => { e.stopPropagation(); handleLike(sermon.id); }}
                      style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: liked ? "#3a7d5615" : "#1E1E32", color: liked ? "#3a7d56" : "#9898B3", cursor: "pointer", fontSize: 12 }}>
                      ♥
                    </button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); handleSave(sermon.id); }}
                      style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: saved ? "#6B4FBB20" : "#1E1E32", color: saved ? "#6B4FBB" : "#9898B3", cursor: "pointer", fontSize: 13 }}>
                      {saved ? "★" : "☆"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 24px" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ color: "#9898B3" }}>No sermons match your filters.</div>
          </div>
        )}
        </>}

        {activeTab === "howto" && (
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color: "#F2F2F8" }}>How to Listen to a Sermon</h2>
            <p style={{ color: "#9898B3", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Passive listening extracts entertainment. Active listening extracts transformation. Here is how to get more from every sermon you hear.
            </p>
            {[
              { icon: "📖", title: "Read the Passage Before the Service", desc: "If you know the preaching text ahead of time (most church websites or apps post it), read it slowly the day before. Ask yourself: what does this passage say? What confuses me? What do I already notice? Coming with questions makes you an active listener rather than a passive audience member." },
              { icon: "✍️", title: "Take Notes — But Don't Try to Write Everything", desc: "Note-taking improves retention, but transcription kills attention. Write the big idea (one sentence), the key move that surprised you, and one application point. Three things, written clearly, are worth more than pages of shorthand you'll never review." },
              { icon: "🔍", title: "Look Up the Passage Afterward", desc: "Read the passage again after the sermon with the preacher's main point in mind. Does the text actually support what was said? This is not suspicion — it is the Berean discipline (Acts 17:11). The best preachers welcome it." },
              { icon: "💬", title: "Discuss It with Someone", desc: "Sermon retention roughly doubles when you discuss the message with another person within 24 hours. This is why Sunday lunch, small groups, and family devotionals built around the sermon are so valuable — the conversation cements what the sermon planted." },
              { icon: "⚡", title: "Identify One Action", desc: "Every sermon should produce one specific thing you will do differently. Not a vague intention ('I should pray more') but a specific action ('I will pray for my neighbor John by name every morning this week'). If you leave without a specific action, the sermon has not yet done its work." },
              { icon: "🗂️", title: "Keep a Sermon Journal", desc: "Over months and years, a simple record of main points and personal applications becomes a map of your spiritual formation. You can return to it in dry seasons, track what God has been saying to you over time, and notice which themes keep appearing in your life." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 14, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#3a7d56", margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_SERM.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : "#1E1E32"}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : "#12121F", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? "#3a7d56" : "#F2F2F8", marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: "#12121F", border: "1px solid #1E1E32", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: "#9898B3", fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: "#F2F2F8" }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: "#9898B3", marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: "#07070F", borderRadius: 12, padding: 20, borderLeft: "3px solid #3a7d56", marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#6B4FBB", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: "#F2F2F8", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Sermons and teachings from some of the most faithful preachers of our generation — to model what great preaching looks and sounds like.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "OxwTqGJI9gM", title: "The Best of John Piper — Sermon Compilation", teacher: "John Piper" },
                { id: "PsoE9GxSIcA", title: "Having a Heart on Fire for God", teacher: "John Piper" },
                { id: "JaFRMaqHAdY", title: "The Gospel in 6 Minutes", teacher: "John Piper" },
                { id: "ApIg22vigBI", title: "The Renewed Mind and How to Have It", teacher: "John Piper" },
              ].map(v => (
                <div key={v.id} style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: "#F2F2F8", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: "#9898B3", fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sermon Detail Modal */}
      {selectedSermon && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => { setSelectedSermon(null); setNoteMode(false); }}>
          <div style={{ background: "#12121F", border: "1px solid #1E1E32", borderRadius: 20, padding: 28, maxWidth: 600, width: "100%", maxHeight: "88vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11,
                background: selectedSermon.type === "Video" ? "#EF444420" : "#8B5CF620",
                color: selectedSermon.type === "Video" ? "#EF4444" : "#8B5CF6", fontWeight: 600 }}>
                {selectedSermon.type}
              </span>
              <span style={{ padding: "3px 10px", borderRadius: 20, background: "#6B4FBB20", color: "#6B4FBB", fontSize: 11 }}>{selectedSermon.topic}</span>
            </div>

            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#F2F2F8", marginBottom: 6, lineHeight: 1.3 }}>{selectedSermon.title}</h2>
            <div style={{ fontSize: 14, color: "#9898B3", marginBottom: 2 }}>{selectedSermon.preacher}</div>
            <div style={{ fontSize: 12, color: "#9898B3", marginBottom: 16 }}>
              {selectedSermon.church}{selectedSermon.series ? ` · ${selectedSermon.series}` : ""} · {selectedSermon.duration} · {new Date(selectedSermon.date).toLocaleDateString()}
            </div>

            <div style={{ borderLeft: "3px solid #6B4FBB", paddingLeft: 14, marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: "#9898B3" }}>Main passage</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#6B4FBB" }}>{selectedSermon.mainVerse}</div>
            </div>

            <p style={{ fontSize: 14, color: "#9898B3", lineHeight: 1.75, marginBottom: 20 }}>{selectedSermon.description}</p>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {selectedSermon.tags.map((tag) => (
                <span key={tag} style={{ padding: "3px 10px", borderRadius: 20, background: "#1E1E32", color: "#9898B3", fontSize: 11 }}>{tag}</span>
              ))}
            </div>

            {/* Note section */}
            <div style={{ background: "#07070F", borderRadius: 12, padding: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div role="button" tabIndex={0} style={{ fontSize: 13, fontWeight: 600, color: "#F2F2F8" }}>📝 My Notes</div>
                <button type="button" onClick={() => setNoteMode(!noteMode)}
                  style={{ padding: "4px 12px", borderRadius: 6, border: "none", background: "#1E1E32", color: "#9898B3", cursor: "pointer", fontSize: 12 }}>
                  {noteMode ? "Cancel" : notes[selectedSermon.id] ? "Edit" : "Add Notes"}
                </button>
              </div>

              {noteMode ? (
                <>
                  <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} rows={6}
                    aria-label="Take notes here... Start lines with - to create key points" placeholder="Take notes here... Start lines with - to create key points"
                    style={{ width: "100%", background: "#12121F", border: "1px solid #1E1E32", borderRadius: 8, padding: "10px 12px", color: "#F2F2F8", fontSize: 13, outline: "none", resize: "vertical", boxSizing: "border-box", marginBottom: 10 }} />
                  <button type="button" onClick={() => handleSaveNote(selectedSermon)}
                    disabled={!noteText.trim()}
                    style={{ padding: "8px 20px", borderRadius: 8, border: "none",
                      background: noteText.trim() ? "#3a7d56" : "#1E1E32",
                      color: noteText.trim() ? "#07070F" : "#9898B3",
                      cursor: noteText.trim() ? "pointer" : "default", fontWeight: 600, fontSize: 13 }}>
                    Save Notes
                  </button>
                </>
              ) : notes[selectedSermon.id] ? (
                <div>
                  <p style={{ fontSize: 13, color: "#9898B3", lineHeight: 1.7, margin: "0 0 8px" }}>{notes[selectedSermon.id].notes}</p>
                  <div style={{ fontSize: 11, color: "#9898B3" }}>
                    Saved {new Date(notes[selectedSermon.id].savedAt).toLocaleDateString()}
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: 13, color: "#9898B3" }}>No notes yet. Click "Add Notes" to start.</div>
              )}
            </div>

            <div role="button" tabIndex={0} style={{ display: "flex", gap: 10 }}>
              <button type="button" onClick={() => handleLike(selectedSermon.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: likedIds.has(selectedSermon.id) ? "#3a7d5615" : "#1E1E32",
                  color: likedIds.has(selectedSermon.id) ? "#3a7d56" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
                ♥ {likedIds.has(selectedSermon.id) ? "Liked" : "Like"}
              </button>
              <button type="button" onClick={() => handleSave(selectedSermon.id)}
                style={{ flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: savedIds.has(selectedSermon.id) ? "#6B4FBB20" : "#1E1E32",
                  color: savedIds.has(selectedSermon.id) ? "#6B4FBB" : "#9898B3",
                  cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
                {savedIds.has(selectedSermon.id) ? "★ Saved" : "☆ Save"}
              </button>
              <button type="button" onClick={() => { setSelectedSermon(null); setNoteMode(false); }}
                style={{ padding: "11px 16px", borderRadius: 10, border: "1px solid #1E1E32", background: "transparent", color: "#9898B3", cursor: "pointer", fontSize: 14 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
