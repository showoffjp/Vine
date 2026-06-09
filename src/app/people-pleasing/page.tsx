"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Fear of People Is a Snare — And It Competes Directly With Fearing God", verse: "Proverbs 29:25", text: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe. The proverb names people-pleasing precisely: it is a kind of fear — the fear of disapproval, rejection, conflict, and disappointment. And it is a snare: it catches the person who runs into it. What the text implies is that the fear of man and the fear of the Lord are competing orientations. You cannot run from one toward the other without turning around. The people-pleaser is not running toward the Lord; they are running toward the approval of others — and the direction matters." },
  { title: "People-Pleasing Often Masquerades as Christian Virtue — Especially Humility and Service", verse: "Galatians 1:10", text: "Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ. Paul's question is diagnostic: the person trying to please people and the servant of Christ are not the same. People-pleasing can look like humility when it is actually self-protection. It can look like service when it is actually the management of others' opinions. The test is: what happens to your 'service' when approval is not forthcoming? If the service stops, it was probably approval-seeking, not service." },
  { title: "Jesus Said No Regularly — and Without Apology", verse: "Luke 5:16", text: "But Jesus often withdrew to lonely places and prayed. The man who healed the sick, fed the thousands, and raised the dead also withdrew. He said no to requests. He left people who needed him to go pray. He frustrated the expectations of the crowd, the disciples, his family, and the religious leaders. The people-pleaser cannot inhabit a Jesus who regularly disappointed people's expectations. A Jesus who always accommodated, never conflicted, and never withdrew is a Jesus who does not exist." },
  { title: "Your Identity Is Fixed Before You Act — No Performance Required", verse: "Matthew 3:17", text: "And a voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.' Jesus' belovedness is declared before his ministry begins — before a single miracle, a single sermon, a single act of service. The people-pleaser's deep fear is that approval must be earned through performance. The gospel's answer is that the Father's approval of his children in Christ is given, not earned — declared before the work, not in proportion to it. You are pleasing to God not because of what you do but because of whose you are." },
  { title: "Limits Are Not Unloving — They Are the Structure That Makes Genuine Love Possible", verse: "Mark 1:38", text: "Jesus replied, 'Let us go somewhere else — to the nearby villages — so I can preach there also. That is why I have come.' When the crowds wanted more of him, Jesus left. His limits were not failures of love — they were expressions of clarity about his mission and the boundaries that sustained it. The person without limits eventually has nothing left to give, or gives from resentment rather than freedom. Limits protect the quality of love by protecting the person doing the loving." },
];

const voices = [
  { id: "ew", name: "Ed Welch", role: "CCEF, Author of When People Are Big and God Is Small", quote: "People-pleasing is the fear of man operating at a spiritual level. We have exalted people — their opinions, their approval, their rejection — into a position of authority over our lives that only God should occupy. The cure is not merely confidence-building. It is the theological displacement of the human audience with the divine one — learning to live before an audience of One.", bio: "Welch's When People Are Big and God Is Small is the definitive Christian treatment of people-pleasing and approval-seeking. His diagnosis — that people-pleasing is a form of idolatry in which human approval has usurped God's place — is both theologically precise and practically liberating." },
  { id: "hc", name: "Henry Cloud & John Townsend", role: "Authors, Boundaries", quote: "People who lack limits often confuse saying yes with love. But the yes that comes from fear, obligation, or the management of someone else's emotions is not love — it is compliance. Love says yes because it wants to; compliance says yes because it is afraid of what happens if it doesn't. The difference is everything.", bio: "Cloud and Townsend's Boundaries framework applies directly to people-pleasing: their distinction between compliance-driven yes and freely-chosen yes, and their theological grounding of limits in the character of a God who himself has limits, provides both practical guidance and theological permission." },
  { id: "nl", name: "Nedra Tawwab", role: "Therapist, Author of Set Boundaries, Find Peace", quote: "People-pleasers often believe that saying no will destroy their relationships. What they discover when they begin to practice limits is that most of their fears were catastrophic fantasies. The relationships worth keeping survive honest nos. The relationships that required endless compliance were not relationships — they were transactions.", bio: "Tawwab's clinical work on boundaries from a secular therapeutic perspective complements the theological analysis with practical application. Her observation that people-pleasers systematically catastrophize the consequences of saying no aligns with the cognitive behavioral literature on approval-seeking and helps people test their fears against reality." },
];

