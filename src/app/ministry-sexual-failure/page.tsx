"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "David: God Did Not Discard the Fallen Leader", verse: "Psalm 51:1-2", text: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions. Wash away all my iniquity and cleanse me from my sin. Psalm 51 is David's prayer after adultery and murder. God did not discard David — but David also did not minimize, excuse, or escape the consequences of what he did. Both the mercy and the cost are real." },
  { title: "Repentance Is Not Restoration to Ministry — It Is Something Better", verse: "Psalm 51:10-12", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me. Restore to me the joy of your salvation. David did not ask to be restored to the kingship. He asked for restoration to God. The recovery of relationship with God is the primary healing, whether or not ministry ever resumes." },
  { title: "Accountability and Consequence Are Part of the Healing, Not an Obstacle to It", verse: "Proverbs 28:13", text: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy. There is no mercy in covering sin. Full disclosure to the appropriate parties — spouse, church leadership, a counselor — is not punishment. It is the only path through to actual healing." },
  { title: "The Gospel Is for Those Who Have Failed in the Most Public Ways", verse: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. The gospel does not specify which sins it covers. It says 'while we were still sinners' — in the condition of ongoing, unreformed failure. There is no failure so public or so severe that it has moved outside the scope of this love." },
  { title: "Restoration to God Is Certain — Restoration to Ministry Is Not Automatic", verse: "1 Timothy 3:2", text: "Now the overseer is to be above reproach. The requirements for church leadership include being 'above reproach' — not sinless but of demonstrated integrity. Sexual failure in ministry does not end the possibility of God's love, forgiveness, or use of a life. It does require honest discernment about whether leadership role is appropriate and on what timeline." },
];

const voices = [
  { id: "v1", name: "Jay Stringer", role: "Therapist, Author, Unwanted", quote: "Sexual failure in ministry is rarely only about sex. It is about unaddressed wounds, power distortions, and the formation of a life that could not sustain the demands placed on it.", bio: "Stringer's research on unwanted sexual behavior reveals the complex psychological and spiritual dynamics underlying sexual failure, including the specific dynamics in ministry contexts where power, access, and spiritual authority create unique conditions." },
  { id: "v2", name: "Mark Laaser", role: "Founder, Faithful and True Ministries", quote: "I was a pastor who fell sexually. The recovery I needed was not only from the behavior but from the grandiosity, the isolation, and the double life that made the behavior possible.", bio: "Laaser, himself a pastor who experienced sexual failure and public exposure, became a leading voice in Christian sexual addiction recovery and specifically ministry restoration. His honest account of what recovery required is essential for those in this situation." },
  { id: "v3", name: "Leslie Vernick", role: "Counselor, Author", quote: "Restoration to ministry and restoration to marriage are two different questions and require two different discernment processes — one guided by integrity, the other by love.", bio: "Vernick addresses the specific questions of whether and when ministry restoration is appropriate, and how the harmed spouse's wellbeing must be centered in any process that claims to be healing rather than institutional management." },
  { id: "v4", name: "Diane Langberg", role: "Psychologist, Author, Redeeming Power", quote: "Power corrupts not just politically but spiritually. The minister who has failed sexually must reckon with how authority, access, and the expectation of trust created conditions they were not formed to resist.", bio: "Langberg's work on power and abuse in ministry provides the most rigorous account of the structural conditions that produce sexual failure in ministry, and what genuine change requires — not just behavioral management but fundamental reorientation." },
];

const practices = [
  { icon: "🛑", title: "Stop All Ministry Activity Immediately", text: "Further ministry activity while unaddressed sexual failure is ongoing or unresolved is harmful to those you serve and deepens the harm to yourself. The first practice is cessation — complete, voluntary, and communicated to appropriate leadership." },
  { icon: "📣", title: "Full Disclosure to Appropriate Parties", text: "This includes your spouse (if married), the church or ministry leadership, and any victims. The scope of disclosure should match the scope of the harm. This is not self-destruction — it is the beginning of integrity. A therapist can help you navigate what full disclosure looks like in your specific situation." },
  { icon: "🏥", title: "Enter an Intensive Treatment Program", text: "Recovery from sexual failure in ministry requires more than accountability partners and willpower. Intensive outpatient or residential programs for sexual addiction and ministry recovery (Faithful and True, SASH-affiliated programs) address the root dynamics, not just the surface behavior." },
  { icon: "⏳", title: "Accept That Restoration Will Take Years, Not Months", text: "The AACC and most ministry restoration experts recommend a minimum of two to five years of demonstrated integrity before any consideration of return to ministry leadership. This is not punitive — it is realistic about the timeline for genuine change of character." },
  { icon: "💍", title: "Your Marriage Must Be the Priority Over Ministry", text: "If you are married, your spouse has been harmed by both the behavior and the betrayal. Their healing, their need for information, and their decision about the marriage must take absolute priority over any consideration of ministry recovery. There is no legitimate ministry restoration that runs over a harmed spouse." },
  { icon: "📖", title: "Receive Spiritual Direction and Read Psalm 51 Regularly", text: "Psalm 51 is the prayer of one who has failed publicly and profoundly. Reading it regularly — not as punishment but as honest orientation — keeps the recovery grounded in God's mercy rather than either self-condemnation or self-justification." },
];

const scriptures = [
  { verse: "Psalm 51:1-4", text: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions. Wash away all my iniquity and cleanse me from my sin. For I know my transgressions, and my sin is always before me. Against you, you only, have I sinned and done what is evil in your sight." },
  { verse: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
  { verse: "Proverbs 28:13", text: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy." },
  { verse: "2 Samuel 12:13", text: "Then David said to Nathan, 'I have sinned against the Lord.' Nathan replied, 'The Lord has taken away your sin. You are not going to die.'" },
  { verse: "Isaiah 1:18", text: "Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
];

type MinistryFailureEntry = { id: string; date: string; confession: string; harm: string; step: string };

export default function MinistryMoralFailurePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MinistryFailureEntry[]>([]);
  const [form, setForm] = useState({ confession: "", harm: "", step: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_ministrysexualfailurej_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.confession.trim()) return;
    const e: MinistryFailureEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_ministrysexualfailurej_entries", JSON.stringify(updated));
    setForm({ confession: "", harm: "", step: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_ministrysexualfailurej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Ministry Failure</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Sexual Failure in Ministry</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>This page is for those who have failed sexually in ministry — the person themselves, not the people harmed by them. It holds both the gospel's full mercy and the full weight of what accountability and genuine recovery require. There is hope here. It is not cheap hope.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>Recovery Resources</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>Faithful and True</strong> — faithfulandtrue.com, Mark Laaser's ministry restoration program</li>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — if crisis has become a mental health emergency</li>
                <li><strong style={{ color: TEXT }}>AACC</strong> — aacc.net, find a Christian counselor with specialty in sexual addiction</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.confession} onChange={e => setForm(f => ({ ...f, confession: e.target.value }))} placeholder="What do you need to name before God today — without minimizing or excusing?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.harm} onChange={e => setForm(f => ({ ...f, harm: e.target.value }))} placeholder="Who has been harmed and what do you owe them?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.step} onChange={e => setForm(f => ({ ...f, step: e.target.value }))} placeholder="The next concrete step in accountability and recovery" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.confession && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Confession:</strong> {e.confession}</p>}
                {e.harm && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Harm:</strong> {e.harm}</p>}
                {e.step && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Step:</strong> {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "kfcVPh2VDhQ", title: "Forgiveness: Why It's So Difficult", channel: "Tim Keller", description: "Keller on the costly, non-sentimental work of forgiveness — relevant for both those who have failed and those trying to understand what genuine repentance looks like." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds", channel: "CCEF", description: "CCEF on gospel-centered shame recovery — the specific move from self-condemnation to genuine, accountability-grounded repentance." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame", channel: "Curt Thompson", description: "Thompson on how shame operates in the psyche and in ministry failure — the neurological and spiritual dimensions of moving from shame to honest responsibility." },
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection", channel: "Brené Brown — TED", description: "Brown on vulnerability, shame, and the distinction between guilt and shame — foundational psychology for understanding how to move through failure toward genuine change." },
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
      <Footer />
    </>
  );
}
