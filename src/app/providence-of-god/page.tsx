"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "What Is Providence?", verse: "Colossians 1:17", body: "Providence is God's ongoing governance of creation — not only that he made the world but that he continually sustains, directs, and orders it toward his purposes. The word comes from the Latin providere (to foresee, to provide). In Christ all things hold together (Colossians 1:17); the creation does not run on its own momentum but is upheld moment by moment by God's power. Providence distinguishes the living God of Scripture from both the deist's absent watchmaker and the pagan's capricious fate." },
  { title: "General and Special Providence", verse: "Matthew 5:45", body: "General providence refers to God's care for all creation: the regularity of seasons, the rain that falls on the just and unjust alike (Matthew 5:45), the sustaining of biological life, the ordering of human history. Special providence refers to God's particular care for his people — the specific providences by which he works out his purposes in the lives of the elect and in the history of redemption. Both are real; special providence does not exclude general, nor does general diminish special." },
  { title: "Providence and Secondary Causes", verse: "Acts 2:23", body: "God typically works through secondary causes — human choices, natural processes, historical forces — rather than by bypassing them. The cross is the supreme example: it was both the deliberate plan of God and the sinful act of wicked men (Acts 2:23). Providence does not make human choices unreal or moral responsibility meaningless; rather, God's sovereign governance operates through and within creaturely agency. This is one of theology's deepest mysteries: genuine human freedom and genuine divine sovereignty, both fully real." },
  { title: "Providence and Suffering", verse: "Romans 8:28", body: "'In all things God works for the good of those who love him, who have been called according to his purpose' (Romans 8:28). This is not a promise that all things feel good or look good from within the experience of suffering, but that God is weaving even the painful and incomprehensible into purposes that will one day be seen to be good. Joseph's imprisonment, Job's losses, Paul's thorn — the thread of providence runs through each. The confidence is not that life will be easy but that it will not be random." },
  { title: "Trusting Providence", verse: "Proverbs 3:5-6", body: "'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight' (Proverbs 3:5-6). Belief in providence is not fatalism — passive resignation to whatever happens. It is an active, faith-based trust that God is good and sovereign and that therefore our choices, prayers, and efforts matter within the larger arc of his purposes. Providence makes prayer coherent: we pray to the One who governs history, and he actually governs it in response to prayer." },
];

const ASPECTS = [
  { title: "Preservation", icon: "🛡️", verse: "Hebrews 1:3", desc: "God sustains what he has made. The universe does not continue by its own inertia but is upheld moment by moment by the word of God's power. This means creation is radically dependent and cannot be understood apart from its sustaining relation to the Creator.", color: GREEN },
  { title: "Concurrence", icon: "🔗", verse: "Philippians 2:13", desc: "God works in and through creaturely actions — not beside them or instead of them. When you choose, God is working in your willing and acting. This is not divine manipulation of a puppet; it is the mystery of genuine creaturely agency within a sovereignly governed world.", color: PURPLE },
  { title: "Governance", icon: "👑", verse: "Psalm 103:19", desc: "God actively governs all events, large and small — nations and empires, the sparrow's fall, the numbering of hairs. Nothing falls outside his superintendence. This does not mean God wills all evil, but that no evil escapes his governing response and overruling purpose.", color: "#3B82F6" },
  { title: "Permission", icon: "🔓", verse: "Job 1:12", desc: "God permits events he does not cause or approve — including sin, evil, and suffering. The book of Job dramatizes this: God permits Satan's attacks within limits (Job 1:12). Permission is not indifference; God remains active and purposeful even in what he permits rather than directly causes.", color: "#F59E0B" },
  { title: "Restraint", icon: "✋", verse: "Genesis 20:6", desc: "God restrains evil beyond what it would otherwise accomplish. In Abimelech's case: God kept him from sinning (Genesis 20:6). Common grace — the fact that the world is not as evil as it could be — reflects God's restraining hand holding back the full expression of human depravity and demonic malice.", color: "#EC4899" },
  { title: "Direction", icon: "🧭", verse: "Proverbs 21:1", desc: "God directs events toward his purposes. Even the king's heart is like a watercourse in God's hand (Proverbs 21:1) — he turns it where he will. History is not an accident; it is a story with an Author. The final chapter has been written: all things will be gathered under Christ (Ephesians 1:10).", color: "#10B981" },
];

const PRACTICES = [
  { title: "Review Your Week for Providence", desc: "At the end of each week, look back over what happened — the unexpected, the providential, the hard. Ask: where was God active here? What was he doing? The practice of noticing providence trains the eye to see it more readily.", icon: "🔍" },
  { title: "Pray With Confidence", desc: "Providence makes prayer coherent rather than futile. You are not informing an uninvolved God or attempting to change a fixed fate — you are speaking to the One who actively governs history and who has built prayer into the means by which he accomplishes his purposes. Pray expectantly.", icon: "🙏" },
  { title: "Release What You Cannot Control", desc: "The doctrine of providence does the spiritual work of releasing us from the idol of control. You are not responsible for outcomes — you are responsible for faithfulness. God is responsible for outcomes. Identify one area where you are trying to control what only God can govern.", icon: "🕊️" },
  { title: "Interpret Suffering Providentially", desc: "Not immediately — grief needs space. But over time, the person who believes in providence can begin to ask: what is God doing in this? Not demanding an answer now, but refusing the conclusion that it is meaningless. Suffering providentially interpreted is not easier, but it is different.", icon: "🌿" },
  { title: "Keep a Providence Journal", desc: "Record specific events — answered prayers, unexpected turns, protection you did not know you needed, provision that arrived at the right moment. Reviewing it in difficulty becomes concrete evidence of a God who acts, not a theology-class abstraction.", icon: "📓" },
  { title: "Let Providence Produce Humility", desc: "If God governs all things, your successes are not merely your own, your position is not merely your achievement, and your future does not rest merely on your competence. Providence humbles: the same God who placed you here can move you. Respond with gratitude rather than pride.", icon: "🙇" },
];

export default function ProvidenceOfGodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "aspects" | "practices">("theology");
  const [selectedAspect, setSelectedAspect] = useState("Preservation");

  const aspect = ASPECTS.find(a => a.title === selectedAspect)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🧭</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Providence of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            God not only created the world — he governs it. Providence is the doctrine that God actively sustains, directs, and orders all things toward his purposes, from empires to sparrows.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "aspects" as const, label: "Six Aspects", icon: "⚙️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "aspects" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Reformed theologians have distinguished six modes of divine providence — overlapping aspects of the one activity by which God governs all things.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {ASPECTS.map(a => (
                <button key={a.title} onClick={() => setSelectedAspect(a.title)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selectedAspect === a.title ? a.color : BORDER}`, background: selectedAspect === a.title ? `${a.color}20` : "transparent", color: selectedAspect === a.title ? a.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {a.icon} {a.title}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${aspect.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>{aspect.icon}</span>
                <div>
                  <h2 style={{ color: aspect.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{aspect.title}</h2>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{aspect.verse}</span>
                </div>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>{aspect.desc}</p>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The doctrine of providence is not merely an intellectual affirmation — it is a lens that transforms how we pray, suffer, work, and rest.
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
