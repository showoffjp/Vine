"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "sermons" | "preachers" | "themes" | "voices";

const ERAS = ["All", "Historical", "20th Century", "Modern"];

const SERMONS = [
  {
    title: "Sinners in the Hands of an Angry God",
    preacher: "Jonathan Edwards",
    year: 1741,
    era: "Historical",
    color: "#F59E0B",
    theme: "Judgment / Hell / Urgency",
    verse: "Deuteronomy 32:35",
    why: "Preached in Enfield, Connecticut on July 8, 1741, this sermon became the most famous in American history. Edwards delivered it in a measured, quiet voice — yet listeners reportedly clutched their chairs and cried out in distress. It ignited the First Great Awakening. The vivid imagery of a spider dangling over fire was not designed to terrify for its own sake but to shake his congregation loose from complacency into genuine saving faith. Edwards believed people needed to truly grasp their spiritual danger before the grace of God would register.",
    key_quote: "The God that holds you over the pit of hell, much as one holds a spider, or some loathsome insect over the fire, abhors you, and is dreadfully provoked.",
    youtube: "https://youtube.com/results?search_query=sinners+in+hands+angry+god+jonathan+edwards+sermon",
    initials: "SAG",
  },
  {
    title: "I Have a Dream",
    preacher: "Martin Luther King Jr.",
    year: 1963,
    era: "20th Century",
    color: "#3B82F6",
    theme: "Justice / Freedom / Biblical Hope",
    verse: "Amos 5:24",
    why: "Delivered on the steps of the Lincoln Memorial on August 28, 1963, this is the most widely heard sermon in American history — though many hear it only as a political speech. King was a Baptist preacher whose rhetoric was saturated with biblical language and cadence. The vision of a day when 'justice rolls down like waters' is Amos 5:24. King understood himself as standing in the tradition of the Hebrew prophets. The sermon is a masterclass in the biblical theology of justice applied to a specific historical moment.",
    key_quote: "I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain... and the glory of the Lord shall be revealed.",
    youtube: "https://youtube.com/results?search_query=i+have+a+dream+mlk+full+speech",
    initials: "IHD",
  },
  {
    title: "The Expulsive Power of a New Affection",
    preacher: "Thomas Chalmers",
    year: 1817,
    era: "Historical",
    color: PURPLE,
    theme: "Sin / Heart Change / Sanctification",
    verse: "1 John 2:15",
    why: "Scottish preacher Thomas Chalmers argued that the only way to defeat sinful desire is not willpower but a greater desire — specifically, the overwhelming affection of knowing God. The soul cannot be emptied of its affections by sheer force; it can only be filled with something greater. This insight — expulsion through replacement, not suppression — became foundational for Reformed sanctification theology and has deeply influenced pastoral counseling. Tim Keller called it one of the most important sermons in church history.",
    key_quote: "The heart is not designed to simply rest in a vacuum — it must be filled, and if not filled with God, it will be filled with the world.",
    youtube: "https://youtube.com/results?search_query=expulsive+power+new+affection+thomas+chalmers",
    initials: "EPN",
  },
  {
    title: "The Weight of Glory",
    preacher: "C.S. Lewis",
    year: 1941,
    era: "20th Century",
    color: GREEN,
    theme: "Desire / Heaven / Longing for God",
    verse: "2 Corinthians 4:17",
    why: "Preached at the Church of St. Mary the Virgin, Oxford on June 8, 1941 — during the Second World War — C.S. Lewis delivered what many consider the greatest sermon of the 20th century. Lewis argued that our deepest longings are not for earthly satisfactions but for glory — to be known and valued by God himself. The famous line about carrying potentially glorified neighbors is the sermon's ethical conclusion: we have never spoken with a mere mortal. It permanently changed how many Christians think about desire, beauty, and the significance of other people.",
    key_quote: "There are no ordinary people. You have never talked to a mere mortal. Nations, cultures, arts, civilisations — these are mortal, and their life is to ours as the life of a gnat.",
    youtube: "https://youtube.com/results?search_query=weight+of+glory+CS+Lewis+sermon",
    initials: "WOG",
  },
  {
    title: "What Is the Gospel?",
    preacher: "Tim Keller",
    year: 2006,
    era: "Modern",
    color: "#EC4899",
    theme: "Gospel / Grace / Idolatry",
    verse: "Galatians 2:14",
    why: "Keller's signature sermon and the seed of his most important book, The Prodigal God. Preached at Redeemer Presbyterian in Manhattan, it reframes the parable of the prodigal son as a story about two lost sons — and argues that moralism is as much a rejection of grace as licentiousness. The father runs to both sons. This sermon crystallized what it means to preach grace to a culture of performance and shaped a generation of urban church planters who heard that the gospel is not merely the beginning of Christian life but the whole thing.",
    key_quote: "The gospel is that you are more sinful and flawed than you ever dared believe, but more accepted and loved than you ever dared hope.",
    youtube: "https://youtube.com/results?search_query=tim+keller+prodigal+god+sermon",
    initials: "WIG",
  },
  {
    title: "Blessed Are the Poor in Spirit",
    preacher: "D. Martyn Lloyd-Jones",
    year: 1959,
    era: "20th Century",
    color: "#10B981",
    theme: "Beatitudes / Humility / Kingdom",
    verse: "Matthew 5:3",
    why: "Welsh preacher Martyn Lloyd-Jones spent 13 years preaching through the Sermon on the Mount at Westminster Chapel in London. His first Beatitudes sermon became the foundation of what is widely considered the finest expository series on the Sermon on the Mount ever preached. Lloyd-Jones's method was surgical: he dismantled every superficial reading before reconstructing the text's actual demand. The phrase 'poor in spirit' does not mean literally poor or spiritually weak — it means those who have recognized their complete spiritual bankruptcy before God. The kingdom belongs to them alone.",
    key_quote: "The man who is poor in spirit is the man who has seen himself as he truly is — one who has nothing to commend himself to God.",
    youtube: "https://youtube.com/results?search_query=martyn+lloyd+jones+blessed+poor+in+spirit+sermon",
    initials: "BPS",
  },
  {
    title: "The Sovereignty of God in the Calamities of Life",
    preacher: "John Piper",
    year: 2001,
    era: "Modern",
    color: "#EF4444",
    theme: "Sovereignty / Suffering / 9/11",
    verse: "Romans 8:28",
    why: "Preached in the immediate aftermath of September 11, 2001, this sermon became one of the most-cited pastoral responses to national tragedy in modern American evangelicalism. Piper neither denied the horror of the event nor retreated from the biblical claim that God is sovereign over all things including calamity. He argued from Luke 13 (where Jesus addresses the tower of Siloam that killed 18) that national disasters are not punishment for peculiar wickedness but calls to repentance for all. The message brought both comfort and challenge to a congregation in shock.",
    key_quote: "The lesson of 9/11 is the same as the lesson of Siloam: repent, or you will all likewise perish. God is saying: wake up. Every day is borrowed time.",
    youtube: "https://youtube.com/results?search_query=john+piper+sovereignty+god+calamities+9+11+sermon",
    initials: "SGC",
  },
  {
    title: "How Should We Then Live?",
    preacher: "Francis Schaeffer",
    year: 1976,
    era: "20th Century",
    color: "#8B5CF6",
    theme: "Culture / Christian Worldview / Apologetics",
    verse: "Romans 12:2",
    why: "Though primarily a book and film series, Schaeffer's lectures at L'Abri Fellowship in Switzerland shaped an entire generation of Christian intellectuals who had given up on engaging secular culture. Schaeffer argued that ideas have consequences and that the West's loss of Christian foundations — what he called the loss of the Christian consensus — had produced nihilism, moral relativism, and the erosion of human dignity. His work prepared millions of Christians to engage intellectually and culturally rather than retreating into subculture.",
    key_quote: "Christianity is not just a series of truths but Truth — Truth about all of reality. It comprehends all of life.",
    youtube: "https://youtube.com/results?search_query=francis+schaeffer+how+should+we+then+live+lecture",
    initials: "HSL",
  },
  {
    title: "Jesus Is Precious Because His Promises Are Unbreakable",
    preacher: "John Piper",
    year: 2019,
    era: "Modern",
    color: "#F59E0B",
    theme: "Perseverance / Promises / Assurance",
    verse: "2 Corinthians 1:20",
    why: "One of Piper's most structurally elegant sermons, delivered at Passion 2019 before 65,000 students. It builds a cascading argument: every promise of God finds its Yes in Christ (2 Cor 1:20) → therefore the magnitude of God's promises reveals the magnitude of Christ → therefore to see how precious Jesus is, catalog his promises → every anxiety you have is answered by a specific promise of God, and that promise is guaranteed by Christ's blood. Forty thousand students heard the gospel reframed as a treasury of promises, not merely a moment of decision.",
    key_quote: "Every fear you have is met by a promise. Every promise is secured by the death of Jesus. Therefore Jesus is precious precisely in proportion to how afraid you are.",
    youtube: "https://youtube.com/results?search_query=john+piper+passion+2019+promises+sermon",
    initials: "JPP",
  },
  {
    title: "The Gospel in Six Words",
    preacher: "Alistair Begg",
    year: 2018,
    era: "Modern",
    color: "#00D4AA",
    theme: "Gospel / Atonement / Simplicity",
    verse: "1 Corinthians 15:3-4",
    why: "Begg's gift is making the ancient gospel fresh and graspable without reducing its weight. This sermon distills Paul's summary in 1 Corinthians 15:3-4 into six movements: Christ died, for our sins, according to the Scriptures, was buried, rose again, and appeared. Each word carries a freight of theological meaning that Begg unpacks with characteristic Scottish directness and warmth. The sermon is a model for what expository preaching of the gospel can be: utterly clear, emotionally honest, and theologically precise without being academic.",
    key_quote: "Paul says: let me tell you what I received, and let me tell you what I passed on. The gospel is not my invention. It is a gift I hold for others.",
    youtube: "https://youtube.com/results?search_query=alistair+begg+gospel+six+words+sermon",
    initials: "GSW",
  },
  {
    title: "A Christian View of Suffering",
    preacher: "R.C. Sproul",
    year: 1995,
    era: "Modern",
    color: "#3B82F6",
    theme: "Suffering / Providence / Job",
    verse: "Job 38:4",
    why: "Sproul's most-requested lecture on the problem of evil and human suffering, delivered as part of the Ligonier series. Rather than offering a theodicy that fully resolves the problem, Sproul walks through the book of Job to show that God's response to Job's suffering is not an explanation but a revelation — the whirlwind chapters (38-41) do not explain the why of suffering but demonstrate who God is. Sproul argues that encountering God's greatness doesn't answer our questions but dwarfs them. For thousands of suffering Christians, this was more comforting than any tidy answer would have been.",
    key_quote: "God did not answer Job's question. He answered Job. That is more than enough.",
    youtube: "https://youtube.com/results?search_query=RC+Sproul+Christian+view+of+suffering+sermon",
    initials: "CVS",
  },
  {
    title: "Missions Belongs to the Cross",
    preacher: "David Platt",
    year: 2013,
    era: "Modern",
    color: "#A855F7",
    theme: "Missions / Sacrifice / Global Church",
    verse: "Revelation 7:9-10",
    why: "Platt's sermon at the Together for the Gospel conference catalyzed a wave of radical missions commitment among young Reformed evangelicals. Drawing on Revelation 7:9-10 — the vision of every tribe, tongue, and nation worshipping — and Matthew 28:18-20, Platt argued that the unreached peoples of the world are not a peripheral missions concern but the very goal toward which Christ's atoning work is aimed. The blood of Christ was shed for every people group, and therefore the church cannot be comfortable until every people group has heard.",
    key_quote: "He has purchased with his blood people from every tribe and every language and every people and every nation. The cross demands global missions.",
    youtube: "https://youtube.com/results?search_query=david+platt+missions+belongs+cross+sermon",
    initials: "MBC",
  },
];

