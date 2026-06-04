"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "parables" | "themes" | "study" | "videos";

interface Parable {
  id: string;
  title: string;
  reference: string;
  kingdom: boolean;
  theme: string;
  audience: string;
  summary: string;
  characters: string[];
  keyTruth: string;
  application: string;
  verse: string;
  verseRef: string;
  commonMisreading: string;
  studyQuestions: string[];
}

const PARABLES: Parable[] = [
  {
    id: "prodigal-son",
    title: "The Prodigal Son",
    reference: "Luke 15:11-32",
    kingdom: false,
    theme: "Repentance & Grace",
    audience: "Tax collectors, sinners, Pharisees",
    summary: "A wayward son demands his inheritance early, squanders it in reckless living, and returns home in shame -- only to be met by a running, celebrating father. The older brother's resentment reveals a second kind of lostness.",
    characters: ["The Father (God)", "The Younger Son (the lost)", "The Older Son (the self-righteous)"],
    keyTruth: "The father's embrace is not earned -- it is lavished. Both sons misunderstand grace: one by presuming it would be withheld, the other by assuming he didn't need it.",
    application: "Examine which son you resemble today. Have you returned to the Father? Or are you standing outside the feast, arms crossed?",
    verse: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
    verseRef: "Luke 15:20",
    commonMisreading: "Many read this as only about salvation and miss the older son entirely. Jesus told it to the Pharisees -- the parable ends with the older son outside, and Jesus leaves the ending open.",
    studyQuestions: [
      "Why does the father run to meet the son before he can deliver his rehearsed speech?",
      "What does the father's robe, ring, and sandals signify in the cultural context?",
      "Why does Jesus leave the older son's story unresolved?",
      "How does this parable answer the Pharisees' criticism in Luke 15:2?",
    ],
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan",
    reference: "Luke 10:25-37",
    kingdom: false,
    theme: "Love of Neighbor",
    audience: "An expert in the law",
    summary: "A man beaten by robbers is passed by a priest and a Levite, then rescued by a despised Samaritan who pays for his care. Jesus tells this to redefine 'neighbor' and expose religious piety without compassion.",
    characters: ["The Wounded Man", "The Priest", "The Levite", "The Samaritan", "The Innkeeper"],
    keyTruth: "Proximity does not equal compassion. The 'unclean' outsider demonstrated covenant love better than the religious insiders. Jesus asks not 'who is my neighbor?' but 'who acted as neighbor?'",
    application: "Who have you walked past? The parable demands action: 'Go and do likewise.'",
    verse: "But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.",
    verseRef: "Luke 10:33",
    commonMisreading: "Often read as a simple morality tale about being kind. The racial/ethnic shock of a Samaritan as the hero would have been deeply offensive to the original Jewish audience -- that's the point.",
    studyQuestions: [
      "Why would the original audience be shocked that the hero was a Samaritan?",
      "What excuses might the priest and Levite have had (ritual purity laws)?",
      "How does this parable challenge the lawyer's original question?",
      "In what ways is Jesus himself the Good Samaritan in our story?",
    ],
  },
  {
    id: "sower",
    title: "The Sower and the Soils",
    reference: "Matthew 13:1-23, Mark 4:1-20, Luke 8:4-15",
    kingdom: true,
    theme: "Hearing & Receiving the Word",
    audience: "Large crowds, then disciples",
    summary: "A farmer scatters seed on four types of ground: a path (birds eat it), rocky soil (no roots), thorny ground (choked out), and good soil (fruitful). Jesus explains that the soils represent how people receive God's word.",
    characters: ["The Sower (Jesus/the preacher)", "The Soils (types of hearers)"],
    keyTruth: "The problem is never with the seed (God's word) but with the condition of the soil (the heart). Fruitfulness is the evidence of genuine reception.",
    application: "Diagnose your soil: is your heart hard, shallow, distracted, or receptive? What needs to change for the word to take deep root?",
    verse: "But the seed on good soil stands for those with a noble and good heart, who hear the word, retain it, and by persevering produce a crop.",
    verseRef: "Luke 8:15",
    commonMisreading: "The parable is often treated as a tool for evangelists to blame unfruitfulness on hearers. Jesus used it to prepare his disciples for disappointment in ministry -- not every proclamation will 'work.'",
    studyQuestions: [
      "Which soil type is most dangerous, and why?",
      "What are the 'thorns' choking out faith in your own life?",
      "Why did Jesus teach in parables (see Matthew 13:10-17)?",
      "How does this parable give hope AND warning simultaneously?",
    ],
  },
  {
    id: "talents",
    title: "The Parable of the Talents",
    reference: "Matthew 25:14-30",
    kingdom: true,
    theme: "Stewardship & Faithfulness",
    audience: "Disciples (Olivet Discourse)",
    summary: "A master entrusts three servants with different amounts before departing. Two invest and double their amounts; one buries his out of fear. The master returns and rewards faithful stewardship -- and harshly judges the fearful servant.",
    characters: ["The Master (God/Christ returning)", "The Five-Talent Servant", "The Two-Talent Servant", "The One-Talent Servant"],
    keyTruth: "What we have been given is not ours to hoard but to multiply. Fear-based inaction is not faithfulness -- it is an insult to the master's character.",
    application: "What gifts, time, or resources has God entrusted to you? Are you investing them or burying them?",
    verse: "His master replied, 'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.'",
    verseRef: "Matthew 25:21",
    commonMisreading: "Often read as endorsement of financial investment or capitalistic reward. The 'talents' are abilities/gifts, and the parable is eschatological -- about accountability at Christ's return, not wealth creation.",
    studyQuestions: [
      "Why does the master give different amounts to different servants?",
      "What was the one-talent servant afraid of, and was his view of the master accurate?",
      "What does 'faithfulness in little' look like practically?",
      "How does this parable connect to the broader Olivet Discourse context?",
    ],
  },
  {
    id: "lost-sheep",
    title: "The Lost Sheep",
    reference: "Luke 15:3-7, Matthew 18:12-14",
    kingdom: false,
    theme: "God's Pursuit of the Lost",
    audience: "Pharisees and teachers of the law",
    summary: "A shepherd leaves ninety-nine sheep to search for one lost sheep. When found, he carries it home rejoicing and calls neighbors to celebrate. Jesus says there is more joy in heaven over one repentant sinner than over ninety-nine who don't need to repent.",
    characters: ["The Shepherd (God/Jesus)", "The Lost Sheep (the sinner)", "The Ninety-Nine (the righteous)"],
    keyTruth: "God does not sit in heaven waiting for sinners to return -- he actively seeks the lost. The joy in heaven at repentance is not relief but exuberant celebration.",
    application: "You are not too lost to be found. And if you are found, do you share God's heart for those still missing?",
    verse: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
    verseRef: "Luke 15:7",
    commonMisreading: "The 'ninety-nine who don't need to repent' is ironic -- it describes the Pharisees who think they're fine. No one is actually beyond needing repentance.",
    studyQuestions: [
      "What does leaving the ninety-nine suggest about God's risk-taking love?",
      "How does carrying the sheep (not driving it) reflect the nature of redemption?",
      "What is the significance of the communal celebration?",
      "How does this parable directly address the Pharisees' complaint in Luke 15:2?",
    ],
  },
  {
    id: "mustard-seed",
    title: "The Mustard Seed",
    reference: "Matthew 13:31-32, Mark 4:30-32, Luke 13:18-19",
    kingdom: true,
    theme: "Kingdom Growth",
    audience: "Crowds",
    summary: "The kingdom of heaven is like a mustard seed -- the smallest of seeds -- that grows into the largest of garden plants, a tree large enough for birds to nest in its branches.",
    characters: ["The Sower", "The Seed (Kingdom)", "The Tree (mature Kingdom)"],
    keyTruth: "Do not despise small beginnings. The kingdom starts with what looks insignificant (a baby in a manger, a handful of disciples) and becomes something vast and sheltering.",
    application: "Where do you see God doing something that looks too small to matter? Trust the growth to him.",
    verse: "Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants and becomes a tree, so that the birds come and perch in its branches.",
    verseRef: "Matthew 13:32",
    commonMisreading: "Sometimes allegorized to mean the 'birds' are evil forces infiltrating the church. In Jewish imagery, birds nesting in a tree represents Gentile nations finding shelter -- kingdom expansion.",
    studyQuestions: [
      "Why would Jesus choose the mustard seed specifically?",
      "What does the shelter motif from Daniel 4 suggest about the Kingdom?",
      "How does the disciples' experience fit this parable (11 men to global church)?",
      "What 'mustard seed' moments do you see in your faith community?",
    ],
  },
  {
    id: "ten-virgins",
    title: "The Ten Virgins",
    reference: "Matthew 25:1-13",
    kingdom: true,
    theme: "Readiness for Christ's Return",
    audience: "Disciples (Olivet Discourse)",
    summary: "Ten virgins wait for a bridegroom. Five are wise and bring extra oil; five are foolish and run out. The bridegroom is delayed; the foolish go to buy more oil and miss the arrival. The door is shut. 'Watch, therefore.'",
    characters: ["The Bridegroom (Christ)", "Five Wise Virgins (prepared believers)", "Five Foolish Virgins (unprepared)"],
    keyTruth: "Spiritual preparation cannot be borrowed at the last moment. The oil cannot be shared -- each person's relationship with Christ is non-transferable.",
    application: "Is your lamp lit and your oil full? Are you living in daily readiness for Christ's return, or assuming you can get ready later?",
    verse: "Therefore keep watch, because you do not know the day or the hour.",
    verseRef: "Matthew 25:13",
    commonMisreading: "The wise virgins refusing to share is often seen as selfish. But the oil represents something internal (faith, the Spirit) that cannot literally be transferred -- this is the parable's point.",
    studyQuestions: [
      "What does the 'oil' represent in your interpretation?",
      "Why is the delay important to the parable's meaning?",
      "What does 'I don't know you' reveal about the relationship required?",
      "How does this parable balance grace with responsibility?",
    ],
  },
  {
    id: "workers-vineyard",
    title: "Workers in the Vineyard",
    reference: "Matthew 20:1-16",
    kingdom: true,
    theme: "Grace vs. Merit",
    audience: "Disciples (after rich young ruler)",
    summary: "A landowner hires workers throughout the day -- some at dawn, some at 9am, noon, 3pm, and 5pm. At day's end, all receive the same wage. Early workers complain; the owner says he can be generous as he chooses.",
    characters: ["The Landowner (God)", "Early Workers (legalists)", "Late Workers (latecomers to faith)"],
    keyTruth: "God's grace is not calculated by our merit or seniority. The kingdom is not about earning -- it is about the master's scandalous generosity.",
    application: "Have you resented God's grace toward others? Have you assumed your longevity of service earns you more favor?",
    verse: "Don't I have the right to do what I want with my own money? Or are you envious because I am generous?",
    verseRef: "Matthew 20:15",
    commonMisreading: "Misread as commentary on labor relations or fair wages. It follows Peter's question: 'What do we get for following you?' Jesus flips the merit framework entirely.",
    studyQuestions: [
      "Why does the landowner pay in reverse order -- last to first?",
      "Is the complaint of the early workers reasonable by human standards?",
      "What does this teach about the 'first will be last' principle?",
      "How does this parable challenge a performance-based view of Christianity?",
    ],
  },
];

