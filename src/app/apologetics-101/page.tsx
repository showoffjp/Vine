"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "what" | "methods" | "arguments" | "common" | "videos";

const WHAT_ITEMS = [
  {
    id: "biblical-call",
    title: "The Biblical Call",
    body: "Scripture is not silent on the duty of the believer to defend the faith. 1 Peter 3:15 commands us to 'always be ready to give a defense to everyone who asks you a reason for the hope that is in you.' Jude 3 urges us to 'contend earnestly for the faith which was once for all delivered to the saints.' Acts 17 shows Paul at the Areopagus — engaging the philosophers of Athens on their own turf, quoting their own poets, reasoning from creation to the unknown God. This is the model: intellectually serious, culturally engaged, yet anchored in the gospel. 2 Corinthians 10:5 sets the scope: 'taking every thought captive to the obedience of Christ.' Apologetics is the discipline of doing exactly that.",
  },
  {
    id: "vs-evangelism",
    title: "Apologetics vs. Evangelism",
    body: "Evangelism is proclamation: announcing the good news that Jesus died and rose and that faith in him brings forgiveness and new life. Apologetics is defense: answering objections, removing obstacles, and showing that Christian belief is reasonable. Both are necessary. Apologetics serves evangelism as pre-evangelism — it plows the soil before the seed is planted. A person who has convinced themselves that Christianity is intellectually bankrupt will not listen to the gospel. Apologetics clears the ground. But clearing ground is not the same as planting. The apologist who never shares the gospel has done only half the work. Ideally, every Christian does both.",
  },
  {
    id: "audience",
    title: "The Audience",
    body: "1 Peter 3:15 says 'to everyone who asks.' This is not a call to academic specialists. The audience for apologetics is: the person in the pew wrestling with doubts they are afraid to voice, the college student encountering their first philosophy professor, the skeptical family member at Christmas dinner, the atheist colleague who genuinely wants to understand why you believe what you believe. Apologetics is not a game for experts — it is a basic competency for every Christian who lives in the world. You do not need to have read Plantinga to give a thoughtful answer to 'who created God?'",
  },
  {
    id: "confidence",
    title: "Confidence Without Arrogance",
    body: "1 Peter 3:15 does not end with 'give a defense.' It ends with 'with gentleness and respect.' The apologist's posture is as important as the apologist's arguments. The greatest danger in apologetics is winning an argument while losing a person. If your goal is to be right, you will often succeed and never persuade. If your goal is to serve the person in front of you — to take their questions seriously, to genuinely seek understanding alongside them — you will be far more effective. Confidence in the truth of Christianity is not the same as contempt for those who do not yet believe it. Arrogance is not a fruit of the Spirit.",
  },
  {
    id: "classical-vs-presup",
    title: "Classical vs. Presuppositional",
    body: "The two major schools of apologetics have a long and lively debate. Classical apologetics (William Lane Craig, Thomas Aquinas) argues first for theism from reason and nature, then argues specifically for Christianity. It assumes some common rational ground with the unbeliever — both can examine evidence and reason to conclusions. Presuppositional apologetics (Greg Bahnsen, Cornelius Van Til) denies that any such neutral ground exists. Every person reasons from prior commitments (presuppositions), and the non-Christian's presuppositions are ultimately self-defeating. The apologist's task is to expose the incoherence of the non-Christian worldview and show that only Christianity can ground reason and morality. Craig and Bahnsen debated these questions publicly and productively. Both approaches have genuine strengths — many apologists draw from both.",
  },
  {
    id: "doubt",
    title: "Why Doubt Is Not the Enemy",
    body: "Anselm's famous phrase 'faith seeking understanding' (fides quaerens intellectum) captures the right posture. Faith is not the absence of questions; it is the commitment to pursue understanding within the context of trust. Doubt is the engine of intellectual growth. The believer who has never asked hard questions has a fragile faith; the one who has asked them and found the tradition more than adequate has a robust one. Augustine, Aquinas, Luther, Calvin, Lewis — all were serious intellectual questioners. The church has historically welcomed the hard questions. Genuine intellectual faith is not a lesser form of trust; it may be the most mature form — the faith that has been tested and has held.",
  },
];

