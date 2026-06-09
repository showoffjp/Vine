"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Anxiety Disorders Are Not Spiritual Failures", verse: "Philippians 4:6-7", text: "Do not be anxious about anything. This verse is one of the most misused in pastoral ministry. It is frequently cited as a command that resolves anxiety by sheer force of will or prayer — implying that anxious Christians are disobedient. But anxiety disorders (panic disorder, generalized anxiety disorder, OCD, social anxiety, agoraphobia) are not primarily moral or spiritual failures. They involve genuine dysregulation of the brain's threat-detection systems. The Paul who wrote this verse also wrote about his own unease, weakness, and fear (2 Cor 7:5). He was describing a spiritual orientation, not prohibiting a neurological condition." },
  { title: "God Is Specifically Present in Fear', verse: 'Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. The divine response to fear in Scripture is not rebuke but presence. God does not tell frightened people to stop being frightened. He tells them he is with them. This is the posture toward anxiety that the church needs to recover: not exhortation to try harder, but the promise of a God who draws near precisely in the frightened place." },
  { title: "The Body and Soul Are Not Enemies", verse: "Psalm 139:14", text: "I am fearfully and wonderfully made. The anxiety disorder that floods your body with adrenaline in the absence of actual threat is not a spiritual problem that has leaked into the body. It is a body problem that affects spiritual experience. The hyper-activated amygdala, the dysregulated cortisol response, the nervous system that has learned to treat ordinary situations as emergencies — these are physical realities that respond to physical treatment. Seeking medication or therapy is not lack of faith. It is stewardship of the body." },
  { title: "Paul Knew Panic — and He Kept Going", verse: "2 Corinthians 7:5", text: "When we came into Macedonia, we had no rest, but we were harassed at every turn — conflicts on the outside, fears within. Paul used a word in the original text (phobos) that includes the fear response. He was not serene. He was frightened. He continued anyway — not by pretending the fear wasn't real, but by acting in accordance with his calling despite its presence. This is not a model of cure but of faithful life alongside anxiety. Anxious Christians can live faithfully. The goal is not the elimination of anxiety but the development of a life that isn't ruled by it." },
  { title: "Treatment Is Part of Healing, Not Its Absence", verse: "Luke 10:34", text: "He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him. The Good Samaritan used medical means — oil, wine, bandages — to treat a physical injury. The gospel does not require that healing happen through spiritual means only. Evidence-based treatment for anxiety disorders (CBT, ERP for OCD, EMDR, medication) is part of the range of means God has provided. Using them is not a failure of faith; it is wise care for the body and mind God entrusted to you." },
];

const voices = [
  { id: "ew", name: "Ed Welch", role: "CCEF Counselor, Author of Running Scared", quote: "The person with an anxiety disorder needs two things from the church: understanding that their anxiety is real and not a simple spiritual failure, and the patient companionship of people who will walk with them through the process of learning to live faithfully in the presence of fear.", bio: "Welch's Running Scared is one of the most balanced Christian treatments of anxiety, holding together psychological honesty (anxiety disorders are real brain conditions) and theological depth (the path through involves trust in God) without collapsing into either secular reductionism or spiritual bypass." },
  { id: "dh", name: "Daniel Headrick", role: "Psychologist, Faith and Anxiety Researcher", quote: "The church's message to anxious people has too often been: pray more, trust more, worry less. This message, without clinical support, can deepen shame and delay treatment. What anxious people need is the same thing everyone needs: accurate information, effective treatment, and a community that stays.", bio: "Headrick's research on the intersection of Christian faith and anxiety treatment addresses the specific ways that religious belief can both help and hinder anxiety treatment — and how clinicians and pastors can collaborate to serve anxious Christians effectively." },
  { id: "kb", name: "Kate Bowler", role: "Author, No Cure for Being Human", quote: "I am not going to tell you that anxiety is a gift. It isn't. But I have learned that the God who is present in cancer, in chronic illness, in all the unresolvable hard things, is also present in the perpetual, exhausting, neurologically real experience of anxiety. Present — not as a cure, but as company.", bio: "Bowler's work on suffering, the limits of positive Christianity, and God's presence in unremedied hardship speaks directly to the experience of people who have been told their anxiety should be resolved by stronger faith — and whose faith is genuine but whose anxiety persists." },
];

