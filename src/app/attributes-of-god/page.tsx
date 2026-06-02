"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ATTRIBUTE_CATEGORIES = ["All", "Incommunicable", "Communicable", "Moral"];

const ATTRIBUTES = [
  {
    name: "Aseity (Self-Existence)",
    latin: "Aseitas",
    category: "Incommunicable",
    color: PURPLE,
    verse: "Exodus 3:14",
    definition: "God exists from himself, by himself, and for himself. He is not dependent on anything outside himself for his existence, sustenance, or purpose. When God names himself 'I AM WHO I AM,' he is saying: my existence is not derived from anything else. Everything else exists because of God; God exists because of God.",
    significance: "Aseity is the foundation of all other attributes. A God who was dependent would be a smaller God, subject to something greater. The self-existent God alone can be the ultimate foundation of reality, meaning, and morality.",
    quote: "The divine life is absolutely self-sufficient. God is not only the first cause but the last end; not only the ultimate foundation of all reality but its goal. — Herman Bavinck",
    application: "When we feel that our lives depend on circumstances or people, aseity reminds us that we depend on One who depends on nothing. Our security is in an unmovable foundation.",
  },
  {
    name: "Immutability",
    latin: "Immutabilitas",
    category: "Incommunicable",
    color: "#3B82F6",
    verse: "Malachi 3:6; James 1:17",
    definition: "God does not change in his being, character, purposes, or promises. 'I the LORD do not change' (Malachi 3:6). This is not rigidity — God acts dynamically in history, grieves, delights, and responds to prayer. But his nature, values, and covenant commitments are constant. What he loves, he always loves. What he hates, he always hates.",
    significance: "Immutability is what makes God trustworthy. A God who could change his mind about salvation, justice, or his promises would be a God you could not fully trust. The constancy of God is the stability beneath all human instability.",
    quote: "Were God's perfections changeable, he would cease to be God. God's love is the same yesterday, today, and forever. His mercy has no beginning and cannot end. — A.W. Tozer",
    application: "When God seems silent or distant, immutability reminds us: his love for us in Christ has not changed. His promises from Scripture have not expired. His commitment to our good is permanent.",
  },
  {
    name: "Omniscience",
    latin: "Omniscientia",
    category: "Incommunicable",
    color: "#10B981",
    verse: "Psalm 147:5; 1 John 3:20",
    definition: "God knows all things — past, present, and future — with complete, perfect, and immediate knowledge. He knows what has happened, what is happening, what will happen, and what could happen under every possible circumstance. He knows the number of hairs on your head (Matthew 10:30) and the thoughts of your heart (Psalm 139:2). Nothing is hidden from him.",
    significance: "Omniscience is the basis for God's judgment and the foundation for his providential governance. He doesn't make decisions with incomplete information. He sees the whole story from beginning to end.",
    quote: "There is nothing in the universe — no deed done, no thought conceived, no word spoken — that does not lie open before the gaze of God. — J.I. Packer",
    application: "Omniscience is both terrifying (every sin is known) and comforting (every suffering is seen). The God who sees everything is the God who sees you — in your worst moments and your hidden faithfulness.",
  },
  {
    name: "Omnipotence",
    latin: "Omnipotentia",
    category: "Incommunicable",
    color: "#EF4444",
    verse: "Job 42:2; Matthew 19:26; Jeremiah 32:17",
    definition: "God can do all that is consistent with his nature. He is not constrained by physical laws, limitations of power, or the opposition of creatures. 'Nothing is impossible with God' (Luke 1:37). This does not mean God can do logical contradictions (make a round square) or moral contradictions (lie or act against his nature) — those are not limitations of power but expressions of perfection.",
    significance: "Omnipotence means that nothing can finally defeat God's purposes. History is not out of control — it is under the authority of one who can bring his purposes to completion regardless of opposition.",
    quote: "We rejoice in an Almighty God because we are a people too weak to solve our own problems. The God we need is a God who can. — Alistair Begg",
    application: "When the situation seems impossible — illness, broken relationships, systemic injustice — omnipotence says: our God is not limited by what seems possible to us. He is not anxious.",
  },
  {
    name: "Omnipresence",
    latin: "Omnipraesentia",
    category: "Incommunicable",
    color: "#F59E0B",
    verse: "Psalm 139:7-10; Jeremiah 23:24",
    definition: "God is fully present everywhere simultaneously. He is not spread thin across the universe — he is wholly present in every location. 'Where can I flee from your presence?' (Psalm 139:7) — the answer is nowhere. God is fully present in the darkness and the light, in the heights and the depths. The incarnation did not limit God's omnipresence — the Son was fully present in human flesh and fully God.",
    significance: "Omnipresence means you cannot be in a place where God is not. There is no circumstance, no suffering, no depth of darkness, where God is absent.",
    quote: "God is never far away. He is not removed from us by distance but by sin. The issue is not geography but orientation. — Tim Keller",
    application: "The loneliest moment of your life is a moment in which God is fully, completely present. The awareness of God's presence is something we cultivate; the reality of it is constant.",
  },
  {
    name: "Eternity",
    latin: "Aeternitas",
    category: "Incommunicable",
    color: "#6366F1",
    verse: "Psalm 90:2; Isaiah 57:15",
    definition: "God is not bound by time. He exists in an eternal present, not in a sequence of past, present, and future. He does not age, learn, or forget. 'Before the mountains were born or you brought forth the earth and the world, from everlasting to everlasting you are God' (Psalm 90:2). Time itself is his creation — he is not inside it but above and outside it.",
    significance: "God's eternity means that our limited, temporary existence is upheld by One who sees all of history at once. The beginning and end of your story are both fully present to him.",
    quote: "God sees all of history — past, present, future — in a single eternal moment, the way we see a landscape from a mountain peak. — Augustine",
    application: "When we are trapped in the present moment of suffering, God's eternity means he sees what this moment is for and what comes after it. Our 'not yet' is his 'already known.'",
  },
  {
    name: "Holiness",
    latin: "Sanctitas",
    category: "Moral",
    color: "#EC4899",
    verse: "Isaiah 6:3; 1 Peter 1:16; Revelation 4:8",
    definition: "Holiness is the most prominent attribute of God in Scripture — the only one repeated three times as a superlative: 'Holy, holy, holy' (Isaiah 6:3; Revelation 4:8). Holiness means both moral purity (complete absence of evil) and otherness (God is categorically different from the creation). To encounter the holy God is to be undone — Isaiah falls on his face, Peter says 'depart from me, for I am a sinful man.'",
    significance: "The holiness of God is the foundation of the moral order. Sin is not just rule-breaking — it is an offense against infinite holiness. The cross is necessary because God's holiness cannot simply overlook sin.",
    quote: "The holiness of God is not one attribute among many. It is the attribute that gives all other attributes their weight and meaning. — R.C. Sproul",
    application: "Approaching God is not casual. True worship begins with the recognition of who God is — infinitely holy — and who we are by comparison. This is not primarily about guilt but about reality.",
  },
  {
    name: "Love",
    latin: "Amor Dei",
    category: "Moral",
    color: "#EF4444",
    verse: "1 John 4:8; John 3:16; Romans 5:8",
    definition: "God is love — not merely loving, but constitutively love (1 John 4:8). The love of God is not a response to lovable objects but an eternal reality within the Trinity (the Father loves the Son; the Son loves the Father in the Spirit). God's love for humanity is not based on human merit. 'God demonstrates his own love for us in this: while we were still sinners, Christ died for us' (Romans 5:8).",
    significance: "The love of God is the motive behind everything he does in redemption. The cross is not the Father punishing the Son — it is the Father and Son together acting in love to rescue lost humanity.",
    quote: "The love of God is not drawn out by our lovableness but is exercised despite our unlovableness. — D.A. Carson",
    application: "Your standing with God is not based on your performance but on his love. This does not make obedience irrelevant — it makes it a response of gratitude rather than an attempt to earn acceptance.",
  },
  {
    name: "Justice",
    latin: "Iustitia",
    category: "Moral",
    color: "#F59E0B",
    verse: "Deuteronomy 32:4; Romans 3:25-26",
    definition: "God always does what is right. He cannot ignore sin, because doing so would be unjust. He cannot punish the innocent, because that too would be unjust. Justice is not a constraint on God but an expression of his character — he is perfectly just because he is perfectly good. The cross simultaneously satisfies divine justice (sin is punished) and demonstrates divine love (God himself bears the punishment).",
    significance: "The justice of God is the ultimate answer to the problem of evil. Every unpunished evil in history will be addressed. Every injustice will be rectified. The oppressed will be vindicated. This is not wishful thinking — it is grounded in the character of a just God.",
    quote: "God's justice means that those who suffer unjustly in this world will not have suffered unjustly forever. The cross is the proof. — Tim Keller",
    application: "We can pursue justice in the world not as anxious activists but as people who know the final Judge is both just and good. Our work for justice is joining God's work, not substituting for it.",
  },
  {
    name: "Grace",
    latin: "Gratia",
    category: "Communicable",
    color: GREEN,
    verse: "Ephesians 2:8; Romans 5:20-21",
    definition: "Grace is God's unmerited favor — his disposition to bless the undeserving. Unlike mercy (which withholds deserved punishment), grace gives undeserved blessing. Every spiritual blessing is a grace: salvation, adoption, the Spirit, Scripture, the church. 'Where sin increased, grace abounded all the more' (Romans 5:20).",
    significance: "Grace redefines the relationship between God and humanity. We are not in a merit-based relationship where we earn by obedience and lose by failure. We are in a grace-based relationship where God gives lavishly to those who deserve nothing.",
    quote: "Grace is the central, organizing principle of biblical Christianity. Everything else hangs on it. Remove grace and the gospel becomes another self-improvement program. — Philip Yancey",
    application: "Living in grace means bringing your failures to God rather than hiding them. You cannot surprise God with your sin, and you cannot deplete his grace. The response to grace is not complacency but gratitude that fuels obedience.",
  },
  {
    name: "Mercy",
    latin: "Misericordia",
    category: "Communicable",
    color: "#A855F7",
    verse: "Psalm 103:8-12; Lamentations 3:22-23",
    definition: "Mercy is God's compassionate disposition toward those in misery and distress. It is the active response of God's love to human suffering and sinfulness. 'Great is his mercy toward those who fear him' (Psalm 103:11). The classic mercy text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning' (Lamentations 3:22-23).",
    significance: "Mercy means that God does not treat us as our sins deserve. Mercy and justice meet at the cross: the penalty that justice demands is absorbed by God himself in Christ, so that mercy can be extended freely.",
    quote: "God's mercy is not a thin thread stretched to the breaking point — it is an ocean. He is plenteous in mercy. — Charles Spurgeon",
    application: "Every morning that you wake up is a mercy. The fact that your worst day was not your last day is a mercy. Practicing awareness of daily mercies reshapes gratitude at a foundational level.",
  },
  {
    name: "Faithfulness",
    latin: "Fidelitas",
    category: "Communicable",
    color: "#10B981",
    verse: "Lamentations 3:23; Deuteronomy 7:9; 1 Corinthians 10:13",
    definition: "God always keeps his word. His promises are not aspirational but certain. 'God is not man, that he should lie... Has he said, and will he not do it?' (Numbers 23:19). Every covenant he has made — with Noah, Abraham, David, and in Christ — he has kept. 'Great is your faithfulness' is not a hope but a declaration based on evidence.",
    significance: "Faithfulness is what makes prayer meaningful. When we bring God's promises back to him in prayer, we are not reminding him of something he forgot — we are aligning ourselves with what he has already committed to do.",
    quote: "The ground of faith is not our feelings about God but God's faithfulness. Faith is only as reliable as its object, and God's object is unimpeachable. — J.I. Packer",
    application: "When God seems slow, his faithfulness says: what he has promised, he will do — in his time and in his way. The apparent silence of God is not the absence of God.",
  },
];

