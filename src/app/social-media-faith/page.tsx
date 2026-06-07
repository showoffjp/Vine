"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Attention Is a Spiritual Category — What We Gaze Upon Forms Us", verse: "Psalm 101:3", text: "I will not look with approval on anything that is vile. The psalmist's vow concerns what he will and will not place before his eyes — recognizing that what we attend to shapes who we become. The attention economy of social media is the most powerful shaping force most Christians encounter daily, and most have no theological framework for it. What you scroll through is forming you. The question is not whether your feed is shaping your soul but which direction." },
  { title: "The Body Is a Temple — Including the Brain That Scrolls It", verse: "1 Corinthians 6:19-20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies. The body that Paul calls a temple includes the nervous system, the dopamine circuitry, the attention systems, the stress response. A body-theology that does not address what we do with those systems is incomplete. Honoring God with your body includes making intentional choices about what you feed your brain's reward circuitry." },
  { title: "The Comparison Engine of Social Media Feeds the Sin of Envy", verse: "Galatians 5:26", text: "Let us not become conceited, provoking and envying each other. Paul's warning in Galatians comes immediately after his description of the Spirit's fruit — and in sharp contrast to it. Social media is structurally optimized to produce comparison: carefully curated presentations of others' best moments, delivered in a format that invites constant evaluation of your standing relative to others. The envy that Paul warns against is not a personal failing in the social media age — it is the designed output of the platform. Fighting it requires more than willpower." },
  { title: "Silence and Solitude Are Spiritual Disciplines That Screens Disrupt", verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed. Jesus' spiritual practice was specific: solitary, silent, away. The formation that happens in silence and solitude is different from the formation that happens in noise and stimulation. Digital devices have made silence and solitude increasingly rare — available in principle but rarely chosen in practice. The Christian who has lost the capacity for sustained silent prayer has often lost it to the scroll." },
  { title: "Community Online Is Not a Substitute for Embodied Community", verse: "Hebrews 10:25", text: "Not giving up meeting together, as some are in the habit of doing, but encouraging one another. The writer to the Hebrews could not have anticipated digital community, but his concern is specific: gathering, meeting together, embodied presence with one another. Digital community is not nothing — it can connect, encourage, and support. But it is a different thing from embodied meeting, and the research on loneliness, mental health, and belonging consistently shows that digital community does not produce the same outcomes as physical presence." },
];

const voices = [
  { id: "ac", name: "Andy Crouch", role: "Author, The Life We're Looking For; Tech and Culture Critic", quote: "Smartphones have become a replacement for the kind of resting, playing, and simple being that once filled unstructured time. We have reduced human consciousness to a stream of stimulation, optimized by algorithms that know more about our psychological vulnerabilities than we do. The spiritual practices that restore genuine humanness must be intentionally chosen against the grain of the machine that would prefer to keep our attention monetized.", bio: "Crouch's cultural analysis of technology and human flourishing is the most theologically rich available. His concept of superhumanizing and subhumanizing technologies helps Christians evaluate digital tools against a vision of what flourishing humans actually look like." },
  { id: "tj", name: "Tony Reinke", role: "Author, 12 Ways Your Phone Is Changing You; Desiring God", quote: "The phone is not neutral. It is not merely a tool we use. It is a discipleship device — one that is discipling us toward distraction, comparison, outrage, and superficiality unless we bring deliberate counterdiscipleship to it. The question is not whether to use it but how to use it in a way that leaves you more formed by Christ than by the algorithm.", bio: "Reinke's treatment of smartphones and spiritual formation is the most practically useful Christian resource in this space. His twelve diagnostic categories — approval-seeking, comparison, distraction, outrage, etc. — give readers a framework for honest self-assessment of what their phone use is actually doing to their soul." },
  { id: "jh", name: "Johann Hari", role: "Author, Stolen Focus", quote: "Our attention is not being spoiled — it is being harvested. The business model of every major social platform is the conversion of your attention into advertising revenue. The more of your attention they have, the more they earn. Every design decision — infinite scroll, notification defaults, algorithmic amplification of outrage — is optimized for attention capture, not human flourishing. Understanding this is not paranoia; it is accurate.", bio: "Hari's research on the attention crisis provides the secular counterpart to the theological analysis. His documentation of how deliberate design choices have degraded human attention capacity — and the specific mechanisms by which they work — equips Christians with an accurate picture of what they are actually managing when they manage their digital life." },
];

