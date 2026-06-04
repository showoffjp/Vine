"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "questions" | "methods" | "thinkers" | "resources" | "videos";

const TOPIC_FILTERS = ["All", "Existence of God", "Problem of Evil", "Jesus & Resurrection", "Bible", "Science & Faith", "Morality", "Other Religions"];

const QUESTIONS = [
  {
    topic: "Existence of God",
    color: PURPLE,
    q: "Who created God?",
    a: "This question applies only to things that have a beginning — it assumes God is like everything else. The Cosmological Argument argues that there must be an uncaused first cause. If God is eternal and uncaused, asking 'who created God?' is like asking 'what is north of the North Pole?' — the question doesn't apply. Everything that begins to exist has a cause; God, by definition, is the one being whose existence is necessary, not contingent.",
    key_text: "Psalm 90:2; Exodus 3:14",
    quick: "The question assumes God had a beginning. But 'uncaused' is the whole point.",
  },
  {
    topic: "Existence of God",
    color: PURPLE,
    q: "Why does God hide? Why doesn't he just show himself?",
    a: "The Christian answer has two parts. First, God is not fully hidden — Romans 1:20 says his eternal power and divine nature are clearly perceived through creation, 'so that people are without excuse.' General revelation is real. Second, why God does not give everyone a direct vision: Scripture suggests that deeper moral issues are at play. The reason people don't believe is often not primarily intellectual — it is moral (John 3:19). Moreover, faith in a context of some ambiguity may be more genuinely valuable than certainty coerced by overwhelming evidence. God wants genuine relationship, not mere acknowledgment.",
    key_text: "Romans 1:18-20; John 3:19",
    quick: "God reveals himself in creation and conscience. The deeper issue is often not evidence but the will.",
  },
  {
    topic: "Existence of God",
    color: PURPLE,
    q: "Isn't faith just believing things without evidence?",
    a: "Not the biblical kind. The Greek word pistis (faith) does not mean blind belief — it means trust based on reliable testimony and evidence. Faith in the Bible is always grounded: the Israelites trusted God because of the Exodus; Christians believe in the resurrection because of the testimony of witnesses, the empty tomb, and the transformation of disciples. Hebrews 11's 'hall of faith' lists people who acted on God's demonstrated reliability. Blind faith is a caricature of biblical faith. Christians hold that the resurrection is the best historical explanation of a well-documented set of facts.",
    key_text: "Hebrews 11:1; 1 Peter 3:15",
    quick: "Biblical faith is trust based on reliable evidence and testimony — not a leap in the dark.",
  },
  {
    topic: "Existence of God",
    color: PURPLE,
    q: "Can you prove God exists?",
    a: "Prove in the mathematical sense? No — but almost nothing important about reality is provable in that sense. We don't 'prove' that other people have consciousness, that the external world exists, or that the past happened. What we can do is show that belief in God is rationally warranted — better supported by evidence and reasoning than the alternatives. The Cosmological Argument (why is there something rather than nothing?), the Teleological Argument (why is the universe fine-tuned for life?), and the Moral Argument (why is there an objective moral order?) all point powerfully toward a Creator. Philosopher Alvin Plantinga has also argued that belief in God is a 'properly basic' belief — not requiring argument any more than belief in other minds does.",
    key_text: "Romans 1:20; Psalm 19:1",
    quick: "The standard is rational warrant, not mathematical proof. Several powerful arguments point strongly to God.",
  },
  {
    topic: "Problem of Evil",
    color: "#EF4444",
    q: "If God is good and all-powerful, why does evil exist?",
    a: "The Problem of Evil is the most serious intellectual challenge to theism. Christians offer several responses: (1) The Free Will Defense — genuine freedom requires the possibility of real evil; a world of free creatures is better than a world of moral robots. (2) Soul-Making — God may use suffering to develop virtues (courage, compassion, perseverance) that couldn't exist without the possibility of suffering. (3) Greater Good — God may permit specific evils to bring about greater goods beyond our comprehension. (4) Most importantly: the cross — God's response to evil is not to explain it but to enter it. Jesus on the cross is God absorbing evil and defeating it from the inside. The resurrection promises that present evil is not the final word.",
    key_text: "Romans 8:28; Romans 5:3-5; Job 38-42",
    quick: "Free will, soul-making, greater good — and above all, the cross: God enters suffering rather than standing apart from it.",
  },
  {
    topic: "Problem of Evil",
    color: "#EF4444",
    q: "Why do children suffer? Why do innocent people suffer?",
    a: "This is the most emotionally powerful form of the problem of evil and deserves honest engagement rather than quick answers. The intellectual responses include: (1) We live in a fallen world where the effects of sin are distributed across humanity, not precisely to the guilty. (2) God's purposes in allowing specific suffering often exceed our comprehension. (3) The resurrection means present suffering is not the final chapter. But more important than the arguments: Christianity does not promise escape from suffering. Jesus's disciples suffered horribly. The God of the Bible weeps (John 11:35), shares the grief, and enters suffering himself at the cross. The Christian answer to this question is ultimately not an argument but a person — the suffering Servant who bears our griefs and carries our sorrows (Isaiah 53:4).",
    key_text: "Isaiah 53:4; John 11:35; Revelation 21:4",
    quick: "We give answers honestly and incompletely — and point to a God who enters suffering rather than explaining it away.",
  },
  {
    topic: "Problem of Evil",
    color: "#EF4444",
    q: "If God knew humans would sin, why did he create them?",
    a: "The free will defense again: God created humans for genuine relationship, which requires genuine freedom. A being who cannot choose otherwise cannot love — love is only meaningful when it is freely given. God 'knew' in the foreknowledge sense that some would rebel, but chose to create a world where love was possible rather than a world of morally coerced non-entities. Moreover, Christianity holds that God had a plan for redemption before the foundation of the world (Ephesians 1:4) — the story was not surprised by the fall. The cross was not Plan B.",
    key_text: "Ephesians 1:4; Revelation 13:8",
    quick: "Genuine love requires genuine freedom. A world of free creatures who can rebel is better than a world of robots who cannot love.",
  },
  {
    topic: "Jesus & Resurrection",
    color: "#F59E0B",
    q: "Did Jesus really rise from the dead?",
    a: "This is the central factual claim of Christianity — and it is historically defensible. Most New Testament scholars (including skeptical ones) grant: (1) Jesus was crucified and died under Pontius Pilate. (2) The tomb was empty — otherwise the earliest opponents would have simply produced the body. (3) Multiple people reported seeing the risen Jesus — including Paul, who claims to have seen him (1 Corinthians 15:3-8, written ~20 years after the event). (4) The disciples were transformed from terrified deserters into people willing to die for their testimony. (5) The church emerged in Jerusalem, the very city of the crucifixion. The resurrection is the best historical explanation for these facts. Historian N.T. Wright's The Resurrection of the Son of God is the most thorough academic defense.",
    key_text: "1 Corinthians 15:3-8; Acts 1:3",
    quick: "Empty tomb + resurrection appearances + transformed disciples + explosive church growth = resurrection is the best explanation.",
  },
  {
    topic: "Jesus & Resurrection",
    color: "#F59E0B",
    q: "Wasn't Jesus just a good teacher, not God?",
    a: "C.S. Lewis's trilemma: Jesus claimed to be God (John 10:30, 14:6, etc.), forgave sins (Mark 2:5 — only God can do that in Jewish theology), and accepted worship (Matthew 28:17). A man who said these things was either Lord (who he claimed to be), a liar (knowingly deceiving), or a lunatic (sincerely deluded). 'Good teacher' is not among the available options — good teachers don't claim divinity. Lewis: 'I am trying here to prevent anyone saying the really foolish thing that people often say about Him: I'm ready to accept Jesus as a great moral teacher, but I don't accept His claim to be God. That is the one thing we must not say.'",
    key_text: "John 10:30; John 14:6; Mark 2:5-7",
    quick: "Lewis's trilemma: liar, lunatic, or Lord. 'Good teacher' is not available given what he claimed.",
  },
  {
    topic: "Jesus & Resurrection",
    color: "#F59E0B",
    q: "Did Jesus even exist historically?",
    a: "Near-universal scholarly consensus, including from secular and Jewish historians, is that Jesus of Nazareth was a historical figure. Ancient non-Christian sources who mention Jesus include Josephus (Jewish historian, ~93 AD), Tacitus (Roman historian, ~116 AD), Pliny the Younger (~112 AD), and Lucian. The 'mythicist' position (Jesus never existed) is held by essentially no credentialed New Testament scholars. The question worth debating is not whether he existed but who he was.",
    key_text: "Luke 1:1-4; 1 Corinthians 15:3-8",
    quick: "Josephus, Tacitus, Pliny the Younger — non-Christian sources confirm Jesus's existence. 'Mythicist' is a fringe view with no mainstream scholarly support.",
  },
  {
    topic: "Bible",
    color: "#3B82F6",
    q: "Isn't the Bible full of contradictions?",
    a: "Most alleged 'contradictions' dissolve on closer reading — they are harmonizable differences in perspective, emphasis, or genre, not logical contradictions. The Gospels, for instance, record the resurrection appearances with minor differences, as eyewitness accounts typically do. Exact uniformity across independent witnesses is actually evidence of collusion, not authenticity. Some biblical tensions are genuine and require careful interpretation (genealogies, chronological questions). The meaningful question is whether any apparent contradiction undermines the core theological claims. Scholars who specialize in these questions (Craig Blomberg, Gleason Archer, John Wenham) have addressed most alleged contradictions in detail.",
    key_text: "2 Timothy 3:16; 2 Peter 1:21",
    quick: "Most alleged contradictions are harmonizable. Genuine tensions require careful exegesis, not dismissal. The core theological claims stand.",
  },
  {
    topic: "Bible",
    color: "#3B82F6",
    q: "How do we know the Bible hasn't been changed over time?",
    a: "The manuscript evidence for the New Testament is extraordinary — we have over 5,800 Greek manuscripts, more than for any ancient document by orders of magnitude. Textual criticism has shown remarkable consistency across manuscripts from different regions and centuries. The Dead Sea Scrolls (discovered 1947) confirmed that the Old Testament text had been preserved with extraordinary fidelity over 1,000 years. Scholar Bart Ehrman (a skeptic) acknowledges that we can reconstruct the original New Testament text with high confidence — the variants that exist are mostly minor spelling and word order differences.",
    key_text: "Isaiah 40:8; 1 Peter 1:25",
    quick: "5,800+ Greek NT manuscripts; Dead Sea Scrolls confirmed OT fidelity. We know what the originals said.",
  },
  {
    topic: "Bible",
    color: "#3B82F6",
    q: "The Bible was written by humans — why should I trust it?",
    a: "Christian theology affirms that the Bible was written by humans under the inspiration of the Holy Spirit — this is called dual authorship. The authors' personalities, vocabularies, and perspectives are all present, while God superintended the process so that what was written was what God intended. This is not dictation (God whispering words) but inspiration (God working through the human author). The evidence for this claim includes the internal consistency of a document written by 40+ authors over 1,500 years, fulfilled prophecy, historical accuracy where it can be checked, and the transforming power of Scripture across thousands of years and cultures.",
    key_text: "2 Timothy 3:16; 2 Peter 1:20-21",
    quick: "Human authorship and divine inspiration are not mutually exclusive. The claim is dual authorship, not divine dictation.",
  },
  {
    topic: "Science & Faith",
    color: "#10B981",
    q: "Doesn't science disprove God?",
    a: "Science describes how the natural world works — it cannot address questions of ultimate origin, purpose, or meaning. Science presupposes a rationally ordered universe; the question of why the universe is rationally ordered is a philosophical and theological question, not a scientific one. Moreover, science cannot explain why there is something rather than nothing, why the universe is fine-tuned for life (the anthropic problem), or why consciousness exists. These questions point beyond naturalism. Leading scientists who are committed Christians include Francis Collins (genome project director), John Polkinghorne (particle physicist), and Alister McGrath (biochemist and theologian). Christianity, in fact, helped create modern science — the belief that God made an ordered creation that could be studied was the intellectual foundation of the Scientific Revolution.",
    key_text: "Psalm 19:1; Romans 1:20",
    quick: "Science describes nature; it can't address ultimate origin, purpose, or meaning. These are philosophical questions.",
  },
  {
    topic: "Science & Faith",
    color: "#10B981",
    q: "What about evolution?",
    a: "Christians hold a range of views on evolution: Young Earth Creationism (universe ~6,000 years old, special creation), Old Earth Creationism (old universe, special creation of species), and Evolutionary Creationism / Theistic Evolution (God creates through evolutionary process). All three positions are held by serious Christians who affirm Scripture's authority. The key theological claims — God as Creator, humans as made in God's image with unique dignity, the historical fall — are affirmed across these positions, even if the mechanisms differ. The question is not 'Bible or science?' but 'how does Scripture address scientific questions?' and 'what does the science actually show?'",
    key_text: "Genesis 1-2; Colossians 1:16",
    quick: "YEC, OEC, and Evolutionary Creationism are all held by serious Christians. The key theological claims can be maintained across views.",
  },
  {
    topic: "Science & Faith",
    color: "#10B981",
    q: "What about the Big Bang and an old universe?",
    a: "Most Christian scholars — including committed inerrantists — accept the scientific consensus that the universe is ~13.8 billion years old and began in the Big Bang. Interestingly, the Big Bang actually supports theism: the universe had a beginning, which means it had a cause. A universe that always existed would be harder to explain theistically; a universe with a beginning needs an explanation outside itself. The famous astronomer Robert Jastrow (not a theist) wrote: 'For the scientist who has lived by his faith in the power of reason, the story ends like a bad dream... he climbed the mountains of ignorance; he is about to conquer the highest peak; as he pulls himself over the final rock, he is greeted by a band of theologians who have been sitting there for centuries.'",
    key_text: "Genesis 1:1; John 1:1-3",
    quick: "The Big Bang supports theism — the universe had a beginning and needs an explanation outside itself.",
  },
  {
    topic: "Morality",
    color: "#EC4899",
    q: "Can't you be good without God?",
    a: "Yes — many non-believers live morally admirable lives. The Moral Argument is not that non-believers can't behave morally; it's that moral behavior can't be grounded without God. If there is no God, on what basis are moral judgments anything more than personal preferences or evolutionary conditioning? In a purely materialist universe, 'torture is wrong' is ultimately just chemistry. C.S. Lewis's Moral Argument: the existence of a cross-cultural, objective moral law (which everyone seems to know and violate) points to a Moral Law Giver. Romans 2:14-15 affirms that Gentiles have the law 'written on their hearts' — the moral intuitions of non-believers are evidence of the God they deny.",
    key_text: "Romans 2:14-15; Romans 1:18-20",
    quick: "Non-believers can behave morally — the question is whether moral claims can be grounded without a moral Law Giver.",
  },
  {
    topic: "Morality",
    color: "#EC4899",
    q: "Isn't Christianity homophobic and anti-women?",
    a: "Christianity has been used to justify real harm — that must be acknowledged honestly. But the charge deserves careful examination. On women: Jesus's treatment of women was scandalously countercultural for 1st century Palestine — women were among his closest followers and were the first witnesses to the resurrection (a detail no inventor of a resurrection myth in the 1st century would have chosen). On homosexuality: the historic Christian position is that sexual activity is reserved for marriage between a man and woman — this is a judgment of behavior, not persons. Christians who hold this view are not required to hate gay people; many LGBTQ people have found genuine community and care in historic Christian churches. The confusion of 'disagrees with' and 'hates' is a cultural mistake.",
    key_text: "Galatians 3:28; Matthew 19:3-9",
    quick: "Jesus was radically countercultural in elevating women. The historic Christian position on sexuality is about behavior, not worth.",
  },
  {
    topic: "Other Religions",
    color: GREEN,
    q: "What about people who have never heard the gospel?",
    a: "Christians hold different views: (1) Restrictivism — only conscious faith in Christ saves; those who haven't heard are judged by the light they had and found wanting. (2) Inclusivism — Christ's atonement covers more than the church knows; some who respond to general revelation may be saved through Christ without knowing his name. (3) Universalism — all are ultimately saved (a minority position). Most conservative Christians hold either restrictivism or inclusivism. Key points: (a) God is the Judge, not us, and he judges justly. (b) Romans 1-2 suggests all people have enough revelation to be held accountable. (c) The urgency of missions is not diminished if we are uncertain about the unevangelized — we go because Jesus commands it and people need the gospel.",
    key_text: "Romans 1:18-20; Romans 2:12-16; Acts 17:30",
    quick: "Restrictivism and inclusivism are both defensible. God judges justly with what people have. Our job is missions.",
  },
  {
    topic: "Other Religions",
    color: GREEN,
    q: "Aren't all religions basically the same?",
    a: "No — on the most important questions, the world religions teach contradictory things. Christianity: God is personal and triune; humans are fallen and need redemption; salvation is by grace through faith in the atoning death of Christ; history ends in bodily resurrection and judgment. Islam: God is absolutely one and without partners; salvation is by submission and works; Jesus did not die. Buddhism: there is no permanent self; the goal is extinguishing desire; the concept of a personal God is mostly absent. These are not different paths up the same mountain — they are contradictory claims about reality. 'Many paths to the same God' requires ignoring what each religion actually says.",
    key_text: "John 14:6; Acts 4:12",
    quick: "The world religions make contradictory truth claims. 'All the same' requires ignoring what each actually teaches.",
  },
  {
    topic: "Other Religions",
    color: GREEN,
    q: "Isn't it arrogant to say Jesus is the only way?",
    a: "This is actually a confusion about what arrogance means. Every truth claim, by its nature, excludes its negation — including the claim that 'no one religion has the truth.' The question is not whether to make exclusive truth claims but which ones are justified. If Jesus rose from the dead and said 'I am the way, the truth, and the life' (John 14:6), then Christian exclusivity is not arrogance — it is fidelity to the facts. If he didn't rise, then the claim is wrong for other reasons. The offense of Christian exclusivity is not arrogance; it is the cross — a God who died for enemies, which is a unique claim that is either true or the most audacious lie in human history.",
    key_text: "John 14:6; Acts 4:12; 1 Timothy 2:5",
    quick: "All truth claims are exclusive by nature. The question is whether Jesus rose from the dead. If he did, exclusivity follows.",
  },
];

