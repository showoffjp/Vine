"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Anxiety Is Not a Spiritual Failure",
    verse: "Philippians 4:6-7",
    text: "\"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.\" This is one of the most misused verses for people with anxiety disorders. Paul is not giving a diagnosis — he is pointing to a spiritual practice for ordinary worry. Generalized anxiety disorder is a medical condition involving how the nervous system processes threat signals. Telling someone with GAD to 'just pray more' is like telling someone with a broken leg to pray and walk. Both prayer and treatment are appropriate."
  },
  {
    title: "Fear Is Woven Through the Biblical Narrative",
    verse: "2 Timothy 1:7",
    text: "\"For God gave us a spirit not of fear but of power and love and self-control.\" This text does not mean Christians should not experience fear — it means our identity is not constituted by fear. The biblical narrative is full of people who were terrified: Moses, Gideon, Jeremiah, Mary, Paul. Their fear was not an obstacle to God's work through them. God meets anxious people in their anxiety, not beyond it."
  },
  {
    title: "The Compassion of Christ for the Anxious",
    verse: "Matthew 11:28",
    text: "\"Come to me, all who labor and are heavy laden, and I will give you rest.\" The Greek behind 'heavy laden' (pefortismenoi) refers to a crushing, exhausting burden. Jesus' invitation is not to people with mild inconvenience but to those who are worn to the bone by what they carry. An anxiety disorder is a crushing burden. Christ's invitation is not conditional on your ability to feel calm when you receive it."
  },
  {
    title: "The Body Under Anxiety Is Not the Enemy",
    verse: "1 Corinthians 6:19-20",
    text: "\"Do you not know that your body is a temple of the Holy Spirit?\" The body that shakes, the heart that races, the stomach that knots — this body is still the temple of the Spirit. Anxiety is a physiological event as much as a cognitive one. Caring for that body through medication, therapy, sleep, exercise, and nutrition is an act of stewardship of the temple, not an act of faithlessness."
  },
  {
    title: "Hope for the Anxious",
    verse: "Psalm 94:18-19",
    text: "\"When I thought, 'My foot slips,' your steadfast love, O Lord, held me up. When the cares of my heart are many, your consolations cheer my soul.\" The Psalmist describes a mind flooded with cares — the biblical word for anxious thought. And the testimony is not that the cares vanished but that God's steadfast love held up what was slipping. You do not have to have no anxiety to be held by God."
  }
];

const voices = [
  {
    id: "v1", name: "Edmund Bourne", role: "Psychologist, Anxiety Disorder Specialist",
    quote: "Anxiety disorders are not about weakness. They are about a sensitized nervous system that has learned, for legitimate reasons, to overestimate danger. Effective treatment exists.",
    bio: "Edmund Bourne's 'The Anxiety and Phobia Workbook' is the most widely used self-help book for anxiety disorders and has helped millions. He writes accessibly about the range of anxiety conditions — GAD, panic disorder, social anxiety, OCD, PTSD — and evidenced-based paths to recovery."
  },
  {
    id: "v2", name: "Jennie Allen", role: "Author, 'Get Out of Your Head'; Bible Teacher",
    quote: "The spiral of anxious thinking is real and it is powerful. But the mind can be retrained. Not by willpower alone — by intention, practice, community, and the renewing work of the Spirit.",
    bio: "Jennie Allen addresses anxiety from a Christian perspective with pastoral warmth and practical tools. Her book 'Get Out of Your Head' addresses the thought patterns that fuel anxiety and the spiritual and cognitive practices that interrupt them."
  },
  {
    id: "v3", name: "Curt Thompson", role: "Psychiatrist, Author of 'Anatomy of the Soul'",
    quote: "Anxiety is not primarily a thought problem. It is a relational problem — it is what happens when the nervous system doesn't have enough secure attachment to regulate itself. That is both the diagnosis and the cure.",
    bio: "Dr. Curt Thompson integrates attachment science and Christian theology. His understanding of anxiety as rooted in relational disconnection is both scientifically sound and pastorally rich. He is a necessary voice for Christians trying to understand their own anxiety."
  },
  {
    id: "v4", name: "Ed Welch", role: "Counselor, CCEF; Author of 'Running Scared'",
    quote: "The fear behind most anxiety disorders is some variation of the same thing: I will not have what I need. The gospel speaks directly to that fear — not by guaranteeing we get everything we want, but by guaranteeing that God is our enough.",
    bio: "Ed Welch's 'Running Scared: Fear, Worry and the God of Rest' is one of the most theologically careful and pastorally wise books on anxiety from a Christian perspective. He honors both the medical reality of anxiety disorders and their spiritual dimensions."
  }
];

