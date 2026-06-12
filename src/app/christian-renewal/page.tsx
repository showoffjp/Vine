"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEAL = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface RNWEntry {
  id: string;
  date: string;
  drainSource: string;
  renewalMeans: string;
  expectation: string;
}

const TABS = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const theologyCards = [
  {
    title: "2 Corinthians 4:16 — Outward Wasting, Inward Renewal",
    body: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. Paul writes this from inside suffering &mdash; the preceding verses describe being afflicted, perplexed, persecuted, struck down. The claim is not that the outward decay doesn&rsquo;t hurt but that something else is simultaneously happening beneath the surface. The word translated &ldquo;renewed&rdquo; (anakainoo) is present passive &mdash; ongoing, not completed; received, not achieved. Inward renewal is not the product of spiritual effort but of yielding to the one who is doing the renewing. The wasting away and the renewal are happening in parallel; the Christian life is one in which both are simultaneously true, and the question is which we attend to. Paul attends to the renewal because he knows who is doing it: the same God who raised the Lord Jesus will raise us also. The physical decay Paul describes is real and painful. Yet something deeper is simultaneously happening: the inner person is being renewed, rebuilt, and refreshed by the Spirit in the very midst of the suffering that is wearing the outside down.",
  },
  {
    title: "Romans 12:2 — Metanoia as Ongoing Transformation, Not One-Time Event",
    body: "Do not be conformed to this world, but be transformed by the renewal of your mind (Romans 12:2). The Greek word is metamorphoo &mdash; the same root as metamorphosis, the transformation of a caterpillar into a butterfly, and the same word used for the Transfiguration. But the verb tense is present passive imperative: keep being transformed, continuously, by a process you receive rather than accomplish. Metanoia (&ldquo;repentance&rdquo;) is similarly not a moment but a direction &mdash; a continuous turning from self and world toward God. The renewal of the mind is not a single crisis experience but a long, ongoing reorientation of how we see, how we evaluate, what we desire. This is why Dallas Willard called spiritual formation &ldquo;the renovation of the heart&rdquo; &mdash; it is less like a single dramatic event and more like the slow work of a craftsman reshaping wood. The contrast Paul draws is stark: conformation to the world&rsquo;s pattern (aion, the spirit of the age) versus transformation through the Spirit&rsquo;s renewing work. Every day, believers are being shaped by one or the other.",
  },
  {
    title: "Corporate Revival vs. Individual Renewal — Two Distinct but Related Works",
    body: "Christian history distinguishes corporate revival (a sovereign visitation of the Spirit upon a community, congregation, or region) from individual renewal (the personal return to vitality from spiritual depletion or dryness). Revival is described in Acts 2, in the Great Awakenings, in the Welsh Revival of 1904 &mdash; it comes suddenly, is not primarily the result of human effort, and transforms entire communities. Individual renewal is a quieter and more continuous work: the Christian who has grown cold returning to first love, the elder who has drifted back to spiritual attentiveness, the parent who has been so consumed by busyness that the interior life has emptied. Both are genuine works of the Holy Spirit; neither should be confused with the other. Expecting individual renewal to produce corporate revival may lead to performance; expecting corporate revival to substitute for individual renewal may lead to passivity. The person seeking renewal must begin with the individual work: honest inventory, returning to the means of grace, and welcoming the Spirit&rsquo;s quiet renewing work in the ordinary rhythms of the daily life.",
  },
  {
    title: "Emotional Refreshment vs. Genuine Spiritual Renewal",
    body: "Not every experience of relief, emotional catharsis, or spiritual stimulation is genuine renewal. The Christian tradition has long distinguished between the refreshment of religious emotion &mdash; the good feeling of a worship service, a retreat high, a conference surge &mdash; and the deep transformation of the inner person that persists through ordinary Tuesdays. Jonathan Edwards spent much of his ministry discerning the difference: genuine revival, he argued, produced lasting fruit of character, increased love for God and neighbor, and greater humility &mdash; not simply heightened emotion. The test of renewal is not how it felt but what it changed. Genuine renewal produces new desires, new patterns of sin and obedience, new depth in prayer, new love for Scripture &mdash; not just a feeling that fades by Wednesday. The person who has experienced genuine renewal looks different six months later; the person who has only experienced emotional refreshment has typically returned to baseline. This is not to devalue emotional experience in faith &mdash; it is to refuse to reduce renewal to it.",
  },
  {
    title: "Hosea 6:3 — Pressing On to Know the Lord in Seasons of Renewal",
    body: "Let us know; let us press on to know the Lord; his going out is sure as the dawn; he will come to us as the showers, as the spring rains that water the earth (Hosea 6:3). The imagery is seasonal: rain does not fall every day. Spiritual renewal, like seasonal rain, is not continuous but periodic &mdash; and the posture of the community is pressing on to know the Lord in the dry season, trusting that the rain will come. The call to press on (radaph, to pursue actively) suggests that renewal is not passive waiting but active seeking &mdash; creating conditions of attentiveness, repentance, and expectation in which God meets his people. The certainty of his coming (&ldquo;sure as the dawn&rdquo;) is the ground of the seeking, not the reward of sufficient effort. God is not waiting to see whether we press hard enough before he comes; he is coming, as certainly as the dawn, and our pressing on is simply the posture of readiness for what he will do. The dry season is not a punishment but a preparation; the waiting is not empty but formative.",
  },
  {
    title: "The Church in Ephesus — Leaving First Love and Returning (Revelation 2:1-7)",
    body: "But I have this against you, that you have abandoned the love you had at first. Remember therefore from where you have fallen; repent, and do the works you did at first (Revelation 2:4-5). The church at Ephesus is theologically orthodox, morally disciplined, and culturally persevering &mdash; and Jesus criticizes it. The absence of first love is not a minor deficiency but a fundamental departure from what the church is. The prescription is striking in its simplicity: remember, repent, return. Not a program of renewal but the pastoral path of honest memory (&ldquo;from where you have fallen&rdquo;), genuine repentance, and practical action (&ldquo;do the works you did at first&rdquo;). Renewal begins with honesty about the distance between where you are and where you once were &mdash; not nostalgic sentimentality but clear-eyed assessment that something essential has been lost. The warning is severe: the lampstand will be removed if there is no return. Jesus does not treat the loss of first love as a manageable spiritual issue; he treats it as an existential threat to the church&rsquo;s identity and mission. Return to first love is not optional but urgent.",
  },
];