const METHODS = [
  {
    id: "classical",
    name: "Classical Apologetics",
    proponent: "Thomas Aquinas, William Lane Craig",
    keyIdea: "Establish theism first through reason and nature, then argue for Christianity specifically. A two-step approach: God exists; this God is the God of the Bible.",
    strength: "Philosophically rigorous. Effective with those who respect reason as an authority. Strong independent arguments for God's existence from cosmology, teleology, and morality.",
    weakness: "Presuppositionalists argue the non-Christian cannot reason neutrally — their worldview shapes what counts as evidence. Even if theism is established, the move to Christian theism still requires additional argument.",
  },
  {
    id: "evidential",
    name: "Evidential Apologetics",
    proponent: "Gary Habermas, Josh McDowell",
    keyIdea: "Historical, archaeological, and scientific evidence is sufficient, on its own, to warrant belief in Christianity. McDowell's 'Evidence That Demands a Verdict' is the classic example of the genre.",
    strength: "Accessible to non-philosophers. The resurrection evidence is genuinely strong. Keeps the conversation focused on specific, historically falsifiable claims.",
    weakness: "No one is purely neutral with evidence — worldviews shape interpretation. Evidence can be piecemeal: winning the resurrection argument does not automatically produce commitment.",
  },
  {
    id: "presuppositional",
    name: "Presuppositional Apologetics",
    proponent: "Cornelius Van Til, Greg Bahnsen",
    keyIdea: "Every person reasons from prior commitments. The Christian worldview is the only coherent foundation for reason, morality, and knowledge. Romans 1:18-21: 'everyone already knows God exists' and suppresses that knowledge in unrighteousness.",
    strength: "Does not concede neutral ground. Exposes the assumptions hidden inside skeptical questions. Consistent with Reformed theology's view of the noetic effects of sin.",
    weakness: "Can appear circular to those outside the tradition. Less immediately useful in casual conversations. Critics argue it makes Christianity unfalsifiable.",
  },
  {
    id: "reformed-ep",
    name: "Reformed Epistemology",
    proponent: "Alvin Plantinga, Nicholas Wolterstorff",
    keyIdea: "Belief in God is 'properly basic' — like belief in other minds or the external world, it does not require argument to be rationally held. Plantinga's 'Warranted Christian Belief' develops this in full.",
    strength: "Demolishes the demand that belief in God requires argument to be rational. Philosophically sophisticated and academically influential.",
    weakness: "Less useful in direct conversation with non-specialists. Establishing that belief is permissible is different from persuading someone to believe.",
  },
  {
    id: "cumulative",
    name: "Cumulative Case Apologetics",
    proponent: "C.S. Lewis, Timothy McGrew",
    keyIdea: "No single argument proves Christianity, but the weight of all the evidence together — cosmological, moral, historical, experiential — makes Christianity the best explanation of the data. Inference to the best explanation.",
    strength: "Reflects how people actually come to believe. Wide-ranging — covers science, morality, beauty, history, personal experience. Highly accessible in Lewis and Keller.",
    weakness: "Hard to systematize. Critics can resist each strand individually. Does not provide a single decisive knockdown.",
  },
];

type ArgFilter = "all" | "Cosmological" | "Teleological" | "Moral" | "Ontological" | "Consciousness" | "Historical";

