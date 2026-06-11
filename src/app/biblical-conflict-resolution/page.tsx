"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Matthew 18:15-20 — The Process Jesus Gave His Church", verse: "Matthew 18:15-17", text: "If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over. But if they will not listen, take one or two others along. The Matthew 18 process is the most specific and practical teaching in the New Testament on conflict resolution between Christians. It has three stages: direct private conversation (step 1), small group mediation (step 2), and church involvement (step 3). The sequence is important: most conflicts should and can be resolved privately. Taking a dispute to the community before attempting direct conversation violates both the process and the spirit of reconciliation. The goal of every step is restoration, not punishment." },
  { title: "Peacemakers Not Peacekeepers — the Crucial Distinction", verse: "Matthew 5:9", text: "Blessed are the peacemakers, for they will be called children of God. Peacemaking is not the same as peacekeeping. The peacekeeper avoids conflict at all costs, suppressing grievances to maintain surface harmony. The peacemaker addresses conflict honestly and redemptively for the sake of genuine restoration. Jesus's beatitude blesses peacemakers, not those who pretend conflict doesn't exist. Peacekeeping can be a form of cowardice or people-pleasing that allows wrongs to fester. Genuine peace — shalom — requires truth-telling, not just tension-avoidance. Many Christians have confused the two and ended up with cold, unresolved relationships that they call peace." },
  { title: "The Beam in Your Eye — Self-Examination Before Confrontation", verse: "Matthew 7:3-5", text: "Why do you look at the speck of sawdust in your brother's eye and pay no attention to the plank in your own eye? Before addressing another person's wrong, Jesus commands ruthless self-examination. The person going to confront must ask: Am I seeing this clearly? Have I contributed to this situation? Is there a log in my own eye that would distort my assessment of the speck I see? This is not an excuse for avoiding the confrontation — Jesus assumes the speck is real and that removing it is the goal. It is a requirement that the confronter approach with humility, not certainty; with openness to being wrong, not the performance of judgment." },
  { title: "Forgiveness and Reconciliation — Are They the Same Thing?", verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone. Paul's concession clause is often overlooked: if it is possible, as far as it depends on you. These qualifiers acknowledge that reconciliation is not always achieved or even appropriate. Forgiveness is a unilateral act that can happen regardless of the other person's response. Reconciliation is bilateral: it requires both parties to be willing to restore the relationship. A person can and must forgive an abuser without being reconciled to them. A person can forgive a betrayer before the betrayer has demonstrated repentance. Forgiveness releases the forgiver from bitterness; reconciliation restores relationship when it is safe and appropriate." },
  { title: "Conflict as Opportunity — What Unresolved Conflict Costs and Resolved Conflict Gains", verse: "Ephesians 4:3", text: "Make every effort to keep the unity of the Spirit through the bond of peace. Paul says make every effort — this is not passive hope for unity but active pursuit of it. Unresolved conflict in the body of Christ is not merely inconvenient: it grieves the Holy Spirit (Eph 4:30), breaks the witness of the church to the world (John 17:21), and carries ongoing spiritual costs for everyone involved. But resolved conflict also produces something: deeper trust, stronger relationships, and communities that have demonstrated the gospel's power to restore what was broken. Churches and families that learn to navigate conflict well become unusually strong communities." },
];

const steps = [
  { icon: "🔍", title: "Step 1: Examine Yourself First — Log Before Speck", text: "Before any conversation, ask: What is my part in this? Have I sinned against them? Is my perception of the situation accurate, or is it distorted by hurt, pride, or past wounds? Write out what happened, your interpretation of it, and your emotional response — then ask a trusted friend to read it before you proceed. Many conflicts dissolve at this stage when we realize the offense was unintentional or that we contributed significantly. Others remain but the self-examination ensures we approach with humility." },
  { icon: "💬", title: "Step 2: Go Privately — the One-on-One Conversation", text: "Request a conversation. Do not text a grievance, email a complaint, or talk to others about the conflict before talking to the person directly. Choose the right time and place: calm, private, unhurried. Begin by describing your experience, not their character: say 'When X happened, I felt Y' rather than 'You are Z.' Listen to their response without formulating your rebuttal. The goal of this conversation is not to win but to understand each other and find a path forward. Many conflicts end here." },
  { icon: "🤝", title: "Step 3: Bring a Witness — Small Group Mediation", text: "If the private conversation does not resolve the conflict, bring one or two others along — as Matthew 18 instructs. These are not advocates for your position: they are witnesses who seek understanding and help. A trusted elder, pastor, or mutual friend who is respected by both parties is ideal. This step is rarely reached in practice, but the availability of this step changes how both parties approach step 2. Knowing that unresolved conflict will not simply be dropped but will involve others encourages genuine engagement at step 1." },
  { icon: "✝️", title: "Step 4: Forgive — Regardless of Outcome", text: "Regardless of how the conflict resolves, forgiveness is not contingent on reconciliation. Forgiveness is the decision to release the debt — to not hold the offense against the person, to give up the right to punish, to entrust justice to God. It is a decision, not a feeling, and it may need to be renewed. Many people withhold forgiveness as leverage — unconsciously believing that forgiving releases the offender from consequence. In reality, withholding forgiveness primarily injures the person withholding it, creating a bitterness that Jesus compared to drinking poison hoping the other person dies." },
  { icon: "🌱", title: "Step 5: Pursue Reconciliation When Safe and Possible", text: "Where the other person is willing and where the relationship can safely continue, pursue reconciliation. This requires not just forgiveness but a rebuilding of trust through demonstrated change over time. Not every relationship is restored — some betrayals are severe enough, and some people remain unwilling to take responsibility. But where reconciliation is possible, it is one of the most powerful testimonies to the gospel's power available to the church. A restored marriage, a repaired friendship, a healed sibling relationship — these are living parables of the reconciliation Christ achieved between God and humanity." },
];

