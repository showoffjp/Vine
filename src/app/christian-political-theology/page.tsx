"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const TABS = [
  { id: "two-kingdoms", label: "Two Kingdoms & Christ & Culture" },
  { id: "romans-revelation", label: "Romans 13 & Revelation 13" },
  { id: "nationalism", label: "Christian Nationalism Critique" },
  { id: "common-good", label: "The Common Good" },
  { id: "partisanship", label: "Partisanship & the Church" },
  { id: "videos", label: "Videos" },
];

const TWO_KINGDOMS_CONTENT = [
  {
    title: "Luther&rsquo;s Two Kingdoms Doctrine",
    color: GREEN,
    body: "Martin Luther distinguished two realms through which God governs the world. The kingdom of the left hand (the civil realm) is governed by law, reason, force, and the sword &mdash; its purpose is to restrain evil and maintain external order in a fallen world. The kingdom of the right hand (the spiritual realm) is governed by the gospel, grace, and Word &mdash; its purpose is the salvation of souls and the growth of the church. The two kingdoms are distinct: the church should not wield the sword, and the state should not preach the gospel. Each has its God-ordained role. Christians inhabit both kingdoms simultaneously &mdash; as citizens of an earthly nation and as citizens of the kingdom of God &mdash; and must navigate the sometimes conflicting demands of each.",
  },
  {
    title: "H. Richard Niebuhr&rsquo;s Five Types: Christ and Culture",
    color: PURPLE,
    body: "In his landmark 1951 work <em>Christ and Culture</em>, H. Richard Niebuhr catalogued five ways Christians have related the gospel to human culture. (1) <strong>Christ Against Culture</strong>: the church withdraws from a corrupt world (the Anabaptist and monastic traditions). (2) <strong>Christ of Culture</strong>: the church accommodates the gospel to cultural values &mdash; cultural Christianity at its most naive. (3) <strong>Christ Above Culture</strong>: the Thomist synthesis, in which grace perfects nature and the church stands above culture as its highest expression. (4) <strong>Christ and Culture in Paradox</strong>: Luther&rsquo;s two kingdoms &mdash; the Christian lives in tension between two orders, never reconciling them fully in history. (5) <strong>Christ Transforming Culture</strong>: the Calvinist/Augustinian vision &mdash; the gospel is meant to reform and redeem every aspect of human culture under the lordship of Christ.",
  },
  {
    title: "Which Model is Most Biblical?",
    color: GOLD,
    body: "No single Niebuhrian type is entirely adequate. The &ldquo;Christ Against Culture&rdquo; model rightly guards the church&rsquo;s distinctiveness but can become sectarian and fail its Jeremiah 29:7 calling to seek the city&rsquo;s shalom. The &ldquo;Christ of Culture&rdquo; model collapses into accommodation and loses prophetic nerve. The transformationist model has the most biblical traction (Colossians 1:15&ndash;20, the cosmic lordship of Christ), but risks triumphalism when the kingdom arrives before the King. The paradox model captures the real tension Christians live in but can become quietist. Most evangelical theologians today argue for a chastened transformationism &mdash; working for cultural renewal without expecting to build the kingdom through politics.",
  },
  {
    title: "The Danger of Each Position",
    color: BLUE,
    body: "Each model carries characteristic dangers. Against Culture risks irrelevance and withdrawal from legitimate civic responsibility. Of Culture risks heresy and the loss of prophetic distinctiveness. Above Culture risks clericalism and an over-realized eschatology. Christ and Culture in Paradox (two kingdoms) has historically been used to justify quietism before political evil &mdash; German Lutheran accommodation to National Socialism being the catastrophic example. Transformationism risks theocracy, triumphalism, and the confusion of the church&rsquo;s agenda with the Kingdom of God. No model is immune from abuse; each requires ongoing theological vigilance and self-correction.",
  },
  {
    title: "Abraham Kuyper&rsquo;s Sphere Sovereignty",
    color: TEAL,
    body: "Abraham Kuyper (1837&ndash;1920) &mdash; theologian, journalist, and Prime Minister of the Netherlands &mdash; developed the neo-Calvinist alternative known as sphere sovereignty. Every domain of human life (family, church, state, science, art, business) is a distinct sphere with its own God-given authority and norms. No single sphere is absolute: the state may not absorb the church, the church may not control the family, and business may not dominate politics. Each sphere is directly accountable to God. Kuyper&rsquo;s most famous line: &ldquo;There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry: Mine!&rdquo; This vision grounds Christian engagement in every cultural domain without theocratic overreach, because Christ&rsquo;s lordship is exercised through the distinctive norms of each sphere rather than through ecclesiastical control.",
  },
];

