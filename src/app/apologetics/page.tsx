"use client";

import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Case = {
  id: string; icon: string; title: string; category: string; difficulty: "Starter" | "Intermediate" | "Advanced";
  shortAnswer: string; fullArgument: string; objections: string[]; rebuttals: string[]; keyVerses: string[];
  thinkers: string[]; color: string;
};

const cases: Case[] = [
  {
    id: "cosmological",
    icon: "🌌",
    title: "The Cosmological Argument",
    category: "God's Existence",
    difficulty: "Starter",
    shortAnswer: "Everything that begins to exist has a cause. The universe began to exist. Therefore, the universe has a cause — and that cause must be outside space-time, uncaused, and enormously powerful.",
    fullArgument: `The Kalam Cosmological Argument proceeds from a simple premise: whatever begins to exist has a cause. We observe this universally in everyday life — nothing pops into existence without reason.\n\nScience confirms the universe had a beginning: the Big Bang, the expansion of the universe, and the second law of thermodynamics all point to an absolute beginning of space, time, matter, and energy.\n\nSince the universe began, it must have a cause. That cause must be:\n• Outside space and time (since it created both)\n• Uncaused itself (since it caused the first cause)\n• Extraordinarily powerful (to create everything from nothing)\n• Personal (to choose to create — a force doesn't choose)\n\nThis is at minimum the classical concept of God.`,
    objections: [
      "Who made God?",
      "Quantum mechanics allows things to pop into existence without cause",
      "The universe could be eternal (infinite regress)"
    ],
    rebuttals: [
      "God, by definition, is uncaused and eternal — the question confuses 'everything that begins to exist' with 'everything that exists.' God never began to exist.",
      "Quantum events don't occur in a vacuum — they occur within an already-existing quantum field with pre-existing laws of physics. That's not creation from nothing.",
      "An actual infinite past is philosophically incoherent — you can never traverse an infinite series to reach today. The mathematics of infinity describe potential quantities, not actual ones."
    ],
    keyVerses: ["Genesis 1:1", "John 1:1-3", "Romans 1:20", "Hebrews 11:3"],
    thinkers: ["William Lane Craig", "Al-Ghazali", "Thomas Aquinas", "J.L. Mackie"],
    color: "#3B82F6"
  },
  {
    id: "finetuning",
    icon: "⚛️",
    title: "The Fine-Tuning Argument",
    category: "God's Existence",
    difficulty: "Intermediate",
    shortAnswer: "The fundamental constants of physics are tuned to extraordinary precision to allow life. The probability of this happening by chance is so astronomically low that design is by far the best explanation.",
    fullArgument: `The laws of physics contain around 20 fundamental constants — the gravitational constant, the cosmological constant, the strong nuclear force, the mass of the electron, etc. These constants are not derived from the laws themselves; they are simply the values they happen to have.\n\nIf any of these constants were altered even slightly, the universe would be incapable of producing life. Roger Penrose calculated that the precision required for the initial entropy of the universe is 1 in 10^(10^123) — a number that dwarfs the number of atoms in the observable universe.\n\nThree explanations exist:\n1. Chance — absurdly unlikely\n2. Necessity — but we have no evidence these values had to be what they are\n3. Design — an intelligence intentionally set the constants\n\nThe fine-tuning doesn't prove the Christian God specifically, but it powerfully argues for a mind behind the universe.`,
    objections: [
      "The Many Worlds / Multiverse hypothesis explains fine-tuning without God",
      "The anthropic principle — of course we observe a life-permitting universe, because otherwise we wouldn't exist to observe it",
      "We don't know what other forms of life might be possible with different constants"
    ],
    rebuttals: [
      "The multiverse is untestable and unfalsifiable — it's metaphysics, not science. And even a multiverse needs a fine-tuned universe-generating mechanism.",
      "The anthropic principle doesn't explain fine-tuning — it just observes that we're here. The question is why we're here at all given the odds.",
      "The fine-tuning isn't just for 'our type' of life — it's for any chemistry, any structure, any complexity. Without fine-tuning, you don't even get atoms."
    ],
    keyVerses: ["Psalm 19:1-4", "Isaiah 45:18", "Job 38:4-7", "Romans 1:20"],
    thinkers: ["Robin Collins", "John Polkinghorne", "Roger Penrose", "Stephen Hawking"],
    color: "#6B4FBB"
  },
  {
    id: "resurrection",
    icon: "✝️",
    title: "The Resurrection of Jesus",
    category: "Historical Evidence",
    difficulty: "Intermediate",
    shortAnswer: "The resurrection is a historical claim, not merely a theological one. The minimal facts approach shows that even skeptical historians affirm data that is best explained by a real resurrection.",
    fullArgument: `The resurrection is the cornerstone of Christianity (1 Cor 15:14). The claim is historical — Jesus died by crucifixion under Pontius Pilate and was reported alive three days later. How do we evaluate it?\n\nThe Minimal Facts method, developed by Gary Habermas, identifies facts that virtually all NT scholars affirm regardless of worldview:\n\n1. Jesus died by crucifixion (confirmed by Tacitus, Josephus, the Jewish Talmud, and all the gospels)\n2. His disciples believed they saw the risen Jesus (even Bart Ehrman affirms this)\n3. Paul, a persecutor of Christians, had a post-resurrection experience\n4. James, Jesus's skeptical brother, converted after a post-resurrection experience\n5. The tomb was empty (no rival tradition ever claimed the body was still in the tomb)\n\nHypotheses like the swoon theory, hallucination theory, legend theory, and theft theory each fail to account for all five facts simultaneously. The resurrection explains all of them.`,
    objections: [
      "It's more likely the disciples hallucinated",
      "The gospels were written too late to be reliable",
      "The resurrection is just copied from pagan dying-and-rising god myths"
    ],
    rebuttals: [
      "Hallucinations are private, not group experiences. 1 Cor 15 records 500 witnesses simultaneously — mass hallucination of that scale is not documented anywhere in medical literature. And Paul and James were hostile witnesses who had no expectation of a resurrection.",
      "Paul's letters (especially 1 Cor 15) were written 20-25 years after the resurrection — and contain a pre-Pauline creed Paul received that may date to within 5 years of the event. That's comparable to any ancient history.",
      "The 'copycat' theory was popular in the 19th century but has been largely abandoned by scholars. The parallels are forced and superficial — pagan 'resurrections' are nothing like the concrete historical claim of Easter morning."
    ],
    keyVerses: ["1 Corinthians 15:3-8", "Luke 24:36-48", "John 20:24-29", "Acts 1:3"],
    thinkers: ["N.T. Wright", "Gary Habermas", "Michael Licona", "William Lane Craig"],
    color: GREEN
  },
  {
    id: "problem-evil",
    icon: "😔",
    title: "The Problem of Evil",
    category: "Suffering & God",
    difficulty: "Advanced",
    shortAnswer: "The existence of evil does not logically disprove God. The free will defense, the soul-making theodicy, and the eschatological perspective each offer serious responses — though they don't eliminate the existential challenge.",
    fullArgument: `The problem of evil is the most emotionally powerful challenge to theism. It exists in two forms:\n\nThe LOGICAL problem: It is logically impossible for an all-good, all-powerful God and evil to coexist. This version was largely refuted by Alvin Plantinga's Free Will Defense — it shows it's logically possible that God couldn't create free beings without the possibility of them choosing evil.\n\nThe EVIDENTIAL problem: Even if not logically impossible, the amount and distribution of evil in the world makes God's existence improbable. This is the live debate.\n\nChristian responses include:\n• Free Will: Morally significant freedom requires the real possibility of evil\n• Soul-Making (John Hick): A world without challenge wouldn't produce character, depth, or love\n• Natural Law: Stable physical laws necessary for rational agency cause some suffering as a side effect\n• Eschatology: "The sufferings of this present time are not worth comparing with the glory that will be revealed" (Rom 8:18). If heaven is real, this isn't the whole story\n• The Incarnation: God entered suffering — he is not distant from it\n\nCrucially, the existence of evil assumes a standard of good — which itself requires a transcendent moral foundation that atheism struggles to provide.`,
    objections: [
      "A loving God would prevent all suffering",
      "Children dying of cancer is incompatible with a good God",
      "Your answer is just 'wait for heaven' — that's not good enough"
    ],
    rebuttals: [
      "Love doesn't always prevent pain — it sometimes allows it for deeper purposes. A parent who never lets a child fail, struggle, or suffer produces an incapable adult. The question is whether God's permission of suffering can be justified given an eternal perspective.",
      "This is the hardest case, and intellectual arguments should be offered carefully. The short answer: if God exists and heaven is real, then even profound suffering here is not the final word — and God's entry into human suffering through Christ is not an irrelevant detail.",
      "This objection assumes we can know what a maximally good God should do across all time and all people. Our epistemic position doesn't allow that certainty. We routinely allow short-term harm for long-term goods — God may have reasons we cannot access."
    ],
    keyVerses: ["Romans 8:18", "Job 38-40", "Revelation 21:4", "2 Corinthians 4:17"],
    thinkers: ["Alvin Plantinga", "John Hick", "C.S. Lewis", "N.T. Wright"],
    color: "#EF4444"
  },
  {
    id: "bible-reliability",
    icon: "📜",
    title: "Biblical Reliability",
    category: "Historical Evidence",
    difficulty: "Starter",
    shortAnswer: "The New Testament is the most extensively attested document from the ancient world. With over 5,800 Greek manuscripts, its textual reliability vastly exceeds any other ancient text. Internal and external evidence supports its historical accuracy.",
    fullArgument: `Textual reliability and historical accuracy are separate questions. Let's take them in turn:\n\nTEXTUAL RELIABILITY\nWe have 5,800+ Greek NT manuscripts (compared to 7 for Plato's works, 251 for Caesar's Gallic Wars). The gap between original writing and earliest copy is ~30 years for the NT — compared to 500-1000 years for most classical literature. Scholars like Bart Ehrman (a skeptic) still affirm we can reconstruct the original text with confidence.\n\nHISTORICAL ACCURACY\n• Archaeological discoveries have repeatedly confirmed NT details: the Pool of Siloam, Pontius Pilate's inscription, the existence of Nazareth, the ossuary of Caiaphas\n• Non-Christian sources (Tacitus, Josephus, Pliny the Younger, the Jewish Talmud) confirm Jesus's existence, crucifixion, and the early Christian movement\n• The gospels contain internal marks of early eyewitness tradition: named sources, geographic and temporal specificity, 'embarrassing' details that fiction writers wouldn't invent (women as first witnesses, disciples' failures)`,
    objections: [
      "The Bible has thousands of contradictions",
      "The gospels were written 100+ years after Jesus",
      "The canon was politically decided at the Council of Nicea"
    ],
    rebuttals: [
      "Most alleged 'contradictions' are complementary accounts or textual variants — not logical contradictions. The kind of variation you find in the gospels is exactly what you'd expect from independent eyewitness testimonies of the same events.",
      "Mainstream scholarship dates Paul's letters to 50-60 AD and the gospels to 60-100 AD — within living memory of the events. The '100+ years' claim is fringe scholarship.",
      "The Council of Nicea (325 AD) dealt with the nature of Christ, not the canon. The NT canon was functionally established well before Nicea, driven by early church usage and apostolic connection, not political fiat."
    ],
    keyVerses: ["2 Timothy 3:16", "2 Peter 1:16-21", "1 John 1:1-3", "Luke 1:1-4"],
    thinkers: ["F.F. Bruce", "Craig Blomberg", "Bart Ehrman", "Daniel Wallace"],
    color: "#F59E0B"
  },
  {
    id: "moral-argument",
    icon: "⚖️",
    title: "The Moral Argument",
    category: "God's Existence",
    difficulty: "Intermediate",
    shortAnswer: "Objective moral values — things that are truly, universally wrong regardless of opinion — exist. The best explanation for objective morality is a morally perfect God who grounds and reveals it.",
    fullArgument: `The moral argument doesn't ask whether atheists can behave morally — of course they can. It asks: what grounds objective moral facts?\n\nIf God does not exist, moral values are either:\n1. Evolutionary adaptations (feelings that helped our ancestors survive)\n2. Social constructs (what a community agrees upon)\n3. Personal preferences\n\nNone of these yield objective moral facts. They explain why we feel things are wrong — not why they actually are wrong. On atheism, the Holocaust was only wrong in the sense that we don't like it — there's no fact of the matter.\n\nBut virtually everyone lives as though some things really are wrong — not just unpopular, not just illegal, but genuinely, absolutely, objectively wrong. Torturing children for fun. Genocide. Rape.\n\nThe moral argument:\n1. If God does not exist, objective moral values do not exist\n2. Objective moral values do exist\n3. Therefore, God exists\n\nChristianity provides a coherent grounding: moral values are grounded in God's perfectly good nature, and moral obligations arise from his commands to beings made in his image.`,
    objections: [
      "Evolution explains morality — we evolved to cooperate",
      "Morality is just social convention",
      "God's commands are arbitrary — why is whatever he says good?"
    ],
    rebuttals: [
      "Evolution explains why we have moral feelings — not why those feelings track objective truth. If evolution could have made us find genocide pleasant, would genocide then be good? No — the truth of moral claims can't depend on evolutionary contingency.",
      "Social conventions are relative. The argument isn't that people in different societies disagree about morality — it's that some moral claims are objectively true regardless of convention. Reformers like Wilberforce were right and their society was wrong.",
      "The 'divine command theory' dilemma (Euthyphro) is not the only Christian view. Most Christian philosophers hold that God commands what he does because of his necessarily good nature — his commands aren't arbitrary; they flow from who he essentially is."
    ],
    keyVerses: ["Romans 2:14-15", "Genesis 1:27", "Micah 6:8", "Matthew 22:37-40"],
    thinkers: ["C.S. Lewis", "Alvin Plantinga", "William Lane Craig", "Ravi Zacharias"],
    color: "#10B981"
  },
  {
    id: "exclusivity",
    icon: "🌍",
    title: "Is Jesus the Only Way?",
    category: "Religious Pluralism",
    difficulty: "Advanced",
    shortAnswer: "Jesus's exclusivity claim (John 14:6) is either true or false — and the answer has nothing to do with politeness. The question is historical and philosophical, not merely about tolerance. Christianity's claim is unique among world religions.",
    fullArgument: `\"I am the way, the truth, and the life. No one comes to the Father except through me.\" (John 14:6) This is either the most important truth ever spoken or a colossal error. It cannot be merely offensive or inappropriate — those are irrelevant categories for historical claims.\n\nThe question is: IS IT TRUE?\n\nChristianity's uniqueness:\n• Most world religions are human attempts to reach God. Christianity is God's act of reaching down to humanity.\n• No other founder claims to be the unique incarnation of God who died for human sin. Buddha offered a path; Muhammad transmitted revelation; Jesus claimed to BE the path and the destination.\n• The resurrection, if historical, vindicates the uniqueness claim. If Jesus rose from the dead, his claims about himself deserve unique attention.\n\nThe question of the unevangelized is handled differently by different Christian traditions:\n• Restrictivism: only explicit faith in Christ saves\n• Inclusivism (C.S. Lewis, C.S. Lewis's \"Narnia\" — Emeth): Christ saves, but may do so through sincere seeking even without explicit knowledge\n• Universalism: All are eventually saved (minority view)\n\nThe honest answer: Christianity claims Christ is the unique path to God, while entrusting to God's justice those who never heard — \"Will not the Judge of all the earth do right?\" (Gen 18:25).`,
    objections: [
      "It's arrogant and intolerant to claim one religion is true",
      "What about people who never heard the Gospel?",
      "All religions basically teach the same thing"
    ],
    rebuttals: [
      "Every worldview claims to be true — the atheist, the Buddhist, the pluralist all believe their view is correct and others are wrong. 'Intolerance' of error is inescapable if truth matters. The question is which view is actually correct.",
      "The New Testament entrusts this to God's perfect justice. Romans 2:14-15 suggests conscience plays a role. What we know: God is good and just; he will not condemn people for what they could not know. What we are responsible for: telling people what we do know.",
      "This is demonstrably false on close examination. Islam and Christianity contradict each other on the Trinity, the crucifixion, and salvation. Buddhism and Christianity contradict each other on the self, reality, and whether God exists. Religions either teach different things, or one is absorbing the others — which isn't 'the same.'"
    ],
    keyVerses: ["John 14:6", "Acts 4:12", "Romans 2:14-15", "Genesis 18:25"],
    thinkers: ["C.S. Lewis", "Clark Pinnock", "N.T. Wright", "Timothy Keller"],
    color: "#EC4899"
  },
  {
    id: "consciousness",
    icon: "🧠",
    title: "Consciousness & the Soul",
    category: "Mind & Science",
    difficulty: "Advanced",
    shortAnswer: "Consciousness — subjective experience, the 'what it is like' to be you — resists purely physical explanation. The 'hard problem of consciousness' remains unsolved, and the soul provides a coherent framework.",
    fullArgument: `Philosopher David Chalmers identified the 'hard problem of consciousness': why is there subjective experience at all? We can explain brain processes — neural firing, electrochemical signals — but we can't explain why there is something it is like to be conscious. Explaining brain function is the 'easy problems.' The hard problem is: why is any of this accompanied by experience?\n\nThe 'explanatory gap' between physical processes and subjective experience has led many non-theistic philosophers to conclude that physicalism (the view that everything is physical) is false or incomplete.\n\nArguments for a soul:\n• Intentionality: Thoughts are 'about' things. Physical processes aren't about anything — they just occur. But mental states have meaning.\n• Unity: Your conscious experience at this moment is unified — one experience, not a committee of neurons. But neural processes are massively parallel and distributed.\n• Free Will: If the mind is just the brain and the brain is fully determined by physics, free will is an illusion. But we act as though it exists.\n• Near-Death Experiences: Verified accounts of out-of-body perception during clinical death present a serious challenge to mind-brain identity theory.\n\nChristianity has always affirmed both body and soul — not Platonic soul imprisonment, but the holistic person who will be bodily resurrected.`,
    objections: [
      "Brain damage changes personality — so the mind is just the brain",
      "NDEs are just brain activity during dying",
      "Evolution fully explains consciousness"
    ],
    rebuttals: [
      "A hammer striking a radio causes it to play poorly — but this doesn't mean the music comes from the radio. A soul interacting with a damaged brain would produce altered behavior without proving the soul IS the brain.",
      "Some NDE accounts involve verified perception of events that occurred when the brain was clinically inactive and cardiac monitors confirmed no brain activity. The 'just brain activity' hypothesis hasn't explained these specific cases.",
      "Evolution can explain why we process information — it cannot explain why that processing is accompanied by experience. A philosophical zombie (a being physically identical to you but with no inner experience) is logically conceivable — so there's no necessary connection between brain and consciousness."
    ],
    keyVerses: ["Genesis 2:7", "Matthew 10:28", "1 Thessalonians 5:23", "1 Corinthians 15:44"],
    thinkers: ["Alvin Plantinga", "David Chalmers", "J.P. Moreland", "Pim van Lommel"],
    color: "#A855F7"
  }
];

