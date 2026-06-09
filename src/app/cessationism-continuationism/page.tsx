"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const ORANGE = "#F97316";
const BLUE = "#3B82F6";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "cessationist", "continuationist", "passages", "tongues", "scholars", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const TAB_LABELS: Record<Tab, string> = {
  overview: "Overview",
  cessationist: "Cessationist",
  continuationist: "Continuationist",
  passages: "Key Passages",
  tongues: "Tongues & Prophecy",
  scholars: "Scholars",
  journal: "Journal",
  videos: "Videos",
};

const CESSATIONIST_ARGS = [
  {
    title: "The Foundation Has Been Laid",
    verse: "Ephesians 2:20",
    body: "The church is 'built on the foundation of the apostles and prophets.' Cessationists argue this means the foundational gifts (apostleship, prophecy in its revelatory sense) served a unique purpose — establishing the church — and are no longer needed once that foundation is complete.",
  },
  {
    title: "1 Corinthians 13:10 — 'The Perfect'",
    verse: "1 Corinthians 13:10",
    body: "'When the perfect comes, the partial will pass away.' Many cessationists argue 'the perfect' refers to the completed canon of Scripture, so tongues and prophecy passed away when the NT canon closed. (Continuationists dispute this identification.)",
  },
  {
    title: "Hebrews 2:3–4 — Signs as Past Verification",
    verse: "Hebrews 2:3–4",
    body: "God 'bore witness by signs and wonders' — using past tense language that may indicate these signs functioned to verify the apostolic message during a unique confirmatory period that has concluded.",
  },
  {
    title: "Historical Absence",
    verse: "Church History",
    body: "Cessationists note that miraculous gifts are largely absent from mainstream church history between the apostolic age and the late 19th century. This pattern suggests the gifts fulfilled their purpose and were withdrawn.",
  },
  {
    title: "Sufficiency of Scripture",
    verse: "2 Timothy 3:16–17",
    body: "Scripture is 'complete' and 'sufficient' for every good work. Continuationist prophecy risks implying ongoing revelation beyond Scripture. Cessationists argue Scripture provides all we need for the Christian life.",
  },
];

const CONTINUATIONIST_ARGS = [
  {
    title: "No Explicit Cessation Text",
    verse: "1 Corinthians 12–14",
    body: "The NT nowhere states these gifts will cease before Christ's return. 1 Cor 13:10 'the perfect' most likely refers to the eschaton (Christ's return), not the canon. Cessationism is an inference, not a stated doctrine.",
  },
  {
    title: "Pentecost as the New Covenant Age",
    verse: "Acts 2:17–18; Joel 2:28",
    body: "Joel's prophecy — 'your sons and daughters will prophesy' — is inaugurated at Pentecost as the characteristic experience of the new covenant age. This is presented as ongoing until 'the day of the Lord' (Acts 2:20), not until the canon closes.",
  },
  {
    title: "Paul's Instructions Assume Continuity",
    verse: "1 Corinthians 14:1, 39",
    body: "'Eagerly desire to prophesy, and do not forbid speaking in tongues.' Paul regulates tongues and prophecy (implying they will continue) rather than abolishing them. His instructions presuppose these gifts will be present in the church.",
  },
  {
    title: "Global Witness of Gifts",
    verse: "Acts 1:8; Mark 16:17–18",
    body: "The global spread of Pentecostalism and charismatic Christianity — now 500+ million believers — includes reported healings, prophecy, and tongues, especially in the Global South. Continuationists argue this is consistent with Jesus's promise of signs accompanying the gospel.",
  },
  {
    title: "Romans 11:29",
    verse: "Romans 11:29",
    body: "'The gifts and calling of God are irrevocable.' Some continuationists use this text (in context about Israel) to argue that gifts God gives are not taken back without explicit statement.",
  },
];

