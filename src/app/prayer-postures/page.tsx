"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const POSTURES = [
  {
    name: "Standing",
    icon: "🧍",
    color: "#3B82F6",
    scriptures: ["Nehemiah 9:5", "Mark 11:25", "Luke 18:13"],
    meaning: "Standing is the ancient posture of readiness, respect, and resurrection hope. In Jewish and early Christian worship, the congregation stood to pray — especially on Sundays, the day of resurrection. To stand is to pray as one who has been raised with Christ.",
    tradition: "Standing remains the default posture for prayer in Eastern Orthodox worship. The early church forbade kneeling on Sundays as an affirmation of resurrection joy.",
    practice: "Try standing for your morning prayers this week. Notice how posture affects attentiveness. Standing communicates: I am ready, I am here, I am not asleep.",
  },
  {
    name: "Kneeling",
    icon: "🧎",
    color: "#8B5CF6",
    scriptures: ["Daniel 6:10", "Acts 20:36", "Philippians 2:10-11"],
    meaning: "Kneeling is the posture of supplication, humility, and urgent need. Daniel knelt three times a day regardless of the threat to his life. Paul knelt with the Ephesian elders in tears. Kneeling physically enacts what the soul declares: I am small, you are great, I need you.",
    tradition: "Kneeling for prayer developed especially in Western Christianity. Monks historically knelt for the Divine Office. In Protestant worship, kneeling for confession and intercession remains common.",
    practice: "Kneel for one prayer session this week — not quickly, but deliberately. Let the discomfort remind you of what you are doing: approaching a holy God.",
  },
  {
    name: "Prostration",
    icon: "🙇",
    color: "#EF4444",
    scriptures: ["Matthew 26:39", "Revelation 4:10", "Numbers 16:22"],
    meaning: "Lying face-down before God is the most radical posture of submission. Jesus himself fell with his face to the ground in Gethsemane. The elders in Revelation cast their crowns and fell before the throne. Prostration says: I have nothing, I am nothing, you are everything.",
    tradition: "Prostration is practiced in Eastern Christianity (especially during Great Lent), in Islam, and in many African and Asian Christian traditions. It is rare in Western Protestantism but has deep biblical roots.",
    practice: "Practice prostration in private. Lie face-down and remain silent before God for several minutes. This is not performance — it is abandonment of self-presentation before the Holy One.",
  },
  {
    name: "Raised Hands",
    icon: "🙌",
    color: "#F59E0B",
    scriptures: ["Psalm 63:4", "1 Timothy 2:8", "Lamentations 3:41"],
    meaning: "Lifting hands in prayer is one of the oldest gestures of worship across cultures. It communicates both praise (receiving what God gives) and petition (reaching toward God in need). Paul instructs men to 'lift up holy hands in prayer' (1 Timothy 2:8). The physical act of opening hands upward trains the soul toward receptivity.",
    tradition: "Raised hands characterize charismatic and Pentecostal worship, but are ancient — found in the catacombs' art of the early church (the orans posture) and throughout Jewish prayer practice.",
    practice: "Raise your hands during a time of praise. If this feels unfamiliar, start with slightly lifted palms. Notice whether it affects your sense of God's presence.",
  },
  {
    name: "Bowed Head",
    icon: "🤲",
    color: "#10B981",
    scriptures: ["Genesis 24:26", "Exodus 34:8", "Matthew 6:6"],
    meaning: "The bowed head is the most commonly practiced posture in Western Christianity — a gesture of reverence and focused attention. Bowing the head directs attention inward and downward, away from visual distraction. It is a small prostration, accessible in any setting.",
    tradition: "Bowing the head became standard in Protestant worship as the primary prayer posture. It is connected to Jesus' instruction to pray 'in your room' (Matthew 6:6) — the bowed head creates a kind of interior room in public.",
    practice: "Pay attention to the next time you bow your head. Instead of habit, make it intentional: a conscious acknowledgment of God's presence and your own smallness.",
  },
  {
    name: "Walking Prayer",
    icon: "🚶",
    color: GREEN,
    scriptures: ["Genesis 5:24", "Deuteronomy 6:7", "Mark 1:35"],
    meaning: "Not all prayer requires stillness. Jesus withdrew to lonely places — often walking to them. The Israelites were commanded to speak of God 'when you walk along the road' (Deuteronomy 6:7). Walking prayer integrates body and spirit, bringing the whole person into communion with God.",
    tradition: "Walking prayer appears in pilgrimage traditions, prayer labyrinth practices, and the ancient Celtic practice of 'peregrinatio' — wandering with God. Many of the Psalms were composed for processions.",
    practice: "Take one prayer walk this week. Leave your phone behind. Pray aloud or silently as you walk. Let the rhythm of your steps become a rhythm of prayer.",
  },
];

