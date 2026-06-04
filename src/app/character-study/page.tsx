"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

interface BiblicalCharacter {
  id: string;
  name: string;
  testament: "Old" | "New";
  role: string;
  era: string;
  emoji: string;
  keyVerse: string;
  keyVerseRef: string;
  lifeSummary: string;
  keyLessons: { title: string; body: string; verse?: string; verseRef?: string }[];
  characterTraits: { trait: string; positive: boolean }[];
  keyMoments: { moment: string; reference: string; significance: string }[];
  applicationToday: string;
  relatedCharacters: string[];
  studyQuestions: string[];
}

const characters: BiblicalCharacter[] = [
  {
    id: "david",
    name: "David",
    testament: "Old",
    role: "King, Shepherd, Psalmist",
    era: "~1000 BC",
    emoji: "👑",
    keyVerse: "I have found David son of Jesse, a man after my own heart; he will do everything I want him to do.",
    keyVerseRef: "Acts 13:22",
    lifeSummary: "David was a shepherd boy who became Israel's greatest king, a warrior who killed giants, a musician who wrote half the Psalms, and a flawed human being who committed adultery and orchestrated murder — and yet was called 'a man after God's own heart.' His life is one of Scripture's most complete portraits of grace, failure, repentance, and restoration.",
    keyLessons: [
      {
        title: "God looks at the heart, not appearance",
        body: "When Samuel came to anoint the next king, he was drawn to David's impressive older brothers. God redirected him to the overlooked youngest son. The standard God uses to evaluate is fundamentally different from the world's.",
        verse: "The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.",
        verseRef: "1 Samuel 16:7",
      },
      {
        title: "Authentic repentance restores relationship",
        body: "After his catastrophic failures with Bathsheba and Uriah, David's response was not to rationalize, justify, or minimize — he broke before God completely. Psalm 51 is the cry of a man who knew the weight of what he'd done and the only source of cleansing.",
        verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
        verseRef: "Psalm 51:10",
      },
      {
        title: "Preparation in obscurity precedes promotion",
        body: "David's years of solitude as a shepherd, where he killed a lion and a bear, were not wasted time — they were the preparation that made facing Goliath possible. What God is doing in your hidden seasons is never hidden from Him.",
      },
      {
        title: "Even the best leaders fail",
        body: "David's failure with Bathsheba didn't come in a moment of weakness — it came after his greatest military successes, when he was comfortable, idle, and powerful. Pride and comfort can be more spiritually dangerous than hardship.",
      },
    ],
    characterTraits: [
      { trait: "Courageous", positive: true },
      { trait: "Worshipful", positive: true },
      { trait: "Loyal", positive: true },
      { trait: "Passionate", positive: true },
      { trait: "Humble (in his early years)", positive: true },
      { trait: "Lustful", positive: false },
      { trait: "Calculating when threatened", positive: false },
      { trait: "Passive as a father", positive: false },
    ],
    keyMoments: [
      { moment: "Anointed by Samuel while still a shepherd boy", reference: "1 Samuel 16", significance: "God's choice is counterintuitive and not based on human standards" },
      { moment: "Kills Goliath with a sling and stone", reference: "1 Samuel 17", significance: "Faith built in obscurity becomes courage in public" },
      { moment: "Refuses to kill Saul despite opportunity (twice)", reference: "1 Samuel 24, 26", significance: "Submission to God's timing over personal revenge" },
      { moment: "Dances before the Ark with abandon", reference: "2 Samuel 6", significance: "Wholehearted worship that doesn't care what others think" },
      { moment: "Sin with Bathsheba and murder of Uriah", reference: "2 Samuel 11", significance: "The destructive power of unchecked desire and power" },
      { moment: "Nathan's confrontation and David's repentance", reference: "2 Samuel 12; Psalm 51", significance: "True repentance restores relationship with God" },
    ],
    applicationToday: "David invites us to bring our whole selves — our worship, our failures, our questions, our rage, our sorrow — before God. His Psalms model a prayer life that is honest rather than polished. His life asks: where are you preparing in obscurity? Where are you overconfident in your strength? And most importantly: are you quick to repent when you fail?",
    relatedCharacters: ["Solomon", "Jonathan", "Bathsheba", "Nathan", "Goliath", "Saul"],
    studyQuestions: [
      "What does it mean practically to be 'a person after God's own heart'?",
      "Where in your life are you waiting in an obscure 'shepherd field' season? How might God be using it?",
      "How does Psalm 51 change the way you approach repentance?",
      "David's greatest failures came after his greatest successes. What does that tell us about spiritual vigilance?",
      "Which aspect of David's character do you most relate to — and which most challenges you?",
    ],
  },
  {
    id: "paul",
    name: "Paul (Saul of Tarsus)",
    testament: "New",
    role: "Apostle, Missionary, Theologian",
    era: "~5–67 AD",
    emoji: "✍️",
    keyVerse: "I can do all this through him who gives me strength.",
    keyVerseRef: "Philippians 4:13",
    lifeSummary: "Paul was a zealous persecutor of Christians who had a dramatic encounter with the risen Christ on the road to Damascus that completely reoriented his entire life. He went on to plant churches across the Roman Empire, write 13 letters that form the theological backbone of the New Testament, and was ultimately executed for his faith in Rome. His transformation from chief persecutor to chief apostle remains one of history's most compelling arguments for the resurrection.",
    keyLessons: [
      {
        title: "God uses our past — He doesn't erase it",
        body: "Paul never stopped being haunted by his past as a persecutor. But rather than letting it paralyze him, it fueled his urgency and his gratitude. His background gave him access and credibility that others didn't have.",
        verse: "For I am the least of the apostles and do not even deserve to be called an apostle, because I persecuted the church of God.",
        verseRef: "1 Corinthians 15:9",
      },
      {
        title: "Contentment is learned, not given",
        body: "Paul's famous statement about contentment came after beatings, shipwrecks, imprisonments, and betrayals — not after a comfortable life. He learned contentment in the school of hard experience, not theology.",
        verse: "I have learned to be content whatever the circumstances.",
        verseRef: "Philippians 4:11",
      },
      {
        title: "Weakness is the platform for divine power",
        body: "When Paul pleaded with God to remove his 'thorn in the flesh,' God's answer was not healing but a deeper revelation: that His power is made perfect precisely in human weakness. Paul came to boast in his weaknesses because of this.",
        verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
        verseRef: "2 Corinthians 12:9",
      },
      {
        title: "The Gospel demands radical lifestyle change",
        body: "Paul's theology was never merely theoretical. The second half of nearly every letter pivots to application: 'Therefore...' The indicative (what God has done) always leads to the imperative (how we should live). Doctrine and practice were inseparable for Paul.",
      },
    ],
    characterTraits: [
      { trait: "Intellectually brilliant", positive: true },
      { trait: "Fearlessly bold", positive: true },
      { trait: "Deeply pastoral", positive: true },
      { trait: "Servant-hearted in suffering", positive: true },
      { trait: "Intensely driven before conversion", positive: false },
      { trait: "Sometimes confrontational to a fault", positive: false },
      { trait: "Struggled in some relationships (Barnabas)", positive: false },
    ],
    keyMoments: [
      { moment: "Approves the stoning of Stephen", reference: "Acts 7:58–8:1", significance: "Paul's pre-conversion position — the chief opponent of the early church" },
      { moment: "Damascus road conversion", reference: "Acts 9:1-19", significance: "The encounter that transformed history; the risen Christ confronts his persecutor" },
      { moment: "First missionary journey with Barnabas", reference: "Acts 13-14", significance: "Intentional, strategic church planting across the Roman world" },
      { moment: "The Jerusalem Council", reference: "Acts 15", significance: "Paul fights for Gentile inclusion — the Gospel is for everyone" },
      { moment: "Imprisoned in Philippi — sings at midnight", reference: "Acts 16", significance: "Worship in the worst circumstances; the jailbreak that led to a jailer's salvation" },
      { moment: "Writing letters from prison", reference: "Philippians, Colossians, Philemon, Ephesians", significance: "Some of history's most profound theology written from a jail cell" },
    ],
    applicationToday: "Paul's life challenges the idea that your past disqualifies you or that comfortable circumstances are required for effective faith. He wrote about joy from prison, contentment from suffering, and hope from chains. He asks us: are you letting your past define you or fuel you? Are you depending on your own strength, or learning to depend on God in weakness?",
    relatedCharacters: ["Barnabas", "Silas", "Timothy", "Lydia", "Priscilla & Aquila", "Peter"],
    studyQuestions: [
      "How does Paul's transformation from persecutor to apostle strengthen your confidence in the power of the Gospel?",
      "Where in your life are you trying to be strong in your own strength rather than allowing God to work through your weakness?",
      "Paul's letters show deep emotional investment in the churches he planted. What does that tell us about Christian community?",
      "How does 'learning contentment' (not receiving it) change your expectations of the spiritual life?",
      "Which of Paul's letters has most shaped your faith, and why?",
    ],
  },
  {
    id: "ruth",
    name: "Ruth",
    testament: "Old",
    role: "Moabite Widow, Ancestor of David and Jesus",
    era: "~1100 BC",
    emoji: "🌾",
    keyVerse: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.",
    keyVerseRef: "Ruth 1:16",
    lifeSummary: "Ruth was a Moabite woman — a foreigner and a widow — who chose loyalty to her mother-in-law Naomi over the security of returning to her own people after the death of both their husbands. Her faithfulness, humility, and hard work led to her redemption by Boaz and ultimately placed her in the lineage of King David and Jesus Christ. Her story is a stunning illustration of hesed — the covenant lovingkindness of God.",
    keyLessons: [
      {
        title: "Faithfulness to people reflects faithfulness to God",
        body: "Ruth's covenant with Naomi wasn't romantic — it was costly. Staying meant giving up the security of her homeland and family for an uncertain future with a bitter, grieving old woman. Her hesed (lovingkindness) mirrored God's own character.",
      },
      {
        title: "God redeems the outsider",
        body: "Ruth was a Moabite — historically excluded from Israel's covenant community. Yet she ends up in the genealogy of Jesus. The Gospel's radical inclusion has always been part of God's plan, not an afterthought.",
        verse: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
        verseRef: "Galatians 3:28",
      },
      {
        title: "Dignity in humble work",
        body: "Rather than waiting for rescue, Ruth gleaned in the fields — backbreaking, humbling labor designed for the poor. She worked hard within the options available to her. God honored her diligence by directing her to Boaz's field.",
      },
      {
        title: "The kinsman-redeemer points to Christ",
        body: "Boaz's role as kinsman-redeemer — one who had the right and the willingness to redeem what was lost — is one of Scripture's most beautiful pictures of what Jesus does for us. He didn't have to; he chose to.",
      },
    ],
    characterTraits: [
      { trait: "Fiercely loyal", positive: true },
      { trait: "Humble", positive: true },
      { trait: "Hard-working", positive: true },
      { trait: "Courageously vulnerable", positive: true },
      { trait: "Foreigner who trusted God", positive: true },
    ],
    keyMoments: [
      { moment: "Refuses to leave Naomi despite her urging", reference: "Ruth 1:16-17", significance: "One of Scripture's most moving declarations of loyalty and love" },
      { moment: "Gleaning in Boaz's fields", reference: "Ruth 2", significance: "Faithful work within limited options; God's provision through ordinary means" },
      { moment: "Goes to Boaz at the threshing floor", reference: "Ruth 3", significance: "Courageous vulnerability; requesting kinsman-redeemer status" },
      { moment: "Boaz redeems Ruth publicly", reference: "Ruth 4", significance: "The picture of costly redemption — pointing forward to Christ" },
      { moment: "Ruth in the lineage of David and Jesus", reference: "Matthew 1:5", significance: "A Moabite widow becomes part of the most significant genealogy in history" },
    ],
    applicationToday: "Ruth's life is a challenge to loyal love — not the feeling but the decision. She chose people over comfort, faithfulness over convenience. Her story also challenges assumptions about who is 'in' and 'out' of God's family. And it reminds us that God is often working most powerfully in what looks like ordinary, humble circumstances.",
    relatedCharacters: ["Naomi", "Boaz", "Orpah", "Obed", "David"],
    studyQuestions: [
      "Where in your life is God calling you to faithful loyalty that costs something?",
      "How does Ruth's inclusion in the lineage of Jesus expand your understanding of who God receives?",
      "How does Boaz's role as kinsman-redeemer deepen your understanding of what Jesus has done for you?",
      "What does Ruth's story say about finding God's provision in difficult, unglamorous work?",
      "How does the relationship between Ruth and Naomi challenge or inspire the way you invest in older or younger believers?",
    ],
  },
  {
    id: "esther",
    name: "Esther",
    testament: "Old",
    role: "Queen of Persia, Deliverer of Her People",
    era: "~480 BC",
    emoji: "🌸",
    keyVerse: "And who knows but that you have come to your royal position for such a time as this?",
    keyVerseRef: "Esther 4:14",
    lifeSummary: "Esther was a Jewish orphan girl raised by her cousin Mordecai who became queen of Persia under King Ahasuerus. When Haman plotted the genocide of all Jews in the empire, Esther faced the terrifying choice of risking her life by approaching the king uninvited — or staying silent. Her courage, guided by Mordecai's challenge, saved her entire people.",
    keyLessons: [
      {
        title: "God places you where you are for a purpose",
        body: "Esther didn't choose her position — she was taken, elevated, and placed in a palace. But Mordecai's challenge reframes everything: perhaps this unwanted position is exactly the one God needed her in. Your placement — wherever it is — may be for more than your own benefit.",
      },
      {
        title: "Courage requires community",
        body: "Before she acted, Esther asked the Jewish community to fast for her for three days. She didn't walk into danger alone — she invited intercession, counsel, and accountability. Courageous action is rarely a solo endeavor.",
      },
      {
        title: "God's name need not appear for His hand to be evident",
        body: "God's name never appears in the book of Esther — yet His providential hand is unmistakable on every page. God works behind the scenes in circumstances that appear ordinary, coincidental, and human.",
      },
      {
        title: "Comfort and calling are often in conflict",
        body: "Esther had everything she could want. Acting meant risking it all. Mordecai's warning was blunt: if you stay silent, deliverance will come another way — but you and your family will perish. Calling doesn't promise comfort.",
      },
    ],
    characterTraits: [
      { trait: "Courageous under pressure", positive: true },
      { trait: "Wise and strategic", positive: true },
      { trait: "Humble and teachable", positive: true },
      { trait: "Initially reluctant", positive: false },
      { trait: "Grew into boldness", positive: true },
    ],
    keyMoments: [
      { moment: "Becomes queen of Persia", reference: "Esther 2", significance: "Divine positioning through seemingly ordinary events" },
      { moment: "Learns of Haman's genocide plot", reference: "Esther 3-4", significance: "The moment of crisis that reveals calling" },
      { moment: "Calls the community to fast before acting", reference: "Esther 4:16", significance: "Intercession and community before courageous action" },
      { moment: "Approaches the king uninvited", reference: "Esther 5", significance: "Risk-taking for others; courage in the face of death" },
      { moment: "Haman's plot exposed; Jewish people saved", reference: "Esther 7-8", significance: "God's deliverance through one willing vessel" },
    ],
    applicationToday: "Esther's story challenges you to consider your placement — in your family, workplace, community, nation. Have you come to where you are 'for such a time as this'? And when the cost of action becomes real, will you act — or wait for comfort?",
    relatedCharacters: ["Mordecai", "Ahasuerus (Xerxes)", "Haman", "Vashti"],
    studyQuestions: [
      "Where in your life might God have 'placed you for such a time as this'?",
      "What does Esther's story say about the relationship between courage and community?",
      "How does God's absence from the text actually strengthen the argument for His providential presence?",
      "When has your comfort ever been in conflict with a calling?",
      "What does Mordecai's challenging question to Esther say about the responsibility that comes with privilege and position?",
    ],
  },
  {
    id: "peter",
    name: "Peter (Simon Peter)",
    testament: "New",
    role: "Apostle, First Pope (Catholic tradition), Church Leader",
    era: "~1–68 AD",
    emoji: "⚓",
    keyVerse: "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.",
    keyVerseRef: "Matthew 16:18",
    lifeSummary: "Peter was a fisherman from Galilee who became one of Jesus's closest disciples. Impulsive, passionate, and deeply flawed, Peter was the first to confess Jesus as the Messiah — and the one who denied Him three times on the night of His arrest. After the resurrection, Jesus restored Peter personally and he became a pillar of the early church, ultimately dying by crucifixion upside-down in Rome.",
    keyLessons: [
      {
        title: "Failure is not final",
        body: "Peter's denial of Christ is one of the most brutal failures in the New Testament — three explicit denials of the person he'd promised to die for. But Jesus didn't write him off. His post-resurrection conversation with Peter on the beach, 'Do you love me?... Feed my sheep,' is one of the most tender restoration scenes in all of Scripture.",
        verse: "Jesus said to Simon Peter, 'Simon son of John, do you love me more than these?'",
        verseRef: "John 21:15",
      },
      {
        title: "Boldness and impulsivity are two sides of the same coin",
        body: "Peter walked on water — and then sank when his eyes left Jesus. Peter declared Jesus the Messiah — and then minutes later was called 'Satan' for misunderstanding the plan. His greatest qualities and his greatest failures came from the same place: wholehearted intensity. Learning to channel boldness under the Spirit is the journey.",
      },
      {
        title: "Leaders must be willing to be changed",
        body: "Peter's Cornelius vision and his public dispute with Paul (Galatians 2) show a man whose theology was still being shaped years into his apostleship. Teachability in leaders is not weakness — it's the prerequisite for ongoing effectiveness.",
      },
    ],
    characterTraits: [
      { trait: "Passionate and wholehearted", positive: true },
      { trait: "Courageous", positive: true },
      { trait: "First to step out", positive: true },
      { trait: "Impulsive and reactive", positive: false },
      { trait: "Inconsistent under pressure", positive: false },
      { trait: "Teachable and restorable", positive: true },
    ],
    keyMoments: [
      { moment: "Called from his fishing boat by Jesus", reference: "Matthew 4:18-20", significance: "An ordinary person, called immediately, responds immediately" },
      { moment: "Walks on water toward Jesus", reference: "Matthew 14:28-31", significance: "Faith bold enough to step out, honest enough to cry for help when sinking" },
      { moment: "Confesses Jesus as the Messiah", reference: "Matthew 16:13-19", significance: "The revelation on which the church is built" },
      { moment: "Denies Christ three times", reference: "Matthew 26:69-75", significance: "The worst night of Peter's life — and God's grace was bigger" },
      { moment: "Restored by Jesus at the Sea of Galilee", reference: "John 21", significance: "Three 'do you love me' questions to undo three denials" },
      { moment: "Preaches at Pentecost; 3,000 saved", reference: "Acts 2", significance: "The terrified denier becomes the Spirit-filled evangelist" },
    ],
    applicationToday: "Peter is the patron saint of everyone who has failed spectacularly and wondered if there's any coming back. His story says: there is. Jesus doesn't just tolerate Peter's return — He specifically prepares it. Where are you being invited to step out in faith? And where do you need to receive restoration for a failure you've been carrying too long?",
    relatedCharacters: ["James", "John", "Andrew", "Cornelius", "Paul", "Jesus"],
    studyQuestions: [
      "How does Peter's restoration give you hope for areas of failure in your own life?",
      "What does Peter's story say about the relationship between boldness and teachability?",
      "Where has God been asking you to 'get out of the boat' recently?",
      "How did Peter's failures actually shape him into a more effective and compassionate leader?",
      "What would it mean to receive a personal restoration conversation with Jesus like Peter had in John 21?",
    ],
  },
];

