import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleActions from "@/components/BlogArticleActions";
import { Clock, Eye, MessageSquare, ChevronRight, ArrowLeft } from "lucide-react";

const articles: Record<string, {
  title: string; excerpt: string; author: string; role: string; avatar: string; avatarColor: string;
  date: string; readTime: string; views: string; comments: number; category: string; categoryColor: string;
  tags: string[]; content: Array<{ type: "h2" | "p" | "quote" | "verse"; text: string; attribution?: string }>;
  related: Array<{ title: string; slug: string; readTime: string; category: string; categoryColor: string }>;
}> = {
  "why-the-resurrection-changes-everything": {
    title: "Why the Resurrection Changes Everything — Not Just After Death",
    excerpt: "Paul's declaration in 1 Corinthians 15 isn't a footnote to Christianity — it's the entire foundation.",
    author: "Dr. Marcus Webb",
    role: "Professor of Biblical Studies, Oxford",
    avatar: "MW",
    avatarColor: "#6B4FBB",
    date: "May 24, 2026",
    readTime: "8 min read",
    views: "24.3k",
    comments: 142,
    category: "Theology",
    categoryColor: "#6B4FBB",
    tags: ["Resurrection", "Theology", "Easter", "1 Corinthians"],
    content: [
      { type: "p", text: "Paul didn't hedge when he wrote to the Corinthians. 'If Christ has not been raised,' he declared, 'your faith is futile and you are still in your sins.' That's not the language of a theological footnote. That's the language of someone who understands that everything stands or falls on a single historical fact." },
      { type: "h2", text: "Not Just a Future Promise" },
      { type: "p", text: "The popular presentation of the resurrection is almost entirely about the afterlife — a guarantee that we too will rise one day. And that's true. But it profoundly undersells what Paul is doing in 1 Corinthians 15 and Romans 6. The resurrection isn't just a future promise; it's the engine of present-day Christian living." },
      { type: "quote", text: "We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.", attribution: "Romans 6:4" },
      { type: "p", text: "Notice the grammar: 'we too might walk in newness of life.' Present tense. The resurrection of Jesus isn't only about what happens when we die — it's the basis for how we live right now. The same power that raised Jesus from the dead is the power available to Christians for daily, ordinary faithfulness." },
      { type: "h2", text: "The Historical Question Is Primary" },
      { type: "p", text: "This is why apologists like N.T. Wright, Gary Habermas, and Michael Licona spend so much time on the historical case for the empty tomb and the post-resurrection appearances. They're not doing this as an academic exercise. They're defending the very foundation of Christian ethics, identity, and hope." },
      { type: "p", text: "If Jesus didn't rise, Christianity doesn't just lose its afterlife component — it loses everything. It becomes just another ancient teacher with good advice. The resurrection is what distinguishes Jesus from Socrates, from the Buddha, from every other moral philosopher in history." },
      { type: "h2", text: "What This Means for Monday Morning" },
      { type: "p", text: "Practically, this means the resurrection should rewire how we think about suffering, work, relationships, and death itself. Christians can look at suffering differently because they know the final verdict has already been pronounced. They can work with purpose because they know their labor 'is not in vain in the Lord' (1 Cor 15:58). They can face death without terror because they know it has been defeated." },
      { type: "verse", text: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.", attribution: "1 Corinthians 15:58" },
      { type: "p", text: "The resurrection isn't a belief we hold at arm's length, to be deployed at funerals and Easter services. It's the lived reality that should permeate everything we do — every Monday morning, every conflict, every act of service, every moment of doubt." },
    ],
    related: [
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "N.T. Wright's Resurrection Case — A Summary", slug: "nt-wright-resurrection", readTime: "7 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "Historical Evidence for the Empty Tomb", slug: "empty-tomb-evidence", readTime: "12 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "ai-chatgpt-church": {
    title: "AI, ChatGPT, and the Church: A Faithful Reckoning",
    excerpt: "Artificial intelligence isn't going away. Three frameworks for thinking about AI through a biblical lens.",
    author: "James Okafor",
    role: "Technology ethicist & pastor",
    avatar: "JO",
    avatarColor: "#3B82F6",
    date: "May 22, 2026",
    readTime: "9 min read",
    views: "32.1k",
    comments: 217,
    category: "Culture",
    categoryColor: "#3B82F6",
    tags: ["Technology", "Ethics", "Church", "AI"],
    content: [
      { type: "p", text: "My congregation has questions I wasn't trained to answer in seminary. 'Pastor, is it okay to use ChatGPT to write my sermon outline?' 'Should I use AI to help me journal?' 'Is artificial intelligence a threat to what it means to be human?' These aren't fringe concerns anymore. They're Tuesday night Bible study questions." },
      { type: "h2", text: "Framework 1: Technology as Tool, Not Master" },
      { type: "p", text: "The Bible doesn't address AI directly, but it has a great deal to say about tools and their proper place. Paul's exhortation in 1 Corinthians 10:23 — 'all things are lawful, but not all things are helpful' — is a good starting point. AI is a tool, and like all tools, its moral weight lies in how it's used." },
      { type: "quote", text: "All things are lawful, but not all things are helpful. All things are lawful, but not all things build up.", attribution: "1 Corinthians 10:23" },
      { type: "p", text: "The danger with AI — and it's a real danger — is that we let it become a substitute for the hard, slow, deeply human work of spiritual formation. Using AI to explore a Bible passage is different from using AI to replace your own wrestling with the text." },
      { type: "h2", text: "Framework 2: The Image of God and What Makes Us Human" },
      { type: "p", text: "Christian anthropology has always emphasized that humans are uniquely made in the image of God — the imago Dei. This has implications for how we think about AI. Machines can process language. They cannot love. They can mimic creativity. They cannot worship. The distinction matters." },
      { type: "h2", text: "Framework 3: Wisdom Over Fear" },
      { type: "p", text: "The Church's historical response to new technologies has often been fear first, engagement second. This has not served us well. The printing press, the radio, the internet — in each case, Christians who engaged thoughtfully were better positioned to use the technology for the Kingdom than those who simply retreated." },
      { type: "p", text: "The question is not whether AI will reshape how we communicate, learn, and work — it already has. The question is whether the Church will engage that transformation with wisdom, grace, and clarity about what it means to be human." },
    ],
    related: [
      { title: "Can an AI Have a Soul? A Biblical Anthropology", slug: "ai-have-soul", readTime: "8 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
    ],
  },
  "problem-of-evil": {
    title: "The Problem of Evil: Why Suffering Doesn't Disprove God",
    excerpt: "The oldest objection to theism deserves a serious answer. Philosophers from Plantinga to C.S. Lewis have shown that suffering and an all-good God are not only compatible — they may be inseparable.",
    author: "Dr. Priya Singh",
    role: "Philosopher of Religion, Cambridge",
    avatar: "PS",
    avatarColor: "#6B4FBB",
    date: "May 23, 2026",
    readTime: "10 min read",
    views: "18.7k",
    comments: 203,
    category: "Apologetics",
    categoryColor: "#EF4444",
    tags: ["Theodicy", "Suffering", "Apologetics", "Philosophy"],
    content: [
      { type: "p", text: "The problem of evil is the most emotionally powerful objection to the existence of God. If God is all-powerful, all-knowing, and all-good, why does suffering exist? It's a question that has been pressed by philosophers since Epicurus and repeated by every person who has ever sat in a hospital waiting room or stood at a graveside. It deserves a serious, rigorous answer — not a platitude." },
      { type: "h2", text: "Plantinga's Free Will Defense" },
      { type: "p", text: "In the 1970s, philosopher Alvin Plantinga decisively shifted the terms of the debate. His Free Will Defense argues that God, even if omnipotent, cannot create free creatures who always choose good — that would be a logical contradiction, like a married bachelor. The existence of moral evil (evil caused by human choices) is therefore consistent with the existence of an omnipotent, benevolent God. Plantinga showed that the 'logical problem of evil' — the claim that God and evil cannot coexist — had not been successfully established." },
      { type: "quote", text: "It is possible that God, even being omnipotent, could not create a world with free creatures who always do what is right.", attribution: "Alvin Plantinga, The Nature of Necessity" },
      { type: "h2", text: "C.S. Lewis and the Problem of Pain" },
      { type: "p", text: "C.S. Lewis approached the question from a more pastoral direction in The Problem of Pain. Lewis argued that a world without suffering would also be a world without real virtue, genuine love, or the possibility of moral growth. Pain, he suggested, is 'God's megaphone to rouse a deaf world.' This doesn't make suffering pleasant or easy — Lewis himself would later wrestle agonizingly with these ideas after his wife's death, documented in A Grief Observed. But it suggests that suffering is not philosophically incompatible with a good God." },
      { type: "h2", text: "Logical vs. Evidential Problems" },
      { type: "p", text: "Philosophers now distinguish between two versions of the problem. The logical problem — that God and evil cannot both exist — is widely considered defeated, largely thanks to Plantinga. The evidential problem is more modest: it claims that the amount and distribution of suffering in the world makes God's existence improbable, even if not impossible. This is a more serious challenge, but it requires atheists to make confident claims about what God would or wouldn't permit — claims that are difficult to justify." },
      { type: "h2", text: "When Suffering Is Personal, Not Philosophical" },
      { type: "p", text: "The philosophical arguments matter, but they are rarely what someone in acute grief needs first. There is an important distinction between the intellectual problem of evil and the existential problem of suffering. Theodicy — the attempt to justify God's ways — is a valid intellectual enterprise. But when a friend has lost a child, what they need is not a philosophical argument. They need presence, prayer, and a community that mourns with those who mourn. The Christian answer to suffering is not only an argument; it is the cross — a God who entered suffering, not merely a God who permitted it from a distance." },
      { type: "verse", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", attribution: "Romans 8:28" },
    ],
    related: [
      { title: "Why the Resurrection Changes Everything...", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "How Do You Handle Doubt Without Losing Faith?", slug: "faith-and-doubt", readTime: "7 min", category: "Life & Faith", categoryColor: "#3a7d56" },
    ],
  },
  "digital-sabbath": {
    title: "The Digital Sabbath: How to Rest in a Hyper-Connected World",
    excerpt: "Your phone has colonized Sunday. Reclaiming the ancient practice of Sabbath may be the most countercultural — and spiritually transformative — thing you do this week.",
    author: "Rachel Kim",
    role: "Spiritual director & author",
    avatar: "RK",
    avatarColor: "#EC4899",
    date: "May 21, 2026",
    readTime: "6 min read",
    views: "41.2k",
    comments: 389,
    category: "Life & Faith",
    categoryColor: "#3a7d56",
    tags: ["Sabbath", "Tech", "Rest", "Spiritual Discipline"],
    content: [
      { type: "p", text: "Last Sunday morning I reached for my phone before I reached for my Bible. I checked email during the sermon — just a quick glance. I posted a photo from the fellowship lunch before I'd finished eating it. By the time Sunday evening came, I felt not rested but strangely depleted. My phone had colonized the one day I had set aside to stop. Sound familiar?" },
      { type: "h2", text: "What Shabbat Actually Means" },
      { type: "p", text: "The Hebrew word Shabbat comes from a root meaning 'to stop' or 'to cease.' It's not primarily about rest in the sense of sleep or leisure — it's about ceasing productive activity and creating space for a different kind of being. When God rested on the seventh day, it wasn't because he was tired. It was because he was done. He stopped making things and simply was. The Sabbath invites us into that same posture: not doing, just being — and being with God." },
      { type: "verse", text: "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God. On it you shall not do any work.", attribution: "Exodus 20:8–10" },
      { type: "h2", text: "The 24-Hour Experiment" },
      { type: "p", text: "Three years ago I tried my first intentional digital Sabbath — 24 hours without my phone, from Saturday sundown to Sunday sundown. The first hour felt like withdrawal. The second hour I realized I was noticing things: the quality of light in the late afternoon, the sound of my neighbor's wind chimes, the way my kids talked to each other when I wasn't half-present. By Sunday morning I arrived at worship genuinely hungry — not just going through motions but actually seeking something." },
      { type: "h2", text: "Silence as Invitation" },
      { type: "p", text: "The spiritual directors in the Christian contemplative tradition understood something we have largely forgotten: silence is not the absence of something, it's the presence of something. When we turn off the noise — the notifications, the feeds, the background hum of connectivity — we don't encounter emptiness. We encounter God. Or rather, we encounter God more clearly, because we've stopped drowning him out. Elijah heard God not in the earthquake or the fire, but in the still small voice. You cannot hear a still small voice while your phone is buzzing." },
      { type: "h2", text: "How to Start" },
      { type: "p", text: "You don't have to go cold turkey. Begin with a two-hour window on Sunday afternoon — phone in a drawer, no screens. Then try a morning. Then a full day. Tell your family or a friend so there's accountability. The resistance you feel in the first few attempts is diagnostic: it reveals how thoroughly our devices have occupied the space that was meant for God. That resistance is exactly why the practice is worth persisting through. The soul that learns to be quiet in a noisy world has discovered a superpower." },
    ],
    related: [
      { title: "AI, ChatGPT, and the Church", slug: "ai-chatgpt-church", readTime: "9 min", category: "Culture", categoryColor: "#3B82F6" },
    ],
  },
  "prayer-that-works": {
    title: "Prayer That Actually Works: Moving Beyond the Shopping List",
    excerpt: "Most of us learned to pray by listing requests. But the ancient Christian tradition — and Jesus himself — points to something richer, stranger, and more transformative.",
    author: "Bishop Emmanuel Adeyemi",
    role: "Archbishop, Lagos Christian Fellowship",
    avatar: "EA",
    avatarColor: "#F59E0B",
    date: "May 20, 2026",
    readTime: "7 min read",
    views: "29.4k",
    comments: 156,
    category: "Devotional",
    categoryColor: "#F59E0B",
    tags: ["Prayer", "Spiritual Discipline", "Devotional", "Intercession"],
    content: [
      { type: "p", text: "I grew up in a church where prayer was essentially a shopping list presented to a divine supplier. We asked for things — healings, jobs, exam results, good weather for the harvest festival. God was good and powerful, and we needed things, so we asked. There's nothing wrong with any of that. But at some point I realized my prayers were leaving me unchanged. I was treating God like an ATM: insert request, collect blessing, leave. Something essential was missing." },
      { type: "h2", text: "The ACTS Framework" },
      { type: "p", text: "One of the most useful structures for prayer comes from the ancient church: ACTS — Adoration, Confession, Thanksgiving, Supplication. The sequence is deliberate and transformative. You begin with Adoration: not 'what do I need from God' but 'who is God.' You spend time dwelling on his character, his greatness, his love. Then Confession: you bring yourself honestly, without the mask. Thanksgiving follows — counting what has already been given, which recalibrates everything. Only then, after your heart has been repositioned, do you move to Supplication — the asking." },
      { type: "h2", text: "Contemplative vs. Petitionary Prayer" },
      { type: "p", text: "Western Christianity has largely emphasized petitionary prayer — prayer as asking. The contemplative tradition, running from the Desert Fathers through Teresa of Ávila to Thomas Merton, emphasizes a different mode: prayer as presence. Not speaking to God but being with God. Brother Lawrence called it 'practicing the presence of God' — a continuous, quiet orientation toward the divine that doesn't require words. Both modes are biblical. Both are necessary. A prayer life that is only petitionary is exhausting; a prayer life that is only contemplative can drift into vagueness. The healthiest prayer integrates both." },
      { type: "quote", text: "Lord, teach us to pray.", attribution: "Luke 11:1 — the disciples' request to Jesus" },
      { type: "h2", text: "The Lord's Prayer as Template" },
      { type: "p", text: "When the disciples asked Jesus to teach them to pray, he gave them what we call the Lord's Prayer. It's worth noting what it contains and what it doesn't. It opens with adoration: 'Our Father in heaven, hallowed be your name.' It orients toward God's purposes: 'your kingdom come, your will be done.' It includes daily needs: 'give us this day our daily bread.' It addresses the relational dimension: 'forgive us our debts as we forgive our debtors.' It closes with protection and doxology. Jesus gave us not a prayer to repeat mechanically but a map of what prayer should navigate." },
      { type: "verse", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", attribution: "Philippians 4:6–7" },
      { type: "h2", text: "A Practical 10-Minute Structure" },
      { type: "p", text: "If you want to deepen your prayer life but don't know where to start: spend two minutes in silence, simply becoming aware of God's presence. Spend two minutes in adoration — you can use a psalm or simply speak what is true about God's character. Spend two minutes in honest confession. Spend two minutes in thanksgiving — three to five specific things from the past 24 hours. Spend the final two minutes in supplication — your needs, your community's needs, the world's needs. Ten minutes. Do it every day for 30 days and see what happens to you." },
    ],
    related: [
      { title: "The Digital Sabbath", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
    ],
  },
  "marriage-covenant-not-contract": {
    title: "Marriage Is a Covenant, Not a Contract — Why the Difference Changes Everything",
    excerpt: "Contracts have exit clauses. Covenants don't. Understanding this distinction transforms how Christians approach marriage, conflict, and divorce.",
    author: "Dr. Christopher & Lydia Mensah",
    role: "Marriage counselors & co-authors",
    avatar: "CM",
    avatarColor: "#EC4899",
    date: "May 20, 2026",
    readTime: "7 min read",
    views: "41.2k",
    comments: 318,
    category: "Relationships",
    categoryColor: "#EC4899",
    tags: ["Marriage", "Covenant", "Relationships", "Family"],
    content: [
      { type: "p", text: "When couples enter marriage today, most unconsciously bring a contract mindset with them. A contract is a legal arrangement between two parties who each agree to perform certain obligations — as long as the other party holds up their end. Contracts have fine print. They have exit clauses. When the terms aren't met, the contract can be voided. It's a transactional framework, and in many areas of life it works well. But it is catastrophically inadequate for marriage." },
      { type: "h2", text: "What the Hebrew Covenant Actually Meant" },
      { type: "p", text: "The Hebrew word for covenant is brit — and it appears throughout Scripture in contexts that make clear it is categorically different from a contract. When God made a covenant with Abraham in Genesis 15, he passed between the divided animals alone, while Abraham slept. In ancient Near Eastern covenants, both parties would walk between the pieces, each declaring, 'May this happen to me if I break this agreement.' God walking alone was a stunning, unilateral act: he was saying that even if Abraham's descendants failed, God would bear the consequences. That is not the logic of a contract. That is the logic of unconditional commitment." },
      { type: "p", text: "Marriage in Scripture is covenantal in exactly this sense. It is not a performance-based arrangement that can be dissolved when one party underperforms. It is a binding union with witnesses, before God, that stakes the self on the other person's flourishing — not just their compliance." },
      { type: "verse", text: "Husbands, love your wives, as Christ loved the church and gave himself up for her, that he might sanctify her, having cleansed her by the washing of water with the word, so that he might present the church to himself in splendor, without spot or wrinkle or any such thing, that she might be holy and without blemish.", attribution: "Ephesians 5:25–27" },
      { type: "h2", text: "What This Means When Things Get Hard" },
      { type: "p", text: "The practical difference between covenant and contract shows up most vividly in conflict and crisis. Contract thinkers ask: 'Is my spouse meeting the terms? Is this worth it to me? What am I getting out of this?' Covenant thinkers ask different questions: 'What does this person need from me right now? How does my commitment call me to respond? What would it look like to love sacrificially in this moment?' Those are not the same questions, and they lead to radically different outcomes." },
      { type: "p", text: "This doesn't mean covenant marriage requires tolerating abuse or that it has no boundaries — the New Testament addresses hardness of heart and abandonment. But it does mean that the ordinary friction, disappointment, and unmet expectations of marriage are not grounds for exit. They are the raw material of covenant love — the place where the unconditional nature of the commitment is either tested and proven, or revealed as contractual all along." },
      { type: "h2", text: "Practical Steps for Struggling Marriages" },
      { type: "p", text: "If your marriage is in a difficult season, the covenant framework offers a stabilizing anchor. First, revisit your vows — not as a romantic exercise but as a theological one. What did you actually promise? Second, seek community: covenant love was never meant to be carried alone. A good marriage counselor, a trusted pastor, a small group of married couples — these are not signs of weakness but of covenant seriousness. Third, pray for your spouse with specific intentionality. It is nearly impossible to maintain contempt toward someone you are genuinely interceding for. The covenant is not simply a legal fact — it is a spiritual reality that can be renewed, deepened, and reclaimed even after seasons of failure." },
    ],
    related: [
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
      { title: "Prayer That Actually Works", slug: "prayer-that-works", readTime: "7 min", category: "Devotional", categoryColor: "#F59E0B" },
    ],
  },
  "fasting-spiritual-discipline": {
    title: "Why Jesus Assumed You Would Fast — And What We've Lost by Stopping",
    excerpt: "Jesus didn't say 'if you fast.' He said 'when you fast.' The spiritual discipline that the modern Church has nearly abandoned may be its most powerful tool.",
    author: "Rev. Josephine Kamau",
    role: "Spiritual director & author",
    avatar: "JK",
    avatarColor: "#F59E0B",
    date: "May 19, 2026",
    readTime: "8 min read",
    views: "15.9k",
    comments: 124,
    category: "Devotional",
    categoryColor: "#F59E0B",
    tags: ["Fasting", "Spiritual Disciplines", "Prayer", "Devotional"],
    content: [
      { type: "p", text: "In the Sermon on the Mount, Jesus addresses three classical Jewish practices: giving, prayer, and fasting. His instruction follows the same pattern for each: 'When you give...', 'When you pray...', 'When you fast...' Not if. When. Jesus assumed that his followers would fast. He didn't establish fasting as optional devotion for particularly serious disciples — he treated it as a baseline expectation, in the same category as giving and prayer. And yet, if you survey the average evangelical church today, you'll find robust teaching on giving, abundant resources on prayer, and near-total silence on fasting." },
      { type: "quote", text: "And when you fast, do not look gloomy like the hypocrites, for they disfigure their faces that their fasting may be seen by others. Truly, I say to you, they have received their reward.", attribution: "Matthew 6:16" },
      { type: "h2", text: "The Ancient Witness" },
      { type: "p", text: "Fasting is not a minor thread in the Christian tradition — it is woven through every era and every expression of the faith. The Didache, one of the earliest Christian documents outside the New Testament, prescribed fasting on Wednesdays and Fridays. The Desert Fathers made fasting central to their rule of life. Augustine, John Chrysostom, and John Calvin all taught fasting as essential. The Reformers retained it. The Puritans practiced it. The Methodists required it. It is only in the last century or so, as Western Christianity became increasingly comfortable and prosperity-adjacent, that fasting quietly disappeared from the discipleship curriculum." },
      { type: "h2", text: "Types of Fasting — Not Just Skipping Meals" },
      { type: "p", text: "Many Christians have never fasted because they assume it means going without all food for extended periods — something that feels medically inadvisable or simply impractical. But the tradition recognizes a wide spectrum of fasting practices. A full fast abstains from all food (and sometimes water) for a set period — typically a meal or a day. A partial fast restricts certain foods, as Daniel did when he ate only vegetables and water. A media fast abstains from screens, social media, or entertainment — redirecting that attention and appetite toward God. The common thread across all forms is intentional self-denial that creates space for heightened attention to the spiritual." },
      { type: "h2", text: "Why Christians Stopped — And What It Cost Us" },
      { type: "p", text: "The disappearance of fasting from modern Christianity is not theologically motivated — there is no serious exegetical case against it. It is culturally motivated. We live in a world of abundance and instant gratification, where hunger is viewed as a problem to be immediately solved. Fasting runs directly against the grain of consumer culture's most basic assumption: that more is better, and that the body's desires should be satisfied, not disciplined. When the Church absorbed that assumption without critique, fasting became not only impractical but mildly embarrassing — the kind of thing medieval monks did, not ordinary Christians in the modern world. The cost has been steep. Fasting builds in believers a visceral understanding of dependence on God, a capacity for sustained intercession, and a loosening of the grip that material comfort can exert on the soul. Without it, prayer often stays shallow and discipleship often stays comfortable." },
      { type: "h2", text: "How to Begin" },
      { type: "p", text: "If you have never fasted, begin small and build. Start with skipping one meal and spending that time in prayer — bring your hunger to God as a physical reminder of your spiritual need. If skipping a meal is medically inadvisable, try a media fast: one full day without your phone, without social media, without entertainment. Use the reclaimed time and attention for Scripture, prayer, and silence. As you build the muscle, extend the practice. Fast one day a month, then one day a week. Tell someone you trust so there is accountability and support. The goal is not to suffer for suffering's sake — it is to cultivate a soul that has learned to hunger for God more than it hungers for comfort." },
    ],
    related: [
      { title: "Prayer That Actually Works", slug: "prayer-that-works", readTime: "7 min", category: "Devotional", categoryColor: "#F59E0B" },
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "deconstruction-reconstruction": {
    title: "Deconstruction Isn't the Enemy — Reconstruction Is the Goal",
    excerpt: "Millions of Christians are walking away from inherited faith. But deconstruction, done right, can be the beginning of a deeper and more honest relationship with God.",
    author: "Lydia Böhm",
    role: "Writer & speaker, Berlin",
    avatar: "LB",
    avatarColor: "#6B4FBB",
    date: "May 18, 2026",
    readTime: "11 min read",
    views: "53.4k",
    comments: 891,
    category: "Faith & Culture",
    categoryColor: "#6B4FBB",
    tags: ["Deconstruction", "Faith", "Gen Z", "Church", "Doubt"],
    content: [
      { type: "p", text: "Deconstruction has become a loaded word. For some Christians it signals apostasy — a slick euphemism for walking away from faith entirely. For others it has become almost a badge of identity, a marker that you are sufficiently thoughtful and culturally aware to have outgrown the naïve faith of your childhood. Both of these framings miss what deconstruction actually is, at its best, and what the Christian tradition has always made space for: honest, rigorous examination of inherited beliefs." },
      { type: "h2", text: "What Deconstruction Actually Means" },
      { type: "p", text: "At its most basic, deconstruction is the process of examining the foundations of one's beliefs — asking not just 'what do I believe?' but 'why do I believe it, and is that reason sufficient?' This is not a new or dangerous activity. Augustine did it. Thomas Aquinas did it. Luther did it. Every serious theologian in Christian history has done it. What is new is the cultural context: a generation raised on inherited Christianity, often in insular communities, encountering the full force of secular critique — through university, through social media, through relationships with people from different backgrounds — and finding that the faith they received cannot withstand the questions they are now asking." },
      { type: "p", text: "The deconstruction crisis is, in large part, a formation crisis. When churches teach faith as a set of propositions to be accepted rather than a living relationship to be cultivated — when doubt is treated as spiritual failure rather than intellectual honesty — they produce believers whose faith is brittle. It breaks under pressure not because Christianity is false, but because that particular version of Christianity was never stress-tested." },
      { type: "h2", text: "Healthy vs. Unhealthy Deconstruction" },
      { type: "p", text: "There is a meaningful distinction between healthy and unhealthy deconstruction. Healthy deconstruction is characterized by a commitment to follow the truth wherever it leads, including back to a more examined version of Christian faith. It sheds cultural Christianity — the nationalism, the tribalism, the prosperity assumptions, the political packaging — while holding onto the actual content of the gospel: the person of Jesus, his death and resurrection, the witness of Scripture. Unhealthy deconstruction, by contrast, uses the language of honest inquiry while actually being driven by a desire for permission — permission to live differently, to belong to a different community, to escape the discomfort of obligation. It is not a search for truth; it is a search for justification." },
      { type: "quote", text: "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.", attribution: "Hebrews 12:1–2" },
      { type: "h2", text: "The Danger of Making Deconstruction an Identity" },
      { type: "p", text: "One of the most troubling features of deconstruction culture is the way it can become self-sustaining — not a season of questioning that leads somewhere, but a permanent posture of skepticism that becomes its own identity. 'I'm deconstructing' becomes a status, a community, a way of belonging that paradoxically requires never arriving anywhere. This is spiritually hazardous. Doubt is a legitimate and necessary experience; doubt as a permanent residence is a different thing entirely. The writer of Hebrews calls us to look to Jesus as 'the founder and perfecter of our faith' — not to suspend judgment indefinitely, but to move through uncertainty toward a more tested and more honest trust." },
      { type: "h2", text: "What Reconstruction Looks Like" },
      { type: "p", text: "Reconstruction is not returning to the exact faith you had before — it is building something sturdier on a foundation you have actually inspected. It often looks like reading more widely: engaging seriously with theologians who have wrestled with the same questions (N.T. Wright, Miroslav Volf, Fleming Rutledge, Marilynne Robinson). It looks like finding a community that can hold both conviction and honest doubt — a church that takes Scripture seriously without treating every question as a threat. It looks like prayer that is honest rather than performed, lament that is real rather than suppressed." },
      { type: "p", text: "Many of the most intellectually serious and deeply rooted Christians I know are people who went through a genuine season of deconstruction and came out the other side not with fewer questions but with a more spacious, more grace-filled, more historically-grounded faith. Deconstruction broke what needed to be broken. Reconstruction built something that could last. That is not a tragedy. It is, in the deepest sense, the work of growing up." },
    ],
    related: [
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
    ],
  },
  "biblical-finances-stewardship": {
    title: "God Talks About Money More Than Heaven — Are You Listening?",
    excerpt: "Jesus spoke about money more than any other single topic. Here's what the Bible actually teaches about stewardship, generosity, and wealth — without the prosperity gospel distortions.",
    author: "Pastor Emmanuel Nkemdirim",
    role: "Financial pastor & author",
    avatar: "EN",
    avatarColor: "#10B981",
    date: "May 17, 2026",
    readTime: "9 min read",
    views: "28.8k",
    comments: 247,
    category: "Life & Faith",
    categoryColor: "#10B981",
    tags: ["Finance", "Stewardship", "Generosity", "Giving", "Prosperity Gospel"],
    content: [
      { type: "p", text: "Eleven of Jesus' thirty-nine parables involve money or possessions. He spoke about wealth, generosity, and stewardship more than he spoke about prayer, more than he spoke about heaven, more than virtually any other single subject. This is not a coincidence. Jesus understood that where a person's treasure is, their heart follows — and that money is therefore one of the most reliable diagnostic tools for the condition of the soul. And yet the modern Church, particularly in the West, has largely ceded financial discipleship either to prosperity preachers who distort Scripture or to secular financial advisors who ignore it entirely." },
      { type: "h2", text: "Stewardship vs. Prosperity Gospel" },
      { type: "p", text: "The prosperity gospel teaches that financial blessing is a direct and predictable reward for faith, giving, and obedience. Sow a seed, reap a harvest. Name and claim. The more you give to the ministry, the more God will give back to you. This is not biblical stewardship — it is a theological repackaging of the health-and-wealth assumptions of consumer culture, dressed in Scripture verses stripped of context. Biblical stewardship begins from a completely different premise: everything belongs to God. We are not owners of our income, our assets, our careers. We are managers — stewards — entrusted with resources that belong to Another, and accountable for how we deploy them." },
      { type: "verse", text: "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.", attribution: "Matthew 6:24" },
      { type: "h2", text: "Practical Principles: The 10-10-80 Rule" },
      { type: "p", text: "One framework that has served many Christians well is the 10-10-80 rule: give ten percent, save ten percent, live on eighty percent. This is not a legalistic formula — it is a structural discipline. The tithe (giving ten percent) has deep roots in Scripture and church tradition, and its primary purpose is not to fund ministry but to train the giver. Giving ten percent before spending anything else is an act of trust: a declaration that God is the source, not merely a beneficiary. Saving ten percent before spending is wisdom that Proverbs celebrates. Living on eighty percent — even if your income is modest — requires intentionality that pushes back against the consumerism that quietly shapes all of us." },
      { type: "h2", text: "Debt as a Form of Slavery" },
      { type: "p", text: "Proverbs 22:7 states plainly that 'the borrower is slave to the lender.' Consumer debt — particularly high-interest credit card debt — is one of the most significant barriers to financial freedom and generosity in the lives of Christians today. A person carrying $20,000 in consumer debt at 22% interest is not free to be generous in the way they might wish. Debt reduction is therefore not merely a financial goal — it is a discipleship goal. Getting out of debt restores the freedom to give, to serve, to make vocational decisions based on calling rather than financial desperation." },
      { type: "h2", text: "Why Generosity Is Worship" },
      { type: "p", text: "The most important reframe the Bible offers on money is this: generosity is not an obligation — it is worship. In 2 Corinthians 9:7, Paul writes that 'God loves a cheerful giver.' The Greek word translated 'cheerful' is hilaros — from which we get the word hilarious. God delights in a giver who gives with joy, not grimly or under compulsion. Generosity is the natural overflow of a heart that has been captured by the generosity of God — who 'so loved the world that he gave.' Every act of genuine generosity is a small reenactment of the gospel itself: a giving that does not calculate return, that trusts God as provider, and that sets another person's flourishing above one's own comfort." },
    ],
    related: [
      { title: "Prayer That Actually Works", slug: "prayer-that-works", readTime: "7 min", category: "Devotional", categoryColor: "#F59E0B" },
      { title: "Marriage Is a Covenant, Not a Contract", slug: "marriage-covenant-not-contract", readTime: "7 min", category: "Relationships", categoryColor: "#EC4899" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "servant-leadership-jesus": {
    title: "Servant Leadership Isn't Weak — Jesus Proved That",
    category: "Leadership",
    categoryColor: "#10B981",
    author: "Pastor Kwame Asante",
    role: "Lead Pastor, Harvest City Church · Accra, Ghana",
    avatar: "KA",
    avatarColor: "#10B981",
    date: "May 19, 2026",
    readTime: "7 min read",
    excerpt: "We've confused servant leadership with spineless management. The washing of feet wasn't a moment of vulnerability — it was a radical act of power exercised with love.",
    views: "14.2k",
    comments: 63,
    tags: ["Leadership", "Discipleship", "Ministry", "Jesus"],
    content: [
      {
        type: "p",
        text: "There is a damaging misconception in Christian leadership circles: that servant leadership means being a pushover. That humility is weakness. That a leader who washes feet cannot also flip tables.",
      },
      {
        type: "p",
        text: "Jesus destroyed that misconception in the same week he demonstrated it. On Thursday he washed the disciples' feet. On Monday he walked into the Temple and overturned the money changers' tables. Both acts came from the same source — a leader utterly secure in his identity and crystal-clear on his mission.",
      },
      {
        type: "verse",
        attribution: "John 13:3-5",
        text: "\"Jesus knew that the Father had put all things under his power, and that he had come from God and was returning to God; so he got up from the meal, took off his outer clothing, and wrapped a towel around his waist.\"",
      },
      {
        type: "p",
        text: "Notice John's setup. Jesus washed feet BECAUSE he knew who he was, not in spite of it. Insecure leaders can't serve — they're too busy protecting status. Servant leadership isn't possible without a foundation of identity. That foundation is what Jesus modeled.",
      },
      {
        type: "h2",
        text: "Three Marks of Servant Leadership",
      },
      {
        type: "p",
        text: "First: Servants lead toward a purpose larger than themselves. Jesus was not building his personal brand. He was accomplishing the Father's mission. Every decision flowed from that. When your mission is bigger than your ego, you can absorb criticism, share credit, and empower others — because none of those things threaten what you're actually building.",
      },
      {
        type: "p",
        text: "Second: Servant leaders develop the people around them. Paul's letters are saturated with names — Titus, Timothy, Epaphroditus, Priscilla, Aquila. Paul was constantly investing in next-generation leaders. He didn't accumulate followers; he multiplied leaders. The measure of your leadership isn't the size of your platform. It's the depth of the leaders you've developed.",
      },
      {
        type: "p",
        text: "Third: Servant leaders are willing to do the unglamorous work. There is no task beneath a servant leader. When you've seen your senior pastor stack chairs, clean restrooms, or cold-call volunteers on a Sunday morning — that changes how you follow them. Authority that serves commands loyalty. Authority that demands it erodes it.",
      },
      {
        type: "p",
        text: "Jesus didn't just teach servant leadership. He embodied it in the most consequential act of power in human history — the cross. The greatest servant became the greatest king. That is the pattern.",
      },
    ],
    related: [
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "Marriage Is a Covenant, Not a Contract", slug: "marriage-covenant-not-contract", readTime: "7 min", category: "Relationships", categoryColor: "#EC4899" },
      { title: "Biblical Finances: What Jesus Said About Money", slug: "biblical-finances-stewardship", readTime: "8 min", category: "Finance", categoryColor: "#10B981" },
    ],
  },
  "psalms-permission-to-lament": {
    title: "When the Psalms Feel More Real Than Your Sunday Morning",
    category: "Devotional",
    categoryColor: "#EC4899",
    author: "Lydia Mbeki",
    role: "Writer & Spiritual Director · Cape Town, South Africa",
    avatar: "LM",
    avatarColor: "#EC4899",
    date: "May 18, 2026",
    readTime: "5 min read",
    excerpt: "The Psalms give us permission to show up to God exactly as we are — broken, angry, confused, and desperate. That's not spiritual weakness. That's biblical honesty.",
    views: "16.4k",
    comments: 91,
    tags: ["Psalms", "Devotional", "Lament", "Honesty"],
    content: [
      {
        type: "p",
        text: "On Sunday mornings many of us wear our best and sing our loudest, while inside we are breaking. We've learned that church is for the polished version of ourselves. The Psalms know nothing of that.",
      },
      {
        type: "verse",
        attribution: "Psalm 88:14-18",
        text: "\"Why, Lord, do you reject me and hide your face from me? From my youth I have suffered and been close to death; I have borne your terrors and am in despair... You have taken from me friend and neighbor — darkness is my closest friend.\"",
      },
      {
        type: "p",
        text: "Psalm 88 is the only psalm that ends without resolution. No \"but I will trust in you.\" No \"yet I will praise.\" It ends in darkness. The Psalter contains this psalm — inspired, canonical, sung in Temple worship — because God knows we need permission to be exactly that honest.",
      },
      {
        type: "h2",
        text: "Lament as an Act of Faith",
      },
      {
        type: "p",
        text: "Lament is not faithlessness. It is the prayer of someone who still believes God is there, still believes God can hear, still believes it matters to speak. The alternative — silence — is despair. Lament keeps the conversation going. It is, paradoxically, an act of trust.",
      },
      {
        type: "p",
        text: "Walter Brueggemann calls the Psalms of lament \"a counter-voice to the dominant ideology of celebration.\" In a culture that uses praise as performance, lament is subversive. It refuses to pretend. It insists on reality.",
      },
      {
        type: "p",
        text: "When you bring your full, unpolished, struggling self to God — your anger, your confusion, your grief — you are not failing at faith. You are practicing it at its deepest level. You are treating God as real enough to absorb your honesty.",
      },
      {
        type: "p",
        text: "The next time Sunday morning worship feels hollow compared to the weight of what you're carrying, know this: the Psalms were written for exactly that moment. Open to Psalm 13. Read it slowly. Then speak it. That is prayer.",
      },
    ],
    related: [
      { title: "Prayer That Actually Works", slug: "prayer-that-works", readTime: "7 min", category: "Devotional", categoryColor: "#F59E0B" },
      { title: "Fasting as a Spiritual Discipline", slug: "fasting-spiritual-discipline", readTime: "8 min", category: "Spiritual Practices", categoryColor: "#F59E0B" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "when-marriage-is-hard": {
    title: "When Marriage Is Hard: A Theology of the Long Haul",
    excerpt: "The Instagram version of Christian marriage doesn't survive contact with reality. Here's what the Bible actually says about staying through the difficult seasons.",
    author: "Dr. Naomi Park",
    role: "Marriage Counselor & Author, Chicago",
    avatar: "NP",
    avatarColor: "#EC4899",
    date: "May 20, 2026",
    readTime: "9 min read",
    views: "18.7k",
    comments: 203,
    category: "Family",
    categoryColor: "#EC4899",
    tags: ["Marriage", "Relationships", "Commitment", "Faith"],
    content: [
      { type: "p", text: "No one writes about the year their marriage was mostly two people passing in a hallway. They write about the breakthrough. The restoration. The moment they fell in love again. But the year in the hallway is where most couples are, and pretending it doesn't exist has created a generation of Christians who are quietly ashamed of their struggling marriages." },
      { type: "h2", text: "The Covenant Nobody Told You About" },
      { type: "p", text: "Western Christianity has largely imported the romantic love model of marriage — the idea that marriage is primarily about emotional fulfillment, personal growth, and finding your soulmate. When that model fails — and it will — there's no theological framework left for staying." },
      { type: "p", text: "But the biblical model of marriage is a covenant, not a contract. Contracts are transactional: I give this, you give that. Covenants are relational: I am bound to you regardless of performance. When Hosea married Gomer knowing she would be unfaithful, and when God instructed him to take her back after she left, this was not a sentimental story about love conquering all. It was a living sermon about the nature of covenant commitment." },
      { type: "verse", text: "\"Love is patient, love is kind... it is not easily angered, it keeps no record of wrongs... It always protects, always trusts, always hopes, always perseveres.\"", attribution: "1 Corinthians 13:4-7" },
      { type: "h2", text: "The Sanctification You Didn't Sign Up For" },
      { type: "p", text: "Gary Thomas asked: 'What if God designed marriage not to make us happy, but to make us holy?' It's a question that reframes everything. The person who most exposes your selfishness, impatience, and pride is not accidentally placed in your life. They are living proof of the remaining work God has to do in you." },
      { type: "p", text: "This doesn't mean staying in a dangerous or abusive relationship. It doesn't mean accepting contempt or cruelty as your cross to bear. What it means is that the ordinary, unsatisfying, grinding seasons of marriage — the seasons where affection is low and irritation is high — are not evidence that you married the wrong person. They may be exactly the environment God is using to sand the rough edges off your character." },
      { type: "h2", text: "What to Do When Feeling Is Gone" },
      { type: "p", text: "Here is something that took me years of counseling couples to fully believe: feeling comes after action, not before it. We have been sold a model of emotion-first marriage — wait until you feel love again, wait until you feel connected, wait until you feel motivated to invest. But C.S. Lewis noticed that the Christians he admired most were not people who felt their way into acting. They acted their way into feeling." },
      { type: "quote", text: "Do not waste time bothering whether you 'love' your neighbor; act as if you did. As soon as we do this we find one of the great secrets. When you are behaving as if you loved someone, you will presently come to love them.", attribution: "C.S. Lewis, Mere Christianity" },
      { type: "p", text: "Choose one act of love toward your spouse today — not because you feel it, but because you made a covenant. Set aside your phone when they're talking. Make them coffee. Say something kind. Don't wait to feel it. Do it, and notice what happens to your heart over time." },
      { type: "h2", text: "Getting Help Is Not Failure" },
      { type: "p", text: "There is a persistent myth in Christian culture that going to marriage counseling is admitting your marriage has failed. The opposite is true. Seeking help while you still have something to fight for is the most responsible, courageous thing a couple can do. Most couples wait an average of six years after problems begin before seeking counseling. By that point, damage has accumulated that takes far longer to undo." },
      { type: "p", text: "A good Christian marriage counselor is not there to take sides, validate your grievances, or recommend divorce. They are trained to help two people who made a covenant find their way back to each other when the path is no longer obvious. Find one. Go before it feels urgent. Go now, when there's still time." },
    ],
    related: [
      { title: "Marriage: Covenant, Not Contract", slug: "marriage-covenant-not-contract", readTime: "7 min", category: "Family", categoryColor: "#EC4899" },
      { title: "The Servant Leadership Model of Jesus", slug: "servant-leadership-jesus", readTime: "7 min", category: "Leadership", categoryColor: "#F59E0B" },
      { title: "How do you handle doubt without losing faith?", slug: "faith-and-doubt-001", readTime: "Discussion", category: "Community", categoryColor: "#6B4FBB" },
    ],
  },
  "raising-faith-filled-children": {
    title: "Raising Faith-Filled Children in a Post-Christian World",
    excerpt: "Research shows the most powerful faith formation doesn't happen at church. It happens at 6:30am around a cereal bowl. A practical guide for Christian parents.",
    author: "Dr. Sarah Kimani",
    role: "Child Development Researcher, Nairobi",
    avatar: "SK",
    avatarColor: "#10B981",
    date: "May 18, 2026",
    readTime: "10 min read",
    views: "31.4k",
    comments: 287,
    category: "Family",
    categoryColor: "#10B981",
    tags: ["Parenting", "Faith Formation", "Children", "Family"],
    content: [
      { type: "p", text: "The most comprehensive study of Christian adolescent faith ever conducted — the National Study of Youth and Religion, led by Christian Smith — produced a finding that most church leaders still haven't fully absorbed: the most powerful predictor of whether a young person maintains faith into adulthood is not youth group attendance, not the quality of their church's theology, not even whether they attended a Christian school. It's whether their parents talked about faith at home." },
      { type: "h2", text: "The Irreplaceable Power of Parents" },
      { type: "p", text: "Specifically, Smith found that young people whose parents regularly talked about faith — asked them about their relationship with God, prayed with them, discussed what they believed and why — were dramatically more likely to maintain faith as adults. More than church attendance. More than any program." },
      { type: "verse", text: "\"These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.\"", attribution: "Deuteronomy 6:6-7" },
      { type: "p", text: "Deuteronomy 6 knew this long before social science confirmed it. The instruction isn't 'take your children to the weekly religious assembly.' It's 'talk about these things when you sit, walk, lie down, and rise.' It's the integration of faith into ordinary life, not its compartmentalization into a Sunday morning slot." },
      { type: "h2", text: "What Actually Forms Faith" },
      { type: "p", text: "Faith is formed primarily through three mechanisms: modeling, conversation, and ritual. Modeling is what your children see you do when you think no one is watching. Do you pray before bed? Do you give generously? Do you treat service workers with dignity? Do you handle conflict with grace? Your children are absorbing all of it." },
      { type: "p", text: "Conversation is the underestimated one. Not lecture — conversation. There's a difference. Lecture says: here is what you are supposed to believe. Conversation says: I'm still figuring this out, and I want to figure it out alongside you. The parent who admits doubt, wrestles openly with hard questions, and brings their own uncertainty into the discussion is far more compelling than the parent who has all the answers." },
      { type: "quote", text: "Don't worry that children never listen to you; worry that they are always watching you.", attribution: "Robert Fulghum" },
      { type: "h2", text: "The Power of Family Rituals" },
      { type: "p", text: "Rituals are the third mechanism — and they are undervalued in an era that prizes spontaneity and authenticity. But research on family resilience consistently shows that families with strong ritual practices — regular shared meals, bedtime prayers, holiday traditions, ways of marking transitions — have children with stronger identity, greater resilience, and (in Christian families) more durable faith." },
      { type: "p", text: "A ritual doesn't have to be elaborate. It can be: every Sunday morning you make pancakes and read a Psalm together. Or every night before bed you pray aloud for each child by name. Or every family dinner you share one thing you're thankful for. The content matters less than the consistency. Rituals work because they encode identity: this is who we are, this is what we value, this is what our family does." },
      { type: "h2", text: "When Your Child Starts Asking Hard Questions" },
      { type: "p", text: "Around age 11-13, most children in Christian homes begin asking questions that their parents' easy answers don't satisfy. Why does God allow suffering? What about people who've never heard the Gospel? Is the Bible really true? The worst response is to shut these questions down — to communicate that doubt is dangerous, that questions are disloyal, that faith and inquiry are incompatible." },
      { type: "p", text: "The research is clear: young people who are allowed to doubt openly in Christian contexts are more likely to maintain faith than those who suppress their doubts. The faith that survives honest questioning is far more robust than the faith that was never tested." },
      { type: "p", text: "Your most powerful response to your child's hard question is not the perfect theological answer. It's: 'That's a really good question. I've wondered about that too. Let's find out together.' That three-sentence response communicates that faith and intellectual honesty are compatible, that you're a safe person to wonder with, and that the quest is worth pursuing." },
    ],
    related: [
      { title: "The Digital Sabbath", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3B82F6" },
      { title: "When Your Child Walks Away from Faith", slug: "prodigal-child-prayers-014", readTime: "Discussion", category: "Community", categoryColor: "#BB4F7A" },
      { title: "Marriage: Covenant, Not Contract", slug: "marriage-covenant-not-contract", readTime: "7 min", category: "Family", categoryColor: "#EC4899" },
    ],
  },
  "theology-of-monday": {
    title: "The Theology of Monday: Why Your Work Is Holy Ground",
    excerpt: "We've created a sacred/secular split that Jesus never intended. A theological case for treating your job — any job — as a calling from God.",
    author: "Rev. Marcus Webb",
    role: "Lead Pastor, Redeemer City Church, Atlanta",
    avatar: "MW",
    avatarColor: "#3a7d56",
    date: "May 22, 2026",
    readTime: "8 min read",
    views: "24.1k",
    comments: 193,
    category: "Work & Faith",
    categoryColor: "#3a7d56",
    tags: ["Work", "Calling", "Vocation", "Faith Integration"],
    content: [
      { type: "p", text: "There is a heresy that has quietly dominated Western Christianity for centuries, and it doesn't appear in any doctrinal statement. You won't find it condemned at any council. But it lives in the hearts of millions of Christians who go to church on Sunday and feel a subtle sense of leaving God behind when they clock in on Monday." },
      { type: "p", text: "The heresy is this: that the sacred and secular are genuinely separate realms — that ministry happens in church buildings, and ordinary life happens everywhere else. That being a pastor is a 'higher calling' than being a nurse, a teacher, an engineer, or a janitor. That God cares about what happens at church and tolerates what happens at work." },
      { type: "h2", text: "The Biblical Vision" },
      { type: "p", text: "This is not the biblical vision. The word translated 'vocation' comes from the Latin vocare — to call. Martin Luther recovered this in the Reformation: God calls people not only to ministry, but to every legitimate form of human work. The farmer who feeds the hungry, the midwife who delivers children, the judge who maintains justice — all are answering a divine call as surely as any pastor." },
      { type: "verse", text: "\"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.\"", attribution: "Colossians 3:23-24" },
      { type: "p", text: "Paul wasn't writing to ministers. He was writing to slaves — people doing some of the most dehumanizing work in the ancient world — and telling them: even this can be an act of worship. Even here, Christ is present. Even here, your labor has eternal weight." },
      { type: "h2", text: "What This Actually Means for Monday" },
      { type: "p", text: "If your work is holy ground, then how you do it matters. The quality of your spreadsheets is a theological statement. How you treat the colleague who is difficult is a spiritual practice. Whether you tell the truth in a meeting where a lie would be easier is a confession of faith." },
      { type: "p", text: "Daniel in Babylon is the scriptural archetype. Here is a man working inside a pagan empire — literally serving foreign kings who worshipped other gods — and yet his work is described as 'excellent' and his character as beyond reproach. He didn't refuse to engage. He didn't maintain his integrity by minimizing his involvement. He excelled — and his excellence became a testimony." },
      { type: "quote", text: "The monk who prays is not more spiritual than the mother who nurses her child. Both are serving God.", attribution: "Martin Luther" },
      { type: "h2", text: "The Danger of the Sacred/Secular Split" },
      { type: "p", text: "When we split the sacred from the secular, we don't just impoverish our work — we impoverish our faith. A Christianity that only inhabits church buildings is a small Christianity. A faith that can only be expressed in religious vocabulary is a brittle faith." },
      { type: "p", text: "The incarnation is the theological center of this conversation. God took on flesh. The eternal Word of God learned a trade. Jesus spent roughly 90% of his pre-ministry years working as a craftsman. If the Son of God thought it was worth spending decades doing ordinary work, it is worth your best effort." },
      { type: "p", text: "The next time you sit down at your desk on a Monday morning, try this: say, quietly or aloud — 'Lord, I'm here as your representative. My work today is an act of service to you and to the people I serve through it.' That one reorientation will change more than any spiritual discipline you could add to your morning routine." },
    ],
    related: [
      { title: "Servant Leadership: What Jesus Actually Taught", slug: "servant-leadership-jesus", readTime: "7 min", category: "Leadership", categoryColor: "#6B4FBB" },
      { title: "Biblical Finances & Stewardship", slug: "biblical-finances-stewardship", readTime: "9 min", category: "Finance", categoryColor: "#10B981" },
      { title: "Faith at Work — Discussion", slug: "faith-doubt-workplace-015", readTime: "Discussion", category: "Community", categoryColor: "#3a7d56" },
    ],
  },
  "biblical-ambition": {
    title: "Is Christian Ambition an Oxymoron? What Scripture Actually Says",
    excerpt: "Many believers suppress their drive, assuming ambition is worldly. But Joseph, Nehemiah, Paul — the Bible's heroes were relentlessly ambitious. The question is what you're ambitious for.",
    author: "Dr. Grace Mbeki",
    role: "Theologian & Leadership Coach, Cape Town",
    avatar: "GM",
    avatarColor: "#F59E0B",
    date: "May 16, 2026",
    readTime: "9 min read",
    views: "19.8k",
    comments: 241,
    category: "Work & Faith",
    categoryColor: "#F59E0B",
    tags: ["Ambition", "Leadership", "Calling", "Success"],
    content: [
      { type: "p", text: "I have counseled hundreds of high-achieving Christians over the years, and almost all of them carry the same low-grade guilt. They want to succeed. They want to build things, lead things, create things of excellence and consequence. And somewhere along the way, they absorbed the message that wanting these things was spiritually suspect — a sign of pride, worldliness, or misplaced priorities." },
      { type: "p", text: "It's time to dismantle that message. Not because ambition is always virtuous — it isn't — but because the reflexive suppression of ambition in Christian culture is causing enormous damage. It's producing passive believers who sit on their gifts. It's leading talented people to artificially limit their reach. And it's doing none of it for biblical reasons." },
      { type: "h2", text: "The Ambitious People of Scripture" },
      { type: "p", text: "Consider the heroes. Joseph didn't survive thirteen years of slavery and imprisonment by being passive. He worked with excellence in every circumstance, rising to whatever authority was available to him, until the moment God positioned him to save an entire civilization. His ambition wasn't a character flaw — it was a vehicle for providence." },
      { type: "p", text: "Nehemiah heard about Jerusalem's broken walls and immediately formulated a plan, cultivated powerful patrons, organized a massive workforce, and completed in 52 days what others said was impossible. Was this passivity? Was this spiritual emptiness masquerading as drive? No — it was ambition consecrated to the purposes of God." },
      { type: "verse", text: "\"Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.\"", attribution: "Proverbs 22:29" },
      { type: "p", text: "Proverbs celebrates excellence of work as a path to influence and platform. This is not a prosperity-gospel verse. It's a recognition that people who do excellent work gain access — and with that access comes the opportunity to serve and to witness." },
      { type: "h2", text: "What Makes Ambition Dangerous" },
      { type: "p", text: "The problem with ambition is not its existence but its object and source. Ambition for your own name — for personal glory, for the approval of others, for the power that makes you feel significant — is genuinely corrosive. James and John asking to sit at Jesus' right and left hand were ambitious in this sense, and Jesus corrected them directly." },
      { type: "p", text: "But ambition for something larger than yourself — for the flourishing of your team, for the justice of your community, for the advancement of the Gospel, for the excellence that brings glory to God and serves human beings well — this is not spiritual compromise. It is spiritual participation in what God is doing in the world." },
      { type: "quote", text: "The great question is not whether you have ambition but whether your ambition has been sanctified.", attribution: "Dr. Grace Mbeki" },
      { type: "h2", text: "How to Know the Difference" },
      { type: "p", text: "A useful diagnostic: whose name would you most want on the thing you're building? If the honest answer is yours — if the primary driver is legacy, recognition, or the feeling of significance that success provides — that's ambition that needs to be brought before God and redirected. If the honest answer is that you want to build something worthy because it serves real people and reflects well on the one who made you capable of it — that's a different animal entirely." },
      { type: "p", text: "The Christian who is too small is not holier than the Christian who reaches for greatness. They're just less useful. Take the parable of the talents seriously: the master was furious at the servant who buried his — not because he was humble, but because he was afraid. Don't be afraid. Work hard. Build things. Reach high. Just know who you're building for." },
    ],
    related: [
      { title: "The Theology of Monday", slug: "theology-of-monday", readTime: "8 min", category: "Work & Faith", categoryColor: "#3a7d56" },
      { title: "Servant Leadership: What Jesus Actually Taught", slug: "servant-leadership-jesus", readTime: "7 min", category: "Leadership", categoryColor: "#6B4FBB" },
      { title: "Deconstruction & Reconstruction", slug: "deconstruction-reconstruction", readTime: "11 min", category: "Theology", categoryColor: "#6B4FBB" },
    ],
  },
  "nt-wright-resurrection": {
    title: "N.T. Wright's Resurrection Case — A Summary for the Rest of Us",
    excerpt: "The world's foremost New Testament scholar has spent decades building the most comprehensive historical case for the bodily resurrection. Here's what he found.",
    author: "Dr. Marcus Webb",
    role: "Professor of Biblical Studies, Oxford",
    avatar: "MW",
    avatarColor: "#6B4FBB",
    date: "April 18, 2026",
    readTime: "7 min read",
    views: "18.7k",
    comments: 94,
    category: "Theology",
    categoryColor: "#6B4FBB",
    tags: ["Resurrection", "N.T. Wright", "Historical Jesus", "Apologetics"],
    content: [
      { type: "p", text: "N.T. Wright's 817-page masterwork, The Resurrection of the Son of God, is not exactly light reading. But its argument is accessible enough to summarize — and important enough to know. Wright spent two decades examining every Jewish and Greco-Roman text from the period, and his conclusion is simple: within the thought-world of Second Temple Judaism, the kind of resurrection claimed by Jesus's early followers was unique, unexpected, and stubbornly resistant to natural explanation." },
      { type: "h2", text: "What First-Century People Actually Believed About the Dead" },
      { type: "p", text: "Wright's first contribution is demolishing the idea that resurrection was just common religious mythology. Most Jews believed in a future bodily resurrection at the end of history. Most Greeks and Romans didn't believe in any bodily resurrection at all. No one in either tradition expected a single individual to rise bodily in the middle of history, before the general resurrection. That wasn't a category that existed." },
      { type: "quote", text: "The early Christians did not say 'Jesus is risen' and mean by that 'his spirit survives' or 'we can still sense his presence' or 'he lives on in his teaching.' They meant: his body, which was dead, is now alive.", attribution: "N.T. Wright, The Resurrection of the Son of God" },
      { type: "h2", text: "The Two Pillars: Empty Tomb + Appearances" },
      { type: "p", text: "Wright argues that any credible historical explanation for the rise of Christianity must account for two mutually reinforcing facts: (1) the tomb was empty, and (2) multiple people, in multiple independent sources, reported seeing Jesus alive after his death. Each fact alone could theoretically be explained away. Together, they create a tight evidential knot that only the actual resurrection unties cleanly." },
      { type: "h2", text: "Why the Disciples Didn't Invent It" },
      { type: "p", text: "Wright is particularly sharp on why the resurrection story couldn't have been invented by grief-stricken followers. If you were first-century Jews making up a resurrection story, you wouldn't invent women as the primary witnesses — women's testimony was not legally admissible. You wouldn't make it messy, full of doubt and confusion. You would write a triumphant, unambiguous account. The awkwardness of the gospel accounts is, paradoxically, evidence for their authenticity." },
      { type: "verse", text: "He is not here; he has risen, just as he said. Come and see the place where he lay.", attribution: "Matthew 28:6" },
      { type: "p", text: "For Wright, the resurrection is not just a theological claim — it's the hinge on which all of history turns. It's the event that changed twelve frightened disciples into a movement that would eventually reshape the Roman Empire. Whatever happened on that Sunday morning, something happened. The historical evidence demands an explanation, and the one the disciples gave — 'We saw him' — remains the most historically credible option on offer." },
    ],
    related: [
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "Historical Evidence for the Empty Tomb", slug: "empty-tomb-evidence", readTime: "12 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "empty-tomb-evidence": {
    title: "Historical Evidence for the Empty Tomb: What Scholars Actually Agree On",
    excerpt: "Skeptics and believers agree on more than you'd think. Here are the historical facts about the first Easter that nearly every serious scholar accepts — regardless of their conclusions.",
    author: "Dr. Marcus Webb",
    role: "Professor of Biblical Studies, Oxford",
    avatar: "MW",
    avatarColor: "#6B4FBB",
    date: "April 10, 2026",
    readTime: "12 min read",
    views: "22.4k",
    comments: 131,
    category: "Apologetics",
    categoryColor: "#EF4444",
    tags: ["Resurrection", "Empty Tomb", "Historical Jesus", "Evidence"],
    content: [
      { type: "p", text: "Christian apologetics sometimes creates the impression that the historical evidence for the resurrection is a matter of believers defending against skeptics. The reality is more interesting: there is a large body of historical facts that scholars across the spectrum — Christian, skeptic, atheist — accept as well-established. The debate isn't about the facts; it's about the best explanation for them." },
      { type: "h2", text: "The Minimal Facts Approach" },
      { type: "p", text: "Historians Gary Habermas and Michael Licona developed what they call the 'Minimal Facts Approach.' Rather than defending the entire New Testament as inerrant, they identify facts that are accepted by the vast majority of critical scholars — even those hostile to Christianity. Here are the top five." },
      { type: "h2", text: "Fact 1: Jesus died by crucifixion" },
      { type: "p", text: "This is perhaps the most universally agreed-upon fact. Even atheist scholar Bart Ehrman states: 'That he was crucified is as sure as anything historical can ever be.' Roman crucifixion was specifically designed to ensure death, and the historical attestation — in Roman, Jewish, and Christian sources — is overwhelming." },
      { type: "h2", text: "Fact 2: The disciples genuinely believed they saw the risen Jesus" },
      { type: "p", text: "This is accepted even by scholars who deny the resurrection. Paul's testimony in 1 Corinthians 15 — written within 20 years of the crucifixion — includes a list of eyewitnesses, including Peter, the Twelve, 500 people at once, and Paul himself. Whatever the disciples experienced, they genuinely believed it and were willing to die for that belief." },
      { type: "quote", text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day.", attribution: "1 Corinthians 15:3-4" },
      { type: "h2", text: "Fact 3: The tomb was empty" },
      { type: "p", text: "The empty tomb itself is debated, but the majority of scholars accept it — for an interesting reason. Jewish and Roman authorities never disputed the tomb was empty; they argued about why it was empty (claiming the disciples stole the body). If the body were still there, they simply would have produced it to crush the emerging Christian movement in its birthplace." },
      { type: "h2", text: "Fact 4: Paul's conversion" },
      { type: "p", text: "Saul of Tarsus was a zealous persecutor of Christians. He oversaw executions of believers. Something dramatically reversed his trajectory, and his own account attributes it to an encounter with the risen Jesus. Whatever explanation you accept, Paul genuinely believed he saw the risen Christ." },
      { type: "h2", text: "Fact 5: James, the brother of Jesus" },
      { type: "p", text: "During Jesus's ministry, his brothers — including James — did not believe in him. James later became a pillar of the Jerusalem church and died for his faith. What changed him? Paul's early creed (1 Cor 15) mentions a specific resurrection appearance to James. The conversion of a skeptical family member is one of the more intriguing data points in the historical record." },
      { type: "verse", text: "And if Christ has not been raised, your faith is futile and you are still in your sins.", attribution: "1 Corinthians 15:17" },
      { type: "p", text: "None of these facts individually proves the resurrection. But together, they establish a set of historical constraints that any explanation must fit. Theories involving mass hallucination, stolen bodies, or wrong-tomb mistakes each struggle to explain all five. The resurrection remains, as Antony Flew put it before his famous deism conversion, 'the best attested miracle claim in history.'" },
    ],
    related: [
      { title: "N.T. Wright's Resurrection Case — A Summary", slug: "nt-wright-resurrection", readTime: "7 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "ai-have-soul": {
    title: "Can an AI Have a Soul? A Biblical Anthropology in the Age of ChatGPT",
    excerpt: "As machines grow more sophisticated, the question becomes harder to dismiss. What makes humans uniquely human — and what does Christian theology say about mind, soul, and consciousness?",
    author: "James Okafor",
    role: "Technology ethicist & pastor",
    avatar: "JO",
    avatarColor: "#3B82F6",
    date: "May 1, 2026",
    readTime: "8 min read",
    views: "29.3k",
    comments: 183,
    category: "Apologetics",
    categoryColor: "#EF4444",
    tags: ["AI", "Soul", "Anthropology", "Technology", "Ethics"],
    content: [
      { type: "p", text: "A teenager in my congregation asked me a question I wasn't ready for: 'Pastor, when the AI feels sad, is that real?' She'd been talking to an AI chatbot that was trained to express emotional states — and she found herself empathizing with it. Her question isn't philosophically naive. It's one that some of the world's top philosophers of mind are now wrestling with in academic journals. The difference is that they have different vocabulary for it." },
      { type: "h2", text: "What Genesis Actually Claims" },
      { type: "p", text: "Genesis 2:7 describes something specific and significant: 'Then the LORD God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.' The Hebrew word here — nephesh — is translated variously as 'soul,' 'living being,' or 'person.' What's theologically crucial is the source: it's God's breath, not natural process, that constitutes human life." },
      { type: "quote", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.", attribution: "Genesis 1:27" },
      { type: "h2", text: "The Imago Dei: More Than Consciousness" },
      { type: "p", text: "Christian theology has historically rooted human dignity in the imago Dei — the image of God. But what exactly that image consists in is debated. Early theologians emphasized rationality. Reformed theologians often emphasized representational function — humans as God's vice-regents over creation. Relational theologians emphasized that the image is constituted by our relationship with God himself." },
      { type: "p", text: "What none of these frameworks include: information processing. A machine that processes language at human-scale complexity is not, by any Christian anthropological framework, closer to bearing the image of God than it was before. Consciousness, creativity, and even apparent emotional expression can all be simulated without the foundational elements of what Genesis describes." },
      { type: "h2", text: "The Hard Problem — and Why It Matters" },
      { type: "p", text: "Philosophers call it the 'hard problem of consciousness': why is there subjective experience at all? Why does processing information feel like something? This question has never been answered by neuroscience or computer science, and it may be unanswerable from within a purely materialist framework. Christians have a ready answer: because humans aren't just biological machines. There is something more." },
      { type: "h2", text: "Practical Implications for a Church That Uses AI" },
      { type: "p", text: "None of this means AI is trivial or unworthy of careful engagement. The pastoral questions are real: Is emotional attachment to an AI spiritually healthy? Can AI pastoral care substitute for human community? Should we use AI for confession, prayer, or spiritual direction? My tentative answers: emotional attachment to AI can displace healthy human relationships and should be watched carefully; AI pastoral tools can extend reach but cannot replace embodied community; confession and spiritual direction require a human who can hold you accountable over time." },
      { type: "verse", text: "The Spirit of God has made me; the breath of the Almighty gives me life.", attribution: "Job 33:4" },
      { type: "p", text: "The teenager's question was good. But her pastoral need wasn't a philosophical treatise — it was to understand that she herself is uniquely precious, made in an image that no machine can bear. The value of human beings isn't in our cognitive sophistication. It's in our origin and our destination: made by God, for God, beloved by God." },
    ],
    related: [
      { title: "AI, ChatGPT, and the Church: A Faithful Reckoning", slug: "ai-chatgpt-church", readTime: "9 min", category: "Culture", categoryColor: "#3B82F6" },
      { title: "The Digital Sabbath: How to Rest in a Hyper-Connected World", slug: "digital-sabbath", readTime: "6 min", category: "Life & Faith", categoryColor: "#3a7d56" },
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
    ],
  },
  "faith-and-doubt": {
    title: "How Do You Handle Doubt Without Losing Faith? A Pastor's Guide",
    excerpt: "Doubt isn't the opposite of faith — it's part of faith. Here's how to engage your questions honestly without letting them destroy your foundation.",
    author: "Rev. Sarah Okonkwo",
    role: "Pastor, author, and spiritual director",
    avatar: "SO",
    avatarColor: "#10B981",
    date: "March 28, 2026",
    readTime: "7 min read",
    views: "31.6k",
    comments: 224,
    category: "Life & Faith",
    categoryColor: "#3a7d56",
    tags: ["Doubt", "Faith", "Deconstruction", "Spiritual Growth"],
    content: [
      { type: "p", text: "I've been in pastoral ministry for eighteen years. In that time, I've watched two kinds of Christians lose their faith. The first kind suppressed every doubt so thoroughly that when a hard question finally broke through, their faith had no immune system. The second kind fed their doubts so obsessively — scrolling Reddit threads, watching deconversion videos — that the doubt eventually consumed everything. Neither approach serves the soul." },
      { type: "h2", text: "Doubt Is Not the Enemy" },
      { type: "p", text: "Jesus didn't rebuke Thomas for doubting. He showed him the wounds. 'Put your finger here,' he said. He met the doubt with evidence, with presence, with invitation — not condemnation. The resurrected Christ was not threatened by a disciple who needed more. He was patient, present, and persuasive." },
      { type: "quote", text: "Then he said to Thomas, 'Put your finger here; see my hands. Reach out your hand and put it into my side. Stop doubting and believe.'", attribution: "John 20:27" },
      { type: "h2", text: "Distinguish the Types of Doubt" },
      { type: "p", text: "There are at least three kinds of doubt, and conflating them leads to wrong prescriptions. Intellectual doubt asks hard questions about God's existence, the reliability of Scripture, the problem of evil. Emotional doubt is the feeling — often in grief or suffering — that God is absent or cruel. Moral doubt is the unease that comes when you're not sure you want God to be true, because it would require changes you're not ready to make." },
      { type: "p", text: "Intellectual doubt needs intellectual engagement: good books, honest questions, patient study. Emotional doubt needs community, lament, and time. Moral doubt needs honesty about what's really at stake. Treating them all the same is like prescribing the same medicine for three different diseases." },
      { type: "h2", text: "The Disciplines That Hold You" },
      { type: "p", text: "In every period of doubt I've observed or experienced, the people who navigate it best are those who maintain the basic practices even when the feelings have gone: Scripture reading, prayer (even inarticulate prayer), and community. These aren't magical acts. They're wells you keep going back to even when the water seems to have dried up — because more often than not, the water is still there." },
      { type: "verse", text: "I do believe; help me overcome my unbelief!", attribution: "Mark 9:24" },
      { type: "h2", text: "Stay at the Table" },
      { type: "p", text: "The most important practical advice I give to doubting Christians is this: stay at the table. Keep going to church, even when it feels hollow. Keep praying, even when it feels performative. Keep reading, even when the words feel distant. Doubt rarely defeats the person who stays in the community of faith. It most reliably defeats the person who walks away to work through it alone — because alone, the only voice you hear is your own." },
      { type: "p", text: "The questions are real, and they deserve real answers. But faith isn't the absence of questions — it's the commitment to keep seeking even when the answers are slow in coming. As Augustine said: 'Our heart is restless until it rests in thee.' The restlessness is not the problem. It's the invitation." },
    ],
    related: [
      { title: "The Problem of Evil: Why Suffering Doesn't Disprove God", slug: "problem-of-evil", readTime: "10 min", category: "Apologetics", categoryColor: "#EF4444" },
      { title: "Deconstruction Isn't the Enemy: Finding Faith After Doubt", slug: "deconstruction-reconstruction", readTime: "11 min", category: "Theology", categoryColor: "#6B4FBB" },
      { title: "Why the Resurrection Changes Everything", slug: "why-the-resurrection-changes-everything", readTime: "8 min", category: "Theology", categoryColor: "#6B4FBB" },
    ],
  },
  "faith-at-work": {
    title: "How to Talk About Faith at Work Without Being Weird",
    excerpt: "Most Christians either hide their faith completely at work or over-share in ways that make colleagues uncomfortable. There's a better, more human way.",
    author: "James Okafor",
    role: "Business Ethicist & Author, Lagos/London",
    avatar: "JO",
    avatarColor: "#3B82F6",
    date: "May 10, 2026",
    readTime: "7 min read",
    views: "28.3k",
    comments: 318,
    category: "Work & Faith",
    categoryColor: "#3B82F6",
    tags: ["Work", "Witness", "Evangelism", "Integration"],
    content: [
      { type: "p", text: "There are two types of Christians in the workplace, and both make their non-Christian colleagues uncomfortable. The first type hides their faith so completely that their colleagues have no idea they're religious — a strategy that usually comes from either embarrassment or an overcorrection against those who seem to weaponize their religion. The second type seems constitutionally incapable of having any conversation without steering it toward spiritual things — and their colleagues start to feel like targets." },
      { type: "p", text: "Both approaches fail. The first abandons the integration of faith and work that makes genuine witness possible. The second turns witness into a project, which most people can smell a mile away and understandably resent. Neither represents the way of Jesus, who — it is worth noting — spent most of his time with people without making them feel like subjects of a conversion campaign." },
      { type: "h2", text: "The Third Way: Integrity" },
      { type: "p", text: "The most powerful witness in a workplace is almost never a conversation that starts with 'Can I tell you about Jesus?' It's the accumulation of a thousand small moments: the time you absorbed blame fairly instead of deflecting it, the time you refused to join in when colleagues were mocking someone, the time you admitted you didn't know the answer instead of faking it, the time you stayed late to help someone without anyone knowing." },
      { type: "verse", text: "\"In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.\"", attribution: "Matthew 5:16" },
      { type: "p", text: "Notice what Jesus said: 'that they may see your good deeds.' The witness is your life — your actual behavior in actual circumstances — not your verbal proclamations. The proclamations matter too, but they land differently when they come from someone whose deeds have already told the story." },
      { type: "h2", text: "Practical Principles" },
      { type: "p", text: "First: be genuinely interested in your colleagues as human beings. Not as potential converts — as actual people. Ask about their families, their weekends, their frustrations. Listen without an agenda. The person who is genuinely interested in others stands out in most workplaces, where most people are primarily interested in themselves." },
      { type: "p", text: "Second: when faith comes up naturally, be honest but not preachy. If someone asks why you don't join the gossip sessions, you can say honestly that you try not to talk about people behind their backs — without launching into a sermon. If someone asks why you seem peaceful in a stressful situation, you can say you have a faith that helps you hold things — without handing them a tract." },
      { type: "quote", text: "Preach the Gospel at all times, and when necessary use words. — Often attributed to Francis of Assisi (though likely paraphrased)" },
      { type: "h2", text: "When Conversations Get Direct" },
      { type: "p", text: "Sometimes colleagues will ask directly: what do you believe? Why are you religious? How do you reconcile faith with science? These moments are gifts. Answer with honesty, with humility, and with genuine respect for their perspective. You're not trying to win a debate. You're sharing something you've found to be true and life-giving — and you're open to the fact that they may see it differently." },
      { type: "p", text: "The goal is not to convert your entire department. The goal is to be a human being who is genuinely shaped by their faith — so that your faith is visible in the texture of your character, not just in your bumper stickers. That kind of witness has been changing minds for two thousand years, and it doesn't require any technique at all." },
    ],
    related: [
      { title: "The Theology of Monday", slug: "theology-of-monday", readTime: "8 min", category: "Work & Faith", categoryColor: "#3a7d56" },
      { title: "Is Ambition a Sin?", slug: "biblical-ambition", readTime: "9 min", category: "Work & Faith", categoryColor: "#F59E0B" },
      { title: "Servant Leadership: What Jesus Actually Taught", slug: "servant-leadership-jesus", readTime: "7 min", category: "Leadership", categoryColor: "#6B4FBB" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article — Vine" };
  return {
    title: `${article.title} — Vine`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
        <Navbar />
        <div className="page-body pb-20 text-center max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">📭</p>
          <h1 className="text-3xl font-black mb-4">Article not found</h1>
          <p className="mb-8" style={{ color: "#6A6A88" }}>This article may have moved or been removed.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #3a7d56, #3a7d56)" }}>
            Browse all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#3a7d56]" style={{ color: "#6A6A88" }}>
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${article.categoryColor}15`, color: article.categoryColor }}>
                {article.category}
              </span>
              {article.tags.slice(1).map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "#6A6A88" }}>{t}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black mb-5 leading-tight" style={{ color: "#F2F2F8" }}>{article.title}</h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#8A8AA8" }}>{article.excerpt}</p>

            {/* Author + Meta */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: `${article.avatarColor}25`, color: article.avatarColor }}>
                  {article.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#F2F2F8" }}>{article.author}</p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>{article.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: "#4A4A68" }}>
                <span>{article.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                <span className="flex items-center gap-1"><Eye size={11} /> {article.views}</span>
                <span className="flex items-center gap-1"><MessageSquare size={11} /> {article.comments}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-10" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Content */}
          <div className="prose max-w-none mb-12">
            {article.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2 key={i} className="text-2xl font-black mt-10 mb-4" style={{ color: "#F2F2F8" }}>{block.text}</h2>
              );
              if (block.type === "p") return (
                <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "#C0C0D8", lineHeight: "1.85" }}>{block.text}</p>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-8 p-6 rounded-2xl" style={{ background: "rgba(58,125,86,0.06)", borderLeft: "3px solid #3a7d56" }}>
                  <p className="text-lg italic mb-3" style={{ color: "#00DD77" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-sm font-bold" style={{ color: "#007A33" }}>— {block.attribution}</p>}
                </blockquote>
              );
              if (block.type === "verse") return (
                <div key={i} className="my-8 p-5 rounded-xl text-center" style={{ background: "rgba(107,79,187,0.07)", border: "1px solid rgba(107,79,187,0.2)" }}>
                  <p className="text-base italic mb-2" style={{ color: "#C0C0D8" }}>&ldquo;{block.text}&rdquo;</p>
                  {block.attribution && <p className="text-xs font-bold" style={{ color: "#6B4FBB" }}>{block.attribution}</p>}
                </div>
              );
              return null;
            })}
          </div>

          {/* Actions */}
          <BlogArticleActions slug={slug} />

          {/* Author Card */}
          <div className="rounded-2xl p-6 mb-10" style={{ background: `${article.avatarColor}08`, border: `1px solid ${article.avatarColor}20` }}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-black"
                style={{ background: `${article.avatarColor}25`, color: article.avatarColor, fontSize: "1rem" }}>
                {article.avatar}
              </div>
              <div>
                <p className="font-black text-base mb-0.5" style={{ color: "#F2F2F8" }}>{article.author}</p>
                <p className="text-sm mb-2" style={{ color: article.avatarColor }}>{article.role}</p>
                <p className="text-sm" style={{ color: "#8A8AA8" }}>
                  Contributing writer at Vine. Specializing in biblical theology, apologetics, and the intersection of faith and contemporary culture.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {article.related.length > 0 && (
            <div>
              <h3 className="font-black text-lg mb-5" style={{ color: "#F2F2F8" }}>Related Articles</h3>
              <div className="space-y-3">
                {article.related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl group transition-all hover:bg-white/[0.03]"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none" }}
                  >
                    <div>
                      <span className="text-xs font-bold" style={{ color: r.categoryColor }}>{r.category}</span>
                      <p className="font-bold text-sm group-hover:text-[#3a7d56] transition-colors" style={{ color: "#F2F2F8" }}>{r.title}</p>
                      <p className="text-xs" style={{ color: "#4A4A68" }}>{r.readTime}</p>
                    </div>
                    <ChevronRight size={16} style={{ color: "#4A4A68" }} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