const TRADITIONS = [
  { tradition: "Catholic & Orthodox", postures: "Standing (Sunday/feast days), Kneeling (penitential seasons), Prostration (ordinations, major feasts), Bowing (at the name of Jesus)", note: "Liturgical posture is specified for each prayer in the rite — it is not left to individual preference." },
  { tradition: "Anglican / Episcopal", postures: "Kneeling for confession and petition, Standing for praise and Gospel reading, Sitting for teaching — all within a single service", note: "The Book of Common Prayer includes posture rubrics. 'Let us kneel' and 'Let us stand' are liturgical instructions, not suggestions." },
  { tradition: "Pentecostal / Charismatic", postures: "Raised hands (praise), Kneeling at the altar (prayer ministry), Dancing (prophetic worship), Prostration (encounters with the Spirit)", note: "Posture is led by the Spirit rather than prescribed by rubric — freedom and responsiveness are valued." },
  { tradition: "Reformed / Presbyterian", postures: "Historically: Standing (prayer), Sitting (sermon), Kneeling (Lord's Supper) — though contemporary practice varies widely", note: "The Westminster Directory (1645) specified postures. Modern Reformed practice often retains less of this structure." },
  { tradition: "Contemplative / Monastic", postures: "Sitting (lectio divina, centering prayer), Prostration (special prayers), Walking (prayer walks, labyrinth)", note: "The body is not suppressed but engaged — stillness of body supports stillness of spirit." },
];

const PRACTICAL = [
  { q: "Isn't posture just external and performative?", a: "The body and soul are not separate. What we do with our bodies in prayer shapes what we experience in prayer — and vice versa. C.S. Lewis noted that the physical act of kneeling helps produce the humility it signifies. We are embodied creatures, and God meets us in our bodies." },
  { q: "What if I can't kneel or stand due to physical limitations?", a: "God is not a posture inspector. The point is engagement, not conformity. Use whatever position allows you to be most alert, focused, and attentive. A wheelchair-bound believer who prays with full attention glorifies God more than an able-bodied person who kneels out of habit with a wandering mind." },
  { q: "Should I vary my posture?", a: "Yes, intentionally. Different postures draw out different aspects of prayer. Stand for praise. Kneel for confession. Open your hands for intercession. Walk for processing and listening. Variation prevents routine from deadening the practice." },
  { q: "Is there a 'right' posture for prayer?", a: "No single posture is prescribed as universal in Scripture. Posture serves prayer — it does not constitute it. The goal is a body that is engaged and a soul that is present. Whatever posture best achieves that for you in a given moment is the right one." },
];

