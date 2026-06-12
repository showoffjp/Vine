"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christiancommunity_entries";

interface CMNEntry {
  id: string;
  date: string;
  communityAction: string;
  personServed: string;
  burdensShared: string;
}

const theologySections = [
  {
    title: "The Body of Christ — 1 Corinthians 12",
    body: "Paul&rsquo;s extended metaphor of the church as a body is one of the most radical images in Scripture. A body is not a voluntary association of individuals who happen to share interests; it is an organism in which every part belongs to every other part and where the functioning of each depends on the whole. &ldquo;The eye cannot say to the hand, &lsquo;I have no need of you.&rsquo;&rdquo; Paul is not merely speaking of organizational efficiency; he is articulating a theology of mutual belonging. The health of any member affects the health of every member: &ldquo;If one member suffers, all suffer together; if one member is honored, all rejoice together&rdquo; (1 Cor 12:26). This demolishes the modern assumption that faith is primarily a private matter between an individual and God. The metaphor insists that to be in Christ is to be organically connected to every other member of his body, whether we feel the connection or not. Individualistic Christianity is, on Paul&rsquo;s account, a contradiction — like a hand that has decided it does not need the body it belongs to.",
  },
  {
    title: "Koinonia — Acts 2:42-47",
    body: "The word translated &ldquo;fellowship&rdquo; in Acts 2:42 is koinonia, but &ldquo;fellowship&rdquo; carries almost none of its weight in contemporary English usage. Koinonia comes from koinos, meaning common — it describes the sharing of something held in common, a mutuality that goes far deeper than friendly socializing. Acts 2:44-45 fills the term with content: &ldquo;all who believed were together and had all things in common. And they were selling their possessions and belongings and distributing the proceeds to all, as any had need.&rdquo; The early church&rsquo;s koinonia was economic, physical, and daily: they broke bread &ldquo;from house to house,&rdquo; shared meals with gladness, and met each other&rsquo;s material needs. This is a long way from the forty-five-minute social window between services. The New Testament knows nothing of a Christianity that is doctrinally orthodox but materially detached from the needs of its members. Koinonia is the practice of actually belonging to one another &mdash; which costs something, requires time, and cannot be outsourced to a program.",
  },
  {
    title: "The &ldquo;One Another&rdquo; Commands",
    body: "The New Testament contains over fifty &ldquo;one another&rdquo; commands, which together constitute the most detailed description of what the church&rsquo;s common life is meant to look like. Love one another (John 13:34). Bear one another&rsquo;s burdens (Gal 6:2). Forgive one another (Eph 4:32). Confess to one another (James 5:16). Pray for one another (James 5:16). Encourage one another (1 Thess 5:11). Serve one another (Gal 5:13). Accept one another (Rom 15:7). These commands are not addressed to pastors or spiritual directors; they are addressed to the ordinary congregation. They assume a level of mutual knowledge and presence that cannot happen in large gatherings alone. You cannot bear the burdens of someone whose burdens you do not know. You cannot confess to someone you see for an hour on Sunday. You cannot pray specifically for someone whose life is a stranger to you. The one another commands are, among other things, an argument for small, frequent, honest community.",
  },
  {
    title: "Bearing One Another&rsquo;s Burdens — Galatians 6:2",
    body: "Paul&rsquo;s instruction in Galatians 6:2 &mdash; &ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of Christ&rdquo; &mdash; is compressed but explosive. The law of Christ, summed up in love, is fulfilled not primarily by individual acts of piety but by the shared carrying of weight that belongs to another. The Greek word for burden here (bare) refers to a crushing weight &mdash; not the ordinary inconveniences of life but the loads that threaten to collapse a person. Paul is describing the community that enters the crushing moments together: the grief, the illness, the sin that requires accountability, the suffering that cannot be explained away. He makes this concrete two verses later: &ldquo;Let the one who is taught the word share all good things with the one who teaches&rdquo; (6:6). Burden-bearing is not only emotional; it is material. The community that bears burdens together is the community that shows up with food, with money, with presence, with time &mdash; not only with sympathy.",
  },
  {
    title: "The Problem of Christian Individualism",
    body: "The most significant cultural threat to Christian community in the contemporary West is not hostility but individualism &mdash; the deep assumption, absorbed from the surrounding culture, that the self is the primary unit of meaning and that relationships are instruments of personal flourishing rather than constitutive of personhood itself. This individualism expresses itself in Christianity as consumer religion: church as a place you attend to receive spiritual services, assessed by how well it meets your needs, to be left when it no longer does. The tragedy is that this consumer Christianity is self-defeating: it destroys the very community that would actually meet the deepest needs of its members. The community of genuine burden-bearing, mutual confession, and costly love is only available to those who commit to it long enough to build it &mdash; which consumer Christianity structurally prevents. Henri Nouwen called this the great tragedy: that people flee the very relationships that could heal them because those relationships require the vulnerability they most fear.",
  },
  {
    title: "Why Forsaking Assembly Matters &mdash; Hebrews 10:25",
    body: "The writer of Hebrews gives a direct command that has become increasingly countercultural: &ldquo;not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.&rdquo; The command to meet together is set within a larger argument about perseverance: the gathered community is the primary context in which believers encourage one another to hold fast to their confession. This is not incidental. The Christian who stops gathering does not simply miss a social benefit; they lose access to the primary structure of encouragement, accountability, and visible belonging that Scripture assigns to the assembly. The &ldquo;as the Day draws near&rdquo; is a reminder that the stakes of perseverance are eschatological. The community that meets together is not merely maintaining tradition; it is sustaining one another&rsquo;s faith through the long middle of the Christian life, where the temptation to drift is most powerful.",
  },
  {
    title: "Conflict in the Church and Reconciliation",
    body: "Every genuine community will eventually face conflict &mdash; because genuine community requires the kind of proximity and honesty that generates friction. The question is not whether conflict will come but whether the community will allow conflict to deepen them or destroy them. Paul&rsquo;s letters are thick with specific instructions for conflict: Matthew 18:15-17 provides a step-by-step process for addressing offenses. Romans 15:7 calls for the acceptance of those whose convictions differ. Ephesians 4:32 commands forgiveness on the model of God&rsquo;s forgiveness. The church that has never had a serious conflict and navigated it together has never been a community in the deepest sense &mdash; it has been a social club of mutually compatible people. Dietrich Bonhoeffer wrote in Life Together that the person who loves their dream of community more than the actual community will destroy it; genuine community is built on the daily experience of receiving and extending forgiveness.",
  },
  {
    title: "The Eucharist as Communal Act",
    body: "In 1 Corinthians 11, Paul&rsquo;s correction of the Corinthian church&rsquo;s abuse of the Lord&rsquo;s Supper reveals his theology of communion as a communal rather than merely individual act. The Corinthians were eating the meal in ways that shamed the poor while the wealthy ate and drank to excess &mdash; and Paul says that this means they are &ldquo;not discerning the body.&rdquo; The body is both the eucharistic body of Christ and the ecclesial body &mdash; the community of believers. To eat the Lord&rsquo;s Supper in a way that excludes, humiliates, or ignores the needs of the community is to contradict what the meal proclaims. The eucharist is not a private spiritual transaction between the individual and God; it is the common meal of the community that proclaims the Lord&rsquo;s death until he comes. Its celebration is inherently communal and inherently equalizing: at this table, there is no Jew or Greek, no slave or free, no rich or poor &mdash; only the body of Christ, receiving the bread and cup together.",
  },
  {
    title: "The Early Church as Model and Challenge",
    body: "The community described in Acts 2:42-47 and 4:32-35 is not meant as a historical curiosity but as a persistent vision of what the Spirit-filled community looks like. &ldquo;The full number of those who believed were of one heart and soul, and no one said that any of the things that belonged to him was his own, but they had everything in common&rdquo; (Acts 4:32). This is not a blueprint for a particular economic system, but it is a description of a community whose internal economics were genuinely shaped by love rather than by ownership as the primary value. The early church met daily, across house-to-house networks, sharing meals, prayer, teaching, and material resources. It crossed the most rigid social boundaries of its world. Its community was its primary witness: &ldquo;And the Lord added to their number day by day those who were being saved&rdquo; (Acts 2:47). The quality of Christian community is not incidental to evangelism; it is one of its most powerful instruments.",
  },
];

