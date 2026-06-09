"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "David Was Hunted by His Own Community and Still Praised God", verse: "Psalm 57:1-2", text: "Have mercy on me, my God, have mercy on me, for in you I take refuge. I will take refuge in the shadow of your wings until the disaster has passed. I cry out to God Most High, to God, who vindicates me. Psalm 57 was written while David was hiding from King Saul — targeted, hunted, and betrayed by his own institution. His prayer does not begin with strategy or self-defense; it begins with refuge and cry. This is the model for those who are being mobbed in a workplace: bring the disaster to God first." },
  { title: "God Sees Coordinated Injustice and Is Not Passive Toward It", verse: "Psalm 35:11-12", text: "Ruthless witnesses come forward; they question me on things I know nothing about. They repay me evil for good and leave me like one bereaved of family. This psalm describes coordinated false testimony — witnesses who collaborate against an innocent person. It is one of the most direct descriptions of workplace mobbing in the Psalms. The psalmist's response is not retaliation but appeal to God: 'O Lord, how long will you look on?' (v.17). God is addressed as the one who will ultimately adjudicate." },
  { title: "Injustice Done to You Is Witnessed by the Living God', verse: '2 Corinthians 4:2", text: "We have renounced secret and shameful ways; we do not use deception, nor do we distort the word of God. On the contrary, by setting forth the truth plainly we commend ourselves to everyone's conscience in the sight of God. Paul's appeal is to God's sight — not to institutional vindication. When workplace systems fail, when HR sides with the perpetrators, when the institution covers for the mob — the appeal is to a higher witness. God's sight does not depend on institutional transparency." },
  { title: "Forgiveness Does Not Require Continued Exposure to Harm", verse: "Matthew 10:14-16", text: "If anyone will not welcome you or listen to your words, leave that home or town and shake the dust off your feet. Be as shrewd as snakes and as innocent as doves. Jesus sends his disciples out with explicit instructions to leave situations that are unsafe for them. This is not unfaithfulness — it is wisdom. The forgiveness of those who have mobbed you does not require your continued presence in the environment where they operate. Prudence and forgiveness are not in tension." },
  { title: "God Is the Ultimate Defender of the Falsely Accused', verse: 'Proverbs 22:22-23", text: "Do not exploit the poor because they are poor and do not crush the needy in court, for the Lord will take up their case and will exact life for life. God's posture toward those who are crushed in institutional settings is not neutrality. He takes up their case. This is not a promise of immediate institutional vindication — but it is a promise of ultimate advocacy. The one who is being mobbed and who has no institutional recourse has a God who will not abandon them." },
];

const voices = [
  { id: "v1", name: "Leah Rohlfing Schulte", role: "Workplace trauma researcher, author of Healing the Workplace", quote: "Workplace mobbing is a form of group trauma. It produces PTSD symptoms, depression, physical illness, and spiritual crisis. The church often has no framework for it because we have not been honest about how profoundly workplaces can harm people.", bio: "Leah Rohlfing Schulte's research on workplace mobbing documents the psychological and spiritual dimensions of coordinated workplace harassment. Her work provides a clinical framework for what is often dismissed as office politics — and her findings have shaped both therapeutic and pastoral responses to workplace trauma." },
  { id: "v2", name: "Dan Allender", role: "Author of The Wounded Heart, Sabbath, trauma counselor", quote: "Workplace mobbing attacks not just the job but the person's sense of goodness, competence, and belonging. It is a profound relational trauma — and it requires a relational healing, not merely a strategic one.", bio: "Dan Allender's work on trauma and relational healing provides a framework for understanding why workplace mobbing is so devastating: it combines professional destruction with social betrayal and institutional abandonment. His therapeutic and theological approach addresses all three dimensions." },
  { id: "v3", name: "N.T. Wright", role: "Anglican bishop, author of Evil and the Justice of God", quote: "Evil, when organized, becomes systemic. And systemic evil requires not just individual courage but the hope of a God who will ultimately set things right. That hope is not passive. It is what makes resistance possible.", bio: "N.T. Wright's theological work on evil, injustice, and justice provides a framework for understanding coordinated workplace harm as a form of systemic evil — not merely personal conflict — and for locating the Christian response in the larger narrative of God's justice." },
  { id: "v4", name: "Diane Langberg", role: "Clinical psychologist, author of Suffering and the Heart of God", quote: "Institutional abuse — whether in a church, a ministry, or a workplace — produces the same psychological wounds as other forms of abuse. The betrayal by a trusted institution adds a specific layer of devastation to the harm done by individuals within it.", bio: "Diane Langberg's work on institutional abuse and its psychological dimensions directly addresses workplace mobbing as a form of systemic harm. She emphasizes that recovery requires both clinical treatment of the trauma and an honest reckoning with the institutional failure — neither alone is sufficient." },
];

