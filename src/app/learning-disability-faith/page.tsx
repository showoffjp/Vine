"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "God Made the Brain That Reads Differently",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made. Dyslexia, dyscalculia, ADHD, auditory processing disorder, and other learning differences are not malfunctions in an otherwise correct design — they are variations in the remarkable diversity of how God made human minds to process the world. The shame that attaches to learning differently is a cultural judgment, not a divine one.",
  },
  {
    title: "Intelligence and Worth Are Not the Same Thing",
    verse: "1 Corinthians 1:27",
    text: "But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong. Paul is not offering a consolation prize to people with learning disabilities. He is making a theological point about where God tends to work — not through the apparatus of cultural achievement and academic excellence, but often through what that apparatus overlooks and discards.",
  },
  {
    title: "The Body of Christ Has Different Parts",
    verse: "1 Corinthians 12:17-18",
    text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? But in fact God has placed the parts in the body, every one of them, just as he wanted them to be. The child who cannot read but can remember every face, every conversation, every emotional tenor in a room — is contributing something the reader cannot. The body needs all its parts.",
  },
  {
    title: "The Shame Is Not From God",
    verse: "Romans 8:1",
    text: "There is now no condemnation for those who are in Christ Jesus. The child who has been told they are stupid, slow, lazy, or not trying hard enough — or who told themselves this after years of struggling — has received a diagnosis that is false. Learning differences are neurodevelopmental realities, not moral failures. The condemnation is not from God. The one who made your mind does not condemn it.",
  },
  {
    title: "Faith Does Not Require a Particular Literacy",
    verse: "Romans 10:17",
    text: "Faith comes from hearing the message, and the message is heard through the word about Christ. The gospel has always been primarily oral — spoken, sung, embodied, enacted. It was passed by word of mouth for generations before it was read in scrolls or books. The person who cannot read can receive, practice, and transmit faith in the fullness of the biblical tradition. The written Bible is for the church; the living Word is for everyone.",
  },
];

const voices = [
  {
    id: 1,
    name: "Sally Shaywitz",
    role: "Neuroscientist, author Overcoming Dyslexia",
    quote: "Dyslexia is not a reading problem. It is a phonological processing difference. And the brain that has it often has strengths elsewhere that the reading-typical brain does not.",
    bio: "Sally Shaywitz is the world's leading researcher on dyslexia and its neurological basis, whose work has transformed how the condition is understood, diagnosed, and treated — and whose research has helped thousands of parents and teachers.",
  },
  {
    id: 2,
    name: "Thomas Armstrong",
    role: "Author, Neurodiversity in the Classroom",
    quote: "Every learning difference is also a learning potential. The question is not how to fix the brain but how to find the environment in which it thrives.",
    bio: "Thomas Armstrong has spent decades advocating for a neurodiversity framework that replaces deficit-based thinking about learning differences with a recognition of the genuine strengths that accompany them.",
  },
  {
    id: 3,
    name: "Jennie Allen",
    role: "Author, Get Out of Your Head; founder IF:Gathering",
    quote: "God uses broken things. Broken vessels. Broken people. Broken brains — whatever that means to you. The issue is not your wiring. It is whose hands you put it in.",
    bio: "Jennie Allen writes about mental struggle, identity, and the sufficiency of God's grace for minds that don't work the way the world expects them to.",
  },
  {
    id: 4,
    name: "Curt Thompson",
    role: "Psychiatrist, author Anatomy of the Soul",
    quote: "The shame about how the brain works often does more damage than the learning difference itself. Healing begins with being known — not despite the difference, but in it.",
    bio: "Curt Thompson integrates neuroscience and theology to explore how shame, identity, and the experience of being known by God and others operate at the level of brain and soul.",
  },
];

