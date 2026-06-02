"use client";

import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "jesus" | "practices" | "pitfalls";

// ─── TAB 1 DATA ──────────────────────────────────────────────────────────────

type AccordionItem = { id: string; title: string; body: string };

const theologyItems: AccordionItem[] = [
  {
    id: "ot",
    title: "Money in the Old Testament",
    body: `Israel's economic life was structured by covenant. The tithe (Deuteronomy 14:22-29) was not optional — it was a theological act acknowledging that the land and its produce belonged to Yahweh. Ten percent was baseline worship.

The Jubilee (Leviticus 25) is one of the most radical economic laws in the ancient world: every fifty years, land returned to its original family, slaves were freed, and debts were cancelled. The underlying logic was profound — "The land must not be sold permanently, because the land is mine and you reside in my land as foreigners and strangers" (Lev 25:23). Wealth accumulation had a built-in reset button.

The gleaning laws (Leviticus 19:9-10; Ruth 2) required farmers to leave the edges of their fields unharvested for the poor and the foreigner. This was not charity — it was structured access. The poor had a legal claim on the margins.

The manna economy (Exodus 16) taught Israel that enough is enough. Those who hoarded woke to maggots. Those who gathered too little found their portion supernaturally supplemented. The lesson was clear: trust God for daily bread; don't hoard against tomorrow.

The warnings to Israelite kings (Deuteronomy 17:14-20) prohibited the accumulation of gold, horses, and wives — the three ancient metrics of imperial power. Solomon violated all three (1 Kings 10-11), and the kingdom split. Wealth at the top was a covenant warning sign.`,
  },
  {
    id: "sermon",
    title: "The Sermon on the Mount and Money",
    body: `The Sermon on the Mount (Matthew 5-7) is the most concentrated body of Jesus's ethical teaching, and money occupies a significant portion of it.

"Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven... For where your treasure is, there your heart will be also." (Matthew 6:19-21). This is not asceticism — it is reordered investment. Jesus is not anti-wealth; he is anti-misplaced-trust.

"No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and mammon." (Matthew 6:24). The word mammon (Aramaic: māmōnā) refers to wealth conceived as a rival lord — a system of security and identity that competes with trust in God.

The section concludes with one of the most challenging passages in the New Testament: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear... But seek first his kingdom and his righteousness, and all these things will be given to you as well." (Matthew 6:25-33). The antidote to financial anxiety is not a budget — it is a reoriented center of gravity.`,
  },
  {
    id: "paul",
    title: "Paul's Teaching",
    body: `Paul navigated the tension between wealth, generosity, and contentment with unusual sophistication.

"But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it... For the love of money is a root of all kinds of evil." (1 Timothy 6:6-10). Note carefully: Paul says the love of money, not money itself, is a root of evil. The Greek word is philargyria — literally "love of silver." The problem is attachment, not possession.

His counsel to the wealthy is even more striking: "Command those who are rich in this present world not to be arrogant nor to put their hope in wealth, which is so uncertain, but to put their hope in God... Command them to do good, to be rich in good deeds, and to be generous and willing to share. In this way they will lay up treasure for themselves as a firm foundation for the coming age." (1 Timothy 6:17-19). Wealth is redeemable — if held loosely.

"I have learned, in whatsoever state I am, therewith to be content... I can do all things through Christ which strengtheneth me." (Philippians 4:11-13 KJV). This is a famous verse, frequently stripped of its context — Paul is talking about being content whether he has much or little. The power of Christ enables contentment in both directions.

2 Corinthians 9 contains Paul's most developed theology of giving: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." (v.7). The Greek word is hilaros — from which we get "hilarious." Giving should bubble up from joy, not obligation.`,
  },
  {
    id: "proverbs",
    title: "The Book of Proverbs",
    body: `Proverbs offers the most balanced, nuanced view of wealth in all of Scripture — and for that reason, it is sometimes overlooked in favor of more dramatic texts.

Proverbs does not romanticize poverty. "Lazy hands make for poverty, but diligent hands bring wealth." (10:4). "The wealth of the rich is their fortified city; the poverty of the poor is their ruin." (10:15). Hard work, planning, and wise stewardship are presented as virtues with real material consequences.

But Proverbs equally warns against wealth as an ultimate goal. "Whoever loves money never has enough; whoever loves wealth is never satisfied with their income." (Ecclesiastes 5:10 — the Solomonic tradition). "Do not wear yourself out to get rich; do not trust your own cleverness." (Proverbs 23:4).

The most crystalline verse on economic balance is Proverbs 30:8-9: "Give me neither poverty nor riches, but give me only my daily bread. Otherwise, I may have too much and disown you and say, 'Who is the LORD?' Or I may become poor and steal, and so dishonor the name of my God." This is the prayer of economic moderation — the "enough" threshold.

Proverbs is also unambiguous that exploitation is evil: "Whoever oppresses the poor to increase his own wealth, or gives gifts to the rich, will only come to poverty." (22:16). Dishonest scales, corrupt weights, and false measures are condemned repeatedly (11:1; 20:23; 16:11) — these were the ancient equivalent of rigged financial instruments.`,
  },
  {
    id: "prophets",
    title: "The Prophets and Economic Justice",
    body: `The Hebrew prophets understood economic exploitation as a covenant violation — not just a social problem but a theological one. To oppress the poor was to sin against Yahweh who had redeemed Israel from slavery.

Amos is the most devastating: "They sell the innocent for silver, and the needy for a pair of sandals. They trample on the heads of the poor as on the dust of the ground and deny justice to the oppressed." (Amos 2:6-7). He returns to this theme in chapter 8: "Hear this, you who trample the needy and do away with the poor of the land, saying, 'When will the New Moon be over that we may sell grain, and the Sabbath be ended that we may market wheat?' — skimping on the measure, boosting the price and cheating with dishonest scales." (8:4-5). The sin is not poverty — it is the institutional machinery that creates it.

Isaiah 58 is a searing critique of religious performance disconnected from economic justice: "Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter?" (vv. 6-7). Right worship and right economics are inseparable.

Micah's famous summary — "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." (6:8) — the phrase "act justly" (mishpat) carries specifically economic connotations in the prophetic tradition: fair weights, fair wages, access for the vulnerable.

For the prophets, a community's faithfulness to God was legible in how it treated its poorest members.`,
  },
  {
    id: "eschatology",
    title: "Eschatology and Money",
    body: `What does it mean to invest in something that will not last? The New Testament has a clear answer: earthly wealth is temporary and should be leveraged for eternal ends.

Jesus's language of "treasure in heaven" (Matthew 6:20; 19:21; Luke 12:33) is not metaphor — it is a genuine investment claim. Randy Alcorn in The Treasure Principle argues that giving is not losing; it is transferring assets to an account that cannot be seized, devalued, or destroyed. The logic is: if heaven is real, and if what we do with money here affects our standing there, then generosity is the highest-ROI investment available.

Revelation 18 contains one of the most striking economic passages in the New Testament: the fall of Babylon — which most scholars read as Rome, or any empire organized around commerce and consumption. The merchants of the earth weep over her fall: "The merchants of the earth will weep and mourn over her because no one buys their cargoes anymore — cargoes of gold, silver, precious stones and pearls... and human beings sold as slaves." (18:11-13). The system that trades human beings as cargo stands condemned. Babylon's economy is everything the Kingdom economy is not.

The parable of the Rich Fool (Luke 12:16-21) ends with the question that frames all eschatological thinking about money: "This is how it will be with whoever stores up things for themselves but is not rich toward God." What does it mean to be rich toward God? To hold money as a steward, not an owner — and to deploy it according to kingdom priorities before it is too late.`,
  },
];

