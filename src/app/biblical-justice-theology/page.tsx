"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "foundations" | "ot" | "nt" | "today" | "videos";

const FOUNDATIONS = [
  {
    title: "Mishpat (מִשְׁפָּט) — Justice / Judgment",
    color: GREEN,
    ref: "Deut 10:18; Ps 82:3; Isa 1:17; Amos 5:24; Mic 6:8",
    content: "Mishpat appears over 200 times in the Old Testament and carries a double meaning: the act of legal judgment and the state of justice in a community. It refers to the rights owed to the poor, the widow, the orphan, and the stranger — those whom the powerful easily exploit. Mishpat includes punitive justice (holding wrongdoers accountable) but always also restorative justice (restoring the wronged party to dignity and community). When Amos cries 'let mishpat roll down like waters,' he is not merely demanding courtroom fairness — he is demanding that the entire social order be reoriented toward the vulnerable. Tim Keller (Generous Justice) notes that mishpat used as a verb means to 'do justice' — it is active, not passive. You do not merely refrain from injustice; you pursue it."
  },
  {
    title: "Tzedakah (צְדָקָה) — Righteousness / Justice",
    color: PURPLE,
    ref: "Gen 18:19; Lev 19:15; Ps 112:9; Prov 21:3; Isa 58:6-7",
    content: "Tzedakah is usually translated 'righteousness' in English Bibles, but the Hebrew concept is inseparable from social justice. The tzaddik — the righteous person — is not primarily someone who maintains personal purity but someone who gives to the poor, defends the vulnerable, and maintains right relationships in community. Psalm 112:9 says of the righteous person: 'he has distributed freely; he has given to the poor.' In post-biblical Judaism, tzedakah became the primary word for charitable giving — not because giving is optional, but because giving to the poor is simply what righteousness looks like. The separation of personal righteousness from social justice is a distinctly modern Western reading; in Hebrew, these are the same word because they describe the same reality."
  },
  {
    title: "Hesed (חֶסֶד) — Lovingkindness / Covenant Loyalty",
    color: "#3B82F6",
    ref: "Exod 34:6-7; Ps 136; Hos 6:6; Mic 6:8; Lam 3:22-23",
    content: "Hesed is one of the untranslatable words of Scripture — rendered 'lovingkindness,' 'steadfast love,' 'mercy,' 'loyalty,' and 'covenant faithfulness' across various translations. It describes the loyal, persevering love that flows from covenant relationship — what it looks like to remain faithful to those you are bound to. Micah 6:8's famous triad — 'do justice (mishpat), love hesed, and walk humbly with your God' — places covenant loyalty at the center of what God requires. Hesed is love that costs something. It is the love that does not walk away when the relationship becomes inconvenient. Its communal form is the commitment to see that everyone in the covenant community flourishes, at personal cost if necessary."
  },
  {
    title: "Shalom (שָׁלוֹם) — Peace / Wholeness / Flourishing",
    color: "#F59E0B",
    ref: "Num 6:24-26; Jer 29:7; Isa 65:17-25; John 14:27; Rev 21:1-5",
    content: "Shalom is far richer than the English word 'peace.' It does not merely mean the absence of conflict but the presence of wholeness — the full flourishing of human beings in right relationship with God, one another, and creation. When the Torah pronounces the Aaronic blessing ('The LORD bless you and keep you... and give you shalom'), it is invoking total well-being: physical health, relational harmony, spiritual wholeness, economic sufficiency, community belonging. Justice, in the biblical imagination, is not the end goal — shalom is. Justice is the instrument by which shalom is built and protected. The vision of Isaiah 65 — where no child dies young, no one builds a house for another to live in, no one plants a vineyard for another to eat from — is a vision of shalom as the goal of justice work."
  },
  {
    title: "Eikon (εἰκών) — Image of God",
    color: "#EF4444",
    ref: "Gen 1:26-28; Ps 8:5-6; Acts 17:28-29; James 3:9; Col 1:15",
    content: "The claim that every human being is created in the image of God (imago Dei) is the theological foundation of justice. It is not a political statement — it is an ontological one. To bear the image of God is to possess an intrinsic dignity that cannot be forfeited by circumstance, status, sin, or social category. This is what makes justice a theological category and not merely a political preference: to wrong a human being is to wrong someone who bears the likeness of God. James 3:9 grounds its argument against cursing human beings directly in the image: 'With the tongue we curse human beings, who have been made in the likeness of God.' When Genesis 9:6 grounds the prohibition of murder in the image, it establishes that human dignity is prior to any social arrangement. Justice is the social form of respect for the image."
  },
  {
    title: "Dikaiosynē (δικαιοσύνη) — Righteousness / Justice",
    color: "#10B981",
    ref: "Matt 5:6; 6:33; Rom 1:17; 3:21-26; 2 Cor 5:21; James 1:20",
    content: "The Greek word dikaiosynē is translated 'righteousness' in most English New Testaments, but NT scholar N.T. Wright has argued forcefully that the word carries both personal righteousness and restorative justice — a range of meaning parallel to the Hebrew tzedakah. When Jesus blesses those who 'hunger and thirst for dikaiosynē' (Matt 5:6), he may well mean those who long for the world to be put right, not merely those who want personal moral improvement. Wright's reading of Paul's 'righteousness of God' language in Romans emphasizes the covenant faithfulness of God who acts to put the world right — a cosmic justice project, not merely a transaction for individual souls. This does not dissolve the forensic dimension of justification by faith but embeds it in a larger narrative of God's justice-project for all creation."
  }
];

