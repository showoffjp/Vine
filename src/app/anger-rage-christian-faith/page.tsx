"use client";

import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Not All Anger Is Sin",
    body: "Ephesians 4:26 says 'In your anger do not sin' — not 'do not be angry.' Anger is a moral signal, not a moral failure. When we see injustice, cruelty, betrayal, or harm, anger is the appropriate response. Jesus was angry at the money changers in the temple (Mark 11:15-17). He was angry at those who blocked children from coming to Him (Mark 10:14). He was described as having 'righteous indignation.' The question is not whether anger is present but what is done with it.",
  },
  {
    title: "Rage and Chronic Anger Are Different",
    body: "There is an important distinction between anger as a moral signal and rage or chronic anger as a habituated response. Rage — explosive, uncontrolled, and often disproportionate — tends to harm relationships, damage the person experiencing it, and frighten or injure those nearby. Chronic anger — a pervasive state of irritability, resentment, and hostility — corrodes the soul and all relationships. These patterns often have roots in trauma, injustice, shame, or learned behavior — and they are workable.",
  },
  {
    title: "God Is Slow to Anger — and So Can We Become",
    body: "One of the most consistent characterizations of God in the Hebrew Bible is that He is 'slow to anger' (Exod 34:6, Ps 86:15, Neh 9:17, Joel 2:13). This is not described as God's natural temperament; it is described as part of His character — who He has become and who He consistently chooses to be. The formation of a person toward slowness to anger is possible. James 1:19-20 calls us to be 'slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.'",
  },
  {
    title: "The Root of Rage: Shame, Powerlessness, and Injustice",
    body: "Explosive or chronic anger most commonly has roots in one of three places: shame (which feels like an attack on the self and produces a defensive rage), powerlessness (which produces rage in response to helplessness), or accumulated injustice (which produces rage at mistreatment, neglect, or abuse). Understanding the root is the beginning of addressing it. A theology of grace — which speaks to shame — and a theology of lament — which provides a legitimate voice for injustice — are resources for anger transformation.",
  },
  {
    title: "Reconciliation Requires Honest Acknowledgment",
    body: "Anger that has been expressed in harmful ways — abuse, violence, cruelty, words that wound — requires honest acknowledgment and genuine repentance before reconciliation can happen. James 5:16 calls believers to 'confess your sins to each other.' The path through uncontrolled anger is not suppression, minimization, or expecting forgiveness without accountability — it is honest reckoning with what happened, genuine change, and the slow rebuilding of trust.",
  },
];

const voices = [
  {
    name: "Dan Allender",
    role: "Psychologist and author, The Wounded Heart",
    quote: "Beneath most rage is a broken heart. Address the wound and you address the rage. Suppress the wound and the rage finds another way out.",
  },
  {
    name: "Harriet Lerner",
    role: "Psychologist and author, The Dance of Anger",
    quote: "Anger is a signal, and one worth listening to. Our anger may be telling us that we are not addressing an important emotional issue in our lives.",
  },
  {
    name: "Scot McKnight",
    role: "Biblical scholar and author",
    quote: "The prophets were angry. The psalmists were angry. Jesus was angry. Anger at injustice is one of the marks of a human being made in the image of a just God.",
  },
  {
    name: "Gary Chapman",
    role: "Author, The Five Love Languages and Anger: Handling a Powerful Emotion",
    quote: "There is nothing wrong with anger — it is what we do with anger that determines whether it becomes constructive or destructive.",
  },
];