// ─── TAB 2 DATA ──────────────────────────────────────────────────────────────

type JesusTopic = {
  id: string;
  title: string;
  reference: string;
  summary: string;
  detail: string;
  keyVerse: string;
};

const jesusTopics: JesusTopic[] = [
  {
    id: "rich-young-ruler",
    title: "The Rich Young Ruler",
    reference: "Mark 10:17-31",
    summary: "A man with everything asks the question that matters most — and walks away.",
    detail: `The Rich Young Ruler is one of the most startling encounters in the Gospels. A man comes running to Jesus — running, with urgency — falls on his knees, and asks: "Good teacher, what must I do to inherit eternal life?" He is young, moral, religious, and wealthy. He has kept the commandments from childhood. He is, by every visible metric, the ideal candidate for the kingdom.

Jesus's response is precise and personal: "One thing you lack. Go, sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me." Mark adds a devastating detail: "Jesus looked at him and loved him." This is not a harsh demand. It is a love-motivated surgical strike on the man's actual idol.

He goes away sad — "because he had great wealth."

The disciples are astonished. In their cultural framework, wealth was a sign of God's blessing. If this man can't enter the kingdom, who can? Jesus's response is famous: "It is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God." This was not a metaphor about a small gate in Jerusalem (that theory has no historical basis). It was a genuine impossibility — except that "with God all things are possible."

What does this mean today? Most interpreters do not believe Jesus requires every wealthy person to liquidate. The command was specific to this man's specific idol. But the principle holds: whatever you cling to more than you cling to Jesus — that is what he will ask you to surrender. For many people in the modern West, money is exactly that thing.

N.T. Wright: "The story is not first of all about wealth. It's about whether anything — anything at all — will be allowed to stand in the way of following Jesus."`,
    keyVerse: "Mark 10:21 — \"Jesus looked at him and loved him. 'One thing you lack,' he said.\"",
  },
  {
    id: "zacchaeus",
    title: "Zacchaeus",
    reference: "Luke 19:1-10",
    summary: "A tax collector climbs a tree, gets called down, and repentance restructures his finances.",
    detail: `Zacchaeus was a chief tax collector — not just corrupt, but the supervisor of corrupt collectors. He was wealthy precisely because the Roman tax system incentivized extortion: tax collectors bid for the right to collect, paid Rome upfront, and recovered their investment by charging more. Zacchaeus had built his fortune on the economic suffering of his neighbors.

He climbs a sycamore-fig tree to see Jesus — an act of undignified curiosity. Jesus stops beneath it and says something no one expected: "Zacchaeus, come down immediately. I must stay at your house today." The crowd muttered: "He has gone to be the guest of a sinner."

We are not told what Jesus and Zacchaeus discussed over dinner. We only see the result. Zacchaeus stands up and declares: "Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount." Jesus's response: "Today salvation has come to this house."

The theological point is clear: genuine repentance has financial consequences. Zacchaeus doesn't just feel sorry — he restructures his wealth. He goes beyond the Mosaic requirement for restitution (20% above the amount in Numbers 5:7) to the penalty for a convicted thief (fourfold, Exodus 22:1). He takes the maximum standard and applies it voluntarily.

John the Baptist had said the same thing: "Anyone who has two shirts should share with the one who has none, and anyone who has food should do the same." (Luke 3:11). Repentance is not merely emotional; it reorders economic relationships.

For the modern reader: how we spend, save, and give is evidence of where our loyalty actually lies. Zacchaeus is the model of a conversion that reaches all the way down to the bank account.`,
    keyVerse: "Luke 19:8 — \"Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.\"",
  },
  {
    id: "widows-mite",
    title: "The Widow's Mite",
    reference: "Mark 12:41-44",
    summary: "Two small coins outvalue a fortune. The gift that costs most counts most.",
    detail: `Jesus sits across from the temple treasury and watches people put in money. The rich throw in large amounts. Then a poor widow comes and drops in two lepta — the smallest coins in circulation, worth about 1/64 of a denarius, roughly 15 minutes of minimum wage. Together they are worth a fraction of a cent in modern terms.

Jesus calls his disciples and delivers a lesson in counter-intuitive economics: "Truly I tell you, this poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything — all she had to live on."

The standard reading focuses on proportionality: she gave 100% of what she had; the rich gave a small fraction. The principle of sacrificial giving means the relative cost to the giver matters, not the absolute amount.

But a minority reading, advanced by scholars like Addison Wright and Elizabeth Schüssler Fiorenza, notes the surrounding context: Jesus has just denounced the scribes who "devour widows' houses" (12:40). He is sitting watching the temple extract the last resources of its poorest members. On this reading, the story is not praise but lament — the widow is being exploited by a religious institution that should be protecting her.

Both readings are instructive: proportional generosity is genuinely honored by God; but institutions that extract sacrificial gifts from the poor while enriching themselves stand under judgment. The widow is both hero and victim. The church must be careful not to celebrate sacrifice while structuring itself as a machine that benefits from it.

The practical application: before you praise someone's sacrificial giving, ask whether you are the institution they are giving to — and whether your structure warrants that sacrifice.`,
    keyVerse: "Mark 12:43-44 — \"She, out of her poverty, put in everything — all she had to live on.\"",
  },
  {
    id: "talents",
    title: "The Parable of the Talents",
    reference: "Matthew 25:14-30",
    summary: "A master leaves, servants invest, and the one who buries his talent loses everything.",
    detail: `A man going on a journey entrusts his servants with talents — a talent being not a skill but a unit of money, roughly 20 years of wages. He gives one servant five talents, another two, another one — "each according to his ability." He then leaves.

The servant with five trades and earns five more. The servant with two earns two more. The servant with one buries his in the ground. When the master returns, the first two are commended: "Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things." The third produces his talent, intact, and explains: "I was afraid, and went and hid your talent in the earth." The master is furious. The talent is taken from him and given to the servant with ten.

The parable is primarily about the kingdom of God — about what we do with what God has entrusted to us before his return. But it operates on a financial register that Jesus clearly intends. Several implications:

First, stewardship involves risk. Burying the talent — the "safe" option — is the condemned choice. Faithful stewardship means deploying resources, not protecting them.

Second, accountability is real. The master does not say "it was your money to do with as you pleased." The servants were entrusted with what belonged to another. Every dollar we hold is held in trust.

Third, returns matter. The master celebrates multiplication. This is not a parable about wealth maximization for its own sake, but it does endorse active, productive use of resources over passive hoarding.

For Christians thinking about money: the question is not "how do I protect what I have?" but "how do I deploy what I've been given to produce something of value for the Kingdom before the Master returns?"`,
    keyVerse: "Matthew 25:23 — \"Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.\"",
  },
  {
    id: "shrewd-manager",
    title: "The Parable of the Shrewd Manager",
    reference: "Luke 16:1-13",
    summary: "The most confusing parable Jesus ever told — and the most important one about money.",
    detail: `A manager about to be fired for mismanaging his master's estate calls in his master's debtors and reduces their debts — 100 barrels of oil becomes 50; 100 measures of wheat becomes 80. He is buying their future goodwill with his master's resources.

Here is the shocking part: "The master commended the dishonest manager because he had acted shrewdly." (v.8). Jesus appears to commend fraud.

Scholars have wrestled with this for two millennia. The most plausible interpretations:

1. The manager was canceling his own commission, not stealing from the master. Ancient managers often added their own cut to the debts they managed. By reducing the debts, he was forgoing his own profit — which was his right. The master commended him for wisdom, not theft.

2. Even if he was acting dishonestly, Jesus is making a different point. He does not commend the fraud; he commends the shrewdness applied to an urgent situation. "The people of this world are more shrewd in dealing with their own kind than are the people of the light." (v.8). His point is: if secular people pursue financial security with this kind of intentionality, why don't kingdom people pursue eternal ends with the same energy?

Jesus draws the lesson explicitly: "Use worldly wealth to gain friends for yourselves, so that when it is gone, you will be welcomed into eternal dwellings." (v.9). Money is not the goal — it is a tool for building relationships and advancing kingdom purposes that will outlast the money itself.

The parable concludes with the hardest summary in Luke: "You cannot serve both God and money." (v.13). The parable is Jesus's most developed exposition of why.`,
    keyVerse: "Luke 16:9 — \"Use worldly wealth to gain friends for yourselves, so that when it is gone, you will be welcomed into eternal dwellings.\"",
  },
  {
    id: "render-caesar",
    title: "Render to Caesar",
    reference: "Matthew 22:15-22",
    summary: "A trap about a coin becomes a masterclass in dual loyalty — and its limits.",
    detail: `The Pharisees and Herodians — normally bitter enemies — join forces to trap Jesus. The trap is elegant: "Is it right to pay the imperial tax to Caesar or not?" If Jesus says yes, he alienates Jewish nationalists who despise Roman taxation as collaboration with oppressors. If he says no, he is guilty of sedition against Rome.

Jesus asks for a denarius — the Roman coin used to pay the tax. They produce one. He asks whose image is on it. "Caesar's," they reply. His answer: "So give back to Caesar what is Caesar's, and to God what is God's."

The questioners are astonished. But the profundity of the answer is easily missed. Jesus is not drawing a clean line between church and state. He is exposing the logic embedded in the coin: the image (eikon) on the denarius establishes ownership. Coins bearing Caesar's image belong to Caesar — so give them back.

But then: what bears God's image? Human beings (Genesis 1:26-27). If the coin bearing Caesar's image belongs to Caesar, then the person bearing God's image belongs to God. The answer is not "give some to each." It is "give to Caesar the coins, and give to God — yourself."

N.T. Wright: "This is not a doctrine of the separation of church and state. It is a far more radical claim: Caesar can have his money. God claims your whole person."

For a theology of money: it means that money, as a domain of human activity, is not exempt from God's claims. Financial decisions are theological decisions. How you earn, spend, save, and give is an act of rendering to God — or withholding from him — what bears his image.`,
    keyVerse: "Matthew 22:21 — \"So give back to Caesar what is Caesar's, and to God what is God's.\"",
  },
];

