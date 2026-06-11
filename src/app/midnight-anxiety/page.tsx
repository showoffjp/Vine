"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Why Anxiety Hits at Night — the Spiritual and Biological Reality", verse: "Ps 77:2-4; Ps 3:5", text: "At night I stretched out untiring hands; my soul refused to be comforted (Ps 77:2). I lie down and sleep; I wake again, because the Lord sustains me (Ps 3:5). Nighttime anxiety is not a modern disorder — it is the ancient human experience. Biologically, cortisol levels shift in the early morning hours, and the brain, no longer occupied by the day's distractions, releases what it has been holding at bay. The fears that are manageable at 2pm become catastrophes at 3am, not because they have grown but because the ordinary defenses of busyness have been stripped away. The silence and darkness of night have always been the time of greatest vulnerability — and greatest prayer. The psalms know this. They were written by people for whom night was not a time of peaceful rest but a time when the soul wrestled with what it could not control, and brought it before the only one who could." },
  { title: "The Psalm's Nighttime Liturgy — How the Psalms Were Written for 3am", verse: "Ps 4:8; Ps 16:7; Ps 119:148", text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety (Ps 4:8). Even at night my heart instructs me (Ps 16:7). My eyes stay open through the watches of the night, that I may meditate on your promises (Ps 119:148). The psalms are the original night office — a liturgy for people for whom darkness was the time of greatest spiritual intensity. The Hebrew tradition of night prayer understood something modern Christianity has largely forgotten: the hours of darkness are not wasted hours but sacred ones. When sleep refuses to come, the psalms provide language for the soul's wrestling — not managed, sanitized prayer, but raw, honest encounter with God in the midst of fear, grief, and sleeplessness. To pray the psalms at 3am is to join a communion of sufferers that stretches back three thousand years, all of whom found in them words for what they could not otherwise say." },
  { title: "Be Not Afraid — What Jesus Actually Meant", verse: "Matt 14:27", text: "Take courage; it is I. Do not be afraid (Matt 14:27). The scriptures contain more than 365 variations of the command to not be afraid — one for every day of the year, as if God anticipated that human beings would need daily reassurance. But what does Jesus mean when he commands peace? He is not commanding the absence of an emotion. Anxiety is not a sin; it is a signal — a natural human response to real or perceived threat. What Jesus addresses when he says do not be afraid is not the feeling but the orientation: the posture of trust or distrust, surrender or control, that underlies the feeling. Anxiety becomes spiritually problematic not when it arises — it will always arise — but when it becomes the ruling principle of a life, displacing trust in God with frantic self-management. Jesus speaks into the storm, names himself, and invites a different kind of response: not the suppression of fear but the grounding of identity in his presence." },
  { title: "The Peace That Passes Understanding — Phil 4:4-7", verse: "Phil 4:4-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus (Phil 4:6-7). Paul's instruction is not a formula to eliminate anxiety; it is a reorientation of the anxious person toward God. The four-part movement is: rejoice in the Lord always; let your gentleness be evident to all; present your requests to God with thanksgiving; receive the peace that transcends understanding. This peace does not come from resolved circumstances. Paul wrote Philippians from prison — his circumstances were not resolved. The peace he describes is the peace of a person whose heart is guarded by the presence of God regardless of what is happening outside. It passes understanding precisely because it has no natural explanation. It is not calm because everything is fine. It is calm because God is present." },
  { title: "Holding the Night Watch — Trusting God with What You Cannot Control", verse: "Ps 121:3-4", text: "He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep (Ps 121:3-4). The deepest comfort in the night hours is not a technique or a breathing exercise. It is a theological reality: there is one who is awake when you cannot sleep, one who is watching when your vigilance fails, one who holds what you cannot hold. Nighttime anxiety often involves the futile effort to control what only God can manage — the health of someone you love, the outcome of a situation, the future that you cannot see. The practice of consciously, deliberately handing each worry to God before sleep is not resignation; it is the recognition of the proper order of reality. You are not God. God does not sleep. What you cannot hold through the night, he holds. Releasing your worries into his keeping is not weakness — it is the most sane and faithful thing a finite person can do." },
];

