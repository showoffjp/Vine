"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const AMBER = "#F59E0B";

const STORAGE_KEY = "vine_christianworship_entries";

interface WSPEntry {
  id: string;
  date: string;
  worshipMoment: string;
  distraction: string;
  offeringMade: string;
}

const theologySections = [
  {
    title: "In Spirit and in Truth — John 4:24",
    body: "The most programmatic statement Jesus makes about worship appears in a conversation with a Samaritan woman about the correct mountain for worship. His answer reframes the question entirely: &ldquo;God is spirit, and his worshipers must worship in the Spirit and in truth&rdquo; (John 4:24). The two qualifications are not independent. &ldquo;In spirit&rdquo; does not mean emotionally, subjectively, or informally; the Holy Spirit is in view &mdash; worship that is animated by the Spirit, enabled by the Spirit, offered through the Spirit&rsquo;s mediation. &ldquo;In truth&rdquo; means in accordance with the truth of who God is and who we are before him &mdash; worship that is not performance or projection but honest encounter. The two together form the alternative to the Samaritan and Jewish argument about geography: God is not waiting on a mountain for worshipers to find the right address. He is seeking worshipers &mdash; the verb in verse 23 is astonishing, &ldquo;the Father seeks such people&rdquo; &mdash; who will come to him honestly, through the Spirit, in the name of the Truth who is his Son.",
  },
  {
    title: "Romans 12:1 — The Whole Life as Worship",
    body: "Paul&rsquo;s great practical appeal in Romans opens with a call that has no parallel in the New Testament for scope: &ldquo;I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship&rdquo; (Romans 12:1). The Greek word translated &ldquo;spiritual worship&rdquo; is latreia logiken &mdash; rational, or word-consistent, worship. Paul is reaching for the idea that the proper response to the theology of Romans 1&ndash;11 is not an upgraded Sunday experience but a total reorientation of the self. The body &mdash; physical, ordinary, daily &mdash; is the offering. This demolishes the sacred/secular divide at the root: the spreadsheet prepared with integrity, the difficult conversation handled honestly, the child bathed with tenderness &mdash; all of these are latreia when they are consciously offered to the God who gave the body, the mind, and the day. Worship in this sense is not a subset of the Christian life but its total form.",
  },
  {
    title: "The Gathering as Rehearsal for New Creation",
    body: "Corporate worship is not primarily a means of spiritual self-improvement, though it often produces that effect. The church gathers, in the earliest Christian understanding, as a proleptic enactment of the new creation &mdash; a gathering of the redeemed from every tribe and tongue that anticipates the great assembly of Revelation 7 and 22. When Christians gather to sing, pray, hear Scripture, and eat at the table together, they are performing in the present what all of history is moving toward. This is why the form and content of corporate worship matter more than aesthetic preference: they are not just tools for creating a certain mood but rehearsals for an eternal reality. Marva Dawn argues in Reaching Out without Dumbing Down that decisions about corporate worship should be made not on the basis of what entertains or retains the most people but on the basis of what forms worshipers into the kind of people who will inhabit the new creation. The gathering is training, not just transaction.",
  },
  {
    title: "Why Corporate Worship Matters Beyond Preference",
    body: "The contemporary treatment of corporate worship as a service to be attended or skipped based on personal profit misses the nature of the gathering entirely. The New Testament assumes that Christians gather &mdash; the letter to the Hebrews commands it explicitly (&ldquo;not neglecting to meet together&rdquo;, Hebrews 10:25) &mdash; and the reasons are not primarily subjective. First, corporate worship is an act of covenantal obedience: the assembled people of God declare together, visibly and audibly, their allegiance to the Lord who has redeemed them. Second, it is formative in ways private devotion cannot replicate: we are shaped by the practices of the gathered body &mdash; the reading of Scripture, the prayers, the songs, the sermon, the sacraments &mdash; in ways our individual reading cannot produce alone. James K.A. Smith argues that human beings are not primarily thinkers but desirers, and that desire is shaped by practice &mdash; which means the liturgical practices of the gathered church are shaping what we love at a pre-cognitive level, whether we are aware of it or not.",
  },
  {
    title: "The Four Movements of Worship",
    body: "Robert Webber&rsquo;s work on the ancient shape of Christian worship identifies four movements that characterize every historically rooted gathering: gathering, word, table, and sending. In gathering, the congregation assembles and acknowledges the presence of God &mdash; not as if he has just arrived but as if the congregation has arrived where God already is. In the word, Scripture is read, proclaimed, and applied &mdash; the community submits to the voice of the risen Christ speaking through his word. At the table, the congregation receives the bread and cup &mdash; participating in the body and blood of Christ, enacting their union with him and with one another. In the sending, the congregation is dismissed not as a conclusion but as a commissioning: the worship of the world is now their assignment. This four-fold shape provides a theological grammar for evaluating any corporate worship form: not &ldquo;did I enjoy it?&rdquo; but &ldquo;did we gather in God&rsquo;s name, hear his word, receive his table, and go in his mission?&rdquo;",
  },
  {
    title: "Praise vs. Worship — A Necessary Distinction",
    body: "In popular Christian vocabulary, &ldquo;praise and worship&rdquo; has become a near-synonym for congregational singing, and the two words have largely lost their distinction. But the distinction is worth recovering. Praise is the act of declaring God&rsquo;s attributes and acts &mdash; it is outward-turned and descriptive: &ldquo;You are holy, you are mighty, you have done great things.&rdquo; Worship in the fuller sense is the posture of the whole person before God &mdash; prostration, submission, offering. Every act of praise is an act of worship, but not every experience marketed as &ldquo;worship&rdquo; in the contemporary church actually achieves the posture of genuine worship: the orientation of the whole self toward God rather than toward an emotional experience. A.W. Tozer argued that much of what passes for worship is actually entertainment about God rather than encounter with God. The test he proposed was simple: does this produce awe? Does the worshiper come away having genuinely met Someone, or having enjoyed the meeting as a pleasant experience? The distinction is not between slow songs and fast songs but between God-directed adoration and self-directed feeling.",
  },
  {
    title: "Why God Commands Worship — Not Insecurity, But Our Joy",
    body: "A common objection to the theology of worship runs: why does God command us to worship him? Does the infinite God need praise? The answer C.S. Lewis gave, and which John Piper has developed into a theology of Christian hedonism, is that God commands our worship not for his benefit but for ours. Lewis observed that in Scripture, the commanded praise of God is the completion of joy in the thing praised &mdash; not an add-on obligation but the natural overflow of having truly encountered something magnificent. We praise great sunsets, great meals, great books, great friends; the command to praise God is the invitation to complete our joy in the greatest possible object. Furthermore, because God is the supreme good &mdash; the source of all beauty, joy, and love &mdash; to redirect our worship toward him is to turn our deepest desires toward the only object that can satisfy them. The God who commands worship is not a tyrant seeking applause; he is a Father inviting his children into the joy of knowing and adoring the one thing that will not disappoint.",
  },
  {
    title: "Lament as Worship — The Psalms",
    body: "The Psalter, the church&rsquo;s oldest hymnal, is roughly half lament. The psalms of complaint, abandonment, confusion, and rage &mdash; Psalms 22, 44, 88, 137 &mdash; are as fully worship as the psalms of exuberant praise. This is a fact that much contemporary Christian worship has effectively suppressed: the worship of the gathered church has been relentlessly optimistic, which means it has failed the congregation member in pain, in doubt, or in grief, teaching them implicitly that their honest condition is not welcome in God&rsquo;s presence. But the lament psalm is addressed to God, argued with God, and offered to God &mdash; it is worship by its very posture of directedness, even when the content is protest. Psalm 88 ends without resolution: &ldquo;darkness is my closest friend.&rdquo; The psalm does not tidily resolve; it just stays in the room with God. This is a more honest theology of worship than any that requires positive feeling as a prerequisite. The lament psalm teaches that the act of turning toward God with grief, confusion, or complaint is worship &mdash; the posture of one who believes there is a God worth arguing with.",
  },
  {
    title: "What Makes Worship False — Isaiah 29:13",
    body: "&ldquo;This people draws near with their mouth and honors me with their lips, while their hearts are far from me, and their fear of me is a commandment taught by men&rdquo; (Isaiah 29:13). Jesus quotes this text in Matthew 15:8-9 when confronting the Pharisees&rsquo; tradition-keeping, applying it to worship that performs the external form without the internal reality. The text identifies two distinct pathologies of false worship. The first is the separation of the mouth from the heart &mdash; the saying of words of praise that the inner life does not correspond to. This is a danger for any regular worshiper: the longer one has been in church, the more automated the responses can become, and the more possible it is to say &ldquo;holy, holy, holy&rdquo; without experiencing any sense of holiness at all. The second pathology is tradition-idolatry &mdash; the elevation of human custom to divine requirement. What was once a means of worship becomes an object of worship; the form replaces the reality it was meant to mediate. Isaiah&rsquo;s corrective is not a call to more spontaneous or emotional worship but to the alignment of the inner life with the outer act &mdash; which requires the ongoing work of the Spirit in the human heart.",
  },
];

