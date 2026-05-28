"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "God's Forgiveness as the Foundation", verse: "Psalm 103:12", body: "As far as the east is from the west, so far has he removed our transgressions from us (Psalm 103:12). God's forgiveness is the ground of all Christian forgiveness — we forgive because we have been forgiven. The parable of the unmerciful servant (Matthew 18:21-35) makes this logic explicit: the person who has been forgiven an unpayable debt has no grounds for withholding forgiveness of a small one. The scale matters: what God has forgiven in us infinitely exceeds anything we are asked to forgive in others. Unforgiveness in the forgiven person is therefore a kind of amnesia — it forgets what has been received." },
  { title: "What Forgiveness Is (and Is Not)", verse: "Luke 23:34", body: "Father, forgive them, for they do not know what they are doing (Luke 23:34). Forgiveness is the release of a debt — choosing not to hold an offense against the person who committed it. It is not the same as reconciliation (which requires repentance from the offender), trust (which must be rebuilt over time), or forgetting (which is not commanded and often not possible). Forgiveness does not excuse the offense or pretend it did not happen; it releases the claim for vengeance and commits the offense to God's justice rather than one's own. This distinction is crucial for survivors of serious harm." },
  { title: "Seventy Times Seven", verse: "Matthew 18:22", body: "Jesus answered, I tell you, not seven times, but seventy-seven times (Matthew 18:22). The number is not a limit but an unlimit — an idiom for beyond counting. This teaching comes in response to Peter's question about how many times to forgive a brother who sins against him. The unlimited nature of required forgiveness reflects the unlimited nature of the forgiveness received. It also assumes ongoing relationship — you cannot forgive seventy-seven times someone you have no contact with. The context is the community of the church, where repeated offense and repeated forgiveness are the fabric of genuine common life." },
  { title: "Forgiveness and Repentance", verse: "Luke 17:3-4", body: "If your brother or sister sins against you, rebuke them; and if they repent, forgive them (Luke 17:3). There is a distinction between the inner disposition of forgiveness (releasing the debt, not harboring bitterness) and the transaction of forgiveness (the explicit declaration when the offender repents). The inner disposition is required regardless of the offender's response. The transactional forgiveness awaits repentance — not as a weapon but as the appropriate response to genuine turning. Forgiveness and reconciliation are related but distinct: reconciliation requires repentance; the inner forgiveness that releases bitterness does not." },
  { title: "Forgiveness and Justice", verse: "Romans 12:19", body: "Do not take revenge, my dear friends, but leave room for God's wrath, for it is written: It is mine to avenge; I will repay, says the Lord (Romans 12:19). Forgiveness does not preclude justice — it transfers the administration of justice from the victim to God (and to governing authorities, Romans 13:4). Misunderstanding this collapses forgiveness into excusing: as if forgiving an abuser means not reporting the abuse. The biblical logic is different: I release my personal revenge and my bitterness; I do not thereby exempt the offender from earthly accountability. God uses human justice as one means of his own." },
];

