"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Knowing the Doctrine and Feeling the Shame Are Different Things",
    verse: "Romans 8:1",
    text: "There is therefore now no condemnation for those who are in Christ Jesus. Chronic shame does not yield to correct doctrine alone. Many people can recite this verse fluently while the shame in their body tells them the opposite. Chronic shame is not primarily a knowledge problem — it is a deep formation problem. The gospel addresses it, but it works through relationship and experience, not just information."
  },
  {
    title: "Shame Was Not God's Idea",
    verse: "Genesis 2:25",
    text: "Adam and his wife were both naked, and they felt no shame. Shame entered after the fall — it was not woven into creation. The original human condition was nakedness without shame: full exposure without condemnation. This is the direction God is moving humanity through the gospel — not toward more covering, but toward the fearless openness of those who know they are loved."
  },
  {
    title: "God's Posture Toward the Ashamed Is Toward, Not Away",
    verse: "Luke 15:20",
    text: "While he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The son expected a servant's position. The father gave a robe and a feast. The movement in the parable is the father running — toward the ashamed one, not away from them. This is the direction of God."
  },
  {
    title: "Shame Is Healed Through Being Known, Not Just Forgiven",
    verse: "1 John 1:7",
    text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin. Walking in the light means being seen — not performing transparency, but genuine exposure. Chronic shame heals not only through the declaration of forgiveness but through the experience of being truly known and still loved."
  },
  {
    title: "The Spirit Is Not the Source of Chronic Shame",
    verse: "Romans 8:15",
    text: "The Spirit you received does not make you a slave again to fear, but you received the Spirit of adoption to sonship. By him we cry, Abba, Father. The chronic shame that tells you that you are fundamentally unworthy, fundamentally different, fundamentally unlovable — that is not the Spirit of adoption. It is the spirit of slavery. The two have different messages and different voices."
  }
];

const voices = [
  {
    id: "v1",
    name: "Curt Thompson",
    role: "Psychiatrist; Author, The Soul of Shame",
    quote: "Shame says: I am bad. Guilt says: I did something bad. Most people with chronic shame have confused the two their whole lives. The gospel addresses guilt directly and shame indirectly — but both need attending to.",
    bio: "Curt Thompson's The Soul of Shame is the definitive Christian text on shame — integrating interpersonal neurobiology with theology to explain why correct doctrine alone does not dissolve chronic shame. He explains the neural mechanisms of shame and the relational conditions for its healing."
  },
  {
    id: "v2",
    name: "Brené Brown",
    role: "Research professor; Author, Daring Greatly",
    quote: "Shame needs three things to grow: secrecy, silence, and judgment. Empathy is the antidote to shame. Not sympathy — empathy. The experience of being truly seen and still accepted is what interrupts shame's loop.",
    bio: "Brené Brown's research on vulnerability and shame, while not explicitly Christian, has been widely integrated by Christian therapists and theologians. Her empirical findings map directly onto the relational theology of shame healing that Curt Thompson articulates neurologically."
  },
  {
    id: "v3",
    name: "Dan Allender",
    role: "Founder, The Allender Center; Author, The Healing Path",
    quote: "Shame-based Christians are the most religious and the most miserable. They have learned to perform faith as the antidote to shame rather than receiving the love that actually undoes it.",
    bio: "Dan Allender addresses the specific form that shame takes in religious contexts — performance, perfectionism, the endless management of appearance — and the healing that comes from engaging actual wounds rather than spiritualizing away from them."
  },
  {
    id: "v4",
    name: "Henri Nouwen",
    role: "Author, The Return of the Prodigal Son; Life of the Beloved",
    quote: "The greatest trap in our life is not success, popularity, or power, but self-rejection. When we have come to believe in the voices that call us worthless and unlovable, then success, popularity, and power are easily perceived as attractive solutions.",
    bio: "Henri Nouwen's The Life of the Beloved is a sustained meditation on the voice that says 'You are my beloved child' — and what it means to actually receive that rather than intellectually affirming it while continuing to live from shame."
  }
];

