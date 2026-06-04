"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundations" | "models" | "issues" | "engagement" | "faqs" | "videos";

const FOUNDATIONS = [
  { title: "The Kingdom of God is not the kingdom of America — or any nation", color: GREEN, ref: "John 18:36; Philippians 3:20; Revelation 11:15", content: "Jesus told Pilate 'My kingdom is not of this world.' This is the foundational political statement of Christianity — not that Christians should be politically disengaged, but that their primary citizenship is elsewhere. Paul tells the Philippians that 'our citizenship is in heaven.' The church's loyalty to Jesus Christ is prior to and more ultimate than its loyalty to any political entity. When these loyalties conflict — as they inevitably do — the church must choose its King." },
  { title: "Government is divinely ordained — but not divine", color: PURPLE, ref: "Romans 13:1-7; Daniel 2:21; 1 Peter 2:13-17; Acts 4:19-20", content: "Romans 13 is one of the most misused texts in Christian political history. Paul writes that 'there is no authority except that which God has established' — but this is immediately qualified by the fact that rulers are 'God's servants for your good.' Governing authority is derivative and conditional, not absolute. When the Roman authorities tell the Apostles to stop preaching, Peter's response is decisive: 'We must obey God rather than human beings' (Acts 5:29). Government has real authority — and real limits." },
  { title: "The church's political witness is primarily moral, not partisan", color: "#3B82F6", ref: "Amos 5:24; Micah 6:8; Matthew 22:21; Romans 13:8-10", content: "The Old Testament prophets functioned as the political conscience of Israel — speaking truth to power regardless of party. Amos condemned Israel's economic injustice; Isaiah warned of military alliances; Jeremiah predicted Babylon's victory over Judah (against the national-security consensus). The church's public witness is most powerful when it is prophetically consistent — criticizing all sides by the standard of Scripture rather than functioning as a chaplain to a particular political coalition." },
  { title: "Render to Caesar what is Caesar's — and to God what is God's", color: "#EF4444", ref: "Matthew 22:21; Mark 12:17; Luke 20:25", content: "Jesus's response to the coin question is not a theology of church-state separation; it is a sovereignty claim. The coin bears Caesar's image — give Caesar what belongs to Caesar. But humans bear God's image (Gen 1:26) — give God what belongs to God. The implication is radical: there is a domain that belongs to Caesar (taxes, civil order) and a domain that belongs to God (the whole person, created in his image). When Caesar demands what belongs to God — absolute loyalty, worship, the suppression of truth — render it to God instead." },
  { title: "Two-kingdoms theology and its limits", color: "#F59E0B", ref: "Luther's two kingdoms doctrine; Calvin's transformation model", content: "Martin Luther distinguished between the kingdom of the right (the church, governed by the gospel) and the kingdom of the left (the state, governed by law and force). This prevented the theocratic confusion of church and state but tended to insulate political life from prophetic critique. Calvin's transformationist model — Christians actively working to shape culture and government according to biblical principles — has been more influential in Reformed and evangelical political engagement. Neither model is perfect; both recognize the distinction between gospel and law while differing on the church's political task." },
  { title: "Justice as the political form of love", color: "#10B981", ref: "Amos 5:24; Isaiah 1:17; Micah 6:8; Luke 4:18-19; James 1:27", content: "The prophetic tradition consistently defines faithfulness to God in terms of justice for the poor, the widow, the orphan, and the stranger. Isaiah 1:17: 'Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.' This is not a liberal political platform — it is the consistent demand of the God who rescued a slave people from Egypt. Justice is the political form of love — the social structure that ensures each person receives their due as an image-bearer of God." },
  { title: "Every human bears the image of God", color: "#EC4899", ref: "Genesis 1:26-27; Genesis 9:6; James 3:9; Psalm 8:5-6", content: "The doctrine of the imago Dei is the deepest root of any Christian political ethic. Because every person — regardless of nation, status, ability, age, or usefulness — bears God's image, every person possesses an inviolable dignity that no state confers and no state may revoke. This conviction historically grounded Christian opposition to slavery, infanticide, and tyranny, and it relativizes every political ideology that would reduce persons to their economic output, their group identity, or their utility to the regime. Politics that honors the image of God treats the weakest member as a measure of the whole society's justice." },
  { title: "The principalities and powers are real — and fallen", color: "#8B5CF6", ref: "Ephesians 6:12; Colossians 1:16; Colossians 2:15; Revelation 13", content: "The New Testament speaks of 'principalities and powers' — structures and authorities that were created good (Col 1:16) but are fallen and can become demonic. Revelation 13 portrays the state divinized into a beast demanding worship. This gives Christians a sober political realism: institutions are necessary and God-ordained, yet capable of idolatry and evil. Christians neither despise government (anarchism) nor worship it (statism), but discern when a legitimate authority has overreached into the place of God — and resist accordingly, as the martyrs did." },
  { title: "Hope, not despair or utopianism, shapes Christian politics", color: "#06B6D4", ref: "Jeremiah 29:7; Revelation 21:1-4; Hebrews 13:14; Matthew 6:10", content: "Because the church awaits a city 'whose architect and builder is God' (Heb 11:10), it is freed from both despair and utopianism. Christians do not expect to build the kingdom through legislation, nor do they abandon the public square as hopeless. Jeremiah told the exiles to 'seek the welfare of the city' even in Babylon (Jer 29:7) — to work for the common good of a society not their own, while awaiting God's. This eschatological hope produces patient, non-anxious, generative engagement: doing genuine good now, without the messianic pressure to make politics ultimate." },
];

