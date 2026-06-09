"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Safety Is Not a Lesser Priority Than Marriage",
    verse: "Proverbs 27:12",
    text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty. Prudence — the wisdom to see danger and take refuge — is a biblical virtue. Remaining in a dangerous situation is not obedience; it is the absence of the prudence God commends. Your safety is not a lesser theological concern than the continuation of the marriage."
  },
  {
    title: "God Does Not Require the Oppressed to Remain Oppressed",
    verse: "Isaiah 1:17",
    text: "Learn to do right; seek justice. Defend the oppressed. The same God who designed marriage designed justice. He does not require one to be sacrificed for the other. A marriage in which one partner is harming the other is already a broken covenant — the person being harmed did not break it."
  },
  {
    title: "Leaving Is Not the Sin — The Abuse Was",
    verse: "Malachi 2:16",
    text: "God hates divorce — the violence it does. But the violence God hates most in this text is the violence done by a faithless partner who 'covers his garment with violence.' The one who is leaving a violent marriage is not the one Malachi condemns. The violence that made leaving necessary is what God hates."
  },
  {
    title: "Your Children Are Not Served By Your Harm",
    verse: "Ephesians 6:4",
    text: "Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord. Children raised in homes where abuse occurs are being exasperated — and harmed. Protecting children from the patterns of an abusive home is not a lesser calling than keeping a family formally intact. It is the higher one."
  },
  {
    title: "The Church Does Not Have the Authority to Trap You",
    verse: "Galatians 5:1",
    text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery. No church has the authority to require you to remain in a relationship where you are being harmed. Leaders who apply this pressure are adding a religious burden that Scripture does not authorize. You are permitted to seek safety."
  }
];

const voices = [
  {
    id: "v1",
    name: "Leslie Vernick",
    role: "Counselor; Author, The Emotionally Destructive Marriage",
    quote: "Not every difficult marriage is destructive. But a destructive marriage — one that is harming you physically, emotionally, or spiritually — is not what God designed marriage to be. You are not obligated to remain in a covenant that the other person has already broken through harm.",
    bio: "Leslie Vernick is the most important Christian voice on domestic abuse and destructive marriage. Her framework helps Christian women understand that leaving a destructive marriage can be an act of faithfulness — not unfaithfulness. Her CORE acronym (Committed, Open, Responsible, Empathetic) gives language for discernment."
  },
  {
    id: "v2",
    name: "Diane Langberg",
    role: "Psychologist; Author, Suffering and the Heart of God",
    quote: "The church has too often told abused women to go home, be more submissive, and pray harder. This is not pastoral care — it is harm. And God is angered by it.",
    bio: "Diane Langberg has been addressing the church's role in enabling domestic abuse for decades. She trains pastors and counselors to recognize abuse, respond appropriately, and stop prioritizing institutional preservation over the safety of the vulnerable."
  },
  {
    id: "v3",
    name: "Lundy Bancroft",
    role: "Author, Why Does He Do That?; Domestic abuse counselor",
    quote: "Abusers do not abuse because of anger management problems, addiction, mental illness, or childhood trauma. They abuse because they feel entitled to control. Understanding this changes what 'help' looks like — for the abuser and for the one leaving.",
    bio: "Lundy Bancroft's Why Does He Do That? is the most important secular text on domestic abuse. Christian victims and advocates widely use it because it correctly identifies the nature of abusive behavior as entitlement and control — not anger or illness alone."
  },
  {
    id: "v4",
    name: "Barb Orlowski",
    role: "Author, Spiritual Abuse Recovery; Researcher on church-enabled abuse",
    quote: "When a church requires an abused woman to return to her abuser in the name of submission or forgiveness, it has misread both submission and forgiveness. It has also placed itself in the position of the abuser's accomplice.",
    bio: "Barb Orlowski's research on the ways churches enable and perpetuate domestic abuse is essential for Christian women who have been told by their churches to stay. Her work helps survivors understand that the pastoral pressure they received was not biblical — and that leaving can be the right and faithful choice."
  }
];

const practices = [
  {
    icon: "🚨",
    title: "Safety Planning Is the First Priority",
    text: "Before making any move, develop a safety plan with help from the National Domestic Violence Hotline (1-800-799-7233, thehotline.org). This includes: identifying a safe place to go, securing important documents (passport, Social Security card, financial records), setting aside emergency funds, and identifying people in your network who can help."
  },
  {
    icon: "📱",
    title: "Practice Digital Safety",
    text: "An abusive partner may monitor your phone, computer, or location. Use a device the abuser doesn't have access to. Use a private browser window. Call the hotline from a phone the abuser doesn't know about. The hotline can advise on digital safety specific to your situation."
  },
  {
    icon: "⚖️",
    title: "Contact a Domestic Violence Advocate Before an Attorney",
    text: "A domestic violence advocate (available through your local DV organization or the hotline) can help you navigate the legal system specifically in an abuse context. They know how to help you protect yourself and your children in ways that a general family attorney may not."
  },
  {
    icon: "⛪",
    title: "Find a Church or Counselor Who Understands Abuse",
    text: "Not every pastor or counselor is equipped to help safely. If you receive advice to go home, try harder, or be more submissive — you have found someone who is not equipped. Find a DV-informed counselor, or contact Leslie Vernick's ministry for resources (leslievernick.com)."
  },
  {
    icon: "🧠",
    title: "Understand That Leaving Is Dangerous — Plan Accordingly",
    text: "Statistically, the most dangerous time in an abusive relationship is when the victim leaves. This is not a reason not to leave — it is a reason to leave carefully, with a plan, with support, and with the knowledge of professionals who can help."
  },
  {
    icon: "🙏",
    title: "Your Desire for Safety Is From God, Not From Weakness",
    text: "Many abused Christian women have been told that wanting to leave is selfishness, lack of faith, or failure to submit. This is not biblical. The desire for safety, for peace, for a life without harm — these are God-given longings. God is not the one requiring you to stay."
  }
];