const practices = [
  {
    name: "Audit Your Community Depth",
    body: "Set aside an hour and ask honestly: do you have anyone in your life who knows your actual struggles, your recurring sins, your specific fears and longings &mdash; not only your aspirations and public presentation? If not, that absence is the most important thing to address this year. Community that does not include genuine knowledge of one another is a shallow substitute for what Scripture describes. The audit is not an occasion for despair but for honesty: &ldquo;I do not have what Acts 2 describes, and I want it.&rdquo; That prayer is a beginning. Bring the gap before God, and take one concrete step this week toward greater depth &mdash; an honest conversation with one person, a commitment to a smaller gathering, a decision to stay when staying is inconvenient.",
  },
  {
    name: "Commit to a Small Community for One Year",
    body: "Choose or form a group of five to twelve people and commit to meeting regularly for at least one full year &mdash; long enough to move past what Bonhoeffer called the &ldquo;dream of community&rdquo; into its reality. Community formed in comfort and shared interest is pleasant but thin; community tested by the friction of difference, the inconvenience of need, and the practice of forgiveness is the kind the New Testament describes. The year-long commitment matters: most communities disintegrate before they become genuine because people exit at the first difficulty. The commitment to stay &mdash; through the boring meetings, the conflict, the season when you do not feel like going &mdash; is itself a practice of the one another commands. By the end of the year, you will know and be known in a way that shorter commitments cannot produce.",
  },
  {
    name: "Practice a Specific One Another This Week",
    body: "The fifty-plus one another commands of the New Testament are not a theoretical framework; they are a practical curriculum. Each week, select one command and practice it specifically. This week: encourage one another &mdash; write a specific, honest word of encouragement to one person who needs to hear what you see in them. Next week: confess to one another &mdash; bring one ongoing struggle to a trusted person and ask for their prayer. The week after: bear one another&rsquo;s burdens &mdash; ask someone what their actual burden is and carry part of it with your time, money, or presence. The practice is cumulative: a community whose members habitually practice the one anothers becomes, over years, the community the New Testament describes. Start small and specific &mdash; one person, one command, this week.",
  },
  {
    name: "The Meal as Community",
    body: "One of the simplest and most neglected practices of Christian community is the shared meal. The early church broke bread &ldquo;from house to house&rdquo; daily (Acts 2:46). The meal is a natural context for the kind of unhurried conversation in which genuine knowledge is built. Commit to hosting a meal once a month for a small group of people &mdash; not a performance, not a dinner party, but an ordinary shared table where people are invited to be present without agenda. Eat slowly. Ask real questions. Leave space for honest answers. The theologian Robert Capon argued that the table is a primary sacrament of community; to eat together is to practice the proclamation that human beings belong to one another and to God. The church that eats together regularly will know one another in ways that no meeting structure can replicate.",
  },
  {
    name: "Enter the Crushing Burden",
    body: "Identify one person in your community who is carrying a crushing weight &mdash; serious illness, bereavement, financial crisis, a prodigal child, a broken marriage &mdash; and practice Galatians 6:2 deliberately: bear part of their burden with your presence, your practical help, and your specific prayer. Do not wait until you know what to say. Show up without an explanation. Bring food. Sit with them in the suffering without immediately trying to resolve or explain it. Henri Nouwen wrote that the most healing thing one human being can offer another is not advice but &ldquo;the ministry of presence&rdquo; &mdash; the willingness to be there, to be inconvenienced, to stay. The community that does this is the community the watching world cannot explain and will not be able to ignore.",
  },
  {
    name: "Reconciliation Practice",
    body: "Every genuine community will have unresolved friction &mdash; small offenses that accumulate, misunderstandings that calcify into distance, sins that were absorbed but never addressed. Set aside time to identify one relationship in your community where there is distance or unresolved conflict, and follow the process of Matthew 18:15: go first, privately, directly. Not to win an argument but to restore a relationship. Ask: &ldquo;Did I hurt you? Was there a misunderstanding between us?&rdquo; The willingness to go first &mdash; even when you are not certain you are at fault &mdash; is one of the most powerful practices available to a community. The community that practices reconciliation across genuine conflict becomes, over time, a community that can sustain genuine depth &mdash; because its members know that failure will not end them.",
  },
];

