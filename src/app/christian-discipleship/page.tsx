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

const STORAGE_KEY = "vine_christiandiscipleship_entries";

interface DSPEntry {
  id: string;
  date: string;
  discipleOf: string;
  beingDiscipled: string;
  disciplingOthers: string;
}

const theologySections = [
  {
    title: "Mathetes — Apprentice-Companion, Not Merely Student",
    body: "The Greek word mathetes, translated &ldquo;disciple&rdquo; throughout the Gospels, carries far more than the English &ldquo;student&rdquo; suggests. In the ancient world, a mathetes was not a lecture-hall learner who absorbed information from a safe distance; a mathetes was an apprentice-companion who attached themselves to a teacher and learned by proximity. The disciple was present at meals, at rest, at prayer, in conflict, in crisis. Learning happened through observation as much as instruction — the student watched how the teacher treated a beggar, how he responded to a Pharisee, how he prayed at dawn. This is the pattern Jesus inaugurated when he said &ldquo;follow me&rdquo; to fishermen by a lake: not &ldquo;enroll in my course&rdquo; but &ldquo;come and be with me.&rdquo; The discipleship Jesus practiced was fundamentally relational before it was educational. This has massive implications for how churches form disciples: information transfer (sermons, curricula, podcasts) is not the same as discipleship. Information can be received without proximity; discipleship requires presence. Dallas Willard captured this by distinguishing between &ldquo;Christians&rdquo; (those who have received forgiveness) and &ldquo;disciples&rdquo; (those who are actually learning to live Jesus&rsquo;s way): the gap between the two categories is, he argued, the church&rsquo;s greatest crisis.",
  },
  {
    title: "The Call to Follow — Leaving Nets (Mark 1:17)",
    body: "&ldquo;Follow me, and I will make you become fishers of men&rdquo; (Mark 1:17). Jesus&rsquo;s call to Simon and Andrew is startling in its abruptness — &ldquo;immediately they left their nets&rdquo; (v. 18). The nets are not incidental detail; they are everything: livelihood, identity, family trade, security. The call of discipleship arrives as a summons that re-orders all prior attachments. It is worth noting that Jesus does not say &ldquo;follow me and I will give you a better life than the one you have&rdquo; — he says &ldquo;I will make you become.&rdquo; The promise is not primarily of circumstantial improvement but of personal transformation. You will become something you are not yet. This becoming is the heart of discipleship: it is not primarily about what you do for Jesus but what Jesus does to you through the sustained proximity of following. The disciples of Jesus did not choose a cause; they chose a person. And because it was a person they followed, the formation that happened in them was comprehensive — it touched not just their beliefs but their reactions, their habits, their loves, their fears.",
  },
  {
    title: "The Cost of Discipleship — Luke 14:25-33",
    body: "&ldquo;If anyone comes to me and does not hate his own father and mother and wife and children and brothers and sisters, yes, and even his own life, he cannot be my disciple&rdquo; (Luke 14:26). Jesus says this to large crowds following him — and it reads as a deliberate act of crowd-thinning. He does not want enthusiastic followers who have not counted the cost; he wants deliberate ones who have. The word &ldquo;hate&rdquo; is Semitic hyperbole for radical relativizing: no attachment — not family loyalty, not self-preservation, not security — can be allowed to compete with the primary allegiance to Jesus. He immediately follows with two parables: the builder who estimates costs before laying a foundation, and the king who counts troops before going to war (vv. 28-32). Both parables demand pre-commitment calculation. Discipleship is not entered accidentally or impulsively; it is entered eyes-open, with full awareness that something will be surrendered. Dietrich Bonhoeffer, writing from Germany as the Nazi regime demanded Christian capitulation, argued that the church had traded costly discipleship for &ldquo;cheap grace&rdquo; — a version of Christianity that promised forgiveness without following, benefits without cost, conversion without cross. His challenge remains one of the most important critiques of Western Christianity: the offer of a &ldquo;discipleship&rdquo; that costs nothing produces followers of nothing.",
  },
  {
    title: "Formation vs. Information — the Goal of Discipleship",
    body: "One of the most important distinctions in contemporary discipleship thinking is between information transfer and formation. Information transfer is what happens when a person learns more facts about the Christian faith — more theology, more Bible knowledge, more church history. Formation is what happens when a person&rsquo;s character, desires, habits, and reactions begin to resemble Jesus&rsquo;s. The distinction matters because they are not the same thing and do not automatically produce each other. A person can grow in theological information while remaining unchanged in character — more sophisticated in argument while no kinder, no more patient, no more honest. Jesus&rsquo;s goal, as stated throughout the Sermon on the Mount, is not primarily that his followers hold correct views but that they become a certain kind of person: poor in spirit, merciful, pure in heart, peacemaking. Paul&rsquo;s language in Romans 12:2 is revealing: &ldquo;be transformed by the renewing of your mind&rdquo; — the mind is renewed, yes, but the outcome is transformation, not merely updated beliefs. Dallas Willard&rsquo;s vision of &ldquo;spiritual formation unto Christlikeness&rdquo; recaptured the patristic insight that discipleship is the slow, costly, Spirit-enabled process of becoming genuinely like Jesus — not performing Christianity but being re-made by it.",
  },
  {
    title: "The Discipleship Method of Jesus — Relationship, Not Curriculum",
    body: "A striking feature of Jesus&rsquo;s discipleship method is how little it resembles any curriculum-based approach. He did not give the Twelve a reading list, a study guide, or a course progression. He took them into his life. He let them watch him pray before dawn, argue with religious authorities, weep at a tomb, eat with sinners, drive out demons. He asked them questions (who do people say I am?), told them stories (once there was a father with two sons), gave them tasks (go two by two, heal the sick), and debriefed with them afterward. He rebuked them sharply (get behind me, Satan) and reassured them tenderly (do not let your hearts be troubled). He modeled, invited, and evaluated — the ancient three-movement pattern of apprenticeship. Mike Breen has called this the &ldquo;huddle&rdquo; approach: Jesus huddle with a small group, gave them a mission, then processed the experience with them. The point is that Jesus&rsquo;s method was relational and contextual, not informational and classroom-based. Genuine discipleship requires someone to be present with — a more experienced follower who lets others into enough of their actual life to learn from, not just their Sunday-morning performances.",
  },
  {
    title: "2 Timothy 2:2 — The Chain of Discipleship",
    body: "&ldquo;And what you have heard from me in the presence of many witnesses, entrust to faithful people who will be able to teach others also&rdquo; (2 Timothy 2:2). In a single sentence Paul maps four generations of transmission: Paul himself, Timothy, faithful people Timothy would teach, and others those people would teach in turn. This is the architecture of discipleship multiplication: not a celebrity-to-audience broadcast but a person-to-person chain. Each link is someone who has both received and is now transmitting. The genius of the chain model is that it does not require a stage or a platform: it requires a relationship. Paul entrusted to Timothy not primarily a doctrine but a way of living the faith — and Timothy&rsquo;s task was to entrust this to reliable people, not the most talented or most prominent people, but those who would actually do it and keep the chain unbroken. Eugene Peterson called this the fundamental pattern of Christian community: one person slightly further along in the way of Jesus walking with another, &ldquo;alongside&rdquo; rather than &ldquo;above.&rdquo; The church grows most durably not through spectacular events but through the multiplication of faithful person-to-person chains.",
  },
  {
    title: "Dallas Willard&rsquo;s &ldquo;The Great Omission&rdquo;",
    body: "Willard&rsquo;s diagnosis of Western Christianity, laid out most sharply in The Great Omission (2006), is that the church has systematically separated salvation from discipleship. The Great Commission commands making disciples; the church has settled for making converts. The result is a Christianity populated by people who have prayed a prayer and received a theological status (forgiven, justified, saved) but are not actually apprenticed to Jesus — not learning his way of handling anger, lust, money, enemies, anxiety, and death. Willard argued that the spiritual disciplines — the concrete bodily and mental practices of prayer, fasting, solitude, service, study, simplicity — are the means by which a person places themselves under Jesus&rsquo;s teaching in a practical, transformative way. Without them, Christian formation is an aspiration without a mechanism. The great omission, he insisted, is not merely that the church produces few disciples; it is that the church no longer has a believable or concrete answer to the question: if I wanted to actually become the kind of person described in the Beatitudes, what would I do? Willard&rsquo;s life-work was to recover that answer.",
  },
  {
    title: "Spiritual Direction as Discipleship",
    body: "One of the oldest forms of discipleship in Christian history — practiced continuously in monastic traditions and among the desert fathers — is spiritual direction: a sustained one-on-one relationship in which a more experienced believer accompanies another in their relationship with God. The spiritual director does not primarily offer advice or Bible study; they help the directee notice where God is moving in their life, where resistance or fear is preventing growth, and what the Spirit seems to be inviting them into. Spiritual direction differs from counseling (which is primarily therapeutic), mentoring (which is primarily competence-based), or accountability (which is primarily behavior-focused) by being primarily contemplative and relational. It asks not &ldquo;what do you need to do better?&rdquo; but &ldquo;where is God in this?&rdquo; Its recovery in Protestant contexts over the last generation — through the work of figures like Eugene Peterson, Leighton Ford, and James Houston — represents a recovery of a dimension of discipleship that the Reformation&rsquo;s suspicion of Catholic practice had inadvertently discarded.",
  },
  {
    title: "Why Churches Produce Converts but Not Disciples",
    body: "Bill Hull, who has spent decades studying and practicing discipleship in the local church, argues that the disciple-deficit in Western Christianity is not accidental but structural: most churches are organized around attracting and assimilating crowds, not forming apprentices. The metrics by which churches evaluate success — attendance, giving, programs, staff size — are all crowd metrics. None of them measure Christlikeness. This produces a perverse incentive: the most successful church by conventional metrics may be producing the least actual discipleship, because crowd-attracting and disciple-forming require different things. Discipleship is slow, relational, costly for the disciple-maker, and produces no spectacle. It cannot be outsourced to a class or a curriculum; it requires a person to invest in another person. Churches that take the Great Commission seriously — that make the formation of Christlike people their primary metric of success — typically look less impressive by crowd-culture standards and are doing more lasting work. Hull&rsquo;s prescription is simple and costly: every church leader must become a disciple-maker of a few, not merely a performer for many.",
  },
];

