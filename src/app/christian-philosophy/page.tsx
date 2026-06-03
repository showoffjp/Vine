"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "thinkers" | "arguments" | "resources" | "voices";

const THINKERS = [
  {
    name: "Alvin Plantinga",
    era: "Contemporary",
    color: GREEN,
    field: "Reformed Epistemology & Modal Logic",
    contribution: "Destroyed the logical problem of evil with his free will defense, showed that belief in God is properly basic (does not require argument to be rational), and developed the ontological argument in modal logic form. His work at Notre Dame made Christian philosophy academically respectable again after decades of positivist dismissal.",
    key_works: ["God, Freedom, and Evil (1974)", "The Nature of Necessity (1974)", "Warranted Christian Belief (2000)"],
    famous_quote: "The atheist can simply say: there is no God. But can he give a reason for that claim that does not beg the question? The Christian theist has the resources for a full and coherent worldview. The atheist does not.",
    website: "calvin.edu/philosophy (Plantinga Center)",
    initials: "AP",
  },
  {
    name: "William Lane Craig",
    era: "Contemporary",
    color: "#3B82F6",
    field: "Natural Theology & Philosophical Theology",
    contribution: "The most prolific and successful Christian debater of the modern era. Craig has debated virtually every major atheist philosopher and scientist publicly, including Hitchens, Dawkins (by proxy), Krauss, Dennett, and Atkins. His work on the Kalam Cosmological Argument, the moral argument, and the resurrection is the standard treatment in contemporary apologetics.",
    key_works: ["Reasonable Faith (1994, 3rd ed. 2008)", "The Kalam Cosmological Argument (1979)", "Assessing the New Testament Evidence for the Historicity of the Resurrection (1989)"],
    famous_quote: "The question is not whether the evidence for God's existence is conclusive. The question is whether the evidence makes theism more plausible than atheism. I believe it does — dramatically so.",
    website: "reasonablefaith.org",
    initials: "WLC",
  },
  {
    name: "C.S. Lewis",
    era: "20th Century",
    color: "#F59E0B",
    field: "Christian Imagination & Philosophical Apologetics",
    contribution: "The greatest Christian apologist of the 20th century. A former atheist and Oxford don, Lewis used both rational argument (the Trilemma, the argument from desire, the argument from morality) and imaginative fiction (Narnia, Screwtape Letters, Perelandra) to present Christian truth. Mere Christianity has converted more skeptics than perhaps any other book of the last 100 years.",
    key_works: ["Mere Christianity (1952)", "The Problem of Pain (1940)", "Miracles (1947)", "The Abolition of Man (1943)"],
    famous_quote: "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: I am ready to accept Jesus as a great moral teacher, but I do not accept His claim to be God. That is the one thing we must not say.",
    website: "cslewis.com; also The C.S. Lewis Institute at cslewisinstitute.org",
    initials: "CSL",
  },
  {
    name: "Francis Schaeffer",
    era: "20th Century",
    color: PURPLE,
    field: "Cultural Apologetics & Christian Worldview",
    contribution: "Founded L'Abri Fellowship in Switzerland (1955), a community where skeptical intellectuals and burnt-out young people came to wrestle with life's biggest questions in a Christian context. Schaeffer was the first major evangelical to engage seriously with existentialism, modern art, and secular philosophy — and to show that Christianity alone provides a sufficient foundation for meaning, morality, and truth.",
    key_works: ["The God Who Is There (1968)", "Escape from Reason (1968)", "He Is There and He Is Not Silent (1972)", "How Should We Then Live? (1976)"],
    famous_quote: "If there is no absolute beyond man's ideas, then there is no final appeal to judge between individuals and groups whose moral judgments conflict.",
    website: "labri.org; Francis Schaeffer Foundation at fschaeffer.com",
    initials: "FS",
  },
  {
    name: "G.K. Chesterton",
    era: "Early 20th Century",
    color: "#EF4444",
    field: "Paradox, Orthodoxy & Cultural Criticism",
    contribution: "English journalist, novelist, and Catholic convert who argued for Christianity through paradox, humor, and cultural analysis. His Orthodoxy remains one of the most unusual and brilliant defenses of Christian faith ever written. He anticipated almost every major argument of modern atheism and demolished them with wit and logic before they were mainstream. C.S. Lewis credited Chesterton as a primary influence on his conversion.",
    key_works: ["Orthodoxy (1908)", "Heretics (1905)", "The Everlasting Man (1925)", "St. Francis of Assisi (1923)"],
    famous_quote: "The Christian ideal has not been tried and found wanting. It has been found difficult and left untried.",
    website: "chesterton.org — American Chesterton Society",
    initials: "GKC",
  },
  {
    name: "J.P. Moreland",
    era: "Contemporary",
    color: "#10B981",
    field: "Philosophy of Mind & Metaphysics",
    contribution: "Distinguished Professor of Philosophy at Biola University. Moreland has made decisive contributions to the argument from consciousness (materialism cannot explain the existence of consciousness; dualism can), the case for substance dualism in philosophy of mind, and the integration of Christian faith and science. His work on Christian scholarship has helped define how Christian academics engage secular academia.",
    key_works: ["Scaling the Secular City (1987)", "Immortality: The Other Side of Death (1992)", "Consciousness and the Existence of God (2008)"],
    famous_quote: "The existence of consciousness is the most powerful evidence for God's existence available to us. Nothing in a purely materialist worldview can account for the fact that there is something it is like to be you.",
    website: "jpmoreland.com; Biola University Center for Christian Thought",
    initials: "JPM",
  },
  {
    name: "Blaise Pascal",
    era: "17th Century",
    color: "#6366F1",
    field: "Apologetics & Philosophy of Religion",
    contribution: "French mathematician, physicist, and Christian philosopher who invented probability theory and the hydraulic press — and applied the same rigorous thinking to Christian apologetics. His Pensees (Thoughts), published posthumously, includes the famous Wager argument, the argument from hiddenness, the argument from human greatness and wretchedness, and the most psychologically penetrating account of why people avoid thinking about God.",
    key_works: ["Pensees (published 1670, posthumously)", "Provincial Letters (1656-57)"],
    famous_quote: "There is a God-shaped hole in the heart of every man which cannot be filled by any created thing, but only by God, the Creator, made known through Jesus Christ.",
    website: "ccel.org has the Pensees online; multiple translations available",
    initials: "BP",
  },
  {
    name: "Alister McGrath",
    era: "Contemporary",
    color: "#F59E0B",
    field: "Historical Theology & Science-Faith Integration",
    contribution: "Oxford professor of theology, a former atheist who studied biochemistry before becoming a Christian, then earning doctorates in both molecular biophysics and theology. McGrath has been the primary scholarly respondent to Richard Dawkins and the New Atheism, authored a comprehensive biography of C.S. Lewis, and written the most widely used systematic theology textbooks in the world.",
    key_works: ["Christian Theology: An Introduction (1994, 6th ed. 2017)", "The Dawkins Delusion (2007)", "C.S. Lewis: A Life (2013)", "A Fine-Tuned Universe (2009)"],
    famous_quote: "Science and Christianity are not in conflict. The conflict is between scientism — the view that science is the only path to truth — and everything else, including science properly understood.",
    website: "alister-mcgrath.com; Logos Institute at University of St Andrews",
    initials: "AM",
  },
];