const practices = [
  { icon: "⏸️", title: "Introduce a Response Delay for Every Request", text: "People-pleasers typically say yes before they have evaluated whether yes is appropriate. The practice of a standard response delay interrupts this automatic pattern: 'Let me check my schedule and get back to you.' Even when you already know you're free, the pause gives you space to evaluate from your own values rather than from the pressure of the present moment. Most people-pleasing happens in real-time, under social pressure. The delay removes the pressure." },
  { icon: "🗣️", title: "Practice Saying No Without Explanation", text: "People-pleasers characteristically over-explain refusals, as if the no is illegitimate unless justified. The practice of a simple, warm no — 'I'm not able to do that' — without a list of reasons, trains the capacity to refuse without self-justification. You are not obligated to provide a reason for every no. The requirement to always justify refusal is a social contract that people-pleasers have accepted and everyone else does not enforce." },
  { icon: "🔍", title: "Ask: Am I Saying Yes From Freedom or From Fear?", text: "Not all accommodation is people-pleasing, and not all limits are healthy. The diagnostic question is: if I knew this person would not be angry or disappointed with me, would I still say yes? If the answer is no — if you would say no to someone who couldn't punish you with disapproval — then the yes you're giving is compliance, not service. This self-examination does not make all compliance wrong. It makes the motivation visible so you can choose from clarity." },
  { icon: "🙏", title: "Practice Daily Reorientation Toward God as Primary Audience", text: "The fear of man is displaced by the fear of God — but only in practice, not in theory. A daily practice of prayer that specifically reorients you toward God as your primary audience — 'I live before you, not before them' — trains the soul over time. Psalm 27:1: 'The Lord is my light and my salvation — whom shall I fear?' This is not a claim that human relationships don't matter. It is a claim about the hierarchy: God's opinion is ultimate; human opinions are derivative." },
  { icon: "💬", title: "Name the Conflict You've Been Avoiding — and Choose One to Enter", text: "People-pleasers typically have a backlog of avoided conflicts: conversations they haven't had, limits they haven't set, honest opinions they haven't shared. The recovery is gradual: choosing one specific conflict to enter, with appropriate support and preparation, and doing it. The discovery that conflict does not destroy the relationship, that honest refusal does not end love, and that people respect what they have to work to obtain — these are the experiential corrections that change the pattern." },
];

const scriptures = [
  { verse: "Proverbs 29:25", text: "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe." },
  { verse: "Galatians 1:10", text: "Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ." },
  { verse: "Matthew 3:17", text: "And a voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.'" },
  { verse: "John 5:44", text: "How can you believe since you accept glory from one another but do not seek the glory that comes from the only God?" },
  { verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." },
  { verse: "Acts 5:29", text: "Peter and the other apostles replied: 'We must obey God rather than human beings!'" },
];

type PPEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PeoplePleasingPage() {
  const [tab, setTab] = useState("theology");
  const [ppJournal, setPpJournal] = useState<PPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_peoplepleasing_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_peoplepleasing_entries", JSON.stringify(ppJournal)); } catch {}
  }, [ppJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPpJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setPpJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Soul Formation &amp; Identity</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>People-Pleasing</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          When the fear of disapproval controls your choices — the theology of approval-seeking, the practice of limits, and the freedom of living before an audience of One.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GREEN : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="Where am I saying yes from fear rather than from freedom right now?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What does God's declaration of my belovedness say to this need for approval?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One specific no or limit I will practice this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {ppJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : ppJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Pattern:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Truth:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Practice:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "psN1DORYYV0", title: "The Gift of Imperfection — Brené Brown", channel: "TED / Brené Brown", description: "Brown's research on wholehearted living — including the approval-seeking and people-pleasing that wholehearted people practice letting go of. The most widely watched secular treatment of this topic." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Living Before an Audience of One", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God inverts the approval economy of human relationships — the theological foundation for freedom from people-pleasing." },
              { videoId: "4yRlBMcNNjY", title: "The Soul of Shame and Approval-Seeking", channel: "Curt Thompson", description: "Thompson integrates interpersonal neurobiology and biblical theology to explain why approval-seeking is so deeply embedded and what the neurological and spiritual healing process looks like." },
              { videoId: "mC-zw0zCCtg", title: "Praying Through the Fear of Man", channel: "Tim Keller / The Bible Project", description: "Keller on praying honestly through the fears that drive people-pleasing — including the fear of rejection, conflict, and disapproval — and how honest prayer reorients toward God as the primary audience." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
