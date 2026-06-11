"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const tabs = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof tabs[number];

const theology = [
  {
    title: "Made in God's Image — Differently Wired Minds",
    body: "Scripture declares every person is fearfully and wonderfully made (Psalm 139:14). The ADHD brain — wired for novelty, deep interest, and rapid association — is not a manufacturing defect. It is a particular expression of image-bearing. The same neural architecture behind distractibility can also produce extraordinary creativity, empathy, and hyper-focus. God does not make mistakes in the architecture of His people.",
  },
  {
    title: "Weakness as the Site of Grace",
    body: "Paul's thorn in the flesh produced the most radical theology of grace in the New Testament: 'My grace is sufficient for you, for my power is made perfect in weakness' (2 Cor 12:9). Many adults with ADHD carry decades of shame — forgotten tasks, fractured relationships, abandoned goals. The gospel reframes this: weakness is not disqualifying. It is precisely where divine strength operates most visibly.",
  },
  {
    title: "Created for Community, Not Performance",
    body: "Much of ADHD suffering is amplified by environments demanding sustained attention, impulse control, and linear thinking as conditions for belonging. The New Testament church gathered around shared meals, spontaneous conversation, and mutual care — a structure that suits many ADHD minds far better than modern institutional settings. The body of Christ has room for every cognitive style (1 Cor 12:12–27).",
  },
  {
    title: "Sanctification Is Not Linear",
    body: "Western Christianity often frames spiritual maturity as progressive, orderly growth. But many in Scripture — Moses (impulsive, avoidant), Elijah (erratic, exhausted), Peter (hyperfocused then scattered) — show a different pattern: stunning breakthroughs, sudden collapses, and slow transformation across decades. ADHD faith looks less like a steady climb and more like a series of genuine encounters with God between long forgettings.",
  },
  {
    title: "Shame Is Not Conviction",
    body: "Many ADHD adults carry a chronic low-level shame that they are 'too much' or 'not enough.' Biblical conviction points to specific acts and invites repentance. Shame attacks identity and produces hiding. Distinguishing the two is critical: God's Spirit convicts; the accuser shames. Learning to identify and refuse shame narratives is itself a spiritual discipline rooted in who God says you are in Christ.",
  },
];

const voices = [
  {
    name: "Dr. Edward Hallowell",
    title: "Psychiatrist, ADHD & Christian Faith",
    quote: "ADHD is like having a Ferrari engine with bicycle brakes. The power is extraordinary — the challenge is learning to steer it. Faith gives that steering wheel a deeper grip than medication alone ever could.",
  },
  {
    name: "Sarah Clarkson",
    title: "Author, 'This Beautiful Truth'",
    quote: "I grew up feeling like my restless mind was spiritually disordered — too scattered for real devotion. What I eventually learned is that God meets us in the middle of disorder. He is not offended by fidgeting and forgetting. He is present in it.",
  },
  {
    name: "Stephanie Holmes",
    title: "ADHD Coach & Ministry Leader",
    quote: "The church needs to stop treating neurodivergence as a willpower problem. ADHD is a neurological difference that affects executive function. Telling someone to 'pray harder' and 'be more disciplined' without practical support is not pastoral care — it is blame.",
  },
  {
    name: "John Elder Robison",
    title: "Author & Neurodiversity Advocate",
    quote: "Being wired differently is not a spiritual deficiency. Some of the greatest innovators, artists, and visionaries in church history would today be diagnosed with ADHD. Their restlessness drove them toward God, not away.",
  },
];

const practices = [
  {
    title: "Body-Doubled Prayer",
    body: "Many ADHD adults find it nearly impossible to maintain attention in solitary prayer. Body-doubling — praying with another person present, even silently — dramatically improves focus. Consider praying with a spouse, friend, or in a small group. The presence of another person activates the same neural systems ADHD brains need to sustain effort.",
  },
  {
    title: "Short, Frequent Prayer Windows",
    body: "Rather than one long daily quiet time (which ADHD brains struggle to sustain), try micro-prayer: 30-second or 2-minute encounters scattered throughout the day. Use alarms, transition moments, or habit stacking (pray every time you pour coffee) to build consistent connection. God honors the scattered prayer of an honest heart.",
  },
  {
    title: "Embodied Scripture Engagement",
    body: "ADHD brains absorb information better through multiple channels. Try reading Scripture aloud, writing it by hand, listening to audio Bible while walking, or drawing what you read. The YouVersion Bible app with audio is free. Walking while listening to Scripture is not less spiritual than sitting in silence — it may actually be more effective for your wiring.",
  },
  {
    title: "External Structure as Grace",
    body: "External scaffolding (alarms, written schedules, accountability partners, visual reminders) is not a sign of spiritual weakness — it is wisdom about how your brain works. Creating systems that compensate for executive function gaps is as valid as wearing glasses to compensate for poor vision. Practical order enables spiritual presence.",
  },
  {
    title: "Embracing Hyper-Focus as Worship",
    body: "When the ADHD brain finds its groove — deep interest, creative flow, intensive engagement — it can sustain attention for hours. Identify which spiritual activities produce this state for you: worship music, service, creative expression, nature. Schedule time in these zones. Hyper-focused engagement with God is not a lesser form of devotion.",
  },
  {
    title: "Shame Inventory and Identity Work",
    body: "Decades of messages like 'lazy,' 'irresponsible,' and 'too much' leave deep grooves in the ADHD adult's self-concept. Regularly return to identity passages: Psalm 139, Ephesians 1:3–14, Romans 8:1. Write out the lies you believe about yourself and the corresponding truth from Scripture. Bring these to a counselor or trusted pastor. Identity renewal takes time and requires external voices.",
  },
];

