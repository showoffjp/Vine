"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const INDIGO = "#6366F1";

const STORAGE_KEY = "vine_christianrest_entries";

interface CRTEntry {
  id: string;
  date: string;
  restBarrier: string;
  restPractice: string;
  whatGodSaid: string;
}

const theologySections = [
  {
    title: "Sabbath as Creation Ordinance &mdash; Genesis 2:2-3",
    body: "Before there was a Sinai covenant, before Israel existed as a people, before any law was given, God rested. &ldquo;On the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy&rdquo; (Genesis 2:2-3). The Sabbath is not Mosaic legislation inserted into a pre-legal narrative; it is woven into the structure of creation itself. God did not rest because he was tired — omnipotence does not fatigue. He rested as an act of completion, satisfaction, and delight in what was made. He then blessed the day and made it holy, setting it apart from all other days. This means that rest is not a reward for finishing work; it is built into the rhythm of the world. The creature made in God&rsquo;s image is designed not only for six days of cultivation but for one day of cessation, celebration, and simply being with God. To observe the Sabbath is to participate in the original joy of the seventh day. To ignore it is to step out of the rhythm creation was made to sustain.",
  },
  {
    title: "Sabbath in the Mosaic Law &mdash; Exodus 20:8-11 and Deuteronomy 5:15",
    body: "When the Sabbath commandment appears in the Decalogue, it is grounded in two different rationales in two different books — and both are essential. Exodus 20:8-11 anchors the Sabbath in creation: &ldquo;For in six days the Lord made heaven and earth, the sea, and all that is in them, and rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy.&rdquo; Rest is a weekly re-enactment of God&rsquo;s own rest; to cease is to image the Creator. Deuteronomy 5:15, however, adds a redemptive rationale: &ldquo;You shall remember that you were a slave in the land of Egypt, and the Lord your God brought you out from there with a mighty hand and an outstretched arm. Therefore the Lord your God commanded you to keep the Sabbath day.&rdquo; The slave does not control his own time; the free person can choose to stop. Sabbath is an acted-out proclamation of freedom from the Pharaoh mentality — the belief that production never ends and worth is measured by output. To rest is to declare: I am not a slave. I have been set free. The one who keeps the Sabbath preaches the Exodus with their calendar.",
  },
  {
    title: "Entering God&rsquo;s Rest &mdash; Hebrews 4",
    body: "The author of Hebrews develops the Sabbath into a multi-layered eschatological theology. Psalm 95:11 — &ldquo;They shall not enter my rest&rdquo; — is applied to the wilderness generation who hardened their hearts, but the argument pivots: since that rest was not fully entered then, and since David in the Psalms still spoke of &ldquo;today,&rdquo; there remains &ldquo;a Sabbath rest for the people of God&rdquo; (Hebrews 4:9). This rest has three tenses. Past: God&rsquo;s rest was established at creation. Present: believers who trust in Christ enter a rest now — they &ldquo;cease from their own works just as God did from his&rdquo; (4:10), which means resting from the anxious striving to justify oneself by performance. Future: the full Sabbath rest awaits at the consummation of all things. Hebrews frames the spiritual life as an act of entering in — not by working harder but by trusting more deeply. The writer&rsquo;s exhortation to &ldquo;strive to enter that rest&rdquo; (4:11) is not a contradiction; it is the recognition that for restless, performance-driven hearts, ceasing from self-justifying effort requires the most deliberate commitment of all.",
  },
  {
    title: "&ldquo;Come to Me All Who Are Weary&rdquo; &mdash; Matthew 11:28-30",
    body: "In the center of Matthew&rsquo;s Gospel, Jesus issues what may be his most personal invitation: &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light&rdquo; (Matthew 11:28-30). The word translated &ldquo;rest&rdquo; here is anapausis — cessation, relief, the settling of what has been restless. Jesus does not offer productivity tips for the exhausted; he offers himself. The invitation presupposes a form of weariness that is more than physical: the burden of sin, of striving to earn one&rsquo;s standing before God, of carrying the weight of a world one was not designed to control. The yoke is a rabbinic metaphor for a teacher&rsquo;s interpretation of Torah; Jesus says his is easy — not because following him costs nothing, but because the load is finally proportionate to human shoulders, shared with the one who made those shoulders. Rest in Christ is not passive; it is active trust that redistributes the weight.",
  },
  {
    title: "Rest as Trust in God&rsquo;s Provision",
    body: "Overwork is rarely only a practical problem; it is almost always a theological one. The person who cannot stop working, cannot take a day off, cannot let go of control, is operating from a functional belief: if I stop, things will fall apart; if I stop, I will lose what matters; if I stop, there will not be enough. This is the anxiety Jesus names in Matthew 6: &ldquo;Do not be anxious about your life, what you will eat or what you will drink&rdquo; (6:25). His antidote is not a financial plan but a theology: your Father knows what you need. The Sabbath is the weekly embodied declaration that the world does not run on our labor but on God&rsquo;s sustaining word. To rest is to say with your whole body: I trust that God can hold things while I stop. The manna in the wilderness is the first Sabbath sermon: the double portion on the sixth day, the instruction not to gather on the seventh, and the fact that for once, none rotted. God demonstrated that provision is not contingent on ceaseless human effort. Every Sabbath re-enacts that lesson. Rest is not laziness; it is faith made physical.",
  },
  {
    title: "Sleep, Leisure, Sabbath, and Rest in Christ &mdash; Four Distinct Goods",
    body: "A theology of rest requires precision, because &ldquo;rest&rdquo; in Christian thought is not one thing. Sleep is the body&rsquo;s nightly surrender to vulnerability and renewal; it is the form of rest God gives to his beloved (Psalm 127:2) and the form Satan&rsquo;s anxious servants deny themselves. Leisure is the enjoyment of creaturely goods — beauty, play, conversation, walking — without utilitarian justification; it reflects the Sabbath logic that not everything needs to be productive to be good. Sabbath is the weekly rhythm of ceasing from primary vocation and re-orienting life toward worship, rest, and the people we love; it is structured, communal, and covenantal. Rest in Christ is the existential posture of the justified soul — the deep cessation of self-justifying striving, the arrival at a peace &ldquo;that surpasses all understanding&rdquo; (Philippians 4:7) because one&rsquo;s standing before God has been secured by another. All four are good. All four are distinct. A person may sleep well but still strive anxiously. A person may enjoy leisure but observe no Sabbath. And a person may keep Sabbath ritually without ever entering the deeper rest Christ offers to the weary soul.",
  },
  {
    title: "Why Overwork Is a Spiritual Problem",
    body: "The Reformation rightly recovered the dignity of ordinary work as vocation. But the Reformation church&rsquo;s heirs sometimes baptized busyness as virtue, turning the absence of rest into a mark of seriousness. Walter Brueggemann argues that Sabbath is fundamentally an act of resistance against the &ldquo;liturgy of commodity&rdquo; — the unceasing economic pressure that tells us our value is our productivity, that enough is never enough, and that the only sin is stopping. The person who cannot rest has implicitly accepted this liturgy as gospel. Overwork is spiritual because it reveals the gods we actually serve: the approval of others, the security of accumulation, the identity constructed from performance. Jesus&rsquo;s statement that &ldquo;one&rsquo;s life does not consist in the abundance of his possessions&rdquo; (Luke 12:15) is a word against the engine that drives overwork. The practice of Sabbath is the sustained, weekly, embodied refusal of that gospel. It is not enough to believe theologically that one&rsquo;s value comes from being loved by God; one must also practice it — and Sabbath is the practice.",
  },
  {
    title: "The Eschatological Rest",
    body: "The Sabbath day points beyond itself. Hebrews 4 makes clear that the weekly rhythm is a preview of &ldquo;the Sabbath rest that remains for the people of God&rdquo; — the final cessation of all striving, the eternal rest of the new creation in which there is no more sea (Revelation 21:1), no more night (21:25), no more temple (21:22), because the one the temple pointed to fills all things. The book of Revelation pictures the consummation as a city, a garden, a wedding, and a rest. Not passive but fully alive; not empty but saturated with presence. Every Sabbath observed is a little eschatology — an enactment of the end in the middle of history, a declaration that the age to come has already broken in. The believer who rests on the seventh day (or the first day, in the resurrection pattern of Sunday worship) is not merely following a schedule; they are planting a flag in the future, living as if the rest that is coming is already more real than the labor that surrounds them. The weekly Sabbath is a rehearsal for eternity.",
  },
];