const HARD_QUESTIONS = [
  { o: "Do I have to forgive if they never apologize?", desc: "This is the most common and most painful forgiveness question. The person who harmed you has shown no remorse, may not even acknowledge the harm.", response: "The inner release of bitterness and the commitment not to pursue personal vengeance are required regardless of the offender's response — because they serve your own freedom and honor the God who forgave you. The full transactional forgiveness (the restoration of the relationship) typically awaits repentance. You can release someone from your grip without welcoming them back into your trust." },
  { o: "How do I forgive when I still feel angry?", desc: "Forgiveness is sometimes described as an emotion — but if you feel the anger, you have not forgiven. This leaves many people feeling condemned for a pain they cannot control.", response: "Forgiveness is a choice and a commitment, not primarily a feeling. Choose not to pursue vengeance. Choose to release the debt. Bring the anger to God honestly. The feelings may lag behind the decision for a long time. Forgiveness is a direction, not a destination reached in a moment. Walking toward it is enough." },
  { o: "Isn't forgiving minimizing what they did?", desc: "Survivors of serious harm sometimes experience forgiveness as a demand to make peace with their own harm — to say it was not that bad, or to risk appearing to excuse it.", response: "Forgiveness does not minimize harm — it refuses to let the harm have the final word. You can say: what was done to me was wrong, serious, and caused real damage — AND I am choosing not to be defined by it or to let bitterness own me. These are not contradictory statements. The cross does not minimize the evil it absorbed; it absorbs it without being destroyed by it." },
  { o: "What about forgiving yourself?", desc: "Many Christians are more resistant to self-forgiveness than to forgiving others — or they use the language of self-forgiveness to avoid genuine repentance.", response: "Self-forgiveness, properly understood, is receiving the forgiveness God has already given. The difficulty is often that the guilt is real and deserved — and the appropriate response is genuine repentance, not self-affirmation. After real repentance, self-condemnation becomes a refusal to believe what God has declared about you in Christ: there is no condemnation (Romans 8:1). Receive what God offers." },
  { o: "What about forgiving God?", desc: "Some people carry deep anger at God for what has happened — for suffering, for unanswered prayer, for apparent abandonment. The language of forgiving God is theologically complicated.", response: "God has not wronged you in the way that requires forgiveness — he is not guilty of sin against you. But the anger is real and needs somewhere to go. Bring it to God in lament — the Psalms model this. The anger at God, honestly expressed to him, is a form of prayer. The journey from that honest anger to trust is the journey of grief and faith, not of forgiving God but of learning to trust him again." },
];

const PRACTICES = [
  { title: "Distinguish Forgiveness from Reconciliation", desc: "Clearly separate in your own mind what forgiveness requires (inner release, no bitterness, no vengeance) from what reconciliation requires (repentance, rebuilt trust, restored relationship). You may be called to full forgiveness without being called to reconciliation. This distinction protects survivors of serious harm and prevents forgiveness from being weaponized.", icon: "🔍" },
  { title: "Bring the Offense to God in Prayer", desc: "The practice of bringing the specific offense — named, with its specific weight — to God in prayer is one of the most powerful forgiveness practices available. Tell God what happened, how it feels, and choose to release it to him. This is not once-and-done; it may need to happen many times before the release becomes felt.", icon: "🙏" },
  { title: "Practice the Parable of the Two Debtors", desc: "Return regularly to the parable of the unmerciful servant. Hold your own forgiveness in mind — the specific, named debt God has forgiven in you — alongside the specific offense you are being asked to forgive in another. The disproportion is always instructive. What you have been forgiven is always larger than what you are being asked to forgive.", icon: "📖" },
  { title: "Resist the Bitterness Cycle", desc: "Bitterness is unforgiveness that has been ruminated on — the replaying of the offense, the accumulation of grievances, the narrative of victimhood that becomes a consuming identity. Notice when you are in the cycle: replaying, re-living, rehearsing the complaint to others. The notice is the first step out.", icon: "⚠️" },
  { title: "Seek Accountability for Your Own Forgiveness", desc: "Ask someone you trust: Is there someone I am harboring unforgiveness toward? Is there a pattern of grievance I can't see? An outside voice often notices the bitterness before the person carrying it does. Accountability in forgiveness is one of the hardest and most freeing forms of honesty available.", icon: "🤝" },
  { title: "Allow Forgiveness to Be a Process", desc: "For serious harm — abuse, betrayal, violence, profound loss — forgiveness is rarely a single moment but a process that may take years. This is not failure. Walking toward forgiveness, choosing it again when the anger returns, is itself the practice. The process is the faithfulness. Be patient with yourself and others in the long work of release.", icon: "🌿" },
];

export default function TheologyOfForgivenessPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "questions" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🕊️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Forgiveness</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Forgiveness is one of Christianity's most demanding and most liberating teachings. We forgive because we have been forgiven — and the scale of what we have received should overwhelm every reason not to.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "questions" as const, label: "Hard Questions", icon: "❓" },
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
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The most common hard questions people carry about forgiveness — answered with honesty rather than easy reassurance.
              </p>
            </div>
            {HARD_QUESTIONS.map((q, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === q.o ? null : q.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === q.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{q.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === q.o ? "−" : "+"}</span>
                </button>
                {expanded === q.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{q.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{q.response}</p>
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
                Forgiveness is both an event (the choice to release) and a process (the ongoing practice of releasing). These practices support both.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
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