const practices = [
  {
    name: "Daily Offering",
    body: "Begin each day with a brief act of conscious offering, based on Romans 12:1. Before leaving the bed &mdash; before checking the phone, before making coffee &mdash; pray something like: &ldquo;Father, I present this body and this day to you. Everything that happens in the next sixteen hours is latreia &mdash; offered to you. Let the ordinary be sacred.&rdquo; The practice does not require a long prayer; its power is in the intention it sets. What it does, over time, is erode the sacred/secular divide that otherwise governs daily life by default. The commute, the meeting, the difficult conversation, the meal made for an indifferent family &mdash; all of it was consciously placed in God&rsquo;s hands at the morning offering. Brother Lawrence called this &ldquo;practicing the presence of God,&rdquo; and he discovered it is more about repeated intention than sustained feeling.",
  },
  {
    name: "Corporate Worship as Covenant Assembly",
    body: "Attend corporate worship with a different set of questions than whether you enjoyed it or got something from it. Ask instead: Did I show up as part of the covenantal assembly? Did I sing my part of the congregation&rsquo;s offering? Did I contribute my voice to the declaration of God&rsquo;s glory? Did I receive the word as from Christ speaking? This reframes corporate worship from a service rendered to you into an act you participate in. Try arriving five minutes early to pray for the gathering. Try lingering afterward to speak to someone for whom the service may have been hard. The gathered church is not an audience but a body, and your role in it is participatory, not passive. James K.A. Smith suggests asking after each Sunday service: whose soul was I attending to during that hour?",
  },
  {
    name: "Lament Practice",
    body: "Once a month, intentionally pray a lament psalm &mdash; Psalm 22, 44, 77, or 88 &mdash; as your own prayer, inserting your actual situation. If life is going well, pray it on behalf of someone you know who is suffering. This practice trains the reflex of turning toward God with pain rather than away from him, and it breaks the assumption that worship requires positive feeling. Permit yourself to say to God, in the words of Psalm 22:1, &ldquo;My God, my God, why have you forsaken me?&rdquo; &mdash; and notice that Jesus used exactly these words from the cross. The lament is not a failure of faith but its starkest form: the conviction that there is a God worth arguing with, one who is present even in the silence, one who will ultimately answer.",
  },
  {
    name: "Beauty as Preparation for Worship",
    body: "Before a significant act of corporate or private worship &mdash; before Sunday morning, before a time of extended prayer &mdash; expose yourself to something beautiful: a piece of music, a poem, a passage of great prose, a view. The purpose is not to manufacture emotion but to awaken the aesthetic faculty that worship requires. A.W. Tozer observed that the person who cannot see beauty in creation will struggle to see beauty in God. The practice of noticing and receiving beauty &mdash; not consuming it compulsively but attending to it slowly &mdash; trains the sensibility for the encounter with the Holy. It also cultivates gratitude, which is the emotional atmosphere in which worship most naturally grows. The person who has genuinely attended to one beautiful thing in the last hour is better prepared to offer genuine worship than the one who has scrolled for the same hour.",
  },
  {
    name: "The Sacramental Meal",
    body: "Approach the Lord&rsquo;s Table with deliberate preparation rather than habit. In the week before Communion, examine yourself as Paul instructs in 1 Corinthians 11:28 &mdash; not to disqualify yourself but to arrive honestly. Confess what needs confessing, reconcile what can be reconciled, and come with empty hands. At the table itself, practice the ancient act of recollection: who gave this body, for what, and for whom? Receive the bread and cup slowly, resisting the reflex to look around or let the mind wander. The table is the enacted sermon: the entire gospel in two physical objects, given and received. N.T. Wright describes it as the meal of the new creation &mdash; a foretaste, each time, of the banquet toward which all of history is moving. The worshiper who receives the Eucharist with full attention once a month is more formed by it than one who receives it out of ritual habit weekly.",
  },
  {
    name: "Sabbath as Worship",
    body: "Practice a weekly Sabbath not as a rule to keep but as an act of worship. On one day each week, stop the work that makes you feel productive and necessary, and simply receive: receive rest, receive creation, receive the people God has given you, receive what you have not produced. The theological logic of Sabbath is the declaration that you are not the sustainer of the world &mdash; God is. Stopping work is an act of faith in the one who does not stop working. It is also an act of defiance against the consumerist economy that defines human beings by their productivity. Begin the Sabbath with a brief act of dedication: &ldquo;Lord, this day is yours. I offer you my rest.&rdquo; The God who rested on the seventh day (Genesis 2:2) is not asking you to accomplish something on your Sabbath but to join him in the rest that preceded all creation&rsquo;s groaning and anticipates its redemption.",
  },
];

