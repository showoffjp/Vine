"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "The Problem Stated", verse: "Habakkuk 1:2", body: "'How long, Lord, must I call for help, but you do not listen? Or cry out to you about violence but you do not save?' (Habakkuk 1:2). The problem of evil — why a good, all-powerful God permits suffering and evil — is ancient. The logical form: (1) God is all-good. (2) God is all-powerful. (3) Evil exists. The challenge is that the three seem incompatible. Every serious response to this question is called a theodicy — a justification of God's ways. The Bible does not offer a theodicy in the philosophical sense; it offers something better: a narrative of God's redemptive response to evil." },
  { title: "Evil as the Corruption of Good", verse: "Genesis 3:1-7", body: "Augustine's answer: evil is not a substance created by God but the privation (absence or corruption) of good. God created a good world (Genesis 1:31). Evil entered through creaturely freedom — first in the angelic rebellion, then in Adam and Eve's disobedience. God is not the author of evil; he is the author of a creation with beings capable of real love and real choice — and with that came the possibility of real rebellion. The privation theory is widely influential but does not resolve all versions of the problem." },
  { title: "The Free Will Defense", verse: "Genesis 2:16-17", body: "Alvin Plantinga's free will defense: a world with genuinely free creatures who sometimes choose evil is better than a world of moral robots who always do good by necessity. God could not create free beings who always freely chose good — that is a logical contradiction. If free will is genuinely valuable, then God allowing the evil that results from its misuse is consistent with omnipotence and goodness. The defense addresses moral evil (caused by human choice) but faces harder questions about natural evil (earthquakes, cancer, disease)." },
  { title: "Soul-Making Theodicy", verse: "Romans 5:3-4", body: "John Hick's soul-making theodicy: the world is not a pleasure garden but a vale of soul-making. Suffering is the necessary environment for the development of virtues like courage, patience, compassion, and faith — qualities that require adversity to grow. 'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope' (Romans 5:3-4). Critics note this does not account for suffering that does not build character — gratuitous evil, the suffering of the innocent, death in infancy." },
  { title: "The Cross as God's Answer", verse: "Romans 8:32", body: "'He who did not spare his own Son, but gave him up for us all — how will he not also, along with him, graciously give us all things?' (Romans 8:32). The Christian's ultimate response to suffering is not a philosophical argument but a person. God did not remain at a safe distance from suffering — he entered it, in the flesh, all the way to death on a cross. The cross does not explain suffering; it shows what God does in the face of it. He suffers alongside us, absorbs the worst of evil, and brings resurrection from it." },
];

const RESPONSES = [
  { response: "Classical Theism (Augustinian)", color: GREEN, thinker: "Augustine, Aquinas", summary: "Evil is a privation of good, not a created substance. God permits evil because he can bring greater goods from it. His sovereignty is comprehensive; nothing lies outside his providential ordering. The good that will ultimately result from allowed evil is beyond present comprehension.", strength: "Takes divine sovereignty seriously; maintains goodness of creation", weakness: "Can feel abstract before actual suffering; underexplains apparently gratuitous evil" },
  { response: "Open Theism", color: "#3B82F6", thinker: "Gregory Boyd, Clark Pinnock", summary: "God genuinely does not know (or chooses not to know) how free creatures will choose. The future is genuinely open. God takes risks in creating free beings. Evil results from the misuse of freedom that God genuinely did not predetermine or foreknow. God grieves evil with us.", strength: "Takes human freedom and God's emotional responsiveness seriously", weakness: "Significantly qualifies divine omniscience; many find it inconsistent with Scripture's prophetic passages" },
  { response: "Soul-Making Theodicy", color: PURPLE, thinker: "John Hick", summary: "The world is designed as an environment for spiritual formation. Struggle, suffering, and adversity are not mistakes but the necessary conditions for developing mature moral and spiritual character. A world without suffering would not allow the development of genuine virtue.", strength: "Connects suffering to growth in ways Scripture affirms", weakness: "Does not address infant death, gratuitous evil, or disproportionate suffering" },
  { response: "Protest Theodicy / Lament", color: "#EF4444", thinker: "Elie Wiesel, Walter Brueggemann", summary: "Sometimes the appropriate response is protest, not explanation. Job's three friends were rebuked for defending God too quickly; Job's honest protest was vindicated. The lament psalms give language to suffering that does not resolve it but expresses it honestly before God. Explanation sometimes silences what should be voiced.", strength: "Takes suffering seriously without minimizing it; gives voice to genuine anguish", weakness: "Not a theodicy in the explanatory sense; leaves the question open" },
];

