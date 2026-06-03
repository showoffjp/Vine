"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundations" | "models" | "issues" | "engagement" | "videos";

const FOUNDATIONS = [
  { title: "The Kingdom of God is not the kingdom of America — or any nation", color: GREEN, ref: "John 18:36; Philippians 3:20; Revelation 11:15", content: "Jesus told Pilate 'My kingdom is not of this world.' This is the foundational political statement of Christianity — not that Christians should be politically disengaged, but that their primary citizenship is elsewhere. Paul tells the Philippians that 'our citizenship is in heaven.' The church's loyalty to Jesus Christ is prior to and more ultimate than its loyalty to any political entity. When these loyalties conflict — as they inevitably do — the church must choose its King." },
  { title: "Government is divinely ordained — but not divine", color: PURPLE, ref: "Romans 13:1-7; Daniel 2:21; 1 Peter 2:13-17; Acts 4:19-20", content: "Romans 13 is one of the most misused texts in Christian political history. Paul writes that 'there is no authority except that which God has established' — but this is immediately qualified by the fact that rulers are 'God's servants for your good.' Governing authority is derivative and conditional, not absolute. When the Roman authorities tell the Apostles to stop preaching, Peter's response is decisive: 'We must obey God rather than human beings' (Acts 5:29). Government has real authority — and real limits." },
  { title: "The church's political witness is primarily moral, not partisan", color: "#3B82F6", ref: "Amos 5:24; Micah 6:8; Matthew 22:21; Romans 13:8-10", content: "The Old Testament prophets functioned as the political conscience of Israel — speaking truth to power regardless of party. Amos condemned Israel's economic injustice; Isaiah warned of military alliances; Jeremiah predicted Babylon's victory over Judah (against the national-security consensus). The church's public witness is most powerful when it is prophetically consistent — criticizing all sides by the standard of Scripture rather than functioning as a chaplain to a particular political coalition." },
  { title: "Render to Caesar what is Caesar's — and to God what is God's", color: "#EF4444", ref: "Matthew 22:21; Mark 12:17; Luke 20:25", content: "Jesus's response to the coin question is not a theology of church-state separation; it is a sovereignty claim. The coin bears Caesar's image — give Caesar what belongs to Caesar. But humans bear God's image (Gen 1:26) — give God what belongs to God. The implication is radical: there is a domain that belongs to Caesar (taxes, civil order) and a domain that belongs to God (the whole person, created in his image). When Caesar demands what belongs to God — absolute loyalty, worship, the suppression of truth — render it to God instead." },
  { title: "Two-kingdoms theology and its limits", color: "#F59E0B", ref: "Luther's two kingdoms doctrine; Calvin's transformation model", content: "Martin Luther distinguished between the kingdom of the right (the church, governed by the gospel) and the kingdom of the left (the state, governed by law and force). This prevented the theocratic confusion of church and state but tended to insulate political life from prophetic critique. Calvin's transformationist model — Christians actively working to shape culture and government according to biblical principles — has been more influential in Reformed and evangelical political engagement. Neither model is perfect; both recognize the distinction between gospel and law while differing on the church's political task." },
  { title: "Justice as the political form of love", color: "#10B981", ref: "Amos 5:24; Isaiah 1:17; Micah 6:8; Luke 4:18-19; James 1:27", content: "The prophetic tradition consistently defines faithfulness to God in terms of justice for the poor, the widow, the orphan, and the stranger. Isaiah 1:17: 'Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.' This is not a liberal political platform — it is the consistent demand of the God who rescued a slave people from Egypt. Justice is the political form of love — the social structure that ensures each person receives their due as an image-bearer of God." },
];