const practices = [
  {
    icon: "👁️",
    title: "Let Yourself Be Known by a Safe Person",
    text: "Shame heals through being seen and not rejected — not through more correct theology. Find one person — a therapist, a spiritual director, a trusted friend — who will receive the actual you. Not the performing you. The experience of being known and still loved is the mechanism of healing."
  },
  {
    icon: "🧠",
    title: "Distinguish Shame From Guilt — They Have Different Cures",
    text: "Guilt says: I did something bad. It responds to confession and forgiveness. Shame says: I am something bad. It responds to being known and still accepted. If you have been applying confession to shame for years and nothing changes, you may be treating the wrong thing. A therapist can help you locate which is which."
  },
  {
    icon: "📖",
    title: "Read Curt Thompson's The Soul of Shame",
    text: "This single book has helped more Christians break through the pattern of knowing the gospel and not feeling it than perhaps any other recent Christian work. The neuroscience is accessible; the theology is rigorous; the practices are concrete."
  },
  {
    icon: "🙏",
    title: "Practice 'I Am Beloved' as a Somatic Prayer",
    text: "Say the words slowly, out loud, and notice where in your body resistance arises. The words 'I am beloved' should eventually feel like a homecoming rather than a lie. The distance between the truth of the statement and your felt sense of it is a map of the healing work."
  },
  {
    icon: "🔇",
    title: "Name the Shame Voice When It Speaks",
    text: "Shame tends to operate as ambient noise rather than identified speech. When you notice its characteristic message — 'you're too much,' 'you're not enough,' 'you don't deserve' — name it: 'There is the shame voice.' Naming interrupts automation. It does not make shame disappear, but it introduces a witness."
  },
  {
    icon: "⛪",
    title: "Seek a Community That Practices Actual Vulnerability",
    text: "Shame thrives in churches that reward performance and punish honesty. Find a community where real struggle is named in real conversations, not just in prayer requests. The embodied experience of a community that operates on grace rather than performance is irreplaceable."
  }
];

const scriptures = [
  { verse: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
  { verse: "Romans 8:15", text: "The Spirit you received does not make you a slave again to fear, but you received the Spirit of adoption to sonship. By him we cry, Abba, Father." },
  { verse: "Genesis 2:25", text: "Adam and his wife were both naked, and they felt no shame." },
  { verse: "1 John 1:7", text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin." },
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Zephaniah 3:17", text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." }
];

type ShameEntry = { id: string; date: string; voice: string; truth: string; belovedMoment: string };

export default function ChronicShameGospelPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ShameEntry[]>([]);
  const [voice, setVoice] = useState("");
  const [truth, setTruth] = useState("");
  const [belovedMoment, setBelovedMoment] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_chronicshame_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!voice.trim()) return;
    const entry: ShameEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), voice, truth, belovedMoment };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicshame_entries", JSON.stringify(updated));
    setVoice(""); setTruth(""); setBelovedMoment("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicshame_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: GREEN, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Identity & Inner Healing</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Chronic Shame & the Gospel</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When you know Romans 8:1 by heart and feel nothing. When you can explain grace to others and cannot receive it yourself. When the voice that says you are fundamentally unworthy is louder than every sermon you've heard. Chronic shame is not a doctrine problem. It requires a different kind of healing.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations that address shame specifically — not as a knowledge deficit but as a deep wound that the gospel addresses in a particular way.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Therapists, neuroscientists, and theologians who understand shame as something that requires more than correct doctrine to heal.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Spiritual and therapeutic practices that address shame at the level it actually operates — not just the level of information.</p>
            <div style={{ background: "#1a0d0d", border: "1px solid #5a2020", borderRadius: 8, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.5rem" }}>If shame has become a crisis</div>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Chronic shame is a significant risk factor for depression and suicidal ideation.<br />
                <strong style={{ color: TEXT }}>988 Suicide &amp; Crisis Lifeline</strong> — available 24/7.<br />
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the one who knows the doctrine and needs to receive it — slowly, with patience, in the company of the God who rejoices over them.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space to name the shame voice, counter it with truth, and record moments of being known. Entries stay on your device only.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: GREEN }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What did the shame voice say to me today?</label>
                <textarea value={voice} onChange={e => setVoice(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What does God say in response? (even if it doesn't feel true yet)</label>
                <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>Did I experience being known and still accepted today — however small?</label>
                <textarea value={belovedMoment} onChange={e => setBelovedMoment(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.voice && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>SHAME VOICE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.voice}</p></div>}
                  {e.truth && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>GOD'S TRUTH</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.truth}</p></div>}
                  {e.belovedMoment && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: GREEN, fontSize: "0.8rem" }}>BELOVED MOMENT</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.belovedMoment}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on shame, the gospel, and the healing that comes through being known rather than just forgiven.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Soul of Shame: Curt Thompson</div>
              <VideoEmbed videoId="mC-zw0zCCtg" title="The Soul of Shame: Curt Thompson" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Shame and the Gospel: Why Information Isn't Enough</div>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Shame and the Gospel: Why Information Isn't Enough" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>You Are the Beloved: Henri Nouwen</div>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="You Are the Beloved: Henri Nouwen" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Vulnerability and the Healing of Shame</div>
              <VideoEmbed videoId="NnGBhG03g4M" title="Vulnerability and the Healing of Shame" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
