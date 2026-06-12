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

const STORAGE_KEY = "vine_christiandiscipline_entries";

interface DSCEntry {
  id: string;
  date: string;
  disciplineArea: string;
  thePlan: string;
  dayStreak: number;
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
    badge: "1 Timothy 4:7-8",
    title: "Train Yourself in Godliness &mdash; The Gymnastics of the Soul",
    paragraphs: [
      "Paul&rsquo;s instruction to Timothy in 1 Timothy 4:7-8 is one of the most practically charged sentences in the New Testament: &ldquo;Train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.&rdquo; The Greek word Paul uses for &ldquo;train&rdquo; is &ldquo;gymnazo&rdquo; — from which we get &ldquo;gymnasium&rdquo; — a word that carries the full weight of athletic discipline: systematic, intentional, repeated effort aimed at a specific kind of fitness. Godliness, Paul is saying, is not acquired by accident. It requires training.",
      "The comparison to bodily training is instructive not merely because it elevates spiritual discipline but because it clarifies what discipline is. A person who decides on Monday to become physically fit does not achieve fitness by making the decision; they achieve it by showing up at the gym on Tuesday, and Wednesday, and Thursday, and the Tuesday after that. The decision initiates; the training produces. Godliness operates by the same logic. The person who decides they want to be more patient, more prayerful, more generous — and then waits for these qualities to arrive — will wait a very long time. The person who designs a training regimen for them and works it, day by day and week by week, is operating on the New Testament model.",
      "Paul&rsquo;s phrase &ldquo;of some value&rdquo; for bodily training is not dismissive — he is not a Gnostic who despises the body. He is calibrating: bodily fitness, good and real as it is, has limits. It profits in this age and not the next. Godliness, trained in by the same disciplines of repetition and intention, has value &ldquo;in every way&rdquo; — in this life and in the life to come. The investment calculus is simple. If you would train your body for health, how much more should you train your soul for the life that never ends?",
    ],
    callout: {
      label: "The principle",
      text: "Godliness is not a talent or a gift that some Christians happen to have. It is a trained capacity, developed by systematic, intentional repetition of the disciplines that shape the soul toward Christ. You train for godliness the same way you train for anything: by doing the thing, repeatedly, until it reshapes you.",
    },
  },
  {
    badge: "1 Corinthians 9:24-27",
    title: "The Athlete Analogy &mdash; Paul&rsquo;s Self-Discipline",
    paragraphs: [
      "Paul&rsquo;s athletic analogy in 1 Corinthians 9 is among the most vivid and personal passages he wrote: &ldquo;Do you not know that in a race all the runners run, but only one receives the prize? So run that you may obtain it. Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable. So I do not run aimlessly; I do not box as one beating the air. But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified&rdquo; (vv. 24-27). The Greek games were among the most prestigious athletic contests in the ancient world; Paul&rsquo;s audience knew what training for them required.",
      "Three features of Paul&rsquo;s self-description are remarkable. First, he trains for a specific goal: not aimlessly, not shadowboxing, but with a defined objective. Christian discipline without direction is mere activity; it must be aimed at something — at a specific virtue, a specific weakness, a specific likeness of Christ that the soul currently lacks. Second, he describes his discipline as self-control &ldquo;in all things&rdquo; — not merely in the obvious areas but in every domain of life. Third, and most startling, he names his motive: not to win approval from others but out of genuine concern that his own spiritual formation be real and not merely performed. He has seen enough of religion to know that a person can preach to thousands while remaining undisciplined in their own soul, and he refuses that path.",
      "The Corinthians lived in the shadow of the Isthmian Games, held near Corinth every two years. They understood that the athletes who competed had submitted to ten months of rigorous, supervised training. They had given up ease, comfort, and self-indulgence for a perishable crown of celery or pine. Paul looks at that and says: if they will do that for a crown that withers, what should disciples of Christ be willing to do for the one that does not? The logic is not guilt but proportion: our training ought to be at least as serious as theirs, because what we are training for is infinitely more valuable.",
    ],
  },
  {
    badge: "John 15:2",
    title: "The Pruning Vine &mdash; God&rsquo;s Discipline Makes Us Fruitful",
    paragraphs: [
      "In John 15, Jesus uses the vine and branches to describe the relationship between himself, his disciples, and his Father the vinedresser: &ldquo;Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit&rdquo; (v. 2). The key word is &ldquo;prunes&rdquo; — kathairo in Greek, meaning to cleanse or cut back. The fruitful branch is pruned, not left to grow unchecked. More fruit requires more pruning.",
      "Every experienced gardener knows the counterintuitive truth behind this image: the vine that is not pruned does not produce more fruit; it produces more wood. Growth without discipline produces bulk without productivity, size without substance. The discipline that cuts back — that removes the runners, the water shoots, the unproductive growth — is not cruelty but craftsmanship. The vinedresser who prunes knows that the goal is not the comfort of the branch but the abundance of the harvest.",
      "Applied to spiritual formation, this means that the disciplines which feel like privation — the fasting that says no to the body, the silence that says no to noise, the simplicity that says no to acquisition, the solitude that says no to company — are not punishments or mere exercises in willpower. They are pruning. They cut back what is growing in the wrong direction so that what is meant to grow can grow more fully. The fruitful Christian is not the one who has avoided all pruning but the one who has submitted to it, recognized its purpose, and trusted the Vinedresser who holds the knife.",
    ],
    callout: {
      label: "The image",
      text: "Spiritual discipline is God&rsquo;s pruning — not punishment, but craftsmanship. The branch that submits to the cut bears more fruit than the branch left to sprawl. Every discipline that cuts something back creates space for something better to grow in its place.",
    },
  },
  {
    badge: "Hebrews 12:5-11",
    title: "Discipline as Sonship &mdash; God Disciplines Those He Loves",
    paragraphs: [
      "The author of Hebrews quotes Proverbs 3:11-12 to address Christians who are suffering and wondering whether God has abandoned them: &ldquo;My son, do not regard lightly the discipline of the Lord, nor be weary when reproved by him. For the Lord disciplines the one he loves, and chastises every son whom he receives&rdquo; (Heb 12:5-6). The argument is striking: discipline is not evidence of God&rsquo;s absence or displeasure — it is evidence of his fatherhood. The child who is never disciplined is not the favored child; they are the neglected one. &ldquo;If you are left without discipline... then you are illegitimate children and not sons&rdquo; (v. 8).",
      "The text continues: &ldquo;For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it&rdquo; (v. 11). The phrase &ldquo;trained by it&rdquo; uses the same gymnastic root as 1 Timothy 4:7 — the discipline is training, and the training, painful in the moment, produces something that could not come any other way: the peaceful fruit of righteousness. This is the long game of spiritual formation. The fruit is not immediate; it comes &ldquo;later,&rdquo; to those who remain in the training rather than abandoning it when it becomes difficult.",
      "Hebrews 12 speaks simultaneously to the disciplines we choose — the voluntary training of the spiritual life — and to the disciplines God sends: suffering, loss, failure, the painful paring away of what we thought we needed. Both are training. Both are fatherly. Both aim at the same fruit. The Christian who learns to receive voluntary discipline readily is better prepared to receive involuntary discipline without despair, recognizing in both the hand of the Father who disciplines every son he receives.",
    ],
  },
  {
    badge: "Discipline vs. Legalism",
    title: "The Crucial Difference Between Discipline and Legalism",
    paragraphs: [
      "The single greatest confusion in evangelical discussions of spiritual discipline is the equation of discipline with legalism. When Christians hear that they should fast regularly, maintain daily prayer, practice simplicity, or structure their devotional lives, many hear: &ldquo;earn your standing with God through religious performance.&rdquo; This is precisely what the spiritual disciplines do not teach, and the confusion does real damage — it leads either to the legalism it fears or to the antinomian opposite in which no discipline is practiced at all because all discipline is suspected of being legalism.",
      "The distinction is this: legalism uses spiritual practices to generate standing before God, to earn favor, to justify the self before the divine tribunal. Discipline uses spiritual practices to put ourselves in the place where God transforms us — not to earn transformation, but to be available for it. Dallas Willard&rsquo;s phrase is exact: the disciplines are &ldquo;a means of grace,&rdquo; not a means of merit. The person who fasts is not earning anything from God; they are removing an obstacle to God and creating space for what only God can do. The person who maintains regular solitude is not impressing God with their religiosity; they are clearing the noise that prevents them from hearing what God has to say.",
      "Richard Foster&rsquo;s image in &ldquo;Celebration of Discipline&rdquo; is the most useful corrective: the disciplines are like a farmer&rsquo;s field preparation. The farmer cannot make the crop grow; only God can do that. But the farmer can plow, can weed, can water — can do all the things that put the ground in a state to receive what God provides. A farmer who sits on the back porch waiting for God to grow the crop without cultivation is not exhibiting faith; they are exhibiting presumption. So too the Christian who expects godliness to appear without the cultivation of spiritual discipline is not relying on grace — they are presuming upon it.",
    ],
  },
  {
    badge: "Richard Foster",
    title: "&ldquo;Celebration of Discipline&rdquo; &mdash; The Three Streams of Spiritual Formation",
    paragraphs: [
      "Richard Foster&rsquo;s 1978 book &ldquo;Celebration of Discipline&rdquo; organized the classical spiritual disciplines into three categories that have shaped evangelical thinking about formation for nearly five decades. The inward disciplines — meditation, prayer, fasting, and study — are oriented toward the interior life, the formation of the mind and will in their relation to God. The outward disciplines — simplicity, solitude, submission, and service — are oriented toward the external life, the structuring of possessions, relationships, and activities in ways that support rather than subvert interior formation. The corporate disciplines — confession, worship, guidance, and celebration — are practiced not alone but in community, in the body of Christ where the gifts of others become means of grace for each member.",
      "Foster&rsquo;s organizing insight is that the disciplines are not ends in themselves — they are not the point. They are means of opening the self to the transforming work of the Spirit. A person who practices fasting without expecting God to meet them in the fast has merely skipped meals; a person who practices solitude without expectation of God&rsquo;s presence has merely been alone. The discipline creates the space; the Spirit fills it. This is why Foster consistently warns against the &ldquo;righteousness of the Pharisee&rdquo; — the person who mistakes the discipline for the substance and pursues the form without the content.",
      "The three-stream framework is practically useful because it names the incompleteness of one-stream discipleship. A person who practices only the inward disciplines can develop a rich interior life that fails to produce changed behavior in the world. A person who practices only the outward disciplines can structure their external life without the interior formation that gives those structures life. A person who practices only the corporate disciplines may belong to a community without developing the personal depth that sustains them in solitary trial. Foster&rsquo;s full framework calls for all three, in proportions fitted to the individual soul and season.",
    ],
    callout: {
      label: "The framework",
      text: "Inward disciplines form the interior life; outward disciplines structure the external life in support of interior formation; corporate disciplines practice formation in community. All three are needed; all three work together; and none of them does anything by itself — they are means of grace, not generators of it.",
    },
  },
  {
    badge: "Dallas Willard",
    title: "Training, Not Trying &mdash; Willard on Spiritual Formation",
    paragraphs: [
      "Dallas Willard&rsquo;s most enduring contribution to the theology of spiritual discipline is a single phrase that reframes the entire conversation: &ldquo;Grace is not opposed to effort, it is opposed to earning.&rdquo; Willard spent much of his philosophical and theological career arguing that evangelical Christianity had made a category error — it had identified all effort with works-righteousness, and in doing so had left believers with no account of how transformation actually happens. The result was what Willard called &ldquo;sin management&rdquo; — Christianity as a system for forgiving the same sins repeatedly, without the genuine formation of character that the New Testament consistently envisions.",
      "Willard&rsquo;s alternative is the model of training versus trying. The athlete who runs the race does not &ldquo;try&rdquo; to perform well on race day by concentrating very hard in the final meters; they train for months before the race so that the performance on race day flows from formed capacity rather than desperate effort. The Christian who wants to respond with patience when provoked cannot achieve patience by gritting their teeth in the moment of provocation; they must train themselves in patience through the practices that form a patient character — so that in the moment of provocation, patience flows from who they have become rather than from white-knuckled resolution.",
      "Willard argued that every virtue is the product of a kind of training, and that the spiritual disciplines are the training regimen for Christian character. They are not add-ons for advanced practitioners; they are the normal equipment of any person who intends to be genuinely transformed by grace. The undisciplined Christian is not more free — they are less formed, less capable of the life they are called to. Freedom, in Willard&rsquo;s vision, is not the absence of constraint but the presence of trained capacity: the ability to do what you most deeply want to do because you have become the kind of person who can.",
    ],
  },
  {
    badge: "The Long Game",
    title: "Small Daily Disciplines and the Transformation of a Life",
    paragraphs: [
      "One of the most important truths about spiritual discipline is the one that the short-term mind most resists: the effects of daily practice accumulate over years, not days. The person who begins a practice of morning prayer does not feel significantly more formed at the end of a week. At the end of a month, the change is small and often imperceptible. At the end of a year, it is noticeable. At the end of ten years, it is decisive. The soul that has prayed daily for ten years is not the same soul that began — not because of any single session but because of the cumulative, compounding formation that consistent practice produces.",
      "This long-game dynamic is why consistency matters more than intensity. An inconsistent practice of dramatic occasional disciplines produces less formation than a modest but unbroken daily practice. The five minutes of scripture reading done every morning without fail, over years, reshapes the mind far more than the annual spiritual retreat done without any daily practice between retreats. James Clear&rsquo;s secular insight about habits — that a 1% improvement compounded daily produces extraordinary results over time — captures something the masters of the interior life understood long before behavioral science: small daily disciplines are the most powerful transformative force in the formation of character.",
      "The spiritual classics consistently describe the early years of discipline as difficult and the later years as fruitful in ways that the beginning could not have predicted. The writer who has maintained a daily prayer practice for twenty years does not find prayer hard in the way the beginner does; the one who has fasted weekly for a decade does not experience the same craving resistance as the first-timer. The disciplines, sustained, become less effortful and more fruitful — not because the discipline has disappeared but because the soul has been formed by it into a shape that fits the practice. This is what Paul means by &ldquo;training&rdquo; rather than mere trying: the goal is not to endure the discipline indefinitely but to be changed by it.",
    ],
    callout: {
      label: "The long game",
      text: "Spiritual disciplines compound. The effects of a daily practice are nearly invisible in a week, small in a month, noticeable in a year, and decisive in a decade. The person who maintains modest daily disciplines consistently is being formed more thoroughly than the person who practices dramatic occasional disciplines without the daily structure. Start small. Start now. Stay long.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Designing Your Training Regimen",
    summary:
      "A discipline without a plan is a wish. This practice helps you move from general intention (&ldquo;I should pray more&rdquo;) to specific training design (&ldquo;I will pray from 6:45 to 7:10 every morning, beginning with the Psalms&rdquo;). Specificity is what turns aspiration into formation.",
    steps: [
      "Identify the one area of your spiritual life where the gap between who you are and who you want to be is most significant. Do not try to train everything at once; the athlete who trains everything trains nothing. Name one thing: prayer, scripture reading, fasting, simplicity, service, sabbath, solitude. One.",
      "Design the specific practice. When, exactly? How long, exactly? By what method? The specificity is not legalism — it is craft. A runner who says &ldquo;I will run more&rdquo; runs less than one who says &ldquo;I will run at 6am on Monday, Wednesday, and Friday for thirty minutes.&rdquo; God works with what you actually do, not what you intend to do eventually.",
      "Lower the bar to the level you will actually keep. Dallas Willard: begin with what you can sustain, not with what would impress. Five consistent minutes of prayer outweighs fifty inconsistent minutes. The discipline that actually happens is doing its work; the discipline that &ldquo;I will get to when things calm down&rdquo; is doing none.",
      "Track the practice in the Journal tab. Not to measure your performance before God, but because the record is useful. It shows you your actual pattern — which days you keep the practice, which you do not, whether the practice is growing or shrinking. The record is not a report card; it is a diagnostic tool.",
    ],
    anchor: "1 Timothy 4:7 — Train yourself for godliness.",
  },
  {
    number: "02",
    title: "The Fasting Practice &mdash; Training the Body&rsquo;s Governance",
    summary:
      "Fasting is the discipline most feared and least practiced in contemporary evangelicalism. It is also the one most explicitly modeled by Jesus, who assumed his disciples would fast (Matt 6:16 &mdash; &ldquo;when you fast,&rdquo; not &ldquo;if you fast&rdquo;). This practice is an introduction to the discipline and its spiritual logic.",
    steps: [
      "Begin with a one-meal fast: skip one meal, spend the time you would have used eating in prayer instead. This is not a hunger strike or a diet; it is a reallocation of appetite — physical appetite redirected to spiritual hunger. The body&rsquo;s protest (&ldquo;I am hungry&rdquo;) becomes a prompt: &ldquo;I am hungry for God.&rdquo;",
      "Notice what happens in the body and in the soul during the fast. Most first-time fasters are surprised by how much of their mental and emotional life is occupied by thoughts of food, by the clock approaching mealtime, by the restlessness that arises when appetite is denied. This noticing is itself valuable: it shows you how governed you are by a single physical appetite, and therefore how much is to be gained by training that governance.",
      "After the one-meal fast, consider whether a weekly discipline is sustainable. Many Christians throughout history have kept a weekly fast — Wednesday or Friday — as a regular training in the mortification of the body and the cultivation of spiritual hunger. If that seems too much, begin with monthly and build toward weekly over a year.",
      "Keep the fast private (Matt 6:16-18). Jesus is explicit: fasting done for visibility is its own reward and misses the point. The fast that is known only to God and you is the one that forms the soul in the way only private discipline can. The fast that becomes public performance is a discipline hollowed out.",
    ],
    anchor: "Matthew 6:16 — And when you fast, do not look gloomy like the hypocrites.",
  },
  {
    number: "03",
    title: "The Solitude and Silence Practice",
    summary:
      "Solitude and silence are the disciplines that all other disciplines depend on, because they create the interior quiet in which God&rsquo;s formation work can be heard and received. The person who is never quiet is difficult to form, because formation requires receptivity and receptivity requires stillness.",
    steps: [
      "Begin with twenty minutes of silence per day — not meditation on a text, not intercessory prayer, not journaling, but silence: the deliberate removal of input and the waiting for whatever God brings to the surface. This will feel unproductive and vaguely anxious at first. That feeling is the noise inside that the silence is exposing.",
      "As you practice silence, notice what rises: anxieties you had suppressed, resentments you had not acknowledged, desires you had been managing by distraction. These surfacings are not problems to be solved immediately; they are material to bring to God. The silence is not comfortable, but it is honest in a way that busy noise is not.",
      "Extend the practice to longer periods monthly or quarterly: a morning, then a half-day, then a full day of solitude and silence. The rule of the extended period is the same as the daily practice — no input, no agenda, just presence with God. Many who attempt this for the first time find the first half uncomfortable and the second half transformatively restful.",
      "Pair the silence with simplicity: turn off the phone, close the laptop, go somewhere without stimulation. The disciplines reinforce each other. Simplicity creates the external conditions for silence; silence creates the interior conditions for hearing. Together they form the receptive soul that the other disciplines need in order to bear their full fruit.",
    ],
    anchor: "Psalm 46:10 — Be still, and know that I am God.",
  },
  {
    number: "04",
    title: "Scripture Memorization as Spiritual Formation",
    summary:
      "Scripture memorization is one of the most undervalued disciplines in contemporary Christianity and one of the most valued by the masters of the interior life. To carry a text inside you is different from having read it; the text you have memorized becomes available in any moment — at 3am in the dark, in the middle of a difficult conversation, in the instant before a temptation.",
    steps: [
      "Begin with a single complete passage rather than isolated verses: a psalm (Psalm 23, 103, or 139), a chapter of Paul (Romans 8, Philippians 4, Colossians 3), or a section of the Sermon on the Mount. Complete passages have a coherence and a rhythm that helps them stick and that makes them more usable than isolated fragments.",
      "Memorize slowly, a verse or two per day, reviewed each subsequent day before adding new material. The method of spaced repetition — review at increasing intervals — is not just a language-learning technique; it is how the mind consolidates material into long-term memory. The scripture you memorized three days ago and have reviewed daily since is more yours than the scripture you memorized yesterday.",
      "Pray the memorized text. After you can recite a passage accurately, begin to pray it — moving through it phrase by phrase, letting each phrase become a prayer. A memorized psalm prayed in this way opens dimensions of the text that mere reading cannot reach. The text you have internalized speaks to you from the inside in a way the text you merely encounter speaks from the outside.",
      "Notice over months how the memorized texts begin to appear uninvited in situations where they are relevant: a fear met by &ldquo;I will fear no evil,&rdquo; a temptation met by &ldquo;flee youthful passions,&rdquo; a discouragement met by &ldquo;He who began a good work in you will bring it to completion.&rdquo; This is the discipline bearing its fruit: the formation of a mind furnished with the Word of God, available in every circumstance.",
    ],
    anchor: "Psalm 119:11 — I have stored up your word in my heart, that I might not sin against you.",
  },
  {
    number: "05",
    title: "The Sabbath as Discipline",
    summary:
      "Sabbath is both a command and a discipline — the weekly practice of stopping, trusting, and receiving rather than producing and acquiring. In a culture defined by productivity, the Sabbath is one of the most countercultural and most needed of the spiritual disciplines.",
    steps: [
      "Designate one day per week as a day of rest from your productive work. This requires deciding in advance what counts as &ldquo;work&rdquo; for you — not a legalistic list but an honest reckoning with what drives and exhausts you. The Sabbath rest is from what your soul depends on for significance, security, or status, not merely from physical exertion.",
      "Fill the Sabbath with delight — not merely the absence of work but the presence of what restores, celebrates, and gives thanks. The Westminster Catechism speaks of the Sabbath as &ldquo;a holy rest all the day... taken up in the public and private exercises of God&rsquo;s worship, and in the duties of necessity and mercy.&rdquo; The Sabbath is not an empty day but a full one — full of a different kind of fullness.",
      "Resist the gravitational pull of &ldquo;just a few minutes of work&rdquo; on the Sabbath. The Sabbath discipline is precisely the training of the will to trust that the world can run without your input for a day — that God is sovereign over your productivity, your deadlines, and your to-do list. The Sabbath practiced faithfully is a weekly act of trust in the God who provides.",
      "Notice what the Sabbath reveals about the rest of the week. The person who cannot rest has a problem with more than rest; they have a problem with control, with identity, with the sources of their significance. The Sabbath, kept faithfully, is a weekly diagnostic of the soul&rsquo;s actual dependence on God versus its performed dependence.",
    ],
    anchor: "Mark 2:27 — The Sabbath was made for man, not man for the Sabbath.",
  },
  {
    number: "06",
    title: "Reviewing and Adjusting Your Disciplines",
    summary:
      "Spiritual discipline without review tends to drift: practices become routine without being formative, or fall away without notice. A quarterly review of your discipline practices is the discipline about your disciplines — the meta-level practice that keeps the whole system honest and fruitful.",
    steps: [
      "Every three months, review the disciplines you have been practicing: which have you kept, which have drifted, which have become routine without remaining formative? The goal of review is not self-condemnation for what you have not done but clarity about what is working and what needs adjustment.",
      "Ask two questions of each practice: Is it still creating space for God&rsquo;s transforming work, or has it become mechanical? And what fruit is it bearing — not immediately, but over the season? A discipline that has become purely mechanical may need to be varied or temporarily set aside; one that is bearing fruit should be protected even when it feels less dramatic than it once did.",
      "Add a new discipline each year rather than each month. The formation that comes from depth in a few practices exceeds the formation that comes from breadth in many practices attempted briefly. Once a practice is established — when it requires little willpower to maintain — consider adding another. Build a portfolio of disciplines one at a time, from the ground up.",
      "Celebrate what has changed. The journal is essential here: looking back at entries from a year ago, or three years ago, shows the formation that daily proximity makes invisible. The person who has prayed daily for three years cannot easily see their own formation, just as a parent cannot see the growth of a child they see every day. The journal and the long view reveal what the daily perspective conceals.",
    ],
    anchor: "Hebrews 12:11 — For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Richard Foster",
    role: "Celebration of Discipline &mdash; The Classical Disciplines Recovered for Evangelical Christianity",
    quote:
      "The disciplines allow us to place ourselves before God so that he can transform us. They are not the transformation itself; they are the means by which we become available to the transforming work of grace.",
    bio: "Richard Foster (b. 1942) is a Quaker theologian and spiritual director whose 1978 book &ldquo;Celebration of Discipline&rdquo; is widely credited with recovering the classical spiritual disciplines for the evangelical tradition at a time when they had largely been forgotten or suspected. Foster was formed in the Quaker tradition&rsquo;s emphasis on interior silence and the direct experience of God, and he brought to his writing a pastoral concern for Christians who were sincere but spiritually shallow — who had beliefs without formation, faith without the practices that give faith depth and staying power. His framework of inward, outward, and corporate disciplines gave a generation of evangelical pastors and lay Christians a vocabulary and a structure for intentional spiritual formation. His later work, including &ldquo;Prayer: Finding the Heart&rsquo;s True Home&rdquo; and &ldquo;Streams of Living Water,&rdquo; extended his treatment to the full range of Christian spiritual tradition, arguing that the major streams of Christian spirituality — contemplative, holiness, charismatic, social justice, evangelical, and incarnational — are not competing traditions but complementary dimensions of a full-orbed life in God.",
  },
  {
    name: "Dallas Willard",
    role: "The Spirit of the Disciplines &mdash; Training, Not Trying",
    quote:
      "Grace is not opposed to effort; it is opposed to earning. Effort is action. Earning is an attitude. The transformation of the human person requires both the grace that only God can give and the effort that only the human can make &mdash; and the two are not in competition.",
    bio: "Dallas Willard (1935-2013) was a philosopher at the University of Southern California whose work on spiritual formation combined rigorous philosophical precision with profound pastoral concern. His book &ldquo;The Spirit of the Disciplines&rdquo; (1988) made the philosophical case that the spiritual disciplines are not optional extras for advanced Christians but the ordinary means by which any person who intends to be transformed by grace must operate. Willard argued that the evangelical church had created a &ldquo;gospel of sin management&rdquo; — a Christianity primarily concerned with getting sins forgiven rather than with the genuine formation of character — and that the result was Christians who were no different in their actual behavior from non-Christians. His proposed solution was not more teaching but more training: the deliberate, intentional, sustained practice of the disciplines that form the soul toward the likeness of Christ. His later work, particularly &ldquo;The Divine Conspiracy,&rdquo; extended this argument into a comprehensive account of the Christian life as apprenticeship to Jesus, the master teacher of the only way to live that actually works.",
  },
  {
    name: "Donald Whitney",
    role: "Spiritual Disciplines for the Christian Life &mdash; Structured Practice for the Modern Evangelical",
    quote:
      "Discipline without direction is drudgery. You must know where you are going and why — what godliness looks like in your life — before the disciplines will make sense as the means of getting there. The disciplines are not the destination; Christ is. They are the road.",
    bio: "Donald Whitney (b. 1955) is a professor of biblical spirituality at Southern Baptist Theological Seminary and the author of &ldquo;Spiritual Disciplines for the Christian Life&rdquo; (1991), which has become one of the most widely used evangelical guides to spiritual formation. Whitney works in the Reformed tradition&rsquo;s emphasis on the means of grace and argues that the spiritual disciplines are simply the biblical means by which Christians pursue growth in godliness. His treatment is systematic and practical: for each discipline, he explains the biblical basis, the historical practice, the contemporary obstacles, and the specific methods by which it can be incorporated into a modern Christian&rsquo;s life. Whitney is particularly attentive to the danger of mere spiritual activity without genuine pursuit of God — the person who reads the Bible without meeting God in it, who prays without real engagement, who fasts without hunger for God. His counsel is to pursue the substance through the form, not to mistake the form for the substance.",
  },
  {
    name: "John Piper",
    role: "When I Don&rsquo;t Desire God &mdash; Disciplined Pursuit of Delight",
    quote:
      "The great enemy of joy is not pain but the lazy soul that will not fight for it. The joy that comes from God does not arrive automatically; it comes to those who seek it, who discipline themselves to sit in its source, who fight the fight of faith against the doubts and distractions that would crowd it out.",
    bio: "John Piper (b. 1946) served as pastor of Bethlehem Baptist Church in Minneapolis from 1980 to 2013 and has written extensively on the life of disciplined devotion. His 2004 book &ldquo;When I Don&rsquo;t Desire God: How to Fight for Joy&rdquo; addressed directly the experience of spiritual dryness and the role of discipline in fighting through it. Piper&rsquo;s contribution to the theology of spiritual discipline is his insistence that delight in God is not simply given to the passive believer but must be fought for, and that the spiritual disciplines are the weapons of that fight. For Piper, the Christian who does not feel joy in God is not excused from pursuing it on that basis; they are called to fight all the harder, using the means God has provided — especially the word and prayer — to rekindle what has cooled. This is not manipulation of emotions but the activation of means: placing oneself in the presence of what is objectively delightful until the subjective delight recovers. His emphasis on the affective dimension of spiritual discipline — the goal is not mere compliance but genuine delight — has shaped a generation of pastors and their understanding of the relationship between discipline, joy, and the glory of God.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience in the Same Direction &mdash; Discipleship as Counter-Culture",
    quote:
      "The word &lsquo;disciple&rsquo; is a technical term in the Gospels, designating a person who has decided to learn from Jesus how to be a human being. Learning takes time. The disciple is not in a hurry to get somewhere; the disciple is working out, in the ordinary events of the week, what it means to live under the teaching and the life of Jesus.",
    bio: "Eugene Peterson (1932-2018) was a pastor, poet, and biblical scholar whose &ldquo;A Long Obedience in the Same Direction&rdquo; (1980) — the title borrowed from Nietzsche&rsquo;s description of what Christianity required — offered one of the most theologically grounded and culturally critical accounts of spiritual discipline in the evangelical tradition. Peterson&rsquo;s argument was simple and searching: American culture is a culture of immediate results, and Christianity requires the opposite. The Psalms of Ascent (Ps 120-134), which pilgrims sang on the way up to Jerusalem for the annual feasts, embody a model of discipleship as journey — slow, sustained, directional, counter-cultural in the best sense. Peterson&rsquo;s pastoral experience at his Maryland church convinced him that the great failure of American Christianity was not intellectual but formational: Christians who knew the right answers but had not been formed by the long practice of repentance, prayer, and worship into the character the answers described. His translation of the Bible, &ldquo;The Message,&rdquo; was an act of the same pastoral conviction: to bring the ancient text into living contact with people who needed not information but formation.",
  },
  {
    name: "Gordon MacDonald",
    role: "Ordering Your Private World &mdash; The Inner Garden and Its Cultivation",
    quote:
      "If my private world is in order, it will be because I have chosen to press into the spiritual disciplines that cultivate the inner garden — not in order to perform religion, but in order to be with the one my soul was made for. The disciplines are the trellis; the love of God is the vine.",
    bio: "Gordon MacDonald (b. 1939) is a pastor and author whose &ldquo;Ordering Your Private World&rdquo; (1984) addressed the epidemic of ministry burnout and spiritual shallowness that he observed in Christian leadership and lay life. MacDonald&rsquo;s central metaphor is the private world as a garden: it can be cultivated intentionally or left to drift into disorder, and the disorder of the private world — the life lived without structure, without silence, without the cultivation of the interior life — is the source of most of the ministry disasters and personal failures he had witnessed. His prescription is not a program but a reorientation: to treat the inner life as the primary investment, recognizing that everything visible and external depends on what is cultivated internally. MacDonald writes with unusual candor about his own failures — including a public moral failure that forced him out of ministry in the late 1980s — and his return to the disciplines that had kept him grounded before and were necessary for his restoration. His work has been particularly influential among pastors and Christian leaders who are vulnerable to the trap of building outward success on an inner life that has not been tended.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "1 Timothy 4:7-8",
    text: "Train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.",
    reflection:
      "The word Paul uses for &ldquo;train&rdquo; — gymnazo — is an athletic term. Godliness is not achieved by wanting it more intensely; it is achieved by training for it systematically and consistently. The comparison to bodily training is not ornamental: it tells you exactly what kind of effort is required and what kind of result it produces.",
  },
  {
    reference: "1 Corinthians 9:27",
    text: "But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.",
    reflection:
      "Paul&rsquo;s concern is not about losing his salvation but about the real possibility that a person can engage in religious activity — even fruitful religious activity — without the genuine personal formation that makes the activity sustainable and authentic. The disciplined body is the trained body: the body that has been brought into alignment with the life of the Spirit rather than allowed to run its own governance.",
  },
  {
    reference: "Hebrews 12:11",
    text: "For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness to those who have been trained by it.",
    reflection:
      "The most important word in this verse may be &ldquo;later.&rdquo; The fruit of discipline does not arrive when the discipline feels good; it arrives after the discipline has done its formative work. The person who abandons a discipline because it does not immediately feel productive is abandoning it before it has borne fruit. The person who stays in the training receives what the training produces.",
  },
  {
    reference: "John 15:2",
    text: "Every branch that does bear fruit he prunes, that it may bear more fruit.",
    reflection:
      "The fruitful branch is pruned, not the unfruitful one alone. The disciplines that cut something back — fasting, solitude, simplicity, silence — are the Vinedresser&rsquo;s pruning: not punishment but craftsmanship. The cutting back is in service of more, not less. What the discipline removes is not good; it is what is preventing better.",
  },
  {
    reference: "Psalm 119:32",
    text: "I will run in the way of your commandments when you enlarge my heart!",
    reflection:
      "The Psalmist knows the connection between the interior life and the lived life: the enlarged heart runs where the narrow heart only walks. The disciplines are means of enlargement — they expand the interior capacity for God and for the obedience that flows from love of God. The goal of training is not a better performance; it is a larger heart.",
  },
  {
    reference: "Philippians 4:11",
    text: "I have learned, in whatever situation I am, to be content.",
    reflection:
      "Contentment is &ldquo;learned&rdquo; — it is a trained capacity, not a natural state or a gift given to some and not others. Paul learned contentment in prison, in shipwreck, in privation and in abundance. The discipline of simplicity, of gratitude, of sabbath, of relinquishment — these are the training by which contentment is learned. It does not arrive; it is cultivated.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "tWJP2DSWKYU", title: "Richard Foster on the Spiritual Disciplines and Transformation" },
  { videoId: "Y3wIxpd7ENA", title: "Dallas Willard: Training vs. Trying in the Christian Life" },
  { videoId: "UBZ-Xil7JHo", title: "Donald Whitney on Spiritual Disciplines for the Christian Life" },
  { videoId: "hfAuNJdnuY4", title: "John Piper: Fighting for Joy Through Spiritual Discipline" },
  { videoId: "RpzwMY5XRJI", title: "Eugene Peterson: A Long Obedience in the Same Direction" },
  { videoId: "K3nU2rJZcXc", title: "Gordon MacDonald on Ordering Your Private World" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianDisciplinePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<DSCEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [disciplineArea, setDisciplineArea] = useState("");
  const [thePlan, setThePlan] = useState("");
  const [dayStreak, setDayStreak] = useState<number>(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as DSCEntry[]);
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
    if (!disciplineArea.trim() || !thePlan.trim()) return;
    const entry: DSCEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      disciplineArea: disciplineArea.trim(),
      thePlan: thePlan.trim(),
      dayStreak,
    };
    setEntries((prev) => [entry, ...prev]);
    setDisciplineArea("");
    setThePlan("");
    setDayStreak(0);
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? AMBER : BORDER}`,
    background: active ? "rgba(245, 158, 11, 0.10)" : "transparent",
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
              Spiritual Formation &amp; Training
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Train Yourself in Godliness: Christian Discipline
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Godliness does not arrive by accident or by good intentions. It requires training &mdash;
              the gymnasium of the soul that Paul describes in 1 Timothy 4. This guide traces the
              theology and practice of spiritual discipline from the athlete analogy through the
              pruning vine, from Richard Foster&rsquo;s three streams to Dallas Willard&rsquo;s
              insight that grace is not opposed to effort but to earning. Learn to train, not merely
              try.
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
                &ldquo;Train yourself for godliness; for while bodily training is of some value,
                godliness is of value in every way, as it holds promise for the present life and also
                for the life to come.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>
                1 Timothy 4:7-8
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
                Eight studies on the theology of spiritual discipline &mdash; from Paul&rsquo;s
                gymnastic metaphor and Jesus&rsquo;s pruning vine, through Hebrews on discipline as
                sonship, to Foster&rsquo;s three streams and Willard&rsquo;s insight that
                transformation requires training rather than trying. Each section addresses a common
                confusion and offers the scriptural and theological clarity that makes disciplined
                formation possible.
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
                  Training, pruning, fatherly discipline, and the long game of formation &mdash; all
                  point to the same truth: godliness is cultivated, not inherited, and the
                  cultivation requires the steady, patient, repeated practices that Paul calls
                  &ldquo;training.&rdquo; Explore the obedience that discipline serves in{" "}
                  <Link
                    href="/christian-obedience"
                    style={{ color: AMBER, textDecoration: "underline" }}
                  >
                    Christian Obedience
                  </Link>{" "}
                  or go deeper on the holiness that discipline aims at in{" "}
                  <Link
                    href="/christian-holiness"
                    style={{ color: AMBER, textDecoration: "underline" }}
                  >
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
                Six practical disciplines for training in godliness &mdash; from designing your
                training regimen and the fasting practice, through solitude and scripture
                memorization, to the Sabbath and the quarterly review. Use the Journal tab to track
                the discipline you are working on, your specific plan, and your weekly consistency.
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
                  A word about beginning
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The greatest mistake in spiritual discipline is trying to do everything at once.
                  Choose one practice. Design it specifically. Begin tomorrow. The one practice you
                  actually keep is worth infinitely more than the twelve practices you plan but never
                  start. The athlete does not train every muscle group on day one; they begin where
                  they are, build what they build, and trust that consistency compounds.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six voices on spiritual discipline &mdash; from Richard Foster&rsquo;s recovery of
                the classical disciplines to Dallas Willard&rsquo;s philosophical account of
                training rather than trying, from Donald Whitney&rsquo;s structured guide to Eugene
                Peterson&rsquo;s long obedience and Gordon MacDonald&rsquo;s inner garden. Each
                voice speaks from genuine formation, not merely theoretical knowledge.
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
                Six passages on spiritual discipline &mdash; from Paul&rsquo;s gymnastic metaphor and
                the athlete analogy, through Hebrews on the fruit of discipline, to the Psalmist&rsquo;s
                enlarged heart and Paul&rsquo;s learned contentment. Read one per week alongside the
                Journal practice.
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
                  Turn each text into a three-part prayer: adoration (&ldquo;Lord, you are the
                  Vinedresser who knows exactly what needs pruning in me&rdquo;), confession
                  (&ldquo;I have preferred comfort to training, entertainment to silence, and the
                  path of least resistance to the disciplines that would form me&rdquo;), and petition
                  (&ldquo;give me the grace to train, not merely to try — to design a practice and
                  keep it, trusting that the fruit comes later to those who stay in the training&rdquo;).
                  The discipline of prayer is itself the first and most foundational of all the
                  disciplines.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The discipline journal tracks the practice you are working on, your specific plan
                for it, and the days each week you have kept it. The record is not a report card but
                a diagnostic tool: it shows you your actual pattern of training, not the pattern you
                intend. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New discipline entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="dsc-area" style={labelStyle}>
                    The discipline I&rsquo;m working on
                  </label>
                  <input
                    id="dsc-area"
                    type="text"
                    value={disciplineArea}
                    onChange={(e) => setDisciplineArea(e.target.value)}
                    placeholder="e.g., Morning prayer, Weekly fast, Scripture memorization, Sabbath, Solitude"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="dsc-plan" style={labelStyle}>
                    My specific plan (when, how, how long)
                  </label>
                  <textarea
                    id="dsc-plan"
                    value={thePlan}
                    onChange={(e) => setThePlan(e.target.value)}
                    placeholder="Be specific: &ldquo;6:45am, 20 minutes of silence then Psalm reading, before I open my phone&rdquo; — vague plans produce vague formation"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="dsc-streak" style={labelStyle}>
                    Days I&rsquo;ve done it this week (0&ndash;7)
                  </label>
                  <input
                    id="dsc-streak"
                    type="number"
                    min={0}
                    max={7}
                    value={dayStreak}
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      if (!isNaN(v)) setDayStreak(Math.min(7, Math.max(0, v)));
                    }}
                    style={{ ...inputStyle, width: "6rem" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!disciplineArea.trim() || !thePlan.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !disciplineArea.trim() || !thePlan.trim() ? BORDER : AMBER,
                    color:
                      !disciplineArea.trim() || !thePlan.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !disciplineArea.trim() || !thePlan.trim() ? "not-allowed" : "pointer",
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
                      Record the discipline you are working on, your specific plan, and the days you
                      have kept it. Over time the pattern of entries becomes a training log — showing
                      you not what you intended to practice but what you actually practiced, and the
                      formation that consistency produced.
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
                              {entry.disciplineArea}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.disciplineArea}`}
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
                            The plan
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.thePlan}
                          </p>
                        </div>

                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(245, 158, 11, 0.08)",
                            border: `1px solid rgba(245, 158, 11, 0.2)`,
                            borderRadius: 6,
                            padding: "0.3rem 0.8rem",
                          }}
                        >
                          <span style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem" }}>
                            {entry.dayStreak}
                          </span>
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>
                            day{entry.dayStreak !== 1 ? "s" : ""} this week
                          </span>
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
                Teaching to watch on spiritual discipline &mdash; Richard Foster on the classical
                disciplines, Dallas Willard on training versus trying, Donald Whitney on structured
                practice, John Piper on fighting for joy, Eugene Peterson on the long obedience, and
                Gordon MacDonald on ordering the inner life.
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
              Begin the training
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The goal of Christian discipline is not a better religious performance but a formed
              soul — a person who has been shaped by sustained practice into someone who can do
              readily, from the inside, what Christ calls them to. That formation is a work of grace
              through means: the means are the disciplines, the grace is God&rsquo;s, and the result
              is a life that looks increasingly like the one who called us to take up the training.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the obedience that discipline serves in{" "}
              <Link href="/christian-obedience" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Obedience
              </Link>
              , understand the holiness that discipline aims at in{" "}
              <Link href="/christian-holiness" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              , or practice the hospitality that discipline enables in{" "}
              <Link
                href="/christian-hospitality-guide"
                style={{ color: AMBER, textDecoration: "underline" }}
              >
                Christian Hospitality
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
