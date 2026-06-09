"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Eye, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "classical", "open", "molinism", "passages", "prayer", "voices", "journal"] as const;
type Tab = (typeof TABS)[number];

const CLASSICAL_ATTRS = [
  { name: "Omniscience", def: "God knows all true propositions, including all future free actions of creatures.", verse: "Isaiah 46:10; Psalm 139:4; Acts 2:23" },
  { name: "Immutability", def: "God does not change in his being, character, or knowledge. He is 'the same yesterday, today, and forever.'", verse: "Malachi 3:6; James 1:17; Hebrews 13:8" },
  { name: "Impassibility", def: "God does not experience emotional change or suffering in the way creatures do. His nature is not altered by events in time.", verse: "Numbers 23:19; 1 Samuel 15:29" },
  { name: "Eternity", def: "God is outside of time (timeless) or transcends time. All moments are equally 'present' to him.", verse: "Psalm 90:2; 2 Peter 3:8; Revelation 1:8" },
  { name: "Simple Foreknowledge", def: "God timelessly knows all future events without those events causing or limiting his freedom.", verse: "Isaiah 48:5; Romans 8:29" },
];

const OPEN_CLAIMS = [
  {
    claim: "The Future Is Partially Open",
    body: "God created genuinely free creatures whose future choices are not yet determined. God does not know future free choices exhaustively because those choices don't yet exist to be known. This is not a limitation on God but a consequence of what it means to create free beings.",
    verse: "Genesis 22:12; Jeremiah 3:7; 1 Samuel 23:10–13",
  },
  {
    claim: "God Genuinely Responds and Changes",
    body: "Biblical language about God 'repenting,' 'relenting,' and 'changing his mind' (Jonah 3:10; Exodus 32:14; Genesis 6:6) should be taken more literally than classical theism allows. God genuinely responds to prayer and human action in ways that alter his plans.",
    verse: "Jonah 3:10; Exodus 32:14; Numbers 14:20",
  },
  {
    claim: "God's Sovereignty Remains Intact",
    body: "Open theists do not deny divine sovereignty. God is powerful enough to accomplish his ultimate purposes even in a world with genuine free creatures. He knows all possibilities and is never caught off-guard. He sets boundaries and purposes that cannot be thwarted.",
    verse: "Isaiah 14:24; Job 42:2",
  },
  {
    claim: "This View Preserves Genuine Prayer",
    body: "If God already knows and has settled everything, prayer that 'changes things' seems incoherent. Open theism argues prayer is genuinely efficacious — God really acts differently in response to prayer than he would have without it.",
    verse: "James 5:16; Genesis 18:22–33; Exodus 32:9–14",
  },
];

const MOLINISM_POINTS = [
  { title: "Three Types of God's Knowledge", body: "Molinism (Middle Knowledge) holds that God has three logical orders of knowledge: (1) Natural Knowledge — all necessary truths, all possible worlds. (2) Middle Knowledge — what every possible free creature would freely do in any possible circumstance (counterfactuals of creaturely freedom). (3) Free Knowledge — God's knowledge of the actual world he chose to actualize." },
  { title: "How It Works", body: "Before creation, God 'surveys' all possible creatures and all possible circumstances, knowing exactly what each free creature would choose in each. He then selects which world to actualize — achieving his purposes while preserving genuine human freedom. He knows your future choices not by determining them but by knowing what you would freely do." },
  { title: "How It Differs from Classical Theism", body: "Classical theism (simple foreknowledge) says God knows future choices by his timeless eternality. Molinism says God knows them by middle knowledge — counterfactual knowledge — before the decision to create. Both affirm exhaustive foreknowledge; Molinism explains the mechanism differently." },
  { title: "How It Differs from Open Theism", body: "Open theism says the future free choices of creatures are not knowable even by God before they are made. Molinism says God knows what free creatures would do in any circumstance — this is the key difference. Molinists affirm complete foreknowledge; open theists deny it." },
  { title: "Main Objections to Molinism", body: "Critics (including many Calvinists) argue: (1) There are no true counterfactuals of creaturely freedom — the 'would' claim is unfounded. (2) If God knows what you would do, in what sense are you free? (3) It still makes God's ultimate sovereign choices depend on the 'grounding' of middle knowledge, which is philosophically contested." },
];