const VOICES_AOG: { id: string; name: string; era: string; work: string; bio: string; quote: string; contribution: string }[] = [
  {
    id: "tozer-aw",
    name: "A.W. Tozer",
    era: "1897-1963",
    work: "The Knowledge of the Holy",
    bio: "A.W. Tozer was a pastor and author who served in the Christian and Missionary Alliance. Largely self-educated, he became one of the most influential evangelical voices of the twentieth century. His writing combined prophetic urgency with deep mystical piety, calling the church back to awe, reverence, and the pursuit of God himself rather than the benefits of religion.",
    quote: "What comes into our minds when we think about God is the most important thing about us.",
    contribution: "Restored the awe of God's holiness to popular evangelical piety at a time when American Christianity was drifting toward sentimentalism and pragmatism.",
  },
  {
    id: "packer-ji",
    name: "J.I. Packer",
    era: "1926-2020",
    work: "Knowing God",
    bio: "J.I. Packer was a British-born Anglican theologian who spent much of his career at Regent College in Vancouver. A defender of Reformed orthodoxy and biblical inerrancy, he had a rare gift for making rigorous theology accessible to ordinary Christians. Knowing God remains one of the best-selling works of Christian theology ever published.",
    quote: "Knowing about God is crucially different from knowing God. The difference is like that between reading about a person and actually meeting them.",
    contribution: "Brought classical theism and Reformed doctrine to accessible evangelical writing, demonstrating that theological depth and pastoral warmth are not in conflict.",
  },
  {
    id: "bavinck-herman",
    name: "Herman Bavinck",
    era: "1854-1921",
    work: "Reformed Dogmatics Vol. 2",
    bio: "Herman Bavinck was a Dutch Reformed theologian and professor at the Free University of Amsterdam. His four-volume Reformed Dogmatics is widely regarded as the greatest systematic theology in the Dutch Reformed tradition. Bavinck was deeply engaged with modern philosophy and science, yet remained committed to the full range of classical Christian doctrine.",
    quote: "God is incomprehensible, yet he is not unknown. He has revealed himself, and that revelation is reliable — but the reality behind it infinitely exceeds what we grasp.",
    contribution: "Provided the most thorough systematic treatment of the divine attributes in the Dutch Reformed tradition, integrating patristic, medieval, and Reformation sources with modern thought.",
  },
  {
    id: "charnock-stephen",
    name: "Stephen Charnock",
    era: "1628-1680",
    work: "Existence and Attributes of God",
    bio: "Stephen Charnock was a Puritan minister who served in England and Ireland. His massive work on the existence and attributes of God, published posthumously, began as a series of sermons and grew into the most exhaustive treatment of theology proper in the Puritan tradition. Though dense, it remains in print and is still referenced as a standard work.",
    quote: "God is a being of absolute self-sufficiency. He had a fullness before the creation of the world, and he retains that fullness after the fall of the world.",
    contribution: "Produced the most exhaustive Puritan treatment of the divine attributes, covering each attribute with philosophical rigor, scriptural depth, and practical application — still considered the standard reference.",
  },
  {
    id: "frame-john",
    name: "John Frame",
    era: "b. 1939",
    work: "The Doctrine of God",
    bio: "John Frame is a Reformed philosopher-theologian who taught for many years at Westminster Theological Seminary and Reformed Theological Seminary. He is best known for his tri-perspectival method, which approaches theological questions from the perspectives of norms, situations, and persons. His Doctrine of God is the most comprehensive English-language treatment of theology proper in the Reformed tradition in the last fifty years.",
    quote: "Every perspective on God illuminates something the others do not. The normative, situational, and existential perspectives are not competing but complementing ways of knowing the one God.",
    contribution: "Developed a tri-perspectival approach to theology proper, bringing fresh philosophical clarity to debates about divine attributes, sovereignty, and the nature of God's knowledge.",
  },
];