const scriptures = [
  { verse: "Matthew 18:15", text: "If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over." },
  { verse: "Colossians 3:13", text: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you." },
  { verse: "Ephesians 4:3", text: "Make every effort to keep the unity of the Spirit through the bond of peace." },
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
  { verse: "Matthew 5:23-24", text: "Therefore, if you are offering your gift at the altar and there remember that your brother or sister has something against you, leave your gift there in front of the altar. First go and be reconciled to them; then come and offer your gift." },
  { verse: "Proverbs 15:1", text: "A gentle answer turns away wrath, but a harsh word stirs up anger." },
];

const voices = [
  { id: "ksa", name: "Ken Sande", role: "Founder, Peacemaker Ministries; Author, The Peacemaker", quote: "The gospel of Jesus Christ is not just a message we believe. It is a pattern we live — a pattern of repentance, forgiveness, and reconciliation. Every conflict is an opportunity to display the gospel to the watching world. The question is not whether we will face conflict, but whether we will face it as peacemakers who believe Christ can heal what sin has broken.", bio: "Sande's The Peacemaker is the most comprehensive evangelical resource on biblical conflict resolution available. A former attorney, Sande developed the Peacemaker model from Matthew 18 and has trained thousands of churches, ministries, and businesses in biblical dispute resolution. Peacemaker Ministries (now Relational Wisdom 360) has mediated thousands of conflicts in churches, families, and organizations." },
  { id: "dh", name: "Dr. David Augsburger", role: "Author, Caring Enough to Confront; Professor at Fuller Seminary", quote: "Conflict is a sure sign that people care. The absence of conflict is not peace — it is indifference. Caring enough to confront is one of the most loving things one person can do for another, because it takes the other person seriously enough to risk the relationship for the sake of honesty and genuine restoration.", bio: "Augsburger coined the term 'care-fronting' to describe the integration of caring deeply and confronting honestly — the opposite of either silent withdrawal or aggressive attack. His work draws on conflict resolution research, Christian ethics, and pastoral experience to provide a framework for Christians who want to address conflict with both truth and love." },
  { id: "rj", name: "Dr. Everett Worthington", role: "Forgiveness Researcher; Author, Forgiving and Reconciling", quote: "Forgiving is not the same as reconciling. Forgiveness is a gift you give yourself as much as the other person — releasing the poison of bitterness and resentment. Reconciliation is a gift two people give each other when trust can be rebuilt. You can forgive anyone. You cannot always reconcile with anyone — and you should not always try.", bio: "Worthington is one of the foremost forgiveness researchers in the world, and his personal journey — forgiving the man who murdered his mother — gives his academic work profound experiential grounding. His REACH model (Recall, Empathize, Altruistic gift, Commit, Hold on) has been validated in dozens of studies as an effective framework for achieving forgiveness." },
];

const videos = [
  { id: "8JRBaY5MNUA", title: "Ken Sande: The Peacemaker — Biblical Conflict Resolution" },
  { id: "JsFJtqNTbFw", title: "Forgiveness vs. Reconciliation — What's the Difference?" },
  { id: "lW-KixBb0yY", title: "Matthew 18 Conflict Process Explained" },
  { id: "N_xFbF2t3CQ", title: "How to Have a Hard Conversation as a Christian" },
];

type CREntry = { id: string; date: string; situation: string; step: string; outcome: string };

export default function BiblicalConflictResolutionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_conflictres_entries") ?? "[]"); } catch { return []; }
  });
  const [jSituation, setJSituation] = useState("");
  const [jStep, setJStep] = useState("");
  const [jOutcome, setJOutcome] = useState("");

  useEffect(() => { localStorage.setItem("vine_conflictres_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSituation.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), situation: jSituation, step: jStep, outcome: jOutcome }, ...prev]);
    setJSituation(""); setJStep(""); setJOutcome("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "steps", label: "Steps" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Community & Relationships</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Biblical Conflict Resolution</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>The Matthew 18 process and the full biblical framework for addressing conflict, pursuing forgiveness, and restoring broken relationships.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: 6 }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "steps" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Conflict Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Track a conflict you are navigating through this process.</p>
            {[
              { label: "Describe the situation (without blame)", val: jSituation, set: setJSituation },
              { label: "Which step are you on, and what are you doing?", val: jStep, set: setJStep },
              { label: "What outcome have you seen or are you hoping for?", val: jOutcome, set: setJOutcome },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                    <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Situation:</strong> {e.situation}</p>
                    {e.step && <p style={{ fontSize: "0.88rem", marginBottom: 4 }}><strong>Step:</strong> {e.step}</p>}
                    {e.outcome && <p style={{ fontSize: "0.88rem" }}><strong>Outcome:</strong> {e.outcome}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GREEN }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
