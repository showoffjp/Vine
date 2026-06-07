"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "practices" | "psalmist" | "pitfalls" | "journal" | "videos";

const theologyPoints = [
  {
    title: "Biblical Meditation Is Word-Centered",
    content: "The Hebrew word for meditation (hagah) means to murmur, moan, mutter — to chew on something repeatedly like cud. Joshua 1:8 commands it: 'Keep this Book of the Law always on your lips; meditate on it day and night.' Psalm 1 describes the blessed man as one who meditates on God's law day and night. Biblical meditation is not emptying the mind — it is filling the mind with God's Word and turning it over until understanding, affection, and action are formed."
  },
  {
    title: "The Historical Tradition: Lectio Divina",
    content: "Lectio Divina (Sacred Reading) is a structured form of biblical meditation developed by the Desert Fathers and systematized by Guigo II in the 12th century. The four movements: Lectio (Read — slowly, attentively), Meditatio (Meditate — turn the words, ask what they mean, notice what stirs), Oratio (Pray — respond to what you've heard, with praise, confession, petition), Contemplatio (Rest — cease speaking, be still before God). This has been practiced by Protestants (Puritans adapted it) and Catholics alike."
  },
  {
    title: "Eastern vs. Biblical Meditation: The Key Difference",
    content: "Eastern meditation (TM, Zen, Vipassana) aims at mental emptiness — detachment from thought, dissolution of self, achieving a state of pure awareness. Biblical meditation is the opposite: engagement with specific content (God's word, works, and character), formation of the mind toward truth, and strengthened relationship with a personal God. The distinction is not merely technique but ontology: who is God, and what is the self? Christians should not import Eastern frameworks into their prayer life."
  },
  {
    title: "Meditation and Transformation",
    content: "Romans 12:2 commands it: 'Be transformed by the renewing of your mind.' The mind is not renewed by willpower but by what it habitually meditates on. The Puritans spoke of 'chewing the cud' of Scripture — returning to it throughout the day, letting its implications surface in unexpected moments. This is the mechanism of spiritual formation: not dramatic experience but slow, daily saturation of the mind with revealed truth."
  },
  {
    title: "Contemplation and Apophatic Caution",
    content: "Some mystical traditions emphasize 'contemplation' as moving beyond words and concepts into direct union with God — what Catholic mysticism calls 'infused contemplation.' Protestant theology exercises caution here: special revelation is Scripture, not private contemplative experience. Yet Reformation spirituality does speak of rest in God, quiet before him, and the soul's rest in the promises. The difference is anchoring: rest in Christ and his word, not in cultivated experience or inner states."
  },
  {
    title: "Meditation Is for Everyone",
    content: "Biblical meditation is not the domain of monks or mystics. It is commanded for ordinary believers (Joshua 1:8, Psalm 1:2, Philippians 4:8). It does not require hours of silence, special training, or contemplative gifts. It requires a Bible, a little silence, and willingness to slow down. The practice of meditating on a verse during a commute, while washing dishes, or in the first minutes of morning is available to anyone who is willing."
  }
];