const THEMES_LIST = ["All", "Repentance & Grace", "Love of Neighbor", "Hearing & Receiving the Word", "Stewardship & Faithfulness", "God's Pursuit of the Lost", "Kingdom Growth", "Readiness for Christ's Return", "Grace vs. Merit"];

const PARABLE_METHODS = [
  { method: "Allegorical Method (Origin, Augustine)", desc: "Every detail of the parable has a specific meaning. The Good Samaritan: the man = Adam, Jerusalem = paradise, Jericho = the world, robbers = the devil, Samaritan = Christ, inn = the church. Medieval preaching was largely allegorical. The weakness: Jesus probably did not intend this level of coding, and it can obscure the parable's plain meaning." },
  { method: "One-Point Method (Adolf Julicher)", desc: "Each parable makes one main point -- not multiple coded meanings. Julicher's 19th-century reaction against allegory overcorrected: he reduced all parables to simple moral truths (e.g., 'Be merciful like the Samaritan'). The weakness: this flattens the Christological and eschatological dimensions of the parables into ethical instruction." },
  { method: "Eschatological Method (Joachim Jeremias)", desc: "The parables must be interpreted in their original historical context: Jesus announcing the Kingdom of God in crisis. Many parables that seem to be about moral behavior are actually about the urgency of the Kingdom's arrival and the demand for decision. The parables have been 'de-eschatologized' by the church -- we must recover their original edge." },
  { method: "Narrative Method (Dan Via, David Buttrick)", desc: "Parables function as narratives that draw readers into an experience rather than teach propositions. The Prodigal Son doesn't teach that God forgives -- it invites the reader to experience forgiveness through the narrative movement. Attention to plot, character, and reversal rather than allegorical coding." },
  { method: "Kingdom-Centered Reading (N.T. Wright, Tom Long)", desc: "Parables announce the arrival of the Kingdom in Jesus himself and demand a response. They are not timeless moral truths or codes to be deciphered but invitations to enter the story Jesus is enacting. The most historically grounded and narratively sensitive approach, drawing on both Jeremias and narrative criticism." },
];