const practices = [
  { icon: "🔎", title: "The HALT+F Check Before Bed", text: "Before bed, ask five diagnostic questions: Am I Hungry? Am I Angry? Am I Lonely? Am I Tired? And — Am I Afraid? Each of these physical and emotional states significantly amplifies nighttime anxiety. A small snack, a brief honest conversation, a few minutes of journaling anger, or simply naming the fear can reduce the body's baseline arousal enough to make rest possible. HALT+F is not a cure; it is the practice of attending to the contributors to anxiety before they compound in the dark." },
  { icon: "🙏", title: "The Handover Prayer — Giving Each Fear to God Before Sleep", text: "Sit quietly before sleeping and name each specific fear aloud or in writing: the health worry, the financial concern, the relationship uncertainty, the thing you cannot control. After naming each one, consciously and specifically give it to God: 'Lord, I cannot hold this through the night. I give it to you.' This is the practice of 1 Pet 5:7 (cast all your anxiety on him) made concrete and deliberate. It is not magic, and the fears may return — but the act of transfer is both psychologically and spiritually significant. You are practicing, in real time, the truth that God holds what you cannot." },
  { icon: "💨", title: "Scripture-Breathing — Inhale and Exhale with the Psalms", text: "When anxiety wakes you and sleep will not return, breathe slowly and attach a phrase of scripture to the breath. Inhale on: 'I will lie down' — exhale on: 'and sleep in peace' (Ps 4:8). Or inhale on: 'The Lord is my shepherd' — exhale on: 'I shall not want.' The breath becomes a vehicle for truth, and the truth gradually displaces the racing thoughts. This is not a relaxation technique borrowed from secular mindfulness; it is the ancient Christian practice of meditating on scripture — ruminating on it, returning to it, letting it reshape the inner world — applied to the specific vulnerability of the nighttime hours." },
  { icon: "✍️", title: "Gratitude Review Before Sleep", text: "Before sleep, name three specific things you are grateful for and speak them aloud or write them down. Specificity matters — not 'I am grateful for my family' but 'I am grateful that my daughter laughed at dinner tonight.' Research consistently shows that gratitude practice reduces anxiety and improves sleep quality. Theologically, it is the practice of noticing the gifts God has given today rather than fixating on the fears of tomorrow. Gratitude is a form of trust: to be grateful is to acknowledge that goodness has been given, that the Giver is good, and that goodness has come before and may come again." },
  { icon: "📞", title: "Calling a Friend or Pastor When Anxiety Is Severe", text: "There are nights when anxiety is too large to face alone — when the fear feels crushing, the isolation feels unbearable, and the practices are not enough. On those nights, calling a friend, a pastor, or a counselor is not weakness; it is wisdom. We are made for community, and bearing one another's burdens (Gal 6:2) includes the burden of the sleepless night. If anxiety is regularly severe, disrupting sleep consistently over weeks, speaking with a pastor, counselor, or physician is not a failure of faith — it is taking seriously the body and soul God has entrusted to you." },
];

