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
    title: "Shame Is the Adversary of Recovery",
    verse: "Romans 10:11",
    text: "\"As Scripture says, 'Anyone who believes in him will never be put to shame.'\" The shame cycle of pornography addiction — use, shame, isolation, use again — is self-sustaining. Shame drives the person deeper into hiding, and hiding perpetuates the addiction. The gospel interrupts the shame cycle not by minimizing the sin but by relocating identity outside of performance. You are not your addiction. You are a beloved child of God who has an addiction.",
  },
  {
    title: "Secrecy Is the Environment in Which Addiction Thrives",
    verse: "Ephesians 5:11–13",
    text: "\"Have nothing to do with the fruitless deeds of darkness, but rather expose them... But everything exposed by the light becomes visible — and everything that is illuminated becomes a light.\" The consistent witness of Scripture and of addiction medicine: the behavior that is hidden is the behavior that continues. The first act of genuine recovery is honest disclosure to someone safe — not public confession, but honest acknowledgment in a trustworthy relationship.",
  },
  {
    title: "Willpower Is Not Sufficient and Was Never Promised to Be",
    verse: "Romans 7:18–19",
    text: "\"For I know that good itself does not dwell in me, that is, in my sinful nature. For I have the desire to do what is good, but I cannot carry it out. For I do not do the good I want to do, but the evil I do not want to do — this I keep on doing.\" Paul's description of the war within the self is not evidence of weak faith. It is honest anthropology. Pornography addiction involves neurological conditioning that requires more than intention to overcome. The person who has failed at willpower is functioning exactly as Paul described human beings functioning — and that is not the end of the story.",
  },
  {
    title: "Recovery Requires Community, Not Just Private Resolve",
    verse: "James 5:16",
    text: "\"Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.\" The verse does not say confess your sins to God silently and be healed by solo resolve. It says confess to each other, pray for each other — plural, relational, communal. The design of recovery was always relational. The Christian who thinks they can recover alone has misread this text.",
  },
  {
    title: "Transformation Happens Through the Mind, Not Despite It",
    verse: "Romans 12:2",
    text: "\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.\" The neurological pathways formed by pornography use are real and deep. Transformation requires the renewing of the mind — which corresponds closely to what neuroscience has learned about how addiction is overcome. New pathways must be formed through new behaviors, new relationships, new responses. This is spiritual formation and neurological recovery operating in the same direction.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Patrick Carnes",
    role: "Pioneer in Sexual Addiction Research; Author of Out of the Shadows",
    quote: "Sexual addiction is not a moral failing. It is a disorder of intimacy — a substitute for the connection the person cannot find or does not believe they deserve.",
    bio: "Carnes developed the clinical framework for sexual addiction that has formed the basis of most Christian recovery programs, identifying the core intimacy disorder beneath the addictive behavior.",
  },
  {
    id: 2,
    name: "Sam Black",
    role: "Covenant Eyes, Author of The Porn Circuit",
    quote: "The brain was designed for intimacy. Pornography hijacks that design — and the same design that makes the brain vulnerable also makes it capable of healing.",
    bio: "Black's work on the neuroscience of pornography addiction has helped Christians understand why willpower alone is insufficient and what brain-based recovery actually requires.",
  },
  {
    id: 3,
    name: "Matt Fradd",
    role: "Author, The Porn Myth; Recovery Advocate",
    quote: "The church needs to stop treating pornography addiction as a willpower problem and start treating it as the compulsive disorder it is.",
    bio: "Fradd, himself a recovered pornography addict, has worked to shift the Christian conversation from moral shame to clinical-pastoral integration, arguing for both accountability and professional treatment.",
  },
  {
    id: 4,
    name: "Mark Laaser",
    role: "Author, Healing the Wounds of Sexual Addiction; Licensed Therapist",
    quote: "Every sexual addict I have worked with was trying to medicate some other pain. Finding that pain and healing it is the work of recovery.",
    bio: "Laaser's clinical and personal experience with sexual addiction recovery has produced one of the most comprehensive Christian treatments of the subject, integrating trauma, theology, and clinical practice.",
  },
];