const voices = [
  {
    name: "Dietrich Bonhoeffer",
    years: "1906–1945",
    role: "Theologian of genuine community",
    body: "Bonhoeffer wrote Life Together in 1938 while leading the illegal seminary at Finkenwalde, a community of young pastors training to resist the Nazi church. The book remains the most penetrating theological account of Christian community available. Its central insight is that genuine community is possible only through Jesus Christ: we do not belong to one another on the basis of natural affinity, shared interest, or emotional warmth, but because Christ stands between us and has claimed us as members of his body. Bonhoeffer&rsquo;s most famous warning is against &ldquo;the dream of community&rdquo; &mdash; the idealized vision of what community should be that, when it collides with reality, produces disillusionment and destruction. The person who loves their dream more than the actual community, Bonhoeffer wrote, will become its destroyer. Genuine community is built only through the daily experience of receiving and extending the forgiveness of Christ.",
    quote: "He who loves his dream of community more than the Christian community itself becomes a destroyer of the latter, even though his personal intentions may be ever so honest and earnest and sacrificial.",
  },
  {
    name: "Jean Vanier",
    years: "1928–2019",
    role: "Founder of L&rsquo;Arche",
    body: "Jean Vanier was a Canadian Catholic philosopher and naval officer who, in 1964, invited two men with intellectual disabilities to live with him in a small house in France. From that beginning grew L&rsquo;Arche &mdash; now a worldwide network of communities where people with and without intellectual disabilities live together as family. Vanier&rsquo;s theology of community emerges from decades of actual community life with people the world consistently excludes. Community and Growth, his primary book on the subject, is honest about the cost and the failure of community while insisting that it remains the primary locus of human transformation. His central conviction: the weak and the broken are not burdens on community but its teachers, because they strip away the masks of competence and force their companions into the vulnerability that genuine love requires.",
    quote: "Community is not an ideal. It is people. It is you and I. Together we are called to something greater than ourselves.",
  },
  {
    name: "Larry Crabb",
    years: "1944–2021",
    role: "Theologian of soul-care through community",
    body: "Larry Crabb was a Christian psychologist who spent the later decades of his career arguing that the deepest healing available to human beings is not found primarily in professional therapy but in the kind of genuine, Christ-centered community that the local church is uniquely positioned to provide. His book Connecting (1997) argues that most people carry an unnamed longing for genuine soul-contact &mdash; to be known in their deepest struggles and still to be accepted &mdash; and that the church, when it functions as Scripture describes, offers exactly that. Crabb was not anti-therapy; he was pro-community, arguing that the church has underestimated its own resources and outsourced to professionals what it was designed to do itself. His later work on spiritual direction and formation deepened this conviction: transformation happens most reliably not in isolation or in clinical settings but in communities of honest, grace-saturated relationship.",
    quote: "We are designed by God to need each other for our deepest growth.",
  },
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "Pastor of the particular community",
    body: "Peterson&rsquo;s contribution to the theology of community is his insistence on the particular, local, and unglamorous church as the actual site of Christian formation. He resisted the language of &ldquo;church growth&rdquo; and &ldquo;church planting&rdquo; when those terms implied that community could be engineered, marketed, or built at scale. The community that forms Christians is not a crowd but a congregation: a specific group of specific people with specific histories, specific failures, and specific needs, gathered around specific Word and sacraments in a specific place. Peterson pastored the same congregation for twenty-nine years and believed that staying was itself a theological act. His memoir The Pastor and his work on spiritual theology consistently return to the same conviction: the Christian life is lived with these people, in this place, over a long time &mdash; and that limitation is grace, not a problem to be solved.",
    quote: "Congregation is one of the words I want to retrieve and rehabilitate. Congregation is composed of people, who, upon entering, leave behind what people on the outside assume to be the right way to go about things.",
  },
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    role: "Analyst of love and community",
    body: "Lewis&rsquo;s The Four Loves (1960) offers one of the most nuanced Christian accounts of friendship, affection, and charity available. His analysis of friendship (philia) is particularly relevant to Christian community: he defines it as the love that arises between people who discover they share a vision of truth or beauty, who recognize each other as fellow travelers toward something larger than themselves. But Lewis also warns against the dangers of community &mdash; particularly the tendency of close communities to become exclusive, self-congratulatory, and closed to the outside. His image of the &ldquo;inner ring&rdquo; &mdash; the constant human longing to be among the insiders &mdash; is a sobering analysis of how community can become clique. The Christian community is saved from this by its grounding in charity (agape): the love that embraces not only the attractive and the compatible but the difficult and the excluded, because it is modeled on the love of God.",
    quote: "Friendship is unnecessary, like philosophy, like art, like the universe itself. It has no survival value; rather it is one of those things which give value to survival.",
  },
  {
    name: "Henri Nouwen",
    years: "1932–1996",
    role: "Contemplative teacher of presence",
    body: "Nouwen was a Dutch Catholic priest and professor who spent his final years at Daybreak, a L&rsquo;Arche community in Canada, caring for a man named Adam who could not speak, walk, or care for himself. His writing on community is shaped by that experience of finding God in the presence of the vulnerable and the broken. Nouwen wrote extensively about the spiritual dangers of isolation, the temptation to flee into busyness and productivity rather than face the loneliness that genuine community alone can address. His book Life of the Beloved argues that the deepest human wound is the sense of being unloved and unworthy, and that the community that receives each person as beloved &mdash; as God receives them &mdash; is genuinely healing in a way that no technique can replicate. His own life was marked by profound loneliness; his honesty about it makes his writing on community both humble and credible.",
    quote: "Community is the place where the person you least want to live with always lives.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 12:26-27",
    text: "If one member suffers, all suffer together; if one member is honored, all rejoice together. Now you are the body of Christ and individually members of it.",
    note: "Membership in the body is not metaphorical sentimentality; it is a claim about shared suffering and shared joy. The flourishing or failing of any one member is the business of every other.",
  },
  {
    ref: "Acts 2:42-44",
    text: "And they devoted themselves to the apostles&rsquo; teaching and the fellowship, to the breaking of bread and the prayers. And awe came upon every soul... And all who believed were together and had all things in common.",
    note: "Koinonia in Acts 2 is material, daily, and across social boundaries. It describes a community that has actually reorganized its life around its common belonging in Christ.",
  },
  {
    ref: "Galatians 6:2",
    text: "Bear one another&rsquo;s burdens, and so fulfill the law of Christ.",
    note: "The law of Christ &mdash; love &mdash; is fulfilled through the shared carrying of crushing weight. Burden-bearing is not merely emotional sympathy but practical, material, costly presence in the hard moments of others&rsquo; lives.",
  },
  {
    ref: "Hebrews 10:24-25",
    text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
    note: "The gathered assembly is not optional for perseverance. The community of encouragement is how believers sustain their faith through the long middle of the Christian life.",
  },
  {
    ref: "John 13:34-35",
    text: "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples.",
    note: "The quality of Christian community is itself an apologetic. The visible love of the church for its own members is one of the primary means by which the watching world encounters the gospel.",
  },
  {
    ref: "Romans 12:5",
    text: "So we, though many, are one body in Christ, and individually members one of another.",
    note: "The phrase &ldquo;members one of another&rdquo; is as strong as the Greek allows. We do not merely belong to the same body; we belong to one another. Mutual belonging is constitutive, not optional.",
  },
];