const MODELS = [
  { model: "Two Kingdoms (Lutheran)", color: PURPLE, thinker: "Martin Luther, David VanDrunen", desc: "God governs the world through two distinct kingdoms: the spiritual kingdom (the church, through the gospel) and the civil kingdom (government and culture, through natural law and reason). Christians participate in both but must not confuse them. The church's task is preaching the gospel; the state's task is maintaining order. Christians bring Christian virtue to their civic roles but do not expect to Christianize the political order.", concern: "Can become quietist — insulating politics from prophetic critique; historically used to justify German Lutheran accommodation to National Socialism" },
  { model: "Transformationism / Kuyperian", color: GREEN, thinker: "Abraham Kuyper, Herman Dooyeweerd, Francis Schaeffer", desc: "Abraham Kuyper's famous claim: 'There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry: Mine!' Christians are called to bring the lordship of Christ into every domain — politics, art, science, business, education. The kingdom of God is advanced as Christians reform culture according to biblical norms. This was the founding vision of Calvin's Geneva and Puritan New England.", concern: "Risk of conflating the kingdom of God with a particular political program; historically contributed to the privileging of Christian cultural forms over gospel witness" },
  { model: "Anabaptist / Radical Discipleship", color: "#EF4444", thinker: "John Howard Yoder, Stanley Hauerwas, Mennonite tradition", desc: "The church is a political community — a 'contrast society' that witnesses to the world by being different. Christians do not seek to govern but to embody the Kingdom's alternative: forgiveness, nonviolence, enemy-love. Political engagement distracts from the church's primary calling to be a distinctive community. The Sermon on the Mount is a political program for the church, not a private ethic. Government violence (war, capital punishment) is incompatible with the Christian calling.", concern: "Can lead to withdrawal from the legitimate concerns of political life; leaves the field to those less committed to justice; has not always been consistent in its nonviolence" },
  { model: "Natural Law / Catholic Social Teaching", color: "#3B82F6", thinker: "Thomas Aquinas; Papal encyclicals (Leo XIII, John Paul II, Benedict XVI)", desc: "Reason accessible to all people — not special revelation — grounds political ethics. Natural law (accessible through reason) provides common ground for Christian engagement in pluralistic public life. Catholic Social Teaching articulates principles: subsidiarity (decisions at the lowest effective level), solidarity (obligation to the common good), the preferential option for the poor, and human dignity as the foundation of rights.", concern: "Optimism about natural reason's reliability post-Fall; the Magisterium's political applications of natural law are contested even among Catholics" },
  { model: "Public Theology / Liberal Democracy", color: "#F59E0B", thinker: "Reinhold Niebuhr, Richard Mouw, Max Stackhouse", desc: "Christians should engage in the liberal democratic political order as Christians — bringing their theological convictions to bear on public policy — but through the mediation of publicly accessible arguments (natural law, shared values, human dignity). Niebuhr's 'Christian Realism' acknowledged the persistence of sin in all political arrangements and the necessity of power to constrain greater evil. Christian political engagement should be humble, realistic, and not triumphalist.", concern: "Can lead to theological thinning — Christians speaking publicly in ways that suppress their specifically Christian convictions to be acceptable in secular discourse" },
];

const ISSUES = [
  { issue: "Life and Bioethics", color: GREEN, evangelical: "Sanctity of life from conception to natural death; opposition to abortion, euthanasia, embryonic research that destroys human life; support for adoption, foster care, pregnancy resource centers", progressive: "Consistent life ethic extending to poverty, gun violence, capital punishment, and immigration; debate over abortion's legal status vs. moral status; emphasis on addressing root causes of abortion", tension: "Both sides claim the image of God as foundation but reach different policy conclusions about which policy actually honors it" },
  { issue: "Economic Justice", color: PURPLE, evangelical: "Free markets as generally consistent with human dignity and freedom; concern for inefficiency and dependency in welfare programs; emphasis on private charity and church-led benevolence", progressive: "Prophetic tradition's consistent demand for structural justice; concern that market outcomes can perpetuate systemic injustice; support for living wages, universal healthcare, and robust safety nets", tension: "Both sides claim Amos and the prophets; debate is fundamentally about whether justice requires policy intervention or private virtue" },
  { issue: "Immigration", color: "#3B82F6", evangelical: "Rule of law; national sovereignty; concern for social cohesion; hospitality to legal immigrants; debate on what policy best serves the common good", progressive: "Leviticus 19:34's command to 'love the foreigner as yourself'; the Exodus as paradigm for identifying with displaced peoples; concern for migrant workers' dignity and safety", tension: "Scripture commands both care for foreigners and respect for governing authorities — working out both simultaneously in policy is genuinely difficult" },
  { issue: "Creation Care", color: "#EF4444", evangelical: "Stewardship of creation (Gen 2:15); support for environmental responsibility; more skepticism of specific policy prescriptions (carbon taxes, international agreements) and more emphasis on human ingenuity and prosperity as compatible with environmental health", progressive: "Creation care as direct obedience to Genesis; climate change as an urgent justice issue (affecting the global poor disproportionately); support for significant policy intervention", tension: "Agreement on stewardship theology; disagreement on the scientific consensus's policy implications and the role of government in enforcing environmental standards" },
  { issue: "Racial Justice", color: "#F59E0B", evangelical: "Every person bears the image of God; personal racism is sin; concern that systemic analysis can overdetermine individuals; emphasis on reconciliation through the gospel", progressive: "Galatians 3:28 as political program; systemic sin requires systemic remedy; the church has a particular responsibility given its historical complicity in racial injustice; policies addressing disparate outcomes are required by justice", tension: "One of the most theologically contested questions in contemporary American Christianity; the debate is simultaneously about sociology (how does systemic injustice work?) and about political theology (what is the church's responsibility?)" },
];