const practiceCards = [
  {
    title: "The Means of Grace Diagnostic — Which Means Are Neglected?",
    body: "The classical means of grace are the channels through which God ordinarily works to renew and sustain the spiritual life: Scripture reading, prayer, the Lord&rsquo;s Supper, corporate worship, fellowship, and service. Most Christians in spiritual depletion have quietly stopped practicing several of these without fully registering the absence. A means of grace diagnostic asks a simple question for each: when did I last engage this? What was my most recent experience of Scripture that felt alive? When did I last receive communion with genuine attentiveness? When did I last pray with another person? The goal is not guilt but honest inventory &mdash; identifying which means have been neglected and beginning their quiet recovery. Renewal rarely arrives all at once; it comes through the slow reengagement of the ordinary channels God has provided. The diagnostic itself can be a form of prayer: Lord, show me where I have drifted. Show me what has been quietly abandoned. Give me the honesty to see it and the grace to return to it. Begin with one neglected means of grace, not all of them simultaneously. The soul that is already depleted cannot sustain a comprehensive renovation program; it can sustain one small, faithful return.",
  },
  {
    title: "Sabbath as Renewal Rhythm — The Weekly Reset",
    body: "Remember the Sabbath day, to keep it holy (Exodus 20:8). The fourth commandment is the most explicit command in Scripture about rhythm &mdash; the built-in mechanism for regular renewal that God wove into creation itself. Genesis records God resting on the seventh day not because he was tired but as an act of completion and delight. The Sabbath&rsquo;s logic is that humans are not machines and that the pace of production cannot be sustained indefinitely without destruction. For renewal, Sabbath is not simply a day off but a day reoriented toward God &mdash; a 24-hour period of worship, rest, play, and relationship deliberately protected from the demands of productivity. Christians who have never practiced Sabbath as a genuine weekly renewal find that its recovery alone transforms the texture of the entire week. The resistance to Sabbath is often the revealing symptom of the very depletion Sabbath is designed to address: the belief, somewhere beneath the surface, that everything depends on us and cannot survive our stopping. Sabbath is the weekly liturgical act of trusting that it can. It is also the weekly act of delight &mdash; in God, in creation, in the people around us, in the gift of existence itself.",
  },
  {
    title: "The Spiritual Retreat — A Day Away for Restoration",
    body: "Come away by yourselves to a desolate place and rest a while (Mark 6:31). Jesus regularly withdrew from the crowds to pray alone &mdash; and he extended the same invitation to his disciples. The spiritual retreat is the extended, intentional version of Sabbath: a day or more devoted entirely to silence, prayer, Scripture, and listening. The purpose of a day retreat is not primarily to accomplish specific spiritual goals but to create enough spaciousness that God can address what has been crowded out by noise and busyness. Ruth Haley Barton describes the soul as sediment stirred up by activity that only settles when the activity stops &mdash; the retreat provides the stillness in which the sediment settles. Even a half-day of solitude and silence, practiced three or four times a year, profoundly reshapes the spiritual life. A simple structure for a day retreat: arrive and spend the first hour in complete silence; read one passage of Scripture very slowly, multiple times; pray honestly and without agenda for an extended period; rest (physical rest is not unspiritual on a retreat &mdash; it is often the most honest form of trust); journal what you have heard; return. The retreat is not the source of renewal but the space in which the renewing Spirit can work without competition.",
  },
  {
    title: "Confession and Absolution — Clearing the Conscience",
    body: "Therefore, confess your sins to one another and pray for one another, that you may be healed (James 5:16). One of the most common sources of spiritual depletion is the weight of unconfessed sin &mdash; not the dramatic failures but the accumulation of small compromises, resentments, and failures of love that quietly drain the interior life. The practice of specific, honest confession to another trusted person (a spiritual director, a pastor, or a mature friend who holds confidence) brings into the light what has been hidden and receives absolution &mdash; the spoken declaration that the sin is forgiven. Martin Luther, late in his ministry, said he would rather confess to the devil than carry unconfessed sin alone. The relief of genuine absolution is not primarily psychological but spiritual: the burden carried alone is laid at the foot of the cross before a witness. Many Christians resist auricular confession because it feels unnecessary &mdash; God knows already; why tell a person? But the shame that keeps sin hidden is often the very mechanism that sustains its power. Confession breaks the isolation that shame requires. The sin named in the light loses its grip; the sin carried in darkness tends to grow.",
  },
  {
    title: "Renewed Community — Finding or Rebuilding Spiritual Friendship",
    body: "As iron sharpens iron, so one person sharpens another (Proverbs 27:17). Spiritual renewal rarely happens in isolation. The soul that has drifted typically needs the presence of another soul who is moving toward God &mdash; not as a therapist or a coach but as a friend whose life itself is a witness to what is possible. Spiritual friendship (what Aelred of Rievaulx called amicitia spiritualis) is not accountability in the sense of mutual surveillance but shared orientation toward God, honest naming of where each is in the journey, and the encouragement of genuine companionship in faith. Building or rebuilding spiritual friendship after a season of depletion may require intentional vulnerability &mdash; admitting to another person that you have drifted, that you need the nearness of a friend who is still pressing on. The New Testament&rsquo;s &ldquo;one another&rdquo; commands &mdash; encourage one another, bear one another&rsquo;s burdens, confess to one another, pray for one another &mdash; are all practices of spiritual friendship. They cannot be fulfilled by the isolated Christian, however sincere, because they require the presence of another person. Renewal through community begins with the willingness to be known.",
  },
  {
    title: "The Gratitude Reset — Breaking Cynicism Through Thankfulness",
    body: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God (Philippians 4:6). Cynicism and bitterness are among the most effective enemies of spiritual renewal because they shut down the capacity for gratitude and close the self against new grace. The gratitude reset is a deliberate, sustained practice of naming what is good &mdash; not as positive thinking but as theological resistance against the lie that God has withheld his goodness. Ann Voskamp&rsquo;s discipline of naming 1,000 gifts is one modern expression of a practice as old as the Psalms: thanking God specifically and repeatedly for concrete acts of grace already received. Gratitude does not manufacture renewal but clears the ground in which renewal can take root, because it reorients the self from what is absent to what has been given. The Psalmists practice gratitude in the midst of lament &mdash; they do not wait to feel grateful before giving thanks. They choose to enumerate the goodness of God even in the hard season, and the enumeration itself becomes a form of resistance to despair. &ldquo;Bless the Lord, O my soul, and forget not all his benefits&rdquo; (Psalm 103:2) is not a command to pretend everything is fine but to refuse to forget what is true about God.",
  },
];