const practices = [
  {
    icon: "🏥",
    title: "Get a Proper Diagnosis",
    text: "Anxiety disorders (GAD, panic disorder, social anxiety disorder, specific phobias) have distinct presentations and the most effective treatments vary. A psychiatrist, psychologist, or your primary care physician can assess what you're dealing with and recommend appropriate treatment — which may include therapy, medication, or both."
  },
  {
    icon: "🧠",
    title: "Cognitive Behavioral Therapy (CBT)",
    text: "CBT is the gold-standard psychological treatment for most anxiety disorders. It identifies the distorted thinking patterns (catastrophizing, fortune-telling, mind-reading) that fuel anxiety and teaches concrete tools to interrupt them. Find a therapist trained in CBT for anxiety through the Anxiety and Depression Association of America (adaa.org)."
  },
  {
    icon: "💊",
    title: "Consider Medication Without Shame",
    text: "SSRIs, SNRIs, and other medications can significantly reduce the physiological intensity of anxiety disorders, creating space for therapy to work. There is no spiritual virtue in refusing medication for a neurological condition. Many faithful Christians manage anxiety disorders with medication as part of their treatment."
  },
  {
    icon: "📿",
    title: "Contemplative Prayer Practices",
    text: "Centering prayer, lectio divina, the Daily Examen — contemplative practices that slow the body and cultivate present-moment awareness can complement clinical treatment for anxiety. They are not a replacement for therapy, but they address the spiritual dimension of an anxious life and deepen rootedness in God."
  },
  {
    icon: "🏃",
    title: "Embodied Practices",
    text: "Regular aerobic exercise, adequate sleep, reduced caffeine and alcohol, and diaphragmatic breathing all directly reduce anxiety's physiological intensity. The anxious body needs tending. These are not spiritual bypasses — they are basic stewardship of the nervous system God gave you."
  },
  {
    icon: "🫂",
    title: "Community Is Treatment",
    text: "Shame thrives in secrecy and anxiety does too. Telling a trusted person, a small group, or a church community that you struggle with an anxiety disorder is itself therapeutic. The experience of being known and not rejected is one of the most powerful forces for nervous-system regulation."
  }
];

const scriptures = [
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "Matthew 11:28-29", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls." },
  { verse: "Psalm 94:18-19", text: "When I thought, 'My foot slips,' your steadfast love, O Lord, held me up. When the cares of my heart are many, your consolations cheer my soul." },
  { verse: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control." },
  { verse: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." },
  { verse: "1 Peter 5:7", text: "Casting all your anxieties on him, because he cares for you." }
];

type AaEntry = { id: string; date: string; trigger: string; response: string; truth: string };

export default function AnxietyDisorderFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AaEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [response, setResponse] = useState("");
  const [truth, setTruth] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_anxietydisorderfaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: AaEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger, response, truth };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_anxietydisorderfaithj_entries", JSON.stringify(updated));
    setTrigger(""); setResponse(""); setTruth("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_anxietydisorderfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌊</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>Anxiety Disorder &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            When anxiety is not ordinary worry but a condition that hijacks your nervous system — and you are trying to follow Jesus while your body tells you danger is everywhere.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> 988 Suicide &amp; Crisis Lifeline (call/text 988) &bull; ADAA: adaa.org &bull; NAMI: nami.org &bull; Crisis Text Line: text HOME to 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: TEXT }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Anxiety Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What triggered the anxiety today? What did my body do?</label>
                  <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>How did I respond? (What helped, what didn&apos;t?)</label>
                  <textarea value={response} onChange={e => setResponse(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What truth do I want to remember from this?</label>
                  <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
                  {saved ? "Saved" : "Save Entry"}
                </button>
              </div>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.5rem" }}>{e.date}</div>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "1rem" }}>×</button>
                </div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Trigger:</strong> {e.trigger}</p>}
                {e.response && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Response:</strong> {e.response}</p>}
                {e.truth && <p style={{ color: GREEN, fontSize: "0.85rem", margin: 0 }}><strong>Truth:</strong> {e.truth}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Get Out of Your Head</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Jennie Allen on breaking the spiral of anxious thoughts with scripture and practice</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Get Out of Your Head" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Neuroscience of Anxiety</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on attachment, anxiety, and the brain's threat-response system</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="The Neuroscience of Anxiety" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Running Scared: Fear and Faith</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Ed Welch on the theology of fear and why the gospel is good news for anxious people</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Running Scared: Fear and Faith" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>CBT for Anxiety</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>How cognitive behavioral therapy works for generalized anxiety disorder</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="CBT for Anxiety" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
