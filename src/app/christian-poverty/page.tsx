"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_christianpoverty_entries";

interface PVTEntry {
  id: string;
  date: string;
  povertyEncountered: string;
  actionTaken: string;
  systemicReflection: string;
}

const theologySections = [
  {
    title: `Good News to the Poor — Luke 4:18 and the Jubilee Announcement`,
    body: `When Jesus stood in the synagogue at Nazareth and unrolled the scroll of Isaiah, he read a passage that would have made every listener's pulse quicken: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord's favor" (Luke 4:18-19). The "year of the Lord's favor" is the Jubilee — the Levitical institution of Leviticus 25 in which, every fiftieth year, debts were canceled, land returned to original owners, and enslaved Israelites freed. Jesus was announcing that the Jubilee had arrived — not as a one-time economic reset every half-century, but as the permanent program of the kingdom of God. The poor are not an afterthought in Jesus's ministry; they are the primary audience of his first public proclamation. "Good news to the poor" is not a secondary application of the gospel; it is among the first things Jesus says about what the gospel is. Any account of the good news that leaves the poor behind has trimmed the text.`,
  },
  {
    title: `The Preferential Option for the Poor — Gleaning Laws and the Perpetual Poor`,
    body: `The Old Testament law is saturated with protections for the economically vulnerable. Leviticus 19:9-10 commands landowners not to harvest to the edges of their fields or gather what falls during reaping — they must leave it for the poor and the sojourner. Deuteronomy 15:4 envisions a community where "there need be no poor people among you," and then in the very next breath (15:11) acknowledges with realism: "There will always be poor people in the land" — not as a resignation but as a call to open-handed generosity. The gleaning laws were not charity as we understand it — a voluntary gift from those who had enough to those who did not. They were structural provisions built into the economic system itself, requiring landowners to leave a portion of their harvest accessible for the landless. The widow Ruth gleaned in Boaz's field not because he was unusually generous but because the law required it. This is the OT's preferential option for the poor: not that God loves the poor more than the rich in some spiritual ranking, but that the law consistently tilts toward protecting the vulnerable, because the powerful can protect themselves.`,
  },
  {
    title: `You Will Always Have the Poor — John 12:8 and the Refusal of Fatalism`,
    body: `When Jesus says "the poor you will always have with you" (John 12:8), this sentence has been weaponized as an argument for fatalism — an excuse not to address poverty because it will never be eliminated. But this is a profound misreading. Jesus is quoting Deuteronomy 15:11, and the full context of that passage is a command to generosity, not a rationale for passivity: "Since there will never cease to be some in need on the earth, I therefore command you, 'Open your hand to the poor and needy neighbor in your land.'" Poverty's persistence is the reason for greater generosity, not less. Furthermore, in the immediate context of John 12, Jesus is addressing a one-time extravagant act of worship — Mary anointing his feet before his burial. He is not setting poverty policy; he is defending a specific act at a specific moment. The passage does not say "do not worry about the poor because they will always be there." It says the poor are always there, and we are always responsible to them — and in this particular moment, something unrepeatable is happening. The permanence of poverty is a call to permanent responsiveness.`,
  },
  {
    title: `The Rich and the Poor in James — Partiality Condemned, Exploitation Judged`,
    body: `The letter of James contains the sharpest economic critique in the New Testament. In James 2:1-9, he confronts a congregation that seats wealthy visitors in places of honor while ordering the poor to stand or sit on the floor: "Have you not discriminated among yourselves and become judges with evil thoughts?" He calls this partiality a violation of the "royal law" of neighbor-love, and names the irony that the rich are the ones who exploit and drag believers into court — while the congregation fawns over them. Then in James 5:1-6, he issues a scorching prophetic indictment of wealthy landowners who have withheld wages from laborers: "The wages you failed to pay the workers who mowed your fields are crying out against you. The cries of the harvesters have reached the ears of the Lord Almighty." This is not mild pastoral advice; it is the language of Amos and Micah — exploitation of workers is a sin that rises to heaven as a cry of accusation. James does not separate spiritual and economic concerns: the community that shows partiality to the rich and ignores the poor has failed both the royal law and the image of God.`,
  },
  {
    title: `Koinonia Economics — The Early Church's Radical Sharing (Acts 2:44-45)`,
    body: `Acts 2:44-45 describes the economic life of the earliest Jerusalem church in terms that have startled and challenged Christians ever since: "All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need." This was not compelled communism — Acts 5 makes clear that Ananias and Sapphira were condemned not for withholding their money but for lying about it. Barnabas, who sold a field and laid the proceeds at the apostles' feet (Acts 4:36-37), is held up as exemplary precisely because the act was voluntary. What Acts describes is a community shaped by koinonia — fellowship, participation, sharing — so deep that economic barriers were effectively dissolved within the community. The Greek word for "need" (chreia) appears repeatedly: the distribution was targeted at real need, not theoretical equality. The early church's economic sharing was not an abstract principle but a concrete response to specific people in specific need within the community of faith. It stands as a permanent challenge to any version of Christianity comfortable with vast wealth differentials within the body of Christ.`,
  },
  {
    title: `Why Poverty Happens — Personal Choices and Structural Injustice`,
    body: `A recurring failure in evangelical responses to poverty is the false choice between blaming individuals (poverty results from bad decisions, laziness, or sin) and blaming systems (poverty results entirely from structural injustice, and individuals bear no responsibility). Scripture refuses this binary. Proverbs is full of connections between personal choices and economic outcomes — laziness, dishonesty, reckless spending, and the refusal of wisdom all contribute to poverty (Proverbs 6:6-11, 10:4, 13:18). At the same time, the prophets are relentless in naming the structural causes of poverty — unjust courts that favor the wealthy (Amos 5:12), wages withheld from workers (James 5:4), land concentration in the hands of the few (Isaiah 5:8), and the legal mechanisms by which the poor are ground down. Modern poverty is produced by both. A person making genuinely poor decisions in a just system with equal opportunity is in a different situation than a person making the same decisions in a system structured against them. Wise poverty engagement requires holding both lenses simultaneously — addressing personal behavior and structural causes — without using one to excuse ignoring the other.`,
  },
  {
    title: `Toxic Charity vs. Development — Steve Corbett and Brian Fikkert`,
    body: `One of the most important contributions to Christian poverty engagement in recent decades is Steve Corbett and Brian Fikkert's When Helping Hurts (2009), which argues that much of what the church does under the name of "helping the poor" actually deepens poverty by eroding dignity, creating dependency, and bypassing local capacity. Their central framework distinguishes three types of poverty intervention: relief (immediate provision for acute crisis — food after a disaster, medicine in an epidemic), rehabilitation (restoring people and communities to a pre-crisis state), and development (the long-term process of enabling people to flourish through their own agency and gifts). The problem, Corbett and Fikkert argue, is that North American churches primarily do relief — handing out food, clothing, and money — when most of the situations they encounter require development. Chronic poverty is not an emergency requiring immediate material provision; it is a complex condition requiring long-term relationships, asset-building, skill development, and the restoration of dignity. "Toxic charity" — giving that feels good to the giver but damages the receiver — is a besetting sin of well-meaning churches.`,
  },
  {
    title: `Dignity in Poverty Relief — The Image of God in the Poor`,
    body: `The imago Dei has direct implications for how poverty relief is practiced. If every poor person bears the image of God, then poverty ministry that is condescending, paternalistic, or dehumanizing violates the very theology it claims to serve. Jayakumar Christian, who spent decades among the poorest communities in India, developed the concept of "poverty as disempowerment" — the idea that material poverty is inseparable from the experience of being told, explicitly or implicitly, that you are less than human, that you have nothing to offer, that you need to receive but cannot give. This is the deepest wound of poverty, and it is one that material transfers alone cannot heal. True poverty relief begins with seeing the poor person as a full image-bearer — not a problem to be solved, not a charity case, not a recipient of your compassion, but a neighbor with gifts, agency, perspective, and dignity that the encounter calls forth rather than bypasses. John Perkins called this "indigenous leadership development" — the conviction that the people most affected by poverty are also the ones most equipped to address it, if given resources, opportunity, and respect.`,
  },
  {
    title: `The Jubilee as God's Economic Vision`,
    body: `The Jubilee of Leviticus 25 — that radical fiftieth-year reset in which land returned to families, debts were forgiven, and enslaved persons were freed — has never been fully implemented in any society. It stands in Scripture as a vision of what economic life looks like when it is organized around covenant love rather than accumulation. The Jubilee assumed that inequality would always tend to grow — the land of the less fortunate would be bought up, debts would accumulate, families would sell themselves into servitude — and it built into the law a structural correction: the periodic restoration of economic starting points. Scholars debate whether Israel ever actually observed the Jubilee, and the New Testament does not mandate it as a specific institution. But its logic is permanently instructive: God's economic vision is not a system in which the strongest accumulate without limit and the weakest bear the consequences indefinitely, but a system with periodic, structural corrections toward equity. Jesus's proclamation of the Jubilee in Luke 4 suggests that the Jubilee's principles — debt relief, liberation, land redistribution — are the grammar of the kingdom of God, even if the specific Levitical form is not directly binding on the church today.`,
  },
];