const KEY_PASSAGES = [
  {
    ref: "Genesis 22:12 — 'Now I know'",
    classical: "Anthropomorphism or accommodation — God already knew; this language reflects the event from Abraham's perspective, not God learning new information.",
    open: "God genuinely learned through the test that Abraham feared God. This is one of the clearest open theism texts — God says 'now I know,' implying prior non-knowledge.",
  },
  {
    ref: "Jonah 3:10 — God 'relented'",
    classical: "God's 'relenting' describes the change in what he does, not in his inner being or foreknowledge. God foreknew Nineveh would repent; his 'relenting' was planned.",
    open: "God genuinely changed what he was going to do in response to genuine repentance. The text says what it says — this is a real change, not anthropomorphic accommodation.",
  },
  {
    ref: "Isaiah 46:10 — 'I make known the end from the beginning'",
    classical: "God declares the future because he knows it exhaustively — this is a direct claim to complete foreknowledge of future events.",
    open: "God is able to declare the end from the beginning because of his sovereign power to bring about those ends — not necessarily because he has exhaustive foreknowledge of every free choice.",
  },
  {
    ref: "1 Samuel 23:10–13 — God's Knowledge of Counterfactuals",
    classical: "Supports Molinism — God knows what the people of Keilah would do if David stayed. Complete foreknowledge of counterfactuals.",
    open: "This text is unusual — it may suggest God knows the tendencies of hearts without necessarily knowing every future free choice. Open theists debate this passage carefully.",
  },
];

const VOICES = [
  { name: "Gregory Boyd", position: "Open Theist", color: TEAL, work: "God of the Possible; Satan and the Problem of Evil", note: "The most accessible open theist apologist. Former evangelical, pastor and theologian, now at Woodland Hills Church. His book 'God of the Possible' sparked major evangelical debate." },
  { name: "Clark Pinnock", position: "Open Theist", color: TEAL, work: "The Openness of God (co-authored)", note: "Canadian evangelical who moved from Calvinist to Arminian to open theist over his career. One of the movement's founders. Controversial in his later years with the Evangelical Theological Society." },
  { name: "John Sanders", position: "Open Theist", color: TEAL, work: "The God Who Risks; Theology in the Flesh", note: "Systematic theologian who helped found open theism. His 'The God Who Risks' is a standard academic treatment of the position." },
  { name: "William Lane Craig", position: "Molinist", color: GOLD, work: "The Only Wise God; Divine Foreknowledge and Human Freedom", note: "The foremost popular apologist for Molinism. Has extensively defended middle knowledge as philosophically coherent and biblically grounded against both Calvinism and open theism." },
  { name: "Bruce Ware", position: "Classical (Modified)", color: BLUE, work: "God's Lesser Glory; Their God Is Too Small", note: "Critical of open theism from a broadly Reformed perspective. Argues it reduces God to a finite deity. Co-edited influential response volumes." },
  { name: "Roger Olson", position: "Arminian (not open)", color: PURPLE, work: "Arminian Theology: Myths and Realities", note: "Distinguishes classical Arminianism (simple foreknowledge) from open theism. Arminians affirm exhaustive foreknowledge based on foreknowledge of future free choices — they are NOT open theists." },
];

const VIDEOS = [
  { id: "OEADifV3A5o", title: "What Is Open Theism? — Greg Boyd" },
  { id: "6oNNO9V3sAw", title: "Open Theism vs. Classical Theism — William Lane Craig" },
  { id: "nz7N3p7s7LY", title: "Middle Knowledge Explained — William Lane Craig" },
  { id: "VpuQJrLXVkQ", title: "Foreknowledge and Free Will — Bruce Ware" },
];

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