const practices = [
  {
    name: "The Discipleship Inventory",
    body: "Once a year, take stock of your actual discipleship relationships. Who has been discipling you &mdash; formally or informally &mdash; in the past twelve months? Whose life have you had enough access to that you have learned something about following Jesus from watching them? And who are you discipling? Not necessarily in a formal program, but who is watching you closely enough to be learning from your actual life of faith? If both answers are &ldquo;nobody,&rdquo; that is not a personality type or a season of life; it is a structural gap. The 2 Timothy 2:2 chain requires both a receiver and a transmitter. Discipleship without a disciple-maker and without a person you are discipling is incomplete by New Testament definition.",
  },
  {
    name: "Finding a Spiritual Director or Mentor",
    body: "Identify one person who is further along in the way of Jesus than you are &mdash; not necessarily theologically smarter but more genuinely Christlike in a way you can observe. Ask them if you can meet with them monthly for one year. Come with specific questions about their life of faith: how do they handle anxiety, pray in dry seasons, navigate family conflict as a follower of Jesus? The goal is not to extract their techniques but to be formed by proximity to their formation. Many people who would make excellent mentors have never been asked because we assume they are too busy or too important. Ask. The worst answer is no.",
  },
  {
    name: "The Daily Examen",
    body: "The Ignatian examen is a fifteen-minute daily prayer practice that reviews the day through two lenses: where did I notice the presence of God (consolation)? and where did I lose touch with it (desolation)? Over months of practice, the examen trains a form of attentiveness that is close to the core of discipleship: learning to notice where Jesus is at work in the ordinary texture of your day, and where you are drifting from him. Eugene Peterson called this kind of attentiveness &ldquo;the contemplative pastor&rsquo;s work&rdquo; &mdash; but it is every disciple&rsquo;s work, not only clergy. The examen can be done mentally before sleep or written in a journal. Its effect accumulates slowly over months rather than producing dramatic immediate results, which is itself a small lesson in the patience discipleship requires.",
  },
  {
    name: "Investing in One Person for One Year",
    body: "Choose one person who is behind you in the faith &mdash; a new believer, a teenager, someone who has recently rededicated their life &mdash; and invest in them for one year. Not through formal teaching sessions primarily, but through shared life: invite them along to what you are already doing, let them see how you handle conflict and disappointment, introduce them to your prayer life, your Scripture reading, your service. Do not wait until you feel qualified; no disciple-maker felt qualified. The qualification for discipling someone is not spiritual perfection but the willingness to be honest about your own following while walking alongside another. At the end of the year, help them identify who they might disciple.",
  },
  {
    name: "A Rule of Life",
    body: "A rule of life &mdash; from the Latin regula, meaning rhythm or pattern &mdash; is a set of intentional practices that structure your formation. It is not a set of rules to be obeyed but a framework of habits to be inhabited. A simple rule might include: daily prayer (when, how long, what form), weekly Sabbath, monthly fasting, regular service, and periodic retreat. The value of a rule is that it removes daily decision-making about formation: the practices are already chosen, the question is only whether to show up to them. John Wesley&rsquo;s class meetings were a rule of life in community; Benedict&rsquo;s Rule organized whole communities. Your rule need not be elaborate, but it should be concrete enough that you will know whether you are keeping it.",
  },
  {
    name: "Practicing the Presence of God",
    body: "Brother Lawrence, a seventeenth-century monastery cook, taught a simple practice he called &ldquo;the practice of the presence of God&rdquo;: the continuous turning of attention toward God throughout the day, in whatever task is at hand. He found as much of God in washing pots as in formal prayer, because he practiced the same intention in both. For disciples in ordinary secular life, this might look like: beginning each task with a brief interior acknowledgment of God&rsquo;s presence, praying simple one-sentence prayers throughout the day, ending each conversation with a silent prayer for the person, noticing small moments of beauty or difficulty as invitations to awareness of God. The goal is not mystical experience but what Paul calls &ldquo;praying without ceasing&rdquo; (1 Thess 5:17) &mdash; a continuously oriented life, not a series of isolated religious episodes.",
  },
];

