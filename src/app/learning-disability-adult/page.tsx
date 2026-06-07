"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Made This Mind",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. The mind that processes differently — whether through dyslexia, ADHD, dyscalculia, processing differences, or other learning variations — is a mind made by God. It is not a defective version of a standard mind. It is a specific mind, made with specific gifts that standard minds often cannot access.",
  },
  {
    title: "Strength Made Perfect in Weakness",
    verse: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Weakness is the location where God's power becomes most visible. Many adults with learning disabilities have developed extraordinary strengths — creativity, pattern recognition, spatial intelligence, empathy, persistence — precisely because of how they were made. These are not compensations; they are gifts.",
  },
  {
    title: "Different Gifts in the Body",
    verse: "1 Corinthians 12:17–18",
    text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be. The body of Christ is not built for uniform cognitive processing. It is built for diversity. Your brain is a necessary part of the body.",
  },
  {
    title: "Jesus Used Concrete, Embodied Teaching",
    verse: "Mark 4:2",
    text: "He taught them many things by parables. Jesus did not teach through dense theological abstraction. He used stories, images, physical objects, and lived experience to communicate truth. His primary teaching method favors many minds that standard academic formats disadvantage. You are not on the outside of how Jesus communicated — you may be closer to the inside.",
  },
  {
    title: "Shame Has No Authority Over You",
    verse: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus. The shame that comes with learning differences — from years of struggling in classrooms designed for different minds, of being told you are lazy, stupid, or not trying hard enough — has no theological authority. It is a lie. You are not condemned by the way your brain works.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Sally Shaywitz",
    role: "Neuroscientist, Yale Center for Dyslexia & Creativity",
    quote: "Dyslexia is a paradox of the mind — it impairs one specific aspect of reading while leaving intact and often heightened other reasoning and thinking skills. The same brain organization that makes reading hard makes other things remarkable.",
    bio: "Sally Shaywitz (Overcoming Dyslexia) is the leading researcher on dyslexia and has documented both the neural basis of reading difficulties and the exceptional strengths — creative, holistic, narrative — that often accompany dyslexic minds. Her work reframes learning disability as a different brain architecture with specific strengths.",
  },
  {
    id: "v2",
    name: "Ed Hallowell",
    role: "Psychiatrist, ADHD specialist, author",
    quote: "ADHD is like having a Ferrari engine with bicycle brakes. The problem is not the engine. The problem is that our world was designed for bicycles. With the right environment and support, the Ferrari becomes an asset, not a liability.",
    bio: "Ed Hallowell (Driven to Distraction, ADHD and the Permission to Proceed) has ADHD himself and has spent decades helping adults understand it as a neurological difference with significant strengths — creativity, enthusiasm, hyperfocus, connection — that become liabilities only in environments designed for neurotypical processing.",
  },
  {
    id: "v3",
    name: "Jennie Allen",
    role: "Author, founder of IF:Gathering",
    quote: "I spent years feeling like I was not smart enough to lead, not fast enough to keep up, not put-together enough to be taken seriously. Learning that my brain worked differently — not wrongly — was a turning point. I stopped trying to perform the mind I did not have and started using the one I did.",
    bio: "Jennie Allen (Get Out of Your Head, Made for This) has spoken about her learning differences and the shame she carried in Christian leadership spaces before understanding her own brain. Her perspective helps Christian adults with learning differences understand that their minds are not obstacles to calling — they may be the shape of it.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "Shame is the most primitive and devastating human emotion. For adults who were repeatedly told their mind was defective, shame becomes woven into identity. The healing begins when someone sees the person behind the difficulty — and reflects back that the person is good, not broken.",
    bio: "Curt Thompson (The Soul of Shame, Anatomy of the Soul) integrates interpersonal neurobiology with Christian theology. His framework for shame is essential for adults whose learning differences were identified (or missed) in ways that installed a narrative of defectiveness — and who need that narrative interrupted by a truer one.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Get a Comprehensive Adult Evaluation",
    text: "Many adults were never diagnosed, or were diagnosed with outdated tools, or carry a diagnosis that did not fully capture their profile. Adult neuropsychological evaluation identifies your specific profile — what is harder and what is easier — and produces recommendations for accommodations and strategies that actually fit your brain.",
  },
  {
    icon: "📚",
    title: "Find Your Strengths Through Formal Assessment",
    text: "Learning disability evaluations include both deficit and strength profiles. Ask your evaluator to explain your strengths explicitly: spatial reasoning, verbal memory, creative thinking, big-picture processing. Understanding what your brain does well reframes the whole narrative.",
  },
  {
    icon: "🖥️",
    title: "Use Assistive Technology Fully",
    text: "Text-to-speech (Natural Reader, Speechify), speech-to-text (Dragon, Apple dictation), mind-mapping software (MindMeister), audio Bible apps — these are not cheating. They are accommodations that allow your actual intelligence to function without the bottleneck of the specific processing difficulty. Use them without apology.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church for Accommodations",
    text: "Many church environments — dense sermon text, complex printed materials, rapid verbal instruction — disadvantage certain learners. Sermon audio downloads, simplified study guides, visual teaching aids, one-on-one explanation opportunities — ask for these. You are entitled to access the teaching of your community in a form that works for your brain.",
  },
  {
    icon: "💬",
    title: "Name the Shame Without Judgment",
    text: "The shame of struggling to read, of forgetting conversations, of being the last to understand — this shame is not information about your worth. It is information about how painful it was to have a mind that was not accommodated. Name it to a therapist or trusted person. Named shame begins to lose its authority.",
  },
  {
    icon: "🌟",
    title: "Identify Your Neurological Gifts",
    text: "Many adults with dyslexia have exceptional 3D visualization (common in architects, surgeons, engineers). Many with ADHD have hyperfocus, creativity, and entrepreneurial thinking. Many with processing differences have heightened empathy and interpersonal sensitivity. Identify yours specifically. They are not consolation prizes — they are capabilities.",
  },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:17–18", text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'" },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Exodus 4:11", text: "The LORD said to him, 'Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the LORD?'" },
  { verse: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations." },
];