const practices = [
  {
    title: "Lectio Divina",
    tradition: "Benedictine / Broadly Christian",
    time: "20–45 minutes",
    color: "#8B5CF6",
    steps: [
      { name: "Lectio (Read)", desc: "Choose a short passage (4-8 verses). Read it slowly, aloud if possible. Notice any word or phrase that arrests you." },
      { name: "Meditatio (Meditate)", desc: "Read again. Chew on the word or phrase that stood out. Ask: What does this mean? What does it say about God? What does it say about me?" },
      { name: "Oratio (Pray)", desc: "Respond to God in prayer based on what you've heard. Praise him for what is true. Confess where you fall short. Ask for what is needed." },
      { name: "Contemplatio (Rest)", desc: "Cease speaking. Sit quietly before God. Simply be known by him. This is not effort but receptivity — being present to the One who is always present to you." }
    ],
    bestFor: "Those who want a structured, historically rooted approach to Scripture meditation",
    tip: "Start with the Psalms or a short Gospel passage. Don't worry if your mind wanders — return to the text."
  },
  {
    title: "Praying the Psalms",
    tradition: "Jewish / Ancient Christian / Broadly Christian",
    time: "10–30 minutes",
    color: "#10B981",
    steps: [
      { name: "Choose a Psalm", desc: "Use the Psalms in sequence (1, 2, 3...) or pick one that fits your current emotional state — lament, praise, confusion, joy." },
      { name: "Read it aloud", desc: "The Psalms were written to be spoken. Hear yourself say the words. Notice how they feel in your mouth." },
      { name: "Make it your own", desc: "Where the Psalmist says 'I,' speak it as your own. Where he cries out, cry out. Where he praises, praise. Don't just observe; participate." },
      { name: "Pray beyond it", desc: "When the Psalm is finished, continue praying. Use it as a launching pad into free conversation with God." }
    ],
    bestFor: "Everyone — especially those in emotional extremity (grief, joy, anger, fear)",
    tip: "Follow the Daily Office Psalm readings if you want to work through the whole Psalter. Most traditions complete it in 30 days."
  },
  {
    title: "Ignatian Contemplation",
    tradition: "Ignatian / Jesuit Spirituality",
    time: "30–60 minutes",
    color: "#F59E0B",
    steps: [
      { name: "Choose a Gospel narrative", desc: "Select a scene from the Gospels — the feeding of 5,000, Zacchaeus, the woman at the well, the Last Supper." },
      { name: "Enter the scene", desc: "Using your imagination, place yourself in the scene. What do you see? Hear? Smell? Where are you standing?" },
      { name: "Observe and interact", desc: "Watch what Jesus does and says. Allow yourself to respond — ask him questions, receive his gaze, listen for his words to you." },
      { name: "Reflect and respond", desc: "Come out of the scene. What did you encounter? What was Jesus like? What stirred in you? Journal or pray about it." }
    ],
    bestFor: "Those who learn through imagination and narrative; those who feel distant from Jesus personally",
    tip: "This is not Bible interpretation — it is devotional imagination. The point is encounter with the living Christ, who speaks through his recorded words and actions."
  },
  {
    title: "The Examen",
    tradition: "Ignatian / Catholic; widely adopted",
    time: "10–15 minutes",
    color: "#EF4444",
    steps: [
      { name: "Become aware of God's presence", desc: "Begin in silence. Acknowledge that you are in God's presence. Ask for the light of the Spirit to review the day." },
      { name: "Review the day with gratitude", desc: "Walk through the day hour by hour. Where did you receive grace? What gifts did you overlook? Give thanks specifically." },
      { name: "Review emotions and patterns", desc: "What consolations (movements toward God, life, love, peace) did you experience? What desolations (movements away — agitation, dullness, self-focus)?" },
      { name: "Choose one feature to pray about", desc: "Select one moment of the day — positive or negative — and bring it to God in prayer. Confess sin. Receive grace. Seek wisdom." },
      { name: "Look to tomorrow", desc: "Ask God for what you need tomorrow. Commit it to him. Rest." }
    ],
    bestFor: "Anyone wanting to integrate prayer with daily life; especially helpful for those in demanding vocations",
    tip: "Practiced every evening, the Examen prevents the 'Sunday Christian' compartment — it makes every day an occasion for spiritual attention."
  },
  {
    title: "Biblical Word Meditation (Rumination)",
    tradition: "Puritan / Reformed / Ancient",
    time: "5–30 minutes",
    color: "#3B82F6",
    steps: [
      { name: "Choose one verse or phrase", desc: "Select a specific text — one verse, one phrase. Don't try to cover too much ground." },
      { name: "Read it multiple ways", desc: "Stress different words each time: 'GOD so loved the world,' 'God SO loved the world,' 'God so loved THE WORLD.' Each emphasis opens new meaning." },
      { name: "Ask 7 questions", desc: "What does this say about God? About me? About Christ? What does it command? What does it promise? What does it warn? What does it invite?" },
      { name: "Return throughout the day", desc: "Write it on a card. Set it as a phone reminder. Return to it while driving, eating, walking. Let it sink deeper each time." }
    ],
    bestFor: "Memorizers; those with limited time; those who want Scripture to permeate the whole day",
    tip: "Thomas Watson's The Art of Divine Contentment and the Puritan writers are the finest guides to this tradition."
  },
  {
    title: "Centering Prayer (With Caution)",
    tradition: "Catholic Contemplative / Broadly Christian (debated)",
    time: "20 minutes",
    color: "#6B7280",
    steps: [
      { name: "Choose a sacred word", desc: "Select a word as a symbol of your consent to God's presence (e.g., Jesus, Love, Peace, Abba)." },
      { name: "Sit in silence", desc: "Silently introduce the sacred word. When thoughts arise, return gently to the word as a re-expression of consent to God." },
      { name: "At the end, remain in silence", desc: "Close with two minutes of silence. Then pray the Lord's Prayer or another established prayer." }
    ],
    bestFor: "Those drawn to contemplative rest; practiced carefully within Protestant theology",
    caution: "Centering Prayer (Basil Pennington, Thomas Keating) has been critiqued by Reformed theologians for its similarity to Eastern meditation techniques and its mystical framework. If practiced, it should be anchored in clear trinitarian theology, Scripture-saturated context, and accountability with a pastor or spiritual director.",
    tip: "The controversy is real. Read both proponents (Keating, Rohr) and critics (Challies, Dallas Willard's concerns) before adopting this practice."
  }
];

