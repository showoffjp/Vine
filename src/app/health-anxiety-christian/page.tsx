"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Your Body Is Real, Not Betraying You",
    verse: "Psalm 139:14",
    text: "\"I praise you, for I am fearfully and wonderfully made.\" God created your nervous system — including the parts that misfire into health anxiety. This is not a character flaw, a lack of faith, or punishment. It is a brain that learned to protect you through hypervigilance, now stuck in overdrive. Your body is not your enemy and you are not spiritually defective for struggling with it."
  },
  {
    title: "Worry and Sin — A Careful Distinction",
    verse: "Matthew 6:25-27",
    text: "Jesus says do not worry, but he never condemns those who struggle with anxiety as unrepentant sinners. Health anxiety is not willful disobedience — it is an anxiety disorder that grips you despite your desire to trust. The distinction matters enormously: fighting a disorder requires treatment, not more willpower. God's compassion meets you in your neurological reality, not beyond it."
  },
  {
    title: "The Trap of Reassurance Seeking",
    verse: "Proverbs 3:5-6",
    text: "\"Trust in the Lord with all your heart and do not lean on your own understanding.\" Reassurance — from doctors, Google, loved ones — feels like the answer but feeds health anxiety's appetite. Every reassurance provides momentary relief and then requires more. True trust means learning to sit with uncertainty, the very thing health anxiety makes unbearable. This is one of the most spiritual disciplines imaginable."
  },
  {
    title: "God Is Present in the Medical Office Too",
    verse: "Psalm 46:1",
    text: "\"God is our refuge and strength, a very present help in trouble.\" Appropriate medical care is not the opposite of faith — it is wisdom. Health anxiety distorts the signal: everything feels like an emergency, nothing feels safe. Faith does not require you to avoid doctors; it asks that you receive appropriate care without it becoming an addiction to reassurance. God is present in honest medicine and honest uncertainty alike."
  },
  {
    title: "The Gospel for the Body That Will Die",
    verse: "Romans 8:23",
    text: "\"We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies.\" Health anxiety often masks a deep terror of death — one every human shares. The gospel does not erase death; it swallows it. Christ rose bodily. Your body will die and will be raised. The fear health anxiety feeds on has already been answered. You can grieve the fragility of the body and still have hope."
  }
];

const voices = [
  {
    id: "v1", name: "Jonathan Abramowitz", role: "Psychologist, OCD and Health Anxiety Researcher",
    quote: "Health anxiety exists on a continuum with OCD. It is not about being a hypochondriac — it is about a brain that assigns catastrophic meaning to normal bodily sensations.",
    bio: "Dr. Abramowitz is a leading researcher on OCD-spectrum disorders including health anxiety. His work on ERP therapy has helped thousands understand the reassurance-seeking trap and break free through exposure and response prevention."
  },
  {
    id: "v2", name: "Kimberley Quinlan", role: "LMFT, OCD and Anxiety Specialist",
    quote: "The goal is not to get certainty. The goal is to build a life that is bigger than the anxiety — to act from your values even when the fear is screaming.",
    bio: "Kimberley Quinlan specializes in OCD and health anxiety treatment using ACT and ERP. Her podcast and resources have helped thousands of Christians and non-Christians understand that recovery is possible without eliminating uncertainty."
  },
  {
    id: "v3", name: "Curt Thompson", role: "Psychiatrist, Christian Author",
    quote: "Shame is the soil in which anxiety grows. When we believe we are defective, the body becomes a battleground — and health anxiety is one way that war gets fought.",
    bio: "Dr. Curt Thompson integrates neuroscience and Christian theology in his work. His books 'Anatomy of the Soul' and 'The Soul of Shame' speak to how relational attunement and secure attachment shape our capacity to tolerate uncertainty — including about our health."
  },
  {
    id: "v4", name: "Ed Welch", role: "Counselor, CCEF Faculty",
    quote: "Fear of death is the engine under the hood of health anxiety. The gospel speaks directly to that engine — not by removing the fear but by giving us something larger to live toward.",
    bio: "Ed Welch has counseled and written extensively about anxiety from a Reformed perspective. His book 'Running Scared' addresses the deep theological roots of fear and anxiety, with pastoral compassion for those who struggle chronically."
  }
];