const ROMANS_REVELATION_CONTENT = [
  {
    title: "Romans 13:1&ndash;7 &mdash; The Context",
    color: GREEN,
    body: "Paul writes Romans 13:1&ndash;7 to Christians living in Rome under the Emperor Nero &mdash; the same Nero who would later execute both Paul and Peter. The instruction to &ldquo;be subject to the governing authorities&rdquo; is not political naivety; it is a deliberate theological move. God has established governing authorities (even pagan ones) to serve his purposes in a fallen world. The Roman government &mdash; whatever its moral failures &mdash; maintained order, punished criminals, and enabled the church&rsquo;s missionary movement. Paul&rsquo;s instruction prevents the church from becoming a revolutionary political movement that would invite persecution and obscure the gospel. It is not unconditional: it is grounded in the government&rsquo;s role as &ldquo;God&rsquo;s servant for your good&rdquo; (v.4).",
  },
  {
    title: "The Purpose of Government",
    color: PURPLE,
    body: "Romans 13 describes government&rsquo;s God-ordained purpose precisely: to punish those who do evil and to praise those who do good (v.3&ndash;4). Government is a ministry of justice &mdash; a restraining force that keeps a fallen world from descending into chaos. This is a theology of government as provisional necessity in the &ldquo;not yet&rdquo; of the kingdom, not a theology of government as savior. The state bears the sword for this purpose; military force and criminal punishment are legitimate instruments of this justice function. This is the biblical grounding for just war theory, capital punishment debates, and the Christian support for law enforcement &mdash; all of which are contested but all of which must engage this text.",
  },
  {
    title: "The Limits of Submission: Acts 5:29",
    color: GOLD,
    body: "The same apostle who wrote Romans 13 also wrote Acts &mdash; and Acts records Peter&rsquo;s defiance of the Jerusalem Council&rsquo;s explicit order: &ldquo;We must obey God rather than men&rdquo; (Acts 5:29). The Hebrew midwives (Exodus 1) defied Pharaoh&rsquo;s infanticide order. Daniel prayed when Darius forbade it. Shadrach, Meshach, and Abednego refused the furnace. Submission to governing authority is not absolute; it is bounded by God&rsquo;s prior claim. The logic: governing authorities are ordained by God to serve God&rsquo;s purposes. When they turn against those purposes &mdash; commanding what God forbids or forbidding what God commands &mdash; the grounds for submission are removed. Civil disobedience is not rebellion against God; it is obedience to a higher authority.",
  },
  {
    title: "Revelation 13 &mdash; The Beast and the Counter-Narrative",
    color: BLUE,
    body: "Revelation 13 presents a strikingly different image of government than Romans 13. The beast rising from the sea (widely identified in early Christian interpretation as Rome, its seven heads as seven emperors or seven hills) demands worship, exercises totalitarian authority, and makes war on the saints. &ldquo;Babylon the great&rdquo; (Revelation 17&ndash;18) is Rome in its role as the great imperial power drunk with the blood of the saints. This is not contradiction but dialectic: Romans 13 shows government fulfilling its proper role; Revelation 13 shows government usurping the place of God. Both are real possibilities. Christians must have both texts: governments can be legitimate instruments of divine providence and can become demonic beasts demanding what belongs only to God. The distinction is the difference between paying taxes and burning incense to Caesar.",
  },
  {
    title: "How These Two Texts Hold Together",
    color: TEAL,
    body: "The canonical tension between Romans 13 and Revelation 13 is not a biblical contradiction but a realistic political theology. Governments are ordained by God (Romans 13) and can become demonic (Revelation 13). They are servants (Romans 13) and can become lords demanding ultimate allegiance (Revelation 13). Christians are called to submit where submission is due and to resist where the state overreaches into the territory that belongs to God alone. The key is discernment: recognizing when Caesar is functioning as Caesar (pay taxes, honor the emperor) and when Caesar is claiming to be God (burn no incense, refuse the mark). This discernment requires a church that reads Revelation as seriously as it reads Romans.",
  },
  {
    title: "The Theology of Civil Disobedience",
    color: GREEN,
    body: "Dietrich Bonhoeffer&rsquo;s involvement in the conspiracy against Hitler, Daniel&rsquo;s defiance of Darius&rsquo;s prayer ban, the Hebrew midwives&rsquo; protection of Israelite infants against Pharaoh&rsquo;s orders &mdash; these are the biblical and historical precedents for Christian civil disobedience. The tradition holds several consistent features: (1) Disobedience is to a specific unjust command, not to the institution of government as such. (2) The disobedient is willing to accept legal consequences (Daniel goes to the lion&rsquo;s den; he does not escape or revolt). (3) The disobedience is proportionate to the evil commanded. (4) The disobedient continues to pray for and seek the welfare of the governing authority (Jer 29:7). Bonhoeffer&rsquo;s case is the hardest: was assassination conspiracy within these parameters? He himself was uncertain, accepting the moral weight of the decision rather than claiming easy justification.",
  },
];

