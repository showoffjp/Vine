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

const STORAGE_KEY = "vine_christiancontentment_entries";

interface CNTEntry {
  id: string;
  date: string;
  discontentArea: string;
  rootCause: string;
  truthToReceive: string;
}

const theologySections = [
  {
    title: "I Have Learned Contentment — Philippians 4:11 and Autarkes",
    body: "Not that I am speaking of being in need, for I have learned, in whatever state I am to be content (Philippians 4:11). The Greek word Paul uses is autarkes — a Stoic term for self-sufficiency that Paul radically reloads with a new meaning. For the Stoic philosopher, autarkes meant independence from external circumstances through the sheer power of reason and will. For Paul, it means something entirely different: a sufficiency that is Christ-derived, not self-derived. He learned it — the Greek perfect tense suggests something acquired through a process of experience across every kind of circumstance, not a gift handed to him at conversion or a personality trait he was born with. The school of contentment has tuition paid in both abundance and poverty, both honor and shame. Paul has sat in both classrooms and discovered Christ equally sufficient in each. The implication for every believer is freeing: contentment is not a temperament some people have and others lack. It is a discipline available to all, learned gradually in the ordinary curriculum of a God-governed life.",
  },
  {
    title: "Godliness with Contentment Is Great Gain — 1 Timothy 6:6",
    body: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content (1 Timothy 6:6–8). The conjunction matters: not godliness alone, and not contentment alone, but godliness with contentment. A devout religious life marked by covetousness, comparison, and restless discontent is not great gain no matter how many spiritual disciplines it includes. Paul roots contentment in the brute fact of creaturely finitude: we arrived with nothing, and we will leave with nothing. Everything in between is borrowed, not owned. This theological grounding — rather than mere positive thinking or emotional suppression — is what makes Christian contentment durable across changing circumstances. The contented soul is not the one who has talked herself out of her desires; it is the one who has understood the nature of created things and discovered that in Christ she already possesses what she most needs.",
  },
  {
    title: "Contentment vs. Passivity — A Critical Distinction",
    body: "One of the most damaging misreadings of Christian contentment is the confusion of it with passivity, resignation, or the acceptance of injustice. Contentment is an interior posture toward God, not an exterior posture toward the world. The contented Christian is not someone who does not grieve real losses, does not pray for healing and deliverance, or does not work actively for justice. What changes is the internal orientation: rather than the restlessness, grasping, resentment, and anxiety that characterize discontentment, there is a settled trust in the God who governs all things. Contentment is fully compatible with active pursuit of justice, honest grief over real losses, and persistent prayer for changed circumstances. The difference is between the soul that says “I cannot be at peace until this changes” and the soul that says “I am at peace even as I work for this to change.” Jeremiah Burroughs captures the distinction: contentment is not the quieting of the will but the submission of the will — a submission that leaves the hands free to act and the voice free to protest.",
  },
  {
    title: "Coveting as the Root of Discontentment — Exodus 20:17 and Romans 7",
    body: "You shall not covet your neighbor’s house; you shall not covet your neighbor’s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor’s (Exodus 20:17). The tenth commandment is unique among the Decalogue: every other commandment forbids an action, but this one forbids a desire. Its placement at the end of the law is theologically significant — it exposes the interior condition from which all the other violations flow. Paul makes this explicit in Romans 7: it was the commandment not to covet that awakened his awareness of sin and its power. Coveting is the engine of discontentment: we see what another has, we believe we lack it, we feel the sting of not having it, and our restlessness grows. The comparison culture of social media is an industrialized covetousness machine, manufacturing the sense of lack at scale. The tenth commandment addresses not behavior management but the reordering of desire — which is why contentment is ultimately a gospel issue, not a willpower issue.",
  },
  {
    title: "The Manna Principle — Daily Bread, Not Stockpiling (Exodus 16)",
    body: "When God fed Israel in the wilderness, he gave manna in precisely daily portions: enough for each day, inedible if hoarded overnight, doubled only before the Sabbath (Exodus 16). The arrangement was clearly pedagogical. Israel was being trained in the discipline of daily dependence — the habit of receiving what God provides today without grasping for tomorrow’s security. When they hoarded anyway, the extra bread bred worms and stank (Exodus 16:20). The lesson was unmistakable: the security they sought in accumulation was a rotting illusion. Jesus draws directly on this pattern in the Lord’s Prayer: Give us this day our daily bread (Matthew 6:11). The petition is not for a year’s supply but for today’s portion. The spirituality of the daily is the anti-covetousness discipline: it trains the soul to hold each day’s gifts as gifts rather than as entitlements, and to release the future to the God who is already there. Contentment is often simply the practice of receiving today’s manna without scanning the horizon for tomorrow’s.",
  },
  {
    title: "Contentment in Suffering — Hebrews 13:5 and the Promise Beneath",
    body: "Keep your life free from love of money, and be content with what you have, for he has said, ‘I will never leave you nor forsake you.’ So we can confidently say, ‘The Lord is my helper; I will not fear; what can man do to me?’ (Hebrews 13:5–6). The writer grounds contentment in a specific divine promise — God’s covenant pledge of perpetual presence — not in comfortable circumstances. This is crucial: contentment is not the product of adequate material conditions but of an adequate God. The person who has the promise “I will never leave you nor forsake you” has the only security that circumstances cannot remove. This is why Paul can speak of contentment in prison, Jeremiah Burroughs can speak of it during civil war, and countless believers across history have testified to an inexplicable peace in the midst of poverty, illness, and persecution. The contented Christian in suffering is not in denial of the suffering; she has found that the God who is present in it is more than the suffering requires.",
  },
  {
    title: "Contentment as Countercultural — Consumerism and the Prosperity Gospel",
    body: "Consumer culture is structurally dependent on the creation and maintenance of discontentment. Advertising exists to convince people they lack what they need to be happy. The entire engine of the modern economy runs on manufactured desire. To be formed by the gospel while immersed in this environment requires deliberate counter-formation — practices of gratitude, simplicity, and theological reflection that resist the narrative of never-enough. The prosperity gospel is, in this sense, not a corruption of the gospel from outside but a capitulation to consumer culture from within: it teaches that material abundance is a sign of God’s favor and material lack is a sign of insufficient faith. This inverts the New Testament entirely. Jesus pronounces the poor blessed (Luke 6:20), warns the rich more urgently than he warns the poor, and tells the parable of the rich fool precisely to expose the delusion that life consists in the abundance of possessions (Luke 12:15). The prosperity gospel produces a deeper and more theological discontentment: the suffering believer is taught not only that she lacks things but that her lack is evidence of God’s displeasure. This is a spiritual cruelty that the biblical theology of contentment directly corrects.",
  },
];