const VOICES_PARAB = [
  { id: "jeremias-j", name: "Joachim Jeremias", era: "1900-1979", context: "The Parables of Jesus (1947) -- the landmark historical-critical study of the parables", bio: "Joachim Jeremias's The Parables of Jesus is the most influential academic treatment of the parables in the 20th century. Jeremias argued that the key to understanding the parables is recovering their Sitz im Leben (situation in life) -- the original historical context in which Jesus told them. He contended that the church had domesticated the parables, softening their eschatological urgency into moral lessons. In their original context, the parables were crisis announcements: the Kingdom of God has arrived, and it demands an immediate, total response. Jeremias's historical rigor and his reconstruction of the parables' original contexts reshaped how subsequent scholars approached the entire corpus.", quote: "The parables are not moral illustrations. They are proclamations of crisis -- announcing that the Kingdom of God has arrived and that everything depends on how you respond to it now.", contribution: "The Parables of Jesus set the agenda for parable scholarship for the second half of the 20th century. Its historical method, its attention to Aramaic background, and its eschatological reading gave subsequent scholars both a model and a point of departure. Even those who have modified Jeremias's conclusions work in the framework he established." },
  { id: "bailey-k", name: "Kenneth Bailey", era: "1930-2016", context: "Poet and Peasant (1976); The Cross and the Prodigal (1973) -- Middle Eastern cultural context for the parables", bio: "Kenneth Bailey spent forty years living in the Middle East and teaching New Testament in Beirut, Jerusalem, and Egypt. His contribution to parable interpretation was unique: he brought deep knowledge of Middle Eastern village culture -- drawn from decades of conversations with Lebanese, Egyptian, and Palestinian Christians -- to bear on the details of Jesus's parables. His reading of the Prodigal Son, for instance, shows that a son asking his father for his inheritance was, in Middle Eastern culture, equivalent to wishing his father dead -- making the father's response of running to embrace the returning son even more shocking. His cultural insights opened dimensions of the parables that historical-critical methods had missed.", quote: "The parables of Jesus must be read in the cultural world in which they were told. Every village custom, every social expectation, every breach of honor that Jesus describes had meaning for his original audience that we can only recover through deep cultural familiarity.", contribution: "Bailey's work gave preachers and scholars access to the specific cultural dynamics of Jesus's world that make the parables' reversals and shocks intelligible. His reading of the Prodigal Son, the Good Samaritan, and the Lost Sheep through Middle Eastern eyes has been adopted by preachers worldwide and has permanently changed how these parables are taught and preached." },
  { id: "snodgrass-k", name: "Klyne Snodgrass", era: "b. 1941", context: "Stories with Intent (2008) -- the most comprehensive modern scholarly commentary on all the parables", bio: "Klyne Snodgrass's Stories with Intent: A Comprehensive Guide to the Parables of Jesus is the most thorough single-volume treatment of all the parables available to English readers. Snodgrass argues against the reduction of each parable to a single point (Julicher) and against pure allegory, seeking instead to understand the full range of intentions and meanings that Jesus encoded in each narrative. His treatment of each parable includes textual history, interpretive traditions, structural analysis, and theological application. Stories with Intent has become the standard reference for preachers, teachers, and scholars who want a comprehensive account of what the parables mean and how they have been interpreted.", quote: "Parables are stories with intent. Understanding that intent -- historical, theological, and ethical -- requires attending to every detail: who the characters are, what they do, and what the story reverses or confirms in its hearers' expectations.", contribution: "Stories with Intent is the most used scholarly reference for parable study in contemporary evangelical seminaries and biblical studies programs. Its comprehensive treatment of interpretive history, its balanced methodology, and its theological depth have made it the go-to resource for anyone engaged in serious parable study." },
  { id: "wright-parab", name: "N.T. Wright", era: "b. 1948", context: "Jesus and the Victory of God (1996) -- parables as enacted Kingdom proclamation", bio: "N.T. Wright's treatment of the parables in Jesus and the Victory of God (part of his Christian Origins series) reads them as the central vehicle through which Jesus was announcing the coming of the Kingdom -- not as moral illustrations or hidden codes but as direct proclamations of what God was doing in Jesus's ministry. Wright reads parables like the Prodigal Son and the Wicked Tenants as retelling Israel's story in a new key: Jesus is claiming that Israel's exile is ending, that the return from exile is happening through his ministry, and that the response to him determines who is in and who is out of the renewed people of God. This reading gives the parables their full historical and theological weight.", quote: "The parables of Jesus are not timeless moral truths dressed in peasant clothes. They are Israel's story told to its crisis point -- announcing that the God of Israel is at last acting to rescue his people, and that the rescue looks like this.", contribution: "Wright's reading of the parables through the lens of Jewish exile and return has been enormously influential in parable scholarship and preaching. His insistence on reading the parables in their full historical context -- as proclamations about what God is doing in Jesus -- has corrected both the moralistic reduction and the purely existentialist readings that had dominated 20th-century scholarship." },
  { id: "young-b", name: "Brad Young", era: "b. 1950", context: "The Parables: Jewish Tradition and Christian Interpretation (1998) -- rabbinic background to Jesus's parables", bio: "Brad Young has specialized in the Jewish background of Jesus's teaching, particularly the parables. His work draws on rabbinic parable literature (mashal) to show that Jesus was working within a well-established Jewish narrative tradition -- not inventing a new literary form but using the parable genre as his rabbinic contemporaries used it. By reading the Gospel parables alongside rabbinic parallels, Young illuminates how Jesus was both using the genre and radically reinterpreting it. His work demonstrates that the most distinctive features of Jesus's parables -- the unexpected reversals, the inclusion of social outcasts, the identification of God with unlikely characters -- were deliberately counter-cultural within the parable tradition itself.", quote: "Jesus was a Jewish teacher who used the parable as every great Jewish teacher used it -- but what he did with it was different in every parable. He turned the genre inside out to announce something unprecedented.", contribution: "Young's work on the Jewish background of the parables has given preachers and scholars access to the rabbinic literary context that makes the distinctiveness of Jesus's parables visible. By showing what Jesus shared with his contemporaries and where he departed from them, Young illuminates the radicality of Jesus's Kingdom proclamation in its own terms." },
];

