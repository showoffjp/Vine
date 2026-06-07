"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Anger Is Not the Sin — What You Do with It Is",
    verse: "Ephesians 4:26–27",
    text: "\"In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.\" Paul does not say do not be angry. He says in your anger do not sin. Anger is a God-given emotion — a signal that something is wrong. The problem is not that men feel anger. The problem is what happens when anger is the only emotion a man has permission to feel, and when it finds no constructive outlet.",
  },
  {
    title: "God's Own Anger Is Always Purposive, Never Destructive",
    verse: "Psalm 103:8",
    text: "\"The LORD is compassionate and gracious, slow to anger, abounding in love.\" Divine anger in Scripture is consistently oriented toward justice, protection of the vulnerable, and the defeat of evil. It is never impulsive, never against the innocent, never a release for God's personal frustration. This is the pattern — anger purposively aimed at what is actually wrong, not sprayed at whoever is nearby.",
  },
  {
    title: "Rage Frequently Masks Other Emotions",
    verse: "Jonah 4:4",
    text: "\"But the LORD replied, 'Is it right for you to be angry?' ...Jonah's anger was fierce, so that he wanted to die.\" Jonah's rage about the plant — his self-righteous fury — masks grief, disappointment, and wounded entitlement. God does not rebuke the anger; he asks a question about it. Many Christian men discover that beneath their rage is grief, shame, fear, or helplessness that they were never given permission to feel. The anger is real — but it is often not the primary emotion.",
  },
  {
    title: "The Fruit of the Spirit Includes Self-Control",
    verse: "Galatians 5:22–23",
    text: "\"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.\" Self-control is a fruit — which means it grows. It is not imposed from outside by gritted teeth and willpower. It is cultivated over time in a person who is being transformed. The man who cannot control his anger needs the Spirit's work, not just a behavior modification program.",
  },
  {
    title: "Men Are Called to Be Gentle, Not Merely Powerful",
    verse: "Matthew 5:5",
    text: "\"Blessed are the meek, for they will inherit the earth.\" Meekness is not weakness — it is power under discipline. The Greek word praus describes a wild horse that has been trained. The man who can contain enormous strength and direct it purposively is the blessed man, not the man who is simply emotionally muted. Christian masculinity is not emotional suppression — it is emotional mastery in service of love.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Dan Allender",
    role: "Psychologist, Author of To Be Told",
    quote: "Rage in a man is almost never about the presenting situation. It is about something far older, far deeper, and far more frightening than the traffic or the argument.",
    bio: "Allender's work on masculine emotional development has helped countless men trace their patterns of rage back to their original formation — and find the grief, shame, or fear beneath the anger.",
  },
  {
    id: 2,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage; Marriage and Spiritual Formation",
    quote: "A man who cannot control his anger is a man whose family lives in fear of him — and no amount of biblical knowledge or ministry fruitfulness changes that reality.",
    bio: "Thomas has addressed the specific harm of uncontrolled anger within Christian marriages and families, refusing to spiritualize or minimize what amounts to emotional abuse when anger becomes a pattern.",
  },
  {
    id: 3,
    name: "Dr. Ronald Potter-Efron",
    role: "Author, Angry All the Time; Anger Specialist",
    quote: "Chronic anger is not a character issue. It is a clinical pattern that requires clinical treatment — just like depression or anxiety.",
    bio: "Potter-Efron's clinical work distinguishes between situational anger and chronic rage as a clinical condition, providing a framework that helps men (and their families) understand what they are dealing with and what it requires.",
  },
  {
    id: 4,
    name: "Nate Collins",
    role: "Author, All But Invisible",
    quote: "The emotion most available to Christian men has often been anger — because it is the only one that does not threaten masculine identity. This is a profound spiritual poverty.",
    bio: "Collins has written and spoken about the narrowing of masculine emotional life in Christian culture, particularly how the suppression of vulnerability, grief, and fear leaves anger as the only sanctioned emotional outlet.",
  },
];