const practices = [
  {
    name: "The Daily Gratitude Examen",
    body: "At day’s end, name three specific things you received today — not generic categories (“my health,” “my family”) but particular gifts: the conversation this morning, the meal you tasted, the difficulty that produced something good. Gratitude is the soil in which contentment grows; discontentment flourishes in soil where nothing specific is ever named or received. The practice of naming concretizes what abstract thankfulness leaves vague: it trains the soul to perceive the daily manna that the unseeing eye walks past. Keep a small notebook or note on your phone where you record the three gifts each evening. Over weeks, you will discover that you have been living in abundance you had stopped noticing.",
  },
  {
    name: "Diagnosing the Covetousness",
    body: "Identify the area of your life where the pressure of not-enough is most acute: finances, relationships, achievement, appearance, status, or something else. Do not immediately try to fix the feeling; instead, bring it before God and ask: what is the false promise underneath this discontentment? What do I believe this thing would give me that I believe I currently lack? Follow the covetousness to its root: Is it comparison (I would be satisfied if I had what they have)? Is it fear (I need more in order to be safe)? Is it idolatry (I am looking to this thing to do what only God can do)? The tenth commandment is not a behavior rule but an interior diagnostic: it exposes the condition of the heart so that the heart can be addressed.",
  },
  {
    name: "A Week of Reduced Consumption",
    body: "Practice one week without new non-essential purchases, without browsing shopping sites, and without comparing your circumstances to others on social media. Notice what surfaces in the space the reduction creates: anxiety, boredom, a sudden awareness of what you already have, or something else. Bring what you discover to God in prayer. Many believers who practice this report surprise at how habitual the patterns of consumption had become — not out of need but out of the trained habit of shopping as comfort, distraction, or identity-maintenance. The week is not about asceticism for its own sake but about creating the quiet in which you can hear whether your soul is at rest or restless, and why.",
  },
  {
    name: "Reading Burroughs Slowly",
    body: "Obtain Jeremiah Burroughs’s The Rare Jewel of Christian Contentment — it is in the public domain and freely available. Read it slowly, one chapter at a time, over several weeks. Do not rush it. Burroughs identifies twelve graces that compose true contentment, twelve lessons through which Paul learned it, and the manifold evils of a discontented spirit. Mark passages that diagnose you specifically. Pray the passages back to God. Burroughs writes with the pastoral precision of a man who has watched contentment and its absence play out in real lives across decades of ministry during one of England’s most turbulent periods. His seventeenth-century language requires some patience; the theology repays every minute.",
  },
  {
    name: "The Simplicity Practice",
    body: "Choose one area of your life to simplify for a month: your schedule, your possessions, your consumption of news and entertainment, your wardrobe, your digital life. Simplicity is the outer expression of an inner orientation: the person who believes that in Christ she has every spiritual blessing in the heavenly places (Ephesians 1:3) can hold created things lightly. The practice is not about poverty for its own sake but about discovering what you actually need, and being surprised to find it is less than you thought. Richard Foster’s Celebration of Discipline is a useful companion for the month: his chapter on simplicity connects the inner reality to outer expressions and guards against both the legalism that turns simplicity into a new achievement system and the sentimentalism that keeps it entirely interior.",
  },
  {
    name: "The Lord’s Prayer as Anti-Covetousness Liturgy",
    body: "Pray the Lord’s Prayer slowly every day for one month, pausing at “give us this day our daily bread.” Notice what the petition is not: it does not ask for tomorrow’s bread, for a year’s supply, or for certainty about the future. It asks for today’s portion from today’s Father. Before you pray it each day, name the specific area where you most want to accumulate rather than receive: the savings buffer that needs to be larger, the relationship security you’re trying to manufacture, the career positioning for which you are anxious. Bring that specific thing into the daily-bread petition: God, today’s portion from you is enough. Tomorrow is yours. The prayer, prayed daily and seriously, is one of the most powerful anti-covetousness disciplines available to the believer.",
  },
];