const MODELS = [
  { model: "Two Kingdoms (Lutheran)", color: PURPLE, thinker: "Martin Luther, David VanDrunen", desc: "God governs the world through two distinct kingdoms: the spiritual kingdom (the church, through the gospel) and the civil kingdom (government and culture, through natural law and reason). Christians participate in both but must not confuse them. The church's task is preaching the gospel; the state's task is maintaining order. Christians bring Christian virtue to their civic roles but do not expect to Christianize the political order.", concern: "Can become quietist — insulating politics from prophetic critique; historically used to justify German Lutheran accommodation to National Socialism" },
  { model: "Transformationism / Kuyperian", color: GREEN, thinker: "Abraham Kuyper, Herman Dooyeweerd, Francis Schaeffer", desc: "Abraham Kuyper's famous claim: 'There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry: Mine!' Christians are called to bring the lordship of Christ into every domain — politics, art, science, business, education. The kingdom of God is advanced as Christians reform culture according to biblical norms. This was the founding vision of Calvin's Geneva and Puritan New England.", concern: "Risk of conflating the kingdom of God with a particular political program; historically contributed to the privileging of Christian cultural forms over gospel witness" },
  { model: "Anabaptist / Radical Discipleship", color: "#EF4444", thinker: "John Howard Yoder, Stanley Hauerwas, Mennonite tradition", desc: "The church is a political community — a 'contrast society' that witnesses to the world by being different. Christians do not seek to govern but to embody the Kingdom's alternative: forgiveness, nonviolence, enemy-love. Political engagement distracts from the church's primary calling to be a distinctive community. The Sermon on the Mount is a political program for the church, not a private ethic. Government violence (war, capital punishment) is incompatible with the Christian calling.", concern: "Can lead to withdrawal from the legitimate concerns of political life; leaves the field to those less committed to justice; has not always been consistent in its nonviolence" },
  { model: "Natural Law / Catholic Social Teaching", color: "#3B82F6", thinker: "Thomas Aquinas; Papal encyclicals (Leo XIII, John Paul II, Benedict XVI)", desc: "Reason accessible to all people — not special revelation — grounds political ethics. Natural law (accessible through reason) provides common ground for Christian engagement in pluralistic public life. Catholic Social Teaching articulates principles: subsidiarity (decisions at the lowest effective level), solidarity (obligation to the common good), the preferential option for the poor, and human dignity as the foundation of rights.", concern: "Optimism about natural reason's reliability post-Fall; the Magisterium's political applications of natural law are contested even among Catholics" },
  { model: "Public Theology / Liberal Democracy", color: "#F59E0B", thinker: "Reinhold Niebuhr, Richard Mouw, Max Stackhouse", desc: "Christians should engage in the liberal democratic political order as Christians — bringing their theological convictions to bear on public policy — but through the mediation of publicly accessible arguments (natural law, shared values, human dignity). Niebuhr's 'Christian Realism' acknowledged the persistence of sin in all political arrangements and the necessity of power to constrain greater evil. Christian political engagement should be humble, realistic, and not triumphalist.", concern: "Can lead to theological thinning — Christians speaking publicly in ways that suppress their specifically Christian convictions to be acceptable in secular discourse" },
  { model: "Liberation Theology", color: "#EC4899", thinker: "Gustavo Gutiérrez, Óscar Romero, James Cone", desc: "Emerging from Latin America in the 1960s-70s, liberation theology insists that God has a 'preferential option for the poor' and that theology must begin from the experience of the oppressed. The Exodus and the prophets are read as God's liberating action in history; salvation includes liberation from unjust social and economic structures, not merely individual souls. James Cone developed a parallel Black liberation theology in the United States. The movement reshaped how the global church reads Scripture's witness to the poor.", concern: "Some strands borrowed Marxist categories that flattened sin and reduced salvation to socio-political liberation; critics argue it can subordinate the gospel to a political program, though its core insistence on God's care for the oppressed is thoroughly biblical" },
  { model: "Augustinian Realism / Two Cities", color: "#06B6D4", thinker: "Augustine of Hippo, Oliver O'Donovan", desc: "In 'City of God,' Augustine described two cities formed by two loves — the earthly city by love of self unto contempt of God, the heavenly city by love of God unto contempt of self — intermingled in history until the end. Earthly politics can secure a limited, provisional peace (tranquillitas ordinis) but never ultimate justice; the Christian is a 'resident alien' using the earthly peace while longing for the City of God. This tradition grounds a chastened, hopeful realism about what politics can and cannot achieve.", concern: "Its sober realism can be misread as cynicism or passivity about real injustices that the gospel calls Christians to confront here and now" },
];

