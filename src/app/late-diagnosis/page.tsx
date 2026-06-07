"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Knit You Exactly as You Are", verse: "Psalm 139:13-16", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made. The same Psalm that speaks of God forming us in the womb also names that our days were ordained before one of them came to be. A late diagnosis of autism, ADHD, or another neurological difference does not reveal a mistake in your design — it reveals that the label caught up to a reality God has always known and held." },
  { title: "Imago Dei Is Neurologically Inclusive", verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them. The image of God was not stamped on one neurotype. The astonishing diversity of human minds — different patterns of attention, processing, sensory experience, and social engagement — all bear the image of the Creator who transcends any single pattern. There is no neurotypical version of imago Dei against which others are measured as deficient." },
  { title: "The Mind Differently Made Sees Differently", verse: "1 Corinthians 12:17", text: "If the whole body were an eye, where would the sense of hearing be? If the whole body were an ear, where would the sense of smell be? Paul's body theology directly addresses the value of different capacities. A community where everyone thinks and perceives identically is not a rich community — it is an impoverished one. The gifts that come with neurodivergent minds — pattern recognition, deep focus, creative connection-making, honest bluntness — are not in spite of difference but through it." },
  { title: "A Late Diagnosis Can Be a Gift of Clarity", verse: "John 8:32", text: "Then you will know the truth, and the truth will set you free. A diagnosis at 30, 40, or 60 does not change who you have been — it clarifies it. It gives language to experiences that were real but unnamed. The freedom that comes from finally understanding why you have struggled, why relationships have been hard, why certain environments have exhausted you — that is the freedom of truth. Grief and relief can coexist." },
  { title: "Accommodation Is Not Weakness", verse: "2 Corinthians 12:9-10", text: "My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses. Paul learned to work with his limitations rather than simply willing them away. Seeking accommodations — quieter environments, written rather than verbal communication, flexible structures, noise-canceling headphones — is not a failure of faith. It is wisdom about the body and mind God gave you." },
];

const voices = [
  { id: "v1", name: "Curt Thompson, MD", role: "Psychiatrist, Author", quote: "The brain that God designed is not a liability. Understanding how yours works is an act of stewardship, not of defeat.", bio: "Curt Thompson is a psychiatrist and the author of Anatomy of the Soul and The Soul of Shame. His integration of neuroscience and Christian theology provides one of the richest frameworks available for understanding how brain differences shape personhood, relationships, and spiritual life. He speaks often about late diagnosis in the context of shame and identity formation." },
  { id: "v2", name: "Jennie Pollock", role: "Author, Editor", quote: "Discovering I had ADHD in my 40s did not make me a different person. It made the person I had always been finally make sense.", bio: "Jennie Pollock is a British Christian writer and editor who received an ADHD diagnosis as an adult. Her writing about faith, neurodivergence, and identity offers pastoral warmth and theological clarity for late-diagnosed Christians navigating the complex emotions of finally having a framework for their experience." },
  { id: "v3", name: "Dr. Edward Hallowell", role: "Psychiatrist, ADHD Specialist", quote: "ADHD is not a disorder of knowing what to do. It is a disorder of doing what you know — a difference in the ability to regulate attention, emotion, and action.", bio: "Dr. Edward Hallowell is a psychiatrist, author of Driven to Distraction, and himself diagnosed with ADHD. While not a Christian writer, his clinical framework for understanding ADHD as a different brain type rather than a deficient one has been deeply influential in helping adults understand late diagnosis with compassion rather than shame." },
  { id: "v4", name: "Steve Silberman", role: "Author, Journalist", quote: "Autism is not a disease to be cured. It is a different way of moving through the world — and one that has contributed to human civilization in profound ways.", bio: "Steve Silberman is the author of NeuroTribes: The Legacy of Autism and the Future of Neurodiversity, which traces autism through history and argues for a neurodiversity framework rather than a deficit model. His work has helped many late-diagnosed adults place their experience in a broader, less shame-laden narrative." },
];

const practices = [
  { icon: "📋", title: "Process the Diagnosis in Layers", text: "A late diagnosis typically brings grief (for the years without support), relief (finally having language), anger (at systems that missed it), and hope (now knowing how to help yourself). All of these are legitimate. Journal through each layer rather than rushing past them." },
  { icon: "🧠", title: "Research Your Specific Diagnosis Deeply", text: "Autism, ADHD, dyslexia, dyscalculia, sensory processing disorder, and other neurological differences have distinct profiles. The more specifically you understand your own brain, the better you can advocate for yourself and explain your needs to others without shame." },
  { icon: "🤝", title: "Find Community with Others Who Are Late-Diagnosed", text: "Online communities (ADHD subreddits, autistic adult forums, late-diagnosed Facebook groups) can provide enormous normalizing support. Hearing others describe exactly your experience — sometimes in words you have never had — is a powerful part of integration." },
  { icon: "🏥", title: "Work with a Specialist, Not Just a GP", text: "ADHD and autism coaching, occupational therapy for sensory processing, and neuropsychological evaluation can provide targeted support that general counseling may not. Seek professionals who specialize in late-diagnosed adults." },
  { icon: "⛪", title: "Communicate Your Needs to Your Church Community", text: "You may need to educate your community. Sensory sensitivities, difficulty with eye contact, social exhaustion after services, trouble with unstructured social time — these are not rudeness or disengagement. Brief, matter-of-fact self-disclosure helps people know how to love you well." },
  { icon: "📖", title: "Read Psalm 139 as a Late-Diagnosed Person", text: "Sit with the specific claim that God formed your inmost being and knew your frame before you were born. God was not surprised by your neurology. His knowledge of you preceded any human diagnosis by decades — and is incomparably more complete." },
];

const scriptures = [
  { verse: "Psalm 139:13-14", text: "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable." },
  { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will." },
  { verse: "John 8:32", text: "Then you will know the truth, and the truth will set you free." },
];

type LDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function LateDiagnosisPage() {
  const [tab, setTab] = useState("theology");
  const [ldJournal, setLdJournal] = useState<LDEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setLdJournal(JSON.parse(localStorage.getItem("vine_latediagnosisj_entries") ?? "[]")); } catch { setLdJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: LDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...ldJournal];
    setLdJournal(updated);
    localStorage.setItem("vine_latediagnosisj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = ldJournal.filter(e => e.id !== id);
    setLdJournal(updated);
    localStorage.setItem("vine_latediagnosisj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🧩</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Late Diagnosis</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Receiving an autism, ADHD, or neurodivergent diagnosis as an adult — finding God who knew your frame before you did.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What am I feeling since my diagnosis? Grief, relief, anger, hope?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does God say is true about how I was made?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One accommodation or support I will pursue this month:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ldJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Next step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson explores how shame shapes the brain and self-perception — essential for late-diagnosed adults processing years of unexplained struggle and self-blame." },
              { videoId: "53RX2ESIqLM", title: "The Body Keeps the Score", channel: "Bessel van der Kolk", description: "Van der Kolk on how the body carries what the mind has experienced — including the accumulated stress of masking, sensory overload, and years of not understanding your own brain." },
              { videoId: "jJPVNIAFmvA", title: "Theology of Disability and Difference", channel: "Joni and Friends", description: "A theological framework for understanding neurological and physical difference not as deviation from the norm but as part of God's image-bearing humanity." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on how knowing and accepting yourself — including your limitations and wiring — is essential to authentic spiritual formation and genuine community." },
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
    </div>
  );
}