type Thinker = {
  name: string; era: string; tradition: string; specialty: string; keyWork: string; quote: string;
  contribution: string; icon: string; color: string;
};

const thinkers: Thinker[] = [
  {
    name: "C.S. Lewis",
    era: "1898–1963",
    tradition: "Anglican",
    specialty: "Moral Argument, Religious Experience, Myth & Christianity",
    keyWork: "Mere Christianity (1952)",
    quote: "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: 'I'm ready to accept Jesus as a great moral teacher, but I don't accept his claim to be God.' That is the one thing we must not say.",
    contribution: "Lewis's 'Lord, Liar, or Lunatic' trilemma remains one of the most popular and accessible arguments for the divinity of Christ. His intellectual journey from atheism to Christianity and his ability to explain faith for ordinary people made him the 20th century's most influential Christian apologist.",
    icon: "📚",
    color: "#00FF88"
  },
  {
    name: "Alvin Plantinga",
    era: "b. 1932",
    tradition: "Reformed",
    specialty: "Free Will Defense, Reformed Epistemology, Warranted Belief",
    keyWork: "God, Freedom, and Evil (1974)",
    quote: "It is entirely right, rational, reasonable, and proper to believe in God without any evidence or argument at all.",
    contribution: "Plantinga's Free Will Defense effectively refuted the logical problem of evil in the 1970s, conceding the point even among atheist philosophers. His Reformed Epistemology argued that belief in God is 'properly basic' — not requiring argument — fundamentally reshaping epistemology of religion.",
    icon: "🧠",
    color: "#6B4FBB"
  },
  {
    name: "N.T. Wright",
    era: "b. 1948",
    tradition: "Anglican",
    specialty: "Historical Jesus, Resurrection, New Testament Theology",
    keyWork: "The Resurrection of the Son of God (2003)",
    quote: "The resurrection of Jesus... is not a theological add-on, a dogma for believers; it is the most historically well-evidenced event in the ancient world.",
    contribution: "Wright's magisterial 800-page historical defense of the resurrection is considered the most comprehensive scholarly treatment of the subject. His 'New Perspective on Paul' has influenced how biblical scholars read Paul's theology of justification.",
    icon: "✝️",
    color: "#10B981"
  },
  {
    name: "William Lane Craig",
    era: "b. 1949",
    tradition: "Evangelical",
    specialty: "Kalam Cosmological Argument, Molinism, Resurrection",
    keyWork: "Reasonable Faith (1994)",
    quote: "God's existence is the most plausible explanation for the fine-tuning of the universe, objective moral values, the existence of abstract objects, consciousness, and the beginning of the universe.",
    contribution: "Craig revived the Kalam Cosmological Argument for the academic world and has defended it in hundreds of formal philosophical debates. His work on divine foreknowledge and middle knowledge (Molinism) has been enormously influential.",
    icon: "⚛️",
    color: "#3B82F6"
  },
  {
    name: "G.K. Chesterton",
    era: "1874–1936",
    tradition: "Catholic",
    specialty: "Cultural apologetics, paradox of orthodoxy, common-sense Christianity",
    keyWork: "Orthodoxy (1908)",
    quote: "The Christian ideal has not been tried and found wanting. It has been found difficult and left untried.",
    contribution: "Chesterton's literary and philosophical apologetics pioneered a style of cultural engagement that predated postmodern critique. His observation that Christianity is uniquely well-fitted to human nature — answering questions other worldviews leave open — remains compelling.",
    icon: "🖊️",
    color: "#F59E0B"
  },
  {
    name: "Francis Collins",
    era: "b. 1950",
    tradition: "Evangelical",
    specialty: "Science & Faith, BioLogos, evolutionary creation",
    keyWork: "The Language of God (2006)",
    quote: "When you have for the first time in front of you this 3.1-billion-letter instruction book that conveys all kinds of information... it's a humbling experience.",
    contribution: "As director of the Human Genome Project and NIH, Collins's conversion from atheism to Christianity represents a powerful testimony that serious scientific work is entirely compatible with Christian faith. He founded BioLogos to advance evolutionary creation.",
    icon: "🧬",
    color: "#EF4444"
  }
];