const practices = [
  {
    name: "The Technology Sabbath",
    body: "Choose one day — or one evening — per week and power down every screen, notification, and device. Not to be productive during the break, but to rest. Sabbath from technology is not primarily about digital health (though it is also that); it is about dismantling the architecture of anxiety that keeps us perpetually available, perpetually reactive, perpetually checking. Augustine&rsquo;s heart was restless until it rested in God. Most of us have engineered restlessness into every waking hour by carrying a device that never stops. Begin with a sunset-to-sunset window, or even a two-hour window, and mark it with a simple ritual: a candle lit, a prayer said, a book opened. The silence that follows will initially feel uncomfortable — that discomfort is diagnostic. Name what you were afraid you would miss. Then sit with God in the quiet.",
  },
  {
    name: "Lectio Divina as Sabbath Practice",
    body: "Read one short scripture passage four times, slowly. First reading: listen for a word or phrase that catches your attention. Second reading: meditate on what that word speaks to your current life. Third reading: respond in prayer from whatever arose. Fourth reading: rest in silence, simply receiving. This ancient practice of lectio divina is a form of Sabbath in miniature — a deliberate cessation from output in order to receive. Most of our Bible reading is extractive (what can I get from this text to teach, or do, or decide); lectio is receptive (what is God saying, and can I simply be with it). Even fifteen minutes of this can re-tune a restless heart toward the frequency of grace. Eugene Peterson called it &ldquo;eating the book&rdquo; — not reading for information but for nourishment.",
  },
  {
    name: "A Sabbath Walk",
    body: "Walk without a destination or a podcast. Leave the earphones home. Walk slowly enough to notice what is actually there: the texture of a leaf, the particular blue of the sky today, the sound of children two streets over. Marva Dawn writes that Sabbath rest includes &ldquo;the freedom not to accomplish anything.&rdquo; A Sabbath walk practices uselessness in the best sense — movement without productivity, attention without agenda. For city dwellers this may require creativity (a park, a quiet street, a cathedral courtyard); for those in nature it may require only stepping outside. Conclude the walk by thanking God for three specific things you noticed. This practice builds the contemplative attention that is prerequisite for hearing God speak in the quiet.",
  },
  {
    name: "The Worry-Release Prayer",
    body: "On your Sabbath, write down every anxiety that is competing for your attention — the unpaid bill, the difficult conversation, the health concern, the project deadline. Then, one by one, pray Philippians 4:6-7 over each item: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.&rdquo; After praying over each item, physically set the paper aside — or burn it, or fold it and place it under your Bible. The act is symbolic but formative: you are rehearsing the reality that these concerns belong to God during the Sabbath, and practicing the trust that they are held while you rest. Many find that this single practice, done weekly, restructures the whole relationship between anxiety and faith.",
  },
  {
    name: "Celebrating Incompletion",
    body: "One of Sabbath&rsquo;s most countercultural gifts is that it arrives before your to-do list is done. It always will — the list never ends. The Pharaoh within us says: finish first, then rest. Sabbath says: rest now, in the middle of unfinishedness. This week, before the Sabbath begins, look at what remains undone and say aloud: &ldquo;This is enough. God does not need me to complete this to provide, sustain, or love.&rdquo; This is not irresponsibility; it is eschatological realism. The kingdom will come not because we worked our way to it but because God will bring it. Practice celebrating not what you accomplished in the past week but the gift of the week itself — people loved, moments inhabited, the sheer fact of existence sustained by God&rsquo;s mercy. Gratitude for what is replaces anxiety about what is not yet.",
  },
  {
    name: "Sabbath Hospitality",
    body: "In the Jewish tradition, Sabbath is not merely private but communal — the family table, the shared meal, the presence of guests. Wayne Muller notes that one of modernity&rsquo;s deprivations is the loss of a shared rhythm of rest; we have all our individual recoveries but no common cessation. Reclaim Sabbath as a social practice by inviting someone to share it: a slow meal with no agenda, an evening of board games and conversation, a Sunday afternoon walk with a neighbor. Hospitality on the Sabbath is a two-directional gift: the guest receives welcome, and the host practices the Sabbath virtue of being present to persons rather than tasks. There is nothing to produce at the shared table except attention and delight — which turns out to be a great deal.",
  },
];