const CHARACTER_THEMES = [
  {
    id: "th1",
    theme: "Faith Under Fire",
    icon: "🔥",
    description: "These figures faced situations where trusting God cost them everything — their comfort, their safety, and sometimes their lives. Their stories ask the same question of us: what would you do if the cost of faithfulness became catastrophic?",
    characters: ["Daniel", "Shadrach, Meshach & Abednego", "Stephen"],
    keyLesson: "Faithfulness is not validated by rescue — Daniel's three friends said 'even if He does not' (Dan 3:18). The willingness to obey before knowing the outcome is the heart of true faith.",
  },
  {
    id: "th2",
    theme: "Redemption from Failure",
    icon: "🌿",
    description: "Each of these figures failed in spectacular, public, and costly ways. Each was restored — not despite their failure, but through it. Their stories are the most powerful argument in Scripture for the reach of God's grace.",
    characters: ["Peter", "David", "Jonah", "Mark"],
    keyLesson: "The most broken people in Scripture often become its most fruitful servants. God does not merely tolerate failure in his people; He uses it to shape them into vessels of grace for others.",
  },
  {
    id: "th3",
    theme: "Unlikely Leaders",
    icon: "👑",
    description: "God has a persistent pattern of choosing the overlooked, the fearful, the young, the foreign, and the marginalized. This pattern is not accidental — it is the signature of a God who gets glory precisely by working through those the world discounts.",
    characters: ["Gideon", "Esther", "Moses", "Mary"],
    keyLesson: "God chooses the weak to shame the strong (1 Cor 1:27). The feeling of inadequacy for a calling may not be a disqualifier — it may be the precondition.",
  },
  {
    id: "th4",
    theme: "Perseverance in Suffering",
    icon: "💪",
    description: "These figures endured suffering that appeared to have no end — loss, imprisonment, betrayal, abandonment, and silence from God. Their lives ask us: how do you remain faithful when there is no visible reason to?",
    characters: ["Job", "Joseph", "Paul", "Jeremiah"],
    keyLesson: "The suffering of these figures was not a detour from their calling — it was the path through it. Joseph's pit preceded the palace. Paul's chains produced Philippians. Suffering shaped what comfort cannot.",
  },
  {
    id: "th5",
    theme: "Surrendered Ambition",
    icon: "🙏",
    description: "Each of these figures had to lay down a legitimate personal agenda for the sake of something larger. This is one of the hardest callings in Scripture — not to avoid evil, but to release good things for God's better purpose.",
    characters: ["John the Baptist", "Abraham", "Paul"],
    keyLesson: "John the Baptist said 'He must increase, I must decrease' (John 3:30). Surrendered ambition is not passivity; it is the active, costly choice to make room for God rather than ourselves.",
  },
  {
    id: "th6",
    theme: "Costly Obedience",
    icon: "✝️",
    description: "These figures obeyed when the cost was staggering and the logic of obedience made no human sense. Their stories confront the comfortable idea that following God is safe, sensible, or explicable.",
    characters: ["Abraham (Isaac)", "Hosea", "Jesus (model)"],
    keyLesson: "Abraham raised the knife before the ram appeared. Hosea loved a faithless wife by divine command. Costly obedience does not negotiate the price down first — it acts and trusts God with the cost.",
  },
];

