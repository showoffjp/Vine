"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God Gets Angry", verse: "Psalm 7:11", body: "'God is a righteous judge, a God who displays his wrath every day' (Psalm 7:11). The existence of divine anger is not an embarrassment to be explained away — it is a proof of God's moral seriousness. God's wrath is his settled, consistent opposition to everything that violates his good creation and harms his image-bearers. A God who felt nothing about injustice, cruelty, and evil would not be a good God." },
  { title: "Jesus Was Angry", verse: "Mark 3:5, John 2:13-17", body: "Jesus looked at the Pharisees' hard hearts 'with anger' (Mark 3:5). He drove the money-changers from the temple with a whip he made himself (John 2:13-17). His anger was not impulsive — it was purposeful, directed, and resolved. He was angry at injustice, hypocrisy, and the exploitation of the vulnerable. His anger was at sin, not at sinners." },
  { title: "Be Angry and Do Not Sin", verse: "Ephesians 4:26", body: "'In your anger do not sin: Do not let the sun go down while you are still angry' (Ephesians 4:26). Paul does not say 'Do not be angry' — he assumes anger will occur. The command is about how anger is managed: it should not lead to sin, and it should be resolved promptly. Anger is not inherently sinful. How it is expressed and how long it is held — those are the critical questions." },
  { title: "The Danger of Unresolved Anger", verse: "Ephesians 4:27", body: "'Do not give the devil a foothold' (Ephesians 4:27). Unresolved anger is one of the primary entry points for satanic influence in relationships. What begins as legitimate grievance calcifies into bitterness, resentment, and contempt — destroying friendships, marriages, churches, and the soul of the angry person. The most dangerous anger is the anger you don't know you're carrying." },
  { title: "Slow to Anger", verse: "James 1:19-20", body: "'Everyone should be quick to listen, slow to speak, and slow to become angry, because human anger does not produce the righteousness that God desires' (James 1:19-20). Human anger is not God's anger. Ours is mixed with pride, self-protection, wounded ego, and self-righteousness in ways God's is not. This is why our anger so rarely produces justice and so often produces destruction." },
];

const TYPES = [
  { type: "Righteous Anger", color: GREEN, desc: "Anger at genuine injustice, evil, or harm to others. Directed at what is wrong, not at the person. Motivates action rather than brooding.", examples: "Anger at child abuse, at corrupt systems, at cruelty, at hypocrisy that harms the vulnerable.", response: "Channel into action: advocacy, prayer, protective intervention. Righteous anger serves justice when it drives toward remedy rather than punishment." },
  { type: "Wounded Anger", color: "#F59E0B", desc: "Anger arising from personal hurt, rejection, disappointment, or betrayal. Natural and understandable, but must be processed rather than performed.", examples: "Anger at a friend who betrayed you, at a parent who failed you, at a spouse's hurtful words.", response: "Bring to prayer first. Then decide: Is this a relationship where confrontation is appropriate and safe? Lament before you act. Forgiveness is the goal." },
  { type: "Cumulative Anger", color: "#EF4444", desc: "Anger that has been stored up over time — often exploding disproportionately at a small trigger because the tank was already full.", examples: "Snapping at a family member over something small. Rage at a driver. Disproportionate reactions that surprise even yourself.", response: "The explosion signals the reservoir. Seek to identify and process the underlying unresolved anger. This kind almost always requires conversation, counseling, or spiritual direction." },
  { type: "Sinful Anger", color: "#8B5CF6", desc: "Anger that has crossed into sin: contempt, malice, abuse, vindictiveness, fantasies of revenge, or chronic bitterness.", examples: "Prolonged resentment. Verbal abuse. Silent treatment as punishment. Enjoyment of another's suffering.", response: "Repent specifically. Make restitution where possible. Seek accountability. Address root causes — sinful anger is usually a symptom of something deeper." },
];

const PRACTICES = [
  { title: "The Pause", desc: "Before responding in anger, create a 10-second gap. In that gap, pray: 'Lord, help me.' The physiological peak of anger lasts about 90 seconds — the pause interrupts the automatic response.", verse: "Proverbs 15:18" },
  { title: "Name It", desc: "Name the specific emotion: 'I feel angry because ___.' Naming emotion reduces its hijacking power in the brain. Distinguish anger from hurt, fear, and shame — they often travel together.", verse: "Psalm 4:4" },
  { title: "Pray Before Confronting", desc: "Do not confront in the heat of anger. Bring the grievance to God first. Let prayer change your posture from 'I will punish you' to 'I want this relationship to be right.'", verse: "Matthew 5:23-24" },
  { title: "Speak Directly, Not Indirectly", desc: "Passive aggression, silent treatment, and sarcasm are anger expressed sideways. The biblical pattern is direct speech: 'I was hurt when you did X.' Indirect anger is dishonest and prolongs conflict.", verse: "Ephesians 4:15" },
  { title: "Forgive Quickly", desc: "The sun-down principle (Eph. 4:26) is practical wisdom: don't carry anger overnight. This does not mean pretending nothing happened — it means releasing the debt before it becomes resentment.", verse: "Colossians 3:13" },
  { title: "Identify the Root", desc: "Most anger is a secondary emotion covering something primary: fear, grief, humiliation, or powerlessness. Ask: 'What am I really feeling under the anger?' The root is where healing happens.", verse: "Proverbs 19:11" },
];

export default function AngerPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "types" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Anger: A Christian Guide</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God gets angry. Jesus got angry. The question is not whether anger is appropriate but whether ours is righteous, rightly expressed, and quickly resolved. Be angry — and do not sin.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology of Anger", icon: "📖" },
            { id: "types" as const, label: "Types of Anger", icon: "🔍" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "types" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Not all anger is the same. Diagnosing which type you are experiencing shapes the appropriate response. Treating wounded anger like righteous anger produces self-righteousness. Treating righteous anger like sin produces passivity in the face of injustice.
              </p>
            </div>
            {TYPES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(expanded === t.type ? null : t.type)}
                  style={{ width: "100%", padding: "16px 20px", background: "transparent", border: "none", color: t.color, fontWeight: 800, fontSize: 16, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{t.type}</span>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded === t.type ? "−" : "+"}</span>
                </button>
                {expanded === t.type && (
                  <div style={{ padding: "0 20px 18px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{t.desc}</p>
                    <div style={{ background: BG, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                      <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>EXAMPLES</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.examples}</p>
                    </div>
                    <div style={{ background: `${t.color}10`, border: `1px solid ${t.color}25`, borderRadius: 8, padding: 12 }}>
                      <div style={{ color: t.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{t.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Anger management is not about suppression — suppressed anger becomes bitterness, illness, or explosion. These practices help process anger faithfully, directing its energy toward righteousness rather than destruction.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                    <span style={{ color: MUTED, fontSize: 11, fontWeight: 700 }}>{p.verse}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