const practices = [
  {
    icon: "🧠",
    title: "Get a Proper Assessment",
    text: "Health anxiety (sometimes called illness anxiety disorder or somatic symptom disorder) responds well to treatment. A therapist trained in CBT, ACT, or ERP can assess what's happening and build a treatment plan. This is not a faith failure — it is stewardship of the mind God gave you."
  },
  {
    icon: "🚫",
    title: "Reduce Reassurance Seeking",
    text: "Every time you Google a symptom, ask someone to confirm you're okay, or return to the doctor unnecessarily, you reinforce the anxiety cycle. Exposure and response prevention means sitting with uncertainty without seeking reassurance. It is agonizing and it works."
  },
  {
    icon: "📵",
    title: "Create a Symptom-Checking Protocol",
    text: "With your therapist or doctor, create clear rules: how often you may check a symptom, when a doctor visit is genuinely warranted, and what 'body checking' behaviors to stop (repeated touching of lumps, taking pulse compulsively). Clarity reduces decision fatigue and anxiety."
  },
  {
    icon: "✝️",
    title: "Theological Engagement with Mortality",
    text: "Health anxiety is often a death-phobia in disguise. Reading Christians who have engaged death honestly — Ars Moriendi literature, writings of Puritan pastors on dying well, Kate Bowler on terminal illness — can help integrate mortality rather than flee from it."
  },
  {
    icon: "📿",
    title: "Mindfulness Without Reassurance",
    text: "Mindfulness practices teach you to notice bodily sensations without interpreting them catastrophically. The goal is not to eliminate awareness but to change your relationship to it — noticing without storytelling, feeling without catastrophizing."
  },
  {
    icon: "🫂",
    title: "Tell One Trusted Person",
    text: "Health anxiety thrives in shame and secrecy. Naming it to a trusted friend, pastor, or spouse who understands anxiety (not one who will simply reassure you) breaks its hold. You are not uniquely broken — millions of people, including many Christians, live with this."
  }
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { verse: "Matthew 6:27", text: "And which of you by being anxious can add a single hour to his span of life?" },
  { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths." },
  { verse: "Romans 8:23", text: "And not only the creation, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for adoption as sons, the redemption of our bodies." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble." },
  { verse: "1 Corinthians 15:54-55", text: "When the perishable puts on the imperishable, and the mortal puts on immortality, then shall come to pass the saying: 'Death is swallowed up in victory. O death, where is your victory? O death, where is your sting?'" }
];

type HaEntry = { id: string; date: string; symptom: string; response: string; truth: string };

export default function HealthAnxietyChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<HaEntry[]>([]);
  const [symptom, setSymptom] = useState("");
  const [response, setResponse] = useState("");
  const [truth, setTruth] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_healthanxietychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!symptom.trim()) return;
    const entry: HaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), symptom, response, truth };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_healthanxietychristj_entries", JSON.stringify(updated));
    setSymptom(""); setResponse(""); setTruth("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_healthanxietychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🩺</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Health Anxiety &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When every symptom becomes a catastrophe, when Google becomes a tormentor, when your body feels like a ticking clock — and you are trying to trust God through all of it.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis & Support:</strong> 988 Suicide &amp; Crisis Lifeline (call/text 988) &bull; IOCDF: iocdf.org &bull; Anxiety &amp; Depression Association: adaa.org &bull; Crisis Text Line: text HOME to 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Anxiety Reflection Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What symptom or fear is consuming me today?</label>
                  <textarea value={symptom} onChange={e => setSymptom(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What was my anxiety response? (checking, Googling, seeking reassurance)</label>
                  <textarea value={response} onChange={e => setResponse(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What truth can I hold, even without certainty?</label>
                  <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.symptom && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Fear:</strong> {e.symptom}</p>}
                {e.response && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Response:</strong> {e.response}</p>}
                {e.truth && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Truth:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Understanding Health Anxiety (OCD Spectrum)</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jonathan Abramowitz explains the OCD-health anxiety connection and why reassurance makes it worse</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Understanding Health Anxiety" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>ERP for Health Anxiety</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Exposure and response prevention therapy explained for breaking the reassurance cycle</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="ERP for Health Anxiety" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Anxiety and the Christian Life</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on shame, fear, and the neuroscience of Christian anxiety</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Anxiety and the Christian Life" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Fear of Death and the Gospel</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Ed Welch on running scared and the deep fear that drives anxiety about the body</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Fear of Death and the Gospel" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
