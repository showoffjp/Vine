"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  {
    title: "Exodus 20:5 — What 'Visiting Iniquity' Actually Means",
    verse: "Exodus 20:5–6",
    body: "God declares he will 'visit the iniquity of the fathers upon the children to the third and fourth generation of those who hate me, but showing steadfast love to thousands of those who love me and keep my commandments.' This passage is widely misread as a divine decree of fatalism — a curse passed mechanically to descendants regardless of their choices. The Hebrew word for 'visit' (פָּקַד, paqad) is better translated as 'attend to' or 'deal with.' The passage is descriptive, not prescriptive: it acknowledges the natural consequence of sin, which inevitably affects those who come after. Crucially, it is paired with a contrast — the effects of sin reach three to four generations; the effects of covenant faithfulness reach thousands. God is not threatening descendants; he is naming a reality they already live in.",
  },
  {
    title: "Ezekiel 18 — Individual Accountability Reaffirmed",
    verse: "Ezekiel 18:2–4",
    body: "The exiles quoted a proverb: 'The fathers eat sour grapes, and the children's teeth are set on edge.' They were using generational theology as an excuse — blaming their fathers' sins for their own situation. God's sharp response through Ezekiel: 'As I live, declares the Lord GOD, this proverb shall no more be used by you in Israel. Behold, all souls are mine; the soul of the father as well as the soul of the son is mine: the soul who sins shall die.' Ezekiel 18 does not contradict Exodus 20 — it addresses a specific distortion of generational theology that removes personal responsibility. Both truths must be held together: inherited patterns are real, and personal accountability is also real. You did not choose the patterns you inherited — but you are responsible for what you do with them.",
  },
  {
    title: "2 Corinthians 5:17 — New Creation, Not No History",
    verse: "2 Corinthians 5:17",
    body: "'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.' This verse is sometimes used to short-circuit the work of understanding and healing generational patterns — 'You're a new creation, just move on.' But Paul does not say the new creation has no history; he says the old order of condemnation and alienation has been overturned. The healing of deep psychological and relational wounds shaped by generational patterns is not a failure of faith — it is the outworking of what God declared true. The new creation is the foundation for healing, not its substitute. Regeneration changes our standing before God immediately; it does not remove all the patterns of thought, relationship, and behavior formed over decades in a wounded family system. That transformation is a process — what theologians call sanctification.",
  },
  {
    title: "Romans 5:12–21 — The Pattern of Inheritance and the Pattern of Grace",
    verse: "Romans 5:18–19",
    body: "Paul uses the Adam/Christ typology to explain the mechanism of inherited condition: 'As one trespass led to condemnation for all men, so one act of righteousness leads to justification and life for all men.' Paul's argument in Romans 5 legitimizes the concept of inherited spiritual and moral condition at the deepest level — we are all born into a condition shaped by what came before us. But the same logic that explains the problem also explains the solution: just as a single representative act shaped the condition of all who followed, so the single representative act of Christ begins a new lineage of grace. In Christ, we are grafted into a new family system — one headed not by Adam but by the second Adam, whose patterns of faithfulness, love, and resurrection life are now available to us.",
  },
  {
    title: "Psalm 51 — Acknowledging the Depth of the Pattern",
    verse: "Psalm 51:5",
    body: "David's great penitential psalm includes an often-misunderstood line: 'Behold, I was brought forth in iniquity, and in sin did my mother conceive me.' David is not condemning his mother; he is acknowledging the depth of the pattern in which he was formed — that the tendency toward sin is not a surface defect but is woven into the fabric of his formation. This kind of honest acknowledgment — that my struggles are not just isolated choices but are connected to deep patterns formed over time and in relationship — is not fatalism; it is the beginning of genuine healing. You cannot address what you will not name. Psalm 51 gives permission to trace the pattern all the way down, precisely because David concludes with confidence in God's creative restoration: 'Create in me a clean heart, O God, and renew a right spirit within me.'",
  },
];