const practices = [
  { icon: "📋", title: "Document Everything From the Beginning", text: "Workplace mobbing is difficult to prove precisely because it is coordinated and deniable. Begin documenting immediately — dates, times, what was said, who was present, and your response. Keep documentation outside of work systems (on personal devices). If you are ever in an HR process or legal proceeding, this documentation is invaluable." },
  { icon: "⚖️", title: "Consult an Employment Attorney Early", text: "Many people wait too long to consult an attorney and lose legal options because of statutes of limitations. An initial consultation with an employment attorney — even if you decide not to pursue legal action — clarifies your rights, the strength of your case, and the options available to you. Many consultations are free or low-cost." },
  { icon: "🏥", title: "Seek Clinical Treatment for Workplace PTSD", text: "Workplace mobbing produces PTSD symptoms — hypervigilance, intrusive memories, sleep disruption, loss of concentration — that respond to clinical treatment. Seeking a therapist trained in trauma (EMDR, CPT, or somatic therapies) addresses the neurological impact of sustained workplace harm. Do not wait for the situation to resolve before seeking treatment." },
  { icon: "🤝", title: "Protect Your Closest Relationships From the Contamination of the Situation", text: "Workplace mobbing consumes enormous mental and emotional bandwidth. Many people find that it begins to contaminate their marriages, friendships, and family relationships. Intentionally protecting those relationships — limiting how much you process the workplace situation in every conversation — prevents secondary damage that outlasts the original situation." },
  { icon: "📖", title: "Pray the Imprecatory Psalms Without Apology", text: "Psalms 35, 55, 58, and 69 are prayers for vindication against enemies who are actively coordinating harm. They name perpetrators, describe injustice, and appeal to God for justice. These psalms are not spiritually inferior to psalms of praise — they are the scriptural permission to bring the full weight of injustice to God in prayer, including the anger that injustice produces." },
  { icon: "🚪", title: "Consider Whether Staying Is the Right Form of Resistance", text: "The decision to stay and fight or to leave is complex and personal. Staying can be the right form of resistance — particularly if leaving would reward the mob and harm others. But staying can also extend harm without producing change. A counselor, spiritual director, or trusted mentor can help you discern which choice serves your long-term wellbeing and aligns with your calling." },
];

const scriptures = [
  { verse: "Psalm 35:23-24", text: "Awake, and rise to my defense! Contend for me, my God and Lord. Vindicate me in your righteousness, Lord my God; do not let them gloat over me." },
  { verse: "Romans 12:17-19", text: "Do not repay anyone evil for evil... Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: 'It is mine to avenge; I will repay,' says the Lord." },
  { verse: "Psalm 57:1", text: "Have mercy on me, my God, have mercy on me, for in you I take refuge. I will take refuge in the shadow of your wings until the disaster has passed." },
  { verse: "Isaiah 54:17", text: "No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord." },
  { verse: "2 Corinthians 4:8-9", text: "We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed." },
];

type MobbingEntry = { id: string; date: string; incident: string; anchor: string; step: string };

export default function WorkplaceMobbingFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MobbingEntry[]>([]);
  const [incident, setIncident] = useState(""), [anchor, setAnchor] = useState(""), [step, setStep] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_workplacemobbingj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!incident.trim()) return;
    const e: MobbingEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), incident: incident.trim(), anchor: anchor.trim(), step: step.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_workplacemobbingj_entries", JSON.stringify(updated));
    setIncident(""); setAnchor(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_workplacemobbingj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Workplace Mobbing and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For Christians experiencing coordinated workplace harassment — the targeting, isolation, and reputational destruction that groups can organize against an individual — and for the church learning to take workplace harm seriously.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; EEOC (employment rights): eeoc.gov &nbsp;|&nbsp; NAMI: 1-800-950-6264</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What has happened recently that you need to document and pray through?</label>
              <textarea value={incident} onChange={e => setIncident(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Date, what occurred, who was involved..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What theological truth or Scripture is anchoring you?</label>
              <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="The promise or truth you are holding onto..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is your next wisest step?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Legal, practical, relational, spiritual..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Incident:</strong> {e.incident}</p>
                {e.anchor && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Anchor:</strong> {e.anchor}</p>}
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZwDlGPCEUoE", title: "Healing Relational Trauma", channel: "Dan Allender", description: "Allender on recovering from relational betrayal and coordinated harm — directly applicable to the experience of being targeted by a workplace group." },
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It Is So Hard", channel: "Timothy Keller", description: "Keller on the theology and psychology of forgiving those who have done intentional, sustained harm — essential for those processing workplace mobbing." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Compassion Fatigue, and the Church", channel: "Diane Langberg", description: "Langberg on the psychological wounds produced by sustained, coordinated harm — including the specific way institutional betrayal compounds individual harm." },
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop on lament as the biblical response to injustice — the practice of bringing the full weight of coordinated harm to God in honest prayer." },
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