interface ParableTheme {
  id: string;
  theme: string;
  icon: string;
  description: string;
  parables: string[];
  keyTruth: string;
}

const PARABLE_THEMES: ParableTheme[] = [
  {
    id: "kingdom-of-god",
    theme: "Kingdom of God",
    icon: "\u{1F451}",
    description: "Parables about the nature, growth, and values of God's kingdom -- what it looks like, how it arrives, and who belongs to it.",
    parables: ["The Mustard Seed", "The Leaven", "The Hidden Treasure", "The Pearl of Great Price", "The Dragnet", "Workers in the Vineyard"],
    keyTruth: "The Kingdom arrives quietly, grows irresistibly, and demands total reorientation of life and loyalty.",
  },
  {
    id: "grace-forgiveness",
    theme: "Grace & Forgiveness",
    icon: "\u{1F54A}",
    description: "Parables showing the scandalous generosity of God's forgiveness -- given freely to those who cannot earn it.",
    parables: ["The Prodigal Son", "The Unmerciful Servant", "The Lost Sheep", "The Lost Coin"],
    keyTruth: "Forgiveness flows from the Father's character, not from the sinner's merit. To refuse to forgive others is to misunderstand what you have received.",
  },
  {
    id: "stewardship",
    theme: "Stewardship",
    icon: "\u{1F4B0}",
    description: "Parables about the responsible use of gifts, resources, and opportunities entrusted to us by God.",
    parables: ["The Parable of the Talents", "The Ten Minas", "The Shrewd Manager", "The Rich Fool"],
    keyTruth: "Everything we have is a trust from God. Fear-based hoarding is as unfaithful as outright squandering.",
  },
  {
    id: "watchfulness",
    theme: "Watchfulness & Readiness",
    icon: "⏰",
    description: "Parables urging disciples to stay alert, prepared, and faithful as they wait for Christ's return.",
    parables: ["The Ten Virgins", "The Thief in the Night", "The Faithful and Unfaithful Servant", "The Fig Tree"],
    keyTruth: "The timing of the Master's return is unknown -- which means readiness is not a moment but a posture of life.",
  },
  {
    id: "prayer-persistence",
    theme: "Prayer & Persistence",
    icon: "\u{1F64F}",
    description: "Parables that teach the nature of prayer -- bold, persistent, and humble before God.",
    parables: ["The Persistent Widow", "The Pharisee and Tax Collector", "The Friend at Midnight"],
    keyTruth: "God does not reward eloquence or piety but honest, persistent dependence. The tax collector's prayer -- 'God, have mercy on me, a sinner' -- is the model.",
  },
  {
    id: "true-righteousness",
    theme: "True Righteousness",
    icon: "⚖️",
    description: "Parables that expose the difference between performed religion and genuine covenant love.",
    parables: ["The Good Samaritan", "The Pharisee and the Publican", "The Rich Fool", "The Two Sons"],
    keyTruth: "True righteousness shows itself in love for neighbor and humility before God -- not in religious observance divorced from mercy.",
  },
];

