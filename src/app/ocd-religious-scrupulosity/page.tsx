"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Scrupulosity Is Not Holiness — It Is Illness",
    verse: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus. Scrupulosity — the OCD subtype in which obsessive thoughts focus on sin, blasphemy, moral failure, and eternal damnation — is not an advanced form of holiness. It is a neurological disorder that uses religious content to fuel the anxiety cycle. The constant fear of condemnation is the opposite of what Paul announces: no condemnation.",
  },
  {
    title: "God Is Not the Source of the Intrusive Thoughts",
    verse: "1 Corinthians 14:33",
    text: "For God is not a God of disorder but of peace. The intrusive thoughts of OCD — blasphemous images, doubt about salvation, fears of having committed the unforgivable sin — are not communication from God. God is not a God of disorder. The OCD mind generates these thoughts involuntarily. They are symptoms, not sins. They are not revealing what you truly want or believe.",
  },
  {
    title: "The Fearful and the Doubting Are Also Welcome",
    verse: "Jude 1:22",
    text: "Be merciful to those who doubt. The person who cannot stop doubting their salvation, who cannot trust their confession, who must pray the same prayer again and again to achieve temporary relief — this person is included in the New Testament's category of those who receive mercy, not condemnation.",
  },
  {
    title: "True Repentance Does Not Loop",
    verse: "2 Corinthians 7:10",
    text: "Godly sorrow brings repentance that leads to salvation and leaves no regret. Genuine repentance, Paul says, leads somewhere — to salvation, to freedom, and leaves no regret. The compulsive, looping confession of scrupulosity — confessing the same sin repeatedly, never reaching resolution, always returning — is not godly sorrow. It is the OCD cycle using religious vocabulary.",
  },
  {
    title: "Grace Is Not Earned by the Intensity of Your Fear",
    verse: "Ephesians 2:8–9",
    text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast. Grace is received, not achieved. The scrupulous person often experiences religious practice as a performance that must meet a hidden standard to produce safety. The gospel interrupts this: your safety is given, not earned. Your fear does not add to it. Your confession does not produce it.",
  },
];

const voices = [
  {
    id: "v1",
    name: "Jonathan Abramowitz",
    role: "OCD psychologist, leading scrupulosity researcher",
    quote: "Scrupulosity is OCD wearing religious clothes. The mechanism is identical: intrusive thought, anxiety spike, compulsive response (prayer, confession, reassurance-seeking), temporary relief, return of the intrusive thought with greater intensity. Treatment is ERP, not more fervent religious practice.",
    bio: "Jonathan Abramowitz is one of the leading researchers on scrupulosity and OCD. His work has documented that reassurance-seeking, additional confession, and increased religious practice typically worsen rather than improve scrupulosity — because they reinforce the OCD cycle rather than breaking it.",
  },
  {
    id: "v2",
    name: "Ethan Kuch",
    role: "Author, Overcoming Scrupulosity",
    quote: "I spent years wondering if I was saved. I confessed the same sins daily. I asked pastors for reassurance and was temporarily relieved until the next intrusive thought. No one told me I had OCD. They told me to have more faith. More faith made it worse.",
    bio: "Ethan Kuch (Overcoming Scrupulosity) writes from personal experience of religious OCD and recovery. His work helps Christians understand that scrupulosity is a clinical condition, that well-meaning pastoral advice can worsen it, and that ERP therapy is the evidence-based treatment.",
  },
  {
    id: "v3",
    name: "Ian Osborn",
    role: "Psychiatrist, author, Can Christianity Cure Obsessive-Compulsive Disorder?",
    quote: "Martin Luther almost certainly had OCD with scrupulosity. John Bunyan almost certainly had OCD with scrupulosity. Ignatius of Loyola almost certainly had OCD with scrupulosity. The Christian tradition has a long history of profoundly devout people suffering from this exact condition. You are in good company.",
    bio: "Ian Osborn (Can Christianity Cure Obsessive-Compulsive Disorder?) documents the history of OCD in Christian tradition and argues for an integration of Christian faith and ERP treatment. His historical perspective places the scrupulous believer in a long line of faith-filled people who suffered and survived this exact condition.",
  },
  {
    id: "v4",
    name: "Curt Thompson",
    role: "Christian psychiatrist, author",
    quote: "The anxious mind does not trust. OCD is an extreme version of this: a mind that cannot rest in the assurance it has been given, that must keep checking, keep confessing, keep seeking certainty that cannot be found through the OCD cycle itself. Healing requires learning to tolerate uncertainty — which is the same skill that faith requires.",
    bio: "Curt Thompson (Anatomy of the Soul, The Soul of Shame) integrates interpersonal neurobiology with Christian theology. His work on anxiety and the OCD cycle is essential for Christians who need to understand both the neurological mechanism of scrupulosity and the spiritual dimensions of learning to rest in grace.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Seek an OCD Specialist — Not Just a General Therapist",
    text: "OCD requires a specific treatment: Exposure and Response Prevention (ERP). Most therapists are not trained in ERP. Find an OCD specialist through the International OCD Foundation (iocdf.org). Tell them explicitly that your OCD has religious content. A good OCD specialist will work with your faith, not against it.",
  },
  {
    icon: "🔄",
    title: "Understand the Compulsion Cycle You Are In",
    text: "The OCD cycle: intrusive thought (sin/blasphemy/damnation) → anxiety → compulsion (prayer, confession, reassurance-seeking, avoidance) → temporary relief → return of thought with greater intensity. Every compulsion feeds the cycle. ERP works by resisting the compulsion and tolerating the anxiety until it naturally subsides.",
  },
  {
    icon: "🚫",
    title: "Stop Seeking Reassurance — Even From Pastors",
    text: "Reassurance-seeking (asking pastors if you're saved, confessing the same sin multiple times, re-reading Scripture for certainty) is a compulsion. It provides temporary relief and permanently worsens the cycle. Pastors who provide reassurance to scrupulous Christians are, with good intentions, feeding the OCD. Ask your OCD therapist and your pastor to work together.",
  },
  {
    icon: "📖",
    title: "Sit With Romans 8:1 Without Seeking Certainty",
    text: "For the scrupulous Christian, the goal is not to feel certain of Romans 8:1. It is to take Romans 8:1 as received truth and act on it regardless of how you feel. This is faith — not certainty, but action on what has been given. The feeling of certainty you are seeking through compulsion will not come through the compulsion. It comes through resting in what has already been declared.",
  },
  {
    icon: "💊",
    title: "Consider Medication",
    text: "SSRIs have strong evidence for OCD and are sometimes essential for treatment to be effective. Medication reduces the intensity of the intrusive thoughts enough for ERP to work. Discuss this with a psychiatrist, not just a primary care physician. This is a medical treatment for a medical condition.",
  },
  {
    icon: "🤝",
    title: "Find Others with Scrupulosity",
    text: "The isolation of scrupulosity in Christian communities — where others assume more fervent prayer will fix what you have — is profound. The IOCDF online community, scrupulosity-specific support groups, and recovery communities for religious OCD connect you with people who understand exactly what you are navigating.",
  },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Ephesians 2:8–9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "Isaiah 26:3", text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you." },
  { verse: "Philippians 4:6–7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Jude 1:22", text: "Be merciful to those who doubt." },
];