const NATIONALISM_CONTENT = [
  {
    title: "What is Christian Nationalism?",
    color: GREEN,
    body: "Christian nationalism is not simply the belief that Christian values have shaped American culture (a historically defensible claim) but the belief that America is or should be a Christian nation in a formal sense &mdash; that Christianity should have a privileged or established relationship to the state, that Christians should have special civic status, and that the preservation of American national identity is deeply tied to the preservation of Christianity. Some versions are explicit: the United States was founded as a Christian nation and should return to its Christian foundations through law. More moderate versions argue that Christian values should inform public policy without formal establishment. The theological critique engages the stronger versions directly.",
  },
  {
    title: "The Historical Myth",
    color: PURPLE,
    body: "The claim that America was founded as an explicitly evangelical Christian nation does not survive scrutiny. The key founders &mdash; Jefferson, Franklin, Madison, Washington, Hamilton &mdash; were largely Deists or theistic rationalists, not evangelical Christians in any doctrinally orthodox sense. Jefferson cut the miracles out of his Bible; Franklin doubted the divinity of Christ; Madison designed the Bill of Rights precisely to prevent any religious establishment. The First Amendment disestablishment was not a tactical concession but a principled conviction. The phrase &ldquo;Christian nation&rdquo; does not appear in the Constitution. This does not mean Christianity had no cultural influence &mdash; it did, significantly. But cultural influence is not the same as legal establishment, and the founders deliberately chose disestablishment over the theocratic models available to them.",
  },
  {
    title: "The Theological Problem: Conflating Church and Nation",
    color: GOLD,
    body: "The deepest theological problem with Christian nationalism is the confusion of the church with a nation-state. Israel under the Mosaic covenant was a unique theocratic exception: God established a specific people with a specific land, specific laws, and a specific national identity as a redemptive-historical episode pointing to Christ. That covenant has been fulfilled and superseded in Christ, who gathers a new Israel from every nation (Galatians 3:28&ndash;29; Revelation 7:9). The church is transnational by design. Attempting to re-establish a national covenant in the American mode is a category error: it takes what was unique to Israel&rsquo;s redemptive role and applies it to a nation-state that has no such role in the biblical narrative. This confusion tends to produce idolatry: the nation is treated with a devotion appropriate only to the church, and the gospel is subordinated to a national project.",
  },
  {
    title: "Using National Identity as a Proxy for Christian Identity",
    color: BLUE,
    body: "A recurring danger in Christian nationalism is the substitution of national or ethnic identity for genuine Christian identity. &ldquo;Christian nation&rdquo; rhetoric often implicitly means &ldquo;white, European-heritage, culturally Protestant&rdquo; &mdash; a fusion of race, ethnicity, and religion that has no biblical warrant. When Christian identity becomes coextensive with national or ethnic identity, the gospel&rsquo;s universality is compromised. The early church&rsquo;s most radical act was precisely the breaking of ethnic and national boundaries in Christ: &ldquo;There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus&rdquo; (Galatians 3:28). Christian nationalism tends to run directly against this trajectory, re-erecting the dividing walls that Christ tore down (Ephesians 2:14).",
  },
  {
    title: "Christian Values and Western Civilization &mdash; Genuine vs. Distorted",
    color: TEAL,
    body: "It is historically accurate to say that Christian theology contributed substantially to the development of Western institutions: the dignity of the individual, universal human rights, literacy and education, the abolition of slavery, the development of hospitals and universities. These contributions are real. The distortion comes when this genuine historical contribution is converted into a proprietary claim: that the West &ldquo;belongs&rdquo; to Christians, that Christianity&rsquo;s cultural contributions entitle the church to political privilege, or that cultural Christendom is equivalent to genuine Christian faith. Christianity&rsquo;s contribution to civilization came through the slow formation of conviction and virtue &mdash; not through legal establishment &mdash; and the church&rsquo;s historical role includes both the building of hospitals and the burning of heretics. Honest accounting requires both columns.",
  },
];