const PRACTICES = [
  { title: "Read the Book of Job", desc: "Job is the Bible's longest and most sustained engagement with the problem of innocent suffering. God rebukes Job's friends — who offered tidy explanations — and vindicates Job's honest protest. Read it slowly. Notice that God never answers Job's 'why' but shows up and restores him. The answer to suffering is a person, not an explanation.", icon: "📖" },
  { title: "Pray the Lament Psalms", desc: "A third of the Psalms are laments — raw, honest expressions of pain, confusion, and complaint addressed directly to God. Psalms 22, 44, 88 do not resolve or provide comfort; they give voice to suffering within a relationship. Using them in prayer teaches us to bring our theodicy questions to God rather than about God.", icon: "🙏" },
  { title: "Hold Explanation and Presence Together", desc: "When someone is suffering, the impulse to explain is understandable but often harmful. Job's friends sat in silence for seven days (Job 2:13) — that was their finest hour. Presence before explanation. The cross does not explain suffering; it promises that God is in it with us. Offer that before offering reasons.", icon: "🤝" },
  { title: "Don't Resolve It Too Quickly", desc: "The Bible gives theodicy resources — free will, soul-making, the cross — but does not tie them into a tidy system. Resist the urge to explain away pain too quickly, in yourself or others. Some suffering cannot be explained; it can only be endured, grieved, and brought to the God who himself endured the cross.", icon: "⚖️" },
  { title: "Point to the Resurrection", desc: "The Christian answer to suffering is not that it is meaningless but that it is not final. Death is real — but resurrection is realer. The resurrection of Jesus is the down payment on the renewal of all things, including the reversal of all that is wrong. This does not minimize present pain but refuses to let present pain have the last word.", icon: "✝️" },
  { title: "Build Theology Before Crisis", desc: "Theodicy questions hit hardest in the middle of suffering — when cognitive processing is compromised by grief and pain. Build your theology of suffering before you need it: study the cross, memorize the lament psalms, read stories of those who suffered well. Preparation is not morbidity; it is wisdom.", icon: "🏗️" },
];

export default function TheodPage() {
  const [activeTab, setActiveTab] = useState<"theology" | "responses" | "practices">("theology");
  const [selectedResponse, setSelectedResponse] = useState("Classical Theism (Augustinian)");

  const resp = RESPONSES.find(r => r.response === selectedResponse)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Theodicy: The Problem of Evil</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Why does God allow suffering and evil? This is the oldest and hardest challenge to faith. Scripture does not give a philosophical answer — it gives something more powerful: a narrative of God entering suffering and defeating it.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as const, label: "Theology", icon: "📖" },
            { id: "responses" as const, label: "Responses", icon: "⚖️" },
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

        {activeTab === "responses" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {RESPONSES.map(r => (
                <button key={r.response} onClick={() => setSelectedResponse(r.response)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedResponse === r.response ? r.color : BORDER}`, background: selectedResponse === r.response ? `${r.color}20` : "transparent", color: selectedResponse === r.response ? r.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {r.response}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${resp.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ color: resp.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{resp.response}</h2>
                <span style={{ background: `${PURPLE}15`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{resp.thinker}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{resp.summary}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>STRENGTH</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{resp.strength}</p>
                </div>
                <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>WEAKNESS</div>
                  <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{resp.weakness}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Theodicy is ultimately not a problem to solve but a mystery to live through. These practices prepare us for suffering and equip us to be present with others in theirs.
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
