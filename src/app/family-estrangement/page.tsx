"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Family Estrangement Is in the Bible", verse: "Luke 12:51-53", text: "Jesus said: 'Do you think I came to bring peace on earth? No, I tell you, but division. From now on there will be five in one family divided against each other... father against son and son against father.' Jesus explicitly predicted family division as a consequence of following Him. Family estrangement is not a sign that Christianity has failed — it is sometimes the direct result of it." },
  { title: "Healthy Limits Are Not Unchristian", verse: "Proverbs 22:24-25", text: "Do not make friends with a hot-tempered person, do not associate with one easily angered, or you may learn their ways. Scripture does not require unlimited relationship with people who are harmful. Setting limits with family members who are abusive, unsafe, or deeply destructive is not a violation of the fifth commandment — it is the application of wisdom." },
  { title: "Honor Does Not Always Mean Closeness", verse: "Exodus 20:12", text: "Honor your father and mother — but honor and closeness are not the same thing. You can honor someone by praying for them, wishing them well, refusing to slander them, and remaining open to reconciliation — while also maintaining distance because the relationship is genuinely harmful. The fifth commandment is not a command to remain in dangerous or abusive relationship." },
  { title: "Reconciliation Requires Two People — and Is Not Always Possible', verse: 'Romans 12:18", text: "Paul writes: 'If it is possible, as far as it depends on you, live at peace with everyone.' The conditional is significant: if possible. As far as it depends on you. Some relationships cannot be reconciled because the other person will not participate in genuine repair. You are not responsible for reconciling what requires two willing parties. You are only responsible for your own actions." },
  { title: "The Family of God Is Your Family", verse: "Mark 3:34-35", text: "Jesus looked at those seated in a circle around him and said, 'Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother.' Jesus explicitly extended the definition of family beyond biological lines. For those whose biological family is absent, hostile, or unsafe, the church is the family that was promised." },
];

const voices = [
  { id: "kp", name: "Kristina Scharp", role: "Communication Researcher, Estrangement", quote: "Most adult children who estrange from parents do so after years of trying. Estrangement is rarely impulsive — it is usually a long, painful last resort after other options have been exhausted.", bio: "Scharp's research at Utah State has documented the experience of family estrangement from both the adult child's and parent's perspective. Her work is important for both those who have chosen estrangement and those who have been estranged from, challenging many cultural assumptions about who initiates estrangement and why." },
  { id: "lv", name: "Leslie Vernick", role: "Author, The Emotionally Destructive Relationship", quote: "The greatest lie told to Christians about relationships is that love requires you to keep tolerating destructive behavior indefinitely. Real love sometimes means stepping back so that the other person faces the consequences of their choices.", bio: "Vernick has written and spoken extensively on destructive family relationships, including parent-child estrangement, from a Christian perspective. Her work carefully distinguishes between relationships that need repair and relationships that require separation for safety and health." },
  { id: "jh", name: "Jeff VanVonderen", role: "Author, Tired of Trying to Measure Up", quote: "Some family systems are built on performance, control, and shame rather than grace, freedom, and love. Growing in Christ sometimes means grieving the family you needed but didn't have, and building healthy relationships in its place.", bio: "VanVonderen's work on spiritual abuse and dysfunctional family systems has helped many Christians understand why their family relationships have been damaging and why distance is sometimes the healthy choice." },
];

const practices = [
  { icon: "🧠", title: "Work With a Therapist to Understand the Full Picture", text: "Family estrangement involves complex dynamics that are often difficult to see clearly from inside them. A therapist — ideally one with family systems training — can help you understand the patterns, grieve what was lost, and make wise decisions about contact. This is not a decision to make alone or quickly." },
  { icon: "✉️", title: "Do Not Make Permanent Decisions in Acute Pain", text: "The most painful moments of conflict are not the best time to make permanent decisions about estrangement. Give yourself time. Work with a therapist. Explore whether partial contact, limited contact, or mediated contact could work before deciding on full estrangement. These decisions are hard to reverse and deserve careful discernment." },
  { icon: "🙏", title: "Grieve What Was Never Possible", text: "One of the hardest dimensions of family estrangement is grieving a relationship that may never have been what it should have been. This is a different kind of grief — mourning a living person, mourning something that was always absent rather than something that was present and lost. Give this grief its full space." },
  { icon: "👥", title: "Build Your Chosen Family", text: "Deep, committed friendships and church community can provide the belonging, acceptance, and mutual care that family was designed to provide. This is not a second-rate substitute — it is one of the primary ways God provides family for those whose biological family cannot or will not. Invest in community as if it is your family — because for you, it may be." },
];

const scriptures = [
  { verse: "Luke 12:51-53", text: "Do you think I came to bring peace on earth? No, I tell you, but division. From now on there will be five in one family divided against each other." },
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
  { verse: "Mark 3:34-35", text: "Then he looked at those seated in a circle around him and said, Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother." },
  { verse: "Psalm 27:10", text: "Though my father and mother forsake me, the Lord will receive me." },
  { verse: "Proverbs 13:20", text: "Walk with the wise and become wise, for a companion of fools suffers harm." },
  { verse: "Isaiah 43:19", text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland." },
];

const videos = [
  { id: "fe_1", title: "When Family Estrangement Is the Right Choice — A Biblical Perspective", channel: "The Gospel Coalition" },
  { id: "fe_2", title: "Honor Your Parents — Does It Mean You Can Never Set Limits?", channel: "Leslie Vernick" },
  { id: "fe_3", title: "Grieving the Family You Needed and Didn't Have", channel: "CCEF" },
  { id: "fe_4", title: "Building a Chosen Family When Biological Family Is Not Safe", channel: "Focus on the Family" },
];

type FEEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function FamilyEstrangementPage() {
  const [tab, setTab] = useState("theology");
  const [feJournal, setFeJournal] = useState<FEEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_familyestrangementj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_familyestrangementj_entries", JSON.stringify(feJournal)); } catch {}
  }, [feJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setFeJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setFeJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Relationships and Limits</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Family Estrangement</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Theology, grief, and discernment for those navigating painful family separation</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>What the Bible Actually Says About Family</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices on Family and Limits</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Navigating This Carefully</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for Complex Family Situations</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: PURPLE }}>Your Reflection Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is the grief or anger you are carrying about your family?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="What I am carrying is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does God say about your worth apart from your family's verdict?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="God says I am..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What community is becoming your chosen family?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="The people who are becoming family to me are..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {feJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your grief about family is real and it belongs here.</p>}
            {feJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I CARRY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT GOD SAYS</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>MY CHOSEN FAMILY</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
      <Footer />
    </>
  );
}