type ScrupEntry = { id: string; date: string; thought: string; resisted: string; truth: string };

export default function OcdReligiousScrupulosityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ScrupEntry[]>([]);
  const [thought, setThought] = useState("");
  const [resisted, setResisted] = useState("");
  const [truth, setTruth] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vine_ocdscrupulosityj_entries");
      if (stored) setEntries(JSON.parse(stored));
    } catch {}
  }, []);

  function saveEntry() {
    if (!thought.trim()) return;
    const entry: ScrupEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      thought,
      resisted,
      truth,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ocdscrupulosityj_entries", JSON.stringify(updated));
    setThought(""); setResisted(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ocdscrupulosityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>OCD & Faith</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Religious OCD and Scrupulosity
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          For Christians who cannot stop confessing, cannot feel forgiven, cannot stop fearing the unforgivable sin, or whose faith is hijacked by obsessive religious doubt. Scrupulosity is OCD — not advanced holiness. There is treatment, and there is grace.
        </p>

        <div style={{ background: "#1a0a2a", border: "1px solid #3a1a5a", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#e07070", fontWeight: 700, marginBottom: "0.25rem", fontSize: "0.9rem" }}>If you are in crisis</p>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>
            988 Suicide & Crisis Lifeline (call or text 988) &nbsp;·&nbsp; International OCD Foundation: <span style={{ color: PURPLE }}>iocdf.org</span> &nbsp;·&nbsp; NOCD (online OCD therapy): <span style={{ color: PURPLE }}>nocdhelp.com</span>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.45rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t) => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{t.verse}</p>
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
                <p style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</p>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0" }}>
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
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.4rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: "1rem" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What intrusive thought is loudest right now — describe it without seeking reassurance.</label>
                <textarea value={thought} onChange={(e) => setThought(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>What compulsion did you resist today? What happened to the anxiety?</label>
                <textarea value={resisted} onChange={(e) => setResisted(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>State Romans 8:1 as a fact — not a feeling — for today.</label>
                <textarea value={truth} onChange={(e) => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.6rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.thought && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Thought:</strong> {e.thought}</p>}
                {e.resisted && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.35rem", lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Resisted:</strong> {e.resisted}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: MUTED }}>Truth:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Religious OCD and Scrupulosity", channel: "International OCD Foundation", description: "IOCDF overview of religious OCD and scrupulosity — how it works, why more prayer worsens it, and what ERP treatment involves. Essential orientation for anyone who suspects they have this condition." },
              { videoId: "j2h-q3ZPKFI", title: "OCD in the Church: Grace for the Afflicted", channel: "Matthew Stanford", description: "Matthew Stanford on how churches often inadvertently worsen OCD by providing reassurance, and what pastors and congregations need to know about supporting someone with religious OCD." },
              { videoId: "NnGBhG03g4M", title: "ERP for OCD: How It Works", channel: "NOCD", description: "Introduction to Exposure and Response Prevention therapy — the evidence-based treatment for OCD. Understanding how ERP works helps scrupulous Christians navigate treatment with their faith intact." },
              { videoId: "4yRlBMcNNjY", title: "Grace, Certainty, and Faith", channel: "N.T. Wright", description: "Wright on the nature of faith as trust rather than certainty — the theological framework that makes ERP treatment compatible with Christian faith rather than threatening to it." },
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
    </main>
      <Footer />
    </>
  );
}
