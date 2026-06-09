"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "You Are Not a Bad Mother", verse: "Psalm 34:18", text: "Postpartum depression is not a sign of spiritual weakness, ingratitude, or bad motherhood. It is a medical condition caused by dramatic hormonal shifts, sleep deprivation, and the enormous demands of new life. The God who formed you knows your body better than you do. He is not disappointed in you." },
  { title: "Hannah Wept and Could Not Eat", verse: "1 Samuel 1:7-8", text: "Scripture preserves the story of Hannah — a godly woman who was so consumed with anguish that she wept bitterly and refused food. Peninnah provoked her; Eli misread her. Even in the house of God, her pain was misunderstood. God honored her lament. He honors yours too." },
  { title: "God Meets You at Your Lowest", verse: "1 Kings 19:3-8", text: "Elijah — one of Israel's greatest prophets — collapsed under a tree after exhaustion and said 'I have had enough.' An angel came not with rebuke but with food, water, and the invitation to rest. The angel said, 'The journey is too great for you.' God knows that new motherhood is immense. He meets you there." },
  { title: "The Body Is Not the Enemy", verse: "Psalm 139:14", text: "You are fearfully and wonderfully made — including your brain chemistry, your hormones, your nervous system. When these systems are disrupted by childbirth, seeking medical help is not a lack of faith. It is wise stewardship of the body God gave you. Treating PPD is as appropriate as treating a broken arm." },
  { title: "Joy Will Come in the Morning", verse: "Psalm 30:5", text: "This verse was not written for a bad night — it was written from the depths of genuine suffering. Weeping may endure for a season, but it is not forever. The darkness of PPD has a clinical trajectory. With treatment, most women experience significant recovery. Hope is not naive; it is medically and theologically grounded." },
];

const voices = [
  { id: "ps", name: "Postpartum Support International", role: "Evidence-Based Care", quote: "Postpartum depression is the most common complication of childbirth. You are not alone, you are not to blame, and with help, you will be well.", bio: "PSI's three-sentence message — 'you are not alone, you are not to blame, and with help, you will be well' — has become the global standard for compassionate PPD messaging, validated by decades of clinical research." },
  { id: "kw", name: "Kay Warren", role: "Author, Mental Health Advocate", quote: "Mental illness is not a character flaw, not a faith failure, not something you can pray away. It is a brain disease that requires treatment just like any other disease.", bio: "After her son Matthew died by suicide, Kay Warren became one of the most influential Christian voices for mental health advocacy, challenging churches to abandon stigma and embrace medical treatment alongside faith." },
  { id: "hc", name: "Hilary Corbin", role: "Christian Counselor, PPD Specialist", quote: "Many Christian mothers with PPD believe they should be joyful and grateful, and their depression confirms something is broken in them spiritually. The truth is often the opposite — they are exhausted saints who need medical support, not more shame.", bio: "Christian counselors who specialize in perinatal mental health often see the intersection of theological shame and medical illness. The most healing message is that God is not withholding joy to punish you — your brain chemistry is temporarily disrupted." },
];

const practices = [
  { icon: "🏥", title: "See Your Doctor Immediately", text: "PPD is a medical condition. Tell your OB, midwife, or primary care provider exactly what you are experiencing. Ask about medication options and referrals to a perinatal mental health specialist. The Edinburgh Postnatal Depression Scale (EPDS) is a validated screening tool." },
  { icon: "🧠", title: "Find a Perinatal Mental Health Therapist", text: "Look for a therapist with experience in perinatal mental health (PMH-C certification). Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) have strong evidence for PPD. Online therapy (Postpartum Support International's provider directory) can reach you at home." },
  { icon: "💬", title: "Tell Someone You Trust", text: "Shame thrives in secrecy. Tell your spouse, a close friend, your pastor's wife, or a mentor mother. You do not have to manage this alone. If you do not have someone to tell, call PSI's helpline at 1-800-944-4773." },
  { icon: "😴", title: "Protect Sleep by Any Means Necessary", text: "Sleep deprivation dramatically worsens depression. If possible: ask your spouse or support person to take a night feeding with pumped milk or formula. Sleep matters more than the guilt of not doing everything yourself. Rest is not selfish — it is survival." },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
  { verse: "Isaiah 66:13", text: "As a mother comforts her child, so will I comfort you." },
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning." },
];

const videos = [
  { id: "PPD_theology_1", title: "When New Motherhood Feels Like Darkness — Faith and Postpartum Depression", channel: "The Gospel Coalition" },
  { id: "PPD_psi_2", title: "You Are Not Alone — Postpartum Depression and the Church", channel: "Postpartum Support International" },
  { id: "PPD_recovery_3", title: "My Postpartum Depression Story — Finding God in the Darkness", channel: "She Reads Truth" },
  { id: "PPD_medical_4", title: "What Is Postpartum Depression? Medical and Spiritual Perspectives", channel: "Christian Healthcare" },
];

type PPDEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PostpartumDepressionPage() {
  const [tab, setTab] = useState("theology");
  const [ppdJournal, setPpdJournal] = useState<PPDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_ppdj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_ppdj_entries", JSON.stringify(ppdJournal)); } catch {}
  }, [ppdJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPpdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPpdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Crisis Support</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Postpartum Depression</h1>
        <p style={{ color: MUTED, marginBottom: "0.5rem" }}>Faith, healing, and hope for new mothers in the darkness</p>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8, padding: "1rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontWeight: 600, color: "#ff9999" }}>Crisis Resources</p>
          <p style={{ margin: "0.4rem 0 0", fontSize: "0.9rem", color: TEXT }}>
            <strong>Postpartum Support International:</strong> 1-800-944-4773 (call or text) — Mon–Fri 9am–9pm EST<br />
            <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (24/7) — for thoughts of harming yourself<br />
            <strong>Emergency:</strong> 911 or nearest ER if you feel unsafe
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>What God Says About Your Suffering</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices That Understand</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Steps Toward Healing</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}`, borderRadius: 10, padding: "1.25rem", marginTop: "1rem" }}>
              <p style={{ margin: 0, fontSize: "0.9rem", color: TEXT, lineHeight: 1.7 }}>
                <strong style={{ color: GREEN }}>For Your Church:</strong> If you are a pastor, elder, or women's ministry leader, please know that PPD affects 1 in 5 new mothers — including women in your congregation. The most healing thing a church can say is: "What you are experiencing is real, it is not your fault, and we will help you get care." Consider partnering with PSI's Faith Community training at postpartum.net.
              </p>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for Dark Moments</h2>
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
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Healing Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. No account needed.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>How are you feeling right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Today I am feeling..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What truth from God can you hold onto today?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="One thing I know is true..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>One small step for today</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="Today I will..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ppdJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your words matter — start when you are ready.</p>}
            {ppdJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>FEELING</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>TRUTH HELD</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>STEP TAKEN</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
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