const GREAT_PREACHERS = [
  {
    id: 1,
    name: "John Chrysostom",
    era: "c. 347–407",
    style: "Expository",
    bio: "Archbishop of Constantinople and one of the greatest preachers in Christian history, Chrysostom (whose name means 'Golden Mouth') preached through entire books of the Bible in consecutive homilies — a practice almost unknown before him. His sermons on Matthew, John, Acts, and the Pauline epistles remain the most extensive patristic preaching corpus in existence. He combined rigorous textual exposition with sharp social application, famously attacking the wealthy citizens of Constantinople for ignoring the poor outside their doors.",
    famous_sermon: "Homilies on the Gospel of Matthew (90 sermons)",
    quote: "If you cannot find Christ in the beggar at the church door, neither will you find him in the chalice.",
  },
  {
    id: 2,
    name: "George Whitefield",
    era: "1714–1770",
    style: "Evangelistic",
    bio: "Perhaps the greatest outdoor evangelist in history, Whitefield preached to crowds of 20,000–80,000 across Britain and the American colonies without amplification — yet his voice carried clearly. He was the central figure of both the First Great Awakening in America and the Evangelical Revival in Britain. Benjamin Franklin, a skeptic, measured the range of Whitefield's unamplified voice and estimated it could reach 30,000 people. Whitefield preached the same sermon on the new birth over 1,000 times.",
    famous_sermon: "The Method of Grace (on Jeremiah 6:14)",
    quote: "Take care of your life; and the Lord will take care of your death.",
  },
  {
    id: 3,
    name: "Charles Haddon Spurgeon",
    era: "1834–1892",
    style: "Expository / Evangelistic",
    bio: "Known as the Prince of Preachers, Spurgeon preached to congregations of 6,000 at the Metropolitan Tabernacle in London every Sunday for 38 years. His sermons were stenographically recorded and published weekly — eventually filling 63 volumes (the largest body of preaching in history by a single author). He was a Calvinist who believed passionately in free offer evangelism, and his sermons model how deep doctrine and earnest evangelism can coexist. He also battled depression throughout his ministry — preaching with unfailing effectiveness while suffering intensely.",
    famous_sermon: "Sovereign Grace and Man's Responsibility",
    quote: "I am never better than when I am on the full stretch for God.",
  },
  {
    id: 4,
    name: "D. Martyn Lloyd-Jones",
    era: "1899–1981",
    style: "Expository",
    bio: "Welsh physician turned preacher, Lloyd-Jones served as minister of Westminster Chapel in London from 1939 to 1968. His 13-year series on the Sermon on the Mount and his 14-year series on Romans are regarded as the finest sustained expository preaching of the 20th century. Lloyd-Jones rejected what he called 'preachettes for Christianettes' — brief, topical, application-heavy talks — and argued that the primary work of the sermon is to expose the congregation to the Word of God so that they encounter God himself. His book Preaching and Preachers remains the definitive modern statement of Reformed expository preaching.",
    famous_sermon: "Blessed Are the Poor in Spirit (Matthew 5:3)",
    quote: "What is the chief end of preaching? I like to think it is this: it is to give men and women a sense of God and His presence.",
  },
  {
    id: 5,
    name: "Billy Graham",
    era: "1918–2018",
    style: "Evangelistic",
    bio: "The most widely heard preacher in human history, Billy Graham preached in person to an estimated 215 million people across 185 countries over six decades of crusade ministry. His simple, direct proclamation of the gospel — always concluding with an invitation to come forward — was unchanged from his first crusade to his last. Graham preached to every US president from Truman to Obama. His sermons were not theologically sophisticated by academic standards, but their clarity, sincerity, and consistent focus on Christ crucified and risen gave them a power that outlasted most more learned preaching.",
    famous_sermon: "How to Be Born Again",
    quote: "The Bible says. That settles it.",
  },
];

