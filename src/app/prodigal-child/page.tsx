"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Father Ran While the Son Was Still a Long Way Off", verse: "Luke 15:20", text: "Jesus did not tell us what the father did while he was waiting. The story skips to the son's return. But the detail that the father saw him while he was still a long way off — and ran — suggests the father had been watching. Watching is not controlling. It is the posture of sustained, patient love that refuses to give up on the person who has gone. If you are a parent watching the road for a child who has walked away, you are doing something the father in Jesus's parable did." },
  { title: "God Also Knows the Grief of a Child Who Has Turned Away", verse: "Isaiah 1:2", text: "I reared children and brought them up, but they have rebelled against me. These are God's words about Israel. The creator of the universe has known the specific grief of a child who was given everything and chose to walk away. Your grief does not embarrass God. He has walked this road too. And the story does not end with the child's rebellion — Israel returns, the prodigal returns, the far country is never the last word." },
  { title: "Your Child's Faith Is Not Yours to Control", verse: "Proverbs 22:6", text: "Train up a child in the way he should go; even when he is old he will not depart from it. This verse is a generalization, not a guarantee — Proverbs operates in the genre of wisdom observations, not unconditional promises. Parents who raised their children faithfully can also have children who walk away. This is not a verdict on your parenting. Faith cannot be inherited by force of will, and your child's choices, however painful, are ultimately between them and God." },
  { title: "Intercession Is the Faithful Response", verse: "1 Samuel 12:23", text: "As for me, far be it from me that I should sin against the Lord by failing to pray for you. Samuel's words to Israel imply that ceasing to pray for someone is a form of sin. For parents of prodigal children, prayer is both the most and the least you can do. It holds the space between your incapacity to change them and God's capacity. Many parents have prayed for decades. Some saw return; some did not. The praying itself is faithfulness, not a transaction." },
  { title: "Love Without Enabling Is the Hard Middle Road", verse: "Luke 15:14", text: "After he had spent everything, there was a severe famine in that whole country, and he began to be in need. The father did not follow his son to the far country and fund his lifestyle. He let him go. He let him experience want. He did not rescue him from consequences. And the son came to himself in the midst of the consequences, not in spite of them. Loving a prodigal child can require letting them face what their choices produce — not because you don't love them, but because you do." },
];

const voices = [
  { id: "jb", name: "James Bryan Smith", role: "Author, The Good and Beautiful God", quote: "There is no parent of a prodigal who has not wondered whether something they did or failed to do sent their child away. But we are not that powerful. People make choices. God works with choices. And the story is rarely over when it looks like it is.", bio: "Smith's work in the Apprentice Series addresses the distorted narratives we carry about God and ourselves. His pastoral sensitivity to parents of prodigal children comes from years of counseling people in exactly this pain." },
  { id: "rc", name: "Ruth Chou Simons", role: "Author, Beholding and Becoming", quote: "Praying for your prodigal is not weakness — it is the declaration that you believe God is still working in a story that has gone beyond your reach. Every prayer for a wandering child is an act of hope rooted in who God is, not what you can see.", bio: "Simons writes with particular pastoral depth about waiting, hope, and the discipline of trusting God with outcomes you cannot control. Her work resonates especially with parents whose children have walked away from faith." },
  { id: "ps", name: "Paul David Tripp", role: "Author, Parenting: 14 Gospel Principles", quote: "Every parent of a prodigal child needs to hear this: you are not your child's savior. You were never meant to be. Your job was to introduce them to the Savior. What they do with that introduction is between them and God — and God is remarkably patient with long journeys home.", bio: "Tripp's parenting theology is grounded in the gospel rather than behavior management. His work helps parents of prodigal children distinguish their responsibility from God's, releasing the suffocating weight of trying to do what only God can do." },
];