const voices = [
  {
    name: "A.W. Tozer",
    years: "1897–1963",
    role: "The Pursuit of God",
    body: "Tozer is the twentieth century&rsquo;s most searching Protestant voice on the subject of worship. Largely self-educated, pastor of Avenue Road Alliance Church in Toronto for many years, he wrote with a prophetic directness that had little interest in academic nuance and none at all in institutional approval. His central argument in The Pursuit of God &mdash; and in his later The Knowledge of the Holy &mdash; is that the church has largely substituted activity about God for encounter with God, and that this substitution produces a Christianity that is busy, morally earnest, and spiritually hollow. His corrective was not a new technique but an ancient one: the direct pursuit of God himself, through Scripture, prayer, and the deliberate cultivation of the awareness of the divine presence in ordinary moments. Tozer called this &ldquo;the practice of the presence of God&rdquo; &mdash; a phrase he borrowed from Brother Lawrence &mdash; and he believed it was available to every Christian, not only to mystics or contemplatives. His own preaching and writing bear the marks of a man who had spent long hours in that presence.",
    quote: "Worship is pure or base as the worshiper entertains high or low thoughts of God.",
  },
  {
    name: "John Piper",
    years: "1946–",
    role: "Desiring God — Christian hedonism and worship",
    body: "Piper&rsquo;s theology of worship begins with an apparent paradox that he resolves with a syllogism: God is most glorified in us when we are most satisfied in him; the chief end of man is to glorify God; therefore the chief end of man is to enjoy God forever. This reframe &mdash; what he calls Christian hedonism &mdash; has the effect of linking the pursuit of joy directly to the act of worship, rescuing both from their distortions. Worship is not joyless duty (that dishonors God by implying he is not worth enjoying); neither is it self-seeking emotionalism (that dishonors God by making him a means to our pleasure). True worship is the experience of God as supremely satisfying &mdash; which both glorifies him and fulfills us. Piper draws heavily on C.S. Lewis&rsquo;s observation that our Lord is pleased with our enjoyment of him in the same way a parent is pleased to see a child genuinely enjoying a gift. Desiring God &mdash; and the decades of preaching and writing it represents &mdash; has shaped an entire generation of evangelicals to think of worship as the highest expression of joy rather than its suppression.",
    quote: "God is most glorified in us when we are most satisfied in him.",
  },
  {
    name: "Marva Dawn",
    years: "1948–",
    role: "Reaching Out without Dumbing Down",
    body: "Dawn&rsquo;s Reaching Out without Dumbing Down is the most rigorous theological critique of contemporary evangelical worship written in the twentieth century. A Lutheran theologian and church musician, Dawn argues that the pressure to make worship &ldquo;accessible&rdquo; and market-responsive has systematically diminished the content, depth, and formative power of the gathered service. Her concern is not aesthetics but formation: the kind of worship a congregation practices shapes the kind of people it produces, and entertainment-oriented worship produces consumers rather than disciples. Dawn makes extensive use of Neil Postman&rsquo;s media analysis to show that the medium of contemporary worship &mdash; its use of screens, production values, and entertainment conventions &mdash; is not neutral but carries an implicit theology of its own. Her alternative is not liturgical nostalgia but liturgical seriousness: the recovery of worship forms that are large enough to carry the weight of the gospel and demanding enough to form character rather than merely produce feeling.",
    quote: "The primary purpose of worship is not evangelism, fellowship, or spiritual growth, but the adoration of God.",
  },
  {
    name: "N.T. Wright",
    years: "1948–",
    role: "Biblical theologian and bishop",
    body: "Wright&rsquo;s contribution to the theology of worship is largely embedded in his broader biblical theology of new creation. For Wright, Christian worship is the forward edge of the new creation breaking into the present order: when the church gathers to sing, pray, hear Scripture, and eat at the table, it is enacting the reality that the world does not yet see but into which all of history is moving. This gives corporate worship a cosmic rather than merely personal significance. The congregation is not gathered for its own benefit or even primarily for God&rsquo;s benefit in some narrow sense; it is the outpost of the new creation in the midst of the old, the embassy of the kingdom in enemy territory. Wright also emphasizes the resurrection as the center of Christian worship: the gathered church worships not a dead teacher but the living Lord who has already inaugurated the new world, and the forms of worship that fail to proclaim and celebrate the resurrection have lost their proper center.",
    quote: "Worship is the central characteristic of the heavenly life; and it is the central characteristic of the life of the church on earth.",
  },
  {
    name: "Robert Webber",
    years: "1933–2007",
    role: "Ancient-Future worship movement",
    body: "Webber spent the latter decades of his life recovering the ancient patterns of Christian worship for contemporary congregations &mdash; not as antiquarian archaeology but as resource for renewal. His Ancient-Future series argues that the church in every generation must draw on the wisdom of the whole tradition rather than reinventing worship from scratch in each generation, and that the ancient four-fold pattern of gathering, word, table, and sending provides a theological grammar that transcends stylistic preference. Webber was himself an unlikely ecumenist &mdash; an evangelical who discovered the riches of the early church and the broader liturgical tradition while teaching at Wheaton College &mdash; and his work opened doors for many evangelicals to engage patristic worship theology without abandoning their doctrinal commitments. His most personal and perhaps most beautiful book, Ancient-Future Faith, was written partly as a response to his own diagnosis with a fatal illness, and it carries the urgency of a man thinking carefully about what will last.",
    quote: "The challenge of the twenty-first century is not to find new forms of worship but to recover the ancient content that will sustain the church in every culture.",
  },
  {
    name: "James K.A. Smith",
    years: "1970–",
    role: "You Are What You Love",
    body: "Smith&rsquo;s cultural philosophy &mdash; developed in his Cultural Liturgies series and distilled in the more accessible You Are What You Love &mdash; offers perhaps the most rigorous theoretical account of why corporate worship practices matter beyond the merely spiritual. Drawing on Augustine&rsquo;s account of desire (we are ordered toward God by our loves, not primarily by our beliefs), and on phenomenological philosophy, Smith argues that human beings are formed at the pre-cognitive level by the practices they are embedded in. The liturgies of consumer culture &mdash; the mall, the stadium, the scroll &mdash; are training our desires in particular directions, mostly away from God, without our conscious participation. The liturgies of the gathered church &mdash; song, prayer, sermon, table, sending &mdash; are capable of reordering desire toward God, but only if they are taken seriously as formative practices rather than experienced as consumer goods. Smith&rsquo;s work gives theological educators, pastors, and worshipers a vocabulary for understanding why the how of worship matters as much as the what.",
    quote: "You are what you love, not what you believe. And you love whatever you worship — so the question is whether you are conscious of what you are being formed to love.",
  },
];