const practices = [
  {
    title: "Anger Management Therapy",
    body: "Cognitive Behavioral Therapy (CBT) has strong evidence for treating problematic anger. CBT helps identify the triggers and thoughts that precede angry outbursts, develops coping skills for the arousal state, and addresses the underlying beliefs that fuel chronic anger. For trauma-rooted anger, trauma-focused CBT or EMDR may be more appropriate. A therapist who specializes in anger management can provide assessment-based treatment. Psychology Today's therapist finder allows filtering by this specialty.",
  },
  {
    title: "Understanding Your Anger Triggers and Patterns",
    body: "Most people with problematic anger have specific triggers — situations, people, or experiences that reliably produce intense anger responses. Keeping an anger log — noting what happened, what you thought, what you felt physically, and what you did — builds self-awareness over time. This awareness is the foundation of change. When you can predict the pattern, you can intervene in it.",
  },
  {
    title: "Physiological Regulation Skills",
    body: "Anger involves the sympathetic nervous system — heart rate, blood pressure, adrenaline all rise sharply. Effective anger management includes physiological strategies: slow diaphragmatic breathing (reduces heart rate), stepping away from the trigger situation temporarily (creates space for the frontal cortex to re-engage), progressive muscle relaxation, and aerobic exercise (which metabolizes the stress hormones that sustain the angry state).",
  },
  {
    title: "Addressing Underlying Trauma",
    body: "Much explosive or chronic anger is rooted in traumatic experiences — childhood abuse, neglect, witnessing violence, combat, or repeated experiences of injustice. Treating the trauma is treating the anger. Trauma-focused therapies (EMDR, CPT, Prolonged Exposure) address the root cause in ways that anger management alone cannot. If your anger has trauma roots, treatment that doesn't address the trauma is incomplete.",
  },
  {
    title: "Accountability and Amends",
    body: "If your anger has caused harm to others — partners, children, colleagues — genuine accountability requires acknowledging what you did specifically, taking responsibility without minimizing or deflecting, and making specific amends where possible. This is not the same as self-flagellation; it is the honest reckoning that makes genuine change possible and that gives injured people something real to evaluate. Organizations like AMEND (amend.us) provide structured support for perpetrators of family violence who want to change.",
  },
  {
    title: "The Spiritual Practice of Slowness",
    body: "James 1:19 calls for being 'slow to speak' — the practice of creating space between stimulus and response. This is a spiritual discipline that can be cultivated: before speaking when angry, breathing deliberately three times. Before responding to a triggering message, waiting 24 hours. Practices of silence, contemplative prayer, and sabbath all cultivate the inner spaciousness that makes slowness to anger possible over time.",
  },
];

const scriptures = [
  {
    ref: "Ephesians 4:26-27",
    text: "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
  },
  {
    ref: "James 1:19-20",
    text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
  },
  {
    ref: "Proverbs 15:1",
    text: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
  },
  {
    ref: "Psalm 4:4",
    text: "Tremble and do not sin; when you are on your beds, search your hearts and be silent.",
  },
  {
    ref: "Proverbs 29:11",
    text: "Fools give full vent to their rage, but the wise bring calm in the end.",
  },
  {
    ref: "Exodus 34:6",
    text: "The Lord, the Lord, the compassionate and gracious God, slow to anger, abounding in love and faithfulness.",
  },
];

const JOURNAL_KEY = "vine_anger_rage_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "Dealing with Difficult Emotions – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
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

export default function AngerRagePage() {
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
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Emotions & Healing
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Anger & Rage Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            Not all anger is sin. But rage and chronic anger can destroy what you love. God is slow to anger — and so can we become.
          </p>
        </div>

        {/* Resource Banner */}
        <div style={{ background: "#1a1a2e", border: `1px solid ${GREEN}66`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Support Resources</div>
          <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
            <strong style={{ color: TEXT }}>National DV Hotline:</strong> 1-800-799-7233 — if anger has become abusive<br />
            <strong style={{ color: TEXT }}>AMEND:</strong> amend.us — perpetrator accountability programs<br />
            <strong style={{ color: TEXT }}>Psychology Today:</strong> psychologytoday.com/us/therapists — find anger specialist<br />
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
              What is your anger telling you? What wound is underneath it? What do you want to change? Your entries are saved locally on this device only.
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
  );
}