const COMMON_GOOD_CONTENT = [
  {
    title: "Catholic Social Teaching: Subsidiarity, Solidarity, Option for the Poor",
    color: GREEN,
    body: "Catholic Social Teaching (CST), developed through papal encyclicals from Leo XIII&rsquo;s <em>Rerum Novarum</em> (1891) onward, provides the most developed Christian framework for the common good. Three core principles: (1) <strong>Subsidiarity</strong>: decisions should be made at the lowest competent level. The state should not absorb what families, communities, and voluntary associations can do themselves; higher institutions should support, not replace, lower ones. (2) <strong>Solidarity</strong>: the human community is interdependent, and each person has obligations to others, especially the vulnerable. We are not atomistic individuals but members of a body. (3) The <strong>Preferential Option for the Poor</strong>: the moral test of any social arrangement is how it affects the weakest members. Not that the poor are morally superior, but that God has a particular concern for the vulnerable (Psalm 72; Luke 4:18; James 2:5) and the church must share it.",
  },
  {
    title: "Protestant Public Theology: O&rsquo;Donovan and Wolterstorff",
    color: PURPLE,
    body: "Oliver O&rsquo;Donovan (<em>The Desire of the Nations</em>, 1996) argues that political authority is grounded in the resurrection of Christ, who is Lord of all creation. The church&rsquo;s task is not to build the kingdom through politics but to witness to the Kingdom that Christ has established &mdash; calling political authorities to their proper role as servants of justice and peace. Nicholas Wolterstorff (<em>Justice: Rights and Wrongs</em>, 2008) argues that universal human rights are most coherently grounded in the Christian conviction that every person is loved by God and bears the imago Dei. Without theistic grounding, rights claims become philosophically unstable. Both thinkers are engaged with secular political philosophy but argue that Christian theology provides superior foundations for the political goods secular liberalism values.",
  },
  {
    title: "The Church&rsquo;s Distinct Witness vs. Christians&rsquo; Civic Engagement",
    color: GOLD,
    body: "There is an important distinction between the church as an institution speaking prophetically to political questions, and individual Christians acting as citizens in the political order. The church&rsquo;s institutional voice should focus on what Scripture speaks clearly: the dignity of the poor, the protection of the vulnerable, the demands of justice, the ethics of war and peace. It should be cautious about endorsing specific parties, candidates, or policy prescriptions where the connection to biblical principle is mediated by contested empirical assumptions. Individual Christians, by contrast, are called to full civic engagement &mdash; voting, serving in government, advocating for policy positions &mdash; doing so as Christians who bring their convictions into the public square, while recognizing that other Christians may in good conscience reach different policy conclusions.",
  },
  {
    title: "Advocacy for the Poor, the Environment, Peace, and Human Dignity",
    color: BLUE,
    body: "The biblical witness is consistent and demanding: the God of Israel is the protector of the widow, the orphan, the poor, and the stranger (Deuteronomy 10:17&ndash;19; Psalm 146; Proverbs 19:17; Matthew 25:31&ndash;46). Advocacy for the poor is not a political preference but a biblical mandate. Similarly, stewardship of creation (Genesis 2:15) grounds Christian concern for the environment &mdash; not as a partisan political commitment but as faithfulness to the Creator&rsquo;s intention. Peacemaking (&ldquo;Blessed are the peacemakers,&rdquo; Matthew 5:9) requires Christians to take the human cost of war seriously and to exhaust peaceful alternatives. Human dignity &mdash; rooted in the imago Dei &mdash; grounds opposition to torture, dehumanizing rhetoric, and policies that treat people as means rather than ends. These are not liberal or conservative commitments; they are biblical ones that cut across the political spectrum.",
  },
  {
    title: "The Jerusalem Letter: Seek the Shalom of the City",
    color: TEAL,
    body: "Jeremiah 29:7 is the key text for Christian public engagement: &ldquo;But seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare.&rdquo; The Hebrew word is <em>shalom</em> &mdash; not merely the absence of conflict but the fullness of flourishing: right relationships, justice, beauty, abundance, peace with God and neighbor. The Israelite exiles were commanded to seek this for Babylon &mdash; a pagan city that had destroyed Jerusalem. The application to the church in any culture is clear: Christians are strangers and exiles (1 Peter 2:11) who nonetheless seek the genuine flourishing of the societies in which they live, not as a strategy for cultural power but as obedience to God&rsquo;s command. Seeking shalom means advocacy for justice, care for the poor, environmental stewardship, and peaceful civic life &mdash; not as the church&rsquo;s primary mission (which is the proclamation of the gospel) but as the necessary expression of neighbor love.",
  },
];