const ISSUES = [
  { issue: "Life and Bioethics", color: GREEN, evangelical: "Sanctity of life from conception to natural death; opposition to abortion, euthanasia, embryonic research that destroys human life; support for adoption, foster care, pregnancy resource centers", progressive: "Consistent life ethic extending to poverty, gun violence, capital punishment, and immigration; debate over abortion's legal status vs. moral status; emphasis on addressing root causes of abortion", tension: "Both sides claim the image of God as foundation but reach different policy conclusions about which policy actually honors it" },
  { issue: "Economic Justice", color: PURPLE, evangelical: "Free markets as generally consistent with human dignity and freedom; concern for inefficiency and dependency in welfare programs; emphasis on private charity and church-led benevolence", progressive: "Prophetic tradition's consistent demand for structural justice; concern that market outcomes can perpetuate systemic injustice; support for living wages, universal healthcare, and robust safety nets", tension: "Both sides claim Amos and the prophets; debate is fundamentally about whether justice requires policy intervention or private virtue" },
  { issue: "Immigration", color: "#3B82F6", evangelical: "Rule of law; national sovereignty; concern for social cohesion; hospitality to legal immigrants; debate on what policy best serves the common good", progressive: "Leviticus 19:34's command to 'love the foreigner as yourself'; the Exodus as paradigm for identifying with displaced peoples; concern for migrant workers' dignity and safety", tension: "Scripture commands both care for foreigners and respect for governing authorities — working out both simultaneously in policy is genuinely difficult" },
  { issue: "Creation Care", color: "#EF4444", evangelical: "Stewardship of creation (Gen 2:15); support for environmental responsibility; more skepticism of specific policy prescriptions (carbon taxes, international agreements) and more emphasis on human ingenuity and prosperity as compatible with environmental health", progressive: "Creation care as direct obedience to Genesis; climate change as an urgent justice issue (affecting the global poor disproportionately); support for significant policy intervention", tension: "Agreement on stewardship theology; disagreement on the scientific consensus's policy implications and the role of government in enforcing environmental standards" },
  { issue: "Racial Justice", color: "#F59E0B", evangelical: "Every person bears the image of God; personal racism is sin; concern that systemic analysis can overdetermine individuals; emphasis on reconciliation through the gospel", progressive: "Galatians 3:28 as political program; systemic sin requires systemic remedy; the church has a particular responsibility given its historical complicity in racial injustice; policies addressing disparate outcomes are required by justice", tension: "One of the most theologically contested questions in contemporary American Christianity; the debate is simultaneously about sociology (how does systemic injustice work?) and about political theology (what is the church's responsibility?)" },
  { issue: "Religious Liberty", color: "#EC4899", evangelical: "Liberty of conscience as a God-given right rooted in the image of God; strong protection for religious institutions, expression, and free exercise; concern that secular norms increasingly coerce believers in business, education, and medicine", progressive: "Affirmation of religious liberty alongside concern that 'liberty' can be invoked to justify discrimination; emphasis on balancing free exercise with the dignity and equal protection of others", tension: "Both sides affirm conscience and dignity; the genuine difficulty is adjudicating where one person's free exercise meets another's claim to equal treatment in shared public life" },
  { issue: "War, Peace & Violence", color: "#6366F1", evangelical: "Largely just war tradition (Augustine, Aquinas): force can be legitimate to restrain evil and protect the innocent under strict criteria (just cause, proper authority, last resort, proportionality); support for a lawful military and self-defense", progressive: "A strong pacifist and peacemaking strand (Sermon on the Mount, enemy-love); skepticism of militarism and the human cost of war; emphasis on Christ's nonviolence and Matthew 5:9 ('blessed are the peacemakers')", tension: "Both just war and pacifism are ancient, serious Christian traditions; the disagreement is whether the New Testament permits the Christian use of lethal force at all, and how Romans 13's 'sword' relates to the Sermon on the Mount" },
  { issue: "Marriage, Family & Sexuality", color: "#14B8A6", evangelical: "Marriage as a covenant between one man and one woman rooted in creation (Gen 2:24; Matt 19); the family as a pre-political institution the state should support; concern to protect children and conscience", progressive: "Emphasis on welcome, dignity, and non-discrimination; some affirm same-sex relationships while others hold the historic view but prioritize pastoral care; concern that culture-war framing alienates", tension: "This issue cuts across denominations and is among the most church-dividing of the era; the debate involves both the interpretation of Scripture and the proper relationship between the church's internal convictions and public law in a pluralistic society" },
];

