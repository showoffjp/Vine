"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";

const tabs = [
  { id: "what", label: "What Is Apologetics" },
  { id: "arguments", label: "Arguments for God" },
  { id: "resurrection", label: "The Resurrection" },
  { id: "evil", label: "The Problem of Evil" },
  { id: "presup", label: "Presuppositionalism" },
  { id: "videos", label: "Videos" },
];

const whatItems = [
  {
    title: "The Word Itself: Apologia",
    text: "The Greek word behind &ldquo;apologetics&rdquo; is <em>apologia</em> &mdash; a legal defense given before a court. 1 Peter 3:15 commands every believer to &ldquo;always be ready to give an apologia to everyone who asks you a reason for the hope that is in you.&rdquo; This is not the defensive apology of embarrassment; it is the reasoned, courageous defense of an accused party who knows the truth is on their side. Apologetics is the discipline of giving that defense with care, precision, and love.",
  },
  {
    title: "Apologetics as an Act of Love",
    text: "The apologist who takes an honest doubter&rsquo;s questions seriously is performing an act of love. Dismissing intellectual objections with &ldquo;just have faith&rdquo; leaves the struggling person alone with their doubts. Engaging their objections with rigor and respect communicates that their mind matters, that the questions are real, and that the faith has nothing to fear from scrutiny. The manner of apologetics &mdash; gentleness and respect (1 Pet 3:15) &mdash; is not optional. The apologist who wins the argument while losing the person has failed.",
  },
  {
    title: "Classical Apologetics: Reason First, Then Evidence",
    text: "Classical apologetics (Thomas Aquinas, William Lane Craig) proceeds in two steps. First, establish theism through reason and nature &mdash; the cosmological, teleological, and moral arguments show that God exists. Second, argue from evidence specifically for Christianity &mdash; the resurrection, the reliability of Scripture, fulfilled prophecy. This approach assumes some common rational ground between believer and unbeliever: both can examine arguments and evidence. It is philosophically rigorous and particularly effective with those who respect logical argument as an authority.",
  },
  {
    title: "Evidential Apologetics: Evidence Directly for Christianity",
    text: "Evidential apologetics (Gary Habermas, Josh McDowell) does not first argue for bare theism but goes directly to the historical evidence for Christianity &mdash; particularly the resurrection. McDowell&rsquo;s <em>Evidence That Demands a Verdict</em> is the classic example: archaeology, manuscript evidence, fulfilled prophecy, and the historical case for the resurrection are marshaled as a cumulative case. This approach is accessible to non-philosophers and keeps the conversation focused on specific, historically falsifiable claims.",
  },
  {
    title: "Presuppositionalism: Challenge the Unbeliever&rsquo;s Worldview",
    text: "Presuppositional apologetics (Cornelius Van Til, Greg Bahnsen) denies that there is any neutral ground from which to evaluate evidence. Every person reasons from prior commitments &mdash; presuppositions &mdash; that shape what counts as evidence and what conclusions are permissible. The unbeliever&rsquo;s worldview cannot account for the preconditions of intelligibility: logic, mathematics, science, and morality all presuppose a rational, personal God. The apologist&rsquo;s task is to expose the incoherence of the non-Christian worldview by arguing on its own terms.",
  },
  {
    title: "Apologetics Is Not Winning Arguments",
    text: "The goal of Christian apologetics is not a debate trophy. It is the removal of intellectual obstacles so that the honest seeker can hear and receive the gospel. Many stated intellectual objections are not the real barrier &mdash; they are defenses protecting a prior decision. The wise apologist asks questions before giving answers, listens before speaking, and remembers that only the Holy Spirit converts. We clear the ground; God plants the seed. A person humbled by honest engagement is closer to the kingdom than a person who has been beaten in an argument.",
  },
];

