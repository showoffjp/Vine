"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const INDIGO = "#6366F1";

const STORAGE_KEY = "vine_loneliness_entries";

interface LONEntry {
  id: string;
  date: string;
  theLoneliness: string;
  godsPresence: string;
  oneConnection: string;
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
    badge: "Genesis 2:18 — Before the Fall",
    title: "It Is Not Good That Man Should Be Alone",
    paragraphs: [
      "The first &ldquo;not good&rdquo; in the Bible arrives before sin does. Six times in Genesis 1 God surveys his work and pronounces it good; then, in a garden still unstained by rebellion, he says: &ldquo;It is not good that the man should be alone; I will make him a helper fit for him&rdquo; (Gen 2:18). Adam walks with God in unbroken fellowship, surrounded by a perfect world &mdash; and something is still missing. Loneliness, in other words, is not a malfunction introduced by the fall. The ache for human companionship is original equipment, woven into a creature made in the image of a God who is himself eternally communal &mdash; Father, Son, and Spirit in unbroken self-giving love.",
      "This changes how the lonely believer reads their own ache. The pain of being alone is not evidence of spiritual failure, as though a sufficiently devout person would need no one but God. God himself declared that fellowship with him was not designed to be a substitute for fellowship with people; he made both hungers and intends to feed both. The lonely Christian who feels guilty for wanting friends is feeling guilty for being built according to specification.",
      "It also means loneliness carries information. The ache points to a real good &mdash; communion &mdash; the way hunger points to food. The question is never whether the longing is legitimate (Genesis 2:18 settled that) but where it will be carried: toward God in honest lament, toward others in courageous reaching, or inward into the shame and withdrawal that feed on themselves. The whole biblical account of loneliness begins here, with God himself naming the problem before any human being had the vocabulary for it.",
    ],
    callout: {
      label: "Original equipment",
      text: "Loneliness predates the fall. The ache for companionship is not a spiritual defect but the design specification of a creature made in the image of a communal God &mdash; the first &ldquo;not good&rdquo; in a perfect world.",
    },
  },
  {
    badge: "Gethsemane &amp; the Cross — The Loneliness of Jesus",
    title: "Could You Not Watch One Hour? The Lonely Christ",
    paragraphs: [
      "No one in history has been lonelier than Jesus of Nazareth, and the Gospels do not hide it. In Gethsemane, &ldquo;greatly distressed and troubled,&rdquo; he tells his three closest friends, &ldquo;My soul is very sorrowful, even to death; remain here and watch&rdquo; (Mark 14:33-34) &mdash; the Son of God explicitly asking for human company in his darkest hour. He returns to find them asleep. &ldquo;Could you not watch one hour?&rdquo; (Mark 14:37). Three times he goes to pray; three times the friends fail him. Then comes the betrayal with a kiss, the scattering of all the disciples (&ldquo;they all left him and fled,&rdquo; Mark 14:50), Peter&rsquo;s threefold denial in the courtyard &mdash; and finally the cry that has no parallel in any literature: &ldquo;My God, my God, why have you forsaken me?&rdquo; (Matt 27:46).",
      "On the cross, Jesus experiences the outer limit of loneliness: abandonment not only by every friend but &mdash; in some mystery the church has never fully plumbed &mdash; by the felt presence of the Father himself, as he bears the sin of the world. The Psalm he quotes, Psalm 22, is the loneliest prayer in the Psalter, and he makes it his own. This means the Christian who feels forsaken prays to a God who has been forsaken &mdash; from the inside. &ldquo;We do not have a high priest who is unable to sympathize with our weaknesses&rdquo; (Heb 4:15) includes, specifically, this weakness.",
      "The gospel logic runs deeper still: Jesus was forsaken so that the lonely would never finally be. He endured the ultimate abandonment in our place, which is why the risen Christ can say, with the full weight of Gethsemane and Golgotha behind the words, &ldquo;Behold, I am with you always, to the end of the age&rdquo; (Matt 28:20). The loneliest moment in history happened so that no human loneliness would ever again be the last word.",
    ],
    callout: {
      label: "The forsaken God",
      text: "Jesus asked for company and was failed; he cried &ldquo;why have you forsaken me?&rdquo; and was heard by no one. The lonely believer prays to a God who knows abandonment from the inside &mdash; and who was forsaken so that loneliness would never be the last word.",
    },
  },
  {
    badge: "The Present Age — The Epidemic",
    title: "The Loneliness Epidemic and the Gospel",
    paragraphs: [
      "The loneliness of the modern West is no longer anecdote; it is public health data. Surgeons general issue advisories on it; governments appoint ministers for it; researchers compare its mortality effects to smoking. We are more connected than any humans in history &mdash; and lonelier: marriages later and fewer, churches and clubs and unions emptied, neighbors unknown, friendships thinned to feeds, the elderly warehoused, the young anxious and alone behind glowing screens. The conditions of modern life &mdash; mobility, individualism, the screen, the collapse of shared institutions &mdash; have dismantled, piece by piece, nearly every structure within which human beings used to belong to one another.",
      "The gospel speaks to this epidemic at the level of diagnosis, not just symptom. Scripture never imagined the autonomous individual that modernity celebrates; it knows only persons-in-relation &mdash; members of households, tribes, and above all a body, where &ldquo;the eye cannot say to the hand, I have no need of you&rdquo; (1 Cor 12:21). The modern self was promised that radical independence would feel like freedom; it feels like solitary confinement. Loneliness is the predictable result of building a civilization on a false anthropology.",
      "This is also the church&rsquo;s open door. A community that actually practices what the New Testament describes &mdash; eating together house to house, bearing one another&rsquo;s burdens, weeping with those who weep, treating one another as brothers, sisters, mothers, and fathers (1 Tim 5:1-2) &mdash; is offering the rarest commodity in the modern world: belonging that does not have to be earned and cannot be unsubscribed. The loneliness epidemic is, among other things, a mission field that meets every congregation at its own front door.",
    ],
    callout: {
      label: "The diagnosis",
      text: "Modernity promised that radical independence would feel like freedom; it feels like solitary confinement. The epidemic is the predictable result of a false anthropology &mdash; and the church&rsquo;s embodied life together is the rarest commodity in the modern world.",
    },
  },
  {
    badge: "Psalm 25:16 — David&rsquo;s Lonely Psalms",
    title: "Turn to Me, For I Am Lonely and Afflicted",
    paragraphs: [
      "&ldquo;Turn to me and be gracious to me, for I am lonely and afflicted&rdquo; (Ps 25:16). The man after God&rsquo;s own heart &mdash; warrior, king, poet, surrounded all his life by armies, courtiers, wives, and sons &mdash; prays like an abandoned child. The Psalter is full of his loneliness: &ldquo;I am like a desert owl of the wilderness&hellip; I lie awake; I am like a lonely sparrow on the housetop&rdquo; (Ps 102:6-7). &ldquo;My friends and companions stand aloof from my plague, and my nearest kin stand far off&rdquo; (Ps 38:11). &ldquo;No one cares for my soul&rdquo; (Ps 142:4). The loneliest lines in Scripture were written by one of its most accomplished figures &mdash; proof, if any were needed, that loneliness does not respect success, crowds, or even closeness to God.",
      "What David does with the loneliness is the lesson. He does not perform around it, numb it, or spiritualize it away; he prays it &mdash; raw, specific, addressed. &ldquo;I am lonely&rdquo; is, in Psalm 25, a legitimate argument before the throne of God, a reason God should act: turn to me, for I am lonely. The psalms of loneliness teach the believer that the ache is not something to be hidden from God until it is presentable. It is itself the prayer.",
      "And because these psalms are in the canon &mdash; the prayer book God himself gave his people &mdash; every lonely believer who prays them discovers something quietly revolutionary: the words were waiting before the loneliness arrived. God anticipated this ache, commissioned poetry for it, and preserved that poetry for three thousand years so that no one would ever have to be lonely without language. The lonely sparrow on the housetop has been singing in the church&rsquo;s liturgy for millennia &mdash; which means even the prayer of loneliness is prayed in company.",
    ],
    callout: {
      label: "The ache as argument",
      text: "&ldquo;Turn to me, for I am lonely&rdquo; &mdash; David treats loneliness as a legitimate case before God&rsquo;s throne. The lonely psalms mean God anticipated this ache and commissioned language for it: even the prayer of loneliness is prayed in company.",
    },
  },
  {
    badge: "1 Kings 19 — Elijah&rsquo;s Despair",
    title: "I Alone Am Left &mdash; And God&rsquo;s Threefold Answer",
    paragraphs: [
      "Twice at Horeb Elijah makes the same complaint: &ldquo;I have been very jealous for the LORD&hellip; and I, even I only, am left, and they seek my life&rdquo; (1 Kings 19:10, 14). It is the prophet&rsquo;s loneliness talking &mdash; and like most loneliness, it is doing arithmetic badly. The day before, all Israel had watched fire fall at his prayer; Obadiah had hidden a hundred prophets in caves. But despair has a way of emptying the world: exhausted, hunted, and isolated in the wilderness, Elijah genuinely believes he is the last faithful man alive, and he asks to die (19:4).",
      "God&rsquo;s answer is a study in how he treats the lonely. First, the body: sleep, and a meal, and more sleep, and another meal (19:5-8) &mdash; no rebuke, no theology, just bread baked on hot stones and an angel&rsquo;s touch. Then the encounter: not wind, earthquake, or fire, but the low whisper that asks, &ldquo;What are you doing here, Elijah?&rdquo; &mdash; the personal question that lets the lonely man empty his whole complaint, twice. And finally, the correction of the count: &ldquo;Yet I will leave seven thousand in Israel, all the knees that have not bowed to Baal&rdquo; (19:18). Elijah&rsquo;s &ldquo;I alone&rdquo; was off by seven thousand.",
      "Then God does one thing more: he gives Elijah a person. &ldquo;Elisha the son of Shaphat&hellip; you shall anoint to be prophet in your place&rdquo; (19:16) &mdash; a companion, a successor, a daily presence who &ldquo;followed Elijah and ministered to him&rdquo; (19:21). The cure for the prophet&rsquo;s loneliness was not only the correction of his theology but the gift of a friend. The passage is a standing word to every believer convinced they are the only one: the count is wrong, the seven thousand exist, and God&rsquo;s ordinary remedy for &ldquo;I alone am left&rdquo; has a name and a face.",
    ],
    callout: {
      label: "Off by seven thousand",
      text: "Loneliness does arithmetic badly &mdash; Elijah&rsquo;s &ldquo;I alone&rdquo; missed seven thousand faithful. God answered with food and sleep, a whispered question, a corrected count, and finally a friend named Elisha. The remedy for &ldquo;I alone&rdquo; has a face.",
    },
  },
  {
    badge: "Nouwen — Loneliness into Solitude",
    title: "From Loneliness to Solitude: The Inner Conversion",
    paragraphs: [
      "Henri Nouwen&rsquo;s most enduring contribution to the theology of loneliness is a distinction: loneliness and solitude are the same outward condition &mdash; being alone &mdash; inhabited in two opposite ways. Loneliness is aloneness experienced as a void: restless, grasping, clinging to distractions, demanding that someone or something come fill the emptiness. Solitude is the same aloneness converted into a meeting place: alone with God, attentive, receptive, no longer begging the world to solve what only God can. In Reaching Out he named this the first movement of the spiritual life: &ldquo;to reach out to our innermost self&rdquo; by converting &ldquo;the restless loneliness into a restful solitude.&rdquo;",
      "The conversion matters because loneliness left unconverted becomes dangerous. The lonely heart, Nouwen warned, grabs at people &mdash; demanding from friendship, marriage, and community a totality of fulfillment no human relationship can bear, then souring with disappointment when they buckle under the weight. Hearts that have not found their rest in God devour the very relationships they crave. Solitude breaks the cycle: the person who has learned to be alone with God stops using people as anesthetic and becomes able, for the first time, actually to love them &mdash; to want their good rather than their function.",
      "This is emphatically not a counsel to give up on human connection &mdash; Genesis 2:18 still stands. It is a counsel about sequence. The believer who brings a converted solitude into friendship brings a full cup rather than an empty one; community formed between such people is communion rather than mutual extraction. Nouwen&rsquo;s rule of thumb endures: the quality of our life together depends on the quality of our life alone. Loneliness is not first solved by finding more people; it is first transfigured by finding, in the empty room, a Presence &mdash; and then the people can be loved instead of consumed.",
    ],
    callout: {
      label: "The conversion",
      text: "Loneliness and solitude are the same aloneness inhabited two ways: as a void that grasps, or as a meeting place with God. Converted solitude stops using people as anesthetic and becomes able to love them &mdash; a full cup brought to friendship instead of an empty one.",
    },
  },
  {
    badge: "Psalm 68:6 — The Church as Family",
    title: "God Sets the Lonely in Families",
    paragraphs: [
      "&ldquo;Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home&rdquo; (Ps 68:5-6) &mdash; or as the NIV renders it, &ldquo;God sets the lonely in families.&rdquo; The verse declares both a divine character trait and a divine method. The trait: God&rsquo;s eye goes first to the unattached &mdash; the orphan, the widow, the solitary. The method: his remedy for their condition is not primarily a feeling delivered to the isolated heart but a place at a table. God&rsquo;s answer to loneliness is architectural. He builds households around the alone.",
      "The New Testament names that household: the church. Jesus promised that no one who left houses, brothers, sisters, mothers, fathers, or children for his sake would fail to receive &ldquo;a hundredfold now in this time, houses and brothers and sisters and mothers and children&rdquo; (Mark 10:29-30) &mdash; not in heaven only, now in this time, in the new family of the church. Paul&rsquo;s letters are saturated with family grammar: believers are brothers and sisters, older women are mothers, Timothy is a true child, the church is &ldquo;the household of God&rdquo; (Eph 2:19). On the cross, Jesus performed the pattern himself, giving his mother and his beloved disciple to each other: &ldquo;Woman, behold your son&hellip; Behold your mother&rdquo; (John 19:26-27) &mdash; the first act of the dying Lord was to set two soon-to-be-bereft people in a family.",
      "This lays a real claim on every congregation. If God sets the lonely in families and the church is the family he sets them in, then a church the lonely cannot get into &mdash; socially, not architecturally &mdash; is malfunctioning at the level of its job description. The widow at the end of the pew, the single man eating alone after the service, the newcomer hovering at coffee hour: these are not interruptions to the church&rsquo;s ministry. By Psalm 68&rsquo;s logic, they are the ministry &mdash; the very people the Father of the fatherless is attempting to settle, through his people, into a home.",
    ],
    callout: {
      label: "Architectural grace",
      text: "God&rsquo;s remedy for loneliness is not a feeling but a place at a table &mdash; he sets the lonely in families, and the New Testament names the family: the church, where the believer receives mothers, brothers, sisters, and children &ldquo;now in this time.&rdquo;",
    },
  },
  {
    badge: "Particular Lonelinesses — Particular Care",
    title: "Singleness, Widowhood, Old Age: The Lonelinesses with Names",
    paragraphs: [
      "Loneliness is not generic; it comes in particular shapes, each with its own weight. There is the loneliness of long singleness &mdash; the empty apartment after the wedding of another friend, the church built socially around couples, the question of who will know if you fall ill. There is the loneliness of widowhood &mdash; the amputation of a shared life, the silence in the house where a voice used to be, grief&rsquo;s strange social aftermath in which invitations thin precisely when they are most needed. There is the loneliness of old age &mdash; the outliving of friends, the shrinking world, the days when the phone does not ring. Scripture does not blur these into one; it names them, and assigns each its particular care.",
      "To the single, the Bible offers more than consolation &mdash; it offers precedent and honor. Jesus was single; Paul was single and called his condition a gift (1 Cor 7:7); Isaiah promises the faithful eunuch &ldquo;a monument and a name better than sons and daughters&hellip; an everlasting name that shall not be cut off&rdquo; (Isa 56:4-5). To widows, God gives his own name &mdash; &ldquo;protector of widows&rdquo; (Ps 68:5) &mdash; and gave the early church a concrete practice: &ldquo;Honor widows who are truly widows&rdquo; (1 Tim 5:3); &ldquo;religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction&rdquo; (James 1:27). To the aged, the promise is direct address: &ldquo;even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save&rdquo; (Isa 46:4).",
      "The pattern in all three is the same: God&rsquo;s care for particular loneliness is particular &mdash; and almost always mediated. The honored single, the visited widow, the carried elder are, in the Bible&rsquo;s working assumption, honored, visited, and carried largely through the hands of God&rsquo;s people. Which turns the doctrine into an assignment: somewhere within reach of every believer is a specific person living one of these named lonelinesses, and the God who names them is looking for hands.",
    ],
    callout: {
      label: "Named and assigned",
      text: "Scripture does not treat loneliness as generic: singleness, widowhood, and old age each receive particular promises &mdash; and particular practices. God&rsquo;s care for the named lonelinesses is almost always mediated through the hands of his people.",
    },
  },
  {
    badge: "Hebrews 13:5 — The Promise",
    title: "Never Will I Leave You: The Promise Beneath All Others",
    paragraphs: [
      "&ldquo;Keep your life free from love of money, and be content with what you have, for he has said, &lsquo;I will never leave you nor forsake you&rsquo;&rdquo; (Heb 13:5). In the Greek the promise is stacked with negatives &mdash; five of them &mdash; a construction so emphatic that translators have resorted to renderings like &ldquo;I will never, never leave you; I will never, never, never forsake you.&rdquo; The writer of Hebrews is quoting God&rsquo;s words to Joshua at the Jordan (Josh 1:5), themselves echoing Moses&rsquo; charge to all Israel (Deut 31:6) &mdash; a promise made at moments of maximum exposure, to people about to walk into the unknown without their familiar leader. It is the Bible&rsquo;s bedrock answer to abandonment, and the New Testament hands it without qualification to every believer.",
      "Notice what the promise does and does not say. It does not say the believer will never feel alone &mdash; David felt alone, Elijah felt alone, Jesus on the cross was alone in ways we cannot fathom. It says the believer will never be alone: the divine presence is a fact that persists beneath the feeling, the way the sun persists above the overcast. Faith&rsquo;s work in lonely seasons is to keep telling the feeling about the fact &mdash; which is why the verse is given as a quotation to be repeated: &ldquo;he has said&hellip; so we can confidently say&rdquo; (Heb 13:5-6). The lonely believer is invited to answer the silence of the empty room out loud, with a sentence God spoke first.",
      "And the promise has a guarantee written in blood. The reason God can say &ldquo;never&rdquo; to the believer is that he said something else to his own Son on the cross &mdash; the forsakenness Jesus absorbed is the forsakenness the believer is promised never to receive. &ldquo;I am with you always, to the end of the age&rdquo; (Matt 28:20) are among the last recorded words of the risen Christ, and the Spirit he sent is called the Paraclete &mdash; the One called alongside. Whatever the loneliness of the present hour, the Christian&rsquo;s deepest address has not changed and cannot: never, never, never forsaken.",
    ],
    callout: {
      label: "The fact beneath the feeling",
      text: "Five stacked negatives: never, never forsaken. The promise does not say the believer will never feel alone &mdash; it says they will never be alone. Faith&rsquo;s work in lonely seasons is telling the feeling about the fact, in a sentence God spoke first.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Praying the Lonely Psalms &mdash; Giving the Ache Its Language",
    summary:
      "A daily practice of bringing loneliness directly to God using the psalms written for it &mdash; lament as the first and most honest move, before any fixing is attempted.",
    steps: [
      "Choose one lonely psalm for the week &mdash; Psalm 25, 38, 102, or 142 are the tradition&rsquo;s core texts. Read it aloud once, slowly, letting David&rsquo;s words stand in for yours where they fit.",
      "Stop at the line that is most yours &mdash; &ldquo;I am lonely and afflicted&rdquo; (25:16), &ldquo;no one cares for my soul&rdquo; (142:4), &ldquo;I am like a lonely sparrow on the housetop&rdquo; (102:7) &mdash; and pray it as your own, with your specifics: the empty apartment, the silent phone, the name of the person who is gone.",
      "Make the ache an argument, as David does: &ldquo;Turn to me, for I am lonely.&rdquo; You are not informing God of something he missed; you are exercising the permission the canon grants &mdash; loneliness is a legitimate case to press at the throne.",
      "End each session with one verse of the psalm&rsquo;s trust &mdash; every lonely psalm turns, even slightly, toward hope (&ldquo;You are my refuge, my portion in the land of the living,&rdquo; 142:5). Borrow the turn even when you cannot yet feel it; the psalms lend faith as well as lament.",
      "Record it in the Journal tab: name the loneliness honestly, note where you sensed God&rsquo;s presence (including his quiet listening, which is presence), and choose the week&rsquo;s one connection to reach for.",
    ],
    anchor: "Psalm 25:16 &mdash; &ldquo;Turn to me and be gracious to me, for I am lonely and afflicted.&rdquo;",
  },
  {
    number: "02",
    title: "Converting the Empty Hours &mdash; Loneliness into Solitude",
    summary:
      "Nouwen&rsquo;s great work made practical: a deliberate practice for the loneliest stretch of your day, inhabiting the same aloneness as a meeting place with God rather than a void.",
    steps: [
      "Identify your loneliest recurring hour &mdash; the evening after work, Sunday afternoon, the first minutes after waking in a quiet house. That hour, not a more convenient one, is the site of the practice; the conversion happens where the loneliness lives.",
      "When the hour arrives, resist the two reflexes: the grasp (scrolling, texting anyone who might answer, background noise for company) and the spiral (rehearsing the evidence of your aloneness). Both feed the void. Instead, sit down deliberately, as if keeping an appointment &mdash; because you are.",
      "Speak the situation to God plainly: &ldquo;Lord, this is the lonely hour. I am here, and you have said you are here. I am choosing to be alone with you rather than just alone.&rdquo; The sentence sounds small; said daily for a month, it begins to rename the hour.",
      "Spend the time in receptive company rather than performance &mdash; a slow psalm, an unhurried cup of tea consciously shared with the Presence, a walk taken with God the way you would walk with a friend who doesn&rsquo;t need constant talk.",
      "Expect the conversion to be gradual and partial. Some evenings the void wins; note it without judgment and keep the appointment the next day. Solitude is a capacity, and capacities are built by repetition. The measure of progress: the hour slowly stops being evidence against you and starts being a place you have met Someone.",
    ],
    anchor: "Psalm 73:25 &mdash; &ldquo;Whom have I in heaven but you? And there is nothing on earth that I desire besides you.&rdquo;",
  },
  {
    number: "03",
    title: "The Weekly Reach &mdash; One Connection, Initiated",
    summary:
      "The discipline of initiating: one concrete reach toward another human being every week, chosen in advance and carried out regardless of how the feelings argue. Connection is rebuilt by deposits, and someone has to go first.",
    steps: [
      "Each week &mdash; the Journal tab asks for it &mdash; name one specific reach: a phone call (voice, not text) to an old friend, a lunch invitation, a note to someone you&rsquo;ve lost touch with, joining the small group you&rsquo;ve been circling for months.",
      "Make it concrete and scheduled, not aspirational: &ldquo;Call Mark Thursday at 7&rdquo; beats &ldquo;reach out to people more.&rdquo; Loneliness flourishes in vagueness; defeat it with a calendar.",
      "Expect the resistance and discount it in advance. Loneliness tells you the reach will be unwelcome, that you are imposing, that they would have called if they wanted to talk. These are symptoms, not facts &mdash; research and pastoral experience agree that people consistently underestimate how glad others are to hear from them.",
      "Go first, repeatedly, without scorekeeping. Some reaches will land on busy weeks and get a thin response; the practice is not ruined. You are not auditioning for friendship; you are practicing the love that &ldquo;does not insist on its own way&rdquo; (1 Cor 13:5) &mdash; and statistically, sustained initiative is how nearly all adult friendships actually form.",
      "Once a month, make the reach toward someone lonelier than you &mdash; the widow from church, the housebound neighbor, the new arrival who knows no one. The fastest documented exit from the inside of loneliness is the door marked &ldquo;someone else&rsquo;s.&rdquo;",
    ],
    anchor: "Proverbs 18:24 &mdash; &ldquo;A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.&rdquo;",
  },
  {
    number: "04",
    title: "Belonging on Purpose &mdash; Committing to a Body",
    summary:
      "Moving from attending church to belonging to one: the deliberate, slightly unfashionable commitments &mdash; membership, a small group, a serving role &mdash; by which God&rsquo;s family-setting work (Ps 68:6) actually gets traction in a life.",
    steps: [
      "If you have no church, find one and stay long enough to be known &mdash; the modern pattern of sampling congregations like restaurants guarantees permanent anonymity. Belonging requires the one ingredient consumer habits cannot supply: repeated presence among the same people.",
      "Join the smaller unit, whatever it is called &mdash; small group, home group, Bible study, men&rsquo;s or women&rsquo;s breakfast. Sunday services alone cannot cure loneliness; rows face forward. Family happens in circles, around tables, at the scale where your absence is noticed.",
      "Take a serving role &mdash; greeting, meals ministry, children&rsquo;s check-in, setup crew. Service is the back door into belonging: it gives you a reason to be there, people to stand beside, and an identity beyond &ldquo;newcomer.&rdquo; The lonely person who waits to feel belonging before contributing has the sequence backwards.",
      "Practice the vulnerability that converts proximity into connection. Answer &ldquo;how are you?&rdquo; truthfully once; ask for prayer about something real; accept the dinner invitation even though declining is easier. Communities deepen at the speed of their honesty.",
      "Give it a year before you judge it. Churches are families, and families are awkward, slow, and imperfect &mdash; Bonhoeffer warned that those who love their dream of community more than the community itself destroy both. The body God sets you in will disappoint you precisely because it is real. Stay anyway; staying is the practice.",
    ],
    anchor: "Psalm 68:6 &mdash; &ldquo;God settles the solitary in a home; he leads out the prisoners to prosperity.&rdquo;",
  },
  {
    number: "05",
    title: "The Table Ministry &mdash; Hospitality as the Cure You Administer",
    summary:
      "Turning your own experience of loneliness into someone else&rsquo;s welcome: the ancient Christian practice of the open table, which heals host and guest in the same meal.",
    steps: [
      "Set a rhythm you can keep &mdash; one meal a fortnight, or one a month, with someone at your table who would otherwise eat alone. Simple food; hospitality is not entertaining, and the lonely are not inspecting your cooking. Scripture&rsquo;s standard is &ldquo;given to hospitality&rdquo; (Rom 12:13), not given to performance.",
      "Build the guest list from the named lonelinesses: the single colleague far from family, the widow whose invitations dried up after the funeral, the international student, the elderly neighbor, the new family at church still standing at the edge of coffee hour.",
      "Let your own loneliness inform the welcome. You know what it is to hover at a doorway hoping someone speaks first &mdash; so speak first. The wounds of loneliness, surrendered to God, become the most precise instrument for detecting it in others.",
      "Keep the table unhurried and the questions real. The gift you are giving is not the meal but the experience of being attended to &mdash; the rarest course on any modern menu. &ldquo;Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares&rdquo; (Heb 13:2).",
      "Notice what happens to your own loneliness in the process &mdash; and record it in the Journal. Almost everyone who takes up this practice reports the same paradox: the host is healed at the table set for someone else. Isaiah promised it: pour yourself out for the hungry, &ldquo;and your gloom be as the noonday&hellip; you shall be like a watered garden&rdquo; (Isa 58:10-11).",
    ],
    anchor: "Luke 14:13-14 &mdash; &ldquo;But when you give a feast, invite the poor, the crippled, the lame, the blind, and you will be blessed.&rdquo;",
  },
  {
    number: "06",
    title: "Keeping Company with the Promise &mdash; A Rule for the Hard Nights",
    summary:
      "A short rule of life for acute loneliness &mdash; the 2 a.m. ache, the holiday alone, the wave that arrives without warning &mdash; built around Hebrews 13:5 and the practiced presence of God.",
    steps: [
      "Memorize the promise in advance, while the seas are calm: &ldquo;Never will I leave you; never will I forsake you&rdquo; (Heb 13:5). Acute loneliness is not a teachable moment; it runs on what was stored beforehand. The verse is the emergency ration.",
      "When the wave hits, say the promise aloud &mdash; Hebrews itself prescribes this: &ldquo;he has said&hellip; so we can confidently say&rdquo; (13:5-6). Answering an empty room out loud feels strange and works anyway; the feeling of abandonment is being contradicted by a fact, in your own voice.",
      "Tell the feeling about the fact, specifically: &ldquo;I feel completely alone. I am not. The One who was actually forsaken &mdash; so I never would be &mdash; is in this room.&rdquo; Do not try to make the feeling vanish; loneliness denied goes underground. Let fact and feeling stand in the same room until the fact is the larger of the two.",
      "Do one small embodied thing tethered to care &mdash; light a candle and pray for the three loneliest people you know; write tomorrow&rsquo;s reach in the Journal; read one lonely psalm. Acute loneliness shrinks when the body moves toward someone, even in intercession.",
      "Afterward &mdash; not during &mdash; review the night in the Journal&rsquo;s second field: where, looking back, was God&rsquo;s presence in it? The hard nights, honestly recorded, accumulate into the believer&rsquo;s own evidence file that the promise holds.",
    ],
    anchor: "Hebrews 13:5-6 &mdash; &ldquo;For he has said, &lsquo;I will never leave you nor forsake you.&rsquo; So we can confidently say, &lsquo;The Lord is my helper; I will not fear.&rsquo;&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Henri Nouwen",
    role: "Reaching Out; The Inner Voice of Love &mdash; The Wounded Guide from Loneliness to Solitude",
    quote:
      "The Christian way of life does not take away our loneliness; it protects and cherishes it as a precious gift&hellip; The pain of our loneliness can be the place where we meet God, when we no longer run from it but dare to enter it and find there the beginning of a new communion &mdash; the conversion of loneliness into solitude, and of solitude into prayer.",
    bio: "Henri Nouwen (1932-1996) was a Dutch Catholic priest and psychologist who became one of the twentieth century&rsquo;s most beloved spiritual writers precisely because he wrote about loneliness from the inside. Beneath the glittering career &mdash; professorships at Notre Dame, Yale, and Harvard, more than forty books, a global readership &mdash; ran a lifelong, documented ache: his journals and his posthumously published secret diary The Inner Voice of Love record crushing loneliness, an insatiable hunger for affection, and a breakdown in the late 1980s that nearly ended him. Out of that material he built his most influential framework: the first movement of the spiritual life is the conversion of loneliness into solitude &mdash; the same empty room inhabited no longer as a void that grasps at people but as a meeting place with the God who calls us beloved. His final decade as pastor of L&rsquo;Arche Daybreak, a community of people with intellectual disabilities, was his own attempt to live the answer he taught: that hearts which have found their rest in God stop devouring relationships and become free to love. Nouwen&rsquo;s authority on loneliness is the authority of a fellow patient sharing the treatment, and his counsel remains the most pastorally useful sentence ever written on the subject: do not run from the loneliness &mdash; enter it, for God is waiting at the bottom of it.",
  },
  {
    name: "C.S. Lewis",
    role: "A Grief Observed; The Four Loves &mdash; The Map-Maker of Grief&rsquo;s Loneliness",
    quote:
      "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing&hellip; There is a sort of invisible blanket between the world and me. I find it hard to take in what anyone says&hellip; Yet I want the others to be about me.",
    bio: "C.S. Lewis (1898-1963), the Oxford and Cambridge don whose Mere Christianity and Narnia stories made him the most influential Christian writer of the twentieth century, produced near the end of his life its rawest document: A Grief Observed, the notebooks he kept after the death of his wife Joy Davidman, published originally under a pseudonym because their honesty was almost indecent. The book is the definitive map of grief&rsquo;s particular loneliness &mdash; the &ldquo;invisible blanket&rdquo; between the bereaved and the world, the awful discovery that he wanted people around yet couldn&rsquo;t take in a word they said, the door slammed in the face when he sought God &ldquo;and a sound of bolting and double bolting on the inside.&rdquo; Lewis knew loneliness long before Joy: motherless at nine, shipped to brutal boarding schools, a self-described lifelong outsider whose great essay The Inner Ring dissected the ache of exclusion, and whose The Four Loves argued that friendship &mdash; the love modernity values least &mdash; is among God&rsquo;s chief instruments against the soul&rsquo;s isolation. What makes him essential to the lonely is the arc of the grief notebooks themselves: the bolted door, honestly recorded and not abandoned, slowly opens; the silence turns out to have been &ldquo;not the silence of contempt but of a doctor waiting for the patient to stop talking.&rdquo; Lewis proves that the loneliest pages a Christian ever writes can become, without a single dishonest line, testimony.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Life Together; Letters and Papers from Prison &mdash; Community&rsquo;s Theologian, Loneliness&rsquo;s Martyr",
    quote:
      "Let him who cannot be alone beware of community&hellip; Let him who is not in community beware of being alone. Each by itself has profound pitfalls and perils. One who wants fellowship without solitude plunges into the void of words and feelings, and one who seeks solitude without fellowship perishes in the abyss of vanity, self-infatuation, and despair.",
    bio: "Dietrich Bonhoeffer (1906-1945), the German pastor-theologian executed by the Nazis three weeks before his prison camp was liberated, wrote the modern church&rsquo;s two indispensable books on togetherness and aloneness &mdash; from opposite ends of the experience. Life Together (1939) distills his years leading the Confessing Church&rsquo;s illegal seminary at Finkenwalde into a theology of community without sentimentality: Christian fellowship is not an ideal to be demanded but a divine reality to be received, and the famous twin warnings &mdash; the one who cannot be alone should beware of community, the one who is not in community should beware of being alone &mdash; hold solitude and fellowship in the permanent tension every lonely believer must learn. Then history made him live the second half of the sentence. Arrested in 1943 for his role in the resistance, Bonhoeffer spent two years in cells, separated from his community, his family, and his young fianc&eacute;e Maria von Wedemeyer; the Letters and Papers from Prison record the loneliness with unbearable dignity, nowhere more than in the poem &ldquo;Who Am I?&rdquo; &mdash; the celebrated prisoner who seems composed to his guards confessing he is inwardly &ldquo;restless and longing and sick, like a bird in a cage,&rdquo; and resolving the gap with the only sentence left: &ldquo;Whoever I am, Thou knowest, O God, I am Thine.&rdquo; He walked to the gallows, by the camp doctor&rsquo;s account, in complete peace. Bonhoeffer&rsquo;s witness to the lonely is double: build the community while you can, and know that when every human fellowship is stripped away, the believer&rsquo;s last identity still holds.",
  },
  {
    name: "Mother Teresa",
    role: "Missionary of Charity &mdash; Diagnostician of the West&rsquo;s Great Poverty",
    quote:
      "The greatest disease in the West today is not TB or leprosy; it is being unwanted, unloved, and uncared for. We can cure physical diseases with medicine, but the only cure for loneliness, despair, and hopelessness is love. There are many in the world who are dying for a piece of bread, but there are many more dying for a little love.",
    bio: "Mother Teresa of Calcutta (1910-1997), founder of the Missionaries of Charity, Nobel laureate, and saint of the church, spent five decades among the most materially destitute people on earth &mdash; which is what gives her diagnosis of the wealthy world its unanswerable authority. Again and again, to audiences in Europe and America expecting to hear about Calcutta&rsquo;s gutters, she insisted that the worst poverty she had encountered was not there: it was the unvisited nursing home, the forgotten elder, the unwanted person in the rich world&rsquo;s lonely crowd. &ldquo;The most terrible poverty is loneliness and the feeling of being unloved&rdquo; &mdash; a hunger, she said, far harder to satisfy than the hunger for bread. Her credibility was costly and twofold. Outwardly, her sisters practiced presence at the precise point of abandonment, carrying the dying off Calcutta&rsquo;s streets so that no one God made would die unwanted. Inwardly &mdash; as the world learned only after her death, from the letters in Come Be My Light &mdash; she herself endured roughly fifty years of interior darkness, a felt absence of the God she served, which means the century&rsquo;s great apostle to the unloved knew spiritual loneliness at a depth few mystics have recorded. Her twin legacies to the lonely church are a mission and a mirror: the loneliest person within your reach is Christ in distressing disguise &mdash; and faithfulness is possible, and fruitful, even through decades when the heart feels utterly alone.",
  },
  {
    name: "John Ortberg",
    role: "Everybody&rsquo;s Normal Till You Get to Know Them &mdash; The Pastor of Ordinary Connection",
    quote:
      "We long to be known &mdash; fully known &mdash; and loved anyway. That is the heart&rsquo;s deepest craving and its deepest fear, fused together. So we edit and hide and manage impressions, and end up lonely in a crowd of people doing the same thing. Community happens when somebody finally goes first &mdash; when the masks come off and grace turns out to be real. To be known and not loved is our great fear; to be loved and not known is our great frustration; to be fully known and fully loved is, as close as we get this side of heaven, the gospel.",
    bio: "John Ortberg (b. 1957) is an American pastor, clinical psychologist by training, and bestselling writer on spiritual formation who has done more than almost any contemporary teacher to translate the theology of community into the actual mechanics of human connection &mdash; the awkward, unglamorous territory where loneliness is really fought. His book Everybody&rsquo;s Normal Till You Get to Know Them builds its case on a single premise: every human being comes stamped &ldquo;as is,&rdquo; porcupines all, designed for closeness yet armed with quills &mdash; and intimacy is not found but built, through self-disclosure that risks going first, through commitment that outlasts disappointment, through the thousand small bids for attention that relationships are actually made of. Ortberg&rsquo;s background in psychology lets him name what the loneliness research confirms: connection is a practice, not a feeling that descends; and his pastoral instinct ties the practice to the gospel &mdash; the longing to be fully known and fully loved, which every human relationship approximates and only God satisfies, was answered at the cross before it was ever felt in an empty apartment. A protégé of Dallas Willard and a former teaching pastor at Willow Creek and Menlo Church, Ortberg gives lonely believers the most actionable counsel in the modern literature: stop waiting to be found; learn the small, brave, repeatable moves &mdash; go first, tell the truth, stay &mdash; by which the unconnected become knit.",
  },
  {
    name: "Tim Keller",
    role: "The Meaning of Marriage; Gospel in Life &mdash; The Apologist of Gospel Friendship",
    quote:
      "To be loved but not known is comforting but superficial. To be known and not loved is our greatest fear. But to be fully known and truly loved is, well, a lot like being loved by God. It is what we need more than anything. It liberates us from pretense, humbles us out of our self-righteousness, and fortifies us for any difficulty life can throw at us.",
    bio: "Timothy Keller (1950-2023), founding pastor of Redeemer Presbyterian Church in Manhattan, built a thirty-year ministry in the loneliest demographic in America &mdash; young, ambitious, transient urban professionals &mdash; and became, in the process, the church&rsquo;s most acute analyst of how the modern city manufactures isolation and how the gospel answers it. His preaching returned constantly to the diagnosis: secular culture tells the self to define itself, validate itself, and depend on no one, a project that produces exhausted individuals trading in performance and image &mdash; known by no one because being known would expose the gap between the brand and the reality. Against this Keller set the gospel&rsquo;s unique solvent: in Christ we are simultaneously more sinful than we dared believe and more loved than we dared hope &mdash; fully known and fully loved at the same time &mdash; which kills both the fear that makes us hide and the pride that makes us perform, the twin engines of relational loneliness. His teaching on friendship (drawn deep from Proverbs) insisted it is not a luxury but a discipline of sanctification &mdash; constant, candid, carefully built &mdash; and his vision of the church as a counter-cultural &ldquo;city within the city&rdquo; gave thousands of uprooted singles the family Psalm 68 promises. Keller&rsquo;s legacy to the lonely is the connection he never tired of drawing: the verdict of God, received by faith, is the only foundation strong enough to risk being truly known by people.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Genesis 2:18",
    text: "Then the LORD God said, &ldquo;It is not good that the man should be alone; I will make him a helper fit for him.&rdquo;",
    reflection:
      "The first &ldquo;not good&rdquo; in Scripture, spoken in a sinless world. Loneliness predates the fall: the ache for companionship is not a defect of the soul but its design &mdash; the signature of a creature made in the image of a communal God. The lonely believer who feels guilty for wanting people is feeling guilty for being built to specification. God named the problem before any human had words for it.",
  },
  {
    reference: "Psalm 25:16-17",
    text: "Turn to me and be gracious to me, for I am lonely and afflicted. The troubles of my heart are enlarged; bring me out of my distresses.",
    reflection:
      "David treats his loneliness as a legitimate argument before God&rsquo;s throne: turn to me, because I am lonely. The ache is not hidden until presentable; it is itself the prayer. And because this psalm is in the canon, the words were waiting before your loneliness arrived &mdash; God commissioned language for this ache and preserved it for three thousand years. Even the prayer of loneliness is prayed in company.",
  },
  {
    reference: "Psalm 68:5-6",
    text: "Father of the fatherless and protector of widows is God in his holy habitation. God settles the solitary in a home; he leads out the prisoners to prosperity.",
    reflection:
      "God&rsquo;s remedy for loneliness is architectural: not first a feeling delivered to the isolated heart, but a place at a table. His eye goes to the unattached &mdash; orphan, widow, solitary &mdash; and his method is to build households around them. The New Testament names the household: the church, where Jesus promises mothers, brothers, sisters, and children &ldquo;now in this time&rdquo; (Mark 10:30). The lonely at the edge of the congregation are not interruptions to its ministry; they are the ministry.",
  },
  {
    reference: "1 Kings 19:9-10, 18",
    text: "And the word of the LORD came to him&hellip; He said, &ldquo;I have been very jealous for the LORD, the God of hosts&hellip; and I, even I only, am left, and they seek my life, to take it away.&rdquo;&hellip; &ldquo;Yet I will leave seven thousand in Israel, all the knees that have not bowed to Baal.&rdquo;",
    reflection:
      "Loneliness does arithmetic badly: Elijah&rsquo;s &ldquo;I alone am left&rdquo; was off by seven thousand. God&rsquo;s answer to the despairing prophet is a complete pastoral theology &mdash; food and sleep before correction, a whispered question that lets the whole complaint out, the corrected count, and finally a companion named Elisha. For every believer convinced they are the only one: the count is wrong, the seven thousand exist, and God&rsquo;s ordinary remedy for isolation has a face.",
  },
  {
    reference: "Matthew 26:38-40",
    text: "Then he said to them, &ldquo;My soul is very sorrowful, even to death; remain here, and watch with me.&rdquo;&hellip; And he came to the disciples and found them sleeping. And he said to Peter, &ldquo;So, could you not watch with me one hour?&rdquo;",
    reflection:
      "The Son of God explicitly asks for human company in his darkest hour &mdash; and is failed, three times, by his closest friends. Gethsemane sanctifies the need for companionship (if Jesus needed watchers, needing people is not weakness) and consecrates the experience of being let down by them. The Christ who then went to the cross crying &ldquo;why have you forsaken me?&rdquo; knows abandonment from the inside &mdash; and endured it so that no loneliness of yours would ever be the final word.",
  },
  {
    reference: "Hebrews 13:5-6",
    text: "For he has said, &ldquo;I will never leave you nor forsake you.&rdquo; So we can confidently say, &ldquo;The Lord is my helper; I will not fear; what can man do to me?&rdquo;",
    reflection:
      "Five stacked negatives in the Greek: never, never, never forsaken. The promise does not say the believer will never feel alone &mdash; David did, Elijah did, Jesus did &mdash; it says the believer will never be alone: a fact persisting beneath the feeling like sun above overcast. And Hebrews prescribes the practice: &ldquo;he has said&hellip; so we can say.&rdquo; The lonely believer answers the empty room out loud, with a sentence God spoke first &mdash; guaranteed by the forsakenness Christ absorbed in our place.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "kJgSg47Pbnc", title: "It Is Not Good to Be Alone &mdash; Loneliness Before the Fall" },
  { videoId: "Cv8pq0HQDqM", title: "The Loneliness of Jesus &mdash; Gethsemane and the Cry of the Cross" },
  { videoId: "0WBp0LqnDDA", title: "Praying the Lonely Psalms &mdash; I Am Lonely and Afflicted" },
  { videoId: "5BB2tdCAjxM", title: "From Loneliness to Solitude &mdash; Nouwen&rsquo;s Inner Conversion" },
  { videoId: "xPYpVeGCXY8", title: "God Sets the Lonely in Families &mdash; The Church as Home" },
  { videoId: "dV4ks2vw3dY", title: "Never Will I Leave You &mdash; The Promise for the Hard Nights" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianLonelinessGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<LONEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theLoneliness, setTheLoneliness] = useState("");
  const [godsPresence, setGodsPresence] = useState("");
  const [oneConnection, setOneConnection] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as LONEntry[]);
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
    if (!theLoneliness.trim() || !oneConnection.trim()) return;
    const entry: LONEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theLoneliness: theLoneliness.trim(),
      godsPresence: godsPresence.trim(),
      oneConnection: oneConnection.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheLoneliness("");
    setGodsPresence("");
    setOneConnection("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? INDIGO : BORDER}`,
    background: active ? "rgba(99, 102, 241, 0.12)" : "transparent",
    color: active ? INDIGO : MUTED,
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
    color: INDIGO,
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
                color: INDIGO,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              The Ache &amp; the Belonging
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Loneliness: God Sets the Lonely in Families
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The first &ldquo;not good&rdquo; in the Bible was loneliness &mdash; spoken in a perfect
              world, before any sin. This guide traces the theology of the ache from Eden through the
              lonely psalms of David, Elijah&rsquo;s &ldquo;I alone am left,&rdquo; and the
              forsakenness of Jesus in Gethsemane and on the cross, to the promise that answers it all
              &mdash; &ldquo;never will I leave you&rdquo; &mdash; and builds the practices by which
              loneliness is converted into solitude, prayed honestly, and finally answered the way God
              prefers to answer it: with a family.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${INDIGO}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Father of the fatherless and protector of widows is God in his holy habitation.
                God settles the solitary in a home.&rdquo;
              </p>
              <p style={{ color: INDIGO, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 68:5-6</p>
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
                Nine studies in the theology of loneliness &mdash; the &ldquo;not good&rdquo; of Eden,
                the forsaken Christ of Gethsemane and Golgotha, the modern epidemic and the
                gospel&rsquo;s diagnosis, David&rsquo;s lonely psalms, Elijah&rsquo;s bad arithmetic,
                Nouwen&rsquo;s conversion of loneliness into solitude, the church as the family God
                sets the lonely in, the particular lonelinesses of singleness, widowhood, and old age,
                and the five-fold &ldquo;never&rdquo; of Hebrews 13:5.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: INDIGO,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                    dangerouslySetInnerHTML={{ __html: section.badge }}
                  />
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
                        background: "rgba(99, 102, 241, 0.07)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: INDIGO,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Loneliness is the oldest &ldquo;not good&rdquo; in the world, and God&rsquo;s answer
                  to it runs from Eden&rsquo;s helper through the cross&rsquo;s forsaken cry to the
                  family he is still setting the lonely into. Go deeper into building those bonds in
                  the{" "}
                  <Link href="/christian-friendship-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Friendship Guide
                  </Link>
                  , explore life in the body in the{" "}
                  <Link href="/christian-community-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Community Guide
                  </Link>
                  , or learn the holy use of aloneness in{" "}
                  <Link href="/christian-silence" style={{ color: INDIGO, textDecoration: "underline" }}>
                    Christian Silence
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
                Six practices for the lonely season &mdash; praying the lonely psalms, converting the
                empty hours into solitude, the weekly reach, belonging to a body on purpose, the table
                ministry of hospitality, and a rule for the hard nights. Loneliness is fought on two
                fronts at once: Godward in honesty, outward in initiative.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: INDIGO,
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
                      color: INDIGO,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the slowness
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Loneliness rarely lifts at the speed the ache demands. Friendships take months of
                  going first; churches take a year to become family; the conversion of the empty hour
                  into solitude is a capacity built by repetition, not a switch flipped by insight.
                  This is not failure &mdash; it is the ordinary pace of every cure worth having. The
                  Journal tab exists for the long game: name the loneliness honestly each time, record
                  where God&rsquo;s presence met you in it (including the nights it was only the
                  promise, held in the dark), and commit to one reach a week. Over months the entries
                  become a record almost no one expects to write: the slow, datable evidence that the
                  solitary really do get settled in a home.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses on loneliness and its healing &mdash; Nouwen&rsquo;s conversion of the
                ache into solitude, Lewis&rsquo;s map of grief&rsquo;s isolation, Bonhoeffer&rsquo;s
                twin warnings from community and from the cell, Mother Teresa&rsquo;s diagnosis of the
                West&rsquo;s great poverty, Ortberg&rsquo;s mechanics of going first, and
                Keller&rsquo;s fully-known-and-fully-loved. Each one writes from inside the ache, not
                above it.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: INDIGO,
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
                      background: "rgba(99, 102, 241, 0.06)",
                      borderLeft: `3px solid ${INDIGO}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: voice.quote }} />
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
                Six passages that form the biblical theology of loneliness &mdash; the &ldquo;not
                good&rdquo; of Eden, David&rsquo;s lonely petition, the God who sets the solitary in
                homes, Elijah&rsquo;s corrected count, Gethsemane&rsquo;s failed watchers, and the
                five-fold &ldquo;never&rdquo; of Hebrews. Read one per week alongside the Journal
                practice, and let the texts lend you their language.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: INDIGO,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${INDIGO}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These passages are not information about loneliness; they are equipment for it. Pray
                  the laments in the first person, with your specifics attached &mdash; the name, the
                  room, the hour. Say the promises aloud, because Hebrews prescribes exactly that:
                  &ldquo;he has said&hellip; so we can confidently say.&rdquo; And read the narratives
                  &mdash; Elijah&rsquo;s broom tree, Gethsemane&rsquo;s sleeping friends &mdash; as
                  company: you are joining a long line of the faithful who felt utterly alone, were
                  not, and found out. Let the texts do for you what they have done for every lonely
                  generation before you: keep you talking to the God who is there.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the honest record of a lonely season &mdash; the loneliness named
                without varnish, the place God&rsquo;s presence met you in it, and the one connection
                you will reach for this week. Entries are stored privately in your browser. No account
                needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lon-loneliness" style={labelStyle}>
                    The loneliness I&rsquo;m feeling &mdash; name it honestly
                  </label>
                  <textarea
                    id="lon-loneliness"
                    value={theLoneliness}
                    onChange={(e) => setTheLoneliness(e.target.value)}
                    placeholder="The empty apartment after everyone paired off. The house since the funeral. The crowd I was invisible in. Name it specifically — David did..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="lon-presence" style={labelStyle}>
                    Where I sensed God&rsquo;s presence in it
                  </label>
                  <textarea
                    id="lon-presence"
                    value={godsPresence}
                    onChange={(e) => setGodsPresence(e.target.value)}
                    placeholder="A verse that arrived, a settled moment in the empty hour, the promise held in the dark — or simply that you kept talking to him, which is presence too..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="lon-connection" style={labelStyle}>
                    One connection I will reach for this week
                  </label>
                  <textarea
                    id="lon-connection"
                    value={oneConnection}
                    onChange={(e) => setOneConnection(e.target.value)}
                    placeholder="Call Mark Thursday at 7. Invite the new family to lunch. Show up to the small group. Concrete and scheduled — loneliness is defeated by calendars..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theLoneliness.trim() || !oneConnection.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theLoneliness.trim() || !oneConnection.trim() ? BORDER : INDIGO,
                    color: !theLoneliness.trim() || !oneConnection.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theLoneliness.trim() || !oneConnection.trim() ? "not-allowed" : "pointer",
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
                      Name the loneliness honestly &mdash; David did, in the canon &mdash; then record
                      where God&rsquo;s presence met you in it and choose one concrete reach for the
                      week. Over months, these entries become the evidence the promise makes: the
                      solitary really do get settled in a home, one honest entry and one brave reach
                      at a time.
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
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry from ${entry.date}`}
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
                            The loneliness
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theLoneliness}
                          </p>
                        </div>

                        {entry.godsPresence && (
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
                              God&rsquo;s presence
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.godsPresence}
                            </p>
                          </div>
                        )}

                        <div>
                          <span
                            style={{
                              color: INDIGO,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            This week&rsquo;s reach
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.oneConnection}
                          </p>
                        </div>
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
                Teaching on loneliness and the gospel &mdash; Eden&rsquo;s &ldquo;not good,&rdquo; the
                forsaken Christ, the lonely psalms, Nouwen&rsquo;s conversion of loneliness into
                solitude, the church as the family God sets the lonely in, and the promise for the
                hard nights. Good companions to the Theology and Practices tabs.
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
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
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
              Never the last word
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The witness of the whole Bible is that loneliness is real, ancient, and answered. It was
              the first thing God called &ldquo;not good&rdquo;; it was prayed by David, suffered by
              Elijah, and drunk to the dregs by Jesus, who was forsaken precisely so that you would
              never be. The God who sets the lonely in families is still doing it &mdash; through
              corrected counts and whispered questions, through churches and tables and friends who go
              first, and through the promise stacked five negatives deep: never, never forsaken. The
              ache is not evidence against you. It is the homing signal &mdash; and Someone is already
              answering it.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: learn the slow craft of friendship in the{" "}
              <Link href="/christian-friendship-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Friendship Guide
              </Link>
              , find your place in the body in the{" "}
              <Link href="/christian-community-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Community Guide
              </Link>
              , or walk grief&rsquo;s particular loneliness in the{" "}
              <Link href="/christian-grief-guide" style={{ color: INDIGO, textDecoration: "underline" }}>
                Christian Grief Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
