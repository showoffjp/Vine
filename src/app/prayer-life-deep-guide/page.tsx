"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GOLD = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

interface PLDEntry {
  id: string;
  date: string;
  prayerType: string;
  barrier: string;
  breakthrough: string;
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
    title: "Communication vs. Communion — The Deepest Distinction in Prayer",
    body: "Most Christians begin with the assumption that prayer is communication &mdash; a transfer of information, a list of needs, a report filed with God. But the tradition insists on a deeper category: <em>communion</em>. Communication transacts; communion transforms. Communication requires words and specific content; communion can occur in silence, in attentiveness, in mutual presence. The mystics spoke of resting in God without speaking &mdash; not because words are wrong but because words are often a flight from the deeper vulnerability of simply being known. Brother Lawrence described his hours at the kitchen sink as continuous communion precisely because he had learned to remain with God rather than always address him. The goal of the mature prayer life is not more words but more presence &mdash; not filling silence but inhabiting it with God.",
  },
  {
    title: "The ACTS Model — Adoration, Confession, Thanksgiving, Supplication",
    body: "Adoration grounds prayer in who God is before it considers what we need. Confession clears the interior atmosphere of unacknowledged sin that creates distance between creature and Creator. Thanksgiving trains attention toward grace already received and resists the acquisitive orientation of a prayer life devoted only to petition. Supplication &mdash; asking &mdash; is legitimate and even commanded (&ldquo;Ask and it will be given to you,&rdquo; Matt 7:7), but arriving there last ensures the request emerges from orientation toward God rather than transaction with him. The common failure of the immature prayer life is to begin with supplication and skip the first three movements entirely. ACTS is not a formula but a wisdom map for traversing the full territory of relationship with God.",
  },
  {
    title: "Praying in the Spirit — Ephesians 6:18 and Romans 8:26-27",
    body: "Pray at all times in the Spirit, with all prayer and supplication (Eph 6:18). Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words (Rom 8:26). These two texts together describe a prayer life that is not merely human effort addressed toward God but the Spirit&rsquo;s own activity in and through the believer. The implication is startling: our inadequacy in prayer &mdash; not knowing what to ask, not having words, feeling the gap between our need and our ability to articulate it &mdash; is precisely the condition in which the Spirit moves most freely. Praying in the Spirit is not a special technique but an awareness that God is already at work inside the silence of our weakness.",
  },
  {
    title: "Importunate Prayer — The Persistent Widow and Luke 18:1-8",
    body: "He told them a parable to the effect that they ought always to pray and not lose heart (Luke 18:1). The parable of the persistent widow is one of the most demanding passages on prayer in the Gospels because it resists easy comfort. Jesus does not say God always answers quickly; he says God will vindicate his elect who cry to him day and night &mdash; and he questions whether faith will still be present when the Son of Man returns. Importunate prayer is not manipulation of God but the expression of genuine need that does not give up. The widow&rsquo;s persistence is not earned merit but honest dependency. She does not have anything to offer the judge; she simply will not stop asking. This is the model Jesus holds up as the shape of the prayer life in a world where answers are often delayed.",
  },
  {
    title: "Prayer as Co-laboring with God, Not Informing Him",
    body: "Do not be like them, for your Father knows what you need before you ask him (Matt 6:8). If God already knows, why pray at all? The question assumes prayer is information transfer. The tradition answers differently: prayer is participation. When we pray for someone, we are not advising God of a situation he missed; we are joining ourselves to God&rsquo;s ongoing work in the world. E.M. Bounds wrote that God does nothing except through prayer &mdash; a deliberately provocative overstatement meant to emphasize the degree to which God has chosen to involve human agency in the outworking of his purposes. Co-laboring in prayer means that our intercession is not window dressing over divine sovereignty but a genuine participation in what God is doing. The mystery of prayer is not that it changes God&rsquo;s mind but that it changes us and that God has sovereignly chosen to work through the prayers of his people.",
  },
  {
    title: "Unanswered Prayer — Four Biblical Frameworks",
    body: "The Bible offers at least four frameworks for holding unanswered prayer. <strong>First: timing.</strong> &ldquo;He will answer them swiftly&rdquo; (Luke 18:8) &mdash; swiftly by God&rsquo;s measure, not ours. <strong>Second: wisdom.</strong> God&rsquo;s refusals are often reorientations &mdash; Paul&rsquo;s thorn in the flesh was not removed so that grace could be sufficient in weakness (2 Cor 12:9). <strong>Third: formation.</strong> The waiting itself is the answer &mdash; perseverance, faith, and hope are formed precisely in the interval between petition and response. <strong>Fourth: mystery.</strong> Job received no explanation and was ultimately addressed by God&rsquo;s own questioning presence &mdash; sometimes the only honest answer is that we do not know. None of these frameworks trivializes genuine suffering or glib silence; all of them refuse to let unanswered prayer become the end of the prayer life.",
  },
  {
    title: "Why Jesus Still Prayed Though He Was God",
    body: "In the morning, rising very early, he departed and went out to a desolate place, and there he prayed (Mark 1:35). The Gospels record Jesus praying at baptism, before choosing the Twelve, before the Transfiguration, in Gethsemane, and on the cross. That the eternal Son of God &mdash; the second person of the Trinity, through whom and for whom all things were created &mdash; rose before dawn to pray is perhaps the most theologically startling fact in the Gospels. It means prayer is not a remedy for deficiency but the natural movement of the creature toward the Creator, the Son toward the Father. Jesus prayed not despite his divinity but in full expression of his humanity &mdash; the humanity he took on precisely to stand with us and for us. His prayer life is not a model for the spiritually underdeveloped; it is the revelation of what human existence looks like when fully oriented toward God.",
  },
];