const SERMON_THEMES = [
  {
    id: 1,
    theme: "Justification by Faith",
    icon: "⚖️",
    description: "The Reformation's central discovery — that sinners are declared righteous before God not by works but through faith in Christ alone. This theme runs from Paul through Augustine to Luther to the present day as the hinge of Christian soteriology.",
    examples: ["Luther's Galatians sermons", "Spurgeon's 'Free and Full Forgiveness'", "Keller's 'The Prodigal God'"],
  },
  {
    id: 2,
    theme: "The Cross of Christ",
    icon: "✝️",
    description: "Preaching centered on the atonement — what happened at Calvary, why it was necessary, and what it accomplishes for sinners. The cross is the irreducible center of Christian proclamation, and how a preacher handles it reveals everything about their theology.",
    examples: ["Spurgeon's 'The Death of Christ'", "Stott's 'The Cross of Christ lectures'", "Platt's 'Missions Belongs to the Cross'"],
  },
  {
    id: 3,
    theme: "Repentance & Return",
    icon: "↩️",
    description: "The prophetic call to turn from sin and return to God — running from the Hebrew prophets through John the Baptist to the apostles. The best preaching in this mode is not moralistic but gospel-shaped: return is possible because God is a returning Father.",
    examples: ["Edwards' 'Sinners in the Hands of an Angry God'", "Chalmers' 'Expulsive Power of a New Affection'", "Lloyd-Jones' 'The Beatitudes'"],
  },
  {
    id: 4,
    theme: "Kingdom of God",
    icon: "👑",
    description: "Jesus' central proclamation — the reign of God is breaking into history through his person and work. Kingdom preaching holds together the already and the not-yet: the kingdom is here in Christ, and the kingdom is coming in fullness at his return.",
    examples: ["Ladd's 'The Gospel of the Kingdom'", "Wright's 'The Challenge of Jesus'", "Keller's 'King's Cross' series"],
  },
  {
    id: 5,
    theme: "Holy Spirit & Power",
    icon: "🔥",
    description: "Preaching on the person and work of the Holy Spirit — his role in regeneration, sanctification, gifting, and the empowering of the church for mission. This theme has been central in Pentecostal and charismatic preaching and is increasingly recovered across evangelical traditions.",
    examples: ["Lloyd-Jones' 'Revival' lectures", "Piper's 'Desiring God' series", "Graham's crusade messages on new birth"],
  },
  {
    id: 6,
    theme: "Second Coming",
    icon: "🌅",
    description: "The eschatological horizon of all Christian preaching — Christ will return, history will end, the dead will rise, and God will make all things new. The hope of the Second Coming has fueled missionary urgency, patient suffering, and radical generosity throughout church history.",
    examples: ["Piper's 'Don't Waste Your Life'", "Schaeffer's 'How Should We Then Live?'", "Platt's 'Radical' sermon series"],
  },
];