const OT_THEMES = [
  {
    id: "exodus",
    title: "The Exodus",
    subtitle: "Liberation as the Template for Justice",
    ref: "Exod 1–15; 3:7-10; Deut 24:22; Mic 6:4",
    content: "The Exodus is the foundational political event of the Old Testament. God's announcement to Moses — 'I have seen the oppression of my people... I have heard their cry... I know their sufferings, and I have come down to deliver them' (Exod 3:7-9) — establishes a paradigm: God is not neutral. God takes the side of the oppressed slave people against the imperial power. Every subsequent appeal to justice in the Torah and Prophets echoes this event. 'You shall not oppress a stranger, for you were strangers in the land of Egypt' (Exod 23:9). Israel's obligation to justice is grounded not in abstract principle but in their own experience of oppression and liberation.\n\nLiberation theology (Gustavo Gutiérrez, James Cone) draws on this paradigm to argue that God has a 'preferential option for the poor' — God is not only impartial but actively sides with the marginalized. Conservative critics argue that liberation theology can collapse into Marxist class analysis and neglect the Exodus's theological center: redemption by blood, the Passover. The debate is whether the Exodus is primarily a sociological paradigm for political liberation or primarily a theological paradigm for redemption from sin — with most careful readers insisting it is both, and that separating them distorts the text."
  },
  {
    id: "prophets",
    title: "The Prophets' Social Critique",
    subtitle: "Amos, Isaiah, Micah, Jeremiah on Social Sin",
    ref: "Amos 5:21-24; Isa 1:10-17; 58:1-7; Mic 6:8; Jer 22:13-17",
    content: "The classical prophets are the most sustained social critics in all of ancient literature. Amos (8th century BC) attacks the merchant class for selling the poor for a pair of sandals, for using dishonest scales, and for trampling the needy — and then attending worship as if nothing is wrong. God's verdict: 'I hate, I despise your religious feasts; I cannot stand your assemblies... But let justice roll down like waters, and righteousness like an ever-flowing stream' (Amos 5:21,24).\n\nIsaiah 58 condemns fasting and religious observance divorced from justice: 'Is not this the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free... to share your bread with the hungry?' Micah 6:8 distills the entire prophetic tradition into three demands: do justice, love hesed, walk humbly with your God.\n\nJeremiah 22:13-17 attacks King Jehoiakim for building his palace with forced labor and unpaid wages, then declares: 'Did not your father eat and drink and do justice and righteousness? Then it was well with him. He judged the cause of the poor and needy; then it was well. Is not this to know me? declares the LORD.' The prophets define knowing God in terms of doing justice — not as the whole of religion but as its ineliminable expression."
  },
  {
    id: "torah",
    title: "The Torah's Justice Laws",
    subtitle: "Gleaning, Jubilee, and Protection of the Vulnerable",
    ref: "Lev 19:9-10; 25:1-55; Deut 14:28-29; 15:1-11; 24:17-22",
    content: "The Torah contains a remarkable body of law designed to structurally prevent extreme poverty and protect vulnerable classes. The gleaning laws (Lev 19:9-10) required farmers not to harvest the edges of their fields or pick up what fell — leaving it for the poor and the stranger. This is not charity; it is a property law that built provision for the poor into the economic structure.\n\nThe Sabbath year (Deut 15) required the cancellation of debts every seven years — a radical economic reset that prevented permanent indebtedness. The Jubilee (Lev 25) mandated the return of land to original families every 50 years, ensuring that no permanent underclass could be created through accumulated disadvantage. The theological grounding is striking: 'The land shall not be sold in perpetuity, for the land is mine. For you are strangers and sojourners with me' (Lev 25:23). The economy is structured by the recognition that everything belongs to God.\n\nThe Torah also contains specific protections for the widow, the orphan, and the stranger — the three categories of those with no male protector in a patriarchal economy. Weights and measures laws (Lev 19:35-36) addressed commercial fraud. These laws represent a theological vision of an economy structured by covenant faithfulness, not merely market exchange."
  },
  {
    id: "psalms",
    title: "The Psalms and the Poor",
    subtitle: "Ps 72, 82, 146 — God's Justice Priorities",
    ref: "Ps 9:18; 12:5; 35:10; 72:1-4,12-14; 82:1-4; 146:5-9",
    content: "The Psalms reveal Israel's understanding of God's character as fundamentally oriented toward justice for the poor. Psalm 72 describes the ideal king: 'May he defend the cause of the poor of the people, give deliverance to the children of the needy, and crush the oppressor... For he delivers the needy when he calls, the poor and him who has no helper. He has pity on the weak and the needy, and saves the lives of the needy.' This is the vision of just governance — not economic neutrality but active defense of those who have no one to defend them.\n\nPsalm 82 is startling in its bluntness: God stands in the divine council and judges the judges themselves: 'How long will you judge unjustly and show partiality to the wicked? Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute.' The human judges who fail to do justice are told they will 'die like men.'\n\nPsalm 146 lists God's own justice priorities: the oppressed, the hungry, the prisoners, the blind, those bowed down, the sojourner, the widow, the fatherless. These psalms form a theological portrait of God as the ultimate guarantor of justice for those whom human systems fail — and ground the worshiper's call to imitate the God they praise."
  },
  {
    id: "wisdom",
    title: "Wisdom Literature",
    subtitle: "Proverbs, Job, and Ecclesiastes on Justice",
    ref: "Prov 14:31; 17:5; 22:22-23; 31:8-9; Job 19:25-27; 24:2-12; Eccl 4:1-3; 5:8",
    content: "Wisdom literature engages the question of justice in a more reflective, questioning mode than the Prophets. Proverbs is direct: 'Whoever oppresses a poor man insults his Maker' (14:31); 'Do not rob the poor, because he is poor, or crush the afflicted at the gate, for the LORD will plead their cause' (22:22-23). Proverbs 31:8-9 — often cited as an advocacy mandate — instructs: 'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.'\n\nJob is the Bible's most sustained meditation on the apparent injustice of God — why do the wicked prosper and the righteous suffer? Job 24 catalogs the crimes of the powerful with journalistic specificity: moving boundary stones, seizing flocks, defrauding orphans, foreclosing on widows. Job's complaint is not merely personal but cosmic: why does God not act? The book does not resolve this fully — God's answer from the whirlwind is about the limits of human understanding, not a theodicy that makes suffering make sense.\n\nEcclesiastes observes with aching honesty: 'If you see in a province the oppression of the poor and the violation of justice and righteousness, do not be amazed at the matter' (5:8). Injustice persists; systems protect themselves; the wise person acknowledges this without despair."
  }
];