const VOICES = [
  {
    id: "langberg",
    name: "Diane Langberg",
    era: "1946–present",
    context: "Psychologist; trauma specialist; Missio Seminary faculty",
    bio: "Diane Langberg is one of the foremost Christian voices on trauma and its intersection with faith and the church. Over fifty years of clinical practice, she has worked with survivors of trauma including abuse, warfare, and systemic oppression. Her work consistently holds together the psychological reality of trauma's effects on the nervous system, attachment, and identity with deep theological conviction about the nature of human beings as image-bearers and the character of God as a healer.",
    quote: "Trauma is a wound to the soul. It alters how we think about ourselves, others, and God. Generational trauma is simply trauma that has not yet been named or addressed — it flows through families like water through cracks in stone, taking the shape of whatever container it enters. The work of healing is not undoing what happened but bringing the light of God's truth into the darkest rooms of our formation.",
    contribution: "Langberg gave the church a framework for understanding trauma as a theological and not merely psychological category — to be wounded is a human reality, and the God who took on flesh in Jesus Christ has entered fully into that reality. Her work challenges the church to be a community where trauma can be named, not avoided.",
  },
  {
    id: "allender",
    name: "Dan Allender",
    era: "1952–present",
    context: "Psychologist; founding president of The Seattle School; author of The Wounded Heart",
    bio: "Dan Allender's The Wounded Heart (1990) opened a conversation in the evangelical church about the deep psychological wounds carried by survivors of abuse and neglect — wounds often transmitted through family systems across generations. His framework of shame, contempt, and ambivalence — the internal responses to deep relational harm — gave Christians language for experiences that previously had none. His later work on story and redemptive narrative explores how healing involves not erasing painful history but learning to see it as part of a larger redemptive story.",
    quote: "We are all more shaped by our stories than we know — and our stories are shaped by the stories of those who came before us. The question is not whether you carry your family's wounds but whether you will bring them into the light where God can do his healing work. Avoidance is not neutrality; it is a decision to let the wounds keep writing the story.",
    contribution: "Allender legitimized the work of exploring painful personal and family history as an act of faith rather than a failure of faith, arguing that the Christian story is not one of denial but of redemption — which requires honestly naming what needs to be redeemed.",
  },
  {
    id: "vanderKolk",
    name: "Bessel van der Kolk",
    era: "1943–present",
    context: "Psychiatrist; professor; author of The Body Keeps the Score",
    bio: "Though not writing from an explicitly Christian perspective, van der Kolk's The Body Keeps the Score (2014) has been adopted widely by Christian therapists and pastoral counselors because of its clear documentation of how trauma is encoded in the body — in the nervous system, the immune system, and even epigenetically in ways that can affect subsequent generations. His work explains why talk therapy alone is often insufficient for trauma that was experienced pre-verbally or in the body — and why prayer, embodied practices, community, and somatic approaches matter.",
    quote: "Traumatized people chronically feel unsafe inside their bodies: The past is alive in the form of gnawing interior discomfort. Their bodies are constantly bombarded by visceral warning signs, and, in an attempt to control these processes, they often become experts at ignoring their gut feelings and numbing awareness of what is played out inside. They learn to hide from themselves.",
    contribution: "Van der Kolk provided the empirical evidence that trauma — including intergenerationally transmitted trauma — is biological and neurological, not merely psychological or behavioral. This evidence has helped Christians overcome the false dichotomy between 'spiritual' and 'medical' approaches to generational wounding.",
  },
  {
    id: "scazzero",
    name: "Peter Scazzero",
    era: "1956–present",
    context: "Pastor; author of Emotionally Healthy Spirituality",
    bio: "Scazzero's Emotionally Healthy Spirituality paradigm centers on the conviction that you cannot be spiritually mature while remaining emotionally immature — and that most emotional immaturity is shaped by family-of-origin wounds. His 'genogram work' — mapping the patterns of a family across generations — became a standard part of his spiritual formation framework, bringing therapeutic tools into the context of discipleship and spiritual direction.",
    quote: "The family you grew up in did not just shape your behavior and preferences — it shaped your image of God. If your father was absent, demanding, or unpredictable, your default emotional posture toward God will often mirror that, regardless of your theological convictions. The work of healing generational patterns is not therapy as an alternative to discipleship; it is discipleship going deep enough to reach the formation that happened before you had language for it.",
    contribution: "Scazzero brought the concept of family-of-origin work and genograms into mainstream evangelical discipleship, making a compelling case that ignoring these patterns produces Christians who are spiritually knowledgeable but emotionally stunted — and that the health of communities depends on leaders willing to do this deep personal work.",
  },
];