const ARGUMENTS = [
  {
    name: "Kalam Cosmological Argument",
    type: "Classical Argument",
    color: GREEN,
    summary: "Everything that begins to exist has a cause. The universe began to exist. Therefore, the universe has a cause. That cause must be uncaused, timeless, spaceless, immaterial, enormously powerful, and personal — matching the description of God.",
    strongest_objection: "What if the universe caused itself, or emerged from quantum fluctuations?",
    response: "Quantum fluctuations still occur within the laws of physics and spacetime — they require a pre-existing substrate. The Kalam concerns the beginning of all physical reality. Craig argues the cause must be personal because only a personal agent can explain a timeless cause producing a temporal effect.",
    key_thinker: "William Lane Craig; originally developed by Al-Ghazali (11th century)",
    read_more: "reasonablefaith.org/kalam",
  },
  {
    name: "Fine-Tuning Argument",
    type: "Scientific Argument",
    color: "#3B82F6",
    summary: "The fundamental constants of physics (the strength of gravity, the cosmological constant, the mass of electrons, etc.) are precisely calibrated to allow life to exist. The probability of this occurring by chance is vanishingly small. The best explanation is intentional design.",
    strongest_objection: "The multiverse — if there are infinite universes with all possible constants, we necessarily exist in one fine-tuned for life.",
    response: "The multiverse is itself a speculative hypothesis requiring its own fine-tuning explanation. It also has no empirical support and raises as many questions as it solves. The fine-tuning of this universe to the level of 10^120 is better explained by a designer than by philosophical speculation about unobservable universes.",
    key_thinker: "Robin Collins; also Alister McGrath, A Fine-Tuned Universe",
    read_more: "discovery.org/id; also Collins, God and the New Cosmology",
  },
  {
    name: "Moral Argument",
    type: "Philosophical Argument",
    color: PURPLE,
    summary: "If God does not exist, there are no objective moral values and duties. But objective moral values and duties do exist (torturing children for fun is really wrong, not just unfashionable). Therefore, God exists.",
    strongest_objection: "Evolution explains why we have moral intuitions — they helped our ancestors survive.",
    response: "Evolution explains why we have moral feelings, not why those feelings track objective moral facts. If morality is merely evolutionary, then condemning the Holocaust is no different from condemning shellfish — both are violations of our evolved preferences. The existence of real moral obligation requires a moral lawgiver.",
    key_thinker: "C.S. Lewis (Mere Christianity, Book 1); William Lane Craig",
    read_more: "Mere Christianity, Book 1; Craig, On Guard, ch. 6",
  },
  {
    name: "Argument from Consciousness",
    type: "Philosophical Argument",
    color: "#EF4444",
    summary: "Consciousness — the subjective, first-person experience of what it is like to be you — cannot be explained by purely physical processes. Physical descriptions give us brain states but cannot account for qualia, intentionality, or the unity of self. The existence of consciousness makes sense if there is a conscious Creator.",
    strongest_objection: "Consciousness will eventually be explained scientifically as we learn more about the brain.",
    response: "This is promissory materialism — the claim that materialism will explain consciousness someday without any current mechanism for doing so. David Chalmers calls this the Hard Problem of Consciousness precisely because it resists physical explanation in principle, not just in practice.",
    key_thinker: "J.P. Moreland; also Alvin Plantinga on evolution and reliable cognitive faculties",
    read_more: "Moreland, Consciousness and the Existence of God; Chalmers, The Conscious Mind",
  },
  {
    name: "Ontological Argument",
    type: "A Priori Argument",
    color: "#F59E0B",
    summary: "God is defined as the greatest conceivable being. A being that exists in reality is greater than one that exists only in the mind. Therefore, if God is the greatest conceivable being, God must exist in reality — otherwise we could conceive of a greater being who does exist.",
    strongest_objection: "You cannot define something into existence. I could define a perfect island and argue it must exist.",
    response: "Plantinga's modal version sidesteps this: he argues that if God is possible (possibly existing necessarily), then God necessarily exists. The Island objection fails because islands are not by definition necessary beings — God is. The question becomes whether the concept of a necessary being is coherent, not whether definition equals existence.",
    key_thinker: "Anselm of Canterbury (1078); modernized by Alvin Plantinga",
    read_more: "Plantinga, The Nature of Necessity; also God and Other Minds",
  },
  {
    name: "Argument from Desire",
    type: "Experiential Argument",
    color: "#10B981",
    summary: "Every natural desire corresponds to a real object that can satisfy it: hunger to food, thirst to water, sexual desire to a person, loneliness to relationship. There exists in humans a universal longing that nothing in the created world fully satisfies — which Lewis called Joy (Sehnsucht). If every natural desire corresponds to a real object, this desire points to a real, transcendent Object.",
    strongest_objection: "Not all desires are satisfied. People desire immortality and do not get it. This does not prove immortality exists.",
    response: "Lewis distinguishes between desires that arise from experience (which can be frustrated) and desires that are built into human nature prior to experience (which point to a corresponding reality). The desire for the Absolute is of the second kind — it precedes and survives any particular experience.",
    key_thinker: "C.S. Lewis (Mere Christianity, Surprised by Joy, The Weight of Glory)",
    read_more: "Lewis, Surprised by Joy; The Weight of Glory (the title essay)",
  },
];

