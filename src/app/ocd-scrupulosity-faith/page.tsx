"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Scrupulosity Is OCD, Not Heightened Holiness",
    verse: "1 John 4:18",
    text: "\"There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.\" Scrupulosity — the form of OCD that manifests as excessive religious fear, guilt, and compulsive confessing — uses the language of holiness but is driven by the neurological mechanism of OCD, not by genuine conviction. The anxiety, intrusive thoughts, and compulsive rituals are symptoms of a disorder, not signs of greater spiritual sensitivity. They require clinical treatment, not more religious effort.",
  },
  {
    title: "God's Forgiveness Is Not Contingent on Your Certainty",
    verse: "Romans 8:1",
    text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\" Scrupulosity creates an infinite loop: confess, feel temporarily relieved, fear you did not confess correctly or completely, confess again. But the basis of forgiveness is not the accuracy or completeness of confession — it is the completed work of Christ. Compulsive re-confessing is a symptom of OCD's need for certainty, not a spiritual act. The church that encourages more confession as the cure is unknowingly feeding the disorder.",
  },
  {
    title: "God Is Not a Perfectionist Waiting for You to Get It Right",
    verse: "Psalm 103:13–14",
    text: "\"As a father has compassion on his children, so the LORD has compassion on those who fear him; for he knows how we are formed, he remembers that we are dust.\" God's compassion toward his children is modeled on a father who knows the limitations of what he made. The God of Scripture does not demand perfection from those made of dust. The inner critic of scrupulosity is not God's voice — it is the OCD voice using God's language.",
  },
  {
    title: "The Intrusive Thoughts Are Not Your True Self",
    verse: "Romans 7:15–17",
    text: "\"I do not understand what I do. For what I want to do I do not do, but what I hate I do... Now if I do what I do not want to do, it is no longer I who do it, but it is sin living in me that does it.\" Paul's description of the war within the self resonates with OCD sufferers who experience ego-dystonic intrusive thoughts — thoughts that feel foreign, repulsive, and contrary to who they are. The intrusive thought about blasphemy, harm, or sexual content is not what you actually believe or desire. It is the OCD mechanism producing unwanted content.",
  },
  {
    title: "Healing Requires Tolerating Uncertainty — This Is Faith",
    verse: "Hebrews 11:1",
    text: "\"Now faith is confidence in what we hope for and assurance about what we do not see.\" Faith has always involved living without certainty. The ERP treatment for OCD — learning to tolerate uncertainty without performing compulsions — is not unspiritual. It is, in a clinical frame, a form of faith: acting as if God's forgiveness is sufficient without demanding the certainty-feeling that OCD demands. Recovery from scrupulosity and the practice of genuine faith move in the same direction.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Michael Emlet",
    role: "Christian Counseling and Educational Foundation, Author",
    quote: "Scrupulosity is not a sign of greater love for God. It is a sign that OCD has colonized religious content — and it responds to OCD treatment, not to more religious effort.",
    bio: "Emlet has written some of the most careful Christian literature on OCD and scrupulosity, helping pastors and counselors distinguish between genuine spiritual conviction and the neurological disorder of OCD.",
  },
  {
    id: 2,
    name: "Dr. Jonathan Abramowitz",
    role: "OCD Researcher, Author of Getting Over OCD",
    quote: "The core of ERP for scrupulosity is learning to act on faith — to refuse the compulsion and trust that the feared consequence will not occur, even when uncertainty remains.",
    bio: "Abramowitz is one of the leading clinical researchers on OCD treatment, and has written specifically on scrupulosity and how standard ERP principles apply in religious contexts.",
  },
  {
    id: 3,
    name: "Scott Symington",
    role: "Psychologist, Author of Freedom from Anxious Thoughts and Feelings",
    quote: "The intrusive thought is not you. What defines your character is not the thought's content — it is what you do with it.",
    bio: "Symington's Christian-informed approach to intrusive thought and OCD has provided a framework that integrates faith and clinical practice in ways accessible to both sufferers and their pastors.",
  },
  {
    id: 4,
    name: "Dr. Ian Osborn",
    role: "Author, Can Christianity Cure Obsessive-Compulsive Disorder?",
    quote: "Luther, Bunyan, and Ignatius all appear to have had OCD. The church has not historically understood scrupulosity as a medical condition — and this has cost OCD sufferers enormously.",
    bio: "Osborn's historical and clinical work traces scrupulosity through church history — including in famous figures like Martin Luther and John Bunyan — and argues for an integrated faith-and-medicine approach to treatment.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Get an OCD-Specialist Therapist",
    text: "Standard therapy frequently makes OCD worse by providing more reassurance. You need a therapist trained in Exposure and Response Prevention (ERP), the gold-standard OCD treatment. Use the IOCDF therapist finder (iocdf.org) to locate ERP specialists in your area.",
  },
  {
    icon: "🛑",
    title: "Stop the Reassurance Loop",
    text: "Seeking reassurance — from pastors, from God through more prayer, from family, from repeated Scripture reading — provides temporary relief but strengthens the OCD cycle. The therapist's goal is to help you tolerate uncertainty without reassurance-seeking. This is counterintuitive but essential.",
  },
  {
    icon: "💊",
    title: "Consider Medication Evaluation",
    text: "SSRIs (particularly at higher doses) have the strongest evidence base for OCD and significantly improve treatment outcomes when combined with ERP. A psychiatrist can evaluate whether medication is appropriate. Medication is not a spiritual shortcut — it is a tool.",
  },
  {
    icon: "📚",
    title: "Read About OCD and Scrupulosity",
    text: "Read Can Christianity Cure OCD? by Osborn, or Scrupulosity by Michael Emlet. Understanding that scrupulosity is a recognized form of OCD — with a well-established treatment protocol — dramatically reduces shame and confusion about what you are experiencing.",
  },
  {
    icon: "🗣️",
    title: "Brief Your Pastor Carefully",
    text: "Well-meaning pastors frequently make scrupulosity worse by encouraging more confession, more prayer, or more spiritual effort. Help your pastor understand that you have OCD, and that reassurance-based pastoral care feeds the disorder. Give them resources to read.",
  },
  {
    icon: "🤝",
    title: "Find OCD Community",
    text: "The International OCD Foundation (iocdf.org) offers support groups, online communities, and an annual conference. Connecting with others who have OCD — including scrupulosity — breaks the shame and isolation that the disorder creates.",
  },
];

