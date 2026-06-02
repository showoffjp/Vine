"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const ARGUMENTS = [
  {
    name: "Cosmological",
    color: GREEN,
    icon: "🌌",
    tagline: "Everything that begins to exist has a cause",
    versions: [
      { version: "Kalam Cosmological", formulation: "1. Everything that begins to exist has a cause. 2. The universe began to exist. 3. Therefore, the universe has a cause.", explanation: "The cause of the universe must be uncaused (to avoid infinite regress), timeless (since time began with the universe), spaceless, immensely powerful, and personal (since it chose to create). This description fits the classical concept of God remarkably well.", key_figure: "William Lane Craig; drawing on Al-Ghazali" },
      { version: "Leibnizian Cosmological", formulation: "1. Everything that exists has an explanation of its existence. 2. If the universe has an explanation, that explanation is God. 3. The universe exists. 4. Therefore, the universe's explanation is God.", explanation: "The principle of sufficient reason demands an explanation for the universe's existence. A necessary being — one whose essence requires existence — is the only adequate explanation for a contingent universe.", key_figure: "Gottfried Leibniz; defended by Alexander Pruss" },
    ],
    objections: [
      { objection: "What caused God?", response: "The argument is that everything that begins to exist has a cause — not everything that exists. God is posited as uncaused and eternal, not as something that began. The question 'Who made God?' misunderstands the argument." },
      { objection: "Why not an eternal universe?", response: "The Big Bang indicates the universe had a beginning. The Borde-Guth-Vilenkin theorem shows that any universe with an average expansion rate greater than zero must have had a beginning. An eternally existing universe faces both scientific and philosophical problems." },
    ],
  },
  {
    name: "Teleological",
    color: PURPLE,
    icon: "🎯",
    tagline: "The universe exhibits fine-tuning beyond chance",
    versions: [
      { version: "Fine-Tuning Argument", formulation: "1. The fine-tuning of the universe for life is due to physical necessity, chance, or design. 2. It is not due to physical necessity or chance. 3. Therefore, it is due to design.", explanation: "The constants of physics (gravitational constant, electromagnetic force, cosmological constant, etc.) are calibrated with extraordinary precision for life. The probability of this occurring by chance is, by many calculations, effectively zero.", key_figure: "Robin Collins; earlier: William Paley (Design Argument)" },
      { version: "Biological Design", formulation: "Complex specified information in DNA and irreducibly complex biological systems point to an intelligent source rather than unguided natural processes.", explanation: "The amount of information in a single human cell's DNA, if written out, would fill thousands of books. Intelligent Design theorists argue that information of this kind requires an intelligent source — it cannot be adequately explained by undirected mutation and selection.", key_figure: "Michael Behe, Stephen Meyer" },
    ],
    objections: [
      { objection: "The Multiverse explains it", response: "If there are infinite universes, one will inevitably have these constants. However: (1) the multiverse is speculative; (2) even a multiverse generator requires fine-tuning for its own existence; (3) the multiverse is not scientific in the falsifiable sense." },
      { objection: "Evolution explains biology", response: "Macro-evolutionary mechanisms may explain adaptation within existing information; the origin of biological information itself remains contested. Darwinian evolution and fine-tuning point to different levels of the question." },
    ],
  },
  {
    name: "Moral",
    color: "#EF4444",
    icon: "⚖️",
    tagline: "Objective moral facts require a moral lawgiver",
    versions: [
      { version: "Argument from Moral Objectivity", formulation: "1. If God does not exist, objective moral values and duties do not exist. 2. Objective moral values and duties do exist. 3. Therefore, God exists.", explanation: "We universally experience moral facts as objective — the Holocaust was wrong regardless of what anyone believes, and torturing children for fun is actually wrong, not just contrary to preference. If moral facts are objective, they require a ground: a moral Lawgiver whose nature is the standard of goodness.", key_figure: "C.S. Lewis (Mere Christianity); William Lane Craig" },
    ],
    objections: [
      { objection: "Evolution explains morality", response: "Evolution can explain why we have moral feelings and pro-social behaviors. It cannot explain why those feelings are objectively binding — why we ought to follow them rather than override them when expedient. Explaining the origin of moral instincts does not establish their authority." },
      { objection: "Euthyphro dilemma: Is something good because God commands it, or does God command it because it is good?", response: "A third option: God's nature is itself the standard of goodness. God commands things that accord with his essential nature. The good is not arbitrary (mere divine whim) nor independent of God (external standard above him) but identical with God's eternal character." },
    ],
  },
  {
    name: "Ontological",
    color: "#F59E0B",
    icon: "🏛️",
    tagline: "The concept of a maximally great being entails existence",
    versions: [
      { version: "Modal Ontological Argument", formulation: "1. It is possible that a maximally great being (MGB) exists. 2. If it is possible that an MGB exists, then an MGB exists in some possible world. 3. If an MGB exists in some possible world, it exists in all possible worlds. 4. If an MGB exists in all possible worlds, it exists in the actual world.", explanation: "A maximally great being would be omnipotent, omniscient, and morally perfect in every possible world. If such a being is so much as possible, its necessary existence follows. The argument turns on the concept of necessary existence — existence that cannot fail to obtain.", key_figure: "Alvin Plantinga; original: Anselm of Canterbury" },
    ],
    objections: [
      { objection: "I can conceive of a maximally great pizza too", response: "The argument depends on the coherence of the concept of necessary existence — a being that could not fail to exist. Physical objects cannot be necessarily existent; a necessary being is a different kind of entity. The parody fails because pizza's greatness is not relevantly analogous." },
      { objection: "The premise is question-begging", response: "The argument is widely regarded as logically valid; the debate is whether premise 1 (possible existence of MGB) is plausible. If the concept of a maximally great being is coherent and possible, the argument goes through." },
    ],
  },
  {
    name: "Experiential",
    color: "#3B82F6",
    icon: "✨",
    tagline: "Religious experience constitutes real evidence",
    versions: [
      { version: "Argument from Religious Experience", formulation: "If someone perceives X, that is prima facie evidence that X exists. Many people across cultures and centuries have experienced God. Therefore, there is prima facie evidence that God exists.", explanation: "The argument does not claim that religious experience is infallible or universally shared. It claims that, as with perceptual experience generally, religious experience constitutes genuine evidence unless defeaters override it. The cross-cultural, trans-historical consistency of certain types of experience strengthens the evidential case.", key_figure: "William Alston (Perceiving God); Alvin Plantinga" },
    ],
    objections: [
      { objection: "Experience is explained by psychology", response: "Explaining the psychological mechanism of an experience does not establish that the object perceived does not exist. Explaining how visual experience works does not prove that trees are illusions. The genetic fallacy: the origin of a belief is not proof of its falsity." },
      { objection: "Different religions report different experiences", response: "Variation in religious experience is a real challenge. However, many core experiential reports (transcendence, presence, moral demand) are cross-cultural. And the variation in experience of the physical world doesn't lead us to doubt the physical world's existence." },
    ],
  },
];

