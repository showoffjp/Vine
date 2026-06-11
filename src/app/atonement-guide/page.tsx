"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";


const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "penal", label: "Penal Substitution" },
  { id: "christus-victor", label: "Christus Victor" },
  { id: "satisfaction", label: "Satisfaction" },
  { id: "moral", label: "Moral Influence" },
  { id: "ransom", label: "Ransom" },
  { id: "integration", label: "Integration" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ATONEMENT_TEXTS = [
  {
    ref: "Isaiah 53:5-6",
    text: "But he was pierced for our transgressions; he was crushed for our iniquities... and the Lord has laid on him the iniquity of us all.",
    note: "The Suffering Servant passage — the foundational OT basis for substitutionary atonement. The NT repeatedly applies this to Christ.",
  },
  {
    ref: "2 Corinthians 5:21",
    text: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.",
    note: "The Great Exchange: our sin to Christ, Christ's righteousness to us. The double imputation at the heart of substitution.",
  },
  {
    ref: "Romans 3:25",
    text: "Whom God put forward as a propitiation by his blood, to be received by faith.",
    note: "Propitiation — the satisfaction of divine wrath. God's wrath is not eliminated but absorbed by Christ on our behalf.",
  },
  {
    ref: "Colossians 2:15",
    text: "He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.",
    note: "Christus Victor imagery — the cross as cosmic defeat of spiritual powers, not only legal transaction.",
  },
  {
    ref: "1 John 2:2",
    text: "He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.",
    note: "The scope of the atonement — sufficient for all, though debates continue about its design.",
  },
];

const PENAL_SUB_CONTENT = {
  definition: "Christ took the punishment we deserved. God is perfectly holy and just — sin demands a penalty. Christ, in our place (substitution) and bearing our guilt (penal), satisfies divine justice so that God can justly forgive.",
  key_texts: ["Isaiah 53:5-6", "Romans 3:25-26 (propitiation)", "2 Corinthians 5:21 (made sin)", "Galatians 3:13 (became a curse)", "1 Peter 3:18 (righteous for the unrighteous)"],
  strengths: [
    "Most comprehensive account of why Christ had to die, not just that he did",
    "Takes the holiness and justice of God with full seriousness",
    "Grounds assurance: God's justice is satisfied, not just overlooked",
    "Central to historic Protestant soteriology (Reformation consensus)",
  ],
  objections: [
    "Does it require punishing an innocent person? (Answer: Christ was not merely innocent but voluntarily identified with sinners; this is not punishment of a third party)",
    "Does it portray God as angry toward Christ? (Answer: the Trinity acts together; the Father does not pour wrath on an estranged Son — they act in unity)",
    "Does it reduce the atonement to forensic categories only? (Answer: it is the foundation, not the totality)",
  ],
  proponents: "Anselm, Calvin, Owen, Turretin, Hodge, Packer, Stott, Carson",
};

const CHRISTUS_VICTOR_CONTENT = {
  definition: "Christ's death and resurrection are primarily a cosmic victory over the powers of sin, death, and the devil. The cross defeats the spiritual forces that held humanity in bondage. The resurrection declares Christ's lordship over all powers.",
  key_texts: ["Colossians 2:13-15 (disarmed rulers)", "Hebrews 2:14 (destroy the devil)", "1 Corinthians 15:26 (last enemy destroyed)", "Revelation 12:10-11 (conquered by the blood of the Lamb)"],
  strengths: [
    "Captures the narrative and cosmic dimensions of the cross",
    "Explains how Christ's death addresses not just guilt but bondage, addiction, and systemic evil",
    "N.T. Wright emphasizes this as the dominant framework in the Gospels",
    "Resonates with Christians in contexts of oppression and spiritual warfare",
  ],
  objections: [
    "By itself, doesn't explain why the cross was necessary (why couldn't God simply overpower evil?)",
    "Needs to be integrated with the guilt/forgiveness dimension to be fully adequate",
  ],
  proponents: "Irenaeus, Gustaf Aulén, N.T. Wright, Scot McKnight",
};

const SATISFACTION_CONTENT = {
  definition: "Anselm of Canterbury's (1033–1109) account: God's honor was infinitely offended by sin. Infinite satisfaction was required — which finite humans could not provide. God became man in Christ so that the God-man could provide satisfaction of infinite worth.",
  key_texts: ["Romans 3:25-26 (to show God's righteousness)", "Hebrews 2:17 (make propitiation)", "Hebrews 9:22 (without the shedding of blood there is no forgiveness)"],
  strengths: [
    "First systematic account of why the cross was necessary",
    "Takes the gravity of sin and the holiness of God seriously",
    "Influenced both Catholic and Protestant atonement theology",
  ],
  objections: [
    "Anselm's feudal 'honor' framework may be more cultural than biblical",
    "Later Reformed theology shifted from honor-satisfaction to penal substitution",
    "Does it locate the atonement in divine necessity rather than divine love?",
  ],
  proponents: "Anselm, Aquinas (modified), Catholic tradition",
};

const MORAL_CONTENT = {
  definition: "The cross is primarily a demonstration of God's love that moves sinners to repentance and moral transformation. Christ's death shows the depth of divine love and the horror of sin, inspiring grateful response rather than satisfying divine justice.",
  key_texts: ["John 15:13 (greater love has no one)", "Romans 5:8 (God demonstrates his love)", "1 John 4:10 (in this is love)"],
  strengths: [
    "Emphasizes God's love as the motive for the cross",
    "Takes seriously the transformative effect of the gospel on moral life",
    "Abelard, the originator, reacted against transactional accounts that seemed to make God angry",
  ],
  objections: [
    "By itself, does not explain how the cross deals with sin's objective guilt — it only influences our subjective response",
    "If God can forgive without satisfaction, why the cross? An example of love would not require Christ's death specifically",
    "Most theologians hold that moral influence is a true but secondary effect, not the primary account",
  ],
  proponents: "Abelard, liberal Protestants, Socinians",
};

const RANSOM_CONTENT = {
  definition: "Christ's death is a ransom — a price paid to free slaves. Humans are enslaved to sin and death. Debates exist about who receives the ransom (some early fathers said the devil; most say this is metaphorical — the ransom is from sin's dominion and death's claim).",
  key_texts: ["Mark 10:45 (give his life as a ransom for many)", "1 Timothy 2:6 (gave himself as a ransom)", "Galatians 4:4-5 (redeem those under the law)"],
  strengths: [
    "Uses Jesus's own language about his death",
    "Captures the liberation dimension: from slavery to freedom",
    "Connects to Old Testament redemption themes (Passover, Jubilee)",
  ],
  objections: [
    "The 'ransom to whom?' question raises problems if taken literally",
    "Best understood as a metaphor within a larger account, not a self-contained theory",
  ],
  proponents: "Origen, some early church fathers",
};

const INTEGRATION_POINTS = [
  {
    title: "All Theories Point to One Cross",
    desc: "The atonement is an ocean, not a puddle. No single metaphor exhausts its meaning. The NT uses legal, commercial, military, relational, and cultic imagery — each illuminating a different facet of what Christ accomplished. The best theology holds multiple models together.",
    color: GREEN,
  },
  {
    title: "Penal Substitution as Foundation",
    desc: "Most evangelical theologians hold that penal substitution is the central account because it alone explains why Christ had to die (not just that he did). It provides the objective ground from which the other benefits flow. But it is not the totality.",
    color: BLUE,
  },
  {
    title: "Christus Victor as Scope",
    desc: "The cosmic victory account ensures that the atonement addresses not only individual guilt but the larger problem of bondage to sin, death, and spiritual powers. Salvation is personal and cosmic.",
    color: TEAL,
  },
  {
    title: "Moral Influence as Effect",
    desc: "The transformative effect of the cross on the believer — the movement to gratitude, love, and imitation — is a real outcome, even if not the primary mechanism. Grace motivates moral change.",
    color: GOLD,
  },
  {
    title: "John Stott's Summary",
    desc: "In The Cross of Christ (1986), Stott argues the cross is the self-substitution of God — God himself bears the penalty he imposes, in the person of his Son. This holds together divine justice (penalty) and divine love (God bears it himself).",
    color: PURPLE,
  },
];

const VIDEOS = [
  { videoId: "CzomcJJb4qI", title: "Penal Substitution: What It Is and Why It Matters" },
  { videoId: "x4t8_2z7-KY", title: "The Cross of Christ — John Stott Overview" },
  { videoId: "LgjPnODSFGo", title: "Christus Victor Explained — N.T. Wright" },
  { videoId: "2Lf4bB7wBVA", title: "Atonement Theories Compared" },
];

export default function AtonementGuidePage() {
  const [tab, setTab] = usePersistedState<string>("vine_aton_tab", "overview");
  const [journal, setJournal] = usePersistedState<string>("vine_aton_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✝️</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>The Atonement</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            How does Christ&apos;s death save? The major theories of atonement — penal substitution, Christus Victor, satisfaction, moral influence, and ransom — and how they fit together.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${RED}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: RED }}>What the Cross Accomplished</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Why did Jesus have to die? This question stands at the center of Christian theology. The NT does not offer a single, technical explanation — it uses multiple images: sacrifice, substitution, redemption, ransom, victory, propitiation, reconciliation. These are not competing theories but facets of one profound reality.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ATONEMENT_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PENAL SUBSTITUTION */}
        {tab === "penal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Penal Substitution</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>{PENAL_SUB_CONTENT.definition}</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700, color: TEAL, marginBottom: "0.5rem" }}>Key Texts</div>
              <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8 }}>
                {PENAL_SUB_CONTENT.key_texts.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Strengths</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {PENAL_SUB_CONTENT.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Common Objections</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {PENAL_SUB_CONTENT.objections.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
              <span style={{ fontWeight: 700, color: GOLD }}>Key proponents: </span>
              <span style={{ color: MUTED }}>{PENAL_SUB_CONTENT.proponents}</span>
            </div>
          </div>
        )}

        {/* CHRISTUS VICTOR */}
        {tab === "christus-victor" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${TEAL}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>Christus Victor</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>{CHRISTUS_VICTOR_CONTENT.definition}</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700, color: TEAL, marginBottom: "0.5rem" }}>Key Texts</div>
              <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8 }}>
                {CHRISTUS_VICTOR_CONTENT.key_texts.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Strengths</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {CHRISTUS_VICTOR_CONTENT.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Limitations</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {CHRISTUS_VICTOR_CONTENT.objections.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
              <span style={{ fontWeight: 700, color: GOLD }}>Key proponents: </span>
              <span style={{ color: MUTED }}>{CHRISTUS_VICTOR_CONTENT.proponents}</span>
            </div>
          </div>
        )}

        {/* SATISFACTION */}
        {tab === "satisfaction" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GOLD}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Satisfaction Theory (Anselm)</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>{SATISFACTION_CONTENT.definition}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Strengths</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {SATISFACTION_CONTENT.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Critiques</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {SATISFACTION_CONTENT.objections.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* MORAL */}
        {tab === "moral" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: PURPLE }}>Moral Influence Theory</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>{MORAL_CONTENT.definition}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Insights</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {MORAL_CONTENT.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Problems</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {MORAL_CONTENT.objections.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* RANSOM */}
        {tab === "ransom" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${BLUE}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: BLUE }}>Ransom Theory</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>{RANSOM_CONTENT.definition}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Insights</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {RANSOM_CONTENT.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div style={{ background: CARD, border: `1px solid ${RED}40`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: RED, marginBottom: "0.5rem" }}>Problems</div>
                <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {RANSOM_CONTENT.objections.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* INTEGRATION */}
        {tab === "integration" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Holding It Together</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INTEGRATION_POINTS.map(i => (
                <div key={i.title} style={{ background: CARD, border: `1px solid ${i.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${i.color}` }}>
                  <div style={{ fontWeight: 700, color: i.color, marginBottom: "0.4rem" }}>{i.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.5rem", color: GREEN }}>Personal Reflection</h2>
              <p style={{ color: MUTED, marginBottom: "1rem", fontSize: "0.9rem" }}>Which aspect of the atonement is most meaningful to you right now? How does it change how you see God, yourself, and sin?</p>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="Reflect on what Christ's death accomplished. Which theory resonates most with your current struggles or questions? How does the cross speak to your life right now?"
                style={{ width: "100%", minHeight: 220, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
