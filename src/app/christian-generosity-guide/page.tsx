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

const STORAGE_KEY = "vine_christiangenerosity_entries";

interface GENEntry {
  id: string;
  date: string;
  whatIGave: string;
  toWhom: string;
  whatItCost: string;
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
    badge: "2 Corinthians 9:7",
    title: "The Cheerful Giver &mdash; Not Under Compulsion but From the Heart",
    paragraphs: [
      "&ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver&rdquo; (2 Cor 9:7). The Greek word for cheerful is hilaros &mdash; the root of our English &ldquo;hilarious&rdquo; &mdash; suggesting a generosity that is not merely willing but positively joyful, overflowing, unbegrudging. Paul contrasts this with two failure modes: giving reluctantly (with grief, as if losing something precious) and giving under compulsion (from external pressure rather than internal movement). The difference is not in the amount but in the orientation of the heart.",
      "The context of 2 Corinthians 8-9 is the collection Paul is taking for the Jerusalem church &mdash; a concrete, practical act of generosity among Christians who had never met each other. Paul&rsquo;s argument is not &ldquo;you ought to give out of duty&rdquo; but &ldquo;those who give freely and generously discover something: God provides abundantly so that they can give abundantly, and the cycle of grace multiplies.&rdquo; The cheerful giver is not the one who has excess and gives from it; the cheerful giver is the one who has decided in the heart that generosity is better than holding on, and who acts from that decision regardless of the amount.",
      "The theological grounding is verse 8: &ldquo;God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.&rdquo; The cheerful giver is one who has internalized this promise: generosity is not depletion but participation in a divine economy of abundance. What is given is replaced; what is held tightly is already beginning to diminish. The cheerful giver has released the anxiety about scarcity and is living from a different premise.",
    ],
    callout: {
      label: "The word",
      text: "Hilaros (ἱλαρός): cheerful, joyful, hilarious. God loves the giver whose generosity overflows from a heart that has been freed from the grip of scarcity and released into the joy of abundance.",
    },
  },
  {
    badge: "Mark 12:41-44",
    title: "The Widow&rsquo;s Two Mites &mdash; Percentage Not Amount",
    paragraphs: [
      "Jesus sat opposite the temple treasury and watched people putting money in. Many rich people put in large sums. A poor widow came and put in two small copper coins worth a penny. Jesus called his disciples and said: &ldquo;Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on&rdquo; (Mark 12:43-44). The measure of generosity in the kingdom is not the gross amount but the proportion &mdash; and the proportion here is one hundred percent.",
      "The story has been domesticated by over-familiarity. Its actual claim is radical: the widow is not commended for giving a little when she could give nothing; she is commended for giving everything. The two mites were not a token; they were her entire living. And Jesus names this &mdash; &ldquo;everything she had, all she had to live on&rdquo; &mdash; with a specificity that makes clear he wants his disciples to feel the weight of it. The rich gave more in gross terms and gave less by every measure that matters in the kingdom.",
      "The passage raises the uncomfortable question that every person of means must eventually answer: what percentage of my resources am I genuinely releasing to God and to others? The widow&rsquo;s two mites are not primarily a comfort to those who give little (&ldquo;at least I gave something&rdquo;); they are a challenge to those who give from surplus without feeling the cost. The giving that costs nothing reforms nothing. The generosity that is genuinely formative is the generosity that requires trust &mdash; that exceeds what feels safe and touches the place where scarcity anxiety lives.",
    ],
  },
  {
    badge: "Malachi 3:10 / New Testament",
    title: "Tithing Theology &mdash; The Law, the Tithe, and Grace Giving",
    paragraphs: [
      "&ldquo;Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need&rdquo; (Mal 3:10). The tithe &mdash; ten percent &mdash; was the foundational structure of Israel&rsquo;s generosity, required by the Mosaic law and accompanied in Malachi with the remarkable invitation to test God with it. The blessing promised is not luxury but sufficiency: the windows of heaven opened not for excess but for &ldquo;no more need.&rdquo;",
      "The New Testament does not abolish tithing but transcends it. Jesus commends tithing (Matt 23:23) while insisting on the weightier matters of justice and mercy. Paul in 2 Corinthians 8-9 describes a generosity that is not governed by a fixed percentage but by the principle of &ldquo;as each has decided in his heart&rdquo; &mdash; which, for the Macedonian churches he holds up as a model, exceeded even their means: &ldquo;in a severe test of affliction, their abundance of joy and their extreme poverty have overflowed in a wealth of generosity&rdquo; (2 Cor 8:2). The New Testament moves from minimum to maximum: not &ldquo;at least ten percent&rdquo; but &ldquo;as much as you have purposed, because everything belongs to God anyway.&rdquo;",
      "The theological move that grounds New Testament generosity is not the law but the gospel: &ldquo;though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (2 Cor 8:9). The tithe is a floor, a starting point, a discipline for training the heart out of its grip on money. Grace giving is what happens when the heart has been so transformed by the gospel of Christ&rsquo;s self-giving that the question is no longer &ldquo;how much must I give?&rdquo; but &ldquo;how much can I give?&rdquo;",
    ],
    callout: {
      label: "The movement",
      text: "The tithe is the floor, not the ceiling. New Testament generosity moves from minimum to maximum: not how little can I give, but how much, because everything already belongs to the One who gave everything for me.",
    },
  },
  {
    badge: "Acts 2:44-45",
    title: "The Jerusalem Church &mdash; Radical Sharing as Kingdom Sign",
    paragraphs: [
      "&ldquo;And all who believed were together and had all things in common. And they were selling their possessions and belongings and distributing the proceeds to all, as any had need&rdquo; (Acts 2:44-45). The early Jerusalem church&rsquo;s economic practice was not a communist policy but a spontaneous overflow of the Spirit&rsquo;s work: people who had been transformed by the resurrection found themselves unable to hold tightly to material possessions while brothers and sisters had need. The &ldquo;all things in common&rdquo; is not a mandatory rule but a description of what love looks like when it is unrestrained.",
      "Acts 4:32-35 returns to this theme with an additional detail: &ldquo;there was not a needy person among them.&rdquo; The goal of the radical sharing was not equality for its own sake but the elimination of poverty within the community. The generosity was responsive: they sold and distributed &ldquo;as any had need,&rdquo; not according to a formula. The community was the unit of economic concern, and the Spirit-filled community could not tolerate unmet need within itself while members had surplus.",
      "The Jerusalem church&rsquo;s practice is not directly prescriptive for every Christian community &mdash; it arose from a specific historical context (the Pentecost gathering of believers from many places, many of whom had no intention of returning) and was not universally normative even in the New Testament (1 Tim 6:17-19 assumes wealthy believers still holding property). But it is prophetically normative: it names what the Spirit produces when love is allowed to operate on the question of money and need without the restraining force of self-protective calculation. It asks the church in every generation: what would it look like if we took seriously the elimination of need among those God has placed near us?",
    ],
  },
  {
    badge: "Matthew 6:19-21",
    title: "Storing Up Treasure in Heaven &mdash; The Investment Theology of Generosity",
    paragraphs: [
      "&ldquo;Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieves do not break in and steal. For where your treasure is, there your heart will be also&rdquo; (Matt 6:19-21). Jesus does not prohibit treasure; he redirects the investment. The problem with earthly treasure is not that it is material but that it is impermanent and insecure. The alternative he offers &mdash; treasure in heaven &mdash; is not vague spiritual comfort but an actual investment that survives death.",
      "The final verse is the key to the whole: &ldquo;where your treasure is, there your heart will be also.&rdquo; The relationship is not: get your heart right and then your money will follow. The relationship is: move your money and your heart will follow. Generosity is not the output of a transformed heart; it is one of the means by which the heart is transformed. The person who begins to give &mdash; even before they feel like it &mdash; discovers that their attachment to what was given loosens, that the grip of mammon weakens, that the heart slowly migrates to where the treasure has been placed.",
      "Randy Alcorn has developed this passage into a full theology of eternal investment: every dollar given to kingdom purposes is a dollar invested in a currency that will not be inflated away, an asset stored in a place where no market crash can reach it. The practical implication is not otherworldliness but a radically different risk calculus: the safest investment is not the one that protects against earthly loss but the one that stores up where loss is impossible. Generosity, in this frame, is not sacrifice but the most rational financial strategy for someone who believes in eternity.",
    ],
    callout: {
      label: "The logic",
      text: "Matt 6:21 &mdash; &ldquo;Where your treasure is, there your heart will be also.&rdquo; Move the money first; the heart follows. Generosity is not the output of transformation; it is one of its instruments.",
    },
  },
  {
    badge: "Philippians 4:11-12",
    title: "The Theology of Enough &mdash; Contentment and Generosity as Paired Virtues",
    paragraphs: [
      "&ldquo;I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need&rdquo; (Phil 4:11-12). Paul presents contentment not as a natural disposition but as a learned secret &mdash; something acquired through experience of both abundance and need. The Greek word for content is autarkes, meaning self-sufficient or self-contained, but Paul redefines it: the sufficiency is not found in circumstances but in Christ who strengthens (v. 13).",
      "The connection between contentment and generosity is often missed: they are two sides of the same coin. The person who is discontented &mdash; who always needs more &mdash; cannot be generous, because every surplus feels insufficient. The person who has learned the secret of contentment in any circumstance has been freed from the compulsive need for more, and that freedom is exactly the freedom generosity requires. You cannot give freely what you cannot hold loosely, and you cannot hold loosely what you believe is necessary for your security.",
      "Dallas Willard argued that simplicity and generosity are the two sides of the discipline of non-attachment to possessions: simplicity disciplines the intake, generosity disciplines the outflow. Together they produce the person who is neither grasping for more nor clutching what they have &mdash; the person who has found in God the sufficiency that possessions were never able to provide. Contentment is not passivity about circumstances; it is the interior freedom that makes generosity possible without it feeling like deprivation.",
    ],
  },
  {
    badge: "2 Corinthians 8:9",
    title: "Giving as Participation in Christ&rsquo;s Self-Giving &mdash; He Became Poor",
    paragraphs: [
      "&ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (2 Cor 8:9). Paul places the entire theology of Christian generosity on this christological foundation. The giving he is calling the Corinthians to is not mere social redistribution or virtuous philanthropy; it is participation in the pattern of Christ&rsquo;s own self-giving. Christ&rsquo;s incarnation is the paradigm: the voluntary relinquishment of riches for the sake of those who needed what only he could give.",
      "The asymmetry is important: Christ&rsquo;s poverty produced our richness. The direction of the movement is downward in terms of the giver&rsquo;s resources and upward in terms of the recipient&rsquo;s condition. Christian generosity follows this pattern: not giving from a position of safe surplus to people who are not much worse off, but the kind of giving that genuinely costs &mdash; that moves the giver in the direction of solidarity with those who have less. This does not mean voluntary impoverishment, but it does mean that the comfort of the giver cannot be the controlling consideration.",
      "The implication for motivation is significant: Christian generosity is not primarily about the tax receipt, the social recognition, the feeling of having done good, or even the command of God. It is primarily about being conformed to the image of the one who, though he was rich, became poor. The Christian who gives is becoming more like Christ. The discipline of generosity is a discipline of Christ-likeness, and its ultimate motive is not duty but love: the overflow of having received from One who gave everything.",
    ],
    callout: {
      label: "The foundation",
      text: "2 Cor 8:9 &mdash; Christian generosity is participation in Christ&rsquo;s self-giving. We give because the One who gave everything for us has made us rich. The motive is not duty but conformity to the One we love.",
    },
  },
  {
    badge: "Spiritual Discipline",
    title: "Generosity as a Spiritual Discipline That Cures Greed",
    paragraphs: [
      "The spiritual disciplines operate on the counterintuitive principle that acting in the way you want to feel is often the path to actually feeling it. You do not wait until you feel generous to give; you give, and over time the giving forms the generous heart. This is especially true of generosity as a discipline against greed. Greed &mdash; what the New Testament calls pleonexia, the desire for more &mdash; is one of the most socially acceptable and internally invisible sins of affluent cultures. It does not announce itself; it simply rationalizes every holding and every acquisition as reasonable.",
      "Richard Foster argues in Celebration of Discipline that giving is the most direct assault on the spirit of greed because it does what greed most resists: it releases. The act of giving &mdash; regularly, specifically, sacrificially &mdash; pulls the grip of money loose from the heart, not all at once but incrementally, practice by practice. The person who has given ten thousand dollars in small acts of regular generosity has a different relationship to money than the person who gave one large gift and then held tightly through thousands of small daily decisions to keep rather than give.",
      "The Journal tab in this guide is designed for exactly this discipline: the practice of naming what you gave, to whom, and what it cost &mdash; not to earn credit but to build the habit of attention to the movement of money in a generosity direction. The person who tracks their giving is the person who is taking generosity seriously as a practice rather than an occasional impulse. Over time, the journal becomes a record of the shape of a generous life &mdash; which is the shape of a Christ-formed life.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The First-Fruits Practice &mdash; Give Before You Spend",
    summary:
      "The simplest and most structurally powerful practice for generosity: give first, before any other financial decision is made, so that generosity shapes the budget rather than being shaped by what is left over.",
    steps: [
      "Determine a percentage &mdash; starting with ten percent if you have never tithed, or your current giving percentage if you already do &mdash; and set it aside before any other spending decisions. This is the practical meaning of first-fruits: the first allocation of every paycheck, not the last.",
      "Automate if possible: the gift that requires a decision every month is more vulnerable to excuse and delay than the gift that happens automatically. Automation is not mindlessness; it is the structural commitment that protects the intention from the moment-by-moment negotiation of competing priorities.",
      "Increase incrementally: if ten percent feels impossible, start with one or two and increase by one percent every six months. The goal is not a specific number but the direction of travel &mdash; toward greater generosity, not as a legal requirement but as a joyful response to the grace already received.",
      "Review annually: look at the year&rsquo;s giving and ask: has the percentage increased? Has the giving been intentional or merely habitual? Are there specific needs or people or causes that God has been calling your attention to that you have not yet responded to? Annual review keeps generosity alive and growing rather than calcifying into a tax category.",
    ],
    anchor: "Proverbs 3:9-10 &mdash; Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty.",
  },
  {
    number: "02",
    title: "The Responsive Give &mdash; Acting on the First Impulse",
    summary:
      "A practice for developing the habit of acting on the first generous impulse rather than letting the rational mind negotiate it away. The first impulse toward generosity is often the Spirit&rsquo;s prompting.",
    steps: [
      "When the impulse to give arises &mdash; the friend who needs help, the stranger whose need is visible, the cause that catches your attention &mdash; notice whether you act on it immediately or begin an internal negotiation. The negotiation is normal and human; the practice is to notice it rather than being unconsciously governed by it.",
      "For small amounts (coffee for a colleague, a larger tip than expected, a few dollars to someone in need), practice acting on the first impulse without the negotiation. The small responsive give builds the muscle for the larger one.",
      "For larger amounts, adopt a forty-eight-hour rule: if you feel a clear impulse toward a significant gift, sit with it for forty-eight hours but not longer. Long deliberation is often the form that resistance takes. If the impulse is still present after two days, act on it. If it has disappeared, let it go &mdash; but be honest about whether it disappeared because the prompting was not real or because the resistance won.",
      "After acting, note in your journal what the giving felt like &mdash; what it cost, what it produced, whether the Spirit confirmed the act. This is not to evaluate your own virtue but to build the discernment that recognizes the Spirit&rsquo;s invitations over time.",
    ],
    anchor: "2 Corinthians 9:7 &mdash; Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
  },
  {
    number: "03",
    title: "Giving Toward Someone You Know &mdash; Incarnational Generosity",
    summary:
      "A practice of giving that is specific, relational, and embodied: giving to a person whose need you know, whose face you can see, in a way that connects the gift to the relationship rather than laundering it through abstraction.",
    steps: [
      "Identify someone in your relational network whose need is real and visible to you: a friend in a financial crisis, a family member in need, a neighbor whose circumstances you know. The specificity is part of the practice; giving to an anonymous cause, however worthy, does not train the same muscles as giving to someone you know.",
      "Give in a way that is neither anonymous nor performative. The pure anonymous gift has its place (Matt 6:3), but relational giving &mdash; the kind where both giver and recipient know what is happening &mdash; requires the practice of vulnerability, of accepting the complexity of the relationship that giving creates. Do not hide behind anonymity when the relationship is what is needed.",
      "Give without keeping score. The temptation is to give and then track whether the person is sufficiently grateful, changed, or responsive. The practice of generosity toward someone you know is also the practice of releasing the outcome. You gave; it is not yours anymore, including the response.",
      "Repeat: incarnational generosity is not a one-time act but a pattern of sustained attention to the people God has placed near you. The discipline is to keep looking, keep noticing, keep responding &mdash; to become the kind of person whose default orientation toward nearby need is generosity rather than self-protection.",
    ],
    anchor: "1 John 3:17 &mdash; If anyone has the world&rsquo;s goods and sees his brother in need, yet closes his heart against him, how does God&rsquo;s love abide in him?",
  },
  {
    number: "04",
    title: "Simplicity and Generosity as Paired Disciplines",
    summary:
      "The two spiritual disciplines of money that work together: simplicity on the intake side (consuming less) and generosity on the outflow side (releasing more). Neither is complete without the other.",
    steps: [
      "Identify one area of your spending that exceeds what is necessary or genuinely life-giving &mdash; not to induce guilt but to name it. Subscription services, eating out, clothing, entertainment: the specific area differs by person, but the practice is to look honestly and name one thing that could be simplified.",
      "For one month, redirect the amount you would have spent in that area toward giving. Not as permanent deprivation but as a discipline: the experience of choosing simplicity in order to make generosity possible. Let the experience teach you something about what you actually needed versus what you had come to assume you needed.",
      "Review the month: did the simplicity feel like loss? What did you discover about the thing you simplified? Did the generosity it enabled feel more or less valuable than what you gave up? The point is not the answer but the self-knowledge the practice produces.",
      "Over time, build both disciplines together: the simpler life and the more generous life are mutually reinforcing. The person who holds possessions loosely in both directions &mdash; neither grasping for more nor clutching what they have &mdash; is the person Paul describes in Philippians 4: content in any circumstance, free to abound or be abased.",
    ],
    anchor: "Philippians 4:11-12 &mdash; I have learned, in whatever situation I am, to be content&hellip; I have learned the secret of facing plenty and hunger, abundance and need.",
  },
  {
    number: "05",
    title: "The Eternal Investment Review &mdash; Seeing Your Giving as Treasure in Heaven",
    summary:
      "A quarterly practice of reviewing your giving through the lens of Matthew 6:19-21: not as a financial audit but as a spiritual practice of reorienting your relationship to money and eternity.",
    steps: [
      "Quarterly, gather a record of what you have given in the past three months &mdash; monetary gifts, time, hospitality, specific acts of generosity. The review is not for self-congratulation but for attentiveness: what has the pattern been? Has giving increased, decreased, or remained static?",
      "For each significant gift, ask the eternal investment question: what has been stored where moth and rust cannot destroy? Randy Alcorn&rsquo;s framework is helpful here: money given to kingdom purposes is transferred, not lost. Let this reframe the psychological experience of giving from loss to investment.",
      "Identify one area where giving has been constricted by fear of scarcity or by attachment to a particular possession or resource. Bring it to God in prayer: &ldquo;Lord, I am holding this tightly. I acknowledge that it belongs to you. I ask for the grace of open hands.&rdquo;",
      "Set a giving intention for the next quarter: one specific act of generosity that will stretch slightly beyond comfort, one new giving direction to explore, one person whose need you will attend to more carefully. The intention is not a vow but a direction &mdash; the north star for the next three months of practice.",
    ],
    anchor: "Matthew 6:20-21 &mdash; Lay up for yourselves treasures in heaven&hellip; For where your treasure is, there your heart will be also.",
  },
  {
    number: "06",
    title: "Receiving Generosity &mdash; The Practice That Completes the Discipline",
    summary:
      "The often-neglected side of generosity: learning to receive generously, without deflection or false humility, in a way that honors the giver and participates fully in the economy of grace.",
    steps: [
      "When you are the recipient of generosity &mdash; a gift, an act of service, an unexpected help &mdash; practice receiving it fully rather than deflecting it: &ldquo;Thank you. I receive this.&rdquo; Not &ldquo;oh, you shouldn&rsquo;t have&rdquo; or &ldquo;I&rsquo;ll get you back&rdquo; but genuine, ungrudging reception.",
      "Notice the discomfort of receiving: the mild shame, the desire to reciprocate immediately, the sense of debt. These reactions are worth examining. Often they reveal a theology of self-sufficiency: the belief that needing is weakness, that dependence is dangerous. Receiving generosity gracefully is the practice that dismantles this theology.",
      "Let received generosity deepen your understanding of what your own giving produces in others. The vulnerability of receiving is the vulnerability you create in others when you give; understanding it from the inside makes you a more attuned giver.",
      "Close the loop with gratitude: write or say specifically what the gift meant and what it produced. Not effusively but truthfully. The giver who hears that their gift mattered is confirmed in the practice of giving; your reception is itself a form of generosity toward them.",
    ],
    anchor: "Acts 20:35 &mdash; It is more blessed to give than to receive &mdash; which implies that receiving is also blessed, and that both are part of the economy of grace.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "John Wesley",
    role: "Sermon on the Use of Money &mdash; Earn All You Can, Save All You Can, Give All You Can",
    quote:
      "Earn all you can, save all you can, give all you can. The first two are only preparation for the third. All the rest is vanity. Money is an excellent gift of God, but it will answer for itself on the last day, and so will you for the manner in which you employed it.",
    bio: "John Wesley (1703-1791) was the founder of Methodism and one of the most influential Christian social reformers of the eighteenth century. His famous three-rule framework for money &mdash; earn all you can (through honest labor), save all you can (through frugal living), give all you can (the entire point of the first two) &mdash; is among the most practically useful economic theologies in Christian history. Wesley himself practiced what he preached: he lived on essentially the same income for decades as his earning power increased, giving away enormous amounts to the poor. He calculated once that he had given away thirty thousand pounds in his lifetime. His social concern extended to opposing slavery, visiting prisoners, and founding schools and medical dispensaries. Wesley&rsquo;s generosity theology is not merely personal virtue but structural critique: the Christian who earns and saves but does not give has missed the entire point of the exercise.",
  },
  {
    name: "Randy Alcorn",
    role: "Money, Possessions, and Eternity; The Treasure Principle &mdash; Eternal Investment",
    quote:
      "You can&rsquo;t take it with you, but you can send it on ahead. Every dollar given to kingdom purposes is transferred to an account that will not be touched by inflation, recession, or death. The question is not whether you will lose your money; the question is when and how.",
    bio: "Randy Alcorn is a Christian author and founder of Eternal Perspective Ministries who has written more than fifty books. His most influential work on giving &mdash; Money, Possessions, and Eternity and the shorter The Treasure Principle &mdash; develops Matthew 6:19-21 into a full theology of eternal investment. Alcorn&rsquo;s key insight is that giving is not loss but transfer: money given to kingdom purposes is not gone but stored in an account that survives death. He is also notable for having given away all royalties from his books &mdash; millions of dollars &mdash; to avoid accumulating the wealth his teaching identifies as spiritually dangerous. His personal practice gives his theology credibility: this is not armchair generosity philosophy but a theology lived out under financial pressure.",
  },
  {
    name: "Basil of Caesarea",
    role: "Homily to the Rich &mdash; The Bread You Withhold Is the Hungry Person&rsquo;s Bread",
    quote:
      "The bread you withhold belongs to the hungry; the coat you keep locked away belongs to the naked; the shoes you let rot are the shoes of one who has no shoes; the money you bury in the earth is the redemption of the poor.",
    bio: "Basil of Caesarea (c. 330-379) was one of the Cappadocian Fathers and among the most socially concerned theologians of the early church. His Homilies to the Rich are among the most confrontational texts in Christian social teaching: he argues directly that wealth hoarded while others starve is not merely a failure of virtue but a form of robbery. Basil founded the Basiliad &mdash; a complex of hospitals, hospices, and housing for the poor outside Caesarea &mdash; which was the ancient world&rsquo;s closest equivalent to a modern social services system. He gave away his own inheritance to the poor. His theology of generosity is rooted in a theology of common ownership: the earth&rsquo;s resources belong to God and have been entrusted to human stewardship, not private possession. The wealthy person who withholds from the poor is not withholding their own but withholding what belongs to someone else.",
  },
  {
    name: "George M&uuml;ller",
    role: "Autobiography of George M&uuml;ller &mdash; Generosity Proved by Prayer",
    quote:
      "I never remember, in all my Christian course, a period now of sixty-nine years and four months, that I ever SINCERELY and PATIENTLY sought to know the will of God by the teaching of the Holy Ghost, through the instrumentality of the written Word of God, without being directed rightly. But if honesty of heart and uprightness before God were lacking, or if I did not patiently wait upon God for instruction, or if I preferred the counsel of my fellow-men to the declarations of the Word of God, I made great mistakes.",
    bio: "George M&uuml;ller (1805-1898) was a German-born Christian evangelist who established orphanages in Bristol, England, caring for over ten thousand children during his lifetime. His approach to generosity was radical and distinctive: he never asked anyone for money, trusting entirely on prayer and God&rsquo;s provision. He kept meticulous records of answered prayer and of every penny received and spent &mdash; not to prove anything to donors but to demonstrate to doubters that God could be trusted with material needs. M&uuml;ller himself gave away everything he had multiple times: he died worth virtually nothing despite having handled millions of pounds in his lifetime. His life is among the most documented experiments in radical generosity in Christian history, and his autobiography remains a formative text for anyone wanting to develop a practice of trusting God with money.",
  },
  {
    name: "R.G. LeTourneau",
    role: "Mover of Men and Mountains &mdash; Ninety Percent to God",
    quote:
      "I shovel out the money, and God shovels it back &mdash; but God has a bigger shovel. I have found that the more I give, the more He gives back to me, until I cannot give enough to get ahead of Him.",
    bio: "R.G. LeTourneau (1888-1969) was a Christian industrialist and inventor who revolutionized the earthmoving equipment industry and eventually gave ninety percent of his income to Christian causes, keeping ten percent for himself and his family. LeTourneau came to radical generosity not through comfortable theologizing but through a dramatic midlife conversion and a series of financial crises that taught him to depend on God. His autobiography Mover of Men and Mountains is the story of a person who discovered, through repeated experience, that generous giving did not produce financial ruin but opened him to a cycle of generosity and provision that he could not get ahead of. His testimony is particularly compelling for businesspeople and those with significant resources: it models a generosity that is not impoverishing but liberating.",
  },
  {
    name: "Tim Keller",
    role: "Generous Justice; The Prodigal God &mdash; Generosity as Gospel Response",
    quote:
      "Generous justice is the natural response of a heart that has understood the gospel. When you grasp that everything you have &mdash; including your righteousness, your standing before God, your very life &mdash; has been given to you freely in Christ, the grip of money loosens. The generous person is the person who has heard the good news.",
    bio: "Tim Keller (1950-2023) was the founding pastor of Redeemer Presbyterian Church in New York City and one of the most widely read evangelical theologians of his generation. His book Generous Justice develops the connection between gospel theology and economic generosity: the person who has genuinely understood grace &mdash; that everything good they have has been given freely by a God who became poor so they could become rich &mdash; finds that the grip of money naturally loosens. Keller&rsquo;s approach to generosity is neither moralistic (give because you should) nor merely pragmatic (give because it will return to you) but evangelical: give because you have received everything. His work at Redeemer also modeled institutional generosity through the founding of Hope for New York, which channeled significant resources to social service organizations serving the poor. Keller is particularly useful for connecting the theology of 2 Corinthians 8:9 to the practical question of what a generous life looks like in a high-cost, high-income urban context.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "2 Corinthians 9:6-8",
    text: "Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reflection:
      "The agricultural metaphor frames giving as seed: what you give is not lost but planted. The hilaros giver &mdash; joyful, hilarious, overflowing &mdash; has internalized this economy. The verse also insists on the interior of the act: God is interested not primarily in the amount but in the heart&rsquo;s posture. Reluctance and compulsion are both failures of the cheerful giver&rsquo;s characteristic freedom.",
  },
  {
    reference: "Mark 12:43-44",
    text: "Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on.",
    reflection:
      "The measure of kingdom giving is percentage, not gross amount. The widow&rsquo;s one hundred percent reveals the inadequacy of the rich persons&rsquo; comfortable proportion. The passage is not primarily a comfort to small givers; it is a challenge to the theology of giving from surplus. The generosity that costs nothing forms nothing.",
  },
  {
    reference: "2 Corinthians 8:9",
    text: "For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich.",
    reflection:
      "The foundation of all Christian generosity: we give because Christ gave first, and his giving is the pattern ours follows. The movement is downward in terms of the giver&rsquo;s resources and upward in terms of the recipient&rsquo;s condition. To give is to participate in the shape of the gospel itself &mdash; to become, in small ways, like the One who became poor that we might become rich.",
  },
  {
    reference: "Matthew 6:19-21",
    text: "Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven&hellip; For where your treasure is, there your heart will be also.",
    reflection:
      "The final verse reverses the expected logic: we expect that getting the heart right will fix the money. Jesus says: move the money and the heart will follow. Generosity is not the product of a transformed heart; it is one of the instruments by which the heart is transformed. The practical implication is to act on generosity before you fully feel it.",
  },
  {
    reference: "Acts 2:44-45",
    text: "And all who believed were together and had all things in common. And they were selling their possessions and belongings and distributing the proceeds to all, as any had need.",
    reflection:
      "The early church&rsquo;s generosity was not a policy but an overflow: the Spirit&rsquo;s work producing an inability to hold tightly to material goods while brothers and sisters had need. The standard is not equality per se but the elimination of unmet need within the community. &ldquo;As any had need&rdquo; makes generosity responsive rather than formulaic &mdash; attentive, personal, specific.",
  },
  {
    reference: "1 Timothy 6:17-19",
    text: "As for the rich in this present age, charge them not to be haughty, nor to set their hopes on the uncertainty of riches, but on God, who richly provides us with everything to enjoy. They are to do good, to be rich in good works, to be generous and ready to share, thus storing up treasure for themselves as a good foundation for the future, so that they may take hold of that which is truly life.",
    reflection:
      "Paul&rsquo;s counsel to the wealthy is not to divest of everything but to hold possessions in a particular way: not with haughty hope in uncertain riches but as stewards who are &ldquo;rich in good works.&rdquo; Generosity and readiness to share are the marks of the wealthy person who has understood the gospel. The treasure stored up through generosity is described as &ldquo;a good foundation for the future&rdquo; &mdash; the eternal investment logic of Matthew 6 in another key.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "9QsAgTCCUoY", title: "The Theology of Christian Generosity &mdash; Giving and the Gospel" },
  { videoId: "VWBs5LkHFpU", title: "The Widow&rsquo;s Two Mites &mdash; Percentage, Not Amount" },
  { videoId: "5R_UiKMXW8s", title: "Tithing and Grace Giving &mdash; The Floor and the Ceiling" },
  { videoId: "8wC6CfX4bq0", title: "Storing Up Treasure in Heaven &mdash; Matthew 6:19-21 Explained" },
  { videoId: "EKnrBxRV1zo", title: "Generosity as a Spiritual Discipline &mdash; Curing Greed Through Giving" },
  { videoId: "nf4x0rQEXak", title: "John Wesley on Money &mdash; Earn, Save, and Give All You Can" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianGenerosityPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<GENEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatIGave, setWhatIGave] = useState("");
  const [toWhom, setToWhom] = useState("");
  const [whatItCost, setWhatItCost] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as GENEntry[]);
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
    if (!whatIGave.trim() || !toWhom.trim()) return;
    const entry: GENEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatIGave: whatIGave.trim(),
      toWhom: toWhom.trim(),
      whatItCost: whatItCost.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatIGave("");
    setToWhom("");
    setWhatItCost("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GREEN : BORDER}`,
    background: active ? "rgba(58, 125, 86, 0.15)" : "transparent",
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
              Generosity &amp; Stewardship
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Generosity: The Theology and Practice of Open Hands
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Biblical generosity is not charitable duty or strategic philanthropy but the natural
              overflow of a heart that has understood the gospel: Christ, though rich, became poor
              so that we by his poverty might become rich. This guide traces the theology of
              generosity from the cheerful giver and the widow&rsquo;s mites through treasure in
              heaven and the Jerusalem church, and builds the practices that form an open-handed
              life.
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
                &ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich,
                yet for your sake he became poor, so that you by his poverty might become rich.&rdquo;
              </p>
              <p style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600 }}>
                2 Corinthians 8:9
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
                Eight studies tracing the theology of Christian generosity from the cheerful giver and
                the widow&rsquo;s mites through tithing, the Jerusalem church, treasure in heaven,
                contentment as the foundation for generosity, Christ&rsquo;s self-giving as the
                pattern, and generosity as a spiritual discipline that cures greed.
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
                  The cheerful giver, the widow&rsquo;s percentage, Christ&rsquo;s self-emptying,
                  the Jerusalem church&rsquo;s radical sharing &mdash; these are not separate topics
                  but one doctrine of generosity seen under different angles. What they share: the
                  motivation is gospel, not law; the measure is percentage, not gross amount; and the
                  formation happens through practice rather than feeling. Explore how generosity
                  connects to contentment in{" "}
                  <Link href="/christian-contentment" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Contentment
                  </Link>{" "}
                  or to justice in{" "}
                  <Link href="/christian-justice" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Justice
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
                Six practices for building generosity in the specific texture of ordinary life &mdash;
                from first-fruits giving and responsive impulses to incarnational giving, simplicity
                paired with generosity, eternal investment review, and the often-neglected practice
                of receiving. Start with one and let it build the others.
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
                  A word about the slow work of generosity
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Generosity, like every spiritual discipline, is built in the small ordinary decisions
                  long before the large dramatic ones. The person who gives a dollar without agonizing
                  has built the muscle that the person who gives ten thousand dollars without agonizing
                  had to build somewhere. The Journal tab is designed to support that slow, specific
                  work: naming what you gave, to whom, and what it cost. Over time the journal becomes
                  a record of the shape of a generous life &mdash; and the shape of a generous life
                  is the shape of a Christ-formed life.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian
                generosity &mdash; Wesley&rsquo;s three-rule framework, Alcorn&rsquo;s eternal
                investment, Basil&rsquo;s patristic challenge, M&uuml;ller&rsquo;s life of prayer
                and provision, LeTourneau&rsquo;s industrial ninety percent, and Keller&rsquo;s
                gospel grounding. Each one practiced what they taught.
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
                    &ldquo;<span dangerouslySetInnerHTML={{ __html: voice.quote }} />&rdquo;
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
                Six passages that form the biblical theology of generosity &mdash; from 2 Corinthians
                9 and the widow&rsquo;s mites through 2 Corinthians 8:9, Matthew 6, Acts 2, and
                1 Timothy 6. Read them one per week alongside the Journal practice. Let each text
                both describe and produce the posture of open hands.
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
                  Take each passage and bring it into contact with your specific relationship to money
                  and possessions. Name honestly what you are holding tightly, what you are holding
                  with anxiety, and what you have been releasing freely. Let the text speak to that
                  specific terrain rather than to generosity in the abstract. Close with a concrete
                  act: &ldquo;Lord, I bring you [name the specific amount or possession or habit].
                  I acknowledge it belongs to you. I ask for the grace of open hands.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that build generosity over time: what did you give, to whom, and what
                did it cost you &mdash; or surprisingly not cost? Entries are stored privately in your
                browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New generosity entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="gen-gave" style={labelStyle}>
                    What I gave
                  </label>
                  <input
                    id="gen-gave"
                    type="text"
                    value={whatIGave}
                    onChange={(e) => setWhatIGave(e.target.value)}
                    placeholder="Money, time, hospitality, a specific act &mdash; name it concretely..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="gen-whom" style={labelStyle}>
                    To whom or where
                  </label>
                  <input
                    id="gen-whom"
                    type="text"
                    value={toWhom}
                    onChange={(e) => setToWhom(e.target.value)}
                    placeholder="A person, an organization, a cause &mdash; be specific..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="gen-cost" style={labelStyle}>
                    What it cost me &mdash; or surprisingly didn&rsquo;t
                  </label>
                  <textarea
                    id="gen-cost"
                    value={whatItCost}
                    onChange={(e) => setWhatItCost(e.target.value)}
                    placeholder="Did it feel like loss or like freedom? Did it cost more or less than expected? What did the giving reveal about your relationship to what you gave?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatIGave.trim() || !toWhom.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatIGave.trim() || !toWhom.trim() ? BORDER : GREEN,
                    color: !whatIGave.trim() || !toWhom.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatIGave.trim() || !toWhom.trim() ? "not-allowed" : "pointer",
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
                      Name what you gave, to whom, and what it cost &mdash; or what surprised you
                      about the cost. Over time this becomes a record of the shape of a generous
                      life, and the shape of a generous life is the shape of a Christ-formed life.
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
                              {entry.whatIGave}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.whatIGave}`}
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
                            To whom or where
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.toWhom}
                          </p>
                        </div>

                        {entry.whatItCost && (
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
                              What it cost &mdash; or didn&rsquo;t
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatItCost}
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
                Teaching on biblical generosity, the cheerful giver, the widow&rsquo;s mites,
                tithing, treasure in heaven, and the voices of John Wesley, Randy Alcorn, and others.
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
              Generosity as the shape of a gospel life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Generosity is not an obligation tacked onto the Christian life but one of its most
              characteristic shapes: the outward expression of a heart that has been freed from the
              grip of scarcity and released into the abundance of God&rsquo;s grace. The person who
              gives freely and cheerfully is not performing virtue; they are becoming more like the
              One who, though rich, became poor so that we might become rich. Every act of generosity
              is a small participation in that pattern &mdash; a brief, embodied conformity to the
              shape of the gospel itself.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore how contentment enables generosity in{" "}
              <Link href="/christian-contentment" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Contentment
              </Link>
              , see how generosity connects to justice in{" "}
              <Link href="/christian-justice" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Justice
              </Link>
              , or discover how gratitude fuels open hands in{" "}
              <Link href="/christian-gratitude" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Gratitude
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