const ENGAGEMENT = [
  { principle: "Vote as a Christian, not as a tribal member", color: GREEN, content: "The most dangerous political move for a Christian is tribal alignment — automatically supporting one party because that is what Christians like you do. Party loyalty often requires suppressing inconvenient biblical convictions. The biblical pattern is prophetic engagement with all parties from outside partisan commitments. No party fully embodies biblical values; every party partially does. Vote by evaluating each candidate and platform against biblical standards, not by finding the party that already has your loyalty." },
  { principle: "Do not make politics the primary driver of your church choice", color: PURPLE, content: "Choosing a church because of its political alignment is a form of idolatry — making politics the organizing principle of your spiritual life. Churches should be chosen for the quality of their preaching, the authenticity of their community, and their faithfulness to the gospel. If you attend only churches that share your political views, you will never have your political assumptions challenged by biblical preaching — which is exactly when preaching is most needed." },
  { principle: "Pray for those in authority — even when you oppose them", color: "#3B82F6", content: "Paul's instruction to pray for 'all those in authority' (1 Tim 2:1-2) was written under Nero — one of the most brutal emperors in Roman history. The instruction was not conditional on the ruler's virtue. Praying for governing authorities is not endorsement; it is obedience. It is also practically wise: rulers who govern well serve the church's mission; rulers who govern badly constrain it." },
  { principle: "Distinguish between core gospel commitments and political preferences", color: "#EF4444", content: "The resurrection of Christ is a non-negotiable gospel commitment. The optimal marginal tax rate is a political preference. Treating every political position as equally non-negotiable produces a community that cannot receive political correction and a witness that cannot be distinguished from tribalism. Christians should hold their political views with appropriate humility — as honest attempts to apply Scripture to complex empirical questions — rather than as revealed truth." },
  { principle: "Engage in local politics and civic life before national politics", color: "#F59E0B", content: "National political engagement produces enormous emotion and minimal actual impact for most Christians. Local political engagement — school boards, city councils, zoning decisions, mayoral elections — produces real change in real communities and requires Christians to develop substantive positions on local issues rather than national culture-war performances. Jeremiah 29's instruction to seek the shalom of the city applies most directly to the specific city where you live." },
  { principle: "The church's primary political act is being the church", color: "#10B981", content: "Stanley Hauerwas's controversial claim: the most political thing the church can do is be the church — a community of forgiveness, reconciliation, economic sharing, and enemy love that demonstrates an alternative to the world's power arrangements. A church that practices genuine racial reconciliation is doing more political work than a thousand political sermons. A church that cares for its members who are suffering from addiction is making a political statement about human dignity that no legislation can duplicate." },
  { principle: "Speak with both conviction and civility — to neighbors, not enemies", color: "#EC4899", content: "Scripture commands Christians to speak truth (Eph 4:15) and to do so 'with gentleness and respect' (1 Pet 3:15-16). The person who disagrees with you politically is not your enemy but your neighbor, often your brother or sister in Christ, and always an image-bearer of God. Online discourse rewards contempt, dunking, and tribal performance; the Christian witness runs directly against this current. You can hold strong convictions without dehumanizing those who differ. Colossians 4:6: 'Let your conversation be always full of grace, seasoned with salt.'" },
  { principle: "Beware the seductions of power and proximity to it", color: "#8B5CF6", content: "Jesus refused the kingdoms of the world when the devil offered them (Matt 4:8-10), and he warned that the rulers of the Gentiles lord it over others, 'but not so with you' (Mark 10:42-45). Christian movements that gain political access are repeatedly tempted to trade their prophetic independence for influence — to soften their witness, excuse the sins of their allies, and baptize a partisan agenda. Guard against the flattery of power; the church's authority is cruciform, exercised in service and truth-telling, not in the leverage of the powerful." },
  { principle: "Let Scripture, not cable news or your feed, form your political imagination", color: "#06B6D4", content: "Many Christians spend hours per week absorbing partisan media and minutes in Scripture, then wonder why their politics looks identical to their cable network and nothing like the Sermon on the Mount. The information diet disciples you. Romans 12:2 calls believers not to be conformed to the pattern of this age but transformed by the renewing of the mind. Practically: limit outrage media, read widely and charitably across perspectives, prioritize Scripture and the historic church's wisdom, and notice when your strongest reactions track your tribe rather than your Lord." },
];