const argumentItems = [
  {
    title: "Cosmological Argument: The Kalam",
    thinker: "William Lane Craig",
    text: "The Kalam cosmological argument runs: (1) Everything that begins to exist has a cause. (2) The universe began to exist. (3) Therefore, the universe has a cause. The second premise is supported both philosophically (an actual infinite regress of events is impossible) and scientifically (Big Bang cosmology confirms the universe had an absolute beginning). The cause of the universe must be itself uncaused, timeless, spaceless, and immensely powerful &mdash; a description that converges remarkably on the God of classical theism. Craig has developed and defended this argument in decades of academic debate.",
  },
  {
    title: "Ontological Argument: Anselm and Plantinga",
    thinker: "Anselm, Alvin Plantinga",
    text: "Anselm&rsquo;s classic argument: God is &ldquo;that than which nothing greater can be conceived.&rdquo; A being who exists in reality is greater than one who exists only in the mind. Therefore, if God exists only in the mind, a greater being &mdash; one who exists in reality &mdash; can be conceived. But that contradicts the definition. Therefore God must exist in reality. Plantinga&rsquo;s modal version uses possible-worlds semantics: if it is even <em>possible</em> that a maximally great being exists, then such a being exists in all possible worlds, including the actual world. The key premise &mdash; that such a being is possible &mdash; is highly intuitive.",
  },
  {
    title: "Teleological Argument: Fine-Tuning",
    thinker: "Robin Collins, Luke Barnes",
    text: "The universe contains at least 26 fundamental physical constants (the gravitational constant, the cosmological constant, the strong nuclear force, etc.). Each must fall within extraordinarily narrow ranges for matter, chemistry, and life to be possible at all. Robin Collins has shown that even tiny variations &mdash; by fractions of a fraction &mdash; would produce a universe incapable of supporting any complexity. The probability of this occurring by chance is so small as to be practically zero. The most elegant explanation is intentional design. Even secular physicists acknowledge the phenomenon &mdash; they call it &ldquo;the fine-tuning problem.&rdquo;",
  },
  {
    title: "Moral Argument: Objective Morality Requires a Lawgiver",
    thinker: "C.S. Lewis, William Lane Craig",
    text: "The moral argument runs: (1) If God does not exist, objective moral values and duties do not exist. (2) Objective moral values and duties do exist. (3) Therefore, God exists. C.S. Lewis begins <em>Mere Christianity</em> with this argument: every person, in every culture, acts as if there is a real moral law &mdash; they argue about fairness, accuse each other of wrong, and feel genuine guilt. This universal experience of moral obligation requires a transcendent moral lawgiver. The atheist who sincerely says &ldquo;the Holocaust was objectively wrong&rdquo; has already committed themselves to a premise that theism explains far better than naturalism.",
  },
  {
    title: "Argument from Consciousness",
    thinker: "David Chalmers, J.P. Moreland",
    text: "The &ldquo;hard problem of consciousness&rdquo; (Chalmers): why does physical brain activity give rise to subjective experience &mdash; the &ldquo;what it is like&rdquo; of seeing red, feeling pain, or having a thought? Physicalism has no answer. If the universe is only matter and energy governed by impersonal forces, there is no reason to expect conscious experience to arise &mdash; yet here we are, inescapably aware. Theism provides a natural explanation: consciousness exists because the ground of reality is itself a conscious, personal God who made us in his image (Genesis 1:27). Thomas Nagel, an atheist philosopher, conceded in <em>Mind and Cosmos</em> that materialism cannot explain consciousness.",
  },
  {
    title: "These Are a Cumulative Case, Not Knockdown Proofs",
    thinker: "C.S. Lewis, Timothy McGrew",
    text: "No single argument above proves Christianity with mathematical certainty. Each establishes something partial: that the universe had a cause, that a maximally great being is possible, that the physical constants are suspiciously precise, that objective morality requires a ground, that consciousness points beyond the physical. Together, they form a cumulative case. The question is not whether any one argument is airtight but whether the Christian hypothesis &mdash; a personal, powerful, morally perfect God who created and sustains all things &mdash; is the best explanation of the full range of evidence. The honest inquirer who examines the convergence finds a very strong case.",
  },
];