const PRACTICES = [
  { title: "Know the Arguments, Know Their Limits", desc: "Arguments for God's existence are evidential, not coercive — they shift the probability in the direction of theism but do not compel belief. Understanding what each argument establishes (and doesn't) prevents over-claiming and makes you more credible in conversation.", icon: "📚" },
  { title: "Argue to Curiosity, Not Defeat", desc: "The goal of apologetic conversation is not to win an argument but to create space for genuine inquiry. Arguments that leave the other person feeling defeated usually produce more resistance, not less. Aim to make Christianity seem worth taking seriously, not to make the other person feel foolish.", icon: "🤝" },
  { title: "Let Cumulative Evidence Accumulate", desc: "No single argument is decisive. The cosmological, teleological, moral, ontological, and experiential arguments together constitute a cumulative case. Like a rope made of multiple strands, the combined case is stronger than any individual argument. Present the mosaic, not just one tile.", icon: "🧩" },
  { title: "Know the Objections Before They Come", desc: "Read the best atheist arguments: Richard Dawkins, Christopher Hitchens, Daniel Dennett. A faith that cannot survive engagement with its critics is fragile. The arguments above are stronger when you have wrestled honestly with the objections — and your conversations will be too.", icon: "⚔️" },
  { title: "Start with the Resurrection", desc: "C.S. Lewis moved from theism to Christianity through the moral argument and the historical evidence for the resurrection. For many people, the historical case for the resurrection — empty tomb, post-resurrection appearances, disciples' willingness to die for this specific claim — is more immediately compelling than abstract philosophical arguments.", icon: "✝️" },
  { title: "Personal Testimony as Evidence", desc: "Your own experience of God — answered prayer, transformed life, encountered grace — is genuine evidence. It is not conclusive for someone else, but it is real. The combination of philosophical argument and personal testimony has persuaded many. Don't neglect either.", icon: "🗣️" },
];