const practices = [
  {
    name: `Proximity Before Program`,
    body: `Before designing a poverty program, practice proximity. Spend time in the neighborhood, not as a servant-missionary distributing services, but as a learner. Bryan Stevenson and John Perkins both insist that genuine justice engagement begins with getting close — physically close, relationally close — to the people most affected by the problem you want to address. Ask questions and listen. Eat together. Learn names. Understand the history of the neighborhood. Only then, slowly, design responses in partnership with local people rather than for them. The church that drives in from the suburbs on Saturday morning to distribute food and drives home by noon has not engaged poverty; it has managed a transaction that leaves both parties unchanged.`,
  },
  {
    name: `Asset-Based Thinking`,
    body: `Steve Corbett and Brian Fikkert's When Helping Hurts teaches an asset-based approach to poverty: rather than beginning with a community's deficits (what it lacks, what it needs, what we can provide), begin with its assets — the gifts, skills, relationships, institutions, and social capital already present. Ask: What does this person or community already have that can be the foundation for development? This approach honors the imago Dei in the poor by starting from their dignity and capacity rather than their need and lack. It produces different questions, different programs, and different outcomes than the deficit model — and it is far less likely to create the dependency and disempowerment that characterizes toxic charity.`,
  },
  {
    name: `Financial Solidarity`,
    body: `Ron Sider's Rich Christians in an Age of Hunger challenges affluent Christians with a simple question: If you took seriously the economic sharing of Acts 2 and the teaching of James, what would your giving look like? The biblical tithe (10%) was the floor of generosity in Israel, not the ceiling. The early church gave far beyond it. A graduated tithe — giving proportionally more as income rises — is one practical response to the growing gap between the comfortable church and the poor world. Organizations like International Justice Mission, HOPE International, and local food banks and community development corporations offer concrete channels. The practice is not only financial: mentoring, volunteering in development (not just relief) programs, and advocating for just economic policies are all part of the church's solidarity with the poor.`,
  },
  {
    name: `Advocacy for Structural Justice`,
    body: `Gary Haugen of International Justice Mission argues that the biggest factor keeping the poor poor is not the absence of aid but the absence of functioning justice systems — the inability of the poor to access courts, police protection, and legal remedies that protect them from exploitation. The church's call to "act justly" (Micah 6:8) includes advocacy for the systems and policies that make justice possible. Write to elected representatives. Support organizations working on criminal justice reform, housing policy, worker protection, and access to education and healthcare. Vote with the question "Does this help the poor flourish in dignity?" as a central criterion. Individual giving, however generous, cannot substitute for the political engagement required to change unjust structures.`,
  },
  {
    name: `Learning from the Poor`,
    body: `The church in the Global South — among the fastest-growing and most vibrantly faithful Christian communities in the world — is overwhelmingly poor. Their theology, their practice of prayer, their understanding of community, and their interpretation of Scripture have been formed in poverty in ways that critique and correct the assumptions of wealthy Western Christianity. Practice the discipline of learning from poor communities: read theologians from the Global South, visit churches in economically marginalized neighborhoods, and ask what they know about God that you do not. Jayakumar Christian's theology of poverty as disempowerment, developed among India's Dalit communities, is one example of wisdom that the comfortable church desperately needs.`,
  },
  {
    name: `Personal Simplicity`,
    body: `The practices of simplicity — reducing consumption, living below your means, refusing the escalation of lifestyle as income rises — create margin for generosity and form a counter-cultural witness in a consumption-driven economy. This is not poverty-by-choice in any meaningful sense (there is nothing virtuous about pretending to lack what you have), but rather the deliberate refusal to let the accumulation of comfort crowd out the call to solidarity. Richard Foster's Celebration of Discipline and Ron Sider's writings both argue that simplicity is a spiritual discipline with economic consequences: the person who lives simply gives more, accumulates less anxiety, and sees the world through less distorted lenses. Ask annually: What has accumulated in my life that is not serving people, just serving comfort?`,
  },
];