const PRACTICES_AOG: { id: string; title: string; icon: string; frequency: string; description: string; steps: string[] }[] = [
  {
    id: "attribute-meditation",
    title: "Attribute Meditation",
    icon: "🙏",
    frequency: "Daily",
    description: "Slowly read one attribute, pausing on each phrase to let it settle. The goal is not to finish the reading but to encounter the God behind the words.",
    steps: [
      "Read the definition of one attribute slowly, stopping at any phrase that strikes you.",
      "Identify one way this attribute changes your view of your current situation or concern.",
      "Pray accordingly — address God by this attribute and let it shape what you ask and how you ask it.",
    ],
  },
  {
    id: "attribute-led-prayer",
    title: "Attribute-Led Prayer",
    icon: "📖",
    frequency: "Daily",
    description: "Use one of God's attributes as the lens for your entire prayer session, letting it shape your praise, confession, and petition.",
    steps: [
      "Choose one attribute as the theme for today's prayer.",
      "Spend several minutes praising God specifically for this attribute, naming concrete ways you have seen it.",
      "Confess specific ways you have doubted or failed to trust this attribute in the past week.",
      "Ask God for faith to rest in this attribute in whatever you are facing today.",
    ],
  },
  {
    id: "attribute-journaling",
    title: "Attribute Journaling",
    icon: "✍️",
    frequency: "Weekly",
    description: "Write about how one of God's attributes has shown up — or should have shown up — in your week.",
    steps: [
      "Pick one attribute that has been on your mind or that seems relevant to your week.",
      "Recall a specific moment from the week — a decision, a fear, a conversation, a failure.",
      "Write three sentences: what the moment was, what this attribute says about it, and what you want to remember.",
    ],
  },
  {
    id: "catechism-review",
    title: "Catechism Review",
    icon: "📚",
    frequency: "Weekly",
    description: "Use the Westminster Shorter Catechism Q4 — 'What is God?' — as a structured review of divine attributes.",
    steps: [
      "Read Q4 and its answer slowly: 'God is a Spirit, infinite, eternal, and unchangeable in his being, wisdom, power, holiness, justice, goodness, and truth.'",
      "Pause on each word or phrase. Ask: what does it mean that God is infinite in power? In holiness?",
      "Choose one quality named in the answer and spend five minutes meditating on a Scripture passage that illustrates it.",
      "Close by writing or praying one sentence of thanks for that quality.",
    ],
  },
  {
    id: "attribute-prayer-mapping",
    title: "Attribute-to-Prayer Mapping",
    icon: "🗺️",
    frequency: "Monthly",
    description: "Map each of God's attributes to a specific category of prayer in your life, creating a structured prayer framework rooted in theology.",
    steps: [
      "List the major areas of your life where you regularly pray: relationships, work, health, church, world events.",
      "For each area, assign one attribute of God that is most relevant to how you should pray about it.",
      "For the next month, lead your prayer in each area with the assigned attribute — praise God for it before making any requests.",
      "At the end of the month, reflect: how did focusing on God's nature change how you prayed?",
    ],
  },
  {
    id: "sharing-with-others",
    title: "Sharing with Others",
    icon: "💬",
    frequency: "Monthly",
    description: "Teach what you have learned about one attribute to someone else. Teaching is one of the most effective ways to deepen your own understanding.",
    steps: [
      "Choose one attribute you have been studying and feel you understand well enough to explain.",
      "Find one person — a friend, family member, or small group — and spend 5-10 minutes sharing what you have learned.",
      "Invite their questions and reactions. What did they find surprising? What would they add?",
      "Reflect afterward: what did explaining it teach you that merely reading it did not?",
    ],
  },
];