const scriptures = [
  {
    ref: "John 4:24",
    text: "God is spirit, and his worshipers must worship in the Spirit and in truth.",
    note: "The must is significant &mdash; not optional or aspirational but constitutive. Worship that is not enabled by the Spirit and anchored in truth is not worship in the full sense, whatever its enthusiasm.",
  },
  {
    ref: "Romans 12:1",
    text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.",
    note: "Latreia &mdash; the same word used for temple service &mdash; is applied to the offered body. The entire life, in its physical particularity, is the worship God most desires.",
  },
  {
    ref: "Psalm 96:9",
    text: "Worship the Lord in the splendor of holiness; tremble before him, all the earth!",
    note: "The splendor of holiness is both God&rsquo;s attribute and the worshiper&rsquo;s dress. To approach the holy God is to be confronted with what we are not &mdash; and the tremble is the appropriate response of a creature in the presence of the Creator.",
  },
  {
    ref: "Hebrews 12:28-29",
    text: "Therefore let us be grateful for receiving a kingdom that cannot be shaken, and thus let us offer to God acceptable worship, with reverence and awe, for our God is a consuming fire.",
    note: "Acceptable worship is paired with reverence and awe &mdash; not because God is to be feared in a way that drives away, but because the greatness of what we are approaching demands a corresponding quality of attention.",
  },
  {
    ref: "Isaiah 29:13",
    text: "This people draws near with their mouth and honors me with their lips, while their hearts are far from me, and their fear of me is a commandment taught by men.",
    note: "The diagnostic text for false worship across every generation. The mouth and heart can be separated; God reads the heart. The cure is not louder lips but aligned loves &mdash; which is the ongoing work of the Spirit.",
  },
  {
    ref: "Psalm 22:1-2",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? My God, I cry out by day, but you do not answer, by night, but I find no rest.",
    note: "The opening of the great lament psalm &mdash; and the words Jesus cried from the cross. Lament is worship. The cry addressed to God is the prayer of one who still believes there is a God to cry to.",
  },
];