const voices = [
  {
    name: "A.J. Swoboda",
    years: "Contemporary",
    role: "Pastor and theologian of Sabbath",
    body: "Swoboda, a pastor and professor, has written one of the most accessible contemporary theologies of Sabbath in his book Subversive Sabbath. He argues that Sabbath is not simply a spiritual discipline among many but the master discipline — the one that makes all others possible and that most directly confronts the idols of the modern economy. He traces his own breakdown from overwork and his recovery through the weekly practice of ceasing, and he writes from that experience with both theological precision and pastoral warmth. Swoboda insists that Sabbath is not merely individual but prophetic: when the church rests together, it demonstrates to a productivity-obsessed world that human worth is not contingent on output. He also engages the hard questions: what counts as work, how Sabbath adapts to irregular schedules, and why progressive Christians and evangelicals alike have abandoned it.",
    quote: "Sabbath is not a day to catch up. It is a day to stop. The world keeps spinning. You do not have to push it.",
  },
  {
    name: "Walter Brueggemann",
    years: "1933–present",
    role: "Old Testament theologian and Sabbath prophet",
    body: "Brueggemann&rsquo;s short but dense book Sabbath as Resistance argues that the Sabbath commandment is fundamentally anti-Pharaoh — a refusal of the ideology of ceaseless production that reduces persons to their economic utility. He traces a line from the brick quotas of Egypt to the relentless productivity demands of consumer capitalism, and he reads Sabbath observance as the act that most clearly marks the covenant community as an alternative society. For Brueggemann, the Israelites were trained in the wilderness not only to worship but to rest: the manna is a Sabbath curriculum, teaching that abundance comes from God&rsquo;s gift, not human anxiety. He writes with prophetic edge, connecting biblical text to contemporary economic critique, and his work has influenced both church leaders and social theorists.",
    quote: "The primary agenda of Sabbath is to re-order our lives in relation to God and away from the anxiety-producing demands of commodity culture.",
  },
  {
    name: "Wayne Muller",
    years: "Contemporary",
    role: "Author and minister of rest",
    body: "Muller, a minister and therapist, writes in Sabbath: Finding Rest, Renewal, and Delight in Our Busy Lives with the voice of someone who has sat with the exhausted and the dying and learned what they wished they had given themselves. His book is less systematic theology than wisdom literature — a collection of practices, stories, and reflections from multiple traditions, all converging on the simple truth that human beings need to stop. He is particularly good on the way that busyness masquerades as virtue and the way that constant availability is a form of self-abandonment. Muller writes that Sabbath &ldquo;dissolves the artificial urgency of our days&rdquo; and returns us to what is actually real. His multi-traditional approach is useful for churches whose members come from diverse backgrounds.",
    quote: "Sabbath dissolves the artificial urgency of our days and reminds us of what is deeply, essentially nourishing for the human spirit.",
  },
  {
    name: "Abraham Joshua Heschel",
    years: "1907–1972",
    role: "Jewish theologian and mystic of the Sabbath",
    body: "Heschel&rsquo;s The Sabbath, published in 1951, is arguably the most beautiful piece of writing about rest in the twentieth century. He calls the Sabbath &ldquo;a cathedral in time rather than in space&rdquo; — Judaism builds its holy architecture not in stone but in the recurring sanctity of the seventh day. Heschel insists that Western civilization suffers from the tyranny of things: we accumulate space, possessions, technology, and power, but we have forgotten how to dwell in time. The Sabbath is the antidote — not an absence of activity but a fullness of being. He writes with lyrical intensity about the Sabbath as the Queen, welcomed into the home with candles and song, and about the way that twenty-four hours of consecrated time reshapes the other six days. Though writing from within Jewish observance, Heschel&rsquo;s influence on Christian Sabbath theology has been immense, particularly through Walter Brueggemann and Marva Dawn.",
    quote: "The Sabbath is a day for the sake of life. The sabbath is not for the sake of the weekdays; the weekdays are for the sake of the Sabbath. It is not an interlude but the climax of living.",
  },
  {
    name: "Marva Dawn",
    years: "1948–present",
    role: "Lutheran theologian and Sabbath teacher",
    body: "Dawn&rsquo;s Keeping the Sabbath Wholly offers a fourfold framework: ceasing, resting, embracing, and feasting — each a different dimension of what it means to inhabit the day fully. She is particularly valuable on what ceasing means: not merely stopping work but stopping anxiety, stopping the need to be in control, stopping productivity as identity. Dawn writes from within the Lutheran liturgical tradition and connects Sabbath observance to the shape of corporate worship, arguing that Sunday gathering is the Christian community&rsquo;s weekly Sabbath practice and that the quality of attention we bring to it shapes the quality of our rest in God. She is also bracingly practical, addressing how Sabbath works for parents of young children, those with irregular work schedules, and those in cultures where Sunday has become the second busiest day of the week.",
    quote: "To keep the Sabbath is to cease from all the work of our ordinary lives and to turn away from the things that dominate those lives: productivity, achievement, possession, control.",
  },
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "Pastor and translator of holy leisure",
    body: "Peterson spent twenty-nine years as a parish pastor before becoming widely known as the translator of The Message, and his pastoral theology of Sabbath is rooted in the texture of that long local ministry. He wrote about his own need to protect Mondays as a day of rest and play — hiking, reading poetry, cooking, doing nothing particularly useful. He observed that pastors who cannot rest make anxious, performance-driven disciples; that a congregation shaped by a rested pastor learns that the Christian life is not a relentless grind. In his memoir The Pastor he reflects on the way that the rhythms of holy leisure — Sabbath, annual retreat, the daily office — were not indulgences for him but the source from which everything else flowed. His concept of &ldquo;unbusy pastor&rdquo; was not an aspiration for ease but for the deep attentiveness that only rested souls can offer.",
    quote: "I am busy. Is that not good? Am I not supposed to be busy, to be industrious, to be making the most of my time? In our society busyness is a virtue. But I do not think the gospel endorses it.",
  },
];

