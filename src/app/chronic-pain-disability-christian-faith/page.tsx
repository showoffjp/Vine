"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Pain Is Not Punishment",
    body: "One of the cruelest theological errors is the idea that chronic pain or disability is a sign of God's displeasure, unconfessed sin, or insufficient faith. Jesus directly corrected this in John 9 when His disciples asked whose sin caused a man's blindness: 'Neither this man nor his parents sinned,' He said. God is not inflicting your pain as discipline for a spiritual failure. That framework is both theologically wrong and profoundly harmful to people who are already suffering.",
  },
  {
    title: "The Theology of Paul's Thorn",
    body: "The Apostle Paul had a 'thorn in the flesh' — a persistent, unresolved physical affliction. He prayed for removal three times. God did not remove it. Instead, God said: 'My grace is sufficient for you, for my power is made perfect in weakness' (2 Cor 12:9). This is not a command to pretend suffering is fine. It is a revelation that God can work through ongoing, unresolved pain in ways He cannot work through comfort. Your unanswered healing prayer does not mean God has abandoned you.",
  },
  {
    title: "Lament Is a Spiritual Practice",
    body: "The psalms of lament — comprising over a third of the Psalter — express raw pain, confusion, anger at God, and requests that feel unanswered. Psalm 88 is the only psalm that ends in darkness with no resolution. God preserved this in Scripture because honest grief before God is worship. If you are angry at your body, your illness, your limitations, you do not have to sanitize that before bringing it to God. He can hold your anger and your praise at the same time.",
  },
  {
    title: "The Incarnate Body and the Suffering Christ",
    body: "Christianity is unique among world religions in claiming that God took on a physical body — and that body suffered. Jesus experienced pain, fatigue, hunger, and ultimately excruciating death. The risen Christ still bore the marks of His wounds when He appeared to Thomas (John 20:27). God does not stand apart from bodily suffering; He entered it. 'We do not have a high priest who is unable to empathize with our weaknesses' (Heb 4:15). Christ knows what it is to suffer in a body.",
  },
  {
    title: "Disability as Difference, Not Deficit",
    body: "The disability rights movement and disability theology together challenge the assumption that disability equals brokenness that needs fixing. Many people with disabilities do not experience themselves as incomplete — they experience themselves as differently embodied. The body of Christ is explicitly described as having many parts with different functions, none more valuable than another (1 Cor 12). A theology of disability asks: what does God want to teach the whole church through the presence of disabled members?",
  },
];

const voices = [
  {
    name: "Joni Eareckson Tada",
    role: "Author, speaker, quadriplegic since 1967",
    quote: "The cross and the wheelchair — they both tell the same story. Weakness is the platform on which God's power is most clearly displayed.",
  },
  {
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason (and Other Lies I've Loved)",
    quote: "There is no 'everything happens for a reason.' But there is the hard, beautiful truth that we are loved in the middle of whatever is happening, not because of it.",
  },
  {
    name: "Thomas Reynolds",
    role: "Author, Vulnerable Communion: A Theology of Disability and Hospitality",
    quote: "Disability does not preclude flourishing. It redefines what flourishing looks like — toward community, interdependence, and the body of Christ as it was meant to be.",
  },
  {
    name: "Bethany McKinney Fox",
    role: "Author, Disability and the Way of Jesus",
    quote: "Jesus rarely healed the same way twice, and he often asked 'what do you want me to do for you?' Healing ministry must start by listening, not assuming.",
  },
];

const practices = [
  {
    title: "Medical Team as Calling, Not Compromise",
    body: "Seeking good medical care — specialists, pain management clinicians, physical therapists, occupational therapists — is not a sign of weak faith. It is stewardship. Luke, who traveled with Paul, was a physician. God heals through medicine and through miracle; most of us experience more of the former. Building a good medical team is part of caring for the body God gave you.",
  },
  {
    title: "Pacing and Energy Envelope Management",
    body: "Many people with chronic illness learn about the 'energy envelope' — working within your sustainable capacity rather than boom-and-bust patterns that spike pain and fatigue. This is practical wisdom, not spiritual defeat. Rest is not laziness; it is stewardship of a finite resource. Even Jesus withdrew to rest and pray. Pacing is discipleship.",
  },
  {
    title: "Grief Work for the Life You Expected",
    body: "Chronic illness involves loss — of function, of the future you imagined, of the person you were before diagnosis. That loss deserves to be grieved, not rushed past. A therapist specializing in chronic illness or health psychology can be invaluable. Grief is not despair; it is honest acknowledgment of what is real. Until you grieve what you lost, you cannot fully inhabit the life you have.",
  },
  {
    title: "Adapted Spiritual Practices",
    body: "When physical limitations affect prayer posture, church attendance, or other practices, adaptation is not compromise — it is faithfulness in your actual body. Lying-down prayer, audio Scripture, contemplative prayer apps like Lectio 365, online church communities, home communion with trusted believers — the Spirit is not limited to able-bodied practice. Ask: how can I meet God in the body I have today?",
  },
  {
    title: "Chronic Pain Support Communities",
    body: "The American Chronic Pain Association (theacpa.org) offers peer support groups. The Fibromyalgia Association offers resources for that specific condition. Online communities — including faith-based ones — connect people who understand chronic illness from the inside. You should not have to explain your experience to everyone in your life. Find people who already understand.",
  },
  {
    title: "Pastoral Conversations About Prayer for Healing",
    body: "If your church culture emphasizes prayer for miraculous healing, it is worth having honest pastoral conversations about what happens when healing doesn't come. A pastor who can sit with 'I don't know why you're still sick' without blaming your faith is a gift. Churches that have integrated disability theology tend to be healthier for everyone. Your faith is not smaller because you are not healed.",
  },
];

const scriptures = [
  {
    ref: "2 Corinthians 12:9",
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.",
  },
  {
    ref: "John 9:3",
    text: "'Neither this man nor his parents sinned,' said Jesus, 'but this happened so that the works of God might be displayed in him.'",
  },
  {
    ref: "Psalm 88:1-2",
    text: "Lord, you are the God who saves me; day and night I cry out to you. May my prayer come before you; turn your ear to my cry.",
  },
  {
    ref: "Hebrews 4:15",
    text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin.",
  },
  {
    ref: "Romans 8:18",
    text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
  },
  {
    ref: "Isaiah 43:2",
    text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned.",
  },
];

const JOURNAL_KEY = "vine_chronic_pain_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "hJkLBPIbZr4", title: "When God Doesn't Heal – Elevation Church" },
  { videoId: "7_CGP-12AE0", title: "The Story of God – BibleProject" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle (You Are More)" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #1a0a2e 0%, #0d0618 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function ChronicPainPage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, marginBottom: 16 }}>
            Health & Body
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Chronic Pain & Disability
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Your pain is not punishment. God does not stand apart from suffering — He entered it. Christ knows what it is to suffer in a body.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${PURPLE}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: PURPLE, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>American Chronic Pain Association:</strong> theacpa.org — peer support groups<br />
            <strong style={{ color: TEXT }}>NAMI:</strong> 1-800-950-NAMI — mental health support for those with chronic illness<br />
            <strong style={{ color: TEXT }}>Dial 211</strong> — local resources for people with disabilities<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? PURPLE : BORDER}`, background: activeTab === tab ? PURPLE + "22" : "transparent", color: activeTab === tab ? PURPLE : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Theology Tab */}
        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Voices Tab */}
        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: PURPLE + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* Practices Tab */}
        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PURPLE, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Scripture Tab */}
        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Journal Tab */}
        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write freely. What does your body need you to hear? What are you grieving? What are you grateful for even now?
              Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
