"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Death Is Not the Final Word", verse: "John 11:25-26", text: "Jesus said: 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.' This is not a metaphor — it is the central claim of the Christian faith. A terminal diagnosis is a medical verdict about the body. It is not God's final word about you." },
  { title: "It Is Okay to Fear", verse: "Mark 14:33-36", text: "Jesus, facing His own death, was deeply distressed and troubled. He prayed: 'Abba, Father, everything is possible for you. Take this cup from me.' If the Son of God prayed for deliverance from death, you do not have to maintain stoic faith. Your fear is not a failure. It is honest. Bring it to God as Jesus did." },
  { title: "The Body Will Be Raised", verse: "1 Corinthians 15:42-44", text: "Paul describes the resurrection body as sown in weakness, raised in power; sown in dishonor, raised in glory; sown a natural body, raised a spiritual body. The disease that is taking your current body is not taking your final body. What is being lost in this illness will be surpassed — not replaced with a lesser thing, but raised into something more fully alive than you have ever been." },
  { title: "Finishing Well Is Its Own Witness", verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain. Paul wrote this from prison, facing potential execution. The person who faces terminal illness with grace, honesty, and trust in God leaves a theological legacy more powerful than almost anything they could preach or write. Dying well — not perfectly, but honestly and in faith — is one of the most profound forms of witness available." },
  { title: "God Will Be Present at the Moment of Death", verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me. The valley of the shadow of death is not a place God avoids. He walks it. His rod and His staff are with you through it. The moment of death, for the believer, is the moment of most immediate encounter with the God you have trusted." },
];

const voices = [
  { id: "ct", name: "Christopher de Vinck", role: "Author, Power of the Powerless", quote: "There is no better theology teacher than someone who is dying well. They know what matters. They know what doesn't. The church should sit at their feet.", bio: "de Vinck has written about death and dying with unusual grace, arguing that people facing terminal illness offer the rest of us a kind of clarity that prosperity and health obscure." },
  { id: "kb", name: "Kate Bowler", role: "Author, Everything Happens for a Reason", quote: "I want to live. I want to see what comes next. But I have also found that knowing I am dying changes what I am alive for in ways I did not expect. The ticking clock turns out to be a gift I would not have chosen.", bio: "Bowler, a Duke Divinity School professor diagnosed with stage IV colon cancer, has written one of the most honest and theologically rich accounts of facing terminal illness available. Her work refuses both denial and despair." },
  { id: "sm", name: "Sheryl Sandberg and Adam Grant", role: "Authors, Option B", quote: "We are all living Option B at some point. The goal is not to return to Option A — which is gone — but to kick the hell out of Option B.", bio: "While written from a secular perspective, Option B has been widely valued in Christian grief and terminal illness communities for its honest engagement with the experience of facing mortality, loss, and the rebuilding of meaning." },
];

const practices = [
  { icon: "✍️", title: "Write What You Want to Leave Behind", text: "Use this time — however much there is — to write the things you want your people to have: letters to children and grandchildren, the stories of your faith journey, what you have learned, what you are grateful for, what you wish you had done, what you believe. This is some of the most important writing you will ever do." },
  { icon: "🏥", title: "Engage Palliative Care Early", text: "Palliative care — focused on quality of life, pain management, and support through illness — is available from the moment of diagnosis, not just at the end. Many people access it too late. A palliative care team can dramatically improve quality of life and support both you and your family. Ask your oncologist or care team about palliative care referrals today." },
  { icon: "📋", title: "Get Your Affairs in Order — as an Act of Love", text: "Completing an advance directive, updating your will, naming healthcare proxy, and organizing your documents is one of the most loving things you can do for your family. It removes impossible decisions from people who are already grieving. Do not leave this undone. The National Hospice Foundation has free advance directive resources." },
  { icon: "🙏", title: "Do Not Manage Your Grief — Let People In", text: "The temptation to protect others from your fear, grief, and dying is understandable but often isolating. People who love you want to walk with you. Let them in — imperfectly, awkwardly, honestly. The relationships you allow to go deep in this season often become among the most sacred experiences of your life and theirs." },
];

const scriptures = [
  { verse: "John 11:25-26", text: "Jesus said to her, I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?" },
  { verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "1 Corinthians 15:54-55", text: "When the perishable has been clothed with the imperishable, and the mortal with immortality, then the saying that is written will come true: Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting?" },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
];

const videos = [
  { id: "ti_1", title: "Kate Bowler — When Everything Happens and You Have to Live With It", channel: "Everything Happens Podcast" },
  { id: "ti_2", title: "Dying Well — A Theology of Terminal Illness", channel: "The Gospel Coalition" },
  { id: "ti_3", title: "What to Say (and Not to Say) to Someone Who Is Dying", channel: "Focus on the Family" },
  { id: "ti_4", title: "Palliative Care and the Christian Faith — What Is It and When to Ask for It", channel: "Christian Healthcare Ministry" },
];

type TIEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function TerminalIllnessPage() {
  const [tab, setTab] = useState("theology");
  const [tiJournal, setTiJournal] = useState<TIEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_terminalillnessj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_terminalillnessj_entries", JSON.stringify(tiJournal)); } catch {}
  }, [tiJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setTiJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setTiJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Facing Death</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Terminal Illness</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, honest conversation, and community for those facing the end of life</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Support Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>National Hospice and Palliative Care Organization:</strong> nhpco.org — find hospice care<br />
            <strong>988 Lifeline:</strong> Call or text 988 — for emotional crisis, fear, or thoughts of suicide<br />
            <strong>GriefShare:</strong> griefshare.org — for family members anticipating loss
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Theology for the End of Life</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices on Facing Death Well</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Making the Most of the Time</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for Those Near the End</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. These words are for you — and for whoever you may choose to leave them to.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you feeling today — honestly?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am feeling..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you know to be true that you want to remember?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What I know to be true is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What do you most want to leave behind for those you love?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="What I most want to leave behind is..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {tiJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your words — right now, in this — are worth preserving.</p>}
            {tiJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>TODAY I FEEL</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I KNOW</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I LEAVE BEHIND</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