const voices = [
  {
    name: "Dallas Willard",
    years: "1935–2013",
    role: "The Great Omission — philosopher of discipleship",
    body: "Willard was a philosopher of mind at the University of Southern California who spent three decades arguing that spiritual formation &mdash; the renovation of the human person into Christlikeness &mdash; is the neglected center of Christian life. His books The Spirit of the Disciplines, The Divine Conspiracy, and The Great Omission collectively diagnose and prescribe for the disciple-deficit of Western Christianity. Willard argued with unusual precision that spiritual disciplines are not meritorious practices that earn grace but training exercises that train the whole person &mdash; body, will, mind, emotions, social self, soul &mdash; to respond to Jesus naturally rather than artificially. He was unfailingly gentle in person and laser-precise in argument, and his vision of a Christianity that actually produces the character of Jesus in its adherents remains one of the most demanding and hopeful on offer.",
    quote:
      "The greatest issue facing the world today, with all its heartbreaking needs, is whether those who, by profession or culture, are identified as &lsquo;Christians&rsquo; will become disciples &mdash; students of Jesus — and, under his care, learn and practice his ways.",
  },
  {
    name: "Dietrich Bonhoeffer",
    years: "1906–1945",
    role: "The Cost of Discipleship — martyr-theologian",
    body: "Bonhoeffer was a German Lutheran pastor, theologian, and member of the Confessing Church resistance to Nazism who was executed at Flossenbürg concentration camp weeks before the war ended. The Cost of Discipleship (Nachfolge, 1937) was written at a moment when the German church was accommodating itself to the Nazi state, and its central argument &mdash; that &ldquo;cheap grace&rdquo; (forgiveness without discipleship, grace without cost) is the mortal enemy of the church &mdash; carried the full weight of Bonhoeffer&rsquo;s context. He was not writing theology from a study; he was writing it with his life as the ultimate argument. His community at Finkenwalde, where he trained students for the Confessing Church, was itself an experiment in communal discipleship &mdash; sustained prayer, corporate confession, shared life. Life Together, his account of Finkenwalde, remains one of the most practical and searching guides to Christian community ever written.",
    quote:
      "When Christ calls a man, he bids him come and die. It may be a death like that of the first disciples who had to leave home and work to follow him, or it may be a death like Luther&rsquo;s, who had to leave the monastery and go out into the world. But it is the same death every time &mdash; death in Jesus Christ.",
  },
  {
    name: "Bill Hull",
    years: "b. 1946",
    role: "The Complete Book of Discipleship — practitioner",
    body: "Hull is one of the most prolific and practical writers on discipleship in contemporary evangelicalism, having spent decades studying the gap between what churches say they want (disciples) and what they actually produce (attenders). His books &mdash; The Complete Book of Discipleship, Jesus Christ Disciple Maker, and others &mdash; consistently press the same question: if making disciples is the church&rsquo;s central mandate, why do we organize almost everything else around attracting and managing crowds? Hull argues that the discipleship deficit is structural and intentional: the church has chosen crowd-ministry over disciple-making because crowds are impressive, measurable, and fund the budget, while discipleship is slow, relational, and produces no spectacle. His prescription is that every church leader must personally disciple a small number of people as Jesus did the Twelve, and that this is not a program but a way of life for leaders.",
    quote:
      "If you are not making disciples, you are not following Jesus. It&rsquo;s that simple. The Great Commission is not a program the church runs; it is the description of what the church is.",
  },
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "A Long Obedience in the Same Direction — pastor",
    body: "Peterson pastored Christ Our King Presbyterian Church in Bel Air, Maryland, for twenty-nine years before leaving to write and teach. His conviction that discipleship is fundamentally local, slow, and communal &mdash; rooted in a specific place and a specific people over years &mdash; put him at odds with a church culture that prized celebrity, novelty, and platform. A Long Obedience in the Same Direction, built on the Psalms of Ascent (Psalms 120-134), argues that the central virtue of the Christian life is precisely the kind of patient, persistent, undramatic faithfulness that consumer culture makes impossible. Peterson was also a master of spiritual direction in a broadly Protestant mode, and his Eat This Book, The Contemplative Pastor, and Under the Unpredictable Plant are among the most useful resources in print for pastors who want to be disciple-makers rather than religious entrepreneurs.",
    quote:
      "We live in a culture that has replaced &lsquo;follow me&rsquo; with &lsquo;choose me&rsquo;; that has replaced vocation with preference; that has replaced the long obedience with the quick fix. None of that is compatible with the Jesus who says, &lsquo;Follow me.&rsquo;",
  },
  {
    name: "Mike Breen",
    years: "b. 1964",
    role: "Building a Discipling Culture — practitioner",
    body: "Breen is a British church planter and leadership developer whose work with St. Thomas&rsquo; Church in Sheffield and later with 3DM (3 Dimensional Ministries) produced a highly reproducible framework for discipleship rooted in Jesus&rsquo;s method. His books Building a Discipling Culture and Multiplying Missional Leaders argue that Jesus operated through three relational circles &mdash; the crowd, the seventy-two, the twelve, and the three &mdash; and that healthy churches maintain the same concentric investment: wide mission alongside deep formation of a few. Breen&rsquo;s &ldquo;huddles&rdquo; &mdash; small groups of 4-8 people in intensive mutual discipleship &mdash; have been replicated in thousands of churches. His insistence that the primary question in any ministry is &ldquo;are you discipling people?&rdquo; rather than &ldquo;are you producing programs?&rdquo; has been both challenging and clarifying for church leaders across traditions.",
    quote:
      "If you make disciples, you always get the church. But if you make the church, you rarely get disciples. The church is a by-product of discipleship, not the other way round.",
  },
  {
    name: "N.T. Wright",
    years: "b. 1948",
    role: "After You Believe — virtue and discipleship",
    body: "Wright&rsquo;s contribution to discipleship thinking is primarily through the lens of virtue ethics and eschatology: in After You Believe (US title: Virtue Reborn), he argues that the New Testament&rsquo;s ethics are not primarily about rules (what should I do?) but about character (what kind of person should I become?), and that Christian discipleship is the sustained practice of habits that form the virtues of the new creation in the present age. Drawing on both Aristotle&rsquo;s account of virtue formation through practice and Paul&rsquo;s account of the community shaped by the Spirit, Wright argues that discipleship is the church&rsquo;s way of living forward into the new humanity that Jesus inaugurated. His accessible scholarship and his commitment to the integration of intellectual rigor with pastoral application have made him one of the most widely read and influential voices in contemporary Christianity.",
    quote:
      "The point of following Jesus isn&rsquo;t simply to secure your own private spiritual wellbeing or even your own &lsquo;salvation.&rsquo; The point is to become part of what God is doing to heal and renew the world, and to do so by becoming the kind of person through whom that work can flow.",
  },
];