const practices = [
  { icon: "🕊️", title: "Keep the Door Open — But Set Limits on What Comes Through It", text: "Keeping the door open means the relationship is still available — that your child knows they can come home, that you have not cut them off or written them out of your life. It does not mean enabling destructive behavior, tolerating abuse, or pretending you have no values. The prodigal's father welcomed his son back with a feast. He did not pre-fund another trip to the far country. Loving an adult prodigal child means maintaining the relationship while maintaining your integrity." },
  { icon: "🙏", title: "Pray Specifically and Persistently — Without Bargaining", text: "Prayer for a prodigal child is not a transaction: I will pray hard enough and long enough and God will produce the outcome I want. It is an act of surrender — placing your child in God's hands because they are too far from yours. Pray specifically: name the experiences, relationships, and moments you believe God might use to reach them. Pray persistently: do not give up because nothing seems to be happening. And pray without bargaining: God's timing and methods are not yours to dictate." },
  { icon: "🤝", title: "Find Community with Other Parents of Prodigals", text: "The specific grief of having a prodigal child is not well understood by those who have not experienced it. Find community with parents who are in or have been through similar situations — through groups like Prodigal Families (prodigalchurch.org), focus groups at churches with pastoral counseling, or online communities. The testimony of parents whose prodigal children came home — sometimes after years or decades — is one of the most sustaining things available." },
  { icon: "💬", title: "Get Pastoral or Professional Support for Yourself", text: "Parents of prodigal children carry grief, guilt, and chronic anxiety that can be genuinely debilitating. This is worth tending to professionally — not just spiritually. A therapist or pastoral counselor can help you distinguish your guilt from appropriate grief, your responsibility from your child's, and the places where you need to set limits for your own health. Many parents of prodigals pour everything into trying to reach their child while their own souls go untended." },
  { icon: "📖", title: "Keep Living and Investing in Your Own Relationship With God", text: "Many parents of prodigal children experience a kind of secondary estrangement from God — anger, doubt, or numbness about a God who could reach their child but seems not to be. These feelings deserve to be expressed honestly. But underneath them is the continued invitation to your own faith and your own life. Do not let your child's wandering become the reason you stop growing, serving, or pursuing God. Your faith is your own — and it is also the ongoing testimony your child may someday return to." },
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Isaiah 49:15-16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "Jeremiah 31:3", text: "I have loved you with an everlasting love; I have drawn you with unfailing kindness." },
  { verse: "Romans 8:38-39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "1 Peter 5:7", text: "Cast all your anxiety on him because he cares for you." },
];

type PCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ProdigalChildPage() {
  const [tab, setTab] = useState("theology");
  const [pcJournal, setPcJournal] = useState<PCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_prodigalchildj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_prodigalchildj_entries", JSON.stringify(pcJournal)); } catch {}
  }, [pcJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPcJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPcJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Family & Faith</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Parenting a Prodigal Child</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For parents whose children have walked away from faith, the family, or a healthy life — the long waiting and the open door.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Parent Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where is my child right now, and what am I carrying about it today?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What do I know is true about God and about my child that I can hold onto?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One way I will pray for my child this week — specific, not general</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {pcJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {pcJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Carrying: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Truth: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Prayer: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "NnGBhG03g4M", title: "Praying for Your Prodigal Child", channel: "Brennan Manning", description: "Manning on the grace that sustains parents while a child wanders — the posture of watching and waiting, the theology of unconditional love, and how to pray honestly without controlling the outcome." },
              { videoId: "j2h-q3ZPKFI", title: "When Your Child Walks Away from Faith", channel: "Focus on the Family", description: "Practical and pastoral guidance for parents navigating a child's departure from faith — what to do, what not to do, how to stay connected, and how to maintain love without conditions." },
              { videoId: "Hq1t7kMjXAY", title: "The Parable of the Prodigal Son", channel: "Tim Keller / Gospel in Life", description: "Keller's extended exposition of Luke 15 — including the often-overlooked older brother — exploring what the parable reveals about grace, welcome, and the posture of the watching Father." },
              { videoId: "LQNbUqVwVlo", title: "Hope for Parents of Prodigals", channel: "The Gospel Coalition", description: "Stories and theological reflection from parents who have walked the long road of loving a prodigal — what sustained them, what surprised them, and what they wish they had known." },
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
