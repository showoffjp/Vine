"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const MISCONCEPTIONS = [
  { myth: "Confession is for Catholics", truth: "Confession is biblical. James 5:16 commands believers to confess to one another. While Protestant and Catholic traditions differ on the role of a priest, the practice of spoken confession has deep biblical roots that every Christian tradition once honored." },
  { myth: "God already knows — why say it out loud?", truth: "God knows, but confession is for us. Speaking sin aloud is an act of honest self-confrontation. It moves sin from vague guilt to specific acknowledgment, which is the necessary starting point for real repentance and change." },
  { myth: "I just need to confess to God privately", truth: "Private confession to God is essential (1 John 1:9). But James 5:16 specifically adds confession 'to one another' for healing. The two kinds serve different purposes — God's confession for forgiveness, human confession for accountability and healing from shame." },
  { myth: "Confession means begging for forgiveness", truth: "Biblical confession (homologeo — 'to say the same thing') means agreeing with God about sin. It's not groveling but clarity. God's response to honest confession is gracious: 'He is faithful and just to forgive us our sins' (1 John 1:9)." },
];

const FRAMEWORKS = [
  {
    id: "ACTS",
    name: "ACTS Prayer",
    steps: [
      { label: "A — Adoration", description: "Begin with who God is. 'Father, you are holy, just, merciful, and utterly good...' Adoration shifts perspective — it reminds you who you're confessing to and why his verdict matters." },
      { label: "C — Confession", description: "Name sins specifically. Not 'I have not been good' but 'I spoke harshly to [name]. I lied about [specific thing]. I indulged [specific sin].' Specificity is the enemy of self-deception." },
      { label: "T — Thanksgiving", description: "Thank God for forgiveness through Christ. The cross is the reason confession leads to pardon, not condemnation. 'There is therefore now no condemnation for those who are in Christ Jesus' (Rom 8:1)." },
      { label: "S — Supplication", description: "Ask for what you need: strength to resist, healing in the relationship, change in character. Confession that doesn't include asking for grace to change misses the point." },
    ],
  },
  {
    id: "Examen",
    name: "Ignatian Examen",
    steps: [
      { label: "1. Be Grateful", description: "End your day or week by noticing one thing you're grateful for. Starting with gratitude prevents the Examen from becoming self-flagellation." },
      { label: "2. Review with God", description: "Ask: 'Where was God present today? Where did I move toward or away from God in my choices?' Walk through your day mentally as if rewinding a film." },
      { label: "3. Name What Troubles You", description: "What moments make you feel unsettled? What did you say, think, or do that you'd undo? Name these honestly — not to condemn but to see clearly." },
      { label: "4. Ask for Forgiveness and Healing", description: "Bring those named moments to God explicitly. Receive his forgiveness (not just know it intellectually). Let the grace land." },
      { label: "5. Look Forward", description: "Ask God what tomorrow holds. Is there a specific relationship to repair? A pattern to watch for? Commit one concrete thing to God for the coming day." },
    ],
  },
  {
    id: "James",
    name: "Confessing to Another",
    steps: [
      { label: "Choose the Right Person", description: "Not anyone — someone who has earned your trust, who will keep confidence, who will respond with grace not shock, and who will hold you accountable, not enable you." },
      { label: "Be Specific, Not Vague", description: "Vague confession ('I haven't been great lately') protects pride. Specific confession ('I looked at pornography three times this week') breaks shame's power. Say the actual thing." },
      { label: "Listen for the Declaration", description: "In some traditions, the confessor says: 'In the name of Jesus Christ, you are forgiven.' Whether or not this practice is part of your tradition, receive the gospel — you ARE forgiven. Don't leave without hearing grace." },
      { label: "Establish Accountability", description: "Confession without accountability often becomes a pattern of confession-guilt-repeat. Agree on follow-up: when will you check in? What will you report? What does support look like?" },
      { label: "Walk Into Freedom", description: "Shame says: 'You are your sin.' The gospel says: 'You are a child of God who sinned.' After confession, resist the enemy's attempts to condemn. You confessed; you're forgiven; walk accordingly." },
    ],
  },
];

const BARRIERS = [
  { barrier: "Pride", sign: "You minimize or justify the sin rather than calling it what it is", response: "Pride is the original sin — it always distorts vision. Ask God for humility before attempting confession: 'Search me, O God, and know my heart' (Psalm 139:23)." },
  { barrier: "Shame", sign: "You avoid confession because the weight of the sin feels too great to speak aloud", response: "Shame wants you isolated. Isolation is where shame grows. The cross absorbs shame — 'He who knew no sin became sin for us.' Your sin is not greater than what Christ already bore." },
  { barrier: "Doubt of Forgiveness", sign: "You confess but cannot receive forgiveness — you return to the guilt over and over", response: "This is often a theological problem: you believe forgiveness must be earned or felt. Return to 1 John 1:9 — it is the character of God (faithful and just) that guarantees forgiveness, not the quality of your repentance." },
  { barrier: "Fear of Consequences", sign: "The sin has real relational consequences you fear facing if it comes to light", response: "This is the hardest barrier. Confession may result in consequences — and that is part of genuine repentance. But ongoing concealment compounds sin and its damage. Seek wise counsel for situations with serious consequences." },
];