type LDEntry = { id: string; date: string; strength: string; shame: string; ask: string };

export default function LearningDisabilityAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LDEntry[]>([]);
  const [strength, setStrength] = useState("");
  const [shame, setShame] = useState("");
  const [ask, setAsk] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_learningdisabilityj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!strength.trim()) return;
    const entry: LDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      strength,
      shame,
      ask,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_learningdisabilityj_entries", JSON.stringify(updated));
    setStrength(""); setShame(""); setAsk("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_learningdisabilityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>Neurodiversity & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Learning Differences as an Adult Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For adults with dyslexia, ADHD, processing differences, or other learning variations — carrying shame from years of misunderstanding, navigating a church culture built for standard learners, and discovering that your mind is not broken. It is differently made.
        </p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>Resources</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline &nbsp;·&nbsp; Yale Center for Dyslexia & Creativity: <span style={{ color: GREEN }}>dyslexia.yale.edu</span> &nbsp;·&nbsp; CHADD (ADHD): <span style={{ color: GREEN }}>chadd.org</span>
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
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What strength does your different mind bring that others often lack?</label>
                <textarea value={strength} onChange={(e) => setStrength(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What shame about your brain have you carried that needs to be named?</label>
                <textarea value={shame} onChange={(e) => setShame(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>One accommodation or support you could ask for this week.</label>
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
                {e.strength && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Strength:</strong> {e.strength}</p>}
                {e.shame && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Shame:</strong> {e.shame}</p>}
                {e.ask && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Ask:</strong> {e.ask}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "j2h-q3ZPKFI", title: "Neurodiversity and the Image of God", channel: "Joni and Friends", description: "Joni and Friends on cognitive and learning diversity as part of God's design — the theological case for understanding different minds as image-bearers rather than impaired versions of standard minds." },
              { videoId: "NnGBhG03g4M", title: "ADHD as a Different Brain Architecture", channel: "Ed Hallowell", description: "Dr. Ed Hallowell on ADHD as a neurological difference with significant strengths — creativity, hyperfocus, entrepreneurial thinking — that become liabilities only in the wrong environment." },
              { videoId: "mC-zw0zCCtg", title: "Shame and Learning Differences", channel: "Curt Thompson", description: "Thompson on how shame becomes woven into identity for those whose minds were misunderstood — and how the narrative of defectiveness can be interrupted by someone who sees you clearly." },
              { videoId: "4yRlBMcNNjY", title: "Made in the Image of God: All Minds", channel: "N.T. Wright", description: "Wright on the full range of human minds as image-bearers — the theological foundation for neurodiversity and the affirmation that differently-made minds are not lesser minds." },
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
  );
}
