"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Your Identity Was Never Your Title", verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God. Paul addresses the fundamental Christian claim about identity: it is located not in role, achievement, or social position but in union with Christ. The CEO who retires, the pastor who steps down, the teacher who leaves the classroom — none of them loses who they are, because who they are is not determined by what they do. This is theology that sounds simple and cuts very deep when it is actually tested." },
  { title: "Vocation Was Never Synonymous With Occupation", verse: "Colossians 3:23", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. This verse does not say 'whatever job you hold.' It says whatever you do. Vocation — the calling to glorify God and serve others — does not retire. The how changes. The what changes. The who called you to it and the why remain identical. Retirement is not the end of calling; it is the restructuring of its expression." },
  { title: "The Later Years Are Not Diminishment — They Are Different", verse: "Psalm 92:12-14", text: "The righteous will flourish like a palm tree, they will grow like a cedar of Lebanon; planted in the house of the Lord, they will flourish in the courts of our God. They will still bear fruit in old age, they will stay fresh and green. This Psalm explicitly rejects the idea that late life is only decline. The imagery is of a tree that has been growing for decades — the maturity and depth are exactly what produce the most substantial fruit." },
  { title: "Rest Is Not Laziness — It Is Participation in God's Rhythm", verse: "Genesis 2:2", text: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. God rested not because he was depleted but because rest was part of the creative order. For people who have spent decades defining themselves by productivity, learning to receive rest as participation in a divine pattern rather than failure to perform is a profound spiritual task. Retirement can be the vocation of learning to rest well." },
  { title: "Wisdom Carries Its Own Weight and Calling", verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness. The cultural devaluation of older adults is not a biblical value. The crown metaphor insists that accumulated wisdom, experience, and faithfulness are achievements — not diminishments. The calling to transmit wisdom to the next generation is a vocation that intensifies in later life, not one that retirement eliminates." },
];

const voices = [
  { id: "v1", name: "Eugene Peterson", role: "Author of A Long Obedience in the Same Direction, The Message, longtime pastor", quote: "I had been a pastor for decades. When I retired, I expected wisdom. I got disorientation. The wisdom came after I stopped expecting retirement to feel like what I thought it would.", bio: "Eugene Peterson wrote and spoke extensively about the spiritual dimensions of aging and the reordering that comes in later life. His willingness to be honest about the disorientation of retirement — even for a man who had thought deeply about vocation — has been formative for many Christian leaders navigating the transition." },
  { id: "v2", name: "Gordon MacDonald", role: "Author of Ordering Your Private World, senior pastor emeritus", quote: "The question in retirement is not 'what will I do?' It is 'who am I when I stop doing what defined me?' Most people in ministry never answer that question until they are forced to. Then it is urgent.", bio: "Gordon MacDonald has written and spoken about the interior work of retirement for people whose identities were formed around ministry or professional achievement. His work on the private self versus the public self is particularly relevant for people who discover in retirement that they do not know who they are when no one is watching or applauding." },
  { id: "v3", name: "Henri Nouwen", role: "Author of The Road to Daybreak, Reaching Out, spiritual director", quote: "The spiritual life is not a career. It does not have a peak year and a decline. It has depths that only become available as you are stripped of what you thought was essential to who you were.", bio: "Henri Nouwen left Harvard Divinity School at the height of his career to live with people with intellectual disabilities at L'Arche. His experience of voluntary marginalization and the spiritual stripping it required is a profound resource for anyone navigating the involuntary marginalization that retirement can feel like." },
  { id: "v4", name: "Richard Rohr", role: "Franciscan friar, author of Falling Upward: A Spirituality for the Two Halves of Life", quote: "The second half of life is not the same task as the first half done more slowly. It is a different task entirely — and most of our religion only prepares us for the first half.", bio: "Richard Rohr's Falling Upward distinguishes between the first half of life (building identity, achievement, success) and the second half (finding depth, meaning, and grace). His framework has given language to millions of people who discover in retirement that the container they built no longer seems adequate to hold the life they have lived." },
];

const practices = [
  { icon: "🔍", title: "Name Who You Were Before Your Career Defined You", text: "Before the career, there was a person. What did you love before you became what you did? What curiosities, passions, or values existed before you found a job to express them? Retirement is sometimes an invitation to reclaim what professional identity had displaced. This is not trivial self-discovery; it is recovering the person God made before the institution shaped you." },
  { icon: "📖", title: "Develop a Daily Office or Rule of Life", text: "The structure of working life provides a framework for each day. Retirement removes that structure and offers an unformatted canvas. Without intentional replacement, many people find retirement is not freedom but formlessness. A rule of life — a daily pattern of prayer, reading, service, rest, and connection — provides structure that is internally generated rather than externally imposed." },
  { icon: "🤝", title: "Become a Mentor", text: "The most underutilized resource in most churches is the accumulated wisdom of retired members. Mentoring — formally or informally — gives the accumulated experience of a career a new venue. It also addresses the loss of significance that retirement can bring: the sense of being needed, of having something to offer, is not manufactured; it is real." },
  { icon: "🏥", title: "Do Not Dismiss Depression as Normal Adjustment", text: "Clinical depression is significantly more common in the first two years after retirement than at earlier life stages. Many people dismiss it as adjustment difficulty and wait for it to resolve. If you are experiencing persistent low mood, loss of interest in activities that formerly brought pleasure, sleep disruption, or thoughts of death, seek clinical help. Retirement-related depression is treatable — and the spiritual dimension alone is insufficient." },
  { icon: "💬", title: "Talk Honestly With Your Spouse About the Transition", text: "Retirement is not just the retiree's transition — it changes the structure of a marriage. Spouses who have built independent daily rhythms over decades suddenly share a space full-time. Honest conversation about expectations, needs for solitude, household responsibilities, and the emotional difficulty of the transition prevents the retirement transition from becoming a marriage crisis." },
  { icon: "✝️", title: "Receive Spiritual Direction During the Transition", text: "A spiritual director — someone trained to accompany people in discernment and interior work — is particularly valuable during major life transitions. The retirement transition asks profound questions about identity, purpose, and mortality that pastoral care alone often cannot hold. The Spiritual Directors International directory (sdicompanions.org) has referrals across traditions." },
];

const scriptures = [
  { verse: "Colossians 3:3", text: "For you died, and your life is now hidden with Christ in God." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green, proclaiming, 'The Lord is upright.'" },
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Philippians 4:11", text: "I have learned, in whatsoever state I am, therewith to be content. I know both how to be abased, and I know how to abound: every where and in all things I am instructed both to be full and to be hungry." },
  { verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
];

type RetirementEntry = { id: string; date: string; loss: string; calling: string; gift: string };

export default function RetirementIdentityCrisisPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RetirementEntry[]>([]);
  const [loss, setLoss] = useState(""), [calling, setCalling] = useState(""), [gift, setGift] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_retirementidentityj_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!loss.trim()) return;
    const e: RetirementEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), loss: loss.trim(), calling: calling.trim(), gift: gift.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_retirementidentityj_entries", JSON.stringify(updated));
    setLoss(""); setCalling(""); setGift("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_retirementidentityj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: GREEN, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Retirement and Identity Crisis</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those who have stopped doing what defined them and are discovering they do not know who they are without it — and for the church that is called to help them find out.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: GREEN }}>Support:</strong> 988 Lifeline (call/text 988) &nbsp;|&nbsp; Spiritual Directors International: sdicompanions.org</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you most miss about your working years?</label>
              <textarea value={loss} onChange={e => setLoss(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Be specific — not just the title but what it gave you..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What calling or interest feels alive in you that your career may have crowded out?</label>
              <textarea value={calling} onChange={e => setCalling(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What wants to grow now..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What wisdom do you carry that someone younger needs?</label>
              <textarea value={gift} onChange={e => setGift(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="What do you know that took decades to learn..." />
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: GREEN }}>Loss:</strong> {e.loss}</p>
                {e.calling && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Calling:</strong> {e.calling}</p>}
                {e.gift && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Wisdom:</strong> {e.gift}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "SqGRnlXplx0", title: "The Rest of God", channel: "Eugene Peterson — Regent College", description: "Peterson on Sabbath, rest, and the spiritual formation that happens when we stop producing — essential theology for those navigating retirement as a spiritual transition." },
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom", channel: "Timothy Keller", description: "Keller on the kingdom's inversion of achievement and status — the theological framework that allows retirement to be received as vocation rather than diminishment." },
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality", channel: "Peter Scazzero", description: "Scazzero on the interior work that often gets deferred during high-productivity seasons and becomes the primary spiritual work of later life." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on God's sovereignty over every season of life — including seasons that feel like loss or diminishment — and the peace that theology makes available." },
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
