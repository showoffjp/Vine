"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christiangratitude_entries";

interface GRTEntry {
  id: string;
  date: string;
  gift: string;
  whyItMatters: string;
  thankfulTo: string;
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
    badge: "Eucharisteo — Luke 22:19 / 1 Cor 11:24",
    title: "Eucharisteo: The Thanksgiving Root at the Heart of the Eucharist",
    paragraphs: [
      "The Greek word eucharisteo — he gave thanks — sits at the center of every Gospel account of the Last Supper. Jesus took bread, gave thanks (eucharistesas), and broke it. The Eucharist, the central act of Christian worship, is named for gratitude. This is not accidental. Ann Voskamp, in One Thousand Gifts, noticed that eucharisteo contains within it two other words: charis (grace) and chara (joy). Thanksgiving, grace, and joy are not three separate spiritual experiences that sometimes coincide; they are one interwoven reality in the Greek word the New Testament uses for the act of giving thanks.",
      "The theological implication is profound: wherever thanks is genuinely given, grace is being received and joy is being produced. Ingratitude, by contrast, is not merely a personality flaw but a theological failure — a refusal to see the world as gift, a shutting of the eye to the Giver behind every good thing. This is why Paul, in Romans 1:21, traces the entire cascade of human fallenness back to a single failure: &ldquo;they did not honor him as God or give thanks to him.&rdquo; Ingratitude is not the small sin at the end of the list; it is the root sin near the beginning.",
      "Christian gratitude, then, is not positive thinking or a disposition to look on the bright side. It is the practiced act of naming gifts and tracing them back to their source — receiving grace, not manufacturing contentment. The person who gives thanks is doing something theological: confessing, in the act of gratitude, that she is a receiver, that life is not her achievement, that behind every good thing stands the God who is himself good.",
    ],
    callout: {
      label: "The word",
      text: "Eucharisteo (εὐχαριστέω): to give thanks, to be grateful. Contains charis (grace) and chara (joy). The Eucharist — the Lord&rsquo;s Supper — is the sacrament of thanksgiving.",
    },
  },
  {
    badge: "Luke 17:11-19",
    title: "The Ten Lepers — Healing Without Return, and the One Who Came Back",
    paragraphs: [
      "Ten lepers are healed on the road to Jerusalem. All ten are cleansed; all ten receive the gift. But only one — a Samaritan, the religious outsider — turns back, falls at Jesus&rsquo; feet, and gives thanks with a loud voice. Jesus&rsquo; response is both a mild rebuke and a deeper blessing: &ldquo;Were not ten cleansed? Where are the nine? Was no one found to return and give praise to God except this foreigner?&rdquo; And to the one who returned: &ldquo;Rise and go; your faith has made you well&rdquo; (v. 19).",
      "The word translated &ldquo;made you well&rdquo; is sozo — the word for salvation, not merely physical healing. Ten were cured; one was saved. The distinction is between receiving benefits from God and entering relationship with God through thanksgiving. Gratitude is the road from the gift back to the Giver; the nine took the gift and moved on. The Samaritan&rsquo;s return is a picture of what eucharisteo always involves: turning back, finding the source, and falling in worship before the one from whom every good thing flows.",
      "The story also punctures the assumption that those closest to religious observance will be most naturally grateful. The nine were presumably Jews, trained in the liturgical practice of thanksgiving — they knew Psalm 100, they sang the Psalms. The Samaritan had fewer religious advantages and more gratitude. Formation in thanksgiving is not the same as theological knowledge about thanksgiving; the grateful heart is practiced in the specific, unhurried act of returning.",
    ],
  },
  {
    badge: "Philippians 4:6-7",
    title: "Prayer with Thanksgiving — The Forgotten Ingredient That Produces Peace",
    paragraphs: [
      "&ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; The phrase &ldquo;with thanksgiving&rdquo; is easy to skip, but it is the hinge of the passage. Anxiety is prayer without thanksgiving: petition that keeps the eyes fixed on the lack, that rehearses what might go wrong, that treats God as a resource to be accessed rather than a Father to be trusted.",
      "Prayer with thanksgiving — eucharistia built into every supplication — reframes the request. Before asking for anything, it names what God has already done in the same area of life. Before asking for provision, it recalls past provision. Before asking for healing, it names mercies already received. This reframing does not deny the reality of the need; it locates the need within a larger story of faithfulness. And the result, Paul says, is not merely emotional relief but something architecturally stronger: &ldquo;the peace of God, which surpasses all understanding, will guard&rdquo; — the Greek verb is a military term for garrisoning a city — &ldquo;your hearts and your minds in Christ Jesus.&rdquo;",
      "The connection between gratitude and peace is not merely psychological, though it has psychological expression. It is theological: the grateful heart has aligned itself with reality, acknowledging that God is good and that past gifts are evidence of present care. Anxiety loses its grip not because circumstances improve but because the frame changes. The person who prays with thanksgiving is not ignoring their need; they are locating it within a trustworthy story.",
    ],
    callout: {
      label: "Key verse",
      text: "Philippians 4:7 — &ldquo;The peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo; The guard is granted to those who pray with thanksgiving.",
    },
  },
  {
    badge: "1 Thessalonians 5:18",
    title: "&ldquo;In Everything Give Thanks&rdquo; — God&rsquo;s Will and the Grammar of Circumstances",
    paragraphs: [
      "&ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus for you&rdquo; (1 Thess 5:18). This verse is among the most quoted and least practiced in the New Testament. Its qualifier — &ldquo;in all circumstances&rdquo; — is the difficulty. Not &ldquo;give thanks for all circumstances,&rdquo; as though God asks us to call suffering good; but &ldquo;in all circumstances,&rdquo; meaning that no situation so fully destroys the grounds for gratitude that thanks becomes impossible. Even in the worst circumstance, there remains the cross, the resurrection, the presence of the Spirit, the promise of a future — real things for which thanks can honestly be given.",
      "Paul wrote this to a church under persecution, not to a comfortable suburban congregation. The command is not a spiritualized gloss on ease; it is a practiced discipline for suffering. The grateful heart in difficulty is not in denial; it is in defiance — defying the lie that God&rsquo;s goodness has been disproved by present pain, maintaining a posture of receptivity even when the gifts are hard to see. This is why gratitude is described by some spiritual writers as a form of spiritual warfare: it refuses to concede ground to despair.",
      "The phrase &ldquo;for this is the will of God in Christ Jesus for you&rdquo; makes thankfulness not optional but definitional to Christian existence. If you want to know God&rsquo;s will, here is one concrete, certain piece of it: give thanks. The Christian who builds a practice of thanksgiving in ordinary seasons will find it available, though costly, in the hard ones.",
    ],
  },
  {
    badge: "The Grateful Heart vs. The Entitlement Heart",
    title: "Gratitude and Entitlement — Two Postures Toward the Same Gifts",
    paragraphs: [
      "Entitlement and gratitude are not separated by the size of one&rsquo;s blessings but by the posture of one&rsquo;s heart toward them. The entitled person receives gifts as rights: expected, owed, confirmation of their deservingness. When the gifts arrive they produce no particular response; when they fail to arrive, indignation follows. The grateful person receives the same gifts as graces: unexpected, undeserved, evidence of a generosity outside themselves. The same salary, the same health, the same family produces contentment in one heart and restlessness in the other, not because the objective circumstances differ but because the interpretive frame differs.",
      "The New Testament traces entitlement back to the theological error that underwrites it: the assumption of self-sufficiency. Romans 1:21 indicts those who &ldquo;knew God&rdquo; but refused to honor him as God or give thanks — not because they had nothing to be thankful for, but because thanksgiving requires the acknowledgment of dependence, and dependence is what pride refuses. The entitled heart is ultimately a heart that believes it has earned what it has, and that therefore owes no one anything.",
      "The remedy is not self-shaming but reorientation — what James 1:17 calls the recognition that &ldquo;every good gift and every perfect gift is from above, coming down from the Father of lights.&rdquo; The practice of naming specific gifts, and naming them as gifts (not rights, not achievements), slowly reshapes the interpretive frame. The heart that has practiced gratitude over years begins to look at ordinary life and see abundance where the untrained eye sees only baseline.",
    ],
  },
  {
    badge: "Ann Voskamp — Naming 1,000 Gifts",
    title: "Gratitude as Spiritual Warfare — Naming Gifts Against the Darkness",
    paragraphs: [
      "Ann Voskamp&rsquo;s One Thousand Gifts is, among other things, a book about grief and gratitude in collision. Voskamp grew up shadowed by trauma — a sister killed in a farm accident, years of depression — and her book is the record of a dare taken in middle age: to list one thousand things she loves, to notice grace in the granular, to name gifts even in the dark. What she discovers is that the act of naming gifts is not an escape from suffering but a refusal to let suffering have the final word.",
      "This is why Voskamp frames gratitude as warfare. The enemy&rsquo;s primary strategy is not suffering but despair — the accusation that God is not good, that the gifts have dried up, that the Giver has turned away. Gratitude fights that accusation not by denying pain but by finding, in the middle of it, genuine grounds for thanks. A cup of coffee. Afternoon light. The fact that breath still comes. These small gifts, named one by one, are not trivial; they are pins in the map, evidence that the Giver is still giving, that goodness has not been extinguished. The person who counts gifts is not pretending; they are building a case against despair from the inside of their own experience.",
      "The neuroscience of gratitude, now well-documented, corresponds to this theological insight: gratitude practices demonstrably reshape the brain&rsquo;s tendency toward negativity bias, building new pathways of attention that are more resistant to rumination and despair. The Christian affirmation is not that this psychological reality disproves the spiritual, but that it corroborates it: God designed human beings to receive life as gift, and the practice that aligns us with that design produces flourishing, just as he intended.",
    ],
    callout: {
      label: "From Voskamp",
      text: "&ldquo;Eucharisteo — thanksgiving — always precedes the miracle. As long as thanks is possible, then joy is always possible.&rdquo;",
    },
  },
  {
    badge: "Psalm 100",
    title: "Enter His Gates with Thanksgiving — Worship as the Destination of Gratitude",
    paragraphs: [
      "&ldquo;Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations&rdquo; (Ps 100:4-5). The psalm gives the liturgical architecture of gratitude: thanksgiving is the posture through which we enter the presence of God. You do not enter his courts by proving yourself worthy; you enter through the gate of a grateful heart, praising the one you already know to be good.",
      "The grounding of the thanksgiving is crucial: &ldquo;For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations.&rdquo; The psalm anchors gratitude not in current circumstance but in the character and track record of God. His hesed — steadfast love, covenant faithfulness — is not conditional on today&rsquo;s experience; it endures. The grateful worshiper is not someone who happens to be having a good week; she is someone who knows what God is like across generations and who therefore gives thanks regardless of the week.",
      "This is why the Psalter as a whole models gratitude as something that must be learned and practiced across the full range of human experience. The lament psalms are honest about suffering; the praise psalms are exuberant about deliverance; the wisdom psalms are measured about trust. Gratitude in the biblical tradition is not emotional positivity but covenantal memory: remembering who God is and what he has done, and letting that memory shape the response of every hour.",
    ],
  },
  {
    badge: "Neuroscience and Theology",
    title: "The Neuroscience of Gratitude — What Science Confirms, Theology Grounds",
    paragraphs: [
      "The empirical research on gratitude over the past two decades has produced unusually consistent findings: gratitude practices — keeping a gratitude journal, writing letters of thanks, expressing appreciation verbally — reliably improve well-being, reduce anxiety and depression, strengthen relationships, and improve sleep. The neuroscience points to neural rewiring: the human brain has a default negativity bias (an evolutionary adaptation for threat detection), and gratitude practices appear to build new attentional pathways that make the brain more responsive to positive signals and more resistant to rumination.",
      "The Christian response to this is not skepticism (&ldquo;that&rsquo;s just psychology&rdquo;) but calibration: the science describes the mechanism; the theology provides the ground. The reason gratitude practices produce flourishing is that human beings were designed for gratitude — designed to live as receivers in relation to a Giver, to orient their attention toward grace rather than lack. When we practice what we were designed for, we flourish. The neuroscience of gratitude is, on this account, the empirical signature of a theological truth: we were made for thanksgiving, and we thrive when we practice it.",
      "The limitation of the secular gratitude literature is precisely its lack of ground: gratitude to no one, for nothing in particular, produces some benefits but lacks the full weight of Christian eucharisteo. When gratitude is addressed to the God who is the actual source of every good gift, it becomes not merely therapeutic but worshipful — an alignment of the whole person with reality as it actually is. The science points toward what the theology fully names.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Gift List — Counting 1,000 Graces",
    summary:
      "Ann Voskamp&rsquo;s central practice: a running list of specific, named gifts, accumulated over time, that trains the eye to see grace in the granular and the grace-filled.",
    steps: [
      "Begin a numbered list in a journal or notes app. Start with what is immediately in front of you: the light, the coffee, the breath, the silence. Name them with specificity, not categories — not &ldquo;health&rdquo; but &ldquo;the way I could walk to the window this morning without pain.&rdquo;",
      "Add to the list daily — three to five new entries. The goal is not speed but attention: the practice trains you to notice gifts you would otherwise pass over. After a week, read back through and observe what your eye has learned to see.",
      "When darkness comes — a hard diagnosis, a fractured relationship, a season of depression — continue the list. Not to pretend the pain is not there, but to find, within it, genuine grounds for thanks. The small gift named in a dark season is an act of spiritual warfare: a refusal to concede that the Giver has stopped giving.",
      "At one hundred gifts, reflect on the pattern: what kinds of gifts recur? What does the list reveal about where God has been most present in your specific life? Let the retrospective become a prayer of consecration.",
    ],
    anchor: "James 1:17 — Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.",
  },
  {
    number: "02",
    title: "Philippians 4 Prayer Practice — Petition Preceded by Thanksgiving",
    summary:
      "A structured prayer practice that follows Paul&rsquo;s pattern: every request is preceded by a specific thanksgiving in the same area, reshaping the petition from anxious demand to trustful dialogue.",
    steps: [
      "Before any prayer of petition, pause and name one thing God has already done in that specific area. Before asking for provision, name a past provision. Before asking for healing, name a mercy already received. Before asking for relational peace, name a grace in that relationship.",
      "Articulate the petition clearly — do not generalize or spiritualize. &ldquo;God, I need you to act in this specific situation, and I am asking you to do so.&rdquo; The prayer is not less urgent for being thankful; it is better aimed.",
      "Close with an act of trust, not because you feel trusting, but because the thanksgiving has done its work: &ldquo;I do not understand your timing or your ways, but I know you are good, and I leave this with you.&rdquo; Note whether the anxiety level has shifted.",
      "Over time, keep a record of answered prayers. The record is not a ledger of God&rsquo;s debt to you; it is a treasury of evidence from which future thanksgiving can be drawn when faith is thin.",
    ],
    anchor: "Philippians 4:6-7 — Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
  },
  {
    number: "03",
    title: "The Table of Eucharisteo — Receiving the Lord&rsquo;s Supper as Gratitude Practice",
    summary:
      "The Lord&rsquo;s Supper is the sacrament of thanksgiving — eucharisteo in material form. Coming to the table as a gratitude practice means receiving it not as routine but as the shape of all Christian gratitude.",
    steps: [
      "Before receiving, pause in the preparation time to name one specific gift from the past week and trace it to grace. Let the small gift open the larger gift: Christ himself, given in bread and cup.",
      "As you receive the elements, let the words of institution echo: &ldquo;he took bread, and when he had given thanks, he broke it.&rdquo; You are participating in the original eucharisteo — the thanksgiving meal of the new covenant. What you receive is the gift of a grateful act, offered on your behalf.",
      "After receiving, allow a moment of unhurried gratitude — not petition, not confession, just thanks for the specific gift of the body and blood of Christ. Gratitude for the cross is never stale; it is the freshest thing in Christian experience.",
      "Carry the eucharistic posture into the meal that follows. Wesley and the early church practiced the agape meal together — an extension of the table into ordinary eating. Let every meal this week begin with genuine, unhurried, specific thanks before the prayer ends.",
    ],
    anchor: "Luke 22:19 — He took bread, and when he had given thanks, he broke it and gave it to them.",
  },
  {
    number: "04",
    title: "Gratitude Letters — Completing Gratitude Through the Human Instruments",
    summary:
      "Gratitude to God is often mediated through gratitude to the human instruments God used. The practice of writing specific, detailed gratitude letters completes the circuit of thanksgiving.",
    steps: [
      "Identify one person through whom God has been significantly present in your life — a mentor, a friend, a parent, a pastor, a teacher. It does not need to be someone who explicitly represented God; God works through ordinary human faithfulness.",
      "Write a letter of three to four paragraphs: what this person did or said, the specific impact it had, and what your life looks like now in part because of their presence. Be specific, not general. &ldquo;You told me on March 12th that you believed I could finish my degree, and I have never forgotten it&rdquo; is gratitude; &ldquo;you were always so encouraging&rdquo; is pleasant but not the same.",
      "If possible, read it to them in person or send it. Research on gratitude interventions consistently shows that the act of expression produces deeper and longer-lasting benefit than unexpressed gratitude, both for the writer and the recipient.",
      "In prayer, trace the chain: this person was God&rsquo;s instrument. The kindness was real; it was also grace. Let the thanks move from the human instrument back to the divine source, and let the whole chain — gift, giver, Giver — become an act of worship.",
    ],
    anchor: "Romans 16:3-4 — Greet Prisca and Aquila, my fellow workers in Christ Jesus, who risked their necks for my life, to whom not only I give thanks but all the churches of the Gentiles give thanks as well.",
  },
  {
    number: "05",
    title: "Gratitude Against Comparison — Countermeasures for the Entitlement Heart",
    summary:
      "Comparison and entitlement are among the most reliable killers of gratitude. This practice builds a specific counter-discipline for the moments when discontent surfaces.",
    steps: [
      "When you notice comparison or discontent arising — the ache of what someone else has, the sense that your portion is insufficient — do not suppress it. Name it: &ldquo;I am comparing. I feel entitled to more than I have. This is the moment when gratitude is being tested.&rdquo;",
      "Counter concretely: in the exact area where discontent has arisen, list five specific things you have that you would grieve to lose. If the discontent is about money, list five specific financial mercies. If it is about relationships, list five specific gifts in your relationships. The specificity is crucial; vague counter-gratitude does not dislodge specific discontent.",
      "Ask the diagnostic question: if I received what I am currently desiring, would I be satisfied, or would I immediately need the next thing? Entitlement cannot be satisfied by provision; only by a fundamental reorientation of the heart toward receiving.",
      "Confess the entitlement honestly in prayer — not as a damning failure but as a recurring tendency of the human heart — and ask for the grace to receive what has been given as gift. The prayer does not produce the feeling immediately, but it makes the request of the right source.",
    ],
    anchor: "1 Timothy 6:6-7 — Godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world.",
  },
  {
    number: "06",
    title: "The Gratitude Examen — Evening Review for a Grateful Heart",
    summary:
      "An adaptation of the Ignatian Examen specifically for gratitude: a ten-minute evening practice that reviews the day for gifts, names them specifically, and closes with worship.",
    steps: [
      "Set aside ten minutes before sleep. Ask the Spirit to bring to mind the gifts of the day — not the large obvious ones first, but the small and overlooked: a conversation that went better than expected, a moment of unexpected beauty, a body that functioned, a kindness received from a stranger.",
      "Name five specific gifts from the day. Write them down or say them aloud. Specificity matters: not &ldquo;my family&rdquo; but &ldquo;the way my daughter laughed at dinner.&rdquo; Naming teaches the eye to notice.",
      "For each gift, ask: what does this reveal about who God is? Let each named gift become a window into the character of the Giver. The small gifts are not accidental; they are personal — addressed to you, from One who knows what will delight you.",
      "Close with a single sentence of worship — not petition, not intercession, just thanks. &ldquo;Thank you for the light this morning and for the fact that I noticed it. You are generous and kind.&rdquo; The Examen ends not in request but in adoration, which is the destination that eucharisteo always points toward.",
    ],
    anchor: "Psalm 92:1-2 — It is good to give thanks to the LORD, to sing praises to your name, O Most High; to declare your steadfast love in the morning, and your faithfulness by night.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Ann Voskamp",
    role: "One Thousand Gifts — Counting Graces Against the Darkness",
    quote:
      "Eucharisteo — thanksgiving — always precedes the miracle. As long as thanks is possible, then joy is always possible.",
    bio: "Ann Voskamp is a Canadian farmer&rsquo;s wife and writer whose memoir One Thousand Gifts chronicles her dare to list a thousand everyday graces against a background of childhood trauma, depression, and grief. Her central discovery — that the Greek eucharisteo holds within it both charis (grace) and chara (joy) — reframed gratitude for a generation of readers: not a polite afterthought but the daily discipline by which ordinary life is seen for what it is, gift upon gift from a generous Giver. Voskamp writes in the tradition of the mystics, with lyrical prose that moves between kitchen table and theology, arguing that the fully present moment — noticed, named, and received with thanks — is the place where heaven breaks through. Her work has been criticized for stylistic excess and occasionally for an underemphasis on doctrinal precision, but its central contribution stands: gratitude is not a mood but a practice, and the practice produces the mood.",
  },
  {
    name: "G.K. Chesterton",
    role: "Orthodoxy; The Man Who Was Thursday — Gratitude as the Proper Response to Existence",
    quote:
      "I would maintain that thanks are the highest form of thought; and that gratitude is happiness doubled by wonder.",
    bio: "G.K. Chesterton was an English journalist, novelist, and Catholic apologist whose entire intellectual posture could be described as astonished gratitude. For Chesterton, the appropriate response to existence itself — to the sheer unlikely gift of being — is not analysis but thanks. He practiced what he called taking nothing for granted, saying grace not only before meals but, as he quipped, &ldquo;before the play, the opera, the concert, and before I open a book.&rdquo; Chesterton&rsquo;s most sustained treatment of gratitude appears in Orthodoxy, where he argues that wonder is the correct response to the world — that the world is not dull but astonishing, and that the person who has recovered the capacity for gratitude has recovered the sanest of all human postures. He saw ingratitude as closely allied to the miserablism of pessimistic modernity, and gratitude as the distinctively Christian contribution to a culture that had lost the capacity for thanksgiving because it had lost the sense of gift.",
  },
  {
    name: "Meister Eckhart",
    role: "The Sermons — Gratitude as the Natural Breath of the Soul Near God",
    quote:
      "If the only prayer you ever say in your entire life is &lsquo;thank you,&rsquo; that will be enough.",
    bio: "Meister Eckhart was a fourteenth-century Dominican mystic and theologian whose sermons on the interior life have shaped Christian spirituality across centuries. The famous quote attributed to him — &ldquo;if the only prayer you ever say in your entire life is &lsquo;thank you,&rsquo; that will be enough&rdquo; — captures his conviction that gratitude is the most basic and complete response of the soul to God. For Eckhart, union with God produces gratitude naturally, the way proximity to warmth produces warmth: the soul that is genuinely near God cannot help but give thanks, because it is in the constant presence of the one from whom all good proceeds. Eckhart&rsquo;s contribution to the theology of gratitude is the mystical depth he gives it: thanksgiving is not merely correct behavior but the spontaneous outbreathing of a soul that has been drawn near to its source. Some of Eckhart&rsquo;s speculative theology was later condemned, but his contribution to the spirituality of gratitude and interior prayer has endured.",
  },
  {
    name: "Thomas à Kempis",
    role: "The Imitation of Christ — Gratitude as the Posture of the Humble Soul",
    quote:
      "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
    bio: "Thomas à Kempis was a fifteenth-century Augustinian monk whose Imitation of Christ is the most widely read Christian devotional text after the Bible. Though not a treatise on gratitude specifically, the Imitation grounds all Christian practice in a posture of receivership and humility that is the precondition for genuine thanksgiving. For à Kempis, the humble soul does not consider itself entitled to anything; it receives every grace — knowledge, strength, consolation — as undeserved gift, and this posture of reception is the soil in which gratitude grows. His chapter on self-knowledge is a corrective to the pride that prevents thanksgiving: the person who truly knows themselves before God knows they have earned nothing, and this knowledge is not despair but liberation — the beginning of the radical dependence on grace that produces a genuinely grateful heart. À Kempis is read most profitably alongside more joyful writers; his austerity is the shadow side of the gratitude tradition, reminding us that thanksgiving requires the death of entitlement.",
  },
  {
    name: "Richard Foster",
    role: "Celebration of Discipline — Gratitude as the Fruit of the Disciplined Life",
    quote:
      "Joy is the keynote of the disciplines; it is not a technique for happiness but the happiness that comes from the experience of grace.",
    bio: "Richard Foster&rsquo;s Celebration of Discipline, published in 1978, is among the most influential treatments of the spiritual disciplines in modern evangelical Christianity. Foster&rsquo;s treatment of celebration — the discipline that corresponds most directly to gratitude — argues that joy and thanksgiving are not by-products of fortunate circumstances but are trained responses cultivated through the practice of the disciplines. The title of the book is itself a theological claim: that the disciplines are not punitive but celebratory, that their purpose is not self-mortification but the reception of the grace that produces genuine joy. Foster&rsquo;s contribution to the gratitude literature is to locate thanksgiving within a comprehensive vision of the Christian life: not a single practice to be added on but the emotional and spiritual tone of a life that has been systematically ordered toward God through the full range of inward, outward, and corporate disciplines.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience in the Same Direction; Answering God — The Psalms as Grammar of Gratitude",
    quote:
      "We are not primarily called to do something for God; we are called to be with God. And being with God, we find ourselves doing what God does — which is precisely what gratitude is: seeing the world as he sees it, gift upon gift.",
    bio: "Eugene Peterson was a pastor, theologian, and translator of The Message whose work spans pastoral theology, biblical interpretation, and spirituality. His book Answering God is a sustained meditation on the Psalms as the grammar of Christian prayer, and within that framework, thanksgiving is one of the two primary postures of the praying soul (alongside lament). Peterson argues that the Psalms teach us not only what to say to God but how to see — how to interpret the events of ordinary life as the workings of a God who is present and active. For Peterson, gratitude is not a feeling that precedes worship but a way of reading the world that is formed by worship. His long pastorate in a small Maryland church — three decades at the same congregation — was itself a school of gratitude: the refusal of glamour and the willingness to receive the ordinary as gift, Sunday after Sunday, year after year.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Thessalonians 5:16-18",
    text: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.",
    reflection:
      "Paul&rsquo;s trifecta is not three separate commands but one integrated posture: rejoicing, praying, and giving thanks are the continuous, overlapping expressions of a heart that is attentive to God in every moment. &ldquo;In all circumstances&rdquo; rules out both the prosperity gospel (only in good circumstances) and despair (no grounds for thanks in bad ones). The grounding clause — &ldquo;for this is the will of God&rdquo; — removes all ambiguity: this is not one spiritual style among many; it is God&rsquo;s expressed intention for every believer.",
  },
  {
    reference: "Luke 17:15-19",
    text: "Then one of them, when he saw that he was healed, turned back, praising God with a loud voice; and he fell on his face at Jesus&rsquo; feet, giving him thanks. Now he was a Samaritan. Then Jesus answered, &ldquo;Were not ten cleansed? Where are the nine?&rdquo; And he said to him, &ldquo;Rise and go; your faith has made you well.&rdquo;",
    reflection:
      "The one who returned received something the nine did not: sozo — salvation, wholeness beyond the physical cure. Jesus&rsquo; question — &ldquo;where are the nine?&rdquo; — is not rhetorical irritation but genuine theological inquiry: where does gratitude go when it has nowhere to land? The nine had no Giver to return to; they took the gift and moved on. The Samaritan had found the Giver behind the gift, and the return made him whole.",
  },
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The mechanism is precise: thanksgiving precedes the petition, and peace follows the prayer. The peace promised is not the resolution of circumstances but something architecturally stronger — a peace that &ldquo;surpasses all understanding,&rdquo; meaning it exceeds rational calculation of outcomes. The grateful heart does not have better circumstances; it has a different orientation toward its circumstances, one that allows trust to hold when anxiety cannot.",
  },
  {
    reference: "Psalm 100:1-5",
    text: "Make a joyful noise to the LORD, all the earth! Serve the LORD with gladness! Come into his presence with singing!... Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name! For the LORD is good; his steadfast love endures forever, and his faithfulness to all generations.",
    reflection:
      "Thanksgiving is the gate through which worship enters. The psalm does not prescribe a mood; it prescribes a posture and grounds it in theology: the LORD is good, his love endures, his faithfulness spans generations. The grateful worshiper is not someone who happens to feel happy today; she is someone who knows what God is like and whose gratitude is anchored in his character rather than her circumstances. The gate is always open because the Giver is always good.",
  },
  {
    reference: "James 1:17",
    text: "Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.",
    reflection:
      "The verse is a comprehensive claim: not &ldquo;some good gifts&rdquo; but &ldquo;every good gift.&rdquo; The God who gives does not vary — there is no shadow of turning in him, no inconsistency between his character and his giving. This grounds gratitude in theology rather than temperament: you give thanks not because you are an optimist but because you know the Giver is unchangeably good, and therefore every good thing in your life traces back to him.",
  },
  {
    reference: "Romans 1:21",
    text: "For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened.",
    reflection:
      "Ingratitude, in Paul&rsquo;s anatomy of sin, is not a minor failure of social grace; it is the first move in the great unraveling. The refusal to give thanks severs the relationship between gift and Giver, between creature and Creator, and the result is a progressive darkening — of thinking, of desire, of community. Conversely, every genuine act of thanksgiving is a small act of repair: a thread of the relationship between creature and Creator being reknit, the gift returned to its source in an act of honest acknowledgment.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "K7qHHrZ-VMg", title: "Ann Voskamp on Eucharisteo and One Thousand Gifts" },
  { videoId: "3rZcBCmJGlQ", title: "The Theology of Gratitude — Giving Thanks in All Things" },
  { videoId: "wAwhXxkOHZQ", title: "Gratitude as Worship — Psalm 100 Explored" },
  { videoId: "l4-JBbj9Kew", title: "The Ten Lepers and the One Who Returned (Luke 17)" },
  { videoId: "Mj6JpQT_9nw", title: "G.K. Chesterton on Wonder, Joy, and Gratitude" },
  { videoId: "4Fb5ZLt71Pk", title: "Philippians 4 — Peace, Prayer, and Thanksgiving" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianGratitudePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<GRTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [gift, setGift] = useState("");
  const [whyItMatters, setWhyItMatters] = useState("");
  const [thankfulTo, setThankfulTo] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as GRTEntry[]);
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
    if (!gift.trim() || !whyItMatters.trim()) return;
    const entry: GRTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      gift: gift.trim(),
      whyItMatters: whyItMatters.trim(),
      thankfulTo: thankfulTo.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setGift("");
    setWhyItMatters("");
    setThankfulTo("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
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
    color: TEAL,
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
                color: TEAL,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Gratitude &amp; Thanksgiving
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              A Grateful Heart: The Theology and Practice of Christian Gratitude
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Greek word eucharisteo — he gave thanks — sits at the center of the Last Supper and
              names the church&rsquo;s central act of worship. Gratitude is not a personality trait
              or a seasonal sentiment but a theological posture: receiving every good gift as grace,
              tracing it back to the Giver, and letting that tracing reshape how we see the whole of
              life. This guide walks through the theology of thanksgiving, the voices who have most
              deeply practiced it, and the daily habits that train a grateful heart.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus
                for you.&rdquo;
              </p>
              <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>1 Thessalonians 5:18</p>
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
                Eight studies tracing the theology of gratitude from eucharisteo through the ten
                lepers, Philippians 4, and the Psalms — examining the entitlement heart, gratitude
                as spiritual warfare, and what the neuroscience confirms that theology has long
                named.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: TEAL,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(13, 148, 136, 0.07)",
                        border: "1px solid rgba(13, 148, 136, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Eucharisteo, the ten lepers, Philippians 4, the entitlement heart, spiritual
                  warfare, Psalm 100, the neuroscience — these are not separate topics but one
                  integrated reality seen from different angles. Gratitude is the practice that
                  aligns the human soul with what is true: that life is gift, every good thing
                  traces to a Giver, and the posture of reception is what we were made for. Explore
                  how gratitude connects to contentment in{" "}
                  <Link href="/christian-contentment" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Contentment
                  </Link>{" "}
                  or go deeper on joy in the{" "}
                  <Link href="/christian-joy" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Joy
                  </Link>{" "}
                  guide.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices drawn from the biblical and devotional tradition — from counting gifts
                to the Philippians 4 prayer pattern, the Eucharist, gratitude letters, and the
                evening Examen. Start with one and let it train the rest.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: TEAL,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2
                      style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}
                      dangerouslySetInnerHTML={{ __html: practice.title }}
                    />
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: TEAL,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about forming the habit
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Gratitude is not a feeling that precedes practice; it is a feeling that follows
                  practice, and often arrives late. Begin the practices in the absence of the feeling.
                  Name gifts when you do not feel grateful. Pray with thanksgiving when you feel only
                  anxiety. Write the letter when you feel disconnected. The feeling is the harvest;
                  the practice is the planting. The Journal tab is designed to support the daily work
                  of naming gifts specifically, and the pattern compounds over time.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian
                gratitude — from Ann Voskamp&rsquo;s farm table to Chesterton&rsquo;s Fleet Street
                to Meister Eckhart&rsquo;s pulpit, from à Kempis&rsquo;s monastery to Foster&rsquo;s
                disciplines to Peterson&rsquo;s small church. Read them as a school of attention.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: TEAL,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(13, 148, 136, 0.06)",
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages that form the spine of the biblical theology of gratitude. Read them
                one per week alongside the Journal practice. Let each text both describe and produce
                the posture of thanksgiving.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: TEAL,
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each text and turn it into three movements: receive it (read it slowly, let it
                  land), respond to it (what does this reveal about God and about you?), and return
                  it (let the text become a sentence of thanksgiving — not a paraphrase, but a
                  response). The Psalms themselves model this pattern: they do not merely describe
                  gratitude; they perform it, drawing the reader into the act of thanks as they are
                  read.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that train the grateful heart: what gift did you notice today, what
                does it reveal about God&rsquo;s character, and who are you thanking? Entries are
                stored privately in your browser. No account needed. No one sees this but you.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New gratitude entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="grt-gift" style={labelStyle}>
                    A gift I noticed today
                  </label>
                  <input
                    id="grt-gift"
                    type="text"
                    value={gift}
                    onChange={(e) => setGift(e.target.value)}
                    placeholder="Name it specifically — a moment, a provision, a person, an ordinary grace..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="grt-why" style={labelStyle}>
                    Why it matters — what it says about God
                  </label>
                  <textarea
                    id="grt-why"
                    value={whyItMatters}
                    onChange={(e) => setWhyItMatters(e.target.value)}
                    placeholder="Trace the gift back to the Giver — his kindness, faithfulness, attention to detail, goodness..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="grt-thankful" style={labelStyle}>
                    Who am I thanking?
                  </label>
                  <textarea
                    id="grt-thankful"
                    value={thankfulTo}
                    onChange={(e) => setThankfulTo(e.target.value)}
                    placeholder="God, a person he used, both — name it. The circuit of gratitude closes when the thanks reaches its address."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!gift.trim() || !whyItMatters.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !gift.trim() || !whyItMatters.trim() ? BORDER : TEAL,
                    color: !gift.trim() || !whyItMatters.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !gift.trim() || !whyItMatters.trim() ? "not-allowed" : "pointer",
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
                      Name one gift, trace it to the Giver, and note who you&rsquo;re thanking. Over
                      time the journal becomes a treasury of evidence for God&rsquo;s faithfulness
                      in the specific texture of your life.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: TEAL }}>
                              {entry.gift}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.gift}`}
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

                        <div style={{ marginBottom: 10 }}>
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
                            Why it matters
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whyItMatters}
                          </p>
                        </div>

                        {entry.thankfulTo && (
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
                              Thankful to
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.thankfulTo}
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
                Teaching and worship on gratitude, eucharisteo, Psalm 100, the ten lepers, and the
                theology of thanksgiving. Good companions to the Theology tab.
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
              Gratitude as the shape of a Christian life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The Eucharist — the thanksgiving meal — is not just a once-a-week sacrament; it is a
              posture the Christian inhabits throughout the week. Every named gift is a small
              eucharisteo, a returning to the Giver, a confession that life is received rather than
              achieved. The person who has practiced gratitude for years discovers that they have
              been subtly changed: less anxious, less entitled, more alive to what is actually
              present, more able to see grace where the untrained eye sees only ordinary Tuesday.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how gratitude and contentment overlap in{" "}
              <Link href="/christian-contentment" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Contentment
              </Link>
              , let gratitude flow into worship in{" "}
              <Link href="/christian-worship" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Worship
              </Link>
              , or explore what it looks like to receive the whole of life as gift in{" "}
              <Link href="/christian-rest" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Rest
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