const ARGUMENTS: { type: ArgFilter; name: string; summary: string; thinker: string; strength: string }[] = [
  { type: "Cosmological", name: "The Kalam Cosmological Argument", summary: "Everything that begins to exist has a cause; the universe began to exist; therefore the universe has a cause.", thinker: "William Lane Craig", strength: "Grounded in both philosophy and Big Bang cosmology." },
  { type: "Cosmological", name: "The Leibnizian Cosmological Argument", summary: "Everything that exists has a sufficient reason for its existence; the universe's sufficient reason must be outside itself.", thinker: "G.W. Leibniz", strength: "Why is there something rather than nothing? The question demands an answer." },
  { type: "Cosmological", name: "The Aristotelian Unmoved Mover", summary: "Motion requires a mover; an infinite regress of movers is impossible; therefore there is an unmoved first mover.", thinker: "Aristotle, Thomas Aquinas", strength: "Logically tight; does not depend on the universe having a temporal beginning." },
  { type: "Cosmological", name: "Big Bang Cosmological Argument", summary: "Modern cosmology confirms the universe had an absolute beginning; whatever began must have a transcendent cause.", thinker: "Alexander Vilenkin, Stephen Hawking", strength: "Scientific consensus now supports a cosmic beginning — a remarkable confirmation of Genesis 1:1." },
  { type: "Teleological", name: "The Fine-Tuning Argument", summary: "The physical constants of the universe are set to life-permitting values with extraordinary precision; the best explanation is intentional design.", thinker: "Robin Collins, William Lane Craig", strength: "The probability of fine-tuning by chance is staggeringly small; even secular physicists acknowledge the phenomenon." },
  { type: "Teleological", name: "Intelligent Design vs. Darwinian Evolution", summary: "Certain biological structures exhibit 'specified complexity' that is best explained by design rather than undirected natural selection.", thinker: "Michael Behe, Stephen Meyer", strength: "Raises genuine scientific questions about the limits of mutation and selection." },
  { type: "Teleological", name: "Irreducible Complexity", summary: "Some biological systems (the bacterial flagellum, the blood-clotting cascade) have multiple interdependent parts that could not have evolved incrementally.", thinker: "Michael Behe", strength: "Points to structures that resist Darwinian explanation even in principle." },
  { type: "Teleological", name: "The Arrow of Time", summary: "The low entropy state of the early universe requires an explanation beyond physics; a creator setting the initial conditions is a coherent answer.", thinker: "Roger Penrose, Sean Carroll (and critics)", strength: "One of the most puzzling features of cosmology — naturalism struggles here." },
  { type: "Moral", name: "C.S. Lewis's Moral Argument", summary: "Mere Christianity ch. 1: everyone acts as if there is a real moral law; a moral law requires a moral lawgiver.", thinker: "C.S. Lewis", strength: "Begins with universal human experience — every culture, every person, argues about fairness." },
  { type: "Moral", name: "Moral Realism Requires a Ground", summary: "If moral facts are objective (not just preferences), they require a non-physical ground — a personal God is the most plausible candidate.", thinker: "William Lane Craig, Russ Shafer-Landau", strength: "Puts the atheist on the defensive: either deny moral realism or explain what grounds it." },
  { type: "Moral", name: "Sam Harris's Failed Naturalistic Ethics", summary: "Harris argues science can ground morality in 'human flourishing' — but this assumes that human flourishing matters, which is itself a moral claim science cannot establish.", thinker: "Sam Harris (The Moral Landscape) — critique by Craig, Plantinga", strength: "Exposes the circularity in all attempts to ground morality without God." },
  { type: "Ontological", name: "Anselm's Classic Ontological Argument", summary: "God is 'that than which nothing greater can be conceived'; a God who exists in reality is greater than one who exists only in the mind; therefore God exists.", thinker: "Anselm of Canterbury", strength: "One of the most discussed arguments in all of philosophy — even critics take it seriously." },
  { type: "Ontological", name: "Plantinga's Modal Ontological Argument", summary: "If it is possible that a maximally great being exists, then a maximally great being exists in all possible worlds, including the actual world.", thinker: "Alvin Plantinga", strength: "Philosophically rigorous; shows the argument is not as easily dismissed as Kant thought." },
  { type: "Ontological", name: "Common Objections to the Ontological Argument", summary: "Kant: existence is not a predicate. Gaunilo: we could prove a perfect island exists by the same logic. Both objections have responses.", thinker: "Immanuel Kant, Gaunilo", strength: "Understanding the objections deepens understanding of the argument's real force." },
  { type: "Consciousness", name: "The Hard Problem of Consciousness", summary: "Why does physical brain activity give rise to subjective experience — the 'what it is like' of seeing red or feeling pain? Physicalism has no answer.", thinker: "David Chalmers", strength: "Even secular philosophers acknowledge this is unsolved; theism provides a natural explanation." },
  { type: "Consciousness", name: "Why Physicalism Struggles with Qualia", summary: "If the mind is only the brain, then mental states are nothing but physical states — yet the redness of red seems irreducibly non-physical.", thinker: "Frank Jackson (Mary's Room), Thomas Nagel", strength: "Nagel's 'Mind and Cosmos' argues materialism cannot explain consciousness — from a secular philosopher." },
  { type: "Consciousness", name: "J.P. Moreland on the Soul", summary: "The existence of consciousness, intentionality, and the unity of self are best explained by substance dualism — the soul is a real, non-physical entity.", thinker: "J.P. Moreland", strength: "Positive case for the soul, not merely a critique of physicalism." },
  { type: "Historical", name: "The Minimal Facts Argument", summary: "Gary Habermas identifies facts accepted by virtually all scholars: Jesus died by crucifixion, the tomb was empty, disciples claimed to have seen him risen, and Paul and James were converted by appearances.", thinker: "Gary Habermas, Michael Licona", strength: "The argument works even granting only what the most skeptical historians accept." },
  { type: "Historical", name: "N.T. Wright's Massive Study", summary: "'The Resurrection of the Son of God' (800+ pages) examines resurrection in ancient Judaism and Greco-Roman culture; concludes the bodily resurrection is the only historically adequate explanation.", thinker: "N.T. Wright", strength: "The most thorough historical study of the resurrection from a credentialed New Testament scholar." },
  { type: "Historical", name: "The Disciples' Willingness to Die", summary: "The disciples were transformed from hiding in fear to proclaiming the resurrection at risk of death — they died for what they personally claimed to have witnessed.", thinker: "Sean McDowell", strength: "People die for things they believe to be true; they rarely die for things they know to be false." },
];