const resurrectionItems = [
  {
    title: "The Minimal Facts Approach",
    thinker: "Gary Habermas",
    text: "Gary Habermas developed the minimal facts approach: rather than arguing from the Bible&rsquo;s inspiration, he argues from facts that virtually all critical scholars &mdash; including skeptics &mdash; accept on standard historical grounds. This approach is powerful precisely because it does not require the unbeliever to accept any theological premise in advance. The argument stands on historical methodology alone.",
  },
  {
    title: "Fact 1: Jesus Died by Crucifixion",
    thinker: "Roman historical record",
    text: "The crucifixion of Jesus is among the best-attested facts of ancient history. It is confirmed by Tacitus (<em>Annals</em> 15.44), Josephus (<em>Antiquities</em> 18.3), the Talmud, and all four Gospels. No serious historian, regardless of worldview, disputes it. Roman crucifixion was designed to be lethal and was carried out by professionals trained in execution. The &ldquo;swoon theory&rdquo; &mdash; that Jesus merely fainted and later recovered in the tomb &mdash; cannot survive scrutiny of what crucifixion actually involved.",
  },
  {
    title: "Fact 2: The Disciples Believed He Rose and Appeared to Them",
    thinker: "Multiple independent sources",
    text: "The disciples underwent a dramatic transformation from frightened, scattered men hiding in Jerusalem to bold proclaimers of the resurrection willing to die for their testimony. This transformation is historically inexplicable without a real cause. The appearances are reported by multiple independent sources: Paul, Luke, John, and Matthew independently attest to post-resurrection appearances. The disciples were not dying for a theological doctrine; they were dying for what they personally claimed to have seen.",
  },
  {
    title: "Fact 3 &amp; 4: Paul and James Were Converted",
    thinker: "Paul&rsquo;s own testimony",
    text: "Paul was a violent persecutor of the early church (Acts 9, Galatians 1). His conversion is one of the most dramatic reversals in ancient history. He attributes it to a personal appearance of the risen Christ (1 Cor 15:8, Galatians 1:12). James, the brother of Jesus, was a skeptic during Jesus&rsquo;s ministry (John 7:5). He became a leader of the Jerusalem church and died a martyr. Both men had powerful personal motives to <em>deny</em> the resurrection; neither did. Their conversions are most naturally explained by the resurrection appearances they claimed to have received.",
  },
  {
    title: "Fact 5: The Tomb Was Empty",
    thinker: "N.T. Wright",
    text: "The emptiness of the tomb is supported by the Jerusalem factor: the disciples began preaching the resurrection in the very city where Jesus had been buried. If the tomb were not empty, the authorities could have ended the movement immediately by producing the body. Instead, Matthew 28:13 records that the Jewish authorities themselves admitted the tomb was empty &mdash; they only disputed the explanation (claiming the disciples stole the body). An empty tomb is conceded by all parties; only the explanation is disputed.",
  },
  {
    title: "The Four Explanations &mdash; and Why Resurrection Wins",
    thinker: "Habermas, Licona, Wright",
    text: "The four major hypotheses are: (1) <strong>Fraud</strong> &mdash; the disciples fabricated the resurrection. But they died for this testimony, which is powerful evidence they were not lying. (2) <strong>Hallucination</strong> &mdash; the appearances were psychological. But hallucinations are private, not group experiences; they do not explain the empty tomb; and Paul&rsquo;s conversion is not explicable this way. (3) <strong>Wrong tomb</strong> &mdash; the women went to the wrong tomb. But Joseph of Arimathea&rsquo;s tomb was known; the authorities would have corrected the error. (4) <strong>Resurrection</strong> &mdash; Jesus actually rose bodily. This explains all the evidence: the empty tomb, the appearances, the conversions, the transformation of the disciples, and the explosive growth of the early church in Jerusalem.",
  },
  {
    title: "1 Corinthians 15:3-8: The Earliest Creed",
    thinker: "Gordon Fee, N.T. Wright",
    text: "1 Corinthians 15:3-8 contains a pre-Pauline creed that most scholars date to within 3-5 years of the crucifixion &mdash; Paul says he &ldquo;received&rdquo; it (from Peter and James, Galatians 1:18-19) before passing it on. The creed lists resurrection appearances to Peter, to the Twelve, to more than 500 people at one time (most of whom &ldquo;are still alive,&rdquo; Paul notes &mdash; an implicit invitation to check), to James, to all the apostles, and finally to Paul. This is not legend; it is eyewitness testimony in creedal form, circulating within the lifetime of the witnesses. It is the strongest single piece of historical evidence for the resurrection.",
  },
];

