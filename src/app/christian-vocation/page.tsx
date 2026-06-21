"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const BLUE = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_vocation_entries";

interface VCNEntry {
  id: string;
  date: string;
  workArea: string;
  howWorshipful: string;
  fruitfulness: string;
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
    badge: "Genesis 2:15",
    title: "Work Before the Fall — Vocation in the Garden",
    paragraphs: [
      "Work did not begin east of Eden; it began in it. Genesis 2:15 places the man in the garden &ldquo;to work it and keep it&rdquo; — to cultivate and guard — before the serpent, before the fruit, before the curse. This is one of the most consequential and most overlooked verses in Christian theology of work. Toil is not God&rsquo;s punishment for sin; it is his image-bearer&rsquo;s vocation from the first morning. Adam does not begin to work after the fall; he loses the conditions of ease in which work was done.",
      "The two Hebrew verbs — &lsquo;abad (work, serve, till) and shamar (keep, guard, watch over) — appear elsewhere in the Old Testament as priestly terms. The Levites &lsquo;abad the tabernacle and shamar its ordinances. The garden, then, is a sanctuary and the man&rsquo;s labor in it is priestly service — the first vocation is the tending of a holy space in the presence of God. Every subsequent human labor carries this original dignity: the lawyer, the carpenter, the teacher, the parent is performing a vocation that descends from the first priest-gardener.",
      "This has practical consequences for how Christians regard work. If work is a pre-fall gift rather than a post-fall curse, then laziness and the disdain for ordinary labor are failures of creational fidelity, not signs of spirituality. The monk who fled the world to escape its taintedness was, in the Reformation&rsquo;s reading, neglecting the good creation God asked him to tend. Work is not where you earn a living until you can afford to do ministry; work is ministry.",
    ],
    callout: {
      label: "The original vocation",
      text: "Genesis 2:15 — &ldquo;to work it and keep it.&rdquo; The man&rsquo;s first calling was agricultural and priestly: to tend a holy place.",
    },
  },
  {
    badge: "Genesis 3:17-19",
    title: "The Curse and the Redemption of Work",
    paragraphs: [
      "Genesis 3 does not negate the goodness of work; it describes its corruption. The ground is cursed &ldquo;because of you&rdquo; (Adam) — work remains, but it becomes toilsome, frustrating, and resistant. Thorns and thistles appear. The sweat of the brow replaces the ease of the garden. Death, not retirement, ends the labor: &ldquo;till you return to the ground.&rdquo; Work itself is not the curse; the thorns are. The frustration of effort, the futility of projects, the way organizations and markets can grind down the person — these are the post-fall conditions under which every human being now labors.",
      "The New Testament&rsquo;s theology of the resurrection opens a different horizon. If Christ has inaugurated the new creation, then faithful work done in his name participates, however partially, in the redemption of the cursed ground. Paul&rsquo;s extraordinary statement in 1 Corinthians 15:58 — &ldquo;your labor in the Lord is not in vain&rdquo; — comes at the end of the resurrection chapter. The victory over death underwrites the permanence of good work. What is done in Christ, with Christ&rsquo;s purposes in view, does not evaporate at death; it is, in some way beyond our full understanding, built into the new creation.",
      "This does not make every work frustration a theological crisis. The thorns are real. Projects fail, markets are unjust, good work goes unrecognized, and bodies wear out. The Christian works with realistic hope — not the optimism that denies the thorns but the confidence that the gardener who came to make all things new has not abandoned the field. Faithful work under the curse is itself an act of anticipatory participation in the world that is coming.",
    ],
  },
  {
    badge: "Luther&rsquo;s Theology of Vocation",
    title: "Luther&rsquo;s Recovery of Secular Vocation",
    paragraphs: [
      "Martin Luther&rsquo;s theology of vocation (Beruf) was one of the Reformation&rsquo;s most socially explosive ideas. Medieval Christianity had created a hierarchy of spiritual merit: priests and monks were in the first rank; merchants, farmers, and craftspeople were in lower spiritual orders, tolerated but not celebrated. Luther shattered the hierarchy. The milkmaid serving God faithfully in her calling, he argued, stands on equal spiritual ground with the monk in his cell — and in some ways higher, because her service has actual earthly neighbors to benefit.",
      "Luther&rsquo;s basis was the New Testament&rsquo;s use of klesis (calling): God calls people to himself, and that same God calls people into ordinary stations of life — parent, neighbor, ruler, craftsman. The secular vocation is the mask of God (larvae Dei) — the form through which God exercises his care for the world. When the baker bakes, God is feeding the hungry through human hands. When the farmer farms, God is exercising his providential care for creation through creaturely cooperation. The ordinary work of the ordinary Christian is the primary means of divine providence in the world.",
      "Luther&rsquo;s insight had limits he did not always honor — he was too quick to baptize the existing social order and too slow to allow calling to critique unjust structures. But his core claim remains revolutionary and largely unabsorbed: the desk, the kitchen, the workshop, and the field are not second-class spiritual territory. They are where God is working, and where the Christian serves him by serving neighbors.",
    ],
    callout: {
      label: "Luther&rsquo;s key insight",
      text: "Every calling is a mask of God — ordinary work is the form through which divine providence reaches human neighbors.",
    },
  },
  {
    badge: "Colossians 3:23",
    title: "&ldquo;As Unto the Lord&rdquo; — The Transformation of Ordinary Work",
    paragraphs: [
      "&ldquo;Whatever you do, work heartily, as for the Lord and not for men, since you know that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ&rdquo; (Col 3:23-24). Paul writes this to slaves — people whose work was coerced, uncompensated, and stripped of dignity. His instruction is not approval of the system but a reorientation of every worker&rsquo;s motivation: the actual audience for your work is not your boss, your client, or your performance review. It is Christ.",
      "The phrase &ldquo;as for the Lord&rdquo; is both a comfort and a standard. A comfort because it means the work no one sees, the service no one credits, the excellence invested in a project the market undervalues — all of it is received by an Audience who misses nothing. Dorothy Sayers pressed this point hard: work done poorly because no one is watching is an insult to the nature of work itself, which bears the imprint of a Creator who made all things well. A Christian who does shoddy work is making a theological statement.",
      "The standard is equally high: if Christ is the audience, then the quality of the work, the honesty of the billing, the treatment of colleagues and subordinates, the way power is used in an organization — these are not merely professional ethics but acts of worship or their opposite. Colossians 3 places ordinary work in an eschatological frame: the inheritance is a reward, and the reward is granted by the One for whom the work was actually done.",
    ],
  },
  {
    badge: "Calling in the New Testament",
    title: "Klesis — The Double Meaning of Calling",
    paragraphs: [
      "The New Testament uses the word klesis (calling) almost exclusively for the call to salvation — the summons into the people of God, the primary vocation of every human being. Paul in 1 Corinthians 7:17 writes: &ldquo;Only let each person lead the life that the Lord has assigned to him, and to which God has called him.&rdquo; Here the word sits in the context of practical life choices — circumcision, slavery, marriage — and implies that one&rsquo;s actual station in life is the setting in which the primary calling to Christ is lived out.",
      "The English word vocation (from Latin vocare, to call) entered Christian usage through this double sense: God calls you to himself, and that same God calls you into a particular station and role through which you serve him and your neighbor. Os Guinness, following Luther through the Puritan tradition, describes a primary calling (to God) and a secondary calling (to a role or place) — the secondary being wholly ordered around and accountable to the primary. When work becomes a substitute for the God it should serve, the secondary calling has consumed the first.",
      "The language of calling is also more generous than it first appears. Frederick Buechner&rsquo;s famous definition — &ldquo;the place where your deep gladness and the world&rsquo;s deep hunger meet&rdquo; — is not a complete theology of calling (gladness can mislead and market forces can distort hunger) but it points to a real reality: God typically wires the people he calls for the work he calls them to, and the convergence of gift, passion, and need is one of the signs that a vocation has been found.",
    ],
  },
  {
    badge: "Work as Co-Creation",
    title: "Participating in God&rsquo;s Ongoing Creative Work",
    paragraphs: [
      "The doctrine of creation does not end in Genesis 1; it continues. God&rsquo;s creative work in the world is still ongoing — &ldquo;My Father is working until now, and I am working&rdquo; (John 5:17) — and the human being made in his image is invited into that ongoing work. Tim Keller, developing this in Every Good Endeavor, argues that human work at its best is a participation in God&rsquo;s creative purposes: the engineer who makes a city more livable, the artist who makes beauty visible, the teacher who makes the next generation more capable — all are exercising the cultural mandate in the image of the Creator.",
      "Keller&rsquo;s concept of &ldquo;common grace and vocation&rdquo; extends this further: even the non-Christian surgeon operating on a cancer, the atheist architect designing a more humane neighborhood, the agnostic composer creating music of aching beauty — these are exercising gifts given by the Creator for the benefit of creation, whether they know it or not. Common grace means God is at work in the world through the vocations of all human beings, not only the explicitly Christian ones.",
      "This framework rescues work from both its undervaluation (it&rsquo;s just a job) and its overvaluation (my career is my identity). Work participates in something larger than personal advancement or organizational profit: it is the ongoing task of ordering, tending, and cultivating a world that belongs to God and will, in the end, be fully renewed. Lester DeKoster&rsquo;s plain formulation captures it well: &ldquo;Work is the form in which we make ourselves useful to others and, through others, to God.&rdquo;",
    ],
    callout: {
      label: "The definition",
      text: "Work is the form in which we make ourselves useful to others and, through others, to God. — Lester DeKoster",
    },
  },
  {
    badge: "Rest as Vocation",
    title: "Sabbath — Rest as Part of the Calling",
    paragraphs: [
      "If work is vocation, so is rest. The Sabbath commandment is the only one of the Ten that God grounds in his own example: &ldquo;For in six days the LORD made heaven and earth, the sea, and all that is in them, and rested on the seventh day&rdquo; (Exodus 20:11). God does not rest because he is tired; he rests as a completion, a declaration of sufficiency, a blessing of what has been made. Human Sabbath participates in this divine completion — the worker who stops for a day says, by that stopping, that the work is God&rsquo;s and will survive without her.",
      "Lester DeKoster argued that rest is not the absence of vocation but its complement: we rest because God&rsquo;s work is whole, and our contribution to it, however small, has been made. The Sabbath is the weekly acknowledgment that civilization does not run on our effort but on God&rsquo;s providential sustaining. Every Friday evening or Sunday morning that the Christian genuinely ceases work is a small act of faith that the universe will hold without her.",
      "The theology of rest also disciplines ambition. In a culture that measures people by output, the willingness to stop — to leave work undone, to let the day be unproductive by market metrics — is countercultural testimony. It witnesses to the conviction that identity is not in accomplishment, that the kingdom comes not by human effort alone, and that the God who called you to work also calls you, with equal authority, to cease. Vocation includes the vocation to rest.",
    ],
  },
  {
    badge: "Dorothy Sayers",
    title: "Why Work? — The Integrity of the Work Itself",
    paragraphs: [
      "Dorothy Sayers&rsquo; 1942 essay &ldquo;Why Work?&rdquo; is one of the most incisive critiques of how both Christian and secular culture had degraded the meaning of work. She argued that Christians had made the fatal error of treating work merely as a means to earn money to fund ministry — the worker&rsquo;s soul mattering, the work itself not. The result was that Christians were too often worse workers than their secular counterparts: their interest was elsewhere and their work bore the marks of it.",
      "Sayers&rsquo; counter-proposal was Colossians 3:23 read without sentimentality: the work itself is the service to God, and bad work is a failure of worship regardless of the worker&rsquo;s intentions. &ldquo;The church&rsquo;s approach to an intelligent carpenter is usually confined to exhorting him not to be drunk and disorderly in his leisure hours, and to come to church on Sundays,&rdquo; she wrote, acidly. &ldquo;What the church should be telling him is this: that the very first demand that his religion makes upon him is that he should make good tables.&rdquo;",
      "The integrity of the work — its quality, its honesty, its faithfulness to the material and to the neighbor who will use it — is not a secondary concern behind the worker&rsquo;s interior disposition. It is the primary expression of that disposition in the world. A Christian who makes beautiful tables or writes clear prose or builds structurally sound houses is doing theology in wood and language and stone. The excellence of the work is the worship.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Daily Work Offering",
    summary:
      "Begin each workday with a short prayer of consecration — offering the day&rsquo;s work to Christ as a conscious act of worship — and end it with a review of where God was present.",
    steps: [
      "Before opening the first task, take two minutes to offer the day&rsquo;s work to God: &ldquo;Lord, this work is yours. I do it as unto you. May what I make, teach, build, or serve today be an act of worship.&rdquo; Colossians 3:23 is the text to pray.",
      "Identify one person your work will serve today — a client, a student, a colleague, a stranger — and pray for them specifically. Luther&rsquo;s theology of the neighbor: work is love of neighbor organized systematically.",
      "At the end of the day, review: where did I experience my work as participation in God&rsquo;s purposes? Where did thorns and frustrations dominate? What would faithfulness look like tomorrow in the moments that were hard today?",
      "Record any significant reflections in the Journal tab. Over time, a pattern emerges: where your vocation feels most alive and most dead, where God seems to be expanding your capacity, and where you are tempted to serve yourself at the neighbor&rsquo;s expense.",
    ],
    anchor: "Colossians 3:23 — Whatever you do, work heartily, as for the Lord and not for men.",
  },
  {
    number: "02",
    title: "Vocation Clarity Exercise",
    summary:
      "A structured discernment exercise for mapping the intersection of your gifts, your deepest desires, the world&rsquo;s need, and your current opportunities — to see where God might be calling.",
    steps: [
      "On separate pages or screens, list: (1) what you are genuinely skilled at, confirmed by others; (2) what you would do even if unpaid; (3) what need in the world moves you to anger or grief; (4) what opportunities are presently available to you.",
      "Look for overlaps. The Venn intersection of gift, desire, need, and opportunity is rarely a single career but often a direction. Frederick Buechner&rsquo;s definition of calling lives in that intersection.",
      "Ask trusted friends to challenge your self-assessment. We tend to overestimate what we wish we were gifted at and underestimate what comes so naturally that we discount it. Others see our gifts more clearly than we do.",
      "Do not wait for perfect clarity. Os Guinness: calling is clarified in motion, not in analysis. Take the next faithful step in the direction the discernment points, and watch what God confirms through the fruit.",
    ],
    anchor: "Romans 12:6 — Having gifts that differ according to the grace given to us, let us use them.",
  },
  {
    number: "03",
    title: "Excellence as Worship",
    summary:
      "Deliberately raise the quality bar on one area of your work — not for recognition or promotion, but as an act of worship to the Audience of One who receives all labor.",
    steps: [
      "Choose one task you do regularly and honestly assess whether you are doing it to the level you could — not the level the market requires but the level the work deserves and the neighbor needs.",
      "Invest the extra time, attention, or skill that would raise the quality: draft the email a second time, test the structure before you build on it, slow down the conversation that deserves depth rather than efficiency.",
      "Tell no one you are doing it — or at most one person who will hold you accountable. The discipline is to work for the unseen Audience, not to create a reputation for excellence. Motivation purified in secret stays pure in public.",
      "Review at the end of a week: Did the extra care show in the work? Did you experience the work differently when you gave it your full attention? Sayers&rsquo;s test: does the finished product honor the person who will use it?",
    ],
    anchor: "Ecclesiastes 9:10 — Whatever your hand finds to do, do it with your might.",
  },
  {
    number: "04",
    title: "Finding the Neighbor in Your Work",
    summary:
      "Luther&rsquo;s insight in practice: identify the actual human beings your daily work serves and cultivate conscious awareness of them as the reason the work matters.",
    steps: [
      "Map the chain of benefit from your work: who directly receives what you produce, and who benefits indirectly? The accountant&rsquo;s client can pay workers fairly; the code is infrastructure that serves a city; the teacher&rsquo;s student becomes a doctor. The neighbor is often several steps removed but real.",
      "When the work feels meaningless, trace the chain to the face at the end of it. Most work frustration is a failure of imagination: we cannot see the neighbor and so lose the motivation that only love of neighbor can provide.",
      "Meet one person in your chain of benefit in person when possible — tour the facility your supply chain serves, visit the school where your organization teaches, talk to the patient who received the care. Proximity to the neighbor renews vocation.",
      "Write a &ldquo;theology of my job&rdquo; — a paragraph describing how your specific work contributes to human flourishing and participates in God&rsquo;s care for creation. It is harder than it sounds and more clarifying than anything else you can do.",
    ],
    anchor: "Galatians 5:13 — Through love serve one another.",
  },
  {
    number: "05",
    title: "Sabbath Practice as Vocational Discipline",
    summary:
      "Protect one full day per week from work and productivity — not as a reward for hard work but as an act of trust that the world is God&rsquo;s and will hold without your effort.",
    steps: [
      "Choose a day and protect it structurally — phone on silent, laptop closed, no email, no to-do lists. The specificity is what makes it countercultural and therefore spiritually formative.",
      "Name the anxiety that arises when you stop. That anxiety is information: you trust your work more than your God. Sabbath is the weekly test of whether Psalm 24:1 is living conviction or theological decoration.",
      "Fill the Sabbath with restorative goods: worship, unhurried meals, nature, friendship, beauty, sleep. Sabbath is not empty time but time reoriented from production to reception — receiving the creation you spend the rest of the week working in.",
      "Extend the Sabbath logic to sabbatical rhythms for the longer term: annual retreat, periodic fasting from a project, a season of contemplative reading in the specialty you need to deepen. The worker who never rests eventually works without wisdom.",
    ],
    anchor: "Exodus 20:10 — The seventh day is a Sabbath to the LORD your God. On it you shall not do any work.",
  },
  {
    number: "06",
    title: "Integrating Faith and Work in Community",
    summary:
      "Find or form a small group of Christians who will discuss their specific work through the lens of vocation — because most Christians have never had a serious conversation about what God has to do with Monday.",
    steps: [
      "Identify two or three Christians whose work you respect and whose faith you trust, and propose a regular gathering around the question: how does our theology connect to what we actually do from nine to five?",
      "Use a structured text to anchor the discussions — Tim Keller&rsquo;s Every Good Endeavor or Lester DeKoster&rsquo;s Work: The Meaning of Your Life are both short and generative.",
      "Share actual work dilemmas, not abstract theology: the ethical tension in a deal, the colleague whose behavior you are unsure how to address, the season of fruitlessness that is making you question your calling. Real cases deepen theology in ways that lectures cannot.",
      "Pray for one another&rsquo;s work specifically — not &ldquo;bless their job&rdquo; but &ldquo;give them wisdom in the difficult conversation with their supervisor&rdquo; or &ldquo;help them produce work that honors their craft.&rdquo; Specific intercession takes vocation seriously as a domain of spiritual life.",
    ],
    anchor: "Hebrews 10:24 — Let us consider how to stir up one another to love and good works.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Martin Luther",
    role: "The Theology of Vocation — Every Calling a Mask of God",
    quote:
      "The works of monks and priests, however holy and arduous they may be, do not differ one whit in the sight of God from the works of the rustic laborer in the field or the woman going about her household tasks. All are measured before God by faith alone.",
    bio: "Martin Luther&rsquo;s theology of vocation (Beruf) was the Reformation&rsquo;s gift to the theology of ordinary work. Before Luther, the spiritual hierarchy was clear: clergy and monastics occupied the first rank; farmers and craftspeople were spiritually tolerated but not celebrated. Luther dismantled the hierarchy with a single theological move: all callings are callings from God, and the test of faithful vocation is not the dignity of the office but the quality of the service. His treatment of the milkmaid, the father changing a baby, and the farmer plowing a field as forms of divine service — the mask of God (larvae Dei) through which Providence reaches neighbors — remains one of the most practically important theological contributions to Western history. The concept that your desk, your kitchen, and your workshop are as sacred as any altar has not yet fully settled into the church&rsquo;s bones.",
  },
  {
    name: "Dorothy Sayers",
    role: "Why Work? — Excellence as Theological Integrity",
    quote:
      "The only Christian work is good work well done. Let the church ask herself: is the work itself done for God or for man? It is the work that is the service of God.",
    bio: "Dorothy Sayers — novelist, playwright, translator of Dante, and Anglican apologist — argued in her wartime essays that the church had made the disastrous mistake of treating the worker&rsquo;s soul as the thing that mattered and the work itself as irrelevant to God. The result was Christians who were worse workers than their secular neighbors: their energies were elsewhere and their products bore the marks of it. Her counter-claim was blunt: &ldquo;The first duty of every soul is not to assert its own rights but to carry out its own task.&rdquo; The table must be a good table; the essay must be a true essay; the account must be an honest account. Work that is offered to God but done badly is a contradiction in terms. Sayers remains one of the clearest voices on the integrity of the work itself as an act of worship.",
  },
  {
    name: "Lester DeKoster",
    role: "Work: The Meaning of Your Life — Service Through Labor",
    quote:
      "Work is the form in which we make ourselves useful to others, and, through others, to God. Work is the lifeblood of civilization. Work is love of the neighbor made visible.",
    bio: "Lester DeKoster&rsquo;s Work: The Meaning of Your Life (1982) is one of the most succinct and underread theologies of vocation in evangelical literature. DeKoster, a librarian and editor by trade, built his argument on a single claim: civilization is possible because strangers work for strangers. Every loaf of bread you eat was grown, milled, baked, distributed, and sold by people you will never meet. The fabric of human community rests entirely on the willingness of people to work — and work is therefore the primary visible form of love of neighbor. DeKoster&rsquo;s extension of Luther&rsquo;s theology to the industrial and service economy, and his argument that honest work is itself a form of participation in God&rsquo;s sustaining care for the world, gives every worker theological dignity that no resume can provide.",
  },
  {
    name: "Os Guinness",
    role: "The Call — Primary and Secondary Calling",
    quote:
      "Our primary calling as followers of Christ is by him, to him, and for him. Our secondary calling is to specific roles, tasks, and relationships to which we are called as expressions of that primary call.",
    bio: "Os Guinness&rsquo;s The Call (1998) is the fullest modern treatment of the theology of vocation in the evangelical tradition. Guinness drew on Luther, the Puritans, and his own Calvinist heritage to argue that the primary calling — to God himself — must always order the secondary calling to work and role. When the secondary calling (career, ministry, family role) becomes primary, identity is misplaced and vocation distorts into idolatry. Guinness was also acute on the uniqueness of calling: God does not call everyone to the same place or to maximize the same metrics. The call is personal, specific, and shaped by the gifts and circumstances of each person. His treatment of calling as clarified in motion rather than in contemplation — you discern by acting faithfully and watching what God confirms — is practically wise and theologically grounded.",
  },
  {
    name: "Frederick Buechner",
    role: "Now and Then — Vocation at the Meeting of Gladness and Hunger",
    quote:
      "The place God calls you to is the place where your deep gladness and the world&rsquo;s deep hunger meet.",
    bio: "Frederick Buechner&rsquo;s definition of vocation has become one of the most quoted sentences in the theology of calling — and the most prone to misuse. In context, Buechner was not offering a formula for career selection but a description of the resonance that marks genuine calling: something in the person, and something in the world&rsquo;s need, come together in a way that feels like both gift and obligation. His own vocation as a novelist and autobiographer — an ordained Presbyterian minister who chose literature over pulpit — was itself the exercise of that principle: his gladness was language and story; the hunger he addressed was the modern person&rsquo;s need to see grace in the ordinary grain of experience. Buechner&rsquo;s memoirs (The Sacred Journey, Now and Then, Telling Secrets) remain the most honest literary account of vocation discovered and sustained through decades of faithful work.",
  },
  {
    name: "Tim Keller",
    role: "Every Good Endeavor — Work, Culture, and the Kingdom",
    quote:
      "Work is as much a basic human need as food, beauty, rest, friendship, prayer, and sexuality; it is not simply medicine but food for the human spirit.",
    bio: "Tim Keller&rsquo;s Every Good Endeavor (2012), written with Katherine Leary Alsdorf, is the most comprehensive recent theology of work from a Reformed evangelical perspective. Drawing on Luther, Sayers, DeKoster, and Guinness, Keller set out to answer the question every professional asks: what does my faith have to do with what I do all week? His answer is wide: faith connects to work through the doctrine of creation (work participates in God&rsquo;s creative purposes), the theology of the fall (work is frustrated but not abandoned), the doctrine of redemption (work now can be done &ldquo;as unto the Lord&rdquo;), and eschatology (good work done in Christ is not lost at death). Keller was also unusually direct about the idols work can become — success, approval, financial security — and about what it looks like to be freed from those idols enough to work with true integrity and genuine service of the neighbor.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Genesis 2:15",
    text: "The LORD God took the man and put him in the garden of Eden to work it and keep it.",
    reflection:
      "Work is pre-fall, not post-fall. The man&rsquo;s first task was priestly and agricultural: to tend a holy place on behalf of the One who made it. Every human vocation descends from this first calling, and carries its dignity: the worker in any field is working in the image of the first gardener.",
  },
  {
    reference: "Colossians 3:23-24",
    text: "Whatever you do, work heartily, as for the Lord and not for men, since you know that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.",
    reflection:
      "Paul writes this to slaves — those whose work had been stripped of every human dignity. His instruction is not approval of slavery but a fundamental reorientation of every worker&rsquo;s audience: the work is done for Christ. This makes the unseen effort as significant as the celebrated achievement, and the quality of the work an act of worship or its opposite.",
  },
  {
    reference: "1 Corinthians 15:58",
    text: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.",
    reflection:
      "This promise, at the end of the resurrection chapter, grounds the permanence of good work in the permanence of the resurrection. Work done in the Lord does not evaporate — it has a weight of glory. The frustration of the thorns and thistles is real, but it is not the last word about what faithful labor under the curse produces.",
  },
  {
    reference: "1 Corinthians 7:17",
    text: "Only let each person lead the life that the Lord has assigned to him, and to which God has called him. This is my rule in all the churches.",
    reflection:
      "Paul&rsquo;s instruction is not resignation to the status quo but a theological point about where discipleship is lived. The primary calling to Christ is worked out in the actual station you inhabit — married, single, employed, unemployed, free, enslaved. The calling does not wait for ideal conditions.",
  },
  {
    reference: "Proverbs 22:29",
    text: "Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men.",
    reflection:
      "Proverbs takes the quality of work seriously as a virtue. Skill — developed, practiced, honed — carries dignity and opens influence. The commitment to excellence in one&rsquo;s craft is not vanity but wisdom, and its ultimate source is the Creator who made all things with precision and beauty.",
  },
  {
    reference: "Matthew 5:16",
    text: "Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.",
    reflection:
      "The good works visible to others include the work of vocation: the quality of the product, the honesty of the transaction, the integrity of the professional. When the world observes Christians doing their work with excellence and love, and asks why, the answer that glorifies the Father is the same answer that has always glorified him: grace.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "A_dUiKUvb5Q", title: "Luther&rsquo;s Theology of Vocation" },
  { videoId: "T0Y-LEbr3fU", title: "Tim Keller: Every Good Endeavor — Work and the Gospel" },
  { videoId: "n_fovAETYHM", title: "Dorothy Sayers: Why Work? The Integrity of the Work Itself" },
  { videoId: "Y6xGqUqHrGo", title: "Os Guinness: The Call — Primary and Secondary Vocation" },
  { videoId: "UGLtQdXuMpk", title: "Colossians 3:23 — As Unto the Lord" },
  { videoId: "H9Q6BHdgJr4", title: "Work, Rest, and the Sabbath Rhythm" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianVocationPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<VCNEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [workArea, setWorkArea] = useState("");
  const [howWorshipful, setHowWorshipful] = useState("");
  const [fruitfulness, setFruitfulness] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as VCNEntry[]);
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
    if (!workArea.trim() || !howWorshipful.trim()) return;
    const entry: VCNEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      workArea: workArea.trim(),
      howWorshipful: howWorshipful.trim(),
      fruitfulness: fruitfulness.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWorkArea("");
    setHowWorshipful("");
    setFruitfulness("");
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
              Christian Vocation
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Called to Work: The Theology of Vocation and Work as Worship
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Work is not what you do while waiting for ministry to begin — it is a form of ministry.
              Luther recovered what medieval Christianity had lost: every calling is a calling from
              God, and the milkmaid and the monk serve him on equal ground. This guide traces the
              theology of vocation from the garden of Eden to Colossians 3, through the voices of
              Luther, Sayers, DeKoster, and Keller, and into the daily practice of work as worship.
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
                &ldquo;Whatever you do, work heartily, as for the Lord and not for men, since you
                know that from the Lord you will receive the inheritance as your reward. You are
                serving the Lord Christ.&rdquo;
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
                Eight theological studies tracing the meaning of work from the pre-fall garden
                through the Reformation recovery of secular vocation to the eschatological promise
                that labor in Christ is never in vain.
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
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Vocation and stewardship together
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Vocation and stewardship are two sides of the same theology: God made us to work
                  (vocation) and entrusted us with resources to work with (stewardship). Neither is
                  fully understood without the other. Explore the stewardship dimension in{" "}
                  <Link
                    href="/christian-stewardship"
                    style={{ color: BLUE, textDecoration: "underline" }}
                  >
                    Christian Stewardship
                  </Link>
                  , or see how calling connects to justice in{" "}
                  <Link
                    href="/social-justice-guide"
                    style={{ color: BLUE, textDecoration: "underline" }}
                  >
                    Social Justice
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
                Six practices for living vocation consciously — connecting Monday to Sunday, offering
                the day&rsquo;s work to God, and finding the neighbor your labor actually serves.
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
                  The Monday question
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The deepest test of a congregation&rsquo;s theology of vocation is whether its
                  members can answer, &ldquo;what does your faith have to do with what you do on
                  Monday?&rdquo; with more than a vague gesture toward being nice. Use the journal
                  below to develop your answer — specific to your actual work, your actual
                  neighbors, and your actual gifts deployed or withheld.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six theologians and practitioners who have shaped the church&rsquo;s thinking on
                vocation — from Luther&rsquo;s Reformation breakthrough to Sayers&rsquo;s wartime
                essays and Keller&rsquo;s contemporary synthesis.
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
                Six passages that form the biblical spine of a theology of work and vocation. Read
                them slowly and let each one reframe what you do on Monday.
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Praying your work
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each of these passages to work with you for one week. Before a difficult
                  meeting: &ldquo;Lord, I am working heartily as for you.&rdquo; When the project
                  frustrates: &ldquo;My labor in the Lord is not in vain.&rdquo; When the day feels
                  meaningless: &ldquo;The earth is yours — I tend it on your behalf.&rdquo;
                  Scripture prayed at the point of application forms vocation from the inside out.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Reflect on how your daily work connects to calling and worship. Name a work area,
                describe how worshipful or faithful it currently feels, and note where you see or
                long for fruitfulness. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New vocation reflection
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="vcn-work" style={labelStyle}>
                    Area of work or calling
                  </label>
                  <input
                    id="vcn-work"
                    type="text"
                    value={workArea}
                    onChange={(e) => setWorkArea(e.target.value)}
                    placeholder="e.g. teaching, parenting, a specific project, a role you carry"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="vcn-worship" style={labelStyle}>
                    How worshipful does this work feel right now?
                  </label>
                  <textarea
                    id="vcn-worship"
                    value={howWorshipful}
                    onChange={(e) => setHowWorshipful(e.target.value)}
                    placeholder="Is this area of work connecting you to God and neighbor, or does it feel mechanical, meaningless, or draining?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="vcn-fruit" style={labelStyle}>
                    Where do you see or long for fruitfulness?
                  </label>
                  <textarea
                    id="vcn-fruit"
                    value={fruitfulness}
                    onChange={(e) => setFruitfulness(e.target.value)}
                    placeholder="What fruit is your work producing for others? What fruit are you praying for?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!workArea.trim() || !howWorshipful.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !workArea.trim() || !howWorshipful.trim() ? BORDER : BLUE,
                    color: !workArea.trim() || !howWorshipful.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !workArea.trim() || !howWorshipful.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save reflection
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your reflections{" "}
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
                      No reflections yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name one area of your work and ask: does this feel like worship? Honesty here
                      is the beginning of a theology of vocation that is actually yours.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: BLUE }}>
                              {entry.workArea}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete reflection for ${entry.workArea}`}
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

                        <div style={{ marginBottom: entry.fruitfulness ? 10 : 0 }}>
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
                            Worshipfulness
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.howWorshipful}
                          </p>
                        </div>

                        {entry.fruitfulness && (
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
                              Fruitfulness
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.fruitfulness}
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
                Teaching on Luther&rsquo;s theology of vocation, work as worship, Dorothy Sayers,
                calling discernment, and Sabbath rest. Good companions to the Theology and Practices
                tabs.
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
              Work as a form of love
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Luther&rsquo;s insight, at its simplest, is that work is love of neighbor made
              systematic. The food on your table, the heat in your home, the road you drove this
              morning — these arrived through the labor of thousands of people who served you without
              knowing your name. When you work well, honestly, and with attention to the people your
              work will reach, you are participating in the same providential web. You are the mask
              of God for someone today. Do not show up in disguise.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link
                href="/christian-stewardship"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Christian Stewardship
              </Link>{" "}
              for managing the resources your vocation works with,{" "}
              <Link
                href="/christian-simplicity"
                style={{ color: BLUE, textDecoration: "underline" }}
              >
                Christian Simplicity
              </Link>{" "}
              for freeing yourself from overwork and overconsumption, or{" "}
              <Link href="/sabbath" style={{ color: BLUE, textDecoration: "underline" }}>
                Sabbath
              </Link>{" "}
              for the rest that completes the work.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