const VOICES_SER = [
  {
    id: 1,
    name: "John Chrysostom",
    era: "c. 347–407",
    context: "Archbishop of Constantinople; On the Priesthood",
    bio: "In his treatise On the Priesthood — written before he was ordained, as a justification for fleeing episcopal appointment — Chrysostom gave the first great theology of preaching in Christian history. He argued that the preacher's task is the most demanding of all human vocations: he must form souls, resist false teaching, endure unjust criticism, and preach with complete integrity while the crowd applauds or rejects. Chrysostom's own preaching lived up to his theory: his consecutive exposition of biblical books became the model for all later expository preaching.",
    quote: "The priest must be dignified but not proud, must be stern but not harsh, must be affable but not too familiar, must be bold but never reckless. He must spend his whole life as if in a contest, correcting the faults of others while keeping his own soul spotless.",
    contribution: "Established expository preaching — the consecutive, verse-by-verse exposition of entire biblical books — as the primary mode of Christian proclamation, and articulated the first systematic theology of preaching as a pastoral vocation.",
  },
  {
    id: 2,
    name: "Charles Haddon Spurgeon",
    era: "1834–1892",
    context: "Metropolitan Tabernacle, London; Lectures to My Students",
    bio: "Spurgeon's Lectures to My Students (1875) remains the most practically useful manual on preaching ever written. Unlike theoretical treatises, it addresses the real problems preachers face: dullness, affectation, failing voice, depression, losing the congregation's attention. Spurgeon was deeply practical because he himself preached under enormous pressure — to thousands, weekly, without notes — and understood from the inside what the work demanded. He believed that the preacher's entire person — voice, manner, heart, and life — is the instrument of proclamation.",
    quote: "A sermon is not an essay. It is a living thing, born in the heart of a man on fire for God, and delivered to men who need to hear God. If your heart is cold, your sermon will be a corpse.",
    contribution: "Produced the most practically influential manual on preaching in Protestant history, addressing the physical, psychological, and spiritual demands of the preaching vocation with characteristic warmth and directness.",
  },
  {
    id: 3,
    name: "D. Martyn Lloyd-Jones",
    era: "1899–1981",
    context: "Westminster Chapel, London; Preaching and Preachers",
    bio: "Lloyd-Jones's Preaching and Preachers (1971) is the definitive modern statement of Reformed expository preaching. Delivered as lectures at Westminster Theological Seminary, it is also a sustained polemic against every alternative: topical preaching, dialogue, drama, and what Lloyd-Jones contemptuously called 'the social approach.' He argued that preaching is the primary method ordained by God for the salvation and edification of souls, and that its decline is the chief cause of the church's weakness. The book is controversial, uncompromising, and massively influential.",
    quote: "The most urgent need in the Christian church today is true preaching; and as it is the greatest and most urgent need in the church, it is obviously the greatest need in the world also.",
    contribution: "Articulated the most rigorous modern defense of expository preaching as the normative form of Christian proclamation — and demonstrated it over 40 years of ministry that few have equaled.",
  },
  {
    id: 4,
    name: "Eugene Peterson",
    era: "1932–2018",
    context: "Christ Our King Presbyterian; The Contemplative Pastor",
    bio: "Peterson offered a counter-voice to the dominant model of preaching as performance or technique. In The Contemplative Pastor and Under the Unpredictable Plant he argued that the preacher's primary work is not communication strategy but attentiveness — to Scripture, to the congregation's actual lives, and to the God who speaks. Peterson was suspicious of preaching that aimed primarily at producing measurable results, and instead championed a slow, patient, pastoral approach to proclamation rooted in long relationships and deep biblical imagination.",
    quote: "The word that God speaks is not a concept or an idea. It is a person entering a life. Preaching is not explaining that truth — it is participating in that entry, making room for it in the lives of specific people in a specific place.",
    contribution: "Challenged the consumer-driven, technique-heavy model of contemporary preaching and recovered the pastoral and contemplative dimensions of proclamation — the preacher as patient witness rather than skilled communicator.",
  },
  {
    id: 5,
    name: "Timothy Keller",
    era: "1950–2023",
    context: "Redeemer Presbyterian, New York City; Preaching",
    bio: "Keller's Preaching: Communicating Faith in an Age of Skepticism (2015) addresses the specific challenge of preaching to secular, post-Christian audiences who do not share basic biblical assumptions. Drawing on Lloyd-Jones for the theology of preaching and on C.S. Lewis for the imaginative and cultural dimensions, Keller argues that every sermon must simultaneously ground its argument in the text, address the heart's deepest longings, apply the gospel as the solution to the real problem, and make Christ — not mere principles — the hero of the text.",
    quote: "Preaching is not about delivering information but about an encounter with the living God. If you preach and people leave only having learned things, you have not fully preached. They should leave having met Someone.",
    contribution: "Produced the most comprehensive modern manual on preaching to secular audiences, synthesizing Reformed exposition with cultural engagement and demonstrating how to make ancient texts speak with contemporary urgency.",
  },
];

