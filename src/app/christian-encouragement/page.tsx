"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_christianencouragement_entries";

interface ENCEntry {
  id: string;
  date: string;
  whoNeedsIt: string;
  theWord: string;
  howDelivered: string;
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
    badge: "Paraklesis — The Call Alongside",
    title: "Paraklesis: Encouragement Shares a Root with the Holy Spirit&rsquo;s Name",
    paragraphs: [
      "The New Testament word most often translated &ldquo;encouragement&rdquo; is paraklesis &mdash; from para (alongside) and kaleo (to call). To encourage someone, in the biblical sense, is to be called alongside them: to close the distance, to stand where they stand, and to speak strength into them from that position. This is not cheerleading from the stands. It is presence. The word carries the full range of coming-alongside ministry: comfort, exhortation, consolation, appeal, strengthening. The encourager is not the person with the loudest positivity but the person willing to move toward another and stay there.",
      "The same root gives us one of the most important names of the Holy Spirit: the Paraclete (John 14:16, 26; 15:26; 16:7) &mdash; the Comforter, the Advocate, the one called alongside. Jesus promises &ldquo;another Paraclete,&rdquo; implying that he himself was the first: God come alongside humanity in the flesh. The theological weight of this is enormous. When a Christian encourages another Christian, they are not performing a minor social kindness; they are participating in the characteristic activity of the Holy Spirit. Encouragement is pneumatological work. The God of the Bible is the God who comes alongside, and his people are sent to do the same.",
      "Paul makes the chain explicit in 2 Corinthians 1:3-4: God is &ldquo;the Father of mercies and God of all comfort [paraklesis], who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.&rdquo; Encouragement flows downhill: from God, through the comforted, to the afflicted. The person who has received the coming-alongside of God becomes the person equipped to come alongside others. No encouragement is self-generated; all of it is passed along.",
    ],
    callout: {
      label: "The root",
      text: "Paraklesis &mdash; para (alongside) + kaleo (to call). The same root as Paraclete, the name of the Holy Spirit. To encourage is to do what the Spirit does: come alongside and speak strength.",
    },
  },
  {
    badge: "Acts 4:36; 9:27; 15:37-39 — Barnabas",
    title: "Barnabas: The Man the Apostles Renamed &ldquo;Son of Encouragement&rdquo;",
    paragraphs: [
      "His name was Joseph, a Levite from Cyprus &mdash; but the apostles renamed him Barnabas, &ldquo;which means son of encouragement&rdquo; (Acts 4:36). Consider what it takes to be renamed by your community for a character trait. Encouragement was not something Barnabas occasionally did; it was who he was, so consistently and so visibly that his given name was effectively retired. His first appearance in Acts is an act of costly generosity: he sold a field and laid the money at the apostles&rsquo; feet. The encourager&rsquo;s words carry weight because his life carries weight.",
      "His most consequential act of encouragement was vouching for Saul of Tarsus. When the newly converted persecutor came to Jerusalem, &ldquo;they were all afraid of him, for they did not believe that he was a disciple. But Barnabas took him and brought him to the apostles&rdquo; (Acts 9:26-27). Every door in Jerusalem was closed to Saul; Barnabas put his own credibility on the line to open them. Without that single act of advocacy, the church might never have received the apostle Paul. Encouragement at its strongest is not a compliment but an endorsement &mdash; standing beside a person whose reputation cannot yet stand on its own.",
      "And Barnabas did it twice. When Paul refused to take John Mark on the second missionary journey because Mark had deserted them in Pamphylia, &ldquo;there arose a sharp disagreement, so that they separated from each other. Barnabas took Mark with him and sailed away to Cyprus&rdquo; (Acts 15:37-39). Barnabas chose the failed young man over the famous apostle. He saw what Mark could become rather than what Mark had done. The vindication came years later, in Paul&rsquo;s own hand: &ldquo;Get Mark and bring him with you, for he is very useful to me for ministry&rdquo; (2 Tim 4:11) &mdash; and in the Gospel that bears Mark&rsquo;s name. Behind the second Gospel stands a man who refused to give up on its author.",
    ],
    callout: {
      label: "The Barnabas pattern",
      text: "Vouch for the suspect (Saul). Champion the failure (Mark). Put your own credibility on the line for people whose reputation cannot yet stand alone. The church got Paul&rsquo;s letters and Mark&rsquo;s Gospel because one man was a son of encouragement.",
    },
  },
  {
    badge: "Hebrews 3:13 — Daily",
    title: "Encourage One Another Daily &mdash; Because Hearts Harden Fast",
    paragraphs: [
      "&ldquo;But exhort one another every day, as long as it is called &lsquo;today,&rsquo; that none of you may be hardened by the deceitfulness of sin&rdquo; (Heb 3:13). The frequency is the theology. Not weekly, not when convenient, not when someone is visibly struggling &mdash; daily. The writer of Hebrews assumes that the human heart, left unencouraged, drifts toward hardness at a daily rate. Sin is described as deceitful: it does not announce itself but works quietly, reframing bitterness as realism, isolation as independence, and unbelief as maturity. The counter-agent to that daily deceit is the daily voice of another believer.",
      "Notice that encouragement here is not framed as a nicety but as a spiritual protection. The danger being warded off is not low morale but a hardened heart &mdash; the condition of the wilderness generation that the surrounding passage holds up as a warning (Heb 3:7-19). They hardened their hearts, and they did not enter the rest. The implication is sobering: encouragement is part of how God keeps his people believing. The brother or sister who speaks a true word to you today is not decorating your life; they are part of the means by which your faith survives.",
      "This also means that encouragement is a community responsibility, not a personality type. &ldquo;Exhort one another&rdquo; is addressed to everyone. Some believers are temperamentally warm and others are not, but the command does not bend to temperament. Every Christian is to be, in some daily measure, a Barnabas to someone &mdash; because every Christian heart, including the strongest, is one unencouraged season away from beginning to harden.",
    ],
    callout: {
      label: "Why daily",
      text: "Because sin&rsquo;s deceit works daily, encouragement must work daily. Hebrews treats the encouraging word not as decoration but as protection &mdash; one of God&rsquo;s ordinary means of keeping hearts soft and faith alive.",
    },
  },
  {
    badge: "Ephesians 4:29 — Building Up",
    title: "Only What Builds Up, According to the Need of the Moment",
    paragraphs: [
      "&ldquo;Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear&rdquo; (Eph 4:29). Paul gives the Christian a complete grammar of speech in a single verse. The negative is total: no corrupting (literally &ldquo;rotten&rdquo;) talk &mdash; words that tear down, that diminish, that spread decay. The positive is equally demanding: only what builds up. And then two qualifiers that turn encouragement from a vague warmth into a precise craft: &ldquo;as fits the occasion&rdquo; (according to the need of the moment) and &ldquo;that it may give grace to those who hear.&rdquo;",
      "&ldquo;According to the need&rdquo; means encouragement requires attention before it requires words. The generic compliment &mdash; &ldquo;you&rsquo;re doing great!&rdquo; &mdash; costs nothing and builds little, because it is not fitted to anything. The word that builds is the word that has noticed: noticed the discouragement, noticed the specific battle, noticed what this person needs to hear today as opposed to what anyone might need to hear any day. Encouragement is the fruit of paying attention. The encourager is first a student of the people around them.",
      "&ldquo;That it may give grace&rdquo; is the most remarkable phrase. Human words can be a means of grace &mdash; carriers of God&rsquo;s actual favor and strength into another person&rsquo;s life. This elevates ordinary speech to sacramental seriousness. Every conversation is an opportunity to either corrode or to confer grace. Paul&rsquo;s vision is that Christian speech, fitted to the need and aimed at the building, becomes one of the ordinary channels through which God strengthens his people.",
    ],
  },
  {
    badge: "Encouragement vs. Flattery",
    title: "Truth-Telling Love &mdash; Why Encouragement Is Not Flattery",
    paragraphs: [
      "Flattery and encouragement can sound identical and could not be more different. Flattery says pleasant things to gain something &mdash; approval, favor, comfort, the avoidance of conflict. Encouragement says true things to give something &mdash; strength, perspective, courage. Proverbs is blunt about the first: &ldquo;a flattering mouth works ruin&rdquo; (Prov 26:28), and &ldquo;whoever flatters his neighbor spreads a net for his feet&rdquo; (Prov 29:5). Flattery is a transaction disguised as a gift. Encouragement is a gift that costs the giver attention, honesty, and sometimes risk.",
      "The test is truth. Biblical encouragement never requires saying anything false. It requires seeing what is genuinely there &mdash; the evidence of grace in a person, the gift they cannot see in themselves, the faithfulness they have written off as nothing, the progress invisible to them because they live inside it &mdash; and saying it out loud. The encourager is not inventing a flattering fiction; they are reporting a true sight. This is why &ldquo;speaking the truth in love&rdquo; (Eph 4:15) is the larger frame: love without truth becomes flattery, and truth without love becomes a weapon. Encouragement is what truth sounds like when love is doing the talking.",
      "This also means real encouragement can include hard words. The same paraklesis word group covers exhortation &mdash; the strengthening word that calls a person up, not just the soothing word that calms them down. Barnabas confronted; Paul&rsquo;s encouraging letters contain rebuke; the Spirit who comforts also convicts. The flatterer cannot afford to say anything hard, because their goal is to be liked. The encourager can, because their goal is the other person&rsquo;s strength.",
    ],
    callout: {
      label: "The dividing line",
      text: "Flattery says pleasant things to gain something. Encouragement says true things to give something. The encourager never has to lie &mdash; only to see what grace has actually done in a person and say it out loud.",
    },
  },
  {
    badge: "1 Samuel 23:16 — Jonathan and David",
    title: "Strengthening Another&rsquo;s Hand in God",
    paragraphs: [
      "&ldquo;And Jonathan, Saul&rsquo;s son, rose and went to David at Horesh, and strengthened his hand in God&rdquo; (1 Sam 23:16). The setting matters: David is a fugitive in the wilderness of Ziph, hunted by King Saul, who &ldquo;sought him every day&rdquo; (23:14). David is exhausted, hunted, and in real danger of despair. And Jonathan &mdash; the king&rsquo;s own son, the man with the most to lose from David&rsquo;s rise &mdash; gets up, finds him in the wilderness, and strengthens his hand in God.",
      "Every phrase repays attention. Jonathan rose and went: encouragement required a journey toward someone in a hard place, at personal risk. He strengthened his hand: the Hebrew idiom for renewing someone&rsquo;s grip, restoring their capacity to keep holding on when their strength is failing. And the destination of the encouragement: in God. Jonathan did not say &ldquo;you&rsquo;ve got this&rdquo; or &ldquo;believe in yourself.&rdquo; The text records his words: &ldquo;Do not fear, for the hand of Saul my father shall not find you. You shall be king over Israel&rdquo; (23:17). He pointed David back to God&rsquo;s promise. The deepest encouragement does not direct a person to their own resources; it reattaches their grip to God&rsquo;s.",
      "There is a final, piercing detail: Jonathan&rsquo;s encouragement cost him everything and gained him nothing &mdash; by worldly accounting. He was the crown prince, and he strengthened the hand of the man who would take his throne. &ldquo;You shall be king over Israel, and I shall be next to you.&rdquo; Encouragement, at its purest, is the opposite of rivalry: it rejoices in another&rsquo;s calling even when that calling eclipses your own. Jonathan never saw David crowned; he died on Gilboa. But the king David became was, in part, the king Jonathan&rsquo;s wilderness visit kept alive.",
    ],
  },
  {
    badge: "The Epistles — Written Encouragement",
    title: "The Encouragement Chain: Paul&rsquo;s Letters as Encouragement in Writing",
    paragraphs: [
      "A striking proportion of the New Testament is written encouragement. Paul tells the Thessalonians &mdash; twice &mdash; &ldquo;therefore encourage one another with these words&rdquo; (1 Thess 4:18; 5:11). He sends Tychicus to Ephesus and Colossae for an explicit purpose: &ldquo;that he may encourage your hearts&rdquo; (Eph 6:22; Col 4:8). He writes to a timid Timothy to fan into flame the gift of God. He opens almost every letter by telling the recipients, specifically and at length, what he thanks God for in them &mdash; their faith, their love, their endurance &mdash; before he corrects anything. The apostolic pattern is encouragement first, correction inside encouragement, and encouragement again at the close.",
      "This matters because it dignifies the written word as a vehicle of paraklesis. Paul could not be alongside every church at once, so he came alongside in ink. The letter, the note, the message that names what is true and good in a person, has apostolic precedent &mdash; and a peculiar power that spoken words lack: it can be kept, re-read, and returned to in the dark hours when the encourager is absent. Many believers have been carried through a hard season by a letter written years before, read again at the right moment.",
      "The chain also runs through Paul rather than merely from him. He is candid about his own need: &ldquo;we were comforted&hellip; by the coming of Titus&rdquo; (2 Cor 7:6-7); the believers who met him on the road to Rome were a sight at which &ldquo;he thanked God and took courage&rdquo; (Acts 28:15); Onesiphorus &ldquo;often refreshed me and was not ashamed of my chains&rdquo; (2 Tim 1:16). The greatest encourager in the New Testament was himself sustained by encouragers, most of whose names we barely know. No one is above needing the chain; everyone is a link in it.",
    ],
    callout: {
      label: "The chain",
      text: "God encourages Paul through Titus; Paul encourages the churches through letters; the churches encourage one another with those words. Encouragement is never a private possession &mdash; it is always passed along.",
    },
  },
  {
    badge: "The Anatomy of Discouragement",
    title: "How Discouragement Works &mdash; and Why Words Counter It",
    paragraphs: [
      "Discouragement is precisely named: it is the draining away of courage. It rarely arrives as a single blow; it accumulates &mdash; through fatigue, through unrewarded faithfulness, through opposition, through the slow suspicion that nothing one does matters. Nehemiah&rsquo;s wall-builders are the classic case study: &ldquo;The strength of those who bear the burdens is failing. There is too much rubble. By ourselves we will not be able to rebuild the wall&rdquo; (Neh 4:10). Notice the ingredients: exhaustion, the magnitude of the remaining task, and isolation (&ldquo;by ourselves&rdquo;). Discouragement is a story the soul starts telling itself &mdash; a story in which the load is too heavy, the progress is nothing, and no one is coming.",
      "This is why words are the precise counter-agent. Discouragement is built out of an interior narrative, and narratives are answered with words. Nehemiah counters the rubble-story with a spoken word: &ldquo;Do not be afraid of them. Remember the Lord, who is great and awesome&rdquo; (Neh 4:14). Elijah, suicidal under the broom tree, is restored by food, sleep, and a word that corrects his isolation-story: you are not alone; there are seven thousand who have not bowed (1 Kings 19). The discouraged person has usually lost accurate sight of three things &mdash; what God has done, what their labor is worth, and who stands with them. The encouraging word restores accurate sight. &ldquo;Anxiety in a man&rsquo;s heart weighs him down, but a good word makes him glad&rdquo; (Prov 12:25).",
      "Understanding the anatomy also explains the urgency of Hebrews&rsquo; &ldquo;daily.&rdquo; Because discouragement accumulates gradually, it is best answered early and often &mdash; small true words spoken regularly, rather than rescue attempts after collapse. The believer who learns to spot the early signs in others &mdash; the withdrawal, the cynical edge, the &ldquo;it doesn&rsquo;t matter&rdquo; &mdash; and to move toward them with a fitted word, is practicing preventive medicine for the soul. Most people are far more discouraged than they look, and far more strengthened by a single specific word than the speaker will ever know.",
    ],
    callout: {
      label: "The counter-agent",
      text: "Discouragement is a false story the soul tells itself: the load is too heavy, the work is worthless, no one is coming. Encouragement answers story with story &mdash; true words that restore accurate sight of God, the work, and the company.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily One &mdash; Obeying Hebrews 3:13 Literally",
    summary:
      "A simple, sustainable practice: one specific encouragement, delivered to one person, every day. The smallest possible obedience to &ldquo;encourage one another daily&rdquo; &mdash; and over a year, three hundred and sixty-five strengthened hands.",
    steps: [
      "Each morning, ask one question: &ldquo;Who needs encouragement today?&rdquo; Let a name surface &mdash; a friend in a hard season, a discouraged coworker, a faithful person whose work is invisible, a leader who only ever hears complaints. Write the name down.",
      "Find the specific word. Not &ldquo;you&rsquo;re great&rdquo; but the fitted word of Ephesians 4:29: what is actually true about this person that they likely cannot see? Evidence of grace, faithfulness in something small, a gift they discount, endurance they have stopped noticing.",
      "Deliver it the same day &mdash; text, call, handwritten note, or face to face. Do not let the impulse cool; an undelivered encouragement strengthens no one. Two sentences are enough: name the specific thing, and tell them you see it.",
      "Where possible, point the encouragement toward God, in the pattern of Jonathan: not only &ldquo;you are doing well&rdquo; but &ldquo;I see God&rsquo;s faithfulness in you.&rdquo; Strengthen the hand, and strengthen it in God.",
      "Keep a simple record (the Journal tab is built for this). Over time the record becomes its own encouragement: a log of the people God has loved through your words.",
    ],
    anchor: "Hebrews 3:13 &mdash; &ldquo;But exhort one another every day, as long as it is called &lsquo;today,&rsquo; that none of you may be hardened by the deceitfulness of sin.&rdquo;",
  },
  {
    number: "02",
    title: "The Barnabas Move &mdash; Vouching for Someone",
    summary:
      "Encouragement at its costliest and strongest: lending your credibility to a person whose reputation cannot yet stand on its own &mdash; the overlooked, the new, the failed, the suspect. What Barnabas did for Saul and for Mark.",
    steps: [
      "Identify someone standing outside a closed door: a newcomer no one has welcomed, a young person no one takes seriously, someone rebuilding after a public failure, a gifted person who lacks a sponsor. The Barnabas move begins with noticing who the room is afraid of or indifferent to.",
      "Examine what is true. Vouching is not flattery &mdash; Barnabas vouched for Saul because he had heard the genuine story of the Damascus road. Spend the time to actually know the person: their story, their repentance, their gift, their growth.",
      "Spend your credibility. Make the introduction. Say in front of others what you believe about them: &ldquo;I trust this person. I have seen this in them. Give them the chance.&rdquo; Accept that your reputation is now partly tied to theirs &mdash; that is what makes the endorsement weigh something.",
      "If they have failed before, as Mark had, champion the future over the record: take them with you into the next work, the way Barnabas took Mark to Cyprus. Restoration is mostly opportunity plus accompaniment.",
      "Stay alongside after the door opens. Barnabas did not just introduce Saul to the apostles; he later traveled to Tarsus to find him and brought him into a year of ministry at Antioch (Acts 11:25-26). Vouching is the beginning of accompaniment, not a substitute for it.",
    ],
    anchor: "Acts 9:27 &mdash; &ldquo;But Barnabas took him and brought him to the apostles and declared to them how on the road he had seen the Lord.&rdquo;",
  },
  {
    number: "03",
    title: "The Written Word &mdash; Encouragement That Can Be Re-Read",
    summary:
      "Following the apostolic pattern of encouragement in writing: the letter or note that names what is true in a person, which they can keep and return to in dark hours when the encourager is absent.",
    steps: [
      "Choose one person per week to write to &mdash; actually write: a card, a letter, a considered message. Prioritize people in long, grinding seasons (caregiving, ministry, illness, parenting young children, slow rebuilding) where discouragement accumulates quietly.",
      "Open the way Paul opens: with thanksgiving. &ldquo;I thank God when I think of you, because&hellip;&rdquo; &mdash; and then be specific. Name the faith, the love, the endurance you have actually observed, with at least one concrete instance. Specificity is what separates a word that gives grace from a pleasant noise.",
      "Tell them what their faithfulness has meant &mdash; to you, to others, to people they may not know about. The discouraged person has usually concluded their labor is worthless; the letter is evidence to the contrary that they can hold in their hands.",
      "Anchor it in God&rsquo;s faithfulness, not just theirs: a verse fitted to their season (not a generic one), a sentence about what you see God doing in them. Strengthen their hand in God.",
      "Send it with no agenda and expect nothing back. Flattery invoices; encouragement gives. Some of these letters will be re-read on nights you will never hear about &mdash; that is the point.",
    ],
    anchor: "1 Thessalonians 5:11 &mdash; &ldquo;Therefore encourage one another and build one another up, just as you are doing.&rdquo;",
  },
  {
    number: "04",
    title: "Fitted Words &mdash; The Ephesians 4:29 Audit",
    summary:
      "A speech discipline: auditing your ordinary talk against Paul&rsquo;s standard &mdash; no corrupting talk, only what builds up, fitted to the need of the moment, giving grace to those who hear.",
    steps: [
      "For one week, pay attention to your speech in one arena (home, work, church, online). Notice the ratio: how much of what you say tears down, vents, mocks, or merely fills air &mdash; versus how much builds someone up?",
      "Practice the pre-word question: before speaking about or to a person, ask &ldquo;will this build or corrode?&rdquo; Eliminate the corroding word even when it is witty, deserved, or true-but-unnecessary. The standard is not &ldquo;is it accurate?&rdquo; but &ldquo;is it good for building up?&rdquo;",
      "Practice fittedness: before encouraging, ask what this person needs in this moment. The grieving need presence-words, not pep. The timid need courage-words. The weary need seen-words (&ldquo;I see how long you have carried this&rdquo;). The drifting may need a loving, exhorting word. One size fits none.",
      "Replace, don&rsquo;t just remove. The verse does not call for polite silence but for grace-giving speech. For every corroding word you catch and kill, deliberately plant a building word in its place &mdash; same day, ideally to the same person you would have diminished.",
      "Review weekly: where did words give grace this week? Where did they corrode? Confess the second, and ask the Spirit &mdash; the Paraclete &mdash; to make your mouth an instrument of his coming-alongside work.",
    ],
    anchor: "Ephesians 4:29 &mdash; &ldquo;Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.&rdquo;",
  },
  {
    number: "05",
    title: "The Wilderness Visit &mdash; Going to the Discouraged in Person",
    summary:
      "The Jonathan practice: when someone is in a wilderness season, encouragement means rising and going &mdash; physical presence in their hard place, and words that reattach their grip to God.",
    steps: [
      "Identify who is in the wilderness right now: hunted by circumstances, exhausted, isolated, close to giving up. These are usually the people who have stopped asking for anything &mdash; discouragement withdraws. Do not wait for an invitation; Jonathan was not invited to Horesh.",
      "Rise and go. Presence is the message before any word is spoken: someone thought I was worth the journey. A visit, a shared meal, showing up at the hospital or the empty house &mdash; the coming-alongside is itself paraklesis.",
      "Let them tell the truth about the wilderness first. Do not rush to the encouraging word; hear the rubble-story all the way out (&ldquo;the strength is failing, there is too much rubble, we cannot do it&rdquo;). Encouragement that has not listened is fitted to nothing.",
      "Then strengthen their hand in God: speak God&rsquo;s actual promises into their actual situation, remind them of what God has already done in their story, and correct the isolation-story &mdash; name who stands with them, starting with you.",
      "Before you leave, do one concrete thing that lightens the load &mdash; the Elijah pattern includes food and rest, not only words. And set the next contact before you go; the wilderness is rarely crossed on one visit.",
    ],
    anchor: "1 Samuel 23:16 &mdash; &ldquo;And Jonathan, Saul&rsquo;s son, rose and went to David at Horesh, and strengthened his hand in God.&rdquo;",
  },
  {
    number: "06",
    title: "Encouraging the Encouragers &mdash; Caring for the Caretakers",
    summary:
      "Closing the loop in the encouragement chain: deliberately strengthening the people who strengthen everyone else &mdash; pastors, leaders, caregivers, the dependable &mdash; who are often the most depleted and the least noticed.",
    steps: [
      "Make a short list of the encouragers in your world: the pastor, the small-group leader, the friend everyone calls, the parent holding a family together, the volunteer who never misses. Ask when anyone last encouraged them. Usually the answer is: rarely &mdash; the strong are presumed not to need it.",
      "Remember that even Paul needed Titus, Onesiphorus, and the believers at the Forum of Appius to take courage. Spurgeon, the great encourager of pastors, battled crushing depression. The strength of the strong is more fragile than it looks.",
      "Encourage them specifically about the unseen costs: not just &ldquo;great sermon&rdquo; but &ldquo;I see the weight you carry, and I see God&rsquo;s faithfulness in how you carry it.&rdquo; Name the labor no one applauds &mdash; the preparation, the patience, the showing up.",
      "Refresh practically, in the manner of Onesiphorus who &ldquo;often refreshed&rdquo; Paul: take something off their plate, give them an evening, fund the rest they will not buy for themselves, sit with them with no agenda.",
      "Build it into rhythm, not impulse: one encourager per month receives your deliberate, fitted, delivered encouragement. The chain holds only if someone strengthens its strongest links.",
    ],
    anchor: "2 Timothy 1:16 &mdash; &ldquo;May the Lord grant mercy to the household of Onesiphorus, for he often refreshed me and was not ashamed of my chains.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Barnabas",
    role: "Acts 4, 9, 11, 13-15 &mdash; The Son of Encouragement",
    quote:
      "&ldquo;When he came and saw the grace of God, he was glad, and he exhorted them all to remain faithful to the Lord with steadfast purpose, for he was a good man, full of the Holy Spirit and of faith.&rdquo; (Acts 11:23-24, of Barnabas at Antioch)",
    bio: "Joseph of Cyprus, a Levite, was so defined by the ministry of coming alongside that the apostles renamed him Barnabas &mdash; son of encouragement (Acts 4:36). His biography in Acts is a study in what encouragement actually costs. He sold a field and gave the proceeds to the church. He vouched for Saul of Tarsus when every believer in Jerusalem was afraid of him, personally escorting the former persecutor to the apostles (Acts 9:27) &mdash; an act of sponsorship without which the church might never have received Paul. Sent to inspect the suspicious new Gentile church at Antioch, he &ldquo;saw the grace of God and was glad&rdquo; &mdash; the encourager&rsquo;s defining instinct: looking for evidence of grace rather than evidence of problems &mdash; then traveled to Tarsus to recruit Saul into the work, effectively launching Paul&rsquo;s teaching ministry (Acts 11:25-26). When Paul refused to give John Mark a second chance after his desertion, Barnabas accepted a painful split with his closest colleague rather than abandon the young man (Acts 15:37-39). The long game vindicated him: Mark wrote the second Gospel, and Paul himself eventually wrote, &ldquo;Get Mark&hellip; for he is very useful to me&rdquo; (2 Tim 4:11). Luke&rsquo;s epitaph stands: &ldquo;he was a good man, full of the Holy Spirit and of faith.&rdquo; Barnabas is the biblical proof that the ministry of encouragement, though it rarely gets the spotlight, builds the people who do.",
  },
  {
    name: "Charles Spurgeon",
    role: "Lectures to My Students; The Pastors&rsquo; College &mdash; The Encourager of Pastors",
    quote:
      "Half a word of encouragement fitly spoken may be the saving of a man who is staggering under his burden. Brethren, be encouragers. The world is full enough of critics; it is perishing for want of men who will come alongside the weary and put heart into them again.",
    bio: "Charles Haddon Spurgeon (1834-1892), the &ldquo;Prince of Preachers,&rdquo; pastored the Metropolitan Tabernacle in London, preaching to thousands weekly &mdash; but a great portion of his life&rsquo;s work was the deliberate encouragement of other ministers. He founded the Pastors&rsquo; College to train men with little money or formal education, personally mentoring hundreds of pastors, and his Lectures to My Students remains one of the most bracing and tender books of ministerial encouragement ever written &mdash; including its famous chapter &ldquo;The Minister&rsquo;s Fainting Fits,&rdquo; in which he candidly described the crushing depressions that he himself suffered throughout his ministry, so that downcast pastors would know their darkness was neither unusual nor disqualifying. That candor is what gives his encouragement its weight: Spurgeon encouraged from inside the battle, not above it. He answered letters by the hundreds, sustained discouraged ministers across Britain and beyond, founded an orphanage, and treated the strengthening of other men&rsquo;s ministries as no less his calling than his own pulpit. His life demonstrates a crucial truth of the encouragement chain: the greatest encouragers are usually those who know discouragement most intimately, and who have learned to pass along the comfort with which they themselves have been comforted.",
  },
  {
    name: "Fred Rogers",
    role: "Mister Rogers&rsquo; Neighborhood &mdash; The Quiet Ministry of Telling Children They Matter",
    quote:
      "I believe that appreciation is a holy thing &mdash; that when we look for what&rsquo;s best in a person, we are doing what God does all the time. So in loving and appreciating our neighbor, we are participating in something sacred.",
    bio: "Fred Rogers (1928-2003) was an ordained Presbyterian minister whose entire ordination charge was a single, unusual mission field: television. For more than three decades on Mister Rogers&rsquo; Neighborhood, he conducted what may be the largest sustained ministry of encouragement in modern history, telling generations of children &mdash; slowly, directly, without irony &mdash; that they were seen, that their feelings were manageable, and that they were liked exactly as they were. Behind the cardigans was a rigorous theology and craft: Rogers studied child development seriously, prayed daily for the people he would encounter, answered every letter, and weighed every sentence of every script against how the most vulnerable child watching might hear it &mdash; the discipline of Ephesians 4:29 fittedness applied with almost monastic care. His famous practice of asking people to remember, for ten silent seconds, those who had &ldquo;loved us into being&rdquo; was the encouragement chain made visible: no one becomes themselves alone. Rogers demonstrates that encouragement is not weakness or sentimentality but a deliberate, costly attention &mdash; and that telling a person their worth, in a culture that mostly tells them their deficiencies, is a quietly radical act of grace.",
  },
  {
    name: "Henri Nouwen",
    role: "The Wounded Healer; Life of the Beloved &mdash; Encouragement from Shared Weakness",
    quote:
      "When we honestly ask ourselves which persons in our lives mean the most to us, we often find that it is those who, instead of giving advice, solutions, or cures, have chosen rather to share our pain and touch our wounds with a warm and tender hand.",
    bio: "Henri Nouwen (1932-1996) was a Dutch Catholic priest and one of the most influential spiritual writers of the twentieth century, who left prestigious teaching posts at Notre Dame, Yale, and Harvard to spend his final decade at L&rsquo;Arche Daybreak in Toronto, living in community with people with profound intellectual disabilities. His classic The Wounded Healer reframed the entire basis of encouraging ministry: we do not come alongside others from a position of strength and completeness, but as fellow wounded people whose own healed and healing wounds become the very source of comfort we offer &mdash; an extended meditation, in effect, on 2 Corinthians 1:4. In Life of the Beloved, written for a secular friend, Nouwen distilled the deepest encouragement a human being can receive: that beneath all achievement and failure, the truest voice speaks the words spoken over Jesus &mdash; &ldquo;You are my beloved.&rdquo; Nouwen argued that most despair grows from listening to other voices &mdash; you are what you do, what you have, what others say about you &mdash; and that the encourager&rsquo;s real task is to help people hear the first voice again. His own lifelong struggles with loneliness and depression, openly written about, made his encouragement believable: he was a Paraclete-shaped writer, coming alongside readers in the dark places he knew from the inside.",
  },
  {
    name: "Tim Challies",
    role: "Challies.com; Seasons of Sorrow &mdash; Encouragement in the Ordinary and in Grief",
    quote:
      "Few Christians are strong enough to thrive without encouragement, and none are so strong that they outgrow the need for it. To withhold encouragement that could rightly be given is to withhold a means of grace from a brother or sister who may be far closer to despair than you know.",
    bio: "Tim Challies (b. 1976) is a Canadian Reformed writer and elder whose blog, updated daily for more than two decades, has made him one of the most consistent voices of ordinary Christian encouragement on the internet &mdash; a modern expression of the Hebrews 3:13 &ldquo;daily&rdquo; principle, in written form, in the tradition of Paul&rsquo;s letters. His work is deliberately unsensational: book recommendations, reflections on faithfulness in small things, articles that put language around the quiet struggles of ordinary believers &mdash; discouragement, weariness in well-doing, the unseen labor of parents and caregivers. In 2020 his son Nick died suddenly at age twenty, and the writing that followed, collected in Seasons of Sorrow, became encouragement of the costliest kind: a father working out, in public and in real time, what it means to trust God&rsquo;s goodness from inside devastating loss. Challies models two truths of the encouragement chain at once &mdash; that consistency over decades can matter more than brilliance in a moment, and that the comfort passed to others is most powerful when it has first been received in one&rsquo;s own affliction.",
  },
  {
    name: "Joni Eareckson Tada",
    role: "Joni and Friends &mdash; Fifty Years of Encouragement from a Wheelchair",
    quote:
      "I have learned that the weaker we are, the more we need to lean on God; and the more we lean on God, the stronger we discover him to be. That is the word I give to every hurting person: your weakness is the very place where his strength is waiting to be found.",
    bio: "Joni Eareckson Tada (b. 1949) broke her neck in a diving accident at seventeen and has lived as a quadriplegic ever since &mdash; through chronic pain, two bouts of cancer, and more than five decades in a wheelchair. Out of that life she built Joni and Friends, a global ministry that delivers wheelchairs, family retreats, and gospel hope to people affected by disability in scores of countries, and she has written dozens of books on suffering, heaven, and hope. Her ministry is the encouragement chain operating at full strength: the comfort she received in her own affliction &mdash; hammered out through early years of despair and suicidal darkness &mdash; has been passed along to millions who know that her words about God&rsquo;s sufficiency are not theory. When Joni tells a newly paralyzed teenager or an exhausted special-needs parent that God&rsquo;s grace is sufficient, the message carries an authority that no able-bodied comforter could match: she is Exhibit A of her own encouragement. Her decades of singing, painting with a brush held in her teeth, and answering hurting people one by one embody the deepest logic of 2 Corinthians 1:4 &mdash; affliction received with God becomes the raw material of a lifetime of strengthening others&rsquo; hands in him.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Hebrews 3:13",
    text: "But exhort one another every day, as long as it is called &lsquo;today,&rsquo; that none of you may be hardened by the deceitfulness of sin.",
    reflection:
      "The frequency is the theology: daily, because sin&rsquo;s deceit works daily and unencouraged hearts harden fast. Encouragement here is not a pleasantry but a protection &mdash; one of God&rsquo;s ordinary means of keeping his people believing. The command is addressed to everyone, not to a temperament: every believer is to be a daily Barnabas to someone.",
  },
  {
    reference: "Acts 4:36-37",
    text: "Joseph, who was also called by the apostles Barnabas (which means son of encouragement), a Levite, a native of Cyprus, sold a field that belonged to him and brought the money and laid it at the apostles&rsquo; feet.",
    reflection:
      "A man renamed by his community for a character trait. Encouragement was so consistently who Barnabas was that his given name was retired. Note that his first recorded act is costly generosity &mdash; the encourager&rsquo;s words carry weight because his life does. From this man&rsquo;s advocacy the church received both Paul&rsquo;s ministry and Mark&rsquo;s Gospel.",
  },
  {
    reference: "Ephesians 4:29",
    text: "Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.",
    reflection:
      "A complete grammar of Christian speech: nothing that corrodes, only what builds, fitted to the actual need of the actual moment, with the astonishing aim that human words become carriers of grace. Encouragement, on this verse, is a craft of attention &mdash; you must study a person before you can build them.",
  },
  {
    reference: "1 Samuel 23:16-17",
    text: "And Jonathan, Saul&rsquo;s son, rose and went to David at Horesh, and strengthened his hand in God. And he said to him, &lsquo;Do not fear, for the hand of Saul my father shall not find you. You shall be king over Israel.&rsquo;",
    reflection:
      "The anatomy of deep encouragement: a journey toward someone in a wilderness, at personal cost, with words that reattach a failing grip to God&rsquo;s promise &mdash; not to self-confidence. Jonathan strengthened the hand of the man who would take his own throne. Encouragement at its purest is the opposite of rivalry.",
  },
  {
    reference: "2 Corinthians 1:3-4",
    text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.",
    reflection:
      "The encouragement chain in a single sentence: from God, through the comforted, to the afflicted. No encouragement is self-generated; all of it is received and passed along. Your hardest seasons, comforted by God, become your qualifications &mdash; the raw material of every future word you will speak into someone else&rsquo;s affliction.",
  },
  {
    reference: "Proverbs 12:25",
    text: "Anxiety in a man&rsquo;s heart weighs him down, but a good word makes him glad.",
    reflection:
      "The Old Testament&rsquo;s physics of encouragement: anxiety is weight, and a good word lifts it. The proverb assumes what Hebrews assumes &mdash; that most people are carrying more than they show, and that a single fitted word has real mechanical power against the load. You rarely see the weight; speak the good word anyway.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "tjgYqaeQyAY", title: "Paraklesis &mdash; The Call Alongside and the Ministry of Encouragement" },
  { videoId: "vWnK4SyCh4I", title: "Barnabas &mdash; The Son of Encouragement Who Gave Us Paul and Mark" },
  { videoId: "T6jvfMCmJRY", title: "Encourage One Another Daily &mdash; Hebrews 3:13 and the Hardening Heart" },
  { videoId: "7JjwG7Nf3Vw", title: "Words That Build &mdash; Ephesians 4:29 and Grace-Giving Speech" },
  { videoId: "4qcKEZBBQ9c", title: "Jonathan and David &mdash; Strengthening Another&rsquo;s Hand in God" },
  { videoId: "xPvW3DPa6Y8", title: "Encouragement vs. Flattery &mdash; The Difference Truth Makes" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianEncouragementPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<ENCEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whoNeedsIt, setWhoNeedsIt] = useState("");
  const [theWord, setTheWord] = useState("");
  const [howDelivered, setHowDelivered] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as ENCEntry[]);
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
    if (!whoNeedsIt.trim() || !theWord.trim()) return;
    const entry: ENCEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whoNeedsIt: whoNeedsIt.trim(),
      theWord: theWord.trim(),
      howDelivered: howDelivered.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhoNeedsIt("");
    setTheWord("");
    setHowDelivered("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GREEN : BORDER}`,
    background: active ? "rgba(58, 125, 86, 0.12)" : "transparent",
    color: active ? GREEN : MUTED,
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
    color: GREEN,
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
                color: GREEN,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              The Call Alongside
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Encouragement: The Ministry of Coming Alongside
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The New Testament word for encouragement &mdash; paraklesis, the call alongside &mdash;
              shares its root with the name of the Holy Spirit himself. To encourage is to do what the
              Paraclete does: move toward a person, stand where they stand, and speak true strength into
              them. This guide traces the theology of encouragement from Barnabas to Hebrews&rsquo;
              &ldquo;daily,&rdquo; and builds the practices that turn ordinary words into means of grace.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;But exhort one another every day, as long as it is called &lsquo;today,&rsquo;
                that none of you may be hardened by the deceitfulness of sin.&rdquo;
              </p>
              <p style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600 }}>Hebrews 3:13</p>
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
                Eight studies in the theology of encouragement &mdash; from the paraklesis root shared
                with the Holy Spirit&rsquo;s name to Barnabas the son of encouragement, from the daily
                command of Hebrews 3:13 to the grace-giving speech of Ephesians 4:29, from Jonathan in the
                wilderness to the anatomy of discouragement itself. Encouragement is not a personality
                type; it is a ministry.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GREEN,
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
                        background: "rgba(58, 125, 86, 0.07)",
                        border: "1px solid rgba(58, 125, 86, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GREEN,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Encouragement is the Spirit&rsquo;s own work delegated to ordinary mouths: comfort
                  received from God, fitted to a specific need, and passed along before hearts harden.
                  The encourager never has to flatter &mdash; only to see what grace has done in a person
                  and say it out loud. See how coming alongside connects to community in{" "}
                  <Link href="/christian-community" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Community
                  </Link>{" "}
                  or to honest grief in{" "}
                  <Link href="/christian-lament" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Lament
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
                Six practices for the ministry of coming alongside &mdash; from the daily fitted word to
                the Barnabas move of vouching for someone, from written encouragement to the wilderness
                visit and the care of the caretakers. Start with the Daily One and let the rest build.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GREEN,
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
                      color: GREEN,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about beginning to encourage
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Most encouragement dies as a good intention: the kind thought about a person that is
                  never delivered to the person. The practices above all share one hinge &mdash;
                  delivery. A noticed grace, named specifically, delivered the same day, is worth more
                  than a hundred warm thoughts. The Journal tab is built around exactly this hinge: who
                  needs it, what the word is, and how it will actually reach them.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six lives shaped by the ministry of coming alongside &mdash; Barnabas the renamed,
                Spurgeon the encourager of pastors, Fred Rogers&rsquo;s quiet television ministry,
                Nouwen&rsquo;s wounded healing, Challies&rsquo;s daily faithfulness, and Joni Eareckson
                Tada&rsquo;s five decades of strength from a wheelchair. Each one passed along a comfort
                they had first received.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: GREEN,
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
                      background: "rgba(58, 125, 86, 0.06)",
                      borderLeft: `3px solid ${GREEN}`,
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
                Six passages that form the biblical theology of encouragement &mdash; Hebrews 3:13, the
                naming of Barnabas, Ephesians 4:29, Jonathan at Horesh, the comfort chain of 2
                Corinthians 1, and the good word of Proverbs 12:25. Read one per week alongside the Daily
                One practice.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GREEN,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Pray each passage in two directions. First receive it: where do you need a hand
                  strengthened in God right now, and who has God sent alongside you? Thank him for them
                  by name. Then turn it outward: ask the Paraclete to show you one person whose heart is
                  hardening for lack of a good word, and ask for the fitted word &mdash; the true,
                  specific, grace-giving sentence that meets the need of their moment. Then deliver it
                  while it is still called today.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields built around the hinge of delivery &mdash; who needs encouragement today,
                the specific word you will give them, and how it will actually reach them. Entries are
                stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New encouragement entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="enc-who" style={labelStyle}>
                    Who needs encouragement today
                  </label>
                  <input
                    id="enc-who"
                    type="text"
                    value={whoNeedsIt}
                    onChange={(e) => setWhoNeedsIt(e.target.value)}
                    placeholder="A name. The friend in a hard season, the invisible faithful, the leader who only hears complaints..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="enc-word" style={labelStyle}>
                    The specific word I will give them
                  </label>
                  <textarea
                    id="enc-word"
                    value={theWord}
                    onChange={(e) => setTheWord(e.target.value)}
                    placeholder="Not 'you're great' but the fitted word: the evidence of grace they cannot see, named specifically..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="enc-delivery" style={labelStyle}>
                    How I&rsquo;ll deliver it &mdash; text, call, note, face to face
                  </label>
                  <input
                    id="enc-delivery"
                    type="text"
                    value={howDelivered}
                    onChange={(e) => setHowDelivered(e.target.value)}
                    placeholder="The delivery plan. An undelivered encouragement strengthens no one..."
                    style={inputStyle}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whoNeedsIt.trim() || !theWord.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whoNeedsIt.trim() || !theWord.trim() ? BORDER : GREEN,
                    color: !whoNeedsIt.trim() || !theWord.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whoNeedsIt.trim() || !theWord.trim() ? "not-allowed" : "pointer",
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
                      Begin with today: one name, one fitted word, one delivery plan. Over time, these
                      entries become a record of the people God has strengthened through your mouth
                      &mdash; a quiet log of the Barnabas ministry in your ordinary life.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN }}>
                              {entry.whoNeedsIt}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
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
                            The specific word
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theWord}
                          </p>
                        </div>

                        {entry.howDelivered && (
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
                              How it will be delivered
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.howDelivered}
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
                Teaching on the paraklesis word group, Barnabas, the daily command of Hebrews 3:13,
                grace-giving speech, Jonathan&rsquo;s wilderness encouragement, and the difference
                between encouragement and flattery. Good companions to the Theology and Practices tabs.
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
              Encouragement as the Spirit&rsquo;s ordinary work through ordinary mouths
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The church was given a Paraclete, and the church is meant to be full of small paracletes
              &mdash; people who rise and go to the wilderness, who vouch for the suspect and champion
              the failed, who notice the fitted word and deliver it while it is still called today.
              Hearts harden fast; the good word is the counter-agent. Almost everyone you know is more
              discouraged than they look, and more strengthened by one specific, true sentence than you
              will ever find out.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how coming alongside takes shape in{" "}
              <Link href="/christian-community" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Community
              </Link>
              , learn the honest grief that encouragement must be able to sit with in{" "}
              <Link href="/christian-lament" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Lament
              </Link>
              , or explore the endurance that encouragement sustains in{" "}
              <Link
                href="/christian-perseverance-guide"
                style={{ color: GREEN, textDecoration: "underline" }}
              >
                Christian Perseverance
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