const VOICES_CHAR = [
  {
    id: "meyer-fb",
    name: "F.B. Meyer",
    era: "1847-1929",
    context: "Devotional biographies of Abraham, Moses, Elijah, Paul, David — the pioneer of the character study genre",
    bio: "F.B. Meyer was a British Baptist pastor who pioneered the devotional biography as a genre of Christian writing. His character studies — including Abraham: Or the Obedience of Faith, Moses: The Servant of God, Elijah and the Secret of His Power, and Paul: A Servant of Jesus Christ — set the template for how evangelicals would engage biblical figures for over a century. Meyer's approach combined careful biblical exposition with rich application to contemporary Christian life, presented in accessible and often beautiful prose. His work made deep biblical character study available to ordinary believers, not just scholars.",
    quote: "The life of Abraham is a perfect illustration of what faith means — not the absence of doubt, but the choice to act on what God has said in spite of it.",
    contribution: "Meyer's devotional biographies shaped the character study genre for a century. His books on Abraham, Moses, Elijah, David, and Paul have been continuously in print and have introduced millions of ordinary believers to deep engagement with biblical figures. The accessibility and spiritual richness of his approach established a model that Warren Wiersbe, Charles Swindoll, and others would follow into the 21st century.",
  },
  {
    id: "pink-aw",
    name: "A.W. Pink",
    era: "1886-1952",
    context: "The Life of David and Gleanings from Elijah — deep Reformed character studies",
    bio: "Arthur W. Pink was a self-taught Reformed theologian and author whose character studies are among the most exhaustive and doctrinally rich in evangelical literature. His Life of David (4 volumes) traces every aspect of David's life with meticulous attention to the text and sustained theological application. Gleanings from Elijah presents the prophet's life as a sustained portrait of what true faith in God looks like — and what it costs. Pink's work is demanding, dense, and unflinching, requiring readers to engage seriously with both the text and its theological implications.",
    quote: "David's life is not presented to us as a model to be imitated in all its details, but as a mirror in which we may behold the grace of God — sufficient for the worst of sinners and the deepest of failures.",
    contribution: "Pink's character studies have had an outsized influence on Reformed evangelical preachers and teachers. His exhaustive treatment of David in particular has supplied generations of pastors with material for preaching and teaching through the life of Israel's greatest king. Though his work was barely noticed in his own lifetime, its posthumous influence through Banner of Truth has been enormous.",
  },
  {
    id: "whyte-alex",
    name: "Alexander Whyte",
    era: "1836-1921",
    context: "Bible Characters — 6-volume set of vivid character portraits from across Scripture",
    bio: "Alexander Whyte was a Scottish Presbyterian minister and preacher whose 6-volume Bible Characters series remains one of the most vivid and psychologically penetrating treatments of biblical figures ever written. Whyte had the unusual gift of imaginative empathy — he could enter the inner life of a biblical character and make them breathe on the page. His character portraits range from the famous (David, Peter, Paul) to the obscure, and each is treated with the same theological seriousness and literary care. Whyte was especially gifted at portraying the complexity of character — the mixture of faith and failure, courage and cowardice, that marks nearly every biblical figure.",
    quote: "The Bible is full of men who began well and ended badly, and of men who began badly and ended well. Both kinds are there for our instruction. But it is the second kind that gives us the most hope.",
    contribution: "Bible Characters is one of the most comprehensive character study resources in evangelical literature. Whyte's ability to portray biblical figures with psychological depth and imaginative richness set a standard for the genre that few have matched. His work influenced C.S. Lewis, who cited Whyte as one of the writers who most shaped his own imaginative engagement with Scripture.",
  },
  {
    id: "wiersbe-w",
    name: "Warren Wiersbe",
    era: "1929-2019",
    context: "Be series — practical character studies for everyday believers",
    bio: "Warren Wiersbe was one of the most prolific and widely read evangelical Bible teachers of the 20th century. His Be series — over 50 volumes covering the entire New Testament and much of the Old — includes sustained character studies woven throughout accessible expository commentary. Titles like Be Faithful (on 1 and 2 Timothy), Be Daring (on Acts), and Be a Leader of Integrity (on Nehemiah) combine careful attention to the biblical text with practical application accessible to ordinary believers. Wiersbe's gift was making rigorous Bible study feel approachable without making it shallow.",
    quote: "The purpose of Bible study is not to fill your head with information but to transform your life. A character study that doesn't ask 'what does this mean for Monday morning?' has missed its mark.",
    contribution: "Wiersbe's Be series has sold millions of copies and has been used in small group Bible studies, personal devotions, and pastoral sermon preparation worldwide. His accessible yet substantive approach to character study democratized serious biblical engagement for a generation of believers who might have been intimidated by more scholarly treatments.",
  },
  {
    id: "swindoll-c",
    name: "Charles Swindoll",
    era: "b. 1934",
    context: "Great Lives series — popularized character study for modern readers",
    bio: "Charles Swindoll, founder of Insight for Living and former president of Dallas Theological Seminary, has made biblical character study accessible to millions through his Great Lives series. His books on David, Joseph, Moses, Esther, Job, Paul, and others combine careful biblical exposition with engaging narrative, vivid illustration, and clear application. Swindoll's radio ministry — Insight for Living — has broadcast character study material to audiences in over 190 countries. His particular gift is translating the emotional and relational reality of biblical figures for contemporary readers who may struggle to connect ancient stories to modern life.",
    quote: "David was not a saint pretending to be a sinner. He was a sinner becoming a saint — one repentance, one psalm, one act of mercy at a time. That is your story too, if you let it be.",
    contribution: "Swindoll's Great Lives series has introduced more modern readers to serious biblical character study than perhaps any other contemporary author. His combination of scholarly grounding (from DTS) and pastoral accessibility made character study feel relevant and immediate for ordinary believers. His radio ministry extended this influence to global audiences who had no access to his books.",
  },
];