const practiceCards = [
  {
    title: "The Daily Prayer Rhythm — Morning, Midday, and Evening Offices",
    body: "The three-fold daily office &mdash; morning, midday, and evening prayer &mdash; is the ancient structure of Christian prayer inherited from Jewish practice (Daniel prayed three times a day; the Psalmist seven). Fixed-hour prayer does not demand hours each session but insists on regularity. A morning office of 15 minutes (Scripture reading, psalm, confession, intercession), a midday pause of 5 minutes (the Jesus Prayer or a brief collect), and an evening examen of 10-15 minutes (gratitude review, confession of the day&rsquo;s failures, committing the night to God) provide three daily anchors that structure the entire day around the presence of God. The Daily Office tradition in Anglican and Catholic Christianity provides ready-made frameworks for those who want to inhabit this rhythm.",
  },
  {
    title: "Prayer Journaling — Writing to God as a Spiritual Practice",
    body: "Writing to God forces specificity. The vague prayer &ldquo;Lord, help me&rdquo; becomes in writing &ldquo;Lord, I am afraid of what my doctor told me and I need courage I do not have.&rdquo; Specificity is not more spiritual; it is more honest. The prayer journal also creates a record that, reviewed monthly or annually, reveals patterns invisible in the daily moment: the prayers God has answered over years, the recurring fears that have been met by recurring grace, the growth that was invisible at ground level. Many saints kept journals that were really extended letters to God: Augustine&rsquo;s Confessions is a sustained prayer. The journal also disciplines the wandering mind by giving it a page to inhabit. Even ten minutes of written prayer per day, sustained over years, becomes an archive of a life lived before God.",
  },
  {
    title: "Praying Scripture Back to God — Lectio Oratio",
    body: "The ancient practice of lectio divina (&ldquo;sacred reading&rdquo;) moves through four movements: Lectio (slow reading), Meditatio (rumination), Oratio (prayer arising from the text), and Contemplatio (resting in God&rsquo;s presence). The oratio stage &mdash; praying the text back to God &mdash; takes what has been heard and spoken and returns it as prayer. A verse like &ldquo;The Lord is my shepherd&rdquo; becomes in oratio: &ldquo;Lord, you are my shepherd. I confess I have been shepherding myself. I come to you as a sheep that has wandered. Lead me.&rdquo; This is not creative paraphrase but honest conversation arising from the Word. Scripture-based prayer has the unique advantage of being grounded in revealed truth rather than subjective feeling &mdash; you pray what God has said rather than what you happen to feel on a given morning.",
  },
  {
    title: "The Prayer List That Grows Over Decades",
    body: "Many saints kept ongoing intercession lists that they added to over years and decades. George Mueller&rsquo;s famous list of names for whom he prayed daily &mdash; some for thirty, forty, fifty years before they came to faith &mdash; represents an extreme of the practice, but the principle is sound: intercession requires names. A prayer list typically includes immediate family (daily prayer for each person by name), close friends, those going through crisis (added and removed as circumstances change), people in your city or community, and broader concerns (persecuted church, unreached peoples, political leaders). The act of writing a name creates ownership; the act of praying it repeatedly over years creates deep intercession. The list is not a ritual but a discipline that trains attention toward other people as primary subjects of prayer.",
  },
  {
    title: "Fasting Prayer — Combining Abstinence and Petition",
    body: "When they had appointed elders for them in every church, with prayer and fasting they committed them to the Lord (Acts 14:23). Fasting and prayer appear together repeatedly in Acts and in the prophets &mdash; not because hunger earns answers but because fasting clears the interior life of distraction and signals seriousness of intention. Richard Foster calls fasting &ldquo;the body&rsquo;s way of saying to God what the soul means.&rdquo; The common practice is a 24-hour fast from food (water permitted) combined with extended prayer &mdash; using the time normally spent preparing and eating meals for prayer instead. Fasting prayer is particularly appropriate for crisis intercession, major decisions, spiritual breakthrough sought after long waiting, and seasons of renewal. It is not mandatory but is strongly attested across the entire history of Christian prayer.",
  },
  {
    title: "Corporate Prayer — Why Gathering to Pray Changes Things",
    body: "Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven. For where two or three are gathered in my name, there am I among them (Matt 18:19-20). Corporate prayer is not simply many individuals praying simultaneously; it is the body of Christ expressing a unified voice. The early church prayed together in the upper room before Pentecost. The Jerusalem church devoted themselves to the apostles&rsquo; teaching, fellowship, breaking of bread, and prayers (Acts 2:42). The New Testament consistently presents corporate prayer as a distinct category of prayer with distinct authority. The isolation of the prayer life into purely private devotion is a modern and impoverishing narrowing. Prayer meetings may be the least-attended gathering of the local church, but they represent an irreplaceable dimension of Christian community.",
  },
];