const voiceCards = [
  {
    name: "Jonathan Edwards",
    work: "A Faithful Narrative of the Surprising Work of God (1737)",
    quote: "The surest evidence of genuine revival is a lasting impression of God&rsquo;s greatness on the soul, issuing in renewed love, repentance, and holy living &mdash; not merely emotional excitement or temporary religious fervor.",
    bio: "Jonathan Edwards (1703-1758), America&rsquo;s greatest theologian, witnessed firsthand the revivals of the First Great Awakening in Northampton, Massachusetts and wrote extensively on the discernment of genuine spiritual renewal. A Faithful Narrative (1737) is his account of a personal and communal awakening in his congregation. His Religious Affections (1746) is the definitive theological treatment of how to distinguish genuine renewal from counterfeits: true renewal produces humility, love for Scripture, love for neighbor, and sustained change of character &mdash; not merely emotional excitement or religious fervor. Edwards&rsquo;s framework remains indispensable for anyone trying to discern genuine from spurious spiritual experience. His own congregation experienced seasons of remarkable renewal and then devastating spiritual collapse &mdash; which drove him to think even more carefully about what genuine revival actually looks like, and what distinguishes it from mere religious excitement.",
  },
  {
    name: "Charles Finney",
    work: "Revivals of Religion (1835)",
    quote: "A revival is not a miracle. It is the result of the right use of appropriate means. The means which God has enjoined for the production of a revival doubtless have a natural tendency to produce a revival.",
    bio: "Charles Grandison Finney (1792-1875) was a Presbyterian and Congregationalist revivalist who conducted large-scale revival meetings in the Second Great Awakening. His Lectures on Revivals of Religion (1835) argued, controversially, that corporate revival could be deliberately cultivated through the right application of means: preaching, prayer, calling for decision, social conditions. His framework represents one pole of the debate about whether renewal is wholly sovereign (Edwards) or partly human-cultivated (Finney). However one assesses the debate, Finney&rsquo;s ministry produced enormous social fruit: his converts were among the leading abolitionists of the 19th century. His writings are essential reading for anyone thinking seriously about corporate renewal. His insistence that earnest, expectant, specific prayer for renewal is both commanded and effective remains bracing for a church that often prays vaguely about awakening.",
  },
  {
    name: "Os Guinness",
    work: "God in the Dark (Doubt, 1976)",
    quote: "Faith is not believing without evidence. Faith is trusting in what you have good reason to believe, even when circumstances press against it. Doubt is not the opposite of faith; unbelief is. Doubt is often the doorway through which faith matures.",
    bio: "Os Guinness (b. 1941) is a Christian author and social critic whose book God in the Dark (published in the US as Doubt) addresses the crisis of faith that often precedes personal renewal. Guinness distinguishes between twelve types of doubt &mdash; from intellectual doubt to emotional doubt to volitional doubt &mdash; and argues that each requires a different pastoral response. His fundamental insight is that doubt is not the enemy of faith but often its crucible: the faith that has wrestled with genuine doubt and emerged is deeper and more resilient than the faith that has never been tested. For the person experiencing spiritual depletion through crisis of belief, Guinness provides both intellectual rigor and pastoral warmth. He refuses both the dismissiveness of those who treat doubt as a moral failure and the therapeutic minimizing of those who treat it as merely a feeling to be managed.",
  },
  {
    name: "Paul Tripp",
    work: "New Morning Mercies (2014)",
    quote: "Your life is not defined by your past failures. It is not defined by your future fears. You are defined by the grace of God that met you this morning and will meet you again tomorrow. That is renewal: not your effort, but his mercy.",
    bio: "Paul David Tripp (b. 1950) is a pastor, author, and counselor whose daily devotional New Morning Mercies applies the theology of Lamentations 3 &mdash; &ldquo;his mercies are new every morning&rdquo; &mdash; to the practicalities of everyday spiritual life. Tripp&rsquo;s central pastoral concern is the person who is weary: worn down by sustained ministry, by the failure to see promised change, by the gap between what they believed would happen and what actually has. His great contribution is the emphasis on daily renewal &mdash; not the big event of revival but the quiet daily mercy that meets the believer before they have had to perform or achieve. His writing is theologically rich and pastorally direct, combining deep awareness of human failure with equally deep awareness of the inexhaustible grace that meets it. New Morning Mercies has been a lifeline for many Christians in seasons of prolonged depletion.",
  },
  {
    name: "Martyn Lloyd-Jones",
    work: "Revival (1986)",
    quote: "Revival is a people being overwhelmed by God. It is as if God suddenly draws near, as if the heavens are opened. People are smitten with a sense of God&rsquo;s holiness and their own unholiness &mdash; and then the joy that follows is inexpressible.",
    bio: "David Martyn Lloyd-Jones (1899-1981) was a Welsh Calvinist preacher widely regarded as the greatest English-speaking preacher of the 20th century. His book Revival, compiled from sermons preached in Westminster Chapel, London, is the most theologically serious treatment of corporate revival in modern evangelical literature. Lloyd-Jones insisted that genuine revival is a sovereign act of God &mdash; not the product of technique or planning &mdash; and that it is characterized primarily by an overwhelming sense of God&rsquo;s presence and holiness, which produces deep conviction of sin followed by profound joy. His analysis of historical revivals &mdash; the Welsh Revival, the 18th-century awakenings, the Ulster Revival of 1859 &mdash; remains unsurpassed. Lloyd-Jones&rsquo;s own ministry was marked by persistent, corporate prayer for revival that he never saw in his lifetime &mdash; a fact that gives his writing a quality of longing that is itself instructive.",
  },
  {
    name: "Ruth Haley Barton",
    work: "Strengthening the Soul of Your Leadership (2008)",
    quote: "You cannot give what you do not have. The greatest gift you can give to those you lead is your own transforming self &mdash; a self that has been with God, that has been honest before God, shaped by the disciplines that keep you open to the Spirit.",
    bio: "Ruth Haley Barton (b. 1956) is a spiritual director, retreat leader, and founder of the Transforming Center. Strengthening the Soul of Your Leadership addresses the peculiar form of spiritual depletion that affects those in ministry and Christian leadership: the exhaustion that comes from giving what one does not have, from leading others toward a God one has become too busy to be with. Barton&rsquo;s work is grounded in the Ignatian and contemplative traditions and emphasizes the practices of solitude, silence, and sabbath as the conditions for sustainable leadership and genuine renewal. Her writing has been deeply formative for a generation of pastors and Christian leaders who found in it permission to attend to their own souls &mdash; not as self-indulgence but as the prerequisite for genuine service.",
  },
];