// ─── TAB 3 DATA ──────────────────────────────────────────────────────────────

const practiceItems: AccordionItem[] = [
  {
    id: "tithe",
    title: "Tithe as Baseline",
    body: `The tithe — giving 10% of income — has a long history that predates the Mosaic law. Abraham gave a tenth to Melchizedek (Genesis 14:20). Jacob vowed a tenth to God (Genesis 28:22). Under the law, Israel observed multiple tithes that together amounted to considerably more than 10%.

In the New Testament, tithing is not explicitly commanded — but it is assumed. Jesus rebukes the Pharisees not for tithing but for doing so without justice and mercy (Matthew 23:23). Paul does not mandate a tithe but establishes principles that exceed it: generosity proportional to income, decided in the heart, given cheerfully (2 Corinthians 9:6-7).

The historic Christian consensus treats the tithe as a floor, not a ceiling. It is a starting point for giving — a discipline that breaks the grip of money and trains the heart toward generosity. For Christians new to giving, beginning with a tithe and working toward it over time is a reasonable on-ramp.

The deeper question is not "do I owe God 10%?" but "what does faithful stewardship look like for someone who holds everything in trust?" For many in the Western middle class, 10% is easily affordable and requires minimal sacrifice. The tithe was designed as a significant gift; whether it still functions that way depends on the giver's income and circumstances.

Practical suggestion: automate giving. If it requires a monthly act of will, it will eventually be skipped. Treat giving like taxes — taken off the top before discretionary spending begins.`,
  },
  {
    id: "firstfruits",
    title: "First Fruits Giving",
    body: `The concept of first fruits (Exodus 23:19; Deuteronomy 26:1-11; Proverbs 3:9-10) involves offering the first and best — not the leftovers. In an agrarian economy, this meant bringing the first portion of the harvest before you knew how the rest of the year would turn out. It was an act of trust: "I believe there will be enough, and I will honor God before I find out."

In contemporary financial terms, first fruits giving means giving off the top — before the mortgage, before groceries, before discretionary spending. It is the opposite of "I'll give what's left over after expenses." Giving what's left over is almost always less than intended and carries no trust posture. Giving first is an act of faith that God will provide enough from what remains.

Proverbs 3:9-10: "Honor the LORD with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine." This is not a prosperity formula — it is a description of a trust-posture that reorders a person's relationship to their resources.

For many people, the most powerful change they can make to their financial life is simply to reverse the order: give first, save second, spend what remains. This single structural change transforms giving from a residual activity into a theological statement.`,
  },
  {
    id: "generosity",
    title: "Open-Handed Generosity",
    body: `Randy Alcorn's Treasure Principle (2001) articulates a theology of giving built on a single realization: you can't take it with you — but you can send it ahead. Giving is not loss; it is transfer to an indestructible account. "Do not store up for yourselves treasures on earth... But store up for yourselves treasures in heaven." (Matthew 6:19-20).

The Treasure Principle's six keys:
1. God owns everything; you are his money manager.
2. My heart always goes where I put God's money.
3. Heaven, not earth, is my home.
4. I should live not for the dot (this life) but for the line (eternity).
5. Giving is the only antidote to materialism.
6. God prospers me not to raise my standard of living but to raise my standard of giving.

Alcorn argues that the practice of generosity is itself spiritually formative — it loosens the grip of money on the soul in a way that merely thinking about money cannot. Every act of giving is a small act of worship that says: "This is not my ultimate security."

Practical forms of open-handed generosity include: spontaneous giving (responding immediately to needs rather than waiting to "plan"), percentage-giving that increases with income, giving to causes outside your own community and comfort zone, and anonymous giving which removes the social reward of recognition.

William Law (A Serious Call to a Devout and Holy Life, 1729): "If you give money to a poor man, it is to yourself that you give it."`,
  },
  {
    id: "simplicity",
    title: "Simplicity and Enough",
    body: `The concept of "enough" is one of the most countercultural ideas in the Christian tradition — and one of the most necessary. Consumer culture is built on the premise that enough does not exist; there is always a better phone, a larger house, a faster car. The spiritual discipline of simplicity insists that enough is a real category.

Proverbs 30:8-9 is the classic text: "Give me neither poverty nor riches, but give me only my daily bread. Otherwise, I may have too much and disown you and say, 'Who is the LORD?' Or I may become poor and steal, and so dishonor the name of my God." The writer understands the spiritual danger of both extremes. Too much breeds self-sufficiency and forgetfulness of God; too little breeds desperation and moral compromise.

Richard Foster (Freedom of Simplicity, 1981) identifies simplicity as a spiritual discipline with inward and outward dimensions. Inward: desiring God above all things, and holding material possessions with open hands. Outward: choosing to live with less than you could afford, consuming less, accumulating less — not as asceticism but as freedom.

The "upgrade cycle" is a particular modern trap: the phone that was satisfying six months ago now feels inadequate; the car purchased last year doesn't feel as good now that neighbors have newer ones. This cycle is driven by comparison (Ecclesiastes 4:4: "all toil and all achievement spring from one person's envy of another") and by the hedonic treadmill — the psychological phenomenon where gains in possession produce only temporary satisfaction before the baseline resets.

Practical steps: define your "enough" threshold before you earn it; give away something when you acquire something; resist upgrades until genuine need exists; and audit your spending against your stated values once a year.`,
  },
  {
    id: "debt",
    title: "Debt and Financial Freedom",
    body: `"The rich rule over the poor, and the borrower is slave to the lender." (Proverbs 22:7). Debt is not a sin in the biblical framework — borrowing and lending are regulated, not prohibited (Deuteronomy 15:1-11; Psalm 37:21). But debt represents a real transfer of freedom from the borrower to the lender, and the Bible consistently favors freedom over bondage.

Dave Ramsey's debt-elimination system — build a small emergency fund, pay off debts smallest to largest, then build full emergency fund, then invest — has helped millions of people escape consumer debt. Its strengths: it is simple, psychologically intelligent (the "snowball" method leverages motivation), and it treats debt as an emergency rather than a normal state.

Where Ramsey's framework is limited: his prosperity theology leans toward the idea that financial faithfulness inevitably produces financial reward, which is not consistently biblical. His framework also underweights structural causes of poverty, applies primarily to middle-class situations, and can moralize poverty in ways the prophets would find troubling.

A theologically richer view: debt is neither sin nor virtue — it is a tool that can be used wisely or foolishly. Consumer debt (for lifestyle purchases that depreciate) is almost always foolish. Debt for education, housing, or business investment can be wise stewardship if managed carefully. The question is always: is this debt serving kingdom purposes, or enslaving me to consumer preferences?

For believers: the goal of debt elimination is not wealth accumulation but freedom — freedom to give, to respond to need, to take risks for the kingdom without being enslaved to monthly obligations.`,
  },
  {
    id: "investing",
    title: "Kingdom Investing",
    body: `If all wealth is held in trust, and if eternal investment is more valuable than temporal investment, then how we deploy capital across decades matters theologically — not just financially.

Socially Responsible Investing (SRI) and its evolution into ESG (Environmental, Social, Governance) investing attempt to align portfolio holdings with values. For Christians, this raises real questions: Should you profit from industries that exploit workers, damage creation, or undermine human dignity? The biblical answer — consistent with the prophets' condemnation of systemic exploitation — suggests that where you invest is a moral question, not just a financial one.

Supporting Christian organizations financially — churches, missions agencies, mercy ministries, Christian educational institutions — is a form of kingdom investment with eternal dividends. The parable of the Talents suggests that deploying capital wisely for kingdom purposes is not optional.

Impact investing takes this further: intentionally deploying capital toward enterprises that serve the poor, create dignified work, or advance human flourishing — even if returns are below market rate. This is not charity; it is stewardship that accepts a lower financial return in exchange for a higher kingdom return.

Practical question for every Christian investor: Does my portfolio reflect my stated belief that human beings bear the image of God? Are there holdings I would be embarrassed to defend before the Judge who condemned those who "trample on the heads of the poor"? Rebalancing a portfolio toward kingdom values is not idealism — it is faithful stewardship.`,
  },
];