const DEVOTIONAL_AOG: { id: string; title: string; attribute: string; verse: string; body: string; prayer: string }[] = [
  {
    id: "dev-aseity",
    title: "The God Who Needs Nothing",
    attribute: "Aseity",
    verse: "Psalm 50:10-12",
    body: "We spend most of our lives trying to make ourselves valuable — to our employers, our families, our churches, even to God. We offer our service, our attendance, our sacrifice, as if God were a larger version of the people in our lives whose approval we need. But the God of Psalm 50 will not be domesticated. 'If I were hungry, I would not tell you, for the world and its fullness are mine.' He does not need your offerings. He does not need you. And this is, strangely, the most liberating truth in the universe. Because a God who needs nothing from you is a God who loves you freely. He did not create you to fill a void in himself. He created you out of the overflow of a love that was already complete within the Trinity. You are not his project. You are his delight. Rest in the God who is already full.",
    prayer: "Father, forgive me for turning you into a need I must meet. You lack nothing. Everything I bring to you, you already have. Help me to rest in the God who is complete, and to love you not as a creditor I owe but as the Father who delights in me for no reason other than your own love.",
  },
  {
    id: "dev-immutability",
    title: "The Unchanging One",
    attribute: "Immutability",
    verse: "Malachi 3:6",
    body: "The world shifts beneath us constantly. The people we love change. Our bodies change. The institutions we trusted prove unreliable. The emotions that felt certain last week are foreign to us today. Into this endless flux, Malachi 3:6 speaks with unusual force: 'I the LORD do not change.' This is not a claim about God's inflexibility. God acts, responds, grieves, and delights throughout Scripture. What does not change is his character — his love, his purposes, his covenant commitments. The God who loved you when he chose you before the foundation of the world (Ephesians 1:4) loves you now with the same love. He has not revised his opinion of you in Christ. When everything around you shifts, you are held by the one fixed point in the universe — not a doctrine, but a Person who cannot be otherwise than he is.",
    prayer: "Lord, when I am unstable and the world feels unreliable, remind me that you are not. Your love for me in Christ is not subject to revision. Your promises are not conditional on my consistency. Ground me today in your unchanging character, and let that be enough.",
  },
  {
    id: "dev-omnipresence",
    title: "Nowhere to Run, Nowhere to Hide",
    attribute: "Omnipresence",
    verse: "Psalm 139:7-12",
    body: "David's question in Psalm 139 is not rhetorical despair but wondering astonishment: 'Where shall I go from your Spirit? Where shall I flee from your presence?' The answer he finds is not threatening but enveloping. Even in Sheol — the place of death and absence — God is there. Even in the uttermost parts of the sea, God's hand will hold him. The omnipresence of God is not surveillance. It is companionship. The God who is everywhere is not tracking your failures from a distance. He is with you in the dark places you would be most afraid for anyone else to see. He was there in the worst thing that ever happened to you. He is here now, fully, not partially. There is nowhere you can go where you would need to feel alone.",
    prayer: "God of every place, I confess I have sometimes wanted to hide from you. I have gone to the dark places hoping you were not there. But you were. And your presence in those places was not judgment but mercy. Help me today to stop running and to rest in the reality that I am never, in any moment, outside of your presence.",
  },
  {
    id: "dev-holiness",
    title: "The Weight of Holiness",
    attribute: "Holiness",
    verse: "Isaiah 6:3",
    body: "Isaiah's vision in the temple is one of the most terrifying passages in all of Scripture. The seraphim do not stand casually before God. They cover their faces. They cover their feet. They cry to each other in a kind of holy alarm: 'Holy, holy, holy is the LORD of hosts.' The repetition is not poetic flourish — in Hebrew, it is the superlative of superlatives. The holiest thing in existence. And Isaiah's response is not warm devotion. It is collapse: 'Woe is me! For I am lost; for I am a man of unclean lips.' This is what happens when a human being actually encounters the holiness of God. But notice: the story does not end in destruction. It ends in cleansing, commissioning, and sending. The coal from the altar touches Isaiah's lips. 'Your guilt is taken away, and your sin atoned for.' Holiness does not simply destroy the impure. Through the blood of Christ, it restores us to stand before it.",
    prayer: "Holy God, I confess that I approach you too casually. I have flattened you into a friendly companion rather than the Lord of terrible holiness. Undo me where I need to be undone. Then restore me, as you restored Isaiah, so that I can stand before you not in my own righteousness but in the righteousness of your Son.",
  },
  {
    id: "dev-love",
    title: "Love That Won't Let Go",
    attribute: "Love",
    verse: "Romans 8:38-39",
    body: "Paul ends Romans 8 not with a doctrinal statement but with a doxology of certainty. He has just walked through the sufferings of the present age, the groaning of creation, and the intercession of the Spirit for our weakness. And his conclusion is not a cautious hope but a triumphant declaration: nothing — not death, not life, not angels, not rulers, not things present, not things to come, not powers, not height, not depth, not anything else in all creation — will be able to separate us from the love of God in Christ Jesus. This is not a promise that nothing bad will happen to you. It is a promise that whatever happens to you, you will not be separated from the love that holds you. The love of God is not a feeling God has about you when you are performing well. It is a bond forged before the foundation of the world and secured at the cross. Nothing you do can sever it. Nothing done to you can sever it.",
    prayer: "Father, I thank you that your love is not a reward I can lose or earn. It is a gift you secured at infinite cost and will not take back. On the days when I feel most unlovable and most afraid, remind me: nothing can separate me from your love in Christ. Let that be the ground I stand on today.",
  },
  {
    id: "dev-glory",
    title: "Worthy of Worship",
    attribute: "Glory",
    verse: "Isaiah 42:8",
    body: "God's glory is not one interest among many that he pursues. It is the goal of everything. 'I am the LORD; that is my name; my glory I give to no other' (Isaiah 42:8). This can sound, to modern ears, like divine ego — a God obsessed with his own fame. But consider what God's glory actually is: it is the radiance of his perfect being, the display of everything he is. When God acts for his glory, he is acting to reveal truth, beauty, holiness, love, and justice in their ultimate form. There is nothing higher to aim at. The goal of creation is not human happiness as an end in itself — it is human happiness in God, which means participating in and reflecting his glory. We were made to worship, which means we were made for our highest and most fulfilling activity when we turn our faces toward him. The universe is a theater built for the display of God's glory, and you have a part in the performance.",
    prayer: "Lord, recalibrate my desires. I confess that I have often made myself — my comfort, my reputation, my success — the goal of my life. But you created me for something infinitely larger: to reflect your glory back to you and out to the world. Restore in me the joy of living for your name rather than my own.",
  },
];