const psalmistVerses = [
  { ref: "Psalm 1:2", text: "His delight is in the law of the Lord, and on his law he meditates day and night.", theme: "Scripture Meditation" },
  { ref: "Psalm 19:14", text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.", theme: "Pleasing God" },
  { ref: "Psalm 63:6", text: "On my bed I remember you; I think of you through the watches of the night.", theme: "Night Meditation" },
  { ref: "Psalm 77:12", text: "I will consider all your works and meditate on all your mighty deeds.", theme: "God's Works" },
  { ref: "Psalm 119:15", text: "I meditate on your precepts and consider your ways.", theme: "The Law" },
  { ref: "Psalm 119:97", text: "Oh, how I love your law! I meditate on it all day long.", theme: "All-Day Meditation" },
  { ref: "Psalm 119:148", text: "My eyes stay open through the watches of the night, that I may meditate on your promises.", theme: "God's Promises" },
  { ref: "Philippians 4:8", text: "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — think about such things.", theme: "Renewing the Mind" }
];

const pitfalls = [
  {
    title: "Mind-Emptying vs. Mind-Filling",
    content: "The most common confusion: Christian meditation is not about emptying the mind but filling it. The Bible never commands mental silence as a goal — it commands meditating on God's word, works, and character. If a technique requires you to detach from content and achieve pure awareness, it is drawing from Eastern tradition, not Christian tradition.",
    verdict: "Watch: Does this practice lead me deeper into Scripture and relationship with the personal God of the Bible? If yes, good. If it leads to formless experience untethered from revealed truth, reorient."
  },
  {
    title: "Experience Becoming the Authority",
    content: "Mystical experience can become self-validating: 'I felt close to God, therefore this practice is good.' But Scripture warns against prophets who speak from their own imagination (Jeremiah 23:16) and against trust in the heart (Jeremiah 17:9). Experience is evidence but not authority. Test experiences by Scripture — particularly experiences that seem to deliver new revelation or lead away from gospel truth.",
    verdict: "Ask: Does this experience lead me to greater love for Christ as revealed in Scripture, or does it become an end in itself?"
  },
  {
    title: "Busyness as Avoidance",
    content: "The opposite pitfall: dismissing contemplative practice as mystical indulgence while never actually slowing down to meditate on Scripture. The Puritan John Owen wrote extensively on the necessity of meditation for mortifying sin — not as mysticism but as spiritual discipline. Many Christians are too busy to meditate and then wonder why they feel shallow.",
    verdict: "Schedule meditation. Start with five minutes. The Word does not transform through reading speed — it transforms through slow, attentive, repeated return."
  },
  {
    title: "Spiritual Director Dependency",
    content: "Some contemplative traditions emphasize spiritual direction as the necessary guide to meditative practice — creating a hierarchy of experience in which only the trained guide can navigate you into deeper states. Protestant theology grounds spiritual guidance in community, elders, and above all Scripture. A wise spiritual director can be a gift; becoming dependent on them for access to God is not.",
    verdict: "Spiritual direction is a resource, not a gate. The Holy Spirit, Scripture, and the community of believers are your primary guides."
  },
  {
    title: "Conflating Silence with Holiness",
    content: "Long hours of silence or elaborate contemplative retreat schedules are sometimes treated as inherently more spiritual than busy, active service. But the contemplative Martha was not more spiritual than the active Mary — both were called to their distinct obedience. Meditation fuels action; it is not a substitute for it. The monk in his cell and the nurse at the hospital bed can both live before God.",
    verdict: "Measure meditation by its fruit: greater love for God and neighbor, more Christlike character, deeper engagement with Scripture, more effective service. Not hours of silence per week."
  }
];

export default function ChristianMeditationPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_christian-meditation_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPractice, setSelectedPractice] = useState(practices[0]);

  const toggle = (k: string) => setExpanded(p => ({ ...p, [k]: !p[k] }));

  const [cmedEntries, setCmedEntries] = useState<{ id: string; date: string; passage: string; heard: string; response: string }[]>(() => {
    try { const s = localStorage.getItem("vine_cmed_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [cmedForm, setCmedForm] = useState({ passage: "", heard: "", response: "" });
  const [cmedSaved, setCmedSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_cmed_entries", JSON.stringify(cmedEntries)); }, [cmedEntries]);
  function saveCmedEntry() {
    if (!cmedForm.passage.trim()) return;
    setCmedEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...cmedForm }, ...prev]);
    setCmedForm({ passage: "", heard: "", response: "" });
    setCmedSaved(true); setTimeout(() => setCmedSaved(false), 2000);
  }
  function deleteCmedEntry(id: string) { setCmedEntries(prev => prev.filter(e => e.id !== id)); }

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Foundation" },
    { id: "practices", label: "Practices" },
    { id: "psalmist", label: "Psalmist's Example" },
    { id: "pitfalls", label: "Pitfalls & Discernment" },
    { id: "journal" as Tab, label: "📓 My Journal" },
    { id: "videos", label: "🎬 Videos" }
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: 80, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", padding: "4px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            CONTEMPLATIVE LIFE
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, margin: "0 0 12px" }}>
            Christian Meditation
          </h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto", lineHeight: 1.7 }}>
            Biblical meditation is ancient, commanded, and transformative — and it is entirely different from Eastern meditation. Learn the tradition, the practices, and the discernment needed to meditate well.
          </p>
        </div>

        {/* Banner */}
        <div style={{ background: PURPLE + "33", border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "14px 24px", marginBottom: 32, textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600 }}>
            "Be transformed by the renewing of your mind." — Romans 12:2 &nbsp;|&nbsp; "Meditate on it day and night." — Joshua 1:8
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                background: activeTab === t.id ? GREEN : CARD,
                color: activeTab === t.id ? "#000" : TEXT,
                border: `1px solid ${activeTab === t.id ? GREEN : BORDER}`,
                borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontWeight: 600, fontSize: 14
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {activeTab === "theology" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Before methods, we need foundations. Christian meditation is rooted in specific biblical texts and convictions — not borrowed from Eastern traditions or therapeutic psychology.
            </p>
            {theologyPoints.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`pt-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {pt.title}
                  <span style={{ color: MUTED }}>{expanded[`pt-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pt-${i}`] && (
                  <div style={{ padding: "0 20px 16px", color: MUTED, lineHeight: 1.7, fontSize: 14 }}>
                    {pt.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {activeTab === "practices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {practices.map(p => (
                  <div
                    key={p.title}
                    onClick={() => setSelectedPractice(p)}
                    style={{
                      background: selectedPractice.title === p.title ? p.color + "22" : CARD,
                      border: `2px solid ${selectedPractice.title === p.title ? p.color : BORDER}`,
                      borderRadius: 10, padding: 16, cursor: "pointer"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{p.title}</div>
                        <div style={{ fontSize: 12, color: MUTED }}>{p.tradition} · {p.time}</div>
                      </div>
                      {p.title === "Centering Prayer (With Caution)" && (
                        <div style={{ background: "#F59E0B22", border: "1px solid #F59E0B44", color: "#F59E0B", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4 }}>
                          DISCERNMENT NEEDED
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              width: 360, flexShrink: 0, background: CARD, border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: 24, position: "sticky", top: 20
            }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 800, color: selectedPractice.color }}>{selectedPractice.title}</h3>
              <div style={{ fontSize: 12, color: MUTED, marginBottom: 14 }}>{selectedPractice.tradition} · {selectedPractice.time}</div>
              {selectedPractice.steps.map((step, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: selectedPractice.color, marginBottom: 4 }}>{i + 1}. {step.name}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12, marginTop: 4 }}>
                <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 4 }}>BEST FOR</div>
                <p style={{ fontSize: 12, color: MUTED, margin: "0 0 10px", lineHeight: 1.4 }}>{selectedPractice.bestFor}</p>
                {selectedPractice.caution && (
                  <div style={{ background: "#F59E0B11", border: "1px solid #F59E0B33", borderRadius: 8, padding: 10, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, marginBottom: 4 }}>CAUTION</div>
                    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{selectedPractice.caution}</p>
                  </div>
                )}
                <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 4 }}>TIP</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{selectedPractice.tip}</p>
              </div>
            </div>
          </div>
        )}

        {/* Psalmist */}
        {activeTab === "psalmist" && (
          <div>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
              The Psalter is the church's meditation manual. These eight key verses establish biblical meditation as a commanded, joyful, all-day, word-centered practice.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
              {psalmistVerses.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: GREEN, marginBottom: 8 }}>{v.ref}</div>
                  <div style={{ fontSize: 11, color: PURPLE, fontWeight: 700, marginBottom: 10 }}>{v.theme.toUpperCase()}</div>
                  <p style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.6, color: TEXT, margin: 0 }}>
                    &ldquo;{v.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 28, maxWidth: 720 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 18 }}>A Simple Practice: Meditating on One Verse</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  "Read the verse slowly, 3 times",
                  "Ask: What does this reveal about God?",
                  "Ask: What does this ask of me?",
                  "Stress different words in each re-reading",
                  "Write one sentence of response in a journal",
                  "Return to it 3 times throughout the day"
                ].map((step, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 8, padding: "10px 14px", fontSize: 13, color: MUTED }}>
                    <span style={{ color: GREEN, fontWeight: 700, marginRight: 6 }}>{i + 1}.</span>{step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pitfalls */}
        {activeTab === "pitfalls" && (
          <div style={{ maxWidth: 720 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Christian meditation has genuine pitfalls — both the danger of importing non-Christian frameworks and the danger of dismissing the practice entirely. Discernment is required.
            </p>
            {pitfalls.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: 12 }}>
                <button type="button"
                  onClick={() => toggle(`pitfall-${i}`)}
                  style={{
                    width: "100%", background: "none", border: "none", color: TEXT,
                    padding: "16px 20px", textAlign: "left", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontWeight: 700, fontSize: 15
                  }}
                >
                  {p.title}
                  <span style={{ color: MUTED }}>{expanded[`pitfall-${i}`] ? "−" : "+"}</span>
                </button>
                {expanded[`pitfall-${i}`] && (
                  <div style={{ padding: "0 20px 16px" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginBottom: 12 }}>{p.content}</p>
                    <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}33`, borderRadius: 8, padding: 12 }}>
                      <span style={{ fontSize: 11, color: GREEN, fontWeight: 700 }}>DISCERNMENT: </span>
                      <span style={{ fontSize: 12, color: MUTED }}>{p.verdict}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === "journal" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>My Meditation Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Record your Scripture meditation sessions — what you heard, and how you responded to God.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28, marginBottom: 32 }}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Passage or Word Meditated On</label>
                <input value={cmedForm.passage} onChange={e => setCmedForm(f => ({ ...f, passage: e.target.value }))} placeholder="e.g. Psalm 23, John 15:5, 'I am the vine'..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>What Did You Hear From God?</label>
                <textarea value={cmedForm.heard} onChange={e => setCmedForm(f => ({ ...f, heard: e.target.value }))} placeholder="What truth, image, or word surfaced as you sat with this passage?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Your Response</label>
                <textarea value={cmedForm.response} onChange={e => setCmedForm(f => ({ ...f, response: e.target.value }))} placeholder="What did you pray, surrender, or commit as a result of this meditation?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveCmedEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                {cmedSaved ? "Saved!" : "Save Entry"}
              </button>
            </div>
            {cmedEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cmedEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div>
                        <div style={{ color: GREEN, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{e.passage}</div>
                        <div style={{ color: MUTED, fontSize: 11 }}>{e.date}</div>
                      </div>
                      <button type="button" onClick={() => deleteCmedEntry(e.id)} style={{ background: "transparent", border: `1px solid ${BORDER}`, borderRadius: 6, padding: "4px 10px", color: MUTED, fontSize: 11, cursor: "pointer" }}>Delete</button>
                    </div>
                    {e.heard && <div style={{ marginBottom: 10 }}><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>What I Heard</div><div style={{ color: TEXT, fontSize: 13 }}>{e.heard}</div></div>}
                    {e.response && <div><div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 3, textTransform: "uppercase" }}>My Response</div><div style={{ color: TEXT, fontSize: 13 }}>{e.response}</div></div>}
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
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "j9phNEaPrv8", title: "How to Meditate on a Verse (Philippians 3:1)", channel: "John Piper / Desiring God", description: "John Piper shows how to slow down and meditate on a single phrase of Scripture — a practical model of biblical meditation distinct from Eastern emptying." },
                  { videoId: "dy9nwe9zeU8", title: "Meditation on God's Word Made Simple", channel: "Christian Teaching", description: "A clear explanation of how biblical meditation differs from Eastern meditation, with practical steps for filling the mind with Scripture." },
                  { videoId: "iK0NjiBXKN4", title: "The Missing Link Between Bible and Prayer", channel: "Desiring God", description: "Why Bible meditation is the most important and misunderstood spiritual practice — and how it bridges Scripture reading and prayer in daily life." },
                  { videoId: "zMbUXpFiFeo", title: "Lectio Divina Explained: A Monk's Guide", channel: "Fr. Michael Casey OCSO", description: "A deep exploration of the ancient practice of sacred reading — the four movements of Lectio Divina as a way of hearing God through Scripture." },
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
