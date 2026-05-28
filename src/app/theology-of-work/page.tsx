"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Work Before the Fall", verse: "Genesis 2:15", body: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it (Genesis 2:15). Work is not a consequence of the fall — it is a creation gift. God is a worker (he made the world); humans made in his image are workers too. The cultural mandate (Genesis 1:28) — to fill, subdue, and rule the earth — is the vocation given to humanity before sin entered. This means that the nurse's work, the farmer's work, the artist's work, and the accountant's work all participate in the original human calling. Work is not a necessary evil to be endured; it is part of the good design." },
  { title: "The Fall's Effect on Work", verse: "Genesis 3:17-19", body: "Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life (Genesis 3:17). The fall does not abolish work but distorts it. The toil, futility, frustration, and conflict that characterize so much human work — the bug that cannot be fixed, the project that falls apart, the relationship that collapses under work-stress — are the fall's fingerprints on a good creation. Ecclesiastes explores this theme with great depth: all is vanity (hebel — breath, vapor, futility) when work is disconnected from God and oriented only toward itself. The fall makes work painful but does not make it meaningless." },
  { title: "Work as Worship", verse: "Colossians 3:23", body: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters (Colossians 3:23). Paul's radical democratization of work: there is no sacred/secular divide in which some work is holy and other work is merely tolerated. The slave's work, done as for the Lord, is an act of worship. This does not baptize all work as equally valuable or eliminate the need for ethics in the workplace — but it does mean that faithfulness in ordinary work is a form of devotion to God. Monday is as sacred as Sunday; the factory floor is as holy as the church sanctuary." },
  { title: "Calling and Vocation", verse: "1 Corinthians 7:17", body: "Each person should live as a believer in whatever situation the Lord has assigned to them, just as God has called them (1 Corinthians 7:17). Luther recovered the doctrine of vocation (calling) for the Reformation: every legitimate occupation is a calling from God, not just the ministry. The cobbler who makes good shoes glorifies God as surely as the pastor who preaches well. This does not mean every job is equally significant or that we should never change jobs — but it does mean that our primary question is not what job maximizes my self-fulfillment but how can I serve God and neighbor in the work I have been given." },
  { title: "Work and the New Creation", verse: "1 Corinthians 15:58", body: "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain (1 Corinthians 15:58). This text, placed at the end of the resurrection chapter, implies that work done in the Lord has an eschatological dimension — it is not simply burned up when history ends. N.T. Wright and others argue that good work done in Christ is somehow taken up into the new creation, transfigured rather than annihilated. This does not mean every artifact survives but that faithful work matters beyond the present age." },
];

const CHALLENGES = [
  { o: "Work as Identity", desc: "When work becomes the primary source of identity and worth, we become defined by our productivity, our title, and our output. Loss of a job becomes loss of self. This is particularly acute in cultures that lead with What do you do?", response: "Your identity is rooted in who you are in Christ — child of God, beloved, new creation — not in what you produce. Practice introducing yourself without your job title. Find community where you are known as a person, not a professional." },
  { o: "Workaholism", desc: "The compulsive inability to stop working, often driven by anxiety (if I stop, things will fall apart), insecurity (my worth depends on what I accomplish), or idolatry (work is the source of meaning and control). Workaholism is increasingly normalized and even celebrated.", response: "Practice the Sabbath as a weekly declaration that the world does not run on your effort alone. Set firm boundaries around work hours. Identify the fear or desire that drives the overwork — then bring it before God rather than medicating it with more work." },
  { o: "Treating Work as Meaningless", desc: "The opposite error: treating work as merely instrumental — a paycheck, a means to weekends. This disconnects from the vocation dimension and produces disengagement, mediocrity, and the quiet despair of meaningless days.", response: "Ask what your work contributes to human flourishing — even in modest ways. The garbage collector serves the health of the city; the cashier is the first face many people see in the morning. Every legitimate work has dignity when seen from the vocation perspective." },
  { o: "Injustice in the Workplace", desc: "The workplace is a primary site of economic injustice: wage theft, unsafe conditions, exploitation, discrimination, harassment. These are not merely legal or political problems — they are theological ones. Amos and James are particularly direct about the spiritual seriousness of economic injustice.", response: "Christians in workplaces are called to both personal integrity and structural attention: Is my work just? Are those under my authority treated with dignity? Do I speak when I see injustice, even at personal cost? The prophets did not negotiate with oppression; they named it." },
  { o: "Work-Life Imbalance", desc: "The structural difficulty of modern work — especially for parents — of integrating work, family, rest, and community. Technology has erased the boundaries between workplace and home, making genuine rest increasingly difficult.", response: "Create and protect thresholds: times and spaces where work does not intrude. These boundaries are not laziness — they are the practical expression of the belief that you are more than your work, and that family, rest, and community are also callings that deserve their time." },
];

const PRACTICES = [
  { title: "Begin Work With Prayer", desc: "Offer the day's work to God before beginning it. This simple act reorients work from autonomous achievement to participated vocation. Pray for the people you will serve, for wisdom in the decisions you will make, for integrity in the pressures you will face. Work that begins in prayer is differently oriented than work that begins in urgency.", icon: "🙏" },
  { title: "Pursue Excellence Without Perfectionism", desc: "Do your work with all your heart — but release the outcome to God. Excellence honors the One who gave you the skill; perfectionism makes the outcome into an idol. The gap between excellence (faithfulness in the work) and perfectionism (control of the result) is exactly the gap between work as worship and work as anxiety.", icon: "⚒️" },
  { title: "Treat Every Colleague as Image-Bearer", desc: "Everyone in your workplace bears the image of God — your boss, your difficult colleague, the intern, the janitor. This is not idealism; it is a theological claim that has practical implications for how you speak about people, what behavior you tolerate, and how you exercise authority.", icon: "👥" },
  { title: "Maintain Honest Integrity", desc: "The workplace is one of the most consistent tests of Christian integrity: small deceptions, corner-cutting, credit-taking, expense padding. The person who is faithful in very little is also faithful in much (Luke 16:10). Integrity in minor matters is the most convincing form of workplace witness and the most quietly costly.", icon: "🔒" },
  { title: "Name What Your Work is For", desc: "Be able to articulate how your work serves God and neighbor — not in abstract religious terms but concretely. The software makes communication more efficient; the medical work reduces suffering; the teaching shapes young minds. This narrative gives work its proper dignity and connects it to the larger purpose of human flourishing.", icon: "🌍" },
  { title: "Rest as a Form of Trust", desc: "The person who cannot stop working trusts only themselves. Genuine Sabbath rest is a weekly act of trust in the God who governs what we have left undone. Protect your rest not only for your health but as a theological statement: I am not the savior of my own projects. God holds what I have released.", icon: "🌙" },
];

export default function TheologyOfWorkPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "challenges" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚒️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theology of Work</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Work is not a necessary evil — it is a creation gift, a vocation, and a form of worship. Monday is as sacred as Sunday. The question is not whether your work is spiritual but whether it is done faithfully before God.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "challenges" as const, label: "Challenges", icon: "⚠️" },
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

        {activeTab === "challenges" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The most common ways the theology of work gets distorted — and what a more faithful approach looks like.
              </p>
            </div>
            {CHALLENGES.map((c, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === c.o ? null : c.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === c.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{c.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === c.o ? "−" : "+"}</span>
                </button>
                {expanded === c.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{c.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.response}</p>
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
                Integrating faith and work is not a technique — it is a posture that shapes every hour of every workday. These practices build that posture.
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
