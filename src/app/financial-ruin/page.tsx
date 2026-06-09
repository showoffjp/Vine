"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your Worth Is Not in Your Net Worth", verse: "Luke 12:15", text: "Jesus said: 'Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions.' Financial ruin strips away the false identity of material security. This is agonizing — but it can also be clarifying. The loss of what you accumulated does not touch what God says you are worth. Your identity was never in your portfolio." },
  { title: "God Has Provided for the Completely Destitute", verse: "Exodus 16:4", text: "When Israel had nothing — no food, no water, no plan — God sent manna from the sky. He has a history of provision in situations of total material depletion. This does not mean financial recovery will be fast or pain-free. It means that God is capable of providing even when every human resource has been exhausted." },
  { title: "The Psalms Give Voice to Material Desperation", verse: "Psalm 40:17", text: "David writes: 'As for me, I am poor and needy, but the Lord takes thought for me.' The Psalms do not pretend material need is spiritual. David names his poverty, his helplessness, his need. And then he names the God who does not forget those who have nothing. Bring the specific reality of your financial situation to God in prayer — do not spiritualize it away." },
  { title: "Debt Can Be Managed and Discharged — Grace Covers the Shame", verse: "Romans 8:1", text: "There is no condemnation for those in Christ. Bankruptcy law exists precisely because societies have recognized that financial ruin can happen without moral failure. Whether your financial collapse was your fault, someone else's, or simply the result of circumstances you could not control — the shame that attaches to it is not from God." },
  { title: "Generosity and Dependence on God Can Increase in Poverty", verse: "2 Corinthians 8:2", text: "Paul commends the Macedonian churches — who gave generously despite extreme poverty — as an example of grace. The experience of financial need, when surrendered to God, can deepen both dependence on Him and generosity toward others in unexpected ways. What feels like total loss can become a transformation in how you relate to money and God." },
];

const voices = [
  { id: "dc", name: "Dave Ramsey", role: "Financial Educator", quote: "I know what it is like to go bankrupt. I know the shame. I also know that there is a path forward, and that most people who have been financially destroyed can rebuild — but they need a plan, not just hope.", bio: "Ramsey filed for bankruptcy in his early career before building his financial education empire. His work on debt elimination and financial management is widely used in Christian contexts, though critics note his approach is better suited to recovery than prevention and that some of his advice oversimplifies complex situations." },
  { id: "tk", name: "Tim Keller", role: "Author, Counterfeit Gods", quote: "Money is a brilliant idol — it promises security, significance, and freedom. When it fails, the question is not just 'how do I rebuild?' but 'what was I really worshiping?' The answer to that question can be the most valuable thing financial ruin produces.", bio: "Keller's work on money as a counterfeit god is one of the most theologically rich treatments of the spiritual dimensions of financial crisis. His argument: financial collapse often exposes what was actually trusted — and that exposure is painful but potentially redemptive." },
  { id: "hb", name: "Howard Dayton", role: "Founder, Crown Financial Ministries", quote: "I have seen hundreds of families go through financial disaster. The ones who come through with their faith, marriage, and sanity intact share one thing: they turned to God before they turned to despair.", bio: "Dayton founded Crown Financial Ministries, one of the largest Christian financial education organizations in the world. His work specifically addresses financial crisis and recovery from a biblical stewardship perspective, with practical tools for rebuilding after collapse." },
];

const practices = [
  { icon: "📋", title: "Know Where You Actually Stand — With Help", text: "Get the numbers on paper, even if the numbers are terrifying. Contact a nonprofit credit counselor (NFCC: nfcc.org) — free or low-cost — to understand your full situation. Bankruptcy attorneys often offer free initial consultations to help you understand your options. Clarity, even about bad news, is less destructive than uncertainty." },
  { icon: "💬", title: "Tell Your Spouse — and Face It Together", text: "Financial secrets in marriage destroy both finances and marriages. If your spouse does not know the full extent of the situation, tell them now, before they find out another way. Financial crisis handled together is survivable; financial crisis discovered as a betrayal of trust is far more damaging. The marriage needs the truth to fight the problem together." },
  { icon: "🏠", title: "Prioritize the Hierarchy of Needs", text: "When resources are severely limited: (1) food, (2) utilities, (3) housing, (4) transportation to work, (5) medicine, then everything else. Do not pay credit cards before you have eaten. Contact creditors — most have hardship programs. Apply for every public assistance program you may qualify for. Receiving help is not shame; it is survival." },
  { icon: "⛪", title: "Let Your Church Body Help", text: "Most churches have benevolence funds specifically for members in crisis. The New Testament describes the church as a community where no one should lack basic needs (Acts 2:44-45). Receiving this help is not weakness — it is how the body functions as designed. Let your community carry this with you." },
];

const scriptures = [
  { verse: "Psalm 40:17", text: "But as for me, I am poor and needy; may the Lord think of me. You are my help and my deliverer; you are my God, do not delay." },
  { verse: "Matthew 6:25-26", text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them." },
  { verse: "Philippians 4:11-13", text: "I have learned, in whatever state I am, to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me." },
  { verse: "Proverbs 11:14", text: "For lack of guidance a nation falls, but victory is won through many advisers." },
  { verse: "Luke 12:15", text: "Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

const videos = [
  { id: "fr_1", title: "When Everything Falls Apart Financially — Finding God in the Ruins", channel: "Crown Financial Ministries" },
  { id: "fr_2", title: "Counterfeit Gods — What Financial Collapse Reveals About Our Hearts", channel: "Tim Keller" },
  { id: "fr_3", title: "Starting Over After Bankruptcy — A Christian Perspective", channel: "Dave Ramsey Show" },
  { id: "fr_4", title: "What the Church Owes Those in Financial Crisis", channel: "The Gospel Coalition" },
];

type FREntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function FinancialRuinPage() {
  const [tab, setTab] = useState("theology");
  const [frJournal, setFrJournal] = useState<FREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_financialruinj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_financialruinj_entries", JSON.stringify(frJournal)); } catch {}
  }, [frJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setFrJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setFrJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Financial Crisis</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Financial Ruin</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Theology, practical help, and hope for those whose financial world has collapsed</p>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: PURPLE }}>Free Help Available</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>NFCC Credit Counseling:</strong> nfcc.org — free nonprofit credit counseling nationwide<br />
            <strong>211:</strong> Call 211 or text your zip code to 898-211 — local assistance programs<br />
            <strong>988 Lifeline:</strong> Call or text 988 — financial stress often accompanies mental health crisis
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>What God Says About Material Loss</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Voices for the Financial Valley</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Immediate Steps in Financial Crisis</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: PURPLE }}>Scripture for Material Need</h2>
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
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you most afraid of right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="What I am most afraid of is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What does not depend on your financial situation? What remains?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="What still remains is..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What is one practical step you will take this week?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="This week I will..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: PURPLE, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {frJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your worth is not your net worth. Begin here.</p>}
            {frJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I FEAR</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT REMAINS</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: PURPLE, fontWeight: 600, marginBottom: "0.2rem" }}>STEP THIS WEEK</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
