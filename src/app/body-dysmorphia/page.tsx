"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Mirror Lies; God's Word Does Not", verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. Body Dysmorphic Disorder involves a distorted perception of the body — seeing defects that others cannot see, or seeing them as far more severe than they are. The mirror's testimony is unreliable. God's testimony — that you are fearfully and wonderfully made — is not a platitude. It is the Creator's assessment of his craftsmanship, spoken before you developed any particular view of yourself." },
  { title: "Preoccupation with Appearance Is Not Vanity — It Is Torment", verse: "Lamentations 3:17-18", text: "I have been deprived of peace; I have forgotten what prosperity is. So I say, 'My splendor is gone and all that I had hoped from the Lord.' BDD is not vain self-absorption — it is a form of suffering that involves obsession, compulsion, and profound distress. The person with BDD is not looking in the mirror because they love how they look. They are looking because they cannot stop, and what they see causes them anguish. This is suffering that deserves care, not rebuke." },
  { title: "God Does Not Evaluate by Appearance", verse: "1 Samuel 16:7", text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart. This is not a dismissal of embodiment — God made the physical world and called it good. But it is a definitive statement about his primary lens. The distorted mirror that BDD holds up is not God's mirror. He looks at the heart, and what he sees there has been purchased by the blood of Christ — it is clean, beautiful, and beloved." },
  { title: "The Body Is the Site of God's Dwelling", verse: "1 Corinthians 6:19", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? Paul's temple theology does not say you must be beautiful to be a temple. He says you already are. The Spirit has chosen to dwell in your body — this specific body, with this specific face, with whatever features you have been given. Contempt for the body is not humility; it is at odds with the theology of the Incarnation and the indwelling Spirit." },
  { title: "Freedom from Compulsion Is Possible", verse: "John 8:36", text: "So if the Son sets you free, you will be free indeed. BDD involves compulsions — checking, avoiding, seeking reassurance, comparing — that the person feels unable to control. The gospel's claim of freedom is not a guarantee that BDD resolves through prayer alone. But it is a theological assertion that slavery to compulsion is not God's design for you, and that pursuing freedom — including through clinical treatment — is consistent with faith." },
];

const voices = [
  { id: "v1", name: "Katharine Phillips, MD", role: "Psychiatrist, BDD Expert", quote: "BDD is one of the most poorly understood and underdiagnosed conditions in psychiatry — and one that causes among the highest levels of distress and functional impairment of any mental health condition.", bio: "Dr. Katharine Phillips is one of the world's leading researchers on Body Dysmorphic Disorder and the author of The Broken Mirror: Understanding and Treating Body Dysmorphic Disorder. Her clinical work has transformed how BDD is understood and treated. Her book is widely considered the definitive resource for people with BDD and those who care for them." },
  { id: "v2", name: "Ed Welch", role: "Counselor, CCEF", quote: "The question 'What does God see when he looks at me?' is not a rhetorical question. It has an answer — and that answer is more real than anything the mirror shows.", bio: "Ed Welch is a faculty member at the Christian Counseling and Educational Foundation (CCEF) and the author of When I Am Afraid, Side by Side, and numerous other resources. His work on anxiety, shame, and self-perception provides a theologically grounded framework for engaging the distorted self-perception that characterizes BDD — without reducing it to simple moralizing." },
  { id: "v3", name: "Shannon Thomas, LCSW", role: "Licensed Clinical Social Worker", quote: "Body image disorders exist at the intersection of trauma, shame, culture, and brain chemistry. They require clinical treatment, not willpower or spiritual discipline alone.", bio: "Shannon Thomas is a licensed clinical social worker and trauma specialist who has addressed body image disorders and their connection to shame, trauma, and cultural messaging. Her work on toxic stress and its embodied effects helps Christians understand BDD and related conditions as requiring both spiritual care and clinical intervention." },
  { id: "v4", name: "Kate Bowler", role: "Professor of Religious History, Duke Divinity", quote: "The prosperity gospel tells you that the blessed life is beautiful, healthy, and attractive. The actual gospel is more interested in who you are loved by than in what you look like.", bio: "Kate Bowler researches the prosperity gospel and its effects on Christian identity and body image. Her work provides a theological critique of cultural beauty standards that have been baptized in evangelical culture — and offers a more honest account of how embodied life in a fallen world intersects with the gospel's radical account of worth and belovedness." },
];

const practices = [
  { icon: "🏥", title: "Seek Evidence-Based Treatment", text: "BDD responds to Cognitive Behavioral Therapy with Exposure and Response Prevention (CBT-ERP) and, in some cases, SSRI medication. This is not a willpower problem. Clinical treatment is as appropriate for BDD as insulin is for diabetes. Find a therapist trained specifically in BDD or OCD-spectrum disorders." },
  { icon: "🚫", title: "Reduce Checking and Reassurance-Seeking", text: "Mirror checking, skin picking, reassurance-seeking, and avoidance are BDD compulsions that temporarily reduce anxiety but maintain the cycle. Working with a therapist, you can begin to reduce these behaviors gradually — not abruptly, but intentionally, with support." },
  { icon: "📖", title: "Read Psalm 139 as God's Assessment", text: "Not as a repetition exercise, but slowly, asking: What would it mean if this were literally true of my body — the one I live in right now, today? Letting the specific claim encounter the specific lie is the daily work of renewing the mind." },
  { icon: "🤝", title: "Tell a Trusted Person What You Are Experiencing", text: "BDD is secretive. The distress and the behavior are often hidden. Telling one trusted person — a counselor, close friend, or pastor — breaks the isolation and creates accountability for pursuing treatment. You do not have to manage this alone." },
  { icon: "📵", title: "Limit Social Media Exposure", text: "Social media comparison is acutely harmful for people with BDD, whose perceptual distortions are activated and amplified by constant image comparison. Limiting or eliminating appearance-focused social media is a practical harm-reduction measure that can significantly reduce symptom intensity." },
  { icon: "🙏", title: "Pray for the Freedom God Promises", text: "Ask God specifically for freedom from the checking, the comparing, the looping thoughts. Ask for the capacity to receive his assessment rather than the mirror's. Ask for the willingness to pursue clinical help as an act of stewardship of the body and mind he gave you." },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "1 Samuel 16:7", text: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
  { verse: "2 Corinthians 10:5", text: "We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ." },
  { verse: "John 8:36", text: "So if the Son sets you free, you will be free indeed." },
];

type BDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function BodyDysmorphiaPage() {
  const [tab, setTab] = useState("theology");
  const [bdJournal, setBdJournal] = useState<BDEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setBdJournal(JSON.parse(localStorage.getItem("vine_bodydysmorphiaj_entries") ?? "[]")); } catch { setBdJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: BDEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...bdJournal];
    setBdJournal(updated);
    localStorage.setItem("vine_bodydysmorphiaj_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = bdJournal.filter(e => e.id !== id);
    setBdJournal(updated);
    localStorage.setItem("vine_bodydysmorphiaj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🪞</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Body Dysmorphia</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When the mirror lies — finding God's assessment of the body you inhabit and freedom from the compulsion loop.</p>
        <div style={{ background: "#1a0a3e", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: PURPLE }}>Support:</strong> BDD Foundation bddfoundation.org &nbsp;|&nbsp; IOCDF iocdf.org &nbsp;|&nbsp; 988 Lifeline
        </div>
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
              <textarea placeholder="What does the BDD voice say? How does it affect my day?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does God say is true about the body I inhabit?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One step toward treatment or breaking the compulsion cycle:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {bdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Curt Thompson on how shame shapes the way we see ourselves — including our bodies — and what the neuroscience of shame means for healing." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown TED", description: "Brené Brown on shame resilience and the courage to accept yourself as you are — directly applicable to the shame loop of body dysmorphia." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds", channel: "CCEF", description: "CCEF on the biblical distinction between shame and conviction — and how shame-based self-perception can be met by the gospel's alternative assessment." },
              { videoId: "jJPVNIAFmvA", title: "Theology of the Body", channel: "Joni and Friends", description: "A theological framework for understanding embodiment — the body as gift and as the site of God's presence — rather than as a problem to be solved or perfected." },
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
      <Footer />
    </>
  );
}
