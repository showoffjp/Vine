"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const AMBER = "#F59E0B";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_kindness_entries";

interface KNDEntry {
  person: string; // who needs kindness today
  act: string; // the specific act of kindness
  motive: string; // checking the heart motive
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
    badge: "Galatians 5:22",
    title: "Chrestotes — Usefulness-in-Love, Goodness in Action",
    paragraphs: [
      "The fifth fruit of the Spirit in Galatians 5:22 is chrestotes (χρηστότης) — a word that resists easy translation. English renders it kindness, but the Greek carries the sense of usefulness, serviceability, moral goodness that actually does something. In secular Greek the related adjective chrestos described wine that had mellowed, a yoke that fit well, a thing that worked for the good of the one using it. When Jesus says in Matthew 11:30 that his yoke is easy, the word is chrestos — his yoke is kind, fitted, it does not chafe. Chrestotes, then, is not a feeling of warmth toward people. It is goodness that has become useful to them, love that has taken on the shape of practical help.",
      "This matters because kindness is the most easily sentimentalized of the nine fruit. We imagine it as a temperament — some people are just kind — when Paul lists it as the produce of the Spirit's work in any believer. Kindness in the New Testament is muscular. It shows up. It pays the bill, carries the load, answers the late-night call, absorbs the insult without returning it. It is love translated into the dialect of ordinary action, and like all the fruit it grows not by straining but by abiding: the branch that remains in the vine bears it almost without noticing.",
      "Early Christians were sometimes mockingly called chrestianoi — followers of Chrestos, the Useful One, the Kind One — because pagan ears confused Christos with chrestos. The church fathers turned the slur into a badge: would that the world could not tell the difference between our Christ and our kindness.",
    ],
    callout: {
      label: "The word",
      text: "Chrestotes (χρηστότης): goodness of heart expressed in serviceable action; benignity; the quality of being genuinely useful to another person in love.",
    },
  },
  {
    badge: "Romans 2:4",
    title: "The Kindness That Leads to Repentance",
    paragraphs: [
      "Paul asks the moralist in Romans 2:4 a question that should unsettle every religious person: &ldquo;Do you presume on the riches of his kindness and forbearance and patience, not knowing that God's kindness is meant to lead you to repentance?&rdquo; The astonishing claim is not that God is kind — most religions can imagine a benevolent deity. The claim is that kindness is God's chosen instrument of conviction. Where we expect thunder, God sends warmth. Where we would apply pressure, God applies patience. And it is precisely this kindness, Paul says, that breaks the heart open and turns it home.",
      "This rewrites our theory of change. We tend to believe that people are argued, shamed, or frightened into repentance, and so our evangelism and our parenting and our conflict often reach for those tools first. But the Father in Luke 15 does not lecture the prodigal in the far country; he runs to him on the road, and it is the embrace — the robe, the ring, the feast — that completes the repentance the famine only began. Severity can produce compliance. Only kindness produces return.",
      "If God's kindness is the engine of repentance, then Christian kindness is never mere social pleasantness. Every act of unearned goodness toward another person is a small enactment of the gospel's deepest logic: you are loved before you are corrected, welcomed before you are worthy. The kind Christian is not avoiding the question of sin; she is answering it the way God does.",
    ],
  },
  {
    badge: "Old Testament",
    title: "Hesed — The Covenant Loving-Kindness of God",
    paragraphs: [
      "Long before Paul wrote chrestotes, Israel sang hesed (חֶסֶד) — the great covenant word of the Old Testament, appearing roughly 250 times, most densely in the Psalms. Translators have struggled with it for centuries: loving-kindness, steadfast love, mercy, covenant loyalty. Hesed is love that has bound itself by promise — loyal love, love with its sleeves rolled up, love that keeps showing up long after sentiment has burned off. &ldquo;The steadfast love of the LORD never ceases; his mercies never come to an end&rdquo; (Lamentations 3:22) is hesed holding a destroyed city together.",
      "The book of Ruth is the Old Testament's great narrative of hesed. Ruth's loyalty to Naomi (&ldquo;where you go I will go&rdquo;), Boaz's costly generosity at the field and the gate — the narrator calls these acts hesed, and through them God quietly rebuilds two shattered lives and threads the line to David and to Christ. Hesed in Ruth is never abstract: it is gleaned grain, a spread cloak, a redeemed field, a marriage. Covenant love becomes visible only as kindness.",
      "When Micah 6:8 summarizes everything God requires — &ldquo;to do justice, and to love hesed, and to walk humbly with your God&rdquo; — note the verb. We are commanded not merely to do kindness but to love it, to develop an affection for the practice itself. The person formed by hesed is not someone who performs kind acts reluctantly; kindness has become their taste, their instinct, their delight.",
    ],
    callout: {
      label: "The word",
      text: "Hesed (חֶסֶד): the loyal, covenant-keeping loving-kindness of God — steadfast love that persists beyond merit, mood, and time, and that obligates itself to act.",
    },
  },
  {
    badge: "Luke 10:25-37",
    title: "The Good Samaritan — Kindness That Crosses the Road",
    paragraphs: [
      "Jesus' most famous picture of kindness is a story told to a lawyer trying to shrink the word neighbor to a manageable size. A man lies half-dead on the Jericho road. A priest and a Levite — the religious professionals, the men most schooled in hesed — see him and pass by on the other side. The one who stops is a Samaritan, a religious and ethnic outsider whom the original audience would have despised. He is &ldquo;moved with compassion,&rdquo; and then the verbs pour out: he went to him, bandaged his wounds, poured on oil and wine, set him on his own animal, brought him to an inn, took care of him, paid the bill, and promised to return.",
      "Notice what the story refuses to let kindness be. It is not a feeling — the Samaritan's compassion immediately becomes logistics, first aid, transportation, money, and follow-up. It is not convenient — it interrupts his journey, costs his denarii, and risks his safety on a road famous for bandits. And it is not tribal — the whole scandal of the parable is that covenant kindness flows across the very boundary that religion had fortified. When Jesus asks which of the three was a neighbor, the lawyer cannot even say the word Samaritan; he answers, &ldquo;The one who showed him mercy.&rdquo; Go, says Jesus, and do likewise.",
      "Every act of Christian kindness is a small crossing of the road — a decision to let someone else's wound rearrange your itinerary. The priest and the Levite teach us that theological knowledge does not produce kindness. Only a heart moved with compassion, and willing to be inconvenienced by it, does.",
    ],
  },
  {
    badge: "Luke 6:35",
    title: "Kind to the Ungrateful and the Evil — Enemy-Kindness",
    paragraphs: [
      "&ldquo;Love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil&rdquo; (Luke 6:35). Here Jesus grounds the most difficult human behavior — kindness toward those who wrong us — in the character of God himself. The Father's kindness is not a response to merit; it is an overflow of his nature. He sends rain on the just and the unjust. He is kind, Jesus says flatly, to the ungrateful and the evil. To be his child is to bear the family resemblance.",
      "This is where Christian kindness parts company with reciprocity, the universal ethic of the ancient and modern world. Reciprocal kindness — being good to those who are good to us — requires no Holy Spirit; as Jesus notes, even sinners do that. The fruit of the Spirit is visible precisely where reciprocity breaks down: kindness to the coworker who undermined you, the family member who never thanks you, the stranger who can never repay you, the enemy who would not even want your help. Enemy-kindness is the laboratory in which the genuineness of the fruit is tested.",
      "Paul makes it tactical in Romans 12:20, quoting Proverbs: &ldquo;If your enemy is hungry, feed him; if he is thirsty, give him something to drink.&rdquo; Kindness becomes the church's strange weapon — not a strategy to win, but a refusal to let evil set the terms of the relationship. We overcome evil with good because that is how God overcame us.",
    ],
  },
  {
    badge: "Titus 3:4-5",
    title: "When the Kindness of God Appeared",
    paragraphs: [
      "Titus 3 contains one of the New Testament's most compressed gospel summaries, and its hinge is kindness: &ldquo;But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy.&rdquo; The Greek behind &ldquo;loving kindness&rdquo; is philanthropia — God's love for humanity — paired again with chrestotes. Paul's claim is staggering: the appearing of Jesus Christ in history is the appearing of kindness itself. Christmas is what the kindness of God looks like when it takes on a body.",
      "The context makes the verse even sharper. Paul has just told Titus to remind the Cretan believers &ldquo;to speak evil of no one, to avoid quarreling, to be gentle, and to show perfect courtesy toward all people. For we ourselves were once foolish, disobedient, led astray, slaves to various passions and pleasures, passing our days in malice and envy, hated by others and hating one another. But when the kindness of God appeared...&rdquo; The logic is explicit: we are kind to difficult people because we remember being difficult people whom God treated kindly. Christian kindness is memory in action.",
      "Ephesians 2:7 pushes the horizon out further still: God saved us &ldquo;so that in the coming ages he might show the immeasurable riches of his grace in kindness toward us in Christ Jesus.&rdquo; Kindness is not only how the story of salvation began; it is what eternity is for. The ages to come are an unending unveiling of the kindness of God.",
    ],
  },
  {
    badge: "Discernment",
    title: "Kindness vs. Niceness — Why They Are Not the Same",
    paragraphs: [
      "Niceness and kindness are frequently confused and fundamentally different. Niceness is a social lubricant; its goal is the absence of friction. It avoids hard conversations, softens truth past the point of usefulness, and is ultimately oriented toward the comfort of the nice person — being liked, avoiding conflict, keeping the peace at any cost. Kindness is oriented toward the actual good of the other person, and the actual good sometimes requires saying what is hard to hear. &ldquo;Faithful are the wounds of a friend; profuse are the kisses of an enemy&rdquo; (Proverbs 27:6).",
      "Jesus is the permanent proof that kindness can confront. The same Lord who would not break a bruised reed called Peter &ldquo;Satan&rdquo; when Peter stood between him and the cross, overturned tables in the temple, and told the rich young ruler the one thing he lacked — and Mark notes that Jesus looked at him and loved him before he said it. The confrontation was the kindness. Niceness would have let the young man walk away flattered and lost.",
      "The test that separates them is motive, which is why this page's journal asks you to check yours. Niceness asks: what will keep this comfortable for me? Kindness asks: what does love require for them? Sometimes love requires a casserole and silence. Sometimes it requires a truth spoken gently and at cost. The kind person is willing to be temporarily disliked for the sake of another's lasting good; the merely nice person, in the end, sacrifices the other's good on the altar of their own approval.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily Kindness Audit",
    summary:
      "One intentional act of kindness per day, planned in the morning and examined at night. Kindness rarely happens by accident in a hurried life; it must be premeditated.",
    steps: [
      "Each morning, before the day's momentum takes over, ask: who will cross my path today, and what would genuine kindness toward one of them look like? Name a person and a concrete act.",
      "Keep it small and real — a handwritten note, covering a coffee, a phone call to someone lonely, a sincere question asked and listened to. Chrestotes is usefulness, not grandeur.",
      "Each evening, run the audit: did the act happen? What resisted it — hurry, self-consciousness, irritation? Where did unplanned kindness also appear? Thank God for it.",
      "Record it in the Journal tab on this page. A month of entries will show you your patterns: who you find easy to love, who you avoid, and where the Spirit is stretching you.",
    ],
    anchor: "Colossians 3:12 — Put on then, as God's chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience.",
  },
  {
    number: "02",
    title: "Anonymous Generosity",
    summary:
      "Kindness with no credit — giving, serving, and blessing in ways that cannot be traced back to you, so the act stays clean of self-display.",
    steps: [
      "Once a week, do one act of kindness that no one can attribute to you: an anonymous gift toward a need, a bill quietly paid, a chore done before anyone notices, an encouraging note unsigned.",
      "Resist every workaround the ego invents — the hint dropped later, the story told as a humble anecdote. Jesus' instruction is surgical: do not let your left hand know what your right hand is doing (Matthew 6:3).",
      "Let the secrecy do its work in you. Anonymous kindness starves the part of us that is generous for applause and feeds the part that is becoming like the Father who sees in secret.",
      "When the act is invisible, pray for the person instead of telling anyone. Intercession is the only audience anonymous kindness needs.",
    ],
    anchor: "Matthew 6:3-4 — But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you.",
  },
  {
    number: "03",
    title: "Kindness to the Difficult Person",
    summary:
      "The enemy-love practice: deliberately directing concrete kindness toward the one person you would naturally avoid, criticize, or write off.",
    steps: [
      "Name the person honestly before God — the one whose name tightens your chest. Difficult relative, hostile coworker, the friend who wounded you. You cannot practice Luke 6:35 in the abstract.",
      "Begin with prayer, not performance. Pray for their genuine good — their health, their joy, their relationship with God — daily for a week before attempting anything. Prayer softens the soil.",
      "Choose one small, sincere act: a greeting you usually withhold, an honest compliment, help offered with no strings, a door held, a grudge left unmentioned. Expect nothing back; Luke 6:35 says lend expecting nothing in return.",
      "When bitterness resurges — it will — return to Titus 3: remember the kindness God showed you when you were the difficult one. Enemy-kindness is sustained by memory, not by feelings.",
    ],
    anchor: "Luke 6:35 — Love your enemies, and do good... and you will be sons of the Most High, for he is kind to the ungrateful and the evil.",
  },
  {
    number: "04",
    title: "Words of Life",
    summary:
      "Speaking specific, true encouragement — kindness in its verbal form. Generic praise bounces off; specific encouragement lands and stays for years.",
    steps: [
      "Once a day, tell one person one specific true thing you see in them: not &ldquo;you're great&rdquo; but &ldquo;the patience you showed in that meeting changed the whole room.&rdquo; Specificity is what makes encouragement believable.",
      "Encourage character over performance where you can. Praising what someone did is good; naming who they are becoming — &ldquo;you have become someone people trust with hard news&rdquo; — is formative.",
      "Put it in writing weekly. A short note or message becomes a permanent artifact of kindness; people keep these for decades. Ephesians 4:29 sets the filter: only what is good for building up, as fits the occasion, that it may give grace to those who hear.",
      "Practice the harder half: encourage people who cannot advance your interests, and encourage rivals. Words of life given where they win you nothing are words most like God's.",
    ],
    anchor: "Proverbs 16:24 — Gracious words are like a honeycomb, sweetness to the soul and health to the body.",
  },
  {
    number: "05",
    title: "Hospitality on Purpose",
    summary:
      "The open table — using your home, your food, and your unhurried time as instruments of kindness to neighbors, strangers, and the lonely.",
    steps: [
      "Set a fixed rhythm — one meal a week or every other week — and protect it like an appointment. Hospitality that waits for a free evening never happens; the open table is scheduled kindness.",
      "Invite beyond reciprocity, as Luke 14 commands: not only friends who will invite you back, but the new family at church, the international student, the recently divorced coworker, the neighbor whose name you barely know.",
      "Lower the bar on the production and raise it on the welcome. Soup and bread with full attention is kindness; a gourmet performance that exhausts you is entertainment. The guest needs your presence, not your perfection.",
      "Let the table do slow work. Rosaria Butterfield calls this radically ordinary hospitality — the gospel moving across a dinner table at the speed of trust, week after ordinary week.",
    ],
    anchor: "Hebrews 13:2 — Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.",
  },
  {
    number: "06",
    title: "Institutional Kindness",
    summary:
      "Bringing kindness into work culture — moving the fruit of the Spirit from private life into systems, meetings, policies, and the way power is used.",
    steps: [
      "Audit your influence: wherever you have any authority — a team, a classroom, a schedule, a budget — ask what it would mean for that structure itself to be kind. Deadlines, feedback, onboarding, and exits can all be done with chrestotes or without it.",
      "Practice kindness in the micro-moments of work: crediting the person whose idea it actually was, defending the absent colleague when the conversation turns, giving hard feedback privately and praise publicly.",
      "Refuse the culture of contempt. Sarcasm about clients, mockery of competitors, and disdain for the difficult department are the institutional opposites of kindness; opt out visibly and without self-righteousness.",
      "Champion the unseen: learn the names of the cleaning staff, the security guard, the newest hire. Institutional kindness flows downhill by design — direct it toward the people the org chart overlooks.",
    ],
    anchor: "Ephesians 4:32 — Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Mother Teresa",
    role: "Kindness in Action Among the Dying — Calcutta, 1950-1997",
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier. Be the living expression of God's kindness: kindness in your face, kindness in your eyes, kindness in your smile.",
    bio: "For nearly five decades Mother Teresa and the Missionaries of Charity practiced kindness at its most elemental — washing the bodies of the dying poor pulled from Calcutta's gutters, so that people who had lived unwanted would die knowing they were loved. Her genius was the refusal of abstraction: she insisted that love is not a sentiment about humanity but an act toward the one person in front of you. &ldquo;Never worry about numbers,&rdquo; she said. &ldquo;Help one person at a time, and always start with the person nearest you.&rdquo; Her witness reframes kindness as vocation: small things done with great love, repeated until they remake a life — and a city's conscience.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "Life Together — Bearing With One Another",
    quote:
      "The first service that one owes to others in the fellowship consists in listening to them. Just as love to God begins with listening to His Word, so the beginning of love for the brethren is learning to listen to them.",
    bio: "Writing from the illegal seminary at Finkenwalde under the shadow of the Third Reich, Bonhoeffer's Life Together describes Christian community as a school of daily kindness: the ministry of holding one's tongue, the ministry of meekness, the ministry of listening, the ministry of helpfulness, the ministry of bearing. For Bonhoeffer, bearing with one another (Galatians 6:2) is not tolerating people but carrying them — their weaknesses, their oddities, their sins — as Christ carried us. He warned that those who love their dream of community more than the community itself destroy it; kindness begins when we accept the real, disappointing brother God actually gave us, and serve him.",
  },
  {
    name: "Corrie ten Boom",
    role: "Kindness to Her Captors — The Hiding Place",
    quote:
      "Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart. When He tells us to love our enemies, He gives, along with the command, the love itself.",
    bio: "Corrie ten Boom survived Ravensbrueck after her family hid Jews from the Nazis; her sister Betsie died there. In 1947, after speaking on forgiveness in Munich, she came face to face with one of the cruelest guards from the camp — now asking her, hand outstretched, to forgive him. She recounts that no kindness was in her heart at all; she prayed, &ldquo;Jesus, I can lift my hand. I can do that much. You supply the feeling.&rdquo; As their hands met, she said, a warmth flooded her arm that was not her own. Her story is the great modern case study in Luke 6:35: kindness to the enemy is not manufactured by temperament but supplied by God to a will that obeys first.",
  },
  {
    name: "Barry Corey",
    role: "Love Kindness — The Revolutionary Power of Receivable Love",
    quote:
      "Kindness is the way of firm centers and soft edges. Aggression has a firm center and hard edges. Niceness has soft edges and a spongy center. Kindness is neither weak nor wavering; it is conviction wrapped in warmth.",
    bio: "Barry Corey, president of Biola University, argues in Love Kindness that the church's public witness has too often chosen between aggression (truth without warmth) and niceness (warmth without truth) — and that both fail. His alternative is receivable love: kindness sturdy enough to hold convictions and soft enough that actual people can receive them. Drawing on Micah 6:8's command to love kindness, Corey insists kindness is not a tactic for cultural approval but a long obedience — eating with those who differ, listening without rehearsing rebuttals, letting hospitality go where arguments cannot. Kindness, he writes, is the revolution that looks like weakness and outlasts every empire of outrage.",
  },
  {
    name: "Brennan Manning",
    role: "The Relentless Tenderness of Jesus",
    quote:
      "Jesus comes for sinners, for those as outcast as tax collectors and for those caught up in squalid choices and failed dreams. He comes for corporate executives, street people, superstars, farmers, hookers, addicts, IRS agents, AIDS victims, and even used-car salesmen. Jesus not only talks with these people but dines with them — fully aware that His table fellowship with sinners will raise the eyebrows of religious bureaucrats.",
    bio: "Brennan Manning — Franciscan priest, recovering alcoholic, author of The Ragamuffin Gospel and The Relentless Tenderness of Jesus — spent his life on a single theme: the furious, tender kindness of God toward failures. He insisted that the deepest heresy in the church is not doctrinal error but the quiet conviction that God is basically disappointed in us. Against it he preached Romans 2:4 with abandon: it is kindness, not contempt, that leads to repentance. Manning's witness carries the authority of the wreckage it survived; he wrote as a man who had been treated tenderly at his worst, and who therefore could not speak of God any other way.",
  },
  {
    name: "Rosaria Butterfield",
    role: "The Gospel Comes with a House Key — Radically Ordinary Hospitality",
    quote:
      "Radically ordinary hospitality is this: using your Christian home in a daily way that seeks to make strangers neighbors, and neighbors family of God. It brings glory to God, serves others, and lives out the gospel in word and deed.",
    bio: "Rosaria Butterfield's own conversion began with kindness: a pastor and his wife who hosted her — then a professor hostile to Christianity — for two years of dinners with no agenda and no tract. The Gospel Comes with a House Key turns that experience into a practice: the perpetually open table, the extra chairs, the soup that stretches, neighbors who know the door is unlocked to them. She is blunt that this kindness is costly — it spends money, privacy, evenings, and emotional reserves — and that the cost is the point. Hospitality, for Butterfield, is daily, ordinary, and radical all at once: the front line where the kindness of God becomes something a stranger can taste.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    reflection:
      "Kindness sits in the center of the ninefold fruit — not an elective virtue for the naturally warm, but the standard produce of the Spirit's indwelling. Note that it is fruit, not works: it grows from abiding in Christ, not from moral effort alone. The question the verse poses is agricultural, not athletic — not &ldquo;am I trying hard enough?&rdquo; but &ldquo;am I rooted where kindness grows?&rdquo;",
  },
  {
    reference: "Romans 2:4",
    text: "Or do you presume on the riches of his kindness and forbearance and patience, not knowing that God's kindness is meant to lead you to repentance?",
    reflection:
      "God's kindness has a trajectory: it leads somewhere, and its destination is repentance. To presume on kindness is to enjoy the gift while ignoring the direction it points. The verse also quietly defines riches — God's wealth is measured here not in power but in kindness, forbearance, and patience, lavished on people still facing the wrong way.",
  },
  {
    reference: "Ephesians 4:32",
    text: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    reflection:
      "The grammar carries the gospel: be kind as God in Christ forgave you. Christian kindness is derivative — we extend what we have received, at the scale we received it. The verse pairs kindness with tenderheartedness and forgiveness because they live or die together; a heart hardened by an unforgiven grievance cannot produce soft acts.",
  },
  {
    reference: "Luke 6:35",
    text: "But love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil.",
    reflection:
      "Three commands — love, do good, lend — with one shocking rationale: family resemblance. God is kind to the ungrateful and the evil, and his children are recognizable by the same indiscriminate kindness. The phrase &ldquo;expecting nothing in return&rdquo; deletes the ledger entirely; kindness that keeps accounts is commerce.",
  },
  {
    reference: "Titus 3:4-7",
    text: "But when the goodness and loving kindness of God our Savior appeared, he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit, whom he poured out on us richly through Jesus Christ our Savior, so that being justified by his grace we might become heirs according to the hope of eternal life.",
    reflection:
      "The incarnation described as an appearing of kindness. Everything in salvation's chain — mercy, washing, renewal, justification, inheritance — unspools from the moment God's kindness showed up in person. Paul places this directly after a description of our former malice and envy: the kindness appeared precisely to the unkind.",
  },
  {
    reference: "Micah 6:8",
    text: "He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?",
    reflection:
      "The word is hesed — covenant loving-kindness — and the command is to love it, not merely perform it. Justice is done; kindness is loved; humility is walked. Micah compresses the whole religious life into three postures, and the middle one asks for our affections: that mercy would become not our duty but our delight.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "O7CMQ0sRZ1Y", title: "The Fruit of Kindness - Galatians 5" },
  { videoId: "Hcr3z3KQolc", title: "Romans 2:4 - God's Kindness Leads to Repentance" },
  { videoId: "x0OkTpDtbBo", title: "Hesed: The Loving-Kindness of God" },
  { videoId: "kJgUtJbufNQ", title: "Rosaria Butterfield: Radically Ordinary Hospitality" },
  { videoId: "3S0wrtZ0EkE", title: "Kindness as Evangelism" },
  { videoId: "2pXBcvJyhKs", title: "Ephesians 4:32 - Be Kind to One Another" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianKindnessPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<KNDEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [person, setPerson] = useState("");
  const [act, setAct] = useState("");
  const [motive, setMotive] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as KNDEntry[]);
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
    if (!person.trim() || !act.trim()) return;
    const entry: KNDEntry = {
      person: person.trim(),
      act: act.trim(),
      motive: motive.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPerson("");
    setAct("");
    setMotive("");
  }

  function deleteEntry(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? AMBER : BORDER}`,
    background: active ? "rgba(245, 158, 11, 0.12)" : "transparent",
    color: active ? AMBER : MUTED,
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
    color: AMBER,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <Navbar />

        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: AMBER,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Fruit of the Spirit
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              The Kindness of God: Living the Fruit of Kindness
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Kindness is the most underestimated word in Galatians 5. The Greek calls it{" "}
              <em style={{ color: TEXT }}>chrestotes</em> — usefulness-in-love, goodness that
              actually does something. The Old Testament sings it as{" "}
              <em style={{ color: TEXT }}>hesed</em> — the covenant loving-kindness of God. Paul
              says it is God&rsquo;s kindness, not his severity, that leads us to repentance. This
              guide explores the theology of kindness, the people who embodied it, the Scriptures
              that command it, and the daily practices that grow it.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${AMBER}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Do you presume on the riches of his kindness and forbearance and patience,
                not knowing that God&rsquo;s kindness is meant to lead you to repentance?&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>Romans 2:4</p>
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
                Before kindness is a practice it is a doctrine — something true about God before it
                is anything required of us. These seven studies trace kindness from the vocabulary
                of Paul and the Psalms to the road to Jericho and the appearing of Christ.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: AMBER,
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
                        background: "rgba(245, 158, 11, 0.07)",
                        border: `1px solid rgba(245, 158, 11, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span style={{ color: AMBER, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Chrestotes, hesed, the Samaritan&rsquo;s road, the Father&rsquo;s rain on the
                  unjust, the appearing of kindness in Titus — these are not six topics but one. The
                  God whose covenant love would not quit Israel is the God whose kindness took flesh
                  in Christ, and the Spirit of that God now grows the same quality in ordinary
                  people. Kindness is therefore the most public of the fruit: the world cannot see
                  your peace or your joy directly, but it tastes your kindness every day. Explore
                  the rest of the ninefold fruit in our{" "}
                  <Link href="/fruit-of-the-spirit" style={{ color: AMBER, textDecoration: "underline" }}>
                    Fruit of the Spirit guide
                  </Link>
                  , or go deeper on the open table in{" "}
                  <Link href="/christian-hospitality" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Hospitality
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
                Fruit grows, but orchards are still tended. These six practices are trellises for
                kindness — ordinary structures that give the Spirit&rsquo;s work somewhere to climb.
                Start with one. The Journal tab on this page is built to accompany practice one.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: AMBER,
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
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about motive
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Every one of these practices can be hijacked by the self it is meant to shrink —
                  kindness performed for reputation, generosity that secretly keeps score,
                  hospitality as image management. That is why the journal below asks three
                  questions, and the third is about your heart. Do the act anyway, even when the
                  motive is mixed; motives are purified in motion, not in advance. But keep checking.
                  The goal is not to look like the Good Samaritan. It is to become the kind of
                  person who crosses the road without thinking twice.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Kindness is best learned by watching it. Six witnesses — across centuries, continents,
                and circumstances from Calcutta&rsquo;s streets to a concentration camp — show what
                the fruit looks like when it is fully grown.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: AMBER,
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
                      background: "rgba(245, 158, 11, 0.06)",
                      borderLeft: `3px solid ${AMBER}`,
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
                Six passages to read slowly, memorize, and pray. Each pairs the text with a short
                reflection. Consider taking one per week and letting it ride along on the daily
                kindness audit.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, you are
                  kind to the ungrateful — you were kind to me&rdquo;), confession (&ldquo;I have
                  been nice where you called me to be kind, and cold where you called me to be
                  warm&rdquo;), and petition (&ldquo;grow chrestotes in me today, toward the person I
                  least expect&rdquo;). Scripture memorized without prayer informs; Scripture prayed
                  transforms.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The daily kindness audit lives here. Three questions: who needs kindness today, what
                specific act will you do, and — the honest one — what is your motive? Entries are
                saved privately in your browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s kindness entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="knd-person" style={labelStyle}>
                    Who needs kindness today?
                  </label>
                  <input
                    id="knd-person"
                    type="text"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    placeholder="A name — coworker, neighbor, family member, stranger on your route"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="knd-act" style={labelStyle}>
                    The specific act of kindness
                  </label>
                  <textarea
                    id="knd-act"
                    value={act}
                    onChange={(e) => setAct(e.target.value)}
                    placeholder="Concrete and small beats vague and grand: a note, a meal, a call, a bill covered, a hard task taken off their plate"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="knd-motive" style={labelStyle}>
                    Checking the heart motive
                  </label>
                  <textarea
                    id="knd-motive"
                    value={motive}
                    onChange={(e) => setMotive(e.target.value)}
                    placeholder="Honest answer: love for them, or credit for me? Mixed is normal — name it and do the act anyway"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!person.trim() || !act.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !person.trim() || !act.trim() ? BORDER : AMBER,
                    color: !person.trim() || !act.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !person.trim() || !act.trim() ? "not-allowed" : "pointer",
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
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal…</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name one person, one act, and one honest motive — then go do it. The audit
                      starts working on day one.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry, index) => (
                      <article key={`${entry.person}-${index}`} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: AMBER }}>
                            {entry.person}
                          </h3>
                          <button
                            type="button"
                            onClick={() => deleteEntry(index)}
                            aria-label={`Delete entry for ${entry.person}`}
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
                        <div style={{ marginBottom: entry.motive ? 10 : 0 }}>
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
                            The act
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>{entry.act}</p>
                        </div>
                        {entry.motive && (
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
                              Heart check
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.motive}
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
                Teaching to watch slowly — on chrestotes, hesed, the kindness that leads to
                repentance, and the open table. Good companions to the Theology and Practices tabs.
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
              Kindness as evangelism
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              If God&rsquo;s kindness leads to repentance, then our kindness is never merely
              social — it is sacramental, a visible sign through which people taste an invisible
              grace. Most people who come to faith are not argued in; they are loved in. The meal,
              the patience, the help with the move, the years of unreturned warmth — these are the
              ordinary roads the Spirit walks. Be kind on purpose, and watch what God does with it.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the full{" "}
              <Link href="/fruit-of-the-spirit" style={{ color: AMBER, textDecoration: "underline" }}>
                Fruit of the Spirit
              </Link>
              , practice the open table with{" "}
              <Link href="/christian-hospitality" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Hospitality
              </Link>
              , give generously with{" "}
              <Link href="/christian-generosity" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Generosity
              </Link>
              , or share your faith through the{" "}
              <Link href="/evangelism" style={{ color: AMBER, textDecoration: "underline" }}>
                Evangelism guide
              </Link>
              .
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