const scriptures = [
  {
    ref: "Genesis 2:2-3",
    text: "And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.",
    note: "Rest precedes law; it is woven into creation itself. Before any commandment, God modeled cessation, blessing, and holiness — and built these into the week for every creature made in his image.",
  },
  {
    ref: "Exodus 20:8-11",
    text: "Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the Lord your God. On it you shall not do any work... For in six days the Lord made heaven and earth, the sea, and all that is in them, and rested on the seventh day. Therefore the Lord blessed the Sabbath day and made it holy.",
    note: "The Sabbath commandment is grounded in creation: to rest is to imitate God, to participate in the original seventh-day delight. The week itself is a theological statement.",
  },
  {
    ref: "Matthew 11:28-30",
    text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.",
    note: "Jesus does not offer techniques for better time management; he offers himself. The deepest rest is not found in a practice but in a Person — the one whose yoke finally fits human shoulders.",
  },
  {
    ref: "Hebrews 4:9-10",
    text: "So then, there remains a Sabbath rest for the people of God, for whoever has entered God&rsquo;s rest has also rested from his works as God did from his.",
    note: "The writer of Hebrews sees in the Sabbath a prototype of the entire gospel: ceasing from self-justifying labor and resting in what God has already accomplished. Faith and Sabbath are the same posture.",
  },
  {
    ref: "Psalm 127:2",
    text: "It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for he gives sleep to his beloved.",
    note: "Sleep itself is a gift — not an indulgence or a sign of laziness but an act of trust. God provides for his beloved in the night. The anxious earner has not yet learned this; the resting child of God has.",
  },
  {
    ref: "Isaiah 30:15",
    text: "For thus said the Lord God, the Holy One of Israel: In returning and rest you shall be saved; in quietness and in trust shall be your strength. But you were unwilling.",
    note: "Israel&rsquo;s refusal of rest was a refusal of trust. The prophet names the equation at the heart of Sabbath: rest equals trust equals strength. Our busyness is often our unwillingness to believe this.",
  },
];