const APOLOGISTS = [
  {
    id: "plantinga",
    name: "Alvin Plantinga",
    era: "b. 1932",
    context: "Notre Dame; Calvin College; Reformed Epistemology",
    bio: "Plantinga is the most important Christian philosopher of the 20th century. His Reformed Epistemology argues that belief in God can be 'properly basic' — rational without being inferred from other beliefs, just as perceptual beliefs and memory beliefs are basic. His free will defense to the problem of evil is the standard philosophical response. His Warranted Christian Belief argues that Christian belief can have positive epistemic status even without successful natural theology.",
    quote: "The evidentialist objection to theistic belief is rooted in classical foundationalism — which is self-referentially incoherent and clearly false.",
    contribution: "Established that Christian belief does not require philosophical proof to be rational — it can be properly basic. His free will defense to the problem of evil is the most carefully argued response in Christian philosophy."
  },
  {
    id: "craig",
    name: "William Lane Craig",
    era: "b. 1949",
    context: "Biola University; Talbot School of Theology",
    bio: "Craig is the most prolific popular Christian apologist of the current era. His Reasonable Faith and his debates with leading atheists have given millions of Christians both the arguments and the confidence to engage skeptics. He is the leading contemporary proponent of the Kalam Cosmological Argument and has done extensive work on the historical evidence for the resurrection. His debate style has been criticized for prioritizing scoring points over genuine inquiry, but his scholarly output is formidable.",
    quote: "The question is not whether God exists but whether the man who thinks God does not exist has examined the evidence carefully enough.",
    contribution: "Made the Kalam cosmological argument the most-used version of the cosmological argument in contemporary Christian apologetics. His work on the historical resurrection has shaped how a generation of Christians think about the evidential basis of Easter."
  },
  {
    id: "chesterton",
    name: "G.K. Chesterton",
    era: "1874-1936",
    context: "English journalist, novelist, theologian; Orthodoxy (1908)",
    bio: "Chesterton is the most enjoyable apologist in the Christian tradition. Orthodoxy — which he described as 'a sort of slovenly autobiography' — traces his journey from skepticism to orthodox Christianity through paradox, imagination, and wonder. His method is not argument alone but perception: he tries to make the reader see the world freshly, which makes Christianity seem not just true but inevitable. The Man Who Was Thursday, The Napoleon of Notting Hill, and Father Brown fiction carry the same apologetic weight through story.",
    quote: "The Christian ideal has not been tried and found wanting. It has been found difficult; and left untried.",
    contribution: "Pioneered imaginative apologetics — the argument through delight, paradox, and wonder rather than syllogism. His influence on C.S. Lewis was decisive. His journalism made orthodox Christianity intellectually credible at a time when the intelligentsia had largely abandoned it."
  },
  {
    id: "schaeffer",
    name: "Francis Schaeffer",
    era: "1912-1984",
    context: "L'Abri Fellowship, Switzerland; The God Who Is There (1968)",
    bio: "Schaeffer built L'Abri in the Swiss Alps as a place where the questions of any honest seeker would receive honest answers. His presuppositional apologetics argued that every worldview rests on unprovable assumptions, and that the Christian worldview's assumptions produce a coherent account of truth, beauty, morality, and personality — while secular worldviews cannot. He engaged philosophy, art, music, and film as apologetic territory when evangelical Christianity was largely ignoring culture.",
    quote: "Christianity is not a series of truths in the plural, but rather Truth spelled with a capital T. Truth about total reality, not just religious things.",
    contribution: "Brought presuppositional apologetics to popular audiences and made cultural engagement a Christian apologetic strategy. L'Abri shaped a generation of intellectuals, artists, and pastors who went on to lead Christian cultural engagement across many fields."
  },
  {
    id: "lewis",
    name: "C.S. Lewis",
    era: "1898-1963",
    context: "Oxford and Cambridge; Mere Christianity (1952)",
    bio: "Lewis came to faith as an adult atheist through the moral argument and the evidence for the resurrection. Mere Christianity — originally BBC radio talks — is the most widely read apologetics text of the 20th century. His trilemma ('liar, lunatic, or Lord') forces a decision about Jesus that makes casual dismissal impossible. The Problem of Pain, Miracles, and Surprised by Joy engage specific intellectual objections to Christianity. His fiction (The Chronicles of Narnia, Space Trilogy, The Screwtape Letters) carries apologetic freight through imagination.",
    quote: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.",
    contribution: "Made the moral argument for God's existence accessible to ordinary readers. The liar/lunatic/Lord trilemma remains the most memorable challenge to the view that Jesus was merely a good moral teacher. His combination of rational argument and imaginative fiction has drawn more people to serious Christianity than perhaps any other single writer."
  }
];

