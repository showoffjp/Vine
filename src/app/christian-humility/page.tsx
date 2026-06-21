"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianhumility_entries";

interface HMLEntry {
  id: string;
  date: string;
  prideMoment: string;
  humbleResponse: string;
  freeingTruth: string;
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
    badge: "Philippians 2:5-11",
    title: "The Kenosis of Christ — The Downward Way",
    paragraphs: [
      "The most important passage on Christian humility is not a command but a narrative: &ldquo;Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross&rdquo; (Philippians 2:5-11). The Greek kenosis — self-emptying — does not mean Christ surrendered his divine nature; it means he refused to leverage his divine status for personal advantage or comfort. He was fully God and he chose the form of a slave.",
      "Paul introduces this Christological narrative as a pattern for how believers are to relate to one another: &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.&rdquo; The logic is participatory — you are in Christ, so have his mind. The humility Paul commands is not the cultivation of a virtue by willpower; it is the natural outflow of a life oriented around Christ&rsquo;s self-emptying. To be formed by the kenosis is to be freed from the compulsive need to grasp, to compete, to defend status.",
      "The movement of the passage is important: kenosis leads to death, and death leads to the highest exaltation — &ldquo;Therefore God has highly exalted him and bestowed on him the name that is above every name.&rdquo; Christian humility is not a downward path with no destination; it is the downward path whose destination is glory. This is why Jesus could say in the Beatitudes that the poor in spirit possess the kingdom of heaven: the posture of lowliness before God is not deprivation but inheritance.",
    ],
    callout: {
      label: "The word",
      text: "Kenosis (κένωσις): self-emptying — the voluntary relinquishment of privilege, advantage, and status for the sake of others. Not the loss of identity but the liberation from the anxious defense of it.",
    },
  },
  {
    badge: "Humility vs. Self-Deprecation",
    title: "The Distinction That Matters — What Humility Is Not",
    paragraphs: [
      "The most persistent misunderstanding of Christian humility is the equation of humility with self-deprecation — the posture of the person who habitually says &ldquo;I&rsquo;m nothing,&rdquo; insists they have no gifts, deflects every compliment, and presents a studied lowliness for others to contradict. This is not humility; it is inverted pride. C.S. Lewis identified it precisely: &ldquo;Do not imagine that if you meet a really humble man he will be what most people call humble nowadays. He will not be a sort of greasy, smarmy person who is always telling you that, of course, he is nobody. Probably all you will think about him is that he seemed a cheerful, intelligent chap who took a real interest in what you said to him.&rdquo;",
      "Genuine humility is not low self-esteem. It is what Andrew Murray called the displacement of self by the enthronement of God: not thinking poorly of yourself but ceasing to be preoccupied with yourself at all. The humble person has an accurate, sober assessment of who she is — neither inflated nor deflated — and then largely forgets about it because she is too interested in God and in other people. Self-deprecation is still self-focused; it just wears a mask of spiritual seriousness.",
      "Paul&rsquo;s instruction in Romans 12:3 is to &ldquo;think with sober judgment&rdquo; (sophrosyne) — clear, honest self-assessment informed by grace. This means acknowledging real gifts without pride, acknowledging real limitations without despair, and living from neither list. The humble person is free: free from the exhausting project of self-promotion, free from the equally exhausting project of self-deprecation. Both are ways of keeping the self at the center; humility moves the center.",
    ],
  },
  {
    badge: "James 4:6 / 1 Peter 5:5",
    title: "&ldquo;God Opposes the Proud&rdquo; — The Stakes of Pride",
    paragraphs: [
      "Both James and Peter quote the same sentence from Proverbs 3:34: &ldquo;God opposes the proud but gives grace to the humble.&rdquo; The repetition across two New Testament letters signals that the church was being taught this as a foundational axiom. The verb antitassetai is military language: God does not merely disapprove of pride; he arrays himself in battle formation against it. This is divine opposition, not divine disappointment. The proud person is not simply missing out on grace; she is moving toward collision with God.",
      "Why is the opposition so strong? Because pride is, in essence, the claim to be what only God is. Thomas Aquinas argued that pride is the root of all sin — not merely a sin alongside others but the disposition from which every other rebellion springs. The proud person has displaced God from the center of his universe and installed himself there. Every other sin is downstream of this displacement. The person who believes he deserves more than he has received, who insists on his rights above others, who demands recognition and bristles at correction — this person has made himself the standard against which everything else is measured.",
      "Peter&rsquo;s context makes the pastoral application clear: &ldquo;Clothe yourselves, all of you, with humility toward one another, for God opposes the proud... Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you&rdquo; (1 Peter 5:5-6). Humility here is not a feeling but a posture — the deliberate choice to stand under God&rsquo;s authority rather than assert your own, in community with others rather than above them, in patience for God&rsquo;s timing rather than grasping at your own vindication.",
    ],
  },
  {
    badge: "John 13",
    title: "Jesus Washing the Disciples&rsquo; Feet — Enacted Humility",
    paragraphs: [
      "The foot-washing of John 13 is the most concentrated enactment of kenosis in the Gospels. John frames it with extraordinary theological weight: &ldquo;Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper. He laid aside his outer garments, and taking a towel, tied it around himself. Then he poured water into a basin and began to wash the disciples&rsquo; feet.&rdquo; This is the Lord of creation, the one who will shortly reign at the right hand of the Father, performing the most menial household task — the work assigned to the lowest slave in a Roman household.",
      "The sequence matters: it is precisely because Jesus knew who he was and where he was going that he could stoop to wash feet. Security of identity is the precondition of humility. The person who is uncertain of her worth is unable to truly humble herself because every act of service feels like a threat to her value. Jesus, whose identity was anchored in the Father&rsquo;s love and his own divine nature, had nothing to prove. From that security he could serve without cost to his dignity — because his dignity was not staked on what others saw him do.",
      "&ldquo;If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example, that you also should do just as I have done to you&rdquo; (John 13:14-15). The foot-washing is not merely a metaphor; it is a template. Christian communities that take this seriously have always practiced some visible form of mutual, willing service — the willingness to do the lowly task, to work beneath one&rsquo;s station, to serve without keeping score.",
    ],
  },
  {
    badge: "Matthew 5:3",
    title: "The Beatitudes and Poverty of Spirit — The Blessed Lowliness",
    paragraphs: [
      "The Sermon on the Mount opens with a statement that would have sounded like nonsense to its first hearers: &ldquo;Blessed are the poor in spirit, for theirs is the kingdom of heaven.&rdquo; Makarios — blessed, deeply happy, flourishing — is applied to the poor in spirit: those who know they have nothing before God, who bring no spiritual credentials or moral capital, who stand before the Father empty-handed. The kingdom of heaven belongs to them.",
      "Poverty of spirit is not emotional depression; it is spiritual realism. The person who is poor in spirit has an accurate account of her standing before a holy God and of the distance between what God requires and what she can produce. This is the beginning of humility: not a posture adopted for social benefit but an honest reckoning with reality. Augustine said that humility is the foundation of the Christian life because without it a person cannot receive anything from God. The full vessel cannot be filled; only the empty one can.",
      "The Beatitudes as a sequence describe a community shaped entirely by downward movement: mourning, meekness, hunger, mercy, purity of heart, peacemaking, and persecution. Each beatitude describes a way of being in the world that requires the relinquishment of self-assertion. The community Jesus is constituting in the Sermon on the Mount is a community of the humble — people who have nothing to defend because they have already placed everything in God&rsquo;s hands.",
    ],
  },
  {
    badge: "Andrew Murray",
    title: "Humility as the Root of All Virtue",
    paragraphs: [
      "Andrew Murray&rsquo;s Humility (1895) remains the most sustained Protestant meditation on the virtue. Murray&rsquo;s central thesis is that humility is not one virtue among others but the soil from which all other virtues grow. &ldquo;It is the displacement of self by the enthronement of God. Where God is all, self is nothing.&rdquo; On Murray&rsquo;s account, the failure of Christian character almost always traces back to some form of hidden pride — the subtle competition for status in community, the resentment at uncredited service, the exhaustion that comes from managing others&rsquo; opinions of oneself.",
      "Murray drew from two sources: the example of Jesus (&ldquo;Learn from me, for I am gentle and lowly in heart&rdquo;, Matthew 11:29) and the observation that the holiest people in Scripture are also the most self-forgetful. Moses is described as the most humble man on earth (Numbers 12:3); Paul calls himself the chief of sinners (1 Timothy 1:15). These are not performances of modesty; they are the natural assessment of those whose sight of God has recalibrated their sight of themselves. The higher the mountain, the smaller you feel beside it.",
      "Murray was also clear that humility cannot be achieved by effort. The attempt to become humble by trying to feel humble is self-defeating: it puts the self back at the center by making self-assessment the main project. Humility comes as a byproduct of gazing at Christ — the person absorbed in the beauty and majesty of Jesus simply has less room left over for self-preoccupation. The practice of humility is therefore largely the practice of attention: to God, to others, to the needs of the moment — and away from the mirror.",
    ],
  },
  {
    badge: "Humility and Spiritual Warfare",
    title: "Pride as the First Sin and the Ongoing Battle",
    paragraphs: [
      "The Christian tradition has consistently named pride as the first and worst sin — not merely chronologically first (the fall of Satan is attributed to pride in Isaiah 14 and Ezekiel 28) but structurally first: the sin that makes all other sins possible. C.S. Lewis in Mere Christianity called it &ldquo;the complete anti-God state of mind&rdquo; and the one sin that is entirely self-enclosed: the proud person cannot see their own pride the way a person with a bad breath cannot smell it themselves.",
      "This means pride is the primary battleground of spiritual warfare. Paul&rsquo;s description of the armor of God in Ephesians 6 prepares the believer not for external enemies but for the principalities and powers — and the strategy of those powers is consistently to exploit pride: the pride of life (1 John 2:16), the puffed-up knowledge that Paul warns against in 1 Corinthians 8, the boasting that empties the cross of its power (1 Corinthians 1:17). The enemy of the soul works most effectively not through obvious temptations but through the subtle inflation of self-regard that gradually displaces dependence on God.",
      "Horizontal and vertical humility differ in important ways. Vertical humility is the posture of the creature before the Creator — the acknowledgment that all one has is received, that God is the standard, that his judgment is to be trusted over one&rsquo;s own. Horizontal humility is the posture of the person among fellow creatures — the preference of others&rsquo; needs, the willingness to be last, the refusal to insist on one&rsquo;s own rights. Both are necessary and each feeds the other: the person who truly stands low before God finds it natural to stand low among people; the person who serves sacrificially among people is practicing what it means to stand before God.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Examen of Pride",
    summary:
      "A daily evening examination specifically targeted at the movements of pride and humility through the day &mdash; not to produce shame but to produce clarity and freedom.",
    steps: [
      "Each evening, take five minutes to review the day with one question in mind: where was I more concerned with how I appeared than with what was actually needed? Note the moments: the credit claimed, the correction bristled at, the quiet resentment at being overlooked, the exaggeration in the service of impression management.",
      "Do not treat the answers as cause for shame. The examen is a diagnostic, not a sentencing. Name what you find, bring it to God in short confession, and release it. The goal is the growing ability to catch pride in real time &mdash; which requires first being able to see it in retrospect.",
      "Note also the movements of humility: the moment you genuinely served without needing credit, the time you listened without waiting for your turn, the choice to place someone else&rsquo;s need first. These are worth naming too &mdash; not to collect them as trophies but to recognize the Spirit&rsquo;s work and give thanks.",
      "Record your observations in the Journal tab on this page. A month of entries will show you the specific contours of your pride: the environments that trigger it most, the people with whom you are most competitive, and the domains (work, appearance, knowledge, virtue) where self-regard is strongest.",
    ],
    anchor:
      "Romans 12:3 — Think with sober judgment, each according to the measure of faith that God has assigned.",
  },
  {
    number: "02",
    title: "The Practice of Hiddenness",
    summary:
      "Deliberate service in secret &mdash; the discipline that starves the pride that feeds on recognition and trains the soul toward a purer love.",
    steps: [
      "Once a week, do one significant act of service that no one will know about. Not a small courtesy &mdash; something that actually costs you: a significant anonymous gift, a laborious task done before anyone notices, an hour of prayer for an enemy. The act must be genuinely secret.",
      "Resist all the ego&rsquo;s workarounds: the dropped hint, the humble-brag, the story told as an example in a small group. Jesus&rsquo;s instruction is absolute: do not let your left hand know what your right hand is doing (Matthew 6:3). The secrecy is the practice, not an optional feature of it.",
      "Notice what happens inside you when the act goes unnoticed. If you feel irritated, diminished, or anxious &mdash; that is information. Pride was present and expected its return. If you feel unusually free &mdash; that is also information. You have tasted the liberty of acting from love rather than from the need for approval.",
      "Pray for the person or people you served. Intercession is the natural companion of hidden service: it completes the act and keeps the heart oriented outward. The person you prayed for and served in secret has become, in a small way, someone you love.",
    ],
    anchor:
      "Matthew 6:3-4 — When you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret.",
  },
  {
    number: "03",
    title: "Receiving Correction Well",
    summary:
      "The response to criticism and correction is one of the most reliable diagnostic tests of pride. This practice trains the soul to receive rebuke as a gift rather than an assault.",
    steps: [
      "When you are criticized or corrected &mdash; by a supervisor, a spouse, a friend, a stranger &mdash; practice a three-beat response before saying anything: pause (do not defend immediately), question (is there truth in this, even partial truth?), and receive (thank the person, even briefly).",
      "Distinguish between the content of the criticism and the manner of its delivery. A harsh critique can contain true content; a gentle one can be false. Do not use tone as an excuse to dismiss substance. The humble person asks &ldquo;what is true here?&rdquo; before asking &ldquo;how should I feel about how this was delivered?&rdquo;",
      "After a day has passed, return to the criticism and ask the Andrew Murray question: what in me needed to be defended? What was I protecting? If the defense felt urgent, something was being guarded that God may have been trying to loosen. Bring this to prayer.",
      "Seek correction proactively. Once a month, ask a trusted person the question: what is one thing you see in me that I might not see in myself? The willingness to ask this question &mdash; and to receive the answer without immediately explaining it away &mdash; is one of the most concrete forms of humility available.",
    ],
    anchor:
      "Proverbs 12:1 — Whoever loves discipline loves knowledge, but he who hates reproof is stupid.",
  },
  {
    number: "04",
    title: "Honoring the Overlooked",
    summary:
      "Horizontal humility expressed as deliberate attention to those the community tends to overlook, undervalue, or pass over &mdash; a direct practice of Philippians 2:3.",
    steps: [
      "Identify one person in your regular community &mdash; church, workplace, neighborhood &mdash; whose contributions are systematically underrecognized. This might be the person in a support role, the quietest voice in a meeting, the one whose name rarely appears in the credits.",
      "Do one specific, public thing this week to honor that person&rsquo;s contribution: credit them by name in a group setting, write them a note of specific appreciation, advocate for their recognition to someone in authority. The key is that the honor is public and concrete, not merely internal.",
      "Examine your own patterns of visibility: whose ideas do you regularly credit? Whose work do you build on without acknowledgment? Philippians 2:3 says to count others more significant than yourself &mdash; a practical outworking is making sure the people who contributed to your success are visible, not absorbed into your reputation.",
      "In conversations, practice the discipline of genuine interest: ask questions and listen more than you speak. The humble person is more curious about others than about being understood herself. Try to spend at least half of any social conversation asking questions and listening &mdash; not as a technique but as a genuine desire to know the person in front of you.",
    ],
    anchor:
      "Philippians 2:3 — In humility count others more significant than yourselves.",
  },
  {
    number: "05",
    title: "Meditating on the Kenosis",
    summary:
      "The kenotic hymn of Philippians 2 as a daily prayer and imaginative exercise &mdash; letting the shape of Christ&rsquo;s self-emptying become the shape of your own desires.",
    steps: [
      "Read Philippians 2:5-11 every morning for two weeks. Do not rush. After reading, sit for two minutes with one question: where in my life today am I being asked to not grasp, not leverage, not insist on my rights or status? Let a specific situation come to mind.",
      "Use the incarnation as a concrete imaginative anchor. God became an infant. The maker of all things submitted to the authority of Roman law. The one who sustains the universe washed feet and then died without protest. Let the sheer scale of this descent do its work on whatever feels costly about your own lowliness today.",
      "Notice the sequence of the kenosis: Jesus emptied himself of privilege, not identity. He remained fully himself &mdash; his character, his love, his authority &mdash; even as he relinquished status. Humility is not self-annihilation; it is the freedom to be fully yourself without needing others to recognize it. Pray for that freedom specifically.",
      "Close each day&rsquo;s reading with the doxology of verse 11: &ldquo;Jesus Christ is Lord, to the glory of God the Father.&rdquo; If Christ is Lord, you are not. Say this not as a formula but as a release: the pressure of self-management, reputation management, and outcome control belongs to the Lord, not to you.",
    ],
    anchor:
      "Philippians 2:7-8 — He emptied himself, by taking the form of a servant... he humbled himself by becoming obedient to the point of death.",
  },
  {
    number: "06",
    title: "Cultivating a Teachable Spirit",
    summary:
      "Intellectual and spiritual humility &mdash; the practice of holding your conclusions loosely, learning from those who disagree, and staying genuinely open to being wrong.",
    steps: [
      "Once a month, spend time with a book, podcast, or person who represents a position you disagree with &mdash; not to win the argument but to genuinely understand the strongest version of the opposing view. The humble person can articulate why thoughtful people disagree with her; the proud person can only rehearse why she is right.",
      "Practice the phrase &ldquo;I might be wrong about this&rdquo; in low-stakes conversations before using it in high-stakes ones. The goal is not epistemic surrender but the genuine, habitual openness to having missed something. The person who cannot say &ldquo;I was wrong&rdquo; has made her opinions into her identity.",
      "Identify one belief or position you hold with unusual fervor and ask: what would I need to see to change my mind about this? If the answer is &ldquo;nothing,&rdquo; that is not conviction; it is pride wearing conviction&rsquo;s face. Genuine conviction has reasons, and reasons can in principle be outweighed by better reasons.",
      "In prayer, regularly confess intellectual pride &mdash; the specific ways you have been impatient with those who understand less than you, contemptuous of those who believe differently, dismissive of wisdom from outside your tradition. Receive the corrective of 1 Corinthians 8:1: &ldquo;Knowledge puffs up, but love builds up.&rdquo;",
    ],
    anchor:
      "1 Corinthians 8:1 — Knowledge puffs up, but love builds up.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Andrew Murray",
    role: "Humility: The Beauty of Holiness",
    quote:
      "Humility is not so much a grace or virtue for which we are to strive, as it is the root of which all grace grows. It is the displacement of self by the enthronement of God. Where God is all, self is nothing.",
    bio: "Andrew Murray was a nineteenth-century South African pastor whose book Humility (1895) remains one of the most concentrated treatments of the virtue in evangelical literature. Murray&rsquo;s central thesis is that humility is not one virtue alongside others but the foundational disposition from which all genuine Christian character flows. He traced the failure of Christian community almost always to hidden pride &mdash; the subtle competition for status, the resentment of uncredited service, the exhausting management of others&rsquo; opinions. His remedy was not self-improvement but sustained attention to Jesus: the person absorbed in Christ simply has less room left for self-preoccupation. Murray&rsquo;s own long pastoral ministry in a remote corner of South Africa gave his writing the credibility of someone who had practiced what he prescribed.",
  },
  {
    name: "C.S. Lewis",
    role: "Mere Christianity — Pride as the Great Sin",
    quote:
      "According to Christian teachers, the essential vice, the utmost evil, is Pride. Unchastity, anger, greed, drunkenness, and all that, are mere fleabites in comparison: it was through Pride that the devil became the devil: Pride leads to every other vice: it is the complete anti-God state of mind.",
    bio: "C.S. Lewis&rsquo;s chapter on pride in Mere Christianity is perhaps the most widely read diagnosis of the vice in modern Christianity. Lewis argues that pride is unique among sins in being entirely competitive &mdash; it is not the desire for more things but the desire to have more than others. You cannot be proud in a vacuum; pride requires a comparison. This means pride is inherently relational, inherently destructive of the community it inhabits, and inherently antagonistic to the God whose greatness it must always be trying to surpass. Lewis also wrote memorably about genuine humility as self-forgetfulness rather than self-deprecation, and his portrait of the cheerful, interested, outward-looking humble person has shaped how a generation understands what the virtue actually looks like.",
  },
  {
    name: "Bernard of Clairvaux",
    role: "The Steps of Humility and Pride",
    quote:
      "Humility is a virtue by which a man knowing himself as he truly is, abases himself. The beginning of pride is to depart from God; the beginning of humility is to return to him.",
    bio: "Bernard of Clairvaux was a twelfth-century Cistercian abbot and one of the most influential figures in medieval Christianity. His treatise The Steps of Humility and Pride traces twelve steps of pride and twelve corresponding steps of humility, tracing the movement of the soul either away from or toward self-knowledge and God. Bernard saw humility and self-knowledge as inseparable: the person who truly knows herself &mdash; her creatureliness, her dependence, her sinfulness, and her dignity as made in God&rsquo;s image &mdash; is naturally humble. Pride, by contrast, is always a form of self-ignorance: the proud person has not looked clearly at themselves or at God. Bernard&rsquo;s influence on Western mystical theology and his integration of rigorous self-examination with passionate love for God shaped both Catholic and Protestant approaches to the interior life.",
  },
  {
    name: "John Stott",
    role: "The Cross of Christ — Humility at the Center",
    quote:
      "Every time we look at the cross Christ seems to say to us, &lsquo;I am here because of you. It is your sin I am bearing, your curse I am suffering, your debt I am paying, your death I am dying.&rsquo; Nothing in history or in the universe cuts us down to size like the cross.",
    bio: "John Stott was a twentieth-century Anglican evangelical whose ministry spanned decades of global influence as a preacher, writer, and leader of the Lausanne Movement. His theology was consistently cross-centered, and he understood the cross as the permanent, sufficient antidote to all forms of pride. In The Cross of Christ he argues that every encounter with the cross is an encounter with the measure of one&rsquo;s own condition: the cross shows what sin costs, what grace requires, and what love does. The person who has truly seen the cross &mdash; not as a symbol but as the place where the Son of God died for specific, enumerable sins &mdash; is not easily puffed up. Stott himself was noted by those who knew him for exactly the quality Lewis described: genuine interest in others, warm curiosity, and a consistent habit of pointing attention away from himself.",
  },
  {
    name: "Thomas Aquinas",
    role: "Summa Theologica — The Structure of Humility",
    quote:
      "Humility restrains the appetite from aiming at great things against right reason, while it belongs to magnanimity to urge the mind to great things in accord with right reason.",
    bio: "Thomas Aquinas gave the most systematic account of humility in the Christian tradition, locating it within his broader theology of the virtues and clarifying its relationship to magnanimity &mdash; the virtue of great-souled pursuit of excellence. For Aquinas, humility is not the opposite of greatness but its precondition: the humble person does not aspire to less than she is capable of but aspires to nothing beyond what right reason and grace warrant. This distinction saves humility from becoming an excuse for underachievement or false modesty. The Thomistic tradition&rsquo;s careful distinction between pride (claiming more than you are), humility (an accurate account of what you are), and magnanimity (full use of what you are) has proven durable across centuries of Christian ethical reflection.",
  },
  {
    name: "Tim Keller",
    role: "The Freedom of Self-Forgetfulness",
    quote:
      "The essence of gospel-humility is not thinking more of myself or thinking less of myself, it is thinking of myself less. Gospel-humility is not needing to think about myself. Not needing to connect every experience to myself. True gospel-humility means I stop connecting every experience to myself, and instead I am free to love God and others without self-consciousness.",
    bio: "Tim Keller, the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential evangelical voices of the early twenty-first century, argued that gospel-humility is a distinct category different from both low self-esteem and high self-esteem. In The Freedom of Self-Forgetfulness he draws on 1 Corinthians 4 to describe a self that is no longer &ldquo;on trial&rdquo; &mdash; that has received its verdict from God and therefore does not need the verdict of others. This frees the person from the exhausting project of impression management and from the equally exhausting counter-project of self-deprecation. Keller&rsquo;s account has been especially formative for urban professionals shaped by achievement culture, for whom both self-promotion and self-flagellation are deeply familiar patterns and gospel-humility is genuinely strange.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Philippians 2:3-8",
    text: "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others. Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    reflection:
      "The command to humility is embedded in the narrative of Christ&rsquo;s kenosis &mdash; the instruction and the example arrive together. Paul does not ask for an exercise of willpower but for a mind: have this mind, the mind of Christ. The question the passage poses is not &ldquo;am I trying harder to be humble?&rdquo; but &ldquo;am I oriented toward Christ in a way that produces his disposition in me?&rdquo;",
  },
  {
    reference: "James 4:6-10",
    text: "God opposes the proud but gives grace to the humble. Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded... Humble yourselves before the Lord, and he will exalt you.",
    reflection:
      "The sequence here is important: grace flows to the humble, and humility is the condition for nearness to God. But the passage also frames pride as a point of entry for the enemy &mdash; the proud person is fighting God and has left a door open to the one who originally fell through pride. Humbling oneself is therefore simultaneously a movement toward God and away from spiritual danger.",
  },
  {
    reference: "Matthew 5:3",
    text: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    reflection:
      "The opening beatitude is the hinge on which the entire Sermon on the Mount turns. Poverty of spirit is not emotional depletion; it is the honest acknowledgment of spiritual bankruptcy before God &mdash; the antithesis of the Pharisee who thanks God that he is not like other men. To be poor in spirit is to come to God with empty hands, and that emptiness is precisely what the kingdom fills. The blessing is not for those who feel humble but for those who are actually, accurately aware of their need.",
  },
  {
    reference: "1 Peter 5:5-6",
    text: "Clothe yourselves, all of you, with humility toward one another, for God opposes the proud but gives grace to the humble. Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you.",
    reflection:
      "The clothing metaphor is deliberate: humility is not a feeling but a garment, something you consciously put on every morning. The double movement &mdash; humility toward one another horizontally and humility under God&rsquo;s hand vertically &mdash; shows that the two are inseparable. And the promise is not that the humble will be comfortable but that they will be exalted &mdash; at God&rsquo;s time, in God&rsquo;s way.",
  },
  {
    reference: "Matthew 11:29",
    text: "Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.",
    reflection:
      "Jesus describes himself as &ldquo;gentle and lowly in heart&rdquo; &mdash; the only place in the Gospels where he explicitly names his own character. The invitation is not to learn a method but to learn from a person. And the promised result is rest: the person who has taken Christ&rsquo;s yoke, shaped by his gentleness and lowliness, is freed from the crushing weight of self-assertion and self-protection that makes the proud soul perpetually exhausted.",
  },
  {
    reference: "John 13:14-15",
    text: "If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example, that you also should do just as I have done to you.",
    reflection:
      "The foot-washing is not metaphor but instruction: do this. The community Jesus is forming is one in which the willingness to perform the lowest service is the mark of greatness. The argument is from the greater to the lesser: if the Lord could stoop without loss of dignity, his servants have no excuse for protecting theirs. The example strips away every appeal to status, role, or station as grounds for refusing the menial task.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "bv2O7MF-TxI", title: "What Is Christian Humility? — Philippians 2" },
  { videoId: "3qSrQNYiB1w", title: "The Kenosis of Christ and the Call to Self-Emptying" },
  { videoId: "IDy2hJhf8nU", title: "Andrew Murray on Humility as the Root of All Virtue" },
  { videoId: "eLmHDOTQu_0", title: "C.S. Lewis: Pride Is the Great Sin" },
  { videoId: "RB-XeYm44vM", title: "Tim Keller: The Freedom of Self-Forgetfulness" },
  { videoId: "0bWfaO7bvb4", title: "God Opposes the Proud — James 4 and 1 Peter 5" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianHumilityPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<HMLEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [prideMoment, setPrideMoment] = useState("");
  const [humbleResponse, setHumbleResponse] = useState("");
  const [freeingTruth, setFreeingTruth] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as HMLEntry[]);
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
    if (!prideMoment.trim()) return;
    const entry: HMLEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      prideMoment: prideMoment.trim(),
      humbleResponse: humbleResponse.trim(),
      freeingTruth: freeingTruth.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPrideMoment("");
    setHumbleResponse("");
    setFreeingTruth("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? "rgba(107, 79, 187, 0.14)" : "transparent",
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
              Character &amp; Virtue
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Clothed with Humility: The Foundation of Christian Character
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Humility is not thinking less of yourself &mdash; it is thinking of yourself less.
              The kenotic pattern of Philippians 2 shows the shape of the Christian life: the one
              who was in the form of God took the form of a slave, and in that downward movement
              showed us what it means to be truly human. This guide explores the theology, the
              witnesses, the Scriptures, and the practices of a virtue that is the root of all
              others.
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
                &ldquo;Clothe yourselves, all of you, with humility toward one another, for God
                opposes the proud but gives grace to the humble.&rdquo;
              </p>
              <p style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600 }}>1 Peter 5:5</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={tabButtonStyle(tab === t)}
              >
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Before humility is a discipline it is a theology &mdash; a truth about Christ that
                makes lowliness the most appropriate response to reality. These seven studies move
                from the kenosis of Philippians 2 through the foot-washing of John 13, the
                Beatitudes, and the spiritual warfare of pride.
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
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: 14,
                      lineHeight: 1.35,
                    }}
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
                        background: "rgba(107, 79, 187, 0.08)",
                        border: `1px solid rgba(107, 79, 187, 0.28)`,
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
                  The kenosis of Philippians 2, God&rsquo;s opposition to the proud, the
                  foot-washing of John 13, the poverty of spirit in the Beatitudes, Murray&rsquo;s
                  displacement of self &mdash; these are not separate teachings but one doctrine
                  seen from different angles. Humility is the shape the Christian life takes when
                  the self has found a better center than itself. Explore its complement in{" "}
                  <Link
                    href="/christian-kindness"
                    style={{ color: PURPLE, textDecoration: "underline" }}
                  >
                    Christian Kindness
                  </Link>
                  , or see how it shapes service in{" "}
                  <Link
                    href="/christian-vocation"
                    style={{ color: PURPLE, textDecoration: "underline" }}
                  >
                    Christian Service
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
                Humility cannot be achieved by effort, but it can be cultivated by practice &mdash;
                by directing attention away from the self and toward God and others. These six
                practices are the structures through which the Spirit&rsquo;s work of self-emptying
                finds traction in ordinary life.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div
                    style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}
                  >
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
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                  >
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
                      color: PURPLE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${PURPLE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the paradox
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The central paradox of humility is that trying to become humble is itself a form
                  of pride &mdash; you have made self-improvement the project and yourself the
                  observer of your progress. The practices here are not exercises in becoming
                  humble; they are exercises in attending to God and others. Humility follows as
                  a consequence, not as an achievement. The Journal tab is built to help you notice
                  where pride is operating, not to grade your performance.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses whose lives and writing illuminate the shape of genuine humility
                &mdash; from a medieval monastery to an Oxford don&rsquo;s study, from a
                nineteenth-century South African parsonage to a Manhattan pulpit.
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
                  >
                    {voice.role}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(107, 79, 187, 0.07)",
                      borderLeft: `3px solid ${PURPLE}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${voice.quote}&rdquo;` }}
                  />
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
                Six passages on humility &mdash; to read slowly, to memorize, and to pray. Each
                does something specific: the kenosis passage gives the pattern, James and Peter
                give the stakes, Matthew 5:3 gives the foundation, 1 Peter 5 gives the clothing
                metaphor, and John 13 gives the enacted example.
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
                  Adoration: &ldquo;God, you are the one who opposes the proud and draws near to
                  the humble. You took the form of a servant.&rdquo; Confession: &ldquo;I have
                  been grasping where Christ released, insisting where he yielded, protecting what
                  he surrendered.&rdquo; Petition: &ldquo;Let me have this mind &mdash; the mind
                  that counts others more significant, that does not need to be seen, that finds
                  rest in your estimation rather than others&rsquo;.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The examen of pride lives here. Three questions: What was your pride moment today?
                How did you respond &mdash; or how would a humble response have looked? What truth
                frees you from that pride? Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s humility entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hml-pride" style={labelStyle}>
                    The pride moment
                  </label>
                  <textarea
                    id="hml-pride"
                    value={prideMoment}
                    onChange={(e) => setPrideMoment(e.target.value)}
                    placeholder="Where were you grasping, competing, defending status, seeking credit, or bristling at correction today?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hml-response" style={labelStyle}>
                    The humble response
                  </label>
                  <textarea
                    id="hml-response"
                    value={humbleResponse}
                    onChange={(e) => setHumbleResponse(e.target.value)}
                    placeholder="How did you actually respond? Or: what would a humble response have looked like? Be specific."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="hml-truth" style={labelStyle}>
                    The freeing truth
                  </label>
                  <textarea
                    id="hml-truth"
                    value={freeingTruth}
                    onChange={(e) => setFreeingTruth(e.target.value)}
                    placeholder="What truth about God, the gospel, or your identity in Christ is the antidote to this particular pride? Quote Scripture if you can."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!prideMoment.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !prideMoment.trim() ? BORDER : PURPLE,
                    color: !prideMoment.trim() ? MUTED : "#fff",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !prideMoment.trim() ? "not-allowed" : "pointer",
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
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}
                    >
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name a pride moment, describe a humble response, and name the truth that
                      frees you from it. The pattern you track becomes the pattern you change.
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
                            marginBottom: 12,
                          }}
                        >
                          <span style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem" }}>
                            {entry.date}
                          </span>
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
                            Pride moment
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.prideMoment}
                          </p>
                        </div>

                        {entry.humbleResponse && (
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
                              Humble response
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.humbleResponse}
                            </p>
                          </div>
                        )}

                        {entry.freeingTruth && (
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
                              Freeing truth
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.freeingTruth}
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
                Teaching to watch slowly &mdash; on the kenosis of Christ, the great sin of pride,
                Andrew Murray&rsquo;s foundational work on humility, and the freedom of
                self-forgetfulness.
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
              Humility as the way up
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The paradox at the center of the Christian life is that the downward way is the way
              up. God exalted the one who emptied himself. He gives grace to the humble and
              opposes the proud. He vindicates at the proper time those who have stopped
              vindicating themselves. To be clothed in humility is not to accept defeat; it is
              to move in the direction of the one who turned a cross into a throne.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link
                href="/christian-kindness"
                style={{ color: PURPLE, textDecoration: "underline" }}
              >
                Christian Kindness
              </Link>
              , deepen your prayer in{" "}
              <Link
                href="/christian-prayer-guide"
                style={{ color: PURPLE, textDecoration: "underline" }}
              >
                Christian Prayer
              </Link>
              , or see humility in community in{" "}
              <Link
                href="/christian-forgiveness"
                style={{ color: PURPLE, textDecoration: "underline" }}
              >
                Christian Forgiveness
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
