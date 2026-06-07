"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "There Is No Condemnation", verse: "Romans 8:1", text: "The most important thing a woman healing from abortion needs to know is that the gospel is true: there is therefore now no condemnation for those who are in Christ Jesus. This is not a sentiment — it is the declaration of the most authoritative book in the universe. The blood of Christ covers every sin that is confessed and brought to Him, without exception." },
  { title: "God Knew the Child — and Still Knows You", verse: "Psalm 139:13-16", text: "Abortion ends a life that God knew and formed. This reality must be faced, not minimized. But the God who knew that child also knows you — with the same thoroughness, the same love, the same personal attention. You do not stand outside of that love. You stand within it, even in the middle of grief." },
  { title: "Forgiveness Is Not Forgetting", verse: "Isaiah 43:25", text: "God says, 'I, even I, am he who blots out your transgressions for my own sake, and I will not remember your sins.' This is not amnesia — God cannot fail to know. It is a legal declaration: the record is expunged. The grief may remain; the condemnation does not. These are two different things." },
  { title: "Shame Was Placed on the Wrong Person", verse: "Isaiah 61:7", text: "The prophet announces that God's people will receive double honor instead of shame. Shame that was taken on in moments of fear, pressure, or desperation — often in circumstances not fully of your choosing — does not have the final word. You are not defined by the worst moment of your worst year." },
  { title: "Grief Is Right and Holy", verse: "Matthew 5:4", text: "Blessed are those who mourn — they will be comforted. Mourning the loss of a child you chose to abort is not contradictory or confusing. It is the right response to the loss of a real person. Grief does not mean you do not believe in forgiveness. It means you loved what you lost." },
];

const voices = [
  { id: "rn", name: "Rachel's Vineyard", role: "Post-Abortion Healing Ministry", quote: "The wound from abortion does not always surface immediately. Sometimes it comes years later in grief, nightmares, numbness, or a deep sense that something is broken. This is not weakness — it is a normal response to a profound loss.", bio: "Rachel's Vineyard Ministries, founded by Dr. Theresa Burke, offers retreats and support groups specifically for women (and men) experiencing post-abortion grief. Operating in over 80 countries, it is one of the most widely trusted post-abortion healing ministries in the world, with a distinctly Catholic but widely ecumenical approach." },
  { id: "sm", name: "Sydna Masse", role: "Author, Her Choice to Heal", quote: "Healing from abortion required me to feel the grief I had been running from for years — and to let God meet me in it rather than fix me out of it.", bio: "Masse is founder of Ramah International, a Christian post-abortion healing ministry. Her book Her Choice to Heal is a widely used resource for women processing post-abortion grief from a Christ-centered perspective, offering both personal story and practical healing steps." },
  { id: "cb", name: "Carolyn McCulley", role: "Author, Did I Kiss Marriage Goodbye?", quote: "The church must become a place where women can bring the full weight of their past, including abortion, and find the same grace that Scripture promises — not a conditional welcome, but the welcome of the father running toward the prodigal.", bio: "Christian voices working in post-abortion healing consistently identify the church as either the greatest obstacle or greatest resource for healing. Churches that have explicitly created space for post-abortion grief find that women who had hidden their histories for decades finally find freedom." },
];

const practices = [
  { icon: "🙏", title: "Bring It Specifically to God", text: "Vague confession rarely produces deep healing. Come to God with the specific circumstances, the specific grief, the specific fear. Tell Him what happened — He already knows, but the act of honest bringing opens the door to His comfort. Use the lament psalms as a model: raw, specific, honest." },
  { icon: "👥", title: "Find a Post-Abortion Support Group", text: "Rachel's Vineyard (rachelsvineyard.org) offers retreats. Abortion Recovery InterNational (abortionrecovery.org) provides counseling referrals. Project Rachel (hopeafterabortion.com) offers confidential help from Catholic Charities. You do not have to carry this alone." },
  { icon: "📖", title: "Read and Pray Through Psalm 51", text: "David wrote Psalm 51 after committing adultery and orchestrating murder — two sins that felt unforgivable. The psalm is a model for approaching God after serious sin: honest acknowledgment, appeal to God's mercy, request for clean heart. The God who heard David hears you." },
  { icon: "⏳", title: "Give Grief Time and Space", text: "Post-abortion grief often surfaces years or even decades after the abortion. This does not mean healing is failing — it means grief is delayed. Do not rush yourself. Do not decide you should be over it. Healing is not linear. Allow it to move at its own pace under God's care." },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Isaiah 1:18", text: "Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted." },
];

const videos = [
  { id: "ah_1", title: "Healing After Abortion — The Grace of God Is Enough", channel: "Rachel's Vineyard" },
  { id: "ah_2", title: "Her Choice to Heal — An Interview with Sydna Masse", channel: "Ramah International" },
  { id: "ah_3", title: "Romans 8 and Post-Abortion Healing", channel: "Desiring God" },
  { id: "ah_4", title: "What Does the Church Owe Women Who Have Had Abortions?", channel: "The Gospel Coalition" },
];

type AHEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AbortionHealingPage() {
  const [tab, setTab] = useState("theology");
  const [ahJournal, setAhJournal] = useState<AHEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_abortionhealingj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_abortionhealingj_entries", JSON.stringify(ahJournal)); } catch {}
  }, [ahJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAhJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAhJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Healing and Forgiveness</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Healing After Abortion</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Grace, grief, and the gospel for those carrying an unspoken wound</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Confidential Support Available</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>Project Rachel Helpline:</strong> 1-888-456-HOPE (4673) — confidential, compassionate, free<br />
            <strong>Rachel's Vineyard Retreats:</strong> rachelsvineyard.org — post-abortion healing in 80+ countries<br />
            <strong>988 Lifeline:</strong> Call or text 988 — if you are in emotional crisis
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>The Gospel Is Bigger Than Your Worst Moment</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices Walking This Path With You</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Steps Toward Healing</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Healing Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Healing Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser only. No account, no sharing.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you carrying today?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am carrying..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth can you receive from God today?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="One thing I am receiving..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>One step toward healing today</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Today I will take the step of..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ahJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Healing begins with one honest word to God.</p>}
            {ahJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>CARRYING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>RECEIVING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