const scriptures = [
  {
    ref: "Mark 1:17",
    text: "Follow me, and I will make you become fishers of men.",
    note: "The call is to become, not merely to believe or to know. Discipleship is a process of transformation, not a transaction of information. The promise is not what you will do for Jesus but what Jesus will do to you.",
  },
  {
    ref: "Luke 14:27",
    text: "Whoever does not bear his own cross and come after me cannot be my disciple.",
    note: "Carrying a cross meant one thing in first-century Judea: walking toward death. Jesus uses the most extreme image of his culture to describe what following him requires: a willingness to die to whatever competes with his Lordship.",
  },
  {
    ref: "2 Timothy 2:2",
    text: "What you have heard from me in the presence of many witnesses, entrust to faithful people who will be able to teach others also.",
    note: "Four generations of discipleship in one sentence: Paul, Timothy, faithful people, others. The method is not broadcast but chain — person to person, proximity to proximity, across the generations.",
  },
  {
    ref: "John 8:31-32",
    text: "If you abide in my word, you are truly my disciples, and you will know the truth, and the truth will set you free.",
    note: "Discipleship is defined here not by a one-time decision but by abiding — a continuous dwelling in, remaining in Jesus&rsquo;s word. The freedom promised is the fruit of sustained, daily immersion, not momentary encounter.",
  },
  {
    ref: "Romans 8:29",
    text: "For those whom he foreknew he also predestined to be conformed to the image of his Son.",
    note: "The goal of salvation is not merely escape from punishment but conformity to the image of Jesus. Discipleship is God&rsquo;s chosen means of achieving in us what he purposed from before creation: the restoration of the human image.",
  },
  {
    ref: "Matthew 28:19-20",
    text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you.",
    note: "The only imperative in the Great Commission is &ldquo;make disciples.&rdquo; Going, baptizing, and teaching are all participial — they describe how disciples are made. The church&rsquo;s central mandate is disciple-making, not church-building.",
  },
];