const voices = [
  {
    name: "Jeremiah Burroughs",
    years: "1600–1646",
    role: "Puritan pastor; author of The Rare Jewel of Christian Contentment",
    body: "Burroughs was a Puritan pastor and one of the Westminster Assembly divines, and his Rare Jewel of Christian Contentment is the most thorough treatment of contentment in the Christian tradition. He delivered it as a series of sermons during the English Civil War — a context that makes its emphasis on interior peace amid external chaos particularly striking. His definition of contentment has never been surpassed: “Christian contentment is that sweet, inward, quiet, gracious frame of spirit which freely submits to and delights in God’s wise and fatherly disposal in every condition.” Burroughs identifies contentment as simultaneously active (submission, delight) and passive (a gift of grace), interior (a frame of spirit) and theological (grounded in God’s disposal). He argues that discontent is a form of murmuring against God — it says, implicitly, that God is not good, not wise, or not in control of my circumstances. The Rare Jewel remains one of the most searching and pastoral treatments of the discontented soul in any language.",
    quote: "Christian contentment is that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God’s wise and fatherly disposal in every condition.",
  },
  {
    name: "Thomas Watson",
    years: "c. 1620–1686",
    role: "Puritan minister; author of The Art of Divine Contentment",
    body: "Thomas Watson’s The Art of Divine Contentment appeared in 1653 alongside Burroughs’s Rare Jewel as one of the great Puritan treatments of this theme. Watson’s characteristically vivid and aphoristic style — dense with concrete images and memorable turns of phrase — makes his work unusually accessible. His central claim is that the person who has God has everything, and the person who lacks God lacks everything regardless of what else they possess. He describes the contented Christian as one who “carries heaven about him” — possessing peace of conscience and joy in the Holy Ghost as a present portion. Watson also provides the most practical account of what contentment is not: it is not natural disposition, not stoic suppression, not indifference to suffering. It is the supernatural reordering of desire by the Spirit, producing a soul that can give thanks for little and be unmoved by much.",
    quote: "A contented Christian carries heaven about him. He has peace of conscience, joy in the Holy Ghost; and is not this a heaven upon earth? He who has God for his portion needs nothing else. God is a whole ocean of blessedness; the creature is but a drop.",
  },
  {
    name: "John Piper",
    years: "1946–",
    role: "Pastor-theologian; founder of Desiring God",
    body: "John Piper’s approach to contentment is shaped by his broader project of Christian Hedonism: the claim that God is most glorified in us when we are most satisfied in him. On this account, contentment is not the diminishment of desire but its redirection — away from the lesser goods that cannot satisfy and toward the one good that can. Discontentment, in Piper’s framework, is a form of practical atheism: it functionally denies that God is sufficient for what the soul actually needs. His sermons on Philippians 4 and 1 Timothy 6 treat contentment as among the most practical and urgent disciplines for believers formed by consumer culture. He is especially sharp on the connection between contentment and joy: the joyless Christian is, by definition, a discontented one, and the pursuit of joy in God is both the antidote to covetousness and the fullest expression of what the soul was made for.",
    quote: "The deepest discontentment is not the absence of things but the absence of God. And the richest contentment is not the presence of things but the presence of God.",
  },
  {
    name: "Timothy Keller",
    years: "1950–2023",
    role: "Pastor and author; founder of Redeemer Presbyterian Church, New York City",
    body: "Timothy Keller brought the Puritan theology of contentment into sustained dialogue with contemporary culture, particularly with the comparison-driven anxieties of life in a global city. He argued that the idols that produce discontentment — wealth, status, achievement, approval — are not simply personal failings but cultural formations: the air we breathe in a particular time and place. His book Counterfeit Gods traces the way that what begins as a legitimate desire (for security, for love, for significance) becomes an idol when it is elevated to the status of what we cannot live without. Contentment, on Keller’s account, requires not the suppression of desire but the identification and dethroning of the idol beneath the desire — which requires both the diagnostic work of honest self-examination and the positive work of finding in Christ the security, love, and significance the idol promised but could not deliver.",
    quote: "The only way to dispossess the heart of an old affection is by the expulsive power of a new one. Contentment comes not from getting less but from finding that in Christ you already have more than enough.",
  },
  {
    name: "Paul David Tripp",
    years: "1950–",
    role: "Biblical counselor and author; president of Paul Tripp Ministries",
    body: "Paul Tripp’s contribution to the theology of contentment comes primarily through his work in biblical counseling and his analysis of the heart’s desires. His book Dangerous Calling and his broader body of work return repeatedly to the observation that discontentment is never really about circumstances: it is about what we have decided we need in order to be happy, safe, or fulfilled. Tripp is particularly perceptive on the way that even spiritual ministry can become a vehicle for discontentment — the pastor who needs his ministry to succeed, the counselor who needs her clients to improve, the parent who needs his children to turn out well, as conditions for his own peace. True contentment, in Tripp’s framework, requires the daily surrender of the functional saviors to which the heart quietly returns, and the daily re-reception of Christ as the only one whose provision is actually sufficient.",
    quote: "Discontentment is not first a circumstantial problem. It is a heart problem. The discontented heart has decided what it needs in order to be at peace, and it has decided wrongly.",
  },
  {
    name: "Kathy Keller",
    years: "1950–",
    role: "Author and minister’s wife; co-author of The Meaning of Marriage",
    body: "Kathy Keller’s reflections on contentment emerge from decades of living a ministry life that frequently required the surrender of her own vocational ambitions in service of her husband’s calling and the demands of raising a family in a high-pressure urban ministry context. Her writing is marked by a hard-won honesty about the way that the discontentment of women — with their roles, their seasons, their unrecognized gifts — is a genuine spiritual struggle that requires genuine theological address rather than pious platitudes. She brings to contentment both the theological rigour of Reformed anthropology (the heart’s tendency to covet what others have) and the pastoral warmth of someone who has had to apply these truths to the specific texture of women’s experience. Her chapter on contentment in The Meaning of Marriage is particularly searching on the discontentment that enters marriages when spouses begin to look to each other for what only God can supply.",
    quote: "The soul that rests in God is not passive. It is the most active soul in the room — active in gratitude, active in trust, active in the work of releasing what was never ours to keep.",
  },
];

