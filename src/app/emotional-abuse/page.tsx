"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Control Is Not Love", verse: "1 Corinthians 13:4-5", text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Emotional abuse systematically inverts every clause of this definition. What presents itself as love — jealousy, control, monitoring — is its opposite. The gospel names this clearly." },
  { title: "Gaslighting and the God Who Sees", verse: "Genesis 16:13", text: "Hagar named God El Roi — the God Who Sees — after she was mistreated and fled. Emotional abuse works by making you doubt your own perception: you didn't really see what you saw, feel what you felt, hear what you heard. But God is a witness to every cruelty done in private. He sees what the abuser insists did not happen. Your experience is real." },
  { title: "Fear Is Not Godly Submission", verse: "1 John 4:18", text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love. Biblical submission was never meant to be coerced through fear. If you walk on eggshells, monitor your partner's mood to manage your own safety, or feel terrorized into compliance — that is not Christian marriage. That is abuse." },
  { title: "God Hates Oppression, Not Just Violence", verse: "Psalm 72:14", text: "God will rescue the poor who cry out and the oppressed who have no one to help. He will take pity on the weak and the needy. The biblical category of oppression includes psychological cruelty: isolation, humiliation, threats, and contempt. You do not have to have bruises for God to hear your cry." },
  { title: "Healthy Relationships Preserve Dignity", verse: "Ephesians 5:29", text: "No one ever hated their own body, but they feed and care for their body, just as Christ does the church. Paul's marriage theology is built on nourishment and care, not erosion of self. A spouse who systematically dismantles your self-worth, isolates you from support, or uses Scripture to dominate is not following Paul's model — they are violating it." },
];

const voices = [
  { id: "v1", name: "Leslie Vernick", role: "Licensed Counselor, Author", quote: "Emotionally destructive relationships are not just unhappy relationships — they are relationships where one person's sense of self, sanity, or soul is being steadily eroded.", bio: "Leslie Vernick is a licensed counselor and the author of The Emotionally Destructive Marriage and The Emotionally Destructive Relationship. Her work helps Christians identify abuse, find safety, and rebuild their sense of God-given dignity without sacrificing theological seriousness." },
  { id: "v2", name: "Lundy Bancroft", role: "Author, Counselor for Abusive Men", quote: "An abuser's core problem is that he has a profoundly distorted set of values and beliefs about relationships — and he feels entitled to control his partner.", bio: "Lundy Bancroft has spent decades working with abusive men and supporting survivors. His book Why Does He Do That? demystifies coercive control and is widely used by Christian counselors. He is not a Christian writer but his clinical insights are essential for understanding the dynamics Christians often misread as 'communication problems.'" },
  { id: "v3", name: "Diane Langberg", role: "Psychologist, Trauma Specialist", quote: "When we minimize abuse in the name of protecting the institution of marriage, we protect the abuser and re-traumatize the victim.", bio: "Diane Langberg is one of the foremost Christian voices on trauma, abuse, and pastoral responsibility. Her work — including Redeeming Power — helps churches move from enabling to protecting. She has trained thousands of Christian counselors and pastors to recognize and respond to abuse rather than counsel victims back into danger." },
  { id: "v4", name: "Chris Moles", role: "Domestic Abuse Advocate, Pastor", quote: "The gospel says that sin has victims. When we reduce abuse to a 'conflict' between two equal parties, we erase the victim and deny the gospel's moral seriousness.", bio: "Chris Moles is a pastor and certified batterer intervention provider who trains churches in abuse response. He wrote The Heart of Domestic Abuse and has helped countless ministry leaders distinguish relational conflict from coercive control — a distinction with life-or-death consequences." },
];

