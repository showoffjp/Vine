"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "models", label: "Relationship Models" },
  { id: "creation", label: "Creation Views" },
  { id: "evolution", label: "Evolution" },
  { id: "adam", label: "The Historical Adam" },
  { id: "cosmology", label: "Cosmology & Origin" },
  { id: "integration", label: "Integrating Both" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const RELATIONSHIP_MODELS = [
  { color: PURPLE, title: "Conflict (War)", body: "The NOMA-violating view that science and religion are at war: either science destroys religion (Dawkins, Hitchens) or religion rejects science (young-earth literalism that treats every scientific claim as an attack). Both sides caricature each other. The 'conflict thesis' as historical narrative — that science and Christianity have always been at war — was invented by Draper (1874) and White (1896) and is now largely rejected by historians of science. Most major scientists in church history were Christians (Galileo, Newton, Faraday, Mendel, Collins, Polkinghorne)." },
  { color: GOLD, title: "NOMA (Independence)", body: "Stephen Jay Gould's Non-Overlapping Magisteria: science covers facts, religion covers values/meaning — they operate in completely separate domains and cannot conflict. Many Christians find this too compartmentalizing: if God created the physical world, theology has something to say about how it works. And if Jesus rose bodily from the dead, that is an empirical claim about physical history. NOMA produces a religion that cannot be falsified because it makes no truth claims about the world." },
  { color: TEAL, title: "Dialogue", body: "Science and theology are different methods studying the same reality and can learn from each other. Theology can be informed by scientific cosmology (a 13.8 billion-year-old universe changes how we think about time and God's creative work); science can be informed by theological assumptions (the universe is rational and orderly because it was made by a rational God — the precondition for science). Ian Barbour and Alister McGrath represent this position." },
  { color: GREEN, title: "Integration", body: "The strongest version: science and theology together give a more complete picture of reality than either alone. Francis Collins (BioLogos), Alister McGrath, and John Polkinghorne argue that theology and science are complementary approaches to truth. Christian theology provided the philosophical preconditions for science (creation ex nihilo, rationality of the cosmos, human dignity). Science reveals the magnificence of God's creation in unprecedented detail. Conflicts usually arise from bad science or bad theology, not from intrinsic incompatibility." },
];

const CREATION_VIEWS = [
  {
    id: "yec",
    label: "Young Earth Creationism (YEC)",
    content: "YEC holds that Genesis 1 describes six consecutive 24-hour days and that the earth is approximately 6,000-10,000 years old. The scientific consensus for a 4.5 billion-year-old earth and 13.8 billion-year-old universe is rejected as methodologically flawed or interpreted through uniformitarian assumptions YEC disputes. Key proponents: Henry Morris, Ken Ham, Answers in Genesis. YEC is motivated by a strong commitment to biblical authority and the worry that conceding an old earth opens the door to full accommodation with evolution. Critics: the scientific evidence for an old universe is overwhelming and crosses multiple independent methods.",
  },
  {
    id: "oec",
    label: "Old Earth Creationism (OEC)",
    content: "OEC accepts the scientific age of the universe (13.8 billion years) and earth (4.5 billion years) while rejecting common descent. Multiple sub-positions: Gap Theory (a gap between Genesis 1:1 and 1:2), Day-Age Theory (the 'days' of Genesis 1 are long periods), Progressive Creationism (God intervened at multiple points to create new forms of life). Hugh Ross and Reasons to Believe represent this position. OEC seeks to honor both biblical inerrancy and scientific evidence for an old universe, while maintaining that life (especially humans) was directly created by God.",
  },
  {
    id: "evolutionary",
    label: "Evolutionary Creationism / BioLogos",
    content: "EC (sometimes called theistic evolution) holds that God created the universe with properties that led through natural processes — including evolution — to the diversity of life, including humans. Francis Collins, Darrel Falk, and the BioLogos organization represent this position. Genesis 1 is read as a theological narrative (creation week as cosmic temple inauguration, days as literary framework) rather than a scientific description. The image of God is not located in a specific biological origin but in the theological relationship God establishes with humanity. Critics from within Christianity worry about implications for the historical Adam and original sin.",
  },
  {
    id: "id",
    label: "Intelligent Design (ID)",
    content: "ID argues that certain features of living organisms are best explained by an intelligent cause rather than undirected natural processes. Michael Behe's irreducible complexity and Stephen Meyer's signature in the cell are key claims. ID presents itself as a scientific program, not a specifically Christian one. Critics: ID has not produced a positive scientific research program, and its claims (irreducible complexity, specified complexity) have been responded to by mainstream biology. Theologically, ID risks limiting God's activity to gaps in natural explanation (the God-of-the-gaps problem).",
  },
];

const EVOLUTION_ITEMS = [
  { title: "What Evolution Claims", color: TEAL, body: "The modern evolutionary synthesis holds that all life on earth shares common ancestry and has diversified through mutation, natural selection, genetic drift, and gene flow over billions of years. This is the dominant explanatory framework in biology, supported by multiple independent lines of evidence: comparative anatomy, the fossil record, molecular genetics (especially comparative genomics), biogeography, and direct observation of evolution in fast-reproducing organisms. The scientific consensus on common descent is as strong as the consensus on heliocentrism or the germ theory of disease." },
  { title: "What Evolution Does Not Claim", color: GOLD, body: "Evolution is a biological theory about the diversification of life — it does not address the origin of the universe, the origin of life itself (abiogenesis is a separate question), the existence of God, the nature of consciousness, or moral truth. The frequent conflation of Darwinian evolution with atheism (Dawkins) is a philosophical addition, not a scientific conclusion. Science explains the mechanism; it does not settle the question of whether God works through or behind those mechanisms." },
  { title: "Christian Responses to Evolution", color: PURPLE, body: "Christians respond to the evidence for evolution across a spectrum: (1) Reject evolution entirely, prioritizing a particular reading of Genesis (YEC, some OEC); (2) Accept common descent but emphasize divine guidance and human exceptionalism (EC/BioLogos); (3) Accept evolution as the mechanism but insist on the theological truths Genesis narrates — creation as gift, humans as image-bearers, sin as a real rupture. The critical theological questions are not primarily about mechanism but about: Are humans morally accountable to God? Did sin enter history at a particular point? Is Jesus's resurrection historical?" },
  { title: "Miracles and Methodological Naturalism", color: BLUE, body: "Science operates by methodological naturalism — seeking natural explanations for natural phenomena — without committing to metaphysical naturalism (the philosophical claim that nothing supernatural exists). This means science cannot adjudicate miracles (the resurrection, creation ex nihilo) not because they didn't happen but because they are by definition outside the scope of a method limited to natural causes. The Christian need not fear science as an enemy of miracle; science simply cannot address them, for or against." },
];

const ADAM_ITEMS = [
  {
    id: "a1",
    label: "Why the Historical Adam Matters",
    content: "Paul's argument in Romans 5:12-21 depends on a real Adam: 'through one man sin entered the world, and death through sin' (5:12). The parallel between Adam and Christ requires that both be historical: if Adam's sin is mythological, the logic of Christ as the 'last Adam' (1 Cor 15:45) unravels. The doctrines of original sin, universal human guilt, and the need for a universal savior are all interconnected with a historical fall. C. John Collins, John Stott, and others argue that an historical Adam is theologically necessary even if the precise mechanism of origins is uncertain.",
  },
  {
    id: "a2",
    label: "Models for Reconciling Adam with Genetics",
    content: "Genetic evidence indicates the human population never fell below ~10,000 individuals — ruling out a strict bottleneck from a single couple in the recent past. BioLogos proposes: (1) Genealogical Adam — John Walton and Joshua Swamidass argue Adam could be a historical couple who were the genealogical (not genetic) ancestors of all humans within a few thousand years; (2) Federal headship — Adam as a covenant representative of humanity rather than the sole biological progenitor; (3) Symbolic representation — Adam and Eve represent humanity in the Israelite narrative genre, conveying theological truth without historical literalism. Each model involves significant trade-offs.",
  },
  {
    id: "a3",
    label: "The Image of God and Biological Origins",
    content: "Regardless of the biological mechanism, Christians confess that humans are uniquely made in God's image (Genesis 1:26-28) — a relational/functional designation meaning humans are appointed as God's representatives and stewards over creation. This theological claim is not dependent on the biological details of human origin. Even evolutionary creationists insist that humans are qualitatively different from other animals in moral accountability, language, self-transcendence, and relationship with God. The image is not a neurological property to be located but a relational status conferred by God.",
  },
];

const INTEGRATION_TIPS = [
  { title: "Read the Bible for What It Intends to Teach", color: GREEN, body: "Scripture's primary purpose is theological — to reveal God, his purposes, his character, and his salvation. Genesis 1 is written as a theological narrative addressing ancient cosmological questions about who God is and who humans are, not as a scientific description of mechanism. Reading it as science misreads its genre; reading it as myth dismisses its theological truth. The question is always: what did the original author intend to communicate?" },
  { title: "Science Describes How; Theology Addresses Why", color: BLUE, body: "The Big Bang explains the mechanisms of cosmic origin; it does not address why there is something rather than nothing, or why the universe is ordered by elegant mathematical laws. Evolution explains the diversification of life; it does not explain the origin of consciousness, morality, or the experience of beauty. Science and theology answer different questions — neither makes the other redundant." },
  { title: "Hold Secondary Issues with Humility", color: GOLD, body: "Christians disagree significantly on creation views, the age of the earth, and the historical Adam. These are genuine disputes among committed Christians who hold the authority of Scripture. The core commitments — God as creator, humans as image-bearers, the fall as a real event with consequences, Christ as redeemer — can be maintained across different scientific/theological configurations. Division over creation mechanisms has cost the church credibility and fellowship that was not necessary to spend." },
  { title: "Engage Science as Worship", color: TEAL, body: "Science is the disciplined study of creation — and creation reflects the glory, wisdom, and power of the Creator (Psalm 19:1; Romans 1:20). Every discovery in biology, cosmology, physics, and medicine is an encounter with the handiwork of God. Johannes Kepler: 'I was merely thinking God's thoughts after him.' Scientific curiosity and rigorous investigation are acts of worship when undertaken with humility and wonder." },
];

const VIDEOS = [
  { videoId: "GJxY8PL9ADQ", title: "Science and Faith Overview — BioLogos" },
  { videoId: "hI5a1JMJKBs", title: "Can You Believe in God and Evolution? — Francis Collins" },
  { videoId: "U9oe8VHg6Bw", title: "Creation Views Explained — John Lennox" },
  { videoId: "k6EskjGKiC0", title: "The Historical Adam — C. John Collins" },
  { videoId: "n38EFWwv-cc", title: "Big Bang Cosmology and God — Alister McGrath" },
];

export default function ScienceFaithGuide() {
  const [tab, setTab] = useLocalStorage("vine_scifaith_tab", "overview");
  const [creatOpen, setCreatOpen] = useLocalStorage("vine_scifaith_creat", "");
  const [adamOpen, setAdamOpen] = useLocalStorage("vine_scifaith_adam", "");
  const [journal, setJournal] = useLocalStorage("vine_scifaith_journal", "");

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: TEAL + "22", color: TEAL, padding: "0.2rem 0.7rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1 }}>SCIENCE & FAITH</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.5rem" }}>Science and Christian Faith</h1>
        <p style={{ color: MUTED, fontSize: "1rem", marginBottom: "2rem", maxWidth: 680 }}>
          How do faith and science relate? A comprehensive guide to creation views, evolution, the historical Adam, cosmology, and how to hold both together.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                borderColor: tab === t.id ? TEAL : BORDER, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Are Science and Faith at War?</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The popular narrative of a war between science and Christianity is a modern myth. The actual history is more complex: Christianity provided the philosophical preconditions for modern science (the cosmos is rational, orderly, and investigable because it was made by a rational God). Most great scientists of the Scientific Revolution were devout Christians. The perceived conflict today is driven largely by specific disputes over evolution, the age of the earth, and the historical Adam — all of which are genuine issues requiring careful engagement, not culture war.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Core Commitment", value: "God created all things", color: GREEN },
                { label: "Science's Scope", value: "Mechanisms of nature", color: BLUE },
                { label: "Theology's Scope", value: "Meaning and purpose", color: PURPLE },
                { label: "Posture", value: "Humility and curiosity", color: GOLD },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 12, padding: "1.2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 14, padding: "1.3rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: TEAL, marginBottom: "0.5rem" }}>Key Figures Who Integrated Both</h3>
              <ul style={{ color: MUTED, lineHeight: 2, paddingLeft: "1.2rem", fontSize: "0.94rem" }}>
                <li><strong style={{ color: TEXT }}>Isaac Newton</strong> — laws of motion and gravitation; wrote more about theology than physics</li>
                <li><strong style={{ color: TEXT }}>Gregor Mendel</strong> — genetics; Augustinian friar</li>
                <li><strong style={{ color: TEXT }}>Michael Faraday</strong> — electromagnetism; devout Sandemanian Christian</li>
                <li><strong style={{ color: TEXT }}>Francis Collins</strong> — Human Genome Project director; wrote The Language of God</li>
                <li><strong style={{ color: TEXT }}>John Polkinghorne</strong> — Cambridge quantum physicist; ordained Anglican priest; wrote 26 books on science and theology</li>
              </ul>
            </div>
          </div>
        )}

        {/* RELATIONSHIP MODELS */}
        {tab === "models" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Models of Science-Faith Relationship</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Ian Barbour's influential typology identifies four models. The first (conflict) represents two extreme positions; the fourth (integration) is where many Christian scientists land.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {RELATIONSHIP_MODELS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CREATION VIEWS */}
        {tab === "creation" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Creation Views</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Christians hold a range of positions on how to interpret Genesis 1–2 and relate it to scientific cosmology and biology.
            </p>
            {CREATION_VIEWS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${creatOpen === item.id ? BLUE : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setCreatOpen(creatOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: BLUE, fontSize: "1.2rem" }}>{creatOpen === item.id ? "−" : "+"}</span>
                </button>
                {creatOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* EVOLUTION */}
        {tab === "evolution" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Evolution and the Christian</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Evolution is the most contested intersection of science and Christianity. Understanding what the theory actually claims (and doesn't claim) is essential before evaluating it theologically.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {EVOLUTION_ITEMS.map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORICAL ADAM */}
        {tab === "adam" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Historical Adam</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              The question of Adam's historicity is the most theologically significant point in the science-faith conversation. It touches original sin, universal human guilt, Paul's Adam-Christ typology, and the nature of the fall.
            </p>
            {ADAM_ITEMS.map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${adamOpen === item.id ? GOLD : BORDER}`, borderRadius: 12, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button onClick={() => setAdamOpen(adamOpen === item.id ? "" : item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", background: "transparent", border: "none", color: TEXT, fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{adamOpen === item.id ? "−" : "+"}</span>
                </button>
                {adamOpen === item.id && (
                  <div style={{ padding: "0 1.2rem 1rem", color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* COSMOLOGY */}
        {tab === "cosmology" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Cosmology and the Origin of the Universe</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Modern cosmology has provided some of the most striking confirmation of the Christian doctrine of creation ex nihilo — the universe had an absolute beginning.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "The Big Bang and Creation Ex Nihilo", color: BLUE, body: "The Big Bang model, confirmed by the cosmic microwave background radiation (1964), the expansion of the universe (Hubble, 1929), and light element abundances, establishes that the universe had an absolute beginning approximately 13.8 billion years ago. Before the Big Bang, there was no space, no time, no matter, no energy. This is an extraordinary scientific confirmation of Genesis 1:1 — 'In the beginning, God created the heavens and the earth.' The atheist philosopher Anthony Flew changed his view when confronted with the evidence for a universe with a beginning." },
                { title: "Fine-Tuning and the Anthropic Principle", color: GREEN, body: "The universe's fundamental constants (the gravitational constant, the speed of light, the mass of the proton, the cosmological constant) are fine-tuned to extraordinary precision to permit the existence of carbon-based life. Small changes in any of them would produce a universe with no stars, no chemistry, no life. The cosmological fine-tuning argument: this degree of precision is more probable given intentional design than random chance. The multiverse hypothesis (many universes with varying constants) is the main secular alternative, but it is speculative and itself requires explanation." },
                { title: "Quantum Cosmology and Hawking", color: GOLD, body: "Stephen Hawking's no-boundary proposal attempts to eliminate the singularity at the beginning of the universe by treating time as imaginary (in the mathematical sense) at the Planck epoch. This is sometimes presented as eliminating the need for a creator. The theologian's response (Polkinghorne): even if the universe has no initial singularity in this model, it still requires an explanation for the quantum gravitational laws that govern it, the values of the constants, and why there is something rather than nothing. Hawking's model is a description of mechanism, not an explanation of existence." },
                { title: "The Fine-Tuning of Earth", color: TEAL, body: "Not only the universe's constants but the specific conditions of Earth — its distance from the sun, the moon's stabilizing effect on Earth's axis, Jupiter's role as a comet deflector, plate tectonics, the water cycle, the oxygen-nitrogen atmosphere — are remarkably suited for complex life. This does not prove intelligent design in a scientific sense, but it adds to the cumulative case for a universe that appears to be the project of a mind. Psalm 19: 'The heavens declare the glory of God; the skies proclaim the work of his hands.'" },
              ].map(item => (
                <div key={item.title} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTEGRATION */}
        {tab === "integration" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Integrating Science and Faith</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Principles for holding science and Christian faith together with integrity.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
              {INTEGRATION_TIPS.map(tip => (
                <div key={tip.title} style={{ background: CARD, border: `1px solid ${tip.color}44`, borderRadius: 14, padding: "1.3rem" }}>
                  <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: tip.color, marginBottom: "0.6rem" }}>{tip.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{tip.body}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: "1.3rem", marginTop: "1.2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>The Galileo Principle</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.94rem" }}>
                Augustine wrote (400 AD): when a Christian encounters a statement in Scripture that contradicts established natural knowledge, they should consider whether their interpretation of Scripture might be wrong, not assume the natural knowledge is wrong. He was thinking about flat-earth readings of some biblical texts. When overwhelming scientific evidence confronts a particular biblical interpretation, the appropriate first question is: 'Am I reading this correctly?' — not 'Is all of science wrong?' Good hermeneutics and good science inform each other.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Reflection Journal</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Questions for honest engagement with science and faith.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                "Where have you felt the most tension between your faith and what you've learned in science? Has that tension been resolved or is it ongoing?",
                "Which creation view do you hold, and why? What evidence or arguments most shape your position?",
                "Does the question of the historical Adam feel threatening or interesting to you? What theological commitments feel most at stake?",
                "How might seeing science as 'thinking God's thoughts after him' (Kepler) change your relationship to scientific study?",
              ].map((q, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem" }}>
                  <div style={{ color: TEAL, fontWeight: 600, fontSize: "0.9rem" }}>{q}</div>
                </div>
              ))}
            </div>
            <textarea value={journal} onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here — saved locally in your browser..."
              style={{ width: "100%", minHeight: 220, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, color: TEXT, padding: "1rem", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }} />
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Video Teaching</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>Teaching on science, creation, and faith from scientists and theologians who hold both.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                  </div>
                  <div style={{ padding: "0.9rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