const KEY_PASSAGES = [
  {
    ref: "1 Corinthians 13:8–12",
    cess: "'Tongues will cease, prophecies will end, knowledge will pass away… when the perfect comes.' Cessationists: 'the perfect' = completed Scripture canon.",
    cont: "'The perfect' (to teleion) refers to the eschaton — Christ's return or the final state. Paul's point is about love's permanence vs. gifts' temporariness, not a cessation date.",
  },
  {
    ref: "Ephesians 2:20",
    cess: "Church is built on 'the foundation of apostles and prophets' — foundation gifts were unique to the founding period and are now complete.",
    cont: "Refers to the unique apostolic/prophetic foundational authority, not every function of prophecy or sign. Prophets still exist in Eph 4:11 as ongoing gifts to the church.",
  },
  {
    ref: "Acts 2:17–18",
    cess: "Fulfillment was partial — the outpouring is fulfilled in the apostolic era, establishing the church.",
    cont: "Peter says 'this IS what was spoken by Joel' — the age of the Spirit's outpouring has arrived and continues until 'the day of the Lord.'",
  },
  {
    ref: "1 Corinthians 14:39",
    cess: "Paul is regulating gifts that were present, not mandating them for all times. The instructions describe a specific first-century context.",
    cont: "'Do not forbid speaking in tongues' is a direct command to the ongoing church. Instructions to regulate presuppose continuity.",
  },
  {
    ref: "Hebrews 2:3–4",
    cess: "Signs and wonders bore witness to confirm the apostolic message. That confirmation period is now complete with the canon.",
    cont: "Confirms the historical reality of signs but doesn't limit them to that period. John 14:12 — 'greater works than these' — points to continued signs.",
  },
];

const TONGUES_FAQ = [
  {
    q: "What ARE tongues in the NT?",
    a: "Two types appear in the NT: (1) Acts 2 — known human languages not previously learned, functioning as a sign to unbelievers from diverse nations. (2) 1 Corinthians 12–14 — possibly a heavenly or ecstatic language requiring interpretation, functioning for personal prayer and corporate edification with interpretation.",
  },
  {
    q: "What do cessationists believe about tongues today?",
    a: "Strict cessationists hold that tongues ceased with the apostolic age. Soft cessationists acknowledge tongues may exist but are skeptical of most claimed manifestations. All cessationists oppose the teaching that tongues are the necessary initial evidence of Spirit baptism.",
  },
  {
    q: "What do continuationists believe about tongues?",
    a: "Most continuationists hold tongues are a present gift available to believers (not mandatory for all). In private prayer they build up the believer (1 Cor 14:4); in corporate worship they require interpretation. Many distinguish tongues as 'known languages' (Acts 2) from the prayer language of 1 Cor 14.",
  },
  {
    q: "What is NT prophecy — and is it still authoritative?",
    a: "This is the key debate. Cessationists define prophecy as equal to Scripture (i.e., infallible revelation), which ended with the canon. Continuationists (e.g., Wayne Grudem) define NT congregational prophecy as fallible 'words from the Spirit' that carry significant but non-canonical weight, subject to testing (1 Thess 5:19–21) — distinct from the OT/apostolic infallible prophet.",
  },
  {
    q: "What about healing gifts today?",
    a: "Most continuationists affirm ongoing gifts of healing without claiming every prayer must be answered with physical healing. Most cessationists pray for healing through God's sovereign power but don't believe in an ongoing 'gift of healing' as a spiritual gift in the 1 Cor 12 sense. Both sides affirm God heals miraculously; the debate is about the gift.",
  },
];