const scriptures = [
  {
    ref: "Philippians 4:11-13",
    text: "Not that I am speaking of being in need, for I have learned, in whatever state I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.",
    note: "The word autarkes — self-sufficient — is here given a new Christian meaning: sufficiency not from the self but from Christ. Paul learned it, which means you can learn it too. The school is every circumstance you are currently in.",
  },
  {
    ref: "1 Timothy 6:6-8",
    text: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.",
    note: "Contentment is not addition but subtraction: the realization that the baseline of creaturely life is already generosity. We arrived with nothing; everything since is gift.",
  },
  {
    ref: "Exodus 20:17",
    text: "You shall not covet your neighbor’s house; you shall not covet your neighbor’s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor’s.",
    note: "The tenth commandment is the only one that forbids a desire, not an action. It names the interior source from which all the outer violations flow. The diagnosis of covetousness is the beginning of the cure.",
  },
  {
    ref: "Hebrews 13:5",
    text: "Keep your life free from love of money, and be content with what you have, for he has said, ‘I will never leave you nor forsake you.’",
    note: "The writer anchors contentment in a specific covenant promise. Contentment is possible not because circumstances are adequate but because God is present — and his presence is more than adequate.",
  },
  {
    ref: "Exodus 16:19-20",
    text: "And Moses said to them, ‘Let no one leave any of it over till the morning.’ But they did not listen to Moses. Some left part of it till the morning, and it bred worms and stank.",
    note: "The manna that rotted when hoarded is a parable of every created good held beyond its time. God’s gifts are given for today; grasping at tomorrow’s security produces its own corruption.",
  },
  {
    ref: "Matthew 6:31-33",
    text: "Therefore do not be anxious, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ For the Gentiles seek after all these things, and your heavenly Father knows that you need them all. But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    note: "Anxious seeking is the opposite of contentment, and both are rooted in a theology: either the Father knows what I need and governs the world accordingly, or he does not and I must secure my own future. Jesus addresses the theology before the behavior.",
  },
];