export default function OpenTheismPage() {
  const [tab, setTab] = useLocalStorage("vine_opentheism_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_opentheism_passage", "");
  const [journalView, setJournalView] = useLocalStorage("vine_opentheism_view", "");
  const [journalPrayer, setJournalPrayer] = useLocalStorage("vine_opentheism_prayer", "");

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: TEAL + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Eye size={18} color={TEAL} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Open Theism & Classical Theism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Does God know the future? A guide to the foreknowledge debate</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 11px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${TEAL}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t === "molinism" ? "Molinism" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Foreknowledge Debate</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Does God know every future event — including every free human choice — before it occurs? Classical Christianity has historically answered yes. Open theism argues the future free choices of creatures are genuinely open and not known to God in advance. Molinism offers a middle position.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Classical Theism", color: BLUE, desc: "God has exhaustive foreknowledge of all events including future free choices. Held by most of church history." },
                { label: "Open Theism", color: TEAL, desc: "Future free choices are not yet determined and thus not known by God in advance. God knows all possibilities." },
                { label: "Molinism", color: GOLD, desc: "God knows what every free creature would do in every possible circumstance (middle knowledge). Complete foreknowledge is preserved." },
              ].map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${p.color}44`, padding: 12 }}>
                  <div style={{ color: p.color, fontWeight: 700, fontSize: 11, marginBottom: 6 }}>{p.label}</div>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Why This Matters Practically</div>
              {[
                "Does prayer actually change anything if God already knows the outcome?",
                "If God knows I will sin, am I truly free not to sin?",
                "How do we explain biblical language about God 'changing his mind'?",
                "Can God be surprised, grieved, or genuinely respond to us?",
                "Is God's sovereignty compatible with genuine human freedom?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: MUTED }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "classical" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Classical Theism</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>Held by: Augustine, Aquinas, Calvin, most of church history, most evangelical theologians today</p>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Classical theism holds that God is perfect in every way — omniscient (all-knowing), immutable (unchanging), impassible (unaffected by external change), and eternal (outside of time). God's knowledge of the future is not 'foresight' in the way humans anticipate things; rather, all events are eternally present to his infinite mind.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CLASSICAL_ATTRS.map((a, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: BLUE, marginBottom: 4 }}>{a.name}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>{a.def}</p>
                  <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "4px 8px", borderRadius: "0 4px 4px 0" }}>
                    <span style={{ color: GREEN, fontSize: 11 }}>{a.verse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "open" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Open Theism</h2>
            <p style={{ color: TEAL, fontSize: 12, marginBottom: 4 }}>Emerged in the 1990s; held by Boyd, Pinnock, Sanders, Rice</p>
            <p style={{ color: "#F59E0B", fontSize: 11, marginBottom: 16 }}>⚠️ Considered outside evangelical consensus by the Evangelical Theological Society (ETS rejected it) and most denominations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {OPEN_CLAIMS.map((c, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.claim}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>{c.body}</p>
                  <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "4px 8px", borderRadius: "0 4px 4px 0" }}>
                    <span style={{ color: GREEN, fontSize: 11 }}>{c.verse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "molinism" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Molinism / Middle Knowledge</h2>
            <p style={{ color: GOLD, fontSize: 12, marginBottom: 16 }}>Named after Luis de Molina (1535–1600); championed today by William Lane Craig</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {MOLINISM_POINTS.map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: GOLD, marginBottom: 6 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The contested texts — how each position reads them.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_PASSAGES.map((p) => {
                const isOpen = expandedPassage === p.ref;
                return (
                  <div key={p.ref} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedPassage(isOpen ? "" : p.ref)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14, textAlign: "left" }}>{p.ref}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: BLUE + "11", borderLeft: `3px solid ${BLUE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CLASSICAL THEISM</div>
                          <p style={{ fontSize: 12, color: "#BFDBFE", margin: 0 }}>{p.classical}</p>
                        </div>
                        <div style={{ background: TEAL + "11", borderLeft: `3px solid ${TEAL}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>OPEN THEIST</div>
                          <p style={{ fontSize: 12, color: "#CCFBF1", margin: 0 }}>{p.open}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "prayer" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Prayer & God's Responsiveness</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              The foreknowledge debate is not abstract — it directly affects how we understand prayer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  title: "Classical Theism View",
                  color: BLUE,
                  body: "God ordained both the prayer and its answer. Prayer is not informing God of something he doesn't know, nor is it changing God's mind. Rather, prayer is the ordained means by which God brings about his will. God works through our prayers as secondary causes. The effectual fervent prayer of a righteous person 'avails much' (James 5:16) — not by altering God's eternal decree, but by being part of it.",
                },
                {
                  title: "Open Theism View",
                  color: TEAL,
                  body: "Prayer genuinely changes the future. Because the future is not settled, God really acts differently in response to prayer than he would have without it. Abraham's intercession for Sodom (Gen 18) and Moses's for Israel (Exod 32) are genuine examples of God changing course in response to prayer. This makes prayer more meaningful, not less, because it actually matters.",
                },
                {
                  title: "What All Views Affirm",
                  color: GREEN,
                  body: "Every evangelical position affirms: God hears prayer, God responds to prayer, prayer matters, Jesus commanded prayer, the NT is full of urgent calls to prayer. The debate is about the mechanism — not whether prayer makes a difference. Christians of all three positions pray fervently.",
                },
              ].map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${p.color}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: p.color, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Voices</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.position.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Which position resonates most, and why? What Scripture most shapes your view?</label>
                <textarea value={journalView} onChange={(e) => setJournalView(e.target.value)} placeholder="I lean toward… because the passage that most convinces me is… I struggle with…" rows={5} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>How does your view on God's foreknowledge affect how you pray?</label>
                <textarea value={journalPrayer} onChange={(e) => setJournalPrayer(e.target.value)} placeholder="When I pray I feel… I wonder if my prayers actually change anything because… This doctrine makes prayer feel…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalView || journalPrayer) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Calvinism & Arminianism", href: "/calvinism-arminianism" },
              { label: "Providence of God", href: "/providence-of-god" },
              { label: "Prayer Life", href: "/prayer-life" },
              { label: "Theology of Prayer", href: "/theology-of-prayer" },
              { label: "Systematic Theology", href: "/systematic-theology-101" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