const practices = [
  {
    icon: "🤝",
    title: "Disclose to a Safe Person Today",
    text: "The first recovery action is disclosure. Choose one person — a trusted friend, a pastor, or a therapist — and be completely honest about the scope and history of the behavior. Not partial disclosure. Complete, honest disclosure to a safe person who will hold confidentiality.",
  },
  {
    icon: "🔒",
    title: "Install Accountability Software",
    text: "Covenant Eyes or Accountable2You route browsing reports to an accountability partner. This is not a cure — it is a guardrail while deeper work happens. Choose an accountability partner who is not your spouse and who will actually review reports and ask hard questions.",
  },
  {
    icon: "👥",
    title: "Find a SAA or Celebrate Recovery Group",
    text: "Sex Addicts Anonymous (saa.org), Covenant Eyes groups, and Celebrate Recovery programs provide structured, same-sex peer accountability. These groups understand what individual willpower cannot accomplish. They are not optional for most recoveries — they are the primary vehicle.",
  },
  {
    icon: "🧠",
    title: "Get a CSAT Therapist",
    text: "A Certified Sex Addiction Therapist (CSAT) has specific training in the addiction model, trauma work, and relapse prevention that general therapists do not have. Use the IITAP therapist locator (iitap.com) to find a CSAT near you.",
  },
  {
    icon: "📱",
    title: "Address Device and Environment",
    text: "Remove or restrict the devices, times, and locations most associated with pornography use. Use a dumb phone during high-risk periods. Move devices out of the bedroom. These are not permanent restrictions — they are environmental design during the vulnerable early recovery period.",
  },
  {
    icon: "📚",
    title: "Understand the Neurological Reality",
    text: "Read The Porn Myth by Fradd, or Wired for Intimacy by Struthers. Understanding that you are dealing with neurological conditioning — not merely moral weakness — changes how you approach recovery and dramatically reduces shame.",
  },
];

const scriptures = [
  { verse: "1 Corinthians 10:13", text: "\"No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.\"" },
  { verse: "Psalm 51:10", text: "\"Create in me a pure heart, O God, and renew a steadfast spirit within me.\"" },
  { verse: "1 John 1:9", text: "\"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.\"" },
  { verse: "Galatians 5:1", text: "\"It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.\"" },
  { verse: "2 Corinthians 5:17", text: "\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\"" },
  { verse: "Romans 8:1", text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\"" },
];

type RecoveryEntry = {
  id: string;
  date: string;
  honest: string;
  step: string;
  prayer: string;
};

export default function AdultPornographyAddictionRecoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RecoveryEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [step, setStep] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_adultpornaddictionrecovery_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const entry: RecoveryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest,
      step,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_adultpornaddictionrecovery_entries", JSON.stringify(updated));
    setHonest(""); setStep(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_adultpornaddictionrecovery_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌊</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Pornography Addiction Recovery
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For adults seeking freedom from pornography addiction — pastoral care without shame spirals, clinical understanding of the neurological reality, and a structured path toward genuine recovery through community and accountability.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Help: <strong>SAA:</strong> saa.org | <strong>Covenant Eyes:</strong> covenanteyes.com | <strong>CSAT Locator:</strong> iitap.com | <strong>988</strong> Suicide & Crisis Lifeline
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
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Recovery Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>An honest account of where I am in recovery today:</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>One specific recovery step I took or will take today:</label>
                <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — without shame, without performance:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.step && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Step:</strong> {e.step}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="wSF82AwSDiU" title="The Neuroscience of Pornography Addiction" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Neuroscience of Pornography Addiction</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How pornography conditions the brain and why willpower alone is insufficient for recovery</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Kq2AoGWlMJM" title="Christian Pornography Recovery — A Clinical Framework" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Christian Pornography Recovery: A Clinical and Pastoral Framework</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Integrating clinical understanding of sexual addiction with Christian pastoral care for a holistic recovery approach</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="e5xmO7J3d_I" title="Shame and Recovery — Why Shame Makes Addiction Worse" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Shame and Recovery: Why the Shame Cycle Feeds Addiction</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>How shame perpetuates the addiction cycle and what gospel-rooted shame interruption looks like in practice</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="D9xOVQ96T0A" title="Building an Accountability Structure That Actually Works" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Building Accountability That Actually Works</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>What genuine accountability looks like for pornography recovery — structure, relationships, and the hard conversations required</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