const CHAR_VIDEOS = [
  { id: "cv1", title: "The Prodigal Sons", preacher: "Tim Keller", videoId: "lsTzXI7cJGA", description: "A masterful exposition of Luke 15 — both sons lost, both needing the father, both revealing different ways we reject grace." },
  { id: "cv2", title: "Don't Waste Your Life", preacher: "John Piper", videoId: "JHdB1dYAteA", description: "Piper's urgent call to live for something worthy of the one life God has given you — grounded in Paul's example in Philippians." },
  { id: "cv3", title: "Radical", preacher: "David Platt", videoId: "yhiHSf_L6_E", description: "Platt challenges comfortable Christianity and calls believers to the radical obedience modeled by the disciples in Acts." },
  { id: "cv4", title: "Shocking Youth Message", preacher: "Paul Washer", videoId: "uuabITeO4l8", description: "Washer's famous message challenging a generation of professing Christians to examine whether their faith is genuine." },
  { id: "cv5", title: "Supremacy of Christ and Truth", preacher: "Voddie Baucham", videoId: "by8ykv7-A3c", description: "Baucham makes a compelling case for the exclusive supremacy of Christ in a pluralistic culture." },
  { id: "cv6", title: "The Reason for God", preacher: "Tim Keller at Google", videoId: "Kxup3OS5ZhQ", description: "Keller presents the intellectual and existential case for Christian faith to a skeptical audience at Google." },
];