const videos = [
  { videoId: "OmIlrpYJkwA", title: "What Is Christian Community? — The Body of Christ" },
  { videoId: "AGYuVBysBSQ", title: "Dietrich Bonhoeffer: Life Together" },
  { videoId: "rAz0GC8m73E", title: "Koinonia — The Fellowship of the Early Church" },
  { videoId: "lG3lJEJqHkM", title: "Bearing One Another&rsquo;s Burdens — Galatians 6" },
  { videoId: "nk9nOiNVP0c", title: "Jean Vanier: Community as Healing" },
  { videoId: "Hf_aYBSPLao", title: "Why You Cannot Follow Jesus Alone" },
];

const relatedPages = [
  { href: "/church", label: "The Church" },
  { href: "/christian-witness", label: "Christian Witness" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/prayer", label: "Prayer" },
  { href: "/forgiveness", label: "Forgiveness" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianCommunityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CMNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [communityAction, setCommunityAction] = useState("");
  const [personServed, setPersonServed] = useState("");
  const [burdensShared, setBurdensShared] = useState("");

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
    if (!communityAction.trim()) return;
    const entry: CMNEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      communityAction: communityAction.trim(),
      personServed: personServed.trim(),
      burdensShared: burdensShared.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setCommunityAction("");
    setPersonServed("");
    setBurdensShared("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: ACCENT + "22",
            color: ACCENT,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Church &amp; Community
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          One Body: The Theology and Practice of Christian Community
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          The Christian faith is irreducibly communal. To be in Christ is to be in his body &mdash; which means
          belonging, organically and inescapably, to every other member. &ldquo;The eye cannot say to the hand,
          &lsquo;I have no need of you.&rsquo;&rdquo; (1 Cor 12:21). Individualistic Christianity is, on Paul&rsquo;s
          account, a contradiction in terms.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the body of Christ metaphor, the koinonia of Acts 2, the fifty-plus one another
          commands, the problem of Christian individualism, conflict and reconciliation, the eucharist as communal
          act, and the early church as a persistent vision of what Spirit-filled community looks like.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? ACCENT : BORDER,
                background: tab === t.id ? ACCENT + "22" : "transparent",
                color: tab === t.id ? ACCENT : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              A Theology of Christian Community
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements from the body metaphor to the eucharist &mdash; exploring why Christian community
              is not optional, what it costs, and what it makes possible.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology arrives at the same place: the Christian cannot flourish alone,
                because the Christian life is constituted by relationships &mdash; with God and, through God,
                with one another. The community that practices the one another commands, shares the eucharist,
                bears burdens, reconciles conflict, and gathers faithfully is not just doing good church; it is
                enacting the new creation that the gospel announces. And the watching world takes notice.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Practices of Community
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices for building and sustaining genuine community &mdash; honest, costly, and rooted in
              the grace that makes it possible.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: ACCENT + "22",
                  color: ACCENT,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Voices on Community
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six people whose lives and writing have shaped Christian thinking about communal life &mdash;
              from a theologian who died in prison to a philosopher who lived with the excluded.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.name }}
                  />
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div
                  style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: v.role }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${ACCENT}`,
                  background: ACCENT + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Scripture on Community
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts for the communal life &mdash; each paired with a reflection for meditation
              and prayer.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p
                  style={{
                    color: TEXT,
                    lineHeight: 1.8,
                    margin: "0 0 0.9rem",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    borderLeft: `3px solid ${ACCENT}`,
                    paddingLeft: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}
                  dangerouslySetInnerHTML={{ __html: s.note }}
                />
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Memory suggestion:</strong> memorize 1 Corinthians 12:26 and
                Galatians 6:2 together. The first describes what the body is; the second describes what the body
                does. Carry them into the week and see which relationships they illuminate.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: 0 }}>
              Community Life Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log acts of community &mdash; serving, burden-bearing, and vulnerable sharing. Entries are saved
              privately in your browser, a record of the communal life you are building one act at a time.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cmn-action" style={labelStyle}>Act of community</label>
                <textarea
                  id="cmn-action"
                  value={communityAction}
                  onChange={e => setCommunityAction(e.target.value)}
                  rows={2}
                  placeholder="e.g. Helped a friend move; brought a meal to a grieving family; stayed late after small group to listen; initiated reconciliation with someone I had avoided..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be specific. Vague community intentions remain intentions; named acts become records.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cmn-person" style={labelStyle}>Person served</label>
                <input
                  id="cmn-person"
                  type="text"
                  value={personServed}
                  onChange={e => setPersonServed(e.target.value)}
                  placeholder="e.g. my small group; a neighbor; a friend going through a divorce..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Community is always particular &mdash; it happens with specific people.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="cmn-burdens" style={labelStyle}>Burden shared or received</label>
                <textarea
                  id="cmn-burdens"
                  value={burdensShared}
                  onChange={e => setBurdensShared(e.target.value)}
                  rows={2}
                  placeholder="e.g. I told someone about my anxiety for the first time; they shared that their marriage is struggling; we prayed together for something I usually carry alone..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The exchange of genuine burdens &mdash; given or received &mdash; is koinonia.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!communityAction.trim()}
                style={{
                  background: communityAction.trim() ? ACCENT : BORDER,
                  color: communityAction.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: communityAction.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin recording the acts of community God calls you to &mdash; one
                    burden-bearing at a time.
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
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.25rem" }}>{entry.date}</div>
                        <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Act of Community
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.communityAction}</p>
                      </div>
                      {entry.personServed && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Person Served
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.personServed}</p>
                        </div>
                      )}
                      {entry.burdensShared && (
                        <div>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Burden Shared
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.burdensShared}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the body of Christ, Bonhoeffer&rsquo;s Life Together, the early church&rsquo;s koinonia,
              burden-bearing, and why the Christian life cannot be lived alone.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
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
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;They devoted themselves to the apostles&rsquo; teaching and the fellowship, to the breaking
            of bread and the prayers&rdquo; (Acts 2:42). Community is not what Christianity produces; it is
            what Christianity is. The body cannot flourish without its members, and its members cannot flourish
            without the body.
          </p>
        </div>
      </main>
    </div>
  );
}
