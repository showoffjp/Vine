"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "tulip", "facts", "passages", "voices", "history", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const TULIP = [
  {
    letter: "T",
    name: "Total Depravity",
    summary: "Every part of human nature is corrupted by sin — intellect, will, emotions. Fallen humans cannot choose God without prior regenerating grace.",
    verse: "Romans 3:10–11; Ephesians 2:1–3",
    nuance: "Not that humans are as evil as possible, but that sin affects every faculty. No part of us is untouched by the fall.",
  },
  {
    letter: "U",
    name: "Unconditional Election",
    summary: "God chooses who will be saved based solely on his will, not on foreseen faith or merit. Election is not conditioned on anything in the creature.",
    verse: "Ephesians 1:4–5; Romans 9:11–13",
    nuance: "This is the most disputed point. Arminians agree election exists but define it as based on God's foreknowledge of who will believe.",
  },
  {
    letter: "L",
    name: "Limited Atonement",
    summary: "Christ's death was specifically designed to save the elect — 'particular redemption.' Its purpose was definite and will be accomplished.",
    verse: "John 10:11, 15; Matthew 1:21",
    nuance: "The most debated TULIP point. Many 4-point Calvinists ('Amyraldians') reject this, holding Christ died for all but applies it to the elect. Most Arminians hold unlimited atonement.",
  },
  {
    letter: "I",
    name: "Irresistible Grace",
    summary: "When God effectually calls the elect, his grace cannot ultimately be resisted. The Spirit regenerates and enables willing faith.",
    verse: "John 6:37, 44; Romans 8:30",
    nuance: "Calvinists distinguish 'general call' (resistible, to all) from 'effectual call' (irresistible, to the elect). Not that humans can't resist in any sense, but that God's effectual purpose is accomplished.",
  },
  {
    letter: "P",
    name: "Perseverance of the Saints",
    summary: "All who are truly regenerated will persevere in faith to the end. True believers cannot ultimately fall away from salvation.",
    verse: "John 10:28–29; Romans 8:38–39; Philippians 1:6",
    nuance: "Not that Christians can't sin seriously or experience doubt, but that God preserves his elect. Distinct from 'once saved always saved' in that it emphasizes God's keeping, not just a one-time declaration.",
  },
];

const FACTS = [
  {
    letter: "F",
    name: "Freed Will (through Prevenient Grace)",
    summary: "God's prevenient (preceding) grace frees the fallen will to respond to the gospel. All receive this grace; some accept, some reject.",
    verse: "John 1:9; Titus 2:11",
    nuance: "This is Arminianism's answer to total depravity: grace enables without compelling. Most Arminians hold humans remain genuinely free even after prevenient grace.",
  },
  {
    letter: "A",
    name: "Atonement for All",
    summary: "Christ's death was sufficient and designed for all people — not just the elect. God desires all to be saved.",
    verse: "1 Timothy 2:4–6; 2 Peter 3:9; 1 John 2:2",
    nuance: "Arminians argue passages like 'God so loved the world' (John 3:16) mean universal scope. God's desire is universal; human response determines who receives it.",
  },
  {
    letter: "C",
    name: "Conditional Election (based on Foreknowledge)",
    summary: "God elects those he foreknows will freely accept the gospel. Election is conditional on foreseen faith.",
    verse: "Romans 8:29; 1 Peter 1:1–2",
    nuance: "Calvinists argue this makes election ultimately based on human decision, not God's sovereign will. Arminians say it preserves genuine human freedom and responsibility.",
  },
  {
    letter: "T",
    name: "Total Depravity (offset by Prevenient Grace)",
    summary: "Arminians agree humans are totally depraved, but prevenient grace restores sufficient ability to respond to God.",
    verse: "Ephesians 2:1; John 16:8",
    nuance: "The key Arminian distinction: God's grace precedes and enables human response. Sin leaves us dead, but grace is the defibrillator.",
  },
  {
    letter: "S",
    name: "Security Conditional (Possibility of Apostasy)",
    summary: "Genuine believers can fall away from saving faith. Security is maintained by continued faith; apostasy is possible but not inevitable.",
    verse: "Hebrews 6:4–6; Galatians 5:4; Revelation 3:5",
    nuance: "Wesleyan Arminians hold apostasy is possible; some evangelical Arminians hold eternal security. The key point: security is maintained through faith, not by God's unconditional preservation.",
  },
];