const RESOURCE_LIST = [
  { title: "Reasonable Faith", author: "William Lane Craig", type: "Book & Website", description: "The standard introduction to Christian philosophical apologetics. Covers the existence of God, the person of Christ, miracles, and the resurrection. The website (reasonablefaith.org) includes hundreds of articles, videos, and podcast episodes.", color: GREEN },
  { title: "Mere Christianity", author: "C.S. Lewis", type: "Book", description: "The most widely read work of apologetics in the 20th century. Lewis begins with the moral argument and builds to the Incarnation, the Atonement, and the Christian life. Required reading for any Christian who wants to think clearly about their faith.", color: PURPLE },
  { title: "Scaling the Secular City", author: "J.P. Moreland", type: "Book", description: "The most complete philosophical defense of Christian theism written for an educated lay audience. Covers cosmological, teleological, and moral arguments before addressing the historical evidence for the resurrection.", color: "#3B82F6" },
  { title: "Philosophy of Religion (Stanford Encyclopedia)", author: "Various", type: "Website", description: "The Stanford Encyclopedia of Philosophy has peer-reviewed articles on every major topic in philosophy of religion — the existence of God, the problem of evil, religious experience, the afterlife — written by leading philosophers. Free at plato.stanford.edu.", color: "#F59E0B" },
  { title: "The Blackwell Companion to Natural Theology", author: "Craig & Moreland (eds.)", type: "Academic Book", description: "The most rigorous academic treatment of natural theology currently available. Each chapter by a leading philosopher defends a theistic argument at the level of professional scholarship. Expensive but invaluable for serious study.", color: "#EF4444" },
  { title: "Think Biblically Podcast (Biola)", author: "Biola University", type: "Podcast", description: "Regular podcast from Biola University featuring faculty from the philosophy and theology departments. Covers current philosophical, cultural, and theological topics from a rigorous evangelical perspective. Free at biola.edu/think-biblically.", color: GREEN },
];