interface ParableStudy {
  id: string;
  title: string;
  description: string;
  steps: string[];
  questions: string[];
}

const PARABLE_STUDY: ParableStudy[] = [
  {
    id: "single-point",
    title: "The Single-Point Method",
    description: "Each parable was designed to make one central claim -- find it, and everything else in the narrative illuminates it. This guards against over-allegorizing individual details while still attending closely to the story.",
    steps: [
      "Read the parable in full without stopping. What one thing does it appear to be about?",
      "Identify the climax or turning point in the narrative -- often the main point lives there.",
      "Ask: if I could only say one thing about this parable, what would it be?",
      "Check: does the surrounding Gospel context (who Jesus was talking to, what they asked) confirm your central point?",
    ],
    questions: [
      "What is the single main claim the Prodigal Son makes about God?",
      "Can you articulate the Mustard Seed's point in one sentence without allegorizing the birds?",
      "How does identifying the single point protect you from reading your own theology into the text?",
    ],
  },
  {
    id: "original-audience",
    title: "Original Audience Method",
    description: "Jesus told each parable to a specific group -- Pharisees, disciples, crowds, a single lawyer -- in a specific moment of conflict or teaching. Recovering that context restores the parable's original edge and urgency.",
    steps: [
      "Identify who Jesus was speaking to: disciples? Pharisees? Tax collectors? A specific questioner?",
      "Read the verses immediately before the parable -- what triggered it? What question or conflict prompted it?",
      "Ask: what would this parable have communicated to that specific audience? What would have shocked them?",
      "Consider how the parable's ending addresses (or deliberately leaves open) the original tension.",
    ],
    questions: [
      "How does knowing the Pharisees were Jesus's audience change how you read the Prodigal Son?",
      "What did the lawyer expect when he asked 'Who is my neighbor?' -- and how did the Good Samaritan subvert that expectation?",
      "Why does Jesus sometimes refuse to resolve the tension at the end of a parable?",
    ],
  },
  {
    id: "character-identification",
    title: "Character Identification",
    description: "Parables invite readers to locate themselves within the story. Which character do you most naturally identify with? Which character makes you uncomfortable? That discomfort is often where the application lives.",
    steps: [
      "List all the characters in the parable, including the implied ones (the audience, the outsider).",
      "Ask: which character is most like me right now? Which character do I wish I were?",
      "Identify the character Jesus's original audience would have assumed was the hero -- and notice if Jesus subverts that.",
      "Sit with the character who challenges you. What would their perspective change if they encountered the central character (often representing God)?",
    ],
    questions: [
      "In the Workers in the Vineyard, do you identify with the early workers? Why does their complaint feel reasonable?",
      "In the Good Samaritan, could you ever be the priest or Levite? Under what circumstances?",
      "Which character in the Ten Virgins makes you most uncomfortable, and what does that reveal?",
    ],
  },
  {
    id: "kingdom-application",
    title: "Kingdom Application",
    description: "The parables do not end in antiquity -- they announce a Kingdom that is both 'already' and 'not yet.' Each parable has implications for how citizens of that Kingdom live now, in the present, before the full consummation.",
    steps: [
      "Identify what the parable reveals about the character of God or Christ -- Father, Shepherd, King, Landowner.",
      "Ask: what does this tell me about the values and priorities of the Kingdom I belong to?",
      "Identify one specific, concrete way this parable should reshape how you think, speak, or act this week.",
      "Pray through the application: 'Lord, this parable shows me that I need to...'",
    ],
    questions: [
      "If the Mustard Seed is true, how should you think about small acts of faithfulness in your community?",
      "If the Prodigal Son is true, how does it change how you treat people who have failed spectacularly?",
      "Which parable do you most need to apply right now -- and what is the one thing it is asking of you?",
    ],
  },
];

