"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Addiction Is Not a Character Flaw",
    body: "Methamphetamine addiction is one of the most physiologically devastating substance use disorders known to medicine. Meth fundamentally alters the dopamine system — the brain's reward circuitry — through chronic exposure, causing neurological changes that can persist for years. The person who cannot stop using meth is not demonstrating a moral weakness or spiritual failure; they are caught in a neurobiological trap that requires real clinical treatment to escape. Grace begins with accurate understanding.",
  },
  {
    title: "The Prodigal Son Is a Recovery Narrative",
    body: "Luke 15 describes a son who left home, wasted everything in reckless living, ended up feeding pigs and starving, and 'came to himself' — a phrase that captures the moment of clarity that addicted people sometimes call 'hitting bottom.' The father sees him 'a long way off' and runs to meet him. There is no lecture at the gate, no conditions to be met first, no probationary period. The father restores him fully — robe, ring, feast. This is God's posture toward the person returning from the wasteland of addiction.",
  },
  {
    title: "Shame Fuels the Cycle; Grace Breaks It",
    body: "Meth use often begins in contexts of trauma, poverty, or untreated mental illness. Once the addiction takes hold, the shame of continued use, of broken relationships, of things done to support the habit, becomes one of the primary drivers of continued use — self-medication for shame. This is one of the cruelest features of addiction. A gospel of shame reinforces the cycle; a gospel of grace that names the sin without condemning the person creates the conditions for recovery.",
  },
  {
    title: "The Body as Temple — and Site of Healing",
    body: "1 Corinthians 6:19-20 calls the body the temple of the Holy Spirit. This is not primarily a verse about what we should avoid; it is a verse about whose we are. The body matters. The body that has been ravaged by meth is still the dwelling place of God's Spirit. The healing of that body — through medical treatment, nutrition, sleep, abstinence, and time — is holy work. Recovery is not a return to the body before addiction; it is the ongoing redemption of the body that was always beloved.",
  },
  {
    title: "Long-Term Recovery as Long-Term Grace",
    body: "Recovery from meth addiction is typically measured in years, not weeks. Neurological healing is slow. Relapse is common and does not erase progress; it is a feature of the disease, not a verdict on the person. A theology of long-term recovery requires a theology of patient, persistent grace — the kind described in Lamentations 3:22-23: 'His mercies are new every morning.' Every morning that someone chooses recovery over use is a new act of grace, regardless of what happened the day before.",
  },
];

const voices = [
  {
    name: "Nicky Cruz",
    role: "Author, Run Baby Run; former gang leader turned evangelist",
    quote: "The love of God reached into the worst place I had ever been. I know it can reach you too.",
  },
  {
    name: "Mark Shaw",
    role: "Author, The Heart of Addiction",
    quote: "The gospel is not just the entry point to recovery — it is the ongoing power for it. Grace is not a one-time transaction; it is a daily reality that must be received again and again.",
  },
  {
    name: "Tullian Tchividjian",
    role: "Author, One Way Love",
    quote: "The one-way love of God — grace that comes to us before we deserve it, while we are still lost — is the only thing powerful enough to break the cycle of shame and self-destruction.",
  },
  {
    name: "Pat Springle",
    role: "Author, Codependency: A Christian Perspective",
    quote: "Families of addicted people need their own recovery. The dynamics that form around addiction — enabling, shame, control, denial — damage everyone in the system.",
  },
];

const practices = [
  {
    title: "Medical Detox and Treatment First",
    body: "Meth withdrawal, while rarely life-threatening in the acute physical sense, involves severe depression, fatigue, anhedonia (inability to feel pleasure), and intense cravings. Medical supervision during detox and early recovery is important. Residential treatment programs for stimulant use disorder, followed by intensive outpatient treatment (IOP), are the standard of care. SAMHSA's National Helpline (1-800-662-4357) is free, confidential, and available 24/7 to connect people with treatment.",
  },
  {
    title: "Crystal Meth Anonymous (CMA) and NA",
    body: "Crystal Meth Anonymous (crystalmeth.org) is a 12-step fellowship specifically for meth users. Narcotics Anonymous (NA) also serves people recovering from meth addiction. These peer communities understand meth from the inside and provide the ongoing community support that is essential for long-term recovery. 12-step programs integrate naturally with Christian faith for many people — the program's Higher Power framework aligns with Christian spirituality.",
  },
  {
    title: "Treating Underlying Mental Health Conditions",
    body: "Meth addiction frequently co-occurs with depression, anxiety, ADHD, bipolar disorder, and untreated trauma. Many people began using meth as self-medication for untreated conditions. Recovery that does not address these underlying conditions tends to be fragile. Psychiatric evaluation and ongoing mental health treatment — including medication when appropriate — are often essential components of sustainable recovery.",
  },
  {
    title: "Nutritional and Physical Recovery",
    body: "Meth use causes significant nutritional depletion, dental damage, and physical deterioration. Early recovery includes rebuilding physical health: regular meals, hydration, sleep hygiene, and gradual reintroduction of physical activity. Exercise has strong evidence for supporting recovery from stimulant use disorders by helping restore dopamine system function. Physical healing is slow — be patient with the body.",
  },
  {
    title: "Rebuilding Trust and Relationships",
    body: "Active meth addiction typically involves significant relational damage — broken promises, theft, manipulation, neglect of children, estrangement from family. Rebuilding these relationships takes time, consistency, and often the help of a counselor or mediator. Step 8 and 9 of 12-step programs (making amends) address this directly. However, reconciliation requires two willing parties — making amends is about your integrity, not controlling others' responses.",
  },
  {
    title: "Avoiding High-Risk Situations and People",
    body: "Recovery research consistently shows that contact with people, places, and things associated with past use is a primary relapse trigger. This may mean leaving certain relationships, certain neighborhoods, or certain social contexts. This is a real loss and should be grieved as such. But recovery is not possible if the environment that supported the addiction remains unchanged. Building a new social network around recovery — through CMA, church, or other sober community — is part of the work.",
  },
];

const scriptures = [
  {
    ref: "Luke 15:20",
    text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
  },
  {
    ref: "1 Corinthians 6:19-20",
    text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price.",
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Isaiah 43:18-19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?",
  },
  {
    ref: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
  },
];

const JOURNAL_KEY = "vine_meth_recovery_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "hJkLBPIbZr4", title: "No Condemnation – Steven Furtick" },
  { videoId: "7_CGP-12AE0", title: "The Story of the Bible – BibleProject" },
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
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function MethRecoveryPage() {
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
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Addiction & Recovery
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Meth Addiction Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The father saw him 'a long way off' and ran. There is no lecture at the gate. Grace is the first thing, not the last.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#0d1a10", border: `2px solid ${GREEN}`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Get Help Now</div>
          <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
            <strong>SAMHSA National Helpline: 1-800-662-4357</strong> — free, confidential, 24/7
          </div>
          <div style={{ color: MUTED, fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Crystal Meth Anonymous:</strong> crystalmeth.org — peer support<br />
            <strong style={{ color: TEXT }}>Narcotics Anonymous:</strong> na.org — find a meeting near you<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? GREEN : BORDER}`, background: activeTab === tab ? GREEN + "22" : "transparent", color: activeTab === tab ? GREEN : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: GREEN + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              Write where you are. Write what you hope for. Write your honest prayer. Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
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