const videos = [
  { videoId: "sEgINFi7Gks", title: "The Theology of Sabbath Rest" },
  { videoId: "NhSaMnVh-A4", title: "Walter Brueggemann: Sabbath as Resistance" },
  { videoId: "uSl1cEdLJbQ", title: "Come to Me: Rest in Christ &mdash; Matthew 11" },
  { videoId: "7JjujdNPjJA", title: "Entering God&rsquo;s Rest &mdash; Hebrews 4" },
  { videoId: "u0j9SnCZ0Lk", title: "A.J. Swoboda on Subversive Sabbath" },
  { videoId: "Cv9GiPxJWaQ", title: "Heschel&rsquo;s Cathedral in Time" },
];

const relatedPages = [
  { href: "/christian-simplicity", label: "Christian Simplicity" },
  { href: "/silence-and-solitude", label: "Silence and Solitude" },
  { href: "/christian-fasting", label: "Christian Fasting" },
  { href: "/theology-of-work", label: "Theology of Work" },
  { href: "/christian-prayer-guide", label: "Contemplative Prayer" },
  { href: "/fruit-of-the-spirit", label: "Fruit of the Spirit" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianRestGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CRTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [restBarrier, setRestBarrier] = useState("");
  const [restPractice, setRestPractice] = useState("");
  const [whatGodSaid, setWhatGodSaid] = useState("");

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
    if (!restBarrier.trim()) return;
    const entry: CRTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      restBarrier: restBarrier.trim(),
      restPractice: restPractice.trim(),
      whatGodSaid: whatGodSaid.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setRestBarrier("");
    setRestPractice("");
    setWhatGodSaid("");
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
            background: INDIGO + "22",
            color: INDIGO,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Spiritual Disciplines
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Rest as Resistance: The Discipline of Christian Rest
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Sabbath rest is one of the most countercultural acts a Christian can perform. In a world whose liturgy is
          productivity &mdash; where worth is measured by output and stopping is treated as weakness &mdash; to cease is
          to preach. The Sabbath was built into creation before there was a law, re-given at Sinai as liberation from
          Pharaoh, fulfilled in Christ&rsquo;s &ldquo;Come to me, all who are weary,&rdquo; and extended in Hebrews into
          an eschatological horizon: there remains a rest for the people of God.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of Sabbath from creation to consummation, practical ways to enter rest, the
          voices of those who have taught it most deeply, and a journal to track what prevents your rest &mdash; and
          what God says in the quiet.
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
                borderColor: tab === t.id ? INDIGO : BORDER,
                background: tab === t.id ? INDIGO + "22" : "transparent",
                color: tab === t.id ? INDIGO : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              A Theology of Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Eight movements through Scripture&rsquo;s teaching on rest &mdash; from the seventh day of creation to
              the eschatological Sabbath that awaits the people of God.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: INDIGO, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single truth: rest is not earned by finishing &mdash; it is
                received as a gift from the God who finished on the seventh day and then said &ldquo;come.&rdquo; The
                creature who cannot stop is the creature who has not yet fully trusted the Creator. And the community
                that stops together preaches to the watching world that human worth is not contingent on what we
                produce. Rest is, in the end, an act of faith &mdash; and a prophecy of the day when all striving
                ceases and God is all in all.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Practices of Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six concrete ways to enter the Sabbath rhythm &mdash; ceasing, resting, embracing quiet, and learning
              to receive what God provides without anxious striving.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: INDIGO + "22",
                  color: INDIGO,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Voices on Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six thinkers &mdash; theologians, pastors, a Jewish mystic &mdash; whose writing on Sabbath and rest has
              shaped how the church understands the sacred rhythm of ceasing.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${INDIGO}`,
                  background: INDIGO + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: "0 0 0.25rem" }}>
              Scripture on Rest
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, memorize, and carry. Each pairs the passage with a brief reflection on
              what it means to cease and trust.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: INDIGO, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${INDIGO}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: INDIGO + "11", border: `1px solid ${INDIGO}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice for this week:</strong> choose one of these verses and write
                it on a card. Before your next period of rest &mdash; even a fifteen-minute pause &mdash; read the verse
                aloud, breathe, and say: &ldquo;Father, I trust you with what I am not doing right now.&rdquo; The verse
                becomes an anchor for the body as well as the mind.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Rest Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name what is preventing your rest right now, what practice you are trying, and what you are hearing from
              God in the quiet. Entries are saved privately in your browser &mdash; a record of your journey from
              restlessness toward the Sabbath that remains.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="crt-barrier" style={labelStyle}>What is preventing my rest</label>
                <textarea
                  id="crt-barrier"
                  value={restBarrier}
                  onChange={e => setRestBarrier(e.target.value)}
                  rows={2}
                  placeholder="e.g. I cannot stop checking my phone; I feel guilty when I am not productive; anxiety about an unresolved situation..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name it honestly. The barrier to rest is often a hidden belief about God, worth, or control.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="crt-practice" style={labelStyle}>The rest practice I am trying</label>
                <textarea
                  id="crt-practice"
                  value={restPractice}
                  onChange={e => setRestPractice(e.target.value)}
                  rows={2}
                  placeholder="e.g. A technology Sabbath from Saturday evening to Sunday morning; a weekly worry-release prayer; a daily ten-minute silent sit..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Specificity matters. &ldquo;I will rest more&rdquo; rarely works; a named practice can be kept.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="crt-godsaid" style={labelStyle}>What I heard from God in the quiet</label>
                <textarea
                  id="crt-godsaid"
                  value={whatGodSaid}
                  onChange={e => setWhatGodSaid(e.target.value)}
                  rows={2}
                  placeholder="e.g. A scripture that came to mind, a sense of peace about a situation I was anxious about, an impression during silent prayer..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The voice of God often comes in the rest, not despite it. Record what you notice.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!restBarrier.trim()}
                style={{
                  background: restBarrier.trim() ? INDIGO : BORDER,
                  color: restBarrier.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: restBarrier.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin tracking your rest &mdash; what prevents it, what you try, and what God says
                    when you finally stop.
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        {entry.date}
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          What Prevented Rest
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.restBarrier}</p>
                      </div>
                      {entry.restPractice && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Practice Tried
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.restPractice}</p>
                        </div>
                      )}
                      {entry.whatGodSaid && (
                        <div>
                          <div style={{ color: INDIGO, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What God Said
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.whatGodSaid}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: INDIGO, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on Sabbath theology, the prophetic vision of rest as resistance, and the invitation of Christ
              to bring our weariness to him.
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
            &ldquo;Come to me, all who labor and are heavy laden, and I will give you rest&rdquo; &mdash; the
            invitation has never been rescinded. Whatever is making you weary today, the answer is not another
            technique but a Person. Bring it to him. Cease. And find rest for your soul.
          </p>
        </div>
      </main>
    </div>
  );
}
