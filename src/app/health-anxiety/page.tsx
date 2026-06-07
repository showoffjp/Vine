"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Body Is a Gift — Not a Source of Ultimate Safety", verse: "Psalm 31:14-15", text: "But I trust in you, Lord; I say, 'You are my God.' My times are in your hands. Health anxiety often involves the belief that the body must be monitored and controlled to avoid catastrophe. This is a theological problem: it places ultimate safety in the proper management of the body rather than in God. The psalmist's declaration — my times are in your hands — is a specific surrender of what health anxiety most desperately tries to control. God holds the body and its times, not the anxious watcher." },
  { title: "Seeking Reassurance Is Not the Same as Seeking God", verse: "Matthew 6:27", text: "Can any one of you by worrying add a single hour to your life? The reassurance cycle is a defining feature of health anxiety: check body, feel anxiety, seek reassurance (doctor, Google, loved one), feel temporary relief, anxiety returns amplified. Jesus' question — can worry add hours to life? — exposes the futility of the cycle. Reassurance-seeking does not resolve health anxiety; it feeds it. Seeking God is categorically different from seeking reassurance, and only one of them actually helps." },
  { title: "God's Sovereignty Over Illness Does Not Require Us to Detect Every Threat", verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. The peace described here is peace that transcends understanding — including the understanding that comes from exhaustive bodily monitoring. God's peace is not the product of having verified that nothing is wrong. It is available in the presence of unverified threat, presented to God in prayer." },
  { title: "Fear of Death Is the Root Most Health Anxiety Grows From", verse: "Hebrews 2:14-15", text: "He too shared in their humanity so that by his death he might break the power of him who holds the power of death — that is, the devil — and free those who all their lives were held in slavery by their fear of death. The writer to the Hebrews identifies fear of death as a form of slavery. Health anxiety is often, at its core, death anxiety wearing the mask of symptom-monitoring. The theological solution is the same: Jesus has broken the power of death. This does not make death pleasant or illness painless — it makes them unable to hold ultimate authority over those who belong to Christ." },
  { title: "The Body Is Mortal — and That Is Part of God's Plan", verse: "2 Corinthians 4:16-17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. The Christian framework holds the body's mortality honestly rather than fighting its acknowledgment. Outwardly wasting away is real; inwardly renewed is real; eternal glory is the frame. Health anxiety resists the first truth; the gospel asks us to hold all three. The body will fail. That is not outside God's plan — it is part of it." },
];

const voices = [
  { id: "ew", name: "Ed Welch", role: "CCEF, Author of Running Scared", quote: "Health anxiety is fear wearing a medical costume. Underneath the symptom-checking and doctor visits and Google searches is a heart that has decided that safety must be earned through vigilance. The gospel offers something radically different: safety already secured by someone else, through a death and resurrection that vigilance cannot add to.", bio: "Welch's work on anxiety disorders from a Christian counseling perspective is among the most practically helpful. His ability to identify the theological core of anxiety (disordered desire for safety, fear of suffering, functional atheism) while respecting its clinical reality makes him the most important Christian voice on this topic." },
  { id: "jt", name: "Jonathan Abramowitz", role: "Professor of Psychology, UNC; Anxiety Specialist", quote: "Health anxiety is maintained by the very behaviors designed to reduce it — checking, reassurance seeking, avoidance. Exposure and response prevention works not by convincing the person they aren't ill, but by teaching the brain that uncertainty can be tolerated without the safety behaviors. Tolerance of uncertainty is the therapeutic target.", bio: "Abramowitz is among the leading researchers on health anxiety and OCD. His work on ERP for health anxiety provides the clinical foundation for why reassurance-seeking makes health anxiety worse over time, and why tolerating uncertainty — rather than resolving it — is the path to recovery." },
  { id: "kb", name: "Kate Bowler", role: "Duke Divinity Professor, Author of Everything Happens for a Reason (And Other Lies I've Loved)", quote: "I had stage IV cancer at thirty-five, and I spent a lot of energy before my diagnosis trying to manage my mortality through the right behaviors and the right prayers. What I found after the diagnosis is that the Christianity that works is not the one that promises safety — it's the one that accompanies you when safety has been taken away.", bio: "Bowler's combination of scholarly work on prosperity theology and personal cancer memoir gives her a unique vantage point on health anxiety and control. Her voice offers both the critique of the theology that drives health anxiety and the testimony of what faith looks like when bodily control is lost." },
];