const resources = [
  { title: "Mere Christianity", author: "C.S. Lewis", type: "Book", level: "Beginner", description: "The best single starting point for intellectual engagement with Christianity. Lewis argues from natural morality to the Christian God with rare clarity.", color: "#00FF88" },
  { title: "Reasonable Faith", author: "William Lane Craig", type: "Book", level: "Advanced", description: "The most comprehensive academic apologetics text available. Covers cosmological, teleological, moral, and ontological arguments plus historical Jesus scholarship.", color: "#3B82F6" },
  { title: "The Case for Christ", author: "Lee Strobel", type: "Book", level: "Beginner", description: "A journalist's investigative approach to the historical evidence for Jesus. Interviews leading New Testament scholars in an accessible format.", color: "#F59E0B" },
  { title: "God, Freedom, and Evil", author: "Alvin Plantinga", type: "Book", level: "Advanced", description: "Plantinga's definitive free will defense and response to the problem of evil. Academic but readable — the text that changed the landscape of analytic philosophy of religion.", color: "#6B4FBB" },
  { title: "Simply Christian", author: "N.T. Wright", type: "Book", level: "Intermediate", description: "Wright's accessible case for Christianity's coherence, framed around four universal human longings: justice, spirituality, relationships, beauty.", color: "#10B981" },
  { title: "ReasonableFaith.org", author: "William Lane Craig", type: "Website", level: "All Levels", description: "Free essays, podcasts, debates, and Q&A covering every major apologetics topic. The most comprehensive free apologetics resource online.", color: "#EC4899" },
];

