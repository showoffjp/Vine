"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Matthew 18 Pattern", verse: "Matthew 18:15-17", body: "'If your brother or sister sins, go and point out their fault, just between the two of you. If they listen to you, you have won them over. But if they will not listen, take one or two others along, so that every matter may be established by the testimony of two or three witnesses. If they still refuse to listen, tell it to the church; and if they refuse to listen even to the church, treat them as you would a pagan or a tax collector' (Matthew 18:15-17). The process is graduated — beginning with the greatest privacy and the least disruption, escalating only as reconciliation is refused. The goal at every stage is restoration, not punishment." },
  { title: "The Purpose Is Restorative", verse: "Galatians 6:1", body: "'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted' (Galatians 6:1). The purpose of church discipline is not exclusion but restoration — to recover the sinning member, not simply to protect the community from contamination. The word 'restore' (katartizo) is used of setting a broken bone or mending a fishing net — careful, skilled work that returns something to its proper function. Gentleness and self-awareness ('or you also may be tempted') are the posture." },
  { title: "The Corinthian Case", verse: "1 Corinthians 5:1-5", body: "Paul's instruction about the Corinthian man in an incestuous relationship is the NT's clearest example of formal church discipline: 'hand this man over to Satan, so that the sinful nature may be destroyed and his spirit saved on the day of the Lord' (1 Corinthians 5:5). The goal is still salvation — but the means is exclusion from the covenant community, which removes the person from the protection and grace of its fellowship. The church's failure to act was itself a sin: 'And you are proud! Shouldn't you rather have gone into mourning?' (5:2). 2 Corinthians 2:5-11 records the restoration." },
  { title: "The Protective Function", verse: "1 Corinthians 5:6", body: "'Your boasting is not good. Don't you know that a little yeast leavens the whole batch of dough?' (1 Corinthians 5:6). Discipline also protects the community. Unaddressed sin normalizes and spreads. The church that tolerates open, unrepentant sin gradually shifts its moral landscape and loses its credibility as a witness to the gospel. The protective function is secondary to the restorative function but is real: the health of the community matters, and integrity requires accountability." },
  { title: "The Cost of Avoiding It", verse: "2 Timothy 4:2-3", body: "'Preach the word; be prepared in season and out of season; correct, rebuke and encourage — with great patience and careful instruction. For the time will come when people will not put up with sound doctrine' (2 Timothy 4:2-3). Churches that avoid all confrontation — where no one is ever corrected, rebuked, or held accountable — produce a false peace. The avoidance of conflict is not love; it is cowardice dressed as tolerance. The most loving thing is often the hard truth, spoken with the patience and care Paul describes." },
];

const STEPS = [
  { step: "1", title: "Private Conversation", detail: "Go alone to the person. Assume the best: they may be unaware, they may be repentant before you arrive, or there may be mitigating factors you don't know. The goal is not to confront but to restore. Use 'I statements,' ask questions, listen.", caution: "Don't bring someone with you at this stage unless safety is a concern. Don't gossip with others before going to the person directly.", scripture: "Matthew 18:15" },
  { step: "2", title: "Bring Witnesses", detail: "If the first conversation is refused or ignored, bring one or two mature believers. Their presence is not to outnumber or intimidate but to facilitate genuine conversation, witness accurately to what is said, and pray together. These should be trusted, mature members of the community.", caution: "The witnesses are there to establish facts and facilitate reconciliation — not to gang up or condemn. Their presence is protective of everyone, including the accused.", scripture: "Matthew 18:16; Deuteronomy 19:15" },
  { step: "3", title: "Tell the Church", detail: "If the person remains unrepentant after two approaches, the matter is brought to the church leadership or the gathered congregation. This step is rarely taken and should be taken only after the previous steps have been genuinely attempted. It is a last-resort appeal, not a first response.", caution: "In most contexts today, 'tell it to the church' means bringing it to the elders or leadership, not announcing it from the pulpit. This step requires pastoral wisdom about what telling the church actually means in context.", scripture: "Matthew 18:17a" },
  { step: "4", title: "Treat as an Outsider", detail: "If all three previous steps are ignored, the community treats the person as an outsider — no longer as a covenant member in good standing. This is not rejection or hatred; it is a severe mercy. The person retains the prayers of the community and the offer of restoration. The exclusion is meant to produce the repentance that conversation could not.", caution: "This step is rarely appropriate and is far more often needed than it is practiced. But it is a real biblical instruction, and churches that never reach this point likely have not faithfully attempted the earlier steps.", scripture: "Matthew 18:17b; 1 Corinthians 5:5" },
];

const PRACTICES = [
  { title: "Go Quickly and Directly", desc: "The temptation when a fellow Christian sins is to complain to others, avoid the person, or wait indefinitely. Matthew 18 requires the opposite: go directly, go privately, go soon. Delay multiplies harm — to the sinner, to the relationship, and to the community.", icon: "⚡" },
  { title: "Examine Your Own Sin First", desc: "'First take the plank out of your own eye, and then you will see clearly to remove the speck from your brother's eye' (Matthew 7:5). Before going, examine whether you have contributed to the situation, whether your motivation is genuinely restorative, and whether you are in a position to restore gently (Galatians 6:1).", icon: "🔍" },
  { title: "Distinguish Sin from Preference", desc: "Not everything that bothers you is sin. Not every difference of opinion is a matter of discipline. Discipline applies to clear, ongoing, unrepentant violations of Scripture — not to stylistic differences, theological disagreements within orthodoxy, or personal offenses. Precision here is pastoral wisdom.", icon: "⚖️" },
  { title: "Hold the Process with Gentleness", desc: "The severity of the Matthew 18 process should not produce a harsh, accusatorial spirit. Galatians 6:1 is not incidental: 'restore gently,' watching yourself, knowing your own vulnerability to sin. The person going to restore should go as a fellow sinner, not as a judge.", icon: "🕊️" },
  { title: "Celebrate Restoration Visibly", desc: "When discipline results in genuine repentance and restoration, celebrate it. Paul instructed the Corinthians: 'You ought to forgive and comfort him, so that he will not be overwhelmed by excessive sorrow' (2 Corinthians 2:7). The return is an occasion for joy, not for continued shame or suspicion. Kill the fatted calf.", icon: "🎉" },
  { title: "Protect the Vulnerable in the Process", desc: "Church discipline has been abused — used to silence victims, protect abusers, or maintain institutional reputation. Situations involving abuse, exploitation, or power imbalance require different handling. In those cases, civil authorities may need to be involved, and the 'go privately' instruction does not protect abusers from accountability.", icon: "🛡️" },
];

export default function ChurchDisciplinePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "process" | "practices">("theology");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Church Discipline</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Jesus gave the church a process for addressing unrepentant sin — not for punishment or exclusion but for restoration. Matthew 18 is one of the most neglected and most necessary passages in the NT.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "process" as const, label: "The Process", icon: "📋" },
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

        {activeTab === "process" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}20`, borderRadius: 12, padding: 18, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                The Matthew 18 process is graduated — beginning with the least public step and escalating only when restoration is refused. Each step is a new attempt at reconciliation, not a punishment.
              </p>
            </div>
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${PURPLE}25`, color: PURPLE, fontWeight: 900, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{s.title}</div>
                    <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{s.scripture}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>{s.detail}</p>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 10 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>CAUTION</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.caution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Church discipline done badly is brutal; done well, it is one of the most loving acts a community can offer. These six practices help ensure it remains what Jesus intended: the pursuit of a lost sheep.
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