const practices = [
  { icon: "🧭", title: "Name What Is Happening", text: "Emotional abuse includes verbal degradation, contempt, gaslighting (making you doubt your reality), isolation from support, financial control, threats, and monitoring. Looking at a list and recognizing your life is a painful but clarifying step." },
  { icon: "🤝", title: "Tell One Safe Person", text: "Abusers rely on isolation. Telling one trusted person — a counselor, pastor, friend, family member — breaks the secrecy that abuse requires. Choose someone who will believe you and not pressure you toward reconciliation before it is safe." },
  { icon: "📞", title: "Contact a Domestic Abuse Hotline", text: "The National Domestic Violence Hotline (1-800-799-7233) has advocates trained for emotional and psychological abuse, not just physical. They can help you make a safety plan, understand your options, and find local resources — even if you are not ready to leave." },
  { icon: "📖", title: "Read Leslie Vernick's Destructive Relationship Checklist", text: "Vernick's CORE framework (Committed to truth, Open to growth, Responsible, Empathic) describes what a healthy relationship requires. Holding your relationship against this standard — without minimizing or excuse-making — helps you see what is actually present." },
  { icon: "⛪", title: "Find a Trauma-Informed Counselor", text: "A counselor trained in trauma and abuse (not couples counseling, which is dangerous in abusive relationships) can help you process what has happened, rebuild your sense of self, and make decisions from a place of clarity rather than fear." },
  { icon: "🙏", title: "Pray the Psalms of the Oppressed", text: "Psalms 10, 55, 72, and 88 give language for crying to God when you feel unseen, silenced, and trapped. Praying them does not require you to feel spiritual — they were written by people who felt exactly what you feel." },
];

const scriptures = [
  { verse: "Psalm 10:14", text: "But you, God, see the trouble of the afflicted; you consider their grief and take it in hand. The victims commit themselves to you; you are the helper of the fatherless." },
  { verse: "Psalm 55:12-13", text: "If an enemy were insulting me, I could endure it; if a foe were rising against me, I could hide. But it is you, a man like myself, my companion, my close friend." },
  { verse: "Isaiah 42:3", text: "A bruised reed he will not break, and a smoldering wick he will not snuff out." },
  { verse: "1 John 4:18", text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love." },
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
];

type EAEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function EmotionalAbusePage() {
  const [tab, setTab] = useState("theology");
  const [eaJournal, setEaJournal] = useState<EAEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setEaJournal(JSON.parse(localStorage.getItem("vine_emotionalabuseJ_entries") ?? "[]")); } catch { setEaJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: EAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...eaJournal];
    setEaJournal(updated);
    localStorage.setItem("vine_emotionalabuseJ_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = eaJournal.filter(e => e.id !== id);
    setEaJournal(updated);
    localStorage.setItem("vine_emotionalabuseJ_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌧️</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Emotional Abuse</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>When love becomes control, contempt, and fear — finding God who sees, names, and rescues.</p>
        <div style={{ background: "#1a0a3e", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1.25rem", maxWidth: 480, margin: "0 auto", fontSize: "0.85rem", color: MUTED }}>
          <strong style={{ color: PURPLE }}>Crisis Support:</strong> NDVH 1-800-799-7233 &nbsp;|&nbsp; Crisis Text: text HOME to 741741 &nbsp;|&nbsp; 988 Lifeline
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="What am I experiencing right now?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What is true about me that the abuse says is false?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One small step toward safety or support?" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {eaJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Step: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Leave", channel: "Leslie Vernick", description: "Leslie Vernick helps Christians discern the difference between a difficult marriage and a destructive one, offering guidance on when staying or leaving honors God." },
              { videoId: "PKyLYSfmTwI", title: "Healing After Emotional and Spiritual Abuse", channel: "The Allender Center", description: "Dan Allender addresses the long-term effects of emotional abuse and what healing requires — including grief, community, and a reclaimed sense of self." },
              { videoId: "ZGk1hl1nNrw", title: "Trauma, Abuse, and the Church's Role", channel: "Diane Langberg", description: "Diane Langberg explains how the church can either compound or heal trauma and abuse — and what faithful ministry to survivors requires." },
              { videoId: "3_-OEdC2uaY", title: "When Church Hurts: Abuse and Institutions", channel: "The Gospel Coalition", description: "A panel discussion on how churches fail abuse survivors and what structural and pastoral changes are required to protect the vulnerable." },
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