interface ParableVideo {
  id: string;
  title: string;
  preacher: string;
  description: string;
  videoId: string;
  duration: string;
}

const PARABLE_VIDEOS: ParableVideo[] = [
  {
    id: "keller-elder-brother",
    title: "The Prodigal God: The Elder Brother",
    preacher: "Tim Keller",
    description: "Keller unpacks how the elder brother&rsquo;s moralism is a second form of lostness, equally needing grace &mdash; perhaps more dangerous because it is harder to see.",
    videoId: "OasF7lWlX_M",
    duration: "~40 min",
  },
  {
    id: "keller-prodigal-sons",
    title: "The Prodigal Sons",
    preacher: "Tim Keller",
    description: "A complete exposition of Luke 15 showing how Jesus redefines God, sin, and salvation through this parable &mdash; the most complete sermon on the Prodigal Son available.",
    videoId: "lsTzXI7cJGA",
    duration: "~45 min",
  },
  {
    id: "baucham-supremacy",
    title: "The Supremacy of Christ and Truth",
    preacher: "Voddie Baucham",
    description: "Baucham makes the case for Christ as the only sufficient foundation for truth, knowledge, and ethics &mdash; essential context for understanding what the parables demand of us.",
    videoId: "by8ykv7-A3c",
    duration: "~50 min",
  },
  {
    id: "chandler-gospel-depth",
    title: "The Depth of the Gospel",
    preacher: "Matt Chandler",
    description: "Chandler drives to the heart of the Gospel message that undergirds every parable of grace &mdash; that God&rsquo;s love is not based on performance or merit.",
    videoId: "X_r8IMU647g",
    duration: "~45 min",
  },
  {
    id: "sproul-holiness",
    title: "The Holiness of God",
    preacher: "R.C. Sproul",
    description: "Sproul&rsquo;s landmark teaching on divine holiness &mdash; the theological backdrop that makes every parable about grace and mercy intelligible and stunning.",
    videoId: "v6xk8e7gdMA",
    duration: "~55 min",
  },
  {
    id: "giglio-how-great",
    title: "How Great Is Our God",
    preacher: "Louie Giglio",
    description: "A sweeping vision of God&rsquo;s greatness from Passion &mdash; the kind of God who speaks in parables, who runs to meet returning sons, who seeks lost sheep.",
    videoId: "X1rPalyUshw",
    duration: "~50 min",
  },
];