const voiceCards = [
  {
    name: "E.M. Bounds",
    work: "Power Through Prayer",
    quote: "The men who have done the most for God in this world have been early on their knees. He who fritters away the early morning, its opportunity and freshness, in other pursuits than seeking God will make poor headway seeking him the rest of the day.",
    bio: "Edward McKendree Bounds (1835-1913) was a Methodist minister and Civil War chaplain whose nine books on prayer were mostly published posthumously. His own practice of rising at 4 a.m. to pray three hours before breakfast was not performance but the overflow of his conviction that prayer was the primary work of the Christian. Power Through Prayer (1912) remains one of the most cited books on the subject in evangelical Christianity. Bounds did not theorize about prayer from a comfortable distance; he prayed his way through the Civil War, through ministerial obscurity, and through decades of a prayer life that deepened with age. His central thesis is simple and devastating: the church is powerless because Christians do not pray, and ministers are ineffective because they have substituted study and activity for intercession.",
  },
  {
    name: "Ole Hallesby",
    work: "Prayer (1931)",
    quote: "Prayer is nothing more involved than letting Jesus into our needs. Prayer is the breath of the soul, the organ by which we receive Christ into our parched and withered hearts. Helplessness is the very best basis for prayer.",
    bio: "Ole Kristian Hallesby (1879-1961) was a Norwegian Lutheran theologian and professor who wrote Prayer in 1931 from a position of pastoral experience and theological depth. His central insight is among the most liberating in the literature of prayer: the prerequisite for prayer is not eloquence, spiritual achievement, or religious competence but helplessness &mdash; an honest acknowledgment that we cannot get through without God. This removes performance anxiety from prayer and replaces it with honest dependence. Hallesby insisted that the weakest, most inarticulate prayer &mdash; the wordless groan of desperation &mdash; is already prayer, because prayer is not the presentation of credentials but the opening of the door to Christ. Prayer has been translated into many languages and passed through numerous editions.",
  },
  {
    name: "Richard Foster",
    work: "Prayer: Finding the Heart’s True Home (1992)",
    quote: "Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives. The closer we come to the heartbeat of God, the more we see our need and the more we desire to be conformed to Christ.",
    bio: "Richard Foster (b. 1942) is a Quaker theologian and the founder of Renovat&eacute;, an ecumenical organization devoted to Christian spiritual formation. His Prayer: Finding the Heart&rsquo;s True Home identifies 21 types of prayer organized around three movements: inward prayer, upward prayer, and outward prayer. Foster&rsquo;s great contribution to the literature is demonstrating that the prayer life is not monotone &mdash; it encompasses lament and adoration, warfare and contemplation, spoken and silent, personal and corporate, ordinary and extraordinary. His earlier Celebration of Discipline (1978) introduced an entire generation of evangelical Christians to the classical spiritual disciplines, including prayer. Foster combines scholarly rigor with accessible prose and deep personal practice.",
  },
  {
    name: "Andrew Murray",
    work: "With Christ in the School of Prayer (1885)",
    quote: "Prayer is not monologue, but dialogue; God&rsquo;s voice is its most essential part. Listening to God&rsquo;s voice is the secret of the assurance that he will listen to mine.",
    bio: "Andrew Murray (1828-1917) was a South African Dutch Reformed pastor who wrote more than 240 books, many of them on the interior life of faith. With Christ in the School of Prayer, organized around the disciples&rsquo; request &ldquo;Lord, teach us to pray,&rdquo; takes each clause of the Lord&rsquo;s Prayer as a subject for extended meditation and theological exposition. Murray&rsquo;s central insight is that Jesus is not merely the model for prayer but the one who prays within us &mdash; intercession is participation in Christ&rsquo;s own ongoing high-priestly ministry. Murray&rsquo;s writing is marked by a warmth and an urgency born of long pastoral experience and his own transformative encounters with God during seasons of personal revival in South Africa.",
  },
  {
    name: "Hudson Taylor",
    work: "Praying for China and the China Inland Mission",
    quote: "It is possible to move men, through God, by prayer alone. The prayer power has never been tried to its full capacity. If we want to see mighty works of power and grace done in our day, we must put in more time in solemn meditation, in earnest expectation, and in definite prayer.",
    bio: "James Hudson Taylor (1832-1905) was a British Protestant missionary who founded the China Inland Mission and spent 51 years in China. His prayer life was inseparable from his missionary vision: he believed that God would provide every worker and every resource needed for the evangelization of China&rsquo;s inland provinces in response to believing, specific prayer. Taylor prayed over maps of China&rsquo;s provinces, naming the people groups still unreached. His practice of &ldquo;moving men through God by prayer alone&rdquo; meant he refused to publicize needs or appeal for money, trusting that God would supply what God had promised. His biography, by Dr. and Mrs. Howard Taylor, has shaped the prayer lives of missionaries for over a century.",
  },
  {
    name: "Brother Lawrence",
    work: "The Practice of the Presence of God (c. 1693)",
    quote: "The time of business does not with me differ from the time of prayer; and in the noise and clutter of my kitchen, while several persons are at the same time calling for different things, I possess God in as great tranquility as if I were upon my knees at the blessed sacrament.",
    bio: "Brother Lawrence (Nicholas Herman, c. 1614-1691) was a Carmelite lay brother whose collected letters and conversations were published posthumously as The Practice of the Presence of God. He worked in the monastery kitchen for most of his religious life and found that this humble, mundane labor became the arena of his deepest communion with God. His practice was not a technique for mystical experience but a habitual turning of attention toward God throughout the day &mdash; in every task, every moment, every noise and distraction. Brother Lawrence is the patron saint of those who cannot find time for extended formal prayer and who need to learn that the whole of life can be prayer. His little book has never gone out of print.",
  },
];