const APOL_METHODS = [
  {
    id: "classical",
    name: "Classical Apologetics",
    icon: "🏛️",
    description: "Establishes theism through reason and philosophy first, then moves to Christian evidences. Uses cosmological, ontological, and moral arguments to prove a God exists before addressing the specific claims of Christianity.",
    strengths: ["Philosophically rigorous", "Addresses foundational worldview questions", "Strong in academic and philosophical contexts", "Works with natural theology"],
    weaknesses: ["Can feel abstract and detached", "Two-step process may lose audiences", "Relies heavily on philosophical training"],
    key_proponents: ["Thomas Aquinas", "Norman Geisler", "R.C. Sproul", "J.P. Moreland"],
  },
  {
    id: "evidential",
    name: "Evidential Apologetics",
    icon: "🔍",
    description: "Focuses on historical and empirical evidence for Christianity — particularly the resurrection. Argues that the historical evidence for Jesus's resurrection is compelling enough to justify Christian belief without first proving theism philosophically.",
    strengths: ["Accessible and concrete", "Engages historical-minded skeptics", "Strong manuscript and archaeological evidence", "Useful in conversations with journalists and lawyers"],
    weaknesses: ["Can appear to assume naturalism", "Historical probability arguments feel uncertain to some", "Misses deeper worldview presuppositions"],
    key_proponents: ["Gary Habermas", "Lee Strobel", "Josh McDowell", "N.T. Wright"],
  },
  {
    id: "presuppositional",
    name: "Presuppositional Apologetics",
    icon: "🧱",
    description: "Argues that the unbeliever's worldview is internally incoherent and that only the Christian worldview provides the preconditions for intelligibility, logic, science, and morality. Named for Cornelius Van Til.",
    strengths: ["Exposes deep worldview assumptions", "Shows Christianity as necessary not just probable", "Avoids conceding neutral ground", "Theologically robust"],
    weaknesses: ["Can appear circular to critics", "Less accessible to general audiences", "May feel confrontational", "Difficult to apply in casual conversation"],
    key_proponents: ["Cornelius Van Til", "Greg Bahnsen", "John Frame", "Scott Oliphint"],
  },
  {
    id: "reformed-epistemology",
    name: "Reformed Epistemology",
    icon: "🧠",
    description: "Associated with Alvin Plantinga. Argues that belief in God can be 'properly basic' — rationally justified without requiring argument or evidence, similar to how we accept other foundational beliefs like memory or the external world.",
    strengths: ["Philosophically sophisticated", "Defends rationality of belief without evidence", "Counters the evidentialist challenge directly", "Strong in academic philosophy"],
    weaknesses: ["Highly technical — difficult to popularize", "May not satisfy those who want positive arguments", "Seems to sidestep rather than engage skeptics"],
    key_proponents: ["Alvin Plantinga", "Nicholas Wolterstorff", "William Alston"],
  },
  {
    id: "cumulative",
    name: "Cumulative Case Apologetics",
    icon: "📊",
    description: "Draws on multiple lines of evidence — cosmological, teleological, moral, historical, experiential — arguing that while no single argument is conclusive, the converging weight of evidence makes Christianity the most rational worldview.",
    strengths: ["Mirrors how we reason in everyday life", "No single point of failure", "Comprehensive and flexible", "Appealing to broad audiences"],
    weaknesses: ["Can feel like death by a thousand qualifications", "Hard to assess cumulative probability formally", "Requires breadth of knowledge"],
    key_proponents: ["C.S. Lewis", "Basil Mitchell", "Timothy McGrew", "John Warwick Montgomery"],
  },
];