export default function LandmarkSermonsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("sermons");
  const [era, setEra] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<number>(VOICES_SER[0].id);

  const filtered = SERMONS.filter(s => era === "All" || s.era === era);
  const sermon = SERMONS.find(s => s.title === selected);
  const voice = VOICES_SER.find(v => v.id === selectedVoice) ?? VOICES_SER[0];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎤</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Landmark Sermons</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            12 sermons that shaped Christian history &mdash; from Jonathan Edwards igniting revival to Tim Keller reframing grace for a secular city. Each with its context, significance, and where to find it.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 4, marginBottom: 28, width: "fit-content" }}>
          {(["sermons", "preachers", "themes", "voices"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t === "sermons" ? "Sermons" : t === "preachers" ? "Preachers" : t === "themes" ? "Themes" : "Voices"}
            </button>
          ))}
        </div>

        {/* SERMONS TAB */}
        {activeTab === "sermons" && (
          <>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ERAS.map(e => (
                <button key={e} onClick={() => setEra(e)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${era === e ? GREEN : BORDER}`, background: era === e ? `${GREEN}15` : "transparent", color: era === e ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {e}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: sermon ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((s, i) => (
                  <button key={i} onClick={() => setSelected(selected === s.title ? null : s.title)}
                    style={{ background: selected === s.title ? `${s.color}12` : CARD, border: `1px solid ${selected === s.title ? s.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}20`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontWeight: 900, fontSize: 10, flexShrink: 0 }}>
                        {s.initials}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{s.title}</span>
                          <span style={{ background: `${s.color}15`, color: s.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{s.era}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{s.preacher} · {s.year}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 11, flexShrink: 0 }}>{s.verse}</span>
                    </div>
                  </button>
                ))}
              </div>

              {sermon && (
                <div style={{ background: CARD, border: `1px solid ${sermon.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: `${sermon.color}20`, border: `1px solid ${sermon.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: sermon.color, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                      {sermon.initials}
                    </div>
                    <div>
                      <h2 style={{ color: sermon.color, fontWeight: 900, fontSize: 18, margin: "0 0 2px" }}>{sermon.title}</h2>
                      <div style={{ color: MUTED, fontSize: 12 }}>{sermon.preacher} · {sermon.year} · {sermon.era}</div>
                    </div>
                  </div>

                  <div style={{ background: `${sermon.color}08`, border: `1px solid ${sermon.color}20`, borderRadius: 10, padding: 14, marginBottom: 16 }}>
                    <div style={{ color: sermon.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{sermon.key_quote}&rdquo;</p>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    <span style={{ background: `${sermon.color}12`, color: sermon.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{sermon.theme}</span>
                    <span style={{ background: `${PURPLE}12`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{sermon.verse}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{sermon.why}</p>

                  <a href={sermon.youtube} target="_blank" rel="noopener noreferrer"
                    style={{ background: "#FF000015", border: "1px solid #FF000030", color: "#FF4444", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    ▶ Find on YouTube
                  </a>
                </div>
              )}
            </div>
          </>
        )}

        {/* PREACHERS TAB */}
        {activeTab === "preachers" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Great Preachers</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Five preachers whose proclamation shaped the church across centuries &mdash; from Chrysostom to Graham.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {GREAT_PREACHERS.map(p => (
                <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ color: TEXT, fontWeight: 900, fontSize: 18 }}>{p.name}</span>
                        <span style={{ background: `${PURPLE}18`, color: PURPLE, padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 800 }}>{p.style}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{p.era}</div>
                    </div>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: "6px 12px", flexShrink: 0 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 2 }}>FAMOUS SERMON</div>
                      <div style={{ color: TEXT, fontSize: 12 }}>{p.famous_sermon}</div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: "0 0 12px" }}>{p.bio}</p>
                  <blockquote style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 8px 8px 0", margin: 0, padding: "10px 14px" }}>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                      &ldquo;{p.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Great Sermon Themes</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Six recurring themes that define landmark preaching across church history.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {SERMON_THEMES.map(theme => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 28 }}>{theme.icon}</span>
                    <span style={{ color: TEXT, fontWeight: 900, fontSize: 17 }}>{theme.theme}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0, flex: 1 }}>{theme.description}</p>
                  <div>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>EXAMPLE SERMONS</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      {theme.examples.map((ex, i) => (
                        <div key={i} style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 6, padding: "4px 10px", color: TEXT, fontSize: 12 }}>
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES TAB */}
        {activeTab === "voices" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 6px" }}>Voices on Preaching</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                Five voices who have shaped how the church understands the vocation and practice of preaching.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 16, alignItems: "start" }}>
              {/* Left panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "sticky", top: 100 }}>
                {VOICES_SER.map(v => (
                  <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                    style={{ background: selectedVoice === v.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedVoice === v.id ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ color: selectedVoice === v.id ? TEXT : MUTED, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{v.era}</div>
                  </button>
                ))}
              </div>
              {/* Right panel */}
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 4 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{voice.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{voice.era} &middot; {voice.context}</div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "16px 0" }}>{voice.bio}</p>
                <blockquote style={{ background: `${PURPLE}0A`, border: `1px solid ${PURPLE}25`, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 8px 8px 0", margin: "0 0 16px", padding: "14px 18px" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </blockquote>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{voice.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
