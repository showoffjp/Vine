"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const AMBER = "#F59E0B";

const STORAGE_KEY = "vine_christiandiligence_entries";

interface DLGEntry {
  id: string;
  date: string;
  task: string;
  howDiligent: string;
  forWhom: string;
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
    badge: "Ecclesiastes 9:10",
    title: "&ldquo;Whatever Your Hand Finds to Do, Do It with All Your Might&rdquo;",
    paragraphs: [
      "Ecclesiastes does not often get cited in sermons on Christian virtue, but its command to diligence is among the most unqualified in Scripture: &ldquo;Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom&rdquo; (9:10). The argument is from finitude — from the irreversible reality that the time for doing is brief and the time for not doing is coming. The Preacher, having surveyed vanity in every direction, arrives at this: do your work, and do it fully. The urgency is not anxiety but sobriety.",
      "The phrase &ldquo;whatever your hand finds&rdquo; is worth pausing over. It does not say whatever your grand calling turns out to be, or whatever task will look impressive on your record, or whatever work you feel most emotionally prepared to tackle. It says whatever your hand finds — the task in front of you, the one that landed in your lap this morning, the undramatic obligation that nobody is watching. The scope of diligence is the ordinary. Most of life is unremarkable work done in unremarkable moments, and the Preacher insists that it be done with all your might.",
      "The New Testament does not abandon this counsel; it relocates its foundation. Paul in Colossians 3:23 rewrites the Preacher&rsquo;s command with its deepest rationale: &ldquo;Whatever you do, work heartily, as for the Lord and not for men.&rdquo; The might is the same; the audience has changed. You do everything fully not merely because the grave is coming but because the Lord is watching — and the Lord is the one whose verdict on your work will last.",
    ],
    callout: {
      label: "The principle",
      text: "Diligence is not the same as workaholism. It is the quality of full engagement — of bringing your whole self to whatever is in your hand, because the work was given to you by God and is being done before God.",
    },
  },
  {
    badge: "Sloth / Acedia",
    title: "Acedia — The Spiritual Dimension of Laziness",
    paragraphs: [
      "The medieval church listed sloth (acedia) among the seven deadly sins, and what they meant by it was far more searching than physical laziness. Acedia — the Greek term used by the desert fathers — is a kind of existential torpor, a failure of the will to engage with what is real and good. Evagrius Ponticus called it the &ldquo;noonday demon&rdquo; because it attacked monks during the long afternoon hours: a sense that nothing matters, that God is distant, that the cell is too small and elsewhere is better, that the work of the soul is not worth the effort. Thomas Aquinas defined acedia as sadness about spiritual good — a sorrow in the face of what one is called to be and do.",
      "Dorothy Sayers, in The Other Six Deadly Sins, delivers the most penetrating modern diagnosis: &ldquo;In the world it calls itself Tolerance; but in hell it is called Despair. It is the accomplice of the other sins and their worst punishment. It is the sin that believes in nothing, cares for nothing, seeks to know nothing, interferes with nothing, enjoys nothing, hates nothing, finds purpose in nothing, lives for nothing, and remains alive because there is nothing for which it will die.&rdquo; Sayers saw acedia as the condition of her age — the great English vice of indifference, the comfortable refusal to be fully alive to one&rsquo;s calling.",
      "Acedia in the digital age has taken new forms. The phone provides a mechanism for perpetual distraction that previous generations could not have imagined — an infinite buffer between the self and the work, between the person and the people in the room, between the soul and the demands of prayer and engagement. The scrolling is not rest; it is the new acedia, the noonday demon with a screen. Diligence, in this environment, begins with the deliberate refusal of the infinite distraction and the deliberate return to what is in your hand.",
    ],
    callout: {
      label: "The word",
      text: "Acedia (ἀκηδία): listlessness, torpor, failure to care; the spiritual laziness that shrinks from engagement with what is real, good, and demanding. The opposite of diligence is not merely idleness but a deep failure of the will to show up.",
    },
  },
  {
    badge: "Proverbs 6:6-11",
    title: "The Ant as a Teacher — Wisdom, Self-Motivation, and the Horror of the Sluggard",
    paragraphs: [
      "&ldquo;Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest&rdquo; (Prov 6:6-8). The ant is not a dramatic example. She is not heroic, visionary, or inspiring — she is simply consistent. She does not need to be told. She reads the season, she acts without supervision, she does the necessary work before the time of crisis arrives. The wisdom of Proverbs holds her up not as an aspiration but as a rebuke: go look at something smaller and simpler than you and learn what you cannot bring yourself to do.",
      "The description of the sluggard that follows (Prov 6:9-11) is one of the great satirical portraits in Scripture: &ldquo;How long will you lie there, O sluggard? When will you arise from your sleep? A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber, and want like an armed man.&rdquo; The sluggard always intends to work; the problem is timing. A little more sleep, a little more delay — and then, without drama, the season closes and the harvest is gone. Proverbs does not describe the sluggard as wicked but as foolish: a person who has not reckoned honestly with the nature of time.",
      "The Proverbs 31 woman stands as the positive counterpart to the sluggard: she considers a field and buys it, she works with willing hands, her lamp does not go out at night, she stretches out her hands to the distaff (vv. 16-19). Her industriousness is not frantic; it is purposeful, skilled, and oriented toward the good of those around her. Proverbs presents diligence as the natural posture of the person who has taken wisdom seriously and knows that what you do with the ordinary days is what your life turns out to be.",
    ],
  },
  {
    badge: "Romans 12:11",
    title: "&ldquo;Do Not Be Slothful in Zeal, Be Fervent in Spirit&rdquo;",
    paragraphs: [
      "Paul&rsquo;s instruction in Romans 12:11 — &ldquo;Do not be slothful in zeal, be fervent in spirit, serve the Lord&rdquo; — places diligence directly within the Christian&rsquo;s spiritual calling. The word translated &ldquo;slothful&rdquo; (okneros) means to shrink back, to be hesitant, to hold oneself in reserve. Paul is not addressing only the realm of physical work; he is addressing the disposition of the will toward everything God has called us to — prayer, service, love, obedience, engagement with the community. Spiritual sloth is the shrinking back from what the Spirit has given us to do.",
      "&ldquo;Fervent in spirit&rdquo; — the Greek is zeonte to pneumati, literally &ldquo;boiling in spirit&rdquo; — sets the opposite picture. Fervor is not emotional volatility; it is sustained intensity, the quality of a fire that has caught hold rather than merely being lit. The servant who serves the Lord with this kind of full-engaged spirit is not performing for an audience; the Lord himself is both the object and the energizer of the work. Paul grounds the exhortation immediately in &ldquo;serve the Lord&rdquo; — the audience of all diligence is the one whose approval actually matters.",
      "What Paul commands here completes what Ecclesiastes announced: do it with all your might (Ecclesiastes), and do it as for the Lord (Paul). The second does not replace the first but transforms it. Diligence animated by the fear of the grave is admirable; diligence animated by the love of the Lord is worship.",
    ],
  },
  {
    badge: "Matthew 25:21",
    title: "Faithfulness in Little Things — &ldquo;Well Done, Good and Faithful Servant&rdquo;",
    paragraphs: [
      "The parable of the talents in Matthew 25 is the definitive New Testament treatment of diligence, and its lesson is not about large amounts — it is about faithfulness to what was entrusted. The servant with five talents doubles them; the servant with two doubles them; both hear identical words from the master: &ldquo;Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.&rdquo; The servant with one talent, who buried his in the ground, hears the opposite.",
      "The buried talent is a portrait of acedia in its religious form: a person who, out of fear and a distorted picture of the master (&ldquo;I knew you to be a hard man&rdquo; — v. 24), simply does not engage. He did not squander the talent; he did not steal it or corrupt it. He merely did nothing with it. The parable suggests that non-engagement — the refusal to bring what you have been given into active use — is not neutral. It is unfaithfulness. Every gift, capacity, opportunity, and responsibility is a talent given in trust; diligence is the way you honor the trust.",
      "The word faithful in the master&rsquo;s commendation is pistis — the same word for faith. Diligence, on this account, is faith expressed in action: the practical conviction that what God has entrusted to me matters, that the work in front of me is his work, and that doing it well is a form of love for the one who gave it. The size of the commission is irrelevant. The master does not say &ldquo;well done, large earner&rdquo; — he says &ldquo;well done, faithful one.&rdquo;",
    ],
    callout: {
      label: "The verdict",
      text: "\"Well done, good and faithful servant\" (Matt 25:21) — the commendation is for faithfulness in what was given, not for the scale of what was achieved. Diligence before God is measured by wholeness of engagement, not size of outcome.",
    },
  },
  {
    badge: "Ora et Labora",
    title: "The Work of the Monk — Pray and Work, the Benedictine Balance",
    paragraphs: [
      "Benedict of Nursia, writing his Rule in the sixth century, organized monastic life around a single Latin phrase: ora et labora — pray and work. For Benedict, idleness was the enemy of the soul (&ldquo;idleness is the enemy of the soul&rdquo; — Rule, ch. 48), and the monk&rsquo;s day was structured as a seamless rhythm of liturgical prayer, lectio divina, and manual labor. The work was not a distraction from the spiritual life; it was part of it. The cellar, the garden, the kitchen, the scriptorium — all were places where God was met, not fled from.",
      "The Benedictine tradition holds two important correctives to modern attitudes toward work. First, it refuses the sacred-secular split: there is no division between the monk&rsquo;s prayer and the monk&rsquo;s work, between the chapel and the field. All of it is done coram Deo — before the face of God — and all of it can be an act of worship or an act of distraction, depending on the disposition brought to it. Second, it refuses both workaholism and laziness: the structured day contains both, in balance, as features of a life shaped by wisdom rather than productivity metrics or leisure culture.",
      "Eugene Peterson, in his long pastoral career, translated the Benedictine vision into the work of the parish minister and, by extension, into any Christian life: the &ldquo;under the unpredictable plant&rdquo; quality of real work, the refusal to measure ministry (or any work) by the numbers it produces, the patient, unhurried faithfulness that shows up every day and does the next thing. Peterson&rsquo;s great counsel on diligence is not to try harder but to be less interesting to yourself — to put the daily work back at the center and stop auditing it for excitement.",
    ],
  },
  {
    badge: "Rhythm and Rest",
    title: "Diligence and Rest — Neither Workaholism Nor Laziness",
    paragraphs: [
      "The biblical pattern of diligence is always bracketed by rest. God worked six days and rested on the seventh, and the sabbath command extends that rhythm to every creature in Israel&rsquo;s household — including the ox, including the slave, including the alien (Ex 20:8-11). The week is designed to include both: six days of full engagement and one day of deliberate cessation, not because the work is unimportant but because the worker is not God, the harvest does not depend on our never stopping, and the soul needs regular reminders that the world is held up by someone else.",
      "Workaholism is acedia&rsquo;s twin, not its opposite. The workaholic and the sluggard have the same problem at its root: an anxious relationship with their own value, one that is measured by what they produce (so they cannot stop) or dreaded when forced to account (so they never start). Biblical diligence is the middle road: full engagement from a place of rest, work done as worship rather than self-justification, the ant&rsquo;s consistency without the slave&rsquo;s compulsion. Tim Challies, in Do More Better, notes that the goal of better productivity is not accomplishing more for its own sake but freeing yourself to be more fully present to the people and callings God has given you.",
      "The sabbath rhythm also protects against the idolatry of work — the dangerous temptation to find your identity, your worth, and your meaning entirely in what you produce. One day in seven you are not a worker; you are a creature. The identity shift is the whole point. You are loved before you are useful, accepted before you have accomplished anything today. Diligence rooted in that acceptance works without fear; it can put down the tools without panic because the tools were never the foundation.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Three-Task Rule",
    summary:
      "Identify the three most important things you need to do today — and do them first, before email, before meetings, before the reactive swirl. Most significant work gets done in the first hours of the day or not at all.",
    steps: [
      "Each morning, before opening any screen that delivers incoming demands, write down the three tasks that — if completed — would make the day genuinely productive by the standard of your deepest responsibilities, not just your inbox.",
      "Protect the first hour for the first task. Diligence requires time before distraction, and distraction arrives with the first notification. The ant works before the sun is fully up.",
      "After completing all three, add one from the remaining list. The goal is not to finish everything — that is never achievable — but to ensure the most important things get the quality of attention they deserve.",
      "At the end of each day, audit briefly: were the three tasks the right three? Did I bring full engagement or half-engagement? Note it in the Journal tab — the pattern over a month will show you where your energy and your values actually align.",
    ],
    anchor: "Proverbs 21:5 — The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.",
  },
  {
    number: "02",
    title: "Intentional Work Blocks — Deep Work Without Distraction",
    summary:
      "The most important work requires long, uninterrupted stretches of attention. Schedule them deliberately, protect them aggressively, and treat interruption as the enemy of diligence rather than the mark of a responsive person.",
    steps: [
      "Block two to three hours daily for your most important work. Close the notifications, close the extra tabs, put the phone in another room or in airplane mode. Set the conditions for sustained engagement rather than hoping it will happen spontaneously.",
      "Tell the people around you what the block is for, so they can honor it. Diligence in community requires community support; the person who works deeply is not being antisocial, they are taking their work seriously enough to give it their full self.",
      "When distraction surfaces — the urge to check, to context-switch, to do the easier task first — treat it as a moment of choice rather than an automatic reflex. Name it: I am choosing distraction, or I am choosing to stay. The choice becomes clearer when it is conscious.",
      "End each deep work block with two minutes of deliberate handoff: what did I accomplish, what is the next piece, what state do I want to pick this up in tomorrow? The transition from deep work to ordinary time should be intentional, not jarring.",
    ],
    anchor: "Ecclesiastes 9:10 — Whatever your hand finds to do, do it with all your might.",
  },
  {
    number: "03",
    title: "The &ldquo;For Whom&rdquo; Practice — Doing Work as unto the Lord",
    summary:
      "Before beginning any significant task, name its ultimate audience. Not your manager, not the client, not the congregation — but the Lord. Reorienting work toward its deepest purpose changes both the quality of engagement and the experience of the work itself.",
    steps: [
      "Begin your workday with a short prayer of consecration — something as simple as: &ldquo;Lord, this work is yours. I am doing it in your presence. Let me do it well, as an act of service to you through the people it will serve.&rdquo;",
      "When a task feels tedious, petty, or beneath you, return to Colossians 3:23: &ldquo;Whatever you do, work heartily, as for the Lord and not for men.&rdquo; The dignity of the task does not come from its scale but from its audience. The Lord is not bored by the small thing done with whole attention.",
      "Use the Journal tab on this page to name the deeper &ldquo;for whom&rdquo; of a task: not just completing it but consciously orienting it toward love — for my family, for the person who will receive this, for the community I serve, for the Lord who gave me the capacity to do it.",
      "Notice the difference in experience when work is done coram Deo (before the face of God) versus for performance or approval. Work done as worship is neither inflated nor deflated by others&rsquo; responses to it — it has already been received by the only audience that counts.",
    ],
    anchor: "Colossians 3:23-24 — Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward.",
  },
  {
    number: "04",
    title: "Tackling the Avoided Task",
    summary:
      "The avoided task is the clearest indicator of where acedia lives in your specific life. It sits on the list for days, gathering psychological weight. The practice is simple and difficult: do it first.",
    steps: [
      "Name the avoided task honestly. Not the task you claim to be working toward but the specific, concrete thing you have been not-doing. The avoidance is almost always more costly than the task — it drains energy, produces low-grade guilt, and colonizes imagination.",
      "Ask why it is being avoided. Fear of failure? The complexity of starting? The sheer dullness of it? The honest answer usually reveals whether this is a task to do, delegate, or decide is actually not important. Most avoided tasks need to be done.",
      "Use the &ldquo;two-minute start&rdquo; rule: if you cannot bring yourself to begin, commit to spending exactly two minutes on the task. The barrier is almost always starting, not continuing. Two minutes of honest engagement is enough to break the avoidance pattern.",
      "When the avoided task is complete, note how much lighter the week feels. Accumulated avoidance produces a specific kind of psychological weight that dissipates the moment you do the thing. Diligence, practiced here, is a form of freedom.",
    ],
    anchor: "Proverbs 6:9-10 — How long will you lie there, O sluggard? When will you arise from your sleep? A little sleep, a little slumber, a little folding of the hands to rest...",
  },
  {
    number: "05",
    title: "Sabbath as the Guardian of Diligence",
    summary:
      "True diligence requires true rest — not leisure that bleeds into the work week but one full day of deliberate cessation, sabbath in the biblical sense, that resets the soul&rsquo;s relationship to its own work.",
    steps: [
      "Choose a day — ideally Sunday, the Lord&rsquo;s Day — and protect it from productive work with something approaching the seriousness the fourth commandment intended. The sabbath is not flexible in Exodus 20; it is the rhythm that makes the other six days possible.",
      "Plan the sabbath the day before. The disciples prepared for the sabbath; the women prepared the spices. A sabbath that has to improvise its rest will not rest. Know what you are stepping away from and what you are stepping into — worship, family, play, nature, physical rest.",
      "When the urge to work surfaces on the sabbath — because it will — treat it as a spiritual test. This is the moment that reveals whether you trust God to hold your world while you stop, or whether you secretly believe the world depends on your continuous output. The sabbath is an act of faith.",
      "Notice, across several months, whether structured sabbath increases or decreases the quality of your work the other six days. Most people discover the answer that biblical wisdom already knows: the worker who rests one day in seven produces better work than the worker who never stops, because the soul requires restoration that productivity cannot provide.",
    ],
    anchor: "Exodus 20:8-10 — Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the LORD your God.",
  },
  {
    number: "06",
    title: "The Examination of Work — Weekly Review",
    summary:
      "A weekly review of work done in God&rsquo;s presence: not to audit productivity but to discern faithfulness — where your capacities were fully given, where they were held in reserve, and what the pattern reveals about what you actually believe.",
    steps: [
      "At the end of each week, set aside thirty minutes for a work examination. Bring the week before God honestly: what tasks did I approach with full engagement? Where did I hold back, coast, or avoid? The question is not whether I was busy but whether I was faithful.",
      "Review the week for the &ldquo;buried talent&rdquo; pattern: any capacity, relationship, opportunity, or responsibility that I left in the ground out of fear, laziness, or distraction. Name it without self-condemnation but with honest clarity.",
      "Identify one area where diligence produced visible fruit — however small — and thank God for it. Gratitude for completed work anchors the habit of doing it well; it builds the association between faithfulness and joy.",
      "Plan the next week&rsquo;s three most important tasks before closing the review, so Monday morning begins with direction rather than the reactive drift that acedia prefers.",
    ],
    anchor: "Matthew 25:21 — His master said to him, &ldquo;Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Thomas Aquinas",
    role: "Summa Theologica — Sloth as Sadness About Spiritual Good",
    quote:
      "Sloth is a sadness about spiritual good, insofar as it is a divine good... It is a torpor of the mind which neglects to begin good.",
    bio: "Aquinas&rsquo;s treatment of acedia in the Summa Theologica (II-II, Q. 35) remains the most rigorous analysis in Christian thought. He defines sloth not as mere physical laziness but as a spiritual sorrow — a sadness specifically about the goodness of God as encountered in the demands of one&rsquo;s calling. The acedic person is not simply tired; they are sad about what they are supposed to love. Aquinas identifies the daughters of acedia — malice, spite, faintheartedness, despair, sluggishness in observing the commandments, and wandering of the mind after unlawful things — which is a remarkably modern psychological portrait. His cure is not willpower but contemplation of the divine goodness, the recovery of wonder at what is being refused.",
  },
  {
    name: "Dorothy Sayers",
    role: "The Other Six Deadly Sins — Acedia as Modernity&rsquo;s Cardinal Vice",
    quote:
      "It is the sin that believes in nothing, cares for nothing, seeks to know nothing, interferes with nothing, enjoys nothing, hates nothing, finds purpose in nothing, lives for nothing, and remains alive because there is nothing for which it will die.",
    bio: "Dorothy Sayers delivered &ldquo;The Other Six Deadly Sins&rdquo; as a lecture in 1941, and her treatment of sloth has lost nothing in eighty years. A playwright and mystery novelist as well as theologian, Sayers saw acedia not as the vice of the couch but as the defining condition of modern Western culture: a profound disengagement from truth, beauty, and moral reality, masked as sophistication and tolerance. She argued that sloth was far more dangerous than the sins people publicly deplore because it produces no passion, stirs no resistance, and quietly allows everything that matters to decay through inattention. Her lecture remains the sharpest cultural diagnosis of diligence&rsquo;s opposite in the modern period.",
  },
  {
    name: "R.C. Sproul",
    role: "Tabletalk &amp; Ligonier — Excellence as a Christian Obligation",
    quote:
      "We are to do all things as to the Lord. That includes excellence. Mediocrity in the service of God is not humility; it is an insult to the One we serve.",
    bio: "R.C. Sproul argued across his teaching career that excellence in work is not vanity or worldliness but a theological obligation: because we serve a God who does all things excellently, and because all legitimate work is a form of service to that God, the quality of our effort reflects the quality of our theology. His essay &ldquo;Intellectual Holiness&rdquo; makes the case that the Christian mind, in particular, is called to rigor, precision, and full engagement — that intellectual sloppiness in Christian teaching is not just an aesthetic failure but a failure of love toward God and neighbor. Sproul modeled what he taught: his preparation for every lecture was meticulous, his reading broad, and his attention to precision in language a visible expression of diligence in the service of truth.",
  },
  {
    name: "Dallas Willard",
    role: "The Spirit of the Disciplines — Training vs. Trying",
    quote:
      "Grace is not opposed to effort; it is opposed to earning. Effort is action. Earning is attitude. Disciplines are practices that put us where God can work on us — they are not the work itself.",
    bio: "Dallas Willard&rsquo;s contribution to the theology of diligence is his distinction between training and trying. Most Christians approach spiritual growth — and by extension, moral formation in areas like diligence — by direct effort: I will simply try harder to be disciplined. Willard shows why this fails: you cannot become a good pianist by trying hard during a recital; you must practice scales for thousands of hours. The spiritual disciplines are the &ldquo;scales&rdquo; — structured practices that train the character over time so that virtuous action becomes the natural reflex of a transformed will. Applied to diligence, Willard&rsquo;s insight means that the solution to laziness is not a resolution but a restructured life — new rhythms, new environments, new practices that train the will to engage.",
  },
  {
    name: "Tim Challies",
    role: "Do More Better — Productivity in Service of People, Not Performance",
    quote:
      "The goal of productivity is not to accomplish more for its own sake but to free yourself to be more fully present to the people and callings God has given you. Diligence is love made efficient.",
    bio: "Tim Challies&rsquo; Do More Better is deliberately thin — a short, practical guide to productivity rooted in a theological vision: that we have been entrusted with gifts, responsibilities, and relationships, and that diligence is how we steward them. Challies is careful to distinguish Christian productivity from secular productivity: the point is not maximum output or efficiency for its own sake but faithfulness to the actual responsibilities God has given you, in service of the actual people in your life. His system — mission, roles, goals, tasks — is simple enough to use and grounded enough to orient. He is particularly good on the relationship between diligence and rest, arguing that the person who cannot stop is no more faithful than the person who cannot start.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience in the Same Direction — Diligence as Discipleship",
    quote:
      "There is a great market for religious experience in our world; there is little enthusiasm for the patient acquisition of virtue, little inclination to sign up for a long apprenticeship in what earlier generations of Christians called a holy life.",
    bio: "Eugene Peterson spent his ministry resisting the twin temptations of American Christian culture: the demand for immediate results and the flight from patient, unremarkable faithfulness. His A Long Obedience in the Same Direction — its title borrowed from Nietzsche — makes the case that discipleship is not an event but a direction: the long, daily, often undramatic work of following Jesus through the Psalms of Ascent. Peterson&rsquo;s vision of diligence is not productivity but perseverance — the monk&rsquo;s ora et labora applied to the pastor, the parent, the parishioner. The great work of the Christian life, he insists, is done in the small rooms, on the ordinary days, by people who have decided to be faithful whether or not it is interesting.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Ecclesiastes 9:10",
    text: "Whatever your hand finds to do, do it with all your might, for in the realm of the dead, where you are going, there is neither working nor planning nor knowledge nor wisdom.",
    reflection:
      "The Preacher&rsquo;s urgency is not fatalism but sobriety: the time for doing is short, and the quality of engagement during it is the choice that remains. Whatever your hand finds — not the grand thing but the next thing, the thing in front of you — it deserves everything you have.",
  },
  {
    reference: "Proverbs 6:6-8",
    text: "Go to the ant, O sluggard; consider her ways, and be wise. Without having any chief, officer, or ruler, she prepares her bread in summer and gathers her food in harvest.",
    reflection:
      "The ant&rsquo;s wisdom is self-generated — no supervisor required — and seasonal: she reads the time and acts accordingly. Diligence without external pressure is the mark of a person who has internalized the why of work. The ant does not need to be convinced; she acts because the season is what it is.",
  },
  {
    reference: "Colossians 3:23-24",
    text: "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.",
    reflection:
      "The transformation of ordinary work into worship happens in the audience shift: from men to the Lord. The quality of engagement required does not change — heartily means the same thing — but the motivation is now bottomless. When the Lord is the audience, even unseen, unrecognized, unrewarded work is received by the only One whose receipt matters.",
  },
  {
    reference: "Romans 12:11",
    text: "Do not be slothful in zeal, be fervent in spirit, serve the Lord.",
    reflection:
      "Paul places diligence in the heart of his description of the transformed Christian life, alongside love, honor, and perseverance. The fervency he calls for is not emotional excitability but sustained intensity — the boiling that does not cool down, the fire that has caught rather than merely being lit. It is directed at service, and service is directed at the Lord.",
  },
  {
    reference: "Matthew 25:21",
    text: "His master said to him, &ldquo;Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.&rdquo;",
    reflection:
      "The commendation is for faithfulness, not scale. The servant who doubled two talents hears the same words as the servant who doubled five. The master&rsquo;s metric is not the size of the result but the quality of the engagement — faithful over a little is faithful enough to receive the joy of the master. The little is the place where most of us actually live.",
  },
  {
    reference: "Proverbs 31:17, 27",
    text: "She dresses herself with strength and makes her arms strong... She looks well to the ways of her household and does not eat the bread of idleness.",
    reflection:
      "The Proverbs 31 woman is the positive counterpart to the sluggard: purposeful, skilled, forward-looking, and consistently present to her responsibilities. She does not eat the bread of idleness — not because she despises rest but because she has found the deeper satisfaction of work done faithfully for those she loves. Diligence, here, is simply love expressed through full engagement.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "QmYQg0Wfp4Q", title: "What Is Sloth? Acedia and the Spiritual Danger of Laziness" },
  { videoId: "3D5KasAGzGk", title: "Work as Worship — Colossians 3:23 and the Theology of Diligence" },
  { videoId: "B3lsJMIEVcI", title: "The Parable of the Talents — Faithfulness in Little Things" },
  { videoId: "RfUFnb_WZHA", title: "Dallas Willard on Spiritual Disciplines and the Transformed Will" },
  { videoId: "ViTMiKTQSrk", title: "Dorothy Sayers: The Sin of Acedia in the Modern Age" },
  { videoId: "nZXFHD78FDo", title: "Rest, Work, and the Sabbath Rhythm" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianDiligencePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<DLGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [task, setTask] = useState("");
  const [howDiligent, setHowDiligent] = useState("");
  const [forWhom, setForWhom] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as DLGEntry[]);
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
    if (!task.trim() || !howDiligent.trim()) return;
    const entry: DLGEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      task: task.trim(),
      howDiligent: howDiligent.trim(),
      forWhom: forWhom.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTask("");
    setHowDiligent("");
    setForWhom("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
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
              Work, Calling &amp; Character
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Whatever Your Hand Finds: Christian Diligence
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Sloth is one of the seven deadly sins, but the church rarely preaches it — perhaps
              because it does not look dramatic. Acedia is the quiet failure to fully engage with
              what you have been given to do, and in the digital age it has never had better
              camouflage. This guide traces the theology of diligence from Ecclesiastes through
              Paul, examines the ant and the sluggard of Proverbs, confronts acedia in its modern
              forms, and offers practices for doing whatever your hand finds with all your might.
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
                &ldquo;Whatever you do, work heartily, as for the Lord and not for men, knowing
                that from the Lord you will receive the inheritance as your reward. You are serving
                the Lord Christ.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>
                Colossians 3:23-24
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
                Before diligence is a productivity practice, it is a theological conviction about
                the dignity of work, the danger of acedia, and the identity of the one for whom all
                work is ultimately done. These seven studies trace the biblical teaching from
                Ecclesiastes to Colossians, from the sluggard in Proverbs to the faithful servant
                in the parable.
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
                        background: "rgba(245, 158, 11, 0.07)",
                        border: `1px solid rgba(245, 158, 11, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The Preacher&rsquo;s urgency, the ant&rsquo;s consistency, Paul&rsquo;s
                  transformed audience, the Benedictine rhythm, the servant&rsquo;s faithfulness in
                  little — these are not separate lessons but a single theology of work: God has
                  given you things to do, the time to do them is finite, the One for whom you do
                  them is watching with gladness, and the verdict &ldquo;well done, faithful
                  servant&rdquo; awaits those who did not bury the talent. Explore the interior life
                  that sustains diligence in{" "}
                  <Link href="/christian-holiness" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Holiness
                  </Link>{" "}
                  or go deeper on excellence and calling in{" "}
                  <Link href="/christian-vocation" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Vocation
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
                Diligence is not a mood — it is a set of choices, repeated and structured into a
                life. These six practices address the specific ways acedia defeats ordinary people:
                distraction, avoidance, misaligned priorities, and the absence of sabbath rest that
                makes sustainable diligence possible. Start with one. The Journal tab accompanies
                the whole.
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
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about motivation
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices will fail if diligence remains a self-improvement project. The
                  deep motivation for doing everything with all your might is not productivity,
                  reputation, or even character formation — it is that you serve a Lord who notices,
                  who cares, and who one day will say either &ldquo;well done, faithful one&rdquo;
                  or &ldquo;why did you bury it?&rdquo; Work done coram Deo — before the face of God
                  — is work already offered, already received, already counted, whatever the visible
                  results turn out to be.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers on work, sloth, and faithfulness — from Aquinas&rsquo;s medieval
                analysis of acedia to Dorothy Sayers&rsquo; wartime diagnosis of a civilization
                too tolerant to care, from Dallas Willard&rsquo;s philosophy of formation to
                Eugene Peterson&rsquo;s long obedience.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: AMBER,
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
                Six passages — from Ecclesiastes to the parable of the talents — that form the
                spine of the biblical doctrine of diligence. Read one per week alongside the
                Journal practice. Let each text name both the standard and the grace that makes it
                possible.
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Lord, you
                  created work before the fall — labor is your gift and your dignity&rdquo;),
                  confession (&ldquo;I have buried talents, avoided the difficult task, and
                  scrolled when I should have worked&rdquo;), and petition (&ldquo;fill me with
                  zeal for what you have given me to do, and let me do it heartily, as for
                  you&rdquo;). The difference between diligence as duty and diligence as worship
                  begins in prayer.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The diligence journal asks three questions about your work: what task, how
                diligently you approached it, and — the theological question — for whom you did
                it (the Lord, or people&rsquo;s approval, or your own anxiety). Entries are saved
                privately in your browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New diligence entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="dlg-task" style={labelStyle}>
                    The task
                  </label>
                  <input
                    id="dlg-task"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Name the specific task — work project, household responsibility, creative work, spiritual discipline"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="dlg-how" style={labelStyle}>
                    How diligently did you approach it?
                  </label>
                  <textarea
                    id="dlg-how"
                    value={howDiligent}
                    onChange={(e) => setHowDiligent(e.target.value)}
                    placeholder="Honest self-assessment: full engagement or half-hearted? Did you bring all your might, or hold back? What made the difference?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="dlg-forwhom" style={labelStyle}>
                    For whom — deeper motivation
                  </label>
                  <textarea
                    id="dlg-forwhom"
                    value={forWhom}
                    onChange={(e) => setForWhom(e.target.value)}
                    placeholder="Honest answer: for the Lord, for people I love, for approval, for fear? What was driving the engine of your effort?"
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!task.trim() || !howDiligent.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !task.trim() || !howDiligent.trim() ? BORDER : AMBER,
                    color: !task.trim() || !howDiligent.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !task.trim() || !howDiligent.trim() ? "not-allowed" : "pointer",
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
                      Name a task, assess your engagement honestly, and trace its deepest
                      motivation. A month of entries will show you the pattern of how you work
                      and for whom.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: AMBER }}>
                              {entry.task}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.task}`}
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
                            How diligent
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.howDiligent}
                          </p>
                        </div>

                        {entry.forWhom && (
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
                              For whom
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.forWhom}
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
                Teaching to watch slowly — on acedia, work as worship, the parable of the talents,
                Willard on spiritual disciplines, Sayers on sloth, and the sabbath rhythm.
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
              Faithful in little, faithful in much
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The verdict &ldquo;well done, faithful servant&rdquo; will not be pronounced on grand
              achievements — it will be pronounced on ordinary faithfulness, the small things done
              with all your might, before an audience of One. Most of what God gives us to do is
              unremarkable: the daily work, the recurring responsibility, the task no one else will
              do. Diligence is the decision to do it fully, to bring yourself completely, to refuse
              the noonday demon&rsquo;s invitation to hold back. That decision, repeated over a
              lifetime, is what a faithful life is made of.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how diligence and interior formation relate in{" "}
              <Link href="/christian-holiness" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              , explore the calling behind the work in{" "}
              <Link href="/christian-vocation" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Vocation
              </Link>
              , practice sustainable rest in{" "}
              <Link href="/sabbath" style={{ color: AMBER, textDecoration: "underline" }}>
                The Sabbath
              </Link>
              , or strengthen the will in{" "}
              <Link href="/self-control" style={{ color: AMBER, textDecoration: "underline" }}>
                Self-Control
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
