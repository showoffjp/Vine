"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";

const STORAGE_KEY = "vine_prayerjournal_entries";

interface PJEntry {
  id: string;
  date: string;
  prayerRequest: string;
  category: string;
  answered: boolean;
  answerNote: string;
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
    badge: "Habakkuk 2:2",
    title: "Write the Vision — Why Put Prayers on Paper",
    paragraphs: [
      "When God speaks to the prophet Habakkuk in the second chapter, his first instruction is not to act but to write: &ldquo;Write the vision; make it plain on tablets, so he may run who reads it&rdquo; (Hab 2:2). The act of writing is not incidental — it is itself a form of faithfulness, a way of anchoring the invisible to the visible so that what God has said does not evaporate under the pressure of time, doubt, or the next crisis. What Habakkuk recorded became Scripture; what we record becomes our own chapter of the history of God&rsquo;s faithfulness to us.",
      "A prayer journal serves this same purpose: it is a written record of the conversations between a soul and God. Prayer that is only spoken or only thought is still real prayer — but prayer that is written down takes on a different character. It becomes concrete, specific, dateable. It can be returned to. It can be compared against what actually happened. The journal is where a vague sense of spiritual life gets tested against the specifics of what you actually asked and what God actually did.",
      "The discipline of writing prayers also changes the act of praying. When you must put a prayer in words on a page, you cannot remain in generalities. &ldquo;Lord, help me&rdquo; must become &ldquo;Lord, I am afraid of this specific thing and I am asking you for this specific help by this specific date.&rdquo; The journal is the enemy of vague religion and the friend of honest, specific, testable faith.",
    ],
    callout: {
      label: "The principle",
      text: "Written prayer is specific prayer, and specific prayer is testable prayer — the kind that accumulates into a record of God&rsquo;s faithfulness that you can return to when faith is hard. Write the vision; make it plain.",
    },
  },
  {
    badge: "George Müller / Jim Elliot / David Brainerd",
    title: "The Prayer Journals of the Saints",
    paragraphs: [
      "George Müller kept a prayer journal for more than sixty years, recording more than fifty thousand specific answers to prayer during his lifetime. His journals were not private documents — he published many of them precisely to demonstrate, with dates and amounts and circumstances, that the God who heard prayer was also the God who answered it. Müller&rsquo;s journals became a testimony to a watching church that specific prayer and patient faith yielded specific results, and they shaped the prayer practices of generations of Christians after him.",
      "Jim Elliot, who died on the Curaray River in Ecuador at twenty-eight, left behind journals of extraordinary spiritual intensity. His most famous line — &ldquo;He is no fool who gives what he cannot keep to gain what he cannot lose&rdquo; — was not composed for publication; it was written in a private journal as a young man working out his theology of sacrifice before God. The journal was the place where he argued with God, surrendered to God, and recorded the progress of a soul being shaped for a purpose it could not yet fully see.",
      "David Brainerd&rsquo;s diary, edited and published by Jonathan Edwards after Brainerd&rsquo;s death at twenty-nine, is one of the most influential documents in the history of Protestant missions. It records an interior life of staggering intensity — long passages of depression and spiritual desolation alternating with periods of prayer and revival that changed the lives of the Native Americans he served. Jonathan Edwards credited Brainerd&rsquo;s journal with inspiring more missionaries than any sermon he had ever preached. The journal was the form in which Brainerd&rsquo;s faithfulness survived his short life and kept speaking after his death.",
    ],
  },
  {
    badge: "Unanswered Prayer",
    title: "The Journal and Unanswered Prayer — Seeing God&rsquo;s &ldquo;No&rdquo; Become a Better &ldquo;Yes&rdquo;",
    paragraphs: [
      "One of the most important things a prayer journal does is preserve the prayers that were apparently not answered — and allow you to revisit them years later with the hindsight that prayer in the moment could not provide. Many prayers that felt like divine silence or refusal, when examined from a distance of five or ten years, reveal themselves to have been answered in a way far better than what was asked. The prayer for a specific relationship to succeed was refused; the journal entry from five years later records the spouse that would never have appeared if the first prayer had been granted. The prayer for a job was refused; the entry from three years later records the unexpected door that opened instead.",
      "This is the experience Paul points toward when he writes that God &ldquo;is able to do far more abundantly than all that we ask or think&rdquo; (Eph 3:20). The prayer journal makes this abundance visible and datable. It is not merely a record of what was asked and what was received; it is a map of the difference between what we asked and what God gave, and over time that map reveals a pattern: the divine &ldquo;no&rdquo; is almost never a final no. It is usually a redirection toward something the praying soul could not yet see from where it was standing.",
      "Without the journal, these patterns are invisible. The memory softens, the dates blur, the connection between the refused prayer and the better answer is lost. The journal preserves the specificity that makes the pattern legible — and it is this legibility that builds the kind of faith that can pray through the next apparent silence without losing heart.",
    ],
    callout: {
      label: "The practice",
      text: "Keep a section of your journal for prayers you believe are unanswered. Return to them annually. The gap between what you asked and what God gave, seen across years, is often the most powerful testimony your journal contains.",
    },
  },
  {
    badge: "ACTS",
    title: "The ACTS Framework — Adoration, Confession, Thanksgiving, Supplication",
    paragraphs: [
      "The ACTS model — Adoration, Confession, Thanksgiving, Supplication — is not a formula for prayer but a grammar: a set of categories that ensures prayer does not collapse into a list of requests. When a prayer journal is structured around ACTS, each entry begins with Adoration (who God is: his character, his names, his attributes), moves through Confession (honest naming of sin and failure), arrives at Thanksgiving (specific gratitude for what God has done), and only then reaches Supplication (the requests themselves). This sequence matters: it reorients the soul before it begins to ask.",
      "The Adoration section of the journal is particularly important for people whose prayer life has become primarily petition-focused. Writing about who God is — his faithfulness, his power, his knowledge of you, his purposes — does something to the spirit that writing a request list cannot do. It places the requests in their proper context: not as communications to a vending machine but as conversation with a Person whose character you are celebrating before you bring your needs.",
      "Confession in the journal is more honest than spoken confession, for many people, because the written word is harder to rationalize. To write &ldquo;I was proud today in this specific way&rdquo; or &ldquo;I said this thing that was unkind and I knew it when I said it&rdquo; requires a specificity that general confession permits us to avoid. The journal is the place where honest self-examination produces honest prayer, and honest prayer produces the kind of change that self-deception cannot.",
    ],
  },
  {
    badge: "Psalms as Journal",
    title: "Lament Prayer — The Psalms as Honest Journals",
    paragraphs: [
      "The book of Psalms is, among other things, the world&rsquo;s most important prayer journal. And what makes it remarkable is not its worship songs but its laments: the psalms that begin with &ldquo;How long, O LORD?&rdquo; (Ps 13:1), &ldquo;My God, my God, why have you forsaken me?&rdquo; (Ps 22:1), or &ldquo;I am weary with my moaning; every night I flood my bed with tears&rdquo; (Ps 6:6). These prayers do not begin with adoration and move smoothly to supplication. They begin with pain and move through it — sometimes to praise, sometimes still in the dark.",
      "The lament psalm is the biblical warrant for writing the hardest prayers into the journal: the prayers of grief, despair, anger at God, confusion about his silence, doubt about his goodness. Many Christians never pray these prayers because they feel they shouldn&rsquo;t — that the psalms of lament are embarrassing examples of weak faith rather than canonical examples of honest faith. The journal is the place to recover the lament: to write what is actually happening, what you actually fear, what you actually feel about God&rsquo;s apparent absence, and then to stay in the conversation until something shifts.",
      "The psalms of lament almost always end with some form of trust — not because the circumstances have changed but because the process of praying the darkness honestly before God produces a reorientation that simply suppressing the darkness cannot. The journal preserves both the lament and the reorientation, and the distance between them is often where the most important spiritual work of a life takes place.",
    ],
    callout: {
      label: "Permission",
      text: "You are allowed to write the hard prayers. The psalms did. God is not honored by journals that only contain the presentable prayers and the tidy answers. He is honored by the whole conversation, including the parts that are still in the dark.",
    },
  },
  {
    badge: "Praying Scripture",
    title: "Praying the Scriptures Back to God",
    paragraphs: [
      "One of the most powerful uses of a prayer journal is the practice of praying Scripture: taking a passage of the Bible and turning it into prayer, written in your own words and applied to your own situation. The model for this is the New Testament itself — the early church&rsquo;s prayers in Acts 4:24-30 are drawn almost entirely from the Psalms, applied to their own moment of persecution. Paul&rsquo;s prayer in Ephesians 3:14-21 draws on Old Testament imagery and turns it into intercession for the Ephesian believers. Jesus&rsquo;s prayer in John 17 echoes Psalm language throughout.",
      "To pray Scripture in the journal is to take, for example, Psalm 23 and write it as a first-person prayer: &ldquo;Lord, you are my shepherd; I am choosing today to believe I shall not want, even though I am afraid I will. Lead me to green pastures — I am exhausted and I need rest I cannot manufacture. Walk me through this valley — I know what the valley is and I am naming it to you now...&rdquo; This practice roots prayer in revelation, prevents it from becoming merely therapeutic, and connects the praying soul to the long tradition of those who prayed these same words before them.",
      "The journal is the ideal location for prayed Scripture because writing slows down the process in a way that hurried spoken prayer cannot. A verse that you write out and then pray through in the journal is a verse that has been wrestled with, applied, and allowed to do its work. The journal entry that begins with a Scripture verse and ends with a prayer is often the entry you return to most often.",
    ],
  },
  {
    badge: "1 Samuel 7:12",
    title: "The Journal as Faith Record — &ldquo;Ebenezer, Thus Far the Lord Has Helped Us&rdquo;",
    paragraphs: [
      "When Samuel sets up a stone between Mizpah and Shen after a great victory over the Philistines, he names it Ebenezer: &ldquo;Stone of help.&rdquo; The explanation is simple: &ldquo;Thus far the LORD has helped us&rdquo; (1 Sam 7:12). The stone is a physical record of divine faithfulness, erected precisely so that when the next crisis comes, there is something to point to: not a feeling, not a general sense that God is usually good, but a specific, datable instance of his help that can be seen and touched.",
      "The prayer journal is a paper Ebenezer. Every answered prayer recorded with a date is a stone in the pile. Every entry that says &ldquo;I asked this on this date and this is what God did&rdquo; is a piece of evidence that when the next valley arrives — and it will — can be returned to. The cumulative effect of years of dated, specific journal entries is a faith that is not built on feeling or on general theological conviction but on a personal history of divine faithfulness that the journal has preserved.",
      "Robert Murray M&rsquo;Cheyne said that a day that does not contain an entry for what God has done is a wasted day — not because God requires journaling but because the habit of recording God&rsquo;s faithfulness is the habit of noticing it, and the habit of noticing it is the habit of gratitude, and gratitude is the atmosphere in which faith grows. The journal is not a spiritual discipline in competition with prayer; it is what preserves the prayer long enough to build a faith that can hold through whatever comes next.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily ACTS Entry",
    summary:
      "Structure a daily journal entry using the ACTS framework. Not every section need be long, but each section should be present. The discipline of moving through the four categories before arriving at supplication reshapes the orientation of prayer over time.",
    steps: [
      "Begin with two or three sentences of Adoration: not what you want God to do but who he is. Use a name of God, an attribute, or a verse about his character. Even one sentence of genuine adoration changes the temperature of everything that follows.",
      "Write Confession honestly. Name specific failures from the previous day, not categories. Not &ldquo;I was unkind&rdquo; but &ldquo;I said this specific thing to this specific person and it was unkind and I knew it.&rdquo; The journal is the place to stop managing impressions and start being honest with God.",
      "Write Thanksgiving with specifics. One named gift from the past twenty-four hours. Not &ldquo;I am grateful for my family&rdquo; but &ldquo;I am grateful that my daughter called last night and we talked for an hour.&rdquo; Specific gratitude is the enemy of the vague discontent that makes prayer feel hollow.",
      "Write Supplication: the actual requests. Date them. Name the people or situations specifically. This is the part that will be most powerful to return to, because it is the part that becomes either an answered prayer or a record of God&rsquo;s redirection. The date is essential — without it, the entries become untestable and the journal loses half its power.",
    ],
    anchor: "Psalm 100:4 — Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name.",
  },
  {
    number: "02",
    title: "The Answered Prayer Review",
    summary:
      "Once a month, go back through past journal entries and mark which prayers have been answered, how they were answered, and whether God&rsquo;s answer matched what you asked or differed from it. This is the discipline of the Ebenezer.",
    steps: [
      "Set aside thirty minutes on the first of each month. Open the journal to the earliest unreviewed entries. Read through the supplication sections and look for responses: prayers that have been answered (mark them answered, with a date and brief note), prayers that appear to have been redirected (note the apparent redirection), and prayers still outstanding.",
      "For answered prayers, write a brief note in the margin or at the bottom of the original entry: the date the answer came and what the answer was. Over time these marginal notes become the most theologically important material in the journal, because they are the specific, datable evidence of divine faithfulness that generic belief cannot produce.",
      "For prayers that were redirected, ask: how does what actually happened compare to what I asked? In many cases the difference is instructive. The job I asked for and didn&rsquo;t get; the unexpected opening that appeared instead. Write the comparison honestly — not to excuse God from the appearance of silence but to understand what he was doing in the gap.",
      "Keep a separate running list of answered prayers — just the bare bones: the request, the date asked, and the date and nature of the answer. This list, over years, becomes a testimony document unlike anything else you will possess.",
    ],
    anchor: "1 Samuel 7:12 — Thus far the LORD has helped us.",
  },
  {
    number: "03",
    title: "Praying a Psalm",
    summary:
      "Once a week, take a psalm and turn it into a personal prayer in the journal. Write each verse in your own words, applying it to your actual situation. This is lectio divina applied to prayer: reading slowly, stopping where the text catches you, and letting the Scripture become the vocabulary of your prayer.",
    steps: [
      "Choose a psalm — the shorter ones (Ps 23, 27, 46, 62, 63, 131) are good starting points, as are the great laments (Ps 13, 22, 88) and the great ascents (Ps 120-134). Read it through once slowly, without immediately trying to pray it.",
      "Go back to the beginning and write it as personal prayer. &ldquo;The LORD is my shepherd&rdquo; becomes &ldquo;Lord, you are my shepherd — I am choosing to believe this today even though I am anxious about provision. I am choosing to believe I shall not want.&rdquo; Stop where a phrase catches you and stay there as long as it is generative.",
      "When you reach a verse that does not fit your situation (the psalm may describe enemies pursuing you when your immediate problem is different), either translate it — &ldquo;my enemies today are my own fear and this specific doubt&rdquo; — or simply receive it as intercession for others in that situation. The psalms were written for the whole people of God, not just for individual moments.",
      "End by noting which verse or phrase was most alive during the prayer. Return to that verse in the next day&rsquo;s entry as the starting point for adoration or petition. The journal creates a running conversation in which one day&rsquo;s prayer feeds the next.",
    ],
    anchor: "Psalm 62:8 — Trust in him at all times, O people; pour out your heart before him; God is a refuge for us.",
  },
  {
    number: "04",
    title: "The Lament Entry",
    summary:
      "When you are in pain, grief, confusion, or anger at God, write the lament. Do not manage it into a more acceptable form. The psalms of lament are canonical permission to bring the whole interior life before God without sanitizing it first.",
    steps: [
      "Begin where you actually are, not where you think you should be. If you are angry, write the anger. If you are confused, write the confusion. If you feel abandoned, write &ldquo;I feel abandoned and I don&rsquo;t understand why.&rdquo; The psalms modeled this: Psalm 88 ends with &ldquo;darkness is my closest friend&rdquo; and offers no resolution. God was not offended by it; he included it in Scripture.",
      "After writing the lament, stay in the conversation. The lament psalm does not stop at the grief; it turns toward God from within the grief. Even if you cannot praise, you can address: &ldquo;You know this. You see this. I am bringing this to you even though I don&rsquo;t understand it.&rdquo; The act of addressing God from inside the pain is itself a form of faith, often more authentic than the faith that never acknowledges the darkness.",
      "Do not force a resolution. If the entry ends in the dark, let it end in the dark. Return to it the next day and the day after. The movement through lament to trust — what the psalms call &ldquo;but I trust in you&rdquo; — is usually not a one-entry process; it is a movement over days or weeks. The journal preserves the whole arc.",
      "Date the lament entries carefully, and date any subsequent entries in which the darkness begins to lift. Over time, the dates reveal how long the valleys lasted and how God moved in them — information that is invaluable in the next valley.",
    ],
    anchor: "Psalm 13:1-2, 5-6 — How long, O LORD? Will you forget me forever?... But I have trusted in your steadfast love.",
  },
  {
    number: "05",
    title: "Intercessory Pages",
    summary:
      "Dedicate a section of the journal to intercession: specific people, specific situations, specific requests with dates. Return to these pages regularly. The discipline of praying for others with specificity and consistency is one of the most powerful uses of the journal.",
    steps: [
      "Create a page or section for each person you pray for regularly. Record the date you began praying, the specific requests, and any specific things you sense from Scripture or prayer for that person. Return to the page whenever you pray for them and add updates.",
      "When you pray for someone facing a specific crisis — illness, marriage difficulty, job loss, faith struggle — record the date of the crisis and the specific prayers. When the situation resolves or shifts, record that too. The intercessory journal becomes a document of God&rsquo;s faithfulness in others&rsquo; lives as well as your own.",
      "For long-term intercessions — prayers for people who do not yet believe, prayers for children or grandchildren, prayers for a church or community — keep a running record across years. Some of the most powerful journal testimonies are the multi-year intercessions: the prayer that began in year one and was answered in year seven.",
      "Share answered intercessions with the people you prayed for when appropriate. The journal is private, but the testimony it generates does not have to be. Telling someone that you prayed for them for three years before their breakthrough both honors God and strengthens their faith.",
    ],
    anchor: "James 5:16 — The prayer of a righteous person has great power as it is working.",
  },
  {
    number: "06",
    title: "The Evening Examen",
    summary:
      "The Ignatian Examen is a nightly review of the day with God. Adapted for the prayer journal, it is a five-minute written practice that builds the habit of noticing God in ordinary life — and of bringing the ordinary life honestly before him before sleep.",
    steps: [
      "Each evening, open the journal and move through five short questions: (1) For what moment today am I most grateful? (2) What moment today was hardest? (3) Where did I sense God&rsquo;s presence today, even briefly? (4) Where did I resist him, miss him, or act against my own convictions? (5) What do I most need from him tomorrow?",
      "Keep each answer brief — one to three sentences. The Examen is not a long exercise; it is a daily practice of attention that accumulates over time. The discipline is not the quality of any single entry but the cumulative effect of the practice: a soul that has learned to notice God in ordinary life because it has been in the habit of looking for him every evening.",
      "Review a month of Examen entries periodically. The patterns reveal: which moments of gratitude recur (what gives you life), which moments of difficulty recur (what habitually challenges you), where God appears most often (in what people, circumstances, practices), and where you most consistently miss or resist him. The Examen entries are a spiritual diagnostic.",
      "Use the answers to question five as the starting point for the next morning&rsquo;s prayer. The continuity between the evening&rsquo;s honest accounting and the morning&rsquo;s supplication is itself a form of integrity: what you told God last night shapes what you ask him this morning.",
    ],
    anchor: "Lamentations 3:40 — Let us test and examine our ways, and return to the LORD.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "George Müller",
    role: "Bristol Orphan Houses — The Man Who Proved God Answers Specific Prayer",
    quote:
      "I live in the spirit of prayer. I pray as I walk about, when I lie down and when I rise up. And the answers are always coming. Thousands and tens of thousands of times have my prayers been answered.",
    bio: "George Müller (1805-1898) is the great documentary proof of answered prayer in modern Christian history. Born in Prussia, converted at twenty while a university student, he moved to England and eventually to Bristol, where he founded and ran orphan houses that at their height housed more than two thousand children. Müller&rsquo;s method was simple and radical: he told no one of his financial needs except God, praying specifically and recording both the prayer and the answer. His detailed journals, published in multiple volumes of A Narrative of Some of the Lord&rsquo;s Dealings with George Müller, contain more than fifty thousand specific answers to prayer documented with dates, amounts, and circumstances. He prayed for years for specific individuals and recorded their conversions. He prayed for exact sums of money and recorded their arrival, often on the same day, often from unexpected sources. Müller kept his journal not for his own benefit but as a testimony document, believing that the detailed record of God&rsquo;s faithfulness was itself a form of evangelism and an encouragement to the faith of others. He remained active in ministry into his late eighties and died at ninety-two still recording answered prayers.",
  },
  {
    name: "Jim Elliot",
    role: "Ecuadorian Missionary &mdash; The Journal of a Life Surrendered Before It Was Given",
    quote:
      "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    bio: "Jim Elliot (1927-1956) was an American missionary who died at twenty-eight when he and four colleagues were killed by the Huaorani people of Ecuador they had gone to reach. But Elliot&rsquo;s extraordinary journals, which he kept from his college years until his death, reveal a soul being formed in prayer long before the final act of sacrifice. He began journaling at Wheaton College, and the journals show the development of a theology of surrender worked out in prayer, argument, Scripture, and honest self-examination over nearly a decade. The famous line about giving and gaining was not a sermon illustration but a personal journal entry. Elliot used his journal to pray through his vocation, his call to missions, his relationship with Elisabeth Howard (who became his wife), and his growing sense that he was being prepared for something costly. His widow Elisabeth published the journals, and they have shaped the prayer lives of missionaries and ordinary Christians for more than sixty years. They are the best modern example of what a journal of intercessory self-offering looks like when it is lived from the inside rather than narrated from outside.",
  },
  {
    name: "David Brainerd",
    role: "Missionary to Native Americans &mdash; The Journal That Launched a Thousand Missionaries",
    quote:
      "I never got away from Jesus, and him crucified, in my preaching. I found that when I had nothing to say about Christ, I had nothing to say.",
    bio: "David Brainerd (1718-1747) died of tuberculosis at twenty-nine after a short missionary career among the Native American peoples of New Jersey and Pennsylvania. His diary, kept with extraordinary honesty through periods of spiritual desolation, physical illness, and apparent failure, was edited and published by Jonathan Edwards in 1749 and has never been out of print. What makes the diary remarkable is not its victories but its honesty about the depths — the long passages of spiritual darkness, depression, and a sense of God&rsquo;s absence that Brainerd recorded with unflinching accuracy, interspersed with passages of revival, answered prayer, and spiritual breakthrough. Edwards credited Brainerd&rsquo;s diary with inspiring more young people toward missions than any other document he knew. William Carey, Henry Martyn, and Jim Elliot were all shaped by it. The Brainerd diary is the canonical example of the prayer journal as a record of the whole interior life, not just the high points — and of the way God uses honesty about the darkness, preserved in writing, to speak long after the writer is gone.",
  },
  {
    name: "E. M. Bounds",
    role: "Power Through Prayer &mdash; The Theology of Prevailing Prayer",
    quote:
      "Prayer is not a little habit pinned on to us while we were tied to our mother&rsquo;s apron-strings, neither is it a frell thought of as a good-morning or good-night salutation. It is the mighty movement of the soul toward God.",
    bio: "Edward McKendree Bounds (1835-1913) was a Methodist pastor and Civil War chaplain who spent the last seventeen years of his life writing on prayer. He rose at four in the morning to pray for three hours before breakfast, every day. His books on prayer — Power Through Prayer, Purpose in Prayer, The Necessity of Prayer, Possibilities of Prayer, and others — were not published in his lifetime but were found in manuscript after his death and published posthumously. Bounds wrote on prayer not as a theologian constructing a theory but as a practitioner reporting from the field. His central conviction was that the quality of a church, a ministry, or a life was the quality of its prayer, and that all other spiritual activities were secondary to this. For Bounds, a prayer journal was not optional for the serious Christian; the discipline of recorded, dated, specific prayer was the structure within which the &ldquo;mighty movement of the soul toward God&rdquo; became a sustained practice rather than an occasional experience. His books are still among the most widely read works on prayer in the English language.",
  },
  {
    name: "Richard Foster",
    role: "Celebration of Discipline &mdash; Prayer as Friendship with God",
    quote:
      "To pray is to change. Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives.",
    bio: "Richard Foster (born 1942) is a Quaker theologian and author whose 1978 book Celebration of Discipline introduced a generation of evangelical Protestants to the classical spiritual disciplines, including prayer in all its forms. Foster&rsquo;s chapter on prayer in Celebration of Discipline, and his later book Prayer: Finding the Heart&rsquo;s True Home (1992), present prayer not as a technique for getting what you want from God but as a form of friendship — a relationship that transforms the one who practices it. For Foster, the prayer journal is the place where prayer becomes &ldquo;a two-way conversation with God rather than a monologue directed at the ceiling.&rdquo; He advocates journaling specifically as a discipline of listening: not only recording what you say to God but noting, with appropriate care and humility, what you sense God saying in response. Foster&rsquo;s pastoral influence on the late twentieth-century recovery of contemplative and formative prayer practices has been immense, and his grounded, non-esoteric approach to disciplines like journaling has made them accessible to Christians who might otherwise have associated them with mysticism remote from ordinary life.",
  },
  {
    name: "Pete Greig",
    role: "24-7 Prayer &mdash; Recovering Prayer for a New Generation",
    quote:
      "God isn&rsquo;t looking for clever prayers or long prayers or loud prayers. He is looking for honest prayers — the ones that come from the place where you actually live.",
    bio: "Pete Greig (born 1966) is the founder of the 24-7 Prayer movement, which began in 1999 in Chichester, England, when a group of young people started praying around the clock and never stopped. What began as a single prayer meeting in a room covered in art, lament, Scripture, and honest prayer has spread to more than half the countries of the world and has introduced millions of young people to sustained, creative, written, and contemplative prayer. Greig&rsquo;s books — Red Moon Rising, God on Mute, How to Pray, Dirty Glory — address prayer with unusual honesty about the hard parts: unanswered prayer, prayer in suffering, prayer when God is silent. His God on Mute, written during his wife&rsquo;s serious illness, is one of the most theologically serious and personally honest treatments of unanswered prayer written in the twenty-first century. Greig&rsquo;s contribution to the recovery of the prayer journal as a living, creative, honest practice — rather than a dutiful religious exercise — has been significant, particularly among younger Christians who find the journal a more natural form of spiritual expression than the spoken prayer of an earlier generation.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Habakkuk 2:2",
    text: "Write the vision; make it plain on tablets, so he may run who reads it.",
    reflection:
      "God instructs the prophet to write, not merely to remember. The written word outlasts the spoken word, survives the dimming of memory, and can be returned to in the dark moments when the original hearing feels distant. What you write in your journal about God&rsquo;s promises and God&rsquo;s faithfulness is a tablet for future versions of yourself who will need the clarity that present-moment writing can provide.",
  },
  {
    reference: "Psalm 102:18",
    text: "Let this be recorded for a generation to come, so that a people yet to be created may praise the LORD.",
    reflection:
      "The psalmist writes not only for himself but for future readers — people who will encounter his recorded experience of God and praise the Lord because of it. Your prayer journal is not only for you; it is for your children, grandchildren, and those who will come after you and need evidence of God&rsquo;s faithfulness in ordinary lives. The journal you write today may be the Ebenezer someone else erects generations from now.",
  },
  {
    reference: "Philippians 4:6",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
    reflection:
      "The pattern is prayer plus thanksgiving: not petition alone but petition anchored in gratitude. The prayer journal enforces this structure by requiring you to write both — what you are asking and what you are grateful for. The discipline of thanksgiving before supplication changes the character of the asking, and the journal makes the combination datable and returnable.",
  },
  {
    reference: "Psalm 77:11-12",
    text: "I will remember the deeds of the LORD; yes, I will remember your wonders of old. I will ponder all your work, and meditate on your mighty deeds.",
    reflection:
      "Remembering is not passive — it is a spiritual act, a choice to resist the forgetting that despair and distraction produce. The prayer journal is the primary tool for the discipline of remembering: it stores what would otherwise be lost, and it makes the deliberate retrieval of God&rsquo;s past faithfulness possible when present circumstances have closed off every other evidence of his presence.",
  },
  {
    reference: "Lamentations 3:22-23",
    text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    reflection:
      "This is perhaps the most famous statement of God&rsquo;s faithfulness in the Bible — and it was written in the middle of Lamentations, the most devastating lamentation in Scripture. The author of Lamentations arrived at this conviction not by ignoring suffering but by passing through it in honest prayer. The prayer journal is the place where faith of this quality is produced: not by avoiding the lamentation but by staying in the conversation until the steadfast love becomes visible again.",
  },
  {
    reference: "Romans 8:26",
    text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
    reflection:
      "There are times when the journal cannot contain what you are trying to pray — when the grief or the confusion is too large for words, and the entry is fragmentary or wordless. Paul&rsquo;s assurance is that the Spirit intercedes in those moments with what words cannot carry. The journal does not have to be theologically elegant or emotionally complete; it only has to be honest. The Spirit does the rest.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "bBdANmRb8aQ", title: "Why Keep a Prayer Journal? The Theology of Written Prayer" },
  { videoId: "2wg7SP7Jmcc", title: "George Müller: Fifty Thousand Answers to Prayer" },
  { videoId: "lEjIABP67eM", title: "The ACTS Method: Structuring Your Prayer Journal" },
  { videoId: "hNi6HCZUMFE", title: "Praying the Psalms: Lament and Honesty Before God" },
  { videoId: "5W0sCOj8K7E", title: "Pete Greig on Honest Prayer and the 24-7 Prayer Movement" },
  { videoId: "PUJdJpvJplg", title: "David Brainerd and Jim Elliot: Journals That Shaped Missions" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

const CATEGORIES = [
  "Healing",
  "Guidance",
  "Relationship",
  "Provision",
  "Salvation",
  "Protection",
  "Wisdom",
  "Ministry",
  "Other",
];

export default function ChristianPrayerJournalPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PJEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [prayerRequest, setPrayerRequest] = useState("");
  const [category, setCategory] = useState("");
  const [answered, setAnswered] = useState(false);
  const [answerNote, setAnswerNote] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PJEntry[]);
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
    if (!prayerRequest.trim()) return;
    const entry: PJEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      prayerRequest: prayerRequest.trim(),
      category: category.trim(),
      answered,
      answerNote: answerNote.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPrayerRequest("");
    setCategory("");
    setAnswered(false);
    setAnswerNote("");
  }

  function toggleAnswered(id: string) {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, answered: !e.answered } : e))
    );
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? "rgba(107, 79, 187, 0.12)" : "transparent",
    color: active ? PURPLE : MUTED,
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
    color: PURPLE,
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
                color: PURPLE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Prayer &amp; Spiritual Disciplines
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Write the Vision: The Christian Prayer Journal
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Writing prayers down is one of the oldest and most powerful spiritual practices in the
              Christian tradition. It turns vague religious sentiment into specific, dateable, testable
              conversation with God. It preserves the unanswered prayers long enough to see God&rsquo;s
              &ldquo;no&rdquo; become a better &ldquo;yes.&rdquo; It builds, over years, a personal
              record of divine faithfulness that nothing else can produce. This guide explores the
              theology of written prayer, the journals of the saints, and practical frameworks for
              keeping a prayer journal that actually changes your faith.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${PURPLE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Write the vision; make it plain on tablets, so he may run who reads it.&rdquo;
              </p>
              <p style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>
                Habakkuk 2:2
              </p>
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
                Seven studies on the theology of written prayer — from Habakkuk&rsquo;s command to
                write the vision, through the journals of Müller, Elliot, and Brainerd, to the
                psalms of lament as the biblical model of honest prayer, and the practice of praying
                Scripture back to God as the foundation of a living prayer journal.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: PURPLE,
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
                        background: "rgba(107, 79, 187, 0.07)",
                        border: `1px solid rgba(107, 79, 187, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: PURPLE,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The prayer journal is not a spiritual extra for the especially devout — it is the
                  primary tool for the kind of specific, dateable, testable prayer that builds a faith
                  grounded in evidence rather than feeling. Start small: one dated entry per day, one
                  answered prayer marked per month. Over years, the journal becomes an Ebenezer that
                  will hold you when everything else seems to be failing. Explore the related practice
                  of listening in{" "}
                  <Link href="/christian-listening" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Christian Listening
                  </Link>{" "}
                  or go deeper on the interior life in{" "}
                  <Link href="/christian-holiness" style={{ color: PURPLE, textDecoration: "underline" }}>
                    Christian Holiness
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
                Six prayer journal practices — the ACTS daily entry, the monthly answered-prayer
                review, praying a psalm, the lament entry, intercessory pages, and the evening
                Examen. These are not techniques but disciplines: structured practices that, repeated
                over time, build the kind of prayer life that holds through everything.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: PURPLE,
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
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}>
                    {practice.summary}
                  </p>
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
                      color: PURPLE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about starting
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The best prayer journal is the one you actually keep. Start with one practice, not
                  six. The ACTS daily entry is the most foundational; once it is a habit, add the
                  monthly review; then the psalm practice; then the others. The goal is not a perfect
                  journal — the goal is a continued conversation. Use the Journal tab here to begin
                  recording your prayer requests today.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six voices on prayer and the prayer journal — from Müller&rsquo;s fifty thousand
                documented answers, through Elliot&rsquo;s and Brainerd&rsquo;s journals of
                sacrifice, to Foster&rsquo;s and Greig&rsquo;s recoveries of honest and contemplative
                prayer for ordinary Christians.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: PURPLE,
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
                      background: "rgba(107, 79, 187, 0.06)",
                      borderLeft: `3px solid ${PURPLE}`,
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
                Six passages on prayer and its record — from Habakkuk&rsquo;s command to write the
                vision, through the psalmist&rsquo;s discipline of remembering God&rsquo;s deeds, to
                Paul&rsquo;s assurance that the Spirit intercedes in the prayers too deep for words.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: PURPLE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each passage into the journal as a written prayer. Begin with Habakkuk 2:2 and
                  write what you most need to &ldquo;make plain on tablets&rdquo; right now — the
                  vision you are holding, the promises you are trusting, the prayers you are waiting
                  to see answered. Then move through the Philippians passage and write the thanksgiving
                  before the supplication. Let the Romans 8:26 passage free you from the pressure of
                  perfect prayer: the Spirit helps in weakness.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Record your prayer requests here. Note the category, mark them answered when God
                responds, and add a note about how he answered — even if the answer was different from
                what you asked. These entries are stored privately in your browser. No one sees them
                but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New prayer entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pj-request" style={labelStyle}>
                    Prayer request
                  </label>
                  <textarea
                    id="pj-request"
                    value={prayerRequest}
                    onChange={(e) => setPrayerRequest(e.target.value)}
                    placeholder="Write your prayer request specifically — name the person, the situation, the outcome you are asking for. Specific prayer is testable prayer."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pj-category" style={labelStyle}>
                    Category (e.g. healing, guidance, relationship, provision)
                  </label>
                  <input
                    id="pj-category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Healing, Guidance, Relationship, Provision, Salvation..."
                    list="pj-category-list"
                    style={inputStyle}
                  />
                  <datalist id="pj-category-list">
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Answered?</label>
                  <button
                    type="button"
                    onClick={() => setAnswered((prev) => !prev)}
                    style={{
                      padding: "0.5rem 1.2rem",
                      borderRadius: 8,
                      border: `1px solid ${answered ? PURPLE : BORDER}`,
                      background: answered ? "rgba(107, 79, 187, 0.15)" : "transparent",
                      color: answered ? PURPLE : MUTED,
                      cursor: "pointer",
                      fontSize: "0.88rem",
                      fontWeight: answered ? 700 : 400,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {answered ? "Yes — answered" : "Not yet / waiting"}
                  </button>
                </div>

                {answered && (
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="pj-answer-note" style={labelStyle}>
                      How God answered
                    </label>
                    <textarea
                      id="pj-answer-note"
                      value={answerNote}
                      onChange={(e) => setAnswerNote(e.target.value)}
                      placeholder="How did God answer? Was it what you asked, something different, or a redirection you didn&rsquo;t expect? Record the specifics — this becomes your Ebenezer."
                      rows={3}
                      style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!prayerRequest.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !prayerRequest.trim() ? BORDER : PURPLE,
                    color: !prayerRequest.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !prayerRequest.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save prayer
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your prayers{" "}
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
                      Record a prayer request above. Over time your entries become an Ebenezer — a
                      datable record of what you asked, what God answered, and the gap between the two
                      that reveals his faithfulness more clearly than anything else.
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
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 2 }}>
                              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT, margin: 0 }}>
                                {entry.prayerRequest}
                              </h3>
                              {entry.answered && (
                                <span
                                  style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    color: PURPLE,
                                    background: "rgba(107, 79, 187, 0.12)",
                                    border: `1px solid rgba(107, 79, 187, 0.3)`,
                                    borderRadius: 4,
                                    padding: "2px 8px",
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                    flexShrink: 0,
                                  }}
                                >
                                  Answered
                                </span>
                              )}
                            </div>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
                              <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                              {entry.category && (
                                <span style={{ color: MUTED, fontSize: "0.78rem" }}>
                                  &middot; {entry.category}
                                </span>
                              )}
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                            <button
                              type="button"
                              onClick={() => toggleAnswered(entry.id)}
                              style={{
                                background: "transparent",
                                border: `1px solid ${entry.answered ? PURPLE : BORDER}`,
                                color: entry.answered ? PURPLE : MUTED,
                                borderRadius: 6,
                                padding: "0.3rem 0.75rem",
                                fontSize: "0.78rem",
                                cursor: "pointer",
                              }}
                            >
                              {entry.answered ? "Answered" : "Mark answered"}
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteEntry(entry.id)}
                              aria-label={`Delete prayer: ${entry.prayerRequest}`}
                              style={{
                                background: "transparent",
                                border: `1px solid ${BORDER}`,
                                color: MUTED,
                                borderRadius: 6,
                                padding: "0.3rem 0.75rem",
                                fontSize: "0.78rem",
                                cursor: "pointer",
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        {entry.answerNote && (
                          <div
                            style={{
                              marginTop: 10,
                              padding: "0.75rem 1rem",
                              background: "rgba(107, 79, 187, 0.06)",
                              borderLeft: `3px solid ${PURPLE}`,
                              borderRadius: 6,
                            }}
                          >
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 4,
                              }}
                            >
                              How God answered
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.answerNote}
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
                Teaching to watch on the prayer journal — on why write prayers down, Müller&rsquo;s
                documented answers, the ACTS method, praying the psalms, Pete Greig on honest prayer,
                and the journals of Brainerd and Elliot that shaped Christian missions.
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
              Start your Ebenezer today
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              A prayer journal is not a spiritual achievement to aspire to — it is a conversation to
              begin. One dated entry, one specific request, one record of what God did. Over years,
              the accumulation of these entries becomes a document of faithfulness that nothing else
              in your spiritual life can produce: a personal history of God keeping his word, answering
              prayer, redirecting what you asked toward something better, and accompanying you through
              the darkness that the unanswered entries record. Write the vision. Make it plain.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the art of listening in prayer in{" "}
              <Link href="/christian-listening" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Listening
              </Link>
              , deepen the interior life the journal cultivates in{" "}
              <Link href="/christian-holiness" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              , or understand the obedience that prayer leads toward in{" "}
              <Link href="/christian-obedience" style={{ color: PURPLE, textDecoration: "underline" }}>
                Christian Obedience
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
