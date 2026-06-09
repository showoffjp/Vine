"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Bipolar Disorder Is a Brain Disease — Not a Spiritual Failure", verse: "Psalm 139:14", text: "Bipolar disorder involves dysregulation of the brain's mood circuits — a neurological condition with genetic components, identifiable brain differences, and evidence-based treatments. You did not choose it. It is not caused by insufficient faith, unconfessed sin, or spiritual weakness. You are fearfully and wonderfully made — including a brain that requires specific care." },
  { title: "The Great Cloud of Witnesses Includes Neurological Suffering", verse: "Hebrews 11:36-38", text: "The heroes of faith endured destitution, torture, persecution — the full range of human suffering. Neurological suffering is not excluded from the catalog of what faithful people have endured. The faithfulness honored in Hebrews 11 was not achieved by people whose suffering disappeared. It was achieved by those who trusted in the midst of it." },
  { title: "Medication Is Stewardship, Not Weakness", verse: "1 Timothy 5:23", text: "Paul tells Timothy to take a little wine for his stomach and frequent illnesses. The apostle of the Lord recommended medical intervention to address a physical condition. Taking mood stabilizers, antipsychotics, or other psychiatric medications is not a lack of faith in God's healing power — it is the stewardship of the brain God gave you, using the means He has provided." },
  { title: "God Is Present in Both the High and the Low", verse: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there. The manic heights and the depressive depths are both within God's reach. He does not abandon you in the episodes — He is present in them." },
  { title: "Community Is Protective — and Protecting Others Is a Reason to Seek Treatment", verse: "Romans 15:1", text: "We who are strong ought to bear with the failings of the weak and not to please ourselves. Seeking treatment for bipolar disorder — consistently taking medication, engaging in therapy, avoiding triggers — is an act of love toward those who depend on you and whom you love. Stability is a gift to yourself and to everyone who loves you." },
];

const voices = [
  { id: "kj", name: "Kay Redfield Jamison", role: "Psychiatrist, Author of An Unquiet Mind", quote: "I have often asked myself whether, given the choice, I would choose to have manic-depressive illness. If lithium were not available to me, or didn't work for me, the answer would be a simple no. But lithium does work for me, and so I am left with a complex set of answers.", bio: "Jamison is one of the world's leading experts on bipolar disorder and also has the disorder herself. Her memoir An Unquiet Mind is the most widely read and trusted personal account of bipolar disorder, integrating the scientific, personal, and spiritual dimensions." },
  { id: "ms", name: "Matthew Stanford", role: "Author, Grace for the Afflicted", quote: "The church often treats mental illness as either a spiritual problem (so prayer will fix it) or a secular problem (so the church has nothing to offer). Both are wrong. Mental illness is a complex neurological condition that requires medical treatment AND the full support of the Christian community.", bio: "Stanford is a neuroscientist and Christian who has written extensively on the intersection of mental illness and faith. His book Grace for the Afflicted addresses bipolar disorder and other serious mental illnesses from a theologically grounded and scientifically informed perspective." },
  { id: "kw", name: "Kay Warren", role: "Co-Founder of Saddleback Church, Mental Health Advocate", quote: "My son Matthew had bipolar disorder and died by suicide. I will spend the rest of my life making sure the church becomes a place where people with mental illness are welcomed, supported, and pointed toward the help they need.", bio: "After her son Matthew's death by suicide following a lifelong struggle with mental illness, Kay Warren has become one of the most courageous and prominent voices for mental health awareness in the church, particularly around serious mental illnesses like bipolar disorder." },
];

const practices = [
  { icon: "💊", title: "Find a Psychiatrist and Stay With Treatment", text: "Bipolar disorder requires a psychiatrist (not just a therapist or GP) for medication management. The most dangerous point in bipolar treatment is when people feel well and stop their medication — often triggering a severe episode. Commit to the long game: stable medication management, regular appointments, and honest reporting of symptoms." },
  { icon: "📓", title: "Track Your Mood Daily", text: "A mood chart or app (Daylio, eMoods, Bearable) helps you identify early warning signs of episodes before they escalate. Patterns like decreased sleep need, increased energy, spending, and irritability often precede manic episodes. Catching these early — and having a pre-agreed response plan with your psychiatrist and support person — is the most effective prevention." },
  { icon: "🌙", title: "Protect Sleep as a Medical Priority", text: "Sleep disruption is both a trigger for and symptom of bipolar episodes. Protecting sleep is not a preference — it is treatment. Consistent sleep and wake times, darkened rooms, avoidance of alcohol and stimulants, and rapid response to early sleep disturbance are among the most evidence-based interventions available." },
  { icon: "👥", title: "Build a Support Network That Knows the Signs", text: "Choose two or three trusted people — a spouse, a close friend, a family member — who know your warning signs and have explicit permission to say: 'I think you're heading into an episode. Please call your doctor.' This requires vulnerability but can be literally lifesaving. Consider sharing your treatment plan with your support person." },
];

const scriptures = [
  { verse: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
  { verse: "Isaiah 40:28-31", text: "Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom. He gives strength to the weary and increases the power of the weak." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

const videos = [
  { id: "bp_1", title: "Bipolar Disorder and Faith — Kay Warren's Story", channel: "Saddleback Church" },
  { id: "bp_2", title: "An Unquiet Mind — Kay Redfield Jamison on Living With Bipolar", channel: "NAMI" },
  { id: "bp_3", title: "Medication and Faith — Is Taking Psychiatric Medication Trusting God?", channel: "The Gospel Coalition" },
  { id: "bp_4", title: "Supporting a Loved One With Bipolar Disorder", channel: "Focus on the Family" },
];

type BPEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function BipolarDisorderPage() {
  const [tab, setTab] = useState("theology");
  const [bpJournal, setBpJournal] = useState<BPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_bipolardisorderj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_bipolardisorderj_entries", JSON.stringify(bpJournal)); } catch {}
  }, [bpJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setBpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setBpJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Mental Health and Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Bipolar Disorder and Faith</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, treatment, and community for Christians living with bipolar disorder</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>Crisis Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>988 Suicide and Crisis Lifeline:</strong> Call or text 988 — 24/7 (bipolar disorder carries significant suicide risk)<br />
            <strong>NAMI Helpline:</strong> 1-800-950-NAMI (6264) — for information and support<br />
            <strong>If in a manic episode or in danger:</strong> 911 or nearest emergency room
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Theology for the Peaks and Valleys</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices on Bipolar and Faith</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Managing Bipolar Well</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries saved privately in your browser. This is not a clinical mood tracker — it is a space for spiritual reflection.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Where are you today — emotionally and spiritually?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am at..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth about God is anchoring you right now?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What is anchoring me is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What treatment or stability step are you committed to today?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Today I am committed to..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {bpJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your journey is worth recording — begin when you are stable enough.</p>}
            {bpJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHERE I AM TODAY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT ANCHORS ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>COMMITTED TO</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
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
