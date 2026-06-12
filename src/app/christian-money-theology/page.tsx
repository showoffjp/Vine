"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const GREEN = "#3a7d56";

const TABS = [
  "What Jesus Said",
  "Theology of Generosity",
  "Tithing in the NT",
  "Contentment",
  "Debt & Stewardship",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface TabSection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

const jesusSections: TabSection[] = [
  {
    badge: "Matthew 6:19-34",
    title: "Jesus on Mammon: More Than Heaven and Hell Combined",
    paragraphs: [
      "Jesus spoke about money and possessions more than any other single topic &mdash; including heaven and hell combined. Over 2,000 verses in Scripture deal with money and possessions; 16 of Jesus&rsquo; 38 parables concern the use of wealth. This frequency is not incidental. Jesus understands that money competes with God for the human heart with unique effectiveness. In the Sermon on the Mount he draws the absolute line: &ldquo;No one can serve two masters&hellip; You cannot serve God and mammon&rdquo; (Matt 6:24). Mammon (mamonas in Greek, from Aramaic mamona) is money personified as a rival lord &mdash; a spiritual power that makes loyalty claims on the human will.",
      "The Sermon on the Mount continues in Matthew 6:19-34 with instruction on anxiety and treasure. &ldquo;Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven&rdquo; (vv. 19-20). The logic is investment: earthly wealth is stored in a volatile account; heavenly treasure is in a secure one. Jesus then addresses the anxiety that drives accumulation: &ldquo;Do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on&rdquo; (v. 25). The anxiety behind hoarding is itself a form of unbelief &mdash; a failure to trust the Father who feeds the birds and clothes the lilies.",
      "The conclusion is a comprehensive reordering of priorities: &ldquo;Seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; (v. 33). Financial discipleship is not primarily about budget management. It is about which kingdom we are building and which lord we are serving.",
    ],
    callout: {
      label: "The word",
      text: "Mammon (&mu;&alpha;&mu;&omega;&nu;&#8135;&sigmaf;): from Aramaic mamona &mdash; wealth personified as a spiritual power making lordship claims. Jesus treats money not as a neutral tool but as a rival god.",
    },
  },
  {
    badge: "Luke 12:13-21",
    title: "The Parable of the Rich Fool",
    paragraphs: [
      "A man in the crowd asks Jesus to arbitrate an inheritance dispute. Jesus refuses and instead issues a warning: &ldquo;Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions&rdquo; (Luke 12:15). Then comes the parable: a rich man whose ground produces abundantly tears down his barns to build bigger ones, so he can &ldquo;eat, drink, and be merry&rdquo; for many years. God&rsquo;s verdict that night: &ldquo;Fool! This night your soul is required of you, and the things you have prepared, whose will they be?&rdquo;",
      "The rich fool is not punished for working hard or for his productive land. He is called a fool because he built his security on accumulation while remaining &ldquo;not rich toward God.&rdquo; His barns were full; his soul was empty. Wealth is dangerous precisely because it is so effective at simulating what it cannot provide: genuine security, genuine freedom, genuine significance. The parable names the fool&rsquo;s path before we reach its end.",
      "Notice too what the rich man says in his internal monologue: &ldquo;I will say to my soul, &lsquo;Soul, you have ample goods laid up for many years; relax, eat, drink, be merry&rsquo;&rdquo; (v. 19). He counsels his own soul with what only God can rightly say. His wealth has taken the place of God as the source of peace and security. This is mammon&rsquo;s deepest deception: it does not merely compete with God &mdash; it impersonates him.",
    ],
  },
  {
    badge: "Luke 15; Mark 10:25",
    title: "The Prodigal Son, the Elder Brother, and the Eye of a Needle",
    paragraphs: [
      "The parable of the prodigal son (Luke 15:11-32) is usually read as a story about forgiveness and the heart of the Father. It is also a story about money. The younger son demands his inheritance early &mdash; a radical act of relational severance, treating his father as already dead &mdash; and squanders it in &ldquo;reckless living.&rdquo; The elder son&rsquo;s response to the father&rsquo;s welcome reveals a different money problem: he has been working &ldquo;like a slave&rdquo; (v. 29) and has never &ldquo;received even a young goat.&rdquo; His obedience was transactional. Both sons relate to the father&rsquo;s wealth rather than to the father himself.",
      "The camel through the eye of a needle (Mark 10:25) has generated centuries of attempted softening. The word is not &ldquo;rope&rdquo; (kamilos) but &ldquo;camel&rdquo; (kamelos). There is no historical evidence for a Jerusalem gate called &ldquo;the Needle&rsquo;s Eye.&rdquo; Jesus means what he says: it is easier for a camel to pass through the eye of a needle than for a rich man to enter the kingdom of God. The disciples are astonished: &ldquo;Then who can be saved?&rdquo; Jesus does not soften the answer but redirects it: &ldquo;With man it is impossible, but not with God. For all things are possible with God&rdquo; (v. 27). Deliverance from wealth&rsquo;s lordship is a miracle, not a moral achievement.",
      "Zacchaeus (Luke 19:1-10) is the positive case. He is a chief tax collector &mdash; wealthy through collaboration with Rome and extraction from neighbors. After Jesus comes to his house, Zacchaeus stands and says: &ldquo;Behold, Lord, the half of my goods I give to the poor. And if I have defrauded anyone of anything, I restore it fourfold.&rdquo; Jesus&rsquo; response: &ldquo;Today salvation has come to this house.&rdquo; The salvation is real; the redistribution is its fruit. Zacchaeus is the answer to the rich young ruler: the same gospel that left one man sorrowful left another one at radical, joyful restitution.",
    ],
    callout: {
      label: "Key insight",
      text: "Tim Keller&rsquo;s reading: the elder son is as lost as the younger son, but his lostness is more dangerous because it is hidden inside religious obedience. Both sons need the Father. Money makes the lostness of each visible.",
    },
  },
];

const generositySections: TabSection[] = [
  {
    badge: "2 Corinthians 8:1-7",
    title: "The Macedonian Churches: Grace That Gives",
    paragraphs: [
      "Paul&rsquo;s extended appeal for the Jerusalem collection in 2 Corinthians 8-9 is the most thorough treatment of Christian generosity in the New Testament. He opens with the Macedonian churches &mdash; Philippi, Thessalonica, and Berea &mdash; as the model: &ldquo;in a severe test of affliction, their abundance of joy and their extreme poverty have overflowed in a wealth of generosity on their part&rdquo; (8:2). Two seemingly incompatible conditions &mdash; extreme poverty and abundant generosity &mdash; coexist because of a third: &ldquo;the grace of God that was given among the churches of Macedonia&rdquo; (8:1).",
      "Paul uses the word charis (grace) to describe the act of giving (8:1, 4, 6, 7, 9). This is the same word used for the grace of the gospel. The theology is precise: generosity is not a virtue one summons by willpower but a grace one receives and participates in. The Macedonians &ldquo;gave according to their means, and beyond their means, of their own accord, begging us earnestly for the favor (charis) of taking part in the relief of the saints&rdquo; (8:3-4). They begged for the privilege of giving. This is grace-transformed generosity: the same movement that made God give his Son now moves in the heart of the believer toward others.",
      "The theological foundation is the cross: &ldquo;For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you by his poverty might become rich&rdquo; (8:9). The incarnation as financial theology: Christ was infinitely wealthy; he became materially poor; his poverty transferred wealth to us. Every act of Christian generosity participates in this same logic &mdash; downward movement that produces upward result in others.",
    ],
    callout: {
      label: "The word",
      text: "Charis (&chi;&alpha;&rho;&iota;&sigmaf;): grace &mdash; Paul uses the same word for both God&rsquo;s saving grace and the act of financial giving. Generosity is not a moral virtue layered on top of the gospel; it is a form of the gospel&rsquo;s expression.",
    },
  },
  {
    badge: "2 Corinthians 9:6-15",
    title: "Cheerful Giving: Hilaros and the Sowing Principle",
    paragraphs: [
      "Chapter 9 delivers the famous formulas of gospel generosity. The sowing principle: &ldquo;Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully&rdquo; (9:6). The agricultural metaphor treats generosity as investment in an economy governed by different laws than Wall Street &mdash; an economy where God himself is the multiplier. Then the condition of heart: &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver&rdquo; (9:7).",
      "The word translated &ldquo;cheerful&rdquo; is hilaros &mdash; from which the English word &ldquo;hilarious&rdquo; derives. This is almost reckless gladness, the joy of open hands. The compelled giver gives out of duty; the cheerful giver gives out of abundance of heart. Paul does not manufacture this cheerfulness through guilt or obligation &mdash; he grounds it in the gospel. Because you have received the grace of Christ, you can give with the same abandon with which you were given to.",
      "The goal of generous giving, Paul explains in verses 12-15, is not primarily the relief of material need (though that matters) but the overflow of thanksgiving to God: &ldquo;the ministry of this service is not only supplying the needs of the saints but is also overflowing in many thanksgivings to God&rdquo; (9:12). Generosity is an act of worship. It glorifies God by making visible the sufficiency of his grace: &ldquo;God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work&rdquo; (9:8). The theology of giving as participation in the divine economy: every gift is a testimony that God provides.",
    ],
  },
  {
    badge: "Theology",
    title: "Generosity as Participation in the Divine Economy",
    paragraphs: [
      "The theology of generosity in 2 Corinthians 8-9 is not ethics layered on top of the gospel &mdash; it is the gospel&rsquo;s own logic applied to the wallet. The Triune God is, by nature, a giver: the Father gives the Son; the Son gives his life; the Spirit gives gifts to the church. Creation is an act of generosity &mdash; God sharing existence with what is not God. The incarnation is an act of downward generosity &mdash; God sharing humanity. The cross is an act of costly generosity &mdash; God absorbing the cost of human sin to transfer forgiveness to us.",
      "When a Christian gives, she participates in this divine movement. She does not merely imitate God&rsquo;s generosity &mdash; she is animated by the same Spirit who moved Christ from riches to poverty for our sake. This is why Paul grounds the appeal not in the needs of Jerusalem&rsquo;s poor (though those are real) but in the grace of Christ: &ldquo;For you know the grace of our Lord Jesus Christ&rdquo; (8:9). The appeal is: remember what was done for you; let it move you toward others.",
      "Randy Alcorn&rsquo;s &ldquo;eternity accounting&rdquo; extends this theology: every dollar given to kingdom purposes is a deposit in an account that does not depreciate, an investment in an economy that will outlast every earthly market. The Christian who gives is not losing wealth &mdash; she is moving it from a temporary address to a permanent one. &ldquo;Do not lay up for yourselves treasures on earth&hellip; but lay up for yourselves treasures in heaven&rdquo; (Matt 6:19-20). Generosity is rational when you understand the terms of the economy.",
    ],
  },
];

const tithingSections: TabSection[] = [
  {
    badge: "Old Testament",
    title: "The Three OT Tithes: More Than Ten Percent",
    paragraphs: [
      "The Mosaic law actually established multiple tithes that together significantly exceeded ten percent. The Levitical tithe (Numbers 18:21): ten percent of all produce and herds to the Levites, who had no land inheritance of their own. The Levites then gave a tenth of their tithe (one percent of the national total) to the priests. This was the foundational provision for those serving Israel&rsquo;s worship life. The festival tithe (Deuteronomy 14:22-26): a second ten percent to be consumed by the family at the annual festivals in Jerusalem, celebrating God&rsquo;s provision and building covenant community.",
      "The poor tithe (Deuteronomy 14:28-29): every three years, a third tithe was stored locally &ldquo;within your towns&rdquo; and distributed to &ldquo;the Levite, the sojourner, the fatherless, and the widow.&rdquo; This three-year cycle meant roughly 3.3 percent per year dedicated to local poverty relief, on top of the other tithes. Together, these obligations likely amounted to around 23 percent of income in tithe years. This is the context for Malachi 3:10&rsquo;s &ldquo;full tithe&rdquo; &mdash; withholding was not merely stinginess but a breach of the covenant obligations that sustained Israel&rsquo;s priests, festivals, and poor.",
      "The Malachi 3:10 passage issues the only direct divine invitation to test God in all of Scripture: &ldquo;Bring the full tithe into the storehouse&hellip; and thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.&rdquo; The tithe is a faith declaration: I trust the God of creation more than the ten percent I am releasing. The blessing promised is real; its currency is not specified.",
    ],
    callout: {
      label: "Numbers",
      text: "Levitical tithe (Num 18:21): ~10% | Festival tithe (Deut 14:22-26): ~10% | Poor tithe every 3 years (Deut 14:28-29): ~3.3% per year | Total: ~23% in tithe years. The tithe is the floor, not the ceiling.",
    },
  },
  {
    badge: "Matthew 23:23",
    title: "Jesus on Tithing: Don&rsquo;t Neglect the Weightier Matters",
    paragraphs: [
      "Jesus&rsquo; only direct teaching on tithing occurs in Matthew 23:23: &ldquo;Woe to you, scribes and Pharisees, hypocrites! For you tithe mint and dill and cumin, and have neglected the weightier matters of the law: justice and mercy and faithfulness. These you ought to have done, without neglecting the others.&rdquo; The rebuke is precise: the Pharisees are not condemned for tithing (Jesus affirms it: &ldquo;these you ought to have done&rdquo;) but for using the tithe as a substitute for justice, mercy, and faithfulness.",
      "The Pharisee&rsquo;s tithe had become a technology for avoiding the harder work of the weightier matters. Meticulous calculation of one tenth of every herb in the garden was observable, measurable, and reputation-building &mdash; while justice for the poor, mercy toward the broken, and faithfulness in covenant relationship were more costly and less visible. Jesus does not abolish the tithe; he refuses to let it become a box checked while the heart remains untransformed.",
      "The implication for New Testament believers is that tithing is the minimum structure of giving, not the completion of it. You cannot tithe your way out of generosity toward the poor or faithfulness in community. The tithe marks the starting line of financial discipleship, not the finish line. And for the person whose heart has been transformed by the gospel, ten percent is not the ceiling but the floor from which grace-giving grows.",
    ],
  },
  {
    badge: "2 Corinthians 9; Romans",
    title: "NT Giving: Grace Beyond the Tithe",
    paragraphs: [
      "Paul never commands a specific percentage in his giving instructions. In 2 Corinthians 8-9 he appeals to the Macedonian model (generosity beyond ability), the gospel model (Christ became poor for our enrichment), and the heart condition (&ldquo;not reluctantly or under compulsion, for God loves a cheerful giver&rdquo;). The New Testament principle is proportional, generous, and grace-motivated giving that exceeds the tithe rather than meeting it as a legal minimum.",
      "For most Western Christians today, the tithe is a helpful structure precisely because it sets a concrete commitment that cuts through the perpetual renegotiation of &ldquo;how much should I give?&rdquo; The person who has committed to ten percent has made a decision; she does not have to make it again every month. This structure &mdash; the tithe as a floor &mdash; is not legalism; it is wisdom. The legalism lies in treating ten percent as the ceiling, after which the Christian has discharged her obligation to generosity.",
      "The New Testament answer to &ldquo;where should I give?&rdquo; is primarily the local church (the body that sustains worship, pastoral care, teaching, and mission) and secondarily to those in need. The Macedonian collection for Jerusalem was cross-cultural, cross-economic relief giving &mdash; wealthy Gentile churches supporting poor Jewish Christians &mdash; as a tangible expression of the unity of the one body of Christ. Local church giving is not an organizational loyalty preference; it is participation in the covenant community God has placed you in.",
    ],
  },
];

const contentmentSections: TabSection[] = [
  {
    badge: "Philippians 4:11-13",
    title: "Contentment: A Learned Discipline",
    paragraphs: [
      "&ldquo;I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me&rdquo; (Phil 4:11-13). Paul writes this from prison, after years of beatings, shipwrecks, and deprivation. The famous verse 13 (&ldquo;I can do all things through him who strengthens me&rdquo;) is not a sports motto; it is a testimony to the sufficiency of Christ in every economic condition.",
      "The Greek verb for &ldquo;learned&rdquo; (emathon) indicates acquired skill through experience &mdash; the same root as &ldquo;discipline&rdquo; and &ldquo;disciple.&rdquo; Contentment is not a personality trait some people have; it is a discipline everyone can learn. Paul has been trained by experience in both poverty and abundance, and he has discovered that Christ&rsquo;s sufficiency is constant across all conditions. The Stoic philosophers sought contentment through detachment &mdash; ceasing to care about external circumstances. Paul&rsquo;s contentment is not detachment but trust: he cares deeply about people, about the gospel, and about the church, but his peace is grounded in the God who provides, not in the circumstances that vary.",
      "Contentment is the direct antidote to the anxiety that drives financial anxiety and overconsumption. The person who has learned to be content in every circumstance has nothing to prove, nothing to secure, nothing to accumulate. Financial anxiety &mdash; the gnawing fear that there will not be enough &mdash; is the symptom of a heart that has not yet learned this lesson. It is not cured by a larger account balance; it is cured by the growing conviction that God is enough.",
    ],
    callout: {
      label: "The word",
      text: "Autarkes (&alpha;&#8016;&tau;&#940;&rho;&kappa;&eta;&sigmaf;): self-sufficient, content &mdash; but Paul&rsquo;s contentment is not autonomous self-sufficiency. It is Christ-sufficiency: &ldquo;through him who strengthens me.&rdquo; The distinction is everything.",
    },
  },
  {
    badge: "Hebrews 13:5; 1 Timothy 6:6-10",
    title: "The Love of Money and the Freedom of Contentment",
    paragraphs: [
      "&ldquo;Keep your life free from love of money, and be content with what you have, for he has said, &lsquo;I will never leave you nor forsake you&rsquo;&rdquo; (Heb 13:5). The writer of Hebrews connects the command to contentment directly to a divine promise: God&rsquo;s permanent presence is the ground on which contentment stands. The person who fears God will leave has a scarcity problem that money cannot solve and contentment cannot achieve by itself. But the person who believes the promise &mdash; &ldquo;I will never leave you nor forsake you&rdquo; &mdash; has the one resource she needs.",
      "Paul in 1 Timothy 6:6-10 sharpens the analysis: &ldquo;Godliness with contentment is great gain, for we brought nothing into this world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content.&rdquo; The birth-and-death bracket resets the frame entirely: we arrived empty-handed and we leave the same way. Everything between those brackets is stewardship, not ownership. Contentment is the posture appropriate to a steward who holds things temporarily.",
      "The practical means of cultivating contentment are ancient and proven: a gratitude practice (Phil 4:8 &mdash; think on whatever is true, honorable, just, pure, lovely, commendable); fasting from spending (a deliberate season of non-acquisition to break the compulsive purchase reflex); and the theology of &ldquo;enough&rdquo; (what is the sufficiency threshold at which I genuinely have enough to live and to give?). Each practice dismantles a layer of mammon&rsquo;s hold on the imagination and replaces it with trust.",
    ],
  },
  {
    badge: "Matthew 6:25-34",
    title: "Do Not Be Anxious: The Father Who Feeds the Birds",
    paragraphs: [
      "&ldquo;Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing?&rdquo; (Matt 6:25). Jesus speaks directly into the financial anxiety that drives overconsumption, over-saving, and frantic work: the fear that there will not be enough. The argument from lesser to greater: God feeds birds who neither sow nor reap nor gather into barns (v. 26); &ldquo;Are you not of more value than they?&rdquo; God clothes wildflowers more gloriously than Solomon&rsquo;s robes (vv. 28-29); will he not clothe you?",
      "The Gentiles, Jesus says, seek after food, drink, and clothing (v. 32) &mdash; their anxiety about provision is understandable because they do not know the Father. But &ldquo;your heavenly Father knows that you need them all&rdquo; (v. 32). The Christian&rsquo;s anxiety problem is a knowledge problem: a failure to believe what is true about the Father. Financial anxiety is not primarily a financial problem; it is a theological one. It is the practical outworking of an inadequate doctrine of God as provider.",
      "The cure Jesus prescribes is not a financial plan but a reorientation: &ldquo;Seek first the kingdom of God and his righteousness, and all these things will be added to you&rdquo; (v. 33). This is not a prosperity guarantee; it is a promise about the ordering of life. The person who spends her energy seeking the kingdom will find that provision follows. The person who spends her energy securing provision will find that kingdom seeking is perpetually deferred. The sequence matters: kingdom first, provision follows.",
    ],
  },
];

const debtSections: TabSection[] = [
  {
    badge: "Proverbs 22:7; Romans 13:8",
    title: "The Bible on Debt: The Borrower Is Slave",
    paragraphs: [
      "&ldquo;The rich rules over the poor, and the borrower is slave to the lender&rdquo; (Prov 22:7). This is not a legal prohibition but a description of power dynamics &mdash; debt is a form of bondage that limits freedom and constrains future income. The person with significant consumer debt has already promised a portion of every future paycheck to interest payments; their financial future is not fully their own. The proverb names this honestly: it is a form of servitude.",
      "Romans 13:8 &mdash; &ldquo;Owe no one anything, except to love each other, for the one who loves another has fulfilled the law&rdquo; &mdash; is sometimes applied absolutely as a prohibition on all debt. More careful exegesis suggests Paul is making a point about the perpetual and unpayable debt of love: unlike monetary debt, the debt of love can never be discharged because it is always due. The context is relationships and the law of love. Even so, the verse points in the direction of financial freedom: the Christian life is meant to be characterized by giving, not by perpetual obligation to lenders.",
      "The OT debt-release laws reflect God&rsquo;s concern for economic freedom: the Sabbatical year (Deut 15:1-2) required debt cancellation every seven years, preventing the permanent economic bondage that would otherwise accumulate. The Jubilee year (Lev 25) restored land to original families and released slaves. These were structural protections against the concentration of poverty and the perpetuation of debt. They do not translate directly into modern policy but they reveal something about God&rsquo;s character: he is for the freedom of his people, including financial freedom.",
    ],
    callout: {
      label: "Principle",
      text: "Not all debt is equally problematic: a carefully considered mortgage may be prudent stewardship; consumer debt accumulated through comparison spending, lifestyle inflation, or impulse buying is the direct financial fruit of covetousness. Naming the second category for what it is is the beginning of freedom.",
    },
  },
  {
    badge: "Practical Theology",
    title: "Christian Financial Principles: Margin as an Act of Faith",
    paragraphs: [
      "Randy Alcorn, Crown Financial, and Dave Ramsey all converge on related insights from different angles. Alcorn&rsquo;s core insight: money is a test of lordship, and how we handle it reveals who we actually trust. Crown Financial&rsquo;s core principle: financial freedom is stewardship freedom &mdash; debt-free living makes it possible to respond to God&rsquo;s leading without financial constraints blocking obedience. Ramsey&rsquo;s core strategy: the debt snowball creates momentum and behavioral change through quick wins, while the larger trajectory is giving and wealth-building for kingdom purposes.",
      "The theology of financial margin is underappreciated: keeping margin &mdash; not spending everything one earns, maintaining reserves, avoiding maximum leverage &mdash; is an act of faith and freedom. The person who lives at the edge of their income has no capacity to respond to unexpected needs, generosity opportunities, or vocational callings that require financial sacrifice. Margin is not merely financial prudence; it is the material form of keeping one&rsquo;s options available to God. &ldquo;Prepare your work outside; get everything ready for yourself in the field, and after that build your house&rdquo; (Prov 24:27).",
      "On wealth inequality: the Christian call is neither to condemn wealth nor to ignore inequality but to hold wealth as a steward who answers to a generous God and lives in a world of persistent need. Generational wealth transfer is itself a form of stewardship: the question is not whether to leave an inheritance but what kind &mdash; financial, spiritual, relational, or some combination. Proverbs 13:22 blesses the good man who &ldquo;leaves an inheritance to his children&rsquo;s children,&rdquo; but the context is a life of righteousness, not mere accumulation.",
    ],
  },
  {
    badge: "Discernment",
    title: "Breaking Free: The Path from Financial Bondage to Generosity",
    paragraphs: [
      "Financial bondage &mdash; whether from debt, from fear of scarcity, or from the love of money &mdash; requires both practical and spiritual intervention. The practical steps are well-documented: list every debt honestly, build a repayment plan, stop incurring new consumer debt, and redirect every paid-off debt payment toward giving and savings rather than lifestyle inflation. The discipline built during debt repayment is a gift; it trains the financial muscles that will be needed for generous giving.",
      "The spiritual intervention is more fundamental: naming mammon as the rival lord it is, confessing the specific forms of financial sin (fear, comparison spending, hoarding, greed), and receiving the grace that makes true freedom possible. Financial accountability with a trusted friend or small group is one of the most effective practices for breaking money&rsquo;s grip &mdash; because money thrives in privacy and withers in the light of honest community.",
      "The goal is not zero debt as a terminal condition but financial freedom as a platform for generosity. The person who has escaped consumer debt, built modest reserves, and established a generous giving habit is in a position to respond to God&rsquo;s leading without financial constraints constantly interfering. The end state is not the accumulation of wealth but the freedom to give, to serve, and to be moved by need without a lender&rsquo;s first claim on every dollar. This is the financial dimension of the life Jesus describes in Matthew 6: seeking first the kingdom, trusting the Father, and finding that provision follows.",
    ],
  },
];

interface VideoItem {
  videoId: string;
  title: string;
}

const videoItems: VideoItem[] = [
  { videoId: "LMHKKMPp0Ho", title: "Tim Keller on Money and the Gospel" },
  { videoId: "GIXR3iqjVmQ", title: "John Piper on the Danger of Wealth" },
  { videoId: "qMwAiNmV8qI", title: "Randy Alcorn on Generosity" },
];

export default function ChristianMoneyTheologyPage() {
  const [tab, setTab] = useState<Tab>("What Jesus Said");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

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
    whiteSpace: "nowrap" as const,
  });

  function renderSections(sections: TabSection[]) {
    return sections.map((section, idx) => (
      <article key={idx} style={cardStyle}>
        <div
          style={{
            fontSize: "0.75rem",
            color: GOLD,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
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
                textTransform: "uppercase" as const,
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
    ));
  }

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
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
            Biblical Theology
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Theology of Money
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Jesus spoke about money more than any other topic &mdash; because mammon is uniquely
            equipped to rival God for the human heart. This guide traces the Bible&rsquo;s teaching
            on wealth from Jesus&rsquo; own words through the theology of generosity in 2
            Corinthians 8&ndash;9, the question of tithing in the New Testament, contentment in
            Philippians 4, and practical Christian stewardship.
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
              &ldquo;No one can serve two masters&hellip; You cannot serve God and money.&rdquo;
            </p>
            <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Matthew 6:24</p>
          </div>
        </header>

        {/* Tabs */}
        <nav
          aria-label="Page sections"
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}
        >
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
              {t}
            </button>
          ))}
        </nav>

        {/* What Jesus Said */}
        {tab === "What Jesus Said" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Jesus addressed money more than almost any other subject. His teaching ranges from
              absolute prohibitions (you cannot serve both God and mammon) to parables that expose
              the spiritual dynamics behind wealth, and to specific encounters that show both the
              danger of riches and the possibility of genuine freedom.
            </p>
            {renderSections(jesusSections)}
          </section>
        )}

        {/* Theology of Generosity */}
        {tab === "Theology of Generosity" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Second Corinthians 8&ndash;9 is the New Testament&rsquo;s most complete theology of
              giving &mdash; grounded not in obligation but in the grace (charis) of Christ who
              became poor so that we might become rich. The Macedonian churches are the model:
              extreme poverty, abundant joy, overflow of generosity.
            </p>
            {renderSections(generositySections)}
          </section>
        )}

        {/* Tithing in the NT */}
        {tab === "Tithing in the NT" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The tithe has a complex Old Testament structure (three distinct tithes totaling
              roughly 23% in tithe years), a pointed mention in Jesus&rsquo; teaching (Matthew
              23:23), and a New Testament theology of grace giving that exceeds rather than
              replaces it. The tithe is a floor, not a ceiling.
            </p>
            {renderSections(tithingSections)}
          </section>
        )}

        {/* Contentment */}
        {tab === "Contentment" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Philippians 4:11&ndash;13 presents contentment as a learned discipline, not a
              personality trait. Paul has been trained by both poverty and abundance; his peace
              rests on Christ&rsquo;s sufficiency rather than on circumstances. Financial anxiety
              is, at its root, a theological problem: a failure to trust the Father who feeds the
              birds.
            </p>
            {renderSections(contentmentSections)}
          </section>
        )}

        {/* Debt & Stewardship */}
        {tab === "Debt & Stewardship" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The Bible addresses debt honestly: the borrower is slave to the lender (Prov 22:7).
              Keeping financial margin is an act of faith and freedom. The goal is not zero debt as
              a terminal destination but the financial freedom that enables generous, responsive
              discipleship.
            </p>
            {renderSections(debtSections)}
          </section>
        )}

        {/* Videos */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Teaching on money, generosity, and financial discipleship from trusted voices in
              evangelical theology.
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

        {/* Closing */}
        <section
          style={{
            marginTop: "3rem",
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: 12,
            padding: "1.75rem",
          }}
        >
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
            Money as a discipleship frontier
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Jesus did not avoid the topic of money &mdash; he pressed into it because mammon is
            uniquely equipped to divide the heart from God while leaving religion intact. Financial
            discipleship is not a subpoint of the Christian life; it is one of its most diagnostic
            fronts. How we hold money reveals what we actually believe about God, security, and
            eternity. The goal is not poverty but freedom: the open-handed life of the person who
            has learned, in every circumstance, to be content &mdash; and from that contentment,
            to give with hilarious joy.
          </p>
        </section>
      </main>
    </div>
  );
}
