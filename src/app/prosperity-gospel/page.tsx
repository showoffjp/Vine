"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, AlertTriangle, Heart, Users, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const RED = "#EF4444";
const AMBER = "#F59E0B";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["theology", "figures", "critique", "recovery", "scripture", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const THEOLOGY_CLAIMS = [
  {
    claim: "God wants all believers to be wealthy",
    proof_text: "3 John 2 — 'Beloved, I pray that all may go well with you and that you may be in good health'",
    problem:
      "3 John 2 is a conventional Greek letter greeting (like 'Best wishes'), not a divine wealth promise. The same John wrote to persecuted churches (Rev 2–3) promising not wealth but endurance through tribulation.",
  },
  {
    claim: "Sickness always indicates lack of faith",
    proof_text: "Isaiah 53:5 — 'By his wounds we are healed'",
    problem:
      "Isaiah 53:5 in context (and quoted in 1 Pet 2:24) refers to spiritual healing from sin, not guaranteed physical cure. Paul had a 'thorn in the flesh' despite prayer; Epaphroditus was ill (Phil 2:27); Timothy had stomach problems (1 Tim 5:23).",
  },
  {
    claim: "Positive confession creates reality",
    proof_text: "Proverbs 18:21 — 'Death and life are in the power of the tongue'",
    problem:
      "Proverbs is wisdom literature describing tendencies, not metaphysical laws. This teaching borrows from New Thought/Christian Science metaphysics, not Hebrew theology. Jesus commanded prayer aligned with God's will, not declaration of desired outcomes.",
  },
  {
    claim: "Tithing and giving 'seed-faith' unlock financial blessing",
    proof_text: "Malachi 3:10 — 'Bring the full tithe…I will open the windows of heaven'",
    problem:
      "Malachi addresses the nation of Israel under the Mosaic covenant about temple provision — not a universal financial formula. 2 Cor 9:6–7 teaches generous giving out of cheerfulness, not transactional investment for return.",
  },
  {
    claim: "Jesus was wealthy and so should his followers be",
    proof_text: "2 Cor 8:9 — 'Though he was rich, yet for your sake he became poor'",
    problem:
      "2 Cor 8:9 contrasts Christ's pre-incarnate divine glory with the poverty of incarnation — to make us spiritually rich. Jesus had no home (Matt 8:20), was buried in a borrowed tomb, and repeatedly called people to sell possessions and follow him.",
  },
];

const FIGURES = [
  {
    name: "Kenneth Hagin (1917–2003)",
    role: "Founder of 'Word of Faith' movement",
    color: RED,
    desc: "Founder of Rhema Bible Training College and the modern word-of-faith stream. Claimed multiple visions of Jesus who taught him 'positive confession' theology. His theology was heavily influenced by E.W. Kenyon's New Thought-adjacent ideas.",
    legacy: "His teachings became the theological foundation for most prosperity teachers that followed.",
  },
  {
    name: "Kenneth & Gloria Copeland",
    role: "Televangelist couple, Kenneth Copeland Ministries",
    color: RED,
    desc: "Among the most prominent prosperity teachers globally. Known for private jets, multi-million-dollar estates, and claiming Christians should not fly commercial. Their teachings extend to rejecting conventional medicine in favor of faith-based healing declarations.",
    legacy: "Reached millions through TBN; their theology remains influential in charismatic and Pentecostal circles.",
  },
  {
    name: "Joel Osteen (b. 1963)",
    role: "Lakewood Church, Houston",
    color: AMBER,
    desc: "The softened, mainstream face of prosperity theology. Osteen rarely uses overtly transactional language but consistently frames faith in terms of favor, promotion, and personal success. His books ('Your Best Life Now') reach secular audiences.",
    legacy: "Introduced prosperity thinking to millions who would reject the more explicit version. His 'positive thinking' framing blurs theological lines.",
  },
  {
    name: "Creflo Dollar (b. 1962)",
    role: "World Changers Church International",
    color: RED,
    desc: "Teaches explicit financial prosperity as covenant right. Gained infamy for seeking public donations to buy a $65 million private jet. Has more recently walked back some prosperity language.",
    legacy: "Represents the transactional extreme of prosperity theology in the African-American church context.",
  },
  {
    name: "Benny Hinn (b. 1952)",
    role: "Healing evangelist",
    color: RED,
    desc: "Known for flamboyant healing crusades, claiming miraculous healings of cancer, blindness, and more. Multiple journalistic investigations found no medically verified healings. Has issued partial retractions of prosperity theology.",
    legacy: "His nephew Costi Hinn left the ministry and became one of prosperity gospel's most articulate critics.",
  },
  {
    name: "Costi Hinn (b. 1984)",
    role: "Reformed critic, nephew of Benny Hinn",
    color: GREEN,
    desc: "Grew up inside the Hinn ministry and experienced the wealth, private jets, and theological manipulation firsthand. After conversion to Reformed Christianity, he became a pastor and wrote 'God, Greed, and the (Prosperity) Gospel' exposing the movement from the inside.",
    legacy: "His insider critique carries unique authority. He ministers to those escaping prosperity theology.",
  },
];

const CRITIQUE_POINTS = [
  {
    id: "job",
    title: "The Book of Job Destroys the Formula",
    icon: "📖",
    content:
      "Job was 'blameless and upright' (Job 1:1), yet suffered catastrophically. His friends argued the prosperity formula: suffering = sin. God rebuked them (Job 42:7). Job's story was included in Scripture precisely to destroy the idea that godliness guarantees prosperity and suffering proves faithlessness.",
    verse: "Job 1:1, 42:7–8",
  },
  {
    id: "thorn",
    title: "Paul's Thorn in the Flesh",
    icon: "✝️",
    content:
      "The apostle Paul — arguably the most faith-filled person in the New Testament — prayed three times for a physical ailment to be removed. God refused and explained: 'My grace is sufficient for you, for my power is made perfect in weakness' (2 Cor 12:9). Paul didn't lack faith; God had a different purpose.",
    verse: "2 Corinthians 12:7–10",
  },
  {
    id: "hebrews11",
    title: "Hebrews 11 — The 'Hall of Faith' Includes Tremendous Suffering",
    icon: "🏛️",
    content:
      "The great heroes of faith in Hebrews 11 include people who 'were tortured, refusing to accept release… suffered mocking and flogging, and even chains and imprisonment… went about in skins of sheep and goats, destitute, afflicted, mistreated' (Heb 11:35–37). Their faith was proven not by wealth but by endurance.",
    verse: "Hebrews 11:35–37",
  },
  {
    id: "contentment",
    title: "Paul Learned Contentment — Not Wealth",
    icon: "✨",
    content:
      "Philippians 4:11–12 is one of the most direct refutations of prosperity theology: 'I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound.' The Christian calling is contentment in all circumstances, not the pursuit or guarantee of abundance.",
    verse: "Philippians 4:11–12",
  },
  {
    id: "camels",
    title: "Jesus on Wealth",
    icon: "🐪",
    content:
      "Jesus said it is 'easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God' (Matt 19:24). He called the rich young ruler to sell everything (Matt 19:21), warned against storing up earthly treasure (Matt 6:19–21), and told parables about the spiritual danger of wealth (Luke 12:13–21; 16:19–31).",
    verse: "Matthew 6:19–21; 19:24",
  },
  {
    id: "exploitation",
    title: "Who Profits?",
    icon: "⚠️",
    content:
      "In practice, prosperity theology systematically transfers wealth from poor and working-class believers to wealthy televangelists. It thrives in contexts of economic deprivation precisely because it offers hope — but the hope is manufactured and the mechanism enriches the teacher at the expense of the congregation.",
    verse: "2 Peter 2:3 — 'In their greed they will exploit you'",
  },
];

const RECOVERY_STEPS = [
  {
    step: 1,
    title: "Name the Harm",
    body: "Acknowledge that prosperity theology is a false gospel (Gal 1:6–9), not merely an overemphasis. Name any specific ways it harmed you: guilt over illness, financial exploitation, shame over unanswered prayer, damaged faith when the formula didn't work.",
  },
  {
    step: 2,
    title: "Relearn Who God Is",
    body: "The prosperity gospel creates a transactional God who can be manipulated through giving or positive confession. The real God is sovereign, loving, and pursues us for relationship — not a vending machine that rewards the right inputs.",
  },
  {
    step: 3,
    title: "Sit with Lament",
    body: "Many prosperity gospel survivors were taught that negative emotion signals weak faith. Read the Psalms of lament (Ps 13, 22, 88). Jesus himself quoted Psalm 22 from the cross. Grief and honest prayer are marks of mature faith, not its failure.",
  },
  {
    step: 4,
    title: "Find a Healthy Church",
    body: "Look for a church that preaches the full counsel of Scripture including suffering, the cross, and perseverance. Warning signs of continued prosperity influence: leaders live lavishly while congregation struggles, giving is transactional, questions are unwelcome.",
  },
  {
    step: 5,
    title: "Rebuild Biblical Theology",
    body: "Read through a Gospel (start with Mark — 16 chapters of action). Read Job. Read Paul's prison letters (Philippians, Colossians, Philemon, Ephesians) — written from a Roman prison, full of joy and content about suffering. The contrast with prosperity theology is stark.",
  },
];

const SCRIPTURE = [
  { ref: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
  { ref: "Philippians 4:11–12", text: "I have learned, in whatever situation I am, to be content. I know how to be brought low, and I know how to abound." },
  { ref: "Matthew 6:19–21", text: "Do not lay up for yourselves treasures on earth… but lay up for yourselves treasures in heaven." },
  { ref: "Hebrews 11:36–37", text: "Some faced jeers and flogging, and even chains and imprisonment. They were put to death by stoning; they were sawed in two; they were killed by the sword." },
  { ref: "Job 42:7", text: "The Lord said to Eliphaz: 'My anger burns against you and against your two friends, for you have not spoken of me what is right, as my servant Job has.'" },
  { ref: "Luke 12:15", text: "Take care, and be on your guard against all covetousness, for one's life does not consist in the abundance of his possessions." },
  { ref: "1 Timothy 6:6–7", text: "Godliness with contentment is great gain, for we brought nothing into the world, and we cannot take anything out of the world." },
  { ref: "Galatians 1:8", text: "Even if we or an angel from heaven should preach to you a gospel contrary to the one we preached to you, let him be accursed." },
];

const VIDEOS = [
  { id: "EJuBFy6Ew2k", title: "What Is the Prosperity Gospel? — Ligonier Ministries" },
  { id: "wLdwMFwVB7o", title: "Prosperity Gospel Critique — John Piper" },
  { id: "a5G8BDGfPJk", title: "Costi Hinn: My Uncle Benny Hinn and the Prosperity Gospel" },
  { id: "3DAvAHbE3TY", title: "Christianity vs. the Prosperity Gospel — Paul Washer" },
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

export default function ProsperityGospelPage() {
  const [tab, setTab] = useLocalStorage("vine_prosperity_tab", "theology");
  const [expanded, setExpanded] = useLocalStorage("vine_prosperity_critique", "");
  const [journalHarm, setJournalHarm] = useLocalStorage("vine_prosperity_harm", "");
  const [journalBelief, setJournalBelief] = useLocalStorage("vine_prosperity_belief", "");
  const [journalTruth, setJournalTruth] = useLocalStorage("vine_prosperity_truth", "");

  const toggleExpand = (id: string) => setExpanded(expanded === id ? "" : id);

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
          <div style={{ width: 36, height: 36, borderRadius: 8, background: RED + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertTriangle size={18} color={RED} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>The Prosperity Gospel</div>
            <div style={{ color: MUTED, fontSize: 12 }}>A biblical assessment of health-wealth theology</div>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div style={{ background: RED + "18", borderBottom: `1px solid ${RED}44`, padding: "10px 20px", display: "flex", gap: 8, alignItems: "flex-start" }}>
        <AlertTriangle size={15} color={RED} style={{ marginTop: 2, flexShrink: 0 }} />
        <p style={{ fontSize: 12, color: "#FCA5A5", margin: 0 }}>
          If you have been hurt by prosperity theology — whether through financial exploitation, guilt over illness, or a shattered faith when the formula failed — this page is for you. You are not alone and it was not your fault.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 4, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "12px 14px",
              background: "none",
              border: "none",
              borderBottom: tab === t ? `2px solid ${RED}` : "2px solid transparent",
              color: tab === t ? TEXT : MUTED,
              fontWeight: tab === t ? 600 : 400,
              fontSize: 13,
              cursor: "pointer",
              whiteSpace: "nowrap",
              textTransform: "capitalize",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {/* THEOLOGY TAB */}
        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Core Claims & What Scripture Actually Says</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Prosperity theology rests on five pillars. Each has a proof-text. Each proof-text dissolves under honest exegesis.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {THEOLOGY_CLAIMS.map((item, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <span style={{ background: RED + "22", color: RED, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>CLAIM</span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{item.claim}</span>
                  </div>
                  <div style={{ background: AMBER + "11", borderLeft: `3px solid ${AMBER}`, borderRadius: "0 6px 6px 0", padding: "8px 12px", marginBottom: 10 }}>
                    <span style={{ color: AMBER, fontSize: 11, fontWeight: 600 }}>PROOF-TEXT USED: </span>
                    <span style={{ fontSize: 12, color: "#FDE68A" }}>{item.proof_text}</span>
                  </div>
                  <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, borderRadius: "0 6px 6px 0", padding: "8px 12px" }}>
                    <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>BIBLICAL RESPONSE: </span>
                    <span style={{ fontSize: 12, color: "#D1FAE5" }}>{item.problem}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FIGURES TAB */}
        {tab === "figures" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Figures</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Understanding who built this movement — and who is working to dismantle it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FIGURES.map((fig, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${fig.color}44`, padding: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15 }}>{fig.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{fig.role}</div>
                    </div>
                    <span style={{ background: fig.color + "22", color: fig.color, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 700 }}>
                      {fig.color === GREEN ? "CRITIC" : "TEACHER"}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "#C4C4DC", margin: "0 0 8px" }}>{fig.desc}</p>
                  <div style={{ background: fig.color + "11", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: fig.color, fontSize: 11, fontWeight: 600 }}>LEGACY: </span>
                    <span style={{ fontSize: 12, color: MUTED }}>{fig.legacy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CRITIQUE TAB */}
        {tab === "critique" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Biblical Critique</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              The prosperity gospel doesn't fail because of abstract theology — it fails against specific Scripture.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CRITIQUE_POINTS.map((pt) => {
                const isOpen = expanded === pt.id;
                return (
                  <div key={pt.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button
                      onClick={() => toggleExpand(pt.id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        color: TEXT,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
                        <span style={{ fontSize: 18 }}>{pt.icon}</span>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{pt.title}</span>
                      </div>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: "#C4C4DC", marginBottom: 10 }}>{pt.content}</p>
                        <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, borderRadius: "0 6px 6px 0", padding: "6px 10px" }}>
                          <BookOpen size={11} color={GREEN} style={{ display: "inline", marginRight: 4 }} />
                          <span style={{ color: GREEN, fontSize: 11, fontWeight: 600 }}>{pt.verse}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* RECOVERY TAB */}
        {tab === "recovery" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Finding Your Way Out</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Leaving prosperity theology is spiritually disorienting — your framework for prayer, giving, and understanding God has to be rebuilt. These steps are not sequential requirements but guides.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {RECOVERY_STEPS.map((step) => (
                <div key={step.step} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, display: "flex", gap: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: GREEN + "22", border: `2px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{step.step}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{step.title}</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 10, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Heart size={16} color={PURPLE} />
                <span style={{ fontWeight: 700, fontSize: 14, color: PURPLE }}>Recommended: Costi Hinn's Story</span>
              </div>
              <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>
                Costi Hinn grew up inside the prosperity gospel as Benny Hinn's nephew — private jets, gold watches, and theological manipulation. His journey out and into a healthy church is one of the most important testimonies in this space.
              </p>
              <a href="https://www.amazon.com/God-Greed-Prosperity-Gospel-Millions/dp/0310096278" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE, fontSize: 12, fontWeight: 600 }}>
                God, Greed, and the (Prosperity) Gospel — Costi Hinn →
              </a>
            </div>
          </div>
        )}

        {/* SCRIPTURE TAB */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Key Passages</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Passages that ground a biblical — not transactional — relationship with God, suffering, and wealth.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {SCRIPTURE.map((v, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 14 }}>
                  <div style={{ color: GREEN, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>{v.ref}</div>
                  <p style={{ fontSize: 13, color: TEXT, margin: 0, fontStyle: "italic" }}>&ldquo;{v.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JOURNAL TAB */}
        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Saved to your device only. Take time to process your own experience.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  What specific harm or confusion has prosperity theology caused in your faith?
                </label>
                <textarea
                  value={journalHarm}
                  onChange={(e) => setJournalHarm(e.target.value)}
                  placeholder="Guilt when prayer wasn't answered, financial sacrifice, shame around illness…"
                  rows={4}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  What false beliefs about God did you absorb from prosperity teaching?
                </label>
                <textarea
                  value={journalBelief}
                  onChange={(e) => setJournalBelief(e.target.value)}
                  placeholder="God rewards me when I give enough, illness = weak faith, I need to confess positively…"
                  rows={4}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>
                  What truth from Scripture most challenges or encourages you right now?
                </label>
                <textarea
                  value={journalTruth}
                  onChange={(e) => setJournalTruth(e.target.value)}
                  placeholder="My grace is sufficient… I have learned contentment… Paul's thorn…"
                  rows={4}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }}
                />
              </div>
              {(journalHarm || journalBelief || journalTruth) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS TAB */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Trusted voices examining prosperity theology from a biblical perspective.
            </p>
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

      {/* Related Links */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Toxic Theology", href: "/toxic-theology" },
              { label: "Spiritual Formation", href: "/spiritual-formation" },
              { label: "Suffering", href: "/suffering" },
              { label: "Generational Trauma", href: "/generational-trauma-faith" },
              { label: "Lament", href: "/lament" },
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