const scriptures = [
  {
    ref: "Psalm 139:14",
    text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
    note: "Your exact neurological design is not an accident. Every neuron was knit by a God who makes nothing carelessly.",
  },
  {
    ref: "2 Corinthians 12:9–10",
    text: "My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.",
    note: "ADHD executive function challenges are a site of grace — places where God's power shows up precisely because yours falls short.",
  },
  {
    ref: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus.",
    note: "The shame loop that plagues the ADHD adult mind — the relentless inner critic — is silenced by this declaration. No condemnation. Not even for the forgotten task.",
  },
  {
    ref: "Philippians 4:11–13",
    text: "I have learned, in whatever situation I am, to be content... I can do all things through him who strengthens me.",
    note: "Contentment is learned, not instantaneous — which is actually good news for ADHD brains that grow through repetition and experience more than insight.",
  },
  {
    ref: "1 Corinthians 12:18",
    text: "But as it is, God arranged the members in the body, each one of them, as he chose.",
    note: "Neurodiversity in the body of Christ is not a problem to solve — it is God's architectural decision. You were placed exactly as He chose.",
  },
  {
    ref: "Isaiah 43:1–2",
    text: "Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you.",
    note: "God calls you by name — not by your diagnosis, not by your failures. The scattered mind is still known and claimed by God.",
  },
];

const videos = [
  { id: "4Eg_di-O8nM", title: "You Can Change The End — Elevation Church" },
  { id: "KwX1f2gYKZ4", title: "Graves Into Gardens — Elevation Worship" },
  { id: "7_CGP-12AE0", title: "The Story of the Bible — BibleProject" },
  { id: "sIaT8Jl2zpI", title: "You Say — Lauren Daigle" },
];

const JOURNAL_KEY = "vine_adhd_adult_entries";

function JournalTab() {
  const [entries, setEntries] = useState<{ id: number; date: string; text: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [draft, setDraft] = useState("");
  const save = () => {
    if (!draft.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), text: draft.trim() }, ...entries];
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
    setDraft("");
  };
  const remove = (id: number) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(next));
  };
  const prompts = [
    "When has my ADHD felt like a gift rather than a curse?",
    "What shame messages have I believed about my mind, and what does God say instead?",
    "Which spiritual practices actually work for my brain? What helps me stay connected to God?",
    "Where do I see God's grace most clearly in my weaknesses?",
  ];
  return (
    <div>
      <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
        <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "1rem" }}>Reflection Prompts</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {prompts.map((p, i) => (
            <li key={i} style={{ color: MUTED, fontSize: "0.9rem", paddingLeft: "1rem", borderLeft: `2px solid ${ACCENT}40` }}>{p}</li>
          ))}
        </ul>
      </div>
      <textarea
        value={draft}
        onChange={e => setDraft(e.target.value)}
        placeholder="Write freely — your words are private and stay only on your device..."
        rows={5}
        style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", color: TEXT, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
      />
      <button onClick={save} style={{ marginTop: 8, padding: "0.6rem 1.6rem", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Save Entry</button>
      {entries.length > 0 && (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {entries.map(e => (
            <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: MUTED, fontSize: "0.78rem" }}>{e.date}</span>
                <button onClick={() => remove(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.78rem" }}>Delete</button>
              </div>
              <p style={{ color: TEXT, fontSize: "0.92rem", margin: 0, whiteSpace: "pre-wrap" }}>{e.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ADHDAdultChristianFaith() {
  const [activeTab, setActiveTab] = useState<Tab>("Theology");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}18 0%, transparent 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "4rem 1.5rem 3rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, borderRadius: 20, padding: "4px 14px", fontSize: "0.75rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
              Neurodiversity & Faith
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
              ADHD, Faith,<br />
              <span style={{ color: ACCENT }}>and the Scattered Mind</span>
            </h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 620, marginBottom: "1.5rem" }}>
              For Christians navigating attention, impulsivity, and executive function challenges — your wiring is not a spiritual defect. There is grace here, and a God who meets you in the middle of the mess.
            </p>
            <div style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`, borderRadius: 8, padding: "1rem 1.2rem", maxWidth: 520 }}>
              <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                ADHD Support Line: <a href="tel:18664234747" style={{ color: ACCENT }}>1-866-4-ADHD-47</a> — CHADD National Resource Center<br />
                <span style={{ fontWeight: 400, color: MUTED }}>Also: 988 Suicide & Crisis Lifeline — call or text 988</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "1rem 1.4rem", background: "none", border: "none", borderBottom: activeTab === t ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === t ? ACCENT : MUTED, fontWeight: activeTab === t ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

          {activeTab === "Theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {theology.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {voices.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <p style={{ color: TEXT, lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                  <div>
                    <div style={{ color: ACCENT, fontWeight: 700, fontSize: "0.9rem" }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, padding: "1.5rem" }}>
                  <div style={{ color: ACCENT, fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.75, marginBottom: "0.75rem" }}>&ldquo;{s.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.note}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Journal" && <JournalTab />}

          {activeTab === "Videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {videos.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "1rem 1.2rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