const VOICES_CP = [
  {
    id: "plantinga-a",
    name: "Alvin Plantinga",
    era: "b. 1932 · Reformed Epistemologist",
    context: "Warranted Christian Belief",
    bio: "Alvin Plantinga, Professor Emeritus at Notre Dame and Calvin University, is the most influential Christian philosopher of the 20th century. His work on the epistemology of religious belief — culminating in his trilogy on warrant (Warrant: The Current Debate, Warrant and Proper Function, Warranted Christian Belief) — demolished the 'evidentialist challenge' to theism. Plantinga argued that belief in God can be 'properly basic' — rational without requiring evidential argument — when produced by properly functioning cognitive faculties in an appropriate environment.",
    quote: "The theist need not be embarrassed by his theism. He need not try to justify it in terms of some other, more basic beliefs he holds. Belief in God is properly basic.",
    contribution: "Plantinga's reformed epistemology transformed Christian philosophy from a defensive discipline to a confident one. His free will defense against the logical problem of evil, and his ontological argument for God's existence, gave academic philosophy two of its most rigorous contemporary theistic arguments. He essentially created the field of analytic philosophy of religion as a serious discipline.",
  },
  {
    id: "kreeft-p",
    name: "Peter Kreeft",
    era: "b. 1937 · Catholic",
    context: "Philosophy of Thomas Aquinas",
    bio: "Peter Kreeft, Professor of Philosophy at Boston College, is the most prolific and accessible Christian philosopher writing for popular audiences. His dozens of books range from Socratic dialogues between historical figures to Socratic arguments for God's existence, the problem of evil, and Christian ethics. Kreeft works primarily in the Thomistic tradition, arguing that Aquinas's philosophy remains the most rigorous and coherent framework available for Christian thought.",
    quote: "Aquinas is not a dinosaur. He is a prophet. His philosophy answers the questions that modern people are actually asking — they just don't know it yet.",
    contribution: "Kreeft has made the tradition of Christian philosophy — from Socrates through Aquinas to C.S. Lewis — accessible to millions of readers who would never approach academic philosophy. His ability to argue with rigor while writing with wit has made him the most effective popularizer of Thomistic philosophy in contemporary English.",
  },
  {
    id: "swinburne-r",
    name: "Richard Swinburne",
    era: "b. 1934 · Anglican",
    context: "The Coherence of Theism",
    bio: "Richard Swinburne, Nolloth Professor of Philosophy of Christian Religion at Oxford, has produced the most comprehensive analytic case for Christian theism in the English-speaking world. His trilogy — The Coherence of Theism, The Existence of God, and Faith and Reason — applies Bayesian probability theory to theistic arguments, concluding that the existence of God is more probable than not on the available evidence. Swinburne's rigorous probabilistic approach has made his work essential reading in analytic philosophy of religion.",
    quote: "God is a person without a body — a spirit — who is eternal, free, able to do anything, knows everything, is perfectly good, and is the creator and sustainer of the universe.",
    contribution: "Swinburne's probabilistic case for theism provided Christian philosophy with its most technically sophisticated apologetic framework. His application of Bayesian reasoning to the cosmological, teleological, and moral arguments for God's existence has shaped the professional apologetics landscape for fifty years.",
  },
  {
    id: "mcgrath-a",
    name: "Alister McGrath",
    era: "b. 1953 · Anglican Evangelical",
    context: "A Fine-Tuned Universe",
    bio: "Alister McGrath, Professor of Theology at Oxford, bridges the philosophy of religion and natural theology. His work on science and faith — particularly A Fine-Tuned Universe: The Quest for God in Science and Theology — explores the philosophical significance of the anthropic fine-tuning argument. McGrath engages both Richard Dawkins (he wrote The Dawkins Delusion) and academic philosophy, arguing that Christian theism provides the most elegant explanation for the intelligibility of the universe.",
    quote: "Science can take us to the edge of the universe, but it cannot take us beyond. The question of why there is something rather than nothing — and why it is ordered and intelligible — is fundamentally philosophical, not scientific.",
    contribution: "McGrath's work at the interface of philosophy, theology, and natural science has given Christian philosophy its most accessible engagement with the 'New Atheist' challenge. His scientific background (doctorate in molecular biophysics from Oxford) and theological expertise make him uniquely positioned to address both sides of the science-faith conversation.",
  },
  {
    id: "copan-p",
    name: "Paul Copan",
    era: "b. 1962 · Evangelical",
    context: "Is God a Moral Monster?",
    bio: "Paul Copan, Professor of Philosophy and Ethics at Palm Beach Atlantic University, has done the most accessible contemporary work on Christian moral philosophy and the problem of divine ethics in the Old Testament. His book Is God a Moral Monster? (2011) tackles the most common philosophical objection to Christianity — that the God of the Old Testament is morally monstrous. Copan argues from philosophy, history, and exegesis that these objections misread ancient texts through modern lenses.",
    quote: "The God who commanded Israelite warfare is the same God who said love your enemies. The coherence of these commands requires understanding the progressive nature of revelation and the particular vocation of ancient Israel.",
    contribution: "Copan's work gave Christian philosophy its most thorough contemporary response to the moral objections against theism — particularly those raised by the New Atheists. His combination of philosophical rigor with biblical scholarship and historical context has made him the primary reference for Christians engaging the 'divine command' and 'genocide' objections.",
  },
];