const practices = [
  { icon: "🧠", title: "Understand the Reassurance Cycle — and Begin Breaking It", text: "Health anxiety's clinical mechanism: symptom noticed → anxiety spikes → reassurance sought (Googling, doctor visit, asking loved ones) → temporary relief → anxiety returns higher than before. Reassurance-seeking is not a solution; it is the fuel. The counterintuitive treatment is not more reassurance but less — tolerating the uncertainty until the anxiety habituates on its own. Begin by noticing when you are seeking reassurance, tracking it, and experimenting with delaying it by even a few minutes." },
  { icon: "🛑", title: "Implement a Google and Symptom-Checking Pause", text: "Searching symptoms online — with any search engine or AI tool — is one of the most powerful amplifiers of health anxiety. The algorithm surfaces worst-case information disproportionately. Consider a specific rule: when you feel the urge to Google a symptom, implement a 24-hour waiting rule. Write down the symptom and the date; if the symptom is still present and concerning 24 hours later, call a doctor (not Google). This one practice alone can significantly interrupt the cycle." },
  { icon: "🤝", title: "Work With a CBT or ERP Therapist", text: "Cognitive Behavioral Therapy and Exposure and Response Prevention are the most evidence-supported treatments for health anxiety. A therapist will help you: identify your specific triggering symptoms, map your checking/avoidance behaviors, design graduated exposures to tolerated uncertainty, and develop a relationship with bodily sensations that doesn't require immediate action. Health anxiety responds well to treatment — but it requires the right treatment, not just reassurance." },
  { icon: "⏱️", title: "Set a Timed Worry Window", text: "One evidence-based technique: if health-related anxiety thoughts arise throughout the day, defer them. Tell yourself: 'I'll think about this at 7pm.' Then when 7pm arrives, spend 15 focused minutes with the worry — and then close it. This creates a contained space for anxiety's voice without letting it run all day. The practice reinforces that the thought is not an emergency requiring immediate action, and that you can tolerate its deferral." },
  { icon: "✝️", title: "Pray With Open Hands — Not as Reassurance-Seeking", text: "Prayer can become a form of reassurance-seeking: asking God repeatedly for the same reassurance that the body is okay, treating silence as danger. The alternative is surrendered prayer: placing the uncertainty in God's hands rather than seeking a specific answer from God's hands. Julian of Norwich prayed, 'All shall be well, and all shall be well, and all manner of thing shall be well' — not as a factual claim about earthly bodies, but as a trust in the One who holds them. This is the prayer that health anxiety most needs." },
];

const scriptures = [
  { verse: "Psalm 31:14-15", text: "But I trust in you, Lord; I say, 'You are my God.' My times are in your hands." },
  { verse: "Matthew 6:27", text: "Can any one of you by worrying add a single hour to your life?" },
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "2 Corinthians 4:16-17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Hebrews 2:15", text: "And free those who all their lives were held in slavery by their fear of death." },
  { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
];


type HAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function HealthAnxietyPage() {
  const [tab, setTab] = useState("theology");
  const [haJournal, setHaJournal] = useState<HAEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_healthanxietyj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_healthanxietyj_entries", JSON.stringify(haJournal)); } catch {}
  }, [haJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setHaJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setHaJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Mental Health &amp; Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Health Anxiety</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When fear of illness consumes the mind — finding theological grounding and clinical help for anxiety centered on the body.
        </p>
        <div style={{ background: "#2a1a1a", border: "1px solid #5a2a2a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
          <strong>Resources:</strong> ADAA (adaa.org) · NAMI 1-800-950-6264 · Crisis Line 988 · CCEF (ccef.org) for Christian counseling
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="What symptom or fear is consuming my attention right now?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What truth about God's sovereignty can I hold here?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One reassurance-seeking behavior I'll delay or resist today" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {haJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : haJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Fear:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller explores how honest, specific prayer — not the avoidance of anxiety — is the biblical pathway through fear. Grounds the Philippians 4 prescription in the practice of lament and trust." },
              { videoId: "7_CGP-12AE0", title: "Peace: Overcoming Anxiety", channel: "Tim Keller", description: "A theological treatment of Christian peace — not as the absence of threat but as settled confidence in God that the world cannot give or remove. Directly relevant to the anxiety-about-health cycle." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame and the Body", channel: "Curt Thompson", description: "Thompson on interpersonal neurobiology and anxiety — how the nervous system's threat-detection system is involved in both shame and health anxiety, and what healing looks like neurologically and spiritually." },
              { videoId: "OqwbFGoRYVo", title: "Peace", channel: "Tim Keller", description: "Keller shows that the Christian peace available in Christ is categorically different from the absence of problems — including the absence of health threats — and why the sovereignty of God changes everything." },
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
