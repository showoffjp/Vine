"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function ApologeticsArgumentsPage() {
  const [activeTab, setActiveTab] = useState<"arguments" | "practices">("arguments");
  const [selectedArg, setSelectedArg] = useState("Cosmological");
  const [expandedObj, setExpandedObj] = useState<string | null>(null);

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
            { id: "arguments" as const, label: "The Arguments", icon: "⚖️" },
            { id: "practices" as const, label: "Using Them", icon: "🗣️" },
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
      </div>
    </div>
  );
}
