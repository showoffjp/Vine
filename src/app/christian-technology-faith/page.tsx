"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";
const PURPLE = "#6B4FBB";

const TABS = [
  "Theology of Technology",
  "Social Media & Soul",
  "AI & Imago Dei",
  "Screen Addiction",
  "Church & Technology",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface TabSection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

const theologyTechSections: TabSection[] = [
  {
    badge: "Genesis 1:28",
    title: "The Cultural Mandate: Technology as Sub-Creation",
    paragraphs: [
      "Genesis 1:28 gives humanity a threefold mandate: &ldquo;Fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth.&rdquo; This cultural mandate &mdash; fill, subdue, rule &mdash; is not a license for exploitation but a commission for cultivation. Humans are made in God&rsquo;s image (imago Dei) and called to extend God&rsquo;s creative and ordering work in the world. Technology is part of this vocation: the plow, the printing press, the hospital, the smartphone are all extensions of human beings fulfilling their God-given role as sub-creators.",
      "Andy Crouch&rsquo;s culture-making framework (Culture Making, 2008) argues that humans are fundamentally makers of culture: everything humans do either cultivates existing cultural goods or creates new ones. The question for any technology is not &ldquo;is this sacred or secular?&rdquo; but &ldquo;does it cultivate and create genuine human flourishing, or does it diminish it?&rdquo; Crouch distinguishes between creators and consumers: the tech-wise person is one who makes more than she consumes, and who understands what any given technology makes possible and what it makes impossible.",
      "The cultural mandate establishes a positive theology of technology: at its best, technology is humans doing what they were made to do &mdash; bringing order, beauty, productivity, and care into the world God created. The question is never simply whether to engage technology but how to engage it wisely, as those accountable to the Creator for the good of creation.",
    ],
    callout: {
      label: "Andy Crouch",
      text: "&ldquo;The question is not whether to engage culture but how to engage it &mdash; as those who are both made by culture and called to make culture in ways that reflect the image of the God who made the world.&rdquo; &mdash; Culture Making (2008)",
    },
  },
  {
    badge: "Jacques Ellul",
    title: "The Technological Society: When Technology Becomes Autonomous",
    paragraphs: [
      "French philosopher and theologian Jacques Ellul issued the most searching Christian critique of technology in the twentieth century. In The Technological Society (1954, translated 1964), Ellul argued that technique &mdash; the drive to apply rational efficiency to all areas of life &mdash; had escaped human control and was shaping human beings rather than being shaped by them. Technology was no longer a neutral tool in human hands; it had become a self-perpetuating system with its own logic, its own values (efficiency, speed, growth), and its own claim on human allegiance.",
      "Ellul&rsquo;s analysis is prophetic: he described in 1954 what every parent feels acutely today when they watch their children&rsquo;s attention hijacked by algorithms designed to maximize engagement. The smartphone&rsquo;s pull is not neutral; it is the product of engineers whose explicit goal is to make the device as compelling as possible. The technology is not merely a tool the user wields; it is a system that shapes the user&rsquo;s desires, attention, and identity. This is what Ellul called technique becoming autonomous &mdash; operating according to its own logic regardless of the user&rsquo;s intention.",
      "Albert Borgmann&rsquo;s &ldquo;device paradigm&rdquo; extends Ellul&rsquo;s analysis: modern devices hide their machinery and deliver commodities without the engagement, skill, and relationship that older technologies required. The fireplace required chopping wood, tending the fire, gathering the family around it &mdash; the practice of warmth. The furnace delivers heat as a commodity. The difference is not only convenience; it is the loss of the practices that formed persons and communities. The Christian call to be makers not merely consumers is a call to resist the device paradigm&rsquo;s tendency to convert all of life into passive commodity consumption.",
    ],
  },
  {
    badge: "Theology",
    title: "Is Technology Neutral? The Christian Answer",
    paragraphs: [
      "The question &ldquo;is technology neutral?&rdquo; receives three common answers. The instrumentalist says yes &mdash; a hammer is a hammer; what matters is how you use it. The determinist says no &mdash; every technology carries embedded values and reshapes its users regardless of intent. The Christian answer is more nuanced: technology is not neutral (every tool shapes its user and its social context in ways beyond mere function) but neither is it deterministic (human moral agency, sanctified by the Spirit, can resist and redirect technology&rsquo;s tendencies).",
      "Marshall McLuhan&rsquo;s famous claim that &ldquo;the medium is the message&rdquo; points in the right direction: the form of communication shapes the content and the audience independently of what specific content is communicated. Television trained audiences for passivity and entertainment in ways that resisted the sustained argument a sermon or a book requires. Social media trains audiences for speed, skimming, performance, and outrage. Neil Postman&rsquo;s Amusing Ourselves to Death (1985) applied this to religion: the church that adopts entertainment&rsquo;s medium is on the way to adopting entertainment&rsquo;s content.",
      "The Christian approach is neither naive technophilia (embrace everything; it&rsquo;s just a tool) nor paralyzing technophobia (all technology is dangerous; return to the pre-industrial). It is discerning engagement: using technology as a servant of the kingdom while resisting its tendency to become a master. This requires asking Crouch&rsquo;s questions of every technology we adopt: what does this make possible? What does it make impossible? What practices does it displace? What practices does it require? Is the net effect on human flourishing and kingdom faithfulness positive or negative?",
    ],
    callout: {
      label: "The question",
      text: "Before adopting any significant new technology, ask: What does this make possible? What does it make impossible? Who designed it and toward what ends? What practices does it displace? What does it do to my attention, my relationships, my capacity for prayer?",
    },
  },
];

const socialMediaSections: TabSection[] = [
  {
    badge: "Attention Economy",
    title: "The Business Model That Shapes the Soul",
    paragraphs: [
      "Social media platforms are not free &mdash; they are paid for by attention, which is sold to advertisers. The business model requires maximizing engagement time. Engagement is maximized by content that provokes strong emotion: outrage, fear, envy, and desire perform algorithmically better than nuance, gratitude, or quiet faithfulness. The product is not the platform; the product is you &mdash; your attention, your behavioral data, your desires shaped by repeated exposure to specific content. Understanding this is the prerequisite for using social media wisely.",
      "The research on social media and mental health is sobering, especially for adolescents. Studies by Jean Twenge and Jonathan Haidt document the correlation between smartphone adoption (roughly 2012) and sharp increases in teen depression, anxiety, loneliness, and self-harm &mdash; especially among girls. Instagram&rsquo;s own internal research, leaked in 2021, showed that the platform made body image worse for one in three teenage girls. The attention economy was designed to be addictive, and it is; the slot-machine mechanics of variable reward &mdash; sometimes you get likes, sometimes you don&rsquo;t &mdash; produce dopamine responses similar to gambling.",
      "Cal Newport&rsquo;s Digital Minimalism makes the Christian case for radical reconsideration of social media use: if you cannot give a compelling positive reason for having a platform account &mdash; not just &ldquo;it keeps me connected&rdquo; but a specific, named benefit that cannot be achieved otherwise &mdash; the default should be absence rather than presence. The burden of proof belongs on engagement, not on abstinence. This is not legalism; it is the wisdom of a person who has understood what is at stake.",
    ],
    callout: {
      label: "The research",
      text: "The average American spends 2.5 hours per day on social media &mdash; 17.5 hours per week. This is more than twice the combined time the average Christian spends in prayer and Scripture reading. This is a stewardship question before it is a technology question.",
    },
  },
  {
    badge: "James 3; Galatians 6:4",
    title: "The Tongue, the Keyboard, and the Comparison Trap",
    paragraphs: [
      "James 3&rsquo;s theology of the tongue &mdash; &ldquo;The tongue is a fire, a world of unrighteousness&hellip; it sets on fire the entire course of life, and set on fire by hell&rdquo; (3:6) &mdash; applies to the keyboard with increased force. The tongue&rsquo;s fire spreads quickly in embodied community; the keyboard&rsquo;s fire spreads instantaneously to thousands, with no tone of voice, no facial expression, no relational context to soften or clarify. The person who posts in anger reaches farther and faster than the tongue ever could, and the words cannot be recalled.",
      "Galatians 6:4 addresses the comparison trap: &ldquo;But let each one test his own work, and then his reason to boast will be in himself alone and not in his neighbor.&rdquo; Social media makes everyone&rsquo;s curated best life continuously visible &mdash; their highlight reel set against your behind-the-scenes. Research consistently shows that passive consumption of others&rsquo; content correlates with envy, depression, and lower self-esteem. The comparison trap is not a character weakness; it is a feature of the product. The antidote is the spiritual discipline of contentment (Phil 4:11) and the cultivation of genuine community that does not require curation.",
      "Digital outrage and the Christian response: Ephesians 4:26 &mdash; &ldquo;Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil.&rdquo; Outrage performs well on social media. Christian accounts can build large followings by being perpetually outraged about cultural decline, theological error, or political opponents. But &ldquo;the anger of man does not produce the righteousness of God&rdquo; (James 1:20). Before posting anything, ask: Is this true? Is it necessary? Is it kind? Would I say this to the person&rsquo;s face? Does this communicate the love of Christ or perform my cultural identity?",
    ],
  },
  {
    badge: "Discipleship",
    title: "When Social Media Becomes a Kingdom Tool vs. When It Consumes",
    paragraphs: [
      "Social media is not unredeemable. The Vine exists online; so does the work of innumerable ministries, missionaries, and ordinary Christians who use the digital space to share the gospel, encourage the suffering, and build genuine community across distance. The internet is a mission field &mdash; an unreached people group in the sense that billions of people spend hours each day in a context that is largely untouched by the gospel. Faithful Christian presence online matters.",
      "The distinction is between using social media as a tool and being used by it. The tool-user has defined purposes, set limits, and can disengage without anxiety. The platform captures the person whose identity, emotional state, and sense of worth are mediated through engagement metrics. The formation question James K.A. Smith asks in You Are What You Love is exactly right: what desires are the algorithms forming in you? Are they forming you toward curiosity and love, or toward comparison and outrage?",
      "Practical markers of healthy social media use: you can leave for a week without anxiety; your offline relationships are richer than your online ones; you post for an audience of One before you post for any other audience; your feed leaves you more grateful and more curious, not more anxious and more angry; you know the people you are reaching and you are accountable to real community for your public words. Social media in service of the kingdom looks different from social media in service of personal brand or tribal identity.",
    ],
  },
];

const aiSections: TabSection[] = [
  {
    badge: "Technical Reality",
    title: "What AI Actually Is: Pattern Recognition, Not Consciousness",
    paragraphs: [
      "Current artificial intelligence &mdash; large language models (LLMs), image generators, voice synthesis tools &mdash; are pattern-recognition and statistical prediction systems trained on massive datasets. They generate plausible text by predicting which words are likely to follow which other words, based on patterns in their training data. They are extraordinarily capable at mimicking human language, reasoning, and creativity. They are not conscious. They do not believe, intend, understand, or feel anything. The appearance of understanding is the product of statistical pattern-matching at unprecedented scale.",
      "This technical clarification matters theologically. The temptation to anthropomorphize &mdash; to project personhood, consciousness, or moral agency onto systems that convincingly mimic it &mdash; is real and strong. People have reported feeling comforted by AI chatbots, formed genuine emotional attachments to them, and consulted them on matters of spiritual significance. The system that responds with apparent empathy and wisdom is generating statistically plausible empathy-shaped text; it is not a person who cares about you. Confusing the two is not a technology error; it is an anthropological error.",
      "The specific features that distinguish human persons made in God&rsquo;s image from AI systems: consciousness (there is something it is like to be a human; there is nothing it is like to be an LLM); moral agency (humans are accountable for their choices; AI systems are not moral agents); relational love (humans are made for covenant relationship with God and with other persons; AI can only simulate relationship); worship capacity (humans are made to know, love, and glorify God; AI can generate worship-sounding text but cannot worship). These distinctions are not arbitrary; they are what it means to be made in God&rsquo;s image.",
    ],
    callout: {
      label: "Key distinction",
      text: "AI mimics intelligence; it does not possess it. The difference matters because consciousness, moral accountability, relational love, and capacity for worship are what make persons persons &mdash; and no amount of statistical sophistication can generate those from pattern-matching alone.",
    },
  },
  {
    badge: "Imago Dei",
    title: "What AI Challenges Us to Recover About Human Uniqueness",
    paragraphs: [
      "AI raises the theological question that much of modern culture has already answered wrongly: what is a human being? The reductionist answer &mdash; a biological machine for processing information and maximizing preference satisfaction &mdash; has no principled objection to AI personhood. If humans are just sophisticated information processors, then sufficiently sophisticated AI could in principle be a person too. The Christian answer is fundamentally different: humans are embodied image-bearers of a personal, relational God, made for covenant with him and with each other.",
      "The risks AI poses are real and deserve Christian ethical engagement: deepfakes that generate false testimony (bearing false witness at industrial scale); surveillance systems that enable authoritarian control of populations; autonomous weapons that remove human moral agency from decisions about lethal force; job displacement that strips communities of dignifying work without providing alternatives; the aggregation of personal data into profiles that enable manipulation of desires and beliefs at scale. Christians committed to the dignity of persons made in God&rsquo;s image have both theological and practical reasons to engage these risks seriously.",
      "The blessing of AI as a tool is equally real: medical diagnosis, translation of Scripture into minority languages, accessibility tools for the disabled, educational resources for underserved populations, research that accelerates solutions to disease and poverty. The Christian call is not to oppose AI but to engage it as a tool for human flourishing while resisting the anthropological reductionism that would make the tool into a person and the person into a tool. &ldquo;What is man that you are mindful of him, and the son of man that you care for him?&rdquo; (Ps 8:4). The dignity of human persons is theological, not technical.",
    ],
  },
  {
    badge: "Ethics",
    title: "The Christian Call: Engage AI Ethically and Wisely",
    paragraphs: [
      "Practical Christian engagement with AI begins with the recognition that AI is a tool that will be used &mdash; wisely or foolishly, for kingdom purposes or against them &mdash; and the question is whether Christians will be present in those conversations or absent from them. Absence from technological discourse does not protect Christian values; it cedes the shaping of technology to those without Christian convictions about human dignity, moral accountability, or the purpose of creation.",
      "Specific ethical commitments for Christians engaging AI: transparency (do not use AI to create false impressions of human presence, relationship, or authorship); truthfulness (AI generates plausible text, not necessarily true text &mdash; verify everything); protection of the vulnerable (use AI&rsquo;s capabilities to serve those who cannot afford expensive human services, while resisting the use of AI to replace the human presence the vulnerable most need); stewardship of data (personal and pastoral information is entrusted to us in confidence &mdash; it should not be entered into AI systems without explicit consent); accountability (AI systems can perpetuate and amplify bias &mdash; Christians should advocate for auditable, accountable AI development).",
      "The deepest Christian contribution to AI ethics may be simply the insistence that persons are persons &mdash; that the elderly person who lives alone and has begun talking to an AI companion deserves a human neighbor, not just a better chatbot; that the teenager who has learned to prefer the always-agreeable AI friend to the messy, challenging human friendship is being formed toward isolation rather than community; that the church which outsources pastoral care to AI is betraying its incarnational vocation. The incarnation is the anti-virtual: God came in a body, to a particular place, to particular people. Embodied presence is not optional for Christian ministry.",
    ],
  },
];

const screenAddictionSections: TabSection[] = [
  {
    badge: "Science",
    title: "Screen Addiction: Dopamine, Variable Rewards, and the Slot Machine",
    paragraphs: [
      "The science of screen addiction begins with dopamine &mdash; the neurotransmitter involved in anticipation, reward, and motivation. Variable reward schedules &mdash; sometimes you get a reward, sometimes you don&rsquo;t, and you can&rsquo;t predict which &mdash; are the most effective mechanism for producing compulsive behavior known to behavioral science. They are the mechanism behind slot machines. They are also the mechanism behind every social media notification system: sometimes a post gets likes, sometimes it doesn&rsquo;t. The uncertainty is not a design flaw; it is a feature. Former executives at major tech companies, including Tristan Harris and Aza Raskin (who coined the infinite scroll), have confirmed that these mechanisms were designed with explicit awareness of their addictive properties.",
      "Research on phone-free bedrooms is consistent and striking: adolescents who sleep with their phones in their rooms sleep less, sleep worse, and report worse mental health outcomes than those who keep their phones outside the bedroom. The mere presence of the phone on a desk (even face-down and silent) measurably reduces available cognitive bandwidth. This is not weak-willed teenagers failing to control themselves; it is a product engineered to produce psychological dependence, placed in the bedroom where it does its most destructive work during the developmental years when habits of attention and rest are being formed.",
      "The formation of children in a screen-saturated world requires the kind of intentionality the broader culture will not provide. Andy Crouch&rsquo;s The Tech-Wise Family argues that the most countercultural thing a Christian family can do is create physical and temporal environments in which technology is routinely absent: bedrooms phone-free, mornings screen-free, at least one day per week unplugged. Not because technology is evil but because developing persons need extended stretches of unmediated reality &mdash; boredom, embodied play, face-to-face conversation, silence &mdash; to form the attentional capacities that deep learning, prayer, and genuine relationship require.",
    ],
  },
  {
    badge: "Sabbath Theology",
    title: "Digital Sabbath: Rest from the Tyranny of Stimulation",
    paragraphs: [
      "The Sabbath commandment (Exodus 20:8-11) was given to people who would otherwise never stop working. Its logic is not productivity optimization &mdash; it is liberation from the tyranny of unending production and obligation. &ldquo;Remember the Sabbath day, to keep it holy. Six days you shall labor, and do all your work, but the seventh day is a Sabbath to the LORD your God. On it you shall not do any work.&rdquo; The Sabbath is God&rsquo;s gift of enforced rest to a people who had learned in Egypt that their worth was their output.",
      "Applied to digital life, the Sabbath principle is direct: if you cannot stop, you are enslaved &mdash; to your email, your notifications, your social media feed, the incoming demands that constitute the digital equivalent of Pharaoh&rsquo;s brick quota. The digital Sabbath is one day (or one evening, or one hour of morning) of intentional, structured disconnection &mdash; not for productivity optimization but for the recovery of the self that exists apart from its online performance. The person who cannot be offline without anxiety has found a new Pharaoh.",
      "Practical digital sabbath practices vary by household and season: some families observe phone-free Sundays; some maintain phone-free bedrooms for the whole family; some families have a physical &ldquo;phone hotel&rdquo; where devices sleep outside the bedroom. The specific form matters less than the theology behind it: we are not what we produce or perform online; we are beloved creatures of a God who rested and calls us to rest with him. The digital Sabbath is a weekly declaration that the world will not fall apart if we are unavailable for 24 hours, and that we are more than our digital presence.",
    ],
  },
  {
    badge: "Household Formation",
    title: "Household Screen Covenants and the Formation of Children",
    paragraphs: [
      "The Tech-Wise Family&rsquo;s central argument: the family is a formative institution, and formation is always happening &mdash; the question is whether it is intentional or accidental. Every household has a technology culture; few families have ever explicitly discussed what that culture should be. A household screen covenant is a written (or verbally explicit) set of shared commitments about technology use &mdash; not rules imposed by parents on children but agreements that the whole family owns. The process of making the covenant is itself formative: it requires naming what we value, what we fear, and what we are trying to protect.",
      "Practical elements of a household covenant might include: charging locations (phones charged outside bedrooms); time limits (specific hours when screens are off &mdash; meals, mornings, Sundays); content standards (what kinds of content are permitted and by whom); conversation norms (phones off and away during family meals and conversations); and accountability structures (how violations are named and addressed without shame). Andy Crouch emphasizes that the adults must lead by example &mdash; a household screen covenant that applies only to children while parents scroll through dinner is a covenant that teaches hypocrisy.",
      "The theological frame for raising children in a screen-saturated world is the Shema: &ldquo;You shall love the LORD your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise&rdquo; (Deut 6:5-7). This is whole-life, whole-day formation &mdash; the kind of formation that cannot happen when every free moment is occupied by a screen. The formation of the next generation toward God requires the creation of extended stretches of time in which that formation can occur.",
    ],
    callout: {
      label: "Andy Crouch",
      text: "&ldquo;The most important thing any family can do for their faith is to ruthlessly eliminate hurry from your life.&rdquo; Screens are the primary mechanism by which modern families eliminate unhurried time. Removing them creates the conditions in which formation can happen.",
    },
  },
];

const churchTechSections: TabSection[] = [
  {
    badge: "Church History",
    title: "The Church Has Always Adopted New Communication Technologies",
    paragraphs: [
      "The Gutenberg press (c. 1440) is the most dramatic historical example of new communication technology transforming the church &mdash; for good and ill. Luther&rsquo;s 95 Theses spread across Germany within weeks of being posted, not because Luther mailed copies to every city, but because the printing press had created a distribution infrastructure that made rapid, wide dissemination possible for the first time. The Reformation was, among other things, a media revolution: Scripture in the vernacular, printed and distributable, placed the text in the hands of ordinary believers. The same press that enabled Protestant reform also enabled the mass production of propaganda, heresy, and pornography.",
      "Earlier technologies shaped the church&rsquo;s communication in equally foundational ways: the codex (bound book) replaced the scroll and made portable Scripture possible; the development of musical notation enabled the transmission and standardization of liturgical music; the microphone and amplification expanded the reach of the spoken word and made the megachurch architecturally and acoustically conceivable. None of these were neutral; each reshaped what the church could do and what it could not do. The church that adopted the printing press gained reach and lost some aspects of oral tradition. The church that adopted amplification gained scale and lost some aspects of intimate acoustic community.",
      "The principle is consistent across history: the church wisely adopts new communication technologies for the purpose of spreading the gospel and building community, while remaining alert to the ways those technologies reshape the message and the community. Projection screens in worship, live streaming, podcast sermons, social media outreach &mdash; each requires the same theological discernment: what does this make possible? What does it make impossible? What aspects of the gathered, embodied community are we risking by outsourcing this function to technology?",
    ],
  },
  {
    badge: "Ecclesiology",
    title: "Online Church: What It Is and Is Not",
    paragraphs: [
      "The COVID-19 pandemic forced every church into the question of online worship; the responses are still being processed. Can you have genuine koinonia (fellowship, communion, participation) online? The New Testament word koinonia &mdash; used in Acts 2:42, 1 Corinthians 10:16, Philippians 1:5 &mdash; carries the sense of sharing, participation, and common life. It involves presence: &ldquo;that which we have seen with our eyes, which we looked upon and have touched with our hands&rdquo; (1 John 1:1) is the foundation of apostolic witness and community.",
      "Online church can provide: teaching, music, prayer, community connections, pastoral care conversations, small group discussions, and genuine fellowship that transcends geographic limitation. For the homebound elderly, the isolated missionary, the person in a region with no gospel witness, online church is a genuine grace. What online church cannot fully replicate: the Lord&rsquo;s Table (the body and blood of Christ shared physically as the embodied community gathers); baptism as public, embodied profession before a gathered community; the pastoral care that requires physical presence &mdash; sitting with the grieving, anointing the sick, placing a hand on the shoulder of the broken.",
      "The danger the church faces is not adopting technology but allowing technology to become a substitute for embodied gathering rather than a supplement to it. The church that outsources community to digital platforms &mdash; where connection is frictionless, commitment is low, and the hard work of bearing one another&rsquo;s burdens in physical proximity is optional &mdash; is not the church the New Testament describes. The incarnation is the anti-virtual: God did not send a message; he sent his Son in a body. The church&rsquo;s ministry is irreducibly embodied.",
    ],
    callout: {
      label: "The incarnation principle",
      text: "The Word became flesh (John 1:14) &mdash; not a message, not a broadcast, not a digital presence. The incarnation is the theological ground for the irreducibility of embodied presence in Christian ministry. Technology extends reach; it cannot substitute for presence.",
    },
  },
  {
    badge: "Mission",
    title: "The Digital Mission Field and the Theology of Embodied Presence",
    paragraphs: [
      "The internet is a genuine mission field. Billions of people spend hours each day in a digital context that is largely unengaged by the gospel. The person who types &ldquo;why does God allow suffering?&rdquo; into a search engine at 2am has disclosed a spiritual need; whether the first response they encounter is the gospel or a dismissive atheist forum depends on whether Christians have made thoughtful, beautiful, substantive digital content available. The Vine&rsquo;s existence is a response to this mission field: a resource for the person searching in the dark for something true.",
      "The digital mission field requires Christian presence in the form of genuine, costly, excellent content &mdash; not the hollow inspirational content that performs spirituality for social media but the kind of substantive engagement with real questions that treats the searcher as an intelligent person capable of grappling with difficult truth. The church that produces mediocre digital content has decided that the people searching the internet deserve less than the people sitting in the pews. This is not faithfulness; it is cultural condescension.",
      "The theology of embodied presence does not compete with digital mission; it frames and limits it. Digital outreach exists to move people toward embodied community: the small group, the Sunday gathering, the pastoral relationship, the covenant commitments of church membership. The goal of digital engagement is not digital community but the embodied community the digital points toward. A person who has been genuinely reached by the gospel online and who then chooses perpetual digital church over embodied covenant community has not yet arrived at the destination the digital was pointing toward. The Word became flesh; the church, his body, must be flesh too.",
    ],
  },
];

interface VideoItem {
  videoId: string;
  title: string;
}

const videoItems: VideoItem[] = [
  { videoId: "CLiRdDg_SQE", title: "Tim Keller on Technology and Culture" },
  { videoId: "s8wjZKuLDJU", title: "Andy Crouch on the Tech-Wise Family" },
  { videoId: "XLaLTDGJBHg", title: "AI and What It Means to Be Human" },
];

export default function ChristianTechnologyFaithPage() {
  const [tab, setTab] = useState<Tab>("Theology of Technology");
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
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
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
            color: TEAL,
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
              background: "rgba(13, 148, 136, 0.07)",
              border: `1px solid rgba(13, 148, 136, 0.25)`,
              borderRadius: 8,
              padding: "0.9rem 1.1rem",
            }}
          >
            <span
              style={{
                color: TEAL,
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
              color: TEAL,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "0.6rem",
            }}
          >
            Faith in the Digital Age
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Christian Faith and Technology
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Technology is not a neutral tool &mdash; it shapes its users. From the theology of the
            cultural mandate (Genesis 1:28) to Jacques Ellul&rsquo;s warning about autonomous
            technique, from the attention economy&rsquo;s hold on the soul to AI&rsquo;s challenge
            to what it means to be human: this guide equips Christians to engage technology wisely
            and faithfully in the digital age.
          </p>
          <div
            style={{
              marginTop: "1.75rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${TEAL}`,
              borderRadius: 12,
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
              &ldquo;The real question is not whether to engage technology but how &mdash; as
              those who are accountable to the Creator for what we make and what we let be made of
              us.&rdquo;
            </p>
            <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>
              Andy Crouch, Culture Making
            </p>
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

        {/* Theology of Technology */}
        {tab === "Theology of Technology" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              A Christian theology of technology begins with the cultural mandate: humans are
              made to make things. But the Fall, Jacques Ellul&rsquo;s analysis of autonomous
              technique, and Albert Borgmann&rsquo;s device paradigm all warn that technology
              tends to outrun human wisdom and shape its users in ways they did not choose.
            </p>
            {renderSections(theologyTechSections)}
          </section>
        )}

        {/* Social Media & Soul */}
        {tab === "Social Media & Soul" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Social media platforms are designed to capture and monetize attention through
              mechanisms that the behavioral sciences have shown to be genuinely addictive.
              The theology of the tongue, the comparison trap, digital outrage, and the
              Christian case for digital minimalism &mdash; all are live questions for
              disciples navigating the attention economy.
            </p>
            {renderSections(socialMediaSections)}
          </section>
        )}

        {/* AI & Imago Dei */}
        {tab === "AI & Imago Dei" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Artificial intelligence raises the theological question that modern culture has
              largely avoided: what is a human being? The imago Dei &mdash; consciousness,
              moral agency, relational love, capacity for worship &mdash; is what
              distinguishes persons from sophisticated pattern-matching systems, however
              impressive those systems become.
            </p>
            {renderSections(aiSections)}
          </section>
        )}

        {/* Screen Addiction */}
        {tab === "Screen Addiction" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Screen addiction is not a character weakness; it is the product of systems
              deliberately engineered to produce psychological dependence. The theology of
              Sabbath rest, applied to digital life, offers the most ancient and most
              subversive response: one day of structured disconnection that refuses the
              tyranny of perpetual stimulation.
            </p>
            {renderSections(screenAddictionSections)}
          </section>
        )}

        {/* Church & Technology */}
        {tab === "Church & Technology" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              The church has always adopted new communication technologies &mdash; the codex,
              the printing press, the microphone, the internet. The question is never whether
              to engage but how: what does a given technology make possible for the gospel,
              and what does it make impossible for the embodied community the incarnation
              requires?
            </p>
            {renderSections(churchTechSections)}
          </section>
        )}

        {/* Videos */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
              Teaching on technology, culture, and the Christian life from trusted voices
              in theology and cultural engagement.
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
            borderLeft: `3px solid ${TEAL}`,
            borderRadius: 12,
            padding: "1.75rem",
          }}
        >
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
            Technology as a discipleship question
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Technology is not the enemy, but it is not neutral. Every tool we adopt shapes
            us &mdash; our attention, our desires, our relationships, our capacity for
            prayer. The Christian response is neither blanket rejection nor uncritical
            adoption: it is the discerning engagement of those who know who they are (image-
            bearers of the living God), what they are for (the love of God and neighbor), and
            what they are guarding (the soul that screens can quietly hollow out if we are not
            watching). The Word became flesh; we are most fully ourselves when we inhabit our
            embodied, present, undistracted lives with the same intentionality.
          </p>
        </section>
      </main>
    </div>
  );
}