const COMMON_ITEMS = [
  {
    id: "who-created-god",
    title: '"Who created God?"',
    body: "The Kalam Cosmological Argument does not say 'everything has a cause.' It says 'everything that begins to exist has a cause.' The question is whether God began to exist. If God is eternal — without beginning or end — then he requires no cause. The objection confuses the First Cause with caused things. A more interesting question is: what would an eternal, uncaused cause look like? It would have to be outside time, immensely powerful, and causally active — which is a description remarkably close to the God of the Bible. Demanding a cause for God is like demanding a married bachelor: it misunderstands the nature of what is being claimed.",
  },
  {
    id: "contradictions",
    title: '"The Bible is full of contradictions"',
    body: "The first question is: which ones? Most people who raise this objection have not examined specific passages in detail. When you examine the actual cases, the category of 'contradiction' almost always turns out to be one of several other things: a difference in emphasis (two authors describing the same event from different angles), a genre misunderstanding (apocalyptic literature is not meant to be read like newspaper reporting), a copyist's error in a manuscript tradition (which textual criticism addresses), or a genuine difficulty that has multiple proposed resolutions. Gleason Archer's 'Encyclopedia of Bible Difficulties' and Norman Geisler's work examine hundreds of alleged contradictions in detail. No contradiction that is genuinely fatal to Christian faith has been established.",
  },
  {
    id: "science",
    title: '"Science has disproved religion"',
    body: "Science investigates natural phenomena through natural methods. It is silent on the question of whether anything supernatural exists, because its methods cannot detect or measure non-physical causes. The claim that science has disproved God is a philosophical claim masquerading as a scientific one — it smuggles in a commitment to materialism (only physical things exist) that is not itself a scientific finding. Many of history's greatest scientists were Christians: Copernicus, Newton, Mendel, Faraday, Kelvin, Collins. Francis Collins, director of the Human Genome Project, wrote 'The Language of God' arguing that modern genetics strengthens his faith. Physicist John Polkinghorne resigned his Cambridge chair to become an Anglican priest. Alvin Plantinga has argued that naturalistic evolution is actually self-defeating as an epistemological foundation. The domain of science is 'how'; the domain of faith is 'why.' Both matter.",
  },
  {
    id: "crutch",
    title: '"God is just a crutch / wish fulfillment"',
    body: "Sigmund Freud argued that God is a projection of the human desire for a father figure — an illusion born of psychological need. This is a genetic fallacy: the origin of a belief tells you nothing about its truth. The same argument works perfectly against atheism: one could argue that atheism is wish fulfillment — the desire to live without moral accountability, to not answer to anyone, to believe death is final and therefore comfortable. Does that make atheism false? Of course not. The question of whether God exists must be decided by examining the evidence, not by speculating about the psychological motivations of believers. Even if Christians believe partly because it is comforting, that is irrelevant to whether it is true. Aspirin relieves headaches whether or not you want it to.",
  },
  {
    id: "never-heard",
    title: '"What about those who never heard?"',
    body: "This is one of the most pastorally sensitive questions in apologetics, and it deserves a careful answer. Romans 1-2 teaches that all people have access to general revelation: the creation itself testifies to God's existence and character, and conscience testifies to moral law. No one is without some knowledge of God. Romans 2:14-16 suggests that Gentiles who have only the law written on their hearts will be judged by that standard. What this means for the unevangelized is a question Christians have debated — the 'wider hope' debate. John 14:6 ('no one comes to the Father except through me') and Matthew 25:31-46 (judgment based on treatment of 'the least of these') create genuine theological tension. Most evangelical theologians hold that salvation is only through Christ, but that God may apply Christ's work to those who respond in faith to the light they have received. This is not universalism — it is acknowledging the limits of what we know about God's dealings with all humanity.",
  },
  {
    id: "evil",
    title: '"The problem of evil"',
    body: "This is the most powerful objection to Christian theism and it deserves full treatment. There are two versions. The logical problem of evil (J.L. Mackie): God, evil, and omnipotence are logically incompatible — a perfectly good, all-knowing, all-powerful God would eliminate all evil. Alvin Plantinga's free will defense has generally been considered a successful refutation of this form: it is logically possible that God, for good reason, permits a world with free creatures who choose evil. Most philosophers now consider the logical problem defeated. The evidential problem (William Rowe): even if evil and God are not logically incompatible, the sheer amount and gratuitousness of suffering makes God's existence improbable. This is harder. Responses include: (1) we are not in a position to know which evils are truly gratuitous — God may have reasons beyond our sight; (2) a world capable of producing the greatest goods may require the possibility of great evils; (3) the cross — God did not stay distant from suffering. He entered the worst of it in Christ, and the resurrection announces that suffering will not have the final word. There is also the emotional problem of evil — not a philosophical argument but a cry of pain. This is not answered with syllogisms but with presence, the book of Job, and the promise of Romans 8:18.",
  },
];