const ENGAGEMENT = [
  { principle: "Vote as a Christian, not as a tribal member", color: GREEN, content: "The most dangerous political move for a Christian is tribal alignment — automatically supporting one party because that is what Christians like you do. Party loyalty often requires suppressing inconvenient biblical convictions. The biblical pattern is prophetic engagement with all parties from outside partisan commitments. No party fully embodies biblical values; every party partially does. Vote by evaluating each candidate and platform against biblical standards, not by finding the party that already has your loyalty." },
  { principle: "Do not make politics the primary driver of your church choice", color: PURPLE, content: "Choosing a church because of its political alignment is a form of idolatry — making politics the organizing principle of your spiritual life. Churches should be chosen for the quality of their preaching, the authenticity of their community, and their faithfulness to the gospel. If you attend only churches that share your political views, you will never have your political assumptions challenged by biblical preaching — which is exactly when preaching is most needed." },
  { principle: "Pray for those in authority — even when you oppose them", color: "#3B82F6", content: "Paul's instruction to pray for 'all those in authority' (1 Tim 2:1-2) was written under Nero — one of the most brutal emperors in Roman history. The instruction was not conditional on the ruler's virtue. Praying for governing authorities is not endorsement; it is obedience. It is also practically wise: rulers who govern well serve the church's mission; rulers who govern badly constrain it." },
  { principle: "Distinguish between core gospel commitments and political preferences", color: "#EF4444", content: "The resurrection of Christ is a non-negotiable gospel commitment. The optimal marginal tax rate is a political preference. Treating every political position as equally non-negotiable produces a community that cannot receive political correction and a witness that cannot be distinguished from tribalism. Christians should hold their political views with appropriate humility — as honest attempts to apply Scripture to complex empirical questions — rather than as revealed truth." },
  { principle: "Engage in local politics and civic life before national politics", color: "#F59E0B", content: "National political engagement produces enormous emotion and minimal actual impact for most Christians. Local political engagement — school boards, city councils, zoning decisions, mayoral elections — produces real change in real communities and requires Christians to develop substantive positions on local issues rather than national culture-war performances. Jeremiah 29's instruction to seek the shalom of the city applies most directly to the specific city where you live." },
  { principle: "The church's primary political act is being the church", color: "#10B981", content: "Stanley Hauerwas's controversial claim: the most political thing the church can do is be the church — a community of forgiveness, reconciliation, economic sharing, and enemy love that demonstrates an alternative to the world's power arrangements. A church that practices genuine racial reconciliation is doing more political work than a thousand political sermons. A church that cares for its members who are suffering from addiction is making a political statement about human dignity that no legislation can duplicate." },
];

export default function PoliticalTheologyPage() {
  const [tab, setTab] = useState<Tab>("foundations");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Political Theology</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: "0 auto" }}>
            What the Bible says about politics, the major models of Christian civic engagement, how to think about contested issues, and how to engage faithfully without losing the gospel.
          </p>
        </div>

        <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 28 }}>
          <div style={{ color: PURPLE, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>A Necessary Warning</div>
          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>Politics is one of the primary ways American Christianity has been distorted. The church has been captured by both left and right — becoming a chaplain to cultural progressivism in some denominations and to nationalism in others. The goal of Christian political theology is not to produce better political opinions but to recover a vision of the Kingdom of God that relativizes all human kingdoms — including the ones you prefer.</p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["foundations", "models", "issues", "engagement"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "foundations" ? "Biblical Foundations" : t === "models" ? "Engagement Models" : t === "issues" ? "Key Issues" : "Faithful Engagement"}
            </button>
          ))}
        </div>

        {tab === "foundations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[f.title] ? f.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(e => ({ ...e, [f.title]: !e[f.title] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: f.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{f.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{f.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18 }}>{expanded[f.title] ? "−" : "+"}</span>
                </button>
                {expanded[f.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{f.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "models" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {MODELS.map((m, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${m.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ color: m.color, fontWeight: 900, fontSize: 16, marginBottom: 3 }}>{m.model}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>Key Thinkers: {m.thinker}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{m.desc}</p>
                <div style={{ background: `${m.color}08`, border: `1px solid ${m.color}15`, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: m.color, fontWeight: 700, fontSize: 11 }}>Concern: </span>
                  <span style={{ color: TEXT, fontSize: 13 }}>{m.concern}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "issues" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ISSUES.map((iss, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${iss.color}25`, borderRadius: 12, padding: 22 }}>
                <div style={{ color: iss.color, fontWeight: 900, fontSize: 16, marginBottom: 14 }}>{iss.issue}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: `${iss.color}08`, border: `1px solid ${iss.color}15`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: iss.color, fontSize: 10, fontWeight: 800, marginBottom: 6 }}>CONSERVATIVE / EVANGELICAL EMPHASIS</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.65 }}>{iss.evangelical}</div>
                  </div>
                  <div style={{ background: `${iss.color}08`, border: `1px solid ${iss.color}15`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: iss.color, fontSize: 10, fontWeight: 800, marginBottom: 6 }}>PROGRESSIVE / MAINLINE EMPHASIS</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.65 }}>{iss.progressive}</div>
                  </div>
                </div>
                <div style={{ background: BORDER, borderRadius: 8, padding: "8px 12px" }}>
                  <span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>Real Tension: </span>
                  <span style={{ color: TEXT, fontSize: 12 }}>{iss.tension}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "engagement" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ENGAGEMENT.map((e, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[e.principle] ? "#3a7d5640" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(ex => ({ ...ex, [e.principle]: !ex[e.principle] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: e.color, fontWeight: 800, fontSize: 14, paddingRight: 16 }}>{e.principle}</div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[e.principle] ? "−" : "+"}</span>
                </button>
                {expanded[e.principle] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{e.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