const evilItems = [
  {
    title: "The Intellectual Problem of Evil",
    text: "The classic argument runs: (1) If God is all-good, he would want to prevent evil. (2) If God is all-knowing, he knows about all evil. (3) If God is all-powerful, he can prevent all evil. (4) Evil exists. (5) Therefore, an all-good, all-knowing, all-powerful God does not exist. This is called the logical problem of evil (J.L. Mackie). It is the strongest single objection to theism and deserves a serious, careful answer.",
  },
  {
    title: "The Logical vs. Evidential Problem",
    text: "The logical problem of evil claims that God and evil are <em>logically incompatible</em> &mdash; their coexistence is a flat contradiction. The evidential problem (William Rowe) is weaker: it claims that while God and evil may be logically compatible, the sheer amount and apparent gratuitousness of suffering makes God&rsquo;s existence <em>improbable</em>. These are distinct arguments requiring distinct responses. Most philosophers now concede that the logical problem has been answered; the evidential problem remains the more serious challenge.",
  },
  {
    title: "Plantinga&rsquo;s Free Will Defense",
    text: "Alvin Plantinga&rsquo;s free will defense shows that God and evil are <em>logically compatible</em>. The key premise: it is possible that God, for good reason, created free creatures who sometimes choose evil, and that a world with free creatures who sometimes choose evil is better than a world of non-free automatons who always do right. God cannot both create genuinely free creatures and simultaneously guarantee that they will always choose good &mdash; that is a logical impossibility, not a limitation of God&rsquo;s power. Plantinga&rsquo;s argument is widely regarded among philosophers as a successful refutation of the logical problem of evil.",
  },
  {
    title: "The Evidential Problem: Why THIS MUCH Suffering?",
    text: "Even granting that free will explains some evil, the evidential problem presses harder: why does God permit natural disasters, childhood cancer, the suffering of innocent animals? These cannot be explained by human free will. The &ldquo;skeptical theist&rdquo; response (Stephen Wykstra, Michael Bergmann) argues that we are not in a position to know that these evils are genuinely gratuitous &mdash; we cannot see God&rsquo;s reasons from where we stand, any more than a child can understand a physician&rsquo;s painful treatment. Soul-making theodicy (John Hick) proposes that a world capable of producing the highest human goods &mdash; courage, compassion, faith under fire &mdash; requires the possibility of suffering. These are partial responses; no complete theodicy exists.",
  },
  {
    title: "The Cross: God Entered Suffering",
    text: "The most distinctively Christian response to the problem of evil is not a philosophical argument but a historical fact: God did not stay distant from suffering. In Jesus Christ, God entered the worst that suffering can do &mdash; betrayal, torture, abandonment, death. The cross does not explain why suffering exists; it shows that God is not indifferent to it. The resurrection announces that suffering will not have the final word. The God of the Bible is not the unmoved mover of philosophy; he is the crucified and risen Lord who has been through the worst and come out the other side. This does not silence every philosophical objection, but it transforms the existential question.",
  },
  {
    title: "The Eschatological Answer: Romans 8:18",
    text: "&ldquo;I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us&rdquo; (Romans 8:18). This is not an evasion; it is an eschatological reframing. If the Christian vision is true &mdash; if there is an eternal weight of glory awaiting God&rsquo;s people &mdash; then the present suffering, however real and terrible, is not the final frame of the story. C.S. Lewis wrote that the pain of life, seen from inside the story, is inescapable; but the author of a story can redeem its darkest chapters in the final pages. The Christian bet is that God is a good enough author to do exactly that.",
  },
];