const scriptures = [
  { verse: "1 John 3:20", text: "\"If our hearts condemn us, we know that God is greater than our hearts, and he knows everything.\"" },
  { verse: "Isaiah 26:3", text: "\"You will keep in perfect peace those whose minds are steadfast, because they trust in you.\"" },
  { verse: "Philippians 4:6–7", text: "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\"" },
  { verse: "2 Timothy 1:7", text: "\"For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
];

type ScrupulosityEntry = {
  id: string;
  date: string;
  trigger: string;
  resist: string;
  prayer: string;
};

export default function OcdScrupulosityFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ScrupulosityEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [resist, setResist] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_ocdscrupulosityfaith_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: ScrupulosityEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      trigger,
      resist,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ocdscrupulosityfaith_entries", JSON.stringify(updated));
    setTrigger(""); setResist(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ocdscrupulosityfaith_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔮</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            OCD, Scrupulosity & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christians whose OCD has taken religious form — the intrusive blasphemous thoughts, the compulsive confession, the terror of never being forgiven enough — pastoral and clinical clarity on what this is, what it is not, and what actually helps.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>IOCDF ERP Therapist Finder:</strong> iocdf.org | <strong>OCD Support:</strong> iocdf.org/support-groups
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "0.75rem", padding: "0.75rem", background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8 }}>
                <p style={{ color: MUTED, fontSize: "0.8rem", margin: 0 }}>Note: For OCD recovery, avoid using this journal to seek reassurance or re-examine intrusive thoughts. Use it to track your ERP practice and resistance of compulsions.</p>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What OCD trigger or intrusive thought showed up today?</label>
                <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>Did I resist the compulsion? What did resistance look like?</label>
                <textarea value={resist} onChange={e => setResist(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A brief, non-reassurance prayer (e.g., "Lord, I trust you even in uncertainty"):</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Trigger:</strong> {e.trigger}</p>}
                {e.resist && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Resistance:</strong> {e.resist}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="SHm8-e0DXZM" title="OCD and Scrupulosity — What It Is and How ERP Treats It" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>OCD and Scrupulosity: What It Is and How ERP Treats It</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical overview of scrupulosity as a form of OCD and the evidence-based treatment that works</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="t4oL3Ad5SaY" title="Martin Luther and Scrupulosity — A Historical Case Study" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Martin Luther and Scrupulosity: OCD in Church History</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How Luther's religious torment appears to have been OCD scrupulosity — and what this means for Christian sufferers today</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="vZRHhpwqv4Y" title="Intrusive Thoughts and OCD — They Are Not Your True Self" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Intrusive Thoughts Are Not You: OCD and Self-Understanding</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical and theological perspective on why intrusive OCD thoughts do not reflect your true beliefs or desires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="e01mBLHkJ_o" title="How to Brief Your Pastor About OCD and Scrupulosity" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>How to Talk to Your Pastor About OCD</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Guidance on how to help pastors understand scrupulosity and avoid pastoral responses that worsen the disorder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
