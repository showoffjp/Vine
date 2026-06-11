"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];
const JOURNAL_KEY = "vine_anxiety_disorder_entries";

interface JournalEntry { id: string; date: string; text: string; }

export default function AnxietyDisorderPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]")); } catch { setEntries([]); }
  }, []);

  function saveEntry() {
    if (!draft.trim()) return;
    const updated = [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setDraft("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 13, letterSpacing: 3, color: ACCENT, textTransform: "uppercase", marginBottom: 12 }}>Anxiety Disorder &amp; Christian Faith</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, margin: "0 0 16px", lineHeight: 1.2 }}>
            An Anxious Brain Is Not a Faithless Heart
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Anxiety disorders are neurobiological conditions — not spiritual failures. The verse about not being anxious was not written for people with panic disorder. You deserve both treatment and theology that takes your brain seriously.
          </p>
        </div>

        <div style={{ background: "#110d1f", border: `1px solid ${ACCENT}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 36, fontSize: 14 }}>
          <strong style={{ color: ACCENT }}>Crisis Resources: </strong>
          <span style={{ color: MUTED }}>988 Suicide & Crisis Lifeline — call or text </span>
          <strong style={{ color: TEXT }}>988</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; NAMI Helpline: </span>
          <strong style={{ color: TEXT }}>1-800-950-6264</strong>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Anxiety and Depression Association: </span>
          <strong style={{ color: TEXT }}>adaa.org</strong>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${tab === i ? ACCENT : BORDER}`, background: tab === i ? `${ACCENT}22` : "transparent", color: tab === i ? ACCENT : MUTED, cursor: "pointer", fontSize: 14, transition: "all 0.2s" }}>{t}</button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Anxiety Disorder Is Not What Philippians 4:6 Is Addressing", body: "\"Do not be anxious about anything\" (Phil. 4:6) is one of the most weaponized verses in American Christian culture. In context, Paul wrote this to a community in Philippi while he was imprisoned — it is a letter of pastoral encouragement, not a prescription for clinical anxiety disorders. Using it to tell someone with generalized anxiety disorder, panic disorder, or OCD to simply trust God more is exegetically irresponsible and pastorally harmful. Paul also told Timothy to drink wine for his stomach — he understood that bodies need treatment, not just prayer." },
              { title: "The Anxious Brain Is Not Choosing to Fail", body: "Anxiety disorders involve dysregulation of the amygdala, the brain's threat-detection system. In clinical anxiety, the amygdala fires false alarms at high volume with no ability to pause — it is not a decision. A person with panic disorder is not choosing panic; they are experiencing a physiological event. Framing clinical anxiety as a spiritual problem with a spiritual solution is the equivalent of telling someone with asthma to have more faith and stop wheezing. It misdiagnoses the condition and delays treatment." },
              { title: "Jesus in Gethsemane Showed What Acute Anxiety Looks Like", body: "Luke 22:44 describes Jesus in such acute distress before the crucifixion that his sweat was like drops of blood — a rare but documented physiological response to extreme stress called hematidrosis. The Son of God asked for the cup to be taken away. He did not white-knuckle his way to the cross with a smile. The incarnation means God inhabits the nervous system, including the anxious one." },
              { title: "Treatment Is Not a Lack of Faith", body: "Cognitive Behavioral Therapy (CBT) and medication are the two evidence-based treatments for anxiety disorders. Both work. Millions of Christians use them. The theology of healing includes using the means God has given — medicine, trained clinicians, and research — and prayer and faith are not in competition with these means. If prayer alone were the prescribed treatment for insulin-dependent diabetes, we would recognize that as dangerous. The same applies to anxiety disorders." },
              { title: "Scrupulosity: When Anxiety Targets Faith", body: "Scrupulosity is a form of OCD in which the intrusive thoughts focus on religious content — fear of having committed blasphemy, fear of not being truly saved, compulsive confession and reassurance-seeking, terror about hell. It looks like intense religious devotion; it is in fact an anxiety disorder that has latched onto religious themes. It responds to OCD treatment (ERP — Exposure and Response Prevention), not to more theological reassurance. ADAA.org and the IOCDF (iocdf.org) provide resources." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.1rem", margin: "0 0 12px", fontWeight: 500 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { name: "Ed Welch", role: "Counselor and author, CCEF (Center for Biblical Counseling)", quote: "Anxiety is a gift — a distorted gift, but a gift. It is the body's warning system. In anxiety disorders, the warning system has malfunctioned and needs help. That help includes both theological truth and often medical care.", note: "Welch's book Running Scared is one of the more honest evangelical treatments of anxiety, distinguishing the spiritual dimension of worry from the neurological dimension of anxiety disorders without collapsing one into the other." },
              { name: "Rachael Denhollander", role: "Lawyer, advocate, survivor-advocate and public Christian", quote: "The church must learn to hold together: this is real suffering that deserves real treatment, AND God is present in the suffering. We do not have to choose between those two truths.", note: "Denhollander's advocacy for abuse survivors has extended to mental health advocacy in church contexts — pushing back against the pietistic bypass that substitutes spiritual language for practical help." },
              { name: "Kay Warren", role: "Co-founder of Saddleback Church, mental health advocate", quote: "Mental illness is not a spiritual problem with a spiritual solution. It is a medical illness. We don't tell people with cancer to pray harder. We should not tell people with bipolar disorder or anxiety to pray harder either.", note: "Warren's son Matthew died by suicide in 2013. Her subsequent advocacy for mental health literacy in the church has moved the needle in evangelical contexts more than almost any other voice." },
              { name: "Paul (Apostle)", role: "New Testament writer", quote: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. (Phil. 4:6–7)", note: "This is a pastoral promise, not a prescription. Paul wrote it while imprisoned, to people who were afraid of persecution, not to people with clinical anxiety disorders. The peace he promises is real; it coexists with treatment." },
            ].map(({ name, role, quote, note }) => (
              <div key={name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "1.05rem" }}>{name}</div>
                  <div style={{ color: ACCENT, fontSize: 13, marginTop: 2 }}>{role}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 16, margin: "0 0 12px", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Get a Proper Diagnosis", body: "Anxiety disorder encompasses many distinct conditions — Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, OCD, PTSD, Agoraphobia, and specific phobias. Each has different presentations and optimal treatments. A psychiatrist or psychologist can provide an accurate diagnosis. The right diagnosis points to the right treatment. Self-diagnosing from symptoms alone often misses the specific condition that most responds to intervention." },
              { title: "Cognitive Behavioral Therapy (CBT)", body: "CBT is the gold standard psychological treatment for most anxiety disorders. It works by identifying distorted thinking patterns (catastrophizing, mind-reading, magnification) and building new responses to anxiety triggers. For OCD specifically, ERP (Exposure and Response Prevention) is the first-line treatment. ADAA.org provides a therapist finder filtered by anxiety specialization and evidence-based approach." },
              { title: "Medication as a Legitimate Tool", body: "SSRIs and SNRIs are first-line medications for anxiety disorders and are not addictive. Benzodiazepines provide acute relief but have dependence risk and are typically short-term tools. Beta-blockers help with performance anxiety. Discuss with a psychiatrist, not just a primary care physician, for complex presentations. Medication does not fix anxiety — it can lower the baseline enough that therapy becomes possible." },
              { title: "Grounding Techniques for Acute Anxiety", body: "The 5-4-3-2-1 method: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This deliberately engages the prefrontal cortex and interrupts the amygdala spiral. Box breathing (4 counts in, 4 hold, 4 out, 4 hold) activates the parasympathetic nervous system. These are tools, not cures — but they work in the moment and are worth practicing when calm so they are available under stress." },
              { title: "Limit Spiritual Bypassing in Your Faith Practice", body: "If prayer becomes a compulsion (scrupulosity) or if you use Scripture to suppress anxiety rather than process it, watch for that pattern. Healthy spiritual practice in anxiety involves bringing the fear to God honestly (the Psalms are full of honest anxiety) rather than using spiritual language to avoid facing the anxiety. Confession, worship, and community are supports, not replacements for treatment." },
              { title: "NAMI and ADAA Community Resources", body: "NAMI (National Alliance on Mental Illness) provides free education programs (NAMI Family Support, NAMI Connection Recovery) and a helpline at 1-800-950-6264. ADAA (Anxiety and Depression Association of America) provides a searchable directory of CBT-trained therapists and a peer support community at adaa.org. Both organizations have faith-sensitive resources." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ color: ACCENT, fontSize: "1.05rem", margin: "0 0 10px", fontWeight: 600 }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { ref: "Luke 22:44", text: "And being in agony he prayed more earnestly; and his sweat became like great drops of blood falling down to the ground.", note: "Jesus experienced acute physiological distress in Gethsemane — not lack of faith but real anguish. The incarnation includes the anxious body." },
              { ref: "Philippians 4:6–7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.", note: "A pastoral promise written from prison to people afraid of persecution. Real and important — and not a prescription for clinical anxiety disorders. Both things can be true." },
              { ref: "Psalm 55:4–5", text: "My heart is in anguish within me; the terrors of death have fallen upon me. Fear and trembling come upon me, and horror overwhelms me.", note: "The psalmist describes what reads like a panic attack. The Psalms gave ancient Israel permission to bring clinical-level distress before God without theological shame." },
              { ref: "Isaiah 43:1–2", text: "Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.", note: "God does not say the waters will not come. God says they will not overwhelm. This is a promise of presence and endurance, not of the absence of fear or suffering." },
              { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control.", note: "The spirit given is not a spirit of fearlessness — it is a spirit of power (ability to act despite fear), love (grounding in relationship), and sound mind (ability to reason). This is a description of recovery, not a command to not be afraid." },
              { ref: "Matthew 6:34", text: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.", note: "Jesus teaches present-moment orientation as wisdom — the core insight of mindfulness-based cognitive therapy. This is not a command to eliminate worry but an invitation into a different relationship with time." },
            ].map(({ ref, text, note }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ color: ACCENT, fontWeight: 600, marginBottom: 8, fontSize: "0.95rem" }}>{ref}</div>
                <div style={{ color: TEXT, fontStyle: "italic", marginBottom: 10, lineHeight: 1.7, fontSize: "1rem" }}>&ldquo;{text}&rdquo;</div>
                <div style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 28px" }}>
              <h3 style={{ color: ACCENT, margin: "0 0 8px", fontSize: "1.05rem" }}>Your Reflection Space</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <textarea
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder="What does your anxiety feel like in your body? What have you been told about your anxiety that was not true?"
                style={{ width: "100%", minHeight: 120, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 14, color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button onClick={saveEntry} style={{ marginTop: 10, padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: TEXT, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: MUTED, fontSize: 13 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>Delete</button>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <VideoEmbed videoId="G-2e9mMf7E8" title="Anxiety, Fear, and Finding Peace — Elevation Church" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="What God Says When You Are Afraid" />
            <VideoEmbed videoId="sIaT8Jl2zpI" title="Mental Health and Faith: Breaking the Stigma" />
            <VideoEmbed videoId="7_CGP-12AE0" title="When Anxiety Won't Let Go — Practical and Spiritual Help" />
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}`, textAlign: "center", color: MUTED, fontSize: 13 }}>
          <p>Your anxious brain is not a faithless heart. You deserve both good theology and good treatment.</p>
          <p style={{ marginTop: 8 }}>ADAA: adaa.org &nbsp;|&nbsp; NAMI: 1-800-950-6264 &nbsp;|&nbsp; 988 Lifeline</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
