"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Shield, BookOpen, AlertCircle } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";


const TABS = [
  { id: "overview", label: "Overview" },
  { id: "arguments", label: "Arguments for God" },
  { id: "objections", label: "Major Objections" },
  { id: "resurrection", label: "The Resurrection" },
  { id: "bible", label: "Bible Reliability" },
  { id: "approaches", label: "Apologetic Approaches" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ARGUMENTS = [
  {
    name: "Cosmological Argument",
    type: "From Existence",
    color: BLUE,
    icon: "🌌",
    summary: "Everything that begins to exist has a cause. The universe began to exist (Big Bang cosmology supports this). Therefore the universe has a cause — and that cause must be uncaused, timeless, spaceless, and immensely powerful. This is what we mean by God.",
    objection: "Who caused God?",
    response: "The argument specifically addresses things that BEGIN to exist. God, by definition, is eternal and uncaused — the unmoved Mover. The objection misunderstands the argument: it doesn't say 'everything has a cause' but 'everything that begins to exist has a cause.' An eternal God doesn't need a cause.",
    philosophers: ["Thomas Aquinas (Quinque Viae)", "William Lane Craig (Kalam version)", "Leibniz (Principle of Sufficient Reason version)"],
  },
  {
    name: "Teleological Argument",
    type: "From Design",
    color: GREEN,
    icon: "🧬",
    summary: "The universe shows remarkable fine-tuning for life — over 30 physical constants (gravity, electromagnetism, strong nuclear force) fall within extraordinarily narrow ranges that permit complex matter and life. The probability of this by chance is vanishingly small. Design is the best explanation.",
    objection: "The multiverse: if there are infinite universes, one had to be ours.",
    response: "The multiverse is not established science but a philosophical speculation generated to avoid design. It also requires fine-tuning for the multiverse-generating mechanism. And even granting infinite universes, a designed universe would still be more probable than a lucky one, given the specificity of what appears designed.",
    philosophers: ["William Paley (watchmaker)", "Robin Collins (fine-tuning)", "Michael Behe (irreducible complexity)"],
  },
  {
    name: "Moral Argument",
    type: "From Ethics",
    color: GOLD,
    icon: "⚖️",
    summary: "If objective moral values exist (torturing children for fun is truly wrong, not just culturally disapproved), they require a ground beyond human opinion or evolutionary pressure. The best explanation of objective morality is a morally perfect God who is the source and standard of moral truth.",
    objection: "Can't morality be grounded in evolution or social contract?",
    response: "Evolutionary and social accounts explain why we HAVE moral beliefs — not why any of them are TRUE. 'Torturing children is wrong because it was evolutionarily disadvantageous' would mean it's no longer wrong if evolution had favored it. That's not moral realism — it's moral relativism with biology. If morality is genuinely objective, it requires a non-contingent ground.",
    philosophers: ["C.S. Lewis (Mere Christianity)", "Alvin Plantinga", "William Lane Craig"],
  },
  {
    name: "Ontological Argument",
    type: "From Concept",
    color: PURPLE,
    icon: "🔵",
    summary: "God is defined as the greatest conceivable being. A being that exists in reality is greater than one that exists only in the mind. Therefore God must exist — otherwise we could conceive of something greater (a God who also exists in reality). If God is possible, God is necessary.",
    objection: "This seems like a verbal trick.",
    response: "The argument is genuinely contested — many brilliant thinkers accept it (Plantinga, Leibniz, Gödel) and many reject it (Kant, Hume). The modal version (if God is possible, then God is necessary) is more defensible. The key question is whether 'maximally great being' is a coherent concept — most philosophers think it is.",
    philosophers: ["Anselm of Canterbury (original form)", "Descartes", "Alvin Plantinga (modal version)"],
  },
  {
    name: "Argument from Consciousness",
    type: "From Mind",
    color: TEAL,
    icon: "🧠",
    summary: "The existence of subjective conscious experience (qualia — the redness of red, the painfulness of pain) is deeply puzzling on a purely materialist account. Why would physical processes give rise to inner experience? A mind-first universe (idealism or theism) provides a better explanation than materialism.",
    objection: "Neuroscience shows consciousness correlates with brain activity.",
    response: "Correlation is not causation. Even if every conscious state has a neural correlate, this doesn't explain why those physical states feel like anything from the inside. The 'hard problem of consciousness' (David Chalmers) remains unsolved on purely physical accounts. Theism — in which the universe is made by a Mind — makes consciousness less mysterious.",
    philosophers: ["Alvin Plantinga (evolutionary argument against naturalism)", "J.P. Moreland", "C.S. Lewis (Miracles)"],
  },
];

const OBJECTIONS = [
  {
    objection: "The Problem of Evil",
    color: RED,
    logical: "If God is omnipotent, omniscient, and omnibenevolent, evil would not exist. Evil exists. Therefore, no such God exists.",
    response: "Alvin Plantinga's Free Will Defense: God could create beings incapable of evil, but he created free beings — and free beings can choose evil. This is not a flaw in design but an implication of the greatest good (love, which requires freedom). The logical problem of evil is generally considered solved in contemporary philosophy. The evidential problem (why SO MUCH evil) remains harder and requires theodicy.",
    theodicy: "Soul-making theodicy (Hick), eschatological compensation, greater-good arguments, and the hiddenness of God all address the evidential problem. Christians should not pretend this is easy — Job's lament is in Scripture precisely because this tension is real.",
  },
  {
    objection: "Religious Diversity",
    color: GOLD,
    logical: "If Christianity were true, we'd expect religious consensus. Instead there are thousands of religions — Christianity's truth claim is just one among many cultural products.",
    response: "The diversity of claims doesn't show all claims are equally valid any more than diverse scientific theories show no scientific truth exists. The question is which religion, if any, best explains the evidence. Christianity doesn't claim truth by default of being Western but by the historical evidence for the resurrection — which is testable in ways most religious claims are not.",
    theodicy: "",
  },
  {
    objection: "Science Has Explained Religion",
    color: BLUE,
    logical: "Neuroscience explains religious experience as brain states. Evolutionary psychology explains religion as adaptive illusion. There's no need for God to explain religious phenomena.",
    response: "This is the genetic fallacy — explaining the origin of a belief doesn't explain whether it's true. The fact that humans have evolved mechanisms for religious experience doesn't tell us whether God exists, any more than the evolution of our math faculties tells us whether 2+2=4. If God exists, we'd expect him to have designed us with capacities for experiencing him.",
    theodicy: "",
  },
  {
    objection: "Who Created God?",
    color: PURPLE,
    logical: "Everything has a cause, including God. You've just pushed the problem back one step without solving it.",
    response: "The cosmological argument doesn't say 'everything has a cause' — it says 'everything that begins to exist has a cause.' God, by definition, is eternal and uncaused. The objection treats God as a contingent being within the universe rather than the necessary ground of all contingent existence. An infinite regress of causes explains nothing — a first, uncaused cause is required.",
    theodicy: "",
  },
  {
    objection: "Biblical Genocide and Violence",
    color: TEAL,
    logical: "The God of the Old Testament commands genocide (Canaanites), endorses slavery, and commands atrocities. This is not a good God.",
    response: "These are among the most serious challenges and deserve careful engagement, not dismissal. Approaches: (1) Progressive revelation — the OT depicts accommodation to ancient Near Eastern norms that Christ later transcends. (2) Divine judgment interpretation — the Canaanite conquest is presented as divine judgment, not ethnic cleansing for its own sake. (3) Christological reading — Jesus as the hermeneutical key reframes violent texts. No easy answer; honest engagement is required.",
    theodicy: "",
  },
];

const APPROACHES = [
  {
    name: "Classical / Natural Theology",
    color: GOLD,
    key: "Reason first, then revelation",
    desc: "Establish the existence of God through reason (cosmological, teleological, moral arguments), then argue for Christianity's revelation specifically. Thomas Aquinas, William Lane Craig, and most Catholic apologists use this approach. Reason is capable of arriving at theism; revelation then fills in the specifics.",
    proponents: ["Thomas Aquinas", "R.C. Sproul", "William Lane Craig"],
  },
  {
    name: "Evidentialist Apologetics",
    color: BLUE,
    key: "Historical evidence for Christianity",
    desc: "Argue for Christianity on the basis of publicly available historical evidence — especially the resurrection. If the resurrection is established as a historical event, Christian theism is rational. J. Montgomery Warfield, Gary Habermas, and N.T. Wright use historical evidence as the primary apologetic tool.",
    proponents: ["Gary Habermas", "N.T. Wright", "Josh McDowell"],
  },
  {
    name: "Presuppositional Apologetics",
    color: PURPLE,
    key: "Show the impossibility of the contrary",
    desc: "Rather than arguing from neutral common ground, challenge the internal consistency of the unbeliever's worldview. Every worldview has presuppositions — the Christian presupposes God; the atheist presupposes rationality, moral truth, logic. Show that only the Christian worldview can make sense of what the unbeliever already assumes.",
    proponents: ["Cornelius Van Til", "Greg Bahnsen", "K. Scott Oliphint"],
  },
  {
    name: "Reformed Epistemology",
    color: GREEN,
    key: "Belief in God is properly basic",
    desc: "Alvin Plantinga argues that belief in God can be rational without requiring arguments — it can be a 'basic belief,' like belief in other minds or the reality of the past. The apologetic task is showing that Christian belief is not irrational, not necessarily proving it from scratch.",
    proponents: ["Alvin Plantinga", "Nicholas Wolterstorff", "William Alston"],
  },
];

const RESURRECTION_FACTS = [
  { fact: "Jesus died by crucifixion", color: BLUE, note: "This is among the most well-attested facts of ancient history — accepted by virtually all historians, including skeptics like Bart Ehrman and John Dominic Crossan. Roman crucifixion was designed to ensure death." },
  { fact: "The tomb was found empty on Sunday morning", color: GREEN, note: "The empty tomb is historically well-evidenced. The Jerusalem proclamation of resurrection would have been falsifiable immediately if the body were still there. Enemies acknowledged the tomb was empty (Matthew 28:13 — their counter-claim was that the disciples stole the body, not that Jesus was still dead)." },
  { fact: "Multiple people claimed to experience the risen Jesus", color: PURPLE, note: "1 Corinthians 15:3-8 — written within 3-5 years of the crucifixion — lists 500+ witnesses including named individuals Paul expected his readers to check. Peter, James, the twelve, and Paul all claimed appearances." },
  { fact: "The disciples were transformed from fearful fugitives to bold proclaimers", color: GOLD, note: "Psychological transformation is a historical datum. The disciples fled at the crucifixion. Within weeks they were preaching the resurrection in Jerusalem at personal risk. Hallucination or grief theories don't explain the corporate, public, and sustained nature of this transformation." },
  { fact: "James, the brother of Jesus, and Paul were converted from skepticism/hostility", color: TEAL, note: "James was a skeptic during Jesus's ministry (John 7:5). Paul was actively persecuting Christians (Acts 9). Both came to believe in the resurrection and both died for it. What changed them? Their testimony is that they personally encountered the risen Jesus." },
];

const VIDEOS = [
  { videoId: "4xLkJIEKQyY", title: "Top 10 Arguments for the Existence of God" },
  { videoId: "hpVEFr5hVIA", title: "The Problem of Evil: Why It Doesn't Disprove God" },
  { videoId: "qlCvVrLEF4s", title: "Is the Resurrection Historical? N.T. Wright" },
  { videoId: "sGhir6arEZo", title: "William Lane Craig: Five Arguments for God" },
];

export default function ChristianApologeticsGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_apol_tab", "overview");
  const [openArg, setOpenArg] = usePersistedState<string>("vine_apol_arg", "");
  const [openObj, setOpenObj] = usePersistedState<string>("vine_apol_obj", "");
  const [openAppr, setOpenAppr] = usePersistedState<string>("vine_apol_appr", "");
  const [journal, setJournal] = usePersistedState<string>("vine_apol_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Apologetics</span>
            <span style={{ background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Philosophy of Religion</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Christian Apologetics: A Comprehensive Guide
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            &ldquo;Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have&rdquo; (1 Pet 3:15). This guide covers the major arguments for God&apos;s existence, the most serious objections to Christian faith, the evidence for the resurrection, and the different approaches to apologetics.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? BLUE : BORDER}`,
                background: tab === t.id ? `${BLUE}20` : "transparent",
                color: tab === t.id ? BLUE : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Shield size={24} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>What Apologetics Is (and Isn&apos;t)</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
                    Apologetics (from Greek apologia — defense) is giving a reason for Christian faith. It is not about winning arguments or humiliating skeptics. The goal is to remove intellectual obstacles to faith, to strengthen believers, and to demonstrate that Christianity is not irrational.
                  </p>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Peter&apos;s command (1 Pet 3:15) is embedded in a context of humility and gentleness: &ldquo;with gentleness and respect.&rdquo; The apologetics that has most effectively moved people toward faith has never been primarily the argument — it has been the person making it, the life backing it up, and the love behind it.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>What This Guide Covers</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { title: "5 Arguments for God", icon: "🌌", color: BLUE, desc: "Cosmological, teleological, moral, ontological, consciousness" },
                  { title: "5 Major Objections", icon: "⚠️", color: RED, desc: "Problem of evil, religious diversity, science, biblical violence" },
                  { title: "Resurrection Evidence", icon: "✝️", color: GREEN, desc: "The 5 key historical facts and how each supports the resurrection" },
                  { title: "4 Apologetic Approaches", icon: "🔍", color: PURPLE, desc: "Classical, evidential, presuppositional, Reformed epistemology" },
                ].map((item, i) => (
                  <button key={i} onClick={() => setTab(["arguments", "objections", "resurrection", "approaches"][i])} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: MUTED, fontSize: 12, lineHeight: 1.5 }}>{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "arguments" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Arguments for the Existence of God</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              These arguments do not prove Christianity specifically — they argue for theism as more rational than atheism. Once God&apos;s existence is established as credible, the case for Christian theism specifically rests on the historical evidence for Jesus&apos;s resurrection.
            </p>
            {ARGUMENTS.map((arg, i) => {
              const isOpen = openArg === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${arg.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenArg(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 22 }}>{arg.icon}</span>
                      <div>
                        <div style={{ color: arg.color, fontWeight: 700, fontSize: 14 }}>{arg.name}</div>
                        <div style={{ color: MUTED, fontSize: 12 }}>{arg.type}</div>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{arg.summary}</p>
                      <div style={{ background: `${RED}10`, border: `1px solid ${RED}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                        <div style={{ color: RED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>COMMON OBJECTION</div>
                        <div style={{ color: TEXT, fontSize: 13 }}>{arg.objection}</div>
                      </div>
                      <div style={{ background: `${arg.color}10`, border: `1px solid ${arg.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                        <div style={{ color: arg.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>RESPONSE</div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{arg.response}</div>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {arg.philosophers.map((p, j) => (
                          <span key={j} style={{ background: `${arg.color}15`, color: arg.color, border: `1px solid ${arg.color}30`, borderRadius: 20, padding: "2px 8px", fontSize: 11 }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "objections" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Major Objections to Christian Faith</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              These are the most serious and recurring challenges to Christian belief. They deserve careful engagement — not dismissal, not panic, but honest thoughtful response.
            </p>
            {OBJECTIONS.map((item, i) => {
              const isOpen = openObj === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenObj(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.objection}</span>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <div style={{ background: `${RED}10`, border: `1px solid ${RED}20`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                        <div style={{ color: RED, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>THE ARGUMENT</div>
                        <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.6 }}>{item.logical}</div>
                      </div>
                      <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}20`, borderRadius: 8, padding: "10px 14px", marginBottom: item.theodicy ? 10 : 0 }}>
                        <div style={{ color: item.color, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>CHRISTIAN RESPONSE</div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.response}</div>
                      </div>
                      {item.theodicy && (
                        <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}20`, borderRadius: 8, padding: "10px 14px" }}>
                          <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>FURTHER DEPTH</div>
                          <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.theodicy}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "resurrection" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Resurrection: Historical Evidence</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The resurrection is the heart of Christianity and the best-attested miracle claim in history. Gary Habermas&apos;s &ldquo;minimal facts&rdquo; approach focuses on facts accepted by the broad consensus of New Testament scholars — including skeptics — and asks what best explains them.
            </p>
            {RESURRECTION_FACTS.map((fact, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${fact.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${fact.color}20`, border: `1px solid ${fact.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: fact.color, fontSize: 11, fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ color: fact.color, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{fact.fact}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{fact.note}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 8 }}>Alternative Explanations and Why They Fail</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { theory: "Conspiracy theory (disciples stole the body)", problem: "The disciples died for their testimony — people don't die for what they know to be false." },
                  { theory: "Swoon theory (Jesus didn't die)", problem: "Roman soldiers were professionals who ensured death; a half-dead Jesus couldn't have convinced the disciples of resurrection." },
                  { theory: "Hallucination theory", problem: "Doesn't explain the empty tomb; group hallucinations of the same content are psychologically impossible; appearances stopped after 40 days rather than continuing." },
                  { theory: "Wrong tomb", problem: "Jerusalem authorities could have corrected this within walking distance; friends would have known the correct tomb." },
                ].map((alt, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
                    <div style={{ color: RED, fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{alt.theory}</div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{alt.problem}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "bible" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Reliability of the Bible</div>
            {[
              { title: "Manuscript Evidence", color: BLUE, content: "The NT has more manuscripts than any other ancient document by a factor of hundreds — over 5,800 Greek manuscripts, 10,000 Latin, 9,300 in other languages. The earliest fragments date to within decades of the original writings. By comparison, Caesar's Gallic War has 10 manuscripts from 1,000 years later — and no historian doubts its reliability." },
              { title: "Archaeological Corroboration", color: GREEN, content: "Archaeology has consistently corroborated the background details of biblical narratives — cities, rulers, customs, geography. The pool of Siloam, the existence of Pilate (Pilate Stone), the Hittite empire (once doubted), Sodom-area destruction, David's palace — all confirmed archaeologically." },
              { title: "Internal Consistency", color: PURPLE, content: "66 books, 40+ authors, written over 1,500 years, in 3 languages, across three continents — yet a coherent narrative from creation to new creation. The OT's Messianic prophecies and the NT's fulfillment is either the greatest coincidence in literary history or divine design." },
              { title: "Eyewitness and Early Dating", color: GOLD, content: "1 Corinthians 15:3-8 is a creed Paul received within 3-5 years of the crucifixion — within living memory of the events. The Gospels were written within the lifetime of eyewitnesses. Luke explicitly claims eyewitness sources (Luke 1:1-4). The early dating undermines legendary embellishment theories." },
              { title: "What Biblical Inerrancy Means", color: TEAL, content: "Most evangelical scholars affirm inerrancy: the Bible is without error in all it affirms. This doesn't mean it's a modern science textbook, a mathematical treatise, or written in 21st-century Western idiom. It means the human authors, using their contexts and genres, communicated exactly what God intended — and that intent is reliable." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "approaches" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Apologetic Approaches</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Christians have disagreed not just about apologetic conclusions but about apologetic method — what starting point, what authority, and what kind of argument is legitimate.
            </p>
            {APPROACHES.map((appr, i) => {
              const isOpen = openAppr === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${appr.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenAppr(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <div style={{ color: appr.color, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{appr.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{appr.key}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{appr.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {appr.proponents.map((p, j) => (
                          <span key={j} style={{ background: `${appr.color}15`, color: appr.color, border: `1px solid ${appr.color}30`, borderRadius: 20, padding: "2px 8px", fontSize: 11 }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Which objection to Christian faith do you find most personally challenging? Which argument for God&apos;s existence do you find most compelling? Have you had conversations with skeptical friends or family about faith — what has been most effective and most difficult?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Apologetics 101", href: "/apologetics-101" },
              { label: "Theodicy", href: "/theodicy" },
              { label: "Faith & Science", href: "/faith-science" },
              { label: "Resurrection Evidence", href: "/resurrection-evidence" },
              { label: "Doubt & Faith", href: "/faith-doubt-deconstruction" },
              { label: "Christology", href: "/christology" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
