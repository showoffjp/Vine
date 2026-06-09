"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Anger Is Not the Sin — What You Do With It Is",
    verse: "Ephesians 4:26",
    text: "Be angry and do not sin. Paul does not say 'do not be angry.' He assumes anger will happen and addresses what follows it. The Bible does not treat anger as inherently sinful. Chronic, destructive anger is not about having the emotion — it is about what has been done with it and what has fed it over time."
  },
  {
    title: "Unprocessed Grief Becomes Anger",
    verse: "Genesis 4:6",
    text: "God asks Cain: 'Why are you angry, and why has your face fallen?' The question assumes that anger is the surface, not the root. Many Christians living with chronic anger are living with chronic grief, chronic disappointment, or chronic pain that was never given a name or a place to go. Anger is often grief that had nowhere else to go."
  },
  {
    title: "God's Anger Is the Model, Not the Permission Slip",
    verse: "Psalm 103:8",
    text: "The Lord is merciful and gracious, slow to anger and abounding in steadfast love. Divine anger is always proportionate, always aimed at injustice, and always held within steadfast love. When human anger becomes chronic and disproportionate, it has ceased to resemble God's anger and become something else — often a wound wearing anger's clothes."
  },
  {
    title: "The Tongue Is Shaped by the Heart",
    verse: "Matthew 12:34",
    text: "Out of the overflow of the heart the mouth speaks. Chronic angry speech is a symptom of what lives in the heart — not primarily a discipline problem. Behavior management of the tongue, without attending to what drives it, is the Pharisee's solution: cleaning the outside of the cup."
  },
  {
    title: "Sanctification Includes Emotional Renovation",
    verse: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewing of your mind. Transformation is not willpower applied to behavior. It is the renovation of patterns of thought, reaction, and perception — patterns often formed in childhood and maintained for decades. God's sanctifying work includes this deep interior work."
  }
];

const voices = [
  {
    id: "v1",
    name: "Gary Chapman",
    role: "Author, Anger: Handling a Powerful Emotion in a Healthy Way",
    quote: "Anger that is not processed becomes a habit. And habits become character. The good news is that character formed by anger can also be reformed — but it requires honest self-examination, not just better self-control.",
    bio: "Gary Chapman, best known for The Five Love Languages, has also written extensively on anger as a pastoral and relational challenge. His approach is practical and spiritually grounded, and he addresses chronic anger as a learned pattern that can be unlearned."
  },
  {
    id: "v2",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, Bold Love",
    quote: "Anger is often a secondary emotion — the noise on top of the pain underneath. You cannot manage anger effectively without attending to the pain it is covering.",
    bio: "Dan Allender consistently traces surface behaviors to their deeper wounds. His work helps Christians understand that chronic anger is frequently a response to harm, injustice, or unmet longing that has never been honestly addressed."
  },
  {
    id: "v3",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, The Soul of Shame",
    quote: "The brain under chronic anger is a brain in a threat state. Spiritual disciplines alone will not regulate the nervous system — you need both spiritual formation and relational re-wiring.",
    bio: "Curt Thompson's integration of neuroscience and theology is essential for chronic anger, because many angry Christians have tried harder with spiritual tools and found it insufficient. He explains why nervous system regulation and relational safety are prerequisites for the transformation they seek."
  },
  {
    id: "v4",
    name: "Harriet Lerner",
    role: "Psychologist; Author, The Dance of Anger",
    quote: "Anger is a signal, and one worth listening to. It tells you something is wrong — with the relationship, the situation, or the way you've been treated. The question is not how to get rid of it, but what it is trying to tell you.",
    bio: "Harriet Lerner's The Dance of Anger is a foundational text on anger in relationships. Though not explicitly Christian, her framework is widely used by Christian therapists because it treats anger as information rather than a character flaw."
  }
];