const NT_ITEMS = [
  {
    title: "The Sermon on the Mount",
    color: GREEN,
    ref: "Matt 5:1-12; 5:38-48; 6:19-24; 7:12",
    content: "The Beatitudes (Matt 5:3-12) are not a list of virtues to aspire to but a description of those whom God blesses in the Kingdom — and the list is striking. The poor in spirit, those who mourn, the meek, those who hunger and thirst for righteousness (dikaiosynē), the merciful, the pure in heart, the peacemakers, those persecuted for righteousness. N.T. Wright reads the Beatitudes as a justice manifesto: these are not the powerful, the self-sufficient, the well-connected — these are those whom the world's system leaves behind, and Jesus declares them the inheritors of the Kingdom.\n\nThe Sermon's ethic of non-retaliation (5:38-42), love of enemies (5:44), and radical generosity challenges the assumption that justice is primarily about getting even. The warning about wealth in 6:19-24 ('you cannot serve both God and money') positions economic loyalty as a spiritual question. The Golden Rule (7:12) grounds the whole law in the simple imperative to treat others as you wish to be treated — which, applied structurally, is a comprehensive justice principle."
  },
  {
    title: "The Nazareth Manifesto (Luke 4:18-19)",
    color: PURPLE,
    ref: "Luke 4:16-21; Isa 61:1-2; Luke 7:22; 14:13-14",
    content: "Jesus's inaugural sermon in his hometown synagogue is one of the most concentrated statements of his mission in the Gospels. Reading from Isaiah 61, he announces: 'The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord's favor.' Then he closes the scroll and says: 'Today this scripture is fulfilled in your hearing.'\n\nThe list is not metaphorical — or not only metaphorical. Jesus healed the blind (literally), cast out demons (literally freeing the captive), ate with the poor and outcast. 'The year of the Lord's favor' echoes the Jubilee of Leviticus 25. The first word of the good news is 'to the poor.' Conservative interpreters emphasize the spiritual dimensions; progressive interpreters emphasize the material dimensions. The most defensible reading maintains both: Jesus proclaimed and enacted a comprehensive salvation that addressed the whole person — body, soul, relationship, and social standing."
  },
  {
    title: "James 2 — Faith Without Works",
    color: "#3B82F6",
    ref: "James 2:1-17; 5:1-6; 1 John 3:17-18",
    content: "James 2 is the New Testament's sharpest attack on the divorce of faith from practice, with particular focus on how Christians treat the poor. The passage begins with a scene: a rich man in fine clothing enters the assembly and is given the best seat; a poor man enters in shabby clothes and is told to stand or sit on the floor. James's verdict is severe: 'Have you not then made distinctions among yourselves and become judges with evil thoughts?' (2:4). He then invokes an economic reality: 'Is it not the rich who oppress you, and the ones who drag you into court? Is it not they who blaspheme the honorable name by which you were called?' (2:6-7).\n\nThe famous argument about faith and works (2:14-17) uses material poverty as its test case: 'If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, \"Go in peace, be warmed and filled,\" without giving them the things needed for the body, what good is that?' James 5 expands to a prophetic-style judgment on the rich who have withheld wages from farm workers — an echo of the Torah's protections for day laborers — while living in luxury."
  },
  {
    title: "Revelation 18 — The Fall of Babylon",
    color: "#F59E0B",
    ref: "Rev 17:1-6; 18:1-24; 19:1-3",
    content: "Revelation 18 is the Bible's most extended economic critique of empire. Babylon — the symbolic name for Rome in John's apocalyptic vision — falls, and the merchants of the earth mourn because 'no one buys their cargo anymore' (18:11). The cargo list is remarkable in its detail: gold, silver, jewels, fine linen, purple, silk, scarlet cloth, aromatic woods, ivory, bronze, iron, marble, cinnamon, spice, incense, myrrh, frankincense, wine, oil, fine flour, wheat, cattle, sheep, horses, chariots — and finally, 'slaves, and human souls' (18:13). The list ends with human beings as commodities.\n\nJohn's vision condemns an economic system built on luxury, imperial extraction, and the trading of human lives. The kings and merchants weep; heaven rejoices (19:1-3). NT scholar Richard Bauckham argues that Revelation's economic critique was the most politically dangerous dimension of its message — more threatening to Rome than its theology. For contemporary readers, this text asks which economic arrangements treat human beings as means to profit rather than ends in themselves — image-bearers whose dignity cannot be priced."
  },
  {
    title: "The Early Church (Acts 2:44-45; 4:32-35)",
    color: "#EF4444",
    ref: "Acts 2:44-45; 4:32-35; 6:1-7; Deut 15:4",
    content: "Acts describes the Jerusalem community with a striking portrait of economic sharing: 'All who believed were together and had all things in common. And they were selling their possessions and belongings and distributing the proceeds to all, as any had need' (2:44-45). The summary in 4:34 is definitive: 'There was not a needy person among them.' This is an explicit echo of Deuteronomy 15:4's vision of what a covenant community practicing the sabbath year would look like — a fulfillment of Torah in the Spirit.\n\nThe Greek word koinonia — usually translated 'fellowship' — has economic content: it describes sharing, partnership, mutual participation. This was not coercive communism (Ananias and Sapphira were free to keep their money — their sin was lying about it); it was voluntary, Spirit-empowered economic solidarity. When the Hellenist widows were being neglected in the daily distribution (6:1), the Apostles created the diaconate — a structural solution to a structural problem. The early church's witness was partly economic: pagan observers noted that Christians cared for their poor and sick and even for strangers."
  },
  {
    title: "Paul on Equality (2 Cor 8–9)",
    color: "#10B981",
    ref: "2 Cor 8:1-15; 9:6-15; Gal 3:28; Rom 15:25-27",
    content: "Paul's great collection for the Jerusalem church — described across multiple letters — is his most sustained practical expression of economic justice theology. The theological ground he gives is striking: 'Your abundance at the present time should supply their need, so that their abundance may supply your need, that there may be equality (isotēs)' (2 Cor 8:14). The word isotēs — equality — is explicitly invoked as the goal of economic sharing within the body of Christ.\n\nPaul grounds the collection in the Incarnation ('though he was rich, yet for your sake he became poor, so that you by his poverty might become rich' — 8:9) and in the Exodus (he quotes the manna story from Exod 16:18: 'whoever gathered much had nothing left over, and whoever gathered little had no lack' — 8:15). Paul is saying that the economic relationship between the Gentile churches and the Jerusalem church embodies the same divine pattern as the Incarnation and the Exodus. The collection was also an act of Jewish-Gentile reconciliation — Gentile churches honoring their debt to the Jewish root of the faith."
  }
];

