"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Jesus Wept, Expressed Fear, and Asked for Help", verse: "John 11:35", text: "The shortest verse in the Bible — Jesus wept — describes Jesus publicly grieving in front of others. He also sweat blood in the garden (Luke 22:44), asked His disciples to stay awake with Him, and cried out on the cross. The most fully human and fully divine man in history expressed grief, fear, longing for support, and anguish. Men who express emotion are following His example, not defying masculinity." },
  { title: "Strength Is Not the Absence of Need", verse: "2 Corinthians 12:10", text: "Paul boasts in his weaknesses, so that Christ's power may rest on him. The Christian understanding of strength is fundamentally different from the cultural one: true strength is not needing no one, feeling nothing, and carrying everything alone. It is knowing where your actual resources come from and being honest when they run low." },
  { title: "David Lamented Openly and Publicly", verse: "Psalm 22:1-2", text: "David — described as a man after God's own heart, the greatest king of Israel, the warrior who killed Goliath — wrote some of the most raw and anguished poetry in human history: 'My God, my God, why have you forsaken me?' The Psalms are the emotional record of a man who was not afraid to bring his interior life to God." },
  { title: "Iron Sharpens Iron — You Were Made for Relationship", verse: "Proverbs 27:17", text: "Men are made for community and mutual formation — not solo performance. The isolation of men in the modern West is both a personal and spiritual crisis. The biblical vision of men is not the lone ranger; it is the band of brothers, the iron sharpening iron, the covenant friendship of David and Jonathan, the Jesus who called twelve men into deep daily community." },
  { title: "Seeking Help Is Wisdom, Not Weakness", verse: "Proverbs 11:14", text: "In an abundance of counselors there is safety. Seeking therapy, mentorship, or support is not a sign that you have failed — it is what wise people do. The man who refuses help is not strong; he is proud. Pride kills. Wisdom asks for help before the crisis and during it." },
];

const voices = [
  { id: "ew", name: "Ed Welch", role: "CCEF, Author of Running Scared", quote: "Men in our culture have been trained to see emotion as incompetence. But God designed the human soul with the full range of emotion because He wanted us to know His heart. You cannot be fully known by God or by others if you will not feel.", bio: "Welch's work on fear, depression, and anxiety from a Christian counseling perspective has been particularly valuable for men who frame their emotional struggles as spiritual failures rather than human experiences God can meet." },
  { id: "mr", name: "Mark Batterson", role: "Author, All In", quote: "Real men cry. Real men ask for help. Real men go to therapy. Real men confess their sins to one another. The cultural definition of manhood is a lie. The biblical one sets you free.", bio: "Batterson has spoken directly to men about the cultural barriers to seeking help and the biblical counter-vision of vulnerable strength. His work challenges men to redefine masculinity around faithfulness, honesty, and community rather than stoic self-sufficiency." },
  { id: "tk", name: "Terry Real", role: "Therapist, Author of I Don't Want to Talk About It", quote: "Men in our culture suffer from covert depression — a hidden form of the disorder masked by anger, busyness, substance use, and performance. They do not recognize it as depression. Their families do not recognize it as depression. But it is.", bio: "Real's work on male depression and what he calls 'covert depression' has been transformative for men and the women who love them. He identifies the cultural conditioning that prevents men from recognizing and treating depression — and the cost of leaving it untreated." },
];

const practices = [
  { icon: "💬", title: "Make One Honest Phone Call", text: "The first step is almost always the hardest. Call a friend, a pastor, a family member, or a therapist and say: 'I am not doing well and I need to talk.' You do not need to have the words fully formed. You do not need to have it figured out. You just need to break the silence. Everything changes when you stop carrying this alone." },
  { icon: "🧠", title: "See a Doctor or Therapist — This Is Maintenance", text: "Men are far less likely than women to seek mental health treatment, and far more likely to die by suicide. Getting help is not the beginning of crisis — it is prevention. Men who are already struggling are often months or years past the point when early treatment would have been easiest. Think of therapy as maintenance, not rescue." },
  { icon: "👥", title: "Build Real Brotherhood", text: "Superficial male friendships — sports, work talk, banter — leave men profoundly lonely. You need men who know your actual life, who can speak truth to you, who will show up. Seek out a small group, a men's Bible study, a Recovery community, or a formal accountability group. Vulnerability goes first — you have to offer it before it is offered back to you." },
  { icon: "📖", title: "Read the Psalms for Emotional Permission", text: "The Psalms are the emotional interior of a man who brought everything to God. Read one psalm of lament a day for a month: Psalms 3, 6, 13, 22, 31, 38, 42, 51, 69, 88, 102. Notice what David permits himself to say. Let him give you permission to say the same." },
];

const scriptures = [
  { verse: "John 11:35", text: "Jesus wept." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." },
  { verse: "2 Corinthians 12:10", text: "That is why, for Christ's sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed." },
  { verse: "Ecclesiastes 4:9-10", text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
];

const videos = [
  { id: "mm_1", title: "Why Men Don't Ask for Help — and Why That Has to Change", channel: "The Gospel Coalition" },
  { id: "mm_2", title: "Male Depression — The Hidden Epidemic", channel: "Focus on the Family" },
  { id: "mm_3", title: "David Was Not Stoic — The Psalms and Male Emotion", channel: "Desiring God" },
  { id: "mm_4", title: "Iron Sharpens Iron — Building Real Male Friendship", channel: "FamilyLife Today" },
];

type MMMEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function MenMentalHealthPage() {
  const [tab, setTab] = useState("theology");
  const [mmmJournal, setMmmJournal] = useState<MMMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_menmentalhealthj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_menmentalhealthj_entries", JSON.stringify(mmmJournal)); } catch {}
  }, [mmmJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setMmmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setMmmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Men and Mental Health</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Men and Mental Health</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Breaking the silence — theology and courage for men who are struggling</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>If You Are in Crisis</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>988 Suicide and Crisis Lifeline:</strong> Call or text 988 — 24/7<br />
            <strong>Veterans Crisis Line:</strong> 988 then press 1 (veterans)<br />
            <strong>Crisis Text Line:</strong> Text HOME to 741741
          </p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.85rem", color: MUTED }}>Men die by suicide at nearly 4x the rate of women. The barrier is almost always asking for help. Please call.</p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>The Biblical Vision of Strength</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices Calling Men to Honesty</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Steps Toward Honesty and Healing</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for Men Who Are Struggling</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account, no visibility to anyone else.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you actually dealing with right now? (No one is watching.)</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Honestly, I am dealing with..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What would it look like to stop carrying this alone?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="If I stopped carrying this alone I would..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>One concrete step: who will you contact this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I will contact / tell..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {mmmJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Coming here at all is already a step. Keep going.</p>}
            {mmmJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I AM DEALING WITH</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT CHANGE LOOKS LIKE</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHO I WILL CONTACT</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