export default function Apologetics101Page() {
  const [activeTab, setActiveTab] = useState<Tab>("what");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedMethod, setSelectedMethod] = useState<string>("classical");
  const [argFilter, setArgFilter] = useState<ArgFilter>("all");

  function toggleAccordion(id: string) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "what", label: "What Is Apologetics?" },
    { id: "methods", label: "Apologetic Methods" },
    { id: "arguments", label: "Core Arguments for God" },
    { id: "common", label: "Common Objections" },
    { id: "videos", label: "🎬 Videos" },
  ];

  const currentMethod = METHODS.find(m => m.id === selectedMethod);
  const filteredArgs = argFilter === "all" ? ARGUMENTS : ARGUMENTS.filter(a => a.type === argFilter);
  const argTypes: ArgFilter[] = ["all", "Cosmological", "Teleological", "Moral", "Ontological", "Consciousness", "Historical"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10, color: TEXT }}>Apologetics 101</h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            "Always be ready to give a defense to everyone who asks you a reason for the hope that is in you — with gentleness and respect." (1 Peter 3:15)
          </p>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}` }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "10px 6px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB 1: What Is Apologetics? */}
        {activeTab === "what" && (
          <div>
            {WHAT_ITEMS.map(item => (
              <div
                key={item.id}
                style={{
                  background: CARD,
                  border: `1px solid ${expanded[item.id] ? PURPLE + "60" : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "18px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                  <span style={{ color: PURPLE, fontSize: 18, fontWeight: 700, lineHeight: 1 }}>
                    {expanded[item.id] ? "-" : "+"}
                  </span>
                </button>
                {expanded[item.id] && (
                  <div style={{ padding: "0 22px 20px", color: MUTED, fontSize: 14, lineHeight: 1.85 }}>
                    {item.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Apologetic Methods */}
        {activeTab === "methods" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            {/* Left list */}
            <div style={{ width: 210, flexShrink: 0 }}>
              {METHODS.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMethod(m.id)}
                  style={{
                    width: "100%",
                    background: selectedMethod === m.id ? PURPLE + "20" : "transparent",
                    border: `1px solid ${selectedMethod === m.id ? PURPLE + "70" : BORDER}`,
                    borderRadius: 10,
                    padding: "13px 15px",
                    marginBottom: 8,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: selectedMethod === m.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, lineHeight: 1.4 }}>
                    {m.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Right detail */}
            {currentMethod && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 6 }}>{currentMethod.name}</h2>
                  <div style={{ color: MUTED, fontSize: 12, fontWeight: 700, marginBottom: 16 }}>
                    PROPONENT: <span style={{ color: PURPLE }}>{currentMethod.proponent}</span>
                  </div>
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>KEY IDEA</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{currentMethod.keyIdea}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ background: GREEN + "0A", border: `1px solid ${GREEN}25`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>STRENGTH</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{currentMethod.strength}</p>
                    </div>
                    <div style={{ background: "#EF444408", border: "1px solid #EF444425", borderRadius: 10, padding: 14 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 6 }}>WEAKNESS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{currentMethod.weakness}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Core Arguments for God */}
        {activeTab === "arguments" && (
          <div>
            {/* Filter row */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
              {argTypes.map(t => (
                <button
                  key={t}
                  onClick={() => setArgFilter(t)}
                  style={{
                    background: argFilter === t ? PURPLE : CARD,
                    border: `1px solid ${argFilter === t ? PURPLE : BORDER}`,
                    borderRadius: 20,
                    padding: "6px 14px",
                    color: argFilter === t ? "#fff" : MUTED,
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  {t === "all" ? "All Types" : t}
                </button>
              ))}
            </div>

            {/* Card grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {filteredArgs.map((arg, idx) => (
                <div
                  key={idx}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: PURPLE + "20",
                      border: `1px solid ${PURPLE}40`,
                      borderRadius: 6,
                      padding: "2px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                      color: PURPLE,
                      marginBottom: 10,
                    }}
                  >
                    {arg.type.toUpperCase()}
                  </div>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 8, lineHeight: 1.4 }}>
                    {arg.name}
                  </h3>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{arg.summary}</p>
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>KEY THINKER</div>
                    <div style={{ color: GREEN, fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{arg.thinker}</div>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>STRENGTH</div>
                    <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.6 }}>{arg.strength}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Common Objections */}
        {activeTab === "common" && (
          <div>
            {COMMON_ITEMS.map(item => (
              <div
                key={item.id}
                style={{
                  background: CARD,
                  border: `1px solid ${expanded[item.id] ? GREEN + "50" : BORDER}`,
                  borderRadius: 12,
                  marginBottom: 10,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "18px 22px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 3 }}>OBJECTION</div>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                  </div>
                  <span style={{ color: GREEN, fontSize: 18, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>
                    {expanded[item.id] ? "-" : "+"}
                  </span>
                </button>
                {expanded[item.id] && (
                  <div style={{ padding: "0 22px 22px" }}>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.85 }}>{item.body}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Lectures and conversations introducing the discipline of Christian apologetics — how to think, how to engage, and how to give a reason for the hope within you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "CaDF4FtRoUc", title: "The Task of Apologetics", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul defines what apologetics is and is not — its proper goal, its limits, and why every Christian should have a basic competency in it." },
                  { videoId: "4uIvOniW8xA", title: "Making Sense of God: An Invitation to the Skeptical", channel: "Tim Keller / Talks at Google", description: "Keller addresses a Google audience with characteristic clarity — why belief in God is not irrational, and what makes Christianity uniquely compelling." },
                  { videoId: "qOE6jJ4EGqg", title: "Questioning Christianity: Faith & Proof", channel: "Timothy Keller", description: "Keller explores how we decide what to believe, how faith and reason relate, and why skeptical questions deserve thoughtful Christian engagement." },
                  { videoId: "L9jHlrMRJAo", title: "Reason for God: Belief in an Age of Skepticism", channel: "Tim Keller at Columbia University", description: "A Q&A session at Columbia University where Keller engages hard questions about Christianity from a skeptical academic audience." },
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
