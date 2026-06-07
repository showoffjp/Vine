"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Envy Is Rooted in the Lie That God Has Withheld Good From You", verse: "Genesis 3:5", text: "For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil. The serpent's temptation was precisely a comparison: you could be like God, but God is keeping you from it. All envy is essentially this same accusation against the goodness of God — that he has given something better to someone else and withheld it from you unjustly. When you look at another's marriage, success, beauty, calling, or children and feel the bitter pull of envy, you are essentially agreeing with the serpent's lie about God." },
  { title: "Social Comparison Is the Engine of Envy — And It Runs on Ingratitude", verse: "Hebrews 13:5", text: "Keep your lives free from the love of money and be content with what you have, because God has said, 'Never will I leave you; never will I forsake you.' The writer to the Hebrews names contentment as the alternative to covetousness — and grounds it not in what you have but in who has you. I will never leave you. The comparison engine that drives envy is only silenced by presence — by the reality that what you have in God is not upgradeable by any possession or circumstance another person holds. The comparison always loses this contest." },
  { title: "The Older Brother's Envy Shows That Envy Is Also About Receiving Grace as Injury", verse: "Luke 15:28-29", text: "The older brother became angry and refused to go in. So his father went out and pleaded with him. But he answered his father, 'Look! All these years I've been slaving for you and never disobeyed your orders. Yet you never gave me even a young goat so I could celebrate with my friends.' The older brother's envy is theological: it experienced the father's grace toward the prodigal as an injury to himself. This is the deepest form of envy — not wanting what someone else has, but resenting that they have it. The cure is not acquiring what they have but entering the father's joy yourself." },
  { title: "Envy in the Body of Christ Is a Theological Contradiction", verse: "1 Corinthians 12:26", text: "If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it. Paul's body theology contains a direct diagnosis and cure for envy: in the body of Christ, there is no zero-sum distribution of honor or blessing. Another member's gift, flourishing, or recognition does not diminish yours. The envy that cannot rejoice with those who rejoice is a failure of body theology — a refusal to believe that you and the person you envy are genuinely one body, that their honor is yours to share." },
  { title: "Envy's Cure Is Gratitude Practiced as a Spiritual Discipline", verse: "Philippians 4:11", text: "I have learned, in whatsoever state I am, therewith to be content. Paul says he learned contentment — it was not his natural state but an acquired skill. The practice of gratitude — specifically naming what is good about your own life and what God has given you, not in comparison to anyone else — is the spiritual discipline that directly counteracts envy's logic. Gratitude interrupts the comparison and names what is actually present. Over time, practiced gratitude rewires the tendency to compare." },
];

const voices = [
  { id: "rb", name: "Rebecca DeYoung", role: "Author, Glittering Vices; Calvin University", quote: "Envy is a sorrow at another's good, rooted in the perception that their good diminishes ours. In a world where comparison is constant — social media has made it inescapable — envy is the spiritual disease of our time. The cure is not optimism or willpower but a theological reordering: learning to see another's blessing as a reason for your own joy, because you share a Father who gives abundantly.", bio: "DeYoung's treatment of the seven deadly sins — particularly envy — is the most theologically rich treatment available in a modern evangelical context. Her ability to trace envy's roots into the soul and name its specific cure without moralism makes her the essential voice on this topic." },
  { id: "km", name: "Kyle Idleman", role: "Author, Gods at War; Senior Pastor, Southeast Christian Church", quote: "Envy is one of the clearest signs that something has become an idol: we only envy what we worship. The person who envies another's beauty has made beauty an idol. The person who envies another's career has made success an idol. The cure for envy is not suppression but substitution — the discovery that God himself is actually better than whatever you're envying someone else's possession of.", bio: "Idleman's pastoral insight into the connection between idolatry and envy is particularly accessible and practically useful. His ability to name what we're actually worshipping in our comparisons helps people understand the theological anatomy of their own envy rather than just experiencing its symptoms." },
  { id: "ap", name: "Andy Crouch", role: "Author, The Life We're Looking For; Culture Maker", quote: "Social media has turned comparison into a perpetual infrastructure of everyday life. We are now exposed to more carefully curated presentations of other people's best moments than any human culture in history. The spiritual practices that sustain flourishing in this environment require deliberate counter-formation — choosing what you look at, how long, and with what interpretive lens. Envy is the predictable product of an unmanaged attention diet.", bio: "Crouch's work on technology and human flourishing provides the cultural analysis for understanding why comparison and envy are so intensified in the present moment. His practical wisdom about attention management, digital habits, and the formation they produce is essential for anyone trying to address envy in a social media age." },
];

