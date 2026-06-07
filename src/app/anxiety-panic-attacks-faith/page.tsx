"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Anxiety Is Not a Sin",
    verse: "Philippians 4:6–7",
    text: "Paul's instruction to 'not be anxious' is pastoral encouragement, not a moral command whose violation is sin. It is an invitation to release into prayer what anxiety tries to manage through control. The peace 'that transcends understanding' is a gift, not a performance. God receives anxious people — he does not condemn them for their nervous systems.",
  },
  {
    title: "The God Who Calms and Who Accompanies",
    verse: "Isaiah 41:10",
    text: "'Do not fear, for I am with you; do not be dismayed, for I am your God.' The repeated biblical command not to fear is not given to shame fear out of us — it is the announcement of a presence so reliable that fear need not dominate. Anxiety often fears abandonment. God's word to the anxious is: I am with you.",
  },
  {
    title: "The Body's Response Is Not Spiritual Failure",
    verse: "Psalm 55:4–5",
    text: "David writes: 'My heart is in anguish within me; the terrors of death have fallen on me. Fear and trembling have beset me; horror has overwhelmed me.' Panic attacks, racing heart, dread — these are biblical experiences. The Psalms hold them without diagnosis of faithlessness. Your nervous system is not your theology.",
  },
  {
    title: "Trusting What You Cannot Control",
    verse: "Matthew 6:27",
    text: "'Can any one of you by worrying add a single hour to your life?' Jesus names the futility of anxious control without shaming those who feel it. Anxiety is partly the grief of finitude — the acknowledgment that we cannot make ourselves safe. The gospel's answer is not 'try harder not to worry' but 'the One who holds all things holds you.'",
  },
  {
    title: "Weakness as the Ground of Grace",
    verse: "2 Corinthians 12:9",
    text: "Anxiety often feels like weakness — and it is. But Paul discovered that God's power 'is made perfect in weakness.' Not in spite of weakness, but in it. The anxious person who keeps showing up, keeps praying, keeps reaching for community is not failing — they are practicing the most demanding form of faithfulness.",
  },
];

const voices = [
  {
    id: 1,
    name: "Ed Welch",
    role: "Author, Running Scared; Faculty, CCEF",
    quote: "Fear and anxiety ask: what do you trust? They are invitations to faith — not proofs of its absence.",
    bio: "Ed Welch's biblical counseling approach to anxiety is pastoral and rigorous. He distinguishes between anxiety as a universal human experience and anxiety disorders requiring clinical treatment, and he meets anxious people with the gospel rather than spiritual performance.",
  },
  {
    id: 2,
    name: "Matthew Stanford",
    role: "Neuroscientist & Author, Grace for the Afflicted",
    quote: "Panic disorder is a physiological condition. It is not a spiritual problem to be prayed away, though prayer is part of healing.",
    bio: "Matthew Stanford brings both clinical neuroscience and Christian faith to anxiety disorders. His work challenges the church's sometimes harmful tendency to reduce mental health conditions to spiritual deficiency, while also affirming the role of faith communities in recovery.",
  },
  {
    id: 3,
    name: "Curt Thompson",
    role: "Psychiatrist & Author, Anatomy of the Soul",
    quote: "Anxiety is the body telling the story the mind is trying to avoid. Healing requires both medical care and the courage to hear your own story.",
    bio: "Curt Thompson integrates neuroscience, attachment theory, and Christian spirituality. His work on anxiety emphasizes the role of secure relationships — with God and with others — in regulating a chronically activated nervous system.",
  },
  {
    id: 4,
    name: "Sarah Young",
    role: "Author, Jesus Calling",
    quote: "When anxiety strikes, turn your thoughts to My presence. I am with you in this moment, even if you cannot feel it.",
    bio: "Sarah Young's devotional writing has provided daily comfort to millions experiencing anxiety. While some find her approach too simple for clinical anxiety disorders, her emphasis on presence — moment by moment awareness of God's nearness — has genuine therapeutic and spiritual resonance.",
  },
];