export default function AttributesOfGodPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  type Tab = "attributes" | "voices" | "practices" | "devotional" | "videos";
  const [activeTab, setActiveTab] = useState<Tab>("attributes");
  const [selectedVoice, setSelectedVoice] = useState("tozer-aw");

  const filtered = ATTRIBUTES.filter(a => category === "All" || a.category === category);
  const attr = ATTRIBUTES.find(a => a.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Attributes of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            Theology proper &mdash; the study of God&rsquo;s nature and character &mdash; is the foundation of all Christian thought. What we believe about God shapes everything else. These are the attributes Scripture reveals.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 24, background: CARD, padding: 6, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          {([
            { id: "attributes" as const, label: "Attributes", icon: "✨" },
            { id: "voices" as const, label: "Voices", icon: "🎓" },
            { id: "practices" as const, label: "Practices", icon: "🙏" },
            { id: "devotional" as const, label: "Devotional", icon: "📖" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ]).map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "attributes" && (
          <>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, textAlign: "center" }}>
                {[
                  { label: "Incommunicable", desc: "Unique to God alone", color: PURPLE },
                  { label: "Communicable", desc: "Shared (derivatively) with humans", color: GREEN },
                  { label: "Moral", desc: "God's ethical character", color: "#EF4444" },
                ].map((t, i) => (
                  <div key={i}>
                    <div style={{ color: t.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{t.label}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
              {ATTRIBUTE_CATEGORIES.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${category === c ? GREEN : BORDER}`, background: category === c ? `${GREEN}15` : "transparent", color: category === c ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {c}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: attr ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filtered.map((a, i) => (
                  <button key={i} onClick={() => setSelected(selected === a.name ? null : a.name)}
                    style={{ background: selected === a.name ? `${a.color}12` : CARD, border: `1px solid ${selected === a.name ? a.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `${a.color}20`, border: `1px solid ${a.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, fontWeight: 900, fontSize: 11, flexShrink: 0 }}>
                        {a.latin.split(" ")[0].substring(0, 3).toUpperCase()}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{a.name}</span>
                          <span style={{ background: `${a.color}15`, color: a.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{a.category}</span>
                        </div>
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 2, fontStyle: "italic" }}>{a.latin} · {a.verse}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {attr && (
                <div style={{ background: CARD, border: `1px solid ${attr.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                    <div>
                      <h2 style={{ color: attr.color, fontWeight: 900, fontSize: 22, margin: "0 0 2px" }}>{attr.name}</h2>
                      <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{attr.latin}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                    <span style={{ background: `${attr.color}12`, color: attr.color, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{attr.category}</span>
                    <span style={{ background: `${BORDER}`, color: MUTED, padding: "2px 10px", borderRadius: 8, fontSize: 12 }}>{attr.verse}</span>
                  </div>

                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{attr.definition}</p>

                  <div style={{ background: `${attr.color}08`, border: `1px solid ${attr.color}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: attr.color, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEOLOGICAL SIGNIFICANCE</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{attr.significance}</p>
                  </div>

                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THEOLOGIAN QUOTE</div>
                    <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>&ldquo;{attr.quote}&rdquo;</p>
                  </div>

                  <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>PERSONAL APPLICATION</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0, lineHeight: 1.65 }}>{attr.application}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === "voices" && (
          <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 100 }}>
              {VOICES_AOG.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ background: selectedVoice === v.id ? `${PURPLE}20` : CARD,
                    border: `1px solid ${selectedVoice === v.id ? PURPLE : BORDER}`,
                    borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedVoice === v.id ? "#fff" : TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{v.era}</div>
                </button>
              ))}
            </div>
            {(() => {
              const v = VOICES_AOG.find(x => x.id === selectedVoice)!;
              return (
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                  <h2>{v.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{v.era} &middot; {v.work}</div>
                  <p style={{ marginTop: 16, lineHeight: 1.8 }}>{v.bio}</p>
                  <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16, fontStyle: "italic", color: MUTED, margin: "20px 0" }}>
                    &ldquo;{v.quote}&rdquo;
                  </blockquote>
                  <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>CONTRIBUTION</div>
                    <p style={{ color: TEXT, margin: 0 }}>{v.contribution}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {PRACTICES_AOG.map(p => (
              <div key={p.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ margin: 0 }}>{p.icon} {p.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>{p.frequency}</span>
                </div>
                <p style={{ color: MUTED }}>{p.description}</p>
                <ol style={{ paddingLeft: 16, marginTop: 12 }}>
                  {p.steps.map((s, i) => <li key={i} style={{ color: TEXT, fontSize: 13, lineHeight: 1.7 }}>{s}</li>)}
                </ol>
              </div>
            ))}
          </div>
        )}

        {activeTab === "devotional" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {DEVOTIONAL_AOG.map(d => (
              <div key={d.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 4 }}>{d.attribute.toUpperCase()}</div>
                <h3 style={{ marginBottom: 8 }}>{d.title}</h3>
                <div style={{ color: PURPLE, fontSize: 12, marginBottom: 14 }}>{d.verse}</div>
                <p style={{ lineHeight: 1.9 }}>{d.body}</p>
                <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 16, marginTop: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>PRAYER</div>
                  <p style={{ color: TEXT, fontStyle: "italic", margin: 0 }}>{d.prayer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings on the attributes of God — his holiness, sovereignty, love, and majesty — from trusted scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "TSDuiULbFf4", title: "Holiness and Justice: The Holiness of God", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul examines what it means that God is holy — and how his holiness is inseparable from his justice, transforming how we understand both." },
                  { videoId: "X5x3SPQrDbU", title: "Ministry Reflections with John Piper and R.C. Sproul", channel: "John Piper & R.C. Sproul", description: "Piper and Sproul reflect on what their ministries have taught them about the nature and character of God — two giants of Reformed theology in conversation." },
                  { videoId: "wGhLw1ULGFk", title: "R.C. Sproul on God's Being and Apologetics", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul explores the philosophical and theological dimensions of God's being — what it means that God is, and how that grounds Christian faith." },
                  { videoId: "MJks19pBBXI", title: "Introduction to Apologetics: Defending Your Faith", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul introduces the rational basis for belief in a holy, personal God — the starting point for all Christian theology." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
