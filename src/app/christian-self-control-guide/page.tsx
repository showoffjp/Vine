"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

const STORAGE_KEY = "vine_selfcontrol_entries";

interface SCEntry {
  id: string;
  date: string;
  theImpulse: string;
  theStrategy: string;
  theOutcome: string;
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
    badge: "Galatians 5:23 — Enkrateia",
    title: "The Last Fruit: Spirit-Produced, Not White-Knuckled",
    paragraphs: [
      "Self-control comes last in Paul&rsquo;s famous list &mdash; &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; (Gal 5:22-23) &mdash; and its position is instructive. The Greek word is enkrateia: inner strength, mastery of one&rsquo;s desires and impulses, the governed self. The pagan moralists of Paul&rsquo;s world prized the same word; what Paul does with it is revolutionary. He files it not under achievements of the will but under fruit of the Spirit &mdash; something grown, not gritted; produced in the believer by the indwelling God, not manufactured by the believer for him.",
      "The distinction matters because the word fruit is doing real work. Fruit is organic &mdash; it grows from a root, in a season, by a life that flows through the branch. Nobody straps apples onto a tree. Galatians 5 locates the root precisely: &ldquo;walk by the Spirit, and you will not gratify the desires of the flesh&rdquo; (5:16). Self-control, in other words, is not the soul fighting alone against its appetites with clenched teeth; it is the overflow of a life increasingly occupied, directed, and empowered by the Spirit, in whom stronger desires gradually outcompete destructive ones.",
      "Yet fruit is not passivity &mdash; the same letter says &ldquo;those who belong to Christ Jesus have crucified the flesh with its passions and desires&rdquo; (5:24), an active, violent verb. The Christian account of self-control holds both truths: it is gift and task, grown and exercised, Spirit-produced and believer-practiced. The error on one side is white-knuckled moralism, which produces exhausted hypocrites; the error on the other is passive quietism, which produces excused indulgence. The path between them is the oldest formula in the spiritual life: work, because God is at work in you (Phil 2:12-13).",
    ],
    callout: {
      label: "Enkrateia",
      text: "The governed self &mdash; listed last among the fruit, and listed as fruit: grown from the Spirit&rsquo;s life, not strapped on by the will. Gift and task at once &mdash; work, because God is at work in you.",
    },
  },
  {
    badge: "Proverbs 25:28 — The Broken Wall",
    title: "A City Whose Walls Are Broken Through",
    paragraphs: [
      "&ldquo;Like a city whose walls are broken through is a person who lacks self-control&rdquo; (Prov 25:28). In the ancient world the image needed no explanation: a city&rsquo;s wall was its life. Within sound walls there could be markets, children in the streets, stored grain, sleep. A breached wall meant that everything inside lay open to whatever wished to enter &mdash; raiders, wolves, fire. The proverb&rsquo;s claim is that self-control is not one virtue among many but the wall around all the others: the structural integrity that makes every other good thing in a life defensible.",
      "The image diagnoses with precision. A person without self-control is not necessarily wicked; they are exposed. Whatever impulse arrives &mdash; the flash of rage, the craving, the lust, the urge to spend, the pull of the screen &mdash; simply walks in, because nothing stands at the gate. And the breach is rarely dramatic at first: walls fail at the neglected places, the small compromises mortared over, the watch not kept. Most collapses of character that look sudden from outside were years of unrepaired masonry.",
      "But the proverb also implies hope, because walls can be rebuilt. Nehemiah&rsquo;s Jerusalem is the Old Testament&rsquo;s great picture of it: rubble surveyed honestly by night (Neh 2:13-15), each family assigned its section, the work done with a tool in one hand amid active opposition &mdash; and a wall restored in fifty-two days that had lain broken for generations. Rebuilding self-control follows the same pattern: honest survey of the breaches, one section at a time, expecting opposition, in company rather than alone. No one rebuilds a city wall by feeling bad about the rubble.",
    ],
    callout: {
      label: "The wall",
      text: "Self-control is the wall around every other virtue &mdash; without it, whatever impulse arrives simply walks in. And walls can be rebuilt: honest survey, one section at a time, in company, expecting opposition.",
    },
  },
  {
    badge: "1 Corinthians 9 — The Athlete",
    title: "I Discipline My Body: The Athlete Metaphor",
    paragraphs: [
      "&ldquo;Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it. Every athlete exercises self-control in all things&hellip; So I do not run aimlessly; I do not box as one beating the air. But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified&rdquo; (1 Cor 9:24-27). Paul wrote this to Corinth, host city of the Isthmian Games, where readers had watched athletes submit to ten months of sworn training for a pine wreath. His point lands by comparison: they do it for a crown that wilts in a week &mdash; &ldquo;we an imperishable&rdquo; (9:25).",
      "The metaphor rehabilitates a word modern Christians often fear: training. An athlete does not run the race by willpower summoned on race day; she runs it by a thousand unglamorous mornings that made race day possible. Likewise, self-control in the moment of temptation is almost never won in the moment of temptation; it is won upstream, in habits of prayer, Scripture, sleep, accountability, and pre-decided boundaries that the moment merely reveals. Willpower is a sprinter&rsquo;s burst; training is the distance runner&rsquo;s base. The Christian life is not a hundred meters.",
      "Notice too the metaphor&rsquo;s sobering edge: Paul applies the discipline to himself &mdash; the apostle, the church planter &mdash; &ldquo;lest after preaching to others I myself should be disqualified.&rdquo; Spiritual privilege confers no exemption; gifting is not character; yesterday&rsquo;s race wins nothing today. And its motivating edge: the discipline is not punishment of the body but stewardship of it, aimed at a prize. Biblical self-control is never renunciation for its own sake; it is saying no to the lesser to free the whole person for the greater &mdash; eyes on the wreath that does not wilt.",
    ],
    callout: {
      label: "Training vs. trying",
      text: "Self-control in the moment of temptation is won upstream of the moment &mdash; in the thousand unglamorous mornings of training. Athletes endure it for a wreath that wilts in a week; we for an imperishable one.",
    },
  },
  {
    badge: "Genesis 39 — Joseph",
    title: "He Left His Garment and Fled: Flight as Strategy, Not Weakness",
    paragraphs: [
      "Joseph in Potiphar&rsquo;s house faced temptation with everything in its favor: he was young, far from home and accountability, propositioned not once but &ldquo;day after day&rdquo; (Gen 39:10) by a woman with power over his career, in an empty house with no witnesses (39:11). His resistance had two movements worth studying. The first was theological framing done in advance: &ldquo;How then can I do this great wickedness and sin against God?&rdquo; (39:9). Before the crisis, Joseph had already named what the act would be &mdash; not an indiscretion, not a victimless secret, but wickedness against the God who saw him. Temptation&rsquo;s first business is always renaming; Joseph had pre-empted the rename.",
      "The second movement was his feet: &ldquo;she caught him by his garment, saying, &lsquo;Lie with me.&rsquo; But he left his garment in her hand and fled and got out of the house&rdquo; (39:12). He did not stay to debate, to prove he could handle proximity, to let the moment build while he searched for a polite exit. He ran &mdash; leaving his coat, his dignity, and as it turned out his freedom, since the abandoned garment became the evidence for the lie that imprisoned him. Scripture presents this not as panic but as wisdom, and makes it a standing command: &ldquo;Flee from sexual immorality&rdquo; (1 Cor 6:18); &ldquo;flee youthful passions&rdquo; (2 Tim 2:22). Some enemies are fought; this one is outrun.",
      "Our culture reads flight as weakness &mdash; the strong person, we assume, can stay in the situation and master it. The Bible&rsquo;s realism is harder and kinder: certain temptations are not mastered at close range by anyone, and the truly strong person is the one who knows it. Building the exit before the moment &mdash; the meeting kept public, the phone left outside the bedroom, the route home that avoids the old door &mdash; is not paranoia; it is Joseph&rsquo;s strategy. He lost his coat and kept his integrity. The man who stays to prove his strength usually keeps his coat.",
    ],
    callout: {
      label: "The flight",
      text: "Joseph named the sin in advance and ran when it reached for him &mdash; and Scripture makes his move a standing command: flee. Certain temptations are not mastered at close range by anyone; the strong person is the one who knows it.",
    },
  },
  {
    badge: "Matthew 4 — The Wilderness",
    title: "It Is Written: Scripture Against Impulse",
    paragraphs: [
      "After forty days of fasting, at the point of maximum bodily weakness, Jesus faced the tempter &mdash; and answered all three temptations the same way: &ldquo;It is written&rdquo; (Matt 4:4, 7, 10). Not argument, not negotiation, not introspection about how the suggestion made him feel &mdash; a memorized word from Deuteronomy, spoken aloud, three times. The Son of God, who could have improvised infinite rebuttals, chose to stand on the same resource available to every believer with a Bible: the stored word deployed against the live impulse.",
      "Watch what each temptation actually proposed: legitimate desires by illegitimate routes. Bread is good &mdash; but not at the price of taking the shortcut around the Father&rsquo;s timing. Vindication is coming &mdash; but not by stunt. The kingdoms are his &mdash; but not by worshiping the rival. This is temptation&rsquo;s permanent grammar, and self-control&rsquo;s permanent task: rarely to deny that the desired thing is good, but to refuse the corrupt route to it. Each &ldquo;it is written&rdquo; re-anchored Jesus in a truer account of reality than the one the tempter was narrating &mdash; man lives by God&rsquo;s word; God is not to be tested; God alone is worshiped.",
      "The psalmist had described the method centuries earlier: &ldquo;I have stored up your word in my heart, that I might not sin against you&rdquo; (Ps 119:11). Stored &mdash; in advance, before the wilderness, when storing felt unnecessary. The practical implication for self-control is direct: the believer who memorizes nothing brings nothing to the moment of impulse except willpower and mood, and the impulse usually has both outgunned. The believer who has stored specific words against specific weaknesses walks into the wilderness armed. The sword of the Spirit (Eph 6:17) is the only weapon in the armor of God &mdash; and it must be in the hand, not in the drawer, when the suggestion comes.",
    ],
    callout: {
      label: "It is written",
      text: "Jesus met impulse with the stored word, spoken aloud, three times &mdash; legitimate desires refused at the illegitimate route. The believer who memorizes nothing brings only willpower and mood to the moment; the impulse has both outgunned.",
    },
  },
  {
    badge: "Titus 2 — Every Age, Every Station",
    title: "Commanded for Everyone: Self-Control Across the Whole Church",
    paragraphs: [
      "Titus 2 reads like a roll call, and one word keeps sounding. Older men are to be &ldquo;sober-minded, dignified, self-controlled&rdquo; (2:2). Older women are to teach what is good. Young women are &ldquo;to be self-controlled&rdquo; (2:5). Young men &mdash; given exactly one imperative, as if Paul knew where to economize &mdash; are urged &ldquo;to be self-controlled&rdquo; (2:6). Even the elder&rsquo;s qualifications in the previous chapter require it: &ldquo;self-controlled, upright, holy, and disciplined&rdquo; (1:8). The Greek family of words (sophron, sophrosyne &mdash; sound-minded, temperate) threads the whole letter.",
      "The universality is the point. Self-control is not a young man&rsquo;s issue, a season of life, or a specialty for those with &ldquo;addictive personalities&rdquo;; it is commanded for every age and station, because every age and station has its own characteristic intemperances. The young man&rsquo;s appetites are obvious; less discussed are the older man&rsquo;s cynicism and rigidity, the tongue&rsquo;s incontinence at any age (Jas 3:2), the spending, the screen, the grievance nursed for decades. Nobody graduates. The forms of the battle change; the wall must be manned for life.",
      "And Titus gives the reason the whole church&rsquo;s self-control matters: mission. Each command is attached to a public purpose &mdash; &ldquo;that the word of God may not be reviled&rdquo; (2:5), &ldquo;so that an opponent may be put to shame, having nothing evil to say about us&rdquo; (2:8), &ldquo;so that in everything they may adorn the doctrine of God our Savior&rdquo; (2:10). An undisciplined church is an unpersuasive church; a community of governed lives adorns the gospel like a setting adorns a stone. Self-control, in Titus, is not private self-improvement. It is apologetics.",
    ],
    callout: {
      label: "Nobody graduates",
      text: "Older men, older women, young women, young men, elders &mdash; the command lands on every roll call in Titus 2, each time with a public purpose: that the word of God not be reviled. Self-control is apologetics.",
    },
  },
  {
    badge: "The Present Age — Attention &amp; the Feed",
    title: "Self-Control in the Digital Age: Attention, Scrolling, Dopamine",
    paragraphs: [
      "Every generation fights for self-control, but ours fights an opponent with a research budget. The devices in our pockets are not neutral tools that happen to tempt; they are engineered systems whose business model is the capture and resale of attention, refined by continuous experiment on billions of users. Infinite scroll removes the natural stopping point; variable rewards &mdash; the same intermittent-reinforcement schedule that powers slot machines &mdash; keep the thumb pulling for the occasional jackpot of novelty; notifications interrupt with manufactured urgency; autoplay decides for you. The dopamine system that God designed to motivate the pursuit of good things has been studied, mapped, and rented out.",
      "This changes the practical shape of enkrateia. The broken-walled city of Proverbs 25:28 now describes an attention economy customer: whatever wishes to enter, enters &mdash; outrage, envy via curated lives, sexualized content, ambient anxiety, the sheer fragmentation of a mind that checks a device hundreds of times a day. The losses are spiritual before they are productivity-related: prayer requires sustained attention; Scripture meditation requires it; love&rsquo;s attentiveness to another person requires it. A colonized attention is a discipleship problem, because formation requires the very faculty being strip-mined.",
      "The response is neither panic nor purity theater but the old strategies applied to the new wilderness. Joseph&rsquo;s flight becomes architecture: the phone out of the bedroom, the apps deleted rather than resisted hourly, the grayscale screen, the feeds replaced by chosen reading &mdash; pre-decided exits, because nobody outwills a slot machine at close range. The athlete&rsquo;s training becomes attentional: deliberately sustained reading, unhurried prayer, boredom endured without reaching for the rectangle &mdash; rebuilding the capacity the scroll dissolves. And the fruit-of-the-Spirit truth governs it all: the goal is not a digital monasticism that merely subtracts, but a life so occupied with better loves that the feed loses the argument.",
    ],
    callout: {
      label: "The rented dopamine",
      text: "Ours is the first generation whose temptations are A/B tested. Nobody outwills a slot machine at close range &mdash; the old strategies apply: flee by architecture, train the attention, and crowd the feed out with better loves.",
    },
  },
  {
    badge: "Titus 2:11-12 — Grace That Teaches",
    title: "Grace-Powered vs. Willpower-Powered Change",
    paragraphs: [
      "Immediately after Titus 2&rsquo;s roll call of self-control comes the engine that drives it: &ldquo;For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age&rdquo; (Titus 2:11-12). Read it slowly: grace teaches us to say no. Not law, not shame, not the gritted will &mdash; grace. The same kindness of God that saves is the kindness that trains, and the order is unbreakable: the indicative of salvation (grace has appeared) grounds the imperative of self-control (renounce, live).",
      "Willpower-powered change and grace-powered change can look identical for the first two weeks; their difference shows in month three. Willpower runs on self-image &mdash; I am the kind of person who doesn&rsquo;t do this &mdash; and is therefore brittle: every failure attacks the power source itself, triggering the shame spiral in which the failed dieter eats and the failed abstainer binges. Grace runs on a love already secured &mdash; I am forgiven, owned, and being remade by Someone whose commitment to me does not fluctuate with my performance &mdash; and is therefore resilient: failure becomes information and occasion for repentance rather than evidence of hopelessness. Shame says: you failed, hide. Grace says: you failed, come.",
      "The deepest mechanics are in the affections. Thomas Chalmers&rsquo; famous phrase names it: the expulsive power of a new affection. Appetites are rarely argued out of the heart; they are crowded out by stronger loves. Grace does exactly this &mdash; it does not merely forbid the lesser pleasure but reveals a greater one, until sin begins to lose not just the battle of the will but the battle of the taste. This is why the long war on an entrenched habit is fought less with refusals than with worship: the no grows strong in exact proportion to the yes behind it.",
    ],
    callout: {
      label: "Grace teaches no",
      text: "Willpower runs on self-image and shatters at failure; grace runs on a love already secured and turns failure into repentance instead of a spiral. The no grows strong in exact proportion to the yes behind it.",
    },
  },
  {
    badge: "After the Fall — Failure and the Gospel",
    title: "What to Do After Losing Control",
    paragraphs: [
      "Any honest theology of self-control must include a theology of failure, because everyone who fights this battle loses skirmishes &mdash; the apostle&rsquo;s own anguished &ldquo;the evil I do not want is what I keep on doing&rdquo; (Rom 7:19) stands in Scripture as permanent companionship for the defeated. The decisive question is not whether you will fall but what you do in the first hour afterward, because that hour determines whether a stumble becomes a spiral. The enemy&rsquo;s entire post-failure strategy is compressed into one move: turn the believer away from God in shame at exactly the moment grace is most needed. &ldquo;You can&rsquo;t pray now. Clean up first. You hypocrite.&rdquo;",
      "The gospel&rsquo;s protocol is the opposite, and it is concrete. Go directly to God, immediately, mid-shame: &ldquo;if we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness&rdquo; (1 John 1:9) &mdash; faithful and just, not reluctant and disgusted. Receive the verdict already rendered: &ldquo;there is therefore now no condemnation for those who are in Christ Jesus&rdquo; (Rom 8:1) &mdash; now, not after a probationary period of feeling bad. Tell a trusted person (Jas 5:16) &mdash; secrecy is the incubator of relapse, and confession breaks the isolation where the spiral feeds. Then get up: &ldquo;the righteous falls seven times and rises again&rdquo; (Prov 24:16) &mdash; the righteous one is not the one who never falls but the one who keeps rising.",
      "Finally, let the failure teach. Wise believers conduct an autopsy without condemnation: what was the chain &mdash; the skipped sleep, the unguarded hour, the unconfessed loneliness, the first small yes &mdash; that led to the fall? Each answer becomes next week&rsquo;s rebuilt section of wall: an earlier exit, a stored verse, a standing check-in. And underneath all tactics, the long hope holds: &ldquo;he who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Phil 1:6). The fight for self-control is real, lifelong, and losable in the skirmish &mdash; and already won in the war, by Someone whose grip on you does not slip when yours does.",
    ],
    callout: {
      label: "The first hour",
      text: "The hour after failure decides whether a stumble becomes a spiral. The protocol: confess immediately (1 John 1:9), receive no-condemnation now (Rom 8:1), tell someone (Jas 5:16), rise (Prov 24:16), and learn the chain.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Impulse Map &mdash; Naming Triggers Before They Name You",
    summary:
      "A foundational practice of self-knowledge: charting when, where, and under what conditions your characteristic impulses strike, so the battle can be fought upstream &mdash; where it is actually winnable.",
    steps: [
      "For one week, log every significant impulse &mdash; the urge resisted and the urge obeyed alike: the scroll, the snap of anger, the drink, the purchase, the lust, the third helping. Note time, place, mood, and what happened just before. No judgment yet; cartographers don&rsquo;t scold the terrain.",
      "Look for the pattern the acronym HALT names: was I Hungry, Angry, Lonely, Tired? Most losses of control are downstream of an unmet ordinary need. The 10 p.m. failure was often decided by the 6 a.m. schedule.",
      "Identify your hour and your door &mdash; the time of day you are weakest and the route (physical or digital) by which the temptation usually arrives. Almost everyone has both; almost no one has named them.",
      "Bring the map into prayer: &ldquo;Search me, O God, and know my heart! Try me and know my thoughts!&rdquo; (Ps 139:23). Confess what the map reveals &mdash; not just the acts, but the neglects that set them up &mdash; and ask the Spirit for the watchfulness Jesus commanded: &ldquo;Watch and pray that you may not enter into temptation&rdquo; (Matt 26:41).",
      "Hand the map to the practices that follow: the flight plan targets the door, the stored word targets the hour, the training targets the unmet needs. Record what you learn in the Journal tab &mdash; the impulse, the strategy, the honest outcome.",
    ],
    anchor: "Matthew 26:41 &mdash; &ldquo;Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.&rdquo;",
  },
  {
    number: "02",
    title: "The Flight Plan &mdash; Pre-Built Exits in Joseph&rsquo;s Tradition",
    summary:
      "Joseph did not improvise his escape; his theology was settled before the crisis and his feet finished the argument. This practice builds the exits in advance &mdash; because nobody designs a fire escape during the fire.",
    steps: [
      "For each major temptation on your impulse map, write a one-sentence Joseph statement in advance: what the act actually is, named before God &mdash; &ldquo;This would be wickedness against the God who sees me&rdquo; (Gen 39:9). Pre-naming defeats temptation&rsquo;s first move, which is always renaming.",
      "Design the physical exit: the route, the room, the rule that removes you from close range. Phone charges in the kitchen; no second drink poured; the meeting kept public; the app deleted, not minimized. Make each exit a standing decision made once, not a resolution renewed daily &mdash; standing decisions don&rsquo;t tire.",
      "Rehearse the first ninety seconds. Decide now exactly what you will do when the impulse arrives: stand up, leave the room, speak a stored verse aloud, call or text your named person. The moment of temptation is the worst possible time to be choosing a response; have one pre-loaded.",
      "Accept the cost of the coat. Joseph&rsquo;s flight looked like loss &mdash; the garment left behind, the awkwardness, the explanation owed. Your exits will cost something too: appearing rude, missing the party, the inconvenience of the dumber phone. Decide beforehand that the coat is cheap and integrity is not.",
      "Review the plan monthly. Temptation adapts; so must the exits. A door you sealed may have quietly reopened in a new form &mdash; the audit is part of the watch.",
    ],
    anchor: "2 Timothy 2:22 &mdash; &ldquo;So flee youthful passions and pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart.&rdquo;",
  },
  {
    number: "03",
    title: "The Stored Word &mdash; Memorizing Scripture Against Specific Impulses",
    summary:
      "Jesus met each wilderness temptation with a memorized text spoken aloud. This practice builds the same armory: specific verses stored against your specific weaknesses, ready in the hand before the suggestion comes.",
    steps: [
      "Match verses to weaknesses, not just favorites to moods. Anger: &ldquo;Be slow to anger, for the anger of man does not produce the righteousness of God&rdquo; (Jas 1:19-20). Lust: &ldquo;Flee from sexual immorality&rdquo; (1 Cor 6:18). Craving and escape: &ldquo;God is faithful&hellip; he will also provide the way of escape&rdquo; (1 Cor 10:13). The feed: &ldquo;I will not be dominated by anything&rdquo; (1 Cor 6:12). Choose one verse per front, two fronts to start.",
      "Memorize by saying aloud, daily, for two weeks &mdash; morning and at your mapped weak hour. Write the verse on a card kept where the temptation lives: the wallet, the desk, the lock screen that replaced the app.",
      "Deploy aloud in the moment, as Jesus did. There is a reason &ldquo;it is written&rdquo; was spoken, not thought: the voiced word interrupts the impulse&rsquo;s monologue and re-anchors you in a truer account of reality. It will feel strange. Do it anyway.",
      "Pray the verse, don&rsquo;t just recite it: &ldquo;Lord, you said you would provide the way of escape &mdash; show me the one in this room.&rdquo; The word is a sword (Eph 6:17), and a sword is wielded in relationship to the Captain, not waved as a charm.",
      "Add one verse a month, retiring none. Over a year the armory becomes substantial &mdash; and the storing itself, Psalm 119:11 promises, does quiet work on the heart that no crisis ever sees.",
    ],
    anchor: "Psalm 119:11 &mdash; &ldquo;I have stored up your word in my heart, that I might not sin against you.&rdquo;",
  },
  {
    number: "04",
    title: "The Attention Rebuild &mdash; Retraining a Scrolled Mind",
    summary:
      "A training program for the digital-age front: rebuilding the capacity for sustained attention that the feed dissolves, because prayer, Scripture, and love all require the very faculty being strip-mined.",
    steps: [
      "Run a one-week attention audit: screen-time numbers retrieved honestly, checks-per-day counted, and one written sentence about what the totals make you feel. Data first; the numbers are usually more persuasive than any sermon.",
      "Change the architecture before testing the will: notifications off by default, the phone out of the bedroom and off the table at meals, the most compulsive apps deleted (reachable by browser friction if truly needed), home screen stripped to tools. Every removed cue is a battle that no longer needs to be fought.",
      "Train sustained attention daily like the athlete of 1 Corinthians 9: twenty minutes of unbroken reading on paper, or the slow Scripture meditation of one passage without a device in reach. Expect withdrawal restlessness for two weeks; it is the detraining reversing, and it passes.",
      "Practice deliberate boredom in the gaps &mdash; the queue, the kettle, the red light &mdash; without reaching for the rectangle. The gaps are where the mind consolidates, prays spontaneously, and notices other humans; they were colonized, and they can be repatriated.",
      "Fill the reclaimed hours on purpose &mdash; the walk, the friend, the psalm, the craft &mdash; or the vacuum will refill itself with the feed. The goal is not subtraction but exchange: a life so occupied with better loves that the slot machine loses the argument.",
    ],
    anchor: "1 Corinthians 6:12 &mdash; &ldquo;&lsquo;All things are lawful for me,&rsquo; but not all things are helpful. &lsquo;All things are lawful for me,&rsquo; but I will not be dominated by anything.&rdquo;",
  },
  {
    number: "05",
    title: "The Two-or-Three &mdash; Accountability That Actually Works",
    summary:
      "Secrecy is the incubator of every losing battle with impulse. This practice builds real accountability &mdash; not vague check-ins but confessed specifics with one or two trusted people, in the tradition of James 5:16.",
    steps: [
      "Choose one or two people of the same spiritual seriousness &mdash; not your whole small group, not an app, not someone who will flinch or gossip. The biblical pattern is confession &ldquo;to one another&rdquo; (Jas 5:16): mutual, so it is fellowship between strugglers rather than supervision by a parole officer.",
      "Tell them the actual battle in actual words at the first meeting. The single hardest and most healing step is replacing the fog (&ldquo;struggling with purity lately&rdquo;) with the fact. What is dragged into the light loses the power it had in the dark.",
      "Set a standing rhythm and standing questions: weekly or biweekly, fifteen minutes, the same three questions every time &mdash; How did the week go on your front? What was the chain when it went wrong? What are you asking God for? Standing questions prevent the slow drift into pleasant generalities.",
      "Agree on the emergency protocol: the text or call permitted at the moment of temptation, before the fall, with a pre-agreed reply. Most falls have a window of minutes in which one outside voice changes everything; build the wire before the window opens.",
      "Keep grace as the group&rsquo;s constitution. The response to a confessed failure is 1 John 1:9 and Proverbs 24:16 &mdash; cleansing and rising &mdash; never disgust, never the raised eyebrow that teaches the other to hide again. Accountability that shames produces better liars; accountability that graces produces freer saints.",
    ],
    anchor: "James 5:16 &mdash; &ldquo;Therefore, confess your sins to one another and pray for one another, that you may be healed.&rdquo;",
  },
  {
    number: "06",
    title: "The First Hour &mdash; A Gospel Protocol for After the Fall",
    summary:
      "What you do in the first hour after losing control determines whether a stumble becomes a spiral. This practice scripts that hour in advance, so shame never gets to improvise it for you.",
    steps: [
      "Go to God immediately &mdash; mid-shame, unclean, now. The enemy&rsquo;s whole post-failure strategy is &ldquo;clean up first, then pray&rdquo;; the gospel&rsquo;s is the reverse. Pray 1 John 1:9 in the first person: &ldquo;You are faithful and just; you forgive; you cleanse. I confess ___.&rdquo; Name the act without euphemism and without theatrics.",
      "Speak the verdict aloud against the spiral: &ldquo;There is therefore now no condemnation for those who are in Christ Jesus&rdquo; (Rom 8:1). Now &mdash; not after a probationary week of penitential misery. Feeling forgiven may lag the fact by days; act on the fact.",
      "Tell your two-or-three within twenty-four hours. Speed matters: confession aging into secrecy is how single failures compound into double lives. One sentence is enough; they know the protocol.",
      "Do the autopsy without condemnation, on paper: what was the chain &mdash; the skipped sleep, the cancelled check-in, the unguarded hour, the first small yes? Extract one concrete repair and add it to the flight plan or the map. The fall has already cost you; make it pay tuition.",
      "Rise and resume, deliberately unspectacularly: the next prayer, the next meal, the next duty. No grand new vows &mdash; the overcorrecting vow is usually shame in disguise and breaks fastest. &ldquo;The righteous falls seven times and rises again&rdquo; (Prov 24:16): the rising is the righteousness. Record the whole event honestly in the Journal tab, failure included &mdash; the record of risings is the record of grace.",
    ],
    anchor: "Proverbs 24:16 &mdash; &ldquo;For the righteous falls seven times and rises again, but the wicked stumble in times of calamity.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "John Owen",
    role: "The Mortification of Sin &mdash; Be Killing Sin or It Will Be Killing You",
    quote:
      "Do you mortify; do you make it your daily work; be always at it whilst you live; cease not a day from this work; be killing sin or it will be killing you&hellip; Sin aims always at the utmost; every time it rises up to tempt or entice, if it have its own way, it will go out to the utmost sin in that kind.",
    bio: "John Owen (1616-1683) was the towering theologian of English Puritanism &mdash; pastor, vice-chancellor of Oxford under Cromwell, advisor to parliaments, and author of a body of work so dense and penetrating that he is still called the theologian&rsquo;s theologian. His little book The Mortification of Sin (1656), drawn from sermons first preached to university students, remains the most influential treatment of the war on indwelling sin ever written in English. Owen&rsquo;s realism is bracing: sin is not a behavior to be managed but a living principle that &ldquo;aims always at the utmost&rdquo; &mdash; every lust, given its way, intends the worst version of itself &mdash; and therefore the believer&rsquo;s posture must be daily killing, never armistice. But Owen is equally ruthless against willpower religion. Mortification, he insists, is the work of the Spirit alone &mdash; &ldquo;all other ways and means without him are as a thing of nought&rdquo; &mdash; and self-made severities merely relocate sin while leaving its root watered. His method is relentlessly evangelical: load the conscience with the guilt of the sin, yes, but then look to Christ, for the cross is where sin&rsquo;s death was secured and faith in the crucified One is the instrument by which the Spirit does the killing. Owen buried eleven children and lived through plague, fire, civil war, and political ruin; his teaching on the governed life was forged where comfort was not available. Three centuries on, his one-sentence summary has lost none of its edge: be killing sin, or it will be killing you.",
  },
  {
    name: "Richard Foster",
    role: "Celebration of Discipline &mdash; The Disciplines as the Path of Liberation",
    quote:
      "The disciplines are God&rsquo;s way of getting us into the ground; they put us where he can work within us and transform us&hellip; A farmer is helpless to grow grain; all he can do is provide the right conditions for the growing of grain. He cultivates the ground, he plants the seed, he waters the plants, and then the natural forces of the earth take over and up comes the grain. This is the way it is with the Spiritual Disciplines.",
    bio: "Richard Foster (b. 1942) is a Quaker theologian whose 1978 book Celebration of Discipline almost single-handedly reintroduced evangelical Protestantism to the classical spiritual disciplines &mdash; meditation, fasting, simplicity, solitude, submission, and the rest &mdash; selling millions of copies and seeding an entire renewal movement, including the Renovar&eacute; ministry he founded. Foster&rsquo;s contribution to the theology of self-control is his farming metaphor, which dissolves the false choice between striving and passivity: a farmer cannot make grain grow, but he is not therefore idle &mdash; he plows, plants, and waters, providing the conditions under which growth happens by powers not his own. So with the disciplines: fasting does not earn holiness, fixed hours of prayer do not manufacture love, but they place the soul where God&rsquo;s grace can do what willpower cannot. This is enkrateia&rsquo;s practical engine room &mdash; the will&rsquo;s proper job is not to defeat the appetite in open combat (a battle it usually loses) but to keep choosing the practices that, over years, reorder the appetites themselves. Foster also named the stakes for the modern world with a sentence that has only grown truer: &ldquo;Superficiality is the curse of our age&hellip; The desperate need today is not for a greater number of intelligent people, or gifted people, but for deep people.&rdquo; Depth, his whole corpus argues, is not a temperament; it is the cumulative fruit of disciplined, grace-dependent practice.",
  },
  {
    name: "Dallas Willard",
    role: "The Spirit of the Disciplines; Renovation of the Heart &mdash; Grace Is Not Opposed to Effort",
    quote:
      "Grace is not opposed to effort, it is opposed to earning. Earning is an attitude. Effort is an action. Grace, you know, does not just have to do with forgiveness of sins alone&hellip; The true saint burns grace like a 747 burns fuel on takeoff.",
    bio: "Dallas Willard (1935-2013) was a professor of philosophy at the University of Southern California for nearly five decades and, from that unlikely chair, the most rigorous theologian of spiritual formation the modern evangelical world has produced. His central diagnosis bears directly on self-control: the Western church, he argued, has preached a &ldquo;gospel of sin management&rdquo; &mdash; forgiveness without transformation &mdash; and so produces converts who believe their character cannot actually change and are therefore perpetually surprised to be losing to their impulses. Against this he set the simple, demanding logic of training: you cannot behave on the spot like Christ without becoming, off the spot, the kind of person who can &mdash; and becoming that person is a matter of arranged practice, exactly as in athletics or music. His epigram cuts the knot that ties most Christians up: grace is not opposed to effort; it is opposed to earning. Effort is action; earning is attitude; the saint burns grace like a jet burns fuel. In The Spirit of the Disciplines and Renovation of the Heart he supplied the curriculum &mdash; solitude, silence, fasting, study, and the rest &mdash; understood not as merit but as indirect training: disciplines do for the soul what practice does for the pianist, making possible in the moment of pressure what direct willpower never could. Willard&rsquo;s personal serenity was legendary among those who knew him &mdash; the unhurried fruit, he would have said, of the very regimen he taught.",
  },
  {
    name: "Augustine of Hippo",
    role: "Confessions &mdash; Give Me Chastity, But Not Yet",
    quote:
      "As a youth I had been woefully at fault&hellip; I had prayed to you for chastity and said, &lsquo;Give me chastity and continence, but not yet.&rsquo; For I was afraid that you would answer my prayer at once and cure me too soon of the disease of lust, which I wanted satisfied, not quelled.",
    bio: "Augustine (354-430), bishop of Hippo in Roman North Africa, is the most influential theologian in Western Christian history &mdash; and, through his Confessions, the most honest. The famous half-prayer of his youth, &ldquo;give me chastity and continence, but not yet,&rdquo; remains the single most penetrating sentence ever written about the divided will: he wanted to want purity, while still wanting the disease satisfied &mdash; and his analysis of that condition (two wills in one man, the lower fed by habit until habit hardened into seeming necessity) anticipated by sixteen centuries what addiction science would describe. His liberation, recounted in Confessions Book VIII, came in a Milanese garden, weeping under a fig tree, when a child&rsquo;s voice chanting &ldquo;take and read&rdquo; sent him to Romans 13:13-14 &mdash; &ldquo;put on the Lord Jesus Christ, and make no provision for the flesh&rdquo; &mdash; and, he wrote, &ldquo;all the shadows of doubt were dispelled.&rdquo; Note what broke the chain: not a heroic act of will (he had attempted years of those) but a word received and a Person put on; Augustine became the great theologian of grace precisely because his own will had so thoroughly demonstrated its bankruptcy. His mature teaching gave the church its deepest account of disordered desire &mdash; sin as love bent toward lesser goods, the heart restless until it rests in God &mdash; and its corollary for every fighter of impulses: appetites are not finally suppressed but converted, healed by the greater sweetness. &ldquo;Late have I loved you, beauty so old and so new&rdquo; is the testimony of a man whose cravings were not caged but out-loved.",
  },
  {
    name: "Drew Dyck",
    role: "Your Future Self Will Thank You &mdash; Self-Control for the Age of Science and the Scroll",
    quote:
      "Self-control isn&rsquo;t just one good character trait, a nice addition to the pantheon of virtues. It&rsquo;s foundational. Not because it&rsquo;s more important than other virtues, but because the others rely upon it. Without self-control, courage degenerates into recklessness, and compassion into sentimentality. We can&rsquo;t be faithful or generous or kind without it.",
    bio: "Drew Dyck (b. 1977) is an editor and author whose book Your Future Self Will Thank You: Secrets to Self-Control from the Bible and Brain Science (2019) did something overdue: it put the Christian theology of enkrateia in honest conversation with the modern science of willpower &mdash; ego depletion, habit loops, environment design, the marshmallow-test literature &mdash; while writing as a self-confessed struggler rather than a champion. Dyck&rsquo;s synthesis lands on conclusions the tradition will recognize. The research&rsquo;s finding that willpower is a limited, fatigable resource is, he notes, what Scripture assumed all along (&ldquo;the spirit is willing, but the flesh is weak&rdquo;); the science&rsquo;s remedy &mdash; don&rsquo;t rely on in-the-moment resistance; pre-decide, build habits, redesign the environment &mdash; is Joseph&rsquo;s flight and the athlete&rsquo;s training in laboratory dress. His distinctive contribution is candor about the digital battlefield: writing as someone who checks his phone too much, he treats the attention economy as the era&rsquo;s defining self-control arena and grace as the only fuel that survives repeated failure there. The book&rsquo;s framing insight gives it its title: self-control is essentially love for your future self &mdash; and beyond that, for the people your future self will serve &mdash; which converts the whole subject from joyless restriction into a form of hope. Dyck&rsquo;s breezy, self-deprecating style carries a serious payload: the fruit of the Spirit, in an age of infinite scroll, grows best in believers humble enough to learn from both Galatians and the lab.",
  },
  {
    name: "Tim Chester",
    role: "You Can Change &mdash; The Lies Beneath the Losses of Control",
    quote:
      "We sin because we believe the lie that we are better off without God, that his rule is oppressive, that we will be free without him, that sin offers more than God&hellip; Behind every sin is a lie. And the way to fight sin is to fight the lie with the truth &mdash; to believe that God is bigger and better than anything sin offers.",
    bio: "Tim Chester (b. 1967) is a British pastor, theologian, and prolific author whose book You Can Change: God&rsquo;s Transforming Power for Our Sinful Behavior and Negative Emotions (2008) has become a standard discipleship text precisely because it refuses to fight behavior at the level of behavior. Chester&rsquo;s central move is diagnostic: beneath every habitual loss of control lies a functional belief &mdash; a lie about God being believed at the moment of temptation. The overeater believes comfort is in the food because God&rsquo;s comfort feels abstract; the rage believes control must be seized because God cannot be trusted to run the situation; the scroller believes the feed&rsquo;s escape is safer than facing the heart before God. Since sin is the fruit of a lie, the fight is fundamentally a fight of faith: identify the specific lie operating in your specific sin, and counter it with the specific truth about God it denies &mdash; his goodness, his greatness, his grace, his glory. Willpower approaches fail, Chester argues, because they prune fruit while watering the root; lasting change comes from the heart believing, in the hour of temptation itself, that God is bigger and better than anything sin offers. His pastoral style is unusually concrete &mdash; built for small groups and strugglers, full of real cases and plain questions &mdash; and his framework gives the ordinary believer something most self-control literature never does: not just techniques for the hands, but truth for the precise point where the heart capitulates.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Galatians 5:22-24",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. And those who belong to Christ Jesus have crucified the flesh with its passions and desires.",
    reflection:
      "Self-control is listed last and listed as fruit &mdash; grown from the Spirit&rsquo;s indwelling life, not strapped on by the will. Yet the next verse is violent and active: the flesh crucified. Scripture holds both without embarrassment: gift and task, grown and exercised. The believer&rsquo;s part is the walk (5:16); the fruit&rsquo;s production is the Spirit&rsquo;s. White-knuckled moralism and passive quietism are both refusals of this paradox.",
  },
  {
    reference: "Proverbs 25:28",
    text: "Like a city whose walls are broken through is a person who lacks self-control.",
    reflection:
      "One verse, one image, total diagnosis. The wall is not one virtue among many; it is the structure that makes every other good thing in a life defensible. Without it, whatever impulse arrives simply walks in. The image also carries the hope it implies: walls are rebuilt the way Nehemiah rebuilt Jerusalem&rsquo;s &mdash; honest survey of the breaches, one section at a time, in company, expecting opposition.",
  },
  {
    reference: "1 Corinthians 9:25-27",
    text: "Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable&hellip; But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.",
    reflection:
      "The rehabilitation of the word training. Self-control in the moment of temptation is won upstream of the moment, in the thousand unglamorous mornings &mdash; and Paul applies the regimen to himself, apostleship conferring no exemption. The motive is not punishment but a prize: athletes endure it for a wreath that wilts in a week. The believer&rsquo;s wreath does not wilt.",
  },
  {
    reference: "Titus 2:11-12",
    text: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age.",
    reflection:
      "The engine behind every command in the chapter: grace teaches us to say no. Not law, not shame, not the gritted will &mdash; the same kindness that saves is the kindness that trains. This is the difference between willpower-powered and grace-powered change: one runs on self-image and shatters at failure; the other runs on a love already secured and turns failure into repentance. The no grows strong in proportion to the yes behind it.",
  },
  {
    reference: "1 Corinthians 10:13",
    text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.",
    reflection:
      "Three demolitions in one verse. &ldquo;Common to man&rdquo; demolishes the isolating lie that your struggle is uniquely shameful. &ldquo;God is faithful&rdquo; demolishes the fatalism that the fall was inevitable. And &ldquo;the way of escape&rdquo; demolishes the claim of helplessness: in every tempted moment there is a door &mdash; often as unglamorous as Joseph&rsquo;s, a hallway and two feet. The practice of self-control is largely the practice of looking for the door earlier.",
  },
  {
    reference: "2 Timothy 1:7",
    text: "For God gave us a spirit not of fear but of power and love and self-control.",
    reflection:
      "Written to a timid pastor from a Roman death row &mdash; and self-control appears not as a restriction but as an endowment, given alongside power and love. The trio belongs together: power without self-control is dangerous, love without it is sentimental, and self-control without the other two is mere rigidity. The verse relocates the whole subject from achievement to inheritance: the governed life is part of what was given, to be unwrapped rather than earned.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "WnJ8wD3PVhk", title: "Enkrateia &mdash; The Last Fruit of the Spirit" },
  { videoId: "9cqdMRrjjkM", title: "A City with Broken Walls &mdash; Proverbs on Self-Control" },
  { videoId: "xT4cV7wQzNo", title: "Run to Win &mdash; The Athlete of 1 Corinthians 9" },
  { videoId: "pY3mKf8RbWc", title: "Joseph&rsquo;s Flight &mdash; When Running Is the Strong Move" },
  { videoId: "5LqDw2XcVjM", title: "It Is Written &mdash; Jesus, the Wilderness, and the Stored Word" },
  { videoId: "eR7tNp4ZxHs", title: "Grace That Teaches Us to Say No &mdash; Change After Failure" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSelfControlGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<SCEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theImpulse, setTheImpulse] = useState("");
  const [theStrategy, setTheStrategy] = useState("");
  const [theOutcome, setTheOutcome] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as SCEntry[]);
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
    if (!theImpulse.trim() || !theStrategy.trim()) return;
    const entry: SCEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theImpulse: theImpulse.trim(),
      theStrategy: theStrategy.trim(),
      theOutcome: theOutcome.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheImpulse("");
    setTheStrategy("");
    setTheOutcome("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? ROSE : BORDER}`,
    background: active ? "rgba(225, 29, 72, 0.12)" : "transparent",
    color: active ? ROSE : MUTED,
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
    color: ROSE,
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
                color: ROSE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Enkrateia &amp; the Governed Life
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Self-Control: The Last Fruit of the Spirit
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              A person without self-control, says Proverbs, is a city whose walls are broken through
              &mdash; everything inside lies open to whatever wishes to enter. This guide traces the
              theology of the governed life from enkrateia as Spirit-grown fruit through the athlete
              of 1 Corinthians 9, Joseph&rsquo;s flight, and Jesus&rsquo; stored word in the
              wilderness, into the engineered impulses of the digital age &mdash; and builds the
              practices of grace-powered change, including the protocol for the hour after failure.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ROSE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;For the grace of God has appeared, bringing salvation for all people, training
                us to renounce ungodliness and worldly passions, and to live self-controlled,
                upright, and godly lives in the present age.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>Titus 2:11-12</p>
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
                Nine studies in the theology of self-control &mdash; from enkrateia as the
                Spirit&rsquo;s fruit and the broken-walled city of Proverbs, through the athlete, the
                flight of Joseph, and the stored word of the wilderness, to Titus 2&rsquo;s
                all-ages command, the engineered impulses of the digital age, grace-powered versus
                willpower-powered change, and what to do in the hour after losing control.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: ROSE,
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
                        background: "rgba(225, 29, 72, 0.07)",
                        border: "1px solid rgba(225, 29, 72, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Self-control in Scripture is fruit before it is fight, training before it is
                  trying, and grace-taught from first to last &mdash; the wall that guards every
                  other virtue, rebuilt one section at a time by the Spirit&rsquo;s power. Study the
                  whole ninefold harvest in{" "}
                  <Link href="/fruit-of-the-spirit" style={{ color: ROSE, textDecoration: "underline" }}>
                    Fruit of the Spirit
                  </Link>
                  , learn the appetite-training discipline of{" "}
                  <Link href="/fasting-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                    Fasting
                  </Link>
                  , or explore the full toolbox of formation in the{" "}
                  <Link href="/spiritual-disciplines-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                    Spiritual Disciplines Guide
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
                Six practices for the governed life &mdash; mapping the impulses, building
                Joseph&rsquo;s flight plan, storing the word against specific weaknesses, retraining
                a scrolled attention, accountability that actually works, and the gospel protocol
                for the first hour after a fall. Fight upstream of the moment; the moment only
                reveals the training.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: ROSE,
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
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about losing
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Everyone who fights this battle loses skirmishes &mdash; the apostle Paul
                  documented his own (Rom 7:19), and the righteous of Proverbs 24:16 are
                  distinguished not by never falling but by rising seven times. The Journal tab asks
                  for &ldquo;the outcome &mdash; honest, including failure&rdquo; on purpose: a
                  record that only logs victories is a record that teaches you to hide, and hiding is
                  where the spiral lives. Logged honestly, even the falls become tuition &mdash; the
                  chain identified, the wall repaired one section further &mdash; and the record of
                  risings, read back over months, becomes the record of grace.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses to the governed life &mdash; Owen&rsquo;s daily killing of sin,
                Foster&rsquo;s farmer who provides conditions, Willard&rsquo;s grace that fuels
                effort, Augustine&rsquo;s divided will out-loved at last, Dyck&rsquo;s brain science
                in conversation with Galatians, and Chester&rsquo;s lie beneath every loss of
                control. Each insists that willpower is not the engine &mdash; and that change is
                real.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: ROSE,
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
                      background: "rgba(225, 29, 72, 0.06)",
                      borderLeft: `3px solid ${ROSE}`,
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
                Six passages that form the biblical theology of self-control &mdash; the fruit of
                Galatians 5, the broken wall of Proverbs 25, the athlete of 1 Corinthians 9, the
                teaching grace of Titus 2, the way of escape in 1 Corinthians 10, and the endowment
                of 2 Timothy 1:7. Read one per week alongside the Journal practice &mdash; and store
                the ones that match your fronts.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Pray these passages the way Jesus used Deuteronomy &mdash; as stored ammunition
                  matched to live fronts. Bring your actual impulse map to the text: name the
                  weakness, find the verse that answers its specific lie, and pray it in the first
                  person &mdash; &ldquo;You are faithful; show me the way of escape in this
                  room&rdquo;; &ldquo;You gave me a spirit of self-control; I receive it for
                  tonight.&rdquo; Then memorize the one you prayed hardest. The texts are not
                  descriptions of a discipline you lack but the means by which the Spirit grows the
                  fruit &mdash; the sword put into the hand before the wilderness.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the honest record of the fight &mdash; the impulse or temptation
                you faced, the strategy you used, and the outcome, honestly recorded, failure
                included. Entries are stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New self-control entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sc-impulse" style={labelStyle}>
                    The impulse or temptation I faced
                  </label>
                  <textarea
                    id="sc-impulse"
                    value={theImpulse}
                    onChange={(e) => setTheImpulse(e.target.value)}
                    placeholder="The 11 p.m. scroll, the flash of rage in the meeting, the old website, the third drink..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="sc-strategy" style={labelStyle}>
                    The strategy &mdash; flee, pray, Scripture, accountability
                  </label>
                  <textarea
                    id="sc-strategy"
                    value={theStrategy}
                    onChange={(e) => setTheStrategy(e.target.value)}
                    placeholder="Left the room like Joseph. Spoke 1 Cor 10:13 aloud. Texted my accountability partner before, not after..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="sc-outcome" style={labelStyle}>
                    The outcome &mdash; honest, including failure
                  </label>
                  <textarea
                    id="sc-outcome"
                    value={theOutcome}
                    onChange={(e) => setTheOutcome(e.target.value)}
                    placeholder="Held the line tonight. Or: fell — confessed within the hour, found the chain, repaired one section of wall..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theImpulse.trim() || !theStrategy.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theImpulse.trim() || !theStrategy.trim() ? BORDER : ROSE,
                    color: !theImpulse.trim() || !theStrategy.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theImpulse.trim() || !theStrategy.trim() ? "not-allowed" : "pointer",
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
                      Name the impulse, record the strategy, and log the outcome honestly &mdash;
                      victories and falls alike. A record that only logs wins teaches you to hide;
                      logged honestly, even the falls become tuition. Over months, these entries
                      become the map of your fronts, the proof of your risings, and the quiet
                      evidence that grace has been training you all along.
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
                          <span style={{ color: ROSE, fontSize: "0.82rem", fontWeight: 700 }}>
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
                            The impulse
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theImpulse}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.theOutcome ? 10 : 0 }}>
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
                            The strategy
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theStrategy}
                          </p>
                        </div>

                        {entry.theOutcome && (
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
                              The outcome
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theOutcome}
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
                Teaching on the governed life &mdash; enkrateia as the Spirit&rsquo;s fruit, the
                broken-walled city, the athlete&rsquo;s training, Joseph&rsquo;s flight, the stored
                word of the wilderness, and grace-powered change after failure. Good companions to
                the Theology and Practices tabs.
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
              The wall and the gardener
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The promise of the whole tradition &mdash; from the broken-walled city to the
              wilderness&rsquo;s &ldquo;it is written,&rdquo; from Augustine&rsquo;s fig tree to the
              grace that teaches us to say no &mdash; is that the governed life is grown, not
              gritted. The walls can be rebuilt, one surveyed section at a time; the word can be
              stored before the wilderness; the falls, honestly confessed, become tuition rather
              than identity. And underneath every strategy stands the Gardener, whose Spirit
              produces what willpower never could &mdash; and who finishes what he begins.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see self-control among its eight companions in{" "}
              <Link href="/fruit-of-the-spirit" style={{ color: ROSE, textDecoration: "underline" }}>
                Fruit of the Spirit
              </Link>
              , train the appetites in the{" "}
              <Link href="/fasting-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                Fasting Guide
              </Link>
              , or build the full regimen in the{" "}
              <Link href="/spiritual-disciplines-guide" style={{ color: ROSE, textDecoration: "underline" }}>
                Spiritual Disciplines Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
