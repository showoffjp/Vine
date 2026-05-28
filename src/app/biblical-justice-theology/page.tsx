"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Justice in the Character of God", verse: "Psalm 89:14", body: "Righteousness and justice are the foundation of your throne; love and faithfulness go before you (Psalm 89:14). Biblical justice is first a statement about God before it is a demand on humans. God is just — he does what is right, he defends the vulnerable, he punishes oppressors. The Hebrew word mishpat (justice) appears over 200 times in the OT and describes right action in community life: fair courts, honest commerce, protection of the vulnerable, equitable distribution of resources. Justice in the Bible is not merely formal (equal treatment) but restorative — returning people to their rightful place in the community." },
  { title: "The Four Vulnerable Groups", verse: "Deuteronomy 10:18-19", body: "He defends the cause of the fatherless and the widow, and loves the foreigner residing among you, giving them food and clothing. And you are to love those who are foreigners, for you yourselves were foreigners in Egypt (Deuteronomy 10:18-19). The Torah identifies four recurring groups that are especially vulnerable to exploitation and oppression: the widow, the orphan (fatherless), the foreigner/immigrant (ger), and the poor. The law repeatedly commands Israel's protection of these groups — not as charity but as justice. Exploiting them is presented not as social failure but as covenant violation and theological affront to the God who protects them." },
  { title: "The Prophets' Justice Demands", verse: "Amos 5:24", body: "Let justice roll on like a river, righteousness like a never-failing stream! (Amos 5:24). The eighth-century prophets — Amos, Hosea, Isaiah, Micah, Jeremiah — deliver God's devastating critique of a religious Israel that maintains worship while practicing economic injustice. Amos attacks the merchant class for cheating the poor (8:5-6), condemning people to debt slavery for a pair of sandals (2:6), and treating the Sabbath as an interruption to their exploitation (8:5). God's response: I hate, I despise your religious festivals (5:21). The prophets establish that no amount of religious activity compensates for injustice toward the vulnerable." },
  { title: "Jesus and Justice", verse: "Luke 4:18", body: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free (Luke 4:18). Jesus begins his public ministry by reading Isaiah 61 and declaring: today this scripture is fulfilled in your hearing (Luke 4:21). His ministry consistently prioritizes those the culture discarded — tax collectors, lepers, women, Samaritans, the sick and demon-possessed. The Sermon on the Mount blesses the poor in spirit and those who hunger for righteousness. The sheep-and-goats parable (Matthew 25) makes the care of the hungry, stranger, naked, and imprisoned the criterion of entry into the kingdom." },
  { title: "Justice and the Gospel", verse: "James 2:14-17", body: "What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? (James 2:14). James makes concrete what Paul assumes: genuine faith produces works, and the works James has in mind are concrete acts of care for the needy. A faith that says Go in peace; keep warm and well fed (2:16) without doing anything about the need is dead. The NT pattern is not justice-without-gospel (social work without proclamation) nor gospel-without-justice (proclamation without concrete care) but the integration of both — because the God who saves also cares about the creation order, and the gospel that reconciles humans to God also reconciles them to each other." },
];