const APOL_VIDEOS = [
  {
    videoId: "Kxup3OS5ZhQ",
    preacher: "Tim Keller",
    title: "The Reason for God",
    description: "Keller presents his landmark case for Christian faith to an audience at Google, addressing the most common intellectual objections to belief in an accessible and winsome style.",
  },
  {
    videoId: "by8ykv7-A3c",
    preacher: "Voddie Baucham",
    title: "The Supremacy of Christ and Truth in a Postmodern World",
    description: "Baucham's powerful 2006 Desiring God Conference address on how Christians must hold fast to absolute truth and the lordship of Christ against the rising tide of postmodern relativism.",
  },
  {
    videoId: "gySaWKg-NQQ",
    preacher: "Tim Keller",
    title: "The Reason for God - Big Think",
    description: "A concentrated and intellectually sharp presentation of Keller's argument for Christian faith, filmed for Big Think and covering doubt, suffering, and the exclusivity of Christ.",
  },
  {
    videoId: "F4rX1pTRbuo",
    preacher: "Voddie Baucham",
    title: "The Supremacy of Christ - Sermon Jam",
    description: "A stirring sermon jam drawn from Baucham's preaching on the supremacy and sufficiency of Jesus Christ over every philosophy and cultural narrative.",
  },
  {
    videoId: "v6xk8e7gdMA",
    preacher: "R.C. Sproul",
    title: "The Holiness of God",
    description: "Sproul's classic teaching on the defining attribute of God -- his holiness -- and why a right understanding of it is the foundation of every other doctrine in Christian theology.",
  },
  {
    videoId: "svt8i4Vh-gI",
    preacher: "Tim Keller",
    title: "Keller vs. Bacrac: The Reason for God Debate",
    description: "Tim Keller debates atheist Norman Bacrac on \"The Reason for God,\" modeling respectful and rigorous Christian engagement with unbelief in a live forum setting.",
  },
];

