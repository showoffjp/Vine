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

const STORAGE_KEY = "vine_moneyguide_entries";

interface MNYEntry {
  id: string;
  date: string;
  moneyArea: string;
  temptation: string;
  gospelResponse: string;
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
    badge: "Matthew 6:24",
    title: "Mammon — Money as Rival Lord",
    paragraphs: [
      "Jesus does not say it is difficult to serve both God and money. He says it is impossible: &ldquo;No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money&rdquo; (Matt 6:24). The word he uses is mammon (mamonas in Greek, from the Aramaic mamona) — a word that personifies wealth as a power with claims on human allegiance. Jesus treats money not as a neutral tool that becomes dangerous in excess but as an alternative lord, a competing center of gravity that bends the will and shapes the heart like worship shapes a life.",
      "The logic of the verse is structural, not sentimental. Two masters demand two incompatible postures — the trust, the love, the practical obedience that belong ultimately to one cannot be split cleanly between two. What looks like serving both is always secretly serving one and managing the other. Jesus does not forbid wealth; he names the spiritual reality underneath it. Every financial decision is, at some level, a question of lordship: whose kingdom am I funding, whose future am I securing, whose approval am I seeking?",
      "This means financial discipleship is not primarily about budgeting technique. It is about dethroning mammon — the slow, often painful work of loosening money&rsquo;s grip on the imagination so that it becomes a tool of the kingdom rather than a rival to it. Randy Alcorn calls money &ldquo;a full-scale assault on our allegiance to God.&rdquo; The Sermon on the Mount agrees.",
    ],
    callout: {
      label: "The word",
      text: "Mammon (μαμωνᾶς): a personification of wealth as a spiritual power with lordship claims — money elevated from a tool to a master, from a means to an end.",
    },
  },
  {
    badge: "1 Timothy 6:10",
    title: "Philarguria — The Love of Money, Not Money Itself",
    paragraphs: [
      "One of the most misquoted verses in the Bible is 1 Timothy 6:10. Paul does not say money is the root of all evil. He says &ldquo;the love of money is a root of all kinds of evil.&rdquo; The Greek word is philarguria — literally love-of-silver, philia (friendship/love) + arguros (silver). The problem is not the coin but the devotion. Money itself is morally neutral; in the right hands it feeds the hungry, plants churches, and sets captives free. Philarguria is the disordered attachment that turns a tool into a treasure, an instrument into an object of worship.",
      "Paul sharpens this in verse 9: &ldquo;Those who desire to be rich fall into temptation, into a snare, into many senseless and harmful desires that plunge people into ruin and destruction.&rdquo; The desire to be rich — not riches, but the desire — is already the problem. It is a desire that promises arrival (I will feel secure, free, significant once I have enough) and perpetually defers it. Every income level feels like almost-enough; the finish line retreats. This is philarguria&rsquo;s pathology: it is not satiated by acquisition, only inflamed by it.",
      "The antidote Paul prescribes in verses 6-8 is contentment: &ldquo;Godliness with contentment is great gain, for we brought nothing into this world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.&rdquo; Contentment is not passivity toward poverty; it is the freedom from compulsive acquisition that releases money for generous use. The man who loves money hoards it; the man content in God distributes it.",
    ],
    callout: {
      label: "The word",
      text: "Philarguria (φιλαργυρία): love of money — the disordered affection that elevates wealth to the status of treasure, security, or ultimate good.",
    },
  },
  {
    badge: "Luke 18:18-30",
    title: "The Rich Young Ruler — What Jesus Actually Asked",
    paragraphs: [
      "The rich young ruler comes to Jesus with the right question (&ldquo;Good Teacher, what must I do to inherit eternal life?&rdquo;) and the right résumé (commandments kept from his youth). Mark 10:21 tells us that Jesus looked at him and loved him — the confrontation that follows is not cold diagnosis but pastoral care. &ldquo;One thing you still lack. Sell all that you have and distribute to the poor, and you will have treasure in heaven; and come, follow me.&rdquo; The man went away sorrowful, for he was very rich.",
      "Jesus does not give this prescription to everyone. He gives it to this man because the man&rsquo;s wealth was the specific place where his heart was divided — the rival lord was visible in the balance sheet. What Jesus asks of every disciple is total allegiance; what he asked this particular man was to demonstrate that allegiance by the one action that would cost him everything. The man&rsquo;s sorrow tells the story: he wanted eternal life, but not if it cost his financial life. Mammon won.",
      "The disciples are astonished and ask who then can be saved. Jesus gives the answer that makes this story good news: &ldquo;What is impossible with man is possible with God.&rdquo; The disenchantment of the heart from money is not achievable by willpower — it is a miracle. This is why financial generosity, for the Christian, is not primarily a moral achievement but a supernatural one. The God who can bring a rich man through the eye of a needle can make any one of us genuinely free.",
    ],
  },
  {
    badge: "Mark 12:41-44",
    title: "The Widow&rsquo;s Mite — Proportion, Not Amount",
    paragraphs: [
      "Jesus sits opposite the temple treasury and watches the crowd put money in. Many rich people throw in large sums. A poor widow puts in two small copper coins — a lepton, the smallest coin in circulation, worth a fraction of a denarius. Jesus calls his disciples and delivers his verdict: &ldquo;Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on.&rdquo;",
      "The story resets the measuring standard for generosity entirely. The treasury&rsquo;s ledger would record the widow&rsquo;s gift as trivially small. Jesus&rsquo; ledger records it as the largest gift. The criterion is not the absolute amount but the proportional sacrifice — how much this cost the giver relative to what they had to give. This means that the person giving $50 out of $500 is giving more, by Jesus&rsquo; standard, than the person giving $5,000 out of $500,000. Generosity is measured at the point of sacrifice, not the point of deposit.",
      "The widow also gives everything she had to live on. There is a recklessness here that should make us uncomfortable — she has kept nothing in reserve, trusted nothing to a safety net. The widow&rsquo;s mite is not a lesson in financial planning; it is a portrait of radical trust. She has entrusted her survival to the same God to whom she has given her coins. The story is not asking all of us to do what she did; it is asking us to examine the gap between what we give and what genuine sacrifice would cost.",
    ],
  },
  {
    badge: "Malachi 3:10 / Matthew 23:23",
    title: "The Tithe — Floor, Not Ceiling",
    paragraphs: [
      "&ldquo;Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need&rdquo; (Mal 3:10). The tithe — ten percent, the first tenth — is the minimum standard of giving in both Old and New Testaments. Under the Mosaic law there were actually multiple tithes (the Levitical tithe, the festival tithe, the poor tithe) that together amounted to considerably more than ten percent. The tithe is the floor of generosity, not the ceiling.",
      "Jesus confirms this in Matthew 23:23, where he rebukes the Pharisees not for tithing but for tithing while neglecting justice, mercy, and faithfulness. &ldquo;These you ought to have done, without neglecting the others.&rdquo; Jesus affirms the tithe and insists it is not enough when it becomes a substitute for the weightier matters. The Pharisee who tithes mint and dill and forgets mercy has found a way to use giving as a technology for avoiding generosity. The tithe belongs inside a life shaped by justice and steadfast love, not as a replacement for it.",
      "For the New Testament believer, the question is not whether to tithe but how far beyond it the Spirit will lead. Paul in 2 Corinthians 8-9 holds up the Macedonian churches as the model — they gave &ldquo;beyond their means, of their own accord,&rdquo; not by compulsion. The New Testament economy of giving is driven not by law but by the grace of God seen in the cross: &ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (2 Cor 8:9).",
    ],
  },
  {
    badge: "Luke 12:15-21",
    title: "The Rich Fool — The Danger of Wealth",
    paragraphs: [
      "&ldquo;Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions&rdquo; (Luke 12:15). Jesus says this just before the parable of the Rich Fool — a man whose ground produces abundantly and who responds by tearing down his barns to build bigger ones, so he can lay up goods for many years, eat, drink, and be merry. God&rsquo;s verdict is immediate: &ldquo;Fool! This night your soul is required of you, and the things you have prepared, whose will they be?&rdquo;",
      "The rich fool is not punished for working hard or for his land producing well. He is called a fool because he built his security on accumulation while remaining &ldquo;not rich toward God.&rdquo; His barns were full and his soul was empty. The parable dismantles the fiction that financial security is equivalent to actual security — the only security that survives death is a life rich toward God, invested in the kingdom, stored where moth and rust do not destroy.",
      "Wealth is dangerous precisely because it is so effective at simulating the condition it cannot provide. A large portfolio creates the feeling of security, the feeling of freedom, the feeling of significance — which are the exact needs God designed to be met in him alone. The rich fool is not a monster; he is an ordinary person who allowed his abundance to deaden his sense of need for God. The parable is a mercy: it names the fool&rsquo;s path before we reach its end.",
    ],
  },
  {
    badge: "2 Corinthians 8-9",
    title: "Generosity and the Gospel — The Macedonian Model",
    paragraphs: [
      "Paul&rsquo;s extended appeal for the Jerusalem collection in 2 Corinthians 8-9 is the most thorough treatment of Christian generosity in the New Testament. Its foundation is not need or obligation but Christology: &ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (2 Cor 8:9). The incarnation, understood as a gift of absolute generosity, becomes the logic and the motive for every subsequent act of Christian giving.",
      "The Macedonian churches — Philippi, Thessalonica, Berea — had been severely tested and were in deep poverty, yet they gave &ldquo;beyond their means&rdquo; and begged Paul for the privilege of participating in the collection. Paul holds this up not as a guilt-inducing standard but as evidence of what happens when grace has actually taken root: the heart becomes generous the way Christ was generous, willingly emptying itself for the enrichment of others.",
      "Chapter 9 delivers the famous formulas of gospel-generosity: &ldquo;Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver&rdquo; (vv. 6-7). The word translated cheerful is hilaros — hilarious, almost recklessly glad. The giver transformed by the gospel does not give with clenched fist and reluctant release; he gives with the same abandon with which he was given to.",
    ],
  },
  {
    badge: "Discernment",
    title: "What Prosperity Gospel Gets Wrong",
    paragraphs: [
      "The prosperity gospel — the teaching that financial blessing is the normal expected fruit of faith, and that poverty is evidence of unbelief — misreads every text in this guide. It takes the windows-of-heaven promise of Malachi 3 out of its covenant context and makes it a vending machine. It ignores the rich young ruler&rsquo;s sorrow, the widow&rsquo;s radical emptying, and Paul&rsquo;s contentment in poverty. Most crucially, it replaces the cross-shaped logic of 2 Corinthians 8:9 — Christ became poor so we might be rich toward God — with a consumer transaction in which faith is invested for financial return.",
      "The prosperity gospel is not simply bad financial theology; it is a different gospel. It reverses the direction of the cross. Where Jesus left riches and became poor for our sake, the prosperity version promises that faith will make us rich like Jesus was before the incarnation — bypassing the downward movement entirely. It redefines &ldquo;rich toward God&rdquo; as rich toward God&rsquo;s material economy, and it makes poverty shameful rather than, in many cases, the arena in which the widow&rsquo;s mite is most purely practiced.",
      "The biblical alternative is not an endorsement of poverty as spiritually superior. The Bible is full of wealthy, faithful people — Abraham, Job, Joseph of Arimathea, Lydia. What the Bible refuses is the equation of wealth with blessing and poverty with curse. God&rsquo;s favor is not measurable in the bank account. Financial discipleship, in the biblical economy, is the freedom to hold wealth lightly, give it cheerfully, and trust God whether the barns are full or empty.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The First-Fruits Budget",
    summary:
      "Give before you spend. The ancient principle of the firstfruits — off the top, before the month&rsquo;s bills are calculated — reorders the budget to reflect that God comes first.",
    steps: [
      "Set a giving percentage before the month begins. If you are not tithing, begin at whatever percentage you can commit to with conviction and move toward ten. The goal is a percentage, not a fixed dollar amount, so it scales.",
      "Automate the transfer to your church or giving accounts on the day your income arrives. What comes out first is never missed the way what is left over rarely materializes.",
      "Review the percentage quarterly. As income grows, resist the lifestyle inflation that keeps the percentage constant while the kingdom&rsquo;s share stays fixed. Wesley&rsquo;s formula: earn all you can, save all you can, give all you can — the third follows the first two.",
      "Use the Journal tab on this page to record moments when giving felt like sacrifice and moments when it felt like freedom. Tracking the shift from duty to delight is the evidence of transformation.",
    ],
    anchor:
      "Proverbs 3:9-10 — Honor the LORD with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty.",
  },
  {
    number: "02",
    title: "The Contentment Practice",
    summary:
      "A deliberate fast from acquisition — going a season without buying non-necessities — to diagnose and disrupt the compulsive spending that substitutes stuff for contentment.",
    steps: [
      "Declare a 30-day buying fast: nothing non-essential purchased. Not a dietary restriction — clothing, entertainment, décor, gadgets. Food, medicine, necessary repairs are fine. Write down every impulse purchase you don&rsquo;t make.",
      "When the urge to buy arises, pause and name what it is promising: comfort, relief, status, identity, excitement. These are needs; they are just needs that a purchase cannot satisfy.",
      "Replace the purchase reflex with a prayer: &ldquo;You are my portion, LORD&rdquo; (Ps 73:26). Not a formula — a reorientation. Let the moment of wanting become a moment of returning to God as the source.",
      "At the end of the 30 days, review the list. What you wanted to buy tells you what mammon promised you. Use it as a map of the interior — where the rival lord has territory that needs to be surrendered.",
    ],
    anchor:
      "Philippians 4:11-12 — I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound.",
  },
  {
    number: "03",
    title: "Radical Generosity Toward the Poor",
    summary:
      "Structured, direct, ongoing giving to the materially poor — not as charity but as participation in the justice God loves and the redistribution the gospel models.",
    steps: [
      "Identify one specific organization serving the poor with integrity — locally and globally. Commit a fixed monthly amount, not a one-time gift. Chronic poverty requires chronic generosity.",
      "Go in person if possible. Proximity to poverty is a spiritual discipline. The widow of Luke 21 was visible to Jesus because he was sitting in the temple watching. Get close enough to see specific faces and names.",
      "Read Luke 4:18-19 monthly — &ldquo;to proclaim good news to the poor, liberty to the captives, recovering of sight to the blind.&rdquo; Your giving is participation in the ministry Jesus said he was sent to do. It is not charity; it is mission.",
      "Let the poor teach you. The church of the Global South, the widow who gives everything, the community that has discovered contentment in circumstances of material scarcity — these are the teachers the prosperous West most needs.",
    ],
    anchor:
      "Proverbs 19:17 — Whoever is generous to the poor lends to the LORD, and he will repay him for his deed.",
  },
  {
    number: "04",
    title: "The Debt Audit",
    summary:
      "A theological and practical reckoning with debt — consumer debt in particular — as a form of financial bondage that limits generosity and embeds future income in past consumption.",
    steps: [
      "List every debt honestly: balance, interest rate, minimum payment. The proverb is old and true — &ldquo;the borrower is slave to the lender&rdquo; (Prov 22:7). You cannot give freely what you have already promised to interest payments.",
      "Distinguish debt types. A mortgage may be wise stewardship; consumer debt accumulated through comparison, impulse, or lifestyle inflation is usually the direct fruit of philarguria. Call the second category what it is.",
      "Build a payoff plan that makes generosity non-negotiable even during payoff — the goal is not zero debt before any giving, but progressive freedom that funds progressive generosity.",
      "When debt is paid off, redirect the payment to giving rather than upgrading your lifestyle. The discipline built in the debt-payoff season is a gift; spend it on the kingdom rather than on a larger barn.",
    ],
    anchor:
      "Romans 13:8 — Owe no one anything, except to love each other, for the one who loves another has fulfilled the law.",
  },
  {
    number: "05",
    title: "Communal Accountability",
    summary:
      "Letting one trusted friend or small group see your financial life — not for advice necessarily, but for the spiritual accountability that money&rsquo;s private nature usually evades.",
    steps: [
      "Identify one person with whom you will share your actual financial picture — income, giving percentage, debts, and one area of struggle. Not a financial advisor; a brother or sister who can pray with you and speak truth.",
      "Meet quarterly. Money grows in the dark; exposure to trusted community is one of the primary means by which its power is broken. The Pharisee&rsquo;s tithe was perfectly private — and perfectly loveless.",
      "Make your giving visible within your church community at least in direction if not in amount. John Wesley&rsquo;s class meetings required members to account for their use of money alongside their use of time and spiritual practices.",
      "Pray for each other&rsquo;s financial sanctification specifically: freedom from the fear of scarcity, freedom from comparison, freedom from the idol of security. Money is the subject; lordship is the issue.",
    ],
    anchor:
      "Hebrews 13:5 — Keep your life free from love of money, and be content with what you have, for he has said, &ldquo;I will never leave you nor forsake you.&rdquo;",
  },
  {
    number: "06",
    title: "Eternity Accounting",
    summary:
      "The practice Randy Alcorn calls &ldquo;storing treasure in heaven&rdquo; — making financial decisions through the lens of eternity rather than the short horizon of a single life.",
    steps: [
      "Before any significant financial decision, ask: does this store treasure on earth or in heaven? (Matt 6:19-21). The question is not whether to have nice things but whether acquisitions are accumulating at the expense of kingdom investment.",
      "Keep a &ldquo;giving ledger&rdquo; — a private record of significant giving. Not for pride but for perspective. The discipline of writing it down makes the transaction feel real. Alcorn argues this is the biblical use of treasure language: the record in heaven is real.",
      "Let the meditation on eternity reshape your retirement planning. Planning prudently for old age is wise; hoarding against every possible contingency while the church is under-funded is the rich fool by another name.",
      "Re-read 2 Corinthians 5:10 annually: &ldquo;We must all appear before the judgment seat of Christ, so that each one may receive what is due for what he has done in the body, whether good or evil.&rdquo; Financial history will be part of that accounting. Let it purify your stewardship now.",
    ],
    anchor:
      "Matthew 6:20-21 — Store up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieves do not break in and steal. For where your treasure is, there your heart will be also.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Randy Alcorn",
    role: "Money, Possessions, and Eternity",
    quote:
      "The more frequently and thoroughly we examine our lives in light of eternity, the more it will reshape our sense of what matters — and what doesn&rsquo;t.",
    bio: "Randy Alcorn&rsquo;s Money, Possessions, and Eternity is the most comprehensive evangelical treatment of biblical financial theology in print. Alcorn argues that money is not a peripheral spiritual topic but a central one — Jesus spoke about money more than almost any other subject — and that the church&rsquo;s silence on the specifics of giving has impoverished both its members and its witness. His theology of treasure storage in heaven (Matt 6:19-21) reframes generosity not as sacrifice but as investment, moving wealth from a temporary account into an eternal one. Alcorn himself gives away all royalties from his books through a foundation he established to prevent his own philarguria. His life is as theologically coherent as his writing.",
  },
  {
    name: "Tim Keller",
    role: "Generous Justice / Every Good Endeavor",
    quote:
      "The Bible says that if we oppress the poor, we are insulting God, and if we help the poor, we are lending to God. This means that how we treat the poor reflects how we really feel about God.",
    bio: "Tim Keller&rsquo;s treatment of money runs through multiple books and sermons, always anchored in the gospel. His central argument is that money idolatry is the most common and most overlooked form of false worship in the Western church precisely because it hides behind respectability. Wealth provides what only God can legitimately give — security, significance, freedom — and so it is uniquely equipped to function as a god without ever announcing itself as one. Keller consistently connects financial generosity to justice (Generous Justice) and grounds both in the cross: because God became poor for us, we can become poor for others. His teaching on Zacchaeus — that the evidence of salvation was immediate, voluntary, radical redistribution — is among the most searching applications of the gospel to the wallet in contemporary preaching.",
  },
  {
    name: "John Wesley",
    role: "Earn All You Can, Save All You Can, Give All You Can",
    quote:
      "Earn all you can, save all you can, give all you can. Having gained all you can, and saved all you can, then give all you can — otherwise I can have no more hope of your salvation than of that of Judas Iscariot.",
    bio: "Wesley&rsquo;s 1744 sermon &ldquo;The Use of Money&rdquo; presents one of Christian history&rsquo;s most memorable and demanding financial frameworks. Earn all you can — without harming body, mind, or neighbor. Save all you can — not hoarding but eliminating wasteful spending. Give all you can — the third command swallows the first two and makes them mean something. Wesley himself put the formula into practice with startling consistency: as his income grew through his prolific writing, he kept his personal expenses essentially constant and gave the surplus away. He died with almost nothing. His class meetings required financial accountability alongside spiritual accountability — the two are inseparable in Wesley&rsquo;s theology of sanctification.",
  },
  {
    name: "David Platt",
    role: "Radical — Taking Back Your Faith from the American Dream",
    quote:
      "We live in a world where people are dying without the gospel, starving for food, and we sit comfortably in our padded pews thinking that our biggest obligation to those people is to write a check.",
    bio: "David Platt&rsquo;s Radical confronted the American church with the question the prosperity gospel will not ask: what if Jesus meant what he said? His study of Matthew 19 (the rich young ruler) and Luke 12 (the rich fool) leads him to conclude that comfortable Christianity — the assumption that suburban prosperity and radical discipleship are compatible — is the cultural accommodation the New Testament least tolerates. Platt does not argue that all wealth is sin; he argues that the global gap between the wealth of the average American Christian and the material need of the rest of the world constitutes a moral emergency that the church has largely agreed not to discuss. Radical is an uncomfortable book precisely because its target is not the greedy but the comfortable.",
  },
  {
    name: "Richard Foster",
    role: "The Freedom of Simplicity",
    quote:
      "Simplicity is freedom. Duplicity is bondage. Simplicity brings joy and balance. Duplicity brings anxiety and fear.",
    bio: "Richard Foster&rsquo;s Celebration of Discipline includes a chapter on simplicity that approaches money from the direction of spiritual formation rather than economic theory. His argument is that simplicity — the deliberate choice of less — is not an economic posture but a spiritual one: a way of holding all things loosely, available to God and to others, unencumbered by the management and protection of too much. In The Freedom of Simplicity he extends this into a full theology: the free person is the one whose identity is in Christ rather than in possessions, and who therefore has nothing to defend and everything to give. Foster&rsquo;s ten controlling principles of simplicity provide practical handles for the inner freedom Matthew 6 describes.",
  },
  {
    name: "Craig Blomberg",
    role: "Neither Poverty Nor Riches — A Biblical Theology of Material Possessions",
    quote:
      "The biblical perspective on wealth and poverty is a consistent call for generosity that meets genuine needs, neither idealized poverty nor idolized prosperity, but material sufficiency that enables radical giving.",
    bio: "New Testament scholar Craig Blomberg&rsquo;s Neither Poverty Nor Riches is the most exegetically careful treatment of the Bible&rsquo;s economic teaching. Blomberg surveys every relevant passage from Genesis through Revelation and resists both the prosperity gospel&rsquo;s over-reading and the ascetic tradition&rsquo;s under-reading of material blessing. His conclusion is the via media: the Bible neither romanticizes poverty nor endorses accumulation, but consistently calls God&rsquo;s people toward a &ldquo;enough plus generosity&rdquo; standard — material sufficiency that enables radical, ongoing care for those without enough. Blomberg&rsquo;s exegesis of the Zacchaeus story, the Macedonian collection, and the communal life of Acts 2 are essential reading for any serious financial discipleship.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Matthew 6:24",
    text: "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.",
    reflection:
      "The verse has no middle ground. Jesus does not describe a spectrum — some people serve God more than money — but a binary. The question it poses is not how much we love money but whether it has lordship. Serving mammon can look entirely respectable: no vice, no waste, just a life quietly organized around the accumulation and protection of wealth while God gets the leftovers.",
  },
  {
    reference: "1 Timothy 6:6-10",
    text: "But godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content. But those who desire to be rich fall into temptation, into a snare... For the love of money is a root of all kinds of evil.",
    reflection:
      "Paul places contentment as the specifically godly response to the temptation of wealth. Note the birth-and-death bracket: we arrived empty-handed and we leave the same way. Everything between those brackets is stewardship, not ownership. Contentment is not achieved by earning less; it is received by trusting that God is already more than enough.",
  },
  {
    reference: "Luke 12:15",
    text: "And he said to them, &ldquo;Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions.&rdquo;",
    reflection:
      "The warning is not against wealth but against covetousness — the inner posture that measures life by what one accumulates. Jesus says the abundance of possessions is simply not what life is made of, not for any person. This is both a correction and a relief: you do not have enough money to buy what you are looking for, and you never will, and now you can stop.",
  },
  {
    reference: "2 Corinthians 9:6-7",
    text: "Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reflection:
      "The agricultural metaphor treats generosity as investment in an economy governed by different laws than Wall Street. Sowing bountifully does not guarantee a specific financial return; it guarantees participation in the economy of grace, where God himself multiplies seed to the sower. The cheerful giver&rsquo;s joy is partly present — the freedom of open hands — and partly anticipatory.",
  },
  {
    reference: "Malachi 3:10",
    text: "Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.",
    reflection:
      "God issues a direct invitation to test him — almost the only place in Scripture where testing God is explicitly commanded. The tithe is not primarily a financial discipline; it is a faith declaration: I trust the God who made heaven and earth more than I trust the ten percent I am releasing. The windows-of-heaven promise is real, but its currency is not specified — the blessing that pours down may be provision, community, freedom, or the joy of generosity itself.",
  },
  {
    reference: "Mark 12:43-44",
    text: "And he called his disciples to him and said to them, &ldquo;Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on.&rdquo;",
    reflection:
      "Jesus is watching — not the amount but the proportion, not the deposit but the reserve left behind. The widow&rsquo;s two coins are the most expensive gift in the temple that day because they cost her everything. The passage invites honest examination: not &ldquo;am I giving?&rdquo; but &ldquo;what am I keeping?&rdquo;",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "b8d5KMBH_rM", title: "You Cannot Serve God and Money — Matthew 6:24" },
  { videoId: "hBEKLvjEBE4", title: "The Love of Money — 1 Timothy 6 Explained" },
  { videoId: "zF-M5hMcIvc", title: "The Rich Young Ruler — Luke 18" },
  { videoId: "9E-pXf7KCNU", title: "Randy Alcorn on Storing Treasure in Heaven" },
  { videoId: "UgqY27T9TxM", title: "What the Prosperity Gospel Gets Wrong" },
  { videoId: "GCtknVjLNTQ", title: "2 Corinthians 8-9 — Generous Giving and the Gospel" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianMoneyGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<MNYEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [moneyArea, setMoneyArea] = useState("");
  const [temptation, setTemptation] = useState("");
  const [gospelResponse, setGospelResponse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as MNYEntry[]);
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
    if (!moneyArea.trim() || !temptation.trim()) return;
    const entry: MNYEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString(),
      moneyArea: moneyArea.trim(),
      temptation: temptation.trim(),
      gospelResponse: gospelResponse.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setMoneyArea("");
    setTemptation("");
    setGospelResponse("");
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
              Financial Discipleship
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              You Cannot Serve Two Masters: A Christian Guide to Money
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Jesus spoke about money more than almost any other topic — because mammon is the most
              effective rival lord the human heart knows. This guide traces the biblical theology of
              money from Matthew 6&rsquo;s impossible choice through the widow&rsquo;s mite, the
              tithe, the Macedonian churches&rsquo; abandon, and into practical financial
              discipleship for everyday life.
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
                &ldquo;No one can serve two masters, for either he will hate the one and love the
                other, or he will be devoted to the one and despise the other. You cannot serve God
                and money.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Matthew 6:24</p>
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
                Before financial discipleship is a set of practices it is a set of convictions —
                about lordship, contentment, generosity, and eternity. These eight studies trace
                money through Scripture from mammon as rival lord to the cheerful giver whose heart
                the gospel has already transformed.
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
                        background: "rgba(217, 119, 6, 0.07)",
                        border: `1px solid rgba(217, 119, 6, 0.25)`,
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
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Mammon&rsquo;s lordship claim, philarguria&rsquo;s deception, the widow&rsquo;s
                  abandon, the tithe as floor, the Macedonian churches&rsquo; joy — these are not
                  eight separate topics but one: the question of where the heart is anchored. Jesus
                  locates treasure and heart together (Matt 6:21) because they cannot be separated.
                  Financial discipleship is therefore inseparable from the rest of discipleship.
                  Explore stewardship and generosity further in the{" "}
                  <Link href="/christian-generosity" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Generosity guide
                  </Link>
                  , or connect money to work in our{" "}
                  <Link href="/christian-work-theology" style={{ color: GOLD, textDecoration: "underline" }}>
                    Theology of Work
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
                Financial holiness is not theoretical. These six practices are concrete structures
                for loosening mammon&rsquo;s grip — in the budget, the buying habits, the debt,
                the community, and the long accounting of eternity.
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
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
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
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The heart behind the practice
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  None of these practices will sanctify the finances of a heart that has not first
                  surrendered the lordship question to Christ. Budgeting, tithing, and debt payoff
                  done under mammon&rsquo;s supervision are just different forms of self-management.
                  Financial discipleship begins at the altar, not the spreadsheet: &ldquo;Lord, it
                  is all yours. Show me how to steward it.&rdquo; Start there, and let the practices
                  follow.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have taken the Bible&rsquo;s financial theology seriously — not as
                a lifestyle brand but as a discipleship imperative rooted in the gospel and the
                coming kingdom.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: GOLD,
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
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
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
                Six passages to read slowly, meditate on, and pray through. Each stakes a claim
                about money that the world contradicts daily. Consider memorizing one per month and
                letting it interrogate the next financial decision you face.
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  For each text: adoration (&ldquo;Father, you are the God who opens windows of
                  heaven — my security is in you, not in my accounts&rdquo;), confession (&ldquo;I
                  have served mammon quietly, through fear of scarcity and love of comfort&rdquo;),
                  and petition (&ldquo;make me a cheerful giver, free from the love of money, rich
                  toward you&rdquo;). Let the Bible rewrite the financial imagination before it
                  restructures the financial habits.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Financial discipleship requires honest self-examination. Log a specific area of your
                financial life, the temptation you face in it, and the gospel response that reframes
                it. Entries are saved privately in your browser — no one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New money journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mny-area" style={labelStyle}>
                    Area of financial life
                  </label>
                  <input
                    id="mny-area"
                    type="text"
                    value={moneyArea}
                    onChange={(e) => setMoneyArea(e.target.value)}
                    placeholder="e.g., spending on eating out, retirement savings, giving percentage, debt"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="mny-temptation" style={labelStyle}>
                    The temptation in this area
                  </label>
                  <textarea
                    id="mny-temptation"
                    value={temptation}
                    onChange={(e) => setTemptation(e.target.value)}
                    placeholder="Hoarding out of fear? Comparison spending? Debt from chasing status? Name it honestly."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="mny-gospel" style={labelStyle}>
                    The gospel response
                  </label>
                  <textarea
                    id="mny-gospel"
                    value={gospelResponse}
                    onChange={(e) => setGospelResponse(e.target.value)}
                    placeholder="How does the grace of Christ reframe this area? What does trust in God look like here practically?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!moneyArea.trim() || !temptation.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !moneyArea.trim() || !temptation.trim() ? BORDER : GOLD,
                    color: !moneyArea.trim() || !temptation.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !moneyArea.trim() || !temptation.trim() ? "not-allowed" : "pointer",
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
                      Name one area, one temptation, and one gospel response. The honest naming is
                      itself the beginning of freedom.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD }}>
                              {entry.moneyArea}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.moneyArea}`}
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
                            The temptation
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.temptation}
                          </p>
                        </div>

                        {entry.gospelResponse && (
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
                              Gospel response
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.gospelResponse}
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
                Teaching on mammon, generosity, and financial discipleship — from Jesus&rsquo;
                sermons on money to contemporary voices on the prosperity gospel and what the cross
                has to say about the wallet.
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
              Money as a discipleship frontier
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Jesus did not avoid the topic of money — he pressed into it repeatedly, because he
              knew that mammon is uniquely equipped to divide the heart from God while leaving
              religion intact. The Pharisees were religious and greedy; their tithe of herbs became
              a way of avoiding the weightier matters. Financial discipleship is not a subpoint of
              the Christian life — it is one of its most diagnostic fronts, a place where what we
              actually believe about God, security, and eternity becomes visible in a ledger.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue the journey: connect money to the theology of work in{" "}
              <Link href="/christian-work-theology" style={{ color: GOLD, textDecoration: "underline" }}>
                Whatever You Do: A Theology of Work
              </Link>
              , or explore the practice of giving in{" "}
              <Link href="/christian-generosity" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Generosity
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