const videos = [
  { videoId: "K7JkKH8Q4hk", title: "What Is a Disciple? — The NT Meaning of Mathetes" },
  { videoId: "BoW5P3R1E2I", title: "The Cost of Discipleship — Bonhoeffer&rsquo;s Challenge" },
  { videoId: "KCIN3i4j5RM", title: "Dallas Willard: The Great Omission" },
  { videoId: "Pw1QZ4_p5ac", title: "How Jesus Made Disciples — The Method of the Master" },
  { videoId: "U3-5FxOhYjY", title: "Discipleship vs. Conversion: What the Church Is Missing" },
  { videoId: "1FSlT9AV8Cs", title: "2 Timothy 2:2 — The Chain of Discipleship" },
];

const relatedPages = [
  { href: "/christian-spiritual-gifts", label: "Spiritual Gifts" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/fruit-of-the-spirit", label: "Fruit of the Spirit" },
  { href: "/prayer", label: "Prayer" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/christian-community", label: "Christian Community" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianDiscipleshipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DSPEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [discipleOf, setDiscipleOf] = useState("");
  const [beingDiscipled, setBeingDiscipled] = useState("");
  const [disciplingOthers, setDisciplingOthers] = useState("");

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
    if (!discipleOf.trim()) return;
    const entry: DSPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      discipleOf: discipleOf.trim(),
      beingDiscipled: beingDiscipled.trim(),
      disciplingOthers: disciplingOthers.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setDiscipleOf("");
    setBeingDiscipled("");
    setDisciplingOthers("");
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
            Spiritual Formation
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Follow Me: The Way of Christian Discipleship
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          A disciple &mdash; mathetes &mdash; is not a student who attends lectures but an apprentice-companion who walks
          with a teacher close enough to learn by observation. When Jesus said &ldquo;follow me,&rdquo; he was not
          issuing a course enrollment but a summons: come close enough to learn from my life how to live yours.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the New Testament meaning of discipleship, the cost Jesus names clearly, the method
          he modeled relationally, Dallas Willard&rsquo;s diagnosis of the church&rsquo;s great omission, spiritual
          direction as discipleship, and the 2 Timothy 2:2 chain that passes the faith across generations.
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
              A Theology of Discipleship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture and Christian tradition on what it means to follow Jesus &mdash; from the
              cost and method of discipleship to the chain of transmission and the church&rsquo;s great omission.
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
                Every strand of discipleship theology in the New Testament converges on a relationship, not a program.
                Jesus formed the Twelve not through a curriculum but through proximity. Paul formed Timothy not through a
                correspondence course but through shared mission and life. The chain of 2 Timothy 2:2 is a chain of
                persons, each one having received from another and now giving to another. The church&rsquo;s recovery
                of discipleship is not a matter of finding the right program but of finding the willingness to be, and
                to invest in, an apprentice-companion in the way of Jesus.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Practices of a Disciple
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Discipleship requires both receiving formation and passing it on. These six practices address the
              relational, contemplative, and structural dimensions of a life genuinely ordered around following Jesus.
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
              Voices on Discipleship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six thinkers and practitioners whose work has most shaped how the contemporary church understands and
              practices the formation of disciples &mdash; from a philosopher-theologian to a martyr, from a pastor to a
              church-planter.
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
              Scripture on Discipleship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts on following Jesus &mdash; from the abrupt call at the lake to the cost of cross-bearing,
              the chain of 2 Timothy 2:2, and the goal of conformity to Christ&rsquo;s image.
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
                <strong style={{ color: TEXT }}>Reading suggestion:</strong> read the Gospel of Mark in one sitting
                &mdash; it takes about ninety minutes &mdash; paying attention not to the miracles but to the disciples:
                what they misunderstand, how they fail, and how Jesus responds. Mark&rsquo;s portrait of discipleship
                is the most unsentimental in the Gospels, and among the most encouraging: the people Jesus formed were
                consistently confused and sometimes cowardly, and he kept forming them anyway.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Discipleship Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name who you are a disciple of in terms of influence &mdash; whose life and faith has most formed you &mdash;
              how you are being discipled right now, and who you are discipling or investing in. Entries are saved
              privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="dsp-discipleof" style={labelStyle}>Who I am a disciple of</label>
                <textarea
                  id="dsp-discipleof"
                  value={discipleOf}
                  onChange={e => setDiscipleOf(e.target.value)}
                  rows={2}
                  placeholder="e.g. In terms of direct influence: my pastor for the last eight years; in terms of formative reading: Dallas Willard and Eugene Peterson..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Who has most shaped your understanding of following Jesus &mdash; whether living or historical, known to you personally or through their writing?</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="dsp-beingdiscipled" style={labelStyle}>How I&rsquo;m being discipled right now</label>
                <textarea
                  id="dsp-beingdiscipled"
                  value={beingDiscipled}
                  onChange={e => setBeingDiscipled(e.target.value)}
                  rows={2}
                  placeholder="e.g. Monthly meetings with a spiritual director; in a covenant group that meets weekly; reading through Willard&rsquo;s Renovation of the Heart..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>What is currently forming you? Be honest if the answer is &ldquo;nothing structured&rdquo; &mdash; that is important to name.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="dsp-disciplingothers" style={labelStyle}>Who I&rsquo;m discipling or investing in</label>
                <textarea
                  id="dsp-disciplingothers"
                  value={disciplingOthers}
                  onChange={e => setDisciplingOthers(e.target.value)}
                  rows={2}
                  placeholder="e.g. I meet with two younger men in my church monthly; I&rsquo;m trying to invest in my teenagers; I don&rsquo;t have anyone yet &mdash; this is a gap I want to address..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The 2 Tim 2:2 chain requires both a receiver and a transmitter. Who is receiving from you?</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!discipleOf.trim()}
                style={{
                  background: discipleOf.trim() ? GREEN : BORDER,
                  color: discipleOf.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: discipleOf.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your discipleship journal above &mdash; naming the chain you are part of.
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
                        <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Disciple Of
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.discipleOf}</p>
                      </div>
                      {entry.beingDiscipled && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Being Discipled By
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.beingDiscipled}</p>
                        </div>
                      )}
                      {entry.disciplingOthers && (
                        <div>
                          <div style={{ color: GREEN, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Discipling Others
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.disciplingOthers}</p>
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
              Teaching on the meaning of mathetes, the cost of discipleship, Dallas Willard&rsquo;s great omission, and
              the method Jesus used to form the Twelve.
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
            &ldquo;Follow me.&rdquo; The invitation is still open. It was given on a lakeshore to fishermen who left
            their nets, and it is given today to whoever is willing to come close enough to learn by proximity, to be
            changed by what they observe, and to pass what they have received to someone else &mdash; link by link,
            generation by generation, until he comes.
          </p>
        </div>
      </main>
    </div>
  );
}
