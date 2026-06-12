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

const STORAGE_KEY = "vine_technologyethics_entries";

interface TECEntry {
  id: string;
  date: string;
  technologyStruggle: string;
  intentionalUse: string;
  digitalSabbath: string;
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
    badge: "Jacques Ellul",
    title: "Technology as Tool vs. Technology as Lord — La Technique",
    paragraphs: [
      "French philosopher and theologian Jacques Ellul spent his career warning the church about what he called &ldquo;la technique&rdquo; — the totality of methods rationally arrived at and having absolute efficiency in every field of human activity. His warning was not that any particular technology was dangerous but that technique, as a system, had become autonomous: it no longer served human ends but defined them. We no longer ask whether we should do something; we ask whether it is technically possible, and if it is, we do it. The method becomes its own justification.",
      "Ellul wrote The Technological Society in 1954, before the internet, before smartphones, before social media, before AI — and it reads as prophecy. His core claim is that technique does not remain a servant; it colonizes. It reshapes the human beings who use it, rewrites their desires, restructures their time, and gradually displaces every rival authority including the church. A technology adopted for convenience eventually defines the terms of life. The phone promised to make us more connected; it has also made focused prayer, unhurried conversation, and sabbath nearly impossible to practice without deliberate resistance.",
      "For Ellul, the Christian response is not Luddism but prophetic nonconformity: using technology without being used by it, asking always whether &ldquo;la technique&rdquo; is serving the human good and the kingdom of God, or whether it has become lord. The first step is recognizing that the question exists. Most people have not asked it. Most churches have not asked it either. The uncritical adoption of every new platform, every new productivity tool, every new digital medium — without asking what it costs the soul — is the technological captivity the church largely does not notice because it is so ambient.",
    ],
    callout: {
      label: "Ellul&rsquo;s warning",
      text: "Technique becomes its own justification: we no longer ask whether we should do something but whether we can, and capability becomes imperative. Christians must ask the prior question.",
    },
  },
  {
    badge: "Attention Economy",
    title: "The Attention Economy and the Christian Soul",
    paragraphs: [
      "The business model of most digital platforms is simple and rarely stated plainly: they sell your attention to advertisers. To do this, they must first capture it, then hold it as long as possible. The systems built to accomplish this are not neutral — they are specifically engineered to exploit human psychological vulnerabilities: novelty-seeking, social comparison, intermittent reward schedules identical to slot machines, outrage amplification, and the ancient craving for belonging and approval. The attention economy is a machine built to colonize the mind.",
      "The Christian tradition has always known that attention is not a trivial thing. What we attend to shapes what we love, and what we love shapes who we become. Augustine&rsquo;s heart restless until it rests in God is a claim about attention: the human heart has a proper object, and when it fixes elsewhere it becomes anxious, fragmented, and ultimately miserable. The desert fathers developed practices of watchfulness (nepsis) — guarding the heart from the constant stream of images and thoughts that distract it from God. They were doing this in the fourth century, with no phones, and they still found it nearly impossible. The digital age has industrialized the problem.",
      "The question for the Christian is not only &ldquo;am I addicted to my phone?&rdquo; It is deeper: whose interests does this system serve, and what is it doing to my capacity to attend to God, to love my neighbor with full presence, to sustain the long, slow practices of discipleship that cannot be compressed into a feed? The attention economy profits from our distraction. The kingdom of God requires our focused presence. These are not compatible goals, and the platform will not resolve the tension for us.",
    ],
  },
  {
    badge: "James K.A. Smith",
    title: "Social Media and the Formation of Desire",
    paragraphs: [
      "James K.A. Smith&rsquo;s Desiring the Kingdom (2009) and You Are What You Love (2016) made a philosophical and theological argument that has profound implications for digital life: we are not primarily thinking beings who decide what to believe and then live accordingly. We are desiring beings, and our desires are formed by our practices — by the things we do repeatedly with our bodies, by the liturgies (secular and sacred) that we submit to day after day. We become what we habitually attend to and what we habitually do.",
      "Social media, understood through Smith&rsquo;s lens, is a liturgical system: it trains desire through constant repetition. Scroll, compare, react, share. Scroll, compare, react, share. The practice trains certain dispositions: envy of the curated lives of others, craving for approval measured in likes, anxiety when the feed is absent, restlessness that needs constant stimulation. These are not bugs in the system; they are the system. And they are forming souls — particularly young souls — in directions that are the opposite of the kingdom dispositions Jesus describes in the Beatitudes: poverty of spirit, meekness, mercy, peacemaking.",
      "Smith&rsquo;s constructive proposal is not to abandon technology but to counter-form: to submit with equal intentionality and far greater frequency to the liturgies of the church — Scripture reading, prayer, the Eucharist, sabbath, community — that train desire toward God and neighbor. The question is not whether you will be formed; you will be. The question is which liturgies will do the forming. Handing eight hours a day to the attention economy&rsquo;s liturgies and thirty minutes a day to the church&rsquo;s liturgies produces predictable results. The math matters.",
    ],
  },
  {
    badge: "Artificial Intelligence",
    title: "AI and the Image of God — What Does It Mean When Machines Seem to Think?",
    paragraphs: [
      "Artificial intelligence is generating a theological question that previous generations did not face: what does it mean to be made in the image of God when machines can write, paint, reason, converse, and apparently create? If the imago Dei is primarily about rationality or creativity — as some theological traditions have claimed — then AI seems to threaten its distinctiveness. This is worth pressing hard on, because the question will not go away and the church has barely begun to answer it.",
      "The biblical data on the imago Dei is thinner than the tradition has often assumed. Genesis 1:26-27 gives us the phrase but not a definition. What it gives us is a function: image-bearers are made to represent God in creation, to exercise dominion as stewards, to relate to God in a way no other creature does. The imago Dei, on this reading, is not primarily about cognitive capacity — it is about vocation, relationship, and moral accountability. Machines can process language; they cannot love, repent, worship, or be held morally responsible. They can generate text; they cannot be hurt, forgiven, or redeemed. These are not small differences.",
      "Practical theological questions follow: Can AI be used in Christian ministry? When is AI-assisted writing honest and when is it deceptive? Does AI-generated pastoral care trivialize the human presence it simulates? What do we owe workers displaced by automation? These questions do not resolve themselves from a theological framework; they require the framework be applied with careful discernment, case by case, in communities of believers. The church that does not develop this discernment will simply adopt AI as it has adopted every other tool — without asking what it costs the soul or what it does to those the economy leaves behind.",
    ],
  },
  {
    badge: "Sabbath",
    title: "Digital Sabbath as Counter-Formation",
    paragraphs: [
      "The Sabbath command in Exodus 20 and Deuteronomy 5 is not fundamentally about rest as recuperation. It is about rest as trust: ceasing from work is a weekly embodied confession that the world does not depend on my constant productivity, that God is sovereign and I am not, that there is enough if I stop grasping for more. Sabbath interrupts the logic of accumulation and control. It insists that the world will not fall apart if I disengage for a day.",
      "The digital world is the most aggressive anti-sabbath environment ever constructed. It never closes, never rests, never stops generating new content, new obligations, new crises to react to. The inbox fills on Sundays. The news cycle runs on Christmas. The dopamine machine does not observe holy days. To practice digital sabbath — to power off screens for a day, to withdraw from the feed and the notification stream — is not a lifestyle preference. It is a counter-cultural and counter-formation act: a weekly declaration that the attention economy is not lord, that our identity does not depend on our output or our online presence, that we are creatures who need rest and are not ashamed to take it.",
      "Andy Crouch&rsquo;s The Tech-Wise Family suggests the minimum viable digital sabbath: one hour per day, one day per week, one week per year, entirely free from devices. Even this modest proposal meets resistance, which is itself diagnostic: if the thought of twenty-four hours without a screen produces anxiety, the formation has already gone deep. Digital sabbath reveals what we have been trusting. It is the fast that names the hunger.",
    ],
  },
  {
    badge: "Incarnation",
    title: "The Body and Incarnation vs. Digital Disembodiment",
    paragraphs: [
      "Christianity is an irreducibly physical religion. The Word became flesh. The resurrection is bodily. The sacraments involve bread, wine, water, and oil — physical elements that do something to physical people. The local church is not an online community but a gathering of embodied people in a particular place who share life, not only content. The incarnation means that physical presence is not an optional add-on to the Christian life; it is the medium through which much of the gospel is transmitted.",
      "The digital age invites a kind of Gnosticism of relationship: the conviction that the real, meaningful, &ldquo;true&rdquo; version of connection is the disembodied kind — the text, the DM, the video call — and that physical presence is merely one delivery mechanism among many. But the Christian tradition keeps pushing back. Why do we gather in person at all, if digital presence is equivalent? Because something happens when bodies are in the same room that cannot happen through a screen: the Eucharist, the laying on of hands, the embrace at the graveside, the meal together, the face that is tired and present and actually here. These are not luxuries to be outsourced to the digital when convenient. They are the irreducible currency of incarnate love.",
      "The pastoral challenge of our moment is the displacement of embodied community by digital pseudocommunity. People feel less lonely when they are on social media, but research increasingly shows they are lonelier. The analog simulation of belonging — likes, follows, comments — provides enough of the reward signal to reduce the drive toward real community without providing the substance of it. The church that merely moves online has not served its people; it has accommodated their displacement. Fidelity to the incarnation means insisting that bodies matter and that gathering in them is not negotiable.",
    ],
  },
  {
    badge: "Justice",
    title: "Technology and the Poor — Access Inequality",
    paragraphs: [
      "Digital technology is frequently discussed as though its benefits and burdens were equally distributed. They are not. The same digital economy that creates extraordinary opportunity for the educated and connected creates surveillance capitalism for the poor: their data is harvested, their credit scored by algorithmic systems they cannot see, their job applications filtered by AI they cannot interrogate, their neighborhoods gentrified by the tech industry whose workers move in. The digital revolution has accelerated wealth concentration and widened inequality. This is a justice issue, and the church has not consistently named it as one.",
      "The access gap is literal as well as structural. Millions of children in the developing world have no reliable internet access, placing them at permanent educational disadvantage in a world whose economy increasingly runs on digital literacy. The digital divide tracks the racial wealth gap in the United States: broadband access, device access, and digital literacy are unevenly distributed along lines of race and class that are not accidents. A Christian technology ethics that focuses only on the temptations of the affluent user — too much screen time, social media anxiety — has not yet arrived at the prophetic vision of Amos and Isaiah, who asked whose suffering the system was organized around.",
      "The kingdom of God question about technology is always double: what does this do to those who use it, and what does it do to those who are excluded from it, exploited by it, or harmed by its byproducts? A Christian who is diligently practicing digital sabbath but has never asked about labor conditions in the supply chain of their devices has engaged the personal ethics without the structural. Both matter. The church is equipped for both.",
    ],
  },
  {
    badge: "Neuroscience",
    title: "Dopamine and the Theology of Enough",
    paragraphs: [
      "Dopamine is the neurotransmitter most associated with reward-seeking — it fires not when we receive a reward but when we anticipate one. The variable reward schedule — sometimes you get a like, sometimes you don&rsquo;t; sometimes the feed has something wonderful, sometimes it is dull — is the most powerful schedule for dopamine activation known to behavioral science. It is also the exact mechanism social media platforms are engineered around. The slot machine and the scroll share an architecture. The neuroscience explains why checking the phone 96 times a day feels compulsive even to people who do not want it to.",
      "The Christian tradition has a word for the insatiable craving that dopamine systems can feed: pleonexia — the desire for more, the refusal of enough. Colossians 3:5 names it as idolatry, the same list as sexual immorality and impurity. The opposite is not asceticism for its own sake but what Paul calls contentment (autarkeia) — &ldquo;I have learned, in whatever state I am, to be content&rdquo; (Philippians 4:11). This contentment is learned, not given; it is formed against the grain of the cravings, through the practice of gratitude, limitation, and trust that what God provides is enough.",
      "The theology of enough applied to technology asks: what is the right amount? Not zero — that is Luddism. But not unlimited either. The practices of limit — scheduled phone time, app timers, device-free hours, designated rooms, and the sabbath — are not just willpower exercises. They are the formation of a soul that can say &ldquo;enough&rdquo; in the face of the machine that insists there is always more. Learning to put the phone down is a small exercise in the freedom from pleonexia that the gospel promises.",
    ],
  },
  {
    badge: "Marshall McLuhan",
    title: "The Medium Shapes the Message — What This Means for Digital Church",
    paragraphs: [
      "Marshall McLuhan&rsquo;s famous claim &mdash; &ldquo;the medium is the message&rdquo; — means that the form of communication shapes the content of what is communicated, independently of what the communicator intends. Television did not merely transmit the news; it transformed what news was, who delivered it, what counted as evidence, how long an idea could be held. The internet did not merely transmit information; it restructured attention, made everything comparative and interactive, collapsed authority, and rewired social dynamics at civilizational scale. Every new medium reshapes the soul of the people who use it.",
      "The implications for the church are significant and largely unexplored. When a sermon is streamed rather than preached to a gathered body, the medium has changed: the viewer is a passive consumer with a remote control, the preacher is a performer with a camera, the community is absent. These are not minor differences. The medium of the gathered body — physical presence, shared risk, mutual accountability, the Lord&rsquo;s Table — is not transferable to a screen without something essential being lost. This does not mean online ministry is worthless; it means that the church which mistakes the digital medium for an equivalent substitute for gathered worship has misunderstood what McLuhan was warning about.",
      "For parents, the McLuhan question is urgent: what are the media you are giving your children doing to them, independently of the content they are consuming? A child who spends four hours daily on TikTok is not only consuming particular videos; they are being formed by the rhythm of the feed, the brevity of attention demanded, the social comparison built into every view count. The medium is forming a kind of person. The question is whether that person is the person you are trying to raise, and whether the church is resourced to offer a counter-formation strong enough to compete.",
    ],
  },
  {
    badge: "Parenting",
    title: "Wisdom for Parents in the Digital Age",
    paragraphs: [
      "No generation of parents has faced this challenge before: raising children in an environment that was designed by the most sophisticated behavioral engineers in history to capture and hold their attention, with no established wisdom tradition to draw on and a culture that treats smartphone access as a developmental right. The data on adolescent mental health — particularly for girls — since the widespread adoption of social media is alarming, and researchers like Jonathan Haidt are now arguing that the smartphone itself, not merely its content, is a primary driver of the mental health crisis of the current generation.",
      "Christian wisdom for parents begins not with screen time rules but with a theology of formation. Andy Crouch&rsquo;s The Tech-Wise Family argues that the goal is not raising children who follow the rules about devices but forming children who have deep enough loves — for God, for people, for books, for nature, for embodied skill — that the phone is simply less interesting than the alternative. Formation requires investment: a family that reads together, eats together without screens, prays together, and inhabits the outdoors together is building a counter-culture that makes resistance more natural than white-knuckling restraint.",
      "Practically, the emerging consensus among thoughtful researchers and Christian practitioners includes: no smartphones before mid-to-late high school, strict parental controls before then, no social media before sixteen, phone-free bedrooms and dinner tables, and — crucially — adults modeling the behavior they expect. Children who watch parents scroll through dinner will not be reached by policies alone. The technology conversation in Christian families must be theological before it is tactical: it must begin with a vision of the good life and the kind of person worth becoming, not merely with rules about when the phone goes in the basket.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Technology Audit",
    summary:
      "Before any change is possible, you must see clearly what is currently happening. A week-long honest audit of technology use — how much, when, for what purpose, and at what cost.",
    steps: [
      "Enable screen time reporting on your phone and let it run for one week without changing anything. Do not look at the numbers until the week is over; you want a baseline, not a performance.",
      "At the end of the week, review with theological questions: does this pattern reflect the use of a tool, or the grip of a lord? What is it displacing — prayer, sleep, conversation, work, nature? What desires is it feeding?",
      "Identify the one or two applications that account for most of your non-productive screen time. These are the primary formation sites — the liturgies that are shaping your desires most aggressively.",
      "Bring the audit to prayer. Ask God to show you what you have been trusting, escaping, or craving through the screen. The audit is not for guilt; it is for clarity, which is the beginning of freedom.",
    ],
    anchor: "Romans 12:2 — Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
  },
  {
    number: "02",
    title: "Digital Sabbath",
    summary:
      "One full day per week without screens — not as punishment but as weekly practice of the trust and rest that the Sabbath command embodies.",
    steps: [
      "Choose the day before it arrives and prepare for it: answer necessary messages, download offline content if needed, communicate to your contacts that you will be unreachable. Make it a decision, not a drift.",
      "Fill the day with embodied alternatives: a long walk, a meal cooked and eaten slowly, face-to-face conversation, reading a physical book, attending worship, prayer, manual work. The sabbath needs positive content, not just absence.",
      "When the craving to check surfaces — and it will — let it become a prompt for prayer rather than a trigger for resentment. The craving is data: it tells you what you have been trusting, and the prayer redirects that trust.",
      "Evaluate after four weeks: what did you learn about what the phone was doing for you? What happened in the relationships, the prayer, and the rest that would not have happened with a screen present? Let the observations deepen the practice.",
    ],
    anchor: "Exodus 20:8-10 — Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is a Sabbath to the LORD your God.",
  },
  {
    number: "03",
    title: "Intentional Use Protocols",
    summary:
      "Technology used with intention rather than impulse — specific boundaries on when, where, and how devices are used, based on the prior question of what they are for.",
    steps: [
      "Designate device-free zones in your home: the bedroom, the dinner table, and — if you can sustain it — the first thirty minutes of the morning and the last thirty minutes before sleep. These hours are among the most formative of the day.",
      "Turn off all non-essential notifications. The notification is the attention economy&rsquo;s claim on your time — it says &ldquo;now&rdquo; without asking whether now is right. Recovering control of your attention begins with refusing the constant summons.",
      "Set specific windows for email and social media, and close them outside those windows. The always-open inbox is a form of servitude; the scheduled inbox is a tool used on your terms.",
      "Use technology for connection and creation, not only consumption. Call someone instead of scrolling. Write something instead of watching. Make something with your hands. The tool is properly a servant when it is deployed with a purpose you chose.",
    ],
    anchor: "1 Corinthians 6:12 — All things are lawful for me, but not all things are helpful. All things are lawful for me, but I will not be dominated by anything.",
  },
  {
    number: "04",
    title: "Counter-Formation Liturgies",
    summary:
      "Deliberately strengthening the practices that form the soul in directions opposite to what the attention economy is training — investing as much time and intentionality in the counter-liturgies as in the digital ones.",
    steps: [
      "Protect morning prayer before the phone is unlocked. The first thing you attend to in the morning sets the frame of the day. If it is the news or the feed, the frame is anxiety and reactivity. If it is Scripture and prayer, the frame is grounded orientation.",
      "Read long-form text — books, long essays, Scripture chapters — daily. The capacity for extended, nonlinear attention that long-form reading builds is exactly what digital media erodes. It is also the capacity that prayer, depth of relationship, and theological reflection require.",
      "Attend embodied worship with full physical presence: no devices during the service, full attention to the liturgy, the sermon, and the people around you. Let the gathered body be a weekly immersion in a different formation system.",
      "Practice gratitude as a counter to the comparison engine. A daily gratitude list — three specific things, not generic — retrains attention from what you lack (what the feed perpetually implies you lack) to what you have been given.",
    ],
    anchor: "Philippians 4:8 — Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable — think about these things.",
  },
  {
    number: "05",
    title: "Faithful AI Use",
    summary:
      "Developing personal and communal guidelines for using artificial intelligence tools faithfully — with transparency, integrity, and awareness of their limits and risks.",
    steps: [
      "Develop a personal honesty policy about AI-generated content: when do you disclose, and to whom? Writing with AI assistance without disclosure in contexts where original human authorship is assumed is a form of deception; name your practice clearly.",
      "Use AI as a research assistant and thinking aid, not as a replacement for the slow, difficult work of reading, writing, and thinking for yourself. The capacity for sustained reasoning is formed by sustained exercise of it; outsourcing it to AI atrophies the very capacity that discipleship requires.",
      "Ask, for any significant AI application: what does this do to the workers it may be displacing? What bias is embedded in the training data? Who profits, and who bears the cost? These are justice questions that follow the tool wherever it goes.",
      "Resist AI as pastoral substitute. AI can summarize a sermon series; it cannot sit with you at 2am when the anxiety is unbearable, cannot forgive you, cannot receive your confession and speak absolution. The irreducibly human presence of pastoral care is not a feature to be optimized away.",
    ],
    anchor: "Proverbs 4:23 — Keep your heart with all vigilance, for from it flow the springs of life.",
  },
  {
    number: "06",
    title: "Family Technology Covenant",
    summary:
      "A shared household agreement about technology use — built from a theology of formation rather than a list of rules, revisited regularly as children grow and circumstances change.",
    steps: [
      "Begin the conversation with vision, not restrictions. What kind of family do you want to be? What do you want to be doing together in five years? What will make that possible? Let the vision generate the boundaries, not the other way around.",
      "Build in the minimum viable practices as non-negotiables: phone-free dinner table, no devices in bedrooms after a set time, one screen-free day per week, adult modeling of every constraint placed on children. Rules that adults exempt themselves from do not form children; they produce resentment.",
      "Delay smartphone access as long as socially sustainable — Andy Crouch and the emerging research suggest delaying well past the current norm. A basic call-and-text phone is not a smartphone. The social cost of delay is real; the formation cost of early access is higher.",
      "Revisit the covenant annually, as children age and technology changes. The goal is not compliance but formation: children who understand why the limits exist and who are developing their own internalized theology of technology, not merely their parents&rsquo; rules.",
    ],
    anchor: "Deuteronomy 6:6-7 — These words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Jacques Ellul",
    role: "The Technological Society — France, 1954",
    quote:
      "Technique has taken over the whole of civilization. Death, procreation, birth — all submit to technical dominion. The human being is no longer in any sense the measure of things.",
    bio: "Jacques Ellul (1912-1994) was a French Reformed theologian and sociologist who spent his career diagnosing the totalizing power of what he called &ldquo;la technique.&rdquo; His magnum opus, The Technological Society, argued that modern technology was not merely a collection of tools but a self-propagating system that had become autonomous — defining human ends rather than serving them, and colonizing every domain of life including religion. Ellul did not oppose technology in principle; he opposed technological unconsciousness — the failure to ask what it costs. His 1948 book Presence in the Modern World argued that the church&rsquo;s calling was not to baptize modernity but to maintain its distinctiveness within it, to embody the revolutionary demands of the kingdom in ways that expose the false messianisms of every age. For Christians navigating the digital age, Ellul&rsquo;s work remains the most unsparing theological diagnosis of the water we swim in.",
  },
  {
    name: "Andy Crouch",
    role: "The Tech-Wise Family — Culture Making and Digital Limits",
    quote:
      "Our devices are not just tools — they are environments, and environments form us. The question is not just what we do with our devices but what our devices are doing to us.",
    bio: "Andy Crouch, former executive editor of Christianity Today and author of Culture Making and Strong and Weak, turned his attention to technology in The Tech-Wise Family (2017) and The Life We&rsquo;re Looking For (2022). His approach is characteristically positive: rather than a list of dangers to avoid, he offers a vision of the life worth living — embodied, relational, rooted in particular place and practice — and asks what technology serves that vision and what threatens it. His practical proposal (one hour per day, one day per week, one week per year device-free) is modest and concrete. His deeper argument is theological: we are &ldquo;thick&rdquo; beings — embodied, creative, relational, morally accountable — and technology that flattens that thickness in favor of convenience and stimulation is technology that is diminishing us. The Tech-Wise Family is the most practically useful Christian treatment of family technology culture currently available.",
  },
  {
    name: "Nicholas Carr",
    role: "The Shallows: What the Internet Is Doing to Our Brains",
    quote:
      "The Net is making us smarter, if we define intelligence by the ability to quickly find, categorize, and assess disparate pieces of information. But if we define intelligence by the ability to know a subject deeply and think about it with clarity and creativity, the Web may be making us dumber.",
    bio: "Nicholas Carr is not a Christian theologian but a technology critic whose 2010 book The Shallows: What the Internet Is Doing to Our Brains became essential reading for anyone thinking seriously about digital formation. Drawing on neuroscience, cognitive psychology, and cultural history, Carr argues that the internet is physically rewiring the brain — specifically, that the kind of sustained linear attention required for deep reading and creative thought is being replaced by a mode of rapid, shallow, skittery processing that the hyperlinked feed trains. The implications for Christian discipleship are direct: the same attentive capacity that extended Scripture reading, contemplative prayer, and serious theology require is the capacity the digital environment is eroding. Carr&rsquo;s work gives Christians the secular neuroscientific scaffolding for what their own tradition already knew: guard the mind, because what you attend to shapes who you become.",
  },
  {
    name: "Cal Newport",
    role: "Digital Minimalism and Deep Work — Georgetown University",
    quote:
      "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. As a consequence, the few who cultivate this skill and then make it the core of their working life will thrive.",
    bio: "Cal Newport, computer science professor and author of Digital Minimalism and Deep Work, approaches technology ethics from a secular productivity and philosophy-of-the-good-life angle — and his conclusions align remarkably well with Christian wisdom. His core argument in Digital Minimalism is that most people have adopted social media and digital tools with a &ldquo;maximalist&rdquo; philosophy (any potential benefit justifies adoption) when a &ldquo;minimalist&rdquo; philosophy is required (a tool must earn a place in your life by providing substantial benefit relative to its costs). Newport&rsquo;s cost-benefit analysis of platforms is secular; the Christian adds a further dimension — the cost to prayer, community, sabbath, and spiritual formation. His practical protocols (digital declutter, phone-free leisure, scheduled social media) translate directly into Christian practice, and his chapter on the case for solitude reads like spiritual direction.",
  },
  {
    name: "Sherry Turkle",
    role: "Alone Together — MIT Media Lab",
    quote:
      "We expect more from technology and less from each other. Networked, we are together, but so lessened are our expectations of each other that we can feel utterly alone.",
    bio: "Sherry Turkle is a clinical psychologist and professor at MIT who has spent forty years studying the human relationship with technology. Alone Together (2011) and Reclaiming Conversation (2015) document — through interviews with hundreds of young people and adults — the specific ways that digital communication is replacing embodied relationship and eroding the capacity for the sustained, vulnerable, uncomfortable face-to-face conversations that intimacy requires. Her central finding is counterintuitive: technology that promises connection is producing loneliness, because the simulation of presence it provides is just good enough to reduce the drive for real connection without satisfying it. For the church, Turkle&rsquo;s data is pastoral: the digital community that replaces gathered worship and in-person small groups is not solving loneliness — it is managing it at a level just below the threshold of crisis while the actual capacity for intimacy atrophies.",
  },
  {
    name: "Tony Reinke",
    role: "12 Ways Your Phone Is Changing You — Desiring God",
    quote:
      "Our phones have become mirrors of our souls, reflecting back to us the disordered loves and fractured attention that we carry into every other area of life. Before we can use them wisely, we must see them honestly.",
    bio: "Tony Reinke, a writer for Desiring God and author of 12 Ways Your Phone Is Changing You (2017), wrote the most theologically dense Christian treatment of smartphone culture available. Working through twelve specific changes — distracting us, isolating us, masking us, redefining our relationships, feeding our hunger for approval — Reinke shows how the smartphone functions as a spiritual director forming people in its own image rather than in the image of Christ. His framework is explicitly Augustinian: the phone exploits the disordered loves of the heart, and the solution is not primarily behavioral (rules about phone use) but doxological (having loves rightly ordered toward God). He is bracingly honest about his own struggles with his phone, which gives the book the authority of a confessor rather than a critic. Reinke&rsquo;s conclusion is not to discard the phone but to carry it as a Christian — with gratitude, purpose, and the daily reminder that it is a tool in the hands of a soul whose ultimate rest is not in the feed but in God.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
    reflection:
      "The command to nonconformity was written before digital technology existed — but it describes the Christian&rsquo;s situation in the attention economy with uncanny precision. The world has a pattern, and the pattern has enormous pressure behind it. Transformation requires the renewal of the mind, which requires attending to the right things. Renewal cannot happen while the mind is being conformed sixteen hours a day by algorithmically optimized feeds. The verse is not anti-technology; it is anti-unconsciousness.",
  },
  {
    reference: "1 Corinthians 6:12",
    text: "All things are lawful for me, but not all things are helpful. All things are lawful for me, but I will not be dominated by anything.",
    reflection:
      "Paul&rsquo;s principle is the most precise biblical technology ethic available: lawfulness is not the question. The question is helpfulness and domination. Is this technology helping me love God and neighbor, or is it merely permissible? And is it dominating me — has it become a compulsion rather than a choice? The Christian technology ethic begins with these two filters applied honestly. Most people have applied neither.",
  },
  {
    reference: "Philippians 4:8",
    text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
    reflection:
      "This verse is a content filter more demanding than any parental control software. It does not ask whether the content is legal or whether other people are watching it. It asks whether it is true, honorable, just, pure, lovely, commendable, excellent, praiseworthy. Run your media diet through these eight adjectives and let the audit be honest. The question is not what you are avoiding but what you are attending to — and what that attending is making you.",
  },
  {
    reference: "Proverbs 4:23",
    text: "Keep your heart with all vigilance, for from it flow the springs of life.",
    reflection:
      "The ancient Hebrew wisdom tradition knew that what enters the heart shapes what flows from it — and that the heart is not automatically well-guarded. It requires vigilance, the active watchfulness (nepsis) the desert fathers would later practice. The digital age has made the heart&rsquo;s entrance more porous than any previous technology. Keeping the heart now requires practices of restriction that earlier generations did not need — because earlier generations did not face an industrial-scale assault on attention.",
  },
  {
    reference: "Matthew 6:22-23",
    text: "The eye is the lamp of the body. So, if your eye is healthy, your whole body will be full of light, but if your eye is bad, your whole body will be full of darkness. If then the light in you is darkness, how great is the darkness!",
    reflection:
      "The eye Jesus describes is the organ of attention — what you fix your gaze on fills the whole body with light or darkness. The metaphor assumes that what we attend to does something to us, not merely something in front of us. The screen is a lamp, and what it illuminates, it illuminates into us. The question Jesus asks is whether the eye is healthy — whether attention is governed by wisdom — or whether we have handed the lamp to systems that profit from our darkness.",
  },
  {
    reference: "Exodus 20:8-10",
    text: "Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is a Sabbath to the LORD your God.",
    reflection:
      "The Sabbath command was given in the context of Egyptian slavery — to a people who had been worked without rest for generations. The digital age has created a new form of the same bondage: the always-on economy that never lets the worker rest, the inbox that fills on holy days, the notification stream that summons without regard to Sabbath. The command to remember is not sentimental; it is structural. Sabbath must be built in — defended, scheduled, prepared for — because the world will not give it to you.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "cxivRPMeAGg", title: "The Attention Economy and the Christian Soul" },
  { videoId: "5HbYScltf1c", title: "Andy Crouch: Technology and the Tech-Wise Family" },
  { videoId: "f5AuH2m0H-Q", title: "Jacques Ellul and the Technological Society" },
  { videoId: "Vq4d3K64UlQ", title: "AI and the Image of God — A Theological Conversation" },
  { videoId: "EBwk6gW_Jhs", title: "Digital Sabbath as Counter-Formation" },
  { videoId: "l6X-oLYpB9c", title: "Tony Reinke: 12 Ways Your Phone Is Changing You" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianTechnologyEthicsPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<TECEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [technologyStruggle, setTechnologyStruggle] = useState("");
  const [intentionalUse, setIntentionalUse] = useState("");
  const [digitalSabbath, setDigitalSabbath] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as TECEntry[]);
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
    if (!technologyStruggle.trim() || !intentionalUse.trim()) return;
    const entry: TECEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      technologyStruggle: technologyStruggle.trim(),
      intentionalUse: intentionalUse.trim(),
      digitalSabbath: digitalSabbath.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTechnologyStruggle("");
    setIntentionalUse("");
    setDigitalSabbath("");
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
              Technology Ethics
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Digital Disciples: Christians and Technology Ethics
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              We carry devices more powerful than the computer that sent Apollo to the moon, and we
              have largely inherited them without a theology. Jacques Ellul warned in 1954 that
              technique becomes its own justification. James K.A. Smith argues that our desires are
              formed by our practices, not our beliefs. The question is not whether technology will
              form us — it will. The question is whether we will be formed as{" "}
              <em style={{ color: TEXT }}>disciples</em>, with intention and theological clarity, or
              simply by default.
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
                &ldquo;Do not be conformed to this world, but be transformed by the renewal of your
                mind, that by testing you may discern what is the will of God, what is good and
                acceptable and perfect.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>Romans 12:2</p>
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
                Ten theological studies on technology, the soul, and faithful digital discipleship —
                from Ellul&rsquo;s warning about technique to the practical wisdom required for
                parenting in the smartphone age.
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
                  Ellul&rsquo;s warning about technique, Smith&rsquo;s liturgy of desire, the
                  attention economy&rsquo;s assault on the soul, AI&rsquo;s challenge to the imago
                  Dei, McLuhan&rsquo;s medium-shaping-message — these are not unrelated observations
                  but facets of a single crisis: we are being formed by our digital environments
                  faster than we are being formed by the Word, the sacraments, and the gathered
                  community. The answer is not flight but counter-formation. Explore how the Sabbath
                  command speaks to rest and limit in our{" "}
                  <Link href="/sabbath" style={{ color: BLUE, textDecoration: "underline" }}>
                    Sabbath guide
                  </Link>
                  , or consider how desire is ordered toward God in{" "}
                  <Link href="/christian-prayer" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Prayer
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
                Faithful technology use requires more than good intentions — it requires structure.
                These six practices build the specific boundaries, habits, and counter-formations
                that make discipleship possible in a distracted age.
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
                  A word about willpower
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  These practices are not primarily willpower exercises. Willpower is finite and will
                  fail against a system engineered by the best behavioral psychologists in the world.
                  The goal is to build structures — in your home, your schedule, your community, your
                  family — that make faithful use the path of least resistance rather than the path
                  of greatest effort. The practices that last are the ones that are built in, not
                  the ones that require daily white-knuckling. Use the Journal tab to track where the
                  resistance comes from and what it is telling you.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six thinkers — theologians, psychologists, and cultural critics — who have done the
                work of seeing clearly what our digital environment is doing to the human soul.
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
                Six passages that speak with uncanny precision to the formation challenges of the
                digital age — written millennia before the internet and more relevant for it.
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
                  Pray each verse with your phone face-down in another room. Begin with
                  adoration (&ldquo;Father, you are the LORD of my attention, not the feed&rdquo;),
                  move to confession (&ldquo;I have handed my mind to systems that do not love me,
                  and called it connection&rdquo;), and close with petition (&ldquo;Renew my mind
                  today — teach me to attend to what is true, honorable, just, pure, lovely&rdquo;).
                  The physical act of leaving the phone behind while you pray is itself a liturgy of
                  freedom.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for weekly reflection: a technology struggle named honestly, an
                intentional and purposeful use of tech this week, and a digital sabbath practice
                attempted. Entries are saved privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  This week&rsquo;s technology reflection
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="tec-struggle" style={labelStyle}>
                    A technology struggle named honestly
                  </label>
                  <textarea
                    id="tec-struggle"
                    value={technologyStruggle}
                    onChange={(e) => setTechnologyStruggle(e.target.value)}
                    placeholder="What pulled you? Compulsive scrolling, comparison, late-night phone use, distracted presence with people, something else?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="tec-intentional" style={labelStyle}>
                    An intentional and purposeful use of tech this week
                  </label>
                  <textarea
                    id="tec-intentional"
                    value={intentionalUse}
                    onChange={(e) => setIntentionalUse(e.target.value)}
                    placeholder="A specific, chosen use with a purpose: a meaningful conversation, a creative project, a resource that helped someone, a connection made well"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="tec-sabbath" style={labelStyle}>
                    Digital sabbath practice attempted
                  </label>
                  <textarea
                    id="tec-sabbath"
                    value={digitalSabbath}
                    onChange={(e) => setDigitalSabbath(e.target.value)}
                    placeholder="What did you fast from, and what did you notice? Even one hour matters — name it."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!technologyStruggle.trim() || !intentionalUse.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !technologyStruggle.trim() || !intentionalUse.trim() ? BORDER : BLUE,
                    color:
                      !technologyStruggle.trim() || !intentionalUse.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !technologyStruggle.trim() || !intentionalUse.trim()
                        ? "not-allowed"
                        : "pointer",
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
                      Name one struggle, one intentional use, and one digital fast — and do the fast
                      before you come back. The journal will be waiting.
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
                          <span style={{ color: MUTED, fontSize: "0.8rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label="Delete entry"
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
                            The struggle
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.technologyStruggle}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.digitalSabbath ? 10 : 0 }}>
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
                            Intentional use
                          </span>
                          <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                            {entry.intentionalUse}
                          </p>
                        </div>

                        {entry.digitalSabbath && (
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
                              Digital sabbath
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.digitalSabbath}
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
                Teaching and conversation on technology, the Christian soul, digital sabbath, and
                faithful engagement with AI — good companions to the Theology and Practices tabs.
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
              Disciples in a distracted age
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The gospel has always been countercultural, and in the digital age the countercultural
              demand is precisely the capacity for sustained attention: to God, to neighbor, to the
              long obedience of discipleship that cannot be compressed into a notification. The
              Christian who practices digital sabbath, guards the heart, limits the feed, and shows
              up in person for the gathered body is not being nostalgic. They are being faithfully
              human — embodied, attentive, present — in exactly the ways the kingdom requires and
              the attention economy most aggressively discourages.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the practice of unhurried attention in{" "}
              <Link href="/christian-prayer" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Prayer
              </Link>
              , deepen the Sabbath theology in our{" "}
              <Link href="/sabbath" style={{ color: BLUE, textDecoration: "underline" }}>
                Sabbath guide
              </Link>
              , or consider how formation happens through community in{" "}
              <Link href="/church" style={{ color: BLUE, textDecoration: "underline" }}>
                The Church
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