const TEACHERS_POSTURE = [
  { id: "teresa", name: "Teresa of Avila", era: "1515-1582", context: "Carmelite mystic; Interior Castle; Way of Perfection", bio: "Teresa reformed the Carmelite order and wrote the most detailed map of contemplative prayer in the Christian tradition. Interior Castle describes the soul's journey toward union with God through seven 'dwelling places,' moving from surface religiosity to the innermost room where the soul rests in God's presence. Her Way of Perfection includes extensive practical guidance on mental prayer, recollection (gathering scattered attention toward God), and the relationship between contemplation and action.", quote: "Prayer in my opinion is nothing else than an intimate sharing between friends; it means taking time frequently to be alone with Him who we know loves us.", contribution: "Mapped the interior life of prayer with precision and beauty unmatched in Western Christian literature. Her work gave embodied, experiential language to contemplative prayer that the Western church had lacked." },
  { id: "calvin", name: "John Calvin", era: "1509-1564", context: "Institutes of the Christian Religion, Book III, Chapter 20", bio: "Calvin's treatment of prayer in the Institutes is the most thorough Reformed theology of prayer. He identified four rules of prayer: reverence (recognizing God's majesty), sincerity (praying from the heart, not performing), humility (approaching without presumption, in Christ's name), and confidence (trusting that God hears and answers). He grounded prayer in the doctrine of adoption: we pray as beloved children to a Father who delights to give.", quote: "To know God as the Master and Bestower of all good things, who invites us to request them of him, and still not go to him and not ask of him — this would be of as little profit as for a man to neglect a treasure, buried and hidden in the earth, after it had been pointed out to him.", contribution: "Established the Reformed theology of prayer on the doctrine of adoption. His four rules of prayer remain the most useful set of principles for evaluating whether one's prayer life is healthy." },
  { id: "barth", name: "Karl Barth", era: "1886-1968", context: "Prayer (1952, lectures on the Lord's Prayer); Basel, Switzerland", bio: "Barth's short book Prayer consists of lectures on the Lord's Prayer — working through each petition in the light of his theology of revelation and grace. His controlling conviction: prayer is our response to God's prior address to us. We do not call God's attention to ourselves; God has already spoken, acted, and invited. Prayer is the human side of the divine-human conversation that God initiated. This grounds prayer in grace rather than technique and removes the anxious question of whether we are praying 'correctly.'", quote: "To clasp hands in prayer is the beginning of an uprising against the disorder of the world.", contribution: "Reframed prayer as the human response to God's prior speech rather than the human initiation of contact with an absent God. This Barthian reversal liberates prayer from performance anxiety and grounds it in the reality of revelation." },
  { id: "peterson", name: "Eugene Peterson", era: "1932-2018", context: "Answering God: The Psalms as Tools for Prayer (1989); The Message", bio: "Peterson's Answering God argues that prayer is not primarily talking to God but responding to God — hence the Psalms (God's inspired words addressed to God) are the primary school of prayer. To learn to pray is to learn to speak the Psalms — the full range of human experience (despair, rage, praise, confusion, longing) offered to God in the words he himself provided. Peterson also wrote the entire Bible in The Message (a translation/paraphrase) as an act of liturgical service to people who could not hear the original languages.", quote: "Prayer is not a technique for getting things from God. Prayer is the life of faith — and the Psalms are its practice material.", contribution: "Recovered the Psalms as the primary school of Christian prayer. His insistence that genuine prayer includes complaint, lament, and rage — not just praise and petition — gave Christians permission to be honest with God in ways pietism had discouraged." },
  { id: "lewis_pr", name: "C.S. Lewis", era: "1898-1963", context: "Letters to Malcolm: Chiefly on Prayer (1963)", bio: "Lewis's final book before his death is his most intimate treatment of prayer — written as letters to a fictional friend, working through the problems prayer poses: the mechanics of petition, what it means that God 'answers' prayer, the relationship between prayer and providence, and the experience of God's seeming absence. He does not resolve the difficulties neatly but enters them honestly. His chapter on the experience of dryness in prayer — the periods when God seems absent — is the most honest treatment in popular Christian literature.", quote: "We must lay before Him what is in us, not what ought to be in us.", contribution: "Modeled honest intellectual engagement with prayer's difficulties rather than premature resolution. His willingness to say 'I don't know' while still praying created permission for millions of Christians to continue praying through doubt, dryness, and unanswered petition." }
];