const MAJOR_OBJECTIONS = [
  { obj: "How can a good God allow suffering?", color: "#EF4444", response: "The problem of evil is the most emotionally serious objection to theism. Philosophically, Plantinga's free will defense shows the logical problem of evil is not valid: it is possible that God has morally sufficient reasons for permitting evil, even if we cannot name them. The evidential problem — that the amount and distribution of suffering makes God's existence unlikely — is answered by noting that we are not in a position to assess what God's reasons might be. Practically: the Christian answer is not an explanation but a person. Christ entered suffering rather than preventing it. The cross makes theodicy not a theory but a story." },
  { obj: "Science explains everything; we don't need God", color: "#3B82F6", response: "Scientism — the view that science can answer all meaningful questions — is itself a philosophical position, not a scientific one. Science cannot prove scientism. Science explains how the universe works; it cannot explain why there is something rather than nothing, why the universe is mathematically intelligible, why moral obligations are real, or why consciousness exists. These questions require philosophy and theology. The conflict is not between science and Christianity but between scientism and any worldview that makes metaphysical claims." },
  { obj: "Religion has caused most historical violence", color: "#F59E0B", response: "The historical record is more complex. The 20th century's worst atrocities — Stalinism, Nazism, Maoism — were explicitly secular and atheistic in ideology and killed more people than all religious wars combined. The claim that religion is uniquely violent requires selective reading of history. Moreover, individual believers' failures do not disprove the truth claims of Christianity any more than scientists' failures disprove science. The question is not whether Christians have behaved badly but whether Jesus's resurrection is true." },
  { obj: "The Bible is full of contradictions and errors", color: "#8B5CF6", response: "Most alleged contradictions dissolve under careful reading: different authors emphasizing different details, different orderings of events (topical vs. chronological), complementary rather than contradictory accounts. Genuine difficulties exist — difficult passages, apparent historical inconsistencies — and scholars debate them. But the cumulative manuscript evidence for the New Testament is stronger than for any other ancient document: over 5,800 Greek manuscripts. The text we have is reliable. And the central claims — death, burial, resurrection, appearances — are multiply attested in sources hostile to Christianity." },
  { obj: "Christianity is just one religion among many", color: "#10B981", response: "Religious pluralism — the view that all religions are equally valid paths to the same ultimate reality — requires ignoring that major world religions make contradictory claims. Christianity claims Jesus rose bodily; Islam denies the resurrection happened; Buddhism does not have a personal God to rise. These cannot all be true simultaneously. The question is not whether any religion is true — it is which one (if any) is true. Christianity's truth claims rest on historical evidence, particularly the resurrection, that can be examined." },
  { obj: "Faith is just believing without evidence", color: "#EC4899", response: "This misunderstands what Christian faith is. In the biblical tradition, faith (pistis) is not belief without evidence but trust based on evidence — like trusting a bridge after inspecting it. Hebrews 11's 'faith hall of fame' is full of people who acted on what they had seen God do. C.S. Lewis distinguished faith from opinion: faith is acting on what you have reason to believe even when emotions, moods, or circumstances suggest otherwise. Christian faith is historical, evidential, and reasonable — while also involving personal trust and commitment." }
];

