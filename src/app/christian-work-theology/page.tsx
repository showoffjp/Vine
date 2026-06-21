"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const BLUE = "#3B82F6";

const STORAGE_KEY = "vine_worktheology_entries";

interface WKTEntry {
  id: string;
  date: string;
  workChallenge: string;
  worshipMoment: string;
  excellenceNote: string;
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
    badge: "Colossians 3:23-24",
    title: "Whatever You Do — Work as Worship",
    paragraphs: [
      "&ldquo;Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving&rdquo; (Col 3:23-24). Paul writes this in the context of household instructions — addressed to slaves, the most degraded workers in the Roman world — which means the theology applies with full force to every category of work, no matter how low the social status of the worker or the esteem of the occupation. Whatever you do: not only the prestigious, not only the explicitly Christian, but whatever.",
      "The phrase &ldquo;as working for the Lord&rdquo; does not spiritualize work by adding a religious layer on top of ordinary tasks. It clarifies the true audience of all work. The carpenter&rsquo;s craftsmanship, the nurse&rsquo;s care, the teacher&rsquo;s preparation, the farmer&rsquo;s attention to the soil — all of it is performed before God, all of it is capable of bearing the quality of whole-hearted offering, all of it can be an act of worship. The sacred/secular line is not between religious jobs and non-religious ones but between work offered to God wholeheartedly and work done for lesser audiences.",
      "This reframes the Monday problem. If Sunday worship ends when we leave the building, we have misunderstood where worship happens. The person who brings Colossians 3:23 to Monday morning carries Sunday&rsquo;s altar into the office, the clinic, the classroom, the construction site. The whole week becomes a liturgy of work offered to Christ.",
    ],
  },
  {
    badge: "Genesis 2:15",
    title: "Abad and Shamar — Work Before the Fall Was Good",
    paragraphs: [
      "The creation narrative places work before sin. Before the serpent, before the forbidden fruit, before any curse — God puts the man in the garden &ldquo;to work it and keep it&rdquo; (Gen 2:15). The Hebrew verbs are abad (to work, to serve, to cultivate) and shamar (to keep, to guard, to preserve). These are not menial-task words; abad is also used for worship and priestly service, and shamar for responsible stewardship of something entrusted. God assigns humanity a vocation that is simultaneously productive, custodial, and worshipful.",
      "This pre-Fall work is a staggering theological claim: work is not the curse. Work is not what God inflicts on people who sinned. The curse of Genesis 3 is toil — the sweat, the futility, the thorns and thistles — not work itself. The goodness of creation (Gen 1) includes the goodness of human creativity, cultivation, and care applied to a world worth developing. Human beings are, in Tolkien&rsquo;s word, sub-creators: made in the image of a creating God, called to bring order, beauty, and fruitfulness out of the raw material of a good world.",
      "This means every job description is, at some level, an extension of the Genesis 2:15 commission. The software engineer who builds something that works, the nurse who preserves life, the teacher who cultivates understanding, the accountant who keeps order — all are practicing abad and shamar in the domains God has entrusted to them. Good work is a participation in God&rsquo;s ongoing care for the creation he made.",
    ],
    callout: {
      label: "The words",
      text: "Abad (עָבַד): to work, cultivate, serve — used for both labor and worship. Shamar (שָׁמַר): to keep, guard, preserve — stewardship of something entrusted.",
    },
  },
  {
    badge: "Genesis 3:17-19",
    title: "The Curse on Work — Toil and Futility",
    paragraphs: [
      "&ldquo;Cursed is the ground because of you; in pain you shall eat of it all the days of your life; thorns and thistles it shall bring forth for you... By the sweat of your face you shall eat bread, till you return to the ground&rdquo; (Gen 3:17-19). The Fall does not eliminate work; it complicates it. The ground that was a cooperative partner becomes resistant. The cultivation that was ordered now includes futility. The work that was wholehearted worship now carries the weight of toil, of effort that does not reliably produce, of labor that ends in death.",
      "The Preacher in Ecclesiastes is the theologian of this reality: &ldquo;I hated all my toil in which I toil under the sun&rdquo; (Eccl 2:18). The Hebrew word is amal — labor that is wearisome, burdensome, grieving. The Preacher is not being unspiritual; he is being honest about what the Fall did to work. Projects fail, legacies unravel, the reward of excellent work goes to someone who did not work for it, the work itself ends when you do. Acknowledging this frustration is not faithlessness; it is accurate diagnosis.",
      "The honest doctrine of the Fall allows Christians to name what everyone in the workplace already experiences — the futility, the political friction, the exhausting mismatch between effort and outcome — without being surprised by it or destroyed by it. Work is cursed and still good: still worth doing, still capable of excellence, still the place where the image of God is expressed. It is just harder than it was meant to be, and it will remain so until the renewal of all things.",
    ],
  },
  {
    badge: "New Creation",
    title: "The Redemption of Work Through Christ",
    paragraphs: [
      "If the Fall cursed work, the new creation redeems it. Paul&rsquo;s great redemption argument in Romans 8 includes the whole of creation: &ldquo;The creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God&rdquo; (v. 21). The &ldquo;thorns and thistles&rdquo; of Genesis 3 belong to the bondage of decay; the redemption Christ accomplished is wide enough to address them. Work done in Christ is not merely endured until heaven — it participates in the in-breaking of the kingdom that will eventually encompass and transform everything.",
      "Tim Keller&rsquo;s argument in Every Good Endeavor is that the new heavens and new earth are not a replacement for the original creation but a restoration and elevation of it — and that the cultural products of human work may, in some transformed form, persist. The gates of the New Jerusalem in Revelation 21 are hung with the cultural achievements of the nations. This does not mean our work earns its way into eternity; it means that work done in faithfulness to the Creator has a weight and a dignity that outlasts the futility of the present age.",
      "The resurrection of Christ is the first installment of new creation, and its body-shaped physicality means the redemption of matter matters. Jesus rose with the wounds still present, cooked breakfast on a beach, and ate. The embodied, physical, material nature of resurrected life speaks directly to embodied, physical, material work: it is not escape from the material world that God plans but its healing. Working excellently, working with care, working as unto the Lord — these are small acts of new-creation resistance against the curse, signs of the kingdom breaking in.",
    ],
  },
  {
    badge: "Dorothy Sayers",
    title: "The Work Itself Has Integrity",
    paragraphs: [
      "Dorothy Sayers, writing in the 1940s, saw clearly what the church had missed: &ldquo;The Church&rsquo;s approach to an intelligent carpenter is usually confined to exhorting him not to be drunk and disorderly in his leisure hours, and to come to church on Sundays. What the Church should be telling him is this: that the very first demand that his religion makes upon him is that he should make good tables.&rdquo; The work itself — its quality, its integrity, its craftsmanship — is the primary site of Christian witness in the workplace, not the Bible verse on the desk.",
      "Sayers&rsquo; essay &ldquo;Why Work?&rdquo; argues that the church has allowed a corrupted doctrine of vocation — work as drudgery to be tolerated and Sunday as the real life — to produce a generation of Christians who do mediocre work, give mediocre effort, and think this has nothing to do with their Christianity. She is unsparing: bad work is a form of dishonesty, a failure to give to the task what it deserves, a violation of the created goodness of the work itself.",
      "Her theological ground is the nature of creativity: human beings are made in the image of a creating God, and when they create — when the carpenter makes a table that is genuinely a good table — they image God. The work is not sanctified by adding a prayer over it; it is sanctified by doing it excellently, honestly, with full attention and full skill. The sacred in work is encountered in the excellence of the thing made, not in the piety performed around it.",
    ],
    callout: {
      label: "Sayers",
      text: "\"The only Christian work is good work well done.\" — Dorothy Sayers, Why Work? (1942)",
    },
  },
  {
    badge: "Theology",
    title: "Why the Sacred/Secular Divide Is a Lie",
    paragraphs: [
      "The sacred/secular divide — the idea that church work, ministry, and prayer are holy while accountancy, plumbing, and engineering are spiritually neutral at best — has no basis in the biblical text and considerable damage to its credit. It produces Christians who are privately devout and professionally disengaged, who bring their best energy to Sunday and their leftover energy to Monday, and who do not see any connection between the two. It also implies, wrongly, that only professional ministry is a genuine calling.",
      "Luther&rsquo;s doctrine of vocation was a direct assault on this divide. Every legitimate occupation — the milkmaid, the magistrate, the merchant — is a calling from God, a station in which the neighbor is served and God is glorified. Luther saw secular work not as a lower spiritual tier but as the primary arena in which love of neighbor is exercised: &ldquo;God himself will milk the cows through him whose vocation that is.&rdquo; The sacred is not above the secular; the sacred breaks into the secular wherever work is done faithfully and excellently for the good of the neighbor.",
      "Miroslav Volf in Work in the Spirit extends this with a pneumatological argument: the gifts of the Spirit are not restricted to spiritual gifts used in the church but include the full range of capacities given by the Spirit for work in the world. The Spirit who gifts the preacher also gifts the engineer, the artist, the administrator. All vocation is charismatic; all work is potentially Spirit-filled. The divide is not built into reality — it is a human invention that robs Christians of the dignity of their daily calling.",
    ],
  },
  {
    badge: "Nehemiah",
    title: "Nehemiah — A Model of Faithful Work",
    paragraphs: [
      "Nehemiah is one of the Bible&rsquo;s most detailed portraits of a leader doing hard work faithfully under pressure. He rebuilds Jerusalem&rsquo;s walls in 52 days against organized opposition, political manipulation, and personal threat. His example yields a theology of work in the details: he prays before he plans (1:4-11), surveys the situation honestly before he speaks (2:11-16), communicates the vision clearly enough to motivate volunteers to work on the section of wall nearest their own house (3), arms workers without stopping the building (4), faces corruption and exploitation without losing his composure or his focus (5), and refuses to be distracted by his enemies&rsquo; repeated attempts to pull him off the wall (6).",
      "&ldquo;I am doing a great work and I cannot come down&rdquo; (Neh 6:3) is the single most clarifying statement of vocational focus in Scripture. Nehemiah&rsquo;s enemies try four times to lure him to a meeting; four times he refuses on the grounds that the work requires his presence. He is not rude; he is undistracted. He has identified the work God has given him and he will not let lesser demands define his schedule. This is not workaholism — Nehemiah rests, delegates, and eventually governs rather than builds. It is clarity about calling.",
      "Nehemiah also keeps the whole project theologically grounded: &ldquo;The God of heaven will give us success&rdquo; (2:20). He works with his hands and trusts with his whole heart. Excellent work and genuine dependence on God are not in tension for Nehemiah — excellence is how the dependence gets expressed in action.",
    ],
  },
  {
    badge: "Genesis 2:3 / Exodus 20:8-11",
    title: "Sabbath — The Defining Boundary of Work",
    paragraphs: [
      "God works for six days and rests on the seventh, and the rhythm he establishes is not accidental. Sabbath is the boundary that defines work as finite, as creaturely, as not the final word. Without Sabbath, work expands to fill all available time and then some — it becomes identity, security, and the thing that proves we are enough. Sabbath is the weekly declaration that it is not. The work stops because the worker is not God; the world will keep turning without this particular person&rsquo;s next contribution.",
      "The fourth commandment grounds Sabbath in creation (Ex 20:11) and in redemption (Deut 5:15). In Exodus the argument is imitation: God rested, so you rest. In Deuteronomy the argument is memory: you were slaves in Egypt, where rest was not permitted, and the LORD brought you out. Sabbath observance is therefore both an act of creation-worship (I am a creature, not the Creator) and a declaration of gospel freedom (I am not a slave to production; I have been set free).",
      "For the Christian in a culture of perpetual productivity, Sabbath is countercultural resistance and spiritual necessity. The person who cannot stop working has allowed work to become lord — mammon&rsquo;s close cousin. Os Guinness writes that rest is a form of trust: &ldquo;To rest is to trust.&rdquo; Every Sabbath is a small rehearsal of the final rest — the Sabbath-rest of Hebrews 4 — in which all our striving ceases because the work of Christ is finished and sufficient.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Monday Morning Offering",
    summary:
      "A brief prayer at the beginning of each workday that dedicates the day&rsquo;s work to God before the first task is opened — consecrating the ordinary before the momentum takes over.",
    steps: [
      "Before checking email or opening the first task, spend two minutes in deliberate prayer: &ldquo;Lord, this work is yours. The people I will serve today are yours. My skill is a gift from you. Let my work today be an act of worship.&rdquo;",
      "Name the day&rsquo;s specific work in the prayer — the meeting, the project, the difficult conversation, the tedious task. Making the ordinary specific is how the consecration becomes real rather than generic.",
      "Hold Colossians 3:23 in mind through the day: &ldquo;as working for the Lord.&rdquo; When you find yourself performing for a boss, working to impress, or phoning it in because no one is watching — return to the true audience.",
      "Use the Journal tab to record moments when work became worship — when excellence felt like offering, when a difficult task was done faithfully for God&rsquo;s eyes rather than a supervisor&rsquo;s approval.",
    ],
    anchor:
      "Colossians 3:23 — Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
  },
  {
    number: "02",
    title: "The Excellence Standard",
    summary:
      "Dorothy Sayers&rsquo; challenge applied: bring the highest quality of skill and attention to the work itself, treating craftsmanship as the primary form of Christian witness in the workplace.",
    steps: [
      "Identify one area of your work where you have been giving adequate rather than excellent effort. Not because it will earn recognition — specifically because it will not. Anonymous excellence is the test of genuine vocation.",
      "Ask: what would it look like to do this particular task as unto the Lord? Not perfect — perfectionism is its own idol — but fully attentive, fully skilled, fully honest. Then do it that way.",
      "Refuse shortcuts that compromise integrity: the shoddy deliverable passed off as complete, the number rounded rather than corrected, the work that looks right but is not. Sayers is blunt: bad work is a lie.",
      "Let your excellence be visible through the work, not announced through speech. The Christian who talks about their faith and does mediocre work has preached a confusing sermon. The Christian who says little and works with obvious care has preached with their hands.",
    ],
    anchor:
      "Proverbs 22:29 — Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.",
  },
  {
    number: "03",
    title: "Nehemiah&rsquo;s Focus Practice",
    summary:
      "&ldquo;I am doing a great work and I cannot come down.&rdquo; A practice of identifying the one most important work God has given you and protecting it from the incessant lesser demands that fragment the working life.",
    steps: [
      "Name your primary calling within your current work — the one thing that, if done well, would most faithfully steward the gift and opportunity God has given you. This is your wall. Everything else is the surrounding noise.",
      "Identify the three most common sources of distraction from it — the meetings that produce nothing, the requests that belong to someone else, the urgency that is not important. Nehemiah named his opponents; name yours.",
      "Build a weekly structure that protects time for the primary work before it is consumed by the reactive. The first hour of the day, the one protected block per week — defend it as Nehemiah defended the wall: by staying on it.",
      "Practice Nehemiah&rsquo;s response to urgent interruption: &ldquo;I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?&rdquo; You do not need to be rude to be focused.",
    ],
    anchor:
      "Nehemiah 6:3 — I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?",
  },
  {
    number: "04",
    title: "Sabbath as a Work Practice",
    summary:
      "Keeping one full day per week genuinely free from work — not for productivity&rsquo;s sake but as a theological statement that work is not lord and the worker is not God.",
    steps: [
      "Choose a fixed 24-hour period and protect it: no work email, no professional reading, no side-project tinkering. The point is complete cessation, not reduction. Sabbath is binary: you stop or you don&rsquo;t.",
      "Notice what resistance arises when you stop — anxiety about falling behind, guilt about uncompleted tasks, restlessness that can&rsquo;t just be still. This resistance is diagnostic. It names how much of your identity and security is invested in work.",
      "Fill the Sabbath with what restores rather than what deploys: worship, embodied rest, unhurried relationship, attention to beauty, physical movement for its own sake. Sabbath is not passive — it is actively oriented toward God and delight.",
      "Each Monday, notice what you bring back to work from Sabbath. The rested worker is a better worker — more creative, more patient, less reactive — but the Sabbath is not instrumental to productivity. It is an end in itself: a taste of the rest that remains for the people of God.",
    ],
    anchor:
      "Exodus 20:8-10 — Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the LORD your God.",
  },
  {
    number: "05",
    title: "Loving Your Neighbor Through Your Work",
    summary:
      "Luther&rsquo;s vocation theology applied: seeing every work task as an act of neighbor-love — the invisible network of service through which God provides for human flourishing.",
    steps: [
      "For one week, trace the neighbor-love in your work. Every product built, service rendered, problem solved, or person taught is care for a specific neighbor. Name them: who is served by what I do today?",
      "Extend the circle: who is upstream and downstream from your work? The supplier you treat fairly, the junior colleague you develop, the customer you serve honestly — these are the neighbor-love of Colossians 3:23.",
      "When work feels meaningless, ask the neighbor question rather than the meaning question: not &ldquo;does this work feel significant?&rdquo; but &ldquo;who is genuinely served by my doing this faithfully?&rdquo; The answer is usually more concrete and more sustaining.",
      "Let neighbor-love define the quality floor. You would not give your neighbor a defective product, a deceptive answer, or a half-hearted effort if you could see their face. The coworker and the customer have faces. Work accordingly.",
    ],
    anchor:
      "Galatians 5:13 — Through love serve one another. For the whole law is fulfilled in one word: &ldquo;You shall love your neighbor as yourself.&rdquo;",
  },
  {
    number: "06",
    title: "Honest Work Examination",
    summary:
      "A quarterly review of work practices through a theological lens — asking not &ldquo;have I been productive?&rdquo; but &ldquo;have I been faithful?&rdquo; — to catch the slow drift from vocation into idolatry or despair.",
    steps: [
      "Once a quarter, set aside an hour for work examination. Ask: has my work been an act of worship or a performance for approval? Have I been pursuing excellence or managing appearances? Have I been honest or politically convenient?",
      "Examine the idol question: is work functioning as my primary source of identity, worth, or security? The tell is usually in what circumstances provoke disproportionate fear — a critical review, a project failure, a threat of job loss. These reveal whether work is a calling or a lord.",
      "Examine the justice question: how have I treated people with less power in my workplace? The intern, the contractor, the person the organization overlooks? Nehemiah&rsquo;s work includes chapter 5 — confronting economic exploitation among his own people while building the wall.",
      "Close with gratitude. The capacity to work, the skill, the opportunity, the colleagues — these are gifts. Examination without gratitude produces guilt; examination with gratitude produces stewardship.",
    ],
    anchor:
      "1 Corinthians 10:31 — So, whether you eat or drink, or whatever you do, do all to the glory of God.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Dorothy Sayers",
    role: "Why Work? (1942) — The Integrity of the Work Itself",
    quote:
      "The only Christian work is good work well done. Let the Church remember this: that every maker and worker is called to serve God in his profession or trade — not outside it.",
    bio: "Dorothy Sayers — novelist, playwright, lay theologian, creator of Lord Peter Wimsey — wrote some of the twentieth century&rsquo;s most incisive theology in essays rather than treatises. &ldquo;Why Work?&rdquo; (1942) is the essential statement: that the church&rsquo;s failure to address the theological content of ordinary work — its quality, its integrity, its relationship to creativity and vocation — has produced Christians who are pious in private and mediocre in public. Sayers grounds her argument in the Trinity: God the Creator, whose image we bear, creates — and therefore human making participates in something divine. The carpenter who makes a bad table has not just failed at carpentry; he has failed at imaging God. Her theology of work is an argument for excellence rooted in creation, not in performance culture.",
  },
  {
    name: "Tim Keller",
    role: "Every Good Endeavor — Connecting Your Work to God&rsquo;s Work",
    quote:
      "Work is so foundational to our makeup that it is one of the few things that can give us a sense of meaning and purpose — but only if it is pursued as part of a larger calling from God.",
    bio: "Every Good Endeavor (2012) is Tim Keller and Katherine Alsdorf&rsquo;s sustained argument that work matters to God and that Christians have been poorly equipped to understand why. Keller traces the theology from Genesis 2 (work as pre-Fall calling) through Genesis 3 (the curse as complication, not cancellation) to the new creation (work redeemed, not abolished). His central practical argument is about narrative: our work is always placed inside a larger story, and when that story is the wrong one — success, self-expression, financial security — work becomes either an idol or a source of despair. Only when work is embedded in the gospel narrative — I work because God works, and my work participates in his renewal of the world — does it carry the weight it was designed to carry without crushing the worker.",
  },
  {
    name: "Lester DeKoster",
    role: "Work: The Meaning of Your Life",
    quote:
      "Work is the form in which we make ourselves useful to others; it is the way in which civilization is built and maintained; it is the road along which God supplies our daily bread; it is the arena in which we obey the cultural mandate.",
    bio: "Lester DeKoster&rsquo;s slender Work: The Meaning of Your Life is one of the most compact and penetrating theologies of work in print. His core argument is a thought experiment: imagine that for one day, no one goes to work. Within 24 hours, the civilization that sustains human life begins to unravel — food disappears from shelves, water stops flowing, power fails. Work, DeKoster argues, is the invisible structure through which God provides for all of creation. The worker participates in God&rsquo;s ongoing provision for the world. This reframes even the most tedious work as participation in something significant: the person who stocks shelves is part of the network through which God feeds people. DeKoster&rsquo;s theology of work is also a theology of community: we do not live off our own work alone but off the interdependent labor of everyone.",
  },
  {
    name: "Os Guinness",
    role: "The Call — Finding and Fulfilling the Central Purpose of Your Life",
    quote:
      "Calling is the truth that God calls us to himself so decisively that everything we are, everything we do, and everything we have is invested with a special devotion, dynamism, and direction lived out as a response to his summons and service.",
    bio: "Os Guinness&rsquo;s The Call remains the most comprehensive evangelical treatment of vocation. His central distinction is between primary calling (to God himself — the summons of Christ that reorders all of life) and secondary calling (the specific spheres and roles in which that primary calling is lived out). The danger he identifies is inverting the order: treating the secondary calling — the career, the role, the ministry — as the primary one, so that identity and security rest on the job rather than on God. When that happens, work becomes either idol (source of worth) or burden (source of anxiety) rather than calling (site of faithful service). Guinness also recovers the Protestant insight that every legitimate vocation is equally a calling: the sanitation worker and the surgeon are both called; neither calling is spiritually superior to the other.",
  },
  {
    name: "Miroslav Volf",
    role: "Work in the Spirit — Toward a Theology of Work",
    quote:
      "The Spirit who raised Jesus from the dead is the same Spirit who enables people to work in anticipation of the new creation. Work in the Spirit is not merely secular activity baptized with religious sentiment; it is participation in the eschatological transformation of the world.",
    bio: "Miroslav Volf&rsquo;s Work in the Spirit (1991) provides the most rigorous academic theology of work in the evangelical tradition. Drawing on pneumatology rather than natural law, Volf argues that the Spirit&rsquo;s charismata — gifts — are not restricted to ecclesiastical functions but encompass the full range of human capacity deployed in any domain of work. The Spirit who gifts the prophet also gifts the programmer; the gifts are deployed in the world as well as in the church. Volf places this within an eschatological frame: work done in the Spirit anticipates the new creation, contributing to the transformation of the present age in the light of the coming one. Not all the products of our work will survive into eternity, but work done faithfully and excellently in the Spirit participates in a movement that will.",
  },
  {
    name: "Amy Sherman",
    role: "Kingdom Calling — Vocational Stewardship for the Common Good",
    quote:
      "Vocational stewardship means deploying your vocational power — your skills, knowledge, position, platform, and network — in ways that serve the flourishing of your neighbors and communities, for the glory of God.",
    bio: "Amy Sherman&rsquo;s Kingdom Calling provides the most practical treatment of how the theology of vocation translates into concrete community impact. Her framework of &ldquo;vocational stewardship&rdquo; asks not just &ldquo;am I faithful in my work?&rdquo; but &ldquo;am I deploying my professional capacities — skill, knowledge, network, position — for the shalom of my community?&rdquo; A doctor who is excellent in the exam room and deploys her medical expertise to serve a free clinic is practicing vocational stewardship; a lawyer who is brilliant in court and uses his legal skill to serve the marginalized is imaging the kingdom. Sherman&rsquo;s research profiles dozens of professionals doing exactly this — not leaving their careers for ministry but bringing their careers into the service of the common good.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Colossians 3:23-24",
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.",
    reflection:
      "The phrase &ldquo;whatever you do&rdquo; is doing enormous theological work. It includes the work that will never appear on a performance review, the task that no one asked about, the quality that only God sees. The inheritance promised is not a bonus from a corporate master but a reward from the Creator — given to the worker who served as unto the Lord even when the human master was absent, indifferent, or hostile.",
  },
  {
    reference: "Genesis 2:15",
    text: "The LORD God took the man and put him in the garden of Eden to work it and keep it.",
    reflection:
      "Work arrives before the Fall. The same God who declares creation &ldquo;very good&rdquo; places his image-bearer in it to cultivate and guard — to bring his creativity and care to bear on a world worth developing. This verse is the theological veto on any teaching that treats work as punishment, as a spiritual waste of time, or as merely the thing one does to fund the real life of church and ministry.",
  },
  {
    reference: "Proverbs 22:29",
    text: "Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.",
    reflection:
      "Proverbs has a high view of competence. Skill — charsuth in Hebrew, the quality of diligence and excellence in craft — is recognized as a path to significant influence. The proverb is not a prosperity promise but an observation about how God has ordered the world: genuine excellence eventually finds an audience. The person who brings full skill to their work honors both the work and the God who gave the capacity for it.",
  },
  {
    reference: "Nehemiah 6:3",
    text: "And I sent messengers to them, saying, &ldquo;I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?&rdquo;",
    reflection:
      "Four times Nehemiah&rsquo;s opponents call him to a meeting; four times he refuses with the same answer. The verse is a model of vocational clarity: the work has been identified, the urgency of the distractions has been assessed as false, and the answer is formed before the invitation arrives. &ldquo;I am doing a great work&rdquo; is not arrogance — it is the factual statement of someone who knows what they were called to do today.",
  },
  {
    reference: "Romans 8:20-21",
    text: "For the creation was subjected to futility, not willingly, but because of him who subjected it, in hope that the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.",
    reflection:
      "The same creation that groans under the curse of Genesis 3 — the thorns, the futility, the toil — is destined for liberation. The work done in the present age by Spirit-filled workers is not merely managing decay; it participates in the in-breaking of new creation. Excellent, faithful work is not an end in itself but a sign and down payment of the world that is coming.",
  },
  {
    reference: "Exodus 20:8-10",
    text: "Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the LORD your God.",
    reflection:
      "The commandment to rest is as binding as the commandment to work. Sabbath does not make work secondary; it makes work finite, creaturely, bounded. The worker who cannot stop working has confused herself with God. Sabbath is the weekly rehearsal of trust: the world did not end when I stopped, and the God who rested on the seventh day sustains the creation while I sleep.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "g6AHNFzQ_vg", title: "A Theology of Work — Colossians 3:23" },
  { videoId: "tLe9jbkFWmg", title: "Tim Keller: Every Good Endeavor" },
  { videoId: "BvicVLW-LNQ", title: "Work Before the Fall — Genesis 2" },
  { videoId: "RqJWP5QIGEU", title: "Dorothy Sayers: Why Work?" },
  { videoId: "JlsPi8G4pM4", title: "Calling and Vocation — Os Guinness" },
  { videoId: "WU8cMT0q5jk", title: "The Redemption of Work and New Creation" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianWorkTheologyPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<WKTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [workChallenge, setWorkChallenge] = useState("");
  const [worshipMoment, setWorshipMoment] = useState("");
  const [excellenceNote, setExcellenceNote] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as WKTEntry[]);
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
    if (!workChallenge.trim() || !worshipMoment.trim()) return;
    const entry: WKTEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString(),
      workChallenge: workChallenge.trim(),
      worshipMoment: worshipMoment.trim(),
      excellenceNote: excellenceNote.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWorkChallenge("");
    setWorshipMoment("");
    setExcellenceNote("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? BLUE : BORDER}`,
    background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
    color: active ? BLUE : MUTED,
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
    color: BLUE,
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
                color: BLUE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Theology of Work
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Whatever You Do: A Theology of Work
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Work was given before the Fall, cursed after it, and redeemed in Christ. The
              sacred/secular divide that confines Christianity to Sunday is a lie the Bible
              consistently refuses. This guide traces the theology of work from Genesis 2&rsquo;s
              pre-Fall calling through the curse on toil, into the Colossians vision of Monday
              morning as an act of worship.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Whatever you do, work at it with all your heart, as working for the Lord,
                not for human masters, since you know that you will receive an inheritance from the
                Lord as a reward. It is the Lord Christ you are serving.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>
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
                A theology of work begins not with the office but with the garden — and it ends not
                with retirement but with the new creation. These eight studies trace work from
                creation&rsquo;s goodness through the Fall&rsquo;s complication, to the redemption
                Christ brings to the work week and the Sabbath that gives it its boundary.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: BLUE,
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
                        background: "rgba(59, 130, 246, 0.07)",
                        border: `1px solid rgba(59, 130, 246, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Abad and shamar, the curse on toil, Christ&rsquo;s redemption of the material,
                  Sayers&rsquo; integrity of the work itself, Nehemiah&rsquo;s focused building —
                  these are not separate topics but one: the question of whether the work week is
                  sacred space. It is. Every desk, every task, every act of faithful excellence is
                  an altar. Connect the theology of work to financial discipleship in our{" "}
                  <Link href="/christian-money-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Guide to Money
                  </Link>
                  , or explore calling and purpose in the{" "}
                  <Link href="/christian-purpose-calling-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Purpose guide
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
                Theology of work stays abstract until Monday morning. These six practices bring the
                doctrine into the workday — through the opening prayer, the standard of excellence,
                the refusal of distraction, and the weekly rest that declares work is not lord.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: BLUE,
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
                      color: BLUE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  When work becomes an idol
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Every one of these practices can be corrupted by the workaholic&rsquo;s spirit as
                  easily as by laziness. Excellence becomes perfectionism; focus becomes
                  workaholism; neighbor-love becomes overcommitment. The practices need the
                  Sabbath to stay human. The worker who cannot rest has allowed work to become lord
                  just as surely as the one who does it poorly. Keep the day of rest; let it be
                  the hinge that holds everything else in proportion.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six thinkers who took Monday seriously — who developed theologies of work that
                refused the sacred/secular divide and called the church to bring its best self into
                the workplace, the factory, the studio, and the institution.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: BLUE,
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
                      background: "rgba(59, 130, 246, 0.06)",
                      borderLeft: `3px solid ${BLUE}`,
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
                Six passages that span the arc from creation to new creation, tracing God&rsquo;s
                view of human labor across the whole canon. Consider taking one per week and
                bringing it to work on Monday morning.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Before each work week begins, take one of these passages and offer it as a
                  prayer: adoration (&ldquo;God, you are a working God — you made a world and
                  called it good&rdquo;), confession (&ldquo;I have worked for the wrong audience,
                  for reputation rather than for you&rdquo;), and petition (&ldquo;let my work this
                  week be an act of worship, excellent as unto the Lord, neighbor-loving in its
                  effects&rdquo;). Let Scripture sanctify the work week before it begins.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The work week has spiritual content worth recording. Log a challenge you faced, a
                moment when work became worship, and a note about pursuing excellence as unto the
                Lord. Entries are saved privately in your browser — no one sees this but you and
                God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New work journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="wkt-challenge" style={labelStyle}>
                    Work challenge
                  </label>
                  <textarea
                    id="wkt-challenge"
                    value={workChallenge}
                    onChange={(e) => setWorkChallenge(e.target.value)}
                    placeholder="A difficulty you faced at work — a frustrating project, a conflict, a moment of futility or exhaustion"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="wkt-worship" style={labelStyle}>
                    Moment work became worship
                  </label>
                  <textarea
                    id="wkt-worship"
                    value={worshipMoment}
                    onChange={(e) => setWorshipMoment(e.target.value)}
                    placeholder="A moment this week when your work felt like an offering to God — when excellence, care, or service became genuinely worshipful"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="wkt-excellence" style={labelStyle}>
                    Excellence as unto the Lord
                  </label>
                  <textarea
                    id="wkt-excellence"
                    value={excellenceNote}
                    onChange={(e) => setExcellenceNote(e.target.value)}
                    placeholder="Where did you pursue quality for God&rsquo;s eyes rather than a supervisor&rsquo;s approval? Where did you fall short and why?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!workChallenge.trim() || !worshipMoment.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !workChallenge.trim() || !worshipMoment.trim() ? BORDER : BLUE,
                    color: !workChallenge.trim() || !worshipMoment.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !workChallenge.trim() || !worshipMoment.trim() ? "not-allowed" : "pointer",
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
                      Record a challenge, a worship moment, and an excellence note from this week.
                      The pattern that emerges over months will show you where God is meeting you
                      in your work.
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
                          <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
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
                            Work challenge
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.workChallenge}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.excellenceNote ? 10 : 0 }}>
                          <span
                            style={{
                              color: BLUE,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            Worship moment
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.worshipMoment}
                          </p>
                        </div>

                        {entry.excellenceNote && (
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
                              Excellence note
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.excellenceNote}
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
                Teaching on vocation, calling, work as worship, and what it looks like to bring the
                whole of the Christian life into the workplace — from Colossians 3 to Dorothy
                Sayers to the new creation.
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
              Monday morning is holy ground
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The church has often communicated, without intending to, that real Christianity
              happens on Sunday and that the rest of the week is secular time — neutral at best,
              spiritually distracting at worst. The Bible says otherwise. The same God who rested
              on the seventh day worked for six before it. The image-bearer made to cultivate and
              guard the garden is working out the calling of Genesis 2 on Monday morning. The slave
              whom Colossians 3 addresses is doing theology at their workbench. Every act of
              excellent, faithful, neighbor-loving work is a small enactment of the kingdom.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep going: connect work to financial faithfulness in our{" "}
              <Link href="/christian-money-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Guide to Money
              </Link>
              , or explore purpose and calling in the{" "}
              <Link href="/christian-purpose-calling-guide" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Purpose guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
