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
    title: "You Are Still Here, and That Matters",
    body: "If you have survived a suicide attempt, the most important thing to hear first is this: you are still here. That is not an accident and it is not a burden. You matter to the people in your life, and you matter to God. The fact that you are reading this means something. There is still a story being written with your name on it — one you cannot see from where you are standing right now.",
  },
  {
    title: "Suicide Attempt Is Not the Unforgivable Sin",
    body: "Some Christians have been taught that suicide — attempted or completed — is the unforgivable sin. This is not found in Scripture. The unforgivable sin described by Jesus (Matt 12:31-32) refers to a specific hardening of the heart against the Spirit's work, not to suicide. The God who is 'close to the brokenhearted and saves those who are crushed in spirit' (Ps 34:18) is present in suicidal crisis — not absent, not punishing.",
  },
  {
    title: "The Pain Was Real; the Crisis Lies",
    body: "Suicidal crisis involves a convergence of real pain and cognitive narrowing — a state where the brain, overwhelmed by pain or illness, generates the thought that death is the only option. That thought is a symptom of a crisis state, not a rational conclusion. The pain underneath it — isolation, shame, hopelessness, depression, trauma — is real and deserves to be addressed. But the conclusion that death is the only answer is the crisis talking, not the full truth.",
  },
  {
    title: "Elijah Under the Broom Tree",
    body: "In 1 Kings 19, the prophet Elijah — fresh from a moment of miraculous victory — collapsed under a broom tree and prayed to die: 'I have had enough, Lord. Take my life.' God's response was not rebuke or rejection. God sent an angel who touched Elijah and said, 'Get up and eat.' Then Elijah slept. Then the angel came again: 'Get up and eat, for the journey is too great for you.' God's first response to suicidal despair was food, sleep, and presence. This is a God who meets the suicidal prophet with care.",
  },
  {
    title: "Resurrection as Hope for the Despairing",
    body: "The resurrection of Jesus is not just a future hope for what happens after death — it is the announcement that God has the final word over endings. 'Death has been swallowed up in victory' (1 Cor 15:54). For the person who has attempted suicide, this is not a reprimand about the attempt; it is a proclamation that life wins, that God's purposes cannot be thwarted, and that the future you cannot see from inside the crisis is real and worth reaching.",
  },
];

const voices = [
  {
    name: "Kay Warren",
    role: "Author and advocate; her son Matthew died by suicide in 2013",
    quote: "We can hold our grief and our faith at the same time. The church must become a place where people in suicidal crisis can tell the truth without fearing judgment.",
  },
  {
    name: "Jennifer Marshall Bleakley",
    role: "Author and mental health advocate",
    quote: "Surviving a suicide attempt can be the beginning of learning who you really are and what you really need. The story doesn't end at the attempt.",
  },
  {
    name: "Rachael Killackey",
    role: "Mental health researcher and Christian blogger, suicide attempt survivor",
    quote: "I survived my attempt and then spent years ashamed of it. Recovery began when I finally told the truth — to my therapist, and then slowly to my church community.",
  },
  {
    name: "Ed Welch",
    role: "Counselor and author, Side by Side: Walking with Others in Wisdom and Love",
    quote: "People in suicidal crisis don't need our judgment — they need our presence. Sit with them. Ask the hard questions. Don't leave them alone.",
  },
];

const practices = [
  {
    title: "Immediate Safety: Professional Care Is Required",
    body: "If you have recently attempted suicide, getting professional care is the essential first step — not optional, not something to consider. This means honest conversations with a psychiatrist about what happened and what needs to change. It means a safety plan: identifying warning signs, coping strategies, people to contact, and how to restrict access to lethal means. It means regular check-ins with a therapist. Your safety is the foundation everything else builds on.",
  },
  {
    title: "Telling the Truth to Your Treatment Team",
    body: "Many attempt survivors minimize or hide the severity of their crisis out of shame, fear of hospitalization, or worry about burdening others. Your treatment team — psychiatrist, therapist, prescriber — needs the truth to help you. That includes telling them about any suicidal thoughts that continue after the attempt, about previous attempts, and about what precipitated this one. Shame keeps people sick. Honest disclosure enables real treatment.",
  },
  {
    title: "Safety Planning, Not Just Safety Contracting",
    body: "A crisis safety plan (the Stanley-Brown model) is much more effective than a simple 'promise not to hurt yourself.' It includes: warning signs you can recognize in yourself, internal coping strategies, people and social activities that provide distraction, people you can ask for help, professionals to contact, and steps to make your environment safer (reducing lethal means). Apps like MY3 and the Safety Planning app support this. Work on this with your provider.",
  },
  {
    title: "Finding Community After the Attempt",
    body: "Many attempt survivors feel profound shame and isolation in the aftermath — worried about what people think, afraid of pity or judgment. Finding community that holds space for your story without either minimizing or catastrophizing is essential. Mental Health America and NAMI both offer peer support programs. Active Minds (for young adults), To Write Love on Her Arms, and the American Foundation for Suicide Prevention (AFSP) offer communities and resources for survivors.",
  },
  {
    title: "Addressing the Underlying Causes",
    body: "A suicide attempt is always a symptom of something — depression, bipolar disorder, psychosis, trauma, substance use, intense situational crisis. Recovery from the attempt is incomplete without addressing whatever drove the crisis. This often means a significant adjustment in treatment: new or adjusted medications, more intensive therapy, addressing substance use, safety changes at home, and addressing social factors (isolation, abuse, housing instability). Ask your treatment team: 'What do we need to change?'",
  },
  {
    title: "Telling Your Story When You're Ready",
    body: "Many survivors find profound healing in eventually telling their story — not to explain or justify what happened, but to integrate it into who they are now. This might be to a close friend, a support group, a pastor, or eventually in public advocacy. You do not owe anyone your story, and you do not have to tell it before you're ready. But the attempt does not have to be a secret you carry alone forever. Your story has the power to save someone else's life.",
  },
];

const scriptures = [
  {
    ref: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
  {
    ref: "1 Kings 19:5-6",
    text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water.",
  },
  {
    ref: "Jeremiah 29:11",
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    ref: "Romans 8:38-39",
    text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
  },
  {
    ref: "Psalm 139:7-8",
    text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.",
  },
  {
    ref: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
  },
];

const JOURNAL_KEY = "vine_suicide_attempt_survivor_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle (Identity in Christ)" },
  { videoId: "hJkLBPIbZr4", title: "Finding Hope – Steven Furtick" },
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

export default function SuicideAttemptSurvivorPage() {
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
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Crisis & Survival
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Suicide Attempt Survivor
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You are still here. That matters. There is still a story being written with your name on it — one you cannot see from where you are standing right now.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#0d1a10", border: `2px solid ${GREEN}`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8, fontSize: 16 }}>If you are in crisis right now</div>
          <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
            <strong>Call or text 988</strong> — Suicide & Crisis Lifeline, available 24/7<br />
            <strong>Text HOME to 741741</strong> — Crisis Text Line<br />
            <strong>Call 911</strong> or go to your nearest emergency room if you are in immediate danger
          </div>
          <div style={{ color: MUTED, fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>AFSP:</strong> afsp.org — American Foundation for Suicide Prevention<br />
            <strong style={{ color: TEXT }}>NAMI:</strong> 1-800-950-NAMI — mental health support and referrals
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
              Write freely. What do you need to say? What do you need to hear? Your entries are saved locally on this device only.
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