const practices = [
  {
    icon: "🔍",
    title: "Get Curious About What's Under the Anger",
    text: "Before asking 'how do I stop being angry,' ask 'what is the anger protecting, or pointing to?' Common answers: grief, shame, powerlessness, loneliness, injustice. A therapist trained in EMDR or internal family systems can help you locate the answer."
  },
  {
    icon: "🧠",
    title: "Learn Nervous System Regulation",
    text: "Chronic anger is often a nervous system pattern, not just a spiritual one. Skills like box breathing (4 counts in, hold, out, hold), cold water on the face (activates the dive reflex), and regular exercise train the body toward regulation. These are not alternatives to prayer — they are preparation for it."
  },
  {
    icon: "📋",
    title: "Track Triggers With Honesty",
    text: "Keep a simple anger log for two weeks: what triggered it, what you felt in your body, what story your mind told, what you did. Patterns will emerge. Patterns can be addressed. Generic anger management doesn't work — your specific patterns need your specific attention."
  },
  {
    icon: "🗣️",
    title: "Repair After Every Outburst — Every Time",
    text: "Chronic anger damages relationships through accumulation. Every repair — 'I was wrong to speak to you that way; what I was actually feeling was...' — rebuilds trust and interrupts the pattern. No repair is too small. No accumulation of repairs is wasted."
  },
  {
    icon: "🙏",
    title: "Bring the Anger to God Directly",
    text: "The Psalms are full of furious, accusatory prayer. Lament prayer — bringing the actual anger to God rather than the cleaned-up version — is a spiritual practice, not a failure. God can handle your honest rage. He is already aware of what you're carrying."
  },
  {
    icon: "👥",
    title: "Consider Anger Management Therapy",
    text: "If chronic anger is damaging your relationships, seek professional help. The American Association of Anger Management Providers (aaamp.org) and Psychology Today's therapist directory can help you find a specialist. There is no Christian virtue in white-knuckling something treatable."
  }
];

const scriptures = [
  { verse: "Ephesians 4:26-27", text: "Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil." },
  { verse: "James 1:19-20", text: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God." },
  { verse: "Proverbs 29:11", text: "A fool gives full vent to his spirit, but a wise man quietly holds it back." },
  { verse: "Psalm 103:8", text: "The Lord is merciful and gracious, slow to anger and abounding in steadfast love." },
  { verse: "Genesis 4:6-7", text: "The Lord said to Cain, 'Why are you angry, and why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door.'" },
  { verse: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." }
];

type AngerEntry = { id: string; date: string; trigger: string; underneath: string; repair: string };

export default function ChronicAngerChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AngerEntry[]>([]);
  const [trigger, setTrigger] = useState("");
  const [underneath, setUnderneath] = useState("");
  const [repair, setRepair] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_chronicangerj_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const entry: AngerEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger, underneath, repair };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicangerj_entries", JSON.stringify(updated));
    setTrigger(""); setUnderneath(""); setRepair("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicangerj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Emotional Struggle & Faith</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Chronic Anger & Christian Faith</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When the anger keeps coming back. When you've repented a hundred times and it's still there. When the people you love most bear the weight of a rage you don't fully understand. There is something under the anger. God is interested in what it is.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations that help Christians understand chronic anger not as a moral failure alone, but as a wound that needs healing.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Psychologists and theologians who help Christians understand the roots and the path through chronic anger.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Spiritual, neurological, and relational practices that address chronic anger from the inside out.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>If anger has become violent</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                If anger has become physical violence or threats: <strong style={{ color: TEXT }}>National Domestic Violence Hotline: 1-800-799-7233</strong>.<br />
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — also for those afraid of their own anger.<br />
                <strong style={{ color: TEXT }}>Crisis Text Line: Text HOME to 741741</strong>
              </p>
            </div>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses on anger, transformation, and the slow work of God in the human heart.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for tracking and understanding your anger. Entries remain on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What triggered my anger recently?</label>
                <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What might be underneath the anger? (grief, shame, fear, injustice...)</label>
                <textarea value={underneath} onChange={e => setUnderneath(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What repair do I need to make? Or what do I need from God?</label>
                <textarea value={repair} onChange={e => setRepair(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your anger log will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.trigger && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>TRIGGER</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.trigger}</p></div>}
                  {e.underneath && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>UNDERNEATH</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.underneath}</p></div>}
                  {e.repair && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>REPAIR/NEED</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.repair}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on anger, emotional healing, and the transformation God works in the human heart.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Under the Anger: What Drives It and What Heals It</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Under the Anger: What Drives It and What Heals It" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Shame, Anger, and the Nervous System: Curt Thompson</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Shame, Anger, and the Nervous System: Curt Thompson" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Emotional Transformation and Spiritual Formation</div>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Emotional Transformation and Spiritual Formation" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Be Angry and Sin Not: A Biblical View of Anger</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Be Angry and Sin Not: A Biblical View of Anger" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
