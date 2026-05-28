"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Marriage as Covenant, Not Contract", verse: "Malachi 2:14", body: "A contract is a legal agreement that terminates when obligations are unfulfilled. A covenant is a binding commitment that persists even when one party fails. God's covenant with Israel survived Israel's repeated unfaithfulness — because the covenant is held by God, not by Israel's performance. Marriage is called a covenant in Malachi 2:14. The implication is profound: the marriage relationship is defined by the covenant, not by the quality of the experience within it." },
  { title: "Marriage as Gospel Sign", verse: "Ephesians 5:31-32", body: "Paul cites Genesis 2:24 ('the two become one flesh') and then says: 'This is a profound mystery — but I am talking about Christ and the church' (Ephesians 5:31-32). Marriage is not just a human institution blessed by God; it is a theological sign pointing to the covenant relationship between Christ and his people. The husband's love of his wife signifies Christ's love for the church; the wife's voluntary submission signifies the church's trust in Christ. Marriage is a living parable of redemption." },
  { title: "What the Vows Actually Mean", verse: "Ecclesiastes 5:4-5", body: "For better, for worse; for richer, for poorer; in sickness and in health; to love and to cherish; until death do us part. The vows are not descriptions of how things will go — they are precisely the circumstances in which the covenant holds. 'For worse' is not a concession; it is the point. God says to his covenant people: I will not let you go. The marriage vows are an echo of God's own language of unconditional commitment." },
  { title: "The Mystery of Union", verse: "Genesis 2:24", body: "'That is why a man leaves his father and mother and is united to his wife, and they become one flesh' (Genesis 2:24). The word translated 'united' (dabaq) means to cling, to stay close to, to pursue. The one-flesh union is comprehensive — physical, emotional, spiritual. It is not merely cohabitation or shared interest; it is a new entity. The two have become, in some genuine sense, one. This is why sexual infidelity is experienced as a catastrophic rupture, not merely an ethical violation." },
  { title: "Divorce: The Exception", verse: "Matthew 19:6-9", body: "Jesus quotes Genesis 2:24 and then says: 'Therefore what God has joined together, let no one separate' (Matthew 19:6). He permits divorce in the case of sexual immorality (Matthew 19:9) — and Paul permits it in the case of abandonment by an unbelieving spouse (1 Corinthians 7:15). The Reformers added abuse as a third legitimate ground. But the NT framing is consistent: divorce is a concession to human hardness, not God's design. The covenant is meant to hold." },
];

const HARD_SEASONS = [
  { season: "The First Year", desc: "The most disorienting year — often the most difficult despite romantic expectation. Two self-formed adults merging lives, habits, preferences, and families.", response: "Expect adjustment. Lower expectations of the marriage; raise expectations of God's presence in it. Seek premarital or early-marriage counseling. Do not pathologize normal friction." },
  { season: "Young Children", desc: "Sleep deprivation, lost intimacy, competing demands, and the identity disruption of becoming parents can erode the marriage quietly while everyone is exhausted.", response: "Schedule the marriage. Date nights are not optional extras but necessary maintenance. Ask for specific help. Keep a short account of grievances — fatigue makes everything seem bigger than it is." },
  { season: "Prolonged Conflict", desc: "Repeated unresolved conflicts harden into patterns: pursue-withdraw, contempt, defensiveness, stonewalling. John Gottman calls these the Four Horsemen of marital apocalypse.", response: "Seek a skilled Christian marriage counselor before the patterns are too entrenched. The earlier counseling begins, the more effective it is. Conflict is normal; contempt is dangerous." },
  { season: "Infidelity", desc: "Sexual or emotional infidelity is a covenant rupture that causes trauma-level harm to the betrayed spouse and requires sustained, intentional work to address.", response: "Full disclosure, genuine repentance, professional counseling, and rebuilding over years (not weeks) are required. Many marriages recover from infidelity — but not quickly, not without help, and not without the unfaithful spouse bearing the full weight of the work of repair." },
  { season: "Empty Nest", desc: "When children leave, couples often discover they have organized their lives around parenting rather than marriage. The marriage that worked as co-parenting may not work as companionship.", response: "Begin investing in companionship and shared life before the children leave. Identify shared interests, shared mission, and what you enjoy together apart from parenting. The empty nest can be a second marriage." },
];

const PRACTICES = [
  { title: "Weekly Marriage Meeting", desc: "15-30 minutes weekly: what went well, what was hard, any logistics to address. Keeps the relationship maintained rather than letting issues accumulate. Not a gripe session but a regular maintenance check.", icon: "📅" },
  { title: "Pray Together Daily", desc: "The couple that prays together is statistically the couple that stays together. Even a brief prayer — thirty seconds — at the end of the day maintains spiritual intimacy and mutual dependence on God. It is almost impossible to maintain contempt toward the person you are praying for.", icon: "🙏" },
  { title: "Protect Date Night", desc: "One uninterrupted evening per week. No phones, no logistics, no problem-solving — just enjoyment of each other. The marriage that only interacts around children and household is not a marriage but a business partnership.", icon: "💛" },
  { title: "Speak the Love Language", desc: "Gary Chapman's framework — words of affirmation, quality time, physical touch, acts of service, gifts — identifies that people give and receive love differently. Know your spouse's primary language and speak it consistently, not occasionally.", icon: "💬" },
  { title: "Pursue Annual Retreats", desc: "One night away together per year at minimum — no children, no agenda beyond each other. Retreats create space for conversations that everyday life doesn't permit. Even modest retreats (a local hotel, a borrowed cabin) are significantly better than nothing.", icon: "🏡" },
  { title: "Get Counseling Prophylactically", desc: "Counseling is not only for crisis — it is for maintenance and growth. Annual or semi-annual sessions with a skilled marriage counselor can address minor issues before they calcify and keep the marriage growing rather than merely surviving.", icon: "🧭" },
];

export default function CovenantMarriagePage() {
  const [activeTab, setActiveTab] = useState<"theology" | "seasons" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>💍</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Covenant Marriage</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Marriage is not a contract that terminates when obligations are unfulfilled. It is a covenant — a binding commitment that reflects and participates in God's own unconditional commitment to his people.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "seasons" as const, label: "Hard Seasons", icon: "⛈️" },
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

        {activeTab === "seasons" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Every marriage goes through difficult seasons. Knowing what is coming and having a plan for it is not pessimism — it is wisdom. These are the most common hard seasons and how to navigate them.
              </p>
            </div>
            {HARD_SEASONS.map((s, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === s.season ? null : s.season)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === s.season ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{s.season}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === s.season ? "−" : "+"}</span>
                </button>
                {expanded === s.season && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{s.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{s.response}</p>
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
                A good marriage does not happen accidentally. These practices are the maintenance work that keeps covenant commitment alive and growing across decades.
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
