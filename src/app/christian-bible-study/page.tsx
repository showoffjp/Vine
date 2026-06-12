"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_biblestudyguide_entries";

interface BSGEntry {
  id: string;
  date: string;
  passage: string;
  context: string;
  application: string;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "2 Timothy 3:16-17",
    title: "Inspiration and Inerrancy — A Brief Primer",
    paragraphs: [
      "Paul&rsquo;s claim in 2 Timothy 3:16-17 is among the most loaded sentences in the Bible: &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.&rdquo; The word translated &ldquo;breathed out by God&rdquo; is theopneustos — God-breathed — a compound that Paul may have coined. It does not say the biblical authors were passive secretaries; the Psalms are unmistakably David&rsquo;s personality, Luke is unmistakably Luke&rsquo;s research, John is unmistakably John&rsquo;s idiom. What it says is that through the process of their writing — fully human in its thought, vocabulary, circumstance, and emotion — the result is what God wanted to be written.",
      "Inerrancy — the claim that Scripture, in its original manuscripts, contains no errors — follows from inspiration but requires careful handling. It means what Scripture affirms is true; it does not mean Scripture answers every question, uses precise modern scientific categories, or intends every number as an exact census. The doctrine protects the authority and trustworthiness of the Bible; it does not protect careless reading from itself. You can believe every word is true and still badly misread what it means — as the history of heresy demonstrates.",
      "The practical import of 2 Tim 3:16-17 is in the purpose clause: Scripture is breathed out so that the person of God may be complete and equipped. The goal of the Bible is not information management; it is human completion — the formation of the whole person. Every right approach to Bible study keeps that goal in sight. We read not to win arguments or fill theological registers, but to become.",
    ],
    callout: {
      label: "Theopneustos",
      text: "God-breathed: the Scripture&rsquo;s human authors wrote fully as themselves — their personality, research, vocabulary, circumstances — and the result is what God wanted written. Both fully human and fully divine.",
    },
  },
  {
    badge: "James 1:22",
    title: "The Goal of Bible Study — Transformation, Not Information",
    paragraphs: [
      "&ldquo;But be doers of the word, and not hearers only, deceiving yourselves.&rdquo; (James 1:22). James&rsquo; warning is addressed to people who have read the text — they have heard it — but have not moved from understanding to obedience. His image is pointed: a man who looks into a mirror, sees his face, and immediately forgets what he looks like (James 1:23-24). The text is the mirror. To read it and walk away unchanged is to have looked without seeing.",
      "The distinction between information and transformation is not a modern self-help insight; it runs through the entire biblical tradition. Jeremiah promises a new covenant in which the law will be written on the heart rather than tablets (Jer 31:33). Paul prays not that his congregations would learn more propositions about God but that they would know Christ (Phil 3:10), that the eyes of their hearts would be enlightened (Eph 1:18), that they would be transformed by the renewing of their minds (Rom 12:2). The goal is not a well-indexed theological data set; it is Christlikeness.",
      "Colossians 3:16 sets the aim precisely: &ldquo;Let the word of Christ dwell in you richly.&rdquo; The verb is to dwell — to take up residence, to make a home. The adverb is richly — not barely, not as a visitor, not squeezed into the corner. A text that dwells in you is one you have not only read but absorbed, digested, been shaped by. That is what Bible study is for. The intellectual disciplines of hermeneutics and exegesis are in service of this goal, never a substitute for it.",
    ],
  },
  {
    badge: "Hermeneutics",
    title: "Hermeneutics Made Simple — Context, Genre, Author Intent, Progressive Revelation",
    paragraphs: [
      "Hermeneutics is the discipline of interpretation — the set of questions we ask of a text to understand what it means. For the non-scholar, four questions cover most of the ground. First, context: what is happening in the chapters around this passage? What is the argument of the book? Who is the author, who are the original recipients, and what is the occasion of writing? A verse that makes no sense alone often becomes clear when its paragraph, chapter, and book context are read. Second, genre: is this poetry or history, prophecy or epistle, wisdom literature or apocalyptic? Each genre has its own conventions, and reading a Psalm as if it were a contract, or Revelation as if it were a news report, guarantees misreading.",
      "Third, author intent: what was the human author trying to communicate to the original audience in their specific historical and cultural moment? This is not the only question, but it is the first question. A text cannot mean what its author could not have meant. Ignoring the original meaning and jumping directly to contemporary application skips the step that makes the application legitimate. Fourth, progressive revelation: how does this passage fit into the arc of God&rsquo;s self-disclosure from creation to new creation? Old Testament passages are not read the same way after the death and resurrection of Christ as they were before — the light of fulfillment illuminates what was promise.",
      "Gordon Fee and Douglas Stuart&rsquo;s How to Read the Bible for All Its Worth is the standard introduction to these questions, accessible to anyone. The goal of hermeneutics is not to make the Bible complicated but to make it accurately understood — to ensure that what we obey is what the text actually says, not what we have projected onto it.",
    ],
    callout: {
      label: "Four questions",
      text: "Context (what is around this?), Genre (what kind of writing is this?), Author Intent (what was being communicated then?), Progressive Revelation (how does this fit the whole story of Scripture?).",
    },
  },
  {
    badge: "Matthew 4",
    title: "The Danger of Proof-Texting — The Devil Used Scripture Too",
    paragraphs: [
      "Matthew 4&rsquo;s temptation narrative contains a warning that Bible students rarely dwell on long enough: the devil quotes Scripture. &ldquo;If you are the Son of God, throw yourself down, for it is written, &lsquo;He will command his angels concerning you,&rsquo; and &lsquo;On their hands they will bear you up, lest you strike your foot against a stone.&rsquo;&rdquo; (Matt 4:6). The quotation is accurate — it is from Psalm 91:11-12. The application is catastrophically wrong. The adversary&rsquo;s Bible study is technically correct and spiritually disastrous.",
      "Proof-texting is the practice of lifting a verse out of its context to support a predetermined conclusion, using the authority of the text without submitting to the meaning of the text. It is the hermeneutic of the adversary. Every cult, every abusive theology, every distortion of the faith has been built, at least partly, on proof-texts — genuine words of Scripture wrested from their context and made to say what they do not mean. The cure is not to trust the Bible less, but to read it more carefully — in context, in genre, in the light of the whole canon.",
      "Jesus answers every temptation in Matthew 4 with Scripture too — but with Scripture understood in its context and applied with integrity to the actual situation. &ldquo;It is written&rdquo; appears three times from the devil; &ldquo;it is also written&rdquo; and &ldquo;it is written&rdquo; appear three times from Jesus. The difference is not that one has the Bible and the other doesn&rsquo;t — it is that one reads it as a tool and the other lives inside it as a world.",
    ],
  },
  {
    badge: "Bible Reading Plans",
    title: "Bible Reading Plans — Their Value and Their Limitations",
    paragraphs: [
      "Bible reading plans — chronological, canonical, one-year, M&rsquo;Cheyne, the Bible Project — serve a genuine purpose: they get you through the whole Bible, prevent the cherry-picking of favorite passages, and build the broad familiarity with the canon that makes individual passages interpretable. Someone who has read through the whole Bible, even once, has a different relationship with any single passage than someone who knows only the New Testament and the Psalms. Plans impose the discipline that familiarity with the whole requires.",
      "Their limitations are equally real. A plan that takes you through the whole Bible in a year gives you roughly three minutes per chapter, which is enough to read but rarely enough to absorb. The goal of Bible reading is not completion; it is formation. A person who has spent a week with the Sermon on the Mount — slowly, repeatedly, prayerfully — has received more than a person who has read through Matthew three times. Eugene Peterson&rsquo;s Eat This Book argues that the church has largely traded formative reading for informational reading, and that the recovery of Scripture&rsquo;s power requires learning to read slowly again — lectio divina, meditatio, the unhurried dwelling in the text.",
      "The practical wisdom is to do both: use a reading plan to move through the whole canon and build breadth, while simultaneously choosing one passage per week for slow, deep, repeated engagement. The plan gives the map; the slow reading gives the home.",
    ],
  },
  {
    badge: "Exegesis vs. Eisegesis",
    title: "Exegesis and Eisegesis — Reading Out and Reading In",
    paragraphs: [
      "Exegesis (from the Greek exegeisthai, to lead out) means drawing the meaning out of the text — letting the text determine the interpretation. Eisegesis (from eisago, to lead in) means reading your own meaning into the text — arriving at the text with a conclusion already in hand and finding it there. Most careless Bible reading is eisegesis: we bring our anxieties, our traditions, our preferences, our culture, and our agendas to the text and hear them confirmed. The text becomes a mirror of ourselves rather than a window onto God.",
      "The disciplines that guard against eisegesis are the same disciplines that make exegesis possible: reading in context (what does the paragraph say?), attending to genre (is this a promise, a command, a description?), comparing Scripture with Scripture (does the whole Bible support this reading?), and submitting to the discomfort when the text says something we did not want it to say. The hardest exegesis is the kind that reverses our prior convictions. That is also the most valuable kind — the place where genuine transformation by Scripture begins.",
      "A practical test: after reading a passage, ask &ldquo;What does this text require of me?&rdquo; If the answer is always comfortable, always confirming, always what you already believed, suspect eisegesis. The Bible is a strange and demanding book; a reading that costs nothing may have found nothing.",
    ],
    callout: {
      label: "The test",
      text: "Exegesis asks: what does the text say? Eisegesis answers: what do I want it to say? The difference is whether the text is shaping you or you are shaping the text.",
    },
  },
  {
    badge: "Devotional vs. Study Reading",
    title: "Devotional and Study Reading — Both Have Their Place",
    paragraphs: [
      "Devotional reading and study reading are two modes of engaging Scripture, and the common error is to treat them as competitors. Devotional reading moves slowly through a short passage — a few verses, sometimes just one — listening for what God is saying directly to the reader, right now, in their specific circumstance. It is personal, present-tense, and relational. Study reading moves through a larger section with questions: what did this mean to its original audience? what is the argument of this chapter? what grammatical or historical data illuminates the text? It is objective, historical, and analytical.",
      "Both are necessary and neither replaces the other. Devotional reading without the ballast of study becomes prone to eisegesis — hearing whatever you need to hear rather than what the text says. Study reading without the attentiveness of devotional reading becomes merely academic — a mastery of information that does not produce the obedience James requires. The person who can parse every Greek verb in Romans 5 and has not been broken open by the love it describes has mastered the text without being mastered by it.",
      "The tradition of lectio divina — sacred reading — is the bridge: it reads devotionally but with enough slow attention to the text itself that it resists pure projection. Read the passage. Read it again. Ask: what word or phrase arrests me? Sit with it. Ask what God might be saying through it, to you, today. Then pray it back to God. Then commit to one concrete act of obedience. Lectio divina is not less rigorous than study reading; it is differently rigorous — the rigor of attention and response rather than of analysis.",
    ],
  },
  {
    badge: "1 Corinthians 2:10-14",
    title: "The Holy Spirit as Illuminator — Understanding Requires More Than Intelligence",
    paragraphs: [
      "Paul&rsquo;s claim in 1 Corinthians 2 cuts against every purely academic approach to Scripture: &ldquo;The Spirit searches everything, even the depths of God. For who knows a person&rsquo;s thoughts except the spirit of that person, which is in him? So also no one comprehends the thoughts of God except the Spirit of God.&rdquo; (1 Cor 2:10b-11). The logic is clear: God&rsquo;s mind is accessible only from inside, and access from inside comes only through the Spirit. The one who has not received the Spirit of God &ldquo;does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned.&rdquo; (1 Cor 2:14).",
      "This does not make scholarship useless — the Spirit does not illuminate sloppy reading more reliably than careful reading — but it does insist that scholarship is insufficient. Brilliant unbelieving scholars can describe the literary structure of the Psalms, date the composition of Isaiah, and reconstruct the historical context of Galatians. What they cannot do is receive the passages as the living word of the living God addressed to their soul. That reception is the work of the Spirit, and it requires that the reader come to the text in faith and prayer, not only in academic competence.",
      "The practical implication: begin every Bible study session with a brief prayer inviting the Spirit to illuminate the text. This is not a ritual to make Bible study feel more spiritual; it is a theological acknowledgment of your actual dependence. You need the Author present to understand the book. Psalm 119:18 — &ldquo;Open my eyes, that I may behold wondrous things out of your law&rdquo; — is the oldest and most honest prayer before Scripture.",
    ],
  },
  {
    badge: "Christological Reading",
    title: "Reading the Old Testament Christologically",
    paragraphs: [
      "Jesus says to his opponents in John 5:39: &ldquo;You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me.&rdquo; And on the road to Emmaus, Luke tells us, &ldquo;beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.&rdquo; (Luke 24:27). For Jesus, the Old Testament is fundamentally a witness to him — not just the obviously messianic passages, but the whole arc of it.",
      "This creates the most important and the most misused principle in Christian biblical interpretation. It is true that Christ is the fulfillment of the Law and the Prophets (Matt 5:17), the one to whom all the types and shadows pointed, the true Israel, the true Adam, the true Temple, the true sacrifice. Reading the Old Testament in the light of that fulfillment is not an imposition on the text; it is reading it the way Jesus and the apostles read it. The New Testament interpretation of the Old Testament is itself authoritative interpretation.",
      "The misuse comes when Christological reading becomes allegorical license — finding Jesus in every detail regardless of the original meaning, turning the specific historical promises to Israel into floating spiritual symbols. The correction is progressive revelation: the Old Testament meant what it said to its original readers, and its fulfillment in Christ illuminates and amplifies that meaning rather than replacing it. The exodus is both a historical event and a type of the greater exodus Christ accomplished (Luke 9:31). Both are true, and neither cancels the other.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Observation-Interpretation-Application Method",
    summary:
      "The classic three-step approach to a passage: see what is there before you decide what it means, and know what it means before you decide what to do about it. Sequence protects against eisegesis.",
    steps: [
      "Observation: read the passage three times. Ask only what it says — who is speaking, to whom, in what context, what the key words and repeated phrases are, what the logic of the argument is. Write down what you notice without interpreting yet.",
      "Interpretation: now ask what it means — to the original audience, in its historical and cultural context, in light of the book&rsquo;s purpose and the passage&rsquo;s literary genre. Use a good study Bible, a Bible dictionary, or a commentary if needed. The question is: what was the author communicating, and why?",
      "Application: only after observing and interpreting, ask what it requires of you today. The application must be consistent with the interpretation — you cannot apply a passage in ways it was not designed to be applied. Aim for specificity: not &ldquo;I should be more loving&rdquo; but &ldquo;I should call [name] this week.&rdquo;",
      "Close with prayer: offer the application back to God as a commitment and ask for the Spirit&rsquo;s help in keeping it. The study is not complete until it has become prayer.",
    ],
    anchor: "2 Timothy 2:15 — Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.",
  },
  {
    number: "02",
    title: "Book Study — Reading One Book of the Bible Repeatedly",
    summary:
      "Choose a short New Testament letter — Philippians, Colossians, James, 1 John — and read it through repeatedly over one month. Familiarity with the whole produces understanding of every part.",
    steps: [
      "Week one: read the book straight through, daily, as a letter — no stops for cross-references or footnotes. You are building the instinct for the whole before studying the parts.",
      "Week two: read the book again each day, but now outline it. What are the main movements? What is the argument? Where are the pivots, the key repeated words, the central thesis?",
      "Week three: choose three to five passages that stood out and study each one using Observation-Interpretation-Application. Use a commentary or study Bible for the interpretation step.",
      "Week four: read the book through once more. Notice what you see now that you did not see in week one. Journal the two or three truths that have lodged most deeply — what you know now in your bones that you did not know a month ago.",
    ],
    anchor: "Deuteronomy 17:19 — And it shall be with him, and he shall read in it all the days of his life, that he may learn to fear the LORD his God by keeping all the words of this law.",
  },
  {
    number: "03",
    title: "Lectio Divina — Sacred Reading for Formation",
    summary:
      "The ancient practice of slow, receptive reading of a short passage — not to master the text but to be mastered by it. Four movements: Read, Meditate, Pray, Rest.",
    steps: [
      "Lectio (Read): choose a short passage — six to twelve verses. Read it slowly, aloud if possible. Read it again. Attend to any word or phrase that stands out — not the one you think should matter, but the one that does. Receive it, don&rsquo;t analyze it yet.",
      "Meditatio (Meditate): sit with the word or phrase. Let it expand. What images or memories does it call up? What does it say about God, about you, about your current situation? Repeat it in your mind gently, like turning a stone in your hand.",
      "Oratio (Pray): let the meditation become prayer. Speak back to God what the text has surfaced — adoration, confession, petition, gratitude. The prayer is shaped by the text, not imposed on it.",
      "Contemplatio (Rest): simply be present to God for a few minutes, holding the passage loosely. This is not emptiness; it is attentiveness. Let God have the last word in the conversation the text began.",
    ],
    anchor: "Psalm 1:2 — But his delight is in the law of the LORD, and on his law he meditates day and night.",
  },
  {
    number: "04",
    title: "Scripture Memory — Hiding the Word in the Heart",
    summary:
      "Committing a short passage to memory so that it is available to the Spirit&rsquo;s work at any moment — in fear, in temptation, in grief, in joy, without a phone or Bible in hand.",
    steps: [
      "Choose one verse or short passage per week. Choose by need: what do you most need to carry with you? Psalm 23, Philippians 4:6-7, Romans 8:38-39, the Lord&rsquo;s Prayer, Isaiah 40:31 — each is a different provision for a different kind of travel.",
      "Write the passage by hand each morning. The physicality of writing reinforces memory better than reading alone. Say it aloud. Write it again without looking. Repeat.",
      "Review previous weeks&rsquo; passages every day. Memory is a garden, not a warehouse: it requires maintenance. Carry one index card with current and recent passages; review it in any waiting moment.",
      "Use the passage when it applies. When anxiety rises, speak Philippians 4:6-7 to yourself — not as a formula but as address to God. When Scripture is already in you, the Spirit has material to work with.",
    ],
    anchor: "Psalm 119:11 — I have stored up your word in my heart, that I might not sin against you.",
  },
  {
    number: "05",
    title: "The Study Bible Plus Commentary Method",
    summary:
      "A basic two-layer research practice for going deeper on a passage: study Bible notes for immediate context and a commentary for sustained engagement with the text.",
    steps: [
      "Read the passage in a good translation first, without notes. Form your own first-impression observations. What is this saying? What questions does it raise for you?",
      "Read the study Bible notes for the passage. A good study Bible (ESV Study Bible, NIV Study Bible, CSB Study Bible) provides background, cross-references, and brief interpretive help at the verse level. Note any corrections to your first impressions.",
      "Consult one commentary. For the New Testament, D.A. Carson, N.T. Wright&rsquo;s For Everyone series, or the Pillar Commentary series are accessible and substantive. Read the commentary&rsquo;s section on your passage, attending to where your interpretation was confirmed, where it was corrected, and where the text is more complex than you thought.",
      "Write a one-paragraph summary: what does this text say, and what does it require? Keep it brief enough to share with someone else. If you cannot explain it simply, you have not yet fully understood it.",
    ],
    anchor: "Nehemiah 8:8 — They read from the book, from the Law of God, clearly, and they gave the sense, so that the people understood the reading.",
  },
  {
    number: "06",
    title: "Reading the Old Testament with the New Testament in Hand",
    summary:
      "A practice for developing Christological fluency — learning to read the Old Testament as Jesus and the apostles read it, seeing both original meaning and fulfillment.",
    steps: [
      "Choose an Old Testament passage — a Psalm, a prophetic section, a narrative episode. Read it in its original context first: who is speaking, to whom, about what? What did this mean to its original recipients?",
      "Now search the New Testament for any references to this passage. A cross-reference Bible or Bible software makes this simple. How does the New Testament interpret the Old Testament text? What does it say the passage ultimately pointed toward?",
      "Notice what is preserved and what is transformed: the exodus is still the exodus, and it is also a type of Christ&rsquo;s work. The Passover lamb is still a Passover lamb, and it is also &ldquo;our Passover lamb&rdquo; (1 Cor 5:7). Progressive revelation does not cancel but fulfills.",
      "Pray the passage twice: once as the original audience might have prayed it, and once in light of Christ&rsquo;s fulfillment. The second prayer is richer because it stands on the far side of the cross. Both prayers are yours.",
    ],
    anchor: "Luke 24:27 — And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Gordon Fee and Douglas Stuart",
    role: "How to Read the Bible for All Its Worth",
    quote:
      "The Bible is not a book of timeless principles, waiting to be extracted from their contexts. It is the living Word of God addressed to real people in real situations — and understanding those situations is the beginning of understanding how the Word addresses ours.",
    bio: "Gordon Fee (New Testament scholar, Pentecostal theologian) and Douglas Stuart (Old Testament scholar) collaborated on what has become the standard introduction to biblical hermeneutics for non-scholars. First published in 1981 and revised three times, How to Read the Bible for All Its Worth walks through every genre of Scripture — epistles, narratives, Gospels, Old Testament law, Psalms, wisdom literature, prophecy, apocalyptic — explaining the different conventions and interpretive principles each requires. It is the single most useful tool for the serious lay Bible reader who wants to move from well-intentioned reading to responsible interpretation.",
  },
  {
    name: "D.A. Carson",
    role: "Exegetical Fallacies and the Spirit of Reading",
    quote:
      "One of the most important things you can do as a Bible reader is to learn to listen to the text rather than speak to it. Most of us come to Scripture not to hear what it says but to find support for what we already believe. The text has a voice of its own, and it will only speak if we stop long enough to hear it.",
    bio: "D.A. Carson, Research Professor of New Testament at Trinity Evangelical Divinity School and co-founder of The Gospel Coalition, has spent his career on the intersection of rigorous scholarship and accessible application. His Exegetical Fallacies catalogs the most common mistakes Bible readers make — word-study fallacies, syntactical fallacies, logical fallacies in the handling of texts — and is one of the most practically useful books in the discipline. His For the Love of God devotional series demonstrates that careful exegesis and warm devotion are not alternatives. Carson&rsquo;s witness is that the more honestly you read the Bible on its own terms, the more compelling it becomes.",
  },
  {
    name: "John Stott",
    role: "Understanding the Bible — Scripture as Living Word",
    quote:
      "God did not give us the Bible so that we could sit back comfortably and say that we know what it teaches. He gave it to us so that, knowing what he has said, we might obey him and be transformed into the image of his Son.",
    bio: "John Stott — Rector of All Souls Langham Place, founder of the Langham Partnership, and one of the most influential evangelical voices of the twentieth century — wrote Understanding the Bible as a primer for the ordinary believer. His conviction, threaded through everything he wrote, was that the Bible is fully intelligible to the ordinary reader who approaches it with care, honesty, and faith — that the depth of Scripture is not a barrier to the non-scholar but a gift waiting to be received. His expository preaching ministry at All Souls demonstrated for decades that careful biblical exposition, accessible to any listener, is the primary engine of church formation. Stott was a model of what it looks like to have one&rsquo;s entire mind shaped by Scripture.",
  },
  {
    name: "Eugene Peterson",
    role: "Eat This Book — Scripture as Food, Not Data",
    quote:
      "Reading is not a consumer activity. We do not read the Bible to gather information about God the way we gather sports statistics. We read to enter a world, to be formed by a story, to find ourselves addressed by a Voice. This requires a different kind of reading than we have been taught.",
    bio: "Eugene Peterson — pastor, poet, translator of The Message, and author of thirty books — spent his career arguing that the church has largely lost the capacity to read Scripture formatively. Eat This Book takes its title from the command to Ezekiel (Ezek 3:1-3) and to John (Rev 10:9-10) to eat the scroll — to receive the Word not as data but as food, to internalize it until it changes the composition of the reader. Peterson&rsquo;s recovery project is the lectio divina tradition, which he argues is not a specialized spiritual technique for monastics but the normal, organic form of reading Scripture that the church practiced for its first fifteen hundred years. His book is the most eloquent diagnosis of what modern Bible reading has lost and the most appealing invitation to recover it.",
  },
  {
    name: "Jen Wilkin",
    role: "Women of the Word — Bible Literacy for Everyone",
    quote:
      "We cannot love what we do not know. Heart transformation follows mind renewal. The person who wants to love God with all her heart must first love God with all her mind — and loving God with the mind means knowing what the Bible actually says, not what we hope it says.",
    bio: "Jen Wilkin — Bible teacher, author, and director of training at The Village Church — wrote Women of the Word to address a pattern she had observed in women&rsquo;s Bible study: deep desire for the Word paired with methods that produced emotional experience but little actual biblical knowledge. Her argument is direct: before the heart can be transformed by Scripture, the mind must understand it. This requires reading books, not just verses; understanding context, not just application; studying authors and audiences, not just personal takeaways. Wilkin&rsquo;s approach has influenced a generation of women (and men) toward more rigorous, more sustained, and ultimately more formative engagement with Scripture. Her framework is neither dry nor academic; it is practical, warm, and honest about the hard work real Bible study requires.",
  },
  {
    name: "N.T. Wright",
    role: "Scripture and the Authority of God",
    quote:
      "The Bible is not a collection of timeless truths. It is the story of God&rsquo;s saving action in history, and we are living in its final chapter. To read Scripture rightly is to know what kind of story we are in, and to live accordingly.",
    bio: "N.T. Wright — former Bishop of Durham, now Professor of New Testament at St Andrews, and one of the most prolific New Testament scholars of the last generation — argues in Scripture and the Authority of God that the church has often confused the authority of Scripture with the authority of particular traditions of interpreting it. His account of scriptural authority is narrative: the Bible tells the story of God&rsquo;s kingdom, fulfilled in Jesus, now continuing in the church by the Spirit, awaiting consummation. To be under the authority of Scripture is not primarily to extract timeless propositions but to know your place in the story and live faithfully within it. His For Everyone commentary series makes the New Testament accessible at the verse level while keeping the narrative context always in view.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "2 Timothy 3:16-17",
    text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.",
    reflection:
      "Four purposes of Scripture, and all four are formative rather than informational: teaching (what is true), reproof (what is wrong), correction (how to return), and training in righteousness (how to walk rightly). The goal declared in verse 17 is not knowledge but completeness — the Greek word is artios, fully equipped, nothing missing. Bible study that produces information without formation has done the reading but missed the point.",
  },
  {
    reference: "James 1:22-25",
    text: "But be doers of the word, and not hearers only, deceiving yourselves. For if anyone is a hearer of the word and not a doer, he is like a man who looks intently at his natural face in a mirror. For he looks at himself and goes away and at once forgets what he was like. But the one who looks into the perfect law, the law of liberty, and perseveres, being no hearer who forgets but a doer who acts, he will be blessed in his doing.",
    reflection:
      "The mirror image is relentless: the person who hears and does not obey has used the mirror for a purpose it cannot serve. A mirror does not transform — it only reveals. But it is designed to change what happens next. The blessing in verse 25 is not for the one who &ldquo;understands&rdquo; but for the one who &ldquo;acts.&rdquo; Blessed Bible study ends in doing, not in comprehension alone.",
  },
  {
    reference: "Psalm 119:9-11",
    text: "How can a young man keep his way pure? By guarding it according to your word. With my whole heart I seek you; let me not wander from your commandments! I have stored up your word in my heart, that I might not sin against you.",
    reflection:
      "The longest chapter in the Bible is an acrostic poem on the beauty and necessity of God&rsquo;s word — 176 verses in which every line is a meditation on what Scripture is and does. Verse 11 grounds Scripture memory in relationship: the word is stored in the heart not as a compliance strategy but as a means of staying near to God. &ldquo;That I might not sin against you&rdquo; — not &ldquo;that I might not sin&rdquo; in the abstract. The Word is a tether to a person.",
  },
  {
    reference: "1 Corinthians 2:12-14",
    text: "Now we have received not the spirit of the world, but the Spirit who is from God, that we might understand the things freely given us by God. And we impart this in words not taught by human wisdom but taught by the Spirit, interpreting spiritual truths to those who are spiritual. The natural person does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned.",
    reflection:
      "The Holy Spirit is not a supplement to good Bible reading; he is its precondition. &ldquo;The things freely given us by God&rdquo; — the gifts of the gospel, the meaning of the cross, the depth of grace — are not accessible to the most brilliant unaided intelligence. This does not make scholarship useless; it makes the Spirit essential. Pray before you read. Not to complete a ritual — to acknowledge an actual dependence.",
  },
  {
    reference: "Luke 24:45",
    text: "Then he opened their minds to understand the Scriptures.",
    reflection:
      "The disciples had the same Old Testament scrolls they had always had. What changed on the road to Emmaus and in the upper room is that Jesus &ldquo;opened their minds.&rdquo; The text had not changed; their capacity to receive it had. This is the work of the risen Christ, still ongoing in every believer who comes to Scripture in faith — the opening of the mind that turns reading into encounter. Bible study that begins with this prayer is differently equipped than one that does not.",
  },
  {
    reference: "Colossians 3:16",
    text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
    reflection:
      "The metaphor of dwelling — making a home — sets the aim of the whole enterprise. Not read, not consulted, not referenced — dwell. Richly: abundantly, generously, not barely. And the dwelling is not solitary: it overflows into teaching, admonishing, singing, thanksgiving in community. The Word that dwells in you does not stay in you; it shapes how you live with others and how you address God.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "bFG0_4TYkC8", title: "How to Study the Bible: Observation, Interpretation, Application" },
  { videoId: "ux-8YjuBDJk", title: "Hermeneutics 101 — Context and Genre in Scripture" },
  { videoId: "mXdLuADHJzY", title: "The Bible Project: How to Read the Bible" },
  { videoId: "D8cWpbbmzis", title: "Exegesis vs. Eisegesis — Reading In or Drawing Out" },
  { videoId: "kkwwHXL1cL4", title: "Lectio Divina: Sacred Reading for Formation" },
  { videoId: "BO_tSHJYubU", title: "Reading the Old Testament as a Christian" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianBibleStudyPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<BSGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [passage, setPassage] = useState("");
  const [context, setContext] = useState("");
  const [application, setApplication] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as BSGEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!passage.trim() || !context.trim()) return;
    const entry: BSGEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      passage: passage.trim(),
      context: context.trim(),
      application: application.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPassage("");
    setContext("");
    setApplication("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Scripture
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              A Lamp to My Feet: How to Study the Bible Well
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              &ldquo;Your word is a lamp to my feet and a light to my path&rdquo; (Psalm 119:105).
              The Bible is the most studied and the most misread book in human history. Understanding
              it well requires not intelligence alone but the right tools, the right posture, and the
              presence of the Spirit who inspired it. This guide covers the theology of Scripture,
              practical hermeneutics, and six practices for letting the Word of Christ dwell in you
              richly.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Let the word of Christ dwell in you richly, teaching and admonishing one
                another in all wisdom, singing psalms and hymns and spiritual songs, with
                thankfulness in your hearts to God.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Colossians 3:16</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The theology of Bible study begins with what the Bible is — God-breathed, sufficient,
                and requiring the Spirit to be understood — and moves through the principles that
                distinguish responsible interpretation from projection. These nine studies build the
                foundation for a lifetime of fruitful Scripture engagement.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GOLD,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(217, 119, 6, 0.07)",
                        border: `1px solid rgba(217, 119, 6, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The simplest and the hardest thing
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The simplest thing about Bible study is that it requires only a Bible, a willing
                  reader, and the Spirit&rsquo;s help. The hardest thing is that it requires
                  submitting to a text that does not always say what we want it to say, in a story
                  larger than our preferences, about a God wilder and more merciful than our
                  projections. The reward for that submission is inestimable. Explore how Scripture
                  feeds the praying life in{" "}
                  <Link href="/christian-prayer-types" style={{ color: GOLD, textDecoration: "underline" }}>
                    Types of Christian Prayer
                  </Link>
                  , or take Scripture into community through{" "}
                  <Link href="/christian-spiritual-disciplines" style={{ color: GOLD, textDecoration: "underline" }}>
                    Spiritual Disciplines
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices that move Scripture from the page into the life — from the classic
                OIA method to lectio divina to Christological reading of the Old Testament. The
                Journal tab is built to track your studies as you work through them.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}>
                    {practice.summary}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: 10 }}>
                    {practice.steps.map((step, i) => (
                      <li key={i} style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where to begin
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  If you have never studied the Bible intentionally, start with Practice 01
                  (OIA) on a single passage — try Philippians 1:1-11. If your Bible reading has
                  become perfunctory or rushed, try Practice 03 (Lectio Divina) for one week. If
                  you want to build a more systematic knowledge of Scripture, try Practice 02 (Book
                  Study). All of these feed each other over time; the goal is a life in which
                  Scripture is not consulted but inhabited.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers of Scripture — spanning hermeneutics, devotional reading, biblical
                theology, and women&rsquo;s ministry — each with a distinctive contribution to what
                it means to read the Bible well.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: GOLD,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {voice.role}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages about Scripture itself — what it is, what it does, and how to receive
                it. Each is worth memorizing, not just reading. Consider taking one per week and
                letting it shape your approach to Bible study during that time.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The meta-passage
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Psalm 119 is the longest chapter in the Bible and the most extended meditation on
                  what Scripture is. Its 176 verses return again and again to the same central
                  conviction: the word of God is the source of life, light, joy, and stability in a
                  world that provides none of these things reliably. To read through Psalm 119 slowly
                  — one stanza per day, twenty-two days — is to spend three weeks marinating in the
                  most complete account of what it means to love the Bible. It is where any serious
                  study of biblical study should eventually arrive.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Log a passage you studied, what it meant in its original context (what did it mean
                then?), and how it applies to your life now (what does it mean today?). The gap
                between those two questions is where responsible interpretation lives. Entries are
                saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New study entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="bsg-passage" style={labelStyle}>
                    Passage studied
                  </label>
                  <input
                    id="bsg-passage"
                    type="text"
                    value={passage}
                    onChange={(e) => setPassage(e.target.value)}
                    placeholder="e.g. Romans 5:1-11, Psalm 23, Matthew 5:1-12"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="bsg-context" style={labelStyle}>
                    Context — what did it mean then?
                  </label>
                  <textarea
                    id="bsg-context"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Who was the author, who were the recipients, what was the occasion? What was being communicated to the original audience in their specific situation?"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="bsg-application" style={labelStyle}>
                    Application — what does it mean now?
                  </label>
                  <textarea
                    id="bsg-application"
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    placeholder="What does this passage require of you today? Be specific — not 'I should trust God more' but a concrete obedience, a changed attitude, an action this week."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!passage.trim() || !context.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !passage.trim() || !context.trim() ? BORDER : GOLD,
                    color: !passage.trim() || !context.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !passage.trim() || !context.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Choose one passage today — even a single paragraph — and work through the
                      context and application questions. The discipline starts here.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD }}>
                              {entry.passage}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.passage}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        <div style={{ marginBottom: entry.application ? 10 : 0 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            Context (what it meant then)
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.context}
                          </p>
                        </div>

                        {entry.application && (
                          <div>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              Application (what it means now)
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.application}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on how to read and study the Bible well — the OIA method, hermeneutics and
                context, exegesis versus eisegesis, lectio divina, and reading the Old Testament as
                a Christian. Best watched alongside the Theology and Practices tabs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              The Word that does not return empty
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Isaiah 55:11 promises that God&rsquo;s word &ldquo;shall not return to me empty, but
              it shall accomplish that which I purpose, and shall succeed in the thing for which I
              sent it.&rdquo; The Word has a mission. It does not depend on the quality of the
              reading to accomplish that mission — but it is most fully received by those who bring
              to it honesty, patience, and faith. Bible study done well is not an academic
              discipline bolted onto the Christian life; it is the primary means by which the living
              God speaks to his people, forms his character in them, and orients them toward his
              purposes in the world.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: let Scripture deepen your prayer with{" "}
              <Link href="/christian-prayer-types" style={{ color: GOLD, textDecoration: "underline" }}>
                Types of Christian Prayer
              </Link>
              , carry the Word into community through{" "}
              <Link href="/christian-spiritual-disciplines" style={{ color: GOLD, textDecoration: "underline" }}>
                Spiritual Disciplines
              </Link>
              , or share what you&rsquo;re learning through{" "}
              <Link href="/evangelism" style={{ color: GOLD, textDecoration: "underline" }}>
                Evangelism
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
