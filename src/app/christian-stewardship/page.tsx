"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const AMBER = "#F59E0B";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_stewardship_entries";

interface STWEntry {
  id: string;
  date: string;
  resource: string;
  currentUse: string;
  betterUse: string;
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
    badge: "Matthew 25:14-30",
    title: "The Parable of the Talents — Accountability Without Paralysis",
    paragraphs: [
      "Jesus&rsquo; parable of the talents is the most demanding text on stewardship in the Gospels. A man going on a journey distributes his resources to three servants according to their ability — five talents to one, two to another, one to a third. Two invest and double what they received; one buries his in the ground, returning it intact. The master&rsquo;s response is asymmetric and striking: the two who risked and multiplied enter into the joy of their master; the one who played safe is called wicked and lazy, stripped of what he had, and cast out.",
      "The parable will not let stewardship be mere conservation. The buried talent is not praised for its safety; it is condemned for its paralysis. God is not looking for those who protect resources from loss but for those who hazard them in his service. The word talent (talanton) was a unit of weight and money, not an ability — but the English word talent entered the language precisely through this parable, because the church understood that everything we carry — capacity, money, time, influence — is a trust, received from Another, to be invested and returned with interest.",
      "Equally important is what the parable does not say. The servant given five and the servant given two receive identical welcomes — &ldquo;Well done, good and faithful servant.&rdquo; Faithfulness is not measured by the size of the return but by the proportion of the trust deployed. The householder with modest means who gives and serves generously within her capacity stands on the same ground as the wealthy philanthropist. Stewardship is always personal: it is you, with what you were given, giving it back.",
    ],
    callout: {
      label: "The principle",
      text: "Faithful stewardship is not the absence of risk but the willingness to hazard what God entrusted for God&rsquo;s purposes — and to answer for it.",
    },
  },
  {
    badge: "Psalm 24:1",
    title: "The Earth Is the Lord&rsquo;s — Ownership vs. Stewardship",
    paragraphs: [
      "&ldquo;The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell in it.&rdquo; Psalm 24 opens with the most radical statement in all of economics: God owns everything. This is not a pious sentiment appended to a theology of ownership; it is the subversion of every claim to private ownership we have ever made. Your house, your savings, your business, your body, your talent — these are on loan. You are a steward, not an owner, and the distinction changes everything about how you hold them.",
      "The Hebrew word behind LORD here is YHWH — the covenant name, the self-existing One. The psalmist&rsquo;s claim is not merely that God made everything (though he did) but that he never transferred the title. Creation is not a gift God gave away; it is a trust he handed to creatures. Genesis 1:28 uses the language of dominion — subdue, fill, have dominion — but the mandate is stewardship in the image of the Owner, not exploitation in the name of the tenant.",
      "This shifts the question every Christian must ask about money from &ldquo;How much of mine will I give to God?&rdquo; to &ldquo;How does the Owner want his resources deployed through me?&rdquo; The second question is more honest and more demanding. It means that every financial decision is a stewardship decision, every expenditure is an act of worship or of something else, and the budget is a theological document.",
    ],
    callout: {
      label: "The foundation",
      text: "Psalm 24:1 — &ldquo;The earth is the LORD&rsquo;s and the fullness thereof.&rdquo; You own nothing; you manage much.",
    },
  },
  {
    badge: "2 Corinthians 9:7",
    title: "The Cheerful Giver — Grace and the Heart Behind the Gift",
    paragraphs: [
      "&ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; Paul&rsquo;s instruction to the Corinthians about the collection for the Jerusalem saints contains the most quoted line in the theology of giving — and it is frequently misread as a permission slip for small gifts given happily. The context is Paul urging extraordinary generosity and arguing that God will supply abundantly to those who give abundantly. The cheerfulness is not a low bar; it is the character of an open hand.",
      "The Greek behind &ldquo;cheerful&rdquo; is hilaros — the root of our word hilarious. Paul is not asking for a polite smile over a modest check. He is describing a kind of giving so free of self-protection that it produces genuine joy — the joy of the farmer who throws seed into the ground knowing that what is buried multiplies. &ldquo;He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully&rdquo; (2 Cor 9:6). The cheerful giver has been freed from the anxiety of scarcity into the confidence of divine supply.",
      "Paul&rsquo;s phrase &ldquo;as he has decided in his heart&rdquo; is not an invitation to give as little as the heart can justify. It is an invitation to prayerfully determine a giving level that requires faith — and then hold to it joyfully. Giving that God loves is proportional, prayerful, purposeful, and produces praise: &ldquo;the rendering of this ministry not only supplies the needs of the saints but also overflows in many thanksgivings to God&rdquo; (2 Cor 9:12).",
    ],
  },
  {
    badge: "Tithing Theology",
    title: "The Tithe — Floor, Not Ceiling",
    paragraphs: [
      "The tithe — ten percent of one&rsquo;s income or produce given to God&rsquo;s purposes — appears first in Abraham&rsquo;s gift to Melchizedek (Gen 14:20), is codified in Mosaic law, and is affirmed by Jesus in passing (Matt 23:23). The question of whether tithing is a New Testament obligation has occupied theologians for centuries. What is not in serious dispute is that the New Testament raises, rather than lowers, the bar: Jesus commends the widow who gives everything (Mark 12:43-44), Paul cites the Macedonians who gave &ldquo;beyond their means&rdquo; (2 Cor 8:3), and the early church sold property to meet one another&rsquo;s needs (Acts 4:32-35).",
      "Randy Alcorn, whose theology of giving has influenced a generation, makes the case that the tithe functions in the New Covenant as a floor: the minimum of structural generosity below which a serious Christian disciple should not fall, not the maximum to which she should aspire. Grace giving is not less than law; it is more. A legalist asks: &ldquo;How little can I give?&rdquo; A grace-giver asks: &ldquo;How much can I give, given that everything is already God&rsquo;s and my security is not in my savings?&rdquo;",
      "Malachi 3:10 is the one place in Scripture where God explicitly invites his people to test him: &ldquo;Bring the full tithe into the storehouse... and thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you.&rdquo; The storehouse is the local church in most interpretations — the community where spiritual feeding happens and where the poor are served. Beginning with the tithe and moving generosity outward from there is the practical starting point of most serious Christian giving guides.",
    ],
  },
  {
    badge: "Genesis 1:28",
    title: "Stewardship of Creation — The Earth-Keeping Mandate",
    paragraphs: [
      "The creation mandate in Genesis 1:28 — &ldquo;Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens&rdquo; — is one of the most debated passages in the theology of environmental stewardship. Two misreadings have done damage. The first treats dominion as license for exploitation, ignoring that the one who mandated dominion owns the creation and will hold stewards to account. The second so spiritualizes the mandate that it loses its earthy, physical content: God really does commission human beings to cultivate, tend, and develop the creation.",
      "Francis Schaeffer&rsquo;s Pollution and the Death of Man argued in 1970 — early for the evangelical world — that the Christian doctrine of creation provides the deepest possible foundation for environmental care. We care for the earth because it belongs to God, because Christ died to redeem the creation not merely individual souls (Romans 8:19-23), and because the New Jerusalem descends to a renewed earth rather than replacing it with an escape hatch. Stewardship of creation is not an optional progressive add-on to the faith; it is a consequence of who owns the world.",
      "Genesis 2:15 specifies the mandate with two verbs: &ldquo;to work it and keep it.&rdquo; The Hebrew &lsquo;abad (work, serve) and shamar (keep, guard, preserve) together describe a relationship of labor and care, not exploitation. The farmer who works the soil and tends it for future generations is acting in the image of the first gardener. Every Christian&rsquo;s use of natural resources, purchasing habits, and relationship to the land is a stewardship question with a theological answer.",
    ],
    callout: {
      label: "The vocation",
      text: "Genesis 2:15 — &ldquo;to work it and keep it.&rdquo; Work and guard: both verbs belong to the steward of creation.",
    },
  },
  {
    badge: "Ephesians 5:16",
    title: "Stewardship of Time — Redeeming the Hours",
    paragraphs: [
      "Paul&rsquo;s command to &ldquo;make the best use of the time, because the days are evil&rdquo; (Eph 5:16) uses the Greek word exagorazo — to buy up, to redeem out of the marketplace. Time is treated as a commodity that can be redeemed or squandered, and the moral urgency of the age makes squandering it a form of faithlessness. We are, in the theological framework of the New Testament, people living between resurrection and return — the days are both numbered and loaded with redemptive possibility.",
      "The puritan tradition developed the doctrine of &ldquo;redeeming the time&rdquo; into a full theology of daily life. Jonathan Edwards resolved at nineteen to &ldquo;never to lose one moment of time, but improve it the most profitable way I possibly can.&rdquo; This is not Protestant workaholism but recognition that time, unlike money, cannot be stored and cannot be recovered. The hour given to mindless distraction is not a neutral loss; it is a stewardship failure of a non-renewable resource.",
      "This does not mean every hour must be productive in the economic sense. Rest, play, friendship, and worship are not violations of Ephesians 5:16 — they are among its fulfillments. Sabbath is itself a stewardship discipline: the willingness to return one day in seven to God demonstrates that we trust the Owner more than the output. The steward of time prays at the beginning of the day, &ldquo;Whose hours are these, and what does the Owner want done with them today?&rdquo;",
    ],
  },
  {
    badge: "Romans 12:6-8",
    title: "Stewardship of Talents — Gifts Given for Others",
    paragraphs: [
      "Romans 12 and 1 Corinthians 12 both treat spiritual gifts as distributed stewardships — not private possessions to be used for personal advancement but capacities given by the Spirit for the building up of the body. &ldquo;Having gifts that differ according to the grace given to us, let us use them&rdquo; (Romans 12:6). The imperative is pointed: not &ldquo;if you feel moved&rdquo; or &ldquo;when you find it convenient,&rdquo; but use them — deploy what you were given.",
      "Peter synthesizes the principle: &ldquo;As each has received a gift, use it to serve one another, as good stewards of God&rsquo;s varied grace&rdquo; (1 Peter 4:10). Note the phrase — varied grace. Every capacity you carry is a form of grace distributed through you for others. The teacher who does not teach, the encourager who withholds encouragement, the administrator who declines to organize — these are stewardship failures as real as the buried talent, even if they feel like humility.",
      "The talent audit — honest assessment of what you can do, followed by intentional deployment toward need — is one of the most neglected disciplines in the contemporary church. Most Christians have never mapped their abilities against the gaps in their community. Tim Keller&rsquo;s work on faith and vocation presses this: your particular skills were placed in your particular moment, in your particular city, for purposes larger than your own flourishing. The question is not whether you have something to give but whether you are giving it.",
    ],
  },
  {
    badge: "Stewardship of Relationships",
    title: "People as a Trust — The Stewardship of Influence",
    paragraphs: [
      "Christian stewardship rarely extends its inventory to relationships, but Scripture does. Proverbs 17:17 — &ldquo;a friend loves at all times, and a brother is born for a time of adversity&rdquo; — implies that friendship is a covenantal obligation, not a market transaction to exit when inconvenient. The people God has placed in our lives — family, friends, colleagues, neighbors — are part of the trust; how we deploy attention, loyalty, and care toward them is a stewardship question.",
      "Eugene Peterson&rsquo;s long pastorate in Baltimore, which shaped A Long Obedience in the Same Direction and The Message, was built on the conviction that pastoral attention to specific people in specific places is itself a form of faithful stewardship. He resisted every platform and celebrity opportunity because he believed the people in front of him were the resources God had given him, and his job was to tend them rather than trade them for a larger audience.",
      "The stewardship of relationships also includes the gift of listening. In an attention economy where everyone competes for bandwidth, the person who gives unhurried, full attention to another person is deploying a scarce and costly resource. Time spent with the lonely, the grieving, the overlooked — offered as a gift from someone who could spend that hour on productivity — is one of the most Christlike forms of stewardship in a distracted world.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Stewardship Inventory",
    summary:
      "A quarterly audit of every major resource God has given you — money, time, talents, relationships, physical health, influence — and an honest question: am I deploying or burying?",
    steps: [
      "Set aside two uninterrupted hours. List every significant resource you steward: income, savings, discretionary time, abilities, professional skills, friendships, platform, physical capacity. Write them down without editorializing.",
      "For each resource, ask three questions: Is this currently deployed for God&rsquo;s purposes? Is it being buried (hoarded, avoided, neglected)? What one specific change would make this stewardship more faithful?",
      "Bring the list to prayer. Ask the Owner what he wants done with his resources. Expect specific nudges — a conversation to have, a gift to make, a skill to offer, a relationship to re-invest.",
      "Record one concrete action per category in the Journal tab. Review at the next quarter. The purpose is not guilt but accountability to the one who gave everything and asks for faithful management.",
    ],
    anchor: "Luke 16:10 — One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.",
  },
  {
    number: "02",
    title: "Percentage Giving With a Rising Line",
    summary:
      "Establish a giving percentage, begin at the tithe if you are not there, and commit to increasing it by one percent per year until generosity becomes the defining feature of your financial life.",
    steps: [
      "Calculate your current giving as a percentage of gross income. If it is below ten percent, set a path to the tithe within twelve months, increasing by whatever increment your budget allows.",
      "Once at the tithe, add one percent per year. This is Randy Alcorn&rsquo;s practical counsel: most people never miss the one percent, but over a decade it produces extraordinary generosity.",
      "Direct giving intentionally: local church (primary storehouse), global mission, mercy ministry to the poor, organizations that address systemic injustice. Diversified generosity reflects the scope of the kingdom.",
      "Automate what you can. Giving that is automatic is less likely to be crowded out by the unexpected expense or the tempting purchase. Set it and protect it as you would any other irreducible budget line.",
    ],
    anchor: "2 Corinthians 9:6 — Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully.",
  },
  {
    number: "03",
    title: "Sabbath as Stewardship",
    summary:
      "Keeping the Sabbath is the oldest and most countercultural stewardship discipline — returning one day in seven to the Owner as an act of trust that the other six will be enough.",
    steps: [
      "Choose a day — the same day each week — and protect it structurally: no paid work, no productivity projects, no email or digital task management. The specificity is what makes it a discipline.",
      "Fill the day with what restores: corporate worship, unhurried meals, walks, reading for pleasure, long conversations, sleep. Sabbath is not empty time but time filled with non-instrumental goods.",
      "When the anxiety arises — and it will — treat it as information: you are trusting your output more than your God. The Sabbath tests whether Psalm 24:1 is functional theology or ornamental.",
      "Extend the Sabbath logic to the sabbatical year for those who can: sabbatical rest for land (the ancient agricultural practice), for relationships strained by pace, and for the self depleted by unchecked productivity.",
    ],
    anchor: "Exodus 20:10 — The seventh day is a Sabbath to the LORD your God. On it you shall not do any work.",
  },
  {
    number: "04",
    title: "Talent Deployment Map",
    summary:
      "Name your gifts, survey the needs around you, and find the intersection — then commit to showing up there regularly rather than waiting for the perfect invitation.",
    steps: [
      "Write out your top five abilities — not aspirational skills but actual, proven capacities that others have confirmed. Include both professional skills and personal gifts: teaching, administration, mercy, hospitality, craft, music, writing, encouragement.",
      "Survey your church&rsquo;s stated needs, your neighborhood&rsquo;s unmet needs, and one global need you feel drawn to. List the gaps.",
      "Find the overlaps between your gifts and the listed needs. Choose one intersection and commit to it for six months — not as a trial but as a stewardship deployment. Tell someone so the commitment has accountability.",
      "Review at six months. Has the gift been received? Is the need being met? Is there a deeper or wider deployment possible? The goal is not to find your calling once but to remain in the habit of offering.",
    ],
    anchor: "1 Peter 4:10 — As each has received a gift, use it to serve one another, as good stewards of God&rsquo;s varied grace.",
  },
  {
    number: "05",
    title: "Consumption Audit",
    summary:
      "An honest look at what you consume — goods, food, media, entertainment, attention — through the lens of stewardship and creation care.",
    steps: [
      "Track discretionary spending for one month without altering it. At the end, review the categories: what am I buying, and what does my spending say about what I actually value?",
      "Apply the creation stewardship lens: Is this purchase sustainable? Does my consumption of this contribute to the degradation of the creation God owns? What one consumption pattern, changed, would reflect better stewardship?",
      "Consider the biblical principle of enough: Proverbs 30:8 prays for &ldquo;neither poverty nor riches&rdquo; — enough to be neither desperate nor proud. Is my consumption pattern oriented toward enough, or toward more?",
      "Fast from one category of consumption for thirty days — not as punishment but as practice in freedom. The thing you cannot comfortably give up for a month owns you more than you thought.",
    ],
    anchor: "Proverbs 30:8-9 — Give me neither poverty nor riches; feed me with the food that is needful for me, lest I be full and deny you and say, &ldquo;Who is the LORD?&rdquo;",
  },
  {
    number: "06",
    title: "Generosity Toward the Invisible",
    summary:
      "Intentional stewardship directed toward those who cannot advance your interests — the poor, the stranger, the unborn, the forgotten — as the clearest test of who owns your resources.",
    steps: [
      "Identify one group of people invisible in your daily life — the refugee, the elderly in nursing homes, the chronically ill, children in foster care — and choose one concrete way to redirect time, money, or skill toward them this month.",
      "Give anonymously when possible. The discipline of giving where no social return is possible — no networking, no reputation boost, no reciprocal favor — is the cleanest form of stewardship and the hardest for the ego.",
      "Advocate with your voice and vote as an extension of stewardship. How public resources are allocated for the vulnerable is a stewardship issue for citizens in a democracy. Proverbs 31:8-9 commands speaking up for those who cannot speak for themselves.",
      "Pair financial giving to the poor with relational presence among them. Money alone, however generously given, can become a substitute for the harder stewardship of actual proximity. Show up as well as give.",
    ],
    anchor: "Proverbs 19:17 — Whoever is generous to the poor lends to the LORD, and he will repay him for his deed.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "John Wesley",
    role: "Gain All You Can, Save All You Can, Give All You Can",
    quote:
      "When I have money, I get rid of it quickly, lest it find a way into my heart. Earn all you can, save all you can, give all you can.",
    bio: "John Wesley&rsquo;s three-part formula for Christian money management, preached in his 1760 sermon &ldquo;The Use of Money,&rdquo; remains one of the most practical and theologically coherent accounts of stewardship in Protestant history. He understood that wealth, unchecked, colonizes the affections — so his rule was to give away everything above a modest living standard, which he held constant even as his income grew dramatically through book royalties. He died with almost nothing except the books of his library and his preaching ministry, having given away tens of thousands of pounds across his lifetime. Wesley did not distrust money; he distrusted what money does to the soul of the person who keeps it.",
  },
  {
    name: "Randy Alcorn",
    role: "The Treasure Principle — Eternal Investments and the Freed Heart",
    quote:
      "You can&rsquo;t take it with you — but you can send it on ahead. Every time you make a donation, you&rsquo;re converting earthly currency into eternal currency. You&rsquo;re investing in the things of God.",
    bio: "Randy Alcorn&rsquo;s The Treasure Principle (2001) distilled a decade of writing on money, giving, and eternity into a short, sharp argument: because you cannot take wealth with you at death, and because Jesus locates your heart where your treasure is (Matthew 6:21), the wise steward converts as much earthly currency as possible into eternal currency while there is still time. Alcorn himself lives on a modest salary and directs all his royalties to charity — a personal embodiment of the principle. His work on tithing as a floor and on percentage giving with a rising line has shaped how evangelical churches teach generosity. He is particularly useful on the idol of financial security: the believer who hoards against every contingency has functionally denied that God is their provider.",
  },
  {
    name: "R.C. Sproul",
    role: "Knowing God — Lordship and the Ownership Question",
    quote:
      "The chief question of stewardship is not &lsquo;How much of my money will I give to God?&rsquo; It is &lsquo;How does God want me to manage his money?&rsquo; The first question assumes ownership I do not have.",
    bio: "R.C. Sproul&rsquo;s Reformed theology of God&rsquo;s absolute sovereignty extended naturally into a theology of stewardship grounded in Psalm 24:1. His teaching on the Lordship of Christ — that Jesus is Lord of all of life, not merely the &ldquo;spiritual&rdquo; sector — made stewardship of money, time, and vocation a necessary consequence of sound doctrine rather than a guilt-driven add-on. For Sproul, the person who divides their finances into &ldquo;mine&rdquo; and &ldquo;God&rsquo;s ten percent&rdquo; has made a theological error before they have made a financial one. The whole budget is God&rsquo;s; the question is whether we are managing it as his stewards or spending it as its de facto owners.",
  },
  {
    name: "Tim Keller",
    role: "Generous Justice — Stewardship and the Needs of the Poor",
    quote:
      "The Bible teaches that God&rsquo;s purpose was to restore not just individual souls but a broken world. If the gospel changes your heart, it will change your behavior — and that changed behavior includes what you do with money.",
    bio: "Tim Keller&rsquo;s Generous Justice (2010) and his ongoing teaching on money through Redeemer Presbyterian in New York placed the stewardship of wealth in the context of biblical justice. Drawing on Proverbs, the prophets, and the Sermon on the Mount, Keller argued that wealthy Christians in expensive cities are surrounded by the poor their theology should care for — and that the gap between what they could give and what they do give is, for many, a spiritual crisis dressed as a financial preference. His model was the early church: people at every income level giving at levels that narrowed the gap between rich and poor within the community of faith. Keller was also characteristically realistic: the idol of financial security is deeply rooted and does not yield to guilt; it yields to a better vision of where true security lies.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience — Stewardship of the Ordinary and the Present",
    quote:
      "Busyness is the enemy of spirituality. It is essentially laziness. It is doing the urgent rather than the important. It is doing the things that press on us rather than what matters to God.",
    bio: "Eugene Peterson&rsquo;s pastoral theology was fundamentally a theology of stewardship — of time, attention, and the unrepeatable people placed in one&rsquo;s specific care. His decades of writing on the Psalms (A Long Obedience in the Same Direction) and his translation of The Message were both exercises in the slow stewardship of language: refusing the shortcuts, paying the full cost of the exact word. His resistance to the church growth movement and celebrity pastoring was a stewardship argument: the congregation in front of him was the resource God had given him, and trading it for a platform would be an act of infidelity. Peterson modeled a stewardship of presence — full attention to the person, the text, the moment — that technology and productivity culture make increasingly countercultural.",
  },
  {
    name: "Francis Schaeffer",
    role: "Pollution and the Death of Man — Creation Stewardship as Christian Witness",
    quote:
      "The Christian is the one whose imagination should fly beyond the stars, and yet who should be the first to kneel in the field to love the smallest flower.",
    bio: "Francis Schaeffer&rsquo;s Pollution and the Death of Man (1970) was prophetic: he argued that secular environmentalism lacks the philosophical foundation to sustain itself, because without a Creator who owns the earth and calls humans to account for its care, there is no binding reason to sacrifice present consumption for future ecology. Christianity alone, Schaeffer claimed, provides both the motive and the framework for genuine creation stewardship — not because nature is divine but because the Creator is, and he has made humans answerable for what they do to his world. L&rsquo;Abri, the community Schaeffer and his wife Edith built in Switzerland, was itself an exercise in this vision: a place where beauty, hospitality, intellectual life, and care for the land were practiced together as aspects of faithful stewardship before God.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Psalm 24:1",
    text: "The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell in it.",
    reflection:
      "The whole of stewardship theology depends on this verse. If God owns the earth and all who dwell in it, then nothing we hold is ours to dispose of at will — it is a trust. The practical implication is enormous: every financial decision, every hour, every acre of land, every gift we carry is managed on behalf of an Owner who will call us to account.",
  },
  {
    reference: "Matthew 25:21",
    text: "His master said to him, &lsquo;Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.&rsquo;",
    reflection:
      "The reward for faithful stewardship is not rest but greater stewardship — &ldquo;I will set you over much.&rdquo; The joy of the master is also the joy of the trusted servant whose fidelity has been honored. Notice that the evaluation turns on faithfulness, not on the size of the return: both the five-talent servant and the two-talent servant receive the same welcome.",
  },
  {
    reference: "2 Corinthians 9:6-7",
    text: "Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reflection:
      "The agricultural metaphor is deliberate: the farmer who fears to bury seed starves himself. Paul places giving in the logic of harvest — sowing bountifully produces a bountiful return. The cheerfulness is not merely an emotional tone but a theological confidence: the giver who is hilarious has been freed from the anxiety of scarcity into the joy of those who trust the Provider.",
  },
  {
    reference: "1 Peter 4:10",
    text: "As each has received a gift, use it to serve one another, as good stewards of God&rsquo;s varied grace.",
    reflection:
      "The phrase &ldquo;varied grace&rdquo; is extraordinary: every gift distributed by the Spirit is a form of grace deployed through a particular person. The steward of spiritual gifts is responsible not only for exercising them but for exercising them in service — toward others, not for self-display. The grace does not belong to the one who carries it; it passes through them to its intended recipients.",
  },
  {
    reference: "Luke 16:13",
    text: "No servant can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.",
    reflection:
      "Jesus does not say it is difficult to serve both God and money; he says it is impossible. Money is uniquely capable of functioning as a competing lord because it promises what only God can provide: security, identity, freedom, and control. The steward who understands this treats wealth with a different kind of vigilance — not contempt (money is not evil in itself) but suspicion of what it does to the soul that holds it without accountability.",
  },
  {
    reference: "Ephesians 5:15-16",
    text: "Look carefully then how you walk, not as unwise but as wise, making the best use of the time, because the days are evil.",
    reflection:
      "Paul treats time as a commodity that can be redeemed — bought up from the marketplace of distraction and deployed for eternal purposes. The urgency is not anxious but eschatological: we are people living between resurrection and return, and the hours are freighted with possibility that will not return. The steward of time looks at the day as the Owner&rsquo;s resource and asks what the Owner wants done with it.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "kB75lFcEp5Y", title: "The Parable of the Talents — Faithful Stewardship" },
  { videoId: "BT1JF0qpFoQ", title: "Psalm 24:1 — The Earth Is the Lord&rsquo;s" },
  { videoId: "V4O4zKSyL8Y", title: "Randy Alcorn: The Treasure Principle" },
  { videoId: "aVX8N8WFHGI", title: "Tithing and Generosity in the New Testament" },
  { videoId: "l9kgpNLXm7M", title: "Time Stewardship — Redeeming the Hours" },
  { videoId: "D2IIQA2iUHc", title: "Creation Stewardship and Christian Responsibility" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianStewardshipPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<STWEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [resource, setResource] = useState("");
  const [currentUse, setCurrentUse] = useState("");
  const [betterUse, setBetterUse] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as STWEntry[]);
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
    if (!resource.trim() || !currentUse.trim()) return;
    const entry: STWEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      resource: resource.trim(),
      currentUse: currentUse.trim(),
      betterUse: betterUse.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setResource("");
    setCurrentUse("");
    setBetterUse("");
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
              Christian Stewardship
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Faithful Stewards: Managing God&rsquo;s Resources for His Purposes
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Christian stewardship begins with a single conviction: God owns everything. We are
              managers, not owners, of the time, money, talents, relationships, and creation entrusted
              to us. This guide traces the theology of stewardship from the parable of the talents to
              the cheerful giver, covers the voices who have shaped the practice, and gives you tools
              to take your own stewardship inventory.
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
                &ldquo;The earth is the LORD&rsquo;s and the fullness thereof, the world and those
                who dwell in it.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 24:1</p>
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
                Stewardship is not primarily a financial discipline — it is a theological posture. These
                eight studies move through the biblical categories: ownership, the talents, generosity,
                tithing, creation, time, gifts, and relationships.
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
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  The whole life as offering
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The threads of stewardship theology converge here: because God owns everything, every
                  sphere of life is a stewardship domain. Money, time, and talent are not separate
                  problems to manage but one integrated question: am I deploying the Owner&rsquo;s
                  resources for the Owner&rsquo;s purposes? Explore how vocation connects to this in{" "}
                  <Link
                    href="/christian-vocation"
                    style={{ color: AMBER, textDecoration: "underline" }}
                  >
                    Christian Vocation
                  </Link>
                  , or see how generosity is practiced in{" "}
                  <Link
                    href="/christian-generosity"
                    style={{ color: AMBER, textDecoration: "underline" }}
                  >
                    Christian Generosity
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
                Stewardship grows by practice, not by conviction alone. These six disciplines give
                concrete shape to the theological conviction that God owns everything. Start with the
                inventory — it surfaces what every other practice works with.
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
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Stewardship as worship
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices are not merely financial disciplines — they are forms of worship.
                  Every faithful act of stewardship is an acknowledgment that God is Lord, that his
                  ownership is real, and that our trust is not in accumulated resources but in the
                  Provider himself. The journal below is the place to take your own inventory and
                  track what changes.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers and practitioners who have shaped the church&rsquo;s understanding of
                stewardship — from Wesley&rsquo;s famous formula to Schaeffer&rsquo;s prophetic
                creation care and Alcorn&rsquo;s treasury principle.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: AMBER,
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
                      background: "rgba(245, 158, 11, 0.06)",
                      borderLeft: `3px solid ${AMBER}`,
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
                Six passages that form the scriptural spine of Christian stewardship. Read them
                slowly, one per week, and let each reshape how you hold what you have been given.
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
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these passages
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Pray each text in three movements: adoration (&ldquo;Lord, you own everything — what
                  freedom that is for me&rdquo;), confession (&ldquo;I have held your resources as
                  my own and managed them for my comfort&rdquo;), and petition (&ldquo;make me a
                  faithful steward today of everything you have entrusted to me&rdquo;). A
                  stewardship that is only managed and never prayed stays at the level of budgeting.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The stewardship journal. Name a resource God has given you, describe how you are
                currently using it, and reflect on how it might be stewarded more faithfully. Entries
                are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New stewardship entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="stw-resource" style={labelStyle}>
                    Resource to examine
                  </label>
                  <input
                    id="stw-resource"
                    type="text"
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                    placeholder="e.g. time, money, a skill, a relationship, your home"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="stw-current" style={labelStyle}>
                    How are you currently using it?
                  </label>
                  <textarea
                    id="stw-current"
                    value={currentUse}
                    onChange={(e) => setCurrentUse(e.target.value)}
                    placeholder="Be honest — not how you wish you were using it, but how you actually are"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="stw-better" style={labelStyle}>
                    How could it be stewarded more faithfully?
                  </label>
                  <textarea
                    id="stw-better"
                    value={betterUse}
                    onChange={(e) => setBetterUse(e.target.value)}
                    placeholder="One specific change — not a complete overhaul, but one more faithful use"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!resource.trim() || !currentUse.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !resource.trim() || !currentUse.trim() ? BORDER : AMBER,
                    color: !resource.trim() || !currentUse.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !resource.trim() || !currentUse.trim() ? "not-allowed" : "pointer",
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
                      Pick one resource — money, time, a skill — and ask honestly: is it deployed
                      or buried? That question is where faithful stewardship begins.
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
                              {entry.resource}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.resource}`}
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

                        <div style={{ marginBottom: entry.betterUse ? 10 : 0 }}>
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
                            Current use
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.currentUse}
                          </p>
                        </div>

                        {entry.betterUse && (
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
                              More faithful use
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.betterUse}
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
                Teaching on the parable of the talents, giving theology, time stewardship, and
                creation care. Good companions to the Theology and Practices tabs.
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
              From inventory to offering
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The stewardship audit is not the end of the story; it is the beginning of an offering.
              When you name what you have and return it to the Owner with an open hand, the buried
              talent becomes a seed. Money given becomes a witness. Time offered becomes ministry.
              Gifts deployed become the body of Christ functioning as it was designed. The faithful
              steward does not grip resources but channels them — and finds, astonishingly, that
              the channel is never emptied by what flows through it.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link
                href="/christian-vocation"
                style={{ color: AMBER, textDecoration: "underline" }}
              >
                Christian Vocation
              </Link>{" "}
              on work as worship,{" "}
              <Link
                href="/christian-generosity"
                style={{ color: AMBER, textDecoration: "underline" }}
              >
                Christian Generosity
              </Link>{" "}
              for giving practices, or{" "}
              <Link
                href="/christian-simplicity"
                style={{ color: AMBER, textDecoration: "underline" }}
              >
                Christian Simplicity
              </Link>{" "}
              for life ordered around enough rather than more.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