const videos = [
  { videoId: "nFnk4kc0gIE", title: "Paul’s Secret of Contentment — Philippians 4:11-13" },
  { videoId: "ZqLwKUlbHDk", title: "The Rare Jewel of Christian Contentment — Jeremiah Burroughs" },
  { videoId: "YBm1CiqmGIA", title: "Godliness with Contentment Is Great Gain — 1 Timothy 6" },
  { videoId: "WJeKYlmPDFo", title: "Contentment vs. Covetousness: What the 10th Commandment Exposes" },
  { videoId: "9SiBvgCM8MA", title: "The Manna Principle: Daily Bread and Learning to Trust" },
  { videoId: "G1_dyCT5hJI", title: "Consumerism, Comparison, and the Gospel of Enough" },
];

const relatedPages = [
  { href: "/christian-simplicity", label: "Christian Simplicity" },
  { href: "/christian-gratitude", label: "Christian Gratitude" },
  { href: "/christian-generosity", label: "Christian Generosity" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/christian-joy", label: "Christian Joy" },
  { href: "/contentment", label: "Contentment" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianContentmentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CNTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [discontentArea, setDiscontentArea] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [truthToReceive, setTruthToReceive] = useState("");

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
    if (!discontentArea.trim()) return;
    const entry: CNTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      discontentArea: discontentArea.trim(),
      rootCause: rootCause.trim(),
      truthToReceive: truthToReceive.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setDiscontentArea("");
    setRootCause("");
    setTruthToReceive("");
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
            background: GREEN + "22",
            color: GREEN,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Character &amp; Virtue
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Godliness with Contentment: A Learned Discipline
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;I have learned, in whatever state I am, to be content&rdquo; (Phil 4:11). Paul does not say he was born content
          or that contentment descended upon him at conversion. He learned it &mdash; through plenty and hunger, abundance
          and need &mdash; and the teacher was Christ, whose strength proved sufficient in every classroom.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores contentment as a discipline, not a feeling: the freedom from coveting that comes when the soul
          discovers it already possesses what it most needs, the manna principle of daily dependence, and the voices who have
          walked this road before us.
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
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "22" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              A Theology of Contentment
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Seven movements from Philippians 4 to the manna narratives to the prosperity gospel &mdash; tracing contentment
              as a learned, Christ-grounded, countercultural discipline.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single discovery: the contented soul is not the one who has
                acquired enough but the one who has found that in Christ she already has enough. Contentment is not the
                ceiling of desire but the re-centering of it &mdash; the soul that has stopped scanning the horizon for what
                it lacks because it has found that the God who is present is more than what the moment requires.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices of Contentment
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Contentment is learned, and learning requires practice. Six disciplines for the school Paul attended &mdash;
              from daily gratitude to the Puritan library to the Lord&rsquo;s Prayer as anti-covetousness liturgy.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: GREEN + "22",
                  color: GREEN,
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
              Voices on Contentment
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; Puritan pastors, Reformed theologians, and pastoral counselors &mdash; who have explored
              contentment with theological depth and pastoral honesty.
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
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${GREEN}`,
                  background: GREEN + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Scripture on Contentment
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts from Philippians, Timothy, Exodus, Hebrews, and the Sermon on the Mount. Read slowly,
              memorize one, and pray it back over the specific area of discontentment in your life right now.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A diagnostic question for each text:</strong> before you move to the next
                passage, ask &ldquo;where is the discontentment this text addresses showing up specifically in my life this
                week?&rdquo; Abstract contentment theology produces little; the same theology applied to a named struggle
                produces transformation.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Contentment Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name an area of discontentment, dig for the root cause (comparison? fear? idolatry?), and identify the truth
              that addresses it. Entries are saved privately in your browser &mdash; a quiet record of the soul learning what
              Paul learned, one circumstance at a time.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cnt-discontent" style={labelStyle}>An area of discontentment I am naming</label>
                <textarea
                  id="cnt-discontent"
                  value={discontentArea}
                  onChange={e => setDiscontentArea(e.target.value)}
                  rows={2}
                  placeholder="e.g. The gap between where I am in my career and where I expected to be; the singleness I did not choose; the financial situation that keeps not improving..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name it specifically. A vague unease cannot be brought to God; a named discontentment can.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cnt-root" style={labelStyle}>The root cause I suspect beneath it</label>
                <textarea
                  id="cnt-root"
                  value={rootCause}
                  onChange={e => setRootCause(e.target.value)}
                  rows={2}
                  placeholder="e.g. Comparison with a colleague; fear that God is not providing; treating marriage/achievement/wealth as something I need in order to be okay..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Is it comparison, fear, or idolatry? Which created good have I elevated to a condition for peace?</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="cnt-truth" style={labelStyle}>The truth I need to receive</label>
                <textarea
                  id="cnt-truth"
                  value={truthToReceive}
                  onChange={e => setTruthToReceive(e.target.value)}
                  rows={2}
                  placeholder="e.g. &ldquo;I will never leave you nor forsake you&rdquo; (Heb 13:5); &ldquo;godliness with contentment is great gain&rdquo;; the manna principle: today&rsquo;s portion is enough..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Which promise or gospel reality speaks directly to this specific discontentment?</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!discontentArea.trim()}
                style={{
                  background: discontentArea.trim() ? GREEN : BORDER,
                  color: discontentArea.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: discontentArea.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin the record above &mdash; one named discontentment at a time.
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
                      <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Area of Discontentment
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.discontentArea}</p>
                      </div>
                      {entry.rootCause && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Root Cause
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.rootCause}</p>
                        </div>
                      )}
                      {entry.truthToReceive && (
                        <div>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Truth to Receive
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.truthToReceive}</p>
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
              Teaching on Philippians 4, Burroughs&rsquo;s Rare Jewel, the tenth commandment, and the gospel as the
              antidote to consumer discontentment.
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
            &ldquo;Godliness with contentment is great gain&rdquo; &mdash; not because contentment produces gain, but because
            the contented soul has already found, in the God who is present, the only gain that will not be taken away.
          </p>
        </div>
      </main>
    </div>
  );
}