const PRACTICES = [
  {
    title: "Name the Pattern — Draw a Genogram",
    icon: "🗺️",
    color: PURPLE,
    desc: "A genogram is a family map across at least three generations that identifies recurring patterns — addiction, abuse, mental illness, divorce, estrangement, early death, trauma, faith crises. You cannot address what you cannot see. The genogram does not assign blame; it names reality.",
    steps: [
      "Draw three generations: grandparents, parents, yourself and siblings",
      "Note patterns: addiction, mental illness, abuse, relational ruptures, faith",
      "Identify the emotional climate of each household (shame-based? anxious? avoidant?)",
      "Ask: 'What pattern am I most afraid I am repeating?'",
      "Bring the map to a therapist, spiritual director, or trusted pastor",
    ],
  },
  {
    title: "Grieve What You Did Not Receive",
    icon: "💧",
    color: "#3B82F6",
    desc: "Much generational trauma work requires grief — not anger, not blame, but the genuine mourning of what a child needed and did not receive. This grief is not self-pity; it is a form of truthfulness. Unprocessed grief tends to become bitterness, numbness, or compulsive behavior.",
    steps: [
      "Write a letter to your child-self: 'What I needed and didn't get was…'",
      "Allow yourself to feel the sadness without immediately reaching for resolution",
      "Read Psalm 22 — Jesus's cry of desolation gives permission for full lament",
      "Share the grief with a trusted person; unwitnessed grief is harder to process",
      "Name what you are grieving as genuinely lost — it will not be recovered in this life",
    ],
  },
  {
    title: "Identify the False Beliefs You Inherited",
    icon: "🔍",
    color: "#F59E0B",
    desc: "Generational trauma transmits not just behaviors but beliefs — core convictions about one's worth, safety, and lovability that are formed before language and lodged in the implicit memory system. These show up as automatic reactions, chronic shame, persistent fear, or compulsive patterns.",
    steps: [
      "Notice your automatic reactions: What triggers shame? Fear? Rage? Shutdown?",
      "Trace the reaction back: 'When did I first feel this?' or 'Who in my family felt this?'",
      "Identify the underlying belief: 'I am not enough,' 'I am not safe,' 'I will be abandoned'",
      "Write the belief as a sentence and hold it against 1-2 specific gospel truths",
      "Work with a therapist to process the memory attached to the belief, not just the belief itself",
    ],
  },
  {
    title: "Receive Prayer Ministry for Family-Line Patterns",
    icon: "🙏",
    color: GREEN,
    desc: "Many Christian healing ministries (Restoring the Foundations, Sozo, Theophostic prayer ministry) include prayer for family-line patterns — asking God to break the spiritual dimension of inherited wounds, renounce agreements made under duress, and receive the truth of one's identity in Christ. This is not magic; it is partnering with the Spirit in the work of renewal.",
    steps: [
      "Find a trained healing prayer minister or Christian counselor who includes this work",
      "Come with specific family patterns you want to bring before God in prayer",
      "Be prepared to name and renounce false beliefs inherited from the family line",
      "Ask specifically for the truth about your identity as God's beloved child",
      "Follow prayer ministry with ongoing counseling and community — it is a door, not a destination",
    ],
  },
  {
    title: "Begin the New Pattern Now",
    icon: "🌱",
    color: "#10B981",
    desc: "Healing generational trauma is not only about the past — it is about what you pass forward. You are standing at a hinge point in your family history: you can receive and transmit the wound, or you can do the work that begins something new. This is an act of covenant faithfulness to the generations that follow you.",
    steps: [
      "Name one pattern you are determined to not transmit to the next generation",
      "Identify one specific practice that builds the opposite pattern",
      "Find accountability for the practice — change rarely happens alone",
      "Celebrate small victories: each time you choose differently is a hinge point",
      "Pray: 'Lord, let the new pattern go forward to a thousand generations'",
    ],
  },
];

