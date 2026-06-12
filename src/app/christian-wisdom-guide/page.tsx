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

const STORAGE_KEY = "vine_christianwisdom_entries";

interface WSDEntry {
  id: string;
  date: string;
  theDecision: string;
  theWisdomSought: string;
  theCounsel: string;
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
    badge: "Chokmah — The Hebrew Vision of Wisdom",
    title: "Chokmah: Wisdom as Skill for Living",
    paragraphs: [
      "The Hebrew word for wisdom, chokmah, does not primarily mean intellectual brilliance or accumulated information. Its root sense is skill &mdash; the same word describes the craftsmen who built the tabernacle (Exod 31:3), the sailors who navigate the sea (Ps 107:27), and the artisans who weave fine cloth. Chokmah is competence applied to a medium. When the wisdom literature applies the word to life itself, the claim is breathtaking: living is a craft, and there is such a thing as doing it skillfully or doing it badly. Wisdom is skill in the medium of everyday existence &mdash; in speech, money, friendship, work, anger, time, and desire.",
      "This means biblical wisdom is irreducibly practical. Proverbs is not embarrassed to talk about table manners, business ethics, the timing of a word, the danger of cosigning a loan, and the folly of answering before listening. The sages did not consider these topics beneath theology; they considered them the very arena in which the fear of the LORD becomes visible. A person&rsquo;s theology is finally legible not in what they claim to believe but in how they handle a Tuesday afternoon &mdash; an irritating colleague, an unexpected windfall, a chance to shade the truth.",
      "Because wisdom is a skill, it is acquired the way skills are acquired: slowly, through instruction, imitation, practice, correction, and time. No one becomes a skilled carpenter by reading about carpentry, and no one becomes wise by collecting wise sayings. The wisdom literature assumes apprenticeship &mdash; the father instructing the son, the sage instructing the student, the community handing down its tested observations. Wisdom is caught and practiced as much as it is taught, which is why the wisdom books keep insisting on companionship: &ldquo;Whoever walks with the wise becomes wise&rdquo; (Prov 13:20).",
    ],
    callout: {
      label: "The core claim",
      text: "Chokmah means skill &mdash; the word used for craftsmen, sailors, and weavers. Biblical wisdom is skill in the craft of living, acquired like any skill: through instruction, imitation, practice, and time in the company of the wise.",
    },
  },
  {
    badge: "Proverbs 9:10 — The Beginning",
    title: "The Fear of the LORD Is the Beginning of Wisdom",
    paragraphs: [
      "&ldquo;The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight&rdquo; (Prov 9:10). This is the motto of the entire wisdom tradition, stated at the front of Proverbs (1:7) and repeated at its hinge points. The fear of the LORD is not terror; it is the reverent, realistic recognition that God is God and you are not &mdash; that the world has a Maker, that its moral grain is not negotiable, and that you live every moment in his presence. It is the orientation of a creature who has stopped pretending to be the center of reality.",
      "The word &ldquo;beginning&rdquo; (reshit) carries two senses, and both are intended. It means the starting point: you cannot get wisdom from any other door. The person who tries to become skillful at living while ignoring the One who designed life is like a navigator who refuses to acknowledge the existence of stars. But reshit also means the first principle, the controlling foundation &mdash; not merely lesson one, which is left behind, but the keynote that governs every subsequent lesson. The fear of the LORD is not wisdom&rsquo;s on-ramp; it is wisdom&rsquo;s atmosphere.",
      "This is what distinguishes biblical wisdom from every self-help program. Self-help begins with the self: its desires, its goals, its optimization. Biblical wisdom begins with God: his character, his design, his ordering of the world. The practical instructions may sometimes overlap &mdash; both traditions commend diligence, prudence, and self-control &mdash; but the foundations are opposite. One builds skill in living for the sovereign self; the other builds skill in living before the face of God. Only the second, the sages insist, is actually in touch with reality.",
    ],
    callout: {
      label: "Reshit — beginning",
      text: "The fear of the LORD is both the starting point of wisdom (no other entrance exists) and its first principle (the keynote that governs everything after). It is not lesson one to be outgrown but the atmosphere in which all wisdom lives.",
    },
  },
  {
    badge: "Proverbs 8 — Lady Wisdom",
    title: "Lady Wisdom: Present at the Creation, Calling in the Streets",
    paragraphs: [
      "In Proverbs 8, wisdom is personified as a woman who stands at the crossroads and the city gates &mdash; the busiest, most public places in ancient life &mdash; and calls out to everyone who passes: &ldquo;To you, O men, I call, and my cry is to the children of man&rdquo; (Prov 8:4). The personification is deliberate and profound. Wisdom is not an esoteric secret hidden for the initiated; she is a public crier, urgently available, pleading to be heard in the marketplace, the courtroom, and the intersection. The tragedy of folly is not that wisdom was inaccessible but that it was shouted in the streets and refused.",
      "The chapter then makes its most astonishing move: Lady Wisdom claims to have been present at creation. &ldquo;The LORD possessed me at the beginning of his work, the first of his acts of old&hellip; When he established the heavens, I was there&hellip; then I was beside him, like a master workman, and I was daily his delight, rejoicing before him always, rejoicing in his inhabited world and delighting in the children of man&rdquo; (Prov 8:22-31). Wisdom is woven into the fabric of the world itself. The same ordering intelligence by which God made the heavens is the intelligence offered to the young person deciding how to speak, spend, and live. To live wisely is to live with the grain of creation; to live foolishly is to live against it &mdash; and the grain always wins.",
      "Note the emotional register of the passage: delight. Wisdom at creation is not a stern engineer but a rejoicing artisan &mdash; &ldquo;daily his delight, rejoicing before him always.&rdquo; The wise life, the passage implies, is not the grim life but the glad one: the life that has found the rhythms it was made for. And the chapter closes with the stakes stated plainly: &ldquo;Whoever finds me finds life and obtains favor from the LORD, but he who fails to find me injures himself; all who hate me love death&rdquo; (Prov 8:35-36). Wisdom is not an elective. It is a matter of life and death, offered freely in the street.",
    ],
    callout: {
      label: "Wisdom&rsquo;s two locations",
      text: "Lady Wisdom stands at the city gates calling to everyone &mdash; and she stood beside God at creation, rejoicing. The wisdom offered publicly to any passerby is the same wisdom by which the world was made. To find her is to find life.",
    },
  },
  {
    badge: "1 Kings 3 — Solomon&rsquo;s Request",
    title: "An Understanding Heart: Solomon Asks for Wisdom",
    paragraphs: [
      "At Gibeon, God appears to the young king Solomon in a dream and makes an offer without precedent: &ldquo;Ask what I shall give you&rdquo; (1 Kings 3:5). Solomon&rsquo;s answer begins with honest self-assessment: &ldquo;I am but a little child. I do not know how to go out or come in&hellip; Give your servant therefore an understanding heart to govern your people, that I may discern between good and evil&rdquo; (1 Kings 3:7-9). The Hebrew phrase is literally a &ldquo;hearing heart&rdquo; (lev shomea) &mdash; a heart that listens. Solomon does not ask for information or power; he asks for receptivity, the capacity to hear what is actually there and discern rightly.",
      "The narrative emphasizes that the request itself was the evidence of wisdom already beginning. &ldquo;It pleased the Lord that Solomon had asked this&rdquo; (3:10) &mdash; because he had not asked for long life, riches, or victory over enemies, God grants the wisdom and adds the rest unasked. The shape of the prayer reveals the shape of the heart: what you would ask for, if you could ask for anything, is the most precise diagnostic of what you actually worship. Solomon, at this moment, wanted to serve well more than he wanted to be served &mdash; and that ordering of desire is itself the threshold of wisdom.",
      "The story is also a warning, because Solomon&rsquo;s ending does not match his beginning. The man who asked for a hearing heart eventually stopped listening &mdash; accumulating wives, wealth, and alliances against the explicit instruction of Deuteronomy 17, until &ldquo;his heart was not wholly true to the LORD his God&rdquo; (1 Kings 11:4). Wisdom granted is not wisdom guaranteed. The gift must be kept by continued fear of the LORD, continued listening, continued dependence. The wisest man in the ancient world became a cautionary tale, and the wisdom literature he fathered preserves the warning for everyone after him.",
    ],
    callout: {
      label: "Lev shomea",
      text: "Solomon asked for a &ldquo;hearing heart&rdquo; &mdash; not information or power but receptivity. The request itself was the beginning of wisdom. And his later drift is the standing warning: wisdom granted is not wisdom guaranteed.",
    },
  },
  {
    badge: "1 Corinthians 1:24, 30 — Wisdom Incarnate",
    title: "Christ, the Wisdom of God",
    paragraphs: [
      "Paul makes the claim that gathers the whole wisdom tradition to a point: &ldquo;to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God&rdquo; (1 Cor 1:24); and again, &ldquo;because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption&rdquo; (1 Cor 1:30). Wisdom, in the end, is not a principle but a person. The skill for living that Proverbs commends, the ordering intelligence present at creation in Proverbs 8, the hearing heart Solomon requested &mdash; all of it is embodied, finally and fully, in Jesus of Nazareth.",
      "The New Testament presses the Proverbs 8 imagery directly onto Christ. &ldquo;All things were made through him&rdquo; (John 1:3); &ldquo;by him all things were created&hellip; and in him all things hold together&rdquo; (Col 1:16-17); &ldquo;in whom are hidden all the treasures of wisdom and knowledge&rdquo; (Col 2:3). The one who was beside the Father at creation, the master workman delighting in the inhabited world, has entered the world he made. This is why the Gospels present Jesus as the sage greater than Solomon (Matt 12:42) &mdash; teaching in proverbs and parables, astonishing the crowds, answering questions with questions, embodying perfectly the life that Proverbs sketches.",
      "The practical consequence is enormous: to grow in wisdom is to grow in Christ. The pursuit of wisdom is not finally the mastery of a literature but apprenticeship to a living person &mdash; watching how Jesus handles interruption, conflict, money, power, suffering, and people, and being conformed to that pattern by the Spirit. Wisdom for the Christian is christological before it is practical: you do not first learn principles and then admire Jesus as their best illustration; you abide in the one who is wisdom, and the skill for living grows out of the union.",
    ],
    callout: {
      label: "Wisdom is a person",
      text: "&ldquo;Christ&hellip; the wisdom of God&rdquo; (1 Cor 1:24). The skill for living commended by Proverbs is embodied in Jesus. Growing in wisdom is therefore apprenticeship to a living person, not mastery of a literature.",
    },
  },
  {
    badge: "James 1:5 — Ask",
    title: "If Anyone Lacks Wisdom, Let Him Ask God",
    paragraphs: [
      "&ldquo;If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him&rdquo; (James 1:5). James &mdash; the most proverb-like book in the New Testament, sometimes called the Proverbs of the new covenant &mdash; locates the acquisition of wisdom first in prayer. Before the practices, before the counsel, before the study, there is the asking. Wisdom is a gift before it is an achievement, and the giver is described with two remarkable qualifiers: he gives generously (haplos &mdash; single-mindedly, without calculation) and without reproach &mdash; without the demeaning reminder of how often you have had to ask before.",
      "The context matters: James 1:5 sits inside a passage about trials. &ldquo;Count it all joy, my brothers, when you meet trials of various kinds&hellip; If any of you lacks wisdom, let him ask&rdquo; (1:2-5). The wisdom in view is not abstract; it is the wisdom to interpret and navigate suffering &mdash; to see the trial as the testing that produces steadfastness rather than as meaningless chaos. This is wisdom at its most needed and least available: in the middle of the storm, when your own judgment is most clouded, God invites the asking and promises the giving.",
      "James immediately adds the condition that is really a description: &ldquo;But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind&hellip; a double-minded man, unstable in all his ways&rdquo; (1:6-8). The issue is not that God refuses imperfect prayers; it is that wisdom cannot land in a heart that has not decided whose voice it will trust. The double-minded person asks God for direction while reserving the right to overrule the answer. Wisdom requires a prior surrender: the resolve, before the answer comes, to do whatever it turns out to be.",
    ],
    callout: {
      label: "The generous giver",
      text: "God gives wisdom generously and without reproach &mdash; no calculation, no shaming for asking again. But the asking requires single-mindedness: the resolve to obey the answer before you know what it is.",
    },
  },
  {
    badge: "Distinctions — Knowing and Living",
    title: "Wisdom, Knowledge, and Intelligence Are Not the Same Thing",
    paragraphs: [
      "The wisdom tradition forces a set of distinctions that modern culture habitually collapses. Knowledge is the possession of true information: facts, data, content. Intelligence is the capacity to process information: speed, analysis, pattern recognition. Wisdom is something else &mdash; the capacity to live well with whatever knowledge and intelligence you have: to discern what matters, to act rightly under uncertainty, to know what a moment requires. The three are related but radically independent. A person can be brilliant and informed and a catastrophe at living; Scripture and ordinary experience supply abundant examples.",
      "The fool of Proverbs is rarely stupid. The sluggard can analyze why the road is dangerous (&ldquo;There is a lion outside!&rdquo; Prov 22:13); the scoffer is often the cleverest voice in the room; the adulterer can calculate the husband&rsquo;s travel schedule (Prov 7:19-20). Folly in the Bible is not an intellectual deficiency but a moral and directional one: the fool has the data and refuses its implications, because his desires are disordered. &ldquo;The fool says in his heart, &lsquo;There is no God&rsquo;&rdquo; (Ps 14:1) &mdash; says it in his heart, the seat of desire and direction, whatever his head may concede.",
      "This is why information abundance has not produced a wisdom abundance. We carry in our pockets more knowledge than any generation in history and exhibit no corresponding gain in skill at living &mdash; arguably the reverse, as the flood of information outpaces the formation of judgment. Wisdom does not scale with bandwidth. It grows in the old, slow soil: the fear of the LORD, long obedience, suffered experience, trusted counsel, and the unhurried meditation that turns knowledge into discernment. The wisdom literature would not be surprised by the information age; it would simply repeat its oldest distinction &mdash; that knowing much and living well are different crafts.",
    ],
    callout: {
      label: "The distinction",
      text: "Knowledge is information possessed; intelligence is information processed; wisdom is life rightly lived. The fool of Proverbs is rarely stupid &mdash; his problem is directional, not intellectual. Information abundance does not produce wisdom.",
    },
  },
  {
    badge: "1 Corinthians 1:18-25 — The Cross",
    title: "The Wisdom of the Cross: Foolishness to the World",
    paragraphs: [
      "&ldquo;For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God&hellip; For the foolishness of God is wiser than men, and the weakness of God is stronger than men&rdquo; (1 Cor 1:18, 25). Paul, writing to a church infatuated with rhetorical brilliance and status, declares that God&rsquo;s definitive act of wisdom looks, by every worldly canon, like the definitive act of folly: a crucified Messiah. Jews demand signs of power; Greeks seek sophisticated wisdom; God answers both with an executed carpenter &mdash; &ldquo;a stumbling block to Jews and folly to Gentiles&rdquo; (1:23).",
      "The cross is not merely an exception to worldly wisdom; it is its exposure. Worldly wisdom assumes that the way up is up &mdash; accumulate power, protect status, leverage strength, avoid shame. The cross reveals a God whose way up is down: power perfected in weakness, victory won through surrender, glory hidden in shame, life produced by death. This is not irrationality but a deeper rationality &mdash; the actual grain of the universe, which the world&rsquo;s wisdom systematically misreads because it cannot imagine love that spends itself. &ldquo;God chose what is foolish in the world to shame the wise&rdquo; (1:27).",
      "For the believer, this cruciform wisdom restructures everything Proverbs taught without canceling it. Diligence, prudence, and discretion remain skills for living &mdash; but they are now apprenticed to a master whose wisdom led him to a cross. Christian wisdom will therefore sometimes look foolish: forgiving the unforgivable, giving past the point of prudence, telling the truth at the cost of the career, choosing fidelity over advantage. The cross is the standing reminder that the wisest act in history was scorned by every wise observer present &mdash; and that the disciple should expect, at times, the same accounting.",
    ],
    callout: {
      label: "Cruciform wisdom",
      text: "The cross exposes worldly wisdom: God&rsquo;s way up is down. Power perfected in weakness, life through death. Christian wisdom will therefore sometimes look like foolishness &mdash; and the cross is the proof that it is not.",
    },
  },
  {
    badge: "Ecclesiastes — Wisdom&rsquo;s Limits",
    title: "Under the Sun: Ecclesiastes and the Limits of Wisdom",
    paragraphs: [
      "Ecclesiastes is the wisdom tradition&rsquo;s own internal critique &mdash; wisdom literature about the limits of wisdom. Qoheleth, the Preacher, has run the full experiment: pleasure, projects, wealth, learning, legacy. His verdict is the book&rsquo;s famous refrain: hevel &mdash; vapor, breath, mist &mdash; usually translated &ldquo;vanity.&rdquo; &ldquo;Vanity of vanities! All is vanity&rdquo; (Eccl 1:2). Even wisdom itself falls under the verdict: &ldquo;the wise dies just like the fool&rdquo; (2:16). Wisdom is better than folly &ldquo;as light is better than darkness&rdquo; (2:13) &mdash; and yet it cannot stop death, cannot guarantee outcomes, cannot decode the full pattern of God&rsquo;s work &ldquo;under the sun.&rdquo;",
      "This is not cynicism; it is honesty, canonized. The wisdom tradition refuses to oversell itself. Proverbs describes the way the world normally runs &mdash; diligence usually prospers, folly usually destroys &mdash; but Ecclesiastes (with Job beside it) records the remainder: the righteous who perish in their righteousness, the wicked who flourish, the time and chance that happen to all (Eccl 9:11). A wisdom that promised mastery over life would be a lie, and the canon will not tell it. The wise person holds both books: live skillfully, and hold the outcomes with open hands, because the world is vapor and you are not its manager.",
      "Ecclesiastes ends where Proverbs begins: &ldquo;The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man&rdquo; (Eccl 12:13). Having toured every limit, Qoheleth lands on the same foundation &mdash; the fear of the LORD &mdash; but now stripped of any illusion that wisdom is a technique for controlling life. What remains is humbler and sturdier: receive your bread, your work, and your beloved as gifts from God&rsquo;s hand (2:24-25; 9:7-9); do what is in front of you with your might (9:10); and trust the Judge with the pattern you cannot see (12:14). Wisdom&rsquo;s last lesson is the surrender of wisdom&rsquo;s pretensions.",
    ],
    callout: {
      label: "Hevel — vapor",
      text: "Ecclesiastes is wisdom&rsquo;s own critique of wisdom: it cannot stop death, guarantee outcomes, or decode God&rsquo;s full pattern. Live skillfully &mdash; and hold the outcomes with open hands. Fear God; the rest is vapor.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The James 1:5 Prayer &mdash; Asking Before Analyzing",
    summary:
      "A simple discipline of asking God for wisdom before engaging your own analysis of a decision, in obedience to James 1:5. The order matters: prayer first establishes that wisdom is a gift received, not merely a conclusion produced.",
    steps: [
      "When a decision or confusing situation presents itself, resist the immediate impulse to analyze, research, or poll your friends. First, stop and ask. Pray James 1:5 explicitly: &ldquo;Lord, I lack wisdom for this. You give generously and without reproach. I am asking.&rdquo;",
      "Name the decision precisely before God. Not &ldquo;help me with life&rdquo; but the specific fork: the job, the conversation, the purchase, the relationship, the timing. Wisdom is always wisdom about something; vague requests produce vague discernment.",
      "Make the prior surrender James requires: tell God, honestly, that you intend to do whatever the answer turns out to be &mdash; before you know what it is. If you cannot pray that yet, make that the prayer: &ldquo;Make me willing to be willing.&rdquo; Double-mindedness, not divine reluctance, is the usual obstruction.",
      "Then engage the ordinary means: Scripture, counsel, reflection, circumstances. Asking first does not replace thinking; it relocates thinking inside dependence. Expect the answer to arrive most often through the means, not around them.",
      "Keep a record of what you asked and when (the Journal tab is built for this). Reviewing answered requests over months builds the confidence that James assumes: God actually gives wisdom to people who ask.",
    ],
    anchor: "James 1:5 &mdash; &ldquo;If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.&rdquo;",
  },
  {
    number: "02",
    title: "A Proverb a Day &mdash; The Thirty-One Day Apprenticeship",
    summary:
      "The oldest and simplest wisdom practice: reading one chapter of Proverbs daily, matched to the day of the month, slowly and repeatedly over years. Proverbs has thirty-one chapters for a reason &mdash; it is a curriculum designed for monthly cycles.",
    steps: [
      "Each day, read the chapter of Proverbs matching the day&rsquo;s date &mdash; chapter 12 on the 12th. Read slowly. The proverbs are designed to be chewed, not skimmed; each one compresses a long observation of life into two lines.",
      "Mark the one verse that lands &mdash; the one that names something in your current life: a conversation you are avoiding, a habit of speech, a money decision, an anger pattern. Wisdom reading is not coverage; it is contact.",
      "Carry that single verse through the day. Repeat it at lunch. Let it interrogate the afternoon: where did today confirm it? Where did you live against it? The proverb is a lens; the day is the laboratory.",
      "Do not be discouraged by repetition when the month restarts. The chapter has not changed, but you have, and different verses will find you. Sages have read Proverbs monthly for decades and report that it never finishes its work.",
      "Periodically pair the cycle with Ecclesiastes or Job (one chapter a week) so that Proverbs&rsquo; confidence is seasoned by the canon&rsquo;s own honesty about limits, suffering, and mystery.",
    ],
    anchor: "Proverbs 2:1-5 &mdash; &ldquo;If you receive my words and treasure up my commandments with you&hellip; then you will understand the fear of the LORD and find the knowledge of God.&rdquo;",
  },
  {
    number: "03",
    title: "The Council of the Wise &mdash; Building a Circle of Counsel",
    summary:
      "A deliberate practice of identifying, cultivating, and actually consulting wise people, grounded in the Proverbs conviction that wisdom is communal: &ldquo;in an abundance of counselors there is safety&rdquo; (Prov 11:14).",
    steps: [
      "Name your counselors on paper. Identify three to five people whose lives &mdash; not just opinions &mdash; demonstrate skill in living: marriages that have weathered, money handled generously, anger governed, faith sustained through suffering. Wisdom is verified by fruit over time (Matt 7:16-20), not by confidence or charisma.",
      "Notice who is missing. Most people&rsquo;s circles are all peers &mdash; same age, same stage, same blind spots. Seek at least one counselor twenty years ahead of you. The young man of Proverbs is instructed by the old precisely because some wisdom only arrives with decades.",
      "Actually ask. Counsel does not flow to those who do not request it. Bring your counselors specific, honest questions before decisions are final &mdash; not after, seeking ratification. &ldquo;Here is the decision, here is what I am inclined to do, here is what I am afraid of. What am I not seeing?&rdquo;",
      "Receive correction without defending. &ldquo;Whoever loves discipline loves knowledge, but he who hates reproof is stupid&rdquo; (Prov 12:1). The test of whether you want wisdom is what happens in your chest when a counselor disagrees with you. Practice saying: &ldquo;Tell me more about that.&rdquo;",
      "Reciprocate down the chain: make yourself askable to someone younger. Articulating hard-won lessons for another person is itself one of the fastest ways wisdom consolidates.",
    ],
    anchor: "Proverbs 11:14 &mdash; &ldquo;Where there is no guidance, a people falls, but in an abundance of counselors there is safety.&rdquo;",
  },
  {
    number: "04",
    title: "The Discernment Sheet &mdash; A Structured Practice for Decisions",
    summary:
      "A written discernment process for significant decisions that integrates the wisdom tradition&rsquo;s full toolkit: Scripture, prayer, counsel, circumstances, desire, and the long view &mdash; resisting both impulsiveness and paralysis.",
    steps: [
      "Write the decision at the top of a page in one sentence, with its real deadline. Naming the actual question and the actual timeline dissolves a surprising amount of fog &mdash; and exposes invented urgency.",
      "Scripture: ask first whether God has already spoken. Much agonized &ldquo;discernment&rdquo; is the search for permission to do what Scripture already forbids, or for excuses to avoid what it already commands. If the Bible settles it, the discernment is over; what remains is obedience.",
      "If the decision is between legitimate goods &mdash; most hard decisions are &mdash; write four columns: what wise counsel says (consult your circle first); what the circumstances actually are (facts, not fears); what your sanctified desire is (Ps 37:4 &mdash; desire is data, not a tyrant and not nothing); and what each path looks like in ten years, not ten days.",
      "Pray over the completed sheet, asking the question of Solomon: which path can I walk with a hearing heart, in the fear of the LORD? Note any settled leaning that survives several days of prayer. Peace that persists under examination is part of how wisdom feels from the inside (Col 3:15; James 3:17).",
      "Then decide, and entrust the outcome to God. Ecclesiastes&rsquo; gift to decision-making is the removal of the illusion that enough analysis guarantees results. You are responsible for faithfulness, not for outcomes. &ldquo;Whoever observes the wind will not sow&rdquo; (Eccl 11:4) &mdash; at some point, the wise sow.",
    ],
    anchor: "Proverbs 3:5-6 &mdash; &ldquo;Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.&rdquo;",
  },
  {
    number: "05",
    title: "Taming the Tongue &mdash; Wisdom&rsquo;s First Examination",
    summary:
      "A focused practice on speech, the area Scripture treats as wisdom&rsquo;s most revealing test. Proverbs returns to the tongue more than almost any other topic, and James makes it the hinge of the whole wise life (James 3).",
    steps: [
      "For one week, adopt the listening rule of James 1:19 as a literal discipline: &ldquo;quick to hear, slow to speak, slow to anger.&rdquo; In every conversation, let the other person finish completely, then pause one breath before replying. Notice how often your reply was being composed instead of the person being heard.",
      "Apply the three gates before speaking about anyone absent: Is it true? Is it kind? Is it necessary? Proverbs&rsquo; portrait of the gossip (Prov 18:8; 26:20) is a portrait of speech that fails the third gate while passing the first.",
      "Practice the timed word: &ldquo;a word fitly spoken is like apples of gold in a setting of silver&rdquo; (Prov 25:11). Once each day, look for the word someone actually needs &mdash; encouragement, gratitude, gentle truth &mdash; and deliver it deliberately. Wisdom is not only restraint; it is timing.",
      "When you fail &mdash; the sharp reply, the careless disclosure, the joke at someone&rsquo;s expense &mdash; repair quickly and specifically. &ldquo;Whoever conceals his transgressions will not prosper&rdquo; (Prov 28:13). The wise are not those who never sin with the tongue (James 3:2 says no one achieves that) but those who keep short accounts.",
      "At week&rsquo;s end, review honestly: where does your speech run ahead of your wisdom? That precise place is your current curriculum.",
    ],
    anchor: "Proverbs 18:21 &mdash; &ldquo;Death and life are in the power of the tongue, and those who love it will eat its fruits.&rdquo;",
  },
  {
    number: "06",
    title: "Numbering the Days &mdash; The Ecclesiastes Meditation",
    summary:
      "A monthly practice of deliberately facing mortality and limits in the company of God, drawn from Psalm 90 and Ecclesiastes. The sages insist that honest contact with death is not morbid but clarifying: it teaches the heart what actually matters.",
    steps: [
      "Once a month, take thirty unhurried minutes with Psalm 90 and one chapter of Ecclesiastes. Pray Moses&rsquo; prayer at the start: &ldquo;Teach us to number our days that we may get a heart of wisdom&rdquo; (Ps 90:12).",
      "Do the actual arithmetic, gently. Estimate the seasons that remain &mdash; the years with children at home, the active decades, the time with aging parents. Qoheleth&rsquo;s hevel is not depressing when held before God; it is the dissolving of illusions that misallocate a life.",
      "Ask the clarifying questions the meditation produces: What am I spending irreplaceable time on that will mean nothing? What have I been postponing that the remaining time makes urgent &mdash; a reconciliation, a calling, a conversation, a generosity?",
      "Receive the Ecclesiastes counterweight: the command to enjoy. &ldquo;Go, eat your bread with joy&hellip; enjoy life with the wife whom you love&rdquo; (Eccl 9:7-9). Numbering days does not produce grim urgency only; it produces gratitude for the ordinary gifts &mdash; bread, work, companionship &mdash; received today from God&rsquo;s hand.",
      "Close with the end of the matter: &ldquo;Fear God and keep his commandments&rdquo; (Eccl 12:13). Write one concrete reallocation of the coming month &mdash; one thing to stop, start, or savor &mdash; and let the meditation become motion.",
    ],
    anchor: "Psalm 90:12 &mdash; &ldquo;So teach us to number our days that we may get a heart of wisdom.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Tremper Longman III",
    role: "How to Read Proverbs; The Fear of the Lord Is Wisdom &mdash; The Scholar of the Wisdom Books",
    quote:
      "Wisdom is a practical knowledge &mdash; a skill of living. It is knowing how to navigate life&rsquo;s pitfalls and maximize one&rsquo;s gifts. But at its foundation, wisdom is a relationship: the fear of the Lord is the beginning of knowledge. Apart from that relationship, what the world calls wisdom is navigation without a fixed point.",
    bio: "Tremper Longman III (b. 1952) is Distinguished Scholar and Professor Emeritus of Biblical Studies at Westmont College and one of the most prolific evangelical Old Testament scholars of his generation, with commentaries on Proverbs, Ecclesiastes, Job, and Song of Songs &mdash; the entire wisdom corpus &mdash; alongside accessible guides such as How to Read Proverbs. Longman&rsquo;s central contribution to the church&rsquo;s understanding of wisdom is his insistence on reading the wisdom books canonically and together: Proverbs states the normal grain of the world, while Job and Ecclesiastes guard the tradition against turning that grain into a mechanical formula of guaranteed outcomes. He has argued influentially that the personified Woman Wisdom of Proverbs 8 ultimately points forward to Christ, in whom the wisdom by which the world was made takes on flesh. His work models the very thing it describes: rigorous scholarship in service of practical skill for living, with the fear of the LORD as the non-negotiable foundation. For readers who want one trustworthy guide through the entire biblical wisdom literature, Longman has spent a career building the path.",
  },
  {
    name: "Derek Kidner",
    role: "Proverbs (Tyndale Commentary); The Wisdom of Proverbs, Job and Ecclesiastes &mdash; The Master of Compression",
    quote:
      "The fear of the Lord is the beginning of wisdom: what the alphabet is to reading, notes to music, and numerals to mathematics, the fear of the Lord is to wisdom. It is not a stage to be left behind but the very grammar in which every sentence of the wise life is written.",
    bio: "Derek Kidner (1913-2008) was a British Old Testament scholar, Anglican clergyman, and warden of Tyndale House, Cambridge, whose small commentaries &mdash; especially his Tyndale volumes on Proverbs, Psalms, and Genesis &mdash; achieved a rare double reputation: they are among the most quoted works of twentieth-century evangelical scholarship and among the shortest. Kidner wrote about the wisdom literature in the manner of the wisdom literature: compressed, elegant, epigrammatic, never wasting a word. His Proverbs commentary, with its famous subject studies on the sluggard, the fool, the friend, and the words of the wise, taught generations of readers that Proverbs is not a jumble of sayings but a coherent portrait gallery of the kinds of people one can become. His later volume on Proverbs, Job, and Ecclesiastes together displayed the canon&rsquo;s own balance &mdash; confidence seasoned by mystery &mdash; decades before such canonical reading became fashionable. A trained musician who once considered a concert career, Kidner brought an artist&rsquo;s ear to the sages&rsquo; craft, and his own prose remains a demonstration that wisdom and beauty belong together.",
  },
  {
    name: "J.I. Packer",
    role: "Knowing God &mdash; Wisdom as the Fruit of Knowing God Himself",
    quote:
      "Wisdom is the power to see, and the inclination to choose, the best and highest goal, together with the surest means of attaining it. Wisdom is, in fact, the practical side of moral goodness. As such, it is found in its fulness only in God. He alone is naturally and entirely and invariably wise.",
    bio: "J.I. Packer (1926-2020) was a British-born evangelical theologian, longtime professor at Regent College in Vancouver, and author of Knowing God (1973), one of the most influential works of popular theology in the twentieth century. Packer&rsquo;s treatment of wisdom comes embedded in that book&rsquo;s larger argument: that the chief end of life is not knowing about God but knowing God, and that every divine attribute &mdash; including wisdom &mdash; is something God shares with those who walk with him. His chapters &ldquo;God Only Wise&rdquo; and &ldquo;Thy Word Is Truth&rdquo; gave countless readers their working definition of wisdom as the practical side of holiness: choosing the best goal and the surest means, as God does. Crucially, Packer used Ecclesiastes to demolish the false expectation that wisdom means decoding God&rsquo;s providence: the wise person, he argued, is not the one who can explain everything God is doing but the one who trusts and obeys within the mystery. Formed by the Puritans he spent a lifetime commending, Packer embodied an older ideal of the theologian as a guide to godly living &mdash; and his definition of theology itself was, in the end, a wisdom definition: doctrine turned to doxology and obedience.",
  },
  {
    name: "Tim Keller",
    role: "God&rsquo;s Wisdom for Navigating Life; Preaching Christ from Proverbs &mdash; The Pastor of Practical Wisdom",
    quote:
      "Wisdom is more than just keeping the rules. It is knowing what to do when the moral rules don&rsquo;t apply &mdash; in the eighty percent of life&rsquo;s decisions where there is no explicit command. Wisdom is the discernment to make the right choices in the vast gray areas of life, and it comes from knowing God himself.",
    bio: "Timothy Keller (1950-2023) was the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential Christian communicators of his era, known for bringing classical Reformed theology into searching conversation with skeptical, late-modern urban culture. His engagement with the wisdom literature was sustained and pastoral: God&rsquo;s Wisdom for Navigating Life, the year-long devotional through Proverbs written with his wife Kathy, distilled decades of preaching the wisdom books to professionals making daily decisions about money, power, sex, work, and words in a city that runs on all five. Keller&rsquo;s signature insight was that most of life is lived in territory the explicit commands do not map &mdash; which job, which city, which words, which timing &mdash; and that God&rsquo;s provision for that territory is not more rules but wisdom: a character formed by the fear of the LORD until right judgment becomes instinct. He consistently preached Proverbs christologically, presenting Jesus as the true wisdom of God who became foolishness for us, so that the pursuit of wisdom is finally the pursuit of a person. His treatments of Ecclesiastes gave secular listeners the canon&rsquo;s own voice for their suspicion that life under the sun is vapor &mdash; and then pointed past the sun.",
  },
  {
    name: "Os Guinness",
    role: "The Call; Fool&rsquo;s Talk &mdash; Wisdom, Calling, and the Foolishness of God",
    quote:
      "At the heart of the gospel is the subversive wisdom of the cross &mdash; what Erasmus called the &lsquo;foolishness of God.&rsquo; The deepest answers to the deepest questions are not found by the wisdom of the wise but disclosed at the point where human wisdom is confounded. God&rsquo;s folly outthinks the cleverness of every age, including ours.",
    bio: "Os Guinness (b. 1941) is an English author and social critic, great-great-great-grandson of the Dublin brewer Arthur Guinness, born in China to missionary parents and educated at Oxford. Across more than thirty books &mdash; The Call, Fool&rsquo;s Talk, A Time for Truth, The Dust of Death &mdash; Guinness has practiced wisdom&rsquo;s distinctive public vocation: reading the times in the light of eternity, as the men of Issachar &ldquo;understood the times and knew what Israel ought to do&rdquo; (1 Chr 12:32). The Call, his most beloved work, is at heart a wisdom book about vocation: discerning the difference between career and calling, between what you can do and what you were summoned to do, and living for the Audience of One rather than the audience of many. Fool&rsquo;s Talk recovers the tradition of holy folly and subversive persuasion &mdash; the wisdom of the cross applied to apologetics &mdash; arguing that the gospel persuades not by out-muscling the world&rsquo;s wisdom but by turning the tables on it, as Paul does in 1 Corinthians 1. A student and friend of Francis Schaeffer at L&rsquo;Abri and a drafter of the Williamsburg Charter on religious liberty, Guinness has spent fifty years showing that Christian wisdom must be lived publicly: discernment about ideas, cultures, and moments, not merely private decisions.",
  },
  {
    name: "Ellen Davis",
    role: "Proverbs, Ecclesiastes, and the Song of Songs; Getting Involved with God &mdash; Wisdom as the Art of Living Well Before God",
    quote:
      "The fear of the LORD is what the biblical writers mean by the beginning of wisdom: a deep reverence, the recognition that we stand in the presence of holy mystery. Wisdom is the discipline of living mindfully in that presence &mdash; seeing the world accurately, as God&rsquo;s world, and handling it with the care that such seeing requires.",
    bio: "Ellen F. Davis (b. 1950) is the Amos Ragan Kearns Distinguished Professor of Bible and Practical Theology at Duke Divinity School and one of the most respected Old Testament theologians in the English-speaking world. Her commentary Proverbs, Ecclesiastes, and the Song of Songs, written for the church rather than the guild, restored the wisdom books to ordinary Christian readers as Scripture for the formation of character, treating Proverbs as training in moral imagination &mdash; learning to see the world accurately so that one can act in it faithfully. Davis&rsquo;s broader work connects wisdom to realms the modern church forgot it governed: her Scripture, Culture, and Agriculture reads the Bible&rsquo;s agrarian wisdom as a theology of land, food, and care for creation, arguing that the sages&rsquo; skill-for-living includes skill in inhabiting the physical world without destroying it. A masterful teacher of biblical Hebrew and a longtime advocate of slow, attentive reading, she treats the act of reading Scripture itself as a wisdom practice &mdash; unhurried, humble, expecting to be changed. Her recurring theme is that wisdom is fundamentally a way of seeing: the fear of the LORD trains the eye, and right action follows the trained eye the way harvest follows planting.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Proverbs 9:10",
    text: "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight.",
    reflection:
      "The motto of the entire wisdom tradition. The fear of the LORD is not terror but reorientation &mdash; the creature&rsquo;s glad, sober recognition that God is God. &ldquo;Beginning&rdquo; means both starting point and first principle: there is no other door into wisdom, and the door is never left behind. Every skill the wise life develops grows in this atmosphere or it is not wisdom at all.",
  },
  {
    reference: "Proverbs 8:22-23, 30-31",
    text: "The LORD possessed me at the beginning of his work, the first of his acts of old. Ages ago I was set up, at the first, before the beginning of the earth&hellip; then I was beside him, like a master workman, and I was daily his delight, rejoicing before him always, rejoicing in his inhabited world and delighting in the children of man.",
    reflection:
      "Lady Wisdom&rsquo;s great claim: the wisdom offered to any passerby at the city gate is the same wisdom by which God ordered the cosmos. To live wisely is to live with the grain of creation. And note the tone &mdash; delight, rejoicing &mdash; the wise life is the glad life, the life that has found the rhythms it was made for. The New Testament hears in this passage a whisper of the Son, the master workman through whom all things were made.",
  },
  {
    reference: "1 Kings 3:7, 9",
    text: "And now, O LORD my God, you have made your servant king in place of David my father, although I am but a little child. I do not know how to go out or come in&hellip; Give your servant therefore an understanding heart to govern your people, that I may discern between good and evil, for who is able to govern this your great people?",
    reflection:
      "Solomon&rsquo;s &ldquo;understanding heart&rdquo; is literally a hearing heart &mdash; receptivity before brilliance. The request begins with honest smallness (&ldquo;I am but a little child&rdquo;) and aims at service, not status. What you would ask for, given anything, is the most precise diagnostic of your heart. And Solomon&rsquo;s later drift is the canon&rsquo;s own warning attached to the gift: wisdom granted must be kept by continued listening.",
  },
  {
    reference: "James 1:5-6",
    text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind.",
    reflection:
      "Wisdom is a gift before it is an achievement. The Giver gives generously and without reproach &mdash; no shaming for asking again. The one condition is single-mindedness: the prior resolve to do whatever the answer turns out to be. The double-minded ask for direction while reserving the right of veto, and wisdom cannot land on a heart that has not decided whose voice it will trust.",
  },
  {
    reference: "1 Corinthians 1:22-25",
    text: "For Jews demand signs and Greeks seek wisdom, but we preach Christ crucified, a stumbling block to Jews and folly to Gentiles, but to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God. For the foolishness of God is wiser than men, and the weakness of God is stronger than men.",
    reflection:
      "God&rsquo;s definitive wisdom looks like definitive folly: a crucified Messiah. The cross does not merely correct worldly wisdom; it exposes it &mdash; revealing a God whose way up is down, whose power is perfected in weakness. Christian wisdom is therefore cruciform, and the disciple should expect that the wisest acts of a faithful life will sometimes be scorned by every wise observer present.",
  },
  {
    reference: "Ecclesiastes 12:13-14",
    text: "The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil.",
    reflection:
      "After touring every limit &mdash; pleasure, wealth, learning, legacy, all hevel, all vapor &mdash; Qoheleth lands where Proverbs began: fear God. But the foundation is now stripped of illusion. Wisdom is not a technique for controlling life; it is faithfulness within a life you cannot control, entrusting the pattern you cannot see to the Judge who sees everything. Live skillfully; hold outcomes with open hands.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "0eUw4VVbWRE", title: "What Is Biblical Wisdom? &mdash; Chokmah and the Skill of Living" },
  { videoId: "i5DiKbonPJI", title: "The Fear of the LORD &mdash; Why It Is the Beginning of Wisdom" },
  { videoId: "Gab04dPa_NY", title: "Proverbs 8 &mdash; Lady Wisdom and the Order of Creation" },
  { videoId: "RhBgcN3HrZY", title: "Solomon&rsquo;s Request &mdash; The Hearing Heart of 1 Kings 3" },
  { videoId: "c2dQ0wXrnXM", title: "Christ the Wisdom of God &mdash; 1 Corinthians 1 and the Cross" },
  { videoId: "5ylZJYabxL0", title: "Ecclesiastes &mdash; Wisdom&rsquo;s Limits Under the Sun" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianWisdomGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<WSDEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theDecision, setTheDecision] = useState("");
  const [theWisdomSought, setTheWisdomSought] = useState("");
  const [theCounsel, setTheCounsel] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as WSDEntry[]);
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
    if (!theDecision.trim()) return;
    const entry: WSDEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theDecision: theDecision.trim(),
      theWisdomSought: theWisdomSought.trim(),
      theCounsel: theCounsel.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheDecision("");
    setTheWisdomSought("");
    setTheCounsel("");
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
              Discernment &amp; the Skill of Living
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Wisdom: Skill for Living in the Fear of the LORD
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Hebrew word for wisdom &mdash; chokmah &mdash; means skill: the same word used for
              craftsmen, sailors, and weavers. Biblical wisdom is skill in the craft of living, and its
              one foundation is the fear of the LORD. This guide traces wisdom from Proverbs and
              Solomon&rsquo;s hearing heart to Christ the wisdom of God and the foolishness of the
              cross, and builds the practices by which wisdom is actually acquired &mdash; asking,
              reading, counsel, and time.
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
                &ldquo;The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy
                One is insight.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Proverbs 9:10</p>
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
                Nine studies in the theology of wisdom &mdash; from chokmah as skill for living and the
                fear of the LORD as its foundation, through Lady Wisdom at creation and Solomon&rsquo;s
                hearing heart, to Christ the wisdom of God, the asking of James 1:5, the wisdom of the
                cross, and Ecclesiastes&rsquo; honest accounting of wisdom&rsquo;s limits.
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
                        background: "rgba(217, 119, 6, 0.07)",
                        border: "1px solid rgba(217, 119, 6, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Wisdom begins in the fear of the LORD, is woven into creation, was asked for by
                  Solomon and offered to anyone by James, and finally stands up and walks in Jesus
                  Christ &mdash; the wisdom of God who looks like foolishness to the world. Go deeper
                  into the book at wisdom&rsquo;s center in the{" "}
                  <Link href="/proverbs-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                    Proverbs Guide
                  </Link>
                  , sit with wisdom&rsquo;s limits in the{" "}
                  <Link href="/ecclesiastes-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                    Ecclesiastes Guide
                  </Link>
                  , or apply discernment to a fork in the road in{" "}
                  <Link href="/christian-decision-making" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Decision-Making
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
                Six practices by which wisdom is actually acquired &mdash; asking God before analyzing,
                the thirty-one day Proverbs apprenticeship, building a circle of counsel, a structured
                discernment process for decisions, the taming of the tongue, and the Ecclesiastes
                meditation on numbered days. Wisdom is a skill; skills grow by practice.
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
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the pace of wisdom
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Wisdom cannot be rushed, downloaded, or hacked. It grows the way trees grow &mdash;
                  by seasons, in soil, through weather. The practices above are not techniques that
                  produce wisdom on a schedule; they are the conditions under which God gives it: the
                  asking, the daily contact with the text, the company of the wise, the honest record
                  of decisions. The Journal tab is designed for that record &mdash; the decision you
                  face, the wisdom you are seeking, the counsel you have received. Over years, the
                  entries become your own proverbs: tested observations of how God has made the world
                  and led your life.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most helped the church understand and practice biblical wisdom
                &mdash; Longman&rsquo;s canonical scholarship, Kidner&rsquo;s compressed elegance,
                Packer&rsquo;s theology of knowing God, Keller&rsquo;s pastoral discernment,
                Guinness&rsquo;s public reading of the times, and Davis&rsquo;s training of the moral
                imagination.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: GOLD,
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
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
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
                Six passages that form the biblical theology of wisdom &mdash; Proverbs 9 and 8,
                Solomon&rsquo;s request in 1 Kings 3, the asking of James 1, the cruciform wisdom of
                1 Corinthians 1, and the end of the matter in Ecclesiastes 12. Read one per week
                alongside the Journal practice.
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Bring each passage into contact with an actual decision or situation you are
                  carrying. Read the text slowly, then pray it back: &ldquo;Lord, this decision needs
                  your wisdom, not just my analysis. You give generously and without reproach &mdash;
                  I am asking. Give me a hearing heart. Settle me in the fear of you, and make me
                  willing to do whatever the answer turns out to be.&rdquo; Wisdom prayer is not a
                  request for information; it is a request for formation &mdash; and the texts
                  themselves are part of how God answers it.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields following the wisdom tradition&rsquo;s own method &mdash; name the
                decision precisely, name the wisdom you are seeking from God and Scripture, and record
                the counsel of wise people. Entries are stored privately in your browser. No account
                needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New wisdom entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="wsd-decision" style={labelStyle}>
                    The decision or situation needing wisdom
                  </label>
                  <textarea
                    id="wsd-decision"
                    value={theDecision}
                    onChange={(e) => setTheDecision(e.target.value)}
                    placeholder="Name the actual fork in the road, in one or two sentences. Precision dissolves fog..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="wsd-sought" style={labelStyle}>
                    The wisdom I&rsquo;m seeking from God and Scripture
                  </label>
                  <textarea
                    id="wsd-sought"
                    value={theWisdomSought}
                    onChange={(e) => setTheWisdomSought(e.target.value)}
                    placeholder="What you are asking God for (James 1:5), and what Scripture has already said that bears on this..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="wsd-counsel" style={labelStyle}>
                    Counsel received from wise people
                  </label>
                  <textarea
                    id="wsd-counsel"
                    value={theCounsel}
                    onChange={(e) => setTheCounsel(e.target.value)}
                    placeholder="What your counselors said — especially the parts you didn't want to hear (Prov 11:14)..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theDecision.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theDecision.trim() ? BORDER : GOLD,
                    color: !theDecision.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theDecision.trim() ? "not-allowed" : "pointer",
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
                      Name the decision, ask God for wisdom, and record the counsel you receive. Over
                      time these entries become your own book of tested observations &mdash; a record
                      of how God has actually answered James 1:5 in the specific decisions of your
                      life.
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
                            The decision
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theDecision}
                          </p>
                        </div>

                        {entry.theWisdomSought && (
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
                              The wisdom sought
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                              {entry.theWisdomSought}
                            </p>
                          </div>
                        )}

                        {entry.theCounsel && (
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
                              Counsel received
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theCounsel}
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
                Teaching on biblical wisdom &mdash; chokmah, the fear of the LORD, Lady Wisdom in
                Proverbs 8, Solomon&rsquo;s request, Christ the wisdom of God, and Ecclesiastes.
                Good companions to the Theology and Practices tabs.
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
              Wisdom as a long apprenticeship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Wisdom is not a download; it is an apprenticeship &mdash; to the text, to the wise, and
              finally to Christ himself, in whom all the treasures of wisdom and knowledge are hidden.
              The fear of the LORD is its beginning, the cross is its scandal, and Ecclesiastes is its
              honest boundary: live skillfully, and hold the outcomes with open hands. The person who
              asks, reads, listens, and keeps record will find &mdash; slowly, the way trees grow
              &mdash; that God has been giving generously all along.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: walk through the central text in the{" "}
              <Link href="/proverbs-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                Proverbs Guide
              </Link>
              , bring discernment to a specific crossroads in{" "}
              <Link href="/christian-decision-making" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Decision-Making
              </Link>
              , or learn the practice of waiting for God&rsquo;s timing in{" "}
              <Link href="/waiting-on-god" style={{ color: GOLD, textDecoration: "underline" }}>
                Waiting on God
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