const TENSIONS = [
  { o: "Justice vs. Charity", desc: "Charity addresses needs; justice addresses causes. Giving someone food is charity; working to change systems that create poverty is justice. Both are required — but Christians sometimes substitute charity for justice and feel they have done their part.", response: "Do both. Give generously to meet immediate needs. Also ask: why are people hungry here? Why are rents rising faster than wages in this neighborhood? Structural questions require structural engagement — advocacy, voting, policy attention — alongside personal generosity." },
  { o: "Political Polarization", desc: "In contemporary culture, justice language has been captured by particular political movements. Many Christians avoid the word entirely because of its political freight. Others embrace it but in ways that are more culturally than biblically shaped.", response: "Return to the text. Let mishpat and righteousness (tsedaqah) define the terms rather than any political party. The biblical vision of justice is broader and stranger than any contemporary political platform. The prophets and Jesus upset every ideological cart." },
  { o: "Individual vs. Systemic Change", desc: "Some Christians focus on individual transformation (change hearts, change behavior) and are suspicious of systemic analysis. Others focus on systems (change structures, change outcomes) and can underweight individual sin and responsibility.", response: "Both matter and Scripture addresses both. Individual sin produces unjust systems. Unjust systems produce conditions that make individual sin more likely. The prophets addressed both: individual merchants cheating (Amos 8) and structural court corruption (5:12). Jesus transformed individuals and proclaimed a new social reality simultaneously." },
  { o: "Justice and Evangelism", desc: "Classic tension: should the church prioritize proclamation of the gospel or practical care for the poor? Some frame it as a choice: social gospel vs. real gospel.", response: "The Lausanne Covenant (1974) is definitive: both are part of the church's mission, with evangelism having a certain priority (eternal souls matter) and social action being an inseparable companion. The Word-deed integration of Jesus's ministry is the model. Evangelism without social action is incomplete; social action without the gospel doesn't address the root problem." },
  { o: "Avoiding Burnout", desc: "Justice work is relentless and often discouraging. Systems change slowly; need is overwhelming; progress is contested. Activists burn out. Idealism turns to cynicism.", response: "Justice work without prayer and sabbath is not sustainable. The person working for justice needs the same formation practices as anyone else — maybe more. Lament is a necessary companion: it allows honest grief at injustice without despair. The final justice belongs to God (Romans 12:19), which is both an ethical caution and a psychological relief." },
];

const PRACTICES = [
  { title: "Read the Prophets for Justice Formation", desc: "Amos, Isaiah 1-12, Micah 6, Jeremiah 22 — the prophets speak directly to the relationship between worship and justice, religion and economics, covenant faithfulness and treatment of the vulnerable. Read them slowly, with your context in mind. Let their discomfort become yours.", icon: "📖" },
  { title: "Know the Four Vulnerable Groups", desc: "The widow, the orphan, the foreigner, and the poor. Who are they in your neighborhood? Build relationships with them — not to rescue them, but to know them as people. Justice begins with seeing those the culture renders invisible. Biblical justice is always concrete before it is systemic.", icon: "👁️" },
  { title: "Let Your Generosity Be Structural", desc: "Set a fixed percentage of income for justice-oriented giving — not just relief but organizations that work on root causes of poverty, trafficking, homelessness. Automated giving removes the decision from emotional fluctuation and builds structural generosity into your financial life.", icon: "💰" },
  { title: "Vote and Advocate", desc: "Justice includes the political. God's care for the vulnerable extends to whether laws protect them. Participate in civic life specifically with attention to policies that affect the four vulnerable groups: who protects the immigrant, the child without parents, the widow, the working poor? Do not check out of politics because it is messy.", icon: "🗳️" },
  { title: "Address Racial Justice Specifically", desc: "In the American context especially, the history of racial injustice is inseparable from the history of the church. Read carefully (Ta-Nehisi Coates, Jemar Tisby, Bryan Stevenson) before forming strong opinions. Build cross-racial relationships before pronouncing solutions.", icon: "🌍" },
  { title: "Sustain Justice Work With Prayer", desc: "Without prayer, justice work either burns out or turns proud. The person fighting for justice needs the same repentance, dependence, and formation as anyone else. The vision of shalom — God's comprehensive well-being for all of creation — is ultimately eschatological. We labor toward it while trusting God to complete it.", icon: "🙏" },
];

export default function BiblicalJusticeTheologyPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "tensions" | "practices">("theology");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Justice</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Justice is not a progressive buzzword or a conservative distraction — it is central to the character of God and the demands of the covenant. The Bible has more to say about justice than most Christians realize.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "tensions" as const, label: "Tensions", icon: "⚠️" },
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

        {activeTab === "tensions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Justice is one of the most contested concepts in the contemporary church. These are the most significant tensions — and how to navigate them faithfully.
              </p>
            </div>
            {TENSIONS.map((t, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => setExpanded(expanded === t.o ? null : t.o)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === t.o ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{t.o}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === t.o ? "−" : "+"}</span>
                </button>
                {expanded === t.o && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>RESPONSE</div>
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
                Biblical justice begins in the heart and moves outward — toward the neighbor, the community, and the structures that shape common life.
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