export default function ParablesPage() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parables_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [studiedIds, setStudiedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_parables_studied"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selected, setSelected] = useState<Parable | null>(null);
  const [filter, setFilter] = usePersistedState("vine_parables_filter", "All");
  const [kingdomOnly, setKingdomOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [innerTab, setInnerTab] = usePersistedState<"browse" | "studied" | "methods" | "voices">("vine_parables_inner_tab", "browse");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_parables_voice", "jeremias-j");
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_parables_tab", "parables");
  const voiceItem = VOICES_PARAB.find(v => v.id === selectedVoice)!;

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_parables_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const toggleStudied = (id: string) => {
    setStudiedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("vine_parables_studied", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = PARABLES.filter(p => {
    if (innerTab === "studied" && !studiedIds.has(p.id)) return false;
    if (filter !== "All" && p.theme !== filter) return false;
    if (kingdomOnly && !p.kingdom) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.theme.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📖</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>Parables of Jesus</h1>
          <p style={{ color: MUTED, fontSize: 16 }}>
            Deep study of {PARABLES.length} parables &mdash; their context, meaning, and application
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, flexWrap: "wrap" }}>
            <span style={{ background: "rgba(58,125,86,0.1)", color: GREEN, border: "1px solid rgba(58,125,86,0.25)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {studiedIds.size}/{PARABLES.length} Studied
            </span>
            <span style={{ background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 20, padding: "4px 14px", fontSize: 13 }}>
              {PARABLES.filter(p => p.kingdom).length} Kingdom Parables
            </span>
          </div>
        </div>

        {/* Main 4-tab navigation */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6 }}>
          {(["parables", "themes", "study", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setActiveTab(t)} style={{ flex: 1, background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "background 0.2s" }}>
              {t === "parables" ? "Parables" : t === "themes" ? "Themes" : t === "study" ? "Study Methods" : "Videos"}
            </button>
          ))}
        </div>

        {/* PARABLES TAB */}
        {activeTab === "parables" && (
          <>
            {/* Inner sub-tabs */}
            <div style={{ display: "flex", gap: 4, marginBottom: 24, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0 }}>
              {(["browse", "studied", "methods", "voices"] as const).map(t => (
                <button type="button" key={t} onClick={() => setInnerTab(t)}
                  style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "none", border: "none", cursor: "pointer", color: innerTab === t ? GREEN : "#6A6A88", borderBottom: `2px solid ${innerTab === t ? GREEN : "transparent"}`, marginBottom: -1 }}>
                  {t === "browse" ? "All Parables" : t === "studied" ? `My Studied (${studiedIds.size})` : t === "methods" ? "📜 Methods" : "🎓 Scholars"}
                </button>
              ))}
            </div>

            {(innerTab === "browse" || innerTab === "studied") && (
              <>
                {/* Filters */}
                <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
                  <input value={search} onChange={e => setSearch(e.target.value)} aria-label="Search parables..." placeholder="Search parables..."
                    style={{ flex: 1, minWidth: 200, padding: "8px 14px", borderRadius: 10, background: CARD, border: `1px solid ${BORDER}`, color: TEXT, fontSize: 14, outline: "none" }} />
                  <select aria-label="Search" value={filter} onChange={e => setFilter(e.target.value)}
                    style={{ padding: "8px 14px", borderRadius: 10, background: CARD, border: `1px solid ${BORDER}`, color: MUTED, fontSize: 14, cursor: "pointer" }}>
                    {THEMES_LIST.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button type="button" onClick={() => setKingdomOnly(!kingdomOnly)}
                    style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${kingdomOnly ? PURPLE : BORDER}`, background: kingdomOnly ? "rgba(107,79,187,0.15)" : "transparent", color: kingdomOnly ? "#A080FF" : MUTED, fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
                    Kingdom Parables Only
                  </button>
                </div>

                {/* Progress bar */}
                <div style={{ marginBottom: 28, background: CARD, borderRadius: 12, padding: "14px 18px", border: `1px solid ${BORDER}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: MUTED }}>Study Progress</span>
                    <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>{studiedIds.size} of {PARABLES.length}</span>
                  </div>
                  <div style={{ height: 6, background: BORDER, borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${(studiedIds.size / PARABLES.length) * 100}%`, background: `linear-gradient(90deg, ${GREEN}, ${PURPLE})`, borderRadius: 3, transition: "width 0.3s" }} />
                  </div>
                </div>

                {/* Parables grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                  {filtered.map(p => (
                    <div key={p.id} onClick={() => setSelected(p)}
                      style={{ background: CARD, border: `1px solid ${studiedIds.has(p.id) ? "rgba(58,125,86,0.3)" : BORDER}`, borderRadius: 16, padding: 20, cursor: "pointer", transition: "border-color 0.2s, transform 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLDivElement).style.borderColor = GREEN; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = studiedIds.has(p.id) ? "rgba(58,125,86,0.3)" : BORDER; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, color: TEXT }}>{p.title}</h3>
                          <span style={{ fontSize: 12, color: MUTED }}><VerseRef reference={p.reference} /></span>
                        </div>
                        <button type="button" onClick={e => { e.stopPropagation(); toggleSave(p.id); }}
                          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, marginLeft: 8, color: savedIds.has(p.id) ? "#FFD700" : "#4A4A68" }}>
                          {savedIds.has(p.id) ? "★" : "☆"}
                        </button>
                      </div>
                      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>
                          {p.theme}
                        </span>
                        {p.kingdom && (
                          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(58,125,86,0.08)", color: GREEN, border: "1px solid rgba(58,125,86,0.2)" }}>
                            Kingdom
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {p.summary}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#6A6A88", fontStyle: "italic" }}>{p.audience}</span>
                        <button type="button" onClick={e => { e.stopPropagation(); toggleStudied(p.id); }}
                          style={{ fontSize: 11, padding: "4px 12px", borderRadius: 8, border: `1px solid ${studiedIds.has(p.id) ? "rgba(58,125,86,0.3)" : "#2A2A40"}`, background: studiedIds.has(p.id) ? "rgba(58,125,86,0.1)" : "transparent", color: studiedIds.has(p.id) ? GREEN : "#6A6A88", cursor: "pointer", fontWeight: 600 }}>
                          {studiedIds.has(p.id) ? "✓ Studied" : "Mark Studied"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "#4A4A68" }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📜</div>
                    <p>No parables match your filters.</p>
                  </div>
                )}
              </>
            )}

            {/* METHODS sub-tab */}
            {innerTab === "methods" && (
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Interpretation Methods</h2>
                <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
                  How scholars have approached reading the parables &mdash; from ancient allegory to modern narrative criticism.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {PARABLE_METHODS.map((m, i) => (
                    <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: GREEN, marginBottom: 10 }}>{m.method}</h3>
                      <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VOICES sub-tab */}
            {innerTab === "voices" && (
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
                  {VOICES_PARAB.map(v => (
                    <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                      style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer", transition: "all 0.2s" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                      <div style={{ fontSize: 11, color: "#6A6A88" }}>{v.era}</div>
                    </button>
                  ))}
                </div>
                <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ marginBottom: 6, fontSize: 12, color: "#6A6A88", fontStyle: "italic" }}>{voiceItem.context}</div>
                  <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
                  <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
                  <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                    <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Parable Themes</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
                Jesus&rsquo;s parables cluster around six great themes &mdash; each one a window into the Kingdom of God and what it demands of us.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: 20 }}>
              {PARABLE_THEMES.map(th => (
                <div key={th.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 32 }}>{th.icon}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }}>{th.theme}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 16 }}>{th.description}</p>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Parables in this theme</div>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
                      {th.parables.map(name => (
                        <li key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN, flexShrink: 0, display: "inline-block" }} />
                          <span style={{ fontSize: 13, color: "#C0C0D8" }}>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: "#0D0D1A", borderRadius: 10, padding: "12px 16px", borderLeft: `3px solid ${GREEN}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Key Truth</div>
                    <p style={{ fontSize: 13, color: "#D0D0E8", lineHeight: 1.65, margin: 0 }}>{th.keyTruth}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STUDY TAB */}
        {activeTab === "study" && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>How to Study a Parable</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
                Four proven approaches for moving from surface reading to genuine understanding &mdash; each one a different lens that illuminates what Jesus was doing in the parables.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PARABLE_STUDY.map((s, idx) => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `rgba(107,79,187,0.2)`, border: `1px solid rgba(107,79,187,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#A080FF", flexShrink: 0 }}>{idx + 1}</div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>{s.description}</p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Steps</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {s.steps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", color: GREEN, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                          <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Discussion Questions</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {s.questions.map((q, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#0D0D1A", borderRadius: 10, padding: "12px 14px" }}>
                          <span style={{ color: PURPLE, fontWeight: 900, flexShrink: 0, fontSize: 14 }}>Q{i + 1}</span>
                          <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.6, margin: 0 }}>{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>Parable Sermons &amp; Teaching</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 6 }}>
                Six essential sermons from some of the best expository preachers of the last generation &mdash; each one illuminating the parables or the theological world they inhabit.
              </p>
              <p style={{ color: "#6A6A88", fontSize: 13 }}>
                Opens embedded &mdash; may require YouTube in the browser.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
              {PARABLE_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${BORDER}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.2)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.3)" }}>
                        {v.preacher}
                      </span>
                      <span style={{ fontSize: 11, color: "#6A6A88" }}>{v.duration}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, marginBottom: 8, lineHeight: 1.3 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: v.description }} />
                  </div>
                  <div style={{ padding: 16 }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", borderRadius: 8 }}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => { setSelected(null); setOpenQuestion(null); }}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px", overflowY: "auto" }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: CARD, borderRadius: 20, padding: 32, maxWidth: 680, width: "100%", border: "1px solid #2A2A40", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>{selected.title}</h2>
                <span style={{ fontSize: 14, color: MUTED }}><VerseRef reference={selected.reference} /></span>
              </div>
              <button type="button" onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#6A6A88", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(107,79,187,0.15)", color: "#A080FF", border: "1px solid rgba(107,79,187,0.25)" }}>{selected.theme}</span>
              {selected.kingdom && <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(58,125,86,0.08)", color: GREEN, border: "1px solid rgba(58,125,86,0.2)" }}>Kingdom Parable</span>}
              <span style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: BORDER, color: MUTED }}>Audience: {selected.audience}</span>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: `3px solid ${PURPLE}` }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.summary}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Characters</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.characters.map(c => (
                  <span key={c} style={{ fontSize: 13, padding: "4px 12px", borderRadius: 8, background: BORDER, color: "#D0D0E8" }}>{c}</span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Truth</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.keyTruth}</p>
            </div>

            <div style={{ background: "#0D0D1A", borderRadius: 12, padding: 16, marginBottom: 20, borderLeft: `3px solid ${GREEN}` }}>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, fontStyle: "italic" }}>&ldquo;{selected.verse}&rdquo;</p>
              <p style={{ fontSize: 12, color: GREEN, marginTop: 8 }}>&#8212; {selected.verseRef}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#FFB347", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>⚠️ Common Misreading</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.commonMisreading}</p>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Application</h4>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7 }}>{selected.application}</p>
            </div>

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#A080FF", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Study Questions</h4>
              {selected.studyQuestions.map((q, i) => (
                <div key={i} onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                  style={{ marginBottom: 8, background: "#0D0D1A", borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}`, cursor: "pointer" }}>
                  <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#D0D0E8", fontWeight: 600 }}>{i + 1}. {q}</span>
                    <span style={{ color: "#6A6A88", fontSize: 16 }}>{openQuestion === i ? "−" : "+"}</span>
                  </div>
                  {openQuestion === i && (
                    <div style={{ padding: "0 16px 12px", borderTop: `1px solid ${BORDER}` }}>
                      <p style={{ fontSize: 13, color: MUTED, marginTop: 10, lineHeight: 1.6 }}>
                        Take time to reflect on this question. Consider journaling your thoughts, discussing with a study group, or praying through what this reveals about your heart.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button type="button" onClick={() => toggleStudied(selected.id)}
                style={{ flex: 1, padding: "12px 20px", borderRadius: 12, border: `1px solid ${studiedIds.has(selected.id) ? "rgba(58,125,86,0.4)" : "#2A2A40"}`, background: studiedIds.has(selected.id) ? "rgba(58,125,86,0.12)" : BORDER, color: studiedIds.has(selected.id) ? GREEN : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                {studiedIds.has(selected.id) ? "✓ Marked as Studied" : "Mark as Studied"}
              </button>
              <button type="button" onClick={() => toggleSave(selected.id)}
                style={{ padding: "12px 20px", borderRadius: 12, border: `1px solid ${savedIds.has(selected.id) ? "rgba(255,215,0,0.3)" : "#2A2A40"}`, background: savedIds.has(selected.id) ? "rgba(255,215,0,0.08)" : BORDER, color: savedIds.has(selected.id) ? "#FFD700" : MUTED, cursor: "pointer", fontWeight: 700, fontSize: 16 }}>
                {savedIds.has(selected.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