const scriptureCards = [
  {
    ref: "2 Corinthians 4:16",
    text: "So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.",
    note: "The central text of this guide. Paul&rsquo;s &ldquo;we do not lose heart&rdquo; is not optimism but theology &mdash; grounded in the resurrection (&ldquo;he who raised the Lord Jesus will raise us also,&rdquo; v.14) and in the ongoing daily renewal of the inner person that persists even when the outer person deteriorates. The present passive (&ldquo;is being renewed&rdquo;) emphasizes that this is something received, not achieved.",
  },
  {
    ref: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    note: "The renewal of the mind is not primarily intellectual (though it includes the intellect) but dispositional: it is the reorientation of the deepest evaluative center of the person &mdash; what one loves, what one fears, what one trusts. This renewal is what enables the moral discernment described in the second half of the verse. The mind renewed by the Spirit sees what is good in ways the mind conformed to the world cannot.",
  },
  {
    ref: "Psalm 23:3",
    text: "He restores my soul. He leads me in paths of righteousness for his name&rsquo;s sake.",
    note: "The Hebrew word for &ldquo;restores&rdquo; (shub) is the same word used for repentance and return throughout the Old Testament. To restore the soul is to turn it back toward the right orientation &mdash; back toward God, back toward what it was created for. The Shepherd&rsquo;s restoration is not passive waiting but active leading into right paths. Restoration and right living are inseparable: the renewed soul moves in the direction the Good Shepherd is going.",
  },
  {
    ref: "Isaiah 40:31",
    text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    note: "Isaiah 40 addresses a community in exile &mdash; profoundly weary, without visible reason for hope. The word &ldquo;wait&rdquo; (qavah) means to bind or to twist together, as strands of a rope are wound together. Waiting on the Lord is not passive resignation but active, hope-laden attentiveness. The renewal of strength is promised not to those who have tried harder but to those who have waited well. Isaiah&rsquo;s sequence &mdash; soaring, running, walking &mdash; ends with walking, the humblest and most ordinary movement. The renewing of strength sustains not just the mountain-top experiences but the long ordinary days.",
  },
  {
    ref: "Revelation 2:4-5",
    text: "But I have this against you, that you have abandoned the love you had at first. Remember therefore from where you have fallen; repent, and do the works you did at first. If not, I will come to you and remove your lampstand from its place, unless you repent.",
    note: "The path of renewal according to Jesus is threefold: remember (honest recollection of what has been lost), repent (genuine turning), and return to the first works. The warning of the removed lampstand underscores that the loss of first love is not a minor spiritual inconvenience but a fundamental departure from what the church exists to be. The church at Ephesus is orthodox and disciplined &mdash; and still in danger. Orthodoxy without love is not enough.",
  },
  {
    ref: "Titus 3:5",
    text: "He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewing of the Holy Spirit.",
    note: "The renewal of the Holy Spirit is here presented as the basis of salvation itself &mdash; not a subsequent experience but the very substance of new life. The same Spirit who regenerated at conversion continues the work of renewal. Spiritual renewal is not the Christian&rsquo;s effort to return to a previous spiritual state but the Spirit&rsquo;s ongoing work of making us new. The inexhaustibility of the Spirit&rsquo;s renewing work means renewal is always available, not rationed.",
  },
];