export default function ChristianPhilosophyPage() {
  const [tab, setTab] = useState<Tab>("thinkers");
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState("plantinga-a");
  const voiceItem = VOICES_CP.find(v => v.id === selectedVoice)!;

  const thinker = THINKERS.find(t => t.name === selected);
  const argument = ARGUMENTS.find(a => a.name === selected);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 60px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧠</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Christian Philosophy</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The greatest Christian minds — Plantinga, Lewis, Craig, Schaeffer, Chesterton — and the arguments they have made for the rationality of Christian faith. Philosophy has always been the handmaid of theology.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: CARD, borderRadius: 10, padding: 4, width: "fit-content" }}>
          {(["thinkers", "arguments", "resources", "voices"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setSelected(null); }}
              style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: tab === t ? GREEN : "transparent", color: tab === t ? BG : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "thinkers" ? "Key Thinkers" : t === "arguments" ? "Core Arguments" : t === "resources" ? "Resources" : "🎓 Voices"}
            </button>
          ))}
        </div>

        {tab === "thinkers" && (
          <div style={{ display: "grid", gridTemplateColumns: thinker ? "1fr 1fr" : "1fr", gap: 14, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {THINKERS.map((t, i) => (
                <button key={i} onClick={() => setSelected(selected === t.name ? null : t.name)}
                  style={{ background: selected === t.name ? `${t.color}12` : CARD, border: `1px solid ${selected === t.name ? t.color + "50" : BORDER}`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${t.color}20`, border: `1px solid ${t.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: t.color, fontWeight: 900, fontSize: 9, flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{t.name}</span>
                        <span style={{ background: `${t.color}15`, color: t.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{t.era}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 3 }}>{t.field}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {thinker && (
              <div style={{ background: CARD, border: `1px solid ${thinker.color}30`, borderRadius: 14, padding: 28, position: "sticky", top: 100 }}>
                <h2 style={{ color: thinker.color, fontWeight: 900, fontSize: 18, margin: "0 0 4px" }}>{thinker.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{thinker.era} · {thinker.field}</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{thinker.contribution}</p>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: 8, padding: 12, marginBottom: 14 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>{thinker.famous_quote}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>KEY WORKS</div>
                  {thinker.key_works.map((w, i) => (
                    <div key={i} style={{ color: TEXT, fontSize: 12, marginBottom: 3 }}>· {w}</div>
                  ))}
                </div>
                <div style={{ background: "#3B82F608", border: "1px solid #3B82F615", borderRadius: 8, padding: 10 }}>
                  <div style={{ color: "#3B82F6", fontWeight: 700, fontSize: 10, marginBottom: 4 }}>FIND THEIR WORK</div>
                  <p style={{ color: TEXT, fontSize: 12, margin: 0 }}>{thinker.website}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "arguments" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ARGUMENTS.map((arg, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${argument?.name === arg.name ? arg.color + "50" : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setSelected(selected === arg.name ? null : arg.name)}
                  style={{ width: "100%", padding: "16px 20px", cursor: "pointer", textAlign: "left", background: "transparent", border: "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ color: TEXT, fontWeight: 800, fontSize: 15 }}>{arg.name}</span>
                        <span style={{ background: `${arg.color}15`, color: arg.color, padding: "1px 8px", borderRadius: 8, fontSize: 10, fontWeight: 700 }}>{arg.type}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12, marginTop: 4 }}>{arg.summary.substring(0, 100)}...</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 18, marginLeft: 12 }}>{selected === arg.name ? "−" : "+"}</span>
                  </div>
                </button>
                {selected === arg.name && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ paddingTop: 16 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>THE ARGUMENT</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{arg.summary}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                        <div style={{ background: `#EF444408`, border: "1px solid #EF444420", borderRadius: 8, padding: 12 }}>
                          <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 10, marginBottom: 6 }}>STRONGEST OBJECTION</div>
                          <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{arg.strongest_objection}</p>
                        </div>
                        <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15`, borderRadius: 8, padding: 12 }}>
                          <div style={{ color: GREEN, fontWeight: 700, fontSize: 10, marginBottom: 6 }}>CHRISTIAN RESPONSE</div>
                          <p style={{ color: TEXT, fontSize: 12, margin: 0, lineHeight: 1.6 }}>{arg.response}</p>
                        </div>
                      </div>
                      <div style={{ color: MUTED, fontSize: 12 }}>Key thinker: {arg.key_thinker} · {arg.read_more}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "resources" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {RESOURCE_LIST.map((r, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${r.color}25`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: r.color, fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{r.title}</div>
                <div style={{ color: MUTED, fontSize: 11, marginBottom: 10 }}>{r.author} · {r.type}</div>
                <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.description}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 80 }}>
              {VOICES_CP.map(v => (
                <button key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: 12, border: `1px solid ${selectedVoice === v.id ? "rgba(58,125,86,0.4)" : BORDER}`, background: selectedVoice === v.id ? "rgba(58,125,86,0.08)" : CARD, cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedVoice === v.id ? GREEN : TEXT, marginBottom: 2 }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{v.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{voiceItem.context}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4, color: TEXT }}>{voiceItem.name}</h2>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 20 }}>{voiceItem.era}</div>
              <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>{voiceItem.bio}</p>
              <div style={{ background: BG, borderRadius: 12, padding: 20, borderLeft: `3px solid ${GREEN}`, marginBottom: 24 }}>
                <p style={{ fontSize: 15, color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>&ldquo;{voiceItem.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Contribution</div>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.75 }}>{voiceItem.contribution}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