// ─── TAB 4 DATA ──────────────────────────────────────────────────────────────

type PitfallItem = {
  id: string;
  title: string;
  manifestation: string;
  response: string;
};

const pitfallItems: PitfallItem[] = [
  {
    id: "prosperity",
    title: "Prosperity Gospel",
    manifestation: `"Name it and claim it." "Your best life now." "God wants you rich." The prosperity gospel — sometimes called the Word of Faith movement — teaches that financial blessing is the normal birthright of faithful Christians, and that poverty, sickness, or financial struggle indicates a faith deficit. Its proponents include Kenneth Copeland, Creflo Dollar, Joel Osteen (in softer form), and Benny Hinn. It is the fastest-growing theological export from America to the Global South, where it does enormous damage by attaching spiritual shame to poverty.`,
    response: `N.T. Wright calls it "a form of Christianity so seriously distorted that it must be named as a different religion." John Piper: "I am not saying that health and money shouldn't be desired or sought. I am saying that to make them the goal of pursuing God is to corrupt the very nature of Christianity." The prosperity gospel is refuted by the New Testament on almost every page. Paul was shipwrecked, beaten, imprisoned, and hungry. Jesus had nowhere to lay his head. The "prosperity" passages are almost always ripped from Old Testament covenant contexts (Deuteronomy 28) that applied to national Israel under specific covenant conditions — not universal promises to individual Christians. The cross is the defining lens: God's response to human suffering was not to eliminate it but to enter it. Any gospel that avoids Gethsemane and Golgotha is not the Christian gospel.`,
  },
  {
    id: "affluenza",
    title: "Affluenza",
    manifestation: `"Affluenza" — the term coined by Oliver James and popularized by John de Graaf — describes the social contagion of materialism: the belief that acquiring things, upgrading lifestyle, and signaling status through consumption is the natural goal of adult life. For Christians in the Global North, this is not a temptation from outside — it is the water we swim in. The evangelical church has largely absorbed consumer culture rather than transforming it: church buildings are marketed like brands; services are designed like entertainment products; discipleship has been replaced by the language of "meeting your needs."`,
    response: `Dallas Willard called it "the gospel of sin management" — Christianity reduced to getting forgiven rather than being transformed. The deeper problem is that consumer culture is itself a discipleship system: it forms desires, shapes identity, and produces a kind of human being — the autonomous consumer — that is fundamentally at odds with the disciple of Jesus. James K.A. Smith (Desiring the Kingdom, 2009) argues that the liturgies of the mall, the stadium, and the smartphone are forming us more profoundly than Sunday morning does. The antidote is not less buying — it is more intentional counter-formation through the practices of the Christian community: fasting, simplicity, Sabbath, generosity, and fixed-hour prayer that interrupt the rhythm of consumption.`,
  },
  {
    id: "comparison",
    title: "Comparison and Status",
    manifestation: `"Keeping up with the Joneses" has migrated online. Instagram and TikTok present a curated stream of others' lives: vacations, home renovations, cars, restaurants, clothing, bodies. The research is unambiguous — social media use is positively correlated with financial dissatisfaction, lifestyle inflation, and overspending. The mechanism is comparison: your actual life measured against the highlight reel of hundreds of others simultaneously. What was satisfying before checking your feed is less satisfying after.`,
    response: `Ecclesiastes names this with unusual clarity: "I saw that all toil and all achievement spring from one person's envy of another. This too is meaningless, a chasing after the wind." (4:4). The "vanity" (hebel — vapor, breath, emptiness) frame applies precisely to status-seeking: it evaporates the moment it is achieved. There is always someone richer, someone with a better house, someone whose life appears more successful. The Christian alternative is not contentment achieved by ignoring reality but contentment rooted in a different measure: "I have learned, in whatsoever state I am, therewith to be content." (Philippians 4:11). Paul learned this — it was not natural. The spiritual practice of gratitude (naming specific gifts rather than measuring against others) is the most empirically validated antidote to comparison, and it is the heartbeat of biblical worship.`,
  },
  {
    id: "scarcity",
    title: "Scarcity Mindset",
    manifestation: `The scarcity mindset — a term developed by economists Sendhil Mullainathan and Eldar Shafir — describes the cognitive bandwidth-depleting effect of not having enough. It is a real psychological phenomenon. But for many people in the middle and upper-middle classes, scarcity mindset persists long after actual scarcity has ended. It manifests as: inability to give even when income is comfortable; anxiety about retirement even with substantial savings; hoarding behavior; extreme risk-aversion; and inability to enjoy present resources because of imagined future shortfalls.`,
    response: `Jesus addresses this directly in the parable of the Rich Fool (Luke 12:16-21): a man whose fields produce so abundantly that he tears down his barns and builds bigger ones, saying to himself, "You have plenty of grain laid up for many years. Take life easy; eat, drink and be merry." God calls him a fool: "This very night your life will be demanded from you. Then who will get what you have prepared for yourself?" The man was not poor; he was paralyzed by scarcity thinking even in abundance. The response to scarcity mindset is not financial planning (though that helps) — it is theological reorientation. "God will meet all your needs according to the riches of his glory in Christ Jesus." (Philippians 4:19). The Father who feeds the birds and clothes the lilies is the same Father who calls you to give, to risk, to trust. Manna does not keep overnight. Trust does not require a surplus.`,
  },
  {
    id: "righteousness",
    title: "Wealth as Righteousness",
    manifestation: `The conflation of financial success with God's favor runs so deep in American culture that it rarely needs to be stated explicitly. It operates as a background assumption: successful people are blessed; blessed people must have done something right; therefore, successful people are more righteous. This assumption is the mirror image of prosperity theology — instead of "give and God will make you rich," it is "you are rich, therefore God has approved of you." It shows up in Christian circles as the implicit high status of wealthy donors, the deference shown to "successful" businesspeople in church leadership, and the subtle shame attached to financial struggle.`,
    response: `James is unambiguous: "Has not God chosen those who are poor in the eyes of the world to be rich in faith and to inherit the kingdom he promised those who love him? But you have dishonored the poor. Is it not the rich who are exploiting you? Are they not the ones who are dragging you into court?" (James 2:5-6). The American Dream heresy takes a real cultural story — diligence and opportunity can produce prosperity — and makes it a theological claim: prosperity is evidence of virtue and divine favor. This collapses under any serious engagement with Job, Lamentations, or the cross. Jesus — the most righteous person who ever lived — died destitute, executed as a criminal, with nothing. Righteousness and wealth are neither correlated nor opposed. The question is not "how much do you have?" but "what are you doing with it, and in whom is your trust?"`,
  },
  {
    id: "underfunding",
    title: "Underfunding Kingdom Work",
    manifestation: `Many churches spend 90%+ of their budget on staff, facilities, and internal programming — and give single-digit percentages to missions, mercy ministry, and the poor. Individual Christians mirror this pattern: generous toward their own comfort and consumption, stingy toward kingdom causes that don't directly benefit them. The pattern produces churches that are effectively Christian country clubs — well-resourced spaces for believers to be served, with minimal investment in the mission Jesus gave: "Go and make disciples of all nations" and "I was hungry and you gave me food."`,
    response: `The Book of Acts describes a community where "there were no needy persons among them" because those with resources sold them and gave to those in need (Acts 4:34). The early church was characterized by extraordinary generosity toward the poor, toward widows and orphans, and toward the missionary expansion of the gospel. The 2nd-century apologist Tertullian noted that pagans observed the Christians and said: "See how they love one another." This love was expressed materially. A church that neglects missions, mercy ministry, or the poor because "we need to fund the building" has inverted the logic of the kingdom. The building exists to support the mission; when the building becomes the mission, something has gone structurally wrong. The standard Paul holds up in 2 Corinthians 8-9 — where Macedonian churches gave "out of extreme poverty" and "beyond their ability" — is not an emergency appeal. It is a description of normal Christian economic life in a community oriented toward the kingdom.`,
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function TheologyOfMoneyPage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedJesusTopic, setSelectedJesusTopic] = useState<string>(jesusTopics[0].id);

  const toggleExpanded = (id: string) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const selectedTopic = jesusTopics.find(t => t.id === selectedJesusTopic) ?? jesusTopics[0];

  const tabs: { id: Tab; label: string }[] = [
    { id: "theology", label: "Biblical Theology of Money" },
    { id: "jesus", label: "Jesus and Money" },
    { id: "practices", label: "Practical Theology" },
    { id: "pitfalls", label: "Money Traps" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,79,187,0.15)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Theology</span>
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 900, marginBottom: 14, lineHeight: 1.1 }}>
            A Theology of{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Money
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto 20px" }}>
            What the Bible actually says about wealth, generosity, debt, and the spiritual danger of loving money — from Genesis to Revelation.
          </p>
          <div style={{ background: "rgba(58,125,86,0.06)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 12, padding: "14px 20px", maxWidth: 520, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#4a9e6e", fontStyle: "italic", margin: 0 }}>
              "For where your treasure is, there your heart will be also."
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>— Matthew 6:21</p>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, borderBottom: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 18px",
                borderRadius: "10px 10px 0 0",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 13,
                background: tab === t.id ? CARD : "transparent",
                color: tab === t.id ? TEXT : MUTED,
                borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: Biblical Theology ── */}
        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              Scripture's teaching on money spans every genre and era of the biblical narrative. From the Jubilee laws of Leviticus to the commerce-critique of Revelation, the Bible is not silent on economics — it is relentlessly engaged with it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {theologyItems.map((item, idx) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${expanded[item.id] ? PURPLE + "50" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "18px 22px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: PURPLE, minWidth: 22 }}>{String(idx + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ width: "100%", height: 1, background: BORDER, marginBottom: 18 }} />
                      {item.body.split("\n\n").map((para, i) => (
                        <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.85, marginBottom: 14 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: Jesus and Money ── */}
        {tab === "jesus" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ width: 240, flexShrink: 0 }}>
              <p style={{ color: MUTED, fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Topics</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {jesusTopics.map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedJesusTopic(topic.id)}
                    style={{
                      textAlign: "left",
                      padding: "12px 14px",
                      borderRadius: 10,
                      border: `1px solid ${selectedJesusTopic === topic.id ? GREEN + "50" : BORDER}`,
                      background: selectedJesusTopic === topic.id ? "rgba(58,125,86,0.07)" : "transparent",
                      cursor: "pointer",
                      color: selectedJesusTopic === topic.id ? TEXT : MUTED,
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{topic.title}</div>
                    <div style={{ fontSize: 11, color: selectedJesusTopic === topic.id ? GREEN : MUTED, fontWeight: 600 }}>{topic.reference}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right sticky detail panel */}
            <div style={{ flex: 1, position: "sticky", top: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 28px 24px", maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 12px", borderRadius: 20, background: "rgba(58,125,86,0.1)", color: GREEN }}>{selectedTopic.reference}</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 900, margin: "10px 0 6px", color: TEXT }}>{selectedTopic.title}</h2>
                <p style={{ fontSize: 14, color: MUTED, marginBottom: 20, fontStyle: "italic", lineHeight: 1.6 }}>{selectedTopic.summary}</p>
                <div style={{ width: "100%", height: 1, background: BORDER, marginBottom: 20 }} />
                {selectedTopic.detail.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.85, marginBottom: 14 }}>{para}</p>
                ))}
                <div style={{ marginTop: 20, background: "rgba(58,125,86,0.05)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 10, padding: "14px 16px" }}>
                  <p style={{ fontSize: 13, color: GREEN, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>{selectedTopic.keyVerse}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: Practical Theology ── */}
        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              Theology that does not produce practice is incomplete. These six disciplines flow from Scripture's vision for financial faithfulness — not as laws to keep but as postures to cultivate.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {practiceItems.map((item, idx) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${expanded[item.id] ? GREEN + "40" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "18px 22px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: GREEN, minWidth: 22 }}>{String(idx + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 22px 22px" }}>
                      <div style={{ width: "100%", height: 1, background: BORDER, marginBottom: 18 }} />
                      {item.body.split("\n\n").map((para, i) => (
                        <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.85, marginBottom: 14 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: Money Traps ── */}
        {tab === "pitfalls" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 28, fontSize: 15, lineHeight: 1.7 }}>
              The enemy of faithful stewardship is not usually dramatic temptation — it is slow drift into culturally normalized distortions of the kingdom vision. These six traps are the most common for Christians in the Western world.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {pitfallItems.map((item, idx) => (
                <div key={item.id} style={{ background: CARD, border: `1px solid ${expanded[item.id] ? "#EF444440" : BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "20px 22px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#EF4444", background: "rgba(239,68,68,0.1)", padding: "3px 10px", borderRadius: 20 }}>
                        Trap {idx + 1}
                      </span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: TEXT }}>{item.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, flexShrink: 0 }}>{expanded[item.id] ? "−" : "+"}</span>
                  </button>
                  {expanded[item.id] && (
                    <div style={{ padding: "0 22px 24px" }}>
                      <div style={{ width: "100%", height: 1, background: BORDER, marginBottom: 20 }} />
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                          <div style={{ width: 3, height: 16, borderRadius: 2, background: "#EF4444" }} />
                          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "#EF4444" }}>Real-World Manifestation</span>
                        </div>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.85, margin: 0 }}>{item.manifestation}</p>
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                          <div style={{ width: 3, height: 16, borderRadius: 2, background: GREEN }} />
                          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: GREEN }}>Theological Response</span>
                        </div>
                        <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.85, margin: 0 }}>{item.response}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div style={{ marginTop: 48, background: `linear-gradient(135deg, rgba(107,79,187,0.1), rgba(58,125,86,0.06))`, border: `1px solid rgba(107,79,187,0.2)`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
          <h3 style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>Take the Next Step</h3>
          <p style={{ fontSize: 14, color: MUTED, marginBottom: 20, maxWidth: 440, margin: "0 auto 20px" }}>
            A theology of money without practice is just information. Consider what one concrete change you can make this month — in giving, in simplicity, or in generosity.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/stewardship" style={{ padding: "10px 24px", borderRadius: 10, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 13, textDecoration: "none" }}>
              Stewardship Resources
            </a>
            <a href="/discussions" style={{ padding: "10px 24px", borderRadius: 10, border: `1px solid ${BORDER}`, color: MUTED, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Discuss with Others
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