const APOL_THINKERS = [
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898–1963",
    specialty: "Literary Apologetics & Reason",
    bio: "Former atheist and Oxford/Cambridge literature professor who became Christianity's most influential 20th-century defender. His conversion from hard atheism through theism to Christianity gave him unique insight into the skeptic's mind. Known for making profound theological arguments through accessible prose and imaginative fiction.",
    famous_work: "Mere Christianity (1952)",
    quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.",
  },
  {
    id: "chesterton",
    name: "G.K. Chesterton",
    era: "1874–1936",
    specialty: "Paradox, Culture & Common Sense",
    bio: "English journalist, poet, and philosopher who defended orthodox Christianity against the progressive skepticism of his era with wit, paradox, and brilliant common sense. His style of argument — turning the objector's assumptions back on themselves — remains unmatched. Converted to Catholicism in 1922.",
    famous_work: "Orthodoxy (1908)",
    quote: "The Christian ideal has not been tried and found wanting. It has been found difficult; and left untried.",
  },
  {
    id: "plantinga",
    name: "Alvin Plantinga",
    era: "1932–present",
    specialty: "Reformed Epistemology & Philosophy of Religion",
    bio: "Retired Notre Dame philosopher widely regarded as the greatest Christian philosopher of the 20th century. Developed the Free Will Defense against the logical problem of evil and the concept of 'warranted' Christian belief. His Evolutionary Argument Against Naturalism is considered one of the strongest arguments against atheism.",
    famous_work: "Warranted Christian Belief (2000)",
    quote: "It is entirely right, rational, reasonable, and proper to believe in God without any evidence or argument at all.",
  },
  {
    id: "craig",
    name: "William Lane Craig",
    era: "1949–present",
    specialty: "Philosophical Theology & Resurrection",
    bio: "American philosopher and theologian who has done more than anyone to restore apologetics to academic respectability. Champion of the Kalam Cosmological Argument and a leading defender of the resurrection's historicity. Has publicly debated leading atheists including Christopher Hitchens, Sam Harris, and Daniel Dennett.",
    famous_work: "Reasonable Faith (1984)",
    quote: "The question is not whether God exists, but whether we will acknowledge the God who already exists.",
  },
  {
    id: "zacharias",
    name: "Ravi Zacharias",
    era: "1946–2020",
    specialty: "Cultural Apologetics & Reaching Intellectuals",
    bio: "Born in India, Ravi Zacharias came to faith after a suicide attempt at 17. He became one of the most gifted communicators in Christian history, speaking at Oxford, Harvard, and in the heart of skeptical cultures worldwide. Known for answering questions behind the questions and addressing the emotional dimensions of doubt alongside the intellectual.",
    famous_work: "Can Man Live Without God (1994)",
    quote: "The longing for meaning is not a flaw to be overcome — it is the very signal of a soul made for more than this world.",
  },
];