const voices = [
  {
    name: `Steve Corbett & Brian Fikkert`,
    years: `When Helping Hurts, 2009`,
    role: `Poverty practitioners and theologians`,
    body: `Corbett, a development economist, and Fikkert, a professor at Covenant College, produced in When Helping Hurts a book that genuinely changed how thousands of churches approach poverty engagement. Their central argument is that poverty is fundamentally about broken relationships — with God, self, others, and creation — and that the deepest poverty is not material but spiritual: the experience of being told, and coming to believe, that you have no value, no agency, no gifts worth offering. Material poverty relief that ignores this dimension — and that therefore bypasses the dignity of the poor in favor of the transaction of giving — is not merely ineffective but harmful. Their framework of relief, rehabilitation, and development has given churches a vocabulary to diagnose what kind of engagement a situation actually requires rather than defaulting to the easiest option.`,
    quote: `Until we embrace our mutual brokenness, our work with low-income people is likely to do more harm than good.`,
  },
  {
    name: `Jayakumar Christian`,
    years: `God of the Empty-Handed, 1999`,
    role: `Development theologian and practitioner`,
    body: `Christian spent decades working with World Vision among the poorest communities in India, particularly Dalit communities living under the weight of caste-based exclusion. His theological analysis of poverty — developed in God of the Empty-Handed — argues that the deepest cause of poverty is not material lack but what he calls "god-complexes": the tendency of the non-poor to act as god in the lives of the poor, defining their identity, determining their worth, and making their decisions for them. This distortion of the imago Dei — treating image-bearers as non-persons — is the root of poverty, and its healing requires nothing less than the restoration of each person's sense of being made in God's image and therefore possessing dignity, agency, and the capacity to give as well as receive. Christian's work is indispensable for anyone who wants to think clearly about the relationship between theology and development.`,
    quote: `The poor need to discover that they are not empty-handed. They carry the image of God.`,
  },
  {
    name: `Tim Chester`,
    years: `Good News to the Poor, 2004`,
    role: `Pastor and theologian of the kingdom`,
    body: `Chester's Good News to the Poor makes the case that social engagement is not an application of the gospel but an expression of it — that the church's ministry to the poor is part of the sign-value of the kingdom of God, a foretaste of the new creation in which all things are made whole. He resists both the social gospel (which reduces the gospel to social transformation) and the pietist retreat (which makes social concern an optional extra for Christians with social concern as a spiritual gift). The gospel announces the in-breaking of God's new world — a world without poverty, exploitation, or exclusion — and the church's ministry to the poor is the beginning of that new world becoming visible. Chester grounds his case exegetically in Luke's Gospel, which emphasizes the poor more than any other Gospel, and missionally in the conviction that the church's credibility as a witness to the kingdom depends partly on whether it looks like the kingdom.`,
    quote: `The church's concern for the poor is not an optional extra. It is part of what it means to be the community of the new creation.`,
  },
  {
    name: `Gary Haugen`,
    years: `Good News About Injustice, 1999`,
    role: `Founder of International Justice Mission`,
    body: `Haugen, a Harvard Law graduate who led the UN's investigation of the Rwandan genocide, founded International Justice Mission in 1997 with a specific conviction: the primary reason the poor stay poor is not the absence of aid but the absence of justice — the inability to protect themselves from violence, slavery, and exploitation because the justice system that is supposed to protect them either ignores them or actively works against them. IJM's model — partnering with local justice systems to prosecute specific crimes against the poor, while training police and prosecutors to serve vulnerable populations — is one of the most rigorously evaluated poverty interventions in the world, with documented evidence of large-scale impact. Haugen's theological grounding is in the character of God: "Our God is a God of justice," and the call to pursue justice for the oppressed is not a political position but a response to God's heart.`,
    quote: `The reason the poor stay poor is not primarily a lack of food or medicine or education. It is a lack of justice — the inability to protect themselves from those who would take what little they have.`,
  },
  {
    name: `Ron Sider`,
    years: `1939–2022`,
    role: `Prophet of economic discipleship`,
    body: `Sider's Rich Christians in an Age of Hunger (1977, revised multiple times) was one of the most provocative books in twentieth-century evangelical social ethics — a detailed, Scriptural argument that the enormous gap between wealthy Christians and the global poor was a scandalous contradiction of the gospel. Sider marshaled biblical evidence from the gleaning laws to the koinonia economics of Acts 2 to argue that generous economic sharing is not a peripheral spiritual virtue but a central demand of Christian discipleship. He was attacked from the left for not going far enough in structural critique and from the right for going too far in challenging the market. He responded to both with exegetical patience. Sider spent his career at the intersection of evangelical orthodoxy and radical social concern, founding Evangelicals for Social Action and modeling the kind of prophetic engagement that is simultaneously rooted in Scripture and responsive to the world.`,
    quote: `If God is on the side of the poor and the oppressed, then those who want to be on God's side must share His concern for justice.`,
  },
  {
    name: `John Perkins`,
    years: `b. 1930`,
    role: `Pioneer of community development`,
    body: `Perkins grew up in deep poverty in rural Mississippi, fled north after his brother was killed, came to faith in California, and then felt called back to Mississippi to work among the people and place he had fled. His three Rs of Christian community development — relocation (moving into the community you serve), reconciliation (across racial and economic lines), and redistribution (sharing skills, resources, and education) — have shaped a generation of practitioners. Perkins insists that genuine poverty engagement requires proximity: you must live among the people you serve, not commute to them. His Voice of Calvary Ministries in Mendenhall and Jackson, Mississippi, pioneered a holistic model that addressed health, education, economic development, and racial reconciliation as a single integrated ministry. Perkins is a theologian of incarnation — if Jesus moved into the neighborhood, so must we.`,
    quote: `We don't need more people going somewhere to do something for someone. We need people going somewhere to be with someone.`,
  },
];