const practices = [
  {
    icon: "🔍",
    title: "Get a Comprehensive Educational Evaluation",
    text: "A full psycho-educational assessment identifies specific learning profiles — not just that there is difficulty but where the brain is strong and where it needs support. This information is foundational for getting appropriate accommodations in school, work, and testing contexts.",
  },
  {
    icon: "📢",
    title: "Advocate for Accommodations Without Shame",
    text: "Extra time on tests, text-to-speech technology, oral rather than written assessments, alternative assignment formats — these accommodations level the field without removing the challenge. They are appropriate, not cheating. Advocating for them is part of self-knowledge and self-care.",
  },
  {
    icon: "🎧",
    title: "Use Audio and Multi-Sensory Faith Resources",
    text: "Audio Bibles, sung Scripture, visual catechesis, embodied liturgy, and oral storytelling are all legitimate and historically central forms of Christian formation. For people who process differently, these are not lesser alternatives — they may be more effective and more fitting.",
  },
  {
    icon: "👩‍👧",
    title: "Tell Your Child They Are Not Broken",
    text: "The child who has been struggling in school for years without understanding why has almost certainly told themselves a story about being fundamentally defective. When the diagnosis comes, reframe it explicitly: your brain works differently, not worse. This reframe takes repetition to land.",
  },
  {
    icon: "🏫",
    title: "Find Educators Who Understand and Work With the Brain",
    text: "Orton-Gillingham trained reading tutors, occupational therapists who work with sensory processing, and special education advocates can make a transformational difference. The learning difference itself is rarely the limiting factor — the educational environment is.",
  },
  {
    icon: "⛪",
    title: "Seek Church Communities That Include Neurodiversity",
    text: "Some churches have explicitly designed their children's programs, small groups, and worship for neurodiversity — with sensory accommodations, alternative learning pathways, and leaders trained to welcome and include. These communities exist and are worth finding.",
  },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 1:27", text: "But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 10:17", text: "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ." },
  { verse: "1 Corinthians 12:18", text: "But in fact God has placed the parts in the body, every one of them, just as he wanted them to be." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type LDEntry = { id: string; date: string; hard: string; gift: string; prayer: string };

export default function LearningDisabilityFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LDEntry[]>([]);
  const [hard, setHard] = useState("");
  const [gift, setGift] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_learningdisabilityfaithj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const e: LDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard, gift, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_learningdisabilityfaithj_entries", JSON.stringify(next));
    setHard(""); setGift(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_learningdisabilityfaithj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Learning Disabilities & Faith</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For Christians with dyslexia, ADHD, auditory processing differences, and other learning disabilities — and for parents, educators, and churches walking alongside them.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.understood.org" style={{ color: "#fca5a5" }}>understood.org</a> · <a href="https://www.ldaamerica.org" style={{ color: "#fca5a5" }}>ldaamerica.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is hard about the way my brain works?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="The specific struggles, the shame, the exhaustion of compensating..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What gift comes with the way my brain works?</label>
                <textarea value={gift} onChange={e => setGift(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Creative thinking, spatial reasoning, empathy, whole-picture seeing..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For the shame to lift, for the gift to be seen, for the right environment..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your story is not what your report card says.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.hard && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What is hard</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.hard}</p></>}
                {e.gift && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>The gift</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.gift}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Neurodiversity and the Image of God</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological reflection on what it means that God made different kinds of minds — and what that implies for how the church should include and honor those who learn differently.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Neurodiversity and the Image of God" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Dyslexia — Understanding How the Brain Reads</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>The neuroscience of dyslexia and what it reveals about how different brains process language — and why this understanding changes everything for struggling readers.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Dyslexia Understanding How the Brain Reads" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Shame, Identity, and Learning Differences</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Curt Thompson on how shame attaches to cognitive difference and how being known — by God and by safe others — heals the wound that years of struggling in school can leave.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Shame Identity and Learning Differences" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Church and Neurodiversity</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>What it would take for churches to genuinely include and celebrate people with learning differences — in worship, in small groups, and in community.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="The Church and Neurodiversity" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