const APOL_RESOURCES = [
  {
    id: "mere-christianity",
    title: "Mere Christianity",
    author: "C.S. Lewis",
    type: "book",
    level: "Beginner",
    description: "The most accessible entry point into Christian apologetics. Lewis argues from basic moral intuitions to the reasonableness of Christianity. Originally a series of BBC radio broadcasts during World War II.",
    best_for: "Skeptical friends, seekers, anyone starting their apologetics journey",
  },
  {
    id: "reasonable-faith",
    title: "Reasonable Faith",
    author: "William Lane Craig",
    type: "book",
    level: "Advanced",
    description: "The most comprehensive systematic apologetics text available. Covers the existence of God, the resurrection, and the problem of evil with full philosophical rigor. Required reading for serious students.",
    best_for: "Philosophy students, pastors, serious apologists who want academic depth",
  },
  {
    id: "cold-case",
    title: "Cold-Case Christianity",
    author: "J. Warner Wallace",
    type: "book",
    level: "Intermediate",
    description: "A former cold-case detective applies forensic investigation techniques to the Gospels, examining the evidence for Jesus as he would examine a decades-old murder case. Practical, evidence-based, and engaging.",
    best_for: "Evidence-oriented thinkers, law enforcement, anyone who responds to detective-style reasoning",
  },
  {
    id: "reason-for-god",
    title: "The Reason for God",
    author: "Timothy Keller",
    type: "book",
    level: "Intermediate",
    description: "Written for cultural skeptics in secular urban environments. Keller engages objections from his Manhattan congregation and demonstrates that Christian faith is not intellectually naive. Balances philosophy with pastoral warmth.",
    best_for: "Urban professionals, cultural skeptics, readers who care about justice and culture",
  },
  {
    id: "orthodoxy",
    title: "Orthodoxy",
    author: "G.K. Chesterton",
    type: "book",
    level: "Intermediate",
    description: "Chesterton's account of how he arrived at orthodox Christianity by following the logic of his own imagination and experience. Dense, witty, and unlike anything else in Christian literature. A masterclass in thinking Christianly.",
    best_for: "Literary readers, those who enjoy paradox and wit, people bored by standard apologetics",
  },
  {
    id: "case-for-christ",
    title: "The Case for Christ",
    author: "Lee Strobel",
    type: "book",
    level: "Beginner",
    description: "A former legal editor at the Chicago Tribune interviews leading New Testament scholars after his wife's conversion. Covers the historical evidence for Jesus's life, death, and resurrection in accessible journalistic style.",
    best_for: "Complete beginners, those who are skeptical of the resurrection's historical basis",
  },
];