const SCRIPTURE = [
  { verse: "Exodus 20:5–6", text: "For I the LORD your God am a jealous God, visiting the iniquity of the fathers on the children to the third and the fourth generation of those who hate me, but showing steadfast love to thousands of those who love me and keep my commandments." },
  { verse: "Ezekiel 18:20", text: "The soul who sins shall die. The son shall not suffer for the iniquity of the father, nor the father suffer for the iniquity of the son. The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself." },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come." },
  { verse: "Romans 8:15", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, 'Abba! Father!'" },
  { verse: "Lamentations 5:7", text: "Our fathers sinned, and are no more; and we bear their iniquities." },
  { verse: "Psalm 51:10", text: "Create in me a clean heart, O God, and renew a right spirit within me." },
  { verse: "Joel 2:25", text: "I will restore to you the years that the swarming locust has eaten, the hopper, the destroyer, and the cutter, my great army, which I sent among you." },
  { verse: "Isaiah 61:3–4", text: "To grant to those who mourn in Zion — to give them a beautiful headdress instead of ashes, the oil of gladness instead of mourning, the garment of praise instead of a faint spirit… They shall build up the ancient ruins; they shall raise up the former devastations; they shall repair the ruined cities." },
];

const VIDEOS = [
  { id: "pRPGfFLvdEE", title: "How to Heal Generational Trauma — Dr. Bessel van der Kolk" },
  { id: "9WR2UYOSGKE", title: "Breaking Generational Curses — Francis Chan" },
  { id: "p7HrMQgEHVo", title: "Family of Origin — Pete Scazzero" },
  { id: "ITrqmM3N4jE", title: "Diane Langberg — Trauma, Power, and the Church" },
];

const RESOURCES = [
  { title: "The Body Keeps the Score", author: "Bessel van der Kolk", type: "Book", desc: "Comprehensive scientific account of how trauma is stored in the body and transmits across relationships and generations. The secular book most recommended by Christian trauma counselors." },
  { title: "The Wounded Heart", author: "Dan Allender", type: "Book", desc: "A Christian therapist's landmark work on abuse, shame, and the patterns that form in response to childhood relational harm. Rich biblical integration." },
  { title: "Suffering and the Heart of God", author: "Diane Langberg", type: "Book", desc: "Theological and clinical wisdom from one of the world's leading Christian trauma specialists. Essential for understanding how God's character speaks to human suffering." },
  { title: "Emotionally Healthy Spirituality", author: "Peter Scazzero", type: "Book", desc: "Practical guide to integrating emotional and spiritual health, including family-of-origin genogram work as a spiritual discipline." },
  { title: "Restoring the Foundations Ministry", author: "Bill & Sue Banks", type: "Ministry", desc: "Christian healing prayer ministry that specifically addresses generational patterns and ancestral wounds through Scripture, prayer, and inner healing." },
  { title: "AACC Therapist Directory", author: "American Assn of Christian Counselors", type: "Directory", desc: "Find a licensed Christian therapist trained in trauma-informed care. Filter by specialization including family-of-origin and generational trauma.", url: "https://www.aacc.net/resources/find-a-counselor/" },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos" | "resources";

export default function GenerationalTraumaPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_gentrauma_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_gentrauma_voice", "langberg");
  const voice = VOICES.find(v => v.id === selectedVoice) ?? VOICES[0];

  type JournalEntry = { id: string; date: string; pattern: string; belief: string; truth: string };
  const [journal, setJournal] = useState<JournalEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_gentrauma_journal") ?? "[]"); } catch { return []; }
  });
  const [jPattern, setJPattern] = useState("");
  const [jBelief, setJBelief] = useState("");
  const [jTruth, setJTruth] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_gentrauma_journal", JSON.stringify(journal)); } catch {}
  }, [journal]);

  function saveEntry() {
    if (!jPattern.trim() && !jBelief.trim()) return;
    setJournal(prev => [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), pattern: jPattern, belief: jBelief, truth: jTruth },
      ...prev,
    ]);
    setJPattern(""); setJBelief(""); setJTruth("");
  }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" },
    { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" },
    { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" },
    { id: "videos", label: "▶️ Videos" },
    { id: "resources", label: "📚 Resources" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    fontSize: 14,
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    display: "block",
    marginBottom: 6,
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <div style={{ background: "linear-gradient(180deg, rgba(107,79,187,0.06) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🌿</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            Generational Trauma & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.75 }}>
            Family wounds travel through time. Scripture names this reality honestly — and points to a healing that can change what you pass forward.
          </p>

          {/* Crisis banner */}
          <div style={{ maxWidth: 620, margin: "24px auto 0", padding: "12px 16px", background: "rgba(58,125,86,0.06)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 12, fontSize: 13, color: MUTED }}>
            🙏 If you are dealing with active trauma, abuse, or mental health crises, please connect with a professional.{" "}
            <a href="https://www.aacc.net/resources/find-a-counselor/" target="_blank" rel="noopener noreferrer" style={{ color: GREEN, textDecoration: "underline" }}>Find a Christian counselor</a>{" "}
            or call <strong style={{ color: TEXT }}>988</strong> (Suicide & Crisis Lifeline).
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto", gap: 0 }}>
            {TABS.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                style={{
                  padding: "16px 18px",
                  fontSize: 13,
                  fontWeight: 700,
                  background: "transparent",
                  border: "none",
                  borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                  color: tab === t.id ? GREEN : MUTED,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>

          {/* THEOLOGY */}
          {tab === "theology" && (
            <div style={{ display: "grid", gap: 20 }}>
              {THEOLOGY.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 22, lineHeight: 1 }}>📜</span>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0 }}>{t.title}</h3>
                      <span style={{ fontSize: 12, fontWeight: 700, color: GREEN, marginTop: 4, display: "block" }}>{t.verse}</span>
                    </div>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
                </div>
              ))}

              {/* Theological summary */}
              <div style={{ background: `rgba(107,79,187,0.06)`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: 28 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 12 }}>Holding the Tension</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: "0 0 12px" }}>
                  Scripture holds two truths in tension that shallow Christianity often collapses: <strong style={{ color: TEXT }}>inherited patterns are real</strong> (Exodus 20:5, Lamentations 5:7, Romans 5) and <strong style={{ color: TEXT }}>personal responsibility is also real</strong> (Ezekiel 18, 2 Corinthians 5:17). You did not choose the family you were born into, the wounds you received before you had language for them, or the beliefs that were formed in you before you could evaluate them. But you are not helpless — you are invited into a process of healing that the Spirit initiates and sustains.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, fontSize: 15, margin: 0 }}>
                  The gospel&apos;s answer to generational trauma is not denial (&quot;just pray harder and move on&quot;) or fatalism (&quot;you are your family&quot;) but <strong style={{ color: GREEN }}>redemptive transformation</strong> — the patient, Spirit-led work of naming what was, grieving what was lost, and receiving what is now available in Christ.
                </p>
              </div>
            </div>
          )}

          {/* VOICES */}
          {tab === "voices" && (
            <div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                {VOICES.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVoice(v.id)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 700,
                      border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`,
                      background: selectedVoice === v.id ? `rgba(58,125,86,0.12)` : "transparent",
                      color: selectedVoice === v.id ? GREEN : MUTED,
                      cursor: "pointer",
                    }}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 32 }}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: TEXT, margin: "0 0 4px" }}>{voice.name}</h2>
                  <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, margin: "0 0 4px" }}>{voice.era}</p>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{voice.context}</p>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
                <blockquote style={{ margin: "0 0 20px", padding: "16px 20px", background: `rgba(107,79,187,0.06)`, borderLeft: `4px solid ${PURPLE}`, borderRadius: "0 12px 12px 0" }}>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: 15 }}>&ldquo;{voice.quote}&rdquo;</p>
                </blockquote>
                <div style={{ background: `rgba(58,125,86,0.05)`, border: `1px solid rgba(58,125,86,0.15)`, borderRadius: 12, padding: "16px 20px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Key Contribution</p>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          )}

          {/* PRACTICES */}
          {tab === "practices" && (
            <div style={{ display: "grid", gap: 20 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, background: `${p.color}12`, flexShrink: 0 }}>
                      {p.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                      <p style={{ fontSize: 14, color: MUTED, margin: "6px 0 0", lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 20px", display: "grid", gap: 8 }}>
                    {p.steps.map((s, j) => (
                      <li key={j} style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>
                        <span style={{ color: p.color, fontWeight: 700 }}>→</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* SCRIPTURE */}
          {tab === "scripture" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {SCRIPTURE.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 800, color: GREEN, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{s.verse}</p>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: 15, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
                </div>
              ))}
            </div>
          )}

          {/* JOURNAL */}
          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 6 }}>Reflection Journal</h3>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                  Use this space to name what you&apos;re carrying, where it came from, and the truth God offers in exchange.
                </p>
                <div style={{ display: "grid", gap: 14 }}>
                  <div>
                    <label style={labelStyle}>A pattern I notice in my family or myself</label>
                    <textarea
                      rows={3}
                      value={jPattern}
                      onChange={e => setJPattern(e.target.value)}
                      placeholder="e.g. 'Emotional distance — no one in my family talked about feelings…'"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>A belief I may have inherited from this pattern</label>
                    <textarea
                      rows={3}
                      value={jBelief}
                      onChange={e => setJBelief(e.target.value)}
                      placeholder="e.g. 'I believe I need to hide my struggles to be loved…'"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>A truth from Scripture or the gospel that speaks to this</label>
                    <textarea
                      rows={3}
                      value={jTruth}
                      onChange={e => setJTruth(e.target.value)}
                      placeholder="e.g. 'Romans 8:15 — I have not received a spirit of slavery but adoption as a son…'"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={saveEntry}
                    style={{ padding: "12px 24px", background: GREEN, color: "#000", borderRadius: 12, fontWeight: 800, fontSize: 14, border: "none", cursor: "pointer", alignSelf: "flex-start" }}
                  >
                    Save Reflection
                  </button>
                </div>
              </div>

              {journal.length > 0 && (
                <div style={{ display: "grid", gap: 14 }}>
                  {journal.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20 }}>
                      <p style={{ fontSize: 11, color: MUTED, marginBottom: 12 }}>{entry.date}</p>
                      {entry.pattern && (
                        <div style={{ marginBottom: 10 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Pattern</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{entry.pattern}</p>
                        </div>
                      )}
                      {entry.belief && (
                        <div style={{ marginBottom: 10 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Inherited Belief</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{entry.belief}</p>
                        </div>
                      )}
                      {entry.truth && (
                        <div>
                          <p style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Gospel Truth</p>
                          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{entry.truth}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIDEOS */}
          {tab === "videos" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
              {VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, margin: 0, lineHeight: 1.4 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RESOURCES */}
          {tab === "resources" && (
            <div style={{ display: "grid", gap: 16 }}>
              {RESOURCES.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `rgba(58,125,86,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    {r.type === "Book" ? "📖" : r.type === "Ministry" ? "🙏" : "🔍"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 800, color: TEXT, margin: 0 }}>{r.title}</h3>
                      <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, padding: "2px 8px", borderRadius: 999, background: "rgba(58,125,86,0.1)" }}>{r.type}</span>
                    </div>
                    <p style={{ fontSize: 13, color: GREEN, fontWeight: 600, margin: "0 0 6px" }}>{r.author}</p>
                    <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                    {r.url && (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 10, fontSize: 13, fontWeight: 700, color: GREEN, textDecoration: "underline" }}>
                        Visit Resource →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
