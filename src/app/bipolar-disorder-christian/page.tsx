"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Brain Is Part of the Body God Made",
    verse: "Psalm 139:14",
    text: "\"I praise you, for I am fearfully and wonderfully made.\" The brain that cycles between mania and depression is still the brain God made. Bipolar disorder is not a character defect or a faith deficiency — it is a neurological condition in which the mood-regulation systems of the brain misfire. The person with bipolar disorder is not spiritually unstable; they are neurologically unstable. These are not the same thing."
  },
  {
    title: "The Prophet Under the Broom Tree",
    verse: "1 Kings 19:4",
    text: "\"He himself went a day's journey into the wilderness and came and sat down under a broom tree. And he asked that he might die, saying, 'It is enough; now, O Lord, take away my life.'\" Elijah, coming off the greatest victory of his prophetic career, collapsed into what reads clinically like a major depressive episode. God's response was not rebuke but sleep, food, and gentle re-commissioning. God is familiar with the crash that follows the heights."
  },
  {
    title: "Medication as Stewardship",
    verse: "Proverbs 4:23",
    text: "\"Keep your heart with all vigilance, for from it flow the springs of life.\" Mood stabilizers, antipsychotics, and other medications that treat bipolar disorder are tools for keeping — for maintaining — what God entrusted you with. Refusing medication for a neurological condition out of misplaced spirituality is not faith; it is neglect. Many faithful Christians manage bipolar disorder with medication as an act of faithful stewardship."
  },
  {
    title: "Identity Beyond the Diagnosis",
    verse: "2 Corinthians 5:17",
    text: "\"Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.\" Your identity as a new creation in Christ is not overwritten by your diagnosis. Bipolar disorder is something that happens to you — it is not who you are. You are a new creation who has bipolar disorder. The distinction matters for how you relate to your illness and to yourself."
  },
  {
    title: "Grace for the Harm Done in Episodes",
    verse: "Romans 8:1",
    text: "\"There is therefore now no condemnation for those who are in Christ Jesus.\" Manic episodes produce real harm — financial, relational, spiritual. The guilt and shame that follow a manic episode can be crushing. The gospel is specific enough to address this: there is no condemnation. That does not erase consequences or remove the need for repair. But it removes the verdict of worthlessness that shame tries to pronounce."
  }
];

const voices = [
  {
    id: "v1", name: "Kay Redfield Jamison", role: "Psychologist, 'An Unquiet Mind'; Lives With Bipolar I",
    quote: "I have often asked myself whether, given the choice, I would choose to have manic-depressive illness. The answer is that I honestly don't know. But I am quite clear that I would not choose to be without my medication.",
    bio: "Kay Redfield Jamison is a professor of psychiatry at Johns Hopkins who has lived with bipolar I disorder and written about it with extraordinary candor. Her memoir 'An Unquiet Mind' is the most important first-person account of bipolar disorder in print — essential reading for those with the diagnosis and those who love them."
  },
  {
    id: "v2", name: "Matthew Stanford", role: "Neuroscientist, Author of 'Grace for the Afflicted'",
    quote: "The church must stop treating mental illness as a spiritual problem that more prayer will solve. Bipolar disorder is a brain disease that requires treatment — and those with it deserve pastoral care, not correction.",
    bio: "Dr. Matthew Stanford is a neuroscientist and Christian who leads the Hope and Healing Center in Houston. His book 'Grace for the Afflicted' addresses how the church can care well for those with mental illness, including bipolar disorder, with both theological integrity and clinical accuracy."
  },
  {
    id: "v3", name: "Curt Thompson", role: "Psychiatrist, Christian Author",
    quote: "The shame that follows a manic episode — the wreckage left behind — is often worse than the episode itself. But shame is never the last word for those who are in Christ.",
    bio: "Dr. Curt Thompson's integration of neuroscience and Christian theology applies powerfully to bipolar disorder. His work on shame is particularly relevant for those who live with the aftermath of episodes — the relational and behavioral damage that produces crushing guilt."
  },
  {
    id: "v4", name: "Amy Simpson", role: "Author, 'Troubled Minds: Mental Illness and the Church's Mission'",
    quote: "The church is often the last place a person with mental illness feels they can be honest. We have made an idol of emotional stability and a shame trigger of psychiatric diagnosis.",
    bio: "Amy Simpson's mother lived with severe mental illness, and Amy has written honestly about how the church fails those with psychiatric diagnoses. Her work is a call to pastoral change that names both the harm of silence and the possibility of genuine community for those with chronic mental illness."
  }
];