const PARTISANSHIP_CONTENT = [
  {
    title: "The Danger of the Church as Partisan Arm",
    color: GREEN,
    body: "The most corrosive political pathology in contemporary American Christianity is the capture of local churches and denominations by partisan political identities. When a church becomes recognizably a Republican or Democratic institution &mdash; when its preaching, its community culture, its social networks, and its giving patterns track a political party rather than the gospel &mdash; it has lost something essential. A church captured by the right cannot speak prophetically about nationalism, militarism, the treatment of immigrants, or economic justice. A church captured by the left cannot speak prophetically about abortion, sexual ethics, or religious liberty. Both sides have traded prophetic independence for partisan belonging, and the cost is the gospel&rsquo;s credibility as a word that comes from outside human political arrangements.",
  },
  {
    title: "The Prophetic Tradition: Speaking Truth to All Power",
    color: PURPLE,
    body: "The Old Testament prophets were not partisan political operatives. Amos condemned the economic exploitation of the poor &mdash; a critique that cuts against complacent wealth on either side. Isaiah warned against military alliances that substituted political power for trust in God &mdash; a critique of every political messialism. Jeremiah condemned the false prophets who said &ldquo;Peace, peace&rdquo; when there was no peace &mdash; a critique of church leaders who baptize the agenda of the powerful rather than speaking truth. Jesus drove the money changers from the temple, condemned the Pharisees&rsquo; hypocrisy, and declared to Pilate that Pilate&rsquo;s authority came from God &mdash; neither accommodating religious power nor revolutionary political power. The prophetic tradition speaks truth to power regardless of which party holds it.",
  },
  {
    title: "The Consistent Ethic of Life",
    color: GOLD,
    body: "Cardinal Joseph Bernardin&rsquo;s &ldquo;consistent ethic of life&rdquo; (1983) argued that a genuinely Christian political ethic must be consistent across all life issues: abortion, poverty, immigration, the environment, capital punishment, war, euthanasia, and nuclear weapons. Life is sacred at every stage and in every context. This framework cuts across both party lines and resists the tendency to select the life issues that reinforce partisan identity while ignoring others. Evangelicals who oppose abortion (rightly) but support policies indifferent to poverty, immigrant deaths, or environmental degradation are inconsistent. Progressives who advocate for the poor and the environment but dismiss the unborn are equally inconsistent. A genuinely Christian political ethic is inconvenient for both parties because it takes all human life seriously.",
  },
  {
    title: "How the Gospel Critiques Both Left and Right",
    color: BLUE,
    body: "The gospel critiques the right&rsquo;s temptations: nationalism (the church is transnational), the conflation of Christianity with cultural whiteness, indifference to the poor and the stranger (Matthew 25), militarism that contradicts the Prince of Peace, and the idolatry of national identity. The gospel equally critiques the left&rsquo;s temptations: the abortion of the unborn (who bear the imago Dei), the reduction of human identity to group membership rather than individual dignity before God, the sexual libertarianism that conflicts with the biblical account of human embodiment, and the replacement of transcendent morality with therapeutic self-affirmation. Neither party can absorb the gospel without remainder. This is a feature, not a bug: the gospel is not a political program but a word from outside human history about the one who is Lord of all history.",
  },
  {
    title: "Tim Keller: Why Christians Should Not Be Fully at Home in Any Political Party",
    color: TEAL,
    body: "Tim Keller argued throughout his ministry that the very coherence of Christian faith requires political homelessness. The Christian who is fully at home in a political party has almost certainly allowed the party to shape their understanding of Scripture rather than allowing Scripture to shape their political engagement. Keller observed that the Bible&rsquo;s witness on social justice is largely progressive (concern for the poor, the immigrant, the vulnerable) while its witness on personal ethics is largely conservative (sexual ethics, the sanctity of life, the nature of marriage). A Christian who has accommodated entirely to one party&rsquo;s positions has almost certainly subordinated part of biblical truth to political identity. The experience of political homelessness &mdash; of being truly independent, willing to criticize all parties by biblical standards &mdash; is the appropriate Christian political posture.",
  },
  {
    title: "Protecting the Church&rsquo;s Prophetic Independence",
    color: GREEN,
    body: "The church&rsquo;s prophetic independence requires active protection because the pressures toward partisan capture are immense and persistent. Practically, this means: churches should not host partisan political events, endorse candidates, or allow political fundraising on church property. Pastors should preach on the full range of biblical social ethics rather than selecting the issues that reinforce their congregation&rsquo;s political identity. Church leaders should publicly criticize when leaders of their preferred party act unjustly or unethically, even at personal cost. The congregation should include people across the political spectrum, and the church&rsquo;s community life should model the reconciliation of people who would otherwise be political enemies. A church that is politically diverse and nonetheless unified in Christ is a more powerful political witness than any partisan alignment could produce.",
  },
];