const presupItems = [
  {
    title: "Van Til&rsquo;s Starting Point",
    thinker: "Cornelius Van Til",
    text: "Cornelius Van Til argued that there is no such thing as neutral ground between the Christian and the unbeliever. Every person reasons from prior commitments &mdash; presuppositions &mdash; about the nature of reality, knowledge, and ethics. The unbeliever does not approach evidence as a blank slate; their worldview shapes what counts as evidence and what conclusions are permissible before the investigation begins. Romans 1:18-21 teaches that every person already knows God exists (through creation and conscience) but suppresses that knowledge in unrighteousness. The apologist&rsquo;s task is not to help the unbeliever find God from a neutral starting point but to expose the suppression.",
  },
  {
    title: "The Preconditions of Intelligibility",
    thinker: "Greg Bahnsen",
    text: "Van Til&rsquo;s central argument: the unbeliever&rsquo;s worldview cannot account for the preconditions of intelligibility &mdash; the very things that make rational thought, science, and morality possible. Logic requires that the laws of thought (non-contradiction, identity, excluded middle) are universally and necessarily valid &mdash; but on what basis, in a purely material universe of chance and flux? Mathematics requires that abstract objects (numbers, sets) have real existence &mdash; but materialism allows only physical objects. Science requires that the future will resemble the past (the uniformity of nature) &mdash; but this cannot be proven scientifically without circular reasoning. Morality requires that some things are genuinely wrong &mdash; but impersonal matter cannot generate binding moral obligations. Only the Christian worldview, with a rational, personal, self-consistent God who created an orderly universe in his image, can provide the foundation for any of these.",
  },
  {
    title: "Bahnsen&rsquo;s Transcendental Argument for God (TAG)",
    thinker: "Greg Bahnsen",
    text: "Greg Bahnsen formalized Van Til&rsquo;s approach in the Transcendental Argument for God&rsquo;s existence (TAG): the existence of God is the necessary precondition for the possibility of knowledge itself. The argument does not say &ldquo;God probably exists because of these evidences&rdquo; but &ldquo;God necessarily exists because without him you could not know anything at all.&rdquo; Bahnsen famously debated atheist philosopher Gordon Stein in 1985 (the &ldquo;Great Debate&rdquo;), demonstrating that Stein could not account for the laws of logic on his own worldview. The transcript remains one of the most studied apologetics exchanges in recent history.",
  },
  {
    title: "How to Use Transcendental Arguments in Conversation",
    thinker: "Practical application",
    text: "In conversation, the presuppositional approach involves &ldquo;borrowing capital&rdquo; from the Christian worldview &mdash; exposing what the unbeliever is assuming that their worldview cannot justify. Ask: &ldquo;When you use logic to argue against God, where do the laws of logic come from in your worldview?&rdquo; &ldquo;When you say something is morally wrong, on what basis is it wrong and not merely something you dislike?&rdquo; &ldquo;When you trust your own reasoning, why do you think an unguided brain that evolved for survival rather than truth-seeking can reliably produce true beliefs?&rdquo; The goal is not to win a debate but to create the intellectual discomfort that makes the person willing to examine their own assumptions.",
  },
  {
    title: "The Presuppositional Challenge to Evidentialism",
    thinker: "Van Til vs. Craig",
    text: "The presuppositionalist challenges the evidentialist: &ldquo;Whose standards of evidence are we using?&rdquo; When Craig presents the Kalam cosmological argument, the unbeliever is evaluating it using the laws of logic, which they cannot justify on their own worldview. When Habermas presents the minimal facts argument, the unbeliever is evaluating historical evidence using criteria of reliability that presuppose a stable, comprehensible world &mdash; a theistic assumption. Presuppositionalists argue that evidentialists inadvertently concede too much by agreeing to play on supposedly neutral ground. Many apologists draw from both traditions: Van Til for epistemological foundations, Craig for specific arguments.",
  },
  {
    title: "The Strength and Limits of Presuppositionalism",
    thinker: "Bahnsen, Frame",
    text: "Presuppositionalism&rsquo;s great strength is its consistency: it refuses to treat the most fundamental questions &mdash; the nature of knowledge, logic, science, and morality &mdash; as if they were settled neutral territory. Its risk is that it can appear circular to the unbeliever (&ldquo;you&rsquo;re assuming Christianity to prove Christianity&rdquo;) and can sometimes close off genuine dialogue. John Frame has argued that all worldviews are circular at some level &mdash; the question is which circle is largest and most coherent. The presuppositionalist who has also studied the classical arguments is more effective than one who has only the transcendental argument; and the evidentialist who has internalized Van Til&rsquo;s epistemological critique is more careful than one who has not.",
  },
];

const videoItems = [
  { videoId: "6CulBuMCLg0", title: "William Lane Craig &mdash; Kalam Cosmological Argument" },
  { videoId: "HEMmVFPCmeo", title: "Gary Habermas on the Resurrection" },
  { videoId: "ydaA4AUj7v0", title: "Tim Keller &mdash; Making Sense of God" },
];

export default function ChristianApologeticsGuidePage() {
  const [activeTab, setActiveTab] = useState("what");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Theology &amp; Defense</div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "0.5rem", lineHeight: 1.2 }}>Christian Apologetics Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 640 }}>
          Defending the faith with gentleness and respect &mdash; the three methods, the strongest arguments for God, the resurrection evidence, the problem of evil, and the presuppositional challenge.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? PURPLE + "28" : "transparent",
                color: activeTab === t.id ? "#c4b5fd" : MUTED,
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: activeTab === t.id ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB: What Is Apologetics */}
        {activeTab === "what" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {whatItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Arguments for God */}
        {activeTab === "arguments" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {argumentItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.75rem", color: GOLD, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{item.thinker}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: The Resurrection */}
        {activeTab === "resurrection" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: TEAL + "18", border: `1px solid ${TEAL}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: TEAL, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                The minimal facts approach argues only from data that virtually all critical scholars &mdash; including skeptics &mdash; accept on standard historical grounds.
              </p>
            </div>
            {resurrectionItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.75rem", color: TEAL, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{item.thinker}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: The Problem of Evil */}
        {activeTab === "evil" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {evilItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Presuppositionalism */}
        {activeTab === "presup" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: PURPLE + "15", border: `1px solid ${PURPLE}40`, borderRadius: 10, padding: "1rem 1.3rem", marginBottom: 4 }}>
              <p style={{ color: "#c4b5fd", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                Presuppositionalism does not argue from evidence to God but exposes that all reasoning already presupposes God. The existence of God is the necessary precondition for knowledge itself.
              </p>
            </div>
            {presupItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{item.thinker}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.92rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* TAB: Videos */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {videoItems.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.2rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: PURPLE, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.title }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