type MainTab = "characters" | "themes" | "voices" | "videos";

export default function CharacterStudyPage() {
  const [mainTab, setMainTab] = usePersistedState<MainTab>("vine_character-study_main_tab", "characters");
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_character_study_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try { const c = localStorage.getItem("vine_character_study_completed"); return c ? new Set(JSON.parse(c)) : new Set(); } catch { return new Set(); }
  });
  const [selected, setSelected] = useState<BiblicalCharacter | null>(null);
  const [activeSection, setActiveSection] = usePersistedState<"overview" | "lessons" | "moments" | "questions">("vine_character-study_active_section", "overview");
  const [filterTestament, setFilterTestament] = usePersistedState<"All" | "Old" | "New">("vine_character-study_filter_testament", "All");
  const [search, setSearch] = useState("");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_character-study_voice", "meyer-fb");
  const voiceItem = VOICES_CHAR.find(v => v.id === selectedVoice)!;


  const handleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_character_study_saved", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const handleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try { localStorage.setItem("vine_character_study_completed", JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filtered = characters.filter((c) => {
    if (filterTestament !== "All" && c.testament !== filterTestament) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content">
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0a0a20 0%, #07070F 100%)", padding: "52px 24px 36px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>📜</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Biblical Character Studies</h1>
        <p style={{ fontSize: 16, color: MUTED, maxWidth: 520, margin: "0 auto 24px" }}>
          Deep dives into the lives of biblical figures &mdash; their failures, faithfulness, key lessons, and what they reveal about God.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[
            { value: characters.length.toString(), label: "Characters" },
            { value: completedIds.size.toString(), label: "Studied" },
            { value: savedIds.size.toString(), label: "Saved" },
            { value: characters.reduce((s, c) => s + c.keyLessons.length, 0).toString(), label: "Key Lessons" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 24, fontWeight: 700, color: GREEN }}>{s.value}</div>
              <div style={{ fontSize: 12, color: MUTED }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>

        {/* Main Tab Bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {(["characters", "themes", "voices", "videos"] as const).map(t => (
            <button type="button" key={t} onClick={() => setMainTab(t)} style={{ background: mainTab === t ? PURPLE : "transparent", color: mainTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "characters" ? "Characters" : t === "themes" ? "Themes" : t === "voices" ? "Voices" : "Videos"}
            </button>
          ))}
        </div>

        {/* Characters Tab */}
        {mainTab === "characters" && (
          <>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
              <input value={search} onChange={(e) => setSearch(e.target.value)}
                aria-label="Search characters..." placeholder="Search characters..."
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "9px 14px", color: TEXT, fontSize: 13, outline: "none", minWidth: 180 }} />
              {(["All", "Old", "New"] as const).map((t) => (
                <button type="button" key={t} onClick={() => setFilterTestament(t)}
                  style={{ padding: "7px 18px", borderRadius: 20, fontSize: 13, cursor: "pointer",
                    border: `1px solid ${filterTestament === t ? PURPLE : BORDER}`,
                    background: filterTestament === t ? `${PURPLE}20` : "transparent",
                    color: filterTestament === t ? PURPLE : MUTED }}>
                  {t === "All" ? "All" : t + " Testament"}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
              {filtered.map((char) => {
                const saved = savedIds.has(char.id);
                const done = completedIds.has(char.id);
                return (
                  <div key={char.id}
                    style={{ background: CARD, border: `1px solid ${done ? "#3a7d5630" : BORDER}`, borderRadius: 16, padding: 22, cursor: "pointer" }}
                    onClick={() => { setSelected(char); setActiveSection("overview"); }}>
                    <div style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                      <div style={{ fontSize: 40 }}>{char.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <h3 style={{ fontSize: 18, fontWeight: 700, color: TEXT, margin: 0 }}>{char.name}</h3>
                          {done && <span style={{ color: GREEN, fontSize: 14 }}>✓</span>}
                        </div>
                        <div style={{ fontSize: 12, color: MUTED }}>{char.role}</div>
                        <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                          <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: char.testament === "Old" ? "#F59E0B20" : `${PURPLE}20`, color: char.testament === "Old" ? "#F59E0B" : PURPLE }}>
                            {char.testament} Testament
                          </span>
                          <span style={{ padding: "1px 8px", borderRadius: 20, fontSize: 10, background: BORDER, color: MUTED }}>{char.era}</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ borderLeft: `2px solid ${PURPLE}40`, paddingLeft: 10, marginBottom: 12 }}>
                      <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>&ldquo;{char.keyVerse.slice(0, 80)}&hellip;&rdquo;</div>
                      <div style={{ fontSize: 10, color: PURPLE, marginTop: 2 }}>{char.keyVerseRef}</div>
                    </div>

                    <div style={{ fontSize: 12, color: MUTED, marginBottom: 14 }}>
                      {char.keyLessons.length} key lessons &middot; {char.keyMoments.length} key moments &middot; {char.studyQuestions.length} study questions
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button type="button" onClick={(e) => { e.stopPropagation(); handleSave(char.id); }}
                        style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: saved ? `${PURPLE}20` : BORDER, color: saved ? PURPLE : MUTED, cursor: "pointer", fontSize: 13 }}>
                        {saved ? "★" : "☆"}
                      </button>
                      <button type="button" onClick={(e) => { e.stopPropagation(); setSelected(char); setActiveSection("overview"); }}
                        style={{ flex: 1, padding: "6px 12px", borderRadius: 7, border: "none", background: PURPLE, color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
                        Study →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Themes Tab */}
        {mainTab === "themes" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Cross-Character Themes</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>Six patterns that run through the lives of biblical figures &mdash; each illuminating a different facet of God&rsquo;s character and his ways with people.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
              {CHARACTER_THEMES.map(th => (
                <div key={th.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{th.icon}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0 }}>{th.theme}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 16 }}>{th.description}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {th.characters.map(name => (
                      <span key={name} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: `${GREEN}12`, color: GREEN, border: `1px solid ${GREEN}30`, fontWeight: 600 }}>{name}</span>
                    ))}
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 14, borderLeft: `3px solid ${PURPLE}` }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Key Lesson</div>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{th.keyLesson}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Voices Tab */}
        {mainTab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_CHAR.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? `${GREEN}60` : BORDER}`, background: selectedVoice === v.id ? `${GREEN}08` : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {mainTab === "videos" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Recommended Teachings</h2>
              <p style={{ color: MUTED, fontSize: 14 }}>Six messages from preachers who have embodied or taught the character of Christ.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 24 }}>
              {CHAR_VIDEOS.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", borderRadius: 0, display: "block" }}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, background: `${PURPLE}20`, color: PURPLE, fontWeight: 700, border: `1px solid ${PURPLE}40` }}>{v.preacher}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, marginBottom: 6 }}>{v.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Character Study Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}
          onClick={() => setSelected(null)}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, maxWidth: 660, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ fontSize: 48 }}>{selected.emoji}</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: TEXT, marginBottom: 2 }}>{selected.name}</h2>
                <div style={{ fontSize: 13, color: MUTED }}>{selected.role} &middot; {selected.era}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button type="button" onClick={() => handleSave(selected.id)}
                  style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: savedIds.has(selected.id) ? `${PURPLE}20` : BORDER, color: savedIds.has(selected.id) ? PURPLE : MUTED, cursor: "pointer", fontSize: 16 }}>
                  {savedIds.has(selected.id) ? "★" : "☆"}
                </button>
              </div>
            </div>

            {/* Section tabs */}
            <div style={{ display: "flex", gap: 4, background: BG, borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(["overview", "lessons", "moments", "questions"] as const).map((s) => (
                <button type="button" key={s} onClick={() => setActiveSection(s)}
                  style={{ flex: 1, padding: "7px 8px", borderRadius: 7, border: "none",
                    background: activeSection === s ? PURPLE : "transparent",
                    color: activeSection === s ? "#fff" : MUTED,
                    cursor: "pointer", fontWeight: 600, fontSize: 11, textTransform: "capitalize" }}>
                  {s === "lessons" ? "Key Lessons" : s === "moments" ? "Key Moments" : s === "questions" ? "Study Qs" : "Overview"}
                </button>
              ))}
            </div>

            {activeSection === "overview" && (
              <div>
                <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: `4px solid ${PURPLE}` }}>
                  <div style={{ fontSize: 14, color: TEXT, fontStyle: "italic", lineHeight: 1.7, marginBottom: 6 }}>&ldquo;{selected.keyVerse}&rdquo;</div>
                  <div style={{ fontSize: 12, color: PURPLE, fontWeight: 600 }}>{selected.keyVerseRef}</div>
                </div>
                <p style={{ fontSize: 14, color: "#D0D0E8", lineHeight: 1.8, marginBottom: 20 }}>{selected.lifeSummary}</p>

                <h3 style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Character Traits</h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                  {selected.characterTraits.map((t) => (
                    <span key={t.trait} style={{
                      padding: "3px 10px", borderRadius: 20, fontSize: 11,
                      background: t.positive ? "#3a7d5615" : "#EF444415",
                      color: t.positive ? GREEN : "#EF4444",
                      border: `1px solid ${t.positive ? "#3a7d5630" : "#EF444430"}`,
                    }}>
                      {t.positive ? "+" : "−"} {t.trait}
                    </span>
                  ))}
                </div>

                <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 16, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ fontSize: 11, color: GREEN, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Application Today</div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{selected.applicationToday}</p>
                </div>

                <div style={{ fontSize: 12, color: MUTED }}>Related characters: {selected.relatedCharacters.join(", ")}</div>
              </div>
            )}

            {activeSection === "lessons" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {selected.keyLessons.map((lesson, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 12, padding: 16 }}>
                    <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}`, color: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <h4 style={{ fontSize: 14, fontWeight: 700, color: TEXT, margin: 0 }}>{lesson.title}</h4>
                    </div>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: "0 0 10px 34px" }}>{lesson.body}</p>
                    {lesson.verse && (
                      <div style={{ marginLeft: 34, borderLeft: `2px solid ${PURPLE}40`, paddingLeft: 10 }}>
                        <div style={{ fontSize: 12, color: TEXT, fontStyle: "italic" }}>&ldquo;{lesson.verse}&rdquo;</div>
                        <div style={{ fontSize: 11, color: PURPLE, marginTop: 2 }}>{lesson.verseRef}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeSection === "moments" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selected.keyMoments.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: 12 }}>
                    <div style={{ width: 2, background: `${PURPLE}40`, flexShrink: 0, borderRadius: 2, marginTop: 4 }} />
                    <div>
                      <div style={{ fontWeight: 700, color: TEXT, fontSize: 14, marginBottom: 2 }}>{m.moment}</div>
                      <div style={{ fontSize: 11, color: PURPLE, marginBottom: 4 }}><VerseRef reference={m.reference} /></div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6 }}>{m.significance}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "questions" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selected.studyQuestions.map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: 14 }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#3a7d5615", border: "1px solid #3a7d5630", color: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <div style={{ fontSize: 13, color: "#D0D0E8", lineHeight: 1.6, paddingTop: 2 }}>{q}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button type="button" onClick={() => handleComplete(selected.id)}
                style={{
                  flex: 1, padding: "11px 16px", borderRadius: 10, border: "none",
                  background: completedIds.has(selected.id) ? "#3a7d5620" : PURPLE,
                  color: completedIds.has(selected.id) ? GREEN : "#fff",
                  cursor: "pointer", fontWeight: 700, fontSize: 15,
                }}>
                {completedIds.has(selected.id) ? "✓ Studied" : "Mark as Studied"}
              </button>
              <button type="button" onClick={() => setSelected(null)}
                style={{ padding: "11px 16px", borderRadius: 10, border: `1px solid ${BORDER}`, background: "transparent", color: MUTED, cursor: "pointer", fontSize: 15 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
}