const SCHOLARS = [
  { name: "John MacArthur", position: "Cessationist", work: "Charismatic Chaos; Strange Fire", note: "Hard cessationism. Argues charismatic gifts are unbiblical and dangerous. His Strange Fire conference sparked wide debate in 2013." },
  { name: "R.C. Sproul", position: "Cessationist", work: "The Mystery of the Holy Spirit", note: "Soft cessationist. Didn't rule out miraculous gifts entirely but was skeptical of most claimed manifestations in the charismatic movement." },
  { name: "Thomas Schreiner", position: "Cessationist", work: "Spiritual Gifts", note: "NT scholar arguing from 1 Cor 13 and Eph 2:20 for cessation of revelatory gifts while affirming ongoing non-revelatory gifts." },
  { name: "Wayne Grudem", position: "Continuationist", work: "The Gift of Prophecy in the NT and Today", note: "Defines NT prophecy as fallible — 'reporting in human words something the Spirit brings to mind.' His definition is widely used by continuationists to avoid equating modern prophecy with Scripture." },
  { name: "Sam Storms", position: "Continuationist", work: "The Language of Heaven; Practicing the Power", note: "Former cessationist turned continuationist. Provides extensive exegetical defense of all gifts continuing today." },
  { name: "D.A. Carson", position: "Open (soft continuationist)", work: "Showing the Spirit", note: "Careful exegete who argues cessationism is not proven by the NT and that the gifts probably continue, with appropriate caution about claimed manifestations." },
  { name: "Gordon Fee", position: "Continuationist", work: "God's Empowering Presence", note: "Major Pauline scholar. Argues the Spirit's empowering presence — including miraculous gifts — is central to Paul's pneumatology and ongoing in the church." },
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

export default function CessationismPage() {
  const [tab, setTab] = useLocalStorage("vine_cess_tab", "overview");
  const [expandedPassage, setExpandedPassage] = useLocalStorage("vine_cess_passage", "");
  const [expandedFaq, setExpandedFaq] = useLocalStorage("vine_cess_faq", "");
  const [journalPosition, setJournalPosition] = useLocalStorage("vine_cess_position", "");
  const [journalExperience, setJournalExperience] = useLocalStorage("vine_cess_experience", "");
  const [journalQuestion, setJournalQuestion] = useLocalStorage("vine_cess_question", "");

  const VIDEOS = [
    { id: "rXzIQkWPfvk", title: "The Case for Cessationism — John MacArthur" },
    { id: "hFfhp0KlHAY", title: "The Case for Continuationism — Sam Storms" },
    { id: "U6gI7mXEwU4", title: "Are Spiritual Gifts for Today? — D.A. Carson" },
    { id: "WZMmKnXxHm4", title: "Tongues and Prophecy in the NT — Gordon Fee" },
  ];

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
          <div style={{ width: 36, height: 36, borderRadius: 8, background: ORANGE + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={18} color={ORANGE} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Cessationism vs. Continuationism</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Have the spiritual gifts ceased? A biblical and historical guide</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "12px 10px",
              background: "none",
              border: "none",
              borderBottom: tab === t ? `2px solid ${ORANGE}` : "2px solid transparent",
              color: tab === t ? TEXT : MUTED,
              fontWeight: tab === t ? 600 : 400,
              fontSize: 12,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Debate at a Glance</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              The question: Did miraculous spiritual gifts — tongues, prophecy, healing, words of knowledge — cease when the apostolic age ended, or do they continue today?
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}44`, padding: 16 }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>CESSATIONISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
                  Miraculous gifts (tongues, prophecy, healing, apostleship) were unique to the apostolic age — to confirm the gospel message and establish the church. They ceased when the canon closed and the apostolic foundation was complete.
                </p>
              </div>
              <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${ORANGE}44`, padding: 16 }}>
                <div style={{ color: ORANGE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>CONTINUATIONISM</div>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
                  All spiritual gifts listed in 1 Corinthians 12, Romans 12, and Ephesians 4 continue in the church until Christ's return. The NT gives no indication they would cease before the eschaton.
                </p>
              </div>
            </div>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>Gifts Under Discussion</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { label: "Tongues (glossa)", note: "Speaking in unlearned language/prayer language" },
                  { label: "Prophecy", note: "Receiving and declaring a word from God" },
                  { label: "Healing", note: "Miraculous physical restoration" },
                  { label: "Words of Knowledge/Wisdom", note: "Supernaturally disclosed information" },
                  { label: "Miracles", note: "Signs and wonders beyond natural explanation" },
                  { label: "Distinguishing Spirits", note: "Discerning true vs. false spiritual sources" },
                ].map((g, i) => (
                  <div key={i} style={{ background: "#1a1a2e", borderRadius: 6, padding: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{g.label}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{g.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#F59E0B11", border: `1px solid #F59E0B33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>Note on spectrum:</strong> Neither position is monolithic. There are hard cessationists (all miraculous gifts ceased), soft cessationists (most have ceased but God can act miraculously), open-but-cautious continuationists, and pentecostal/charismatic continuationists who expect gifts to operate regularly.
              </p>
            </div>
          </div>
        )}

        {tab === "cessationist" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>The Cessationist Position</h2>
            <p style={{ color: BLUE, fontSize: 12, marginBottom: 16 }}>Held by: MacArthur, R.C. Sproul, much of Reformed tradition, many Baptist churches</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {CESSATIONIST_ARGS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BLUE}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: BLUE, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "continuationist" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>The Continuationist Position</h2>
            <p style={{ color: ORANGE, fontSize: 12, marginBottom: 16 }}>Held by: Assemblies of God, Vineyard, Pentecostal/Charismatic churches, many evangelical scholars</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {CONTINUATIONIST_ARGS.map((arg, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${ORANGE}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{arg.title}</div>
                  <div style={{ color: ORANGE, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{arg.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{arg.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "passages" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages — Both Readings</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Tap each passage to see the cessationist and continuationist interpretations.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_PASSAGES.map((p) => {
                const isOpen = expandedPassage === p.ref;
                return (
                  <div key={p.ref} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button
                      onClick={() => setExpandedPassage(isOpen ? "" : p.ref)}
                      style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}
                    >
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{p.ref}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: BLUE + "11", borderLeft: `3px solid ${BLUE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CESSATIONIST</div>
                          <p style={{ fontSize: 12, color: "#BFDBFE", margin: 0 }}>{p.cess}</p>
                        </div>
                        <div style={{ background: ORANGE + "11", borderLeft: `3px solid ${ORANGE}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: ORANGE, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CONTINUATIONIST</div>
                          <p style={{ fontSize: 12, color: "#FFEDD5", margin: 0 }}>{p.cont}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "tongues" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Tongues & Prophecy — FAQs</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The most practically important sub-questions.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TONGUES_FAQ.map((faq) => {
                const isOpen = expandedFaq === faq.q;
                return (
                  <div key={faq.q} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button
                      onClick={() => setExpandedFaq(isOpen ? "" : faq.q)}
                      style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT, textAlign: "left", gap: 8 }}
                    >
                      <span style={{ fontWeight: 600, fontSize: 13 }}>{faq.q}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={MUTED} style={{ flexShrink: 0 }} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "scholars" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Voices & Scholars</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Key thinkers who have defined this debate.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SCHOLARS.map((s, i) => {
                const col = s.position === "Cessationist" ? BLUE : s.position === "Continuationist" ? ORANGE : GREEN;
                return (
                  <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${col}33`, padding: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{s.name}</div>
                      <span style={{ background: col + "22", color: col, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>
                        {s.position.toUpperCase()}
                      </span>
                    </div>
                    <div style={{ color: col, fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{s.work}</div>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>{s.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Where do you currently land, and why?</label>
                <textarea value={journalPosition} onChange={(e) => setJournalPosition(e.target.value)} placeholder="My church background shaped me to believe… the passage that most convinces me is…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>Describe any personal experience with tongues, prophecy, or miraculous healing.</label>
                <textarea value={journalExperience} onChange={(e) => setJournalExperience(e.target.value)} placeholder="I have experienced… I have never experienced but have observed… I am skeptical of… because…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What question do you most want to resolve about this topic?</label>
                <textarea value={journalQuestion} onChange={(e) => setJournalQuestion(e.target.value)} placeholder="I want to understand… I don't know how to reconcile…" rows={3} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalPosition || journalExperience || journalQuestion) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Both positions presented by their advocates.</p>
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
              { label: "Spiritual Gifts", href: "/spiritual-gifts" },
              { label: "Holy Spirit", href: "/holy-spirit" },
              { label: "Pentecostalism", href: "/pentecostalism" },
              { label: "Prayer Life", href: "/prayer-life" },
              { label: "Charismatic Gifts", href: "/charismatic-gifts-theology" },
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
