"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "You Are Not Condemned for What You Survived",
    verse: "Romans 8:1",
    text: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\" The church has historically mishandled suicide by treating it as unforgivable. Scripture does not make that claim. A suicide attempt is a medical crisis that occurs in unimaginable psychological pain — not a spiritual verdict. Survivors need to hear, directly and repeatedly: your life is not forfeit, and you are not damned.",
  },
  {
    title: "The Prophets Survived Their Own Death Wishes",
    verse: "1 Kings 19:4",
    text: "\"He came to a broom bush, sat down under it and prayed that he might die. 'I have had enough, LORD,' he said. 'Take my life; I am no better than my ancestors.'\" Elijah — one of Scripture's greatest prophets — prayed to die after the apparent failure of his mission. He was not condemned. He was met by an angel who brought him food and said: \"Get up and eat, for the journey is too great for you.\" The journey continues. God provides.",
  },
  {
    title: "Shame Is Not the Path to Healing",
    verse: "Psalm 34:5",
    text: "\"Those who look to him are radiant; their faces are never covered with shame.\" Survivors of suicide attempts frequently carry enormous shame — about the attempt itself, about the family impact, about continuing to struggle afterward. But shame isolates and silence kills. The path forward requires honest communities where shame does not have the final word.",
  },
  {
    title: "Weakness Is Not the Opposite of Faith",
    verse: "2 Corinthians 12:9–10",
    text: "\"My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.\" Chronic suicidality is not evidence that faith is absent. Some people live their entire lives managing a powerful pull toward death. The fact that they are still here is not a sign of weakness — it is a sign of survival, which is a form of courage.",
  },
  {
    title: "Recovery Requires Telling the Story",
    verse: "Revelation 12:11",
    text: "\"They triumphed over him by the blood of the Lamb and by the word of their testimony.\" Recovery from a suicide attempt — like all trauma recovery — requires the ability to tell what happened without being shamed or silenced. The testimony is not a polished redemption story. It begins with the raw facts: what happened, what preceded it, what came next.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Kay Warren",
    role: "Mental Health Advocate, Saddleback Church",
    quote: "The church has to stop treating mental illness and suicide as shameful secrets and start treating them as medical realities that God's people face.",
    bio: "Warren has spoken openly about her son Matthew's mental illness and suicide, and has led Saddleback Church in developing one of the most robust faith-based mental health ministry frameworks in American evangelicalism.",
  },
  {
    id: 2,
    name: "Dr. Matthew Stanford",
    role: "Neuroscientist, Author of Grace for the Afflicted",
    quote: "Every person who comes through the door of a church in mental health crisis has a body — and we must care for the body and the soul together.",
    bio: "Stanford's research and writing have been pivotal in helping the evangelical church understand mental illness as neurological reality rather than spiritual failure, reshaping pastoral responses to suicidality.",
  },
  {
    id: 3,
    name: "Anne Lamott",
    role: "Author, Traveling Mercies; Mental Health Advocate",
    quote: "Almost everything will work again if you unplug it for a few minutes — including you.",
    bio: "Lamott's unflinching honesty about her own depression, suicidal periods, and recovery has provided a model of survival that does not sanitize the darkness or pretend faith makes pain disappear.",
  },
  {
    id: 4,
    name: "Jennifer Marshall",
    role: "Suicide Attempt Survivor, Mental Health Speaker",
    quote: "I survived my attempt. What I needed afterward was not judgment — I needed people to sit with me without needing me to be okay yet.",
    bio: "Marshall speaks publicly about her own attempt and recovery, particularly the need for churches to change how they respond in the immediate aftermath — with presence rather than theology.",
  },
];