const scriptureCards = [
  {
    ref: "Luke 18:1-8",
    text: "And he told them a parable to the effect that they ought always to pray and not lose heart. He said, &ldquo;In a certain city there was a judge who neither feared God nor respected man. And there was a widow in that city who kept coming to him and saying, &lsquo;Give me justice against my adversary.&rsquo; For a while he refused, but afterward he said to himself, &lsquo;Though I neither fear God nor respect man, yet because this widow keeps bothering me, I will give her justice, so that she will not beat me down by her continual coming.&rsquo;&rdquo; And the Lord said, &ldquo;Hear what the unrighteous judge says. And will not God give justice to his elect, who cry to him day and night? Will he delay long over them? I tell you, he will give justice to them speedily. Nevertheless, when the Son of Man comes, will he find faith on earth?&rdquo;",
    note: "The parable of the persistent widow is the central New Testament text on importunate prayer. Note that Jesus&rsquo;s concern is not merely whether God answers but whether faith will survive the wait.",
  },
  {
    ref: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    note: "This text connects prayer directly to the relief of anxiety &mdash; not because prayer is therapeutic technique but because it redirects anxiety toward the One who can actually do something about it. The peace that follows surpasses understanding: it is not the peace of a resolved problem but the peace of a surrendered heart.",
  },
  {
    ref: "Romans 8:26-27",
    text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.",
    note: "The Holy Spirit&rsquo;s intercession within us means that even our weakest, most inarticulate prayer is not left without help. The groanings too deep for words are not a failure of prayer but its deepest expression &mdash; the Spirit translating what we cannot say.",
  },
  {
    ref: "1 Thessalonians 5:17",
    text: "Pray without ceasing.",
    note: "Three words, among the most demanding commands in all of Scripture. The Greek verb is present continuous &mdash; uninterrupted, habitual, ongoing. This cannot mean spending every waking moment on knees; it means the constant orientation of the heart toward God, the reflex of turning to him in every moment, the background hum of communion beneath all activity.",
  },
  {
    ref: "Matthew 6:5-8",
    text: "And when you pray, you must not be like the hypocrites. For they love to stand and pray in the synagogues and at the street corners, that they may be seen by others. Truly, I say to you, they have received their reward. But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you. And when you pray, do not heap up empty phrases as the Gentiles do, for they think that they will be heard for their many words. Do not be like them, for your Father knows what you need before you ask him.",
    note: "Jesus critiques two deformations of prayer: performance (praying to be seen) and verbosity (thinking many words earn answers). The cure for both is secrecy and simplicity &mdash; the room with the shut door, the few honest words, the Father who already knows.",
  },
  {
    ref: "Hebrews 4:16",
    text: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
    note: "The invitation of Hebrews is breathtaking in its boldness: we do not approach God tentatively or from a great distance but with confidence &mdash; a confidence grounded not in our worthiness but in the high priesthood of Jesus, who has passed through the heavens and who is able to sympathize with our weaknesses.",
  },
];