const practices = [
  { icon: "📵", title: "Identify Your Specific Comparison Triggers and Limit Exposure", text: "Social media platforms are comparison machines by design — optimized to show you curated highlights of others' lives. Identifying which specific feeds, accounts, or platforms most reliably produce envy in you is the first practical step. Unfollowing, muting, or time-limiting those sources is not avoidance — it is boundary-setting around a proven trigger. You are not required to feast on comparison fuel and then battle envy's results." },
  { icon: "🙏", title: "Practice Gratitude for Specific Gifts — Not Generic Ones", text: "Gratitude practice is effective when it is specific, not generic. Not 'I'm grateful for my health' but 'I'm grateful for being able to walk to the mailbox today without pain.' The more concrete and specific the gratitude, the more effective it is at interrupting the comparison engine. Consider a daily practice of naming three specific goods in your own life — goods that you notice you are not comparing to someone else's." },
  { icon: "💬", title: "Confess Envy as Sin — Not Just Emotion", text: "Naming envy as sin rather than merely as feeling changes your relationship to it. James says: 'Where you have envy and selfish ambition, there you find disorder and every evil practice' (James 3:16). Bringing envy into the light — to God in confession, and when appropriate to a trusted person — begins to dissolve the shame that makes it persist in secret. The envy you confess has less power than the envy you explain away." },
  { icon: "🎉", title: "Practice Deliberate Rejoicing With Those Who Rejoice", text: "Romans 12:15 commands: rejoice with those who rejoice. This is counter-intuitive when envy is present — the envious person instinctively mourns when others prosper. The practice of deliberate, verbal celebration of others' good — congratulating someone whose achievement triggers envy in you, praying for their continued flourishing — is the direct behavioral antidote. It restructures the heart by first restructuring the action." },
  { icon: "✝️", title: "Meditate on What You Actually Have in God", text: "Envy's logic assumes a scarcity that does not exist in the kingdom. The meditation that counters envy most directly is not 'I have enough things' but 'I have God himself — the one thing that cannot be taken, increased by comparison, or improved upon.' Psalm 73:25-26: 'Whom have I in heaven but you? And earth has nothing I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever.' This is the comparison that ends all comparisons." },
];

const scriptures = [
  { verse: "Proverbs 14:30", text: "A heart at peace gives life to the body, but envy rots the bones." },
  { verse: "1 Corinthians 13:4", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
  { verse: "Philippians 4:11", text: "I have learned, in whatsoever state I am, therewith to be content." },
  { verse: "Psalm 73:25-26", text: "Whom have I in heaven but you? And earth has nothing I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
  { verse: "James 3:16", text: "For where you have envy and selfish ambition, there you find disorder and every evil practice." },
];

type CEEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ComparisonEnvyPage() {
  const [tab, setTab] = useState("theology");
  const [ceJournal, setCeJournal] = useState<CEEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_comparisonenvyj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_comparisonenvyj_entries", JSON.stringify(ceJournal)); } catch {}
  }, [ceJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setCeJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setCeJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Sin &amp; Soul Formation</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Comparison &amp; Envy</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When comparison corrodes contentment — the theology of envy, the spiritual discipline of gratitude, and the joy that breaks the comparison cycle.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="Who or what am I comparing myself to, and what does that comparison feel like?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What specific good in my own life am I grateful for right now?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One way I can rejoice with someone whose good has triggered envy in me" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ceJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ceJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Comparison:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Gratitude:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Action:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection — Brené Brown on Comparison", channel: "TED / Brené Brown", description: "Brown's research on shame and comparison — how the comparison trap thrives in secrecy and is healed by wholehearted living, and why vulnerability is the antidote to the curated self-presentation that drives envy." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame — Curt Thompson", channel: "Curt Thompson", description: "Thompson integrates interpersonal neurobiology and biblical theology to explain the shame-envy cycle — why comparison feels so compelling, and what the healing process looks like over time in community." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God inverts every worldly standard of comparison — success, beauty, status — and offers a framework where another's blessing is genuinely reason for your own joy." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "Piper on how joy in God — not joy in being better than others — is the foundation for a flourishing life. The theological alternative to comparison that does not depend on anyone else's diminishment." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