const practices = [
  {
    icon: "💊",
    title: "Medication Adherence — Non-Negotiably",
    text: "Bipolar disorder is one of the conditions where medication non-adherence is most dangerous and most common. Mood stabilizers and other medications work when taken consistently. Stopping them during manic episodes (when the person feels great) or depressive episodes (when nothing seems worth it) is the primary cause of relapses. Medication adherence is the foundation of every other practice."
  },
  {
    icon: "🧠",
    title: "A Psychiatrist, Not Just a Therapist",
    text: "Bipolar disorder requires a psychiatrist for medication management — not just a therapist. Therapy is valuable for bipolar disorder but cannot substitute for psychiatric medication. Find a psychiatrist who has experience with bipolar disorder specifically; medication management for this condition is complex."
  },
  {
    icon: "📊",
    title: "Mood Tracking",
    text: "Daily mood tracking — using an app like Daylio or a mood chart — helps you and your psychiatrist identify patterns, predict episodes, and catch early warning signs before a full episode develops. The data from mood tracking is one of the most useful clinical tools in bipolar disorder management."
  },
  {
    icon: "😴",
    title: "Sleep as Sacred",
    text: "Sleep disruption is one of the most powerful triggers for manic episodes. Protecting sleep — consistent bedtime, no all-nighters, treating insomnia aggressively — is not optional for people with bipolar disorder. Sleep hygiene is a form of spiritual and physical stewardship."
  },
  {
    icon: "🫂",
    title: "Trusted People With Permission to Speak",
    text: "Give one or two trusted people — a spouse, a close friend, a pastor — explicit permission to tell you when your behavior seems elevated or concerning. Anosognosia (lack of insight during manic episodes) means you may not recognize an episode when it's happening. The people who love you are your early warning system."
  },
  {
    icon: "✝️",
    title: "A Faith Community That Knows",
    text: "The isolation of keeping a psychiatric diagnosis secret from your church community is its own burden. Find a pastor or small group that can know your diagnosis and walk with you through episodes without panic or theological judgment. This community is protective against the isolation that worsens the illness."
  }
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well." },
  { verse: "1 Kings 19:4-5", text: "He asked that he might die, saying, 'It is enough; now, O Lord, take away my life.' And he lay down and slept under a broom tree. And behold, an angel touched him and said to him, 'Arise and eat.'" },
  { verse: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come." },
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
  { verse: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." }
];

type BpEntry = { id: string; date: string; mood: string; warning: string; gratitude: string };

export default function BipolarDisorderChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BpEntry[]>([]);
  const [mood, setMood] = useState("");
  const [warning, setWarning] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_bipolardisorderchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!mood.trim()) return;
    const entry: BpEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), mood, warning, gratitude };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_bipolardisorderchristj_entries", JSON.stringify(updated));
    setMood(""); setWarning(""); setGratitude("");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_bipolardisorderchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌊</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>Bipolar Disorder &amp; Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those whose minds cycle between heights and depths — trying to follow Jesus through the swings, hold onto identity beyond a diagnosis, and find a church that won&apos;t flinch.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>
            <strong style={{ color: TEXT }}>Crisis &amp; Support:</strong> 988 Lifeline (call/text 988) &bull; NAMI: nami.org or 1-800-950-6264 &bull; Depression &amp; Bipolar Support Alliance: dbsalliance.org &bull; Crisis Text: 741741
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize"
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", margin: "0 0 0.75rem" }}>&ldquo;{v.quote}&rdquo;</blockquote>
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
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: TEXT }}>Daily Mood &amp; Wellness Journal</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Mood today (scale and description): Where am I on the spectrum?</label>
                  <textarea value={mood} onChange={e => setMood(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>Any warning signs I notice? (Sleep, irritability, racing thoughts, energy)</label>
                  <textarea value={warning} onChange={e => setWarning(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.25rem" }}>What am I grateful for today — even small?</label>
                  <textarea value={gratitude} onChange={e => setGratitude(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.5rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold", alignSelf: "flex-start" }}>
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
                {e.mood && <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "0.25rem" }}><strong>Mood:</strong> {e.mood}</p>}
                {e.warning && <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.25rem" }}><strong>Warning signs:</strong> {e.warning}</p>}
                {e.gratitude && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}><strong>Grateful:</strong> {e.gratitude}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Grace for the Afflicted</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Matthew Stanford on how the church can care for those with bipolar disorder and other serious mental illnesses</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Grace for the Afflicted" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>The Neuroscience of Bipolar Disorder</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Understanding bipolar disorder as a brain condition — not a faith problem</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="The Neuroscience of Bipolar Disorder" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>No Condemnation: Shame After Episodes</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Curt Thompson on shame, the aftermath of manic episodes, and the gospel&apos;s specific word for those who have harmed</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="No Condemnation: Shame After Episodes" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
              <h3 style={{ color: TEXT, fontWeight: "bold", marginBottom: "0.25rem" }}>Kay Warren: Mental Health and the Church</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>Why the church must become a safe place for those with psychiatric diagnoses — before they lose another family</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Kay Warren: Mental Health and the Church" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