const practices = [
  { icon: "📵", title: "Design Your Phone for Depth, Not Habit", text: "The default smartphone configuration is optimized for engagement, not for your wellbeing. Practical reconfiguration: turn off all social media notifications; remove social media apps from your home screen (requiring deliberate navigation to access them); set screen time limits before you need them; use grayscale mode which reduces the dopamine reward of bright, colorful feeds. These structural changes reduce the pull of habitual checking and require intention rather than impulse for engagement." },
  { icon: "⏰", title: "Create Phone-Free Zones and Times", text: "Specific practices with documented impact: no phone in the bedroom (sleep is significantly disrupted by phone proximity even when not in use); no phone at meals; a morning quiet time with Scripture and prayer before picking up the phone; a Sabbath pattern of reduced or absent screen use. The key insight: willpower applied to a phone in your hand has a very poor success rate. Distance and time-boundary do most of the work." },
  { icon: "🙏", title: "Practice Silence Before Scrolling", text: "Consider a simple rule: before opening any social media, spend at least 5 minutes in silence — no words, no input, just presence. This is not primarily about the length of the silence but about the training of the capacity for inner quiet that constant digital stimulation erodes. The Christian who can sit in five minutes of silence before the Lord is better positioned for genuine prayer than the one who reaches for the phone as the first act of consciousness each day." },
  { icon: "👁️", title: "Conduct a Monthly Feed Audit", text: "Periodically reviewing who and what you follow — and asking honest questions about what following them does to you — is a form of intentional attention stewardship. Questions: Does following this account leave me feeling more grateful or more envious? More informed or more outraged? More drawn toward God or further away? More connected or more anxious? The audit does not require quitting platforms — it requires curating them with your own wellbeing and formation as the criterion, rather than entertainment or information volume." },
  { icon: "✝️", title: "Recover the Practice of Sustained Reading", text: "The capacity for deep, sustained attention is the neurological precondition for the kind of Bible reading, prayer, and theological formation that Christian maturity requires. That capacity is directly degraded by heavy social media use. Recovering it requires deliberate practice: reading physical books (not ebooks, which invite tab-switching), reading chapters at a time without pausing, setting aside periods for undistracted engagement with God's word. This is not asceticism — it is the maintenance of the cognitive infrastructure that formation requires." },
];

const scriptures = [
  { verse: "Psalm 101:3", text: "I will not look with approval on anything that is vile. I hate what faithless people do; I will have no part in it." },
  { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is — his good, pleasing and perfect will." },
  { verse: "Philippians 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things." },
  { verse: "Mark 1:35", text: "Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed." },
  { verse: "Colossians 3:2", text: "Set your minds on things above, not on earthly things." },
  { verse: "1 Corinthians 10:31", text: "So whether you eat or drink or whatever you do, do it all for the glory of God." },
];

type SMEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SocialMediaFaithPage() {
  const [tab, setTab] = useState("theology");
  const [smJournal, setSmJournal] = useState<SMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_socialmediafaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_socialmediafaithj_entries", JSON.stringify(smJournal)); } catch {}
  }, [smJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSmJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setSmJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Technology &amp; Soul Formation</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Social Media &amp; Faith</h1>
        <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Navigating the attention economy as a Christian — theology of technology, formation in the digital age, and practical disciplines for a phone-shaped world.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? PURPLE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
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
                <div style={{ color: PURPLE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
              <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <textarea placeholder="How does my phone use affect my soul? What does it do to me?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="What kind of person do I want my digital habits to be forming me into?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea placeholder="One structural change I will make to my phone this week" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {smJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : smJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Observation:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Vision:</strong> {e.truth}</p>}
                {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Change:</strong> {e.step}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "dQl4izxPeNU", title: "The Social Dilemma — Tristan Harris", channel: "Netflix / The Social Dilemma", description: "Former Google design ethicist Tristan Harris explains how social media platforms are designed to capture and monetize attention — the clearest secular explanation of what Christians are navigating when they manage their digital lives." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Technology and Status", channel: "Tim Keller / The Gospel Coalition", description: "Keller on how the Kingdom of God inverts the world's status games — including the follower counts, likes, and curated identities that social media makes central to selfhood." },
              { videoId: "psN1DORYYV0", title: "The Comparison Trap — Brené Brown", channel: "TED / Brené Brown", description: "Brown on how comparison and shame drive social media use and what wholehearted living looks like as an alternative — the psychological counterpart to the theological analysis." },
              { videoId: "t6L-F2emwUc", title: "Joy, Silence, and the Formation of the Soul", channel: "Desiring God", description: "Piper on how joy in God — cultivated in silence, solitude, and sustained attention — is the spiritual alternative to the stimulation-seeking that drives excessive social media use." },
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