const scriptures = [
  {
    ref: `Luke 4:18-19`,
    text: `The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord's favor.`,
    note: `Jesus's first public announcement of his mission places the poor at the center. The Jubilee has arrived. Any gospel that omits the poor has trimmed this text.`,
  },
  {
    ref: `Deuteronomy 15:7-8`,
    text: `If anyone is poor among your fellow Israelites in any of the towns of the land the Lord your God is giving you, do not be hardhearted or tightfisted toward them. Rather, be openhanded and freely lend them whatever they need.`,
    note: `The Torah's instruction on poverty is not charitable suggestion but covenant command. The open hand is not optional for the people of God.`,
  },
  {
    ref: `James 2:5-6`,
    text: `Listen, my dear brothers and sisters: Has not God chosen those who are poor in the eyes of the world to be rich in faith and to inherit the kingdom he promised those who love him? But you have dishonored the poor.`,
    note: `James confronts the congregation directly: you have dishonored the ones God has honored. The church that favors the wealthy and marginalizes the poor has inverted the kingdom's order.`,
  },
  {
    ref: `James 5:4`,
    text: `Look! The wages you failed to pay the workers who mowed your fields are crying out against you. The cries of the harvesters have reached the ears of the Lord Almighty.`,
    note: `Withheld wages are not a private economic matter — they are a moral cry that reaches God's ears. Economic exploitation of workers is a sin Scripture names with prophetic sharpness.`,
  },
  {
    ref: `Acts 2:44-45`,
    text: `All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.`,
    note: `The earliest church was characterized by economic sharing so radical that material need was addressed within the community. This stands as a permanent question to the church about wealth differentials within the body of Christ.`,
  },
  {
    ref: `Proverbs 19:17`,
    text: `Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.`,
    note: `Generosity to the poor is framed as a transaction with God himself. The one who gives to the poor does not merely help a neighbor — they lend to the Lord.`,
  },
];