const practices = [
  {
    icon: "🫁",
    title: "Physiological Sigh for Panic",
    text: "During a panic attack: take a double inhale through the nose (two short sniffs), then a long slow exhale through the mouth. This activates the parasympathetic nervous system faster than most other techniques. After several repetitions, pair it with a simple truth: 'I am not in danger right now. God is with me.'",
  },
  {
    icon: "🙏",
    title: "The Prayer of Release",
    text: "When anxious thoughts spiral, pause and physically open your hands. Name the fear aloud or in writing: 'I am afraid of [X].' Then say: 'I give this to you, Lord. I cannot carry it and it is not mine to control.' This is not a magic formula — it is a practice of redirecting the will away from control and toward trust.",
  },
  {
    icon: "👩‍⚕️",
    title: "Professional Assessment and Care",
    text: "Anxiety disorders and panic disorder have effective treatments: CBT, exposure therapy, and medications when appropriate. Seeking professional help is wisdom, not weakness. A psychiatrist and therapist who understand faith can integrate clinical treatment with spiritual care.",
  },
  {
    icon: "📱",
    title: "The 5-4-3-2-1 Grounding Technique",
    text: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This interrupts the panic loop by anchoring attention in the present sensory moment. Pair it with Psalm 46:10: 'Be still, and know that I am God.'",
  },
  {
    icon: "🌿",
    title: "Daily Movement as Medicine",
    text: "Regular aerobic exercise is one of the most effective interventions for anxiety. Even 20 minutes of walking per day meaningfully reduces baseline anxiety levels. Frame it as stewardship of the body God gave you — not a performance of health, but a practice of care.",
  },
  {
    icon: "📖",
    title: "Philippians 4 Meditation Practice",
    text: "Slowly read Philippians 4:4–9 each morning for a week. Underline every verb — rejoice, be gentle, do not be anxious, let your requests be made known, think about these things. Let the text give you a structure for the morning before anxiety sets the agenda for the day.",
  },
];

const scriptures = [
  { verse: "Philippians 4:6–7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
  { verse: "Psalm 94:19", text: "When anxiety was great within me, your consolation brought me joy." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
  { verse: "Psalm 46:10", text: "He says, 'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.'" },
];

type APEntry = { id: string; date: string; fear: string; anchor: string; prayer: string };

export default function AnxietyPanicAttacksFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<APEntry[]>([]);
  const [fear, setFear] = useState("");
  const [anchor, setAnchor] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_anxietypanickattacksfaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!fear.trim() && !anchor.trim() && !prayer.trim()) return;
    const entry: APEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      fear: fear.trim(),
      anchor: anchor.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_anxietypanickattacksfaithj_entries", JSON.stringify(updated));
    setFear(""); setAnchor(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_anxietypanickattacksfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌊</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Anxiety, Panic Attacks & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians living with anxiety and panic — learning to find God in the terror,
            seek help without shame, and discover that fear is not the last word.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in crisis or need immediate support:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://adaa.org" style={{ color: PURPLE }}>adaa.org (Anxiety & Depression Assoc.)</a> |{" "}
            <a href="https://www.ccef.org" style={{ color: PURPLE }}>ccef.org (Christian counseling)</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 6,
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                background: tab === t ? PURPLE : CARD,
                color: TEXT,
                cursor: "pointer",
                fontSize: "0.875rem",
                textTransform: "capitalize",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What fear is loudest for you right now?</label>
              <textarea
                value={fear}
                onChange={(e) => setFear(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What truth can you anchor to today, even if it doesn&apos;t feel true yet?</label>
              <textarea
                value={anchor}
                onChange={(e) => setAnchor(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for peace today:</label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button
                onClick={saveEntry}
                style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}
              >
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.fear && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Fear: </span>{e.fear}</p>}
                    {e.anchor && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Anchor: </span>{e.anchor}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Anxiety and the Gospel — Finding Peace" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Understanding Anxiety from a Christian Perspective" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Panic, Faith, and the Path to Healing" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Scripture and Prayer for the Anxious Heart" />
          </div>
        )}
      </div>
    </div>
  );
}