const TODAY_CARDS = [
  {
    title: "Social Justice vs. Biblical Justice",
    color: GREEN,
    subtitle: "The Current Evangelical Debate",
    conservative: "Voddie Baucham (Fault Lines) argues that 'social justice' is a Trojan horse for critical theory inside the church. He is concerned that secular ideological frameworks are being smuggled in under biblical language, and that 'systemic racism' as a category attributes guilt in ways that contradict biblical anthropology. John MacArthur's Dallas Statement on Social Justice and the Gospel (2018) raised similar concerns about justice language displacing the gospel and dividing the church along identity lines.",
    progressive: "Tim Keller (Generous Justice) argues that justice for the poor is not a 'social gospel' add-on but is demanded throughout Scripture — particularly in the prophets — as an integral expression of faith. N.T. Wright argues that dikaiosynē in the NT encompasses both justification and restorative justice. Keller's view: care for the poor is the inevitable fruit of genuine faith, not a replacement for it. To call biblical justice 'social justice' as a slur is to reject the prophets.",
    tension: "Both sides claim fidelity to Scripture. The real debate is whether systemic analysis of injustice is a legitimate category for Christian social thought, or whether it fundamentally distorts the gospel by attributing moral responsibility to abstractions rather than persons."
  },
  {
    title: "Racial Justice",
    color: PURPLE,
    subtitle: "Structural Sin, Reconciliation, and Reparations",
    conservative: "Personal racism is sin; the gospel is the ultimate answer to racial division (Gal 3:28). Concern that 'structural sin' language removes personal moral accountability. Emphasis on colorblindness as the Christian ideal and on the church's remarkable cross-racial track record. Skepticism of reparations as practically unworkable and theologically misguided — reconciliation comes through the cross, not redistribution. Key figures: Voddie Baucham, conservative evangelicals in SBC.",
    progressive: "Latasha Morrison (Be the Bridge) emphasizes that reconciliation requires truth-telling about history and its ongoing effects. Bryan Stevenson (Just Mercy) documents how racial bias operates in criminal justice in ways that transcend individual prejudice. The church's historical complicity in slavery, segregation, and redlining requires active repair, not merely individual repentance. Reparations are framed as a justice debt, not charity. Jemar Tisby documents evangelical complicity in the history of American racism.",
    tension: "How do structural sin and individual accountability relate? Can racial disparities persist without anyone currently intending them? What does the church owe communities it historically harmed? These are genuinely contested empirical and theological questions without easy answers."
  },
  {
    title: "Economic Justice",
    color: "#3B82F6",
    subtitle: "Poverty, Development, and Christian Economics",
    conservative: "Free markets, private property, and voluntary exchange are consistent with human dignity and have lifted more people from poverty than any other system. Poverty is best addressed through economic growth, not redistribution. Christian community development should focus on asset-building, work, and human agency. Concern that welfare programs create dependency and undermine the family. The Cornwall Alliance and Institute for Faith, Work & Economics emphasize enterprise, innovation, and private charity.",
    progressive: "The CCDA (Christian Community Development Association), founded by John Perkins, emphasizes relocation (Christians living in poor communities), reconciliation, and redistribution. Poverty is not primarily behavioral but structural — the result of systems that extract wealth from poor communities. A living wage, access to healthcare, and quality education are justice issues, not charity. Robert Lupton (Toxic Charity) critiques charity that creates dependence rather than dignity, calling for development approaches instead.",
    tension: "Does poverty result primarily from personal choices (address behavior and incentives) or structural barriers (address systems and policies)? Most careful analysts say both — but the balance matters enormously for practice, politics, and where you spend your resources."
  },
  {
    title: "Environmental Justice",
    color: "#F59E0B",
    subtitle: "Creation Care and the Burden of Pollution",
    conservative: "Christians are called to steward creation (Gen 2:15) — but stewardship includes responsible development for human flourishing. The Cornwall Alliance argues that affordable energy is itself a justice issue for the global poor, and that alarmist climate policy can harm the most vulnerable. Human ingenuity and property rights can address environmental problems more effectively than top-down regulation. Skepticism of policy solutions that raise energy costs for working families.",
    progressive: "The Evangelical Climate Initiative and creation care advocates like Katharine Hayhoe argue that climate change is a creation care emergency with disproportionate impact on the poor — who bear the heaviest costs of flooding, drought, and extreme heat despite contributing least to emissions. Environmental justice notes that polluting facilities are systematically located in poor and minority communities. Caring for creation and caring for the poor are inseparable justice concerns rooted in the same theology of stewardship.",
    tension: "Both sides affirm creation stewardship but disagree on the science's policy implications, the role of government, and whether the poor are better helped by affordable fossil energy today or aggressive climate action for long-term protection."
  },
  {
    title: "Criminal Justice Reform",
    color: "#EF4444",
    subtitle: "Punitive vs. Restorative Models",
    conservative: "Law and order reflects the biblical affirmation of governing authority to punish evil (Rom 13:4). Victim advocacy must be central — justice means real consequences for real harm done to real victims. Concern that criminal justice reform rhetoric minimizes community safety. Prison Fellowship (founded by Charles Colson after Watergate) has long emphasized prisoner rehabilitation and transformation through the gospel, while supporting victim restitution and accountability.",
    progressive: "Bryan Stevenson (Just Mercy, Equal Justice Initiative) documents pervasive racial and economic bias in sentencing, wrongful convictions, and the death penalty. Restorative justice — repairing harm, restoring community, rather than only punishing the offender — has deep roots in biblical shalom theology. The US incarcerates more people per capita than any country in history; mass incarceration devastates poor and minority communities. Prison Fellowship itself supports many reforms, including 'ban the box' hiring initiatives.",
    tension: "Both punitive and restorative models have biblical grounding. The question is whether the current American criminal justice system actually delivers justice or systematically fails it — a factual question as much as a theological one. Most thoughtful Christians in both camps now agree the system needs reform; they disagree on which reforms."
  }
];

export default function BiblicalJusticeTheologyPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_biblical-justice-theology_tab", "foundations");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeOT, setActiveOT] = useState<string>(OT_THEMES[0].id);

  const toggleExpanded = (key: string) =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  const currentOT = OT_THEMES.find(t => t.id === activeOT) ?? OT_THEMES[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>⚖️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Biblical Justice Theology</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 660, margin: "0 auto" }}>
            A deep study of what Scripture — Hebrew and Greek — actually says about justice: the key terms, the Old and New Testament witness, and how Christians apply this today.
          </p>
        </div>

        <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 18px", marginBottom: 28 }}>
          <div style={{ color: GREEN, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>Why This Matters</div>
          <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0 }}>
            "Justice" is one of the most contested words in contemporary Christianity. It is used to dismiss legitimate biblical concerns and to baptize ideological agendas. The antidote is neither to abandon the word nor to weaponize it — but to go back to the Hebrew and Greek, to read the Prophets and the Psalms and the Sermon on the Mount again, and to ask what the God of Scripture actually demands of his people.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content", flexWrap: "wrap" }}>
          {(["foundations", "ot", "nt", "today", "videos"] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.15s" }}>
              {t === "foundations" ? "Biblical Foundations" : t === "ot" ? "Old Testament" : t === "nt" ? "New Testament" : t === "today" ? "Justice Today" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* TAB 1: FOUNDATIONS — 6 accordion items */}
        {tab === "foundations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 6, lineHeight: 1.7 }}>
              Six key words — three Hebrew, three Greek — form the theological vocabulary for understanding what God requires and what biblical justice actually means.
            </p>
            {FOUNDATIONS.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[f.title] ? f.color + "50" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => toggleExpanded(f.title)}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: f.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{f.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{f.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 16 }}>{expanded[f.title] ? "−" : "+"}</span>
                </button>
                {expanded[f.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0", whiteSpace: "pre-line" }}>{f.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: OLD TESTAMENT — sticky left panel */}
        {tab === "ot" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6, position: "sticky", top: 24 }}>
              {OT_THEMES.map(theme => (
                <button type="button" key={theme.id} onClick={() => setActiveOT(theme.id)}
                  style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${activeOT === theme.id ? GREEN + "60" : BORDER}`, background: activeOT === theme.id ? `${GREEN}15` : CARD, color: activeOT === theme.id ? GREEN : TEXT, fontWeight: activeOT === theme.id ? 700 : 400, fontSize: 13, cursor: "pointer", textAlign: "left", lineHeight: 1.4, transition: "all 0.15s" }}>
                  {theme.title}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 4 }}>{currentOT.title}</div>
              <div style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 6 }}>{currentOT.subtitle}</div>
              <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 20 }}>{currentOT.ref}</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0, whiteSpace: "pre-line" }}>{currentOT.content}</p>
            </div>
          </div>
        )}

        {/* TAB 3: NEW TESTAMENT — 6 accordion items */}
        {tab === "nt" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 6, lineHeight: 1.7 }}>
              The New Testament does not soften the Old Testament's demands for justice — it embeds them in the person and mission of Jesus Christ and the life of the new covenant community.
            </p>
            {NT_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${expanded[item.title] ? item.color + "50" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button type="button" onClick={() => toggleExpanded(item.title)}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 15, marginBottom: 3 }}>{item.title}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{item.ref}</div>
                  </div>
                  <span style={{ color: MUTED, fontSize: 20, flexShrink: 0, marginLeft: 16 }}>{expanded[item.title] ? "−" : "+"}</span>
                </button>
                {expanded[item.title] && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0", whiteSpace: "pre-line" }}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: JUSTICE TODAY — 5 balanced cards */}
        {tab === "today" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 4, lineHeight: 1.7 }}>
              Five major debates in contemporary Christian justice work — presented with conservative and progressive Christian perspectives, because both traditions have biblical warrant and genuine insights.
            </p>
            {TODAY_CARDS.map((card, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${card.color}25`, borderRadius: 14, padding: 24 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: card.color, fontWeight: 900, fontSize: 18, marginBottom: 3 }}>{card.title}</div>
                  <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{card.subtitle}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${card.color}08`, border: `1px solid ${card.color}20`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ color: card.color, fontSize: 10, fontWeight: 800, letterSpacing: "0.05em", marginBottom: 8 }}>CONSERVATIVE / TRADITIONAL PERSPECTIVE</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.7 }}>{card.conservative}</div>
                  </div>
                  <div style={{ background: `${card.color}08`, border: `1px solid ${card.color}20`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ color: card.color, fontSize: 10, fontWeight: 800, letterSpacing: "0.05em", marginBottom: 8 }}>PROGRESSIVE / PROPHETIC PERSPECTIVE</div>
                    <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.7 }}>{card.progressive}</div>
                  </div>
                </div>
                <div style={{ background: BORDER, borderRadius: 8, padding: "10px 14px" }}>
                  <span style={{ color: MUTED, fontWeight: 700, fontSize: 11 }}>The Real Tension: </span>
                  <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{card.tension}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "73BIN1myTqg", title: "Justice", channel: "Tim Keller / Gospel in Life", description: "Keller preaches on the biblical concept of justice — what mishpat and tzedakah really mean, and why justice for the poor is not optional for Christians." },
                  { videoId: "u8Fn4vTTXHM", title: "Doing Justice and Mercy", channel: "Tim Keller / Gospel in Life", description: "Keller unpacks Micah 6:8's call to do justice, love hesed, and walk humbly with God — and what this demands of the Christian community in practice." },
                  { videoId: "dtEDBtC7aRo", title: "A Biblical Critique of Secular Justice and Critical Theory", channel: "Tim Keller", description: "Keller examines secular justice frameworks through a biblical lens, distinguishing what the Bible affirms from what it challenges in contemporary justice discourse." },
                  { videoId: "Ic2DAoS4tJM", title: "Biblical Foundations for Seeking God's Justice in a Sinful World", channel: "Tim Keller / The Gospel Coalition", description: "Keller and others provide a theological framework for justice work grounded in the whole Bible — not just the prophets but also Paul and the New Testament." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
