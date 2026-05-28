"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const APPROACHES = [
  {
    name: "Classical Apologetics",
    color: "#3B82F6",
    desc: "Establishes theism first through natural theology (cosmological, teleological, ontological arguments), then argues for the truth of Christianity specifically. Two-step: God exists; this God is the God of Christianity.",
    key_thinkers: "Thomas Aquinas, William Lane Craig, Norman Geisler",
    strengths: "Philosophically rigorous. Effective with those who accept reason as an authority. Provides strong arguments for God's existence independent of Scripture.",
    weaknesses: "Can feel abstract and academic. Assumes neutrality that doesn't exist. Even if God's existence is established, the move to Christianity still requires significant argument.",
    best_for: "Philosophical conversations, those who are skeptical of all religion, academic contexts.",
  },
  {
    name: "Evidential Apologetics",
    color: "#10B981",
    desc: "Uses historical evidence to argue for the truth of Christianity — particularly the resurrection of Jesus. Treats apologetics more like a courtroom case: weighing evidence to arrive at the most probable conclusion.",
    key_thinkers: "John Warwick Montgomery, Josh McDowell, Gary Habermas",
    strengths: "Accessible to non-philosophers. The resurrection evidence is genuinely strong. Keeps the focus on specific, falsifiable claims.",
    weaknesses: "No one is purely neutral with historical evidence — worldviews shape interpretation. Historical probability doesn't usually produce religious commitment.",
    best_for: "Historically-minded skeptics, those who want to examine 'facts,' conversations about the resurrection.",
  },
  {
    name: "Presuppositional Apologetics",
    color: "#EF4444",
    desc: "Argues that everyone has presuppositions (foundational commitments), and that the Christian worldview provides the only coherent foundation for reason, morality, and knowledge itself. Rather than accepting the skeptic's neutral ground, it exposes the incoherence of anti-Christian worldviews.",
    key_thinkers: "Cornelius Van Til, Greg Bahnsen, John Frame",
    strengths: "Doesn't concede neutral ground. Exposes the assumptions behind the questions. Consistent with Reformed epistemology.",
    weaknesses: "Can seem circular. Less immediately accessible in casual conversation. Critics say it is unfalsifiable.",
    best_for: "Conversations with consistent atheists and relativists, philosophical dialogues, those who challenge the authority of reason itself.",
  },
  {
    name: "Cumulative Case Apologetics",
    color: "#F59E0B",
    desc: "No single argument proves Christianity, but multiple independent lines of evidence together make the Christian worldview the most plausible explanation for the data of experience, history, and reason. Like a legal case — no single piece of evidence is conclusive, but together they compel a verdict.",
    key_thinkers: "C.S. Lewis, Tim Keller, Alister McGrath",
    strengths: "Reflects how people actually come to belief. Wide-ranging — covers science, morality, beauty, history, personal experience. Accessible in book form (Lewis, Keller).",
    weaknesses: "No single knockdown argument — requires sustained engagement. Critics can resist each piece individually.",
    best_for: "Reading recommendations, longer conversations, those who are generally seeking but have many different questions.",
  },
];

const OBJECTIONS = [
  {
    question: "How can a good God allow suffering?",
    category: "Problem of Evil",
    brief: "The existence of suffering doesn't disprove God — it raises a question God has actually addressed in the cross.",
    full: "This is the most powerful and most personal objection to Christianity. Three responses: (1) Logical: a world with free beings capable of genuine love necessarily permits the possibility of genuine evil. (2) Evidential: 'Why this much suffering?' — no amount of suffering can logically disprove an omnipotent God, only make him seem less plausible. (3) Theological: God did not stay distant from suffering. He entered it in Christ, suffering the worst the world could inflict, and promised to redeem it. The resurrection is not a denial of suffering but the announcement that it will not have the last word.",
    resources: ["C.S. Lewis, The Problem of Pain", "Tim Keller, Walking with God through Pain and Suffering", "Alvin Plantinga, God, Freedom, and Evil"],
  },
  {
    question: "Isn't the Bible just written by humans and therefore unreliable?",
    category: "Scripture",
    brief: "All historical documents are written by humans. The question is whether these humans were reliable witnesses to what they reported.",
    full: "All our knowledge of the past comes through human witnesses. The question is not whether humans wrote the Bible but whether these particular humans were reliable, honest, and informed. Evidence for reliability: (1) Early dating — the Gospels were written within 30-60 years of Jesus' death, while eyewitnesses were still alive. (2) Internal consistency on key details despite differences in emphasis. (3) Archaeological confirmation of specific historical claims. (4) The testimony of those willing to die for what they claimed to have witnessed. (5) The 'criterion of embarrassment': the Gospels include details that would have been embarrassing to fabricate (women as primary resurrection witnesses, disciples fleeing and denying, Jesus crying, etc.).",
    resources: ["Craig Blomberg, The Historical Reliability of the Gospels", "F.F. Bruce, The New Testament Documents: Are They Reliable?", "J. Warner Wallace, Cold-Case Christianity"],
  },
  {
    question: "Hasn't science disproved God / religion?",
    category: "Science & Faith",
    brief: "Science and Christianity address different questions. Science explains how; faith addresses why.",
    full: "Science cannot disprove God because it investigates natural phenomena through natural methods — it has no tool for detecting or measuring supernatural causes. Many of history's greatest scientists were Christians: Copernicus, Galileo, Newton, Faraday, Mendel, Collins. The origin of the universe (the Big Bang actually points toward a beginning, consistent with Genesis), the fine-tuning of physical constants for life, the emergence of consciousness — these are questions science raises but cannot answer. The claim that science has disproved God usually smuggles in a philosophical commitment to materialism (only physical reality exists) that is not itself a scientific claim.",
    resources: ["Francis Collins, The Language of God", "Alister McGrath, The Dawkins Delusion", "John Lennox, God's Undertaker: Has Science Buried God?"],
  },
  {
    question: "Isn't Christianity just one religion among many? Why think it's uniquely true?",
    category: "Pluralism",
    brief: "The existence of many religions doesn't mean none of them can be true — it means we need to evaluate their claims.",
    full: "The existence of multiple religious traditions no more proves all religions false than the existence of multiple historical theories proves no history happened. Religions make different, often contradictory claims — so they cannot all be true. Christianity makes uniquely falsifiable claims: a specific person, a specific date, a specific event (resurrection). If the resurrection is false, Christianity is false (1 Corinthians 15:17). No other religion's truth depends on a specific historical event in the same way. The question is not 'which religion feels right' but 'which historical claims are most supported by evidence.'",
    resources: ["Timothy Keller, The Reason for God", "Ravi Zacharias, The End of Reason", "Lesslie Newbigin, The Gospel in a Pluralist Society"],
  },
  {
    question: "Didn't Jesus just copy myths from other religions?",
    category: "History",
    brief: "The parallels are vastly exaggerated — and real parallels don't disprove historicity.",
    full: "The claim that Jesus was copied from Osiris, Mithras, or Horus has been comprehensively examined and largely discredited by historians. The alleged parallels (born of a virgin on December 25, died and resurrected, etc.) either don't exist in the original sources or are superficial. The Gospels are first-century Jewish documents, not Greco-Roman mystery religion texts. Genuine parallels (a hero who dies and rises) might reflect universal human longing for transcendence rather than borrowing — and might point to the fact that the story of Christ is the one myth that actually happened (C.S. Lewis). Historians treat the resurrection as a historical question, not a mythological one.",
    resources: ["N.T. Wright, The Resurrection of the Son of God", "Ronald Nash, The Gospel and the Greeks", "C.S. Lewis, Myth Became Fact"],
  },
];