const practices = [
  {
    icon: "🚨",
    title: "If You Are in Crisis Right Now",
    text: "Call or text 988 (Suicide & Crisis Lifeline). Text HOME to 741741 (Crisis Text Line). Call 911. Go to your nearest emergency room. Do not face this moment alone — help is available and you are worth reaching for it.",
  },
  {
    icon: "🏥",
    title: "After a Hospitalization: Make a Safety Plan",
    text: "Work with your treatment team to complete a safety plan before discharge — including warning signs, coping strategies, people to call, and crisis contacts. Write it down. Share it with at least one trusted person.",
  },
  {
    icon: "🧠",
    title: "Engage Ongoing Mental Health Treatment",
    text: "A suicide attempt is a signal that the current level of care is not enough. Pursue ongoing therapy (DBT has strong evidence for chronic suicidality), medication evaluation, and regular check-ins with a psychiatrist or psychiatric nurse practitioner.",
  },
  {
    icon: "👤",
    title: "Tell One Trusted Person",
    text: "You do not have to tell everyone. But you must tell someone. Isolation after a suicide attempt dramatically increases risk. Choose one person — a friend, a pastor, a family member — who can be consistently present and non-judgmental.",
  },
  {
    icon: "🛡️",
    title: "Reduce Means Access",
    text: "Access to lethal means is one of the strongest predictors of attempt completion. Work with your household to secure or remove firearms, medications, and other means. This is not distrust — it is evidence-based harm reduction that saves lives.",
  },
  {
    icon: "⛪",
    title: "Find a Mental Health-Literate Faith Community",
    text: "Not every church is equipped for this journey. Look for communities that understand mental illness as medical reality, make space for ongoing struggle without demanding resolution, and have connections to clinical resources. You deserve a church that can hold your story.",
  },
];

const scriptures = [
  { verse: "Psalm 139:7–8", text: "\"Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.\"" },
  { verse: "Isaiah 43:2", text: "\"When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
  { verse: "Psalm 30:5", text: "\"Weeping may stay for the night, but rejoicing comes in the morning.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Jeremiah 29:11", text: "\"For I know the plans I have for you,' declares the LORD, 'plans to prosper you and not to harm you, plans to give you hope and a future.'\"" },
];

type SurvivorEntry = {
  id: string;
  date: string;
  today: string;
  safe: string;
  prayer: string;
};

export default function SuicideAttemptSurvivorPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SurvivorEntry[]>([]);
  const [today, setToday] = useState("");
  const [safe, setSafe] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_suicideattemptsurvivor_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!today.trim()) return;
    const entry: SurvivorEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today,
      safe,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_suicideattemptsurvivor_entries", JSON.stringify(updated));
    setToday(""); setSafe(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_suicideattemptsurvivor_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕯️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: PURPLE, marginBottom: "0.5rem" }}>
            Suicide Attempt Survivors & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For those who have survived a suicide attempt, and for the communities who love them — pastoral care without condemnation, theological honesty about pain, and resources for the long road of recovery.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              If you are in crisis: <strong>Call or text 988</strong> (Suicide & Crisis Lifeline) | <strong>Text HOME to 741741</strong> (Crisis Text Line) | <strong>Call 911</strong> or go to your nearest ER
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
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
              <div key={i} style={{ background: i === 0 ? "#1a0505" : CARD, border: `1px solid ${i === 0 ? "#8b1a1a" : BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: i === 0 ? "#ff8888" : PURPLE, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${PURPLE}` }}>
                <div style={{ color: PURPLE, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "0.75rem", padding: "0.75rem", background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8 }}>
                <p style={{ color: MUTED, fontSize: "0.8rem", margin: 0 }}>If you are in crisis right now, please call or text 988 before continuing. This journal is here for your recovery journey — not for moments of acute crisis.</p>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>How am I doing today, honestly?</label>
                <textarea value={today} onChange={e => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What does my safety look like right now? (Who can I call? What is my plan?)</label>
                <textarea value={safe} onChange={e => setSafe(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — or whatever words come, even if they're not prayer yet:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.today && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Today:</strong> {e.today}</p>}
                {e.safe && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Safety:</strong> {e.safe}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: PURPLE }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="qRxCuKBuJvU" title="Kay Warren on Mental Health and the Church" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Kay Warren: Mental Health, Suicide, and the Church's Calling</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Warren on her son Matthew's death, mental illness stigma in the church, and what faithful ministry looks like</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="I6V1VqIYoP0" title="Suicide Attempt Survivor Speaks to the Church" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>A Survivor Speaks: What the Church Got Right and Wrong</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>A survivor's perspective on what faith communities do that helps and what harms after a suicide attempt</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="XiCrniLQGYc" title="DBT Skills for Suicide Prevention — Dialectical Behavior Therapy" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>DBT for Suicidality: Evidence-Based Skills for Recovery</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>An introduction to Dialectical Behavior Therapy skills specifically designed for those who experience chronic suicidality</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="8Su5uo8PFIY" title="How Elijah's Crisis Points to God's Pastoral Care" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: PURPLE, margin: "0 0 0.25rem", fontSize: "1rem" }}>Elijah Under the Broom Tree: Scripture and Suicidality</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on 1 Kings 19 and what God's response to Elijah's death wish teaches the church about pastoral care</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