const videoList = [
  { videoId: "gXKmLXxCkMo", title: "2 Corinthians 4: Renewed Day by Day" },
  { videoId: "z-9nKBLF4IM", title: "Romans 12:2 — Transformed by Renewal" },
  { videoId: "3JCa_UvifRg", title: "Spiritual Renewal for the Weary Soul" },
  { videoId: "sMxH4CUBm0E", title: "Psalm 23: He Restores My Soul" },
  { videoId: "kgdQ_nBYpdo", title: "Return to First Love — Revelation 2" },
  { videoId: "LsVH-xOaMfk", title: "Isaiah 40: Renew Their Strength" },
];

export default function ChristianRenewalPage() {
  const [tab, setTab] = useState("theology");
  const [loaded, setLoaded] = useState(false);
  const [entries, setEntries] = useState<RNWEntry[]>([]);
  const [jDrainSource, setJDrainSource] = useState("");
  const [jRenewalMeans, setJRenewalMeans] = useState("");
  const [jExpectation, setJExpectation] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_christianrenewal_entries");
      if (raw) setEntries(JSON.parse(raw) as RNWEntry[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("vine_christianrenewal_entries", JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!jDrainSource.trim() && !jRenewalMeans.trim()) return;
    const newEntry: RNWEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      drainSource: jDrainSource,
      renewalMeans: jRenewalMeans,
      expectation: jExpectation,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setJDrainSource("");
    setJRenewalMeans("");
    setJExpectation("");
  };

  const deleteEntry = (id: string) =>
    setEntries((prev) => prev.filter((e) => e.id !== id));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    minHeight: 80,
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: "0.75rem",
    color: TEXT,
    fontSize: "0.93rem",
    lineHeight: 1.6,
    resize: "vertical",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: MUTED,
    fontSize: "0.82rem",
    marginBottom: "0.3rem",
    fontWeight: 600,
    letterSpacing: 0.5,
  };

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        minHeight: "100vh",
        color: TEXT,
      }}
    >
      <Navbar />
      <main
        id="main-content"
        style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 5rem" }}
      >
        {/* Hero */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: TEAL + "22",
              color: TEAL,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Renewal &amp; Restoration
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: "0.75rem 0 0.75rem",
          }}
        >
          Renewed Day by Day: Spiritual Renewal for the Weary
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: 660,
            margin: "0 0 0.75rem",
          }}
        >
          &ldquo;Though our outer self is wasting away, our inner self is being renewed day by day.&rdquo;
          &mdash; 2 Corinthians 4:16. This guide addresses the weary Christian: the one who has not
          abandoned faith but who finds it depleted, dry, distant. It explores the theology of inner
          renewal, the means God uses to restore the soul, and the voices who have walked through
          spiritual winter and found spring again.
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: "0.92rem",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 0 2rem",
          }}
        >
          Also see{" "}
          <Link
            href="/spiritual-dryness"
            style={{ color: TEAL, textDecoration: "underline" }}
          >
            Spiritual Dryness
          </Link>{" "}
          and{" "}
          <Link
            href="/christian-dark-night-guide"
            style={{ color: TEAL, textDecoration: "underline" }}
          >
            The Dark Night of the Soul
          </Link>
          .
        </p>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── THEOLOGY ── */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: TEAL,
                  margin: "0 0 0.35rem",
                }}
              >
                The Theology of Renewal
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six theological foundations for understanding spiritual renewal &mdash; from
                2 Corinthians 4:16 to the church at Ephesus to the seasonal rhythms of Hosea.
              </p>
            </div>
            {theologyCards.map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                  borderLeft: `4px solid ${TEAL}`,
                }}
              >
                <h3
                  style={{
                    color: TEAL,
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: MUTED,
                    lineHeight: 1.85,
                    margin: 0,
                    fontSize: "0.95rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: TEAL + "11",
                border: `1px solid ${TEAL}44`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
                marginTop: "0.25rem",
              }}
            >
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.7,
                  margin: 0,
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;The Christian life is not a static possession but a dynamic participation &mdash;
                an ongoing, active, daily receiving of the grace that is always already given. Renewal
                is not something we manufacture; it is something we open ourselves to receive.&rdquo;
                &mdash; A common thread across the entire tradition of Christian spiritual formation.
              </p>
            </div>
          </div>
        )}

        {/* ── PRACTICES ── */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: TEAL,
                  margin: "0 0 0.35rem",
                }}
              >
                Six Practices for Spiritual Renewal
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                These practices are not techniques for forcing renewal but disciplines for creating
                conditions in which God&rsquo;s renewing work can take root. They are means, not ends.
              </p>
            </div>
            {practiceCards.map((card, i) => (
              <div
                key={card.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      background: TEAL + "22",
                      color: TEAL,
                      fontWeight: 900,
                      borderRadius: "50%",
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.95rem",
                      border: `1px solid ${TEAL}44`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    style={{
                      color: TEAL,
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      margin: 0,
                      lineHeight: 1.4,
                      paddingTop: "0.35rem",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: MUTED,
                    lineHeight: 1.85,
                    margin: 0,
                    fontSize: "0.95rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: CARD,
                border: `1px solid ${TEAL}44`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: TEAL,
                  fontWeight: 700,
                  fontSize: "1rem",
                  margin: "0 0 0.75rem",
                }}
              >
                Where to Start When Everything Feels Dry
              </h3>
              <p
                style={{
                  color: MUTED,
                  lineHeight: 1.8,
                  margin: "0 0 0.75rem",
                  fontSize: "0.93rem",
                }}
              >
                If you are experiencing profound spiritual depletion, do not try to implement all six
                practices simultaneously. Start with the one that feels most accessible &mdash; often
                gratitude, because it requires no special resources or scheduled time. Name three things
                today for which you are genuinely grateful. Do it again tomorrow. The gratitude reset
                is the gentlest re-entry point into the practices of renewal.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.93rem" }}>
                Then, when you have some traction, identify the most neglected means of grace from
                the diagnostic in Practice 1 and begin its quiet recovery. Renewal does not arrive
                all at once; it accumulates through the patient, daily reengagement of the ordinary
                channels of grace.
              </p>
            </div>
          </div>
        )}

        {/* ── VOICES ── */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: TEAL,
                  margin: "0 0 0.35rem",
                }}
              >
                Guides Through Spiritual Winter
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six writers who have thought most carefully about spiritual renewal &mdash; from
                Jonathan Edwards&rsquo;s discernment of genuine from spurious revival to Ruth Haley
                Barton&rsquo;s counsel for weary leaders.
              </p>
            </div>
            {voiceCards.map((v) => (
              <div
                key={v.name}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <div style={{ marginBottom: "0.85rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: TEXT }}>
                    {v.name}
                  </div>
                  <div
                    style={{
                      color: TEAL,
                      fontSize: "0.85rem",
                      marginTop: "0.15rem",
                      fontStyle: "italic",
                    }}
                  >
                    {v.work}
                  </div>
                </div>
                <blockquote
                  style={{
                    borderLeft: `3px solid ${TEAL}`,
                    paddingLeft: "1rem",
                    margin: "0 0 0.85rem",
                    color: TEXT,
                    fontStyle: "italic",
                    lineHeight: 1.75,
                  }}
                >
                  &ldquo;
                  <span dangerouslySetInnerHTML={{ __html: v.quote }} />
                  &rdquo;
                </blockquote>
                <p
                  style={{
                    color: MUTED,
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: v.bio }}
                />
              </div>
            ))}
          </div>
        )}

        {/* ── SCRIPTURE ── */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: TEAL,
                  margin: "0 0 0.35rem",
                }}
              >
                Key Scriptures on Renewal
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six foundational texts on spiritual renewal &mdash; from the daily inward renewal of
                2 Corinthians 4:16 to the return to first love in Revelation 2.
              </p>
            </div>
            {scriptureCards.map((s) => (
              <div
                key={s.ref}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div
                  style={{
                    color: TEAL,
                    fontWeight: 800,
                    marginBottom: "0.6rem",
                    fontSize: "1rem",
                  }}
                >
                  {s.ref}
                </div>
                <p
                  style={{
                    color: TEXT,
                    fontStyle: "italic",
                    lineHeight: 1.8,
                    margin: "0 0 0.75rem",
                    fontSize: "0.95rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                {s.note && (
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.87rem",
                      lineHeight: 1.7,
                      margin: 0,
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: "0.65rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: s.note }}
                  />
                )}
              </div>
            ))}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  marginBottom: "0.6rem",
                  fontSize: "1rem",
                }}
              >
                Lamentations 3:22-23
              </div>
              <p
                style={{
                  color: TEXT,
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  margin: "0 0 0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                The steadfast love of the Lord never ceases; his mercies never come to an end;
                they are new every morning; great is your faithfulness.
              </p>
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                  margin: 0,
                  borderTop: `1px solid ${BORDER}`,
                  paddingTop: "0.65rem",
                }}
              >
                Written in the smoldering ruins of Jerusalem by a witness to the city&rsquo;s
                destruction, these verses are among the most astonishing in all of Scripture.
                The affirmation of new morning mercies is not made in a comfortable situation
                but in the depths of catastrophe. This is what makes it an anchor for the weary:
                it is not optimism but faith under fire.
              </p>
            </div>
          </div>
        )}

        {/* ── JOURNAL ── */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h2
                style={{
                  color: TEAL,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  margin: "0 0 0.3rem",
                }}
              >
                Renewal Journal
              </h2>
              <p
                style={{
                  color: MUTED,
                  fontSize: "0.88rem",
                  margin: "0 0 1.25rem",
                  lineHeight: 1.6,
                }}
              >
                Private and stored only on this device. No account required. Use this to track
                the sources of spiritual depletion, the means of grace you are pursuing, and what
                renewed life would look like for you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div>
                  <label style={labelStyle}>
                    What has drained you spiritually? Be specific and honest.
                  </label>
                  <textarea
                    value={jDrainSource}
                    onChange={(e) => setJDrainSource(e.target.value)}
                    placeholder="Burnout, grief, unresolved sin, loss of community, prolonged suffering, doubt, busyness..."
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Which means of grace are you pursuing or returning to?
                  </label>
                  <textarea
                    value={jRenewalMeans}
                    onChange={(e) => setJRenewalMeans(e.target.value)}
                    placeholder="Sabbath, confession, prayer, Scripture, retreat, spiritual friendship, gratitude practice..."
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    What would renewed spiritual life look like for you? Describe it concretely.
                  </label>
                  <textarea
                    value={jExpectation}
                    onChange={(e) => setJExpectation(e.target.value)}
                    placeholder="What desires would return? What would prayer feel like? What relationship with God would look like..."
                    style={inputStyle}
                  />
                </div>
              </div>
              <button
                onClick={saveEntry}
                style={{
                  marginTop: "1rem",
                  padding: "0.65rem 1.6rem",
                  background: TEAL,
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "0.93rem",
                }}
              >
                Save Entry
              </button>
            </div>

            {loaded && entries.length === 0 && (
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "1.5rem",
                  textAlign: "center",
                  color: MUTED,
                  fontSize: "0.9rem",
                }}
              >
                No entries yet. Use the form above to begin tracking your renewal journey.
              </div>
            )}

            {entries.map((e) => (
              <div
                key={e.id}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.85rem",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button
                    onClick={() => deleteEntry(e.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: MUTED,
                      cursor: "pointer",
                      fontSize: "0.82rem",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    Delete
                  </button>
                </div>
                {e.drainSource && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span
                      style={{
                        color: TEAL,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Drain Source
                    </span>
                    <p
                      style={{
                        color: TEXT,
                        lineHeight: 1.65,
                        margin: "0.2rem 0 0",
                        whiteSpace: "pre-wrap",
                        fontSize: "0.93rem",
                      }}
                    >
                      {e.drainSource}
                    </p>
                  </div>
                )}
                {e.renewalMeans && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span
                      style={{
                        color: TEAL,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Renewal Means
                    </span>
                    <p
                      style={{
                        color: TEXT,
                        lineHeight: 1.65,
                        margin: "0.2rem 0 0",
                        whiteSpace: "pre-wrap",
                        fontSize: "0.93rem",
                      }}
                    >
                      {e.renewalMeans}
                    </p>
                  </div>
                )}
                {e.expectation && (
                  <div>
                    <span
                      style={{
                        color: TEAL,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Expectation
                    </span>
                    <p
                      style={{
                        color: TEXT,
                        lineHeight: 1.65,
                        margin: "0.2rem 0 0",
                        whiteSpace: "pre-wrap",
                        fontSize: "0.93rem",
                      }}
                    >
                      {e.expectation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── VIDEOS ── */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: TEAL,
                  margin: "0 0 0.35rem",
                }}
              >
                Videos on Renewal
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six recommended videos on spiritual renewal &mdash; covering 2 Corinthians 4,
                Romans 12, Psalm 23, Isaiah 40, and the return to first love in Revelation 2.
              </p>
            </div>
            {videoList.map((v) => (
              <div
                key={v.videoId}
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0, fontWeight: 600 }}>
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            background: CARD,
            border: `1px solid ${TEAL}33`,
            borderRadius: 14,
            padding: "1.5rem 1.75rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: TEAL,
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              margin: "0 0 0.5rem",
            }}
          >
            Continue Your Journey
          </p>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              margin: "0 0 1rem",
              fontSize: "0.93rem",
            }}
          >
            Explore related guides on spiritual dryness, Sabbath, the dark night of the soul,
            and finding your way back to God.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="/spiritual-dryness"
              style={{ color: TEAL, textDecoration: "underline", fontSize: "0.9rem" }}
            >
              Spiritual Dryness
            </Link>
            <Link
              href="/sabbath-guide"
              style={{ color: TEAL, textDecoration: "underline", fontSize: "0.9rem" }}
            >
              Sabbath Rest
            </Link>
            <Link
              href="/christian-dark-night-guide"
              style={{ color: TEAL, textDecoration: "underline", fontSize: "0.9rem" }}
            >
              Dark Night of the Soul
            </Link>
            <Link
              href="/spiritual-formation-guide"
              style={{ color: TEAL, textDecoration: "underline", fontSize: "0.9rem" }}
            >
              Spiritual Formation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
