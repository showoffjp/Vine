"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Knows What It Is to Lose a Son", verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son. This is not merely a theological proposition about atonement — it is a statement about what God endured. The Father watched His Son die. He did not intervene. Whatever you are feeling in the loss of your child, you are not crying out to a God who is unmoved by the death of a child." },
  { title: "David's Grief Was Real and Visible", verse: "2 Samuel 18:33", text: "When David was told that his son Absalom had been killed, he went up to the room over the gateway and wept. As he went, he said: 'O my son Absalom! My son, my son Absalom! If only I had died instead of you.' This is the king of Israel — the man after God's own heart — weeping and wailing without restraint. There is no performance of faith here. There is just a father's grief." },
  { title: "Your Child Was Known Before They Were Born', verse: 'Psalm 139:16", text: "God knew your child before they were formed. He knew the days of their life before any of them came to be. Your child was fully known, fully seen, fully loved by God — at every age, for every moment of their life. They are not lost to God. They are held by the One who formed them." },
  { title: "Resurrection Is the Answer to the Worst Thing", verse: "1 Corinthians 15:54-55", text: "Death has been swallowed up in victory. Where, O death, is your victory? The resurrection of Jesus is the direct confrontation of the worst thing that can happen. It does not promise that death will not hurt. It promises that death does not win. The child who died in Christ — or who died before the age of accountability — is not gone. They are alive in the presence of the God who made them." },
  { title: "Grief This Deep Is Not a Spiritual Problem", verse: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering? This is the language of Lamentations — the most raw grief in the canon. Your grief at the loss of your child does not need to be managed, shortened, or dressed up in theological language. It is allowed to be exactly as devastating as it is." },
];

const voices = [
  { id: "mv", name: "Mark Vroegop", role: "Author, Dark Clouds, Deep Mercy", quote: "Lament is not the absence of faith. It is faith expressing itself honestly in the presence of terrible loss. When you bring your devastation to God — when you cry out 'Why?' — you are doing what the Psalms model. That is faith.", bio: "Vroegop and his wife lost a daughter to stillbirth. His book Dark Clouds, Deep Mercy is a theologically careful and personally honest treatment of biblical lament, widely used by parents who have lost children at any age." },
  { id: "nc", name: "Nicholas Wolterstorff", role: "Author, Lament for a Son", quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see.", bio: "Wolterstorff, a distinguished Reformed philosopher at Yale, wrote Lament for a Son after his 25-year-old son Eric died in a mountain climbing accident. The book is one of the most theologically profound accounts of child loss available, written from the inside of the grief." },
  { id: "gs", name: "GriefShare", role: "Grief Support Ministry", quote: "The grief over the death of a child is one of the most intense forms of loss a human being can experience. It violates the expected order of things. It has no cultural script. And it lasts far longer than those around you expect.", bio: "GriefShare (griefshare.org) has specific curriculum for parents who have lost children, recognizing that child loss is categorically different from other forms of grief in its intensity, duration, and the absence of cultural support structures." },
];

const practices = [
  { icon: "🤝", title: "Find Parents Who Have Lost Children", text: "The most healing community for bereaved parents is other bereaved parents. Organizations like The Compassionate Friends (compassionatefriends.org) provide peer support specifically for parents who have lost children — at any age, from any cause. Being understood without explanation changes everything." },
  { icon: "🙏", title: "Do Not Protect God From Your Anger", text: "Many bereaved parents feel rage toward God that they are afraid to express. But the Psalms model exactly this: 'You have rejected and humbled us; you no longer go out with our armies' (Ps 44:9). Bring the rage. God can hold it. The relationship is not threatened by your honest fury. The relationship is threatened when the fury has nowhere to go." },
  { icon: "📋", title: "Resist Others' Timelines for Your Grief", text: "The grief over a child's death does not resolve in months or years. Research shows that bereaved parents continue to experience intense grief for years, with many saying they never fully 'recovered' but learned to carry the grief differently. Do not accept the unspoken message that you should be over it. You will not be over it. You will learn to live alongside it." },
  { icon: "💆", title: "Seek a Trauma-Informed Grief Therapist", text: "The death of a child is traumatic as well as devastating. Many bereaved parents develop PTSD alongside grief disorder. Seek a therapist with experience in both trauma and complicated grief — specifically someone who has worked with bereaved parents. The intersection of trauma and grief requires specific expertise." },
];

const scriptures = [
  { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  { verse: "2 Samuel 18:33", text: "The king was shaken. He went up to the room over the gateway and wept. As he went, he said: O my son Absalom! My son, my son Absalom! If only I had died instead of you — O Absalom, my son, my son!" },
  { verse: "Psalm 139:16", text: "Your eyes saw my unformed body; all the days ordained for me were written in your book before one of them came to be." },
  { verse: "Lamentations 3:32-33", text: "Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction or grief to anyone." },
  { verse: "1 Corinthians 15:54", text: "When the perishable has been clothed with the imperishable, and the mortal with immortality, then the saying that is written will come true: Death has been swallowed up in victory." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { id: "dc_1", title: "Nicholas Wolterstorff — Lament for a Son, A Father's Story", channel: "Calvin University" },
  { id: "dc_2", title: "Dark Clouds, Deep Mercy — Mark Vroegop on Child Loss and Lament", channel: "The Gospel Coalition" },
  { id: "dc_3", title: "The Compassionate Friends — A Parent Who Has Lost a Child", channel: "The Compassionate Friends" },
  { id: "dc_4", title: "Why Does God Allow Children to Die? A Theological Conversation", channel: "Desiring God" },
];

type DCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function DeathOfChildPage() {
  const [tab, setTab] = useState("theology");
  const [dcJournal, setDcJournal] = useState<DCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_deathofchildj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_deathofchildj_entries", JSON.stringify(dcJournal)); } catch {}
  }, [dcJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setDcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setDcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Devastating Loss</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Death of a Child</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology and community for parents navigating the most devastating loss there is</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Support Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>The Compassionate Friends:</strong> compassionatefriends.org — peer support for bereaved parents<br />
            <strong>GriefShare:</strong> griefshare.org — local support groups<br />
            <strong>988 Lifeline:</strong> Call or text 988 — 24/7 crisis and emotional support
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>God Who Knows This Grief</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices of Those Who Have Been There</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Navigating the Unnavigable</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for the Darkest Valley</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Grief Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. There are no right words here. Any words are the right words.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you feeling today?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am..." rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you know about your child that you want to remember?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What I want to remember about them is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>Who or what is helping you carry this today?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="What is helping me carry this is..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {dcJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your child deserves to be remembered. Begin when you are ready.</p>}
            {dcJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>TODAY I AM</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>REMEMBERING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT IS HELPING</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