export default function PrayerPosturesPage() {
  const [activeTab, setActiveTab] = usePersistedState<"postures" | "teachers" | "traditions" | "faq" | "journal" | "videos">("vine_prayer-postures_tab", "postures");
  const [selectedTeacher, setSelectedTeacher] = usePersistedState("vine_prayer-postures_selected_teacher", "teresa");
  const teacherItem = TEACHERS_POSTURE.find(t => t.id === selectedTeacher)!;
  const [selected, setSelected] = usePersistedState<string>("vine_prayer-postures_selected", "Standing");

  const selectedPosture = POSTURES.find(p => p.name === selected);

  const [ppJEntries, setPpJEntries] = useState<{ id: string; date: string; posture: string; experience: string; practice: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ppj_entries") ?? "[]"); } catch { return []; }
  });
  const [ppJForm, setPpJForm] = useState({ posture: "", experience: "", practice: "" });
  const [ppJSaved, setPpJSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_ppj_entries", JSON.stringify(ppJEntries)); } catch {} }, [ppJEntries]);
  const savePpJEntry = () => {
    if (!ppJForm.posture.trim()) return;
    setPpJEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...ppJForm }, ...prev]);
    setPpJForm({ posture: "", experience: "", practice: "" });
    setPpJSaved(true);
    setTimeout(() => setPpJSaved(false), 2000);
  };
  const deletePpJEntry = (id: string) => setPpJEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙏</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Prayer Postures</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The body is not separate from the soul. How you position yourself in prayer shapes what you experience in prayer. Scripture describes at least six distinct physical postures of prayer — each embodying a different aspect of communion with God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "postures" as const, label: "The Postures", icon: "🧎" },
            { id: "teachers" as const, label: "Teachers", icon: "💬" },
            { id: "traditions" as const, label: "By Tradition", icon: "⛪" },
            { id: "faq" as const, label: "Questions", icon: "❓" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "postures" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 180, flexShrink: 0 }}>
              {POSTURES.map(p => (
                <button type="button" key={p.name} onClick={() => setSelected(p.name)}
                  style={{ width: "100%", background: selected === p.name ? `${p.color}15` : "transparent", border: `1px solid ${selected === p.name ? p.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <span style={{ color: selected === p.name ? p.color : TEXT, fontWeight: 700, fontSize: 14 }}>{p.name}</span>
                </button>
              ))}
            </div>
            {selectedPosture && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${selectedPosture.color}30`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 36 }}>{selectedPosture.icon}</span>
                    <h2 style={{ color: selectedPosture.color, fontWeight: 900, fontSize: 24, margin: 0 }}>{selectedPosture.name}</h2>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {selectedPosture.scriptures.map(s => (
                      <span key={s} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ color: selectedPosture.color, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>MEANING</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{selectedPosture.meaning}</p>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>HISTORICAL TRADITION</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedPosture.tradition}</p>
                  </div>
                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>PRACTICE THIS WEEK</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{selectedPosture.practice}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "teachers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {TEACHERS_POSTURE.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedTeacher(t.id)}
                  style={{ width: "100%", background: selectedTeacher === t.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedTeacher === t.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedTeacher === t.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{t.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{teacherItem.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{teacherItem.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{teacherItem.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & TEACHING</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{teacherItem.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{teacherItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{teacherItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "traditions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Different Christian traditions have developed distinct practices around prayer posture. Understanding these traditions helps you draw from the full breadth of the church's wisdom — not just your own tradition's defaults.
              </p>
            </div>
            {TRADITIONS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.tradition}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.postures}</p>
                <div style={{ background: BG, borderRadius: 8, padding: 12 }}>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Common questions about prayer posture — and why they matter more than you might think.
              </p>
            </div>
            {PRACTICAL.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{p.q}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{p.a}</p>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Prayer Postures Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record the posture you tried, what you experienced, and how you will practice it going forward.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Posture I tried</label>
                  <textarea rows={2} value={ppJForm.posture} onChange={e => setPpJForm(f => ({ ...f, posture: e.target.value }))} placeholder="e.g. kneeling, prostrating, hands raised" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>What I experienced</label>
                  <textarea rows={2} value={ppJForm.experience} onChange={e => setPpJForm(f => ({ ...f, experience: e.target.value }))} placeholder="How did this posture affect your prayer?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>How I will practice it</label>
                  <textarea rows={2} value={ppJForm.practice} onChange={e => setPpJForm(f => ({ ...f, practice: e.target.value }))} placeholder="When and how will you incorporate this posture regularly?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button type="button" onClick={savePpJEntry} style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {ppJSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
            </div>
            {ppJEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {ppJEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deletePpJEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button>
                    </div>
                    {e.posture && <div style={{ marginBottom: 8 }}><span style={{ color: GREEN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Posture</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.posture}</p></div>}
                    {e.experience && <div style={{ marginBottom: 8 }}><span style={{ color: PURPLE, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Experience</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.experience}</p></div>}
                    {e.practice && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Practice</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.practice}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on bodily prayer, posture, and the embodied disciplines of Christian worship.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "mC-zw0zCCtg", title: "The Lord's Prayer — Explained by John Piper", channel: "Desiring God (John Piper)", description: "Piper unpacks the Lord's Prayer as a model for all prayer — including the posture of the heart that must accompany the words of the mouth." },
                  { videoId: "ZOBIPb-6PTc", title: "How to Pray: Prayer with R.C. Sproul", channel: "Ligonier Ministries", description: "R.C. Sproul on the theology of approaching God in prayer — what posture of soul is required when we enter the presence of the Holy One." },
                  { videoId: "OpfuKKH_SCE", title: "How Kneeling in Church Changed My Spiritual Life", channel: "Catholic / Liturgical Testimony", description: "A personal testimony on how the physical practice of kneeling transformed the interior life of prayer — a reminder that embodied practice shapes spiritual reality." },
                  { videoId: "ERR0Zq7TBgU", title: "Contemplative Prayer — Spiritual Directions Podcast", channel: "Spiritual Directions", description: "An exploration of contemplative prayer traditions and how posture, silence, and attentiveness to God work together in the classical Christian understanding of prayer." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