const videoList = [
  { videoId: "DvQYzYRG8rU", title: "E.M. Bounds: Power Through Prayer" },
  { videoId: "SqKSPr0Qsbs", title: "Building a Daily Prayer Life" },
  { videoId: "8R_8zGF3kJg", title: "Richard Foster: Prayer as Relationship" },
  { videoId: "F2x8OqTG0vM", title: "Praying the Psalms - Scripture-Based Prayer" },
  { videoId: "PjIxbbMH65E", title: "Why Prayer Changes Things" },
  { videoId: "9w1oeTFblWI", title: "Corporate Prayer: The Early Church Pattern" },
];

export default function PrayerLifeDeepGuidePage() {
  const [tab, setTab] = useState("theology");
  const [loaded, setLoaded] = useState(false);
  const [entries, setEntries] = useState<PLDEntry[]>([]);
  const [jPrayerType, setJPrayerType] = useState("");
  const [jBarrier, setJBarrier] = useState("");
  const [jBreakthrough, setJBreakthrough] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_prayerlifedg_entries");
      if (raw) setEntries(JSON.parse(raw) as PLDEntry[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("vine_prayerlifedg_entries", JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!jPrayerType.trim() && !jBarrier.trim()) return;
    const newEntry: PLDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      prayerType: jPrayerType,
      barrier: jBarrier,
      breakthrough: jBreakthrough,
    };
    setEntries((prev) => [newEntry, ...prev]);
    setJPrayerType("");
    setJBarrier("");
    setJBreakthrough("");
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
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        paddingTop: "var(--header-height, 80px)",
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
              background: GOLD + "22",
              color: GOLD,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Prayer &amp; Communion
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
          A Life of Prayer: Building Deep Communion with God
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
          Prayer is not primarily a transaction between a petitioner and a
          provider &mdash; it is communion between the creature and the Creator.
          This guide moves beyond techniques into the theology, the school, and
          the long obedience of a deepening prayer life: what prayer is, why
          Jesus prayed, how the Spirit intercedes, and what the great teachers
          of prayer have learned across twenty centuries.
        </p>
        <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, maxWidth: 660, margin: "0 0 2rem" }}>
          Also see{" "}
          <Link
            href="/prayer-life-guide"
            style={{ color: GOLD, textDecoration: "underline" }}
          >
            Building a Prayer Life
          </Link>{" "}
          for the introductory guide to daily prayer practices.
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
                borderColor: tab === t.id ? GOLD : BORDER,
                background: tab === t.id ? GOLD + "22" : "transparent",
                color: tab === t.id ? GOLD : MUTED,
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
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: GOLD, margin: "0 0 0.35rem" }}>
                The Theology of Prayer
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Seven foundational questions about the nature, purpose, and mystery of prayer &mdash;
                from the difference between communication and communion to why the incarnate Son of God
                still knelt to pray.
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
                  borderLeft: `4px solid ${GOLD}`,
                }}
              >
                <h3
                  style={{
                    color: GOLD,
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
                background: GOLD + "11",
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
                marginTop: "0.25rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.9rem", fontStyle: "italic" }}>
                &ldquo;I have so much to do that I shall spend the first three hours in prayer.&rdquo;
                &mdash; Martin Luther, on his daily schedule. The great reformers and revivalists were
                without exception great prayers &mdash; not because prayer was their hobby but because
                they understood that without it, all other activity was ultimately futile.
              </p>
            </div>
          </div>
        )}

        {/* ── PRACTICES ── */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: GOLD, margin: "0 0 0.35rem" }}>
                Six Practices for a Deepening Prayer Life
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                These are not techniques for manufacturing spiritual experience but disciplines for
                positioning yourself repeatedly before God, trusting that he meets those who seek him.
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
                      background: GOLD + "22",
                      color: GOLD,
                      fontWeight: 900,
                      borderRadius: "50%",
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.95rem",
                      border: `1px solid ${GOLD}44`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    style={{
                      color: GOLD,
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
            {/* Challenge box */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>
                The 30-Day Prayer Challenge
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.93rem" }}>
                Week 1: Establish the morning office &mdash; 15 minutes every morning before any screen time.
                Week 2: Add the evening examen &mdash; 10 minutes reviewing the day with God.
                Week 3: Begin a prayer journal &mdash; write your prayers three times this week.
                Week 4: Commit one full day to extended prayer and fasting, using the hours normally
                given to meals for sustained intercession and Scripture reading.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.93rem" }}>
                At the end of 30 days, review your journal. You will have practiced more intentional prayer
                than most Christians manage in a year. The point is not achievement but the formation of
                a habit that will outlast the 30 days.
              </p>
            </div>
          </div>
        )}

        {/* ── VOICES ── */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: GOLD, margin: "0 0 0.35rem" }}>
                Teachers in the School of Prayer
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six voices who have most shaped Christian thinking and practice around prayer &mdash;
                from the missionary fields of China to a monastery kitchen in 17th-century Paris.
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
                  <div style={{ color: GOLD, fontSize: "0.85rem", marginTop: "0.15rem", fontStyle: "italic" }}>
                    {v.work}
                  </div>
                </div>
                <blockquote
                  style={{
                    borderLeft: `3px solid ${GOLD}`,
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
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: GOLD, margin: "0 0 0.35rem" }}>
                Key Scriptures on Prayer
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six foundational texts on the nature, practice, and promise of prayer. Each includes
                a note on why this particular passage matters for the prayer life.
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
                    color: GOLD,
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
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: "0.6rem", fontSize: "1rem" }}>
                James 5:16
              </div>
              <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: "0 0 0.75rem", fontSize: "0.95rem" }}>
                Therefore, confess your sins to one another and pray for one another, that you may be healed.
                The prayer of a righteous person has great power as it is working.
              </p>
              <p style={{ color: MUTED, fontSize: "0.87rem", lineHeight: 1.7, margin: 0, borderTop: `1px solid ${BORDER}`, paddingTop: "0.65rem" }}>
                James links corporate confession and corporate prayer together, then grounds the effectiveness of
                prayer in the righteousness of the one who prays &mdash; righteousness that is not personal
                moral perfection but right relationship with God, including honest confession of sin.
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
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  margin: "0 0 0.3rem",
                }}
              >
                Prayer Life Journal
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
                your prayer practices, barriers, and moments of breakthrough over time.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div>
                  <label style={labelStyle}>
                    What type of prayer are you focusing on or wanting to grow in?
                  </label>
                  <textarea
                    value={jPrayerType}
                    onChange={(e) => setJPrayerType(e.target.value)}
                    placeholder="Intercession, thanksgiving, lament, contemplative prayer, praying Scripture, fasting prayer..."
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    What is the primary barrier or struggle in your prayer life right now?
                  </label>
                  <textarea
                    value={jBarrier}
                    onChange={(e) => setJBarrier(e.target.value)}
                    placeholder="Distraction, dryness, doubt, feeling unheard, not enough time, not knowing what to say..."
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    What shift or breakthrough would transform your prayer life this season?
                  </label>
                  <textarea
                    value={jBreakthrough}
                    onChange={(e) => setJBreakthrough(e.target.value)}
                    placeholder="A regular fixed time, a prayer partner, experiencing God&apos;s nearness, answered intercession..."
                    style={inputStyle}
                  />
                </div>
              </div>
              <button
                onClick={saveEntry}
                style={{
                  marginTop: "1rem",
                  padding: "0.65rem 1.6rem",
                  background: GOLD,
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
                No entries yet. Use the form above to record your first reflection.
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
                {e.prayerType && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Prayer Type
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
                      {e.prayerType}
                    </p>
                  </div>
                )}
                {e.barrier && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Barrier
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
                      {e.barrier}
                    </p>
                  </div>
                )}
                {e.breakthrough && (
                  <div>
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Breakthrough
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
                      {e.breakthrough}
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
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: GOLD, margin: "0 0 0.35rem" }}>
                Videos on Prayer
              </h2>
              <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
                Six recommended videos covering the theology and practice of deep prayer &mdash; from
                E.M. Bounds to Richard Foster to praying the Psalms.
              </p>
            </div>
            {videoList.map((v) => (
              <div key={v.videoId} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
            border: `1px solid ${GOLD}33`,
            borderRadius: 14,
            padding: "1.5rem 1.75rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: GOLD, fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1, textTransform: "uppercase", margin: "0 0 0.5rem" }}>
            Continue Your Journey
          </p>
          <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1rem", fontSize: "0.93rem" }}>
            Explore related guides on fasting, Scripture, and the spiritual disciplines of the Christian life.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/fasting-guide" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              Fasting &amp; Prayer
            </Link>
            <Link href="/lectio-divina" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              Lectio Divina
            </Link>
            <Link href="/spiritual-disciplines-guide" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              Spiritual Disciplines
            </Link>
            <Link href="/daily-office" style={{ color: GOLD, textDecoration: "underline", fontSize: "0.9rem" }}>
              Daily Office
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