const POLITICS_VIDEOS = [
  { videoId: "KbFKcFxqVlo", title: "Faith and Politics", channel: "The Gospel Coalition", description: "Tim Keller on what the Bible teaches about politics — why Christians can't simply baptize a political party and call it God's kingdom." },
  { videoId: "dXxmSDhvbHY", title: "The Christian and Civil Government", channel: "Ligonier Ministries", description: "R.C. Sproul on Romans 13 and the Christian's responsibility to civil authorities — including when civil disobedience is warranted." },
  { videoId: "fJnGJN6laqE", title: "Two Kingdoms: Church and State", channel: "Crossway", description: "The biblical doctrine of two kingdoms — how church and state relate, where they overlap, and where they must remain separate." },
  { videoId: "Z8lkuuhVkOI", title: "Justice, Gospel, and Political Engagement", channel: "Desiring God", description: "John Piper on how Christians engage political life without making politics ultimate — holding conviction with humility." },
];

const FAQS = [
  { q: "Should Christians even be involved in politics?", color: GREEN, a: "Yes — but with the right posture. Scripture shows believers serving in pagan governments (Joseph, Daniel, Nehemiah, Erastus), and Jeremiah 29:7 commands seeking the welfare of the city. Citizenship is a stewardship. At the same time, Jesus refused to let politics become ultimate (John 18:36). The question is not whether to engage but how: as ambassadors of a greater kingdom, not as partisans whose hope is in princes (Ps 146:3)." },
  { q: "Is there a 'Christian' political party?", color: PURPLE, a: "No. No party fully embodies the breadth of biblical concern — for life, the poor, the family, the stranger, justice, and liberty all at once. Every platform contains both things Scripture commends and things it condemns. Treating any party as the Christian party invites idolatry and discredits the gospel by binding it to a partisan brand. Christians can in good conscience belong to different parties while sharing one Lord." },
  { q: "What about Romans 13 and obeying the government?", color: "#3B82F6", a: "Romans 13 establishes that governing authority is God-ordained and that Christians should generally submit to it, pay taxes, and honor rulers. But it is not unconditional: the same Bible records faithful civil disobedience (the Hebrew midwives in Exodus 1, Daniel, the apostles in Acts 5:29 — 'we must obey God rather than men'). When the state commands what God forbids or forbids what God commands, the higher loyalty is to God — while accepting the legal consequences, as the martyrs did." },
  { q: "How do I talk politics with family or church members who disagree?", color: "#EF4444", a: "Lead with relationship and curiosity, not victory. Ask honest questions; listen to understand the underlying values (security, dignity, freedom, compassion) before debating policy. Distinguish core gospel commitments from contestable prudential judgments. Keep 1 Peter 3:15 in view — truth with gentleness and respect. And know when to stop: preserving the unity of the body (Eph 4:3) is often weightier than winning an argument." },
  { q: "Isn't 'social justice' a secular, even Marxist, idea?", color: "#F59E0B", a: "The biblical words for justice (mishpat, tsedaqah) saturate the Law and Prophets and consistently include defending the poor, the widow, the orphan, and the immigrant (Isa 1:17; Mic 6:8). Justice is a deeply biblical concept, older than any modern ideology. That said, particular contemporary frameworks for achieving justice can carry assumptions Christians should weigh critically. The wise course is to embrace what Scripture clearly demands while discerning which specific analyses and remedies fit a biblical anthropology." },
  { q: "What is Christian nationalism, and is it biblical?", color: "#10B981", a: "Christian nationalism is the belief that a nation's civic identity should be fused with Christianity and that the state should privilege and enforce it. Historic Christianity resists this fusion: Jesus's kingdom is 'not of this world' (John 18:36), the church is a transnational people drawn from every nation (Rev 7:9), and political power coupled with religious coercion has repeatedly corrupted the church's witness. Loving one's country is good; conflating the gospel with a national project is a category error that ultimately serves the nation rather than Christ." },
];

export default function PoliticalTheologyPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_political-theology_tab", "foundations");
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
          {(["foundations", "models", "issues", "engagement", "faqs", "videos"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
              {t === "foundations" ? "Biblical Foundations" : t === "models" ? "Engagement Models" : t === "issues" ? "Key Issues" : t === "engagement" ? "Faithful Engagement" : t === "videos" ? "🎬 Videos" : "FAQs"}
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

        {tab === "faqs" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[f.q] ? f.color + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setExpanded(ex => ({ ...ex, [f.q]: !ex[f.q] }))}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: f.color, fontWeight: 800, fontSize: 14, paddingRight: 16 }}>{f.q}</div>
                  <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[f.q] ? "−" : "+"}</span>
                </button>
                {expanded[f.q] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0 0" }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {POLITICS_VIDEOS.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                  src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