const practices = [
  { icon: "🧠", title: "Get an Accurate Diagnosis and Evidence-Based Treatment", text: "Anxiety disorders respond well to treatment when treated accurately. CBT (Cognitive Behavioral Therapy) has the strongest research support for GAD, panic disorder, and social anxiety. ERP (Exposure and Response Prevention) is the gold-standard treatment for OCD. EMDR and other trauma-informed approaches address trauma-rooted anxiety. Many people try to manage anxiety spiritually for years before discovering that evidence-based treatment is available and effective. The Anxiety and Depression Association of America (adaa.org) maintains a therapist directory." },
  { icon: "💊", title: "Consider Medication — With a Clinician You Trust", text: "SSRIs and SNRIs are evidence-based medications for anxiety disorders that are not addictive and are not a sign of weak faith. Many Christians with anxiety disorders find that medication, combined with therapy, produces results that years of prayer alone did not. Work with a psychiatrist or informed primary care physician. Medication is not a cure — it reduces the intensity of symptoms enough for the therapy work to take hold. It is one tool among several." },
  { icon: "🏃", title: "Build Regular Exercise Into Your Schedule", text: "Exercise is one of the most evidence-supported interventions for anxiety — equivalent in some studies to medication for mild to moderate anxiety. Regular aerobic exercise (30 minutes most days) down-regulates the stress response, reduces amygdala reactivity, and increases the brain's capacity to handle uncertainty. This is not a replacement for clinical treatment in clinical-level anxiety, but it is a meaningful contribution that doesn't require a prescription." },
  { icon: "🤝", title: "Tell One or Two People — Specifically", text: "Anxiety thrives in isolation and secrecy. Telling even one or two trusted people specifically what you experience — including the physical symptoms, the avoidance patterns, the shame — reduces its power. It also opens the possibility of genuine support rather than the performance of normalcy that anxiety requires. You do not owe disclosure to everyone. But sustained secrecy about an anxiety disorder is a significant burden." },
  { icon: "✝️", title: "Use Lament Prayer — Not Just Petition", text: "The Psalms of anxiety (Ps 55, Ps 56, Ps 77, Ps 94) model a kind of honest, specific, persistent prayer that does not perform peace it hasn't found. Reading and praying these psalms aloud, using their language as your own, connects the anxiety to faith without requiring the premature peace that the church often demands. God is not surprised by your anxiety. He has been hearing about it for three thousand years." },
];

const scriptures = [
  { verse: "Psalm 56:3-4", text: "When I am afraid, I put my trust in you. In God, whose word I praise — in God I trust and am not afraid. What can mere mortals do to me?" },
  { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
  { verse: "Psalm 94:19", text: "When anxiety was great within me, your consolation brought me joy." },
  { verse: "Matthew 6:34", text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
];

type ADEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AnxietyDisordersPage() {
  const [tab, setTab] = useState("theology");
  const [adJournal, setAdJournal] = useState<ADEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_anxietydisordersj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_anxietydisordersj_entries", JSON.stringify(adJournal)); } catch {}
  }, [adJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Mental Health & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Anxiety Disorders and Faith</h1>
        <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
          Panic disorder, GAD, OCD, social anxiety — not spiritual failures, but real conditions with real treatments and a God who draws near.
        </p>
        <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "2rem", fontSize: "0.9rem" }}>
          <span style={{ color: PURPLE, fontWeight: 600 }}>Support: </span>
          <span style={{ color: MUTED }}>NAMI Helpline: </span><span style={{ color: TEXT }}>1-800-950-6264</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Crisis: </span><span style={{ color: TEXT }}>988</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; ADAA: </span><span style={{ color: TEXT }}>adaa.org</span>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Anxiety Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is my anxiety doing today — what are its triggers, its physical symptoms?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is true about God's presence in this specific anxiety?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One treatment or coping step I will take today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {adJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {adJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Anxiety: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller explores how honest, specific prayer — not denial of anxiety — is the biblical pathway through fear, drawing on the Psalms and Philippians 4." },
              { videoId: "7_CGP-12AE0", title: "Peace: Overcoming Anxiety", channel: "Tim Keller", description: "A sermon on how many believers are cast down because they have not learned what Scripture teaches about Christian peace available even in the midst of real anxiety disorders." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame — Interpersonal Neurobiology and Faith", channel: "Curt Thompson", description: "Thompson integrates neuroscience and biblical theology to explain the anxiety-shame-fear complex and what the healing process looks like over time in community." },
              { videoId: "OqwbFGoRYVo", title: "Peace", channel: "Tim Keller", description: "Keller shows that Christian peace is not the absence of trouble but settled confidence in God that the world cannot give or take away — the theological foundation for anxiety treatment." },
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