const APOL_METHODS = [
  { id: "classical", name: "Classical Apologetics", era: "Aquinas to Craig", context: "Two-step method: natural theology establishes theism, then historical evidence establishes Christianity", bio: "Classical apologetics proceeds in two stages. First, arguments from natural theology (cosmological, teleological, ontological, moral) establish that God exists. Only then, once theism is defensible, does the apologist present historical evidences for Jesus, the resurrection, and Scripture's reliability. The logic: it is worth examining Christian historical claims only if theism is coherent. Key practitioners include Thomas Aquinas (13th century), R.C. Sproul, and William Lane Craig. Craig's debates typically follow this two-step structure explicitly: establishing a philosophical case for theism, then making a historical case for the resurrection.", quote: "The theist can appeal to a whole series of arguments for God's existence which, taken individually, are powerful and which, taken collectively, may constitute a virtually irresistible case for theism.", contribution: "Classical apologetics has dominated formal philosophical apologetics. It produced the most technically rigorous arguments for Christian theism and remains the dominant model in academic philosophy of religion. Its weakness: critics argue that most people don't come to faith through syllogisms." },
  { id: "evidential", name: "Evidential Apologetics", era: "Montgomery, Strobel, Habermas", context: "Single-step: historical and archaeological evidences for Christianity, without first proving theism", bio: "Evidential apologetics presents historical, scientific, and archaeological evidence for Christian claims directly — without first requiring the inquirer to accept theism. John Warwick Montgomery argues that a historian using ordinary principles of historical investigation should conclude the resurrection occurred. Gary Habermas's 'Minimal Facts' approach presents only facts that virtually all critical scholars affirm, then shows the resurrection is the best explanation. Lee Strobel's popular-level work follows this approach, interviewing experts across disciplines. The assumption: evidence can be assessed objectively without prior theological commitments.", quote: "The weight of the evidence is, in fact, so great that no historian of the first century has successfully argued that Jesus did not exist.", contribution: "Evidential apologetics has been enormously influential in popular Christian outreach. Works like The Case for Christ and The Case for the Resurrection have reached millions. Its weakness: critics argue it underestimates how philosophical presuppositions affect evidence assessment." },
  { id: "presuppositional", name: "Presuppositional Apologetics", era: "Cornelius Van Til, Greg Bahnsen", context: "Begin with Scripture's authority as the only foundation for knowledge; expose the unbeliever's borrowed capital", bio: "Presuppositional apologetics, developed by Cornelius Van Til and popularized by Greg Bahnsen, argues that there is no neutral ground. Every person — Christian or not — operates from a starting point (presupposition) that shapes how they evaluate evidence. The apologist's task is not to meet the unbeliever on 'neutral ground' but to show that the unbeliever's worldview is internally incoherent. Key move: the 'transcendental argument' — only the Christian worldview provides the necessary preconditions for the intelligibility of human experience (logic, science, morality). The unbeliever borrows capital from the Christian worldview while trying to deny it.", quote: "The atheist must borrow from the Christian worldview in order to argue against it. He uses laws of logic, assumes the uniformity of nature, and appeals to moral categories — all of which require the God of Christianity to make sense.", contribution: "Van Til's approach has been enormously influential in Reformed circles and has had a renaissance with the internet generation of apologists. Its strength is forcing engagement with worldview-level questions. Its weakness: critics argue it can become unfalsifiable and difficult to use in ordinary conversation." },
  { id: "reformed-epist", name: "Reformed Epistemology", era: "Alvin Plantinga, Nicholas Wolterstorff", context: "Belief in God is 'properly basic' — it requires no argument to be rationally held", bio: "Reformed Epistemology, developed by Alvin Plantinga, Nicholas Wolterstorff, and William Alston, argues that belief in God can be 'properly basic' — held rationally without being based on argument. Just as we don't need arguments to justify our belief in other minds, the external world, or the reality of the past, belief in God can be the starting point of a rational noetic structure. Plantinga's 'Sensus Divinitatis' — the God-given human faculty for perceiving God — grounds belief without inference. Reformed Epistemology doesn't argue that proofs are wrong; it argues they are not required for rational theistic belief.", quote: "It is entirely right, rational, reasonable, and proper to believe in God without any evidence or argument at all — this does not mean, of course, that there aren't powerful arguments for God's existence.", contribution: "Reformed Epistemology fundamentally changed analytic philosophy of religion. By arguing that belief in God is properly basic, Plantinga shifted the burden of proof: the atheist must show theism is irrational, not merely that it lacks certain proofs. It has influenced apologetics by legitimizing non-argumentative paths to faith." },
  { id: "cumulative", name: "Cumulative Case Apologetics", era: "C.S. Lewis, Basil Mitchell, Richard Swinburne", context: "No single argument proves Christianity; many threads woven together constitute a compelling case", bio: "Cumulative case apologetics argues that Christianity is not established by a single proof but by the convergence of many independent lines of evidence — each insufficient alone but powerfully corroborating together. C.S. Lewis exemplified this in Mere Christianity: the moral argument, the longing for 'Joy,' the claims of Jesus, the historical evidence. Richard Swinburne applies Bayesian probability theory: each piece of evidence raises the probability of Christian theism incrementally. Basil Mitchell's analogy of the partisan who trusts the stranger despite contrary evidence captures the nature of cumulative reasoning under uncertainty.", quote: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.", contribution: "The cumulative case approach resonates most with how ordinary people actually come to faith — through a convergence of reasons rather than a decisive single proof. Its weakness is that it can be difficult to quantify or formalize, though Swinburne's Bayesian version addresses this for technically-minded audiences." },
];

const categoryColors: Record<string, string> = {
  "God's Existence": "#6B4FBB",
  "Historical Evidence": GREEN,
  "Suffering & God": "#EF4444",
  "Religious Pluralism": "#EC4899",
  "Mind & Science": "#A855F7",
};

const difficultyColors: Record<string, string> = {
  "Starter": "#00FF88",
  "Intermediate": "#F59E0B",
  "Advanced": "#EF4444"
};

export default function ApologeticsPage() {
  const [tab, setTab] = useState<"cases" | "thinkers" | "resources" | "methods">("cases");
  const [selectedMethod, setSelectedMethod] = useState("classical");
  const methodItem = APOL_METHODS.find(m => m.id === selectedMethod)!;
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [showRebuttal, setShowRebuttal] = useState<Record<string, number | null>>({});
  const [savedCases, setSavedCases] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_apologetics_saved"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [studiedCases, setStudiedCases] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_apologetics_studied"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [selectedThinker, setSelectedThinker] = useState<Thinker | null>(null);

  useEffect(() => {
    try { localStorage.setItem("vine_apologetics_saved", JSON.stringify([...savedCases])); } catch {}
  }, [savedCases]);
  useEffect(() => {
    try { localStorage.setItem("vine_apologetics_studied", JSON.stringify([...studiedCases])); } catch {}
  }, [studiedCases]);

  const toggleSaved = (id: string) => setSavedCases(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleStudied = (id: string) => setStudiedCases(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const categories = ["All", ...Array.from(new Set(cases.map(c => c.category)))];
  const difficulties = ["All", "Starter", "Intermediate", "Advanced"];

  const filtered = cases.filter(c =>
    (categoryFilter === "All" || c.category === categoryFilter) &&
    (diffFilter === "All" || c.difficulty === diffFilter)
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "inherit" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(107,79,187,0.15)", border: "1px solid rgba(107,79,187,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>🛡️</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: PURPLE, textTransform: "uppercase" }}>Apologetics</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Defending the Faith{" "}
            <span style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with Reason
            </span>
          </h1>
          <p style={{ color: MUTED, fontSize: 17, marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Christianity has nothing to fear from hard questions. Explore rigorous arguments, classic objections, and honest rebuttals.
          </p>
          <div style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.2)", borderRadius: 12, padding: "14px 20px", maxWidth: 500, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#00CC66", fontStyle: "italic", margin: 0 }}>
              "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have."
            </p>
            <p style={{ fontSize: 12, color: MUTED, marginTop: 4, marginBottom: 0 }}>— 1 Peter 3:15</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
          {[
            { label: "Cases Studied", value: studiedCases.size, total: cases.length, color: GREEN },
            { label: "Saved for Later", value: savedCases.size, total: cases.length, color: PURPLE },
            { label: "Key Thinkers", value: thinkers.length, total: null, color: "#3B82F6" },
          ].map(stat => (
            <div key={stat.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: stat.color }}>
                {stat.value}{stat.total !== null ? <span style={{ fontSize: 14, color: MUTED, fontWeight: 400 }}>/{stat.total}</span> : ""}
              </div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0 }}>
          {[
            { id: "cases", label: "📋 Cases" },
            { id: "thinkers", label: "🧑‍🏫 Thinkers" },
            { id: "resources", label: "📚 Resources" },
            { id: "methods", label: "🗺️ Methods" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as typeof tab)}
              style={{ padding: "10px 20px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, background: tab === t.id ? CARD : "transparent", color: tab === t.id ? TEXT : MUTED, borderBottom: tab === t.id ? `2px solid ${GREEN}` : "2px solid transparent" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* CASES TAB */}
        {tab === "cases" && (
          <div>
            {/* Filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setCategoryFilter(cat)}
                    style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${categoryFilter === cat ? PURPLE : BORDER}`, background: categoryFilter === cat ? "rgba(107,79,187,0.2)" : "transparent", color: categoryFilter === cat ? TEXT : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {cat}
                  </button>
                ))}
              </div>
              <div style={{ width: "100%", height: 1, background: BORDER, margin: "4px 0" }} />
              <div style={{ display: "flex", gap: 6 }}>
                {difficulties.map(d => (
                  <button key={d} onClick={() => setDiffFilter(d)}
                    style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${diffFilter === d ? (difficultyColors[d] || BORDER) : BORDER}`, background: diffFilter === d ? `${difficultyColors[d]}20` : "transparent", color: diffFilter === d ? difficultyColors[d] || TEXT : MUTED, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Cases */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filtered.map(c => {
                const isExpanded = expandedCase === c.id;
                return (
                  <div key={c.id} style={{ background: CARD, border: `1px solid ${isExpanded ? c.color + "40" : BORDER}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1 }}>
                          <span style={{ fontSize: 28 }}>{c.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: `${categoryColors[c.category]}20`, color: categoryColors[c.category] }}>{c.category}</span>
                              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: `${difficultyColors[c.difficulty]}15`, color: difficultyColors[c.difficulty] }}>{c.difficulty}</span>
                              {studiedCases.has(c.id) && <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: "rgba(0,255,136,0.1)", color: GREEN }}>✓ Studied</span>}
                            </div>
                            <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0, color: TEXT }}>{c.title}</h3>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => toggleSaved(c.id)}
                            style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${savedCases.has(c.id) ? PURPLE : BORDER}`, background: savedCases.has(c.id) ? "rgba(107,79,187,0.2)" : "transparent", cursor: "pointer", fontSize: 14, color: savedCases.has(c.id) ? PURPLE : MUTED }}>
                            {savedCases.has(c.id) ? "🔖" : "📌"}
                          </button>
                          <button onClick={() => setExpandedCase(isExpanded ? null : c.id)}
                            style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${c.color}40`, background: `${c.color}10`, color: c.color, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {isExpanded ? "Close" : "Explore"}
                          </button>
                        </div>
                      </div>
                      <p style={{ fontSize: 14, color: MUTED, marginTop: 12, lineHeight: 1.6, marginBottom: 0 }}>{c.shortAnswer}</p>
                    </div>

                    {isExpanded && (
                      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "24px" }}>
                        {/* Full Argument */}
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 14, fontWeight: 800, color: c.color, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>The Full Argument</h4>
                          {c.fullArgument.split("\n").map((para, i) => (
                            <p key={i} style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.8, marginBottom: 8 }}>{para}</p>
                          ))}
                        </div>

                        {/* Objections & Rebuttals */}
                        <div style={{ marginBottom: 24 }}>
                          <h4 style={{ fontSize: 14, fontWeight: 800, color: "#EF4444", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Common Objections & Responses</h4>
                          {c.objections.map((obj, i) => (
                            <div key={i} style={{ marginBottom: 10 }}>
                              <button onClick={() => setShowRebuttal(prev => ({ ...prev, [c.id]: prev[c.id] === i ? null : i }))}
                                style={{ width: "100%", textAlign: "left", padding: "12px 16px", borderRadius: 10, border: `1px solid ${showRebuttal[c.id] === i ? "#EF444440" : BORDER}`, background: showRebuttal[c.id] === i ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.02)", cursor: "pointer", color: "#EF4444", fontSize: 14, fontWeight: 600 }}>
                                <span style={{ marginRight: 8 }}>{showRebuttal[c.id] === i ? "▾" : "▸"}</span>
                                "{obj}"
                              </button>
                              {showRebuttal[c.id] === i && (
                                <div style={{ padding: "14px 16px", background: "rgba(0,255,136,0.04)", borderRadius: "0 0 10px 10px", border: `1px solid ${BORDER}`, borderTop: "none" }}>
                                  <p style={{ fontSize: 14, color: "#B0F0D0", lineHeight: 1.7, margin: 0 }}>💡 {c.rebuttals[i]}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Key Verses */}
                        <div style={{ marginBottom: 16 }}>
                          <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Key Scriptures</h4>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {c.keyVerses.map(v => (
                              <span key={v} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(0,255,136,0.08)", color: GREEN, fontWeight: 600 }}>{v}</span>
                            ))}
                          </div>
                        </div>

                        {/* Thinkers */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {c.thinkers.map(t => (
                              <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "rgba(107,79,187,0.1)", color: PURPLE, fontWeight: 600 }}>👤 {t}</span>
                            ))}
                          </div>
                          <button onClick={() => toggleStudied(c.id)}
                            style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${studiedCases.has(c.id) ? GREEN : BORDER}`, background: studiedCases.has(c.id) ? "rgba(0,255,136,0.1)" : "transparent", color: studiedCases.has(c.id) ? GREEN : MUTED, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                            {studiedCases.has(c.id) ? "✓ Marked as Studied" : "Mark as Studied"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* THINKERS TAB */}
        {tab === "thinkers" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>
              These thinkers have shaped Christian apologetics across centuries. Their arguments remain relevant and their lives are worth studying.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {thinkers.map(t => (
                <div key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "20px", cursor: "pointer", transition: "border-color 0.2s" }}
                  onClick={() => setSelectedThinker(t)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{t.icon}</span>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0, color: TEXT }}>{t.name}</h3>
                      <p style={{ fontSize: 12, color: t.color, margin: "2px 0 0", fontWeight: 600 }}>{t.era}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: PURPLE, fontWeight: 700, marginBottom: 8 }}>{t.tradition}</p>
                  <p style={{ fontSize: 13, color: MUTED, marginBottom: 12 }}>{t.specialty}</p>
                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "10px 12px", borderLeft: `3px solid ${t.color}` }}>
                    <p style={{ fontSize: 12, color: "#A0A0C0", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{t.quote.slice(0, 100)}..."</p>
                  </div>
                  <button style={{ marginTop: 12, width: "100%", padding: "8px", borderRadius: 10, border: `1px solid ${t.color}30`, background: `${t.color}08`, color: t.color, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
                    Read Bio →
                  </button>
                </div>
              ))}
            </div>

            {/* Modal */}
            {selectedThinker && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
                onClick={() => setSelectedThinker(null)}>
                <div style={{ background: CARD, border: `1px solid ${selectedThinker.color}40`, borderRadius: 20, padding: "32px", maxWidth: 560, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                    <span style={{ fontSize: 40 }}>{selectedThinker.icon}</span>
                    <div>
                      <h2 style={{ fontSize: 22, fontWeight: 900, margin: 0 }}>{selectedThinker.name}</h2>
                      <p style={{ fontSize: 13, color: selectedThinker.color, margin: "4px 0 0", fontWeight: 700 }}>{selectedThinker.era} · {selectedThinker.tradition}</p>
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: 16, marginBottom: 20, borderLeft: `3px solid ${selectedThinker.color}` }}>
                    <p style={{ fontSize: 14, fontStyle: "italic", color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>"{selectedThinker.quote}"</p>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Specialty</h4>
                    <p style={{ fontSize: 14, color: TEXT, margin: 0 }}>{selectedThinker.specialty}</p>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Work</h4>
                    <p style={{ fontSize: 14, color: GREEN, fontWeight: 700, margin: 0 }}>📖 {selectedThinker.keyWork}</p>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: MUTED, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</h4>
                    <p style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.7, margin: 0 }}>{selectedThinker.contribution}</p>
                  </div>
                  <button onClick={() => setSelectedThinker(null)}
                    style={{ width: "100%", padding: "12px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.08)", color: MUTED, cursor: "pointer", fontSize: 14, fontWeight: 700 }}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* METHODS TAB */}
        {tab === "methods" && (
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 20 }}>
              {APOL_METHODS.map(v => (
                <button key={v.id} onClick={() => setSelectedMethod(v.id)}
                  style={{ background: selectedMethod === v.id ? PURPLE : CARD, border: `1px solid ${selectedMethod === v.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{methodItem.name}</h2>
                <div style={{ color: PURPLE, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{methodItem.era}</div>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 16 }}>{methodItem.context}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>{methodItem.bio}</p>
                <div style={{ background: BG, borderLeft: `3px solid ${GREEN}`, borderRadius: "0 8px 8px 0", padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ color: GREEN, fontStyle: "italic", fontSize: 15, lineHeight: 1.7, margin: 0 }}>&ldquo;{methodItem.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${PURPLE}15`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Strengths and Weaknesses</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{methodItem.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESOURCES TAB */}
        {tab === "resources" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 24, fontSize: 15 }}>Curated reading list for every stage of apologetics study.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {resources.map(r => (
                <div key={r.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 4, borderRadius: 4, background: r.color, alignSelf: "stretch", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: `${r.color}15`, color: r.color }}>{r.type}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: MUTED }}>{r.level}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 2px", color: TEXT }}>{r.title}</h3>
                    <p style={{ fontSize: 13, color: PURPLE, fontWeight: 700, marginBottom: 8 }}>by {r.author}</p>
                    <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, margin: 0 }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div style={{ marginTop: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>🎬</span>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: TEXT, margin: 0 }}>Apologetics on Video</h2>
              </div>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 24 }}>
                Watch leading apologists and preachers defend the faith&mdash;ideal for personal study or sharing with a skeptical friend.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
                {APOL_VIDEOS.map(v => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                    <div style={{ padding: "0" }}>
                      <iframe
                        width="100%"
                        style={{ aspectRatio: "16/9", border: "none", borderRadius: "8px 8px 0 0", display: "block" }}
                        src={`https://www.youtube.com/embed/${v.videoId}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div style={{ padding: "16px 20px" }}>
                      <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "rgba(107,79,187,0.18)", color: PURPLE, marginBottom: 8 }}>
                        {v.preacher}
                      </span>
                      <h3 style={{ fontSize: 15, fontWeight: 800, color: TEXT, margin: "0 0 8px", lineHeight: 1.3 }}>{v.title}</h3>
                      <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div style={{ marginTop: 32, background: `linear-gradient(135deg, rgba(107,79,187,0.12), rgba(0,255,136,0.08))`, border: `1px solid rgba(107,79,187,0.25)`, borderRadius: 16, padding: "28px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 28, marginBottom: 10 }}>🛡️</p>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Have a Hard Question?</h3>
              <p style={{ fontSize: 14, color: MUTED, marginBottom: 16, maxWidth: 400, margin: "0 auto 16px" }}>
                The Vine discussion community welcomes honest, hard questions. No question is too difficult — and you won't be dismissed.
              </p>
              <a href="/discussions" style={{ display: "inline-block", padding: "12px 28px", borderRadius: 12, background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, color: BG, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                Ask in Discussions →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