const KEY_PASSAGES = [
  {
    ref: "Romans 9:11–13 — Jacob and Esau",
    calv: "God chose Jacob over Esau 'before the twins were born' and 'apart from works.' Divine election is unconditional — not based on foreseen merit or behavior.",
    armin: "Paul's focus is corporate/national election (Israel vs. Edom) for historical purposes, not individual election to salvation. Also interprets through corporate foreknowledge.",
  },
  {
    ref: "John 6:37–44",
    calv: "'All that the Father gives me will come to me' (v.37) and 'No one can come to me unless the Father draws him' (v.44) — irresistible effectual calling of the elect.",
    armin: "'Drawing' (helkō) means enabling, not compelling. God draws all (John 12:32); verse 37 means those who respond to the drawing will be received.",
  },
  {
    ref: "2 Peter 3:9 — God's Desire for All to Repent",
    calv: "'All' refers to all of God's elect. God is 'not wishing that any [of them] should perish.' Or: describes God's revealed will vs. his decretive will.",
    armin: "'All' means all people universally. God genuinely desires all to be saved — this is incompatible with a decree that limits saving grace to a predetermined subset.",
  },
  {
    ref: "Hebrews 6:4–6 — Falling Away",
    calv: "The passage describes those who were externally involved in the community but not truly regenerate — apostasy of the non-elect, not loss of true salvation.",
    armin: "The passage describes genuinely regenerate believers ('partakers of the Holy Spirit') who can fall away. The warning is real and addressed to real Christians.",
  },
  {
    ref: "Romans 8:29–30 — The Golden Chain",
    calv: "'Foreknew' = foreloved (relational foreknowledge); 'predestined, called, justified, glorified' — the unbroken chain of God's sovereign purpose for the elect.",
    armin: "'Foreknew' = God's prior knowledge of who would believe; predestination is grounded in foreknowledge of freely-chosen faith (cf. 1 Pet 1:1–2).",
  },
];

const VOICES = [
  { name: "John Calvin (1509–1564)", side: "Calvinist", color: GOLD, work: "Institutes of the Christian Religion", note: "Systematic theologian of the Reformation whose exegesis of election and grace defined the Reformed tradition. Calvinism is named for him, though 'TULIP' was formalized at Dort." },
  { name: "Jacobus Arminius (1560–1609)", side: "Arminian", color: TEAL, work: "Works of Arminius; Declaration of Sentiments", note: "Dutch Reformed theologian who challenged the dominant Calvinist view of his day. His followers formalized his views in the 'Five Remonstrance Articles' (1610) that prompted the Synod of Dort." },
  { name: "John Wesley (1703–1791)", side: "Arminian", color: TEAL, work: "Sermons on Several Occasions; Plain Account of Christian Perfection", note: "Most influential Arminian after Arminius himself. Added the doctrine of entire sanctification. The Wesleyan-Arminian tradition through Wesley shapes most Methodist, holiness, and Pentecostal churches today." },
  { name: "R.C. Sproul (1939–2017)", side: "Calvinist", color: GOLD, work: "Chosen by God; Grace Unknown", note: "Most accessible popular Calvinist apologist of the 20th century. His Ligonier teaching reached millions with Reformed theology through radio and books." },
  { name: "Roger Olson", side: "Arminian", color: TEAL, work: "Arminian Theology: Myths and Realities", note: "Best contemporary scholarly defense of Arminianism. Corrects common misrepresentations by Calvinists; distinguishes classical Arminianism from semi-Pelagianism." },
  { name: "D.A. Carson", side: "Calvinist (compatibilist)", color: GOLD, work: "Divine Sovereignty and Human Responsibility", note: "Careful NT scholar arguing for 'compatibilism' — God's sovereignty and human responsibility are both real and presented together in Scripture without philosophical resolution." },
  { name: "Jerry Walls & Joseph Dongell", side: "Arminian", color: TEAL, work: "Why I Am Not a Calvinist", note: "Philosophical theologians arguing that Calvinism as typically formulated makes God the author of sin and undermines the moral integrity of the divine character." },
];