export default function ApologeticsArgumentsPage() {
  const [activeTab, setActiveTab] = useState<"arguments" | "apologists" | "practices" | "objections" | "videos">("arguments");
  const [selectedArg, setSelectedArg] = useState("Cosmological");
  const [expandedObj, setExpandedObj] = useState<string | null>(null);
  const [selectedApologist, setSelectedApologist] = useState("lewis");
  const apologist = APOLOGISTS.find(a => a.id === selectedApologist)!;

  const arg = ARGUMENTS.find(a => a.name === selectedArg)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Arguments for God's Existence</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The classic arguments for God's existence are not proofs in the mathematical sense — they are evidence, cumulatively strong, that theism is the most rational explanation for what we find in the universe and in ourselves.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "arguments" as const, label: "Arguments", icon: "⚖️" },
            { id: "apologists" as const, label: "Apologists", icon: "🏛️" },
            { id: "objections" as const, label: "Objections", icon: "❓" },
            { id: "practices" as const, label: "Using Them", icon: "🗣️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "arguments" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ARGUMENTS.map(a => (
                <button key={a.name} onClick={() => { setSelectedArg(a.name); setExpandedObj(null); }}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedArg === a.name ? a.color : BORDER}`, background: selectedArg === a.name ? `${a.color}20` : "transparent", color: selectedArg === a.name ? a.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {a.icon} {a.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${arg.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <h2 style={{ color: arg.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{arg.name} Argument</h2>
                <span style={{ fontSize: 28 }}>{arg.icon}</span>
              </div>
              <p style={{ color: MUTED, fontSize: 14, fontStyle: "italic", marginBottom: 20 }}>{arg.tagline}</p>

              {arg.versions.map((v, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                  <div style={{ color: arg.color, fontWeight: 800, fontSize: 15, marginBottom: 10 }}>{v.version}</div>
                  <div style={{ background: `${arg.color}08`, border: `1px solid ${arg.color}15`, borderRadius: 8, padding: 14, marginBottom: 10 }}>
                    <div style={{ color: arg.color, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>FORMULATION</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{v.formulation}</p>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: "0 0 8px" }}>{v.explanation}</p>
                  <div style={{ color: MUTED, fontSize: 12 }}>Key figure: {v.key_figure}</div>
                </div>
              ))}

              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16, marginTop: 8 }}>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Common Objections</div>
                {arg.objections.map((o, i) => (
                  <div key={i} style={{ marginBottom: 8 }}>
                    <button onClick={() => setExpandedObj(expandedObj === `${arg.name}-${i}` ? null : `${arg.name}-${i}`)}
                      style={{ width: "100%", background: `${PURPLE}08`, border: `1px solid ${PURPLE}15`, borderRadius: expandedObj === `${arg.name}-${i}` ? "8px 8px 0 0" : 8, padding: "10px 14px", color: MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                      <span>{o.objection}</span>
                      <span style={{ flexShrink: 0 }}>{expandedObj === `${arg.name}-${i}` ? "−" : "+"}</span>
                    </button>
                    {expandedObj === `${arg.name}-${i}` && (
                      <div style={{ background: BG, border: `1px solid ${PURPLE}15`, borderRadius: "0 0 8px 8px", borderTop: "none", padding: 12 }}>
                        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{o.response}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "apologists" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {APOLOGISTS.map(a => (
                <button key={a.id} onClick={() => setSelectedApologist(a.id)}
                  style={{ width: "100%", background: selectedApologist === a.id ? `${PURPLE}18` : "transparent", border: `1px solid ${selectedApologist === a.id ? PURPLE + "80" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: selectedApologist === a.id ? TEXT : MUTED, fontWeight: 700, fontSize: 13 }}>{a.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{a.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ marginBottom: 18 }}>
                  <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{apologist.name}</h2>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{apologist.era}</span>
                    <span style={{ background: `${GREEN}15`, color: GREEN, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{apologist.context}</span>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>LIFE & METHOD</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{apologist.bio}</p>
                </div>
                <div style={{ background: BG, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 10px 10px 0", padding: 18, marginBottom: 18 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>CHARACTERISTIC QUOTE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>&ldquo;{apologist.quote}&rdquo;</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{apologist.contribution}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "objections" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>The six most common objections to Christianity — with substantive (not dismissive) responses. Knowing these prepares you for real conversations and strengthens your own faith.</p>
            </div>
            {MAJOR_OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${o.color}25`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <h3 style={{ color: o.color, fontWeight: 900, fontSize: 16, marginBottom: 12 }}>{o.obj}</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{o.response}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Arguments are tools. Their value depends on how they are used. These six principles help arguments serve genuine inquiry rather than winning debates.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
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
                Lectures and debates on the classical arguments for God's existence from leading Christian thinkers and apologists.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "gO1MOpiF0-g", title: "The Law of Causality and the Cosmological Argument", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul examines the causal principle and how the Kalam Cosmological Argument makes a compelling rational case for a First Cause." },
                  { videoId: "vO2jIT26X8c", title: "The Case for God: Defending Your Faith", channel: "R.C. Sproul / Ligonier Ministries", description: "Sproul presents multiple lines of evidence for God's existence and shows why theism is intellectually defensible against skeptical objections." },
                  { videoId: "khpEek6bvcY", title: "Natural Theology Developed: Defending Your Faith", channel: "R.C. Sproul / Ligonier Ministries", description: "A deeper dive into natural theology — what can be known about God through reason and creation, and how to use that in apologetics." },
                  { videoId: "TamlDfiJqD0", title: "If God Is Good, Why Is There Evil and Suffering?", channel: "John Lennox & Neil deGrasse Tyson", description: "Professor John Lennox engages one of the most common objections to God's existence — the problem of evil — in a live dialogue." },
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