const scriptures = [
  { verse: "Proverbs 27:12", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." },
  { verse: "Isaiah 1:17", text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit." },
  { verse: "Psalm 18:2", text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold." },
  { verse: "Isaiah 61:1", text: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners." }
];

type LeavingEntry = { id: string; date: string; fear: string; plan: string; resource: string };

export default function DomesticAbuseLeavingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LeavingEntry[]>([]);
  const [fear, setFear] = useState("");
  const [plan, setPlan] = useState("");
  const [resource, setResource] = useState("");
  const [expandedVoice, setExpandedVoice] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("vine_domesticabuseleaving_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!fear.trim()) return;
    const entry: LeavingEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), fear, plan, resource };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_domesticabuseleaving_entries", JSON.stringify(updated));
    setFear(""); setPlan(""); setResource("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_domesticabuseleaving_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, padding: "2rem 1rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ color: PURPLE, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "0.5rem" }}>Safety & Recovery</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.2 }}>Leaving Domestic Abuse</h1>
          <p style={{ color: MUTED, lineHeight: 1.7, maxWidth: 600 }}>
            When you are considering leaving — or have left — a marriage or relationship where you were being harmed. When the church's words about submission and forgiveness have been used to keep you in danger. When you need to know that God is not requiring this of you. Your safety is not a lesser priority than your vows.
          </p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === t ? PURPLE : MUTED, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize", whiteSpace: "nowrap", fontFamily: "Georgia, serif" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>

        {tab === "theology" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Theological foundations for the Christian leaving an abusive relationship — directly addressing the false theology that has been used to keep people in danger.</p>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Counselors and researchers who take domestic abuse seriously in Christian contexts — and who equip survivors to understand and leave safely.</p>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "0.75rem" }}>"{v.quote}"</p>
                <button onClick={() => setExpandedVoice(expandedVoice === v.id ? null : v.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.4rem 0.75rem", borderRadius: 4, cursor: "pointer", fontSize: "0.8rem" }}>{expandedVoice === v.id ? "Less" : "More"}</button>
                {expandedVoice === v.id && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: "0.75rem" }}>{v.bio}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Safety-first steps for those considering or in the process of leaving an abusive relationship.</p>
            <div style={{ background: "#1a0808", border: "1px solid #6b2020", borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: "#ff6b6b", fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.1rem" }}>IMMEDIATE HELP — Read This First</div>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
                If you are in immediate danger: <strong>CALL 911</strong><br />
                <br />
                National Domestic Violence Hotline:<br />
                <strong>1-800-799-SAFE (7233)</strong> — 24 hours, 7 days a week<br />
                Text START to 88788<br />
                Chat at thehotline.org<br />
                <br />
                <strong>988 Suicide &amp; Crisis Lifeline</strong> — also available for victims of abuse<br />
                <strong>Crisis Text Line: Text HOME to 741741</strong>
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
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Verses for the one considering or undertaking the dangerous and faithful act of seeking safety.</p>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>A private space for safety planning, processing fear, and naming what you need. Entries stay on your device only. If there is any risk of your device being monitored, please do not journal here.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1.25rem", color: PURPLE }}>New Entry</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What fear is making it hard to move toward safety?</label>
                <textarea value={fear} onChange={e => setFear(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What is one part of my safety plan I can work on today?</label>
                <textarea value={plan} onChange={e => setPlan(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>What resource or person can I contact this week?</label>
                <textarea value={resource} onChange={e => setResource(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontFamily: "Georgia, serif", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: 700 }}>Save Entry</button>
            </div>
            {entries.length === 0 ? (
              <p style={{ color: MUTED, textAlign: "center", fontStyle: "italic" }}>No entries yet. Your reflections will appear here.</p>
            ) : (
              entries.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "1rem" }}>{e.date}</div>
                  {e.fear && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>FEAR</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.fear}</p></div>}
                  {e.plan && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>PLAN</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.plan}</p></div>}
                  {e.resource && <div style={{ marginBottom: "0.75rem" }}><span style={{ color: PURPLE, fontSize: "0.8rem" }}>RESOURCE</span><p style={{ margin: "0.25rem 0 0", lineHeight: 1.7 }}>{e.resource}</p></div>}
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "0.3rem 0.6rem", borderRadius: 4, cursor: "pointer", fontSize: "0.75rem", marginTop: "0.5rem" }}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.7 }}>Teaching on domestic abuse, safety, and the theology of leaving — for Christian women and those who support them.</p>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>The Emotionally Destructive Marriage: Leslie Vernick</div>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="The Emotionally Destructive Marriage: Leslie Vernick" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Diane Langberg: When Churches Harm the Vulnerable</div>
              <VideoEmbed videoId="ZwDlGPCEUoE" title="Diane Langberg: When Churches Harm the Vulnerable" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Freedom From Abuse: A Christian Framework</div>
              <VideoEmbed videoId="53RX2ESIqLM" title="Freedom From Abuse: A Christian Framework" />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: TEXT, fontWeight: 700, marginBottom: "0.5rem" }}>Safety and the Gospel: God's Heart for the Oppressed</div>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Safety and the Gospel: God's Heart for the Oppressed" />
            </div>
          </div>
        )}

      </div>
    </div>
      <Footer />
    </>
  );
}