export default function ApologeticsQuestionsPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_apologetics-questions_tab", "questions");
  const [topic, setTopic] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedThinker, setSelectedThinker] = useState<string | null>(null);

  const filtered = QUESTIONS.filter(q => topic === "All" || q.topic === topic);

  const levelColor = (level: string) => level === "Beginner" ? GREEN : level === "Advanced" ? "#EF4444" : PURPLE;
  const typeColor = (type: string) => type === "book" ? "#F59E0B" : type === "podcast" ? "#3B82F6" : type === "website" ? "#10B981" : "#EC4899";

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>❓</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Tough Questions, Real Answers</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 580, margin: "0 auto" }}>
            The most common challenges to the Christian faith &mdash; answered honestly, with depth, and with the best scholarship available. Not for silencing questions but for thinking them through.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 6 }}>
          {(["questions", "methods", "thinkers", "resources", "videos"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ background: activeTab === t ? PURPLE : "transparent", color: activeTab === t ? "#fff" : MUTED, border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer", flex: 1 }}>
              {t === "questions" ? "Questions" : t === "methods" ? "Methods" : t === "thinkers" ? "Thinkers" : t === "resources" ? "Resources" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* Questions tab */}
        {activeTab === "questions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                1 Peter 3:15: &ldquo;Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have &mdash; but do this with gentleness and respect.&rdquo; Apologetics is not winning arguments; it is removing intellectual obstacles so people can consider the gospel clearly.
              </p>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
              {TOPIC_FILTERS.map(t => (
                <button key={t} onClick={() => setTopic(t)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: `1px solid ${topic === t ? GREEN : BORDER}`, background: topic === t ? `${GREEN}15` : "transparent", color: topic === t ? GREEN : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {t}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {filtered.map((item, i) => (
                <div key={i}>
                  <button onClick={() => setExpanded(expanded === item.q ? null : item.q)}
                    style={{ width: "100%", background: expanded === item.q ? `${item.color}10` : CARD, border: `1px solid ${expanded === item.q ? item.color + "40" : BORDER}`, borderRadius: expanded === item.q ? "12px 12px 0 0" : 12, padding: "16px 20px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                        <span style={{ background: `${item.color}15`, color: item.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{item.topic}</span>
                      </div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>&ldquo;{item.q}&rdquo;</div>
                      {expanded !== item.q && (
                        <div style={{ color: MUTED, fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{item.quick}</div>
                      )}
                    </div>
                    <span style={{ color: item.color, flexShrink: 0 }}>{expanded === item.q ? "−" : "+"}</span>
                  </button>

                  {expanded === item.q && (
                    <div style={{ background: BG, border: `1px solid ${item.color}20`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: 22 }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>{item.a}</p>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <div style={{ background: `${item.color}08`, border: `1px solid ${item.color}20`, borderRadius: 8, padding: "6px 12px" }}>
                          <span style={{ color: item.color, fontWeight: 700, fontSize: 10 }}>KEY TEXTS: </span>
                          <span style={{ color: MUTED, fontSize: 11 }}>{item.key_text}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}20`, borderRadius: 12, padding: 24, marginTop: 32 }}>
              <h3 style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 12 }}>Recommended Further Study</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {[
                  { title: "Mere Christianity", author: "C.S. Lewis", type: "Book" },
                  { title: "The Case for Christ", author: "Lee Strobel", type: "Book" },
                  { title: "I Don't Have Enough Faith to Be an Atheist", author: "Geisler & Turek", type: "Book" },
                  { title: "The Reason for God", author: "Tim Keller", type: "Book" },
                  { title: "Reasonable Faith", author: "William Lane Craig", type: "Book" },
                  { title: "CrossExamined YouTube", author: "Frank Turek", type: "Video" },
                ].map((r, i) => (
                  <div key={i} style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12 }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 13 }}>{r.title}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{r.author}</div>
                    <div style={{ color: PURPLE, fontSize: 10, fontWeight: 700, marginTop: 4 }}>{r.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Methods tab */}
        {activeTab === "methods" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>Apologetic Methods</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                Different schools of Christian apologetics use different strategies to defend and commend the faith. Each has strengths depending on the audience and context.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {APOL_METHODS.map(method => (
                <div key={method.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{method.icon}</span>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 17, margin: 0 }}>{method.name}</h3>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>
                        {method.key_proponents.join(" · ")}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{method.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 900, fontSize: 11, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Strengths</div>
                      {method.strengths.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 5 }}>
                          <span style={{ color: GREEN, flexShrink: 0, fontSize: 12, marginTop: 1 }}>+</span>
                          <span style={{ color: TEXT, fontSize: 13, lineHeight: 1.5 }}>{s}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: `rgba(239,68,68,0.05)`, border: `1px solid rgba(239,68,68,0.15)`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: MUTED, fontWeight: 900, fontSize: 11, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Weaknesses</div>
                      {method.weaknesses.map((w, i) => (
                        <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 5 }}>
                          <span style={{ color: MUTED, flexShrink: 0, fontSize: 12, marginTop: 1 }}>−</span>
                          <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Thinkers tab */}
        {activeTab === "thinkers" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>Great Apologists</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                Thinkers who have shaped the intellectual defense of Christianity. Select any to read their story and contribution.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 24 }}>
              {APOL_THINKERS.map(thinker => (
                <button key={thinker.id} onClick={() => setSelectedThinker(selectedThinker === thinker.id ? null : thinker.id)}
                  style={{ background: selectedThinker === thinker.id ? `${PURPLE}18` : CARD, border: `1px solid ${selectedThinker === thinker.id ? PURPLE : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                  <div style={{ color: PURPLE, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{thinker.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginBottom: 6 }}>{thinker.era}</div>
                  <div style={{ background: `${PURPLE}12`, color: PURPLE, borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 700, display: "inline-block" }}>{thinker.specialty}</div>
                </button>
              ))}
            </div>

            {selectedThinker && (() => {
              const t = APOL_THINKERS.find(th => th.id === selectedThinker)!;
              return (
                <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{t.name}</h3>
                      <div style={{ color: MUTED, fontSize: 13 }}>{t.era} &nbsp;&middot;&nbsp; {t.specialty}</div>
                    </div>
                    <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: "6px 12px", fontSize: 12, color: PURPLE, fontWeight: 700 }}>
                      {t.famous_work}
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{t.bio}</p>
                  <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: 0, paddingLeft: 16 }}>
                    <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              );
            })()}
          </div>
        )}

        {/* Resources tab */}
        {activeTab === "resources" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>Apologetics Resources</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                Curated books, podcasts, and courses to build your apologetics foundation — from first conversations to serious academic study.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
              {APOL_RESOURCES.map(res => (
                <div key={res.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 22 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ background: `${levelColor(res.level)}18`, color: levelColor(res.level), borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>{res.level}</span>
                    <span style={{ background: `${typeColor(res.type)}18`, color: typeColor(res.type), borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, textTransform: "capitalize" }}>{res.type}</span>
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>{res.title}</h3>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 12 }}>{res.author}</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{res.description}</p>
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 12 }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 11 }}>Best for: </span>
                    <span style={{ color: GREEN, fontSize: 13 }}>{res.best_for}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures, debates, and responses to the toughest questions skeptics raise about Christianity — from leading apologists and scholars.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "REFLtsGRTho", title: "John Lennox Answers Questions on God, Science and Faith", channel: "John Lennox / Premier Unbelievable", description: "A live Q&A where Professor John Lennox takes hard questions about God, science, miracles, and the evidence for Christianity." },
                  { videoId: "1C_nQHQ1epc", title: "John Lennox Explains Suffering and It Will Blow Your Mind", channel: "John Lennox", description: "Lennox addresses the problem of evil and suffering — perhaps the single most common objection to Christian faith — with philosophical rigor and pastoral warmth." },
                  { videoId: "NpJm-qX3rW0", title: "God, Science & the Big Questions: Responding to the New Atheism", channel: "Leading Christian Thinkers", description: "A panel of Christian scholars — including John Lennox — respond to the arguments of the New Atheism with careful, reasoned replies." },
                  { videoId: "g5r4l55MUe0", title: "Why Science Buries Atheism, Not God", channel: "Professor John Lennox", description: "Lennox argues that modern science, far from undermining faith, actually points strongly toward the existence of a Creator and Designer." },
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
      <Footer />
    </div>
  );
}