const videos = [
  { videoId: "5Cr4TcueSyA", title: "Good News to the Poor — A Biblical Theology" },
  { videoId: "4BONJe6X9_Q", title: "When Helping Hurts: Steve Corbett" },
  { videoId: "ySlhKW1gpFI", title: "Gary Haugen: The Hidden Reason for Poverty" },
  { videoId: "CfpMktucbA4", title: "John Perkins on Community Development" },
  { videoId: "6x0bD-ZPJLY", title: "Ron Sider: Rich Christians in an Age of Hunger" },
  { videoId: "M1gREy7t82c", title: "The Jubilee and God's Economic Vision" },
];

const relatedPages = [
  { href: "/christian-racism", label: "Christian Response to Racism" },
  { href: "/justice", label: "Justice" },
  { href: "/generosity", label: "Generosity" },
  { href: "/stewardship", label: "Stewardship" },
  { href: "/kingdom-of-god", label: "The Kingdom of God" },
  { href: "/theology-of-the-church", label: "The Church" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianPovertyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PVTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [povertyEncountered, setPovertyEncountered] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [systemicReflection, setSystemicReflection] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!povertyEncountered.trim()) return;
    const entry: PVTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      povertyEncountered: povertyEncountered.trim(),
      actionTaken: actionTaken.trim(),
      systemicReflection: systemicReflection.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setPovertyEncountered("");
    setActionTaken("");
    setSystemicReflection("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: `100%`,
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: `0.75rem 0.9rem`,
    fontSize: `0.95rem`,
    lineHeight: 1.6,
    outline: `none`,
    fontFamily: `inherit`,
    boxSizing: `border-box`,
  };

  const labelStyle: React.CSSProperties = {
    display: `block`,
    color: TEXT,
    fontWeight: 700,
    fontSize: `0.88rem`,
    marginBottom: `0.4rem`,
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: `0.8rem`,
    margin: `0.3rem 0 0`,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: GREEN + "33",
            color: GREEN,
            padding: `0.2rem 0.8rem`,
            borderRadius: 20,
            fontSize: `0.78rem`,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: `uppercase`,
          }}>
            Justice &amp; Generosity
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Good News to the Poor: A Christian Response to Poverty
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;The Spirit of the Lord has anointed me to proclaim good news to the poor&rdquo; (Luke 4:18).
          Jesus&rsquo;s first announcement of his mission placed the poor at the center. The Jubilee had arrived
          &mdash; and the church is called to embody its logic in every generation.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide traces the biblical vision of economic justice &mdash; from the gleaning laws of Leviticus to
          the koinonia economics of Acts 2 &mdash; and asks what dignifying, development-oriented engagement with
          poverty looks like for the church today.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: `0.45rem 1.1rem`,
                borderRadius: 20,
                border: `1px solid`,
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "33" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
                fontSize: `0.85rem`,
                fontWeight: 600,
                cursor: `pointer`,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              A Theology of Poverty and Generosity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements from the Jubilee announcement of Luke 4 to the Jubilee vision of God&rsquo;s
              economic future &mdash; a comprehensive biblical framework for engaging poverty.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}55`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                From the gleaning laws of Leviticus to the Jubilee of Luke 4, from the koinonia of Acts 2 to the
                judgment of James 5, Scripture speaks with a consistent voice: God is on the side of the poor,
                the church is called to be on the side of the poor, and the good news is not good news until it
                reaches the ones who most need to hear it.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices of Poverty Engagement
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices that move poverty engagement from relief to development &mdash; from transaction
              to relationship, from charity to solidarity.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "33",
                  color: GREEN,
                  fontWeight: 800,
                  borderRadius: `50%`,
                  width: 34,
                  height: 34,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  flexShrink: 0,
                  fontSize: `0.9rem`,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Voices on Poverty and Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practitioners and thinkers whose work has shaped the church&rsquo;s engagement with poverty
              &mdash; from development economics to community organizing to prophetic advocacy.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: `0.75rem 1rem`,
                  borderLeft: `3px solid ${GREEN}`,
                  background: GREEN + "12",
                  borderRadius: `0 8px 8px 0`,
                  color: TEXT,
                  fontStyle: `italic`,
                  fontSize: `0.92rem`,
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Scripture on Poverty and Generosity
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts from the Torah to James &mdash; the consistent biblical witness that God cares
              about the poor and the church is called to embody that care.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: `0 0 0.9rem`,
                  fontSize: `1rem`,
                  fontStyle: `italic`,
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: `1rem`,
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "18", border: `1px solid ${GREEN}55`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice:</strong> read Luke 4:18-19 and then read your
                church&rsquo;s budget. Ask: Does the distribution of our resources reflect the priority Jesus
                announced at Nazareth? This is not a guilt exercise but a calibration &mdash; the kind of honest
                inventory the prophets regularly demanded of God&rsquo;s people.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Poverty Engagement Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a poverty situation you have encountered, an action you have taken in response, and a
              reflection on its systemic causes. Entries are saved privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="pvt-poverty" style={labelStyle}>A poverty situation I have encountered</label>
                <textarea
                  id="pvt-poverty"
                  value={povertyEncountered}
                  onChange={e => setPovertyEncountered(e.target.value)}
                  rows={2}
                  placeholder="e.g. A neighbor who can&rsquo;t make rent after a medical bill; a student going hungry over the weekend; a family sleeping in their car outside the church..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be specific. Naming a concrete situation is the first step toward a concrete response.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="pvt-action" style={labelStyle}>An action I have taken</label>
                <textarea
                  id="pvt-action"
                  value={actionTaken}
                  onChange={e => setActionTaken(e.target.value)}
                  rows={2}
                  placeholder="e.g. Connected them to a community resource; gave financial assistance; volunteered at the food bank; advocated for a policy change..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Small actions count. Name what you actually did, even if it felt insufficient.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="pvt-systemic" style={labelStyle}>A reflection on systemic causes</label>
                <textarea
                  id="pvt-systemic"
                  value={systemicReflection}
                  onChange={e => setSystemicReflection(e.target.value)}
                  rows={2}
                  placeholder="e.g. This person&rsquo;s situation reflects a housing market that prices out working families; a healthcare system where one illness causes financial ruin; a wages structure that hasn&rsquo;t kept up with costs..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Both personal choices and structural forces shape poverty. What structural factors are present in this situation?</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!povertyEncountered.trim()}
                style={{
                  background: povertyEncountered.trim() ? GREEN : BORDER,
                  color: povertyEncountered.trim() ? "#FFFFFF" : MUTED,
                  border: `none`,
                  borderRadius: 10,
                  padding: `0.7rem 1.6rem`,
                  fontWeight: 700,
                  fontSize: `0.95rem`,
                  cursor: povertyEncountered.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your record of encounter and engagement above.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: `absolute`,
                          top: `0.9rem`,
                          right: `0.9rem`,
                          background: `transparent`,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: `0.75rem`,
                          fontWeight: 600,
                          padding: `0.25rem 0.65rem`,
                          cursor: `pointer`,
                        }}
                      >
                        Delete
                      </button>
                      {entry.date && (
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      )}
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Poverty Encountered
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.povertyEncountered}</p>
                      </div>
                      {entry.actionTaken && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Action Taken
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.actionTaken}</p>
                        </div>
                      )}
                      {entry.systemicReflection && (
                        <div>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Systemic Reflection
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.systemicReflection}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching and testimony on poverty, generosity, justice, and the church&rsquo;s call to embody the
              good news Jesus announced to the poor.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: `0.45rem 1rem`,
                  borderRadius: 20,
                  fontSize: `0.85rem`,
                  fontWeight: 600,
                  textDecoration: `none`,
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Good news to the poor&rdquo; is not a program or a policy. It is an announcement: the Jubilee
            has come, the dividing walls are falling, and the church is called to be the first sign of the world
            God is making. Open your hand &mdash; the Lord is lending.
          </p>
        </div>
      </main>
    </div>
  );
}