export default function Apologetics101Page() {
  const [activeTab, setActiveTab] = useState<"approaches" | "objections">("approaches");
  const [selected, setSelected] = useState<string | null>("Classical Apologetics");
  const [selectedQ, setSelectedQ] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const approach = APPROACHES.find(a => a.name === selected);
  const objection = OBJECTIONS.find(o => o.question === selectedQ);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🛡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Apologetics 101</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have — but do this with gentleness and respect' (1 Peter 3:15). Apologetics is not winning arguments; it is serving the person asking.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "approaches" as const, label: "Approaches", icon: "🗺️" },
            { id: "objections" as const, label: "Common Objections", icon: "❓" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "approaches" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              {APPROACHES.map(a => (
                <button key={a.name} onClick={() => setSelected(a.name)}
                  style={{ width: "100%", background: selected === a.name ? `${a.color}15` : "transparent", border: `1px solid ${selected === a.name ? a.color + "60" : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: selected === a.name ? a.color : TEXT, fontWeight: 700, fontSize: 13 }}>{a.name}</span>
                </button>
              ))}
            </div>
            {approach && (
              <div style={{ flex: 1 }}>
                <div style={{ background: CARD, border: `1px solid ${approach.color}30`, borderRadius: 14, padding: 28 }}>
                  <h2 style={{ color: approach.color, fontWeight: 900, fontSize: 22, marginBottom: 16 }}>{approach.name}</h2>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{approach.desc}</p>
                  <div style={{ background: BG, borderRadius: 10, padding: 16, marginBottom: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>KEY THINKERS</div>
                    <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{approach.key_thinkers}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>STRENGTHS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{approach.strengths}</p>
                    </div>
                    <div style={{ background: `#EF444408`, border: `1px solid #EF444420`, borderRadius: 10, padding: 14 }}>
                      <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 11, marginBottom: 6 }}>LIMITATIONS</div>
                      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{approach.weaknesses}</p>
                    </div>
                  </div>
                  <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 14 }}>
                    <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>BEST FOR</div>
                    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{approach.best_for}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "objections" && (
          <div>
            <div style={{ display: "flex", gap: 20 }}>
              <div style={{ width: 220, flexShrink: 0 }}>
                {OBJECTIONS.map(o => (
                  <button key={o.question} onClick={() => setSelectedQ(o.question)}
                    style={{ width: "100%", background: selectedQ === o.question ? `${PURPLE}15` : "transparent", border: `1px solid ${selectedQ === o.question ? PURPLE + "60" : BORDER}`, borderRadius: 10, padding: "10px 14px", marginBottom: 6, cursor: "pointer", textAlign: "left" }}>
                    <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{o.category.toUpperCase()}</div>
                    <span style={{ color: selectedQ === o.question ? PURPLE : TEXT, fontWeight: 700, fontSize: 12, lineHeight: 1.4, display: "block" }}>{o.question}</span>
                  </button>
                ))}
              </div>
              {objection && (
                <div style={{ flex: 1 }}>
                  <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
                    <div style={{ color: MUTED, fontWeight: 700, fontSize: 11, marginBottom: 8 }}>{objection.category.toUpperCase()}</div>
                    <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 20, marginBottom: 16, lineHeight: 1.4 }}>{objection.question}</h2>
                    <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                      <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>BRIEF RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{objection.brief}</p>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>FULL RESPONSE</div>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{objection.full}</p>
                    </div>
                    <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                      <div style={{ color: MUTED, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>READ FURTHER</div>
                      {objection.resources.map((r, i) => (
                        <div key={i} style={{ color: PURPLE, fontSize: 13, marginBottom: 4 }}>• {r}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