const VIDEOS = [
  { id: "Tl3wCGJG8VA", title: "TULIP Explained — Desiring God" },
  { id: "CqnJzaN4wMg", title: "Arminianism Explained — Roger Olson" },
  { id: "oRdQVHuFzI0", title: "Calvinism vs. Arminianism — What's the Difference?" },
  { id: "KkZIAcBUKYk", title: "Election and Predestination — R.C. Sproul" },
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

export default function CalvinismPage() {
  const [tab, setTab] = useLocalStorage("vine_calvarm_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_calvarm_passage", "");
  const [journalPosition, setJournalPosition] = useLocalStorage("vine_calvarm_position", "");
  const [journalPassage, setJournalPassage] = useLocalStorage("vine_calvarm_verse", "");
  const [journalPractical, setJournalPractical] = useLocalStorage("vine_calvarm_practical", "");

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: GOLD + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={18} color={GOLD} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Calvinism vs. Arminianism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Election, free will, atonement — a guide to theology's greatest debate</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 10px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>
            {t === "tulip" ? "TULIP" : t === "facts" ? "FACTS" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Oldest Evangelical Debate</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Since Augustine vs. Pelagius in the 5th century, the tension between divine sovereignty and human freedom has been Christianity's most enduring theological debate. In the Reformation era it crystallized around Calvin and Arminius. It shapes how you understand election, atonement, free will, and assurance of salvation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}44`, padding: 16 }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>CALVINISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>God sovereignly chooses whom to save; those chosen cannot ultimately resist his grace or fall away. Salvation is entirely from God, not conditioned on human choice.</p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}44`, padding: 16 }}>
                <div style={{ color: TEAL, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>ARMINIANISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>God's grace enables genuine free choice. He elects those who freely choose him (foreknown). Christ died for all. True believers can fall away.</p>
              </div>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Both Sides Affirm</div>
              <ul style={{ fontSize: 13, color: MUTED, margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
                <li>Total human sinfulness and need for grace (both reject Pelagianism)</li>
                <li>Salvation is by grace through faith alone — not works</li>
                <li>God genuinely desires human response and holds humans responsible</li>
                <li>Scripture teaches both divine sovereignty and human responsibility</li>
                <li>Genuine Christians on both sides; this is not a salvation issue</li>
              </ul>
            </div>
            <div style={{ background: "#F59E0B11", border: `1px solid #F59E0B33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>The denominations:</strong> Reformed (Presbyterian, Reformed Baptist, OPC) and most Southern Baptist conservatives lean Calvinist. Wesleyan, Methodist, Pentecostal, Church of the Nazarene, and most Arminians follow the Wesleyan-Arminian stream. Most evangelical churches have members of both persuasions.
              </p>
            </div>
          </div>
        )}

        {tab === "tulip" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>TULIP — The Five Points of Calvinism</h2>
            <p style={{ color: GOLD, fontSize: 12, marginBottom: 16 }}>Codified at the Synod of Dort (1618–1619) in response to the Arminian Remonstrance</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {TULIP.map((pt) => (
                <div key={pt.letter} style={{ background: CARD, borderRadius: 10, border: `1px solid ${GOLD}44`, padding: 16 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: GOLD + "22", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: GOLD, fontWeight: 700, fontSize: 16 }}>{pt.letter}</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{pt.name}</div>
                      <div style={{ color: GOLD, fontSize: 11 }}>{pt.verse}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", margin: "0 0 8px" }}>{pt.summary}</p>
                  <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "6px 10px", borderRadius: "0 6px 6px 0" }}>
                    <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>NUANCE: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{pt.nuance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "facts" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>FACTS — The Arminian Response</h2>
            <p style={{ color: TEAL, fontSize: 12, marginBottom: 16 }}>The Arminian answer to each point of TULIP — formulated as a teaching acronym</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FACTS.map((pt) => (
                <div key={pt.letter} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}44`, padding: 16 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: TEAL + "22", border: `2px solid ${TEAL}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: TEAL, fontWeight: 700, fontSize: 16 }}>{pt.letter}</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{pt.name}</div>
                      <div style={{ color: TEAL, fontSize: 11 }}>{pt.verse}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", margin: "0 0 8px" }}>{pt.summary}</p>
                  <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "6px 10px", borderRadius: "0 6px 6px 0" }}>
                    <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>NUANCE: </span>
                    <span style={{ fontSize: 11, color: MUTED }}>{pt.nuance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages — Both Readings</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Tap each passage to see how Calvinists and Arminians read it.</p>
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
                        <div style={{ background: GOLD + "11", borderLeft: `3px solid ${GOLD}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CALVINIST READING</div>
                          <p style={{ fontSize: 12, color: "#FEF3C7", margin: 0 }}>{p.calv}</p>
                        </div>
                        <div style={{ background: TEAL + "11", borderLeft: `3px solid ${TEAL}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>ARMINIAN READING</div>
                          <p style={{ fontSize: 12, color: "#CCFBF1", margin: 0 }}>{p.armin}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Historical & Contemporary Voices</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The theologians who have most shaped this debate.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VOICES.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${v.color}33`, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <span style={{ background: v.color + "22", color: v.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>{v.side.toUpperCase()}</span>
                  </div>
                  <div style={{ color: v.color, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{v.work}</div>
                  <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "history" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Historical Context</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { era: "Augustine vs. Pelagius (5th c.)", body: "Pelagius taught humans have the natural capacity to choose good. Augustine argued that after the fall, humans can only be saved by God's efficacious grace — the seeds of the Calvinist position." },
                { era: "The Reformation (16th c.)", body: "Luther and Calvin recovered Augustine's view of sovereign grace against medieval semi-Pelagianism. Calvin's Institutes systematized the Reformed doctrine of double predestination." },
                { era: "Arminius & The Remonstrance (1610)", body: "Dutch theologian Arminius challenged the Calvinist consensus within the Reformed church. After his death, his followers issued the 'Five Articles of Remonstrance' — the founding Arminian document." },
                { era: "Synod of Dort (1618–1619)", body: "A major Reformed council convened to respond to the Remonstrance. The council affirmed TULIP and condemned the Arminian position. The Remonstrants were expelled from Holland." },
                { era: "Wesley & the Evangelical Revival (18th c.)", body: "John Wesley brought Arminianism into the evangelical mainstream. His theology — adding entire sanctification — gave rise to the Wesleyan tradition, which today includes Methodists, Nazarenes, Salvation Army, and most Pentecostals." },
                { era: "Today", body: "Both traditions flourish. Reformed denominations (PCA, OPC, Reformed Baptist) are explicitly Calvinist. SBC has a significant internal debate. Arminianism dominates Wesleyan, Methodist, Pentecostal, and charismatic streams. Many churches contain both persuasions." },
              ].map((h, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{h.era}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{h.body}</p>
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
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Where do you currently lean, and what shaped your view?</label>
                <textarea value={journalPosition} onChange={(e) => setJournalPosition(e.target.value)} placeholder="I grew up in a… church. The passage that most shapes me is…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Which passage do you find most challenging to your view?</label>
                <textarea value={journalPassage} onChange={(e) => setJournalPassage(e.target.value)} placeholder="Romans 9 challenges me because… 2 Peter 3:9 suggests…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>How does this theology affect your prayer life, evangelism, and assurance?</label>
                <textarea value={journalPractical} onChange={(e) => setJournalPractical(e.target.value)} placeholder="My view on election affects how I pray because… When I share the gospel I…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalPosition || journalPassage || journalPractical) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Both sides argued by their advocates.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
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
              { label: "Reformed Theology", href: "/reformed-theology" },
              { label: "Predestination", href: "/predestination" },
              { label: "Salvation", href: "/salvation" },
              { label: "Systematic Theology", href: "/systematic-theology-101" },
              { label: "Faith & Works", href: "/faith-and-works" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