const practices = [
  {
    icon: "🧠",
    title: "Get an Anger Assessment",
    text: "Before any treatment can be tailored, get a proper clinical assessment. Chronic anger, intermittent explosive disorder, and trauma-based rage all require different approaches. A licensed therapist can help you understand what you are actually dealing with.",
  },
  {
    icon: "📍",
    title: "Identify Your Anger Triggers and Patterns",
    text: "Keep an anger journal for two weeks: what triggered each episode, what you felt in your body before the explosion, what thoughts accompanied it, and what happened after. Patterns become visible when they are documented. You cannot change what you cannot see.",
  },
  {
    icon: "💪",
    title: "Build Physical Outlets Before You Need Them",
    text: "Regular vigorous exercise — especially before conflict situations — significantly reduces rage incidents. The physiology of rage (adrenaline, cortisol) can be discharged through the body before it explodes. Running, weights, or martial arts are not anger management substitutes — they are physiological de-escalation.",
  },
  {
    icon: "⏸️",
    title: "Practice the 20-Minute Rule",
    text: "When you feel rage building, stop the interaction and take 20 minutes before responding. The physiological arousal of rage takes approximately 20 minutes to fully subside. Tell the other person: I need 20 minutes. Then return. This must be practiced before the crisis, not invented during it.",
  },
  {
    icon: "🗣️",
    title: "Learn to Name What Is Under the Anger",
    text: "In therapy or in a journal, practice asking: what am I actually feeling beneath the anger? Common answers are: embarrassed, helpless, disrespected, frightened, rejected, inadequate. Naming the primary emotion reduces the pressure that anger is being used to release.",
  },
  {
    icon: "👥",
    title: "Find Men Who Model Emotional Depth",
    text: "Seek out communities of men — in a church small group, a recovery group, or a therapy group — where the full range of emotions is acceptable. Men learn emotional capacity from other men. If your only models are emotionally unavailable men, you will replicate that pattern.",
  },
];

const scriptures = [
  { verse: "James 1:19–20", text: "\"My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.\"" },
  { verse: "Proverbs 16:32", text: "\"Better a patient person than a warrior, one with self-control than one who takes a city.\"" },
  { verse: "Psalm 37:8", text: "\"Refrain from anger and turn from wrath; do not fret — it leads only to evil.\"" },
  { verse: "Proverbs 29:11", text: "\"Fools give full vent to their rage, but the wise bring calm in the end.\"" },
  { verse: "Colossians 3:8", text: "\"But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.\"" },
  { verse: "Micah 6:8", text: "\"He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.\"" },
];

type AngerEntry = {
  id: string;
  date: string;
  trigger: string;
  underneath: string;
  step: string;
};

export default function AngerRageChristianMenPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AngerEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [underneath, setUnderneath] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_angerragechristianmen_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: AngerEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      trigger,
      underneath,
      step,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_angerragechristianmen_entries", JSON.stringify(updated));
    setTrigger(""); setUnderneath(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_angerragechristianmen_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🔥</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Anger, Rage & Christian Men
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For men struggling with anger and rage — theology that takes the emotion seriously without excusing harm, clinical understanding of what chronic anger actually is, and practical tools for the long work of transformation.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              If your anger has harmed others: <strong>National DV Hotline:</strong> 1-800-799-7233 | <strong>Batterer Intervention Programs</strong> exist in most counties | <strong>988</strong> Suicide & Crisis Lifeline
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Anger Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What triggered the anger or brought it close today?</label>
                <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What was underneath the anger — what was the real feeling?</label>
                <textarea value={underneath} onChange={e => setUnderneath(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>One specific step I can take this week toward change:</label>
                <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.trigger && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Trigger:</strong> {e.trigger}</p>}
                {e.underneath && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Underneath:</strong> {e.underneath}</p>}
                {e.step && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Step:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ULqlqhaMQLQ" title="What's Under the Anger — Understanding Rage" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>What Is Under the Anger: Understanding Rage in Men</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical exploration of the emotions — grief, fear, shame — that chronic anger frequently masks in men</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="w_A5aEfMxAI" title="Anger Management vs Anger Transformation — A Christian View" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Anger Management vs. Transformation: A Christian Distinction</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Why behavioral anger management is insufficient and what genuine Spirit-led transformation of anger requires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="mSUC1i3P2lQ" title="The Neuroscience of Anger and What Actually Helps" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Neuroscience of Anger: What the Brain Does and How to Work With It</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How the anger response works physiologically and what interventions actually interrupt the cycle</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="ggR0Ni0yZhA" title="Jonah and God's Question — Theological Case Study on Anger" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Jonah and God's Question: A Biblical Case Study on Anger</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on Jonah 4 and what God's response to Jonah's rage teaches about the divine approach to angry men</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