export default function ChristianPoliticalTheologyPage() {
  const [tab, setTab] = useState("two-kingdoms");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const accentFor = (id: string) => {
    if (id === "two-kingdoms") return GREEN;
    if (id === "romans-revelation") return PURPLE;
    if (id === "nationalism") return GOLD;
    if (id === "common-good") return BLUE;
    if (id === "partisanship") return TEAL;
    return GREEN;
  };

  const accent = accentFor(tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>

        <div style={{ marginBottom: "0.6rem" }}>
          <span style={{ background: PURPLE + "22", color: PURPLE, padding: "0.2rem 0.85rem", borderRadius: 20, fontSize: "0.77rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Political Theology</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem,4.5vw,2.7rem)", fontWeight: 900, lineHeight: 1.15, margin: "0.7rem 0 0.8rem" }}>
          Christian Political Theology
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2.25rem" }}>
          The theology of politics &mdash; two kingdoms, Christ and culture, Romans 13 and Revelation 13, Christian nationalism, the common good, and how Christians engage the public square without losing their prophetic voice.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.05rem", borderRadius: 20, border: "1px solid",
              fontSize: "0.83rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? accentFor(t.id) : BORDER,
              background: tab === t.id ? accentFor(t.id) + "22" : "transparent",
              color: tab === t.id ? accentFor(t.id) : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* TWO KINGDOMS */}
        {tab === "two-kingdoms" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {TWO_KINGDOMS_CONTENT.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* ROMANS 13 & REVELATION 13 */}
        {tab === "romans-revelation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {ROMANS_REVELATION_CONTENT.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* CHRISTIAN NATIONALISM CRITIQUE */}
        {tab === "nationalism" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: GOLD + "10", border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "1rem 1.4rem", marginBottom: "0.25rem" }}>
              <p style={{ color: GOLD, fontWeight: 700, fontSize: "0.88rem", margin: 0 }}>A Theological Critique</p>
              <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, margin: "0.4rem 0 0" }}>This section critiques Christian nationalism theologically &mdash; not from a progressive political perspective, but from the standpoint of classical Christian ecclesiology and the New Testament&rsquo;s vision of the church as a transnational people gathered from every nation.</p>
            </div>
            {NATIONALISM_CONTENT.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* THE COMMON GOOD */}
        {tab === "common-good" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {COMMON_GOOD_CONTENT.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PARTISANSHIP & THE CHURCH */}
        {tab === "partisanship" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {PARTISANSHIP_CONTENT.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.5rem" }}>Videos</h2>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="LZaFEAi80Hg" title="Tim Keller on Christians and Politics" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>Tim Keller on Christians and Politics</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>Why Christians should not be fully at home in any political party, and how to engage politics without losing the prophetic independence the gospel requires.</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="j5PCVOmvDqU" title="NT Wright on Church and State" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>NT Wright on Church and State</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>How the New Testament shapes the church&rsquo;s relationship to political authority &mdash; Romans 13, Revelation 13, and the theology of the principalities and powers.</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
              <VideoEmbed videoId="V4b0NOzxOzQ" title="Christian Nationalism Critique" />
              <div style={{ padding: "1rem 1.25rem" }}>
                <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.3rem" }}>Christian Nationalism Critique</h4>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>A theological examination of Christian nationalism &mdash; what it gets right about cultural influence, and where it goes wrong in conflating the church with a nation-state.</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