const videos = [
  { videoId: "bXBBJ5g5PDk", title: "What Is Worship? — A.W. Tozer and the Pursuit of God" },
  { videoId: "y-2oSxCUMoA", title: "John Piper on Worship and Christian Hedonism" },
  { videoId: "7Fl3r_C0tMA", title: "The Four Movements of Worship — Gathering, Word, Table, Sending" },
  { videoId: "uq-zQMq6UGI", title: "James K.A. Smith on Liturgy and Desire" },
  { videoId: "k6I4lD_jEkc", title: "Romans 12:1 — The Whole Life as a Living Sacrifice" },
  { videoId: "Wl1JJZ4BQCY", title: "Lament as Worship — The Psalms of Complaint" },
];

const relatedPages = [
  { href: "/christian-prayer", label: "Christian Prayer" },
  { href: "/christian-sabbath", label: "Christian Sabbath" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/fruit-of-the-spirit", label: "Fruit of the Spirit" },
  { href: "/christian-confession", label: "Christian Confession" },
  { href: "/theology-of-beauty", label: "Theology of Beauty" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianWorshipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WSPEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [worshipMoment, setWorshipMoment] = useState("");
  const [distraction, setDistraction] = useState("");
  const [offeringMade, setOfferingMade] = useState("");

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
    if (!worshipMoment.trim()) return;
    const entry: WSPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      worshipMoment: worshipMoment.trim(),
      distraction: distraction.trim(),
      offeringMade: offeringMade.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setWorshipMoment("");
    setDistraction("");
    setOfferingMade("");
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
            background: AMBER + "22",
            color: AMBER,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Spiritual Practice
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          In Spirit and Truth: Christian Worship
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Worship is not a Sunday event but a total orientation &mdash; the conscious offering of the self, the body,
          the day, to the God who made them. Paul calls it latreia: the same word used for temple service, applied
          now to the entire living creature. The Father seeks worshipers who will come to him in Spirit and in truth,
          and that seeking is itself the most astonishing fact about the universe.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of gathered and whole-life worship, the question of what makes worship
          genuine or false, the voices who have thought most carefully about it, and a journal for recording your
          own encounter with the God who is worth every offering.
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
                borderColor: tab === t.id ? AMBER : BORDER,
                background: tab === t.id ? AMBER + "22" : "transparent",
                color: tab === t.id ? AMBER : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              A Theology of Worship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on worship &mdash; from Christ&rsquo;s conversation at
              the well to Isaiah&rsquo;s indictment of the lips-only worshiper, and the full range between.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                From John 4 to Romans 12 to Revelation 7, the arc of Scripture&rsquo;s worship theology bends toward
                totality: God does not want a portion of the day, a sector of the self, or a genre of activity. He
                wants the whole &mdash; offered freely, received graciously, transformed by the Spirit&rsquo;s mediation
                into the sacrifice that is &ldquo;holy and acceptable to God.&rdquo; The worshiper who offers the
                spreadsheet, the difficult conversation, and the Sunday service with equal intentionality is closer to
                Paul&rsquo;s vision than the one whose devotion is confined to the hour between the call to worship
                and the benediction.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Practices of Worship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six concrete practices for shaping a worshiping life &mdash; daily, weekly, sacramental, and in
              the full range of human experience including lament.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: AMBER + "22",
                  color: AMBER,
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
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Voices on Worship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six theologians and practitioners who have thought most carefully about what worship is, what it
              requires, and what it forms in those who practice it seriously.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${AMBER}`,
                  background: AMBER + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Scripture on Worship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts across the canon &mdash; command, definition, warning, lament, and invitation &mdash;
              each paired with a brief reflection for slow reading.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${AMBER}`,
                  paddingLeft: "1rem",
                }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}
                  dangerouslySetInnerHTML={{ __html: s.note }}
                />
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Suggested practice:</strong> take Romans 12:1 as a morning prayer for
                one month. Each morning before leaving bed, pray it back to God in the first person: &ldquo;Father,
                I present this body to you today as a living sacrifice.&rdquo; At the end of the month, note what has
                changed in how you experience the ordinary hours.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Worship Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log a moment of genuine worship &mdash; corporate or private &mdash; what distracted you from it, and an
              offering you consciously made to God. Entries are saved only in your browser. This is the record of a
              life oriented toward the One who is worth every offering.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="wsp-moment" style={labelStyle}>A moment of genuine worship</label>
                <textarea
                  id="wsp-moment"
                  value={worshipMoment}
                  onChange={e => setWorshipMoment(e.target.value)}
                  rows={3}
                  placeholder="Corporate or private, planned or unexpected. Describe what happened and what made it genuine rather than habitual."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>
                  Genuine worship is not always marked by emotion. It may be quiet, still, even dry &mdash; but directed.
                </p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="wsp-distraction" style={labelStyle}>What distracted you from it</label>
                <textarea
                  id="wsp-distraction"
                  value={distraction}
                  onChange={e => setDistraction(e.target.value)}
                  rows={2}
                  placeholder="e.g. My phone; an unresolved conflict; boredom with the familiar; self-consciousness; anxiety about the week ahead..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Naming distractions honestly is the first step to addressing them. Nothing here is too small.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="wsp-offering" style={labelStyle}>An offering you consciously made to God</label>
                <textarea
                  id="wsp-offering"
                  value={offeringMade}
                  onChange={e => setOfferingMade(e.target.value)}
                  rows={2}
                  placeholder="e.g. A task done as unto the Lord; a surrender of an anxious outcome; a prayer prayed without expecting to feel it; a day given deliberately..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Romans 12:1 — the body presented. What did you give that cost you something?</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!worshipMoment.trim()}
                style={{
                  background: worshipMoment.trim() ? AMBER : BORDER,
                  color: worshipMoment.trim() ? "#07070F" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: worshipMoment.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. When did you last genuinely encounter the God who is seeking worshipers?
                    Begin there.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          aria-label="Delete entry"
                          style={{
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
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Worship Moment
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.worshipMoment}</p>
                      </div>
                      {entry.distraction && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What Distracted
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.distraction}</p>
                        </div>
                      )}
                      {entry.offeringMade && (
                        <div>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Offering Made
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.offeringMade}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the theology and practice of Christian worship &mdash; from the pursuit of God himself to
              the liturgical shape of the gathered assembly to the lament psalms that expand what we think worship can be.
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
            &ldquo;The Father is seeking such people to worship him&rdquo; (John 4:23). The seeking is God&rsquo;s
            initiative, not ours. We do not have to convince him to receive our worship; he is already moving toward
            those who will come to him honestly, in the Spirit, with their whole lives as the offering. That is an
            invitation that changes everything about what an ordinary Tuesday can be.
          </p>
        </div>
      </main>
    </div>
  );
}