export default function ConfessionPage() {
  const [activeTab, setActiveTab] = useState<"why" | "how" | "barriers" | "guide" | "videos">("why");
  const [expandedFramework, setExpandedFramework] = useState<string>("ACTS");
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_confession_journal") || ""; } catch { return ""; }
  });
  const [expandedBarrier, setExpandedBarrier] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem("vine_confession_journal", journalText); } catch {} }, [journalText]);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🙇</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Confession & Repentance</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Confession is not groveling — it is clarity. And repentance is not a feeling — it is a turn.
          </p>
          <div style={{ marginTop: 14, display: "inline-block", background: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "8px 16px" }}>
            <span style={{ color: GREEN, fontSize: 13 }}>1 John 1:9 — "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."</span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "why" as const, label: "Why Confess", icon: "❓" },
            { id: "how" as const, label: "How To", icon: "🗺️" },
            { id: "barriers" as const, label: "Barriers", icon: "🧱" },
            { id: "guide" as const, label: "Personal Guide", icon: "✍️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "why" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 14 }}>What Is Biblical Confession?</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, marginBottom: 12 }}>
                The Greek word translated "confess" in the New Testament is <em>homologeo</em> — literally "to say the same thing." To confess is to agree with God about sin: to call it what he calls it, not what we prefer to call it. This is different from accusation (which condemns), different from excusing (which minimizes), and different from vague guilt (which is unfocused).
              </p>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15 }}>
                Biblical repentance (metanoia) is a change of mind that leads to a change of direction. It is not primarily a feeling of remorse (though that may accompany it) but a decisive reorientation — turning from sin toward God. Godly sorrow leads to repentance (2 Cor 7:10); worldly sorrow leads only to death. The difference is that godly sorrow produces change.
              </p>
            </div>

            <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>Common Misconceptions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {MISCONCEPTIONS.map((m, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <span style={{ color: "#EF4444", fontSize: 16, marginTop: 1 }}>✗</span>
                    <span style={{ color: "#EF4444", fontWeight: 700, fontSize: 15 }}>Myth: {m.myth}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: GREEN, fontSize: 16, marginTop: 1 }}>✓</span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.65 }}>{m.truth}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginTop: 20 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, marginBottom: 12 }}>The Two Kinds of Confession</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                  <h4 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>To God</h4>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>1 John 1:9 — receives forgiveness and cleansing. This is foundational. Every sin must be brought to God first. No priest required — we have one mediator, Christ Jesus (1 Tim 2:5).</p>
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18 }}>
                  <h4 style={{ color: PURPLE, fontWeight: 800, marginBottom: 8 }}>To One Another</h4>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>James 5:16 — for healing and accountability. Not all sin needs to be confessed to others, but habitual sin, relational harm, and deep shame often do. This is where the church's fellowship function becomes crucial.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "how" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Several biblical and historical frameworks for the practice of confession:</p>
            {FRAMEWORKS.map(f => {
              const open = expandedFramework === f.id;
              return (
                <div key={f.id} style={{ background: CARD, border: `1px solid ${open ? PURPLE + "50" : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setExpandedFramework(open ? "" : f.id)}
                    style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: open ? PURPLE : TEXT, fontWeight: 800, fontSize: 16 }}>{f.name}</span>
                    <span style={{ color: MUTED, fontSize: 18 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 20px 20px" }}>
                      {f.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: PURPLE, fontWeight: 800, fontSize: 13 }}>{i + 1}</div>
                          <div>
                            <div style={{ color: PURPLE, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{step.label}</div>
                            <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "barriers" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Common obstacles to honest confession — and how Scripture addresses each one:</p>
            {BARRIERS.map((b, i) => {
              const open = expandedBarrier === b.barrier;
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                  <button onClick={() => setExpandedBarrier(open ? null : b.barrier)}
                    style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                    <div>
                      <div style={{ color: "#EF4444", fontWeight: 800, fontSize: 16 }}>{b.barrier}</div>
                      <div style={{ color: MUTED, fontSize: 13, marginTop: 3 }}>{b.sign}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 20px 18px" }}>
                      <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: 16 }}>
                        <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.response}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "guide" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 18, marginBottom: 12 }}>A Personal Examination Guide</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 16 }}>Use these questions to prayerfully examine your heart before God. Spend time with each area. Be honest — God already knows.</p>
              {[
                { area: "Toward God", qs: ["Have I prioritized time with God, or has my heart drifted toward busyness or entertainment?", "Am I trusting God fully, or am I controlling outcomes out of unbelief?", "Have I thanked God for his specific goodness to me this week?"] },
                { area: "Toward Others", qs: ["Is there anyone I need to apologize to or make right with?", "Have I spoken harshly, dishonestly, or critically of anyone this week?", "Have I withheld grace, patience, or forgiveness from someone who needed it?"] },
                { area: "In Secret", qs: ["What would I be uncomfortable with if others could see my private digital life this week?", "Have I indulged habits I know are harmful — in thought, online, in substance?", "What am I concealing that would benefit from being spoken aloud to a trusted person?"] },
                { area: "In Character", qs: ["Where has pride shown up this week — in conversation, decision-making, or internal attitude?", "Have I been generous, or have I held tightly to money, time, or attention?", "Am I becoming more like Christ in specific, concrete ways — or just believing I am?"] },
              ].map(section => (
                <div key={section.area} style={{ marginBottom: 20 }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>Examine: {section.area}</h4>
                  {section.qs.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0, marginTop: 1 }}>→</span>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{q}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Confession Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>Write honestly to God here. Name what needs to be named. Receive grace when you're done.</p>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder="Father, I bring before you...&#10;&#10;I confess specifically...&#10;&#10;I receive your forgiveness and ask for..."
                style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.7, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
              <div style={{ marginTop: 12, background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: 12 }}>
                <p style={{ color: GREEN, fontSize: 13, fontStyle: "italic", margin: 0 }}>
                  "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." — 1 John 1:9
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