const scriptures = [
  { verse: "Phil 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Ps 4:8", text: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety." },
  { verse: "Ps 121:3-4", text: "He will not let your foot slip — he who watches over you will not slumber; indeed, he who watches over Israel will neither slumber nor sleep." },
  { verse: "Matt 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Ps 46:10", text: "He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”" },
  { verse: "Isa 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
];

const voices = [
  { name: "Dane Ortlund", role: "Gentle and Lowly; Author and Pastor", quote: "The heart of Christ is not reluctant toward the weary, the anxious, the ones who cannot find rest. He is not tolerating your weakness — he is drawn to it. His compassion is not summoned with difficulty; it flows from who he is. The one who cannot sleep, who lies in the dark with fears too heavy to name, is exactly the one Jesus had in mind when he said: Come to me.", bio: "Ortlund's Gentle and Lowly is a focused meditation on the emotional life of Jesus — specifically his compassion and tenderness toward the suffering, the weak, and the weary. For those who lie awake convinced that their anxiety is evidence of spiritual failure, Ortlund's portrait of Jesus is corrective and healing. His argument, grounded entirely in Matthew 11 and related texts, is that Jesus is most himself when he is with those who have nothing to offer him." },
  { name: "Paul David Tripp", role: "New Morning Mercies; Author and Counselor", quote: "The night is not your enemy. The darkness that strips away your distractions and leaves you alone with your fears is also the darkness in which God meets you. The anxiety that wakes you at 3am may be the very instrument by which he draws you into the kind of dependence that daylight and productivity conspire to prevent. He is present in the night watch. He has not abandoned you to your fear.", bio: "Tripp's New Morning Mercies and Whiter Than Snow address the inner life — anxiety, fear, grief, and the night seasons of faith — with a combination of psychological honesty and rich theological grounding. His daily devotional format is particularly well-suited to the nighttime reader, offering short, anchoring reflections for the moments when the mind races and sleep will not come. His consistent theme is that suffering and vulnerability are the occasions of God's nearness, not his absence." },
  { name: "Dr. Ed Welch", role: "Running Scared: Fear, Worry, and the God of Rest; Counselor and Author", quote: "Fear and worry are not the opposite of faith — they are the occasion for it. Every anxious thought is an invitation to trust. The question is not whether you will be afraid; the question is where you will take your fear. The person who brings their fear to God in the night watch is not failing at faith — they are practicing it.", bio: "Welch's Running Scared is among the most carefully argued and pastorally sensitive treatments of anxiety available from a biblical counseling perspective. He distinguishes between fear as a signal (appropriate and often wise) and fear as a ruling master (which displaces trust in God), and he provides both theological grounding and practical guidance for people for whom anxiety is a chronic and exhausting companion. His treatment of the night seasons of faith is particularly valuable." },
];

const videos = [
  { id: "K4TOrB4TTTg", title: "What Does the Bible Say About Anxiety and Fear?" },
  { id: "qM7A6C1SkS8", title: "Dane Ortlund: Gentle and Lowly — Jesus and the Weary Soul" },
  { id: "XzlhHmqDPyM", title: "Ed Welch on Running Scared — Fear, Worry, and the God of Rest" },
  { id: "vF7QnzRNWaE", title: "Phil 4:4-7 — The Peace That Passes Understanding" },
];

type MAEntry = { id: string; date: string; fear: string; truth: string; practice: string };

export default function MidnightAnxietyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_midnightanxiety_entries") ?? "[]"); } catch { return []; }
  });
  const [jFear, setJFear] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_midnightanxiety_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jFear.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: jFear, truth: jTruth, practice: jPractice }, ...prev]);
    setJFear(""); setJTruth(""); setJPractice("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Anxiety &amp; Sleep</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Midnight Anxiety</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>3am anxiety, nighttime fear, and finding peace when sleep will not come — a biblical and practical guide for the dark hours of the soul.</p>

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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Midnight Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Name what keeps you awake, find the truth that speaks to it, and record the practice you are trying tonight.</p>
            {[
              { label: "Fear (what keeps you awake at night?)", val: jFear, set: setJFear },
              { label: "Truth (the scriptural truth that speaks to that fear)", val: jTruth, set: setJTruth },
              { label: "Practice (what practice are you trying tonight?)", val: jPractice, set: setJPractice },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: INDIGO, marginBottom: 4 }}>Past Entries ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.fear.slice(0, 60)}{e.fear.length > 60 ? "…" : ""}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.truth && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Truth: {e.truth}</p>}
                    {e.practice && <p style={{ fontSize: "0.88rem", color: MUTED }}>Practice: {e.practice}</p>}
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
